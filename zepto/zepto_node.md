# zepto node
## zepto.js

#### 特点
~~~~
1 移动端
2 轻量级,压缩版本只有8kb
3 语法和jQuery相似
4 响应执行快
5 和jQuery一样,以 $ 为核心
6 可以分库引入,核心库有 zepto event ajax form ie
~~~~

#### 和jQuery的区别
```$xslt
jQuery核心 $
    1.作为函数调用（参数）
    * function(){}
    * 选择器字符串
    * DOM code
    * html字符串
    
    2.作为对象使用（方法）
    * $.isArray()
    * $.ajax() $.get() $.post()
    * $.each()
    。。。

jQuery 对象
    * appen()
    * find()
    * show()
```

| 对比 |  zepto   | jQuery （读写二合一） |
|  :----:  | :----:  | :----:  |
|  | 方法 | |
||||
| attr('自定义') |attr() removeAttr()|attr() removeAttr()|
| prop('固有') |prop() removeProp()1.2+|prop() removeProp()|
|宽高|width()heigth():con+padding+border|width()heigth():内容区域，没有单位|
|宽高|.css('width'),.css('heigth'):con+'px'|.css('width'),.css('heigth'):con+padding+border+'px'|
|宽高|--|innterHeigth()innterWidth():con+padding|
|宽高|--|outerHeigth()outerWidth():con+padding+border|
|宽高|.css('padding') .css('border-width')|--|
| | 对象 | |
| each(index,item) |数组、对象、字符串、Json| 数组、对象|
| | 事件绑定 | |
|on()|on('touchstart','ele',function(){点击事件})|on('ele',click',function(){})|
|on()|on('tap','ele',function(){点击事件})|--|
|on()|on('singleTap','ele',function(){单击事件})|--|
|on()|on('doubleTap','ele',function(){双击事件})|--|
|on()|on('longTap','ele',function(){长按750ms})|--|
|bind()|bind('funName',function(){自定义事件})|bind('funName',function(){自定义事件})|
|tigger()|tigger('funName')触发自定义事件 |tigger('funName')触发自定义事件|
|unbind()|unbind('funName')触发自定义事件 |unbind('funName')解除自定义事件|
|  | 滑动事件:滑动大雨30px触发，否则算点击 | |
|swipe()|swipe()|--|
|swipeLeft()|swipeLeft()|--|
|swipeRigth()|swipeRigth()|--|
|swipeUp()|swipeUp()|--|
|swipeDown()|swipeDown()|--|
|  | 事件解除绑定 | |
|off()|off()|off()|
|  | DOM操作 | |
|--|$('\<p>文字\</p>',{id:'text'})|此操作没用|
|  | form | |
|serialize()|--|--|
|serializeArray()|--|--|
|submit()|--|--|
|event.preventDefault()|--|--|
|  | ajax | |
|abort()| -- | -- |
#### zepto中的坑
```$xslt
zept事件委托
委托的事件先被依次放入数组队列里面，然后由自身开始往后直到找到最后，期间符合条件的元素委托的事件都会执行

1.委托在同一个父元素，或者触发的元素的事件范围小于同类型事件（冒泡冒到自身范围）
2.同一个事件
3.委托关联，操作的类要进行关联
4.绑定顺序，从当前的类往后看
```