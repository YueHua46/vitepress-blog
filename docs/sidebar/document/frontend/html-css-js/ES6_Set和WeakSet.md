# Set与WeakSet
## Set的使用
### Set的特征

1. **set实例是值得集合，存储值得方式类似数组Array（只有value）**

   ```typescript
   const set = new Set()
   set.add(1) // {1} // add是set实例得方法，能够给set实例添加值
   set.add(2) // {1,2}
   ```

2. **new一个Set实例时所传递得参数只能是数组或字符串**

   ```typescript
   const set = new Set({}) // error
   const set = new Set(123) // error
   const set = new Set([1,2,3]) // pass
   const arr = [1,2,3]
   const set = new Set(arr) // pass
   console.log(set) // {1,2,3}
   ```

   ​	注意，如果传入的参数不是一个数组，而是字符串，他是允许通过的，实际上他会将字符串拆分为单个的字符，然后当作实例的每个值

   ```typescript
   const set = new Set("123")
   console.log(set) // {"1","2","3"}
   ```

3. **Set所存储的数据不能够重复**

   ```typescript
   const set = new Set()
   set.add(1)
   set.add(1)
   console.log(set) // { 1 }
   ```

   ​	可以看到，我们创建了一个set实例，并通过set实例的方法add为该实例添加了数值1，然后又添加了数值1。这时因为set存储的数据不能够重复，所以我们只能看到一个数值1，但是如果是数组，便允许拥有重复得值，这是一个区别：

   ```typescript
   const arr = [1,1,1]
   console.log(arr) // [1,1,1]
   ```

​			ps:可利用该特性实现数组去重

### set实例的属性和方法

1. **add方法**

   ​    add方法能够为set对象添加单个值

   ```typescript
   const set = new Set()
   set.add(1)
   set.add(2)
   console.log(set) // { 1, 2 }
   ```

2. **size属性**

   ​    size属性可以获得set对象的长度，等同于数组的length属性

   ```typescript
   const set = new Set([1,2,3,4,5])
   console.log(set.size) // 5
   ```

3. **has方法**

   ​    has方法能够检测是否含有某个值，返回值为布尔值，true代表存在该值，false代表不存在

   ```typescript
   const set = new Set([1,2,3])
   set.has(2) // true
   set.has(4) // false
   ```

4. **delete方法**

   ​    delete方法能够删除单个值，返回值为布尔值，true代表删除成功，false代表删除失败

   ```typescript
   const set = new Set(["hello","world"])
   set.delete("hello") // true
   ```

5. **clear方法**

   ​    clear方法能够删除set实例的所有值

   ```typescript
   const set = new Set([1,2,3,4])
   set.clear() // {}
   ```

6. **values和keys方法**

   ​	values和keys方法在set实例上是完全相等得，keys是values方法得别名。两者都是返回当前实例拥有的所有值

   ```typescript
   const set = new Set(['hello','world'])
   set.valuse() // {'hello','world'}
   set.keys() // {'hello','world'}
   ```

7. **entries方法**

   ​    entries方法能够返回set对象中所有值，并按照插入顺序自动排序，该返回值是一个类似map对象结构的可迭代对象（键值对结构），不过entries对象的每个值都是[value,value]的结构，而非[key,value]的结构。这是因为在set实例中，本身并不存在key，**只是为了和map保持一致**，所以才会这样。

   ```typescript
   const set = new Set([1,2,3])
   set.add(4)
   set.add(5)
   set.delete(4)
   set.entries()
   /*
   	0: {1 => 1}
       1: {2 => 2}
       2: {3 => 3}
       3: {5 => 5}
   */
   ```

8. **forEach方法**

   ​    forEach方法能够循环遍历set中的每个value，因为set对象没有key，所以实际上在参数的值上和普通对象的forEach不同，set对象的value和key，实际上都是相同的value（这都是为了统一）。

   ```typescript
   const set = new Set([1,2,3])
   set.forEach(function(value,key,set){
       console.log(value,key)
       /*
       	1 1
       	2 2
       	3 3
       */
   })
   ```

9. **使用for-of遍历set对象**

   ```typescript
   const set = new Set([1,2,3])
   for(const value of set){
       console.log(value)
       /*
       	1
       	2
       	3
       */
   }
   ```

## WeakSet的使用

​    是Set的扩展类型，他和Set相似，不同点在于**WeakSet只能接收引用类型的值**。并且值得注意的是，**存储在WeakSet实例中的引用值他是弱引用的**，这是WeakSet中非常值得注意的特性。正是因为WeakSet存储的引用值是弱引用，所以WeakSet 是不可枚举的。

```typescript
const ws = new WeakSet(['123','456']) // error
```

​	这里会报错是因为，WeakSet会把该数组中每个值通过add方法添加，那么实际上这相当于给ws添加一个基础值，那么就会发生报错。

WeakSet只拥有以下方法，使用方式和set相同：

add，delete，has

```typescript
const ws = new WeakSet()
const foo = {}
const bar = {}
ws.add(foo)
ws.add(bar)
ws.delete(foo) // true
ws.has(foo) // false
```