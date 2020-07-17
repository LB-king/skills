### 1.vue.config.js配置

```javascript
module.exports = {
  devServer: {
    overlay: {
      warning: true // eslint编译时会有警告，但是不影响结果
    }
  }
}
```



### 2.引入element-ui

```powershell
cnpm i element-ui -S
```

在`main.js`中配置：

```javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

按需引入：

安装`babel-plugin-component`

```powershell
npm install babel-plugin-component -D
```

配置`babel.config.js`

```javascript
module.exports = {
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
```



```javascript
import Vue from 'vue';
import {
  Pagination,
  Dialog
} from 'element-ui'
Vue.use(Pagination)
Vue.use(Dialog)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
```

### 3.使用`pug`语法编写

```powershell
cnpm install pug pug-loader pug-plain-loader -S
```

### 4.Vue-ls

用于从Vue上下文中使用本地Storage,会话Storage和内容Storage

### 5.element-ui更改主题

- 安装`webpack-theme-color-replacer`

  ```powershell
  npm install webpack-theme-color-replacer -D
  ```

- 在`vue.config.js`中添加插件配置

  ```javascript
  const ThemeColorReplacer = require('webpack-theme-color-replacer')
  const forElementUI = require('webpack-theme-color-replacer/forElementUI')
  module.exports = {
    chainWebpack: config => {
      config
        .plugin('theme-color-replacer')
        .use(ThemeColorReplacer, [{
            fileName: 'css/theme-colors.[contenthash:8].css',
            matchColors: [
                ...forElementUI.getElementUISeries(process.env.VUE_APP_ELEMENT_COLOR)
            ],
            externalCssFiles: ['./node_modules/element-ui/lib/theme-chalk/index.css'],
            changeSelector: forElementUI.changeSelector
        }])
    }
  }
  ```

- 添加`.env`文件并加入配色代码

  ```tex
  # element 颜色
  VUE_APP_ELEMENT_COLOR=#409EFF
  ```

- `src`目录下新建文件夹`utls`

  ```javascript
  import client from 'webpack-theme-color-replacer/client'
  import forElemenUI from 'webpack-theme-color-replacer/forElementUI'
  
  ```

  

