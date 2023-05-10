# 如何解决Taro自定义tabbar的各种问题

只需要按照如下步骤操作便可实现一个可正常操作的tabbar

### Step1：在小程序配置文件app.config.js中添加如下配置

```js
 tabBar: {
    "custom": true,
    "backgroundColor": "#FFF",
    list: [{
      "pagePath": "pages/Home/Home",
      "text": "主页"
    }
      , {
      "pagePath": "pages/My/My",
      "text": "我的"
    },
    {
      "pagePath": "pages/Log/Log",
      "text": "日志"
    }]
  },
  usingComponents: { // [!code ++]
  }, // [!code ++]
```

注意：list是你对应的需要作为tabbar的page

### Step2：在src目录下做如下操作

新建一个custom-tab-bar文件夹并写入对应的目录结构

![image-20230425153550999](https://sears-2000.oss-cn-shanghai.aliyuncs.com/images/image-20230425153550999.png)

注意，如果你是js，则要将对应的文件后缀从ts改为js，然后把类型相关的代码删除

#### index.config.ts

```ts
export default {
  component: true,
};
```

#### index.tsx

请自行将state中的参数该为自己项目的配置，以便出现问题

```ts
import { Component } from "react";
import Taro from "@tarojs/taro";
import { CoverView, CoverImage } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  state = {
    selected: 0,
    color: "#BFBFBF",
    selectedColor: "#535459",
    list: [
      {
        pagePath: "/pages/Home/Home",
        selectedIconPath:
          "xxx.png",
        iconPath:
          "xxx.png",
        text: "主页",
      },
      {
        pagePath: "/pages/Log/Log",
        selectedIconPath:
          "xxx.png",
        iconPath:
          "xxx.png",
        text: "日志",
      },
      {
        pagePath: "/pages/My/My",
        selectedIconPath:
          "xxx.png",
        iconPath:
          "xxx.png",
        text: "我的",
      },
    ],
  };

  switchTab(index: number, url: string) {
    this.setSelected(index);
    Taro.switchTab({ url });
  }

  setSelected(idx: number) {
    this.setState({
      selected: idx,
    });
  }

  render() {
    const { list, selected, color, selectedColor } = this.state;

    return (
      <CoverView className="tab-bar">
        <CoverView className="tab-bar-border"></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView
              key={index}
              className="tab-bar-item"
              onClick={this.switchTab.bind(this, index, item.pagePath)}
            >
              <CoverImage
                className="at-icon at-icon-settings"
                src={selected === index ? item.selectedIconPath : item.iconPath}
              />
              <CoverView
                style={{
                  color: selected === index ? selectedColor : color,
                }}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })}
      </CoverView>
    );
  }
}

```

#### index.less

```less
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  // height: 100px;
  padding: 10px 0;
  background: white;
  display: flex;
  height: 79px;
  // padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
  background-color: #f1c40f50;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item cover-image {
  width: 54px;
  height: 54px;
}

.tab-bar-item cover-view {
  font-size: 20px;
}

```

### Step3：在对应的tabbar页中更改active状态以便同步切换状态

例如在Home页我们应该加上这样一段代码：

```tsx
import Taro, { useDidShow } from '@tarojs/taro'
import { useMemo, useState } from 'react'
import './Home.less'
import type CustomTabBar from '../../custom-tab-bar'
import { Swiper, SwiperItem, View, Image, Text } from '@tarojs/components'
import { AtIcon, AtMessage, AtSearchBar } from 'taro-ui'
import Card from '../../../src/components/Card/Card'
import { requestPath } from '../../../src/constant'
import { AtToast } from 'taro-ui'

export default function Home() {
  const page = useMemo(() => Taro.getCurrentInstance().page, []) // [!code ++]
  // 页面初次渲染后 // [!code ++]
  useDidShow(() => { // [!code ++]
    // 当页面初次渲染后（既表示tabbar切换到当前页面） // [!code ++]
    // 便通过tabbar来设置当前选中状态为0以便状态能够正常切换 // [!code ++]
    const tabbar = Taro.getTabBar<CustomTabBar>(page) // [!code ++]
    tabbar?.setSelected(0) // [!code ++]
  }) // [!code ++]
  //其他逻辑代码...
  return (
  	<View>其他模板代码...</View>
  )
    
}

```

请注意 ，tabbar?.setSelected(0)，这里这段代码的值是根据你当前tabbar所在的位置来决定的，tabbar从左到右分别是0,1,2..这样类推，那么home页通常在首页，所以是0，后面则为1...2这样类推

