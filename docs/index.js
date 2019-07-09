!function(A){var t={};function e(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return A[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=A,e.c=t,e.d=function(A,t,n){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:n})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var s in A)e.d(n,s,function(t){return A[t]}.bind(null,s));return n},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="",e(e.s=20)}([function(A,t,e){"use strict";function n(A){this.name="direction",this.direction=A}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";function n(A){this.name="spritesheet",this.spritesheet=A}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";function n(A,t,e){this.name="image",this.image=A,this.size=t,this.frame=e}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";e.r(t),function(A){var n=e(5);e.d(t,"destroy",function(){return n.a});var s=e(6);e.d(t,"render",function(){return s.a});var i=e(7);e.d(t,"setup",function(){return i.a});var r=e(8);e.d(t,"start",function(){return r.a});var o=e(9);e.d(t,"update",function(){return o.a}),void 0!==A.hot&&A.hot.accept(["./destroy.js","./render.js","./setup.js","./start.js","./update.js"])}.call(this,e(4)(A))},function(A,t){A.exports=function(A){if(!A.webpackPolyfill){var t=Object.create(A);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(A,t,e){"use strict";function n(){console.log("destroy loading scene"),console.log("-------"),delete this.state.redirect}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";function n(){this.context.fillStyle="#181a1f",this.context.fillRect(0,0,this.size.width,this.size.height),this.context.font="16px Courier New",this.context.textAlign="start",this.context.textBaseline="top",this.context.fillStyle="#6b717d",this.context.fillText("/ Theatre",8,8),this.context.fillStyle="#d7dae0",this.context.fillText("$ preloading assets...",8,32),!1===this.preloading&&(this.context.fillText("$ preloading completed",8,56),this.context.fillText("$ loading demo scene...",8,80))}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";function n(){console.log("setup loading scene")}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";function n(){console.log("start loading scene"),this.state.redirect=!1}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";function n(){var A=this;!1===this.preloading&&!1===this.state.redirect&&(setTimeout(function(){A.load("demo")},3e3),this.state.redirect=!0)}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";e.r(t),function(A){var n=e(11);e.d(t,"destroy",function(){return n.a});var s=e(14);e.d(t,"render",function(){return s.a});var i=e(15);e.d(t,"setup",function(){return i.a});var r=e(12);e.d(t,"start",function(){return r.a});var o=e(13);e.d(t,"update",function(){return o.a}),void 0!==A.hot&&A.hot.accept(["./destroy.js","./render.js","./setup.js","./start.js","./update.js"])}.call(this,e(4)(A))},function(A,t,e){"use strict";function n(){console.log("destroy demo scene"),this.keyboard.destroy(),delete this.inputs,delete this.world,delete this.keyboard,console.log("-------")}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";function n(A,t){this.components={},this.name=A,this.add=function(A){var t=this;!1===Array.isArray(A)&&(A=[A]),A.forEach(function(A){t.components[A.name]=A})},this.get=function(A){return this.components[A]},this.has=function(A){!1===Array.isArray(A)&&(A=[A]);for(var t=0,e=A.length;t<e;t+=1){var n=A[t],s=n.replace("not:",""),i=n!==s;if(this.components.hasOwnProperty(s)===i)return!1}return!0},this.remove=function(A){!1===Array.isArray(A)&&(A=[A]);for(var t=0,e=A.length;t<e;t+=1){var n=A[t];!0===this.components.hasOwnProperty(n)&&delete this.components[n]}},this.add(t)}var s=e(0);var i=e(2);function r(A,t){this.name="position",this.x=A,this.y=t}var o=e(1);function a(){console.log("start demo scene"),this.inputs.length=0,this.world=new function(A){this.entities={},this.add=function(A){var t=this;!1===Array.isArray(A)&&(A=[A]),A.forEach(function(A){t.entities[A.name]=A})},this.get=function(A){return this.entities[A]},this.remove=function(A){!1===Array.isArray(A)&&(A=[A]);for(var t=0,e=A.length;t<e;t+=1){var n=A[t],s=n.name||n;!0===this.entities.hasOwnProperty(s)&&delete this.entities[s]}},this.system=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.entities;for(var s in n)!0===n.hasOwnProperty(s)&&!0===n[s].has(t)&&e.call(A,n[s])}}(this),this.world.add(new n("hero",[new s.a("DOWN"),new i.a(this.assets.images.demo.wizard(),[32,32],[3,2]),new function(A){this.name="input",this.inputs=A}(["KEY_UP","KEY_RIGHT","KEY_DOWN","KEY_LEFT"]),new r(this.size.width/2-16,this.size.height/2-16),new o.a(this.assets.datasets.demo.wizard())])),this.world.add(new n("framerate",[new r(8,8),new function(A){this.name="text",this.text=A}("fps:60"),new function(){this.name="framerate",this.elapsed=0,this.frames=0},new function(A,t){this.name="alphabet",this.image=A,this.size=t}(this.assets.images.demo.font(),[16,32]),new o.a(this.assets.datasets.demo.font())]))}e.d(t,"a",function(){return a})},function(A,t,e){"use strict";function n(A){var t=A.get("animation");if(t.frames.length>1){t.elapsed+=this.delta.update;for(var e=1e3/t.framerate;t.elapsed>=e;)t.elapsed-=e,t.frame=t.frame===t.frames.length-1?0:t.frame+1,t.current=t.frames[t.frame]}}function s(A,t){this.name="animation",this.framerate=t||8,this.frames=A,this.frame=0,this.current=this.frames[this.frame],this.elapsed=0}var i=e(0);e(2);function r(){this.name="run"}e(1);function o(A){this.inputs.forEach(function(t){var e=A.get("direction"),n=A.get("image"),o=A.get("input"),a=A.get("spritesheet");if(-1!==o.inputs.indexOf(t.action)&&"DOWN"===t.state)switch(t.action){case"KEY_UP":A.add([new r,new i.a("UP"),new s(a.spritesheet.RUN_UP)]);break;case"KEY_RIGHT":A.add([new r,new i.a("RIGHT"),new s(a.spritesheet.RUN_RIGHT)]);break;case"KEY_DOWN":A.add([new r,new i.a("DOWN"),new s(a.spritesheet.RUN_DOWN)]);break;case"KEY_LEFT":A.add([new r,new i.a("LEFT"),new s(a.spritesheet.RUN_LEFT)])}else if(!0===A.has(["run"])&&-1!==o.inputs.indexOf(t.action)&&"UP"===t.state)switch(t.action){case"KEY_UP":"UP"===e.direction&&(A.remove(["animation","run"]),n.frame=a.spritesheet.IDLE_UP);break;case"KEY_RIGHT":"RIGHT"===e.direction&&(A.remove(["animation","run"]),n.frame=a.spritesheet.IDLE_RIGHT);break;case"KEY_DOWN":"DOWN"===e.direction&&(A.remove(["animation","run"]),n.frame=a.spritesheet.IDLE_DOWN);break;case"KEY_LEFT":"LEFT"===e.direction&&(A.remove(["animation","run"]),n.frame=a.spritesheet.IDLE_LEFT)}})}function a(A){A.get("image").frame=A.get("animation").current}function f(){this.world.system(["input"],o),this.world.system(["animation"],n),this.world.system(["animation","image"],a),this.inputs.length=0}e.d(t,"a",function(){return f})},function(A,t,e){"use strict";function n(A){var t=A.get("framerate");t.elapsed+=this.delta.render,t.frames+=1,t.elapsed>=1e3&&(A.get("text").text="fps:"+Math.round(1e3*t.frames/t.elapsed),t.elapsed=0,t.frames=0)}function s(A){var t=A.get("image"),e=A.get("position");this.context.drawImage(t.image,t.frame[0]*t.size[0],t.frame[1]*t.size[1],t.size[0],t.size[1],e.x,e.y,t.size[0],t.size[1])}function i(A){var t=this,e=A.get("alphabet"),n=A.get("position"),s=A.get("spritesheet");A.get("text").text.split("").forEach(function(A,i){t.context.drawImage(e.image,s.spritesheet[A][0]*e.size[0],s.spritesheet[A][1]*e.size[1],e.size[0],e.size[1],n.x+i*e.size[0],n.y,e.size[0],e.size[1])})}function r(){this.context.fillStyle="#a8c0b0",this.context.fillRect(0,0,this.size.width,this.size.height),this.world.system(["framerate"],n),this.world.system(["image","position"],s),this.world.system(["alphabet","position"],i)}e.d(t,"a",function(){return r})},function(A,t,e){"use strict";var n=[];n[9]="TAB",n[13]="ENTER",n[16]="SHIFT",n[17]="CTRL",n[18]="ALT",n[27]="ESC",n[32]="SPACE",n[37]="LEFT",n[38]="UP",n[39]="RIGHT",n[40]="DOWN",n[48]="ZERO",n[49]="ONE",n[50]="TWO",n[51]="THREE",n[52]="FOUR",n[53]="FIVE",n[54]="SIX",n[55]="SEVEN",n[56]="EIGHT",n[57]="NINE",n[65]="A",n[66]="B",n[67]="C",n[68]="D",n[69]="E",n[70]="F",n[71]="G",n[72]="H",n[73]="I",n[74]="J",n[75]="K",n[76]="L",n[77]="M",n[78]="N",n[79]="O",n[80]="P",n[81]="Q",n[82]="R",n[83]="S",n[84]="T",n[85]="U",n[86]="V",n[87]="W",n[88]="X",n[89]="Y",n[90]="Z";var s=37,i=38,r=39,o=40;function a(){console.log("setup demo scene"),this.inputs=[],this.keyboard=new function(A,t){var e=[],s={};function i(){for(var A in s)s.hasOwnProperty(A)&&!0===s[A]&&(s[A]=!1,t.push({type:"KEYBOARD",action:A,state:"UP"}))}function r(n){var i=n.keyCode,r=A.indexOf(i);-1!==r&&!1===s[e[r]]&&(n.preventDefault(),s[e[r]]=!0,t.push({type:"KEYBOARD",action:e[r],state:"DOWN"}))}function o(n){var i=n.keyCode,r=A.indexOf(i);-1!==r&&!0===s[e[r]]&&(n.preventDefault(),s[e[r]]=!1,t.push({type:"KEYBOARD",action:e[r],state:"UP"}))}function a(){addEventListener("blur",i),addEventListener("keydown",r),addEventListener("keyup",o)}A.forEach(function(t){if(void 0!==n[t]){var i="KEY_"+n[t];A.push(t),e.push(i),s[i]=!1}}),a.call(this),this.destroy=function(){removeEventListener("blur",i),removeEventListener("keydown",r),removeEventListener("keyup",o)},this.setup=a}([i,r,o,s],this.inputs)}e.d(t,"a",function(){return a})},function(A){A.exports={0:[0,8],1:[1,8],2:[2,8],3:[3,8],4:[4,8],5:[5,8],6:[6,8],7:[7,8],8:[8,8],9:[9,8],f:[5,7],p:[15,7],s:[18,7],":":[22,8]}},function(A){A.exports={IDLE_UP:[3,0],IDLE_RIGHT:[3,1],IDLE_DOWN:[3,2],IDLE_LEFT:[3,3],RUN_UP:[[0,0],[1,0],[2,0],[3,0]],RUN_RIGHT:[[0,1],[1,1],[2,1],[3,1]],RUN_DOWN:[[0,2],[1,2],[2,2],[3,2]],RUN_LEFT:[[0,3],[1,3],[2,3],[3,3]]}},function(A,t){A.exports="data:image/png;base64,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"},function(A,t){A.exports="data:image/png;base64,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"},function(A,t,e){"use strict";e.r(t);var n={};e.r(n),e.d(n,"loading",function(){return a}),e.d(n,"demo",function(){return f});var s=[{name:"font",scope:"demo",source:e(16),type:"dataset"},{name:"wizard",scope:"demo",source:e(17),type:"dataset"}],i=[{name:"font",scope:"demo",source:e(18),type:"image"},{name:"wizard",scope:"demo",source:e(19),type:"image"}];function r(A){return function(A){if(Array.isArray(A)){for(var t=0,e=new Array(A.length);t<A.length;t++)e[t]=A[t];return e}}(A)||function(A){if(Symbol.iterator in Object(A)||"[object Arguments]"===Object.prototype.toString.call(A))return Array.from(A)}(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=[].concat(r(s),r(i),r([])),a=e(3),f=e(10);new function(A){var t=A.assets,e=A.container,n=A.scenes,s=A.size,i=A.expose||!1,r=A.framerate||60,o=A.sharp||!1,a=A.speed||1,f=null,c=!1;this.preloading=!1,this.scenes=n,this.size=s,this.state={},this.version="0.29.0",this.load=function(A){f=A},this.restart=function(){c=!0},function(){var A=this,n=new function(A,t,e,n){var s=document.createElement("canvas"),i=s.getContext(A),r=window.devicePixelRatio||1;s.setAttribute("id",t),s.setAttribute("height",r*n),s.setAttribute("width",r*e),s.style.height=n+"px",s.style.width=e+"px",i.scale(r,r),this.context=i,this.element=s,this.sharp=function(){this.element.style.imageRendering="-moz-crisp-edges",this.element.style.imageRendering="-webkit-crisp-edges",this.element.style.imageRendering="crisp-edges",this.element.style.imageRendering="pixelated",this.context.imageSmoothingEnabled=!1}}("2d","theatre",this.size.width,this.size.height);!0===o&&n.sharp(),e.appendChild(n.element),this.container=e,this.context=n.context,this.element=n.element,this.assets={},this.delta={},this.delta.render=0,this.delta.update=0,this.scene=this.scenes.loading,this.scene.setup.call(this),this.scene.start.call(this);var s=new function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=0,n=null,s=null;this.framerate=A,this.speed=t,this.render=function(A){var t=Date.now();null!==n&&A(t-n),requestAnimationFrame(this.render.bind(this,A)),n=t},this.update=function(A){var t=Date.now();for(null!==s&&(e+=t-s);e>=1e3/this.framerate/this.speed;)e-=1e3/this.framerate/this.speed,A(1e3/this.framerate);s=t,setTimeout(this.update.bind(this,A),1e3/Math.max(this.framerate,60))}}(r,a);s.update(function(t){return A.delta.update=t,A.scene.update.call(A),!0===c?(A.scene.start.call(A),void(c=!1)):null!==f?(A.scene.destroy.call(A),A.scene=A.scenes[f],A.scene.setup.call(A),A.scene.start.call(A),void(f=null)):void 0}),s.render(function(t){A.delta.render=t,A.scene.render.call(A)}),function(A,t){var e=[];A.forEach(function(A){var t=new Promise(function(t,e){if("dataset"===A.type&&(A.getter=function(){return A.source},t(A)),"image"===A.type){var n=new Image;n.src=A.source,n.onload=function(){A.getter=function(){return n},t(A)}}else if("sound"===A.type){var s=new Audio(A.source);s.oncanplaythrough=function(){A.getter=function(){return s.cloneNode()},t(A)}}});e.push(t)}),Promise.all(e).then(t)}(t,function(t){t.forEach(function(t){void 0===A.assets[t.type+"s"]&&(A.assets[t.type+"s"]={}),void 0===A.assets[t.type+"s"][t.scope]&&(A.assets[t.type+"s"][t.scope]={}),A.assets[t.type+"s"][t.scope][t.name]=t.getter}),A.preloading=!1}),this.loop=s,this.preloading=!0}.call(this,A),!0===i&&(window.theatre=this)}({assets:o,container:document.body,expose:!0,scenes:n,sharp:!0,size:{width:320,height:288}})}]);
//# sourceMappingURL=index.js.map