(self.webpackChunknews_app=self.webpackChunknews_app||[]).push([[322],{6322:(t,e,n)=>{"use strict";n.r(e),n.d(e,{NewsDetailModule:()=>_});var a=n(8583),o=n(9765),r=n(6782),i=n(7716),c=n(9763),m=n(5917);let s=(()=>{class t{constructor(){this.comments=[{name:"Chris Nat",date:new Date,avatar:"/assets/images/1.jpg",comment:"Lorem ipsum dolor sit amet, consectetur\n                      adipiscing elit, sed do eiusmod tempor\n                      incididunt ut labore et dolore magna aliqua.\n                      Ut enim ad minim veniam, quis nostrud exercitation\n                      ullamco laboris nisi ut aliquip ex ea commodo consequat"},{name:"Matt Damon",date:new Date,avatar:"/assets/images/2.jpg",comment:"Ut enim ad minim veniam, quis nostrud exercitation\n                      ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                      Lorem ipsum dolor sit amet, consectetur\n                      adipiscing elit, sed do eiusmod tempor\n                      incididunt ut labore et dolore magna aliqua. "},{name:"Seb Willhelm",date:new Date,avatar:"/assets/images/3.jpg",comment:"Duis aute irure dolor in reprehenderit in voluptate\n                  velit esse cillum dolore eu fugiat nulla pariatur.\n                  Excepteur sint occaecat cupidatat non proident, sunt\n                  in culpa qui officia deserunt mollit anim id est laborum."}]}readList(){return(0,m.of)(this.comments)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n(1095),d=n(6927);let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-news-detail-content-section"]],inputs:{article:"article",commentsCount:"commentsCount"},decls:23,vars:16,consts:[["aria-label","article image",1,"image-wrapper"],[1,"image"],["aria-label","metadata",1,"metadata","mat-caption"],[1,"source","item"],[1,"author","item"],[1,"time","item",3,"dateTime"],[1,"comments","item"],[1,"text-content"],[1,"headline"],[1,"description"],[1,"read-more-wrapper"],["rel","noopener noreferrer","target","_blank","mat-flat-button","","color","accent",1,"read-more",3,"href","disabled"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.ALo(2,"backgroundImageSrc"),i.qZA(),i.qZA(),i.TgZ(3,"section",2),i.TgZ(4,"span",3),i._uU(5),i.qZA(),i.TgZ(6,"span",4),i._uU(7),i.qZA(),i.TgZ(8,"time",5),i._uU(9),i.ALo(10,"date"),i.qZA(),i.TgZ(11,"span",6),i._uU(12),i.qZA(),i.qZA(),i.TgZ(13,"div",7),i.TgZ(14,"h2",8),i._uU(15),i.qZA(),i.TgZ(16,"p",9),i._uU(17),i.qZA(),i.TgZ(18,"p",9),i._uU(19),i.qZA(),i.TgZ(20,"div",10),i.TgZ(21,"a",11),i._uU(22," Read more "),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(1),i.Udp("background-image",i.lcZ(2,12,e.article.urlToImage)),i.xp6(4),i.Oqu(e.article.source.name),i.xp6(2),i.Oqu(e.article.author),i.xp6(1),i.Q6J("dateTime",e.article.publishedAt),i.xp6(1),i.Oqu(i.lcZ(10,14,e.article.publishedAt)),i.xp6(3),i.hij("",e.commentsCount," comments"),i.xp6(3),i.Oqu(e.article.title),i.xp6(2),i.Oqu(e.article.description),i.xp6(2),i.Oqu(e.article.content),i.xp6(2),i.Q6J("href",e.article.url,i.LSH)("disabled",!e.article.url))},directives:[l.zs],pipes:[d.Y,a.uU],styles:["[_nghost-%COMP%]{display:grid;grid-template-rows:auto 32px auto;grid-template-columns:1fr 5fr}.image-wrapper[_ngcontent-%COMP%]{grid-column:1/span 2;grid-row:1/span 2;overflow:hidden;display:block}.image-wrapper[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{aspect-ratio:24/9;width:100%;background-size:100%;background-position:50%}.metadata[_ngcontent-%COMP%]{grid-column:1;grid-row:3;margin-bottom:16px;text-transform:uppercase;color:var(--secondary-text-color);padding:32px 16px;display:flex;flex-direction:column;text-align:right}.metadata[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{line-height:2.7}.metadata[_ngcontent-%COMP%]   .comments[_ngcontent-%COMP%]{color:#ff4081}.text-content[_ngcontent-%COMP%]{grid-column:2;grid-row:2/span 2;padding:32px;overflow:hidden;background-color:#fff}.text-content[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]{margin-bottom:16px;font-size:28px;font-weight:lighter;text-transform:uppercase}.text-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:var(--secondary-text-color);line-height:2}.text-content[_ngcontent-%COMP%]   .read-more-wrapper[_ngcontent-%COMP%]{text-align:center;margin-top:32px}.text-content[_ngcontent-%COMP%]   .read-more-wrapper[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]{border-radius:20px}@media screen and (max-width:800px){[_nghost-%COMP%]{grid-template-rows:auto;grid-template-columns:1fr;grid-gap:32px}.image-wrapper[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.metadata[_ngcontent-%COMP%]{grid-column:1;grid-row:2;text-align:left;flex-direction:row;flex-wrap:wrap;padding:0;margin:0 16px}.metadata[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin-right:8px}.text-content[_ngcontent-%COMP%]{grid-column:1;grid-row:3;padding:0;margin:0 16px}}"],changeDetection:0}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-article-comment-widget"]],inputs:{comment:"comment"},decls:8,vars:7,consts:[["alt","comment author avatar","aria-disabled","true",1,"avatar",3,"src"],[1,"author"],[1,"date",3,"dateTime"],[1,"content"]],template:function(t,e){1&t&&(i._UZ(0,"img",0),i.TgZ(1,"h3",1),i._uU(2),i.qZA(),i.TgZ(3,"time",2),i._uU(4),i.ALo(5,"date"),i.qZA(),i.TgZ(6,"p",3),i._uU(7),i.qZA()),2&t&&(i.Q6J("src",e.comment.avatar,i.LSH),i.xp6(2),i.Oqu(e.comment.name),i.xp6(1),i.Q6J("dateTime",e.comment.date),i.xp6(1),i.Oqu(i.lcZ(5,5,e.comment.date)),i.xp6(3),i.Oqu(e.comment.comment))},pipes:[a.uU],styles:['[_nghost-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;grid-template-areas:"avatar author date" "avatar content content";grid-row-gap:8px;grid-column-gap:16px}.avatar[_ngcontent-%COMP%]{grid-area:avatar;width:64px;height:64px;border-radius:50%}.author[_ngcontent-%COMP%]{grid-area:author;margin-bottom:0}.date[_ngcontent-%COMP%]{grid-area:date;align-self:center}.content[_ngcontent-%COMP%], .date[_ngcontent-%COMP%]{color:var(--secondary-text-color)}.content[_ngcontent-%COMP%]{grid-area:content;margin-bottom:0}'],changeDetection:0}),t})();function u(t,e){if(1&t&&(i.TgZ(0,"li"),i._UZ(1,"app-article-comment-widget",6),i.qZA()),2&t){const t=e.$implicit;i.xp6(1),i.Q6J("comment",t)}}let h=(()=>{class t{constructor(t,e,n){var a;this.commentsService=e,this.changeDetectorRef=n,this.trackBy=t=>t,this.unsubscribe$=new o.xQ,this.article=null===(a=t.getCurrentNavigation())||void 0===a?void 0:a.extras.state}ngOnInit(){this.fetchComments()}ngOnDestroy(){this.unsubscribe$.next()}fetchComments(){this.commentsService.readList().pipe((0,r.R)(this.unsubscribe$)).subscribe(t=>{this.comments=t,this.changeDetectorRef.markForCheck()})}goToArticle(t){}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(c.F0),i.Y36(s),i.Y36(i.sBO))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-news-detail"]],decls:7,vars:5,consts:[[1,"content-wrapper"],[1,"content-section",3,"article","commentsCount"],[1,"comments-section"],[1,"heading","mat-display-1"],["aria-label","comments list"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"comment",3,"comment"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i._UZ(1,"app-news-detail-content-section",1),i.TgZ(2,"section",2),i.TgZ(3,"h2",3),i._uU(4),i.qZA(),i.TgZ(5,"ol",4),i.YNc(6,u,2,1,"li",5),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(1),i.Q6J("article",e.article)("commentsCount",(null==e.comments?null:e.comments.length)||0),i.xp6(3),i.hij("",(null==e.comments?null:e.comments.length)||0," Comments"),i.xp6(2),i.Q6J("ngForOf",e.comments)("ngForTrackBy",e.trackBy))},directives:[g,a.sg,p],styles:["[_nghost-%COMP%]{display:block;width:100%}.content-wrapper[_ngcontent-%COMP%]{display:block;max-width:1264px;margin:auto;background-color:#fff}.content-section[_ngcontent-%COMP%]{margin-bottom:64px}.comments-section[_ngcontent-%COMP%]{margin:16px;padding-bottom:64px}.comments-section[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{margin-bottom:32px}.comments-section[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{margin-top:32px;padding-bottom:16px;border-bottom:1px solid #0000001a}"],changeDetection:0}),t})(),x=(()=>{class t{constructor(t){this.router=t}canActivate(t,e){var n;return!!(null===(n=this.router.getCurrentNavigation())||void 0===n?void 0:n.extras.state)||(this.router.navigateByUrl("/"),!1)}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(c.F0))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=n(4291);let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.ez,c.Bz.forChild([{path:"",component:h,canActivate:[x]}]),f.k,l.ot]]}),t})()}}]);