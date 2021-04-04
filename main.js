function saveBlog(){
  
    var title = document.getElementById("blogTitle").value;
    var content = document.getElementById("blogContent").value;
    var blogId = Date.now();
    var imgData = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    if (file) {
        var img=reader.readAsDataURL(imgData);
    } 
    console.log(img);
    var blogJSON = {
        "title": title,
        "content": content,
        "imgData": img,
        "time": Date.now()
    }
    console.log(blogJSON);
    localStorage.setItem(blogId,blogJSON);
}

