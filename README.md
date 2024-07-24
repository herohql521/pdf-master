

## pdf-masterv.js

It is a Vue component supported by PDF provided by Mozilla pdf, developed in the language Vue2, which avoids the deprecation syntax of Vue3 and is therefore suitable for Vue3.



## Getting the Code

```
npm install pdf-masterv
```

## use

main.js

```js
import pdfMasterv from 'pdf-masterv'
import 'pdf-masterv/lib/pdf-masterv.css'
Vue.use(pdfMasterv)
```

```html
  <pdfComponent ref="pdf" url='http://xxx/test.pdf' scale="1" :textMode="1" :singlePage="false"></pdfComponent>
```



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