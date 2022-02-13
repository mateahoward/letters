(function(e){function t(t){for(var s,o,a=t[0],c=t[1],u=t[2],b=0,d=[];b<a.length;b++)o=a[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/letters/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05ae":function(e,t,n){"use strict";(function(e){n("d3b7"),n("25f0");t["a"]={name:"Letter",props:["letterDetails"],data:function(){return{message:"",receiver:"",shouldShowLetterDetails:!1}},created:function(){this.getMessage()},methods:{addClassNameToTriangle:function(){var e=this,t=document.getElementById("triangle"),n=document.getElementById("paper"),s=document.getElementById("button"),r=document.getElementById("innerBox"),i=document.getElementById("createYourOwn");r.classList.add("rotate-letter"),t.classList.add("animatedTriangleDown"),setTimeout((function(){t.classList.remove("animatedTriangleDown"),t.classList.remove("triangle-down")}),3800),setTimeout((function(){s.classList.add("invisible"),n.classList.remove("paper-invisible"),n.classList.add("animatedPaper")}),2e3),setTimeout((function(){n.classList.remove("animatedPaper"),n.classList.add("stillPaper"),e.shouldShowLetterDetails=!0,i.classList.add("visible")}),4e3)},getMessage:function(){if(this.letterDetails){var t=e.from(this.letterDetails,"base64").toString("utf8"),n=JSON.parse(t);this.message=n.message,this.receiver=n.receiver}}}}}).call(this,n("b639").Buffer)},"07be":function(e,t,n){},2817:function(e,t,n){"use strict";(function(e){n("e9c4"),n("d3b7"),n("25f0");t["a"]={name:"Form",props:["language"],data:function(){return{personName:"",message:"",sendObject:{receiver:"",message:""},b64:"",jString:""}},watch:{personName:function(e){this.sendObject.receiver=e},message:function(e){this.sendObject.message=e}},methods:{createObjectToSend:function(){""!==this.sendObject.receiver&&""!==this.sendObject.message&&(this.jString=JSON.stringify(this.sendObject),this.b64=e.from(this.jString,"utf8").toString("base64"),this.$router.push({name:"Letter",params:{letterDetails:this.b64}}))}}}}).call(this,n("b639").Buffer)},"2b20":function(e,t,n){"use strict";n("07be")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function r(e,t){var n=Object(s["x"])("router-view");return Object(s["r"])(),Object(s["c"])(n)}n("62d0");var i=n("6b0d"),o=n.n(i);const a={},c=o()(a,[["render",r]]);var u=c,l=n("6c02"),b=function(e){return Object(s["u"])("data-v-4950ca64"),e=e(),Object(s["s"])(),e},d={class:"home"},f=b((function(){return Object(s["f"])("header",null,[Object(s["f"])("h1",null," Valentine's Day Letters")],-1)})),p=b((function(){return Object(s["f"])("div",{class:"title"},[Object(s["f"])("h2",null," Please select a language ")],-1)})),h={class:"languages"},g={key:0,class:"instructions"},j={key:0,class:"form-inputs"};function O(e,t,n,r,i,o){var a=Object(s["x"])("country-flag"),c=Object(s["x"])("Form");return Object(s["r"])(),Object(s["e"])("section",d,[f,Object(s["f"])("section",null,[p,Object(s["f"])("div",h,[Object(s["f"])("i",{onClick:t[0]||(t[0]=function(e){return o.setCountry("UK")}),class:Object(s["n"])({isActive:i.isUK})},[Object(s["h"])(a,{country:"gb",size:"big"})],2),Object(s["f"])("i",{onClick:t[1]||(t[1]=function(e){return o.setCountry("HR")}),class:Object(s["n"])({isActive:i.isHR})},[Object(s["h"])(a,{country:"hr",size:"big"})],2)]),i.shouldShowInstructions?(Object(s["r"])(),Object(s["e"])("div",g,[Object(s["f"])("h3",null,Object(s["z"])(o.chosenLanguage.instructionsTitle),1),Object(s["f"])("ul",null,[Object(s["f"])("li",null," 1. "+Object(s["z"])(o.chosenLanguage.instruction1),1),Object(s["f"])("li",null," 2. "+Object(s["z"])(o.chosenLanguage.instruction2),1),Object(s["f"])("li",null," 3. "+Object(s["z"])(o.chosenLanguage.instruction3),1),Object(s["f"])("li",null," 4. "+Object(s["z"])(o.chosenLanguage.instruction4),1)]),Object(s["f"])("button",{class:"instructions-button",onClick:t[2]||(t[2]=function(e){return i.shouldShowInstructions=!i.shouldShowInstructions})},Object(s["z"])(o.chosenLanguage.closeInstructionsText),1)])):Object(s["d"])("",!0)]),i.hasSetCountry?(Object(s["r"])(),Object(s["e"])("section",j,[Object(s["h"])(c,{language:o.chosenLanguage},null,8,["language"])])):Object(s["d"])("",!0)])}var m=n("b9a8"),v={for:"name"},y=["placeholder"],w={for:"message"},x=["placeholder"];function L(e,t,n,r,i,o){return Object(s["r"])(),Object(s["e"])("form",null,[Object(s["f"])("fieldset",null,[Object(s["f"])("label",v,Object(s["z"])(n.language.LabelPerson),1),Object(s["F"])(Object(s["f"])("input",{type:"text",id:"name",autocomplete:"name",placeholder:n.language.PersonInputPlaceholderText,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.personName=e}),required:"","aria-required":"true"},null,8,y),[[s["B"],i.personName]])]),Object(s["f"])("fieldset",null,[Object(s["f"])("label",w,Object(s["z"])(n.language.LabelMessage),1),Object(s["F"])(Object(s["f"])("textarea",{rows:"14",cols:"50",id:"message",autocomplete:"off",placeholder:n.language.MessageInputPlaceholderText,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.message=e}),required:"","aria-required":"true"},null,8,x),[[s["B"],i.message]])]),Object(s["f"])("fieldset",null,[Object(s["f"])("button",{onClick:t[2]||(t[2]=function(){return o.createObjectToSend&&o.createObjectToSend.apply(o,arguments)})},Object(s["z"])(n.language.FormButtonText),1)])])}var S=n("2817");n("e56b");const T=o()(S["a"],[["render",L],["__scopeId","data-v-56e49844"]]);var k=T,I={name:"Home",components:{Form:k},data:function(){return{isUK:!1,isHR:!1,hasSetCountry:!1,translations:m,shouldShowInstructions:!0}},methods:{setCountry:function(e){"UK"===e?(this.isUK=!0,this.isHR=!1,this.hasSetCountry=!0,this.shouldShowInstructions=!1):(this.isHR=!0,this.isUK=!1,this.hasSetCountry=!0,this.shouldShowInstructions=!1)}},computed:{english:function(){return this.translations.languages.english},croatian:function(){return this.translations.languages.croatian},chosenLanguage:function(){return this.isUK?this.english:this.isHR?this.croatian:this.english}}};n("c861");const P=o()(I,[["render",O],["__scopeId","data-v-4950ca64"]]);var C=P,z=function(e){return Object(s["u"])("data-v-798706e0"),e=e(),Object(s["s"])(),e},B={class:"wrapper"},_={class:"envelope"},K={class:"flip-box"},M={class:"flip-box-inner",id:"innerBox"},U={class:"flip-box-front"},D={class:"button-trigger-wrapper"},N={class:"button-trigger",id:"button"},F={class:"person-details-wrapper"},H={class:"person-details"},R=z((function(){return Object(s["f"])("h3",null," Addressed to: ",-1)})),E={class:"flip-box-back"},J=z((function(){return Object(s["f"])("div",{class:"triangle-down",id:"triangle"},null,-1)})),q={class:"paper-invisible",id:"paper"},V=Object(s["g"])(" Create your own letter ");function A(e,t,n,r,i,o){var a=Object(s["x"])("router-link");return Object(s["r"])(),Object(s["e"])("section",B,[Object(s["f"])("section",_,[Object(s["f"])("div",K,[Object(s["f"])("div",M,[Object(s["f"])("div",U,[Object(s["f"])("section",D,[Object(s["f"])("div",N,[Object(s["f"])("button",{onClick:t[0]||(t[0]=function(e){return o.addClassNameToTriangle()})}," open ")])]),Object(s["f"])("div",F,[Object(s["f"])("div",H,[R,Object(s["f"])("p",null,Object(s["z"])(i.receiver),1)])])]),Object(s["f"])("div",E,[J,Object(s["f"])("div",q,[Object(s["F"])(Object(s["f"])("p",null,Object(s["z"])(i.message),513),[[s["C"],i.shouldShowLetterDetails]])]),Object(s["h"])(a,{to:"/",tag:"button",id:"createYourOwn",class:"create-letter"},{default:Object(s["E"])((function(){return[V]})),_:1})])])])])])}var W=n("05ae");n("2b20");const Y=o()(W["a"],[["render",A],["__scopeId","data-v-798706e0"]]);var Z=Y,$=[{path:"/",name:"Home",component:C},{path:"/letter/:letterDetails",name:"Letter",component:Z,props:!0}],G=Object(l["a"])({history:Object(l["b"])(),routes:$}),Q=G,X=n("bb70");Object(s["b"])(u).component("country-flag",X["a"]).use(Q).mount("#app")},"62d0":function(e,t,n){"use strict";n("e232")},"74d7":function(e,t,n){},8862:function(e,t,n){},b9a8:function(e){e.exports=JSON.parse('{"languages":{"english":{"LabelPerson":"Who would you like to send a letter to?","PersonInputPlaceholderText":"Please type their name here...","LabelMessage":"What message would you like to display?","MessageInputPlaceholderText":"Your message...","FormButtonText":"Save message and view the letter","instructionsTitle":"How it works:","instruction1":"Choose the languge","instruction2":"Write the letter","instruction3":"Click the button","instruction4":"Copy the URL and share with your loved one","letterOpenText":"Open","closeInstructionsText":"close"},"croatian":{"LabelPerson":"Kome biste željeli poslati pismo?","PersonInputPlaceholderText":"Unesite njihovo ime ovdje...","LabelMessage":"Koju poruku želite da prikažemo?","MessageInputPlaceholderText":"Vasa poruka...","FormButtonText":"Spremi poruku i pogledaj pismo","instructionsTitle":"Kako koristiti:","instruction1":"Izaberite vas jezik","instruction2":"Napisite pismo","instruction3":"Kliknite gumb","instruction4":"Kopirajte URL i podijelite sa svojim voljenima","letterOpenText":"Otvori","closeInstructionsText":"Zatvori"}}}')},c861:function(e,t,n){"use strict";n("74d7")},e232:function(e,t,n){},e56b:function(e,t,n){"use strict";n("8862")}});
//# sourceMappingURL=app.02ee232c.js.map