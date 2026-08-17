(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.F8(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.m(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.wl(b)
return new s(c,this)}:function(){if(s===null)s=A.wl(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.wl(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
wt(a,b,c,d){return{i:a,p:b,e:c,x:d}},
v4(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.wr==null){A.EN()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.xG("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.tF
if(o==null)o=$.tF=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.EU(a)
if(p!=null)return p
if(typeof a=="function")return B.bg
s=Object.getPrototypeOf(a)
if(s==null)return B.aD
if(s===Object.prototype)return B.aD
if(typeof q=="function"){o=$.tF
if(o==null)o=$.tF=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.ag,enumerable:false,writable:true,configurable:true})
return B.ag}return B.ag},
vB(a,b){if(a<0||a>4294967295)throw A.b(A.af(a,0,4294967295,"length",null))
return J.xf(new Array(a),b)},
vC(a,b){if(a<0)throw A.b(A.P("Length must be a non-negative integer: "+a,null))
return A.m(new Array(a),b.i("A<0>"))},
vA(a,b){if(a<0)throw A.b(A.P("Length must be a non-negative integer: "+a,null))
return A.m(new Array(a),b.i("A<0>"))},
xf(a,b){var s=A.m(a,b.i("A<0>"))
s.$flags=1
return s},
B_(a,b){return J.wJ(a,b)},
xg(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
B2(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.xg(r))break;++b}return b},
xh(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.xg(r))break}return b},
df(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fQ.prototype
return J.je.prototype}if(typeof a=="string")return J.cM.prototype
if(a==null)return J.fR.prototype
if(typeof a=="boolean")return J.jd.prototype
if(Array.isArray(a))return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
if(typeof a=="symbol")return J.ek.prototype
if(typeof a=="bigint")return J.b3.prototype
return a}if(a instanceof A.j)return a
return J.v4(a)},
J(a){if(typeof a=="string")return J.cM.prototype
if(a==null)return a
if(Array.isArray(a))return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
if(typeof a=="symbol")return J.ek.prototype
if(typeof a=="bigint")return J.b3.prototype
return a}if(a instanceof A.j)return a
return J.v4(a)},
at(a){if(a==null)return a
if(Array.isArray(a))return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
if(typeof a=="symbol")return J.ek.prototype
if(typeof a=="bigint")return J.b3.prototype
return a}if(a instanceof A.j)return a
return J.v4(a)},
EF(a){if(typeof a=="number")return J.dy.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.d_.prototype
return a},
EG(a){if(typeof a=="number")return J.dy.prototype
if(typeof a=="string")return J.cM.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.d_.prototype
return a},
v3(a){if(typeof a=="string")return J.cM.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.d_.prototype
return a},
lB(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
if(typeof a=="symbol")return J.ek.prototype
if(typeof a=="bigint")return J.b3.prototype
return a}if(a instanceof A.j)return a
return J.v4(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.df(a).X(a,b)},
aa(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.zg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.J(a).h(a,b)},
bC(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.zg(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.at(a).j(a,b,c)},
dj(a,b){return J.at(a).t(a,b)},
wH(a,b){return J.at(a).G(a,b)},
wI(a,b){return J.v3(a).h1(a,b)},
Ac(a,b){return J.at(a).dE(a,b)},
vo(a){return J.lB(a).ll(a)},
Ad(a,b,c){return J.lB(a).h3(a,b,c)},
Ae(a){return J.lB(a).lm(a)},
dk(a,b,c){return J.lB(a).h4(a,b,c)},
ea(a,b){return J.at(a).h6(a,b)},
Af(a,b,c){return J.EF(a).iW(a,b,c)},
wJ(a,b){return J.EG(a).T(a,b)},
Ag(a,b){return J.J(a).D(a,b)},
lK(a,b){return J.at(a).a0(a,b)},
Ah(a,b){return J.at(a).ew(a,b)},
wK(a){return J.lB(a).gaA(a)},
bD(a){return J.at(a).gC(a)},
aL(a){return J.df(a).gJ(a)},
ci(a){return J.J(a).gB(a)},
fp(a){return J.J(a).gY(a)},
L(a){return J.at(a).gv(a)},
vp(a){return J.at(a).gW(a)},
ar(a){return J.J(a).gk(a)},
bE(a){return J.df(a).gab(a)},
lL(a){return J.at(a).gaV(a)},
Ai(a,b,c){return J.at(a).f2(a,b,c)},
av(a,b,c){return J.at(a).cr(a,b,c)},
Aj(a,b,c){return J.v3(a).dR(a,b,c)},
Ak(a,b){return J.J(a).sk(a,b)},
Al(a,b,c,d,e){return J.at(a).a6(a,b,c,d,e)},
lM(a,b){return J.at(a).aW(a,b)},
wL(a,b){return J.at(a).df(a,b)},
Am(a,b){return J.v3(a).f6(a,b)},
An(a,b){return J.v3(a).L(a,b)},
vq(a,b){return J.at(a).cv(a,b)},
Ao(a){return J.at(a).d8(a)},
an(a){return J.df(a).l(a)},
wM(a,b){return J.at(a).jA(a,b)},
jb:function jb(){},
jd:function jd(){},
fR:function fR(){},
ap:function ap(){},
cO:function cO(){},
jJ:function jJ(){},
d_:function d_(){},
bo:function bo(){},
b3:function b3(){},
ek:function ek(){},
A:function A(a){this.$ti=a},
jc:function jc(){},
og:function og(a){this.$ti=a},
eb:function eb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dy:function dy(){},
fQ:function fQ(){},
je:function je(){},
cM:function cM(){}},A={vF:function vF(){},
iD(a,b,c){if(t.O.b(a))return new A.hC(a,b.i("@<0>").V(c).i("hC<1,2>"))
return new A.dm(a,b.i("@<0>").V(c).i("dm<1,2>"))},
xj(a){return new A.cN("Field '"+a+"' has been assigned during initialization.")},
xk(a){return new A.cN("Field '"+a+"' has not been initialized.")},
B3(a){return new A.cN("Field '"+a+"' has already been initialized.")},
v5(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cx(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
qC(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bi(a,b,c){return a},
ws(a){var s,r
for(s=$.e8.length,r=0;r<s;++r)if(a===$.e8[r])return!0
return!1},
bY(a,b,c,d){A.aQ(b,"start")
if(c!=null){A.aQ(c,"end")
if(b>c)A.w(A.af(b,0,c,"start",null))}return new A.dL(a,b,c,d.i("dL<0>"))},
dC(a,b,c,d){if(t.O.b(a))return new A.du(a,b,c.i("@<0>").V(d).i("du<1,2>"))
return new A.co(a,b,c.i("@<0>").V(d).i("co<1,2>"))},
xC(a,b,c){var s="takeCount"
A.io(b,s)
A.aQ(b,s)
if(t.O.b(a))return new A.fB(a,b,c.i("fB<0>"))
return new A.dM(a,b,c.i("dM<0>"))},
xz(a,b,c){var s="count"
if(t.O.b(a)){A.io(b,s)
A.aQ(b,s)
return new A.ee(a,b,c.i("ee<0>"))}A.io(b,s)
A.aQ(b,s)
return new A.cu(a,b,c.i("cu<0>"))},
aj(){return new A.be("No element")},
fO(){return new A.be("Too many elements")},
xe(){return new A.be("Too few elements")},
k4(a,b,c,d){if(c-b<=32)A.BH(a,b,c,d)
else A.BG(a,b,c,d)},
BH(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.J(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
BG(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.b.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.b.M(a4+a5,2),e=f-i,d=f+i,c=J.J(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
if(a6.$2(b,a)>0){s=a
a=b
b=s}if(a6.$2(a1,a2)>0){s=a2
a2=a1
a1=s}if(a6.$2(b,a0)>0){s=a0
a0=b
b=s}if(a6.$2(a,a0)>0){s=a0
a0=a
a=s}if(a6.$2(b,a1)>0){s=a1
a1=b
b=s}if(a6.$2(a0,a1)>0){s=a1
a1=a0
a0=s}if(a6.$2(a,a2)>0){s=a2
a2=a
a=s}if(a6.$2(a,a0)>0){s=a0
a0=a
a=s}if(a6.$2(a1,a2)>0){s=a2
a2=a1
a1=s}c.j(a3,h,b)
c.j(a3,f,a0)
c.j(a3,g,a2)
c.j(a3,e,c.h(a3,a4))
c.j(a3,d,c.h(a3,a5))
r=a4+1
q=a5-1
p=J.x(a6.$2(a,a1),0)
if(p)for(o=r;o<=q;++o){n=c.h(a3,o)
m=a6.$2(n,a)
if(m===0)continue
if(m<0){if(o!==r){c.j(a3,o,c.h(a3,r))
c.j(a3,r,n)}++r}else for(;;){m=a6.$2(c.h(a3,q),a)
if(m>0){--q
continue}else{l=q-1
if(m<0){c.j(a3,o,c.h(a3,r))
k=r+1
c.j(a3,r,c.h(a3,q))
c.j(a3,q,n)
q=l
r=k
break}else{c.j(a3,o,c.h(a3,q))
c.j(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=c.h(a3,o)
if(a6.$2(n,a)<0){if(o!==r){c.j(a3,o,c.h(a3,r))
c.j(a3,r,n)}++r}else if(a6.$2(n,a1)>0)for(;;)if(a6.$2(c.h(a3,q),a1)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(c.h(a3,q),a)<0){c.j(a3,o,c.h(a3,r))
k=r+1
c.j(a3,r,c.h(a3,q))
c.j(a3,q,n)
r=k}else{c.j(a3,o,c.h(a3,q))
c.j(a3,q,n)}q=l
break}}j=r-1
c.j(a3,a4,c.h(a3,j))
c.j(a3,j,a)
j=q+1
c.j(a3,a5,c.h(a3,j))
c.j(a3,j,a1)
A.k4(a3,a4,r-2,a6)
A.k4(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.x(a6.$2(c.h(a3,r),a),0))++r
while(J.x(a6.$2(c.h(a3,q),a1),0))--q
for(o=r;o<=q;++o){n=c.h(a3,o)
if(a6.$2(n,a)===0){if(o!==r){c.j(a3,o,c.h(a3,r))
c.j(a3,r,n)}++r}else if(a6.$2(n,a1)===0)for(;;)if(a6.$2(c.h(a3,q),a1)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(c.h(a3,q),a)<0){c.j(a3,o,c.h(a3,r))
k=r+1
c.j(a3,r,c.h(a3,q))
c.j(a3,q,n)
r=k}else{c.j(a3,o,c.h(a3,q))
c.j(a3,q,n)}q=l
break}}A.k4(a3,r,q,a6)}else A.k4(a3,r,q,a6)},
rY:function rY(a){this.a=0
this.b=a},
rE:function rE(a){this.a=0
this.b=a},
d1:function d1(){},
iE:function iE(a,b){this.a=a
this.$ti=b},
dm:function dm(a,b){this.a=a
this.$ti=b},
hC:function hC(a,b){this.a=a
this.$ti=b},
hz:function hz(){},
rF:function rF(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.$ti=b},
cN:function cN(a){this.a=a},
jR:function jR(a){this.a=a},
bQ:function bQ(a){this.a=a},
vc:function vc(){},
q2:function q2(){},
C:function C(){},
R:function R(){},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a5:function a5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
co:function co(a,b,c){this.a=a
this.b=b
this.$ti=c},
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
jr:function jr(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(a,b,c){this.a=a
this.b=b
this.$ti=c},
eQ:function eQ(a,b){this.a=a
this.b=b},
fD:function fD(a,b,c){this.a=a
this.b=b
this.$ti=c},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dM:function dM(a,b,c){this.a=a
this.b=b
this.$ti=c},
fB:function fB(a,b,c){this.a=a
this.b=b
this.$ti=c},
kj:function kj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.$ti=c},
ee:function ee(a,b,c){this.a=a
this.b=b
this.$ti=c},
k3:function k3(a,b){this.a=a
this.b=b},
dv:function dv(a){this.$ti=a},
iX:function iX(){},
bv:function bv(a,b){this.a=a
this.$ti=b},
kx:function kx(a,b){this.a=a
this.$ti=b},
fG:function fG(){},
kp:function kp(){},
eK:function eK(){},
dJ:function dJ(a,b){this.a=a
this.$ti=b},
kh:function kh(a){this.a=a},
ia:function ia(){},
AE(){throw A.b(A.a0("Cannot modify constant Set"))},
zw(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
zg(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.an(a)
return s},
hc(a){var s,r=$.xq
if(r==null)r=$.xq=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eu(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
Bx(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cz(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
jN(a){var s,r,q,p
if(a instanceof A.j)return A.bh(A.bj(a),null)
s=J.df(a)
if(s===B.bf||s===B.bh||t.cx.b(a)){r=B.an(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bh(A.bj(a),null)},
xs(a){var s,r,q
if(a==null||typeof a=="number"||A.bO(a))return J.an(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dp)return a.l(0)
if(a instanceof A.f4)return a.l8(!0)
s=$.A6()
for(r=0;r<1;++r){q=s[r].vm(a)
if(q!=null)return q}return"Instance of '"+A.jN(a)+"'"},
Bt(){return Date.now()},
Bw(){var s,r
if($.pJ!==0)return
$.pJ=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.pJ=1e6
$.jO=new A.pI(r)},
Bs(){if(!!self.location)return self.location.href
return null},
xp(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
By(a){var s,r,q,p=A.m([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.H)(a),++r){q=a[r]
if(!A.aA(q))throw A.b(A.e2(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.b.a4(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.e2(q))}return A.xp(p)},
xt(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.aA(q))throw A.b(A.e2(q))
if(q<0)throw A.b(A.e2(q))
if(q>65535)return A.By(a)}return A.xp(a)},
Bz(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b7(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.a4(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.af(a,0,1114111,null,null))},
BA(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.b.au(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.b.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
b6(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
vQ(a){return a.c?A.b6(a).getUTCFullYear()+0:A.b6(a).getFullYear()+0},
vO(a){return a.c?A.b6(a).getUTCMonth()+1:A.b6(a).getMonth()+1},
pH(a){return a.c?A.b6(a).getUTCDate()+0:A.b6(a).getDate()+0},
vM(a){return a.c?A.b6(a).getUTCHours()+0:A.b6(a).getHours()+0},
vN(a){return a.c?A.b6(a).getUTCMinutes()+0:A.b6(a).getMinutes()+0},
vP(a){return a.c?A.b6(a).getUTCSeconds()+0:A.b6(a).getSeconds()+0},
xr(a){return a.c?A.b6(a).getUTCMilliseconds()+0:A.b6(a).getMilliseconds()+0},
Bv(a){return B.b.au((a.c?A.b6(a).getUTCDay()+0:A.b6(a).getDay()+0)+6,7)+1},
Bu(a){var s=a.$thrownJsError
if(s==null)return null
return A.ae(s)},
jP(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aB(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
uW(a,b){var s,r="index"
if(!A.aA(b))return new A.bk(!0,b,r,null)
s=J.ar(a)
if(b<0||b>=s)return A.j8(b,s,a,null,r)
return A.pZ(b,r)},
Ex(a,b,c){if(a<0||a>c)return A.af(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.af(b,a,c,"end",null)
return new A.bk(!0,b,"end",null)},
e2(a){return new A.bk(!0,a,null,null)},
b(a){return A.aB(a,new Error())},
aB(a,b){var s
if(a==null)a=new A.cz()
b.dartException=a
s=A.F9
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
F9(){return J.an(this.dartException)},
w(a,b){throw A.aB(a,b==null?new Error():b)},
D(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.w(A.Df(a,b,c),s)},
Df(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.cb("'"+s+"': Cannot "+o+" "+l+k+n)},
H(a){throw A.b(A.aw(a))},
cA(a){var s,r,q,p,o,n
a=A.zn(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.m([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.qF(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
qG(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xF(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
vG(a,b){var s=b==null,r=s?null:b.method
return new A.jf(a,r,s?null:b.receiver)},
E(a){if(a==null)return new A.jD(a)
if(a instanceof A.fC)return A.dh(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.dh(a,a.dartException)
return A.E_(a)},
dh(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
E_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.a4(r,16)&8191)===10)switch(q){case 438:return A.dh(a,A.vG(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.dh(a,new A.h8())}}if(a instanceof TypeError){p=$.zF()
o=$.zG()
n=$.zH()
m=$.zI()
l=$.zL()
k=$.zM()
j=$.zK()
$.zJ()
i=$.zO()
h=$.zN()
g=p.bu(s)
if(g!=null)return A.dh(a,A.vG(s,g))
else{g=o.bu(s)
if(g!=null){g.method="call"
return A.dh(a,A.vG(s,g))}else if(n.bu(s)!=null||m.bu(s)!=null||l.bu(s)!=null||k.bu(s)!=null||j.bu(s)!=null||m.bu(s)!=null||i.bu(s)!=null||h.bu(s)!=null)return A.dh(a,new A.h8())}return A.dh(a,new A.ko(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hl()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.dh(a,new A.bk(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hl()
return a},
ae(a){var s
if(a instanceof A.fC)return a.b
if(a==null)return new A.hW(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.hW(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
lD(a){if(a==null)return J.aL(a)
if(typeof a=="object")return A.hc(a)
return J.aL(a)},
EC(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
ED(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
Dq(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.x2("Unsupported number of arguments for wrapped closure"))},
dd(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Er(a,b)
a.$identity=s
return s},
Er(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Dq)},
Az(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.qc().constructor.prototype):Object.create(new A.ft(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wW(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Av(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wW(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Av(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Ar)}throw A.b("Error in functionType of tearoff")},
Aw(a,b,c,d){var s=A.wU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wW(a,b,c,d){if(c)return A.Ay(a,b,d)
return A.Aw(b.length,d,a,b)},
Ax(a,b,c,d){var s=A.wU,r=A.As
switch(b?-1:a){case 0:throw A.b(new A.jZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Ay(a,b,c){var s,r
if($.wS==null)$.wS=A.wR("interceptor")
if($.wT==null)$.wT=A.wR("receiver")
s=b.length
r=A.Ax(s,c,a,b)
return r},
wl(a){return A.Az(a)},
Ar(a,b){return A.i3(v.typeUniverse,A.bj(a.a),b)},
wU(a){return a.a},
As(a){return a.b},
wR(a){var s,r,q,p=new A.ft("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.P("Field name "+a+" not found.",null))},
EH(a){return v.getIsolateTag(a)},
Fc(a,b){var s=$.v
if(s===B.h)return a
return s.h5(a,b)},
zq(){return v.G},
Gg(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
EU(a){var s,r,q,p,o,n=$.ze.$1(a),m=$.uX[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.v9[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.z1.$2(a,n)
if(q!=null){m=$.uX[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.v9[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.vb(s)
$.uX[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.v9[n]=s
return s}if(p==="-"){o=A.vb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.zk(a,s)
if(p==="*")throw A.b(A.xG(n))
if(v.leafTags[n]===true){o=A.vb(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.zk(a,s)},
zk(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.wt(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
vb(a){return J.wt(a,!1,null,!!a.$ibp)},
EW(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.vb(s)
else return J.wt(s,c,null,null)},
EN(){if(!0===$.wr)return
$.wr=!0
A.EO()},
EO(){var s,r,q,p,o,n,m,l
$.uX=Object.create(null)
$.v9=Object.create(null)
A.EM()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.zm.$1(o)
if(n!=null){m=A.EW(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
EM(){var s,r,q,p,o,n,m=B.aV()
m=A.fk(B.aW,A.fk(B.aX,A.fk(B.ao,A.fk(B.ao,A.fk(B.aY,A.fk(B.aZ,A.fk(B.b_(B.an),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ze=new A.v6(p)
$.z1=new A.v7(o)
$.zm=new A.v8(n)},
fk(a,b){return a(b)||b},
Ev(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vE(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.Y("Illegal RegExp pattern ("+String(o)+")",a,null))},
F3(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.ej){s=B.a.a7(a,c)
return b.b.test(s)}else return!J.wI(b,B.a.a7(a,c)).gB(0)},
zd(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
zn(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.F5(a,b,c)
if(b instanceof A.ej){s=b.gkG()
s.lastIndex=0
return a.replace(s,A.zd(c))}return A.F4(a,b,c)},
F4(a,b,c){var s,r,q,p
for(s=J.wI(b,a),s=s.gv(s),r=0,q="";s.m();){p=s.gn()
q=q+a.substring(r,p.gH())+c
r=p.gE()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
F5(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.zn(b),"g"),A.zd(c))},
yY(a){return a},
zr(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.h1(0,a),s=new A.kB(s.a,s.b,s.c),r=t.lu,q=0,p="";s.m();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.p(A.yY(B.a.q(a,q,m)))+A.p(c.$1(o))
q=m+n[0].length}s=p+A.p(A.yY(B.a.a7(a,q)))
return s.charCodeAt(0)==0?s:s},
F6(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.zs(a,s,s+b.length,c)},
zs(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
aF:function aF(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
l6:function l6(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
l7:function l7(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(){},
mC:function mC(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.$ti=c},
dY:function dY(a,b){this.a=a
this.$ti=b},
f0:function f0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fz:function fz(){},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
oa:function oa(){},
fN:function fN(a,b){this.a=a
this.$ti=b},
pI:function pI(a){this.a=a},
hi:function hi(){},
qF:function qF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h8:function h8(){},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a){this.a=a},
jD:function jD(a){this.a=a},
fC:function fC(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a
this.b=null},
dp:function dp(){},
ma:function ma(){},
mb:function mb(){},
qD:function qD(){},
qc:function qc(){},
ft:function ft(a,b){this.a=a
this.b=b},
jZ:function jZ(a){this.a=a},
bq:function bq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
oh:function oh(a){this.a=a},
oj:function oj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ai:function ai(a,b){this.a=a
this.$ti=b},
dz:function dz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aO:function aO(a,b){this.a=a
this.$ti=b},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aN:function aN(a,b){this.a=a
this.$ti=b},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fS:function fS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
v6:function v6(a){this.a=a},
v7:function v7(a){this.a=a},
v8:function v8(a){this.a=a},
f4:function f4(){},
l4:function l4(){},
l5:function l5(){},
ej:function ej(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
f2:function f2(a){this.b=a},
kA:function kA(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eG:function eG(a,b){this.a=a
this.c=b},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
ua:function ua(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
F8(a){throw A.aB(A.xj(a),new Error())},
y(){throw A.aB(A.xk(""),new Error())},
zt(){throw A.aB(A.B3(""),new Error())},
vj(){throw A.aB(A.xj(""),new Error())},
xZ(){var s=new A.kK("")
return s.b=s},
rG(a){var s=new A.kK(a)
return s.b=s},
kK:function kK(a){this.a=a
this.b=null},
Db(a){return a},
ib(a,b,c){},
bx(a){var s,r,q
if(t.iy.b(a))return a
s=J.J(a)
r=A.aG(s.gk(a),null,!1,t.z)
for(q=0;q<s.gk(a);++q)r[q]=s.h(a,q)
return r},
xm(a,b,c){var s
A.ib(a,b,c)
s=new DataView(a,b)
return s},
cp(a,b,c){A.ib(a,b,c)
c=B.b.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Bm(a){return new Int8Array(a)},
Bn(a){return new Uint16Array(a)},
Bo(a,b,c){A.ib(a,b,c)
return new Uint32Array(a,b,c)},
vK(a){return new Uint8Array(a)},
bt(a,b,c){A.ib(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cF(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.uW(b,a))},
ce(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Ex(a,b,c))
if(b==null)return c
return b},
ep:function ep(){},
eo:function eo(){},
h4:function h4(){},
lq:function lq(a){this.a=a},
h3:function h3(){},
eq:function eq(){},
cS:function cS(){},
bs:function bs(){},
jv:function jv(){},
jw:function jw(){},
jx:function jx(){},
jy:function jy(){},
jz:function jz(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
dF:function dF(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
vR(a,b){var s=b.c
return s==null?b.c=A.i1(a,"K",[b.x]):s},
xx(a){var s=a.w
if(s===6||s===7)return A.xx(a.x)
return s===11||s===12},
BF(a){return a.as},
am(a){return A.uh(v.typeUniverse,a,!1)},
EQ(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.db(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
db(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.db(a1,s,a3,a4)
if(r===s)return a2
return A.ye(a1,r,!0)
case 7:s=a2.x
r=A.db(a1,s,a3,a4)
if(r===s)return a2
return A.yd(a1,r,!0)
case 8:q=a2.y
p=A.fj(a1,q,a3,a4)
if(p===q)return a2
return A.i1(a1,a2.x,p)
case 9:o=a2.x
n=A.db(a1,o,a3,a4)
m=a2.y
l=A.fj(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.w9(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fj(a1,j,a3,a4)
if(i===j)return a2
return A.yf(a1,k,i)
case 11:h=a2.x
g=A.db(a1,h,a3,a4)
f=a2.y
e=A.DW(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.yc(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fj(a1,d,a3,a4)
o=a2.x
n=A.db(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.wa(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.is("Attempted to substitute unexpected RTI kind "+a0))}},
fj(a,b,c,d){var s,r,q,p,o=b.length,n=A.ur(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.db(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
DX(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.ur(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.db(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
DW(a,b,c,d){var s,r=b.a,q=A.fj(a,r,c,d),p=b.b,o=A.fj(a,p,c,d),n=b.c,m=A.DX(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.kU()
s.a=q
s.b=o
s.c=m
return s},
m(a,b){a[v.arrayRti]=b
return a},
lz(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.EI(s)
return a.$S()}return null},
EP(a,b){var s
if(A.xx(b))if(a instanceof A.dp){s=A.lz(a)
if(s!=null)return s}return A.bj(a)},
bj(a){if(a instanceof A.j)return A.o(a)
if(Array.isArray(a))return A.al(a)
return A.wh(J.df(a))},
al(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.wh(a)},
wh(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Do(a,s)},
Do(a,b){var s=a instanceof A.dp?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.CL(v.typeUniverse,s.name)
b.$ccache=r
return r},
EI(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.uh(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ij(a){return A.bA(A.o(a))},
wq(a){var s=A.lz(a)
return A.bA(s==null?A.bj(a):s)},
wk(a){var s
if(a instanceof A.f4)return a.kw()
s=a instanceof A.dp?A.lz(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.bE(a).a
if(Array.isArray(a))return A.al(a)
return A.bj(a)},
bA(a){var s=a.r
return s==null?a.r=new A.uf(a):s},
Ez(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.i3(v.typeUniverse,A.wk(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.yg(v.typeUniverse,s,A.wk(q[r]))
return A.i3(v.typeUniverse,s,a)},
bP(a){return A.bA(A.uh(v.typeUniverse,a,!1))},
Dn(a){var s=this
s.b=A.DU(s)
return s.b(a)},
DU(a){var s,r,q,p
if(a===t.K)return A.Dw
if(A.e6(a))return A.DA
s=a.w
if(s===6)return A.Dl
if(s===1)return A.yH
if(s===7)return A.Dr
r=A.DT(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.e6)){a.f="$i"+q
if(q==="q")return A.Du
if(a===t.m)return A.Dt
return A.Dz}}else if(s===10){p=A.Ev(a.x,a.y)
return p==null?A.yH:p}return A.Dj},
DT(a){if(a.w===8){if(a===t.S)return A.aA
if(a===t.i||a===t.o)return A.Dv
if(a===t.N)return A.Dy
if(a===t.y)return A.bO}return null},
Dm(a){var s=this,r=A.Di
if(A.e6(s))r=A.D0
else if(s===t.K)r=A.D_
else if(A.fm(s)){r=A.Dk
if(s===t.I)r=A.a7
else if(s===t.v)r=A.S
else if(s===t.o9)r=A.yv
else if(s===t.jh)r=A.CZ
else if(s===t.dz)r=A.yw
else if(s===t.B)r=A.yx}else if(s===t.S)r=A.X
else if(s===t.N)r=A.t
else if(s===t.y)r=A.ff
else if(s===t.o)r=A.CY
else if(s===t.i)r=A.e1
else if(s===t.m)r=A.aT
s.a=r
return s.a(a)},
Dj(a){var s=this
if(a==null)return A.fm(s)
return A.ET(v.typeUniverse,A.EP(a,s),s)},
Dl(a){if(a==null)return!0
return this.x.b(a)},
Dz(a){var s,r=this
if(a==null)return A.fm(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.df(a)[s]},
Du(a){var s,r=this
if(a==null)return A.fm(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.df(a)[s]},
Dt(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
yG(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Di(a){var s=this
if(a==null){if(A.fm(s))return a}else if(s.b(a))return a
throw A.aB(A.yB(a,s),new Error())},
Dk(a){var s=this
if(a==null||s.b(a))return a
throw A.aB(A.yB(a,s),new Error())},
yB(a,b){return new A.i_("TypeError: "+A.y1(a,A.bh(b,null)))},
y1(a,b){return A.iZ(a)+": type '"+A.bh(A.wk(a),null)+"' is not a subtype of type '"+b+"'"},
bN(a,b){return new A.i_("TypeError: "+A.y1(a,b))},
Dr(a){var s=this
return s.x.b(a)||A.vR(v.typeUniverse,s).b(a)},
Dw(a){return a!=null},
D_(a){if(a!=null)return a
throw A.aB(A.bN(a,"Object"),new Error())},
DA(a){return!0},
D0(a){return a},
yH(a){return!1},
bO(a){return!0===a||!1===a},
ff(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aB(A.bN(a,"bool"),new Error())},
yv(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aB(A.bN(a,"bool?"),new Error())},
e1(a){if(typeof a=="number")return a
throw A.aB(A.bN(a,"double"),new Error())},
yw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aB(A.bN(a,"double?"),new Error())},
aA(a){return typeof a=="number"&&Math.floor(a)===a},
X(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aB(A.bN(a,"int"),new Error())},
a7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aB(A.bN(a,"int?"),new Error())},
Dv(a){return typeof a=="number"},
CY(a){if(typeof a=="number")return a
throw A.aB(A.bN(a,"num"),new Error())},
CZ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aB(A.bN(a,"num?"),new Error())},
Dy(a){return typeof a=="string"},
t(a){if(typeof a=="string")return a
throw A.aB(A.bN(a,"String"),new Error())},
S(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aB(A.bN(a,"String?"),new Error())},
aT(a){if(A.yG(a))return a
throw A.aB(A.bN(a,"JSObject"),new Error())},
yx(a){if(a==null)return a
if(A.yG(a))return a
throw A.aB(A.bN(a,"JSObject?"),new Error())},
yT(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bh(a[q],b)
return s},
DL(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.yT(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bh(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
yE(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.m([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bh(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bh(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bh(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bh(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bh(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bh(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bh(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bh(a.x,b)+">"
if(m===8){p=A.DZ(a.x)
o=a.y
return o.length>0?p+("<"+A.yT(o,b)+">"):p}if(m===10)return A.DL(a,b)
if(m===11)return A.yE(a,b,null)
if(m===12)return A.yE(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
DZ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
CM(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
CL(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.uh(a,b,!1)
else if(typeof m=="number"){s=m
r=A.i2(a,5,"#")
q=A.ur(s)
for(p=0;p<s;++p)q[p]=r
o=A.i1(a,b,q)
n[b]=o
return o}else return m},
CK(a,b){return A.yt(a.tR,b)},
CJ(a,b){return A.yt(a.eT,b)},
uh(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.y8(A.y6(a,null,b,!1))
r.set(b,s)
return s},
i3(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.y8(A.y6(a,b,c,!0))
q.set(c,r)
return r},
yg(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.w9(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
da(a,b){b.a=A.Dm
b.b=A.Dn
return b},
i2(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bU(null,null)
s.w=b
s.as=c
r=A.da(a,s)
a.eC.set(c,r)
return r},
ye(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.CH(a,b,r,c)
a.eC.set(r,s)
return s},
CH(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.e6(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.fm(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.bU(null,null)
q.w=6
q.x=b
q.as=c
return A.da(a,q)},
yd(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.CF(a,b,r,c)
a.eC.set(r,s)
return s},
CF(a,b,c,d){var s,r
if(d){s=b.w
if(A.e6(b)||b===t.K)return b
else if(s===1)return A.i1(a,"K",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.bU(null,null)
r.w=7
r.x=b
r.as=c
return A.da(a,r)},
CI(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bU(null,null)
s.w=13
s.x=b
s.as=q
r=A.da(a,s)
a.eC.set(q,r)
return r},
i0(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
CE(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
i1(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.i0(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bU(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.da(a,r)
a.eC.set(p,q)
return q},
w9(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.i0(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bU(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.da(a,o)
a.eC.set(q,n)
return n},
yf(a,b,c){var s,r,q="+"+(b+"("+A.i0(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bU(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.da(a,s)
a.eC.set(q,r)
return r},
yc(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.i0(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.i0(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.CE(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bU(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.da(a,p)
a.eC.set(r,o)
return o},
wa(a,b,c,d){var s,r=b.as+("<"+A.i0(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.CG(a,b,c,r,d)
a.eC.set(r,s)
return s},
CG(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.ur(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.db(a,b,r,0)
m=A.fj(a,c,r,0)
return A.wa(a,n,m,c!==m)}}l=new A.bU(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.da(a,l)},
y6(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
y8(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Cx(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.y7(a,r,l,k,!1)
else if(q===46)r=A.y7(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.e_(a.u,a.e,k.pop()))
break
case 94:k.push(A.CI(a.u,k.pop()))
break
case 35:k.push(A.i2(a.u,5,"#"))
break
case 64:k.push(A.i2(a.u,2,"@"))
break
case 126:k.push(A.i2(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Cz(a,k)
break
case 38:A.Cy(a,k)
break
case 63:p=a.u
k.push(A.ye(p,A.e_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.yd(p,A.e_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Cw(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.y9(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.CB(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.e_(a.u,a.e,m)},
Cx(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
y7(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.CM(s,o.x)[p]
if(n==null)A.w('No "'+p+'" in "'+A.BF(o)+'"')
d.push(A.i3(s,o,n))}else d.push(p)
return m},
Cz(a,b){var s,r=a.u,q=A.y5(a,b),p=b.pop()
if(typeof p=="string")b.push(A.i1(r,p,q))
else{s=A.e_(r,a.e,p)
switch(s.w){case 11:b.push(A.wa(r,s,q,a.n))
break
default:b.push(A.w9(r,s,q))
break}}},
Cw(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.y5(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.e_(p,a.e,o)
q=new A.kU()
q.a=s
q.b=n
q.c=m
b.push(A.yc(p,r,q))
return
case-4:b.push(A.yf(p,b.pop(),s))
return
default:throw A.b(A.is("Unexpected state under `()`: "+A.p(o)))}},
Cy(a,b){var s=b.pop()
if(0===s){b.push(A.i2(a.u,1,"0&"))
return}if(1===s){b.push(A.i2(a.u,4,"1&"))
return}throw A.b(A.is("Unexpected extended operation "+A.p(s)))},
y5(a,b){var s=b.splice(a.p)
A.y9(a.u,a.e,s)
a.p=b.pop()
return s},
e_(a,b,c){if(typeof c=="string")return A.i1(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.CA(a,b,c)}else return c},
y9(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.e_(a,b,c[s])},
CB(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.e_(a,b,c[s])},
CA(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.is("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.is("Bad index "+c+" for "+b.l(0)))},
ET(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aC(a,b,null,c,null)
r.set(c,s)}return s},
aC(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.e6(d))return!0
s=b.w
if(s===4)return!0
if(A.e6(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aC(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aC(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aC(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aC(a,b.x,c,d,e))return!1
return A.aC(a,A.vR(a,b),c,d,e)}if(s===6)return A.aC(a,p,c,d,e)&&A.aC(a,b.x,c,d,e)
if(q===7){if(A.aC(a,b,c,d.x,e))return!0
return A.aC(a,b,c,A.vR(a,d),e)}if(q===6)return A.aC(a,b,c,p,e)||A.aC(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.gY)return!0
o=s===10
if(o&&d===t.lZ)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.aC(a,j,c,i,e)||!A.aC(a,i,e,j,c))return!1}return A.yF(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.yF(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Ds(a,b,c,d,e)}if(o&&q===10)return A.Dx(a,b,c,d,e)
return!1},
yF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aC(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.aC(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aC(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aC(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.aC(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Ds(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.i3(a,b,r[o])
return A.yu(a,p,null,c,d.y,e)}return A.yu(a,b.y,null,c,d.y,e)},
yu(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aC(a,b[s],d,e[s],f))return!1
return!0},
Dx(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aC(a,r[s],c,q[s],e))return!1
return!0},
fm(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.e6(a))if(s!==6)r=s===7&&A.fm(a.x)
return r},
e6(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
yt(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ur(a){return a>0?new Array(a):v.typeUniverse.sEA},
bU:function bU(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
kU:function kU(){this.c=this.b=this.a=null},
uf:function uf(a){this.a=a},
kR:function kR(){},
i_:function i_(a){this.a=a},
C3(){var s,r,q
if(self.scheduleImmediate!=null)return A.E1()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dd(new A.rl(s),1)).observe(r,{childList:true})
return new A.rk(s,r,q)}else if(self.setImmediate!=null)return A.E2()
return A.E3()},
C4(a){self.scheduleImmediate(A.dd(new A.rm(a),0))},
C5(a){self.setImmediate(A.dd(new A.rn(a),0))},
C6(a){A.vW(B.aq,a)},
vW(a,b){var s=B.b.M(a.a,1000)
return A.CC(s<0?0:s,b)},
xD(a,b){var s=B.b.M(a.a,1000)
return A.CD(s<0?0:s,b)},
CC(a,b){var s=new A.hZ(!0)
s.nl(a,b)
return s},
CD(a,b){var s=new A.hZ(!1)
s.nm(a,b)
return s},
h(a){return new A.hu(new A.r($.v,a.i("r<0>")),a.i("hu<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.yy(a,b)},
e(a,b){b.ak(a)},
d(a,b){b.bO(A.E(a),A.ae(a))},
yy(a,b){var s,r,q=new A.uv(b),p=new A.uw(b)
if(a instanceof A.r)a.l6(q,p,t.z)
else{s=t.z
if(a instanceof A.r)a.bY(q,p,s)
else{r=new A.r($.v,t._)
r.a=8
r.c=a
r.l6(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.v.eP(new A.uN(s),t.H,t.S,t.z)},
bw(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cI(null)
else{s=c.a
s===$&&A.y()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.E(a)
q=A.ae(a)
s.al(new A.ab(r,q))}else{s=A.E(a)
r=A.ae(a)
q=c.a
q===$&&A.y()
q.bN(s,r)
c.a.p()}return}if(a instanceof A.hK){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.y()
r.t(0,s)
A.ik(new A.ut(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.y()
s.rp(p,!1).bi(new A.uu(c,b),t.P)
return}}A.yy(a,b)},
yX(a){var s=a.a
s===$&&A.y()
return new A.aY(s,A.o(s).i("aY<1>"))},
C7(a,b){var s=new A.kD(b.i("kD<0>"))
s.nh(a,b)
return s},
yI(a,b){return A.C7(a,b)},
Cs(a){return new A.hK(a,1)},
d5(a){return new A.hK(a,0)},
yb(a,b,c){return 0},
fr(a){var s
if(t.C.b(a)){s=a.gc0()
if(s!=null)return s}return B.t},
eh(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.E(q)
r=A.ae(q)
p=new A.r($.v,b.i("r<0>"))
o=s
n=r
m=A.ic(o,n)
if(m==null)o=new A.ab(o,n==null?A.fr(o):n)
else o=m
p.c2(o)
return p}return b.i("K<0>").b(l)?l:A.bg(l,b)},
cj(a,b){var s=a==null?b.a(a):a,r=new A.r($.v,b.i("r<0>"))
r.aX(s)
return r},
AS(a,b){var s
if(!b.b(null))throw A.b(A.aU(null,"computation","The type parameter is not nullable"))
s=new A.r($.v,b.i("r<0>"))
A.cZ(a,new A.nF(null,s,b))
return s},
xb(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.r($.v,b.i("r<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.nH(i,h,g,f)
try{for(n=J.L(a),m=t.P;n.m();){r=n.gn()
q=i.b
r.bY(new A.nG(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cI(A.m([],b.i("A<0>")))
return n}i.a=A.aG(n,null,!1,b.i("0?"))}catch(l){p=A.E(l)
o=A.ae(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.ic(m,k)
if(j==null)m=new A.ab(m,k==null?A.fr(m):k)
else m=j
n.c2(m)
return n}else{i.d=p
i.c=o}}return f},
vy(a,b,c,d){var s=new A.nA(d,null,b,c),r=$.v,q=new A.r(r,c.i("r<0>"))
if(r!==B.h)s=r.eP(s,c.i("0/"),t.K,t.l)
a.dk(new A.bL(q,2,null,s,a.$ti.i("@<1>").V(c).i("bL<1,2>")))
return q},
AQ(a,b){var s,r,q,p=A.m([],b.i("A<hI<0>>"))
for(s=a.length,r=b.i("hI<0>"),q=0;q<a.length;a.length===s||(0,A.H)(a),++q)p.push(new A.hI(a[q],r))
if(p.length===0)return A.cj(A.m([],b.i("A<0>")),b.i("q<0>"))
s=new A.r($.v,b.i("r<q<0>>"))
A.Cm(p,new A.nB(new A.a8(s,b.i("a8<q<0>>")),p,b))
return s},
DE(a){return a!=null},
Cm(a,b){var s,r={},q=r.a=r.b=0,p=new A.td(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.H)(a),++q)a[q].rd(p)},
ic(a,b){var s,r,q,p=$.v
if(p===B.h)return null
s=p.lC(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.jP(r,q)
return s},
uE(a,b){var s
if($.v!==B.h){s=A.ic(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gc0()
if(b==null){A.jP(a,B.t)
b=B.t}}else b=B.t
else if(t.C.b(a))A.jP(a,b)
return new A.ab(a,b)},
Cl(a,b,c){var s=new A.r(b,c.i("r<0>"))
s.a=8
s.c=a
return s},
bg(a,b){var s=new A.r($.v,b.i("r<0>"))
s.a=8
s.c=a
return s},
tj(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.xA()
b.c2(new A.ab(new A.bk(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.kM(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.ef()
b.fa(p.a)
A.dW(b,q)
return}b.a^=2
b.b.cC(new A.tk(p,b))},
dW(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.eA(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.dW(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gbQ()===k.gbQ())}else f=!1
if(f){f=g.a
r=f.c
f.b.eA(r.a,r.b)
return}j=$.v
if(j!==k)$.v=k
else j=null
f=s.a.c
if((f&15)===8)new A.to(s,g,p).$0()
else if(q){if((f&1)!==0)new A.tn(s,m).$0()}else if((f&2)!==0)new A.tm(g,s).$0()
if(j!=null)$.v=j
f=s.c
if(f instanceof A.r){r=s.a.$ti
r=r.i("K<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.fT(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.tj(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.fT(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
yN(a,b){if(t.ng.b(a))return b.eP(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.d3(a,t.z,t.K)
throw A.b(A.aU(a,"onError",u.w))},
DD(){var s,r
for(s=$.fh;s!=null;s=$.fh){$.ie=null
r=s.b
$.fh=r
if(r==null)$.id=null
s.a.$0()}},
DV(){$.wi=!0
try{A.DD()}finally{$.ie=null
$.wi=!1
if($.fh!=null)$.wB().$1(A.z2())}},
yV(a){var s=new A.kC(a),r=$.id
if(r==null){$.fh=$.id=s
if(!$.wi)$.wB().$1(A.z2())}else $.id=r.b=s},
DS(a){var s,r,q,p=$.fh
if(p==null){A.yV(a)
$.ie=$.id
return}s=new A.kC(a)
r=$.ie
if(r==null){s.b=p
$.fh=$.ie=s}else{q=r.b
s.b=q
$.ie=r.b=s
if(q==null)$.id=s}},
ik(a){var s,r=null,q=$.v
if(B.h===q){A.uL(r,r,B.h,a)
return}if(B.h===q.giL().a)s=B.h.gbQ()===q.gbQ()
else s=!1
if(s){A.uL(r,r,q,q.by(a,t.H))
return}s=$.v
s.cC(s.eq(a))},
qe(a,b){var s=null,r=b.i("cc<0>"),q=new A.cc(s,s,s,s,r)
q.ba(a)
q.k9()
return new A.aY(q,r.i("aY<1>"))},
Fu(a){return new A.c2(A.bi(a,"stream",t.K))},
vT(a,b,c,d,e){return d?new A.fa(b,null,c,a,e.i("fa<0>")):new A.cc(b,null,c,a,e.i("cc<0>"))},
eE(a,b,c){return new A.hv(b,a,c.i("hv<0>"))},
lx(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.E(q)
r=A.ae(q)
$.v.eA(s,r)}},
Cj(a,b,c,d,e,f){var s=$.v,r=e?1:0,q=c!=null?32:0,p=A.kI(s,b,f),o=A.rB(s,c),n=d==null?A.uP():d
return new A.d2(a,p,o,s.by(n,t.H),s,r|q,f.i("d2<0>"))},
C0(a){return new A.rd(a)},
kI(a,b,c){var s=b==null?A.E5():b
return a.d3(s,t.H,c)},
rB(a,b){if(b==null)b=A.E6()
if(t.b9.b(b))return a.eP(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.d3(b,t.z,t.K)
throw A.b(A.P("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
DF(a){},
DH(a,b){$.v.eA(a,b)},
DG(){},
y0(a,b){var s=$.v,r=new A.eX(s,b.i("eX<0>"))
A.ik(r.gkI())
if(a!=null)r.c=s.by(a,t.H)
return r},
D8(a,b,c){var s=a.A()
if(s!==$.di())s.aD(new A.uy(b,c))
else b.al(c)},
D9(a,b,c){var s=a.A()
if(s!==$.di())s.aD(new A.uz(b,c))
else b.c4(c)},
cZ(a,b){var s=$.v
if(s===B.h)return s.j_(a,b)
return s.j_(a,s.eq(b))},
BR(a,b){var s,r=$.v
if(r===B.h)return r.iZ(a,b)
s=r.h5(b,t.hU)
return $.v.iZ(a,s)},
DP(a,b,c,d,e){A.ig(d,e)},
ig(a,b){A.DS(new A.uH(a,b))},
uI(a,b,c,d){var s,r=$.v
if(r===c)return d.$0()
$.v=c
s=r
try{r=d.$0()
return r}finally{$.v=s}},
uK(a,b,c,d,e){var s,r=$.v
if(r===c)return d.$1(e)
$.v=c
s=r
try{r=d.$1(e)
return r}finally{$.v=s}},
uJ(a,b,c,d,e,f){var s,r=$.v
if(r===c)return d.$2(e,f)
$.v=c
s=r
try{r=d.$2(e,f)
return r}finally{$.v=s}},
yR(a,b,c,d){return d},
yS(a,b,c,d){return d},
yQ(a,b,c,d){return d},
DO(a,b,c,d,e){return null},
uL(a,b,c,d){var s,r
if(B.h!==c){s=B.h.gbQ()
r=c.gbQ()
d=s!==r?c.eq(d):c.iU(d,t.H)}A.yV(d)},
DN(a,b,c,d,e){return A.vW(d,B.h!==c?c.iU(e,t.H):e)},
DM(a,b,c,d,e){return A.xD(d,B.h!==c?c.lp(e,t.H,t.hU):e)},
DQ(a,b,c,d){A.wv(d)},
DI(a){$.v.lS(a)},
yP(a,b,c,d,e){var s,r,q,p
$.zl=A.E7()
if(d==null)d=B.cz
if(e==null)s=c.gkC()
else{r=t.X
s=A.AT(e,r,r)}r=new A.kM(c.gkX(),c.gl_(),c.gkY(),c.gkT(),c.gkU(),c.gkS(),c.gkq(),c.giL(),c.gki(),c.gkh(),c.gkN(),c.gkt(),c.giB(),c,s)
q=d.x
if(q!=null)r.w=new A.aK(r,q)
p=d.a
if(p!=null)r.as=new A.aK(r,p)
return r},
zp(a,b,c,d){return A.DR(a,c,b,d)},
DR(a,b,c,d){return $.v.lE(c,b).bX(a,d)},
rl:function rl(a){this.a=a},
rk:function rk(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(a){this.a=a},
rn:function rn(a){this.a=a},
hZ:function hZ(a){this.a=a
this.b=null
this.c=0},
ud:function ud(a,b){this.a=a
this.b=b},
uc:function uc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a,b){this.a=a
this.b=!1
this.$ti=b},
uv:function uv(a){this.a=a},
uw:function uw(a){this.a=a},
uN:function uN(a){this.a=a},
ut:function ut(a,b){this.a=a
this.b=b},
uu:function uu(a,b){this.a=a
this.b=b},
kD:function kD(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
rp:function rp(a){this.a=a},
rq:function rq(a){this.a=a},
rs:function rs(a){this.a=a},
rt:function rt(a,b){this.a=a
this.b=b},
rr:function rr(a,b){this.a=a
this.b=b},
ro:function ro(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
lm:function lm(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
f9:function f9(a,b){this.a=a
this.$ti=b},
ab:function ab(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.$ti=b},
dS:function dS(a,b,c,d,e,f,g){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
hy:function hy(){},
hv:function hv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
nF:function nF(a,b,c){this.a=a
this.b=b
this.c=c},
nH:function nH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nG:function nG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nA:function nA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kk:function kk(a,b){this.a=a
this.b=b},
nB:function nB(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a,b){this.c=a
this.d=b},
hI:function hI(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
te:function te(a,b){this.a=a
this.b=b},
tf:function tf(a,b){this.a=a
this.b=b},
td:function td(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
a8:function a8(a,b){this.a=a
this.$ti=b},
bL:function bL(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
r:function r(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
tg:function tg(a,b){this.a=a
this.b=b},
tl:function tl(a,b){this.a=a
this.b=b},
tk:function tk(a,b){this.a=a
this.b=b},
ti:function ti(a,b){this.a=a
this.b=b},
th:function th(a,b){this.a=a
this.b=b},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tp:function tp(a,b){this.a=a
this.b=b},
tq:function tq(a){this.a=a},
tn:function tn(a,b){this.a=a
this.b=b},
tm:function tm(a,b){this.a=a
this.b=b},
tr:function tr(a,b){this.a=a
this.b=b},
ts:function ts(a,b,c){this.a=a
this.b=b
this.c=c},
tt:function tt(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a
this.b=null},
a_:function a_(){},
qh:function qh(a,b){this.a=a
this.b=b},
qi:function qi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qj:function qj(a,b){this.a=a
this.b=b},
qk:function qk(a,b){this.a=a
this.b=b},
qf:function qf(a){this.a=a},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(){},
d8:function d8(){},
u6:function u6(a){this.a=a},
u5:function u5(a){this.a=a},
ln:function ln(){},
kE:function kE(){},
cc:function cc(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
fa:function fa(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
aY:function aY(a,b){this.a=a
this.$ti=b},
d2:function d2(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
kz:function kz(){},
rd:function rd(a){this.a=a},
rc:function rc(a){this.a=a},
li:function li(a,b,c){this.c=a
this.a=b
this.b=c},
aS:function aS(){},
rD:function rD(a,b,c){this.a=a
this.b=b
this.c=c},
rC:function rC(a){this.a=a},
f8:function f8(){},
kQ:function kQ(){},
d3:function d3(a){this.b=a
this.a=null},
eW:function eW(a,b){this.b=a
this.c=b
this.a=null},
t6:function t6(){},
f3:function f3(){this.a=0
this.c=this.b=null},
tR:function tR(a,b){this.a=a
this.b=b},
eX:function eX(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
c2:function c2(a){this.a=null
this.b=a
this.c=!1},
hD:function hD(a){this.$ti=a},
cE:function cE(a,b){this.b=a
this.$ti=b},
tP:function tP(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
uy:function uy(a,b){this.a=a
this.b=b},
uz:function uz(a,b){this.a=a
this.b=b},
hG:function hG(){},
f_:function f_(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
dZ:function dZ(a,b,c){this.b=a
this.a=b
this.$ti=c},
hE:function hE(a){this.a=a},
f6:function f6(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
hx:function hx(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m},
fe:function fe(a){this.a=a},
lu:function lu(){},
kM:function kM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=null
_.ax=n
_.ay=o},
t2:function t2(a,b,c){this.a=a
this.b=b
this.c=c},
t4:function t4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t1:function t1(a,b){this.a=a
this.b=b},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
uH:function uH(a,b){this.a=a
this.b=b},
la:function la(){},
tW:function tW(a,b,c){this.a=a
this.b=b
this.c=c},
tY:function tY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tV:function tV(a,b){this.a=a
this.b=b},
tX:function tX(a,b,c){this.a=a
this.b=b
this.c=c},
nJ(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cC(d.i("@<0>").V(e).i("cC<1,2>"))
b=A.wn()}else{if(A.z8()===b&&A.z7()===a)return new A.d4(d.i("@<0>").V(e).i("d4<1,2>"))
if(a==null)a=A.wm()}else{if(b==null)b=A.wn()
if(a==null)a=A.wm()}return A.Ck(a,b,c,d,e)},
y2(a,b){var s=a[b]
return s===a?null:s},
w7(a,b,c){if(c==null)a[b]=a
else a[b]=c},
w6(){var s=Object.create(null)
A.w7(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Ck(a,b,c,d,e){var s=c!=null?c:new A.t0(d)
return new A.hA(a,b,s,d.i("@<0>").V(e).i("hA<1,2>"))},
jm(a,b,c,d){if(b==null){if(a==null)return new A.bq(c.i("@<0>").V(d).i("bq<1,2>"))
b=A.wn()}else{if(A.z8()===b&&A.z7()===a)return new A.fS(c.i("@<0>").V(d).i("fS<1,2>"))
if(a==null)a=A.wm()}return A.Cv(a,b,null,c,d)},
l(a,b,c){return A.EC(a,new A.bq(b.i("@<0>").V(c).i("bq<1,2>")))},
I(a,b){return new A.bq(a.i("@<0>").V(b).i("bq<1,2>"))},
Cv(a,b,c,d,e){return new A.hL(a,b,new A.tM(d),d.i("@<0>").V(e).i("hL<1,2>"))},
ol(a){return new A.cD(a.i("cD<0>"))},
br(a){return new A.cD(a.i("cD<0>"))},
ak(a,b){return A.ED(a,new A.cD(b.i("cD<0>")))},
w8(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
tO(a,b,c){var s=new A.d6(a,b,c.i("d6<0>"))
s.c=a.e
return s},
Dc(a,b){return J.x(a,b)},
Dd(a){return J.aL(a)},
AT(a,b,c){var s=A.nJ(null,null,null,b,c)
a.a9(0,new A.nK(s,b,c))
return s},
b4(a,b,c){var s=A.jm(null,null,b,c)
a.a9(0,new A.ok(s,b,c))
return s},
cm(a,b,c){var s=A.jm(null,null,b,c)
s.G(0,a)
return s},
B4(a,b){var s,r,q=A.ol(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.H)(a),++r)q.t(0,b.a(a[r]))
return q},
om(a,b){var s=A.ol(b)
s.G(0,a)
return s},
B5(a,b){var s=t.bP
return J.wJ(s.a(a),s.a(b))},
oW(a){var s,r
if(A.ws(a))return"{...}"
s=new A.O("")
try{r={}
$.e8.push(a)
s.a+="{"
r.a=!0
a.a9(0,new A.oX(r,s))
s.a+="}"}finally{$.e8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
vH(a){return new A.fU(A.aG(A.B6(null),null,!1,a.i("0?")),a.i("fU<0>"))},
B6(a){return 8},
cC:function cC(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
tu:function tu(a){this.a=a},
d4:function d4(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
hA:function hA(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
t0:function t0(a){this.a=a},
dX:function dX(a,b){this.a=a
this.$ti=b},
kV:function kV(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hL:function hL(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
tM:function tM(a){this.a=a},
cD:function cD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tN:function tN(a){this.a=a
this.c=this.b=null},
d6:function d6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
nK:function nK(a,b,c){this.a=a
this.b=b
this.c=c},
ok:function ok(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
l0:function l0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
aP:function aP(){},
B:function B(){},
U:function U(){},
oV:function oV(a){this.a=a},
oX:function oX(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.$ti=b},
l2:function l2(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
lp:function lp(){},
h_:function h_(){},
eL:function eL(a,b){this.a=a
this.$ti=b},
fU:function fU(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
l1:function l1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
bV:function bV(){},
hV:function hV(){},
i4:function i4(){},
yL(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.E(r)
q=A.Y(String(s),null,null)
throw A.b(q)}q=A.uA(p)
return q},
uA(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.kZ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.uA(a[s])
return a},
CX(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.zY()
else s=new Uint8Array(o)
for(r=J.J(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
CW(a,b,c,d){var s=a?$.zX():$.zW()
if(s==null)return null
if(0===c&&d===b.length)return A.yr(s,b)
return A.yr(s,b.subarray(c,d))},
yr(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
wO(a,b,c,d,e,f){if(B.b.au(f,4)!==0)throw A.b(A.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.Y("Invalid base64 padding, more than two '=' characters",a,b))},
Cb(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.J(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.D(f)
f[g]=a.charCodeAt(l>>>18&63)
g=n+1
f[n]=a.charCodeAt(l>>>12&63)
n=g+1
f[g]=a.charCodeAt(l>>>6&63)
g=n+1
f[n]=a.charCodeAt(l&63)
l=0
k=3}}if(p>=0&&p<=255){if(e&&k<3){n=g+1
m=n+1
if(3-k===1){r&2&&A.D(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.D(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.h(b,q)
if(o<0||o>255)break;++q}throw A.b(A.aU(b,"Not a byte value at index "+q+": 0x"+B.b.m3(s.h(b,q),16),null))},
Ca(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.b.a4(f,2),i=f&3,h=$.wC()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.D(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.b(A.Y(l,a,r))
s&2&&A.D(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.Y(l,a,r))
s&2&&A.D(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.xQ(a,r+1,c,-m-1)}throw A.b(A.Y(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.Y(k,a,r))},
C8(a,b,c,d){var s=A.C9(a,b,c),r=(d&3)+(s-b),q=B.b.a4(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.zQ()},
C9(a,b,c){var s,r=c,q=r,p=0
for(;;){if(!(q>b&&p<2))break
c$0:{--q
s=a.charCodeAt(q)
if(s===61){++p
r=q
break c$0}if((s|32)===100){if(q===b)break;--q
s=a.charCodeAt(q)}if(s===51){if(q===b)break;--q
s=a.charCodeAt(q)}if(s===37){++p
r=q
break c$0}break}}return r},
xQ(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.Y("Invalid padding character",a,b))
return-s-1},
AI(a){return $.zA().h(0,a.toLowerCase())},
xi(a,b,c){return new A.fT(a,b)},
De(a){return a.ao()},
Ct(a,b){return new A.tJ(a,[],A.Es())},
Cu(a,b,c){var s,r=new A.O("")
A.y4(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
y4(a,b,c,d){var s=A.Ct(b,c)
s.hQ(a)},
ys(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
kZ:function kZ(a,b){this.a=a
this.b=b
this.c=null},
tI:function tI(a){this.a=a},
l_:function l_(a){this.a=a},
tG:function tG(a,b,c){this.b=a
this.c=b
this.a=c},
up:function up(){},
uo:function uo(){},
ip:function ip(){},
lo:function lo(){},
iq:function iq(a){this.a=a},
ug:function ug(a,b){this.a=a
this.b=b},
lW:function lW(){},
iv:function iv(){},
kG:function kG(a){this.a=0
this.b=a},
rA:function rA(a){this.c=null
this.a=0
this.b=a},
rv:function rv(){},
rj:function rj(a,b){this.a=a
this.b=b},
iu:function iu(){},
kF:function kF(){this.a=0},
ru:function ru(a,b){this.a=a
this.b=b},
m0:function m0(){},
eS:function eS(a){this.a=a},
kJ:function kJ(a,b){this.a=a
this.b=b
this.c=0},
iG:function iG(){},
lg:function lg(a,b,c){this.a=a
this.b=b
this.$ti=c},
dU:function dU(a,b){this.a=a
this.b=b},
iH:function iH(){},
ao:function ao(){},
mG:function mG(a){this.a=a},
dw:function dw(){},
fT:function fT(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
oi:function oi(){},
ji:function ji(a){this.b=a},
tH:function tH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
jh:function jh(a){this.a=a},
tK:function tK(){},
tL:function tL(a,b){this.a=a
this.b=b},
tJ:function tJ(a,b,c){this.c=a
this.a=b
this.b=c},
jj:function jj(){},
jk:function jk(a){this.a=a},
kf:function kf(){},
ub:function ub(a,b){this.a=a
this.b=b},
hY:function hY(){},
lj:function lj(a){this.a=a},
un:function un(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(){},
kv:function kv(){},
lt:function lt(a){this.b=this.a=0
this.c=a},
uq:function uq(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
hq:function hq(a){this.a=a},
cd:function cd(a){this.a=a
this.b=16
this.c=0},
lv:function lv(){},
w5(a,b){var s=A.Ch(a,b)
if(s==null)throw A.b(A.Y("Could not parse BigInt",a,null))
return s},
Ce(a,b){var s,r,q=$.ch(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.aU(0,$.wD()).f0(0,A.rw(s))
s=0
o=0}}if(b)return q.bA(0)
return q},
xR(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
Cf(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.u.rG(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.xR(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.xR(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ch()
l=A.bf(j,i)
return new A.az(l===0?!1:c,i,l)},
Ch(a,b){var s,r,q,p,o
if(a==="")return null
s=$.zR().dK(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.Ce(p,q)
if(o!=null)return A.Cf(o,2,q)
return null},
bf(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
w3(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
rw(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bf(4,s)
return new A.az(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bf(1,s)
return new A.az(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.b.a4(a,16)
r=A.bf(2,s)
return new A.az(r===0?!1:o,s,r)}r=B.b.M(B.b.glq(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.b.M(a,65536)}r=A.bf(r,s)
return new A.az(r===0?!1:o,s,r)},
w4(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.D(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.D(d)
d[s]=0}return b+c},
xX(a,b,c,d){var s,r,q,p,o,n=B.b.M(c,16),m=B.b.au(c,16),l=16-m,k=B.b.c_(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.b.e1(p,l)
r&2&&A.D(d)
d[s+n+1]=(o|q)>>>0
q=B.b.c_((p&k)>>>0,m)}r&2&&A.D(d)
d[n]=q},
xS(a,b,c,d){var s,r,q,p,o=B.b.M(c,16)
if(B.b.au(c,16)===0)return A.w4(a,b,o,d)
s=b+o+1
A.xX(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.D(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
Cg(a,b,c,d){var s,r,q,p,o=B.b.M(c,16),n=B.b.au(c,16),m=16-n,l=B.b.c_(1,n)-1,k=B.b.e1(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.b.c_((q&l)>>>0,m)
s&2&&A.D(d)
d[r]=(p|k)>>>0
k=B.b.e1(q,n)}s&2&&A.D(d)
d[j]=k},
rx(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
Cc(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.D(e)
e[q]=r&65535
r=B.b.a4(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.D(e)
e[q]=r&65535
r=B.b.a4(r,16)}s&2&&A.D(e)
e[b]=r},
kH(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.D(e)
e[q]=r&65535
r=0-(B.b.a4(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.D(e)
e[q]=r&65535
r=0-(B.b.a4(r,16)&1)}},
xY(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.D(d)
d[e]=p&65535
r=B.b.M(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.D(d)
d[e]=n&65535
r=B.b.M(n,65536)}},
Cd(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.b.jV((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
EL(a){return A.lD(a)},
x3(a){return new A.j0(new WeakMap(),a)},
x4(a){if(A.bO(a)||typeof a=="number"||typeof a=="string"||a instanceof A.f4)A.AN(a)},
AN(a){throw A.b(A.aU(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
tc(a,b){var s=$.zS()
s=s==null?null:new s(A.dd(A.Fc(a,b),1))
return new A.kT(s,b.i("kT<0>"))},
aq(a){var s=A.eu(a,null)
if(s!=null)return s
throw A.b(A.Y(a,null,null))},
AM(a,b){a=A.aB(a,new Error())
a.stack=b.l(0)
throw a},
aG(a,b,c,d){var s,r=c?J.vC(a,d):J.vB(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
vI(a,b,c){var s,r=A.m([],c.i("A<0>"))
for(s=J.L(a);s.m();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
Q(a,b){var s,r
if(Array.isArray(a))return A.m(a.slice(0),b.i("A<0>"))
s=A.m([],b.i("A<0>"))
for(r=J.L(a);r.m();)s.push(r.gn())
return s},
cP(a,b){var s=A.vI(a,!1,b)
s.$flags=3
return s},
cX(a,b,c){var s,r,q,p,o
A.aQ(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.af(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.xt(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.BO(a,b,c)
if(r)a=J.vq(a,c)
if(b>0)a=J.lM(a,b)
s=A.Q(a,t.S)
return A.xt(s)},
BO(a,b,c){var s=a.length
if(b>=s)return""
return A.Bz(a,b,c==null||c>s?s:c)},
ad(a,b){return new A.ej(a,A.vE(a,!1,b,!1,!1,""))},
EK(a,b){return a==null?b==null:a===b},
ql(a,b,c){var s=J.L(b)
if(!s.m())return a
if(c.length===0){do a+=A.p(s.gn())
while(s.m())}else{a+=A.p(s.gn())
while(s.m())a=a+c+A.p(s.gn())}return a},
vY(){var s,r,q=A.Bs()
if(q==null)throw A.b(A.a0("'Uri.base' is not supported"))
s=$.xJ
if(s!=null&&q===$.xI)return s
r=A.kt(q)
$.xJ=r
$.xI=q
return r},
ls(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.zU()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.f.u(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.b7(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
CR(a){var s,r,q
if(!$.zV())return A.CS(a)
s=new URLSearchParams()
a.a9(0,new A.um(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.q(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
xA(){return A.ae(new Error())},
vu(a,b,c,d,e,f,g){var s=A.BA(a,b,c,d,e,f,g,0,!0)
return new A.b2(s==null?new A.nf(a,b,c,d,e,f,g,0).$0():s,0,!0)},
vv(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.af(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.af(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aU(b,s,u.B))
A.bi(c,"isUtc",t.y)
return a},
AF(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
wZ(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
iR(a){if(a>=10)return""+a
return"0"+a},
dt(a,b,c){return new A.ax(a+1000*b+1e6*c)},
ef(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aU(b,"name","No enum value with that name"))},
iZ(a){if(typeof a=="number"||A.bO(a)||a==null)return J.an(a)
if(typeof a=="string")return JSON.stringify(a)
return A.xs(a)},
x1(a,b){A.bi(a,"error",t.K)
A.bi(b,"stackTrace",t.l)
A.AM(a,b)},
is(a){return new A.ir(a)},
P(a,b){return new A.bk(!1,null,b,a)},
aU(a,b,c){return new A.bk(!0,a,b,c)},
io(a,b){return a},
aD(a){var s=null
return new A.cr(s,s,!1,s,s,a)},
pZ(a,b){return new A.cr(null,null,!0,a,b,"Value not in range")},
af(a,b,c,d,e){return new A.cr(b,c,!0,a,d,"Invalid value")},
xw(a,b,c,d){if(a<b||a>c)throw A.b(A.af(a,b,c,d,null))
return a},
bd(a,b,c){if(0>a||a>c)throw A.b(A.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.af(b,a,c,"end",null))
return b}return c},
aQ(a,b){if(a<0)throw A.b(A.af(a,0,null,b,null))
return a},
xd(a,b){var s=b.b
return new A.fL(s,!0,a,null,"Index out of range")},
j8(a,b,c,d,e){return new A.fL(b,!0,a,e,"Index out of range")},
AX(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.j8(a,b,c,d,e==null?"index":e))
return a},
a0(a){return new A.cb(a)},
xG(a){return new A.km(a)},
u(a){return new A.be(a)},
aw(a){return new A.iI(a)},
x2(a){return new A.kS(a)},
Y(a,b,c){return new A.bc(a,b,c)},
AY(a,b,c){var s,r
if(A.ws(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.m([],t.s)
$.e8.push(a)
try{A.DB(a,s)}finally{$.e8.pop()}r=A.ql(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
of(a,b,c){var s,r
if(A.ws(a))return b+"..."+c
s=new A.O(b)
$.e8.push(a)
try{r=s
r.a=A.ql(r.a,a,", ")}finally{$.e8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
DB(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.p(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){b.push(A.p(p))
return}r=A.p(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.p(p)
r=A.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
EZ(a){var s=B.a.cz(a),r=A.eu(s,null)
if(r==null)r=A.Bx(s)
if(r!=null)return r
throw A.b(A.Y(a,null,null))},
er(a,b,c,d){var s
if(B.o===c){s=J.aL(a)
b=J.aL(b)
return A.qC(A.cx(A.cx($.lJ(),s),b))}if(B.o===d){s=J.aL(a)
b=J.aL(b)
c=J.aL(c)
return A.qC(A.cx(A.cx(A.cx($.lJ(),s),b),c))}s=J.aL(a)
b=J.aL(b)
c=J.aL(c)
d=J.aL(d)
d=A.qC(A.cx(A.cx(A.cx(A.cx($.lJ(),s),b),c),d))
return d},
Bq(a){var s,r,q=$.lJ()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.H)(a),++r)q=A.cx(q,J.aL(a[r]))
return A.qC(q)},
kt(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.xH(a4<a4?B.a.q(a5,0,a4):a5,5,a3).gm6()
else if(s===32)return A.xH(B.a.q(a5,5,a4),0,a3).gm6()}r=A.aG(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.yU(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.yU(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.a.a3(a5,"\\",n))if(p>0)h=B.a.a3(a5,"\\",p-1)||B.a.a3(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.a3(a5,"..",n)))h=m>n+2&&B.a.a3(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.a3(a5,"file",0)){if(p<=0){if(!B.a.a3(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.q(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.d4(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.a3(a5,"http",0)){if(i&&o+3===n&&B.a.a3(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.d4(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.a3(a5,"https",0)){if(i&&o+4===n&&B.a.a3(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.d4(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bM(a4<a5.length?B.a.q(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.wc(a5,0,q)
else{if(q===0)A.fc(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.yn(a5,c,p-1):""
a=A.yl(a5,p,o,!1)
i=o+1
if(i<n){a0=A.eu(B.a.q(a5,i,n),a3)
d=A.ui(a0==null?A.w(A.Y("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.ym(a5,n,m,a3,j,a!=null)
a2=m<l?A.uj(a5,m+1,l,a3):a3
return A.i6(j,b,a,d,a1,a2,l<a4?A.yk(a5,l+1,a4):a3)},
BX(a){return A.wf(a,0,a.length,B.k,!1)},
ks(a,b,c){throw A.b(A.Y("Illegal IPv4 address, "+a,b,c))},
BU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.ks("each part must be in the range 0..255",a,r)}A.ks("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.ks(k,a,q)}l=p+1
s&2&&A.D(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.ks(k,a,q)
p=l}A.ks("IPv4 address should contain exactly 4 parts",a,q)},
BV(a,b,c){var s
if(b===c)throw A.b(A.Y("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.BW(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.xK(a,b,c)
return!0},
BW(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bc(o,a,r)
s=r
break}return new A.bc("Unexpected character",a,r-1)}if(s-1===b)return new A.bc(o,a,s)
return new A.bc("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bc("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bc("Invalid IPvFuture address character",a,s)}},
xK(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.qL(a1)
if(a3-a2<2)a0.$2("address is too short",null)
s=new Uint8Array(16)
r=-1
q=0
if(a1.charCodeAt(a2)===58)if(a1.charCodeAt(a2+1)===58){p=a2+2
o=p
r=0
q=1}else{a0.$2("invalid start colon",a2)
p=a2
o=p}else{p=a2
o=p}for(n=0,m=!0;;){l=p>=a3?0:a1.charCodeAt(p)
$label0$0:{k=l^48
j=!1
if(k<=9)i=k
else{h=l|32
if(h>=97&&h<=102)i=h-87
else break $label0$0
m=j}if(p<o+4){n=n*16+i;++p
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.BU(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.b.a4(n,8)
s[g+1]=n&255;++q
if(l===58){if(q<8){++p
o=p
n=0
m=!0
continue}a0.$2(a,p)}break}if(l===58){if(r<0){f=q+1;++p
r=q
q=f
o=p
continue}a0.$2("only one wildcard `::` is allowed",p)}if(r!==q-1)a0.$2("missing part",p)
break}if(p<a3)a0.$2("invalid character",p)
if(q<8){if(r<0)a0.$2("an address without a wildcard must contain exactly 8 parts",a3)
e=r+1
d=q-e
if(d>0){c=e*2
b=16-d*2
B.d.a6(s,b,16,s,c)
B.d.he(s,c,b,0)}}return s},
i6(a,b,c,d,e,f,g){return new A.i5(a,b,c,d,e,f,g)},
yh(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fc(a,b,c){throw A.b(A.Y(c,a,b))},
CO(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.D(q,"/")){s=A.a0("Illegal path character "+q)
throw A.b(s)}}},
ui(a,b){if(a!=null&&a===A.yh(b))return null
return a},
yl(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.fc(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.CP(a,r,s)
if(p<s){o=p+1
q=A.yq(a,B.a.a3(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.BV(a,r,s)
m=B.a.q(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.bS(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.yq(a,B.a.a3(a,"25",o)?s+3:o,c,"%25")}else q=""
A.xK(a,b,s)
return"["+B.a.q(a,b,s)+q+"]"}return A.CU(a,b,c)},
CP(a,b,c){var s=B.a.bS(a,"%",b)
return s>=b&&s<c?s:c},
yq(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.O(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.wd(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.O("")
m=i.a+=B.a.q(a,r,s)
if(n)o=B.a.q(a,s,s+3)
else if(o==="%")A.fc(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.O("")
if(r<s){i.a+=B.a.q(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.q(a,r,s)
if(i==null){i=new A.O("")
n=i}else n=i
n.a+=j
m=A.wb(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.q(a,b,c)
if(r<c){j=B.a.q(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
CU(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.wd(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.O("")
l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.q(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.O("")
if(r<s){q.a+=B.a.q(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.fc(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.O("")
m=q}else m=q
m.a+=l
k=A.wb(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.q(a,b,c)
if(r<c){l=B.a.q(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
wc(a,b,c){var s,r,q
if(b===c)return""
if(!A.yj(a.charCodeAt(b)))A.fc(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.fc(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.q(a,b,c)
return A.CN(r?a.toLowerCase():a)},
CN(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
yn(a,b,c){if(a==null)return""
return A.i7(a,b,c,16,!1,!1)},
ym(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.i7(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.L(s,"/"))s="/"+s
return A.CT(s,e,f)},
CT(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.L(a,"/")&&!B.a.L(a,"\\"))return A.we(a,!s||c)
return A.e0(a)},
uj(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.P("Both query and queryParameters specified",null))
return A.i7(a,b,c,256,!0,!1)}if(d==null)return null
return A.CR(d)},
CS(a){var s={},r=new A.O("")
s.a=""
a.a9(0,new A.uk(new A.ul(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
yk(a,b,c){if(a==null)return null
return A.i7(a,b,c,256,!0,!1)},
wd(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.v5(s)
p=A.v5(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.b7(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.q(a,b,b+3).toUpperCase()
return null},
wb(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.b.iN(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.cX(s,0,null)},
i7(a,b,c,d,e,f){var s=A.yp(a,b,c,d,e,f)
return s==null?B.a.q(a,b,c):s},
yp(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.wd(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.fc(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.wb(o)}if(p==null){p=new A.O("")
l=p}else l=p
l.a=(l.a+=B.a.q(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.q(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
yo(a){if(B.a.L(a,"."))return!0
return B.a.bR(a,"/.")!==-1},
e0(a){var s,r,q,p,o,n
if(!A.yo(a))return a
s=A.m([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.c.K(s,"/")},
we(a,b){var s,r,q,p,o,n
if(!A.yo(a))return!b?A.yi(a):a
s=A.m([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.gW(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.yi(s[0])
return B.c.K(s,"/")},
yi(a){var s,r,q=a.length
if(q>=2&&A.yj(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.q(a,0,s)+"%3A"+B.a.a7(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
CV(a,b){if(a.uh("package")&&a.c==null)return A.yW(b,0,b.length)
return-1},
CQ(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.P("Invalid URL encoding",null))}}return s},
wf(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.q(a,b,c)
else p=new A.bQ(B.a.q(a,b,c))
else{p=A.m([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.P("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.P("Truncated URI",null))
p.push(A.CQ(a,o+1))
o+=2}else p.push(r)}}return d.j1(p)},
yj(a){var s=a|32
return 97<=s&&s<=122},
xH(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.m([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.Y(k,a,r))}}if(q<0&&r>b)throw A.b(A.Y(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.c.gW(j)
if(p!==44||r!==n+7||!B.a.a3(a,"base64",n+1))throw A.b(A.Y("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.ak.uC(a,m,s)
else{l=A.yp(a,m,s,256,!0,!1)
if(l!=null)a=B.a.d4(a,m,s,l)}return new A.qK(a,j,c)},
yU(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
ya(a){if(a.b===7&&B.a.L(a.a,"package")&&a.c<=0)return A.yW(a.a,a.e,a.f)
return-1},
yW(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
Da(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
az:function az(a,b,c){this.a=a
this.b=b
this.c=c},
ry:function ry(){},
rz:function rz(){},
kT:function kT(a,b){this.a=a
this.$ti=b},
um:function um(a){this.a=a},
nf:function nf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a){this.a=a},
t7:function t7(){},
a4:function a4(){},
ir:function ir(a){this.a=a},
cz:function cz(){},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fL:function fL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cb:function cb(a){this.a=a},
km:function km(a){this.a=a},
be:function be(a){this.a=a},
iI:function iI(a){this.a=a},
jF:function jF(){},
hl:function hl(){},
kS:function kS(a){this.a=a},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(){},
n:function n(){},
V:function V(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(){},
j:function j(){},
ll:function ll(){},
kb:function kb(){this.b=this.a=0},
O:function O(a){this.a=a},
qL:function qL(a){this.a=a},
i5:function i5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
ul:function ul(a,b){this.a=a
this.b=b},
uk:function uk(a){this.a=a},
qK:function qK(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
kN:function kN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
j0:function j0(a,b){this.a=a
this.b=b},
B7(a){return a},
B0(a){return a},
AZ(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.yx(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
AR(a){return new v.G.Promise(A.by(new A.nE(a)))},
jC:function jC(a){this.a=a},
nE:function nE(a){this.a=a},
nC:function nC(a){this.a=a},
nD:function nD(a){this.a=a},
uD(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.D2,a)
s[$.e9()]=a
return s},
cf(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.D3,a)
s[$.e9()]=a
return s},
by(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.D4,a)
s[$.e9()]=a
return s},
lw(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.D5,a)
s[$.e9()]=a
return s},
fg(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.D6,a)
s[$.e9()]=a
return s},
wg(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.D7,a)
s[$.e9()]=a
return s},
D2(a){return a.$0()},
D3(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
D4(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
D5(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
D6(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
D7(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
yK(a){return a==null||A.bO(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
dg(a){if(A.yK(a))return a
return new A.va(new A.d4(t.mp)).$1(a)},
wp(a,b){return a[b]},
z3(a,b,c){return a[b].apply(a,c)},
El(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.c.G(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a2(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.aI(s,b.i("aI<0>"))
a.then(A.dd(new A.ve(r),1),A.dd(new A.vf(r),1))
return s},
yJ(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
uT(a){if(A.yJ(a))return a
return new A.uU(new A.d4(t.mp)).$1(a)},
va:function va(a){this.a=a},
ve:function ve(a){this.a=a},
vf:function vf(a){this.a=a},
uU:function uU(a){this.a=a},
zh(a,b){return Math.max(a,b)},
xu(){return B.ap},
xv(){return $.vl()},
tD:function tD(){},
tE:function tE(a){this.a=a},
iY:function iY(){},
W:function W(){},
m2:function m2(a){this.a=a},
m3:function m3(a){this.a=a},
m4:function m4(a,b){this.a=a
this.b=b},
m5:function m5(a){this.a=a},
m6:function m6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m7:function m7(a){this.a=a},
iU:function iU(){},
fP:function fP(a,b){this.a=a
this.$ti=b},
dB:function dB(a,b){this.a=a
this.$ti=b},
fb:function fb(){},
ez:function ez(a,b){this.a=a
this.$ti=b},
f1:function f1(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
iT:function iT(){},
xn(){throw A.b(A.a0(u.O))},
jA:function jA(){},
kq:function kq(){},
au(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.cX(m,0,null)},
bS:function bS(a){this.a=a},
c5:function c5(){this.a=null},
j5:function j5(){},
nL:function nL(){},
d7(a){var s=new Uint32Array(A.bx(A.m([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.le(s,r,a,q,new Uint32Array(16))},
ld:function ld(){},
tZ:function tZ(){},
le:function le(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
jX:function jX(a,b){this.a=a
this.b=b},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
lX:function lX(){},
yZ(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.jX("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.dn)){s=J.an(a)
if(B.a.L(s,"TypeError: "))s=B.a.a7(s,11)
a=new A.dn(s,b.b)}return a},
yO(a,b,c){A.x1(A.yZ(a,c),b)},
D1(a,b){return new A.cE(new A.ux(a,b),t.fb)},
fi(a,b,c){return A.DK(a,b,c)},
DK(a0,a1,a2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$fi=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:d={}
c=a1.body
b=c==null?null:c.getReader()
s=b==null?3:4
break
case 3:s=5
return A.a(a2.p(),$async$fi)
case 5:s=1
break
case 4:d.a=null
d.b=d.c=!1
a2.f=new A.uF(d)
a2.r=new A.uG(d,b,a0)
c=t.Z,k=t.m,j=t.D,i=t.Q
case 6:n=null
p=9
s=12
return A.a(A.a2(b.read(),k),$async$fi)
case 12:n=a4
p=2
s=11
break
case 9:p=8
a=o.pop()
m=A.E(a)
l=A.ae(a)
s=!d.c?13:14
break
case 13:d.b=!0
c=A.yZ(m,a0)
k=l
j=a2.b
if(j>=4)A.w(a2.bl())
if((j&1)!==0){g=a2.a
if((j&8)!==0)g=g.c
g.b9(c,k==null?B.t:k)}s=15
return A.a(a2.p(),$async$fi)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a2.rI()
s=7
break}else{f=n.value
f.toString
c.a(f)
e=a2.b
if(e>=4)A.w(a2.bl())
if((e&1)!==0){g=a2.a;((e&8)!==0?g.c:g).ba(f)}}f=a2.b
if((f&1)!==0){g=a2.a
e=(((f&8)!==0?g.c:g).e&4)!==0
f=e}else f=(f&2)===0
s=f?16:17
break
case 16:f=d.a
s=18
return A.a((f==null?d.a=new A.aI(new A.r($.v,j),i):f).a,$async$fi)
case 18:case 17:if((a2.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fi,r)},
iC:function iC(a){this.b=!1
this.c=a},
m_:function m_(a){this.a=a},
ux:function ux(a,b){this.a=a
this.b=b},
uF:function uF(a){this.a=a},
uG:function uG(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a){this.a=a},
m1:function m1(a){this.a=a},
wV(a,b){return new A.dn(a,b)},
dn:function dn(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
Bl(a,b){var s=t.N,r=A.m([],t.e8),q=$.wx()
if(!q.b.test(a))A.w(A.aU(a,"method","Not a valid method"))
return new A.p5(A.I(s,s),r,a,b,A.jm(new A.iy(),new A.iz(),s,s))},
p5:function p5(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
p6:function p6(a,b){this.a=a
this.b=b},
BC(a,b){var s=new Uint8Array(0),r=$.wx()
if(!r.b.test(a))A.w(A.aU(a,"method","Not a valid method"))
r=t.N
return new A.q0(s,a,b,A.jm(new A.iy(),new A.iz(),r,r))},
q0:function q0(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
hn:function hn(){},
ke:function ke(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
At(a){return a.toLowerCase()},
fu:function fu(a,b,c){this.a=a
this.c=b
this.$ti=c},
Bh(a){return A.Fb("media type",a,new A.oY(a))},
vJ(a,b,c){var s=t.N
if(c==null)s=A.I(s,s)
else{s=new A.fu(A.Em(),A.I(s,t.gc),t.kj)
s.G(0,c)}return new A.el(a.toLowerCase(),b.toLowerCase(),new A.eL(s,t.ph))},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
oY:function oY(a){this.a=a},
p_:function p_(a){this.a=a},
oZ:function oZ(){},
EA(a){var s
a.lD($.A3(),"quoted string")
s=a.gjj().h(0,0)
return A.zr(B.a.q(s,1,s.length-1),$.A2(),new A.v0(),null)},
v0:function v0(){},
a9(a,b){var s,r,q,p,o,n,m
if(b==null)a.a+="null"
else if(A.bO(b)){s=b?"true":"false"
a.a+=s}else if(A.aA(b))a.a+=B.b.l(b)
else if(typeof b=="number"){s=isFinite(b)&&b===B.u.vb(b)&&Math.abs(b)<1e15
r=a.a
if(s)a.a=r+B.b.l(B.u.m0(b))
else a.a=r+B.u.l(b)}else if(typeof b=="number")a.a+=B.u.l(b)
else if(typeof b=="string"){s=B.e.a8(b,null)
a.a+=s}else if(t.j.b(b)){a.a+="["
for(q=0;s=J.J(b),q<s.gk(b);++q){if(q>0)a.a+=","
A.a9(a,s.h(b,q))}a.a+="]"}else if(t.f.b(b)){p=J.av(b.gS(),new A.uO(),t.N).d8(0)
B.c.b8(p)
a.a+="{"
for(s=p.length,o=!0,n=0;n<p.length;p.length===s||(0,A.H)(p),++n,o=!1){m=p[n]
if(!o)a.a+=","
r=B.e.a8(m,null)
a.a=(a.a+=r)+":"
A.a9(a,b.h(0,m))}a.a+="}"}else throw A.b(A.P("Cannot canonicalize value of type "+J.bE(b).l(0),null))},
uO:function uO(){},
BJ(a){var s,r,q,p=A.ad("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0).dK(a)
if(p==null)return B.bQ
s=p.b
r=s[1]
r.toString
r=A.aq(r)
q=s[2]
q.toString
q=A.aq(q)
s=s[3]
s=A.eu(s==null?"":s,null)
return new A.hU(r,q,s==null?0:s)},
dK(a,b){return A.BK(a,b)},
BK(a1,a2){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dK=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:b=A
a=J
a0=J
s=3
return A.a(a1.aN("SELECT sqlite_version() AS v"),$async$dK)
case 3:h=b.t(a.aa(a0.bD(a4),"v"))
g=t.lS
b=A
a=A
a0=J
s=4
return A.a(a1.aN("PRAGMA compile_options"),$async$dK)
case 4:f=b.Q(new a.bv(a0.av(a4,new A.q9(),t.X),g),g.i("n.E"))
e=B.c.dE(f,new A.qa())
s=!e?5:6
break
case 5:p=8
s=11
return A.a(a1.N("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$dK)
case 11:s=12
return A.a(a1.N("DROP TABLE lp__fts5_probe"),$async$dK)
case 12:e=!0
p=2
s=10
break
case 8:p=7
d=o.pop()
e=!1
s=10
break
case 7:s=2
break
case 10:case 6:n=null
g=a2===B.aE
s=g?13:14
break
case 13:p=16
s=19
return A.a(a1.aN("PRAGMA journal_mode"),$async$dK)
case 19:m=a4
if(J.fp(m))n=A.S(J.bD(J.bD(m).gb7()))
p=2
s=18
break
case 16:p=15
c=o.pop()
n=null
s=18
break
case 15:s=2
break
case 18:case 14:k=A.BJ(h)
j=k.a
if(j<=3)i=j===3&&k.b>=37
else i=!0
g=g&&J.x(n,"wal")
q=new A.ka(h,i,g,e,a2)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dK,r)},
jK:function jK(a,b){this.a=a
this.b=b},
ka:function ka(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q9:function q9(){},
qa:function qa(){},
a3:function a3(a,b){this.a=a
this.b=b},
m8:function m8(a){this.a=a},
wN(a){return new Uint8Array(A.bx(a))},
C2(a,b,c){var s,r,q,p,o,n,m=new Uint8Array(16)
a.es(m,m)
s=new Uint8Array(16)
B.d.aa(s,0,12,b)
s[15]=1
r=A.xM(a,s,c)
q=A.xO(m,r)
p=new Uint8Array(16)
o=new Uint8Array(16)
a.es(s,o)
for(n=0;n<16;++n)p[n]=q[n]^o[n]
return new A.aF(r,p)},
C1(a,b,c,d){var s,r,q,p,o,n=new Uint8Array(16)
a.es(n,n)
s=new Uint8Array(16)
B.d.aa(s,0,12,b)
s[15]=1
r=A.xO(n,c)
q=new Uint8Array(16)
a.es(s,q)
for(p=0,o=0;o<16;++o)p|=r[o]^q[o]^d[o]
if(p!==0)return null
return A.xM(a,s,c)},
xM(a,b,c){var s,r,q,p,o,n=c.length,m=new Uint8Array(n),l=new Uint8Array(A.bx(b))
A.xP(l)
s=new Uint8Array(16)
for(r=0;r<n;){a.es(l,s)
A.xP(l)
q=Math.min(16,n-r)
for(p=0;p<q;++p){o=r+p
m[o]=c[o]^s[p]}r+=q}return m},
xP(a){var s,r,q
for(s=a.$flags|0,r=15;r>=12;--r){q=a[r]
s&2&&A.D(a)
a[r]=q+1&255
if(a[r]!==0)break}},
xO(a,b){var s,r,q,p,o,n,m,l=new Uint8Array(16),k=new Uint8Array(16)
for(s=b.length,r=0;r<s;r=p){q=Math.min(16,s-r)
B.d.he(k,0,16,0)
p=r+q
B.d.aa(k,0,q,new Uint8Array(b.subarray(r,A.ce(r,p,s))))
for(o=0;o<16;++o)l[o]=l[o]^k[o]
A.xN(l,a)}n=new Uint8Array(16)
m=s*8
for(o=7;o>=0;--o)n[15-o]=B.b.iN(m,o*8)&255
for(o=0;o<16;++o)l[o]=l[o]^n[o]
A.xN(l,a)
return l},
xN(a,b){var s,r,q,p=t.t,o=A.m([(b[0]<<24|b[1]<<16|b[2]<<8|b[3])>>>0,(b[4]<<24|b[5]<<16|b[6]<<8|b[7])>>>0,(b[8]<<24|b[9]<<16|b[10]<<8|b[11])>>>0,(b[12]<<24|b[13]<<16|b[14]<<8|b[15])>>>0],p),n=A.m([0,0,0,0],p)
for(s=0;s<128;++s){if((B.b.iN(a[s>>>3],7-(s&7))&1)!==0){n[0]=(n[0]^o[0])>>>0
n[1]=(n[1]^o[1])>>>0
n[2]=(n[2]^o[2])>>>0
n[3]=(n[3]^o[3])>>>0}p=o[3]
r=o[2]
o[3]=(p>>>1|(r&1)<<31)>>>0
q=o[1]
o[2]=(r>>>1|(q&1)<<31)>>>0
r=o[0]
o[1]=(q>>>1|(r&1)<<31)>>>0
r=r>>>1
o[0]=r
if((p&1)!==0)o[0]=(r^3774873600)>>>0}for(p=a.$flags|0,s=0;s<4;++s){r=s*4
q=n[s]
p&2&&A.D(a)
a[r]=q>>>24&255
a[r+1]=q>>>16&255
a[r+2]=q>>>8&255
a[r+3]=q&255}},
xL(a){return(B.i[a>>>24&255]<<24|B.i[a>>>16&255]<<16|B.i[a>>>8&255]<<8|B.i[a&255])>>>0},
rf(a){var s=B.i[a>>>24&255]
return(A.dQ(s)<<24|s<<16|s<<8|A.dQ(s)^s)>>>0},
rg(a){var s=B.i[a>>>16&255]
return((A.dQ(s)^s)<<24|A.dQ(s)<<16|s<<8|s)>>>0},
rh(a){var s=B.i[a>>>8&255]
return(s<<24|(A.dQ(s)^s)<<16|A.dQ(s)<<8|s)>>>0},
ri(a){var s=B.i[a&255]
return(s<<24|s<<16|(A.dQ(s)^s)<<8|A.dQ(s))>>>0},
dQ(a){var s=a<<1
return(a&128)!==0?(s^283)&255:s&255},
lN:function lN(a,b){this.b=a
this.c=b},
re:function re(a){this.a=a},
uZ(a2,a3,a4,a5){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$uZ=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)$async$outer:switch(s){case 0:a0=a4.b
a1=a4.r
if(a0==="explain")a1="EXPLAIN QUERY PLAN "+a1
if(a0==="query"&&a5===0){q=A.l(["items",A.m([],t.d),"lastRow",null,"hasMore",!1],t.N,t.X)
s=1
break}s=3
return A.a(a3.$2(a1,a4.w),$async$uZ)
case 3:p=a7
switch(a0){case"query":a0=a5==null
o=!a0&&J.ar(p)>a5
n=a0?p:J.vq(p,a5).d8(0)
m=A.za(a2.af(a4.d).a,n,a2.z,a2.Q)
l=a4.y
if(l==null)k=m
else{a0=A.m([],t.d)
for(j=m.length,i=l.$ti,h=i.i("a5<B.E>"),i=i.i("B.E"),g=t.N,f=t.X,e=0;e<m.length;m.length===j||(0,A.H)(m),++e){d=m[e]
c=A.I(g,f)
for(b=new A.a5(l,l.gk(0),h);b.m();){a=b.d
if(a==null)a=i.a(a)
if(d.I(a))c.j(0,a,d.h(0,a))}a0.push(c)}k=a0}q=A.l(["items",k,"lastRow",o&&m.length!==0?B.c.gW(m):null,"hasMore",o],t.N,t.X)
s=1
break $async$outer
case"count":case"countDistinct":a0=A.ii(p)
q=A.l(["value",a0==null?0:a0],t.N,t.X)
s=1
break $async$outer
case"distinct":a0=[]
for(j=J.L(p);j.m();){i=j.gn()
if(i.gY(i))a0.push(J.bD(i.gb7()))}q=A.l(["values",a0],t.N,t.X)
s=1
break $async$outer
case"ids":a0=A.m([],t.s)
for(j=J.L(p);j.m();)a0.push(A.t(j.gn().h(0,"id")))
q=A.l(["ids",a0],t.N,t.X)
s=1
break $async$outer
case"explain":a0=t.X
q=A.l(["plan",J.av(p,new A.v_(),a0).K(0,"\n")],t.N,a0)
s=1
break $async$outer
case"sum":case"avg":case"min":case"max":a0=J.J(p)
q=A.l(["value",a0.gB(p)?null:J.aa(a0.gC(p),"v")],t.N,t.X)
s=1
break $async$outer
case"search":a0=A.m([],t.d)
for(j=J.L(p),i=t.N,h=t.X;j.m();){g=j.gn()
a0.push(A.l(["id",A.t(g.h(0,"id")),"score",g.h(0,"score")],i,h))}q=A.l(["results",a0],i,h)
s=1
break $async$outer
default:throw A.b(A.u("Unsupported compiled operation: "+a0))}case 1:return A.e(q,r)}})
return A.f($async$uZ,r)},
v_:function v_(){},
x0(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
iJ:function iJ(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b
this.c=!0},
nn:function nn(){},
nm:function nm(){},
no:function no(){},
AH(a){return'"'+A.z(a,'"','""')+'"'},
AG(a,b){var s,r,q,p=a.a,o=J.J(p),n=b.a,m=J.J(n)
if(o.gk(p)>=m.gk(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gk(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
mi:function mi(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iS:function iS(a){this.a=a},
nl:function nl(a){this.a=a},
nk:function nk(){},
nj:function nj(a){this.a=a},
ng:function ng(){},
nh:function nh(){},
ni:function ni(){},
ay(a,b){return new A.hr(a)},
qd(a){return new A.cV(a)},
jT(a){return new A.jS(a)},
ct(a){return new A.ex(a)},
wY(a){return new A.iK(a)},
x_(a){return new A.iV(a)},
zv(a,b){var s,r="UNIQUE constraint failed",q=J.an(a),p=a instanceof A.cU,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.D(q,"PRIMARY KEY")&&!B.a.D(q,r)
else p=!0
if(p)return new A.jM("PRIMARY KEY constraint violated.")
if(o===2067||B.a.D(q,r)){s=A.yD(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.kn('Unique constraint violated on "'+s+'".')}if(o===1299||B.a.D(q,"NOT NULL constraint failed")){p=A.yD(q,"NOT NULL constraint failed:")
return new A.jB('NOT NULL constraint violated on "'+p+'".')}if(B.a.D(q,"CHECK constraint failed")||o===275||n===275)return new A.iF("CHECK constraint violated.")
if(B.a.D(q,"FOREIGN KEY")||o===787||n===787)return new A.j4("FOREIGN KEY constraint violated.")
if(B.a.D(q,"database or disk is full"))return new A.cV("Database full: "+A.p(a))
return new A.cV("SQLite error: "+A.p(a))},
yD(a,b){var s,r,q,p,o,n,m=B.a.bR(a,b)
if(m<0)return"?"
s=B.a.a7(a,m+b.length)
r=s.length
q=B.a.bR(s,",")
if(q>=0)r=q
p=B.a.bR(s,"(")
s=B.a.cz(B.a.q(s,0,p>=0&&p<r?p:r))
o=B.a.dP(s,".")
s=B.a.cz(o>=0?B.a.a7(s,o+1):s)
if(B.a.L(s,'"')&&B.a.cm(s,'"')){n=B.a.q(s,1,s.length-1)
s=A.z(n,'""','"')}return s.length===0?"?":s},
jo:function jo(){},
hr:function hr(a){this.a=a},
kn:function kn(a){this.a=a},
jB:function jB(a){this.a=a},
iF:function iF(a){this.a=a},
jM:function jM(a){this.a=a},
j4:function j4(a){this.a=a},
cV:function cV(a){this.a=a},
jS:function jS(a){this.a=a},
k_:function k_(a){this.a=a},
ex:function ex(a){this.a=a},
fH:function fH(a){this.a=a},
iK:function iK(a){this.a=a},
iV:function iV(a){this.a=a},
cn(a,b,c,d,e,f,g,h){var s=null,r=null
return A.Bg(a,b,c,d,e,f,g,h)},
Bg(a1,a2,a3,a4,a5,a6,a7,a8){var s=0,r=A.h(t.kM),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$cn=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:d=null
c=null
b=null
b=a2
p=4
s=7
return A.a(A.c6(b,a7),$async$cn)
case 7:s=8
return A.a(A.dK(b,a7),$async$cn)
case 8:n=b0
i=0
case 9:if(!(i<3)){s=11
break}m=B.br[i]
s=12
return A.a(b.N(m),$async$cn)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.bz[i]
s=16
return A.a(b.N(l),$async$cn)
case 16:case 14:++i
s=13
break
case 15:h=new A.jI()
g=new A.jn(a6,b,n,h,new A.m8(A.eE(null,null,t.iv)),a5,a3,c,a1,a4,d,A.I(t.N,t.nv))
g.d=new A.ra(A.cj(null,t.H),h.guX())
h=$.vl()
g.as=new A.pi(g,h)
g.at=new A.pb(g,h)
g.ax=new A.mw(g)
g.ay=new A.ot(g,a1)
k=g
s=17
return A.a(A.jq(b),$async$cn)
case 17:h=a8.length,i=0
case 18:if(!(i<a8.length)){s=20
break}j=a8[i]
s=21
return A.a(k.b5(j),$async$cn)
case 21:case 19:a8.length===h||(0,A.H)(a8),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
p=23
s=26
return A.a(b.p(),$async$cn)
case 26:p=3
s=25
break
case 23:p=22
a0=o.pop()
s=25
break
case 22:s=3
break
case 25:throw a
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cn,r)},
c6(a,b){return A.Bf(a,b)},
Bf(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$c6=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.aE?2:3
break
case 2:q=5
s=8
return A.a(a.N("PRAGMA journal_mode=WAL"),$async$c6)
case 8:q=1
s=7
break
case 5:q=4
n=p.pop()
s=7
break
case 4:s=1
break
case 7:s=9
return A.a(a.N("PRAGMA wal_autocheckpoint=1000"),$async$c6)
case 9:s=10
return A.a(a.N("PRAGMA mmap_size=67108864"),$async$c6)
case 10:case 3:s=11
return A.a(a.N("PRAGMA synchronous=NORMAL"),$async$c6)
case 11:s=12
return A.a(a.N("PRAGMA foreign_keys=ON"),$async$c6)
case 12:s=13
return A.a(a.N("PRAGMA busy_timeout=5000"),$async$c6)
case 13:s=14
return A.a(a.N("PRAGMA cache_size=-8000"),$async$c6)
case 14:s=15
return A.a(a.N("PRAGMA temp_store=MEMORY"),$async$c6)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$c6,r)},
jq(a){var s=0,r=A.h(t.H),q,p
var $async$jq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.eM("lp_migrations","version = ?",[1]),$async$jq)
case 3:if(p.fp(c)){s=1
break}s=4
return A.a(a.ai(0,"lp_migrations",A.l(["version",1,"name","core:v1","applied_at",Date.now(),"duration_ms",0],t.N,t.X)),$async$jq)
case 4:case 1:return A.e(q,r)}})
return A.f($async$jq,r)},
np:function np(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.d=b},
pE:function pE(a){this.a=a},
jn:function jn(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=$
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ay=_.ax=_.at=_.as=$
_.ch=l
_.CW=!1
_.cx="NORMAL"},
oU:function oU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oR:function oR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oQ:function oQ(a,b,c){this.a=a
this.b=b
this.c=c},
oT:function oT(a,b){this.a=a
this.b=b},
oS:function oS(a,b,c){this.a=a
this.b=b
this.c=c},
en(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$en=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:j=a.b
i=b.x
h=A.al(i).i("c0<1>")
g=A.Q(new A.c0(i,new A.p3(c,b),h),h.i("n.E"))
B.c.df(g,new A.p4())
i=g.length,h=b.a,q="migrate:"+h+":v",p=c,o=0
case 2:if(!(o<g.length)){s=4
break}n=g[o]
m=n.a
l=p+1
if(m!==l)throw A.b(A.ct('Migration gap for "'+h+'": expected v'+l+", found v"+m+"."))
k=new A.kb()
$.lG()
l=$.jO.$0()
k.a=l
k.b=null
s=n.b?5:7
break
case 5:s=8
return A.a(A.b5(a,b,n),$async$en)
case 8:s=6
break
case 7:s=9
return A.a(A.jt(a,b,n),$async$en)
case 9:case 6:l=$.jO.$0()
k.b=l
s=10
return A.a(A.h1(j,k.gtu(),p,q+m,m),$async$en)
case 10:case 3:g.length===i||(0,A.H)(g),++o,p=m
s=2
break
case 4:s=11
return A.a(j.F("lp_stores",A.l(["schema_ver",b.b],t.N,t.X),"store = ?",[h]),$async$en)
case 11:return A.e(null,r)}})
return A.f($async$en,r)},
h1(a,b,c,d,e){var s=0,r=A.h(t.H),q,p
var $async$h1=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.aN("SELECT MAX(version) AS m FROM lp_migrations"),$async$h1)
case 2:q=p.ii(g)
if(q==null)q=0
s=3
return A.a(a.ai(0,"lp_migrations",A.l(["version",q+1,"name",d,"applied_at",Date.now(),"duration_ms",b],t.N,t.X)),$async$h1)
case 3:return A.e(null,r)}})
return A.f($async$h1,r)},
jt(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h
var $async$jt=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:k=a.b
j=b.a
h=J
s=2
return A.a(k.aN("PRAGMA table_info("+('"'+A.z(j,'"','""')+'"')+")"),$async$jt)
case 2:i=h.av(e,new A.p1(),t.X).jx(0)
q=c.c,p=q.length,o=0
case 3:if(!(o<q.length)){s=5
break}n=q[o]
if(n.c)throw A.b(A.ct('Additive migration on "'+j+'" cannot add a required column "'+n.a+'" (existing rows would violate NOT NULL).'))
m=n.a
if(i.D(0,m)){s=4
break}l=A.z(j,'"','""')
s=6
return A.a(k.N("ALTER TABLE "+('"'+l+'"')+" ADD COLUMN "+('"'+A.z(m,'"','""')+'"')+" "+n.gjP()),$async$jt)
case 6:case 4:q.length===p||(0,A.H)(q),++o
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$jt,r)},
b5(a,b,c){return A.Bk(a,b,c)},
Bk(a3,a4,a5){var s=0,r=A.h(t.H),q=1,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$b5=A.c(function(a6,a7){if(a6===1){p.push(a7)
s=q}for(;;)switch(s){case 0:a0=a3.b
if(!a3.w)throw A.b(A.x_('Destructive migration for "'+a4.a+'" requires the backup step, which is disabled.'))
m=a4.a
l=a5.a
k=m+"__new_"+l
o=A.Bj(a3.a,m,l)
q=3
s=6
return A.a(a0.N("VACUUM INTO '"+A.z(o,"'","''")+"'"),$async$b5)
case 6:q=1
s=5
break
case 3:q=2
a1=p.pop()
n=A.E(a1)
l=A.x_('Backup failed for destructive migration of "'+m+'": '+A.p(n))
throw A.b(l)
s=5
break
case 2:s=1
break
case 5:i=new A.iS(a3.c).ls(a4)
l=A.z(m,'"','""')
s=7
return A.a(a0.N(B.a.m_(i.b,'"'+l+'"','"'+A.z(k,'"','""')+'"')),$async$b5)
case 7:l=t.P,h=0
case 8:s=10
return A.a(a0.aj("SELECT rowid, * FROM "+('"'+A.z(m,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[h,1e4]),$async$b5)
case 10:g=a7
f=J.J(g)
if(f.gB(g)){s=9
break}s=11
return A.a(a0.a2(new A.p2(g,a4,a5,k),l),$async$b5)
case 11:h=A.X(J.aa(f.gW(g),"rowid"))
if(f.gk(g)<1e4){s=9
break}s=8
break
case 9:a2=A
s=12
return A.a(a0.aN("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$b5)
case 12:e=a2.ii(a7)
if(e==null)e=0
a2=A
s=13
return A.a(a0.aN("SELECT COUNT(*) c FROM "+('"'+A.z(k,'"','""')+'"')),$async$b5)
case 13:d=a2.ii(a7)
if(d==null)d=0
if(e!==d)throw A.b(A.u('Rebuild of "'+m+'" count mismatch: '+e+" vs "+d+"."))
s=14
return A.a(a0.N("DROP TABLE "+('"'+A.z(m,'"','""')+'"')),$async$b5)
case 14:l=A.z(k,'"','""')
s=15
return A.a(a0.N("ALTER TABLE "+('"'+l+'"')+" RENAME TO "+('"'+A.z(m,'"','""')+'"')),$async$b5)
case 15:l=i.c,f=l.length,c=0
case 16:if(!(c<l.length)){s=18
break}s=19
return A.a(a0.N(l[c]),$async$b5)
case 19:case 17:l.length===f||(0,A.H)(l),++c
s=16
break
case 18:l=a4.w!=null
s=l?20:21
break
case 20:s=22
return A.a(a0.N("DROP TABLE IF EXISTS "+('"'+A.z(m+"_fts",'"','""')+'"')),$async$b5)
case 22:case 21:f=i.d,b=f.length,c=0
case 23:if(!(c<f.length)){s=25
break}s=26
return A.a(a0.N(f[c]),$async$b5)
case 26:case 24:f.length===b||(0,A.H)(f),++c
s=23
break
case 25:s=l?27:28
break
case 27:l=m+"_fts"
f=A.z(l,'"','""')
s=29
return A.a(a0.N("INSERT INTO "+('"'+f+'"')+"("+('"'+A.z(l,'"','""')+'"')+") VALUES('rebuild')"),$async$b5)
case 29:case 28:a2=A
s=30
return A.a(a0.aN("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$b5)
case 30:a=a2.ii(a7)
if((a==null?0:a)!==e)throw A.b(A.u('Post-rebuild verification of "'+m+'" failed.'))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$b5,r)},
Bj(a,b,c){var s=null,r=$.vn(),q=r.rY(a),p=A.et(a,r.a).grC()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.lM(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
p3:function p3(a,b){this.a=a
this.b=b},
p4:function p4(){},
p1:function p1(){},
p2:function p2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jI:function jI(){var _=this
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.f=_.e=_.d=_.c=_.b=_.a=0},
pY:function pY(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e},
x5(a){var s,r=null,q=A.ef(B.bu,A.t(a.h(0,"kind"))),p=A.t(a.h(0,"name")),o=J.x(a.h(0,"required"),!0),n=J.x(a.h(0,"encrypted"),!0)
switch(q.a){case 0:return new A.ba(p,B.a0,o,J.x(a.h(0,"uniqueWhenActive"),!0),n,r,r,!1)
case 1:return new A.ba(p,B.a1,o,!1,n,r,r,!1)
case 2:return new A.ba(p,B.a2,o,!1,n,r,r,!1)
case 3:return new A.ba(p,B.T,o,!1,!1,r,r,!1)
case 4:return new A.ba(p,B.a3,o,!1,!1,r,r,!1)
case 5:s=t.N
return new A.ba(p,B.x,o,!1,!1,A.cP(J.ea(t.j.a(a.h(0,"enumValues")),s),s),r,!1)
case 6:return new A.ba(p,B.a4,!1,!1,n,r,r,!1)
case 7:return new A.ba(p,B.a5,!1,!1,n,r,r,!1)
case 8:return new A.ba(p,B.B,!1,!1,!1,r,A.t(a.h(0,"refTo")),J.x(a.h(0,"enforceFk"),!0))}},
BN(a){var s,r=A.X(a.h(0,"toVersion")),q=J.x(a.h(0,"destructive"),!0),p=A.m([],t.mK),o=t.lH.a(a.h(0,"addedFields"))
o=J.L(o==null?B.az:o)
s=t.G
while(o.m())p.push(A.x5(s.a(o.gn())))
return new A.c8(r,q,p)},
wX(a){var s,r,q,p,o,n,m=A.t(a.h(0,"name")),l=A.X(a.h(0,"version")),k=A.m([],t.mK)
for(s=t.j,r=J.L(s.a(a.h(0,"fields"))),q=t.G;r.m();)k.push(A.x5(q.a(r.gn())))
r=A.m([],t.mr)
for(p=J.L(s.a(a.h(0,"indexes"))),o=t.N;p.m();){n=q.a(p.gn())
r.push(new A.ei(J.ea(s.a(n.h(0,"columns")),o),J.x(n.h(0,"unique"),!0),A.ef(B.bq,A.t(n.h(0,"scope")))))}p=J.x(a.h(0,"keepUnsyncedArchives"),!0)
s=t.f.b(a.h(0,"fts"))?new A.nz(J.ea(s.a(q.a(a.h(0,"fts")).h(0,"fields")),o)):null
o=A.m([],t.c0)
n=t.lH.a(a.h(0,"migrations"))
n=J.L(n==null?B.az:n)
while(n.m())o.push(A.BN(q.a(n.gn())))
return new A.bR(m,l,k,r,p,s,o)},
E0(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.bG.h(0,s)
return b},
bG:function bG(a,b){this.a=a
this.b=b},
ba:function ba(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
fM:function fM(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
nz:function nz(a){this.a=a},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
mt:function mt(){},
bR:function bR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.r=e
_.w=f
_.x=g},
dE:function dE(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mg:function mg(a,b){this.a=a
this.b=b},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
md:function md(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.a=a
this.b=b},
mf:function mf(a,b){this.a=a
this.b=b},
mc:function mc(){},
qE(a){var s=$.v.h(0,$.wz())
if(s instanceof A.c9&&s.a===a)return s
return null},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.r=_.f=_.e=null
_.x=_.w=!1
_.y=null},
pa:function pa(a){this.a=a},
ra:function ra(a,b){this.a=a
this.b=0
this.c=b},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function lZ(){},
fE:function fE(a){this.d=a},
nr:function nr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nt:function nt(a,b){this.a=a
this.b=b},
nu:function nu(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function ns(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function nv(){},
x6(a){var s,r=A.t(a.h(0,"ref_id")),q=A.t(a.h(0,"store")),p=A.t(a.h(0,"record_id")),o=A.t(a.h(0,"field")),n=A.t(a.h(0,"hash")),m=A.S(a.h(0,"remote_name")),l=A.t(a.h(0,"state")),k=A.a7(a.h(0,"next_retry_at"))
if(k==null)k=0
s=A.a7(a.h(0,"attempt_count"))
if(s==null)s=0
return new A.bb(r,q,p,o,n,m,l,k,s,A.S(a.h(0,"last_error")))},
bb:function bb(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
ot:function ot(a,b){this.a=a
this.b=b},
ou:function ou(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ov:function ov(a){this.a=a},
ow:function ow(a){this.a=a},
ox:function ox(a){this.a=a},
oy:function oy(a){this.a=a},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r_:function r_(a){this.b=a},
r0:function r0(a){this.a=a},
xE(a){var s=Date.now()
return new A.kl(a,new A.b2(s,0,!1))},
kl:function kl(a,b){this.a=a
this.c=b},
lV:function lV(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
jL:function jL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.r=d
_.x=e
_.z=_.y=$
_.Q=null
_.ax=_.at=_.as=!1
_.ay=f
_.ch=g
_.CW=h},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(){},
pr:function pr(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function ps(a){this.a=a},
hb:function hb(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
pt:function pt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.w=_.r=null
_.x=f
_.y=0},
py:function py(){},
pz:function pz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pu:function pu(a,b,c){this.a=a
this.b=b
this.c=c},
pv:function pv(){},
pw:function pw(a,b,c){this.a=a
this.b=b
this.c=c},
px:function px(){},
pA:function pA(a){this.a=a},
pB:function pB(a){this.a=a},
u4:function u4(a){this.a=a
this.b=null},
j6(a,b){return new A.cl(a)},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.a=a},
kd:function kd(a,b,c){this.a=a
this.b=b
this.c=c},
pp:function pp(a){this.a=a},
pq:function pq(a){this.a=a},
vt(a){var s,r="base_json",q="local_json",p="remote_json",o="dirty_local",n="dirty_remote",m="resolved_json",l=new A.mu(),k=new A.mv(),j=A.t(a.h(0,"store")),i=A.t(a.h(0,"record_id")),h=l.$2(a.h(0,r),r),g=l.$2(a.h(0,q),q),f=l.$2(a.h(0,p),p),e=k.$2(a.h(0,o),o)
k=k.$2(a.h(0,n),n)
s=A.X(a.h(0,"detected_at"))
return new A.bF(j,i,h,g,f,e,k,s,a.h(0,m)!=null?l.$2(a.h(0,m),m):null)},
bF:function bF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
mu:function mu(){},
mv:function mv(){},
mw:function mw(a){this.a=a},
mB:function mB(a,b,c){this.a=a
this.b=b
this.c=c},
mA:function mA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
my:function my(a,b){this.a=a
this.b=b},
mz:function mz(a){this.a=a},
mx:function mx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ki:function ki(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.w=_.r=_.f=_.e=$
_.y=e
_.at=_.as=_.Q=_.z=!1
_.ax=f
_.ay=g
_.CW=_.ch=null
_.cx=!1
_.cy=h
_.fx=_.fr=_.dy=_.dx=_.db=null
_.fy=!1
_.go=i
_.id=j
_.k1=null
_.k2=k
_.k3=l},
qy:function qy(a){this.a=a},
qr:function qr(a){this.a=a},
qw:function qw(a,b){this.a=a
this.b=b},
qv:function qv(a){this.a=a},
qx:function qx(a){this.a=a},
qs:function qs(a,b){this.a=a
this.b=b},
qt:function qt(){},
qu:function qu(){},
cQ(a){return new A.fZ(a)},
zj(a,b){var s,r,q,p,o,n,m,l,k,j=null
try{s=A.e7(a,b)
r=A.b0(a,s)
m=new A.O("")
A.a9(m,r)
l=m.a
q=l.charCodeAt(0)==0?l:l
p=A.au(B.l.u(B.f.u(q)).a)
return new A.dG(b,s,q,p,j)}catch(k){l=A.E(k)
if(l instanceof A.fZ){o=l
return new A.dG(b,j,j,j,o.a)}else{n=l
l=A.p(n)
return new A.dG(b,j,j,j,l)}}},
EY(a,b){var s,r=A.m([],t.i7)
for(s=J.L(b);s.m();)r.push(A.zj(a,s.gn()))
return r},
wu(a,b){var s=0,r=A.h(t.eT),q
var $async$wu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.EY(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wu,r)},
e7(a,b){var s,r,q,p,o,n,m,l,k,j="archived",i=t.N,h=t.X,g=A.b4(b.d,i,h),f=a.gj0(),e=g.h(0,"id")
if(e==null){s=b.a
g.j(0,"id",s)}else{s=b.a
if(!J.x(e,s))throw A.b(A.cQ('data.id "'+A.p(e)+'" does not match record id "'+s+'"'))}r=A.l(["id",s],i,h)
for(i=a.c,h=i.length,s=t.j,q=t.f,p=0;p<i.length;i.length===h||(0,A.H)(i),++p){o=i[p]
n=o.a
m=g.h(0,n)
if(m==null){if(o.c)throw A.b(A.cQ('Required field "'+n+'" is missing.'))
r.j(0,n,null)
continue}l=o.b
switch(l.a){case 0:case 5:case 8:if(typeof m!="string")throw A.b(A.cQ('Field "'+n+'" must be a string, got '+J.bE(m).l(0)+"."))
if(l===B.x){l=o.f
l.toString
l=!B.c.D(l,m)}else l=!1
if(l)throw A.b(A.cQ('Field "'+n+'" has unknown enum value "'+m+'".'))
break
case 1:case 4:if(!A.aA(m))throw A.b(A.cQ('Field "'+n+'" must be an integer, got '+J.bE(m).l(0)+"."))
break
case 2:if(typeof m!="number")throw A.b(A.cQ('Field "'+n+'" must be a number, got '+J.bE(m).l(0)+"."))
break
case 3:if(!A.bO(m))throw A.b(A.cQ('Field "'+n+'" must be a boolean, got '+J.bE(m).l(0)+"."))
break
case 6:if(!q.b(m)&&!s.b(m))throw A.b(A.cQ('Field "'+n+'" must be JSON, got '+J.bE(m).l(0)+"."))
break
case 7:if(!s.b(m))throw A.b(A.cQ('Field "'+n+'" must be a JSON array, got '+J.bE(m).l(0)+"."))
break}r.j(0,n,m)}for(i=new A.aN(g,A.o(g).i("aN<1,2>")).gv(0);i.m();){k=i.d
h=k.a
if(h==="id"||h==="archived"||f.D(0,h))continue
r.j(0,h,k.b)}r.j(0,j,J.x(g.h(0,j),!0))
return r},
fZ:function fZ(a){this.a=a},
dG:function dG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e3(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.br(i),g=A.om(a.gS(),i)
g.G(0,b.gS())
for(g=A.tO(g,g.r,A.o(g).c),s=g.$ti.c,r=t.f,q=t.X;g.m();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.E.ah(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)){m=A.e3(A.b4(o,i,q),A.b4(n,i,q))
for(l=A.o(m),k=new A.d6(m,m.r,l.i("d6<1>")),k.c=m.e,p+=".",l=l.c;k.m();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
Bi(a,b,c,d,e,f,g){return new A.p0()},
lC(a,b,c,d,e,a0){var s=0,r=A.h(t.r),q,p,o,n,m,l,k,j,i,h,g,f
var $async$lC=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:A.Bi(a,A.e3(a,b),A.e3(a,e),b,d,e,a0)
p=t.N
o=A.om(b.gS(),p)
o.G(0,new A.ai(e,A.o(e).i("ai<1>")))
o.G(0,a.gS())
n=A.I(p,t.X)
for(p=A.tO(o,o.r,A.o(o).c),o=c.b,m=p.$ti.c;p.m();){l=p.d
if(l==null)l=m.a(l)
k=b.h(0,l)
j=e.h(0,l)
i=a.h(0,l)
if(l==="archived"){h=J.x(i,!0)
g=J.x(k,!0)
f=J.x(j,!0)
if(g===f)n.j(0,l,g)
else if(g===h)n.j(0,l,f)
else if(f===h)n.j(0,l,g)
else{o.h(0,l)
n.j(0,l,f)}continue}if(B.E.ah(k,j))n.j(0,l,k)
else if(B.E.ah(k,i))n.j(0,l,j)
else if(B.E.ah(j,i))n.j(0,l,k)
else{o.h(0,l)
n.j(0,l,j)}}q=new A.em(n,!1,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lC,r)},
p0:function p0(){},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
pb:function pb(a,b){this.a=a
this.b=b},
pd:function pd(){},
pe:function pe(){},
pf:function pf(a){this.a=a},
pg:function pg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(){},
hh:function hh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pi:function pi(a,b){this.a=a
this.b=b},
pk:function pk(){},
pl:function pl(){},
po:function po(a,b){this.a=a
this.b=b},
pn:function pn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pm:function pm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jQ:function jQ(a){this.b=a},
pQ:function pQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pU:function pU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pR:function pR(a,b,c){this.a=a
this.b=b
this.c=c},
pS:function pS(a,b,c){this.a=a
this.b=b
this.c=c},
pT:function pT(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pV:function pV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
pW:function pW(a){this.a=a},
pX:function pX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bK:function bK(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eI:function eI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eH:function eH(a,b){this.a=a
this.b=b},
qo:function qo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qp:function qp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vX(a){return new A.hp(a)},
Aq(a){return new A.b1(a)},
AP(a){return new A.bn(a)},
Bp(a){return new A.bu(a)},
c7(a){return new A.he(a)},
EE(a){var s=a.vi(),r=new A.v2()
return A.p(r.$2(A.vQ(s),4))+"-"+A.p(r.$1(A.vO(s)))+"-"+A.p(r.$1(A.pH(s)))+" "+A.p(r.$1(A.vM(s)))+":"+A.p(r.$1(A.vN(s)))+":"+A.p(r.$1(A.vP(s)))+"."+A.p(r.$2(A.xr(s),3))+"Z"},
aE:function aE(){},
hp:function hp(a){this.a=a},
ey:function ey(a,b){this.b=a
this.a=b},
k0:function k0(a){this.a=a},
b1:function b1(a){this.a=a},
bn:function bn(a){this.a=a},
bu:function bu(a){this.a=a},
dI:function dI(a){this.a=a},
he:function he(a){this.a=a},
fA:function fA(a){this.a=a},
ec:function ec(a){this.a=a},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hg:function hg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
it:function it(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
v2:function v2(){},
xB(a){return 0.5+B.ap.uB()},
bJ(){return Date.now()},
vU(a){var s,r=a.toLowerCase()
$label0$0:{if("jan"===r){s=1
break $label0$0}if("feb"===r){s=2
break $label0$0}if("mar"===r){s=3
break $label0$0}if("apr"===r){s=4
break $label0$0}if("may"===r){s=5
break $label0$0}if("jun"===r){s=6
break $label0$0}if("jul"===r){s=7
break $label0$0}if("aug"===r){s=8
break $label0$0}if("sep"===r){s=9
break $label0$0}if("oct"===r){s=10
break $label0$0}if("nov"===r){s=11
break $label0$0}if("dec"===r){s=12
break $label0$0}s=null
break $label0$0}return s},
BQ(a){var s,r,q,p,o,n,m,l,k=null,j=A.ad("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dK(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.vU(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aq(r)
p=s[1]
p.toString
p=A.aq(p)
o=s[4]
o.toString
o=A.aq(o)
n=s[5]
n.toString
n=A.aq(n)
s=s[6]
s.toString
return A.vV(r,q,p,o,n,A.aq(s))}j=A.ad("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dK(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.vU(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aq(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aq(r)
p=s[4]
p.toString
p=A.aq(p)
o=s[5]
o.toString
o=A.aq(o)
s=s[6]
s.toString
return A.vV(l,q,r,p,o,A.aq(s))}j=A.ad("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0).dK(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.vU(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aq(r)
p=s[2]
p.toString
p=A.aq(p)
o=s[3]
o.toString
o=A.aq(o)
n=s[4]
n.toString
n=A.aq(n)
s=s[5]
s.toString
return A.vV(r,q,p,o,n,A.aq(s))}return k},
vV(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.vu(a,b,c,d,e,f,0)
return s}catch(r){return null}},
qq:function qq(){},
hf:function hf(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
qB:function qB(a,b){this.a=a
this.b=b},
wj(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.cV)throw q
else{s=r
r=A.qd("Corrupt "+a+" row: "+A.p(s))
throw A.b(r)}}},
qz(a){return A.wj("lp_sync_row",new A.qA(a))},
vL(a){return A.wj("lp_outbox",new A.pj(a))},
Br(a){return A.wj("lp_op_queue",new A.pc(a))},
yA(a){var s,r,q,p,o=null
if(a==null)return B.m
A.t(a)
if(a.length===0)return B.m
s=B.e.an(a,o)
if(!t.j.b(s))throw A.b(A.Y("expected a JSON array, got "+J.bE(s).l(0),o,o))
r=A.m([],t.s)
for(q=J.L(s);q.m();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.w(A.Y("dirty-field member is "+J.bE(p).l(0)+", expected String",o,o)))}return r},
cw:function cw(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c,d,e,f,g,h,i,j){var _=this
_.c=a
_.d=b
_.e=c
_.r=d
_.w=e
_.y=f
_.z=g
_.as=h
_.at=i
_.ax=j},
qA:function qA(a){this.a=a},
bH:function bH(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.z=j},
pj:function pj(a){this.a=a},
dH:function dH(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
pc:function pc(a){this.a=a},
B8(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.I(t.N,t.X)
try{s=A.uT(a)
if(t.f.b(s)){r=A.fV(s)
q=A.I(t.N,t.X)
p=t.j
if(p.b(J.aa(r,n))){p=J.av(p.a(J.aa(r,n)),new A.oq(),t.bU)
p=A.Q(p,p.$ti.i("R.E"))
J.bC(q,n,p)}if(A.aA(J.aa(r,m)))J.bC(q,m,J.aa(r,m))
if(A.bO(J.aa(r,l)))J.bC(q,l,J.aa(r,l))
return q}}catch(o){}return A.I(t.N,t.X)},
B9(a,b){var s,r,q
if(a==null)return null
try{s=A.uT(a)
if(t.f.b(s)){r=A.fV(s).h(0,b)
return r}}catch(q){}return null},
Ba(a){if(!t.f.b(a))throw A.b(A.Y("Schema must be a map: "+A.p(a),null,null))
return A.wX(A.fV(a))},
fV(a){var s=A.I(t.N,t.X)
a.a9(0,new A.op(s))
return s},
Be(a){if(a instanceof A.hr)return"ValidationException"
if(a instanceof A.cV)return"StorageError"
if(a instanceof A.ex)return"SchemaRegistrationError"
if(a instanceof A.fH)return"FtsUnavailableError"
if(a instanceof A.hd)return"ProtocolEnvelopeException"
if(a instanceof A.be)return"StateError"
if(a instanceof A.bk)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.b0.b(a))return"RangeError"
if(t.eo.b(a))return"UnsupportedError"
return A.bh(J.bE(a).a,null)},
Bb(a){var s,r,q
try{s=A.uT(a)
if(t.f.b(s)){r=s.cs(0,new A.oA(),t.N,t.X)
return r}}catch(q){}return null},
jp(a,b,c,d){return A.dg(new A.kw(2,a,null,new A.r1(b,c,d)).ao())},
Bd(a,b){var s,r=J.J(a)
if(r.gk(a)!==b.length)return!1
for(s=0;s<r.gk(a);++s)if(r.h(a,s)!==b[s])return!1
return!0},
Bc(a){var s,r=A.I(t.N,t.X)
r.j(0,"refId",a.a)
r.j(0,"store",a.b)
r.j(0,"recordId",a.c)
r.j(0,"field",a.d)
r.j(0,"hash",a.e)
s=a.f
if(s!=null)r.j(0,"remoteName",s)
r.j(0,"state",a.r)
r.j(0,"nextRetryAt",a.w)
r.j(0,"attemptCount",a.x)
s=a.y
if(s!=null)r.j(0,"lastError",s)
return r},
xl(a){var s,r=A.I(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
s=a.e
if(s!=null)r.j(0,"lastError",s)
s=a.f
if(s!=null)r.j(0,"lastSyncAt",A.bB(s))
return r},
on:function on(){},
os:function os(){},
or:function or(){},
oq:function oq(){},
op:function op(a){this.a=a},
oo:function oo(){},
ue:function ue(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a){this.b=a},
us:function us(a,b){this.a=a
this.b=b},
lr:function lr(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=0
_.x=g},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=null
_.e=1
_.f=c
_.r=d
_.w=1
_.Q=_.z=_.y=_.x=null
_.as=$},
oA:function oA(){},
oG:function oG(a,b){this.a=a
this.b=b},
oH:function oH(){},
oK:function oK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oL:function oL(a){this.a=a},
oO:function oO(a,b){this.a=a
this.b=b},
oP:function oP(a){this.a=a},
oN:function oN(a,b){this.a=a
this.b=b},
oM:function oM(a){this.a=a},
oI:function oI(a){this.a=a},
oJ:function oJ(a,b){this.a=a
this.b=b},
oF:function oF(a){this.a=a},
oE:function oE(a,b){this.a=a
this.b=b},
oD:function oD(a){this.a=a},
oB:function oB(a){this.a=a},
oC:function oC(a){this.a=a},
kL:function kL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.Q=_.z=!1
_.as=null},
bB(a){var s,r,q
if(a instanceof A.b2)return A.l(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.az){s=t.N
return A.l(["lp:bigint",a.l(0)],s,s)}if(t.p.b(a))return A.l(["lp:bytes",A.cP(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.av(a,A.z6(),s)
r=A.Q(r,r.$ti.i("R.E"))
return A.cP(r,s)}if(t.f.b(a)){q=A.I(t.N,t.X)
a.a9(0,new A.uY(q))
return q}if(a==null||A.bO(a)||A.aA(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.P("Value of type "+J.bE(a).l(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
e5(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gk(a)===1&&a.I(l)){s=a.h(0,l)
if(A.aA(s)){r=B.b.au(s,1000)
q=B.b.M(s-r,1000)
if(q<-864e13||q>864e13)A.w(A.af(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.w(A.aU(r,"microsecond",u.B))
A.bi(!0,"isUtc",t.y)
return new A.b2(q,r,!0)}throw A.b(A.P("Malformed wire DateTime: "+A.p(s),k))}if(a.gk(a)===1&&a.I(j)){s=a.h(0,j)
if(typeof s=="string")return A.w5(s,k)
throw A.b(A.P("Malformed wire BigInt: "+A.p(s),k))}if(a.gk(a)===1&&a.I(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.J(s)
q=r.gk(s)
p=new Uint8Array(q)
for(o=0;o<r.gk(s);++o){n=r.h(s,o)
if(!A.aA(n)||n<0||n>255)throw A.b(A.P("Malformed wire byte at index "+o+": "+A.p(n),k))
p[o]=n}return p}throw A.b(A.P("Malformed wire bytes: "+A.p(s),k))}m=A.I(t.N,t.X)
a.a9(0,new A.uV(m))
return m}if(t.j.b(a)){r=t.X
q=J.av(a,A.z5(),r)
q=A.Q(q,q.$ti.i("R.E"))
return A.cP(q,r)}return a},
uY:function uY(a){this.a=a},
uV:function uV(a){this.a=a},
BZ(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.aA(s))throw A.b(A.ev('Request "v" must be an int.'))
if(!A.aA(r)||r<0)throw A.b(A.ev('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.bU.D(0,q))throw A.b(A.ev("Unknown request operation: "+A.p(q)))
if(!t.f.b(p))throw A.b(A.ev('Request "a" must be a map.'))
return new A.eP(s,r,q,p.cs(0,new A.r4(),t.N,t.X))},
ev(a){return new A.hd(a)},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r4:function r4(){},
kw:function kw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
hd:function hd(a){this.a=a},
jW:function jW(a,b){this.a=a
this.b=b},
yM(a){return a},
z_(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.O("")
o=a+"("
p.a=o
n=A.al(b)
m=n.i("dL<1>")
l=new A.dL(b,0,s,m)
l.nf(b,0,s,n.c)
m=o+new A.ac(l,new A.uM(),m.i("ac<R.E,k>")).K(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.P(p.l(0),null))}},
mD:function mD(a){this.a=a},
mE:function mE(){},
mF:function mF(){},
uM:function uM(){},
oe:function oe(){},
et(a,b){var s,r,q,p,o,n=b.mH(a),m=b.cq(a)
if(n!=null)a=B.a.a7(a,n.length)
s=t.s
r=A.m([],s)
q=A.m([],s)
s=a.length
if(s!==0&&b.bT(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.bT(a.charCodeAt(o))){r.push(B.a.q(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.a7(a,p))
q.push("")}return new A.jG(b,n,m,r,q)},
jG:function jG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xo(a){return new A.jH(a)},
jH:function jH(a){this.a=a},
BP(){var s,r,q,p,o,n,m,l,k=null
if(A.vY().gaE()!=="file")return $.il()
if(!B.a.cm(A.vY().gb4(),"/"))return $.il()
s=A.yn(k,0,0)
r=A.yl(k,0,0,!1)
q=A.uj(k,0,0,k)
p=A.yk(k,0,0)
o=A.ui(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.ym("a/b",0,3,k,"",m)
if(n&&!B.a.L(l,"/"))l=A.we(l,m)
else l=A.e0(l)
if(A.i6("",s,n&&B.a.L(l,"//")?"":r,o,l,q,p).jw()==="a\\b")return $.lH()
return $.zE()},
qn:function qn(){},
pF:function pF(a,b,c){this.d=a
this.e=b
this.f=c},
qM:function qM(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
r5:function r5(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
vx(a,b){if(b<0)A.w(A.aD("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.w(A.aD("Offset "+b+u.D+a.gk(0)+"."))
return new A.j3(a,b)},
q6:function q6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
j3:function j3(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
AU(a,b){var s=A.AV(A.m([A.Cn(a,!0)],t.g7)),r=new A.o5(b).$0(),q=B.b.l(B.c.gW(s).b+1),p=A.AW(s)?0:3,o=A.al(s)
return new A.nM(s,r,null,1+Math.max(q.length,p),new A.ac(s,new A.nO(),o.i("ac<1,i>")).v4(0,B.aP),!A.ER(new A.ac(s,new A.nP(),o.i("ac<1,j?>"))),new A.O(""))},
AW(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
AV(a){var s,r,q=A.EJ(a,new A.nR(),t.nf,t.K)
for(s=new A.bT(q,q.r,q.e);s.m();)J.wL(s.d,new A.nS())
s=A.o(q).i("aN<1,2>")
r=s.i("fD<n.E,c1>")
s=A.Q(new A.fD(new A.aN(q,s),new A.nT(),r),r.i("n.E"))
return s},
Cn(a,b){var s=new A.tv(a).$0()
return new A.b_(s,!0,null)},
Cp(a){var s,r,q,p,o,n,m=a.gar()
if(!B.a.D(m,"\r\n"))return a
s=a.gE().gae()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gH()
p=a.gU()
o=a.gE().ga5()
p=A.k5(s,a.gE().gad(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gaT()
return A.q7(r,p,o,A.z(n,"\r\n","\n"))},
Cq(a){var s,r,q,p,o,n,m
if(!B.a.cm(a.gaT(),"\n"))return a
if(B.a.cm(a.gar(),"\n\n"))return a
s=B.a.q(a.gaT(),0,a.gaT().length-1)
r=a.gar()
q=a.gH()
p=a.gE()
if(B.a.cm(a.gar(),"\n")){o=A.v1(a.gaT(),a.gar(),a.gH().gad())
o.toString
o=o+a.gH().gad()+a.gk(a)===a.gaT().length}else o=!1
if(o){r=B.a.q(a.gar(),0,a.gar().length-1)
if(r.length===0)p=q
else{o=a.gE().gae()
n=a.gU()
m=a.gE().ga5()
p=A.k5(o-1,A.y3(s),m-1,n)
q=a.gH().gae()===a.gE().gae()?p:a.gH()}}return A.q7(q,p,r,s)},
Co(a){var s,r,q,p,o
if(a.gE().gad()!==0)return a
if(a.gE().ga5()===a.gH().ga5())return a
s=B.a.q(a.gar(),0,a.gar().length-1)
r=a.gH()
q=a.gE().gae()
p=a.gU()
o=a.gE().ga5()
p=A.k5(q-1,s.length-B.a.dP(s,"\n")-1,o-1,p)
return A.q7(r,p,s,B.a.cm(a.gaT(),"\n")?B.a.q(a.gaT(),0,a.gaT().length-1):a.gaT())},
y3(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.hs(a,"\n",s-2)-1
else return s-B.a.dP(a,"\n")-1},
nM:function nM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
o5:function o5(a){this.a=a},
nO:function nO(){},
nN:function nN(){},
nP:function nP(){},
nR:function nR(){},
nS:function nS(){},
nT:function nT(){},
nQ:function nQ(a){this.a=a},
o6:function o6(){},
nU:function nU(a){this.a=a},
o0:function o0(a,b,c){this.a=a
this.b=b
this.c=c},
o1:function o1(a,b){this.a=a
this.b=b},
o2:function o2(a){this.a=a},
o3:function o3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nZ:function nZ(a,b){this.a=a
this.b=b},
o_:function o_(a,b){this.a=a
this.b=b},
nV:function nV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nW:function nW(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function nX(a,b,c){this.a=a
this.b=b
this.c=c},
nY:function nY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o4:function o4(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.c=c},
tv:function tv(a){this.a=a},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k5(a,b,c,d){if(a<0)A.w(A.aD("Offset may not be negative, was "+a+"."))
else if(c<0)A.w(A.aD("Line may not be negative, was "+c+"."))
else if(b<0)A.w(A.aD("Column may not be negative, was "+b+"."))
return new A.bW(d,a,c,b)},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(){},
k8:function k8(){},
BI(a,b,c){return new A.eB(c,a,b)},
k9:function k9(){},
eB:function eB(a,b,c){this.c=a
this.a=b
this.b=c},
eC:function eC(){},
q7(a,b,c,d){var s=new A.cv(d,a,b,c)
s.ne(a,b,c)
if(!B.a.D(d,c))A.w(A.P('The context line "'+d+'" must contain "'+c+'".',null))
if(A.v1(d,c,a.gad())==null)A.w(A.P('The span text "'+c+'" must start at column '+(a.gad()+1)+' in a line within "'+d+'".',null))
return s},
cv:function cv(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
BM(a){var s
$label0$0:{if(18===a){s=B.bV
break $label0$0}if(23===a){s=B.bW
break $label0$0}if(9===a){s=B.bX
break $label0$0}s=null
break $label0$0}return s},
hk:function hk(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
BL(a,b,c,d,e,f,g){return new A.cU(d,b,c,e,f,a,g)},
cU:function cU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qb:function qb(){},
mZ:function mZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
n7:function n7(a){this.a=a},
n6:function n6(a){this.a=a},
n8:function n8(a){this.a=a},
n4:function n4(a){this.a=a},
n3:function n3(a){this.a=a},
n5:function n5(a){this.a=a},
n0:function n0(a){this.a=a},
n_:function n_(a){this.a=a},
n1:function n1(a){this.a=a},
n2:function n2(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
u7:function u7(a,b){this.a=a
this.b=b},
u8:function u8(a,b,c){this.a=a
this.b=b
this.c=c},
u9:function u9(a,b,c){this.a=a
this.b=b
this.c=c},
q8:function q8(){},
eD:function eD(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
vz(a,b){var s=$.lF()
return new A.j7(A.I(t.N,t.a_),s,a)},
j7:function j7(a,b,c){this.d=a
this.b=b
this.a=c},
kW:function kW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
F0(a){var s=J.Am(new v.G.URL(a,"file:///").pathname,"/")
return new A.c0(s,new A.vd(),A.al(s).i("c0<1>"))},
vd:function vd(){},
mH:function mH(){},
jY:function jY(a,b,c){this.d=a
this.a=b
this.c=c},
bI:function bI(a,b){this.a=a
this.b=b},
tT:function tT(a){this.a=a
this.b=-1},
l8:function l8(){},
l9:function l9(){},
lb:function lb(){},
lc:function lc(){},
ph:function ph(a,b){this.a=a
this.b=b},
BB(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
$label0$0:{if(100===r){s=!0
break $label0$0}if(101===r||0===r)break $label0$0
s=a.bj(r,"step")}return s},
dq:function dq(){},
dx:function dx(a){this.a=a},
iM:function iM(a){this.a=a},
eM(a){return new A.cB(a)},
wP(a,b){var s,r,q,p
if(b==null)b=$.lF()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.ct(256)
r&2&&A.D(a)
a[q]=p}},
cB:function cB(a){this.a=a},
hj:function hj(a){this.a=a},
aH:function aH(){},
iB:function iB(){},
iA:function iA(){},
F2(a,b){var s=null,r=new A.dA(t.kk)
return A.zp(a,new A.i9(s,s,s,s,s,s,s,s,new A.vh(new A.vg(r,A.uD(new A.vi(r)))),s,s,s,s),s,b)},
dR:function dR(a){var _=this
_.d=a
_.c=_.b=_.a=null},
vi:function vi(a){this.a=a},
vg:function vg(a,b){this.a=a
this.b=b},
vh:function vh(a){this.a=a},
qX:function qX(a){this.a=a},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
qZ:function qZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qY:function qY(a,b,c){this.b=a
this.c=b
this.d=c},
dN:function dN(){},
d0:function d0(){},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
bz(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.E(r)
if(q instanceof A.cB){s=q
return s.a}else return 1}},
iN:function iN(a){this.b=this.a=$
this.d=a},
mM:function mM(a,b,c){this.a=a
this.b=b
this.c=c},
mJ:function mJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mO:function mO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mQ:function mQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mS:function mS(a,b){this.a=a
this.b=b},
mL:function mL(a){this.a=a},
mR:function mR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mW:function mW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mU:function mU(a,b){this.a=a
this.b=b},
mT:function mT(a,b){this.a=a
this.b=b},
mN:function mN(a,b,c){this.a=a
this.b=b
this.c=c},
mP:function mP(a,b){this.a=a
this.b=b},
mV:function mV(a,b){this.a=a
this.b=b},
mK:function mK(a,b,c){this.a=a
this.b=b
this.c=c},
fs:function fs(a,b){this.a=a
this.$ti=b},
lO:function lO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lQ:function lQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lP:function lP(a,b,c){this.a=a
this.b=b
this.c=c},
c4(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.a8(s,b.i("a8<0>")),q=t.m
A.aZ(a,"success",new A.ml(r,a,b),!1,q)
A.aZ(a,"error",new A.mm(r,a),!1,q)
return s},
AD(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.a8(s,b.i("a8<0>")),q=t.m
A.aZ(a,"success",new A.mq(r,a,b),!1,q)
A.aZ(a,"error",new A.mr(r,a),!1,q)
A.aZ(a,"blocked",new A.ms(r),!1,q)
return s},
dV:function dV(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
rZ:function rZ(a,b){this.a=a
this.b=b},
t_:function t_(a,b){this.a=a
this.b=b},
ml:function ml(a,b,c){this.a=a
this.b=b
this.c=c},
mm:function mm(a,b){this.a=a
this.b=b},
mq:function mq(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function mr(a,b){this.a=a
this.b=b},
ms:function ms(a){this.a=a},
lE(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
x9(a,b,c){var s=a.read(b,c)
return s},
xa(a,b,c){var s=a.write(b,c)
return s},
x8(a,b){return A.a2(a.removeEntry(b,{recursive:!1}),t.X)},
x7(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.w(A.P("Target object does not implement the async iterable interface",null))
return new A.dZ(new A.nw(),new A.fs(a,s),s.i("dZ<a_.T,F>"))},
nw:function nw(){},
qT:function qT(a){this.a=a},
qU:function qU(a){this.a=a},
qW(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$qW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a2(p.fetch(new p.URL(a,A.aT(p.location).href),null),t.m),$async$qW)
case 3:q=o.qV(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qW,r)},
qV(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$qV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.iN(A.I(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.qT(p).hu(a),$async$qV)
case 3:q=new o.eN(new n.qX(m.BY(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$qV,r)},
eN:function eN(a){this.a=a},
Cr(a){var s=new A.hJ(a,new A.a8(new A.r($.v,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.nj(a)
return s},
j9(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$j9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.lR(a)
n=A.vz("dart-memory",null)
m=$.lF()
l=new A.cL(o,n,new A.dA(t.p3),A.br(p),A.I(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.hz(),$async$j9)
case 3:s=4
return A.a(l.ec(),$async$j9)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j9,r)},
lR:function lR(a){this.a=null
this.b=a},
lU:function lU(a){this.a=a},
lT:function lT(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a){this.a=a},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
ty:function ty(a){this.a=a},
tz:function tz(a){this.a=a},
tx:function tx(a){this.a=a},
tA:function tA(a,b,c){this.a=a
this.b=b
this.c=c},
tC:function tC(a,b){this.a=a
this.b=b},
tB:function tB(a,b){this.a=a
this.b=b},
ta:function ta(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a,b){this.a=a
this.b=b},
l3:function l3(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
o8:function o8(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function o9(){},
o7:function o7(a,b){this.a=a
this.b=b},
kX:function kX(a,b,c){this.a=a
this.b=b
this.c=c},
tw:function tw(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
hH:function hH(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
hB:function hB(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
eV:function eV(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
fd:function fd(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
xy(a){var s=A.vz("dart-memory",null),r=$.lF()
return new A.eA(s,r,a)},
k1(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$k1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.lE()
if(j==null)throw A.b(A.eM(1))
p=t.m
s=3
return A.a(A.a2(j.getDirectory(),p),$async$k1)
case 3:o=d
n=A.F0(a),m=J.L(n.a),n=new A.eQ(m,n.b),l=null
case 4:if(!n.m()){s=6
break}s=7
return A.a(A.a2(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$k1)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.aF(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k1,r)},
k2(a){var s=0,r=A.h(t.m),q
var $async$k2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.k1(a,!0),$async$k2)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k2,r)},
q4(a,b){var s=0,r=A.h(t.g_),q,p
var $async$q4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.lE()==null)throw A.b(A.eM(1))
p=A
s=3
return A.a(A.k2(a),$async$q4)
case 3:q=p.q3(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$q4,r)},
q3(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$q3=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.xy(c)
s=3
return A.a(p.cu(a,!1),$async$q3)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$q3,r)},
eg:function eg(a,b,c){this.c=a
this.a=b
this.b=c},
eA:function eA(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
q5:function q5(a,b){this.a=a
this.b=b},
lh:function lh(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
tQ:function tQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
BY(a,b){var s=A.aT(a.exports.memory)
b.b!==$&&A.zt()
b.b=s
s=new A.qN(s,b,a.exports)
s.ng(a,b)
return s},
ky(a,b){var s,r=A.bt(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dP(a,b){var s=a.buffer,r=A.ky(a,b)
return B.k.j1(A.bt(s,b,r))},
vZ(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.j1(A.bt(s,b,c==null?A.ky(a,b):c))},
qN:function qN(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
qO:function qO(a){this.a=a},
qP:function qP(a){this.a=a},
qQ:function qQ(a){this.a=a},
qR:function qR(a){this.a=a},
uS(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$uS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.im()
s=l!=null?3:5
break
case 3:p=A.DJ()
s=6
return A.a(A.ht(l,p,null,null,!1),$async$uS)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.aF({port:m.port1,lockName:p},new A.fx(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$uS,r)},
DJ(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.b7(97+$.A4().ct(26))
return r.charCodeAt(0)==0?r:r},
Au(a){return new A.fv(a)},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
pK:function pK(){},
pO:function pO(a){this.a=a},
pP:function pP(a){this.a=a},
pN:function pN(a){this.a=a},
pM:function pM(a){this.a=a},
pL:function pL(a){this.a=a},
fv:function fv(a){this.a=a},
mX:function mX(){},
iL:function iL(a){this.a=a},
mI:function mI(a){this.a=a},
dO:function dO(){},
j2(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$j2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.k2(a),$async$j2)
case 3:p=e
o=A.xy(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cu(p,!0),$async$j2)
case 6:case 5:q=new A.j1(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j2,r)},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
nI:function nI(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
ht(a,b,c,d,e){var s,r,q={},p=new A.r($.v,t.nI),o=new A.a8(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.vy(A.a2(a.request(b,s,A.cf(new A.r2(q,o))),r),new A.r3(q,d,o),r,t.K)
return p},
r2:function r2(a,b){this.a=a
this.b=b},
r3:function r3(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a){this.a=a},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
na:function na(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n9:function n9(a,b){this.a=a
this.b=b},
nb:function nb(a){this.a=a},
h2:function h2(a){this.a=!1
this.b=a},
p9:function p9(a,b){this.a=a
this.b=b},
p8:function p8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
p7:function p7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
AA(a){var s,r,q,p,o=A.m([],t.kC),n=t.c.a(a.a),m=t.bF.b(n)?n:new A.bl(n,A.al(n).i("bl<1,k>"))
for(s=J.J(m),r=0;r<s.gk(m)/2;++r){q=r*2
o.push(new A.aF(A.ef(B.bE,s.h(m,q)),s.h(m,q+1)))}s=A.ff(a.b)
q=A.ff(a.c)
p=A.ff(a.d)
return new A.dr(o,s,q,A.ff(a.g),p)},
dr:function dr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
BD(a){var s
if(J.x(a.t,"errorResponse")){s=A.AJ(a)
if(s!=null&&s instanceof A.cG)return s
else return new A.ew(a.e)}else return new A.ew("Did not respond with expected type, got "+A.p(a))},
AJ(a){var s=a.s,r=s==null?null:A.X(s)
$label0$0:{if(0===r){s=A.AK(t.c.a(a.r))
break $label0$0}if(1===r){s=B.Z
break $label0$0}s=null
break $label0$0}return s},
AK(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.u("Pattern matching error"))
n=new A.nq()
l=A.X(A.e1(l))
A.t(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ds(i,h,A.bt(h,0,o))}else p=o
n=n.$1(k)
A.yw(g)
return new A.cU(s,r,l,g==null?o:A.X(g),n,q,p)},
AL(a){var s,r,q,p,o,n,m=null,l=a.r
$label0$0:{if(l==null){s=m
break $label0$0}s=A.BT(l)
break $label0$0}r=a.b
if(r==null)r=m
q=a.e
if(q==null)q=m
p=a.f
if(p==null)p=m
o=s==null
n=o?m:s.a
s=o?m:s.b
o=a.d
if(o==null)o=m
return[a.a,r,a.c,q,p,n,s,o]},
BE(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.nI(a2,512,"transfer" in a2)
a5.lo(a4)
for(s=a4.a,r=s.c,s=s.b,q=r.d,r=r.b,p=0,o=!0;A.BB(a4);){if(o){p=q.sqlite3_column_count(s)
o=!1}n=a3.d
m=a3.d=n+p
if(m>a3.b)a3.o9(m)
m=new a0.DataView(a3.a,n,p)
l=new a0.Array(p)
for(k=0;k<p;++k){switch(q.sqlite3_column_type(s,k)){case 1:j=q.sqlite3_column_int64(s,k)
i=a0.Number(j)
if(a0.Number.isSafeInteger(i)){j=i
h=B.aa}else h=B.ab
break
case 2:j=q.sqlite3_column_double(s,k)
h=B.ac
break
case 3:g=q.sqlite3_column_text(s,k)
f=r.buffer
e=A.ky(r,g)
g=new Uint8Array(f,g,e)
d=new A.cd(!1).c7(g,0,a,!0)
j=d
h=B.ad
break
case 4:g=q.sqlite3_column_bytes(s,k)
f=q.sqlite3_column_blob(s,k)
c=new Uint8Array(g)
e=r.buffer
g=new Uint8Array(e,f,g)
B.d.cE(c,0,g)
j=c
h=B.ae
break
case 5:default:j=a
h=B.af}l[k]=j
m.setUint8(k,h.a)}a1.push(l)}b=new a0.Array(p)
for(k=0;k<p;++k){a0=q.sqlite3_column_name(s,k)
m=r.buffer
g=A.ky(r,a0)
a0=new Uint8Array(m,a0,g)
b[k]=new A.cd(!1).c7(a0,0,a,!0)}return A.zi(!1,b,0,0,a1,a,a3.vg(0))},
ES(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
nq:function nq(){},
zi(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
fl(a){var s,r,q,p,o=v.G,n=new o.Array()
switch(a.t){case"connect":n.push(a.r.port)
break
case"fileSystemAccess":s=a.b
if(s!=null)n.push(s)
break
case"runQuery":n.push(a.v)
break
case"simpleSuccessResponse":r=a.r
if(r!=null){o=o.ArrayBuffer
o=r instanceof o
q=r}else{q=null
o=!1}if(o)n.push(q)
break
case"endpointResponse":n.push(a.r.port)
break
case"rowsResponse":p=a.v
if(p!=null)n.push(p)
break}return n},
Ey(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
js:function js(a,b){this.a=a
this.b=b},
q1:function q1(){},
AO(a){var s,r
for(s=0;s<5;++s){r=B.bt[s]
if(r.c===a)return r}throw A.b(A.P("Unknown FS implementation: "+a,null))},
BS(a){var s,r,q,p,o,n,m,l,k,j=null
$label0$0:{if(a==null){s=j
r=B.af
break $label0$0}q=A.aA(a)
p=q?a:j
if(q){s=p
r=B.aa
break $label0$0}q=a instanceof A.az
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.ab
break $label0$0}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.ac
break $label0$0}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.ad
break $label0$0}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.ae
break $label0$0}q=A.bO(a)
k=q?a:j
if(q){s=k
r=B.aL
break $label0$0}throw A.b(A.P("Unsupported value: "+A.p(a),j))}return new A.aF(r,s)},
BT(a){var s,r,q,p,o,n
if(a instanceof A.ds)return new A.aF(a.a,a.b)
s=[]
r=J.J(a)
q=r.gk(a)
p=new Uint8Array(q)
for(o=0;o<r.gk(a);++o){n=A.BS(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.aF(s,t.a.a(B.d.gaA(p)))},
cJ:function cJ(a,b,c){this.c=a
this.a=b
this.b=c},
bZ:function bZ(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
ly(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$ly=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.aT(i.indexedDB)
i=$.im()
i=i==null?null:A.ht(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bg(i,t.b3),$async$ly)
case 3:l=b
p=5
s=8
return A.a(A.AC(m.open("drift_mock_db"),t.m),$async$ly)
case 8:k=b
k.close()
m.deleteDatabase("drift_mock_db")
n.push(7)
s=6
break
case 5:p=4
h=o.pop()
q=!1
n=[1]
s=6
break
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
i=l
if(i!=null)i.a.am()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ly,r)},
uQ(a){return A.En(a)},
En(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$uQ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.aT(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cf(new A.uR(j,m))
s=7
return A.a(A.AB(m,t.m),$async$uQ)
case 7:l=c
if(j.a==null)j.a=!0
l.close()
p=2
s=6
break
case 4:p=3
i=o.pop()
s=6
break
case 3:s=2
break
case 6:j=j.a
q=j===!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$uQ,r)},
fn(){var s=0,r=A.h(t.bF),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$fn=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.lE()
if(h==null){q=B.m
s=1
break}j=t.m
s=3
return A.a(A.a2(h.getDirectory(),j),$async$fn)
case 3:m=b
p=5
s=8
return A.a(A.a2(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$fn)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.m
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.m([],t.s)
j=new A.c2(A.bi(A.x7(m),"stream",t.K))
p=9
case 12:s=14
return A.a(j.m(),$async$fn)
case 14:if(!b){s=13
break}k=j.gn()
if(J.x(k.kind,"directory"))J.dj(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.A(),$async$fn)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fn,r)},
AB(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.a8(s,b.i("a8<0>")),q=t.m
A.aZ(a,"success",new A.mj(r,a,b),!1,q)
A.aZ(a,"error",new A.mk(r,a),!1,q)
return s},
AC(a,b){var s=new A.r($.v,b.i("r<0>")),r=new A.a8(s,b.i("a8<0>")),q=t.m
A.aZ(a,"success",new A.mn(r,a,b),!1,q)
A.aZ(a,"error",new A.mo(r,a),!1,q)
A.aZ(a,"blocked",new A.mp(r,a),!1,q)
return s},
uR:function uR(a,b){this.a=a
this.b=b},
mj:function mj(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function mk(a,b){this.a=a
this.b=b},
mn:function mn(a,b,c){this.a=a
this.b=b
this.c=c},
mo:function mo(a,b){this.a=a
this.b=b},
mp:function mp(a,b){this.a=a
this.b=b},
pG:function pG(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
ew:function ew(a){this.a=a},
cG:function cG(a){this.a=a},
Dh(a){var s=a.glG()
return new A.dZ(new A.uC(),s,A.o(s).i("dZ<a_.T,F>"))},
y_(a,b){var s=A.m([],t.W),r=b==null?a.b:b
return new A.eU(a,r,new A.hX(),new A.hX(),new A.hX(),s)},
Ci(a,b,c){var s=t.S
s=new A.eT(c,A.m([],t.fV),a.a,new A.aI(new A.r($.v,t.D),t.Q),A.I(s,t.br),A.I(s,t.m))
s.nc(a)
s.ni(a,b,c)
return s},
yC(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
dc(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dc=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.lE()
if(b==null){q=B.a8
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.im()
d=d==null?null:A.ht(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bg(d,t.b3),$async$dc)
case 7:j=a1
d=t.m
s=8
return A.a(A.a2(b.getDirectory(),d),$async$dc)
case 8:m=a1
s=9
return A.a(A.a2(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$dc)
case 9:l=a1
s=10
return A.a(A.ih(l),$async$dc)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.vD(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a2(A.aT(e),t.X),$async$dc)
case 13:q=B.a8
n=[1]
s=5
break
case 12:g=i
q=new A.hS(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.a8
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.am()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.x8(m,"_drift_feature_detection"),$async$dc)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dc,r)},
ih(a){return A.DY(a)},
DY(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$ih=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a2(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$ih)
case 7:j=c
s=8
return A.a(A.a2(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$ih)
case 8:n=c
n.close()
l=j
q=new A.aF(!0,l)
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
l=j
if(l!=null)l.close()
s=9
return A.a(A.a2(a.createSyncAccessHandle(),t.m),$async$ih)
case 9:m=c
q=new A.aF(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ih,r)},
uC:function uC(){},
hX:function hX(){this.a=null},
eU:function eU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
rT:function rT(a){this.a=a},
rX:function rX(a,b){this.a=a
this.b=b},
rU:function rU(a,b){this.a=a
this.b=b},
rV:function rV(a){this.a=a},
rW:function rW(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
rI:function rI(a){this.a=a},
rN:function rN(a,b){this.a=a
this.b=b},
rQ:function rQ(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(a,b){this.a=a
this.b=b},
rJ:function rJ(a,b){this.a=a
this.b=b},
rP:function rP(a,b){this.a=a
this.b=b},
rO:function rO(a,b){this.a=a
this.b=b},
rS:function rS(a,b){this.a=a
this.b=b},
rR:function rR(a,b){this.a=a
this.b=b},
rL:function rL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rM:function rM(a,b){this.a=a
this.b=b},
rH:function rH(a){this.a=a},
iP:function iP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
ne:function ne(a){this.a=a},
nd:function nd(a){this.a=a},
nc:function nc(a,b){this.a=a
this.b=b},
r6:function r6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.e=d
_.f=0
_.w=_.r=null
_.x=e
_.y=f
_.Q=$},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(a,b){this.a=a
this.b=b},
r9:function r9(a){this.a=a},
C_(){var s=v.G
if(A.AZ(s,"DedicatedWorkerGlobalScope"))return new A.kO(s,new A.kP(s.location.href))
else return new A.lf(s,new A.kP(s.location.href))},
i8:function i8(){},
kO:function kO(a,b){this.a=a
this.b=b},
lf:function lf(a,b){this.a=a
this.b=b},
u2:function u2(a){this.a=a},
u3:function u3(a,b,c){this.a=a
this.b=b
this.c=c},
u1:function u1(a){this.a=a},
u_:function u_(a){this.a=a},
u0:function u0(a){this.a=a},
kP:function kP(a){this.a=a},
t5:function t5(a){this.a=a},
kg:function kg(a,b,c){this.c=a
this.a=b
this.b=c},
qm:function qm(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
eJ:function eJ(){},
kY:function kY(){},
c_:function c_(a,b){this.a=a
this.b=b},
aZ(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.z0(new A.t8(c),t.m)
s=s==null?null:A.cf(s)}s=new A.hF(a,b,s,!1,e.i("hF<0>"))
s.iP()
return s},
z0(a,b){var s=$.v
if(s===B.h)return a
return s.h5(a,b)},
vw:function vw(a,b){this.a=a
this.$ti=b},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hF:function hF(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
t8:function t8(a){this.a=a},
t9:function t9(a){this.a=a},
wv(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
B1(a,b){return b in a},
vD(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
EJ(a,b,c,d){var s,r,q,p,o,n=A.I(d,c.i("q<0>"))
for(s=c.i("A<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.m([],s)
n.j(0,p,o)
p=o}else p=o
J.dj(p,q)}return n},
Fa(a){return a},
zu(a){if(a instanceof A.cH)return a
return new A.cH(a)},
Fb(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.E(p)
if(q instanceof A.eB){s=q
throw A.b(A.BI("Invalid "+a+": "+s.a,s.b,s.gf5()))}else if(t.Y.b(q)){r=q
throw A.b(A.Y("Invalid "+a+' "'+b+'": '+r.gjl(),r.gf5(),r.gae()))}else throw p}},
de(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gj0(),h=t.N,g=t.X,f=A.l(["id",e],h,g)
for(s=a.c,r=s.length,q=c==null,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(q)n=null
else n=c
m=o.a
f.j(0,m,A.Dg(o,a0.h(0,m),n))}l=A.I(h,g)
for(h=new A.aN(a0,A.o(a0).i("aN<1,2>")).gv(0);h.m();){k=h.d
g=k.a
if(g==="id"||g==="archived"||i.D(0,g))continue
l.j(0,g,k.b)}if(l.a===0)h=""
else{j=new A.O("")
A.a9(j,l)
h=j.a
h=h.charCodeAt(0)==0?h:h}f.j(0,"extra",h)
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
e4(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f="archived",e=t.N,d=t.X,c=A.l(["id",b.h(0,"id")],e,d)
for(s=a.c,r=s.length,q=a0==null,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
if(m==null){c.j(0,n,g)
continue}if(o.e){if(q)l=g
else l=a0
if(l==null)throw A.b(A.u('Field "'+n+u.C))
k=l.rT(B.aQ.u(A.t(m)))
j=new A.cd(!1).c7(k,0,g,!0)
switch(o.b.a){case 3:c.j(0,n,j==="1"||j==="true")
break
case 1:case 4:c.j(0,n,A.aq(j))
break
case 2:c.j(0,n,A.EZ(j))
break
case 6:case 7:c.j(0,n,B.e.an(j,g))
break
default:c.j(0,n,j)}continue}switch(o.b.a){case 3:c.j(0,n,J.x(m,1))
break
case 6:case 7:c.j(0,n,B.e.an(A.t(m),g))
break
default:c.j(0,n,m)}}c.j(0,f,J.x(b.h(0,f),1))
i=b.h(0,"extra")
if(typeof i=="string"&&i.length!==0){h=B.e.an(i,g)
if(t.f.b(h))c.G(0,A.b4(h,e,d))}return c},
za(a,b,c,d){var s,r=A.m([],t.d)
for(s=J.L(b);s.m();)r.push(A.e4(a,s.gn(),c,d))
return r},
Dg(a,b,c){var s,r,q,p
if(b==null)return null
if(a.e){if(c==null)throw A.b(A.u('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.an(b)
break
case 6:case 7:r=new A.O("")
A.a9(r,b)
q=r.a
s=q.charCodeAt(0)==0?q:q
break
default:A.t(b)
s=b}p=c.tw(B.f.u(s))
return B.ak.gj6().u(p)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:r=new A.O("")
A.a9(r,b)
q=r.a
return q.charCodeAt(0)==0?q:q
default:return b}},
b0(a,b){var s,r,q,p,o,n,m="archived",l=a.gj0(),k=A.l(["id",b.h(0,"id")],t.N,t.X)
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(n!=null)k.j(0,o,p.b===B.T?J.x(n,!0):n)}for(s=b.gbP(),s=s.gv(s);s.m();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||l.D(0,o))continue
k.j(0,o,r.b)}if(J.x(b.h(0,m),!0))k.j(0,m,!0)
return k},
lA(){var s,r=$.A5(),q=J.vA(15,t.N)
for(s=0;s<15;++s)q[s]="abcdefghijklmnopqrstuvwxyz0123456789"[r.ct(36)]
return B.c.d_(q)},
ii(a){var s,r=J.J(a)
if(r.gB(a))return null
s=J.bD(r.gC(a).gb7())
if(A.aA(s))return s
if(typeof s=="string")return A.eu(s,null)
return null},
F7(a,b,c){var s,r,q=A.z(a,"\\","\\\\")
q=A.z(q,"'","\\'")
s=A.z(b+"%","\\","\\\\")
r="(store="+("'"+q+"'")+" && id~"+("'"+A.z(s,"'","\\'")+"'")
if(c==null)return r+")"
q=A.z(c,"\\","\\\\")
return r+" && id>"+("'"+A.z(q,"'","\\'")+"'")+")"},
F_(a){var s,r,q,p,o,n,m,l,k=null
if(a==null)return k
if(!t.f.b(a))throw A.b(A.Y("fieldCipher envelope must be a map.",k,k))
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.Y("Unsupported fieldCipher type: "+A.p(s),k,k))
r=a.h(0,"key")
if(!t.j.b(r)||J.ar(r)!==32)throw A.b(A.Y("AES-256-GCM fieldCipher key must be 32 bytes.",k,k))
q=new Uint8Array(32)
for(p=J.J(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.aA(n)||n<0||n>255)throw A.b(A.Y("Malformed AES-256-GCM key byte at index "+o+": "+A.p(n),k,k))
q[o]=n}A.wN(q)
p=$.vl()
m=A.wN(q)
l=new A.re(new Uint32Array(60))
l.pX(m)
return new A.lN(l,p)},
zc(a){var s,r=A.I(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.bB(a.c))
r.j(0,"local",A.bB(a.d))
r.j(0,"remote",A.bB(a.e))
s=a.f
s=A.Q(s,A.o(s).c)
B.c.b8(s)
r.j(0,"dirty_local",s)
s=a.r
s=A.Q(s,A.o(s).c)
B.c.b8(s)
r.j(0,"dirty_remote",s)
r.j(0,"detected_at",a.w)
s=a.x
if(s!=null)r.j(0,"resolved",A.bB(s))
return r},
EV(){var s=A.C_(),r=t.cj
new A.r6(s,B.b0,A.m([],t.az),A.I(t.S,t.lp),new A.h2(A.vH(r)),new A.h2(A.vH(r))).dM()},
z9(){var s,r,q,p,o=null
try{o=A.vY()}catch(s){if(t.mA.b(A.E(s))){r=$.uB
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.yz)){r=$.uB
r.toString
return r}$.yz=o
if($.wy()===$.il())r=$.uB=o.bh(".").l(0)
else{q=o.jw()
p=q.length-1
r=$.uB=p===0?q:B.a.q(q,0,p)}return r},
zf(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
zb(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.zf(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.q(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
ER(a){var s,r,q,p
if(a.gk(0)===0)return!0
s=a.gC(0)
for(r=A.bY(a,1,null,a.$ti.i("R.E")),q=r.$ti,r=new A.a5(r,r.gk(0),q.i("a5<R.E>")),q=q.i("R.E");r.m();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
F1(a,b){var s=B.c.bR(a,null)
if(s<0)throw A.b(A.P(A.p(a)+" contains no null elements.",null))
a[s]=b},
zo(a,b){var s=B.c.bR(a,b)
if(s<0)throw A.b(A.P(A.p(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Eu(a,b){var s,r,q,p
for(s=new A.bQ(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<B.E>")),r=r.i("B.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
v1(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.bS(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bR(a,b)
while(r!==-1){q=r===0?0:B.a.hs(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.bS(a,b,r+1)}return null},
wo(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
$label0$0:{if(n<0){n=null
break $label0$0}break $label0$0}s=a.a
return new A.cU(A.dP(r.b,p.sqlite3_errmsg(q)),A.dP(s.b,s.d.sqlite3_errstr(o))+" (code "+A.p(o)+")",c,n,d,e,f)},
ww(a,b,c,d,e){throw A.b(A.wo(a.a,a.b,b,c,d,e))},
xc(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.b7("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.ct(61)))
return s.charCodeAt(0)==0?s:s},
q_(a){var s=0,r=A.h(t.lo),q
var $async$q_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a2(a.arrayBuffer(),t.a),$async$q_)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$q_,r)}},B={}
var w=[A,J,B]
var $={}
A.vF.prototype={}
J.jb.prototype={
X(a,b){return a===b},
gJ(a){return A.hc(a)},
l(a){return"Instance of '"+A.jN(a)+"'"},
gab(a){return A.bA(A.wh(this))}}
J.jd.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gab(a){return A.bA(t.y)},
$ia6:1,
$iZ:1}
J.fR.prototype={
X(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gab(a){return A.bA(t.P)},
$ia6:1,
$iT:1}
J.ap.prototype={$iF:1}
J.cO.prototype={
gJ(a){return 0},
gab(a){return B.cc},
l(a){return String(a)}}
J.jJ.prototype={}
J.d_.prototype={}
J.bo.prototype={
l(a){var s=a[$.e9()]
if(s==null)return this.n2(a)
return"JavaScript function for "+J.an(s)}}
J.b3.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.ek.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.A.prototype={
h6(a,b){return new A.bl(a,A.al(a).i("@<1>").V(b).i("bl<1,2>"))},
t(a,b){a.$flags&1&&A.D(a,29)
a.push(b)},
hJ(a,b){var s
a.$flags&1&&A.D(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.pZ(b,null))
return a.splice(b,1)[0]},
ai(a,b,c){var s
a.$flags&1&&A.D(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.pZ(b,null))
a.splice(b,0,c)},
jf(a,b,c){var s,r
a.$flags&1&&A.D(a,"insertAll",2)
A.xw(b,0,a.length,"index")
if(!t.O.b(c))c=J.Ao(c)
s=J.ar(c)
a.length=a.length+s
r=b+s
this.a6(a,r,a.length,a,b)
this.aa(a,b,r,c)},
jt(a){a.$flags&1&&A.D(a,"removeLast",1)
if(a.length===0)throw A.b(A.uW(a,-1))
return a.pop()},
P(a,b){var s
a.$flags&1&&A.D(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
qK(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aw(a))}q=p.length
if(q===o)return
this.sk(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
G(a,b){var s
a.$flags&1&&A.D(a,"addAll",2)
if(Array.isArray(b)){this.np(a,b)
return}for(s=J.L(b);s.m();)a.push(s.gn())},
np(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aw(a))
for(s=0;s<r;++s)a.push(b[s])},
aK(a){a.$flags&1&&A.D(a,"clear","clear")
a.length=0},
cr(a,b,c){return new A.ac(a,b,A.al(a).i("@<1>").V(c).i("ac<1,2>"))},
K(a,b){var s,r=A.aG(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.p(a[s])
return r.join(b)},
d_(a){return this.K(a,"")},
cv(a,b){return A.bY(a,0,A.bi(b,"count",t.S),A.al(a).c)},
aW(a,b){return A.bY(a,b,null,A.al(a).c)},
cW(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aw(a))}if(c!=null)return c.$0()
throw A.b(A.aj())},
ew(a,b){return this.cW(a,b,null)},
a0(a,b){return a[b]},
O(a,b,c){if(b<0||b>a.length)throw A.b(A.af(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.af(c,b,a.length,"end",null))
if(b===c)return A.m([],A.al(a))
return A.m(a.slice(b,c),A.al(a))},
aR(a,b){return this.O(a,b,null)},
f2(a,b,c){A.bd(b,c,a.length)
return A.bY(a,b,c,A.al(a).c)},
gC(a){if(a.length>0)return a[0]
throw A.b(A.aj())},
gW(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aj())},
gaV(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aj())
throw A.b(A.fO())},
a6(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.D(a,5)
A.bd(b,c,a.length)
s=c-b
if(s===0)return
A.aQ(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.lM(d,e).bk(0,!1)
q=0}p=J.J(r)
if(q+s>p.gk(r))throw A.b(A.xe())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aa(a,b,c,d){return this.a6(a,b,c,d,0)},
dE(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aw(a))}return!1},
df(a,b){var s,r,q,p,o
a.$flags&2&&A.D(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Dp()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.al(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dd(b,2))
if(p>0)this.qL(a,p)},
b8(a){return this.df(a,null)},
qL(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bR(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
dP(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.x(a[s],b))return s
return-1},
D(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
gB(a){return a.length===0},
gY(a){return a.length!==0},
l(a){return A.of(a,"[","]")},
bk(a,b){var s=A.m(a.slice(0),A.al(a))
return s},
d8(a){return this.bk(a,!0)},
gv(a){return new J.eb(a,a.length,A.al(a).i("eb<1>"))},
gJ(a){return A.hc(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.D(a,"set length","change the length of")
if(b<0)throw A.b(A.af(b,0,null,"newLength",null))
if(b>a.length)A.al(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.uW(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.D(a)
if(!(b>=0&&b<a.length))throw A.b(A.uW(a,b))
a[b]=c},
jA(a,b){return new A.bv(a,b.i("bv<0>"))},
ue(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gab(a){return A.bA(A.al(a))},
$iaM:1,
$iC:1,
$in:1,
$iq:1}
J.jc.prototype={
vm(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.jN(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.og.prototype={}
J.eb.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.H(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.dy.prototype={
T(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gji(b)
if(this.gji(a)===s)return 0
if(this.gji(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gji(a){return a===0?1/a<0:a<0},
rG(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.a0(""+a+".ceil()"))},
tK(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.a0(""+a+".floor()"))},
m0(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.a0(""+a+".round()"))},
vb(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
iW(a,b,c){if(this.T(b,c)>0)throw A.b(A.e2(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
m3(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.af(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.w(A.a0("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.aU("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
f0(a,b){return a+b},
au(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
jV(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.l4(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.l4(a,b)},
l4(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.a0("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
c_(a,b){if(b<0)throw A.b(A.e2(b))
return b>31?0:a<<b>>>0},
e1(a,b){var s
if(b<0)throw A.b(A.e2(b))
if(a>0)s=this.iM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a4(a,b){var s
if(a>0)s=this.iM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
iN(a,b){if(0>b)throw A.b(A.e2(b))
return this.iM(a,b)},
iM(a,b){return b>31?0:a>>>b},
mI(a,b){return a>b},
gab(a){return A.bA(t.o)},
$iah:1,
$ia1:1}
J.fQ.prototype={
glq(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gab(a){return A.bA(t.S)},
$ia6:1,
$ii:1}
J.je.prototype={
gab(a){return A.bA(t.i)},
$ia6:1}
J.cM.prototype={
iT(a,b,c){var s=b.length
if(c>s)throw A.b(A.af(c,0,s,null,null))
return new A.lk(b,a,c)},
h1(a,b){return this.iT(a,b,0)},
dR(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.af(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.eG(c,a)},
cm(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.a7(a,r-s)},
m_(a,b,c){A.xw(0,0,a.length,"startIndex")
return A.F6(a,b,c,0)},
f6(a,b){var s=A.m(a.split(b),t.s)
return s},
d4(a,b,c,d){var s=A.bd(b,c,a.length)
return A.zs(a,b,s,d)},
a3(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.af(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
L(a,b){return this.a3(a,b,0)},
q(a,b,c){return a.substring(b,A.bd(b,c,a.length))},
a7(a,b){return this.q(a,b,null)},
cz(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.B2(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.xh(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
vk(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.xh(r,s))},
aU(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.b2)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
lP(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aU(c,s)+a},
uM(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aU(" ",s)},
bS(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.af(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bR(a,b){return this.bS(a,b,0)},
hs(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.af(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dP(a,b){return this.hs(a,b,null)},
D(a,b){return A.F3(a,b,0)},
T(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gJ(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gab(a){return A.bA(t.N)},
gk(a){return a.length},
$iaM:1,
$ia6:1,
$iah:1,
$ik:1}
A.rY.prototype={
t(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.J(b),i=j.gk(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.b.a4(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.d.aa(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.d.aa(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.D(r)
r[q+m]=l}k.a=s},
jv(){var s,r=this
if(r.a===0)return $.lI()
s=J.dk(B.d.gaA(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.lI()
return s},
gk(a){return this.a}}
A.rE.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.bx(b))
this.b.push(s)
this.a=this.a+s.length},
jv(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.lI()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.c.aK(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.H)(s),++o,p=m){n=s[o]
m=p+n.length
B.d.aa(q,p,m,n)}l.a=0
B.c.aK(s)
return q},
gk(a){return this.a}}
A.d1.prototype={
gv(a){return new A.iE(J.L(this.gb1()),A.o(this).i("iE<1,2>"))},
gk(a){return J.ar(this.gb1())},
gB(a){return J.ci(this.gb1())},
gY(a){return J.fp(this.gb1())},
aW(a,b){var s=A.o(this)
return A.iD(J.lM(this.gb1(),b),s.c,s.y[1])},
cv(a,b){var s=A.o(this)
return A.iD(J.vq(this.gb1(),b),s.c,s.y[1])},
a0(a,b){return A.o(this).y[1].a(J.lK(this.gb1(),b))},
gC(a){return A.o(this).y[1].a(J.bD(this.gb1()))},
gW(a){return A.o(this).y[1].a(J.vp(this.gb1()))},
gaV(a){return A.o(this).y[1].a(J.lL(this.gb1()))},
l(a){return J.an(this.gb1())}}
A.iE.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.dm.prototype={
gb1(){return this.a}}
A.hC.prototype={$iC:1}
A.hz.prototype={
h(a,b){return this.$ti.y[1].a(J.aa(this.a,b))},
j(a,b,c){J.bC(this.a,b,this.$ti.c.a(c))},
sk(a,b){J.Ak(this.a,b)},
t(a,b){J.dj(this.a,this.$ti.c.a(b))},
df(a,b){var s=b==null?null:new A.rF(this,b)
J.wL(this.a,s)},
f2(a,b,c){var s=this.$ti
return A.iD(J.Ai(this.a,b,c),s.c,s.y[1])},
a6(a,b,c,d,e){var s=this.$ti
J.Al(this.a,b,c,A.iD(d,s.y[1],s.c),e)},
aa(a,b,c,d){return this.a6(0,b,c,d,0)},
$iC:1,
$iq:1}
A.rF.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bl.prototype={
h6(a,b){return new A.bl(this.a,this.$ti.i("@<1>").V(b).i("bl<1,2>"))},
gb1(){return this.a}}
A.cN.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.jR.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.bQ.prototype={
gk(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.vc.prototype={
$0(){return A.cj(null,t.H)},
$S:4}
A.q2.prototype={}
A.C.prototype={}
A.R.prototype={
gv(a){var s=this
return new A.a5(s,s.gk(s),A.o(s).i("a5<R.E>"))},
gB(a){return this.gk(this)===0},
gC(a){if(this.gk(this)===0)throw A.b(A.aj())
return this.a0(0,0)},
gW(a){var s=this
if(s.gk(s)===0)throw A.b(A.aj())
return s.a0(0,s.gk(s)-1)},
gaV(a){var s=this
if(s.gk(s)===0)throw A.b(A.aj())
if(s.gk(s)>1)throw A.b(A.fO())
return s.a0(0,0)},
K(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.p(p.a0(0,0))
if(o!==p.gk(p))throw A.b(A.aw(p))
for(r=s,q=1;q<o;++q){r=r+b+A.p(p.a0(0,q))
if(o!==p.gk(p))throw A.b(A.aw(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.p(p.a0(0,q))
if(o!==p.gk(p))throw A.b(A.aw(p))}return r.charCodeAt(0)==0?r:r}},
d_(a){return this.K(0,"")},
cr(a,b,c){return new A.ac(this,b,A.o(this).i("@<R.E>").V(c).i("ac<1,2>"))},
v4(a,b){var s,r,q=this,p=q.gk(q)
if(p===0)throw A.b(A.aj())
s=q.a0(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a0(0,r))
if(p!==q.gk(q))throw A.b(A.aw(q))}return s},
aW(a,b){return A.bY(this,b,null,A.o(this).i("R.E"))},
cv(a,b){return A.bY(this,0,A.bi(b,"count",t.S),A.o(this).i("R.E"))},
bk(a,b){var s=A.Q(this,A.o(this).i("R.E"))
return s},
d8(a){return this.bk(0,!0)},
jx(a){var s,r=this,q=A.ol(A.o(r).i("R.E"))
for(s=0;s<r.gk(r);++s)q.t(0,r.a0(0,s))
return q}}
A.dL.prototype={
nf(a,b,c,d){var s,r=this.b
A.aQ(r,"start")
s=this.c
if(s!=null){A.aQ(s,"end")
if(r>s)throw A.b(A.af(r,0,s,"start",null))}},
go_(){var s=J.ar(this.a),r=this.c
if(r==null||r>s)return s
return r},
gr1(){var s=J.ar(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.ar(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a0(a,b){var s=this,r=s.gr1()+b
if(b<0||r>=s.go_())throw A.b(A.j8(b,s.gk(0),s,null,"index"))
return J.lK(s.a,r)},
aW(a,b){var s,r,q=this
A.aQ(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dv(q.$ti.i("dv<1>"))
return A.bY(q.a,s,r,q.$ti.c)},
cv(a,b){var s,r,q,p=this
A.aQ(b,"count")
s=p.c
r=p.b
if(s==null)return A.bY(p.a,r,B.b.f0(r,b),p.$ti.c)
else{q=B.b.f0(r,b)
if(s<q)return p
return A.bY(p.a,r,q,p.$ti.c)}},
bk(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.J(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.vC(0,n):J.vB(0,n)}r=A.aG(s,m.a0(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a0(n,o+q)
if(m.gk(n)<l)throw A.b(A.aw(p))}return r},
d8(a){return this.bk(0,!0)}}
A.a5.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.J(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.aw(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a0(q,s);++r.c
return!0}}
A.co.prototype={
gv(a){return new A.jr(J.L(this.a),this.b,A.o(this).i("jr<1,2>"))},
gk(a){return J.ar(this.a)},
gB(a){return J.ci(this.a)},
gC(a){return this.b.$1(J.bD(this.a))},
gW(a){return this.b.$1(J.vp(this.a))},
gaV(a){return this.b.$1(J.lL(this.a))},
a0(a,b){return this.b.$1(J.lK(this.a,b))}}
A.du.prototype={$iC:1}
A.jr.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.ac.prototype={
gk(a){return J.ar(this.a)},
a0(a,b){return this.b.$1(J.lK(this.a,b))}}
A.c0.prototype={
gv(a){return new A.eQ(J.L(this.a),this.b)},
cr(a,b,c){return new A.co(this,b,this.$ti.i("@<1>").V(c).i("co<1,2>"))}}
A.eQ.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.fD.prototype={
gv(a){return new A.j_(J.L(this.a),this.b,B.al,this.$ti.i("j_<1,2>"))}}
A.j_.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.L(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.dM.prototype={
gv(a){var s=this.a
return new A.kj(s.gv(s),this.b,A.o(this).i("kj<1>"))}}
A.fB.prototype={
gk(a){var s=this.a,r=s.gk(s)
s=this.b
if(B.b.mI(r,s))return s
return r},
$iC:1}
A.kj.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.cu.prototype={
aW(a,b){A.io(b,"count")
A.aQ(b,"count")
return new A.cu(this.a,this.b+b,A.o(this).i("cu<1>"))},
gv(a){var s=this.a
return new A.k3(s.gv(s),this.b)}}
A.ee.prototype={
gk(a){var s=this.a,r=s.gk(s)-this.b
if(r>=0)return r
return 0},
aW(a,b){A.io(b,"count")
A.aQ(b,"count")
return new A.ee(this.a,this.b+b,this.$ti)},
$iC:1}
A.k3.prototype={
m(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gn(){return this.a.gn()}}
A.dv.prototype={
gv(a){return B.al},
gB(a){return!0},
gk(a){return 0},
gC(a){throw A.b(A.aj())},
gW(a){throw A.b(A.aj())},
gaV(a){throw A.b(A.aj())},
a0(a,b){throw A.b(A.af(b,0,0,"index",null))},
cr(a,b,c){return new A.dv(c.i("dv<0>"))},
aW(a,b){A.aQ(b,"count")
return this},
cv(a,b){A.aQ(b,"count")
return this},
bk(a,b){var s=this.$ti.c
return b?J.vC(0,s):J.vB(0,s)},
d8(a){return this.bk(0,!0)}}
A.iX.prototype={
m(){return!1},
gn(){throw A.b(A.aj())}}
A.bv.prototype={
gv(a){return new A.kx(J.L(this.a),this.$ti.i("kx<1>"))}}
A.kx.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.fG.prototype={
sk(a,b){throw A.b(A.a0(u.O))},
t(a,b){throw A.b(A.a0("Cannot add to a fixed-length list"))}}
A.kp.prototype={
j(a,b,c){throw A.b(A.a0("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.b(A.a0("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.a0("Cannot add to an unmodifiable list"))},
df(a,b){throw A.b(A.a0("Cannot modify an unmodifiable list"))},
a6(a,b,c,d,e){throw A.b(A.a0("Cannot modify an unmodifiable list"))},
aa(a,b,c,d){return this.a6(0,b,c,d,0)}}
A.eK.prototype={}
A.dJ.prototype={
gk(a){return J.ar(this.a)},
a0(a,b){var s=this.a,r=J.J(s)
return r.a0(s,r.gk(s)-1-b)}}
A.kh.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
X(a,b){if(b==null)return!1
return b instanceof A.kh&&this.a===b.a}}
A.ia.prototype={}
A.aF.prototype={$r:"+(1,2)",$s:1}
A.hS.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.hT.prototype={$r:"+controller,sync(1,2)",$s:3}
A.f5.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.l6.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.hU.prototype={$r:"+(1,2,3)",$s:6}
A.l7.prototype={$r:"+conflicts,hidden,pending(1,2,3)",$s:7}
A.fy.prototype={
gB(a){return this.gk(this)===0},
gY(a){return this.gk(this)!==0},
l(a){return A.oW(this)},
gbP(){return new A.f9(this.ty(),A.o(this).i("f9<V<1,2>>"))},
ty(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gbP(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gS(),o=o.gv(o),n=A.o(s).i("V<1,2>")
case 2:if(!o.m()){r=3
break}m=o.gn()
r=4
return a.b=new A.V(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
cs(a,b,c,d){var s=A.I(c,d)
this.a9(0,new A.mC(this,b,s))
return s},
$iN:1}
A.mC.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.bm.prototype={
gk(a){return this.b.length},
gkA(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a9(a,b){var s,r,q=this.gkA(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gS(){return new A.dY(this.gkA(),this.$ti.i("dY<1>"))},
gb7(){return new A.dY(this.b,this.$ti.i("dY<2>"))}}
A.dY.prototype={
gk(a){return this.a.length},
gB(a){return 0===this.a.length},
gY(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.f0(s,s.length,this.$ti.i("f0<1>"))}}
A.f0.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.fz.prototype={
t(a,b){A.AE()}}
A.cI.prototype={
gk(a){return this.b},
gB(a){return this.b===0},
gY(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.f0(s,s.length,r.$ti.i("f0<1>"))},
D(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.oa.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.fN&&this.a.X(0,b.a)&&A.wq(this)===A.wq(b)},
gJ(a){return A.er(this.a,A.wq(this),B.o,B.o)},
l(a){var s=B.c.K([A.bA(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.fN.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.EQ(A.lz(this.a),this.$ti)}}
A.pI.prototype={
$0(){return B.u.tK(1000*this.a.now())},
$S:10}
A.hi.prototype={}
A.qF.prototype={
bu(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.h8.prototype={
l(a){return"Null check operator used on a null value"}}
A.jf.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ko.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.jD.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iG:1}
A.fC.prototype={}
A.hW.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ias:1}
A.dp.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.zw(r==null?"unknown":r)+"'"},
gab(a){var s=A.lz(this)
return A.bA(s==null?A.bj(this):s)},
gwc(){return this},
$C:"$1",
$R:1,
$D:null}
A.ma.prototype={$C:"$0",$R:0}
A.mb.prototype={$C:"$2",$R:2}
A.qD.prototype={}
A.qc.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.zw(s)+"'"}}
A.ft.prototype={
X(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ft))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.lD(this.a)^A.hc(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.jN(this.a)+"'")}}
A.jZ.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bq.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gY(a){return this.a!==0},
gS(){return new A.ai(this,A.o(this).i("ai<1>"))},
gb7(){return new A.aO(this,A.o(this).i("aO<2>"))},
gbP(){return new A.aN(this,A.o(this).i("aN<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.lI(a)},
lI(a){var s=this.d
if(s==null)return!1
return this.dO(s[this.dN(a)],a)>=0},
G(a,b){b.a9(0,new A.oh(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.lJ(b)},
lJ(a){var s,r,q=this.d
if(q==null)return null
s=q[this.dN(a)]
r=this.dO(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.jW(s==null?q.b=q.iF():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.jW(r==null?q.c=q.iF():r,b,c)}else q.lL(b,c)},
lL(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.iF()
s=p.dN(a)
r=o[s]
if(r==null)o[s]=[p.i1(a,b)]
else{q=p.dO(r,a)
if(q>=0)r[q].b=b
else r.push(p.i1(a,b))}},
lT(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.o(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
P(a,b){var s=this
if(typeof b=="string")return s.kV(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.kV(s.c,b)
else return s.lK(b)},
lK(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dN(a)
r=n[s]
q=o.dO(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.la(p)
if(r.length===0)delete n[s]
return p.b},
aK(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.i0()}},
a9(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aw(s))
r=r.c}},
jW(a,b,c){var s=a[b]
if(s==null)a[b]=this.i1(b,c)
else s.b=c},
kV(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.la(s)
delete a[b]
return s.b},
i0(){this.r=this.r+1&1073741823},
i1(a,b){var s,r=this,q=new A.oj(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.i0()
return q},
la(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.i0()},
dN(a){return J.aL(a)&1073741823},
dO(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.oW(this)},
iF(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.oh.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.oj.prototype={}
A.ai.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.dz(s,s.r,s.e)},
D(a,b){return this.a.I(b)}}
A.dz.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aO.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.bT(s,s.r,s.e)}}
A.bT.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aN.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.jl(s,s.r,s.e,this.$ti.i("jl<1,2>"))}}
A.jl.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aw(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.V(s.a,s.b,r.$ti.i("V<1,2>"))
r.c=s.c
return!0}}}
A.fS.prototype={
dN(a){return A.lD(a)&1073741823},
dO(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.v6.prototype={
$1(a){return this.a(a)},
$S:29}
A.v7.prototype={
$2(a,b){return this.a(a,b)},
$S:126}
A.v8.prototype={
$1(a){return this.a(a)},
$S:54}
A.f4.prototype={
gab(a){return A.bA(this.kw())},
kw(){return A.Ez(this.$r,this.ii())},
l(a){return this.l8(!1)},
l8(a){var s,r,q,p,o,n=this.o5(),m=this.ii(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.xs(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
o5(){var s,r=this.$s
while($.tS.length<=r)$.tS.push(null)
s=$.tS[r]
if(s==null){s=this.nL()
$.tS[r]=s}return s},
nL(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.vA(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.cP(j,k)}}
A.l4.prototype={
ii(){return[this.a,this.b]},
X(a,b){if(b==null)return!1
return b instanceof A.l4&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gJ(a){return A.er(this.$s,this.a,this.b,B.o)}}
A.l5.prototype={
ii(){return[this.a,this.b,this.c]},
X(a,b){var s=this
if(b==null)return!1
return b instanceof A.l5&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gJ(a){var s=this
return A.er(s.$s,s.a,s.b,s.c)}}
A.ej.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gkG(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.vE(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gq4(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.vE(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
dK(a){var s=this.b.exec(a)
if(s==null)return null
return new A.f2(s)},
iT(a,b,c){var s=b.length
if(c>s)throw A.b(A.af(c,0,s,null,null))
return new A.kA(this,b,c)},
h1(a,b){return this.iT(0,b,0)},
o2(a,b){var s,r=this.gkG()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.f2(s)},
o1(a,b){var s,r=this.gq4()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.f2(s)},
dR(a,b,c){if(c<0||c>b.length)throw A.b(A.af(c,0,b.length,null,null))
return this.o1(b,c)}}
A.f2.prototype={
gH(){return this.b.index},
gE(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$idD:1,
$ijU:1}
A.kA.prototype={
gv(a){return new A.kB(this.a,this.b,this.c)}}
A.kB.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.o2(l,s)
if(p!=null){m.d=p
o=p.gE()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.eG.prototype={
gE(){return this.a+this.c.length},
h(a,b){if(b!==0)A.w(A.pZ(b,null))
return this.c},
$idD:1,
gH(){return this.a}}
A.lk.prototype={
gv(a){return new A.ua(this.a,this.b,this.c)},
gC(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.eG(r,s)
throw A.b(A.aj())}}
A.ua.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.eG(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.kK.prototype={
bq(){var s=this.b
if(s===this)throw A.b(new A.cN("Local '"+this.a+"' has not been initialized."))
return s},
bc(){var s=this.b
if(s===this)throw A.b(A.xk(this.a))
return s}}
A.ep.prototype={
gab(a){return B.c5},
h4(a,b,c){A.ib(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
lm(a){return this.h4(a,0,null)},
h3(a,b,c){var s
A.ib(a,b,c)
s=new DataView(a,b)
return s},
ll(a){return this.h3(a,0,null)},
$ia6:1,
$idl:1}
A.eo.prototype={$ieo:1}
A.h4.prototype={
gaA(a){if(((a.$flags|0)&2)!==0)return new A.lq(a.buffer)
else return a.buffer},
pT(a,b,c,d){var s=A.af(b,0,c,d,null)
throw A.b(s)},
k8(a,b,c,d){if(b>>>0!==b||b>c)this.pT(a,b,c,d)}}
A.lq.prototype={
h4(a,b,c){var s=A.bt(this.a,b,c)
s.$flags=3
return s},
lm(a){return this.h4(0,0,null)},
h3(a,b,c){var s=A.xm(this.a,b,c)
s.$flags=3
return s},
ll(a){return this.h3(0,0,null)},
$idl:1}
A.h3.prototype={
gab(a){return B.c6},
$ia6:1,
$ivr:1}
A.eq.prototype={
gk(a){return a.length},
l2(a,b,c,d,e){var s,r,q=a.length
this.k8(a,b,q,"start")
this.k8(a,c,q,"end")
if(b>c)throw A.b(A.af(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.P(e,null))
r=d.length
if(r-e<s)throw A.b(A.u("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaM:1,
$ibp:1}
A.cS.prototype={
h(a,b){A.cF(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.D(a)
A.cF(b,a,a.length)
a[b]=c},
a6(a,b,c,d,e){a.$flags&2&&A.D(a,5)
if(t.dQ.b(d)){this.l2(a,b,c,d,e)
return}this.jU(a,b,c,d,e)},
aa(a,b,c,d){return this.a6(a,b,c,d,0)},
$iC:1,
$in:1,
$iq:1}
A.bs.prototype={
j(a,b,c){a.$flags&2&&A.D(a)
A.cF(b,a,a.length)
a[b]=c},
a6(a,b,c,d,e){a.$flags&2&&A.D(a,5)
if(t.aj.b(d)){this.l2(a,b,c,d,e)
return}this.jU(a,b,c,d,e)},
aa(a,b,c,d){return this.a6(a,b,c,d,0)},
$iC:1,
$in:1,
$iq:1}
A.jv.prototype={
gab(a){return B.c7},
O(a,b,c){return new Float32Array(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$inx:1}
A.jw.prototype={
gab(a){return B.c8},
O(a,b,c){return new Float64Array(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$iny:1}
A.jx.prototype={
gab(a){return B.c9},
h(a,b){A.cF(b,a,a.length)
return a[b]},
O(a,b,c){return new Int16Array(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$iob:1}
A.jy.prototype={
gab(a){return B.ca},
h(a,b){A.cF(b,a,a.length)
return a[b]},
O(a,b,c){return new Int32Array(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$ioc:1}
A.jz.prototype={
gab(a){return B.cb},
h(a,b){A.cF(b,a,a.length)
return a[b]},
O(a,b,c){return new Int8Array(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$iod:1}
A.h5.prototype={
gab(a){return B.ce},
h(a,b){A.cF(b,a,a.length)
return a[b]},
O(a,b,c){return new Uint16Array(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$iqH:1}
A.h6.prototype={
gab(a){return B.cf},
h(a,b){A.cF(b,a,a.length)
return a[b]},
O(a,b,c){return new Uint32Array(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$iqI:1}
A.h7.prototype={
gab(a){return B.cg},
gk(a){return a.length},
h(a,b){A.cF(b,a,a.length)
return a[b]},
O(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$iqJ:1}
A.dF.prototype={
gab(a){return B.ch},
gk(a){return a.length},
h(a,b){A.cF(b,a,a.length)
return a[b]},
O(a,b,c){return new Uint8Array(a.subarray(b,A.ce(b,c,a.length)))},
aR(a,b){return this.O(a,b,null)},
$ia6:1,
$idF:1,
$ica:1}
A.hO.prototype={}
A.hP.prototype={}
A.hQ.prototype={}
A.hR.prototype={}
A.bU.prototype={
i(a){return A.i3(v.typeUniverse,this,a)},
V(a){return A.yg(v.typeUniverse,this,a)}}
A.kU.prototype={}
A.uf.prototype={
l(a){return A.bh(this.a,null)}}
A.kR.prototype={
l(a){return this.a}}
A.i_.prototype={$icz:1}
A.rl.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:22}
A.rk.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:110}
A.rm.prototype={
$0(){this.a.$0()},
$S:3}
A.rn.prototype={
$0(){this.a.$0()},
$S:3}
A.hZ.prototype={
nl(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.dd(new A.ud(this,b),0),a)
else throw A.b(A.a0("`setTimeout()` not found."))},
nm(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.dd(new A.uc(this,a,Date.now(),b),0),a)
else throw A.b(A.a0("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.a0("Canceling a timer."))},
$icy:1}
A.ud.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.uc.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.jV(s,o)}q.c=p
r.d.$1(q)},
$S:3}
A.hu.prototype={
ak(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aX(a)
else{s=r.a
if(r.$ti.i("K<1>").b(a))s.k7(a)
else s.cI(a)}},
bO(a,b){var s
if(b==null)b=A.fr(a)
s=this.a
if(this.b)s.al(new A.ab(a,b))
else s.c2(new A.ab(a,b))},
ap(a){return this.bO(a,null)},
$ifw:1}
A.uv.prototype={
$1(a){return this.a.$2(0,a)},
$S:19}
A.uw.prototype={
$2(a,b){this.a.$2(1,new A.fC(a,b))},
$S:128}
A.uN.prototype={
$2(a,b){this.a(a,b)},
$S:143}
A.ut.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.y()
s=q.b
if((s&1)!==0?(q.gb2().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.uu.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:22}
A.kD.prototype={
nh(a,b){var s=new A.rp(a)
this.a=A.vT(new A.rr(this,a),new A.rs(s),new A.rt(this,s),!1,b)}}
A.rp.prototype={
$0(){A.ik(new A.rq(this.a))},
$S:3}
A.rq.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.rs.prototype={
$0(){this.a.$0()},
$S:0}
A.rt.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.rr.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.y()
if((r.b&4)===0){s.c=new A.r($.v,t._)
if(s.b){s.b=!1
A.ik(new A.ro(this.b))}return s.c}},
$S:102}
A.ro.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.hK.prototype={
l(a){return"IterationMarker("+this.b+", "+A.p(this.a)+")"}}
A.lm.prototype={
gn(){return this.b},
qM(a,b){var s,r,q
a=a
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gn()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.qM(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.yb
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.yb
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.u("sync*"))}return!1},
wd(a){var s,r,q=this
if(a instanceof A.f9){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.L(a)
return 2}}}
A.f9.prototype={
gv(a){return new A.lm(this.a())}}
A.ab.prototype={
l(a){return A.p(this.a)},
$ia4:1,
gc0(){return this.b}}
A.aR.prototype={}
A.dS.prototype={
bo(){},
bp(){}}
A.hy.prototype={
gcG(){return new A.aR(this,A.o(this).i("aR<1>"))},
ghr(){return(this.c&4)!==0},
giD(){return this.c<4},
qJ(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
iO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.y0(c,A.o(j).c)
s=A.o(j)
r=$.v
q=d?1:0
p=b!=null?32:0
o=A.kI(r,a,s.c)
n=A.rB(r,b)
m=c==null?A.uP():c
l=new A.dS(j,o,n,r.by(m,t.H),r,q|p,s.i("dS<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.lx(j.a)
return l},
kP(a){var s,r=this
A.o(r).i("dS<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.qJ(a)
if((r.c&2)===0&&r.d==null)r.nD()}return null},
kQ(a){},
kR(a){},
i3(){if((this.c&4)!==0)return new A.be("Cannot add new events after calling close")
return new A.be("Cannot add new events while doing an addStream")},
t(a,b){if(!this.giD())throw A.b(this.i3())
this.cf(b)},
bN(a,b){var s
if(!this.giD())throw A.b(this.i3())
s=A.uE(a,b)
this.cg(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.giD())throw A.b(q.i3())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.r($.v,t.D)
q.cP()
return r},
b9(a,b){this.cg(a,b)},
c3(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aX(null)},
nD(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aX(null)}A.lx(this.b)},
$ib9:1}
A.hv.prototype={
cf(a){var s
for(s=this.d;s!=null;s=s.ch)s.bE(new A.d3(a))},
cg(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bE(new A.eW(a,b))},
cP(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bE(B.P)
else this.r.aX(null)}}
A.nF.prototype={
$0(){this.c.a(null)
this.b.c4(null)},
$S:0}
A.nH.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.al(new A.ab(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.al(new A.ab(q,r))}},
$S:11}
A.nG.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bC(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.m([],l.i("A<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.H)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.dj(s,n)}m.c.cI(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.al(new A.ab(s,l))}},
$S(){return this.d.i("T(0)")}}
A.nA.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,as)")}}
A.kk.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iG:1}
A.nB.prototype={
$1(a){var s,r,q,p,o,n,m=this
if(a===0){s=A.m([],m.c.i("A<0>"))
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.H)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}m.a.ak(s)}else{s=A.m([],t.fQ)
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.H)(r),++p)s.push(r[p].c)
q=A.m([],m.c.i("A<0?>"))
for(n=r.length,p=0;p<r.length;r.length===n||(0,A.H)(r),++p)q.push(r[p].b)
m.a.ap(new A.ha(B.c.ew(s,A.E4()),a))}},
$S:8}
A.ha.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.p(p.a)},
gc0(){var s=this.c
s=s==null?null:s.b
return s==null?A.a4.prototype.gc0.call(this):s}}
A.hI.prototype={
rd(a){this.a.bY(new A.te(this,a),new A.tf(this,a),t.P)}}
A.te.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("T(1)")}}
A.tf.prototype={
$2(a,b){this.a.c=new A.ab(a,b)
this.b.$1(1)},
$S:9}
A.td.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.dT.prototype={
bO(a,b){if((this.a.a&30)!==0)throw A.b(A.u("Future already completed"))
this.al(A.uE(a,b))},
ap(a){return this.bO(a,null)},
$ifw:1}
A.aI.prototype={
ak(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.u("Future already completed"))
s.aX(a)},
am(){return this.ak(null)},
al(a){this.a.c2(a)}}
A.a8.prototype={
ak(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.u("Future already completed"))
s.c4(a)},
am(){return this.ak(null)},
al(a){this.a.al(a)}}
A.bL.prototype={
uA(a){if((this.c&15)!==6)return!0
return this.b.b.d7(this.d,a.a,t.y,t.K)},
tU(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.ju(r,n,a.b,p,o,t.l)
else q=m.d7(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.E(s))){if((this.c&1)!==0)throw A.b(A.P("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.P("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.r.prototype={
bY(a,b,c){var s,r,q=$.v
if(q===B.h){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aU(b,"onError",u.w))}else{a=q.d3(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.yN(b,q)}s=new A.r($.v,c.i("r<0>"))
r=b==null?1:3
this.dk(new A.bL(s,r,a,b,this.$ti.i("@<1>").V(c).i("bL<1,2>")))
return s},
bi(a,b){return this.bY(a,null,b)},
l6(a,b,c){var s=new A.r($.v,c.i("r<0>"))
this.dk(new A.bL(s,19,a,b,this.$ti.i("@<1>").V(c).i("bL<1,2>")))
return s},
iV(a){var s=this.$ti,r=$.v,q=new A.r(r,s)
if(r!==B.h)a=A.yN(a,r)
this.dk(new A.bL(q,2,null,a,s.i("bL<1,1>")))
return q},
aD(a){var s=this.$ti,r=$.v,q=new A.r(r,s)
if(r!==B.h)a=r.by(a,t.z)
this.dk(new A.bL(q,8,a,null,s.i("bL<1,1>")))
return q},
qX(a){this.a=this.a&1|16
this.c=a},
fa(a){this.a=a.a&30|this.a&1
this.c=a.c},
dk(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dk(a)
return}s.fa(r)}s.b.cC(new A.tg(s,a))}},
kM(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.kM(a)
return}n.fa(s)}m.a=n.fT(a)
n.b.cC(new A.tl(m,n))}},
ef(){var s=this.c
this.c=null
return this.fT(s)},
fT(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c4(a){var s,r=this
if(r.$ti.i("K<1>").b(a))A.tj(a,r,!0)
else{s=r.ef()
r.a=8
r.c=a
A.dW(r,s)}},
cI(a){var s=this,r=s.ef()
s.a=8
s.c=a
A.dW(s,r)},
nK(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbQ()===r.gbQ())}else s=!1
if(s)return
q=p.ef()
p.fa(a)
A.dW(p,q)},
al(a){var s=this.ef()
this.qX(a)
A.dW(this,s)},
nJ(a,b){this.al(new A.ab(a,b))},
aX(a){if(this.$ti.i("K<1>").b(a)){this.k7(a)
return}this.k0(a)},
k0(a){this.a^=2
this.b.cC(new A.ti(this,a))},
k7(a){A.tj(a,this,!1)
return},
c2(a){this.a^=2
this.b.cC(new A.th(this,a))},
hL(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.r($.v,r.$ti)
q.aX(r)
return q}s=new A.r($.v,r.$ti)
q.a=null
q.a=A.cZ(a,new A.tr(s,a))
r.bY(new A.ts(q,r,s),new A.tt(q,s),t.P)
return s},
$iK:1}
A.tg.prototype={
$0(){A.dW(this.a,this.b)},
$S:0}
A.tl.prototype={
$0(){A.dW(this.b,this.a.a)},
$S:0}
A.tk.prototype={
$0(){A.tj(this.a.a,this.b,!0)},
$S:0}
A.ti.prototype={
$0(){this.a.cI(this.b)},
$S:0}
A.th.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.to.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bX(q.d,t.z)}catch(p){s=A.E(p)
r=A.ae(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.fr(q)
n=k.a
n.c=new A.ab(q,o)
q=n}q.b=!0
return}if(j instanceof A.r&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.r){m=k.b.a
l=new A.r(m.b,m.$ti)
j.bY(new A.tp(l,m),new A.tq(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.tp.prototype={
$1(a){this.a.nK(this.b)},
$S:22}
A.tq.prototype={
$2(a,b){this.a.al(new A.ab(a,b))},
$S:9}
A.tn.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.d7(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.E(n)
r=A.ae(n)
q=s
p=r
if(p==null)p=A.fr(q)
o=this.a
o.c=new A.ab(q,p)
o.b=!0}},
$S:0}
A.tm.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.uA(s)&&p.a.e!=null){p.c=p.a.tU(s)
p.b=!1}}catch(o){r=A.E(o)
q=A.ae(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fr(p)
m=l.b
m.c=new A.ab(p,n)
p=m}p.b=!0}},
$S:0}
A.tr.prototype={
$0(){var s=A.xA()
this.a.al(new A.ab(new A.kk("Future not completed",this.b),s))},
$S:0}
A.ts.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.cI(a)}},
$S(){return this.b.$ti.i("T(1)")}}
A.tt.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.al(new A.ab(a,b))}},
$S:9}
A.kC.prototype={}
A.a_.prototype={
d_(a){var s=new A.r($.v,t.os),r=new A.O(""),q=this.a1(null,!0,new A.qh(s,r),s.gi7())
q.hy(new A.qi(this,r,q,s))
return s},
gk(a){var s={},r=new A.r($.v,t.hy)
s.a=0
this.a1(new A.qj(s,this),!0,new A.qk(s,r),r.gi7())
return r},
gC(a){var s=new A.r($.v,A.o(this).i("r<a_.T>")),r=this.a1(null,!0,new A.qf(s),s.gi7())
r.hy(new A.qg(this,r,s))
return s}}
A.qh.prototype={
$0(){var s=this.b.a
this.a.c4(s.charCodeAt(0)==0?s:s)},
$S:0}
A.qi.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.p(a)
q.a+=p}catch(o){s=A.E(o)
r=A.ae(o)
q=s
p=r
n=A.ic(q,p)
if(n==null)q=new A.ab(q,p)
else q=n
A.D8(this.c,this.d,q)}},
$S(){return A.o(this.a).i("~(a_.T)")}}
A.qj.prototype={
$1(a){++this.a.a},
$S(){return A.o(this.b).i("~(a_.T)")}}
A.qk.prototype={
$0(){this.b.c4(this.a.a)},
$S:0}
A.qf.prototype={
$0(){var s,r=new A.be("No element")
A.jP(r,B.t)
s=A.ic(r,B.t)
if(s==null)s=new A.ab(r,B.t)
this.a.al(s)},
$S:0}
A.qg.prototype={
$1(a){A.D9(this.b,this.c,a)},
$S(){return A.o(this.a).i("~(a_.T)")}}
A.hm.prototype={
a1(a,b,c,d){return this.a.a1(a,b,c,d)},
bt(a,b,c){return this.a1(a,null,b,c)},
aL(a){return this.a1(a,null,null,null)}}
A.d8.prototype={
gcG(){return new A.aY(this,A.o(this).i("aY<1>"))},
ghr(){return(this.b&4)!==0},
gqn(){if((this.b&8)===0)return this.a
return this.a.c},
fe(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.f3():s}r=q.a
s=r.c
return s==null?r.c=new A.f3():s},
gb2(){var s=this.a
return(this.b&8)!==0?s.c:s},
bl(){if((this.b&4)!==0)return new A.be("Cannot add event after closing")
return new A.be("Cannot add event while adding a stream")},
rp(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bl())
if((o&2)!==0){o=new A.r($.v,t._)
o.aX(null)
return o}o=p.a
s=b===!0
r=new A.r($.v,t._)
q=s?A.C0(p):p.gnq()
q=a.a1(p.gnr(),s,p.gnF(),q)
s=p.b
if((s&1)!==0?(p.gb2().e&4)!==0:(s&2)===0)q.bg()
p.a=new A.li(o,r,q)
p.b|=8
return r},
ko(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.di():new A.r($.v,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bl())
this.ba(b)},
bN(a,b){var s
if(this.b>=4)throw A.b(this.bl())
s=A.uE(a,b)
this.b9(s.a,s.b)},
li(a){return this.bN(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.ko()
if(r>=4)throw A.b(s.bl())
s.k9()
return s.ko()},
k9(){var s=this.b|=4
if((s&1)!==0)this.cP()
else if((s&3)===0)this.fe().t(0,B.P)},
ba(a){var s=this.b
if((s&1)!==0)this.cf(a)
else if((s&3)===0)this.fe().t(0,new A.d3(a))},
b9(a,b){var s=this.b
if((s&1)!==0)this.cg(a,b)
else if((s&3)===0)this.fe().t(0,new A.eW(a,b))},
c3(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aX(null)},
iO(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.u("Stream has already been listened to."))
s=A.Cj(p,a,b,c,d,A.o(p).c)
r=p.gqn()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b6()}else p.a=s
s.qY(r)
s.ij(new A.u6(p))
return s},
kP(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.r)k=r}catch(o){q=A.E(o)
p=A.ae(o)
n=new A.r($.v,t.D)
n.c2(new A.ab(q,p))
k=n}else k=k.aD(s)
m=new A.u5(l)
if(k!=null)k=k.aD(m)
else m.$0()
return k},
kQ(a){if((this.b&8)!==0)this.a.b.bg()
A.lx(this.e)},
kR(a){if((this.b&8)!==0)this.a.b.b6()
A.lx(this.f)},
$ib9:1}
A.u6.prototype={
$0(){A.lx(this.a.d)},
$S:0}
A.u5.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aX(null)},
$S:0}
A.ln.prototype={
cf(a){this.gb2().ba(a)},
cg(a,b){this.gb2().b9(a,b)},
cP(){this.gb2().c3()}}
A.kE.prototype={
cf(a){this.gb2().bE(new A.d3(a))},
cg(a,b){this.gb2().bE(new A.eW(a,b))},
cP(){this.gb2().bE(B.P)}}
A.cc.prototype={}
A.fa.prototype={}
A.aY.prototype={
gJ(a){return(A.hc(this.a)^892482866)>>>0},
X(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aY&&b.a===this.a}}
A.d2.prototype={
fR(){return this.w.kP(this)},
bo(){this.w.kQ(this)},
bp(){this.w.kR(this)}}
A.kz.prototype={
A(){var s=this.b.A()
return s.aD(new A.rc(this))}}
A.rd.prototype={
$2(a,b){var s=this.a
s.b9(a,b)
s.c3()},
$S:9}
A.rc.prototype={
$0(){this.a.a.aX(null)},
$S:3}
A.li.prototype={}
A.aS.prototype={
qY(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.f3(s)}},
hy(a){this.a=A.kI(this.d,a,A.o(this).i("aS.T"))},
bg(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.ij(q.ge8())},
b6(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.f3(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.ij(s.ge9())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.i4()
r=s.f
return r==null?$.di():r},
i4(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.fR()},
ba(a){var s=this.e
if((s&8)!==0)return
if(s<64)this.cf(a)
else this.bE(new A.d3(a))},
b9(a,b){var s
if(t.C.b(a))A.jP(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cg(a,b)
else this.bE(new A.eW(a,b))},
c3(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.cP()
else s.bE(B.P)},
bo(){},
bp(){},
fR(){return null},
bE(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.f3()
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.f3(r)}},
cf(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.eV(s.a,a,A.o(s).i("aS.T"))
s.e=(s.e&4294967231)>>>0
s.i6((r&4)!==0)},
cg(a,b){var s,r=this,q=r.e,p=new A.rD(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.i4()
s=r.f
if(s!=null&&s!==$.di())s.aD(p)
else p.$0()}else{p.$0()
r.i6((q&4)!==0)}},
cP(){var s,r=this,q=new A.rC(r)
r.i4()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.di())s.aD(q)
else q.$0()},
ij(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.i6((r&4)!==0)},
i6(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bo()
else q.bp()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.f3(q)},
$ib8:1}
A.rD.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.m1(s,o,this.c,r,t.l)
else q.eV(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.rC.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.eU(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.f8.prototype={
a1(a,b,c,d){return this.a.iO(a,d,c,b===!0)},
bt(a,b,c){return this.a1(a,null,b,c)},
aL(a){return this.a1(a,null,null,null)}}
A.kQ.prototype={
gdS(){return this.a},
sdS(a){return this.a=a}}
A.d3.prototype={
jq(a){a.cf(this.b)}}
A.eW.prototype={
jq(a){a.cg(this.b,this.c)}}
A.t6.prototype={
jq(a){a.cP()},
gdS(){return null},
sdS(a){throw A.b(A.u("No events after a done."))}}
A.f3.prototype={
f3(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.ik(new A.tR(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sdS(b)
s.c=b}}}
A.tR.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gdS()
q.b=r
if(r==null)q.c=null
s.jq(this.b)},
$S:0}
A.eX.prototype={
hy(a){},
bg(){var s=this.a
if(s>=0)this.a=s+2},
b6(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.ik(s.gkI())}else s.a=r},
A(){this.a=-1
this.c=null
return $.di()},
qh(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.eU(s)}}else r.a=q},
$ib8:1}
A.c2.prototype={
gn(){if(this.c)return this.b
return null},
m(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.r($.v,t.k)
r.b=s
r.c=!1
q.b6()
return s}throw A.b(A.u("Already waiting for next."))}return r.pS()},
pS(){var s,r,q=this,p=q.b
if(p!=null){s=new A.r($.v,t.k)
q.b=s
r=p.a1(q.gq9(),!0,q.gqb(),q.gqd())
if(q.b!=null)q.a=r
return s}return $.zC()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aX(!1)
else s.c=!1
return r.A()}return $.di()},
qa(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.c4(!0)
if(q.c){r=q.a
if(r!=null)r.bg()}},
qe(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.al(new A.ab(a,b))
else q.c2(new A.ab(a,b))},
qc(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cI(!1)
else q.k0(!1)}}
A.hD.prototype={
a1(a,b,c,d){return A.y0(c,this.$ti.c)},
bt(a,b,c){return this.a1(a,null,b,c)}}
A.cE.prototype={
a1(a,b,c,d){var s=null,r=new A.hN(s,s,s,s,this.$ti.i("hN<1>"))
r.d=new A.tP(this,r)
return r.iO(a,d,c,b===!0)},
bt(a,b,c){return this.a1(a,null,b,c)},
aL(a){return this.a1(a,null,null,null)}}
A.tP.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.hN.prototype={
rq(a){var s=this.b
if(s>=4)throw A.b(this.bl())
if((s&1)!==0)this.gb2().ba(a)},
rI(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bl())
r|=4
s.b=r
if((r&1)!==0)s.gb2().c3()},
gcG(){throw A.b(A.a0("Not available"))},
$icR:1}
A.uy.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.uz.prototype={
$0(){return this.a.c4(this.b)},
$S:0}
A.hG.prototype={
a1(a,b,c,d){var s=this.$ti,r=$.v,q=b===!0?1:0,p=d!=null?32:0,o=A.kI(r,a,s.y[1]),n=A.rB(r,d),m=c==null?A.uP():c
s=new A.f_(this,o,n,r.by(m,t.H),r,q|p,s.i("f_<1,2>"))
s.x=this.a.bt(s.gio(),s.giq(),s.gis())
return s},
bt(a,b,c){return this.a1(a,null,b,c)}}
A.f_.prototype={
ba(a){if((this.e&2)!==0)return
this.bC(a)},
b9(a,b){if((this.e&2)!==0)return
this.dh(a,b)},
bo(){var s=this.x
if(s!=null)s.bg()},
bp(){var s=this.x
if(s!=null)s.b6()},
fR(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
ip(a){this.w.oy(a,this)},
it(a,b){this.b9(a,b)},
ir(){this.c3()}}
A.dZ.prototype={
oy(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.E(q)
r=A.ae(q)
p=s
o=r
n=A.ic(p,o)
if(n!=null){p=n.a
o=n.b}b.b9(p,o)
return}b.ba(m)}}
A.hE.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.bC(b)},
bN(a,b){var s=this.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.dh(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.cH()},
$ib9:1}
A.f6.prototype={
bo(){var s=this.x
if(s!=null)s.bg()},
bp(){var s=this.x
if(s!=null)s.b6()},
fR(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
ip(a){var s,r,q,p
try{q=this.w
q===$&&A.y()
q.t(0,a)}catch(p){s=A.E(p)
r=A.ae(p)
if((this.e&2)!==0)A.w(A.u("Stream is already closed"))
this.dh(s,r)}},
it(a,b){var s,r,q,p,o=this,n="Stream is already closed"
try{q=o.w
q===$&&A.y()
q.bN(a,b)}catch(p){s=A.E(p)
r=A.ae(p)
if(s===a){if((o.e&2)!==0)A.w(A.u(n))
o.dh(a,b)}else{if((o.e&2)!==0)A.w(A.u(n))
o.dh(s,r)}}},
ir(){var s,r,q,p,o=this
try{o.x=null
q=o.w
q===$&&A.y()
q.p()}catch(p){s=A.E(p)
r=A.ae(p)
if((o.e&2)!==0)A.w(A.u("Stream is already closed"))
o.dh(s,r)}}}
A.hx.prototype={
a1(a,b,c,d){var s=this.$ti,r=$.v,q=b===!0?1:0,p=d!=null?32:0,o=A.kI(r,a,s.y[1]),n=A.rB(r,d),m=c==null?A.uP():c,l=new A.f6(o,n,r.by(m,t.H),r,q|p,s.i("f6<1,2>"))
l.w=this.a.$1(new A.hE(l))
l.x=this.b.bt(l.gio(),l.giq(),l.gis())
return l},
bt(a,b,c){return this.a1(a,null,b,c)}}
A.aK.prototype={}
A.i9.prototype={$iw_:1}
A.fe.prototype={$iag:1}
A.lu.prototype={
eb(a,b,c){var s,r,q,p,o,n,m,l,k=this.giB(),j=k.a
if(j===B.h){A.ig(b,c)
return}s=k.b
r=j.gaI()
m=j.glQ()
m.toString
q=m
p=$.v
try{$.v=q
s.$5(j,r,a,b,c)
$.v=p}catch(l){o=A.E(l)
n=A.ae(l)
$.v=p
m=b===o?c:n
q.eb(j,o,m)}},
$iM:1}
A.kM.prototype={
gkk(){var s=this.at
return s==null?this.at=new A.fe(this):s},
gaI(){return this.ax.gkk()},
gbQ(){return this.as.a},
eU(a){var s,r,q
try{this.bX(a,t.H)}catch(q){s=A.E(q)
r=A.ae(q)
this.eb(this,s,r)}},
eV(a,b,c){var s,r,q
try{this.d7(a,b,t.H,c)}catch(q){s=A.E(q)
r=A.ae(q)
this.eb(this,s,r)}},
m1(a,b,c,d,e){var s,r,q
try{this.ju(a,b,c,t.H,d,e)}catch(q){s=A.E(q)
r=A.ae(q)
this.eb(this,s,r)}},
iU(a,b){return new A.t2(this,this.by(a,b),b)},
lp(a,b,c){return new A.t4(this,this.d3(a,b,c),c,b)},
eq(a){return new A.t1(this,this.by(a,t.H))},
h5(a,b){return new A.t3(this,this.d3(a,t.H,b),b)},
h(a,b){var s,r=this.ay,q=r.h(0,b)
if(q!=null||r.I(b))return q
s=this.ax.h(0,b)
if(s!=null)r.j(0,b,s)
return s},
eA(a,b){this.eb(this,a,b)},
lE(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gaI(),this,a,b)},
bX(a){var s=this.a,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
d7(a,b){var s=this.b,r=s.a
return s.b.$5(r,r.gaI(),this,a,b)},
ju(a,b,c){var s=this.c,r=s.a
return s.b.$6(r,r.gaI(),this,a,b,c)},
by(a){var s=this.d,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
d3(a){var s=this.e,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
eP(a){var s=this.f,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
lC(a,b){var s=this.r,r=s.a
if(r===B.h)return null
return s.b.$5(r,r.gaI(),this,a,b)},
cC(a){var s=this.w,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
j_(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gaI(),this,a,b)},
iZ(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gaI(),this,a,b)},
lS(a){var s=this.z,r=s.a
return s.b.$4(r,r.gaI(),this,a)},
gkX(){return this.a},
gl_(){return this.b},
gkY(){return this.c},
gkT(){return this.d},
gkU(){return this.e},
gkS(){return this.f},
gkq(){return this.r},
giL(){return this.w},
gki(){return this.x},
gkh(){return this.y},
gkN(){return this.z},
gkt(){return this.Q},
giB(){return this.as},
glQ(){return this.ax},
gkC(){return this.ay}}
A.t2.prototype={
$0(){return this.a.bX(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.t4.prototype={
$1(a){var s=this
return s.a.d7(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").V(this.c).i("1(2)")}}
A.t1.prototype={
$0(){return this.a.eU(this.b)},
$S:0}
A.t3.prototype={
$1(a){return this.a.eV(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.uH.prototype={
$0(){A.x1(this.a,this.b)},
$S:0}
A.la.prototype={
gkX(){return B.cu},
gl_(){return B.cw},
gkY(){return B.cv},
gkT(){return B.ct},
gkU(){return B.co},
gkS(){return B.cy},
gkq(){return B.cq},
giL(){return B.cx},
gki(){return B.cp},
gkh(){return B.cn},
gkN(){return B.cs},
gkt(){return B.cr},
giB(){return B.cm},
glQ(){return null},
gkC(){return $.zT()},
gkk(){var s=$.tU
return s==null?$.tU=new A.fe(this):s},
gaI(){var s=$.tU
return s==null?$.tU=new A.fe(this):s},
gbQ(){return this},
eU(a){var s,r,q
try{if(B.h===$.v){a.$0()
return}A.uI(null,null,this,a)}catch(q){s=A.E(q)
r=A.ae(q)
A.ig(s,r)}},
eV(a,b){var s,r,q
try{if(B.h===$.v){a.$1(b)
return}A.uK(null,null,this,a,b)}catch(q){s=A.E(q)
r=A.ae(q)
A.ig(s,r)}},
m1(a,b,c){var s,r,q
try{if(B.h===$.v){a.$2(b,c)
return}A.uJ(null,null,this,a,b,c)}catch(q){s=A.E(q)
r=A.ae(q)
A.ig(s,r)}},
iU(a,b){return new A.tW(this,a,b)},
lp(a,b,c){return new A.tY(this,a,c,b)},
eq(a){return new A.tV(this,a)},
h5(a,b){return new A.tX(this,a,b)},
h(a,b){return null},
eA(a,b){A.ig(a,b)},
lE(a,b){return A.yP(null,null,this,a,b)},
bX(a){if($.v===B.h)return a.$0()
return A.uI(null,null,this,a)},
d7(a,b){if($.v===B.h)return a.$1(b)
return A.uK(null,null,this,a,b)},
ju(a,b,c){if($.v===B.h)return a.$2(b,c)
return A.uJ(null,null,this,a,b,c)},
by(a){return a},
d3(a){return a},
eP(a){return a},
lC(a,b){return null},
cC(a){A.uL(null,null,this,a)},
j_(a,b){return A.vW(a,b)},
iZ(a,b){return A.xD(a,b)},
lS(a){A.wv(a)}}
A.tW.prototype={
$0(){return this.a.bX(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.tY.prototype={
$1(a){var s=this
return s.a.d7(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").V(this.c).i("1(2)")}}
A.tV.prototype={
$0(){return this.a.eU(this.b)},
$S:0}
A.tX.prototype={
$1(a){return this.a.eV(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.cC.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gY(a){return this.a!==0},
gS(){return new A.dX(this,A.o(this).i("dX<1>"))},
gb7(){var s=A.o(this)
return A.dC(new A.dX(this,s.i("dX<1>")),new A.tu(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kd(a)},
kd(a){var s=this.d
if(s==null)return!1
return this.bG(this.kv(s,a),a)>=0},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.y2(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.y2(q,b)
return r}else return this.ku(b)},
ku(a){var s,r,q=this.d
if(q==null)return null
s=this.kv(q,a)
r=this.bG(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.k_(s==null?q.b=A.w6():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.k_(r==null?q.c=A.w6():r,b,c)}else q.l1(b,c)},
l1(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.w6()
s=p.c5(a)
r=o[s]
if(r==null){A.w7(o,s,[a,b]);++p.a
p.e=null}else{q=p.bG(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a9(a,b){var s,r,q,p,o,n=this,m=n.ka()
for(s=m.length,r=A.o(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aw(n))}},
ka(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aG(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
k_(a,b,c){if(a[b]==null){++this.a
this.e=null}A.w7(a,b,c)},
c5(a){return J.aL(a)&1073741823},
kv(a,b){return a[this.c5(b)]},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.tu.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.o(s).y[1].a(r):r},
$S(){return A.o(this.a).i("2(1)")}}
A.d4.prototype={
c5(a){return A.lD(a)&1073741823},
bG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.hA.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.n6(b)},
j(a,b,c){this.n7(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.n5(a)},
c5(a){return this.r.$1(a)&1073741823},
bG(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.t0.prototype={
$1(a){return this.a.b(a)},
$S:18}
A.dX.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gY(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.kV(s,s.ka(),this.$ti.i("kV<1>"))},
D(a,b){return this.a.I(b)}}
A.kV.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aw(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.hL.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.n_(b)},
j(a,b,c){this.n1(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.mZ(a)},
P(a,b){if(!this.y.$1(b))return null
return this.n0(b)},
dN(a){return this.x.$1(a)&1073741823},
dO(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.tM.prototype={
$1(a){return this.a.b(a)},
$S:18}
A.cD.prototype={
gv(a){var s=this,r=new A.d6(s,s.r,A.o(s).i("d6<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gB(a){return this.a===0},
gY(a){return this.a!==0},
D(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.nO(b)
return r}},
nO(a){var s=this.d
if(s==null)return!1
return this.bG(s[this.c5(a)],a)>=0},
gC(a){var s=this.e
if(s==null)throw A.b(A.u("No elements"))
return s.a},
gW(a){var s=this.f
if(s==null)throw A.b(A.u("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.jZ(s==null?q.b=A.w8():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.jZ(r==null?q.c=A.w8():r,b)}else return q.no(b)},
no(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.w8()
s=q.c5(a)
r=p[s]
if(r==null)p[s]=[q.iG(a)]
else{if(q.bG(r,a)>=0)return!1
r.push(q.iG(a))}return!0},
P(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.kb(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.kb(s.c,b)
else return s.iK(b)},
iK(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c5(a)
r=n[s]
q=o.bG(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.kc(p)
return!0},
jZ(a,b){if(a[b]!=null)return!1
a[b]=this.iG(b)
return!0},
kb(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.kc(s)
delete a[b]
return!0},
iE(){this.r=this.r+1&1073741823},
iG(a){var s,r=this,q=new A.tN(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iE()
return q},
kc(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iE()},
c5(a){return J.aL(a)&1073741823},
bG(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.tN.prototype={}
A.d6.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aw(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.nK.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:13}
A.ok.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:13}
A.dA.prototype={
gv(a){var s=this
return new A.l0(s,s.a,s.c,s.$ti.i("l0<1>"))},
gk(a){return this.b},
aK(a){var s,r,q,p=this;++p.a
if(p.b===0)return
s=p.c
s.toString
r=s
do{q=r.b
q.toString
r.b=r.c=r.a=null
if(q!==s){r=q
continue}else break}while(!0)
p.c=null
p.b=0},
gC(a){var s
if(this.b===0)throw A.b(A.u("No such element"))
s=this.c
s.toString
return s},
gW(a){var s
if(this.b===0)throw A.b(A.u("No such element"))
s=this.c.c
s.toString
return s},
gaV(a){var s=this.b
if(s===0)throw A.b(A.u("No such element"))
if(s>1)throw A.b(A.u("Too many elements"))
s=this.c
s.toString
return s},
gB(a){return this.b===0},
fQ(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.u("LinkedListEntry is already in a LinkedList"));++q.a
b.a=q
s=q.b
if(s===0){b.b=b
q.c=b.c=b
q.b=s+1
return}r=a.c
r.toString
b.c=r
b.b=a
a.c=r.b=b
q.b=s+1},
iQ(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.l0.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.aw(s))
if(r.b!==0)r=s.e&&s.d===r.gC(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.aP.prototype={
geH(){var s=this.a
if(s==null||this===s.gC(0))return null
return this.c}}
A.B.prototype={
gv(a){return new A.a5(a,this.gk(a),A.bj(a).i("a5<B.E>"))},
a0(a,b){return this.h(a,b)},
gB(a){return this.gk(a)===0},
gY(a){return!this.gB(a)},
gC(a){if(this.gk(a)===0)throw A.b(A.aj())
return this.h(a,0)},
gW(a){if(this.gk(a)===0)throw A.b(A.aj())
return this.h(a,this.gk(a)-1)},
gaV(a){if(this.gk(a)===0)throw A.b(A.aj())
if(this.gk(a)>1)throw A.b(A.fO())
return this.h(a,0)},
D(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gk(a))throw A.b(A.aw(a))}return!1},
cW(a,b,c){var s,r,q=this.gk(a)
for(s=0;s<q;++s){r=this.h(a,s)
if(b.$1(r))return r
if(q!==this.gk(a))throw A.b(A.aw(a))}if(c!=null)return c.$0()
throw A.b(A.aj())},
ew(a,b){return this.cW(a,b,null)},
K(a,b){var s
if(this.gk(a)===0)return""
s=A.ql("",a,b)
return s.charCodeAt(0)==0?s:s},
jA(a,b){return new A.bv(a,b.i("bv<0>"))},
cr(a,b,c){return new A.ac(a,b,A.bj(a).i("@<B.E>").V(c).i("ac<1,2>"))},
aW(a,b){return A.bY(a,b,null,A.bj(a).i("B.E"))},
cv(a,b){return A.bY(a,0,A.bi(b,"count",t.S),A.bj(a).i("B.E"))},
jx(a){var s,r=A.ol(A.bj(a).i("B.E"))
for(s=0;s<this.gk(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gk(a)
this.sk(a,s+1)
this.j(a,s,b)},
h6(a,b){return new A.bl(a,A.bj(a).i("@<B.E>").V(b).i("bl<1,2>"))},
df(a,b){var s=b==null?A.Eo():b
A.k4(a,0,this.gk(a)-1,s)},
O(a,b,c){var s,r=this.gk(a)
if(c==null)c=r
A.bd(b,c,r)
s=A.Q(this.f2(a,b,c),A.bj(a).i("B.E"))
return s},
aR(a,b){return this.O(a,b,null)},
f2(a,b,c){A.bd(b,c,this.gk(a))
return A.bY(a,b,c,A.bj(a).i("B.E"))},
he(a,b,c,d){var s
A.bd(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
a6(a,b,c,d,e){var s,r,q,p,o
A.bd(b,c,this.gk(a))
s=c-b
if(s===0)return
A.aQ(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.lM(d,e).bk(0,!1)
r=0}p=J.J(q)
if(r+s>p.gk(q))throw A.b(A.xe())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aa(a,b,c,d){return this.a6(a,b,c,d,0)},
cE(a,b,c){var s,r
if(t.j.b(c))this.aa(a,b,b+c.length,c)
else for(s=J.L(c);s.m();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.of(a,"[","]")},
$iC:1,
$in:1,
$iq:1}
A.U.prototype={
a9(a,b){var s,r,q,p
for(s=J.L(this.gS()),r=A.o(this).i("U.V");s.m();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gbP(){return J.av(this.gS(),new A.oV(this),A.o(this).i("V<U.K,U.V>"))},
cs(a,b,c,d){var s,r,q,p,o,n=A.I(c,d)
for(s=J.L(this.gS()),r=A.o(this).i("U.V");s.m();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.Ag(this.gS(),a)},
gk(a){return J.ar(this.gS())},
gB(a){return J.ci(this.gS())},
gY(a){return J.fp(this.gS())},
gb7(){return new A.hM(this,A.o(this).i("hM<U.K,U.V>"))},
l(a){return A.oW(this)},
$iN:1}
A.oV.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.o(s).i("U.V").a(r)
return new A.V(a,r,A.o(s).i("V<U.K,U.V>"))},
$S(){return A.o(this.a).i("V<U.K,U.V>(U.K)")}}
A.oX.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:43}
A.hM.prototype={
gk(a){var s=this.a
return s.gk(s)},
gB(a){var s=this.a
return s.gB(s)},
gY(a){var s=this.a
return s.gY(s)},
gC(a){var s=this.a
s=s.h(0,J.bD(s.gS()))
return s==null?this.$ti.y[1].a(s):s},
gaV(a){var s=this.a
s=s.h(0,J.lL(s.gS()))
return s==null?this.$ti.y[1].a(s):s},
gW(a){var s=this.a
s=s.h(0,J.vp(s.gS()))
return s==null?this.$ti.y[1].a(s):s},
gv(a){var s=this.a
return new A.l2(J.L(s.gS()),s,this.$ti.i("l2<1,2>"))}}
A.l2.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.lp.prototype={}
A.h_.prototype={
h(a,b){return this.a.h(0,b)},
I(a){return this.a.I(a)},
a9(a,b){this.a.a9(0,b)},
gB(a){var s=this.a
return s.gB(s)},
gY(a){var s=this.a
return s.gY(s)},
gk(a){var s=this.a
return s.gk(s)},
gS(){return this.a.gS()},
l(a){return this.a.l(0)},
gb7(){return this.a.gb7()},
gbP(){return this.a.gbP()},
cs(a,b,c,d){return this.a.cs(0,b,c,d)},
$iN:1}
A.eL.prototype={}
A.fU.prototype={
gv(a){var s=this
return new A.l1(s,s.c,s.d,s.b,s.$ti.i("l1<1>"))},
gB(a){return this.b===this.c},
gk(a){return(this.c-this.b&this.a.length-1)>>>0},
gC(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aj())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
gW(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aj())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gaV(a){var s,r=this
if(r.b===r.c)throw A.b(A.aj())
if(r.gk(0)>1)throw A.b(A.fO())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a0(a,b){var s,r=this
A.AX(b,r.gk(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
P(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.iK(s);++r.d
return!0}return!1},
l(a){return A.of(this,"{","}")},
iK(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.l1.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a
if(r.c!==q.d)A.w(A.aw(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.bV.prototype={
gB(a){return this.gk(this)===0},
gY(a){return this.gk(this)!==0},
G(a,b){var s
for(s=J.L(b);s.m();)this.t(0,s.gn())},
cr(a,b,c){return new A.du(this,b,A.o(this).i("@<1>").V(c).i("du<1,2>"))},
gaV(a){var s,r=this
if(r.gk(r)>1)throw A.b(A.fO())
s=r.gv(r)
if(!s.m())throw A.b(A.aj())
return s.gn()},
l(a){return A.of(this,"{","}")},
cv(a,b){return A.xC(this,b,A.o(this).c)},
aW(a,b){return A.xz(this,b,A.o(this).c)},
gC(a){var s=this.gv(this)
if(!s.m())throw A.b(A.aj())
return s.gn()},
gW(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.aj())
do s=r.gn()
while(r.m())
return s},
a0(a,b){var s,r
A.aQ(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.j8(b,b-r,this,null,"index"))},
$iC:1,
$in:1,
$icT:1}
A.hV.prototype={}
A.i4.prototype={}
A.kZ.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.qr(b):s}},
gk(a){return this.b==null?this.c.a:this.e4().length},
gB(a){return this.gk(0)===0},
gY(a){return this.gk(0)>0},
gS(){if(this.b==null){var s=this.c
return new A.ai(s,A.o(s).i("ai<1>"))}return new A.l_(this)},
gb7(){var s,r=this
if(r.b==null){s=r.c
return new A.aO(s,A.o(s).i("aO<2>"))}return A.dC(r.e4(),new A.tI(r),t.N,t.z)},
I(a){if(this.b==null)return this.c.I(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
a9(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a9(0,b)
s=o.e4()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.uA(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aw(o))}},
e4(){var s=this.c
if(s==null)s=this.c=A.m(Object.keys(this.a),t.s)
return s},
qr(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.uA(this.a[a])
return this.b[a]=s}}
A.tI.prototype={
$1(a){return this.a.h(0,a)},
$S:54}
A.l_.prototype={
gk(a){return this.a.gk(0)},
a0(a,b){var s=this.a
return s.b==null?s.gS().a0(0,b):s.e4()[b]},
gv(a){var s=this.a
if(s.b==null){s=s.gS()
s=s.gv(s)}else{s=s.e4()
s=new J.eb(s,s.length,A.al(s).i("eb<1>"))}return s},
D(a,b){return this.a.I(b)}}
A.tG.prototype={
p(){var s,r,q,p=this,o="Stream is already closed"
p.n8()
s=p.a
r=s.a
s.a=""
q=A.yL(r.charCodeAt(0)==0?r:r,p.b)
r=p.c.a
if((r.e&2)!==0)A.w(A.u(o))
r.bC(q)
if((r.e&2)!==0)A.w(A.u(o))
r.cH()}}
A.up.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:38}
A.uo.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:38}
A.ip.prototype={
gaB(){return"us-ascii"},
j5(a){return B.aN.u(a)}}
A.lo.prototype={
u(a){var s,r,q,p=A.bd(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aU(a,"string","Contains invalid characters."))
o[r]=q}return o},
bB(a){return new A.ug(new A.eS(a),this.a)}}
A.iq.prototype={}
A.ug.prototype={
p(){this.a.a.p()},
bs(a,b,c,d){var s,r,q,p
A.bd(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.P("Source contains invalid character with code point: "+q+".",null))}s=new A.bQ(a)
p=this.a.a
p.t(0,s.O(s,b,c))
if(d)p.p()}}
A.lW.prototype={
gj6(){return B.aR},
uC(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bd(a1,a2,a0.length)
s=$.wC()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.v5(a0.charCodeAt(l))
h=A.v5(a0.charCodeAt(l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){f=s[g]
if(f>=0){g=u.U.charCodeAt(f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.O("")
e=p}else e=p
e.a+=B.a.q(a0,q,r)
d=A.b7(k)
e.a+=d
q=l
continue}}throw A.b(A.Y("Invalid base64 data",a0,r))}if(p!=null){e=B.a.q(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.wO(a0,n,a2,o,m,d)
else{c=B.b.au(d-1,4)+1
if(c===1)throw A.b(A.Y(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.d4(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.wO(a0,n,a2,o,m,b)
else{c=B.b.au(b,4)
if(c===1)throw A.b(A.Y(a,a0,a2))
if(c>1)a0=B.a.d4(a0,a2,a2,c===2?"==":"=")}return a0}}
A.iv.prototype={
u(a){var s=a.length
if(s===0)return""
s=new A.kG(u.U).lB(a,0,s,!0)
s.toString
return A.cX(s,0,null)},
bB(a){return new A.rj(a,new A.rA(u.U))}}
A.kG.prototype={
lu(a){return new Uint8Array(a)},
lB(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.b.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.lu(o)
r.a=A.Cb(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.rA.prototype={
lu(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.dk(B.d.gaA(s),s.byteOffset,a)}}
A.rv.prototype={
t(a,b){this.kf(b,0,J.ar(b),!1)},
p(){this.kf(B.bx,0,0,!0)}}
A.rj.prototype={
kf(a,b,c,d){var s,r,q="Stream is already closed",p=this.b.lB(a,b,c,d)
if(p!=null){s=A.cX(p,0,null)
r=this.a.a
if((r.e&2)!==0)A.w(A.u(q))
r.bC(s)}if(d){r=this.a.a
if((r.e&2)!==0)A.w(A.u(q))
r.cH()}}}
A.iu.prototype={
u(a){var s,r,q=A.bd(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.kF()
r=s.j2(a,0,q)
r.toString
s.iX(a,q)
return r},
bB(a){return new A.ru(a,new A.kF())}}
A.kF.prototype={
j2(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.xQ(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.C8(a,b,c,q)
r.a=A.Ca(a,b,c,s,0,r.a)
return s},
iX(a,b){var s=this.a
if(s<-1)throw A.b(A.Y("Missing padding character",a,b))
if(s>0)throw A.b(A.Y("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.ru.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.j2(b,0,r)
if(s!=null){r=this.a.a
if((r.e&2)!==0)A.w(A.u("Stream is already closed"))
r.bC(s)}},
p(){this.b.iX(null,null)
var s=this.a.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.cH()},
bs(a,b,c,d){var s,r,q,p="Stream is already closed"
A.bd(b,c,a.length)
if(b===c)return
s=this.b
r=s.j2(a,b,c)
if(r!=null){q=this.a.a
if((q.e&2)!==0)A.w(A.u(p))
q.bC(r)}if(d){s.iX(a,c)
s=this.a.a
if((s.e&2)!==0)A.w(A.u(p))
s.cH()}}}
A.m0.prototype={}
A.eS.prototype={
t(a,b){this.a.t(0,b)},
p(){this.a.p()}}
A.kJ.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.J(b)
if(n.gk(b)>p.length-o){p=q.b
s=n.gk(b)+p.length-1
s|=B.b.a4(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.d.aa(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.d.aa(p,o,o+n.gk(b),b)
q.c=q.c+n.gk(b)},
p(){this.a.$1(B.d.O(this.b,0,this.c))}}
A.iG.prototype={}
A.lg.prototype={
t(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.dU.prototype={
t(a,b){this.b.t(0,b)},
bN(a,b){A.bi(a,"error",t.K)
this.a.bN(a,b)},
p(){this.b.p()},
$ib9:1}
A.iH.prototype={}
A.ao.prototype={
bB(a){throw A.b(A.a0("This converter does not support chunked conversions: "+this.l(0)))},
rD(a){return new A.hx(new A.mG(this),a,t.fM.V(A.o(this).i("ao.T")).i("hx<1,2>"))}}
A.mG.prototype={
$1(a){return new A.dU(a,this.a.bB(a))},
$S:81}
A.dw.prototype={}
A.fT.prototype={
l(a){var s=A.iZ(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.jg.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.oi.prototype={
an(a,b){var s=A.yL(a,this.grS().a)
return s},
a8(a,b){var s=A.Cu(a,this.gj6().b,null)
return s},
gj6(){return B.bj},
grS(){return B.bi}}
A.ji.prototype={
bB(a){return new A.tH(null,this.b,new A.lj(a))}}
A.tH.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.u("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.O("")
q=new A.ub(r,s)
A.y4(b,q,p.b,p.a)
if(r.a.length!==0)q.ih()
s.p()},
p(){}}
A.jh.prototype={
bB(a){return new A.tG(this.a,a,new A.O(""))}}
A.tK.prototype={
m8(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.hR(a,s,r)
s=r+1
n.ac(92)
n.ac(117)
n.ac(100)
p=q>>>8&15
n.ac(p<10?48+p:87+p)
p=q>>>4&15
n.ac(p<10?48+p:87+p)
p=q&15
n.ac(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.hR(a,s,r)
s=r+1
n.ac(92)
switch(q){case 8:n.ac(98)
break
case 9:n.ac(116)
break
case 10:n.ac(110)
break
case 12:n.ac(102)
break
case 13:n.ac(114)
break
default:n.ac(117)
n.ac(48)
n.ac(48)
p=q>>>4&15
n.ac(p<10?48+p:87+p)
p=q&15
n.ac(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.hR(a,s,r)
s=r+1
n.ac(92)
n.ac(q)}}if(s===0)n.aP(a)
else if(s<m)n.hR(a,s,m)},
i5(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.jg(a,null))}s.push(a)},
hQ(a){var s,r,q,p,o=this
if(o.m7(a))return
o.i5(a)
try{s=o.b.$1(a)
if(!o.m7(s)){q=A.xi(a,null,o.gkK())
throw A.b(q)}o.a.pop()}catch(p){r=A.E(p)
q=A.xi(a,r,o.gkK())
throw A.b(q)}},
m7(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.vB(a)
return!0}else if(a===!0){r.aP("true")
return!0}else if(a===!1){r.aP("false")
return!0}else if(a==null){r.aP("null")
return!0}else if(typeof a=="string"){r.aP('"')
r.m8(a)
r.aP('"')
return!0}else if(t.j.b(a)){r.i5(a)
r.vz(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.i5(a)
s=r.vA(a)
r.a.pop()
return s}else return!1},
vz(a){var s,r,q=this
q.aP("[")
s=J.J(a)
if(s.gY(a)){q.hQ(s.h(a,0))
for(r=1;r<s.gk(a);++r){q.aP(",")
q.hQ(s.h(a,r))}}q.aP("]")},
vA(a){var s,r,q,p,o=this,n={}
if(a.gB(a)){o.aP("{}")
return!0}s=a.gk(a)*2
r=A.aG(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a9(0,new A.tL(n,r))
if(!n.b)return!1
o.aP("{")
for(p='"';q<s;q+=2,p=',"'){o.aP(p)
o.m8(A.t(r[q]))
o.aP('":')
o.hQ(r[q+1])}o.aP("}")
return!0}}
A.tL.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:43}
A.tJ.prototype={
gkK(){var s=this.c
return s instanceof A.O?s.l(0):null},
vB(a){this.c.hP(B.u.l(a))},
aP(a){this.c.hP(a)},
hR(a,b,c){this.c.hP(B.a.q(a,b,c))},
ac(a){this.c.ac(a)}}
A.jj.prototype={
gaB(){return"iso-8859-1"},
j5(a){return B.bk.u(a)}}
A.jk.prototype={}
A.kf.prototype={
t(a,b){this.bs(b,0,b.length,!1)}}
A.ub.prototype={
ac(a){var s=this.a,r=A.b7(a)
if((s.a+=r).length>16)this.ih()},
hP(a){if(this.a.a.length!==0)this.ih()
this.b.t(0,a)},
ih(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.hY.prototype={
p(){},
bs(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.b7(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
t(a,b){this.a.a+=b}}
A.lj.prototype={
t(a,b){var s=this.a.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.bC(b)},
bs(a,b,c,d){var s="Stream is already closed",r=b===0&&c===a.length,q=this.a.a
if(r){if((q.e&2)!==0)A.w(A.u(s))
q.bC(a)}else{r=B.a.q(a,b,c)
if((q.e&2)!==0)A.w(A.u(s))
q.bC(r)}if(d){if((q.e&2)!==0)A.w(A.u(s))
q.cH()}},
p(){var s=this.a.a
if((s.e&2)!==0)A.w(A.u("Stream is already closed"))
s.cH()}}
A.un.prototype={
p(){var s,r,q,p=this.c
this.a.tN(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bs(q,0,q.length,!0)}else r.p()},
t(a,b){this.bs(b,0,J.ar(b),!1)},
bs(a,b,c,d){var s,r=this.c,q=this.a.c7(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bs(s,0,s.length,!1)
r.a=""
return}}}
A.ku.prototype={
gaB(){return"utf-8"},
rP(a,b){return new A.cd((b===!0?B.ci:B.ah).a).c7(a,0,null,!0)},
j1(a){return this.rP(a,null)},
j5(a){return B.f.u(a)}}
A.kv.prototype={
u(a){var s,r,q=A.bd(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.lt(s)
if(r.ks(a,0,q)!==q)r.fY()
return B.d.O(s,0,r.b)},
bB(a){return new A.uq(new A.eS(a),new Uint8Array(1024))}}
A.lt.prototype={
fY(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.D(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
lh(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.D(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.fY()
return!1}},
ks(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.D(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.lh(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.fY()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.D(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.D(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.uq.prototype={
p(){if(this.a!==0){this.bs("",0,0,!0)
return}this.d.a.p()},
bs(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.lh(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.ks(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.fY()
else n.a=a.charCodeAt(b);++b}s.t(0,B.d.O(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.hq.prototype={
bB(a){return new A.un(new A.cd(this.a),new A.lj(a),new A.O(""))}}
A.cd.prototype={
c7(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bd(b,c,J.ar(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.CX(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.CW(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.i9(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.ys(p)
m.b=0
throw A.b(A.Y(n,a,q+m.c))}return o},
i9(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.M(b+c,2)
r=q.i9(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.i9(a,s,c,d)}return q.rR(a,b,c,d)},
tN(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.b7(65533)
a.a+=s}else throw A.b(A.Y(A.ys(77),null,null))},
rR(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.O(""),g=b+1,f=a[b]
$label0$0:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.b7(i)
h.a+=q
if(g===c)break $label0$0
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.b7(k)
h.a+=q
break
case 65:q=A.b7(k)
h.a+=q;--g
break
default:q=A.b7(k)
h.a=(h.a+=q)+q
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break $label0$0
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){for(;;){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.b7(a[m])
h.a+=q}else{q=A.cX(a,g,o)
h.a+=q}if(o===c)break $label0$0
g=p}else g=p}if(d&&j>32)if(s){s=A.b7(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.lv.prototype={}
A.az.prototype={
bA(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bf(p,r)
return new A.az(p===0?!1:s,r,p)},
nW(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.ch()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bf(s,q)
return new A.az(n===0?!1:o,q,n)},
nY(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ch()
s=k-a
if(s<=0)return l.a?$.wE():$.ch()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bf(s,q)
m=new A.az(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.f8(0,$.fo())
return m},
c_(a,b){var s,r,q,p,o=this,n=o.c
if(n===0)return o
s=b/16|0
if(B.b.au(b,16)===0)return o.nW(s)
r=n+s+1
q=new Uint16Array(r)
A.xX(o.b,n,b,q)
n=o.a
p=A.bf(r,q)
return new A.az(p===0?!1:n,q,p)},
e1(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.P("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.b.M(b,16)
q=B.b.au(b,16)
if(q===0)return j.nY(r)
p=s-r
if(p<=0)return j.a?$.wE():$.ch()
o=j.b
n=new Uint16Array(p)
A.Cg(o,s,b,n)
s=j.a
m=A.bf(p,n)
l=new A.az(m===0?!1:s,n,m)
if(s){if((o[r]&B.b.c_(1,q)-1)>>>0!==0)return l.f8(0,$.fo())
for(k=0;k<r;++k)if(o[k]!==0)return l.f8(0,$.fo())}return l},
T(a,b){var s,r=this.a
if(r===b.a){s=A.rx(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
i2(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.i2(p,b)
if(o===0)return $.ch()
if(n===0)return p.a===b?p:p.bA(0)
s=o+1
r=new Uint16Array(s)
A.Cc(p.b,o,a.b,n,r)
q=A.bf(s,r)
return new A.az(q===0?!1:b,r,q)},
f9(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ch()
s=a.c
if(s===0)return p.a===b?p:p.bA(0)
r=new Uint16Array(o)
A.kH(p.b,o,a.b,s,r)
q=A.bf(o,r)
return new A.az(q===0?!1:b,r,q)},
f0(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.i2(b,r)
if(A.rx(q.b,p,b.b,s)>=0)return q.f9(b,r)
return b.f9(q,!r)},
f8(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bA(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.i2(b,r)
if(A.rx(q.b,p,b.b,s)>=0)return q.f9(b,r)
return b.f9(q,!r)},
aU(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ch()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.xY(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bf(s,p)
return new A.az(m===0?!1:n,p,m)},
nV(a){var s,r,q,p
if(this.c<a.c)return $.ch()
this.kn(a)
s=$.w1.bc()-$.hw.bc()
r=A.w3($.w0.bc(),$.hw.bc(),$.w1.bc(),s)
q=A.bf(s,r)
p=new A.az(!1,r,q)
return this.a!==a.a&&q>0?p.bA(0):p},
qI(a){var s,r,q,p=this
if(p.c<a.c)return p
p.kn(a)
s=A.w3($.w0.bc(),0,$.hw.bc(),$.hw.bc())
r=A.bf($.hw.bc(),s)
q=new A.az(!1,s,r)
if($.w2.bc()>0)q=q.e1(0,$.w2.bc())
return p.a&&q.c>0?q.bA(0):q},
kn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.xU&&a.c===$.xW&&c.b===$.xT&&a.b===$.xV)return
s=a.b
r=a.c
q=16-B.b.glq(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.xS(s,r,q,p)
n=new Uint16Array(b+5)
m=A.xS(c.b,b,q,n)}else{n=A.w3(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.w4(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.rx(n,m,j,i)>=0){g&2&&A.D(n)
n[m]=1
A.kH(n,h,j,i,n)}else{g&2&&A.D(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.kH(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.Cd(l,n,e);--k
A.xY(d,f,0,n,k,o)
if(n[e]<d){i=A.w4(f,o,k,j)
A.kH(n,h,j,i,n)
while(--d,n[e]<d)A.kH(n,h,j,i,n)}--e}$.xT=c.b
$.xU=b
$.xV=s
$.xW=r
$.w0.b=n
$.w1.b=h
$.hw.b=o
$.w2.b=q},
gJ(a){var s,r,q,p=new A.ry(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.rz().$1(s)},
X(a,b){if(b==null)return!1
return b instanceof A.az&&this.T(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.b.l(-n.b[0])
return B.b.l(n.b[0])}s=A.m([],t.s)
m=n.a
r=m?n.bA(0):n
while(r.c>1){q=$.wD()
if(q.c===0)A.w(B.aU)
p=r.qI(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.nV(q)}s.push(B.b.l(r.b[0]))
if(m)s.push("-")
return new A.dJ(s,t.hF).d_(0)},
$iah:1}
A.ry.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:83}
A.rz.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:90}
A.kT.prototype={
ln(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
lz(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.um.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.L(b),r=this.a;s.m();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.S(b)}},
$S:41}
A.nf.prototype={
$0(){var s=this
return A.w(A.P("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:28}
A.b2.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.b2&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.er(this.a,this.b,B.o,B.o)},
T(a,b){var s=B.b.T(this.a,b.a)
if(s!==0)return s
return B.b.T(this.b,b.b)},
vi(){var s=this
if(s.c)return s
return new A.b2(s.a,s.b,!0)},
l(a){var s=this,r=A.AF(A.vQ(s)),q=A.iR(A.vO(s)),p=A.iR(A.pH(s)),o=A.iR(A.vM(s)),n=A.iR(A.vN(s)),m=A.iR(A.vP(s)),l=A.wZ(A.xr(s)),k=s.b,j=k===0?"":A.wZ(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iah:1}
A.ax.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.ax&&this.a===b.a},
gJ(a){return B.b.gJ(this.a)},
T(a,b){return B.b.T(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.b.M(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.b.M(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.b.M(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.lP(B.b.l(n%1e6),6,"0")},
$iah:1}
A.t7.prototype={
l(a){return this.ag()}}
A.a4.prototype={
gc0(){return A.Bu(this)}}
A.ir.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iZ(s)
return"Assertion failed"}}
A.cz.prototype={}
A.bk.prototype={
gig(){return"Invalid argument"+(!this.a?"(s)":"")},
gie(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gig()+q+o
if(!s.a)return n
return n+s.gie()+": "+A.iZ(s.gjh())},
gjh(){return this.b}}
A.cr.prototype={
gjh(){return this.b},
gig(){return"RangeError"},
gie(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.fL.prototype={
gjh(){return this.b},
gig(){return"RangeError"},
gie(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$icr:1,
gk(a){return this.f}}
A.cb.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.km.prototype={
l(a){return"UnimplementedError: "+this.a},
$icb:1}
A.be.prototype={
l(a){return"Bad state: "+this.a}}
A.iI.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iZ(s)+"."}}
A.jF.prototype={
l(a){return"Out of Memory"},
gc0(){return null},
$ia4:1}
A.hl.prototype={
l(a){return"Stack Overflow"},
gc0(){return null},
$ia4:1}
A.kS.prototype={
l(a){return"Exception: "+this.a},
$iG:1}
A.bc.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.q(e,0,75)+"..."
return g+"\n"+e}for(r=1,q=0,p=!1,o=0;o<f;++o){n=e.charCodeAt(o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}g=r>1?g+(" (at line "+r+", character "+(f-q+1)+")\n"):g+(" (at character "+(f+1)+")\n")
m=e.length
for(o=f;o<m;++o){n=e.charCodeAt(o)
if(n===10||n===13){m=o
break}}l=""
if(m-q>78){k="..."
if(f-q<75){j=q+75
i=q}else{if(m-f<75){i=m-75
j=m
k=""}else{i=f-36
j=f+36}l="..."}}else{j=m
i=q
k=""}return g+l+B.a.q(e,i,j)+k+"\n"+B.a.aU(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.p(f)+")"):g},
$iG:1,
gjl(){return this.a},
gf5(){return this.b},
gae(){return this.c}}
A.ja.prototype={
gc0(){return null},
l(a){return"IntegerDivisionByZeroException"},
$ia4:1,
$icb:1,
$iG:1}
A.n.prototype={
h6(a,b){return A.iD(this,A.o(this).i("n.E"),b)},
cr(a,b,c){return A.dC(this,b,A.o(this).i("n.E"),c)},
jA(a,b){return new A.bv(this,b.i("bv<0>"))},
K(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.an(q.gn())
if(!q.m())return s
if(b.length===0){r=s
do r+=J.an(q.gn())
while(q.m())}else{r=s
do r=r+b+J.an(q.gn())
while(q.m())}return r.charCodeAt(0)==0?r:r},
bk(a,b){var s=A.o(this).i("n.E")
if(b)s=A.Q(this,s)
else{s=A.Q(this,s)
s.$flags=1
s=s}return s},
d8(a){return this.bk(0,!0)},
gk(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gB(a){return!this.gv(this).m()},
gY(a){return!this.gB(this)},
cv(a,b){return A.xC(this,b,A.o(this).i("n.E"))},
aW(a,b){return A.xz(this,b,A.o(this).i("n.E"))},
gC(a){var s=this.gv(this)
if(!s.m())throw A.b(A.aj())
return s.gn()},
gW(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.aj())
do s=r.gn()
while(r.m())
return s},
gaV(a){var s,r=this.gv(this)
if(!r.m())throw A.b(A.aj())
s=r.gn()
if(r.m())throw A.b(A.fO())
return s},
cW(a,b,c){var s,r
for(s=this.gv(this);s.m();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
ew(a,b){return this.cW(0,b,null)},
a0(a,b){var s,r
A.aQ(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.b(A.j8(b,b-r,this,null,"index"))},
l(a){return A.AY(this,"(",")")}}
A.V.prototype={
l(a){return"MapEntry("+A.p(this.a)+": "+A.p(this.b)+")"}}
A.T.prototype={
gJ(a){return A.j.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
X(a,b){return this===b},
gJ(a){return A.hc(this)},
l(a){return"Instance of '"+A.jN(this)+"'"},
gab(a){return A.ij(this)},
toString(){return this.l(this)}}
A.ll.prototype={
l(a){return""},
$ias:1}
A.kb.prototype={
gtt(){var s=this.glA()
if($.lG()===1e6)return s
return s*1000},
gtu(){var s=this.glA()
if($.lG()===1000)return s
return B.b.M(s,1000)},
aF(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.jO.$0()-r)
s.b=null}},
glA(){var s=this.b
if(s==null)s=$.jO.$0()
return s-this.a}}
A.O.prototype={
gk(a){return this.a.length},
hP(a){var s=A.p(a)
this.a+=s},
ac(a){var s=A.b7(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.qL.prototype={
$2(a,b){throw A.b(A.Y("Illegal IPv6 address, "+a,this.a,b))},
$S:172}
A.i5.prototype={
gl5(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.p(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
guN(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.a7(s,1)
r=s.length===0?B.m:A.cP(new A.ac(A.m(s.split("/"),t.s),A.Et(),t.iZ),t.N)
q.x!==$&&A.vj()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gl5())
r.y!==$&&A.vj()
r.y=s
q=s}return q},
gjz(){return this.b},
gcY(){var s=this.c
if(s==null)return""
if(B.a.L(s,"[")&&!B.a.a3(s,"v",1))return B.a.q(s,1,s.length-1)
return s},
geG(){var s=this.d
return s==null?A.yh(this.a):s},
geL(){var s=this.f
return s==null?"":s},
ghg(){var s=this.r
return s==null?"":s},
uh(a){var s=this.a
if(a.length!==s.length)return!1
return A.Da(a,s,0)>=0},
eS(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.wc(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.ui(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.L(n,"/"))n="/"+n
l=n
if(a!=null)k=A.uj(null,0,0,a)
else k=j.f
return A.i6(b,q,o,p,l,k,j.r)},
lZ(a){return this.eS(null,a)},
lY(a){return this.eS(a,null)},
kE(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.a3(b,"../",r);){r+=3;++s}q=B.a.dP(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.hs(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.d4(a,q+1,null,B.a.a7(b,r-3*s))},
bh(a){return this.eT(A.kt(a))},
eT(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaE().length!==0)return a
else{s=h.a
if(a.gjc()){r=a.lZ(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.glF())m=a.ghp()?a.geL():h.f
else{l=A.CV(h,n)
if(l>0){k=B.a.q(n,0,l)
n=a.gjb()?k+A.e0(a.gb4()):k+A.e0(h.kE(B.a.a7(n,k.length),a.gb4()))}else if(a.gjb())n=A.e0(a.gb4())
else if(n.length===0)if(p==null)n=s.length===0?a.gb4():A.e0(a.gb4())
else n=A.e0("/"+a.gb4())
else{j=h.kE(n,a.gb4())
r=s.length===0
if(!r||p!=null||B.a.L(n,"/"))n=A.e0(j)
else n=A.we(j,!r||p!=null)}m=a.ghp()?a.geL():null}}}i=a.gjd()?a.ghg():null
return A.i6(s,q,p,o,n,m,i)},
gjc(){return this.c!=null},
ghp(){return this.f!=null},
gjd(){return this.r!=null},
glF(){return this.e.length===0},
gjb(){return B.a.L(this.e,"/")},
jw(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.a0("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.a0(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.a0(u.A))
if(r.c!=null&&r.gcY()!=="")A.w(A.a0(u.Q))
s=r.guN()
A.CO(s,!1)
q=A.ql(B.a.L(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gl5()},
X(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gaE())if(p.c!=null===b.gjc())if(p.b===b.gjz())if(p.gcY()===b.gcY())if(p.geG()===b.geG())if(p.e===b.gb4()){r=p.f
q=r==null
if(!q===b.ghp()){if(q)r=""
if(r===b.geL()){r=p.r
q=r==null
if(!q===b.gjd()){s=q?"":r
s=s===b.ghg()}}}}return s},
$ikr:1,
gaE(){return this.a},
gb4(){return this.e}}
A.ul.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.ls(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.ls(1,b,B.k,!0)
s.a+=r}},
$S:111}
A.uk.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.L(b),r=this.a;s.m();)r.$2(a,s.gn())},
$S:41}
A.qK.prototype={
gm6(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.bS(m,"?",s)
q=m.length
if(r>=0){p=A.i7(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.kN("data","",n,n,A.i7(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bM.prototype={
gjc(){return this.c>0},
gje(){return this.c>0&&this.d+1<this.e},
ghp(){return this.f<this.r},
gjd(){return this.r<this.a.length},
gjb(){return B.a.a3(this.a,"/",this.e)},
glF(){return this.e===this.f},
gaE(){var s=this.w
return s==null?this.w=this.nM():s},
nM(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.L(r.a,"http"))return"http"
if(q===5&&B.a.L(r.a,"https"))return"https"
if(s&&B.a.L(r.a,"file"))return"file"
if(q===7&&B.a.L(r.a,"package"))return"package"
return B.a.q(r.a,0,q)},
gjz(){var s=this.c,r=this.b+3
return s>r?B.a.q(this.a,r,s-1):""},
gcY(){var s=this.c
return s>0?B.a.q(this.a,s,this.d):""},
geG(){var s,r=this
if(r.gje())return A.aq(B.a.q(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.L(r.a,"http"))return 80
if(s===5&&B.a.L(r.a,"https"))return 443
return 0},
gb4(){return B.a.q(this.a,this.e,this.f)},
geL(){var s=this.f,r=this.r
return s<r?B.a.q(this.a,s+1,r):""},
ghg(){var s=this.r,r=this.a
return s<r.length?B.a.a7(r,s+1):""},
kz(a){var s=this.d+1
return s+a.length===this.e&&B.a.a3(this.a,a,s)},
v9(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bM(B.a.q(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
eS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.wc(b,0,b.length)
s=!(h.b===b.length&&B.a.L(h.a,b))}else{b=h.gaE()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.q(h.a,h.b+3,q):""
o=h.gje()?h.geG():g
if(s)o=A.ui(o,b)
q=h.c
if(q>0)n=B.a.q(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.q(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.L(l,"/"))l="/"+l
if(a!=null)j=A.uj(g,0,0,a)
else{k=h.r
j=m<k?B.a.q(q,m+1,k):g}m=h.r
i=m<q.length?B.a.a7(q,m+1):g
return A.i6(b,p,n,o,l,j,i)},
lZ(a){return this.eS(null,a)},
lY(a){return this.eS(a,null)},
bh(a){return this.eT(A.kt(a))},
eT(a){if(a instanceof A.bM)return this.r0(this,a)
return this.l7().eT(a)},
r0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.L(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.L(a.a,"http"))p=!b.kz("80")
else p=!(r===5&&B.a.L(a.a,"https"))||!b.kz("443")
if(p){o=r+1
return new A.bM(B.a.q(a.a,0,o)+B.a.a7(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.l7().eT(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bM(B.a.q(a.a,0,r)+B.a.a7(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bM(B.a.q(a.a,0,r)+B.a.a7(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.v9()}s=b.a
if(B.a.a3(s,"/",n)){m=a.e
l=A.ya(this)
k=l>0?l:m
o=k-n
return new A.bM(B.a.q(a.a,0,k)+B.a.a7(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a3(s,"../",n))n+=3
o=j-n+1
return new A.bM(B.a.q(a.a,0,j)+"/"+B.a.a7(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.ya(this)
if(l>=0)g=l
else for(g=j;B.a.a3(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.a3(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.a3(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bM(B.a.q(h,0,i)+d+B.a.a7(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
jw(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.L(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.a0("Cannot extract a file path from a "+r.gaE()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.a0(u.z))
throw A.b(A.a0(u.A))}if(r.c<r.d)A.w(A.a0(u.Q))
q=B.a.q(s,r.e,q)
return q},
gJ(a){var s=this.x
return s==null?this.x=B.a.gJ(this.a):s},
X(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
l7(){var s=this,r=null,q=s.gaE(),p=s.gjz(),o=s.c>0?s.gcY():r,n=s.gje()?s.geG():r,m=s.a,l=s.f,k=B.a.q(m,s.e,l),j=s.r
l=l<j?s.geL():r
return A.i6(q,p,o,n,k,l,j<m.length?s.ghg():r)},
l(a){return this.a},
$ikr:1}
A.kN.prototype={}
A.j0.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.p(this.b)}}
A.jC.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iG:1}
A.nE.prototype={
$2(a,b){this.a.bY(new A.nC(a),new A.nD(b),t.X)},
$S:113}
A.nC.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:124}
A.nD.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.El(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.d9.b(a))A.w("Attempting to box non-Dart object.")
s={}
s[$.A_()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:9}
A.va.prototype={
$1(a){var s,r,q,p
if(A.yK(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.L(a.gS());s.m();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.U.b(a)){p=[]
s.j(0,a,p)
B.c.G(p,J.av(a,this,t.z))
return p}else return a},
$S:20}
A.ve.prototype={
$1(a){return this.a.ak(a)},
$S:19}
A.vf.prototype={
$1(a){if(a==null)return this.a.ap(new A.jC(a===undefined))
return this.a.ap(a)},
$S:19}
A.uU.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.yJ(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.b2(A.vv(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.P("structured clone of RegExp",null))
if(a instanceof Promise)return A.a2(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.I(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.at(o),q=s.gv(o);q.m();)n.push(A.uT(q.gn()))
for(m=0;m<s.gk(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.J(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:20}
A.tD.prototype={
ct(a){if(a<=0||a>4294967296)throw A.b(A.aD(u.E+a))
return Math.random()*a>>>0},
uB(){return Math.random()}}
A.tE.prototype={
nk(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.a0("No source of cryptographically secure random numbers available."))},
ct(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aD(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.D(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.X(Math.pow(256,s))
for(o=a-1,n=(a&o)===0;;){crypto.getRandomValues(J.dk(B.bJ.gaA(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.iY.prototype={}
A.W.prototype={
h(a,b){var s,r=this
if(!r.iC(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("W.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.iC(b))return
s.c.j(0,s.a.$1(b),new A.V(b,c,s.$ti.i("V<W.K,W.V>")))},
G(a,b){b.a9(0,new A.m2(this))},
I(a){var s=this
if(!s.iC(a))return!1
return s.c.I(s.a.$1(s.$ti.i("W.K").a(a)))},
gbP(){var s=this.c,r=A.o(s).i("aN<1,2>")
return A.dC(new A.aN(s,r),new A.m3(this),r.i("n.E"),this.$ti.i("V<W.K,W.V>"))},
a9(a,b){this.c.a9(0,new A.m4(this,b))},
gB(a){return this.c.a===0},
gY(a){return this.c.a!==0},
gS(){var s=this.c,r=A.o(s).i("aO<2>")
return A.dC(new A.aO(s,r),new A.m5(this),r.i("n.E"),this.$ti.i("W.K"))},
gk(a){return this.c.a},
cs(a,b,c,d){return this.c.cs(0,new A.m6(this,b,c,d),c,d)},
gb7(){var s=this.c,r=A.o(s).i("aO<2>")
return A.dC(new A.aO(s,r),new A.m7(this),r.i("n.E"),this.$ti.i("W.V"))},
l(a){return A.oW(this)},
iC(a){return this.$ti.i("W.K").b(a)},
$iN:1}
A.m2.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(W.K,W.V)")}}
A.m3.prototype={
$1(a){var s=a.b
return new A.V(s.a,s.b,this.a.$ti.i("V<W.K,W.V>"))},
$S(){return this.a.$ti.i("V<W.K,W.V>(V<W.C,V<W.K,W.V>>)")}}
A.m4.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(W.C,V<W.K,W.V>)")}}
A.m5.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("W.K(V<W.K,W.V>)")}}
A.m6.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.V(this.c).V(this.d).i("V<1,2>(W.C,V<W.K,W.V>)")}}
A.m7.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("W.V(V<W.K,W.V>)")}}
A.iU.prototype={
ah(a,b){return J.x(a,b)},
aq(a){return J.aL(a)}}
A.fP.prototype={
ah(a,b){var s,r,q,p
if(a===b)return!0
s=J.L(a)
r=J.L(b)
for(q=this.a;;){p=s.m()
if(p!==r.m())return!1
if(!p)return!0
if(!q.ah(s.gn(),r.gn()))return!1}},
aq(a){var s,r,q
for(s=J.L(a),r=this.a,q=0;s.m();){q=q+r.aq(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.dB.prototype={
ah(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.J(a)
r=s.gk(a)
q=J.J(b)
if(r!==q.gk(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.ah(s.h(a,o),q.h(b,o)))return!1
return!0},
aq(a){var s,r,q,p
for(s=J.J(a),r=this.a,q=0,p=0;p<s.gk(a);++p){q=q+r.aq(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.fb.prototype={
ah(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.nJ(s.gtz(),s.gua(),s.gui(),A.o(this).i("fb.E"),t.S)
for(s=J.L(a),q=0;s.m();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.L(b);s.m();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
aq(a){var s,r,q
for(s=J.L(a),r=this.a,q=0;s.m();)q=q+r.aq(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.ez.prototype={}
A.f1.prototype={
gJ(a){var s=this.a
return 3*s.a.aq(this.b)+7*s.b.aq(this.c)&2147483647},
X(a,b){var s
if(b==null)return!1
if(b instanceof A.f1){s=this.a
s=s.a.ah(this.b,b.b)&&s.b.ah(this.c,b.c)}else s=!1
return s}}
A.fY.prototype={
ah(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gk(a)!==b.gk(b))return!1
s=A.nJ(null,null,null,t.fA,t.S)
for(r=J.L(a.gS());r.m();){q=r.gn()
p=new A.f1(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.L(b.gS());r.m();){q=r.gn()
p=new A.f1(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
aq(a){var s,r,q,p,o,n,m,l
for(s=J.L(a.gS()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.m();){n=s.gn()
m=r.aq(n)
l=a.h(0,n)
o=o+3*m+7*q.aq(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.iT.prototype={
ah(a,b){var s,r=this
if(a instanceof A.bV)return b instanceof A.bV&&new A.ez(r,t.cu).ah(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.fY(r,r,t.a3).ah(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.dB(r,t.hI).ah(a,b)
s=t.U
if(s.b(a))return s.b(b)&&new A.fP(r,t.nZ).ah(a,b)
return J.x(a,b)},
aq(a){var s=this
if(a instanceof A.bV)return new A.ez(s,t.cu).aq(a)
if(t.f.b(a))return new A.fY(s,s,t.a3).aq(a)
if(t.j.b(a))return new A.dB(s,t.hI).aq(a)
if(t.U.b(a))return new A.fP(s,t.nZ).aq(a)
return J.aL(a)},
uj(a){return!0}}
A.jA.prototype={
sk(a,b){A.xn()},
t(a,b){return A.xn()}}
A.kq.prototype={}
A.bS.prototype={
X(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.bS){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.Bq(this.a)},
l(a){return A.au(this.a)}}
A.c5.prototype={
t(a,b){if(this.a!=null)throw A.b(A.u("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.u("add must be called once."))}}
A.j5.prototype={
u(a){var s=new A.c5(),r=A.d7(s)
r.t(0,a)
r.p()
r=s.a
r.toString
return r}}
A.nL.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.u("Hash.add() called after close()."))
s.r=s.r+J.ar(b)
s.jY(b)},
jY(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.vo(B.d.gaA(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.J(a),o=0;;j=0){n=j+p.gk(a)-o
if(n<h){B.d.a6(i,j,n,a,o)
k.e=n
return}B.d.a6(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.D(s)
s[m]=l;++m}while(m<q)
k.vo(s)}},
p(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.w(A.a0("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.vo(B.d.gaA(q))
m=B.b.M(p,4294967296)
n.$flags&2&&A.D(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.jY(q)
s=l.a
s.t(0,new A.bS(l.nB()))
s.p()},
nB(){var s,r,q,p,o,n,m
if(B.am===$.zB())return J.Ae(B.V.gaA(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.vo(B.d.gaA(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.D(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.ld.prototype={
bB(a){var s=new Uint32Array(A.bx(A.m([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.eS(new A.le(s,r,a,q,new Uint32Array(16)))}}
A.tZ.prototype={
vo(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
for(s=this.z,r=s.$flags|0,q=0;q<16;++q){p=a0[q]
r&2&&A.D(s)
s[q]=p}for(q=16;q<64;++q){p=s[q-2]
o=s[q-7]
n=s[q-15]
m=s[q-16]
r&2&&A.D(s)
s[q]=((((p>>>17|p<<15)^(p>>>19|p<<13)^p>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}r=this.y
l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.bp[q]+s[q]>>>0)>>>0)>>>0
b=i+c>>>0
a=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((d&k^d&j^k&j)>>>0)>>>0)>>>0}r.$flags&2&&A.D(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.le.prototype={}
A.jX.prototype={}
A.iw.prototype={$ivs:1}
A.ix.prototype={
hf(){if(this.w)throw A.b(A.u("Can't finalize a finalized Request."))
this.w=!0
return B.aO},
l(a){return this.a+" "+this.b.l(0)}}
A.iy.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:152}
A.iz.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:60}
A.lX.prototype={
nb(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.P("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.P("Invalid content length "+A.p(s)+".",null))}}}
A.iC.prototype={
aQ(a){return this.mL(a)},
mL(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$aQ=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.wV("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hf().vh(),$async$aQ)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.l(0)
a8=!J.ci(k)?k:null
a9=t.N
f=A.I(a9,t.K)
e=b4.glt()
d=null
if(e!=null){d=e
J.bC(f,"content-length",d)}for(b0=b4.r,b0=new A.aN(b0,A.o(b0).i("aN<1,2>")).gv(0);b0.m();){b1=b0.d
b1.toString
c=b1
J.bC(f,c.a,c.b)}f=A.dg(f)
f.toString
A.aT(f)
b0=l.signal
s=8
return A.a(A.a2(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$aQ)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.eu(a,null):null
if(a0==null&&a!=null){f=A.wV("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.I(a9,a9)
b.headers.forEach(A.lw(new A.m_(a1)))
f=A.D1(b4,b)
a4=b.status
a6=a1
a8=a0
A.kt(b.url)
a9=b.statusText
f=new A.ke(A.zu(f),a4,a8,a6)
f.nb(a4,a8,a6,!1,!0,a9,b4)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b3=o.pop()
a2=A.E(b3)
a3=A.ae(b3)
A.yO(a2,a3,b4)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.c.P(a5,l)
s=n.pop()
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aQ,r)},
p(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q)s[q].abort()
this.b=!0}}
A.m_.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:65}
A.ux.prototype={
$1(a){return A.fi(this.a,this.b,a)},
$S:74}
A.uF.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.am()}},
$S:0}
A.uG.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a2(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.E(k)
m=A.ae(k)
if(!o.a.b)A.yO(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.cH.prototype={
vh(){var s=new A.r($.v,t.jz),r=new A.aI(s,t.iq),q=new A.kJ(new A.m1(r),new Uint8Array(1024))
this.a1(q.grn(q),!0,q.gdF(),r.grL())
return s}}
A.m1.prototype={
$1(a){return this.a.ak(new Uint8Array(A.bx(a)))},
$S:34}
A.dn.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iG:1}
A.ju.prototype={
gk(a){return this.b}}
A.p5.prototype={
glt(){var s,r,q,p=this,o={},n=o.a=0
p.x.a9(0,new A.p6(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.H)(s),++n){q=s[n]
o.a=o.a+(74+B.f.u(p.kx(q)).length+q.b+2)}return o.a+2+70+4},
hf(){var s=this,r=s.nx()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.jS()
return new A.cH(s.aZ(r))},
aZ(a){return this.o7(a)},
o7(a){var $async$aZ=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.f.u(f+"\r\n")
d=B.f.u(f+"--\r\n")
f=m.x,f=new A.aN(f,A.o(f).i("aN<1,2>")).gv(0)
case 3:if(!f.m()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bw(A.d5(e),$async$aZ,r)
case 5:k=l.b
j=$.vm()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.wF()
s=6
q=[1]
return A.bw(A.d5(B.f.u((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$aZ,r)
case 6:s=7
q=[1]
return A.bw(A.d5(B.f.u(k)),$async$aZ,r)
case 7:s=8
q=[1]
return A.bw(A.d5(B.aw),$async$aZ,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bw(A.d5(e),$async$aZ,r)
case 12:s=13
q=[1]
return A.bw(A.d5(B.f.u(m.kx(g))),$async$aZ,r)
case 13:if(g.f)A.w(A.u("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bw(A.Cs(g.e),$async$aZ,r)
case 14:s=15
q=[1]
return A.bw(A.d5(B.aw),$async$aZ,r)
case 15:case 10:f.length===l||(0,A.H)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bw(A.d5(d),$async$aZ,r)
case 16:case 1:return A.bw(null,0,r)
case 2:return A.bw(o.at(-1),1,r)}})
var s=0,r=A.yI($async$aZ,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.yX(r)},
pQ(a,b){var s,r=$.vm()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.wF()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
kx(a){var s=a.d.l(0),r=$.vm(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
nx(){var s,r=J.xf(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.bD[$.zD().ct(66)]
return"dart-http-boundary-"+A.cX(r,0,null)}}
A.p6.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.f.u(this.b.pQ(a,b)).length+B.f.u(b).length+2)},
$S:26}
A.q0.prototype={
glt(){return this.y.length},
gj7(){var s,r
if(this.gc6()==null||!this.gc6().c.a.I("charset"))return B.k
s=this.gc6().c.a.h(0,"charset")
s.toString
r=A.AI(s)
return r==null?A.w(A.Y('Unsupported encoding "'+s+'".',null,null)):r},
hf(){this.jS()
return new A.cH(A.qe(this.y,t.L))},
gc6(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.Bh(s)},
sc6(a){this.r.j(0,"content-type",a.l(0))},
nE(){if(!this.w)return
throw A.b(A.u("Can't modify a finalized Request."))}}
A.hn.prototype={}
A.ke.prototype={}
A.fu.prototype={}
A.el.prototype={
l(a){var s=new A.O(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a9(0,new A.p_(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.oY.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.qm(null,j),h=$.Ab()
i.hY(h)
s=$.Aa()
i.ev(s)
r=i.gjj().h(0,0)
r.toString
i.ev("/")
i.ev(s)
q=i.gjj().h(0,0)
q.toString
i.hY(h)
p=t.N
o=A.I(p,p)
for(;;){p=i.d=B.a.dR(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gE():n
if(!m)break
p=i.d=h.dR(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gE()
i.ev(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.ev("=")
n=i.d=s.dR(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gE()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.EA(i)
n=i.d=h.dR(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gE()
o.j(0,p,k)}i.tE()
return A.vJ(r,q,o)},
$S:84}
A.p_.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.A8()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.zr(b,$.zZ(),new A.oZ(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:26}
A.oZ.prototype={
$1(a){return"\\"+A.p(a.h(0,0))},
$S:55}
A.v0.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:55}
A.uO.prototype={
$1(a){return J.an(a)},
$S:94}
A.jK.prototype={
ag(){return"PlatformProfile."+this.b}}
A.ka.prototype={
ao(){var s=this
return A.l(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.q9.prototype={
$1(a){return J.bD(a.gb7())},
$S:37}
A.qa.prototype={
$1(a){return B.a.D(a,"ENABLE_FTS5")},
$S:21}
A.a3.prototype={}
A.m8.prototype={
tv(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.lN.prototype={
tw(a){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.c,r=0;r<12;++r)m[r]=s.ct(256)
q=A.C2(this.b,m,new Uint8Array(A.bx(a)))
p=q.a
s=12+p.length
o=s+16
n=new Uint8Array(o)
B.d.aa(n,0,12,m)
B.d.aa(n,12,s,p)
B.d.aa(n,s,o,q.b)
return n},
rT(a){var s,r,q,p=a.length
if(p<28)throw A.b(A.P("Ciphertext too short for AES-GCM (minimum 28 bytes).",null))
s=new Uint8Array(A.bx(B.d.O(a,0,12)))
p-=16
r=new Uint8Array(A.bx(B.d.aR(a,p)))
q=A.C1(this.b,s,new Uint8Array(A.bx(B.d.O(a,12,p))),r)
if(q==null)throw A.b(A.u("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
return q}}
A.re.prototype={
es(b0,b1){var s,r,q,p,o,n,m,l,k=b0[0],j=b0[1],i=b0[2],h=b0[3],g=b0[4],f=b0[5],e=b0[6],d=b0[7],c=b0[8],b=b0[9],a=b0[10],a0=b0[11],a1=b0[12],a2=b0[13],a3=b0[14],a4=b0[15],a5=this.a,a6=((k<<24|j<<16|i<<8|h)^a5[0])>>>0,a7=((g<<24|f<<16|e<<8|d)^a5[1])>>>0,a8=((c<<24|b<<16|a<<8|a0)^a5[2])>>>0,a9=((a1<<24|a2<<16|a3<<8|a4)^a5[3])>>>0
for(s=4,r=1;r<14;++r,a9=i,a8=j,a7=k,a6=p){q=s+1
p=(A.rf(a6)^A.rg(a7)^A.rh(a8)^A.ri(a9)^a5[s])>>>0
s=q+1
k=(A.rf(a7)^A.rg(a8)^A.rh(a9)^A.ri(a6)^a5[q])>>>0
q=s+1
j=(A.rf(a8)^A.rg(a9)^A.rh(a6)^A.ri(a7)^a5[s])>>>0
s=q+1
i=(A.rf(a9)^A.rg(a6)^A.rh(a7)^A.ri(a8)^a5[q])>>>0}q=s+1
o=(B.i[a6>>>24&255]<<24|B.i[a7>>>16&255]<<16|B.i[a8>>>8&255]<<8|B.i[a9&255])^a5[s]
s=q+1
n=(B.i[a7>>>24&255]<<24|B.i[a8>>>16&255]<<16|B.i[a9>>>8&255]<<8|B.i[a6&255])^a5[q]
m=(B.i[a8>>>24&255]<<24|B.i[a9>>>16&255]<<16|B.i[a6>>>8&255]<<8|B.i[a7&255])^a5[s]
l=(B.i[a9>>>24&255]<<24|B.i[a6>>>16&255]<<16|B.i[a7>>>8&255]<<8|B.i[a8&255])^a5[s+1]
b1.$flags&2&&A.D(b1)
b1[0]=o>>>24&255
b1[1]=o>>>16&255
b1[2]=o>>>8&255
b1[3]=o&255
b1[4]=n>>>24&255
b1[5]=n>>>16&255
b1[6]=n>>>8&255
b1[7]=n&255
b1[8]=m>>>24&255
b1[9]=m>>>16&255
b1[10]=m>>>8&255
b1[11]=m&255
b1[12]=l>>>24&255
b1[13]=l>>>16&255
b1[14]=l>>>8&255
b1[15]=l&255},
pX(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.$flags|0,q=0;q<8;++q){p=4*q
o=a[p]
n=a[p+1]
m=a[p+2]
p=a[p+3]
r&2&&A.D(s)
s[q]=(o<<24|n<<16|m<<8|p)>>>0}for(q=8;q<60;++q){l=s[q-1]
p=B.b.au(q,8)
if(p===0)l=A.xL((l<<8|l>>>24)>>>0)^B.bn[B.b.M(q,8)-1]
else if(p===4)l=A.xL(l)
p=s[q-8]
r&2&&A.D(s)
s[q]=(p^l)>>>0}}}
A.v_.prototype={
$1(a){return a.h(0,"detail")},
$S:37}
A.iJ.prototype={
ag(){return"ConflictAlgorithm."+this.b}}
A.iW.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.bT(o,o.r,o.e);n.m();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.aK(0)
p.b.p()
case 1:return A.e(q,r)}})
return A.f($async$p,r)},
jK(a){var s,r=this.a,q=r.h(0,a)
if(q==null){if(r.a>=256){s=r.P(0,new A.ai(r,A.o(r).i("ai<1>")).gC(0))
if(s!=null)s.p()}q=this.b.uO(a)
r.j(0,a,q)}return q},
mK(a,b){var s=this.a.a,r=s>=256?this.b.jL(a,b):this.jK(a).jM(new A.dx(b))
s=A.o(r).i("ac<B.E,N<k,j?>>")
s=A.Q(new A.ac(r,new A.nn(),s),s.i("R.E"))
return s},
eu(a,b){var s=this.a.a
if(s>=256)this.b.aw(a,b)
else this.jK(a).j9(new A.dx(b))},
j8(a){return this.eu(a,B.v)},
aw(a,b){return this.tC(a,b)},
N(a){return this.aw(a,B.v)},
tC(a,b){var s=0,r=A.h(t.H),q=this
var $async$aw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.eu(a,b)
return A.e(null,r)}})
return A.f($async$aw,r)},
aj(a,b){return this.uZ(a,b)},
aN(a){return this.aj(a,B.v)},
uZ(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$aj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.mK(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$aj,r)},
bW(a,b,c,d,e,f){return this.uW(a,b,c,d,e,f)},
aM(a,b,c,d){return this.bW(a,null,b,null,c,d)},
eM(a,b,c){return this.bW(a,null,null,null,b,c)},
uU(a,b,c,d){return this.bW(a,null,null,b,c,d)},
eN(a,b,c,d,e){return this.bW(a,b,c,null,d,e)},
uV(a,b,c,d,e){return this.bW(a,null,b,c,d,e)},
lU(a,b,c,d){return this.bW(a,b,null,null,c,d)},
uW(a,b,c,d,e,f){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bW=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.c.K(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(e.length!==0)n+=" WHERE "+e
if(d!=null&&d.length!==0)n+=" ORDER BY "+d
if(c!=null)n+=" LIMIT "+A.p(c)
o=f==null?B.v:f
q=p.aj(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
cZ(a,b,c,d){return this.uf(0,b,c,d)},
ai(a,b,c){return this.cZ(0,b,c,null)},
uf(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.P("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.o(c)
n=o.i("ai<1>")
m=t.N
l=A.dC(new A.ai(c,n),new A.nm(),n.i("n.E"),m).K(0,", ")
k=B.c.K(A.aG(c.a,"?",!1,m),", ")
j=A.x0(d)
o=o.i("aO<2>")
o=A.Q(new A.aO(c,o),o.i("n.E"))
p.eu("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.X(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
F(a,b,c,d){return this.vn(a,b,c,d)},
vn(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$F=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.o(b)
n=o.i("ai<1>")
m=A.dC(new A.ai(b,n),new A.no(),n.i("n.E"),t.N).K(0,", ")
n="UPDATE"+A.x0(null)+' "'+a+'" SET '+m
o=A.Q(new A.aO(b,o.i("aO<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.c.G(o,d)}p.eu(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$F,r)},
R(a,b,c){return this.rV(a,b,c)},
rV(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$R=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.c.G(n,c)}p.eu(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$R,r)},
a2(a,b){return this.vj(a,b,b)},
vj(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.j8("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.j8("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.j8("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$imY:1}
A.nn.prototype={
$1(a){return A.b4(a,t.N,t.X)},
$S:109}
A.nm.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.no.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.mi.prototype={}
A.iS.prototype={
ls(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f='Encrypted field "',e=A.m([],t.s),d=A.br(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.H)(s),++n){m=s[n]
l=m.a
if(B.bR.D(0,l))throw A.b(A.ct('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!d.t(0,l))throw A.b(A.ct('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.ct(f+l+'" cannot be unique.'))
if(B.c.dE(o,new A.nl(m)))throw A.b(A.ct(f+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.D(k,l)}else k=!1
if(k)throw A.b(A.ct(f+l+'" cannot be included in FTS.'))}}for(j=0;j<o.length;j=i)for(i=j+1,r=i,h=0;h<o.length;++h){if(j===h)continue
if(B.bl.ah(o[j].a,o[h].a)){if(j<h){l=o[j].a
e.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(h+1)+").")}}else if(A.AG(o[h].a,o[j].a)&&!o[h].b){l=o[h].a
l=l.l(l)
k=o[j].a
e.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){if(!g.a.d)throw A.b(new A.fH("FTS5 is not available on this SQLite engine."))
for(r=q.a,q=r.$ti,r=new A.a5(r,r.gk(0),q.i("a5<B.E>")),q=q.i("B.E");r.m();){p=r.d
if(p==null)p=q.a(p)
if(!d.D(0,p))throw A.b(A.ct('FTS field "'+p+'" is not a declared field.'))}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.x){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.ct('Enum field "'+m.a+'" must declare values.'))
if(q===B.B){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.ct('Ref field "'+m.a+'" must declare its target store.'))}return new A.mi(g.nA(a),g.nz(a),g.ny(a),e)},
nA(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.m(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.gjP()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.x&&q){k=o.f
k.toString
j=new A.ac(k,new A.nk(),A.al(k).i("ac<1,k>")).K(0,", ")
m+=" CHECK ("+('"'+A.z(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.B&&o.w){n=o.r
n.toString
n=A.z(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.z("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.z(a.a,'"',i)
r=B.c.K(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
nz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.m([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.H)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("ac<B.E,k>")
j=A.Q(new A.ac(l,A.Ew(),k),k.i("R.E"))
if(!l.D(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.av?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.K(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.c.K(j,", ")+") WHERE "+i+";")}else{l=l.K(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.c.K(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.H)(r),++n){h=r[n]
if(h.b!==B.B)continue
if(B.c.dE(s,new A.nj(h)))continue
k=h.a
g=A.z(p+k,e,d)
f=A.z(q,e,d)
k=A.z(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.z("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.H)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.z(o+s,e,d)
l=A.z(q,e,d)
g=A.z(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.z(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
ny(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=", ",f='"',e='""',d=" BEGIN\n  INSERT INTO ",c=") VALUES (new.rowid, ",b=") VALUES ('delete', old.rowid, ",a=a0.w
if(a==null)return B.m
s=A.m([],t.s)
r=a0.a
q=r+"_fts"
p=a.a
o=p.$ti.i("ac<B.E,k>")
n=new A.ac(p,new A.ng(),o).K(0,g)
m=new A.ac(p,new A.nh(),o).K(0,g)
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,f,e)+'"')+" USING fts5(\n  "+p.K(p,g)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n);")
l=A.z(r+"_ai",f,e)
k=A.z(r,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER INSERT ON "+('"'+k+'"')+d+('"'+A.z(q,f,e)+'"')+"(rowid, "+p.K(p,g)+c+n+");\nEND;")
l=A.z(r+"_ad",f,e)
k=A.z(r,f,e)
j=A.z(q,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER DELETE ON "+('"'+k+'"')+d+('"'+j+'"')+"("+('"'+A.z(q,f,e)+'"')+", rowid, "+p.K(p,g)+b+m+");\nEND;")
i=new A.ac(p,new A.ni(),o).K(0," OR ")
o=A.z(r+"_au",f,e)
l=A.z(r,f,e)
k=A.z(q,f,e)
j=A.z(q,f,e)
h=p.K(p,g)
s.push("CREATE TRIGGER "+('"'+o+'"')+" AFTER UPDATE ON "+('"'+l+'"')+" WHEN "+i+d+('"'+k+'"')+"("+('"'+j+'"')+", rowid, "+h+b+m+");\n  INSERT INTO "+('"'+A.z(q,f,e)+'"')+"(rowid, "+p.K(p,g)+c+n+");\nEND;")
return s}}
A.nl.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:39}
A.nk.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:7}
A.nj.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:39}
A.ng.prototype={
$1(a){return"new."+('"'+A.z(a,'"','""')+'"')},
$S:7}
A.nh.prototype={
$1(a){return"old."+('"'+A.z(a,'"','""')+'"')},
$S:7}
A.ni.prototype={
$1(a){var s=A.z(a,'"','""')
return"new."+('"'+s+'"')+" IS NOT old."+('"'+A.z(a,'"','""')+'"')},
$S:7}
A.jo.prototype={
l(a){return A.ij(this).l(0)+": "+this.a},
$iG:1}
A.hr.prototype={}
A.kn.prototype={}
A.jB.prototype={}
A.iF.prototype={}
A.jM.prototype={}
A.j4.prototype={}
A.cV.prototype={}
A.jS.prototype={}
A.k_.prototype={}
A.ex.prototype={}
A.fH.prototype={}
A.iK.prototype={}
A.iV.prototype={}
A.np.prototype={
ag(){return"DurabilityClass."+this.b}}
A.kc.prototype={}
A.pE.prototype={
bZ(a){var s,r=this.a
if(!r.I(a))return null
s=r.P(0,a)
r.j(0,a,s)
return s==null?null:A.b4(s,t.N,t.X)},
jN(a,b){var s=this.a
if(s.a>=256)s.P(0,new A.ai(s,A.o(s).i("ai<1>")).gC(0))
s.j(0,a,b==null?null:A.b4(b,t.N,t.X))},
ug(a){var s,r,q,p
if(a.a===0)this.a.aK(0)
else for(s=A.tO(a,a.r,A.o(a).c),r=this.a,q=s.$ti.c;s.m();){p=s.d
r.P(0,p==null?q.a(p):p)}}}
A.jn.prototype={
b5(a){return this.v6(a)},
v6(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i
var $async$b5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=new A.iS(q.c).ls(a)
l=q.b
k=a.a
s=2
return A.a(l.aM("lp_stores",1,"store = ?",[k]),$async$b5)
case 2:j=c
i=J.J(j)
s=i.gB(j)?3:5
break
case 3:s=6
return A.a(l.N(m.b),$async$b5)
case 6:i=m.c,p=i.length,o=0
case 7:if(!(o<i.length)){s=9
break}s=10
return A.a(l.N(i[o]),$async$b5)
case 10:case 8:i.length===p||(0,A.H)(i),++o
s=7
break
case 9:i=m.d,p=i.length,o=0
case 11:if(!(o<i.length)){s=13
break}s=14
return A.a(l.N(i[o]),$async$b5)
case 14:case 12:i.length===p||(0,A.H)(i),++o
s=11
break
case 13:i=a.b
s=15
return A.a(l.ai(0,"lp_stores",A.l(["store",k,"table_name",k,"schema_ver",i,"definition_json",B.e.a8(a.ao(),null),"created_at",Date.now()],t.N,t.X)),$async$b5)
case 15:s=16
return A.a(A.h1(l,0,0,"create:"+k,i),$async$b5)
case 16:s=4
break
case 5:n=A.X(J.aa(i.gC(j),"schema_ver"))
i=a.b
if(n>i)throw A.b(new A.k_('Store "'+k+'" on disk is schema v'+n+", but this package supports v"+i+"."))
s=n<i?17:18
break
case 17:s=19
return A.a(A.en(q,a,n),$async$b5)
case 19:case 18:s=20
return A.a(l.F("lp_stores",A.l(["definition_json",B.e.a8(a.ao(),null),"schema_ver",i],t.N,t.X),"store = ?",[k]),$async$b5)
case 20:case 4:q.ch.j(0,k,new A.kc(a,new A.pE(A.I(t.N,t.b))))
return A.e(null,r)}})
return A.f($async$b5,r)},
af(a){var s=this.ch.h(0,a)
if(s==null)throw A.b(A.u('No store "'+a+'" registered in this LocalPocket.'))
return s},
dX(a,b,c){var s
if(A.qE(this)!=null)A.w(A.u(u.L))
s=this.d
s===$&&A.y()
return s.bX(new A.oU(this,a,b,c),c)},
a2(a,b){return this.dX(a,B.w,b)},
du(a,b,c){return this.qQ(a,b,c,c)},
qQ(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$du=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a0=new A.kb()
$.lG()
a0.aF()
l=a0
k=a3===B.w&&m.a!==":memory:"
s=k&&m.cx!=="FULL"?3:4
break
case 3:s=5
return A.a(m.m4("PRAGMA synchronous=FULL"),$async$du)
case 5:m.cx="FULL"
case 4:p=6
j=A.m([],t.gi)
s=9
return A.a(m.b.a2(new A.oR(m,j,a2,a4),a4),$async$du)
case 9:i=a7
for(g=j,f=g.length,e=m.f,d=m.ch,c=0;c<g.length;g.length===f||(0,A.H)(g),++c){h=g[c]
b=d.h(0,h.a)
if(b!=null)b.d.ug(h.b)
e.tv(h)}q=i
n=[1]
s=7
break
n.push(8)
s=7
break
case 6:n=[2]
case 7:p=2
s=k&&m.cx!=="NORMAL"?10:11
break
case 10:p=13
s=16
return A.a(m.m4("PRAGMA synchronous=NORMAL"),$async$du)
case 16:m.cx="NORMAL"
p=2
s=15
break
case 13:p=12
a1=o.pop()
s=15
break
case 12:s=2
break
case 15:case 11:g=m.e
f=l.gtt();++g.a
g.b+=f
s=n.pop()
break
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$du,r)},
m4(a){++this.e.c
return this.b.aw(a,B.v)},
m5(a,b){++this.e.d
return this.b.aj(a,b)},
dD(a){return this.ru(a)},
rt(){return this.dD(null)},
ru(a){var s=0,r=A.h(t.H),q=this,p
var $async$dD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.N("ANALYZE"),$async$dD)
case 5:s=3
break
case 4:s=6
return A.a(p.N("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$dD)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dD,r)},
eY(){var s=0,r=A.h(t.H),q=this
var $async$eY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.N("PRAGMA wal_checkpoint(TRUNCATE)"),$async$eY)
case 4:case 3:return A.e(null,r)}})
return A.f($async$eY,r)},
eX(a){return this.vu(a)},
vu(a){var s=0,r=A.h(t.H),q=this,p
var $async$eX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a!=null?2:4
break
case 2:s=5
return A.a(p.N("PRAGMA incremental_vacuum("+A.p(a)+")"),$async$eX)
case 5:s=3
break
case 4:s=6
return A.a(p.N("VACUUM"),$async$eX)
case 6:case 3:return A.e(null,r)}})
return A.f($async$eX,r)},
eI(a){return this.uQ(a)},
uP(){return this.eI(1e4)},
uQ(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$eI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.oT(o,a),t.P),$async$eI)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eI,r)},
d6(a){return this.vf(a)},
vf(a){var s=0,r=A.h(t.H),q=this,p
var $async$d6=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.ch,p=new A.dz(p,p.r,p.e)
case 2:if(!p.m()){s=3
break}s=4
return A.a(q.dG(p.d,a),$async$d6)
case 4:s=2
break
case 3:s=5
return A.a(q.uP(),$async$d6)
case 5:s=6
return A.a(q.eY(),$async$d6)
case 6:s=7
return A.a(q.rt(),$async$d6)
case 7:return A.e(null,r)}})
return A.f($async$d6,r)},
dG(a,b){return this.rK(a,b)},
rK(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$dG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l={}
k=Date.now()
j=k-B.b.M(b.a,1000)
l.a=0
o=t.P,n=p.b
case 3:s=5
return A.a(n.aj("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",j,250]),$async$dG)
case 5:m=d
if(J.ci(m)){s=4
break}s=6
return A.a(p.a2(new A.oS(l,m,a),o),$async$dG)
case 6:s=3
break
case 4:q=l.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dG,r)},
p(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l
var $async$p=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.CW){s=1
break}n.CW=!0
n.f.a.p()
p=4
s=7
return A.a(n.b.N("PRAGMA optimize"),$async$p)
case 7:p=2
s=6
break
case 4:p=3
l=o.pop()
s=6
break
case 3:s=2
break
case 6:s=8
return A.a(n.b.p(),$async$p)
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$p,r)}}
A.oU.prototype={
$0(){var s=this
return s.a.du(s.b,s.c,s.d)},
$S(){return this.d.i("K<0>()")}}
A.oR.prototype={
$1(a){return this.mk(a,this.d)},
mk(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.c9(p.a,a,p.b)
n=p.d
m=t.X
q=A.zp(new A.oQ(p.c,o,n),null,A.l([$.wz(),o],m,m),n.i("K<0>"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.d.i("K<0>(mY)")}}
A.oQ.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("K<0>()")}}
A.oT.prototype={
$1(a){return this.mm(a)},
mm(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.aN("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.L(c),o=q.a
case 3:if(!p.m()){s=4
break}n=p.gn()
s=5
return A.a(l.R("lp_outbox","store = ? AND record_id = ?",[A.t(n.h(0,"store")),A.t(n.h(0,"record_id"))]),$async$$1)
case 5:++o.a
s=3
break
case 4:k=A
j=J
i=J
s=6
return A.a(l.aN("SELECT COUNT(*) c FROM lp_outbox"),$async$$1)
case 6:m=k.a7(j.aa(i.bD(c),"c"))
if(m==null)m=0
p=q.b
s=m>p?7:8
break
case 7:k=J
s=9
return A.a(l.aj("SELECT o.store, o.record_id FROM lp_outbox o JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.sync_state NOT IN ('dirty', 'conflict') ORDER BY o.created_at ASC LIMIT ?",[m-p]),$async$$1)
case 9:p=k.L(c)
case 10:if(!p.m()){s=11
break}n=p.gn()
s=12
return A.a(l.R("lp_outbox","store = ? AND record_id = ?",[A.t(n.h(0,"store")),A.t(n.h(0,"record_id"))]),$async$$1)
case 12:++o.a
s=10
break
case 11:case 8:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oS.prototype={
$1(a){return this.ml(a)},
ml(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.b
p=J.L(q.b),o=q.c,n=t.N,m=t.X,l=a.c,k=a.a.e,j=q.a,i=t.s
case 2:if(!p.m()){s=3
break}h=A.t(p.gn().h(0,"id"))
d=J
s=4
return A.a(e.lU("lp_file_refs",A.m(["ref_id","hash"],i),"store = ? AND record_id = ?",[o,h]),$async$$1)
case 4:g=d.L(c)
case 5:if(!g.m()){s=6
break}f=g.gn()
s=7
return A.a(e.R("lp_file_refs","ref_id = ?",[f.h(0,"ref_id")]),$async$$1)
case 7:s=8
return A.a(e.aw(u.y,[f.h(0,"hash")]),$async$$1)
case 8:s=5
break
case 6:s=9
return A.a(e.R("lp_conflicts","store = ? AND record_id = ?",[o,h]),$async$$1)
case 9:s=10
return A.a(e.F("lp_op_queue",A.l(["state","done"],n,m),u.l,[o,h]),$async$$1)
case 10:s=11
return A.a(e.R("lp_outbox","store = ? AND record_id = ?",[o,h]),$async$$1)
case 11:s=12
return A.a(e.R("lp_sync_row","store = ? AND record_id = ?",[o,h]),$async$$1)
case 12:s=13
return A.a(e.R(o,"id = ?",[h]),$async$$1)
case 13:g=A.ak([h],n)
l.push(new A.a3(o,g))
k.e+=g.a;++j.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.p3.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:117}
A.p4.prototype={
$2(a,b){return B.b.T(a.a,b.a)},
$S:118}
A.p1.prototype={
$1(a){return a.h(0,"name")},
$S:37}
A.p2.prototype={
$1(a){return this.mn(a)},
mn(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=J.L(q.a),o=q.b,n=q.d
case 2:if(!p.m()){s=3
break}m=A.e4(o,p.gn(),null,null)
l=A.t(m.h(0,"id"))
s=4
return A.a(a.ai(0,n,A.de(o,J.x(m.h(0,"archived"),!0),null,null,l,m)),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:123}
A.jI.prototype={
uY(a){if(a>this.f)this.f=a}}
A.pY.prototype={}
A.bG.prototype={
ag(){return"FieldKind."+this.b}}
A.ba.prototype={
gjP(){var s,r
if(this.e)return"TEXT"
s=this.b
$label0$0:{if(B.a0===s||B.x===s||B.a4===s||B.a5===s||B.B===s){r="TEXT"
break $label0$0}if(B.a1===s||B.T===s||B.a3===s){r="INTEGER"
break $label0$0}if(B.a2===s){r="REAL"
break $label0$0}throw A.b(new A.jR("None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details."))}return r},
ao(){var s,r=this,q=A.I(t.N,t.X)
q.j(0,"name",r.a)
q.j(0,"kind",r.b.b)
q.j(0,"required",r.c)
q.j(0,"uniqueWhenActive",r.d)
q.j(0,"encrypted",r.e)
s=r.f
if(s!=null)q.j(0,"enumValues",s)
s=r.r
if(s!=null)q.j(0,"refTo",s)
q.j(0,"enforceFk",r.w)
return q}}
A.fM.prototype={
ag(){return"IndexScope."+this.b}}
A.ei.prototype={
ao(){return A.l(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.nz.prototype={
ao(){return A.l(["fields",this.a],t.N,t.X)}}
A.c8.prototype={
ao(){var s,r,q,p=A.m([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q)p.push(s[q].ao())
return A.l(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.mt.prototype={}
A.bR.prototype={
gj0(){var s,r,q,p,o=this,n=$.zz()
A.x4(o)
s=n.a.get(o)
if(s==null){s=A.br(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.H)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
ao(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.I(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.m([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.H)(q),++o)r.push(q[o].ao())
j.j(0,"fields",r)
r=A.m([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.H)(q),++o){n=q[o]
r.push(A.l(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
r=m.w
if(r!=null)j.j(0,"fts",A.l(["fields",r.a],l,k))
l=A.m([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.H)(k),++o)l.push(k[o].ao())
j.j(0,"migrations",l)
return j}}
A.dE.prototype={
ag(){return"MutationAction."+this.b}}
A.ed.prototype={
gbm(){var s=this.c
return s==null?this.a.b:s},
gaB(){return this.b.a.a},
ic(){},
hG(a){var s=this
if(s.d!=null)return s.q2(B.aA,a)
return s.a.dX(new A.mg(s,a),B.w,t.H)},
hB(a,b){var s=this
if(s.d!=null)return s.cN(a,b)
return s.a.dX(new A.me(s,a,b),B.w,t.H)},
h2(a){var s=this
if(s.d!=null)return s.kF(B.C,a)
return s.a.dX(new A.md(s,a),B.w,t.H)},
hK(a){var s=this
if(s.d!=null)return s.kF(B.G,a)
return s.a.dX(new A.mh(s,a),B.w,t.H)},
hF(a){var s=this
if(s.d!=null)return s.bb(a)
return s.a.dX(new A.mf(s,a),B.w,t.H)},
bb(a){return this.qu(a)},
qu(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$bb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.ic()
p=q.d
o=p.b
n=q.b.a.a
j=J
s=2
return A.a(o.eM("lp_file_refs","store = ? AND record_id = ?",[n,a]),$async$bb)
case 2:m=j.L(c)
case 3:if(!m.m()){s=4
break}l=m.gn()
k=A.t(l.h(0,"hash"))
s=5
return A.a(o.R("lp_file_refs","ref_id = ?",[l.h(0,"ref_id")]),$async$bb)
case 5:s=6
return A.a(o.aw(u.y,[k]),$async$bb)
case 6:s=3
break
case 4:s=7
return A.a(o.R("lp_conflicts","store = ? AND record_id = ?",[n,a]),$async$bb)
case 7:m=t.N
s=8
return A.a(o.F("lp_op_queue",A.l(["state","done"],m,t.X),u.l,[n,a]),$async$bb)
case 8:s=9
return A.a(o.R("lp_outbox","store = ? AND record_id = ?",[n,a]),$async$bb)
case 9:s=10
return A.a(o.R("lp_sync_row","store = ? AND record_id = ?",[n,a]),$async$bb)
case 10:s=11
return A.a(o.R(n,"id = ?",[a]),$async$bb)
case 11:p.Z(new A.a3(n,A.ak([a],m)))
return A.e(null,r)}})
return A.f($async$bb,r)},
cN(a,b){return this.ql(a,b)},
ql(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h
var $async$cN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.ic()
s=3
return A.a(p.gbm().aj("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cN)
case 3:o=d
n=J.J(o)
if(n.gY(o)){m=n.gC(o)
l=A.qz(m)
k=m.h(0,"o_kind")!=null?A.vL(A.l(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.X&&k!=null?4:5
break
case 4:s=6
return A.a(p.bI(a,b,l,k),$async$cN)
case 6:s=1
break
case 5:s=7
return A.a(p.bK(a),$async$cN)
case 7:j=d
if(j==null)throw A.b(A.jT("No record "+p.gaB()+"/"+a+" to patch."))
n=t.N
i=t.X
h=A.cm(j,n,i)
h.G(0,b)
i=A.I(n,i)
i.j(0,"id",a)
i.G(0,h)
s=8
return A.a(p.az(B.z,j,a,k,l,i),$async$cN)
case 8:case 1:return A.e(q,r)}})
return A.f($async$cN,r)},
bI(a,b,c,d){return this.qm(a,b,c,d)},
qm(a3,a4,a5,a6){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bI=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=null
try{a1=B.e.an(a6.d,null)}catch(a7){a1=null}s=!t.G.b(a1)?3:4
break
case 3:s=5
return A.a(n.bK(a3),$async$bI)
case 5:i=a9
if(i==null)throw A.b(A.jT("No record "+n.gaB()+"/"+a3+" to patch."))
h=t.N
g=t.X
f=A.cm(i,h,g)
f.G(0,a4)
g=A.I(h,g)
g.j(0,"id",a3)
g.G(0,f)
s=6
return A.a(n.az(B.z,i,a3,a6,a5,g),$async$bI)
case 6:s=1
break
case 4:e=a1.h(0,"id")
s=e!=null&&!J.x(e,a3)?7:8
break
case 7:s=9
return A.a(n.bK(a3),$async$bI)
case 9:i=a9
if(i==null)throw A.b(A.jT("No record "+n.gaB()+"/"+a3+" to patch."))
h=t.N
g=t.X
f=A.cm(i,h,g)
f.G(0,a4)
g=A.I(h,g)
g.j(0,"id",a3)
g.G(0,f)
s=10
return A.a(n.az(B.z,i,a3,a6,a5,g),$async$bI)
case 10:s=1
break
case 8:h=t.N
g=t.X
f=A.cm(a1,h,g)
f.G(0,a4)
m=f
J.bC(m,"id",a3)
f=n.b
d=f.a
c=new A.O("")
A.a9(c,A.b0(d,m))
b=c.a
a=b.charCodeAt(0)==0?b:b
g=A.cm(m,h,g)
g.P(0,"id")
n.lc(a3,g,a)
g=n.a
l=A.de(d,J.x(J.aa(m,"archived"),!0),g.z,g.Q,a3,m)
p=12
s=15
return A.a(n.gbm().F(d.a,l,"id = ?",[a3]),$async$bI)
case 15:p=2
s=14
break
case 12:p=11
a2=o.pop()
k=A.E(a2)
h=A.zv(k,m)
throw A.b(h)
s=14
break
case 11:s=2
break
case 14:a0=n.km(a1,m,B.z)
g=g.as
g===$&&A.y()
s=16
return A.a(g.b3(B.z,null,a0,n.gbm(),a3,m,a1,a6,a,l,a5,f),$async$bI)
case 16:g=n.d
if(g!=null)g.Z(new A.a3(d.a,A.ak([a3],h)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bI,r)},
az(a,b,c,d,e,f){return this.q3(a,b,c,d,e,f)},
kF(a,b){var s=null
return this.az(a,s,b,s,s,s)},
q2(a,b){var s=null
return this.az(a,s,s,s,s,b)},
q3(b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$az=A.c(function(b7,b8){if(b7===1){o.push(b8)
s=p}for(;;)switch(s){case 0:n.ic()
m=null
l=b2
k=null
s=b1===B.aA?3:5
break
case 3:h=A.S(b6.h(0,"id"))
if(h==null)h=A.lA()
g=$.wG()
if(!g.b.test(h))throw A.b(A.ay('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
f=l
s=f==null?6:8
break
case 6:s=9
return A.a(n.bK(m),$async$az)
case 9:s=7
break
case 8:b8=f
case 7:l=b8
k=n.kB(b6,m)
b1=l==null?B.bI:B.z
s=4
break
case 5:s=b1===B.z?10:12
break
case 10:b3.toString
m=b3
f=l
s=f==null?13:15
break
case 13:s=16
return A.a(n.bK(m),$async$az)
case 16:s=14
break
case 15:b8=f
case 14:l=b8
if(l==null)throw A.b(A.jT("No record "+n.gaB()+"/"+A.p(m)+" to update."))
b6.toString
k=n.kB(b6,m)
s=11
break
case 12:b3.toString
m=b3
f=l
s=f==null?17:19
break
case 17:s=20
return A.a(n.bK(m),$async$az)
case 20:s=18
break
case 19:b8=f
case 18:l=b8
if(l==null)throw A.b(A.jT("No record "+n.gaB()+"/"+A.p(m)+" to archive/restore."))
g=A.cm(l,t.N,t.X)
g.j(0,"archived",b1===B.C)
k=g
case 11:case 4:g=n.b
e=g.a
d=t.N
c=A.cm(k,d,t.X)
if(J.ar(m)!==0)c.j(0,"id",m)
b=new A.O("")
A.a9(b,A.b0(e,c))
c=b.a
a=c.charCodeAt(0)==0?c:c
n.lc(m,k,a)
s=l==null?21:23
break
case 21:a0=null
s=22
break
case 23:s=b5==null?24:26
break
case 24:c=n.a.as
c===$&&A.y()
s=27
return A.a(c.bx(n.gbm(),e.a,m),$async$az)
case 27:c=b8
a0=c
s=25
break
case 26:a0=b5
case 25:case 22:s=l==null?28:30
break
case 28:a1=null
s=29
break
case 30:s=b4==null?31:33
break
case 31:c=n.a.as
c===$&&A.y()
s=34
return A.a(c.dU(n.gbm(),e.a,m),$async$az)
case 34:c=b8
a1=c
s=32
break
case 33:a1=b4
case 32:case 29:c=a0==null
a2=!c
if(a2&&a0.w===B.N)throw A.b(A.wY("Record "+n.gaB()+"/"+A.p(m)+u.W))
if(l!=null)a3=!a2||a0.w===B.r
else a3=!1
if(l!=null&&a3){b=new A.O("")
A.a9(b,A.b0(e,l))
a2=b.a
a4=a2.charCodeAt(0)==0?a2:a2
a2=A.au(B.l.u(B.f.u(a4)).a)
a5=new A.lY(a4,a2,c?null:a0.c)}else a5=null
c=m
a2=k
a6=n.a
j=A.de(e,J.x(J.aa(k,"archived"),!0),a6.z,a6.Q,c,a2)
p=36
c=e.a
s=l==null?39:41
break
case 39:s=42
return A.a(n.gbm().ai(0,c,j),$async$az)
case 42:s=40
break
case 41:s=43
return A.a(n.gbm().F(c,j,"id = ?",[m]),$async$az)
case 43:case 40:p=2
s=38
break
case 36:p=35
b0=o.pop()
i=A.E(b0)
g=A.zv(i,k)
throw A.b(g)
s=38
break
case 35:s=2
break
case 38:a8=n.km(l,k,b1)
c=a6.as
c===$&&A.y()
a2=n.gbm()
a6=m
a9=l
s=44
return A.a(c.b3(b1,a5,a8,a2,a6,k,a9,a1,a,j,a0,g),$async$az)
case 44:g=n.d
if(g!=null)g.Z(new A.a3(e.a,A.ak([m],d)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$az,r)},
kB(a,b){var s,r,q,p=A.I(t.N,t.X)
for(s=a.gbP(),s=s.gv(s);s.m();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.lT("archived",new A.mc())
return p},
km(a,b,c){var s,r,q,p,o
if(a==null)return B.bA
s=t.N
r=A.br(s)
s=A.om(a.gS(),s)
s.G(0,new A.ai(b,A.o(b).i("ai<1>")))
for(s=A.tO(s,s.r,A.o(s).c),q=s.$ti.c;s.m();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.E.ah(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.Q(r,r.$ti.c)
B.c.b8(o)
return o},
bK(a){return this.qD(a)},
qD(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$bK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbm().aj('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$bK)
case 3:m=c
l=J.J(m)
if(l.gB(m)){q=null
s=1
break}o=p.a
q=A.e4(n,l.gC(m),o.z,o.Q)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bK,r)},
bZ(a){return this.mE(a)},
mE(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h
var $async$bZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.d==null
if(h&&p.b.d.a.I(a)){q=p.b.d.bZ(a)
s=1
break}o=p.b
n=o.a
m=n.a
s=3
return A.a(p.gbm().aj("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+m+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[m,a]),$async$bZ)
case 3:l=c
m=J.J(l)
if(m.gB(l)){if(h)o.d.jN(a,null)
q=null
s=1
break}k=m.gC(l)
m=p.a
j=A.e4(n,k,m.z,m.Q)
i=A.a7(k.h(0,"lp_schema_ver"))
if(i==null)i=1
m=n.b
if(i<m)j=A.E0(n,j,i,m)
if(h)o.d.jN(a,j)
q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bZ,r)},
lc(a,b,c){var s,r,q,p,o,n,m,l,k,j
for(s=this.b.a.c,r=s.length,q=t.j,p=t.f,o=0;o<s.length;s.length===r||(0,A.H)(s),++o){n=s[o]
m=n.a
l=b.h(0,m)
if(n.c&&l==null)throw A.b(A.ay('Field "'+m+'" is required.',m))
if(l==null)continue
k=n.b
switch(k.a){case 0:case 5:case 8:if(typeof l!="string")throw A.b(A.ay('Field "'+m+'" must be a string.',m))
if(k===B.x){k=n.f
k.toString
k=!B.c.D(k,l)}else k=!1
if(k){s=n.f
s.toString
throw A.b(A.ay('Field "'+m+'" must be one of '+B.c.K(s,", ")+".",m))}break
case 1:case 4:if(!A.aA(l))throw A.b(A.ay('Field "'+m+'" must be an integer.',m))
break
case 2:if(typeof l!="number")throw A.b(A.ay('Field "'+m+'" must be a number.',m))
break
case 3:if(!A.bO(l))throw A.b(A.ay('Field "'+m+'" must be a boolean.',m))
break
case 6:if(!p.b(l)&&!q.b(l))throw A.b(A.ay('Field "'+m+'" must be a JSON object or array.',m))
break
case 7:if(!q.b(l))throw A.b(A.ay('Field "'+m+'" must be a JSON array.',m))
break}}j=B.f.u(c).length
s=this.a.r
if(j>s)throw A.b(A.ay("Document exceeds max size ("+j+" > "+s+" bytes).",null))}}
A.mg.prototype={
$1(a){return a.ck(this.a.b.a.a).hG(this.b)},
$S:6}
A.me.prototype={
$1(a){return a.ck(this.a.b.a.a).hB(this.b,this.c)},
$S:6}
A.md.prototype={
$1(a){return a.ck(this.a.b.a.a).h2(this.b)},
$S:6}
A.mh.prototype={
$1(a){return a.ck(this.a.b.a.a).hK(this.b)},
$S:6}
A.mf.prototype={
$1(a){return a.ck(this.a.b.a.a).hF(this.b)},
$S:6}
A.mc.prototype={
$0(){return!1},
$S:56}
A.c9.prototype={
Z(a){this.c.push(a)
this.a.e.e+=a.b.a},
ck(a){var s=this.a
return new A.ed(s,s.af(a),this.b,this)}}
A.jE.prototype={
aF(){var s=this.e=A.vT(this.gtn(),new A.pa(this),null,!1,t.b)
return new A.aY(s,A.o(s).i("aY<1>"))},
q8(a){var s,r=this
if(a.a!==r.b.a.a)return
s=a.b
if(s.a!==0&&!s.D(0,r.c))return
if(r.w){r.x=!0
return}s=r.r
if(s!=null)s.A()
r.r=A.cZ(B.Q,r.gld())},
ek(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$ek=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.w=!0
q=3
i=n.a
h=n.b.a
s=6
return A.a(i.b.aM(h.a,1,"id = ?",[n.c]),$async$ek)
case 6:m=b
l=null
if(J.fp(m))l=A.e4(h,J.bD(m),i.z,i.Q)
if(l==null)g="<null>"
else{f=new A.O("")
A.a9(f,l)
i=f.a
g=A.au(B.l.u(B.f.u(i.charCodeAt(0)==0?i:i)).a)}k=g
if(!J.x(k,n.y)){n.y=k
i=n.e
if(i!=null)i.t(0,l)}o.push(5)
s=4
break
case 3:q=2
d=p.pop()
j=A.E(d)
i=n.e
if(i!=null)i.li(j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.w=!1
if(n.x){n.x=!1
i=n.r
if(i!=null)i.A()
n.r=A.cZ(B.Q,n.gld())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ek,r)},
tp(){var s=this.r
if(s!=null)s.A()
s=this.f
if(s!=null)s.A()
s=this.e
if(s!=null)s.p()}}
A.pa.prototype={
$0(){var s=this.a,r=s.a.f.a
s.f=new A.aR(r,A.o(r).i("aR<1>")).aL(s.gq7())
s.ek()},
$S:0}
A.ra.prototype={
bX(a,b){var s,r=this
r.c.$1(++r.b)
s=new A.r($.v,b.i("r<0>"))
r.a=r.a.bi(new A.rb(r,new A.aI(s,b.i("aI<0>")),a),t.H)
return s}}
A.rb.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.ak(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.E(i)
l=A.ae(i)
n.b.bO(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a
j.c.$1(--j.b)
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:24}
A.lZ.prototype={}
A.fE.prototype={}
A.nr.prototype={
bD(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$bD=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a6=n.d
if(a6==null){q=B.b8
s=1
break}m=0
l=0
k=0
j=!1
b=n.a
a=b.at
a===$&&A.y()
a8=J
s=3
return A.a(a.dI(25),$async$bD)
case 3:a0=a8.L(b0),a1=n.c
case 4:if(!a0.m()){s=5
break}i=a0.gn()
p=7
s=i.e===B.aB?10:12
break
case 10:s=13
return A.a(n.cb(i,a6),$async$bD)
case 13:h=b0
s=h?14:15
break
case 14:s=16
return A.a(a.lO(i.b),$async$bD)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.aC?17:18
break
case 17:s=19
return A.a(n.ea(i),$async$bD)
case 19:g=b0
s=g?20:21
break
case 20:s=22
return A.a(a.lO(i.b),$async$bD)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
a7=o.pop()
f=A.E(a7)
j=!0
e=i.w+1
d=a1.rU(e)
a3=i.b
a4=J.an(f)
a5=A.bJ()
s=23
return A.a(a.uy(a3,a4,e,a5+B.b.M(d.a,1000)),$async$bD)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:for(b=b.ch,a=new A.dz(b,b.r,b.e);a.m();){c=a.d
a0=c
if(b.h(0,a0)==null)A.w(A.u('No store "'+a0+'" registered in this LocalPocket.'))}q=new A.fE(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bD,r)},
cb(a,b){return this.qt(a,b)},
qt(a1,a2){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$cb=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:e={}
d=t.G.a(B.e.an(a1.f,null))
c=A.t(d.h(0,"ref_id"))
b=A.t(d.h(0,"hash"))
a=A.S(d.h(0,"name"))
if(a==null)a=b+".bin"
s=3
return A.a(a2.co(b),$async$cb)
case 3:if(!a4)throw A.b(A.u("Blob for hash "+b+" not found in store"))
s=4
return A.a(a2.cF(b),$async$cb)
case 4:l=a4
if(l==null)throw A.b(A.u("Blob size for hash "+b+" is unavailable"))
m=null
p=6
k=n.b.z
k===$&&A.y()
s=9
return A.a(k.bz(a1.d),$async$cb)
case 9:m=a4
p=2
s=8
break
case 6:p=5
a0=o.pop()
s=8
break
case 5:s=2
break
case 8:i=null
if(m!=null)for(k=m.e,h=k.length,g=0;g<h;++g){f=k[g]
if(B.a.L(f,B.a.q(b,0,10))||B.a.L(f,a)){i=f
break}}e.a=null
s=i!=null?10:12
break
case 10:e.a=i
s=11
break
case 12:s=13
return A.a(n.b.vs(a1.d,A.l([a,new A.eF(a,l,new A.nt(a2,b))],t.N,t.h3)),$async$cb)
case 13:k=a4.e
e.a=k.length!==0?B.c.gW(k):a
case 11:s=14
return A.a(n.a.a2(new A.nu(e,c,a1),t.P),$async$cb)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cb,r)},
ea(a){return this.qs(a)},
qs(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$ea=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.G.a(B.e.an(a.f,null))
n=A.t(o.h(0,"ref_id"))
m=A.S(o.h(0,"remote_name"))
l=A.t(o.h(0,"hash"))
s=m!=null?3:4
break
case 3:s=5
return A.a(p.b.vq(a.d,A.m([m],t.s)),$async$ea)
case 5:case 4:s=6
return A.a(p.a.a2(new A.ns(n,l,a),t.P),$async$ea)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ea,r)},
d1(a,b,c,d){return this.uD(a,b,c,d)},
uD(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$d1=A.c(function(e,a0){if(e===1)return A.d(a0,r)
for(;;)switch(s){case 0:s=2
return A.a(a.eM("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$d1)
case 2:j=a0
i=A.B4(c,A.al(c).c)
h=J.at(j)
g=t.lS
f=A.om(new A.bv(h.cr(j,new A.nv(),t.v),g),g.i("n.E"))
g=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!f.D(0,n)?6:7
break
case 6:s=8
return A.a(a.cZ(0,"lp_file_refs",A.l(["ref_id",A.lA(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.b4),$async$d1)
case 8:case 7:case 4:c.length===g||(0,A.H)(c),++o
s=3
break
case 5:h=h.gv(j)
case 9:if(!h.m()){s=10
break}g=h.gn()
m=A.S(g.h(0,"remote_name"))
if(m==null){s=9
break}if(i.D(0,m)){s=9
break}l=A.t(g.h(0,"state"))
if(l==="pending_remove"||l==="pending_upload"){s=9
break}s=11
return A.a(a.R("lp_file_refs","ref_id = ?",[g.h(0,"ref_id")]),$async$d1)
case 11:k=A.S(g.h(0,"hash"))
s=k!=null&&k.length!==0&&!B.a.L(k,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aw(u.y,[k]),$async$d1)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$d1,r)}}
A.nt.prototype={
$0(){return this.a.bv(this.b)},
$S:148}
A.nu.prototype={
$1(a){return this.md(a)},
md(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.F("lp_file_refs",A.l(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.Z(new A.a3(p.c,A.ak([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ns.prototype={
$1(a){return this.mc(a)},
mc(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.R("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aw(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.Z(new A.a3(p.c,A.ak([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.nv.prototype={
$1(a){return A.S(a.h(0,"remote_name"))},
$S:58}
A.bb.prototype={}
A.ot.prototype={
gkW(){return this.b},
d0(a,b,c){return this.un(a,b,c)},
um(a,b){return this.d0("imgs",a,b)},
un(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$d0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.b.eM("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$d0)
case 3:o=n.av(e,A.EB(),t.A)
o=A.Q(o,o.$ti.i("R.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d0,r)},
cT(a,b,c,d,e,f,g){return this.rB(a,b,c,d,e,f,g)},
rA(a,b,c,d){return this.cT(a,null,b,"imgs",null,c,d)},
rB(a,b,c,d,e,f,g){var s=0,r=A.h(t.A),q,p=this,o,n,m
var $async$cT=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:o=p.gkW()
s=3
return A.a(o.bw(a,b,c),$async$cT)
case 3:n=i
s=4
return A.a(o.cF(n),$async$cT)
case 4:m=i
if(m==null)m=0
s=5
return A.a(p.a.a2(new A.ou(g,f,d,n,m,A.lA(),e),t.A),$async$cT)
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cT,r)},
dT(a,b,c,d,e){return this.uH(a,b,c,d,e)},
uG(a,b,c){return this.dT("imgs",0,a,b,c)},
uH(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k
var $async$dT=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:m=p.gkW()
s=3
return A.a(p.d0(a,c,e),$async$dT)
case 3:l=g
k=J.J(l)
if(k.gB(l))throw A.b(A.u("No files found for "+e+"/"+c+"/"+a))
o=d!=null?k.cW(l,new A.ov(d),new A.ow(d)):k.h(l,b)
if(o.r==="remote_only")throw A.b(A.u("File is remote_only; download it before opening."))
k=Date.now()
n=o.e
s=4
return A.a(p.a.b.aw("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[k,n]),$async$dT)
case 4:q=m.bv(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dT,r)},
eQ(a,b,c,d,e,f){return this.v8(0,b,c,d,e,f)},
v8(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$eQ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.d0(b,d,f),$async$eQ)
case 3:n=h
m=J.J(n)
if(m.gB(n)){s=1
break}o=e!=null?m.cW(n,new A.ox(e),new A.oy(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.oz(o,f,d,b),t.P),$async$eQ)
case 4:case 1:return A.e(q,r)}})
return A.f($async$eQ,r)},
cB(a,b){return this.mD(a,b)},
mD(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$cB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=p.b
s=3
return A.a(j.cU(b),$async$cB)
case 3:i=0+d
h=Date.now()-B.b.M(a.a,1000)
o=p.a.b,n=t.s
case 4:s=6
return A.a(o.bW("lp_blobs",A.m(["hash"],n),250,"hash ASC","refcount <= 0 AND last_access <= ?",[h]),$async$cB)
case 6:m=d
l=J.J(m)
if(l.gB(m)){s=5
break}l=l.gv(m)
case 7:if(!l.m()){s=8
break}k=A.t(l.gn().h(0,"hash"))
s=9
return A.a(j.dH(k),$async$cB)
case 9:s=10
return A.a(o.R("lp_blobs","hash = ?",[k]),$async$cB)
case 10:++i
s=7
break
case 8:s=4
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cB,r)},
cn(a){return this.tx(a)},
tx(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cn=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a.b
d=A
s=3
return A.a(f.aN("SELECT SUM(size) as total FROM lp_blobs"),$async$cn)
case 3:e=d.ii(c)
if(e==null)e=0
if(e<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(e>a)){s=5
break}s=6
return A.a(f.aN("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cn)
case 6:l=c
k=J.J(l)
if(k.gB(l)){s=5
break}k=k.gv(l)
case 7:if(!k.m()){s=8
break}j=k.gn()
if(e<=a){s=8
break}i=A.t(j.h(0,"hash"))
h=A.X(j.h(0,"size"))
s=9
return A.a(g.dH(i),$async$cn)
case 9:s=10
return A.a(f.F("lp_file_refs",A.l(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$cn)
case 10:s=11
return A.a(f.R("lp_blobs","hash = ?",[i]),$async$cn)
case 11:e-=h;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cn,r)}}
A.ou.prototype={
$1(a){return this.mg(a)},
mg(a0){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$1=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:j=a0.b
i=Date.now()
h=t.s
g=p.a
f=p.b
e=p.c
d=p.d
s=3
return A.a(j.eN("lp_file_refs",A.m(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a2
b=J.J(c)
if(b.gY(c)){q=A.x6(b.gC(c))
s=1
break}a=J
s=7
return A.a(j.eN("lp_blobs",A.m(["hash","refcount"],h),1,"hash = ?",[d]),$async$$1)
case 7:s=a.ci(a2)?4:6
break
case 4:s=8
return A.a(j.ai(0,"lp_blobs",A.l(["hash",d,"size",p.e,"state","local","refcount",1,"last_access",i,"created_at",i],t.N,t.X)),$async$$1)
case 8:s=5
break
case 6:s=9
return A.a(j.aw("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",[i,d]),$async$$1)
case 9:case 5:s=10
return A.a(j.eN("lp_outbox",A.m(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 10:o=a2
h=J.J(o)
n=h.gY(o)&&J.aa(h.gC(o),"base_updated")==null?A.S(J.aa(h.gC(o),"op_id")):null
h=p.f
b=p.r
m=t.N
l=t.X
s=11
return A.a(j.cZ(0,"lp_file_refs",A.l(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.a_),$async$$1)
case 11:k=A.lA()
s=12
return A.a(j.ai(0,"lp_op_queue",A.l(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.e.a8(A.l(["ref_id",h,"field",e,"hash",d,"name",b==null?d+".bin":b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 12:a0.Z(new A.a3(g,A.ak([f],m)))
q=new A.bb(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:59}
A.ov.prototype={
$1(a){return a.a===this.a},
$S:44}
A.ow.prototype={
$0(){return A.w(A.u("FileRef "+this.a+" not found"))},
$S:28}
A.ox.prototype={
$1(a){return a.a===this.a},
$S:44}
A.oy.prototype={
$0(){return A.w(A.u("FileRef "+this.a+" not found"))},
$S:28}
A.oz.prototype={
$1(a){return this.mh(a)},
mh(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=Date.now()
n=q.a
m=n.r==="pending_upload"&&n.f==null
l=t.N
k=t.X
j=n.a
i=n.e
s=m?2:4
break
case 2:s=5
return A.a(p.R("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aw(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.F("lp_op_queue",A.l(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.F("lp_file_refs",A.l(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.ai(0,"lp_op_queue",A.l(["op_id",A.lA(),"store",q.b,"record_id",q.c,"kind","fileRemove","payload_json",B.e.a8(A.l(["ref_id",j,"field",q.d,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.Z(new A.a3(q.b,A.ak([q.c],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.r_.prototype={
ej(a){var s=$.zP()
if(!s.b.test(a))throw A.b(A.P('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
bn(){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j
var $async$bn=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.lE()
if(n==null){q=null
s=1
break}l=t.m
s=7
return A.a(A.a2(n.getDirectory(),l),$async$bn)
case 7:m=b
s=8
return A.a(A.a2(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$bn)
case 8:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bn,r)},
bw(a,b,c){var s=null
return this.uT(a,b,c)},
uT(a3,a4,a5){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bw=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=null
a0=A.m([],t.bs)
a1=new A.rE(a0)
a0=t.i4
l=A.m([],a0)
k=new A.eS(A.d7(new A.lg(new A.r0(l),A.m([],a0),t.mI)))
j=0
p=4
a0=new A.c2(A.bi(a3,"stream",t.K))
p=7
case 10:s=12
return A.a(a0.m(),$async$bw)
case 12:if(!a7){s=11
break}i=a0.gn()
J.dj(a1,i)
k.a.t(0,i)
j+=J.ar(i)
s=10
break
case 11:n.push(9)
s=8
break
case 7:n=[4]
case 8:p=4
s=13
return A.a(a0.A(),$async$bw)
case 13:s=n.pop()
break
case 9:k.a.p()
if(a5!=null&&!J.x(j,a5)){a0=A.u("Size mismatch: expected "+A.p(a5)+" but got "+A.p(j))
throw A.b(a0)}c=a
h=c==null?A.au(J.lL(l).a):c
m.ej(h)
if(a4!=null&&!J.x(h,a4)){a0=A.u("SHA-256 mismatch: expected "+a4+" but got "+A.p(h))
throw A.b(a0)}g=a1.jv()
s=14
return A.a(m.bn(),$async$bw)
case 14:f=a7
s=f!=null?15:17
break
case 15:a0=t.m
s=18
return A.a(A.a2(f.getFileHandle(h,{create:!0}),a0),$async$bw)
case 18:e=a7
s=19
return A.a(A.a2(e.createWritable(),a0),$async$bw)
case 19:d=a7
a0=t.X
s=20
return A.a(A.a2(d.write(t.a.a(J.wK(g))),a0),$async$bw)
case 20:s=21
return A.a(A.a2(d.close(),a0),$async$bw)
case 21:s=16
break
case 17:m.b.j(0,h,g)
case 16:q=h
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
throw a2
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bw,r)},
bv(a){return this.uJ(a)},
uJ(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bv=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ej(a)
h=n.b
if(h.I(a)){h=h.h(0,a)
h.toString
q=A.qe(h,t.L)
s=1
break}s=3
return A.a(n.bn(),$async$bv)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
h=t.m
s=10
return A.a(A.a2(m.getFileHandle(a,{create:!1}),h),$async$bv)
case 10:l=c
s=11
return A.a(A.a2(l.getFile(),h),$async$bv)
case 11:k=c
s=12
return A.a(A.a2(k.arrayBuffer(),t.a),$async$bv)
case 12:j=c
i=A.bt(j,0,null)
i=A.qe(i,t.L)
q=i
s=1
break
p=2
s=9
break
case 7:p=6
f=o.pop()
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.u("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bv,r)},
dH(a){return this.rW(a)},
rW(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$dH=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:o.ej(a)
o.b.P(0,a)
s=2
return A.a(o.bn(),$async$dH)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(A.x8(n,a),$async$dH)
case 9:q=1
s=8
break
case 6:q=5
l=p.pop()
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dH,r)},
co(a){return this.tD(a)},
tD(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k
var $async$co=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ej(a)
if(n.b.I(a)){q=!0
s=1
break}s=3
return A.a(n.bn(),$async$co)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(A.a2(m.getFileHandle(a,{create:!1}),t.m),$async$co)
case 10:q=!0
s=1
break
p=2
s=9
break
case 7:p=6
k=o.pop()
q=!1
s=1
break
s=9
break
case 6:s=2
break
case 9:case 5:q=!1
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$co,r)},
cF(a){return this.mQ(a)},
mQ(a){var s=0,r=A.h(t.I),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cF=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:n.ej(a)
j=n.b
if(j.I(a)){q=j.h(0,a).length
s=1
break}s=3
return A.a(n.bn(),$async$cF)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
j=t.m
s=10
return A.a(A.a2(m.getFileHandle(a,{create:!1}),j),$async$cF)
case 10:l=c
s=11
return A.a(A.a2(l.getFile(),j),$async$cF)
case 11:k=c
j=k.size
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:case 5:q=null
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cF,r)},
cU(a){return this.rH(a)},
rH(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$cU=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(m.bn(),$async$cU)
case 3:f=c
if(f==null){q=0
s=1
break}l=0
p=5
i=new A.c2(A.bi(A.x7(f),"stream",t.K))
p=8
h=t.X
case 11:s=13
return A.a(i.m(),$async$cU)
case 13:if(!c){s=12
break}k=i.gn()
j=k.name
if(!J.An(j,"tmp_")){s=11
break}p=15
s=18
return A.a(A.a2(f.removeEntry(j,{recursive:!1}),h),$async$cU)
case 18:++l
p=8
s=17
break
case 15:p=14
e=o.pop()
s=17
break
case 14:s=8
break
case 17:s=11
break
case 12:n.push(10)
s=9
break
case 8:n=[5]
case 9:p=5
s=19
return A.a(i.A(),$async$cU)
case 19:s=n.pop()
break
case 10:p=2
s=7
break
case 5:p=4
d=o.pop()
s=7
break
case 4:s=2
break
case 7:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cU,r)}}
A.r0.prototype={
$1(a){return B.c.G(this.a,a)},
$S:61}
A.kl.prototype={
glX(){return 1}}
A.lV.prototype={
cw(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h
var $async$cw=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=m.b
s=h==null?3:4
break
case 3:j=m.d
l=j==null?m.d=m.a.ha():j
p=5
s=8
return A.a(l,$async$cw)
case 8:k=b
m.b=k
s=k.glX()<0.25?9:10
break
case 9:s=11
return A.a(m.iJ(),$async$cw)
case 11:case 10:i=m.b
i.toString
q=i
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:n=[2]
case 6:p=2
m.d=null
s=n.pop()
break
case 7:case 4:s=h.glX()<0.25?12:13
break
case 12:s=14
return A.a(m.iJ(),$async$cw)
case 14:case 13:i=m.b
i.toString
q=i
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cw,r)},
eO(){var s=0,r=A.h(t.q),q,p=this
var $async$eO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=p.b==null?3:4
break
case 3:s=5
return A.a(p.a.ha(),$async$eO)
case 5:p.b=b
case 4:q=p.iJ()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eO,r)},
iJ(){var s=this.c
if(s!=null)return s
return this.c=this.fd()},
fd(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fd=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:++m.e
p=3
k=m.b
k.toString
s=6
return A.a(m.a.jr(k),$async$fd)
case 6:l=b
m.b=l
q=l
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
m.c=null
s=n.pop()
break
case 5:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fd,r)}}
A.jL.prototype={
hC(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$hC=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.y()
s=7
return A.a(m.hE(),$async$hC)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.E(k)
if(m instanceof A.bn){n.as=!1
n.ax=!0}else if(m instanceof A.aE)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hC,r)},
f7(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$f7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.y()
n=new A.pt(o,A.m(["data"],t.s),B.b5,p.gqf(),p.gqi(),A.cj(null,t.H))
p.Q=n
s=3
return A.a(n.aF(),$async$f7)
case 3:case 1:return A.e(q,r)}})
return A.f($async$f7,r)},
e3(){var s=0,r=A.h(t.H),q=this,p,o
var $async$e3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aG()
s=2
return A.a(o instanceof A.r?o:A.bg(o,t.H),$async$e3)
case 2:q.Q=null
for(o=q.ch,p=new A.bT(o,o.r,o.e);p.m();)p.d.A()
o.aK(0)
q.CW.aK(0)
return A.e(null,r)}})
return A.f($async$e3,r)},
qg(){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q){p=s[q]
this.e6(p,new A.c3(p,B.O,null))}},
qj(a){var s,r
if(a.a==="delete"){this.fW(a.b)
return}s=a.b
r=s.b
this.e6(r,new A.c3(r,B.O,s))},
fW(a){return this.rb(a)},
rb(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$fW=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=null
p=4
m=n.z
m===$&&A.y()
s=7
return A.a(m.bz(a.a),$async$fW)
case 7:k=c
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.E(j)
if(m instanceof A.bu){m=a.b
n.e6(m,new A.c3(m,B.aj,null))
s=1
break}else if(m instanceof A.aE){s=1
break}else throw j
s=6
break
case 3:s=2
break
case 6:if(k==null){m=a.b
n.e6(m,new A.c3(m,B.aj,null))
s=1
break}m=a.b
n.e6(m,new A.c3(m,B.O,k))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fW,r)},
e6(a,b){var s,r
this.CW.j(0,a,b)
s=this.ch
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.cZ(B.b6,new A.pC(this,a)))},
vq(a,b){return this.hN(null,a,null,b,null)},
hN(a,b,c,d,e){return this.vt(a,b,c,d,e)},
vs(a,b){return this.hN(null,a,null,null,b)},
vt(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$hN=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.cs(0,new A.pD(),t.N,t.co)
n=p.z
n===$&&A.y()
q=n.hM(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)}}
A.pC.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.P(0,q)
s=r.CW.P(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.pD.prototype={
$2(a,b){return new A.V(a,new A.cK("imgs+",b.a,b.b,b.c),t.ia)},
$S:63}
A.pr.prototype={
eC(a,b,c,d,e,f){return this.uq(a,b,c,d,e,f)},
uq(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$eC=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.F7(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.z(a,"\\","\\\\")
m=A.z(m,"'","\\'")
n=A.z(n,"\\","\\\\")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.z(n,"'","\\'")+"'")+")"
if(c==null)o=l
else{n=A.z(c,"\\","\\\\")
o=l+" && id>"+("'"+A.z(n,"'","\\'")+"'")}}n=t.N
n=A.I(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+f)
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.c.K(b,","))
k=p.b.bh("/api/collections/data/records").lY(n)
s=3
return A.a(p.l0("GET",k),$async$eC)
case 3:j=a0
p.dm(j,A.m([200],t.t),k)
i=p.cL(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.c7("List response has no items array."))
h=J.av(i,new A.ps(p),t.h)
h=A.Q(h,h.$ti.i("R.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eC,r)},
bz(a){return this.mG(a)},
mG(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bh("/api/collections/data/records/"+A.ls(2,a,B.k,!1))
s=3
return A.a(p.l0("GET",o),$async$bz)
case 3:n=c
if(n.a===404)throw A.b(A.Bp("not found"))
p.dm(n,A.m([200],t.t),o)
q=p.dz(p.cL(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bz,r)},
h9(a,b,c){return this.rO(a,b,c)},
rO(a,b,c){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$h9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bh("/api/collections/data/records")
s=3
return A.a(p.bf("POST",o,B.e.a8(A.l(["id",b,"store",c,"data",B.e.an(a,null)],t.N,t.z),null)),$async$h9)
case 3:n=e
if(n.a===400&&p.pU(n))throw A.b(new A.fA(p.e7(n)))
p.dm(n,A.m([200,201],t.t),o)
q=p.dz(p.cL(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
pU(a){var s,r,q,p,o,n
try{s=this.cL(a)
r=J.aa(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
eW(a,b){return this.vp(a,b)},
vp(a,b){var s=0,r=A.h(t.h),q,p=this,o,n
var $async$eW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.b.bh("/api/collections/data/records/"+A.ls(2,b,B.k,!1))
s=3
return A.a(p.bf("PATCH",o,B.e.a8(A.l(["data",B.e.an(a,null)],t.N,t.z),null)),$async$eW)
case 3:n=d
p.dm(n,A.m([200],t.t),o)
q=p.dz(p.cL(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eW,r)},
hM(a,b,c,d,e){return this.vr(a,b,c,d,e)},
vr(a,b,c,d,e){var s=0,r=A.h(t.h),q,p=this,o,n,m,l
var $async$hM=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bh("/api/collections/data/records/"+A.ls(2,b,B.k,!1))
m=t.N
l=A.I(m,m)
if(d!=null)l.j(0,"imgs-",B.e.a8(d,null))
if(e==null)m=null
else{m=A.o(e).i("aO<2>")
m=A.Q(new A.aO(e,m),m.i("n.E"))}s=3
return A.a(p.cQ(new A.fI("PATCH",n,B.bF,l,m==null?B.bw:m)),$async$hM)
case 3:o=g
p.dm(o,A.m([200],t.t),n)
q=p.dz(p.cL(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)},
eJ(a){return this.uS(a)},
uS(a3){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eJ=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:a1=p.b.bh("/api/batch")
a2=A.m([],t.ic)
for(o=J.at(a3),n=o.gv(a3),m=t.N,l=t.z,k=t.K;n.m();){j=n.gn()
a2.push(A.l(["method","PUT","url","/api/collections/data/records","body",A.l(["id",j.c,"store",j.b,"data",B.e.an(j.d,null)],m,l)],m,k))}s=3
return A.a(p.bf("POST",a1,B.e.a8(A.l(["requests",a2],m,t.ew),null)),$async$eJ)
case 3:i=a5
a2=i.a
if(a2===403)throw A.b(A.AP(p.e7(i)))
if(a2===400)throw A.b(new A.ec(p.e7(i)))
p.dm(i,A.m([200],t.t),a1)
h=B.e.an(i.c,null)
a2=t.j
if(a2.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a2.b(e))throw A.b(A.c7("Batch response has no results array."))}else throw A.b(A.c7("Batch response is not a list or envelope."))
g=e}a2=A.m([],t.g2)
n=J.J(g)
m=t.f
d=0
for(;;){if(!(d<n.gk(g)&&d<o.gk(a3)))break
if(m.b(n.h(g,d))){l=m.a(n.h(g,d))
k=o.h(a3,d)
c=l.h(0,"status")
j=J.df(c)
b=j.X(c,200)||j.X(c,201)
a=l.h(0,"body")
j=b&&m.b(a)?p.dz(a):null
l=b?null:p.o0(l)
a0=b&&m.b(a)?B.e.a8(a.h(0,"data"),null):null
a2.push(new A.hg(k.a,b,j,l,a0))}++d}q=a2
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eJ,r)},
hE(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$hE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bf("POST",p.b.bh("/api/batch"),B.e.a8(A.l(["requests",[]],t.N,t.kS),null)),$async$hE)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.Aq(p.e7(o)))
if(n===408||n===429||n>=500)throw A.b(A.vX("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hE,r)},
bf(a,b,c){return this.qU(a,b,c)},
l0(a,b){return this.bf(a,b,null)},
qU(a,b,c){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bf=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.cw(),$async$bf)
case 7:m=e
s=8
return A.a(n.fV(a,b,c,m.a),$async$bf)
case 8:l=e
s=l.a===401?9:10
break
case 9:s=11
return A.a(i.eO(),$async$bf)
case 11:k=e
s=12
return A.a(n.fV(a,b,c,k.a),$async$bf)
case 12:l=e
case 10:i=l
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
i=A.E(g)
if(i instanceof A.cl){j=i
throw A.b(A.vX(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bf,r)},
cQ(a){return this.qW(a)},
qW(a3){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cQ=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:p=4
f=n.c
s=7
return A.a(f.cw(),$async$cQ)
case 7:m=a5
e=a3.a
d=a3.b
c=a3.c
b=t.N
l=A.cm(c,b,b)
J.bC(l,"Authorization","Bearer "+m.a)
a=a3.d
a0=a3.e
k=new A.fI(e,d,l,a,a0)
l=n.a
s=8
return A.a(l.cD(k),$async$cQ)
case 8:j=a5
s=j.a===401?9:10
break
case 9:s=11
return A.a(f.eO(),$async$cQ)
case 11:i=a5
h=A.cm(c,b,b)
J.bC(h,"Authorization","Bearer "+i.a)
k=new A.fI(e,d,h,a,a0)
s=12
return A.a(l.cD(k),$async$cQ)
case 12:j=a5
case 10:l=j
q=l
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
l=A.E(a2)
if(l instanceof A.cl){g=l
throw A.b(A.vX(g.a))}else throw a2
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cQ,r)},
fV(a,b,c,d){return this.qT(a,b,c,d)},
qT(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$fV=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.I(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.aQ(new A.fJ(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fV,r)},
dm(a,b,c){if(B.c.D(b,a.a))return
throw A.b(this.pY(a,c))},
pY(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.e7(a)
if(401===s)return new A.b1(q)
if(403===s)return new A.bn(q)
if(404===s)return new A.bu(q)
if(408===s||429===s)return new A.ey(r,q)
if(400===s)return new A.dI(q)
if(s>=500)return new A.k0(q)
return new A.he("Unexpected status "+s+" for "+b.l(0)+": "+q)},
e7(a){var s,r,q,p,o
try{s=this.cL(a)
r=J.aa(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.aa(s,"data")
if(t.f.b(q)){p=q
p=p.gY(p)}else p=!1
if(p){p=B.e.a8(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.q(p,0,500)},
cL(a){var s,r,q,p=null
try{p=B.e.an(a.c,null)}catch(r){q=A.E(r)
if(t.Y.b(q)){s=q
throw A.b(A.c7("Response is not valid JSON: "+s.gjl()))}else throw r}if(t.f.b(p))return A.b4(p,t.N,t.X)
throw A.b(A.c7("Expected a JSON object, got "+J.bE(p).l(0)+"."))},
dz(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.c7("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.c7("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.b4(o,n,m):A.I(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.wM(k,n)
j=A.Q(j,j.$ti.i("n.E"))}else j=B.m
return new A.cs(s,p,q,l,j)},
o0(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.p(r)+")"}}
A.ps.prototype={
$1(a){return this.a.dz(a)},
$S:64}
A.hb.prototype={}
A.f7.prototype={}
A.pt.prototype={
aF(){var s=0,r=A.h(t.H),q,p=this
var $async$aF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.f){s=1
break}p.f=!0
p.eg()
case 1:return A.e(q,r)}})
return A.f($async$aF,r)},
aG(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.f=!1
n=q.r
n=n==null?null:n.A()
s=2
return A.a(n instanceof A.r?n:A.bg(n,t.H),$async$aG)
case 2:q.r=null
p=q.w
if(p!=null?(p.a.a&30)===0:o)p.am()
return A.e(null,r)}})
return A.f($async$aG,r)},
eg(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$eg=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n=o.c,m=t.H
case 2:if(!o.f){s=3
break}q=5
s=8
return A.a(o.cJ(),$async$eg)
case 8:q=1
s=7
break
case 5:q=4
k=p.pop()
s=7
break
case 4:s=1
break
case 7:if(!o.f){s=3
break}s=9
return A.a(A.AS(n,m),$async$eg)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eg,r)},
cJ(){return this.nN()},
nN(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.cw(),$async$cJ)
case 3:m=b
l=t.N
s=4
return A.a(n.a.eF(new A.fJ("GET",n.b.bh("/api/realtime"),A.l(["Authorization","Bearer "+m.a],l,l),null)),$async$cJ)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.j6("realtime connect status "+n,null))
s=!p.f?5:6
break
case 5:s=7
return A.a(k.c.aL(new A.py()).A(),$async$cJ)
case 7:s=1
break
case 6:++p.y
p.w=new A.aI(new A.r($.v,t.D),t.Q)
n=$.lI()
o.a=!1
p.r=k.c.bt(new A.pz(o,p,new A.u4(new A.rY(n)),m),new A.pA(p),new A.pB(p))
s=8
return A.a(p.w.a,$async$cJ)
case 8:p.r=null
case 1:return A.e(q,r)}})
return A.f($async$cJ,r)},
ft(a,b){return this.oR(a,b)},
oR(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ft=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.aQ(new A.fJ("POST",l.b.bh("/api/realtime"),A.l(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.e.a8(A.l(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$ft)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.j6("realtime subscribe status "+l,null))
s=1
break
case 4:j=a0.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
l=t.f
if(!l.b(n)){s=1
break}try{k=n
i=k.h(0,"id")
h=k.h(0,"store")
g=k.h(0,"updated")
j=k.h(0,"data")
f=k.h(0,"imgs")
k=typeof i=="string"?i:""
e=typeof h=="string"?h:""
d=typeof g=="string"?g:""
l=l.b(j)?A.b4(j,t.N,t.X):B.y
if(t.j.b(f)){c=J.wM(f,t.N)
c=A.Q(c,c.$ti.i("n.E"))}else c=B.m
m=new A.cs(k,e,d,l,c)
p.e.$1(new A.hb(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$ft,r)}}
A.py.prototype={
$1(a){},
$S:34}
A.pz.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.c.tG(a)
for(s=j.length,r=k.b,q=k.d,p=t.H,o=k.a,n=t.P,m=0;m<j.length;j.length===s||(0,A.H)(j),++m){l=j[m]
r.x=r.x.bi(new A.pu(r,l,q),p).iV(new A.pv()).bi(new A.pw(o,r,l),n).iV(new A.px())}},
$S:34}
A.pu.prototype={
$1(a){return this.a.ft(this.b,this.c)},
$S:24}
A.pv.prototype={
$1(a){},
$S:27}
A.pw.prototype={
$1(a){var s=this.a
if(!s.a&&this.c.a!=null){s.a=!0
this.b.d.$0()}},
$S:66}
A.px.prototype={
$1(a){},
$S:27}
A.pA.prototype={
$0(){var s=this.a.w
if((s.a.a&30)===0)s.am()},
$S:0}
A.pB.prototype={
$1(a){var s=this.a.w
if((s.a.a&30)===0)s.am()},
$S:27}
A.u4.prototype={
tG(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.jv()
r=A.m([],t.bi)
for(q=s.length,p=0;;){o=this.pR(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.ce(p,o,q)))
p=o+1
m=this.nU(B.a.vk(new A.cd(!0).c7(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.d.aR(s,p))
return r},
pR(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
nU(a){var s,r,q,p,o,n,m=null
if(B.a.L(a,"PB_CONNECT:"))return new A.f7(B.a.cz(B.a.a7(a,11)),m)
if(B.a.L(a,"event:")){this.b=B.a.cz(B.a.a7(a,6))
return m}if(B.a.L(a,"data:")){s=B.a.cz(B.a.a7(a,5))
if(J.ar(s)===0)return m
try{r=B.e.an(s,m)
if(t.f.b(r)){q=A.b4(r,t.N,t.X)
p=this.b
this.b=null
o=J.aa(q,"clientId")
if(J.x(p,"PB_CONNECT")&&typeof o=="string")return new A.f7(o,m)
return new A.f7(m,q)}}catch(n){}return m}return m}}
A.fJ.prototype={}
A.cK.prototype={
mX(){return this.d.$0()},
gk(a){return this.c}}
A.fI.prototype={}
A.fK.prototype={}
A.cl.prototype={
l(a){return"HttpTransportException: "+this.a},
$iG:1}
A.kd.prototype={}
A.pp.prototype={
aQ(a){return this.mM(a)},
mM(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$aQ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.eF(a),$async$aQ)
case 7:m=c
j=m.c
s=8
return A.a(B.ah.jT(j).d_(0).hL(B.R),$async$aQ)
case 8:l=c
j=m.a
i=m.b
q=new A.fK(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.E(g)
if(j instanceof A.cl)throw g
else{k=j
j=A.j6("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aQ,r)},
cD(a){return this.mN(a)},
mN(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$cD=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.Bl(a6.a,a6.b)
h.r.G(0,a6.c)
h.x.G(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.mX(),$async$cD)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.zu(a0)
a3=new A.el("application".toLowerCase(),"octet-stream".toLowerCase(),new A.eL(A.I(d,d),e))
b.push(new A.ju(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.H)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.aQ(m).hL(B.R),$async$cD)
case 11:k=a8
g=k.w
s=12
return A.a(B.ah.jT(g).d_(0).hL(B.R),$async$cD)
case 12:j=a8
g=k.b
f=k.e
q=new A.fK(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.E(a5)
if(g instanceof A.cl)throw a5
else{i=g
g=A.j6("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cD,r)},
eF(a){return this.uL(a)},
uL(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$eF=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.BC(a,a0)
a1.r.G(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gj7().j5(j)
i.nE()
i.y=A.Fa(j)
h=i.gc6()
if(h==null){j=t.N
i.sc6(A.vJ("text","plain",A.l(["charset",i.gj7().gaB()],j,j)))}else{j=i.gc6()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.cm(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.l(["charset",i.gj7().gaB()],j,j)
e=h.a
d=h.b
c=A.b4(h.c,j,j)
c.G(0,f)
i.sc6(A.vJ(e,d,c))}}}p=4
s=7
return A.a(n.a.aQ(a1).hL(B.R),$async$eF)
case 7:m=a5
j=t.N
l=A.I(j,j)
m.e.a9(0,new A.pq(l))
j=m.b
i=m.w
q=new A.kd(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.E(a2)
if(j instanceof A.cl)throw a2
else{k=j
a=A.j6("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eF,r)}}
A.pq.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:26}
A.bF.prototype={}
A.mu.prototype={
$2(a,b){var s,r,q,p
if(typeof a=="string"&&a.length!==0)try{s=B.e.an(a,null)
if(t.f.b(s)){q=A.b4(s,t.N,t.X)
return q}}catch(p){r=A.E(p)
q=A.qd("Corrupt lp_conflicts row: "+b+": "+A.p(r))
throw A.b(q)}return B.y},
$S:67}
A.mv.prototype={
$2(a,b){var s,r,q,p,o,n="Corrupt lp_conflicts row: "
if(typeof a=="string"&&a.length!==0)try{s=B.e.an(a,null)
if(t.j.b(s))try{p=J.ea(s,t.N)
p=p.jx(p)
return p}catch(o){r=A.E(o)
p=A.qd(n+b+": "+A.p(r))
throw A.b(p)}}catch(o){q=A.E(o)
p=A.qd(n+b+": "+A.p(q))
throw A.b(p)}return B.bT},
$S:68}
A.mw.prototype={
eB(a){return this.uo(a)},
uo(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$eB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.b.uU("lp_conflicts","detected_at ASC",n,o),$async$eB)
case 3:o=m.av(c,A.Ep(),t.n8)
o=A.Q(o,o.$ti.i("R.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eB,r)},
dd(a,b){return this.mF(a,b)},
mF(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dd)
case 3:o=d
n=J.J(o)
if(n.gB(o)){q=null
s=1
break}q=A.vt(n.gC(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
vv(a){var s={},r=A.xZ()
s.a=null
s=A.eE(new A.mz(s),new A.mA(s,this,a,new A.mB(this,r,a)),t.ba)
if(r.b!==r)A.w(new A.cN("Local '"+r.a+"' has already been initialized."))
r.b=s
return r.bq().gcG()},
dV(a,b,c){return this.va(a,b,c)},
va(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.af(c)
s=2
return A.a(p.a2(new A.mx(q,c,a,o.a,o,b),t.P),$async$dV)
case 2:return A.e(null,r)}})
return A.f($async$dV,r)},
el(a,b){return this.rl(a,b)},
rl(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$el=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dd(a,b),$async$el)
case 2:p=d
if(p==null)throw A.b(A.u("No conflict found for "+a+"/"+b))
s=3
return A.a(q.dV(b,p.d,a),$async$el)
case 3:return A.e(null,r)}})
return A.f($async$el,r)},
em(a,b){return this.rm(a,b)},
rm(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$em=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dd(a,b),$async$em)
case 2:p=d
if(p==null)throw A.b(A.u("No conflict found for "+a+"/"+b))
s=3
return A.a(q.dV(b,p.e,a),$async$em)
case 3:return A.e(null,r)}})
return A.f($async$em,r)}}
A.mB.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bq().ghr()){s=1
break}p=4
s=7
return A.a(n.a.eB(n.c),$async$$0)
case 7:m=b
if(!i.bq().ghr())J.dj(i.bq(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.E(h)
k=A.ae(h)
if(!i.bq().ghr())i.bq().bN(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.mA.prototype={
$0(){var s=this,r=s.b.a.f.a,q=s.d
s.a.a=new A.aR(r,A.o(r).i("aR<1>")).aL(new A.my(s.c,q))
q.$0()},
$S:0}
A.my.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:23}
A.mz.prototype={
$0(){var s=this.a.a
if(s!=null)s.A()},
$S:0}
A.mx.prototype={
$1(a){return this.mb(a)},
mb(a5){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$$1=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a=a5.b
a0=p.b
a1=p.c
s=3
return A.a(a.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 3:a2=a7
a3=J.J(a2)
if(a3.gB(a2))throw A.b(A.u("No conflict found for "+a0+"/"+a1))
a3=A.vt(a3.gC(a2)).e
o=new A.O("")
A.a9(o,a3)
n=o.a
m=p.d
o=new A.O("")
A.a9(o,A.b0(m,a3))
l=o.a
k=A.au(B.l.u(B.f.u(l.charCodeAt(0)==0?l:l)).a)
l=p.e.a.a
a4=J
s=6
return A.a(a.aM(l,1,"id = ?",[a1]),$async$$1)
case 6:s=a4.ci(a7)?4:5
break
case 4:s=7
return A.a(a.R("lp_conflicts","store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 7:s=8
return A.a(a.R("lp_sync_row","store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 8:s=9
return A.a(a.R("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 9:a3=t.N
a5.Z(new A.a3(a0,A.ak([a1],a3)))
a5.Z(new A.a3("lp_conflicts",A.ak([a1],a3)))
s=1
break
case 5:s=10
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 10:j=a7
i=J.J(j)
h=i.gY(j)?A.S(J.aa(i.gC(j),"remote_updated")):null
s=11
return A.a(a.R("lp_conflicts","store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 11:i=t.N
g=t.X
f=A.cm(p.f,i,g)
f.j(0,"id",a1)
e=J.x(f.h(0,"archived"),!0)
s=12
return A.a(a.F(l,A.de(m,e,null,null,a1,f),"id = ?",[a1]),$async$$1)
case 12:a3=A.e3(a3,f)
d=A.Q(a3,A.o(a3).c)
B.c.b8(d)
o=new A.O("")
A.a9(o,A.b0(m,f))
a3=o.a
c=a3.charCodeAt(0)==0?a3:a3
s=13
return A.a(a.F("lp_sync_row",A.l(["sync_state","dirty","base_json",n.charCodeAt(0)==0?n:n,"base_hash",k,"base_updated",h,"dirty_fields",B.e.a8(d,null)],i,g),"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 13:a4=J
s=17
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 17:s=a4.ci(a7)?14:16
break
case 14:b=Date.now()
a3=p.a.a.as
a3===$&&A.y()
a3=a3.jJ()
n=e?"archive":"upsert"
s=18
return A.a(a.ai(0,"lp_outbox",A.l(["op_id",a3,"store",a0,"record_id",a1,"kind",n,"payload_json",c,"base_updated",h,"base_hash",k,"dirty_fields",B.e.a8(d,null),"created_at",b,"updated_at",b],i,g)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a.F("lp_outbox",A.l(["kind",e?"archive":"upsert","payload_json",c,"base_updated",h,"base_hash",k],i,g),"store = ? AND record_id = ?",[a0,a1]),$async$$1)
case 19:case 15:a5.Z(new A.a3(a0,A.ak([a1],i)))
a5.Z(new A.a3("lp_conflicts",A.ak([a1],i)))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.ki.prototype={
aF(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$aF=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.eE(null,null,t.n6)
n.ay=A.eE(null,null,t.em)}n.z=!0
n.aJ(B.c0)
p=4
m=n.b
s=7
return A.a(m.hC(),$async$aF)
case 7:l=n.w
l===$&&A.y()
l.f=m.as
p=2
s=6
break
case 4:p=3
j=o.pop()
s=6
break
case 3:s=2
break
case 6:p=9
m=n.a.f.a
n.db=new A.aR(m,A.o(m).i("aR<1>")).aL(n.gu0())
m=n.b.ay
n.dx=new A.aR(m,A.o(m).i("aR<1>")).aL(n.gtZ())
p=2
s=11
break
case 9:p=8
i=o.pop()
s=12
return A.a(n.aG(),$async$aF)
case 12:throw i
s=11
break
case 8:s=2
break
case 11:n.dy=A.BR(B.b7,new A.qy(n))
n.aJ(n.dl())
n.k2.push("cycle")
s=13
return A.a(n.cO(),$async$aF)
case 13:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aF,r)},
aG(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1
o=p.dy
if(o!=null)o.A()
o=p.fr
if(o!=null)o.A()
o=p.fx
if(o!=null)o.A()
s=3
return A.a(p.id,$async$aG)
case 3:s=4
return A.a(p.cy,$async$aG)
case 4:s=5
return A.a(p.k3,$async$aG)
case 5:o=p.db
o=o==null?null:o.A()
n=t.H
s=6
return A.a(o instanceof A.r?o:A.bg(o,n),$async$aG)
case 6:o=p.dx
o=o==null?null:o.A()
s=7
return A.a(o instanceof A.r?o:A.bg(o,n),$async$aG)
case 7:o=p.ax
if((o.c&4)===0){p.y=B.L
o.t(0,B.L)
p.ax.p()}else p.y=B.L
o=p.ay
if((o.c&4)===0)o.p()
p.y=B.L
case 1:return A.e(q,r)}})
return A.f($async$aG,r)},
dl(){if(this.at)return B.aJ
if(this.Q)return B.aH
if(this.as)return B.W
return B.aI},
aJ(a){var s,r=this
if(!r.z){r.y=a
return}r.y=a
s=r.ax
if((s.c&4)===0)s.t(0,a)
r.nZ()},
nZ(){return this.k3=this.k3.bi(new A.qr(this),t.H)},
fc(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$fc=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(!n.z){s=1
break}m=0
l=0
k=0
p=4
i=n.e
i===$&&A.y()
s=7
return A.a(i.h7(),$async$fc)
case 7:j=b
m=j.c
l=j.a
k=j.b
p=2
s=6
break
case 4:p=3
g=o.pop()
s=6
break
case 3:s=2
break
case 6:i=n.ay
if((i.c&4)===0)i.t(0,new A.eI(n.y,m,l,k,n.ch,n.CW))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fc,r)},
u1(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.k2.push("push")
s.qR(B.S)},
u_(a){var s,r,q=this
if(!q.z)return
s=a.c
if(s!=null&&a.b===B.O){q.k2.push("fast:"+a.a)
q.cy=q.cy.bi(new A.qw(q,s),t.H)
return}r=a.a
q.k2.push("pull:"+r)
q.fU(B.S,A.m([r],t.s))},
ff(a){return this.o4(a)},
o4(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j
var $async$ff=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:if(!n.z||n.at||n.as||n.Q){n.fU(B.S,A.m([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.y()
s=7
return A.a(l.hc(a),$async$ff)
case 7:m=c
p=2
s=6
break
case 4:p=3
j=o.pop()
m=!1
s=6
break
case 3:s=2
break
case 6:if(!m)n.fU(B.S,A.m([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ff,r)},
u8(){if(!this.z)return
this.k2.push("cycle")
this.cO()},
fU(a,b){var s=this,r=s.fr
if(r!=null)r.A()
if(b==null)s.fy=!0
else s.go.G(0,b)
s.fr=A.cZ(a,new A.qv(s))},
qR(a){return this.fU(a,null)},
kH(){this.as=!0
this.aJ(B.W)
A.eh(this.d,t.H)},
hv(){var s=0,r=A.h(t.H),q,p=this
var $async$hv=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cx=!0
p.aJ(p.dl())
p.k2.push("cycle")
s=3
return A.a(p.cO(),$async$hv)
case 3:case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
i_(a){return this.mP(a)},
mP(a){var s=0,r=A.h(t.H),q=this,p
var $async$i_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
if(a){p=q.fx
if(p!=null)p.A()
q.fx=A.cZ(B.ar,new A.qx(q))}else q.aJ(B.aH)
return A.e(null,r)}})
return A.f($async$i_,r)},
bg(){var s=0,r=A.h(t.H),q=this
var $async$bg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
q.aJ(B.aJ)
return A.e(null,r)}})
return A.f($async$bg,r)},
b6(){var s=0,r=A.h(t.H),q,p=this
var $async$b6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
p.aJ(p.dl())
p.k2.push("cycle")
s=3
return A.a(p.cO(),$async$b6)
case 3:case 1:return A.e(q,r)}})
return A.f($async$b6,r)},
kZ(a){var s=t.E,r=this.id.bi(new A.qs(this,a),s)
this.id=r.bY(new A.qt(),new A.qu(),s)
return r},
cO(){return this.kZ(null)},
c8(a){return this.nX(a)},
nX(b4){var s=0,r=A.h(t.E),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$c8=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(!n.z){q=B.M
s=1
break}if(n.at||n.as||n.Q){n.aJ(n.dl())
q=B.M
s=1
break}a2=t.N
a3=t.S
m=A.I(a2,a3)
l=A.I(a2,a3)
k=!1
n.aJ(B.c1)
a2=b4==null
if(a2){a3=n.a.ch
a4=A.o(a3).i("ai<1>")
a5=A.Q(new A.ai(a3,a4),a4.i("n.E"))}else a5=b4
a3=a5.length,a6=0
case 3:if(!(a6<a5.length)){s=5
break}j=a5[a6]
p=7
a4=n.f
a4===$&&A.y()
s=10
return A.a(a4.d2(j),$async$c8)
case 10:i=b6
J.bC(m,j,i.b)
p=2
s=9
break
case 7:p=6
b0=o.pop()
a4=A.E(b0)
if(a4 instanceof A.b1){n.as=!0
n.aJ(B.W)
A.eh(n.d,t.H)
s=5
break}else if(a4 instanceof A.aE){h=a4
k=!0
n.ch=h.a}else throw b0
s=9
break
case 6:s=2
break
case 9:case 4:a5.length===a3||(0,A.H)(a5),++a6
s=3
break
case 5:if(n.as){n.aJ(B.W)
q=n.k1=new A.aW(m,B.U,0,0,!0)
s=1
break}s=a2?11:12
break
case 11:p=14
g=n.cx
n.cx=!1
a2=n.r
a2===$&&A.y()
s=17
return A.a(a2.di(g),$async$c8)
case 17:f=b6
for(a2=J.L(f);a2.m();){e=a2.gn()
a3=e.a
a4=J.aa(l,e.a)
if(a4==null)a4=0
J.bC(l,a3,a4+e.b)}p=2
s=16
break
case 14:p=13
b1=o.pop()
a2=A.E(b1)
if(a2 instanceof A.aE){d=a2
k=!0
n.ch=d.a}else throw b1
s=16
break
case 13:s=2
break
case 16:case 12:n.aJ(B.c2)
c=B.J
p=19
a2=n.w
a2===$&&A.y()
s=22
return A.a(a2.eK(),$async$c8)
case 22:c=b6
s=c.d&&n.ch==null?23:24
break
case 23:s=25
return A.a(n.a.b.aN("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$c8)
case 25:b=b6
if(J.fp(b)&&typeof J.aa(J.bD(b),"last_error")=="string")n.ch=A.t(J.aa(J.bD(b),"last_error"))
else n.ch="push failed"
case 24:p=2
s=21
break
case 19:p=18
b2=o.pop()
a2=A.E(b2)
if(a2 instanceof A.b1)n.kH()
else if(a2 instanceof A.aE){a=a2
k=!0
n.ch=a.a}else throw b2
s=21
break
case 18:s=2
break
case 21:p=27
a2=n.x
a2===$&&A.y()
s=30
return A.a(a2.bD(),$async$c8)
case 30:a0=b6
k=k||a0.d
if(a0.d&&n.ch==null)n.ch="file sync failed"
p=2
s=29
break
case 27:p=26
b3=o.pop()
a1=A.E(b3)
k=!0
n.ch=A.p(a1)
s=29
break
case 26:s=2
break
case 29:a8=k||c.d
n.CW=new A.b2(Date.now(),0,!1)
if(!a8)n.ch=null
a9=n.dl()
n.aJ(a8&&a9===B.aI?B.c3:a9)
q=n.k1=new A.aW(m,l,c.a,c.b,a8)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c8,r)}}
A.qy.prototype={
$1(a){return this.a.u8()},
$S:70}
A.qr.prototype={
$1(a){return this.a.fc()},
$S:24}
A.qw.prototype={
$1(a){return this.a.ff(this.b)},
$S:24}
A.qv.prototype={
$0(){var s=this.a,r=s.fy,q=s.go,p=A.Q(q,A.o(q).c)
s.fy=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.iE()}if(r||p.length===0)s.cO()
else s.kZ(p)},
$S:0}
A.qx.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.aJ(p.dl())
p.k2.push("cycle")
s=2
return A.a(p.cO(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.qs.prototype={
$1(a){return this.a.c8(this.b)},
$S:71}
A.qt.prototype={
$1(a){return B.M},
$S:72}
A.qu.prototype={
$1(a){return B.M},
$S:73}
A.fZ.prototype={
l(a){return"MapFailure: "+this.a},
$iG:1}
A.dG.prototype={}
A.p0.prototype={}
A.em.prototype={}
A.h0.prototype={}
A.pb.prototype={
dI(a){return this.tr(a)},
tr(a2){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$dI=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:e=Date.now()
d=p.a.b
s=3
return A.a(d.uV("lp_op_queue",a2*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[e]),$async$dI)
case 3:c=a4
b=t.ox
a=A.m([],b)
for(o=J.L(c);o.m();)a.push(A.Br(o.gn()))
o=t.N
n=A.br(o)
for(m=a.length,l=0;l<a.length;a.length===m||(0,A.H)(a),++l){k=a[l].z
if(k!=null)n.t(0,k)}j=A.br(o)
s=n.a!==0?4:5
break
case 4:i=A.Q(n,n.$ti.c)
h=B.c.K(A.aG(i.length,"?",!1,o),", ")
a0=j
a1=J
s=6
return A.a(d.aj(u.M+h+")",i),$async$dI)
case 6:a0.G(0,a1.av(a4,new A.pd(),o))
a0=j
a1=J
s=7
return A.a(d.aj(u.V+h+") AND state IN ('pending','failed')",i),$async$dI)
case 7:a0.G(0,a1.av(a4,new A.pe(),o))
case 5:g=A.m([],b)
for(d=a.length,l=0;l<a.length;a.length===d||(0,A.H)(a),++l){f=a[l]
if(g.length>=a2)break
b=f.z
if(b!=null&&j.D(0,b))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
lO(a){return this.a.a2(new A.pf(a),t.H)},
uy(a,b,c,d){return this.a.a2(new A.pg(c,d,b,a),t.H)}}
A.pd.prototype={
$1(a){return A.t(a.h(0,"op_id"))},
$S:25}
A.pe.prototype={
$1(a){return A.t(a.h(0,"op_id"))},
$S:25}
A.pf.prototype={
$1(a){return this.mo(a)},
mo(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_op_queue",A.l(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pg.prototype={
$1(a){return this.mp(a)},
mp(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_op_queue",A.l(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.lY.prototype={}
A.fX.prototype={}
A.hh.prototype={}
A.pi.prototype={
jJ(){var s,r=this.b,q=J.vA(32,t.N)
for(s=0;s<32;++s)q[s]=B.b.m3(r.ct(16),16)
return B.c.d_(q)},
dU(a,b,c){return this.v0(a,b,c)},
v0(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$dU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$dU)
case 3:p=e
o=J.J(p)
q=o.gB(p)?null:A.vL(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
bx(a,b,c){return this.v2(a,b,c)},
v2(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bx=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bx)
case 3:p=e
o=J.J(p)
q=o.gB(p)?null:A.qz(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bx,r)},
b3(a,b,c,d,e,f,g,h,i,j,k,l){return this.rv(a,b,c,d,e,f,g,h,i,j,k,l)},
rv(b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$b3=A.c(function(c2,c3){if(c2===1)return A.d(c3,r)
for(;;)switch(s){case 0:a6=c1.a
a7=a6.a
a8=c0==null
a9=!a8
if(a9&&c0.w===B.N)throw A.b(A.wY("Record "+a7+"/"+b4+u.W))
o=a9&&c0.w===B.Y
a9=b7==null
n=a9?null:b7.c
m=!1
if(a9){$label0$0:{if(B.C===b0){l=b1==null?B.p:B.H
break $label0$0}if(B.G===b0){l=b1==null?B.p:B.I
break $label0$0}l=B.p
break $label0$0}n=l}else{l=b7.e
switch(b7.c.a){case 0:if(l==null){m=b0===B.C&&!a6.r
n=m?n:B.p}else{$label1$2:{if(B.C===b0){l=B.H
break $label1$2}if(B.G===b0){l=B.I
break $label1$2}l=B.p
break $label1$2}n=l}break
case 1:$label2$3:{if(B.G===b0){l=B.I
break $label2$3}l=B.H
break $label2$3}n=l
break
case 2:$label3$4:{if(B.C===b0){l=B.H
break $label3$4}if(B.G===b0){l=B.I
break $label3$4}l=B.p
break $label3$4}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(b3.R("lp_outbox","store = ? AND record_id = ?",[a7,b4]),$async$b3)
case 5:s=6
return A.a(b3.R("lp_sync_row","store = ? AND record_id = ?",[a7,b4]),$async$b3)
case 6:s=7
return A.a(p.cS(b3,a7,b4),$async$b3)
case 7:s=8
return A.a(b3.R(a7,"id = ?",[b4]),$async$b3)
case 8:q=B.b1
s=1
break
case 4:k=Date.now()
j=a9?null:b7.w
if(j==null)j=p.jJ()
i=a9?null:b7.e
if(i==null)i=b1==null?null:b1.c
l=a9?null:b7.f
if(l==null){l=b1==null?null:b1.b
h=l}else h=l
if(h==null)h=""
g=a8?null:c0.r
if(g==null)g=b1==null?null:b1.a
l=t.N
f=A.br(l)
e=a9?null:b7.r
if(e!=null)f.G(0,e)
f.G(0,b2)
d=A.Q(f,f.$ti.c)
B.c.b8(d)
c=a9?null:b7.x
if(c==null)c=k
f=n.b
e=B.e.a8(d,null)
b=a9?null:b7.z
a=t.X
a0=A.l(["store",a7,"record_id",b4,"kind",f,"payload_json",b8,"base_updated",i,"base_hash",h,"dirty_fields",e,"op_id",j,"created_at",c,"updated_at",k,"depends_on_op",b],l,a)
s=a9?9:11
break
case 9:s=12
return A.a(b3.ai(0,"lp_outbox",a0),$async$b3)
case 12:s=10
break
case 11:s=13
return A.a(b3.F("lp_outbox",a0,"store = ? AND record_id = ?",[a7,b4]),$async$b3)
case 13:case 10:a1=a8?null:c0.y
if(a1==null)a1=0
a9=a8?null:c0.c
f=a8?null:c0.d
e=B.e.a8(d,null)
b=a8?null:c0.z.b
if(b==null)b="visible"
if(o)a2=0
else{a2=a8?null:c0.as
if(a2==null)a2=0}if(o)a3=0
else{a3=a8?null:c0.at
if(a3==null)a3=0}if(o)a4=null
else a4=a8?null:c0.ax
a5=A.l(["store",a7,"record_id",b4,"remote_updated",a9,"last_seen_at",f,"base_updated",i,"base_hash",h,"base_json",g,"sync_state","dirty","dirty_fields",e,"local_rev",a1+1,"access_state",b,"op_id",j,"attempt_count",a2,"next_retry_at",a3,"last_error",a4,"schema_ver",a6.b],l,a)
s=a8?14:16
break
case 14:s=17
return A.a(b3.ai(0,"lp_sync_row",a5),$async$b3)
case 17:s=15
break
case 16:s=18
return A.a(b3.F("lp_sync_row",a5,"store = ? AND record_id = ?",[a7,b4]),$async$b3)
case 18:case 15:q=new A.fX()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$b3,r)},
cS(a,b,c){return this.ra(a,b,c)},
ra(a,b,c){var s=0,r=A.h(t.H),q,p,o,n
var $async$cS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=2
return A.a(a.lU("lp_file_refs",A.m(["ref_id","hash"],t.s),"store = ? AND record_id = ?",[b,c]),$async$cS)
case 2:q=n.L(e)
case 3:if(!q.m()){s=4
break}p=q.gn()
s=5
return A.a(a.R("lp_file_refs","ref_id = ?",[p.h(0,"ref_id")]),$async$cS)
case 5:o=A.S(p.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(a.aw(u.y,[o]),$async$cS)
case 8:case 7:s=3
break
case 4:s=9
return A.a(a.F("lp_op_queue",A.l(["state","done"],t.N,t.X),u.l,[b,c]),$async$cS)
case 9:return A.e(null,r)}})
return A.f($async$cS,r)},
dJ(a,b){return this.ts(a,b)},
ts(a1,a2){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dJ=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:d=p.a.b
c=new A.O("s.sync_state NOT IN ('error','quarantine','conflict') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
b=A.Q([a2],t.X)
b.push(a1*4+16)
s=3
return A.a(d.aj("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+c+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",b),$async$dJ)
case 3:o=a4
c=J.J(o)
if(c.gB(o)){q=B.by
s=1
break}b=t.my
n=A.m([],b)
for(c=c.gv(o);c.m();)n.push(A.vL(c.gn()))
c=t.N
m=A.br(c)
for(l=n.length,k=0;k<n.length;n.length===l||(0,A.H)(n),++k){j=n[k].z
if(j!=null)m.t(0,j)}i=A.br(c)
s=m.a!==0?4:5
break
case 4:h=A.Q(m,m.$ti.c)
g=B.c.K(A.aG(h.length,"?",!1,c),", ")
a=i
a0=J
s=6
return A.a(d.aj(u.M+g+")",h),$async$dJ)
case 6:a.G(0,a0.av(a4,new A.pk(),c))
a=i
a0=J
s=7
return A.a(d.aj(u.V+g+") AND state IN ('pending','failed')",h),$async$dJ)
case 7:a.G(0,a0.av(a4,new A.pl(),c))
case 5:f=A.m([],b)
for(d=n.length,k=0;k<n.length;n.length===d||(0,A.H)(n),++k){e=n[k]
if(f.length>=a1)break
c=e.z
if(c!=null&&i.D(0,c))continue
f.push(e)}q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dJ,r)},
jO(a){if(a.length===0)return A.cj(null,t.H)
return this.a.a2(new A.po(this,a),t.H)},
av(a,b){return this.r_(a,b)},
r_(a3,a4){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$av=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:e=a3.b
d=a4.a
c=d.a
b=d.b
a=p.a
a0=a.af(c).a
a1=Date.now()
a2=a4.e
s=a2!=null?3:4
break
case 3:s=5
return A.a(e.aM("lp_outbox",1,"store = ? AND record_id = ?",[c,b]),$async$av)
case 5:o=a6
n=J.J(o)
s=!(n.gY(o)&&!J.x(J.aa(n.gC(o),"payload_json"),d.d))?6:7
break
case 6:s=8
return A.a(e.F(a0.a,A.de(a0,J.x(a2.h(0,"archived"),!0),a.z,a.Q,b,a2),"id = ?",[b]),$async$av)
case 8:a3.Z(new A.a3(c,A.ak([b],t.N)))
case 7:case 4:d=a0.a
s=9
return A.a(e.aM(d,1,"id = ?",[b]),$async$av)
case 9:m=a6
a2=J.J(m)
s=a2.gB(m)?10:11
break
case 10:s=12
return A.a(e.R("lp_outbox","store = ? AND record_id = ?",[c,b]),$async$av)
case 12:s=13
return A.a(p.cM(e,c,b,a4.c,a1),$async$av)
case 13:a3.Z(new A.a3(c,A.ak([b],t.N)))
s=1
break
case 11:n=a.z
a=a.Q
l=new A.O("")
A.a9(l,A.b0(a0,A.e4(a0,a2.gC(m),n,a)))
a2=l.a
k=A.au(B.l.u(B.f.u(a2.charCodeAt(0)==0?a2:a2)).a)
a2=a4.b
j=A.au(B.l.u(B.f.u(a2)).a)
i=a4.d
h=k===i
s=h&&j===i?14:16
break
case 14:s=17
return A.a(e.R("lp_outbox","store = ? AND record_id = ?",[c,b]),$async$av)
case 17:s=18
return A.a(p.cM(e,c,b,a4.c,a1),$async$av)
case 18:a3.Z(new A.a3(c,A.ak([b],t.N)))
s=15
break
case 16:s=h?19:21
break
case 19:g=B.e.an(a2,null)
a2=t.N
i=t.X
f=t.f.b(g)?A.b4(g,a2,i):A.I(a2,i)
s=22
return A.a(e.F(d,A.de(a0,J.x(f.h(0,"archived"),!0),n,a,b,f),"id = ?",[b]),$async$av)
case 22:s=23
return A.a(e.R("lp_outbox","store = ? AND record_id = ?",[c,b]),$async$av)
case 23:s=24
return A.a(p.cM(e,c,b,a4.c,a1),$async$av)
case 24:a3.Z(new A.a3(c,A.ak([b],a2)))
s=20
break
case 21:j=A.au(B.l.u(B.f.u(a2)).a)
a=a4.c
n=t.N
i=t.X
s=25
return A.a(e.F("lp_sync_row",A.l(["base_json",a2,"base_hash",j,"base_updated",a,"remote_updated",a,"last_seen_at",a1,"access_state","visible"],n,i),"store = ? AND record_id = ?",[c,b]),$async$av)
case 25:s=26
return A.a(e.F("lp_outbox",A.l(["base_updated",a,"base_hash",j],n,i),"store = ? AND record_id = ?",[c,b]),$async$av)
case 26:s=27
return A.a(e.F(d,A.l(["hidden",0],n,i),"id = ?",[b]),$async$av)
case 27:a3.Z(new A.a3(c,A.ak([b],n)))
case 20:case 15:case 1:return A.e(q,r)}})
return A.f($async$av,r)},
cM(a,b,c,d,e){return this.pZ(a,b,c,d,e)},
pZ(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$cM=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.F("lp_sync_row",A.l(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$cM)
case 2:s=3
return A.a(a.F(q.a.af(b).a.a,A.l(["hidden",0],p,o),"id = ?",[c]),$async$cM)
case 3:return A.e(null,r)}})
return A.f($async$cM,r)},
v3(a,b,c,d,e){return this.a.a2(new A.pn(c,e,d,B.X,a,b),t.H)},
lN(a,b,c,d,e,f){return this.a.a2(new A.pm(c,f,b,a,d,e),t.H)},
hw(a,b,c,d,e){return this.lN(a,b,c,d,B.Y,e)},
en(a,b,c,d,e,f,g){return this.rs(a,b,c,d,e,f,g)},
rs(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$en=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.F("lp_sync_row",A.l(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$en)
case 2:p=A.I(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.F("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$en)
case 3:return A.e(null,r)}})
return A.f($async$en,r)}}
A.pk.prototype={
$1(a){return A.t(a.h(0,"op_id"))},
$S:25}
A.pl.prototype={
$1(a){return A.t(a.h(0,"op_id"))},
$S:25}
A.po.prototype={
$1(a){return this.ms(a)},
ms(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=q.a
n=o.a.e
m=n.Q
l=q.b
k=l.length
n.Q=m+k
p=0
case 2:if(!(p<l.length)){s=4
break}s=5
return A.a(o.av(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.H)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pn.prototype={
$1(a){return this.mr(a)},
mr(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.F("lp_sync_row",A.l(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.pm.prototype={
$1(a){return this.mq(a)},
mq(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=q.c
m=q.d
l=t.N
k=t.X
s=2
return A.a(p.ai(0,"lp_dead_letter",A.l(["at",Date.now(),"kind",q.a,"store",o,"record_id",n,"error",m,"payload_json",q.e],l,k)),$async$$1)
case 2:s=3
return A.a(p.F("lp_sync_row",A.l(["sync_state",q.f.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.jQ.prototype={}
A.pQ.prototype={
d2(a){return this.uR(a)},
uR(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$d2=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.hH(b4),$async$d2)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.A1().dK(n)
if(m==null)A.w(A.c7('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aq(k)
k=l[2]
k.toString
i=A.aq(k)
k=l[3]
k.toString
h=A.aq(k)
k=l[4]
k.toString
g=A.aq(k)
k=l[5]
k.toString
f=A.aq(k)
k=l[6]
k.toString
e=A.aq(k)
l=l[7]
l.toString
d=A.aq(l)
if(i<1||i>12||g>23||f>59||e>59)A.w(A.c7('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.vu(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.pH(k))A.w(A.c7('Bad timestamp "'+n+'"'))
n=A.vu(j,i,h,g,f,e,d)
c=n.b
b=B.b.au(c,1000)
l=n.c
o=A.EE(new A.b2(A.vv(n.a+B.b.M(c-b,1000)+-5000,b,l),b,l))}a=a8.b=0
n=p.a,l=t.P,k=n.e,a0=n.ch,a1=p.b,a2='No store "'+b4+'" registered in this LocalPocket.',a3=null
case 4:a4=a1.z
a4===$&&A.y()
s=6
return A.a(a4.eC(b4,null,a3,o,null,200),$async$d2)
case 6:a5=b6
a4=J.J(a5)
if(a4.gB(a5)){s=5
break}++k.as
a6=p.q0(a5)
a7=a0.h(0,b4)
if(a7==null)A.w(A.u(a2))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.wu(a7.a,a5),$async$d2)
case 8:s=7
return A.a(b0.a2(new b1.pU(b2,p,b3,b6,a6),l),$async$d2)
case 7:o=a6.c
a3=a6.a;++a
if(a4.gk(a5)<200){s=5
break}if(a>=100){s=5
break}s=4
break
case 5:q=new A.jQ(a8.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d2,r)},
l9(a,b){var s=B.a.T(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.T(a.a,b.b)<=0},
r5(a,b){var s=B.a.T(a.c,b.c)
if(s!==0)return s>0
return B.a.T(a.a,b.a)>0},
q0(a){var s,r,q,p=J.at(a),o=p.gC(a)
for(p=p.aW(a,1),s=p.$ti,p=new A.a5(p,p.gk(0),s.i("a5<R.E>")),s=s.i("R.E");p.m();){r=p.d
q=r==null?s.a(r):r
if(this.r5(q,o))o=q}return o},
hc(a){return this.tF(a)},
tF(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.a.a2(new A.pR(o,p,a),t.P),$async$hc)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
cV(a,b){return this.tH(a,b)},
tH(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$cV=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k={}
k.a=null
p=4
m=n.b.z
m===$&&A.y()
i=k
s=7
return A.a(m.bz(b),$async$cV)
case 7:m=i.a=d
p=2
s=6
break
case 4:p=3
j=o.pop()
k=A.E(j)
s=k instanceof A.bu?8:10
break
case 8:s=11
return A.a(n.dQ(a,b),$async$cV)
case 11:s=1
break
s=9
break
case 10:if(k instanceof A.b1)throw j
else if(k instanceof A.aE){s=1
break}else throw j
case 9:s=6
break
case 3:s=2
break
case 6:s=m==null?12:13
break
case 12:s=14
return A.a(n.dQ(a,b),$async$cV)
case 14:s=1
break
case 13:s=15
return A.a(n.a.a2(new A.pS(k,n,a),t.P),$async$cV)
case 15:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cV,r)},
lk(a,b,c,d,e){return this.a_(a,b,A.zj(this.a.af(b).a,c),null,!1,d,e)},
lj(a,b,c){return this.lk(a,b,c,null,!1)},
a_(a,b,c,d,e,f,g){return this.rz(a,b,c,d,e,f,g)},
rw(a,b,c){return this.a_(a,b,c,null,!1,null,!1)},
rz(a5,a6,a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$a_=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a0=a5.b
a1=p.a
a2=a1.af(a6).a
a3=a7.a
a4=a7.e
s=a4!=null?3:4
break
case 3:s=5
return A.a(p.bJ(a0,a2,a6,a3,a4),$async$a_)
case 5:s=1
break
case 4:a4=a7.b
a4.toString
o=A.b0(a2,a4)
n=a7.c
n.toString
m=a7.d
m.toString
l=a3.b
s=l!==a6?6:7
break
case 6:s=8
return A.a(p.bJ(a0,a2,a6,a3,'Remote store "'+l+'" does not match requested store "'+a6+'".'),$async$a_)
case 8:s=1
break
case 7:l=a3.a
k=$.wG()
s=!k.b.test(l)?9:10
break
case 9:s=11
return A.a(p.bJ(a0,a2,a6,a3,'Invalid remote record id "'+l+'".'),$async$a_)
case 11:s=1
break
case 10:s=b1?12:14
break
case 12:j=b0
s=13
break
case 14:k=a1.as
k===$&&A.y()
s=15
return A.a(k.bx(a0,a6,l),$async$a_)
case 15:j=b3
case 13:s=a9?16:18
break
case 16:i=a8
s=17
break
case 18:s=19
return A.a(a0.aM(a2.a,1,"id = ?",[l]),$async$a_)
case 19:h=b3
k=J.J(h)
i=k.gB(h)?null:A.e4(a2,k.gC(h),a1.z,a1.Q)
case 17:k=a3.e
g=k.length
s=g!==0?20:21
break
case 20:s=22
return A.a(p.e.d1(a0,l,k,a6),$async$a_)
case 22:case 21:s=i==null?23:24
break
case 23:s=25
return A.a(a0.ai(0,a2.a,A.de(a2,J.x(a4.h(0,"archived"),!0),a1.z,a1.Q,l,a4)),$async$a_)
case 25:s=26
return A.a(p.cR(a0,a6,l,A.bJ(),j,a3.c,B.r,!0),$async$a_)
case 26:a5.Z(new A.a3(a6,A.ak([l],t.N)))
s=1
break
case 24:k=j==null
f=k?null:j.w
if(f==null)f=B.r
s=f===B.r?27:28
break
case 27:n=k?null:j.c
m=a3.c
s=n===m?29:30
break
case 29:s=31
return A.a(p.bM(a5,a6,l,m),$async$a_)
case 31:s=1
break
case 30:s=32
return A.a(a0.F(a2.a,A.de(a2,J.x(a4.h(0,"archived"),!0),a1.z,a1.Q,l,a4),"id = ?",[l]),$async$a_)
case 32:s=33
return A.a(p.cR(a0,a6,l,A.bJ(),j,m,B.r,!0),$async$a_)
case 33:a5.Z(new A.a3(a6,A.ak([l],t.N)))
s=1
break
case 28:s=f===B.X||f===B.aK||f===B.N?34:35
break
case 34:a4=k?null:j.e
g=a3.c
s=a4===g?36:37
break
case 36:s=38
return A.a(p.bM(a5,a6,l,g),$async$a_)
case 38:s=1
break
case 37:s=f===B.N?39:40
break
case 39:s=41
return A.a(p.bM(a5,a6,l,g),$async$a_)
case 41:s=1
break
case 40:e=A.b0(a2,i)
d=new A.O("")
A.a9(d,e)
a4=d.a
s=(a4.charCodeAt(0)==0?a4:a4)===n?42:43
break
case 42:s=44
return A.a(a0.R("lp_outbox","store = ? AND record_id = ?",[a6,l]),$async$a_)
case 44:s=45
return A.a(p.cR(a0,a6,l,A.bJ(),j,g,B.r,!0),$async$a_)
case 45:a5.Z(new A.a3(a6,A.ak([l],t.N)))
s=1
break
case 43:c=p.kO(k?null:j.r)
a4=A.lC(c,e,new A.h0(null,B.a7,!1),l,o,a6)
s=46
return A.a(t.x.b(a4)?a4:A.bg(a4,t.r),$async$a_)
case 46:b=b3
s=b.b?47:48
break
case 47:s=49
return A.a(p.ee(a0,a6,a3,a2,j,e,b),$async$a_)
case 49:s=50
return A.a(p.bM(a5,a6,l,g),$async$a_)
case 50:a1=t.N
a5.Z(new A.a3(a6,A.ak([l],a1)))
a5.Z(new A.a3("lp_conflicts",A.ak([l],a1)))
s=1
break
case 48:a=b.a
s=51
return A.a(a0.F(a2.a,A.de(a2,J.x(a.h(0,"archived"),!0),a1.z,a1.Q,l,a),"id = ?",[l]),$async$a_)
case 51:a1=a1.as
a1===$&&A.y()
d=new A.O("")
A.a9(d,a)
a4=d.a
s=52
return A.a(a1.en(a0,a6,l,m,n,g,a4.charCodeAt(0)==0?a4:a4),$async$a_)
case 52:s=53
return A.a(p.bM(a5,a6,l,g),$async$a_)
case 53:a5.Z(new A.a3(a6,A.ak([l],t.N)))
s=1
break
case 35:case 1:return A.e(q,r)}})
return A.f($async$a_,r)},
kO(a){var s
if(a==null||a.length===0)return B.y
s=B.e.an(a,null)
if(t.f.b(s))return A.b4(s,t.N,t.X)
return B.y},
ee(a,b,c,d,e,f,g){return this.qG(a,b,c,d,e,f,g)},
qG(a,b,c,d,e,a0,a1){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$ee=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:j=e==null
i=q.kO(j?null:e.r)
h=A.b0(d,A.e7(d,c))
g=A.e3(i,a0)
f=A.Q(g,A.o(g).c)
B.c.b8(f)
g=A.e3(i,h)
p=A.Q(g,A.o(g).c)
B.c.b8(p)
g=c.a
j=j?null:e.r
if(j==null){o=new A.O("")
A.a9(o,i)
j=o.a
j=j.charCodeAt(0)==0?j:j}o=new A.O("")
A.a9(o,a0)
n=o.a
o=new A.O("")
A.a9(o,h)
m=o.a
l=t.N
k=t.X
s=2
return A.a(a.cZ(0,"lp_conflicts",A.l(["store",b,"record_id",g,"base_json",j,"local_json",n.charCodeAt(0)==0?n:n,"remote_json",m.charCodeAt(0)==0?m:m,"dirty_local",B.e.a8(f,null),"dirty_remote",B.e.a8(p,null),"detected_at",A.bJ()],l,k),B.a_),$async$ee)
case 2:s=3
return A.a(a.F("lp_sync_row",A.l(["sync_state","conflict"],l,k),"store = ? AND record_id = ?",[b,g]),$async$ee)
case 3:return A.e(null,r)}})
return A.f($async$ee,r)},
bJ(a,b,c,d,e){return this.qA(a,b,c,d,e)},
qA(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$bJ=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:j=null
try{j=B.e.a8(d.d,null)}catch(i){o=t.N
j=B.e.a8(A.l(["raw",d.d.l(0)],o,o),null)}o=d.a
n=t.N
m=t.X
s=2
return A.a(a.ai(0,"lp_dead_letter",A.l(["at",A.bJ(),"kind","map_failure","store",c,"record_id",o,"error",e,"payload_json",j],n,m)),$async$bJ)
case 2:l=q.a.as
l===$&&A.y()
k=d.c
s=6
return A.a(l.bx(a,c,o),$async$bJ)
case 6:s=g==null?3:5
break
case 3:s=7
return A.a(a.ai(0,"lp_sync_row",A.l(["store",c,"record_id",o,"remote_updated",k,"sync_state","quarantine","schema_ver",b.b],n,m)),$async$bJ)
case 7:s=4
break
case 5:s=8
return A.a(a.F("lp_sync_row",A.l(["sync_state","quarantine","last_error",e,"remote_updated",k],n,m),"store = ? AND record_id = ?",[c,o]),$async$bJ)
case 8:case 4:return A.e(null,r)}})
return A.f($async$bJ,r)},
cR(a,b,c,d,e,f,g,h){return this.r9(a,b,c,d,e,f,g,!0)},
r9(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$cR=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.af(b)
o=A.I(t.N,t.X)
o.j(0,"store",b)
o.j(0,"record_id",c)
o.j(0,"remote_updated",f)
o.j(0,"last_seen_at",d)
o.j(0,"sync_state",g.b)
o.j(0,"access_state","visible")
o.j(0,"schema_ver",p.a.b)
p=g===B.r
if(p)o.j(0,"base_updated",null)
if(p)o.j(0,"base_hash",null)
if(p)o.j(0,"base_json",null)
if(p)o.j(0,"dirty_fields","[]")
if(p)o.j(0,"op_id",null)
if(p)o.j(0,"attempt_count",0)
if(p)o.j(0,"next_retry_at",0)
if(p)o.j(0,"last_error",null)
s=e==null?2:4
break
case 2:s=5
return A.a(a.ai(0,"lp_sync_row",o),$async$cR)
case 5:s=3
break
case 4:s=6
return A.a(a.F("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$cR)
case 6:case 3:return A.e(null,r)}})
return A.f($async$cR,r)},
bM(a,b,c,d){return this.r4(a,b,c,d)},
r4(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$bM=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
s=2
return A.a(p.F("lp_sync_row",A.l(["last_seen_at",A.bJ(),"access_state","visible","remote_updated",d],o,n),"store = ? AND record_id = ?",[b,c]),$async$bM)
case 2:s=3
return A.a(p.F(q.a.af(b).a.a,A.l(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$bM)
case 3:if(f>0)a.Z(new A.a3(b,A.ak([c],o)))
return A.e(null,r)}})
return A.f($async$bM,r)},
dQ(a,b){return this.uz(a,b)},
uz(a,b){var s=0,r=A.h(t.H),q=this
var $async$dQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.a2(new A.pT(q,a,b),t.P),$async$dQ)
case 2:return A.e(null,r)}})
return A.f($async$dQ,r)}}
A.pU.prototype={
$1(a){return this.mx(a)},
mx(b4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$$1=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a2=q.a
a3=a2.a
a4=b4.b
a5=q.b
a6=a5.a
a7=q.c
a8=a6.af(a7).a
a9=t.N
b0=A.I(a9,t.nw)
b1=A.I(a9,t.G)
b2=A.m([],t.s)
for(p=q.d,o=J.at(p),n=o.gv(p);n.m();)b2.push(n.gn().a.a)
n=a6.z,m=a6.Q,l=a6.ch,k='No store "'+a7+'" registered in this LocalPocket.',j=0
case 2:if(!(i=b2.length,j<i)){s=4
break}h=j+500
g=B.c.O(b2,j,B.b.iW(h,0,i))
f=B.c.K(A.aG(g.length,"?",!1,a9),", ")
i=[a7]
B.c.G(i,g)
b3=J
s=5
return A.a(a4.aj(u.m+f+")",i),$async$$1)
case 5:i=b3.L(b6)
case 6:if(!i.m()){s=7
break}e=i.gn()
b0.j(0,A.t(e.h(0,"record_id")),A.qz(e))
s=6
break
case 7:d=l.h(0,a7)
if(d==null)A.w(A.u(k))
b3=J
s=8
return A.a(a4.eM(d.a.a,"id IN ("+f+")",g),$async$$1)
case 8:i=b3.L(b6)
case 9:if(!i.m()){s=10
break}e=i.gn()
b1.j(0,A.t(e.h(0,"id")),A.e4(a8,e,n,m))
s=9
break
case 10:case 3:j=h
s=2
break
case 4:c=A.br(a9)
a9=o.gv(p),a6=a6.e
case 11:if(!a9.m()){s=12
break}b2=a9.gn()
b=b2.a
if(a3!=null&&a5.l9(b,a3)){s=11
break}p=b.a
s=c.D(0,p)?13:15
break
case 13:s=16
return A.a(a5.rw(b4,a7,b2),$async$$1)
case 16:s=14
break
case 15:o=b0.h(0,p)
s=17
return A.a(a5.a_(b4,a7,b2,b1.h(0,p),!0,o,!0),$async$$1)
case 17:c.t(0,p)
case 14:++a2.b;++a6.at
s=11
break
case 12:a=a3==null||!a5.l9(q.e,a3)
a0=a?q.e.c:a3.a
a1=a?q.e.a:a3.b
s=18
return A.a(a5.d.dY(a4,a7,a1,a0),$async$$1)
case 18:a2.a=new A.hf(a0,a1)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pR.prototype={
$1(a){return this.mu(a)},
mu(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.as
k===$&&A.y()
o=p.c
n=o.b
s=3
return A.a(k.bx(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.lj(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.r){s=1
break}k=m.c
if(k!=null&&B.a.T(o.c,k)<=0){s=1
break}s=7
return A.a(l.lk(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.pS.prototype={
$1(a){return this.mv(a)},
mv(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a.a
p.toString
s=2
return A.a(q.b.lj(a,q.c,p),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pT.prototype={
$1(a){return this.mw(a)},
mw(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=q.b
l=q.c
s=2
return A.a(p.F("lp_sync_row",A.l(["access_state","hidden"],o,n),"store = ? AND record_id = ?",[m,l]),$async$$1)
case 2:s=3
return A.a(p.F(q.a.a.af(m).a.a,A.l(["hidden",1],o,n),"id = ?",[l]),$async$$1)
case 3:a.Z(new A.a3(m,A.ak([l],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aV.prototype={}
A.pV.prototype={
eK(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h
var $async$eK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:h=p.a.as
h===$&&A.y()
s=3
return A.a(h.dJ(25,A.bJ()),$async$eK)
case 3:o=b
h=J.J(o)
if(h.gB(o)){q=B.J
s=1
break}if(p.f){q=p.aS(o)
s=1
break}h=h.gv(o),n=B.J
case 4:if(!h.m()){s=5
break}s=6
return A.a(p.dA(h.gn()),$async$eK)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=n.d||m.d
n=new A.aV(n.a+l,n.b+k,n.c+j,i)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eK,r)},
dA(a){return this.qx(a)},
qx(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.as
l===$&&A.y()
m=m.b
s=3
return A.a(l.dU(m,a.a,a.b),$async$dA)
case 3:o=c
if(o==null){q=B.J
s=1
break}s=4
return A.a(l.bx(m,o.a,o.b),$async$dA)
case 4:n=c
if(n==null){q=B.J
s=1
break}if(o.e==null){q=p.cc(o,n)
s=1
break}q=p.b_(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dA,r)},
cc(a,b){return this.qw(a,b)},
qw(a,b){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cc=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:p=4
j=n.b.z
j===$&&A.y()
s=7
return A.a(j.h9(a.d,a.b,a.a),$async$cc)
case 7:m=d
s=8
return A.a(n.eh(a,m),$async$cc)
case 8:q=B.K
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
j=A.E(h)
s=j instanceof A.fA?9:11
break
case 9:q=n.cd(a,b)
s=1
break
s=10
break
case 11:s=j instanceof A.b1?12:14
break
case 12:n.e.$0()
q=B.A
s=1
break
s=13
break
case 14:s=j instanceof A.bn?15:17
break
case 15:s=18
return A.a(n.aH(a,"forbidden_push"),$async$cc)
case 18:q=B.j
s=1
break
s=16
break
case 17:s=j instanceof A.dI?19:21
break
case 19:l=j
s=22
return A.a(n.cK(a,"validation_push",l.a),$async$cc)
case 22:q=B.j
s=1
break
s=20
break
case 21:s=j instanceof A.bu?23:25
break
case 23:s=26
return A.a(n.aH(a,"missing_target"),$async$cc)
case 26:q=B.j
s=1
break
s=24
break
case 25:if(j instanceof A.aE){k=j
q=n.be(a,b,k)
s=1
break}else throw h
case 24:case 20:case 16:case 13:case 10:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cc,r)},
cd(a,b){return this.qH(a,b)},
qH(a,b){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$cd=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:f=n.a.af(a.a).a
p=4
i=n.b.z
i===$&&A.y()
s=7
return A.a(i.bz(a.b),$async$cd)
case 7:m=d
s=m==null?8:9
break
case 8:s=10
return A.a(n.aH(a,"duplicate_id_missing"),$async$cd)
case 10:q=B.j
s=1
break
case 9:h=new A.O("")
A.a9(h,A.b0(f,A.e7(f,m)))
i=h.a
l=A.au(B.l.u(B.f.u(i.charCodeAt(0)==0?i:i)).a)
k=A.au(B.l.u(B.f.u(a.d)).a)
s=J.x(l,k)?11:12
break
case 11:s=13
return A.a(n.eh(a,m),$async$cd)
case 13:q=B.K
s=1
break
case 12:i=n.b0(a,b,m)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
i=A.E(e)
s=i instanceof A.b1?14:16
break
case 14:n.e.$0()
q=B.A
s=1
break
s=15
break
case 16:s=i instanceof A.bu?17:19
break
case 17:s=20
return A.a(n.aH(a,"missing_target"),$async$cd)
case 20:q=B.j
s=1
break
s=18
break
case 19:s=i instanceof A.bn?21:23
break
case 21:s=24
return A.a(n.aH(a,"forbidden_push"),$async$cd)
case 24:q=B.j
s=1
break
s=22
break
case 23:if(i instanceof A.aE){j=i
q=n.be(a,b,j)
s=1
break}else throw e
case 22:case 18:case 15:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cd,r)},
b_(a,b){return this.qy(a,b)},
qy(a,b){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$b_=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=null
p=4
i=n.b.z
i===$&&A.y()
s=7
return A.a(i.bz(a.b),$async$b_)
case 7:g=d
p=2
s=6
break
case 4:p=3
f=o.pop()
i=A.E(f)
s=i instanceof A.b1?8:10
break
case 8:n.e.$0()
q=B.A
s=1
break
s=9
break
case 10:s=i instanceof A.bu?11:13
break
case 11:s=14
return A.a(n.aH(a,"missing_target"),$async$b_)
case 14:q=B.j
s=1
break
s=12
break
case 13:s=i instanceof A.bn?15:17
break
case 15:s=18
return A.a(n.aH(a,"forbidden_push"),$async$b_)
case 18:q=B.j
s=1
break
s=16
break
case 17:if(i instanceof A.aE){m=i
q=n.be(a,b,m)
s=1
break}else throw f
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:s=g==null?19:20
break
case 19:s=21
return A.a(n.aH(a,"missing_target"),$async$b_)
case 21:q=B.j
s=1
break
case 20:s=g.c===a.e?22:23
break
case 22:p=25
i=n.b.z
i===$&&A.y()
s=28
return A.a(i.eW(a.d,a.b),$async$b_)
case 28:l=d
s=29
return A.a(n.eh(a,l),$async$b_)
case 29:q=B.K
s=1
break
p=2
s=27
break
case 25:p=24
e=o.pop()
i=A.E(e)
s=i instanceof A.b1?30:32
break
case 30:n.e.$0()
q=B.A
s=1
break
s=31
break
case 32:s=i instanceof A.bu?33:35
break
case 33:s=36
return A.a(n.aH(a,"missing_target"),$async$b_)
case 36:q=B.j
s=1
break
s=34
break
case 35:s=i instanceof A.bn?37:39
break
case 37:s=40
return A.a(n.aH(a,"forbidden_push"),$async$b_)
case 40:q=B.j
s=1
break
s=38
break
case 39:s=i instanceof A.dI?41:43
break
case 41:k=i
s=44
return A.a(n.cK(a,"validation_push",k.a),$async$b_)
case 44:q=B.j
s=1
break
s=42
break
case 43:if(i instanceof A.aE){j=i
q=n.be(a,b,j)
s=1
break}else throw e
case 42:case 38:case 34:case 31:s=27
break
case 24:s=2
break
case 27:case 23:q=n.b0(a,b,g)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b_,r)},
b0(a,b,c){return this.qz(a,b,c)},
qz(a0,a1,a2){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$b0=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:e=a0.a
d=n.a.af(e).a
c=A.e7(d,a2)
b=new A.O("")
A.a9(b,A.b0(d,c))
h=b.a
g=a0.d
s=A.au(B.l.u(B.f.u(h.charCodeAt(0)==0?h:h)).a)===A.au(B.l.u(B.f.u(g)).a)?3:4
break
case 3:s=5
return A.a(n.eh(a0,a2),$async$b0)
case 5:q=B.K
s=1
break
case 4:h=a0.b
e=A.lC(n.dw(a1.r),n.dw(g),new A.h0(null,B.a7,!1),h,A.b0(d,c),e)
s=6
return A.a(t.x.b(e)?e:A.bg(e,t.r),$async$b0)
case 6:m=a4
s=m.b?7:8
break
case 7:s=9
return A.a(n.ed(a0,a1,a2,m),$async$b0)
case 9:q=B.bP
s=1
break
case 8:b=new A.O("")
A.a9(b,m.a)
e=b.a
l=e.charCodeAt(0)==0?e:e
p=11
e=n.b.z
e===$&&A.y()
s=14
return A.a(e.eW(l,h),$async$b0)
case 14:k=a4
s=15
return A.a(n.dC(a0,k,m.a,l),$async$b0)
case 15:q=B.K
s=1
break
p=2
s=13
break
case 11:p=10
a=o.pop()
e=A.E(a)
s=e instanceof A.b1?16:18
break
case 16:n.e.$0()
q=B.A
s=1
break
s=17
break
case 18:s=e instanceof A.bu?19:21
break
case 19:s=22
return A.a(n.aH(a0,"missing_target"),$async$b0)
case 22:q=B.j
s=1
break
s=20
break
case 21:s=e instanceof A.bn?23:25
break
case 23:s=26
return A.a(n.aH(a0,"forbidden_push"),$async$b0)
case 26:q=B.j
s=1
break
s=24
break
case 25:s=e instanceof A.dI?27:29
break
case 27:j=e
s=30
return A.a(n.cK(a0,"validation_push",j.a),$async$b0)
case 30:q=B.j
s=1
break
s=28
break
case 29:if(e instanceof A.aE){i=e
q=n.be(a0,a1,i)
s=1
break}else throw a
case 28:case 24:case 20:case 17:s=13
break
case 10:s=2
break
case 13:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b0,r)},
aS(a){return this.qv(a)},
qv(c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
var $async$aS=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b4=A.m([],t.k1)
b5=t.N
b6=A.I(b5,t.G)
b7=0
b8=0
b9=A.I(b5,b5)
b5=J.L(c1),h=n.a,g=h.e,f=n.b,e=h.ch,d=h.b,c=0
case 3:if(!b5.m()){s=4
break}b=b5.gn()
a=h.as
a===$&&A.y()
s=5
return A.a(a.dU(d,b.a,b.b),$async$aS)
case 5:m=c3
if(m==null){s=3
break}b9.j(0,m.w,m.d)
s=6
return A.a(a.bx(d,m.a,m.b),$async$aS)
case 6:l=c3
if(l==null){s=3
break}b=m.a
a0=e.h(0,b)
if(a0==null)A.w(A.u('No store "'+b+'" registered in this LocalPocket.'))
a1=a0.a
k=null
p=8;++g.z
b=m.b
a=f.z
a===$&&A.y()
s=11
return A.a(a.bz(b),$async$aS)
case 11:k=c3
p=2
s=10
break
case 8:p=7
c0=o.pop()
b=A.E(c0)
s=b instanceof A.bu?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.aH(m,"missing_target"),$async$aS)
case 17:++b8
s=3
break
case 16:k=null
s=13
break
case 14:s=b instanceof A.b1?18:20
break
case 18:n.e.$0()
q=new A.aV(0,0,0,!0)
s=1
break
s=19
break
case 20:s=b instanceof A.bn?21:23
break
case 21:s=24
return A.a(n.aH(m,"forbidden_push"),$async$aS)
case 24:++b8
s=3
break
s=22
break
case 23:s=b instanceof A.aE?25:27
break
case 25:j=b
s=28
return A.a(n.be(m,l,j),$async$aS)
case 28:i=c3
b7+=i.a
b8+=i.b
s=3
break
s=26
break
case 27:throw c0
case 26:case 22:case 19:case 13:s=10
break
case 7:s=2
break
case 10:s=k!=null?29:30
break
case 29:a3=new A.O("")
A.a9(a3,A.b0(a1,A.e7(a1,k)))
b=a3.a
b=B.f.u(b.charCodeAt(0)==0?b:b)
a4=new A.c5()
a=A.d7(a4)
a.t(0,b)
a.p()
a5=A.au(a4.a.a)
a=B.f.u(m.d)
a4=new A.c5()
b=A.d7(a4)
b.t(0,a)
b.p()
s=a5===A.au(a4.a.a)?31:32
break
case 31:s=33
return A.a(n.eh(m,k),$async$aS)
case 33:++b7
s=3
break
case 32:s=m.e==null?34:35
break
case 34:s=36
return A.a(n.dv(m,l,k,a1),$async$aS)
case 36:a6=c3
if(a6==null){++c
s=3
break}b=m.w
a=m.a
a7=m.b
a8=a6.a
a3=new A.O("")
A.a9(a3,a8)
a9=a3.a
b4.push(new A.cq(b,a,a7,a9.charCodeAt(0)==0?a9:a9,null))
b6.j(0,m.w,a8)
s=3
break
case 35:s=37
return A.a(n.dv(m,l,k,a1),$async$aS)
case 37:a6=c3
if(a6==null){++c
s=3
break}b=m.w
a=m.a
a7=m.b
a8=a6.a
a3=new A.O("")
A.a9(a3,a8)
a9=a3.a
b4.push(new A.cq(b,a,a7,a9.charCodeAt(0)==0?a9:a9,k.c))
b6.j(0,m.w,a8)
s=3
break
case 30:b4.push(new A.cq(m.w,m.a,m.b,m.d,m.e))
s=3
break
case 4:s=b4.length!==0?38:39
break
case 38:b0=0
case 40:if(!(b1=b4.length,b0<b1)){s=42
break}b2=b0+25
s=43
return A.a(n.bL(B.c.O(b4,b0,b2<b1?b2:b1),b6,b9),$async$aS)
case 43:b3=c3
b7+=b3.a
b8+=b3.b
c+=b3.c
if(b3.d){q=new A.aV(b7,b8,c,!0)
s=1
break}case 41:b0=b2
s=40
break
case 42:case 39:q=new A.aV(b7,b8,c,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aS,r)},
dv(a,b,c,d){return this.q1(a,b,c,d)},
q1(a,b,c,d){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dv=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.e7(d,c)
n=A.lC(p.dw(b.r),p.dw(a.d),new A.h0(null,B.a7,!1),a.b,A.b0(d,o),a.a)
s=3
return A.a(t.x.b(n)?n:A.bg(n,t.r),$async$dv)
case 3:m=f
s=m.b?4:5
break
case 4:s=6
return A.a(p.ed(a,b,c,m),$async$dv)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dv,r)},
bL(a,b,c){return this.qV(a,b,c)},
qV(b6,b7,b8){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bL=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b3=0
b4=0
p=4
a1=n.b.z
a1===$&&A.y()
s=7
return A.a(a1.eJ(b6),$async$bL)
case 7:m=c0
l=A.I(t.N,t.gq)
for(a1=b6.length,a2=0;a2<b6.length;b6.length===a1||(0,A.H)(b6),++a2){k=b6[a2]
J.bC(l,k.a,k)}j=l
i=A.m([],t.bo)
l=J.L(m),a1=n.a
case 8:if(!l.m()){s=9
break}h=l.gn()
g=J.aa(j,h.a)
if(g==null){l=A.c7("Batch response references unknown op "+h.a+".")
throw A.b(l)}s=h.b&&h.c!=null?10:12
break
case 10:a3=g.b
a4=g.c
a5=b8.h(0,g.a)
if(a5==null)a5=g.d
a6=g.e
a7=B.f.u(g.d)
a8=new A.c5()
a9=A.d7(a8)
a9.t(0,a7)
a9.p()
a9=A.au(a8.a.a)
a7=g.a
b0=B.f.u(g.d)
a8=new A.c5()
b1=A.d7(a8)
b1.t(0,b0)
b1.p()
b1=A.au(a8.a.a)
b0=h.e
if(b0==null)b0=g.d
J.dj(i,new A.hh(new A.bH(a3,a4,B.p,a5,a6,a9,B.m,a7,0,null),b0,h.c.c,b1,b7.h(0,g.a)));++b3
s=11
break
case 12:a3=a1.as
a3===$&&A.y()
a4=g.b
a5=g.c
a6=h.d
if(a6==null)a6="batch_failed"
a7=h.d
if(a7==null)a7="batch_failed"
s=13
return A.a(a3.hw(a7,a5,a6,g.d,a4),$async$bL)
case 13:++b4
case 11:s=8
break
case 9:l=a1.as
l===$&&A.y()
s=14
return A.a(l.jO(i),$async$bL)
case 14:l=b3
a1=b4
q=new A.aV(l,a1,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b5=o.pop()
l=A.E(b5)
s=l instanceof A.ec?15:17
break
case 15:q=n.bF(b6,b7,b8)
s=1
break
s=16
break
case 17:s=l instanceof A.bn?18:20
break
case 18:n.f=!1
l=b6.length,a2=0
case 21:if(!(a2<b6.length)){s=23
break}f=b6[a2]
a1=f.b
a3=f.c
a4=f.d
a5=f.e
a6=B.f.u(f.d)
a8=new A.c5()
a7=A.d7(a8)
a7.t(0,a6)
a7.p()
s=24
return A.a(n.dA(new A.bH(a1,a3,B.p,a4,a5,A.au(a8.a.a),B.m,f.a,0,null)),$async$bL)
case 24:e=c0
b3+=e.a
b4+=e.b
case 22:b6.length===l||(0,A.H)(b6),++a2
s=21
break
case 23:q=new A.aV(b3,b4,0,!1)
s=1
break
s=19
break
case 20:s=l instanceof A.b1?25:27
break
case 25:n.e.$0()
q=B.A
s=1
break
s=26
break
case 27:s=l instanceof A.aE?28:30
break
case 28:d=l
c=d instanceof A.ey?d:new A.hp("network error")
l=b6.length,a1=n.a,a3=a1.b,a2=0
case 31:if(!(a2<b6.length)){s=33
break}b=b6[a2]
a4=a1.as
a4===$&&A.y()
s=34
return A.a(a4.bx(a3,b.b,b.c),$async$bL)
case 34:a=c0
s=a!=null?35:36
break
case 35:a4=b.b
a5=b.c
a6=b.d
a7=b.e
a9=B.f.u(b.d)
a8=new A.c5()
b0=A.d7(a8)
b0.t(0,a9)
b0.p()
s=37
return A.a(n.be(new A.bH(a4,a5,B.p,a6,a7,A.au(a8.a.a),B.m,b.a,0,null),a,c),$async$bL)
case 37:a0=c0
b3+=a0.a
b4+=a0.b
case 36:case 32:b6.length===l||(0,A.H)(b6),++a2
s=31
break
case 33:q=new A.aV(b3,b4,0,!0)
s=1
break
s=29
break
case 30:throw b5
case 29:case 26:case 19:case 16:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bL,r)},
bF(a,b,c){return this.nt(a,b,c)},
nt(b4,b5,b6){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bF=A.c(function(b7,b8){if(b7===1){o.push(b8)
s=p}for(;;)switch(s){case 0:b2=J.J(b4)
s=b2.gk(b4)===1?3:4
break
case 3:e=b2.gaV(b4)
b2=n.a.as
b2===$&&A.y()
d=e.b
s=5
return A.a(b2.hw("batch_request_failed",e.c,"batch_poison",e.d,d),$async$bF)
case 5:q=B.j
s=1
break
case 4:c=B.b.M(b2.gk(b4),2)
m=0
l=0
k=!1
b2=[b2.O(b4,0,c),b2.aR(b4,c)],d=n.a,b=n.b,a=0
case 6:if(!(a<2)){s=8
break}j=b2[a]
p=10
a0=b.z
a0===$&&A.y()
s=13
return A.a(a0.eJ(j),$async$bF)
case 13:i=b8
a0=J.L(i)
case 14:if(!a0.m()){s=15
break}h=a0.gn()
g=J.Ah(j,new A.pW(h))
s=h.b&&h.c!=null?16:18
break
case 16:a1=g.b
a2=g.c
a3=b6.h(0,g.a)
if(a3==null)a3=g.d
a4=g.e
a5=B.f.u(g.d)
a6=new A.c5()
a7=A.d7(a6)
a7.t(0,a5)
a7.p()
a7=A.au(a6.a.a)
a5=g.a
a8=h.c
a8.toString
a9=b5.h(0,g.a)
b0=h.e
if(b0==null)b0=g.d
s=19
return A.a(n.dC(new A.bH(a1,a2,B.p,a3,a4,a7,B.m,a5,0,null),a8,a9,b0),$async$bF)
case 19:++m
s=17
break
case 18:a1=d.as
a1===$&&A.y()
a2=g.b
a3=g.c
a4=h.d
if(a4==null)a4="batch_poison"
a5=h.d
if(a5==null)a5="batch_poison"
s=20
return A.a(a1.hw(a5,a3,a4,g.d,a2),$async$bF)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b3=o.pop()
a0=A.E(b3)
s=a0 instanceof A.ec?21:23
break
case 21:s=24
return A.a(n.bF(j,b5,b6),$async$bF)
case 24:f=b8
m+=f.a
l+=f.b
k=k||f.d
s=22
break
case 23:if(a0 instanceof A.aE){k=!0
s=7
break}else throw b3
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a
s=6
break
case 8:q=new A.aV(m,l,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bF,r)},
dC(a,b,c,d){return this.qZ(a,b,c,d)},
eh(a,b){return this.dC(a,b,null,null)},
qZ(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$dC=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=q.a
l=m.af(a.a).a
k=A.e7(l,b)
j=d==null
if(j){p=new A.O("")
A.a9(p,A.b0(l,k))
o=p.a
n=o.charCodeAt(0)==0?o:o}else n=d
m=m.as
m===$&&A.y()
s=2
return A.a(m.jO(A.m([new A.hh(a,n,b.c,A.au(B.l.u(B.f.u(j?a.d:d)).a),c)],t.bo)),$async$dC)
case 2:return A.e(null,r)}})
return A.f($async$dC,r)},
be(a,b,c){return this.qN(a,b,c)},
qN(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$be=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:m=b.as+1
l=c instanceof A.ey?c.b:null
s=m>=8?3:4
break
case 3:o=p.a.as
o===$&&A.y()
s=5
return A.a(o.lN(c.a,a.b,"max_attempts",a.d,B.Y,a.a),$async$be)
case 5:q=B.j
s=1
break
case 4:n=p.c.ly(m,l)
o=p.a.as
o===$&&A.y()
s=6
return A.a(o.v3(a.a,a.b,m,c.a,A.bJ()+B.b.M(n.a,1000)),$async$be)
case 6:q=B.A
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$be,r)},
cK(a,b,c){return this.nR(a,b,c)},
aH(a,b){return this.cK(a,b,null)},
nR(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cK=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.as
o===$&&A.y()
p=c==null?b:c
s=2
return A.a(o.hw(p,a.b,b,a.d,a.a),$async$cK)
case 2:return A.e(null,r)}})
return A.f($async$cK,r)},
ed(a,b,c,d){return this.qF(a,b,c,d)},
qF(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$ed=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=q.a
n=o.af(a.a).a
m=A.e7(n,c)
l=q.dw(b.r)
k=q.dw(a.d)
j=A.b0(n,m)
i=A.e3(l,k)
h=A.Q(i,A.o(i).c)
B.c.b8(h)
i=A.e3(l,j)
p=A.Q(i,A.o(i).c)
B.c.b8(p)
s=2
return A.a(o.a2(new A.pX(q,a,b,l,k,j,h,p),t.P),$async$ed)
case 2:return A.e(null,r)}})
return A.f($async$ed,r)},
dw(a){var s
if(a==null||a.length===0)return B.y
s=B.e.an(a,null)
if(t.f.b(s))return A.b4(s,t.N,t.X)
return B.y}}
A.pW.prototype={
$1(a){return a.a===this.a.a},
$S:75}
A.pX.prototype={
$1(a){return this.my(a)},
my(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:j=a.b
i=q.b
h=i.a
i=i.b
p=q.c.r
if(p==null){o=new A.O("")
A.a9(o,q.d)
p=o.a
p=p.charCodeAt(0)==0?p:p}o=new A.O("")
A.a9(o,q.e)
n=o.a
o=new A.O("")
A.a9(o,q.f)
m=o.a
l=t.N
k=t.X
s=2
return A.a(j.cZ(0,"lp_conflicts",A.l(["store",h,"record_id",i,"base_json",p,"local_json",n.charCodeAt(0)==0?n:n,"remote_json",m.charCodeAt(0)==0?m:m,"dirty_local",B.e.a8(q.r,null),"dirty_remote",B.e.a8(q.w,null),"detected_at",A.bJ()],l,k),B.a_),$async$$1)
case 2:s=3
return A.a(j.F("lp_sync_row",A.l(["sync_state","conflict"],l,k),"store = ? AND record_id = ?",[h,i]),$async$$1)
case 3:a.Z(new A.a3(h,A.ak([i],l)))
a.Z(new A.a3("lp_conflicts",A.ak([i],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bK.prototype={
ag(){return"SyncEngineState."+this.b}}
A.aW.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", hadError: "+s.e+")"}}
A.eI.prototype={}
A.eH.prototype={}
A.qo.prototype={
gk6(){return 36},
di(a){return this.na(a)},
na(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$di=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.m([],t.en)
a2=null
a3=A.bJ()
h=n.a,g=h.ch,g=new A.dz(g,g.r,g.e),f=t.P,e=!a7,d=n.d
case 3:if(!g.m()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.hI(m),$async$di)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gk6():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.b.au(c.a+1,n.gk6())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.c1(m,a),$async$di)
case 13:a5.dj(a6,a9)
case 11:++j
s=10
break
case 12:s=14
return A.a(h.a2(new A.qp(c,n,m,a3),f),$async$di)
case 14:p=2
s=8
break
case 6:p=5
a4=o.pop()
i=A.E(a4)
if(a2==null)a2=i
s=8
break
case 5:s=2
break
case 8:s=3
break
case 4:if(a2!=null){if(a2 instanceof A.aE)throw A.b(a2)
if(t.mA.b(a2))throw A.b(a2)
throw A.b(t.C.a(a2))}q=a1
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$di,r)},
c1(a,b){return this.n9(a,b)},
n9(a2,a3){var s=0,r=A.h(t.eg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$c1=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:if(a3<0||a3>=36)throw A.b(A.P("Sweep bucket "+a3+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a3]
n=A.br(t.N)
m=p.e,l=t.s,k=p.b,j=0,i=null
case 3:h=k.z
h===$&&A.y()
s=5
return A.a(h.eC(a2,B.bC,i,null,o,200),$async$c1)
case 5:g=a5
h=J.J(g)
if(h.gB(g)){s=4
break}for(f=h.gv(g);f.m();)n.t(0,f.gn().a)
f=A.m([],l)
for(e=h.gv(g);e.m();)f.push(e.gn().a)
s=6
return A.a(p.fS(a2,f),$async$c1)
case 6:d=a5
f=h.gv(g)
case 7:if(!f.m()){s=8
break}e=f.gn()
c=e.a
b=d.h(0,c)
s=b==null||b.z===B.ai||b.c!==e.c?9:10
break
case 9:s=11
return A.a(m.cV(a2,c),$async$c1)
case 11:++j
case 10:s=7
break
case 8:i=h.gW(g).a
if(h.gk(g)<200){s=4
break}s=3
break
case 4:a1=J
s=12
return A.a(p.a.b.aj("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a2,o+"%"]),$async$c1)
case 12:l=a1.L(a5),a=0
case 13:if(!l.m()){s=14
break}k=l.gn()
a0=A.t(k.h(0,"record_id"))
s=!n.D(0,a0)?15:16
break
case 15:if(J.x(k.h(0,"access_state"),"hidden")){s=13
break}s=17
return A.a(m.dQ(a2,a0),$async$c1)
case 17:++a
case 16:s=13
break
case 14:q=new A.eH(a2,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c1,r)},
fS(a,b){return this.qq(a,b)},
qq(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=t.N
g=A.I(h,t.nw)
o=p.a.b,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.c.O(b,n,B.b.iW(l,0,m))
j=B.c.K(A.aG(k.length,"?",!1,h),", ")
m=[a]
B.c.G(m,k)
f=J
s=6
return A.a(o.aj(u.m+j+")",m),$async$fS)
case 6:m=f.L(d)
case 7:if(!m.m()){s=8
break}i=m.gn()
g.j(0,A.t(i.h(0,"record_id")),A.qz(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fS,r)}}
A.qp.prototype={
$1(a){return this.mA(a)},
mA(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.dZ(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aE.prototype={
l(a){return A.ij(this).l(0)+": "+this.a},
$iG:1}
A.hp.prototype={}
A.ey.prototype={}
A.k0.prototype={}
A.b1.prototype={}
A.bn.prototype={}
A.bu.prototype={}
A.dI.prototype={}
A.he.prototype={}
A.fA.prototype={}
A.ec.prototype={}
A.eF.prototype={
gk(a){return this.b}}
A.cs.prototype={}
A.cq.prototype={}
A.hg.prototype={}
A.it.prototype={
ag(){return"BackendHintKind."+this.b}}
A.c3.prototype={}
A.v2.prototype={
$2(a,b){return B.a.lP(B.b.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:76}
A.qq.prototype={
ly(a,b){var s,r,q,p,o,n
if(b!=null){s=this.qk(b)
if(A.aA(s))return A.dt(0,0,s<0?0:s)
if(s instanceof A.b2){r=s.a-A.bJ()
return r<=0?B.aq:A.dt(0,r,0)}return B.ar}q=a<1?1:a
p=1e6
o=1
for(;;){if(!(o<q&&p<3e8))break
n=p*2
p=n>3e8?3e8:n;++o}return A.dt(B.u.m0(p*J.Af(A.xB(q),0.5,1.5)),0,0)},
rU(a){return this.ly(a,null)},
qk(a){var s=B.a.cz(a),r=A.eu(s,null)
if(r!=null)return r
return A.BQ(s)}}
A.hf.prototype={}
A.ho.prototype={}
A.qB.prototype={
hH(a){return this.v_(a)},
v_(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$hH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eN("lp_sync_state",A.m(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hH)
case 3:m=c
l=J.J(m)
if(l.gB(m)){q=null
s=1
break}o=A.S(J.aa(l.gC(m),"cursor_updated"))
n=A.S(J.aa(l.gC(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.hf(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
dY(a,b,c,d){return this.vy(a,b,c,d)},
vy(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dY=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dY)
case 5:s=m.ci(f)?2:4
break
case 2:s=6
return A.a(a.ai(0,"lp_sync_state",A.l(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$dY)
case 6:s=3
break
case 4:s=7
return A.a(a.F("lp_sync_state",A.l(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$dY)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dY,r)},
hI(a){return this.v1(a)},
v1(a){var s=0,r=A.h(t.k5),q,p=this,o,n,m
var $async$hI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eN("lp_sync_state",A.m(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hI)
case 3:n=c
m=J.J(n)
if(m.gB(n)){q=B.bZ
s=1
break}o=A.a7(J.aa(m.gC(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.ho(o,A.a7(J.aa(m.gC(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
dZ(a,b,c,d){return this.vC(a,b,c,d)},
vC(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dZ)
case 5:s=m.ci(f)?2:4
break
case 2:s=6
return A.a(a.ai(0,"lp_sync_state",A.l(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$dZ)
case 6:s=3
break
case 4:s=7
return A.a(a.F("lp_sync_state",A.l(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$dZ)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dZ,r)},
h7(){var s=0,r=A.h(t.gU),q,p=this,o,n,m,l,k
var $async$h7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aN("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden\n      FROM lp_sync_row\n    "),$async$h7)
case 3:m=b
l=J.J(m)
k=l.gB(m)?B.y:l.gC(m)
l=A.a7(k.h(0,"pending"))
if(l==null)l=0
o=A.a7(k.h(0,"conflicts"))
if(o==null)o=0
n=A.a7(k.h(0,"hidden"))
q=new A.l7(o,n==null?0:n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)}}
A.cw.prototype={
ag(){return"SyncState."+this.b}}
A.fq.prototype={
ag(){return"AccessState."+this.b}}
A.es.prototype={
ag(){return"OutboxKind."+this.b}}
A.h9.prototype={
ag(){return"OpQueueKind."+this.b}}
A.cY.prototype={}
A.qA.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i=this.a
A.t(i.h(0,"store"))
A.t(i.h(0,"record_id"))
s=A.S(i.h(0,"remote_updated"))
r=A.a7(i.h(0,"last_seen_at"))
q=A.S(i.h(0,"base_updated"))
A.S(i.h(0,"base_hash"))
p=A.S(i.h(0,"base_json"))
o=A.ef(B.bo,A.t(i.h(0,"sync_state")))
A.yA(i.h(0,"dirty_fields"))
n=A.a7(i.h(0,"local_rev"))
if(n==null)n=0
m=A.ef(B.bm,A.t(i.h(0,"access_state")))
A.S(i.h(0,"op_id"))
l=A.a7(i.h(0,"attempt_count"))
if(l==null)l=0
k=A.a7(i.h(0,"next_retry_at"))
if(k==null)k=0
j=A.S(i.h(0,"last_error"))
A.a7(i.h(0,"schema_ver"))
return new A.cY(s,r,q,p,o,n,m,l,k,j)},
$S:77}
A.bH.prototype={}
A.pj.prototype={
$0(){var s,r,q,p=this.a,o=A.t(p.h(0,"store")),n=A.t(p.h(0,"record_id")),m=A.ef(B.bv,A.t(p.h(0,"kind"))),l=A.t(p.h(0,"payload_json")),k=A.S(p.h(0,"base_updated")),j=A.S(p.h(0,"base_hash"))
if(j==null)j=""
s=A.yA(p.h(0,"dirty_fields"))
r=A.t(p.h(0,"op_id"))
q=A.X(p.h(0,"created_at"))
A.X(p.h(0,"updated_at"))
return new A.bH(o,n,m,l,k,j,s,r,q,A.S(p.h(0,"depends_on_op")))},
$S:78}
A.dH.prototype={}
A.pc.prototype={
$0(){var s,r,q,p,o,n,m,l=this.a
A.X(l.h(0,"seq"))
s=A.t(l.h(0,"op_id"))
r=A.t(l.h(0,"store"))
q=A.t(l.h(0,"record_id"))
p=A.ef(B.bs,A.t(l.h(0,"kind")))
o=A.t(l.h(0,"payload_json"))
A.t(l.h(0,"state"))
n=A.a7(l.h(0,"attempt_count"))
if(n==null)n=0
A.a7(l.h(0,"next_retry_at"))
A.S(l.h(0,"last_error"))
m=A.S(l.h(0,"depends_on_op"))
A.X(l.h(0,"created_at"))
return new A.dH(s,r,q,p,o,n,m)},
$S:79}
A.on.prototype={
cp(a,b){return this.tS(a,b)},
tS(a,b){var s=0,r=A.h(t.X),q,p
var $async$cp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.dg(A.l(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cp,r)},
hA(a,b,c,d){return this.uK(a,b,c,d)},
uK(a,b,c,d){var s=0,r=A.h(t.u),q,p,o,n,m,l,k,j,i,h,g,f
var $async$hA=A.c(function(e,a0){if(e===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=a.uF(b,c)
h.N("PRAGMA journal_mode=TRUNCATE")
p=h.hZ("PRAGMA journal_mode")
o=p.gC(p).b[0]
if(J.an(o).toLowerCase()!=="truncate"){h.p()
throw A.b(A.u("journal_mode read-back was "+A.p(o)+", expected truncate"))}p=t.N
n=A.B8(d)
m=t.bE.a(n.h(0,"stores"))
if(m==null)m=A.m([],t.aw)
l=A.a7(n.h(0,"maxDocBytes"))
if(l==null)l=19e5
k=A.yv(n.h(0,"destructiveBackup"))
j=A.F_(A.B9(d,"fieldCipher"))
if(J.Ac(m,new A.os())&&j==null)throw A.b(A.ay("Store declares encrypted fields but no fieldCipher was provided.",null))
i=t.S
g=A
f=h
s=3
return A.a(A.cn(new A.r_(A.I(p,t.p)),new A.iW(A.I(p,t.fw),h),k!==!1,j,l,b,B.bO,m),$async$hA)
case 3:q=new g.fW(f,a0,A.I(i,t.oS),A.I(i,t.on))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)}}
A.os.prototype={
$1(a){return B.c.dE(a.c,new A.or())},
$S:80}
A.or.prototype={
$1(a){return a.e},
$S:46}
A.oq.prototype={
$1(a){return A.Ba(a)},
$S:82}
A.op.prototype={
$2(a,b){var s,r,q=J.an(a)
if(t.f.b(b))this.a.j(0,q,A.fV(b))
else{s=this.a
if(t.j.b(b)){r=J.av(b,new A.oo(),t.z)
r=A.Q(r,r.$ti.i("R.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:13}
A.oo.prototype={
$1(a){return t.f.b(a)?A.fV(a):a},
$S:29}
A.ue.prototype={}
A.eR.prototype={}
A.us.prototype={
ha(){var s=0,r=A.h(t.q),q,p=this,o
var $async$ha=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.xE(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
jr(a){return this.v5(a)},
v5(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$jr=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.xE(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jr,r)}}
A.lr.prototype={}
A.fW.prototype={
cp(a,b){return this.tT(a,b)},
tT(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$cp=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:e=b.a
if(e==null){q=A.jp(0,"protocol_envelope","Payload is null",null)
s=1
break}m=A.Bb(e)
if(m==null){q=A.jp(0,"protocol_envelope","Payload must be a map",null)
s=1
break}l=null
try{l=A.BZ(m)}catch(c){k=A.E(c)
f=A.jp(0,"protocol_envelope",J.an(k),null)
q=f
s=1
break}if(l.a!==2){q=A.jp(l.b,"protocol_mismatch","Version mismatch: expected 2, got "+l.a,A.l(["expected",2,"actual",l.a],t.N,t.X))
s=1
break}p=4
s=7
return A.a(n.ia(a,l,b),$async$cp)
case 7:j=a1
i=new A.kw(2,l.b,j,null)
f=A.dg(i.ao())
q=f
s=1
break
p=2
s=6
break
case 4:p=3
d=o.pop()
h=A.E(d)
f=A.jp(l.b,"localpocket",J.an(h),A.l(["type",A.Be(h)],t.N,t.X))
q=f
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cp,r)},
ia(a,b,c){return this.nS(a,b,c)},
nS(a,b,c){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$ia=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=p.as
if(l===$){o=A.l(["health",p.goU(),"capabilities",p.goc(),"get",p.goS(),"mutate_batch",p.goX(),"compiled_query",p.goj(),"open",p.goZ(),"analyze",p.goa(),"wal_checkpoint",p.gpI(),"vacuum",p.gpG(),"prune_outbox",p.gp6(),"compact",p.gog(),"run_maintenance",p.gp8(),"tx_begin",p.gpq(),"tx_get",p.gpu(),"tx_mutate_batch",p.gpw(),"tx_savepoint",p.gpE(),"tx_rollback_to",p.gpC(),"tx_release",p.gpy(),"tx_commit",p.gps(),"tx_rollback",p.gpA(),"watch_query",p.gpO(),"watch_one",p.gpM(),"watch_cancel",p.gpK(),"sync_start",p.gpi(),"sync_stop",p.gpm(),"sync_now",p.gpa(),"sync_pause",p.gpc(),"sync_resume",p.gpe(),"sync_set_connectivity",p.gpg(),"sync_update_auth",p.gpo(),"sync_status",p.gpk(),"file_probe",p.goH(),"file_upload_begin",p.goL(),"file_upload_chunk",p.goN(),"file_upload_finish",p.goP(),"file_list",p.goD(),"file_open",p.goF(),"file_remove",p.goJ(),"file_gc",p.goB(),"file_enforce_storage_cap",p.goz(),"conflicts_list",p.gos(),"conflicts_get",p.goq(),"conflicts_resolve",p.gou(),"conflicts_accept_local",p.gom(),"conflicts_accept_remote",p.goo(),"conflicts_watch",p.gow(),"close",p.goe()],t.N,t.an)
p.as!==$&&A.vj()
p.as=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.ev("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
iw(a,b){return this.oV(a,b)},
oV(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$iw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.hZ("SELECT sqlite_version() AS v")
m=n.gC(n).h(0,"v")
o=o.hZ("PRAGMA journal_mode")
q=A.l(["ok",!0,"sqliteVersion",m,"journalMode",o.gC(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
ik(a,b){return this.od(a,b)},
od(a,b){var s=0,r=A.h(t.X),q
var $async$ik=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.l(["storage","opfs","durable",!0,"persistent",!0,"journal","truncate","multiTabStorage",!0,"multiTabSync",!1,"worker",!0],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
fu(a,b){return this.oT(a,b)},
oT(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"id"))
o=p.c
if(A.qE(o)!=null)A.w(A.u(u.L))
l=A
s=3
return A.a(new A.ed(o,o.af(n),null,null).bZ(m),$async$fu)
case 3:q=l.bB(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
bH(a,b){return this.oY(a,b)},
oY(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$bH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=b.d
i=A.t(j.h(0,"store"))
h=J.ea(t.j.a(j.h(0,"mutations")),t.f)
s=J.ar(h.a)===1?3:4
break
case 3:o=h.gC(h)
n=A.t(o.h(0,"action"))
m=t.b.a(A.e5(o.h(0,"record")))
l=A.S(o.h(0,"id"))
j=p.c
if(A.qE(j)!=null)A.w(A.u(u.L))
k=new A.ed(j,j.af(i),null,null)
case 5:switch(n){case"put":s=7
break
case"patch":s=8
break
case"archive":s=9
break
case"restore":s=10
break
case"purge":s=11
break
default:s=12
break}break
case 7:m.toString
s=13
return A.a(k.hG(m),$async$bH)
case 13:s=6
break
case 8:l.toString
m.toString
s=14
return A.a(k.hB(l,m),$async$bH)
case 14:s=6
break
case 9:l.toString
s=15
return A.a(k.h2(l),$async$bH)
case 15:s=6
break
case 10:l.toString
s=16
return A.a(k.hK(l),$async$bH)
case 16:s=6
break
case 11:l.toString
s=17
return A.a(k.hF(l),$async$bH)
case 17:s=6
break
case 12:throw A.b(A.ay("Unknown mutation action: "+n,null))
case 6:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 4:s=18
return A.a(p.c.a2(new A.oG(i,h),t.P),$async$bH)
case 18:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bH,r)},
il(a,b){return this.ol(a,b)},
ol(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$il=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.ib(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)},
fv(a,b){return this.p_(a,b)},
p_(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$fv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=t.lH.a(b.d.h(0,"stores"))
s=h!=null?3:4
break
case 3:o=J.L(h),n=p.c,m=n.ch,l=t.f,k=n.z==null
case 5:if(!o.m()){s=6
break}j=o.gn()
if(!l.b(j))A.w(A.Y("Schema must be a map: "+A.p(j),null,null))
i=A.wX(A.fV(j))
if(B.c.dE(i.c,new A.oH())&&k)throw A.b(A.ay('Store "'+i.a+'" declares encrypted fields but no fieldCipher was provided.',null))
s=!m.I(i.a)?7:8
break
case 7:s=9
return A.a(n.b5(i),$async$fv)
case 9:case 8:s=5
break
case 6:case 4:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
fg(a,b){return this.ob(a,b)},
ob(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.dD(A.S(b.d.h(0,"store"))),$async$fg)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fg,r)},
fM(a,b){return this.pJ(a,b)},
pJ(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eY(),$async$fM)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fM,r)},
fL(a,b){return this.pH(a,b)},
pH(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eX(A.a7(b.d.h(0,"pages"))),$async$fL)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
fw(a,b){return this.p7(a,b)},
p7(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.a7(b.d.h(0,"maxEntries"))
if(o==null)o=1e4
n=A
s=3
return A.a(p.c.eI(o),$async$fw)
case 3:q=n.l(["pruned",d],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
fh(a,b){return this.oh(a,b)},
oh(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A
s=3
return A.a(p.c.dG(A.t(o.h(0,"store")),A.dt(0,A.X(o.h(0,"olderThanMs")),0)),$async$fh)
case 3:q=n.l(["compacted",d],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
fz(a,b){return this.p9(a,b)},
p9(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.a7(b.d.h(0,"compactOlderThanMs"))
s=3
return A.a(p.c.d6(A.dt(0,o==null?7776e6:o,0)),$async$fz)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
fG(a,b){return this.pr(a,b)},
pr(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.u("A transaction session is already active on this database."))
o=p.e++
n=$.v
m=t.D
l=t.Q
k=new A.r(n,m)
p.c.a2(new A.oK(p,o,new A.aI(new A.r(n,m),l),new A.aI(k,l)),t.P).iV(new A.oL(p))
s=3
return A.a(k,$async$fG)
case 3:q=A.l(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fG,r)},
fH(a,b){return this.pv(a,b)},
pv(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.ce(A.a7(o.h(0,"sessionId")))
m=A.t(o.h(0,"store"))
l=A.t(o.h(0,"id"))
k=A
s=3
return A.a(n.c.ck(m).bZ(l),$async$fH)
case 3:q=k.bB(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
ca(a,b){return this.px(a,b)},
px(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ca=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=p.ce(A.a7(i.h(0,"sessionId")))
g=A.t(i.h(0,"store"))
f=J.ea(t.j.a(i.h(0,"mutations")),t.f)
e=h.c.ck(g)
i=f.$ti,o=new A.a5(f,f.gk(0),i.i("a5<B.E>")),n=t.b,i=i.i("B.E")
case 3:if(!o.m()){s=4
break}m=o.d
if(m==null)m=i.a(m)
l=A.t(m.h(0,"action"))
k=n.a(A.e5(m.h(0,"record")))
j=A.S(m.h(0,"id"))
case 5:switch(l){case"put":s=7
break
case"patch":s=8
break
case"archive":s=9
break
case"restore":s=10
break
case"purge":s=11
break
default:s=12
break}break
case 7:k.toString
s=13
return A.a(e.hG(k),$async$ca)
case 13:s=6
break
case 8:j.toString
k.toString
s=14
return A.a(e.hB(j,k),$async$ca)
case 14:s=6
break
case 9:j.toString
s=15
return A.a(e.h2(j),$async$ca)
case 15:s=6
break
case 10:j.toString
s=16
return A.a(e.hK(j),$async$ca)
case 16:s=6
break
case 11:j.toString
s=17
return A.a(e.hF(j),$async$ca)
case 17:s=6
break
case 12:throw A.b(A.ay("Unknown mutation action: "+l,null))
case 6:s=3
break
case 4:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ca,r)},
fK(a,b){return this.pF(a,b)},
pF(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.ce(A.a7(b.d.h(0,"sessionId")))
n=o.d
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.N("SAVEPOINT "+m),$async$fK)
case 3:n=t.N
q=A.l(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fK,r)},
fJ(a,b){return this.pD(a,b)},
pD(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
s=3
return A.a(p.ce(A.a7(o.h(0,"sessionId"))).c.b.N("ROLLBACK TO "+A.t(o.h(0,"savepoint"))),$async$fJ)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fJ,r)},
fI(a,b){return this.pz(a,b)},
pz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.ce(A.a7(o.h(0,"sessionId")))
m=A.t(o.h(0,"savepoint"))
s=3
return A.a(n.c.b.N("RELEASE "+m),$async$fI)
case 3:B.c.P(n.d,m)
q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
iz(a,b){return this.pt(a,b)},
pt(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.ce(A.a7(b.d.h(0,"sessionId")))
p.d=null
o.b.am()
q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iz,r)},
iA(a,b){return this.pB(a,b)},
pB(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.ce(A.a7(b.d.h(0,"sessionId")))
p.d=null
o.b.ap(new A.jW("rollback","Transaction rolled back."))
q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iA,r)},
fP(a,b){return this.pP(a,b)},
pP(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=A.X(n.h(0,"watchId"))
l=p.kJ(n)
n=p.c
o=new A.kL(n,n.af(l.d).a,l.r,l.w,l.y,null,new A.oO(a,m))
n=n.f.a
o.x=new A.aR(n,A.o(n).i("aR<1>")).aL(o.gnP())
p.f.j(0,m,new A.eR(new A.oP(o)))
k=J
s=3
return A.a(o.hq(),$async$fP)
case 3:n=k.av(d,A.z6(),t.X)
n=A.Q(n,n.$ti.i("R.E"))
q=A.l(["watchId",m,"items",n],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fP,r)},
fO(a,b){return this.pN(a,b)},
pN(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.X(o.h(0,"watchId"))
m=A.t(o.h(0,"store"))
l=A.t(o.h(0,"id"))
o=p.c
p.f.j(0,n,new A.eR(new A.oM(new A.jE(o,o.af(m),l).aF().aL(new A.oN(a,n)))))
if(A.qE(o)!=null)A.w(A.u(u.L))
k=A
j=n
i=A
s=3
return A.a(new A.ed(o,o.af(m),null,null).bZ(l),$async$fO)
case 3:q=k.l(["watchId",j,"item",i.bB(d)],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fO,r)},
fN(a,b){return this.pL(a,b)},
pL(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.P(0,A.X(b.d.h(0,"watchId")))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.b.$0(),$async$fN)
case 5:case 4:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
dt(a,b){return this.pj(a,b)},
pj(a1,a2){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dt=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a2.d
a0=A.S(a.h(0,"baseUrl"))
if(a0==null||a0.length===0)throw A.b(A.ay("syncStart requires baseUrl.",null))
s=3
return A.a(p.cj(),$async$dt)
case 3:o=A.S(a.h(0,"token"))
n=A.S(a.h(0,"scopeId"))
if(n==null)n="web-sync"
m=new A.us(o,n)
a=A.kt(a0)
l=p.c
k=l.ch
j=A.o(k).i("ai<1>")
k=A.Q(new A.ai(k,j),j.i("n.E"))
j=t.hw
i=A.eE(null,null,j)
h=t.N
g=$.v.h(0,B.c_)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.iC(A.m([],t.W))
f=new A.pp(f)
e=new A.jL(a,m,k,n,f,i,A.I(h,t.hU),A.I(h,j))
j=new A.lV(m)
e.y=j
e.z=new A.pr(f,a,j)
d=A.xZ()
j=A.eE(null,null,t.n6)
f=A.eE(null,null,t.em)
i=t.H
k=A.cj(null,i)
c=A.cj(B.M,t.E)
b=A.m([],t.s)
i=A.cj(null,i)
k=new A.ki(l,e,B.F,new A.oI(a1),B.L,j,f,k,A.br(h),c,b,i)
a=k.e=new A.qB(l,B.a.q(A.au(B.l.u(B.f.u(a.l(0)+"|"+n)).a),0,12))
j=new A.nr(l,e,B.F,l.y)
k.x=j
j=new A.pQ(l,e,B.F,a,j)
k.f=j
k.r=new A.qo(l,e,B.F,a,j)
k.w=new A.pV(l,e,B.F,k.gq6(),e.as)
d.b=k
p.y=m
p.x=d.bq()
k=d.bq().ay
p.z=new A.aR(k,A.o(k).i("aR<1>")).aL(new A.oJ(p,a1))
s=4
return A.a(d.bq().aF(),$async$dt)
case 4:s=5
return A.a(e.f7(),$async$dt)
case 5:q=A.l(["ok",!0,"state",d.bq().y.b],h,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dt,r)},
fE(a,b){return this.pn(a,b)},
pn(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cj(),$async$fE)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
fA(a,b){return this.pb(a,b)},
pb(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.u("Sync is not started."))
n.k2.push("cycle")
s=3
return A.a(n.cO(),$async$fA)
case 3:o=d
q=A.l(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"hadError",o.e],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
fB(a,b){return this.pd(a,b)},
pd(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.u("Sync is not started."))
s=3
return A.a(o.bg(),$async$fB)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)},
fC(a,b){return this.pf(a,b)},
pf(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.u("Sync is not started."))
s=3
return A.a(o.b6(),$async$fC)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
fD(a,b){return this.ph(a,b)},
ph(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.u("Sync is not started."))
o=b.d.h(0,"online")
if(!A.bO(o))throw A.b(A.ay("online must be bool.",null))
s=3
return A.a(n.i_(o),$async$fD)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
fF(a,b){return this.pp(a,b)},
pp(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.y
n=p.x
if(o==null||n==null)throw A.b(A.u("Sync is not started."))
o.a=A.S(b.d.h(0,"token"))
s=3
return A.a(n.hv(),$async$fF)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
iy(a,b){return this.pl(a,b)},
pl(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.Q
if(o==null){o=t.N
o=A.l(["state","closed"],o,o)}else o=A.xl(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)},
c9(a,b){return this.oI(a,b)},
oI(a1,a2){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$c9=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:d=a2.d
c=A.t(d.h(0,"store"))
b=A.t(d.h(0,"recordId"))
a=t.L
a0=a.a(A.e5(d.h(0,"bytes")))
d=m.c.ay
d===$&&A.y()
i=J.J(a0)
s=3
return A.a(d.rA(A.qe(a0,a),i.gk(a0),b,c),$async$c9)
case 3:h=a4
s=4
return A.a(d.uG(b,h.a,c),$async$c9)
case 4:l=a4
k=A.m([],t.t)
a=t.K
g=new A.c2(A.bi(l,"stream",a))
p=5
case 8:s=10
return A.a(g.m(),$async$c9)
case 10:if(!a4){s=9
break}j=g.gn()
J.wH(k,j)
s=8
break
case 9:n.push(7)
s=6
break
case 5:n=[2]
case 6:p=2
s=11
return A.a(g.A(),$async$c9)
case 11:s=n.pop()
break
case 7:s=12
return A.a(d.um(b,c),$async$c9)
case 12:f=a4
d=h.e
g=h.r
e=J.ar(f)
i=i.gk(a0)===J.ar(k)&&A.Bd(a0,k)
q=A.l(["hash",d,"state",g,"refCount",e,"readBack",k,"match",i],t.N,a)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c9,r)},
iu(a,b){return this.oM(a,b)},
oM(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h
var $async$iu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.w++
k=b.d
j=A.t(k.h(0,"store"))
i=A.t(k.h(0,"recordId"))
h=A.S(k.h(0,"field"))
if(h==null)h="imgs"
o=A.S(k.h(0,"name"))
if(o==null)o="blob.bin"
n=A.X(k.h(0,"size"))
k=A.S(k.h(0,"expectedSha256"))
m=A.m([],t.bs)
if(n<0||n>4294967296)throw A.b(A.ay("Invalid file size: "+n,null))
p.r.j(0,l,new A.lr(j,i,h,o,n,k,m))
q=A.l(["uploadId",l],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iu,r)},
iv(a,b){return this.oO(a,b)},
oO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$iv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=A.X(m.h(0,"uploadId"))
k=p.r.h(0,l)
if(k==null)throw A.b(A.ay("Unknown upload session: "+l,null))
o=t.L.a(A.e5(m.h(0,"chunk")))
m=J.J(o)
if(m.gk(o)>262144)throw A.b(A.ay("Chunk too large: "+m.gk(o)+" > 262144",null))
k.x.push(new Uint8Array(A.bx(o)))
m=k.w+m.gk(o)
k.w=m
n=k.f
if(m>n)throw A.b(A.ay("Upload exceeds declared size "+n,null))
q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
fs(a,b){return this.oQ(a,b)},
oQ(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=A.X(b.d.h(0,"uploadId"))
f=p.r.P(0,g)
if(f==null)throw A.b(A.ay("Unknown upload session: "+g,null))
o=f.w
n=f.f
if(o!==n)throw A.b(A.ay("Upload size mismatch: expected "+n+" but got "+o,null))
o=p.c.ay
o===$&&A.y()
m=f.b
l=f.c
k=new A.oF(f).$0()
j=f.d
i=f.e
s=3
return A.a(o.cT(k,f.r,n,j,i,l,m),$async$fs)
case 3:h=d
q=A.l(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)},
fp(a,b){return this.oE(a,b)},
oE(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.c.ay
l===$&&A.y()
o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"recordId"))
o=A.S(o.h(0,"field"))
k=J
s=3
return A.a(l.d0(o==null?"imgs":o,m,n),$async$fp)
case 3:l=k.av(d,A.Eq(),t.G)
l=A.Q(l,l.$ti.i("R.E"))
q=A.l(["refs",l],t.N,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
ds(a,b){return this.oG(a,b)},
oG(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$ds=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:d=m.c.ay
d===$&&A.y()
i=b.d
h=A.t(i.h(0,"store"))
g=A.t(i.h(0,"recordId"))
f=A.S(i.h(0,"field"))
if(f==null)f="imgs"
e=A.a7(i.h(0,"index"))
if(e==null)e=0
s=3
return A.a(d.dT(f,e,g,A.S(i.h(0,"refId")),h),$async$ds)
case 3:l=a0
k=A.m([],t.t)
h=new A.c2(A.bi(l,"stream",t.K))
p=4
case 7:s=9
return A.a(h.m(),$async$ds)
case 9:if(!a0){s=8
break}j=h.gn()
J.wH(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.A(),$async$ds)
case 10:s=n.pop()
break
case 6:q=A.l(["bytes",A.bB(new Uint8Array(A.bx(k))),"size",J.ar(k)],t.N,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ds,r)},
fq(a,b){return this.oK(a,b)},
oK(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=p.c.ay
j===$&&A.y()
o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"recordId"))
l=A.S(o.h(0,"field"))
if(l==null)l="imgs"
k=A.a7(o.h(0,"index"))
if(k==null)k=0
s=3
return A.a(j.eQ(0,l,k,m,A.S(o.h(0,"refId")),n),$async$fq)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fq,r)},
fo(a,b){return this.oC(a,b)},
oC(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.c.ay
m===$&&A.y()
o=b.d
n=A.a7(o.h(0,"blobGraceMs"))
n=A.dt(0,n==null?6048e5:n,0)
o=A.a7(o.h(0,"tmpGraceMs"))
l=A
s=3
return A.a(m.cB(n,A.dt(0,o==null?864e5:o,0)),$async$fo)
case 3:q=l.l(["cleaned",d],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
fn(a,b){return this.oA(a,b)},
oA(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.ay
o===$&&A.y()
n=A
s=3
return A.a(o.cn(A.X(b.d.h(0,"maxBytes"))),$async$fn)
case 3:q=n.l(["evicted",d],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
fl(a,b){return this.ot(a,b)},
ot(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.S(b.d.h(0,"store"))
n=p.c.ax
n===$&&A.y()
m=J
s=3
return A.a(n.eB(o),$async$fl)
case 3:n=m.av(d,A.z4(),t.G)
n=A.Q(n,n.$ti.i("R.E"))
q=A.l(["conflicts",n],t.N,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fl,r)},
fk(a,b){return this.or(a,b)},
or(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=A.t(n.h(0,"store"))
l=A.t(n.h(0,"id"))
n=p.c.ax
n===$&&A.y()
s=3
return A.a(n.dd(m,l),$async$fk)
case 3:o=d
q=o==null?null:A.zc(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
fm(a,b){return this.ov(a,b)},
ov(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"id"))
l=t.G.a(A.e5(o.h(0,"merged")))
o=p.c.ax
o===$&&A.y()
s=3
return A.a(o.dV(m,l,n),$async$fm)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
fi(a,b){return this.on(a,b)},
on(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"id"))
o=p.c.ax
o===$&&A.y()
s=3
return A.a(o.el(n,m),$async$fi)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
fj(a,b){return this.op(a,b)},
op(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.t(o.h(0,"store"))
m=A.t(o.h(0,"id"))
o=p.c.ax
o===$&&A.y()
s=3
return A.a(o.em(n,m),$async$fj)
case 3:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
im(a,b){return this.ox(a,b)},
ox(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$im=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=A.X(o.h(0,"watchId"))
m=A.S(o.h(0,"store"))
o=p.c.ax
o===$&&A.y()
p.f.j(0,n,new A.eR(new A.oD(o.vv(m).aL(new A.oE(a,n)))))
q=A.l(["watchId",n],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$im,r)},
dq(a,b){return this.of(a,b)},
of(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$dq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cj(),$async$dq)
case 3:o=p.f,n=new A.bT(o,o.r,o.e)
case 4:if(!n.m()){s=5
break}s=6
return A.a(n.d.b.$0(),$async$dq)
case 6:s=4
break
case 5:o.aK(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.ap(new A.iQ("Database closed."))
p.d=null
s=7
return A.a(p.c.p(),$async$dq)
case 7:q=A.l(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
cj(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cj=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.x
q.x=null
p=q.z
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.r?p:A.bg(p,t.H),$async$cj)
case 2:q.z=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aG(),$async$cj)
case 5:s=6
return A.a(o.e3(),$async$cj)
case 6:o.e3()
p=o.ay
if((p.c&4)===0)p.p()
o.x.a.p()
case 4:q.Q=q.y=null
return A.e(null,r)}})
return A.f($async$cj,r)},
ce(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.u("No active transaction session matching ID "+A.p(a)+"."))
s=this.d
s.toString
return s},
kJ(a){var s,r,q,p,o,n,m=a.h(0,"type"),l=a.h(0,"operation"),k=a.h(0,"compilerVersion"),j=a.h(0,"store"),i=a.h(0,"schemaVersion"),h=a.h(0,"schemaFingerprint"),g=a.h(0,"argumentCount"),f=a.h(0,"sql"),e=a.h(0,"args")
if(!J.x(m,"query_plan")||typeof l!="string"||!B.bS.D(0,l)||!J.x(k,1)||typeof j!="string"||!A.aA(i)||typeof h!="string"||!A.aA(g)||typeof f!="string"||!t.j.b(e))throw A.b(A.ev("Malformed or stale compiled query plan."))
s=this.c.af(j).a
r=new A.O("")
A.a9(r,s.ao())
q=r.a
p=A.au(B.l.u(B.f.u(q.charCodeAt(0)==0?q:q)).a)
if(s.b!==i||p!==h||J.ar(e)!==g||!B.a.L(f,"SELECT "))throw A.b(A.ev("Stale or mismatched compiled query plan."))
o=a.h(0,"projection")
a.h(0,"limit")
a.h(0,"shape")
A.t(m)
q=t.X
n=J.av(e,A.z5(),q)
n=A.Q(n,n.$ti.i("R.E"))
q=A.cP(n,q)
n=t.j.b(o)?J.ea(o,t.N):null
return new A.pY(l,j,f,q,n)},
ib(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k
var $async$ib=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.kJ(a)
n=a.h(0,"sessionId")
m=A.aA(n)?new A.oB(p.ce(n)):new A.oC(p)
l=a.h(0,"pageLimit")
k=A.aA(l)?l:null
q=A.uZ(p.c,m,o,k)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)}}
A.oA.prototype={
$2(a,b){return new A.V(J.an(a),b,t.eB)},
$S:48}
A.oG.prototype={
$1(a){return this.mi(a)},
mi(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.ck(q.a)
p=q.b,o=p.$ti,p=new A.a5(p,p.gk(0),o.i("a5<B.E>")),n=t.b,o=o.i("B.E")
case 2:if(!p.m()){s=3
break}m=p.d
if(m==null)m=o.a(m)
l=A.t(m.h(0,"action"))
k=n.a(A.e5(m.h(0,"record")))
j=A.S(m.h(0,"id"))
case 4:switch(l){case"put":s=6
break
case"patch":s=7
break
case"archive":s=8
break
case"restore":s=9
break
case"purge":s=10
break
default:s=11
break}break
case 6:k.toString
s=12
return A.a(i.hG(k),$async$$1)
case 12:s=5
break
case 7:j.toString
k.toString
s=13
return A.a(i.hB(j,k),$async$$1)
case 13:s=5
break
case 8:j.toString
s=14
return A.a(i.h2(j),$async$$1)
case 14:s=5
break
case 9:j.toString
s=15
return A.a(i.hK(j),$async$$1)
case 15:s=5
break
case 10:j.toString
s=16
return A.a(i.hF(j),$async$$1)
case 16:s=5
break
case 11:throw A.b(A.ay("Unknown mutation action: "+l,null))
case 5:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oH.prototype={
$1(a){return a.e},
$S:46}
A.oK.prototype={
$1(a){return this.mj(a)},
mj(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
q.a.d=new A.ue(q.b,p,a,A.m([],t.s))
q.d.am()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oL.prototype={
$1(a){this.a.d=null},
$S:22}
A.oO.prototype={
$1(a){this.a.cl(A.dg(A.l(["v",2,"op","worker_event","watchId",this.b,"value",A.bB(a)],t.N,t.X)))},
$S:85}
A.oP.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
o=p.y
if(o!=null)o.A()
p=p.x
if(p!=null)p.A()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.oN.prototype={
$1(a){this.a.cl(A.dg(A.l(["v",2,"op","worker_event","watchId",this.b,"value",A.bB(a)],t.N,t.X)))},
$S:86}
A.oM.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.A()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.oI.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.cl(A.dg(A.l(["v",2,"op","auth_required"],t.N,t.K)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.oJ.prototype={
$1(a){this.a.Q=a
this.b.cl(A.dg(A.l(["v",2,"op","sync_status","status",A.xl(a)],t.N,t.K)))},
$S:87}
A.oF.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.x,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bw(A.d5(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.H)(l),++j
s=3
break
case 5:case 1:return A.bw(null,0,r)
case 2:return A.bw(o.at(-1),1,r)}})
var s=0,r=A.yI($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.yX(r)},
$S:88}
A.oE.prototype={
$1(a){var s=J.av(a,A.z4(),t.G)
s=A.Q(s,s.$ti.i("R.E"))
this.a.cl(A.dg(A.l(["v",2,"op","worker_event","watchId",this.b,"value",A.bB(s)],t.N,t.X)))},
$S:89}
A.oD.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.A()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.oB.prototype={
$2(a,b){return this.a.c.b.aj(a,b)},
$S:49}
A.oC.prototype={
$2(a,b){return this.a.c.m5(a,b)},
$S:49}
A.kL.prototype={
hq(){var s=0,r=A.h(t.J),q,p=this,o
var $async$hq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.e5(),$async$hq)
case 3:o=b
p.as=p.kl(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
nQ(a){var s,r=this
if(a.a!==r.b.a)return
if(r.z){r.Q=!0
return}s=r.y
if(s!=null)s.A()
r.y=A.cZ(B.Q,r.gke())},
fb(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$fb=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.z=!0
k=n.a.e;++k.w
q=3
s=6
return A.a(n.e5(),$async$fb)
case 6:m=b
l=n.kl(m)
if(!J.x(l,n.as)){n.as=l;++k.x
n.r.$1(m)}o.push(5)
s=4
break
case 3:q=2
i=p.pop()
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.z=!1
if(n.Q){n.Q=!1
k=n.y
if(k!=null)k.A()
n.y=A.cZ(B.Q,n.gke())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$fb,r)},
e5(){var s=0,r=A.h(t.J),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e5=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:e=p.a
b=A
a=p.b
s=3
return A.a(e.m5(p.c,p.d),$async$e5)
case 3:d=b.za(a,a1,e.z,e.Q)
c=p.e
if(c==null){q=d
s=1
break}e=A.m([],t.d)
for(o=d.length,n=c.$ti,m=n.i("a5<B.E>"),n=n.i("B.E"),l=t.N,k=t.X,j=0;j<d.length;d.length===o||(0,A.H)(d),++j){i=d[j]
h=A.I(l,k)
for(g=new A.a5(c,c.gk(0),m);g.m();){f=g.d
if(f==null)f=n.a(f)
if(i.I(f))h.j(0,f,i.h(0,f))}e.push(h)}q=e
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e5,r)},
kl(a){var s,r,q,p,o=A.m([],t.s)
for(s=J.L(a);s.m();){r=new A.O("")
A.a9(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}p=B.c.K(o,"|")
s=this.a.e
s.y=s.y+p.length
return A.au(B.l.u(B.f.u(p)).a)}}
A.uY.prototype={
$2(a,b){this.a.j(0,J.an(a),A.bB(b))},
$S:13}
A.uV.prototype={
$2(a,b){this.a.j(0,J.an(a),A.e5(b))},
$S:13}
A.eP.prototype={
ao(){var s=this
return A.l(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.r4.prototype={
$2(a,b){return new A.V(J.an(a),b,t.eB)},
$S:48}
A.kw.prototype={
ao(){var s,r=this,q=A.I(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.ao())
else q.j(0,"r",r.c)
return q}}
A.r1.prototype={
ao(){var s,r=A.I(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.iQ.prototype={
l(a){return"DatabaseWorkerClosedException: "+this.a},
$iG:1}
A.hd.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iG:1}
A.jW.prototype={
l(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iG:1}
A.mD.prototype={
rk(a){var s,r=null
A.z_("absolute",A.m([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.aO(a)>0&&!s.cq(a)
if(s)return a
s=A.z9()
return this.lM(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
rY(a){var s,r,q=A.et(a,this.a)
q.eR()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.c.jt(s)
q.e.pop()
q.eR()
return q.l(0)},
lM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.m([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.z_("join",s)
return this.uk(new A.bv(s,t.lS))},
uk(a){var s,r,q,p,o,n,m,l,k
for(s=a.gv(0),r=new A.eQ(s,new A.mE()),q=this.a,p=!1,o=!1,n="";r.m();){m=s.gn()
if(q.cq(m)&&o){l=A.et(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.q(k,0,q.dW(k,!0))
l.b=n
if(q.eE(n))l.e[0]=q.gde()
n=l.l(0)}else if(q.aO(m)>0){o=!q.cq(m)
n=m}else{if(!(m.length!==0&&q.iY(m[0])))if(p)n+=q.gde()
n+=m}p=q.eE(m)}return n.charCodeAt(0)==0?n:n},
f6(a,b){var s=A.et(b,this.a),r=s.d,q=A.al(r).i("c0<1>")
r=A.Q(new A.c0(r,new A.mF(),q),q.i("n.E"))
s.d=r
q=s.b
if(q!=null)B.c.ai(r,0,q)
return s.d},
jn(a){var s
if(!this.q5(a))return a
s=A.et(a,this.a)
s.jm()
return s.l(0)},
q5(a){var s,r,q,p,o,n,m,l=this.a,k=l.aO(a)
if(k!==0){if(l===$.lH())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.bT(n)){if(l===$.lH()&&n===47)return!0
if(q!=null&&l.bT(q))return!0
if(q===46)m=o==null||o===46||l.bT(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.bT(q))return!0
if(q===46)l=o==null||l.bT(o)||o===46
else l=!1
if(l)return!0
return!1},
v7(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.aO(a)
if(l<=0)return o.jn(a)
s=A.z9()
if(m.aO(s)<=0&&m.aO(a)>0)return o.jn(a)
if(m.aO(a)<=0||m.cq(a))a=o.rk(a)
if(m.aO(a)<=0&&m.aO(s)>0)throw A.b(A.xo(n+a+'" from "'+s+'".'))
r=A.et(s,m)
r.jm()
q=A.et(a,m)
q.jm()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.jp(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.jp(l[0],p[0])}else l=!1
if(!l)break
B.c.hJ(r.d,0)
B.c.hJ(r.e,1)
B.c.hJ(q.d,0)
B.c.hJ(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.xo(n+a+'" from "'+s+'".'))
l=t.N
B.c.jf(q.d,0,A.aG(p,"..",!1,l))
p=q.e
p[0]=""
B.c.jf(p,1,A.aG(r.d.length,m.gde(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.c.gW(m)==="."){B.c.jt(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.eR()
return q.l(0)},
lR(a){var s,r,q=this,p=A.yM(a)
if(p.gaE()==="file"&&q.a===$.il())return p.l(0)
else if(p.gaE()!=="file"&&p.gaE()!==""&&q.a!==$.il())return p.l(0)
s=q.jn(q.a.jo(A.yM(p)))
r=q.v7(s)
return q.f6(0,r).length>q.f6(0,s).length?s:r}}
A.mE.prototype={
$1(a){return a!==""},
$S:21}
A.mF.prototype={
$1(a){return a.length!==0},
$S:21}
A.uM.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:91}
A.oe.prototype={
mH(a){var s=this.aO(a)
if(s>0)return B.a.q(a,0,s)
return this.cq(a)?a[0]:null},
jp(a,b){return a===b}}
A.jG.prototype={
grC(){var s=this,r=t.N,q=new A.jG(s.a,s.b,s.c,A.vI(s.d,!0,r),A.vI(s.e,!0,r))
q.eR()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.c.gW(r)},
eR(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.c.gW(s)===""))break
B.c.jt(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
jm(){var s,r,q,p,o,n=this,m=A.m([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.H)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.c.jf(m,0,A.aG(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.aG(m.length+1,s.gde(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.eE(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.lH())n.b=A.z(r,"/","\\")
n.eR()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.c.gW(q)
return o.charCodeAt(0)==0?o:o}}
A.jH.prototype={
l(a){return"PathException: "+this.a},
$iG:1}
A.qn.prototype={
l(a){return this.gaB()}}
A.pF.prototype={
iY(a){return B.a.D(a,"/")},
bT(a){return a===47},
eE(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
dW(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
aO(a){return this.dW(a,!1)},
cq(a){return!1},
jo(a){var s
if(a.gaE()===""||a.gaE()==="file"){s=a.gb4()
return A.wf(s,0,s.length,B.k,!1)}throw A.b(A.P("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaB(){return"posix"},
gde(){return"/"}}
A.qM.prototype={
iY(a){return B.a.D(a,"/")},
bT(a){return a===47},
eE(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.cm(a,"://")&&this.aO(a)===s},
dW(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.bS(a,"/",B.a.a3(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.L(a,"file://"))return q
p=A.zb(a,q+1)
return p==null?q:p}}return 0},
aO(a){return this.dW(a,!1)},
cq(a){return a.length!==0&&a.charCodeAt(0)===47},
jo(a){return a.l(0)},
gaB(){return"url"},
gde(){return"/"}}
A.r5.prototype={
iY(a){return B.a.D(a,"/")},
bT(a){return a===47||a===92},
eE(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
dW(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.bS(a,"\\",2)
if(s>0){s=B.a.bS(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.zf(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
aO(a){return this.dW(a,!1)},
cq(a){return this.aO(a)===1},
jo(a){var s,r
if(a.gaE()!==""&&a.gaE()!=="file")throw A.b(A.P("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gb4()
if(a.gcY()===""){if(s.length>=3&&B.a.L(s,"/")&&A.zb(s,1)!=null)s=B.a.m_(s,"/","")}else s="\\\\"+a.gcY()+s
r=A.z(s,"/","\\")
return A.wf(r,0,r.length,B.k,!1)},
rJ(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
jp(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.rJ(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaB(){return"windows"},
gde(){return"\\"}}
A.q6.prototype={
gk(a){return this.c.length},
gul(){return this.b.length},
nd(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.D(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
e0(a){var s,r=this
if(a<0)throw A.b(A.aD("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aD("Offset "+a+u.D+r.gk(0)+"."))
s=r.b
if(a<B.c.gC(s))return-1
if(a>=B.c.gW(s))return s.length-1
if(r.pV(a)){s=r.d
s.toString
return s}return r.d=r.ns(a)-1},
pV(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
ns(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.b.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
hX(a){var s,r,q=this
if(a<0)throw A.b(A.aD("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aD("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gk(0)+"."))
s=q.e0(a)
r=q.b[s]
if(r>a)throw A.b(A.aD("Line "+s+" comes after offset "+a+"."))
return a-r},
f1(a){var s,r,q,p
if(a<0)throw A.b(A.aD("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aD("Line "+a+" must be less than the number of lines in the file, "+this.gul()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aD("Line "+a+" doesn't have 0 columns."))
return q}}
A.j3.prototype={
gU(){return this.a.a},
ga5(){return this.a.e0(this.b)},
gad(){return this.a.hX(this.b)},
gae(){return this.b}}
A.eZ.prototype={
gU(){return this.a.a},
gk(a){return this.c-this.b},
gH(){return A.vx(this.a,this.b)},
gE(){return A.vx(this.a,this.c)},
gar(){return A.cX(B.V.O(this.a.c,this.b,this.c),0,null)},
gaT(){var s=this,r=s.a,q=s.c,p=r.e0(q)
if(r.hX(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.cX(B.V.O(r.c,r.f1(p),r.f1(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.f1(p+1)
return A.cX(B.V.O(r.c,r.f1(r.e0(s.b)),q),0,null)},
T(a,b){var s
if(!(b instanceof A.eZ))return this.n4(0,b)
s=B.b.T(this.b,b.b)
return s===0?B.b.T(this.c,b.c):s},
X(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.eZ))return s.n3(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gJ(a){return A.er(this.b,this.c,this.a.a,B.o)},
$icv:1}
A.nM.prototype={
uc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.lf(B.c.gC(a1).c)
s=a.e
r=A.aG(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.fZ("\u2575")
q.a+="\n"
a.lf(l)}else if(m.b+1!==n.b){a.rj("...")
q.a+="\n"}}for(l=n.d,k=A.al(l).i("dJ<1>"),j=new A.dJ(l,k),j=new A.a5(j,j.gk(0),k.i("a5<R.E>")),k=k.i("R.E"),i=n.b,h=n.a;j.m();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gH().ga5()!==f.gE().ga5()&&f.gH().ga5()===i&&a.pW(B.a.q(h,0,f.gH().gad()))){e=B.c.bR(r,a0)
if(e<0)A.w(A.P(A.p(r)+" contains no null elements.",a0))
r[e]=g}}a.ri(i)
q.a+=" "
a.rh(n,r)
if(s)q.a+=" "
d=B.c.ue(l,new A.o6())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gH().ga5()===i?j.gH().gad():0
a.rf(h,g,j.gE().ga5()===i?j.gE().gad():h.length,p)}else a.h0(h)
q.a+="\n"
if(k)a.rg(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.fZ("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
lf(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.fZ("\u2577")
else{q.fZ("\u250c")
q.aY(new A.nU(q),"\x1b[34m")
s=q.r
r=" "+$.vn().lR(a)
s.a+=r}q.r.a+="\n"},
fX(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gH().ga5()
i=k?null:l.a.gE().ga5()
if(s&&l===c){h.aY(new A.o0(h,j,a),r)
n=!0}else if(n)h.aY(new A.o1(h,l),r)
else if(k)if(g.a)h.aY(new A.o2(h),g.b)
else o.a+=" "
else h.aY(new A.o3(g,h,c,j,a,l,i),p)}},
rh(a,b){return this.fX(a,b,null)},
rf(a,b,c,d){var s=this
s.h0(B.a.q(a,0,b))
s.aY(new A.nV(s,a,b,c),d)
s.h0(B.a.q(a,c,a.length))},
rg(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gH().ga5()===p.gE().ga5()){r.iS()
p=r.r
p.a+=" "
r.fX(a,c,b)
if(c.length!==0)p.a+=" "
r.lg(b,c,r.aY(new A.nW(r,a,b),q))}else{s=a.b
if(p.gH().ga5()===s){if(B.c.D(c,b))return
A.F1(c,b)
r.iS()
p=r.r
p.a+=" "
r.fX(a,c,b)
r.aY(new A.nX(r,a,b),q)
p.a+="\n"}else if(p.gE().ga5()===s){p=p.gE().gad()
if(p===a.a.length){A.zo(c,b)
return}r.iS()
r.r.a+=" "
r.fX(a,c,b)
r.lg(b,c,r.aY(new A.nY(r,!1,a,b),q))
A.zo(c,b)}}},
le(a,b,c){var s=c?0:1,r=this.r
s=B.a.aU("\u2500",1+b+this.i8(B.a.q(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
re(a,b){return this.le(a,b,!0)},
lg(a,b,c){this.r.a+="\n"
return},
h0(a){var s,r,q,p
for(s=new A.bQ(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<B.E>")),q=this.r,r=r.i("B.E");s.m();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.aU(" ",4)
else{p=A.b7(p)
q.a+=p}}},
h_(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.b.l(b+1)
this.aY(new A.o4(s,this,a),"\x1b[34m")},
fZ(a){return this.h_(a,null,null)},
rj(a){return this.h_(null,null,a)},
ri(a){return this.h_(null,a,null)},
iS(){return this.h_(null,null,null)},
i8(a){var s,r,q,p
for(s=new A.bQ(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<B.E>")),r=r.i("B.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
pW(a){var s,r,q
for(s=new A.bQ(a),r=t.V,s=new A.a5(s,s.gk(0),r.i("a5<B.E>")),r=r.i("B.E");s.m();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
nG(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
aY(a,b){return this.nG(a,b,t.z)}}
A.o5.prototype={
$0(){return this.a},
$S:92}
A.nO.prototype={
$1(a){var s=a.d
return new A.c0(s,new A.nN(),A.al(s).i("c0<1>")).gk(0)},
$S:93}
A.nN.prototype={
$1(a){var s=a.a
return s.gH().ga5()!==s.gE().ga5()},
$S:31}
A.nP.prototype={
$1(a){return a.c},
$S:95}
A.nR.prototype={
$1(a){var s=a.a.gU()
return s==null?new A.j():s},
$S:96}
A.nS.prototype={
$2(a,b){return a.a.T(0,b.a)},
$S:97}
A.nT.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.m([],t.dg)
for(s=J.at(c),r=s.gv(c),q=t.g7;r.m();){p=r.gn().a
o=p.gaT()
n=A.v1(o,p.gar(),p.gH().gad())
n.toString
m=B.a.h1("\n",B.a.q(o,0,n)).gk(0)
l=p.gH().ga5()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.c.gW(b).b)b.push(new A.c1(j,l,d,A.m([],q)));++l}}i=A.m([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.H)(b),++k){j=b[k]
h&1&&A.D(i,16)
B.c.qK(i,new A.nQ(j),!0)
f=i.length
for(q=s.aW(c,g),p=q.$ti,q=new A.a5(q,q.gk(0),p.i("a5<R.E>")),n=j.b,p=p.i("R.E");q.m();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gH().ga5()>n)break
i.push(e)}g+=i.length-f
B.c.G(j.d,i)}return b},
$S:98}
A.nQ.prototype={
$1(a){return a.a.gE().ga5()<this.a.b},
$S:31}
A.o6.prototype={
$1(a){return!0},
$S:31}
A.nU.prototype={
$0(){this.a.r.a+=B.a.aU("\u2500",2)+">"
return null},
$S:0}
A.o0.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:3}
A.o1.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:3}
A.o2.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.o3.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aY(new A.nZ(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gE().gad()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aY(new A.o_(r,o),p.b)}}},
$S:3}
A.nZ.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:3}
A.o_.prototype={
$0(){this.a.r.a+=this.b},
$S:3}
A.nV.prototype={
$0(){var s=this
return s.a.h0(B.a.q(s.b,s.c,s.d))},
$S:0}
A.nW.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gH().gad(),l=n.gE().gad()
n=this.b.a
s=q.i8(B.a.q(n,0,m))
r=q.i8(B.a.q(n,m,l))
m+=s*3
n=(p.a+=B.a.aU(" ",m))+B.a.aU("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.nX.prototype={
$0(){return this.a.re(this.b,this.c.a.gH().gad())},
$S:0}
A.nY.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aU("\u2500",3)
else r.le(s.c,Math.max(s.d.a.gE().gad()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.o4.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.uM(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:3}
A.b_.prototype={
l(a){var s=this.a
s="primary "+(""+s.gH().ga5()+":"+s.gH().gad()+"-"+s.gE().ga5()+":"+s.gE().gad())
return s.charCodeAt(0)==0?s:s}}
A.tv.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.v1(o.gaT(),o.gar(),o.gH().gad())!=null)){s=A.k5(o.gH().gae(),0,0,o.gU())
r=o.gE().gae()
q=o.gU()
p=A.Eu(o.gar(),10)
o=A.q7(s,A.k5(r,A.y3(o.gar()),p,q),o.gar(),o.gar())}return A.Co(A.Cq(A.Cp(o)))},
$S:99}
A.c1.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.c.K(this.d,", ")+")"}}
A.bW.prototype={
j4(a){var s=this.a
if(!J.x(s,a.gU()))throw A.b(A.P('Source URLs "'+A.p(s)+'" and "'+A.p(a.gU())+"\" don't match.",null))
return Math.abs(this.b-a.gae())},
T(a,b){var s=this.a
if(!J.x(s,b.gU()))throw A.b(A.P('Source URLs "'+A.p(s)+'" and "'+A.p(b.gU())+"\" don't match.",null))
return this.b-b.gae()},
X(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.gU())&&this.b===b.gae()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.ij(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.p(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iah:1,
gU(){return this.a},
gae(){return this.b},
ga5(){return this.c},
gad(){return this.d}}
A.k6.prototype={
j4(a){if(!J.x(this.a.a,a.gU()))throw A.b(A.P('Source URLs "'+A.p(this.gU())+'" and "'+A.p(a.gU())+"\" don't match.",null))
return Math.abs(this.b-a.gae())},
T(a,b){if(!J.x(this.a.a,b.gU()))throw A.b(A.P('Source URLs "'+A.p(this.gU())+'" and "'+A.p(b.gU())+"\" don't match.",null))
return this.b-b.gae()},
X(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.gU())&&this.b===b.gae()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.ij(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.p(p==null?"unknown source":p)+":"+(q.e0(r)+1)+":"+(q.hX(r)+1))+">"},
$iah:1,
$ibW:1}
A.k8.prototype={
ne(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.gU(),q.gU()))throw A.b(A.P('Source URLs "'+A.p(q.gU())+'" and  "'+A.p(r.gU())+"\" don't match.",null))
else if(r.gae()<q.gae())throw A.b(A.P("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.j4(r))throw A.b(A.P('Text "'+s+'" must be '+q.j4(r)+" characters long.",null))}},
gH(){return this.a},
gE(){return this.b},
gar(){return this.c}}
A.k9.prototype={
gjl(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gH().ga5()+1)+", column "+(p.gH().gad()+1)
if(p.gU()!=null){s=p.gU()
r=$.vn()
s.toString
s=o+(" of "+r.lR(s))
o=s}o+=": "+this.a
q=p.ud(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iG:1}
A.eB.prototype={
gae(){var s=this.b
s=A.vx(s.a,s.b)
return s.b},
$ibc:1,
gf5(){return this.c}}
A.eC.prototype={
gU(){return this.gH().gU()},
gk(a){return this.gE().gae()-this.gH().gae()},
T(a,b){var s=this.gH().T(0,b.gH())
return s===0?this.gE().T(0,b.gE()):s},
ud(a){var s=this
if(!t.ol.b(s)&&s.gk(s)===0)return""
return A.AU(s,a).uc()},
X(a,b){if(b==null)return!1
return b instanceof A.eC&&this.gH().X(0,b.gH())&&this.gE().X(0,b.gE())},
gJ(a){return A.er(this.gH(),this.gE(),B.o,B.o)},
l(a){var s=this
return"<"+A.ij(s).l(0)+": from "+s.gH().l(0)+" to "+s.gE().l(0)+' "'+s.gar()+'">'},
$iah:1}
A.cv.prototype={
gaT(){return this.d}}
A.hk.prototype={
ag(){return"SqliteUpdateKind."+this.b}}
A.bX.prototype={
gJ(a){return A.er(this.a,this.b,this.c,B.o)},
X(a,b){if(b==null)return!1
return b instanceof A.bX&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.cU.prototype={
l(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.p(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.av(p,new A.qb(),t.N).K(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iG:1}
A.qb.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.an(a)},
$S:100}
A.mZ.prototype={
r8(){var s=this,r=s.d
return r==null?s.d=new A.d9(s,A.m([],t.fU),new A.n7(s),new A.n8(s),t.jy):r},
qO(){var s=this,r=s.e
return r==null?s.e=new A.d9(s,A.m([],t.lw),new A.n4(s),new A.n5(s),t.lU):r},
nI(){var s=this,r=s.f
return r==null?s.f=new A.d9(s,A.m([],t.lw),new A.n0(s),new A.n1(s),t.af):r},
p(){var s,r,q,p=this
if(p.r)return
p.r=!0
s=p.d
if(s!=null)s.p()
s=p.f
if(s!=null)s.p()
s=p.e
if(s!=null)s.p()
s=p.b
r=s.jQ()
q=r!==0?A.wo(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aw(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.w(A.u("This database has already been closed"))
r=p.b
q=r.a
s=q.ep(B.f.u(a),1)
q=q.d
r=A.z3(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.ww(p,r,"executing",a,b)}else{s=p.hD(a,!0)
try{s.j9(new A.dx(b))}finally{s.p()}}},
N(a){return this.aw(a,B.v)},
qp(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.w(A.u("This database has already been closed"))
s=B.f.u(a)
r=e.b
q=r.a
p=q.eo(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.qZ(r,p,n,o)
l=A.m([],t.lE)
k=new A.n2(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.jR(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.ww(e,n,"preparing statement",a,null)}n=q.buffer
h=B.b.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.b.a4(o,2)]-p
f=i.a
if(f!=null)l.push(new A.eD(f,e,new A.cd(!1).c7(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.jR(j,r-j,0)
n=q.buffer
h=B.b.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.b.a4(o,2)]-p
f=i.a
if(f!=null){l.push(new A.eD(f,e,""))
k.$0()
throw A.b(A.aU(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aU(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
hD(a,b){var s=this.qp(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aU(a,"sql","Must contain an SQL statement."))
return B.c.gC(s)},
uO(a){return this.hD(a,!1)},
jL(a,b){var s,r=this.hD(a,!0)
try{s=r.jM(new A.dx(b))
return s}finally{r.p()}},
hZ(a){return this.jL(a,B.v)}}
A.n7.prototype={
$0(){var s=this.a,r=s.b
r.a.lx(r.b,new A.n6(s))},
$S:0}
A.n6.prototype={
$3(a,b,c){var s=A.BM(a)
if(s==null)return
this.a.d.j3(new A.bX(s,b,c))},
$S:101}
A.n8.prototype={
$0(){var s=this.a.b
s.a.lx(s.b,null)
return null},
$S:0}
A.n4.prototype={
$0(){var s=this.a,r=s.b
r.a.lw(r.b,new A.n3(s))
return null},
$S:0}
A.n3.prototype={
$0(){this.a.e.j3(null)},
$S:0}
A.n5.prototype={
$0(){var s=this.a.b
s.a.lw(s.b,null)
return null},
$S:0}
A.n0.prototype={
$0(){var s=this.a,r=s.b
r.a.lv(r.b,new A.n_(s))
return null},
$S:0}
A.n_.prototype={
$0(){var s=this.a.f
s.j3(null)
return 0},
$S:10}
A.n1.prototype={
$0(){var s=this.a.b
s.a.lv(s.b,null)
return null},
$S:0}
A.n2.prototype={
$0(){var s,r,q,p,o,n
this.a.p()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q){p=s[q]
if(!p.r){p.r=!0
if(!p.f){o=p.a
o.c.d.sqlite3_reset(o.b)
p.f=!0}o=p.a
n=o.c
n.d.sqlite3_finalize(o.b)
n=n.w
if(n!=null){n=n.a
if(n!=null)n.unregister(o.d)}}}},
$S:0}
A.d9.prototype={
gcG(){var s=this.r
return s==null?this.r=this.o8(!1):s},
o8(a){return new A.cE(new A.u7(this,!1),this.$ti.i("cE<1>"))},
j3(a){var s,r,q,p,o,n,m,l
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.w(o.bl())
if((n&1)!==0){m=o.a;((n&8)!==0?m.c:m).ba(a)}}else{n=o.b
if(n>=4)A.w(o.bl())
if((n&1)!==0)o.cf(a)
else if((n&3)===0){o=o.fe()
n=new A.d3(a)
l=o.c
if(l==null)o.b=o.c=n
else{l.sdS(n)
o.c=n}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.u7.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.u8(q,a,s)
a.r=a.e=new A.u9(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(cR<1>)")}}
A.u8.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.hT(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.u9.prototype={
$0(){var s=this.a,r=s.c
B.c.P(r,new A.hT(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.q8.prototype={
lH(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.BL(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
uF(a,b){var s,r,q,p,o,n,m,l,k,j
this.lH()
switch(2){case 2:break}s=this.a
r=s.a
q=r.ep(B.f.u(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.ep(B.f.u(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.cp(r.b.buffer,0,null)[B.b.a4(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.qS(r,l,o)
r=r.r
if(r!=null)r.ln(k,l,o)
if(m!==0){j=A.wo(s,k,m,"opening the database",null,null)
k.jQ()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.mZ(s,k,!1)}}
A.eD.prototype={
gnH(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.m([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.ky(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.cd(!1).c7(o,0,null,!0))}return q},
gr3(){return null},
bj(a,b){A.ww(this.b,a,b,this.d,this.e)},
kp(){if(this.r||this.b.r)throw A.b(A.u("Tried to operate on a released prepared statement"))},
o3(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.d5()
if(s!==0?s!==101:q)r.bj(s,"executing statement")},
qS(){var s,r,q,p,o,n,m=this,l=A.m([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.qE(o))
l.push(p)}m.d5()
if(p!==0?p!==101:k)m.bj(p,"selecting from statement")
n=m.gnH()
m.gr3()
k=new A.jY(l,n,B.U)
k.nC()
return k},
qE(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.X(r.Number(s)):A.w5(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.mV(a)
case 4:return s.mU(a)
case 5:default:return null}},
nv(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.w(A.aU(a,"parameters","Expected "+A.p(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.nw(a[s-1],s)
this.e=a},
nw(a,b){var s,r,q=this
$label0$0:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break $label0$0}if(A.aA(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break $label0$0}if(a instanceof A.az){s=q.a
if(a.T(0,$.zy())<0||a.T(0,$.zx())>0)A.w(A.x2("BigInt value exceeds the range of 64 bits"))
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a.l(0)))
break $label0$0}if(A.bO(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break $label0$0}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break $label0$0}if(typeof a=="string"){s=q.a.mT(b,a)
break $label0$0}if(t.L.b(a)){s=q.a.mS(b,a)
break $label0$0}s=q.nu(a,b)
break $label0$0}if(s!==0)q.bj(s,"binding parameter")},
nu(a,b){throw A.b(A.aU(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
k5(a){$label0$0:{if(a instanceof A.dx){this.nv(a.a)
break $label0$0}if(a instanceof A.iM)a.a.$1(this)}},
d5(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.d5()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.lz(s.d)}},
jM(a){var s=this
s.kp()
s.d5()
s.k5(a)
return s.qS()},
j9(a){var s=this
s.kp()
s.d5()
s.k5(a)
s.o3()}}
A.j7.prototype={
hS(a,b){return this.d.I(a)?1:0},
jD(a,b){this.d.P(0,a)},
jE(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r=a.a
if(r==null)r=A.xc(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.c_(new Uint8Array(0),0))
else throw A.b(A.eM(14))
return new A.f5(new A.kW(this,r,(b&8)!==0),0)},
jG(a){}}
A.kW.prototype={
lV(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.d.a6(a,0,s,J.dk(B.d.gaA(r.a),0,r.b),b)
return s},
jC(){return this.d>=2?1:0},
hT(){if(this.c)this.a.d.P(0,this.b)},
eZ(){return this.a.d.h(0,this.b).b},
jF(a){this.d=a},
jH(a){},
f_(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.c_(new Uint8Array(0),0))
s.h(0,r).sk(0,a)}else q.sk(0,a)},
jI(a){this.d=a},
e_(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.c_(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sk(0,s)
p.aa(0,b,s,a)}}
A.vd.prototype={
$1(a){return a.length!==0},
$S:21}
A.mH.prototype={
nC(){var s,r,q,p,o=A.I(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q){p=s[q]
o.j(0,p,B.c.dP(s,p))}this.c=o}}
A.jY.prototype={
gv(a){return new A.tT(this)},
h(a,b){return new A.bI(this,A.cP(this.d[b],t.X))},
j(a,b,c){throw A.b(A.a0("Can't change rows from a result set"))},
gk(a){return this.d.length},
$iC:1,
$in:1,
$iq:1}
A.bI.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.aA(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gS(){return this.a.a},
gb7(){return this.b},
$iN:1}
A.tT.prototype={
gn(){var s=this.a
return new A.bI(s,A.cP(s.d[this.b],t.X))},
m(){return++this.b<this.a.d.length}}
A.l8.prototype={}
A.l9.prototype={}
A.lb.prototype={}
A.lc.prototype={}
A.ph.prototype={
ag(){return"OpenMode."+this.b}}
A.dq.prototype={}
A.dx.prototype={}
A.iM.prototype={}
A.cB.prototype={
l(a){return"VfsException("+this.a+")"},
$iG:1}
A.hj.prototype={}
A.aH.prototype={}
A.iB.prototype={}
A.iA.prototype={
ghU(){return 0},
m9(a,b){return 12},
ghW(){return 4096},
hV(a,b){var s=this.lV(a,b),r=a.length
if(s<r){B.d.he(a,s,r,0)
throw A.b(B.ck)}},
$iaX:1,
$ihs:1}
A.dR.prototype={}
A.vi.prototype={
$0(){var s,r,q
for(s=this.a;!s.gB(0);){if(s.b===0)A.w(A.u("No such element"))
r=s.c
q=r.a
q.toString
q.iQ(A.o(r).i("aP.E").a(r))
r.d.$0()}},
$S:0}
A.vg.prototype={
$1(a){var s=this.a,r=s.b
s.fQ(s.c,new A.dR(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:14}
A.vh.prototype={
$4(a,b,c,d){this.a.$1(c.eq(d))},
$S:103}
A.qX.prototype={}
A.qS.prototype={
jQ(){var s=this.a,r=s.r
if(r!=null)r.lz(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.qZ.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
jR(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.z3(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.cp(o.b.buffer,0,null)[B.b.a4(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.qY(s,o,n)
o=o.w
if(o!=null)o.ln(r,s,n)}return new A.l6(r,p)}}
A.qY.prototype={
mS(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.eo(b),J.ar(b))},
mT(a,b){var s=B.f.u(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.eo(s),s.length)},
mU(a){var s,r=this.c,q=this.b,p=r.d,o=p.sqlite3_column_bytes(q,a)
q=p.sqlite3_column_blob(q,a)
s=new Uint8Array(o)
B.d.cE(s,0,A.bt(r.b.buffer,q,o))
return s},
mV(a){var s=this.c
return A.dP(s.b,s.d.sqlite3_column_text(this.b,a))}}
A.dN.prototype={}
A.d0.prototype={}
A.eO.prototype={
sk(a,b){throw A.b(A.a0("Setting length in WasmValueList"))},
h(a,b){A.cp(this.a.b.buffer,0,null)
B.b.a4(this.c+b*4,2)
return new A.d0()},
j(a,b,c){throw A.b(A.a0("Setting element in WasmValueList"))},
gk(a){return this.b}}
A.iN.prototype={
ux(a){var s,r,q=this.b
q===$&&A.y()
s="[sqlite3] "+A.dP(q,a)
r=$.zl
if(r==null)A.wv(s)
else r.$1(s)},
uv(a,b){var s,r=new A.b2(A.vv(A.X(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.y()
s=A.Bo(q.buffer,b,8)
s.$flags&2&&A.D(s)
s[0]=A.vP(r)
s[1]=A.vN(r)
s[2]=A.vM(r)
s[3]=A.pH(r)
s[4]=A.vO(r)-1
s[5]=A.vQ(r)-1900
s[6]=B.b.au(A.Bv(r),7)},
vX(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.y()
s=new A.hj(A.vZ(j,b,k))
try{r=a.dc(s,d)
if(e!==0){p=r.b
o=A.cp(j.buffer,0,k)
n=B.b.a4(e,2)
o.$flags&2&&A.D(o)
o[n]=p}p=A.cp(j.buffer,0,k)
o=B.b.a4(c,2)
p.$flags&2&&A.D(p)
p[o]=0
m=r.a
return m}catch(l){p=A.E(l)
if(p instanceof A.cB){q=p
p=q.a
j=A.cp(j.buffer,0,k)
o=B.b.a4(c,2)
j.$flags&2&&A.D(j)
j[o]=p}else{j=j.buffer
j=A.cp(j,0,k)
p=B.b.a4(c,2)
j.$flags&2&&A.D(j)
j[p]=1}}return k},
vM(a,b,c){var s=this.b
s===$&&A.y()
return A.bz(new A.mM(a,A.dP(s,b),c))},
vE(a,b,c,d){var s=this.b
s===$&&A.y()
return A.bz(new A.mJ(this,a,A.dP(s,b),c,d))},
vT(a,b,c,d){var s=this.b
s===$&&A.y()
return A.bz(new A.mO(this,a,A.dP(s,b),c,d))},
vZ(a,b,c){return A.bz(new A.mQ(this,c,b,a))},
w3(a,b){return A.bz(new A.mS(a,b))},
vK(a,b){var s,r=Date.now(),q=this.b
q===$&&A.y()
s=v.G.BigInt(r)
A.vD(A.xm(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
vI(a){return A.bz(new A.mL(a))},
w0(a,b,c,d){return A.bz(new A.mR(this,a,b,c,d))},
wb(a,b,c,d){return A.bz(new A.mW(this,a,b,c,d))},
w7(a,b){return A.bz(new A.mU(a,b))},
w5(a,b){return A.bz(new A.mT(a,b))},
vR(a,b){return A.bz(new A.mN(this,a,b))},
vV(a,b){return A.bz(new A.mP(a,b))},
w9(a,b){return A.bz(new A.mV(a,b))},
vG(a,b){return A.bz(new A.mK(this,a,b))},
vN(a){return a.ghU()},
vP(a,b,c){if(t.j2.b(a))return a.m9(b,c)
return 12},
w1(a){if(t.j2.b(a))return a.ghW()
return 4096},
ta(a){a.$0()},
t5(a){return a.$0()},
t8(a,b,c,d,e){var s=this.b
s===$&&A.y()
a.$3(b,A.dP(s,d),A.X(v.G.Number(e)))},
tg(a,b,c,d){var s=a.gwi(),r=this.a
r===$&&A.y()
s.$2(new A.dN(),new A.eO(r,c,d))},
tk(a,b,c,d){var s=a.gwk(),r=this.a
r===$&&A.y()
s.$2(new A.dN(),new A.eO(r,c,d))},
ti(a,b,c,d){var s=a.gwj(),r=this.a
r===$&&A.y()
s.$2(new A.dN(),new A.eO(r,c,d))},
tm(a,b){var s=a.gwl()
this.a===$&&A.y()
s.$1(new A.dN())},
te(a,b){var s=a.gwh()
this.a===$&&A.y()
s.$1(new A.dN())},
tc(a,b,c,d,e){var s,r,q=this.b
q===$&&A.y()
s=A.vZ(q,c,b)
r=A.vZ(q,e,d)
return a.gwe().$2(s,r)},
t3(a,b){return a.$1(b)},
t1(a,b){return a.gwg().$1(b)},
t_(a,b,c){return a.gwf().$2(b,c)}}
A.mM.prototype={
$0(){return this.a.jD(this.b,this.c)},
$S:0}
A.mJ.prototype={
$0(){var s,r=this,q=r.b.hS(r.c,r.d),p=r.a.b
p===$&&A.y()
p=A.cp(p.buffer,0,null)
s=B.b.a4(r.e,2)
p.$flags&2&&A.D(p)
p[s]=q},
$S:0}
A.mO.prototype={
$0(){var s,r,q=this,p=B.f.u(q.b.jE(q.c)),o=p.length
if(o>q.d)throw A.b(A.eM(14))
s=q.a.b
s===$&&A.y()
s=A.bt(s.buffer,0,null)
r=q.e
B.d.cE(s,r,p)
s.$flags&2&&A.D(s)
s[r+o]=0},
$S:0}
A.mQ.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.y()
s=A.bt(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.wP(s,q.b)
else return A.wP(s,null)},
$S:0}
A.mS.prototype={
$0(){this.a.jG(A.dt(this.b,0,0))},
$S:0}
A.mL.prototype={
$0(){return this.a.hT()},
$S:0}
A.mR.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.y()
s.b.hV(A.bt(r.buffer,s.c,s.d),A.X(v.G.Number(s.e)))},
$S:0}
A.mW.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.y()
s.b.e_(A.bt(r.buffer,s.c,s.d),A.X(v.G.Number(s.e)))},
$S:0}
A.mU.prototype={
$0(){return this.a.f_(A.X(v.G.Number(this.b)))},
$S:0}
A.mT.prototype={
$0(){return this.a.jH(this.b)},
$S:0}
A.mN.prototype={
$0(){var s,r=this.b.eZ(),q=this.a.b
q===$&&A.y()
q=A.cp(q.buffer,0,null)
s=B.b.a4(this.c,2)
q.$flags&2&&A.D(q)
q[s]=r},
$S:0}
A.mP.prototype={
$0(){return this.a.jF(this.b)},
$S:0}
A.mV.prototype={
$0(){return this.a.jI(this.b)},
$S:0}
A.mK.prototype={
$0(){var s,r=this.b.jC(),q=this.a.b
q===$&&A.y()
q=A.cp(q.buffer,0,null)
s=B.b.a4(this.c,2)
q.$flags&2&&A.D(q)
q[s]=r},
$S:0}
A.fs.prototype={
a1(a,b,c,d){var s,r=null,q={},p=A.aT(A.vD(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.vT(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.lO(q,this,p,o)
o.d=s
o.f=new A.lP(q,o,s)
return new A.aY(o,A.o(o).i("aY<1>")).a1(a,b,c,d)},
bt(a,b,c){return this.a1(a,null,b,c)}}
A.lO.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a2(q,t.m).bY(new A.lQ(p,r.b,s,r),s.gro(),t.P)},
$S:0}
A.lQ.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gb2().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:16}
A.lP.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gb2().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.dV.prototype={
A(){var s=0,r=A.h(t.H),q=this,p
var $async$A=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.A()
p=q.c
if(p!=null)p.A()
q.c=q.b=null
return A.e(null,r)}})
return A.f($async$A,r)},
gn(){var s=this.a
return s==null?A.w(A.u("Await moveNext() first")):s},
m(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.r($.v,t.k)
s=new A.a8(o,t.ex)
r=p.d
q=t.m
p.b=A.aZ(r,"success",new A.rZ(p,s),!1,q)
p.c=A.aZ(r,"error",new A.t_(p,s),!1,q)
return o}}
A.rZ.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.ak(s!=null)},
$S:2}
A.t_.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.ap(s)},
$S:2}
A.ml.prototype={
$1(a){this.a.ak(this.c.a(this.b.result))},
$S:2}
A.mm.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ap(s)},
$S:2}
A.mq.prototype={
$1(a){this.a.ak(this.c.a(this.b.result))},
$S:2}
A.mr.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ap(s)},
$S:2}
A.ms.prototype={
$1(a){this.a.ap(new A.be("IndexedDB open blocked"))},
$S:2}
A.nw.prototype={
$1(a){return A.aT(a[1])},
$S:125}
A.qT.prototype={
rN(){var s={}
s.dart=new A.qU(this).$0()
return s},
hu(a){return this.ur(a)},
ur(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hu=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a2(v.G.WebAssembly.instantiateStreaming(a,p.rN()),t.m),$async$hu)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)}}
A.qU.prototype={
$0(){var s=this.a.a,r=A.aT(v.G.Object),q=A.aT(r.create.apply(r,[null]))
q.error_log=A.cf(s.guw())
q.localtime=A.by(s.guu())
q.xOpen=A.wg(s.gvW())
q.xDelete=A.lw(s.gvL())
q.xAccess=A.fg(s.gvD())
q.xFullPathname=A.fg(s.gvS())
q.xRandomness=A.lw(s.gvY())
q.xSleep=A.by(s.gw2())
q.xCurrentTimeInt64=A.by(s.gvJ())
q.xClose=A.cf(s.gvH())
q.xRead=A.fg(s.gw_())
q.xWrite=A.fg(s.gwa())
q.xTruncate=A.by(s.gw6())
q.xSync=A.by(s.gw4())
q.xFileSize=A.by(s.gvQ())
q.xLock=A.by(s.gvU())
q.xUnlock=A.by(s.gw8())
q.xCheckReservedLock=A.by(s.gvF())
q.xDeviceCharacteristics=A.cf(s.ghU())
q.xFileControl=A.lw(s.gvO())
q.xSectorSize=A.cf(s.ghW())
q["dispatch_()v"]=A.cf(s.gt9())
q["dispatch_()i"]=A.cf(s.gt4())
q.dispatch_update=A.wg(s.gt7())
q.dispatch_xFunc=A.fg(s.gtf())
q.dispatch_xStep=A.fg(s.gtj())
q.dispatch_xInverse=A.fg(s.gth())
q.dispatch_xValue=A.by(s.gtl())
q.dispatch_xFinal=A.by(s.gtd())
q.dispatch_compare=A.wg(s.gtb())
q.dispatch_busy=A.by(s.gt2())
q.changeset_apply_filter=A.by(s.gt0())
q.changeset_apply_conflict=A.lw(s.grZ())
return q},
$S:36}
A.eN.prototype={}
A.lR.prototype={
hz(){var s=0,r=A.h(t.H),q=this,p,o
var $async$hz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.r($.v,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cf(new A.lU(o))
new A.a8(p,t.h1).ak(A.AD(o,t.m))
s=2
return A.a(p,$async$hz)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$hz,r)},
dB(a,b){return this.qP(a,b)},
qP(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.A7(),b)
o=A.Cr(p)
s=2
return A.a(A.F2(new A.lT(a,o,p),t.mj),$async$dB)
case 2:s=3
return A.a(o.b.a,$async$dB)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dB,r)},
qo(a){return this.dB(new A.lS(a),"readwrite")}}
A.lU.prototype={
$1(a){var s=A.aT(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:16}
A.lT.prototype={
$0(){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(o.a.$1(o.b),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
m=p.pop()
o.c.abort()
throw m
s=5
break
case 2:s=1
break
case 5:o.c.commit()
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:127}
A.lS.prototype={
$1(a){return this.ma(a)},
ma(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aC(a),$async$$1)
case 5:case 3:p.length===o||(0,A.H)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:17}
A.hJ.prototype={
nj(a){var s=A.uD(new A.ty(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.uD(new A.tz(this))},
iH(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.m([a,c],s),A.m([a,b],s))},
qB(a){return this.iH(a,9007199254740992,0)},
qC(a,b){return this.iH(a,9007199254740992,b)},
ht(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$ht=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.I(t.N,t.S)
k=new A.dV(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.m(),$async$ht)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.w(A.u("Await moveNext() first"))
n=o.key
n.toString
A.t(n)
m=o.primaryKey
m.toString
l.j(0,n,A.X(A.e1(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
hd(a){return this.tI(a)},
tI(a){var s=0,r=A.h(t.I),q,p=this,o
var $async$hd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.c4(p.d.index("fileName").getKey(a),t.i),$async$hd)
case 3:q=o.X(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
iI(a){return A.c4(this.d.get(a),t.B).bi(new A.tx(a),t.m)},
e2(a,b){return this.mW(a,b)},
mW(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$e2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.iI(a),$async$e2)
case 3:h=d
g=h.length
f=new A.c_(new Uint8Array(g),g)
e=new A.dV(p.e.openCursor(p.qB(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.m(),$async$e2)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.w(A.u("Await moveNext() first"))
k=n.a(l.key)
j=A.X(A.e1(k[1]))
if(j>=h.length){s=5
break}i=new A.tA(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.q_(A.aT(l.value)).bi(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e2,r)},
h8(a){return this.rM(a)},
rM(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$h8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.w(A.u("IDB transaction already completed"))
o=A
s=3
return A.a(A.c4(p.d.put({name:a,length:0}),t.i),$async$h8)
case 3:q=o.X(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
da(a,b){return this.vx(a,b)},
vx(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$da=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.u("IDB transaction already completed"))
s=2
return A.a(q.iI(a),$async$da)
case 2:p=d
o=b.b
n=A.o(o).i("ai<1>")
m=A.Q(new A.ai(o,n),n.i("n.E"))
B.c.b8(m)
s=3
return A.a(A.xb(new A.ac(m,new A.tB(new A.tC(q,a),b),A.al(m).i("ac<1,K<~>>")),t.H),$async$da)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.dV(q.d.openCursor(a),t.R)
s=6
return A.a(l.m(),$async$da)
case 6:s=7
return A.a(A.c4(l.gn().update({name:p.name,length:b.c}),t.X),$async$da)
case 7:case 5:return A.e(null,r)}})
return A.f($async$da,r)},
d9(a,b,c){return this.vl(0,b,c)},
vl(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d9=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.u("IDB transaction already completed"))
s=2
return A.a(q.iI(b),$async$d9)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.c4(q.e.delete(q.qC(b,B.b.M(c,4096)*4096)),t.X),$async$d9)
case 5:case 4:o=new A.dV(q.d.openCursor(b),t.R)
s=6
return A.a(o.m(),$async$d9)
case 6:s=7
return A.a(A.c4(o.gn().update({name:p.name,length:c}),t.X),$async$d9)
case 7:return A.e(null,r)}})
return A.f($async$d9,r)},
hb(a){return this.rX(a)},
rX(a){var s=0,r=A.h(t.H),q=this,p
var $async$hb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.u("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.xb(A.m([A.c4(q.e.delete(q.iH(a,9007199254740992,0)),p),A.c4(q.d.delete(a),p)],t.iw),t.H),$async$hb)
case 2:return A.e(null,r)}})
return A.f($async$hb,r)}}
A.ty.prototype={
$0(){this.a.b.am()},
$S:3}
A.tz.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.ap(r)},
$S:3}
A.tx.prototype={
$1(a){if(a==null)throw A.b(A.aU(this.a,"fileId","File not found in database"))
else return a},
$S:129}
A.tA.prototype={
$1(a){var s=this.a
s.cE(s,this.b,J.dk(a,0,this.c))},
$S:130}
A.tC.prototype={
mC(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.c4(p.openCursor(v.G.IDBKeyRange.only(A.m([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.d.gaA(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.c4(p.put(l,A.m([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.c4(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.mC(a,b)},
$S:131}
A.tB.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:132}
A.ta.prototype={
r7(a,b,c){B.d.cE(this.b.lT(a,new A.tb(this,a)),b,c)},
rr(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.b.M(q,4096)
o=B.b.au(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.r7(p*4096,o,J.dk(B.d.gaA(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.tb.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.d.cE(s,0,J.dk(B.d.gaA(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:133}
A.l3.prototype={}
A.cL.prototype={
ei(a){var s=this
if(s.e||s.d.a==null)A.w(A.eM(10))
if(a.jg(s.x)){s.ci(!0)
return a.d.a}else return A.cj(null,t.H)},
ci(a){return this.r2(a)},
r2(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$ci=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gB(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.Q(o,o.$ti.i("n.E"))
o.aK(0)
s=5
return A.a(p.d.qo(n).aD(new A.o8(p,n,a)),$async$ci)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$ci,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.ei(new A.hH(new A.o9(),new A.a8(new A.r($.v,t.D),t.F)))
p.e=!0
p.ci(!1)
q=o
s=1
break}else{n=p.x
if(!n.gB(0)){q=n.gW(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
dn(a,b){return this.o6(a,b)},
o6(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
s=n.I(b)?3:5
break
case 3:n=n.h(0,b)
n.toString
q=n
s=1
break
s=4
break
case 5:s=6
return A.a(a.hd(b),$async$dn)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dn,r)},
ec(){var s=0,r=A.h(t.H),q=this,p
var $async$ec=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.m([],t.iw)
s=2
return A.a(q.d.dB(new A.o7(q,p),"readonly"),$async$ec)
case 2:s=3
return A.a(A.AQ(p,t.H),$async$ec)
case 3:return A.e(null,r)}})
return A.f($async$ec,r)},
tM(){return this.ci(!1)},
hS(a,b){return this.w.d.I(a)?1:0},
jD(a,b){var s=this
s.w.d.P(0,a)
if(!s.y.P(0,a))s.ei(new A.hB(s,a,new A.a8(new A.r($.v,t.D),t.F)))},
jE(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.xc(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.dc(new A.hj(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.ei(new A.eV(p,o,new A.a8(new A.r($.v,t.D),t.F)))
return new A.f5(new A.kX(p,q.a,o),0)},
jG(a){}}
A.o8.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.w(A.u("Future already completed"))
p.c4(null)}o.ci(this.c)},
$S:3}
A.o9.prototype={
$1(a){return this.mf(a)},
mf(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:17}
A.o7.prototype={
$1(a){return this.me(a)},
me(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ht(),$async$$1)
case 2:m=c
l=q.a
l.z.G(0,m)
p=m.gbP(),p=p.gv(p),o=q.b,l=l.w.d
case 3:if(!p.m()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.e2(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:17}
A.kX.prototype={
hV(a,b){this.b.hV(a,b)},
ghU(){return 0},
ghW(){return 4096},
jC(){return this.b.d>=2?1:0},
hT(){},
eZ(){return this.b.eZ()},
jF(a){this.b.d=a
return null},
jH(a){},
m9(a,b){return 12},
f_(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.w(A.eM(10))
s.b.f_(a)
if(!r.y.D(0,s.c))r.ei(new A.hH(new A.tw(s,a),new A.a8(new A.r($.v,t.D),t.F)))},
jI(a){this.b.d=a
return null},
e_(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.w(A.eM(10))
s=m.c
if(l.y.D(0,s)){m.b.e_(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.c_(new Uint8Array(0),0)
q=J.dk(B.d.gaA(r.a),0,r.b)
m.b.e_(a,b)
p=new Uint8Array(a.length)
B.d.cE(p,0,a)
o=A.m([],t.p8)
n=$.v
o.push(new A.l3(b,p))
l.ei(new A.fd(l,s,q,o,new A.a8(new A.r(n,t.D),t.F)))},
$iaX:1,
$ihs:1}
A.tw.prototype={
$1(a){return this.mB(a)},
mB(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dn(a,o.c),$async$$1)
case 3:q=n.d9(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:17}
A.aJ.prototype={
jg(a){a.fQ(a.c,this,!1)
return!0}}
A.hH.prototype={
aC(a){return this.w.$1(a)}}
A.hB.prototype={
jg(a){var s,r,q,p
if(!a.gB(0)){s=a.gW(0)
for(r=this.x;s!=null;)if(s instanceof A.hB)if(s.x===r)return!1
else s=s.geH()
else if(s instanceof A.fd){q=s.geH()
if(s.x===r){p=s.a
p.toString
p.iQ(A.o(s).i("aP.E").a(s))}s=q}else if(s instanceof A.eV){if(s.x===r){r=s.a
r.toString
r.iQ(A.o(s).i("aP.E").a(s))
return!1}s=s.geH()}else break}a.fQ(a.c,this,!1)
return!0},
aC(a){return this.vd(a)},
vd(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dn(a,o),$async$aC)
case 2:n=c
p.z.P(0,o)
s=3
return A.a(a.hb(n),$async$aC)
case 3:return A.e(null,r)}})
return A.f($async$aC,r)}}
A.eV.prototype={
aC(a){return this.vc(a)},
vc(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.h8(p),$async$aC)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aC,r)}}
A.fd.prototype={
jg(a){var s,r=a.b===0?null:a.gW(0)
for(s=this.x;r!=null;)if(r instanceof A.fd)if(r.x===s){B.c.G(r.z,this.z)
return!1}else r=r.geH()
else if(r instanceof A.eV){if(r.x===s)break
r=r.geH()}else break
a.fQ(a.c,this,!1)
return!0},
aC(a){return this.ve(a)},
ve(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.ta(m,A.I(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.H)(m),++o){n=m[o]
l.rr(n.a,n.b)}k=a
s=3
return A.a(q.w.dn(a,q.x),$async$aC)
case 3:s=2
return A.a(k.da(c,l),$async$aC)
case 2:return A.e(null,r)}})
return A.f($async$aC,r)}}
A.eg.prototype={
ag(){return"FileType."+this.b}}
A.eA.prototype={
br(){var s=this.d
if(s!=null)return s
throw A.b(A.u("VFS closed"))},
hS(a,b){var s=$.vk().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.br().co(s)?1:0},
jD(a,b){var s=$.vk().h(0,a)
if(s==null){this.e.d.P(0,a)
return null}else this.br().eD(s,!1)},
jE(a){return new v.G.URL(a,"file:///").pathname},
dc(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dc(a,b)
s=$.vk().h(0,p)
if(s==null)return q.e.dc(a,b)
r=q.br()
if(!r.co(s))if((b&4)!==0){r.cX(s).truncate(0)
r.eD(s,!0)}else throw A.b(B.cj)
return new A.f5(new A.lh(q,s,(b&8)!==0),0)},
jG(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cu(a,b){return this.uI(a,b)},
bv(a){return this.cu(a,!1)},
uI(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.q5(a,b)
s=2
return A.a(m.$1("meta"),$async$cu)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cu)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cu)
case 4:o=d
n=q.d=new A.tQ(new Uint8Array(2),l,p,o)
if(k){n.eD(B.at,p.getSize()>0)
n.eD(B.au,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cu,r)}}
A.q5.prototype={
mz(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a2(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a2(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.mz(a)},
$S:134}
A.lh.prototype={
lV(a,b){return A.x9(this.a.br().cX(this.b),a,{at:b})},
jC(){return this.d>=2?1:0},
hT(){var s=this.a,r=this.b
s.br().cX(r).flush()
if(this.c)s.br().eD(r,!1)},
eZ(){return this.a.br().cX(this.b).getSize()},
jF(a){this.d=a},
jH(a){this.a.br().cX(this.b).flush()},
f_(a){this.a.br().cX(this.b).truncate(a)},
jI(a){this.d=a},
e_(a,b){if(A.xa(this.a.br().cX(this.b),a,{at:b})<a.length)throw A.b(B.cl)}}
A.tQ.prototype={
co(a){var s=this.a
A.x9(this.b,s,{at:0})
return s[a.a]!==0},
eD(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.D(s)
s[a.a]=r
A.xa(this.b,s,{at:0})},
cX(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.qN.prototype={
ng(a,b){var s=this,r=s.c
r.a!==$&&A.zt()
r.a=s
r=t.S
A.tc(new A.qO(s),r)
A.tc(new A.qP(s),r)
s.r=A.tc(new A.qQ(s),r)
s.w=A.tc(new A.qR(s),r)},
ep(a,b){var s=J.J(a),r=this.d.dart_sqlite3_malloc(s.gk(a)+b),q=A.bt(this.b.buffer,0,null)
B.d.aa(q,r,r+s.gk(a),a)
B.d.he(q,r+s.gk(a),r+s.gk(a)+b,0)
return r},
eo(a){return this.ep(a,0)},
lx(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
lv(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
lw(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.qO.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.qP.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.qQ.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.qR.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.fx.prototype={}
A.pK.prototype={
nc(a){var s,r=this,q=r.a
q.start()
r.c=A.aZ(q,"message",new A.pO(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.im()
q.toString
A.ht(q,s,null,null,!1).bi(new A.pP(r),t.P)}},
ix(a){return this.oW(a)},
oW(a){var s=0,r=A.h(t.H),q=this
var $async$ix=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.Ey(a,new A.pL(q),q.gu2(),new A.pM(q),new A.pN(q))
return A.e(null,r)}})
return A.f($async$ix,r)},
f4(a,b,c){return this.mO(a,b,c,c)},
mO(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$f4=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.Au(null))
o=p.e++
n=new A.r($.v,t.a7)
p.f.j(0,o,new A.a8(n,t.h1))
a.i=o
p.a.postMessage(a,A.fl(a))
s=3
return A.a(n,$async$f4)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.BD(m))
case 1:return A.e(q,r)}})
return A.f($async$f4,r)},
q_(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.bT(s,s.r,s.e);r.m();)r.d.ap(new A.fv(a))
s.aK(0)
p.am()},
kD(){return this.q_(null)}}
A.pO.prototype={
$1(a){if(a.data=="_disconnect"){this.a.kD()
return}this.a.ix(A.aT(a.data))},
$S:2}
A.pP.prototype={
$1(a){this.a.kD()
a.a.am()},
$S:135}
A.pN.prototype={
$1(a){var s=this.a.f.P(0,a.i)
if(s!=null)s.ak(a)},
$S:16}
A.pM.prototype={
$1(a){return this.mt(a)},
mt(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.c(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:f=null
e=a1.i
d=n.a
c=d.r
b=v.G
a=new b.AbortController()
c.j(0,e,a)
m=a
q=3
j=d.t6(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bg(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.E(a0)
k=A.ae(a0)
if(!(l instanceof A.cG)){b.console.error("Error in worker: "+J.an(l))
b.console.error("Original trace: "+A.p(k))}b=l
if(b instanceof A.cU){h=A.AL(b)
g=0}else{g=b instanceof A.cG?1:null
h=null}f={e:J.an(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.P(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.fl(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:136}
A.pL.prototype={
$1(a){var s=this.a.r.P(0,a.i)
if(s!=null)s.abort()},
$S:16}
A.fv.prototype={
l(a){return"Channel to database worker is closed: "+A.p(this.a)},
$iG:1}
A.mX.prototype={
bU(a){return this.us(a)},
us(a){var s=0,r=A.h(t.n),q
var $async$bU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.qW(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)}}
A.iL.prototype={}
A.mI.prototype={}
A.dO.prototype={}
A.j1.prototype={
hx(){var s=0,r=A.h(t.H),q=this
var $async$hx=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.bv(q.b),$async$hx)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hx,r)},
js(){var s=0,r=A.h(t.H),q=this
var $async$js=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$js,r)}}
A.nI.prototype={
vg(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
o9(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.r2.prototype={
$1(a){var s=new A.r($.v,t.D),r=new A.ck(new A.a8(s,t.F))
this.a.a=r
this.b.ak(r)
return A.AR(s)},
$S:137}
A.r3.prototype={
$2(a,b){var s,r,q
A.aT(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bO(new A.cG("Operation was cancelled"),b)
else q.bO(a,b)}return null},
$S:138}
A.ck.prototype={}
A.iO.prototype={
grF(){if(this.c.a)return!1
return!this.d||this.f!=null},
dj(a){return this.nn(a)},
nn(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dj=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.im()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.ht(n,o.a,null,o.gp0(),!0),$async$dj)
case 6:m=c
s=7
return A.a(A.ht(n,o.b,a,null,!1),$async$dj)
case 7:l=c
j=o.e
j=j==null?null:j.hx()
s=8
return A.a(j instanceof A.r?j:A.bg(j,t.H),$async$dj)
case 8:o.f=new A.aF(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.am()
j=l
if(j!=null)j.a.am()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dj,r)},
p5(){this.lW()},
jk(a,b,c){return this.c.hO(new A.na(this,a,b,c),b,c)},
lW(){return this.c.jB(new A.nb(this),t.H)}}
A.na.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dj(r.c).bi(new A.n9(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.n9.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.nb.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.js()
s.a.am()
r.a.am()
p.f=null}},
$S:3}
A.h2.prototype={
hO(a,b,c){return this.vw(a,b,c,c)},
jB(a,b){return this.hO(a,null,b)},
vw(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$hO=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.Z)
h.a=!1
o=new A.p9(h,p)
if(!p.a){h.a=p.a=!0
q=A.eh(a,c).aD(o)
s=1
break}else{n={}
m=new A.r($.v,c.i("r<0>"))
l=new A.a8(m,c.i("a8<0>"))
n.a=null
h=new A.p8(h,n,l,a,c)
if(!g)n.a=A.aZ(b,"abort",new A.p7(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.aG(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.c.a6(j,0,i,h,n)
B.c.a6(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aD(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$hO,r)}}
A.p9.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gB(0)){s=r.b
if(s===r.c)A.w(A.aj());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.p8.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.A()
r.c.ak(A.eh(r.d,r.e))},
$S:0}
A.p7.prototype={
$1(a){var s,r=this
r.a.a.A()
s=r.c
if((s.a.a&30)===0){r.b.b.P(0,r.d)
s.ap(B.Z)}},
$S:2}
A.dr.prototype={
gm2(){var s,r,q,p,o,n=this,m=t.s,l=A.m([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q){p=s[q]
B.c.G(l,A.m([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.nq.prototype={
$1(a){if(a!=null)return A.t(a)
return null},
$S:139}
A.js.prototype={
ag(){return"MessageType."+this.b}}
A.q1.prototype={
t6(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hk(a,b)
case"connect":return p.ja(a,b)
case"custom":return p.dL(a,b)
case"fileSystemExists":return p.ey(a,b)
case"fileSystemFlush":return p.ez(a,b)
case"fileSystemAccess":return p.ex(a,b)
case"runQuery":return p.hn(a,b)
case"exclusiveLock":return p.hj(a,b)
case"releaseLock":s=p.bd(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.w(A.u("Lock to be released is not active."))
q.b.am()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hh(a,b)
case"openAdditionalConnection":return p.hl(a,b)
case"updateRequest":return p.ho(a,b)
case"rollbackRequest":return p.hm(a,b)
case"commitRequest":return p.hi(a,b)
case"dedicatedCompatibilityCheck":return p.dr(a,b)
case"sharedCompatibilityCheck":return p.dr(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dr(a,b)
default:r=A.uE(new A.bk(!1,o,o,"Unsupported request "+A.p(a.t)),o)
q=new A.r($.v,t.hl)
q.c2(r)
return q}}}
A.cJ.prototype={
ag(){return"FileSystemImplementation."+this.b}}
A.bZ.prototype={
ag(){return"TypeCode."+this.b},
rQ(a){var s=null
switch(this.a){case 0:s=A.w(A.P("Unsupported type code",null))
break
case 1:a=A.X(A.e1(a))
s=a
break
case 2:s=A.w5(t.bJ.a(a).toString(),null)
break
case 3:A.e1(a)
s=a
break
case 4:A.t(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.ff(a)
s=a
break
case 6:break}return s}}
A.ds.prototype={
lo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.P("Expected "+A.p(r)+" parameters, got "+A.p(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.a9:B.ax[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.X(A.e1(h))))
if(k!==0)a.bj(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bj(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.e1(h))
if(k!==0)a.bj(k,e)
break
case 4:g=B.f.u(A.t(h))
k=s.dart_sqlite3_bind_text(d,i,c.eo(g),g.length)
if(k!==0)a.bj(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.eo(h),h.length)
if(k!==0)a.bj(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bj(k,e)
break
case 7:f=A.ff(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bj(k,e)
break
case 0:throw A.b(A.a0("Unknown type code"))}}},
gk(a){return this.a.length},
sk(a,b){this.lb()},
h(a,b){var s=this.c[b],r=s>=8?B.a9:B.ax[s]
return r.rQ(this.a[b])},
j(a,b,c){this.lb()},
lb(){throw A.b(A.a0("decodeValues list is unmodifiable"))}}
A.uR.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:16}
A.mj.prototype={
$1(a){this.a.ak(this.c.a(this.b.result))},
$S:2}
A.mk.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ap(s)},
$S:2}
A.mn.prototype={
$1(a){this.a.ak(this.c.a(this.b.result))},
$S:2}
A.mo.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ap(s)},
$S:2}
A.mp.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ap(s)},
$S:2}
A.pG.prototype={
tq(){var s,r,q,p
for(s=this.b,r=new A.bT(s,s.r,s.e);r.m();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.aK(0)}}
A.fF.prototype={
ag(){return"FileType."+this.b}}
A.cW.prototype={
ag(){return"StorageMode."+this.b}}
A.ew.prototype={
l(a){return"Remote error: "+this.a},
$iG:1}
A.cG.prototype={}
A.uC.prototype={
$1(a){return A.aT(a.data)},
$S:141}
A.hX.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.eU.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.A()
q.d.A()
q.e.A()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.H)(p),++n)p[n].abort()
B.c.aK(p)
p=q.f
if(p!=null)p.b.am()
s=2
return A.a(q.a.er(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
l3(a){var s=new v.G.AbortController()
a.onabort=A.uD(new A.rT(s))
this.w.push(s)
return s},
jy(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.grF()){r=p.l3(b)
o=s.jk(c,r.signal,d).aD(new A.rX(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.u("Requested operation on inactive lock state."))}if(o==null)o=A.eh(c,d)
q=p.a.z
return q instanceof A.cL?o.aD(q.gtL()):o},
uE(a){var s=this,r=s.l3(a),q=new A.r($.v,t.hy),p=new A.aI(q,t.ho),o=t.H
A.vy(s.a.f.jk(new A.rU(s,p),r.signal,o),new A.rV(p),o,t.K)
return q.aD(new A.rW(s,r))}}
A.rT.prototype={
$0(){return this.a.abort()},
$S:0}
A.rX.prototype={
$0(){B.c.P(this.a.w,this.b)},
$S:3}
A.rU.prototype={
$0(){var s=this.a,r=s.r++,q=new A.r($.v,t.D)
s.f=new A.aF(r,new A.aI(q,t.Q))
this.b.ak(r)
return q},
$S:4}
A.rV.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bO(a,b)},
$S:9}
A.rW.prototype={
$0(){B.c.P(this.a.w,this.b)},
$S:3}
A.eT.prototype={
ni(a,b,c){this.b.a.aD(new A.rI(this))},
dr(a,b){return this.oi(a,b)},
oi(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.lr(a),$async$dr)
case 3:q={r:d.gm2(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
ja(a,b){return this.tQ(a,b)},
tQ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ja=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gky()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.fl(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ja,r)},
dL(a,b){return this.tR(a,b)},
tR(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$dL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.kj(l)
n=a.r
s=7
return A.a(o.a.gbV(),$async$dL)
case 7:s=6
return A.a(d.cp(p,new A.mI(n)),$async$dL)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cp(p,new A.iL(a)),$async$dL)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dL,r)},
hk(a,b){return this.u4(a,b)},
u4(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.jB(new A.rN(p,a),t.m),$async$hk)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
hn(a,b){return this.u7(a,b)},
u7(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bd(a)
n=o.a
s=3
return A.a(n.gbV(),$async$hn)
case 3:m=d
q=o.jy(a.z,b,new A.rQ(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hn,r)},
hj(a,b){return this.tV(a,b)},
tV(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bd(a).uE(b),$async$hj)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
hi(a,b){return this.tP(a,b)},
tP(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bd(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dg(n,new A.rK(p,o),a),$async$hi)
case 6:q=d
s=1
break
s=4
break
case 5:n.A()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
hm(a,b){return this.u6(a,b)},
u6(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bd(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dg(n,new A.rP(p,o),a),$async$hm)
case 6:q=d
s=1
break
s=4
break
case 5:n.A()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$hm,r)},
ho(a,b){return this.u9(a,b)},
u9(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ho=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bd(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dg(n,new A.rS(p,o),a),$async$ho)
case 6:q=d
s=1
break
s=4
break
case 5:n.A()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$ho,r)},
hl(a,b){return this.u5(a,b)},
u5(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bd(a).a;++m.w
s=3
return A.a(A.uS(),$async$hl)
case 3:o=d
n=o.a
p.w.jX(o.b).x.push(A.y_(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
hh(a,b){return this.tO(a,b)},
tO(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bd(a)
B.c.P(p.x,o)
s=3
return A.a(o.p(),$async$hh)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
ez(a,b){return this.tY(a,b)},
tY(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$ez=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bd(a).a.gcA(),$async$ez)
case 3:o=d
s=o instanceof A.cL?4:5
break
case 4:s=6
return A.a(o.ci(!1),$async$ez)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ez,r)},
ex(a,b){return this.tW(a,b)},
tW(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$ex=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bd(a)
n=B.ay[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcA(),$async$ex)
case 4:s=3
return A.a(l.jy(null,k,new j.rL(d,n,m,a),t.m),$async$ex)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
ey(a,b){return this.tX(a,b)},
tX(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ey=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bd(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcA(),$async$ey)
case 4:s=3
return A.a(n.jy(null,m,new l.rM(d,a),t.y),$async$ey)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ey,r)},
dg(a,b,c){return this.mY(a,b,c)},
mY(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dg)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dg,r)},
u3(a){},
cl(a){var s=0,r=A.h(t.X),q,p=this
var $async$cl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f4({r:a,z:null,i:0,d:null,t:"custom"},B.bH,t.m),$async$cl)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cl,r)},
kj(a){return B.c.ew(this.x,new A.rH(a))},
bd(a){var s=a.d
if(s!=null)return this.kj(s)
else throw A.b(A.P("Request requires database id",null))},
$im9:1}
A.rI.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.H)(p),++n
s=2
break
case 4:B.c.aK(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.rN.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.bU(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.tJ(h.d,A.AO(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcA():m.gbV(),$async$$0)
case 8:l=A.y_(m,null)
j.x.push(l)
i={r:m.b,i:h.i,t:"simpleSuccessResponse"}
q=i
s=1
break
p=2
s=7
break
case 5:p=4
g=o.pop()
s=m!=null?9:10
break
case 9:B.c.P(j.x,l)
s=11
return A.a(m.er(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:142}
A.rQ.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.u("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ds(s,r,A.bt(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.mJ(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.X(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.tB(l,k.s,q)
s=o.d
return A.zi(s.sqlite3_get_autocommit(p)!==0,m,A.X(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:36}
A.rK.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbV(),$async$$0)
case 3:q=b.a.nI().gcG().aL(new A.rJ(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:47}
A.rJ.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.fl(s))},
$S:57}
A.rP.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbV(),$async$$0)
case 3:q=b.a.qO().gcG().aL(new A.rO(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:47}
A.rO.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.fl(s))},
$S:57}
A.rS.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbV(),$async$$0)
case 3:q=b.a.r8().gcG().aL(new A.rR(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:145}
A.rR.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.fl(s))},
$S:146}
A.rL.prototype={
$0(){var s,r,q,p=this,o=p.a.dc(new A.hj(A.yC(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.f_(s.byteLength)
o.e_(A.bt(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.eZ()
r=new Uint8Array(q)
o.hV(r,0)
q={r:t.a.a(J.wK(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.hT()}},
$S:36}
A.rM.prototype={
$0(){return this.a.hS(A.yC(B.ay[this.b.f]),0)===1},
$S:56}
A.rH.prototype={
$1(a){return a.b===this.a},
$S:147}
A.iP.prototype={
gcA(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.eh(new A.ne(p),t.H):o,$async$gcA)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcA,r)},
gbV(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gbV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.eh(new A.nd(p),t.u):o,$async$gbV)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gbV,r)},
er(){var s=0,r=A.h(t.H),q=this
var $async$er=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.p(),$async$er)
case 4:case 3:return A.e(null,r)}})
return A.f($async$er,r)},
p(){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:j=q.a.r
j.toString
s=2
return A.a(j,$async$p)
case 2:p=b
o=q.x
s=o!=null?3:4
break
case 3:s=5
return A.a(o,$async$p)
case 5:n=b
j=q.r
if(j!=null)j.tq()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.wA()
A.x4(m)
k=l.a.get(m)
if(k==null)A.w(A.u("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.r?j:A.bg(j,t.H),$async$p)
case 6:q.f.lW()
return A.e(null,r)}})
return A.f($async$p,r)},
kL(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.P(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.aF(s,!0)
p=a.hD(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.P(0,new A.ai(n,A.o(n).i("ai<1>")).gC(0)).p()
n.j(0,p.d,p)
return new A.aF(p,!0)}return new A.aF(p,!1)},
tB(a,b,c){var s,r,q
if(c.gk(0)===0)return a.aw(b,B.v)
else{s=null
r=null
q=this.kL(a,b)
s=q.a
r=q.b
try{s.j9(new A.iM(c.grE()))}finally{if(r)s.d5()
else s.p()}}},
mJ(a,b,c){var s,r=null,q=null,p=this.kL(a,b)
r=p.a
q=p.b
try{s=A.BE(r,c)
return s}finally{if(q)r.d5()
else r.p()}}}
A.ne.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=q.a
k=l.d
case 2:switch(k.a){case 0:s=4
break
case 1:s=5
break
case 2:s=6
break
case 3:s=7
break
case 4:s=8
break
default:s=3
break}break
case 4:s=9
return A.a(A.q4("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gdF()
s=3
break
case 5:case 6:s=10
return A.a(A.j2("drift_db/"+l.c,k===B.a6,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gdF()
s=3
break
case 7:s=11
return A.a(A.j9(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gdF()
s=3
break
case 8:l.z=A.vz("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.nd.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcA(),$async$$0)
case 4:n=b
o.lH()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.ep(B.f.u(n.a),1),n,0)
if(m===0)A.w(A.u("could not register vfs"))
$.wA().j(0,n,m)
s=5
return A.a(l.f.jk(new A.nc(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:45}
A.nc.prototype={
$0(){var s=this.a
return s.a.b.hA(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:45}
A.r6.prototype={
gky(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.mR()
r.Q!==$&&A.vj()
r.Q=s
q=s}return q},
dM(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$dM=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.c2(A.bi(A.Dh(n.a),"stream",t.K))
q=2
j=v.G
case 5:s=7
return A.a(h.m(),$async$dM)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.fx(i.port,i.lockName,null)
n.jX(l)
s=9
break
case 10:s=A.ES(m.t)?11:12
break
case 11:s=13
return A.a(n.lr(m),$async$dM)
case 13:k=b
j.postMessage(k.gm2())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.A(),$async$dM)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dM,r)},
jX(a){var s=this,r=A.Ci(a,s.d++,s)
s.c.push(r)
r.b.a.aD(new A.r7(s,r))
return r},
lr(a){return this.x.jB(new A.r8(this,a),t.p6)},
bU(a){return this.ut(a)},
ut(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.aT(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.u("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.p(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bg(n,t.he),$async$bU)
case 5:s=3
break
case 4:o=A.vy(q.b.bU(m),new A.r9(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$bU)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$bU,r)},
tJ(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.bT(s,s.r,s.e);r.m();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.a6||b===B.as
o=A.vH(t.cj)
n=c===0?null:new A.pG(c,A.jm(null,null,t.N,t.fw))
n=new A.iP(this,r,a,b,d,new A.iO(q+"-outer",q,new A.h2(o),p),n)
s.j(0,r,n)
return n}}
A.r7.prototype={
$0(){var s=this.a,r=s.c
B.c.P(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.r8.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.dc(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.ly(),$async$$0)
case 9:case 8:j=a1
i=A.br(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gky()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.fl(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.eY(n,"message",!1,t.d4).gC(0),$async$$0)
case 15:e=b.AA(a.aT(a1.data))
k=e.c
l=e.d
i.G(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.a(A.fn(),$async$$0)
case 18:d=b.L(a1)
case 19:if(!d.m()){s=20
break}i.t(0,new A.aF(B.aF,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.uQ(c),$async$$0)
case 23:if(a1)i.t(0,new A.aF(B.aG,c))
case 22:d=A.Q(i,i.$ti.c)
q=new A.dr(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:149}
A.r9.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:150}
A.i8.prototype={}
A.kO.prototype={
glG(){return new A.eY(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.lf.prototype={
glG(){return new A.cE(new A.u2(this),t.k8)},
p(){}}
A.u2.prototype={
$1(a){var s=A.m([],t.W),r=A.m([],t.dw)
r.push(A.aZ(this.a.a,"connect",new A.u_(new A.u3(s,r,a)),!1,t.m))
a.r=new A.u0(r)},
$S:151}
A.u3.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.aZ(a,"message",new A.u1(this.c),!1,t.m))},
$S:2}
A.u1.prototype={
$1(a){this.a.rq(a)},
$S:2}
A.u_.prototype={
$1(a){var s,r=a.ports
r=J.L(t.ip.b(r)?r:new A.bl(r,A.al(r).i("bl<1,F>")))
s=this.a
while(r.m())s.$1(r.gn())},
$S:2}
A.u0.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.H)(s),++q)s[q].A()},
$S:3}
A.kP.prototype={
mR(){var s=v.G
if(!("Worker" in s))return null
return new A.t5(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.t5.prototype={}
A.kg.prototype={
gf5(){return A.t(this.c)}}
A.qm.prototype={
gjj(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
hY(a){var s,r=this,q=r.d=J.Aj(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gE()
return s},
lD(a,b){var s
if(this.hY(a))return
if(b==null)if(a instanceof A.ej)b="/"+a.a+"/"
else{s=J.an(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.kr(b)},
ev(a){return this.lD(a,null)},
tE(){if(this.c===this.b.length)return
this.kr("no more input")},
tA(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.w(A.aD("position must be greater than or equal to 0."))
else if(c>n.length)A.w(A.aD("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.w(A.aD("position plus length must not go beyond the end of the string."))
s=this.a
r=A.m([0],t.t)
q=n.length
p=new A.q6(s,r,new Uint32Array(q))
p.nd(new A.bQ(n),s)
o=c+b
if(o>q)A.w(A.aD("End "+o+u.D+p.gk(0)+"."))
else if(c<0)A.w(A.aD("Start may not be negative, was "+c+"."))
throw A.b(new A.kg(n,a,new A.eZ(p,c,o)))},
kr(a){this.tA("expected "+a+".",0,this.c)}}
A.eJ.prototype={
gk(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.xd(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.xd(b,this))
s=this.a
s.$flags&2&&A.D(s)
s[b]=c},
sk(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.D(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.kg(b)
B.d.aa(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.r6(q)
q=r.a
s=r.b++
q.$flags&2&&A.D(q)
q[s]=b},
kg(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
r6(a){var s=this.kg(null)
B.d.aa(s,0,a,this.a)
this.a=s},
a6(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.af(c,0,s,null,null))
s=this.a
if(d instanceof A.c_)B.d.a6(s,b,c,d.a,e)
else B.d.a6(s,b,c,d,e)},
aa(a,b,c,d){return this.a6(0,b,c,d,0)}}
A.kY.prototype={}
A.c_.prototype={}
A.vw.prototype={}
A.eY.prototype={
a1(a,b,c,d){return A.aZ(this.a,this.b,a,!1,this.$ti.c)},
bt(a,b,c){return this.a1(a,null,b,c)}}
A.hF.prototype={
A(){var s=this,r=A.cj(null,t.H)
if(s.b==null)return r
s.iR()
s.d=s.b=null
return r},
hy(a){var s,r=this
if(r.b==null)throw A.b(A.u("Subscription has been canceled."))
r.iR()
s=A.z0(new A.t9(a),t.m)
s=s==null?null:A.cf(s)
r.d=s
r.iP()},
bg(){if(this.b==null)return;++this.a
this.iR()},
b6(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.iP()},
iP(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
iR(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ib8:1}
A.t8.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.t9.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.cO.prototype
s.n2=s.l
s=A.bq.prototype
s.mZ=s.lI
s.n_=s.lJ
s.n1=s.lL
s.n0=s.lK
s=A.aS.prototype
s.bC=s.ba
s.dh=s.b9
s.cH=s.c3
s=A.cC.prototype
s.n5=s.kd
s.n6=s.ku
s.n7=s.l1
s=A.B.prototype
s.jU=s.a6
s=A.ao.prototype
s.jT=s.rD
s=A.hY.prototype
s.n8=s.p
s=A.ix.prototype
s.jS=s.hf
s=A.eC.prototype
s.n4=s.T
s.n3=s.X})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"Dp","B_",42)
r(A,"DC","Bt",10)
q(A,"E1","C4",14)
q(A,"E2","C5",14)
q(A,"E3","C6",14)
q(A,"E4","DE",18)
r(A,"z2","DV",0)
q(A,"E5","DF",19)
s(A,"E6","DH",11)
r(A,"uP","DG",0)
p(A,"Ec",5,null,["$5"],["DP"],153,0)
p(A,"Eh",4,null,["$1$4","$4"],["uI",function(a,b,c,d){return A.uI(a,b,c,d,t.z)}],154,0)
p(A,"Ej",5,null,["$2$5","$5"],["uK",function(a,b,c,d,e){var i=t.z
return A.uK(a,b,c,d,e,i,i)}],155,0)
p(A,"Ei",6,null,["$3$6","$6"],["uJ",function(a,b,c,d,e,f){var i=t.z
return A.uJ(a,b,c,d,e,f,i,i,i)}],156,0)
p(A,"Ef",4,null,["$1$4","$4"],["yR",function(a,b,c,d){return A.yR(a,b,c,d,t.z)}],157,0)
p(A,"Eg",4,null,["$2$4","$4"],["yS",function(a,b,c,d){var i=t.z
return A.yS(a,b,c,d,i,i)}],158,0)
p(A,"Ee",4,null,["$3$4","$4"],["yQ",function(a,b,c,d){var i=t.z
return A.yQ(a,b,c,d,i,i,i)}],159,0)
p(A,"Ea",5,null,["$5"],["DO"],160,0)
p(A,"Ek",4,null,["$4"],["uL"],161,0)
p(A,"E9",5,null,["$5"],["DN"],162,0)
p(A,"E8",5,null,["$5"],["DM"],163,0)
p(A,"Ed",4,null,["$4"],["DQ"],164,0)
q(A,"E7","DI",165)
p(A,"Eb",5,null,["$5"],["yP"],166,0)
var j
o(j=A.dS.prototype,"ge8","bo",0)
o(j,"ge9","bp",0)
n(A.dT.prototype,"grL",0,1,null,["$2","$1"],["bO","ap"],40,0,0)
m(A.r.prototype,"gi7","nJ",11)
n(j=A.d8.prototype,"gro",0,1,null,["$2","$1"],["bN","li"],40,0,0)
l(j,"gnr","ba",12)
m(j,"gnq","b9",11)
o(j,"gnF","c3",0)
o(j=A.d2.prototype,"ge8","bo",0)
o(j,"ge9","bp",0)
o(j=A.aS.prototype,"ge8","bo",0)
o(j,"ge9","bp",0)
o(A.eX.prototype,"gkI","qh",0)
l(j=A.c2.prototype,"gq9","qa",12)
m(j,"gqd","qe",11)
o(j,"gqb","qc",0)
o(j=A.f_.prototype,"ge8","bo",0)
o(j,"ge9","bp",0)
l(j,"gio","ip",12)
m(j,"gis","it",107)
o(j,"giq","ir",0)
o(j=A.f6.prototype,"ge8","bo",0)
o(j,"ge9","bp",0)
l(j,"gio","ip",12)
m(j,"gis","it",11)
o(j,"giq","ir",0)
s(A,"wm","Dc",30)
q(A,"wn","Dd",32)
s(A,"Eo","B5",42)
q(A,"Es","De",29)
k(j=A.kJ.prototype,"grn","t",12)
o(j,"gdF","p",0)
q(A,"z8","EL",32)
s(A,"z7","EK",30)
q(A,"Et","BX",7)
p(A,"EX",2,null,["$1$2","$2"],["zh",function(a,b){return A.zh(a,b,t.o)}],167,0)
m(j=A.iT.prototype,"gtz","ah",30)
l(j,"gua","aq",32)
l(j,"gui","uj",18)
q(A,"Em","At",7)
q(A,"Ew","AH",7)
l(A.jI.prototype,"guX","uY",8)
l(j=A.jE.prototype,"gq7","q8",23)
o(j,"gld","ek",4)
o(j,"gtn","tp",0)
q(A,"EB","x6",168)
o(j=A.jL.prototype,"gqf","qg",0)
l(j,"gqi","qj",62)
q(A,"Ep","vt",169)
l(j=A.ki.prototype,"gu0","u1",23)
l(j,"gtZ","u_",69)
o(j,"gq6","kH",0)
q(A,"Gk","xB",170)
r(A,"Gl","bJ",10)
q(A,"Eq","Bc",171)
m(j=A.fW.prototype,"goU","iw",1)
m(j,"goc","ik",1)
m(j,"goS","fu",1)
m(j,"goX","bH",1)
m(j,"goj","il",1)
m(j,"goZ","fv",1)
m(j,"goa","fg",1)
m(j,"gpI","fM",1)
m(j,"gpG","fL",1)
m(j,"gp6","fw",1)
m(j,"gog","fh",1)
m(j,"gp8","fz",1)
m(j,"gpq","fG",1)
m(j,"gpu","fH",1)
m(j,"gpw","ca",1)
m(j,"gpE","fK",1)
m(j,"gpC","fJ",1)
m(j,"gpy","fI",1)
m(j,"gps","iz",1)
m(j,"gpA","iA",1)
m(j,"gpO","fP",1)
m(j,"gpM","fO",1)
m(j,"gpK","fN",1)
m(j,"gpi","dt",1)
m(j,"gpm","fE",1)
m(j,"gpa","fA",1)
m(j,"gpc","fB",1)
m(j,"gpe","fC",1)
m(j,"gpg","fD",1)
m(j,"gpo","fF",1)
m(j,"gpk","iy",1)
m(j,"goH","c9",1)
m(j,"goL","iu",1)
m(j,"goN","iv",1)
m(j,"goP","fs",1)
m(j,"goD","fp",1)
m(j,"goF","ds",1)
m(j,"goJ","fq",1)
m(j,"goB","fo",1)
m(j,"goz","fn",1)
m(j,"gos","fl",1)
m(j,"goq","fk",1)
m(j,"gou","fm",1)
m(j,"gom","fi",1)
m(j,"goo","fj",1)
m(j,"gow","im",1)
m(j,"goe","dq",1)
l(j=A.kL.prototype,"gnP","nQ",23)
o(j,"gke","fb",4)
q(A,"z6","bB",20)
q(A,"z5","e5",20)
l(j=A.iN.prototype,"guw","ux",8)
m(j,"guu","uv",104)
n(j,"gvW",0,5,null,["$5"],["vX"],105,0,0)
n(j,"gvL",0,3,null,["$3"],["vM"],106,0,0)
n(j,"gvD",0,4,null,["$4"],["vE"],50,0,0)
n(j,"gvS",0,4,null,["$4"],["vT"],50,0,0)
n(j,"gvY",0,3,null,["$3"],["vZ"],108,0,0)
m(j,"gw2","w3",51)
m(j,"gvJ","vK",51)
l(j,"gvH","vI",33)
n(j,"gw_",0,4,null,["$4"],["w0"],52,0,0)
n(j,"gwa",0,4,null,["$4"],["wb"],52,0,0)
m(j,"gw6","w7",112)
m(j,"gw4","w5",15)
m(j,"gvQ","vR",15)
m(j,"gvU","vV",15)
m(j,"gw8","w9",15)
m(j,"gvF","vG",15)
l(j,"ghU","vN",33)
n(j,"gvO",0,3,null,["$3"],["vP"],144,0,0)
l(j,"ghW","w1",33)
l(j,"gt9","ta",14)
l(j,"gt4","t5",115)
n(j,"gt7",0,5,null,["$5"],["t8"],116,0,0)
n(j,"gtf",0,4,null,["$4"],["tg"],35,0,0)
n(j,"gtj",0,4,null,["$4"],["tk"],35,0,0)
n(j,"gth",0,4,null,["$4"],["ti"],35,0,0)
m(j,"gtl","tm",53)
m(j,"gtd","te",53)
n(j,"gtb",0,5,null,["$5"],["tc"],119,0,0)
m(j,"gt2","t3",120)
m(j,"gt0","t1",121)
n(j,"grZ",0,3,null,["$3"],["t_"],122,0,0)
o(j=A.cL.prototype,"gdF","p",4)
o(j,"gtL","tM",4)
o(A.eA.prototype,"gdF","p",0)
o(A.iO.prototype,"gp0","p5",0)
l(A.ds.prototype,"grE","lo",140)
l(A.eT.prototype,"gu2","u3",2)
q(A,"z4","zc",114)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.vF,J.jb,A.hi,J.eb,A.rY,A.rE,A.n,A.iE,A.dp,A.a4,A.B,A.q2,A.a5,A.jr,A.eQ,A.j_,A.kj,A.k3,A.iX,A.kx,A.fG,A.kp,A.kh,A.f4,A.fy,A.f0,A.bV,A.qF,A.jD,A.fC,A.hW,A.U,A.oj,A.dz,A.bT,A.jl,A.ej,A.f2,A.kB,A.eG,A.ua,A.kK,A.lq,A.bU,A.kU,A.uf,A.hZ,A.hu,A.kD,A.hK,A.lm,A.ab,A.a_,A.aS,A.hy,A.kk,A.hI,A.dT,A.bL,A.r,A.kC,A.d8,A.ln,A.kE,A.kz,A.kQ,A.t6,A.f3,A.eX,A.c2,A.hE,A.aK,A.i9,A.fe,A.lu,A.kV,A.tN,A.d6,A.l0,A.aP,A.l2,A.lp,A.h_,A.l1,A.kf,A.iH,A.ao,A.kG,A.m0,A.kF,A.iG,A.lg,A.dU,A.tK,A.ub,A.lt,A.cd,A.az,A.kT,A.b2,A.ax,A.t7,A.jF,A.hl,A.kS,A.bc,A.ja,A.V,A.T,A.ll,A.kb,A.O,A.i5,A.qK,A.bM,A.j0,A.jC,A.tD,A.tE,A.iY,A.W,A.iU,A.fP,A.dB,A.fb,A.f1,A.fY,A.iT,A.jA,A.kq,A.bS,A.c5,A.nL,A.dn,A.iw,A.ix,A.lX,A.ju,A.el,A.ka,A.a3,A.m8,A.lN,A.re,A.iW,A.mi,A.iS,A.jo,A.kc,A.pE,A.jn,A.jI,A.pY,A.ba,A.ei,A.nz,A.c8,A.mt,A.bR,A.ed,A.c9,A.jE,A.ra,A.lZ,A.fE,A.nr,A.bb,A.ot,A.kl,A.lV,A.jL,A.pr,A.hb,A.f7,A.pt,A.u4,A.fJ,A.cK,A.fI,A.fK,A.cl,A.kd,A.pp,A.bF,A.mw,A.ki,A.fZ,A.dG,A.p0,A.em,A.h0,A.pb,A.lY,A.fX,A.hh,A.pi,A.jQ,A.pQ,A.aV,A.pV,A.aW,A.eI,A.eH,A.qo,A.aE,A.eF,A.cs,A.cq,A.hg,A.c3,A.qq,A.hf,A.ho,A.qB,A.cY,A.bH,A.dH,A.mX,A.ue,A.eR,A.us,A.lr,A.dO,A.kL,A.eP,A.kw,A.r1,A.iQ,A.hd,A.jW,A.mD,A.qn,A.jG,A.jH,A.q6,A.k6,A.eC,A.nM,A.b_,A.c1,A.bW,A.k9,A.bX,A.cU,A.mZ,A.d9,A.q8,A.dq,A.aH,A.iA,A.mH,A.lb,A.tT,A.dx,A.iM,A.cB,A.hj,A.qX,A.qS,A.qZ,A.qY,A.dN,A.d0,A.iN,A.dV,A.qT,A.lR,A.hJ,A.ta,A.l3,A.kX,A.tQ,A.qN,A.fx,A.q1,A.fv,A.iL,A.j1,A.nI,A.ck,A.iO,A.h2,A.dr,A.pG,A.ew,A.hX,A.eU,A.iP,A.r6,A.i8,A.kP,A.t5,A.qm,A.vw,A.hF])
q(J.jb,[J.jd,J.fR,J.ap,J.b3,J.ek,J.dy,J.cM])
q(J.ap,[J.cO,J.A,A.ep,A.h4])
q(J.cO,[J.jJ,J.d_,J.bo])
r(J.jc,A.hi)
r(J.og,J.A)
q(J.dy,[J.fQ,J.je])
q(A.n,[A.d1,A.C,A.co,A.c0,A.fD,A.dM,A.cu,A.bv,A.dY,A.kA,A.lk,A.f9,A.dA])
q(A.d1,[A.dm,A.ia])
r(A.hC,A.dm)
r(A.hz,A.ia)
q(A.dp,[A.mb,A.ma,A.oa,A.qD,A.v6,A.v8,A.rl,A.rk,A.uv,A.uu,A.nG,A.nB,A.te,A.td,A.tp,A.ts,A.qi,A.qj,A.qg,A.t4,A.t3,A.tY,A.tX,A.tu,A.t0,A.tM,A.oV,A.tI,A.mG,A.rz,A.nC,A.va,A.ve,A.vf,A.uU,A.m3,A.m5,A.m7,A.iz,A.m_,A.ux,A.m1,A.oZ,A.v0,A.uO,A.q9,A.qa,A.v_,A.nn,A.nm,A.no,A.nl,A.nk,A.nj,A.ng,A.nh,A.ni,A.oR,A.oT,A.oS,A.p3,A.p1,A.p2,A.mg,A.me,A.md,A.mh,A.mf,A.rb,A.nu,A.ns,A.nv,A.ou,A.ov,A.ox,A.oz,A.r0,A.ps,A.py,A.pz,A.pu,A.pv,A.pw,A.px,A.pB,A.my,A.mx,A.qy,A.qr,A.qw,A.qs,A.qt,A.qu,A.pd,A.pe,A.pf,A.pg,A.pk,A.pl,A.po,A.pn,A.pm,A.pU,A.pR,A.pS,A.pT,A.pW,A.pX,A.qp,A.v2,A.os,A.or,A.oq,A.oo,A.oG,A.oH,A.oK,A.oL,A.oO,A.oN,A.oJ,A.oE,A.mE,A.mF,A.uM,A.nO,A.nN,A.nP,A.nR,A.nT,A.nQ,A.o6,A.qb,A.n6,A.u7,A.vd,A.vg,A.vh,A.lQ,A.rZ,A.t_,A.ml,A.mm,A.mq,A.mr,A.ms,A.nw,A.lU,A.lS,A.tx,A.tA,A.tB,A.o9,A.o7,A.tw,A.q5,A.qO,A.qP,A.qQ,A.qR,A.pO,A.pP,A.pN,A.pM,A.pL,A.r2,A.n9,A.p7,A.nq,A.uR,A.mj,A.mk,A.mn,A.mo,A.mp,A.uC,A.rJ,A.rO,A.rR,A.rH,A.u2,A.u3,A.u1,A.u_,A.t8,A.t9])
q(A.mb,[A.rF,A.mC,A.oh,A.v7,A.uw,A.uN,A.nH,A.nA,A.tf,A.tq,A.tt,A.rd,A.nK,A.ok,A.oX,A.tL,A.ry,A.um,A.qL,A.ul,A.uk,A.nE,A.nD,A.m2,A.m4,A.m6,A.iy,A.p6,A.p_,A.p4,A.pD,A.pq,A.mu,A.mv,A.op,A.oA,A.oB,A.oC,A.uY,A.uV,A.r4,A.nS,A.tC,A.r3,A.rV,A.r9])
r(A.bl,A.hz)
q(A.a4,[A.cN,A.jR,A.cz,A.jf,A.ko,A.jZ,A.kR,A.ha,A.fT,A.ir,A.bk,A.cb,A.km,A.be,A.iI])
q(A.B,[A.eK,A.eO,A.ds,A.eJ])
r(A.bQ,A.eK)
q(A.ma,[A.vc,A.pI,A.rm,A.rn,A.ud,A.uc,A.ut,A.rp,A.rq,A.rs,A.rt,A.rr,A.ro,A.nF,A.tg,A.tl,A.tk,A.ti,A.th,A.to,A.tn,A.tm,A.tr,A.qh,A.qk,A.qf,A.u6,A.u5,A.rc,A.rD,A.rC,A.tR,A.tP,A.uy,A.uz,A.t2,A.t1,A.uH,A.tW,A.tV,A.up,A.uo,A.nf,A.uF,A.uG,A.oY,A.oU,A.oQ,A.mc,A.pa,A.nt,A.ow,A.oy,A.pC,A.pA,A.mB,A.mA,A.mz,A.qv,A.qx,A.qA,A.pj,A.pc,A.oP,A.oM,A.oI,A.oF,A.oD,A.o5,A.nU,A.o0,A.o1,A.o2,A.o3,A.nZ,A.o_,A.nV,A.nW,A.nX,A.nY,A.o4,A.tv,A.n7,A.n8,A.n4,A.n3,A.n5,A.n0,A.n_,A.n1,A.n2,A.u8,A.u9,A.vi,A.mM,A.mJ,A.mO,A.mQ,A.mS,A.mL,A.mR,A.mW,A.mU,A.mT,A.mN,A.mP,A.mV,A.mK,A.lO,A.lP,A.qU,A.lT,A.ty,A.tz,A.tb,A.o8,A.na,A.nb,A.p9,A.p8,A.rT,A.rX,A.rU,A.rW,A.rI,A.rN,A.rQ,A.rK,A.rP,A.rS,A.rL,A.rM,A.ne,A.nd,A.nc,A.r7,A.r8,A.u0])
q(A.C,[A.R,A.dv,A.ai,A.aO,A.aN,A.dX,A.hM])
q(A.R,[A.dL,A.ac,A.dJ,A.fU,A.l_])
r(A.du,A.co)
r(A.fB,A.dM)
r(A.ee,A.cu)
q(A.f4,[A.l4,A.l5])
q(A.l4,[A.aF,A.hS,A.hT,A.f5,A.l6])
q(A.l5,[A.hU,A.l7])
r(A.bm,A.fy)
q(A.bV,[A.fz,A.hV])
r(A.cI,A.fz)
r(A.fN,A.oa)
r(A.h8,A.cz)
q(A.qD,[A.qc,A.ft])
q(A.U,[A.bq,A.cC,A.kZ])
q(A.bq,[A.fS,A.hL])
r(A.eo,A.ep)
q(A.h4,[A.h3,A.eq])
q(A.eq,[A.hO,A.hQ])
r(A.hP,A.hO)
r(A.cS,A.hP)
r(A.hR,A.hQ)
r(A.bs,A.hR)
q(A.cS,[A.jv,A.jw])
q(A.bs,[A.jx,A.jy,A.jz,A.h5,A.h6,A.h7,A.dF])
r(A.i_,A.kR)
q(A.a_,[A.f8,A.hm,A.hD,A.cE,A.hG,A.hx,A.fs,A.eY])
r(A.aY,A.f8)
r(A.aR,A.aY)
q(A.aS,[A.d2,A.f_,A.f6])
r(A.dS,A.d2)
r(A.hv,A.hy)
q(A.dT,[A.aI,A.a8])
q(A.d8,[A.cc,A.fa])
r(A.li,A.kz)
q(A.kQ,[A.d3,A.eW])
r(A.hN,A.cc)
r(A.dZ,A.hG)
q(A.lu,[A.kM,A.la])
q(A.cC,[A.d4,A.hA])
r(A.cD,A.hV)
r(A.i4,A.h_)
r(A.eL,A.i4)
q(A.kf,[A.hY,A.ug,A.ru,A.lj])
r(A.tG,A.hY)
q(A.iH,[A.dw,A.lW,A.oi])
q(A.dw,[A.ip,A.jj,A.ku])
q(A.ao,[A.lo,A.iv,A.iu,A.ji,A.jh,A.kv,A.hq,A.j5])
q(A.lo,[A.iq,A.jk])
r(A.rA,A.kG)
q(A.m0,[A.rv,A.eS,A.kJ,A.un])
r(A.rj,A.rv)
r(A.jg,A.fT)
r(A.tH,A.iG)
r(A.tJ,A.tK)
r(A.lv,A.lt)
r(A.uq,A.lv)
q(A.bk,[A.cr,A.fL])
r(A.kN,A.i5)
r(A.ez,A.fb)
r(A.ld,A.j5)
r(A.tZ,A.nL)
r(A.le,A.tZ)
r(A.jX,A.dn)
r(A.iC,A.iw)
r(A.cH,A.hm)
q(A.ix,[A.p5,A.q0])
r(A.hn,A.lX)
r(A.ke,A.hn)
r(A.fu,A.W)
q(A.t7,[A.jK,A.iJ,A.np,A.bG,A.fM,A.dE,A.bK,A.it,A.cw,A.fq,A.es,A.h9,A.hk,A.ph,A.eg,A.js,A.cJ,A.bZ,A.fF,A.cW])
q(A.jo,[A.hr,A.kn,A.jB,A.iF,A.jM,A.j4,A.cV,A.jS,A.k_,A.ex,A.iK,A.iV])
r(A.fH,A.ex)
r(A.r_,A.lZ)
q(A.aE,[A.hp,A.ey,A.k0,A.b1,A.bn,A.bu,A.dI,A.he,A.fA,A.ec])
r(A.on,A.mX)
r(A.fW,A.dO)
r(A.oe,A.qn)
q(A.oe,[A.pF,A.qM,A.r5])
r(A.j3,A.k6)
q(A.eC,[A.eZ,A.k8])
r(A.eB,A.k9)
r(A.cv,A.k8)
r(A.eD,A.dq)
r(A.iB,A.aH)
q(A.iB,[A.j7,A.cL,A.eA])
q(A.iA,[A.kW,A.lh])
r(A.l8,A.mH)
r(A.l9,A.l8)
r(A.jY,A.l9)
r(A.lc,A.lb)
r(A.bI,A.lc)
q(A.aP,[A.dR,A.aJ])
r(A.eN,A.q8)
q(A.aJ,[A.hH,A.hB,A.eV,A.fd])
r(A.pK,A.q1)
r(A.mI,A.iL)
r(A.cG,A.ew)
r(A.eT,A.pK)
q(A.i8,[A.kO,A.lf])
r(A.kg,A.eB)
r(A.kY,A.eJ)
r(A.c_,A.kY)
s(A.eK,A.kp)
s(A.ia,A.B)
s(A.hO,A.B)
s(A.hP,A.fG)
s(A.hQ,A.B)
s(A.hR,A.fG)
s(A.cc,A.kE)
s(A.fa,A.ln)
s(A.i4,A.lp)
s(A.lv,A.kf)
s(A.l8,A.B)
s(A.l9,A.jA)
s(A.lb,A.kq)
s(A.lc,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",a1:"double",cg:"num",k:"String",Z:"bool",T:"Null",q:"List",j:"Object",N:"Map",F:"JSObject"},mangledNames:{},types:["~()","K<j?>(m9,eP)","~(F)","T()","K<~>()","K<T>(c9)","K<~>(c9)","k(k)","~(i)","T(j,as)","i()","~(j,as)","~(j?)","~(@,@)","~(~())","i(aX,i)","T(F)","K<~>(hJ)","Z(j?)","~(@)","j?(j?)","Z(k)","T(@)","~(a3)","K<~>(~)","k(N<k,j?>)","~(k,k)","T(j)","0&()","@(@)","Z(j?,j?)","Z(b_)","i(j?)","i(aX)","~(q<i>)","~(jV,i,i,i)","F()","j?(N<k,j?>)","@()","Z(ei)","~(j[as?])","~(k,@)","i(@,@)","~(j?,j?)","Z(bb)","K<dO>()","Z(ba)","K<b8<~>>()","V<k,j?>(@,@)","K<q<N<k,j?>>>(k,q<j?>)","i(aH,i,i,i)","i(aH,i)","i(aX,i,i,b3)","~(jV,i)","@(k)","k(dD)","Z()","~(~)","k?(N<k,j?>)","K<bb>(c9)","i(k)","~(q<bS>)","~(hb)","V<k,cK>(k,eF)","cs(@)","T(k,k[j?])","T(~)","N<k,j?>(j?,k)","cT<k>(j?,k)","~(c3)","~(cy)","K<aW>(aW)","aW(aW)","aW(j)","~(cR<q<i>>)","Z(cq)","k(i[i])","cY()","bH()","dH()","Z(bR<@>)","dU<@,@>(b9<@>)","bR<j?>(@)","i(i,i)","el()","~(q<N<k,j?>>)","~(N<k,j?>?)","~(eI)","a_<q<i>>()","~(q<bF>)","i(i)","k(k?)","k?()","i(c1)","k(@)","j(c1)","j(b_)","i(b_,b_)","q<c1>(V<j,q<b_>>)","cv()","k(j?)","~(i,k,i)","r<@>?()","~(M,ag,M,~())","~(b3,i)","aX?(aH,i,i,i,i)","i(aH,i,i)","~(@,as)","i(aH?,i,i)","N<k,j?>(bI)","T(~())","~(k,k?)","i(aX,b3)","T(bo,bo)","N<k,j?>(bF)","i(i())","~(~(i,k,i),i,i,i,b3)","Z(c8)","i(c8,c8)","i(jV,i,i,i,i)","i(i(i),i)","i(vS,i)","i(vS,i,i)","K<T>(mY)","j?(~)","F(A<j?>)","@(@,k)","K<T>()","T(@,as)","F(F?)","~(dl)","K<~>(i,ca)","K<~>(i)","ca()","K<F>(k)","T(ck)","K<T>(F)","F(j)","T(j?,as)","k?(j?)","~(dq)","F(F)","K<F>()","~(i,@)","i(aX,i,i)","K<b8<bX>>()","~(bX)","Z(eU)","K<a_<q<i>>>()","K<dr>()","0&(j?,as)","~(cR<F>)","Z(k,k)","~(M?,ag?,M,j,as)","0^(M?,ag?,M,0^())<j?>","0^(M?,ag?,M,0^(1^),1^)<j?,j?>","0^(M?,ag?,M,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(M,ag,M,0^())<j?>","0^(1^)(M,ag,M,0^(1^))<j?,j?>","0^(1^,2^)(M,ag,M,0^(1^,2^))<j?,j?,j?>","ab?(M,ag,M,j,as?)","~(M?,ag?,M,~())","cy(M,ag,M,ax,~())","cy(M,ag,M,ax,~(cy))","~(M,ag,M,k)","~(k)","M(M?,ag?,M,w_?,N<j?,j?>?)","0^(0^,0^)<cg>","bb(N<k,j?>)","bF(N<k,j?>)","a1(i)","N<k,j?>(bb)","0&(k,i?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.aF&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.hS&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.hT&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.f5&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.l6&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.hU&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;conflicts,hidden,pending":(a,b,c)=>d=>d instanceof A.l7&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.CK(v.typeUniverse,JSON.parse('{"bo":"cO","jJ":"cO","d_":"cO","Fq":"ep","A":{"q":["1"],"ap":[],"C":["1"],"F":[],"n":["1"],"aM":["1"]},"jd":{"Z":[],"a6":[]},"fR":{"T":[],"a6":[]},"ap":{"F":[]},"cO":{"ap":[],"F":[]},"jc":{"hi":[]},"og":{"A":["1"],"q":["1"],"ap":[],"C":["1"],"F":[],"n":["1"],"aM":["1"]},"dy":{"a1":[],"ah":["cg"]},"fQ":{"a1":[],"i":[],"ah":["cg"],"a6":[]},"je":{"a1":[],"ah":["cg"],"a6":[]},"cM":{"k":[],"ah":["k"],"aM":["@"],"a6":[]},"d1":{"n":["2"]},"dm":{"d1":["1","2"],"n":["2"],"n.E":"2"},"hC":{"dm":["1","2"],"d1":["1","2"],"C":["2"],"n":["2"],"n.E":"2"},"hz":{"B":["2"],"q":["2"],"d1":["1","2"],"C":["2"],"n":["2"]},"bl":{"hz":["1","2"],"B":["2"],"q":["2"],"d1":["1","2"],"C":["2"],"n":["2"],"B.E":"2","n.E":"2"},"cN":{"a4":[]},"jR":{"a4":[]},"bQ":{"B":["i"],"q":["i"],"C":["i"],"n":["i"],"B.E":"i"},"C":{"n":["1"]},"R":{"C":["1"],"n":["1"]},"dL":{"R":["1"],"C":["1"],"n":["1"],"R.E":"1","n.E":"1"},"co":{"n":["2"],"n.E":"2"},"du":{"co":["1","2"],"C":["2"],"n":["2"],"n.E":"2"},"ac":{"R":["2"],"C":["2"],"n":["2"],"R.E":"2","n.E":"2"},"c0":{"n":["1"],"n.E":"1"},"fD":{"n":["2"],"n.E":"2"},"dM":{"n":["1"],"n.E":"1"},"fB":{"dM":["1"],"C":["1"],"n":["1"],"n.E":"1"},"cu":{"n":["1"],"n.E":"1"},"ee":{"cu":["1"],"C":["1"],"n":["1"],"n.E":"1"},"dv":{"C":["1"],"n":["1"],"n.E":"1"},"bv":{"n":["1"],"n.E":"1"},"eK":{"B":["1"],"q":["1"],"C":["1"],"n":["1"]},"dJ":{"R":["1"],"C":["1"],"n":["1"],"R.E":"1","n.E":"1"},"fy":{"N":["1","2"]},"bm":{"fy":["1","2"],"N":["1","2"]},"dY":{"n":["1"],"n.E":"1"},"fz":{"bV":["1"],"cT":["1"],"C":["1"],"n":["1"]},"cI":{"bV":["1"],"cT":["1"],"C":["1"],"n":["1"]},"h8":{"cz":[],"a4":[]},"jf":{"a4":[]},"ko":{"a4":[]},"jD":{"G":[]},"hW":{"as":[]},"jZ":{"a4":[]},"bq":{"U":["1","2"],"N":["1","2"],"U.V":"2","U.K":"1"},"ai":{"C":["1"],"n":["1"],"n.E":"1"},"aO":{"C":["1"],"n":["1"],"n.E":"1"},"aN":{"C":["V<1,2>"],"n":["V<1,2>"],"n.E":"V<1,2>"},"fS":{"bq":["1","2"],"U":["1","2"],"N":["1","2"],"U.V":"2","U.K":"1"},"f2":{"jU":[],"dD":[]},"kA":{"n":["jU"],"n.E":"jU"},"eG":{"dD":[]},"lk":{"n":["dD"],"n.E":"dD"},"eo":{"ap":[],"F":[],"dl":[],"a6":[]},"ep":{"ap":[],"F":[],"dl":[],"a6":[]},"h4":{"ap":[],"F":[]},"lq":{"dl":[]},"h3":{"ap":[],"vr":[],"F":[],"a6":[]},"eq":{"bp":["1"],"ap":[],"F":[],"aM":["1"]},"cS":{"B":["a1"],"q":["a1"],"bp":["a1"],"ap":[],"C":["a1"],"F":[],"aM":["a1"],"n":["a1"]},"bs":{"B":["i"],"q":["i"],"bp":["i"],"ap":[],"C":["i"],"F":[],"aM":["i"],"n":["i"]},"jv":{"cS":[],"nx":[],"B":["a1"],"q":["a1"],"bp":["a1"],"ap":[],"C":["a1"],"F":[],"aM":["a1"],"n":["a1"],"a6":[],"B.E":"a1"},"jw":{"cS":[],"ny":[],"B":["a1"],"q":["a1"],"bp":["a1"],"ap":[],"C":["a1"],"F":[],"aM":["a1"],"n":["a1"],"a6":[],"B.E":"a1"},"jx":{"bs":[],"ob":[],"B":["i"],"q":["i"],"bp":["i"],"ap":[],"C":["i"],"F":[],"aM":["i"],"n":["i"],"a6":[],"B.E":"i"},"jy":{"bs":[],"oc":[],"B":["i"],"q":["i"],"bp":["i"],"ap":[],"C":["i"],"F":[],"aM":["i"],"n":["i"],"a6":[],"B.E":"i"},"jz":{"bs":[],"od":[],"B":["i"],"q":["i"],"bp":["i"],"ap":[],"C":["i"],"F":[],"aM":["i"],"n":["i"],"a6":[],"B.E":"i"},"h5":{"bs":[],"qH":[],"B":["i"],"q":["i"],"bp":["i"],"ap":[],"C":["i"],"F":[],"aM":["i"],"n":["i"],"a6":[],"B.E":"i"},"h6":{"bs":[],"qI":[],"B":["i"],"q":["i"],"bp":["i"],"ap":[],"C":["i"],"F":[],"aM":["i"],"n":["i"],"a6":[],"B.E":"i"},"h7":{"bs":[],"qJ":[],"B":["i"],"q":["i"],"bp":["i"],"ap":[],"C":["i"],"F":[],"aM":["i"],"n":["i"],"a6":[],"B.E":"i"},"dF":{"bs":[],"ca":[],"B":["i"],"q":["i"],"bp":["i"],"ap":[],"C":["i"],"F":[],"aM":["i"],"n":["i"],"a6":[],"B.E":"i"},"kR":{"a4":[]},"i_":{"cz":[],"a4":[]},"ab":{"a4":[]},"r":{"K":["1"]},"cR":{"b9":["1"]},"hZ":{"cy":[]},"hu":{"fw":["1"]},"f9":{"n":["1"],"n.E":"1"},"aR":{"aY":["1"],"f8":["1"],"a_":["1"],"a_.T":"1"},"dS":{"d2":["1"],"aS":["1"],"b8":["1"],"aS.T":"1"},"hy":{"b9":["1"]},"hv":{"hy":["1"],"b9":["1"]},"kk":{"G":[]},"ha":{"a4":[]},"dT":{"fw":["1"]},"aI":{"dT":["1"],"fw":["1"]},"a8":{"dT":["1"],"fw":["1"]},"hm":{"a_":["1"]},"d8":{"b9":["1"]},"cc":{"d8":["1"],"b9":["1"]},"fa":{"d8":["1"],"b9":["1"]},"aY":{"f8":["1"],"a_":["1"],"a_.T":"1"},"d2":{"aS":["1"],"b8":["1"],"aS.T":"1"},"aS":{"b8":["1"],"aS.T":"1"},"f8":{"a_":["1"]},"eX":{"b8":["1"]},"hD":{"a_":["1"],"a_.T":"1"},"cE":{"a_":["1"],"a_.T":"1"},"hN":{"cc":["1"],"d8":["1"],"cR":["1"],"b9":["1"]},"hG":{"a_":["2"]},"f_":{"aS":["2"],"b8":["2"],"aS.T":"2"},"dZ":{"hG":["1","2"],"a_":["2"],"a_.T":"2"},"hE":{"b9":["1"]},"f6":{"aS":["2"],"b8":["2"],"aS.T":"2"},"hx":{"a_":["2"],"a_.T":"2"},"i9":{"w_":[]},"fe":{"ag":[]},"lu":{"M":[]},"kM":{"M":[]},"la":{"M":[]},"cC":{"U":["1","2"],"N":["1","2"],"U.V":"2","U.K":"1"},"d4":{"cC":["1","2"],"U":["1","2"],"N":["1","2"],"U.V":"2","U.K":"1"},"hA":{"cC":["1","2"],"U":["1","2"],"N":["1","2"],"U.V":"2","U.K":"1"},"dX":{"C":["1"],"n":["1"],"n.E":"1"},"hL":{"bq":["1","2"],"U":["1","2"],"N":["1","2"],"U.V":"2","U.K":"1"},"cD":{"bV":["1"],"cT":["1"],"C":["1"],"n":["1"]},"dA":{"n":["1"],"n.E":"1"},"B":{"q":["1"],"C":["1"],"n":["1"]},"U":{"N":["1","2"]},"hM":{"C":["2"],"n":["2"],"n.E":"2"},"h_":{"N":["1","2"]},"eL":{"N":["1","2"]},"fU":{"R":["1"],"C":["1"],"n":["1"],"R.E":"1","n.E":"1"},"bV":{"cT":["1"],"C":["1"],"n":["1"]},"hV":{"bV":["1"],"cT":["1"],"C":["1"],"n":["1"]},"dU":{"b9":["1"]},"kZ":{"U":["k","@"],"N":["k","@"],"U.V":"@","U.K":"k"},"l_":{"R":["k"],"C":["k"],"n":["k"],"R.E":"k","n.E":"k"},"ip":{"dw":[]},"lo":{"ao":["k","q<i>"]},"iq":{"ao":["k","q<i>"],"ao.T":"q<i>"},"iv":{"ao":["q<i>","k"],"ao.T":"k"},"iu":{"ao":["k","q<i>"],"ao.T":"q<i>"},"fT":{"a4":[]},"jg":{"a4":[]},"ji":{"ao":["j?","k"],"ao.T":"k"},"jh":{"ao":["k","j?"],"ao.T":"j?"},"jj":{"dw":[]},"jk":{"ao":["k","q<i>"],"ao.T":"q<i>"},"ku":{"dw":[]},"kv":{"ao":["k","q<i>"],"ao.T":"q<i>"},"hq":{"ao":["q<i>","k"],"ao.T":"k"},"wQ":{"ah":["wQ"]},"b2":{"ah":["b2"]},"a1":{"ah":["cg"]},"ax":{"ah":["ax"]},"i":{"ah":["cg"]},"q":{"C":["1"],"n":["1"]},"cg":{"ah":["cg"]},"jU":{"dD":[]},"cT":{"C":["1"],"n":["1"]},"k":{"ah":["k"]},"az":{"ah":["wQ"]},"ir":{"a4":[]},"cz":{"a4":[]},"bk":{"a4":[]},"cr":{"a4":[]},"fL":{"cr":[],"a4":[]},"cb":{"a4":[]},"km":{"cb":[],"a4":[]},"be":{"a4":[]},"iI":{"a4":[]},"jF":{"a4":[]},"hl":{"a4":[]},"kS":{"G":[]},"bc":{"G":[]},"ja":{"cb":[],"G":[],"a4":[]},"ll":{"as":[]},"i5":{"kr":[]},"bM":{"kr":[]},"kN":{"kr":[]},"jC":{"G":[]},"od":{"q":["i"],"C":["i"],"n":["i"]},"ca":{"q":["i"],"C":["i"],"n":["i"]},"qJ":{"q":["i"],"C":["i"],"n":["i"]},"ob":{"q":["i"],"C":["i"],"n":["i"]},"qH":{"q":["i"],"C":["i"],"n":["i"]},"oc":{"q":["i"],"C":["i"],"n":["i"]},"qI":{"q":["i"],"C":["i"],"n":["i"]},"nx":{"q":["a1"],"C":["a1"],"n":["a1"]},"ny":{"q":["a1"],"C":["a1"],"n":["a1"]},"W":{"N":["2","3"]},"ez":{"fb":["1","cT<1>"],"fb.E":"1"},"j5":{"ao":["q<i>","bS"]},"ld":{"ao":["q<i>","bS"],"ao.T":"bS"},"jX":{"G":[]},"iw":{"vs":[]},"iC":{"vs":[]},"cH":{"a_":["q<i>"],"a_.T":"q<i>"},"dn":{"G":[]},"ke":{"hn":[]},"fu":{"W":["k","k","1"],"N":["k","1"],"W.V":"1","W.K":"k","W.C":"k"},"iW":{"mY":[]},"jo":{"G":[]},"hr":{"G":[]},"kn":{"G":[]},"jB":{"G":[]},"iF":{"G":[]},"jM":{"G":[]},"j4":{"G":[]},"cV":{"G":[]},"jS":{"G":[]},"k_":{"G":[]},"ex":{"G":[]},"fH":{"G":[]},"iK":{"G":[]},"iV":{"G":[]},"cl":{"G":[]},"fZ":{"G":[]},"aE":{"G":[]},"hp":{"G":[]},"ey":{"G":[]},"k0":{"G":[]},"b1":{"G":[]},"bn":{"G":[]},"bu":{"G":[]},"dI":{"G":[]},"he":{"G":[]},"fA":{"G":[]},"ec":{"G":[]},"fW":{"dO":[]},"iQ":{"G":[]},"hd":{"G":[]},"jW":{"G":[]},"jH":{"G":[]},"j3":{"bW":[],"ah":["bW"]},"eZ":{"cv":[],"ah":["k7"]},"bW":{"ah":["bW"]},"k6":{"bW":[],"ah":["bW"]},"k7":{"ah":["k7"]},"k8":{"ah":["k7"]},"k9":{"G":[]},"eB":{"bc":[],"G":[]},"eC":{"ah":["k7"]},"cv":{"ah":["k7"]},"cU":{"G":[]},"eD":{"dq":[]},"j7":{"aH":[]},"kW":{"hs":[],"aX":[]},"bI":{"U":["k","@"],"N":["k","@"],"U.V":"@","U.K":"k"},"jY":{"B":["bI"],"q":["bI"],"C":["bI"],"n":["bI"],"B.E":"bI"},"cB":{"G":[]},"iB":{"aH":[]},"iA":{"hs":[],"aX":[]},"dR":{"aP":["dR"],"aP.E":"dR"},"eO":{"B":["d0"],"q":["d0"],"C":["d0"],"n":["d0"],"B.E":"d0"},"fs":{"a_":["1"],"a_.T":"1"},"cL":{"aH":[]},"aJ":{"aP":["aJ"]},"kX":{"hs":[],"aX":[]},"hH":{"aJ":[],"aP":["aJ"],"aP.E":"aJ"},"hB":{"aJ":[],"aP":["aJ"],"aP.E":"aJ"},"eV":{"aJ":[],"aP":["aJ"],"aP.E":"aJ"},"fd":{"aJ":[],"aP":["aJ"],"aP.E":"aJ"},"eA":{"aH":[]},"lh":{"hs":[],"aX":[]},"fv":{"G":[]},"ds":{"B":["j?"],"q":["j?"],"C":["j?"],"n":["j?"],"B.E":"j?"},"ew":{"G":[]},"cG":{"G":[]},"eT":{"m9":[]},"kO":{"i8":["F"]},"lf":{"i8":["F"]},"kg":{"bc":[],"G":[]},"c_":{"eJ":["i"],"B":["i"],"q":["i"],"C":["i"],"n":["i"],"B.E":"i"},"eJ":{"B":["1"],"q":["1"],"C":["1"],"n":["1"]},"kY":{"eJ":["i"],"B":["i"],"q":["i"],"C":["i"],"n":["i"]},"eY":{"a_":["1"],"a_.T":"1"},"hF":{"b8":["1"]}}'))
A.CJ(v.typeUniverse,JSON.parse('{"eQ":1,"k3":1,"iX":1,"fG":1,"kp":1,"eK":1,"ia":2,"fz":1,"dz":1,"bT":1,"eq":1,"b9":1,"lm":1,"ha":2,"hm":1,"ln":1,"kE":1,"kz":1,"li":1,"kQ":1,"d3":1,"f3":1,"c2":1,"hE":1,"aK":1,"lp":2,"h_":2,"hV":1,"i4":2,"dU":2,"iG":1,"iH":2,"hY":1,"j0":1,"iU":1,"jA":1,"kq":2,"bR":1,"js":1,"Ap":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",V:"SELECT op_id FROM lp_op_queue WHERE op_id IN (",M:"SELECT op_id FROM lp_outbox WHERE op_id IN (",B:"Time including microseconds is outside valid range",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was ",l:"store = ? AND record_id = ? AND state IN ('pending','failed')"}
var t=(function rtii(){var s=A.am
return{fM:s("@<@>"),ie:s("Ap<j?>"),om:s("fs<A<j?>>"),hw:s("c3"),lo:s("dl"),fW:s("vr"),kj:s("fu<k>"),iv:s("a3"),dF:s("vs()"),V:s("bQ"),bU:s("bR<j?>"),fw:s("dq"),bP:s("ah<@>"),p6:s("dr"),br:s("fw<F>"),n8:s("bF"),M:s("cI<k>"),lp:s("iP"),O:s("C<@>"),C:s("a4"),mA:s("G"),eZ:s("j1"),A:s("bb"),k4:s("fE"),pk:s("nx"),kI:s("ny"),Y:s("bc"),gY:s("Fm"),nW:s("K<F>"),x:s("K<em>"),mj:s("K<T>"),fP:s("K<ck?>"),an:s("K<j?>(m9,eP)"),jN:s("K<eN?>"),co:s("cK"),w:s("fK"),cF:s("cL"),m6:s("ob"),bW:s("oc"),jx:s("od"),nZ:s("fP<@>"),U:s("n<@>"),gi:s("A<a3>"),aw:s("A<bR<@>>"),i4:s("A<bS>"),mK:s("A<ba>"),iw:s("A<K<~>>"),mr:s("A<ei>"),W:s("A<F>"),dO:s("A<q<j?>>"),ic:s("A<N<k,j>>"),d:s("A<N<k,j?>>"),e8:s("A<ju>"),i7:s("A<dG>"),ox:s("A<dH>"),my:s("A<bH>"),k1:s("A<cq>"),g2:s("A<hg>"),bo:s("A<hh>"),fU:s("A<+controller,sync(cR<bX>,Z)>"),lw:s("A<+controller,sync(cR<~>,Z)>"),kC:s("A<+(cW,k)>"),lE:s("A<eD>"),c0:s("A<c8>"),dw:s("A<b8<@>>"),s:s("A<k>"),en:s("A<eH>"),bs:s("A<ca>"),az:s("A<eT>"),fV:s("A<eU>"),g7:s("A<b_>"),dg:s("A<c1>"),p8:s("A<l3>"),bi:s("A<f7>"),gk:s("A<a1>"),dG:s("A<@>"),t:s("A<i>"),fQ:s("A<ab?>"),c:s("A<j?>"),mf:s("A<k?>"),iy:s("aM<@>"),T:s("fR"),m:s("F"),bJ:s("b3"),g:s("bo"),dX:s("bp<@>"),d9:s("ap"),kk:s("dA<dR>"),p3:s("dA<aJ>"),hI:s("dB<@>"),ba:s("q<bF>"),ck:s("q<bb>"),ip:s("q<F>"),ew:s("q<N<k,j>>"),J:s("q<N<k,j?>>"),eT:s("q<dG>"),hg:s("q<dH>"),a6:s("q<bH>"),jX:s("q<hg>"),kR:s("q<cs>"),bF:s("q<k>"),bR:s("q<eH>"),j:s("q<@>"),L:s("q<i>"),kS:s("q<j?>"),kM:s("jn"),jD:s("fX"),ia:s("V<k,cK>"),gc:s("V<k,k>"),eB:s("V<k,j?>"),a3:s("fY<@,@>"),cy:s("N<k,cY>"),dV:s("N<k,i>"),f:s("N<@,@>"),G:s("N<k,j?>"),iZ:s("ac<k,@>"),r:s("em"),a:s("eo"),dQ:s("cS"),aj:s("bs"),Z:s("dF"),P:s("T"),K:s("j"),ot:s("jQ"),gq:s("cq"),e:s("aV"),b0:s("cr"),lZ:s("Fs"),aK:s("+()"),ja:s("+(F,fx)"),cU:s("+(cW,k)"),mk:s("+(Z,F)"),kO:s("+basicSupport,supportsReadWriteUnsafe(Z,Z)"),mt:s("+(F?,F)"),gU:s("+conflicts,hidden,pending(i,i,i)"),lu:s("jU"),h:s("cs"),hF:s("dJ<k>"),cu:s("ez<@>"),g_:s("eA"),hq:s("bW"),ol:s("cv"),gE:s("ka"),l:s("as"),nv:s("kc"),h3:s("eF"),ha:s("b8<bX>"),ey:s("b8<~>"),ku:s("a_<q<i>>"),lI:s("kd"),hL:s("hn"),N:s("k"),eg:s("eH"),k5:s("ho"),n6:s("bK"),E:s("aW"),nw:s("cY"),em:s("eI"),hU:s("cy"),q:s("kl"),aJ:s("a6"),do:s("cz"),hM:s("qH"),mC:s("qI"),oR:s("c_"),nn:s("qJ"),p:s("ca"),cx:s("d_"),ph:s("eL<k,k>"),eo:s("cb"),jJ:s("kr"),e6:s("aH"),j2:s("hs"),n:s("eN"),lS:s("bv<k>"),u:s("dO"),oS:s("eR"),iq:s("aI<ca>"),ho:s("aI<i>"),Q:s("aI<~>"),R:s("dV<F>"),d4:s("eY<F>"),nI:s("r<ck>"),a7:s("r<F>"),hl:s("r<0&>"),os:s("r<k>"),jz:s("r<ca>"),k:s("r<Z>"),_:s("r<@>"),hy:s("r<i>"),D:s("r<~>"),nf:s("b_"),mp:s("d4<j?,j?>"),fA:s("f1"),k8:s("cE<F>"),fb:s("cE<q<i>>"),mI:s("lg<bS>"),jy:s("d9<bX,~()>"),af:s("d9<~,Z()>"),lU:s("d9<~,~()>"),aP:s("a8<ck>"),h1:s("a8<F>"),ex:s("a8<Z>"),F:s("a8<~>"),on:s("lr"),y:s("Z"),i:s("a1"),z:s("@"),mq:s("@(j)"),ng:s("@(j,as)"),S:s("i"),ma:s("bF?"),gK:s("K<T>?"),b3:s("ck?"),B:s("F?"),bE:s("q<bR<@>>?"),lH:s("q<@>?"),b:s("N<k,j?>?"),nh:s("em?"),X:s("j?"),dY:s("bH?"),lY:s("hf?"),jB:s("cs?"),v:s("k?"),f8:s("cY?"),a_:s("c_?"),he:s("eN?"),dd:s("b_?"),o9:s("Z?"),dz:s("a1?"),I:s("i?"),jh:s("cg?"),o:s("cg"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,as)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bf=J.jb.prototype
B.c=J.A.prototype
B.b=J.fQ.prototype
B.u=J.dy.prototype
B.a=J.cM.prototype
B.bg=J.bo.prototype
B.bh=J.ap.prototype
B.bJ=A.h3.prototype
B.bK=A.h5.prototype
B.V=A.h6.prototype
B.d=A.dF.prototype
B.aD=J.jJ.prototype
B.ag=J.d_.prototype
B.Z=new A.cG("Operation was cancelled")
B.ai=new A.fq(1,"hidden")
B.aN=new A.iq(127)
B.O=new A.it(0,"changed")
B.aj=new A.it(1,"deleted")
B.b3=new A.hD(A.am("hD<q<i>>"))
B.aO=new A.cH(B.b3)
B.aP=new A.fN(A.EX(),A.am("fN<i>"))
B.n=new A.ip()
B.aR=new A.iv()
B.ak=new A.lW()
B.aQ=new A.iu()
B.D={}
B.a7=new A.bm(B.D,[],A.am("bm<k,j>"))
B.cA=new A.mt()
B.aS=new A.iU()
B.E=new A.iT()
B.al=new A.iX()
B.am=new A.iY()
B.aT=new A.iY()
B.aU=new A.ja()
B.an=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aV=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.b_=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.aW=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aZ=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.aY=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aX=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.ao=function(hooks) { return hooks; }

B.e=new A.oi()
B.q=new A.jj()
B.b0=new A.on()
B.b1=new A.fX()
B.b2=new A.jF()
B.o=new A.q2()
B.cB=new A.ax(5e6)
B.cE=new A.ax(864e8)
B.S=new A.ax(5e5)
B.b7=new A.ax(3e8)
B.ar=new A.ax(1e6)
B.F=new A.qq()
B.k=new A.ku()
B.f=new A.kv()
B.P=new A.t6()
B.ap=new A.tD()
B.h=new A.la()
B.l=new A.ld()
B.t=new A.ll()
B.b4=new A.iJ(3,"ignore")
B.a_=new A.iJ(4,"replace")
B.w=new A.np(1,"full")
B.aq=new A.ax(0)
B.Q=new A.ax(16e3)
B.b5=new A.ax(2e5)
B.b6=new A.ax(3e5)
B.R=new A.ax(3e7)
B.cC=new A.ax(6048e8)
B.cD=new A.ax(7776e9)
B.a0=new A.bG(0,"text")
B.a1=new A.bG(1,"int")
B.a2=new A.bG(2,"real")
B.T=new A.bG(3,"bool")
B.a3=new A.bG(4,"date")
B.x=new A.bG(5,"enumValue")
B.a4=new A.bG(6,"json")
B.a5=new A.bG(7,"jsonList")
B.B=new A.bG(8,"ref")
B.b8=new A.fE(!1)
B.a6=new A.cJ("x",1,"opfsExternalLocks")
B.as=new A.cJ("y",2,"opfsExternalLocksWorkaround")
B.at=new A.eg("/database",0,"database")
B.au=new A.eg("/database-journal",1,"journal")
B.av=new A.fM(0,"live")
B.bi=new A.jh(null)
B.bj=new A.ji(null)
B.bk=new A.jk(255)
B.bl=new A.dB(B.aS,A.am("dB<k>"))
B.aw=s([13,10],t.t)
B.a9=new A.bZ(0,"unknown")
B.aa=new A.bZ(1,"integer")
B.ab=new A.bZ(2,"bigInt")
B.ac=new A.bZ(3,"float")
B.ad=new A.bZ(4,"text")
B.ae=new A.bZ(5,"blob")
B.af=new A.bZ(6,"$null")
B.aL=new A.bZ(7,"boolean")
B.ax=s([B.a9,B.aa,B.ab,B.ac,B.ad,B.ae,B.af,B.aL],A.am("A<bZ>"))
B.aM=new A.fq(0,"visible")
B.bm=s([B.aM,B.ai],A.am("A<fq>"))
B.bn=s([16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,452984832,905969664],t.t)
B.r=new A.cw(0,"clean")
B.X=new A.cw(1,"dirty")
B.aK=new A.cw(2,"inFlight")
B.N=new A.cw(3,"conflict")
B.Y=new A.cw(4,"error")
B.c4=new A.cw(5,"quarantine")
B.bo=s([B.r,B.X,B.aK,B.N,B.Y,B.c4],A.am("A<cw>"))
B.bc=new A.fF(0,"database")
B.bd=new A.fF(1,"journal")
B.ay=s([B.bc,B.bd],A.am("A<fF>"))
B.bp=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.be=new A.fM(1,"notArchived")
B.bq=s([B.av,B.be],A.am("A<fM>"))
B.br=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.aB=new A.h9(0,"fileUpload")
B.aC=new A.h9(1,"fileRemove")
B.bs=s([B.aB,B.aC],A.am("A<h9>"))
B.bb=new A.cJ("s",0,"opfsShared")
B.b9=new A.cJ("i",3,"indexedDb")
B.ba=new A.cJ("m",4,"inMemory")
B.bt=s([B.bb,B.a6,B.as,B.b9,B.ba],A.am("A<cJ>"))
B.bu=s([B.a0,B.a1,B.a2,B.T,B.a3,B.x,B.a4,B.a5,B.B],A.am("A<bG>"))
B.i=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.p=new A.es(0,"upsert")
B.H=new A.es(1,"archive")
B.I=new A.es(2,"restore")
B.bv=s([B.p,B.H,B.I],A.am("A<es>"))
B.bw=s([],A.am("A<cK>"))
B.by=s([],t.my)
B.m=s([],t.s)
B.bx=s([],t.t)
B.az=s([],t.dG)
B.v=s([],t.c)
B.bz=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.bA=s(["*"],t.s)
B.bB=s([B.at,B.au],A.am("A<eg>"))
B.bC=s(["id","updated"],t.s)
B.bD=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.aF=new A.cW(0,"opfs")
B.aG=new A.cW(1,"indexedDb")
B.bY=new A.cW(2,"inMemory")
B.bE=s([B.aF,B.aG,B.bY],A.am("A<cW>"))
B.bF=new A.bm(B.D,[],A.am("bm<k,k>"))
B.U=new A.bm(B.D,[],A.am("bm<k,i>"))
B.y=new A.bm(B.D,[],A.am("bm<k,j?>"))
B.bG=new A.bm(B.D,[],A.am("bm<i,N<k,j?>(N<k,j?>)>"))
B.bH=new A.js(11,"simpleSuccessResponse")
B.aA=new A.dE(0,"createOrUpdate")
B.bI=new A.dE(1,"create")
B.z=new A.dE(2,"update")
B.C=new A.dE(3,"archive")
B.G=new A.dE(4,"restore")
B.cF=new A.ph(2,"readWriteCreate")
B.aE=new A.jK(0,"native")
B.bO=new A.jK(1,"web")
B.J=new A.aV(0,0,0,!1)
B.A=new A.aV(0,0,0,!0)
B.bP=new A.aV(0,0,1,!1)
B.j=new A.aV(0,1,0,!1)
B.K=new A.aV(1,0,0,!1)
B.a8=new A.hS(!1,!1)
B.bQ=new A.hU(0,0,0)
B.bL={id:0,archived:1,hidden:2,extra:3}
B.bR=new A.cI(B.bL,4,t.M)
B.bM={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.bS=new A.cI(B.bM,11,t.M)
B.bT=new A.cI(B.D,0,t.M)
B.bN={open:0,close:1,health:2,capabilities:3,get:4,mutate_batch:5,compiled_query:6,analyze:7,wal_checkpoint:8,vacuum:9,prune_outbox:10,compact:11,run_maintenance:12,tx_begin:13,tx_get:14,tx_mutate_batch:15,tx_savepoint:16,tx_rollback_to:17,tx_release:18,tx_commit:19,tx_rollback:20,watch_query:21,watch_one:22,watch_cancel:23,sync_start:24,sync_stop:25,sync_now:26,sync_status:27,auth_required:28,sync_pause:29,sync_resume:30,sync_update_auth:31,sync_set_connectivity:32,file_probe:33,file_upload_begin:34,file_upload_chunk:35,file_upload_finish:36,file_list:37,file_open:38,file_remove:39,file_gc:40,file_enforce_storage_cap:41,conflicts_list:42,conflicts_get:43,conflicts_resolve:44,conflicts_accept_local:45,conflicts_accept_remote:46,conflicts_watch:47}
B.bU=new A.cI(B.bN,48,t.M)
B.bV=new A.hk(0,"insert")
B.bW=new A.hk(1,"update")
B.bX=new A.hk(2,"delete")
B.bZ=new A.ho(-1,null)
B.c_=new A.kh("_clientToken")
B.L=new A.bK(0,"closed")
B.c0=new A.bK(1,"opening")
B.aH=new A.bK(2,"offline")
B.W=new A.bK(3,"authRequired")
B.aI=new A.bK(4,"idle")
B.c1=new A.bK(5,"pulling")
B.c2=new A.bK(6,"pushing")
B.c3=new A.bK(7,"backoff")
B.aJ=new A.bK(8,"paused")
B.M=new A.aW(B.U,B.U,0,0,!1)
B.c5=A.bP("dl")
B.c6=A.bP("vr")
B.c7=A.bP("nx")
B.c8=A.bP("ny")
B.c9=A.bP("ob")
B.ca=A.bP("oc")
B.cb=A.bP("od")
B.cc=A.bP("F")
B.cd=A.bP("j")
B.ce=A.bP("qH")
B.cf=A.bP("qI")
B.cg=A.bP("qJ")
B.ch=A.bP("ca")
B.ah=new A.hq(!1)
B.ci=new A.hq(!0)
B.cj=new A.cB(14)
B.ck=new A.cB(522)
B.cl=new A.cB(778)
B.cm=new A.aK(B.h,A.Ec())
B.cn=new A.aK(B.h,A.E8())
B.co=new A.aK(B.h,A.Eg())
B.cp=new A.aK(B.h,A.E9())
B.cq=new A.aK(B.h,A.Ea())
B.cr=new A.aK(B.h,A.Eb())
B.cs=new A.aK(B.h,A.Ed())
B.ct=new A.aK(B.h,A.Ef())
B.cu=new A.aK(B.h,A.Eh())
B.cv=new A.aK(B.h,A.Ei())
B.cw=new A.aK(B.h,A.Ej())
B.cx=new A.aK(B.h,A.Ek())
B.cy=new A.aK(B.h,A.Ee())
B.cz=new A.i9(null,null,null,null,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.tF=null
$.e8=A.m([],A.am("A<j>"))
$.zl=null
$.xq=null
$.pJ=0
$.jO=A.DC()
$.wT=null
$.wS=null
$.ze=null
$.z1=null
$.zm=null
$.uX=null
$.v9=null
$.wr=null
$.tS=A.m([],A.am("A<q<j>?>"))
$.fh=null
$.id=null
$.ie=null
$.wi=!1
$.v=B.h
$.tU=null
$.xT=null
$.xU=null
$.xV=null
$.xW=null
$.w0=A.rG("_lastQuoRemDigits")
$.w1=A.rG("_lastQuoRemUsed")
$.hw=A.rG("_lastRemUsed")
$.w2=A.rG("_lastRem_nsh")
$.xI=""
$.xJ=null
$.yz=null
$.uB=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Fi","e9",()=>A.EH("_$dart_dartClosure"))
s($,"FV","lI",()=>A.vK(0))
s($,"Gi","A9",()=>B.h.bX(new A.vc(),A.am("K<~>")))
s($,"Gd","A6",()=>A.m([new J.jc()],A.am("A<hi>")))
s($,"FA","zF",()=>A.cA(A.qG({
toString:function(){return"$receiver$"}})))
s($,"FB","zG",()=>A.cA(A.qG({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"FC","zH",()=>A.cA(A.qG(null)))
s($,"FD","zI",()=>A.cA(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"FG","zL",()=>A.cA(A.qG(void 0)))
s($,"FH","zM",()=>A.cA(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"FF","zK",()=>A.cA(A.xF(null)))
s($,"FE","zJ",()=>A.cA(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"FJ","zO",()=>A.cA(A.xF(void 0)))
s($,"FI","zN",()=>A.cA(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"FN","wB",()=>A.C3())
s($,"Fo","di",()=>$.A9())
s($,"Fn","zC",()=>A.Cl(!1,B.h,t.y))
s($,"FX","zT",()=>{var q=t.z
return A.nJ(null,null,null,q,q)})
s($,"G1","zY",()=>A.vK(4096))
s($,"G_","zW",()=>new A.up().$0())
s($,"G0","zX",()=>new A.uo().$0())
s($,"FP","wC",()=>A.Bm(A.bx(A.m([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
r($,"FO","zQ",()=>A.vK(0))
s($,"Fj","zA",()=>A.l(["iso_8859-1:1987",B.q,"iso-ir-100",B.q,"iso_8859-1",B.q,"iso-8859-1",B.q,"latin1",B.q,"l1",B.q,"ibm819",B.q,"cp819",B.q,"csisolatin1",B.q,"iso-ir-6",B.n,"ansi_x3.4-1968",B.n,"ansi_x3.4-1986",B.n,"iso_646.irv:1991",B.n,"iso646-us",B.n,"us-ascii",B.n,"us",B.n,"ibm367",B.n,"cp367",B.n,"csascii",B.n,"ascii",B.n,"csutf8",B.k,"utf-8",B.k],t.N,A.am("dw")))
s($,"FU","ch",()=>A.rw(0))
s($,"FT","fo",()=>A.rw(1))
s($,"FR","wE",()=>$.fo().bA(0))
s($,"FQ","wD",()=>A.rw(1e4))
r($,"FS","zR",()=>A.ad("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"FW","zS",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"FY","zU",()=>A.ad("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"FZ","zV",()=>typeof URLSearchParams=="function")
s($,"G4","lJ",()=>A.lD(B.cd))
s($,"Ft","lG",()=>{A.Bw()
return $.pJ})
s($,"G5","A_",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"Fr","vl",()=>{var q=new A.tE(new DataView(new ArrayBuffer(A.Db(8))))
q.nk()
return q})
s($,"Fk","zB",()=>J.Ad(B.bK.gaA(A.Bn(A.bx(A.m([1],t.t)))),0,null).getInt8(0)===1?B.aT:B.am)
s($,"Fd","wx",()=>A.ad("^[\\w!#%&'*+\\-.^`|~]+$",!0))
s($,"G7","vm",()=>A.ad("\\r\\n|\\r|\\n",!0))
s($,"Fp","zD",()=>A.xu())
s($,"G2","wF",()=>A.ad("^[\\x00-\\x7F]+$",!0))
s($,"G3","zZ",()=>A.ad('["\\x00-\\x1F\\x7F]',!0))
s($,"Gm","Aa",()=>A.ad('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0))
s($,"G6","A0",()=>A.ad("(?:\\r\\n)?[ \\t]+",!0))
s($,"Ga","A3",()=>A.ad('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0))
s($,"G9","A2",()=>A.ad("\\\\(.)",!0))
s($,"Gh","A8",()=>A.ad('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0))
s($,"Gn","Ab",()=>A.ad("(?:"+$.A0().a+")*",!0))
s($,"Gc","A5",()=>A.xv())
s($,"Gj","wG",()=>A.ad("^[a-z0-9]{15}$",!0))
s($,"Fh","zz",()=>A.x3("declaredNames"))
s($,"Fz","wz",()=>new A.j())
s($,"FL","zP",()=>A.ad("^[0-9a-f]{64}$",!0))
s($,"G8","A1",()=>A.ad("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0))
s($,"Gf","vn",()=>new A.mD($.wy()))
s($,"Fw","zE",()=>new A.pF(A.ad("/",!0),A.ad("[^/]$",!0),A.ad("^/",!0)))
s($,"Fy","lH",()=>new A.r5(A.ad("[/\\\\]",!0),A.ad("[^/\\\\]$",!0),A.ad("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.ad("^[/\\\\](?![/\\\\])",!0)))
s($,"Fx","il",()=>new A.qM(A.ad("/",!0),A.ad("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.ad("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.ad("^/",!0)))
s($,"Fv","wy",()=>A.BP())
s($,"Fg","zy",()=>$.fo().c_(0,63).bA(0))
s($,"Ff","zx",()=>{var q=$.fo()
return q.c_(0,63).f8(0,q)})
s($,"Fe","lF",()=>A.xv())
s($,"FK","wA",()=>A.x3(null))
s($,"Ge","A7",()=>A.B7(A.m(["files","blocks"],t.s)))
s($,"Fl","vk",()=>{var q,p,o=A.I(t.N,A.am("eg"))
for(q=0;q<2;++q){p=B.bB[q]
o.j(0,p.c,p)}return o})
s($,"Gb","A4",()=>A.xu())
r($,"FM","im",()=>{var q="navigator"
return A.B0(A.B1(A.wp(A.zq(),q),"locks"))?A.wp(A.wp(A.zq(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.ep,ArrayBuffer:A.eo,ArrayBufferView:A.h4,DataView:A.h3,Float32Array:A.jv,Float64Array:A.jw,Int16Array:A.jx,Int32Array:A.jy,Int8Array:A.jz,Uint16Array:A.h5,Uint32Array:A.h6,Uint8ClampedArray:A.h7,CanvasPixelArray:A.h7,Uint8Array:A.dF})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.eq.$nativeSuperclassTag="ArrayBufferView"
A.hO.$nativeSuperclassTag="ArrayBufferView"
A.hP.$nativeSuperclassTag="ArrayBufferView"
A.cS.$nativeSuperclassTag="ArrayBufferView"
A.hQ.$nativeSuperclassTag="ArrayBufferView"
A.hR.$nativeSuperclassTag="ArrayBufferView"
A.bs.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3$1=function(a){return this(a)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$3$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$2$2=function(a,b){return this(a,b)}
Function.prototype.$2$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$1$2=function(a,b){return this(a,b)}
Function.prototype.$1$0=function(){return this()}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.EV
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
