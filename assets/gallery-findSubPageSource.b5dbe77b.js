import{_ as u,o as l,c,a as i,n as r,d as n}from"./lodash.21348ef7.js";const b={name:"libraryWishlistSwitcher",props:["aboveSearch"],created:function(){},methods:{isActive:function(e){const t=this.$route.query.subPageSource||this.$store.state.sticky.subPageSource;if(e==="wishlist"&&t==="wishlist")return!0;if(e==="library"&&(t==="library"||t==="books"))return!0},switcher:function(e){this.$updateQueries({sort:null,sortDir:null,filterExtras:null,subPageSource:e}),this.$store.commit("stickyProp",{key:"subPageSource",value:e})}}};function h(e,t,a,y,f,s){return e.$route.meta.subPage&&!e.$route.meta.gallery&&(e.$store.state.library.books||e.$store.state.library.extras.pages.books)&&(e.$store.state.library.wishlist||e.$store.state.library.extras.pages.wishlist)?(l(),c("div",{key:0,id:"library-wishlist-switcher",class:r({"above-search":a.aboveSearch})},[i("button",{onClick:t[0]||(t[0]=o=>s.switcher("library")),class:r({active:s.isActive("library")})}," Library ",2),i("button",{onClick:t[1]||(t[1]=o=>s.switcher("wishlist")),class:r({active:s.isActive("wishlist")})}," Wishlist ",2)],2)):n("",!0)}var g=u(b,[["render",h],["__scopeId","data-v-6223a06e"]]),d={data:function(){return{subPageSource:{collection:null,name:null,wishlist:!1,library:!1,books:!1}}},methods:{findSubPageSource:function(){const e=this.$route.query.subPageSource||this.$store.state.sticky.subPageSource,t=e==="library"?"books":null;return{collection:this.$store.state.library[t||e],name:e,wishlist:e==="wishlist",library:e==="library"||e==="books",books:e==="library"||e==="books"}}},watch:{"$route.query.subPageSource":function(e){!this.$route.meta.gallery&&this.$route.meta.subPage&&(this.listReady=!1,this.subPageSource=this.findSubPageSource(),this.$nextTick(function(){this.makeCollection()}))}},beforeCreate:function(){this.$store.commit("prop",{key:"pageCollection",value:[]}),this.$store.commit("prop",{key:"mutatingCollection",value:[]})},created:function(){this.$route.meta.subPage&&(this.subPageSource=this.findSubPageSource()),!this.$route.meta.gallery&&this.$route.meta.subPage&&this.makeCollection()}};export{g as _,d as f};
