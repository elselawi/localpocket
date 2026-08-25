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
if(a[b]!==s){A.HO(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.yC(b)
return new s(c,this)}:function(){if(s===null)s=A.yC(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.yC(a).prototype
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
yK(a,b,c,d){return{i:a,p:b,e:c,x:d}},
x5(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.yI==null){A.Hm()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.zU("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.vq
if(o==null)o=$.vq=A.x4(n)
p=q[o]}if(p!=null)return p
p=A.Hv(a)
if(p!=null)return p
if(typeof a=="function")return B.bB
s=Object.getPrototypeOf(a)
if(s==null)return B.aO
if(s===Object.prototype)return B.aO
if(typeof q=="function"){o=$.vq
if(o==null)o=$.vq=A.x4(n)
Object.defineProperty(q,o,{value:B.al,enumerable:false,writable:true,configurable:true})
return B.al}return B.al},
xQ(a,b){if(a<0||a>4294967295)throw A.b(A.ak(a,0,4294967295,"length",null))
return J.zs(new Array(a),b)},
zr(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
zq(a,b){if(a<0)throw A.b(A.O("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
zs(a,b){var s=A.l(a,b.i("z<0>"))
s.$flags=1
return s},
Dr(a,b){return J.z_(a,b)},
zt(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Du(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.zt(r))break;++b}return b},
zu(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.zt(r))break}return b},
dt(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.hg.prototype
return J.jS.prototype}if(typeof a=="string")return J.d_.prototype
if(a==null)return J.hh.prototype
if(typeof a=="boolean")return J.jR.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
if(typeof a=="symbol")return J.eC.prototype
if(typeof a=="bigint")return J.ba.prototype
return a}if(a instanceof A.j)return a
return J.x5(a)},
K(a){if(typeof a=="string")return J.d_.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
if(typeof a=="symbol")return J.eC.prototype
if(typeof a=="bigint")return J.ba.prototype
return a}if(a instanceof A.j)return a
return J.x5(a)},
ay(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
if(typeof a=="symbol")return J.eC.prototype
if(typeof a=="bigint")return J.ba.prototype
return a}if(a instanceof A.j)return a
return J.x5(a)},
He(a){if(typeof a=="number")return J.dN.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dc.prototype
return a},
Hf(a){if(typeof a=="number")return J.dN.prototype
if(typeof a=="string")return J.d_.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dc.prototype
return a},
x3(a){if(typeof a=="string")return J.d_.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dc.prototype
return a},
mA(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
if(typeof a=="symbol")return J.eC.prototype
if(typeof a=="bigint")return J.ba.prototype
return a}if(a instanceof A.j)return a
return J.x5(a)},
u(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dt(a).X(a,b)},
R(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.BA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.K(a).h(a,b)},
bU(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.BA(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.ay(a).j(a,b,c)},
bV(a,b){return J.ay(a).t(a,b)},
yY(a,b){return J.ay(a).E(a,b)},
yZ(a,b){return J.x3(a).ha(a,b)},
xy(a){return J.mA(a).lK(a)},
CB(a,b,c){return J.mA(a).hb(a,b,c)},
CC(a){return J.mA(a).lL(a)},
dw(a,b,c){return J.mA(a).hc(a,b,c)},
et(a,b){return J.ay(a).hf(a,b)},
CD(a,b,c){return J.He(a).cK(a,b,c)},
z_(a,b){return J.Hf(a).T(a,b)},
CE(a,b){return J.K(a).D(a,b)},
mI(a,b){return J.ay(a).a3(a,b)},
j1(a,b){return J.ay(a).dD(a,b)},
CF(a){return J.mA(a).gaJ(a)},
cc(a){return J.ay(a).gC(a)},
a1(a){return J.dt(a).gN(a)},
bW(a){return J.K(a).gB(a)},
fN(a){return J.K(a).gW(a)},
M(a){return J.ay(a).gu(a)},
mJ(a){return J.ay(a).ga1(a)},
ao(a){return J.K(a).gl(a)},
cR(a){return J.dt(a).gah(a)},
xz(a){return J.ay(a).gan(a)},
CG(a,b,c){return J.ay(a).f4(a,b,c)},
aH(a,b,c){return J.ay(a).co(a,b,c)},
CH(a,b,c){return J.x3(a).dL(a,b,c)},
CI(a,b){return J.K(a).sl(a,b)},
CJ(a,b,c,d,e){return J.ay(a).ab(a,b,c,d,e)},
mK(a,b){return J.ay(a).b5(a,b)},
z0(a,b){return J.ay(a).c2(a,b)},
CK(a,b){return J.x3(a).d7(a,b)},
CL(a,b){return J.x3(a).O(a,b)},
xA(a,b){return J.ay(a).cr(a,b)},
CM(a){return J.ay(a).dT(a)},
aw(a){return J.dt(a).m(a)},
z1(a,b){return J.ay(a).jX(a,b)},
jP:function jP(){},
jR:function jR(){},
hh:function hh(){},
as:function as(){},
d1:function d1(){},
km:function km(){},
dc:function dc(){},
bx:function bx(){},
ba:function ba(){},
eC:function eC(){},
z:function z(a){this.$ti=a},
jQ:function jQ(){},
pn:function pn(a){this.$ti=a},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dN:function dN(){},
hg:function hg(){},
jS:function jS(){},
d_:function d_(){}},A={xT:function xT(){},
ji(a,b,c){if(t.O.b(a))return new A.ic(a,b.i("@<0>").a_(c).i("ic<1,2>"))
return new A.dA(a,b.i("@<0>").a_(c).i("dA<1,2>"))},
zw(a){return new A.d0("Field '"+a+"' has been assigned during initialization.")},
zx(a){return new A.d0("Field '"+a+"' has not been initialized.")},
Dv(a){return new A.d0("Field '"+a+"' has already been initialized.")},
x8(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
an(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
eZ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
bF(a,b,c){return a},
yJ(a){var s,r
for(s=$.el.length,r=0;r<s;++r)if(a===$.el[r])return!0
return!1},
c5(a,b,c,d){A.aW(b,"start")
if(c!=null){A.aW(c,"end")
if(b>c)A.x(A.ak(b,0,c,"start",null))}return new A.c4(a,b,c,d.i("c4<0>"))},
dQ(a,b,c,d){if(t.O.b(a))return new A.dI(a,b,c.i("@<0>").a_(d).i("dI<1,2>"))
return new A.cA(a,b,c.i("@<0>").a_(d).i("cA<1,2>"))},
zO(a,b,c){var s="takeCount"
A.j2(b,s)
A.aW(b,s)
if(t.O.b(a))return new A.h1(a,b,c.i("h1<0>"))
return new A.e0(a,b,c.i("e0<0>"))},
zN(a,b,c){var s="count"
if(t.O.b(a)){A.j2(b,s)
A.aW(b,s)
return new A.ey(a,b,c.i("ey<0>"))}A.j2(b,s)
A.aW(b,s)
return new A.cE(a,b,c.i("cE<0>"))},
ar(){return new A.bf("No element")},
he(){return new A.bf("Too many elements")},
zp(){return new A.bf("Too few elements")},
kC(a,b,c,d){if(c-b<=32)A.E2(a,b,c,d)
else A.E1(a,b,c,d)},
E2(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.K(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
E1(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.R(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.R(a4+a5,2),e=f-i,d=f+i,c=J.K(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
p=J.u(a6.$2(a,a1),0)
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
A.kC(a3,a4,r-2,a6)
A.kC(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.u(a6.$2(c.h(a3,r),a),0))++r
while(J.u(a6.$2(c.h(a3,q),a1),0))--q
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
break}}A.kC(a3,r,q,a6)}else A.kC(a3,r,q,a6)},
uI:function uI(a){this.a=0
this.b=a},
uj:function uj(a){this.a=0
this.b=a},
df:function df(){},
jj:function jj(a,b){this.a=a
this.$ti=b},
dA:function dA(a,b){this.a=a
this.$ti=b},
ic:function ic(a,b){this.a=a
this.$ti=b},
i8:function i8(){},
uk:function uk(a,b){this.a=a
this.b=b},
bw:function bw(a,b){this.a=a
this.$ti=b},
d0:function d0(a){this.a=a},
ks:function ks(a){this.a=a},
bY:function bY(a){this.a=a},
xf:function xf(){},
rj:function rj(){},
F:function F(){},
S:function S(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a9:function a9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
dI:function dI(a,b,c){this.a=a
this.b=b
this.$ti=c},
k3:function k3(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a7:function a7(a,b,c){this.a=a
this.b=b
this.$ti=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
de:function de(a,b,c){this.a=a
this.b=b
this.$ti=c},
h3:function h3(a,b,c){this.a=a
this.b=b
this.$ti=c},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e0:function e0(a,b,c){this.a=a
this.b=b
this.$ti=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.$ti=c},
kS:function kS(a,b,c){this.a=a
this.b=b
this.$ti=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.$ti=c},
ey:function ey(a,b,c){this.a=a
this.b=b
this.$ti=c},
kB:function kB(a,b,c){this.a=a
this.b=b
this.$ti=c},
dJ:function dJ(a){this.$ti=a},
jA:function jA(a){this.$ti=a},
bp:function bp(a,b){this.a=a
this.$ti=b},
l6:function l6(a,b){this.a=a
this.$ti=b},
h6:function h6(){},
kY:function kY(){},
f1:function f1(){},
dW:function dW(a,b){this.a=a
this.$ti=b},
kP:function kP(a){this.a=a},
iM:function iM(){},
D2(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
D3(){throw A.b(A.Y("Cannot modify constant Set"))},
BU(a){var s=A.BT(a)
if(s!=null)return s
return"minified:"+a},
BA(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aw(a)
return s},
hG(a){var s,r=$.zE
if(r==null)r=$.zE=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hH(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
DT(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.d_(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kp(a){var s,r,q,p
if(a instanceof A.j)return A.bl(A.bu(a),null)
s=J.dt(a)
if(s===B.bA||s===B.bC||t.cx.b(a)){r=B.at(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bl(A.bu(a),null)},
zG(a){var s,r,q
if(a==null||typeof a=="number"||A.c9(a))return J.aw(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.dC)return a.m(0)
if(a instanceof A.fm)return a.lx(!0)
s=$.Cv()
for(r=0;r<1;++r){q=s[r].wq(a)
if(q!=null)return q}return"Instance of '"+A.kp(a)+"'"},
DP(){return Date.now()},
DS(){var s,r
if($.qO!==0)return
$.qO=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.qO=1e6
$.qP=new A.qN(r)},
DO(){if(!!self.location)return self.location.href
return null},
zD(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
DU(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.B)(a),++r){q=a[r]
if(!A.aE(q))throw A.b(A.em(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.a8(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.em(q))}return A.zD(p)},
zH(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.aE(q))throw A.b(A.em(q))
if(q<0)throw A.b(A.em(q))
if(q>65535)return A.DU(a)}return A.zD(a)},
DV(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bd(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.a8(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ak(a,0,1114111,null,null))},
DW(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.aG(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.R(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bc(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
y3(a){return a.c?A.bc(a).getUTCFullYear()+0:A.bc(a).getFullYear()+0},
y1(a){return a.c?A.bc(a).getUTCMonth()+1:A.bc(a).getMonth()+1},
qM(a){return a.c?A.bc(a).getUTCDate()+0:A.bc(a).getDate()+0},
y_(a){return a.c?A.bc(a).getUTCHours()+0:A.bc(a).getHours()+0},
y0(a){return a.c?A.bc(a).getUTCMinutes()+0:A.bc(a).getMinutes()+0},
y2(a){return a.c?A.bc(a).getUTCSeconds()+0:A.bc(a).getSeconds()+0},
zF(a){return a.c?A.bc(a).getUTCMilliseconds()+0:A.bc(a).getMilliseconds()+0},
DR(a){return B.c.aG((a.c?A.bc(a).getUTCDay()+0:A.bc(a).getDay()+0)+6,7)+1},
DQ(a){var s=a.$thrownJsError
if(s==null)return null
return A.a5(s)},
kq(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aC(a,s)
a.$thrownJsError=s
s.stack=b.m(0)}},
wW(a,b){var s,r="index"
if(!A.aE(b))return new A.bv(!0,b,r,null)
s=J.ao(a)
if(b<0||b>=s)return A.jM(b,s,a,null,r)
return A.rd(b,r)},
H5(a,b,c){if(a<0||a>c)return A.ak(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ak(b,a,c,"end",null)
return new A.bv(!0,b,"end",null)},
em(a){return new A.bv(!0,a,null,null)},
b(a){return A.aC(a,new Error())},
aC(a,b){var s
if(a==null)a=new A.cJ()
b.dartException=a
s=A.HP
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
HP(){return J.aw(this.dartException)},
x(a,b){throw A.aC(a,b==null?new Error():b)},
C(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.x(A.FJ(a,b,c),s)},
FJ(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cq("'"+s+"': Cannot "+o+" "+l+k+n)},
B(a){throw A.b(A.ap(a))},
cK(a){var s,r,q,p,o,n
a=A.BJ(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.rV(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
rW(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
zT(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
xU(a,b){var s=b==null,r=s?null:b.method
return new A.jT(a,r,s?null:b.receiver)},
I(a){if(a==null)return new A.kh(a)
if(a instanceof A.h2)return A.du(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.du(a,a.dartException)
return A.Gy(a)},
du(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Gy(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.a8(r,16)&8191)===10)switch(q){case 438:return A.du(a,A.xU(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.du(a,new A.hA())}}if(a instanceof TypeError){p=$.C4()
o=$.C5()
n=$.C6()
m=$.C7()
l=$.Ca()
k=$.Cb()
j=$.C9()
$.C8()
i=$.Cd()
h=$.Cc()
g=p.bB(s)
if(g!=null)return A.du(a,A.xU(s,g))
else{g=o.bB(s)
if(g!=null){g.method="call"
return A.du(a,A.xU(s,g))}else if(n.bB(s)!=null||m.bB(s)!=null||l.bB(s)!=null||k.bB(s)!=null||j.bB(s)!=null||m.bB(s)!=null||i.bB(s)!=null||h.bB(s)!=null)return A.du(a,new A.hA())}return A.du(a,new A.kX(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.hS()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.du(a,new A.bv(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.hS()
return a},
a5(a){var s
if(a instanceof A.h2)return a.b
if(a==null)return new A.ix(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ix(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
mB(a){if(a==null)return J.a1(a)
if(typeof a=="object")return A.hG(a)
return J.a1(a)},
Hb(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
Hc(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
FU(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.zh("Unsupported number of arguments for wrapped closure"))},
dr(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.H_(a,b)
a.$identity=s
return s},
H_(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.FU)},
CX(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.rt().constructor.prototype):Object.create(new A.fR(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.zb(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.CT(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.zb(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
CT(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.CP)}throw A.b("Error in functionType of tearoff")},
CU(a,b,c,d){var s=A.z9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
zb(a,b,c,d){if(c)return A.CW(a,b,d)
return A.CU(b.length,d,a,b)},
CV(a,b,c,d){var s=A.z9,r=A.CQ
switch(b?-1:a){case 0:throw A.b(new A.ky("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
CW(a,b,c){var s,r
if($.z7==null)$.z7=A.z6("interceptor")
if($.z8==null)$.z8=A.z6("receiver")
s=b.length
r=A.CV(s,c,a,b)
return r},
yC(a){return A.CX(a)},
CP(a,b){return A.iG(v.typeUniverse,A.bu(a.a),b)},
z9(a){return a.a},
CQ(a){return a.b},
z6(a){var s,r,q,p=new A.fR("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.O("Field name "+a+" not found.",null))},
x4(a){return v.getIsolateTag(a)},
HT(a,b){var s=$.t
if(s===B.f)return a
return s.he(a,b)},
BN(){return v.G},
IX(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Hv(a){var s,r,q,p,o,n=$.By.$1(a),m=$.wX[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xc[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Bg.$2(a,n)
if(q!=null){m=$.wX[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.xc[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.xe(s)
$.wX[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.xc[n]=s
return s}if(p==="-"){o=A.xe(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.BG(a,s)
if(p==="*")throw A.b(A.zU(n))
if(v.leafTags[n]===true){o=A.xe(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.BG(a,s)},
BG(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.yK(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
xe(a){return J.yK(a,!1,null,!!a.$iby)},
Hx(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.xe(s)
else return J.yK(s,c,null,null)},
Hm(){if(!0===$.yI)return
$.yI=!0
A.Hn()},
Hn(){var s,r,q,p,o,n,m,l
$.wX=Object.create(null)
$.xc=Object.create(null)
A.Hl()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.BI.$1(o)
if(n!=null){m=A.Hx(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Hl(){var s,r,q,p,o,n,m=B.b8()
m=A.fD(B.b9,A.fD(B.ba,A.fD(B.au,A.fD(B.au,A.fD(B.bb,A.fD(B.bc,A.fD(B.bd(B.at),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.By=new A.x9(p)
$.Bg=new A.xa(o)
$.BI=new A.xb(n)},
fD(a,b){return a(b)||b},
F1(a,b){var s
for(s=0;s<a.length;++s)if(!J.u(a[s],b[s]))return!1
return!0},
H3(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
xS(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a2("Illegal RegExp pattern ("+String(o)+")",a,null))},
HI(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eB){s=B.a.ac(a,c)
return b.b.test(s)}else return!J.yZ(b,B.a.ac(a,c)).gB(0)},
Bw(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
BJ(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
A(a,b,c){var s
if(typeof b=="string")return A.HK(a,b,c)
if(b instanceof A.eB){s=b.gl6()
s.lastIndex=0
return a.replace(s,A.Bw(c))}return A.HJ(a,b,c)},
HJ(a,b,c){var s,r,q,p
for(s=J.yZ(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gK())+c
r=p.gI()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
HK(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.BJ(b),"g"),A.Bw(c))},
Bc(a){return a},
BO(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.ha(0,a),s=new A.lj(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.Bc(B.a.q(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.Bc(B.a.ac(a,q)))
return s.charCodeAt(0)==0?s:s},
HL(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.BP(a,s,s+b.length,c)},
BP(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
au:function au(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
lS:function lS(a,b){this.a=a
this.b=b},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a){this.a=a},
lT:function lT(a){this.a=a},
fZ:function fZ(){},
nI:function nI(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
ed:function ed(a,b){this.a=a
this.$ti=b},
fi:function fi(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h_:function h_(){},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
ph:function ph(){},
hd:function hd(a,b){this.a=a
this.$ti=b},
qN:function qN(a){this.a=a},
hN:function hN(){},
rV:function rV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hA:function hA(){},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
kX:function kX(a){this.a=a},
kh:function kh(a){this.a=a},
h2:function h2(a,b){this.a=a
this.b=b},
ix:function ix(a){this.a=a
this.b=null},
dC:function dC(){},
nd:function nd(){},
ne:function ne(){},
rT:function rT(){},
rt:function rt(){},
fR:function fR(a,b){this.a=a
this.b=b},
ky:function ky(a){this.a=a},
bz:function bz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
po:function po(a){this.a=a},
pq:function pq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
Z:function Z(a,b){this.a=a
this.$ti=b},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aT:function aT(a,b){this.a=a
this.$ti=b},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aI:function aI(a,b){this.a=a
this.$ti=b},
jZ:function jZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hi:function hi(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
x9:function x9(a){this.a=a},
xa:function xa(a){this.a=a},
xb:function xb(a){this.a=a},
fm:function fm(){},
lP:function lP(){},
lQ:function lQ(){},
lR:function lR(){},
eB:function eB(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
fl:function fl(a){this.b=a},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eW:function eW(a,b){this.a=a
this.c=b},
m5:function m5(a,b,c){this.a=a
this.b=b
this.c=c},
vX:function vX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
HO(a){throw A.aC(A.zw(a),new Error())},
v(){throw A.aC(A.zx(""),new Error())},
BQ(){throw A.aC(A.Dv(""),new Error())},
xs(){throw A.aC(A.zw(""),new Error())},
ym(){var s=new A.lr("")
return s.b=s},
ul(a){var s=new A.lr(a)
return s.b=s},
lr:function lr(a){this.a=a
this.b=null},
FC(a){return a},
iN(a,b,c){},
br(a){var s,r,q
if(t.iy.b(a))return a
s=J.K(a)
r=A.aF(s.gl(a),null,!1,t.z)
for(q=0;q<s.gl(a);++q)r[q]=s.h(a,q)
return r},
zz(a,b,c){var s
A.iN(a,b,c)
s=new DataView(a,b)
return s},
cC(a,b,c){A.iN(a,b,c)
c=B.c.R(a.byteLength-b,4)
return new Int32Array(a,b,c)},
DJ(a){return new Int8Array(a)},
DK(a){return new Uint16Array(a)},
DL(a,b,c){A.iN(a,b,c)
return new Uint32Array(a,b,c)},
xZ(a){return new Uint8Array(a)},
bB(a,b,c){A.iN(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cQ(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.wW(b,a))},
cs(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.H5(a,b,c))
if(b==null)return c
return b},
eI:function eI(){},
eH:function eH(){},
hv:function hv(){},
mb:function mb(a){this.a=a},
hu:function hu(){},
eJ:function eJ(){},
d5:function d5(){},
bA:function bA(){},
ka:function ka(){},
kb:function kb(){},
kc:function kc(){},
kd:function kd(){},
ke:function ke(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
dT:function dT(){},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
it:function it(){},
y5(a,b){var s=b.c
return s==null?b.c=A.iE(a,"y",[b.x]):s},
zL(a){var s=a.w
if(s===6||s===7)return A.zL(a.x)
return s===11||s===12},
E0(a){return a.as},
BF(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
af(a){return A.w3(v.typeUniverse,a,!1)},
Hq(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.dp(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
dp(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dp(a1,s,a3,a4)
if(r===s)return a2
return A.As(a1,r,!0)
case 7:s=a2.x
r=A.dp(a1,s,a3,a4)
if(r===s)return a2
return A.Ar(a1,r,!0)
case 8:q=a2.y
p=A.fC(a1,q,a3,a4)
if(p===q)return a2
return A.iE(a1,a2.x,p)
case 9:o=a2.x
n=A.dp(a1,o,a3,a4)
m=a2.y
l=A.fC(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.yq(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.fC(a1,j,a3,a4)
if(i===j)return a2
return A.At(a1,k,i)
case 11:h=a2.x
g=A.dp(a1,h,a3,a4)
f=a2.y
e=A.Gu(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Aq(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.fC(a1,d,a3,a4)
o=a2.x
n=A.dp(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.yr(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.j6("Attempted to substitute unexpected RTI kind "+a0))}},
fC(a,b,c,d){var s,r,q,p,o=b.length,n=A.wd(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dp(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Gv(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.wd(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dp(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Gu(a,b,c,d){var s,r=b.a,q=A.fC(a,r,c,d),p=b.b,o=A.fC(a,p,c,d),n=b.c,m=A.Gv(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.lD()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
mw(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Hg(s)
return a.$S()}return null},
Hp(a,b){var s
if(A.zL(b))if(a instanceof A.dC){s=A.mw(a)
if(s!=null)return s}return A.bu(a)},
bu(a){if(a instanceof A.j)return A.o(a)
if(Array.isArray(a))return A.a8(a)
return A.yy(J.dt(a))},
a8(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
o(a){var s=a.$ti
return s!=null?s:A.yy(a)},
yy(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.FS(a,s)},
FS(a,b){var s=a instanceof A.dC?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Fb(v.typeUniverse,s.name)
b.$ccache=r
return r},
Hg(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.w3(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
iU(a){return A.bt(A.o(a))},
yH(a){var s=A.mw(a)
return A.bt(s==null?A.bu(a):s)},
yB(a){var s
if(a instanceof A.fm)return a.kW()
s=a instanceof A.dC?A.mw(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.cR(a).a
if(Array.isArray(a))return A.a8(a)
return A.bu(a)},
bt(a){var s=a.r
return s==null?a.r=new A.w1(a):s},
H8(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.iG(v.typeUniverse,A.yB(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Av(v.typeUniverse,s,A.yB(q[r]))
return A.iG(v.typeUniverse,s,a)},
bT(a){return A.bt(A.w3(v.typeUniverse,a,!1))},
FR(a){var s=this
s.b=A.Gs(s)
return s.b(a)},
Gs(a){var s,r,q,p
if(a===t.K)return A.G_
if(A.en(a))return A.G3
s=a.w
if(s===6)return A.FO
if(s===1)return A.AW
if(s===7)return A.FV
r=A.Gr(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.en)){a.f="$i"+q
if(q==="q")return A.FY
if(a===t.m)return A.FX
return A.G2}}else if(s===10){p=A.H3(a.x,a.y)
return p==null?A.AW:p}return A.FM},
Gr(a){if(a.w===8){if(a===t.S)return A.aE
if(a===t.i||a===t.o)return A.FZ
if(a===t.N)return A.G1
if(a===t.y)return A.c9}return null},
FQ(a){var s=this,r=A.FL
if(A.en(s))r=A.Fr
else if(s===t.K)r=A.Fq
else if(A.fH(s)){r=A.FN
if(s===t.aV)r=A.aZ
else if(s===t.v)r=A.ac
else if(s===t.o9)r=A.AK
else if(s===t.jh)r=A.Fp
else if(s===t.dz)r=A.AL
else if(s===t.A)r=A.AM}else if(s===t.S)r=A.ai
else if(s===t.N)r=A.J
else if(s===t.y)r=A.fy
else if(s===t.o)r=A.Fo
else if(s===t.i)r=A.ej
else if(s===t.m)r=A.b_
s.a=r
return s.a(a)},
FM(a){var s=this
if(a==null)return A.fH(s)
return A.Ht(v.typeUniverse,A.Hp(a,s),s)},
FO(a){if(a==null)return!0
return this.x.b(a)},
G2(a){var s,r=this
if(a==null)return A.fH(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dt(a)[s]},
FY(a){var s,r=this
if(a==null)return A.fH(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dt(a)[s]},
FX(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
AV(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
FL(a){var s=this
if(a==null){if(A.fH(s))return a}else if(s.b(a))return a
throw A.aC(A.AQ(a,s),new Error())},
FN(a){var s=this
if(a==null||s.b(a))return a
throw A.aC(A.AQ(a,s),new Error())},
AQ(a,b){return new A.iC("TypeError: "+A.Ah(a,A.bl(b,null)))},
Ah(a,b){return A.jC(a)+": type '"+A.bl(A.yB(a),null)+"' is not a subtype of type '"+b+"'"},
bS(a,b){return new A.iC("TypeError: "+A.Ah(a,b))},
FV(a){var s=this
return s.x.b(a)||A.y5(v.typeUniverse,s).b(a)},
G_(a){return a!=null},
Fq(a){if(a!=null)return a
throw A.aC(A.bS(a,"Object"),new Error())},
G3(a){return!0},
Fr(a){return a},
AW(a){return!1},
c9(a){return!0===a||!1===a},
fy(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aC(A.bS(a,"bool"),new Error())},
AK(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aC(A.bS(a,"bool?"),new Error())},
ej(a){if(typeof a=="number")return a
throw A.aC(A.bS(a,"double"),new Error())},
AL(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aC(A.bS(a,"double?"),new Error())},
aE(a){return typeof a=="number"&&Math.floor(a)===a},
ai(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aC(A.bS(a,"int"),new Error())},
aZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aC(A.bS(a,"int?"),new Error())},
FZ(a){return typeof a=="number"},
Fo(a){if(typeof a=="number")return a
throw A.aC(A.bS(a,"num"),new Error())},
Fp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aC(A.bS(a,"num?"),new Error())},
G1(a){return typeof a=="string"},
J(a){if(typeof a=="string")return a
throw A.aC(A.bS(a,"String"),new Error())},
ac(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aC(A.bS(a,"String?"),new Error())},
b_(a){if(A.AV(a))return a
throw A.aC(A.bS(a,"JSObject"),new Error())},
AM(a){if(a==null)return a
if(A.AV(a))return a
throw A.aC(A.bS(a,"JSObject?"),new Error())},
B7(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bl(a[q],b)
return s},
Gh(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.B7(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bl(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
AT(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bl(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bl(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bl(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bl(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bl(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bl(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bl(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bl(a.x,b)+">"
if(m===8){p=A.Gx(a.x)
o=a.y
return o.length>0?p+("<"+A.B7(o,b)+">"):p}if(m===10)return A.Gh(a,b)
if(m===11)return A.AT(a,b,null)
if(m===12)return A.AT(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
Gx(a){var s=A.BT(a)
if(s!=null)return s
return"minified:"+a},
Fc(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Fb(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.w3(a,b,!1)
else if(typeof m=="number"){s=m
r=A.iF(a,5,"#")
q=A.wd(s)
for(p=0;p<s;++p)q[p]=r
o=A.iE(a,b,q)
n[b]=o
return o}else return m},
Fa(a,b){return A.AI(a.tR,b)},
F9(a,b){return A.AI(a.eT,b)},
w3(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Au(a,null,b,!1)
r.set(b,s)
return s},
iG(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Au(a,b,c,!0)
q.set(c,r)
return r},
Av(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.yq(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Au(a,b,c,d){return A.F_(A.EU(a,b,c,d))},
dn(a,b){b.a=A.FQ
b.b=A.FR
return b},
iF(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.c0(null,null)
s.w=b
s.as=c
r=A.dn(a,s)
a.eC.set(c,r)
return r},
As(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.F7(a,b,r,c)
a.eC.set(r,s)
return s},
F7(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.en(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.fH(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.c0(null,null)
q.w=6
q.x=b
q.as=c
return A.dn(a,q)},
Ar(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.F5(a,b,r,c)
a.eC.set(r,s)
return s},
F5(a,b,c,d){var s,r
if(d){s=b.w
if(A.en(b)||b===t.K)return b
else if(s===1)return A.iE(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.c0(null,null)
r.w=7
r.x=b
r.as=c
return A.dn(a,r)},
F8(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.c0(null,null)
s.w=13
s.x=b
s.as=q
r=A.dn(a,s)
a.eC.set(q,r)
return r},
iD(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
F4(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
iE(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iD(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.c0(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.dn(a,r)
a.eC.set(p,q)
return q},
yq(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.iD(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.c0(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.dn(a,o)
a.eC.set(q,n)
return n},
At(a,b,c){var s,r,q="+"+(b+"("+A.iD(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.c0(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.dn(a,s)
a.eC.set(q,r)
return r},
Aq(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iD(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iD(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.F4(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.c0(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.dn(a,p)
a.eC.set(r,o)
return o},
yr(a,b,c,d){var s,r=b.as+("<"+A.iD(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.F6(a,b,c,r,d)
a.eC.set(r,s)
return s},
F6(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.wd(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dp(a,b,r,0)
m=A.fC(a,c,r,0)
return A.yr(a,n,m,c!==m)}}l=new A.c0(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.dn(a,l)},
EU(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
F_(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.EW(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Am(a,r,l,k,!1)
else if(q===46)r=A.Am(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ef(a.u,a.e,k.pop()))
break
case 94:k.push(A.F8(a.u,k.pop()))
break
case 35:k.push(A.iF(a.u,5,"#"))
break
case 64:k.push(A.iF(a.u,2,"@"))
break
case 126:k.push(A.iF(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.EY(a,k)
break
case 38:A.EX(a,k)
break
case 63:p=a.u
k.push(A.As(p,A.ef(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Ar(p,A.ef(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.EV(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.An(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.F0(a.u,a.e,o)
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
return A.ef(a.u,a.e,m)},
EW(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Am(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Fc(s,o.x)[p]
if(n==null)A.x('No "'+p+'" in "'+A.E0(o)+'"')
d.push(A.iG(s,o,n))}else d.push(p)
return m},
EY(a,b){var s,r=a.u,q=A.Al(a,b),p=b.pop()
if(typeof p=="string")b.push(A.iE(r,p,q))
else{s=A.ef(r,a.e,p)
switch(s.w){case 11:b.push(A.yr(r,s,q,a.n))
break
default:b.push(A.yq(r,s,q))
break}}},
EV(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Al(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ef(p,a.e,o)
q=new A.lD()
q.a=s
q.b=n
q.c=m
b.push(A.Aq(p,r,q))
return
case-4:b.push(A.At(p,b.pop(),s))
return
default:throw A.b(A.j6("Unexpected state under `()`: "+A.r(o)))}},
EX(a,b){var s=b.pop()
if(0===s){b.push(A.iF(a.u,1,"0&"))
return}if(1===s){b.push(A.iF(a.u,4,"1&"))
return}throw A.b(A.j6("Unexpected extended operation "+A.r(s)))},
Al(a,b){var s=b.splice(a.p)
A.An(a.u,a.e,s)
a.p=b.pop()
return s},
ef(a,b,c){if(typeof c=="string")return A.iE(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.EZ(a,b,c)}else return c},
An(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ef(a,b,c[s])},
F0(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ef(a,b,c[s])},
EZ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.j6("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.j6("Bad index "+c+" for "+b.m(0)))},
Ht(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aG(a,b,null,c,null)
r.set(c,s)}return s},
aG(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.en(d))return!0
s=b.w
if(s===4)return!0
if(A.en(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aG(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aG(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aG(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aG(a,b.x,c,d,e))return!1
return A.aG(a,A.y5(a,b),c,d,e)}if(s===6)return A.aG(a,p,c,d,e)&&A.aG(a,b.x,c,d,e)
if(q===7){if(A.aG(a,b,c,d.x,e))return!0
return A.aG(a,b,c,A.y5(a,d),e)}if(q===6)return A.aG(a,b,c,p,e)||A.aG(a,b,c,d.x,e)
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
if(!A.aG(a,j,c,i,e)||!A.aG(a,i,e,j,c))return!1}return A.AU(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.AU(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.FW(a,b,c,d,e)}if(o&&q===10)return A.G0(a,b,c,d,e)
return!1},
AU(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aG(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aG(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aG(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aG(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aG(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
FW(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iG(a,b,r[o])
return A.AJ(a,p,null,c,d.y,e)}return A.AJ(a,b.y,null,c,d.y,e)},
AJ(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aG(a,b[s],d,e[s],f))return!1
return!0},
G0(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aG(a,r[s],c,q[s],e))return!1
return!0},
fH(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.en(a))if(s!==6)r=s===7&&A.fH(a.x)
return r},
en(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
AI(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
wd(a){return a>0?new Array(a):v.typeUniverse.sEA},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
lD:function lD(){this.c=this.b=this.a=null},
w1:function w1(a){this.a=a},
lA:function lA(){},
iC:function iC(a){this.a=a},
Er(){var s,r,q
if(self.scheduleImmediate!=null)return A.GA()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.dr(new A.u0(s),1)).observe(r,{childList:true})
return new A.u_(s,r,q)}else if(self.setImmediate!=null)return A.GB()
return A.GC()},
Es(a){self.scheduleImmediate(A.dr(new A.u1(a),0))},
Et(a){self.setImmediate(A.dr(new A.u2(a),0))},
Eu(a){A.yd(B.x,a)},
yd(a,b){var s=B.c.R(a.a,1000)
return A.F2(s<0?0:s,b)},
zP(a,b){var s=B.c.R(a.a,1000)
return A.F3(s<0?0:s,b)},
F2(a,b){var s=new A.iB(!0)
s.nX(a,b)
return s},
F3(a,b){var s=new A.iB(!1)
s.nY(a,b)
return s},
h(a){return new A.i2(new A.p($.t,a.i("p<0>")),a.i("i2<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.AN(a,b)},
e(a,b){b.au(a)},
d(a,b){b.bm(A.I(a),A.a5(a))},
AN(a,b){var s,r,q=new A.ws(b),p=new A.wt(b)
if(a instanceof A.p)a.lv(q,p,t.z)
else{s=t.z
if(a instanceof A.p)a.bo(q,p,s)
else{r=new A.p($.t,t._)
r.a=8
r.c=a
r.lv(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.t.eR(new A.wI(s),t.H,t.S,t.z)},
bC(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cw(null)
else{s=c.a
s===$&&A.v()
s.p()}return}else if(b===1){s=c.c
if(s!=null){r=A.I(a)
q=A.a5(a)
s.ai(new A.ad(r,q))}else{s=A.I(a)
r=A.a5(a)
q=c.a
q===$&&A.v()
q.by(s,r)
c.a.p()}return}if(a instanceof A.il){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.v()
r.t(0,s)
A.iY(new A.wq(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.v()
s.tp(p,!1).aK(new A.wr(c,b),t.P)
return}}A.AN(a,b)},
Bb(a){var s=a.a
s===$&&A.v()
return new A.b7(s,A.o(s).i("b7<1>"))},
Ev(a,b){var s=new A.ll(b.i("ll<0>"))
s.nT(a,b)
return s},
AX(a,b){return A.Ev(a,b)},
EQ(a){return new A.il(a,1)},
di(a){return new A.il(a,0)},
Ap(a,b,c){return 0},
fP(a){var s
if(t.C.b(a)){s=a.gc3()
if(s!=null)return s}return B.H},
ha(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.I(q)
r=A.a5(q)
p=new A.p($.t,b.i("p<0>"))
o=s
n=r
m=A.iO(o,n)
if(m==null)o=new A.ad(o,n==null?A.fP(o):n)
else o=m
p.c4(o)
return p}return b.i("y<0>").b(l)?l:A.bk(l,b)},
c_(a,b){var s=a==null?b.a(a):a,r=new A.p($.t,b.i("p<0>"))
r.aY(s)
return r},
Dj(a,b){var s
if(!b.b(null))throw A.b(A.b1(null,"computation","The type parameter is not nullable"))
s=new A.p($.t,b.i("p<0>"))
A.co(a,new A.oN(null,s,b))
return s},
xN(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.p($.t,b.i("p<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.oP(i,h,g,f)
try{for(n=J.M(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bo(new A.oO(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cw(A.l([],b.i("z<0>")))
return n}i.a=A.aF(n,null,!1,b.i("0?"))}catch(l){p=A.I(l)
o=A.a5(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.iO(m,k)
if(j==null)m=new A.ad(m,k==null?A.fP(m):k)
else m=j
n.c4(m)
return n}else{i.d=p
i.c=o}}return f},
xM(a,b,c,d){var s=new A.oI(d,null,b,c),r=$.t,q=new A.p(r,c.i("p<0>"))
if(r!==B.f)s=r.eR(s,c.i("0/"),t.K,t.l)
a.dc(new A.bP(q,2,null,s,a.$ti.i("@<1>").a_(c).i("bP<1,2>")))
return q},
Dh(a,b){var s,r,q,p=A.l([],b.i("z<ij<0>>"))
for(s=a.length,r=b.i("ij<0>"),q=0;q<a.length;a.length===s||(0,A.B)(a),++q)p.push(new A.ij(a[q],r))
if(p.length===0)return A.c_(A.l([],b.i("z<0>")),b.i("q<0>"))
s=new A.p($.t,b.i("p<q<0>>"))
A.EK(p,new A.oJ(new A.ae(s,b.i("ae<q<0>>")),p,b))
return s},
G7(a){return a!=null},
EK(a,b){var s,r={},q=r.a=r.b=0,p=new A.uY(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.B)(a),++q)a[q].t9(p)},
iO(a,b){var s,r,q,p=$.t
if(p===B.f)return null
s=p.m0(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.kq(r,q)
return s},
ek(a,b){var s
if($.t!==B.f){s=A.iO(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gc3()
if(b==null){A.kq(a,B.H)
b=B.H}}else b=B.H
else if(t.C.b(a))A.kq(a,b)
return new A.ad(a,b)},
EJ(a,b,c){var s=new A.p(b,c.i("p<0>"))
s.a=8
s.c=a
return s},
bk(a,b){var s=new A.p($.t,b.i("p<0>"))
s.a=8
s.c=a
return s},
v3(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.y7()
b.c4(new A.ad(new A.bv(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lc(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eg()
b.fd(p.a)
A.eb(b,q)
return}b.a^=2
b.b.cu(new A.v4(p,b))},
eb(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.eC(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.eb(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gbR()===k.gbR())}else f=!1
if(f){f=g.a
r=f.c
f.b.eC(r.a,r.b)
return}j=$.t
if(j!==k)$.t=k
else j=null
f=s.a.c
if((f&15)===8)new A.v8(s,g,p).$0()
else if(q){if((f&1)!==0)new A.v7(s,m).$0()}else if((f&2)!==0)new A.v6(g,s).$0()
if(j!=null)$.t=j
f=s.c
if(f instanceof A.p){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.h0(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.v3(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.h0(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
B1(a,b){if(t.ng.b(a))return b.eR(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.cV(a,t.z,t.K)
throw A.b(A.b1(a,"onError",u.w))},
G6(){var s,r
for(s=$.fA;s!=null;s=$.fA){$.iQ=null
r=s.b
$.fA=r
if(r==null)$.iP=null
s.a.$0()}},
Gt(){$.yz=!0
try{A.G6()}finally{$.iQ=null
$.yz=!1
if($.fA!=null)$.yS().$1(A.Bh())}},
B9(a){var s=new A.lk(a),r=$.iP
if(r==null){$.fA=$.iP=s
if(!$.yz)$.yS().$1(A.Bh())}else $.iP=r.b=s},
Gq(a){var s,r,q,p=$.fA
if(p==null){A.B9(a)
$.iQ=$.iP
return}s=new A.lk(a)
r=$.iQ
if(r==null){s.b=p
$.fA=$.iQ=s}else{q=r.b
s.b=q
$.iQ=r.b=s
if(q==null)$.iP=s}},
iY(a){var s,r=null,q=$.t
if(B.f===q){A.wG(r,r,B.f,a)
return}if(B.f===q.gj0().a)s=B.f.gbR()===q.gbR()
else s=!1
if(s){A.wG(r,r,q,q.bF(a,t.H))
return}s=$.t
s.cu(s.eq(a))},
y9(a,b){var s=null,r=b.i("cr<0>"),q=new A.cr(s,s,s,s,r)
q.ar(a)
q.kA()
return new A.b7(q,r.i("b7<1>"))},
Ic(a,b){return new A.bR(A.bF(a,"stream",t.K),b.i("bR<0>"))},
y8(a,b,c,d,e){return d?new A.fs(b,null,c,a,e.i("fs<0>")):new A.cr(b,null,c,a,e.i("cr<0>"))},
e_(a,b,c){return new A.i3(b,a,c.i("i3<0>"))},
mu(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.I(q)
r=A.a5(q)
$.t.eC(s,r)}},
EH(a,b,c,d,e,f){var s=$.t,r=e?1:0,q=c!=null?32:0,p=A.lp(s,b,f),o=A.ug(s,c),n=d==null?A.wJ():d
return new A.dg(a,p,o,s.bF(n,t.H),s,r|q,f.i("dg<0>"))},
Eo(a){return new A.tS(a)},
lp(a,b,c){var s=b==null?A.GE():b
return a.cV(s,t.H,c)},
ug(a,b){if(b==null)b=A.GF()
if(t.b9.b(b))return a.eR(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.cV(b,t.z,t.K)
throw A.b(A.O("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
G8(a){},
Ga(a,b){$.t.eC(a,b)},
G9(){},
Ag(a,b){var s=$.t,r=new A.fe(s,b.i("fe<0>"))
A.iY(r.gl8())
if(a!=null)r.c=s.bF(a,t.H)
return r},
Fz(a,b,c){var s=a.A()
if(s!==$.dv())s.aO(new A.wv(b,c))
else b.ai(c)},
FA(a,b,c){var s=a.A()
if(s!==$.dv())s.aO(new A.ww(b,c))
else b.c5(c)},
co(a,b){var s=$.t
if(s===B.f)return s.ji(a,b)
return s.ji(a,s.eq(b))},
Ed(a,b){var s,r=$.t
if(r===B.f)return r.jh(a,b)
s=r.he(b,t.hU)
return $.t.jh(a,s)},
xr(a,b,c,d){return A.Gp(a,c,b,d)},
Gp(a,b,c,d){return $.t.m6(c,b).aT(a,d)},
Gn(a,b,c,d,e){A.iS(d,e)},
iS(a,b){A.Gq(new A.wD(a,b))},
wE(a,b,c,d){var s,r=$.t
if(r===c)return d.$0()
$.t=c
s=r
try{r=d.$0()
return r}finally{$.t=s}},
wF(a,b,c,d,e){var s,r=$.t
if(r===c)return d.$1(e)
$.t=c
s=r
try{r=d.$1(e)
return r}finally{$.t=s}},
yA(a,b,c,d,e,f){var s,r=$.t
if(r===c)return d.$2(e,f)
$.t=c
s=r
try{r=d.$2(e,f)
return r}finally{$.t=s}},
B5(a,b,c,d){return d},
B6(a,b,c,d){return d},
B4(a,b,c,d){return d},
Gm(a,b,c,d,e){return null},
wG(a,b,c,d){var s,r
if(B.f!==c){s=B.f.gbR()
r=c.gbR()
d=s!==r?c.eq(d):c.jc(d,t.H)}A.B9(d)},
Gl(a,b,c,d,e){return A.yd(d,B.f!==c?c.jc(e,t.H):e)},
Gk(a,b,c,d,e){e=c.tC(e,t.H,t.hU)
return A.zP(d,e)},
Go(a,b,c,d){A.BH(d)},
B3(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.xO(o,o,o,s,s)
r.E(0,e)}else r=o
s=new A.lv(c.glm(),c.glo(),c.gln(),c.gli(),c.glj(),c.glh(),c.gkQ(),c.gj0(),c.gkJ(),c.gkI(),c.gld(),c.gkT(),c.giL(),c.gj9(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.mm(s,q)
p=d.a
if(p!=null)s.as=new A.ml(s,p)}if(r!=null)s.at=new A.mn(s,r)
return s},
u0:function u0(a){this.a=a},
u_:function u_(a,b,c){this.a=a
this.b=b
this.c=c},
u1:function u1(a){this.a=a},
u2:function u2(a){this.a=a},
iB:function iB(a){this.a=a
this.b=null
this.c=0},
w_:function w_(a,b){this.a=a
this.b=b},
vZ:function vZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a,b){this.a=a
this.b=!1
this.$ti=b},
ws:function ws(a){this.a=a},
wt:function wt(a){this.a=a},
wI:function wI(a){this.a=a},
wq:function wq(a,b){this.a=a
this.b=b},
wr:function wr(a,b){this.a=a
this.b=b},
ll:function ll(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
u4:function u4(a){this.a=a},
u5:function u5(a){this.a=a},
u7:function u7(a){this.a=a},
u8:function u8(a,b){this.a=a
this.b=b},
u6:function u6(a,b){this.a=a
this.b=b},
u3:function u3(a){this.a=a},
il:function il(a,b){this.a=a
this.b=b},
m7:function m7(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
fr:function fr(a,b){this.a=a
this.$ti=b},
ad:function ad(a,b){this.a=a
this.b=b},
aY:function aY(a,b){this.a=a
this.$ti=b},
e7:function e7(a,b,c,d,e,f,g){var _=this
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
i7:function i7(){},
i3:function i3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
oN:function oN(a,b,c){this.a=a
this.b=b
this.c=c},
oP:function oP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oO:function oO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oI:function oI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kT:function kT(a,b){this.a=a
this.b=b},
oJ:function oJ(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a,b,c){this.c=a
this.d=b
this.$ti=c},
ij:function ij(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
uZ:function uZ(a,b){this.a=a
this.b=b},
v_:function v_(a,b){this.a=a
this.b=b},
uY:function uY(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(){},
ax:function ax(a,b){this.a=a
this.$ti=b},
ae:function ae(a,b){this.a=a
this.$ti=b},
bP:function bP(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
p:function p(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
v0:function v0(a,b){this.a=a
this.b=b},
v5:function v5(a,b){this.a=a
this.b=b},
v4:function v4(a,b){this.a=a
this.b=b},
v2:function v2(a,b){this.a=a
this.b=b},
v1:function v1(a,b){this.a=a
this.b=b},
v8:function v8(a,b,c){this.a=a
this.b=b
this.c=c},
v9:function v9(a,b){this.a=a
this.b=b},
va:function va(a){this.a=a},
v7:function v7(a,b){this.a=a
this.b=b},
v6:function v6(a,b){this.a=a
this.b=b},
vb:function vb(a,b){this.a=a
this.b=b},
vc:function vc(a,b,c){this.a=a
this.b=b
this.c=c},
vd:function vd(a,b){this.a=a
this.b=b},
lk:function lk(a){this.a=a
this.b=null},
a3:function a3(){},
ry:function ry(a,b){this.a=a
this.b=b},
rz:function rz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rA:function rA(a,b){this.a=a
this.b=b},
rB:function rB(a,b){this.a=a
this.b=b},
rw:function rw(a){this.a=a},
rx:function rx(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(){},
dl:function dl(){},
vT:function vT(a){this.a=a},
vS:function vS(a){this.a=a},
m8:function m8(){},
i4:function i4(){},
cr:function cr(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
fs:function fs(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
b7:function b7(a,b){this.a=a
this.$ti=b},
dg:function dg(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
lh:function lh(){},
tS:function tS(a){this.a=a},
tR:function tR(a){this.a=a},
iy:function iy(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
aK:function aK(){},
ui:function ui(a,b,c){this.a=a
this.b=b
this.c=c},
uh:function uh(a){this.a=a},
fq:function fq(){},
lz:function lz(){},
bO:function bO(a,b){this.b=a
this.a=null
this.$ti=b},
fd:function fd(a,b){this.b=a
this.c=b
this.a=null},
uR:function uR(){},
dk:function dk(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
vB:function vB(a,b){this.a=a
this.b=b},
fe:function fe(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
bR:function bR(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
id:function id(a){this.$ti=a},
cO:function cO(a,b){this.b=a
this.$ti=b},
vz:function vz(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
wv:function wv(a,b){this.a=a
this.b=b},
ww:function ww(a,b){this.a=a
this.b=b},
ih:function ih(){},
fh:function fh(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
ee:function ee(a,b,c){this.b=a
this.a=b
this.$ti=c},
ie:function ie(a,b){this.a=a
this.$ti=b},
fo:function fo(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
i6:function i6(a,b,c){this.a=a
this.b=b
this.$ti=c},
wn:function wn(a,b){this.a=a
this.b=b},
wp:function wp(a,b){this.a=a
this.b=b},
wo:function wo(a,b){this.a=a
this.b=b},
wl:function wl(a,b){this.a=a
this.b=b},
wm:function wm(a,b){this.a=a
this.b=b},
wk:function wk(a,b){this.a=a
this.b=b},
wh:function wh(a,b){this.a=a
this.b=b},
mm:function mm(a,b){this.a=a
this.b=b},
wg:function wg(a,b){this.a=a
this.b=b},
wf:function wf(a,b){this.a=a
this.b=b},
wj:function wj(a,b){this.a=a
this.b=b},
wi:function wi(a,b){this.a=a
this.b=b},
ml:function ml(a,b){this.a=a
this.b=b},
mn:function mn(a,b){this.a=a
this.b=b},
mk:function mk(){},
lv:function lv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.at=n
_.ax=null
_.ay=o},
uN:function uN(a,b,c){this.a=a
this.b=b
this.c=c},
uP:function uP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uM:function uM(a,b){this.a=a
this.b=b},
uO:function uO(a,b,c){this.a=a
this.b=b
this.c=c},
lW:function lW(){},
vI:function vI(a,b,c){this.a=a
this.b=b
this.c=c},
vH:function vH(a,b){this.a=a
this.b=b},
vJ:function vJ(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a){this.a=a},
wD:function wD(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
xO(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cM(d.i("@<0>").a_(e).i("cM<1,2>"))
b=A.yE()}else{if(A.Bo()===b&&A.Bn()===a)return new A.dh(d.i("@<0>").a_(e).i("dh<1,2>"))
if(a==null)a=A.yD()}else{if(b==null)b=A.yE()
if(a==null)a=A.yD()}return A.EI(a,b,c,d,e)},
Ai(a,b){var s=a[b]
return s===a?null:s},
yo(a,b,c){if(c==null)a[b]=a
else a[b]=c},
yn(){var s=Object.create(null)
A.yo(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
EI(a,b,c,d,e){var s=c!=null?c:new A.uL(d)
return new A.ia(a,b,s,d.i("@<0>").a_(e).i("ia<1,2>"))},
hk(a,b,c,d){if(b==null){if(a==null)return new A.bz(c.i("@<0>").a_(d).i("bz<1,2>"))
b=A.yE()}else{if(A.Bo()===b&&A.Bn()===a)return new A.hi(c.i("@<0>").a_(d).i("hi<1,2>"))
if(a==null)a=A.yD()}return A.ET(a,b,null,c,d)},
m(a,b,c){return A.Hb(a,new A.bz(b.i("@<0>").a_(c).i("bz<1,2>")))},
E(a,b){return new A.bz(a.i("@<0>").a_(b).i("bz<1,2>"))},
ET(a,b,c,d,e){return new A.im(a,b,new A.vx(d),d.i("@<0>").a_(e).i("im<1,2>"))},
ps(a){return new A.cN(a.i("cN<0>"))},
aU(a){return new A.cN(a.i("cN<0>"))},
ag(a,b){return A.Hc(a,new A.cN(b.i("cN<0>")))},
yp(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
fj(a,b,c){var s=new A.dj(a,b,c.i("dj<0>"))
s.c=a.e
return s},
FF(a,b){return J.u(a,b)},
FG(a){return J.a1(a)},
bb(a,b,c){var s=A.hk(null,null,b,c)
a.ad(0,new A.pr(s,b,c))
return s},
eD(a,b,c){var s=A.hk(null,null,b,c)
s.E(0,a)
return s},
pt(a,b){var s,r,q=A.ps(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.B)(a),++r)q.t(0,b.a(a[r]))
return q},
eE(a,b){var s=A.ps(b)
s.E(0,a)
return s},
Dw(a,b){var s=t.bP
return J.z_(s.a(a),s.a(b))},
pN(a){var s,r
if(A.yJ(a))return"{...}"
s=new A.ab("")
try{r={}
$.el.push(a)
s.a+="{"
r.a=!0
a.ad(0,new A.pO(r,s))
s.a+="}"}finally{$.el.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
xV(a){return new A.hl(A.aF(A.Dx(null),null,!1,a.i("0?")),a.i("hl<0>"))},
Dx(a){return 8},
cM:function cM(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
vf:function vf(a){this.a=a},
ve:function ve(a){this.a=a},
dh:function dh(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
ia:function ia(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
uL:function uL(a){this.a=a},
ec:function ec(a,b){this.a=a
this.$ti=b},
lE:function lE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
im:function im(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
vx:function vx(a){this.a=a},
cN:function cN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
vy:function vy(a){this.a=a
this.c=this.b=null},
dj:function dj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
pr:function pr(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
lK:function lK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
aV:function aV(){},
D:function D(){},
U:function U(){},
pM:function pM(a){this.a=a},
pO:function pO(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.$ti=b},
lN:function lN(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ma:function ma(){},
hr:function hr(){},
f2:function f2(a,b){this.a=a
this.$ti=b},
hl:function hl(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
c1:function c1(){},
iw:function iw(){},
iH:function iH(){},
B_(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.I(r)
q=A.a2(String(s),null,null)
throw A.b(q)}q=A.wx(p)
return q},
wx(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.lI(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.wx(a[s])
return a},
Fn(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Cl()
else s=new Uint8Array(o)
for(r=J.K(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Fm(a,b,c,d){var s=a?$.Ck():$.Cj()
if(s==null)return null
if(0===c&&d===b.length)return A.AG(s,b)
return A.AG(s,b.subarray(c,d))},
AG(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
z3(a,b,c,d,e,f){if(B.c.aG(f,4)!==0)throw A.b(A.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a2("Invalid base64 padding, more than two '=' characters",a,b))},
Ez(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.K(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.C(f)
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
if(3-k===1){r&2&&A.C(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.C(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.h(b,q)
if(o<0||o>255)break;++q}throw A.b(A.b1(b,"Not a byte value at index "+q+": 0x"+B.c.my(s.h(b,q),16),null))},
Ey(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.a8(f,2),i=f&3,h=$.yT()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.C(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.b(A.a2(l,a,r))
s&2&&A.C(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.a2(l,a,r))
s&2&&A.C(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.A6(a,r+1,c,-m-1)}throw A.b(A.a2(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a2(k,a,r))},
Ew(a,b,c,d){var s=A.Ex(a,b,c),r=(d&3)+(s-b),q=B.c.a8(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Ce()},
Ex(a,b,c){var s,r=c,q=r,p=0
for(;;){if(!(q>b&&p<2))break
A:{--q
s=a.charCodeAt(q)
if(s===61){++p
r=q
break A}if((s|32)===100){if(q===b)break;--q
s=a.charCodeAt(q)}if(s===51){if(q===b)break;--q
s=a.charCodeAt(q)}if(s===37){++p
r=q
break A}break}}return r},
A6(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.a2("Invalid padding character",a,b))
return-s-1},
D8(a){return B.c9.h(0,a.toLowerCase())},
zv(a,b,c){return new A.hj(a,b)},
FI(a){return a.aq()},
ER(a,b){return new A.vu(a,[],A.H0())},
ES(a,b,c){var s,r=new A.ab("")
A.Ak(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ak(a,b,c,d){var s=A.ER(b,c)
s.i0(a)},
AH(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
lI:function lI(a,b){this.a=a
this.b=b
this.c=null},
vt:function vt(a){this.a=a},
lJ:function lJ(a){this.a=a},
vr:function vr(a,b,c){this.b=a
this.c=b
this.a=c},
wb:function wb(){},
wa:function wa(){},
j3:function j3(){},
m9:function m9(){},
j4:function j4(a){this.a=a},
w2:function w2(a,b){this.a=a
this.b=b},
mY:function mY(){},
j9:function j9(){},
ln:function ln(a){this.a=0
this.b=a},
uf:function uf(a){this.c=null
this.a=0
this.b=a},
ua:function ua(){},
tY:function tY(a,b){this.a=a
this.b=b},
j8:function j8(){},
lm:function lm(){this.a=0},
u9:function u9(a,b){this.a=a
this.b=b},
n2:function n2(){},
f9:function f9(a){this.a=a},
lq:function lq(a,b){this.a=a
this.b=b
this.c=0},
jk:function jk(){},
m2:function m2(a,b,c){this.a=a
this.b=b
this.$ti=c},
e9:function e9(a,b,c){this.a=a
this.b=b
this.$ti=c},
jl:function jl(){},
aq:function aq(){},
nM:function nM(a){this.a=a},
dK:function dK(){},
hj:function hj(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
pp:function pp(){},
jW:function jW(a){this.b=a},
vs:function vs(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
jV:function jV(a){this.a=a},
vv:function vv(){},
vw:function vw(a,b){this.a=a
this.b=b},
vu:function vu(a,b,c){this.c=a
this.a=b
this.b=c},
jX:function jX(){},
jY:function jY(a){this.a=a},
kN:function kN(){},
vY:function vY(a,b){this.a=a
this.b=b},
iA:function iA(){},
m4:function m4(a){this.a=a},
w9:function w9(a,b,c){this.a=a
this.b=b
this.c=c},
l3:function l3(){},
l4:function l4(){},
mc:function mc(a){this.b=this.a=0
this.c=a},
wc:function wc(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
hX:function hX(a){this.a=a},
cP:function cP(a){this.a=a
this.b=16
this.c=0},
mo:function mo(){},
yl(a,b){var s=A.EF(a,b)
if(s==null)throw A.b(A.a2("Could not parse BigInt",a,null))
return s},
EC(a,b){var s,r,q=$.cv(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.b4(0,$.yU()).f2(0,A.ub(s))
s=0
o=0}}if(b)return q.bI(0)
return q},
A7(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
ED(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.v.tE(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.A7(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.A7(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cv()
l=A.bq(j,i)
return new A.aA(l===0?!1:c,i,l)},
EF(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Cf().dE(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.EC(p,q)
if(o!=null)return A.ED(o,2,q)
return null},
bq(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
yj(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
ub(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bq(4,s)
return new A.aA(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bq(1,s)
return new A.aA(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.a8(a,16)
r=A.bq(2,s)
return new A.aA(r===0?!1:o,s,r)}r=B.c.R(B.c.glO(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.R(a,65536)}r=A.bq(r,s)
return new A.aA(r===0?!1:o,s,r)},
yk(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.C(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.C(d)
d[s]=0}return b+c},
Ad(a,b,c,d){var s,r,q,p,o,n=B.c.R(c,16),m=B.c.aG(c,16),l=16-m,k=B.c.c0(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dZ(p,l)
r&2&&A.C(d)
d[s+n+1]=(o|q)>>>0
q=B.c.c0((p&k)>>>0,m)}r&2&&A.C(d)
d[n]=q},
A8(a,b,c,d){var s,r,q,p,o=B.c.R(c,16)
if(B.c.aG(c,16)===0)return A.yk(a,b,o,d)
s=b+o+1
A.Ad(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.C(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
EE(a,b,c,d){var s,r,q,p,o=B.c.R(c,16),n=B.c.aG(c,16),m=16-n,l=B.c.c0(1,n)-1,k=B.c.dZ(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.c0((q&l)>>>0,m)
s&2&&A.C(d)
d[r]=(p|k)>>>0
k=B.c.dZ(q,n)}s&2&&A.C(d)
d[j]=k},
uc(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
EA(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.c.a8(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=B.c.a8(r,16)}s&2&&A.C(e)
e[b]=r},
lo(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.c.a8(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.C(e)
e[q]=r&65535
r=0-(B.c.a8(r,16)&1)}},
Ae(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=p&65535
r=B.c.R(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.C(d)
d[e]=n&65535
r=B.c.R(n,65536)}},
EB(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.ko((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Hk(a){return A.mB(a)},
xI(a,b){return new A.jE(new WeakMap(),a,b.i("jE<0>"))},
xJ(a){if(A.c9(a)||typeof a=="number"||typeof a=="string"||a instanceof A.fm)A.Dd(a)},
Dd(a){throw A.b(A.b1(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
uX(a,b){var s=$.Cg()
s=s==null?null:new s(A.dr(A.HT(a,b),1))
return new A.lC(s,b.i("lC<0>"))},
av(a){var s=A.hH(a,null)
if(s!=null)return s
throw A.b(A.a2(a,null,null))},
H7(a){var s=A.DT(a)
if(s!=null)return s
throw A.b(A.a2("Invalid double",a,null))},
Dc(a,b){a=A.aC(a,new Error())
a.stack=b.m(0)
throw a},
aF(a,b,c,d){var s,r=c?J.zr(a,d):J.xQ(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
k_(a,b,c){var s,r=A.l([],c.i("z<0>"))
for(s=J.M(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
P(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("z<0>"))
s=A.l([],b.i("z<0>"))
for(r=J.M(a);r.k();)s.push(r.gn())
return s},
d2(a,b){var s=A.k_(a,!1,b)
s.$flags=3
return s},
db(a,b,c){var s,r,q,p,o
A.aW(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ak(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.zH(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.E9(a,b,c)
if(r)a=J.xA(a,c)
if(b>0)a=J.mK(a,b)
s=A.P(a,t.S)
return A.zH(s)},
E9(a,b,c){var s=a.length
if(b>=s)return""
return A.DV(a,b,c==null||c>s?s:c)},
ah(a,b){return new A.eB(a,A.xS(a,!1,b,!1,!1,""))},
Hj(a,b){return a==null?b==null:a===b},
rC(a,b,c){var s=J.M(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
ye(){var s,r,q=A.DO()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.zX
if(s!=null&&q===$.zW)return s
r=A.l2(q)
$.zX=r
$.zW=q
return r},
fv(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.k){s=$.Ch()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.i.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bd(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Fh(a){var s,r,q
if(!$.Ci())return A.Fi(a)
s=new URLSearchParams()
a.ad(0,new A.w8(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.q(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
y7(){return A.a5(new Error())},
xF(a,b,c,d,e,f,g){var s=A.DW(a,b,c,d,e,f,g,0,!0)
return new A.b2(s==null?new A.ok(a,b,c,d,e,f,g,0).$0():s,0,!0)},
D4(){return new A.b2(Date.now(),0,!1)},
ol(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ak(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ak(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.b1(b,s,u.B))
A.bF(c,"isUtc",t.y)
return a},
D5(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ze(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ju(a){if(a>=10)return""+a
return"0"+a},
dH(a,b,c){return new A.az(a+1000*b+1e6*c)},
ez(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.b1(b,"name","No enum value with that name"))},
jC(a){if(typeof a=="number"||A.c9(a)||a==null)return J.aw(a)
if(typeof a=="string")return JSON.stringify(a)
return A.zG(a)},
zg(a,b){A.bF(a,"error",t.K)
A.bF(b,"stackTrace",t.l)
A.Dc(a,b)},
j6(a){return new A.j5(a)},
O(a,b){return new A.bv(!1,null,b,a)},
b1(a,b,c){return new A.bv(!0,a,b,c)},
j2(a,b){return a},
aJ(a){var s=null
return new A.cD(s,s,!1,s,s,a)},
rd(a,b){return new A.cD(null,null,!0,a,b,"Value not in range")},
ak(a,b,c,d,e){return new A.cD(b,c,!0,a,d,"Invalid value")},
zK(a,b,c,d){if(a<b||a>c)throw A.b(A.ak(a,b,c,d,null))
return a},
aX(a,b,c){if(0>a||a>c)throw A.b(A.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ak(b,a,c,"end",null))
return b}return c},
aW(a,b){if(a<0)throw A.b(A.ak(a,0,null,b,null))
return a},
zo(a,b){var s=b.b
return new A.hb(s,!0,a,null,"Index out of range")},
jM(a,b,c,d,e){return new A.hb(b,!0,a,e,"Index out of range")},
Dn(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.jM(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cq(a)},
zU(a){return new A.kW(a)},
w(a){return new A.bf(a)},
ap(a){return new A.jn(a)},
zh(a){return new A.lB(a)},
a2(a,b,c){return new A.b4(a,b,c)},
Dp(a,b,c){var s,r
if(A.yJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.el.push(a)
try{A.G4(a,s)}finally{$.el.pop()}r=A.rC(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
pm(a,b,c){var s,r
if(A.yJ(a))return b+"..."+c
s=new A.ab(b)
$.el.push(a)
try{r=s
r.a=A.rC(r.a,a,", ")}finally{$.el.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
G4(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.r(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.k()){if(j<=4){b.push(A.r(p))
return}r=A.r(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.k();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.r(p)
r=A.r(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
d6(a,b,c,d,e,f,g){var s
if(B.h===c){s=J.a1(a)
b=J.a1(b)
return A.eZ(A.an(A.an($.es(),s),b))}if(B.h===d){s=J.a1(a)
b=J.a1(b)
c=J.a1(c)
return A.eZ(A.an(A.an(A.an($.es(),s),b),c))}if(B.h===e){s=J.a1(a)
b=J.a1(b)
c=J.a1(c)
d=J.a1(d)
return A.eZ(A.an(A.an(A.an(A.an($.es(),s),b),c),d))}if(B.h===f){s=J.a1(a)
b=J.a1(b)
c=J.a1(c)
d=J.a1(d)
e=J.a1(e)
return A.eZ(A.an(A.an(A.an(A.an(A.an($.es(),s),b),c),d),e))}if(B.h===g){s=J.a1(a)
b=J.a1(b)
c=J.a1(c)
d=J.a1(d)
e=J.a1(e)
f=J.a1(f)
return A.eZ(A.an(A.an(A.an(A.an(A.an(A.an($.es(),s),b),c),d),e),f))}s=J.a1(a)
b=J.a1(b)
c=J.a1(c)
d=J.a1(d)
e=J.a1(e)
f=J.a1(f)
g=J.a1(g)
g=A.eZ(A.an(A.an(A.an(A.an(A.an(A.an(A.an($.es(),s),b),c),d),e),f),g))
return g},
zB(a){var s,r,q=$.es()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.B)(a),++r)q=A.an(q,J.a1(a[r]))
return A.eZ(q)},
FD(a,b){return 65536+((a&1023)<<10)+(b&1023)},
l2(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.zV(a4<a4?B.a.q(a5,0,a4):a5,5,a3).gmB()
else if(s===32)return A.zV(B.a.q(a5,5,a4),0,a3).gmB()}r=A.aF(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.B8(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.B8(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.a6(a5,"\\",n))if(p>0)h=B.a.a6(a5,"\\",p-1)||B.a.a6(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.a6(a5,"..",n)))h=m>n+2&&B.a.a6(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.a6(a5,"file",0)){if(p<=0){if(!B.a.a6(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.q(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.cW(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.a6(a5,"http",0)){if(i&&o+3===n&&B.a.a6(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.cW(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.a6(a5,"https",0)){if(i&&o+4===n&&B.a.a6(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.cW(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bQ(a4<a5.length?B.a.q(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.yt(a5,0,q)
else{if(q===0)A.fu(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.AC(a5,c,p-1):""
a=A.AA(a5,p,o,!1)
i=o+1
if(i<n){a0=A.hH(B.a.q(a5,i,n),a3)
d=A.w4(a0==null?A.x(A.a2("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.AB(a5,n,m,a3,j,a!=null)
a2=m<l?A.w5(a5,m+1,l,a3):a3
return A.iJ(j,b,a,d,a1,a2,l<a4?A.Az(a5,l+1,a4):a3)},
Ej(a){return A.yw(a,0,a.length,B.k,!1)},
l1(a,b,c){throw A.b(A.a2("Illegal IPv4 address, "+a,b,c))},
Eg(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.l1("each part must be in the range 0..255",a,r)}A.l1("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.l1(k,a,q)}l=p+1
s&2&&A.C(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.l1(k,a,q)
p=l}A.l1("IPv4 address should contain exactly 4 parts",a,q)},
Eh(a,b,c){var s
if(b===c)throw A.b(A.a2("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Ei(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.zY(a,b,c)
return!0},
Ei(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.b4(o,a,r)
s=r
break}return new A.b4("Unexpected character",a,r-1)}if(s-1===b)return new A.b4(o,a,s)
return new A.b4("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.b4("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.b4("Invalid IPvFuture address character",a,s)}},
zY(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.t1(a1)
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
A:{k=l^48
j=!1
if(k<=9)i=k
else{h=l|32
if(h>=97&&h<=102)i=h-87
else break A
m=j}if(p<o+4){n=n*16+i;++p
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Eg(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.c.a8(n,8)
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
B.d.ab(s,b,16,s,c)
B.d.hq(s,c,b,0)}}return s},
iJ(a,b,c,d,e,f,g){return new A.iI(a,b,c,d,e,f,g)},
Aw(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
fu(a,b,c){throw A.b(A.a2(c,a,b))},
Fe(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.D(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
w4(a,b){if(a!=null&&a===A.Aw(b))return null
return a},
AA(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.fu(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Ff(a,r,s)
if(p<s){o=p+1
q=A.AF(a,B.a.a6(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Eh(a,r,s)
m=B.a.q(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.bU(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.AF(a,B.a.a6(a,"25",o)?s+3:o,c,"%25")}else q=""
A.zY(a,b,s)
return"["+B.a.q(a,b,s)+q+"]"}return A.Fk(a,b,c)},
Ff(a,b,c){var s=B.a.bU(a,"%",b)
return s>=b&&s<c?s:c},
AF(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.ab(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.yu(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.ab("")
m=i.a+=B.a.q(a,r,s)
if(n)o=B.a.q(a,s,s+3)
else if(o==="%")A.fu(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.ab("")
if(r<s){i.a+=B.a.q(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.q(a,r,s)
if(i==null){i=new A.ab("")
n=i}else n=i
n.a+=j
m=A.ys(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.q(a,b,c)
if(r<c){j=B.a.q(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Fk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.yu(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.ab("")
l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.q(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.ab("")
if(r<s){q.a+=B.a.q(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.fu(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.ab("")
m=q}else m=q
m.a+=l
k=A.ys(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.q(a,b,c)
if(r<c){l=B.a.q(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
yt(a,b,c){var s,r,q
if(b===c)return""
if(!A.Ay(a.charCodeAt(b)))A.fu(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.fu(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.q(a,b,c)
return A.Fd(r?a.toLowerCase():a)},
Fd(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
AC(a,b,c){if(a==null)return""
return A.iK(a,b,c,16,!1,!1)},
AB(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.iK(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.O(s,"/"))s="/"+s
return A.Fj(s,e,f)},
Fj(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.O(a,"/")&&!B.a.O(a,"\\"))return A.yv(a,!s||c)
return A.ei(a)},
w5(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.O("Both query and queryParameters specified",null))
return A.iK(a,b,c,256,!0,!1)}if(d==null)return null
return A.Fh(d)},
Fi(a){var s={},r=new A.ab("")
s.a=""
a.ad(0,new A.w6(new A.w7(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Az(a,b,c){if(a==null)return null
return A.iK(a,b,c,256,!0,!1)},
yu(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.x8(s)
p=A.x8(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bd(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.q(a,b,b+3).toUpperCase()
return null},
ys(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.j3(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.db(s,0,null)},
iK(a,b,c,d,e,f){var s=A.AE(a,b,c,d,e,f)
return s==null?B.a.q(a,b,c):s},
AE(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.yu(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.fu(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.ys(o)}if(p==null){p=new A.ab("")
l=p}else l=p
l.a=(l.a+=B.a.q(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.q(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
AD(a){if(B.a.O(a,"."))return!0
return B.a.bT(a,"/.")!==-1},
ei(a){var s,r,q,p,o,n
if(!A.AD(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.L(s,"/")},
yv(a,b){var s,r,q,p,o,n
if(!A.AD(a))return!b?A.Ax(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga1(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Ax(s[0])
return B.b.L(s,"/")},
Ax(a){var s,r,q=a.length
if(q>=2&&A.Ay(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.q(a,0,s)+"%3A"+B.a.ac(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Fl(a,b){if(a.vl("package")&&a.c==null)return A.Ba(b,0,b.length)
return-1},
Fg(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.O("Invalid URL encoding",null))}}return s},
yw(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.k===d)return B.a.q(a,b,c)
else p=new A.bY(B.a.q(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.O("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.O("Truncated URI",null))
p.push(A.Fg(a,o+1))
o+=2}else p.push(r)}}return d.hj(p)},
Ay(a){var s=a|32
return 97<=s&&s<=122},
zV(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a2(k,a,r))}}if(q<0&&r>b)throw A.b(A.a2(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga1(j)
if(p!==44||r!==n+7||!B.a.a6(a,"base64",n+1))throw A.b(A.a2("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aq.vE(a,m,s)
else{l=A.AE(a,m,s,256,!0,!1)
if(l!=null)a=B.a.cW(a,m,s,l)}return new A.t0(a,j,c)},
B8(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Ao(a){if(a.b===7&&B.a.O(a.a,"package")&&a.c<=0)return A.Ba(a.a,a.e,a.f)
return-1},
Ba(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
FB(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
ud:function ud(){},
ue:function ue(){},
lC:function lC(a,b){this.a=a
this.$ti=b},
w8:function w8(a){this.a=a},
ok:function ok(a,b,c,d,e,f,g,h){var _=this
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
az:function az(a){this.a=a},
uS:function uS(){},
a6:function a6(){},
j5:function j5(a){this.a=a},
cJ:function cJ(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cD:function cD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hb:function hb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cq:function cq(a){this.a=a},
kW:function kW(a){this.a=a},
bf:function bf(a){this.a=a},
jn:function jn(a){this.a=a},
ki:function ki(){},
hS:function hS(){},
lB:function lB(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(){},
n:function n(){},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
Q:function Q(){},
j:function j(){},
m6:function m6(){},
kJ:function kJ(){this.b=this.a=0},
ri:function ri(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
ab:function ab(a){this.a=a},
t1:function t1(a){this.a=a},
iI:function iI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
w7:function w7(a,b){this.a=a
this.b=b},
w6:function w6(a){this.a=a},
t0:function t0(a,b,c){this.a=a
this.b=b
this.c=c},
bQ:function bQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
lw:function lw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
jE:function jE(a,b,c){this.a=a
this.b=b
this.$ti=c},
Dy(a){return a},
Ds(a){return a},
ya(a){return a},
Dq(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.AM(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Di(a){return new v.G.Promise(A.bD(new A.oM(a)))},
kg:function kg(a){this.a=a},
oM:function oM(a){this.a=a},
oK:function oK(a){this.a=a},
oL:function oL(a){this.a=a},
wA(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Ft,a)
s[$.er()]=a
return s},
ct(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Fu,a)
s[$.er()]=a
return s},
bD(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.Fv,a)
s[$.er()]=a
return s},
mq(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.Fw,a)
s[$.er()]=a
return s},
fz(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.Fx,a)
s[$.er()]=a
return s},
yx(a){var s
if(typeof a=="function")throw A.b(A.O("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.Fy,a)
s[$.er()]=a
return s},
Ft(a){return a.$0()},
Fu(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
Fv(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
Fw(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
Fx(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
Fy(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
AZ(a){return a==null||A.c9(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
eo(a){if(A.AZ(a))return a
return new A.xd(new A.dh(t.mp)).$1(a)},
yG(a,b){return a[b]},
Bi(a,b,c){return a[b].apply(a,c)},
GU(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.b.E(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a_(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ax(s,b.i("ax<0>"))
a.then(A.dr(new A.xj(r),1),A.dr(new A.xk(r),1))
return s},
AY(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
mx(a){if(A.AY(a))return a
return new A.wQ(new A.dh(t.mp)).$1(a)},
xd:function xd(a){this.a=a},
xj:function xj(a){this.a=a},
xk:function xk(a){this.a=a},
wQ:function wQ(a){this.a=a},
BB(a,b){return Math.max(a,b)},
zI(){return B.av},
zJ(){return $.xw()},
vo:function vo(){},
vp:function vp(a){this.a=a},
jB:function jB(){},
W:function W(){},
n4:function n4(a){this.a=a},
n5:function n5(a){this.a=a},
n6:function n6(a,b){this.a=a
this.b=b},
n7:function n7(a){this.a=a},
n8:function n8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n9:function n9(a){this.a=a},
jx:function jx(a){this.$ti=a},
hf:function hf(a,b){this.a=a
this.$ti=b},
dP:function dP(a,b){this.a=a
this.$ti=b},
ft:function ft(){},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
jw:function jw(){},
zA(){throw A.b(A.Y(u.O))},
kf:function kf(){},
kZ:function kZ(){},
aB(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.db(m,0,null)},
bZ:function bZ(a){this.a=a},
ew:function ew(){this.a=null},
jI:function jI(){},
oR:function oR(){},
m0(a){var s=new Uint32Array(A.br(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.m_(s,r,a,q,new Uint32Array(16))},
lZ:function lZ(){},
vL:function vL(){},
m_:function m_(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kw:function kw(a,b){this.a=a
this.b=b},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
mZ:function mZ(){},
Bd(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.kw("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.dB)){s=J.aw(a)
if(B.a.O(s,"TypeError: "))s=B.a.ac(s,11)
a=new A.dB(s,b.b)}return a},
B2(a,b,c){A.zg(A.Bd(a,c),b)},
Fs(a,b){return new A.cO(new A.wu(a,b),t.fb)},
fB(a,b,c){return A.Gg(a,b,c)},
Gg(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$fB=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.p(),$async$fB)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.wB(e)
a1.r=new A.wC(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a_(c.read(),k),$async$fB)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.I(b)
l=A.a5(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Bd(m,a)
k=l
j=a1.b
if(j>=4)A.x(a1.bs())
if((j&1)!==0){j=a1.gaH()
j.aB(d,k==null?B.H:k)}s=15
return A.a(a1.p(),$async$fB)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.tG()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.x(a1.bs())
if((f&1)!==0)a1.gaH().ar(g)}g=a1.b
s=((g&1)!==0?(a1.gaH().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.ax(new A.p($.t,j),i):g).a,$async$fB)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fB,r)},
jh:function jh(a){this.b=!1
this.c=a},
n1:function n1(a){this.a=a},
wu:function wu(a,b){this.a=a
this.b=b},
wB:function wB(a){this.a=a},
wC:function wC(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a){this.a=a},
n3:function n3(a){this.a=a},
za(a,b){return new A.dB(a,b)},
dB:function dB(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
DI(a,b){var s=t.N,r=A.l([],t.e8),q=$.yP()
if(!q.b.test(a))A.x(A.b1(a,"method","Not a valid method"))
return new A.q5(A.E(s,s),r,a,b,A.hk(new A.jc(),new A.jd(),s,s))},
q5:function q5(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
q6:function q6(a,b){this.a=a
this.b=b},
DY(a,b){var s=new Uint8Array(0),r=$.yP()
if(!r.b.test(a))A.x(A.b1(a,"method","Not a valid method"))
r=t.N
return new A.rg(s,a,b,A.hk(new A.jc(),new A.jd(),r,r))},
rg:function rg(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
hU:function hU(){},
kM:function kM(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
CR(a){return a.toLowerCase()},
fS:function fS(a,b,c){this.a=a
this.c=b
this.$ti=c},
DD(a){return A.HS("media type",a,new A.pP(a))},
xX(a,b,c){var s=t.N
if(c==null)s=A.E(s,s)
else{s=new A.fS(A.GV(),A.E(s,t.gc),t.kj)
s.E(0,c)}return new A.eF(a.toLowerCase(),b.toLowerCase(),new A.f2(s,t.ph))},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
pP:function pP(a){this.a=a},
pR:function pR(a){this.a=a},
pQ:function pQ(){},
H9(a){var s
a.m1($.Cs(),"quoted string")
s=a.gjB().h(0,0)
return A.BO(B.a.q(s,1,s.length-1),$.Cr(),new A.x0(),null)},
x0:function x0(){},
aj(a){var s,r=new A.ab("")
A.fK(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
yO(a){var s,r,q
for(s=new A.ri(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
fK(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.c9(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.aE(b)){r=B.c.m(b)
a.a+=r
return r.length}if(typeof b=="number"){r=isFinite(b)&&b===B.v.we(b)&&Math.abs(b)<1e15?B.c.m(B.v.mv(b)):B.v.m(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.v.m(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.e.a4(b,h)
a.a+=r
return A.yO(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.K(b),p<s.gl(b);++p){if(p>0){a.a+=",";++q}q+=A.fK(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
for(s=J.M(b.gP());s.k();){n=s.gn()
r=J.aw(n)
if(B.b.cJ(o,new A.xt(r)))throw A.b(A.O('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.au(r,n))}B.b.c2(o,new A.xu())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.B)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.e.a4(k.a,h)
a.a+=j
i=A.yO(j)
a.a+=":"
q=q+i+1+A.fK(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.O("Cannot canonicalize value of type "+J.cR(b).m(0),h))},
xt:function xt(a){this.a=a},
xu:function xu(){},
E4(a){var s,r,q,p=A.ah("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0).dE(a)
if(p==null)return B.co
s=p.b
r=s[1]
r.toString
r=A.av(r)
q=s[2]
q.toString
q=A.av(q)
s=s[3]
s=A.hH(s==null?"":s,null)
return new A.eg(r,q,s==null?0:s)},
dZ(a,b){return A.E5(a,b)},
E5(a1,a2){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dZ=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:b=J
a=J
s=3
return A.a(a1.aR("SELECT sqlite_version() AS v"),$async$dZ)
case 3:e=b.R(a.cc(a4),"v")
e.toString
A.J(e)
k=t.x
b=A
a=A
a0=J
s=4
return A.a(a1.aR("PRAGMA compile_options"),$async$dZ)
case 4:j=b.P(new a.bp(a0.aH(a4,new A.rq(),t.X),k),k.i("n.E"))
n=B.b.cJ(j,new A.rr())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a1.J("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$dZ)
case 11:s=12
return A.a(a1.J("DROP TABLE lp__fts5_probe"),$async$dZ)
case 12:n=!0
p=2
s=10
break
case 8:p=7
d=o.pop()
n=!1
s=10
break
case 7:s=2
break
case 10:case 6:m=null
k=a2===B.aP
s=k?13:14
break
case 13:p=16
s=19
return A.a(a1.aR("PRAGMA journal_mode"),$async$dZ)
case 19:l=a4
if(J.fN(l))m=A.ac(J.cc(J.cc(l).gbh()))
p=2
s=18
break
case 16:p=15
c=o.pop()
m=null
s=18
break
case 15:s=2
break
case 18:case 14:h=A.E4(e)
g=h.a
if(g<=3)f=g===3&&h.b>=37
else f=!0
k=k&&J.u(m,"wal")
q=new A.kI(e,f,k,n,a2)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dZ,r)},
kn:function kn(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rq:function rq(){},
rr:function rr(){},
fT:function fT(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a0:function a0(a,b){this.a=a
this.b=b},
na:function na(a,b){this.a=a
this.b=b},
nb:function nb(){},
nc:function nc(){},
z2(a){return new Uint8Array(A.br(a))},
Eq(a,b,c){var s,r,q,p,o,n,m=new Uint8Array(16)
a.ev(m,m)
s=new Uint8Array(16)
B.d.af(s,0,12,b)
s[15]=1
r=A.A2(a,s,c)
q=A.A4(m,r)
p=new Uint8Array(16)
o=new Uint8Array(16)
a.ev(s,o)
for(n=0;n<16;++n)p[n]=q[n]^o[n]
return new A.au(r,p)},
Ep(a,b,c,d){var s,r,q,p,o,n=new Uint8Array(16)
a.ev(n,n)
s=new Uint8Array(16)
B.d.af(s,0,12,b)
s[15]=1
r=A.A4(n,c)
q=new Uint8Array(16)
a.ev(s,q)
for(p=0,o=0;o<16;++o)p|=r[o]^q[o]^d[o]
if(p!==0)return null
return A.A2(a,s,c)},
A2(a,b,c){var s,r,q,p,o,n=c.length,m=new Uint8Array(n),l=new Uint8Array(A.br(b))
A.A5(l)
s=new Uint8Array(16)
for(r=0;r<n;){a.ev(l,s)
A.A5(l)
q=Math.min(16,n-r)
for(p=0;p<q;++p){o=r+p
m[o]=c[o]^s[p]}r+=q}return m},
A5(a){var s,r,q
for(s=a.$flags|0,r=15;r>=12;--r){q=a[r]
s&2&&A.C(a)
a[r]=q+1&255
if(a[r]!==0)break}},
A4(a,b){var s,r,q,p,o,n,m,l=new Uint8Array(16),k=new Uint8Array(16)
for(s=b.length,r=0;r<s;r=p){q=Math.min(16,s-r)
B.d.hq(k,0,16,0)
p=r+q
B.d.af(k,0,q,new Uint8Array(b.subarray(r,A.cs(r,p,s))))
for(o=0;o<16;++o)l[o]=l[o]^k[o]
A.A3(l,a)}n=new Uint8Array(16)
m=s*8
for(o=7;o>=0;--o)n[15-o]=B.c.j3(m,o*8)&255
for(o=0;o<16;++o)l[o]=l[o]^n[o]
A.A3(l,a)
return l},
A3(a,b){var s,r,q,p=t.t,o=A.l([(b[0]<<24|b[1]<<16|b[2]<<8|b[3])>>>0,(b[4]<<24|b[5]<<16|b[6]<<8|b[7])>>>0,(b[8]<<24|b[9]<<16|b[10]<<8|b[11])>>>0,(b[12]<<24|b[13]<<16|b[14]<<8|b[15])>>>0],p),n=A.l([0,0,0,0],p)
for(s=0;s<128;++s){if((B.c.j3(a[s>>>3],7-(s&7))&1)!==0){n[0]=(n[0]^o[0])>>>0
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
p&2&&A.C(a)
a[r]=q>>>24&255
a[r+1]=q>>>16&255
a[r+2]=q>>>8&255
a[r+3]=q&255}},
A1(a){return(B.j[a>>>24&255]<<24|B.j[a>>>16&255]<<16|B.j[a>>>8&255]<<8|B.j[a&255])>>>0},
tU(a){var s=B.j[a>>>24&255]
return(A.e5(s)<<24|s<<16|s<<8|A.e5(s)^s)>>>0},
tV(a){var s=B.j[a>>>16&255]
return((A.e5(s)^s)<<24|A.e5(s)<<16|s<<8|s)>>>0},
tW(a){var s=B.j[a>>>8&255]
return(s<<24|(A.e5(s)^s)<<16|A.e5(s)<<8|s)>>>0},
tX(a){var s=B.j[a&255]
return(s<<24|s<<16|(A.e5(s)^s)<<8|A.e5(s))>>>0},
e5(a){var s=a<<1
return(a&128)!==0?(s^283)&255:s&255},
mL:function mL(a,b){this.b=a
this.c=b},
tT:function tT(a){this.a=a},
Bx(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.bF
if(r===B.C){r=a.f
r.toString
r=!B.b.D(r,b)}else r=!1
if(r)return B.bL
return s
case 1:case 4:return!A.aE(b)?B.bG:s
case 2:return typeof b!="number"?B.bH:s
case 3:return!A.c9(b)?B.bI:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.bJ:s
case 7:return!t.j.b(b)?B.bK:s}},
ds(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=a.gdB(),i=t.N,h=t.X,g=A.m(["id",e],i,h)
for(s=a.c,r=s.length,q=c==null,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
if(q)n=null
else n=c
m=o.a
g.j(0,m,A.AP(o,f.h(0,m),n))}l=A.E(i,h)
for(i=new A.aI(f,A.o(f).i("aI<1,2>")).gu(0);i.k();){k=i.d
h=k.a
if(h==="id"||h==="archived"||j.D(0,h))continue
l.j(0,h,k.b)}g.j(0,"extra",l.a===0?"":A.aj(l))
g.j(0,"archived",b?1:0)
g.j(0,"hidden",0)
return g},
Bv(a,b,c,d,e){var s
if(d==null)s=null
else s=d
return A.AP(b,c,s)},
ca(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.m(["id",b.h(0,"id")],j,i)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
n=o.a
h.j(0,n,A.FE(o,b.h(0,n),c,d,q))}h.j(0,k,J.u(b.h(0,k),1))
m=b.h(0,"extra")
if(typeof m=="string"&&m.length!==0){l=B.e.aE(m,null)
if(t.f.b(l))h.E(0,A.bb(l,j,i))}return h},
Bq(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.M(b);s.k();)r.push(A.ca(a,s.gn(),c,d))
return r},
FE(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i=null
if(b==null)return i
if(a.e){if(c==null)s=i
else s=c
if(s==null)throw A.b(A.w('Field "'+a.a+u.C))
r=B.b3.v(A.J(b))
q=r.length
if(q<28)A.x(A.O("Ciphertext too short for AES-GCM (minimum 28 bytes).",i))
p=new Uint8Array(A.br(B.d.S(r,0,12)))
q-=16
o=new Uint8Array(A.br(B.d.aX(r,q)))
n=new Uint8Array(A.br(B.d.S(r,12,q)))
m=A.Ep(s.b,p,n,o)
if(m==null)A.x(A.w("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
l=B.k.hj(m)
k=a.b
A:{if(B.y===k){r=l==="1"||l==="true"
break A}if(B.Z===k||B.a0===k){r=A.av(l)
break A}if(B.a_===k){r=A.H7(l)
break A}if(B.J===k||B.K===k){r=B.e.aE(l,i)
break A}r=l
break A}return r}j=a.b
B:{if(B.y===j){r=J.u(b,1)
break B}if(B.J===j||B.K===j){r=B.e.aE(A.J(b),i)
break B}r=b
break B}return r},
AP(a,b,c){var s,r
if(b==null)return null
if(a.e){if(c==null)throw A.b(A.w('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.u(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.aw(b)
break
case 6:case 7:s=A.aj(b)
break
default:A.J(b)
s=b}r=c.ux(B.i.v(s))
return B.aq.gjo().v(r)}switch(a.b.a){case 3:return J.u(b,!0)?1:0
case 6:case 7:return A.aj(b)
default:return b}},
b0(a,b){var s,r,q,p,o,n="archived",m=a.gdB(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.B)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.y?J.u(o,!0):o)}for(l=b.gbn(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.D(0,p))continue
k.j(0,p,s.b)}if(J.u(b.h(0,n),!0))k.j(0,n,!0)
return k},
Bj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=b.gdB(),h=A.l([],t.iE)
h.push(new A.au("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)h.push(new A.au(o,p.b===B.y?J.u(n,!0):n))}for(s=new A.aI(c,A.o(c).i("aI<1,2>")).gu(0);s.k();){m=s.d
r=m.a
if(r==="id"||r==="archived"||i.D(0,r))continue
h.push(new A.au(r,m.b))}if(J.u(c.h(0,"archived"),!0))h.push(B.cn)
B.b.c2(h,new A.wK())
a.a+="{"
for(s=h.length,l=1,k=!0,q=0;q<h.length;h.length===s||(0,A.B)(h),++q,k=!1){r=h[q]
if(!k){a.a+=",";++l}j=B.e.a4(r.a,null)
a.a+=j
o=A.yO(j)
a.a+=":"
l=l+o+1+A.fK(a,r.b)}a.a+="}"
return l+1},
cy:function cy(a,b){this.a=a
this.b=b},
wK:function wK(){},
wZ(a2,a3,a4,a5){var s=0,r=A.h(t.G),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$wZ=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)A:switch(s){case 0:a0=a4.b
a1=a4.r
if(a0==="explain")a1="EXPLAIN QUERY PLAN "+a1
if(a0==="query"&&a5===0){q=A.m(["items",A.l([],t.d),"lastRow",null,"hasMore",!1],t.N,t.X)
s=1
break}s=3
return A.a(a3.$2(a1,a4.w),$async$wZ)
case 3:p=a7
switch(a0){case"query":a0=a5==null
o=!a0&&J.ao(p)>a5
n=a0?p:J.xA(p,a5).dT(0)
m=A.Bq(a2.aa(a4.d).a,n,a2.y,a2.z)
l=a4.y
if(l==null)k=m
else{a0=A.l([],t.d)
for(j=m.length,i=l.$ti,h=i.i("a9<D.E>"),i=i.i("D.E"),g=t.N,f=t.X,e=0;e<m.length;m.length===j||(0,A.B)(m),++e){d=m[e]
c=A.E(g,f)
for(b=new A.a9(l,l.gl(0),h);b.k();){a=b.d
if(a==null)a=i.a(a)
if(d.H(a))c.j(0,a,d.h(0,a))}a0.push(c)}k=a0}q=A.m(["items",k,"lastRow",o&&m.length!==0?B.b.ga1(m):null,"hasMore",o],t.N,t.X)
s=1
break A
case"count":case"countDistinct":a0=A.fG(p)
q=A.m(["value",a0==null?0:a0],t.N,t.X)
s=1
break A
case"distinct":a0=[]
for(j=J.M(p);j.k();){i=j.gn()
if(i.gW(i))a0.push(J.cc(i.gbh()))}q=A.m(["values",a0],t.N,t.X)
s=1
break A
case"ids":a0=A.l([],t.s)
for(j=J.M(p);j.k();){i=j.gn().h(0,"id")
i.toString
a0.push(A.J(i))}q=A.m(["ids",a0],t.N,t.X)
s=1
break A
case"explain":a0=t.X
q=A.m(["plan",J.aH(p,new A.x_(),a0).L(0,"\n")],t.N,a0)
s=1
break A
case"sum":case"avg":case"min":case"max":a0=J.K(p)
q=A.m(["value",a0.gB(p)?null:J.R(a0.gC(p),"v")],t.N,t.X)
s=1
break A
case"search":a0=A.l([],t.d)
for(j=J.M(p),i=t.N,h=t.X;j.k();){g=j.gn()
f=g.h(0,"id")
f.toString
a0.push(A.m(["id",A.J(f),"score",g.h(0,"score")],i,h))}q=A.m(["results",a0],i,h)
s=1
break A
default:throw A.b(A.w("Unsupported compiled operation: "+a0))}case 1:return A.e(q,r)}})
return A.f($async$wZ,r)},
x_:function x_(){},
zf(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
jo:function jo(a,b){this.a=a
this.b=b},
jy:function jy(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
ot:function ot(){},
os:function os(){},
ou:function ou(){},
D7(a){return'"'+A.A(a,'"','""')+'"'},
D6(a,b){var s,r,q,p=a.a,o=J.K(p),n=b.a,m=J.K(n)
if(o.gl(p)>=m.gl(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gl(p);++q)if(!J.u(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
no:function no(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jv:function jv(a){this.a=a},
or:function or(a){this.a=a},
oq:function oq(){},
op:function op(a){this.a=a},
om:function om(){},
on:function on(){},
oo:function oo(){},
bi(a,b){return new A.hY(a)},
ru(a){return new A.cH(a)},
y4(a){return new A.hM(a)},
cl(a){return new A.eP(a)},
zd(a){return new A.fX(a)},
xG(a){return new A.ev(a)},
BS(a,b){var s,r="UNIQUE constraint failed",q=J.aw(a),p=a instanceof A.cG,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.D(q,"PRIMARY KEY")&&!B.a.D(q,r)
else p=!0
if(p)return new A.hF("PRIMARY KEY constraint violated.")
if(o===2067||B.a.D(q,r)){s=A.AS(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.hW('Unique constraint violated on "'+s+'".')}if(o===1299||B.a.D(q,"NOT NULL constraint failed")){p=A.AS(q,"NOT NULL constraint failed:")
return new A.hz('NOT NULL constraint violated on "'+p+'".')}if(B.a.D(q,"CHECK constraint failed")||o===275||n===275)return new A.fV("CHECK constraint violated.")
if(B.a.D(q,"FOREIGN KEY")||o===787||n===787)return new A.h7("FOREIGN KEY constraint violated.")
if(B.a.D(q,"database or disk is full"))return new A.cH("Database full: "+A.r(a))
return new A.cH("SQLite error: "+A.r(a))},
AS(a,b){var s,r,q,p,o,n,m=B.a.bT(a,b)
if(m<0)return"?"
s=B.a.ac(a,m+b.length)
r=s.length
q=B.a.bT(s,",")
if(q>=0)r=q
p=B.a.bT(s,"(")
s=B.a.d_(B.a.q(s,0,p>=0&&p<r?p:r))
o=B.a.cR(s,".")
s=B.a.d_(o>=0?B.a.ac(s,o+1):s)
if(B.a.O(s,'"')&&B.a.ci(s,'"')){n=B.a.q(s,1,s.length-1)
s=A.A(n,'""','"')}return s.length===0?"?":s},
hm:function hm(){},
hY:function hY(a){this.a=a},
hW:function hW(a){this.a=a},
hz:function hz(a){this.a=a},
fV:function fV(a){this.a=a},
hF:function hF(a){this.a=a},
h7:function h7(a){this.a=a},
cH:function cH(a){this.a=a},
hM:function hM(a){this.a=a},
hO:function hO(a){this.a=a},
eP:function eP(a){this.a=a},
h9:function h9(a){this.a=a},
fX:function fX(a){this.a=a},
ev:function ev(a){this.a=a},
rf:function rf(){},
FH(){return Date.now()},
mp(a){var s,r,q
if(t.G.b(a)){s=A.E(t.N,t.X)
for(r=a.gbn(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.mp(q.b))}return s}if(t.f.b(a)){s=A.E(t.z,t.X)
for(r=a.gbn(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.mp(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.M(a);r.k();)s.push(A.mp(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.br(a))
return a},
cz(a,b,c,d,e,f,g,h){var s=null,r=B.x,q=null,p=null
return A.DC(a,b,c,d,e,f,g,h)},
DC(a5,a6,a7,a8,a9,b0,b1,b2){var s=0,r=A.h(t.kM),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cz=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:b=null
a=B.x
a0=null
a1=null
a2=null
a2=a6
p=4
s=7
return A.a(A.ch(a2,b1),$async$cz)
case 7:s=8
return A.a(A.dZ(a2,b1),$async$cz)
case 8:n=b4
i=0
case 9:if(!(i<3)){s=11
break}m=B.bV[i]
s=12
return A.a(a2.J(m),$async$cz)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.c8[i]
s=16
return A.a(a2.J(l),$async$cz)
case 16:case 14:++i
s=13
break
case 15:h=a2
g=a0
if(g==null)g=A.Hu()
f=new A.kl()
e=new A.k0(b0,h,n,f,a9,a7,a1,a5,a8,b,g,A.E(t.N,t.nv),a,new A.na(A.e_(null,null,t.iv),A.e_(null,null,t.oZ)))
e.d=new A.tP(A.c_(null,t.H),f.gvY())
f=$.xw()
e.as=new A.qg(e,f)
e.at=new A.qb(e,f)
e.ax=new A.nC(e)
e.ay=new A.px(e,a5)
k=e
s=17
return A.a(A.k2(a2,k.Q),$async$cz)
case 17:h=b2.length,i=0
case 18:if(!(i<b2.length)){s=20
break}j=b2[i]
s=21
return A.a(k.bf(j),$async$cz)
case 21:case 19:b2.length===h||(0,A.B)(b2),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
a3=o.pop()
p=23
s=26
return A.a(a2.p(),$async$cz)
case 26:p=3
s=25
break
case 23:p=22
a4=o.pop()
s=25
break
case 22:s=3
break
case 25:throw a3
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cz,r)},
ch(a,b){return A.DB(a,b)},
DB(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$ch=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.aP?2:3
break
case 2:q=5
s=8
return A.a(a.J("PRAGMA journal_mode=WAL"),$async$ch)
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
return A.a(a.J("PRAGMA wal_autocheckpoint=0"),$async$ch)
case 9:s=10
return A.a(a.J("PRAGMA mmap_size=67108864"),$async$ch)
case 10:case 3:s=11
return A.a(a.J("PRAGMA synchronous=NORMAL"),$async$ch)
case 11:s=12
return A.a(a.J("PRAGMA foreign_keys=ON"),$async$ch)
case 12:s=13
return A.a(a.J("PRAGMA busy_timeout=5000"),$async$ch)
case 13:s=14
return A.a(a.J("PRAGMA cache_size=-8000"),$async$ch)
case 14:s=15
return A.a(a.J("PRAGMA temp_store=MEMORY"),$async$ch)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ch,r)},
k2(a,b){var s=0,r=A.h(t.H),q,p
var $async$k2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.dO("lp_migrations","version = ?",[1]),$async$k2)
case 3:if(p.fN(d)){s=1
break}s=4
return A.a(a.az(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$k2)
case 4:case 1:return A.e(q,r)}})
return A.f($async$k2,r)},
jz:function jz(a,b){this.a=a
this.b=b},
kK:function kK(a,b){this.a=a
this.d=b},
qJ:function qJ(a){this.a=a},
k0:function k0(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.cx="NORMAL"
_.db=m
_.dx=null
_.dy=0
_.a$=n},
pL:function pL(a){this.a=a},
pH:function pH(a){this.a=a},
pK:function pK(a){this.a=a},
pJ:function pJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
pI:function pI(){},
pG:function pG(a){this.a=a},
pF:function pF(){},
lt:function lt(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
uC:function uC(a,b){this.a=a
this.b=b},
uB:function uB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uz:function uz(a,b){this.a=a
this.b=b},
uA:function uA(a,b){this.a=a
this.b=b},
uy:function uy(a){this.a=a},
fa:function fa(a,b){this.a=a
this.b=b},
lM:function lM(){},
eG(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$eG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:j=a.b
i=b.x
h=A.a8(i).i("bj<1>")
g=A.P(new A.bj(i,new A.q2(c,b),h),h.i("n.E"))
B.b.c2(g,new A.q3())
i=g.length,h=b.a,q="migrate:"+h+":v",p=c,o=0
case 2:if(!(o<g.length)){s=4
break}n=g[o]
m=n.a
l=p+1
if(m!==l)throw A.b(A.cl('Migration gap for "'+h+'": expected v'+l+", found v"+m+"."))
k=new A.kJ()
$.mE()
k.av()
s=n.b?5:7
break
case 5:s=8
return A.a(A.aD(a,b,n),$async$eG)
case 8:s=6
break
case 7:s=9
return A.a(A.k6(a,b,n),$async$eG)
case 9:case 6:if(k.b==null)k.b=$.qP.$0()
s=10
return A.a(A.hs(j,k.guu(),p,q+m,m),$async$eG)
case 10:case 3:g.length===i||(0,A.B)(g),++o,p=m
s=2
break
case 4:i=b.b
if(c<i&&p!==i)throw A.b(A.cl('Missing migration steps for "'+h+'": migrated to v'+p+" but expected v"+i+"."))
s=11
return A.a(j.G("lp_stores",A.m(["schema_ver",i],t.N,t.X),"store = ?",[h]),$async$eG)
case 11:return A.e(null,r)}})
return A.f($async$eG,r)},
hs(a,b,c,d,e){var s=0,r=A.h(t.H),q,p
var $async$hs=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.aR("SELECT MAX(version) AS m FROM lp_migrations"),$async$hs)
case 2:q=p.fG(g)
if(q==null)q=0
s=3
return A.a(a.az(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",Date.now(),"duration_ms",b],t.N,t.X)),$async$hs)
case 3:return A.e(null,r)}})
return A.f($async$hs,r)},
k6(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$k6=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.b
k=b.a
j=t.x
h=A
g=A
f=J
s=2
return A.a(l.aR("PRAGMA table_info("+('"'+A.A(k,'"','""')+'"')+")"),$async$k6)
case 2:i=h.eE(new g.bp(f.aH(e,new A.q_(),t.X),j),j.i("n.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
if(o.c)throw A.b(A.cl('Additive migration on "'+k+'" cannot add a required column "'+o.a+'" (existing rows would violate NOT NULL).'))
n=o.a
if(i.D(0,n)){s=4
break}m=A.A(k,'"','""')
s=6
return A.a(l.J("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.A(n,'"','""')+'"')+" "+o.gkf()),$async$k6)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.B)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$k6,r)},
aD(a,b,c){return A.DG(a,b,c)},
DG(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aD=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.b
if(!b0.r)throw A.b(A.xG('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.jv(b0.c).lQ(b1)
j=A.DH(b0.a,a2,a3)
p=4
s=7
return A.a(A.q0(a7,l),$async$aD)
case 7:i=b4
s=8
return A.a(b0.hd(j),$async$aD)
case 8:h=b4
if(J.u(i,"done")&&h){a3=A.xG('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.k8(a7,m),$async$aD)
case 9:g=b4
s=10
return A.a(A.k8(a7,n),$async$aD)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.aR("SELECT COUNT(*) c FROM "+('"'+A.A(m,'"','""')+'"')),$async$aD)
case 13:a0=a9.fG(b4)
e=a0==null?0:a0
a3=A.A(m,'"','""')
s=14
return A.a(a7.J("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.A(n,'"','""')+'"')),$async$aD)
case 14:s=15
return A.a(A.cB(b0,a7,b1,k,l,e),$async$aD)
case 15:s=1
break
case 12:s=16
return A.a(a7.J("DROP TABLE IF EXISTS "+('"'+A.A(m,'"','""')+'"')),$async$aD)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.hk(j),$async$aD)
case 19:case 18:s=20
return A.a(A.k7(a7,l,"rebuilding"),$async$aD)
case 20:s=21
return A.a(a7.J("VACUUM INTO '"+A.A(j,"'","''")+"'"),$async$aD)
case 21:a3=k.b
a4=A.A(n,'"','""')
d=B.a.mt(a3,'"'+a4+'"','"'+A.A(m,'"','""')+'"')
s=22
return A.a(a7.J(d),$async$aD)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ae("SELECT rowid, * FROM "+('"'+A.A(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aD)
case 25:b=b4
if(J.bW(b)){s=24
break}s=26
return A.a(a7.V(new A.q1(b,b1,b2,m),a3),$async$aD)
case 26:a4=J.R(J.mJ(b),"rowid")
a4.toString
c=A.ai(a4)
if(J.ao(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.aR("SELECT COUNT(*) c FROM "+('"'+A.A(n,'"','""')+'"')),$async$aD)
case 27:a5=a9.fG(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.aR("SELECT COUNT(*) c FROM "+('"'+A.A(m,'"','""')+'"')),$async$aD)
case 28:e=a9.fG(b4)
a0=e==null?0:e
if(!J.u(a,a0)){a3=A.w('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.J("DROP TABLE "+('"'+A.A(n,'"','""')+'"')),$async$aD)
case 29:a3=A.A(m,'"','""')
s=30
return A.a(a7.J("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.A(n,'"','""')+'"')),$async$aD)
case 30:s=31
return A.a(A.cB(b0,a7,b1,k,l,a),$async$aD)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.I(a8)
if(a3 instanceof A.ev)throw a8
else if(a3 instanceof A.cG){a1=a3
throw A.b(A.xG('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aD,r)},
cB(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l
var $async$cB=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.J(q[o]),$async$cB)
case 5:case 3:q.length===p||(0,A.B)(q),++o
s=2
break
case 4:q=c.w!=null
s=q?6:7
break
case 6:s=8
return A.a(b.J("DROP TABLE IF EXISTS "+('"'+A.A(c.a+"_fts",'"','""')+'"')),$async$cB)
case 8:case 7:p=d.d,n=p.length,o=0
case 9:if(!(o<p.length)){s=11
break}s=12
return A.a(b.J(p[o]),$async$cB)
case 12:case 10:p.length===n||(0,A.B)(p),++o
s=9
break
case 11:s=q?13:14
break
case 13:q=c.a+"_fts"
p=A.A(q,'"','""')
s=15
return A.a(b.J("INSERT INTO "+('"'+p+'"')+"("+('"'+A.A(q,'"','""')+'"')+") VALUES('rebuild')"),$async$cB)
case 15:case 14:q=c.a
l=A
s=16
return A.a(b.aR("SELECT COUNT(*) c FROM "+('"'+A.A(q,'"','""')+'"')),$async$cB)
case 16:m=l.fG(h)
if((m==null?0:m)!==f)throw A.b(A.w('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.k7(b,e,"done"),$async$cB)
case 17:return A.e(null,r)}})
return A.f($async$cB,r)},
k8(a,b){var s=0,r=A.h(t.y),q,p
var $async$k8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ae("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$k8)
case 3:q=p.fN(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k8,r)},
DH(a,b,c){var s=null,r=$.fM(),q=r.tW(a),p=A.d7(a,r.a).gjb()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.me(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
q0(a,b){var s=0,r=A.h(t.v),q,p,o
var $async$q0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.mm("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$q0)
case 3:p=d
o=J.K(p)
q=o.gB(p)?null:A.ac(J.R(o.gC(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$q0,r)},
k7(a,b,c){var s=0,r=A.h(t.H)
var $async$k7=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.bV(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.I),$async$k7)
case 2:return A.e(null,r)}})
return A.f($async$k7,r)},
q2:function q2(a,b){this.a=a
this.b=b},
q3:function q3(){},
q_:function q_(){},
q1:function q1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kl:function kl(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
rc:function rc(a,b,c,d,e){var _=this
_.b=a
_.d=b
_.r=c
_.w=d
_.y=e},
ms(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.I(q)
if(r instanceof A.cH)throw q
else{s=r
r=A.ru("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
zi(a){return A.ms(new A.ow(a))},
Do(a){return A.ms(new A.pd(a))},
Dg(a){return A.ms(new A.oH(a))},
E8(a){return A.ms(new A.rv(a))},
zc(a,b){return A.ms(new A.nf(a,b))},
Gz(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.ca.h(0,s)
return b},
bJ:function bJ(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ow:function ow(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
pd:function pd(a){this.a=a},
h8:function h8(a){this.a=a},
oH:function oH(a){this.a=a},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
rv:function rv(a){this.a=a},
q4:function q4(a,b){this.a=a
this.b=b},
nA:function nA(){},
bI:function bI(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
nf:function nf(a,b){this.a=a
this.b=b},
CY(a,b){var s,r=a.a
switch(b.a){case 0:s='Field "'+r+'" must be a string.'
break
case 1:s='Field "'+r+'" must be an integer.'
break
case 2:s='Field "'+r+'" must be a number.'
break
case 3:s='Field "'+r+'" must be a boolean.'
break
case 4:s='Field "'+r+'" must be a JSON object or array.'
break
case 5:s='Field "'+r+'" must be a JSON array.'
break
case 6:s=a.f
s.toString
s='Field "'+r+'" must be one of '+B.b.L(s,", ")+"."
break
default:s=null}return s},
dS:function dS(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nm:function nm(a,b){this.a=a
this.b=b},
nk:function nk(a,b,c){this.a=a
this.b=b
this.c=c},
nj:function nj(a,b){this.a=a
this.b=b},
nn:function nn(a,b){this.a=a
this.b=b},
nl:function nl(a,b){this.a=a
this.b=b},
ni:function ni(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nh:function nh(){},
ng:function ng(){},
ls:function ls(){},
zS(a,b,c,d){return new A.bo(a,b,c,d,new A.vK())},
kV(a){var s=$.t.h(0,$.mG())
if(s instanceof A.bo&&s.a===a)return s
return null},
bo:function bo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e},
rU:function rU(a,b,c){this.a=a
this.b=b
this.c=c},
vK:function vK(){this.a=0
this.b=null},
GY(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.M(a);s.k();){r=new A.ab("")
A.fK(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}B.b.aW(o)
p=B.b.L(o,"|")
b.$1(p.length)
return A.aB(B.l.v(B.i.v(p)).a)},
hB:function hB(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
qa:function qa(a){this.a=a},
bX:function bX(){},
tP:function tP(a,b){this.a=a
this.b=0
this.c=b},
tQ:function tQ(a,b,c){this.a=a
this.b=b
this.c=c},
jg(a){var s=$.BX()
if(!s.b.test(a))throw A.b(A.O('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
iW(a,b,c,d,e){return A.HE(a,b,c,d,e)},
HE(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$iW=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.l([],h)
f=new A.f9(A.m0(new A.m2(new A.xi(g),A.l([],h),t.mI)))
e=0
h=new A.bR(A.bF(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$iW)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.p)){j=new A.p($.t,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$iW)
case 9:f.a.t(0,m)
e+=J.ao(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.A(),$async$iW)
case 10:s=n.pop()
break
case 5:f.a.p()
if(c!=null&&!J.u(e,c))throw A.b(A.w("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.aB(B.b.gan(g).a)
A.jg(i)
if(b!=null&&i!==b)throw A.b(A.w("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.kL(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iW,r)},
n0:function n0(){},
kL:function kL(a){this.a=a},
xi:function xi(a){this.a=a},
h4:function h4(a){this.d=a},
oy:function oy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oA:function oA(a,b){this.a=a
this.b=b},
oB:function oB(a,b,c){this.a=a
this.b=b
this.c=c},
oz:function oz(a,b,c){this.a=a
this.b=b
this.c=c},
oC:function oC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
oD:function oD(){},
zj(a){return A.mC("lp_file_refs",new A.ox(a))},
b3:function b3(a,b,c,d,e,f,g,h,i,j){var _=this
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
ox:function ox(a){this.a=a},
px:function px(a,b){this.a=a
this.b=b},
py:function py(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pA:function pA(a){this.a=a},
pB:function pB(a){this.a=a},
pC:function pC(a){this.a=a},
pD:function pD(a){this.a=a},
pE:function pE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
pz:function pz(a,b){this.a=a
this.b=b},
tg:function tg(a){this.b=a},
th:function th(a){this.a=a},
zQ(a){var s=Date.now()
return new A.kU(a,new A.b2(s,0,!1))},
kU:function kU(a,b){this.a=a
this.c=b},
mX:function mX(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
ko:function ko(a,b,c,d,e,f,g,h){var _=this
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
qH:function qH(a,b){this.a=a
this.b=b},
qI:function qI(){},
qq:function qq(a,b,c){this.a=a
this.b=b
this.c=c},
qx:function qx(a){this.a=a},
qt:function qt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qu:function qu(){},
qv:function qv(a,b){this.a=a
this.b=b},
qw:function qw(){},
qr:function qr(a,b){this.a=a
this.b=b},
qs:function qs(){},
hE:function hE(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
qy:function qy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1
_.w=_.r=null
_.x=f
_.y=0},
qD:function qD(){},
qE:function qE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
qA:function qA(){},
qB:function qB(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(){},
qF:function qF(a){this.a=a},
qG:function qG(a){this.a=a},
vR:function vR(a,b){this.a=a
this.b=null
this.c=b},
jK(a,b){return new A.cX(a)},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jJ:function jJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.a=a},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
qo:function qo(a){this.a=a},
qp:function qp(a){this.a=a},
mM:function mM(a){this.a=a},
mN:function mN(a,b){this.a=a
this.b=b},
mO:function mO(a){this.a=a},
mP:function mP(){},
xD(a){return A.mC("lp_conflicts",new A.nB(a))},
bm:function bm(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
nB:function nB(a){this.a=a},
nC:function nC(a){this.a=a},
nH:function nH(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function nG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nE:function nE(a,b){this.a=a
this.b=b},
nF:function nF(a,b){this.a=a
this.b=b},
nD:function nD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kQ:function kQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.w=_.r=_.f=_.e=$
_.y=e
_.at=_.as=_.Q=_.z=!1
_.ax=f
_.ay=g
_.cx=_.CW=_.ch=null
_.cy=!1
_.db=0
_.dx=h
_.dy=i
_.k1=_.id=_.go=_.fy=_.fx=_.fr=null
_.k2=!1
_.k3=j
_.k4=k
_.ok=null
_.p1=l
_.p2=m},
rQ:function rQ(a){this.a=a},
rI:function rI(a){this.a=a},
rO:function rO(a,b){this.a=a
this.b=b},
rN:function rN(a){this.a=a},
rM:function rM(a,b){this.a=a
this.b=b},
rP:function rP(a){this.a=a},
rJ:function rJ(a,b){this.a=a
this.b=b},
rK:function rK(){},
rL:function rL(){},
hq(a){return new A.hp(a)},
yM(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.ep(a,b)
r=A.b0(a,s)
q=A.aj(r)
p=A.aB(B.l.v(B.i.v(q)).a)
return new A.dU(b,s,q,p,k)}catch(m){l=A.I(m)
if(l instanceof A.hp){o=l
return new A.dU(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.dU(b,k,k,k,l)}}},
Hz(a,b){var s,r=A.l([],t.i7)
for(s=J.M(b);s.k();)r.push(A.yM(a,s.gn()))
return r},
yL(a,b){var s=0,r=A.h(t.eT),q
var $async$yL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Hz(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$yL,r)},
ep(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bb(b.d,j,i),g=a.gdB(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.u(f,s))throw A.b(A.hq('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.c9(r))throw A.b(A.hq('Field "archived" must be a boolean, got '+J.cR(r).m(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.B)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.hq('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Bx(o,n)
if(m!=null)throw A.b(A.hq(A.Gi(o,n,m)))
q.j(0,s,n)}for(j=new A.aI(h,A.o(h).i("aI<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.D(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.u(r,!0))
return q},
Gi(a,b,c){var s,r=a.a,q=J.cR(b)
switch(c.a){case 0:s='Field "'+r+'" must be a string, got '+q.m(0)+"."
break
case 1:s='Field "'+r+'" must be an integer, got '+q.m(0)+"."
break
case 2:s='Field "'+r+'" must be a number, got '+q.m(0)+"."
break
case 3:s='Field "'+r+'" must be a boolean, got '+q.m(0)+"."
break
case 4:s='Field "'+r+'" must be JSON, got '+q.m(0)+"."
break
case 5:s='Field "'+r+'" must be a JSON array, got '+q.m(0)+"."
break
case 6:s='Field "'+r+'" has unknown enum value "'+A.r(b)+'".'
break
default:s=null}return s},
eq(a){var s,r,q
if(a==null||a.length===0)return B.q
try{s=B.e.aE(a,null)
if(t.f.b(s)){r=A.bb(s,t.N,t.X)
return r}}catch(q){}return B.q},
hp:function hp(a){this.a=a},
dU:function dU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bs(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aU(i),g=A.eE(a.gP(),i)
g.E(0,b.gP())
for(g=A.fj(g,g.r,A.o(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.n.ag(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.j1(o.gP(),new A.wN())&&J.j1(n.gP(),new A.wO())){m=A.bs(A.bb(o,i,q),A.bb(n,i,q))
for(l=A.o(m),k=new A.dj(m,m.r,l.i("dj<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
DE(a,b,c,d,e,f,g){return new A.pS()},
Gd(a,b){var s,r,q=a.b
if(q.gB(q))return null
for(s=b;;){q.h(0,s)
r=B.a.cR(s,".")
if(r<=0)return null
s=B.a.q(s,0,r)}},
xY(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$xY=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.DF(B.bh,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xY,r)},
DF(a,b,c,d,e,f,g){var s,r,q,p=A.bs(b,c),o=A.bs(b,f)
A.DE(b,p,o,c,e,f,g)
s=t.N
r=A.eE(c.gP(),s)
r.E(0,new A.Z(f,A.o(f).i("Z<1>")))
r.E(0,b.gP())
q=A.P(r,A.o(r).c)
return A.pY(a,b,p,o,0,q,c,A.E(s,t.X),d,e,f,new A.vF(),g)},
pY(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.d3(h,a0.a,null)
s=f[e]
r=g.h(0,s)
q=k.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.u(p,!0)
n=J.u(r,!0)
m=J.u(q,!0)
if(n===m)h.j(0,s,n)
else if(n===o)h.j(0,s,m)
else if(m===o)h.j(0,s,n)
else{i.b.h(0,s)
h.j(0,s,m)}return A.pY(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.zy(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.p)return l.aK(new A.pZ(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.pY(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
zy(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.n.ag(a1,a4))return a1
if(B.n.ag(a1,a0))return a4
if(B.n.ag(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.j1(a1.gP(),new A.pT()))if(J.j1(a4.gP(),new A.pU()))if(a0!=null)r=s.b(a0)&&J.j1(a0.gP(),new A.pV())
else r=!0
if(r){r=t.N
q=t.X
p=A.bb(a1,r,q)
o=A.bb(a4,r,q)
n=a0==null?null:A.bb(s.a(a0),r,q)
s=A.aU(r)
m=n==null
l=m?null:new A.Z(n,A.o(n).i("Z<1>"))
if(l!=null)s.E(0,l)
s.E(0,new A.Z(p,A.o(p).i("Z<1>")))
s.E(0,new A.Z(o,A.o(o).i("Z<1>")))
k=A.E(r,q)
j=[]
for(r=s.$ti.c,l=A.fj(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.zy(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.p)g=!0
j.push(d)}if(!g){for(s=A.fj(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.xN(new A.a7(j,new A.pW(),A.a8(j).i("a7<1,y<j?>>")),q).aK(new A.pX(s,k),q)}A.Gd(a3,a2)
return a4},
BC(a,b,c,d,e,f){return A.xY(a,b,c,d,e,f)},
wN:function wN(){},
wO:function wO(){},
pS:function pS(){},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a,b,c){this.a=a
this.b=b
this.c=c},
vF:function vF(){this.a=!1},
vD:function vD(){},
tZ:function tZ(){},
pZ:function pZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.at=n},
pT:function pT(){},
pU:function pU(){},
pV:function pV(){},
pW:function pW(){},
pX:function pX(a,b){this.a=a
this.b=b},
qb:function qb(a,b){this.a=a
this.b=b},
qd:function qd(a){this.a=a},
qe:function qe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n_:function n_(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(){},
hL:function hL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qg:function qg(a,b){this.a=a
this.b=b},
qn:function qn(a,b){this.a=a
this.b=b},
ql:function ql(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
qk:function qk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
qj:function qj(a,b,c){this.a=a
this.b=b
this.c=c},
qm:function qm(a){this.a=a},
dx:function dx(a,b){this.a=a
this.b=b},
kr:function kr(a,b){this.b=a
this.f=b},
qW:function qW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r3:function r3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r2:function r2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qY:function qY(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function r_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qZ:function qZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r1:function r1(a,b,c){this.a=a
this.b=b
this.c=c},
r0:function r0(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
r4:function r4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
r6:function r6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rb:function rb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r9:function r9(a,b,c){this.a=a
this.b=b
this.c=c},
r8:function r8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r7:function r7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r5:function r5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ra:function ra(a,b,c,d,e,f,g,h,i,j){var _=this
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
bN:function bN(a,b){this.a=a
this.b=b},
b5:function b5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
eY:function eY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
eX:function eX(a,b){this.a=a
this.b=b},
rF:function rF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
rG:function rG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zR(a){return new A.f_(a)},
CO(a){return new A.bH(a)},
Df(a){return new A.cf(a)},
DM(a){return new A.ci(a)},
be(a){return new A.eM(a)},
Hd(a){var s=a.wm(),r=new A.x2()
return A.r(r.$2(A.y3(s),4))+"-"+A.r(r.$1(A.y1(s)))+"-"+A.r(r.$1(A.qM(s)))+" "+A.r(r.$1(A.y_(s)))+":"+A.r(r.$1(A.y0(s)))+":"+A.r(r.$1(A.y2(s)))+"."+A.r(r.$2(A.zF(s),3))+"Z"},
bh:function bh(){},
f_:function f_(a){this.a=a},
dX:function dX(a,b){this.b=a
this.a=b},
hP:function hP(a){this.a=a},
bH:function bH(a){this.a=a},
cf:function cf(a){this.a=a},
ci:function ci(a){this.a=a},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
ex:function ex(a){this.a=a},
dy:function dy(a){this.a=a},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hK:function hK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j7:function j7(a,b){this.a=a
this.b=b},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
x2:function x2(){},
Eb(a){return 0.5+B.av.vD()},
yb(a){var s,r=a.toLowerCase()
A:{if("jan"===r){s=1
break A}if("feb"===r){s=2
break A}if("mar"===r){s=3
break A}if("apr"===r){s=4
break A}if("may"===r){s=5
break A}if("jun"===r){s=6
break A}if("jul"===r){s=7
break A}if("aug"===r){s=8
break A}if("sep"===r){s=9
break A}if("oct"===r){s=10
break A}if("nov"===r){s=11
break A}if("dec"===r){s=12
break A}s=null
break A}return s},
Ec(a){var s,r,q,p,o,n,m,l,k=null,j=A.ah("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dE(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.yb(r)
if(q==null)return k
r=s[3]
r.toString
r=A.av(r)
p=s[1]
p.toString
p=A.av(p)
o=s[4]
o.toString
o=A.av(o)
n=s[5]
n.toString
n=A.av(n)
s=s[6]
s.toString
return A.yc(r,q,p,o,n,A.av(s))}j=A.ah("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0).dE(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.yb(r)
if(q==null)return k
r=s[3]
r.toString
m=A.av(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.av(r)
p=s[4]
p.toString
p=A.av(p)
o=s[5]
o.toString
o=A.av(o)
s=s[6]
s.toString
return A.yc(l,q,r,p,o,A.av(s))}j=A.ah("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0).dE(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.yb(r)
if(q==null)return k
r=s[6]
r.toString
r=A.av(r)
p=s[2]
p.toString
p=A.av(p)
o=s[3]
o.toString
o=A.av(o)
n=s[4]
n.toString
n=A.av(n)
s=s[5]
s.toString
return A.yc(r,q,p,o,n,A.av(s))}return k},
yc(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.xF(a,b,c,d,e,f,0)
return s}catch(r){return null}},
rH:function rH(a,b){this.at=a
this.ay=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
rS:function rS(a,b){this.a=a
this.b=b},
GT(a,b,c,d,e,f,g,h,i,j){var s,r=A.BE(a,b,c,null,d,e,f,g,h,i,j),q=A.E(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.aH[s],r[s])
return q},
BE(a,b,c,d,e,f,g,h,i,j,k){var s=[]
s.push(j)
s.push(i)
s.push(f.b)
s.push(h)
s.push(b)
s.push(a)
s.push(e)
s.push(g)
s.push(c)
s.push(k)
s.push(d)
return s},
BK(a){return new A.a7(a,new A.xn(),A.a8(a).i("a7<1,k>")).L(0,", ")},
kR(a){return A.mC("lp_sync_row",new A.rR(a))},
qh(a){return A.mC("lp_outbox",new A.qi(a))},
DN(a){return A.mC("lp_op_queue",new A.qc(a))},
iX(a,b){var s=0,r=A.h(t.gi),q,p,o,n,m,l,k,j,i,h
var $async$iX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aU(n)
l=A.P(b,A.o(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.L(A.aF(k,"?",!1,n),", ")
k=a.ae("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$iX)
case 3:j.E(0,i.aH(h.a(d),new A.xl(),n))
k=A.P(l,n)
k.push("pending")
k.push("failed")
k=a.ae("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$iX)
case 4:j.E(0,i.aH(h.a(d),new A.xm(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iX,r)},
fJ(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$fJ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.eQ("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$fJ)
case 5:s=p.bW(o.a(f))?2:4
break
case 2:q=a.az(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$fJ)
case 6:s=3
break
case 4:q=a.aw("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$fJ)
case 7:case 3:return A.e(null,r)}})
return A.f($async$fJ,r)},
wT(a,b){var s=0,r=A.h(t.H),q,p
var $async$wT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aw(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$wT)
case 3:case 1:return A.e(q,r)}})
return A.f($async$wT,r)},
cb(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cb=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.mm("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cb)
case 2:m=l.M(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.a2("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cb)
case 5:o=A.ac(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.wT(a,o),$async$cb)
case 8:case 7:s=3
break
case 4:m=a.a2("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cb)
case 9:m=t.N
m=a.G("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cb)
case 10:s=d?11:12
break
case 11:m=a.a2("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cb)
case 13:n=a.a2("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cb)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cb,r)},
cn:function cn(a,b){this.a=a
this.b=b},
fO:function fO(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
xn:function xn(){},
cm:function cm(a,b,c,d,e,f,g,h,i,j){var _=this
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
rR:function rR(a){this.a=a},
cj:function cj(a,b,c,d,e,f,g,h,i,j){var _=this
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
qi:function qi(a){this.a=a},
dV:function dV(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
qc:function qc(a){this.a=a},
xl:function xl(){},
xm:function xm(){},
jm:function jm(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.a=g
_.b=h
_.d=_.c=null
_.f=_.e=!1
_.r=null},
np:function np(a){this.a=a},
Dz(a){var s,r,q
try{s=A.mx(a)
if(t.f.b(s)){r=A.fE(s)
return r}}catch(q){}return null},
DA(a){if(a instanceof A.i0)return A.eo(new A.l5(2,a.a,a.b,null).aq())
t.bp.a(a)
return A.xW(a.a,a.b,a.c,a.d)},
xW(a,b,c,d){return A.eo(new A.l5(2,a,null,new A.ti(b,c,d)).aq())},
iR(a){return A.Gb(a)},
Gb(a){var s=0,r=A.h(t.A),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$iR=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.iZ()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a_(f.getDirectory(),k),$async$iR)
case 7:n=c
j=$.fM()
i=A.P(j.d7(0,"drift_db"),t.N)
m=i
J.yY(m,j.d7(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ao(l)===0){s=9
break}s=11
return A.a(A.a_(n.getDirectoryHandle(l,{create:!1}),k),$async$iR)
case 11:n=c
case 9:m.length===j||(0,A.B)(m),++h
s=8
break
case 10:m=n
q=m
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iR,r)},
mr(a,b){return A.Gc(a,b)},
Gc(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$mr=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.iR(a),$async$mr)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a_(m.getFileHandle(A.d7(b,$.fM().a).gjb(),{create:!1}),t.m),$async$mr)
case 8:q=!0
s=1
break
p=2
s=7
break
case 5:p=4
l=o.pop()
q=!1
s=1
break
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$mr,r)},
mt(a,b){return A.Gj(a,b)},
Gj(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$mt=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.iR(a),$async$mt)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.xL(m,A.d7(b,$.fM().a).gjb()),$async$mt)
case 8:p=2
s=7
break
case 5:p=4
l=o.pop()
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$mt,r)},
pu:function pu(){},
pv:function pv(a){this.a=a},
pw:function pw(a){this.a=a},
k1:function k1(a,b){this.a=a
this.d=b},
lu:function lu(a){this.a=a},
bG(a){var s,r,q
if(a instanceof A.b2)return A.m(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.aA){s=t.N
return A.m(["lp:bigint",a.m(0)],s,s)}if(t.p.b(a))return A.m(["lp:bytes",A.d2(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.aH(a,A.Bm(),s)
r=A.P(r,r.$ti.i("S.E"))
return A.d2(r,s)}if(t.f.b(a)){q=A.E(t.N,t.X)
a.ad(0,new A.wY(q))
return q}if(a==null||A.c9(a)||A.aE(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.O("Value of type "+J.cR(a).m(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
my(a){var s,r,q,p,o,n,m,l="lp:datetime",k=null,j="lp:bigint",i="lp:bytes"
if(t.f.b(a)){if(a.gl(a)===1&&a.H(l)){s=a.h(0,l)
if(A.aE(s)){r=B.c.aG(s,1000)
q=B.c.R(s-r,1000)
if(q<-864e13||q>864e13)A.x(A.ak(q,-864e13,864e13,"millisecondsSinceEpoch",k))
if(q===864e13&&r!==0)A.x(A.b1(r,"microsecond",u.B))
A.bF(!0,"isUtc",t.y)
return new A.b2(q,r,!0)}throw A.b(A.O("Malformed wire DateTime: "+A.r(s),k))}if(a.gl(a)===1&&a.H(j)){s=a.h(0,j)
if(typeof s=="string")return A.yl(s,k)
throw A.b(A.O("Malformed wire BigInt: "+A.r(s),k))}if(a.gl(a)===1&&a.H(i)){s=a.h(0,i)
if(t.j.b(s)){r=J.K(s)
q=r.gl(s)
p=new Uint8Array(q)
for(o=0;o<r.gl(s);++o){n=r.h(s,o)
if(!A.aE(n)||n<0||n>255)throw A.b(A.O("Malformed wire byte at index "+o+": "+A.r(n),k))
p[o]=n}return p}throw A.b(A.O("Malformed wire bytes: "+A.r(s),k))}m=A.E(t.N,t.X)
a.ad(0,new A.wS(m))
return m}if(t.j.b(a)){r=t.X
q=J.aH(a,A.Bl(),r)
q=A.P(q,q.$ti.i("S.E"))
return A.d2(q,r)}return a},
wY:function wY(a){this.a=a},
wS:function wS(a){this.a=a},
iV(a,b,c,d,e){return A.Ho(a,b,c,d,e,e)},
Ho(a,b,c,d,e,f){var s=0,r=A.h(f),q,p=2,o=[],n,m,l
var $async$iV=A.c(function(g,h){if(g===1){o.push(h)
s=p}for(;;)switch(s){case 0:p=4
d.$0()
c.$0()
s=7
return A.a(b.$0(),$async$iV)
case 7:n=h
q=n
s=1
break
p=2
s=6
break
case 4:p=3
l=o.pop()
s=8
return A.a(a.$0(),$async$iV)
case 8:throw l
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iV,r)},
l_:function l_(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=0
_.x=g},
t_:function t_(a){this.d=a},
HB(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.E(t.N,t.X)
try{if(t.f.b(a)){s=A.fE(a)
r=A.E(t.N,t.X)
q=t.j
if(q.b(J.R(s,n))){p=J.R(s,n)
p.toString
p=J.aH(q.a(p),new A.xg(),t.bU)
q=A.P(p,p.$ti.i("S.E"))
J.bU(r,n,q)}if(A.aE(J.R(s,m)))J.bU(r,m,J.R(s,m))
if(A.c9(J.R(s,l)))J.bU(r,l,J.R(s,l))
return r}}catch(o){}return A.E(t.N,t.X)},
BL(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.fE(a).h(0,b)
return s}}catch(r){}return null},
Hi(a,b){if(b!=null)return!1
return B.b.cJ(a,new A.x7())},
xg:function xg(){},
x7:function x7(){},
x6:function x6(){},
HH(a){if(a instanceof A.hm){if(a instanceof A.hY)return"ValidationException"
if(a instanceof A.hW)return"UniqueConstraintException"
if(a instanceof A.hz)return"NotNullConstraintException"
if(a instanceof A.fV)return"CheckConstraintException"
if(a instanceof A.hF)return"PrimaryKeyConstraintException"
if(a instanceof A.h7)return"ForeignKeyConstraintException"
if(a instanceof A.cH)return"StorageError"
if(a instanceof A.hM)return"RecordNotFoundException"
if(a instanceof A.hO)return"SchemaTooNewError"
if(a instanceof A.h9)return"FtsUnavailableError"
if(a instanceof A.eP)return"SchemaRegistrationError"
if(a instanceof A.fX)return"ConflictBlockedError"
if(a instanceof A.ev)return"DestructiveMigrationRefusedError"
if(a instanceof A.rf)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bh){if(a instanceof A.f_)return"TransientNetworkError"
if(a instanceof A.dX)return"ServerBusyError"
if(a instanceof A.hP)return"ServerError"
if(a instanceof A.bH)return"AuthError"
if(a instanceof A.cf)return"ForbiddenError"
if(a instanceof A.ci)return"NotFoundError"
if(a instanceof A.eL)return"PayloadError"
if(a instanceof A.eM)return"ProtocolError"
if(a instanceof A.ex)return"DuplicateIdError"
if(a instanceof A.dy)return"BatchFailedError"
return"SyncError"}if(a instanceof A.hI)return"ProtocolEnvelopeException"
if(a instanceof A.h0)return"DatabaseWorkerClosedException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bf)return"StateError"
if(a instanceof A.bv)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
El(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.aE(s))throw A.b(A.d8('Request "v" must be an int.'))
if(!A.aE(r)||r<0)throw A.b(A.d8('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.ct.D(0,q))throw A.b(A.d8("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.d8('Request "a" must be a map.'))
return new A.f6(s,r,q,p.cS(0,new A.tl(),t.N,t.X))},
d8(a){return new A.hI(a)},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tl:function tl(){},
l5:function l5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ti:function ti(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a){this.a=a},
hI:function hI(a){this.a=a},
kv:function kv(a,b){this.a=a
this.b=b},
zZ(a){return A.bl(A.bt(a).a,null)},
A_(a){return A.bl(J.cR(a).a,null)},
T:function T(a){this.a=a},
HC(a){if(!t.f.b(a))throw A.b(A.a2("Schema must be a map: "+A.r(a),null,null))
return A.zc(A.fE(a),t.X)},
fE(a){var s=A.E(t.N,t.X)
a.ad(0,new A.wV(s))
return s},
En(a){var s,r=A.E(t.N,t.X)
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
A0(a){var s,r=A.E(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.bG(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.bG(s))
return r},
f7:function f7(){},
i0:function i0(a,b){this.b=a
this.a=b},
e3:function e3(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
wV:function wV(a){this.a=a},
wU:function wU(){},
l9:function l9(){},
ts:function ts(a){this.a=a},
tt:function tt(a){this.a=a},
tr:function tr(a,b,c,d,e){var _=this
_.ax=$
_.a=a
_.c=b
_.d=null
_.e=1
_.f=c
_.r=d
_.w=1
_.Q=_.z=_.y=_.x=null
_.as=e
_.at=null},
tu:function tu(a){this.a=a},
l7:function l7(){},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tn:function tn(a){this.a=a},
l8:function l8(){},
tp:function tp(a,b,c){this.a=a
this.b=b
this.c=c},
tq:function tq(){},
lb:function lb(){},
tv:function tv(a){this.a=a},
lc:function lc(){},
we:function we(a,b){this.a=a
this.b=b},
ld:function ld(){},
tA:function tA(a){this.a=a},
tB:function tB(a,b){this.a=a
this.b=b},
w0:function w0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
le:function le(){},
tC:function tC(){},
tD:function tD(){},
tE:function tE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f8:function f8(a){this.a=a},
lf:function lf(){},
tL:function tL(a,b,c){this.a=a
this.b=b
this.c=c},
tM:function tM(a){this.a=a},
tO:function tO(a,b,c){this.a=a
this.b=b
this.c=c},
tN:function tN(a,b,c){this.a=a
this.b=b
this.c=c},
tG:function tG(a){this.a=a},
tK:function tK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
tF:function tF(a,b,c){this.a=a
this.b=b
this.c=c},
tJ:function tJ(a,b,c){this.a=a
this.b=b
this.c=c},
tI:function tI(a,b,c){this.a=a
this.b=b
this.c=c},
tH:function tH(a,b,c){this.a=a
this.b=b
this.c=c},
md:function md(){},
me:function me(){},
mf:function mf(){},
mg:function mg(){},
mh:function mh(){},
mi:function mi(){},
mj:function mj(){},
B0(a){return a},
Be(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.ab("")
o=a+"("
p.a=o
n=A.a8(b)
m=n.i("c4<1>")
l=new A.c4(b,0,s,m)
l.ia(b,0,s,n.c)
m=o+new A.a7(l,new A.wH(),m.i("a7<S.E,k>")).L(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.O(p.m(0),null))}},
nJ:function nJ(a){this.a=a},
nK:function nK(){},
nL:function nL(){},
wH:function wH(){},
pl:function pl(){},
d7(a,b){var s,r,q,p,o,n=b.nh(a),m=b.cn(a)
if(n!=null)a=B.a.ac(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.bW(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.bW(a.charCodeAt(o))){r.push(B.a.q(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ac(a,p))
q.push("")}return new A.kj(b,n,m,r,q)},
kj:function kj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
zC(a){return new A.kk(a)},
kk:function kk(a){this.a=a},
Ea(){var s,r,q,p,o,n,m,l,k=null
if(A.ye().gaP()!=="file")return $.j_()
if(!B.a.ci(A.ye().gbd(),"/"))return $.j_()
s=A.AC(k,0,0)
r=A.AA(k,0,0,!1)
q=A.w5(k,0,0,k)
p=A.Az(k,0,0)
o=A.w4(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.AB("a/b",0,3,k,"",m)
if(n&&!B.a.O(l,"/"))l=A.yv(l,m)
else l=A.ei(l)
if(A.iJ("",s,n&&B.a.O(l,"//")?"":r,o,l,q,p).jT()==="a\\b")return $.mF()
return $.C3()},
rE:function rE(){},
qK:function qK(a,b,c){this.d=a
this.e=b
this.f=c},
t2:function t2(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
tm:function tm(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
xK(a,b){if(b<0)A.x(A.aJ("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.x(A.aJ("Offset "+b+u.D+a.gl(0)+"."))
return new A.jH(a,b)},
rn:function rn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
jH:function jH(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
Dk(a,b){var s=A.Dl(A.l([A.EL(a,!0)],t.pg)),r=new A.pb(b).$0(),q=B.c.m(B.b.ga1(s).b+1),p=A.Dm(s)?0:3,o=A.a8(s)
return new A.oS(s,r,null,1+Math.max(q.length,p),new A.a7(s,new A.oU(),o.i("a7<1,i>")).w5(0,B.b2),!A.Hr(new A.a7(s,new A.oV(),o.i("a7<1,j?>"))),new A.ab(""))},
Dm(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.u(r.c,q.c))return!1}return!0},
Dl(a){var s,r,q=A.Hh(a,new A.oX(),t.nf,t.K)
for(s=A.o(q),r=new A.aM(q,q.r,q.e,s.i("aM<2>"));r.k();)J.z0(r.d,new A.oY())
s=s.i("aI<1,2>")
r=s.i("h3<n.E,c8>")
s=A.P(new A.h3(new A.aI(q,s),new A.oZ(),r),r.i("n.E"))
return s},
EL(a,b){var s=new A.vg(a).$0()
return new A.b9(s,!0,null)},
EN(a){var s,r,q,p,o,n,m=a.gaF()
if(!B.a.D(m,"\r\n"))return a
s=a.gI().gam()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gK()
p=a.gZ()
o=a.gI().ga9()
p=A.kD(s,a.gI().gal(),o,p)
o=A.A(m,"\r\n","\n")
n=a.gb1()
return A.ro(r,p,o,A.A(n,"\r\n","\n"))},
EO(a){var s,r,q,p,o,n,m
if(!B.a.ci(a.gb1(),"\n"))return a
if(B.a.ci(a.gaF(),"\n\n"))return a
s=B.a.q(a.gb1(),0,a.gb1().length-1)
r=a.gaF()
q=a.gK()
p=a.gI()
if(B.a.ci(a.gaF(),"\n")){o=A.x1(a.gb1(),a.gaF(),a.gK().gal())
o.toString
o=o+a.gK().gal()+a.gl(a)===a.gb1().length}else o=!1
if(o){r=B.a.q(a.gaF(),0,a.gaF().length-1)
if(r.length===0)p=q
else{o=a.gI().gam()
n=a.gZ()
m=a.gI().ga9()
p=A.kD(o-1,A.Aj(s),m-1,n)
q=a.gK().gam()===a.gI().gam()?p:a.gK()}}return A.ro(q,p,r,s)},
EM(a){var s,r,q,p,o
if(a.gI().gal()!==0)return a
if(a.gI().ga9()===a.gK().ga9())return a
s=B.a.q(a.gaF(),0,a.gaF().length-1)
r=a.gK()
q=a.gI().gam()
p=a.gZ()
o=a.gI().ga9()
p=A.kD(q-1,s.length-B.a.cR(s,"\n")-1,o-1,p)
return A.ro(r,p,s,B.a.ci(a.gb1(),"\n")?B.a.q(a.gb1(),0,a.gb1().length-1):a.gb1())},
Aj(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.hF(a,"\n",s-2)-1
else return s-B.a.cR(a,"\n")-1},
oS:function oS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
pb:function pb(a){this.a=a},
oU:function oU(){},
oT:function oT(){},
oV:function oV(){},
oX:function oX(){},
oY:function oY(){},
oZ:function oZ(){},
oW:function oW(a){this.a=a},
pc:function pc(){},
p_:function p_(a){this.a=a},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
p7:function p7(a,b){this.a=a
this.b=b},
p8:function p8(a){this.a=a},
p9:function p9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
p4:function p4(a,b){this.a=a
this.b=b},
p5:function p5(a,b){this.a=a
this.b=b},
p0:function p0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
p1:function p1(a,b,c){this.a=a
this.b=b
this.c=c},
p2:function p2(a,b,c){this.a=a
this.b=b
this.c=c},
p3:function p3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pa:function pa(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c){this.a=a
this.b=b
this.c=c},
vg:function vg(a){this.a=a},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kD(a,b,c,d){if(a<0)A.x(A.aJ("Offset may not be negative, was "+a+"."))
else if(c<0)A.x(A.aJ("Line may not be negative, was "+c+"."))
else if(b<0)A.x(A.aJ("Column may not be negative, was "+b+"."))
return new A.c2(d,a,c,b)},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kE:function kE(){},
kG:function kG(){},
E3(a,b,c){return new A.eS(c,a,b)},
kH:function kH(){},
eS:function eS(a,b,c){this.c=a
this.a=b
this.b=c},
eT:function eT(){},
ro(a,b,c,d){var s=new A.cF(d,a,b,c)
s.nR(a,b,c)
if(!B.a.D(d,c))A.x(A.O('The context line "'+d+'" must contain "'+c+'".',null))
if(A.x1(d,c,a.gal())==null)A.x(A.O('The span text "'+c+'" must start at column '+(a.gal()+1)+' in a line within "'+d+'".',null))
return s},
cF:function cF(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
E7(a){var s
A:{if(18===a){s=B.cu
break A}if(23===a){s=B.cv
break A}if(9===a){s=B.cw
break A}s=null
break A}return s},
hR:function hR(a,b){this.a=a
this.b=b},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
E6(a,b,c,d,e,f,g){return new A.cG(d,b,c,e,f,a,g)},
cG:function cG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rs:function rs(){},
o3:function o3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
oc:function oc(a){this.a=a},
ob:function ob(a){this.a=a},
od:function od(a){this.a=a},
o9:function o9(a){this.a=a},
o8:function o8(a){this.a=a},
oa:function oa(a){this.a=a},
o5:function o5(a){this.a=a},
o4:function o4(a){this.a=a},
o6:function o6(a){this.a=a},
o7:function o7(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
vU:function vU(a,b){this.a=a
this.b=b},
vV:function vV(a,b,c){this.a=a
this.b=b
this.c=c},
vW:function vW(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(){},
eU:function eU(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
xP(a,b){var s=$.mD()
return new A.jL(A.E(t.N,t.a_),s,a)},
jL:function jL(a,b,c){this.d=a
this.b=b
this.a=c},
lF:function lF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
HD(a){var s=J.CK(new v.G.URL(a,"file:///").pathname,"/")
return new A.bj(s,new A.xh(),A.a8(s).i("bj<1>"))},
xh:function xh(){},
nN:function nN(){},
kx:function kx(a,b,c){this.d=a
this.a=b
this.c=c},
bL:function bL(a,b){this.a=a
this.b=b},
vE:function vE(a){this.a=a
this.b=-1},
lU:function lU(){},
lV:function lV(){},
lX:function lX(){},
lY:function lY(){},
qf:function qf(a,b){this.a=a
this.b=b},
DX(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bp(r,"step")}return s},
dE:function dE(){},
dM:function dM(a){this.a=a},
jq:function jq(a){this.a=a},
f3(a){return new A.cL(a)},
z4(a,b){var s,r,q,p
if(b==null)b=$.mD()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cp(256)
r&2&&A.C(a)
a[q]=p}},
cL:function cL(a){this.a=a},
hQ:function hQ(a){this.a=a},
aP:function aP(){},
jf:function jf(){},
je:function je(){},
HG(a,b){var s=null,r=new A.dO(t.kk)
return A.xr(a,new A.i1(s,s,s,s,s,s,s,s,new A.xp(new A.xo(r,A.wA(new A.xq(r)))),s,s,s,s),s,b)},
e6:function e6(a){var _=this
_.d=a
_.c=_.b=_.a=null},
xq:function xq(a){this.a=a},
xo:function xo(a,b){this.a=a
this.b=b},
xp:function xp(a){this.a=a},
td:function td(a){this.a=a},
t8:function t8(a,b,c){this.a=a
this.b=b
this.c=c},
tf:function tf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
te:function te(a,b,c){this.b=a
this.c=b
this.d=c},
e1:function e1(){},
dd:function dd(){},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
bE(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.I(r)
if(q instanceof A.cL){s=q
return s.a}else return 1}},
jr:function jr(a){this.b=this.a=$
this.d=a},
nS:function nS(a,b,c){this.a=a
this.b=b
this.c=c},
nP:function nP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nU:function nU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nW:function nW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nY:function nY(a,b){this.a=a
this.b=b},
nR:function nR(a){this.a=a},
nX:function nX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o1:function o1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
o_:function o_(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
this.b=b},
nT:function nT(a,b,c){this.a=a
this.b=b
this.c=c},
nV:function nV(a,b){this.a=a
this.b=b},
o0:function o0(a,b){this.a=a
this.b=b},
nQ:function nQ(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a,b){this.a=a
this.$ti=b},
mQ:function mQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mS:function mS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mR:function mR(a,b,c){this.a=a
this.b=b
this.c=c},
ce(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ae(s,b.i("ae<0>")),q=t.m
A.b8(a,"success",new A.ns(r,a,b),!1,q)
A.b8(a,"error",new A.nt(r,a),!1,q)
return s},
D1(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ae(s,b.i("ae<0>")),q=t.m
A.b8(a,"success",new A.nx(r,a,b),!1,q)
A.b8(a,"error",new A.ny(r,a),!1,q)
A.b8(a,"blocked",new A.nz(r),!1,q)
return s},
ea:function ea(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
uJ:function uJ(a,b){this.a=a
this.b=b},
uK:function uK(a,b){this.a=a
this.b=b},
ns:function ns(a,b,c){this.a=a
this.b=b
this.c=c},
nt:function nt(a,b){this.a=a
this.b=b},
nx:function nx(a,b,c){this.a=a
this.b=b
this.c=c},
ny:function ny(a,b){this.a=a
this.b=b},
nz:function nz(a){this.a=a},
iZ(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
zl(a,b,c){var s=a.read(b,c)
return s},
zm(a,b,c){var s=a.write(b,c)
return s},
xL(a,b){return A.a_(a.removeEntry(b,{recursive:!1}),t.X)},
zk(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.x(A.O("Target object does not implement the async iterable interface",null))
return new A.ee(new A.oE(),new A.fQ(a,s),s.i("ee<a3.T,H>"))},
oE:function oE(){},
t9:function t9(a){this.a=a},
ta:function ta(a){this.a=a},
tc(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$tc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a_(p.fetch(new p.URL(a,A.b_(p.location).href),null),t.m),$async$tc)
case 3:q=o.tb(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$tc,r)},
tb(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$tb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.jr(A.E(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.t9(p).hH(a),$async$tb)
case 3:q=new o.f4(new n.td(m.Ek(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$tb,r)},
f4:function f4(a){this.a=a},
EP(a){var s=new A.ik(a,new A.ae(new A.p($.t,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.nV(a)
return s},
jN(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$jN=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.mT(a)
n=A.xP("dart-memory",null)
m=$.mD()
l=new A.cZ(o,n,new A.dO(t.p3),A.aU(p),A.E(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.hL(),$async$jN)
case 3:s=4
return A.a(l.ee(),$async$jN)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jN,r)},
mT:function mT(a){this.a=null
this.b=a},
mW:function mW(a){this.a=a},
mV:function mV(a,b,c){this.a=a
this.b=b
this.c=c},
mU:function mU(a){this.a=a},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
vj:function vj(a){this.a=a},
vk:function vk(a){this.a=a},
vi:function vi(a){this.a=a},
vl:function vl(a,b,c){this.a=a
this.b=b
this.c=c},
vn:function vn(a,b){this.a=a
this.b=b},
vm:function vm(a,b){this.a=a
this.b=b},
uV:function uV(a,b,c){this.a=a
this.b=b
this.c=c},
uW:function uW(a,b){this.a=a
this.b=b},
lO:function lO(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
pf:function pf(a,b,c){this.a=a
this.b=b
this.c=c},
pg:function pg(){},
pe:function pe(a,b){this.a=a
this.b=b},
lG:function lG(a,b,c){this.a=a
this.b=b
this.c=c},
vh:function vh(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
ii:function ii(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
ib:function ib(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
fc:function fc(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
fw:function fw(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
zM(a){var s=A.xP("dart-memory",null),r=$.mD()
return new A.eR(s,r,a)},
kz(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$kz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.iZ()
if(j==null)throw A.b(A.f3(1))
p=t.m
s=3
return A.a(A.a_(j.getDirectory(),p),$async$kz)
case 3:o=d
n=A.HD(a),m=J.M(n.a),n=new A.de(m,n.b,n.$ti.i("de<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a_(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$kz)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.au(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kz,r)},
kA(a){var s=0,r=A.h(t.m),q
var $async$kA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.kz(a,!0),$async$kA)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kA,r)},
rl(a,b){var s=0,r=A.h(t.g_),q,p
var $async$rl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.iZ()==null)throw A.b(A.f3(1))
p=A
s=3
return A.a(A.kA(a),$async$rl)
case 3:q=p.rk(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$rl,r)},
rk(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$rk=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.zM(c)
s=3
return A.a(p.cq(a,!1),$async$rk)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$rk,r)},
eA:function eA(a,b,c){this.c=a
this.a=b
this.b=c},
eR:function eR(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
rm:function rm(a,b){this.a=a
this.b=b},
m3:function m3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
vA:function vA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ek(a,b){var s=A.b_(a.exports.memory)
b.b!==$&&A.BQ()
b.b=s
s=new A.t3(s,b,a.exports)
s.nS(a,b)
return s},
lg(a,b){var s,r=A.bB(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
e4(a,b){var s=a.buffer,r=A.lg(a,b)
return B.k.hj(A.bB(s,b,r))},
yf(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.k.hj(A.bB(s,b,c==null?A.lg(a,b):c))},
t3:function t3(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
t4:function t4(a){this.a=a},
t5:function t5(a){this.a=a},
t6:function t6(a){this.a=a},
t7:function t7(a){this.a=a},
wP(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$wP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.j0()
s=l!=null?3:5
break
case 3:p=A.Gf()
s=6
return A.a(A.i_(l,p,null,null,!1),$async$wP)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.au({port:m.port1,lockName:p},new A.fY(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wP,r)},
Gf(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bd(97+$.Ct().cp(26))
return r.charCodeAt(0)==0?r:r},
CS(a){return new A.fU(a)},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
qQ:function qQ(){},
qU:function qU(a){this.a=a},
qV:function qV(a){this.a=a},
qT:function qT(a){this.a=a},
qS:function qS(a){this.a=a},
qR:function qR(a){this.a=a},
fU:function fU(a){this.a=a},
o2:function o2(){},
jp:function jp(a){this.a=a},
nO:function nO(a){this.a=a},
e2:function e2(){},
jG(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$jG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.kA(a),$async$jG)
case 3:p=e
o=A.zM(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cq(p,!0),$async$jG)
case 6:case 5:q=new A.jF(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jG,r)},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
oQ:function oQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
i_(a,b,c,d,e){var s,r,q={},p=new A.p($.t,t.nI),o=new A.ae(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.xM(A.a_(a.request(b,s,A.ct(new A.tj(q,o))),r),new A.tk(q,d,o),r,t.K)
return p},
tj:function tj(a,b){this.a=a
this.b=b},
tk:function tk(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a){this.a=a},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
of:function of(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oe:function oe(a,b){this.a=a
this.b=b},
og:function og(a){this.a=a},
ht:function ht(a){this.a=!1
this.b=a},
q9:function q9(a,b){this.a=a
this.b=b},
q8:function q8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
q7:function q7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
CZ(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.bF.b(n)?n:new A.bw(n,A.a8(n).i("bw<1,k>"))
for(s=J.K(m),r=0;r<s.gl(m)/2;++r){q=r*2
o.push(new A.au(A.ez(B.c7,s.h(m,q)),s.h(m,q+1)))}s=A.fy(a.b)
q=A.fy(a.c)
p=A.fy(a.d)
return new A.dF(o,s,q,A.fy(a.g),p)},
dF:function dF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
DZ(a){var s
if(J.u(a.t,"errorResponse")){s=A.D9(a)
if(s!=null&&s instanceof A.cS)return s
else return new A.eO(a.e)}else return new A.eO("Did not respond with expected type, got "+A.r(a))},
D9(a){var s=a.s,r=s==null?null:A.ai(s)
A:{if(0===r){s=A.Da(t.c.a(a.r))
break A}if(1===r){s=B.a7
break A}s=null
break A}return s},
Da(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.w("Pattern matching error"))
n=new A.ov()
l=A.ai(A.ej(l))
A.J(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.dG(i,h,A.bB(h,0,o))}else p=o
n=n.$1(k)
A.AL(g)
return new A.cG(s,r,l,g==null?o:A.ai(g),n,q,p)},
Db(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Ef(l)
break A}r=a.b
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
E_(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.oQ(a2,512,"transfer" in a2)
a5.lN(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.DX(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.oQ(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.af}else g=B.ag
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.ah
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.lg(r,f)
f=new Uint8Array(e,f,d)
c=new A.cP(!1).cA(f,0,a,!0)
i=c
g=B.ai
break
case 4:i=s.kh(j)
g=B.aj
break
case 5:default:i=a
g=B.ak}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.lg(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.cP(!1).cA(a0,0,a,!0)}return A.BD(!1,b,0,0,a1,a,a3.wj(0))},
Hs(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
ov:function ov(){},
BD(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
fF(a){var s,r,q,p,o=v.G,n=new o.Array()
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
H6(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
k5:function k5(a,b,c){this.a=a
this.b=b
this.$ti=c},
rh:function rh(){},
De(a){var s,r
for(s=0;s<5;++s){r=B.bX[s]
if(r.c===a)return r}throw A.b(A.O("Unknown FS implementation: "+a,null))},
Ee(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.ak
break A}q=A.aE(a)
p=q?a:j
if(q){s=p
r=B.af
break A}q=a instanceof A.aA
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.m(0))
r=B.ag
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.ah
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.ai
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aj
break A}q=A.c9(a)
k=q?a:j
if(q){s=k
r=B.aY
break A}throw A.b(A.O("Unsupported value: "+A.r(a),j))}return new A.au(r,s)},
Ef(a){var s,r,q,p,o,n
if(a instanceof A.dG)return new A.au(a.a,a.b)
s=[]
r=J.K(a)
q=r.gl(a)
p=new Uint8Array(q)
for(o=0;o<r.gl(a);++o){n=A.Ee(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.au(s,t.a.a(B.d.gaJ(p)))},
cV:function cV(a,b,c){this.c=a
this.a=b
this.b=c},
c6:function c6(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
mv(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$mv=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.b_(i.indexedDB)
i=$.j0()
i=i==null?null:A.i_(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bk(i,t.b3),$async$mv)
case 3:l=b
p=5
s=8
return A.a(A.D0(m.open("drift_mock_db"),t.m),$async$mv)
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
if(i!=null)i.a.ao()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$mv,r)},
wL(a){return A.GW(a)},
GW(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$wL=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.b_(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.ct(new A.wM(j,m))
s=7
return A.a(A.D_(m,t.m),$async$wL)
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
return A.f($async$wL,r)},
fI(){var s=0,r=A.h(t.bF),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$fI=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.iZ()
if(h==null){q=B.o
s=1
break}j=t.m
s=3
return A.a(A.a_(h.getDirectory(),j),$async$fI)
case 3:m=b
p=5
s=8
return A.a(A.a_(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$fI)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.o
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.l([],t.s)
j=new A.bR(A.bF(A.zk(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$fI)
case 14:if(!b){s=13
break}k=j.gn()
if(J.u(k.kind,"directory"))J.bV(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.A(),$async$fI)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fI,r)},
D_(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ae(s,b.i("ae<0>")),q=t.m
A.b8(a,"success",new A.nq(r,a,b),!1,q)
A.b8(a,"error",new A.nr(r,a),!1,q)
return s},
D0(a,b){var s=new A.p($.t,b.i("p<0>")),r=new A.ae(s,b.i("ae<0>")),q=t.m
A.b8(a,"success",new A.nu(r,a,b),!1,q)
A.b8(a,"error",new A.nv(r,a),!1,q)
A.b8(a,"blocked",new A.nw(r,a),!1,q)
return s},
wM:function wM(a,b){this.a=a
this.b=b},
nq:function nq(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function nr(a,b){this.a=a
this.b=b},
nu:function nu(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function nv(a,b){this.a=a
this.b=b},
nw:function nw(a,b){this.a=a
this.b=b},
qL:function qL(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
eO:function eO(a){this.a=a},
cS:function cS(a){this.a=a},
FK(a){var s=a.gm8()
return new A.ee(new A.wz(),s,A.o(s).i("ee<a3.T,H>"))},
Af(a,b){var s=A.l([],t.B),r=b==null?a.b:b
return new A.fb(a,r,new A.iz(),new A.iz(),new A.iz(),s)},
EG(a,b,c){var s=t.S
s=new A.i9(c,A.l([],t.fV),a.a,new A.ax(new A.p($.t,t.D),t.h),A.E(s,t.br),A.E(s,t.m))
s.nP(a)
s.nU(a,b,c)
return s},
AR(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
dq(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dq=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.iZ()
if(b==null){q=B.ac
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.j0()
d=d==null?null:A.i_(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bk(d,t.b3),$async$dq)
case 7:j=a1
d=t.m
s=8
return A.a(A.a_(b.getDirectory(),d),$async$dq)
case 8:m=a1
s=9
return A.a(A.a_(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$dq)
case 9:l=a1
s=10
return A.a(A.iT(l),$async$dq)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.xR(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a_(A.b_(e),t.X),$async$dq)
case 13:q=B.ac
n=[1]
s=5
break
case 12:g=i
q=new A.iu(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.ac
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.ao()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.xL(m,"_drift_feature_detection"),$async$dq)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dq,r)},
iT(a){return A.Gw(a)},
Gw(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$iT=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a_(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$iT)
case 7:j=c
s=8
return A.a(A.a_(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$iT)
case 8:n=c
n.close()
l=j
q=new A.au(!0,l)
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
return A.a(A.a_(a.createSyncAccessHandle(),t.m),$async$iT)
case 9:m=c
q=new A.au(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$iT,r)},
wz:function wz(){},
iz:function iz(){this.a=null},
fb:function fb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
uD:function uD(a){this.a=a},
uH:function uH(a,b){this.a=a
this.b=b},
uE:function uE(a,b){this.a=a
this.b=b},
uF:function uF(a){this.a=a},
uG:function uG(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
un:function un(a){this.a=a},
us:function us(a,b){this.a=a
this.b=b},
uv:function uv(a,b,c){this.a=a
this.b=b
this.c=c},
up:function up(a,b){this.a=a
this.b=b},
uo:function uo(a,b){this.a=a
this.b=b},
uu:function uu(a,b){this.a=a
this.b=b},
ut:function ut(a,b){this.a=a
this.b=b},
ux:function ux(a,b){this.a=a
this.b=b},
uw:function uw(a,b){this.a=a
this.b=b},
uq:function uq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ur:function ur(a,b){this.a=a
this.b=b},
um:function um(a){this.a=a},
jt:function jt(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
oj:function oj(a){this.a=a},
oi:function oi(a){this.a=a},
oh:function oh(a,b){this.a=a
this.b=b},
tw:function tw(a,b,c,d,e,f){var _=this
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
tx:function tx(a,b){this.a=a
this.b=b},
ty:function ty(a,b){this.a=a
this.b=b},
tz:function tz(a){this.a=a},
Em(){var s=v.G
if(A.Dq(s,"DedicatedWorkerGlobalScope"))return new A.lx(s,new A.ly(s.location.href))
else return new A.m1(s,new A.ly(s.location.href))},
iL:function iL(){},
lx:function lx(a,b){this.a=a
this.b=b},
m1:function m1(a,b){this.a=a
this.b=b},
vP:function vP(a){this.a=a},
vQ:function vQ(a,b,c){this.a=a
this.b=b
this.c=c},
vO:function vO(a){this.a=a},
vM:function vM(a){this.a=a},
vN:function vN(a){this.a=a},
ly:function ly(a){this.a=a},
uQ:function uQ(a){this.a=a},
kO:function kO(a,b,c){this.c=a
this.a=b
this.b=c},
rD:function rD(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
f0:function f0(){},
lH:function lH(){},
c7:function c7(a,b){this.a=a
this.b=b},
b8(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Bf(new A.uT(c),t.m)
s=s==null?null:A.ct(s)}s=new A.ig(a,b,s,!1,e.i("ig<0>"))
s.j5()
return s},
Bf(a,b){var s=$.t
if(s===B.f)return a
return s.he(a,b)},
xH:function xH(a,b){this.a=a
this.$ti=b},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ig:function ig(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
uT:function uT(a){this.a=a},
uU:function uU(a){this.a=a},
BT(a){return v.mangledGlobalNames[a]},
BH(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Dt(a,b){return b in a},
xR(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Hh(a,b,c,d){var s,r,q,p,o,n=A.E(d,c.i("q<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.bV(p,q)}return n},
HQ(a){return a},
BR(a){if(a instanceof A.cT)return a
return new A.cT(a)},
HS(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.I(p)
if(q instanceof A.eS){s=q
throw A.b(A.E3("Invalid "+a+": "+s.a,s.b,s.gf9()))}else if(t.Y.b(q)){r=q
throw A.b(A.a2("Invalid "+a+' "'+b+'": '+r.gjD(),r.gf9(),r.gam()))}else throw p}},
mz(){var s,r,q,p=$.Cu(),o=$.Cn()+1
$.FP=o
s=B.a.jH(B.c.my(o,36),8,"0")
r=J.zq(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cp(36)]
return s+B.b.dI(r)},
mC(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.I(q)
if(r instanceof A.cH)throw q
else{s=r
r=A.ru("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
wR(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.q
try{s=B.e.aE(a,null)
if(t.f.b(s)){q=A.bb(s,t.N,t.X)
return q}return B.q}catch(p){r=A.I(p)
q=A.ru("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Bs(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.aR
try{s=B.e.aE(a,null)
if(t.j.b(s)){q=J.et(s,t.N)
q=q.wl(q)
return q}return B.aR}catch(p){r=A.I(p)
q=A.ru("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Br(a){var s,r,q,p,o=null
if(a==null)return B.o
A.J(a)
if(a.length===0)return B.o
s=B.e.aE(a,o)
if(!t.j.b(s))throw A.b(A.a2("expected a JSON array, got "+J.cR(s).m(0),o,o))
r=A.l([],t.s)
for(q=J.M(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.x(A.a2("dirty-field member is "+J.cR(p).m(0)+", expected String",o,o)))}return r},
fG(a){var s,r=J.K(a)
if(r.gB(a))return null
s=J.cc(r.gC(a).gbh())
if(A.aE(s))return s
if(typeof s=="string")return A.hH(s,null)
return null},
HM(a,b,c){var s=A.A(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.A(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.A(c,"'","\\'")+"'")+")"},
HA(a){var s,r,q,p,o,n,m,l,k=null
if(a==null)return k
if(!t.f.b(a))throw A.b(B.by)
s=a.h(0,"type")
if(!J.u(s,"aes-gcm"))throw A.b(A.a2("Unsupported fieldCipher type: "+A.r(s),k,k))
r=a.h(0,"key")
if(!t.j.b(r)||J.ao(r)!==32)throw A.b(B.bx)
q=new Uint8Array(32)
for(p=J.K(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.aE(n)||n<0||n>255)throw A.b(A.a2("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),k,k))
q[o]=n}A.z2(q)
p=$.xw()
m=A.z2(q)
l=new A.tT(new Uint32Array(60))
l.qH(m)
return new A.mL(l,p)},
Bu(a){var s,r=A.E(t.N,t.X)
r.j(0,"store",a.a)
r.j(0,"record_id",a.b)
r.j(0,"base",A.bG(a.c))
r.j(0,"local",A.bG(a.d))
r.j(0,"remote",A.bG(a.e))
s=a.f
s=A.P(s,A.o(s).c)
B.b.aW(s)
r.j(0,"dirty_local",s)
s=a.r
s=A.P(s,A.o(s).c)
B.b.aW(s)
r.j(0,"dirty_remote",s)
r.j(0,"detected_at",a.w)
s=a.x
if(s!=null)r.j(0,"resolved",A.bG(s))
return r},
Hw(){var s=A.Em(),r=t.cj
new A.tw(s,B.be,A.l([],t.az),A.E(t.S,t.lp),new A.ht(A.xV(r)),new A.ht(A.xV(r))).dG()},
Bp(){var s,r,q,p,o=null
try{o=A.ye()}catch(s){if(t.mA.b(A.I(s))){r=$.wy
if(r!=null)return r
throw s}else throw s}if(J.u(o,$.AO)){r=$.wy
r.toString
return r}$.AO=o
if($.yQ()===$.j_())r=$.wy=o.bg(".").m(0)
else{q=o.jT()
p=q.length-1
r=$.wy=p===0?q:B.a.q(q,0,p)}return r},
Bz(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Bt(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Bz(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.q(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Hr(a){var s,r,q,p
if(a.gl(0)===0)return!0
s=a.gC(0)
for(r=A.c5(a,1,null,a.$ti.i("S.E")),q=r.$ti,r=new A.a9(r,r.gl(0),q.i("a9<S.E>")),q=q.i("S.E");r.k();){p=r.d
if(!J.u(p==null?q.a(p):p,s))return!1}return!0},
HF(a,b){var s=B.b.bT(a,null)
if(s<0)throw A.b(A.O(A.r(a)+" contains no null elements.",null))
a[s]=b},
BM(a,b){var s=B.b.bT(a,b)
if(s<0)throw A.b(A.O(A.r(a)+" contains no elements matching "+b.m(0)+".",null))
a[s]=null},
H2(a,b){var s,r,q,p
for(s=new A.bY(a),r=t.V,s=new A.a9(s,s.gl(0),r.i("a9<D.E>")),r=r.i("D.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
x1(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.bU(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bT(a,b)
while(r!==-1){q=r===0?0:B.a.hF(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.bU(a,b,r+1)}return null},
yF(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.cG(A.e4(r.b,p.sqlite3_errmsg(q)),A.e4(s.b,s.d.sqlite3_errstr(o))+" (code "+A.r(o)+")",c,n,d,e,f)},
yN(a,b,c,d,e){throw A.b(A.yF(a.a,a.b,b,c,d,e))},
zn(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bd("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cp(61)))
return s.charCodeAt(0)==0?s:s},
re(a){var s=0,r=A.h(t.lo),q
var $async$re=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a_(a.arrayBuffer(),t.a),$async$re)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$re,r)}},B={}
var w=[A,J,B]
var $={}
A.xT.prototype={}
J.jP.prototype={
X(a,b){return a===b},
gN(a){return A.hG(a)},
m(a){return"Instance of '"+A.kp(a)+"'"},
gah(a){return A.bt(A.yy(this))}}
J.jR.prototype={
m(a){return String(a)},
gN(a){return a?519018:218159},
gah(a){return A.bt(t.y)},
$iaa:1,
$iV:1}
J.hh.prototype={
X(a,b){return null==b},
m(a){return"null"},
gN(a){return 0},
gah(a){return A.bt(t.P)},
$iaa:1,
$iQ:1}
J.as.prototype={$iH:1}
J.d1.prototype={
gN(a){return 0},
gah(a){return B.cN},
m(a){return String(a)}}
J.km.prototype={}
J.dc.prototype={}
J.bx.prototype={
m(a){var s=a[$.C_()]
if(s==null)s=a[$.er()]
if(s==null)return this.nF(a)
return"JavaScript function for "+J.aw(s)}}
J.ba.prototype={
gN(a){return 0},
m(a){return String(a)}}
J.eC.prototype={
gN(a){return 0},
m(a){return String(a)}}
J.z.prototype={
hf(a,b){return new A.bw(a,A.a8(a).i("@<1>").a_(b).i("bw<1,2>"))},
t(a,b){a.$flags&1&&A.C(a,29)
a.push(b)},
hU(a,b){var s
a.$flags&1&&A.C(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.rd(b,null))
return a.splice(b,1)[0]},
az(a,b,c){var s
a.$flags&1&&A.C(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.rd(b,null))
a.splice(b,0,c)},
jx(a,b,c){var s,r
a.$flags&1&&A.C(a,"insertAll",2)
A.zK(b,0,a.length,"index")
if(!t.O.b(c))c=J.CM(c)
s=J.ao(c)
a.length=a.length+s
r=b+s
this.ab(a,r,a.length,a,b)
this.af(a,b,r,c)},
jP(a){a.$flags&1&&A.C(a,"removeLast",1)
if(a.length===0)throw A.b(A.wW(a,-1))
return a.pop()},
F(a,b){var s
a.$flags&1&&A.C(a,"remove",1)
for(s=0;s<a.length;++s)if(J.u(a[s],b)){a.splice(s,1)
return!0}return!1},
rE(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.ap(a))}q=p.length
if(q===o)return
this.sl(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
E(a,b){var s
a.$flags&1&&A.C(a,"addAll",2)
if(Array.isArray(b)){this.o0(a,b)
return}for(s=J.M(b);s.k();)a.push(s.gn())},
o0(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.ap(a))
for(s=0;s<r;++s)a.push(b[s])},
aj(a){a.$flags&1&&A.C(a,"clear","clear")
a.length=0},
co(a,b,c){return new A.a7(a,b,A.a8(a).i("@<1>").a_(c).i("a7<1,2>"))},
L(a,b){var s,r=A.aF(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
dI(a){return this.L(a,"")},
cr(a,b){return A.c5(a,0,A.bF(b,"count",t.S),A.a8(a).c)},
b5(a,b){return A.c5(a,b,null,A.a8(a).c)},
ey(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.ap(a))}if(c!=null)return c.$0()
throw A.b(A.ar())},
m4(a,b){return this.ey(a,b,null)},
a3(a,b){return a[b]},
S(a,b,c){if(b<0||b>a.length)throw A.b(A.ak(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ak(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a8(a))
return A.l(a.slice(b,c),A.a8(a))},
aX(a,b){return this.S(a,b,null)},
f4(a,b,c){A.aX(b,c,a.length)
return A.c5(a,b,c,A.a8(a).c)},
gC(a){if(a.length>0)return a[0]
throw A.b(A.ar())},
ga1(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.ar())},
gan(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.ar())
throw A.b(A.he())},
mr(a,b,c){a.$flags&1&&A.C(a,18)
A.aX(b,c,a.length)
a.splice(b,c-b)},
ab(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.C(a,5)
A.aX(b,c,a.length)
s=c-b
if(s===0)return
A.aW(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.mK(d,e).cs(0,!1)
q=0}p=J.K(r)
if(q+s>p.gl(r))throw A.b(A.zp())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
af(a,b,c,d){return this.ab(a,b,c,d,0)},
cJ(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.ap(a))}return!1},
dD(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.ap(a))}return!0},
c2(a,b){var s,r,q,p,o
a.$flags&2&&A.C(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.FT()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a8(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.dr(b,2))
if(p>0)this.rF(a,p)},
aW(a){return this.c2(a,null)},
rF(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bT(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.u(a[s],b))return s
return-1},
cR(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.u(a[s],b))return s
return-1},
D(a,b){var s
for(s=0;s<a.length;++s)if(J.u(a[s],b))return!0
return!1},
gB(a){return a.length===0},
gW(a){return a.length!==0},
m(a){return A.pm(a,"[","]")},
cs(a,b){var s=A.l(a.slice(0),A.a8(a))
return s},
dT(a){return this.cs(a,!0)},
gu(a){return new J.eu(a,a.length,A.a8(a).i("eu<1>"))},
gN(a){return A.hG(a)},
gl(a){return a.length},
sl(a,b){a.$flags&1&&A.C(a,"set length","change the length of")
if(b<0)throw A.b(A.ak(b,0,null,"newLength",null))
if(b>a.length)A.a8(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.wW(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.C(a)
if(!(b>=0&&b<a.length))throw A.b(A.wW(a,b))
a[b]=c},
jX(a,b){return new A.bp(a,b.i("bp<0>"))},
vg(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gah(a){return A.bt(A.a8(a))},
$iaS:1,
$iF:1,
$in:1,
$iq:1}
J.jQ.prototype={
wq(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.kp(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.pn.prototype={}
J.eu.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.B(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.dN.prototype={
T(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gjA(b)
if(this.gjA(a)===s)return 0
if(this.gjA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gjA(a){return a===0?1/a<0:a<0},
jU(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
tE(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
uL(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
mv(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
we(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
cK(a,b,c){if(this.T(b,c)>0)throw A.b(A.em(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
my(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ak(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.x(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.b4("0",q)},
m(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
f2(a,b){return a+b},
aG(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
ko(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.lt(a,b)},
R(a,b){return(a|0)===a?a/b|0:this.lt(a,b)},
lt(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
c0(a,b){if(b<0)throw A.b(A.em(b))
return b>31?0:a<<b>>>0},
dZ(a,b){var s
if(b<0)throw A.b(A.em(b))
if(a>0)s=this.j2(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a8(a,b){var s
if(a>0)s=this.j2(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j3(a,b){if(0>b)throw A.b(A.em(b))
return this.j2(a,b)},
j2(a,b){return b>31?0:a>>>b},
ni(a,b){return a>b},
gah(a){return A.bt(t.o)},
$iam:1,
$ia4:1}
J.hg.prototype={
glO(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.R(q,4294967296)
s+=32}return s-Math.clz32(q)},
gah(a){return A.bt(t.S)},
$iaa:1,
$ii:1}
J.jS.prototype={
gah(a){return A.bt(t.i)},
$iaa:1}
J.d_.prototype={
ja(a,b,c){var s=b.length
if(c>s)throw A.b(A.ak(c,0,s,null,null))
return new A.m5(b,a,c)},
ha(a,b){return this.ja(a,b,0)},
dL(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ak(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.eW(c,a)},
ci(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ac(a,r-s)},
mt(a,b,c){A.zK(0,0,a.length,"startIndex")
return A.HL(a,b,c,0)},
d7(a,b){var s=A.l(a.split(b),t.s)
return s},
cW(a,b,c,d){var s=A.aX(b,c,a.length)
return A.BP(a,b,s,d)},
a6(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
O(a,b){return this.a6(a,b,0)},
q(a,b,c){return a.substring(b,A.aX(b,c,a.length))},
ac(a,b){return this.q(a,b,null)},
d_(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Du(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.zu(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
wo(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.zu(r,s))},
b4(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bg)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
jH(a,b,c){var s=b-a.length
if(s<=0)return a
return this.b4(c,s)+a},
vN(a,b){var s=b-a.length
if(s<=0)return a
return a+this.b4(" ",s)},
bU(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bT(a,b){return this.bU(a,b,0)},
hF(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ak(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
cR(a,b){return this.hF(a,b,null)},
D(a,b){return A.HI(a,b,0)},
T(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
m(a){return a},
gN(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gah(a){return A.bt(t.N)},
gl(a){return a.length},
$iaS:1,
$iaa:1,
$iam:1,
$ik:1}
A.uI.prototype={
t(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.K(b),i=j.gl(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.c.a8(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.d.af(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.d.af(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.C(r)
r[q+m]=l}k.a=s},
jS(){var s,r=this
if(r.a===0)return $.mH()
s=J.dw(B.d.gaJ(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.mH()
return s},
gl(a){return this.a}}
A.uj.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.br(b))
this.b.push(s)
this.a=this.a+s.length},
jS(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.mH()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.aj(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.B)(s),++o,p=m){n=s[o]
m=p+n.length
B.d.af(q,p,m,n)}l.a=0
B.b.aj(s)
return q},
gl(a){return this.a}}
A.df.prototype={
gu(a){return new A.jj(J.M(this.gbb()),A.o(this).i("jj<1,2>"))},
gl(a){return J.ao(this.gbb())},
gB(a){return J.bW(this.gbb())},
gW(a){return J.fN(this.gbb())},
b5(a,b){var s=A.o(this)
return A.ji(J.mK(this.gbb(),b),s.c,s.y[1])},
cr(a,b){var s=A.o(this)
return A.ji(J.xA(this.gbb(),b),s.c,s.y[1])},
a3(a,b){return A.o(this).y[1].a(J.mI(this.gbb(),b))},
gC(a){return A.o(this).y[1].a(J.cc(this.gbb()))},
ga1(a){return A.o(this).y[1].a(J.mJ(this.gbb()))},
gan(a){return A.o(this).y[1].a(J.xz(this.gbb()))},
m(a){return J.aw(this.gbb())}}
A.jj.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.dA.prototype={
gbb(){return this.a}}
A.ic.prototype={$iF:1}
A.i8.prototype={
h(a,b){return this.$ti.y[1].a(J.R(this.a,b))},
j(a,b,c){J.bU(this.a,b,this.$ti.c.a(c))},
sl(a,b){J.CI(this.a,b)},
t(a,b){J.bV(this.a,this.$ti.c.a(b))},
c2(a,b){var s=b==null?null:new A.uk(this,b)
J.z0(this.a,s)},
f4(a,b,c){var s=this.$ti
return A.ji(J.CG(this.a,b,c),s.c,s.y[1])},
ab(a,b,c,d,e){var s=this.$ti
J.CJ(this.a,b,c,A.ji(d,s.y[1],s.c),e)},
af(a,b,c,d){return this.ab(0,b,c,d,0)},
$iF:1,
$iq:1}
A.uk.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bw.prototype={
hf(a,b){return new A.bw(this.a,this.$ti.i("@<1>").a_(b).i("bw<1,2>"))},
gbb(){return this.a}}
A.d0.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.ks.prototype={
m(a){return"ReachabilityError: "+this.a}}
A.bY.prototype={
gl(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.xf.prototype={
$0(){return A.c_(null,t.H)},
$S:3}
A.rj.prototype={}
A.F.prototype={}
A.S.prototype={
gu(a){var s=this
return new A.a9(s,s.gl(s),A.o(s).i("a9<S.E>"))},
gB(a){return this.gl(this)===0},
gC(a){if(this.gl(this)===0)throw A.b(A.ar())
return this.a3(0,0)},
ga1(a){var s=this
if(s.gl(s)===0)throw A.b(A.ar())
return s.a3(0,s.gl(s)-1)},
gan(a){var s=this
if(s.gl(s)===0)throw A.b(A.ar())
if(s.gl(s)>1)throw A.b(A.he())
return s.a3(0,0)},
dD(a,b){var s,r=this,q=r.gl(r)
for(s=0;s<q;++s){if(!b.$1(r.a3(0,s)))return!1
if(q!==r.gl(r))throw A.b(A.ap(r))}return!0},
L(a,b){var s,r,q,p=this,o=p.gl(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a3(0,0))
if(o!==p.gl(p))throw A.b(A.ap(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a3(0,q))
if(o!==p.gl(p))throw A.b(A.ap(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a3(0,q))
if(o!==p.gl(p))throw A.b(A.ap(p))}return r.charCodeAt(0)==0?r:r}},
dI(a){return this.L(0,"")},
co(a,b,c){return new A.a7(this,b,A.o(this).i("@<S.E>").a_(c).i("a7<1,2>"))},
w5(a,b){var s,r,q=this,p=q.gl(q)
if(p===0)throw A.b(A.ar())
s=q.a3(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a3(0,r))
if(p!==q.gl(q))throw A.b(A.ap(q))}return s},
b5(a,b){return A.c5(this,b,null,A.o(this).i("S.E"))},
cr(a,b){return A.c5(this,0,A.bF(b,"count",t.S),A.o(this).i("S.E"))}}
A.c4.prototype={
ia(a,b,c,d){var s,r=this.b
A.aW(r,"start")
s=this.c
if(s!=null){A.aW(s,"end")
if(r>s)throw A.b(A.ak(r,0,s,"start",null))}},
goD(){var s=J.ao(this.a),r=this.c
if(r==null||r>s)return s
return r},
grX(){var s=J.ao(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.ao(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a3(a,b){var s=this,r=s.grX()+b
if(b<0||r>=s.goD())throw A.b(A.jM(b,s.gl(0),s,null,"index"))
return J.mI(s.a,r)},
b5(a,b){var s,r,q=this
A.aW(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dJ(q.$ti.i("dJ<1>"))
return A.c5(q.a,s,r,q.$ti.c)},
cr(a,b){var s,r,q,p=this
A.aW(b,"count")
s=p.c
r=p.b
if(s==null)return A.c5(p.a,r,B.c.f2(r,b),p.$ti.c)
else{q=B.c.f2(r,b)
if(s<q)return p
return A.c5(p.a,r,q,p.$ti.c)}},
cs(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.K(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.zr(0,n):J.xQ(0,n)}r=A.aF(s,m.a3(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a3(n,o+q)
if(m.gl(n)<l)throw A.b(A.ap(p))}return r},
dT(a){return this.cs(0,!0)}}
A.a9.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.K(q),o=p.gl(q)
if(r.b!==o)throw A.b(A.ap(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a3(q,s);++r.c
return!0}}
A.cA.prototype={
gu(a){return new A.k3(J.M(this.a),this.b,A.o(this).i("k3<1,2>"))},
gl(a){return J.ao(this.a)},
gB(a){return J.bW(this.a)},
gC(a){return this.b.$1(J.cc(this.a))},
ga1(a){return this.b.$1(J.mJ(this.a))},
gan(a){return this.b.$1(J.xz(this.a))},
a3(a,b){return this.b.$1(J.mI(this.a,b))}}
A.dI.prototype={$iF:1}
A.k3.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.a7.prototype={
gl(a){return J.ao(this.a)},
a3(a,b){return this.b.$1(J.mI(this.a,b))}}
A.bj.prototype={
gu(a){return new A.de(J.M(this.a),this.b,this.$ti.i("de<1>"))},
co(a,b,c){return new A.cA(this,b,this.$ti.i("@<1>").a_(c).i("cA<1,2>"))}}
A.de.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.h3.prototype={
gu(a){return new A.jD(J.M(this.a),this.b,B.ar,this.$ti.i("jD<1,2>"))}}
A.jD.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.M(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.e0.prototype={
gu(a){var s=this.a
return new A.kS(s.gu(s),this.b,A.o(this).i("kS<1>"))}}
A.h1.prototype={
gl(a){var s=this.a,r=s.gl(s)
s=this.b
if(B.c.ni(r,s))return s
return r},
$iF:1}
A.kS.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.cE.prototype={
b5(a,b){A.j2(b,"count")
A.aW(b,"count")
return new A.cE(this.a,this.b+b,A.o(this).i("cE<1>"))},
gu(a){var s=this.a
return new A.kB(s.gu(s),this.b,A.o(this).i("kB<1>"))}}
A.ey.prototype={
gl(a){var s=this.a,r=s.gl(s)-this.b
if(r>=0)return r
return 0},
b5(a,b){A.j2(b,"count")
A.aW(b,"count")
return new A.ey(this.a,this.b+b,this.$ti)},
$iF:1}
A.kB.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.dJ.prototype={
gu(a){return B.ar},
gB(a){return!0},
gl(a){return 0},
gC(a){throw A.b(A.ar())},
ga1(a){throw A.b(A.ar())},
gan(a){throw A.b(A.ar())},
a3(a,b){throw A.b(A.ak(b,0,0,"index",null))},
dD(a,b){return!0},
co(a,b,c){return new A.dJ(c.i("dJ<0>"))},
b5(a,b){A.aW(b,"count")
return this},
cr(a,b){A.aW(b,"count")
return this},
cs(a,b){var s=J.xQ(0,this.$ti.c)
return s}}
A.jA.prototype={
k(){return!1},
gn(){throw A.b(A.ar())}}
A.bp.prototype={
gu(a){return new A.l6(J.M(this.a),this.$ti.i("l6<1>"))}}
A.l6.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.h6.prototype={
sl(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.kY.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sl(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
c2(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ab(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
af(a,b,c,d){return this.ab(0,b,c,d,0)}}
A.f1.prototype={}
A.dW.prototype={
gl(a){return J.ao(this.a)},
a3(a,b){var s=this.a,r=J.K(s)
return r.a3(s,r.gl(s)-1-b)}}
A.kP.prototype={
gN(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gN(this.a)&536870911
this._hashCode=s
return s},
m(a){return'Symbol("'+this.a+'")'},
X(a,b){if(b==null)return!1
return b instanceof A.kP&&this.a===b.a}}
A.iM.prototype={}
A.au.prototype={$r:"+(1,2)",$s:1}
A.iu.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.iv.prototype={$r:"+controller,sync(1,2)",$s:3}
A.fn.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.lS.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.eg.prototype={$r:"+(1,2,3)",$s:6}
A.eh.prototype={$r:"+(1,2,3,4)",$s:7}
A.lT.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.fZ.prototype={
gB(a){return this.gl(this)===0},
gW(a){return this.gl(this)!==0},
m(a){return A.pN(this)},
j(a,b,c){A.D2()},
gbn(){return new A.fr(this.uz(),A.o(this).i("fr<X<1,2>>"))},
uz(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gbn(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gP(),o=o.gu(o),n=A.o(s).i("X<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.X(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
cS(a,b,c,d){var s=A.E(c,d)
this.ad(0,new A.nI(this,b,s))
return s},
$iG:1}
A.nI.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.aR.prototype={
gl(a){return this.b.length},
gl0(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
H(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.H(b))return null
return this.b[this.a[b]]},
ad(a,b){var s,r,q=this.gl0(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gP(){return new A.ed(this.gl0(),this.$ti.i("ed<1>"))},
gbh(){return new A.ed(this.b,this.$ti.i("ed<2>"))}}
A.ed.prototype={
gl(a){return this.a.length},
gB(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.fi(s,s.length,this.$ti.i("fi<1>"))}}
A.fi.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.h_.prototype={
t(a,b){A.D3()}}
A.cw.prototype={
gl(a){return this.b},
gB(a){return this.b===0},
gW(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.fi(s,s.length,r.$ti.i("fi<1>"))},
D(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.ph.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.hd&&this.a.X(0,b.a)&&A.yH(this)===A.yH(b)},
gN(a){return A.d6(this.a,A.yH(this),B.h,B.h,B.h,B.h,B.h)},
m(a){var s=B.b.L([A.bt(this.$ti.c)],", ")
return this.a.m(0)+" with "+("<"+s+">")}}
A.hd.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Hq(A.mw(this.a),this.$ti)}}
A.qN.prototype={
$0(){return B.v.uL(1000*this.a.now())},
$S:10}
A.hN.prototype={}
A.rV.prototype={
bB(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.hA.prototype={
m(a){return"Null check operator used on a null value"}}
A.jT.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.kX.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.kh.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iL:1}
A.h2.prototype={}
A.ix.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iat:1}
A.dC.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.BU(r==null?"unknown":r)+"'"},
gah(a){var s=A.mw(this)
return A.bt(s==null?A.bu(this):s)},
gxi(){return this},
$C:"$1",
$R:1,
$D:null}
A.nd.prototype={$C:"$0",$R:0}
A.ne.prototype={$C:"$2",$R:2}
A.rT.prototype={}
A.rt.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.BU(s)+"'"}}
A.fR.prototype={
X(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.fR))return!1
return this.$_target===b.$_target&&this.a===b.a},
gN(a){return(A.mB(this.a)^A.hG(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kp(this.a)+"'")}}
A.ky.prototype={
m(a){return"RuntimeError: "+this.a}}
A.bz.prototype={
gl(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
gP(){return new A.Z(this,A.o(this).i("Z<1>"))},
gbh(){return new A.aT(this,A.o(this).i("aT<2>"))},
gbn(){return new A.aI(this,A.o(this).i("aI<1,2>"))},
H(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.ma(a)},
ma(a){var s=this.d
if(s==null)return!1
return this.dH(this.kV(s,a),a)>=0},
E(a,b){b.ad(0,new A.po(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mb(b)},
mb(a){var s,r,q=this.d
if(q==null)return null
s=this.kV(q,a)
r=this.dH(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kp(s==null?q.b=q.iQ():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kp(r==null?q.c=q.iQ():r,b,c)}else q.md(b,c)},
md(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.iQ()
s=p.eD(a)
r=o[s]
if(r==null)o[s]=[p.ic(a,b)]
else{q=p.dH(r,a)
if(q>=0)r[q].b=b
else r.push(p.ic(a,b))}},
ml(a,b){var s,r,q=this
if(q.H(a)){s=q.h(0,a)
return s==null?A.o(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
F(a,b){var s=this
if(typeof b=="string")return s.lk(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.lk(s.c,b)
else return s.mc(b)},
mc(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eD(a)
r=n[s]
q=o.dH(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.lz(p)
if(r.length===0)delete n[s]
return p.b},
aj(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ib()}},
ad(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.ap(s))
r=r.c}},
kp(a,b,c){var s=a[b]
if(s==null)a[b]=this.ic(b,c)
else s.b=c},
lk(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.lz(s)
delete a[b]
return s.b},
ib(){this.r=this.r+1&1073741823},
ic(a,b){var s,r=this,q=new A.pq(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ib()
return q},
lz(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ib()},
eD(a){return J.a1(a)&1073741823},
kV(a,b){return a[this.eD(b)]},
dH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
m(a){return A.pN(this)},
iQ(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.po.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.pq.prototype={}
A.Z.prototype={
gl(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bK(s,s.r,s.e,this.$ti.i("bK<1>"))},
D(a,b){return this.a.H(b)}}
A.bK.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aT.prototype={
gl(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.aM(s,s.r,s.e,this.$ti.i("aM<1>"))}}
A.aM.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aI.prototype={
gl(a){return this.a.a},
gB(a){return this.a.a===0},
gu(a){var s=this.a
return new A.jZ(s,s.r,s.e,this.$ti.i("jZ<1,2>"))}}
A.jZ.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ap(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.X(s.a,s.b,r.$ti.i("X<1,2>"))
r.c=s.c
return!0}}}
A.hi.prototype={
eD(a){return A.mB(a)&1073741823},
dH(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.x9.prototype={
$1(a){return this.a(a)},
$S:31}
A.xa.prototype={
$2(a,b){return this.a(a,b)},
$S:174}
A.xb.prototype={
$1(a){return this.a(a)},
$S:43}
A.fm.prototype={
gah(a){return A.bt(this.kW())},
kW(){return A.H8(this.$r,this.fj())},
m(a){return this.lx(!1)},
lx(a){var s,r,q,p,o,n=this.oL(),m=this.fj(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.zG(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
oL(){var s,r=this.$s
while($.vC.length<=r)$.vC.push(null)
s=$.vC[r]
if(s==null){s=this.oo()
$.vC[r]=s}return s},
oo(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.zq(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.d2(j,k)}}
A.lP.prototype={
fj(){return[this.a,this.b]},
X(a,b){if(b==null)return!1
return b instanceof A.lP&&this.$s===b.$s&&J.u(this.a,b.a)&&J.u(this.b,b.b)},
gN(a){return A.d6(this.$s,this.a,this.b,B.h,B.h,B.h,B.h)}}
A.lQ.prototype={
fj(){return[this.a,this.b,this.c]},
X(a,b){var s=this
if(b==null)return!1
return b instanceof A.lQ&&s.$s===b.$s&&J.u(s.a,b.a)&&J.u(s.b,b.b)&&J.u(s.c,b.c)},
gN(a){var s=this
return A.d6(s.$s,s.a,s.b,s.c,B.h,B.h,B.h)}}
A.lR.prototype={
fj(){return this.a},
X(a,b){if(b==null)return!1
return b instanceof A.lR&&this.$s===b.$s&&A.F1(this.a,b.a)},
gN(a){return A.d6(this.$s,A.zB(this.a),B.h,B.h,B.h,B.h,B.h)}}
A.eB.prototype={
m(a){return"RegExp/"+this.a+"/"+this.b.flags},
gl6(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.xS(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqP(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.xS(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
dE(a){var s=this.b.exec(a)
if(s==null)return null
return new A.fl(s)},
ja(a,b,c){var s=b.length
if(c>s)throw A.b(A.ak(c,0,s,null,null))
return new A.li(this,b,c)},
ha(a,b){return this.ja(0,b,0)},
oH(a,b){var s,r=this.gl6()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fl(s)},
oG(a,b){var s,r=this.gqP()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fl(s)},
dL(a,b,c){if(c<0||c>b.length)throw A.b(A.ak(c,0,b.length,null,null))
return this.oG(b,c)}}
A.fl.prototype={
gK(){return this.b.index},
gI(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$idR:1,
$ikt:1}
A.li.prototype={
gu(a){return new A.lj(this.a,this.b,this.c)}}
A.lj.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.oH(l,s)
if(p!=null){m.d=p
o=p.gI()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.eW.prototype={
gI(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.rd(b,null))
return this.c},
$idR:1,
gK(){return this.a}}
A.m5.prototype={
gu(a){return new A.vX(this.a,this.b,this.c)},
gC(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.eW(r,s)
throw A.b(A.ar())}}
A.vX.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.eW(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.lr.prototype={
ba(){var s=this.b
if(s===this)throw A.b(new A.d0("Local '"+this.a+"' has not been initialized."))
return s},
bj(){var s=this.b
if(s===this)throw A.b(A.zx(this.a))
return s},
sm3(a){var s=this
if(s.b!==s)throw A.b(new A.d0("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.eI.prototype={
gah(a){return B.cG},
hc(a,b,c){A.iN(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
lL(a){return this.hc(a,0,null)},
hb(a,b,c){var s
A.iN(a,b,c)
s=new DataView(a,b)
return s},
lK(a){return this.hb(a,0,null)},
$iaa:1,
$idz:1}
A.eH.prototype={$ieH:1}
A.hv.prototype={
gaJ(a){if(((a.$flags|0)&2)!==0)return new A.mb(a.buffer)
else return a.buffer},
qD(a,b,c,d){var s=A.ak(b,0,c,d,null)
throw A.b(s)},
kz(a,b,c,d){if(b>>>0!==b||b>c)this.qD(a,b,c,d)}}
A.mb.prototype={
hc(a,b,c){var s=A.bB(this.a,b,c)
s.$flags=3
return s},
lL(a){return this.hc(0,0,null)},
hb(a,b,c){var s=A.zz(this.a,b,c)
s.$flags=3
return s},
lK(a){return this.hb(0,0,null)},
$idz:1}
A.hu.prototype={
gah(a){return B.cH},
$iaa:1,
$ixB:1}
A.eJ.prototype={
gl(a){return a.length},
lr(a,b,c,d,e){var s,r,q=a.length
this.kz(a,b,q,"start")
this.kz(a,c,q,"end")
if(b>c)throw A.b(A.ak(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.O(e,null))
r=d.length
if(r-e<s)throw A.b(A.w("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaS:1,
$iby:1}
A.d5.prototype={
h(a,b){A.cQ(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.C(a)
A.cQ(b,a,a.length)
a[b]=c},
ab(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.dQ.b(d)){this.lr(a,b,c,d,e)
return}this.kl(a,b,c,d,e)},
af(a,b,c,d){return this.ab(a,b,c,d,0)},
$iF:1,
$in:1,
$iq:1}
A.bA.prototype={
j(a,b,c){a.$flags&2&&A.C(a)
A.cQ(b,a,a.length)
a[b]=c},
ab(a,b,c,d,e){a.$flags&2&&A.C(a,5)
if(t.aj.b(d)){this.lr(a,b,c,d,e)
return}this.kl(a,b,c,d,e)},
af(a,b,c,d){return this.ab(a,b,c,d,0)},
$iF:1,
$in:1,
$iq:1}
A.ka.prototype={
gah(a){return B.cI},
S(a,b,c){return new Float32Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$ioF:1}
A.kb.prototype={
gah(a){return B.cJ},
S(a,b,c){return new Float64Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$ioG:1}
A.kc.prototype={
gah(a){return B.cK},
h(a,b){A.cQ(b,a,a.length)
return a[b]},
S(a,b,c){return new Int16Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$ipi:1}
A.kd.prototype={
gah(a){return B.cL},
h(a,b){A.cQ(b,a,a.length)
return a[b]},
S(a,b,c){return new Int32Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$ipj:1}
A.ke.prototype={
gah(a){return B.cM},
h(a,b){A.cQ(b,a,a.length)
return a[b]},
S(a,b,c){return new Int8Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$ipk:1}
A.hw.prototype={
gah(a){return B.cP},
h(a,b){A.cQ(b,a,a.length)
return a[b]},
S(a,b,c){return new Uint16Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$irX:1}
A.hx.prototype={
gah(a){return B.cQ},
h(a,b){A.cQ(b,a,a.length)
return a[b]},
S(a,b,c){return new Uint32Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$irY:1}
A.hy.prototype={
gah(a){return B.cR},
gl(a){return a.length},
h(a,b){A.cQ(b,a,a.length)
return a[b]},
S(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$irZ:1}
A.dT.prototype={
gah(a){return B.cS},
gl(a){return a.length},
h(a,b){A.cQ(b,a,a.length)
return a[b]},
S(a,b,c){return new Uint8Array(a.subarray(b,A.cs(b,c,a.length)))},
aX(a,b){return this.S(a,b,null)},
$iaa:1,
$idT:1,
$icp:1}
A.iq.prototype={}
A.ir.prototype={}
A.is.prototype={}
A.it.prototype={}
A.c0.prototype={
i(a){return A.iG(v.typeUniverse,this,a)},
a_(a){return A.Av(v.typeUniverse,this,a)}}
A.lD.prototype={}
A.w1.prototype={
m(a){return A.bl(this.a,null)}}
A.lA.prototype={
m(a){return this.a}}
A.iC.prototype={$icJ:1}
A.u0.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:24}
A.u_.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:105}
A.u1.prototype={
$0(){this.a.$0()},
$S:4}
A.u2.prototype={
$0(){this.a.$0()},
$S:4}
A.iB.prototype={
nX(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.dr(new A.w_(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
nY(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.dr(new A.vZ(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
A(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$icI:1}
A.w_.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.vZ.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.ko(s,o)}q.c=p
r.d.$1(q)},
$S:4}
A.i2.prototype={
au(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aY(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.ky(a)
else s.cw(a)}},
bm(a,b){var s
if(b==null)b=A.fP(a)
s=this.a
if(this.b)s.ai(new A.ad(a,b))
else s.c4(new A.ad(a,b))},
aD(a){return this.bm(a,null)},
$ifW:1}
A.ws.prototype={
$1(a){return this.a.$2(0,a)},
$S:23}
A.wt.prototype={
$2(a,b){this.a.$2(1,new A.h2(a,b))},
$S:125}
A.wI.prototype={
$2(a,b){this.a(a,b)},
$S:149}
A.wq.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.v()
s=q.b
if((s&1)!==0?(q.gaH().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.wr.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:24}
A.ll.prototype={
nT(a,b){var s=new A.u4(a)
this.a=A.y8(new A.u6(this,a),new A.u7(s),new A.u8(this,s),!1,b)}}
A.u4.prototype={
$0(){A.iY(new A.u5(this.a))},
$S:4}
A.u5.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.u7.prototype={
$0(){this.a.$0()},
$S:0}
A.u8.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.u6.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.v()
if((r.b&4)===0){s.c=new A.p($.t,t._)
if(s.b){s.b=!1
A.iY(new A.u3(this.b))}return s.c}},
$S:72}
A.u3.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.il.prototype={
m(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.m7.prototype={
gn(){return this.b},
rG(a,b){var s,r,q
a=a
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
k(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.k()){o.b=s.gn()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.rG(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Ap
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Ap
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.w("sync*"))}return!1},
xj(a){var s,r,q=this
if(a instanceof A.fr){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.M(a)
return 2}}}
A.fr.prototype={
gu(a){return new A.m7(this.a(),this.$ti.i("m7<1>"))}}
A.ad.prototype={
m(a){return A.r(this.a)},
$ia6:1,
gc3(){return this.b}}
A.aY.prototype={}
A.e7.prototype={
bv(){},
bw(){}}
A.i7.prototype={
gcv(){return new A.aY(this,A.o(this).i("aY<1>"))},
ghE(){return(this.c&4)!==0},
giO(){return this.c<4},
rD(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
j4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.Ag(c,A.o(j).c)
s=A.o(j)
r=$.t
q=d?1:0
p=b!=null?32:0
o=A.lp(r,a,s.c)
n=A.ug(r,b)
m=c==null?A.wJ():c
l=new A.e7(j,o,n,r.bF(m,t.H),r,q|p,s.i("e7<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.mu(j.a)
return l},
le(a){var s,r=this
A.o(r).i("e7<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.rD(a)
if((r.c&2)===0&&r.d==null)r.of()}return null},
lf(a){},
lg(a){},
ig(){if((this.c&4)!==0)return new A.bf("Cannot add new events after calling close")
return new A.bf("Cannot add new events while doing an addStream")},
t(a,b){if(!this.giO())throw A.b(this.ig())
this.cb(b)},
by(a,b){var s
if(!this.giO())throw A.b(this.ig())
s=A.ek(a,b)
this.cc(s.a,s.b)},
p(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.giO())throw A.b(q.ig())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.p($.t,t.D)
q.cH()
return r},
aB(a,b){this.cc(a,b)},
aL(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aY(null)},
of(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aY(null)}A.mu(this.b)},
$ibn:1}
A.i3.prototype={
cb(a){var s,r
for(s=this.d,r=this.$ti.i("bO<1>");s!=null;s=s.ch)s.bK(new A.bO(a,r))},
cc(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bK(new A.fd(a,b))},
cH(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bK(B.U)
else this.r.aY(null)}}
A.oN.prototype={
$0(){this.c.a(null)
this.b.c5(null)},
$S:0}
A.oP.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.ai(new A.ad(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.ai(new A.ad(q,r))}},
$S:11}
A.oO.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bU(j,m.b,a)
if(J.u(k,0)){l=m.d
s=A.l([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.B)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.bV(s,n)}m.c.cw(s)}}else if(J.u(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ai(new A.ad(s,l))}},
$S(){return this.d.i("Q(0)")}}
A.oI.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,at)")}}
A.kT.prototype={
m(a){var s=this.b.m(0)
return"TimeoutException after "+s+": "+this.a},
$iL:1}
A.oJ.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("z<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.B)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.au(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.B)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("z<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.B)(r),++p)n.push(r[p].b)
l.a.aD(new A.hD(B.b.m4(s,A.GD()),a,q.i("hD<q<0?>,q<ad?>>")))}},
$S:8}
A.hD.prototype={
m(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gc3(){var s=this.c
s=s==null?null:s.b
return s==null?A.a6.prototype.gc3.call(this):s}}
A.ij.prototype={
t9(a){this.a.bo(new A.uZ(this,a),new A.v_(this,a),t.P)}}
A.uZ.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("Q(1)")}}
A.v_.prototype={
$2(a,b){this.a.c=new A.ad(a,b)
this.b.$1(1)},
$S:9}
A.uY.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.e8.prototype={
bm(a,b){if((this.a.a&30)!==0)throw A.b(A.w("Future already completed"))
this.ai(A.ek(a,b))},
aD(a){return this.bm(a,null)},
$ifW:1}
A.ax.prototype={
au(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.w("Future already completed"))
s.aY(a)},
ao(){return this.au(null)},
ai(a){this.a.c4(a)}}
A.ae.prototype={
au(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.w("Future already completed"))
s.c5(a)},
ao(){return this.au(null)},
ai(a){this.a.ai(a)}}
A.bP.prototype={
vC(a){if((this.c&15)!==6)return!0
return this.b.b.dS(this.d,a.a,t.y,t.K)},
uW(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.jR(r,n,a.b,p,o,t.l)
else q=m.dS(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.I(s))){if((this.c&1)!==0)throw A.b(A.O("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.O("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.p.prototype={
bo(a,b,c){var s,r,q=$.t
if(q===B.f){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.b1(b,"onError",u.w))}else{a=q.cV(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.B1(b,q)}s=new A.p($.t,c.i("p<0>"))
r=b==null?1:3
this.dc(new A.bP(s,r,a,b,this.$ti.i("@<1>").a_(c).i("bP<1,2>")))
return s},
aK(a,b){return this.bo(a,null,b)},
lv(a,b,c){var s=new A.p($.t,c.i("p<0>"))
this.dc(new A.bP(s,19,a,b,this.$ti.i("@<1>").a_(c).i("bP<1,2>")))
return s},
jd(a){var s=this.$ti,r=$.t,q=new A.p(r,s)
if(r!==B.f)a=A.B1(a,r)
this.dc(new A.bP(q,2,null,a,s.i("bP<1,1>")))
return q},
aO(a){var s=this.$ti,r=$.t,q=new A.p(r,s)
if(r!==B.f)a=r.bF(a,t.z)
this.dc(new A.bP(q,8,a,null,s.i("bP<1,1>")))
return q},
rR(a){this.a=this.a&1|16
this.c=a},
fd(a){this.a=a.a&30|this.a&1
this.c=a.c},
dc(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dc(a)
return}s.fd(r)}s.b.cu(new A.v0(s,a))}},
lc(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lc(a)
return}n.fd(s)}m.a=n.h0(a)
n.b.cu(new A.v5(m,n))}},
eg(){var s=this.c
this.c=null
return this.h0(s)},
h0(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
c5(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.v3(a,r,!0)
else{s=r.eg()
r.a=8
r.c=a
A.eb(r,s)}},
cw(a){var s=this,r=s.eg()
s.a=8
s.c=a
A.eb(s,r)},
on(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbR()===r.gbR())}else s=!1
if(s)return
q=p.eg()
p.fd(a)
A.eb(p,q)},
ai(a){var s=this.eg()
this.rR(a)
A.eb(this,s)},
om(a,b){this.ai(new A.ad(a,b))},
aY(a){if(this.$ti.i("y<1>").b(a)){this.ky(a)
return}this.kv(a)},
kv(a){this.a^=2
this.b.cu(new A.v2(this,a))},
ky(a){A.v3(a,this,!1)
return},
c4(a){this.a^=2
this.b.cu(new A.v1(this,a))},
hV(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.p($.t,r.$ti)
q.aY(r)
return q}s=new A.p($.t,r.$ti)
q.a=null
q.a=A.co(a,new A.vb(s,a))
r.bo(new A.vc(q,r,s),new A.vd(q,s),t.P)
return s},
$iy:1}
A.v0.prototype={
$0(){A.eb(this.a,this.b)},
$S:0}
A.v5.prototype={
$0(){A.eb(this.b,this.a.a)},
$S:0}
A.v4.prototype={
$0(){A.v3(this.a.a,this.b,!0)},
$S:0}
A.v2.prototype={
$0(){this.a.cw(this.b)},
$S:0}
A.v1.prototype={
$0(){this.a.ai(this.b)},
$S:0}
A.v8.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aT(q.d,t.z)}catch(p){s=A.I(p)
r=A.a5(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.fP(q)
n=k.a
n.c=new A.ad(q,o)
q=n}q.b=!0
return}if(j instanceof A.p&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.p){m=k.b.a
l=new A.p(m.b,m.$ti)
j.bo(new A.v9(l,m),new A.va(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.v9.prototype={
$1(a){this.a.on(this.b)},
$S:24}
A.va.prototype={
$2(a,b){this.a.ai(new A.ad(a,b))},
$S:9}
A.v7.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.dS(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.I(n)
r=A.a5(n)
q=s
p=r
if(p==null)p=A.fP(q)
o=this.a
o.c=new A.ad(q,p)
o.b=!0}},
$S:0}
A.v6.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.vC(s)&&p.a.e!=null){p.c=p.a.uW(s)
p.b=!1}}catch(o){r=A.I(o)
q=A.a5(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.fP(p)
m=l.b
m.c=new A.ad(p,n)
p=m}p.b=!0}},
$S:0}
A.vb.prototype={
$0(){var s=A.y7()
this.a.ai(new A.ad(new A.kT("Future not completed",this.b),s))},
$S:0}
A.vc.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.A()
this.c.cw(a)}},
$S(){return this.b.$ti.i("Q(1)")}}
A.vd.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.A()
this.b.ai(new A.ad(a,b))}},
$S:9}
A.lk.prototype={}
A.a3.prototype={
dI(a){var s=new A.p($.t,t.os),r=new A.ab(""),q=this.a5(null,!0,new A.ry(s,r),s.gik())
q.hK(new A.rz(this,r,q,s))
return s},
gl(a){var s={},r=new A.p($.t,t.hy)
s.a=0
this.a5(new A.rA(s,this),!0,new A.rB(s,r),r.gik())
return r},
gC(a){var s=new A.p($.t,A.o(this).i("p<a3.T>")),r=this.a5(null,!0,new A.rw(s),s.gik())
r.hK(new A.rx(this,r,s))
return s}}
A.ry.prototype={
$0(){var s=this.b.a
this.a.c5(s.charCodeAt(0)==0?s:s)},
$S:0}
A.rz.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.I(o)
r=A.a5(o)
q=s
p=r
n=A.iO(q,p)
if(n==null)q=new A.ad(q,p)
else q=n
A.Fz(this.c,this.d,q)}},
$S(){return A.o(this.a).i("~(a3.T)")}}
A.rA.prototype={
$1(a){++this.a.a},
$S(){return A.o(this.b).i("~(a3.T)")}}
A.rB.prototype={
$0(){this.b.c5(this.a.a)},
$S:0}
A.rw.prototype={
$0(){var s,r=A.y7(),q=new A.bf("No element")
A.kq(q,r)
s=A.iO(q,r)
if(s==null)s=new A.ad(q,r)
this.a.ai(s)},
$S:0}
A.rx.prototype={
$1(a){A.FA(this.b,this.c,a)},
$S(){return A.o(this.a).i("~(a3.T)")}}
A.hT.prototype={
a5(a,b,c,d){return this.a.a5(a,b,c,d)},
bA(a,b,c){return this.a5(a,null,b,c)},
aQ(a){return this.a5(a,null,null,null)}}
A.dl.prototype={
gcv(){return new A.b7(this,A.o(this).i("b7<1>"))},
ghE(){return(this.b&4)!==0},
gr9(){if((this.b&8)===0)return this.a
return this.a.c},
fg(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.dk(A.o(q).i("dk<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.dk(A.o(q).i("dk<1>")):s},
gaH(){var s=this.a
return(this.b&8)!==0?s.c:s},
bs(){if((this.b&4)!==0)return new A.bf("Cannot add event after closing")
return new A.bf("Cannot add event while adding a stream")},
tp(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bs())
if((o&2)!==0){o=new A.p($.t,t._)
o.aY(null)
return o}o=p.a
s=b===!0
r=new A.p($.t,t._)
q=s?A.Eo(p):p.go1()
q=a.a5(p.go3(),s,p.goh(),q)
s=p.b
if((s&1)!==0?(p.gaH().e&4)!==0:(s&2)===0)q.be()
p.a=new A.iy(o,r,q,A.o(p).i("iy<1>"))
p.b|=8
return r},
kO(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.dv():new A.p($.t,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bs())
this.ar(b)},
by(a,b){var s
if(this.b>=4)throw A.b(this.bs())
s=A.ek(a,b)
this.aB(s.a,s.b)},
tn(a){return this.by(a,null)},
p(){var s=this,r=s.b
if((r&4)!==0)return s.kO()
if(r>=4)throw A.b(s.bs())
s.kA()
return s.kO()},
kA(){var s=this.b|=4
if((s&1)!==0)this.cH()
else if((s&3)===0)this.fg().t(0,B.U)},
ar(a){var s=this,r=s.b
if((r&1)!==0)s.cb(a)
else if((r&3)===0)s.fg().t(0,new A.bO(a,A.o(s).i("bO<1>")))},
aB(a,b){var s=this.b
if((s&1)!==0)this.cc(a,b)
else if((s&3)===0)this.fg().t(0,new A.fd(a,b))},
aL(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aY(null)},
j4(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.w("Stream has already been listened to."))
s=A.EH(p,a,b,c,d,A.o(p).c)
r=p.gr9()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b3()}else p.a=s
s.rS(r)
s.iv(new A.vT(p))
return s},
le(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.A()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.p)k=r}catch(o){q=A.I(o)
p=A.a5(o)
n=new A.p($.t,t.D)
n.c4(new A.ad(q,p))
k=n}else k=k.aO(s)
m=new A.vS(l)
if(k!=null)k=k.aO(m)
else m.$0()
return k},
lf(a){if((this.b&8)!==0)this.a.b.be()
A.mu(this.e)},
lg(a){if((this.b&8)!==0)this.a.b.b3()
A.mu(this.f)},
$ibn:1}
A.vT.prototype={
$0(){A.mu(this.a.d)},
$S:0}
A.vS.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aY(null)},
$S:0}
A.m8.prototype={
cb(a){this.gaH().ar(a)},
cc(a,b){this.gaH().aB(a,b)},
cH(){this.gaH().aL()}}
A.i4.prototype={
cb(a){this.gaH().bK(new A.bO(a,A.o(this).i("bO<1>")))},
cc(a,b){this.gaH().bK(new A.fd(a,b))},
cH(){this.gaH().bK(B.U)}}
A.cr.prototype={}
A.fs.prototype={}
A.b7.prototype={
gN(a){return(A.hG(this.a)^892482866)>>>0},
X(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b7&&b.a===this.a}}
A.dg.prototype={
fX(){return this.w.le(this)},
bv(){this.w.lf(this)},
bw(){this.w.lg(this)}}
A.lh.prototype={
A(){var s=this.b.A()
return s.aO(new A.tR(this))}}
A.tS.prototype={
$2(a,b){var s=this.a
s.aB(a,b)
s.aL()},
$S:9}
A.tR.prototype={
$0(){this.a.a.aY(null)},
$S:4}
A.iy.prototype={}
A.aK.prototype={
rS(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.f5(s)}},
hK(a){this.a=A.lp(this.d,a,A.o(this).i("aK.T"))},
be(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.iv(q.ge9())},
b3(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.f5(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.iv(s.gea())}}},
A(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.ih()
r=s.f
return r==null?$.dv():r},
ih(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.fX()},
ar(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cb(a)
else s.bK(new A.bO(a,A.o(s).i("bO<aK.T>")))},
aB(a,b){var s
if(t.C.b(a))A.kq(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cc(a,b)
else this.bK(new A.fd(a,b))},
aL(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.cH()
else s.bK(B.U)},
bv(){},
bw(){},
fX(){return null},
bK(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.dk(A.o(r).i("dk<aK.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.f5(r)}},
cb(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.eX(s.a,a,A.o(s).i("aK.T"))
s.e=(s.e&4294967231)>>>0
s.ij((r&4)!==0)},
cc(a,b){var s,r=this,q=r.e,p=new A.ui(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.ih()
s=r.f
if(s!=null&&s!==$.dv())s.aO(p)
else p.$0()}else{p.$0()
r.ij((q&4)!==0)}},
cH(){var s,r=this,q=new A.uh(r)
r.ih()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.dv())s.aO(q)
else q.$0()},
iv(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.ij((r&4)!==0)},
ij(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bv()
else q.bw()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.f5(q)},
$ibg:1}
A.ui.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.mw(s,o,this.c,r,t.l)
else q.eX(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.uh.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.eW(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.fq.prototype={
a5(a,b,c,d){return this.a.j4(a,d,c,b===!0)},
bA(a,b,c){return this.a5(a,null,b,c)},
aQ(a){return this.a5(a,null,null,null)}}
A.lz.prototype={
gdM(){return this.a},
sdM(a){return this.a=a}}
A.bO.prototype={
jL(a){a.cb(this.b)}}
A.fd.prototype={
jL(a){a.cc(this.b,this.c)}}
A.uR.prototype={
jL(a){a.cH()},
gdM(){return null},
sdM(a){throw A.b(A.w("No events after a done."))}}
A.dk.prototype={
f5(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.iY(new A.vB(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sdM(b)
s.c=b}}}
A.vB.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gdM()
q.b=r
if(r==null)q.c=null
s.jL(this.b)},
$S:0}
A.fe.prototype={
hK(a){},
be(){var s=this.a
if(s>=0)this.a=s+2},
b3(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.iY(s.gl8())}else s.a=r},
A(){this.a=-1
this.c=null
return $.dv()},
r2(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.eW(s)}}else r.a=q},
$ibg:1}
A.bR.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.p($.t,t.k)
r.b=s
r.c=!1
q.b3()
return s}throw A.b(A.w("Already waiting for next."))}return r.qC()},
qC(){var s,r,q=this,p=q.b
if(p!=null){s=new A.p($.t,t.k)
q.b=s
r=p.a5(q.gqV(),!0,q.gqX(),q.gqZ())
if(q.b!=null)q.a=r
return s}return $.C1()},
A(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aY(!1)
else s.c=!1
return r.A()}return $.dv()},
qW(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.c5(!0)
if(q.c){r=q.a
if(r!=null)r.be()}},
r_(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ai(new A.ad(a,b))
else q.c4(new A.ad(a,b))},
qY(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cw(!1)
else q.kv(!1)}}
A.id.prototype={
a5(a,b,c,d){return A.Ag(c,this.$ti.c)},
bA(a,b,c){return this.a5(a,null,b,c)}}
A.cO.prototype={
a5(a,b,c,d){var s=null,r=new A.ip(s,s,s,s,this.$ti.i("ip<1>"))
r.d=new A.vz(this,r)
return r.j4(a,d,c,b===!0)},
bA(a,b,c){return this.a5(a,null,b,c)},
aQ(a){return this.a5(a,null,null,null)}}
A.vz.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.ip.prototype={
tq(a){var s=this.b
if(s>=4)throw A.b(this.bs())
if((s&1)!==0)this.gaH().ar(a)},
tG(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bs())
r|=4
s.b=r
if((r&1)!==0)s.gaH().aL()},
gcv(){throw A.b(A.Y("Not available"))},
$id4:1}
A.wv.prototype={
$0(){return this.a.ai(this.b)},
$S:0}
A.ww.prototype={
$0(){return this.a.c5(this.b)},
$S:0}
A.ih.prototype={
a5(a,b,c,d){var s=this.$ti,r=$.t,q=b===!0?1:0,p=d!=null?32:0,o=A.lp(r,a,s.y[1]),n=A.ug(r,d),m=c==null?A.wJ():c
s=new A.fh(this,o,n,r.bF(m,t.H),r,q|p,s.i("fh<1,2>"))
s.x=this.a.bA(s.giz(),s.giB(),s.giD())
return s},
bA(a,b,c){return this.a5(a,null,b,c)}}
A.fh.prototype={
ar(a){if((this.e&2)!==0)return
this.i9(a)},
aB(a,b){if((this.e&2)!==0)return
this.km(a,b)},
bv(){var s=this.x
if(s!=null)s.be()},
bw(){var s=this.x
if(s!=null)s.b3()},
fX(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
iA(a){this.w.ph(a,this)},
iE(a,b){this.aB(a,b)},
iC(){this.aL()}}
A.ee.prototype={
ph(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.I(q)
r=A.a5(q)
p=s
o=r
n=A.iO(p,o)
if(n!=null){p=n.a
o=n.b}b.aB(p,o)
return}b.ar(m)}}
A.ie.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.x(A.w("Stream is already closed"))
s.i9(b)},
by(a,b){this.a.aB(a,b)},
p(){var s=this.a
if((s.e&2)!==0)A.x(A.w("Stream is already closed"))
s.kn()},
$ibn:1}
A.fo.prototype={
ar(a){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.i9(a)},
aB(a,b){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.km(a,b)},
aL(){if((this.e&2)!==0)throw A.b(A.w("Stream is already closed"))
this.kn()},
bv(){var s=this.x
if(s!=null)s.be()},
bw(){var s=this.x
if(s!=null)s.b3()},
fX(){var s=this.x
if(s!=null){this.x=null
return s.A()}return null},
iA(a){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.t(0,a)}catch(p){s=A.I(p)
r=A.a5(p)
this.aB(s,r)}},
iE(a,b){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.by(a,b)}catch(p){s=A.I(p)
r=A.a5(p)
if(s===a)this.aB(a,b)
else this.aB(s,r)}},
iC(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.v()
q.p()}catch(p){s=A.I(p)
r=A.a5(p)
this.aB(s,r)}}}
A.i6.prototype={
a5(a,b,c,d){var s=this.$ti,r=$.t,q=b===!0?1:0,p=d!=null?32:0,o=A.lp(r,a,s.y[1]),n=A.ug(r,d),m=c==null?A.wJ():c,l=new A.fo(o,n,r.bF(m,t.H),r,q|p,s.i("fo<1,2>"))
l.w=this.a.$1(new A.ie(l,s.i("ie<2>")))
l.x=this.b.bA(l.giz(),l.giB(),l.giD())
return l},
bA(a,b,c){return this.a5(a,null,b,c)}}
A.wn.prototype={}
A.wp.prototype={}
A.wo.prototype={}
A.wl.prototype={}
A.wm.prototype={}
A.wk.prototype={}
A.wh.prototype={}
A.mm.prototype={}
A.wg.prototype={}
A.wf.prototype={}
A.wj.prototype={}
A.wi.prototype={}
A.ml.prototype={
uP(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.mn.prototype={}
A.mk.prototype={
ed(a,b,c){var s,r,q,p,o,n,m=this.giL(),l=m.a
if(l===B.f){A.iS(b,c)
return}o=l.gjI()
o.toString
s=o
r=$.t
try{$.t=s
m.uP(l,l.gb0(),a,b,c)
$.t=r}catch(n){q=A.I(n)
p=A.a5(n)
$.t=r
o=b===q?c:p
s.ed(l,q,o)}},
$iN:1}
A.lv.prototype={
gkL(){var s=this.ax
return s==null?this.ax=new A.fx(this):s},
gb0(){return this.ay.gkL()},
gbR(){return this.as.a},
eW(a){var s,r,q
try{this.aT(a,t.H)}catch(q){s=A.I(q)
r=A.a5(q)
this.ed(this,s,r)}},
eX(a,b,c){var s,r,q
try{this.dS(a,b,t.H,c)}catch(q){s=A.I(q)
r=A.a5(q)
this.ed(this,s,r)}},
mw(a,b,c,d,e){var s,r,q
try{this.jR(a,b,c,t.H,d,e)}catch(q){s=A.I(q)
r=A.a5(q)
this.ed(this,s,r)}},
jc(a,b){return new A.uN(this,this.bF(a,b),b)},
tC(a,b,c){return new A.uP(this,this.cV(a,b,c),c,b)},
eq(a){return new A.uM(this,this.bF(a,t.H))},
he(a,b){return new A.uO(this,this.cV(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.an)return null
s=q.b
r=s.h(0,b)
return r!=null||s.H(b)?r:this.rB(q,b)},
rB(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gjI().gj9()
if(s===B.an)break
q=s.b
r=q.h(0,b)
if(r!=null||q.H(b)){a.b.j(0,b,r)
break}}return r},
eC(a,b){this.ed(this,a,b)},
m6(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb0(),this,a,b)},
aT(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb0(),this,a,b)},
dS(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb0(),this,a,b,c,d)},
jR(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb0(),this,a,b,c,d,e,f)},
bF(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb0(),this,a,b)},
cV(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb0(),this,a,b,c)},
eR(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb0(),this,a,b,c,d)},
m0(a,b){var s=this.r,r=s.a
if(r===B.f)return null
return s.b.$5(r,r.gb0(),this,a,b)},
cu(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb0(),this,a)},
ji(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb0(),this,a,b)},
jh(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb0(),this,a,b)},
glm(){return this.a},
glo(){return this.b},
gln(){return this.c},
gli(){return this.d},
glj(){return this.e},
glh(){return this.f},
gkQ(){return this.r},
gj0(){return this.w},
gkJ(){return this.x},
gkI(){return this.y},
gld(){return this.z},
gkT(){return this.Q},
giL(){return this.as},
gj9(){return this.at},
gjI(){return this.ay}}
A.uN.prototype={
$0(){return this.a.aT(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.uP.prototype={
$1(a){var s=this
return s.a.dS(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").a_(this.c).i("1(2)")}}
A.uM.prototype={
$0(){return this.a.eW(this.b)},
$S:0}
A.uO.prototype={
$1(a){return this.a.eX(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.lW.prototype={
glm(){return B.d7},
glo(){return B.d6},
gln(){return B.d5},
gli(){return B.d3},
glj(){return B.d4},
glh(){return B.d2},
gkQ(){return B.cZ},
gj0(){return B.d8},
gkJ(){return B.cY},
gkI(){return B.cX},
gld(){return B.d1},
gkT(){return B.d_},
giL(){return B.d0},
gj9(){return B.an},
gjI(){return null},
gkL(){var s=$.vG
return s==null?$.vG=new A.fx(this):s},
gb0(){var s=$.vG
return s==null?$.vG=new A.fx(this):s},
gbR(){return this},
eW(a){var s,r,q
try{if(B.f===$.t){a.$0()
return}A.wE(null,null,this,a)}catch(q){s=A.I(q)
r=A.a5(q)
A.iS(s,r)}},
eX(a,b){var s,r,q
try{if(B.f===$.t){a.$1(b)
return}A.wF(null,null,this,a,b)}catch(q){s=A.I(q)
r=A.a5(q)
A.iS(s,r)}},
mw(a,b,c){var s,r,q
try{if(B.f===$.t){a.$2(b,c)
return}A.yA(null,null,this,a,b,c)}catch(q){s=A.I(q)
r=A.a5(q)
A.iS(s,r)}},
jc(a,b){return new A.vI(this,a,b)},
eq(a){return new A.vH(this,a)},
he(a,b){return new A.vJ(this,a,b)},
h(a,b){return null},
eC(a,b){A.iS(a,b)},
m6(a,b){return A.B3(null,null,this,a,b)},
aT(a){if($.t===B.f)return a.$0()
return A.wE(null,null,this,a)},
dS(a,b){if($.t===B.f)return a.$1(b)
return A.wF(null,null,this,a,b)},
jR(a,b,c){if($.t===B.f)return a.$2(b,c)
return A.yA(null,null,this,a,b,c)},
bF(a){return a},
cV(a){return a},
eR(a){return a},
m0(a,b){return null},
cu(a){A.wG(null,null,this,a)},
ji(a,b){return A.yd(a,b)},
jh(a,b){return A.zP(a,b)}}
A.vI.prototype={
$0(){return this.a.aT(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.vH.prototype={
$0(){return this.a.eW(this.b)},
$S:0}
A.vJ.prototype={
$1(a){return this.a.eX(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.fx.prototype={$ial:1}
A.wD.prototype={
$0(){A.zg(this.a,this.b)},
$S:0}
A.i1.prototype={}
A.cM.prototype={
gl(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
gP(){return new A.ec(this,A.o(this).i("ec<1>"))},
gbh(){var s=A.o(this)
return A.dQ(new A.ec(this,s.i("ec<1>")),new A.vf(this),s.c,s.y[1])},
H(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.kF(a)},
kF(a){var s=this.d
if(s==null)return!1
return this.bM(this.kC(s,a),a)>=0},
E(a,b){b.ad(0,new A.ve(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Ai(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Ai(q,b)
return r}else return this.kU(b)},
kU(a){var s,r,q=this.d
if(q==null)return null
s=this.kC(q,a)
r=this.bM(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.kt(s==null?q.b=A.yn():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.kt(r==null?q.c=A.yn():r,b,c)}else q.lq(b,c)},
lq(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.yn()
s=p.c6(a)
r=o[s]
if(r==null){A.yo(o,s,[a,b]);++p.a
p.e=null}else{q=p.bM(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
ad(a,b){var s,r,q,p,o,n=this,m=n.kB()
for(s=m.length,r=A.o(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.ap(n))}},
kB(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.aF(i.a,null,!1,t.z)
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
kt(a,b,c){if(a[b]==null){++this.a
this.e=null}A.yo(a,b,c)},
c6(a){return J.a1(a)&1073741823},
kC(a,b){return a[this.c6(b)]},
bM(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.u(a[r],b))return r
return-1}}
A.vf.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.o(s).y[1].a(r):r},
$S(){return A.o(this.a).i("2(1)")}}
A.ve.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.o(this.a).i("~(1,2)")}}
A.dh.prototype={
c6(a){return A.mB(a)&1073741823},
bM(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.ia.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.nJ(b)},
j(a,b,c){this.nK(b,c)},
H(a){if(!this.w.$1(a))return!1
return this.nI(a)},
c6(a){return this.r.$1(a)&1073741823},
bM(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.uL.prototype={
$1(a){return this.a.b(a)},
$S:26}
A.ec.prototype={
gl(a){return this.a.a},
gB(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.lE(s,s.kB(),this.$ti.i("lE<1>"))},
D(a,b){return this.a.H(b)}}
A.lE.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.ap(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.im.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.nC(b)},
j(a,b,c){this.nE(b,c)},
H(a){if(!this.y.$1(a))return!1
return this.nB(a)},
F(a,b){if(!this.y.$1(b))return null
return this.nD(b)},
eD(a){return this.x.$1(a)&1073741823},
dH(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.vx.prototype={
$1(a){return this.a.b(a)},
$S:26}
A.cN.prototype={
gu(a){var s=this,r=new A.dj(s,s.r,A.o(s).i("dj<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gB(a){return this.a===0},
gW(a){return this.a!==0},
D(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.or(b)
return r}},
or(a){var s=this.d
if(s==null)return!1
return this.bM(s[this.c6(a)],a)>=0},
gC(a){var s=this.e
if(s==null)throw A.b(A.w("No elements"))
return s.a},
ga1(a){var s=this.f
if(s==null)throw A.b(A.w("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ks(s==null?q.b=A.yp():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ks(r==null?q.c=A.yp():r,b)}else return q.o_(b)},
o_(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.yp()
s=q.c6(a)
r=p[s]
if(r==null)p[s]=[q.iR(a)]
else{if(q.bM(r,a)>=0)return!1
r.push(q.iR(a))}return!0},
F(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.kD(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.kD(s.c,b)
else return s.iZ(b)},
iZ(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c6(a)
r=n[s]
q=o.bM(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.kE(p)
return!0},
aj(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iP()}},
ks(a,b){if(a[b]!=null)return!1
a[b]=this.iR(b)
return!0},
kD(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.kE(s)
delete a[b]
return!0},
iP(){this.r=this.r+1&1073741823},
iR(a){var s,r=this,q=new A.vy(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.iP()
return q},
kE(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.iP()},
c6(a){return J.a1(a)&1073741823},
bM(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1}}
A.vy.prototype={}
A.dj.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ap(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.pr.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:34}
A.dO.prototype={
gu(a){var s=this
return new A.lK(s,s.a,s.c,s.$ti.i("lK<1>"))},
gl(a){return this.b},
aj(a){var s,r,q,p=this;++p.a
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
if(this.b===0)throw A.b(A.w("No such element"))
s=this.c
s.toString
return s},
ga1(a){var s
if(this.b===0)throw A.b(A.w("No such element"))
s=this.c.c
s.toString
return s},
gan(a){var s=this.b
if(s===0)throw A.b(A.w("No such element"))
if(s>1)throw A.b(A.w("Too many elements"))
s=this.c
s.toString
return s},
gB(a){return this.b===0},
fW(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.w("LinkedListEntry is already in a LinkedList"));++q.a
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
j6(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.lK.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.ap(s))
if(r.b!==0)r=s.e&&s.d===r.gC(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.aV.prototype={
geL(){var s=this.a
if(s==null||this===s.gC(0))return null
return this.c}}
A.D.prototype={
gu(a){return new A.a9(a,this.gl(a),A.bu(a).i("a9<D.E>"))},
a3(a,b){return this.h(a,b)},
gB(a){return this.gl(a)===0},
gW(a){return!this.gB(a)},
gC(a){if(this.gl(a)===0)throw A.b(A.ar())
return this.h(a,0)},
ga1(a){if(this.gl(a)===0)throw A.b(A.ar())
return this.h(a,this.gl(a)-1)},
gan(a){if(this.gl(a)===0)throw A.b(A.ar())
if(this.gl(a)>1)throw A.b(A.he())
return this.h(a,0)},
D(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.u(this.h(a,s),b))return!0
if(r!==this.gl(a))throw A.b(A.ap(a))}return!1},
dD(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gl(a))throw A.b(A.ap(a))}return!0},
ey(a,b,c){var s,r,q,p=this.gl(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gl(a))throw A.b(A.ap(a))}q=c.$0()
return q},
L(a,b){var s
if(this.gl(a)===0)return""
s=A.rC("",a,b)
return s.charCodeAt(0)==0?s:s},
jX(a,b){return new A.bp(a,b.i("bp<0>"))},
co(a,b,c){return new A.a7(a,b,A.bu(a).i("@<D.E>").a_(c).i("a7<1,2>"))},
b5(a,b){return A.c5(a,b,null,A.bu(a).i("D.E"))},
cr(a,b){return A.c5(a,0,A.bF(b,"count",t.S),A.bu(a).i("D.E"))},
wl(a){var s,r=A.ps(A.bu(a).i("D.E"))
for(s=0;s<this.gl(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gl(a)
this.sl(a,s+1)
this.j(a,s,b)},
hf(a,b){return new A.bw(a,A.bu(a).i("@<D.E>").a_(b).i("bw<1,2>"))},
c2(a,b){var s=b==null?A.GX():b
A.kC(a,0,this.gl(a)-1,s)},
S(a,b,c){var s,r=this.gl(a)
if(c==null)c=r
A.aX(b,c,r)
s=A.P(this.f4(a,b,c),A.bu(a).i("D.E"))
return s},
aX(a,b){return this.S(a,b,null)},
f4(a,b,c){A.aX(b,c,this.gl(a))
return A.c5(a,b,c,A.bu(a).i("D.E"))},
hq(a,b,c,d){var s
A.aX(b,c,this.gl(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ab(a,b,c,d,e){var s,r,q,p,o
A.aX(b,c,this.gl(a))
s=c-b
if(s===0)return
A.aW(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.mK(d,e).cs(0,!1)
r=0}p=J.K(q)
if(r+s>p.gl(q))throw A.b(A.zp())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
af(a,b,c,d){return this.ab(a,b,c,d,0)},
d6(a,b,c){var s,r
if(t.j.b(c))this.af(a,b,b+c.length,c)
else for(s=J.M(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
m(a){return A.pm(a,"[","]")},
$iF:1,
$in:1,
$iq:1}
A.U.prototype={
ad(a,b){var s,r,q,p
for(s=J.M(this.gP()),r=A.o(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gbn(){return J.aH(this.gP(),new A.pM(this),A.o(this).i("X<U.K,U.V>"))},
cS(a,b,c,d){var s,r,q,p,o,n=A.E(c,d)
for(s=J.M(this.gP()),r=A.o(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
H(a){return J.CE(this.gP(),a)},
gl(a){return J.ao(this.gP())},
gB(a){return J.bW(this.gP())},
gW(a){return J.fN(this.gP())},
gbh(){return new A.io(this,A.o(this).i("io<U.K,U.V>"))},
m(a){return A.pN(this)},
$iG:1}
A.pM.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.o(s).i("U.V").a(r)
return new A.X(a,r,A.o(s).i("X<U.K,U.V>"))},
$S(){return A.o(this.a).i("X<U.K,U.V>(U.K)")}}
A.pO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:39}
A.io.prototype={
gl(a){var s=this.a
return s.gl(s)},
gB(a){var s=this.a
return s.gB(s)},
gW(a){var s=this.a
return s.gW(s)},
gC(a){var s=this.a
s=s.h(0,J.cc(s.gP()))
return s==null?this.$ti.y[1].a(s):s},
gan(a){var s=this.a
s=s.h(0,J.xz(s.gP()))
return s==null?this.$ti.y[1].a(s):s},
ga1(a){var s=this.a
s=s.h(0,J.mJ(s.gP()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.lN(J.M(s.gP()),s,this.$ti.i("lN<1,2>"))}}
A.lN.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.ma.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.hr.prototype={
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
H(a){return this.a.H(a)},
ad(a,b){this.a.ad(0,b)},
gB(a){var s=this.a
return s.gB(s)},
gW(a){var s=this.a
return s.gW(s)},
gl(a){var s=this.a
return s.gl(s)},
gP(){return this.a.gP()},
m(a){return this.a.m(0)},
gbh(){return this.a.gbh()},
gbn(){return this.a.gbn()},
cS(a,b,c,d){return this.a.cS(0,b,c,d)},
$iG:1}
A.f2.prototype={}
A.hl.prototype={
gu(a){var s=this
return new A.lL(s,s.c,s.d,s.b,s.$ti.i("lL<1>"))},
gB(a){return this.b===this.c},
gl(a){return(this.c-this.b&this.a.length-1)>>>0},
gC(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.ar())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga1(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.ar())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gan(a){var s,r=this
if(r.b===r.c)throw A.b(A.ar())
if(r.gl(0)>1)throw A.b(A.he())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a3(a,b){var s,r=this
A.Dn(b,r.gl(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
F(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.u(r.a[s],b)){r.iZ(s);++r.d
return!0}return!1},
m(a){return A.pm(this,"{","}")},
iZ(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.lL.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.x(A.ap(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.c1.prototype={
gB(a){return this.gl(this)===0},
gW(a){return this.gl(this)!==0},
E(a,b){var s
for(s=J.M(b);s.k();)this.t(0,s.gn())},
co(a,b,c){return new A.dI(this,b,A.o(this).i("@<1>").a_(c).i("dI<1,2>"))},
gan(a){var s,r=this
if(r.gl(r)>1)throw A.b(A.he())
s=r.gu(r)
if(!s.k())throw A.b(A.ar())
return s.gn()},
m(a){return A.pm(this,"{","}")},
dD(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cr(a,b){return A.zO(this,b,A.o(this).c)},
b5(a,b){return A.zN(this,b,A.o(this).c)},
gC(a){var s=this.gu(this)
if(!s.k())throw A.b(A.ar())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.ar())
do s=r.gn()
while(r.k())
return s},
a3(a,b){var s,r
A.aW(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.jM(b,b-r,this,null,"index"))},
$iF:1,
$in:1,
$idY:1}
A.iw.prototype={}
A.iH.prototype={}
A.lI.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rg(b):s}},
gl(a){return this.b==null?this.c.a:this.e1().length},
gB(a){return this.gl(0)===0},
gW(a){return this.gl(0)>0},
gP(){if(this.b==null){var s=this.c
return new A.Z(s,A.o(s).i("Z<1>"))}return new A.lJ(this)},
gbh(){var s,r=this
if(r.b==null){s=r.c
return new A.aT(s,A.o(s).i("aT<2>"))}return A.dQ(r.e1(),new A.vt(r),t.N,t.z)},
H(a){if(this.b==null)return this.c.H(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
ad(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.ad(0,b)
s=o.e1()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.wx(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ap(o))}},
e1(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
rg(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.wx(this.a[a])
return this.b[a]=s}}
A.vt.prototype={
$1(a){return this.a.h(0,a)},
$S:43}
A.lJ.prototype={
gl(a){return this.a.gl(0)},
a3(a,b){var s=this.a
return s.b==null?s.gP().a3(0,b):s.e1()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gP()
s=s.gu(s)}else{s=s.e1()
s=new J.eu(s,s.length,A.a8(s).i("eu<1>"))}return s},
D(a,b){return this.a.H(b)}}
A.vr.prototype={
p(){var s,r,q=this
q.nL()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.ar(A.B_(r.charCodeAt(0)==0?r:r,q.b))
s.aL()}}
A.wb.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:44}
A.wa.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:44}
A.j3.prototype={
gb2(){return"us-ascii"},
jn(a){return B.b0.v(a)}}
A.m9.prototype={
v(a){var s,r,q,p=A.aX(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.b1(a,"string","Contains invalid characters."))
o[r]=q}return o},
bJ(a){return new A.w2(new A.f9(a),this.a)}}
A.j4.prototype={}
A.w2.prototype={
p(){this.a.a.p()},
bz(a,b,c,d){var s,r,q,p
A.aX(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.O("Source contains invalid character with code point: "+q+".",null))}s=new A.bY(a)
p=this.a.a
p.t(0,s.S(s,b,c))
if(d)p.p()}}
A.mY.prototype={
gjo(){return B.b4},
vE(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.aX(a1,a2,a0.length)
s=$.yT()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.x8(a0.charCodeAt(l))
h=A.x8(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.ab("")
e=p}else e=p
e.a+=B.a.q(a0,q,r)
d=A.bd(k)
e.a+=d
q=l
continue}}throw A.b(A.a2("Invalid base64 data",a0,r))}if(p!=null){e=B.a.q(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.z3(a0,n,a2,o,m,d)
else{c=B.c.aG(d-1,4)+1
if(c===1)throw A.b(A.a2(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.cW(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.z3(a0,n,a2,o,m,b)
else{c=B.c.aG(b,4)
if(c===1)throw A.b(A.a2(a,a0,a2))
if(c>1)a0=B.a.cW(a0,a2,a2,c===2?"==":"=")}return a0}}
A.j9.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.ln(u.U).m_(a,0,s,!0)
s.toString
return A.db(s,0,null)},
bJ(a){return new A.tY(a,new A.uf(u.U))}}
A.ln.prototype={
lS(a){return new Uint8Array(a)},
m_(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.R(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.lS(o)
r.a=A.Ez(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.uf.prototype={
lS(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.dw(B.d.gaJ(s),s.byteOffset,a)}}
A.ua.prototype={
t(a,b){this.kG(b,0,J.ao(b),!1)},
p(){this.kG(B.c1,0,0,!0)}}
A.tY.prototype={
kG(a,b,c,d){var s=this.b.m_(a,b,c,d)
if(s!=null)this.a.a.ar(A.db(s,0,null))
if(d)this.a.a.aL()}}
A.j8.prototype={
v(a){var s,r,q=A.aX(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.lm()
r=s.jk(a,0,q)
r.toString
s.je(a,q)
return r},
bJ(a){return new A.u9(a,new A.lm())}}
A.lm.prototype={
jk(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.A6(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Ew(a,b,c,q)
r.a=A.Ey(a,b,c,s,0,r.a)
return s},
je(a,b){var s=this.a
if(s<-1)throw A.b(A.a2("Missing padding character",a,b))
if(s>0)throw A.b(A.a2("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.u9.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.jk(b,0,r)
if(s!=null)this.a.a.ar(s)},
p(){this.b.je(null,null)
this.a.a.aL()},
bz(a,b,c,d){var s,r
A.aX(b,c,a.length)
if(b===c)return
s=this.b
r=s.jk(a,b,c)
if(r!=null)this.a.a.ar(r)
if(d){s.je(a,c)
this.a.a.aL()}}}
A.n2.prototype={}
A.f9.prototype={
t(a,b){this.a.t(0,b)},
p(){this.a.p()}}
A.lq.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.K(b)
if(n.gl(b)>p.length-o){p=q.b
s=n.gl(b)+p.length-1
s|=B.c.a8(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.d.af(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.d.af(p,o,o+n.gl(b),b)
q.c=q.c+n.gl(b)},
p(){this.a.$1(B.d.S(this.b,0,this.c))}}
A.jk.prototype={}
A.m2.prototype={
t(a,b){this.b.push(b)},
p(){this.a.$1(this.b)}}
A.e9.prototype={
t(a,b){this.b.t(0,b)},
by(a,b){A.bF(a,"error",t.K)
this.a.by(a,b)},
p(){this.b.p()},
$ibn:1}
A.jl.prototype={}
A.aq.prototype={
bJ(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.m(0)))},
tA(a){return new A.i6(new A.nM(this),a,t.fM.a_(A.o(this).i("aq.T")).i("i6<1,2>"))}}
A.nM.prototype={
$1(a){return new A.e9(a,this.a.bJ(a),t.oW)},
$S:76}
A.dK.prototype={}
A.hj.prototype={
m(a){var s=A.jC(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.jU.prototype={
m(a){return"Cyclic error in JSON stringify"}}
A.pp.prototype={
aE(a,b){var s=A.B_(a,this.gtR().a)
return s},
a4(a,b){var s=A.ES(a,this.gjo().b,null)
return s},
gjo(){return B.bE},
gtR(){return B.bD}}
A.jW.prototype={
bJ(a){return new A.vs(null,this.b,new A.m4(a))}}
A.vs.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.w("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.ab("")
q=new A.vY(r,s)
A.Ak(b,q,p.b,p.a)
if(r.a.length!==0)q.iu()
s.p()},
p(){}}
A.jV.prototype={
bJ(a){return new A.vr(this.a,a,new A.ab(""))}}
A.vv.prototype={
mD(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.i1(a,s,r)
s=r+1
n.ak(92)
n.ak(117)
n.ak(100)
p=q>>>8&15
n.ak(p<10?48+p:87+p)
p=q>>>4&15
n.ak(p<10?48+p:87+p)
p=q&15
n.ak(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.i1(a,s,r)
s=r+1
n.ak(92)
switch(q){case 8:n.ak(98)
break
case 9:n.ak(116)
break
case 10:n.ak(110)
break
case 12:n.ak(102)
break
case 13:n.ak(114)
break
default:n.ak(117)
n.ak(48)
n.ak(48)
p=q>>>4&15
n.ak(p<10?48+p:87+p)
p=q&15
n.ak(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.i1(a,s,r)
s=r+1
n.ak(92)
n.ak(q)}}if(s===0)n.aU(a)
else if(s<m)n.i1(a,s,m)},
ii(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.jU(a,null))}s.push(a)},
i0(a){var s,r,q,p,o=this
if(o.mC(a))return
o.ii(a)
try{s=o.b.$1(a)
if(!o.mC(s)){q=A.zv(a,null,o.gla())
throw A.b(q)}o.a.pop()}catch(p){r=A.I(p)
q=A.zv(a,r,o.gla())
throw A.b(q)}},
mC(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.wF(a)
return!0}else if(a===!0){r.aU("true")
return!0}else if(a===!1){r.aU("false")
return!0}else if(a==null){r.aU("null")
return!0}else if(typeof a=="string"){r.aU('"')
r.mD(a)
r.aU('"')
return!0}else if(t.j.b(a)){r.ii(a)
r.wD(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.ii(a)
s=r.wE(a)
r.a.pop()
return s}else return!1},
wD(a){var s,r,q=this
q.aU("[")
s=J.K(a)
if(s.gW(a)){q.i0(s.h(a,0))
for(r=1;r<s.gl(a);++r){q.aU(",")
q.i0(s.h(a,r))}}q.aU("]")},
wE(a){var s,r,q,p,o=this,n={}
if(a.gB(a)){o.aU("{}")
return!0}s=a.gl(a)*2
r=A.aF(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.ad(0,new A.vw(n,r))
if(!n.b)return!1
o.aU("{")
for(p='"';q<s;q+=2,p=',"'){o.aU(p)
o.mD(A.J(r[q]))
o.aU('":')
o.i0(r[q+1])}o.aU("}")
return!0}}
A.vw.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:39}
A.vu.prototype={
gla(){var s=this.c
return s instanceof A.ab?s.m(0):null},
wF(a){this.c.i_(B.v.m(a))},
aU(a){this.c.i_(a)},
i1(a,b,c){this.c.i_(B.a.q(a,b,c))},
ak(a){this.c.ak(a)}}
A.jX.prototype={
gb2(){return"iso-8859-1"},
jn(a){return B.bM.v(a)}}
A.jY.prototype={}
A.kN.prototype={
t(a,b){this.bz(b,0,b.length,!1)}}
A.vY.prototype={
ak(a){var s=this.a,r=A.bd(a)
if((s.a+=r).length>16)this.iu()},
i_(a){if(this.a.a.length!==0)this.iu()
this.b.t(0,a)},
iu(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.iA.prototype={
p(){},
bz(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bd(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.p()},
t(a,b){this.a.a+=b}}
A.m4.prototype={
t(a,b){this.a.a.ar(b)},
bz(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.ar(a)
else r.ar(B.a.q(a,b,c))
if(d)r.aL()},
p(){this.a.a.aL()}}
A.w9.prototype={
p(){var s,r,q,p=this.c
this.a.uN(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bz(q,0,q.length,!0)}else r.p()},
t(a,b){this.bz(b,0,J.ao(b),!1)},
bz(a,b,c,d){var s,r=this.c,q=this.a.cA(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bz(s,0,s.length,!1)
r.a=""
return}}}
A.l3.prototype={
gb2(){return"utf-8"},
tO(a,b){return new A.cP((b===!0?B.cT:B.am).a).cA(a,0,null,!0)},
hj(a){return this.tO(a,null)},
jn(a){return B.i.v(a)}}
A.l4.prototype={
v(a){var s,r,q=A.aX(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.mc(s)
if(r.kS(a,0,q)!==q)r.h6()
return B.d.S(s,0,r.b)},
bJ(a){return new A.wc(new A.f9(a),new Uint8Array(1024))}}
A.mc.prototype={
h6(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.C(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
lG(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.C(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.h6()
return!1}},
kS(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.C(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.lG(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.h6()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.C(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.C(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.wc.prototype={
p(){if(this.a!==0){this.bz("",0,0,!0)
return}this.d.a.p()},
bz(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.lG(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.kS(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.h6()
else n.a=a.charCodeAt(b);++b}s.t(0,B.d.S(r,0,n.b))
if(o)s.p()
n.b=0}while(b<c)
if(d)n.p()}}
A.hX.prototype={
bJ(a){return new A.w9(new A.cP(this.a),new A.m4(a),new A.ab(""))}}
A.cP.prototype={
cA(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.aX(b,c,J.ao(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Fn(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Fm(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.im(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.AH(p)
m.b=0
throw A.b(A.a2(n,a,q+m.c))}return o},
im(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.R(b+c,2)
r=q.im(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.im(a,s,c,d)}return q.tQ(a,b,c,d)},
uN(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bd(65533)
a.a+=s}else throw A.b(A.a2(A.AH(77),null,null))},
tQ(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.ab(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bd(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bd(k)
h.a+=q
break
case 65:q=A.bd(k)
h.a+=q;--g
break
default:q=A.bd(k)
h.a=(h.a+=q)+q
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break A
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){for(;;){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bd(a[m])
h.a+=q}else{q=A.db(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bd(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.mo.prototype={}
A.aA.prototype={
bI(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bq(p,r)
return new A.aA(p===0?!1:s,r,p)},
oy(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cv()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bq(s,q)
return new A.aA(n===0?!1:o,q,n)},
oB(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cv()
s=k-a
if(s<=0)return l.a?$.yV():$.cv()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bq(s,q)
m=new A.aA(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fb(0,$.fL())
return m},
c0(a,b){var s,r,q,p,o=this,n=o.c
if(n===0)return o
s=b/16|0
if(B.c.aG(b,16)===0)return o.oy(s)
r=n+s+1
q=new Uint16Array(r)
A.Ad(o.b,n,b,q)
n=o.a
p=A.bq(r,q)
return new A.aA(p===0?!1:n,q,p)},
dZ(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.O("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.R(b,16)
q=B.c.aG(b,16)
if(q===0)return j.oB(r)
p=s-r
if(p<=0)return j.a?$.yV():$.cv()
o=j.b
n=new Uint16Array(p)
A.EE(o,s,b,n)
s=j.a
m=A.bq(p,n)
l=new A.aA(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.c0(1,q)-1)>>>0!==0)return l.fb(0,$.fL())
for(k=0;k<r;++k)if(o[k]!==0)return l.fb(0,$.fL())}return l},
T(a,b){var s,r=this.a
if(r===b.a){s=A.uc(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
ie(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.ie(p,b)
if(o===0)return $.cv()
if(n===0)return p.a===b?p:p.bI(0)
s=o+1
r=new Uint16Array(s)
A.EA(p.b,o,a.b,n,r)
q=A.bq(s,r)
return new A.aA(q===0?!1:b,r,q)},
fc(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cv()
s=a.c
if(s===0)return p.a===b?p:p.bI(0)
r=new Uint16Array(o)
A.lo(p.b,o,a.b,s,r)
q=A.bq(o,r)
return new A.aA(q===0?!1:b,r,q)},
f2(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.ie(b,r)
if(A.uc(q.b,p,b.b,s)>=0)return q.fc(b,r)
return b.fc(q,!r)},
fb(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bI(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.ie(b,r)
if(A.uc(q.b,p,b.b,s)>=0)return q.fc(b,r)
return b.fc(q,!r)},
b4(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cv()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.Ae(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bq(s,p)
return new A.aA(m===0?!1:n,p,m)},
ox(a){var s,r,q,p
if(this.c<a.c)return $.cv()
this.kN(a)
s=$.yh.bj()-$.i5.bj()
r=A.yj($.yg.bj(),$.i5.bj(),$.yh.bj(),s)
q=A.bq(s,r)
p=new A.aA(!1,r,q)
return this.a!==a.a&&q>0?p.bI(0):p},
rC(a){var s,r,q,p=this
if(p.c<a.c)return p
p.kN(a)
s=A.yj($.yg.bj(),0,$.i5.bj(),$.i5.bj())
r=A.bq($.i5.bj(),s)
q=new A.aA(!1,s,r)
if($.yi.bj()>0)q=q.dZ(0,$.yi.bj())
return p.a&&q.c>0?q.bI(0):q},
kN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Aa&&a.c===$.Ac&&c.b===$.A9&&a.b===$.Ab)return
s=a.b
r=a.c
q=16-B.c.glO(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.A8(s,r,q,p)
n=new Uint16Array(b+5)
m=A.A8(c.b,b,q,n)}else{n=A.yj(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.yk(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.uc(n,m,j,i)>=0){g&2&&A.C(n)
n[m]=1
A.lo(n,h,j,i,n)}else{g&2&&A.C(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.lo(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.EB(l,n,e);--k
A.Ae(d,f,0,n,k,o)
if(n[e]<d){i=A.yk(f,o,k,j)
A.lo(n,h,j,i,n)
while(--d,n[e]<d)A.lo(n,h,j,i,n)}--e}$.A9=c.b
$.Aa=b
$.Ab=s
$.Ac=r
$.yg.b=n
$.yh.b=h
$.i5.b=o
$.yi.b=q},
gN(a){var s,r,q,p=new A.ud(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.ue().$1(s)},
X(a,b){if(b==null)return!1
return b instanceof A.aA&&this.T(0,b)===0},
m(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.m(-n.b[0])
return B.c.m(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bI(0):n
while(r.c>1){q=$.yU()
if(q.c===0)A.x(B.b7)
p=r.rC(q).m(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.ox(q)}s.push(B.c.m(r.b[0]))
if(m)s.push("-")
return new A.dW(s,t.hF).dI(0)},
$iam:1}
A.ud.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:77}
A.ue.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:165}
A.lC.prototype={
lM(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
lY(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.w8.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.M(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.ac(b)}},
$S:48}
A.ok.prototype={
$0(){var s=this
return A.x(A.O("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:36}
A.b2.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.b2&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gN(a){return A.d6(this.a,this.b,B.h,B.h,B.h,B.h,B.h)},
T(a,b){var s=B.c.T(this.a,b.a)
if(s!==0)return s
return B.c.T(this.b,b.b)},
wm(){var s=this
if(s.c)return s
return new A.b2(s.a,s.b,!0)},
m(a){var s=this,r=A.D5(A.y3(s)),q=A.ju(A.y1(s)),p=A.ju(A.qM(s)),o=A.ju(A.y_(s)),n=A.ju(A.y0(s)),m=A.ju(A.y2(s)),l=A.ze(A.zF(s)),k=s.b,j=k===0?"":A.ze(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iam:1}
A.az.prototype={
X(a,b){if(b==null)return!1
return b instanceof A.az&&this.a===b.a},
gN(a){return B.c.gN(this.a)},
T(a,b){return B.c.T(this.a,b.a)},
m(a){var s,r,q,p,o,n=this.a,m=B.c.R(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.R(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.R(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.jH(B.c.m(n%1e6),6,"0")},
$iam:1}
A.uS.prototype={
m(a){return this.a7()}}
A.a6.prototype={
gc3(){return A.DQ(this)}}
A.j5.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.jC(s)
return"Assertion failed"}}
A.cJ.prototype={}
A.bv.prototype={
git(){return"Invalid argument"+(!this.a?"(s)":"")},
gis(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.git()+q+o
if(!s.a)return n
return n+s.gis()+": "+A.jC(s.gjz())},
gjz(){return this.b}}
A.cD.prototype={
gjz(){return this.b},
git(){return"RangeError"},
gis(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.hb.prototype={
gjz(){return this.b},
git(){return"RangeError"},
gis(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$icD:1,
gl(a){return this.f}}
A.cq.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.kW.prototype={
m(a){return"UnimplementedError: "+this.a},
$icq:1}
A.bf.prototype={
m(a){return"Bad state: "+this.a}}
A.jn.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.jC(s)+"."}}
A.ki.prototype={
m(a){return"Out of Memory"},
gc3(){return null},
$ia6:1}
A.hS.prototype={
m(a){return"Stack Overflow"},
gc3(){return null},
$ia6:1}
A.lB.prototype={
m(a){return"Exception: "+this.a},
$iL:1}
A.b4.prototype={
m(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
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
k=""}return g+l+B.a.q(e,i,j)+k+"\n"+B.a.b4(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iL:1,
gjD(){return this.a},
gf9(){return this.b},
gam(){return this.c}}
A.jO.prototype={
gc3(){return null},
m(a){return"IntegerDivisionByZeroException"},
$ia6:1,
$icq:1,
$iL:1}
A.n.prototype={
hf(a,b){return A.ji(this,A.o(this).i("n.E"),b)},
co(a,b,c){return A.dQ(this,b,A.o(this).i("n.E"),c)},
jX(a,b){return new A.bp(this,b.i("bp<0>"))},
dD(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
L(a,b){var s,r,q=this.gu(this)
if(!q.k())return""
s=J.aw(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.aw(q.gn())
while(q.k())}else{r=s
do r=r+b+J.aw(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
cs(a,b){var s=A.o(this).i("n.E")
if(b)s=A.P(this,s)
else{s=A.P(this,s)
s.$flags=1
s=s}return s},
dT(a){return this.cs(0,!0)},
gl(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gB(a){return!this.gu(this).k()},
gW(a){return!this.gB(this)},
cr(a,b){return A.zO(this,b,A.o(this).i("n.E"))},
b5(a,b){return A.zN(this,b,A.o(this).i("n.E"))},
gC(a){var s=this.gu(this)
if(!s.k())throw A.b(A.ar())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.ar())
do s=r.gn()
while(r.k())
return s},
gan(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.ar())
s=r.gn()
if(r.k())throw A.b(A.he())
return s},
ey(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a3(a,b){var s,r
A.aW(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.jM(b,b-r,this,null,"index"))},
m(a){return A.Dp(this,"(",")")}}
A.X.prototype={
m(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.Q.prototype={
gN(a){return A.j.prototype.gN.call(this,0)},
m(a){return"null"}}
A.j.prototype={$ij:1,
X(a,b){return this===b},
gN(a){return A.hG(this)},
m(a){return"Instance of '"+A.kp(this)+"'"},
gah(a){return A.iU(this)},
toString(){return this.m(this)}}
A.m6.prototype={
m(a){return""},
$iat:1}
A.kJ.prototype={
gut(){var s=this.glZ()
if($.mE()===1e6)return s
return s*1000},
guu(){var s=this.glZ()
if($.mE()===1000)return s
return B.c.R(s,1000)},
av(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.qP.$0()-r)
s.b=null}},
glZ(){var s=this.b
if(s==null)s=$.qP.$0()
return s-this.a}}
A.ri.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.FD(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.ab.prototype={
gl(a){return this.a.length},
i_(a){var s=A.r(a)
this.a+=s},
ak(a){var s=A.bd(a)
this.a+=s},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.t1.prototype={
$2(a,b){throw A.b(A.a2("Illegal IPv6 address, "+a,this.a,b))},
$S:66}
A.iI.prototype={
glu(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.r(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gvO(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ac(s,1)
r=s.length===0?B.o:A.d2(new A.a7(A.l(s.split("/"),t.s),A.H1(),t.iZ),t.N)
q.x!==$&&A.xs()
p=q.x=r}return p},
gN(a){var s,r=this,q=r.y
if(q===$){s=B.a.gN(r.glu())
r.y!==$&&A.xs()
r.y=s
q=s}return q},
gjW(){return this.b},
gcQ(){var s=this.c
if(s==null)return""
if(B.a.O(s,"[")&&!B.a.a6(s,"v",1))return B.a.q(s,1,s.length-1)
return s},
geK(){var s=this.d
return s==null?A.Aw(this.a):s},
geP(){var s=this.f
return s==null?"":s},
ghs(){var s=this.r
return s==null?"":s},
vl(a){var s=this.a
if(a.length!==s.length)return!1
return A.FB(a,s,0)>=0},
eU(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.yt(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.w4(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.O(n,"/"))n="/"+n
l=n
if(a!=null)k=A.w5(null,0,0,a)
else k=j.f
return A.iJ(b,q,o,p,l,k,j.r)},
jQ(a){return this.eU(a,null)},
ms(a){return this.eU(null,a)},
l4(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.a6(b,"../",r);){r+=3;++s}q=B.a.cR(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.hF(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.cW(a,q+1,null,B.a.ac(b,r-3*s))},
bg(a){return this.eV(A.l2(a))},
eV(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaP().length!==0)return a
else{s=h.a
if(a.gju()){r=a.ms(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gm7())m=a.ghC()?a.geP():h.f
else{l=A.Fl(h,n)
if(l>0){k=B.a.q(n,0,l)
n=a.gjt()?k+A.ei(a.gbd()):k+A.ei(h.l4(B.a.ac(n,k.length),a.gbd()))}else if(a.gjt())n=A.ei(a.gbd())
else if(n.length===0)if(p==null)n=s.length===0?a.gbd():A.ei(a.gbd())
else n=A.ei("/"+a.gbd())
else{j=h.l4(n,a.gbd())
r=s.length===0
if(!r||p!=null||B.a.O(n,"/"))n=A.ei(j)
else n=A.yv(j,!r||p!=null)}m=a.ghC()?a.geP():null}}}i=a.gjv()?a.ghs():null
return A.iJ(s,q,p,o,n,m,i)},
gju(){return this.c!=null},
ghC(){return this.f!=null},
gjv(){return this.r!=null},
gm7(){return this.e.length===0},
gjt(){return B.a.O(this.e,"/")},
jT(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gcQ()!=="")A.x(A.Y(u.Q))
s=r.gvO()
A.Fe(s,!1)
q=A.rC(B.a.O(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
m(a){return this.glu()},
X(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gaP())if(p.c!=null===b.gju())if(p.b===b.gjW())if(p.gcQ()===b.gcQ())if(p.geK()===b.geK())if(p.e===b.gbd()){r=p.f
q=r==null
if(!q===b.ghC()){if(q)r=""
if(r===b.geP()){r=p.r
q=r==null
if(!q===b.gjv()){s=q?"":r
s=s===b.ghs()}}}}return s},
$il0:1,
gaP(){return this.a},
gbd(){return this.e}}
A.w7.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.fv(1,a,B.k,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.fv(1,b,B.k,!0)
s.a+=r}},
$S:87}
A.w6.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.M(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:48}
A.t0.prototype={
gmB(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.bU(m,"?",s)
q=m.length
if(r>=0){p=A.iK(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.lw("data","",n,n,A.iK(m,s,q,128,!1,!1),p,n)}return m},
m(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bQ.prototype={
gju(){return this.c>0},
gjw(){return this.c>0&&this.d+1<this.e},
ghC(){return this.f<this.r},
gjv(){return this.r<this.a.length},
gjt(){return B.a.a6(this.a,"/",this.e)},
gm7(){return this.e===this.f},
gaP(){var s=this.w
return s==null?this.w=this.op():s},
op(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.O(r.a,"http"))return"http"
if(q===5&&B.a.O(r.a,"https"))return"https"
if(s&&B.a.O(r.a,"file"))return"file"
if(q===7&&B.a.O(r.a,"package"))return"package"
return B.a.q(r.a,0,q)},
gjW(){var s=this.c,r=this.b+3
return s>r?B.a.q(this.a,r,s-1):""},
gcQ(){var s=this.c
return s>0?B.a.q(this.a,s,this.d):""},
geK(){var s,r=this
if(r.gjw())return A.av(B.a.q(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.O(r.a,"http"))return 80
if(s===5&&B.a.O(r.a,"https"))return 443
return 0},
gbd(){return B.a.q(this.a,this.e,this.f)},
geP(){var s=this.f,r=this.r
return s<r?B.a.q(this.a,s+1,r):""},
ghs(){var s=this.r,r=this.a
return s<r.length?B.a.ac(r,s+1):""},
l_(a){var s=this.d+1
return s+a.length===this.e&&B.a.a6(this.a,a,s)},
wa(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bQ(B.a.q(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
eU(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.yt(b,0,b.length)
s=!(h.b===b.length&&B.a.O(h.a,b))}else{b=h.gaP()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.q(h.a,h.b+3,q):""
o=h.gjw()?h.geK():g
if(s)o=A.w4(o,b)
q=h.c
if(q>0)n=B.a.q(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.q(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.O(l,"/"))l="/"+l
if(a!=null)j=A.w5(g,0,0,a)
else{k=h.r
j=m<k?B.a.q(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ac(q,m+1):g
return A.iJ(b,p,n,o,l,j,i)},
jQ(a){return this.eU(a,null)},
ms(a){return this.eU(null,a)},
bg(a){return this.eV(A.l2(a))},
eV(a){if(a instanceof A.bQ)return this.rV(this,a)
return this.lw().eV(a)},
rV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.O(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.O(a.a,"http"))p=!b.l_("80")
else p=!(r===5&&B.a.O(a.a,"https"))||!b.l_("443")
if(p){o=r+1
return new A.bQ(B.a.q(a.a,0,o)+B.a.ac(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.lw().eV(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bQ(B.a.q(a.a,0,r)+B.a.ac(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bQ(B.a.q(a.a,0,r)+B.a.ac(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wa()}s=b.a
if(B.a.a6(s,"/",n)){m=a.e
l=A.Ao(this)
k=l>0?l:m
o=k-n
return new A.bQ(B.a.q(a.a,0,k)+B.a.ac(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.a6(s,"../",n))n+=3
o=j-n+1
return new A.bQ(B.a.q(a.a,0,j)+"/"+B.a.ac(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Ao(this)
if(l>=0)g=l
else for(g=j;B.a.a6(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.a6(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.a6(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bQ(B.a.q(h,0,i)+d+B.a.ac(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
jT(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.O(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gaP()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.x(A.Y(u.Q))
q=B.a.q(s,r.e,q)
return q},
gN(a){var s=this.x
return s==null?this.x=B.a.gN(this.a):s},
X(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.m(0)},
lw(){var s=this,r=null,q=s.gaP(),p=s.gjW(),o=s.c>0?s.gcQ():r,n=s.gjw()?s.geK():r,m=s.a,l=s.f,k=B.a.q(m,s.e,l),j=s.r
l=l<j?s.geP():r
return A.iJ(q,p,o,n,k,l,j<m.length?s.ghs():r)},
m(a){return this.a},
$il0:1}
A.lw.prototype={}
A.jE.prototype={
j(a,b,c){this.a.set(b,c)},
m(a){return"Expando:"+A.r(this.b)}}
A.kg.prototype={
m(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iL:1}
A.oM.prototype={
$2(a,b){this.a.bo(new A.oK(a),new A.oL(b),t.X)},
$S:65}
A.oK.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:93}
A.oL.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.GU(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.x("Attempting to box non-Dart object.")
s={}
s[$.Co()]=a
p.error=s
p.stack=b.m(0)
r=this.a
r.call(r,p)},
$S:9}
A.xd.prototype={
$1(a){var s,r,q,p
if(A.AZ(a))return a
s=this.a
if(s.H(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.M(a.gP());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.U.b(a)){p=[]
s.j(0,a,p)
B.b.E(p,J.aH(a,this,t.z))
return p}else return a},
$S:21}
A.xj.prototype={
$1(a){return this.a.au(a)},
$S:23}
A.xk.prototype={
$1(a){if(a==null)return this.a.aD(new A.kg(a===undefined))
return this.a.aD(a)},
$S:23}
A.wQ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.AY(a))return a
s=this.a
a.toString
if(s.H(a))return s.h(0,a)
if(a instanceof Date)return new A.b2(A.ol(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.O("structured clone of RegExp",null))
if(a instanceof Promise)return A.a_(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.E(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.ay(o),q=s.gu(o);q.k();)n.push(A.mx(q.gn()))
for(m=0;m<s.gl(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.K(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:21}
A.vo.prototype={
cp(a){if(a<=0||a>4294967296)throw A.b(A.aJ(u.E+a))
return Math.random()*a>>>0},
vD(){return Math.random()}}
A.vp.prototype={
nW(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cp(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aJ(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.C(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ai(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.dw(B.ce.gaJ(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.jB.prototype={}
A.W.prototype={
h(a,b){var s,r=this
if(!r.iM(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("W.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.iM(b))return
s.c.j(0,s.a.$1(b),new A.X(b,c,s.$ti.i("X<W.K,W.V>")))},
E(a,b){b.ad(0,new A.n4(this))},
H(a){var s=this
if(!s.iM(a))return!1
return s.c.H(s.a.$1(s.$ti.i("W.K").a(a)))},
gbn(){var s=this.c,r=A.o(s).i("aI<1,2>")
return A.dQ(new A.aI(s,r),new A.n5(this),r.i("n.E"),this.$ti.i("X<W.K,W.V>"))},
ad(a,b){this.c.ad(0,new A.n6(this,b))},
gB(a){return this.c.a===0},
gW(a){return this.c.a!==0},
gP(){var s=this.c,r=A.o(s).i("aT<2>")
return A.dQ(new A.aT(s,r),new A.n7(this),r.i("n.E"),this.$ti.i("W.K"))},
gl(a){return this.c.a},
cS(a,b,c,d){return this.c.cS(0,new A.n8(this,b,c,d),c,d)},
gbh(){var s=this.c,r=A.o(s).i("aT<2>")
return A.dQ(new A.aT(s,r),new A.n9(this),r.i("n.E"),this.$ti.i("W.V"))},
m(a){return A.pN(this)},
iM(a){return this.$ti.i("W.K").b(a)},
$iG:1}
A.n4.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(W.K,W.V)")}}
A.n5.prototype={
$1(a){var s=a.b
return new A.X(s.a,s.b,this.a.$ti.i("X<W.K,W.V>"))},
$S(){return this.a.$ti.i("X<W.K,W.V>(X<W.C,X<W.K,W.V>>)")}}
A.n6.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(W.C,X<W.K,W.V>)")}}
A.n7.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("W.K(X<W.K,W.V>)")}}
A.n8.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.a_(this.c).a_(this.d).i("X<1,2>(W.C,X<W.K,W.V>)")}}
A.n9.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("W.V(X<W.K,W.V>)")}}
A.jx.prototype={
ag(a,b){return J.u(a,b)},
ap(a){return J.a1(a)}}
A.hf.prototype={
ag(a,b){var s,r,q,p
if(a===b)return!0
s=J.M(a)
r=J.M(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.ag(s.gn(),r.gn()))return!1}},
ap(a){var s,r,q
for(s=J.M(a),r=this.a,q=0;s.k();){q=q+r.ap(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.dP.prototype={
ag(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.K(a)
r=s.gl(a)
q=J.K(b)
if(r!==q.gl(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.ag(s.h(a,o),q.h(b,o)))return!1
return!0},
ap(a){var s,r,q,p
for(s=J.K(a),r=this.a,q=0,p=0;p<s.gl(a);++p){q=q+r.ap(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.ft.prototype={
ag(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.xO(s.guA(),s.gvd(),s.gvm(),A.o(this).i("ft.E"),t.S)
for(s=J.M(a),q=0;s.k();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.M(b);s.k();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ap(a){var s,r,q
for(s=J.M(a),r=this.a,q=0;s.k();)q=q+r.ap(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.eQ.prototype={}
A.fk.prototype={
gN(a){var s=this.a
return 3*s.a.ap(this.b)+7*s.b.ap(this.c)&2147483647},
X(a,b){var s
if(b==null)return!1
if(b instanceof A.fk){s=this.a
s=s.a.ag(this.b,b.b)&&s.b.ag(this.c,b.c)}else s=!1
return s}}
A.ho.prototype={
ag(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gl(a)!==b.gl(b))return!1
s=A.xO(null,null,null,t.fA,t.S)
for(r=J.M(a.gP());r.k();){q=r.gn()
p=new A.fk(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.M(b.gP());r.k();){q=r.gn()
p=new A.fk(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ap(a){var s,r,q,p,o,n,m,l
for(s=J.M(a.gP()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ap(n)
l=a.h(0,n)
o=o+3*m+7*q.ap(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.jw.prototype={
ag(a,b){var s,r=this
if(a instanceof A.c1)return b instanceof A.c1&&new A.eQ(r,t.cu).ag(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.ho(r,r,t.a3).ag(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.dP(r,t.hI).ag(a,b)
s=t.U
if(s.b(a))return s.b(b)&&new A.hf(r,t.nZ).ag(a,b)
return J.u(a,b)},
ap(a){var s=this
if(a instanceof A.c1)return new A.eQ(s,t.cu).ap(a)
if(t.f.b(a))return new A.ho(s,s,t.a3).ap(a)
if(t.j.b(a))return new A.dP(s,t.hI).ap(a)
if(t.U.b(a))return new A.hf(s,t.nZ).ap(a)
return J.a1(a)},
vn(a){return!0}}
A.kf.prototype={
sl(a,b){A.zA()},
t(a,b){return A.zA()}}
A.kZ.prototype={}
A.bZ.prototype={
X(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.bZ){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gN(a){return A.zB(this.a)},
m(a){return A.aB(this.a)}}
A.ew.prototype={
t(a,b){if(this.a!=null)throw A.b(A.w("add may only be called once."))
this.a=b},
p(){if(this.a==null)throw A.b(A.w("add must be called once."))}}
A.jI.prototype={
v(a){var s=new A.ew(),r=A.m0(s)
r.t(0,a)
r.p()
r=s.a
r.toString
return r}}
A.oR.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.w("Hash.add() called after close()."))
s.r=s.r+J.ao(b)
s.kr(b)},
kr(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.xy(B.d.gaJ(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.K(a),o=0;;j=0){n=j+p.gl(a)-o
if(n<h){B.d.ab(i,j,n,a,o)
k.e=n
return}B.d.ab(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.C(s)
s[m]=l;++m}while(m<q)
k.ws(s)}},
p(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.x(A.Y("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.xy(B.d.gaJ(q))
m=B.c.R(p,4294967296)
n.$flags&2&&A.C(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kr(q)
s=l.a
s.t(0,new A.bZ(l.od()))
s.p()},
od(){var s,r,q,p,o,n,m
if(B.as===$.C0())return J.CC(B.a2.gaJ(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.xy(B.d.gaJ(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.C(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.lZ.prototype={
bJ(a){var s=new Uint32Array(A.br(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.f9(new A.m_(s,r,a,q,new Uint32Array(16)))}}
A.vL.prototype={
ws(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
for(s=this.z,r=s.$flags|0,q=0;q<16;++q){p=a0[q]
r&2&&A.C(s)
s[q]=p}for(q=16;q<64;++q){p=s[q-2]
o=s[q-7]
n=s[q-15]
m=s[q-16]
r&2&&A.C(s)
s[q]=((((p>>>17|p<<15)^(p>>>19|p<<13)^p>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}r=this.y
l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.bT[q]+s[q]>>>0)>>>0)>>>0
b=i+c>>>0
a=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((d&k^d&j^k&j)>>>0)>>>0)>>>0}r.$flags&2&&A.C(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.m_.prototype={}
A.kw.prototype={}
A.ja.prototype={$ixC:1}
A.jb.prototype={
hr(){if(this.w)throw A.b(A.w("Can't finalize a finalized Request."))
this.w=!0
return B.b1},
m(a){return this.a+" "+this.b.m(0)}}
A.jc.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:133}
A.jd.prototype={
$1(a){return B.a.gN(a.toLowerCase())},
$S:136}
A.mZ.prototype={
nO(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.O("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.O("Invalid content length "+A.r(s)+".",null))}}}
A.jh.prototype={
aV(a){return this.nm(a)},
nm(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$aV=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.za("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hr().wk(),$async$aV)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.m(0)
a8=!J.bW(k)?k:null
a9=t.N
f=A.E(a9,t.K)
e=b4.glR()
d=null
if(e!=null){d=e
J.bU(f,"content-length",d)}for(b0=b4.r,b0=new A.aI(b0,A.o(b0).i("aI<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.bU(f,c.a,c.b)}f=A.eo(f)
f.toString
A.b_(f)
b0=l.signal
s=8
return A.a(A.a_(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$aV)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.hH(a,null):null
if(a0==null&&a!=null){f=A.za("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.E(a9,a9)
b.headers.forEach(A.mq(new A.n1(a1)))
f=A.Fs(b4,b)
a4=b.status
a6=a1
a8=a0
A.l2(b.url)
a9=b.statusText
f=new A.kM(A.BR(f),a4,a8,a6)
f.nO(a4,a8,a6,!1,!0,a9,b4)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b3=o.pop()
a2=A.I(b3)
a3=A.a5(b3)
A.B2(a2,a3,b4)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.b.F(a5,l)
s=n.pop()
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aV,r)},
p(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q)s[q].abort()
this.b=!0}}
A.n1.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:140}
A.wu.prototype={
$1(a){return A.fB(this.a,this.b,a)},
$S:146}
A.wB.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.ao()}},
$S:0}
A.wC.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a_(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.I(k)
m=A.a5(k)
if(!o.a.b)A.B2(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.cT.prototype={
wk(){var s=new A.p($.t,t.jz),r=new A.ax(s,t.iq),q=new A.lq(new A.n3(r),new Uint8Array(1024))
this.a5(q.gtl(q),!0,q.gdz(),r.gtK())
return s}}
A.n3.prototype={
$1(a){return this.a.au(new Uint8Array(A.br(a)))},
$S:22}
A.dB.prototype={
m(a){var s=this.b.m(0)
return"ClientException: "+this.a+", uri="+s},
$iL:1}
A.k9.prototype={
gl(a){return this.b}}
A.q5.prototype={
glR(){var s,r,q,p=this,o={},n=o.a=0
p.x.ad(0,new A.q6(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.B)(s),++n){q=s[n]
o.a=o.a+(74+B.i.v(p.kY(q)).length+q.b+2)}return o.a+2+70+4},
hr(){var s=this,r=s.o9()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kj()
return new A.cT(s.b8(r))},
b8(a){return this.oN(a)},
oN(a){var $async$b8=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.i.v(f+"\r\n")
d=B.i.v(f+"--\r\n")
f=m.x,f=new A.aI(f,A.o(f).i("aI<1,2>")).gu(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bC(A.di(e),$async$b8,r)
case 5:k=l.b
j=$.xx()
l=A.A(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.A(l,'"',"%22")+'"'
l=$.yW()
s=6
q=[1]
return A.bC(A.di(B.i.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$b8,r)
case 6:s=7
q=[1]
return A.bC(A.di(B.i.v(k)),$async$b8,r)
case 7:s=8
q=[1]
return A.bC(A.di(B.aE),$async$b8,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bC(A.di(e),$async$b8,r)
case 12:s=13
q=[1]
return A.bC(A.di(B.i.v(m.kY(g))),$async$b8,r)
case 13:if(g.f)A.x(A.w("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bC(A.EQ(g.e),$async$b8,r)
case 14:s=15
q=[1]
return A.bC(A.di(B.aE),$async$b8,r)
case 15:case 10:f.length===l||(0,A.B)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bC(A.di(d),$async$b8,r)
case 16:case 1:return A.bC(null,0,r)
case 2:return A.bC(o.at(-1),1,r)}})
var s=0,r=A.AX($async$b8,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Bb(r)},
qA(a,b){var s,r=$.xx()
r=A.A(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.A(r,'"',"%22")+'"'
r=$.yW()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
kY(a){var s=a.d.m(0),r=$.xx(),q=A.A(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.A(q,'"',"%22")+'"'
s=A.A(a.c,r,"%0D%0A")
p=p+'; filename="'+A.A(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
o9(){var s,r=J.zs(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.c6[$.C2().cp(66)]
return"dart-http-boundary-"+A.db(r,0,null)}}
A.q6.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.i.v(this.b.qA(a,b)).length+B.i.v(b).length+2)},
$S:30}
A.rg.prototype={
glR(){return this.y.length},
gjp(){var s,r
if(this.gc7()==null||!this.gc7().c.a.H("charset"))return B.k
s=this.gc7().c.a.h(0,"charset")
s.toString
r=A.D8(s)
return r==null?A.x(A.a2('Unsupported encoding "'+s+'".',null,null)):r},
hr(){this.kj()
return new A.cT(A.y9(this.y,t.L))},
gc7(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.DD(s)},
sc7(a){this.r.j(0,"content-type",a.m(0))},
og(){if(!this.w)return
throw A.b(A.w("Can't modify a finalized Request."))}}
A.hU.prototype={}
A.kM.prototype={}
A.fS.prototype={}
A.eF.prototype={
m(a){var s=new A.ab(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.ad(0,new A.pR(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.pP.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.rD(null,j),h=$.CA()
i.i8(h)
s=$.Cz()
i.ex(s)
r=i.gjB().h(0,0)
r.toString
i.ex("/")
i.ex(s)
q=i.gjB().h(0,0)
q.toString
i.i8(h)
p=t.N
o=A.E(p,p)
for(;;){p=i.d=B.a.dL(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gI():n
if(!m)break
p=i.d=h.dL(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gI()
i.ex(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.ex("=")
n=i.d=s.dL(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gI()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.H9(i)
n=i.d=h.dL(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gI()
o.j(0,p,k)}i.uF()
return A.xX(r,q,o)},
$S:150}
A.pR.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Cx()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.BO(b,$.Cm(),new A.pQ(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:30}
A.pQ.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:54}
A.x0.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:54}
A.xt.prototype={
$1(a){return a.a===this.a},
$S:80}
A.xu.prototype={
$2(a,b){return B.a.T(a.a,b.a)},
$S:67}
A.kn.prototype={
a7(){return"PlatformProfile."+this.b}}
A.kI.prototype={
aq(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.rq.prototype={
$1(a){return J.cc(a.gbh())},
$S:40}
A.rr.prototype={
$1(a){return B.a.D(a,"ENABLE_FTS5")},
$S:12}
A.fT.prototype={
a7(){return"ChangeOrigin."+this.b}}
A.cU.prototype={
a7(){return"ChangeAction."+this.b}}
A.aO.prototype={
aq(){var s,r=this,q=A.E(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"id",r.b)
q.j(0,"origin",r.c.b)
q.j(0,"action",r.d.b)
s=r.e
if(s!=null)q.j(0,"oldRecord",s)
s=r.f
if(s!=null)q.j(0,"newRecord",s)
s=r.r
s=A.P(s,A.o(s).c)
B.b.aW(s)
q.j(0,"changedFields",s)
return q},
X(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aO))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.n.ag(b.e,s.e)&&B.n.ag(b.f,s.f)&&B.n.ag(b.r,s.r)},
gN(a){var s=this
return A.d6(s.a,s.b,s.c,s.d,B.n.ap(s.e),B.n.ap(s.f),B.n.ap(s.r))},
m(a){var s=this
return"RecordChangeEvent("+s.c.m(0)+" "+s.d.m(0)+" "+s.a+"/"+s.b+" changed: "+s.r.m(0)+")"}}
A.a0.prototype={}
A.na.prototype={
uv(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
uw(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.nb.prototype={}
A.nc.prototype={}
A.mL.prototype={
ux(a){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.c,r=0;r<12;++r)m[r]=s.cp(256)
q=A.Eq(this.b,m,new Uint8Array(A.br(a)))
p=q.a
s=12+p.length
o=s+16
n=new Uint8Array(o)
B.d.af(n,0,12,m)
B.d.af(n,12,s,p)
B.d.af(n,s,o,q.b)
return n}}
A.tT.prototype={
ev(b0,b1){var s,r,q,p,o,n,m,l,k=b0[0],j=b0[1],i=b0[2],h=b0[3],g=b0[4],f=b0[5],e=b0[6],d=b0[7],c=b0[8],b=b0[9],a=b0[10],a0=b0[11],a1=b0[12],a2=b0[13],a3=b0[14],a4=b0[15],a5=this.a,a6=((k<<24|j<<16|i<<8|h)^a5[0])>>>0,a7=((g<<24|f<<16|e<<8|d)^a5[1])>>>0,a8=((c<<24|b<<16|a<<8|a0)^a5[2])>>>0,a9=((a1<<24|a2<<16|a3<<8|a4)^a5[3])>>>0
for(s=4,r=1;r<14;++r,a9=i,a8=j,a7=k,a6=p){q=s+1
p=(A.tU(a6)^A.tV(a7)^A.tW(a8)^A.tX(a9)^a5[s])>>>0
s=q+1
k=(A.tU(a7)^A.tV(a8)^A.tW(a9)^A.tX(a6)^a5[q])>>>0
q=s+1
j=(A.tU(a8)^A.tV(a9)^A.tW(a6)^A.tX(a7)^a5[s])>>>0
s=q+1
i=(A.tU(a9)^A.tV(a6)^A.tW(a7)^A.tX(a8)^a5[q])>>>0}q=s+1
o=(B.j[a6>>>24&255]<<24|B.j[a7>>>16&255]<<16|B.j[a8>>>8&255]<<8|B.j[a9&255])^a5[s]
s=q+1
n=(B.j[a7>>>24&255]<<24|B.j[a8>>>16&255]<<16|B.j[a9>>>8&255]<<8|B.j[a6&255])^a5[q]
m=(B.j[a8>>>24&255]<<24|B.j[a9>>>16&255]<<16|B.j[a6>>>8&255]<<8|B.j[a7&255])^a5[s]
l=(B.j[a9>>>24&255]<<24|B.j[a6>>>16&255]<<16|B.j[a7>>>8&255]<<8|B.j[a8&255])^a5[s+1]
b1.$flags&2&&A.C(b1)
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
qH(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.$flags|0,q=0;q<8;++q){p=4*q
o=a[p]
n=a[p+1]
m=a[p+2]
p=a[p+3]
r&2&&A.C(s)
s[q]=(o<<24|n<<16|m<<8|p)>>>0}for(q=8;q<60;++q){l=s[q-1]
p=B.c.aG(q,8)
if(p===0)l=A.A1((l<<8|l>>>24)>>>0)^B.bQ[B.c.R(q,8)-1]
else if(p===4)l=A.A1(l)
p=s[q-8]
r&2&&A.C(s)
s[q]=(p^l)>>>0}}}
A.cy.prototype={
a7(){return"KindViolation."+this.b}}
A.wK.prototype={
$2(a,b){return B.a.T(a.a,b.a)},
$S:92}
A.x_.prototype={
$1(a){return a.h(0,"detail")},
$S:40}
A.jo.prototype={
a7(){return"ConflictAlgorithm."+this.b}}
A.jy.prototype={
p(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aM(o,o.r,o.e,A.o(o).i("aM<2>"));n.k();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.aj(0)
p.b.p()
case 1:return A.e(q,r)}})
return A.f($async$p,r)},
ka(a){var s,r=this.a,q=r.F(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.F(0,new A.Z(r,A.o(r).i("Z<1>")).gC(0))
if(s!=null)s.p()}q=this.b.vP(a)
r.j(0,a,q)
return q},
nl(a,b){var s=this.ka(a).kb(new A.dM(b)),r=A.o(s).i("a7<D.E,G<k,j?>>")
r=A.P(new A.a7(s,new A.ot(),r),r.i("S.E"))
return r},
ew(a,b){this.ka(a).jr(new A.dM(b))},
jq(a){return this.ew(a,B.w)},
aw(a,b){return this.uD(a,b)},
J(a){return this.aw(a,B.w)},
uD(a,b){var s=0,r=A.h(t.H),q=this
var $async$aw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.ew(a,b)
return A.e(null,r)}})
return A.f($async$aw,r)},
ae(a,b){return this.w_(a,b)},
aR(a){return this.ae(a,B.w)},
w_(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ae=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.nl(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ae,r)},
bZ(a,b,c,d,e,f){return this.vX(a,b,c,d,e,f)},
aM(a,b,c,d){return this.bZ(a,null,b,null,c,d)},
mm(a,b,c,d){return this.bZ(a,b,null,null,c,d)},
dO(a,b,c){return this.bZ(a,null,null,null,b,c)},
vV(a,b,c,d){return this.bZ(a,null,null,b,c,d)},
eQ(a,b,c,d,e){return this.bZ(a,b,c,null,d,e)},
vW(a,b,c,d,e){return this.bZ(a,null,b,c,d,e)},
vX(a,b,c,d,e,f){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bZ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.L(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(e.length!==0)n+=" WHERE "+e
if(d!=null&&d.length!==0)n+=" ORDER BY "+d
if(c!=null)n+=" LIMIT "+A.r(c)
o=f==null?B.w:f
q=p.ae(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bZ,r)},
bV(a,b,c,d){return this.vj(0,b,c,d)},
az(a,b,c){return this.bV(0,b,c,null)},
vj(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$bV=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.O("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.o(c)
n=o.i("Z<1>")
m=t.N
l=A.dQ(new A.Z(c,n),new A.os(),n.i("n.E"),m).L(0,", ")
k=B.b.L(A.aF(c.a,"?",!1,m),", ")
j=A.zf(d)
o=o.i("aT<2>")
o=A.P(new A.aT(c,o),o.i("n.E"))
p.ew("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ai(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
G(a,b,c,d){return this.wr(a,b,c,d)},
wr(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$G=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.o(b)
n=o.i("Z<1>")
m=A.dQ(new A.Z(b,n),new A.ou(),n.i("n.E"),t.N).L(0,", ")
n="UPDATE"+A.zf(null)+' "'+a+'" SET '+m
o=A.P(new A.aT(b,o.i("aT<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.E(o,d)}p.ew(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$G,r)},
a2(a,b,c){return this.tS(a,b,c)},
tS(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$a2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.E(n,c)}p.ew(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$a2,r)},
V(a,b){return this.wn(a,b,b)},
wn(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$V=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jq("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$V)
case 7:m=e
n.jq("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jq("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$V,r)},
$ixE:1}
A.ot.prototype={
$1(a){return A.bb(a,t.N,t.X)},
$S:170}
A.os.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.ou.prototype={
$1(a){return'"'+a+'" = ?'},
$S:7}
A.no.prototype={}
A.jv.prototype={
lQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f='Encrypted field "',e=A.l([],t.s),d=A.aU(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.B)(s),++n){m=s[n]
l=m.a
if(B.cr.D(0,l))throw A.b(A.cl('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!d.t(0,l))throw A.b(A.cl('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.cl(f+l+'" cannot be unique.'))
if(B.b.cJ(o,new A.or(m)))throw A.b(A.cl(f+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.D(k,l)}else k=!1
if(k)throw A.b(A.cl(f+l+'" cannot be included in FTS.'))}}for(j=0;j<o.length;j=i)for(i=j+1,r=i,h=0;h<o.length;++h){if(j===h)continue
if(B.bN.ag(o[j].a,o[h].a)){if(j<h){l=o[j].a
e.push("Duplicate index columns "+l.m(l)+" (declarations "+r+" and "+(h+1)+").")}}else if(A.D6(o[h].a,o[j].a)&&!o[h].b){l=o[h].a
l=l.m(l)
k=o[j].a
e.push("Index "+l+" is prefix-subsumed by index "+k.m(k)+".")}}if(p){if(!g.a.d)throw A.b(new A.h9("FTS5 is not available on this SQLite engine."))
for(r=q.a,q=r.$ti,r=new A.a9(r,r.gl(0),q.i("a9<D.E>")),q=q.i("D.E");r.k();){p=r.d
if(p==null)p=q.a(p)
if(!d.D(0,p))throw A.b(A.cl('FTS field "'+p+'" is not a declared field.'))}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.C){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.cl('Enum field "'+m.a+'" must declare values.'))
if(q===B.D){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.cl('Ref field "'+m.a+'" must declare its target store.'))}return new A.no(g.oc(a),g.ob(a),g.oa(a),e)},
oc(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.A(n,'"',i)+'"')+" "+o.gkf()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.C&&q){k=o.f
k.toString
j=new A.a7(k,new A.oq(),A.a8(k).i("a7<1,k>")).L(0,", ")
m+=" CHECK ("+('"'+A.A(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.D&&o.w){n=o.r
n.toString
n=A.A(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.A("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.A(a.a,'"',i)
r=B.b.L(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
ob(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.B)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("a7<D.E,k>")
j=A.P(new A.a7(l,A.H4(),k),k.i("S.E"))
if(!l.D(l,"id"))j.push('"'+A.A("id",e,d)+'"')
i=m.c===B.aD?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.L(l,"_")
l=A.A(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.A(q,e,d)+'"')+" ("+B.b.L(j,", ")+") WHERE "+i+";")}else{l=l.L(l,"_")
l=A.A(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.A(q,e,d)+'"')+" ("+B.b.L(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.B)(r),++n){h=r[n]
if(h.b!==B.D)continue
if(B.b.cJ(s,new A.op(h)))continue
k=h.a
g=A.A(p+k,e,d)
f=A.A(q,e,d)
k=A.A(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.A("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.B)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.A(o+s,e,d)
l=A.A(q,e,d)
g=A.A(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.A(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
oa(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=", ",f='"',e='""',d=" BEGIN\n  INSERT INTO ",c=") VALUES (new.rowid, ",b=") VALUES ('delete', old.rowid, ",a=a0.w
if(a==null)return B.o
s=A.l([],t.s)
r=a0.a
q=r+"_fts"
p=a.a
o=p.$ti.i("a7<D.E,k>")
n=new A.a7(p,new A.om(),o).L(0,g)
m=new A.a7(p,new A.on(),o).L(0,g)
s.push("CREATE VIRTUAL TABLE "+('"'+A.A(q,f,e)+'"')+" USING fts5(\n  "+p.L(p,g)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n);")
l=A.A(r+"_ai",f,e)
k=A.A(r,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER INSERT ON "+('"'+k+'"')+d+('"'+A.A(q,f,e)+'"')+"(rowid, "+p.L(p,g)+c+n+");\nEND;")
l=A.A(r+"_ad",f,e)
k=A.A(r,f,e)
j=A.A(q,f,e)
s.push("CREATE TRIGGER "+('"'+l+'"')+" AFTER DELETE ON "+('"'+k+'"')+d+('"'+j+'"')+"("+('"'+A.A(q,f,e)+'"')+", rowid, "+p.L(p,g)+b+m+");\nEND;")
i=new A.a7(p,new A.oo(),o).L(0," OR ")
o=A.A(r+"_au",f,e)
l=A.A(r,f,e)
k=A.A(q,f,e)
j=A.A(q,f,e)
h=p.L(p,g)
s.push("CREATE TRIGGER "+('"'+o+'"')+" AFTER UPDATE ON "+('"'+l+'"')+" WHEN "+i+d+('"'+k+'"')+"("+('"'+j+'"')+", rowid, "+h+b+m+");\n  INSERT INTO "+('"'+A.A(q,f,e)+'"')+"(rowid, "+p.L(p,g)+c+n+");\nEND;")
return s}}
A.or.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:45}
A.oq.prototype={
$1(a){return"'"+A.A(a,"'","''")+"'"},
$S:7}
A.op.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:45}
A.om.prototype={
$1(a){return"new."+('"'+A.A(a,'"','""')+'"')},
$S:7}
A.on.prototype={
$1(a){return"old."+('"'+A.A(a,'"','""')+'"')},
$S:7}
A.oo.prototype={
$1(a){var s=A.A(a,'"','""')
return"new."+('"'+s+'"')+" IS NOT old."+('"'+A.A(a,'"','""')+'"')},
$S:7}
A.hm.prototype={
m(a){return A.iU(this).m(0)+": "+this.a},
$iL:1}
A.hY.prototype={}
A.hW.prototype={}
A.hz.prototype={}
A.fV.prototype={}
A.hF.prototype={}
A.h7.prototype={}
A.cH.prototype={}
A.hM.prototype={}
A.hO.prototype={}
A.eP.prototype={}
A.h9.prototype={}
A.fX.prototype={}
A.ev.prototype={}
A.rf.prototype={}
A.jz.prototype={
a7(){return"DurabilityClass."+this.b}}
A.kK.prototype={}
A.qJ.prototype={
bG(a){var s,r=this.a
if(!r.H(a))return null
s=r.F(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.mp(s)
r.toString
t.G.a(r)}return r},
kc(a,b){var s,r=this.a
if(r.a>=256)r.F(0,new A.Z(r,A.o(r).i("Z<1>")).gC(0))
if(b==null)s=null
else{s=A.mp(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vk(a){var s,r,q,p=a.a
if(p===0){this.a.aj(0)
return}s=this.a
if(p>=s.a){s.aj(0)
return}for(p=A.fj(a,a.r,A.o(a).c),r=p.$ti.c;p.k();){q=p.d
s.F(0,q==null?r.a(q):q)}}}
A.k0.prototype={
bf(a){return this.w7(a)},
w7(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$bf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=new A.jv(q.c).lQ(a)
m=q.b
l=a.a
s=2
return A.a(m.aM("lp_stores",1,"store = ?",[l]),$async$bf)
case 2:k=c
j=J.K(k)
s=j.gB(k)?3:5
break
case 3:s=6
return A.a(m.J(n.b),$async$bf)
case 6:j=n.c,p=j.length,o=0
case 7:if(!(o<j.length)){s=9
break}s=10
return A.a(m.J(j[o]),$async$bf)
case 10:case 8:j.length===p||(0,A.B)(j),++o
s=7
break
case 9:j=n.d,p=j.length,o=0
case 11:if(!(o<j.length)){s=13
break}s=14
return A.a(m.J(j[o]),$async$bf)
case 14:case 12:j.length===p||(0,A.B)(j),++o
s=11
break
case 13:j=a.b
s=15
return A.a(m.az(0,"lp_stores",A.m(["store",l,"table_name",l,"schema_ver",j,"definition_json",B.e.a4(a.aq(),null),"created_at",q.Q.$0()],t.N,t.X)),$async$bf)
case 15:s=16
return A.a(A.hs(m,0,0,"create:"+l,j),$async$bf)
case 16:s=4
break
case 5:j=J.R(j.gC(k),"schema_ver")
j.toString
A.ai(j)
p=a.b
if(j>p)throw A.b(new A.hO('Store "'+l+'" on disk is schema v'+j+", but this package supports v"+p+"."))
s=j<p?17:18
break
case 17:s=19
return A.a(A.eG(q,a,j),$async$bf)
case 19:case 18:s=20
return A.a(m.G("lp_stores",A.m(["definition_json",B.e.a4(a.aq(),null),"schema_ver",p],t.N,t.X),"store = ?",[l]),$async$bf)
case 20:case 4:q.ch.j(0,l,new A.kK(a,new A.qJ(A.E(t.N,t.b))))
return A.e(null,r)}})
return A.f($async$bf,r)},
hd(a){return this.tz(a)},
tz(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hd)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)},
hk(a){return this.tU(a)},
tU(a){var s=0,r=A.h(t.H),q=this,p
var $async$hk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hk)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hk,r)},
aa(a){var s=this.ch.h(0,a)
if(s==null)throw A.b(A.w('No store "'+a+'" registered in this LocalPocket.'))
return s},
dU(a,b,c){var s,r
if(A.kV(this)!=null)A.x(A.w(u.L))
s=this.dx
if(s!=null&&s.b===b&&!s.d){r=new A.p($.t,t._)
s.c.push(new A.fa(a,new A.ax(r,t.jk)))
return r.aK(new A.pL(c),c)}return this.rW(a,b,c)},
V(a,b){return this.dU(a,B.B,b)},
rW(a,b,c){var s,r,q,p=this
if(p.db.a>0){s=p.dx
if(s!=null)s.m5()}s=A.l([],t.i4)
r=new A.lt(p,b,s)
p.dx=r
r.wc()
q=new A.p($.t,t._)
s.push(new A.fa(a,new A.ax(q,t.jk)))
return q.aK(new A.pH(c),c)},
mz(a){++this.e.e
return this.b.aw(a,B.w)},
mA(a,b){++this.e.f
return this.b.ae(a,b)},
dv(a){return this.tu(a)},
tt(){return this.dv(null)},
tu(a){var s=0,r=A.h(t.H),q=this,p
var $async$dv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a==null?2:4
break
case 2:s=5
return A.a(p.J("ANALYZE"),$async$dv)
case 5:s=3
break
case 4:s=6
return A.a(p.J("ANALYZE "+('"'+A.A(a,'"','""')+'"')),$async$dv)
case 6:case 3:return A.e(null,r)}})
return A.f($async$dv,r)},
f_(){var s=0,r=A.h(t.H),q=this
var $async$f_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.J("PRAGMA wal_checkpoint(TRUNCATE)"),$async$f_)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f_,r)},
hY(){var s=0,r=A.h(t.H),q=this
var $async$hY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.c.c?2:3
break
case 2:s=4
return A.a(q.b.J("PRAGMA wal_checkpoint(PASSIVE)"),$async$hY)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hY,r)},
eZ(a){return this.wy(a)},
wy(a){var s=0,r=A.h(t.H),q=this,p
var $async$eZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.b
s=a!=null?2:4
break
case 2:s=5
return A.a(p.J("PRAGMA incremental_vacuum("+A.r(a)+")"),$async$eZ)
case 5:s=3
break
case 4:s=6
return A.a(p.J("VACUUM"),$async$eZ)
case 6:case 3:return A.e(null,r)}})
return A.f($async$eZ,r)},
eM(a){return this.vR(a)},
vQ(){return this.eM(1e4)},
vR(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$eM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.V(new A.pK(o),t.P),$async$eM)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eM,r)},
cY(a){return this.wi(a)},
wi(a){var s=0,r=A.h(t.H),q=this,p
var $async$cY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.ch,p=new A.bK(p,p.r,p.e,A.o(p).i("bK<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.tI(p.d,a),$async$cY)
case 4:s=2
break
case 3:s=5
return A.a(q.vQ(),$async$cY)
case 5:s=6
return A.a(q.f_(),$async$cY)
case 6:s=7
return A.a(q.tt(),$async$cY)
case 7:return A.e(null,r)}})
return A.f($async$cY,r)},
dA(a,b,c){return this.tJ(a,b,c)},
tI(a,b){return this.dA(a,null,b)},
tJ(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i
var $async$dA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:k={}
j=b==null?p.Q.$0():b
i=j-B.c.R(c.a,1000)
k.a=0
o=p.aa(a).a
n=t.P,m=p.b
case 3:s=5
return A.a(m.ae("SELECT b.id FROM "+('"'+A.A(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",i,250]),$async$dA)
case 5:l=e
if(J.bW(l)){s=4
break}s=6
return A.a(p.V(new A.pJ(k,p,l,a,i,o),n),$async$dA)
case 6:s=3
break
case 4:q=k.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dA,r)},
qR(){if(++this.dy<64)return
this.dy=0
A.co(B.x,new A.pG(this))},
p(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$p=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.CW){s=1
break}n.CW=!0
m=n.a$
m.a.p()
m.b.p()
p=4
s=7
return A.a(n.b.J("PRAGMA optimize"),$async$p)
case 7:p=2
s=6
break
case 4:p=3
k=o.pop()
s=6
break
case 3:s=2
break
case 6:s=8
return A.a(n.b.p(),$async$p)
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$p,r)}}
A.pL.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.pH.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.pK.prototype={
$1(a){return this.mR(a)},
mR(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.aR("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.M(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.J(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.a2("lp_outbox","store = ? AND record_id = ?",[m,A.J(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pJ.prototype={
$1(a){return this.mQ(a)},
mQ(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.M(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.e,j=q.e,i=q.f,h=q.b,g=h.y,h=h.z
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.J(f)
a1=J
s=4
return A.a(a0.ae("SELECT b.id FROM "+('"'+A.A(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.bW(a4)){s=2
break}s=5
return A.a(a0.ae("SELECT * FROM "+('"'+A.A(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.K(e)
c=d.gW(e)?A.ca(i,d.gC(e),g,h):null
s=6
return A.a(A.cb(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.a2(n,"id = ?",[f]),$async$$1)
case 7:d=A.ag([f],m)
l.push(new A.a0(n,d))
k.r+=d.a
if(c!=null){d=A.o(c).i("Z<1>")
b=d.i("bj<n.E>")
a=A.ps(b.i("n.E"))
a.E(0,new A.bj(new A.Z(c,d),new A.pI(),b))
a2.bl(new A.aO(n,f,B.V,B.ax,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pI.prototype={
$1(a){return a!=="id"},
$S:12}
A.pG.prototype={
$0(){this.a.hY().jd(new A.pF())},
$S:0}
A.pF.prototype={
$1(a){},
$S:25}
A.lt.prototype={
wc(){var s,r,q,p=this,o=new A.ax(new A.p($.t,t.D),t.h)
p.e=o
s=p.a
r=s.d
r===$&&A.v()
r.aT(new A.uC(p,o),t.H)
q=s.db
s=p.guO()
if(q.a>0)A.co(q,s)
else A.co(B.x,s)},
m5(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.dx===r)s.dx=null
s=r.e
if(s!=null)s.ao()},
cl(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$cl=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.e;++b2.b
b2.c+=b1}b3=new A.kJ()
$.mE()
b3.av()
k=b3
b1=m.a
j=m.b===B.bn&&b1.a!==":memory:"
s=j&&b1.cx!=="FULL"?3:4
break
case 3:s=5
return A.a(b1.mz("PRAGMA synchronous=FULL"),$async$cl)
case 5:b1.cx="FULL"
case 4:i=A.l([],t.aL)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b1.b.V(new A.uB(m,i,h,l,g),t.P),$async$cl)
case 10:for(b2=g,b4=b2.length,b5=0;b5<b2.length;b2.length===b4||(0,A.B)(b2),++b5){f=b2[b5]
e=null
d=null
c=null
b=null
a=f
e=a.a[0]
d=a.a[1]
c=a.a[2]
b=a.a[3]
if(c!=null){b6=e.b
b7=c
b8=b
if((b6.a.a&30)!==0)A.x(A.w("Future already completed"))
b6.ai(A.ek(b7,b8))}else{b6=e.b
b7=d
b6=b6.a
if((b6.a&30)!==0)A.x(A.w("Future already completed"))
b6.aY(b7)}}for(f=i,b2=f.length,b4=b1.a$,b6=b1.ch,b5=0;b5<f.length;f.length===b2||(0,A.B)(f),++b5){a0=f[b5]
b7=b6.h(0,a0.a)
if(b7!=null)b7.d.vk(a0.b)
b4.uv(a0)}for(f=h,b2=f.length,b5=0;b5<f.length;f.length===b2||(0,A.B)(f),++b5){a1=f[b5]
b4.uw(a1)}n.push(9)
s=8
break
case 7:p=6
c0=o.pop()
a2=A.I(c0)
a3=A.a5(c0)
for(f=g,b2=f.length,b5=0;b5<f.length;f.length===b2||(0,A.B)(f),++b5){a4=f[b5]
a5=null
a6=null
a7=null
a8=a4
a5=a8.a[0]
a6=a8.a[2]
a7=a8.a[3]
if((a5.b.a.a&30)!==0)continue
if(a6!=null&&a2===a6){b4=a5.b
b6=a6
b7=a7
if((b4.a.a&30)!==0)A.x(A.w("Future already completed"))
b4.ai(A.ek(b6,b7))}else{b4=a5.b
if((b4.a.a&30)!==0)A.x(A.w("Future already completed"))
b4.ai(A.ek(a2,a3))}}throw c0
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.cx!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b1.mz("PRAGMA synchronous=NORMAL"),$async$cl)
case 17:b1.cx="NORMAL"
p=2
s=16
break
case 14:p=13
c1=o.pop()
s=16
break
case 13:s=2
break
case 16:case 12:f=b1.e
a4=k.gut();++f.a
f.d+=a4
b1.qR()
for(f=b0.length,b5=0;b5<b0.length;b0.length===f||(0,A.B)(b0),++b5){a9=b0[b5]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.x(A.w("Future already completed"))
a4.ai(A.ek(new A.bf("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cl,r)}}
A.uC.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cl(),$async$$0)
case 7:q=1
s=6
break
case 4:q=3
m=p.pop()
s=6
break
case 3:s=1
break
case 6:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.uB.prototype={
$1(a){return this.na(a)},
na(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.zS(a.a,a3,o.b,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.xr(new A.uz(a,a0),null,A.m([$.mG(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.eh([B.b.gan(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.I(a1)
l=A.a5(a1)
o.e.push(new A.eh([B.b.gan(a.c),null,m,l]))
throw a1
s=8
break
case 5:s=1
break
case 8:s=3
break
case 4:a=a.c,g=a.length,e=o.e,d=t.g7,c=t.X,b=0
case 10:if(!(b<a.length)){s=12
break}k=a[b]
q=14
s=17
return A.a(A.xr(new A.uA(a0,k),null,A.m([$.mG(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.eh([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.I(a2)
h=A.a5(a2)
e.push(new A.eh([k,null,i,h]))
s=16
break
case 13:s=1
break
case 16:case 11:a.length===g||(0,A.B)(a),++b
s=10
break
case 12:case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:46}
A.uz.prototype={
$0(){return B.b.gan(this.a.c).a.$1(this.b)},
$S:47}
A.uA.prototype={
$0(){var s=this.a,r=s.f,q=r.b,p=r.a,o=""+p,n=q!=null?q+"_"+o:"lp_sp"+o
r.a=p+1
return s.cf(n,new A.uy(this.b),t.z)},
$S:47}
A.uy.prototype={
$1(a){return this.a.a.$1(a)},
$S:98}
A.fa.prototype={}
A.lM.prototype={}
A.q2.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:103}
A.q3.prototype={
$2(a,b){return B.c.T(a.a,b.a)},
$S:106}
A.q_.prototype={
$1(a){return a.h(0,"name")},
$S:40}
A.q1.prototype={
$1(a){return this.mS(a)},
mS(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.M(q.a),k=q.b,j=q.d
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.ca(k,p,null,null)
n=o
i=J.R(o,"id")
i.toString
A.J(i)
m=A.ds(k,J.u(J.R(n,"archived"),!0),null,null,i,n)
s=4
return A.a(a.az(0,j,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:46}
A.kl.prototype={
vZ(a){if(a>this.w)this.w=a}}
A.rc.prototype={}
A.bJ.prototype={
a7(){return"FieldKind."+this.b}}
A.aL.prototype={
gkf(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aa===s||B.C===s||B.J===s||B.K===s||B.D===s){r="TEXT"
break A}if(B.Z===s||B.y===s||B.a0===s){r="INTEGER"
break A}if(B.a_===s){r="REAL"
break A}throw A.b(new A.ks("None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details."))}return r},
aq(){var s,r=this,q=A.E(t.N,t.X)
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
A.ow.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.ez(B.bY,A.J(m))
m=n.h(0,"name")
m.toString
A.J(m)
r=J.u(n.h(0,"required"),!0)
q=J.u(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aL(m,B.aa,r,J.u(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aL(m,B.Z,r,!1,q,o,o,!1)
case 2:return new A.aL(m,B.a_,r,!1,q,o,o,!1)
case 3:return new A.aL(m,B.y,r,!1,!1,o,o,!1)
case 4:return new A.aL(m,B.a0,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aL(m,B.C,r,!1,!1,A.d2(J.et(t.j.a(n),p),p),o,!1)
case 6:return new A.aL(m,B.J,!1,!1,q,o,o,!1)
case 7:return new A.aL(m,B.K,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aL(m,B.D,!1,!1,!1,o,A.J(p),J.u(n.h(0,"enforceFk"),!0))}},
$S:130}
A.hc.prototype={
a7(){return"IndexScope."+this.b}}
A.cY.prototype={
aq(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.pd.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.et(t.j.a(q),t.N)
s=J.u(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.cY(q,s,A.ez(B.bU,A.J(r)))},
$S:132}
A.h8.prototype={
aq(){return A.m(["fields",this.a],t.N,t.X)}}
A.oH.prototype={
$0(){var s=this.a.h(0,"fields")
s.toString
return new A.h8(J.et(t.j.a(s),t.N))},
$S:134}
A.bM.prototype={
aq(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q)p.push(s[q].aq())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.rv.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ai(o)
s=J.u(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.M(p==null?B.aI:p)
q=t.G
while(p.k())r.push(A.zi(q.a(p.gn())))
return new A.bM(o,s,r)},
$S:141}
A.q4.prototype={
a7(){return"MissingRemotePolicy."+this.b}}
A.nA.prototype={}
A.bI.prototype={
gdB(){var s,r,q,p,o=this,n=$.BY()
A.xJ(o)
s=n.a.get(o)
if(s==null){s=A.aU(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.B)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
m2(a){var s,r,q,p,o,n=this,m=$.BZ()
A.xJ(n)
s=m.a.get(n)
if(s==null){s=A.E(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.B)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.R(m,a)},
aq(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.E(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.l([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.B)(q),++o)r.push(q[o].aq())
j.j(0,"fields",r)
r=A.l([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.B)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
r=m.w
if(r!=null)j.j(0,"fts",A.m(["fields",r.a],l,k))
l=A.l([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.B)(k),++o)l.push(k[o].aq())
j.j(0,"migrations",l)
return j}}
A.nf.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.J(j)
s=k.h(0,"version")
s.toString
A.ai(s)
r=A.l([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.M(p.a(q))
o=t.G
while(q.k())r.push(A.zi(o.a(q.gn())))
q=A.l([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.M(p.a(n))
while(n.k())q.push(A.Do(o.a(n.gn())))
p=J.u(k.h(0,"keepUnsyncedArchives"),!0)
n=J.u(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.Dg(o.a(m))}else m=null
l=A.l([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.M(k==null?B.aI:k)
while(k.k())l.push(A.E8(o.a(k.gn())))
return new A.bI(j,s,r,q,n,p,m,l,this.b.i("bI<0>"))},
$S(){return this.b.i("bI<0>()")}}
A.dS.prototype={
a7(){return"MutationAction."+this.b}}
A.dD.prototype={
gb7(){var s=this.c
return s==null?this.a.b:s},
gb2(){return this.b.a.a},
ir(){},
hQ(a){var s=this
if(s.d!=null)return s.qN(B.aL,a)
return s.a.dU(new A.nm(s,a),B.B,t.H)},
mj(a,b){var s=this
if(s.d!=null)return s.dk(a,b)
return s.a.dU(new A.nk(s,a,b),B.B,t.H)},
lJ(a){var s=this
if(s.d!=null)return s.l5(B.z,a)
return s.a.dU(new A.nj(s,a),B.B,t.H)},
mu(a){var s=this
if(s.d!=null)return s.l5(B.E,a)
return s.a.dU(new A.nn(s,a),B.B,t.H)},
jM(a){var s=this
if(s.d!=null)return s.dm(a)
return s.a.dU(new A.nl(s,a),B.B,t.H)},
dm(a){return this.rj(a)},
rj(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dm=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.ir()
s=2
return A.a(q.dr(a),$async$dm)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cb(n,m,a,!0),$async$dm)
case 3:s=4
return A.a(n.a2(m,"id = ?",[a]),$async$dm)
case 4:l=t.N
o.Y(new A.a0(m,A.ag([a],l)))
if(p!=null){l=A.eE(p.gP(),l)
l.F(0,"id")
o.bl(new A.aO(m,a,B.V,B.ax,p,null,l))}return A.e(null,r)}})
return A.f($async$dm,r)},
dk(a,b){return this.r7(a,b)},
r7(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$dk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.ir()
s=3
return A.a(p.gb7().ae("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$dk)
case 3:o=d
n=J.K(o)
if(n.gW(o)){m=n.gC(o)
l=A.kR(m)
k=m.h(0,"o_kind")!=null?A.qh(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.a5&&k!=null?4:5
break
case 4:s=6
return A.a(p.eb(a,b,l,k,!1),$async$dk)
case 6:s=1
break
case 5:s=7
return A.a(p.cD(a,b,!1,k,l),$async$dk)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
cD(a,b,c,d,e){return this.oJ(a,b,!1,d,e)},
oJ(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cD=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dr(a),$async$cD)
case 2:m=g
if(m==null)throw A.b(A.y4("No record "+q.gb2()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.eD(m,p,o)
n.E(0,b)
o=A.E(p,o)
o.j(0,"id",a)
o.E(0,n)
s=3
return A.a(q.b_(B.L,!1,m,a,d,e,o),$async$cD)
case 3:return A.e(null,r)}})
return A.f($async$cD,r)},
eb(a,b,c,d,e){return this.r8(a,b,c,d,!1)},
r8(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eb=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.e.aE(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.cD(a7,a8,!1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.u(i,a7)){q=n.cD(a7,a8,!1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.eD(a5,h,g)
f.E(0,a8)
m=f
J.bU(m,"id",a7)
e=new A.ab("")
f=n.b
d=f.a
c=A.Bj(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.eD(m,h,g)
b.F(0,"id")
n.lB(a7,b,a,c)
a0=n.kM(a5,m,B.L)
l=null
b=a0.length===1&&d.gdB().D(0,B.b.gan(a0))
a1=n.a
a2=a1.y
a3=a1.z
if(b){a4=d.m2(B.b.gan(a0))
b=a4.a
l=A.m([b,A.Bv(d,a4,J.R(m,b),a2,a3),"hidden",0],h,g)}else l=A.ds(d,J.u(J.R(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gb7().G(d.a,l,"id = ?",[a7]),$async$eb)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.I(a6)
h=A.BS(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.as
g===$&&A.v()
b=n.gb7()
a1=l
s=8
return A.a(g.bc(B.L,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$eb)
case 8:g=n.d
if(g!=null)g.Y(new A.a0(d.a,A.ag([a7],h)))
h=g==null
f=h?null:g.a.a$.b.d!=null
if(f===!0)if(!h)g.bl(new A.aO(d.a,a7,B.V,B.u,a5,m,A.pt(a0,A.a8(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eb,r)},
b_(a,b,c,d,e,f,g){return this.qO(a,!1,c,d,e,f,g)},
l5(a,b){var s=null
return this.b_(a,!1,s,b,s,s,s)},
qN(a,b){var s=null
return this.b_(a,!1,s,s,s,s,b)},
qO(b6,b7,b8,b9,c0,c1,c2){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$b_=A.c(function(c3,c4){if(c3===1){o.push(c4)
s=p}for(;;)switch(s){case 0:b4={}
n.ir()
m=null
b4.a=b8
l=null
b4.b=b4.c=null
i=new A.ni(b4,n,c1,c0)
s=b6===B.aL?3:5
break
case 3:h=A.ac(c2.h(0,"id"))
if(h==null)h=A.mz()
g=$.yX()
if(!g.b.test(h))throw A.b(A.bi('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$b_)
case 6:l=n.l1(c2,m)
b6=b4.a==null?B.cd:B.L
s=4
break
case 5:s=b6===B.L?7:9
break
case 7:b9.toString
m=b9
s=10
return A.a(i.$1(m),$async$b_)
case 10:if(b4.a==null)throw A.b(A.y4("No record "+n.gb2()+"/"+A.r(m)+" to update."))
c2.toString
l=n.l1(c2,m)
s=8
break
case 9:b9.toString
m=b9
s=11
return A.a(i.$1(m),$async$b_)
case 11:g=b4.a
if(g==null)throw A.b(A.y4("No record "+n.gb2()+"/"+A.r(m)+" to archive/restore."))
g=A.eD(g,t.N,t.X)
g.j(0,"archived",b6===B.z)
l=g
case 8:case 4:f=new A.ab("")
g=n.b
e=g.a
d=l
c=A.Bj(f,e,d,J.ao(m)!==0?m:null)
d=f.a
b=d.charCodeAt(0)==0?d:d
n.lB(m,l,b,c)
s=b4.a==null?12:14
break
case 12:a=null
s=13
break
case 14:d=c1==null?b4.c:c1
s=d==null?15:17
break
case 15:d=n.a.as
d===$&&A.v()
s=18
return A.a(d.bE(n.gb7(),e.a,m),$async$b_)
case 18:d=c4
a=d
s=16
break
case 17:a=d
case 16:case 13:s=b4.a==null?19:21
break
case 19:a0=null
s=20
break
case 21:d=c0==null?b4.b:c0
s=d==null?22:24
break
case 22:d=n.a.as
d===$&&A.v()
s=25
return A.a(d.dP(n.gb7(),e.a,m),$async$b_)
case 25:d=c4
a0=d
s=23
break
case 24:a0=d
case 23:case 20:d=a==null
a1=!d
if(a1&&a.w===B.Q)throw A.b(A.zd("Record "+n.gb2()+"/"+A.r(m)+u.W))
a2=b4.a
a3=a2!=null
if(a3)a4=!a1||a.w===B.t
else a4=!1
if(a3&&a4){a5=A.aj(A.b0(e,a2))
a1=A.aB(B.l.v(B.i.v(a5)).a)
a6=new A.n_(a5,a1,d?null:a.c)}else a6=null
d=m
a1=l
a2=n.a
a3=a2.y
a7=a2.z
a8=A.ds(e,J.u(J.R(l,"archived"),!0),a3,a7,d,a1)
a9=n.kM(b4.a,l,b6)
k=null
if(b4.a!=null&&a9.length===1&&e.gdB().D(0,B.b.gan(a9))){b0=e.m2(B.b.gan(a9))
d=b0.a
k=A.m([d,A.Bv(e,b0,J.R(l,d),a3,a7),"hidden",0],t.N,t.X)}else k=a8
p=27
d=e.a
s=b4.a==null?30:32
break
case 30:s=33
return A.a(n.gb7().az(0,d,k),$async$b_)
case 33:s=31
break
case 32:s=34
return A.a(n.gb7().G(d,k,"id = ?",[m]),$async$b_)
case 34:case 31:p=2
s=29
break
case 27:p=26
b5=o.pop()
j=A.I(b5)
g=A.BS(j,l)
throw A.b(g)
s=29
break
case 26:s=2
break
case 29:d=a2.as
d===$&&A.v()
a1=n.gb7()
a2=m
a3=b4.a
s=35
return A.a(d.bc(b6,a6,a9,a1,a2,l,a3,a0,b,a8,a,g),$async$b_)
case 35:switch(b6.a){case 1:case 0:b2=b4.a==null?B.aw:B.u
break
case 2:b2=B.u
break
case 3:b2=B.bj
break
case 4:b2=B.bk
break
default:b2=null}if(b6===B.z||b6===B.E)b3=A.ag(["archived"],t.N)
else if(b4.a==null){g=l
d=A.o(g).i("Z<1>")
a1=d.i("bj<n.E>")
b3=A.eE(new A.bj(new A.Z(g,d),new A.nh(),a1),a1.i("n.E"))}else b3=A.pt(a9,A.a8(a9).c)
g=n.d
d=g==null
a1=d?null:g.a.a$.b.d!=null
if(a1===!0)if(!d)g.bl(new A.aO(e.a,m,B.V,b2,b4.a,l,b3))
if(!d)g.Y(new A.a0(e.a,A.ag([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b_,r)},
l1(a,b){var s,r,q,p=A.E(t.N,t.X)
for(s=a.gbn(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.ml("archived",new A.ng())
return p},
kM(a,b,c){var s,r,q,p,o
if(a==null)return B.c3
s=t.N
r=A.aU(s)
s=A.eE(a.gP(),s)
s.E(0,new A.Z(b,A.o(b).i("Z<1>")))
for(s=A.fj(s,s.r,A.o(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.n.ag(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.P(r,r.$ti.c)
B.b.aW(o)
return o},
dr(a){return this.ru(a)},
ru(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dr=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gb7().ae('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dr)
case 3:m=c
l=J.K(m)
if(l.gB(m)){q=null
s=1
break}o=p.a
q=A.ca(n,l.gC(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
fY(a){return this.re(a)},
re(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$fY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gb7().ae('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$fY)
case 3:j=c
k=J.K(j)
if(k.gB(j)){q=B.cp
s=1
break}o=k.gC(j)
k=p.a
n=A.ca(l,o,k.y,k.z)
m=o.h(0,"s_sync_state")!=null?A.kR(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.eg(n,m,o.h(0,"o_kind")!=null?A.qh(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fY,r)},
bG(a){return this.ne(a)},
ne(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.d==null
if(g&&p.b.d.a.H(a)){q=p.b.d.bG(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
s=m>1?3:5
break
case 3:s=6
return A.a(p.gb7().ae("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bG)
case 6:s=4
break
case 5:s=7
return A.a(p.gb7().ae('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bG)
case 7:case 4:k=c
l=J.K(k)
if(l.gB(k)){if(g)o.d.kc(a,null)
q=null
s=1
break}j=l.gC(k)
l=p.a
i=A.ca(n,j,l.y,l.z)
h=A.aZ(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.Gz(n,i,h,m)
if(g)o.d.kc(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bG,r)},
lB(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.bi('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.Bx(p,n)
if(m!=null)throw A.b(A.bi(A.CY(p,m),o))}s=this.a.f
if(d>s)throw A.b(A.bi("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.nm.prototype={
$1(a){return a.cg(this.a.b.a.a).hQ(this.b)},
$S:6}
A.nk.prototype={
$1(a){return a.cg(this.a.b.a.a).mj(this.b,this.c)},
$S:6}
A.nj.prototype={
$1(a){return a.cg(this.a.b.a.a).lJ(this.b)},
$S:6}
A.nn.prototype={
$1(a){return a.cg(this.a.b.a.a).mu(this.b)},
$S:6}
A.nl.prototype={
$1(a){return a.cg(this.a.b.a.a).jM(this.b)},
$S:6}
A.ni.prototype={
mG(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.a
m=n.a
l=m==null
s=!l||p.c!=null||p.d!=null?3:4
break
case 3:k=n
s=l?5:7
break
case 5:s=8
return A.a(p.b.dr(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.fY(a),$async$$1)
case 9:o=c
m=o.a
n.a=m
n.c=o.b
n.b=o.c
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.mG(a)},
$S:166}
A.nh.prototype={
$1(a){return a!=="id"},
$S:12}
A.ng.prototype={
$0(){return!1},
$S:41}
A.ls.prototype={}
A.bo.prototype={
Y(a){this.c.push(a)
this.a.e.r+=a.b.a},
bl(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
cg(a){var s=this.a
return new A.dD(s,s.aa(a),this.b,this)},
cf(a,b,c){return this.tb(a,b,c,c)},
tb(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cf=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.J("SAVEPOINT "+a2),$async$cf)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.e
k=e.r
p=5
d=A.zS(f,a,h,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.xr(new A.rU(a3,j,a4),null,A.m([$.mG(),j],f,f),a4.i("y<0>")),$async$cf)
case 8:i=a7
s=9
return A.a(a.J("RELEASE "+a2),$async$cf)
case 9:q=i
s=1
break
p=2
s=7
break
case 5:p=4
a0=o.pop()
p=11
s=14
return A.a(a.J("ROLLBACK TO "+a2),$async$cf)
case 14:s=15
return A.a(a.J("RELEASE "+a2),$async$cf)
case 15:p=4
s=13
break
case 11:p=10
a1=o.pop()
s=13
break
case 10:s=4
break
case 13:a=h.length
if(a>m)B.b.mr(h,m,a)
a=g.length
if(a>l)B.b.mr(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cf,r)}}
A.rU.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.vK.prototype={}
A.hB.prototype={
ke(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.D(0,this.x))return!1
return!0},
bS(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$bS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.b.aM(n.a,1,"id = ?",[p.x]),$async$bS)
case 3:m=b
l=J.K(m)
if(l.gB(m)){q=null
s=1
break}q=A.ca(n,l.gC(m),o.y,o.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bS,r)},
jf(a){return a==null?"<null>":A.aB(B.l.v(B.i.v(A.aj(a))).a)},
mi(a){var s=this.y
return s==null?null:s.t(0,a)},
jG(a,b){var s=this.y
return s==null?null:s.by(a,b)},
nx(){var s=this.y=A.y8(this.gum(),new A.qa(this),null,!1,t.b)
return new A.b7(s,A.o(s).i("b7<1>"))},
hm(){this.nA()
var s=this.y
if(s!=null)s.p()}}
A.qa.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.av()
s=2
return A.a(p.el(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.bX.prototype={
jG(a,b){},
av(){var s=this.a.a$.a
this.c=new A.aY(s,A.o(s).i("aY<1>")).aQ(this.gqT())},
hD(){return this.vi(A.o(this).i("bX.T"))},
vi(a){var s=0,r=A.h(a),q,p=this,o
var $async$hD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bS(),$async$hD)
case 3:o=c
p.r=p.jf(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)},
qU(a){var s,r=this
if(!r.ke(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.A()
r.d=A.co(r.b,r.glC())},
el(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$el=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.e;++i.y
q=3
s=6
return A.a(n.bS(),$async$el)
case 6:m=b
l=n.jf(m)
if(!J.u(l,n.r)){n.r=l;++i.z
n.mi(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.I(g)
j=A.a5(g)
n.jG(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.A()
n.d=A.co(n.b,n.glC())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$el,r)},
hm(){var s=this.d
if(s!=null)s.A()
s=this.c
if(s!=null)s.A()}}
A.tP.prototype={
aT(a,b){var s,r=this;++r.b
r.l7()
s=new A.p($.t,b.i("p<0>"))
r.a=r.a.aK(new A.tQ(r,new A.ax(s,b.i("ax<0>")),a),t.H)
return s},
l7(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.tQ.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.au(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.I(i)
l=A.a5(i)
n.b.bm(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.l7()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:27}
A.n0.prototype={}
A.kL.prototype={}
A.xi.prototype={
$1(a){return B.b.E(this.a,a)},
$S:117}
A.h4.prototype={}
A.oy.prototype={
bi(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bi=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.br
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.at
a3===$&&A.v()
b5=J
s=3
return A.a(a3.es(25),$async$bi)
case 3:a4=b5.M(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.aM?10:12
break
case 10:s=13
return A.a(n.c8(i,b2),$async$bi)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.mh(i.b),$async$bi)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.aN?17:18
break
case 17:s=19
return A.a(n.ec(i),$async$bi)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.mh(i.b),$async$bi)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.I(b3)
j=!0
e=i.w+1
d=a5.lW(e)
a8=i.b
a9=J.aw(f)
b0=a6.$0()
s=23
return A.a(a3.vA(a8,a9,e,b0+B.c.R(d.a,1000)),$async$bi)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.ch,a4=new A.bK(a3,a3.r,a3.e,A.o(a3).i("bK<1>")),a2=a2.b
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.x(A.w('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.dO("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bi)
case 28:a5=b5.M(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.R(b,"ref_id")
a6.toString
a=A.J(a6)
a6=J.R(b,"record_id")
a6.toString
a0=A.J(a6)
a1=A.ac(J.R(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.cN(a0,a,a1,c),$async$bi)
case 37:++l
case 36:p=2
s=34
break
case 32:p=31
b4=o.pop()
j=!0
s=34
break
case 31:s=2
break
case 34:s=29
break
case 30:case 27:s=24
break
case 25:q=new A.h4(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bi,r)},
c8(a,b){return this.ri(a,b)},
ri(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$c8=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.e.aE(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.J(a1)
l=a0.h(0,"hash")
l.toString
A.J(l)
k=A.ac(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.ck(l),$async$c8)
case 3:if(!a6)throw A.b(A.w("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.c1(l),$async$c8)
case 4:j=a6
if(j==null)throw A.b(A.w("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.z
i===$&&A.v()
s=9
return A.a(i.bH(a3.d),$async$c8)
case 9:m=a6
p=2
s=8
break
case 6:p=5
a2=o.pop()
s=8
break
case 5:s=2
break
case 8:g=null
if(m!=null){f=B.a.q(l,0,B.c.cK(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.O(b,f)||B.a.O(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.ww(a3.d,A.m([k,new A.eV(k,j,new A.oA(a4,l))],t.N,t.h3)),$async$c8)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga1(l):k
case 11:s=14
return A.a(n.a.V(new A.oB(a,a1,a3),t.P),$async$c8)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c8,r)},
ec(a){return this.rh(a)},
rh(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$ec=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.e.aE(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.J(l)
o=A.ac(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.J(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.wu(a.d,A.l([o],t.s)),$async$ec)
case 5:case 4:s=6
return A.a(p.a.V(new A.oz(l,n,a),t.P),$async$ec)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ec,r)},
cN(a,b,c,d){return this.uo(a,b,c,d)},
uo(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$cN=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.z
l===$&&A.v()
k=m
s=4
return A.a(l.hn(c,a,null),$async$cN)
case 4:s=3
return A.a(k.hQ(f),$async$cN)
case 3:o=f
s=5
return A.a(m.c1(o),$async$cN)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.V(new A.oC(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$cN)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cN,r)},
cT(a,b,c,d){return this.vF(a,b,c,d)},
vF(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$cT=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.dO("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$cT)
case 2:k=f
j=A.pt(c,A.a8(c).c)
i=J.ay(k)
h=t.x
g=A.eE(new A.bp(i.co(k,new A.oD(),t.v),h),h.i("n.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.D(0,n)?6:7
break
case 6:s=8
return A.a(a.bV(0,"lp_file_refs",A.m(["ref_id",A.mz(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bm),$async$cT)
case 8:case 7:case 4:c.length===h||(0,A.B)(c),++o
s=3
break
case 5:i=i.gu(k)
case 9:if(!i.k()){s=10
break}h=i.gn()
m=A.ac(h.h(0,"remote_name"))
if(m==null){s=9
break}if(j.D(0,m)){s=9
break}q=h.h(0,"state")
q.toString
A.J(q)
if(q==="pending_remove"||q==="pending_upload"){s=9
break}q=h.h(0,"ref_id")
q.toString
s=11
return A.a(a.a2("lp_file_refs","ref_id = ?",[q]),$async$cT)
case 11:l=A.ac(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.O(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aw(u.y,[l]),$async$cT)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$cT,r)}}
A.oA.prototype={
$0(){return this.a.bC(this.b)},
$S:68}
A.oB.prototype={
$1(a){return this.mJ(a)},
mJ(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.G("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.Y(new A.a0(p.c,A.ag([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oz.prototype={
$1(a){return this.mI(a)},
mI(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.a2("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aw(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.Y(new A.a0(p.c,A.ag([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oC.prototype={
$1(a){return this.mK(a)},
mK(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.fJ(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.G("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.Y(new A.a0(q.f,A.ag([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.oD.prototype={
$1(a){return A.ac(a.h(0,"remote_name"))},
$S:69}
A.b3.prototype={}
A.ox.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"ref_id")
j.toString
A.J(j)
s=k.h(0,"store")
s.toString
A.J(s)
r=k.h(0,"record_id")
r.toString
A.J(r)
q=k.h(0,"field")
q.toString
A.J(q)
p=k.h(0,"hash")
p.toString
A.J(p)
o=A.ac(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.J(n)
m=A.aZ(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.aZ(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.b3(j,s,r,q,p,o,n,m,l,A.ac(k.h(0,"last_error")))},
$S:70}
A.px.prototype={
gll(){return this.b},
dJ(a,b,c){return this.vq(a,b,c)},
vq(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$dJ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.b.dO("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$dJ)
case 3:o=n.aH(e,A.Ha(),t.I)
o=A.P(o,o.$ti.i("S.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dJ,r)},
dw(a,b,c,d,e,f,g){return this.ty(a,b,c,d,e,f,g)},
ty(a,b,c,d,e,f,g){var s=0,r=A.h(t.I),q,p=this,o,n,m
var $async$dw=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:o=p.gll()
s=3
return A.a(o.bD(a,b,c),$async$dw)
case 3:n=i
s=4
return A.a(o.c1(n),$async$dw)
case 4:m=i
if(m==null)m=0
s=5
return A.a(p.a.V(new A.py(p,g,f,d,n,m,A.mz(),e),t.I),$async$dw)
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dw,r)},
eJ(a,b,c,d,e){return this.vI(a,b,c,d,e)},
vI(a,b,c,d,e){var s=0,r=A.h(t.E),q,p=this,o,n,m,l,k,j
var $async$eJ=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gll()
s=3
return A.a(p.dJ(a,c,e),$async$eJ)
case 3:k=g
j=J.K(k)
if(j.gB(k))throw A.b(A.w("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.ey(k,new A.pA(d),new A.pB(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.w("File is remote_only; download it before opening."))
j=p.a
n=j.Q.$0()
m=o.e
s=4
return A.a(j.b.aw("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$eJ)
case 4:q=l.bC(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eJ,r)},
eS(a,b,c,d,e,f){return this.w9(0,b,c,d,e,f)},
w9(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$eS=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dJ(b,d,f),$async$eS)
case 3:n=h
m=J.K(n)
if(m.gB(n)){s=1
break}o=e!=null?m.ey(n,new A.pC(e),new A.pD(e)):m.h(n,c)
s=4
return A.a(p.a.V(new A.pE(p,o,f,d,b),t.P),$async$eS)
case 4:case 1:return A.e(q,r)}})
return A.f($async$eS,r)},
c_(a,b){return this.nd(a,b)},
nd(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g
var $async$c_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i={}
h=p.b
i.a=0
g=i
s=3
return A.a(h.cL(b),$async$c_)
case 3:g.a=0+d
o=p.a
s=4
return A.a(o.V(new A.pz(i,p),t.P),$async$c_)
case 4:n=o.Q.$0()-B.c.R(a.a,1000)
o=o.b,m=t.s
case 5:s=7
return A.a(o.bZ("lp_blobs",A.l(["hash"],m),250,"hash ASC","refcount <= 0 AND last_access <= ?",[n]),$async$c_)
case 7:l=d
k=J.K(l)
if(k.gB(l)){s=6
break}k=k.gu(l)
case 8:if(!k.k()){s=9
break}j=k.gn().h(0,"hash")
j.toString
A.J(j)
s=10
return A.a(h.dC(j),$async$c_)
case 10:s=11
return A.a(o.a2("lp_blobs","hash = ?",[j]),$async$c_)
case 11:++i.a
s=8
break
case 9:s=5
break
case 6:q=i.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
cj(a){return this.uy(a)},
uy(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.b
e=A
s=3
return A.a(g.aR("SELECT SUM(size) as total FROM lp_blobs"),$async$cj)
case 3:f=e.fG(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.aR("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cj)
case 6:l=c
k=J.K(l)
if(k.gB(l)){s=5
break}k=k.gu(l)
case 7:if(!k.k()){s=8
break}j=k.gn()
if(f<=a){s=8
break}i=j.h(0,"hash")
i.toString
A.J(i)
j=j.h(0,"size")
j.toString
A.ai(j)
s=9
return A.a(h.dC(i),$async$cj)
case 9:s=10
return A.a(g.G("lp_file_refs",A.m(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$cj)
case 10:s=11
return A.a(g.a2("lp_blobs","hash = ?",[i]),$async$cj)
case 11:f-=j;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cj,r)}}
A.py.prototype={
$1(a){return this.mN(a)},
mN(a){var s=0,r=A.h(t.I),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.Q.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.eQ("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.K(c)
if(b.gW(c)){q=A.zj(b.gC(c))
s=1
break}s=4
return A.a(A.fJ(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.eQ("lp_outbox",A.l(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.K(o)
n=h.gW(o)&&J.R(h.gC(o),"base_updated")==null?A.ac(J.R(h.gC(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.bV(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.I),$async$$1)
case 6:k=A.mz()
s=7
return A.a(j.az(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.e.a4(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.Y(new A.a0(g,A.ag([f],m)))
q=new A.b3(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:71}
A.pA.prototype={
$1(a){return a.a===this.a},
$S:50}
A.pB.prototype={
$0(){return A.x(A.w("FileRef "+this.a+" not found"))},
$S:36}
A.pC.prototype={
$1(a){return a.a===this.a},
$S:50}
A.pD.prototype={
$0(){return A.x(A.w("FileRef "+this.a+" not found"))},
$S:36}
A.pE.prototype={
$1(a){return this.mP(a)},
mP(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.a.a.Q.$0()
n=q.b
m=n.r==="pending_upload"&&n.f==null
l=t.N
k=t.X
j=n.a
i=n.e
s=m?2:4
break
case 2:s=5
return A.a(p.a2("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aw(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.G("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.G("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.az(0,"lp_op_queue",A.m(["op_id",A.mz(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.e.a4(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.v),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.Y(new A.a0(q.c,A.ag([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.pz.prototype={
$1(a){return this.mO(a)},
mO(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.ch,p=new A.bK(p,p.r,p.e,A.o(p).i("bK<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ae('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.A(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.M(c)
case 5:if(!l.k()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.J(j)
k=k.h(0,"hash")
k.toString
A.J(k)
s=7
return A.a(i.a2("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aw(u.y,[k]),$async$$1)
case 8:s=9
return A.a(i.G("lp_op_queue",A.m(["state","done"],o,n),"payload_json LIKE ?",['%"ref_id":"'+j+'"%']),$async$$1)
case 9:++m.a
s=5
break
case 6:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tg.prototype={
bt(){var s=0,r=A.h(t.A),q,p=2,o=[],n,m,l,k,j
var $async$bt=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.iZ()
if(n==null){q=null
s=1
break}l=t.m
s=7
return A.a(A.a_(n.getDirectory(),l),$async$bt)
case 7:m=b
s=8
return A.a(A.a_(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$bt)
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
return A.f($async$bt,r)},
bD(a,b,c){return this.vU(a,b,c)},
hQ(a){return this.bD(a,null,null)},
vU(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k,j,i,h
var $async$bD=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:m=new A.uj(A.l([],t.bs))
s=3
return A.a(A.iW(a,b,c,null,new A.th(m)),$async$bD)
case 3:l=e
k=m.jS()
s=4
return A.a(p.bt(),$async$bD)
case 4:j=e
i=l.a
s=j!=null?5:7
break
case 5:o=t.m
h=A
s=9
return A.a(A.a_(j.getFileHandle(i,{create:!0}),o),$async$bD)
case 9:s=8
return A.a(h.a_(e.createWritable(),o),$async$bD)
case 8:n=e
o=t.X
s=10
return A.a(A.a_(n.write(t.a.a(B.d.gaJ(k))),o),$async$bD)
case 10:s=11
return A.a(A.a_(n.close(),o),$async$bD)
case 11:s=6
break
case 7:p.b.j(0,i,k)
case 6:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bD,r)},
bC(a){return this.vK(a)},
vK(a){var s=0,r=A.h(t.E),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bC=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.jg(a)
h=n.b
if(h.H(a)){h=h.h(0,a)
h.toString
q=A.y9(h,t.L)
s=1
break}s=3
return A.a(n.bt(),$async$bC)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
h=t.m
s=10
return A.a(A.a_(m.getFileHandle(a,{create:!1}),h),$async$bC)
case 10:l=c
s=11
return A.a(A.a_(l.getFile(),h),$async$bC)
case 11:k=c
s=12
return A.a(A.a_(k.arrayBuffer(),t.a),$async$bC)
case 12:j=c
i=A.bB(j,0,null)
i=A.y9(i,t.L)
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
case 9:case 5:throw A.b(A.w("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bC,r)},
dC(a){return this.tT(a)},
tT(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$dC=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.jg(a)
o.b.F(0,a)
s=2
return A.a(o.bt(),$async$dC)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(A.xL(n,a),$async$dC)
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
return A.f($async$dC,r)},
ck(a){return this.uE(a)},
uE(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k
var $async$ck=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.jg(a)
if(n.b.H(a)){q=!0
s=1
break}s=3
return A.a(n.bt(),$async$ck)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(A.a_(m.getFileHandle(a,{create:!1}),t.m),$async$ck)
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
return A.f($async$ck,r)},
c1(a){return this.nr(a)},
nr(a){var s=0,r=A.h(t.aV),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$c1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.jg(a)
j=n.b
if(j.H(a)){q=j.h(0,a).length
s=1
break}s=3
return A.a(n.bt(),$async$c1)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
j=t.m
s=10
return A.a(A.a_(m.getFileHandle(a,{create:!1}),j),$async$c1)
case 10:l=c
s=11
return A.a(A.a_(l.getFile(),j),$async$c1)
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
return A.f($async$c1,r)},
cL(a){return this.tF(a)},
tF(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$cL=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(m.bt(),$async$cL)
case 3:f=c
if(f==null){q=0
s=1
break}l=0
p=5
i=new A.bR(A.bF(A.zk(f),"stream",t.K),t.hT)
p=8
h=t.X
case 11:s=13
return A.a(i.k(),$async$cL)
case 13:if(!c){s=12
break}k=i.gn()
j=k.name
if(!J.CL(j,"tmp_")){s=11
break}p=15
s=18
return A.a(A.a_(f.removeEntry(j,{recursive:!1}),h),$async$cL)
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
return A.a(i.A(),$async$cL)
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
return A.f($async$cL,r)}}
A.th.prototype={
$1(a){return this.a.t(0,a)},
$S:22}
A.kU.prototype={
gmp(){return 1}}
A.mX.prototype={
cZ(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$cZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.e8(),$async$cZ)
case 5:o=b
s=o.gmp()<0.25?6:7
break
case 6:s=8
return A.a(p.iY(o),$async$cZ)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gmp()<0.25?9:10
break
case 9:s=11
return A.a(p.iY(m),$async$cZ)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
hT(){var s=0,r=A.h(t.q),q,p=this
var $async$hT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.e8(),$async$hT)
case 3:q=p.iY(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)},
e8(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$e8=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.jj():j
p=3
s=6
return A.a(l,$async$e8)
case 6:k=b
m.b=k
q=k
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
i=m.d
h=l
if(i==null?h==null:i===h)m.d=null
s=n.pop()
break
case 5:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e8,r)},
iY(a){var s=this.c
if(s!=null)return s
return this.c=this.ff(a)},
ff(a){return this.oA(a)},
oA(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$ff=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.w("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.jN(l),$async$ff)
case 6:k=c
m.b=k
q=k
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
return A.f($async$ff,r)}}
A.ko.prototype={
hN(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$hN=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.v()
s=7
return A.a(m.hP(),$async$hN)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.I(k)
if(m instanceof A.cf){n.as=!1
n.ax=!0}else if(m instanceof A.bh)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hN,r)},
fa(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fa=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.v()
n=new A.qy(o,A.l(["data"],t.s),B.bo,p.gr0(),p.gr3(),A.c_(null,t.H))
p.Q=n
s=3
return A.a(n.av(),$async$fa)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fa,r)},
e0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$e0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aA()
s=2
return A.a(o instanceof A.p?o:A.bk(o,t.H),$async$e0)
case 2:q.Q=null
for(o=q.ch,p=new A.aM(o,o.r,o.e,A.o(o).i("aM<2>"));p.k();)p.d.A()
o.aj(0)
q.CW.aj(0)
return A.e(null,r)}})
return A.f($async$e0,r)},
r1(){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q]
this.e3(p,new A.cd(p,B.T,null))}},
r4(a){var s=a.b,r=s.b
if(!B.b.D(this.c,r))return
if(a.a==="delete"){this.h4(s)
return}this.e3(r,new A.cd(r,B.T,s))},
h4(a){return this.t8(a)},
t8(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.D(n.c,j)){s=1
break}m=null
p=4
l=n.z
l===$&&A.v()
s=7
return A.a(l.bH(a.a),$async$h4)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.I(i)
if(l instanceof A.ci){n.e3(j,new A.cd(j,B.ap,null))
s=1
break}else if(l instanceof A.bh){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.e3(j,new A.cd(j,B.ap,null))
s=1
break}n.e3(j,new A.cd(j,B.T,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h4,r)},
e3(a,b){var s,r
this.CW.j(0,a,b)
s=this.ch
r=s.h(0,a)
if(r!=null)r.A()
s.j(0,a,A.co(B.bp,new A.qH(this,a)))},
wu(a,b){return this.hX(null,a,null,b,null)},
hX(a,b,c,d,e){return this.wx(a,b,c,d,e)},
ww(a,b){return this.hX(null,a,null,null,b)},
wx(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hX=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.cS(0,new A.qI(),t.N,t.co)
n=p.z
n===$&&A.v()
q=n.hW(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)}}
A.qH.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.F(0,q)
s=r.CW.F(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.qI.prototype={
$2(a,b){return new A.X(a,new A.cW("imgs+",b.a,b.b,b.c),t.ia)},
$S:74}
A.qq.prototype={
eF(a,b,c,d,e,f){return this.vs(a,b,c,d,e,f)},
vs(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$eF=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.HM(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.A(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.A(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.A(c,"'","\\'")+"'")}n=t.N
n=A.E(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.jU(B.c.cK(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.L(b,","))
k=p.b.bg("/api/collections/data/records").jQ(n)
s=3
return A.a(p.lp("GET",k),$async$eF)
case 3:j=a0
p.cC(j,A.l([200],t.t),k)
i=p.cB(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.be("List response has no items array."))
h=J.aH(i,new A.qx(p),t.Q)
h=A.P(h,h.$ti.i("S.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eF,r)},
bH(a){return this.ng(a)},
ng(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records/"+A.fv(2,a,B.k,!1))
s=3
return A.a(p.lp("GET",o),$async$bH)
case 3:n=c
if(n.a===404)throw A.b(A.DM("not found"))
p.cC(n,A.l([200],t.t),o)
q=p.dj(p.cB(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bH,r)},
hi(a,b,c){return this.tN(a,b,c)},
tN(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hi=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records")
s=3
return A.a(p.ei("POST",o,B.e.a4(A.m(["id",b,"store",c,"data",B.e.aE(a,null)],t.N,t.z),null)),$async$hi)
case 3:n=e
if(n.a===400&&p.qE(n))throw A.b(new A.ex(p.e4(n)))
p.cC(n,A.l([200,201],t.t),o)
q=p.dj(p.cB(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
qE(a){var s,r,q,p,o,n
try{s=this.cB(a)
r=J.R(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.u(p,"validation_not_unique")||J.u(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
eY(a,b,c){return this.wt(a,b,c)},
wt(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$eY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bg("/api/collections/data/records/"+A.fv(2,c,B.k,!1))
s=3
return A.a(p.ei("PATCH",o,B.e.a4(A.m(["data",B.e.aE(b,null)],t.N,t.z),null)),$async$eY)
case 3:n=e
p.cC(n,A.l([200],t.t),o)
q=p.dj(p.cB(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eY,r)},
hW(a,b,c,d,e){return this.wv(a,b,c,d,e)},
wv(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$hW=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bg("/api/collections/data/records/"+A.fv(2,b,B.k,!1))
m=t.N
l=A.E(m,m)
if(d!=null)l.j(0,"imgs-",B.e.a4(d,null))
if(e==null)m=null
else{m=A.o(e).i("aT<2>")
m=A.P(new A.aT(e,m),m.i("n.E"))}s=3
return A.a(p.rQ(new A.jJ("PATCH",n,B.aJ,l,m==null?B.c0:m)),$async$hW)
case 3:o=g
p.cC(o,A.l([200],t.t),n)
q=p.dj(p.cB(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
hn(a,b,c){return this.uq(a,b,c)},
uq(a,b,c){var s=0,r=A.h(t.E),q,p=this,o,n,m,l
var $async$hn=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.E(l,l)
o=p.b.bg("/api/files/data/"+A.fv(2,b,B.k,!1)+"/"+A.fv(2,a,B.k,!1))
n=l.a===0?o:o.jQ(l)
s=3
return A.a(p.r5(new A.dL("GET",n,B.aJ,null)),$async$hn)
case 3:m=e
p.cC(new A.cg(m.a,m.b,""),A.l([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hn,r)},
eN(a){return this.vT(a)},
vT(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$eN=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bg("/api/batch")
a3=A.l([],t.ic)
for(o=J.ay(a4),n=o.gu(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.e.aE(j.d,null)],m,l)],m,k))}s=3
return A.a(p.ei("POST",a2,B.e.a4(A.m(["requests",a3],m,t.ew),null)),$async$eN)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.Df(p.e4(i)))
if(a3===400)throw A.b(new A.dy(p.e4(i)))
p.cC(i,A.l([200],t.t),a2)
h=B.e.aE(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.be("Batch response has no results array."))}else throw A.b(A.be("Batch response is not a list or envelope."))
g=e}a3=J.K(g)
if(a3.gl(g)!==o.gl(a4))throw A.b(A.be("Batch response has "+a3.gl(g)+" results for "+o.gl(a4)+" requests."))
d=A.l([],t.g2)
for(n=t.f,c=0;c<o.gl(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.be("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dt(a)
a0=l.X(a,200)||l.X(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dj(a1):null
k=a0?null:p.oE(b)
j=a0&&n.b(a1)?B.e.a4(a1.h(0,"data"),null):null
d.push(new A.hK(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eN,r)},
hP(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$hP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ei("POST",p.b.bg("/api/batch"),B.e.a4(A.m(["requests",[]],t.N,t.W),null)),$async$hP)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.CO(p.e4(o)))
if(n===408||n===429||n>=500)throw A.b(A.zR("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
ei(a,b,c){return this.bQ(new A.qt(this,a,b,c),new A.qu(),t.w)},
lp(a,b){return this.ei(a,b,null)},
rQ(a){return this.bQ(new A.qv(this,a),new A.qw(),t.w)},
r5(a){return this.bQ(new A.qr(this,a),new A.qs(),t.lI)},
bQ(a,b,c){return this.ta(a,b,c,c)},
ta(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$bQ=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.cZ(),$async$bQ)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$bQ)
case 8:l=f
s=J.u(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.hT(),$async$bQ)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$bQ)
case 12:l=f
case 10:i=l
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
i=A.I(g)
if(i instanceof A.cX){j=i
throw A.b(A.zR(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bQ,r)},
j1(a,b,c,d){return this.rO(a,b,c,d)},
rO(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$j1=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.E(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.aV(new A.dL(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j1,r)},
cC(a,b,c){if(B.b.D(b,a.a))return
throw A.b(this.qI(a,c))},
qI(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.e4(a)
if(401===s)return new A.bH(q)
if(403===s)return new A.cf(q)
if(404===s)return new A.ci(q)
if(408===s||429===s)return new A.dX(r,q)
if(400===s)return new A.eL(q)
if(s>=500)return new A.hP(q)
return new A.eM("Unexpected status "+s+" for "+b.m(0)+": "+q)},
e4(a){var s,r,q,p,o
try{s=this.cB(a)
r=J.R(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.R(s,"data")
if(t.f.b(q)){p=q
p=p.gW(p)}else p=!1
if(p){p=B.e.a4(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.q(p,0,500)},
cB(a){var s,r,q,p=null
try{p=B.e.aE(a.c,null)}catch(r){q=A.I(r)
if(t.Y.b(q)){s=q
throw A.b(A.be("Response is not valid JSON: "+s.gjD()))}else throw r}if(t.f.b(p))return A.bb(p,t.N,t.X)
throw A.b(A.be("Expected a JSON object, got "+J.cR(p).m(0)+"."))},
dj(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.be("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.be("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.bb(o,n,m):A.E(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.z1(k,n)
j=A.P(j,j.$ti.i("n.E"))}else j=B.o
return new A.ck(s,p,q,l,j)},
oE(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.qx.prototype={
$1(a){return this.a.dj(a)},
$S:75}
A.qt.prototype={
$1(a){var s=this
return s.a.j1(s.b,s.c,s.d,a)},
$S:51}
A.qu.prototype={
$1(a){return a.a},
$S:52}
A.qv.prototype={
$1(a){var s=this.b,r=t.N
r=A.eD(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.d4(new A.jJ(s.a,s.b,r,s.d,s.e))},
$S:51}
A.qw.prototype={
$1(a){return a.a},
$S:52}
A.qr.prototype={
$1(a){var s=this.b,r=t.N
r=A.eD(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dN(new A.dL(s.a,s.b,r,s.d))},
$S:78}
A.qs.prototype={
$1(a){return a.a},
$S:79}
A.hE.prototype={}
A.fp.prototype={}
A.qy.prototype={
av(){var s=0,r=A.h(t.H),q,p=this
var $async$av=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.f){s=1
break}p.f=!0
p.eh()
case 1:return A.e(q,r)}})
return A.f($async$av,r)},
aA(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.f=!1
n=q.r
n=n==null?null:n.A()
s=2
return A.a(n instanceof A.p?n:A.bk(n,t.H),$async$aA)
case 2:q.r=null
p=q.w
if(p!=null?(p.a.a&30)===0:o)p.ao()
return A.e(null,r)}})
return A.f($async$aA,r)},
eh(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$eh=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n=o.c,m=t.H
case 2:if(!o.f){s=3
break}q=5
s=8
return A.a(o.cz(),$async$eh)
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
return A.a(A.Dj(n,m),$async$eh)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eh,r)},
cz(){return this.oq()},
oq(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.cZ(),$async$cz)
case 3:m=b
l=t.N
s=4
return A.a(n.a.dN(new A.dL("GET",n.b.bg("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cz)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.jK("realtime connect status "+n,null))
s=!p.f?5:6
break
case 5:s=7
return A.a(k.c.aQ(new A.qD()).A(),$async$cz)
case 7:s=1
break
case 6:++p.y
p.w=new A.ax(new A.p($.t,t.D),t.h)
n=$.mH()
l=A.l([],t.s)
o.a=!1
p.r=k.c.bA(new A.qE(o,p,new A.vR(new A.uI(n),l),m),new A.qF(p),new A.qG(p))
s=8
return A.a(p.w.a,$async$cz)
case 8:p.r=null
case 1:return A.e(q,r)}})
return A.f($async$cz,r)},
fz(a,b){return this.pA(a,b)},
pA(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$fz=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.aV(new A.dL("POST",l.b.bg("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.e.a4(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$fz)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.jK("realtime subscribe status "+l,null))
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
l=l.b(j)?A.bb(j,t.N,t.X):B.q
if(t.j.b(f)){c=J.z1(f,t.N)
c=A.P(c,c.$ti.i("n.E"))}else c=B.o
m=new A.ck(k,e,d,l,c)
p.e.$1(new A.hE(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$fz,r)}}
A.qD.prototype={
$1(a){},
$S:22}
A.qE.prototype={
$1(a){var s,r,q,p,o,n,m,l,k=this,j=k.c.uH(a)
for(s=j.length,r=k.b,q=k.d,p=t.H,o=k.a,n=t.P,m=0;m<j.length;j.length===s||(0,A.B)(j),++m){l=j[m]
r.x=r.x.aK(new A.qz(r,l,q),p).jd(new A.qA()).aK(new A.qB(o,r,l),n).jd(new A.qC())}},
$S:22}
A.qz.prototype={
$1(a){return this.a.fz(this.b,this.c)},
$S:27}
A.qA.prototype={
$1(a){},
$S:25}
A.qB.prototype={
$1(a){var s=this.a
if(!s.a&&this.c.a!=null){s.a=!0
this.b.d.$0()}},
$S:53}
A.qC.prototype={
$1(a){},
$S:25}
A.qF.prototype={
$0(){var s=this.a.w
if((s.a.a&30)===0)s.ao()},
$S:0}
A.qG.prototype={
$1(a){var s=this.a.w
if((s.a.a&30)===0)s.ao()},
$S:25}
A.vR.prototype={
uH(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.jS()
r=A.l([],t.bi)
for(q=s.length,p=0;;){o=this.qB(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.cs(p,o,q)))
p=o+1
m=this.ow(B.a.wo(new A.cP(!0).cA(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.d.aX(s,p))
return r},
qB(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
oO(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.aj(k)
return l}s=m.b
r=B.b.L(k,"\n")
m.b=null
B.b.aj(k)
try{q=B.e.aE(r,l)
if(t.f.b(q)){p=A.bb(q,t.N,t.X)
o=J.R(p,"clientId")
if(J.u(s,"PB_CONNECT")&&typeof o=="string")return new A.fp(o,l)
return new A.fp(l,p)}}catch(n){}return l},
ow(a){var s,r=this,q=null
if(a.length===0)return r.oO()
if(B.a.O(a,"PB_CONNECT:")){r.b=null
B.b.aj(r.c)
return new A.fp(B.a.d_(B.a.ac(a,11)),q)}if(B.a.O(a,":"))return q
if(B.a.O(a,"event:")){r.b=B.a.d_(B.a.ac(a,6))
return q}if(B.a.O(a,"data:")){s=B.a.d_(B.a.ac(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.dL.prototype={}
A.cW.prototype={
ny(){return this.d.$0()},
gl(a){return this.c}}
A.jJ.prototype={}
A.cg.prototype={}
A.cX.prototype={
m(a){return"HttpTransportException: "+this.a},
$iL:1}
A.da.prototype={}
A.qo.prototype={
aV(a){return this.nn(a)},
nn(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$aV=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.dN(a),$async$aV)
case 7:m=c
j=m.c
s=8
return A.a(B.am.kk(j).dI(0).hV(B.X),$async$aV)
case 8:l=c
j=m.a
i=m.b
q=new A.cg(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.I(g)
if(j instanceof A.cX)throw g
else{k=j
j=A.jK("HTTP "+a.a+" "+a.b.m(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aV,r)},
d4(a){return this.no(a)},
no(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$d4=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.DI(a6.a,a6.b)
h.r.E(0,a6.c)
h.x.E(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.ny(),$async$d4)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.BR(a0)
a3=new A.eF("application".toLowerCase(),"octet-stream".toLowerCase(),new A.f2(A.E(d,d),e))
b.push(new A.k9(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.B)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.aV(m).hV(B.X),$async$d4)
case 11:k=a8
g=k.w
s=12
return A.a(B.am.kk(g).dI(0).hV(B.X),$async$d4)
case 12:j=a8
g=k.b
f=k.e
q=new A.cg(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.I(a5)
if(g instanceof A.cX)throw a5
else{i=g
g=A.jK("HTTP multipart "+a6.a+" "+a6.b.m(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d4,r)},
dN(a){return this.vM(a)},
vM(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$dN=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.DY(a,a0)
a1.r.E(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjp().jn(j)
i.og()
i.y=A.HQ(j)
h=i.gc7()
if(h==null){j=t.N
i.sc7(A.xX("text","plain",A.m(["charset",i.gjp().gb2()],j,j)))}else{j=i.gc7()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.ci(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.H("charset")){j=t.N
f=A.m(["charset",i.gjp().gb2()],j,j)
e=h.a
d=h.b
c=A.bb(h.c,j,j)
c.E(0,f)
i.sc7(A.xX(e,d,c))}}}p=4
s=7
return A.a(n.a.aV(a1).hV(B.X),$async$dN)
case 7:m=a5
j=t.N
l=A.E(j,j)
m.e.ad(0,new A.qp(l))
j=m.b
i=m.w
q=new A.da(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.I(a2)
if(j instanceof A.cX)throw a2
else{k=j
a=A.jK("HTTP "+a+" "+a0.m(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dN,r)}}
A.qp.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:30}
A.mM.prototype={
aT(a,b){var s=this.a.aK(new A.mN(a,b),b)
this.a=s.bo(new A.mO(b),new A.mP(),t.H)
return s}}
A.mN.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.mO.prototype={
$1(a){},
$S(){return this.a.i("Q(0)")}}
A.mP.prototype={
$2(a,b){},
$S:9}
A.bm.prototype={
gmq(){var s=this.e
return s.gl(s)===1&&J.u(s.h(0,"__lp_deleted__"),!0)}}
A.nB.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.J(d)
s=e.h(0,"record_id")
s.toString
A.J(s)
r=A.wR(e.h(0,l),l,k)
q=A.wR(e.h(0,j),j,k)
p=A.wR(e.h(0,i),i,k)
o=A.Bs(e.h(0,h),h,k)
n=A.Bs(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ai(m)
return new A.bm(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.wR(e.h(0,f),f,k):null)},
$S:81}
A.nC.prototype={
eE(a){return this.vr(a)},
vr(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$eE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.b.vV("lp_conflicts","detected_at ASC",n,o),$async$eE)
case 3:o=m.aH(c,A.GZ(),t.n8)
o=A.P(o,o.$ti.i("S.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eE,r)},
d3(a,b){return this.nf(a,b)},
nf(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$d3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$d3)
case 3:o=d
n=J.K(o)
if(n.gB(o)){q=null
s=1
break}q=A.xD(n.gC(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d3,r)},
wz(a){var s={},r=A.ym()
s.a=null
r.sm3(A.e_(new A.nF(s,r),new A.nG(s,this,a,new A.nH(this,r,a)),t.ba))
return r.ba().gcv()},
dQ(a,b,c){return this.wd(a,b,c)},
wd(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aa(c)
s=2
return A.a(p.V(new A.nD(q,c,a,o.a,o,b),t.P),$async$dQ)
case 2:return A.e(null,r)}})
return A.f($async$dQ,r)},
em(a,b){return this.tj(a,b)},
tj(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$em=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.d3(a,b),$async$em)
case 2:p=d
if(p==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=3
return A.a(q.dQ(b,p.d,a),$async$em)
case 3:return A.e(null,r)}})
return A.f($async$em,r)},
du(a,b){return this.tk(a,b)},
tk(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$du=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.d3(a,b),$async$du)
case 3:n=d
if(n==null)throw A.b(A.w("No conflict found for "+a+"/"+b))
s=n.gmq()?4:5
break
case 4:o=p.a
if(A.kV(o)!=null)A.x(A.w(u.L))
s=6
return A.a(new A.dD(o,o.aa(a),null,null).jM(b),$async$du)
case 6:s=1
break
case 5:s=7
return A.a(p.dQ(b,n.e,a),$async$du)
case 7:case 1:return A.e(q,r)}})
return A.f($async$du,r)}}
A.nH.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.ba().ghE()){s=1
break}p=4
s=7
return A.a(n.a.eE(n.c),$async$$0)
case 7:m=b
if(!i.ba().ghE())J.bV(i.ba(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.I(h)
k=A.a5(h)
if(!i.ba().ghE())i.ba().by(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.nG.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.aY(p,A.o(p).i("aY<1>")).aQ(new A.nE(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.nE.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:33}
A.nF.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.p?p:A.bk(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.ba().p(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.nD.prototype={
$1(a){return this.mH(a)},
mH(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aM("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.K(a3)
if(a4.gB(a3))throw A.b(A.w("No conflict found for "+a1+"/"+a2))
o=A.xD(a4.gC(a3))
n=o.gmq()
m=n?null:A.aj(o.e)
l=n?"":A.aB(B.l.v(B.i.v(A.aj(A.b0(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aM(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bW(a8)?4:5
break
case 4:s=7
return A.a(a0.a2("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.a2("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.a2("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.Y(new A.a0(a1,A.ag([a2],a4)))
a6.Y(new A.a0("lp_conflicts",A.ag([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aM("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.K(k)
if(i.gW(k)){h=A.ac(J.R(i.gC(k),"base_updated"))
i=h==null?A.ac(J.R(i.gC(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.a2("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.eD(p.f,i,h)
g.j(0,"id",a2)
f=J.u(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.G(a4,A.ds(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bs(n?B.q:o.e,g)
d=A.P(a4,A.o(a4).c)
B.b.aW(d)
c=A.aj(A.b0(e,g))
s=13
return A.a(a0.G("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.e.a4(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aM("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bW(a8)?14:16
break
case 14:a4=p.a.a
b=a4.Q.$0()
h=f?B.F:B.r
e=B.e.a4(d,null)
a4=a4.as
a4===$&&A.v()
s=18
return A.a(a0.az(0,"lp_outbox",A.GT(l,j,b,e,h,a4.k9(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.G("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.Y(new A.a0(a1,A.ag([a2],i)))
a6.Y(new A.a0("lp_conflicts",A.ag([a2],i)))
a4=o.d
a=A.bs(a4,g)
a.F(0,"id")
a6.bl(new A.aO(a1,a2,B.W,B.u,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.kQ.prototype={
av(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$av=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.e_(null,null,t.n6)
n.ay=A.e_(null,null,t.em)}n.z=!0
s=3
return A.a(n.aI(B.cA),$async$av)
case 3:p=5
l=n.b
s=8
return A.a(l.hN(),$async$av)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.v()
k.f=l.as
p=2
s=7
break
case 5:p=4
i=o.pop()
if(!(n.z&&m===n.db)){s=1
break}s=7
break
case 4:s=2
break
case 7:p=10
l=n.a.a$.a
n.fr=new A.aY(l,A.o(l).i("aY<1>")).aQ(n.gv2())
l=n.b.ay
n.fx=new A.aY(l,A.o(l).i("aY<1>")).aQ(n.gv0())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aA(),$async$av)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.Ed(B.bq,new A.rQ(n))
s=14
return A.a(n.aI(n.dd()),$async$av)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.cG(),$async$av)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$av,r)},
aA(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1;++p.db
o=p.fy
if(o!=null)o.A()
o=p.go
if(o!=null)o.A()
o=p.id
if(o!=null)o.A()
o=p.k1
if(o!=null)o.A()
s=3
return A.a(p.k4,$async$aA)
case 3:s=4
return A.a(p.dx,$async$aA)
case 4:s=5
return A.a(p.dy.a,$async$aA)
case 5:s=6
return A.a(p.p2,$async$aA)
case 6:o=p.fr
o=o==null?null:o.A()
n=t.H
s=7
return A.a(o instanceof A.p?o:A.bk(o,n),$async$aA)
case 7:o=p.fx
o=o==null?null:o.A()
s=8
return A.a(o instanceof A.p?o:A.bk(o,n),$async$aA)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.P
o.t(0,B.P)
s=12
return A.a(p.ax.p(),$async$aA)
case 12:s=10
break
case 11:p.y=B.P
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.p(),$async$aA)
case 15:case 14:p.y=B.P
case 1:return A.e(q,r)}})
return A.f($async$aA,r)},
dd(){if(this.at)return B.aW
if(this.Q)return B.aU
if(this.as)return B.ad
return B.aV},
aI(a){return this.t1(a)},
t1(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.oC(),$async$aI)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aI,r)},
oC(){return this.p2=this.p2.aK(new A.rI(this),t.H)},
fe(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fe=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=n.z
if(!g){s=1
break}m=0
l=0
k=0
j=0
p=4
g=n.e
g===$&&A.v()
s=7
return A.a(g.hg(),$async$fe)
case 7:i=b
m=i.a[3]
l=i.a[1]
k=i.a[2]
j=i.a[0]
p=2
s=6
break
case 4:p=3
f=o.pop()
s=6
break
case 3:s=2
break
case 6:g=n.ay
if((g.c&4)===0)g.t(0,new A.eY(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fe,r)},
v3(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.rM(B.Y)},
v1(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.ch.H(s))return
r=a.c
if(r!=null&&a.b===B.T){q.p1.push("fast:"+s)
q.dx=q.dx.aK(new A.rO(q,r),t.H)
return}q.p1.push("pull:"+s)
q.h2(B.Y,A.l([s],t.s))},
fi(a){return this.oK(a)},
oK(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$fi=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.h2(B.Y,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.v()
s=7
return A.a(l.ho(a),$async$fi)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
m=!1
s=6
break
case 3:s=2
break
case 6:if(!(n.z&&j===n.db)){s=1
break}if(!m)n.h2(B.Y,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fi,r)},
vb(){if(!this.z)return
this.p1.push("cycle")
this.cG()},
h2(a,b){var s=this,r=s.go
if(r!=null)r.A()
if(b==null)s.k2=!0
else s.k3.E(0,b)
s.go=A.co(a,new A.rN(s))},
rM(a){return this.h2(a,null)},
rL(a){var s=this.id
if(s!=null)s.A()
this.id=A.co(B.x,new A.rM(this,a))},
iS(){this.as=!0
this.aI(B.ad)
A.ha(this.d,t.H)},
dK(){var s=0,r=A.h(t.H),q,p=this,o
var $async$dK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.as
o===$&&A.v()
s=3
return A.a(o.wb(),$async$dK)
case 3:s=4
return A.a(p.aI(p.dd()),$async$dK)
case 4:p.p1.push("cycle")
s=5
return A.a(p.cG(),$async$dK)
case 5:case 1:return A.e(q,r)}})
return A.f($async$dK,r)},
f8(a){return this.nq(a)},
nq(a){var s=0,r=A.h(t.H),q=this,p
var $async$f8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.A()
q.k1=A.co(B.ay,new A.rP(q))
s=3
break
case 4:s=5
return A.a(q.aI(B.aU),$async$f8)
case 5:case 3:return A.e(null,r)}})
return A.f($async$f8,r)},
be(){var s=0,r=A.h(t.H),q=this
var $async$be=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aI(B.aW),$async$be)
case 2:return A.e(null,r)}})
return A.f($async$be,r)},
b3(){var s=0,r=A.h(t.H),q,p=this
var $async$b3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aI(p.dd()),$async$b3)
case 3:p.p1.push("cycle")
s=4
return A.a(p.cG(),$async$b3)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b3,r)},
j_(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.A()}s=t.mv
r=q.k4.aK(new A.rJ(q,a),s)
q.k4=r.bo(new A.rK(),new A.rL(),s)
return r},
cG(){return this.j_(null)},
aZ(a){return this.oz(a)},
oz(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$aZ=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.G
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aI(n.dd()),$async$aZ)
case 5:q=B.G
s=1
break
case 4:b3=t.N
a4=t.S
m=A.E(b3,a4)
l=A.E(b3,a4)
k=!1
j=!1
i=A.l([],t.s)
s=6
return A.a(n.aI(B.cB),$async$aZ)
case 6:b3=b8==null
if(b3){a4=n.a.ch
a5=A.o(a4).i("Z<1>")
a6=A.P(new A.Z(a4,a5),a5.i("n.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.v()
s=14
return A.a(a5.cU(h),$async$aZ)
case 14:g=c0
J.bU(m,h,g.b)
if(g.f&&g.b>0)J.bV(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.I(b4)
if(a5 instanceof A.bH){n.iS()
s=9
break}else if(a5 instanceof A.bh){f=a5
k=!0
j=!0
n.ch=f.a}else throw b4
s=13
break
case 10:s=2
break
case 13:case 8:a6.length===a4||(0,A.B)(a6),++a7
s=7
break
case 9:s=n.as?15:16
break
case 15:s=17
return A.a(n.aI(B.ad),$async$aZ)
case 17:q=n.ok=new A.b5(m,B.a1,0,0,0,0,!0)
s=1
break
case 16:s=b3?18:19
break
case 18:p=21
e=n.cy
n.cy=!1
b3=n.r
b3===$&&A.v()
s=24
return A.a(b3.d9(e),$async$aZ)
case 24:d=c0
for(b3=J.M(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.R(l,c.a)
if(a5==null)a5=0
J.bU(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.I(b5)
if(b3 instanceof A.bh){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aI(B.cC),$async$aZ)
case 25:a=B.N
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.v()
s=33
return A.a(b3.eO(),$async$aZ)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.b.aR("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$aZ)
case 36:a0=c0
if(J.fN(a0)&&typeof J.R(J.cc(a0),"last_error")=="string"){b3=J.R(J.cc(a0),"last_error")
b3.toString
n.ch=A.J(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.I(b6)
if(b3 instanceof A.bH)n.iS()
else if(b3 instanceof A.bh){a1=b3
k=!0
n.ch=a1.a}else throw b6
s=32
break
case 29:s=2
break
case 32:case 27:p=38
b3=n.x
b3===$&&A.v()
s=41
return A.a(b3.bi(),$async$aZ)
case 41:a2=c0
k=k||a2.d
if(a2.d&&n.ch==null)n.ch="file sync failed"
p=2
s=40
break
case 38:p=37
b7=o.pop()
a3=A.I(b7)
k=!0
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.G
s=1
break}if(J.ao(i)!==0)n.rL(i)
a9=k||a.f
b0=new A.b2(A.ol(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dd()
s=42
return A.a(n.aI(a9&&b1===B.aV?B.cD:b1),$async$aZ)
case 42:q=n.ok=new A.b5(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aZ,r)}}
A.rQ.prototype={
$1(a){return this.a.vb()},
$S:83}
A.rI.prototype={
$1(a){return this.a.fe()},
$S:27}
A.rO.prototype={
$1(a){return this.a.fi(this.b)},
$S:27}
A.rN.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.P(q,A.o(q).c)
s.k2=!1
q.aj(0)
if(r||p.length===0)s.cG()
else s.j_(p)},
$S:0}
A.rM.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.j_(this.b)},
$S:0}
A.rP.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aI(p.dd()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.cG(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rJ.prototype={
$1(a){return this.a.aZ(this.b)},
$S:84}
A.rK.prototype={
$1(a){return B.G},
$S:85}
A.rL.prototype={
$1(a){return B.G},
$S:86}
A.hp.prototype={
m(a){return"MapFailure: "+this.a},
$iL:1}
A.dU.prototype={}
A.wN.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.wO.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.pS.prototype={}
A.d3.prototype={}
A.k4.prototype={}
A.vF.prototype={}
A.vD.prototype={}
A.tZ.prototype={}
A.pZ.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.pY(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:88}
A.pT.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.pU.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.pV.prototype={
$1(a){return typeof a=="string"},
$S:15}
A.pW.prototype={
$1(a){return a instanceof A.p?a:A.c_(a,t.X)},
$S:89}
A.pX.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.fj(s,s.r,A.o(s).c),r=this.b,q=J.K(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:90}
A.qb.prototype={
es(a){return this.ur(a)},
ur(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$es=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.Q.$0()
e=e.b
s=3
return A.a(e.vW("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$es)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.M(o);l.k();)m.push(A.DN(l.gn()))
l=A.aU(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.B)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.iX(e,l),$async$es)
case 4:h=c
g=A.l([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.B)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.D(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$es,r)},
mh(a){return this.a.V(new A.qd(a),t.H)},
vA(a,b,c,d){return this.a.V(new A.qe(c,d,b,a),t.H)}}
A.qd.prototype={
$1(a){return this.mT(a)},
mT(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.G("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.qe.prototype={
$1(a){return this.mU(a)},
mU(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.G("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.n_.prototype={}
A.hn.prototype={}
A.hL.prototype={}
A.qg.prototype={
k9(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cp(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
dP(a,b,c){return this.w1(a,b,c)},
w1(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$dP=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$dP)
case 3:p=e
o=J.K(p)
q=o.gB(p)?null:A.qh(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dP,r)},
bE(a,b,c){return this.w3(a,b,c)},
w3(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aM("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bE)
case 3:p=e
o=J.K(p)
q=o.gB(p)?null:A.kR(o.gC(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bE,r)},
bc(a,b,c,d,e,f,g,h,i,j,k,l){return this.tv(a,b,c,d,e,f,g,h,i,j,k,l)},
tv(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$bc=A.c(function(b8,b9){if(b8===1)return A.d(b9,r)
for(;;)switch(s){case 0:a2=b7.a
a3=a2.a
a4=b6==null
a5=!a4
if(a5&&b6.w===B.Q)throw A.b(A.zd("Record "+a3+"/"+b0+u.W))
o=a5&&b6.w===B.a6
a5=b3==null
n=a5?null:b3.c
m=!1
if(a5){A:{if(B.z===a6){l=a7==null?B.r:B.F
break A}if(B.E===a6){l=a7==null?B.r:B.M
break A}l=B.r
break A}n=l}else{l=b3.e
switch(b3.c.a){case 0:if(l==null){m=a6===B.z&&!a2.r
n=m?n:B.r}else{B:{if(B.z===a6){l=B.F
break B}if(B.E===a6){l=B.M
break B}l=B.r
break B}n=l}break
case 1:C:{if(B.E===a6){l=B.M
break C}l=B.F
break C}n=l
break
case 2:D:{if(B.z===a6){l=B.F
break D}if(B.E===a6){l=B.M
break D}l=B.r
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a9.a2("lp_outbox","store = ? AND record_id = ?",[a3,b0]),$async$bc)
case 5:s=6
return A.a(a9.a2("lp_sync_row","store = ? AND record_id = ?",[a3,b0]),$async$bc)
case 6:s=7
return A.a(p.h3(a9,a3,b0),$async$bc)
case 7:s=8
return A.a(a9.a2(a3,"id = ?",[b0]),$async$bc)
case 8:q=B.bf
s=1
break
case 4:k=p.a.Q.$0()
j=a5?null:b3.w
if(j==null)j=p.k9()
i=a5?null:b3.e
if(i==null)i=a7==null?null:a7.c
l=a5?null:b3.f
if(l==null){l=a7==null?null:a7.b
h=l}else h=l
if(h==null)h=""
g=a4?null:b6.r
if(g==null)g=a7==null?null:a7.a
l=t.N
f=A.aU(l)
e=a5?null:b3.r
if(e!=null)f.E(0,e)
f.E(0,a8)
d=A.P(f,f.$ti.c)
B.b.aW(d)
c=a5?null:b3.x
if(c==null)c=k
b=B.e.a4(d,null)
a=a4?null:b6.y
if(a==null)a=0
s=a5?9:11
break
case 9:f=A.BK(B.aH)
e=B.b.L(A.aF(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a9.aw("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.BE(h,i,c,null,b,n,j,b4,b0,a3,k)),$async$bc)
case 12:s=10
break
case 11:s=13
return A.a(a9.aw('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b4,b,k,a3,b0]),$async$bc)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a5)B.b.E(f,B.bZ)
if(o)B.b.E(f,B.bO)
s=a4?14:16
break
case 14:a4=A.BK(B.bS)
l=B.b.L(A.aF(16,"?",!1,l),", ")
a0=[]
a0.push(a3)
a0.push(b0)
a0.push(null)
a0.push(null)
a0.push(i)
a0.push(h)
a0.push(g)
a0.push("dirty")
a0.push(b)
a0.push(a+1)
a0.push("visible")
a0.push(j)
a0.push(0)
a0.push(0)
a0.push(null)
a0.push(a2.b)
s=17
return A.a(a9.aw("INSERT INTO lp_sync_row ("+a4+") VALUES ("+l+")",a0),$async$bc)
case 17:s=15
break
case 16:for(a4=f.length,a1=0,l="UPDATE lp_sync_row SET ";a1<a4;++a1){if(a1>0)l+=", "
l+='"'+f[a1]+'" = ?'}a4=l+' WHERE "store" = ? AND "record_id" = ?'
a2=["dirty",b,a+1,j,a2.b]
if(a5)B.b.E(a2,[i,h,g])
if(o)B.b.E(a2,[0,0,null])
a2.push(a3)
a2.push(b0)
s=18
return A.a(a9.aw(a4.charCodeAt(0)==0?a4:a4,a2),$async$bc)
case 18:case 15:q=new A.hn()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bc,r)},
h3(a,b,c){return this.t7(a,b,c)},
t7(a,b,c){var s=0,r=A.h(t.H)
var $async$h3=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cb(a,b,c,!1),$async$h3)
case 2:return A.e(null,r)}})
return A.f($async$h3,r)},
eu(a,b){return this.us(a,b)},
us(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$eu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.b
f=new A.ab("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").m(0)
e=A.P([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ae("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$eu)
case 3:o=d
f=J.K(o)
if(f.gB(o)){q=B.c2
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gu(o);f.k();)n.push(A.qh(f.gn()))
f=A.aU(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.B)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.iX(g,f),$async$eu)
case 4:j=d
i=A.l([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.B)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.D(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eu,r)},
kd(a){if(a.length===0)return A.c_(null,t.H)
return this.a.V(new A.qn(this,a),t.H)},
aC(a,b){return this.rU(a,b)},
rU(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aC=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.aa(a0).a
a4=a2.Q.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aM("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 5:o=a9
n=J.K(o)
s=!(n.gW(o)&&!J.u(J.R(n.gC(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aC)
case 8:m=a9
n=J.K(m)
l=n.gW(m)?A.ca(a3,n.gC(m),a2.y,a2.z):null
s=9
return A.a(b.G(a,A.ds(a3,J.u(a5.h(0,"archived"),!0),a2.y,a2.z,a1,a5),"id = ?",[a1]),$async$aC)
case 9:a6.Y(new A.a0(a0,A.ag([a1],t.N)))
k=A.bs(l==null?B.q:l,a5)
k.F(0,"id")
a6.bl(new A.aO(a0,a1,B.W,B.u,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aM(a,1,"id = ?",[a1]),$async$aC)
case 10:j=a9
a5=J.K(j)
s=a5.gB(j)?11:12
break
case 11:s=13
return A.a(b.a2("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 13:s=14
return A.a(p.cF(b,a0,a1,a7.c,a4),$async$aC)
case 14:a6.Y(new A.a0(a0,A.ag([a1],t.N)))
s=1
break
case 12:n=a2.y
a2=a2.z
i=A.ca(a3,a5.gC(j),n,a2)
h=A.aB(B.l.v(B.i.v(A.aj(A.b0(a3,i)))).a)
a5=a7.b
g=A.aB(B.l.v(B.i.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.a2("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 18:s=19
return A.a(p.cF(b,a0,a1,a7.c,a4),$async$aC)
case 19:a6.Y(new A.a0(a0,A.ag([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.e.aE(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bb(d,a5,f):A.E(a5,f)
s=23
return A.a(b.G(a,A.ds(a3,J.u(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aC)
case 23:s=24
return A.a(b.a2("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 24:s=25
return A.a(p.cF(b,a0,a1,a7.c,a4),$async$aC)
case 25:a6.Y(new A.a0(a0,A.ag([a1],a5)))
k=A.bs(i,c)
k.F(0,"id")
a6.bl(new A.aO(a0,a1,B.W,B.u,i,c,k))
s=21
break
case 22:g=A.aB(B.l.v(B.i.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.G("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 26:s=27
return A.a(b.G("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aC)
case 27:s=28
return A.a(b.G(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aC)
case 28:a6.Y(new A.a0(a0,A.ag([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aC,r)},
cF(a,b,c,d,e){return this.qJ(a,b,c,d,e)},
qJ(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$cF=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.G("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$cF)
case 2:s=3
return A.a(a.G(q.a.aa(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$cF)
case 3:return A.e(null,r)}})
return A.f($async$cF,r)},
w4(a,b,c,d,e){return this.a.V(new A.ql(c,e,d,B.a5,a,b),t.H)},
mg(a,b,c,d,e,f){return this.a.V(new A.qk(this,c,f,b,a,d,e),t.H)},
hI(a,b,c,d,e){return this.mg(a,b,c,d,B.a6,e)},
mf(a,b,c){return this.a.V(new A.qj(a,c,b),t.H)},
wb(){return this.a.V(new A.qm(null),t.S)},
en(a,b,c,d,e,f,g){return this.ts(a,b,c,d,e,f,g)},
ts(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$en=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.G("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$en)
case 2:p=A.E(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.G("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$en)
case 3:return A.e(null,r)}})
return A.f($async$en,r)}}
A.qn.prototype={
$1(a){return this.mZ(a)},
mZ(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=q.a
n=o.a.e
m=n.at
l=q.b
k=l.length
n.at=m+k
p=0
case 2:if(!(p<l.length)){s=4
break}s=5
return A.a(o.aC(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.B)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.ql.prototype={
$1(a){return this.mX(a)},
mX(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.G("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.qk.prototype={
$1(a){return this.mW(a)},
mW(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.az(0,"lp_dead_letter",A.m(["at",q.a.a.Q.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.G("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.qj.prototype={
$1(a){return this.mV(a)},
mV(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.G("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:6}
A.qm.prototype={
$1(a){return this.mY(a)},
mY(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.G("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:91}
A.dx.prototype={
a7(){return"ApplyResult."+this.b}}
A.kr.prototype={}
A.qW.prototype={
cU(a){return this.vS(a)},
vS(b6){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$cU=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:b0={}
b2=b0
s=3
return A.a(p.d.hR(b6),$async$cU)
case 3:b1=b2.a=b8
if(b1==null)o="1970-01-01 00:00:00.000Z"
else{n=b1.a
m=$.Cq().dE(n)
if(m==null)A.x(A.be('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.av(k)
k=l[2]
k.toString
i=A.av(k)
k=l[3]
k.toString
h=A.av(k)
k=l[4]
k.toString
g=A.av(k)
k=l[5]
k.toString
f=A.av(k)
k=l[6]
k.toString
e=A.av(k)
l=l[7]
l.toString
d=A.av(l)
if(i<1||i>12||g>23||f>59||e>59)A.x(A.be('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.xF(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.qM(k))A.x(A.be('Bad timestamp "'+n+'"'))
n=A.xF(j,i,h,g,f,e,d)
c=n.b
b=B.c.aG(c,1000)
l=n.c
o=A.Hd(new A.b2(A.ol(n.a+B.c.R(c-b,1000)+-5000,b,l),b,l))}a=b0.b=b0.c=b0.d=0
a0=B.c.jU(B.c.cK(200,1,500))
n=p.f,l=t.P,k=p.a,a1=k.e,k=k.ch,a2=p.b,a3='No store "'+b6+'" registered in this LocalPocket.',a4=null
case 4:if(!(a5=!1,!0)){s=5
break}a6=a2.z
a6===$&&A.v()
s=6
return A.a(a6.eF(b6,null,a4,o,null,a0),$async$cU)
case 6:a7=b8
a6=J.K(a7)
if(a6.gB(a7)){s=5
break}++a1.ax
a8=p.qL(a7)
a9=k.h(0,b6)
if(a9==null)A.x(A.w(a3))
b2=n
b3=A
b4=b0
b5=b6
s=8
return A.a(A.yL(a9.a,a7),$async$cU)
case 8:s=7
return A.a(b2.aT(new b3.r3(b4,p,b5,b8,a8),l),$async$cU)
case 7:o=a8.c
a4=a8.a;++a
if(a6.gl(a7)<a0){s=5
break}if(a>=100){a5=!0
s=5
break}s=4
break
case 5:q=new A.kr(b0.d,a5)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cU,r)},
ly(a,b){var s=B.a.T(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.T(a.a,b.b)<=0},
t2(a,b){var s=B.a.T(a.c,b.c)
if(s!==0)return s>0
return B.a.T(a.a,b.a)>0},
qL(a){var s,r,q,p=J.ay(a),o=p.gC(a)
for(p=p.b5(a,1),s=p.$ti,p=new A.a9(p,p.gl(0),s.i("a9<S.E>")),s=s.i("S.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.t2(q,o))o=q}return o},
ho(a){return this.uG(a)},
uG(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$ho=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aT(new A.qY(o,p,a),t.P),$async$ho)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ho,r)},
cO(a,b){return this.uI(a,b)},
uI(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$cO=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.k_(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.ch,e=n.b,d=A.a8(j),c=d.c,d=d.i("c4<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.c4(j,0,200,d)
a2.ia(j,0,200,c)
a3=a2.dT(0)
a4=a3.length
b&1&&A.C(j,18)
A.aX(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.z
a7===$&&A.v()
s=12
return A.a(a7.bH(l),$async$cO)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.I(b1)
if(a7 instanceof A.ci){J.bV(m,l)
s=6
break}else if(a7 instanceof A.bH)throw b1
else if(a7 instanceof A.bh){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.bV(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.B)(a3),++a6
s=5
break
case 7:s=J.ao(m)!==0?13:14
break
case 13:s=15
return A.a(n.eH(b2,m),$async$cO)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.x(A.w(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.B)(a5),++a6)a2.push(A.yM(b0,a5[a6]))
s=16
return A.a(i.aT(new A.r_(n,a2,b2,b0),h),$async$cO)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cO,r)},
dl(a,b,c,d){return this.rd(a,b,c,d)},
rd(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dl=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.E(c,t.nw)
a=A.E(c,t.G)
o=p.a,n=o.y,m=o.z,o=o.ch,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.S(a4,k,B.c.cK(i,0,j))
g=B.b.L(A.aF(h.length,"?",!1,c),", ")
j=[a2]
B.b.E(j,h)
a0=J
s=6
return A.a(a1.ae(u.m+g+")",j),$async$dl)
case 6:j=a0.M(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.J(e),A.kR(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.x(A.w(l))
a0=J
s=9
return A.a(a1.dO(d.a.a,"id IN ("+g+")",h),$async$dl)
case 9:j=a0.M(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.J(e),A.ca(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.au(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dl,r)},
lI(a,b,c,d,e){return this.a0(a,b,A.yM(this.a.aa(b).a,c),null,!1,d,e)},
tx(a,b,c){return this.lI(a,b,c,null,!1)},
a0(a,b,c,d,e,f,g){return this.tw(a,b,c,d,e,f,g)},
lH(a,b,c){return this.a0(a,b,c,null,!1,null,!1)},
tw(a5,a6,a7,a8,a9,b0,b1){var s=0,r=A.h(t.bG),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$a0=A.c(function(b2,b3){if(b2===1)return A.d(b3,r)
for(;;)switch(s){case 0:a0=a5.b
a1=p.a
a2=a1.aa(a6).a
a3=a7.a
a4=a7.e
s=a4!=null?3:4
break
case 3:s=5
return A.a(p.bN(a0,a2,a6,a3,a4),$async$a0)
case 5:q=B.a8
s=1
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
return A.a(p.bN(a0,a2,a6,a3,'Remote store "'+l+'" does not match requested store "'+a6+'".'),$async$a0)
case 8:q=B.a8
s=1
break
case 7:l=a3.a
k=$.yX()
s=!k.b.test(l)?9:10
break
case 9:s=11
return A.a(p.bN(a0,a2,a6,a3,'Invalid remote record id "'+l+'".'),$async$a0)
case 11:q=B.a8
s=1
break
case 10:s=b1?12:14
break
case 12:j=b0
s=13
break
case 14:k=a1.as
k===$&&A.v()
s=15
return A.a(k.bE(a0,a6,l),$async$a0)
case 15:j=b3
case 13:s=a9?16:18
break
case 16:i=a8
s=17
break
case 18:s=19
return A.a(a0.aM(a2.a,1,"id = ?",[l]),$async$a0)
case 19:h=b3
k=J.K(h)
i=k.gB(h)?null:A.ca(a2,k.gC(h),a1.y,a1.z)
case 17:k=a3.e.length!==0||i!=null
s=k?20:21
break
case 20:s=22
return A.a(p.e.cT(a0,l,a3.e,a6),$async$a0)
case 22:case 21:s=i==null?23:24
break
case 23:s=25
return A.a(a0.az(0,a2.a,A.ds(a2,J.u(a4.h(0,"archived"),!0),a1.y,a1.z,l,a4)),$async$a0)
case 25:s=26
return A.a(p.cI(a0,a6,l,p.c.ay.$0(),j,a3.c,B.t,!0),$async$a0)
case 26:a5.Y(new A.a0(a6,A.ag([l],t.N)))
g=A.bs(B.q,a4)
g.F(0,"id")
a5.bl(new A.aO(a6,l,B.a9,B.aw,null,a4,g))
q=B.R
s=1
break
case 24:k=j==null
f=k?null:j.w
if(f==null)f=B.t
s=f===B.t?27:28
break
case 27:n=k?null:j.c
m=a3.c
s=n===m?29:30
break
case 29:s=31
return A.a(p.bP(a5,a6,l,m,!1),$async$a0)
case 31:q=B.S
s=1
break
case 30:s=32
return A.a(a0.G(a2.a,A.ds(a2,J.u(a4.h(0,"archived"),!0),a1.y,a1.z,l,a4),"id = ?",[l]),$async$a0)
case 32:s=33
return A.a(p.cI(a0,a6,l,p.c.ay.$0(),j,m,B.t,!0),$async$a0)
case 33:a5.Y(new A.a0(a6,A.ag([l],t.N)))
g=A.bs(i,a4)
g.F(0,"id")
a5.bl(new A.aO(a6,l,B.a9,B.u,i,a4,g))
q=B.R
s=1
break
case 28:s=f===B.a5||f===B.aX||f===B.Q?34:35
break
case 34:a4=k?null:j.e
e=a3.c
s=a4===e?36:37
break
case 36:s=38
return A.a(p.bP(a5,a6,l,e,!1),$async$a0)
case 38:q=B.S
s=1
break
case 37:s=f===B.Q?39:40
break
case 39:s=41
return A.a(p.bP(a5,a6,l,e,!1),$async$a0)
case 41:q=B.S
s=1
break
case 40:d=A.b0(a2,i)
s=A.aj(d)===n?42:43
break
case 42:s=44
return A.a(a0.a2("lp_outbox","store = ? AND record_id = ?",[a6,l]),$async$a0)
case 44:s=45
return A.a(p.cI(a0,a6,l,p.c.ay.$0(),j,e,B.t,!0),$async$a0)
case 45:a5.Y(new A.a0(a6,A.ag([l],t.N)))
q=B.R
s=1
break
case 43:c=A.eq(k?null:j.r)
a4=A.BC(c,d,new A.k4(null,B.aK,!1),l,o,a6)
s=46
return A.a(t.fr.b(a4)?a4:A.bk(a4,t.r),$async$a0)
case 46:b=b3
s=b.b?47:48
break
case 47:s=49
return A.a(p.ef(a0,a6,a3,a2,j,d,b),$async$a0)
case 49:s=50
return A.a(p.bP(a5,a6,l,e,!1),$async$a0)
case 50:a1=t.N
a5.Y(new A.a0(a6,A.ag([l],a1)))
a5.Y(new A.a0("lp_conflicts",A.ag([l],a1)))
q=B.b_
s=1
break
case 48:a=b.a
s=51
return A.a(a0.G(a2.a,A.ds(a2,J.u(a.h(0,"archived"),!0),a1.y,a1.z,l,a),"id = ?",[l]),$async$a0)
case 51:a1=a1.as
a1===$&&A.v()
s=52
return A.a(a1.en(a0,a6,l,m,n,e,A.aj(a)),$async$a0)
case 52:s=53
return A.a(p.t_(a5,a6,l,e),$async$a0)
case 53:a5.Y(new A.a0(a6,A.ag([l],t.N)))
g=A.bs(i,a)
g.F(0,"id")
a5.bl(new A.aO(a6,l,B.W,B.u,i,a,g))
q=B.R
s=1
break
case 35:q=B.S
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$a0,r)},
ef(a,b,c,d,e,f,g){return this.rz(a,b,c,d,e,f,g)},
rz(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i
var $async$ef=A.c(function(h,a0){if(h===1)return A.d(a0,r)
for(;;)switch(s){case 0:m=e==null
l=A.eq(m?null:e.r)
k=A.b0(d,A.ep(d,c))
j=A.bs(l,f)
i=A.P(j,A.o(j).c)
B.b.aW(i)
j=A.bs(l,k)
p=A.P(j,A.o(j).c)
B.b.aW(p)
j=c.a
m=m?null:e.r
if(m==null)m=A.aj(l)
o=t.N
n=t.X
s=2
return A.a(a.bV(0,"lp_conflicts",A.m(["store",b,"record_id",j,"base_json",m,"local_json",A.aj(f),"remote_json",A.aj(k),"dirty_local",B.e.a4(i,null),"dirty_remote",B.e.a4(p,null),"detected_at",q.c.ay.$0()],o,n),B.I),$async$ef)
case 2:s=3
return A.a(a.G("lp_sync_row",A.m(["sync_state","conflict","base_json",A.aj(k),"base_hash",A.aB(B.l.v(B.i.v(A.aj(A.b0(d,k)))).a),"base_updated",c.c],o,n),"store = ? AND record_id = ?",[b,j]),$async$ef)
case 3:return A.e(null,r)}})
return A.f($async$ef,r)},
bN(a,b,c,d,e){return this.rr(a,b,c,d,e)},
rr(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bN=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.e.a4(d.d,null)}catch(a1){o=t.N
e=B.e.a4(A.m(["raw",d.d.m(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.az(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bN)
case 2:j=q.a.as
j===$&&A.v()
s=3
return A.a(j.bE(a,c,m),$async$bN)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.R(o.lW(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.az(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bN)
case 7:s=5
break
case 6:s=8
return A.a(a.G("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bN)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bN,r)},
cI(a,b,c,d,e,f,g,h){return this.t6(a,b,c,d,e,f,g,!0)},
t6(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$cI=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.aa(b)
o=A.E(t.N,t.X)
o.j(0,"store",b)
o.j(0,"record_id",c)
o.j(0,"remote_updated",f)
o.j(0,"last_seen_at",d)
o.j(0,"sync_state",g.b)
o.j(0,"access_state","visible")
o.j(0,"schema_ver",p.a.b)
p=g===B.t
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
return A.a(a.az(0,"lp_sync_row",o),$async$cI)
case 5:s=3
break
case 4:s=6
return A.a(a.G("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$cI)
case 6:case 3:return A.e(null,r)}})
return A.f($async$cI,r)},
bP(a,b,c,d,e){return this.t0(a,b,c,d,e)},
t_(a,b,c,d){return this.bP(a,b,c,d,!0)},
t0(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bP=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.E(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.G("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$bP)
case 2:s=3
return A.a(p.G(q.a.aa(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$bP)
case 3:if(g>0)a.Y(new A.a0(b,A.ag([c],o)))
return A.e(null,r)}})
return A.f($async$bP,r)},
eH(a,b){return this.vB(a,b)},
vB(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.k_(b,!0,t.N)
n=A.a8(o),m=n.c,n=n.i("c4<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.c4(o,0,500,n)
i.ia(o,0,500,m)
h=i.dT(0)
g=h.length
l&1&&A.C(o,18)
A.aX(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aT(new A.r1(p,a,h),j),$async$eH)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$eH,r)}}
A.r3.prototype={
$0(){var s=this,r=s.b
return r.a.V(new A.r2(s.a,r,s.c,s.d,s.e),t.P)},
$S:16}
A.r2.prototype={
$1(a){return this.n3(a)},
n3(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.aa(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.ay(p),n=o.gu(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dl(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aU(t.N)
a2=o.gu(p),a0=a0.e
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.ly(i,c)){s=3
break}p=i.a
s=j.D(0,p)?5:7
break
case 5:s=8
return A.a(a.lH(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a0(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
case 9:h=a6
j.t(0,p)
case 6:switch(h.a){case 0:++d.d;++a0.ay
break
case 1:++d.c
break
case 2:++d.b
break
case 3:break}s=3
break
case 4:g=c==null||!a.ly(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.dV(b,a1,e,f),$async$$1)
case 10:d.a=new A.hJ(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.qY.prototype={
$0(){var s=this.b
return s.a.V(new A.qX(this.a,s,this.c),t.P)},
$S:16}
A.qX.prototype={
$1(a){return this.n0(a)},
n0(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.as
k===$&&A.v()
o=p.c
n=o.b
s=3
return A.a(k.bE(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.tx(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.t){s=1
break}k=m.c
if(k!=null&&B.a.T(o.c,k)<=0){s=1
break}s=7
return A.a(l.lI(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.r_.prototype={
$0(){var s=this,r=s.a
return r.a.V(new A.qZ(r,s.b,s.c,s.d),t.P)},
$S:16}
A.qZ.prototype={
$1(a){return this.n1(a)},
n1(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.B)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dl(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aU(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.D(0,g)?6:8
break
case 6:s=9
return A.a(o.lH(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a0(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.t(0,g)
case 7:case 4:p.length===e||(0,A.B)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.r1.prototype={
$0(){var s=this.a
return s.a.V(new A.r0(s,this.b,this.c),t.P)},
$S:16}
A.r0.prototype={
$1(a){return this.n2(a)},
n2(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.aa(g).a
e=h.aa(g).a.a
d=q.c
c=t.N
b=B.b.L(A.aF(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.E(c,t.G)
a1=J
s=2
return A.a(i.dO(e,a,d),$async$$1)
case 2:p=a1.M(a4),o=h.y,h=h.z
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.J(m),A.ca(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.m(["access_state","hidden"],c,h)
o=[g]
B.b.E(o,d)
s=5
return A.a(i.G("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.G(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.Y(new A.a0(g,A.pt(d,A.a8(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.B)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.hk(null,null,c,h)
p.E(0,j)
p.j(0,"hidden",!0)
a2.bl(new A.aO(g,k,B.a9,B.bl,j,p,B.cq))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.aN.prototype={}
A.r4.prototype={
eO(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$eO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.as
f===$&&A.v()
s=3
return A.a(f.eu(25,p.c.ay.$0()),$async$eO)
case 3:o=b
f=J.K(o)
if(f.gB(o)){q=B.N
s=1
break}if(p.f){q=p.b9(o)
s=1
break}f=f.gu(o),n=B.N
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dn(f.gn()),$async$eO)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.aN(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eO,r)},
dn(a){return this.rn(a)},
rn(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dn=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.as
l===$&&A.v()
m=m.b
s=3
return A.a(l.dP(m,a.a,a.b),$async$dn)
case 3:o=c
if(o==null){q=B.N
s=1
break}s=4
return A.a(l.bE(m,o.a,o.b),$async$dn)
case 4:n=c
if(n==null){q=B.N
s=1
break}if(o.e==null){q=p.rl(o,n)
s=1
break}q=p.iU(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dn,r)},
bu(a,b,c,d,e){return this.pS(a,b,c,d,e)},
pR(a,b,c,d){return this.bu(a,b,c,!1,d)},
pP(a,b,c){return this.bu(a,b,c,!1,!1)},
pQ(a,b,c,d){return this.bu(a,b,c,d,!1)},
pS(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bu=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bu)
case 7:k=g
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.I(i)
s=k instanceof A.bH?8:10
break
case 8:n.e.$0()
q=B.a4
s=1
break
s=9
break
case 10:s=k instanceof A.cf?11:13
break
case 11:k=n.a.as
k===$&&A.v()
s=14
return A.a(k.mf("forbidden_push",a.b,a.a),$async$bu)
case 14:q=B.cm
s=1
break
s=12
break
case 13:s=k instanceof A.eL?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.e2(a,"validation_push",m.a),$async$bu)
case 20:q=B.a3
s=1
break
case 19:q=n.ca(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.ci){q=n.e5(a,b,!e)
s=1
break}else if(k instanceof A.bh){l=k
q=n.ca(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bu,r)},
iT(a,b,c){return this.rm(a,b,c)},
rl(a,b){return this.iT(a,b,!1)},
rm(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$iT=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bu(a,b,new A.r6(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iT,r)},
iX(a,b,c){return this.rA(a,b,c)},
rA(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$iX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.pR(a,b,new A.rb(p,a,p.a.aa(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iX,r)},
iU(a,b){return this.ro(a,b)},
ro(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$iU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.pP(a,b,new A.r9(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iU,r)},
dq(a,b,c,d){return this.rq(a,b,c,d)},
rp(a,b,c){return this.dq(a,b,c,!1)},
rq(a,b,c,d){var s=0,r=A.h(t.e),q,p=this,o,n
var $async$dq=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p.ku(a,c)
o=p.a.aa(a.a).a
s=A.aB(B.l.v(B.i.v(A.aj(A.b0(o,A.ep(o,c))))).a)===A.aB(B.l.v(B.i.v(a.d)).a)?3:4
break
case 3:s=5
return A.a(p.ej(a,c),$async$dq)
case 5:q=B.O
s=1
break
case 4:s=6
return A.a(p.di(a,b,c,o),$async$dq)
case 6:n=f
if(n==null){q=B.aQ
s=1
break}q=p.bu(a,b,new A.r7(p,a,A.aj(A.b0(o,n.a)),c,n),!0,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
b9(a){return this.rk(a)},
rk(c5){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4
var $async$b9=A.c(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:b5=A.l([],t.k1)
b6=t.N
b7=A.E(b6,t.G)
b8=0
b9=0
c0=0
c1=0
c2=0
c3=A.E(b6,b6)
b6=J.M(c5),g=n.a,f=g.e,e=n.b,d=g.ch,c=g.b
case 3:if(!b6.k()){s=4
break}b=b6.gn()
a=g.as
a===$&&A.v()
s=5
return A.a(a.dP(c,b.a,b.b),$async$b9)
case 5:m=c7
if(m==null){s=3
break}c3.j(0,m.w,m.d)
s=6
return A.a(a.bE(c,m.a,m.b),$async$b9)
case 6:l=c7
if(l==null){s=3
break}b=m.a
a0=d.h(0,b)
if(a0==null)A.x(A.w('No store "'+b+'" registered in this LocalPocket.'))
a1=a0.a
k=null
p=8;++f.as
b=m.b
a2=e.z
a2===$&&A.v()
s=11
return A.a(a2.bH(b),$async$b9)
case 11:k=c7
p=2
s=10
break
case 8:p=7
c4=o.pop()
b=A.I(c4)
s=b instanceof A.ci?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.kX(m,l),$async$b9)
case 17:j=c7
b8+=j.a
b9+=j.b
c0+=j.c
c1+=j.d
c2+=j.e
s=3
break
case 16:k=null
s=13
break
case 14:s=b instanceof A.bH?18:20
break
case 18:n.e.$0()
q=B.a4
s=1
break
s=19
break
case 20:s=b instanceof A.cf?21:23
break
case 21:b=m.a
s=24
return A.a(a.mf("forbidden_push",m.b,b),$async$b9)
case 24:++c1
s=3
break
s=22
break
case 23:s=b instanceof A.bh?25:27
break
case 25:i=b
s=28
return A.a(n.ca(m,l,i),$async$b9)
case 28:h=c7
b8+=h.a
b9+=h.b
s=3
break
s=26
break
case 27:throw c4
case 26:case 22:case 19:case 13:s=10
break
case 7:s=2
break
case 10:s=k!=null?29:30
break
case 29:b=k.a
a=m.b
if(b!==a)A.x(A.hq('record id "'+b+'" does not match requested "'+a+'"'))
a4=new A.ab("")
A.fK(a4,A.b0(a1,A.ep(a1,k)))
b=a4.a
b=B.i.v(b.charCodeAt(0)==0?b:b)
a5=new A.ew()
a=A.m0(a5)
a.t(0,b)
a.p()
a6=A.aB(a5.a.a)
a=B.i.v(m.d)
a5=new A.ew()
b=A.m0(a5)
b.t(0,a)
b.p()
s=a6===A.aB(a5.a.a)?31:32
break
case 31:s=33
return A.a(n.ej(m,k),$async$b9)
case 33:++b8
s=3
break
case 32:s=34
return A.a(n.di(m,l,k,a1),$async$b9)
case 34:a7=c7
if(a7==null){++c0
s=3
break}b=m.w
a=m.a
a2=m.b
a8=a7.a
a4=new A.ab("")
A.fK(a4,A.b0(a1,a8))
a9=a4.a
b0=m.e==null?null:k.c
b5.push(new A.eN(b,a,a2,a9.charCodeAt(0)==0?a9:a9,b0))
b7.j(0,m.w,a8)
s=3
break
case 30:b5.push(new A.eN(m.w,m.a,m.b,m.d,m.e))
s=3
break
case 4:s=b5.length!==0?35:36
break
case 35:b1=0
case 37:if(!(b2=b5.length,b1<b2)){s=39
break}b3=b1+25
s=40
return A.a(n.bO(B.b.S(b5,b1,b3<b2?b3:b2),b7,c3),$async$b9)
case 40:b4=c7
b8+=b4.a
b9+=b4.b
c0+=b4.c
c2+=b4.e
if(b4.f){q=new A.aN(b8,b9,c0,c1,c2,!0)
s=1
break}case 38:b1=b3
s=37
break
case 39:case 36:q=new A.aN(b8,b9,c0,c1,c2,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b9,r)},
di(a,b,c,d){return this.qM(a,b,c,d)},
qM(a,b,c,d){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$di=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.ep(d,c)
n=A.BC(A.eq(b.r),A.eq(a.d),new A.k4(null,B.aK,!1),a.b,A.b0(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bk(n,t.r),$async$di)
case 3:m=f
s=m.b?4:5
break
case 4:s=6
return A.a(p.h_(a,b,c,m),$async$di)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$di,r)},
bO(a,b,c){return this.rP(a,b,c)},
rP(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$bO=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.z
a7===$&&A.v()
s=7
return A.a(a7.eN(b9),$async$bO)
case 7:m=c3
a7=t.N
l=A.E(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.B)(b9),++a9){k=b9[a9]
J.bU(l,k.a,k)}j=l
i=A.aU(a7)
for(l=J.M(m);l.k();){h=l.gn()
if(!J.bV(i,h.a)){l=A.be("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.H(h.a)){l=A.be("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.M(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.R(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.iN(e,c1.h(0,e.a))
b0=B.i.v(e.d)
b1=new A.ew()
b2=A.m0(b1)
b2.t(0,b0)
b2.p()
b2=A.aB(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.bV(g,new A.hL(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.as
a8===$&&A.v()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.hI(b4,b2,b3,e.d,b0),$async$bO)
case 13:++b7
case 11:s=8
break
case 9:l=a7.as
l===$&&A.v()
s=14
return A.a(l.kd(g),$async$bO)
case 14:l=b6
a7=b7
q=new A.aN(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.I(b8)
s=l instanceof A.dy?15:17
break
case 15:q=n.bL(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cf?18:20
break
case 18:n.f=!1
d=0
c=0
b=0
a=!1
l=b9.length,a9=0
case 21:if(!(a9<b9.length)){s=23
break}a0=b9[a9]
s=24
return A.a(n.dn(n.l2(a0)),$async$bO)
case 24:a1=c3
b6+=a1.a
b7+=a1.b
d+=a1.c
c+=a1.d
b+=a1.e
a=a||a1.f
case 22:b9.length===l||(0,A.B)(b9),++a9
s=21
break
case 23:q=new A.aN(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.bH?25:27
break
case 25:n.e.$0()
q=B.a4
s=1
break
s=26
break
case 27:s=l instanceof A.bh?28:30
break
case 28:a2=l
a3=a2 instanceof A.dX?a2:new A.f_("network error")
l=b9.length,a7=n.a,a8=a7.b,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.as
b0===$&&A.v()
s=34
return A.a(b0.bE(a8,a4.b,a4.c),$async$bO)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.ca(n.l2(a4),a5,a3),$async$bO)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.B)(b9),++a9
s=31
break
case 33:q=new A.aN(b6,b7,0,0,0,!0)
s=1
break
s=29
break
case 30:throw b8
case 29:case 26:case 19:case 16:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bO,r)},
bL(a,b,c){return this.o5(a,b,c)},
o5(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bL=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.K(b5)
s=b3.gl(b5)===1?3:4
break
case 3:g=b3.gan(b5)
h=n.a.as
h===$&&A.v()
b3=g.b
s=5
return A.a(h.hI("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bL)
case 5:q=B.a3
s=1
break
case 4:a0=B.c.R(b3.gl(b5),2)
m=0
l=0
k=!1
b3=[b3.S(b5,0,a0),b3.aX(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.z
a6===$&&A.v()
s=13
return A.a(a6.eN(j),$async$bL)
case 13:i=b9
h=A.E(a2,a4)
for(a6=J.M(j);a6.k();){g=a6.gn()
J.bU(h,g.a,g)}f=h
e=A.aU(a2)
for(a6=J.M(i);a6.k();){d=a6.gn()
if(!J.bV(e,d.a)){a6=A.be("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.H(d.a)){a6=A.be("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.M(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.R(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.iN(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dt(a7,a8,a9,b0==null?b.d:b0),$async$bL)
case 19:++m
s=17
break
case 18:a7=a1.as
a7===$&&A.v()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.hI(b1,a9,b0,b.d,a8),$async$bL)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.I(b4)
s=a6 instanceof A.dy?21:23
break
case 21:s=24
return A.a(n.bL(j,b6,b7),$async$bL)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bh){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.aN(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bL,r)},
iN(a,b){var s=b==null?a.d:b
return new A.cj(a.b,a.c,B.r,s,a.e,A.aB(B.l.v(B.i.v(a.d)).a),B.o,a.a,0,null)},
l2(a){return this.iN(a,null)},
dt(a,b,c,d){return this.rT(a,b,c,d)},
ej(a,b){return this.dt(a,b,null,null)},
rT(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dt=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aa(a.a).a
n=A.ep(o,b)
m=d==null
l=m?A.aj(A.b0(o,n)):d
p=p.as
p===$&&A.v()
s=2
return A.a(p.kd(A.l([new A.hL(a,l,b.c,A.aB(B.l.v(B.i.v(m?a.d:d)).a),c)],t.bo)),$async$dt)
case 2:return A.e(null,r)}})
return A.f($async$dt,r)},
ku(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.hq('record id "'+s+'" does not match requested "'+r+'"'))},
ca(a,b,c){return this.rH(a,b,c)},
rH(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$ca=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.dX?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.as
o===$&&A.v()
s=5
return A.a(o.mg(c.a,a.b,"max_attempts",a.d,B.a6,a.a),$async$ca)
case 5:q=B.a3
s=1
break
case 4:o=p.c
n=o.lX(l,k)
m=p.a.as
m===$&&A.v()
s=6
return A.a(m.w4(a.a,a.b,l,c.a,o.ay.$0()+B.c.R(n.a,1000)),$async$ca)
case 6:q=B.a4
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ca,r)},
e2(a,b,c){return this.ot(a,b,c)},
os(a,b){return this.e2(a,b,null)},
ot(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$e2=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.as
o===$&&A.v()
p=c==null?b:c
s=2
return A.a(o.hI(p,a.b,b,a.d,a.a),$async$e2)
case 2:return A.e(null,r)}})
return A.f($async$e2,r)},
e5(a,b,c){return this.pG(a,b,c)},
kX(a,b){return this.e5(a,b,!0)},
pG(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$e5=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.a.aa(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:s=6
return A.a(p.fh(a,b),$async$e5)
case 6:q=B.aQ
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$e5,r)},
fh(a,b){return this.oF(a,b)},
oF(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$fh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=b.r
o=A.eq(p)
n=A.eq(a.d)
m=A.bs(o,n)
l=A.P(m,A.o(m).c)
B.b.aW(l)
if(p==null)p=A.aj(o)
s=2
return A.a(q.a.V(new A.r5(q,a,p,n,l),t.P),$async$fh)
case 2:return A.e(null,r)}})
return A.f($async$fh,r)},
h_(a,b,c,d){return this.rw(a,b,c,d)},
rw(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$h_=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=q.a
n=o.aa(a.a).a
m=A.ep(n,c)
l=A.eq(b.r)
k=A.eq(a.d)
j=A.b0(n,m)
i=A.bs(l,k)
h=A.P(i,A.o(i).c)
B.b.aW(h)
i=A.bs(l,j)
p=A.P(i,A.o(i).c)
B.b.aW(p)
s=2
return A.a(o.V(new A.ra(q,a,b,l,k,j,h,p,n,c),t.P),$async$h_)
case 2:return A.e(null,r)}})
return A.f($async$h_,r)}}
A.r6.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.hi(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.ej(k,m),$async$$0)
case 8:q=B.O
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.I(h) instanceof A.ex){q=n.a.iX(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:17}
A.rb.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bH(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.os(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.a3
s=1
break
case 5:l=p.c
s=A.aB(B.l.v(B.i.v(A.aj(A.b0(l,A.ep(l,o))))).a)===A.aB(B.l.v(B.i.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.ej(m,o),$async$$0)
case 9:q=B.O
s=1
break
case 8:q=n.dq(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.r9.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bH(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.kX(m,p.c)
s=1
break}n.ku(m,o)
if(o.c===m.e){l=p.c
q=n.pQ(m,l,new A.r8(n,m,o,l),!0)
s=1
break}q=n.rp(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.r8.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.eY(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.ej(k,m),$async$$0)
case 8:q=B.O
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:17}
A.r7.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.z
l===$&&A.v()
k=o
j=n
s=4
return A.a(l.eY(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dt(j,b,p.e.a,m),$async$$0)
case 3:q=B.O
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:17}
A.r5.prototype={
$1(a){return this.n4(a)},
n4(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.bV(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.aj(q.d),"remote_json",A.aj(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.e.a4(q.e,null),"dirty_remote",B.e.a4(B.o,null),"detected_at",q.a.c.ay.$0()],k,j),B.I),$async$$1)
case 2:s=3
return A.a(p.G("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.Y(new A.a0(n,A.ag([m],k)))
a.Y(new A.a0("lp_conflicts",A.ag([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ra.prototype={
$1(a){return this.n5(a)},
n5(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=q.b
j=k.a
k=k.b
p=q.c.r
if(p==null)p=A.aj(q.d)
o=q.f
n=t.N
m=t.X
s=2
return A.a(l.bV(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.aj(q.e),"remote_json",A.aj(o),"dirty_local",B.e.a4(q.r,null),"dirty_remote",B.e.a4(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.I),$async$$1)
case 2:s=3
return A.a(l.G("lp_sync_row",A.m(["sync_state","conflict","base_json",A.aj(o),"base_hash",A.aB(B.l.v(B.i.v(A.aj(A.b0(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.Y(new A.a0(j,A.ag([k],n)))
a.Y(new A.a0("lp_conflicts",A.ag([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bN.prototype={
a7(){return"SyncEngineState."+this.b}}
A.b5.prototype={
m(a){var s=this
return"SyncReport(pulled: "+s.a.m(0)+", swept: "+s.b.m(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.eY.prototype={}
A.eX.prototype={}
A.rF.prototype={
gkx(){return 36},
d9(a){return this.nN(a)},
nN(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$d9=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.ch,g=new A.bK(g,g.r,g.e,A.o(g).i("bK<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.hS(m),$async$d9)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gkx():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.aG(c.a+1,n.gkx())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bq(m,a),$async$d9)
case 13:a5.bV(a6,a9)
case 11:++j
s=10
break
case 12:s=14
return A.a(h.V(new A.rG(c,n,m,a3),f),$async$d9)
case 14:p=2
s=8
break
case 6:p=5
a4=o.pop()
i=A.I(a4)
if(a2==null)a2=i
s=8
break
case 5:s=2
break
case 8:s=3
break
case 4:if(a2!=null)throw A.b(a2)
q=a1
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d9,r)},
bq(a,b){return this.nM(a,b)},
nM(a4,a5){var s=0,r=A.h(t.eg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bq=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.O("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aU(t.N)
m=B.c.jU(B.c.cK(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.z
g===$&&A.v()
s=5
return A.a(g.eF(a4,B.c5,h,null,o,m),$async$bq)
case 5:f=a7
g=J.K(f)
if(g.gB(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.l([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.fZ(a4,e),$async$bq)
case 6:c=a7
b=A.l([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.ao||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.cO(a4,b),$async$bq)
case 9:i+=b.length
case 8:h=g.ga1(f).a
if(g.gl(f)<m){s=4
break}s=3
break
case 4:k=p.a.b
g=o+"%"
s=10
return A.a(k.ae("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bq)
case 10:a1=a7
a2=A.l([],l)
for(e=J.M(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.J(a)
if(!n.D(0,a)){if(J.u(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.eH(a4,a2),$async$bq)
case 13:case 12:s=14
return A.a(k.ae("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bq)
case 14:a3=a7
k=J.K(a3)
s=k.gW(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.J(g))}s=17
return A.a(j.cO(a4,l),$async$bq)
case 17:case 16:q=new A.eX(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bq,r)},
fZ(a,b){return this.rf(a,b)},
rf(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$fZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.E(g,t.nw)
o=p.a.b,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.S(b,n,B.c.cK(l,0,m))
j=B.b.L(A.aF(k.length,"?",!1,g),", ")
m=[a]
B.b.E(m,k)
e=J
s=6
return A.a(o.ae(u.m+j+")",m),$async$fZ)
case 6:m=e.M(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.J(h),A.kR(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fZ,r)}}
A.rG.prototype={
$1(a){return this.n7(a)},
n7(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.dW(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bh.prototype={
m(a){return A.iU(this).m(0)+": "+this.a},
$iL:1}
A.f_.prototype={}
A.dX.prototype={}
A.hP.prototype={}
A.bH.prototype={}
A.cf.prototype={}
A.ci.prototype={}
A.eL.prototype={}
A.eM.prototype={}
A.ex.prototype={}
A.dy.prototype={}
A.eV.prototype={
gl(a){return this.b}}
A.ck.prototype={}
A.eN.prototype={}
A.hK.prototype={}
A.j7.prototype={
a7(){return"BackendHintKind."+this.b}}
A.cd.prototype={}
A.x2.prototype={
$2(a,b){return B.a.jH(B.c.m(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:94}
A.rH.prototype={
lX(a,b){var s,r,q,p,o,n
if(b!=null){s=this.r6(b)
if(A.aE(s))return A.dH(0,0,s<0?0:s)
if(s instanceof A.b2){r=s.a-this.ay.$0()
return r<=0?B.x:A.dH(0,r,0)}return B.ay}q=a<1?1:a
p=1e6
o=1
for(;;){if(!(o<q&&p<3e8))break
n=p*2
p=n>3e8?3e8:n;++o}return A.dH(B.v.mv(p*J.CD(this.at.$1(q),0.5,1.5)),0,0)},
lW(a){return this.lX(a,null)},
r6(a){var s=B.a.d_(a),r=A.hH(s,null)
if(r!=null)return r
return A.Ec(s)}}
A.hJ.prototype={}
A.hV.prototype={}
A.rS.prototype={
hR(a){return this.w0(a)},
w0(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eQ("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hR)
case 3:m=c
l=J.K(m)
if(l.gB(m)){q=null
s=1
break}o=A.ac(J.R(l.gC(m),"cursor_updated"))
n=A.ac(J.R(l.gC(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.hJ(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
dV(a,b,c,d){return this.wC(a,b,c,d)},
wC(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dV=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dV)
case 5:s=m.bW(f)?2:4
break
case 2:s=6
return A.a(a.az(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$dV)
case 6:s=3
break
case 4:s=7
return A.a(a.G("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$dV)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dV,r)},
hS(a){return this.w2(a)},
w2(a){var s=0,r=A.h(t.k5),q,p=this,o,n,m
var $async$hS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.eQ("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$hS)
case 3:n=c
m=J.K(n)
if(m.gB(n)){q=B.cy
s=1
break}o=A.aZ(J.R(m.gC(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.hV(o,A.aZ(J.R(m.gC(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)},
dW(a,b,c,d){return this.wG(a,b,c,d)},
wG(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$dW=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aM("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$dW)
case 5:s=m.bW(f)?2:4
break
case 2:s=6
return A.a(a.az(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$dW)
case 6:s=3
break
case 4:s=7
return A.a(a.G("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$dW)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dW,r)},
hg(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.b.aR("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hg)
case 3:l=b
k=J.K(l)
j=k.gB(l)?B.q:k.gC(l)
k=A.aZ(j.h(0,"pending"))
if(k==null)k=0
o=A.aZ(j.h(0,"conflicts"))
if(o==null)o=0
n=A.aZ(j.h(0,"hidden"))
if(n==null)n=0
m=A.aZ(j.h(0,"blocked"))
q=new A.lT([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)}}
A.cn.prototype={
a7(){return"SyncState."+this.b}}
A.fO.prototype={
a7(){return"AccessState."+this.b}}
A.eK.prototype={
a7(){return"OutboxKind."+this.b}}
A.hC.prototype={
a7(){return"OpQueueKind."+this.b}}
A.xn.prototype={
$1(a){return'"'+a+'"'},
$S:7}
A.cm.prototype={}
A.rR.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.J(i)
i=j.h(0,"record_id")
i.toString
A.J(i)
i=A.ac(j.h(0,"remote_updated"))
s=A.aZ(j.h(0,"last_seen_at"))
r=A.ac(j.h(0,"base_updated"))
A.ac(j.h(0,"base_hash"))
q=A.ac(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.ez(B.bR,A.J(p))
A.Br(j.h(0,"dirty_fields"))
o=A.aZ(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.ez(B.bP,A.J(n))
A.ac(j.h(0,"op_id"))
m=A.aZ(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.aZ(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.ac(j.h(0,"last_error"))
A.aZ(j.h(0,"schema_ver"))
return new A.cm(i,s,r,q,p,o,n,m,l,k)},
$S:95}
A.cj.prototype={}
A.qi.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.J(i)
s=j.h(0,"record_id")
s.toString
A.J(s)
r=j.h(0,"kind")
r.toString
r=A.ez(B.c_,A.J(r))
q=j.h(0,"payload_json")
q.toString
A.J(q)
p=A.ac(j.h(0,"base_updated"))
o=A.ac(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Br(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.J(m)
l=j.h(0,"created_at")
l.toString
A.ai(l)
k=j.h(0,"updated_at")
k.toString
A.ai(k)
return new A.cj(i,s,r,q,p,o,n,m,l,A.ac(j.h(0,"depends_on_op")))},
$S:96}
A.dV.prototype={}
A.qc.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ai(l)
l=m.h(0,"op_id")
l.toString
A.J(l)
s=m.h(0,"store")
s.toString
A.J(s)
r=m.h(0,"record_id")
r.toString
A.J(r)
q=m.h(0,"kind")
q.toString
q=A.ez(B.bW,A.J(q))
p=m.h(0,"payload_json")
p.toString
A.J(p)
o=m.h(0,"state")
o.toString
A.J(o)
o=A.aZ(m.h(0,"attempt_count"))
if(o==null)o=0
A.aZ(m.h(0,"next_retry_at"))
A.ac(m.h(0,"last_error"))
n=A.ac(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ai(m)
return new A.dV(l,s,r,q,p,o,n)},
$S:97}
A.xl.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.J(s)},
$S:55}
A.xm.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.J(s)},
$S:55}
A.jm.prototype={
ke(a){return a.a===this.w.a},
bS(){var s=0,r=A.h(t.J),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$bS=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:e=p.a
b=A
a=p.w
s=3
return A.a(e.mA(p.x,p.y),$async$bS)
case 3:d=b.Bq(a,a1,e.y,e.z)
c=p.z
if(c==null){q=d
s=1
break}e=A.l([],t.d)
for(o=d.length,n=c.$ti,m=n.i("a9<D.E>"),n=n.i("D.E"),l=t.N,k=t.X,j=0;j<d.length;d.length===o||(0,A.B)(d),++j){i=d[j]
h=A.E(l,k)
for(g=new A.a9(c,c.gl(0),m);g.k();){f=g.d
if(f==null)f=n.a(f)
if(i.H(f))h.j(0,f,i.h(0,f))}e.push(h)}q=e
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bS,r)},
jf(a){return A.GY(a,new A.np(this),!1)},
mi(a){return this.as.$1(a)},
jG(a,b){return null}}
A.np.prototype={
$1(a){return this.a.a.e.Q+=a},
$S:8}
A.pu.prototype={
cm(a,b){return this.uU(a,b)},
uU(a,b){var s=0,r=A.h(t.X),q,p
var $async$cm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.eo(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cm,r)},
hM(a,b,c,d){return this.vL(a,b,c,d)},
vL(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$hM=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.vH(a6,a7)
a=t.N
a0=new A.jy(A.E(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.ac(A.BL(a2?null:A.mx(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.pv(a3)
a0.e=new A.pw(a3)
p=4
b.J("PRAGMA journal_mode=TRUNCATE")
f=b.f6("PRAGMA journal_mode")
n=f.gC(f).b[0]
if(J.aw(n).toLowerCase()!=="truncate"){a=A.w("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.HB(a2?null:A.mx(a8))
e=t.bE.a(J.R(m,"stores"))
l=e==null?A.l([],t.aw):e
d=A.aZ(J.R(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.AK(J.R(m,"destructiveBackup"))
j=f!==!1
i=A.HA(A.BL(a2?null:A.mx(a8),"fieldCipher"))
if(A.Hi(l,i)){a=A.bi("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.tg(A.E(a,t.p))
s=7
return A.a(A.cz(h,a0,j,i,k,a6,B.cl,l),$async$hM)
case 7:g=b0
a1=!0
a=b
a2=t.S
q=new A.k1(a,new A.tr(a,g,A.E(a2,t.oS),new A.t_(A.E(a2,t.oc)),A.aU(t.be)))
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
if(!a1)b.p()
throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hM,r)}}
A.pv.prototype={
$1(a){return A.mr(this.a,a)},
$S:99}
A.pw.prototype={
$1(a){return A.mt(this.a,a)},
$S:100}
A.k1.prototype={
cm(a,b){return this.uV(a,b)},
uV(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.xW(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.Dz(n)
if(o==null){q=A.xW(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.hy(new A.lu(a),o),$async$cm)
case 3:q=m.DA(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cm,r)}}
A.lu.prototype={$ila:1}
A.wY.prototype={
$2(a,b){this.a.j(0,J.aw(a),A.bG(b))},
$S:34}
A.wS.prototype={
$2(a,b){this.a.j(0,J.aw(a),A.my(b))},
$S:34}
A.l_.prototype={}
A.t_.prototype={}
A.xg.prototype={
$1(a){return A.HC(a)},
$S:101}
A.x7.prototype={
$1(a){return B.b.cJ(a.c,new A.x6())},
$S:102}
A.x6.prototype={
$1(a){return a.e},
$S:56}
A.f6.prototype={
aq(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.tl.prototype={
$2(a,b){return new A.X(J.aw(a),b,t.eB)},
$S:104}
A.l5.prototype={
aq(){var s,r=this,q=A.E(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.aq())
else q.j(0,"r",r.c)
return q}}
A.ti.prototype={
aq(){var s,r=A.E(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.h0.prototype={
m(a){return"DatabaseWorkerClosedException: "+this.a},
$iL:1}
A.hI.prototype={
m(a){return"ProtocolEnvelopeException: "+this.a},
$iL:1}
A.kv.prototype={
m(a){return"RemoteLocalPocketException["+this.a+"]: "+this.b},
$iL:1}
A.T.prototype={
M(a,b,c){var s,r,q=this.a.h(0,a)
if(!c.b(q)){s=A.zZ(c)
r=q==null?"null":A.A_(q)
throw A.b(A.d8('Missing or invalid "'+a+'" argument'+(" for "+b)+": expected "+s+", got "+r+"."))}return q},
U(a,b){var s=this.a
if(!s.H(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.d8('Invalid "'+a+'" argument: expected '+A.zZ(b)+", got "+A.A_(s)+"."))
return b.a(s)}}
A.f7.prototype={}
A.i0.prototype={}
A.e3.prototype={}
A.wV.prototype={
$2(a,b){var s,r,q=J.aw(a)
if(t.f.b(b))this.a.j(0,q,A.fE(b))
else{s=this.a
if(t.j.b(b)){r=J.aH(b,new A.wU(),t.z)
r=A.P(r,r.$ti.i("S.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:39}
A.wU.prototype={
$1(a){return t.f.b(a)?A.fE(a):a},
$S:31}
A.l9.prototype={
ix(a,b){return this.p0(a,b)},
p0(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$ix=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.ip(b.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ix,r)},
l9(a){var s,r,q,p,o,n=a.h(0,"type"),m=a.h(0,"operation"),l=a.h(0,"compilerVersion"),k=a.h(0,"store"),j=a.h(0,"schemaVersion"),i=a.h(0,"schemaFingerprint"),h=a.h(0,"argumentCount"),g=a.h(0,"sql"),f=a.h(0,"args")
if(!J.u(n,"query_plan")||typeof m!="string"||!B.cs.D(0,m)||!J.u(l,2)||typeof k!="string"||!A.aE(j)||typeof i!="string"||!A.aE(h)||typeof g!="string"||!t.j.b(f))throw A.b(A.d8("Malformed or stale compiled query plan."))
s=this.c.aa(k).a
r=A.aB(B.l.v(B.i.v(A.aj(s.aq()))).a)
if(s.b!==j||r!==i||J.ao(f)!==h||!B.a.O(g,"SELECT "))throw A.b(A.d8("Stale or mismatched compiled query plan."))
q=a.h(0,"projection")
a.h(0,"limit")
a.h(0,"shape")
n.toString
A.J(n)
p=t.X
o=J.aH(f,A.Bl(),p)
o=A.P(o,o.$ti.i("S.E"))
p=A.d2(o,p)
o=t.j.b(q)?J.et(q,t.N):null
return new A.rc(m,k,g,p,o)},
ip(a){return this.ov(a)},
ov(a){var s=0,r=A.h(t.G),q,p=this,o,n,m,l,k
var $async$ip=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.l9(a)
n=a.h(0,"sessionId")
m=A.aE(n)?new A.ts(p.c9(n)):new A.tt(p)
l=a.h(0,"pageLimit")
k=A.aE(l)?l:null
q=A.wZ(p.c,m,o,k)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)},
cE(a,b){return this.oW(a,b)},
oW(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$cE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ce(),$async$cE)
case 3:o=p.f,n=new A.aM(o,o.r,o.e,A.o(o).i("aM<2>"))
case 4:if(!n.k()){s=5
break}s=6
return A.a(n.d.a.$0(),$async$cE)
case 6:s=4
break
case 5:o.aj(0)
p.r.d.aj(0)
o=p.d
if(o!=null&&(o.b.a.a&30)===0)o.b.aD(new A.h0("Database closed."))
p.d=null
o=p.at
o=o==null?null:o.A()
s=7
return A.a(o instanceof A.p?o:A.bk(o,t.H),$async$cE)
case 7:p.at=null
p.as.aj(0)
s=8
return A.a(p.c.p(),$async$cE)
case 8:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cE,r)},
ce(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$ce=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.x
q.x=null
p=q.z
p=p==null?null:p.A()
s=2
return A.a(p instanceof A.p?p:A.bk(p,t.H),$async$ce)
case 2:q.z=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aA(),$async$ce)
case 5:s=6
return A.a(o.e0(),$async$ce)
case 6:o.e0()
p=o.ay
if((p.c&4)===0)p.p()
o.x.a.p()
case 4:q.Q=q.y=null
return A.e(null,r)}})
return A.f($async$ce,r)},
br(a,b){return this.o2(a,b)},
o2(a,b){var s=0,r=A.h(t.H),q,p,o
var $async$br=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.h(0,"action")
if(typeof o!="string")throw A.b(A.bi("Mutation action must be a string.",null))
q=t.b.a(A.my(b.h(0,"record")))
p=A.ac(b.h(0,"id"))
case 2:switch(o){case"put":s=4
break
case"patch":s=5
break
case"archive":s=6
break
case"restore":s=7
break
case"purge":s=8
break
default:s=9
break}break
case 4:q.toString
s=10
return A.a(a.hQ(q),$async$br)
case 10:s=3
break
case 5:p.toString
q.toString
s=11
return A.a(a.mj(p,q),$async$br)
case 11:s=3
break
case 6:p.toString
s=12
return A.a(a.lJ(p),$async$br)
case 12:s=3
break
case 7:p.toString
s=13
return A.a(a.mu(p),$async$br)
case 13:s=3
break
case 8:p.toString
s=14
return A.a(a.jM(p),$async$br)
case 14:s=3
break
case 9:throw A.b(A.bi("Unknown mutation action: "+o,null))
case 3:return A.e(null,r)}})
return A.f($async$br,r)},
iq(a,b,c){a.a.cM(A.eo(A.m(["v",2,"op","worker_event","watchId",b,"value",A.bG(c)],t.N,t.X)))},
c9(a){var s
if(a!=null){s=this.d
s=s==null||s.a!==a}else s=!0
if(s)throw A.b(A.w("No active transaction session matching ID "+A.r(a)+"."))
s=this.d
s.toString
return s}}
A.ts.prototype={
$2(a,b){return this.a.c.b.ae(a,b)},
$S:57}
A.tt.prototype={
$2(a,b){return this.a.c.mA(a,b)},
$S:57}
A.tr.prototype={
hy(a,b){return this.v8(a,b)},
v8(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hy=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.as.t(0,a)
if(n.at==null){i=n.c.a$.b
n.at=new A.aY(i,A.o(i).i("aY<1>")).aQ(new A.tu(n))}m=null
try{m=A.El(b)}catch(d){l=A.I(d)
i=J.aw(l)
q=new A.e3("protocol_envelope",i,null,0)
s=1
break}if(m.a!==2){i=m.b
q=new A.e3("protocol_mismatch","Version mismatch: expected 2, got "+m.a,A.m(["expected",2,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.io(a,m),$async$hy)
case 7:k=a0
i=m.b
q=new A.i0(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.I(e)
i=m.b
g=J.aw(j)
f=A.m(["type",A.HH(j)],t.N,t.X)
q=new A.e3("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hy,r)},
io(a,b){return this.ou(a,b)},
ou(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$io=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.ax
if(l===$){o=A.m(["health",p.gpD(),"capabilities",p.goT(),"get",p.gpB(),"mutate_batch",p.gpH(),"compiled_query",p.gp_(),"open",p.gpJ(),"analyze",p.goR(),"wal_checkpoint",p.gqs(),"vacuum",p.gqq(),"prune_outbox",p.gpN(),"compact",p.goX(),"run_maintenance",p.gpT(),"tx_begin",p.gqa(),"tx_get",p.gqe(),"tx_mutate_batch",p.gqg(),"tx_savepoint",p.gqo(),"tx_rollback_to",p.gqm(),"tx_release",p.gqi(),"tx_commit",p.gqc(),"tx_rollback",p.gqk(),"watch_query",p.gqy(),"watch_one",p.gqw(),"watch_cancel",p.gqu(),"sync_start",p.gq2(),"sync_stop",p.gq6(),"sync_now",p.gpV(),"sync_pause",p.gpX(),"sync_resume",p.gpZ(),"sync_set_connectivity",p.gq0(),"sync_update_auth",p.gq8(),"sync_status",p.gq4(),"file_upload_begin",p.gpu(),"file_upload_chunk",p.gpw(),"file_upload_finish",p.gpy(),"file_upload_abort",p.gps(),"file_list",p.gpm(),"file_open",p.gpo(),"file_remove",p.gpq(),"file_gc",p.gpk(),"file_enforce_storage_cap",p.gpi(),"conflicts_list",p.gpb(),"conflicts_get",p.gp9(),"conflicts_resolve",p.gpd(),"conflicts_accept_local",p.gp5(),"conflicts_accept_remote",p.gp7(),"conflicts_watch",p.gpf(),"close",p.goV()],t.N,t.n1)
p.ax!==$&&A.xs()
p.ax=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.d8("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$io,r)}}
A.tu.prototype={
$1(a){var s,r,q,p=A.m(["v",2,"op","record_event","event",A.bG(a.aq())],t.N,t.X)
for(s=this.a.as,s=A.fj(s,s.r,A.o(s).c),r=s.$ti.c;s.k();){q=s.d;(q==null?r.a(q):q).a.cM(A.eo(p))}},
$S:107}
A.l7.prototype={
fp(a,b){return this.pc(a,b)},
pc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
n=new A.T(b.d).U("store",o)
m=p.c.ax
m===$&&A.v()
l=J
s=3
return A.a(m.eE(n),$async$fp)
case 3:m=l.aH(d,A.Bk(),t.G)
m=A.P(m,m.$ti.i("S.E"))
q=A.m(["conflicts",m],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
fo(a,b){return this.pa(a,b)},
pa(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fo=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.T(b.d)
m=t.N
l=n.M("store","conflicts_get",m)
k=n.M("id","conflicts_get",m)
m=p.c.ax
m===$&&A.v()
s=3
return A.a(m.d3(l,k),$async$fo)
case 3:o=d
q=o==null?null:A.Bu(o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
fq(a,b){return this.pe(a,b)},
pe(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.d
m=new A.T(n)
l=t.N
k=m.M("store","conflicts_resolve",l)
j=m.M("id","conflicts_resolve",l)
n=A.my(n.h(0,"merged"))
n.toString
t.G.a(n)
o=p.c.ax
o===$&&A.v()
s=3
return A.a(o.dQ(j,n,k),$async$fq)
case 3:q=A.m(["ok",!0],l,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fq,r)},
fm(a,b){return this.p6(a,b)},
p6(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.T(b.d)
n=t.N
m=o.M("store","conflicts_accept_local",n)
l=o.M("id","conflicts_accept_local",n)
k=p.c.ax
k===$&&A.v()
s=3
return A.a(k.em(m,l),$async$fm)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fm,r)},
fn(a,b){return this.p8(a,b)},
p8(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.T(b.d)
n=t.N
m=o.M("store","conflicts_accept_remote",n)
l=o.M("id","conflicts_accept_remote",n)
k=p.c.ax
k===$&&A.v()
s=3
return A.a(k.du(m,l),$async$fn)
case 3:q=A.m(["ok",!0],n,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
iy(a,b){return this.pg(a,b)},
pg(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$iy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.T(b.d)
n=t.S
m=o.M("watchId","conflicts_watch",n)
l=t.N
k=o.U("store",l)
j=p.c.ax
j===$&&A.v()
p.f.j(0,m,new A.f8(new A.tn(j.wz(k).aQ(new A.to(p,a,m)))))
q=A.m(["watchId",m],l,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)}}
A.to.prototype={
$1(a){var s=J.aH(a,A.Bk(),t.G)
s=A.P(s,s.$ti.i("S.E"))
this.a.iq(this.b,this.c,s)},
$S:108}
A.tn.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.A(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.l8.prototype={
fA(a,b){return this.pC(a,b)},
pC(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.T(b.d)
n=t.N
m=o.M("store","get",n)
l=o.M("id","get",n)
n=p.c
if(A.kV(n)!=null)A.x(A.w(u.L))
k=A
s=3
return A.a(new A.dD(n,n.aa(m),null,null).bG(l),$async$fA)
case 3:q=k.bG(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
e6(a,b){return this.pI(a,b)},
pI(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$e6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=new A.T(b.d)
m=t.N
l=n.M("store","mutate_batch",m)
k=J.et(n.M("mutations","mutate_batch",t.W),t.G)
s=J.ao(k.a)===1?3:4
break
case 3:o=p.c
if(A.kV(o)!=null)A.x(A.w(u.L))
s=5
return A.a(p.br(new A.dD(o,o.aa(l),null,null),k.gC(k)),$async$e6)
case 5:q=A.m(["ok",!0],m,t.y)
s=1
break
case 4:s=6
return A.a(p.c.V(new A.tp(p,l,k),t.P),$async$e6)
case 6:q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e6,r)},
fB(a,b){return this.pK(a,b)},
pK(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.T(b.d).U("stores",t.W)
s=g!=null?3:4
break
case 3:o=J.M(g),n=p.c,m=n.ch,l=t.X,k=t.f,j=n.y==null
case 5:if(!o.k()){s=6
break}i=o.gn()
if(!k.b(i))A.x(A.a2("Schema must be a map: "+A.r(i),null,null))
h=A.zc(A.fE(i),l)
if(B.b.cJ(h.c,new A.tq())&&j)throw A.b(A.bi('Store "'+h.a+'" declares encrypted fields but no fieldCipher was provided.',null))
s=!m.H(h.a)?7:8
break
case 7:s=9
return A.a(n.bf(h),$async$fB)
case 9:case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fB,r)}}
A.tp.prototype={
$1(a){return this.n8(a)},
n8(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.cg(q.b)
p=q.c,o=p.$ti,p=new A.a9(p,p.gl(0),o.i("a9<D.E>")),n=q.a,o=o.i("D.E")
case 2:if(!p.k()){s=3
break}m=p.d
s=4
return A.a(n.br(l,m==null?o.a(m):m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.tq.prototype={
$1(a){return a.e},
$S:56}
A.lb.prototype={
iG(a,b){return this.pv(a,b)},
pv(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$iG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.T(b.d)
i=p.w++
h=t.N
g=j.M("store","file_upload_begin",h)
f=j.M("recordId","file_upload_begin",h)
e=j.U("field",h)
if(e==null)e="imgs"
o=j.U("name",h)
if(o==null)o="blob.bin"
n=t.S
m=j.M("size","file_upload_begin",n)
l=j.U("expectedSha256",h)
k=p.r.d
if(k.a>=16)A.x(A.bi("Maximum concurrent uploads exceeded (16).",null))
if(m<0||m>4294967296)A.x(A.bi("Invalid file size: "+m,null))
k.j(0,i,new A.l_(g,f,e,o,m,l,A.l([],t.bs)))
q=A.m(["uploadId",i],h,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iG,r)},
iH(a,b){return this.px(a,b)},
px(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$iH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=b.d
i=new A.T(j).M("uploadId","file_upload_chunk",t.S)
j=A.my(j.h(0,"chunk"))
j.toString
j=new Uint8Array(A.br(t.L.a(j)))
o=p.r.d
n=o.h(0,i)
if(n==null)A.x(A.bi("Unknown upload session: "+i,null))
m=j.length
if(m>262144){o.F(0,i)
A.x(A.bi("Chunk too large: "+m+" > 262144",null))}l=n.w
k=n.f
if(l+m>k){o.F(0,i)
A.x(A.bi("Upload exceeds declared size "+k,null))}n.x.push(j)
n.w+=m
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iH,r)},
fw(a,b){return this.pz(a,b)},
pz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=new A.T(b.d).M("uploadId","file_upload_finish",t.S)
f=p.r.d.F(0,g)
if(f==null)A.x(A.bi("Unknown upload session: "+g,null))
o=f.w
n=f.f
if(o!==n)A.x(A.bi("Upload size mismatch: expected "+n+" but got "+o,null))
o=p.c.ay
o===$&&A.v()
m=f.b
l=f.c
k=new A.tv(f).$0()
j=f.d
i=f.e
s=3
return A.a(o.dw(k,f.r,n,j,i,l,m),$async$fw)
case 3:h=d
q=A.m(["refId",h.a,"hash",h.e,"state",h.r,"remoteName",h.f],t.N,t.v)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fw,r)},
iF(a,b){return this.pt(a,b)},
pt(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$iF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.r.d.F(0,new A.T(b.d).M("uploadId","file_upload_abort",t.S))
q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iF,r)},
fu(a,b){return this.pn(a,b)},
pn(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=new A.T(b.d)
j=p.c.ay
j===$&&A.v()
o=t.N
n=k.M("store","file_list",o)
m=k.M("recordId","file_list",o)
l=k.U("field",o)
i=J
s=3
return A.a(j.dJ(l==null?"imgs":l,m,n),$async$fu)
case 3:j=i.aH(d,A.HR(),t.G)
j=A.P(j,j.$ti.i("S.E"))
q=A.m(["refs",j],o,t.J)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
dg(a,b){return this.pp(a,b)},
pp(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$dg=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:d=new A.T(b.d)
c=m.c.ay
c===$&&A.v()
i=t.N
h=d.M("store","file_open",i)
g=d.M("recordId","file_open",i)
f=d.U("field",i)
if(f==null)f="imgs"
e=d.U("index",t.S)
if(e==null)e=0
s=3
return A.a(c.eJ(f,e,g,d.U("refId",i),h),$async$dg)
case 3:l=a1
k=A.l([],t.t)
h=new A.bR(A.bF(l,"stream",t.K),t.lj)
p=4
case 7:s=9
return A.a(h.k(),$async$dg)
case 9:if(!a1){s=8
break}j=h.gn()
J.yY(k,j)
s=7
break
case 8:n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=10
return A.a(h.A(),$async$dg)
case 10:s=n.pop()
break
case 6:q=A.m(["bytes",A.bG(new Uint8Array(A.br(k))),"size",J.ao(k)],i,t.X)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dg,r)},
fv(a,b){return this.pr(a,b)},
pr(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$fv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=new A.T(b.d)
i=p.c.ay
i===$&&A.v()
o=t.N
n=j.M("store","file_remove",o)
m=j.M("recordId","file_remove",o)
l=j.U("field",o)
if(l==null)l="imgs"
k=j.U("index",t.S)
if(k==null)k=0
s=3
return A.a(i.eS(0,l,k,m,j.U("refId",o),n),$async$fv)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
ft(a,b){return this.pl(a,b)},
pl(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$ft=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=new A.T(b.d)
k=p.c.ay
k===$&&A.v()
o=t.S
n=l.U("blobGraceMs",o)
n=A.dH(0,n==null?6048e5:n,0)
m=l.U("tmpGraceMs",o)
j=A
s=3
return A.a(k.c_(n,A.dH(0,m==null?864e5:m,0)),$async$ft)
case 3:q=j.m(["cleaned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
fs(a,b){return this.pj(a,b)},
pj(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fs=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.c.ay
n===$&&A.v()
o=t.S
m=A
s=3
return A.a(n.cj(new A.T(b.d).M("maxBytes","file_enforce_storage_cap",o)),$async$fs)
case 3:q=m.m(["evicted",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)}}
A.tv.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.x,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bC(A.di(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.B)(l),++j
s=3
break
case 5:case 1:return A.bC(null,0,r)
case 2:return A.bC(o.at(-1),1,r)}})
var s=0,r=A.AX($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Bb(r)},
$S:109}
A.lc.prototype={
iI(a,b){return this.pE(a,b)},
pE(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$iI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.a
n=o.f6("SELECT sqlite_version() AS v")
m=n.gC(n).h(0,"v")
o=o.f6("PRAGMA journal_mode")
q=A.m(["ok",!0,"sqliteVersion",m,"journalMode",o.gC(o).b[0]],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iI,r)},
iw(a,b){return this.oU(a,b)},
oU(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$iw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c.c
n=p.a.f6("PRAGMA journal_mode")
q=A.m(["storage","opfs","durable",!0,"persistent",!0,"journal",n.gC(n).b[0],"multiTabStorage",!0,"multiTabSync",!1,"worker",!0,"sqliteVersion",o.a,"hasStrict",o.b,"walSupported",o.c,"hasFts5",o.d],t.N,t.z)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
fk(a,b){return this.oS(a,b)},
oS(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.N
s=3
return A.a(p.c.dv(new A.T(b.d).U("store",o)),$async$fk)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
fS(a,b){return this.qt(a,b)},
qt(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.f_(),$async$fS)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
fR(a,b){return this.qr(a,b)},
qr(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.c.eZ(new A.T(b.d).U("pages",t.S)),$async$fR)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fR,r)},
fC(a,b){return this.pO(a,b)},
pO(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fC=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=t.S
n=new A.T(b.d).U("maxEntries",o)
if(n==null)n=1e4
m=A
s=3
return A.a(p.c.eM(n),$async$fC)
case 3:q=m.m(["pruned",d],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
fl(a,b){return this.oY(a,b)},
oY(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.T(b.d)
n=t.N
m=o.M("store","compact",n)
l=t.S
k=o.M("olderThanMs","compact",l)
j=A
s=3
return A.a(p.c.dA(m,o.U("nowMs",l),A.dH(0,k,0)),$async$fl)
case 3:q=j.m(["compacted",d],n,l)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fl,r)},
fD(a,b){return this.pU(a,b)},
pU(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=new A.T(b.d).U("compactOlderThanMs",t.S)
s=3
return A.a(p.c.cY(A.dH(0,o==null?7776e6:o,0)),$async$fD)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)}}
A.we.prototype={
jj(){var s=0,r=A.h(t.q),q,p=this,o
var $async$jj=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.zQ(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jj,r)},
jN(a){return this.w6(a)},
w6(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$jN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.zQ(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jN,r)}}
A.ld.prototype={
dh(a,b){return this.q3(a,b)},
q3(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dh=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.T(a5.d)
a2=t.N
a3=a1.U("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.bi("syncStart requires baseUrl.",null))
s=3
return A.a(p.ce(),$async$dh)
case 3:o=a1.U("token",a2)
n=a1.U("scopeId",a2)
if(n==null)n="web-sync"
m=new A.we(o,n)
l=A.l2(a3)
k=p.c
j=k.ch
i=A.o(j).i("Z<1>")
j=A.P(new A.Z(j,i),i.i("n.E"))
i=t.hw
h=A.e_(null,null,i)
g=$.t.h(0,B.cz)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.jh(A.l([],t.B))
f=new A.qo(f)
e=new A.ko(l,m,j,n,f,h,A.E(a2,t.hU),A.E(a2,i))
i=new A.mX(m)
e.y=i
e.z=new A.qq(f,l,i)
d=A.ym()
i=A.e_(null,null,t.n6)
f=A.e_(null,null,t.em)
h=t.H
j=A.c_(null,h)
c=new A.mM(A.c_(null,h))
b=A.c_(B.G,t.mv)
a=A.l([],t.s)
h=A.c_(null,h)
a0=new A.rH(A.HN(),k.Q)
h=new A.kQ(k,e,a0,new A.tA(a4),B.P,i,f,j,c,A.aU(a2),b,a,h)
l=h.e=new A.rS(k,B.a.q(A.aB(B.l.v(B.i.v(l.m(0)+"|"+n)).a),0,12))
j=new A.oy(k,e,a0,k.x)
h.x=j
j=new A.qW(k,e,a0,l,j,c)
h.f=j
h.r=new A.rF(k,e,a0,l,j)
h.w=new A.r4(k,e,a0,h.gqS(),e.as)
d.b=h
p.y=m
p.x=d.ba()
h=d.ba().ay
p.z=new A.aY(h,A.o(h).i("aY<1>")).aQ(new A.tB(p,a4))
s=4
return A.a(d.ba().av(),$async$dh)
case 4:s=5
return A.a(e.fa(),$async$dh)
case 5:q=A.m(["ok",!0,"state",d.ba().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dh,r)},
fI(a,b){return this.q7(a,b)},
q7(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$fI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ce(),$async$fI)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
fE(a,b){return this.pW(a,b)},
pW(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.w("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.cG(),$async$fE)
case 3:o=d
q=A.m(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fE,r)},
fF(a,b){return this.pY(a,b)},
pY(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.be(),$async$fF)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fF,r)},
fG(a,b){return this.q_(a,b)},
q_(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.x
if(o==null)throw A.b(A.w("Sync is not started."))
s=3
return A.a(o.b3(),$async$fG)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fG,r)},
fH(a,b){return this.q1(a,b)},
q1(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$fH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x
if(n==null)throw A.b(A.w("Sync is not started."))
o=t.y
s=3
return A.a(n.f8(new A.T(b.d).M("online","sync_set_connectivity",o)),$async$fH)
case 3:q=A.m(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
fJ(a,b){return this.q9(a,b)},
q9(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.y
m=p.x
if(n==null||m==null)throw A.b(A.w("Sync is not started."))
o=t.N
n.a=new A.T(b.d).U("token",o)
s=3
return A.a(m.dK(),$async$fJ)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fJ,r)},
iK(a,b){return this.q5(a,b)},
q5(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$iK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.Q
if(o==null){o=t.N
o=A.m(["state","closed"],o,o)}else o=A.A0(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iK,r)}}
A.tA.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.cM(A.eo(A.m(["v",2,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tB.prototype={
$1(a){this.a.Q=a
this.b.a.cM(A.eo(A.m(["v",2,"op","sync_status","status",A.A0(a)],t.N,t.X)))},
$S:110}
A.w0.prototype={}
A.le.prototype={
fK(a,b){return this.qb(a,b)},
qb(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$fK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(p.d!=null)throw A.b(A.w("A transaction session is already active on this database."))
o=p.e++
n=$.t
m=t.D
l=t.h
k=new A.p(n,m)
p.h1(new A.ax(new A.p(n,m),l),new A.ax(new A.p(n,m),l),new A.ax(k,l),o)
s=3
return A.a(k,$async$fK)
case 3:q=A.m(["sessionId",o],t.N,t.S)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fK,r)},
h1(a,b,c,d){return this.rK(a,b,c,d)},
rK(a,b,c,d){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$h1=A.c(function(e,f){if(e===1){p.push(f)
s=q}for(;;)switch(s){case 0:j=b.a
j.bo(new A.tC(),new A.tD(),t.H)
q=3
s=6
return A.a(n.c.V(new A.tE(n,d,a,b,c),t.P),$async$h1)
case 6:if((j.a&30)===0)b.ao()
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.I(i)
l=A.a5(i)
if((j.a&30)===0)b.bm(m,l)
if((c.a.a&30)===0)c.bm(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.d=null
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$h1,r)},
fM(a,b){return this.qf(a,b)},
qf(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=p.c9(new A.T(m).U("sessionId",t.S))
k=new A.T(m)
m=t.N
o=k.M("store","tx_get",m)
n=k.M("id","tx_get",m)
j=A
s=3
return A.a(l.c.cg(o).bG(n),$async$fM)
case 3:q=j.bG(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fM,r)},
fN(a,b){return this.qh(a,b)},
qh(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:i=b.d
h=p.c9(new A.T(i).U("sessionId",t.S))
g=new A.T(i)
i=t.N
o=g.M("store","tx_mutate_batch",i)
n=J.et(g.M("mutations","tx_mutate_batch",t.W),t.G)
m=h.c.cg(o)
l=n.$ti,k=new A.a9(n,n.gl(0),l.i("a9<D.E>")),l=l.i("D.E")
case 3:if(!k.k()){s=4
break}j=k.d
s=5
return A.a(p.br(m,j==null?l.a(j):j),$async$fN)
case 5:s=3
break
case 4:q=A.m(["ok",!0],i,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fN,r)},
fQ(a,b){return this.qp(a,b)},
qp(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$fQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.c9(new A.T(b.d).U("sessionId",t.S))
n=o.e
m="lp_sp_wire_"+n.length
n.push(m)
s=3
return A.a(o.c.b.J("SAVEPOINT "+m),$async$fQ)
case 3:n=t.N
q=A.m(["savepoint",m],n,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
e7(a,b){return this.qn(a,b)},
qn(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$e7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.c9(new A.T(o).U("sessionId",t.S))
m=t.N
l=new A.T(o).M("savepoint","tx_rollback_to",m)
o=n.c.b
s=3
return A.a(o.J("ROLLBACK TO "+l),$async$e7)
case 3:s=4
return A.a(o.J("RELEASE "+l),$async$e7)
case 4:B.b.F(n.e,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e7,r)},
fO(a,b){return this.qj(a,b)},
qj(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$fO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=b.d
n=p.c9(new A.T(o).U("sessionId",t.S))
m=t.N
l=new A.T(o).M("savepoint","tx_release",m)
s=3
return A.a(n.c.b.J("RELEASE "+l),$async$fO)
case 3:B.b.F(n.e,l)
q=A.m(["ok",!0],m,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fO,r)},
fL(a,b){return this.qd(a,b)},
qd(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j
var $async$fL=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:j=m.c9(new A.T(b.d).U("sessionId",t.S))
p=3
l=m.d
k=j
if(l==null?k==null:l===k)m.d=null
j.b.ao()
s=6
return A.a(j.d.a,$async$fL)
case 6:l=A.m(["ok",!0],t.N,t.y)
q=l
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l=m.d
k=j
if(l==null?k==null:l===k)m.d=null
s=n.pop()
break
case 5:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fL,r)},
fP(a,b){return this.ql(a,b)},
ql(a,b){var s=0,r=A.h(t.X),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$fP=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=m.c9(new A.T(b.d).U("sessionId",t.S))
p=3
j=m.d
i=g
if(j==null?i==null:j===i)m.d=null
l=new A.kv("rollback","Transaction rolled back.")
g.b.aD(l)
p=7
s=10
return A.a(g.d.a,$async$fP)
case 10:p=3
s=9
break
case 7:p=6
f=o.pop()
k=A.I(f)
j=k
i=l
if(j==null?i!=null:j!==i)throw f
s=9
break
case 6:s=3
break
case 9:j=A.m(["ok",!0],t.N,t.y)
q=j
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
j=m.d
i=g
if(j==null?i==null:j===i)m.d=null
s=n.pop()
break
case 5:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fP,r)}}
A.tC.prototype={
$1(a){},
$S:53}
A.tD.prototype={
$1(a){},
$S:24}
A.tE.prototype={
$1(a){return this.n9(a)},
n9(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.c
o=new A.w0(q.b,p,a,q.d,A.l([],t.s))
q.a.d=o
q.e.ao()
s=2
return A.a(p.a,$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.f8.prototype={}
A.lf.prototype={
fV(a,b){return this.qz(a,b)},
qz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j
var $async$fV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.d
l=new A.T(m).M("watchId","watch_query",t.S)
k=p.l9(m)
m=p.c
o=new A.jm(m.aa(k.d).a,k.r,k.w,k.y,null,new A.tL(p,a,l),m,B.az)
n=new A.f8(new A.tM(o))
j=J
s=3
return A.a(A.iV(new A.tN(p,l,n),o.gvh(),new A.tO(p,l,n),o.gK(),t.J),$async$fV)
case 3:m=j.aH(d,A.Bm(),t.X)
m=A.P(m,m.$ti.i("S.E"))
q=A.m(["watchId",l,"items",m],t.N,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fV,r)},
fU(a,b){return this.qx(a,b)},
qx(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$fU=A.c(function(c,a0){if(c===1)return A.d(a0,r)
for(;;)switch(s){case 0:o=new A.T(b.d)
n=o.M("watchId","watch_one",t.S)
m=t.N
l=o.M("store","watch_one",m)
k=o.M("id","watch_one",m)
j=p.c
i=j.aa(l)
h=A.ym()
g=new A.f8(new A.tG(h))
f=A
e=n
d=A
s=3
return A.a(A.iV(new A.tH(p,n,g),new A.tI(p,l,k),new A.tJ(p,n,g),new A.tK(p,h,new A.hB(i,k,j,B.az),a,n),t.b),$async$fU)
case 3:q=f.m(["watchId",e,"item",d.bG(a0)],m,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fU,r)},
fT(a,b){return this.qv(a,b)},
qv(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$fT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.f.F(0,new A.T(b.d).M("watchId","watch_cancel",t.S))
s=o!=null?3:4
break
case 3:s=5
return A.a(o.a.$0(),$async$fT)
case 5:case 4:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fT,r)}}
A.tL.prototype={
$1(a){return this.a.iq(this.b,this.c,a)},
$S:111}
A.tM.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.hm()
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tO.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.tN.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.F(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tG.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a.ba().A(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.tK.prototype={
$0(){var s=this
s.b.sm3(s.c.nx().aQ(new A.tF(s.a,s.d,s.e)))},
$S:0}
A.tF.prototype={
$1(a){this.a.iq(this.b,this.c,a)},
$S:112}
A.tJ.prototype={
$0(){var s=this.c
this.a.f.j(0,this.b,s)
return s},
$S:0}
A.tI.prototype={
$0(){var s=this.a.c
if(A.kV(s)!=null)A.x(A.w(u.L))
return new A.dD(s,s.aa(this.b),null,null).bG(this.c)},
$S:113}
A.tH.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.f
o=q.b
n=q.c
if(p.h(0,o)===n)p.F(0,o)
s=2
return A.a(n.a.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.md.prototype={}
A.me.prototype={}
A.mf.prototype={}
A.mg.prototype={}
A.mh.prototype={}
A.mi.prototype={}
A.mj.prototype={}
A.nJ.prototype={
ti(a){var s,r=null
A.Be("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.aS(a)>0&&!s.cn(a)
if(s)return a
s=A.Bp()
return this.me(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
tW(a){var s,r,q=A.d7(a,this.a)
q.eT()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.jP(s)
q.e.pop()
q.eT()
return q.m(0)},
me(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Be("join",s)
return this.vo(new A.bp(s,t.x))},
vo(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.de(s,new A.nK(),a.$ti.i("de<n.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cn(m)&&o){l=A.d7(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.q(k,0,q.dR(k,!0))
l.b=n
if(q.eI(n))l.e[0]=q.gd5()
n=l.m(0)}else if(q.aS(m)>0){o=!q.cn(m)
n=m}else{if(!(m.length!==0&&q.jg(m[0])))if(p)n+=q.gd5()
n+=m}p=q.eI(m)}return n.charCodeAt(0)==0?n:n},
d7(a,b){var s=A.d7(b,this.a),r=s.d,q=A.a8(r).i("bj<1>")
r=A.P(new A.bj(r,new A.nL(),q),q.i("n.E"))
s.d=r
q=s.b
if(q!=null)B.b.az(r,0,q)
return s.d},
jF(a){var s
if(!this.qQ(a))return a
s=A.d7(a,this.a)
s.jE()
return s.m(0)},
qQ(a){var s,r,q,p,o,n,m,l=this.a,k=l.aS(a)
if(k!==0){if(l===$.mF())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.bW(n)){if(l===$.mF()&&n===47)return!0
if(q!=null&&l.bW(q))return!0
if(q===46)m=o==null||o===46||l.bW(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.bW(q))return!0
if(q===46)l=o==null||l.bW(o)||o===46
else l=!1
if(l)return!0
return!1},
w8(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.aS(a)
if(l<=0)return o.jF(a)
s=A.Bp()
if(m.aS(s)<=0&&m.aS(a)>0)return o.jF(a)
if(m.aS(a)<=0||m.cn(a))a=o.ti(a)
if(m.aS(a)<=0&&m.aS(s)>0)throw A.b(A.zC(n+a+'" from "'+s+'".'))
r=A.d7(s,m)
r.jE()
q=A.d7(a,m)
q.jE()
l=r.d
if(l.length!==0&&l[0]===".")return q.m(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.jK(l,p)
else l=!1
if(l)return q.m(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.jK(l[0],p[0])}else l=!1
if(!l)break
B.b.hU(r.d,0)
B.b.hU(r.e,1)
B.b.hU(q.d,0)
B.b.hU(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.zC(n+a+'" from "'+s+'".'))
l=t.N
B.b.jx(q.d,0,A.aF(p,"..",!1,l))
p=q.e
p[0]=""
B.b.jx(p,1,A.aF(r.d.length,m.gd5(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga1(m)==="."){B.b.jP(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.eT()
return q.m(0)},
mk(a){var s,r,q=this,p=A.B0(a)
if(p.gaP()==="file"&&q.a===$.j_())return p.m(0)
else if(p.gaP()!=="file"&&p.gaP()!==""&&q.a!==$.j_())return p.m(0)
s=q.jF(q.a.jJ(A.B0(p)))
r=q.w8(s)
return q.d7(0,r).length>q.d7(0,s).length?s:r}}
A.nK.prototype={
$1(a){return a!==""},
$S:12}
A.nL.prototype={
$1(a){return a.length!==0},
$S:12}
A.wH.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:114}
A.pl.prototype={
nh(a){var s=this.aS(a)
if(s>0)return B.a.q(a,0,s)
return this.cn(a)?a[0]:null},
jK(a,b){return a===b}}
A.kj.prototype={
gjb(){var s=this,r=t.N,q=new A.kj(s.a,s.b,s.c,A.k_(s.d,!0,r),A.k_(s.e,!0,r))
q.eT()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga1(r)},
eT(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga1(s)===""))break
B.b.jP(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
jE(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.B)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.jx(m,0,A.aF(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.aF(m.length+1,s.gd5(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.eI(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.mF())n.b=A.A(r,"/","\\")
n.eT()},
m(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga1(q)
return o.charCodeAt(0)==0?o:o}}
A.kk.prototype={
m(a){return"PathException: "+this.a},
$iL:1}
A.rE.prototype={
m(a){return this.gb2()}}
A.qK.prototype={
jg(a){return B.a.D(a,"/")},
bW(a){return a===47},
eI(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
dR(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
aS(a){return this.dR(a,!1)},
cn(a){return!1},
jJ(a){var s
if(a.gaP()===""||a.gaP()==="file"){s=a.gbd()
return A.yw(s,0,s.length,B.k,!1)}throw A.b(A.O("Uri "+a.m(0)+" must have scheme 'file:'.",null))},
gb2(){return"posix"},
gd5(){return"/"}}
A.t2.prototype={
jg(a){return B.a.D(a,"/")},
bW(a){return a===47},
eI(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.ci(a,"://")&&this.aS(a)===s},
dR(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.bU(a,"/",B.a.a6(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.O(a,"file://"))return q
p=A.Bt(a,q+1)
return p==null?q:p}}return 0},
aS(a){return this.dR(a,!1)},
cn(a){return a.length!==0&&a.charCodeAt(0)===47},
jJ(a){return a.m(0)},
gb2(){return"url"},
gd5(){return"/"}}
A.tm.prototype={
jg(a){return B.a.D(a,"/")},
bW(a){return a===47||a===92},
eI(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
dR(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.bU(a,"\\",2)
if(s>0){s=B.a.bU(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Bz(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
aS(a){return this.dR(a,!1)},
cn(a){return this.aS(a)===1},
jJ(a){var s,r
if(a.gaP()!==""&&a.gaP()!=="file")throw A.b(A.O("Uri "+a.m(0)+" must have scheme 'file:'.",null))
s=a.gbd()
if(a.gcQ()===""){if(s.length>=3&&B.a.O(s,"/")&&A.Bt(s,1)!=null)s=B.a.mt(s,"/","")}else s="\\\\"+a.gcQ()+s
r=A.A(s,"/","\\")
return A.yw(r,0,r.length,B.k,!1)},
tH(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
jK(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.tH(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gb2(){return"windows"},
gd5(){return"\\"}}
A.rn.prototype={
gl(a){return this.c.length},
gvp(){return this.b.length},
nQ(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.C(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
dY(a){var s,r=this
if(a<0)throw A.b(A.aJ("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aJ("Offset "+a+u.D+r.gl(0)+"."))
s=r.b
if(a<B.b.gC(s))return-1
if(a>=B.b.ga1(s))return s.length-1
if(r.qF(a)){s=r.d
s.toString
return s}return r.d=r.o4(a)-1},
qF(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
o4(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.R(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
i7(a){var s,r,q=this
if(a<0)throw A.b(A.aJ("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aJ("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gl(0)+"."))
s=q.dY(a)
r=q.b[s]
if(r>a)throw A.b(A.aJ("Line "+s+" comes after offset "+a+"."))
return a-r},
f3(a){var s,r,q,p
if(a<0)throw A.b(A.aJ("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aJ("Line "+a+" must be less than the number of lines in the file, "+this.gvp()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aJ("Line "+a+" doesn't have 0 columns."))
return q}}
A.jH.prototype={
gZ(){return this.a.a},
ga9(){return this.a.dY(this.b)},
gal(){return this.a.i7(this.b)},
gam(){return this.b}}
A.fg.prototype={
gZ(){return this.a.a},
gl(a){return this.c-this.b},
gK(){return A.xK(this.a,this.b)},
gI(){return A.xK(this.a,this.c)},
gaF(){return A.db(B.a2.S(this.a.c,this.b,this.c),0,null)},
gb1(){var s=this,r=s.a,q=s.c,p=r.dY(q)
if(r.i7(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.db(B.a2.S(r.c,r.f3(p),r.f3(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.f3(p+1)
return A.db(B.a2.S(r.c,r.f3(r.dY(s.b)),q),0,null)},
T(a,b){var s
if(!(b instanceof A.fg))return this.nH(0,b)
s=B.c.T(this.b,b.b)
return s===0?B.c.T(this.c,b.c):s},
X(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.fg))return s.nG(0,b)
return s.b===b.b&&s.c===b.c&&J.u(s.a.a,b.a.a)},
gN(a){return A.d6(this.b,this.c,this.a.a,B.h,B.h,B.h,B.h)},
$icF:1}
A.oS.prototype={
ve(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.lE(B.b.gC(a1).c)
s=a.e
r=A.aF(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.u(m.c,l)){a.h7("\u2575")
q.a+="\n"
a.lE(l)}else if(m.b+1!==n.b){a.th("...")
q.a+="\n"}}for(l=n.d,k=A.a8(l).i("dW<1>"),j=new A.dW(l,k),j=new A.a9(j,j.gl(0),k.i("a9<S.E>")),k=k.i("S.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gK().ga9()!==f.gI().ga9()&&f.gK().ga9()===i&&a.qG(B.a.q(h,0,f.gK().gal()))){e=B.b.bT(r,a0)
if(e<0)A.x(A.O(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.tg(i)
q.a+=" "
a.tf(n,r)
if(s)q.a+=" "
d=B.b.vg(l,new A.pc())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gK().ga9()===i?j.gK().gal():0
a.td(h,g,j.gI().ga9()===i?j.gI().gal():h.length,p)}else a.h9(h)
q.a+="\n"
if(k)a.te(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.h7("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
lE(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.h7("\u2577")
else{q.h7("\u250c")
q.b6(new A.p_(q),"\x1b[34m")
s=q.r
r=" "+$.fM().mk(a)
s.a+=r}q.r.a+="\n"},
h5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gK().ga9()
i=k?null:l.a.gI().ga9()
if(s&&l===c){h.b6(new A.p6(h,j,a),r)
n=!0}else if(n)h.b6(new A.p7(h,l),r)
else if(k)if(g.a)h.b6(new A.p8(h),g.b)
else o.a+=" "
else h.b6(new A.p9(g,h,c,j,a,l,i),p)}},
tf(a,b){return this.h5(a,b,null)},
td(a,b,c,d){var s=this
s.h9(B.a.q(a,0,b))
s.b6(new A.p0(s,a,b,c),d)
s.h9(B.a.q(a,c,a.length))},
te(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gK().ga9()===p.gI().ga9()){r.j8()
p=r.r
p.a+=" "
r.h5(a,c,b)
if(c.length!==0)p.a+=" "
r.lF(b,c,r.b6(new A.p1(r,a,b),q))}else{s=a.b
if(p.gK().ga9()===s){if(B.b.D(c,b))return
A.HF(c,b)
r.j8()
p=r.r
p.a+=" "
r.h5(a,c,b)
r.b6(new A.p2(r,a,b),q)
p.a+="\n"}else if(p.gI().ga9()===s){p=p.gI().gal()
if(p===a.a.length){A.BM(c,b)
return}r.j8()
r.r.a+=" "
r.h5(a,c,b)
r.lF(b,c,r.b6(new A.p3(r,!1,a,b),q))
A.BM(c,b)}}},
lD(a,b,c){var s=c?0:1,r=this.r
s=B.a.b4("\u2500",1+b+this.il(B.a.q(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tc(a,b){return this.lD(a,b,!0)},
lF(a,b,c){this.r.a+="\n"
return},
h9(a){var s,r,q,p
for(s=new A.bY(a),r=t.V,s=new A.a9(s,s.gl(0),r.i("a9<D.E>")),q=this.r,r=r.i("D.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.b4(" ",4)
else{p=A.bd(p)
q.a+=p}}},
h8(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.m(b+1)
this.b6(new A.pa(s,this,a),"\x1b[34m")},
h7(a){return this.h8(a,null,null)},
th(a){return this.h8(null,null,a)},
tg(a){return this.h8(null,a,null)},
j8(){return this.h8(null,null,null)},
il(a){var s,r,q,p
for(s=new A.bY(a),r=t.V,s=new A.a9(s,s.gl(0),r.i("a9<D.E>")),r=r.i("D.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qG(a){var s,r,q
for(s=new A.bY(a),r=t.V,s=new A.a9(s,s.gl(0),r.i("a9<D.E>")),r=r.i("D.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
oi(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
b6(a,b){return this.oi(a,b,t.z)}}
A.pb.prototype={
$0(){return this.a},
$S:115}
A.oU.prototype={
$1(a){var s=a.d
return new A.bj(s,new A.oT(),A.a8(s).i("bj<1>")).gl(0)},
$S:116}
A.oT.prototype={
$1(a){var s=a.a
return s.gK().ga9()!==s.gI().ga9()},
$S:35}
A.oV.prototype={
$1(a){return a.c},
$S:118}
A.oX.prototype={
$1(a){var s=a.a.gZ()
return s==null?new A.j():s},
$S:119}
A.oY.prototype={
$2(a,b){return a.a.T(0,b.a)},
$S:120}
A.oZ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.ay(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gb1()
n=A.x1(o,p.gaF(),p.gK().gal())
n.toString
m=B.a.ha("\n",B.a.q(o,0,n)).gl(0)
l=p.gK().ga9()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga1(b).b)b.push(new A.c8(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.B)(b),++k){j=b[k]
h&1&&A.C(i,16)
B.b.rE(i,new A.oW(j),!0)
f=i.length
for(q=s.b5(c,g),p=q.$ti,q=new A.a9(q,q.gl(0),p.i("a9<S.E>")),n=j.b,p=p.i("S.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gK().ga9()>n)break
i.push(e)}g+=i.length-f
B.b.E(j.d,i)}return b},
$S:121}
A.oW.prototype={
$1(a){return a.a.gI().ga9()<this.a.b},
$S:35}
A.pc.prototype={
$1(a){return!0},
$S:35}
A.p_.prototype={
$0(){this.a.r.a+=B.a.b4("\u2500",2)+">"
return null},
$S:0}
A.p6.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:4}
A.p7.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:4}
A.p8.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.p9.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.b6(new A.p4(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gI().gal()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.b6(new A.p5(r,o),p.b)}}},
$S:4}
A.p4.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:4}
A.p5.prototype={
$0(){this.a.r.a+=this.b},
$S:4}
A.p0.prototype={
$0(){var s=this
return s.a.h9(B.a.q(s.b,s.c,s.d))},
$S:0}
A.p1.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gK().gal(),l=n.gI().gal()
n=this.b.a
s=q.il(B.a.q(n,0,m))
r=q.il(B.a.q(n,m,l))
m+=s*3
n=(p.a+=B.a.b4(" ",m))+B.a.b4("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:10}
A.p2.prototype={
$0(){return this.a.tc(this.b,this.c.a.gK().gal())},
$S:0}
A.p3.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.b4("\u2500",3)
else r.lD(s.c,Math.max(s.d.a.gI().gal()-1,0),!1)
return q.a.length-p.length},
$S:10}
A.pa.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.vN(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:4}
A.b9.prototype={
m(a){var s=this.a
s="primary "+(""+s.gK().ga9()+":"+s.gK().gal()+"-"+s.gI().ga9()+":"+s.gI().gal())
return s.charCodeAt(0)==0?s:s}}
A.vg.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.x1(o.gb1(),o.gaF(),o.gK().gal())!=null)){s=A.kD(o.gK().gam(),0,0,o.gZ())
r=o.gI().gam()
q=o.gZ()
p=A.H2(o.gaF(),10)
o=A.ro(s,A.kD(r,A.Aj(o.gaF()),p,q),o.gaF(),o.gaF())}return A.EM(A.EO(A.EN(o)))},
$S:122}
A.c8.prototype={
m(a){return""+this.b+': "'+this.a+'" ('+B.b.L(this.d,", ")+")"}}
A.c2.prototype={
jm(a){var s=this.a
if(!J.u(s,a.gZ()))throw A.b(A.O('Source URLs "'+A.r(s)+'" and "'+A.r(a.gZ())+"\" don't match.",null))
return Math.abs(this.b-a.gam())},
T(a,b){var s=this.a
if(!J.u(s,b.gZ()))throw A.b(A.O('Source URLs "'+A.r(s)+'" and "'+A.r(b.gZ())+"\" don't match.",null))
return this.b-b.gam()},
X(a,b){if(b==null)return!1
return t.hq.b(b)&&J.u(this.a,b.gZ())&&this.b===b.gam()},
gN(a){var s=this.a
s=s==null?null:s.gN(s)
if(s==null)s=0
return s+this.b},
m(a){var s=this,r=A.iU(s).m(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iam:1,
gZ(){return this.a},
gam(){return this.b},
ga9(){return this.c},
gal(){return this.d}}
A.kE.prototype={
jm(a){if(!J.u(this.a.a,a.gZ()))throw A.b(A.O('Source URLs "'+A.r(this.gZ())+'" and "'+A.r(a.gZ())+"\" don't match.",null))
return Math.abs(this.b-a.gam())},
T(a,b){if(!J.u(this.a.a,b.gZ()))throw A.b(A.O('Source URLs "'+A.r(this.gZ())+'" and "'+A.r(b.gZ())+"\" don't match.",null))
return this.b-b.gam()},
X(a,b){if(b==null)return!1
return t.hq.b(b)&&J.u(this.a.a,b.gZ())&&this.b===b.gam()},
gN(a){var s=this.a.a
s=s==null?null:s.gN(s)
if(s==null)s=0
return s+this.b},
m(a){var s=A.iU(this).m(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.dY(r)+1)+":"+(q.i7(r)+1))+">"},
$iam:1,
$ic2:1}
A.kG.prototype={
nR(a,b,c){var s,r=this.b,q=this.a
if(!J.u(r.gZ(),q.gZ()))throw A.b(A.O('Source URLs "'+A.r(q.gZ())+'" and  "'+A.r(r.gZ())+"\" don't match.",null))
else if(r.gam()<q.gam())throw A.b(A.O("End "+r.m(0)+" must come after start "+q.m(0)+".",null))
else{s=this.c
if(s.length!==q.jm(r))throw A.b(A.O('Text "'+s+'" must be '+q.jm(r)+" characters long.",null))}},
gK(){return this.a},
gI(){return this.b},
gaF(){return this.c}}
A.kH.prototype={
gjD(){return this.a},
m(a){var s,r,q,p=this.b,o="line "+(p.gK().ga9()+1)+", column "+(p.gK().gal()+1)
if(p.gZ()!=null){s=p.gZ()
r=$.fM()
s.toString
s=o+(" of "+r.mk(s))
o=s}o+=": "+this.a
q=p.vf(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iL:1}
A.eS.prototype={
gam(){var s=this.b
s=A.xK(s.a,s.b)
return s.b},
$ib4:1,
gf9(){return this.c}}
A.eT.prototype={
gZ(){return this.gK().gZ()},
gl(a){return this.gI().gam()-this.gK().gam()},
T(a,b){var s=this.gK().T(0,b.gK())
return s===0?this.gI().T(0,b.gI()):s},
vf(a){var s=this
if(!t.ol.b(s)&&s.gl(s)===0)return""
return A.Dk(s,a).ve()},
X(a,b){if(b==null)return!1
return b instanceof A.eT&&this.gK().X(0,b.gK())&&this.gI().X(0,b.gI())},
gN(a){return A.d6(this.gK(),this.gI(),B.h,B.h,B.h,B.h,B.h)},
m(a){var s=this
return"<"+A.iU(s).m(0)+": from "+s.gK().m(0)+" to "+s.gI().m(0)+' "'+s.gaF()+'">'},
$iam:1}
A.cF.prototype={
gb1(){return this.d}}
A.hR.prototype={
a7(){return"SqliteUpdateKind."+this.b}}
A.c3.prototype={
gN(a){return A.d6(this.a,this.b,this.c,B.h,B.h,B.h,B.h)},
X(a,b){if(b==null)return!1
return b instanceof A.c3&&b.a===this.a&&b.b===this.b&&b.c===this.c},
m(a){return"SqliteUpdate: "+this.a.m(0)+" on "+this.b+", rowid = "+this.c}}
A.cG.prototype={
m(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.r(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.aH(p,new A.rs(),t.N).L(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iL:1}
A.rs.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.aw(a)},
$S:123}
A.o3.prototype={
t5(){var s=this,r=s.d
return r==null?s.d=new A.dm(s,A.l([],t.fU),new A.oc(s),new A.od(s),t.jy):r},
rI(){var s=this,r=s.e
return r==null?s.e=new A.dm(s,A.l([],t.lw),new A.o9(s),new A.oa(s),t.lU):r},
ol(){var s=this,r=s.f
return r==null?s.f=new A.dm(s,A.l([],t.lw),new A.o5(s),new A.o6(s),t.af):r},
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
r=s.kg()
q=r!==0?A.yF(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aw(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.x(A.w("This database has already been closed"))
r=p.b
q=r.a
s=q.ep(B.i.v(a),1)
q=q.d
r=A.Bi(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.yN(p,r,"executing",a,b)}else{s=p.hO(a,!0)
try{s.jr(new A.dM(b))}finally{s.p()}}},
J(a){return this.aw(a,B.w)},
rb(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.x(A.w("This database has already been closed"))
s=B.i.v(a)
r=e.b
q=r.a
p=q.eo(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.tf(r,p,n,o)
l=A.l([],t.lE)
k=new A.o7(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.ki(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.yN(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.R(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.a8(o,2)]-p
f=i.a
if(f!=null)l.push(new A.eU(f,e,new A.cP(!1).cA(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.ki(j,r-j,0)
n=q.buffer
h=B.c.R(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.a8(o,2)]-p
f=i.a
if(f!=null){l.push(new A.eU(f,e,""))
k.$0()
throw A.b(A.b1(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.b1(a,"sql","Has trailing data after the first sql statement:"))}}m.p()
return l},
hO(a,b){var s=this.rb(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.b1(a,"sql","Must contain an SQL statement."))
return B.b.gC(s)},
vP(a){return this.hO(a,!1)},
nj(a,b){var s,r=this.hO(a,!0)
try{s=r.kb(new A.dM(b))
return s}finally{r.p()}},
f6(a){return this.nj(a,B.w)}}
A.oc.prototype={
$0(){var s=this.a,r=s.b
r.a.lV(r.b,new A.ob(s))},
$S:0}
A.ob.prototype={
$3(a,b,c){var s=A.E7(a)
if(s==null)return
this.a.d.jl(new A.c3(s,b,c))},
$S:124}
A.od.prototype={
$0(){var s=this.a.b
s.a.lV(s.b,null)
return null},
$S:0}
A.o9.prototype={
$0(){var s=this.a,r=s.b
r.a.lU(r.b,new A.o8(s))
return null},
$S:0}
A.o8.prototype={
$0(){this.a.e.jl(null)},
$S:0}
A.oa.prototype={
$0(){var s=this.a.b
s.a.lU(s.b,null)
return null},
$S:0}
A.o5.prototype={
$0(){var s=this.a,r=s.b
r.a.lT(r.b,new A.o4(s))
return null},
$S:0}
A.o4.prototype={
$0(){var s=this.a.f
s.jl(null)
return 0},
$S:10}
A.o6.prototype={
$0(){var s=this.a.b
s.a.lT(s.b,null)
return null},
$S:0}
A.o7.prototype={
$0(){var s,r,q,p,o,n
this.a.p()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q]
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
A.dm.prototype={
gcv(){var s=this.r
return s==null?this.r=this.oP(!1):s},
oP(a){return new A.cO(new A.vU(this,!1),this.$ti.i("cO<1>"))},
jl(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.x(o.bs())
if((n&1)!==0)o.gaH().ar(a)}else{n=o.b
if(n>=4)A.x(o.bs())
if((n&1)!==0)o.cb(a)
else if((n&3)===0){n=o.fg()
o=new A.bO(a,o.$ti.i("bO<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sdM(o)
n.c=o}}}}},
p(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q)s[q].a.p()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.vU.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.p()
return}s=this.b
r=new A.vV(q,a,s)
a.r=a.e=new A.vW(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(d4<1>)")}}
A.vV.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.iv(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.vW.prototype={
$0(){var s=this.a,r=s.c
B.b.F(r,new A.iv(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.rp.prototype={
m9(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.E6(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
vH(a,b){var s,r,q,p,o,n,m,l,k,j
this.m9()
switch(2){case 2:break}s=this.a
r=s.a
q=r.ep(B.i.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.ep(B.i.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.cC(r.b.buffer,0,null)[B.c.a8(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.t8(r,l,o)
r=r.r
if(r!=null)r.lM(k,l,o)
if(m!==0){j=A.yF(s,k,m,"opening the database",null,null)
k.kg()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.o3(s,k,!1)}}
A.eU.prototype={
goj(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.lg(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.cP(!1).cA(o,0,null,!0))}return q},
grZ(){return null},
bp(a,b){A.yN(this.b,a,b,this.d,this.e)},
kP(){if(this.r||this.b.r)throw A.b(A.w("Tried to operate on a released prepared statement"))},
oI(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.cX()
if(s!==0?s!==101:q)r.bp(s,"executing statement")},
rN(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rv(o))
l.push(p)}m.cX()
if(p!==0?p!==101:k)m.bp(p,"selecting from statement")
n=m.goj()
m.grZ()
k=new A.kx(l,n,B.a1)
k.oe()
return k},
rv(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ai(r.Number(s)):A.yl(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.nv(a)
case 4:return s.kh(a)
case 5:default:return null}},
o7(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.x(A.b1(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.o8(a[s-1],s)
this.e=a},
o8(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.aE(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aA){s=q.a
if(a.T(0,$.BW())<0||a.T(0,$.BV())>0)A.x(A.zh("BigInt value exceeds the range of 64 bits"))
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a.m(0)))
break A}if(A.c9(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.nu(b,a)
break A}if(t.L.b(a)){s=q.a.nt(b,a)
break A}s=q.o6(a,b)
break A}if(s!==0)q.bp(s,"binding parameter")},
o6(a,b){throw A.b(A.b1(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
kw(a){A:{if(a instanceof A.dM){this.o7(a.a)
break A}if(a instanceof A.jq)a.a.$1(this)}},
cX(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
p(){var s,r,q=this
if(!q.r){q.r=!0
q.cX()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.lY(s.d)}},
kb(a){var s=this
s.kP()
s.cX()
s.kw(a)
return s.rN()},
jr(a){var s=this
s.kP()
s.cX()
s.kw(a)
s.oI()}}
A.jL.prototype={
i2(a,b){return this.d.H(a)?1:0},
k_(a,b){this.d.F(0,a)},
k0(a){return new v.G.URL(a,"file:///").pathname},
d2(a,b){var s,r=a.a
if(r==null)r=A.zn(this.b,"/")
s=this.d
if(!s.H(r))if((b&4)!==0)s.j(0,r,new A.c7(new Uint8Array(0),0))
else throw A.b(A.f3(14))
return new A.fn(new A.lF(this,r,(b&8)!==0),0)},
k6(a){}}
A.lF.prototype={
mn(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.d.ab(a,0,s,J.dw(B.d.gaJ(r.a),0,r.b),b)
return s},
jZ(){return this.d>=2?1:0},
i3(){if(this.c)this.a.d.F(0,this.b)},
f0(){return this.a.d.h(0,this.b).b},
k5(a){this.d=a},
k7(a){},
f1(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.c7(new Uint8Array(0),0))
s.h(0,r).sl(0,a)}else q.sl(0,a)},
k8(a){this.d=a},
dX(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.c7(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sl(0,s)
p.af(0,b,s,a)}}
A.xh.prototype={
$1(a){return a.length!==0},
$S:12}
A.nN.prototype={
oe(){var s,r,q,p,o=A.E(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q]
o.j(0,p,B.b.cR(s,p))}this.c=o}}
A.kx.prototype={
gu(a){return new A.vE(this)},
h(a,b){return new A.bL(this,A.d2(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gl(a){return this.d.length},
$iF:1,
$in:1,
$iq:1}
A.bL.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.aE(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gP(){return this.a.a},
gbh(){return this.b},
$iG:1}
A.vE.prototype={
gn(){var s=this.a
return new A.bL(s,A.d2(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.lU.prototype={}
A.lV.prototype={}
A.lX.prototype={}
A.lY.prototype={}
A.qf.prototype={
a7(){return"OpenMode."+this.b}}
A.dE.prototype={}
A.dM.prototype={}
A.jq.prototype={}
A.cL.prototype={
m(a){return"VfsException("+this.a+")"},
$iL:1}
A.hQ.prototype={}
A.aP.prototype={}
A.jf.prototype={}
A.je.prototype={
gi4(){return 0},
mE(a,b){return 12},
gi6(){return 4096},
i5(a,b){var s=this.mn(a,b),r=a.length
if(s<r){B.d.hq(a,s,r,0)
throw A.b(B.cV)}},
$ib6:1,
$ihZ:1}
A.e6.prototype={}
A.xq.prototype={
$0(){var s,r,q
for(s=this.a;!s.gB(0);){if(s.b===0)A.x(A.w("No such element"))
r=s.c
q=r.a
q.toString
q.j6(A.o(r).i("aV.E").a(r))
r.d.$0()}},
$S:0}
A.xo.prototype={
$1(a){var s=this.a,r=s.b
s.fW(s.c,new A.e6(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:13}
A.xp.prototype={
$4(a,b,c,d){this.a.$1(c.eq(d))},
$S:126}
A.td.prototype={}
A.t8.prototype={
kg(){var s=this.a,r=s.r
if(r!=null)r.lY(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.tf.prototype={
p(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
ki(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Bi(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.cC(o.b.buffer,0,null)[B.c.a8(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.te(s,o,n)
o=o.w
if(o!=null)o.lM(r,s,n)}return new A.lS(r,p)}}
A.te.prototype={
nt(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.eo(b),J.ao(b))},
nu(a,b){var s=B.i.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.eo(s),s.length)},
kh(a){var s,r=this.c,q=this.b,p=r.d,o=p.sqlite3_column_bytes(q,a)
q=p.sqlite3_column_blob(q,a)
s=new Uint8Array(o)
B.d.d6(s,0,A.bB(r.b.buffer,q,o))
return s},
nv(a){var s=this.c
return A.e4(s.b,s.d.sqlite3_column_text(this.b,a))}}
A.e1.prototype={}
A.dd.prototype={}
A.f5.prototype={
sl(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){A.cC(this.a.b.buffer,0,null)
B.c.a8(this.c+b*4,2)
return new A.dd()},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gl(a){return this.b}}
A.jr.prototype={
vz(a){var s,r,q=this.b
q===$&&A.v()
s="[sqlite3] "+A.e4(q,a)
r=$.Ge
if(r==null)A.BH(s)
else r.$1(s)},
vx(a,b){var s,r=new A.b2(A.ol(A.ai(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.v()
s=A.DL(q.buffer,b,8)
s.$flags&2&&A.C(s)
s[0]=A.y2(r)
s[1]=A.y0(r)
s[2]=A.y_(r)
s[3]=A.qM(r)
s[4]=A.y1(r)-1
s[5]=A.y3(r)-1900
s[6]=B.c.aG(A.DR(r),7)},
x0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.v()
s=new A.hQ(A.yf(j,b,k))
try{r=a.d2(s,d)
if(e!==0){p=r.b
o=A.cC(j.buffer,0,k)
n=B.c.a8(e,2)
o.$flags&2&&A.C(o)
o[n]=p}p=A.cC(j.buffer,0,k)
o=B.c.a8(c,2)
p.$flags&2&&A.C(p)
p[o]=0
m=r.a
return m}catch(l){p=A.I(l)
if(p instanceof A.cL){q=p
p=q.a
j=A.cC(j.buffer,0,k)
o=B.c.a8(c,2)
j.$flags&2&&A.C(j)
j[o]=p}else{j=j.buffer
j=A.cC(j,0,k)
p=B.c.a8(c,2)
j.$flags&2&&A.C(j)
j[p]=1}}return k},
wQ(a,b,c){var s=this.b
s===$&&A.v()
return A.bE(new A.nS(a,A.e4(s,b),c))},
wI(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bE(new A.nP(this,a,A.e4(s,b),c,d))},
wX(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bE(new A.nU(this,a,A.e4(s,b),c,d))},
x4(a,b,c){return A.bE(new A.nW(this,c,b,a))},
x9(a,b){return A.bE(new A.nY(a,b))},
wO(a,b){var s,r=Date.now(),q=this.b
q===$&&A.v()
s=v.G.BigInt(r)
A.xR(A.zz(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
wM(a){return A.bE(new A.nR(a))},
x6(a,b,c,d){return A.bE(new A.nX(this,a,b,c,d))},
xh(a,b,c,d){return A.bE(new A.o1(this,a,b,c,d))},
xd(a,b){return A.bE(new A.o_(a,b))},
xb(a,b){return A.bE(new A.nZ(a,b))},
wV(a,b){return A.bE(new A.nT(this,a,b))},
wZ(a,b){return A.bE(new A.nV(a,b))},
xf(a,b){return A.bE(new A.o0(a,b))},
wK(a,b){return A.bE(new A.nQ(this,a,b))},
wR(a){return a.gi4()},
wT(a,b,c){if(t.j2.b(a))return a.mE(b,c)
return 12},
x7(a){if(t.j2.b(a))return a.gi6()
return 4096},
u8(a){a.$0()},
u3(a){return a.$0()},
u6(a,b,c,d,e){var s=this.b
s===$&&A.v()
a.$3(b,A.e4(s,d),A.ai(v.G.Number(e)))},
uf(a,b,c,d){var s=a.gxo(),r=this.a
r===$&&A.v()
s.$2(new A.e1(),new A.f5(r,c,d))},
uj(a,b,c,d){var s=a.gxq(),r=this.a
r===$&&A.v()
s.$2(new A.e1(),new A.f5(r,c,d))},
uh(a,b,c,d){var s=a.gxp(),r=this.a
r===$&&A.v()
s.$2(new A.e1(),new A.f5(r,c,d))},
ul(a,b){var s=a.gxs()
this.a===$&&A.v()
s.$1(new A.e1())},
ud(a,b){var s=a.gxn()
this.a===$&&A.v()
s.$1(new A.e1())},
ua(a,b,c,d,e){var s,r,q=this.b
q===$&&A.v()
s=A.yf(q,c,b)
r=A.yf(q,e,d)
return a.gxk().$2(s,r)},
u1(a,b){return a.$1(b)},
u_(a,b){return a.gxm().$1(b)},
tY(a,b,c){return a.gxl().$2(b,c)}}
A.nS.prototype={
$0(){return this.a.k_(this.b,this.c)},
$S:0}
A.nP.prototype={
$0(){var s,r=this,q=r.b.i2(r.c,r.d),p=r.a.b
p===$&&A.v()
p=A.cC(p.buffer,0,null)
s=B.c.a8(r.e,2)
p.$flags&2&&A.C(p)
p[s]=q},
$S:0}
A.nU.prototype={
$0(){var s,r,q=this,p=B.i.v(q.b.k0(q.c)),o=p.length
if(o>q.d)throw A.b(A.f3(14))
s=q.a.b
s===$&&A.v()
s=A.bB(s.buffer,0,null)
r=q.e
B.d.d6(s,r,p)
s.$flags&2&&A.C(s)
s[r+o]=0},
$S:0}
A.nW.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.v()
s=A.bB(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.z4(s,q.b)
else return A.z4(s,null)},
$S:0}
A.nY.prototype={
$0(){this.a.k6(A.dH(this.b,0,0))},
$S:0}
A.nR.prototype={
$0(){return this.a.i3()},
$S:0}
A.nX.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.i5(A.bB(r.buffer,s.c,s.d),A.ai(v.G.Number(s.e)))},
$S:0}
A.o1.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.dX(A.bB(r.buffer,s.c,s.d),A.ai(v.G.Number(s.e)))},
$S:0}
A.o_.prototype={
$0(){return this.a.f1(A.ai(v.G.Number(this.b)))},
$S:0}
A.nZ.prototype={
$0(){return this.a.k7(this.b)},
$S:0}
A.nT.prototype={
$0(){var s,r=this.b.f0(),q=this.a.b
q===$&&A.v()
q=A.cC(q.buffer,0,null)
s=B.c.a8(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.nV.prototype={
$0(){return this.a.k5(this.b)},
$S:0}
A.o0.prototype={
$0(){return this.a.k8(this.b)},
$S:0}
A.nQ.prototype={
$0(){var s,r=this.b.jZ(),q=this.a.b
q===$&&A.v()
q=A.cC(q.buffer,0,null)
s=B.c.a8(this.c,2)
q.$flags&2&&A.C(q)
q[s]=r},
$S:0}
A.fQ.prototype={
a5(a,b,c,d){var s,r=null,q={},p=A.b_(A.xR(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.y8(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.mQ(q,this,p,o)
o.d=s
o.f=new A.mR(q,o,s)
return new A.b7(o,A.o(o).i("b7<1>")).a5(a,b,c,d)},
bA(a,b,c){return this.a5(a,null,b,c)}}
A.mQ.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a_(q,t.m).bo(new A.mS(p,r.b,s,r),s.gtm(),t.P)},
$S:0}
A.mS.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.p()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaH().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:19}
A.mR.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaH().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.ea.prototype={
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
return s==null?A.x(A.w("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.p($.t,t.k)
s=new A.ae(o,t.ex)
r=p.d
q=t.m
p.b=A.b8(r,"success",new A.uJ(p,s),!1,q)
p.c=A.b8(r,"error",new A.uK(p,s),!1,q)
return o}}
A.uJ.prototype={
$1(a){var s,r=this.a
r.A()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.au(s!=null)},
$S:2}
A.uK.prototype={
$1(a){var s=this.a
s.A()
s=s.d.error
if(s==null)s=a
this.b.aD(s)},
$S:2}
A.ns.prototype={
$1(a){this.a.au(this.c.a(this.b.result))},
$S:2}
A.nt.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.nx.prototype={
$1(a){this.a.au(this.c.a(this.b.result))},
$S:2}
A.ny.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.nz.prototype={
$1(a){this.a.aD(new A.bf("IndexedDB open blocked"))},
$S:2}
A.oE.prototype={
$1(a){return A.b_(a[1])},
$S:148}
A.t9.prototype={
tM(){var s={}
s.dart=new A.ta(this).$0()
return s},
hH(a){return this.vt(a)},
vt(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hH=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a_(v.G.WebAssembly.instantiateStreaming(a,p.tM()),t.m),$async$hH)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)}}
A.ta.prototype={
$0(){var s=this.a.a,r=A.b_(v.G.Object),q=A.b_(r.create.apply(r,[null]))
q.error_log=A.ct(s.gvy())
q.localtime=A.bD(s.gvw())
q.xOpen=A.yx(s.gx_())
q.xDelete=A.mq(s.gwP())
q.xAccess=A.fz(s.gwH())
q.xFullPathname=A.fz(s.gwW())
q.xRandomness=A.mq(s.gx3())
q.xSleep=A.bD(s.gx8())
q.xCurrentTimeInt64=A.bD(s.gwN())
q.xClose=A.ct(s.gwL())
q.xRead=A.fz(s.gx5())
q.xWrite=A.fz(s.gxg())
q.xTruncate=A.bD(s.gxc())
q.xSync=A.bD(s.gxa())
q.xFileSize=A.bD(s.gwU())
q.xLock=A.bD(s.gwY())
q.xUnlock=A.bD(s.gxe())
q.xCheckReservedLock=A.bD(s.gwJ())
q.xDeviceCharacteristics=A.ct(s.gi4())
q.xFileControl=A.mq(s.gwS())
q.xSectorSize=A.ct(s.gi6())
q["dispatch_()v"]=A.ct(s.gu7())
q["dispatch_()i"]=A.ct(s.gu2())
q.dispatch_update=A.yx(s.gu5())
q.dispatch_xFunc=A.fz(s.gue())
q.dispatch_xStep=A.fz(s.gui())
q.dispatch_xInverse=A.fz(s.gug())
q.dispatch_xValue=A.bD(s.guk())
q.dispatch_xFinal=A.bD(s.guc())
q.dispatch_compare=A.yx(s.gu9())
q.dispatch_busy=A.bD(s.gu0())
q.changeset_apply_filter=A.bD(s.gtZ())
q.changeset_apply_conflict=A.mq(s.gtX())
return q},
$S:32}
A.f4.prototype={}
A.mT.prototype={
hL(){var s=0,r=A.h(t.H),q=this,p,o
var $async$hL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.p($.t,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.ct(new A.mW(o))
new A.ae(p,t.h1).au(A.D1(o,t.m))
s=2
return A.a(p,$async$hL)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$hL,r)},
ds(a,b){return this.rJ(a,b)},
rJ(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$ds=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Cw(),b)
o=A.EP(p)
s=2
return A.a(A.HG(new A.mV(a,o,p),t.mj),$async$ds)
case 2:s=3
return A.a(o.b.a,$async$ds)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$ds,r)},
ra(a){return this.ds(new A.mU(a),"readwrite")}}
A.mW.prototype={
$1(a){var s=A.b_(this.a.result)
if(J.u(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:19}
A.mV.prototype={
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
$S:16}
A.mU.prototype={
$1(a){return this.mF(a)},
mF(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aN(a),$async$$1)
case 5:case 3:p.length===o||(0,A.B)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:20}
A.ik.prototype={
nV(a){var s=A.wA(new A.vj(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.wA(new A.vk(this))},
iV(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
rs(a){return this.iV(a,9007199254740992,0)},
rt(a,b){return this.iV(a,9007199254740992,b)},
hG(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$hG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.E(t.N,t.S)
k=new A.ea(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$hG)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.x(A.w("Await moveNext() first"))
n=o.key
n.toString
A.J(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ai(A.ej(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
hp(a){return this.uJ(a)},
uJ(a){var s=0,r=A.h(t.aV),q,p=this,o
var $async$hp=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.ce(p.d.index("fileName").getKey(a),t.i),$async$hp)
case 3:q=o.ai(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
iW(a){return A.ce(this.d.get(a),t.A).aK(new A.vi(a),t.m)},
e_(a,b){return this.nw(a,b)},
nw(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$e_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.iW(a),$async$e_)
case 3:h=d
g=h.length
f=new A.c7(new Uint8Array(g),g)
e=new A.ea(p.e.openCursor(p.rs(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$e_)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.x(A.w("Await moveNext() first"))
k=n.a(l.key)
j=A.ai(A.ej(k[1]))
if(j>=h.length){s=5
break}i=new A.vl(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.re(A.b_(l.value)).aK(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e_,r)},
hh(a){return this.tL(a)},
tL(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.x(A.w("IDB transaction already completed"))
o=A
s=3
return A.a(A.ce(p.d.put({name:a,length:0}),t.i),$async$hh)
case 3:q=o.ai(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
d1(a,b){return this.wB(a,b)},
wB(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.x(A.w("IDB transaction already completed"))
s=2
return A.a(q.iW(a),$async$d1)
case 2:p=d
o=b.b
n=A.o(o).i("Z<1>")
m=A.P(new A.Z(o,n),n.i("n.E"))
B.b.aW(m)
s=3
return A.a(A.xN(new A.a7(m,new A.vm(new A.vn(q,a),b),A.a8(m).i("a7<1,y<~>>")),t.H),$async$d1)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.ea(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$d1)
case 6:s=7
return A.a(A.ce(l.gn().update({name:p.name,length:b.c}),t.X),$async$d1)
case 7:case 5:return A.e(null,r)}})
return A.f($async$d1,r)},
d0(a,b,c){return this.wp(0,b,c)},
wp(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.x(A.w("IDB transaction already completed"))
s=2
return A.a(q.iW(b),$async$d0)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.ce(q.e.delete(q.rt(b,B.c.R(c,4096)*4096)),t.X),$async$d0)
case 5:case 4:o=new A.ea(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$d0)
case 6:s=7
return A.a(A.ce(o.gn().update({name:p.name,length:c}),t.X),$async$d0)
case 7:return A.e(null,r)}})
return A.f($async$d0,r)},
hl(a){return this.tV(a)},
tV(a){var s=0,r=A.h(t.H),q=this,p
var $async$hl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.x(A.w("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.xN(A.l([A.ce(q.e.delete(q.iV(a,9007199254740992,0)),p),A.ce(q.d.delete(a),p)],t.iw),t.H),$async$hl)
case 2:return A.e(null,r)}})
return A.f($async$hl,r)}}
A.vj.prototype={
$0(){this.a.b.ao()},
$S:4}
A.vk.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aD(r)},
$S:4}
A.vi.prototype={
$1(a){if(a==null)throw A.b(A.b1(this.a,"fileId","File not found in database"))
else return a},
$S:151}
A.vl.prototype={
$1(a){var s=this.a
s.d6(s,this.b,J.dw(a,0,this.c))},
$S:152}
A.vn.prototype={
nc(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.ce(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.A),$async$$2)
case 2:m=d
l=t.a.a(B.d.gaJ(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.ce(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.ce(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.nc(a,b)},
$S:153}
A.vm.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:154}
A.uV.prototype={
t4(a,b,c){B.d.d6(this.b.ml(a,new A.uW(this,a)),b,c)},
tr(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.R(q,4096)
o=B.c.aG(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.t4(p*4096,o,J.dw(B.d.gaJ(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.uW.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.d.d6(s,0,J.dw(B.d.gaJ(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:155}
A.lO.prototype={}
A.cZ.prototype={
ek(a){var s=this
if(s.e||s.d.a==null)A.x(A.f3(10))
if(a.jy(s.x)){s.cd(!0)
return a.d.a}else return A.c_(null,t.H)},
cd(a){return this.rY(a)},
rY(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gB(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.P(o,o.$ti.i("n.E"))
o.aj(0)
s=5
return A.a(p.d.ra(n).aO(new A.pf(p,n,a)),$async$cd)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cd,r)},
p(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.ek(new A.ii(new A.pg(),new A.ae(new A.p($.t,t.D),t.F)))
p.e=!0
p.cd(!1)
q=o
s=1
break}else{n=p.x
if(!n.gB(0)){q=n.ga1(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$p,r)},
de(a,b){return this.oM(a,b)},
oM(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$de=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
s=n.H(b)?3:5
break
case 3:n=n.h(0,b)
n.toString
q=n
s=1
break
s=4
break
case 5:s=6
return A.a(a.hp(b),$async$de)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$de,r)},
ee(){var s=0,r=A.h(t.H),q=this,p
var $async$ee=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.ds(new A.pe(q,p),"readonly"),$async$ee)
case 2:s=3
return A.a(A.Dh(p,t.H),$async$ee)
case 3:return A.e(null,r)}})
return A.f($async$ee,r)},
cl(){return this.cd(!1)},
i2(a,b){return this.w.d.H(a)?1:0},
k_(a,b){var s=this
s.w.d.F(0,a)
if(!s.y.F(0,a))s.ek(new A.ib(s,a,new A.ae(new A.p($.t,t.D),t.F)))},
k0(a){return new v.G.URL(a,"file:///").pathname},
d2(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.zn(p.b,"/")
s=p.w
r=s.d.H(o)?1:0
q=s.d2(new A.hQ(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.ek(new A.fc(p,o,new A.ae(new A.p($.t,t.D),t.F)))
return new A.fn(new A.lG(p,q.a,o),0)},
k6(a){}}
A.pf.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.x(A.w("Future already completed"))
p.c5(null)}o.cd(this.c)},
$S:4}
A.pg.prototype={
$1(a){return this.mM(a)},
mM(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:20}
A.pe.prototype={
$1(a){return this.mL(a)},
mL(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.hG(),$async$$1)
case 2:m=c
l=q.a
l.z.E(0,m)
p=m.gbn(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.e_(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:20}
A.lG.prototype={
i5(a,b){this.b.i5(a,b)},
gi4(){return 0},
gi6(){return 4096},
jZ(){return this.b.d>=2?1:0},
i3(){},
f0(){return this.b.f0()},
k5(a){this.b.d=a
return null},
k7(a){},
mE(a,b){return 12},
f1(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.x(A.f3(10))
s.b.f1(a)
if(!r.y.D(0,s.c))r.ek(new A.ii(new A.vh(s,a),new A.ae(new A.p($.t,t.D),t.F)))},
k8(a){this.b.d=a
return null},
dX(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.x(A.f3(10))
s=m.c
if(l.y.D(0,s)){m.b.dX(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.c7(new Uint8Array(0),0)
q=J.dw(B.d.gaJ(r.a),0,r.b)
m.b.dX(a,b)
p=new Uint8Array(a.length)
B.d.d6(p,0,a)
o=A.l([],t.p8)
n=$.t
o.push(new A.lO(b,p))
l.ek(new A.fw(l,s,q,o,new A.ae(new A.p(n,t.D),t.F)))},
$ib6:1,
$ihZ:1}
A.vh.prototype={
$1(a){return this.nb(a)},
nb(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.de(a,o.c),$async$$1)
case 3:q=n.d0(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:20}
A.aQ.prototype={
jy(a){a.fW(a.c,this,!1)
return!0}}
A.ii.prototype={
aN(a){return this.w.$1(a)}}
A.ib.prototype={
jy(a){var s,r,q,p
if(!a.gB(0)){s=a.ga1(0)
for(r=this.x;s!=null;)if(s instanceof A.ib)if(s.x===r)return!1
else s=s.geL()
else if(s instanceof A.fw){q=s.geL()
if(s.x===r){p=s.a
p.toString
p.j6(A.o(s).i("aV.E").a(s))}s=q}else if(s instanceof A.fc){if(s.x===r){r=s.a
r.toString
r.j6(A.o(s).i("aV.E").a(s))
return!1}s=s.geL()}else break}a.fW(a.c,this,!1)
return!0},
aN(a){return this.wg(a)},
wg(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.de(a,o),$async$aN)
case 2:n=c
p.z.F(0,o)
s=3
return A.a(a.hl(n),$async$aN)
case 3:return A.e(null,r)}})
return A.f($async$aN,r)}}
A.fc.prototype={
aN(a){return this.wf(a)},
wf(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hh(p),$async$aN)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aN,r)}}
A.fw.prototype={
jy(a){var s,r=a.b===0?null:a.ga1(0)
for(s=this.x;r!=null;)if(r instanceof A.fw)if(r.x===s){B.b.E(r.z,this.z)
return!1}else r=r.geL()
else if(r instanceof A.fc){if(r.x===s)break
r=r.geL()}else break
a.fW(a.c,this,!1)
return!0},
aN(a){return this.wh(a)},
wh(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.uV(m,A.E(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.B)(m),++o){n=m[o]
l.tr(n.a,n.b)}k=a
s=3
return A.a(q.w.de(a,q.x),$async$aN)
case 3:s=2
return A.a(k.d1(c,l),$async$aN)
case 2:return A.e(null,r)}})
return A.f($async$aN,r)}}
A.eA.prototype={
a7(){return"FileType."+this.b}}
A.eR.prototype={
bx(){var s=this.d
if(s!=null)return s
throw A.b(A.w("VFS closed"))},
i2(a,b){var s=$.xv().h(0,a)
if(s==null)return this.e.d.H(a)?1:0
else return this.bx().ck(s)?1:0},
k_(a,b){var s=$.xv().h(0,a)
if(s==null){this.e.d.F(0,a)
return null}else this.bx().eG(s,!1)},
k0(a){return new v.G.URL(a,"file:///").pathname},
d2(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.d2(a,b)
s=$.xv().h(0,p)
if(s==null)return q.e.d2(a,b)
r=q.bx()
if(!r.ck(s))if((b&4)!==0){r.cP(s).truncate(0)
r.eG(s,!0)}else throw A.b(B.cU)
return new A.fn(new A.m3(q,s,(b&8)!==0),0)},
k6(a){},
p(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cq(a,b){return this.vJ(a,b)},
bC(a){return this.cq(a,!1)},
vJ(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.rm(a,b)
s=2
return A.a(m.$1("meta"),$async$cq)
case 2:l=d
k=J.u(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cq)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cq)
case 4:o=d
n=q.d=new A.vA(new Uint8Array(2),l,p,o)
if(k){n.eG(B.aB,p.getSize()>0)
n.eG(B.aC,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cq,r)}}
A.rm.prototype={
n6(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a_(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a_(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.n6(a)},
$S:156}
A.m3.prototype={
mn(a,b){return A.zl(this.a.bx().cP(this.b),a,{at:b})},
jZ(){return this.d>=2?1:0},
i3(){var s=this.a,r=this.b
s.bx().cP(r).flush()
if(this.c)s.bx().eG(r,!1)},
f0(){return this.a.bx().cP(this.b).getSize()},
k5(a){this.d=a},
k7(a){this.a.bx().cP(this.b).flush()},
f1(a){this.a.bx().cP(this.b).truncate(a)},
k8(a){this.d=a},
dX(a,b){if(A.zm(this.a.bx().cP(this.b),a,{at:b})<a.length)throw A.b(B.cW)}}
A.vA.prototype={
ck(a){var s=this.a
A.zl(this.b,s,{at:0})
return s[a.a]!==0},
eG(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.C(s)
s[a.a]=r
A.zm(this.b,s,{at:0})},
cP(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.t3.prototype={
nS(a,b){var s=this,r=s.c
r.a!==$&&A.BQ()
r.a=s
r=t.S
A.uX(new A.t4(s),r)
A.uX(new A.t5(s),r)
s.r=A.uX(new A.t6(s),r)
s.w=A.uX(new A.t7(s),r)},
ep(a,b){var s=J.K(a),r=this.d.dart_sqlite3_malloc(s.gl(a)+b),q=A.bB(this.b.buffer,0,null)
B.d.af(q,r,r+s.gl(a),a)
B.d.hq(q,r+s.gl(a),r+s.gl(a)+b,0)
return r},
eo(a){return this.ep(a,0)},
lV(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
lT(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
lU(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.t4.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.t5.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.t6.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.t7.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.fY.prototype={}
A.qQ.prototype={
nP(a){var s,r=this,q=r.a
q.start()
r.c=A.b8(q,"message",new A.qU(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.j0()
q.toString
A.i_(q,s,null,null,!1).aK(new A.qV(r),t.P)}},
iJ(a){return this.pF(a)},
pF(a){var s=0,r=A.h(t.H),q=this
var $async$iJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.H6(a,new A.qR(q),q.gv4(),new A.qS(q),new A.qT(q))
return A.e(null,r)}})
return A.f($async$iJ,r)},
f7(a,b,c){return this.np(a,b,c,c)},
np(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$f7=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.CS(null))
o=p.e++
n=new A.p($.t,t.a7)
p.f.j(0,o,new A.ae(n,t.h1))
a.i=o
p.a.postMessage(a,A.fF(a))
s=3
return A.a(n,$async$f7)
case 3:m=f
if(J.u(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.DZ(m))
case 1:return A.e(q,r)}})
return A.f($async$f7,r)},
qK(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.A()
s=q.d
if(s!=null)s.A()
for(s=q.f,r=new A.aM(s,s.r,s.e,A.o(s).i("aM<2>"));r.k();)r.d.aD(new A.fU(a))
s.aj(0)
p.ao()},
l3(){return this.qK(null)}}
A.qU.prototype={
$1(a){if(a.data=="_disconnect"){this.a.l3()
return}this.a.iJ(A.b_(a.data))},
$S:2}
A.qV.prototype={
$1(a){this.a.l3()
a.a.ao()},
$S:157}
A.qT.prototype={
$1(a){var s=this.a.f.F(0,a.i)
if(s!=null)s.au(a)},
$S:19}
A.qS.prototype={
$1(a){return this.n_(a)},
n_(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.u4(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bk(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.I(a0)
k=A.a5(a0)
if(!(l instanceof A.cS)){b.console.error("Error in worker: "+J.aw(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.cG){h=A.Db(b)
g=0}else{g=b instanceof A.cS?1:null
h=null}f={e:J.aw(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.F(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.fF(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:158}
A.qR.prototype={
$1(a){var s=this.a.r.F(0,a.i)
if(s!=null)s.abort()},
$S:19}
A.fU.prototype={
m(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iL:1}
A.o2.prototype={
bX(a){return this.vu(a)},
vu(a){var s=0,r=A.h(t.n),q
var $async$bX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.tc(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bX,r)}}
A.jp.prototype={}
A.nO.prototype={}
A.e2.prototype={}
A.jF.prototype={
hJ(){var s=0,r=A.h(t.H),q=this
var $async$hJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.bC(q.b),$async$hJ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hJ,r)},
jO(){var s=0,r=A.h(t.H),q=this
var $async$jO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.p()
return A.e(null,r)}})
return A.f($async$jO,r)}}
A.oQ.prototype={
wj(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
oQ(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.tj.prototype={
$1(a){var s=new A.p($.t,t.D),r=new A.cx(new A.ae(s,t.F))
this.a.a=r
this.b.au(r)
return A.Di(s)},
$S:159}
A.tk.prototype={
$2(a,b){var s,r,q
A.b_(a)
s=J.u(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bm(new A.cS("Operation was cancelled"),b)
else q.bm(a,b)}return null},
$S:160}
A.cx.prototype={}
A.js.prototype={
gtD(){if(this.c.a)return!1
return!this.d||this.f!=null},
da(a){return this.nZ(a)},
nZ(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$da=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.j0()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.i_(n,o.a,null,o.gpL(),!0),$async$da)
case 6:m=c
s=7
return A.a(A.i_(n,o.b,a,null,!1),$async$da)
case 7:l=c
j=o.e
j=j==null?null:j.hJ()
s=8
return A.a(j instanceof A.p?j:A.bk(j,t.H),$async$da)
case 8:o.f=new A.au(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.ao()
j=l
if(j!=null)j.a.ao()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$da,r)},
pM(){this.mo()},
jC(a,b,c){return this.c.hZ(new A.of(this,a,b,c),b,c)},
mo(){return this.c.jY(new A.og(this),t.H)}}
A.of.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.da(r.c).aK(new A.oe(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.oe.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.og.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.jO()
s.a.ao()
r.a.ao()
p.f=null}},
$S:4}
A.ht.prototype={
hZ(a,b,c){return this.wA(a,b,c,c)},
jY(a,b){return this.hZ(a,null,b)},
wA(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$hZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.u(g?null:b.aborted,!0))throw A.b(B.a7)
h.a=!1
o=new A.q9(h,p)
if(!p.a){h.a=p.a=!0
q=A.ha(a,c).aO(o)
s=1
break}else{n={}
m=new A.p($.t,c.i("p<0>"))
l=new A.ae(m,c.i("ae<0>"))
n.a=null
h=new A.q8(h,n,l,a,c)
if(!g)n.a=A.b8(b,"abort",new A.q7(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.aF(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.ab(j,0,i,h,n)
B.b.ab(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aO(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$hZ,r)}}
A.q9.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gB(0)){s=r.b
if(s===r.c)A.x(A.ar());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.q8.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.A()
r.c.au(A.ha(r.d,r.e))},
$S:0}
A.q7.prototype={
$1(a){var s,r=this
r.a.a.A()
s=r.c
if((s.a.a&30)===0){r.b.b.F(0,r.d)
s.aD(B.a7)}},
$S:2}
A.dF.prototype={
gmx(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q){p=s[q]
B.b.E(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.ov.prototype={
$1(a){if(a!=null)return A.J(a)
return null},
$S:161}
A.k5.prototype={
a7(){return"MessageType."+this.b}}
A.rh.prototype={
u4(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hw(a,b)
case"connect":return p.js(a,b)
case"custom":return p.dF(a,b)
case"fileSystemExists":return p.eA(a,b)
case"fileSystemFlush":return p.eB(a,b)
case"fileSystemAccess":return p.ez(a,b)
case"runQuery":return p.hA(a,b)
case"exclusiveLock":return p.hv(a,b)
case"releaseLock":s=p.bk(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.x(A.w("Lock to be released is not active."))
q.b.ao()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.ht(a,b)
case"openAdditionalConnection":return p.hx(a,b)
case"updateRequest":return p.hB(a,b)
case"rollbackRequest":return p.hz(a,b)
case"commitRequest":return p.hu(a,b)
case"dedicatedCompatibilityCheck":return p.df(a,b)
case"sharedCompatibilityCheck":return p.df(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.df(a,b)
default:r=A.ek(new A.bv(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.p($.t,t.hl)
q.c4(r)
return q}}}
A.cV.prototype={
a7(){return"FileSystemImplementation."+this.b}}
A.c6.prototype={
a7(){return"TypeCode."+this.b},
tP(a){var s=null
switch(this.a){case 0:s=A.x(A.O("Unsupported type code",null))
break
case 1:a=A.ai(A.ej(a))
s=a
break
case 2:s=A.yl(t.bJ.a(a).toString(),null)
break
case 3:A.ej(a)
s=a
break
case 4:A.J(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.fy(a)
s=a
break
case 6:break}return s}}
A.dG.prototype={
lN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.O("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.ae:B.aF[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ai(A.ej(h))))
if(k!==0)a.bp(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bp(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.ej(h))
if(k!==0)a.bp(k,e)
break
case 4:g=B.i.v(A.J(h))
k=s.dart_sqlite3_bind_text(d,i,c.eo(g),g.length)
if(k!==0)a.bp(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.eo(h),h.length)
if(k!==0)a.bp(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bp(k,e)
break
case 7:f=A.fy(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bp(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gl(a){return this.a.length},
sl(a,b){this.lA()},
h(a,b){var s=this.c[b],r=s>=8?B.ae:B.aF[s]
return r.tP(this.a[b])},
j(a,b,c){this.lA()},
lA(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.wM.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:19}
A.nq.prototype={
$1(a){this.a.au(this.c.a(this.b.result))},
$S:2}
A.nr.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.nu.prototype={
$1(a){this.a.au(this.c.a(this.b.result))},
$S:2}
A.nv.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.nw.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aD(s)},
$S:2}
A.qL.prototype={
un(){var s,r,q,p
for(s=this.b,r=new A.aM(s,s.r,s.e,A.o(s).i("aM<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.aj(0)}}
A.h5.prototype={
a7(){return"FileType."+this.b}}
A.d9.prototype={
a7(){return"StorageMode."+this.b}}
A.eO.prototype={
m(a){return"Remote error: "+this.a},
$iL:1}
A.cS.prototype={}
A.wz.prototype={
$1(a){return A.b_(a.data)},
$S:163}
A.iz.prototype={
A(){var s=this.a
if(s!=null)s.A()
this.a=null}}
A.fb.prototype={
p(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$p=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.A()
q.d.A()
q.e.A()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.B)(p),++n)p[n].abort()
B.b.aj(p)
p=q.f
if(p!=null)p.b.ao()
s=2
return A.a(q.a.er(),$async$p)
case 2:return A.e(null,r)}})
return A.f($async$p,r)},
ls(a){var s=new v.G.AbortController()
a.onabort=A.wA(new A.uD(s))
this.w.push(s)
return s},
jV(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gtD()){r=p.ls(b)
o=s.jC(c,r.signal,d).aO(new A.uH(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.w("Requested operation on inactive lock state."))}if(o==null)o=A.ha(c,d)
q=p.a.z
return q instanceof A.cZ?o.aO(q.guM()):o},
vG(a){var s=this,r=s.ls(a),q=new A.p($.t,t.hy),p=new A.ax(q,t.ho),o=t.H
A.xM(s.a.f.jC(new A.uE(s,p),r.signal,o),new A.uF(p),o,t.K)
return q.aO(new A.uG(s,r))}}
A.uD.prototype={
$0(){return this.a.abort()},
$S:0}
A.uH.prototype={
$0(){B.b.F(this.a.w,this.b)},
$S:4}
A.uE.prototype={
$0(){var s=this.a,r=s.r++,q=new A.p($.t,t.D)
s.f=new A.au(r,new A.ax(q,t.h))
this.b.au(r)
return q},
$S:3}
A.uF.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bm(a,b)},
$S:9}
A.uG.prototype={
$0(){B.b.F(this.a.w,this.b)},
$S:4}
A.i9.prototype={
nU(a,b,c){this.b.a.aO(new A.un(this))},
df(a,b){return this.oZ(a,b)},
oZ(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$df=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.lP(a),$async$df)
case 3:q={r:d.gmx(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$df,r)},
js(a,b){return this.uS(a,b)},
uS(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$js=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.gkZ()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.fF(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$js,r)},
dF(a,b){return this.uT(a,b)},
uT(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$dF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.kK(l)
n=a.r
s=7
return A.a(o.a.gbY(),$async$dF)
case 7:s=6
return A.a(d.cm(p,new A.nO(n)),$async$dF)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cm(p,new A.jp(a)),$async$dF)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dF,r)},
hw(a,b){return this.v6(a,b)},
v6(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.jY(new A.us(p,a),t.m),$async$hw)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hw,r)},
hA(a,b){return this.va(a,b)},
va(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o.a
s=3
return A.a(n.gbY(),$async$hA)
case 3:m=d
q=o.jV(a.z,b,new A.uv(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hA,r)},
hv(a,b){return this.uX(a,b)},
uX(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bk(a).vG(b),$async$hv)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
hu(a,b){return this.uR(a,b)},
uR(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.d8(n,new A.up(p,o),a),$async$hu)
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
return A.f($async$hu,r)},
hz(a,b){return this.v9(a,b)},
v9(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.d8(n,new A.uu(p,o),a),$async$hz)
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
return A.f($async$hz,r)},
hB(a,b){return this.vc(a,b)},
vc(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.d8(n,new A.ux(p,o),a),$async$hB)
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
return A.f($async$hB,r)},
hx(a,b){return this.v7(a,b)},
v7(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bk(a).a;++m.w
s=3
return A.a(A.wP(),$async$hx)
case 3:o=d
n=o.a
p.w.kq(o.b).x.push(A.Af(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hx,r)},
ht(a,b){return this.uQ(a,b)},
uQ(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$ht=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
B.b.F(p.x,o)
s=3
return A.a(o.p(),$async$ht)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
eB(a,b){return this.v_(a,b)},
v_(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$eB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bk(a).a.gct(),$async$eB)
case 3:o=d
s=o instanceof A.cZ?4:5
break
case 4:s=6
return A.a(o.cd(!1),$async$eB)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eB,r)},
ez(a,b){return this.uY(a,b)},
uY(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$ez=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=B.aG[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gct(),$async$ez)
case 4:s=3
return A.a(l.jV(null,k,new j.uq(d,n,m,a),t.m),$async$ez)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ez,r)},
eA(a,b){return this.uZ(a,b)},
uZ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eA=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bk(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gct(),$async$eA)
case 4:s=3
return A.a(n.jV(null,m,new l.ur(d,a),t.y),$async$eA)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eA,r)},
d8(a,b,c){return this.nz(a,b,c)},
nz(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$d8=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$d8)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d8,r)},
v5(a){},
cM(a){var s=0,r=A.h(t.X),q,p=this
var $async$cM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.f7({r:a,z:null,i:0,d:null,t:"custom"},B.cc,t.m),$async$cM)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cM,r)},
kK(a){return B.b.m4(this.x,new A.um(a))},
bk(a){var s=a.d
if(s!=null)return this.kK(s)
else throw A.b(A.O("Request requires database id",null))}}
A.un.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].p(),$async$$0)
case 5:case 3:p.length===o||(0,A.B)(p),++n
s=2
break
case 4:B.b.aj(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.us.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.bX(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.uK(h.d,A.De(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gct():m.gbY(),$async$$0)
case 8:l=A.Af(m,null)
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
case 9:B.b.F(j.x,l)
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
$S:164}
A.uv.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.w("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.dG(s,r,A.bB(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.nk(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ai(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.uC(l,k.s,q)
s=o.d
return A.BD(s.sqlite3_get_autocommit(p)!==0,m,A.ai(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:32}
A.up.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbY(),$async$$0)
case 3:q=b.a.ol().gcv().aQ(new A.uo(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:62}
A.uo.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.fF(s))},
$S:63}
A.uu.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbY(),$async$$0)
case 3:q=b.a.rI().gcv().aQ(new A.ut(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:62}
A.ut.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.fF(s))},
$S:63}
A.ux.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gbY(),$async$$0)
case 3:q=b.a.t5().gcv().aQ(new A.uw(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:167}
A.uw.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.fF(s))},
$S:168}
A.uq.prototype={
$0(){var s,r,q,p=this,o=p.a.d2(new A.hQ(A.AR(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.f1(s.byteLength)
o.dX(A.bB(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.f0()
r=new Uint8Array(q)
o.i5(r,0)
q={r:t.a.a(J.CF(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.i3()}},
$S:32}
A.ur.prototype={
$0(){return this.a.i2(A.AR(B.aG[this.b.f]),0)===1},
$S:41}
A.um.prototype={
$1(a){return a.b===this.a},
$S:169}
A.jt.prototype={
gct(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gct=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.ha(new A.oj(p),t.H):o,$async$gct)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gct,r)},
gbY(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gbY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.ha(new A.oi(p),t.u):o,$async$gbY)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gbY,r)},
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
if(j!=null)j.un()
n.a.p()
m=q.z
if(m!=null){j=p.a
l=$.yR()
A.xJ(m)
k=l.a.get(m)
if(k==null)A.x(A.w("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.p?j:A.bk(j,t.H),$async$p)
case 6:q.f.mo()
return A.e(null,r)}})
return A.f($async$p,r)},
lb(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.F(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.au(s,!0)
p=a.hO(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.F(0,new A.Z(n,A.o(n).i("Z<1>")).gC(0)).p()
n.j(0,p.d,p)
return new A.au(p,!0)}return new A.au(p,!1)},
uC(a,b,c){var s,r,q
if(c.gl(0)===0)return a.aw(b,B.w)
else{s=null
r=null
q=this.lb(a,b)
s=q.a
r=q.b
try{s.jr(new A.jq(c.gtB()))}finally{if(r)s.cX()
else s.p()}}},
nk(a,b,c){var s,r=null,q=null,p=this.lb(a,b)
r=p.a
q=p.b
try{s=A.E_(r,c)
return s}finally{if(q)r.cX()
else r.p()}}}
A.oj.prototype={
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
return A.a(A.rl("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gdz()
s=3
break
case 5:case 6:s=10
return A.a(A.jG("drift_db/"+l.c,k===B.ab,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.gdz()
s=3
break
case 7:s=11
return A.a(A.jN(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gdz()
s=3
break
case 8:l.z=A.xP("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.oi.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gct(),$async$$0)
case 4:n=b
o.m9()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.ep(B.i.v(n.a),1),n,0)
if(m===0)A.x(A.w("could not register vfs"))
$.yR().j(0,n,m)
s=5
return A.a(l.f.jC(new A.oh(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:64}
A.oh.prototype={
$0(){var s=this.a
return s.a.b.hM(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:64}
A.tw.prototype={
gkZ(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.ns()
r.Q!==$&&A.xs()
r.Q=s
q=s}return q},
dG(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$dG=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.bR(A.bF(A.FK(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$dG)
case 7:if(!b){s=6
break}m=h.gn()
s=J.u(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.fY(i.port,i.lockName,null)
n.kq(l)
s=9
break
case 10:s=A.Hs(m.t)?11:12
break
case 11:s=13
return A.a(n.lP(m),$async$dG)
case 13:k=b
j.postMessage(k.gmx())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.A(),$async$dG)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dG,r)},
kq(a){var s=this,r=A.EG(a,s.d++,s)
s.c.push(r)
r.b.a.aO(new A.tx(s,r))
return r},
lP(a){return this.x.jY(new A.ty(this,a),t.p6)},
bX(a){return this.vv(a)},
vv(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$bX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.b_(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.w("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bk(n,t.he),$async$bX)
case 5:s=3
break
case 4:o=A.xM(q.b.bX(m),new A.tz(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$bX)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$bX,r)},
uK(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aM(s,s.r,s.e,A.o(s).i("aM<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ab||b===B.aA
o=A.xV(t.cj)
n=c===0?null:new A.qL(c,A.hk(null,null,t.N,t.fw))
n=new A.jt(this,r,a,b,d,new A.js(q+"-outer",q,new A.ht(o),p),n)
s.j(0,r,n)
return n}}
A.tx.prototype={
$0(){var s=this.a,r=s.c
B.b.F(r,this.b)
if(r.length===0)s.a.p()
return null},
$S:0}
A.ty.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.u(d.t,"dedicatedCompatibilityCheck")||J.u(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.dq(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.u(d.t,"dedicatedCompatibilityCheck")||J.u(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.mv(),$async$$0)
case 9:case 8:j=a1
i=A.aU(t.cU)
s=J.u(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gkZ()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.fF(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.ff(n,"message",!1,t.d4).gC(0),$async$$0)
case 15:e=b.CZ(a.b_(a1.data))
k=e.c
l=e.d
i.E(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.a(A.fI(),$async$$0)
case 18:d=b.M(a1)
case 19:if(!d.k()){s=20
break}i.t(0,new A.au(B.aS,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.wL(c),$async$$0)
case 23:if(a1)i.t(0,new A.au(B.aT,c))
case 22:d=A.P(i,i.$ti.c)
q=new A.dF(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:171}
A.tz.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:172}
A.iL.prototype={}
A.lx.prototype={
gm8(){return new A.ff(this.a,"message",!1,t.d4)},
p(){return this.a.close()}}
A.m1.prototype={
gm8(){return new A.cO(new A.vP(this),t.k8)},
p(){}}
A.vP.prototype={
$1(a){var s=A.l([],t.B),r=A.l([],t.dw)
r.push(A.b8(this.a.a,"connect",new A.vM(new A.vQ(s,r,a)),!1,t.m))
a.r=new A.vN(r)},
$S:173}
A.vQ.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.b8(a,"message",new A.vO(this.c),!1,t.m))},
$S:2}
A.vO.prototype={
$1(a){this.a.tq(a)},
$S:2}
A.vM.prototype={
$1(a){var s,r=a.ports
r=J.M(t.ip.b(r)?r:new A.bw(r,A.a8(r).i("bw<1,H>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:2}
A.vN.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.B)(s),++q)s[q].A()},
$S:4}
A.ly.prototype={
ns(){var s=v.G
if(!("Worker" in s))return null
return new A.uQ(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.uQ.prototype={}
A.kO.prototype={
gf9(){return A.J(this.c)}}
A.rD.prototype={
gjB(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
i8(a){var s,r=this,q=r.d=J.CH(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gI()
return s},
m1(a,b){var s
if(this.i8(a))return
if(b==null)if(a instanceof A.eB)b="/"+a.a+"/"
else{s=J.aw(a)
s=A.A(s,"\\","\\\\")
b='"'+A.A(s,'"','\\"')+'"'}this.kR(b)},
ex(a){return this.m1(a,null)},
uF(){if(this.c===this.b.length)return
this.kR("no more input")},
uB(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.x(A.aJ("position must be greater than or equal to 0."))
else if(c>n.length)A.x(A.aJ("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.x(A.aJ("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.rn(s,r,new Uint32Array(q))
p.nQ(new A.bY(n),s)
o=c+b
if(o>q)A.x(A.aJ("End "+o+u.D+p.gl(0)+"."))
else if(c<0)A.x(A.aJ("Start may not be negative, was "+c+"."))
throw A.b(new A.kO(n,a,new A.fg(p,c,o)))},
kR(a){this.uB("expected "+a+".",0,this.c)}}
A.f0.prototype={
gl(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.zo(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.zo(b,this))
s=this.a
s.$flags&2&&A.C(s)
s[b]=c},
sl(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.C(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.kH(b)
B.d.af(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.t3(q)
q=r.a
s=r.b++
q.$flags&2&&A.C(q)
q[s]=b},
kH(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
t3(a){var s=this.kH(null)
B.d.af(s,0,a,this.a)
this.a=s},
ab(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ak(c,0,s,null,null))
s=this.a
if(d instanceof A.c7)B.d.ab(s,b,c,d.a,e)
else B.d.ab(s,b,c,d,e)},
af(a,b,c,d){return this.ab(0,b,c,d,0)}}
A.lH.prototype={}
A.c7.prototype={}
A.xH.prototype={}
A.ff.prototype={
a5(a,b,c,d){return A.b8(this.a,this.b,a,!1,this.$ti.c)},
bA(a,b,c){return this.a5(a,null,b,c)}}
A.ig.prototype={
A(){var s=this,r=A.c_(null,t.H)
if(s.b==null)return r
s.j7()
s.d=s.b=null
return r},
hK(a){var s,r=this
if(r.b==null)throw A.b(A.w("Subscription has been canceled."))
r.j7()
s=A.Bf(new A.uU(a),t.m)
s=s==null?null:A.ct(s)
r.d=s
r.j5()},
be(){if(this.b==null)return;++this.a
this.j7()},
b3(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.j5()},
j5(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
j7(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibg:1}
A.uT.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.uU.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.d1.prototype
s.nF=s.m
s=A.bz.prototype
s.nB=s.ma
s.nC=s.mb
s.nE=s.md
s.nD=s.mc
s=A.aK.prototype
s.i9=s.ar
s.km=s.aB
s.kn=s.aL
s=A.cM.prototype
s.nI=s.kF
s.nJ=s.kU
s.nK=s.lq
s=A.D.prototype
s.kl=s.ab
s=A.aq.prototype
s.kk=s.tA
s=A.iA.prototype
s.nL=s.p
s=A.jb.prototype
s.kj=s.hr
s=A.bX.prototype
s.nA=s.hm
s=A.eT.prototype
s.nH=s.T
s.nG=s.X})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"FT","Dr",42)
r(A,"G5","DP",10)
q(A,"GA","Es",13)
q(A,"GB","Et",13)
q(A,"GC","Eu",13)
q(A,"GD","G7",26)
r(A,"Bh","Gt",0)
q(A,"GE","G8",23)
s(A,"GF","Ga",11)
r(A,"wJ","G9",0)
p(A,"GK",5,null,["$5"],["Gn"],175,0)
p(A,"GP",4,null,["$1$4","$4"],["wE",function(a,b,c,d){return A.wE(a,b,c,d,t.z)}],176,0)
p(A,"GR",5,null,["$2$5","$5"],["wF",function(a,b,c,d,e){var i=t.z
return A.wF(a,b,c,d,e,i,i)}],177,0)
p(A,"GQ",6,null,["$3$6"],["yA"],178,0)
p(A,"GN",4,null,["$1$4","$4"],["B5",function(a,b,c,d){return A.B5(a,b,c,d,t.z)}],179,0)
p(A,"GO",4,null,["$2$4","$4"],["B6",function(a,b,c,d){var i=t.z
return A.B6(a,b,c,d,i,i)}],180,0)
p(A,"GM",4,null,["$3$4","$4"],["B4",function(a,b,c,d){var i=t.z
return A.B4(a,b,c,d,i,i,i)}],181,0)
p(A,"GI",5,null,["$5"],["Gm"],182,0)
p(A,"GS",4,null,["$4"],["wG"],183,0)
p(A,"GH",5,null,["$5"],["Gl"],184,0)
p(A,"GG",5,null,["$5"],["Gk"],185,0)
p(A,"GL",4,null,["$4"],["Go"],186,0)
p(A,"GJ",5,null,["$5"],["B3"],187,0)
var j
o(j=A.e7.prototype,"ge9","bv",0)
o(j,"gea","bw",0)
n(A.e8.prototype,"gtK",0,1,null,["$2","$1"],["bm","aD"],49,0,0)
m(A.p.prototype,"gik","om",11)
n(j=A.dl.prototype,"gtm",0,1,null,["$2","$1"],["by","tn"],49,0,0)
l(j,"go3","ar",14)
m(j,"go1","aB",11)
o(j,"goh","aL",0)
o(j=A.dg.prototype,"ge9","bv",0)
o(j,"gea","bw",0)
o(j=A.aK.prototype,"ge9","bv",0)
o(j,"gea","bw",0)
o(A.fe.prototype,"gl8","r2",0)
l(j=A.bR.prototype,"gqV","qW",14)
m(j,"gqZ","r_",11)
o(j,"gqX","qY",0)
o(j=A.fh.prototype,"ge9","bv",0)
o(j,"gea","bw",0)
l(j,"giz","iA",14)
m(j,"giD","iE",147)
o(j,"giB","iC",0)
o(j=A.fo.prototype,"ge9","bv",0)
o(j,"gea","bw",0)
l(j,"giz","iA",14)
m(j,"giD","iE",11)
o(j,"giB","iC",0)
s(A,"yD","FF",28)
q(A,"yE","FG",29)
s(A,"GX","Dw",42)
q(A,"H0","FI",31)
k(j=A.lq.prototype,"gtl","t",14)
o(j,"gdz","p",0)
q(A,"Bo","Hk",29)
s(A,"Bn","Hj",28)
q(A,"H1","Ej",7)
p(A,"Hy",2,null,["$1$2","$2"],["BB",function(a,b){return A.BB(a,b,t.o)}],188,0)
m(j=A.jw.prototype,"guA","ag",28)
l(j,"gvd","ap",29)
l(j,"gvm","vn",26)
q(A,"GV","CR",7)
q(A,"H4","D7",7)
r(A,"Hu","FH",10)
o(A.lt.prototype,"guO","m5",0)
l(A.kl.prototype,"gvY","vZ",8)
o(A.hB.prototype,"gum","hm",0)
o(j=A.bX.prototype,"gK","av",0)
o(j,"gvh","hD","y<bX.T>()")
l(j,"gqT","qU",33)
o(j,"glC","el",3)
q(A,"Ha","zj",189)
o(j=A.ko.prototype,"gr0","r1",0)
l(j,"gr3","r4",73)
q(A,"GZ","xD",190)
l(j=A.kQ.prototype,"gv2","v3",33)
l(j,"gv0","v1",82)
o(j,"gqS","iS",0)
q(A,"HN","Eb",191)
q(A,"Bm","bG",21)
q(A,"Bl","my",21)
q(A,"HR","En",142)
m(j=A.l9.prototype,"gp_","ix",1)
m(j,"goV","cE",1)
m(j=A.l7.prototype,"gpb","fp",1)
m(j,"gp9","fo",1)
m(j,"gpd","fq",1)
m(j,"gp5","fm",1)
m(j,"gp7","fn",1)
m(j,"gpf","iy",1)
m(j=A.l8.prototype,"gpB","fA",1)
m(j,"gpH","e6",1)
m(j,"gpJ","fB",1)
m(j=A.lb.prototype,"gpu","iG",1)
m(j,"gpw","iH",1)
m(j,"gpy","fw",1)
m(j,"gps","iF",1)
m(j,"gpm","fu",1)
m(j,"gpo","dg",1)
m(j,"gpq","fv",1)
m(j,"gpk","ft",1)
m(j,"gpi","fs",1)
m(j=A.lc.prototype,"gpD","iI",1)
m(j,"goT","iw",1)
m(j,"goR","fk",1)
m(j,"gqs","fS",1)
m(j,"gqq","fR",1)
m(j,"gpN","fC",1)
m(j,"goX","fl",1)
m(j,"gpT","fD",1)
m(j=A.ld.prototype,"gq2","dh",1)
m(j,"gq6","fI",1)
m(j,"gpV","fE",1)
m(j,"gpX","fF",1)
m(j,"gpZ","fG",1)
m(j,"gq0","fH",1)
m(j,"gq8","fJ",1)
m(j,"gq4","iK",1)
m(j=A.le.prototype,"gqa","fK",1)
m(j,"gqe","fM",1)
m(j,"gqg","fN",1)
m(j,"gqo","fQ",1)
m(j,"gqm","e7",1)
m(j,"gqi","fO",1)
m(j,"gqc","fL",1)
m(j,"gqk","fP",1)
m(j=A.lf.prototype,"gqy","fV",1)
m(j,"gqw","fU",1)
m(j,"gqu","fT",1)
l(j=A.jr.prototype,"gvy","vz",8)
m(j,"gvw","vx",127)
n(j,"gx_",0,5,null,["$5"],["x0"],193,0,0)
n(j,"gwP",0,3,null,["$3"],["wQ"],129,0,0)
n(j,"gwH",0,4,null,["$4"],["wI"],58,0,0)
n(j,"gwW",0,4,null,["$4"],["wX"],58,0,0)
n(j,"gx3",0,3,null,["$3"],["x4"],131,0,0)
m(j,"gx8","x9",59)
m(j,"gwN","wO",59)
l(j,"gwL","wM",37)
n(j,"gx5",0,4,null,["$4"],["x6"],60,0,0)
n(j,"gxg",0,4,null,["$4"],["xh"],60,0,0)
m(j,"gxc","xd",135)
m(j,"gxa","xb",18)
m(j,"gwU","wV",18)
m(j,"gwY","wZ",18)
m(j,"gxe","xf",18)
m(j,"gwJ","wK",18)
l(j,"gi4","wR",37)
n(j,"gwS",0,3,null,["$3"],["wT"],137,0,0)
l(j,"gi6","x7",37)
l(j,"gu7","u8",13)
l(j,"gu2","u3",138)
n(j,"gu5",0,5,null,["$5"],["u6"],139,0,0)
n(j,"gue",0,4,null,["$4"],["uf"],38,0,0)
n(j,"gui",0,4,null,["$4"],["uj"],38,0,0)
n(j,"gug",0,4,null,["$4"],["uh"],38,0,0)
m(j,"guk","ul",61)
m(j,"guc","ud",61)
n(j,"gu9",0,5,null,["$5"],["ua"],192,0,0)
m(j,"gu0","u1",143)
m(j,"gtZ","u_",144)
n(j,"gtX",0,3,null,["$3"],["tY"],145,0,0)
o(j=A.cZ.prototype,"gdz","p",3)
o(j,"guM","cl",3)
o(A.eR.prototype,"gdz","p",0)
o(A.js.prototype,"gpL","pM",0)
l(A.dG.prototype,"gtB","lN",162)
l(A.i9.prototype,"gv4","v5",2)
q(A,"Bk","Bu",128)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.xT,J.jP,A.hN,J.eu,A.uI,A.uj,A.n,A.jj,A.dC,A.a6,A.D,A.rj,A.a9,A.k3,A.de,A.jD,A.kS,A.kB,A.jA,A.l6,A.h6,A.kY,A.kP,A.fm,A.fZ,A.fi,A.c1,A.rV,A.kh,A.h2,A.ix,A.U,A.pq,A.bK,A.aM,A.jZ,A.eB,A.fl,A.lj,A.eW,A.vX,A.lr,A.mb,A.c0,A.lD,A.w1,A.iB,A.i2,A.ll,A.il,A.m7,A.ad,A.a3,A.aK,A.i7,A.kT,A.ij,A.e8,A.bP,A.p,A.lk,A.dl,A.m8,A.i4,A.lh,A.lz,A.uR,A.dk,A.fe,A.bR,A.ie,A.wn,A.wp,A.wo,A.wl,A.wm,A.wk,A.wh,A.mm,A.wg,A.wf,A.wj,A.wi,A.ml,A.mn,A.mk,A.fx,A.i1,A.lE,A.vy,A.dj,A.lK,A.aV,A.lN,A.ma,A.hr,A.lL,A.kN,A.jl,A.aq,A.ln,A.n2,A.lm,A.jk,A.m2,A.e9,A.vv,A.vY,A.mc,A.cP,A.aA,A.lC,A.b2,A.az,A.uS,A.ki,A.hS,A.lB,A.b4,A.jO,A.X,A.Q,A.m6,A.kJ,A.ri,A.ab,A.iI,A.t0,A.bQ,A.jE,A.kg,A.vo,A.vp,A.jB,A.W,A.jx,A.hf,A.dP,A.ft,A.fk,A.ho,A.jw,A.kf,A.kZ,A.bZ,A.ew,A.oR,A.dB,A.ja,A.jb,A.mZ,A.k9,A.eF,A.kI,A.aO,A.a0,A.na,A.nb,A.nc,A.mL,A.tT,A.jy,A.no,A.jv,A.hm,A.kK,A.qJ,A.lM,A.lt,A.fa,A.kl,A.rc,A.aL,A.cY,A.h8,A.bM,A.nA,A.bI,A.ls,A.bo,A.vK,A.bX,A.tP,A.n0,A.kL,A.h4,A.oy,A.b3,A.px,A.kU,A.mX,A.ko,A.qq,A.hE,A.fp,A.qy,A.vR,A.dL,A.cW,A.jJ,A.cg,A.cX,A.da,A.qo,A.mM,A.bm,A.nC,A.kQ,A.hp,A.dU,A.pS,A.d3,A.k4,A.vF,A.vD,A.qb,A.n_,A.hn,A.hL,A.qg,A.kr,A.qW,A.aN,A.r4,A.b5,A.eY,A.eX,A.rF,A.bh,A.eV,A.ck,A.eN,A.hK,A.cd,A.rH,A.hJ,A.hV,A.rS,A.cm,A.cj,A.dV,A.o2,A.e2,A.lu,A.l_,A.t_,A.f6,A.l5,A.ti,A.h0,A.hI,A.kv,A.T,A.f7,A.l9,A.l7,A.l8,A.lb,A.lc,A.we,A.ld,A.w0,A.le,A.f8,A.lf,A.nJ,A.rE,A.kj,A.kk,A.rn,A.kE,A.eT,A.oS,A.b9,A.c8,A.c2,A.kH,A.c3,A.cG,A.o3,A.dm,A.rp,A.dE,A.aP,A.je,A.nN,A.lX,A.vE,A.dM,A.jq,A.cL,A.hQ,A.td,A.t8,A.tf,A.te,A.e1,A.dd,A.jr,A.ea,A.t9,A.mT,A.ik,A.uV,A.lO,A.lG,A.vA,A.t3,A.fY,A.rh,A.fU,A.jp,A.jF,A.oQ,A.cx,A.js,A.ht,A.dF,A.qL,A.eO,A.iz,A.fb,A.jt,A.tw,A.iL,A.ly,A.uQ,A.rD,A.xH,A.ig])
q(J.jP,[J.jR,J.hh,J.as,J.ba,J.eC,J.dN,J.d_])
q(J.as,[J.d1,J.z,A.eI,A.hv])
q(J.d1,[J.km,J.dc,J.bx])
r(J.jQ,A.hN)
r(J.pn,J.z)
q(J.dN,[J.hg,J.jS])
q(A.n,[A.df,A.F,A.cA,A.bj,A.h3,A.e0,A.cE,A.bp,A.ed,A.li,A.m5,A.fr,A.dO])
q(A.df,[A.dA,A.iM])
r(A.ic,A.dA)
r(A.i8,A.iM)
q(A.dC,[A.ne,A.nd,A.ph,A.rT,A.x9,A.xb,A.u0,A.u_,A.ws,A.wr,A.oO,A.oJ,A.uZ,A.uY,A.v9,A.vc,A.rz,A.rA,A.rx,A.uP,A.uO,A.vJ,A.vf,A.uL,A.vx,A.pM,A.vt,A.nM,A.ue,A.oK,A.xd,A.xj,A.xk,A.wQ,A.n5,A.n7,A.n9,A.jd,A.n1,A.wu,A.n3,A.pQ,A.x0,A.xt,A.rq,A.rr,A.x_,A.ot,A.os,A.ou,A.or,A.oq,A.op,A.om,A.on,A.oo,A.pL,A.pH,A.pK,A.pJ,A.pI,A.pF,A.uB,A.uy,A.q2,A.q_,A.q1,A.nm,A.nk,A.nj,A.nn,A.nl,A.ni,A.nh,A.tQ,A.xi,A.oB,A.oz,A.oC,A.oD,A.py,A.pA,A.pC,A.pE,A.pz,A.th,A.qx,A.qt,A.qu,A.qv,A.qw,A.qr,A.qs,A.qD,A.qE,A.qz,A.qA,A.qB,A.qC,A.qG,A.mN,A.mO,A.nE,A.nD,A.rQ,A.rI,A.rO,A.rJ,A.rK,A.rL,A.wN,A.wO,A.pZ,A.pT,A.pU,A.pV,A.pW,A.pX,A.qd,A.qe,A.qn,A.ql,A.qk,A.qj,A.qm,A.r2,A.qX,A.qZ,A.r0,A.r5,A.ra,A.rG,A.x2,A.xn,A.xl,A.xm,A.np,A.pv,A.pw,A.xg,A.x7,A.x6,A.wU,A.tu,A.to,A.tp,A.tq,A.tB,A.tC,A.tD,A.tE,A.tL,A.tF,A.nK,A.nL,A.wH,A.oU,A.oT,A.oV,A.oX,A.oZ,A.oW,A.pc,A.rs,A.ob,A.vU,A.xh,A.xo,A.xp,A.mS,A.uJ,A.uK,A.ns,A.nt,A.nx,A.ny,A.nz,A.oE,A.mW,A.mU,A.vi,A.vl,A.vm,A.pg,A.pe,A.vh,A.rm,A.t4,A.t5,A.t6,A.t7,A.qU,A.qV,A.qT,A.qS,A.qR,A.tj,A.oe,A.q7,A.ov,A.wM,A.nq,A.nr,A.nu,A.nv,A.nw,A.wz,A.uo,A.ut,A.uw,A.um,A.vP,A.vQ,A.vO,A.vM,A.uT,A.uU])
q(A.ne,[A.uk,A.nI,A.po,A.xa,A.wt,A.wI,A.oP,A.oI,A.v_,A.va,A.vd,A.tS,A.ve,A.pr,A.pO,A.vw,A.ud,A.w8,A.t1,A.w7,A.w6,A.oM,A.oL,A.n4,A.n6,A.n8,A.jc,A.q6,A.pR,A.xu,A.wK,A.q3,A.qI,A.qp,A.mP,A.wY,A.wS,A.tl,A.wV,A.ts,A.tt,A.oY,A.vn,A.tk,A.uF,A.tz])
r(A.bw,A.i8)
q(A.a6,[A.d0,A.ks,A.cJ,A.jT,A.kX,A.ky,A.lA,A.hD,A.hj,A.j5,A.bv,A.cq,A.kW,A.bf,A.jn])
q(A.D,[A.f1,A.f5,A.dG,A.f0])
r(A.bY,A.f1)
q(A.nd,[A.xf,A.qN,A.u1,A.u2,A.w_,A.vZ,A.wq,A.u4,A.u5,A.u7,A.u8,A.u6,A.u3,A.oN,A.v0,A.v5,A.v4,A.v2,A.v1,A.v8,A.v7,A.v6,A.vb,A.ry,A.rB,A.rw,A.vT,A.vS,A.tR,A.ui,A.uh,A.vB,A.vz,A.wv,A.ww,A.uN,A.uM,A.vI,A.vH,A.wD,A.wb,A.wa,A.ok,A.wB,A.wC,A.pP,A.pG,A.uC,A.uz,A.uA,A.ow,A.pd,A.oH,A.rv,A.nf,A.ng,A.rU,A.qa,A.oA,A.ox,A.pB,A.pD,A.qH,A.qF,A.nB,A.nH,A.nG,A.nF,A.rN,A.rM,A.rP,A.r3,A.qY,A.r_,A.r1,A.r6,A.rb,A.r9,A.r8,A.r7,A.rR,A.qi,A.qc,A.tn,A.tv,A.tA,A.tM,A.tO,A.tN,A.tG,A.tK,A.tJ,A.tI,A.tH,A.pb,A.p_,A.p6,A.p7,A.p8,A.p9,A.p4,A.p5,A.p0,A.p1,A.p2,A.p3,A.pa,A.vg,A.oc,A.od,A.o9,A.o8,A.oa,A.o5,A.o4,A.o6,A.o7,A.vV,A.vW,A.xq,A.nS,A.nP,A.nU,A.nW,A.nY,A.nR,A.nX,A.o1,A.o_,A.nZ,A.nT,A.nV,A.o0,A.nQ,A.mQ,A.mR,A.ta,A.mV,A.vj,A.vk,A.uW,A.pf,A.of,A.og,A.q9,A.q8,A.uD,A.uH,A.uE,A.uG,A.un,A.us,A.uv,A.up,A.uu,A.ux,A.uq,A.ur,A.oj,A.oi,A.oh,A.tx,A.ty,A.vN])
q(A.F,[A.S,A.dJ,A.Z,A.aT,A.aI,A.ec,A.io])
q(A.S,[A.c4,A.a7,A.dW,A.hl,A.lJ])
r(A.dI,A.cA)
r(A.h1,A.e0)
r(A.ey,A.cE)
q(A.fm,[A.lP,A.lQ,A.lR])
q(A.lP,[A.au,A.iu,A.iv,A.fn,A.lS])
r(A.eg,A.lQ)
q(A.lR,[A.eh,A.lT])
r(A.aR,A.fZ)
q(A.c1,[A.h_,A.iw])
r(A.cw,A.h_)
r(A.hd,A.ph)
r(A.hA,A.cJ)
q(A.rT,[A.rt,A.fR])
q(A.U,[A.bz,A.cM,A.lI])
q(A.bz,[A.hi,A.im])
r(A.eH,A.eI)
q(A.hv,[A.hu,A.eJ])
q(A.eJ,[A.iq,A.is])
r(A.ir,A.iq)
r(A.d5,A.ir)
r(A.it,A.is)
r(A.bA,A.it)
q(A.d5,[A.ka,A.kb])
q(A.bA,[A.kc,A.kd,A.ke,A.hw,A.hx,A.hy,A.dT])
r(A.iC,A.lA)
q(A.a3,[A.fq,A.hT,A.id,A.cO,A.ih,A.i6,A.fQ,A.ff])
r(A.b7,A.fq)
r(A.aY,A.b7)
q(A.aK,[A.dg,A.fh,A.fo])
r(A.e7,A.dg)
r(A.i3,A.i7)
q(A.e8,[A.ax,A.ae])
q(A.dl,[A.cr,A.fs])
r(A.iy,A.lh)
q(A.lz,[A.bO,A.fd])
r(A.ip,A.cr)
r(A.ee,A.ih)
q(A.mk,[A.lv,A.lW])
q(A.cM,[A.dh,A.ia])
r(A.cN,A.iw)
r(A.iH,A.hr)
r(A.f2,A.iH)
q(A.kN,[A.iA,A.w2,A.u9,A.m4])
r(A.vr,A.iA)
q(A.jl,[A.dK,A.mY,A.pp])
q(A.dK,[A.j3,A.jX,A.l3])
q(A.aq,[A.m9,A.j9,A.j8,A.jW,A.jV,A.l4,A.hX,A.jI])
q(A.m9,[A.j4,A.jY])
r(A.uf,A.ln)
q(A.n2,[A.ua,A.f9,A.lq,A.w9])
r(A.tY,A.ua)
r(A.jU,A.hj)
r(A.vs,A.jk)
r(A.vu,A.vv)
r(A.mo,A.mc)
r(A.wc,A.mo)
q(A.bv,[A.cD,A.hb])
r(A.lw,A.iI)
r(A.eQ,A.ft)
r(A.lZ,A.jI)
r(A.vL,A.oR)
r(A.m_,A.vL)
r(A.kw,A.dB)
r(A.jh,A.ja)
r(A.cT,A.hT)
q(A.jb,[A.q5,A.rg])
r(A.hU,A.mZ)
r(A.kM,A.hU)
r(A.fS,A.W)
q(A.uS,[A.kn,A.fT,A.cU,A.cy,A.jo,A.jz,A.bJ,A.hc,A.q4,A.dS,A.dx,A.bN,A.j7,A.cn,A.fO,A.eK,A.hC,A.hR,A.qf,A.eA,A.k5,A.cV,A.c6,A.h5,A.d9])
q(A.hm,[A.hY,A.hW,A.hz,A.fV,A.hF,A.h7,A.cH,A.hM,A.hO,A.eP,A.fX,A.ev,A.rf])
r(A.h9,A.eP)
r(A.k0,A.lM)
r(A.dD,A.ls)
q(A.bX,[A.hB,A.jm])
r(A.tg,A.n0)
r(A.tZ,A.vD)
q(A.bh,[A.f_,A.dX,A.hP,A.bH,A.cf,A.ci,A.eL,A.eM,A.ex,A.dy])
r(A.pu,A.o2)
r(A.k1,A.e2)
q(A.f7,[A.i0,A.e3])
r(A.md,A.l9)
r(A.me,A.md)
r(A.mf,A.me)
r(A.mg,A.mf)
r(A.mh,A.mg)
r(A.mi,A.mh)
r(A.mj,A.mi)
r(A.tr,A.mj)
r(A.pl,A.rE)
q(A.pl,[A.qK,A.t2,A.tm])
r(A.jH,A.kE)
q(A.eT,[A.fg,A.kG])
r(A.eS,A.kH)
r(A.cF,A.kG)
r(A.eU,A.dE)
r(A.jf,A.aP)
q(A.jf,[A.jL,A.cZ,A.eR])
q(A.je,[A.lF,A.m3])
r(A.lU,A.nN)
r(A.lV,A.lU)
r(A.kx,A.lV)
r(A.lY,A.lX)
r(A.bL,A.lY)
q(A.aV,[A.e6,A.aQ])
r(A.f4,A.rp)
q(A.aQ,[A.ii,A.ib,A.fc,A.fw])
r(A.qQ,A.rh)
r(A.nO,A.jp)
r(A.cS,A.eO)
r(A.i9,A.qQ)
q(A.iL,[A.lx,A.m1])
r(A.kO,A.eS)
r(A.lH,A.f0)
r(A.c7,A.lH)
s(A.f1,A.kY)
s(A.iM,A.D)
s(A.iq,A.D)
s(A.ir,A.h6)
s(A.is,A.D)
s(A.it,A.h6)
s(A.cr,A.i4)
s(A.fs,A.m8)
s(A.iH,A.ma)
s(A.mo,A.kN)
s(A.lM,A.nb)
s(A.ls,A.nc)
s(A.md,A.l8)
s(A.me,A.lc)
s(A.mf,A.le)
s(A.mg,A.lf)
s(A.mh,A.ld)
s(A.mi,A.lb)
s(A.mj,A.l7)
s(A.lU,A.D)
s(A.lV,A.kf)
s(A.lX,A.kZ)
s(A.lY,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",a4:"double",cu:"num",k:"String",V:"bool",Q:"Null",q:"List",j:"Object",G:"Map",H:"JSObject"},mangledNames:{},types:["~()","y<j?>(la,f6)","~(H)","y<~>()","Q()","y<Q>(bo)","y<~>(bo)","k(k)","~(i)","Q(j,at)","i()","~(j,at)","V(k)","~(~())","~(j?)","V(@)","y<Q>()","y<aN>()","i(b6,i)","Q(H)","y<~>(ik)","j?(j?)","~(q<i>)","~(@)","Q(@)","Q(j)","V(j?)","y<~>(~)","V(j?,j?)","i(j?)","~(k,k)","@(@)","H()","~(a0)","~(@,@)","V(b9)","0&()","i(b6)","~(ku,i,i,i)","~(j?,j?)","j?(G<k,j?>)","V()","i(@,@)","@(k)","@()","V(cY)","y<Q>(xE)","y<@>()","~(k,@)","~(j[at?])","V(b3)","y<cg>(k)","i(cg)","Q(~)","k(dR)","k(G<k,j?>)","V(aL)","y<q<G<k,j?>>>(k,q<j?>)","i(aP,i,i,i)","i(aP,i)","i(b6,i,i,ba)","~(ku,i)","y<bg<~>>()","~(~)","y<e2>()","Q(bx,bx)","0&(k,i?)","i(+(k,j),+(k,j))","y<a3<q<i>>>()","k?(G<k,j?>)","b3()","y<b3>(bo)","p<@>?()","~(hE)","X<k,cW>(k,eV)","ck(@)","e9<@,@>(bn<@>)","i(i,i)","y<da>(k)","i(da)","V(+(k,j))","bm()","~(cd)","~(cI)","y<b5>(b5)","b5(b5)","b5(j)","~(k,k?)","d3/(j?)","y<j?>(j?)","G<k,j?>(q<j?>)","y<i>(bo)","i(+(k,j?),+(k,j?))","j?(~)","k(i[i])","cm()","cj()","dV()","y<@>(bo)","y<V>(k)","y<~>(k)","bI<j?>(@)","V(bI<j?>)","V(bM)","X<k,j?>(@,@)","Q(~())","i(bM,bM)","~(aO)","~(q<bm>)","a3<q<i>>()","~(eY)","~(q<G<k,j?>>)","~(G<k,j?>?)","y<G<k,j?>?>()","k(k?)","k?()","i(c8)","~(q<bZ>)","j(c8)","j(b9)","i(b9,b9)","q<c8>(X<j,q<b9>>)","cF()","k(j?)","~(i,k,i)","Q(@,at)","~(N,al,N,~())","~(ba,i)","G<k,j?>(bm)","i(aP,i,i)","aL()","i(aP?,i,i)","cY()","V(k,k)","h8()","i(b6,ba)","i(k)","i(b6,i,i)","i(i())","~(~(i,k,i),i,i,i,ba)","Q(k,k[j?])","bM()","G<k,j?>(b3)","i(i(i),i)","i(y6,i)","i(y6,i,i)","~(d4<q<i>>)","~(@,at)","H(z<j?>)","~(i,@)","eF()","H(H?)","~(dz)","y<~>(i,cp)","y<~>(i)","cp()","y<H>(k)","Q(cx)","y<Q>(H)","H(j)","Q(j?,at)","k?(j?)","~(dE)","H(H)","y<H>()","i(i)","y<G<k,j?>?>(k)","y<bg<c3>>()","~(c3)","V(fb)","G<k,j?>(bL)","y<dF>()","0&(j?,at)","~(d4<H>)","@(@,k)","~(N?,al?,N,j,at)","0^(N?,al?,N,0^())<j?>","0^(N?,al?,N,0^(1^),1^)<j?,j?>","0^(N?,al?,N,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(N,al,N,0^())<j?>","0^(1^)(N,al,N,0^(1^))<j?,j?>","0^(1^,2^)(N,al,N,0^(1^,2^))<j?,j?,j?>","ad?(N,al,N,j,at?)","~(N?,al?,N,~())","cI(N,al,N,az,~())","cI(N,al,N,az,~(cI))","~(N,al,N,k)","N(N?,al?,N,i1?,G<j?,j?>?)","0^(0^,0^)<cu>","b3(G<k,j?>)","bm(G<k,j?>)","a4(i)","i(ku,i,i,i,i)","b6?(aP,i,i,i,i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.au&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.iu&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.iv&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.fn&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.lS&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eg&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eh&&A.BF(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.lT&&A.BF(a,b.a)}}
A.Fa(v.typeUniverse,JSON.parse('{"bx":"d1","km":"d1","dc":"d1","I8":"eI","z":{"q":["1"],"as":[],"F":["1"],"H":[],"n":["1"],"aS":["1"]},"jR":{"V":[],"aa":[]},"hh":{"Q":[],"aa":[]},"as":{"H":[]},"d1":{"as":[],"H":[]},"jQ":{"hN":[]},"pn":{"z":["1"],"q":["1"],"as":[],"F":["1"],"H":[],"n":["1"],"aS":["1"]},"dN":{"a4":[],"am":["cu"]},"hg":{"a4":[],"i":[],"am":["cu"],"aa":[]},"jS":{"a4":[],"am":["cu"],"aa":[]},"d_":{"k":[],"am":["k"],"aS":["@"],"aa":[]},"df":{"n":["2"]},"dA":{"df":["1","2"],"n":["2"],"n.E":"2"},"ic":{"dA":["1","2"],"df":["1","2"],"F":["2"],"n":["2"],"n.E":"2"},"i8":{"D":["2"],"q":["2"],"df":["1","2"],"F":["2"],"n":["2"]},"bw":{"i8":["1","2"],"D":["2"],"q":["2"],"df":["1","2"],"F":["2"],"n":["2"],"D.E":"2","n.E":"2"},"d0":{"a6":[]},"ks":{"a6":[]},"bY":{"D":["i"],"q":["i"],"F":["i"],"n":["i"],"D.E":"i"},"F":{"n":["1"]},"S":{"F":["1"],"n":["1"]},"c4":{"S":["1"],"F":["1"],"n":["1"],"S.E":"1","n.E":"1"},"cA":{"n":["2"],"n.E":"2"},"dI":{"cA":["1","2"],"F":["2"],"n":["2"],"n.E":"2"},"a7":{"S":["2"],"F":["2"],"n":["2"],"S.E":"2","n.E":"2"},"bj":{"n":["1"],"n.E":"1"},"h3":{"n":["2"],"n.E":"2"},"e0":{"n":["1"],"n.E":"1"},"h1":{"e0":["1"],"F":["1"],"n":["1"],"n.E":"1"},"cE":{"n":["1"],"n.E":"1"},"ey":{"cE":["1"],"F":["1"],"n":["1"],"n.E":"1"},"dJ":{"F":["1"],"n":["1"],"n.E":"1"},"bp":{"n":["1"],"n.E":"1"},"f1":{"D":["1"],"q":["1"],"F":["1"],"n":["1"]},"dW":{"S":["1"],"F":["1"],"n":["1"],"S.E":"1","n.E":"1"},"fZ":{"G":["1","2"]},"aR":{"fZ":["1","2"],"G":["1","2"]},"ed":{"n":["1"],"n.E":"1"},"h_":{"c1":["1"],"dY":["1"],"F":["1"],"n":["1"]},"cw":{"c1":["1"],"dY":["1"],"F":["1"],"n":["1"]},"hA":{"cJ":[],"a6":[]},"jT":{"a6":[]},"kX":{"a6":[]},"kh":{"L":[]},"ix":{"at":[]},"ky":{"a6":[]},"bz":{"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"Z":{"F":["1"],"n":["1"],"n.E":"1"},"aT":{"F":["1"],"n":["1"],"n.E":"1"},"aI":{"F":["X<1,2>"],"n":["X<1,2>"],"n.E":"X<1,2>"},"hi":{"bz":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"fl":{"kt":[],"dR":[]},"li":{"n":["kt"],"n.E":"kt"},"eW":{"dR":[]},"m5":{"n":["dR"],"n.E":"dR"},"eH":{"as":[],"H":[],"dz":[],"aa":[]},"eI":{"as":[],"H":[],"dz":[],"aa":[]},"hv":{"as":[],"H":[]},"mb":{"dz":[]},"hu":{"as":[],"xB":[],"H":[],"aa":[]},"eJ":{"by":["1"],"as":[],"H":[],"aS":["1"]},"d5":{"D":["a4"],"q":["a4"],"by":["a4"],"as":[],"F":["a4"],"H":[],"aS":["a4"],"n":["a4"]},"bA":{"D":["i"],"q":["i"],"by":["i"],"as":[],"F":["i"],"H":[],"aS":["i"],"n":["i"]},"ka":{"d5":[],"oF":[],"D":["a4"],"q":["a4"],"by":["a4"],"as":[],"F":["a4"],"H":[],"aS":["a4"],"n":["a4"],"aa":[],"D.E":"a4"},"kb":{"d5":[],"oG":[],"D":["a4"],"q":["a4"],"by":["a4"],"as":[],"F":["a4"],"H":[],"aS":["a4"],"n":["a4"],"aa":[],"D.E":"a4"},"kc":{"bA":[],"pi":[],"D":["i"],"q":["i"],"by":["i"],"as":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"aa":[],"D.E":"i"},"kd":{"bA":[],"pj":[],"D":["i"],"q":["i"],"by":["i"],"as":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"aa":[],"D.E":"i"},"ke":{"bA":[],"pk":[],"D":["i"],"q":["i"],"by":["i"],"as":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"aa":[],"D.E":"i"},"hw":{"bA":[],"rX":[],"D":["i"],"q":["i"],"by":["i"],"as":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"aa":[],"D.E":"i"},"hx":{"bA":[],"rY":[],"D":["i"],"q":["i"],"by":["i"],"as":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"aa":[],"D.E":"i"},"hy":{"bA":[],"rZ":[],"D":["i"],"q":["i"],"by":["i"],"as":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"aa":[],"D.E":"i"},"dT":{"bA":[],"cp":[],"D":["i"],"q":["i"],"by":["i"],"as":[],"F":["i"],"H":[],"aS":["i"],"n":["i"],"aa":[],"D.E":"i"},"lA":{"a6":[]},"iC":{"cJ":[],"a6":[]},"ad":{"a6":[]},"p":{"y":["1"]},"d4":{"bn":["1"]},"iB":{"cI":[]},"i2":{"fW":["1"]},"fr":{"n":["1"],"n.E":"1"},"aY":{"b7":["1"],"fq":["1"],"a3":["1"],"a3.T":"1"},"e7":{"dg":["1"],"aK":["1"],"bg":["1"],"aK.T":"1"},"i7":{"bn":["1"]},"i3":{"i7":["1"],"bn":["1"]},"kT":{"L":[]},"hD":{"a6":[]},"e8":{"fW":["1"]},"ax":{"e8":["1"],"fW":["1"]},"ae":{"e8":["1"],"fW":["1"]},"hT":{"a3":["1"]},"dl":{"bn":["1"]},"cr":{"i4":["1"],"dl":["1"],"bn":["1"]},"fs":{"dl":["1"],"bn":["1"]},"b7":{"fq":["1"],"a3":["1"],"a3.T":"1"},"dg":{"aK":["1"],"bg":["1"],"aK.T":"1"},"iy":{"lh":["1"]},"aK":{"bg":["1"],"aK.T":"1"},"fq":{"a3":["1"]},"fe":{"bg":["1"]},"id":{"a3":["1"],"a3.T":"1"},"cO":{"a3":["1"],"a3.T":"1"},"ip":{"cr":["1"],"i4":["1"],"dl":["1"],"d4":["1"],"bn":["1"]},"ih":{"a3":["2"]},"fh":{"aK":["2"],"bg":["2"],"aK.T":"2"},"ee":{"ih":["1","2"],"a3":["2"],"a3.T":"2"},"ie":{"bn":["1"]},"fo":{"aK":["2"],"bg":["2"],"aK.T":"2"},"i6":{"a3":["2"],"a3.T":"2"},"mk":{"N":[]},"lv":{"N":[]},"lW":{"N":[]},"fx":{"al":[]},"cM":{"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"dh":{"cM":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"ia":{"cM":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"ec":{"F":["1"],"n":["1"],"n.E":"1"},"im":{"bz":["1","2"],"U":["1","2"],"G":["1","2"],"U.V":"2","U.K":"1"},"cN":{"c1":["1"],"dY":["1"],"F":["1"],"n":["1"]},"dO":{"n":["1"],"n.E":"1"},"D":{"q":["1"],"F":["1"],"n":["1"]},"U":{"G":["1","2"]},"io":{"F":["2"],"n":["2"],"n.E":"2"},"hr":{"G":["1","2"]},"f2":{"G":["1","2"]},"hl":{"S":["1"],"F":["1"],"n":["1"],"S.E":"1","n.E":"1"},"c1":{"dY":["1"],"F":["1"],"n":["1"]},"iw":{"c1":["1"],"dY":["1"],"F":["1"],"n":["1"]},"e9":{"bn":["1"]},"lI":{"U":["k","@"],"G":["k","@"],"U.V":"@","U.K":"k"},"lJ":{"S":["k"],"F":["k"],"n":["k"],"S.E":"k","n.E":"k"},"j3":{"dK":[]},"m9":{"aq":["k","q<i>"]},"j4":{"aq":["k","q<i>"],"aq.T":"q<i>"},"j9":{"aq":["q<i>","k"],"aq.T":"k"},"j8":{"aq":["k","q<i>"],"aq.T":"q<i>"},"hj":{"a6":[]},"jU":{"a6":[]},"jW":{"aq":["j?","k"],"aq.T":"k"},"jV":{"aq":["k","j?"],"aq.T":"j?"},"jX":{"dK":[]},"jY":{"aq":["k","q<i>"],"aq.T":"q<i>"},"l3":{"dK":[]},"l4":{"aq":["k","q<i>"],"aq.T":"q<i>"},"hX":{"aq":["q<i>","k"],"aq.T":"k"},"z5":{"am":["z5"]},"b2":{"am":["b2"]},"a4":{"am":["cu"]},"az":{"am":["az"]},"i":{"am":["cu"]},"q":{"F":["1"],"n":["1"]},"cu":{"am":["cu"]},"kt":{"dR":[]},"dY":{"F":["1"],"n":["1"]},"k":{"am":["k"]},"aA":{"am":["z5"]},"j5":{"a6":[]},"cJ":{"a6":[]},"bv":{"a6":[]},"cD":{"a6":[]},"hb":{"cD":[],"a6":[]},"cq":{"a6":[]},"kW":{"cq":[],"a6":[]},"bf":{"a6":[]},"jn":{"a6":[]},"ki":{"a6":[]},"hS":{"a6":[]},"lB":{"L":[]},"b4":{"L":[]},"jO":{"cq":[],"L":[],"a6":[]},"m6":{"at":[]},"iI":{"l0":[]},"bQ":{"l0":[]},"lw":{"l0":[]},"kg":{"L":[]},"pk":{"q":["i"],"F":["i"],"n":["i"]},"cp":{"q":["i"],"F":["i"],"n":["i"]},"rZ":{"q":["i"],"F":["i"],"n":["i"]},"pi":{"q":["i"],"F":["i"],"n":["i"]},"rX":{"q":["i"],"F":["i"],"n":["i"]},"pj":{"q":["i"],"F":["i"],"n":["i"]},"rY":{"q":["i"],"F":["i"],"n":["i"]},"oF":{"q":["a4"],"F":["a4"],"n":["a4"]},"oG":{"q":["a4"],"F":["a4"],"n":["a4"]},"W":{"G":["2","3"]},"eQ":{"ft":["1","dY<1>"],"ft.E":"1"},"jI":{"aq":["q<i>","bZ"]},"lZ":{"aq":["q<i>","bZ"],"aq.T":"bZ"},"kw":{"L":[]},"ja":{"xC":[]},"jh":{"xC":[]},"cT":{"a3":["q<i>"],"a3.T":"q<i>"},"dB":{"L":[]},"kM":{"hU":[]},"fS":{"W":["k","k","1"],"G":["k","1"],"W.K":"k","W.V":"1","W.C":"k"},"jy":{"xE":[]},"hm":{"L":[]},"hY":{"L":[]},"hW":{"L":[]},"hz":{"L":[]},"fV":{"L":[]},"hF":{"L":[]},"h7":{"L":[]},"cH":{"L":[]},"hM":{"L":[]},"hO":{"L":[]},"eP":{"L":[]},"h9":{"L":[]},"fX":{"L":[]},"ev":{"L":[]},"hB":{"bX":["G<k,j?>?"],"bX.T":"G<k,j?>?"},"cX":{"L":[]},"hp":{"L":[]},"bh":{"L":[]},"f_":{"L":[]},"dX":{"L":[]},"hP":{"L":[]},"bH":{"L":[]},"cf":{"L":[]},"ci":{"L":[]},"eL":{"L":[]},"eM":{"L":[]},"ex":{"L":[]},"dy":{"L":[]},"jm":{"bX":["q<G<k,j?>>"],"bX.T":"q<G<k,j?>>"},"k1":{"e2":[]},"lu":{"la":[]},"h0":{"L":[]},"hI":{"L":[]},"kv":{"L":[]},"i0":{"f7":[]},"e3":{"f7":[]},"kk":{"L":[]},"jH":{"c2":[],"am":["c2"]},"fg":{"cF":[],"am":["kF"]},"c2":{"am":["c2"]},"kE":{"c2":[],"am":["c2"]},"kF":{"am":["kF"]},"kG":{"am":["kF"]},"kH":{"L":[]},"eS":{"b4":[],"L":[]},"eT":{"am":["kF"]},"cF":{"am":["kF"]},"cG":{"L":[]},"eU":{"dE":[]},"jL":{"aP":[]},"lF":{"hZ":[],"b6":[]},"bL":{"U":["k","@"],"G":["k","@"],"U.V":"@","U.K":"k"},"kx":{"D":["bL"],"q":["bL"],"F":["bL"],"n":["bL"],"D.E":"bL"},"cL":{"L":[]},"jf":{"aP":[]},"je":{"hZ":[],"b6":[]},"e6":{"aV":["e6"],"aV.E":"e6"},"f5":{"D":["dd"],"q":["dd"],"F":["dd"],"n":["dd"],"D.E":"dd"},"fQ":{"a3":["1"],"a3.T":"1"},"cZ":{"aP":[]},"aQ":{"aV":["aQ"]},"lG":{"hZ":[],"b6":[]},"ii":{"aQ":[],"aV":["aQ"],"aV.E":"aQ"},"ib":{"aQ":[],"aV":["aQ"],"aV.E":"aQ"},"fc":{"aQ":[],"aV":["aQ"],"aV.E":"aQ"},"fw":{"aQ":[],"aV":["aQ"],"aV.E":"aQ"},"eR":{"aP":[]},"m3":{"hZ":[],"b6":[]},"fU":{"L":[]},"dG":{"D":["j?"],"q":["j?"],"F":["j?"],"n":["j?"],"D.E":"j?"},"eO":{"L":[]},"cS":{"L":[]},"lx":{"iL":["H"]},"m1":{"iL":["H"]},"kO":{"b4":[],"L":[]},"c7":{"f0":["i"],"D":["i"],"q":["i"],"F":["i"],"n":["i"],"D.E":"i"},"f0":{"D":["1"],"q":["1"],"F":["1"],"n":["1"]},"lH":{"f0":["i"],"D":["i"],"q":["i"],"F":["i"],"n":["i"]},"ff":{"a3":["1"],"a3.T":"1"},"ig":{"bg":["1"]}}'))
A.F9(v.typeUniverse,JSON.parse('{"h6":1,"kY":1,"f1":1,"iM":2,"h_":1,"eJ":1,"bn":1,"hT":1,"m8":1,"lz":1,"ma":2,"hr":2,"iw":1,"iH":2,"jk":1,"jl":2,"iA":1,"kf":1,"kZ":2,"CN":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",B:"Time including microseconds is outside valid range",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.af
return{fM:s("@<@>"),ie:s("CN<j?>"),bG:s("dx"),om:s("fQ<z<j?>>"),hw:s("cd"),lo:s("dz"),fW:s("xB"),kj:s("fS<k>"),iv:s("a0"),dF:s("xC()"),V:s("bY"),bU:s("bI<j?>"),fw:s("dE"),bP:s("am<@>"),p6:s("dF"),br:s("fW<H>"),n8:s("bm"),M:s("cw<k>"),lp:s("jt"),O:s("F<@>"),C:s("a6"),mA:s("L"),eZ:s("jF"),d9:s("aL"),I:s("b3"),k4:s("h4"),pk:s("oF"),kI:s("oG"),Y:s("b4"),gY:s("I4"),nW:s("y<H>"),fr:s("y<d3>"),mj:s("y<Q>"),g7:s("y<@>"),fP:s("y<cx?>"),n1:s("y<j?>(la,f6)"),jN:s("y<f4?>"),co:s("cW"),w:s("cg"),cF:s("cZ"),m6:s("pi"),bW:s("pj"),jx:s("pk"),nZ:s("hf<@>"),U:s("n<@>"),aL:s("z<a0>"),aw:s("z<bI<@>>"),i5:s("z<bZ>"),mK:s("z<aL>"),iw:s("z<y<~>>"),mr:s("z<cY>"),B:s("z<H>"),dO:s("z<q<j?>>"),ic:s("z<G<k,j>>"),d:s("z<G<k,j?>>"),e8:s("z<k9>"),i7:s("z<dU>"),hf:s("z<j>"),ox:s("z<dV>"),my:s("z<cj>"),k1:s("z<eN>"),g2:s("z<hK>"),bo:s("z<hL>"),eb:s("z<aO>"),fU:s("z<+controller,sync(d4<c3>,V)>"),lw:s("z<+controller,sync(d4<~>,V)>"),kC:s("z<+(d9,k)>"),l5:s("z<+(k,j)>"),iE:s("z<+(k,j?)>"),aY:s("z<+(fa,j?,j?,at?)>"),g1:s("z<ck>"),lE:s("z<eU>"),c0:s("z<bM>"),dw:s("z<bg<@>>"),s:s("z<k>"),en:s("z<eX>"),bs:s("z<cp>"),az:s("z<i9>"),i4:s("z<fa>"),fV:s("z<fb>"),pg:s("z<b9>"),dg:s("z<c8>"),p8:s("z<lO>"),bi:s("z<fp>"),gk:s("z<a4>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<ad?>"),c:s("z<j?>"),mf:s("z<k?>"),iy:s("aS<@>"),T:s("hh"),m:s("H"),bJ:s("ba"),g:s("bx"),dX:s("by<@>"),aq:s("as"),kk:s("dO<e6>"),p3:s("dO<aQ>"),hI:s("dP<@>"),ba:s("q<bm>"),ck:s("q<b3>"),ip:s("q<H>"),ew:s("q<G<k,j>>"),J:s("q<G<k,j?>>"),eT:s("q<dU>"),hg:s("q<dV>"),a6:s("q<cj>"),jX:s("q<hK>"),kR:s("q<ck>"),bF:s("q<k>"),bR:s("q<eX>"),j:s("q<@>"),L:s("q<i>"),W:s("q<j?>"),kM:s("k0"),jD:s("hn"),ia:s("X<k,cW>"),gc:s("X<k,k>"),eB:s("X<k,j?>"),a3:s("ho<@,@>"),cy:s("G<k,cm>"),dV:s("G<k,i>"),f:s("G<@,@>"),G:s("G<k,j?>"),iZ:s("a7<k,@>"),r:s("d3"),a:s("eH"),dQ:s("d5"),aj:s("bA"),Z:s("dT"),P:s("Q"),K:s("j"),ot:s("kr"),gq:s("eN"),e:s("aN"),b0:s("cD"),lZ:s("Ia"),oZ:s("aO"),aK:s("+()"),ja:s("+(H,fY)"),hP:s("+(G<k,cm>,G<k,G<k,j?>>)"),cU:s("+(d9,k)"),mk:s("+(V,H)"),kO:s("+basicSupport,supportsReadWriteUnsafe(V,V)"),mt:s("+(H?,H)"),g0:s("+(G<k,j?>?,cm?,cj?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("kt"),Q:s("ck"),hF:s("dW<k>"),cu:s("eQ<@>"),gi:s("dY<k>"),g_:s("eR"),hq:s("c2"),ol:s("cF"),gE:s("kI"),l:s("at"),nv:s("kK"),h3:s("eV"),ha:s("bg<c3>"),ey:s("bg<~>"),bv:s("kL"),E:s("a3<q<i>>"),lI:s("da"),hL:s("hU"),N:s("k"),eg:s("eX"),k5:s("hV"),n6:s("bN"),mv:s("b5"),nw:s("cm"),em:s("eY"),hU:s("cI"),q:s("kU"),aJ:s("aa"),do:s("cJ"),hM:s("rX"),mC:s("rY"),oR:s("c7"),nn:s("rZ"),p:s("cp"),cx:s("dc"),ph:s("f2<k,k>"),eo:s("cq"),oc:s("l_"),jJ:s("l0"),e6:s("aP"),j2:s("hZ"),n:s("f4"),x:s("bp<k>"),u:s("e2"),bp:s("e3"),be:s("la"),ec:s("f7"),oS:s("f8"),iq:s("ax<cp>"),jk:s("ax<@>"),ho:s("ax<i>"),h:s("ax<~>"),oW:s("e9<@,@>"),R:s("ea<H>"),d4:s("ff<H>"),nI:s("p<cx>"),a7:s("p<H>"),hl:s("p<0&>"),os:s("p<k>"),jz:s("p<cp>"),k:s("p<V>"),_:s("p<@>"),hy:s("p<i>"),D:s("p<~>"),nf:s("b9"),mp:s("dh<j?,j?>"),fA:s("fk"),k8:s("cO<H>"),fb:s("cO<q<i>>"),mI:s("m2<bZ>"),jy:s("dm<c3,~()>"),af:s("dm<~,V()>"),lU:s("dm<~,~()>"),hT:s("bR<H>"),lj:s("bR<q<i>>"),aP:s("ae<cx>"),h1:s("ae<H>"),ex:s("ae<V>"),F:s("ae<~>"),y:s("V"),i:s("a4"),z:s("@"),mq:s("@(j)"),ng:s("@(j,at)"),S:s("i"),ma:s("bm?"),gK:s("y<Q>?"),b3:s("cx?"),A:s("H?"),bE:s("q<bI<@>>?"),lH:s("q<@>?"),b:s("G<k,j?>?"),nh:s("d3?"),X:s("j?"),dY:s("cj?"),lY:s("hJ?"),jB:s("ck?"),v:s("k?"),f8:s("cm?"),a_:s("c7?"),he:s("f4?"),dd:s("b9?"),o9:s("V?"),dz:s("a4?"),aV:s("i?"),jh:s("cu?"),o:s("cu"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,at)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bA=J.jP.prototype
B.b=J.z.prototype
B.c=J.hg.prototype
B.v=J.dN.prototype
B.a=J.d_.prototype
B.bB=J.bx.prototype
B.bC=J.as.prototype
B.ce=A.hu.prototype
B.cf=A.hw.prototype
B.a2=A.hx.prototype
B.d=A.dT.prototype
B.aO=J.km.prototype
B.al=J.dc.prototype
B.a7=new A.cS("Operation was cancelled")
B.ao=new A.fO(1,"hidden")
B.R=new A.dx(0,"applied")
B.a8=new A.dx(1,"quarantined")
B.b_=new A.dx(2,"conflict")
B.S=new A.dx(3,"skipped")
B.b0=new A.j4(127)
B.T=new A.j7(0,"changed")
B.ap=new A.j7(1,"deleted")
B.bi=new A.id(A.af("id<q<i>>"))
B.b1=new A.cT(B.bi)
B.b2=new A.hd(A.Hy(),A.af("hd<i>"))
B.b4=new A.j9()
B.aq=new A.mY()
B.b3=new A.j8()
B.A={}
B.aK=new A.aR(B.A,[],A.af("aR<k,j>"))
B.de=new A.q4(0,"conflict")
B.d9=new A.nA()
B.b5=new A.jx(A.af("jx<0&>"))
B.n=new A.jw()
B.ar=new A.jA(A.af("jA<0&>"))
B.as=new A.jB()
B.b6=new A.jB()
B.b7=new A.jO()
B.at=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.b8=function() {
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
B.bd=function(getTagFallback) {
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
B.b9=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bc=function(hooks) {
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
B.bb=function(hooks) {
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
B.ba=function(hooks) {
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
B.au=function(hooks) { return hooks; }

B.e=new A.pp()
B.be=new A.pu()
B.bf=new A.hn()
B.bg=new A.ki()
B.h=new A.rj()
B.k=new A.l3()
B.i=new A.l4()
B.bh=new A.tZ()
B.U=new A.uR()
B.av=new A.vo()
B.f=new A.lW()
B.l=new A.lZ()
B.H=new A.m6()
B.aw=new A.cU(0,"create")
B.u=new A.cU(1,"update")
B.bj=new A.cU(2,"archive")
B.bk=new A.cU(3,"restore")
B.ax=new A.cU(4,"purge")
B.bl=new A.cU(5,"hide")
B.V=new A.fT(0,"local")
B.a9=new A.fT(1,"remote")
B.W=new A.fT(2,"resolution")
B.bm=new A.jo(3,"ignore")
B.I=new A.jo(4,"replace")
B.B=new A.jz(0,"normal")
B.bn=new A.jz(1,"full")
B.x=new A.az(0)
B.ay=new A.az(1e6)
B.az=new A.az(16e3)
B.bo=new A.az(2e5)
B.bp=new A.az(3e5)
B.X=new A.az(3e7)
B.bq=new A.az(3e8)
B.Y=new A.az(5e5)
B.da=new A.az(5e6)
B.db=new A.az(6048e8)
B.dc=new A.az(7776e9)
B.dd=new A.az(864e8)
B.aa=new A.bJ(0,"text")
B.Z=new A.bJ(1,"int")
B.a_=new A.bJ(2,"real")
B.y=new A.bJ(3,"bool")
B.a0=new A.bJ(4,"date")
B.C=new A.bJ(5,"enumValue")
B.J=new A.bJ(6,"json")
B.K=new A.bJ(7,"jsonList")
B.D=new A.bJ(8,"ref")
B.br=new A.h4(!1)
B.ab=new A.cV("x",1,"opfsExternalLocks")
B.aA=new A.cV("y",2,"opfsExternalLocksWorkaround")
B.aB=new A.eA("/database",0,"database")
B.aC=new A.eA("/database-journal",1,"journal")
B.bx=new A.b4("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.by=new A.b4("fieldCipher envelope must be a map.",null,null)
B.aD=new A.hc(0,"live")
B.bD=new A.jV(null)
B.bE=new A.jW(null)
B.bF=new A.cy(0,"textExpected")
B.bG=new A.cy(1,"intExpected")
B.bH=new A.cy(2,"numberExpected")
B.bI=new A.cy(3,"boolExpected")
B.bJ=new A.cy(4,"jsonExpected")
B.bK=new A.cy(5,"jsonListExpected")
B.bL=new A.cy(6,"enumValueRejected")
B.bM=new A.jY(255)
B.bN=new A.dP(B.b5,A.af("dP<k>"))
B.bO=s(["attempt_count","next_retry_at","last_error"],t.s)
B.aE=s([13,10],t.t)
B.ae=new A.c6(0,"unknown")
B.af=new A.c6(1,"integer")
B.ag=new A.c6(2,"bigInt")
B.ah=new A.c6(3,"float")
B.ai=new A.c6(4,"text")
B.aj=new A.c6(5,"blob")
B.ak=new A.c6(6,"$null")
B.aY=new A.c6(7,"boolean")
B.aF=s([B.ae,B.af,B.ag,B.ah,B.ai,B.aj,B.ak,B.aY],A.af("z<c6>"))
B.aZ=new A.fO(0,"visible")
B.bP=s([B.aZ,B.ao],A.af("z<fO>"))
B.bQ=s([16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,452984832,905969664],t.t)
B.bv=new A.h5(0,"database")
B.bw=new A.h5(1,"journal")
B.aG=s([B.bv,B.bw],A.af("z<h5>"))
B.t=new A.cn(0,"clean")
B.a5=new A.cn(1,"dirty")
B.aX=new A.cn(2,"inFlight")
B.Q=new A.cn(3,"conflict")
B.a6=new A.cn(4,"error")
B.cE=new A.cn(5,"quarantine")
B.cF=new A.cn(6,"blocked")
B.bR=s([B.t,B.a5,B.aX,B.Q,B.a6,B.cE,B.cF],A.af("z<cn>"))
B.bS=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.bT=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.bz=new A.hc(1,"notArchived")
B.bU=s([B.aD,B.bz],A.af("z<hc>"))
B.bV=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.aM=new A.hC(0,"fileUpload")
B.aN=new A.hC(1,"fileRemove")
B.bW=s([B.aM,B.aN],A.af("z<hC>"))
B.bu=new A.cV("s",0,"opfsShared")
B.bs=new A.cV("i",3,"indexedDb")
B.bt=new A.cV("m",4,"inMemory")
B.bX=s([B.bu,B.ab,B.aA,B.bs,B.bt],A.af("z<cV>"))
B.bY=s([B.aa,B.Z,B.a_,B.y,B.a0,B.C,B.J,B.K,B.D],A.af("z<bJ>"))
B.j=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.aH=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.bZ=s(["base_updated","base_hash","base_json"],t.s)
B.r=new A.eK(0,"upsert")
B.F=new A.eK(1,"archive")
B.M=new A.eK(2,"restore")
B.c_=s([B.r,B.F,B.M],A.af("z<eK>"))
B.c0=s([],A.af("z<cW>"))
B.c2=s([],t.my)
B.o=s([],t.s)
B.c1=s([],t.t)
B.aI=s([],t.dG)
B.w=s([],t.c)
B.c3=s(["*"],t.s)
B.c4=s([B.aB,B.aC],A.af("z<eA>"))
B.c5=s(["id","updated"],t.s)
B.c6=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.aS=new A.d9(0,"opfs")
B.aT=new A.d9(1,"indexedDb")
B.cx=new A.d9(2,"inMemory")
B.c7=s([B.aS,B.aT,B.cx],A.af("z<d9>"))
B.c8=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.ck={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.p=new A.jX()
B.m=new A.j3()
B.c9=new A.aR(B.ck,[B.p,B.p,B.p,B.p,B.p,B.p,B.p,B.p,B.p,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.m,B.k,B.k],A.af("aR<k,dK>"))
B.aJ=new A.aR(B.A,[],A.af("aR<k,k>"))
B.a1=new A.aR(B.A,[],A.af("aR<k,i>"))
B.q=new A.aR(B.A,[],A.af("aR<k,j?>"))
B.ca=new A.aR(B.A,[],A.af("aR<i,G<k,j?>(G<k,j?>)>"))
B.cc=new A.k5(11,"simpleSuccessResponse",A.af("k5<H>"))
B.aL=new A.dS(0,"createOrUpdate")
B.cd=new A.dS(1,"create")
B.L=new A.dS(2,"update")
B.z=new A.dS(3,"archive")
B.E=new A.dS(4,"restore")
B.df=new A.qf(2,"readWriteCreate")
B.aP=new A.kn(0,"native")
B.cl=new A.kn(1,"web")
B.a3=new A.aN(0,1,0,0,0,!1)
B.a4=new A.aN(0,0,0,0,0,!0)
B.N=new A.aN(0,0,0,0,0,!1)
B.cm=new A.aN(0,0,0,1,0,!1)
B.aQ=new A.aN(0,0,1,0,0,!1)
B.O=new A.aN(1,0,0,0,0,!1)
B.cn=new A.au("archived",!0)
B.ac=new A.iu(!1,!1)
B.co=new A.eg(0,0,0)
B.cp=new A.eg(null,null,null)
B.cj={hidden:0}
B.cq=new A.cw(B.cj,1,t.M)
B.cg={id:0,archived:1,hidden:2,extra:3}
B.cr=new A.cw(B.cg,4,t.M)
B.ch={query:0,count:1,countDistinct:2,distinct:3,ids:4,explain:5,sum:6,avg:7,min:8,max:9,search:10}
B.cs=new A.cw(B.ch,11,t.M)
B.ci={open:0,close:1,health:2,worker_event:3,record_event:4,capabilities:5,get:6,mutate_batch:7,compiled_query:8,analyze:9,wal_checkpoint:10,vacuum:11,prune_outbox:12,compact:13,run_maintenance:14,tx_begin:15,tx_get:16,tx_mutate_batch:17,tx_savepoint:18,tx_rollback_to:19,tx_release:20,tx_commit:21,tx_rollback:22,watch_query:23,watch_one:24,watch_cancel:25,sync_start:26,sync_stop:27,sync_now:28,sync_status:29,auth_required:30,sync_pause:31,sync_resume:32,sync_update_auth:33,sync_set_connectivity:34,file_upload_begin:35,file_upload_chunk:36,file_upload_finish:37,file_upload_abort:38,file_list:39,file_open:40,file_remove:41,file_gc:42,file_enforce_storage_cap:43,conflicts_list:44,conflicts_get:45,conflicts_resolve:46,conflicts_accept_local:47,conflicts_accept_remote:48,conflicts_watch:49}
B.ct=new A.cw(B.ci,50,t.M)
B.aR=new A.cw(B.A,0,t.M)
B.cu=new A.hR(0,"insert")
B.cv=new A.hR(1,"update")
B.cw=new A.hR(2,"delete")
B.cy=new A.hV(-1,null)
B.cz=new A.kP("_clientToken")
B.P=new A.bN(0,"closed")
B.cA=new A.bN(1,"opening")
B.aU=new A.bN(2,"offline")
B.ad=new A.bN(3,"authRequired")
B.aV=new A.bN(4,"idle")
B.cB=new A.bN(5,"pulling")
B.cC=new A.bN(6,"pushing")
B.cD=new A.bN(7,"backoff")
B.aW=new A.bN(8,"paused")
B.G=new A.b5(B.a1,B.a1,0,0,0,0,!1)
B.cG=A.bT("dz")
B.cH=A.bT("xB")
B.cI=A.bT("oF")
B.cJ=A.bT("oG")
B.cK=A.bT("pi")
B.cL=A.bT("pj")
B.cM=A.bT("pk")
B.cN=A.bT("H")
B.cO=A.bT("j")
B.cP=A.bT("rX")
B.cQ=A.bT("rY")
B.cR=A.bT("rZ")
B.cS=A.bT("cp")
B.am=new A.hX(!1)
B.cT=new A.hX(!0)
B.cU=new A.cL(14)
B.cV=new A.cL(522)
B.cW=new A.cL(778)
B.cX=new A.wf(B.f,A.GG())
B.cY=new A.wg(B.f,A.GH())
B.cZ=new A.wh(B.f,A.GI())
B.d_=new A.wi(B.f,A.GJ())
B.d0=new A.ml(B.f,A.GK())
B.d1=new A.wj(B.f,A.GL())
B.d2=new A.wk(B.f,A.GM())
B.d3=new A.wl(B.f,A.GN())
B.d4=new A.wm(B.f,A.GO())
B.d5=new A.wo(B.f,A.GQ())
B.d6=new A.wp(B.f,A.GR())
B.d7=new A.wn(B.f,A.GP())
B.d8=new A.mm(B.f,A.GS())
B.cb=new A.aR(B.A,[],A.af("aR<j?,j?>"))
B.an=new A.mn(B.f,B.cb)})();(function staticFields(){$.vq=null
$.el=A.l([],t.hf)
$.Ge=null
$.zE=null
$.qO=0
$.qP=A.G5()
$.z8=null
$.z7=null
$.By=null
$.Bg=null
$.BI=null
$.wX=null
$.xc=null
$.yI=null
$.vC=A.l([],A.af("z<q<j>?>"))
$.fA=null
$.iP=null
$.iQ=null
$.yz=!1
$.t=B.f
$.vG=null
$.A9=null
$.Aa=null
$.Ab=null
$.Ac=null
$.yg=A.ul("_lastQuoRemDigits")
$.yh=A.ul("_lastQuoRemUsed")
$.i5=A.ul("_lastRemUsed")
$.yi=A.ul("_lastRem_nsh")
$.zW=""
$.zX=null
$.AO=null
$.wy=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"I1","C_",()=>A.x4("_$dart_dartClosure"))
s($,"I0","er",()=>A.x4("_$dart_dartClosure_dartJSInterop"))
s($,"IC","mH",()=>A.xZ(0))
s($,"IZ","Cy",()=>B.f.aT(new A.xf(),A.af("y<~>")))
s($,"IU","Cv",()=>A.l([new J.jQ()],A.af("z<hN>")))
s($,"Ii","C4",()=>A.cK(A.rW({
toString:function(){return"$receiver$"}})))
s($,"Ij","C5",()=>A.cK(A.rW({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Ik","C6",()=>A.cK(A.rW(null)))
s($,"Il","C7",()=>A.cK(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Io","Ca",()=>A.cK(A.rW(void 0)))
s($,"Ip","Cb",()=>A.cK(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"In","C9",()=>A.cK(A.zT(null)))
s($,"Im","C8",()=>A.cK(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Ir","Cd",()=>A.cK(A.zT(void 0)))
s($,"Iq","Cc",()=>A.cK(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Iu","yS",()=>A.Er())
s($,"I6","dv",()=>$.Cy())
s($,"I5","C1",()=>A.EJ(!1,B.f,t.y))
s($,"II","Cl",()=>A.xZ(4096))
s($,"IG","Cj",()=>new A.wb().$0())
s($,"IH","Ck",()=>new A.wa().$0())
s($,"Iw","yT",()=>A.DJ(A.br(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Iv","Ce",()=>A.xZ(0))
s($,"IB","cv",()=>A.ub(0))
s($,"IA","fL",()=>A.ub(1))
s($,"Iy","yV",()=>$.fL().bI(0))
s($,"Ix","yU",()=>A.ub(1e4))
r($,"Iz","Cf",()=>A.ah("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"ID","Cg",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"IE","Ch",()=>A.ah("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"IF","Ci",()=>typeof URLSearchParams=="function")
s($,"IL","es",()=>A.mB(B.cO))
s($,"Ib","mE",()=>{A.DS()
return $.qO})
s($,"IM","Co",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"I9","xw",()=>{var q=new A.vp(new DataView(new ArrayBuffer(A.FC(8))))
q.nW()
return q})
s($,"I2","C0",()=>J.CB(B.cf.gaJ(A.DK(A.br(A.l([1],t.t)))),0,null).getInt8(0)===1?B.b6:B.as)
s($,"HU","yP",()=>A.ah("^[\\w!#%&'*+\\-.^`|~]+$",!0))
s($,"IO","xx",()=>A.ah("\\r\\n|\\r|\\n",!0))
s($,"I7","C2",()=>A.zI())
s($,"IJ","yW",()=>A.ah("^[\\x00-\\x7F]+$",!0))
s($,"IK","Cm",()=>A.ah('["\\x00-\\x1F\\x7F]',!0))
s($,"J0","Cz",()=>A.ah('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0))
s($,"IN","Cp",()=>A.ah("(?:\\r\\n)?[ \\t]+",!0))
s($,"IR","Cs",()=>A.ah('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0))
s($,"IQ","Cr",()=>A.ah("\\\\(.)",!0))
s($,"IY","Cx",()=>A.ah('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0))
s($,"J1","CA",()=>A.ah("(?:"+$.Cp().a+")*",!0))
s($,"IT","Cu",()=>A.zJ())
s($,"J_","yX",()=>A.ah("^[a-z0-9]{15}$",!0))
r($,"FP","Cn",()=>A.D4().a)
s($,"HZ","BY",()=>A.xI("declaredNames",t.gi))
s($,"I_","BZ",()=>A.xI("fieldByName",A.af("G<k,aL>")))
s($,"Ih","mG",()=>new A.j())
s($,"HY","BX",()=>A.ah("^[0-9a-f]{64}$",!0))
s($,"IP","Cq",()=>A.ah("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0))
s($,"IW","fM",()=>new A.nJ($.yQ()))
s($,"Ie","C3",()=>new A.qK(A.ah("/",!0),A.ah("[^/]$",!0),A.ah("^/",!0)))
s($,"Ig","mF",()=>new A.tm(A.ah("[/\\\\]",!0),A.ah("[^/\\\\]$",!0),A.ah("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.ah("^[/\\\\](?![/\\\\])",!0)))
s($,"If","j_",()=>new A.t2(A.ah("/",!0),A.ah("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.ah("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.ah("^/",!0)))
s($,"Id","yQ",()=>A.Ea())
s($,"HX","BW",()=>$.fL().c0(0,63).bI(0))
s($,"HW","BV",()=>{var q=$.fL()
return q.c0(0,63).fb(0,q)})
s($,"HV","mD",()=>A.zJ())
s($,"Is","yR",()=>A.xI(null,t.S))
s($,"IV","Cw",()=>A.Dy(A.l([A.ya("files"),A.ya("blocks")],t.s)))
s($,"I3","xv",()=>{var q,p,o=A.E(t.N,A.af("eA"))
for(q=0;q<2;++q){p=B.c4[q]
o.j(0,p.c,p)}return o})
s($,"IS","Ct",()=>A.zI())
r($,"It","j0",()=>{var q="navigator"
return A.Ds(A.Dt(A.yG(A.BN(),q),A.ya("locks")))?A.yG(A.yG(A.BN(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.eI,ArrayBuffer:A.eH,ArrayBufferView:A.hv,DataView:A.hu,Float32Array:A.ka,Float64Array:A.kb,Int16Array:A.kc,Int32Array:A.kd,Int8Array:A.ke,Uint16Array:A.hw,Uint32Array:A.hx,Uint8ClampedArray:A.hy,CanvasPixelArray:A.hy,Uint8Array:A.dT})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.eJ.$nativeSuperclassTag="ArrayBufferView"
A.iq.$nativeSuperclassTag="ArrayBufferView"
A.ir.$nativeSuperclassTag="ArrayBufferView"
A.d5.$nativeSuperclassTag="ArrayBufferView"
A.is.$nativeSuperclassTag="ArrayBufferView"
A.it.$nativeSuperclassTag="ArrayBufferView"
A.bA.$nativeSuperclassTag="ArrayBufferView"})()
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
Function.prototype.$3$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$2$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$3$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$2$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.Hw
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
