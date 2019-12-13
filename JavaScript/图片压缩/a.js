
/**
 * 上传图片获取base64@Edward
 * @param {object} file  文件对象 
 * TODO 需要处理异步返回
 */
// var uploadImg = function(file) {
//     var imageBase64;
//     var reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function() {
//       imageBase64 = reader.result;
//     };

//     return imageBase64;
// };

/**
 * 上传图片压缩@Edward
 * @param {string} soureImg  源图片base64
 * @param {float} scale   缩放比例,默认值0.5
 * @param {function} callback  回调 返回 （canvasBase64）
 */
var compressImg = function(soureImg, callback) {
  var after =  getByteLen(soureImg)/1024;
  console.log('压缩前==>' + getByteLen(soureImg)/1024 + 'kb');
  console.log('压缩中...');
  console.time('用时');
  // 参数处理
  var baseImg = soureImg;
  // 创建img
  var oImg = new Image();
  oImg.src = baseImg;
  // 处理图片大小,宽度大于 1920则压缩大小为一半
  var Iwidth ;
  var Iheight;
  oImg.addEventListener('load', function(ev) {
    Iwidth = ev.target.width;
    Iheight = ev.target.height;
    if (Number(Iwidth) > 1920) {
      Iwidth = Iwidth/2;
      Iheight = Iheight/2;
    }
    // 创建canvas
    var canvas = document.createElement('canvas');
    var cxt=canvas.getContext("2d");
    canvas.width = Iwidth;
    canvas.height = Iheight;
    cxt.drawImage(oImg, 0, 0, Iwidth, Iheight);
    var canvasBase64 = canvas.toDataURL("image/jpeg", 0.5);
    callback(canvasBase64);
    // 垃圾回收
    oImg = null;
    canvas = null;
    console.timeEnd('用时');  
    console.log('压缩后==>' + getByteLen(canvasBase64)/1024 + 'kb');
    console.log('转换率==>' + getByteLen(canvasBase64)/1024/after * 100 + '%');
  })
};

/**
 * 
 * @param {string} str 要计算的字符
 */
var getByteLen = function(str) {   
  var l=str.length;   
  var n = l;   
  for ( var i=0;i <l;i++){  
      if( str.charCodeAt(i) <0 ||str.charCodeAt(i)> 255){  
          n++;   
      }   
  }   
  return n;
};

