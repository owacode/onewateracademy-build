(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{s62V:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){function l(l,n){this.router=l,this.http=n}return l.prototype.ngOnInit=function(){var l=this;this.router.params.subscribe(function(n){l.http.get("https://onewateracademy.org/api/blog/approvedauthor/"+n.id).subscribe(function(n){l.author=n.result[0]}),l.getblogs(n.id)})},l.prototype.getblogs=function(l){var n=this;this.http.get("https://onewateracademy.org/api/blog/authorapprovedblogs/"+l).subscribe(function(l){n.authorblogs=l.result.reverse(),n.authorblogs=n.authorblogs.slice(0,3)})},l}(),o=function(){return function(){}}(),a=t("pMnS"),i=t("Ip0R"),r=t("ZYCi"),c=t("t/Na"),d=u["\u0275crt"]({encapsulation:0,styles:[[".cover-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;-o-object-fit:cover;object-fit:cover;border-radius:50%;position:absolute;left:50%;z-index:2;transform:translateX(-50%);bottom:-75px;padding:.2rem;border:2px solid #777;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);transition:all .3s cubic-bezier(.25,.8,.25,1)}.cover-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.two-card[_ngcontent-%COMP%]   .blog-caption[_ngcontent-%COMP%]{height:auto}.outer-card[_ngcontent-%COMP%]{padding:.3rem;margin:1rem auto}.author-stats[_ngcontent-%COMP%]{margin:2rem auto}.author-detail[_ngcontent-%COMP%]{box-shadow:0 2px 6px 0 rgba(110,110,110,.2);padding:2rem 4rem;margin-top:100px;border-radius:20px}.author-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .author-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.author-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;margin:0;padding-left:0}.author-detail[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{text-align:center;padding-bottom:2rem;border-bottom:1px solid #ccc}.author-detail[_ngcontent-%COMP%]   .author-stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;letter-spacing:-.5px;font-weight:600;margin:auto;color:#666}.author-detail[_ngcontent-%COMP%]   .author-stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700;color:#000}.author-detail[_ngcontent-%COMP%]   .author-stats[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:50px;margin:.5rem 1rem}.author-detail[_ngcontent-%COMP%]   .author-stats[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]{text-align:center}.author-detail[_ngcontent-%COMP%]   .about-author[_ngcontent-%COMP%]{margin-top:2rem}.author-detail[_ngcontent-%COMP%]   .author-contact[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]{margin:2rem 0;text-align:center}.author-detail[_ngcontent-%COMP%]   .author-contact[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{justify-content:center;width:30px;margin-left:1.5rem;margin-right:1.5rem}.side-block[_ngcontent-%COMP%]{margin-top:100px}.side-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}@media screen and (max-width:768px){.side-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem}}@media screen and (max-width:520px){.cover-photo[_ngcontent-%COMP%]{height:30vh}.side-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem}.author-detail[_ngcontent-%COMP%]{padding:2rem 1.5rem}.author-detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem;text-align:center}.author-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}.author-detail[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{font-size:2.6rem;margin:.5rem;font-weight:700;letter-spacing:-2px}.author-detail[_ngcontent-%COMP%]   .author-stats[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}.author-detail[_ngcontent-%COMP%]   .author-stats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.2rem}.author-detail[_ngcontent-%COMP%]   .author-contact[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]{text-align:center}.author-detail[_ngcontent-%COMP%]   .author-contact[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin:.8rem}}"]],data:{}});function s(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/linkedin.svg"]],null,null,null,null,null))],null,function(l,n){var t=n.component;l(n,0,0,u["\u0275inlineInterpolate"](1,"",null==t.author?null:t.author.linkedIn_id,""))})}function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/twitter.svg"]],null,null,null,null,null))],null,function(l,n){var t=n.component;l(n,0,0,u["\u0275inlineInterpolate"](1,"",null==t.author?null:t.author.twitter_id,""))})}function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,7,"div",[["class","author-contact"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Also available at :"])),(l()(),u["\u0275eld"](3,0,null,null,4,"div",[["class","social-media"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,s)),u["\u0275did"](5,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,g)),u["\u0275did"](7,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,5,0,"null"!=(null==t.author?null:t.author.linkedIn_id)),l(n,7,0,"null"!=(null==t.author?null:t.author.twitter_id))},null)}function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"h5",[["style","color: #777;"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" This author has not posted any blog yet. "]))],null,null)}function m(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","likes"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"i",[["class","fa fa-heart"]],null,null,null,null,null)),(l()(),u["\u0275ted"](2,null,[""," "]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.likecount)})}function f(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,15,"div",[["class","col-lg-12 col-md-4 col-sm-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,14,"div",[["class","outer-card"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"div",[["class","outer-overlay"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,12,"div",[["class","two-card"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,10,"div",[["class","blog-caption"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u["\u0275nov"](l,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u["\u0275did"](7,671744,null,0,r.r,[r.o,r.a,i.LocationStrategy],{routerLink:[0,"routerLink"]},null),u["\u0275pad"](8,2),(l()(),u["\u0275eld"](9,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),u["\u0275ted"](10,null,["",""])),(l()(),u["\u0275eld"](11,0,null,null,4,"div",[["class","blog-meta-data"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,m)),u["\u0275did"](13,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](14,0,null,null,1,"div",[["class","read"]],null,null,null,null,null)),(l()(),u["\u0275ted"](15,null,[""," mins"]))],function(l,n){var t=l(n,8,0,"/onewaterblog/blogpost",n.context.$implicit._id);l(n,7,0,t),l(n,13,0,null==n.context.$implicit?null:n.context.$implicit.likecount)},function(l,n){l(n,4,0,u["\u0275inlineInterpolate"](1,"",n.context.$implicit.image,"")),l(n,6,0,u["\u0275nov"](n,7).target,u["\u0275nov"](n,7).href),l(n,10,0,n.context.$implicit.title),l(n,15,0,n.context.$implicit.read_time)})}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,f)),u["\u0275did"](2,278528,null,0,i.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.authorblogs)},null)}function _(l){return u["\u0275vid"](0,[u["\u0275pid"](0,i.TitleCasePipe,[]),(l()(),u["\u0275eld"](1,0,null,null,2,"div",[["class","cover-photo"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"img",[["alt",""],["class","author-image"]],[[8,"src",4]],null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,0,"div",[["class","wave"]],null,null,null,null,null)),(l()(),u["\u0275eld"](4,0,null,null,36,"div",[["class","container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,35,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,26,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,25,"div",[["class","author-detail"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,2,"h1",[["class","author-name"]],null,null,null,null,null)),(l()(),u["\u0275ted"](9,null,[" "," "])),u["\u0275ppd"](10,1),(l()(),u["\u0275eld"](11,0,null,null,14,"div",[["class","author-stats"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,13,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,6,"div",[["class","col-md-4 col-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/map.svg"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" From "])),(l()(),u["\u0275eld"](17,0,null,null,2,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](18,null,["",""])),u["\u0275ppd"](19,1),(l()(),u["\u0275eld"](20,0,null,null,5,"div",[["class","col-md-4 col-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](21,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/followers.svg"]],null,null,null,null,null)),(l()(),u["\u0275eld"](22,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](24,null,["",""])),(l()(),u["\u0275ted"](-1,null,[" blogs posted "])),(l()(),u["\u0275eld"](26,0,null,null,4,"div",[["class","about-author"]],null,null,null,null,null)),(l()(),u["\u0275eld"](27,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" About Author "])),(l()(),u["\u0275eld"](29,0,null,null,1,"p",[["class","text-justify"]],null,null,null,null,null)),(l()(),u["\u0275ted"](30,null,[" "," "])),(l()(),u["\u0275and"](16777216,null,null,1,null,h)),u["\u0275did"](32,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](33,0,null,null,7,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](34,0,null,null,6,"div",[["class","side-block"]],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Articles by Author"])),(l()(),u["\u0275and"](16777216,null,null,1,null,p)),u["\u0275did"](38,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](40,16384,null,0,i.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,32,0,"null"!=(null==t.author?null:t.author.linkedIn_id)||"null"!=(null==t.author?null:t.author.twitter_id)),l(n,38,0,!(null!=t.authorblogs&&t.authorblogs.length)),l(n,40,0,null==t.authorblogs?null:t.authorblogs.length)},function(l,n){var t=n.component;l(n,2,0,u["\u0275inlineInterpolate"](1,"",null==t.author?null:t.author.image,""));var e=u["\u0275unv"](n,9,0,l(n,10,0,u["\u0275nov"](n,0),null==t.author?null:t.author.name));l(n,9,0,e);var o=u["\u0275unv"](n,18,0,l(n,19,0,u["\u0275nov"](n,0),null==t.author?null:t.author.location));l(n,18,0,o),l(n,24,0,null==t.author?null:t.author.approved_blogs_added.length),l(n,30,0,null==t.author?null:t.author.bio)})}function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-author-page",[],null,null,null,_,d)),u["\u0275did"](1,114688,null,0,e,[r.a,c.c],null,null)],function(l,n){l(n,1,0)},null)}var M=u["\u0275ccf"]("app-author-page",e,v,{},{},[]);t.d(n,"AuthorPageModuleNgFactory",function(){return O});var O=u["\u0275cmf"](o,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,M]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[u.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](1073742336,r.s,r.s,[[2,r.y],[2,r.o]]),u["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),u["\u0275mpd"](1073742336,o,o,[]),u["\u0275mpd"](1024,r.m,function(){return[[{path:"",component:e}]]},[])])})}}]);