# 初学微信小程序

![gif](https://note.youdao.com/yws/public/resource/bfd3e089eeccac24c4a60fb9163eed6e/xmlnote/D6EBAE69342B4A0B85592D46C797B81E/8561)

## 目录结构
- 首页
	- 详情页
- 加入页

## 基础知识点
- **点击事件传值**
> 传统方法click(index)
> 微信小程序无效

> 要用data-xxx="{{index}}"

> 取值
> click(e){e.currentTarget.dataset.index}

![点击事件e](https://note.youdao.com/yws/public/resource/bfd3e089eeccac24c4a60fb9163eed6e/xmlnote/F54955C9D57146A0BFCC847FE3DD9FAD/8514)
- **阻止冒泡**
> catchtap="xxx"

- **网络请求**
> 在util.js中新建api.js
> 调用wx.request({url...})方法

- **页面跳转**
> wx.navigateTo({url:'..'})

- **页面跳转间传值**
> 1. 设置全局变量，在所有页面均可获取到（需要写var app = getApp()）
> 2. 设置进跳转方法的url中`wx.navigateTo({url:'..?id'+..})` 
> 3. (主要)存入本地缓存中，其他页面再获取本地缓存 `wx.set/getStorage({})`
### 组件
- `拨打电话`在api
> ![](https://note.youdao.com/yws/public/resource/bfd3e089eeccac24c4a60fb9163eed6e/xmlnote/0642E2BC77D8432AADA2779F091F80B0/8575)

- `联系客服`在按钮组件
> ![](https://note.youdao.com/yws/public/resource/bfd3e089eeccac24c4a60fb9163eed6e/xmlnote/6D51CDE9EAD34F80B7EDB86407610C88/8572)

---
[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/getting-started.html)：`https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/getting-started.html`

教程来源：[慕课网](ttps://www.imooc.com/learn/974)`https://www.imooc.com/learn/974` 

[mock.js](https://www.cnblogs.com/xzma/p/7591090.html)来源：`https://www.cnblogs.com/xzma/p/7591090.html`
