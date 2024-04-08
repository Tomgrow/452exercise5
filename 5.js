document.getElementById('changeImageBtn').addEventListener('click', function() {  
    var imageElement = document.getElementById('myImage');  
    var currentSrc = imageElement.src;  
    var newSrc;  
  
    // 根据当前图片设置新的图片源  
    if (currentSrc.endsWith('55.jpg')) {  
        newSrc = '1.jpg';  
    } else {  
        newSrc = '55.jpg';  
    }  
  
    // 更改图片源  
    imageElement.src = newSrc;  
});