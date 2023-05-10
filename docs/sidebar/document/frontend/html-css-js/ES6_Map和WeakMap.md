# WeakMap和Map
## Map类型

Map是ES6新增的引用类型

### Map特点：

1. Map类型的值都是以键值对的形式存储

   ```typescript
   let map = new Map([['name','alex'],['age',19]])
   console.log(map)
   /*
   	'name' => 'alex'
   	'age' => 19
   */
   ```

2. 任何值都可以当作Map类型中的值的key

   ```typescript
   let map = new Map()
   map.set('name','alex')
   map.set(function(){},'fun')
   map.set({},'obj')
   map.set(1,'111')
   ```

   ​	set方法能够为map对象追加一个键值对的值，可以看到，任何值类型都可以作为key。

### Map的属性和方法：

1. set方法

   ​	set方法能够为map对象添加一个键值对结构的数据，键可以是任何类型，这点上与Object类型有很大不同。

   ```typescript
   let map = new Map()
   map.set('name','Alex')
   map.set({},'obj')
   map.set([],'arr')
   ```

2. get方法

   ​	get方法能够通过key获取map对象中指定的值，如果key是引用类型，则key必须是该key的引用地址，即使他们看起来一样。

   ```typescript
   let map = new Map()
   map.set('name','alex')
   const obj = {}
   map.set(obj,'obj')
   map.get('name') // 'alex'
   map.get(obj) // 'obj'
   map.get({}) // 错误
   ```

3. delete方法

   ​    delete方法通过传递一个指定key，可以删除该map对象中该key的键值对，删除成功则返回true，否则返回false

   ```typescript
   let map = new Map()
   const obj = {}
   map.set('name','alex')
   map.set(obj,'obj')
   map.delete('name') // true
   map.delete(obj) // true
   map.delete('age') // false，找不到age的这个key
   ```

4. clear方法

   ​    clear方法能够直接删除所有该map对象中所有键值对

   ```typescript
   let map = new Map([['name','alex'],['age',19]])
   console.log(map)
   /*
   	name => alex
   	age => 19
   */
   map.clear()
   console.log(map)// {}
   ```

5. has方法

   ​    has方法能够根据key检测一个指定的键值对是否存在，是则返回true，否则false

   ```typescript
   let map = new Map()
   let obj = {}
   map.set('name','alex')
   map.set(obj,'obj')
   map.has('name') // true
   map.has(obj) // true
   map.has('age') // false
   ```

6. keys方法

   ​    keys方法能够获取当前map实例中所有键值对中的键（key）

   ```typescript
   let map = new Map()
   const obj = {}
   map.set('name','alex')
   mao.set(obj,'obj')
   console.log(map.keys())
   /*
   	"name"
   	obj
   */
   ```

7. values方法

   ​    values方法能够获取当前map实例中所有键所对应的值（value）

   ```typescript
   let map = new Map()
   const obj = {}
   map.set('name','alex')
   mao.set(obj,'obj')
   console.log(map.values())
   /*
   	"alex"
   	'obj'
   */
   ```

8. entries方法

   ​    entries方法能够获取当前map实例中所有的键值对（keyValue）

   ```typescript
   let map = new Map()
   const obj = {}
   map.set('name','alex')
   mao.set(obj,'obj')
   console.log(map.entries())
   /*
   	"name" => "alex"
   	obj => "obj"
   */
   ```

9. forEach方法

   ​    forEach方法能够遍历当前map实例的每一个键值对，形参第一个是值，第二个是键

   ```typescript
   let map = new Map()
   const obj = {}
   map.set('name','alex')
   mao.set(obj,'obj')
   map.forEach((value,key)=>{
       console.log(key,value)
   })
   ```

### Map的其他特殊用法：

1. 获取所有key并转换为数组

   ```typescript
   let map = new Map([['name','alex'],['age',19]])
   const keys = [...map.keys()]
   ```

2. 获取所有的value并转换为数组

   ```typescript
   let map = new Map([['name','alex'],['age',19]])
   const values = [...map.values()]
   ```

3. 获取所有的keyValue并转换为数组

   ```typescript
   let map = new Map([['name','alex'],['age',19]])
   const arrs = [...map]
   ```

4. 使用for-of遍历map对象

   ```typescript
   let map = new Map()
   const obj = {}
   map.set('name','alex')
   mao.set(obj,'obj')
   for(const [key,value] of map.entries()){
       console.log(key,value)
   }
   ```

## WeakMap类型

​	WeakMap和Map的不同点在于WeakMap中的键只能是引用类型，Symbol也不行，并且这个键是弱引用，而值可以是任意的类型。

​	WeakMap并不拥有所有Map拥有的属性或方法，WeakMap实例没有什么属性，并且只拥有以下这些方法：

 	1. `get`，2.`set`，3.`has`，4.`delete`

​	有关强引用和弱引用的相关说明已经单独在另一个文档中说明