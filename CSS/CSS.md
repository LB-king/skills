### 1、选择器

- `div > p`: 表示`div`里面第一代`p`
- `div p`: 表示`div`里面所有的`p`
- `div ~ p`: 前面是`div`的所有`p`元素
- `div + p`: 选择两个相邻兄弟中的第二个元素
- `ul li+li` : `ul`里面除了第一个`li`剩下的生效

### 2、Less

![](D:\skills\CSS\&符号.png)

### 3、滚动条抖动

```css
html {
      overflow-y: scroll;
    }
:root {
    overflow-y: auto;
    overflow-x: hidden;
}
:root body {
    position: absolute;
}
body {
    width: 100vw;
    overflow: hidden;
}
```

