# 麦子前后台

基于bootstrap的静态页面

## 前台页面

### 用到的插件

* bootstrap
* jquery
* wow.js ----- 在页面滚动时展现动感的元素动画效果
* animate.css----动画
* jquery.singlePageNav----实现导航跳转滑动效果

### wow.js 的使用

1. 引入文件

```html
<!-- wow.js 的使用 需要依赖 animate.css -->
<link rel="stylesheet" href="static/css/animate.css"/>
<script src="static/js/wow.min.js"></script>
```



1. 初始化

```javascript
new WOW().init();
```

2. 在需要做动画的 HTML 元素中 添加 animate 类 和 wow 类

```html
<div class="container wow fadeInDown">
  	<h3>嵌入式底层开发</h3>
    <p>底层嵌入式开发、实战案例等技术交流讨论</p>
</div>
```

3. 还可以通过在 HTML 元素中添加以下属性来控制动画

| 名字               | 值                                | 描述                                    |
| :----------------- | :-------------------------------- | :-------------------------------------- |
| data-wow-duration  | data-wow-duration = "1s"          | 控制动画执行时间                        |
| data-wow-delay     | data-wow-delay = '1s'             | 控制动画延迟时间                        |
| data-wow-offset    | data-wow-offset = '15' (单位为px) | 控制距离 HTML 元素为多少时 开始执行动画 |
| data-wow-iteration | data-wow-iteration = '10'         | 控制动画重复执行的次数                  |

例子：

```html
<!-- 距离该元素 0px 时开始执行 fadeInDown 动画 ，动画持续时间为 0.5s -->
<div class="container wow fadeInDown"  data-wow-offset="0" data-wow-duration="0.5s">
  	<h3>嵌入式底层开发</h3>
    <p>底层嵌入式开发、实战案例等技术交流讨论</p>
</div>
```



