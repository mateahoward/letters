(function(e){function t(t){for(var s,o,a=t[0],c=t[1],u=t[2],b=0,d=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05ae":function(e,t,n){"use strict";(function(e){n("d3b7"),n("25f0");t["a"]={name:"Letter",props:["letterDetails"],data:function(){return{message:"",receiver:"",shouldShowLetterDetails:!1}},created:function(){this.getMessage()},methods:{addClassNameToTriangle:function(){var e=this,t=document.getElementById("triangle"),n=document.getElementById("paper"),s=document.getElementById("button"),i=document.getElementById("innerBox");i.classList.add("rotate-letter"),t.classList.add("animatedTriangleDown"),setTimeout((function(){t.classList.remove("animatedTriangleDown"),t.classList.remove("triangle-down")}),3800),setTimeout((function(){s.classList.add("invisible"),n.classList.remove("paper-invisible"),n.classList.add("animatedPaper")}),2e3),setTimeout((function(){n.classList.remove("animatedPaper"),n.classList.add("stillPaper"),e.shouldShowLetterDetails=!0}),4e3)},getMessage:function(){if(this.letterDetails){var t=e.from(this.letterDetails,"base64").toString("utf8"),n=JSON.parse(t);this.message=n.message,this.receiver=n.receiver}}}}}).call(this,n("b639").Buffer)},2817:function(e,t,n){"use strict";(function(e){n("e9c4"),n("d3b7"),n("25f0");t["a"]={name:"Form",props:["language"],data:function(){return{personName:"",message:"",sendObject:{receiver:"",message:""},b64:"",jString:""}},watch:{personName:function(e){this.sendObject.receiver=e},message:function(e){this.sendObject.message=e}},methods:{createObjectToSend:function(){""!==this.sendObject.receiver&&""!==this.sendObject.message&&(this.jString=JSON.stringify(this.sendObject),this.b64=e.from(this.jString,"utf8").toString("base64"),this.$router.push({name:"Letter",params:{letterDetails:this.b64}}))}}}}).call(this,n("b639").Buffer)},"3c67":function(e,t,n){"use strict";n("ba2b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function i(e,t){var n=Object(s["w"])("router-view");return Object(s["q"])(),Object(s["c"])(n)}n("62d0");var r=n("6b0d"),o=n.n(r);const a={},c=o()(a,[["render",i]]);var u=c,l=n("6c02"),b=function(e){return Object(s["t"])("data-v-4950ca64"),e=e(),Object(s["r"])(),e},d={class:"home"},f=b((function(){return Object(s["f"])("header",null,[Object(s["f"])("h1",null," Valentine's Day Letters")],-1)})),p=b((function(){return Object(s["f"])("div",{class:"title"},[Object(s["f"])("h2",null," Please select a language ")],-1)})),h={class:"languages"},g={key:0,class:"instructions"},j={key:0,class:"form-inputs"};function O(e,t,n,i,r,o){var a=Object(s["w"])("country-flag"),c=Object(s["w"])("Form");return Object(s["q"])(),Object(s["e"])("section",d,[f,Object(s["f"])("section",null,[p,Object(s["f"])("div",h,[Object(s["f"])("i",{onClick:t[0]||(t[0]=function(e){return o.setCountry("UK")}),class:Object(s["m"])({isActive:r.isUK})},[Object(s["g"])(a,{country:"gb",size:"big"})],2),Object(s["f"])("i",{onClick:t[1]||(t[1]=function(e){return o.setCountry("HR")}),class:Object(s["m"])({isActive:r.isHR})},[Object(s["g"])(a,{country:"hr",size:"big"})],2)]),r.shouldShowInstructions?(Object(s["q"])(),Object(s["e"])("div",g,[Object(s["f"])("h3",null,Object(s["y"])(o.chosenLanguage.instructionsTitle),1),Object(s["f"])("ul",null,[Object(s["f"])("li",null," 1. "+Object(s["y"])(o.chosenLanguage.instruction1),1),Object(s["f"])("li",null," 2. "+Object(s["y"])(o.chosenLanguage.instruction2),1),Object(s["f"])("li",null," 3. "+Object(s["y"])(o.chosenLanguage.instruction3),1),Object(s["f"])("li",null," 4. "+Object(s["y"])(o.chosenLanguage.instruction4),1)]),Object(s["f"])("button",{class:"instructions-button",onClick:t[2]||(t[2]=function(e){return r.shouldShowInstructions=!r.shouldShowInstructions})},Object(s["y"])(o.chosenLanguage.closeInstructionsText),1)])):Object(s["d"])("",!0)]),r.hasSetCountry?(Object(s["q"])(),Object(s["e"])("section",j,[Object(s["g"])(c,{language:o.chosenLanguage},null,8,["language"])])):Object(s["d"])("",!0)])}var m=n("b9a8"),v={for:"name"},y=["placeholder"],w={for:"message"},L=["placeholder"];function S(e,t,n,i,r,o){return Object(s["q"])(),Object(s["e"])("form",null,[Object(s["f"])("fieldset",null,[Object(s["f"])("label",v,Object(s["y"])(n.language.LabelPerson),1),Object(s["D"])(Object(s["f"])("input",{type:"text",id:"name",autocomplete:"name",placeholder:n.language.PersonInputPlaceholderText,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.personName=e}),required:"","aria-required":"true"},null,8,y),[[s["A"],r.personName]])]),Object(s["f"])("fieldset",null,[Object(s["f"])("label",w,Object(s["y"])(n.language.LabelMessage),1),Object(s["D"])(Object(s["f"])("textarea",{rows:"14",cols:"50",id:"message",autocomplete:"off",placeholder:n.language.MessageInputPlaceholderText,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.message=e}),required:"","aria-required":"true"},null,8,L),[[s["A"],r.message]])]),Object(s["f"])("fieldset",null,[Object(s["f"])("button",{onClick:t[2]||(t[2]=function(){return o.createObjectToSend&&o.createObjectToSend.apply(o,arguments)})},Object(s["y"])(n.language.FormButtonText),1)])])}var T=n("2817");n("e56b");const x=o()(T["a"],[["render",S],["__scopeId","data-v-56e49844"]]);var P=x,k={name:"Home",components:{Form:P},data:function(){return{isUK:!1,isHR:!1,hasSetCountry:!1,translations:m,shouldShowInstructions:!0}},methods:{setCountry:function(e){"UK"===e?(this.isUK=!0,this.isHR=!1,this.hasSetCountry=!0,this.shouldShowInstructions=!1):(this.isHR=!0,this.isUK=!1,this.hasSetCountry=!0,this.shouldShowInstructions=!1)}},computed:{english:function(){return this.translations.languages.english},croatian:function(){return this.translations.languages.croatian},chosenLanguage:function(){return this.isUK?this.english:this.isHR?this.croatian:this.english}}};n("c861");const I=o()(k,[["render",O],["__scopeId","data-v-4950ca64"]]);var C=I,D=function(e){return Object(s["t"])("data-v-731d6da7"),e=e(),Object(s["r"])(),e},B={class:"wrapper"},K={class:"envelope"},M={class:"flip-box"},U={class:"flip-box-inner",id:"innerBox"},_={class:"flip-box-front"},q={class:"button-trigger-wrapper"},N={class:"button-trigger",id:"button"},H={class:"person-details-wrapper"},R={class:"person-details"},F=D((function(){return Object(s["f"])("h3",null," Addressed to: ",-1)})),A={class:"flip-box-back"},J=D((function(){return Object(s["f"])("div",{class:"triangle-down",id:"triangle"},null,-1)})),z={class:"paper-invisible",id:"paper"};function E(e,t,n,i,r,o){return Object(s["q"])(),Object(s["e"])("section",B,[Object(s["f"])("section",K,[Object(s["f"])("div",M,[Object(s["f"])("div",U,[Object(s["f"])("div",_,[Object(s["f"])("section",q,[Object(s["f"])("div",N,[Object(s["f"])("button",{onClick:t[0]||(t[0]=function(e){return o.addClassNameToTriangle()})}," open ")])]),Object(s["f"])("div",H,[Object(s["f"])("div",R,[F,Object(s["f"])("p",null,Object(s["y"])(r.receiver),1)])])]),Object(s["f"])("div",A,[J,Object(s["f"])("div",z,[Object(s["D"])(Object(s["f"])("p",null,Object(s["y"])(r.message),513),[[s["B"],r.shouldShowLetterDetails]])])])])])])])}var V=n("05ae");n("3c67");const W=o()(V["a"],[["render",E],["__scopeId","data-v-731d6da7"]]);var Y=W,Z=[{path:"/",name:"Home",component:C},{path:"/letter/:letterDetails",name:"Letter",component:Y,props:!0}],$=Object(l["a"])({history:Object(l["b"])(),routes:Z}),G=$,Q=n("bb70");Object(s["b"])(u).component("country-flag",Q["a"]).use(G).mount("#app")},"62d0":function(e,t,n){"use strict";n("e232")},"74d7":function(e,t,n){},8862:function(e,t,n){},b9a8:function(e){e.exports=JSON.parse('{"languages":{"english":{"LabelPerson":"Who would you like to send a letter to?","PersonInputPlaceholderText":"Please type their name here...","LabelMessage":"What message would you like to display?","MessageInputPlaceholderText":"Your message...","FormButtonText":"Save message and view the letter","instructionsTitle":"How it works:","instruction1":"Choose the languge","instruction2":"Write the letter","instruction3":"Click the button","instruction4":"Copy the URL and share with your loved one","letterOpenText":"Open","closeInstructionsText":"close"},"croatian":{"LabelPerson":"Kome biste željeli poslati pismo?","PersonInputPlaceholderText":"Unesite njihovo ime ovdje...","LabelMessage":"Koju poruku želite da prikažemo?","MessageInputPlaceholderText":"Vasa poruka...","FormButtonText":"Spremi poruku i pogledaj pismo","instructionsTitle":"Kako koristiti:","instruction1":"Izaberite vas jezik","instruction2":"Napisite pismo","instruction3":"Kliknite gumb","instruction4":"Kopirajte URL i podijelite sa svojim voljenima","letterOpenText":"Otvori","closeInstructionsText":"Zatvori"}}}')},ba2b:function(e,t,n){},c861:function(e,t,n){"use strict";n("74d7")},e232:function(e,t,n){},e56b:function(e,t,n){"use strict";n("8862")}});
//# sourceMappingURL=app.9459bec0.js.map