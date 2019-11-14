//编译的方法
class Compiler {
  constructor(el, vm) {
    // 判断el是不是元素
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    // console.log(this.el)
    // 把当前节点中的元素放到内存中
    let fragment = this.node2fragment(this.el)
    // console.log(fragment)


    // 把节点中的内容进行替换
    this.compile(fragment)
    // 把内容再塞到页面
    this.el.appendChild(fragment)
  }
  // 编译元素
  // 编译方法
  compile (node) { // 编译内存中的dom节点
    let childNodes = node.childNodes
    ~[...childNodes].forEach(child => {
      if (this.isElementNode(child)) {
        // console.log('element', child)
      } else {
        // console.log('text', child)
      }
    })
  }
  // 创建文档碎片(把节点移动到fragment中)
  node2fragment (node) {
    let fragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = node.firstChild) {
      // appendChild具有移动性
      fragment.appendChild(firstChild)
    }
    return fragment
  }
  // 判断节点是不是元素
  isElementNode (node) {
    return node.nodeType === 1
  }
}
class Vue {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data
    // 如果存在根元素，则编译模板
    if (this.$el) {
      new Compiler(this.$el, this)
    }
  }
}
