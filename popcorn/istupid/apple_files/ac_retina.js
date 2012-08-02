if(!Function.prototype.bind){Function.prototype.bind=function bind(){if(arguments.length<2&&typeof(arguments[0])==undefined){return this
}var a=this,c=AC.Array.toArray(arguments),b=c.shift();return function(){return a.apply(b,c.concat(AC.Array.toArray(arguments)))
}}}if(!Array.isArray){Array.isArray=function isArray(a){return(a&&typeof a==="object"&&"splice" in a&&"join" in a)
}}if(!Array.prototype.forEach){Array.prototype.forEach=function forEach(f,e){var d=Object(this),a=this.length,b=0,c;
if(typeof f!=="function"){throw"No function object passed to forEach."}for(b=0;
b<a;b++){c=d[b];f.call(e,c,b,d)}}}if(!String.prototype.trim){String.prototype.trim=function trim(){return this.replace(/^\s+|\s+$/g,"")
}}if(!Object.keys){Object.keys=function keys(b){var a=[],c;if((!b)||(typeof b.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(c in b){if(b.hasOwnProperty(c)){a.push(c)}}return a}}if(!Object.create){Object.create=function(b){if(arguments.length>1){throw new Error("Object.create implementation only accepts the first parameter.")
}function a(){}a.prototype=b;return new a()}}var AC=window.AC||{};AC.Array=AC.Array||{};
AC.Array.toArray=function(a){return Array.prototype.slice.call(a)};AC.Array.flatten=function(c){var a=[];
var b=function(d){if(Array.isArray(d)){d.forEach(b)}else{a.push(d)}};c.forEach(b);
return a};var AC=window.AC||{};AC.Element=AC.Element||{};AC.Element.addEventListener=function(d,a,c){if(d.addEventListener){d.addEventListener(a,c,false)
}else{if(d.attachEvent){var b=d.attachEvent("on"+a,c)}else{d["on"+a]=c}}return d
};AC.Element.removeEventListener=function(c,a,b){if(c.removeEventListener){c.removeEventListener(a,b,false)
}else{c.detachEvent("on"+a,b)}return c};AC.Element.getElementById=function(a){if(AC.String.isString(a)){return document.getElementById(a)
}else{return a}};AC.Element.getStyle=function(b,c){b=AC.Element.getElementById(b);
c=c=="float"?"cssFloat":c;var d=b.style[c];if(!d||d=="auto"){var a=document.defaultView.getComputedStyle(b,null);
d=a?a[c]:null}if(c=="opacity"){return d?parseFloat(d):1}return d=="auto"?null:d
};AC.Element.hasClassName=function(c,b){var a=AC.Element.getElementById(c);if(a&&a.className){return a&&a.className&&a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))||false
}};AC.Element.addClassName=function(c,b){var a=AC.Element.getElementById(c);if(!AC.Element.hasClassName(a,b)){a.className+=" "+b
}};AC.Element.removeClassName=function(c,b){var a=AC.Element.getElementById(c);
if(AC.Element.hasClassName(a,b)){var d=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(d,"")
}};var AC=window.AC||{};AC.Event=AC.Event||{};AC.Event.stop=function(a){if(!a){a=window.event
}if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}if(a.preventDefault){a.preventDefault()
}a.stopped=true};AC.Event.target=function(a){return(typeof a.target!="undefined")?a.target:a.srcElement
};var AC=window.AC||{};AC.Function=AC.Function||{};AC.Function.emptyFunction=function(){};
AC.Function.bindAsEventListener=function(a){var c=AC.Array.toArray(arguments),b=c.shift();
return function(d){return a.apply(b,[d||window.event].concat(c))}};var AC=window.AC||{};
AC.Object=AC.Object||{};if(Object.extend){AC.Object.extend=Object.extend}else{AC.Object.extend=function extend(a,c){for(var b in c){a[b]=c[b]
}return a}}if(Object.clone){AC.Object.clone=Object.clone}else{AC.Object.clone=function clone(a){return AC.Object.extend({},a)
}}var AC=window.AC||{};AC.String=AC.String||{};AC.String.isString=function(a){return typeof a=="string"
};var AC=window.AC||{};AC.Object.extend(AC,{uid:function ac_uid(){if(!AC._uid){AC._uid=0
}return AC._uid++},log:function ac_log(a){if(window.console&&console.log){console.log(a)
}},namespace:function ac_namespace(b){if(!(b&&b.match&&b.match(/\S/))){throw"Attempt to create AC.namespace with no name."
}var a=b.split(/\./),c=window;for(i=0;i<a.length;i++){c[a[i]]=c[a[i]]||{};c=c[a[i]]
}},bindEventListeners:function ac_bindEventListeners(c,b,e){var d=AC.Element.getElementById(b);
if(!(d&&d.nodeType)){throw"Invalid or non-existent element passed to bindEventListeners."
}for(aKey in e){var a=e[aKey];if(typeof a=="function"){AC.Element.addEventListener(d,aKey,AC.Function.bindAsEventListener(a,c))
}else{if(typeof a=="string"){AC.Element.addEventListener(d,aKey,AC.Function.bindAsEventListener(c[a],c))
}}}}});AC.Object.extend(AC,{__domReady:function ac___domReady(){if(arguments.callee.done){return
}arguments.callee.done=true;if(this._timer){clearInterval(this._timer)}AC.isDomReady=true;
if(AC.__domReadyCallbacks){AC.__domReadyCallbacks.forEach(function(a){a()})}AC.__domReadyCallbacks=null
},onDOMReady:function ac_onDOMReady(b){if(AC.isDomReady){b()}else{if(!AC.__domReadyCallbacks){var a=this.__domReady.bind(this);
if(document.addEventListener){document.addEventListener("DOMContentLoaded",a,false)
}if(document.all){document.onreadystatechange=function(){if(this.readyState=="complete"){a()
}}}if(/WebKit/i.test(navigator.userAgent)){this._timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){a()
}},10)}AC.Element.addEventListener(window,"load",a);AC.__domReadyCallbacks=[]}AC.__domReadyCallbacks.push(b)
}}});AC.windowHasLoaded=false;AC.Element.addEventListener(window,"load",function(){AC.windowHasLoaded=true
});AC.namespace("AC.Synthesize");AC.Synthesize.synthesize=function(c){if(typeof c!=="object"){c=this
}var b,a;for(a in c){if(c.hasOwnProperty(a)){if(a.charAt(0)==="_"&&!(a.charAt(1)==="_")){if(typeof c[a]!=="function"){this.__synthesizeGetter(a,c);
this.__synthesizeSetter(a,c)}}}}};AC.Synthesize.__synthesizeGetter=function(a,b){var c=a.slice(1,a.length);
if(typeof b[c]==="undefined"){b[c]=function(){return b[a]}}};AC.Synthesize.__synthesizeSetter=function(a,b){var c=a.slice(1,a.length);
c="set"+c.slice(0,1).toUpperCase()+c.slice(1,c.length);if(typeof b[c]==="undefined"){b[c]=function(d){b[a]=d
}}};AC.namespace("AC.Object");AC.Object.synthesize=function(a){if(typeof a==="object"){AC.Object.extend(a,AC.Object.clone(AC.Synthesize));
a.synthesize();return a}else{throw"Argument supplied was not a valid object.";return a
}};AC.Class=function(b){var a=function(){if(Array.isArray(this._subclassPlaceholders)){for(var e=0;
e<this._subclassPlaceholders.length;e++){var f=this._subclassPlaceholders[e];if(!this[f]){this[f]=function(){throw"Subclasses must implement "+f+"."
}}}}AC.Object.synthesize(this);this.superclass=function(){if(!this.__superclass){throw"Attempted to call superclass() within an instance whose class was not built using AC.Subclass."
}if(!this.__closureDepths){this.__closureDepths={}}var p={};var j=this;for(var k in j){if(k!="superclass"&&k!="__superclass"&&typeof this[k]=="function"){var g=this.__closureDepths[k]||0;
var n=this;var h=0;while(n&&(h<=g)){n=n.__superclass;if(n&&n.prototype&&typeof n.prototype[k]=="function"){h++
}}if(n){var l=""+k;var q=h-1;var m=n.prototype;p[l]=function o(r,s,u){return function t(){this.__closureDepths[r]=s+1;
u[r].apply(this,arguments);this.__closureDepths[r]=s}.bind(this)}.bind(this)(k,h-1,n.prototype)
}}}return p};var c=(this.initialize?this.initialize.apply(this,arguments):false);
if(c==AC.Class.Invalidate){var d=function(){try{if(this&&this["_parentClass"]&&this["_parentClass"]["_sharedInstance"]==this){this["_parentClass"]["_sharedInstance"]=null
}}catch(g){throw g}};setTimeout(d.bind(this),200)}};a.autocreate=b;a.sharedInstance=function(){if(!a._sharedInstance){a._sharedInstance=new a();
a._sharedInstance["_parentClass"]=a}return a._sharedInstance};a.sharedInstanceShortcut=function(c){if(!(c&&c.match&&c.match(/\S/))){throw"No shortcut name provided."
}if(AC[c]){throw"Cannot use shortcuts to override existing objects in the AC namespace."
}AC[c]=a.sharedInstance;return a};if(b){AC.onDOMReady(function(){if(a.autocreate){a.sharedInstance()
}})}return a};AC.Class.Subclass=function(d,b,c){var a=this.Class(c);AC.Object.extend(AC.Object.extend(a.prototype,AC.Object.extend(d.prototype)),b||{});
a.__superclass=d;a.prototype.__superclass=d;return a};AC.Class.Invalidate=function(){return false
};AC.namespace("AC.Ajax");AC.Ajax.getTransport=function(){var a=false;try{a=new XMLHttpRequest()
}catch(b){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{a=new ActiveXObject("Microsoft.XMLHTTP")
}catch(b){a=false}}}return a};AC.Ajax.AjaxTracker=AC.Class();AC.Ajax.AjaxTracker.prototype={_responders:[],initialize:function ac_initialize(){},addResponder:function ac_addResponder(a){this._responders.push(a)
},removeResponder:function ac_removeResponder(a){var c=0,b=this._responders.length;
for(c=0;c<b;c++){if(this._responders[c]==a){a=null;this._responders.splice(c,1);
return true}}return false}};AC.Ajax.AjaxRequest=AC.Class();AC.Ajax.AjaxRequest.prototype={_transport:null,_defaultOptions:{method:"get"},_options:null,_mimeTypeOverride:null,initialize:function ac_initialize(b,a){this._transport=AC.Ajax.getTransport();
this.setOptions(AC.Object.extend(this.defaultOptions(),a));AC.Ajax.AjaxTracker.sharedInstance().addResponder(this);
this.transport().onreadystatechange=this._handleTransportStateChange.bind(this);
this.transport().open(this.options().method,b,true);this.transport().setRequestHeader("Content-Type",this.options().contentType);
this.transport().send(null)},_handleTransportStateChange:function ac__handleTransportStateChange(){if(this.transport().readyState==4){new AC.Ajax.AjaxResponse(this)
}},overrideMimeType:function ac_overrideMimeType(a){this._mimeTypeOverride=a;if(this.transport().overrideMimeType){this.transport().overrideMimeType(a)
}}};AC.Ajax.AjaxResponse=AC.Class();AC.Ajax.AjaxResponse.prototype={_request:null,_transport:null,initialize:function ac_initialize(b){var a=false,c=b.transport();
this._transport=c;this._request=b;if(c.readyState==4){if(c.status>=200&&c.status<300){b.options().onSuccess?b.options().onSuccess(this):AC.Function.emptyFunction();
a=true}}else{if(c.status>=400&&c.status<500){b.options().onFailure?b.options().onFailure(this):AC.Function.emptyFunction();
a=true}else{if(c.status>=300&&c.status<400){a=true}else{if(c.status>=500&&c.status<600){b.options().onError?b.options().onError(this):AC.Function.emptyFunction();
a=true}}}}if(a===true){b.options().onComplete?b.options().onComplete(this):AC.Function.emptyFunction();
AC.Ajax.AjaxTracker.sharedInstance().removeResponder(b)}},responseText:function ac_responseText(){return this._transport.responseText
},responseXML:function ac_responseXML(){return this._transport.responseXML},responseJSON:function ac_responseJSON(){return JSON.parse?JSON.parse(this._transport.responseText):(new Function("return "+this._transport.responseText)())
}};AC.Ajax.checkURL=function(a,c){var b=AC.Ajax.getTransport();b.onreadystatechange=function(){if(this.readyState===4&&this.status===200){c()
}};b.open("HEAD",a,true);b.send(null)};AC.Ajax.AjaxRequest.prototype._overrideMimeType=null;
AC.Ajax.AjaxRequest.prototype.overrideMimeType=function(a){this._overrideMimeType=a;
if(this.transport.overrideMimeType){this.transport.overrideMimeType(a)}};AC.Retina=AC.Class();
AC.Retina.prototype={__defaultOptions:{filenameRegex:/(.*)(\.[a-z]{3}($|#.*|\?.*))/i,filenameInsert:"_☃x",ignoreCheck:/(^http:\/\/movies\.apple\.com\/|\/105\/|\/global(\/ac_media_player)?\/elements\/quicktime\/|_(([2-9]|[1-9][0-9]+)x|nohires)(\.[a-z]{3})($|#.*|\?.*))/i,attribute:"data-hires",recursive:true,preload:false,checkExists:true,checkAsRootRelative:true,queueSize:8,disableOniOSHandheld:true,debug:false,lowestPriority:2,replacedAttribute:"data-hires-status"},initialize:function ac_initialize(b){if(typeof b!=="object"){b={}
}this.options=AC.Object.extend(AC.Object.clone(this.__defaultOptions),b);if((this.options.debug!==true)&&!this.shouldReplace()){this.replace=AC.Function.emptyFunction;
return false}if(this.options.debug===true){AC.Retina._devicePixelRatio=2}this._replacedElements=[];
AC.Object.synthesize(this);if(AC.windowHasLoaded){this.__setup()}else{var a=this.__setup.bind(this);
AC.Element.addEventListener(window,"load",a)}},shouldReplace:function ac_shouldReplace(){return !((AC.Retina.iOSHandheld()&&this.options.disableOniOSHandheld===true)||(AC.Retina.devicePixelRatio()<=1))
},__setup:function ac___setup(){this.replace(document.body)},__addToQueue:function ac___addToQueue(a){if(typeof this.__queues==="undefined"){this.__queues=[]
}if(this.__queues.length===0){this.__queues.push([])}this.__queues[this.__queues.length-1].push(a)
},__potentialElements:function ac___potentialElements(g,f){if(typeof g==="undefined"){g=document.body
}else{g=AC.Element.getElementById(g)}var b=AC.Array.toArray(g.querySelectorAll("["+this.options.attribute+"]"));
var a;var c=function(h){if(typeof f==="undefined"){return !!AC.Retina.__ancestorHasAttribute(f,h)
}else{return f.getAttribute(h)!==null||typeof f.up("["+h+"]")!=="undefined"}};if(this.options.recursive===true){if(g!==document.body&&c(this.options.attribute)){b=b.concat(g)
}a=[];var e=this.__isReplaceable.bind(this);var d=function(h){if(e(h)){a.push(h)
}a=a.concat(this.__replaceableElementsWithinElement(h))}.bind(this);b.forEach(d)
}else{a=b}return a},__isReplaceable:function ac___isReplaceable(c){if((c.getAttribute(this.options.attribute)==="false")||(!!AC.Retina.__ancestorHasAttribute(c,this.options.attribute,"false")&&this.options.recursive===true)){return false
}var a=(typeof c.responsiveImageObject==="undefined");if(c.tagName.toLowerCase()==="img"){return a
}else{if(AC.Element.hasClassName(c,"imageLink")&&c.tagName.toLowerCase()==="a"){return true
}else{var b=AC.Retina.Image.removeCSSURLSyntax(AC.Element.getStyle(c,"background-image"));
return(((b.match(AC.Retina.rasterImageFormatRegex())!==null)&&a))}}},__replaceableElementsWithinElement:function ac___replaceableElementsWithinElement(e){e=AC.Element.getElementById(e);
var a=this;var c=e.getElementsByTagName("*");var b=[];var d;for(d=0;d<c.length;
d++){if(this.__isReplaceable(c[d])){b.push(c[d])}}return b},__prioritize:function ac___prioritize(a){var c=[];
var d=function(f){if(typeof f.responsiveImageObject!=="undefined"){return}var e=new AC.Retina.Image(f,this.options);
if(e.hiResSrc()!==null&&!e.isHiRes()){if(typeof c[e.priority()]==="undefined"){c[e.priority()]=[]
}c[e.priority()].push(e);f.responsiveImageObject=e}else{if(e.hiResSrc()&&e.isHiRes()){e.setStatus("already-hires")
}else{e.setStatus("not-replaceable")}}}.bind(this);a.forEach(d);var b;for(b=this.options.lowestPriority;
b>=0;b--){if(typeof c[b]==="undefined"){c[b]=[]}}return AC.Array.flatten(c)},__replaceQueues:function ac___replaceQueues(){if(typeof this.__queues==="undefined"){this.__queues=[]
}if(this.__queues.length>0&&this.__queues[0].length>0){this.__queues.push([]);var a=this.__replaceQueues.bind(this);
this.__replaceNextQueue(a)}},__replaceNextQueue:function ac___replaceNextQueue(e){var b=this;
var a=b.__queues[0].reverse();var c=function(){if(b.options.debug===true){AC.log(arguments)
}};b.__queues.splice(0,1);var d=function(){c("Found "+a.length+" elements to replace.");
var f=function(){var h=a.pop();b._replacedElements.push(h);if(!h){c("No more images to start replacing.");
if(typeof e==="function"){e()}e=AC.Function.emptyFunction;return}h.replace(function(j){c("Replaced image.",h.hiResSrc(),"status: "+h.status());
f()})};for(var g=0;g<b.options.queueSize;g++){f()}};window.setTimeout(d,10)},replace:function ac_replace(c,a){var b=this.__addToQueue.bind(this);
this.__prioritize(this.__potentialElements(c,a)).forEach(b);this.__replaceQueues()
}};AC.Retina.iOSHandheld=function(){return(!!navigator.userAgent.match(/AppleWebKit/i)&&(!!navigator.userAgent.match(/Mobile/i)&&!navigator.userAgent.match(/ipad/i)))
};AC.Retina._rasterImageFormatRegex=/(\.jpg($|#.*|\?.*)|\.png($|#.*|\?.*)|\.gif($|#.*|\?.*))/;
AC.Retina.rasterImageFormatRegex=function(){return AC.Retina._rasterImageFormatRegex
};AC.Retina.devicePixelRatio=function(){if(typeof AC.Retina._devicePixelRatio!=="undefined"){return AC.Retina._devicePixelRatio
}if("devicePixelRatio" in window&&window.devicePixelRatio>1){return AC.Retina._devicePixelRatio=2
}else{return AC.Retina._devicePixelRatio=1}};AC.Retina.__ancestorHasAttribute=function(d,a,e){var c=AC.Retina.__ancestors(d);
var b;for(b=0;b<c.length;b++){if((c[b].getAttribute(a)===e)||(!e&&c[b].hasAttribute(a))){return c[b]
}}return null};AC.Retina.__ancestors=function(a,c){a=AC.Element.getElementById(a);
var b=[];while(a=a.parentNode){if(a.nodeType==1){b.push(a)}}return b};AC.Retina.sharedInstance();
AC.Retina.Image=AC.Class();AC.Retina.Image.prototype={initialize:function ac_initialize(b,a){this._el=b;
this._tagName=this._el.tagName.toLowerCase();this.options=AC.Object.extend(AC.Object.clone(a),AC.Retina.Image.convertParametersToOptions(this.src()));
this.setStatus("considered");AC.Object.synthesize(this)},setStatus:function ac_setStatus(a){if(typeof a==="string"){this._status=a;
this._el.setAttribute(this.options.replacedAttribute,a)}},status:function ac_status(){return this._el.getAttribute(this.options.replacedAttribute)
},src:function ac_src(){if(typeof this._src!=="undefined"){return this._src}if(this.isImageLink()){this._src=this._el.getAttribute("href")
}else{if(this._tagName==="img"){this._src=this._el.getAttribute("src")}else{this._src=AC.Retina.Image.removeCSSURLSyntax(AC.Element.getStyle(this._el,"background-image"));
if(this._src==="none"){return this._src=""}}}return this._src},isImageLink:function ac_isImageLink(){if(typeof this._isImageLink!=="undefined"){return this._isImageLink
}return this._isImageLink=(AC.Element.hasClassName(this._el,"imageLink")&&this._tagName==="a")
},hiResSrc:function ac_hiResSrc(){if(typeof this._hiResSrc!=="undefined"){return this._hiResSrc
}var a;if(typeof this.options.hiresFormat==="string"){a=this.src().match(/^(.*)((\.[a-z]{3})($|#.*|\?.*))/i);
if(a!==null&&a.length>1){return this._hiResSrc=a[1]+"."+this.options.hiresFormat+(a[4]||"")
}}a=this.src().match(this.options.filenameRegex);if(a===null){return this._hiResSrc=null
}else{return this._hiResSrc=a[1]+this.options.filenameInsert.replace("☃",AC.Retina.devicePixelRatio())+a[2]
}},isHiRes:function ac_isHiRes(){if(this._isHiRes===true){return this._isHiRes}if(this.status()==="replaced"){return this._isHiRes=true
}var a=this.src();if(a.match(AC.Retina.rasterImageFormatRegex())===null){return this._isHiRes=true
}if(a.match(this.options.ignoreCheck)!==null){return this._isHiRes=true}return this._isHiRes=false
},priority:function ac_priority(){if(typeof this._priority!=="undefined"){return this._priority
}if(this.options.recursive&&this._el.hasAttribute(this.options.attribute)===false){var a=AC.Retina.__ancestorHasAttribute(this._el,this.options.attribute);
if(!!a){this._priority=parseInt(a.getAttribute(this.options.attribute))}else{this._priority=this.options.lowestPriority
}}else{this._priority=parseInt(this._el.getAttribute(this.options.attribute))}if(isNaN(this._priority)||this._priority>this.options.lowestPriority){this._priority=this.options.lowestPriority
}else{if(this._priority<0){this._priority=0}}return this._priority},replace:function ac_replace(e){var c=this;
var b=c.replace.bind(c,e);var a=c.hiResSrc();var d;if(c._exists===false){c.setStatus("404");
if(typeof e==="function"){e(false)}return}if(c.options.checkExists===true&&typeof c._exists==="undefined"){if(c.options.checkAsRootRelative===true||(a.indexOf(window.location.origin)===0||a.indexOf("/")===0)){d=(c.options.checkAsRootRelative===true)?a.replace(/^http:\/\/.*\.apple\.com\//,"/"):a;
c._exists=false;return AC.Ajax.checkURL(d,function(){c._exists=true;b()})}}if(c.isImageLink()){c._el.setAttribute("href",a);
c.setStatus("replaced");if(typeof e==="function"){e(true)}}else{if((c.options.preload===true||c._tagName!=="img")&&c._isPreloaded!==true){return c.preload(b)
}if(c._tagName==="img"){c._el.setAttribute("src",a);if((c.options.preload!==true)){c.setStatus("loading");
AC.Element.addEventListener(c._el,"load",function(f){c.setStatus("replaced");if(typeof e==="function"){e(true)
}});AC.Element.addEventListener(c._el,"error",function(f){c.setStatus("404");c._el.setAttribute("src",c.src());
if(typeof e==="function"){e(false)}})}}else{c._el.setStyle("background-image:url("+a+");");
c._el.setStyle("background-size:"+(c.width/AC.Retina.devicePixelRatio())+"px "+(c.height/AC.Retina.devicePixelRatio())+"px;");
if(typeof e==="function"){e(true)}}}c.synthesize()},preload:function ac_preload(b){if(this._isPreloaded){return true
}this.setStatus("loading");var a=new Element("img");AC.Element.addEventListener(a,"load",function(){this._isPreloaded=true;
this.width=a.width;this.height=a.height;this.setStatus("replaced");if(typeof b==="function"){b()
}}.bind(this));AC.Element.addEventListener(a,"error",function(){this.setStatus("404");
this._exists=false;if(typeof b==="function"){b()}}.bind(this));a.src=this.hiResSrc()
}};AC.Retina.Image.removeCSSURLSyntax=function(a){if(typeof a==="string"&&typeof a.replace==="function"){return a.replace(/^url\(/,"").replace(/\)$/,"")
}return""};AC.Retina.Image.convertParametersToOptions=function(b){if(typeof b==="string"&&typeof b.toQueryParams==="function"){var a=b.toQueryParams(),c;
for(c in a){if(a.hasOwnProperty(c)){a[c.camelize()]=a[c]}}return a}return{}};