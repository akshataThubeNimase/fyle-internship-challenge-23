"use strict";(self.webpackChunkfyle_internship_challenge_23=self.webpackChunkfyle_internship_challenge_23||[]).push([[461],{935:()=>{const ee=globalThis;function Q(t){return(ee.__Zone_symbol_prefix||"__zone_symbol__")+t}const ye=Object.getOwnPropertyDescriptor,Oe=Object.defineProperty,Ne=Object.getPrototypeOf,ft=Object.create,ht=Array.prototype.slice,Ie="addEventListener",Le="removeEventListener",Me=Q(Ie),Ze=Q(Le),ce="true",ae="false",pe=Q("");function Ae(t,r){return Zone.current.wrap(t,r)}function je(t,r,c,n,i){return Zone.current.scheduleMacroTask(t,r,c,n,i)}const H=Q,ve=typeof window<"u",de=ve?window:void 0,$=ve&&de||globalThis,dt="removeAttribute";function He(t,r){for(let c=t.length-1;c>=0;c--)"function"==typeof t[c]&&(t[c]=Ae(t[c],r+"_"+c));return t}function We(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const ze=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,be=!("nw"in $)&&typeof $.process<"u"&&"[object process]"===$.process.toString(),xe=!be&&!ze&&!(!ve||!de.HTMLElement),qe=typeof $.process<"u"&&"[object process]"===$.process.toString()&&!ze&&!(!ve||!de.HTMLElement),Pe={},Xe=function(t){if(!(t=t||$.event))return;let r=Pe[t.type];r||(r=Pe[t.type]=H("ON_PROPERTY"+t.type));const c=this||t.target||$,n=c[r];let i;return xe&&c===de&&"error"===t.type?(i=n&&n.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===i&&t.preventDefault()):(i=n&&n.apply(this,arguments),null!=i&&!i&&t.preventDefault()),i};function Ye(t,r,c){let n=ye(t,r);if(!n&&c&&ye(c,r)&&(n={enumerable:!0,configurable:!0}),!n||!n.configurable)return;const i=H("on"+r+"patched");if(t.hasOwnProperty(i)&&t[i])return;delete n.writable,delete n.value;const l=n.get,_=n.set,E=r.slice(2);let y=Pe[E];y||(y=Pe[E]=H("ON_PROPERTY"+E)),n.set=function(C){let T=this;!T&&t===$&&(T=$),T&&("function"==typeof T[y]&&T.removeEventListener(E,Xe),_&&_.call(T,null),T[y]=C,"function"==typeof C&&T.addEventListener(E,Xe,!1))},n.get=function(){let C=this;if(!C&&t===$&&(C=$),!C)return null;const T=C[y];if(T)return T;if(l){let M=l.call(this);if(M)return n.set.call(this,M),"function"==typeof C[dt]&&C.removeAttribute(r),M}return null},Oe(t,r,n),t[i]=!0}function $e(t,r,c){if(r)for(let n=0;n<r.length;n++)Ye(t,"on"+r[n],c);else{const n=[];for(const i in t)"on"==i.slice(0,2)&&n.push(i);for(let i=0;i<n.length;i++)Ye(t,n[i],c)}}const re=H("originalInstance");function me(t){const r=$[t];if(!r)return;$[H(t)]=r,$[t]=function(){const i=He(arguments,t);switch(i.length){case 0:this[re]=new r;break;case 1:this[re]=new r(i[0]);break;case 2:this[re]=new r(i[0],i[1]);break;case 3:this[re]=new r(i[0],i[1],i[2]);break;case 4:this[re]=new r(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},ue($[t],r);const c=new r(function(){});let n;for(n in c)"XMLHttpRequest"===t&&"responseBlob"===n||function(i){"function"==typeof c[i]?$[t].prototype[i]=function(){return this[re][i].apply(this[re],arguments)}:Oe($[t].prototype,i,{set:function(l){"function"==typeof l?(this[re][i]=Ae(l,t+"."+i),ue(this[re][i],l)):this[re][i]=l},get:function(){return this[re][i]}})}(n);for(n in r)"prototype"!==n&&r.hasOwnProperty(n)&&($[t][n]=r[n])}function le(t,r,c){let n=t;for(;n&&!n.hasOwnProperty(r);)n=Ne(n);!n&&t[r]&&(n=t);const i=H(r);let l=null;if(n&&(!(l=n[i])||!n.hasOwnProperty(i))&&(l=n[i]=n[r],We(n&&ye(n,r)))){const E=c(l,i,r);n[r]=function(){return E(this,arguments)},ue(n[r],l)}return l}function Et(t,r,c){let n=null;function i(l){const _=l.data;return _.args[_.cbIdx]=function(){l.invoke.apply(this,arguments)},n.apply(_.target,_.args),l}n=le(t,r,l=>function(_,E){const y=c(_,E);return y.cbIdx>=0&&"function"==typeof E[y.cbIdx]?je(y.name,E[y.cbIdx],y,i):l.apply(_,E)})}function ue(t,r){t[H("OriginalDelegate")]=r}let Je=!1,Ge=!1;function gt(){if(Je)return Ge;Je=!0;try{const t=de.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(Ge=!0)}catch{}return Ge}let _e=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){_e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{_e=!1}const yt={useG:!0},ne={},Ke={},Qe=new RegExp("^"+pe+"(\\w+)(true|false)$"),et=H("propagationStopped");function tt(t,r){const c=(r?r(t):t)+ae,n=(r?r(t):t)+ce,i=pe+c,l=pe+n;ne[t]={},ne[t][ae]=i,ne[t][ce]=l}function pt(t,r,c,n){const i=n&&n.add||Ie,l=n&&n.rm||Le,_=n&&n.listeners||"eventListeners",E=n&&n.rmAll||"removeAllListeners",y=H(i),C="."+i+":",T="prependListener",M="."+T+":",w=function(v,h,G){if(v.isRemoved)return;const W=v.callback;let X;"object"==typeof W&&W.handleEvent&&(v.callback=g=>W.handleEvent(g),v.originalDelegate=W);try{v.invoke(v,h,[G])}catch(g){X=g}const V=v.options;return V&&"object"==typeof V&&V.once&&h[l].call(h,G.type,v.originalDelegate?v.originalDelegate:v.callback,V),X};function j(v,h,G){if(!(h=h||t.event))return;const W=v||h.target||t,X=W[ne[h.type][G?ce:ae]];if(X){const V=[];if(1===X.length){const g=w(X[0],W,h);g&&V.push(g)}else{const g=X.slice();for(let F=0;F<g.length&&(!h||!0!==h[et]);F++){const L=w(g[F],W,h);L&&V.push(L)}}if(1===V.length)throw V[0];for(let g=0;g<V.length;g++){const F=V[g];r.nativeScheduleMicroTask(()=>{throw F})}}}const U=function(v){return j(this,v,!1)},x=function(v){return j(this,v,!0)};function oe(v,h){if(!v)return!1;let G=!0;h&&void 0!==h.useG&&(G=h.useG);const W=h&&h.vh;let X=!0;h&&void 0!==h.chkDup&&(X=h.chkDup);let V=!1;h&&void 0!==h.rt&&(V=h.rt);let g=v;for(;g&&!g.hasOwnProperty(i);)g=Ne(g);if(!g&&v[i]&&(g=v),!g||g[y])return!1;const F=h&&h.eventNameToString,L={},R=g[y]=g[i],k=g[H(l)]=g[l],O=g[H(_)]=g[_],K=g[H(E)]=g[E];let z;h&&h.prepend&&(z=g[H(h.prepend)]=g[h.prepend]);const Y=G?function(s){if(!L.isExisting)return R.call(L.target,L.eventName,L.capture?x:U,L.options)}:function(s){return R.call(L.target,L.eventName,s.invoke,L.options)},Z=G?function(s){if(!s.isRemoved){const a=ne[s.eventName];let f;a&&(f=a[s.capture?ce:ae]);const b=f&&s.target[f];if(b)for(let S=0;S<b.length;S++)if(b[S]===s){b.splice(S,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[f]=null);break}}if(s.allRemoved)return k.call(s.target,s.eventName,s.capture?x:U,s.options)}:function(s){return k.call(s.target,s.eventName,s.invoke,s.options)},ke=h&&h.diff?h.diff:function(s,a){const f=typeof a;return"function"===f&&s.callback===a||"object"===f&&s.originalDelegate===a},fe=Zone[H("UNPATCHED_EVENTS")],Ce=t[H("PASSIVE_EVENTS")],u=function(s,a,f,b,S=!1,m=!1){return function(){const P=this||t;let D=arguments[0];h&&h.transferEventName&&(D=h.transferEventName(D));let A=arguments[1];if(!A)return s.apply(this,arguments);if(be&&"uncaughtException"===D)return s.apply(this,arguments);let B=!1;if("function"!=typeof A){if(!A.handleEvent)return s.apply(this,arguments);B=!0}if(W&&!W(s,A,P,arguments))return;const J=_e&&!!Ce&&-1!==Ce.indexOf(D),te=function I(s,a){return!_e&&"object"==typeof s&&s?!!s.capture:_e&&a?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],J),Te=te?.signal;if(Te?.aborted)return;if(fe)for(let ie=0;ie<fe.length;ie++)if(D===fe[ie])return J?s.call(P,D,A,te):s.apply(this,arguments);const Fe=!!te&&("boolean"==typeof te||te.capture),it=!(!te||"object"!=typeof te)&&te.once,It=Zone.current;let Be=ne[D];Be||(tt(D,F),Be=ne[D]);const ct=Be[Fe?ce:ae];let Se,ge=P[ct],at=!1;if(ge){if(at=!0,X)for(let ie=0;ie<ge.length;ie++)if(ke(ge[ie],A))return}else ge=P[ct]=[];const lt=P.constructor.name,ut=Ke[lt];ut&&(Se=ut[D]),Se||(Se=lt+a+(F?F(D):D)),L.options=te,it&&(L.options.once=!1),L.target=P,L.capture=Fe,L.eventName=D,L.isExisting=at;const he=G?yt:void 0;he&&(he.taskData=L),Te&&(L.options.signal=void 0);const se=It.scheduleEventTask(Se,A,he,f,b);if(Te){L.options.signal=Te;const ie=()=>se.zone.cancelTask(se);s.call(Te,"abort",ie,{once:!0}),he&&(he.removeAbortListener=()=>Te.removeEventListener("abort",ie))}return L.target=null,he&&(he.taskData=null),it&&(te.once=!0),!_e&&"boolean"==typeof se.options||(se.options=te),se.target=P,se.capture=Fe,se.eventName=D,B&&(se.originalDelegate=A),m?ge.unshift(se):ge.push(se),S?P:void 0}};return g[i]=u(R,C,Y,Z,V),z&&(g[T]=u(z,M,function(s){return z.call(L.target,L.eventName,s.invoke,L.options)},Z,V,!0)),g[l]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=arguments[2],b=!!f&&("boolean"==typeof f||f.capture),S=arguments[1];if(!S)return k.apply(this,arguments);if(W&&!W(k,S,s,arguments))return;const m=ne[a];let P;m&&(P=m[b?ce:ae]);const D=P&&s[P];if(D)for(let A=0;A<D.length;A++){const B=D[A];if(ke(B,S)){D.splice(A,1),B.isRemoved=!0,0!==D.length||(B.allRemoved=!0,s[P]=null,b||"string"!=typeof a)||(s[pe+"ON_PROPERTY"+a]=null);const J=B.data;return J?.removeAbortListener&&(J.removeAbortListener(),J.removeAbortListener=null),B.zone.cancelTask(B),V?s:void 0}}return k.apply(this,arguments)},g[_]=function(){const s=this||t;let a=arguments[0];h&&h.transferEventName&&(a=h.transferEventName(a));const f=[],b=nt(s,F?F(a):a);for(let S=0;S<b.length;S++){const m=b[S];f.push(m.originalDelegate?m.originalDelegate:m.callback)}return f},g[E]=function(){const s=this||t;let a=arguments[0];if(a){h&&h.transferEventName&&(a=h.transferEventName(a));const f=ne[a];if(f){const m=s[f[ae]],P=s[f[ce]];if(m){const D=m.slice();for(let A=0;A<D.length;A++){const B=D[A];this[l].call(this,a,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(P){const D=P.slice();for(let A=0;A<D.length;A++){const B=D[A];this[l].call(this,a,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const f=Object.keys(s);for(let b=0;b<f.length;b++){const m=Qe.exec(f[b]);let P=m&&m[1];P&&"removeListener"!==P&&this[E].call(this,P)}this[E].call(this,"removeListener")}if(V)return this},ue(g[i],R),ue(g[l],k),K&&ue(g[E],K),O&&ue(g[_],O),!0}let q=[];for(let v=0;v<c.length;v++)q[v]=oe(c[v],n);return q}function nt(t,r){if(!r){const l=[];for(let _ in t){const E=Qe.exec(_);let y=E&&E[1];if(y&&(!r||y===r)){const C=t[_];if(C)for(let T=0;T<C.length;T++)l.push(C[T])}}return l}let c=ne[r];c||(tt(r),c=ne[r]);const n=t[c[ae]],i=t[c[ce]];return n?i?n.concat(i):n.slice():i?i.slice():[]}function mt(t,r){const c=t.Event;c&&c.prototype&&r.patchMethod(c.prototype,"stopImmediatePropagation",n=>function(i,l){i[et]=!0,n&&n.apply(i,l)})}const we=H("zoneTask");function Ee(t,r,c,n){let i=null,l=null;c+=n;const _={};function E(C){const T=C.data;return T.args[0]=function(){return C.invoke.apply(this,arguments)},T.handleId=i.apply(t,T.args),C}function y(C){return l.call(t,C.data.handleId)}i=le(t,r+=n,C=>function(T,M){if("function"==typeof M[0]){const w={isPeriodic:"Interval"===n,delay:"Timeout"===n||"Interval"===n?M[1]||0:void 0,args:M},j=M[0];M[0]=function(){try{return j.apply(this,arguments)}finally{w.isPeriodic||("number"==typeof w.handleId?delete _[w.handleId]:w.handleId&&(w.handleId[we]=null))}};const U=je(r,M[0],w,E,y);if(!U)return U;const x=U.data.handleId;return"number"==typeof x?_[x]=U:x&&(x[we]=U),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(U.ref=x.ref.bind(x),U.unref=x.unref.bind(x)),"number"==typeof x||x?x:U}return C.apply(t,M)}),l=le(t,c,C=>function(T,M){const w=M[0];let j;"number"==typeof w?j=_[w]:(j=w&&w[we],j||(j=w)),j&&"string"==typeof j.type?"notScheduled"!==j.state&&(j.cancelFn&&j.data.isPeriodic||0===j.runCount)&&("number"==typeof w?delete _[w]:w&&(w[we]=null),j.zone.cancelTask(j)):C.apply(t,M)})}function rt(t,r,c){if(!c||0===c.length)return r;const n=c.filter(l=>l.target===t);if(!n||0===n.length)return r;const i=n[0].ignoreProperties;return r.filter(l=>-1===i.indexOf(l))}function ot(t,r,c,n){t&&$e(t,rt(t,r,c),n)}function Ve(t){return Object.getOwnPropertyNames(t).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function Dt(t,r,c,n,i){const l=Zone.__symbol__(n);if(r[l])return;const _=r[l]=r[n];r[n]=function(E,y,C){return y&&y.prototype&&i.forEach(function(T){const M=`${c}.${n}::`+T,w=y.prototype;try{if(w.hasOwnProperty(T)){const j=t.ObjectGetOwnPropertyDescriptor(w,T);j&&j.value?(j.value=t.wrapWithCurrentZone(j.value,M),t._redefineProperty(y.prototype,T,j)):w[T]&&(w[T]=t.wrapWithCurrentZone(w[T],M))}else w[T]&&(w[T]=t.wrapWithCurrentZone(w[T],M))}catch{}}),_.call(r,E,y,C)},t.attachOriginToPatched(r[n],_)}const st=function De(){const t=globalThis,r=!0===t[Q("forceDuplicateZoneCheck")];if(t.Zone&&(r||"function"!=typeof t.Zone.__symbol__))throw new Error("Zone already loaded.");return t.Zone??=function Ue(){const t=ee.performance;function r(I){t&&t.mark&&t.mark(I)}function c(I,d){t&&t.measure&&t.measure(I,d)}r("Zone");let n=(()=>{class I{static#e=this.__symbol__=Q;static assertZonePatched(){if(ee.Promise!==L.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=I.current;for(;e.parent;)e=e.parent;return e}static get current(){return k.zone}static get currentTask(){return O}static __load_patch(e,o,p=!1){if(L.hasOwnProperty(e)){const N=!0===ee[Q("forceDuplicateZoneCheck")];if(!p&&N)throw Error("Already loaded patch: "+e)}else if(!ee["__Zone_disable_"+e]){const N="Zone:"+e;r(N),L[e]=o(ee,I,R),c(N,N)}}get parent(){return this._parent}get name(){return this._name}constructor(e,o){this._parent=e,this._name=o?o.name||"unnamed":"<root>",this._properties=o&&o.properties||{},this._zoneDelegate=new l(this,this._parent&&this._parent._zoneDelegate,o)}get(e){const o=this.getZoneWith(e);if(o)return o._properties[e]}getZoneWith(e){let o=this;for(;o;){if(o._properties.hasOwnProperty(e))return o;o=o._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,o){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const p=this._zoneDelegate.intercept(this,e,o),N=this;return function(){return N.runGuarded(p,this,arguments,o)}}run(e,o,p,N){k={parent:k,zone:this};try{return this._zoneDelegate.invoke(this,e,o,p,N)}finally{k=k.parent}}runGuarded(e,o=null,p,N){k={parent:k,zone:this};try{try{return this._zoneDelegate.invoke(this,e,o,p,N)}catch(Y){if(this._zoneDelegate.handleError(this,Y))throw Y}}finally{k=k.parent}}runTask(e,o,p){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===q&&(e.type===F||e.type===g))return;const N=e.state!=G;N&&e._transitionTo(G,h),e.runCount++;const Y=O;O=e,k={parent:k,zone:this};try{e.type==g&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,o,p)}catch(Z){if(this._zoneDelegate.handleError(this,Z))throw Z}}finally{e.state!==q&&e.state!==X&&(e.type==F||e.data&&e.data.isPeriodic?N&&e._transitionTo(h,G):(e.runCount=0,this._updateTaskCount(e,-1),N&&e._transitionTo(q,G,q))),k=k.parent,O=Y}}scheduleTask(e){if(e.zone&&e.zone!==this){let p=this;for(;p;){if(p===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);p=p.parent}}e._transitionTo(v,q);const o=[];e._zoneDelegates=o,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(p){throw e._transitionTo(X,v,q),this._zoneDelegate.handleError(this,p),p}return e._zoneDelegates===o&&this._updateTaskCount(e,1),e.state==v&&e._transitionTo(h,v),e}scheduleMicroTask(e,o,p,N){return this.scheduleTask(new _(V,e,o,p,N,void 0))}scheduleMacroTask(e,o,p,N,Y){return this.scheduleTask(new _(g,e,o,p,N,Y))}scheduleEventTask(e,o,p,N,Y){return this.scheduleTask(new _(F,e,o,p,N,Y))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||oe).name+"; Execution: "+this.name+")");if(e.state===h||e.state===G){e._transitionTo(W,h,G);try{this._zoneDelegate.cancelTask(this,e)}catch(o){throw e._transitionTo(X,W),this._zoneDelegate.handleError(this,o),o}return this._updateTaskCount(e,-1),e._transitionTo(q,W),e.runCount=0,e}}_updateTaskCount(e,o){const p=e._zoneDelegates;-1==o&&(e._zoneDelegates=null);for(let N=0;N<p.length;N++)p[N]._updateTaskCount(e.type,o)}}return I})();const i={name:"",onHasTask:(I,d,e,o)=>I.hasTask(e,o),onScheduleTask:(I,d,e,o)=>I.scheduleTask(e,o),onInvokeTask:(I,d,e,o,p,N)=>I.invokeTask(e,o,p,N),onCancelTask:(I,d,e,o)=>I.cancelTask(e,o)};class l{get zone(){return this._zone}constructor(d,e,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=d,this._parentDelegate=e,this._forkZS=o&&(o&&o.onFork?o:e._forkZS),this._forkDlgt=o&&(o.onFork?e:e._forkDlgt),this._forkCurrZone=o&&(o.onFork?this._zone:e._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:e._interceptZS),this._interceptDlgt=o&&(o.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this._zone:e._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:e._invokeZS),this._invokeDlgt=o&&(o.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this._zone:e._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:e._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this._zone:e._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:e._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this._zone:e._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:e._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this._zone:e._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:e._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this._zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const p=o&&o.onHasTask;(p||e&&e._hasTaskZS)&&(this._hasTaskZS=p?o:i,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,o.onScheduleTask||(this._scheduleTaskZS=i,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this._zone),o.onInvokeTask||(this._invokeTaskZS=i,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this._zone),o.onCancelTask||(this._cancelTaskZS=i,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this._zone))}fork(d,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,d,e):new n(d,e)}intercept(d,e,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,d,e,o):e}invoke(d,e,o,p,N){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,d,e,o,p,N):e.apply(o,p)}handleError(d,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,d,e)}scheduleTask(d,e){let o=e;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,d,e),o||(o=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=V)throw new Error("Task is missing scheduleFn.");U(e)}return o}invokeTask(d,e,o,p){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,d,e,o,p):e.callback.apply(o,p)}cancelTask(d,e){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,d,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");o=e.cancelFn(e)}return o}hasTask(d,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,d,e)}catch(o){this.handleError(d,o)}}_updateTaskCount(d,e){const o=this._taskCounts,p=o[d],N=o[d]=p+e;if(N<0)throw new Error("More tasks executed then were scheduled.");0!=p&&0!=N||this.hasTask(this._zone,{microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:d})}}class _{constructor(d,e,o,p,N,Y){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=d,this.source=e,this.data=p,this.scheduleFn=N,this.cancelFn=Y,!o)throw new Error("callback is not defined");this.callback=o;const Z=this;this.invoke=d===F&&p&&p.useG?_.invokeTask:function(){return _.invokeTask.call(ee,Z,this,arguments)}}static invokeTask(d,e,o){d||(d=this),K++;try{return d.runCount++,d.zone.runTask(d,e,o)}finally{1==K&&x(),K--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(q,v)}_transitionTo(d,e,o){if(this._state!==e&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${d}', expecting state '${e}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=d,d==q&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const E=Q("setTimeout"),y=Q("Promise"),C=Q("then");let w,T=[],M=!1;function j(I){if(w||ee[y]&&(w=ee[y].resolve(0)),w){let d=w[C];d||(d=w.then),d.call(w,I)}else ee[E](I,0)}function U(I){0===K&&0===T.length&&j(x),I&&T.push(I)}function x(){if(!M){for(M=!0;T.length;){const I=T;T=[];for(let d=0;d<I.length;d++){const e=I[d];try{e.zone.runTask(e,null,null)}catch(o){R.onUnhandledError(o)}}}R.microtaskDrainDone(),M=!1}}const oe={name:"NO ZONE"},q="notScheduled",v="scheduling",h="scheduled",G="running",W="canceling",X="unknown",V="microTask",g="macroTask",F="eventTask",L={},R={symbol:Q,currentZoneFrame:()=>k,onUnhandledError:z,microtaskDrainDone:z,scheduleMicroTask:U,showUncaughtError:()=>!n[Q("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:z,patchMethod:()=>z,bindArguments:()=>[],patchThen:()=>z,patchMacroTask:()=>z,patchEventPrototype:()=>z,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>z,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>z,wrapWithCurrentZone:()=>z,filterProperties:()=>[],attachOriginToPatched:()=>z,_redefineProperty:()=>z,patchCallbacks:()=>z,nativeScheduleMicroTask:j};let k={parent:null,zone:new n(null,null)},O=null,K=0;function z(){}return c("Zone","Zone"),n}(),t.Zone}();(function Nt(t){(function Ct(t){t.__load_patch("ZoneAwarePromise",(r,c,n)=>{const i=Object.getOwnPropertyDescriptor,l=Object.defineProperty,E=n.symbol,y=[],C=!1!==r[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],T=E("Promise"),M=E("then"),w="__creationTrace__";n.onUnhandledError=u=>{if(n.showUncaughtError()){const s=u&&u.rejection;s?console.error("Unhandled Promise rejection:",s instanceof Error?s.message:s,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",s,s instanceof Error?s.stack:void 0):console.error(u)}},n.microtaskDrainDone=()=>{for(;y.length;){const u=y.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(s){U(s)}}};const j=E("unhandledPromiseRejectionHandler");function U(u){n.onUnhandledError(u);try{const s=c[j];"function"==typeof s&&s.call(this,u)}catch{}}function x(u){return u&&u.then}function oe(u){return u}function q(u){return Z.reject(u)}const v=E("state"),h=E("value"),G=E("finally"),W=E("parentPromiseValue"),X=E("parentPromiseState"),V="Promise.then",g=null,F=!0,L=!1,R=0;function k(u,s){return a=>{try{I(u,s,a)}catch(f){I(u,!1,f)}}}const O=function(){let u=!1;return function(a){return function(){u||(u=!0,a.apply(null,arguments))}}},K="Promise resolved with itself",z=E("currentTaskTrace");function I(u,s,a){const f=O();if(u===a)throw new TypeError(K);if(u[v]===g){let b=null;try{("object"==typeof a||"function"==typeof a)&&(b=a&&a.then)}catch(S){return f(()=>{I(u,!1,S)})(),u}if(s!==L&&a instanceof Z&&a.hasOwnProperty(v)&&a.hasOwnProperty(h)&&a[v]!==g)e(a),I(u,a[v],a[h]);else if(s!==L&&"function"==typeof b)try{b.call(a,f(k(u,s)),f(k(u,!1)))}catch(S){f(()=>{I(u,!1,S)})()}else{u[v]=s;const S=u[h];if(u[h]=a,u[G]===G&&s===F&&(u[v]=u[X],u[h]=u[W]),s===L&&a instanceof Error){const m=c.currentTask&&c.currentTask.data&&c.currentTask.data[w];m&&l(a,z,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<S.length;)o(u,S[m++],S[m++],S[m++],S[m++]);if(0==S.length&&s==L){u[v]=R;let m=a;try{throw new Error("Uncaught (in promise): "+function _(u){return u&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(P){m=P}C&&(m.throwOriginal=!0),m.rejection=a,m.promise=u,m.zone=c.current,m.task=c.currentTask,y.push(m),n.scheduleMicroTask()}}}return u}const d=E("rejectionHandledHandler");function e(u){if(u[v]===R){try{const s=c[d];s&&"function"==typeof s&&s.call(this,{rejection:u[h],promise:u})}catch{}u[v]=L;for(let s=0;s<y.length;s++)u===y[s].promise&&y.splice(s,1)}}function o(u,s,a,f,b){e(u);const S=u[v],m=S?"function"==typeof f?f:oe:"function"==typeof b?b:q;s.scheduleMicroTask(V,()=>{try{const P=u[h],D=!!a&&G===a[G];D&&(a[W]=P,a[X]=S);const A=s.run(m,void 0,D&&m!==q&&m!==oe?[]:[P]);I(a,!0,A)}catch(P){I(a,!1,P)}},a)}const N=function(){},Y=r.AggregateError;class Z{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(s){return s instanceof Z?s:I(new this(null),F,s)}static reject(s){return I(new this(null),L,s)}static withResolvers(){const s={};return s.promise=new Z((a,f)=>{s.resolve=a,s.reject=f}),s}static any(s){if(!s||"function"!=typeof s[Symbol.iterator])return Promise.reject(new Y([],"All promises were rejected"));const a=[];let f=0;try{for(let m of s)f++,a.push(Z.resolve(m))}catch{return Promise.reject(new Y([],"All promises were rejected"))}if(0===f)return Promise.reject(new Y([],"All promises were rejected"));let b=!1;const S=[];return new Z((m,P)=>{for(let D=0;D<a.length;D++)a[D].then(A=>{b||(b=!0,m(A))},A=>{S.push(A),f--,0===f&&(b=!0,P(new Y(S,"All promises were rejected")))})})}static race(s){let a,f,b=new this((P,D)=>{a=P,f=D});function S(P){a(P)}function m(P){f(P)}for(let P of s)x(P)||(P=this.resolve(P)),P.then(S,m);return b}static all(s){return Z.allWithCallback(s)}static allSettled(s){return(this&&this.prototype instanceof Z?this:Z).allWithCallback(s,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(s,a){let f,b,S=new this((A,B)=>{f=A,b=B}),m=2,P=0;const D=[];for(let A of s){x(A)||(A=this.resolve(A));const B=P;try{A.then(J=>{D[B]=a?a.thenCallback(J):J,m--,0===m&&f(D)},J=>{a?(D[B]=a.errorCallback(J),m--,0===m&&f(D)):b(J)})}catch(J){b(J)}m++,P++}return m-=2,0===m&&f(D),S}constructor(s){const a=this;if(!(a instanceof Z))throw new Error("Must be an instanceof Promise.");a[v]=g,a[h]=[];try{const f=O();s&&s(f(k(a,F)),f(k(a,L)))}catch(f){I(a,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return Z}then(s,a){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||Z);const b=new f(N),S=c.current;return this[v]==g?this[h].push(S,b,s,a):o(this,S,b,s,a),b}catch(s){return this.then(null,s)}finally(s){let a=this.constructor?.[Symbol.species];(!a||"function"!=typeof a)&&(a=Z);const f=new a(N);f[G]=G;const b=c.current;return this[v]==g?this[h].push(b,f,s,s):o(this,b,f,s,s),f}}Z.resolve=Z.resolve,Z.reject=Z.reject,Z.race=Z.race,Z.all=Z.all;const Re=r[T]=r.Promise;r.Promise=Z;const ke=E("thenPatched");function fe(u){const s=u.prototype,a=i(s,"then");if(a&&(!1===a.writable||!a.configurable))return;const f=s.then;s[M]=f,u.prototype.then=function(b,S){return new Z((P,D)=>{f.call(this,P,D)}).then(b,S)},u[ke]=!0}return n.patchThen=fe,Re&&(fe(Re),le(r,"fetch",u=>function Ce(u){return function(s,a){let f=u.apply(s,a);if(f instanceof Z)return f;let b=f.constructor;return b[ke]||fe(b),f}}(u))),Promise[c.__symbol__("uncaughtPromiseErrors")]=y,Z})})(t),function St(t){t.__load_patch("toString",r=>{const c=Function.prototype.toString,n=H("OriginalDelegate"),i=H("Promise"),l=H("Error"),_=function(){if("function"==typeof this){const T=this[n];if(T)return"function"==typeof T?c.call(T):Object.prototype.toString.call(T);if(this===Promise){const M=r[i];if(M)return c.call(M)}if(this===Error){const M=r[l];if(M)return c.call(M)}}return c.call(this)};_[n]=c,Function.prototype.toString=_;const E=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":E.call(this)}})}(t),function Ot(t){t.__load_patch("util",(r,c,n)=>{const i=Ve(r);n.patchOnProperties=$e,n.patchMethod=le,n.bindArguments=He,n.patchMacroTask=Et;const l=c.__symbol__("BLACK_LISTED_EVENTS"),_=c.__symbol__("UNPATCHED_EVENTS");r[_]&&(r[l]=r[_]),r[l]&&(c[l]=c[_]=r[l]),n.patchEventPrototype=mt,n.patchEventTarget=pt,n.isIEOrEdge=gt,n.ObjectDefineProperty=Oe,n.ObjectGetOwnPropertyDescriptor=ye,n.ObjectCreate=ft,n.ArraySlice=ht,n.patchClass=me,n.wrapWithCurrentZone=Ae,n.filterProperties=rt,n.attachOriginToPatched=ue,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Dt,n.getGlobalObjects=()=>({globalSources:Ke,zoneSymbolEventNames:ne,eventNames:i,isBrowser:xe,isMix:qe,isNode:be,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:pe,ADD_EVENT_LISTENER_STR:Ie,REMOVE_EVENT_LISTENER_STR:Le})})}(t)})(st),function Rt(t){t.__load_patch("legacy",r=>{const c=r[t.__symbol__("legacyPatch")];c&&c()}),t.__load_patch("timers",r=>{const c="set",n="clear";Ee(r,c,n,"Timeout"),Ee(r,c,n,"Interval"),Ee(r,c,n,"Immediate")}),t.__load_patch("requestAnimationFrame",r=>{Ee(r,"request","cancel","AnimationFrame"),Ee(r,"mozRequest","mozCancel","AnimationFrame"),Ee(r,"webkitRequest","webkitCancel","AnimationFrame")}),t.__load_patch("blocking",(r,c)=>{const n=["alert","prompt","confirm"];for(let i=0;i<n.length;i++)le(r,n[i],(_,E,y)=>function(C,T){return c.current.run(_,r,T,y)})}),t.__load_patch("EventTarget",(r,c,n)=>{(function Pt(t,r){r.patchEventPrototype(t,r)})(r,n),function bt(t,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:n,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:_}=r.getGlobalObjects();for(let y=0;y<c.length;y++){const C=c[y],w=_+(C+l),j=_+(C+i);n[C]={},n[C][l]=w,n[C][i]=j}const E=t.EventTarget;E&&E.prototype&&r.patchEventTarget(t,r,[E&&E.prototype])}(r,n);const i=r.XMLHttpRequestEventTarget;i&&i.prototype&&n.patchEventTarget(r,n,[i.prototype])}),t.__load_patch("MutationObserver",(r,c,n)=>{me("MutationObserver"),me("WebKitMutationObserver")}),t.__load_patch("IntersectionObserver",(r,c,n)=>{me("IntersectionObserver")}),t.__load_patch("FileReader",(r,c,n)=>{me("FileReader")}),t.__load_patch("on_property",(r,c,n)=>{!function wt(t,r){if(be&&!qe||Zone[t.symbol("patchEvents")])return;const c=r.__Zone_ignore_on_properties;let n=[];if(xe){const i=window;n=n.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function Tt(){try{const t=de.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];ot(i,Ve(i),c&&c.concat(l),Ne(i))}n=n.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<n.length;i++){const l=r[n[i]];l&&l.prototype&&ot(l.prototype,Ve(l.prototype),c)}}(n,r)}),t.__load_patch("customElements",(r,c,n)=>{!function vt(t,r){const{isBrowser:c,isMix:n}=r.getGlobalObjects();(c||n)&&t.customElements&&"customElements"in t&&r.patchCallbacks(r,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,n)}),t.__load_patch("XHR",(r,c)=>{!function C(T){const M=T.XMLHttpRequest;if(!M)return;const w=M.prototype;let U=w[Me],x=w[Ze];if(!U){const R=T.XMLHttpRequestEventTarget;if(R){const k=R.prototype;U=k[Me],x=k[Ze]}}const oe="readystatechange",q="scheduled";function v(R){const k=R.data,O=k.target;O[_]=!1,O[y]=!1;const K=O[l];U||(U=O[Me],x=O[Ze]),K&&x.call(O,oe,K);const z=O[l]=()=>{if(O.readyState===O.DONE)if(!k.aborted&&O[_]&&R.state===q){const d=O[c.__symbol__("loadfalse")];if(0!==O.status&&d&&d.length>0){const e=R.invoke;R.invoke=function(){const o=O[c.__symbol__("loadfalse")];for(let p=0;p<o.length;p++)o[p]===R&&o.splice(p,1);!k.aborted&&R.state===q&&e.call(R)},d.push(R)}else R.invoke()}else!k.aborted&&!1===O[_]&&(O[y]=!0)};return U.call(O,oe,z),O[n]||(O[n]=R),F.apply(O,k.args),O[_]=!0,R}function h(){}function G(R){const k=R.data;return k.aborted=!0,L.apply(k.target,k.args)}const W=le(w,"open",()=>function(R,k){return R[i]=0==k[2],R[E]=k[1],W.apply(R,k)}),V=H("fetchTaskAborting"),g=H("fetchTaskScheduling"),F=le(w,"send",()=>function(R,k){if(!0===c.current[g]||R[i])return F.apply(R,k);{const O={target:R,url:R[E],isPeriodic:!1,args:k,aborted:!1},K=je("XMLHttpRequest.send",h,O,v,G);R&&!0===R[y]&&!O.aborted&&K.state===q&&K.invoke()}}),L=le(w,"abort",()=>function(R,k){const O=function j(R){return R[n]}(R);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===c.current[V])return L.apply(R,k)})}(r);const n=H("xhrTask"),i=H("xhrSync"),l=H("xhrListener"),_=H("xhrScheduled"),E=H("xhrURL"),y=H("xhrErrorBeforeScheduled")}),t.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function _t(t,r){const c=t.constructor.name;for(let n=0;n<r.length;n++){const i=r[n],l=t[i];if(l){if(!We(ye(t,i)))continue;t[i]=(E=>{const y=function(){return E.apply(this,He(arguments,c+"."+i))};return ue(y,E),y})(l)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),t.__load_patch("PromiseRejectionEvent",(r,c)=>{function n(i){return function(l){nt(r,i).forEach(E=>{const y=r.PromiseRejectionEvent;if(y){const C=new y(i,{promise:l.promise,reason:l.rejection});E.invoke(C)}})}}r.PromiseRejectionEvent&&(c[H("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),c[H("rejectionHandledHandler")]=n("rejectionhandled"))}),t.__load_patch("queueMicrotask",(r,c,n)=>{!function kt(t,r){r.patchMethod(t,"queueMicrotask",c=>function(n,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(r,n)})}(st)}},ee=>{ee(ee.s=935)}]);