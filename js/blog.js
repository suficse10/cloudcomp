$(document).ready(function(){
    var getApi = "https://5ykwv7tuxe.execute-api.us-east-1.amazonaws.com/v1/contact";
    axios.get(getApi)
        .then(function (response) {
          console.log(response.data[0].author.S); 
          
          var blog = response.data;
         
          
          
          var blog_html = "";
          for(var i = 0; i < blog.length; i++){
            
            var title = blog[i].title.S;            
            var description = blog[i].description.S;
            var link = blog[i].link.S;          
            var author = blog[i].author.S;
            var date = blog[i].date.S;

           
            blog_html = blog_html+'<div class="item"><article class="post-wrap"><div class="post-content"><div class="post-title"><h3 class="f-semi-expanded ultrabold uppercase"><a target="_blank" href="'+link+'">'+title+'</a></h3></div></br><div class="post-excerpt"><p class="t-left">'+description+'<a target="_blank" class="btn-more" href="'+link+'">Read More <i class="fa fa-angle-double-right"></i></a></p></div><div class="post-meta"><span><i class="fa fa-user"></i><a target="_blank" href="'+link+'">'+author+'&nbsp&nbsp&nbsp</a></span><span><i class="fa fa-calendar"></i><a target="_blank" href="'+link+'">'+date+'</a></span></div></div></article></div></br></br>';
          }
          $('#blog-wrap').html(blog_html);
  
           
  
        })
        .catch(function (error) {          
          console.log(error);
        })
        .then(function () {          
        });
  });

  
  