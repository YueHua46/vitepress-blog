# 图片懒加载

## 图片懒加载是什么？

​	图片懒加载其实就是当用户滑动到指定图片位置时，才会进行请求图片资源的一个操作。这样做的目的可以有效地减缓页面初始化时的效率，用户没有滑动到指定图片时，不会发送请求图片资源。

[![on6EGR.gif](https://z3.ax1x.com/2021/11/28/on6EGR.gif)](https://imgtu.com/i/on6EGR)

## 图片懒加载原理？

​	我们都知道，请求图片资源的http请求是无法手动控制的，当一个img元素拥有一个src属性时，在页面初始化时便会立刻发送请求。所以如果要控制何时发送请求，只可通过初始化时不写入src属性，当指定条件触发时才会为该img元素添加src属性。这样就实现了图片懒加载的基本操作。而我们可以通过为需要懒加载的元素提前设置一个自定义属性，例如：`<img data-src="xxx.jpg"></img>`，然后在图片显示到可视区域时，将该自定义属性的值，设置到该元素的src属性上，便可实现懒加载特性。

## 具体实现步骤：

1. 先获取我们需要懒加载的所有图片元素

   ```javascript
   // 这是我的获取，请根据自己的选择器来获取
   const imgs = document.querySelectorAll('#list>li>img[data-src]')
   ```

2. 创建一个观察实例，并指定观察对象(元素)触发时的回调

   ```javascript
   const obs = new IntersectionObserver(callback)
   ```

3. 循环遍历需要监视的图片元素，然后通过obs实例的observer方法来观察该元素

   ```javascript
   imgs.forEach((img) => {
   // 受到observe监视的元素在能够看到该元素以及从看到至看不到该元素时都会触发一次
       obs.observe(img)
   })
   ```

4. 定义目标元素与观察对象的根相交时（看到元素或从看到到离开时）触发的回调

   ```javascript
   const callback = (entries) => {
       // 回调的参数是一个观察对象集合的数组，即当前触发的所有观察对象
       // 4.1循环遍历观察对象，判断当前观察对象是否在可见区域
       entries.forEach((entrie) => {
         // 通过观察对象的isIntersecting方法判断是否在窗口可见区域
         if (entrie.isIntersecting) {
           /*
              4.2
              当确定观察对象在可见区域，便设置该图片元
              素的src属性值为data-src的值，以达到懒加载特性
           */
           const data_src = entrie.target.getAttribute('data-src')
           const img = entrie.target
           img.setAttribute('src', data_src)
           // 4.3设置完成后已无需观察该元素，那么停止对该元素的观察
           observer.unobserve(img)
         }
       })
     }
   ```

即时，便可实现图片懒加载的特性了。
