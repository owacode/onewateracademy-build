(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1mui":function(t,e,a){"use strict";a.d(e,"a",function(){return p}),a.d(e,"b",function(){return i});var o=a("CcnG"),p=(a("tbE3"),a("Ip0R"),a("gIcY"),o["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%] { display: block; }"],data:{}}));function n(t){return o["\u0275vid"](0,[(t()(),o["\u0275and"](0,null,null,0))],null,null)}function i(t){return o["\u0275vid"](0,[(t()(),o["\u0275and"](0,null,null,0,null,n))],null,null)}},gJae:function(t,e,a){},j9RB:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var o=a("KIc3"),p=a("CcnG"),n=a("t/Na"),i=a("ZYCi"),r=function(){function t(t,e,a){this.http=t,this.route=e,this.blogauth=a}return t.prototype.addBlog=function(t){var e=new FormData,a=t.data.split(" ").length,o=Math.ceil(a/250);e.append("title",t.title),e.append("authorid",this.blogauth.authorapprovedid),e.append("authorname",this.blogauth.authorname),e.append("authorimage",localStorage.getItem("image")),e.append("image",t.image),e.append("desc",t.data),e.append("readtime",o.toString()),this.http.post("https://onewateracademy.org/api/blog/unapproved-blog",e).subscribe(function(t){})},t.prototype.uploadImage=function(t){var e=new FormData;return e.append("image",t),this.http.post("https://onewateracademy.org/api/blog/addimage",e)},t.prototype.addSavedBlogWithImage=function(t){var e=new FormData,a=t.data.split(" ").length,o=Math.ceil(a/250);e.append("savedid",t.id),e.append("title",t.title),e.append("authorid",this.blogauth.authorapprovedid),e.append("authorname",this.blogauth.authorname),e.append("authorimage",localStorage.getItem("image")),e.append("image",t.image),e.append("desc",t.data),e.append("readtime",o.toString()),this.http.post("https://onewateracademy.org/api/blog/saved-unapproved-blog-with-image",e).subscribe(function(t){})},t.prototype.addSavedBlog=function(t){var e=t.data.split(" ").length,a=Math.ceil(e/250),o={savedid:t.id,title:t.title,desc:t.data,readtime:a.toString(),image:t.image,authorid:this.blogauth.authorapprovedid,authorname:this.blogauth.authorname,authorimage:localStorage.getItem("image")};this.http.post("https://onewateracademy.org/api/blog/saved-unapproved-blog",o).subscribe(function(t){})},t.prototype.addToSavedBlog=function(t){var e=new FormData;return e.append("title",t.title),e.append("authorid",this.blogauth.authorapprovedid),e.append("image",t.image),e.append("desc",t.data),this.http.post("https://onewateracademy.org/api/blog/save-blog",e)},t.prototype.updateToSavedBlog=function(t){return this.http.patch("https://onewateracademy.org/api/blog/update-saved-blog",{id:t.id,title:t.title,desc:t.data})},t.prototype.updateToSavedBlogWithImage=function(t){var e=new FormData;return e.append("id",t.id),e.append("title",t.title),e.append("desc",t.data),e.append("image",t.image),this.http.patch("https://onewateracademy.org/api/blog/updateimage-saved-blog",e)},t.prototype.addVideo=function(t){this.http.post("https://onewateracademy.org/api/blog/post-video",t).subscribe(function(t){})},t.prototype.getAllVideos=function(){return localStorage.getItem("authoremail"),this.http.get("https://onewateracademy.org/api/blog/singlevideo/"+localStorage.getItem("authoremail"))},t.prototype.getAllBlogs=function(){return this.http.get("https://onewateracademy.org/api/blog/authorallblogs/"+this.blogauth.authorapprovedid)},t.prototype.getSavedBlog=function(t){return this.http.get("https://onewateracademy.org/api/blog/savedblogs/"+t)},t.prototype.getSingleSavedBlog=function(t){return this.http.get("https://onewateracademy.org/api/blog/singlesavedblog/"+t)},t.prototype.getPendingBlogs=function(){return this.http.get("https://onewateracademy.org/api/blog/authorunapprovedblogs/"+this.blogauth.authorapprovedid)},t.prototype.getApprovedBlogs=function(){return this.http.get("https://onewateracademy.org/api/blog/authorapprovedblogs/"+this.blogauth.authorapprovedid)},t.prototype.getSingleApprovedBlogs=function(t){return this.http.get("https://onewateracademy.org/api/blog/singleappblog/"+t)},t.prototype.getUser=function(){return this.http.get("https://onewateracademy.org/api/blog/single-author/"+this.blogauth.authorapprovedid)},t.prototype.getSingleAllBlog=function(t){return this.http.get("https://onewateracademy.org/api/blog/allblogs/"+t)},t.prototype.deleteApproveBlog=function(t,e){return this.http.post("https://onewateracademy.org/api/blog/deleteapproveblog",{mainid:t,approveid:e})},t.prototype.deleteUnApproveBlog=function(t,e){return this.http.post("https://onewateracademy.org/api/blog/deleteunapproveblog",{mainid:t,unapproveid:e})},t.ngInjectableDef=p.defineInjectable({factory:function(){return new t(p.inject(n.c),p.inject(i.o),p.inject(o.a))},token:t,providedIn:"root"}),t}()}}]);