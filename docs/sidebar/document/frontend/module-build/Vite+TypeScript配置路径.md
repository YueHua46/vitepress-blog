# Vite+TypeScript配置路径别名

​	如果项目是用Vite搭建的，那么如果配置路径别名，两者的config都需要做一些处理，因为：**Vite配置实现**，**TypeScript配置提示**。那么我们接下来就开始配置

## Vite.config.ts配置

```typescript
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import { resolve } from 'path/posix'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:{
      '@':resolve(__dirname,'./src')
    }
  },
})
```

​	关键点在于`resolve.alias`这里，我们使用了path.resolve去通过`__dirname`和`../src`拼接，这样就可以在我们的项目中使用`import '@/xxx'`的方式访问指定路径的模块了！

​	但是，但是这还不算完。这个时候虽然你确确实实能够使用@去快捷访问src路径，但是你会发现在你实际使用时，并没有任何的路径提示！我们身为使用TS开发的~~催逝员~~程序员，怎么能够没有提示呢！于是我们需要去配置tsconfig来帮助我们提示路径！

## tsconfig.json配置

```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue", "vite.config.ts"]
}
```

​	好的，重点来了，我们需要在compilerOptions中配置两个配置，分别是`baseUrl`和`paths`，baseUrl是基本路径，最好填的是项目根目录，一般tsconfig都是在项目根目录，写`.`就行。paths则是解析的路径别名，key是路径的别名，value是数组，代表别名实际的路径，一般像配置这里面这样配置即可。最后一个是`include`配置，需要在最后一行中，把`"vite.config.ts"`也算进去。

​	大功告成，这个时候，我们再去使用的时候，既有路径提示，又有实际的转换实现了！

