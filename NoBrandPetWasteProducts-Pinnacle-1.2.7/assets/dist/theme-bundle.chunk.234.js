"use strict";(self.webpackChunkPinnacle=self.webpackChunkPinnacle||[]).push([[234],{6234:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s}),n(8838);var o=n(9230),r=n(97),a=n(5825),c=n.n(a),i=n(3609);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var s=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,u(e,n);var a=o.prototype;return a.onReady=function(){this.registerContactFormValidation()},a.registerContactFormValidation=function(){var t="form[data-contact-form]",e=(0,r.Z)({submit:t+' input[type="submit"]'}),n=c()(t);e.add([{selector:t+' input[name="contact_email"]',validate:function(t,e){t(i.Z.email(e))},errorMessage:this.context.contactEmail},{selector:t+' textarea[name="contact_question"]',validate:function(t,e){t(i.Z.notEmpty(e))},errorMessage:this.context.contactQuestion}]),n.on("submit",(function(t){e.performCheck(),e.areAll("valid")||t.preventDefault()}))},o}(o.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.234.js.map