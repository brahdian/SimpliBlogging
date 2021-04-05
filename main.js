var cardContainer;
var dispalyBlog = (blog)=>{
    if(blog==null){
        return;
    }
    var card = document.createElement('div');
    card.className='card col-md-4';
    var img = document.createElement('img');
    img.className="card-img-top";
    img.src=blog.imgData;
    card.appendChild(img);
    var cardBody = document.createElement('div');
    cardBody.className='card-body';
    card.appendChild(cardBody);
    var cardTitle = document.createElement('h5');
    cardTitle.className='card-title';
    cardTitle.maxlength=100;
    cardTitle.innerHTML=blog.title;
    cardBody.appendChild(cardTitle);
    var cardContent = document.createElement('p');
    cardContent.className='card-text';
    var cardText=blog.content
    cardContent.innerHTML=cardText.slice(0,100)+"...";
    cardBody.appendChild(cardContent);
    var cardFooter = document.createElement('div');
    cardFooter.className="card-footer";
    card.appendChild(cardFooter)
    var cardModal = document.createElement('a');
    cardModal.setAttribute("data-toggle","modal")
    cardModal.setAttribute("data-target","#readBlog");
    cardModal.setAttribute("style","cursor:pointer");
    cardModal.setAttribute("onclick","readBlog("+JSON.stringify(blog)+")");
    cardModal.innerHTML="Read More";
    cardFooter.appendChild(cardModal);
    cardContainer.appendChild(card);
}

(function () {
    console.log(localStorage.length)
    var rowID;
    for(var i=0; i<=localStorage.length; i++){
        console.log(localStorage.key(i));
        var row;
        if(i%3==0){
            row = document.createElement('div');
            row.className='card-group';
            rowID="row-"+i;
            row.id=rowID;
            document.getElementById('main').appendChild(row);
        }
        cardContainer = document.getElementById(rowID);
        var blog=JSON.parse(localStorage.getItem(localStorage.key(i)));
        dispalyBlog(blog);
        
    }
  })();

function saveBlog(e){ 
    console.log(e); 
    var title = document.getElementById("blogTitle").value;
    var content = document.getElementById("blogContent").value;
    var blogId = Date.now();
    var blogJSON =null;
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        blogJSON = {
            "title": title,
            "content": content,
            "imgData": reader.result,
            "time": Date.now()
        }
        localStorage.setItem(blogId,JSON.stringify(blogJSON));
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
}

function readBlog(blog){
    // var blog=JSON.parse(blogParam);    
    readBlogTitle = document.getElementById('readBlogTitle');
    readBlogTitle.innerHTML=blog.title;
    readBlogImg = document.getElementById('readBlogImg');
    readBlogImg.src = blog.imgData;
    readBlogText = document.getElementById('readBlogText');
    readBlogText.innerHTML=blog.content;
}
