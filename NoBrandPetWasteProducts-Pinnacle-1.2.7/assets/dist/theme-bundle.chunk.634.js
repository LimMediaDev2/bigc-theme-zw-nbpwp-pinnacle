"use strict";(self.webpackChunkPinnacle=self.webpackChunkPinnacle||[]).push([[634],{1634:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u}),r(8838);var n=r(2066),o=r(469),i=r(5825),c=r.n(i),a=r(4587),s=r(8426);function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}var u=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,d(e,r);var i=o.prototype;return i.onReady=function(){(0,a.Z)(this.context.urls),c()("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),n.PT.on("sortBy-submitted",this.onSortBySubmit))},i.initFacetedSearch=function(){var t=c()("#product-listing-container"),e=c()("#faceted-search-container"),r={template:{productListing:"brand/product-listing",sidebar:"brand/sidebar"},config:{shop_by_brand:!0,brand:{products:{limit:this.context.brandProductsPerPage}}},showMore:"brand/show-more"};this.facetedSearch=new s.Z(r,(function(r){t.html(r.productListing),e.html(r.sidebar),c()("body").triggerHandler("compareReset"),c()("html, body").animate({scrollTop:0},100)}))},o}(o.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.634.js.map