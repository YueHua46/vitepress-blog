# ShadowDOM

## ShadowDOM是什么元素？

一个完全和**DOMTree**隔离的**ShadowTree**，类似**iframe**的功能，能够创建一个“新的窗口”，当然这里最好理解为模块而不是窗口。这个模块其实和**DOMTree**的结构一样，也是使用Tree结构管理元素，在这个**ShadowTree**中所定义的DOM元素均被称为**ShadowDOM**，它本质就是一个DOM，不过它是Shadow中的DOM，所以叫ShadowDOM。它的功能点和普通DOM一样，特点是和Shadow外界的DOM互不干扰。

## 关键词

**ShadowTree**：和DOMTree相同，所有DOM元素之间结合的所形成的“树结构”。特点是和DOMTree中的元素互不干扰，完全隔离。例style样式等都不共享互不干扰。

**ShadowDOM**：和普通的DOM元素一样，不过因为它们被定义并插入到了ShadowTree中，所以他们是ShadowDOM，其本质还是原先的那个元素的特点。比如通过`createElement('a')`创建的a标签，被插入到ShadowTree中就被称为ShadowDOM，没有失去a标签的特点，链接跳转等功能。

**ShadowRoot**：ShadowDOM的根节点，可以理解为像普通DOM元素的根节点：HTML元素一样。不过它和HTML元素不同，它本身不具备任何特性，只是起到容器作用，根作用。

**ShadowHost**：ShadowHost其实就是一个普通的DOM元素，当我们创建了一个ShadowTree后，需要将它插入到某个页面上的正常的元素，而这个正常的元素就是ShadowHost。一个ShadowHost可以被多个ShadowRoot应用。

![shadow-dom.png (1138×543) (mozit.cloud)](https://media.prod.mdn.mozit.cloud/attachments/2018/01/29/15788/9d23f749f26b93a00f5c2aa72f00e720/shadow-dom.png)

## 完整案例演示：

详细的步骤已经在代码中指出

```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ShadowDOM</title>
    </head>
    <body>
      <!-- 应用由自定义元素+ShadowDOM所构建的自定义元素 -->
      <twitter-button> </twitter-button>
      <div>
        <a href=""><span>Hello World</span></a
          ><br />上方a和span元素不会被shadowDOM中的style样式影响
      </div>
      <script>
        // 定义一个Shadow类，他具备创建一个指定结构的ShadowTree
        class twitterBtn extends HTMLElement {
          constructor() {
            super()
            console.log('这里的this是构造时传递的元素参数，或自定义元素')
            // 1.创建shadowDOM
            let shadowDOM = this.attachShadow({mode: 'open'})
            // 2.创建shadowDOM内部结构
            const a = document.createElement('a')
            const span = document.createElement('span')
            const style = document.createElement('style')
            a.href = 'https://twitter.com/ireaderinokun'
            a.textContent = 'Follow @ireaderinokun'
            span.ariaLabel = 'Twitter icon'

            // 3.创建shadowDOM样式
            style.textContent = `
                  a, span {
                  vertical-align: top;
                  display: inline-block;
                  box-sizing: border-box;
                }

                a {
                    height: 20px;
                    padding: 1px 8px 1px 6px;
                    background-color: #1b95e0;
                    color: #fff;
                    border-radius: 3px;
                    font-weight: 500;
                    font-size: 11px;
                    font-family:'Helvetica Neue', Arial, sans-serif;
                    line-height: 18px;
                    text-decoration: none;
                }

                a:hover {  background-color: #0c7abf; }

                span {
                    position: relative;
                    top: 2px;
                    width: 14px;
                    height: 14px;
                    margin-right: 3px;
                    background: transparent 0 0 no-repeat;
                    background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E);
                }
                ;
                `

            // 4.将结构插入到shadow中
            a.append(span)
            shadowDOM.append(style)
            shadowDOM.append(a)
          }
        }
        // 5.将shadow注册到twitter-button自定义元素上
        customElements.define('twitter-button', twitterBtn)
      </script>
    </body>
  </html>

```