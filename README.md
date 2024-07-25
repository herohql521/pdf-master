## pdf-masterv.js

由Mozilla PDF提供的核心功能支持的Vue组件，使用Vue2语言开发。

## 演示

[DEMO](https://herohql521.github.io/pdf-master/dist/index.html)

## 功能

* 支持PDF全部文档加载
* 支持PDF单页加载，通过页码翻页
* 支持适配容器大小和自定义缩放
* 支持只读模式（无法复制）
* 支持文档搜索功能
* 支持关键词全部高亮
* 支持指定页码跳转及页码变换监听
* 支持文档加载完成监听
* 支持目录提取

## 安装

```
npm install pdf-masterv
```


## 使用

全局注册

```js
//main.js 
import pdfMasterv from 'pdf-masterv'
import 'pdf-masterv/lib/pdf-masterv.css'
Vue.use(pdfMasterv)
```

局部注册
```js
import pdfComponent from 'pdf-masterv'
import 'pdf-masterv/lib/pdf-masterv.css'
export default {
  components:{pdfComponent}
}
```


```html
  <pdfComponent ref="pdf" url='http://xxx/test.pdf' scale="1" :textMode="1" :singlePage="false"></pdfComponent>
```

## 文档

### Attributes

| 参数       | 说明                                                         | 类型            | 可选值                                                       | 默认值 |
| :--------- | :----------------------------------------------------------- | :-------------- | :----------------------------------------------------------- | :----- |
| url        | pdf地址                                                      | string          | —                                                            | —      |
| scale      | 设置缩放                                                     | string \|number | 'auto': 自动缩放到适合容器的大小。<br/>'page-fit': 缩放到页面适合容器的大小。<br/>'page-width': 缩放到页面宽度适合容器的大小。 | 1      |
| textMode   | 文本模式，可以设置只读模式0（不能复制），1显示文本层（可复制） | number          | 0/1                                                          | 1      |
| singlePage | 单页模式，接收布尔值，控制显示pdf的单页显示，false则显示所有页面 | boolean         |                                                              | false  |
|            |                                                              |                 |                                                              |        |

###  Methods

| 方法名       | 说明                                                         | 参数                                |
| :----------- | :----------------------------------------------------------- | :---------------------------------- |
| loaded       | 监听pdf加载完成的回调,接收参数state:{numPages,curPageNum} 总页数、当前页码 | Function(callback: Function(state)) |
| pageChange   | 监听pdf页码变化，参数state:{numPages,curPageNum} 总页数、当前页码。包括滚动条页面浏览，单页模式跳转均可监听变化。 | Function(callback: Function(state)) |
| pdfFindAgain | 实例方法，短语逐个查找                                       | keyword                             |
| pdfFindAll   | 实例方法，高亮所有查找的短语                                 | keyword                             |
| getOutLine   | 实例方法，获取pdf目录，返回outline  {title:'章节名称'，pageNumber:'所在pdf中的页码'} | Function(outline))                  |
| pageGo       | 实例方法，跳转指定页码。this.$refs.pdf.pageGo(num)           | number                              |

## 打赏支持

如果项目帮到了你可以请作者喝杯咖啡

​	![img](https://herohql521.github.io/blog2022/assets/img/1.f2445af8.jpg)

#### 打赏50及以上可向作者索要源码（仅限自己项目使用，不能开源）

打赏的朋友欢迎添加微信，交流遇到的问题。

​	![img](https://herohql521.github.io/blog2022/assets/img/2.421c4869.jpg)

