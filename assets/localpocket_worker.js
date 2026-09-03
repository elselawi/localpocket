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
if(a[b]!==s){A.Nm(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Di(b)
return new s(c,this)}:function(){if(s===null)s=A.Di(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Di(a).prototype
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
Dr(a,b,c,d){return{i:a,p:b,e:c,x:d}},
BB(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Dp==null){A.MT()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.EN("Return interceptor for "+A.p(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.zV
if(o==null)o=$.zV=A.BA(n)
p=q[o]}if(p!=null)return p
p=A.N0(a)
if(p!=null)return p
if(typeof a=="function")return B.cm
s=Object.getPrototypeOf(a)
if(s==null)return B.bc
if(s===Object.prototype)return B.bc
if(typeof q=="function"){o=$.zV
if(o==null)o=$.zV=A.BA(n)
Object.defineProperty(q,o,{value:B.aM,enumerable:false,writable:true,configurable:true})
return B.aM}return B.aM},
Cm(a,b){if(a<0||a>4294967295)throw A.b(A.ax(a,0,4294967295,"length",null))
return J.Eg(new Array(a),b)},
Cn(a,b){if(a<0)throw A.b(A.P("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("z<0>"))},
Ef(a,b){if(a<0)throw A.b(A.P("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("z<0>"))},
Eg(a,b){var s=A.j(a,b.i("z<0>"))
s.$flags=1
return s},
Iw(a,b){return J.DI(a,b)},
Eh(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Iz(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Eh(r))break;++b}return b},
Ei(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.Eh(r))break}return b},
ds(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iN.prototype
return J.ma.prototype}if(typeof a=="string")return J.dF.prototype
if(a==null)return J.iO.prototype
if(typeof a=="boolean")return J.m9.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fN.prototype
if(typeof a=="bigint")return J.bt.prototype
return a}if(a instanceof A.k)return a
return J.BB(a)},
L(a){if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fN.prototype
if(typeof a=="bigint")return J.bt.prototype
return a}if(a instanceof A.k)return a
return J.BB(a)},
aH(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fN.prototype
if(typeof a=="bigint")return J.bt.prototype
return a}if(a instanceof A.k)return a
return J.BB(a)},
ML(a){if(typeof a=="number")return J.ev.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dW.prototype
return a},
MM(a){if(typeof a=="number")return J.ev.prototype
if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dW.prototype
return a},
Bz(a){if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dW.prototype
return a},
ky(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fN.prototype
if(typeof a=="bigint")return J.bt.prototype
return a}if(a instanceof A.k)return a
return J.BB(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ds(a).P(a,b)},
W(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Gx(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)},
cY(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Gx(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aH(a).j(a,b,c)},
aO(a,b){return J.aH(a).t(a,b)},
DF(a,b){return J.aH(a).E(a,b)},
C4(a,b){return J.Bz(a).hE(a,b)},
pw(a){return J.ky(a).my(a)},
DG(a,b,c){return J.ky(a).hF(a,b,c)},
DH(a,b,c){return J.ky(a).mz(a,b,c)},
Hy(a){return J.ky(a).mA(a)},
bL(a,b,c){return J.ky(a).hG(a,b,c)},
px(a,b){return J.aH(a).f_(a,b)},
Hz(a,b,c){return J.ML(a).bO(a,b,c)},
DI(a,b){return J.MM(a).a0(a,b)},
C5(a,b){return J.L(a).D(a,b)},
py(a,b){return J.aH(a).a9(a,b)},
kI(a,b){return J.aH(a).cG(a,b)},
HA(a){return J.ky(a).gab(a)},
bY(a){return J.aH(a).gH(a)},
a7(a){return J.ds(a).gJ(a)},
bA(a){return J.L(a).gF(a)},
ee(a){return J.L(a).gY(a)},
E(a){return J.aH(a).gu(a)},
pz(a){return J.aH(a).ga1(a)},
as(a){return J.L(a).gm(a)},
bZ(a){return J.ds(a).gaj(a)},
C6(a){return J.aH(a).gap(a)},
HB(a,b,c){return J.aH(a).fQ(a,b,c)},
HC(a,b,c){return J.aH(a).aC(a,b,c)},
c_(a,b,c){return J.aH(a).ci(a,b,c)},
HD(a,b,c){return J.Bz(a).eh(a,b,c)},
HE(a,b){return J.L(a).sm(a,b)},
HF(a,b,c,d,e){return J.aH(a).ah(a,b,c,d,e)},
pA(a,b){return J.aH(a).bl(a,b)},
DJ(a,b){return J.aH(a).co(a,b)},
HG(a,b){return J.Bz(a).cV(a,b)},
HH(a,b){return J.Bz(a).S(a,b)},
HI(a,b,c){return J.aH(a).U(a,b,c)},
C7(a,b){return J.aH(a).cQ(a,b)},
HJ(a){return J.aH(a).cR(a)},
Z(a){return J.ds(a).l(a)},
DK(a,b){return J.aH(a).dt(a,b)},
m7:function m7(){},
m9:function m9(){},
iO:function iO(){},
aF:function aF(){},
dH:function dH(){},
mJ:function mJ(){},
dW:function dW(){},
bP:function bP(){},
bt:function bt(){},
fN:function fN(){},
z:function z(a){this.$ti=a},
m8:function m8(){},
tD:function tD(a){this.$ti=a},
fo:function fo(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ev:function ev(){},
iN:function iN(){},
ma:function ma(){},
dF:function dF(){}},A={Cq:function Cq(){},
fq(a,b,c){if(t.O.b(a))return new A.jR(a,b.i("@<0>").X(c).i("jR<1,2>"))
return new A.eh(a,b.i("@<0>").X(c).i("eh<1,2>"))},
Ek(a){return new A.dG("Field '"+a+"' has been assigned during initialization.")},
El(a){return new A.dG("Field '"+a+"' has not been initialized.")},
ID(a){return new A.dG("Field '"+a+"' has already been initialized.")},
eJ(a){return new A.mV(a)},
BF(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ay(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hm(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cz(a,b,c){return a},
Dq(a){var s,r
for(s=$.fa.length,r=0;r<s;++r)if(a===$.fa[r])return!0
return!1},
cu(a,b,c,d){A.bd(b,"start")
if(c!=null){A.bd(c,"end")
if(b>c)A.t(A.ax(b,0,c,"start",null))}return new A.ct(a,b,c,d.i("ct<0>"))},
dK(a,b,c,d){if(t.O.b(a))return new A.eq(a,b,c.i("@<0>").X(d).i("eq<1,2>"))
return new A.ck(a,b,c.i("@<0>").X(d).i("ck<1,2>"))},
EI(a,b,c){var s="takeCount"
A.kP(b,s)
A.bd(b,s)
if(t.O.b(a))return new A.ix(a,b,c.i("ix<0>"))
return new A.eO(a,b,c.i("eO<0>"))},
EG(a,b,c){var s="count"
if(t.O.b(a)){A.kP(b,s)
A.bd(b,s)
return new A.fB(a,b,c.i("fB<0>"))}A.kP(b,s)
A.bd(b,s)
return new A.db(a,b,c.i("db<0>"))},
aE(){return new A.bn("No element")},
iL(){return new A.bn("Too many elements")},
Ed(){return new A.bn("Too few elements")},
nb(a,b,c,d){if(c-b<=32)A.Jm(a,b,c,d)
else A.Jl(a,b,c,d)},
Jm(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.L(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Jl(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.L(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.nb(a3,a4,r-2,a6)
A.nb(a3,q+2,a5,a6)
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
break}}A.nb(a3,r,q,a6)}else A.nb(a3,r,q,a6)},
zc:function zc(a){this.a=0
this.b=a},
yK:function yK(a){this.a=0
this.b=a},
e_:function e_(){},
l7:function l7(a,b){this.a=a
this.$ti=b},
eh:function eh(a,b){this.a=a
this.$ti=b},
jR:function jR(a,b){this.a=a
this.$ti=b},
jO:function jO(){},
yL:function yL(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.$ti=b},
ei:function ei(a,b){this.a=a
this.$ti=b},
q0:function q0(a,b){this.a=a
this.b=b},
q_:function q_(a){this.a=a},
dG:function dG(a){this.a=a},
mV:function mV(a){this.a=a},
ch:function ch(a){this.a=a},
BM:function BM(){},
wZ:function wZ(){},
K:function K(){},
a_:function a_(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.$ti=c},
eq:function eq(a,b,c){this.a=a
this.b=b
this.$ti=c},
mm:function mm(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
am:function am(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
iB:function iB(a,b,c){this.a=a
this.b=b
this.$ti=c},
lC:function lC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eO:function eO(a,b,c){this.a=a
this.b=b
this.$ti=c},
ix:function ix(a,b,c){this.a=a
this.b=b
this.$ti=c},
nC:function nC(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
fB:function fB(a,b,c){this.a=a
this.b=b
this.$ti=c},
na:function na(a,b,c){this.a=a
this.b=b
this.$ti=c},
er:function er(a){this.$ti=a},
lz:function lz(a){this.$ti=a},
dY:function dY(a,b){this.a=a
this.$ti=b},
o1:function o1(a,b){this.a=a
this.$ti=b},
iE:function iE(){},
nO:function nO(){},
hp:function hp(){},
bw:function bw(a,b){this.a=a
this.$ti=b},
jz:function jz(a){this.a=a},
ko:function ko(){},
I0(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bF(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.r)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aX(q,A.bF(new A.al(a,m.i("al<2>")),!0,c),b.i("@<0>").X(c).i("aX<1,2>"))
n.$keys=l
return n}return new A.it(A.bm(a,b,c),b.i("@<0>").X(c).i("it<1,2>"))},
I1(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
I2(){throw A.b(A.Y("Cannot modify constant Set"))},
GR(a){var s=A.GQ(a)
if(s!=null)return s
return"minified:"+a},
Gx(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.Z(a)
return s},
eF(a){var s,r=$.Ev
if(r==null)r=$.Ev=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ji(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
J4(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cm(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mM(a){var s,r,q,p
if(a instanceof A.k)return A.bW(A.bi(a),null)
s=J.ds(a)
if(s===B.cl||s===B.cn||t.cx.b(a)){r=B.aU(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bW(A.bi(a),null)},
Ex(a){var s,r,q
if(a==null||typeof a=="number"||A.by(a))return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ek)return a.l(0)
if(a instanceof A.hM)return a.mm(!0)
s=$.Hs()
for(r=0;r<1;++r){q=s[r].x6(a)
if(q!=null)return q}return"Instance of '"+A.mM(a)+"'"},
J0(){return Date.now()},
J3(){var s,r
if($.w8!==0)return
$.w8=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.w8=1e6
$.mN=new A.w7(r)},
J_(){if(!!self.location)return self.location.href
return null},
Eu(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
J5(a){var s,r,q,p=A.j([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
if(!A.av(q))throw A.b(A.fc(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.af(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fc(q))}return A.Eu(p)},
Ey(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.av(q))throw A.b(A.fc(q))
if(q<0)throw A.b(A.fc(q))
if(q>65535)return A.J5(a)}return A.Eu(a)},
J6(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bv(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.af(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ax(a,0,1114111,null,null))},
J7(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.ak(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bu(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
CB(a){return a.c?A.bu(a).getUTCFullYear()+0:A.bu(a).getFullYear()+0},
Cz(a){return a.c?A.bu(a).getUTCMonth()+1:A.bu(a).getMonth()+1},
w6(a){return a.c?A.bu(a).getUTCDate()+0:A.bu(a).getDate()+0},
Cx(a){return a.c?A.bu(a).getUTCHours()+0:A.bu(a).getHours()+0},
Cy(a){return a.c?A.bu(a).getUTCMinutes()+0:A.bu(a).getMinutes()+0},
CA(a){return a.c?A.bu(a).getUTCSeconds()+0:A.bu(a).getSeconds()+0},
Ew(a){return a.c?A.bu(a).getUTCMilliseconds()+0:A.bu(a).getMilliseconds()+0},
J2(a){return B.c.ak((a.c?A.bu(a).getUTCDay()+0:A.bu(a).getDay()+0)+6,7)+1},
J1(a){var s=a.$thrownJsError
if(s==null)return null
return A.ad(s)},
mO(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aN(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
Bu(a,b){var s,r="index"
if(!A.av(b))return new A.bB(!0,b,r,null)
s=J.as(a)
if(b<0||b>=s)return A.m4(b,s,a,null,r)
return A.wM(b,r)},
MB(a,b,c){if(a<0||a>c)return A.ax(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ax(b,a,c,"end",null)
return new A.bB(!0,b,"end",null)},
fc(a){return new A.bB(!0,a,null,null)},
b(a){return A.aN(a,new Error())},
aN(a,b){var s
if(a==null)a=new A.df()
b.dartException=a
s=A.Nn
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Nn(){return J.Z(this.dartException)},
t(a,b){throw A.aN(a,b==null?new Error():b)},
H(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.t(A.L1(a,b,c),s)},
L1(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cT("'"+s+"': Cannot "+o+" "+l+k+n)},
r(a){throw A.b(A.aA(a))},
dg(a){var s,r,q,p,o,n
a=A.GG(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.xL(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
xM(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
EM(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Cr(a,b){var s=b==null,r=s?null:b.method
return new A.mb(a,r,s?null:b.receiver)},
C(a){if(a==null)return new A.mB(a)
if(a instanceof A.iz)return A.ec(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ec(a,a.dartException)
return A.LX(a)},
ec(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
LX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.af(r,16)&8191)===10)switch(q){case 438:return A.ec(a,A.Cr(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.ec(a,new A.jd())}}if(a instanceof TypeError){p=$.H_()
o=$.H0()
n=$.H1()
m=$.H2()
l=$.H5()
k=$.H6()
j=$.H4()
$.H3()
i=$.H8()
h=$.H7()
g=p.bS(s)
if(g!=null)return A.ec(a,A.Cr(s,g))
else{g=o.bS(s)
if(g!=null){g.method="call"
return A.ec(a,A.Cr(s,g))}else if(n.bS(s)!=null||m.bS(s)!=null||l.bS(s)!=null||k.bS(s)!=null||j.bS(s)!=null||m.bS(s)!=null||i.bS(s)!=null||h.bS(s)!=null)return A.ec(a,new A.jd())}return A.ec(a,new A.nN(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ju()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ec(a,new A.bB(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ju()
return a},
ad(a){var s
if(a instanceof A.iz)return a.b
if(a==null)return new A.k9(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.k9(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kz(a){if(a==null)return J.a7(a)
if(typeof a=="object")return A.eF(a)
return J.a7(a)},
Mp(a){if(typeof a=="number")return B.x.gJ(a)
if(a instanceof A.p1)return A.eF(a)
if(a instanceof A.hM)return a.gJ(a)
if(a instanceof A.jz)return a.gJ(0)
return A.kz(a)},
Gu(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
MJ(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
Le(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.E3("Unsupported number of arguments for wrapped closure"))},
eb(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Mu(a,b)
a.$identity=s
return s},
Mu(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.Le)},
HV(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.x9().constructor.prototype):Object.create(new A.il(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.DX(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.HR(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.DX(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
HR(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.HM)}throw A.b("Error in functionType of tearoff")},
HS(a,b,c,d){var s=A.DU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
DX(a,b,c,d){if(c)return A.HU(a,b,d)
return A.HS(b.length,d,a,b)},
HT(a,b,c,d){var s=A.DU,r=A.HN
switch(b?-1:a){case 0:throw A.b(new A.n3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
HU(a,b,c){var s,r
if($.DS==null)$.DS=A.DR("interceptor")
if($.DT==null)$.DT=A.DR("receiver")
s=b.length
r=A.HT(s,c,a,b)
return r},
Di(a){return A.HV(a)},
HM(a,b){return A.ki(v.typeUniverse,A.bi(a.a),b)},
DU(a){return a.a},
HN(a){return a.b},
DR(a){var s,r,q,p=new A.il("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.P("Field name "+a+" not found.",null))},
BA(a){return v.getIsolateTag(a)},
Nq(a,b){var s=$.D
if(s===B.i)return a
return s.hJ(a,b)},
GK(){return v.G},
Ox(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
N0(a){var s,r,q,p,o,n=$.Gv.$1(a),m=$.Bv[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.BJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Gf.$2(a,n)
if(q!=null){m=$.Bv[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.BJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.BL(s)
$.Bv[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.BJ[n]=s
return s}if(p==="-"){o=A.BL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.GD(a,s)
if(p==="*")throw A.b(A.EN(n))
if(v.leafTags[n]===true){o=A.BL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.GD(a,s)},
GD(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Dr(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
BL(a){return J.Dr(a,!1,null,!!a.$ibQ)},
N2(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.BL(s)
else return J.Dr(s,c,null,null)},
MT(){if(!0===$.Dp)return
$.Dp=!0
A.MU()},
MU(){var s,r,q,p,o,n,m,l
$.Bv=Object.create(null)
$.BJ=Object.create(null)
A.MS()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.GF.$1(o)
if(n!=null){m=A.N2(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
MS(){var s,r,q,p,o,n,m=B.bK()
m=A.i3(B.bL,A.i3(B.bM,A.i3(B.aV,A.i3(B.aV,A.i3(B.bN,A.i3(B.bO,A.i3(B.bP(B.aU),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Gv=new A.BG(p)
$.Gf=new A.BH(o)
$.GF=new A.BI(n)},
i3(a,b){return a(b)||b},
Kj(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
My(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
Cp(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
Ng(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.ew){s=B.a.ae(a,c)
return b.b.test(s)}else return!J.C4(b,B.a.ae(a,c)).gF(0)},
Gs(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
GG(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B(a,b,c){var s
if(typeof b=="string")return A.Ni(a,b,c)
if(b instanceof A.ew){s=b.glS()
s.lastIndex=0
return a.replace(s,A.Gs(c))}return A.Nh(a,b,c)},
Nh(a,b,c){var s,r,q,p
for(s=J.C4(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Ni(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.GG(b),"g"),A.Gs(c))},
G7(a){return a},
GL(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hE(0,a),s=new A.o8(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.p(A.G7(B.a.A(a,q,m)))+A.p(c.$1(o))
q=m+n[0].length}s=p+A.p(A.G7(B.a.ae(a,q)))
return s.charCodeAt(0)==0?s:s},
Nj(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.GM(a,s,s+b.length,c)},
GM(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a5:function a5(a,b){this.a=a
this.b=b},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
oK:function oK(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
oL:function oL(a){this.a=a},
it:function it(a,b){this.a=a
this.$ti=b},
fy:function fy(){},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
f1:function f1(a,b){this.a=a
this.$ti=b},
hI:function hI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iG:function iG(a,b){this.a=a
this.$ti=b},
iu:function iu(){},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
tx:function tx(){},
iK:function iK(a,b){this.a=a
this.$ti=b},
w7:function w7(a){this.a=a},
jo:function jo(){},
xL:function xL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jd:function jd(){},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
nN:function nN(a){this.a=a},
mB:function mB(a){this.a=a},
iz:function iz(a,b){this.a=a
this.b=b},
k9:function k9(a){this.a=a
this.b=null},
ek:function ek(){},
q5:function q5(){},
q6:function q6(){},
xB:function xB(){},
x9:function x9(){},
il:function il(a,b){this.a=a
this.b=b},
n3:function n3(a){this.a=a},
bD:function bD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tE:function tE(a){this.a=a},
uJ:function uJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
T:function T(a,b){this.a=a
this.$ti=b},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
al:function al(a,b){this.a=a
this.$ti=b},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aK:function aK(a,b){this.a=a
this.$ti=b},
mj:function mj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iQ:function iQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iP:function iP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
BG:function BG(a){this.a=a},
BH:function BH(a){this.a=a},
BI:function BI(a){this.a=a},
hM:function hM(){},
oH:function oH(){},
oI:function oI(){},
oJ:function oJ(){},
ew:function ew(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(a){this.b=a},
o7:function o7(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function o8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hk:function hk(a,b){this.a=a
this.c=b},
oX:function oX(a,b,c){this.a=a
this.b=b
this.c=c},
At:function At(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Nm(a){throw A.aN(A.Ek(a),new Error())},
v(){throw A.aN(A.El(""),new Error())},
ce(){throw A.aN(A.ID(""),new Error())},
C_(){throw A.aN(A.Ek(""),new Error())},
yM(){var s=new A.og("")
return s.b=s},
yN(a){var s=new A.og(a)
return s.b=s},
og:function og(a){this.a=a
this.b=null},
hZ(a,b,c){},
b9(a){var s,r,q
if(t.iy.b(a))return a
s=J.L(a)
r=A.ab(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
IS(a){return new DataView(new ArrayBuffer(a))},
Ep(a,b,c){A.hZ(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d5(a,b,c){A.hZ(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
IT(a){return new Int8Array(a)},
IU(a){return new Uint16Array(a)},
Eq(a,b,c){A.hZ(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
vq(a){return new Uint8Array(a)},
bS(a,b,c){A.hZ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dn(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.Bu(b,a))},
dp(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.MB(a,b,c))
if(b==null)return c
return b},
fV:function fV(){},
fU:function fU(){},
j8:function j8(){},
p4:function p4(a){this.a=a},
j7:function j7(){},
fW:function fW(){},
dO:function dO(){},
bR:function bR(){},
mu:function mu(){},
mv:function mv(){},
mw:function mw(){},
mx:function mx(){},
my:function my(){},
j9:function j9(){},
ja:function ja(){},
jb:function jb(){},
eB:function eB(){},
k2:function k2(){},
k3:function k3(){},
k4:function k4(){},
k5:function k5(){},
CF(a,b){var s=b.c
return s==null?b.c=A.kg(a,"y",[b.x]):s},
ED(a){var s=a.w
if(s===6||s===7)return A.ED(a.x)
return s===11||s===12},
Jg(a){return a.as},
GC(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.Az(v.typeUniverse,a,!1)},
MW(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.e9(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
e9(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e9(a1,s,a3,a4)
if(r===s)return a2
return A.Fh(a1,r,!0)
case 7:s=a2.x
r=A.e9(a1,s,a3,a4)
if(r===s)return a2
return A.Fg(a1,r,!0)
case 8:q=a2.y
p=A.i2(a1,q,a3,a4)
if(p===q)return a2
return A.kg(a1,a2.x,p)
case 9:o=a2.x
n=A.e9(a1,o,a3,a4)
m=a2.y
l=A.i2(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.D1(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.i2(a1,j,a3,a4)
if(i===j)return a2
return A.Fi(a1,k,i)
case 11:h=a2.x
g=A.e9(a1,h,a3,a4)
f=a2.y
e=A.LR(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Ff(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.i2(a1,d,a3,a4)
o=a2.x
n=A.e9(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.D2(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kT("Attempted to substitute unexpected RTI kind "+a0))}},
i2(a,b,c,d){var s,r,q,p,o=b.length,n=A.AJ(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e9(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
LS(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.AJ(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e9(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
LR(a,b,c,d){var s,r=b.a,q=A.i2(a,r,c,d),p=b.b,o=A.i2(a,p,c,d),n=b.c,m=A.LS(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ou()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
pm(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.MN(s)
return a.$S()}return null},
MV(a,b){var s
if(A.ED(b))if(a instanceof A.ek){s=A.pm(a)
if(s!=null)return s}return A.bi(a)},
bi(a){if(a instanceof A.k)return A.n(a)
if(Array.isArray(a))return A.a0(a)
return A.Db(J.ds(a))},
a0(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.Db(a)},
Db(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.Lc(a,s)},
Lc(a,b){var s=a instanceof A.ek?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Kt(v.typeUniverse,s.name)
b.$ccache=r
return r},
MN(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.Az(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dt(a){return A.bJ(A.n(a))},
Do(a){var s=A.pm(a)
return A.bJ(s==null?A.bi(a):s)},
De(a){var s
if(a instanceof A.hM)return a.lG()
s=a instanceof A.ek?A.pm(a):null
if(s!=null)return s
if(t.dH.b(a))return J.bZ(a).a
if(Array.isArray(a))return A.a0(a)
return A.bi(a)},
bJ(a){var s=a.r
return s==null?a.r=new A.p1(a):s},
MF(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.ki(v.typeUniverse,A.De(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Fk(v.typeUniverse,s,A.De(q[r]))
return A.ki(v.typeUniverse,s,a)},
bK(a){return A.bJ(A.Az(v.typeUniverse,a,!1))},
Lb(a){var s=this
s.b=A.LP(s)
return s.b(a)},
LP(a){var s,r,q,p
if(a===t.K)return A.Lk
if(A.fg(a))return A.Lo
s=a.w
if(s===6)return A.L8
if(s===1)return A.FQ
if(s===7)return A.Lf
r=A.LO(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fg)){a.f="$i"+q
if(q==="q")return A.Li
if(a===t.m)return A.Lh
return A.Ln}}else if(s===10){p=A.My(a.x,a.y)
return p==null?A.FQ:p}return A.L6},
LO(a){if(a.w===8){if(a===t.S)return A.av
if(a===t.W||a===t.o)return A.Lj
if(a===t.N)return A.Lm
if(a===t.y)return A.by}return null},
La(a){var s=this,r=A.L5
if(A.fg(s))r=A.KH
else if(s===t.K)r=A.KG
else if(A.i6(s)){r=A.L7
if(s===t.U)r=A.bf
else if(s===t.x)r=A.a6
else if(s===t.o9)r=A.Fz
else if(s===t.jh)r=A.FD
else if(s===t.dA)r=A.FA
else if(s===t.B)r=A.FB}else if(s===t.S)r=A.aq
else if(s===t.N)r=A.F
else if(s===t.y)r=A.hY
else if(s===t.o)r=A.FC
else if(s===t.W)r=A.f8
else if(s===t.m)r=A.bg
s.a=r
return s.a(a)},
L6(a){var s=this
if(a==null)return A.i6(s)
return A.MZ(v.typeUniverse,A.MV(a,s),s)},
L8(a){if(a==null)return!0
return this.x.b(a)},
Ln(a){var s,r=this
if(a==null)return A.i6(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.ds(a)[s]},
Li(a){var s,r=this
if(a==null)return A.i6(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.ds(a)[s]},
Lh(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
FP(a){if(typeof a=="object"){if(a instanceof A.k)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
L5(a){var s=this
if(a==null){if(A.i6(s))return a}else if(s.b(a))return a
throw A.aN(A.FJ(a,s),new Error())},
L7(a){var s=this
if(a==null||s.b(a))return a
throw A.aN(A.FJ(a,s),new Error())},
FJ(a,b){return new A.ke("TypeError: "+A.F6(a,A.bW(b,null)))},
F6(a,b){return A.iy(a)+": type '"+A.bW(A.De(a),null)+"' is not a subtype of type '"+b+"'"},
cc(a,b){return new A.ke("TypeError: "+A.F6(a,b))},
Lf(a){var s=this
return s.x.b(a)||A.CF(v.typeUniverse,s).b(a)},
Lk(a){return a!=null},
KG(a){if(a!=null)return a
throw A.aN(A.cc(a,"Object"),new Error())},
Lo(a){return!0},
KH(a){return a},
FQ(a){return!1},
by(a){return!0===a||!1===a},
hY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aN(A.cc(a,"bool"),new Error())},
Fz(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aN(A.cc(a,"bool?"),new Error())},
f8(a){if(typeof a=="number")return a
throw A.aN(A.cc(a,"double"),new Error())},
FA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aN(A.cc(a,"double?"),new Error())},
av(a){return typeof a=="number"&&Math.floor(a)===a},
aq(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aN(A.cc(a,"int"),new Error())},
bf(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aN(A.cc(a,"int?"),new Error())},
Lj(a){return typeof a=="number"},
FC(a){if(typeof a=="number")return a
throw A.aN(A.cc(a,"num"),new Error())},
FD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aN(A.cc(a,"num?"),new Error())},
Lm(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.aN(A.cc(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aN(A.cc(a,"String?"),new Error())},
bg(a){if(A.FP(a))return a
throw A.aN(A.cc(a,"JSObject"),new Error())},
FB(a){if(a==null)return a
if(A.FP(a))return a
throw A.aN(A.cc(a,"JSObject?"),new Error())},
G2(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bW(a[q],b)
return s},
LE(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.G2(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bW(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
FN(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.j([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bW(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bW(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bW(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bW(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bW(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bW(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bW(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bW(a.x,b)+">"
if(m===8){p=A.LW(a.x)
o=a.y
return o.length>0?p+("<"+A.G2(o,b)+">"):p}if(m===10)return A.LE(a,b)
if(m===11)return A.FN(a,b,null)
if(m===12)return A.FN(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
LW(a){var s=A.GQ(a)
if(s!=null)return s
return"minified:"+a},
Ku(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Kt(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.Az(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kh(a,5,"#")
q=A.AJ(s)
for(p=0;p<s;++p)q[p]=r
o=A.kg(a,b,q)
n[b]=o
return o}else return m},
Ks(a,b){return A.Fx(a.tR,b)},
Kr(a,b){return A.Fx(a.eT,b)},
Az(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Fj(a,null,b,!1)
r.set(b,s)
return s},
ki(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Fj(a,b,c,!0)
q.set(c,r)
return r},
Fk(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.D1(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Fj(a,b,c,d){return A.Kh(A.Kb(a,b,c,d))},
e7(a,b){b.a=A.La
b.b=A.Lb
return b},
kh(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cp(null,null)
s.w=b
s.as=c
r=A.e7(a,s)
a.eC.set(c,r)
return r},
Fh(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Kp(a,b,r,c)
a.eC.set(r,s)
return s},
Kp(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fg(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.i6(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cp(null,null)
q.w=6
q.x=b
q.as=c
return A.e7(a,q)},
Fg(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Kn(a,b,r,c)
a.eC.set(r,s)
return s},
Kn(a,b,c,d){var s,r
if(d){s=b.w
if(A.fg(b)||b===t.K)return b
else if(s===1)return A.kg(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cp(null,null)
r.w=7
r.x=b
r.as=c
return A.e7(a,r)},
Kq(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=13
s.x=b
s.as=q
r=A.e7(a,s)
a.eC.set(q,r)
return r},
kf(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Km(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kg(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.kf(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cp(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e7(a,r)
a.eC.set(p,q)
return q},
D1(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.kf(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cp(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e7(a,o)
a.eC.set(q,n)
return n},
Fi(a,b,c){var s,r,q="+"+(b+"("+A.kf(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e7(a,s)
a.eC.set(q,r)
return r},
Ff(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.kf(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.kf(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Km(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cp(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e7(a,p)
a.eC.set(r,o)
return o},
D2(a,b,c,d){var s,r=b.as+("<"+A.kf(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Ko(a,b,c,r,d)
a.eC.set(r,s)
return s},
Ko(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.AJ(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e9(a,b,r,0)
m=A.i2(a,c,r,0)
return A.D2(a,n,m,c!==m)}}l=new A.cp(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e7(a,l)},
Kb(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Kh(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.Kd(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.Fb(a,r,l,k,!1)
else if(q===46)r=A.Fb(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f3(a.u,a.e,k.pop()))
break
case 94:k.push(A.Kq(a.u,k.pop()))
break
case 35:k.push(A.kh(a.u,5,"#"))
break
case 64:k.push(A.kh(a.u,2,"@"))
break
case 126:k.push(A.kh(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Kf(a,k)
break
case 38:A.Ke(a,k)
break
case 63:p=a.u
k.push(A.Fh(p,A.f3(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Fg(p,A.f3(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.Kc(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.Fc(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Ki(a.u,a.e,o)
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
return A.f3(a.u,a.e,m)},
Kd(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
Fb(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Ku(s,o.x)[p]
if(n==null)A.t('No "'+p+'" in "'+A.Jg(o)+'"')
d.push(A.ki(s,o,n))}else d.push(p)
return m},
Kf(a,b){var s,r=a.u,q=A.Fa(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kg(r,p,q))
else{s=A.f3(r,a.e,p)
switch(s.w){case 11:b.push(A.D2(r,s,q,a.n))
break
default:b.push(A.D1(r,s,q))
break}}},
Kc(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.Fa(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f3(p,a.e,o)
q=new A.ou()
q.a=s
q.b=n
q.c=m
b.push(A.Ff(p,r,q))
return
case-4:b.push(A.Fi(p,b.pop(),s))
return
default:throw A.b(A.kT("Unexpected state under `()`: "+A.p(o)))}},
Ke(a,b){var s=b.pop()
if(0===s){b.push(A.kh(a.u,1,"0&"))
return}if(1===s){b.push(A.kh(a.u,4,"1&"))
return}throw A.b(A.kT("Unexpected extended operation "+A.p(s)))},
Fa(a,b){var s=b.splice(a.p)
A.Fc(a.u,a.e,s)
a.p=b.pop()
return s},
f3(a,b,c){if(typeof c=="string")return A.kg(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Kg(a,b,c)}else return c},
Fc(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f3(a,b,c[s])},
Ki(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f3(a,b,c[s])},
Kg(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kT("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kT("Bad index "+c+" for "+b.l(0)))},
MZ(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aV(a,b,null,c,null)
r.set(c,s)}return s},
aV(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fg(d))return!0
s=b.w
if(s===4)return!0
if(A.fg(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aV(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aV(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aV(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aV(a,b.x,c,d,e))return!1
return A.aV(a,A.CF(a,b),c,d,e)}if(s===6)return A.aV(a,p,c,d,e)&&A.aV(a,b.x,c,d,e)
if(q===7){if(A.aV(a,b,c,d.x,e))return!0
return A.aV(a,b,c,A.CF(a,d),e)}if(q===6)return A.aV(a,b,c,p,e)||A.aV(a,b,c,d.x,e)
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
if(!A.aV(a,j,c,i,e)||!A.aV(a,i,e,j,c))return!1}return A.FO(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.FO(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Lg(a,b,c,d,e)}if(o&&q===10)return A.Ll(a,b,c,d,e)
return!1},
FO(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aV(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aV(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aV(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aV(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aV(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
Lg(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ki(a,b,r[o])
return A.Fy(a,p,null,c,d.y,e)}return A.Fy(a,b.y,null,c,d.y,e)},
Fy(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aV(a,b[s],d,e[s],f))return!1
return!0},
Ll(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aV(a,r[s],c,q[s],e))return!1
return!0},
i6(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.fg(a))if(s!==6)r=s===7&&A.i6(a.x)
return r},
fg(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Fx(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
AJ(a){return a>0?new Array(a):v.typeUniverse.sEA},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ou:function ou(){this.c=this.b=this.a=null},
p1:function p1(a){this.a=a},
or:function or(){},
ke:function ke(a){this.a=a},
JI(){var s,r,q
if(self.scheduleImmediate!=null)return A.M_()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eb(new A.ys(s),1)).observe(r,{childList:true})
return new A.yr(s,r,q)}else if(self.setImmediate!=null)return A.M0()
return A.M1()},
JJ(a){self.scheduleImmediate(A.eb(new A.yt(a),0))},
JK(a){self.setImmediate(A.eb(new A.yu(a),0))},
JL(a){A.CQ(B.D,a)},
CQ(a,b){var s=B.c.M(a.a,1000)
return A.Kk(s<0?0:s,b)},
EJ(a,b){var s=B.c.M(a.a,1000)
return A.Kl(s<0?0:s,b)},
Kk(a,b){var s=new A.kd(!0)
s.oY(a,b)
return s},
Kl(a,b){var s=new A.kd(!1)
s.oZ(a,b)
return s},
h(a){return new A.jH(new A.w($.D,a.i("w<0>")),a.i("jH<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.FE(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.bP(A.C(a),A.ad(a))},
FE(a,b){var s,r,q=new A.AX(b),p=new A.AY(b)
if(a instanceof A.w)a.mk(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.bg(q,p,s)
else{r=new A.w($.D,t._)
r.a=8
r.c=a
r.mk(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.D.fz(new A.Bf(s),t.H,t.S,t.z)},
bU(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cZ(null)
else{s=c.a
s===$&&A.v()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.C(a)
q=A.ad(a)
s.al(new A.an(r,q))}else{s=A.C(a)
r=A.ad(a)
q=c.a
q===$&&A.v()
q.by(s,r)
c.a.q()}return}if(a instanceof A.jZ){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.v()
r.t(0,s)
A.kC(new A.AV(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.v()
s.tJ(p,!1).W(new A.AW(c,b),t.P)
return}}A.FE(a,b)},
G6(a){var s=a.a
s===$&&A.v()
return new A.b7(s,A.n(s).i("b7<1>"))},
JM(a,b){var s=new A.oa(b.i("oa<0>"))
s.oU(a,b)
return s},
FR(a,b){return A.JM(a,b)},
K7(a){return new A.jZ(a,1)},
e2(a){return new A.jZ(a,0)},
Fe(a,b,c){return 0},
ig(a){var s
if(t.C.b(a)){s=a.gcp()
if(s!=null)return s}return B.Q},
iF(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.C(q)
r=A.ad(q)
p=new A.w($.D,b.i("w<0>"))
o=s
n=r
m=A.kp(o,n)
if(m==null)o=new A.an(o,n==null?A.ig(o):n)
else o=m
p.cq(o)
return p}return b.i("y<0>").b(l)?l:A.bx(l,b)},
bb(a,b){var s=a==null?b.a(a):a,r=new A.w($.D,b.i("w<0>"))
r.aD(s)
return r},
In(a,b){var s
if(!b.b(null))throw A.b(A.az(null,"computation","The type parameter is not nullable"))
s=new A.w($.D,b.i("w<0>"))
A.cQ(a,new A.t2(null,s,b))
return s},
Ci(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.D,b.i("w<q<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.t4(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bg(new A.t3(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cZ(A.j([],b.i("z<0>")))
return n}i.a=A.ab(n,null,!1,b.i("0?"))}catch(l){p=A.C(l)
o=A.ad(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kp(m,k)
if(j==null)m=new A.an(m,k==null?A.ig(m):k)
else m=j
n.cq(m)
return n}else{i.d=p
i.c=o}}return f},
Ch(a,b,c,d){var s=new A.rY(d,null,b,c),r=$.D,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fz(s,c.i("0/"),t.K,t.l)
a.dE(new A.ca(q,2,null,s,a.$ti.i("@<1>").X(c).i("ca<1,2>")))
return q},
Il(a,b){var s,r,q,p=A.j([],b.i("z<jX<0>>"))
for(s=a.length,r=b.i("jX<0>"),q=0;q<a.length;a.length===s||(0,A.r)(a),++q)p.push(new A.jX(a[q],r))
if(p.length===0)return A.bb(A.j([],b.i("z<0>")),b.i("q<0>"))
s=new A.w($.D,b.i("w<q<0>>"))
A.K1(p,new A.rZ(new A.ap(s,b.i("ap<q<0>>")),p,b))
return s},
Lt(a){return a!=null},
K1(a,b){var s,r={},q=r.a=r.b=0,p=new A.zs(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.r)(a),++q)a[q].tq(p)},
kp(a,b){var s,r,q,p=$.D
if(p===B.i)return null
s=p.mR(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mO(r,q)
return s},
f9(a,b){var s
if($.D!==B.i){s=A.kp(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcp()
if(b==null){A.mO(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.C.b(a))A.mO(a,b)
return new A.an(a,b)},
K0(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bx(a,b){var s=new A.w($.D,b.i("w<0>"))
s.a=8
s.c=a
return s},
zy(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.CI()
b.cq(new A.an(new A.bB(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lY(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eQ()
b.h0(p.a)
A.f_(b,q)
return}b.a^=2
b.b.cT(new A.zz(p,b))},
f_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.ff(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.f_(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gcc()===k.gcc())}else f=!1
if(f){f=g.a
r=f.c
f.b.ff(r.a,r.b)
return}j=$.D
if(j!==k)$.D=k
else j=null
f=s.a.c
if((f&15)===8)new A.zD(s,g,p).$0()
else if(q){if((f&1)!==0)new A.zC(s,m).$0()}else if((f&2)!==0)new A.zB(g,s).$0()
if(j!=null)$.D=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.ho(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.zy(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.ho(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
FX(a,b){if(t.ng.b(a))return b.fz(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dm(a,t.z,t.K)
throw A.b(A.az(a,"onError",u.w))},
Ls(){var s,r
for(s=$.i0;s!=null;s=$.i0){$.kr=null
r=s.b
$.i0=r
if(r==null)$.kq=null
s.a.$0()}},
LQ(){$.Dc=!0
try{A.Ls()}finally{$.kr=null
$.Dc=!1
if($.i0!=null)$.DA().$1(A.Gi())}},
G4(a){var s=new A.o9(a),r=$.kq
if(r==null){$.i0=$.kq=s
if(!$.Dc)$.DA().$1(A.Gi())}else $.kq=r.b=s},
LN(a){var s,r,q,p=$.i0
if(p==null){A.G4(a)
$.kr=$.kq
return}s=new A.o9(a)
r=$.kr
if(r==null){s.b=p
$.i0=$.kr=s}else{q=r.b
s.b=q
$.kr=r.b=s
if(q==null)$.kq=s}},
kC(a){var s,r=null,q=$.D
if(B.i===q){A.Bd(r,r,B.i,a)
return}if(B.i===q.gjH().a)s=B.i.gcc()===q.gcc()
else s=!1
if(s){A.Bd(r,r,q,q.bV(a,t.H))
return}s=$.D
s.cT(s.eZ(a))},
CK(a,b){var s=null,r=b.i("cV<0>"),q=new A.cV(s,s,s,s,r)
q.aA(a)
q.lf()
return new A.b7(q,r.i("b7<1>"))},
NL(a,b){return new A.cy(A.cz(a,"stream",t.K),b.i("cy<0>"))},
xb(a,b,c,d,e){return d?new A.hT(b,null,c,a,e.i("hT<0>")):new A.cV(b,null,c,a,e.i("cV<0>"))},
dS(a,b,c){return new A.jI(b,a,c.i("jI<0>"))},
pi(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.C(q)
r=A.ad(q)
$.D.ff(s,r)}},
JZ(a,b,c,d,e,f){var s=$.D,r=e?1:0,q=c!=null?32:0,p=A.oe(s,b,f),o=A.yH(s,c),n=d==null?A.Bg():d
return new A.e0(a,p,o,s.bV(n,t.H),s,r|q,f.i("e0<0>"))},
JH(a){return new A.yo(a)},
oe(a,b,c){var s=b==null?A.M3():b
return a.dm(s,t.H,c)},
yH(a,b){if(b==null)b=A.M4()
if(t.b9.b(b))return a.fz(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dm(b,t.z,t.K)
throw A.b(A.P("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Lu(a){},
Lw(a,b){$.D.ff(a,b)},
Lv(){},
F5(a,b){var s=$.D,r=new A.hE(s,b.i("hE<0>"))
A.kC(r.glU())
if(a!=null)r.c=s.bV(a,t.H)
return r},
KP(a,b,c){var s=a.C()
if(s!==$.ed())s.aZ(new A.B_(b,c))
else b.al(c)},
KQ(a,b,c){var s=a.C()
if(s!==$.ed())s.aZ(new A.B0(b,c))
else b.cr(c)},
cQ(a,b){var s=$.D
if(s===B.i)return s.k_(a,b)
return s.k_(a,s.eZ(b))},
CP(a,b){var s,r=$.D
if(r===B.i)return r.jZ(a,b)
s=r.hJ(b,t.hU)
return $.D.jZ(a,s)},
pr(a,b,c,d){return A.LM(a,c,b,d)},
LM(a,b,c,d){return $.D.mV(c,b).aW(a,d)},
LK(a,b,c,d,e){A.ku(d,e)},
ku(a,b){A.LN(new A.Ba(a,b))},
Bb(a,b,c,d){var s,r=$.D
if(r===c)return d.$0()
$.D=c
s=r
try{r=d.$0()
return r}finally{$.D=s}},
Bc(a,b,c,d,e){var s,r=$.D
if(r===c)return d.$1(e)
$.D=c
s=r
try{r=d.$1(e)
return r}finally{$.D=s}},
Dd(a,b,c,d,e,f){var s,r=$.D
if(r===c)return d.$2(e,f)
$.D=c
s=r
try{r=d.$2(e,f)
return r}finally{$.D=s}},
G0(a,b,c,d){return d},
G1(a,b,c,d){return d},
G_(a,b,c,d){return d},
LJ(a,b,c,d,e){return null},
Bd(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gcc()
r=c.gcc()
d=s!==r?c.eZ(d):c.jU(d,t.H)}A.G4(d)},
LI(a,b,c,d,e){return A.CQ(d,B.i!==c?c.jU(e,t.H):e)},
LH(a,b,c,d,e){e=c.tW(e,t.H,t.hU)
return A.EJ(d,e)},
LL(a,b,c,d){A.GE(d)},
FZ(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.Cj(o,o,o,s,s)
r.E(0,e)}else r=o
s=new A.ok(c.gm7(),c.gmb(),c.gm9(),c.gm3(),c.gm4(),c.gm2(),c.gly(),c.gjH(),c.glq(),c.glp(),c.glZ(),c.glD(),c.gjp(),c.gjR(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.pa(s,q)
p=d.a
if(p!=null)s.as=new A.p9(s,p)}if(r!=null)s.at=new A.pb(s,r)
return s},
ys:function ys(a){this.a=a},
yr:function yr(a,b,c){this.a=a
this.b=b
this.c=c},
yt:function yt(a){this.a=a},
yu:function yu(a){this.a=a},
kd:function kd(a){this.a=a
this.b=null
this.c=0},
Ax:function Ax(a,b){this.a=a
this.b=b},
Aw:function Aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jH:function jH(a,b){this.a=a
this.b=!1
this.$ti=b},
AX:function AX(a){this.a=a},
AY:function AY(a){this.a=a},
Bf:function Bf(a){this.a=a},
AV:function AV(a,b){this.a=a
this.b=b},
AW:function AW(a,b){this.a=a
this.b=b},
oa:function oa(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
yw:function yw(a){this.a=a},
yx:function yx(a){this.a=a},
yz:function yz(a){this.a=a},
yA:function yA(a,b){this.a=a
this.b=b},
yy:function yy(a,b){this.a=a
this.b=b},
yv:function yv(a){this.a=a},
jZ:function jZ(a,b){this.a=a
this.b=b},
oZ:function oZ(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hS:function hS(a,b){this.a=a
this.$ti=b},
an:function an(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.$ti=b},
eW:function eW(a,b,c,d,e,f,g){var _=this
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
jN:function jN(){},
jI:function jI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
t2:function t2(a,b,c){this.a=a
this.b=b
this.c=c},
t4:function t4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t3:function t3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rY:function rY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nD:function nD(a,b){this.a=a
this.b=b},
rZ:function rZ(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b,c){this.c=a
this.d=b
this.$ti=c},
jX:function jX(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
zt:function zt(a,b){this.a=a
this.b=b},
zu:function zu(a,b){this.a=a
this.b=b},
zs:function zs(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(){},
aJ:function aJ(a,b){this.a=a
this.$ti=b},
ap:function ap(a,b){this.a=a
this.$ti=b},
ca:function ca(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
w:function w(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
zv:function zv(a,b){this.a=a
this.b=b},
zA:function zA(a,b){this.a=a
this.b=b},
zz:function zz(a,b){this.a=a
this.b=b},
zx:function zx(a,b){this.a=a
this.b=b},
zw:function zw(a,b){this.a=a
this.b=b},
zD:function zD(a,b,c){this.a=a
this.b=b
this.c=c},
zE:function zE(a,b){this.a=a
this.b=b},
zF:function zF(a){this.a=a},
zC:function zC(a,b){this.a=a
this.b=b},
zB:function zB(a,b){this.a=a
this.b=b},
zG:function zG(a,b){this.a=a
this.b=b},
zH:function zH(a,b,c){this.a=a
this.b=b
this.c=c},
zI:function zI(a,b){this.a=a
this.b=b},
o9:function o9(a){this.a=a
this.b=null},
a9:function a9(){},
xe:function xe(a,b){this.a=a
this.b=b},
xf:function xf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xg:function xg(a,b){this.a=a
this.b=b},
xh:function xh(a,b){this.a=a
this.b=b},
xc:function xc(a){this.a=a},
xd:function xd(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(){},
e5:function e5(){},
Ap:function Ap(a){this.a=a},
Ao:function Ao(a){this.a=a},
p_:function p_(){},
jJ:function jJ(){},
cV:function cV(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
hT:function hT(a,b,c,d,e){var _=this
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
e0:function e0(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
o6:function o6(){},
yo:function yo(a){this.a=a},
yn:function yn(a){this.a=a},
ka:function ka(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b2:function b2(){},
yJ:function yJ(a,b,c){this.a=a
this.b=b
this.c=c},
yI:function yI(a){this.a=a},
hR:function hR(){},
oq:function oq(){},
c9:function c9(a,b){this.b=a
this.a=null
this.$ti=b},
hD:function hD(a,b){this.b=a
this.c=b
this.a=null},
zl:function zl(){},
e4:function e4(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
A6:function A6(a,b){this.a=a
this.b=b},
hE:function hE(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cy:function cy(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jS:function jS(a){this.$ti=a},
dl:function dl(a,b){this.b=a
this.$ti=b},
A4:function A4(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
B_:function B_(a,b){this.a=a
this.b=b},
B0:function B0(a,b){this.a=a
this.b=b},
jV:function jV(){},
hH:function hH(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
f2:function f2(a,b,c){this.b=a
this.a=b
this.$ti=c},
jT:function jT(a,b){this.a=a
this.$ti=b},
hP:function hP(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
jM:function jM(a,b,c){this.a=a
this.b=b
this.$ti=c},
AS:function AS(a,b){this.a=a
this.b=b},
AU:function AU(a,b){this.a=a
this.b=b},
AT:function AT(a,b){this.a=a
this.b=b},
AQ:function AQ(a,b){this.a=a
this.b=b},
AR:function AR(a,b){this.a=a
this.b=b},
AP:function AP(a,b){this.a=a
this.b=b},
AM:function AM(a,b){this.a=a
this.b=b},
pa:function pa(a,b){this.a=a
this.b=b},
AL:function AL(a,b){this.a=a
this.b=b},
AK:function AK(a,b){this.a=a
this.b=b},
AO:function AO(a,b){this.a=a
this.b=b},
AN:function AN(a,b){this.a=a
this.b=b},
p9:function p9(a,b){this.a=a
this.b=b},
pb:function pb(a,b){this.a=a
this.b=b},
p8:function p8(){},
ok:function ok(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
zh:function zh(a,b,c){this.a=a
this.b=b
this.c=c},
zj:function zj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
zg:function zg(a,b){this.a=a
this.b=b},
zi:function zi(a,b,c){this.a=a
this.b=b
this.c=c},
oO:function oO(){},
Ad:function Ad(a,b,c){this.a=a
this.b=b
this.c=c},
Ac:function Ac(a,b){this.a=a
this.b=b},
Ae:function Ae(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
Ba:function Ba(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
Cj(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dj(d.i("@<0>").X(e).i("dj<1,2>"))
b=A.Dk()}else{if(A.Gm()===b&&A.Gl()===a)return new A.e1(d.i("@<0>").X(e).i("e1<1,2>"))
if(a==null)a=A.Dj()}else{if(b==null)b=A.Dk()
if(a==null)a=A.Dj()}return A.K_(a,b,c,d,e)},
F7(a,b){var s=a[b]
return s===a?null:s},
D_(a,b,c){if(c==null)a[b]=a
else a[b]=c},
CZ(){var s=Object.create(null)
A.D_(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
K_(a,b,c,d,e){var s=c!=null?c:new A.zf(d)
return new A.jP(a,b,s,d.i("@<0>").X(e).i("jP<1,2>"))},
dI(a,b,c,d){if(b==null){if(a==null)return new A.bD(c.i("@<0>").X(d).i("bD<1,2>"))
b=A.Dk()}else{if(A.Gm()===b&&A.Gl()===a)return new A.iQ(c.i("@<0>").X(d).i("iQ<1,2>"))
if(a==null)a=A.Dj()}return A.Ka(a,b,null,c,d)},
m(a,b,c){return A.Gu(a,new A.bD(b.i("@<0>").X(c).i("bD<1,2>")))},
u(a,b){return new A.bD(a.i("@<0>").X(b).i("bD<1,2>"))},
Ka(a,b,c,d,e){return new A.k_(a,b,new A.A2(d),d.i("@<0>").X(e).i("k_<1,2>"))},
mk(a){return new A.dk(a.i("dk<0>"))},
aL(a){return new A.dk(a.i("dk<0>"))},
at(a,b){return A.MJ(a,new A.dk(b.i("dk<0>")))},
D0(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hJ(a,b,c){var s=new A.e3(a,b,c.i("e3<0>"))
s.c=a.e
return s},
KX(a,b){return J.x(a,b)},
KY(a){return J.a7(a)},
Ee(a){if(a.length===0)return null
return B.b.ga1(a)},
bm(a,b,c){var s=A.dI(null,null,b,c)
a.a8(0,new A.uK(s,b,c))
return s},
cJ(a,b,c){var s=A.dI(null,null,b,c)
s.E(0,a)
return s},
uL(a,b){var s,r,q=A.mk(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.t(0,b.a(a[r]))
return q},
d3(a,b){var s=A.mk(b)
s.E(0,a)
return s},
IE(a,b){var s=t.bP
return J.DI(s.a(a),s.a(b))},
v_(a){var s,r
if(A.Dq(a))return"{...}"
s=new A.a3("")
try{r={}
$.fa.push(a)
s.a+="{"
r.a=!0
a.a8(0,new A.v0(r,s))
s.a+="}"}finally{$.fa.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Cs(a){return new A.iT(A.ab(A.IF(null),null,!1,a.i("0?")),a.i("iT<0>"))},
IF(a){return 8},
dj:function dj(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
zK:function zK(a){this.a=a},
zJ:function zJ(a){this.a=a},
e1:function e1(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
jP:function jP(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
zf:function zf(a){this.a=a},
f0:function f0(a,b){this.a=a
this.$ti=b},
ov:function ov(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
k_:function k_(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
A2:function A2(a){this.a=a},
dk:function dk(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
A3:function A3(a){this.a=a
this.c=this.b=null},
e3:function e3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
uK:function uK(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
oC:function oC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b3:function b3(){},
I:function I(){},
V:function V(){},
uZ:function uZ(a){this.a=a},
v0:function v0(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.$ti=b},
oE:function oE(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
p3:function p3(){},
iX:function iX(){},
cS:function cS(a,b){this.a=a
this.$ti=b},
iT:function iT(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
oD:function oD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cq:function cq(){},
k8:function k8(){},
kj:function kj(){},
FV(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.C(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.B2(p)
return q},
B2(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.oz(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.B2(a[s])
return a},
KF(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Hi()
else s=new Uint8Array(o)
for(r=J.L(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
KE(a,b,c,d){var s=a?$.Hh():$.Hg()
if(s==null)return null
if(0===c&&d===b.length)return A.Fv(s,b)
return A.Fv(s,b.subarray(c,d))},
Fv(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
DM(a,b,c,d,e,f){if(B.c.ak(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
JQ(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.L(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.H(f)
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
if(3-k===1){r&2&&A.H(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.H(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.h(b,q)
if(o<0||o>255)break;++q}throw A.b(A.az(b,"Not a byte value at index "+q+": 0x"+B.c.kE(s.h(b,q),16),null))},
JP(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.af(f,2),i=f&3,h=$.DB()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.H(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.b(A.a8(l,a,r))
s&2&&A.H(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.b(A.a8(l,a,r))
s&2&&A.H(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.EU(a,r+1,c,-m-1)}throw A.b(A.a8(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a8(k,a,r))},
JN(a,b,c,d){var s=A.JO(a,b,c),r=(d&3)+(s-b),q=B.c.af(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.H9()},
JO(a,b,c){var s,r=c,q=r,p=0
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
EU(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.b(A.a8("Invalid padding character",a,b))
return-s-1},
Ia(a){return B.cY.h(0,a.toLowerCase())},
Ej(a,b,c){return new A.iR(a,b)},
L0(a){return a.p()},
K8(a,b){return new A.zZ(a,[],A.Mv())},
K9(a,b,c){var s,r=new A.a3("")
A.F9(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
F9(a,b,c,d){var s=A.K8(b,c)
s.iI(a)},
Fw(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oz:function oz(a,b){this.a=a
this.b=b
this.c=null},
zY:function zY(a){this.a=a},
oA:function oA(a){this.a=a},
zW:function zW(a,b,c){this.b=a
this.c=b
this.a=c},
AH:function AH(){},
AG:function AG(){},
kQ:function kQ(){},
p2:function p2(){},
kR:function kR(a){this.a=a},
Ay:function Ay(a,b){this.a=a
this.b=b},
kX:function kX(a){this.a=a},
ii:function ii(a){this.a=a},
oc:function oc(a){this.a=0
this.b=a},
yG:function yG(a){this.c=null
this.a=0
this.b=a},
yC:function yC(){},
yp:function yp(a,b){this.a=a
this.b=b},
kY:function kY(){},
ob:function ob(){this.a=0},
yB:function yB(a,b){this.a=a
this.b=b},
pS:function pS(){},
hy:function hy(a){this.a=a},
of:function of(a,b){this.a=a
this.b=b
this.c=0},
l8:function l8(){},
oU:function oU(a,b,c){this.a=a
this.b=b
this.$ti=c},
eY:function eY(a,b,c){this.a=a
this.b=b
this.$ti=c},
la:function la(){},
aC:function aC(){},
qP:function qP(a){this.a=a},
es:function es(){},
iR:function iR(a,b){this.a=a
this.b=b},
mc:function mc(a,b){this.a=a
this.b=b},
tF:function tF(){},
me:function me(a){this.b=a},
zX:function zX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
md:function md(a){this.a=a},
A_:function A_(){},
A0:function A0(a,b){this.a=a
this.b=b},
zZ:function zZ(a,b,c){this.c=a
this.a=b
this.b=c},
mh:function mh(){},
mi:function mi(a){this.a=a},
nm:function nm(){},
Au:function Au(a,b){this.a=a
this.b=b},
kc:function kc(){},
oW:function oW(a){this.a=a},
AF:function AF(a,b,c){this.a=a
this.b=b
this.c=c},
nT:function nT(){},
nU:function nU(){},
p6:function p6(a){this.b=this.a=0
this.c=a},
AI:function AI(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jB:function jB(a){this.a=a},
dm:function dm(a){this.a=a
this.b=16
this.c=0},
pc:function pc(){},
F3(a,b){var s=A.JX(a,b)
if(s==null)throw A.b(A.a8("Could not parse BigInt",a,null))
return s},
JU(a,b){var s,r,q=$.cg(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bj(0,$.DC()).fM(0,A.jK(s))
s=0
o=0}}if(b)return q.bD(0)
return q},
EW(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
JV(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.tY(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.EW(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.EW(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cg()
l=A.bH(j,i)
return new A.aM(l===0?!1:c,i,l)},
JX(a,b){var s,r,q,p,o
if(a==="")return null
s=$.Hb().e9(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.JU(p,q)
if(o!=null)return A.JV(o,2,q)
return null},
bH(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
CX(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
EV(a){var s
if(a===0)return $.cg()
if(a===1)return $.fk()
if(a===2)return $.Hc()
if(Math.abs(a)<4294967296)return A.jK(B.c.iB(a))
s=A.JR(a)
return s},
jK(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bH(4,s)
return new A.aM(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bH(1,s)
return new A.aM(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.af(a,16)
r=A.bH(2,s)
return new A.aM(r===0?!1:o,s,r)}r=B.c.M(B.c.gmD(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bH(r,s)
return new A.aM(r===0?!1:o,s,r)},
JR(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.P("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cg()
r=$.Ha()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.H(r)
r[p]=0}q=J.pw(B.f.gab(r))
q.$flags&2&&A.H(q,13)
q.setFloat64(0,a,!0)
q=r[7]
o=r[6]
n=(q<<4>>>0)+(o>>>4)-1075
m=new Uint16Array(4)
m[0]=(r[1]<<8>>>0)+r[0]
m[1]=(r[3]<<8>>>0)+r[2]
m[2]=(r[5]<<8>>>0)+r[4]
m[3]=o&15|16
l=new A.aM(!1,m,4)
if(n<0)k=l.dA(0,-n)
else k=n>0?l.bE(0,n):l
if(s)return k.bD(0)
return k},
CY(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.H(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.H(d)
d[s]=0}return b+c},
F1(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.ak(c,16),l=16-m,k=B.c.bE(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dA(p,l)
r&2&&A.H(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bE((p&k)>>>0,m)}r&2&&A.H(d)
d[n]=q},
EX(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.ak(c,16)===0)return A.CY(a,b,o,d)
s=b+o+1
A.F1(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.H(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
JW(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.ak(c,16),m=16-n,l=B.c.bE(1,n)-1,k=B.c.dA(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bE((q&l)>>>0,m)
s&2&&A.H(d)
d[r]=(p|k)>>>0
k=B.c.dA(q,n)}s&2&&A.H(d)
d[j]=k},
yD(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
JS(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}s&2&&A.H(e)
e[b]=r},
od(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}},
F2(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.H(d)
d[e]=p&65535
r=B.c.M(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.H(d)
d[e]=n&65535
r=B.c.M(n,65536)}},
JT(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iT((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
MR(a){return A.kz(a)},
Ce(a,b){return new A.lD(new WeakMap(),a,b.i("lD<0>"))},
Cf(a){},
zr(a,b){var s=$.Hd()
s=s==null?null:new s(A.eb(A.Nq(a,b),1))
return new A.ot(s,b.i("ot<0>"))},
aI(a){var s=A.ji(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
MD(a){var s=A.J4(a)
if(s!=null)return s
throw A.b(A.a8("Invalid double",a,null))},
Ie(a,b){a=A.aN(a,new Error())
a.stack=b.l(0)
throw a},
ab(a,b,c,d){var s,r=c?J.Cn(a,d):J.Cm(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bF(a,b,c){var s,r=A.j([],c.i("z<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
Q(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.i("z<0>"))
s=A.j([],b.i("z<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fO(a,b){var s=A.bF(a,!1,b)
s.$flags=3
return s},
dU(a,b,c){var s,r,q,p,o
A.bd(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ax(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Ey(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Jt(a,b,c)
if(r)a=J.C7(a,c)
if(b>0)a=J.pA(a,b)
s=A.Q(a,t.S)
return A.Ey(s)},
Jt(a,b,c){var s=a.length
if(b>=s)return""
return A.J6(a,b,c==null||c>s?s:c)},
af(a,b,c){return new A.ew(a,A.Cp(a,!1,b,c,!1,""))},
MQ(a,b){return a==null?b==null:a===b},
xi(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.p(s.gn())
while(s.k())}else{a+=A.p(s.gn())
while(s.k())a=a+c+A.p(s.gn())}return a},
CS(){var s,r,q=A.J_()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.EQ
if(s!=null&&q===$.EP)return s
r=A.nS(q)
$.EQ=r
$.EP=q
return r},
p5(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.He()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bv(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Kz(a){var s,r,q
if(!$.Hf())return A.KA(a)
s=new URLSearchParams()
a.a8(0,new A.AE(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
CI(){return A.ad(new Error())},
Cb(a,b,c,d,e,f,g){var s=A.J7(a,b,c,d,e,f,g,0,!0)
return new A.aP(s==null?new A.rs(a,b,c,d,e,f,g,0).$0():s,0,!0)},
I5(){return new A.aP(Date.now(),0,!1)},
lu(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ax(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ax(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.az(b,s,"Time including microseconds is outside valid range"))
A.cz(c,"isUtc",t.y)
return a},
I6(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
E0(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
lt(a){if(a>=10)return""+a
return"0"+a},
d_(a,b,c){return new A.aD(a+1000*b+1e6*c)},
fC(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.az(b,"name","No enum value with that name"))},
iy(a){if(typeof a=="number"||A.by(a)||a==null)return J.Z(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Ex(a)},
E2(a,b){A.cz(a,"error",t.K)
A.cz(b,"stackTrace",t.l)
A.Ie(a,b)},
kT(a){return new A.kS(a)},
P(a,b){return new A.bB(!1,null,b,a)},
az(a,b,c){return new A.bB(!0,a,b,c)},
kP(a,b){return a},
b_(a){var s=null
return new A.d7(s,s,!1,s,s,a)},
wM(a,b){return new A.d7(null,null,!0,a,b,"Value not in range")},
ax(a,b,c,d,e){return new A.d7(b,c,!0,a,d,"Invalid value")},
EC(a,b,c,d){if(a<b||a>c)throw A.b(A.ax(a,b,c,d,null))
return a},
Ja(a,b,c,d){return A.Ec(a,d,b,null,c)},
be(a,b,c){if(0>a||a>c)throw A.b(A.ax(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ax(b,a,c,"end",null))
return b}return c},
bd(a,b){if(a<0)throw A.b(A.ax(a,0,null,b,null))
return a},
Eb(a,b){var s=b.b
return new A.iI(s,!0,a,null,"Index out of range")},
m4(a,b,c,d,e){return new A.iI(b,!0,a,e,"Index out of range")},
Ec(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.m4(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cT(a)},
EN(a){return new A.nM(a)},
A(a){return new A.bn(a)},
aA(a){return new A.ld(a)},
E3(a){return new A.os(a)},
a8(a,b,c){return new A.bl(a,b,c)},
Iu(a,b,c){var s,r
if(A.Dq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
$.fa.push(a)
try{A.Lp(a,s)}finally{$.fa.pop()}r=A.xi(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
tC(a,b,c){var s,r
if(A.Dq(a))return b+"..."+c
s=new A.a3(b)
$.fa.push(a)
try{r=s
r.a=A.xi(r.a,a,", ")}finally{$.fa.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Lp(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.k())return
s=A.p(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.k()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.k()){if(j<=4){b.push(A.p(p))
return}r=A.p(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.k();p=o,o=n){n=l.gn();++j
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
Em(a,b,c,d,e){return new A.ei(a,b.i("@<0>").X(c).X(d).X(e).i("ei<1,2,3,4>"))},
c4(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a7(a)
b=J.a7(b)
return A.hm(A.ay(A.ay($.fl(),s),b))}if(B.d===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.hm(A.ay(A.ay(A.ay($.fl(),s),b),c))}if(B.d===e){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
return A.hm(A.ay(A.ay(A.ay(A.ay($.fl(),s),b),c),d))}if(B.d===f){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
return A.hm(A.ay(A.ay(A.ay(A.ay(A.ay($.fl(),s),b),c),d),e))}if(B.d===g){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
return A.hm(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fl(),s),b),c),d),e),f))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
g=J.a7(g)
g=A.hm(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fl(),s),b),c),d),e),f),g))
return g},
vr(a){var s,r=$.fl()
for(s=J.E(a);s.k();)r=A.ay(r,J.a7(s.gn()))
return A.hm(r)},
FF(a,b){return 65536+((a&1023)<<10)+(b&1023)},
nS(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.EO(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gnu()
else if(s===32)return A.EO(B.a.A(a5,5,a4),0,a3).gnu()}r=A.ab(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.G3(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.G3(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.ad(a5,"\\",n))if(p>0)h=B.a.ad(a5,"\\",p-1)||B.a.ad(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.ad(a5,"..",n)))h=m>n+2&&B.a.ad(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.ad(a5,"file",0)){if(p<=0){if(!B.a.ad(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.A(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.dn(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.ad(a5,"http",0)){if(i&&o+3===n&&B.a.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dn(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.ad(a5,"https",0)){if(i&&o+4===n&&B.a.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dn(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cb(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.D4(a5,0,q)
else{if(q===0)A.hV(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Fr(a5,c,p-1):""
a=A.Fp(a5,p,o,!1)
i=o+1
if(i<n){a0=A.ji(B.a.A(a5,i,n),a3)
d=A.AA(a0==null?A.t(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Fq(a5,n,m,a3,j,a!=null)
a2=m<l?A.AB(a5,m+1,l,a3):a3
return A.kl(j,b,a,d,a1,a2,l<a4?A.Fo(a5,l+1,a4):a3)},
JD(a){return A.D7(a,0,a.length,B.o,!1)},
nR(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
JA(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.nR("each part must be in the range 0..255",a,r)}A.nR("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.nR(k,a,q)}l=p+1
s&2&&A.H(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.nR(k,a,q)
p=l}A.nR("IPv4 address should contain exactly 4 parts",a,q)},
JB(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.JC(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.ER(a,b,c)
return!0},
JC(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bl(o,a,r)
s=r
break}return new A.bl("Unexpected character",a,r-1)}if(s-1===b)return new A.bl(o,a,s)
return new A.bl("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bl("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bl("Invalid IPvFuture address character",a,s)}},
ER(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.xR(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.JA(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.c.af(n,8)
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
B.f.ah(s,b,16,s,c)
B.f.kc(s,c,b,0)}}return s},
kl(a,b,c,d,e,f,g){return new A.kk(a,b,c,d,e,f,g)},
Fl(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hV(a,b,c){throw A.b(A.a8(c,a,b))},
Kw(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.D(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
AA(a,b){if(a!=null&&a===A.Fl(b))return null
return a},
Fp(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hV(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Kx(a,r,s)
if(p<s){o=p+1
q=A.Fu(a,B.a.ad(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.JB(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cd(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Fu(a,B.a.ad(a,"25",o)?s+3:o,c,"%25")}else q=""
A.ER(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.KC(a,b,c)},
Kx(a,b,c){var s=B.a.cd(a,"%",b)
return s>=b&&s<c?s:c},
Fu(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a3(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.D5(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a3("")
m=i.a+=B.a.A(a,r,s)
if(n)o=B.a.A(a,s,s+3)
else if(o==="%")A.hV(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a3("")
if(r<s){i.a+=B.a.A(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.A(a,r,s)
if(i==null){i=new A.a3("")
n=i}else n=i
n.a+=j
m=A.D3(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
KC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.D5(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a3("")
l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.A(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a3("")
if(r<s){q.a+=B.a.A(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hV(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a3("")
m=q}else m=q
m.a+=l
k=A.D3(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
D4(a,b,c){var s,r,q
if(b===c)return""
if(!A.Fn(a.charCodeAt(b)))A.hV(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hV(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.Kv(r?a.toLowerCase():a)},
Kv(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Fr(a,b,c){if(a==null)return""
return A.km(a,b,c,16,!1,!1)},
Fq(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.km(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.KB(s,e,f)},
KB(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.D6(a,!s||c)
return A.f7(a)},
AB(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.P("Both query and queryParameters specified",null))
return A.km(a,b,c,256,!0,!1)}if(d==null)return null
return A.Kz(d)},
KA(a){var s={},r=new A.a3("")
s.a=""
a.a8(0,new A.AC(new A.AD(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Fo(a,b,c){if(a==null)return null
return A.km(a,b,c,256,!0,!1)},
D5(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.BF(s)
p=A.BF(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bv(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
D3(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.mg(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dU(s,0,null)},
km(a,b,c,d,e,f){var s=A.Ft(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
Ft(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.D5(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hV(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.D3(o)}if(p==null){p=new A.a3("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Fs(a){if(B.a.S(a,"."))return!0
return B.a.bR(a,"/.")!==-1},
f7(a){var s,r,q,p,o,n
if(!A.Fs(a))return a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
D6(a,b){var s,r,q,p,o,n
if(!A.Fs(a))return!b?A.Fm(a):a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga1(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Fm(s[0])
return B.b.B(s,"/")},
Fm(a){var s,r,q=a.length
if(q>=2&&A.Fn(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ae(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
KD(a,b){if(a.vO("package")&&a.c==null)return A.G5(b,0,b.length)
return-1},
Ky(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.P("Invalid URL encoding",null))}}return s},
D7(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.A(a,b,c)
else p=new A.ch(B.a.A(a,b,c))
else{p=A.j([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.P("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.P("Truncated URI",null))
p.push(A.Ky(a,o+1))
o+=2}else p.push(r)}}return d.f0(p)},
Fn(a){var s=a|32
return 97<=s&&s<=122},
EO(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.j([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a8(k,a,r))}}if(q<0&&r>b)throw A.b(A.a8(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga1(j)
if(p!==44||r!==n+7||!B.a.ad(a,"base64",n+1))throw A.b(A.a8("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aq.w8(a,m,s)
else{l=A.Ft(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dn(a,m,s,l)}return new A.xQ(a,j,c)},
G3(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Fd(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.G5(a.a,a.e,a.f)
return-1},
G5(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
KS(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
yE:function yE(){},
yF:function yF(){},
ot:function ot(a,b){this.a=a
this.$ti=b},
AE:function AE(a){this.a=a},
rs:function rs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a){this.a=a},
zm:function zm(){},
ae:function ae(){},
kS:function kS(a){this.a=a},
df:function df(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iI:function iI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cT:function cT(a){this.a=a},
nM:function nM(a){this.a=a},
bn:function bn(a){this.a=a},
ld:function ld(a){this.a=a},
mE:function mE(){},
ju:function ju(){},
os:function os(a){this.a=a},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
m6:function m6(){},
o:function o(){},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
U:function U(){},
k:function k(){},
oY:function oY(){},
jv:function jv(){this.b=this.a=0},
jn:function jn(a){this.a=a},
n2:function n2(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a3:function a3(a){this.a=a},
xR:function xR(a){this.a=a},
kk:function kk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
AD:function AD(a,b){this.a=a
this.b=b},
AC:function AC(a){this.a=a},
xQ:function xQ(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
on:function on(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
lD:function lD(a,b,c){this.a=a
this.b=b
this.$ti=c},
IG(a){return a},
Ix(a){return a},
CL(a){return a},
Iv(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.FB(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Im(a){return new v.G.Promise(A.bV(new A.t1(a)))},
mA:function mA(a){this.a=a},
t1:function t1(a){this.a=a},
t_:function t_(a){this.a=a},
t0:function t0(a){this.a=a},
B6(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.KJ,a)
s[$.fj()]=a
return s},
cX(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.KK,a)
s[$.fj()]=a
return s},
bV(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.KL,a)
s[$.fj()]=a
return s},
pe(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.KM,a)
s[$.fj()]=a
return s},
i_(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.KN,a)
s[$.fj()]=a
return s},
Da(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.KO,a)
s[$.fj()]=a
return s},
KJ(a){return a.$0()},
KK(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
KL(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
KM(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
KN(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
KO(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
FT(a){return a==null||A.by(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
pp(a){if(A.FT(a))return a
return new A.BK(new A.e1(t.mp)).$1(a)},
BC(a,b){return a[b]},
Dh(a,b,c){return a[b].apply(a,c)},
Mj(a,b){var s,r
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
a1(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.aJ(s,b.i("aJ<0>"))
a.then(A.eb(new A.BQ(r),1),A.eb(new A.BR(r),1))
return s},
FS(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
pn(a){if(A.FS(a))return a
return new A.Bp(new A.e1(t.mp)).$1(a)},
BK:function BK(a){this.a=a},
BQ:function BQ(a){this.a=a},
BR:function BR(a){this.a=a},
Bp:function Bp(a){this.a=a},
Gy(a,b){return Math.max(a,b)},
EA(){return B.as},
EB(){return $.C2()},
zT:function zT(){},
zU:function zU(a){this.a=a},
HO(a,b,c){return J.DG(a,b,c)},
lA:function lA(){},
a4:function a4(){},
pU:function pU(a){this.a=a},
pV:function pV(a){this.a=a},
pW:function pW(a,b){this.a=a
this.b=b},
pX:function pX(a){this.a=a},
pY:function pY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pZ:function pZ(a){this.a=a},
lw:function lw(a){this.$ti=a},
iM:function iM(a,b){this.a=a
this.$ti=b},
ey:function ey(a,b){this.a=a
this.$ti=b},
hU:function hU(){},
hc:function hc(a,b){this.a=a
this.$ti=b},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a,b,c){this.a=a
this.b=b
this.$ti=c},
lv:function lv(){},
Er(){throw A.b(A.Y(u.O))},
Jz(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
mz:function mz(){},
nP:function nP(){},
ar(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dU(m,0,null)},
ci:function ci(a){this.a=a},
c0:function c0(){this.a=null},
lZ:function lZ(){},
t6:function t6(){},
cW(a){var s=new Uint32Array(A.b9(A.j([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.oS(s,r,a,q,new Uint32Array(16))},
oR:function oR(){},
Ag:function Ag(){},
oS:function oS(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kL:function kL(){},
q4:function q4(){},
iV:function iV(a){this.a=a},
jq:function jq(){},
uY:function uY(){},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
wY:function wY(){},
jr:function jr(a,b){this.b=a
this.c=b},
n7:function n7(a){this.a=a},
bz(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lp(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bz(a5[0])
r=A.bz(a5[1])
q=A.bz(a5[2])
p=A.bz(a5[3])
o=a6[0]
n=a6[1]
m=a6[2]
l=a6[3]
for(k=a7.length,j=0;j<k;j=i,p=b,q=c,r=d,s=e){i=j+16
if(i<=k)for(h=0;h<16;++h)a4.setUint8(h,a7[j+h])
else{a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
g=B.c.ak(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.c.ak(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.c.bE(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bz(s)
a5.$flags&2&&A.H(a5)
a5[0]=k
a5[1]=A.bz(r)
a5[2]=A.bz(q)
a5[3]=A.bz(p)},
E_(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cU(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
r.setUint32(12,B.c.ak(q,n),!1)
p=J.bL(B.aA.gab(r),0,null)
o=new Uint32Array(4)
A.lp(o,a,b)
A.lp(o,a,p)
return J.bL(B.y.gab(o),0,null)},
lo:function lo(a,b,c){this.c=a
this.d=b
this.a=c},
r6:function r6(){},
ol:function ol(){},
om:function om(){},
pk(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kD()===B.P){a5=A.fb(a5)
a6=A.fb(a6)
a7=A.fb(a7)
a8=A.fb(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.ai[a5>>>24&255]^B.ag[a6>>>16&255]^B.ah[a7>>>8&255]^B.ak[a8&255]^b3[r]
o=B.ai[a6>>>24&255]^B.ag[a7>>>16&255]^B.ah[a8>>>8&255]^B.ak[a5&255]^b3[r+1]
n=B.ai[a7>>>24&255]^B.ag[a8>>>16&255]^B.ah[a5>>>8&255]^B.ak[a6&255]^b3[r+2]
m=B.ai[a8>>>24&255]^B.ag[a5>>>16&255]^B.ah[a6>>>8&255]^B.ak[a7&255]^b3[r+3]
r+=4}o=B.m[a5>>>24&255]
n=B.m[a6>>>16&255]
m=B.m[a7>>>8&255]
l=B.m[a8&255]
k=B.m[a6>>>24&255]
j=B.m[a7>>>16&255]
i=B.m[a8>>>8&255]
h=B.m[a5&255]
g=B.m[a7>>>24&255]
f=B.m[a8>>>16&255]
e=B.m[a5>>>8&255]
d=B.m[a6&255]
c=B.m[a8>>>24&255]
b=B.m[a5>>>16&255]
a=B.m[a6>>>8&255]
a0=B.m[a7&255]
a1=(((o&255)<<24|(n&255)<<16|(m&255)<<8|l&255)^b3[r])>>>0
a2=(((k&255)<<24|(j&255)<<16|(i&255)<<8|h&255)^b3[r+1])>>>0
a3=(((g&255)<<24|(f&255)<<16|(e&255)<<8|d&255)^b3[r+2])>>>0
a4=(((c&255)<<24|(b&255)<<16|(a&255)<<8|a0&255)^b3[r+3])>>>0
if($.kD()===B.P){a1=A.fb(a1)
a2=A.fb(a2)
a3=A.fb(a3)
a4=A.fb(a4)}a9.$flags&2&&A.H(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Ge(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge3(),h=B.cX.h(0,i.gm(0))
if(h==null)throw A.b(A.P("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.DG(B.y.gab(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.H(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.kD()===B.P)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.ak(m,k)
if(n===0)j=A.G9((j<<8|j>>>24)>>>0)^B.cy[B.c.iT(m,k)-1]<<24
else if(o&&n===4)j=A.G9(j)
r[m]=(j^r[m-k])>>>0}return r},
G9(a){return(B.m[a>>>24&255]<<24|B.m[a>>>16&255]<<16|B.m[a>>>8&255]<<8|B.m[a&255])>>>0},
fb(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qS:function qS(){},
r7:function r7(){},
zb:function zb(){},
mY:function mY(a,b){this.a=a
this.b=b},
kZ:function kZ(){},
l_:function l_(){},
l0:function l0(){},
l1:function l1(){},
pO:function pO(){},
Ga(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mY("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.ej)){s=J.Z(a)
if(B.a.S(s,"TypeError: "))s=B.a.ae(s,11)
a=new A.ej(s,b.b)}return a},
FY(a,b,c){A.E2(A.Ga(a,c),b)},
KI(a,b){return new A.dl(new A.AZ(a,b),t.fb)},
i1(a,b,c){return A.LD(a,b,c)},
LD(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$i1=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.q(),$async$i1)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.B7(e)
a1.r=new A.B8(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a1(c.read(),k),$async$i1)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.C(b)
l=A.ad(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Ga(m,a)
k=l
j=a1.b
if(j>=4)A.t(a1.bG())
if((j&1)!==0){j=a1.gaN()
j.aI(d,k==null?B.Q:k)}s=15
return A.a(a1.q(),$async$i1)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.u_()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.t(a1.bG())
if((f&1)!==0)a1.gaN().aA(g)}g=a1.b
s=((g&1)!==0?(a1.gaN().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aJ(new A.w($.D,j),i):g).a,$async$i1)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i1,r)},
l5:function l5(a){this.b=!1
this.c=a},
pR:function pR(a){this.a=a},
AZ:function AZ(a,b){this.a=a
this.b=b},
B7:function B7(a){this.a=a},
B8:function B8(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a){this.a=a},
pT:function pT(a){this.a=a},
DW(a,b){return new A.ej(a,b)},
ej:function ej(a,b){this.a=a
this.b=b},
ms:function ms(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
IR(a,b){var s=t.N,r=A.j([],t.e8),q=$.Dv()
if(!q.b.test(a))A.t(A.az(a,"method","Not a valid method"))
return new A.vj(A.u(s,s),r,a,b,A.dI(new A.l0(),new A.l1(),s,s))},
vj:function vj(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
vk:function vk(a,b){this.a=a
this.b=b},
Jd(a,b){var s=new Uint8Array(0),r=$.Dv()
if(!r.b.test(a))A.t(A.az(a,"method","Not a valid method"))
r=t.N
return new A.wP(s,a,b,A.dI(new A.l0(),new A.l1(),r,r))},
wP:function wP(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jx:function jx(){},
nl:function nl(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
HP(a){return a.toLowerCase()},
io:function io(a,b,c){this.a=a
this.c=b
this.$ti=c},
IJ(a){return A.Np("media type",a,new A.v1(a))},
Cu(a,b,c){var s=t.N
if(c==null)s=A.u(s,s)
else{s=new A.io(A.Mk(),A.u(s,t.af),t.fo)
s.E(0,c)}return new A.fP(a.toLowerCase(),b.toLowerCase(),new A.cS(s,t.ph))},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
v1:function v1(a){this.a=a},
v3:function v3(a){this.a=a},
v2:function v2(){},
MG(a){var s
a.mS($.Hp(),"quoted string")
s=a.gko().h(0,0)
return A.GL(B.a.A(s,1,s.length-1),$.Ho(),new A.Bw(),null)},
Bw:function Bw(){},
pN:function pN(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
jf:function jf(){},
vF:function vF(a,b){this.a=a
this.b=b},
vG:function vG(a){this.a=a},
mL:function mL(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.z=_.y=$
_.Q=null
_.ax=_.at=_.as=!1
_.ay=k
_.ch=l
_.CW=m},
w0:function w0(){},
Am:function Am(a){this.a=a},
vS:function vS(){},
fZ(a,b){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aR("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"updated")
if(typeof s!="string"||typeof r!="string")throw A.b(A.aR("Record missing id/updated."))
q=a.h(0,"store")
if(!a.I("store")||q==null)p=""
else{if(typeof q!="string")throw A.b(A.aR('Record field "store" is present but not a string.'))
p=q}o=a.h(0,"data")
if(!a.I("data")||o==null)n=B.j
else if(j.b(o))n=A.bm(o,t.N,t.X)
else throw A.b(A.aR('Record field "data" is present but not an object.'))
m=a.h(0,"imgs")
if(!a.I("imgs")||m==null)l=B.u
else if(t.j.b(m)){for(j=J.L(m),k=0;k<j.gm(m);++k)if(typeof j.h(m,k)!="string")throw A.b(A.aR('Record field "imgs"['+k+"] is present but not a string."))
j=j.f_(m,t.N)
l=j.cR(j)}else throw A.b(A.aR('Record field "imgs" is present but not a list.'))
return new A.d9(s,p,r,n,l)},
vJ:function vJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vR:function vR(a){this.a=a},
vQ:function vQ(){},
vM:function vM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vN:function vN(){},
vO:function vO(a,b){this.a=a
this.b=b},
vP:function vP(){},
vK:function vK(a,b){this.a=a
this.b=b},
vL:function vL(){},
IY(a,b,c,d,e){var s=A.bb(null,t.H)
return new A.vT(b,c,new A.w_(a,B.S,null),e,d,s)},
IZ(a){return 0.5+B.as.n8()},
jh:function jh(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
vT:function vT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0
_.ax=_.at=null},
w_:function w_(a,b,c){this.a=a
this.b=b
this.c=c},
vW:function vW(){},
vX:function vX(a,b,c){this.a=a
this.b=b
this.c=c},
vU:function vU(a,b,c){this.a=a
this.b=b
this.c=c},
vV:function vV(a){this.a=a},
vY:function vY(a){this.a=a},
vZ:function vZ(a){this.a=a},
An:function An(a,b){this.a=a
this.b=null
this.c=b},
Ir(a,b,c){return new A.cH(a,b,c)},
iH(a,b){return new A.dC(a)},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m1:function m1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a){this.a=a},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
vH:function vH(a){this.a=a},
vI:function vI(a){this.a=a},
I3(c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="recordId",b0="field",b1="imgs",b2="name",b3="expectedSha256",b4="allowVolatileBlobs",b5="session",b6="index",b7="refId",b8="token",b9="id",c0="spec",c1="store"
switch(c2){case"open":s=c3.h(0,"stores")
r=c3.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.N("Malformed open payload."))
q=A.j([],t.d)
for(p=J.L(s),o=0;o<p.gm(s);++o)q.push(A.DZ(p.h(s,o),"stores["+o+"]"))
p=t.N
p=A.u(p,p)
for(n=r.ga7(),n=n.gu(n);n.k();){m=n.gn()
p.j(0,J.Z(m.a),A.Dg(m.b,"fingerprint"))}return new A.mD(q,p)
case"capabilities":return B.bF
case"health":return B.bI
case"close":return B.bG
case"fileBeginUpload":l=c3.h(0,"size")
if(!A.av(l))throw A.b(A.N("Malformed fileBeginUpload payload."))
return new A.lI(A.aS(c3),A.ba(c3,a9),A.pg(c3.h(0,b0),b0,b1),A.pg(c3.h(0,b2),b2,"blob.bin"),l,A.dq(c3.h(0,b3),b3),A.e8(c3.h(0,b4),b4,!1))
case"fileChunk":k=c3.h(0,"chunk")
if(!t.p.b(k))throw A.b(A.N("Malformed fileChunk payload."))
return new A.lJ(A.ba(c3,b5),k)
case"fileFinish":return new A.lN(A.ba(c3,b5))
case"fileAbort":return new A.lH(A.ba(c3,b5))
case"filesList":return new A.lX(A.aS(c3),A.ba(c3,a9),A.pg(c3.h(0,b0),b0,b1))
case"fileOpen":return new A.lQ(A.aS(c3),A.ba(c3,a9),A.pg(c3.h(0,b0),b0,b1),A.FU(c3.h(0,b6),b6,0),A.dq(c3.h(0,b7),b7))
case"fileCredit":j=c3.h(0,"bytes")
if(!A.av(j))throw A.b(A.N("Malformed fileCredit payload."))
return new A.lL(A.ba(c3,"stream"),j)
case"fileClose":return new A.lK(A.ba(c3,"stream"))
case"fileRemove":return new A.lU(A.aS(c3),A.ba(c3,a9),A.pg(c3.h(0,b0),b0,b1),A.FU(c3.h(0,b6),b6,0),A.dq(c3.h(0,b7),b7))
case"fileGc":i=c3.h(0,"blobGraceMs")
h=c3.h(0,"tmpGraceMs")
if(!A.av(i)||!A.av(h))throw A.b(A.N("Malformed fileGc payload."))
return new A.lO(i,h)
case"fileEnforceStorageCap":g=c3.h(0,"maxBytes")
if(!A.av(g))throw A.b(A.N("Malformed fileEnforceStorageCap payload."))
return new A.lB(g)
case"fileStorageStatus":return B.bU
case"syncStart":f=c3.h(0,"baseUrl")
if(typeof f!="string")throw A.b(A.N("Malformed syncStart payload."))
return new A.nv(f,A.dq(c3.h(0,"scopeId"),"scopeId"),A.dq(c3.h(0,b8),b8))
case"syncStop":return B.bZ
case"syncNow":return B.bV
case"syncPause":return B.bW
case"syncResume":return B.bX
case"syncUpdateAuth":return new A.nB(A.dq(c3.h(0,b8),b8))
case"syncSetConnectivity":e=c3.h(0,"online")
if(!A.by(e))throw A.b(A.N("Malformed syncSetConnectivity payload."))
return new A.nu(e)
case"syncStatus":return B.bY
case"get":return new A.lY(A.aS(c3),A.ba(c3,b9),A.cF(c3))
case"rows":d=c3.h(0,"ids")
if(!t.j.b(d))throw A.b(A.N("Malformed rows payload."))
return new A.n0(A.aS(c3),A.Gc(d,"ids"),A.cF(c3))
case"mutate":return new A.mt(A.aS(c3),A.KW(c3.h(0,"mutation")),A.cF(c3))
case"query":return new A.mT(A.aS(c3),A.eI(c3.h(0,c0)),A.cF(c3))
case"count":return new A.ll(A.aS(c3),A.eI(c3.h(0,c0)),A.cF(c3))
case"countDistinct":return new A.lk(A.aS(c3),A.ba(c3,b0),A.eI(c3.h(0,c0)),A.cF(c3))
case"distinct":q=A.aS(c3)
p=A.ba(c3,b0)
n=c3.h(0,c0)
return new A.lx(q,p,A.eI(n==null?B.j:n),A.cF(c3))
case"ids":return new A.m2(A.aS(c3),A.eI(c3.h(0,c0)),A.cF(c3))
case"aggregate":c=c3.h(0,"fn")
b=A.Cl(new A.am(B.cH,new A.qN(c),t.gx))
if(b==null)throw A.b(A.N("Unknown aggregate: "+A.p(c)))
return new A.kM(A.aS(c3),b,A.ba(c3,b0),A.eI(c3.h(0,c0)),A.cF(c3))
case"explain":return new A.lE(A.aS(c3),A.eI(c3.h(0,c0)),A.cF(c3))
case"search":return new A.n6(A.aS(c3),A.Jk(c3.h(0,c0)),A.cF(c3))
case"txBegin":a=c3.h(0,"readOnly")
if(!A.by(a))throw A.b(A.N("Malformed txBegin payload."))
a0=c3.h(0,"durability")
if(a0==null)a1=B.bo
else if(typeof a0=="string"){q=A.Cl(new A.am(B.cU,new A.qO(a0),t.mE))
if(q==null)q=A.t(A.N("Unknown tx durability: "+a0))
a1=q}else{q=A.t(A.N("Malformed txBegin durability."))
a1=q}return new A.nF(a,a1)
case"txCommit":case"txRollback":a2=c3.h(0,b5)
if(typeof a2!="string")throw A.b(A.N("Malformed tx payload."))
return c2==="txCommit"?new A.nG(a2):new A.nI(a2)
case"txSavepoint":case"txRollbackTo":case"txRelease":a2=c3.h(0,b5)
a3=c3.h(0,b2)
if(typeof a2!="string"||typeof a3!="string")throw A.b(A.N("Malformed savepoint payload."))
A:{if("txSavepoint"===c2){q=new A.nK(a2,a3)
break A}if("txRollbackTo"===c2){q=new A.nJ(a2,a3)
break A}q=new A.nH(a2,a3)
break A}return q
case"watchOne":return new A.nZ(A.aS(c3),A.ba(c3,b9))
case"watch":return new A.o_(A.aS(c3),A.eI(c3.h(0,c0)))
case"watchCancel":a4=c3.h(0,"subscription")
if(typeof a4!="string")throw A.b(A.N("Malformed watchCancel payload."))
return new A.nY(a4)
case"analyze":return new A.kO(A.dq(c3.h(0,c1),c1))
case"walCheckpoint":return B.c0
case"vacuum":return B.c_
case"pruneOutbox":return B.bT
case"compact":a5=c3.h(0,c1)
a6=c3.h(0,"olderThanMs")
if(typeof a5!="string"||!A.av(a6))throw A.b(A.N("Malformed compact payload."))
return new A.lc(a5,a6)
case"runMaintenance":a7=c3.h(0,"compactOlderThanMs")
if(!A.av(a7))throw A.b(A.N("Malformed runMaintenance payload."))
return new A.n1(a7)
case"conflictsList":return new A.lh(A.dq(c3.h(0,c1),c1))
case"conflictGet":return new A.lg(A.aS(c3),A.ba(c3,b9))
case"conflictsResolve":a8=c3.h(0,"merged")
if(!t.f.b(a8))throw A.b(A.N("Malformed conflictsResolve payload."))
return new A.mZ(A.aS(c3),A.ba(c3,b9),A.DZ(a8,"merged"))
case"conflictsAcceptLocal":return new A.kJ(A.aS(c3),A.ba(c3,b9))
case"conflictsAcceptRemote":return new A.kK(A.aS(c3),A.ba(c3,b9))
case"conflictsWatch":return new A.lj(A.dq(c3.h(0,c1),c1))
default:return null}},
aS(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.N("Malformed store name."))
return s},
ba(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.N('Malformed field "'+b+'".'))
return s},
cF(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.N("Malformed session id."))
return s},
DZ(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.N('Malformed field "'+b+'".'))},
ME(a){var s,r,q,p=J.Z(a),o=null
if(a instanceof A.dJ){s=A.Lr(a)
p=a.a
if(a instanceof A.eR&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.eQ){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.fe(a.c))}catch(r){if(!(A.C(r) instanceof A.eS))throw r}}else if(a instanceof A.eD)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.bp){s=A.LT(a)
p=a.a
if(a instanceof A.da&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else if(a instanceof A.eS){p=a.a
s="WireException"}else if(a instanceof A.bn){p=a.a
s="StateError"}else if(t.b0.b(a)){p=A.p(a.d)
s="RangeError"}else if(a instanceof A.bB){p=A.p(a.d)
s="ArgumentError"}else s="unknown"
q=A.u(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
Lr(a){var s
A:{if(a instanceof A.eR){s="ValidationException"
break A}if(a instanceof A.eQ){s="UniqueConstraintException"
break A}if(a instanceof A.eD){s="NotNullConstraintException"
break A}if(a instanceof A.fr){s="CheckConstraintException"
break A}if(a instanceof A.h_){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fJ){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hq){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fL){s="FtsUnavailableError"
break A}if(a instanceof A.eK){s="SchemaRegistrationError"
break A}if(a instanceof A.h9){s="SchemaTooNewError"
break A}if(a instanceof A.cN){s="StorageError"
break A}if(a instanceof A.h5){s="RecordNotFoundException"
break A}if(a instanceof A.hg){s="StaleCursorError"
break A}if(a instanceof A.fS){s="MissingLimitError"
break A}if(a instanceof A.fv){s="ConflictBlockedError"
break A}if(a instanceof A.eo){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.h4){s="ReadOnlyTxError"
break A}throw A.b(A.eJ(u.P))}return s},
LT(a){var s
A:{if(a instanceof A.eP){s="TransientNetworkError"
break A}if(a instanceof A.da){s="ServerBusyError"
break A}if(a instanceof A.hb){s="ServerError"
break A}if(a instanceof A.bM){s="AuthError"
break A}if(a instanceof A.cj){s="ForbiddenError"
break A}if(a instanceof A.cl){s="NotFoundError"
break A}if(a instanceof A.dQ){s="PayloadError"
break A}if(a instanceof A.eG){s="ProtocolError"
break A}if(a instanceof A.ep){s="DuplicateIdError"
break A}if(a instanceof A.dw){s="BatchFailedError"
break A}if(a instanceof A.np){s="SyncIdentityError"
break A}throw A.b(A.eJ(u.P))}return s},
L2(a){var s
A:{if(a instanceof A.j1){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.j4){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.j2){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.j5){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iZ){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.j_){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iY){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.j3){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.j0){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.eJ(u.P))}return s},
KW(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.N("Malformed mutation payload."))
s=t.N
r=a.aU(0,new A.B4(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.j1(A.pj(r.h(0,n),n))
case"upsert":return new A.j4(A.pj(r.h(0,n),n))
case"putAll":return new A.j2(A.G8(r.h(0,m),m))
case"upsertAll":return new A.j5(A.G8(r.h(0,m),m))
case"patch":return new A.iZ(A.B9(r.h(0,l),l),A.pj(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.N("Malformed patchAll patches."))
k=A.u(s,t.G)
for(s=p.ga7(),s=s.gu(s);s.k();){o=s.gn()
k.j(0,J.Z(o.a),A.pj(o.b,"patches"))}return new A.j_(k)
case"archive":return new A.iY(A.B9(r.h(0,l),l))
case"restore":return new A.j3(A.B9(r.h(0,l),l))
case"purge":return new A.j0(A.B9(r.h(0,l),l))
default:throw A.b(A.N("Unknown mutation kind: "+A.p(q)))}},
B9(a,b){if(typeof a=="string")return a
throw A.b(A.N('Malformed mutation field "'+b+'".'))},
pj(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),q.b)}return s}throw A.b(A.N('Malformed mutation field "'+b+'".'))},
G8(a,b){var s,r
if(t.j.b(a)){s=A.j([],t.d)
for(r=J.E(a);r.k();)s.push(A.pj(r.gn(),b))
return s}throw A.b(A.N('Malformed mutation field "'+b+'".'))},
eI(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.N("Malformed query spec."))
s=a0.aU(0,new A.wH(),t.N,t.z)
r=new A.wI()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.j([],t.ae)
if(p!=null&&!t.j.b(p))j.push(A.t(A.N("Malformed query orGroups.")))
else if(t.j.b(p))for(i=J.E(p);i.k();)j.push(r.$1(i.gn()))
if(!s.I(e)||s.h(0,e)==null)a=null
else a=a.b(s.h(0,e))?A.Cw(s.h(0,e)):A.t(A.N("Malformed query predicate."))
i=A.j([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.t(A.N("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.J9(h.gn()))
h=m==null?null:A.Df(m,"limit")
g=A.e8(s.h(0,"all"),"all",!1)
f=n==null?null:A.Gc(n,"select")
return new A.wG(k,j,a,i,h,g,f,A.e8(s.h(0,d),d,!1),A.e8(s.h(0,c),c,!1),A.dq(l,"cursor"),A.e8(s.h(0,b),b,!1))},
Ez(a){var s,r,q,p,o,n,m,l,k="Malformed query condition."
if(!t.f.b(a))throw A.b(A.N(k))
s=a.aU(0,new A.wC(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.N(k))
p=A.Cl(new A.am(B.cz,new A.wD(q),t.mz))
if(p==null)throw A.b(A.N("Unknown query operator: "+q))
o=s.h(0,"values")
if(o!=null&&!t.j.b(o))throw A.b(A.N('Query condition "values" must be a list.'))
n=A.kw(s.h(0,"value"))
if(t.j.b(o)){m=[]
for(l=J.E(o);l.k();)m.push(A.kw(l.gn()))}else m=null
return new A.eH(r,p,n,m)},
Cw(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.N("Malformed predicate tree."))
s=a.aU(0,new A.w4(),t.N,t.z)
r=new A.w3()
switch(s.h(0,"kind")){case"leaf":return new A.iS(A.Ez(s))
case"not":return new A.jc(A.Cw(s.h(0,"child")))
case"all":return new A.id(r.$1(s.h(0,q)))
case"any":return new A.ie(r.$1(s.h(0,q)))
default:throw A.b(A.N("Unknown predicate node kind: "+A.p(s.h(0,"kind"))))}},
J9(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.N(q))
s=a.aU(0,new A.wF(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.N(q))
return new A.mS(r,A.e8(s.h(0,"desc"),"desc",!1))},
Jk(a){var s,r,q,p="limit",o="includeArchived",n="includeHidden"
if(!t.f.b(a))throw A.b(A.N("Malformed search spec."))
s=a.aU(0,new A.wX(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.N("Malformed search term."))
q=s.h(0,p)==null?null:A.Df(s.h(0,p),p)
return new A.wW(r,q,A.e8(s.h(0,"all"),"all",!1),A.e8(s.h(0,o),o,!1),A.e8(s.h(0,n),n,!1))},
I4(a){return new A.fz(a)},
I9(a){return new A.fA(a)},
Is(a){return new A.fM(a)},
HL(a){return new A.fn(a)},
If(a){return new A.fD(a)},
fe(a){var s,r,q,p
if(a instanceof A.aP)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gf6().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.fe(r.gn()))
return s}if(t.f.b(a)){if(a.I("__lp_t")){s=t.N
r=A.u(s,t.X)
for(q=a.ga7(),q=q.gu(q);q.k();){p=q.gn()
r.j(0,J.Z(p.a),A.fe(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.u(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.Z(q.a),A.fe(q.b))}return s}if(a==null||A.by(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.N("Value of type "+J.bZ(a).l(0)+" is not wire-safe."))},
kw(a){var s,r,q,p,o,n,m,l,k="Malformed bytes wire value.",j="Non-string map key on the wire: ",i=t.f
if(i.b(a)){r=a.h(0,"__lp_t")
q=J.ds(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.av(s))return new A.aP(A.lu(s,0,!0),0,!0)
throw A.b(A.N("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{i=B.ar.v(s)
return i}catch(p){if(t.Y.b(A.C(p)))throw A.b(A.N(k))
else throw p}throw A.b(A.N(k))}if(q.P(r,"map")){o=a.h(0,"v")
if(!i.b(o))throw A.b(A.N("Malformed map wire value."))
n=A.u(t.N,t.X)
for(i=o.ga7(),i=i.gu(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.N(j+A.p(m)))
n.j(0,m,A.kw(q.b))}return n}l=A.u(t.N,t.X)
for(i=a.ga7(),i=i.gu(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.N(j+A.p(m)))
l.j(0,m,A.kw(q.b))}return l}if(t.j.b(a)){i=[]
for(q=J.E(a);q.k();)i.push(A.kw(q.gn()))
return i}return a},
N(a){return new A.eS(a)},
Dg(a,b){if(typeof a=="string")return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
Df(a,b){if(A.av(a))return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
dq(a,b){if(a==null)return null
return A.Dg(a,b)},
FU(a,b,c){if(a==null)return c
return A.Df(a,b)},
e8(a,b,c){if(a==null)return!1
if(A.by(a))return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
pg(a,b,c){if(a==null)return c
return A.Dg(a,b)},
Gc(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.j([],t.s)
for(r=J.L(a),q=0;q<r.gm(a);++q){if(typeof r.h(a,q)!="string")throw A.b(A.N(p+b+"["+q+']".'))
s.push(A.F(r.h(a,q)))}return s}throw A.b(A.N(p+b+'".'))},
qN:function qN(a){this.a=a},
qO:function qO(a){this.a=a},
lf:function lf(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
c1:function c1(){},
lb:function lb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
li:function li(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
lS:function lS(a,b,c,d,e,f,g,h,i,j){var _=this
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
lI:function lI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lJ:function lJ(a,b){this.a=a
this.b=b},
lN:function lN(a){this.a=a},
lK:function lK(a){this.a=a},
lH:function lH(a){this.a=a},
lX:function lX(a,b,c){this.a=a
this.b=b
this.c=c},
lQ:function lQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lL:function lL(a,b){this.a=a
this.b=b},
lU:function lU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lO:function lO(a,b){this.a=a
this.b=b},
lB:function lB(a){this.a=a},
ni:function ni(){},
lW:function lW(a,b){this.a=a
this.b=b},
lT:function lT(a){this.a=a},
fH:function fH(a){this.a=a},
lR:function lR(a){this.a=a},
fG:function fG(a){this.a=a},
fE:function fE(a){this.a=a},
hi:function hi(a){this.a=a},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vl:function vl(){},
j1:function j1(a){this.a=a},
j4:function j4(a){this.a=a},
j2:function j2(a){this.a=a},
j5:function j5(a){this.a=a},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
iY:function iY(a){this.a=a},
j3:function j3(a){this.a=a},
j0:function j0(a){this.a=a},
B4:function B4(){},
wG:function wG(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
_.z=k},
wH:function wH(){},
wI:function wI(){},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wC:function wC(){},
wD:function wD(a){this.a=a},
aZ:function aZ(a,b){this.a=a
this.b=b},
cL:function cL(){},
w4:function w4(){},
w3:function w3(){},
iS:function iS(a){this.a=a},
jc:function jc(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
mS:function mS(a,b){this.a=a
this.b=b},
wF:function wF(){},
cB:function cB(a,b){this.a=a
this.b=b},
wW:function wW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wX:function wX(){},
mX:function mX(){},
mD:function mD(a,b){this.a=a
this.b=b},
l6:function l6(){},
m_:function m_(){},
l9:function l9(){},
lY:function lY(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function n0(a,b,c){this.a=a
this.b=b
this.c=c},
mt:function mt(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function mT(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lx:function lx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m2:function m2(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lE:function lE(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function n6(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a,b){this.a=a
this.b=b},
nF:function nF(a,b){this.a=a
this.b=b},
nG:function nG(a){this.a=a},
nI:function nI(a){this.a=a},
nK:function nK(a,b){this.a=a
this.b=b},
nJ:function nJ(a,b){this.a=a
this.b=b},
nH:function nH(a,b){this.a=a
this.b=b},
nZ:function nZ(a,b){this.a=a
this.b=b},
o_:function o_(a,b){this.a=a
this.b=b},
nY:function nY(a){this.a=a},
kO:function kO(a){this.a=a},
nX:function nX(){},
nV:function nV(){},
mP:function mP(){},
lc:function lc(a,b){this.a=a
this.b=b},
n1:function n1(a){this.a=a},
lh:function lh(a){this.a=a},
lg:function lg(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(a,b){this.a=a
this.b=b},
kK:function kK(a,b){this.a=a
this.b=b},
lj:function lj(a){this.a=a},
ag:function ag(){},
fX:function fX(){},
im:function im(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
m0:function m0(a,b){this.a=a
this.b=b},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
fT:function fT(a){this.a=a},
h3:function h3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
fM:function fM(a){this.a=a},
fn:function fn(a){this.a=a},
fD:function fD(a){this.a=a},
ha:function ha(a){this.a=a},
n5:function n5(a,b){this.a=a
this.b=b},
fx:function fx(a){this.a=a},
fw:function fw(a){this.a=a},
hn:function hn(a){this.a=a},
hu:function hu(a){this.a=a},
h0:function h0(a){this.a=a},
fu:function fu(a){this.a=a},
eN:function eN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
b5:function b5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nv:function nv(a,b,c){this.a=a
this.b=b
this.c=c},
nA:function nA(){},
nq:function nq(){},
nr:function nr(){},
nt:function nt(){},
nB:function nB(a){this.a=a},
nu:function nu(a){this.a=a},
ny:function ny(){},
nw:function nw(a){this.a=a},
ns:function ns(a){this.a=a},
nz:function nz(a){this.a=a},
nx:function nx(a){this.a=a},
kV:function kV(){},
eS:function eS(a){this.a=a},
ai(a){var s,r=new A.a3("")
A.cf(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Du(a){var s,r,q
for(s=new A.n2(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
KR(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.bQ(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
cf(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(b==null){a.a+="null"
return 4}if(A.by(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.av(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.KR(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a6(b,g)
a.a+=r
return A.Du(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.L(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cf(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.j([],t.l5)
n=A.aL(t.N)
for(s=J.E(b.gK());s.k();){m=s.gn()
r=J.Z(m)
if(!n.t(0,r))throw A.b(A.P('Cannot canonicalize map: keys collide after toString() ("'+r+'").',g))
o.push(new A.a5(r,m))}B.b.co(o,new A.C0())
a.a+="{"
for(s=o.length,q=1,l=!0,k=0;k<o.length;o.length===s||(0,A.r)(o),++k,l=!1){j=o[k]
if(!l){a.a+=",";++q}i=B.h.a6(j.a,g)
a.a+=i
h=A.Du(i)
a.a+=":"
q=q+h+1+A.cf(a,b.h(0,j.b))}a.a+="}"
return q+1}throw A.b(A.P("Cannot canonicalize value of type "+J.bZ(b).l(0),g))},
C0:function C0(){},
Jo(a){var s,r,q,p=A.af("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).e9(a)
if(p==null)return B.dm
s=p.b
r=s[1]
r.toString
r=A.aI(r)
q=s[2]
q.toString
q=A.aI(q)
s=s[3]
s=A.ji(s==null?"":s,null)
return new A.f4(r,q,s==null?0:s)},
EH(a,b,c){var s,r=A.Jo(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eM(a,b){return A.Jp(a,b)},
Jp(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eM=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b0("SELECT sqlite_version() AS v"),$async$eM)
case 3:g=d.W(c.bY(a2),"v")
g.toString
A.F(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b0("PRAGMA compile_options"),$async$eM)
case 4:j=d.Q(new c.dY(b.c_(a2,new A.x6(),t.X),k),k.i("o.E"))
n=B.b.c9(j,new A.x7())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eM)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$eM)
case 12:n=!0
p=2
s=10
break
case 8:p=7
f=o.pop()
n=!1
s=10
break
case 7:s=2
break
case 10:case 6:m=null
k=a0===B.bd
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.b0("PRAGMA journal_mode"),$async$eM)
case 19:l=a2
if(J.ee(l))m=A.a6(J.bY(J.bY(l).gaY()))
p=2
s=18
break
case 16:p=15
e=o.pop()
m=null
s=18
break
case 15:s=2
break
case 18:case 14:h=A.EH(g,3,37)
k=k&&J.x(m,"wal")
q=new A.nh(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eM,r)},
mK:function mK(a,b){this.a=a
this.b=b},
nh:function nh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x6:function x6(){},
x7:function x7(){},
ip:function ip(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
aU:function aU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a2:function a2(a,b){this.a=a
this.b=b},
q1:function q1(a,b){this.a=a
this.b=b},
q2:function q2(){},
q3:function q3(){},
DL(a){return new Uint8Array(A.b9(a))},
rF:function rF(){},
pB:function pB(a,b,c){this.b=a
this.c=b
this.d=c},
Dm(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cq
if(r===B.I){r=a.f
r.toString
r=!B.b.D(r,b)}else r=!1
if(r)return B.cv
return s
case 1:case 4:return!A.av(b)?B.cr:s
case 2:if(typeof b!="number")return B.b4
if(!isFinite(b))return B.b4
return s
case 3:return!A.by(b)?B.cs:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.ct:s
case 7:return!t.j.b(b)?B.cu:s}},
dr(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gda(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.D9(n,a0.h(0,l),new Uint8Array(A.b9(B.e.v(q+l+"\x00"+e))),m))}k=A.u(h,g)
for(h=new A.aK(a0,A.n(a0).i("aK<1,2>")).gu(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.D(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ai(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
Gr(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.D9(b,c,new Uint8Array(A.b9(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
LY(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gda()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.D9(n,g.h(0,l),new Uint8Array(A.b9(B.e.v(q+l+"\x00"+f))),m))}k=A.u(t.N,t.X)
for(s=g.ga7(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.D(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ai(k))
a.push(c?1:0)
a.push(0)},
cd(a,b,c,d){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.u(j,i),g=b.h(0,"extra")
if(typeof g=="string"&&g.length!==0){s=B.h.aE(g,null)
if(t.f.b(s))for(j=A.bm(s,j,i),j=new A.aK(j,A.n(j).i("aK<1,2>")).gu(0);j.k();){r=j.d
i=r.a
if(B.aD.D(0,i))continue
h.j(0,i,r.b)}}h.j(0,"id",b.h(0,"id"))
for(j=a.c,i=j.length,q=a.a,p=0;p<j.length;j.length===i||(0,A.r)(j),++p){o=j[p]
n=o.a
m=b.h(0,n)
l=A.a6(b.h(0,"id"))
h.j(0,n,A.FI(o,m,c,d,l==null?"":l,q))}h.j(0,k,J.x(b.h(0,k),1))
return h},
Mz(a,b,c,d){var s,r=A.j([],t.d)
for(s=J.E(b);s.k();)r.push(A.cd(a,s.gn(),c,d))
return r},
MA(a,b,c,d,e){var s,r,q,p,o,n,m=A.j([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.r)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a5(p,a.fa(p)))}s=A.j([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.KV(o.gn(),m,r,c,e,n))
return s},
KV(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.FI(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
FI(a,b,c,d,e,f){var s,r,q,p,o,n,m,l=null,k=' row: encrypted field "'
if(b==null)return l
if(a.e){if(c==null)p=l
else p=c
s=p
if(s==null)throw A.b(A.A('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.dd("Corrupt "+f+k+a.a+'" must be TEXT ciphertext but is '+J.bZ(b).l(0)+"."))
r=null
try{r=B.o.f0(s.ug(B.ar.v(b),new Uint8Array(A.b9(B.e.v(f+"\x00"+a.a+"\x00"+e)))))}catch(o){q=A.C(o)
n=A.dd("Corrupt "+f+k+a.a+'" failed to decrypt ('+A.p(q)+").")
throw A.b(n)}m=a.b
A:{if(B.B===m){n=J.x(r,"1")||J.x(r,"true")
break A}if(B.T===m||B.V===m){n=A.aI(r)
break A}if(B.U===m){n=A.MD(r)
break A}if(B.W===m||B.X===m){n=B.h.aE(r,l)
break A}n=r
break A}return n}n=a.b
if(n===B.B)return J.x(b,1)
if(n===B.W||n===B.X){if(typeof b!="string")throw A.b(A.dd("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bZ(b).l(0)+"."))
return B.h.aE(b,l)}return b},
D9(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.A('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.Z(b)
break
case 6:case 7:s=A.ai(b)
break
default:A.F(b)
s=b}r=d.uX(B.e.v(s),c)
return B.aq.gf6().v(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.ai(b)
default:return b}},
bh(a,b){var s,r,q,p,o,n="archived",m=a.gda(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.r)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.ga7(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.D(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
Bi(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gda(),i=A.j([],t.iE)
i.push(new A.a5("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a5(o,p.b===B.B?J.x(n,!0):n))}for(s=c.ga7(),s=s.gu(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.D(0,o))continue
i.push(new A.a5(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.dk)
B.b.co(i,new A.Bj())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.r)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a6(r.a,null)
a.a+=k
o=A.Du(k)
a.a+=":"
m=m+o+1+A.cf(a,r.b)}a.a+="}"
return m+1},
d2:function d2(a,b){this.a=a
this.b=b},
Bj:function Bj(){},
IA(a){var s=A.dS(null,null,t.fq),r=t.N
s=new A.tG(a,s,A.u(r,t.g8),A.u(r,t.dz),new A.rP(A.MI(),A.u(r,t.f6)),A.u(r,t.oX))
s.oO(a)
return s},
BO(a){var s,r,q,p
A:{if(a instanceof A.iS){s=A.LA(a.a)
break A}if(a instanceof A.jc){s=new A.c3(A.BO(a.a))
break A}if(a instanceof A.id){r=a.a
s=A.j([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(A.BO(r[p]))
s=new A.dv(s)
break A}if(a instanceof A.ie){r=a.a
s=A.j([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(A.BO(r[p]))
s=new A.cZ(s)
break A}throw A.b(A.eJ(u.P))}return s},
LA(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
switch(l.a){case 0:s=a.c
if(s==null)return new A.aj(m,n,B.n)
return new A.aj(m,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.P("neq(null) matches no rows; use isNotNull.",o))
return new A.c3(new A.aj(m,"eq",[s]))
case 2:case 3:case 4:case 5:r=a.c
if(r==null)throw A.b(A.ah('"'+l.b+'" does not accept null \u2014 use isNull().',o))
return new A.aj(m,l.b,[r])
case 6:q=a.d
if(q==null)q=B.n
if(B.b.D(q,o))throw A.b(A.ah("inValues does not accept null \u2014 use isNull().",o))
return new A.aj(m,"inValues",q)
case 7:p=a.d
if(p==null)p=B.n
if(p.length!==2)throw A.b(A.P("between requires exactly two values.",o))
return new A.aj(m,"between",p)
case 8:return new A.aj(m,"startsWith",[a.c])
case 9:return new A.aj(m,"endsWith",[a.c])
case 10:return new A.aj(m,"contains",[a.c])
case 11:return new A.aj(m,n,B.n)
case 12:return new A.c3(new A.aj(m,n,B.n))}},
f6:function f6(){},
A1:function A1(a){this.a=a},
p0:function p0(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=null
_.w=$
_.x=e},
hO:function hO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
tG:function tG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=null
_.f=d
_.r=e
_.w=null
_.x=f
_.as=_.Q=_.z=_.y=null
_.at=0},
u6:function u6(a){this.a=a},
u7:function u7(){},
u8:function u8(a,b){this.a=a
this.b=b},
u9:function u9(){},
uk:function uk(a,b){this.a=a
this.b=b},
uv:function uv(){},
uw:function uw(a,b){this.a=a
this.b=b},
ux:function ux(a,b){this.a=a
this.b=b},
uy:function uy(a,b){this.a=a
this.b=b},
uz:function uz(a,b){this.a=a
this.b=b},
uA:function uA(a,b){this.a=a
this.b=b},
uB:function uB(a,b){this.a=a
this.b=b},
ua:function ua(){},
ub:function ub(){},
uc:function uc(){},
ud:function ud(){},
ue:function ue(){},
uf:function uf(){},
ug:function ug(a){this.a=a},
uh:function uh(a){this.a=a},
ui:function ui(){},
uj:function uj(){},
ul:function ul(){},
um:function um(a){this.a=a},
un:function un(){},
uo:function uo(){},
up:function up(){},
uq:function uq(){},
ur:function ur(){},
us:function us(a){this.a=a},
ut:function ut(a){this.a=a},
uu:function uu(a,b){this.a=a
this.b=b},
tS:function tS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tT:function tT(){},
tU:function tU(a,b,c){this.a=a
this.b=b
this.c=c},
tV:function tV(){},
tY:function tY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tZ:function tZ(){},
tJ:function tJ(a){this.a=a},
tH:function tH(a,b,c){this.a=a
this.b=b
this.c=c},
tI:function tI(a){this.a=a},
tX:function tX(a){this.a=a},
tW:function tW(a){this.a=a},
u2:function u2(a,b){this.a=a
this.b=b},
u3:function u3(a,b,c){this.a=a
this.b=b
this.c=c},
u4:function u4(a,b){this.a=a
this.b=b},
u5:function u5(a,b,c){this.a=a
this.b=b
this.c=c},
tN:function tN(a){this.a=a},
tO:function tO(a){this.a=a},
tP:function tP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tR:function tR(a,b){this.a=a
this.b=b},
tQ:function tQ(a,b){this.a=a
this.b=b},
u_:function u_(a){this.a=a},
u0:function u0(a){this.a=a},
u1:function u1(a,b){this.a=a
this.b=b},
tM:function tM(a,b){this.a=a
this.b=b},
tK:function tK(){},
tL:function tL(){},
E1(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
le:function le(a,b){this.a=a
this.b=b},
iw:function iw(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.d=!1
_.f=_.e=null},
rC:function rC(){},
rB:function rB(){},
rD:function rD(){},
rA:function rA(a){this.a=a},
I8(a){return'"'+A.B(a,'"','""')+'"'},
I7(a,b){var s,r,q,p=a.a,o=J.L(p),n=b.a,m=J.L(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qq:function qq(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iv:function iv(a){this.a=a},
rz:function rz(a){this.a=a},
ry:function ry(){},
rx:function rx(a){this.a=a},
rw:function rw(a,b){this.a=a
this.b=b},
rt:function rt(a){this.a=a},
ru:function ru(a){this.a=a},
rv:function rv(){},
ah(a,b){return new A.eR(b,a)},
dd(a){return new A.cN(a)},
CE(a){return new A.h5(a)},
EE(a){return new A.h9(a)},
aB(a){return new A.eK(a)},
rX(a){return new A.fL(a)},
CJ(a){return new A.hg(a)},
Eo(a){return new A.fS(a)},
DY(a){return new A.fv(a)},
Cc(a){return new A.eo(a)},
GP(a,b){var s,r="UNIQUE constraint failed",q=J.Z(a),p=a instanceof A.c6,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.D(q,"PRIMARY KEY")&&!B.a.D(q,r)
else p=!0
if(p)return new A.h_("PRIMARY KEY constraint violated.")
if(o===2067||B.a.D(q,r)){s=A.FM(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.eQ(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.D(q,"NOT NULL constraint failed")){p=A.FM(q,"NOT NULL constraint failed:")
return new A.eD(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.D(q,"CHECK constraint failed")||o===275||n===275)return new A.fr("CHECK constraint violated.")
if(B.a.D(q,"FOREIGN KEY")||o===787||n===787)return new A.fJ("FOREIGN KEY constraint violated.")
if(B.a.D(q,"database or disk is full"))return new A.cN("Database full: "+A.p(a))
return new A.cN("SQLite error: "+A.p(a))},
FM(a,b){var s,r,q,p,o,n,m=B.a.bR(a,b)
if(m<0)return"?"
s=B.a.ae(a,m+b.length)
r=s.length
q=B.a.bR(s,",")
if(q>=0)r=q
p=B.a.bR(s,"(")
s=B.a.cm(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.di(s,".")
s=B.a.cm(o>=0?B.a.ae(s,o+1):s)
if(B.a.S(s,'"')&&B.a.bQ(s,'"')){n=B.a.A(s,1,s.length-1)
s=A.B(n,'""','"')}return s.length===0?"?":s},
dJ:function dJ(){},
eR:function eR(a,b){this.b=a
this.a=b},
eQ:function eQ(a,b,c){this.b=a
this.c=b
this.a=c},
eD:function eD(a,b){this.b=a
this.a=b},
fr:function fr(a){this.a=a},
h_:function h_(a){this.a=a},
fJ:function fJ(a){this.a=a},
cN:function cN(a){this.a=a},
h5:function h5(a){this.a=a},
h9:function h9(a){this.a=a},
eK:function eK(a){this.a=a},
hq:function hq(a){this.a=a},
fL:function fL(a){this.a=a},
hg:function hg(a){this.a=a},
fS:function fS(a){this.a=a},
fv:function fv(a){this.a=a},
eo:function eo(a){this.a=a},
h4:function h4(a){this.a=a},
iA:function iA(a){this.b=a},
E5(a){return A.pq("lp_file_refs",new A.rH(a))},
bk:function bk(a,b,c,d,e,f,g,h,i,j){var _=this
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
rH:function rH(a){this.a=a},
uP:function uP(a,b){this.a=a
this.b=b},
uQ:function uQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uS:function uS(a){this.a=a},
uT:function uT(a){this.a=a},
uU:function uU(a){this.a=a},
uV:function uV(a){this.a=a},
uW:function uW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uR:function uR(a,b){this.a=a
this.b=b},
LU(){return new A.aP(Date.now(),0,!1)},
cG:function cG(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=0
_.y=i
_.z=j},
rP:function rP(a,b){this.f=a
this.r=b},
rS:function rS(){},
rQ:function rQ(a){this.a=a},
rR:function rR(){},
lM:function lM(){this.b=0
this.c=$},
l4(a){var s=$.Dw()
if(!s.b.test(a))throw A.b(A.P('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
DQ(a){return new A.fp(a)},
ik(a,b){return new A.ij(a,b)},
kA(a,b,c,d,e,f){return A.N8(a,b,c,d,e,f)},
N8(a,b,c,a0,a1,a2){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d
var $async$kA=A.c(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:g=t.i5
f=A.j([],g)
e=new A.hy(A.cW(new A.oU(new A.BP(f),A.j([],g),t.mI)))
d=0
g=new A.cy(A.cz(a,"stream",t.K),t.lj)
p=3
k=t.D
case 6:s=8
return A.a(g.k(),$async$kA)
case 8:if(!a4){s=7
break}m=g.gn()
j=a2.$1(m)
if(!(j instanceof A.w)){i=new A.w($.D,k)
i.a=8
i.c=j
j=i}s=9
return A.a(j,$async$kA)
case 9:e.a.t(0,m)
d+=J.as(m)
l=a1
if(l!=null&&d>l){k=A.A("Blob exceeds the "+A.p(l)+" byte ceiling (streamed "+A.p(d)+" bytes).")
throw A.b(k)}s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(g.C(),$async$kA)
case 10:s=n.pop()
break
case 5:e.a.q()
if(c!=null&&!J.x(d,c))throw A.b(A.A("Size mismatch: expected "+A.p(c)+" but got "+A.p(d)))
h=A.ar(B.b.gap(f).a)
A.l4(h)
if(b!=null&&h!==b)throw A.b(A.A("SHA-256 mismatch: expected "+b+" but got "+h))
q=new A.nk(h)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kA,r)},
pQ:function pQ(){},
fp:function fp(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b},
nk:function nk(a){this.a=a},
BP:function BP(a){this.a=a},
iC:function iC(a){this.d=a},
rI:function rI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rK:function rK(a,b){this.a=a
this.b=b},
rL:function rL(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(a,b,c){this.a=a
this.b=b
this.c=c},
rM:function rM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rN:function rN(){},
Nb(a,b,c){a.u6(!0,new A.BV(c),"lp_norm_"+b)},
Dn(a,b,c,d){var s,r='"'+A.B(d,'"','""')+'"',q=b.a
if(q.gF(q))return c.length===0?r:c+"."+r
if(c.length===0)s=r
else s='"'+A.B(c,'"','""')+'".'+r
return'"'+A.B("lp_norm_"+a,'"','""')+'"('+s+")"},
BV:function BV(a){this.a=a},
uC:function uC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=e
_.y=f
_.at=g
_.ax=h},
KZ(){return Date.now()},
pd(a){var s,r,q
if(t.G.b(a)){s=A.u(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.pd(q.b))}return s}if(t.f.b(a)){s=A.u(t.z,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.pd(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.pd(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b9(a))
return a},
d1(a,b,c,d,e,f,g,h,i){var s=null,r=B.D,q=null,p=null,o=B.S
return A.IC(a,b,c,d,e,f,g,h,i)},
IC(b0,b1,b2,b3,b4,b5,b6,b7,b8){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d1=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:a2=null
a3=B.D
a4=null
a5=null
a6=B.S
a7=null
a7=b1
p=4
s=7
return A.a(A.cI(a7,b6),$async$d1)
case 7:s=8
return A.a(A.eM(a7,b6),$async$d1)
case 8:n=c0
i=0
case 9:if(!(i<3)){s=11
break}m=B.cE[i]
s=12
return A.a(a7.O(m),$async$d1)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cV[i]
s=16
return A.a(a7.O(l),$async$d1)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a4
if(f==null)f=A.N_()
e=a5
d=a3
c=a6
b=new A.mI()
a=new A.mf(b5,h,g,b,b4,b2,b8,e,b0,b3,a2,f,A.u(t.N,t.nv),d,c,new A.q1(A.dS(null,null,t.iv),A.dS(null,null,t.oZ)))
f=new A.yl(A.bb(null,t.H),b.gwA())
a.x=f
c=a.a=new A.uC(a,h,g,f,b,e,d,c)
a.b=new A.xC(c)
a.c=new A.vm()
a.d=new A.wO()
c=A.IA(c)
a.e!==$&&A.ce()
a.e=c
c=$.C2()
a.cx!==$&&A.ce()
a.cx=new A.vy(a,c)
a.cy!==$&&A.ce()
a.cy=new A.vt(a,c)
a.db!==$&&A.ce()
a.db=new A.qD(a)
a.dx!==$&&A.ce()
a.dx=new A.uP(a,b0)
k=a
s=17
return A.a(A.mg(a7,k.CW),$async$d1)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
s=21
return A.a(k.aQ(j),$async$d1)
case 21:case 19:b7.length===h||(0,A.r)(b7),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
a8=o.pop()
p=23
s=26
return A.a(a7.q(),$async$d1)
case 26:p=3
s=25
break
case 23:p=22
a9=o.pop()
s=25
break
case 22:s=3
break
case 25:throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d1,r)},
cI(a,b){return A.IB(a,b)},
IB(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cI=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.bd?2:3
break
case 2:q=5
s=8
return A.a(a.O("PRAGMA journal_mode=WAL"),$async$cI)
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
return A.a(a.O("PRAGMA wal_autocheckpoint=0"),$async$cI)
case 9:s=10
return A.a(a.O("PRAGMA mmap_size=67108864"),$async$cI)
case 10:case 3:s=11
return A.a(a.O("PRAGMA synchronous=NORMAL"),$async$cI)
case 11:s=12
return A.a(a.O("PRAGMA foreign_keys=ON"),$async$cI)
case 12:s=13
return A.a(a.O("PRAGMA busy_timeout=5000"),$async$cI)
case 13:s=14
return A.a(a.O("PRAGMA cache_size=-8000"),$async$cI)
case 14:s=15
return A.a(a.O("PRAGMA temp_store=MEMORY"),$async$cI)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cI,r)},
mg(a,b){var s=0,r=A.h(t.H),q,p
var $async$mg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.cl("lp_migrations","version = ?",[1]),$async$mg)
case 3:if(p.ee(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$mg)
case 4:case 1:return A.e(q,r)}})
return A.f($async$mg,r)},
nj:function nj(a,b,c){this.a=a
this.c=b
this.e=c},
w1:function w1(a){this.a=a},
mf:function mf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.e=_.d=_.c=_.b=_.a=$
_.f=a
_.r=b
_.w=c
_.x=$
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h
_.ax=i
_.ay=j
_.ch=k
_.CW=l
_.dx=_.db=_.cy=_.cx=$
_.dy=m
_.fr=!1
_.fy=n
_.go=o
_.a$=p},
uD:function uD(a,b){this.a=a
this.b=b},
uH:function uH(a){this.a=a},
uG:function uG(a,b){this.a=a
this.b=b},
uF:function uF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uE:function uE(){},
oB:function oB(){},
fQ(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a0(h).i("am<1>")
f=A.Q(new A.am(h,new A.vg(c,b),g),g.i("o.E"))
B.b.co(f,new A.vh())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.CW,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aB('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jv()
$.kE()
j.az()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aQ(a,b,m),$async$fQ)
case 8:s=6
break
case 7:s=9
return A.a(A.mp(a,b,m),$async$fQ)
case 9:case 6:if(j.b==null)j.b=$.mN.$0()
s=10
return A.a(A.fR(i,j.gmO(),o,q+l,p,l),$async$fQ)
case 10:case 3:f.length===h||(0,A.r)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aB('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fQ)
case 11:return A.e(null,r)}})
return A.f($async$fQ,r)},
fR(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fR=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b0("SELECT MAX(version) AS m FROM lp_migrations"),$async$fR)
case 2:q=p.ff(h)
if(q==null)q=0
s=3
return A.a(a.aC(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fR)
case 3:return A.e(null,r)}})
return A.f($async$fR,r)},
mp(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$mp=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b0("PRAGMA table_info("+('"'+A.B(k,'"','""')+'"')+")"),$async$mp)
case 2:i=h.d3(new g.dY(f.c_(e,new A.vc(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.Dx()
if(!m.b.test(n))A.t(A.aB('Field "'+n+u.Z))
if(o.c)throw A.b(A.aB('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.D(0,n)){s=4
break}m=A.B(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.B(n,'"','""')+'"')+" "+o.gkU()),$async$mp)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.r)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$mp,r)},
aQ(a,b,c){return A.IN(a,b,c)},
IN(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aQ=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.Cc('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.iv(b0.w).jX(b1)
j=A.IQ(b0.f,a2,a3)
p=4
s=7
return A.a(A.ve(a7,l),$async$aQ)
case 7:i=b4
s=8
return A.a(b0.hI(j),$async$aQ)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.Cc('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.p(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.mr(a7,m),$async$aQ)
case 9:g=b4
s=10
return A.a(A.mr(a7,n),$async$aQ)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.B(m,'"','""')+'"')),$async$aQ)
case 13:a0=a9.ff(b4)
e=a0==null?0:a0
a3=A.B(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.B(n,'"','""')+'"')),$async$aQ)
case 14:s=15
return A.a(A.cK(b0,a7,b1,k,l,e),$async$aQ)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.B(m,'"','""')+'"')),$async$aQ)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.hR(j),$async$aQ)
case 19:case 18:s=20
return A.a(A.mq(a7,l,"rebuilding"),$async$aQ)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.B(j,"'","''")+"'"),$async$aQ)
case 21:a3=k.b
a4=A.B(n,'"','""')
d=B.a.kA(a3,'"'+a4+'"','"'+A.B(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aQ)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ai("SELECT rowid, * FROM "+('"'+A.B(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aQ)
case 25:b=b4
if(J.bA(b)){s=24
break}s=26
return A.a(a7.a2(new A.vf(b,b1,b0,b2,m),a3),$async$aQ)
case 26:a4=J.W(J.pz(b),"rowid")
a4.toString
c=A.aq(a4)
if(J.as(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.B(n,'"','""')+'"')),$async$aQ)
case 27:a5=a9.ff(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.B(m,'"','""')+'"')),$async$aQ)
case 28:e=a9.ff(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.A('Rebuild of "'+a2+'" count mismatch: '+A.p(a)+" vs "+A.p(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.B(n,'"','""')+'"')),$async$aQ)
case 29:a3=A.B(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.B(n,'"','""')+'"')),$async$aQ)
case 30:s=31
return A.a(A.cK(b0,a7,b1,k,l,a),$async$aQ)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.C(a8)
if(a3 instanceof A.eo)throw a8
else if(a3 instanceof A.c6){a1=a3
throw A.b(A.Cc('Destructive migration for "'+a2+'" failed: '+A.p(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aQ,r)},
cK(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h
var $async$cK=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.O(q[o]),$async$cK)
case 5:case 3:q.length===p||(0,A.r)(q),++o
s=2
break
case 4:q=c.w
p=q!=null
s=p?6:7
break
case 6:s=8
return A.a(b.O("DROP TABLE IF EXISTS "+('"'+A.B(c.a+"_fts",'"','""')+'"')),$async$cK)
case 8:case 7:n=d.d,m=n.length,o=0
case 9:if(!(o<n.length)){s=11
break}s=12
return A.a(b.O(n[o]),$async$cK)
case 12:case 10:n.length===m||(0,A.r)(n),++o
s=9
break
case 11:s=p?13:14
break
case 13:p=c.a
n=p+"_fts"
m=A.B(n,'"','""')
s=15
return A.a(b.O("INSERT INTO "+('"'+m+'"')+"("+('"'+A.B(n,'"','""')+'"')+") VALUES('delete-all')"),$async$cK)
case 15:m=q.a
l=m.$ti.i("X<I.E,l>")
k=new A.X(m,A.po(),l).B(0,", ")
j=new A.X(m,new A.vd(c,q),l).B(0,", ")
q=A.B(n,'"','""')
s=16
return A.a(b.O("INSERT INTO "+('"'+q+'"')+"(rowid, "+k+") SELECT rowid, "+j+" FROM "+('"'+A.B(p,'"','""')+'"')),$async$cK)
case 16:case 14:q=c.a
h=A
s=17
return A.a(b.b0("SELECT COUNT(*) c FROM "+('"'+A.B(q,'"','""')+'"')),$async$cK)
case 17:i=h.ff(a0)
if((i==null?0:i)!==f)throw A.b(A.A('Post-rebuild verification of "'+q+'" failed.'))
s=18
return A.a(A.mq(b,e,"done"),$async$cK)
case 18:return A.e(null,r)}})
return A.f($async$cK,r)},
mr(a,b){var s=0,r=A.h(t.y),q,p
var $async$mr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ai("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$mr)
case 3:q=p.ee(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mr,r)},
IQ(a,b,c){var s=null,r=$.ic(),q=r.un(a),p=A.dP(a,r.a).gjT()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.n3(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
IP(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.ah('Field "'+s+'" is required.',s))}if(b==null)return
r=A.Dm(a,b)
if(r!=null)throw A.b(A.ah(A.IM(a,b,r),a.a))},
IO(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
A.IP(p,b.h(0,p.a))}},
IM(a,b,c){var s,r=a.a,q=J.bZ(b)
switch(c.a){case 0:s='Field "'+r+'" must be a string, got '+q.l(0)+"."
break
case 1:s='Field "'+r+'" must be an integer, got '+q.l(0)+"."
break
case 2:s='Field "'+r+'" must be a number, got '+q.l(0)+"."
break
case 3:s='Field "'+r+'" must be a boolean, got '+q.l(0)+"."
break
case 4:s='Field "'+r+'" must be JSON, got '+q.l(0)+"."
break
case 5:s='Field "'+r+'" must be a JSON array, got '+q.l(0)+"."
break
case 6:s='Field "'+r+'" has unknown enum value "'+A.p(b)+'".'
break
default:s=null}return s},
ve(a,b){var s=0,r=A.h(t.x),q,p,o
var $async$ve=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.ng("lp_meta",A.j(["v"],t.s),"k = ?",[b]),$async$ve)
case 3:p=d
o=J.L(p)
q=o.gF(p)?null:A.a6(J.W(o.gH(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ve,r)},
mq(a,b,c){var s=0,r=A.h(t.H)
var $async$mq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ce(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.R),$async$mq)
case 2:return A.e(null,r)}})
return A.f($async$mq,r)},
L_(){return Date.now()},
vg:function vg(a,b){this.a=a
this.b=b},
vh:function vh(){},
vc:function vc(){},
vf:function vf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vd:function vd(a,b){this.a=a
this.b=b},
vm:function vm(){},
mI:function mI(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
uI:function uI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Av:function Av(){},
wE:function wE(a,b){this.a=a
this.b=b},
kx(a){var s=A.B(a,"\\","\\\\")
s=A.B(s,"%","\\%")
return A.B(s,"_","\\_")},
D8(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.aj){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.t(A.az(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.az(q,l,'The "'+s+'" predicate carries exactly '+A.p(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.az(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.az(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c3){A.D8(a.a)
break A}p=a instanceof A.dv
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.az(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.r)(n),++m)A.D8(n[m])}break A}},
B1(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.aj)return A.FG(a,!1,b)
if(a instanceof A.c3){s=a.a
r=A.B1(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.cZ||s instanceof A.c3){s=new A.a5("NOT "+q,p)
break A}s=new A.a5("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dv){o=A.j([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.r)(s),++m){l=A.B1(s[m],!1)
o.push(l.a)
B.b.E(p,l.b)}k=B.b.B(o," AND ")
return new A.a5(b?k:"("+k+")",p)}if(a instanceof A.cZ){o=A.j([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.r)(s),++m){j=A.KT(s[m])
o.push(j.a)
B.b.E(p,j.b)}return new A.a5("("+B.b.B(o," OR ")+")",p)}throw A.b(A.eJ(u.M))},
KT(a){var s
A:{if(a instanceof A.aj){s=A.FG(a,!0,!1)
break A}s=A.B1(a,!1)
break A}return s},
FG(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.B(a.a,'"','""')+'"',n=A.Q(a.c,t.X),m=a.b
switch(m){case"eq":s=o+" = ?"
break
case"gt":s=o+" > ?"
break
case"gte":s=o+" >= ?"
break
case"lt":s=o+" < ?"
break
case"lte":s=o+" <= ?"
break
case"inValues":s=o+" IN ("+B.b.B(A.ab(n.length,"?",!1,t.N),", ")+")"
break
case"between":s=o+" >= ? AND "+o+" <= ?"
break
case"isNull":s=o+" IS NULL"
break
case"startsWith":s=o+p
r=n[0]
r.toString
n[0]=A.kx(A.F(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kx(A.F(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kx(A.F(r))+"%"
break
default:throw A.b(A.az(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a5(q?"("+s+")":s,n)},
d6:function d6(){},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a){this.a=a},
dv:function dv(a){this.a=a},
cZ:function cZ(a){this.a=a},
J8(a,b){var s,r=$.h2.G(0,a)
if(r!=null){$.h2.j(0,a,r)
return r}s=b.$0()
if($.h2.a>=512)$.h2.G(0,new A.T($.h2,A.n($.h2).i("T<1>")).gH(0))
$.h2.j(0,a,s)
return s},
b0:function b0(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
mR:function mR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.ax=o},
wB:function wB(a,b,c){this.a=a
this.b=b
this.c=c},
ww:function ww(){},
wx:function wx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wy:function wy(a){this.a=a},
wz:function wz(){},
wA:function wA(){},
Jj(a){var s,r,q=B.a.cm(a)
if(q.length===0)return
s=!0
if(!B.a.D(q,'"')){r=A.af("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.af("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.ah("Invalid search term: "+a,null))},
Ji(a){var s,r,q,p
for(s=B.a.cV(a,A.af("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
if(p.length!==0&&new A.jn(p).gm(0)<3)throw A.b(A.ah('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cM:function cM(a,b){this.a=a
this.b=b},
wV:function wV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wO:function wO(){},
kt(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.dJ)throw q
else{s=r
r=A.dd("Malformed schema JSON: "+A.p(s))
throw A.b(r)}}},
E4(a){return A.kt(new A.rG(a))},
It(a){return A.kt(new A.tt(a))},
Ik(a){return A.kt(new A.rW(a))},
E9(a,b){var s
if(new A.jn(a).gm(0)!==1)throw A.b(A.aB('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aB('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
Ij(a){return A.kt(new A.rV(a))},
Ii(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.ga7(),s=s.gu(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Js(a){return A.kt(new A.xa(a))},
q7(a,b){return A.kt(new A.q8(a,b))},
LZ(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.am.h(0,s)
return b},
c2:function c2(a,b){this.a=a
this.b=b},
aY:function aY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rG:function rG(a){this.a=a},
iJ:function iJ(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
tt:function tt(a){this.a=a},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
rW:function rW(a){this.a=a},
et:function et(a){this.a=a},
rV:function rV(a){this.a=a},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
xa:function xa(a){this.a=a},
vi:function vi(a,b){this.a=a
this.b=b},
qB:function qB(){},
cD:function cD(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.Q=i
_.$ti=j},
q8:function q8(a,b){this.a=a
this.b=b},
CG(a){var s=A.KU(a),r=A.j([],t.s)
if(B.a_.gY(B.a_))r.push("fieldResolvers")
if(B.b.c9(a.x,new A.wR()))r.push("migrationTransform")
if(B.am.gY(B.am))r.push("documentMigrations")
return new A.n4(s,A.fO(r,t.N),1,a.a,a.b,2)},
Jh(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aB("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aU(0,new A.wS(),s,r)
p=q.h(0,"formatVersion")
if(!A.av(p))throw A.b(A.aB("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.EE("Schema manifest format v"+A.p(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.av(n)||!j.b(m)||!t.j.b(l)||!A.av(k))throw A.b(A.aB('Malformed schema manifest for store "'+A.p(o==null?"???":o)+'"'))
return new A.n4(m.aU(0,new A.wT(),s,t.X),A.fO(J.c_(l,new A.wU(),r),s),p,o,n,k)},
KU(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cJ(a.p(),n,m),k=B.a_.gK()
k=A.Q(k,A.n(k).i("o.E"))
B.b.aG(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.j([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].p()
o=A.dI(null,null,n,m)
o.E(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.am.gK()
n=A.Q(n,A.n(n).i("o.E"))
B.b.aG(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
n4:function n4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wR:function wR(){},
wS:function wS(){},
wT:function wT(){},
wU:function wU(){},
HW(a,b){var s,r=a.a
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
s='Field "'+r+'" must be one of '+B.b.B(s,", ")+"."
break
default:s=null}return s},
dN:function dN(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qm:function qm(a,b){this.a=a
this.b=b},
qp:function qp(a,b){this.a=a
this.b=b},
ql:function ql(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.a=a
this.b=b},
qi:function qi(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function qh(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
qn:function qn(a,b){this.a=a
this.b=b},
qj:function qj(a,b){this.a=a
this.b=b},
qg:function qg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qf:function qf(){},
qk:function qk(){},
qd:function qd(){},
qc:function qc(){},
qb:function qb(){},
q9:function q9(){},
qa:function qa(){},
hx:function hx(){},
oh:function oh(){},
pC:function pC(a){this.a=a},
pD:function pD(a,b){this.a=a
this.b=b},
pE:function pE(a){this.a=a},
pF:function pF(){},
Ca(a){return A.pq("lp_conflicts",new A.qC(a))},
bj:function bj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qC:function qC(a){this.a=a},
qD:function qD(a){this.a=a},
qI:function qI(a,b,c){this.a=a
this.b=b
this.c=c},
qH:function qH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qF:function qF(a,b){this.a=a
this.b=b},
qG:function qG(a,b){this.a=a
this.b=b},
qE:function qE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
no:function no(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
xy:function xy(a){this.a=a},
xo:function xo(a){this.a=a},
xw:function xw(a,b){this.a=a
this.b=b},
xv:function xv(a){this.a=a},
xu:function xu(a,b){this.a=a
this.b=b},
xx:function xx(a){this.a=a},
xr:function xr(a,b){this.a=a
this.b=b},
xs:function xs(){},
xt:function xt(){},
xp:function xp(){},
xq:function xq(a){this.a=a},
ez(a){return new A.d4(a)},
Dt(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fh(a,b)
r=A.bh(a,s)
q=A.ai(r)
p=A.ar(B.l.v(B.e.v(q)).a)
return new A.eC(b,s,q,p,k)}catch(m){l=A.C(m)
if(l instanceof A.d4){o=l
return new A.eC(b,k,k,k,o.a)}else{n=l
l=A.p(n)
return new A.eC(b,k,k,k,l)}}},
N4(a,b){var s,r=A.j([],t.i7)
for(s=J.E(b);s.k();)r.push(A.Dt(a,s.gn()))
return r},
Ds(a,b){var s=0,r=A.h(t.eT),q
var $async$Ds=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.N4(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Ds,r)},
fh(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bm(b.d,j,i),g=a.gda(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.ez('data.id "'+A.p(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.by(r))throw A.b(A.ez('Field "archived" must be a boolean, got '+J.bZ(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.r)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.ez('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Dm(o,n)
if(m!=null)throw A.b(A.ez(A.LF(o,n,m)))
q.j(0,s,n)}for(j=new A.aK(h,A.n(h).i("aK<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.D(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
LF(a,b,c){var s,r=a.a,q=J.bZ(b)
switch(c.a){case 0:s='Field "'+r+'" must be a string, got '+q.l(0)+"."
break
case 1:s='Field "'+r+'" must be an integer, got '+q.l(0)+"."
break
case 2:s='Field "'+r+'" must be a number, got '+q.l(0)+"."
break
case 3:s='Field "'+r+'" must be a boolean, got '+q.l(0)+"."
break
case 4:s='Field "'+r+'" must be JSON, got '+q.l(0)+"."
break
case 5:s='Field "'+r+'" must be a JSON array, got '+q.l(0)+"."
break
case 6:s='Field "'+r+'" has unknown enum value "'+A.p(b)+'".'
break
default:s=null}return s},
i8(a){var s,r,q,p
if(a==null||a.length===0)return B.j
s=null
try{s=B.h.aE(a,null)}catch(q){r=A.C(q)
p=A.ez("Corrupt payload JSON: "+A.p(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.ez("Corrupt payload JSON: expected an object, got "+J.bZ(s).l(0)+"."))
return A.bm(s,t.N,t.X)},
d4:function d4(a){this.a=a},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bI(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aL(i),g=A.d3(a.gK(),i)
g.E(0,b.gK())
for(g=A.hJ(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.r.Z(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.kI(o.gK(),new A.Bm())&&J.kI(n.gK(),new A.Bn())){m=A.bI(A.bm(o,i,q),A.bm(n,i,q))
for(l=A.n(m),k=new A.e3(m,m.r,l.i("e3<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
IK(a,b,c,d,e,f,g){return new A.v4()},
Lz(a,b){var s,r,q=a.b
if(q.gF(q))return null
for(s=b;;){q.h(0,s)
r=B.a.di(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
Cv(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$Cv=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.IL(B.c1,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cv,r)},
IL(a,b,c,d,e,f,g){var s,r,q,p=A.bI(b,c),o=A.bI(b,f)
A.IK(b,p,o,c,e,f,g)
s=t.N
r=A.d3(c.gK(),s)
r.E(0,new A.T(f,A.n(f).i("T<1>")))
r.E(0,b.gK())
q=A.Q(r,A.n(r).c)
return A.va(a,b,p,o,0,q,c,A.u(s,t.X),d,e,f,new A.Aa(),g)},
va(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.dL(h,a0.a,null)
s=f[e]
r=g.h(0,s)
q=k.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.x(p,!0)
n=J.x(r,!0)
m=J.x(q,!0)
if(n===m)h.j(0,s,n)
else if(n===o)h.j(0,s,m)
else if(m===o)h.j(0,s,n)
else{i.b.h(0,s)
h.j(0,s,m)}return A.va(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.En(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.w)return l.W(new A.vb(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.va(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
En(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.r.Z(a1,a4))return a1
if(B.r.Z(a1,a0))return a4
if(B.r.Z(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kI(a1.gK(),new A.v5()))if(J.kI(a4.gK(),new A.v6()))if(a0!=null)r=s.b(a0)&&J.kI(a0.gK(),new A.v7())
else r=!0
if(r){r=t.N
q=t.X
p=A.bm(a1,r,q)
o=A.bm(a4,r,q)
n=a0==null?null:A.bm(s.a(a0),r,q)
s=A.aL(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.E(0,l)
s.E(0,new A.T(p,A.n(p).i("T<1>")))
s.E(0,new A.T(o,A.n(o).i("T<1>")))
k=A.u(r,q)
j=[]
for(r=s.$ti.c,l=A.hJ(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.En(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.hJ(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.Ci(new A.X(j,new A.v8(),A.a0(j).i("X<1,y<k?>>")),q).W(new A.v9(s,k),q)}A.Lz(a3,a2)
return a4},
Gz(a,b,c,d,e,f){return A.Cv(a,b,c,d,e,f)},
Bm:function Bm(){},
Bn:function Bn(){},
v4:function v4(){},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
mn:function mn(a,b,c){this.a=a
this.b=b
this.c=c},
Aa:function Aa(){this.a=!1},
A8:function A8(){},
yq:function yq(){},
vb:function vb(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
v5:function v5(){},
v6:function v6(){},
v7:function v7(){},
v8:function v8(){},
v9:function v9(a,b){this.a=a
this.b=b},
vt:function vt(a,b){this.a=a
this.b=b},
vv:function vv(a){this.a=a},
vw:function vw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pP:function pP(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
jm:function jm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vy:function vy(a,b){this.a=a
this.b=b},
vE:function vE(a,b){this.a=a
this.b=b},
vC:function vC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vB:function vB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vA:function vA(a,b,c){this.a=a
this.b=b
this.c=c},
vD:function vD(a){this.a=a},
ef:function ef(a,b){this.a=a
this.b=b},
mQ:function mQ(a,b){this.b=a
this.f=b},
wf:function wf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wn:function wn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wm:function wm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wh:function wh(a,b,c){this.a=a
this.b=b
this.c=c},
wg:function wg(a,b,c){this.a=a
this.b=b
this.c=c},
wj:function wj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wi:function wi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wl:function wl(a,b,c){this.a=a
this.b=b
this.c=c},
wk:function wk(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wo:function wo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wq:function wq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wv:function wv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wt:function wt(a,b,c){this.a=a
this.b=b
this.c=c},
ws:function ws(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wr:function wr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wp:function wp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wu:function wu(a,b,c,d,e,f,g,h,i,j){var _=this
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
c8:function c8(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
xl:function xl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xm:function xm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
EL(a){return new A.eP(a)},
kU(a){return new A.bM(a)},
Ih(a){return new A.cj(a)},
IV(a){return new A.cl(a)},
IX(a){return new A.dQ(a)},
aR(a){return new A.eG(a)},
MK(a){var s=a.x0(),r=new A.By()
return A.p(r.$2(A.CB(s),4))+"-"+A.p(r.$1(A.Cz(s)))+"-"+A.p(r.$1(A.w6(s)))+" "+A.p(r.$1(A.Cx(s)))+":"+A.p(r.$1(A.Cy(s)))+":"+A.p(r.$1(A.CA(s)))+"."+A.p(r.$2(A.Ew(s),3))+"Z"},
EK(a){var s=Date.now()
return new A.nE(a,new A.aP(s,0,!1))},
bp:function bp(){},
eP:function eP(a){this.a=a},
da:function da(a,b){this.b=a
this.a=b},
hb:function hb(a){this.a=a},
bM:function bM(a){this.a=a},
cj:function cj(a){this.a=a},
cl:function cl(a){this.a=a},
dQ:function dQ(a){this.a=a},
eG:function eG(a){this.a=a},
ep:function ep(a){this.a=a},
np:function np(){},
dw:function dw(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h1:function h1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jl:function jl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kW:function kW(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
By:function By(){},
nE:function nE(a,b){this.a=a
this.c=b},
Jv(a){return 0.5+B.as.n8()},
CN(a){var s,r=a.toLowerCase()
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
Jw(a){var s,r,q,p,o,n,m,l,k=null,j=A.af("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).e9(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.CN(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aI(r)
p=s[1]
p.toString
p=A.aI(p)
o=s[4]
o.toString
o=A.aI(o)
n=s[5]
n.toString
n=A.aI(n)
s=s[6]
s.toString
return A.CO(r,q,p,o,n,A.aI(s))}j=A.af("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).e9(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.CN(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aI(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aI(r)
p=s[4]
p.toString
p=A.aI(p)
o=s[5]
o.toString
o=A.aI(o)
s=s[6]
s.toString
return A.CO(l,q,r,p,o,A.aI(s))}j=A.af("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).e9(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.CN(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aI(r)
p=s[2]
p.toString
p=A.aI(p)
o=s[3]
o.toString
o=A.aI(o)
n=s[4]
n.toString
n=A.aI(n)
s=s[5]
s.toString
return A.CO(r,q,p,o,n,A.aI(s))}return k},
CO(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.Cb(a,b,c,d,e,f,0)
return s}catch(r){return null}},
xn:function xn(a,b){this.at=a
this.ay=b},
jk:function jk(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
xA:function xA(a,b){this.a=a
this.b=b},
Gj(a,b,c,d,e,f,g,h,i,j){var s,r=A.GB(a,b,c,null,d,e,f,g,h,i,j),q=A.u(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.Z[s],r[s])
return q},
GB(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.Gg(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
Gg(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
a.push(j)
a.push(g.b)
a.push(i)
a.push(c)
a.push(b)
a.push(f)
a.push(h)
a.push(d)
a.push(l)
a.push(e)},
Mi(a,b,c,d,e,f,g){var s,r=null,q=A.GN(B.a6,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.u(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.Y[s],q[s])
return p},
GN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.Gh(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
Gh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
a.push(m)
a.push(n)
a.push(i)
a.push(f)
a.push(d)
a.push(e)
a.push(q.b)
a.push(g)
a.push(j)
a.push(b.b)
a.push(l)
a.push(c)
a.push(k)
a.push(h)
a.push(o)},
GJ(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
i9(a){return new A.X(a,new A.BU(),A.a0(a).i("X<1,l>")).B(0,", ")},
jA(a){return A.pq("lp_sync_row",new A.xz(a))},
mF(a){return A.pq("lp_outbox",new A.vz(a))},
IW(a){return A.pq("lp_op_queue",new A.vu(a))},
kB(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kB=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aL(n)
l=A.Q(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.B(A.ab(k,"?",!1,n),", ")
k=a.ai("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kB)
case 3:j.E(0,i.c_(h.a(d),new A.BS(),n))
k=A.Q(l,n)
k.push("pending")
k.push("failed")
k=a.ai("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kB)
case 4:j.E(0,i.c_(h.a(d),new A.BT(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kB,r)},
ib(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$ib=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.el("lp_blobs",A.j(["hash"],q),1,"hash = ?",A.j([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$ib)
case 5:s=p.bA(o.a(f))?2:4
break
case 2:q=a.aC(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$ib)
case 6:s=3
break
case 4:q=a.aF("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.j([c,b],t.hf))
s=7
return A.a(q,$async$ib)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ib,r)},
Br(a,b){var s=0,r=A.h(t.H),q,p
var $async$Br=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aF(u.y,A.j([b],t.s))
s=3
return A.a(p,$async$Br)
case 3:case 1:return A.e(q,r)}})
return A.f($async$Br,r)},
cA(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cA=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.ng("lp_file_refs",A.j(["ref_id","hash"],n),"store = ? AND record_id = ?",A.j([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cA)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.T("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cA)
case 5:o=A.a6(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.Br(a,o),$async$cA)
case 8:case 7:s=3
break
case 4:m=a.T("lp_conflicts","store = ? AND record_id = ?",A.j([b,c],n))
s=9
return A.a(m,$async$cA)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.j([b,c],n))
s=10
return A.a(m,$async$cA)
case 10:s=d?11:12
break
case 11:m=a.T("lp_outbox","store = ? AND record_id = ?",A.j([b,c],n))
s=13
return A.a(m,$async$cA)
case 13:n=a.T("lp_sync_row","store = ? AND record_id = ?",A.j([b,c],n))
s=14
return A.a(n,$async$cA)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cA,r)},
cP:function cP(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=b},
BU:function BU(){},
cO:function cO(a,b,c,d,e,f,g,h,i,j){var _=this
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
xz:function xz(a){this.a=a},
cn:function cn(a,b,c,d,e,f,g,h,i,j){var _=this
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
vz:function vz(a){this.a=a},
eE:function eE(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
vu:function vu(a){this.a=a},
BS:function BS(){},
BT:function BT(){},
CR(a,b,c,d,e){var s=e==null?A.j([],t.eb):e
return new A.bG(a,b,c,s,d,new A.Af())},
nL(a){var s=$.D.h(0,$.kG())
if(s instanceof A.bG&&s.a===a)return s
return null},
bG:function bG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xK:function xK(a,b,c){this.a=a
this.b=b
this.c=c},
Af:function Af(){this.a=0
this.b=null},
ly:function ly(a,b){this.a=a
this.b=b},
xC:function xC(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
xJ:function xJ(a){this.a=a},
xF:function xF(a){this.a=a},
xI:function xI(a,b,c){this.a=a
this.b=b
this.c=c},
xH:function xH(a,b,c){this.a=a
this.b=b
this.c=c},
xG:function xG(a,b,c){this.a=a
this.b=b
this.c=c},
xE:function xE(a){this.a=a},
xD:function xD(){},
oi:function oi(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
z3:function z3(a,b){this.a=a
this.b=b},
z2:function z2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z0:function z0(a,b){this.a=a
this.b=b},
z1:function z1(a,b){this.a=a
this.b=b},
z_:function z_(a){this.a=a},
hA:function hA(a,b){this.a=a
this.b=b},
Mn(a,b,c){var s,r,q,p,o=A.j([],t.s)
for(s=J.E(a);s.k();){r=new A.a3("")
A.cf(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aG(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.ar(B.l.v(B.e.v(p)).a)},
mU:function mU(a,b,c){var _=this
_.x=a
_.y=null
_.a=b
_.b=c
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
wK:function wK(){},
wJ:function wJ(a){this.a=a},
wL:function wL(a){this.a=a},
mC:function mC(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=null
_.a=c
_.b=d
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
vs:function vs(a){this.a=a},
fs:function fs(){},
yl:function yl(a,b){this.a=a
this.b=0
this.c=b},
ym:function ym(a,b,c){this.a=a
this.b=b
this.c=c},
Nf(a){if(a instanceof A.dJ){if(a instanceof A.eR)return"ValidationException"
if(a instanceof A.eQ)return"UniqueConstraintException"
if(a instanceof A.eD)return"NotNullConstraintException"
if(a instanceof A.fr)return"CheckConstraintException"
if(a instanceof A.h_)return"PrimaryKeyConstraintException"
if(a instanceof A.fJ)return"ForeignKeyConstraintException"
if(a instanceof A.cN)return"StorageError"
if(a instanceof A.h5)return"RecordNotFoundException"
if(a instanceof A.h9)return"SchemaTooNewError"
if(a instanceof A.fL)return"FtsUnavailableError"
if(a instanceof A.hq)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eK)return"SchemaRegistrationError"
if(a instanceof A.hg)return"StaleCursorError"
if(a instanceof A.fS)return"MissingLimitError"
if(a instanceof A.fv)return"ConflictBlockedError"
if(a instanceof A.eo)return"DestructiveMigrationRefusedError"
if(a instanceof A.h4)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bp){if(a instanceof A.eP)return"TransientNetworkError"
if(a instanceof A.da)return"ServerBusyError"
if(a instanceof A.hb)return"ServerError"
if(a instanceof A.bM)return"AuthError"
if(a instanceof A.cj)return"ForbiddenError"
if(a instanceof A.cl)return"NotFoundError"
if(a instanceof A.dQ)return"PayloadError"
if(a instanceof A.eG)return"ProtocolError"
if(a instanceof A.ep)return"DuplicateIdError"
if(a instanceof A.dw)return"BatchFailedError"
if(a instanceof A.np)return"SyncIdentityError"
return"SyncError"}if(a instanceof A.eS)return"WireException"
if(a instanceof A.jj)return"ProtocolEnvelopeException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bn)return"StateError"
if(a instanceof A.bB)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
JF(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.av(s))throw A.b(A.bT('Request "v" must be an int.'))
if(!A.av(r)||r<0)throw A.b(A.bT('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dq.D(0,q))throw A.b(A.bT("Unknown request operation: "+A.p(q)))
if(!t.f.b(p))throw A.b(A.bT('Request "a" must be a map.'))
return new A.hv(s,r,q,p.aU(0,new A.ya(),t.N,t.X))},
bT(a){return new A.jj(a)},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ya:function ya(){},
o0:function o0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y7:function y7(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
ES(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
y5:function y5(a){var _=this
_.d=a
_.e=0
_.r=null
_.w=!1
_.x=null},
y6:function y6(a){this.a=a},
oG:function oG(a){this.a=a},
IH(a){var s,r,q
try{s=A.pn(a)
if(t.f.b(s)){r=A.fd(s)
return r}}catch(q){}return null},
II(a){if(a instanceof A.jF)return A.pp(new A.o0(3,a.a,a.b,null).p())
t.bp.a(a)
return A.Ct(a.a,a.b,a.c,a.d)},
Ct(a,b,c,d){return A.pp(new A.o0(3,a,null,new A.y7(b,c,d)).p())},
ks(a){return A.Lx(a)},
Lx(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$ks=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.ia()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a1(f.getDirectory(),k),$async$ks)
case 7:n=c
j=$.ic()
i=A.Q(j.cV(0,"drift_db"),t.N)
m=i
J.DF(m,j.cV(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.as(l)===0){s=9
break}s=11
return A.a(A.a1(n.getDirectoryHandle(l,{create:!1}),k),$async$ks)
case 11:n=c
case 9:m.length===j||(0,A.r)(m),++h
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
return A.f($async$ks,r)},
pf(a,b){return A.Ly(a,b)},
Ly(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$pf=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.ks(a),$async$pf)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a1(m.getFileHandle(A.dP(b,$.ic().a).gjT(),{create:!1}),t.m),$async$pf)
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
return A.f($async$pf,r)},
ph(a,b){return A.LG(a,b)},
LG(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$ph=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.ks(a),$async$ph)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.lV(m,A.dP(b,$.ic().a).gjT()),$async$ph)
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
return A.f($async$ph,r)},
uM:function uM(){},
uN:function uN(a){this.a=a},
uO:function uO(a){this.a=a},
ml:function ml(a,b,c){this.a=a
this.d=b
this.e=c},
uX:function uX(a,b,c){this.a=a
this.b=b
this.c=c},
oj:function oj(a){this.a=a
this.b=0},
z9:function z9(a){this.a=a},
za:function za(a){this.a=a},
N6(a){var s,r,q,p,o,n,m,l,k,j,i="maxDocBytes",h="destructiveBackup"
if(a==null)return A.u(t.N,t.X)
s=t.f
if(!s.b(a))throw A.b(A.bT("Open options must be a map."))
r=A.fd(a)
q=t.X
p=A.u(t.N,q)
o=r.h(0,"stores")
if(o!=null){if(!t.j.b(o))throw A.b(A.bT('"stores" must be a list.'))
n=A.j([],t.oq)
for(m=J.E(o);m.k();){l=m.gn()
if(!s.b(l))A.t(A.a8("Schema must be a map: "+A.p(l),null,null))
n.push(A.q7(A.fd(l),q))}p.j(0,"stores",n)}k=r.h(0,i)
if(k!=null){if(!A.av(k))throw A.b(A.bT('"maxDocBytes" must be an int.'))
p.j(0,i,k)}j=r.h(0,h)
if(j!=null){if(!A.by(j))throw A.b(A.bT('"destructiveBackup" must be a bool.'))
p.j(0,h,j)}return p},
GH(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.fd(a).h(0,b)
return s}}catch(r){}return null},
MP(a,b){if(b!=null)return!1
return B.b.c9(a,new A.BE())},
BE:function BE(){},
BD:function BD(){},
yc:function yc(a){this.a=a},
fd(a){var s=A.u(t.N,t.X)
a.a8(0,new A.Bt(s))
return s},
hw:function hw(){},
jF:function jF(a,b){this.b=a
this.a=b},
eU:function eU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
Bt:function Bt(a){this.a=a},
Bs:function Bs(){},
o3:function o3(){},
yf:function yf(a,b){var _=this
_.f=$
_.c=a
_.d=b
_.e=null},
yg:function yg(a){this.a=a},
o2:function o2(){},
yd:function yd(a){this.a=a},
ye:function ye(){},
p7:function p7(){},
FW(a){return a},
Gb(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a3("")
o=a+"("
p.a=o
n=A.a0(b)
m=n.i("ct<1>")
l=new A.ct(b,0,s,m)
l.iU(b,0,s,n.c)
m=o+new A.X(l,new A.Be(),m.i("X<a_.E,l>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.P(p.l(0),null))}},
qK:function qK(a){this.a=a},
qL:function qL(){},
qM:function qM(){},
Be:function Be(){},
tB:function tB(){},
dP(a,b){var s,r,q,p,o,n=b.oe(a),m=b.cK(a)
if(n!=null)a=B.a.ae(a,n.length)
s=t.s
r=A.j([],s)
q=A.j([],s)
s=a.length
if(s!==0&&b.cf(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cf(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ae(a,p))
q.push("")}return new A.mG(b,n,m,r,q)},
mG:function mG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Et(a){return new A.mH(a)},
mH:function mH(a){this.a=a},
Ju(){var s,r,q,p,o,n,m,l,k=null
if(A.CS().gb_()!=="file")return $.kF()
if(!B.a.bQ(A.CS().gbr(),"/"))return $.kF()
s=A.Fr(k,0,0)
r=A.Fp(k,0,0,!1)
q=A.AB(k,0,0,k)
p=A.Fo(k,0,0)
o=A.AA(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Fq("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.D6(l,m)
else l=A.f7(l)
if(A.kl("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).kD()==="a\\b")return $.pt()
return $.GZ()},
xk:function xk(){},
w2:function w2(a,b,c){this.d=a
this.e=b
this.f=c},
xS:function xS(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
yb:function yb(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
Cg(a,b){if(b<0)A.t(A.b_("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.t(A.b_("Offset "+b+u.D+a.gm(0)+"."))
return new A.lP(a,b)},
x2:function x2(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lP:function lP(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
Io(a,b){var s=A.Ip(A.j([A.K2(a,!0)],t.pg)),r=new A.tr(b).$0(),q=B.c.l(B.b.ga1(s).b+1),p=A.Iq(s)?0:3,o=A.a0(s)
return new A.t7(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.t9(),o.i("X<1,i>")).wK(0,B.bD),!A.MX(new A.X(s,new A.ta(),o.i("X<1,k?>"))),new A.a3(""))},
Iq(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
Ip(a){var s,r,q=A.MO(a,new A.tc(),t.nf,t.K)
for(s=A.n(q),r=new A.aT(q,q.r,q.e,s.i("aT<2>"));r.k();)J.DJ(r.d,new A.td())
s=s.i("aK<1,2>")
r=s.i("iB<o.E,cx>")
s=A.Q(new A.iB(new A.aK(q,s),new A.te(),r),r.i("o.E"))
return s},
K2(a,b){var s=new A.zL(a).$0()
return new A.bs(s,!0,null)},
K4(a){var s,r,q,p,o,n,m=a.gaM()
if(!B.a.D(m,"\r\n"))return a
s=a.gN().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga3()
o=a.gN().gag()
p=A.nc(s,a.gN().gaq(),o,p)
o=A.B(m,"\r\n","\n")
n=a.gbe()
return A.x3(r,p,o,A.B(n,"\r\n","\n"))},
K5(a){var s,r,q,p,o,n,m
if(!B.a.bQ(a.gbe(),"\n"))return a
if(B.a.bQ(a.gaM(),"\n\n"))return a
s=B.a.A(a.gbe(),0,a.gbe().length-1)
r=a.gaM()
q=a.gR()
p=a.gN()
if(B.a.bQ(a.gaM(),"\n")){o=A.Bx(a.gbe(),a.gaM(),a.gR().gaq())
o.toString
o=o+a.gR().gaq()+a.gm(a)===a.gbe().length}else o=!1
if(o){r=B.a.A(a.gaM(),0,a.gaM().length-1)
if(r.length===0)p=q
else{o=a.gN().gar()
n=a.ga3()
m=a.gN().gag()
p=A.nc(o-1,A.F8(s),m-1,n)
q=a.gR().gar()===a.gN().gar()?p:a.gR()}}return A.x3(q,p,r,s)},
K3(a){var s,r,q,p,o
if(a.gN().gaq()!==0)return a
if(a.gN().gag()===a.gR().gag())return a
s=B.a.A(a.gaM(),0,a.gaM().length-1)
r=a.gR()
q=a.gN().gar()
p=a.ga3()
o=a.gN().gag()
p=A.nc(q-1,s.length-B.a.di(s,"\n")-1,o-1,p)
return A.x3(r,p,s,B.a.bQ(a.gbe(),"\n")?B.a.A(a.gbe(),0,a.gbe().length-1):a.gbe())},
F8(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.ie(a,"\n",s-2)-1
else return s-B.a.di(a,"\n")-1},
t7:function t7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tr:function tr(a){this.a=a},
t9:function t9(){},
t8:function t8(){},
ta:function ta(){},
tc:function tc(){},
td:function td(){},
te:function te(){},
tb:function tb(a){this.a=a},
ts:function ts(){},
tf:function tf(a){this.a=a},
tm:function tm(a,b,c){this.a=a
this.b=b
this.c=c},
tn:function tn(a,b){this.a=a
this.b=b},
to:function to(a){this.a=a},
tp:function tp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tk:function tk(a,b){this.a=a
this.b=b},
tl:function tl(a,b){this.a=a
this.b=b},
tg:function tg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
th:function th(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(a,b,c){this.a=a
this.b=b
this.c=c},
tj:function tj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tq:function tq(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
zL:function zL(a){this.a=a},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nc(a,b,c,d){if(a<0)A.t(A.b_("Offset may not be negative, was "+a+"."))
else if(c<0)A.t(A.b_("Line may not be negative, was "+c+"."))
else if(b<0)A.t(A.b_("Column may not be negative, was "+b+"."))
return new A.cr(d,a,c,b)},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nd:function nd(){},
nf:function nf(){},
Jn(a,b,c){return new A.he(c,a,b)},
ng:function ng(){},
he:function he(a,b,c){this.c=a
this.a=b
this.b=c},
hf:function hf(){},
x3(a,b,c,d){var s=new A.dc(d,a,b,c)
s.oS(a,b,c)
if(!B.a.D(d,c))A.t(A.P('The context line "'+d+'" must contain "'+c+'".',null))
if(A.Bx(d,c,a.gaq())==null)A.t(A.P('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
dc:function dc(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Jr(a){var s
A:{if(18===a){s=B.dr
break A}if(23===a){s=B.ds
break A}if(9===a){s=B.dt
break A}s=null
break A}return s},
jt:function jt(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
Jq(a,b,c,d,e,f,g){return new A.c6(d,b,c,e,f,a,g)},
c6:function c6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
x8:function x8(){},
kN:function kN(a){this.a=a},
L4(a,b,c){var s,r,q,p,o,n=new A.nW(c,A.ab(c.b,null,!1,t.X))
try{A.FK(a,b.$1(n))}catch(r){s=A.C(r)
q=B.e.v(A.iy(s))
p=a.a
o=p.cE(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
FK(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.av(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EV(b).l(0)))
break A}if(b instanceof A.aM){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.DP(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.by(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EV(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cE(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cE(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.as(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.FK(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.t(A.az(b,"result","Unsupported type"))}return s},
ra:function ra(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
rj:function rj(a){this.a=a},
ri:function ri(a){this.a=a},
rk:function rk(a){this.a=a},
rg:function rg(a){this.a=a},
rf:function rf(a){this.a=a},
rh:function rh(a){this.a=a},
rc:function rc(a){this.a=a},
rb:function rb(a){this.a=a},
rd:function rd(a){this.a=a},
rl:function rl(a){this.a=a},
re:function re(a,b){this.a=a
this.b=b},
nW:function nW(a,b){this.a=a
this.b=b},
e6:function e6(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
Aq:function Aq(a,b){this.a=a
this.b=b},
Ar:function Ar(a,b,c){this.a=a
this.b=b
this.c=c},
As:function As(a,b,c){this.a=a
this.b=b
this.c=c},
x4:function x4(){},
hh:function hh(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
Ck(a,b){var s=$.ps()
return new A.m3(A.u(t.N,t.a_),s,a)},
m3:function m3(a,b,c){this.d=a
this.b=b
this.a=c},
ow:function ow(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
N7(a){var s=J.HG(new v.G.URL(a,"file:///").pathname,"/")
return new A.am(s,new A.BN(),A.a0(s).i("am<1>"))},
BN:function BN(){},
qQ:function qQ(){},
n_:function n_(a,b,c){this.d=a
this.a=b
this.c=c},
c5:function c5(a,b){this.a=a
this.b=b},
A9:function A9(a){this.a=a
this.b=-1},
oM:function oM(){},
oN:function oN(){},
oP:function oP(){},
oQ:function oQ(){},
vx:function vx(a,b){this.a=a
this.b=b},
Jb(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bC(r,"step")}return s},
el:function el(){},
bO:function bO(a){this.a=a},
ln:function ln(a){this.a=a},
hr(a){return new A.dh(a)},
DN(a,b){var s,r,q,p
if(b==null)b=$.ps()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cL(256)
r&2&&A.H(a)
a[q]=p}},
dh:function dh(a){this.a=a},
js:function js(a){this.a=a},
b6:function b6(){},
l3:function l3(){},
l2:function l2(){},
Nd(a,b){var s=null,r=new A.ex(t.kk)
return A.pr(a,new A.jG(s,s,s,s,s,s,s,s,new A.BX(new A.BW(r,A.B6(new A.BY(r)))),s,s,s,s),s,b)},
eV:function eV(a){var _=this
_.d=a
_.c=_.b=_.a=null},
BY:function BY(a){this.a=a},
BW:function BW(a,b){this.a=a
this.b=b},
BX:function BX(a){this.a=a},
y2:function y2(a){this.a=a},
xY:function xY(a,b,c){this.a=a
this.b=b
this.c=c},
y4:function y4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y3:function y3(a,b,c){this.b=a
this.c=b
this.d=c},
dX:function dX(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
bX(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.C(r)
if(q instanceof A.dh){s=q
return s.a}else return 1}},
lq:function lq(a){this.b=this.a=$
this.d=a},
qW:function qW(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qY:function qY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r_:function r_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r1:function r1(a,b){this.a=a
this.b=b},
qV:function qV(a){this.a=a},
r0:function r0(a,b,c,d,e){var _=this
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
r3:function r3(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.a=a
this.b=b},
qX:function qX(a,b,c){this.a=a
this.b=b
this.c=c},
qZ:function qZ(a,b){this.a=a
this.b=b},
r4:function r4(a,b){this.a=a
this.b=b},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b){this.a=a
this.$ti=b},
pG:function pG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pI:function pI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pH:function pH(a,b,c){this.a=a
this.b=b
this.c=c},
cE(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.br(a,"success",new A.qt(r,a,b),!1,q)
A.br(a,"error",new A.qu(r,a),!1,q)
return s},
I_(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.br(a,"success",new A.qy(r,a,b),!1,q)
A.br(a,"error",new A.qz(r,a),!1,q)
A.br(a,"blocked",new A.qA(r),!1,q)
return s},
eZ:function eZ(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
zd:function zd(a,b){this.a=a
this.b=b},
ze:function ze(a,b){this.a=a
this.b=b},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
qu:function qu(a,b){this.a=a
this.b=b},
qy:function qy(a,b,c){this.a=a
this.b=b
this.c=c},
qz:function qz(a,b){this.a=a
this.b=b},
qA:function qA(a){this.a=a},
ia(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
E7(a,b,c){var s=a.read(b,c)
return s},
E8(a,b,c){var s=a.write(b,c)
return s},
lV(a,b){return A.a1(a.removeEntry(b,{recursive:!1}),t.X)},
E6(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.t(A.P("Target object does not implement the async iterable interface",null))
return new A.f2(new A.rO(),new A.ih(a,s),s.i("f2<a9.T,M>"))},
rO:function rO(){},
xZ:function xZ(a){this.a=a},
y_:function y_(a){this.a=a},
y1(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$y1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a1(p.fetch(new p.URL(a,A.bg(p.location).href),null),t.m),$async$y1)
case 3:q=o.y0(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$y1,r)},
y0(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$y0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lq(A.u(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.xZ(p).ih(a),$async$y0)
case 3:q=new o.hs(new n.y2(m.JE(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$y0,r)},
hs:function hs(a){this.a=a},
K6(a){var s=new A.jY(a,new A.ap(new A.w($.D,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.oW(a)
return s},
m5(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$m5=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.pJ(a)
n=A.Ck("dart-memory",null)
m=$.ps()
l=new A.dE(o,n,new A.ex(t.p3),A.aL(p),A.u(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.io(),$async$m5)
case 3:s=4
return A.a(l.eO(),$async$m5)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$m5,r)},
pJ:function pJ(a){this.a=null
this.b=a},
pM:function pM(a){this.a=a},
pL:function pL(a,b,c){this.a=a
this.b=b
this.c=c},
pK:function pK(a){this.a=a},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
zO:function zO(a){this.a=a},
zP:function zP(a){this.a=a},
zN:function zN(a){this.a=a},
zQ:function zQ(a,b,c){this.a=a
this.b=b
this.c=c},
zS:function zS(a,b){this.a=a
this.b=b},
zR:function zR(a,b){this.a=a
this.b=b},
zp:function zp(a,b,c){this.a=a
this.b=b
this.c=c},
zq:function zq(a,b){this.a=a
this.b=b},
oF:function oF(a,b){this.a=a
this.b=b},
dE:function dE(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
tv:function tv(a,b,c){this.a=a
this.b=b
this.c=c},
tw:function tw(){},
tu:function tu(a,b){this.a=a
this.b=b},
ox:function ox(a,b,c){this.a=a
this.b=b
this.c=c},
zM:function zM(a,b){this.a=a
this.b=b},
b8:function b8(){},
jW:function jW(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
jQ:function jQ(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hC:function hC(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hW:function hW(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
EF(a){var s=A.Ck("dart-memory",null),r=$.ps()
return new A.hd(s,r,a)},
n8(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$n8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.ia()
if(j==null)throw A.b(A.hr(1))
p=t.m
s=3
return A.a(A.a1(j.getDirectory(),p),$async$n8)
case 3:o=d
n=A.N7(a),m=J.E(n.a),n=new A.cU(m,n.b,n.$ti.i("cU<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a1(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$n8)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a5(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n8,r)},
n9(a){var s=0,r=A.h(t.m),q
var $async$n9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n8(a,!0),$async$n9)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n9,r)},
x0(a,b){var s=0,r=A.h(t.g_),q,p
var $async$x0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.ia()==null)throw A.b(A.hr(1))
p=A
s=3
return A.a(A.n9(a),$async$x0)
case 3:q=p.x_(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$x0,r)},
x_(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$x_=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.EF(c)
s=3
return A.a(p.cN(a,!1),$async$x_)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$x_,r)},
fI:function fI(a,b,c){this.c=a
this.a=b
this.b=c},
hd:function hd(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
x1:function x1(a,b){this.a=a
this.b=b},
oV:function oV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
A5:function A5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
JE(a,b){var s=A.bg(a.exports.memory)
b.b!==$&&A.ce()
b.b=s
s=new A.xT(s,b,a.exports)
s.oT(a,b)
return s},
o5(a,b){var s,r=A.bS(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dZ(a,b,c){var s=a.buffer
return B.o.f0(A.bS(s,b,c==null?A.o5(a,b):c))},
CT(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.f0(A.bS(s,b,c==null?A.o5(a,b):c))},
ET(a,b,c){var s=new Uint8Array(c)
B.f.cU(s,0,A.bS(a.buffer,b,c))
return s},
xT:function xT(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
xU:function xU(a){this.a=a},
xV:function xV(a){this.a=a},
xW:function xW(a){this.a=a},
xX:function xX(a){this.a=a},
Bo(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$Bo=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kH()
s=l!=null?3:5
break
case 3:p=A.LC()
s=6
return A.a(A.jE(l,p,null,null,!1),$async$Bo)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a5({port:m.port1,lockName:p},new A.is(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Bo,r)},
LC(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bv(97+$.Hq().cL(26))
return r.charCodeAt(0)==0?r:r},
HQ(a){return new A.iq(a)},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
w9:function w9(){},
wd:function wd(a){this.a=a},
we:function we(a){this.a=a},
wc:function wc(a){this.a=a},
wb:function wb(a){this.a=a},
wa:function wa(a){this.a=a},
iq:function iq(a){this.a=a},
r8:function r8(){},
lm:function lm(a){this.a=a},
qR:function qR(a){this.a=a},
eT:function eT(){},
lG(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lG=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n9(a),$async$lG)
case 3:p=e
o=A.EF(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cN(p,!0),$async$lG)
case 6:case 5:q=new A.lF(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lG,r)},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
t5:function t5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jE(a,b,c,d,e){var s,r,q={},p=new A.w($.D,t.nI),o=new A.ap(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.Ch(A.a1(a.request(b,s,A.cX(new A.y8(q,o))),r),new A.y9(q,d,o),r,t.K)
return p},
y8:function y8(a,b){this.a=a
this.b=b},
y9:function y9(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a){this.a=a},
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
rn:function rn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rm:function rm(a,b){this.a=a
this.b=b},
ro:function ro(a){this.a=a},
j6:function j6(a){this.a=!1
this.b=a},
vp:function vp(a,b){this.a=a
this.b=b},
vo:function vo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vn:function vn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
HX(a){var s,r,q,p,o=A.j([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bN(n,A.a0(n).i("bN<1,l>"))
for(s=J.L(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a5(A.fC(B.cT,s.h(m,q)),s.h(m,q+1)))}s=A.hY(a.b)
q=A.hY(a.c)
p=A.hY(a.d)
return new A.em(o,s,q,A.hY(a.g),p)},
em:function em(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Je(a){var s
if(J.x(a.t,"errorResponse")){s=A.Ib(a)
if(s!=null&&s instanceof A.du)return s
else return new A.h6(a.e)}else return new A.h6("Did not respond with expected type, got "+A.p(a))},
Ib(a){var s=a.s,r=s==null?null:A.aq(s)
A:{if(0===r){s=A.Ic(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
Ic(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.A("Pattern matching error"))
n=new A.rE()
l=A.aq(A.f8(l))
A.F(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.en(i,h,A.bS(h,0,o))}else p=o
n=n.$1(k)
A.FA(g)
return new A.c6(s,r,l,g==null?o:A.aq(g),n,q,p)},
Id(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Jy(l)
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
Jf(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.t5(a2,512,"transfer" in a2)
a5.mC(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.Jb(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.qj(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aG}else g=B.aH
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aI
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.o5(r,f)
f=new Uint8Array(e,f,d)
c=new A.dm(!1).d_(f,0,a,!0)
i=c
g=B.aJ
break
case 4:i=s.kW(j)
g=B.aK
break
case 5:default:i=a
g=B.aL}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.o5(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dm(!1).d_(a0,0,a,!0)}return A.GA(!1,b,0,0,a1,a,a3.wZ(0))},
MY(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
rE:function rE(){},
GA(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
i4(a){var s,r,q,p,o=v.G,n=new o.Array()
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
MC(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mo:function mo(a,b,c){this.a=a
this.b=b
this.$ti=c},
wQ:function wQ(){},
Ig(a){var s,r
for(s=0;s<5;++s){r=B.cG[s]
if(r.c===a)return r}throw A.b(A.P("Unknown FS implementation: "+a,null))},
Jx(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aL
break A}q=A.av(a)
p=q?a:j
if(q){s=p
r=B.aG
break A}q=a instanceof A.aM
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.aH
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aI
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aJ
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aK
break A}q=A.by(a)
k=q?a:j
if(q){s=k
r=B.bq
break A}throw A.b(A.P("Unsupported value: "+A.p(a),j))}return new A.a5(r,s)},
Jy(a){var s,r,q,p,o,n
if(a instanceof A.en)return new A.a5(a.a,a.b)
s=[]
r=J.L(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.Jx(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a5(s,t.a.a(B.f.gab(p)))},
dA:function dA(a,b,c){this.c=a
this.a=b
this.b=c},
cv:function cv(a,b){this.a=a
this.b=b},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
pl(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$pl=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bg(i.indexedDB)
i=$.kH()
i=i==null?null:A.jE(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bx(i,t.b3),$async$pl)
case 3:l=b
p=5
s=8
return A.a(A.HZ(m.open("drift_mock_db"),t.m),$async$pl)
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
if(i!=null)i.a.an()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$pl,r)},
Bk(a){return A.Ml(a)},
Ml(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$Bk=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bg(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cX(new A.Bl(j,m))
s=7
return A.a(A.HY(m,t.m),$async$Bk)
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
return A.f($async$Bk,r)},
i7(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$i7=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.ia()
if(h==null){q=B.u
s=1
break}j=t.m
s=3
return A.a(A.a1(h.getDirectory(),j),$async$i7)
case 3:m=b
p=5
s=8
return A.a(A.a1(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$i7)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.u
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.j([],t.s)
j=new A.cy(A.cz(A.E6(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$i7)
case 14:if(!b){s=13
break}k=j.gn()
if(J.x(k.kind,"directory"))J.aO(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.C(),$async$i7)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i7,r)},
HY(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.br(a,"success",new A.qr(r,a,b),!1,q)
A.br(a,"error",new A.qs(r,a),!1,q)
return s},
HZ(a,b){var s=new A.w($.D,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.br(a,"success",new A.qv(r,a,b),!1,q)
A.br(a,"error",new A.qw(r,a),!1,q)
A.br(a,"blocked",new A.qx(r,a),!1,q)
return s},
Bl:function Bl(a,b){this.a=a
this.b=b},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(a,b){this.a=a
this.b=b},
qv:function qv(a,b,c){this.a=a
this.b=b
this.c=c},
qw:function qw(a,b){this.a=a
this.b=b},
qx:function qx(a,b){this.a=a
this.b=b},
w5:function w5(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
h6:function h6(a){this.a=a},
du:function du(a){this.a=a},
L3(a){var s=a.gmX()
return new A.f2(new A.B5(),s,A.n(s).i("f2<a9.T,M>"))},
F4(a,b){var s=A.j([],t.kG),r=b==null?a.b:b
return new A.hB(a,r,new A.kb(),new A.kb(),new A.kb(),s)},
JY(a,b,c){var s=t.S
s=new A.hz(c,A.j([],t.fV),a.a,new A.aJ(new A.w($.D,t.D),t.h),A.u(s,t.br),A.u(s,t.m))
s.oQ(a)
s.oV(a,b,c)
return s},
FL(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
ea(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ea=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.ia()
if(b==null){q=B.aC
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.kH()
d=d==null?null:A.jE(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bx(d,t.b3),$async$ea)
case 7:j=a1
d=t.m
s=8
return A.a(A.a1(b.getDirectory(),d),$async$ea)
case 8:m=a1
s=9
return A.a(A.a1(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$ea)
case 9:l=a1
s=10
return A.a(A.kv(l),$async$ea)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.Co(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a1(A.bg(e),t.X),$async$ea)
case 13:q=B.aC
n=[1]
s=5
break
case 12:g=i
q=new A.k6(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.aC
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.an()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.a(A.lV(m,"_drift_feature_detection"),$async$ea)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ea,r)},
kv(a){return A.LV(a)},
LV(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$kv=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a1(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kv)
case 7:j=c
s=8
return A.a(A.a1(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kv)
case 8:n=c
n.close()
l=j
q=new A.a5(!0,l)
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
return A.a(A.a1(a.createSyncAccessHandle(),t.m),$async$kv)
case 9:m=c
q=new A.a5(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kv,r)},
B5:function B5(){},
kb:function kb(){this.a=null},
hB:function hB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
z4:function z4(a){this.a=a},
z8:function z8(a,b){this.a=a
this.b=b},
z5:function z5(a,b){this.a=a
this.b=b},
z6:function z6(a){this.a=a},
z7:function z7(a,b){this.a=a
this.b=b},
hz:function hz(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
yP:function yP(a){this.a=a},
yU:function yU(a,b){this.a=a
this.b=b},
yX:function yX(a,b,c){this.a=a
this.b=b
this.c=c},
yR:function yR(a,b){this.a=a
this.b=b},
yQ:function yQ(a,b){this.a=a
this.b=b},
yW:function yW(a,b){this.a=a
this.b=b},
yV:function yV(a,b){this.a=a
this.b=b},
yZ:function yZ(a,b){this.a=a
this.b=b},
yY:function yY(a,b){this.a=a
this.b=b},
yS:function yS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yT:function yT(a,b){this.a=a
this.b=b},
yO:function yO(a){this.a=a},
ls:function ls(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
rr:function rr(a){this.a=a},
rq:function rq(a){this.a=a},
rp:function rp(a,b){this.a=a
this.b=b},
yh:function yh(a,b,c,d,e,f){var _=this
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
yi:function yi(a,b){this.a=a
this.b=b},
yj:function yj(a,b){this.a=a
this.b=b},
yk:function yk(a){this.a=a},
JG(){var s=v.G
if(A.Iv(s,"DedicatedWorkerGlobalScope"))return new A.oo(s,new A.op(s.location.href))
else return new A.oT(s,new A.op(s.location.href))},
kn:function kn(){},
oo:function oo(a,b){this.a=a
this.b=b},
oT:function oT(a,b){this.a=a
this.b=b},
Ak:function Ak(a){this.a=a},
Al:function Al(a,b,c){this.a=a
this.b=b
this.c=c},
Aj:function Aj(a){this.a=a},
Ah:function Ah(a){this.a=a},
Ai:function Ai(a){this.a=a},
op:function op(a){this.a=a},
zk:function zk(a){this.a=a},
nn:function nn(a,b,c){this.c=a
this.a=b
this.b=c},
xj:function xj(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
ho:function ho(){},
oy:function oy(){},
cw:function cw(a,b){this.a=a
this.b=b},
br(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Gd(new A.zn(c),t.m)
s=s==null?null:A.cX(s)}s=new A.jU(a,b,s,!1,e.i("jU<0>"))
s.jL()
return s},
Gd(a,b){var s=$.D
if(s===B.i)return a
return s.hJ(a,b)},
Cd:function Cd(a,b){this.a=a
this.$ti=b},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jU:function jU(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
zn:function zn(a){this.a=a},
zo:function zo(a){this.a=a},
GQ(a){return v.mangledGlobalNames[a]},
GE(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Iy(a,b){return b in a},
Co(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
MO(a,b,c,d){var s,r,q,p,o,n=A.u(d,c.i("q<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.j([],s)
n.j(0,p,o)
p=o}else p=o
J.aO(p,q)}return n},
Cl(a){var s=J.E(a.a)
if(new A.cU(s,a.b,a.$ti.i("cU<1>")).k())return s.gn()
return null},
Bh(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.H(a)
a[r]=s&255
b=s/256|0;--r}},
No(a){return a},
GO(a){if(a instanceof A.dx)return a
return new A.dx(a)},
Np(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.C(p)
if(q instanceof A.he){s=q
throw A.b(A.Jn("Invalid "+a+": "+s.a,s.b,s.gfU()))}else if(t.Y.b(q)){r=q
throw A.b(A.a8("Invalid "+a+' "'+b+'": '+r.gij(),r.gfU(),r.gar()))}else throw p}},
fi(a){if(B.a.bQ(a,"\\"))throw A.b(A.aR('Filter value "'+a+'" ends with a backslash: unrepresentable in a PB filter literal (the closing quote would be escaped).'))
return"'"+A.B(a,"'","\\'")+"'"},
Nk(a,b,c,d){var s="("+d+"="+A.fi(a)+" && id~"+A.fi(b+"%")
if(c==null)return s+")"
return s+" && id>"+A.fi(c)+")"},
i5(){var s,r,q,p=$.Hr(),o=$.Hk()+1
$.L9=o
s=B.a.iq(B.c.kE(o,36),8,"0")
r=J.Ef(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cL(36)]
return B.a.A(s+B.b.ed(r),0,15)},
N9(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.r)(b),++r){q=b[r]
if(a.I(q))p.j(0,q,a.h(0,q))}return p},
Na(a,b){var s,r,q=A.j([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r)q.push(A.N9(a[r],b))
return q},
pq(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.C(q)
if(r instanceof A.cN)throw q
else{s=r
r=A.dd("Corrupt "+a+" row: "+A.p(s))
throw A.b(r)}}},
Bq(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.j
try{s=B.h.aE(a,null)
if(t.f.b(s)){q=A.bm(s,t.N,t.X)
return q}return B.j}catch(p){r=A.C(p)
q=A.dd("Corrupt "+c+" row: "+b+": "+A.p(r))
throw A.b(q)}},
Gp(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bg
try{s=B.h.aE(a,null)
if(t.j.b(s)){q=J.px(s,t.N)
q=q.fH(q)
return q}return B.bg}catch(p){r=A.C(p)
q=A.dd("Corrupt "+c+" row: "+b+": "+A.p(r))
throw A.b(q)}},
Go(a){var s,r,q,p,o=null
if(a==null)return B.u
A.F(a)
if(a.length===0)return B.u
s=B.h.aE(a,o)
if(!t.j.b(s))throw A.b(A.a8("expected a JSON array, got "+J.bZ(s).l(0),o,o))
r=A.j([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.t(A.a8("dirty-field member is "+J.bZ(p).l(0)+", expected String",o,o)))}return r},
ff(a){var s,r=J.L(a)
if(r.gF(a))return null
s=J.bY(r.gH(a).gaY())
if(A.av(s))return s
if(typeof s=="string")return A.ji(s,null)
return null},
Gt(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.d_(B.x.wU(r*J.Hz(d.$1(o),0.5,1.5)),0,0)},
N5(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.ci)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.a8("Unsupported fieldCipher type: "+A.p(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.as(r)!==32)throw A.b(B.ch)
q=new Uint8Array(32)
for(p=J.L(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.av(n)||n<0||n>255)throw A.b(A.a8("Malformed AES-256-GCM key byte at index "+o+": "+A.p(n),m,m))
q[o]=n}A.DL(q)
p=$.C2()
if($.kD()!==B.P)A.t(A.A("BigEndian systems are unsupported"))
return new A.pB(new A.lo(12,32,m),new A.jr(new A.n7(A.DL(q)),m),p)},
N1(){var s=A.JG(),r=t.cj
new A.yh(s,B.bQ,A.j([],t.az),A.u(t.S,t.lp),new A.j6(A.Cs(r)),new A.j6(A.Cs(r))).eb()},
Gn(){var s,r,q,p,o=null
try{o=A.CS()}catch(s){if(t.mA.b(A.C(s))){r=$.B3
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.FH)){r=$.B3
r.toString
return r}$.FH=o
if($.Dy()===$.kF())r=$.B3=o.bW(".").l(0)
else{q=o.kD()
p=q.length-1
r=$.B3=p===0?q:B.a.A(q,0,p)}return r},
Gw(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Gq(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Gw(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
MX(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gH(0)
for(r=A.cu(a,1,null,a.$ti.i("a_.E")),q=r.$ti,r=new A.ao(r,r.gm(0),q.i("ao<a_.E>")),q=q.i("a_.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
Nc(a,b){var s=B.b.bR(a,null)
if(s<0)throw A.b(A.P(A.p(a)+" contains no null elements.",null))
a[s]=b},
GI(a,b){var s=B.b.bR(a,b)
if(s<0)throw A.b(A.P(A.p(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Mx(a,b){var s,r,q,p
for(s=new A.ch(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<I.E>")),r=r.i("I.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
Bx(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cd(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bR(a,b)
while(r!==-1){q=r===0?0:B.a.ie(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cd(a,b,r+1)}return null},
Dl(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c6(A.dZ(r.b,p.sqlite3_errmsg(q),null),A.dZ(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.p(o)+")",c,n,d,e,f)},
BZ(a,b,c,d,e){throw A.b(A.Dl(a.a,a.b,b,c,d,e))},
DP(a){if(a.a0(0,$.GT())<0||a.a0(0,$.GS())>0)throw A.b(A.E3("BigInt value exceeds the range of 64 bits"))
return a},
Jc(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.aq(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dZ(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.ET(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
Ea(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bv("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cL(61)))
return s.charCodeAt(0)==0?s:s},
wN(a){var s=0,r=A.h(t.lo),q
var $async$wN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a1(a.arrayBuffer(),t.a),$async$wN)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wN,r)}},B={}
var w=[A,J,B]
var $={}
A.Cq.prototype={}
J.m7.prototype={
P(a,b){return a===b},
gJ(a){return A.eF(a)},
l(a){return"Instance of '"+A.mM(a)+"'"},
gaj(a){return A.bJ(A.Db(this))}}
J.m9.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gaj(a){return A.bJ(t.y)},
$iak:1,
$iR:1}
J.iO.prototype={
P(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gaj(a){return A.bJ(t.P)},
$iak:1,
$iU:1}
J.aF.prototype={$iM:1}
J.dH.prototype={
gJ(a){return 0},
gaj(a){return B.dL},
l(a){return String(a)}}
J.mJ.prototype={}
J.dW.prototype={}
J.bP.prototype={
l(a){var s=a[$.GW()]
if(s==null)s=a[$.fj()]
if(s==null)return this.oE(a)
return"JavaScript function for "+J.Z(s)}}
J.bt.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.fN.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.z.prototype={
f_(a,b){return new A.bN(a,A.a0(a).i("@<1>").X(b).i("bN<1,2>"))},
t(a,b){a.$flags&1&&A.H(a,29)
a.push(b)},
iz(a,b){var s
a.$flags&1&&A.H(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.wM(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.H(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.wM(b,null))
a.splice(b,0,c)},
kj(a,b,c){var s,r
a.$flags&1&&A.H(a,"insertAll",2)
A.EC(b,0,a.length,"index")
if(!t.O.b(c))c=J.HJ(c)
s=J.as(c)
a.length=a.length+s
r=b+s
this.ah(a,r,a.length,a,b)
this.aw(a,b,r,c)},
ky(a){a.$flags&1&&A.H(a,"removeLast",1)
if(a.length===0)throw A.b(A.Bu(a,-1))
return a.pop()},
G(a,b){var s
a.$flags&1&&A.H(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
rI(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aA(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dt(a,b){return new A.am(a,b,A.a0(a).i("am<1>"))},
E(a,b){var s
a.$flags&1&&A.H(a,"addAll",2)
if(Array.isArray(b)){this.p5(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
p5(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aA(a))
for(s=0;s<r;++s)a.push(b[s])},
am(a){a.$flags&1&&A.H(a,"clear","clear")
a.length=0},
ci(a,b,c){return new A.X(a,b,A.a0(a).i("@<1>").X(c).i("X<1,2>"))},
B(a,b){var s,r=A.ab(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.p(a[s])
return r.join(b)},
ed(a){return this.B(a,"")},
cQ(a,b){return A.cu(a,0,A.cz(b,"count",t.S),A.a0(a).c)},
bl(a,b){return A.cu(a,b,null,A.a0(a).c)},
fb(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aA(a))}if(c!=null)return c.$0()
throw A.b(A.aE())},
mU(a,b){return this.fb(a,b,null)},
a9(a,b){return a[b]},
U(a,b,c){if(b<0||b>a.length)throw A.b(A.ax(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ax(c,b,a.length,"end",null))
if(b===c)return A.j([],A.a0(a))
return A.j(a.slice(b,c),A.a0(a))},
b5(a,b){return this.U(a,b,null)},
fQ(a,b,c){A.be(b,c,a.length)
return A.cu(a,b,c,A.a0(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.aE())},
ga1(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aE())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aE())
throw A.b(A.iL())},
iA(a,b,c){a.$flags&1&&A.H(a,18)
A.be(b,c,a.length)
a.splice(b,c-b)},
ah(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.H(a,5)
A.be(b,c,a.length)
s=c-b
if(s===0)return
A.bd(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.pA(d,e).bX(0,!1)
q=0}p=J.L(r)
if(q+s>p.gm(r))throw A.b(A.Ed())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
aw(a,b,c,d){return this.ah(a,b,c,d,0)},
c9(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aA(a))}return!1},
cG(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aA(a))}return!0},
co(a,b){var s,r,q,p,o
a.$flags&2&&A.H(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.Ld()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a0(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.eb(b,2))
if(p>0)this.rJ(a,p)},
aG(a){return this.co(a,null)},
rJ(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bR(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
di(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.x(a[s],b))return s
return-1},
D(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gY(a){return a.length!==0},
l(a){return A.tC(a,"[","]")},
bX(a,b){var s=A.j(a.slice(0),A.a0(a))
return s},
cR(a){return this.bX(a,!0)},
gu(a){return new J.fo(a,a.length,A.a0(a).i("fo<1>"))},
gJ(a){return A.eF(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.H(a,"set length","change the length of")
if(b<0)throw A.b(A.ax(b,0,null,"newLength",null))
if(b>a.length)A.a0(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.Bu(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
if(!(b>=0&&b<a.length))throw A.b(A.Bu(a,b))
a[b]=c},
mY(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gaj(a){return A.bJ(A.a0(a))},
$ibc:1,
$iK:1,
$io:1,
$iq:1}
J.m8.prototype={
x6(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mM(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.tD.prototype={}
J.fo.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ev.prototype={
a0(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkn(b)
if(this.gkn(a)===s)return 0
if(this.gkn(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkn(a){return a===0?1/a<0:a<0},
iB(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
tY(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
vd(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
wU(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bO(a,b,c){if(this.a0(b,c)>0)throw A.b(A.fc(b))
if(this.a0(a,b)<0)return b
if(this.a0(a,c)>0)return c
return a},
kE(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ax(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.t(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bj("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
fM(a,b){return a+b},
ak(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iT(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mi(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.mi(a,b)},
mi(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
bE(a,b){if(b<0)throw A.b(A.fc(b))
return b>31?0:a<<b>>>0},
t4(a,b){return b>31?0:a<<b>>>0},
dA(a,b){var s
if(b<0)throw A.b(A.fc(b))
if(a>0)s=this.jJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
af(a,b){var s
if(a>0)s=this.jJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mg(a,b){if(0>b)throw A.b(A.fc(b))
return this.jJ(a,b)},
jJ(a,b){return b>31?0:a>>>b},
of(a,b){return a>b},
gaj(a){return A.bJ(t.o)},
$iaw:1,
$iaa:1,
$iaW:1}
J.iN.prototype={
gmD(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gaj(a){return A.bJ(t.S)},
$iak:1,
$ii:1}
J.ma.prototype={
gaj(a){return A.bJ(t.W)},
$iak:1}
J.dF.prototype={
jS(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.oX(b,a,c)},
hE(a,b){return this.jS(a,b,0)},
eh(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.hk(c,a)},
bQ(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ae(a,r-s)},
kA(a,b,c){A.EC(0,0,a.length,"startIndex")
return A.Nj(a,b,c,0)},
cV(a,b){var s
if(typeof b=="string")return A.j(a.split(b),t.s)
else{if(b instanceof A.ew){s=b.e
s=!(s==null?b.e=b.pC():s)}else s=!1
if(s)return A.j(a.split(b.b),t.s)
else return this.pP(a,b)}},
dn(a,b,c,d){var s=A.be(b,c,a.length)
return A.GM(a,b,s,d)},
pP(a,b){var s,r,q,p,o,n,m=A.j([],t.s)
for(s=J.C4(b,a),s=s.gu(s),r=0,q=1;s.k();){p=s.gn()
o=p.gR()
n=p.gN()
q=n-o
if(q===0&&r===o)continue
m.push(this.A(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ae(a,r))
return m},
ad(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.ad(a,b,0)},
A(a,b,c){return a.substring(b,A.be(b,c,a.length))},
ae(a,b){return this.A(a,b,null)},
cm(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Iz(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.Ei(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
x4(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.Ei(r,s))},
bj(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bR)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
iq(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bj(c,s)+a},
wj(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bj(" ",s)},
cd(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bR(a,b){return this.cd(a,b,0)},
ie(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
di(a,b){return this.ie(a,b,null)},
D(a,b){return A.Ng(a,b,0)},
a0(a,b){var s
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
gaj(a){return A.bJ(t.N)},
gm(a){return a.length},
$ibc:1,
$iak:1,
$iaw:1,
$il:1}
A.zc.prototype={
t(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.L(b),i=j.gm(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.c.af(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.f.aw(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.aw(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.H(r)
r[q+m]=l}k.a=s},
kC(){var s,r=this
if(r.a===0)return $.pu()
s=J.bL(B.f.gab(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.pu()
return s},
gm(a){return this.a}}
A.yK.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b9(b))
this.b.push(s)
this.a=this.a+s.length},
kC(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.pu()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.am(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.r)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.aw(q,p,m,n)}l.a=0
B.b.am(s)
return q},
gm(a){return this.a}}
A.e_.prototype={
gu(a){return new A.l7(J.E(this.gbc()),A.n(this).i("l7<1,2>"))},
gm(a){return J.as(this.gbc())},
gF(a){return J.bA(this.gbc())},
gY(a){return J.ee(this.gbc())},
bl(a,b){var s=A.n(this)
return A.fq(J.pA(this.gbc(),b),s.c,s.y[1])},
cQ(a,b){var s=A.n(this)
return A.fq(J.C7(this.gbc(),b),s.c,s.y[1])},
a9(a,b){return A.n(this).y[1].a(J.py(this.gbc(),b))},
gH(a){return A.n(this).y[1].a(J.bY(this.gbc()))},
ga1(a){return A.n(this).y[1].a(J.pz(this.gbc()))},
gap(a){return A.n(this).y[1].a(J.C6(this.gbc()))},
D(a,b){return J.C5(this.gbc(),b)},
l(a){return J.Z(this.gbc())}}
A.l7.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.eh.prototype={
gbc(){return this.a}}
A.jR.prototype={$iK:1}
A.jO.prototype={
h(a,b){return this.$ti.y[1].a(J.W(this.a,b))},
j(a,b,c){J.cY(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.HE(this.a,b)},
t(a,b){J.aO(this.a,this.$ti.c.a(b))},
co(a,b){var s=b==null?null:new A.yL(this,b)
J.DJ(this.a,s)},
fQ(a,b,c){var s=this.$ti
return A.fq(J.HB(this.a,b,c),s.c,s.y[1])},
ah(a,b,c,d,e){var s=this.$ti
J.HF(this.a,b,c,A.fq(d,s.y[1],s.c),e)},
aw(a,b,c,d){return this.ah(0,b,c,d,0)},
$iK:1,
$iq:1}
A.yL.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bN.prototype={
f_(a,b){return new A.bN(this.a,this.$ti.i("@<1>").X(b).i("bN<1,2>"))},
gbc(){return this.a}}
A.ei.prototype={
ca(a,b,c){return new A.ei(this.a,this.$ti.i("@<1,2>").X(b).X(c).i("ei<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a8(a,b){this.a.a8(0,new A.q0(this,b))},
gK(){var s=this.$ti
return A.fq(this.a.gK(),s.c,s.y[2])},
gaY(){var s=this.$ti
return A.fq(this.a.gaY(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gY(a){var s=this.a
return s.gY(s)},
ga7(){var s=this.a.ga7()
return s.ci(s,new A.q_(this),this.$ti.i("S<3,4>"))}}
A.q0.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.q_.prototype={
$1(a){var s=this.a.$ti
return new A.S(s.y[2].a(a.a),s.y[3].a(a.b),s.i("S<3,4>"))},
$S(){return this.a.$ti.i("S<3,4>(S<1,2>)")}}
A.dG.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mV.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.ch.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.BM.prototype={
$0(){return A.bb(null,t.H)},
$S:3}
A.wZ.prototype={}
A.K.prototype={}
A.a_.prototype={
gu(a){var s=this
return new A.ao(s,s.gm(s),A.n(s).i("ao<a_.E>"))},
gF(a){return this.gm(this)===0},
gH(a){if(this.gm(this)===0)throw A.b(A.aE())
return this.a9(0,0)},
ga1(a){var s=this
if(s.gm(s)===0)throw A.b(A.aE())
return s.a9(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aE())
if(s.gm(s)>1)throw A.b(A.iL())
return s.a9(0,0)},
D(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.x(r.a9(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.aA(r))}return!1},
cG(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a9(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.aA(r))}return!0},
B(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.p(p.a9(0,0))
if(o!==p.gm(p))throw A.b(A.aA(p))
for(r=s,q=1;q<o;++q){r=r+b+A.p(p.a9(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.p(p.a9(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}},
ed(a){return this.B(0,"")},
dt(a,b){return this.oz(0,b)},
ci(a,b,c){return new A.X(this,b,A.n(this).i("@<a_.E>").X(c).i("X<1,2>"))},
wK(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aE())
s=q.a9(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a9(0,r))
if(p!==q.gm(q))throw A.b(A.aA(q))}return s},
bl(a,b){return A.cu(this,b,null,A.n(this).i("a_.E"))},
cQ(a,b){return A.cu(this,0,A.cz(b,"count",t.S),A.n(this).i("a_.E"))}}
A.ct.prototype={
iU(a,b,c,d){var s,r=this.b
A.bd(r,"start")
s=this.c
if(s!=null){A.bd(s,"end")
if(r>s)throw A.b(A.ax(r,0,s,"start",null))}},
gpZ(){var s=J.as(this.a),r=this.c
if(r==null||r>s)return s
return r},
gt8(){var s=J.as(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.as(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a9(a,b){var s=this,r=s.gt8()+b
if(b<0||r>=s.gpZ())throw A.b(A.m4(b,s.gm(0),s,null,"index"))
return J.py(s.a,r)},
bl(a,b){var s,r,q=this
A.bd(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.er(q.$ti.i("er<1>"))
return A.cu(q.a,s,r,q.$ti.c)},
cQ(a,b){var s,r,q,p=this
A.bd(b,"count")
s=p.c
r=p.b
if(s==null)return A.cu(p.a,r,B.c.fM(r,b),p.$ti.c)
else{q=B.c.fM(r,b)
if(s<q)return p
return A.cu(p.a,r,q,p.$ti.c)}},
bX(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.L(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.Cn(0,n):J.Cm(0,n)}r=A.ab(s,m.a9(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a9(n,o+q)
if(m.gm(n)<l)throw A.b(A.aA(p))}return r},
cR(a){return this.bX(0,!0)}}
A.ao.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.L(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.aA(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0}}
A.ck.prototype={
gu(a){return new A.mm(J.E(this.a),this.b,A.n(this).i("mm<1,2>"))},
gm(a){return J.as(this.a)},
gF(a){return J.bA(this.a)},
gH(a){return this.b.$1(J.bY(this.a))},
ga1(a){return this.b.$1(J.pz(this.a))},
gap(a){return this.b.$1(J.C6(this.a))},
a9(a,b){return this.b.$1(J.py(this.a,b))}}
A.eq.prototype={$iK:1}
A.mm.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.as(this.a)},
a9(a,b){return this.b.$1(J.py(this.a,b))}}
A.am.prototype={
gu(a){return new A.cU(J.E(this.a),this.b,this.$ti.i("cU<1>"))},
ci(a,b,c){return new A.ck(this,b,this.$ti.i("@<1>").X(c).i("ck<1,2>"))}}
A.cU.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.iB.prototype={
gu(a){return new A.lC(J.E(this.a),this.b,B.aS,this.$ti.i("lC<1,2>"))}}
A.lC.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.E(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eO.prototype={
gu(a){var s=this.a
return new A.nC(s.gu(s),this.b,A.n(this).i("nC<1>"))}}
A.ix.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.of(r,s))return s
return r},
$iK:1}
A.nC.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.db.prototype={
bl(a,b){A.kP(b,"count")
A.bd(b,"count")
return new A.db(this.a,this.b+b,A.n(this).i("db<1>"))},
gu(a){var s=this.a
return new A.na(s.gu(s),this.b,A.n(this).i("na<1>"))}}
A.fB.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bl(a,b){A.kP(b,"count")
A.bd(b,"count")
return new A.fB(this.a,this.b+b,this.$ti)},
$iK:1}
A.na.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.er.prototype={
gu(a){return B.aS},
gF(a){return!0},
gm(a){return 0},
gH(a){throw A.b(A.aE())},
ga1(a){throw A.b(A.aE())},
gap(a){throw A.b(A.aE())},
a9(a,b){throw A.b(A.ax(b,0,0,"index",null))},
D(a,b){return!1},
cG(a,b){return!0},
dt(a,b){return this},
ci(a,b,c){return new A.er(c.i("er<0>"))},
bl(a,b){A.bd(b,"count")
return this},
cQ(a,b){A.bd(b,"count")
return this},
bX(a,b){var s=J.Cm(0,this.$ti.c)
return s},
fH(a){return A.mk(this.$ti.c)}}
A.lz.prototype={
k(){return!1},
gn(){throw A.b(A.aE())}}
A.dY.prototype={
gu(a){return new A.o1(J.E(this.a),this.$ti.i("o1<1>"))}}
A.o1.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.iE.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.nO.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
co(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ah(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
aw(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.hp.prototype={}
A.bw.prototype={
gm(a){return J.as(this.a)},
a9(a,b){var s=this.a,r=J.L(s)
return r.a9(s,r.gm(s)-1-b)}}
A.jz.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
P(a,b){if(b==null)return!1
return b instanceof A.jz&&this.a===b.a}}
A.ko.prototype={}
A.a5.prototype={$r:"+(1,2)",$s:1}
A.k6.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.k7.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hN.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.oK.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.f4.prototype={$r:"+(1,2,3)",$s:7}
A.f5.prototype={$r:"+(1,2,3,4)",$s:8}
A.oL.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.it.prototype={}
A.fy.prototype={
ca(a,b,c){var s=A.n(this)
return A.Em(this,s.c,s.y[1],b,c)},
gF(a){return this.gm(this)===0},
gY(a){return this.gm(this)!==0},
l(a){return A.v_(this)},
j(a,b,c){A.I1()},
ga7(){return new A.hS(this.v_(),A.n(this).i("hS<S<1,2>>"))},
v_(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$ga7(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gK(),o=o.gu(o),n=A.n(s).i("S<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.S(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aU(a,b,c,d){var s=A.u(c,d)
this.a8(0,new A.qJ(this,b,s))
return s},
$iJ:1}
A.qJ.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aX.prototype={
gm(a){return this.b.length},
glL(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a8(a,b){var s,r,q=this.glL(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.f1(this.glL(),this.$ti.i("f1<1>"))},
gaY(){return new A.f1(this.b,this.$ti.i("f1<2>"))}}
A.f1.prototype={
gm(a){return this.a.length},
gF(a){return 0===this.a.length},
gY(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.hI(s,s.length,this.$ti.i("hI<1>"))}}
A.hI.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iG.prototype={
dK(){var s=this,r=s.$map
if(r==null){r=new A.iP(s.$ti.i("iP<1,2>"))
A.Gu(s.a,r)
s.$map=r}return r},
I(a){return this.dK().I(a)},
h(a,b){return this.dK().h(0,b)},
a8(a,b){this.dK().a8(0,b)},
gK(){var s=this.dK()
return new A.T(s,A.n(s).i("T<1>"))},
gaY(){var s=this.dK()
return new A.al(s,A.n(s).i("al<2>"))},
gm(a){return this.dK().a}}
A.iu.prototype={
t(a,b){A.I2()}}
A.dz.prototype={
gm(a){return this.b},
gF(a){return this.b===0},
gY(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hI(s,s.length,r.$ti.i("hI<1>"))},
D(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.tx.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.iK&&this.a.P(0,b.a)&&A.Do(this)===A.Do(b)},
gJ(a){return A.c4(this.a,A.Do(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bJ(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iK.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.MW(A.pm(this.a),this.$ti)}}
A.w7.prototype={
$0(){return B.x.vd(1000*this.a.now())},
$S:11}
A.jo.prototype={}
A.xL.prototype={
bS(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.jd.prototype={
l(a){return"Null check operator used on a null value"}}
A.mb.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.nN.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mB.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iG:1}
A.iz.prototype={}
A.k9.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaG:1}
A.ek.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.GR(r==null?"unknown":r)+"'"},
gaj(a){var s=A.pm(this)
return A.bJ(s==null?A.bi(this):s)},
gyb(){return this},
$C:"$1",
$R:1,
$D:null}
A.q5.prototype={$C:"$0",$R:0}
A.q6.prototype={$C:"$2",$R:2}
A.xB.prototype={}
A.x9.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.GR(s)+"'"}}
A.il.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.il))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.kz(this.a)^A.eF(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mM(this.a)+"'")}}
A.n3.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bD.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gY(a){return this.a!==0},
gK(){return new A.T(this,A.n(this).i("T<1>"))},
gaY(){return new A.al(this,A.n(this).i("al<2>"))},
ga7(){return new A.aK(this,A.n(this).i("aK<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.n_(a)},
n_(a){var s=this.d
if(s==null)return!1
return this.dh(this.lF(s,a),a)>=0},
E(a,b){b.a8(0,new A.tE(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.n0(b)},
n0(a){var s,r,q=this.d
if(q==null)return null
s=this.lF(q,a)
r=this.dh(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.l3(s==null?q.b=q.ju():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.l3(r==null?q.c=q.ju():r,b,c)}else q.n2(b,c)},
n2(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.ju()
s=p.ec(a)
r=o[s]
if(r==null)o[s]=[p.iW(a,b)]
else{q=p.dh(r,a)
if(q>=0)r[q].b=b
else r.push(p.iW(a,b))}},
nf(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
G(a,b){var s=this
if(typeof b=="string")return s.m5(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.m5(s.c,b)
else return s.n1(b)},
n1(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ec(a)
r=n[s]
q=o.dh(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mo(p)
if(r.length===0)delete n[s]
return p.b},
am(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iV()}},
a8(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aA(s))
r=r.c}},
l3(a,b,c){var s=a[b]
if(s==null)a[b]=this.iW(b,c)
else s.b=c},
m5(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mo(s)
delete a[b]
return s.b},
iV(){this.r=this.r+1&1073741823},
iW(a,b){var s,r=this,q=new A.uJ(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iV()
return q},
mo(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iV()},
ec(a){return J.a7(a)&1073741823},
lF(a,b){return a[this.ec(b)]},
dh(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.v_(this)},
ju(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.tE.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.uJ.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bE(s,s.r,s.e,this.$ti.i("bE<1>"))},
D(a,b){return this.a.I(b)}}
A.bE.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.al.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gu(a){var s=this.a
return new A.aT(s,s.r,s.e,this.$ti.i("aT<1>"))}}
A.aT.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aK.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gu(a){var s=this.a
return new A.mj(s,s.r,s.e,this.$ti.i("mj<1,2>"))}}
A.mj.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.S(s.a,s.b,r.$ti.i("S<1,2>"))
r.c=s.c
return!0}}}
A.iQ.prototype={
ec(a){return A.kz(a)&1073741823},
dh(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iP.prototype={
ec(a){return A.Mp(a)&1073741823},
dh(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.BG.prototype={
$1(a){return this.a(a)},
$S:32}
A.BH.prototype={
$2(a,b){return this.a(a,b)},
$S:221}
A.BI.prototype={
$1(a){return this.a(a)},
$S:67}
A.hM.prototype={
gaj(a){return A.bJ(this.lG())},
lG(){return A.MF(this.$r,this.hc())},
l(a){return this.mm(!1)},
mm(a){var s,r,q,p,o,n=this.q7(),m=this.hc(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Ex(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
q7(){var s,r=this.$s
while($.A7.length<=r)$.A7.push(null)
s=$.A7[r]
if(s==null){s=this.pB()
$.A7[r]=s}return s},
pB(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.Ef(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fO(j,k)}}
A.oH.prototype={
hc(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.oH&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gJ(a){return A.c4(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.oI.prototype={
hc(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.oI&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gJ(a){var s=this
return A.c4(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.oJ.prototype={
hc(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.oJ&&this.$s===b.$s&&A.Kj(this.a,b.a)},
gJ(a){return A.c4(this.$s,A.vr(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.ew.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glS(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.Cp(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqM(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.Cp(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pC(){var s,r=this.a
if(!B.a.D(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
e9(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hL(s)},
jS(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.o7(this,b,c)},
hE(a,b){return this.jS(0,b,0)},
q4(a,b){var s,r=this.glS()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hL(s)},
q3(a,b){var s,r=this.gqM()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hL(s)},
eh(a,b,c){if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,null,null))
return this.q3(b,c)}}
A.hL.prototype={
gR(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieA:1,
$imW:1}
A.o7.prototype={
gu(a){return new A.o8(this.a,this.b,this.c)}}
A.o8.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.q4(l,s)
if(p!=null){m.d=p
o=p.gN()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.hk.prototype={
gN(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.wM(b,null))
return this.c},
$ieA:1,
gR(){return this.a}}
A.oX.prototype={
gu(a){return new A.At(this.a,this.b,this.c)},
gH(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hk(r,s)
throw A.b(A.aE())}}
A.At.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hk(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.og.prototype={
bb(){var s=this.b
if(s===this)throw A.b(new A.dG("Local '"+this.a+"' has not been initialized."))
return s},
bv(){var s=this.b
if(s===this)throw A.b(A.El(this.a))
return s},
shY(a){var s=this
if(s.b!==s)throw A.b(new A.dG("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fV.prototype={
gaj(a){return B.dE},
hG(a,b,c){A.hZ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mA(a){return this.hG(a,0,null)},
mz(a,b,c){A.hZ(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hF(a,b,c){A.hZ(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
my(a){return this.hF(a,0,null)},
$iak:1,
$ieg:1}
A.fU.prototype={$ifU:1}
A.j8.prototype={
gab(a){if(((a.$flags|0)&2)!==0)return new A.p4(a.buffer)
else return a.buffer},
qC(a,b,c,d){var s=A.ax(b,0,c,d,null)
throw A.b(s)},
le(a,b,c,d){if(b>>>0!==b||b>c)this.qC(a,b,c,d)}}
A.p4.prototype={
hG(a,b,c){var s=A.bS(this.a,b,c)
s.$flags=3
return s},
mA(a){return this.hG(0,0,null)},
mz(a,b,c){var s=A.Eq(this.a,b,c)
s.$flags=3
return s},
hF(a,b,c){var s=A.Ep(this.a,b,c)
s.$flags=3
return s},
my(a){return this.hF(0,0,null)},
$ieg:1}
A.j7.prototype={
gaj(a){return B.dF},
$iak:1,
$iC8:1}
A.fW.prototype={
gm(a){return a.length},
mf(a,b,c,d,e){var s,r,q=a.length
this.le(a,b,q,"start")
this.le(a,c,q,"end")
if(b>c)throw A.b(A.ax(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.P(e,null))
r=d.length
if(r-e<s)throw A.b(A.A("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibc:1,
$ibQ:1}
A.dO.prototype={
h(a,b){A.dn(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
A.dn(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.dQ.b(d)){this.mf(a,b,c,d,e)
return}this.l0(a,b,c,d,e)},
aw(a,b,c,d){return this.ah(a,b,c,d,0)},
$iK:1,
$io:1,
$iq:1}
A.bR.prototype={
j(a,b,c){a.$flags&2&&A.H(a)
A.dn(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.aj.b(d)){this.mf(a,b,c,d,e)
return}this.l0(a,b,c,d,e)},
aw(a,b,c,d){return this.ah(a,b,c,d,0)},
$iK:1,
$io:1,
$iq:1}
A.mu.prototype={
gaj(a){return B.dG},
U(a,b,c){return new Float32Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$irT:1}
A.mv.prototype={
gaj(a){return B.dH},
U(a,b,c){return new Float64Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$irU:1}
A.mw.prototype={
gaj(a){return B.dI},
h(a,b){A.dn(b,a,a.length)
return a[b]},
U(a,b,c){return new Int16Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$ity:1}
A.mx.prototype={
gaj(a){return B.dJ},
h(a,b){A.dn(b,a,a.length)
return a[b]},
U(a,b,c){return new Int32Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$itz:1}
A.my.prototype={
gaj(a){return B.dK},
h(a,b){A.dn(b,a,a.length)
return a[b]},
U(a,b,c){return new Int8Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$itA:1}
A.j9.prototype={
gaj(a){return B.dO},
h(a,b){A.dn(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint16Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$ixN:1}
A.ja.prototype={
gaj(a){return B.dP},
h(a,b){A.dn(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint32Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$ixO:1}
A.jb.prototype={
gaj(a){return B.dQ},
gm(a){return a.length},
h(a,b){A.dn(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$ixP:1}
A.eB.prototype={
gaj(a){return B.dR},
gm(a){return a.length},
h(a,b){A.dn(b,a,a.length)
return a[b]},
U(a,b,c){return new Uint8Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.U(a,b,null)},
$iak:1,
$ieB:1,
$icR:1}
A.k2.prototype={}
A.k3.prototype={}
A.k4.prototype={}
A.k5.prototype={}
A.cp.prototype={
i(a){return A.ki(v.typeUniverse,this,a)},
X(a){return A.Fk(v.typeUniverse,this,a)}}
A.ou.prototype={}
A.p1.prototype={
l(a){return A.bW(this.a,null)}}
A.or.prototype={
l(a){return this.a}}
A.ke.prototype={$idf:1}
A.ys.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:26}
A.yr.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:213}
A.yt.prototype={
$0(){this.a.$0()},
$S:2}
A.yu.prototype={
$0(){this.a.$0()},
$S:2}
A.kd.prototype={
oY(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.eb(new A.Ax(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oZ(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.eb(new A.Aw(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
C(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$ide:1}
A.Ax.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.Aw.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.iT(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.jH.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aD(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.ld(a)
else s.cZ(a)}},
bP(a,b){var s
if(b==null)b=A.ig(a)
s=this.a
if(this.b)s.al(new A.an(a,b))
else s.cq(new A.an(a,b))},
aS(a){return this.bP(a,null)},
$iir:1}
A.AX.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.AY.prototype={
$2(a,b){this.a.$2(1,new A.iz(a,b))},
$S:82}
A.Bf.prototype={
$2(a,b){this.a(a,b)},
$S:100}
A.AV.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.v()
s=q.b
if((s&1)!==0?(q.gaN().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.AW.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:26}
A.oa.prototype={
oU(a,b){var s=new A.yw(a)
this.a=A.xb(new A.yy(this,a),new A.yz(s),new A.yA(this,s),!1,b)}}
A.yw.prototype={
$0(){A.kC(new A.yx(this.a))},
$S:2}
A.yx.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.yz.prototype={
$0(){this.a.$0()},
$S:0}
A.yA.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.yy.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.v()
if((r.b&4)===0){s.c=new A.w($.D,t._)
if(s.b){s.b=!1
A.kC(new A.yv(this.b))}return s.c}},
$S:133}
A.yv.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jZ.prototype={
l(a){return"IterationMarker("+this.b+", "+A.p(this.a)+")"}}
A.oZ.prototype={
gn(){return this.b},
rK(a,b){var s,r,q
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
o.d=null}q=o.rK(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Fe
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Fe
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.A("sync*"))}return!1},
yc(a){var s,r,q=this
if(a instanceof A.hS){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hS.prototype={
gu(a){return new A.oZ(this.a(),this.$ti.i("oZ<1>"))}}
A.an.prototype={
l(a){return A.p(this.a)},
$iae:1,
gcp(){return this.b}}
A.b1.prototype={}
A.eW.prototype={
bJ(){},
bK(){}}
A.jN.prototype={
gcW(){return new A.b1(this,A.n(this).i("b1<1>"))},
gic(){return(this.c&4)!==0},
gjs(){return this.c<4},
rH(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.F5(c,A.n(j).c)
s=A.n(j)
r=$.D
q=d?1:0
p=b!=null?32:0
o=A.oe(r,a,s.c)
n=A.yH(r,b)
m=c==null?A.Bg():c
l=new A.eW(j,o,n,r.bV(m,t.H),r,q|p,s.i("eW<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.pi(j.a)
return l},
m_(a){var s,r=this
A.n(r).i("eW<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.rH(a)
if((r.c&2)===0&&r.d==null)r.po()}return null},
m0(a){},
m1(a){},
iY(){if((this.c&4)!==0)return new A.bn("Cannot add new events after calling close")
return new A.bn("Cannot add new events while doing an addStream")},
t(a,b){if(!this.gjs())throw A.b(this.iY())
this.cz(b)},
by(a,b){var s
if(!this.gjs())throw A.b(this.iY())
s=A.f9(a,b)
this.cA(s.a,s.b)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjs())throw A.b(q.iY())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.D,t.D)
q.d7()
return r},
aI(a,b){this.cA(a,b)},
aR(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aD(null)},
po(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aD(null)}A.pi(this.b)},
$ibC:1}
A.jI.prototype={
cz(a){var s,r
for(s=this.d,r=this.$ti.i("c9<1>");s!=null;s=s.ch)s.c0(new A.c9(a,r))},
cA(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.c0(new A.hD(a,b))},
d7(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.c0(B.ab)
else this.r.aD(null)}}
A.t2.prototype={
$0(){this.c.a(null)
this.b.cr(null)},
$S:0}
A.t4.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.al(new A.an(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.al(new A.an(q,r))}},
$S:13}
A.t3.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.cY(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.j([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aO(s,n)}m.c.cZ(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.al(new A.an(s,l))}},
$S(){return this.d.i("U(0)")}}
A.rY.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(k,aG)")}}
A.nD.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iG:1}
A.rZ.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.j([],l.c.i("z<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aB(s)}else{s=A.j([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.push(r[p].c)
q=l.c
n=A.j([],q.i("z<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.r)(r),++p)n.push(r[p].b)
l.a.aS(new A.jg(B.b.mU(s,A.M2()),a,q.i("jg<q<0?>,q<an?>>")))}},
$S:9}
A.jg.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.p(p.a)},
gcp(){var s=this.c
s=s==null?null:s.b
return s==null?A.ae.prototype.gcp.call(this):s}}
A.jX.prototype={
tq(a){this.a.bg(new A.zt(this,a),new A.zu(this,a),t.P)}}
A.zt.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("U(1)")}}
A.zu.prototype={
$2(a,b){this.a.c=new A.an(a,b)
this.b.$1(1)},
$S:7}
A.zs.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:9}
A.eX.prototype={
bP(a,b){if((this.a.a&30)!==0)throw A.b(A.A("Future already completed"))
this.al(A.f9(a,b))},
aS(a){return this.bP(a,null)},
$iir:1}
A.aJ.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.aD(a)},
an(){return this.aB(null)},
al(a){this.a.cq(a)}}
A.ap.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.cr(a)},
an(){return this.aB(null)},
al(a){this.a.al(a)}}
A.ca.prototype={
w4(a){if((this.c&15)!==6)return!0
return this.b.b.er(this.d,a.a,t.y,t.K)},
vr(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kB(r,n,a.b,p,o,t.l)
else q=m.er(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.C(s))){if((this.c&1)!==0)throw A.b(A.P("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.P("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
bg(a,b,c){var s,r,q=$.D
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.az(b,"onError",u.w))}else{a=q.dm(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.FX(b,q)}s=new A.w($.D,c.i("w<0>"))
r=b==null?1:3
this.dE(new A.ca(s,r,a,b,this.$ti.i("@<1>").X(c).i("ca<1,2>")))
return s},
W(a,b){return this.bg(a,null,b)},
mk(a,b,c){var s=new A.w($.D,c.i("w<0>"))
this.dE(new A.ca(s,19,a,b,this.$ti.i("@<1>").X(c).i("ca<1,2>")))
return s},
jV(a){var s=this.$ti,r=$.D,q=new A.w(r,s)
if(r!==B.i)a=A.FX(a,r)
this.dE(new A.ca(q,2,null,a,s.i("ca<1,1>")))
return q},
aZ(a){var s=this.$ti,r=$.D,q=new A.w(r,s)
if(r!==B.i)a=r.bV(a,t.z)
this.dE(new A.ca(q,8,a,null,s.i("ca<1,1>")))
return q},
rZ(a){this.a=this.a&1|16
this.c=a},
h0(a){this.a=a.a&30|this.a&1
this.c=a.c},
dE(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dE(a)
return}s.h0(r)}s.b.cT(new A.zv(s,a))}},
lY(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lY(a)
return}n.h0(s)}m.a=n.ho(a)
n.b.cT(new A.zA(m,n))}},
eQ(){var s=this.c
this.c=null
return this.ho(s)},
ho(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cr(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.zy(a,r,!0)
else{s=r.eQ()
r.a=8
r.c=a
A.f_(r,s)}},
cZ(a){var s=this,r=s.eQ()
s.a=8
s.c=a
A.f_(s,r)},
pA(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gcc()===r.gcc())}else s=!1
if(s)return
q=p.eQ()
p.h0(a)
A.f_(p,q)},
al(a){var s=this.eQ()
this.rZ(a)
A.f_(this,s)},
pz(a,b){this.al(new A.an(a,b))},
aD(a){if(this.$ti.i("y<1>").b(a)){this.ld(a)
return}this.la(a)},
la(a){this.a^=2
this.b.cT(new A.zx(this,a))},
ld(a){A.zy(a,this,!1)
return},
cq(a){this.a^=2
this.b.cT(new A.zw(this,a))},
fG(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.D,r.$ti)
q.aD(r)
return q}s=new A.w($.D,r.$ti)
q.a=null
q.a=A.cQ(a,new A.zG(s,a))
r.bg(new A.zH(q,r,s),new A.zI(q,s),t.P)
return s},
$iy:1}
A.zv.prototype={
$0(){A.f_(this.a,this.b)},
$S:0}
A.zA.prototype={
$0(){A.f_(this.b,this.a.a)},
$S:0}
A.zz.prototype={
$0(){A.zy(this.a.a,this.b,!0)},
$S:0}
A.zx.prototype={
$0(){this.a.cZ(this.b)},
$S:0}
A.zw.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.zD.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aW(q.d,t.z)}catch(p){s=A.C(p)
r=A.ad(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ig(q)
n=k.a
n.c=new A.an(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.bg(new A.zE(l,m),new A.zF(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.zE.prototype={
$1(a){this.a.pA(this.b)},
$S:26}
A.zF.prototype={
$2(a,b){this.a.al(new A.an(a,b))},
$S:7}
A.zC.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.er(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.C(n)
r=A.ad(n)
q=s
p=r
if(p==null)p=A.ig(q)
o=this.a
o.c=new A.an(q,p)
o.b=!0}},
$S:0}
A.zB.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.w4(s)&&p.a.e!=null){p.c=p.a.vr(s)
p.b=!1}}catch(o){r=A.C(o)
q=A.ad(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ig(p)
m=l.b
m.c=new A.an(p,n)
p=m}p.b=!0}},
$S:0}
A.zG.prototype={
$0(){var s=A.CI()
this.a.al(new A.an(new A.nD("Future not completed",this.b),s))},
$S:0}
A.zH.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.C()
this.c.cZ(a)}},
$S(){return this.b.$ti.i("U(1)")}}
A.zI.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.C()
this.b.al(new A.an(a,b))}},
$S:7}
A.o9.prototype={}
A.a9.prototype={
ed(a){var s=new A.w($.D,t.os),r=new A.a3(""),q=this.aa(null,!0,new A.xe(s,r),s.gj4())
q.im(new A.xf(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.D,t.hy)
s.a=0
this.aa(new A.xg(s,this),!0,new A.xh(s,r),r.gj4())
return r},
gH(a){var s=new A.w($.D,A.n(this).i("w<a9.T>")),r=this.aa(null,!0,new A.xc(s),s.gj4())
r.im(new A.xd(this,r,s))
return s}}
A.xe.prototype={
$0(){var s=this.b.a
this.a.cr(s.charCodeAt(0)==0?s:s)},
$S:0}
A.xf.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.p(a)
q.a+=p}catch(o){s=A.C(o)
r=A.ad(o)
q=s
p=r
n=A.kp(q,p)
if(n==null)q=new A.an(q,p)
else q=n
A.KP(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(a9.T)")}}
A.xg.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(a9.T)")}}
A.xh.prototype={
$0(){this.b.cr(this.a.a)},
$S:0}
A.xc.prototype={
$0(){var s,r=A.CI(),q=new A.bn("No element")
A.mO(q,r)
s=A.kp(q,r)
if(s==null)s=new A.an(q,r)
this.a.al(s)},
$S:0}
A.xd.prototype={
$1(a){A.KQ(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(a9.T)")}}
A.jw.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bA(a,b,c){return this.aa(a,null,b,c)},
aT(a){return this.aa(a,null,null,null)}}
A.e5.prototype={
gcW(){return new A.b7(this,A.n(this).i("b7<1>"))},
gic(){return(this.b&4)!==0},
gr7(){if((this.b&8)===0)return this.a
return this.a.c},
h5(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e4(A.n(q).i("e4<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e4(A.n(q).i("e4<1>")):s},
gaN(){var s=this.a
return(this.b&8)!==0?s.c:s},
bG(){if((this.b&4)!==0)return new A.bn("Cannot add event after closing")
return new A.bn("Cannot add event while adding a stream")},
tJ(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bG())
if((o&2)!==0){o=new A.w($.D,t._)
o.aD(null)
return o}o=p.a
s=b===!0
r=new A.w($.D,t._)
q=s?A.JH(p):p.gp6()
q=a.aa(p.gpa(),s,p.gpq(),q)
s=p.b
if((s&1)!==0?(p.gaN().e&4)!==0:(s&2)===0)q.bf()
p.a=new A.ka(o,r,q,A.n(p).i("ka<1>"))
p.b|=8
return r},
lw(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.ed():new A.w($.D,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bG())
this.aA(b)},
by(a,b){var s
if(this.b>=4)throw A.b(this.bG())
s=A.f9(a,b)
this.aI(s.a,s.b)},
tI(a){return this.by(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lw()
if(r>=4)throw A.b(s.bG())
s.lf()
return s.lw()},
lf(){var s=this.b|=4
if((s&1)!==0)this.d7()
else if((s&3)===0)this.h5().t(0,B.ab)},
aA(a){var s=this,r=s.b
if((r&1)!==0)s.cz(a)
else if((r&3)===0)s.h5().t(0,new A.c9(a,A.n(s).i("c9<1>")))},
aI(a,b){var s=this.b
if((s&1)!==0)this.cA(a,b)
else if((s&3)===0)this.h5().t(0,new A.hD(a,b))},
aR(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aD(null)},
jK(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.A("Stream has already been listened to."))
s=A.JZ(p,a,b,c,d,A.n(p).c)
r=p.gr7()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b1()}else p.a=s
s.t_(r)
s.jh(new A.Ap(p))
return s},
m_(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.C()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.C(o)
p=A.ad(o)
n=new A.w($.D,t.D)
n.cq(new A.an(q,p))
k=n}else k=k.aZ(s)
m=new A.Ao(l)
if(k!=null)k=k.aZ(m)
else m.$0()
return k},
m0(a){if((this.b&8)!==0)this.a.b.bf()
A.pi(this.e)},
m1(a){if((this.b&8)!==0)this.a.b.b1()
A.pi(this.f)},
$ibC:1}
A.Ap.prototype={
$0(){A.pi(this.a.d)},
$S:0}
A.Ao.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aD(null)},
$S:0}
A.p_.prototype={
cz(a){this.gaN().aA(a)},
cA(a,b){this.gaN().aI(a,b)},
d7(){this.gaN().aR()}}
A.jJ.prototype={
cz(a){this.gaN().c0(new A.c9(a,A.n(this).i("c9<1>")))},
cA(a,b){this.gaN().c0(new A.hD(a,b))},
d7(){this.gaN().c0(B.ab)}}
A.cV.prototype={}
A.hT.prototype={}
A.b7.prototype={
gJ(a){return(A.eF(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b7&&b.a===this.a}}
A.e0.prototype={
hh(){return this.w.m_(this)},
bJ(){this.w.m0(this)},
bK(){this.w.m1(this)}}
A.o6.prototype={
C(){var s=this.b.C()
return s.aZ(new A.yn(this))}}
A.yo.prototype={
$2(a,b){var s=this.a
s.aI(a,b)
s.aR()},
$S:7}
A.yn.prototype={
$0(){this.a.a.aD(null)},
$S:2}
A.ka.prototype={}
A.b2.prototype={
t_(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fR(s)}},
im(a){this.a=A.oe(this.d,a,A.n(this).i("b2.T"))},
bf(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jh(q.geH())},
b1(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fR(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jh(s.geI())}}},
C(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.j0()
r=s.f
return r==null?$.ed():r},
j0(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hh()},
aA(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cz(a)
else s.c0(new A.c9(a,A.n(s).i("c9<b2.T>")))},
aI(a,b){var s
if(t.C.b(a))A.mO(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cA(a,b)
else this.c0(new A.hD(a,b))},
aR(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d7()
else s.c0(B.ab)},
bJ(){},
bK(){},
hh(){return null},
c0(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e4(A.n(r).i("e4<b2.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fR(r)}},
cz(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fF(s.a,a,A.n(s).i("b2.T"))
s.e=(s.e&4294967231)>>>0
s.j2((r&4)!==0)},
cA(a,b){var s,r=this,q=r.e,p=new A.yJ(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.j0()
s=r.f
if(s!=null&&s!==$.ed())s.aZ(p)
else p.$0()}else{p.$0()
r.j2((q&4)!==0)}},
d7(){var s,r=this,q=new A.yI(r)
r.j0()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.ed())s.aZ(q)
else q.$0()},
jh(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.j2((r&4)!==0)},
j2(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bJ()
else q.bK()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fR(q)},
$ibo:1}
A.yJ.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.no(s,o,this.c,r,t.l)
else q.fF(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.yI.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fE(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hR.prototype={
aa(a,b,c,d){return this.a.jK(a,d,c,b===!0)},
bA(a,b,c){return this.aa(a,null,b,c)},
aT(a){return this.aa(a,null,null,null)},
n4(a,b){return this.aa(a,null,null,b)}}
A.oq.prototype={
gei(){return this.a},
sei(a){return this.a=a}}
A.c9.prototype={
kv(a){a.cz(this.b)}}
A.hD.prototype={
kv(a){a.cA(this.b,this.c)}}
A.zl.prototype={
kv(a){a.d7()},
gei(){return null},
sei(a){throw A.b(A.A("No events after a done."))}}
A.e4.prototype={
fR(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kC(new A.A6(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sei(b)
s.c=b}}}
A.A6.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gei()
q.b=r
if(r==null)q.c=null
s.kv(this.b)},
$S:0}
A.hE.prototype={
im(a){},
bf(){var s=this.a
if(s>=0)this.a=s+2},
b1(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kC(s.glU())}else s.a=r},
C(){this.a=-1
this.c=null
return $.ed()},
r_(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fE(s)}}else r.a=q},
$ibo:1}
A.cy.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.D,t.g5)
r.b=s
r.c=!1
q.b1()
return s}throw A.b(A.A("Already waiting for next."))}return r.qB()},
qB(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.D,t.g5)
q.b=s
r=p.aa(q.gqS(),!0,q.gqU(),q.gqW())
if(q.b!=null)q.a=r
return s}return $.GX()},
C(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aD(!1)
else s.c=!1
return r.C()}return $.ed()},
qT(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cr(!0)
if(q.c){r=q.a
if(r!=null)r.bf()}},
qX(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.al(new A.an(a,b))
else q.cq(new A.an(a,b))},
qV(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cZ(!1)
else q.la(!1)}}
A.jS.prototype={
aa(a,b,c,d){return A.F5(c,this.$ti.c)},
bA(a,b,c){return this.aa(a,null,b,c)}}
A.dl.prototype={
aa(a,b,c,d){var s=null,r=new A.k1(s,s,s,s,this.$ti.i("k1<1>"))
r.d=new A.A4(this,r)
return r.jK(a,d,c,b===!0)},
bA(a,b,c){return this.aa(a,null,b,c)},
aT(a){return this.aa(a,null,null,null)}}
A.A4.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.k1.prototype={
tK(a){var s=this.b
if(s>=4)throw A.b(this.bG())
if((s&1)!==0)this.gaN().aA(a)},
u_(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bG())
r|=4
s.b=r
if((r&1)!==0)s.gaN().aR()},
gcW(){throw A.b(A.Y("Not available"))},
$idM:1}
A.B_.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.B0.prototype={
$0(){return this.a.cr(this.b)},
$S:0}
A.jV.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.D,q=b===!0?1:0,p=d!=null?32:0,o=A.oe(r,a,s.y[1]),n=A.yH(r,d),m=c==null?A.Bg():c
s=new A.hH(this,o,n,r.bV(m,t.H),r,q|p,s.i("hH<1,2>"))
s.x=this.a.bA(s.gji(),s.gjk(),s.gjm())
return s},
bA(a,b,c){return this.aa(a,null,b,c)}}
A.hH.prototype={
aA(a){if((this.e&2)!==0)return
this.iS(a)},
aI(a,b){if((this.e&2)!==0)return
this.l1(a,b)},
bJ(){var s=this.x
if(s!=null)s.bf()},
bK(){var s=this.x
if(s!=null)s.b1()},
hh(){var s=this.x
if(s!=null){this.x=null
return s.C()}return null},
jj(a){this.w.qn(a,this)},
jn(a,b){this.aI(a,b)},
jl(){this.aR()}}
A.f2.prototype={
qn(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.C(q)
r=A.ad(q)
p=s
o=r
n=A.kp(p,o)
if(n!=null){p=n.a
o=n.b}b.aI(p,o)
return}b.aA(m)}}
A.jT.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.t(A.A("Stream is already closed"))
s.iS(b)},
by(a,b){this.a.aI(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.t(A.A("Stream is already closed"))
s.l2()},
$ibC:1}
A.hP.prototype={
aA(a){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.iS(a)},
aI(a,b){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.l1(a,b)},
aR(){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.l2()},
bJ(){var s=this.x
if(s!=null)s.bf()},
bK(){var s=this.x
if(s!=null)s.b1()},
hh(){var s=this.x
if(s!=null){this.x=null
return s.C()}return null},
jj(a){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.t(0,a)}catch(p){s=A.C(p)
r=A.ad(p)
this.aI(s,r)}},
jn(a,b){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.by(a,b)}catch(p){s=A.C(p)
r=A.ad(p)
if(s===a)this.aI(a,b)
else this.aI(s,r)}},
jl(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.v()
q.q()}catch(p){s=A.C(p)
r=A.ad(p)
this.aI(s,r)}}}
A.jM.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.D,q=b===!0?1:0,p=d!=null?32:0,o=A.oe(r,a,s.y[1]),n=A.yH(r,d),m=c==null?A.Bg():c,l=new A.hP(o,n,r.bV(m,t.H),r,q|p,s.i("hP<1,2>"))
l.w=this.a.$1(new A.jT(l,s.i("jT<2>")))
l.x=this.b.bA(l.gji(),l.gjk(),l.gjm())
return l},
bA(a,b,c){return this.aa(a,null,b,c)}}
A.AS.prototype={}
A.AU.prototype={}
A.AT.prototype={}
A.AQ.prototype={}
A.AR.prototype={}
A.AP.prototype={}
A.AM.prototype={}
A.pa.prototype={}
A.AL.prototype={}
A.AK.prototype={}
A.AO.prototype={}
A.AN.prototype={}
A.p9.prototype={
vj(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.pb.prototype={}
A.p8.prototype={
eM(a,b,c){var s,r,q,p,o,n,m=this.gjp(),l=m.a
if(l===B.i){A.ku(b,c)
return}o=l.gks()
o.toString
s=o
r=$.D
try{$.D=s
m.vj(l,l.gb8(),a,b,c)
$.D=r}catch(n){q=A.C(n)
p=A.ad(n)
$.D=r
o=b===q?c:p
s.eM(l,q,o)}},
$iO:1}
A.ok.prototype={
glt(){var s=this.ax
return s==null?this.ax=new A.hX(this):s},
gb8(){return this.ay.glt()},
gcc(){return this.as.a},
fE(a){var s,r,q
try{this.aW(a,t.H)}catch(q){s=A.C(q)
r=A.ad(q)
this.eM(this,s,r)}},
fF(a,b,c){var s,r,q
try{this.er(a,b,t.H,c)}catch(q){s=A.C(q)
r=A.ad(q)
this.eM(this,s,r)}},
no(a,b,c,d,e){var s,r,q
try{this.kB(a,b,c,t.H,d,e)}catch(q){s=A.C(q)
r=A.ad(q)
this.eM(this,s,r)}},
jU(a,b){return new A.zh(this,this.bV(a,b),b)},
tW(a,b,c){return new A.zj(this,this.dm(a,b,c),c,b)},
eZ(a){return new A.zg(this,this.bV(a,t.H))},
hJ(a,b){return new A.zi(this,this.dm(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aO)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.rE(q,b)},
rE(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gks().gjR()
if(s===B.aO)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
ff(a,b){this.eM(this,a,b)},
mV(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
aW(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
er(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb8(),this,a,b,c,d)},
kB(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb8(),this,a,b,c,d,e,f)},
bV(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
dm(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb8(),this,a,b,c)},
fz(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb8(),this,a,b,c,d)},
mR(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb8(),this,a,b)},
cT(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb8(),this,a)},
k_(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
jZ(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
gm7(){return this.a},
gmb(){return this.b},
gm9(){return this.c},
gm3(){return this.d},
gm4(){return this.e},
gm2(){return this.f},
gly(){return this.r},
gjH(){return this.w},
glq(){return this.x},
glp(){return this.y},
glZ(){return this.z},
glD(){return this.Q},
gjp(){return this.as},
gjR(){return this.at},
gks(){return this.ay}}
A.zh.prototype={
$0(){return this.a.aW(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.zj.prototype={
$1(a){var s=this
return s.a.er(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").X(this.c).i("1(2)")}}
A.zg.prototype={
$0(){return this.a.fE(this.b)},
$S:0}
A.zi.prototype={
$1(a){return this.a.fF(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.oO.prototype={
gm7(){return B.e6},
gmb(){return B.e5},
gm9(){return B.e4},
gm3(){return B.e2},
gm4(){return B.e3},
gm2(){return B.e1},
gly(){return B.dY},
gjH(){return B.e7},
glq(){return B.dX},
glp(){return B.dW},
glZ(){return B.e0},
glD(){return B.dZ},
gjp(){return B.e_},
gjR(){return B.aO},
gks(){return null},
glt(){var s=$.Ab
return s==null?$.Ab=new A.hX(this):s},
gb8(){var s=$.Ab
return s==null?$.Ab=new A.hX(this):s},
gcc(){return this},
fE(a){var s,r,q
try{if(B.i===$.D){a.$0()
return}A.Bb(null,null,this,a)}catch(q){s=A.C(q)
r=A.ad(q)
A.ku(s,r)}},
fF(a,b){var s,r,q
try{if(B.i===$.D){a.$1(b)
return}A.Bc(null,null,this,a,b)}catch(q){s=A.C(q)
r=A.ad(q)
A.ku(s,r)}},
no(a,b,c){var s,r,q
try{if(B.i===$.D){a.$2(b,c)
return}A.Dd(null,null,this,a,b,c)}catch(q){s=A.C(q)
r=A.ad(q)
A.ku(s,r)}},
jU(a,b){return new A.Ad(this,a,b)},
eZ(a){return new A.Ac(this,a)},
hJ(a,b){return new A.Ae(this,a,b)},
h(a,b){return null},
ff(a,b){A.ku(a,b)},
mV(a,b){return A.FZ(null,null,this,a,b)},
aW(a){if($.D===B.i)return a.$0()
return A.Bb(null,null,this,a)},
er(a,b){if($.D===B.i)return a.$1(b)
return A.Bc(null,null,this,a,b)},
kB(a,b,c){if($.D===B.i)return a.$2(b,c)
return A.Dd(null,null,this,a,b,c)},
bV(a){return a},
dm(a){return a},
fz(a){return a},
mR(a,b){return null},
cT(a){A.Bd(null,null,this,a)},
k_(a,b){return A.CQ(a,b)},
jZ(a,b){return A.EJ(a,b)}}
A.Ad.prototype={
$0(){return this.a.aW(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.Ac.prototype={
$0(){return this.a.fE(this.b)},
$S:0}
A.Ae.prototype={
$1(a){return this.a.fF(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hX.prototype={$iau:1}
A.Ba.prototype={
$0(){A.E2(this.a,this.b)},
$S:0}
A.jG.prototype={}
A.dj.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gY(a){return this.a!==0},
gK(){return new A.f0(this,A.n(this).i("f0<1>"))},
gaY(){var s=A.n(this)
return A.dK(new A.f0(this,s.i("f0<1>")),new A.zK(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ll(a)},
ll(a){var s=this.d
if(s==null)return!1
return this.c4(this.lh(s,a),a)>=0},
E(a,b){b.a8(0,new A.zJ(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.F7(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.F7(q,b)
return r}else return this.lE(b)},
lE(a){var s,r,q=this.d
if(q==null)return null
s=this.lh(q,a)
r=this.c4(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.l7(s==null?q.b=A.CZ():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.l7(r==null?q.c=A.CZ():r,b,c)}else q.me(b,c)},
me(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.CZ()
s=p.cs(a)
r=o[s]
if(r==null){A.D_(o,s,[a,b]);++p.a
p.e=null}else{q=p.c4(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a8(a,b){var s,r,q,p,o,n=this,m=n.lg()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aA(n))}},
lg(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.ab(i.a,null,!1,t.z)
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
l7(a,b,c){if(a[b]==null){++this.a
this.e=null}A.D_(a,b,c)},
cs(a){return J.a7(a)&1073741823},
lh(a,b){return a[this.cs(b)]},
c4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.zK.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.zJ.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.e1.prototype={
cs(a){return A.kz(a)&1073741823},
c4(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jP.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.oI(b)},
j(a,b,c){this.oJ(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.oH(a)},
cs(a){return this.r.$1(a)&1073741823},
c4(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.zf.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.f0.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gY(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.ov(s,s.lg(),this.$ti.i("ov<1>"))},
D(a,b){return this.a.I(b)}}
A.ov.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aA(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.k_.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.oB(b)},
j(a,b,c){this.oD(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.oA(a)},
G(a,b){if(!this.y.$1(b))return null
return this.oC(b)},
ec(a){return this.x.$1(a)&1073741823},
dh(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.A2.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.dk.prototype={
gu(a){var s=this,r=new A.e3(s,s.r,A.n(s).i("e3<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gF(a){return this.a===0},
gY(a){return this.a!==0},
D(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.pF(b)},
pF(a){var s=this.d
if(s==null)return!1
return this.c4(s[this.cs(a)],a)>=0},
gH(a){var s=this.e
if(s==null)throw A.b(A.A("No elements"))
return s.a},
ga1(a){var s=this.f
if(s==null)throw A.b(A.A("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.l6(s==null?q.b=A.D0():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.l6(r==null?q.c=A.D0():r,b)}else return q.p0(b)},
p0(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.D0()
s=q.cs(a)
r=p[s]
if(r==null)p[s]=[q.jv(a)]
else{if(q.c4(r,a)>=0)return!1
r.push(q.jv(a))}return!0},
G(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.li(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.li(s.c,b)
else return s.jE(b)},
jE(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cs(a)
r=n[s]
q=o.c4(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lj(p)
return!0},
l6(a,b){if(a[b]!=null)return!1
a[b]=this.jv(b)
return!0},
li(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lj(s)
delete a[b]
return!0},
jt(){this.r=this.r+1&1073741823},
jv(a){var s,r=this,q=new A.A3(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jt()
return q},
lj(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jt()},
cs(a){return J.a7(a)&1073741823},
c4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.A3.prototype={}
A.e3.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.uK.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:65}
A.ex.prototype={
D(a,b){return b instanceof A.b3&&this===b.a},
gu(a){var s=this
return new A.oC(s,s.a,s.c,s.$ti.i("oC<1>"))},
gm(a){return this.b},
am(a){var s,r,q,p=this;++p.a
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
gH(a){var s
if(this.b===0)throw A.b(A.A("No such element"))
s=this.c
s.toString
return s},
ga1(a){var s
if(this.b===0)throw A.b(A.A("No such element"))
s=this.c.c
s.toString
return s},
gap(a){var s=this.b
if(s===0)throw A.b(A.A("No such element"))
if(s>1)throw A.b(A.A("Too many elements"))
s=this.c
s.toString
return s},
gF(a){return this.b===0},
hf(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.A("LinkedListEntry is already in a LinkedList"));++q.a
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
jM(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.oC.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.aA(s))
if(r.b!==0)r=s.e&&s.d===r.gH(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.b3.prototype={
gfs(){var s=this.a
if(s==null||this===s.gH(0))return null
return this.c}}
A.I.prototype={
gu(a){return new A.ao(a,this.gm(a),A.bi(a).i("ao<I.E>"))},
a9(a,b){return this.h(a,b)},
gF(a){return this.gm(a)===0},
gY(a){return!this.gF(a)},
gH(a){if(this.gm(a)===0)throw A.b(A.aE())
return this.h(a,0)},
ga1(a){if(this.gm(a)===0)throw A.b(A.aE())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aE())
if(this.gm(a)>1)throw A.b(A.iL())
return this.h(a,0)},
D(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.aA(a))}return!1},
cG(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.aA(a))}return!0},
fb(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.aA(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.xi("",a,b)
return s.charCodeAt(0)==0?s:s},
dt(a,b){return new A.am(a,b,A.bi(a).i("am<I.E>"))},
ci(a,b,c){return new A.X(a,b,A.bi(a).i("@<I.E>").X(c).i("X<1,2>"))},
bl(a,b){return A.cu(a,b,null,A.bi(a).i("I.E"))},
cQ(a,b){return A.cu(a,0,A.cz(b,"count",t.S),A.bi(a).i("I.E"))},
bX(a,b){var s,r,q,p,o=this
if(o.gF(a)){s=J.Cn(0,A.bi(a).i("I.E"))
return s}r=o.h(a,0)
q=A.ab(o.gm(a),r,!0,A.bi(a).i("I.E"))
for(p=1;p<o.gm(a);++p)q[p]=o.h(a,p)
return q},
cR(a){return this.bX(a,!0)},
fH(a){var s,r=A.mk(A.bi(a).i("I.E"))
for(s=0;s<this.gm(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
f_(a,b){return new A.bN(a,A.bi(a).i("@<I.E>").X(b).i("bN<1,2>"))},
co(a,b){var s=b==null?A.Mm():b
A.nb(a,0,this.gm(a)-1,s)},
U(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.be(b,c,r)
s=A.Q(this.fQ(a,b,c),A.bi(a).i("I.E"))
return s},
b5(a,b){return this.U(a,b,null)},
fQ(a,b,c){A.be(b,c,this.gm(a))
return A.cu(a,b,c,A.bi(a).i("I.E"))},
kc(a,b,c,d){var s
A.be(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ah(a,b,c,d,e){var s,r,q,p,o
A.be(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bd(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.pA(d,e).bX(0,!1)
r=0}p=J.L(q)
if(r+s>p.gm(q))throw A.b(A.Ed())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
aw(a,b,c,d){return this.ah(a,b,c,d,0)},
cU(a,b,c){var s,r
if(t.j.b(c))this.aw(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.tC(a,"[","]")},
$iK:1,
$io:1,
$iq:1}
A.V.prototype={
ca(a,b,c){var s=A.n(this)
return A.Em(this,s.i("V.K"),s.i("V.V"),b,c)},
a8(a,b){var s,r,q,p
for(s=J.E(this.gK()),r=A.n(this).i("V.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga7(){return J.c_(this.gK(),new A.uZ(this),A.n(this).i("S<V.K,V.V>"))},
aU(a,b,c,d){var s,r,q,p,o,n=A.u(c,d)
for(s=J.E(this.gK()),r=A.n(this).i("V.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.C5(this.gK(),a)},
gm(a){return J.as(this.gK())},
gF(a){return J.bA(this.gK())},
gY(a){return J.ee(this.gK())},
gaY(){return new A.k0(this,A.n(this).i("k0<V.K,V.V>"))},
l(a){return A.v_(this)},
$iJ:1}
A.uZ.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("V.V").a(r)
return new A.S(a,r,A.n(s).i("S<V.K,V.V>"))},
$S(){return A.n(this.a).i("S<V.K,V.V>(V.K)")}}
A.v0.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:40}
A.k0.prototype={
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gY(a){var s=this.a
return s.gY(s)},
gH(a){var s=this.a
s=s.h(0,J.bY(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gap(a){var s=this.a
s=s.h(0,J.C6(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga1(a){var s=this.a
s=s.h(0,J.pz(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.oE(J.E(s.gK()),s,this.$ti.i("oE<1,2>"))}}
A.oE.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.p3.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iX.prototype={
ca(a,b,c){return this.a.ca(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a8(a,b){this.a.a8(0,b)},
gF(a){var s=this.a
return s.gF(s)},
gY(a){var s=this.a
return s.gY(s)},
gm(a){var s=this.a
return s.gm(s)},
gK(){return this.a.gK()},
l(a){return this.a.l(0)},
gaY(){return this.a.gaY()},
ga7(){return this.a.ga7()},
aU(a,b,c,d){return this.a.aU(0,b,c,d)},
$iJ:1}
A.cS.prototype={
ca(a,b,c){return new A.cS(this.a.ca(0,b,c),b.i("@<0>").X(c).i("cS<1,2>"))}}
A.iT.prototype={
gu(a){var s=this
return new A.oD(s,s.c,s.d,s.b,s.$ti.i("oD<1>"))},
gF(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gH(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aE())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga1(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aE())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gap(a){var s,r=this
if(r.b===r.c)throw A.b(A.aE())
if(r.gm(0)>1)throw A.b(A.iL())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a9(a,b){var s,r=this
A.Ec(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
G(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.jE(s);++r.d
return!0}return!1},
l(a){return A.tC(this,"{","}")},
jE(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.oD.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.t(A.aA(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.cq.prototype={
gF(a){return this.gm(this)===0},
gY(a){return this.gm(this)!==0},
E(a,b){var s
for(s=J.E(b);s.k();)this.t(0,s.gn())},
ci(a,b,c){return new A.eq(this,b,A.n(this).i("@<1>").X(c).i("eq<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iL())
s=r.gu(r)
if(!s.k())throw A.b(A.aE())
return s.gn()},
l(a){return A.tC(this,"{","}")},
dt(a,b){return new A.am(this,b,A.n(this).i("am<1>"))},
cG(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cQ(a,b){return A.EI(this,b,A.n(this).c)},
bl(a,b){return A.EG(this,b,A.n(this).c)},
gH(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aE())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aE())
do s=r.gn()
while(r.k())
return s},
a9(a,b){var s,r
A.bd(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.m4(b,b-r,this,null,"index"))},
$iK:1,
$io:1,
$ieL:1}
A.k8.prototype={}
A.kj.prototype={}
A.oz.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rg(b):s}},
gm(a){return this.b==null?this.c.a:this.dG().length},
gF(a){return this.gm(0)===0},
gY(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.oA(this)},
gaY(){var s,r=this
if(r.b==null){s=r.c
return new A.al(s,A.n(s).i("al<2>"))}return A.dK(r.dG(),new A.zY(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tl().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a8(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a8(0,b)
s=o.dG()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.B2(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aA(o))}},
dG(){var s=this.c
if(s==null)s=this.c=A.j(Object.keys(this.a),t.s)
return s},
tl(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.u(t.N,t.z)
r=n.dG()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.am(r)
n.a=n.b=null
return n.c=s},
rg(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.B2(this.a[a])
return this.b[a]=s}}
A.zY.prototype={
$1(a){return this.a.h(0,a)},
$S:67}
A.oA.prototype={
gm(a){return this.a.gm(0)},
a9(a,b){var s=this.a
return s.b==null?s.gK().a9(0,b):s.dG()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gu(s)}else{s=s.dG()
s=new J.fo(s,s.length,A.a0(s).i("fo<1>"))}return s},
D(a,b){return this.a.I(b)}}
A.zW.prototype={
q(){var s,r,q=this
q.oK()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aA(A.FV(r.charCodeAt(0)==0?r:r,q.b))
s.aR()}}
A.AH.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:64}
A.AG.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:64}
A.kQ.prototype={
gaP(){return"us-ascii"},
k9(a){return B.by.v(a)}}
A.p2.prototype={
v(a){var s,r,q,p=A.be(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.az(a,"string","Contains invalid characters."))
o[r]=q}return o},
c_(a){return new A.Ay(new A.hy(a),this.a)}}
A.kR.prototype={}
A.Ay.prototype={
q(){this.a.a.q()},
bN(a,b,c,d){var s,r,q,p
A.be(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.P("Source contains invalid character with code point: "+q+".",null))}s=new A.ch(a)
p=this.a.a
p.t(0,s.U(s,b,c))
if(d)p.q()}}
A.kX.prototype={
gf6(){return this.a},
w8(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.be(a1,a2,a0.length)
s=$.DB()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.BF(a0.charCodeAt(l))
h=A.BF(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a3("")
e=p}else e=p
e.a+=B.a.A(a0,q,r)
d=A.bv(k)
e.a+=d
q=l
continue}}throw A.b(A.a8("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.DM(a0,n,a2,o,m,d)
else{c=B.c.ak(d-1,4)+1
if(c===1)throw A.b(A.a8(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dn(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.DM(a0,n,a2,o,m,b)
else{c=B.c.ak(b,4)
if(c===1)throw A.b(A.a8(a,a0,a2))
if(c>1)a0=B.a.dn(a0,a2,a2,c===2?"==":"=")}return a0}}
A.ii.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.oc(this.a?u.G:u.U).mQ(a,0,s,!0)
s.toString
return A.dU(s,0,null)},
c_(a){return new A.yp(a,new A.yG(this.a?u.G:u.U))}}
A.oc.prototype={
mH(a){return new Uint8Array(a)},
mQ(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mH(o)
r.a=A.JQ(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.yG.prototype={
mH(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bL(B.f.gab(s),s.byteOffset,a)}}
A.yC.prototype={
t(a,b){this.lm(b,0,J.as(b),!1)},
q(){this.lm(B.cM,0,0,!0)}}
A.yp.prototype={
lm(a,b,c,d){var s=this.b.mQ(a,b,c,d)
if(s!=null)this.a.a.aA(A.dU(s,0,null))
if(d)this.a.a.aR()}}
A.kY.prototype={
v(a){var s,r,q=A.be(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.ob()
r=s.k0(a,0,q)
r.toString
s.jW(a,q)
return r},
c_(a){return new A.yB(a,new A.ob())}}
A.ob.prototype={
k0(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.EU(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.JN(a,b,c,q)
r.a=A.JP(a,b,c,s,0,r.a)
return s},
jW(a,b){var s=this.a
if(s<-1)throw A.b(A.a8("Missing padding character",a,b))
if(s>0)throw A.b(A.a8("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.yB.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.k0(b,0,r)
if(s!=null)this.a.a.aA(s)},
q(){this.b.jW(null,null)
this.a.a.aR()},
bN(a,b,c,d){var s,r
A.be(b,c,a.length)
if(b===c)return
s=this.b
r=s.k0(a,b,c)
if(r!=null)this.a.a.aA(r)
if(d){s.jW(a,c)
this.a.a.aR()}}}
A.pS.prototype={}
A.hy.prototype={
t(a,b){this.a.t(0,b)},
q(){this.a.q()}}
A.of.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.L(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.af(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.aw(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.aw(p,o,o+n.gm(b),b)
q.c=q.c+n.gm(b)},
q(){this.a.$1(B.f.U(this.b,0,this.c))}}
A.l8.prototype={}
A.oU.prototype={
t(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.eY.prototype={
t(a,b){this.b.t(0,b)},
by(a,b){A.cz(a,"error",t.K)
this.a.by(a,b)},
q(){this.b.q()},
$ibC:1}
A.la.prototype={}
A.aC.prototype={
c_(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
tU(a){return new A.jM(new A.qP(this),a,t.fM.X(A.n(this).i("aC.T")).i("jM<1,2>"))}}
A.qP.prototype={
$1(a){return new A.eY(a,this.a.c_(a),t.oW)},
$S:104}
A.es.prototype={}
A.iR.prototype={
l(a){var s=A.iy(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.mc.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.tF.prototype={
aE(a,b){var s=A.FV(a,this.guf().a)
return s},
a6(a,b){var s=A.K9(a,this.gf6().b,null)
return s},
gf6(){return B.cp},
guf(){return B.co}}
A.me.prototype={
c_(a){return new A.zX(null,this.b,new A.oW(a))}}
A.zX.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.A("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a3("")
q=new A.Au(r,s)
A.F9(b,q,p.b,p.a)
if(r.a.length!==0)q.jg()
s.q()},
q(){}}
A.md.prototype={
c_(a){return new A.zW(this.a,a,new A.a3(""))}}
A.A_.prototype={
nx(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iJ(a,s,r)
s=r+1
n.ao(92)
n.ao(117)
n.ao(100)
p=q>>>8&15
n.ao(p<10?48+p:87+p)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iJ(a,s,r)
s=r+1
n.ao(92)
switch(q){case 8:n.ao(98)
break
case 9:n.ao(116)
break
case 10:n.ao(110)
break
case 12:n.ao(102)
break
case 13:n.ao(114)
break
default:n.ao(117)
n.ao(48)
n.ao(48)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.iJ(a,s,r)
s=r+1
n.ao(92)
n.ao(q)}}if(s===0)n.b3(a)
else if(s<m)n.iJ(a,s,m)},
j1(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.mc(a,null))}s.push(a)},
iI(a){var s,r,q,p,o=this
if(o.nw(a))return
o.j1(a)
try{s=o.b.$1(a)
if(!o.nw(s)){q=A.Ej(a,null,o.glW())
throw A.b(q)}o.a.pop()}catch(p){r=A.C(p)
q=A.Ej(a,r,o.glW())
throw A.b(q)}},
nw(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xy(a)
return!0}else if(a===!0){r.b3("true")
return!0}else if(a===!1){r.b3("false")
return!0}else if(a==null){r.b3("null")
return!0}else if(typeof a=="string"){r.b3('"')
r.nx(a)
r.b3('"')
return!0}else if(t.j.b(a)){r.j1(a)
r.xw(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.j1(a)
s=r.xx(a)
r.a.pop()
return s}else return!1},
xw(a){var s,r,q=this
q.b3("[")
s=J.L(a)
if(s.gY(a)){q.iI(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b3(",")
q.iI(s.h(a,r))}}q.b3("]")},
xx(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.b3("{}")
return!0}s=a.gm(a)*2
r=A.ab(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a8(0,new A.A0(n,r))
if(!n.b)return!1
o.b3("{")
for(p='"';q<s;q+=2,p=',"'){o.b3(p)
o.nx(A.F(r[q]))
o.b3('":')
o.iI(r[q+1])}o.b3("}")
return!0}}
A.A0.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:40}
A.zZ.prototype={
glW(){var s=this.c
return s instanceof A.a3?s.l(0):null},
xy(a){this.c.iH(B.x.l(a))},
b3(a){this.c.iH(a)},
iJ(a,b,c){this.c.iH(B.a.A(a,b,c))},
ao(a){this.c.ao(a)}}
A.mh.prototype={
gaP(){return"iso-8859-1"},
k9(a){return B.cw.v(a)}}
A.mi.prototype={}
A.nm.prototype={
t(a,b){this.bN(b,0,b.length,!1)}}
A.Au.prototype={
ao(a){var s=this.a,r=A.bv(a)
if((s.a+=r).length>16)this.jg()},
iH(a){if(this.a.a.length!==0)this.jg()
this.b.t(0,a)},
jg(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.kc.prototype={
q(){},
bN(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bv(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
t(a,b){this.a.a+=b}}
A.oW.prototype={
t(a,b){this.a.a.aA(b)},
bN(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aA(a)
else r.aA(B.a.A(a,b,c))
if(d)r.aR()},
q(){this.a.a.aR()}}
A.AF.prototype={
q(){var s,r,q,p=this.c
this.a.vf(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bN(q,0,q.length,!0)}else r.q()},
t(a,b){this.bN(b,0,J.as(b),!1)},
bN(a,b,c,d){var s,r=this.c,q=this.a.d_(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bN(s,0,s.length,!1)
r.a=""
return}}}
A.nT.prototype={
gaP(){return"utf-8"},
ua(a,b){return new A.dm((b===!0?B.dS:B.aN).a).d_(a,0,null,!0)},
f0(a){return this.ua(a,null)},
k9(a){return B.e.v(a)}}
A.nU.prototype={
v(a){var s,r,q=A.be(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.p6(s)
if(r.lC(a,0,q)!==q)r.hA()
return B.f.U(s,0,r.b)},
c_(a){return new A.AI(new A.hy(a),new Uint8Array(1024))}}
A.p6.prototype={
hA(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.H(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mu(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.H(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.hA()
return!1}},
lC(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.H(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mu(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hA()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.H(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.H(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.AI.prototype={
q(){if(this.a!==0){this.bN("",0,0,!0)
return}this.d.a.q()},
bN(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mu(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lC(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hA()
else n.a=a.charCodeAt(b);++b}s.t(0,B.f.U(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jB.prototype={
c_(a){return new A.AF(new A.dm(this.a),new A.oW(a),new A.a3(""))}}
A.dm.prototype={
d_(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.be(b,c,J.as(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.KF(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.KE(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.j8(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Fw(p)
m.b=0
throw A.b(A.a8(n,a,q+m.c))}return o},
j8(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.j8(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.j8(a,s,c,d)}return q.ue(a,b,c,d)},
vf(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bv(65533)
a.a+=s}else throw A.b(A.a8(A.Fw(77),null,null))},
ue(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a3(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bv(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bv(k)
h.a+=q
break
case 65:q=A.bv(k)
h.a+=q;--g
break
default:q=A.bv(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bv(a[m])
h.a+=q}else{q=A.dU(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bv(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.pc.prototype={}
A.aM.prototype={
bD(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bH(p,r)
return new A.aM(p===0?!1:s,r,p)},
pU(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cg()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bH(s,q)
return new A.aM(n===0?!1:o,q,n)},
pX(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cg()
s=k-a
if(s<=0)return l.a?$.DD():$.cg()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bH(s,q)
m=new A.aM(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fW(0,$.fk())
return m},
bE(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.P("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.ak(b,16)===0)return n.pU(r)
q=s+r+1
p=new Uint16Array(q)
A.F1(n.b,s,b,p)
s=n.a
o=A.bH(q,p)
return new A.aM(o===0?!1:s,p,o)},
dA(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.P("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.ak(b,16)
if(q===0)return j.pX(r)
p=s-r
if(p<=0)return j.a?$.DD():$.cg()
o=j.b
n=new Uint16Array(p)
A.JW(o,s,b,n)
s=j.a
m=A.bH(p,n)
l=new A.aM(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bE(1,q)-1)>>>0!==0)return l.fW(0,$.fk())
for(k=0;k<r;++k)if(o[k]!==0)return l.fW(0,$.fk())}return l},
a0(a,b){var s,r=this.a
if(r===b.a){s=A.yD(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iX(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iX(p,b)
if(o===0)return $.cg()
if(n===0)return p.a===b?p:p.bD(0)
s=o+1
r=new Uint16Array(s)
A.JS(p.b,o,a.b,n,r)
q=A.bH(s,r)
return new A.aM(q===0?!1:b,r,q)},
fX(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cg()
s=a.c
if(s===0)return p.a===b?p:p.bD(0)
r=new Uint16Array(o)
A.od(p.b,o,a.b,s,r)
q=A.bH(o,r)
return new A.aM(q===0?!1:b,r,q)},
fM(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iX(b,r)
if(A.yD(q.b,p,b.b,s)>=0)return q.fX(b,r)
return b.fX(q,!r)},
fW(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bD(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iX(b,r)
if(A.yD(q.b,p,b.b,s)>=0)return q.fX(b,r)
return b.fX(q,!r)},
bj(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cg()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.F2(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bH(s,p)
return new A.aM(m===0?!1:n,p,m)},
pT(a){var s,r,q,p
if(this.c<a.c)return $.cg()
this.lv(a)
s=$.CV.bv()-$.jL.bv()
r=A.CX($.CU.bv(),$.jL.bv(),$.CV.bv(),s)
q=A.bH(s,r)
p=new A.aM(!1,r,q)
return this.a!==a.a&&q>0?p.bD(0):p},
rG(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lv(a)
s=A.CX($.CU.bv(),0,$.jL.bv(),$.jL.bv())
r=A.bH($.jL.bv(),s)
q=new A.aM(!1,s,r)
if($.CW.bv()>0)q=q.dA(0,$.CW.bv())
return p.a&&q.c>0?q.bD(0):q},
lv(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.EZ&&a.c===$.F0&&c.b===$.EY&&a.b===$.F_)return
s=a.b
r=a.c
q=16-B.c.gmD(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.EX(s,r,q,p)
n=new Uint16Array(b+5)
m=A.EX(c.b,b,q,n)}else{n=A.CX(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.CY(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.yD(n,m,j,i)>=0){g&2&&A.H(n)
n[m]=1
A.od(n,h,j,i,n)}else{g&2&&A.H(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.od(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.JT(l,n,e);--k
A.F2(d,f,0,n,k,o)
if(n[e]<d){i=A.CY(f,o,k,j)
A.od(n,h,j,i,n)
while(--d,n[e]<d)A.od(n,h,j,i,n)}--e}$.EY=c.b
$.EZ=b
$.F_=s
$.F0=r
$.CU.b=n
$.CV.b=h
$.jL.b=o
$.CW.b=q},
gJ(a){var s,r,q,p=new A.yE(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.yF().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aM&&this.a0(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.j([],t.s)
m=n.a
r=m?n.bD(0):n
while(r.c>1){q=$.DC()
if(q.c===0)A.t(B.bJ)
p=r.rG(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pT(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bw(s,t.hF).ed(0)},
$iaw:1}
A.yE.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:112}
A.yF.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:131}
A.ot.prototype={
mB(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mN(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.AE.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:62}
A.rs.prototype={
$0(){var s=this
return A.t(A.P("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:28}
A.aP.prototype={
iZ(a){var s=1000,r=B.c.ak(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.ak(p,s),n=this.c
return new A.aP(A.lu(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aP&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.c4(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
km(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a0(a,b){var s=B.c.a0(this.a,b.a)
if(s!==0)return s
return B.c.a0(this.b,b.b)},
x0(){var s=this
if(s.c)return s
return new A.aP(s.a,s.b,!0)},
l(a){var s=this,r=A.I6(A.CB(s)),q=A.lt(A.Cz(s)),p=A.lt(A.w6(s)),o=A.lt(A.Cx(s)),n=A.lt(A.Cy(s)),m=A.lt(A.CA(s)),l=A.E0(A.Ew(s)),k=s.b,j=k===0?"":A.E0(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaw:1}
A.aD.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aD&&this.a===b.a},
gJ(a){return B.c.gJ(this.a)},
a0(a,b){return B.c.a0(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.M(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.M(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.M(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.iq(B.c.l(n%1e6),6,"0")},
$iaw:1}
A.zm.prototype={
l(a){return this.a4()}}
A.ae.prototype={
gcp(){return A.J1(this)}}
A.kS.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iy(s)
return"Assertion failed"}}
A.df.prototype={}
A.bB.prototype={
gjb(){return"Invalid argument"+(!this.a?"(s)":"")},
gja(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gjb()+q+o
if(!s.a)return n
return n+s.gja()+": "+A.iy(s.gkl())},
gkl(){return this.b}}
A.d7.prototype={
gkl(){return this.b},
gjb(){return"RangeError"},
gja(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.iI.prototype={
gkl(){return this.b},
gjb(){return"RangeError"},
gja(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id7:1,
gm(a){return this.f}}
A.cT.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.nM.prototype={
l(a){return"UnimplementedError: "+this.a},
$icT:1}
A.bn.prototype={
l(a){return"Bad state: "+this.a}}
A.ld.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iy(s)+"."}}
A.mE.prototype={
l(a){return"Out of Memory"},
gcp(){return null},
$iae:1}
A.ju.prototype={
l(a){return"Stack Overflow"},
gcp(){return null},
$iae:1}
A.os.prototype={
l(a){return"Exception: "+this.a},
$iG:1}
A.bl.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.A(e,0,75)+"..."
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
k=""}return g+l+B.a.A(e,i,j)+k+"\n"+B.a.bj(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.p(f)+")"):g},
$iG:1,
gij(){return this.a},
gfU(){return this.b},
gar(){return this.c}}
A.m6.prototype={
gcp(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iae:1,
$icT:1,
$iG:1}
A.o.prototype={
f_(a,b){return A.fq(this,A.n(this).i("o.E"),b)},
ci(a,b,c){return A.dK(this,b,A.n(this).i("o.E"),c)},
dt(a,b){return new A.am(this,b,A.n(this).i("am<o.E>"))},
D(a,b){var s
for(s=this.gu(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
vh(a,b,c){var s,r
for(s=this.gu(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
vi(a,b,c){return this.vh(0,b,c,t.z)},
cG(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
B(a,b){var s,r,q=this.gu(this)
if(!q.k())return""
s=J.Z(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.Z(q.gn())
while(q.k())}else{r=s
do r=r+b+J.Z(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
c9(a,b){var s
for(s=this.gu(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
bX(a,b){var s=A.n(this).i("o.E")
if(b)s=A.Q(this,s)
else{s=A.Q(this,s)
s.$flags=1
s=s}return s},
cR(a){return this.bX(0,!0)},
fH(a){return A.d3(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gF(a){return!this.gu(this).k()},
gY(a){return!this.gF(this)},
cQ(a,b){return A.EI(this,b,A.n(this).i("o.E"))},
bl(a,b){return A.EG(this,b,A.n(this).i("o.E"))},
gH(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aE())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aE())
do s=r.gn()
while(r.k())
return s},
gap(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aE())
s=r.gn()
if(r.k())throw A.b(A.iL())
return s},
fb(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a9(a,b){var s,r
A.bd(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.m4(b,b-r,this,null,"index"))},
l(a){return A.Iu(this,"(",")")}}
A.S.prototype={
l(a){return"MapEntry("+A.p(this.a)+": "+A.p(this.b)+")"}}
A.U.prototype={
gJ(a){return A.k.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.k.prototype={$ik:1,
P(a,b){return this===b},
gJ(a){return A.eF(this)},
l(a){return"Instance of '"+A.mM(this)+"'"},
gaj(a){return A.dt(this)},
toString(){return this.l(this)}}
A.oY.prototype={
l(a){return""},
$iaG:1}
A.jv.prototype={
guV(){var s=this.gmP()
if($.kE()===1e6)return s
return s*1000},
gmO(){var s=this.gmP()
if($.kE()===1000)return s
return B.c.M(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mN.$0()-r)
s.b=null}},
gmP(){var s=this.b
if(s==null)s=$.mN.$0()
return s-this.a}}
A.jn.prototype={
gu(a){return new A.n2(this.a)},
ga1(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.A("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.FF(r,s)}return s}}
A.n2.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.FF(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a3.prototype={
gm(a){return this.a.length},
iH(a){var s=A.p(a)
this.a+=s},
ao(a){var s=A.bv(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.xR.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:163}
A.kk.prototype={
gmj(){var s,r,q,p,o=this,n=o.w
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
gwn(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ae(s,1)
r=s.length===0?B.u:A.fO(new A.X(A.j(s.split("/"),t.s),A.Mw(),t.iZ),t.N)
q.x!==$&&A.C_()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gmj())
r.y!==$&&A.C_()
r.y=s
q=s}return q},
gkG(){return this.b},
gdg(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ad(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfq(){var s=this.d
return s==null?A.Fl(this.a):s},
gfw(){var s=this.f
return s==null?"":s},
gi_(){var s=this.r
return s==null?"":s},
vO(a){var s=this.a
if(a.length!==s.length)return!1
return A.KS(a,s,0)>=0},
fC(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.D4(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.AA(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.AB(null,0,0,a)
else k=j.f
return A.kl(b,q,o,p,l,k,j.r)},
kz(a){return this.fC(a,null)},
nm(a){return this.fC(null,a)},
lR(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ad(b,"../",r);){r+=3;++s}q=B.a.di(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.ie(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dn(a,q+1,null,B.a.ae(b,r-3*s))},
bW(a){return this.fD(A.nS(a))},
fD(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb_().length!==0)return a
else{s=h.a
if(a.gkg()){r=a.nm(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmW())m=a.gi9()?a.gfw():h.f
else{l=A.KD(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gkf()?k+A.f7(a.gbr()):k+A.f7(h.lR(B.a.ae(n,k.length),a.gbr()))}else if(a.gkf())n=A.f7(a.gbr())
else if(n.length===0)if(p==null)n=s.length===0?a.gbr():A.f7(a.gbr())
else n=A.f7("/"+a.gbr())
else{j=h.lR(n,a.gbr())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.f7(j)
else n=A.D6(j,!r||p!=null)}m=a.gi9()?a.gfw():null}}}i=a.gkh()?a.gi_():null
return A.kl(s,q,p,o,n,m,i)},
gkg(){return this.c!=null},
gi9(){return this.f!=null},
gkh(){return this.r!=null},
gmW(){return this.e.length===0},
gkf(){return B.a.S(this.e,"/")},
kD(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gdg()!=="")A.t(A.Y(u.Q))
s=r.gwn()
A.Kw(s,!1)
q=A.xi(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmj()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb_())if(p.c!=null===b.gkg())if(p.b===b.gkG())if(p.gdg()===b.gdg())if(p.gfq()===b.gfq())if(p.e===b.gbr()){r=p.f
q=r==null
if(!q===b.gi9()){if(q)r=""
if(r===b.gfw()){r=p.r
q=r==null
if(!q===b.gkh()){s=q?"":r
s=s===b.gi_()}}}}return s},
$inQ:1,
gb_(){return this.a},
gbr(){return this.e}}
A.AD.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.p5(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.p5(1,b,B.o,!0)
s.a+=r}},
$S:181}
A.AC.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:62}
A.xQ.prototype={
gnu(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cd(m,"?",s)
q=m.length
if(r>=0){p=A.km(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.on("data","",n,n,A.km(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cb.prototype={
gkg(){return this.c>0},
gki(){return this.c>0&&this.d+1<this.e},
gi9(){return this.f<this.r},
gkh(){return this.r<this.a.length},
gkf(){return B.a.ad(this.a,"/",this.e)},
gmW(){return this.e===this.f},
gb_(){var s=this.w
return s==null?this.w=this.pD():s},
pD(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gkG(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gdg(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfq(){var s,r=this
if(r.gki())return A.aI(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbr(){return B.a.A(this.a,this.e,this.f)},
gfw(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
gi_(){var s=this.r,r=this.a
return s<r.length?B.a.ae(r,s+1):""},
lK(a){var s=this.d+1
return s+a.length===this.e&&B.a.ad(this.a,a,s)},
wQ(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cb(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.D4(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb_()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gki()?h.gfq():g
if(s)o=A.AA(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.AB(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ae(q,m+1):g
return A.kl(b,p,n,o,l,j,i)},
kz(a){return this.fC(a,null)},
nm(a){return this.fC(null,a)},
bW(a){return this.fD(A.nS(a))},
fD(a){if(a instanceof A.cb)return this.t5(this,a)
return this.ml().fD(a)},
t5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lK("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lK("443")
if(p){o=r+1
return new A.cb(B.a.A(a.a,0,o)+B.a.ae(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.ml().fD(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cb(B.a.A(a.a,0,r)+B.a.ae(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cb(B.a.A(a.a,0,r)+B.a.ae(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wQ()}s=b.a
if(B.a.ad(s,"/",n)){m=a.e
l=A.Fd(this)
k=l>0?l:m
o=k-n
return new A.cb(B.a.A(a.a,0,k)+B.a.ae(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ad(s,"../",n))n+=3
o=j-n+1
return new A.cb(B.a.A(a.a,0,j)+"/"+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Fd(this)
if(l>=0)g=l
else for(g=j;B.a.ad(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.ad(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.ad(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.cb(B.a.A(h,0,i)+d+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
kD(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gb_()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.t(A.Y(u.Q))
q=B.a.A(s,r.e,q)
return q},
gJ(a){var s=this.x
return s==null?this.x=B.a.gJ(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
ml(){var s=this,r=null,q=s.gb_(),p=s.gkG(),o=s.c>0?s.gdg():r,n=s.gki()?s.gfq():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gfw():r
return A.kl(q,p,o,n,k,l,j<m.length?s.gi_():r)},
l(a){return this.a},
$inQ:1}
A.on.prototype={}
A.lD.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.p(this.b)}}
A.mA.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iG:1}
A.t1.prototype={
$2(a,b){this.a.bg(new A.t_(a),new A.t0(b),t.X)},
$S:183}
A.t_.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:193}
A.t0.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Mj(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.t("Attempting to box non-Dart object.")
s={}
s[$.Hl()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:7}
A.BK.prototype={
$1(a){var s,r,q,p
if(A.FT(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gK());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.E(p,J.c_(a,this,t.z))
return p}else return a},
$S:29}
A.BQ.prototype={
$1(a){return this.a.aB(a)},
$S:25}
A.BR.prototype={
$1(a){if(a==null)return this.a.aS(new A.mA(a===undefined))
return this.a.aS(a)},
$S:25}
A.Bp.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.FS(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aP(A.lu(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.P("structured clone of RegExp",null))
if(a instanceof Promise)return A.a1(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.u(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aH(o),q=s.gu(o);q.k();)n.push(A.pn(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.L(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:29}
A.zT.prototype={
cL(a){if(a<=0||a>4294967296)throw A.b(A.b_(u.E+a))
return Math.random()*a>>>0},
n8(){return Math.random()}}
A.zU.prototype={
oX(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cL(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.b_(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.H(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.aq(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bL(B.aA.gab(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.lA.prototype={}
A.a4.prototype={
h(a,b){var s,r=this
if(!r.jq(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a4.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jq(b))return
s.c.j(0,s.a.$1(b),new A.S(b,c,s.$ti.i("S<a4.K,a4.V>")))},
E(a,b){b.a8(0,new A.pU(this))},
ca(a,b,c){return this.c.ca(0,b,c)},
I(a){var s=this
if(!s.jq(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a4.K").a(a)))},
ga7(){var s=this.c,r=A.n(s).i("aK<1,2>")
return A.dK(new A.aK(s,r),new A.pV(this),r.i("o.E"),this.$ti.i("S<a4.K,a4.V>"))},
a8(a,b){this.c.a8(0,new A.pW(this,b))},
gF(a){return this.c.a===0},
gY(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("al<2>")
return A.dK(new A.al(s,r),new A.pX(this),r.i("o.E"),this.$ti.i("a4.K"))},
gm(a){return this.c.a},
aU(a,b,c,d){return this.c.aU(0,new A.pY(this,b,c,d),c,d)},
gaY(){var s=this.c,r=A.n(s).i("al<2>")
return A.dK(new A.al(s,r),new A.pZ(this),r.i("o.E"),this.$ti.i("a4.V"))},
l(a){return A.v_(this)},
jq(a){return this.$ti.i("a4.K").b(a)},
$iJ:1}
A.pU.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a4.K,a4.V)")}}
A.pV.prototype={
$1(a){var s=a.b
return new A.S(s.a,s.b,this.a.$ti.i("S<a4.K,a4.V>"))},
$S(){return this.a.$ti.i("S<a4.K,a4.V>(S<a4.C,S<a4.K,a4.V>>)")}}
A.pW.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a4.C,S<a4.K,a4.V>)")}}
A.pX.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a4.K(S<a4.K,a4.V>)")}}
A.pY.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.X(this.c).X(this.d).i("S<1,2>(a4.C,S<a4.K,a4.V>)")}}
A.pZ.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a4.V(S<a4.K,a4.V>)")}}
A.lw.prototype={
Z(a,b){return J.x(a,b)},
ac(a){return J.a7(a)}}
A.iM.prototype={
Z(a,b){var s,r,q,p
if(a===b)return!0
s=J.E(a)
r=J.E(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.Z(s.gn(),r.gn()))return!1}},
ac(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();){q=q+r.ac(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.ey.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.L(a)
r=s.gm(a)
q=J.L(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.Z(s.h(a,o),q.h(b,o)))return!1
return!0},
ac(a){var s,r,q,p
for(s=J.L(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ac(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hU.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.Cj(s.gv0(),s.gvJ(),s.gvP(),A.n(this).i("hU.E"),t.S)
for(s=J.E(a),q=0;s.k();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.E(b);s.k();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ac(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();)q=q+r.ac(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hc.prototype={}
A.hK.prototype={
gJ(a){var s=this.a
return 3*s.a.ac(this.b)+7*s.b.ac(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hK){s=this.a
s=s.a.Z(this.b,b.b)&&s.b.Z(this.c,b.c)}else s=!1
return s}}
A.iW.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.Cj(null,null,null,t.mB,t.S)
for(r=J.E(a.gK());r.k();){q=r.gn()
p=new A.hK(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gK());r.k();){q=r.gn()
p=new A.hK(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ac(a){var s,r,q,p,o,n,m,l
for(s=J.E(a.gK()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ac(n)
l=a.h(0,n)
o=o+3*m+7*q.ac(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.lv.prototype={
Z(a,b){var s,r=this
if(a instanceof A.cq)return b instanceof A.cq&&new A.hc(r,t.cu).Z(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iW(r,r,t.a3).Z(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.ey(r,t.hI).Z(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iM(r,t.nZ).Z(a,b)
return J.x(a,b)},
ac(a){var s=this
if(a instanceof A.cq)return new A.hc(s,t.cu).ac(a)
if(t.f.b(a))return new A.iW(s,s,t.a3).ac(a)
if(t.j.b(a))return new A.ey(s,t.hI).ac(a)
if(t.e7.b(a))return new A.iM(s,t.nZ).ac(a)
return J.a7(a)},
vQ(a){return!0}}
A.mz.prototype={
sm(a,b){A.Er()},
t(a,b){return A.Er()}}
A.nP.prototype={
j(a,b,c){return A.Jz()}}
A.ci.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.ci){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.vr(this.a)},
l(a){return A.ar(this.a)}}
A.c0.prototype={
t(a,b){if(this.a!=null)throw A.b(A.A("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.A("add must be called once."))}}
A.lZ.prototype={
v(a){var s=new A.c0(),r=A.cW(s)
r.t(0,a)
r.q()
r=s.a
r.toString
return r}}
A.t6.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.A("Hash.add() called after close()."))
s.r=s.r+J.as(b)
s.l5(b)},
l5(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.pw(B.f.gab(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.L(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ah(i,j,n,a,o)
k.e=n
return}B.f.ah(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.H(s)
s[m]=l;++m}while(m<q)
k.x8(s)}},
q(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.t(A.Y("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.pw(B.f.gab(q))
m=B.c.M(p,4294967296)
n.$flags&2&&A.H(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.l5(q)
s=l.a
s.t(0,new A.ci(l.pm()))
s.q()},
pm(){var s,r,q,p,o,n,m
if(B.aT===$.kD())return J.Hy(B.y.gab(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.pw(B.f.gab(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.H(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.oR.prototype={
c_(a){var s=new Uint32Array(A.b9(A.j([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hy(new A.oS(s,r,a,q,new Uint32Array(16)))}}
A.Ag.prototype={
x8(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
for(s=this.z,r=s.$flags|0,q=0;q<16;++q){p=a0[q]
r&2&&A.H(s)
s[q]=p}for(q=16;q<64;++q){p=s[q-2]
o=s[q-7]
n=s[q-15]
m=s[q-16]
r&2&&A.H(s)
s[q]=((((p>>>17|p<<15)^(p>>>19|p<<13)^p>>>10)>>>0)+o>>>0)+((((n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3)>>>0)+m>>>0)>>>0}r=this.y
l=r[0]
k=r[1]
j=r[2]
i=r[3]
h=r[4]
g=r[5]
f=r[6]
e=r[7]
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cC[q]+s[q]>>>0)>>>0)>>>0
b=i+c>>>0
a=c+((((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))>>>0)+((d&k^d&j^k&j)>>>0)>>>0)>>>0}r.$flags&2&&A.H(r)
r[0]=d+l>>>0
r[1]=k+r[1]>>>0
r[2]=j+r[2]>>>0
r[3]=i+r[3]>>>0
r[4]=h+r[4]>>>0
r[5]=g+r[5]>>>0
r[6]=f+r[6]>>>0
r[7]=e+r[7]>>>0}}
A.oS.prototype={}
A.kL.prototype={
gJ(a){return A.c4(B.dD,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.lo&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dt(s).l(0)+".with"+s.d*8+"bits()"
return A.dt(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.q4.prototype={}
A.iV.prototype={
gJ(a){return B.t.ac(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.iV&&B.t.Z(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.jq.prototype={
l(a){return A.dt(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iG:1}
A.uY.prototype={
l(a){return A.dt(this).l(0)+"()"}}
A.jp.prototype={
gJ(a){return(B.t.ac(this.b.a)^B.t.ac(this.c)^B.t.ac(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jp){s=B.t.Z(this.b.a,b.b.a)
s=s&&B.t.Z(this.c,b.c)&&B.t.Z(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.wY.prototype={}
A.jr.prototype={
ge3(){return this.b},
gJ(a){var s=A.eF(B.dN),r=B.t.ac(this.ge3())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jr&&B.t.Z(this.ge3(),b.ge3())},
l(a){return"SecretKeyData(...)"}}
A.n7.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.lo.prototype={
uh(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge3().gm(0),f=this.d
if(g!==f)throw A.b(A.az(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Ge(c)
r=new Uint32Array(4)
A.pk(r,0,r,0,s)
r[0]=A.bz(r[0])
r[1]=A.bz(r[1])
r[2]=A.bz(r[2])
r[3]=A.bz(r[3])
q=A.E_(r,a.c)
p=J.DH(B.f.gab(q),0,null)
o=a.a
n=B.t.Z(B.aR.lc(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jq())
A.Bh(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pk(l,k,p,0,s)
A.Bh(q,1)}j=J.bL(B.y.gab(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.H(j)
j[k]=i^h}return j},
uY(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge3().gm(0),f=this.d
if(g!==f)throw A.b(A.az(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Ge(d)
r=new Uint32Array(4)
A.pk(r,0,r,0,s)
r[0]=A.bz(r[0])
r[1]=A.bz(r[1])
r[2]=A.bz(r[2])
r[3]=A.bz(r[3])
q=A.E_(r,c)
p=J.DH(B.f.gab(q),0,null)
o=new Uint32Array(A.b9(p))
A.Bh(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pk(l,k,p,0,s)
A.Bh(q,1)}j=J.bL(B.y.gab(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.H(j)
j[k]=i^h}return new A.jp(j,B.aR.lc(j,b,s,r,o),c)}}
A.r6.prototype={
l(a){return"DartGcm()"},
lc(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lp(n,d,b)
A.lp(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.ak(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
q.setUint32(12,B.c.ak(r,o),!1)
A.lp(n,d,J.bL(B.aA.gab(q),0,null))
p=new Uint32Array(4)
A.pk(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iV(J.bL(B.y.gab(n),0,null))}}
A.ol.prototype={}
A.om.prototype={}
A.qS.prototype={}
A.r7.prototype={}
A.zb.prototype={
Z(a,b){var s,r,q=J.L(a),p=J.L(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ac(a){var s,r,q,p,o
for(s=J.L(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.ak(q,16)
r=(r^B.c.t4(p,o)^B.c.mg(p,16-o))>>>0}return r}}
A.mY.prototype={}
A.kZ.prototype={$iC9:1}
A.l_.prototype={
hZ(){if(this.w)throw A.b(A.A("Can't finalize a finalized Request."))
this.w=!0
return B.bC},
l(a){return this.a+" "+this.b.l(0)}}
A.l0.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:87}
A.l1.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:92}
A.pO.prototype={
oN(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.P("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.P("Invalid content length "+A.p(s)+".",null))}}}
A.l5.prototype={
b4(a){return this.ol(a)},
ol(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b4=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.DW("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hZ().x_(),$async$b4)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.l(0)
a8=!J.bA(k)?k:null
a9=t.N
f=A.u(a9,t.K)
e=b4.gmG()
d=null
if(e!=null){d=e
J.cY(f,"content-length",d)}for(b0=b4.r,b0=new A.aK(b0,A.n(b0).i("aK<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.cY(f,c.a,c.b)}f=A.pp(f)
f.toString
A.bg(f)
b0=l.signal
s=8
return A.a(A.a1(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b4)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.ji(a,null):null
if(a0==null&&a!=null){f=A.DW("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.u(a9,a9)
b.headers.forEach(A.pe(new A.pR(a1)))
f=A.KI(b4,b)
a4=b.status
a6=a1
a8=a0
A.nS(b.url)
a9=b.statusText
f=new A.nl(A.GO(f),a4,a8,a6)
f.oN(a4,a8,a6,!1,!0,a9,b4)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b3=o.pop()
a2=A.C(b3)
a3=A.ad(b3)
A.FY(a2,a3,b4)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.b.G(a5,l)
s=n.pop()
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].abort()
this.b=!0}}
A.pR.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:96}
A.AZ.prototype={
$1(a){return A.i1(this.a,this.b,a)},
$S:98}
A.B7.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.an()}},
$S:0}
A.B8.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a1(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.C(k)
m=A.ad(k)
if(!o.a.b)A.FY(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.dx.prototype={
x_(){var s=new A.w($.D,t.jz),r=new A.aJ(s,t.iq),q=new A.of(new A.pT(r),new Uint8Array(1024))
this.aa(q.gtG(q),!0,q.ge5(),r.gu2())
return s}}
A.pT.prototype={
$1(a){return this.a.aB(new Uint8Array(A.b9(a)))},
$S:14}
A.ej.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iG:1}
A.ms.prototype={
gm(a){return this.b}}
A.vj.prototype={
gmG(){var s,r,q,p=this,o={},n=o.a=0
p.x.a8(0,new A.vk(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.r)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.lI(q)).length+q.b+2)}return o.a+2+70+4},
hZ(){var s=this,r=s.pi()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kY()
return new A.dx(s.bn(r))},
bn(a){return this.qg(a)},
qg(a){var $async$bn=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.v(f+"\r\n")
d=B.e.v(f+"--\r\n")
f=m.x,f=new A.aK(f,A.n(f).i("aK<1,2>")).gu(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bU(A.e2(e),$async$bn,r)
case 5:k=l.b
j=$.C3()
l=A.B(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.B(l,'"',"%22")+'"'
l=$.DE()
s=6
q=[1]
return A.bU(A.e2(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bn,r)
case 6:s=7
q=[1]
return A.bU(A.e2(B.e.v(k)),$async$bn,r)
case 7:s=8
q=[1]
return A.bU(A.e2(B.b5),$async$bn,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bU(A.e2(e),$async$bn,r)
case 12:s=13
q=[1]
return A.bU(A.e2(B.e.v(m.lI(g))),$async$bn,r)
case 13:if(g.f)A.t(A.A("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bU(A.K7(g.e),$async$bn,r)
case 14:s=15
q=[1]
return A.bU(A.e2(B.b5),$async$bn,r)
case 15:case 10:f.length===l||(0,A.r)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bU(A.e2(d),$async$bn,r)
case 16:case 1:return A.bU(null,0,r)
case 2:return A.bU(o.at(-1),1,r)}})
var s=0,r=A.FR($async$bn,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.G6(r)},
qz(a,b){var s,r=$.C3()
r=A.B(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.B(r,'"',"%22")+'"'
r=$.DE()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lI(a){var s=a.d.l(0),r=$.C3(),q=A.B(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.B(q,'"',"%22")+'"'
s=A.B(a.c,r,"%0D%0A")
p=p+'; filename="'+A.B(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
pi(){var s,r=J.Eg(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cS[$.GY().cL(66)]
return"dart-http-boundary-"+A.dU(r,0,null)}}
A.vk.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.qz(a,b)).length+B.e.v(b).length+2)},
$S:37}
A.wP.prototype={
gmG(){return this.y.length},
gka(){var s,r
if(this.gct()==null||!this.gct().c.a.I("charset"))return B.o
s=this.gct().c.a.h(0,"charset")
s.toString
r=A.Ia(s)
return r==null?A.t(A.a8('Unsupported encoding "'+s+'".',null,null)):r},
hZ(){this.kY()
return new A.dx(A.CK(this.y,t.L))},
gct(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.IJ(s)},
sct(a){this.r.j(0,"content-type",a.l(0))},
pp(){if(!this.w)return
throw A.b(A.A("Can't modify a finalized Request."))}}
A.jx.prototype={}
A.nl.prototype={}
A.io.prototype={}
A.fP.prototype={
l(a){var s=new A.a3(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a8(0,new A.v3(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.v1.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.xj(null,j),h=$.Hx()
i.iQ(h)
s=$.Hw()
i.f8(s)
r=i.gko().h(0,0)
r.toString
i.f8("/")
i.f8(s)
q=i.gko().h(0,0)
q.toString
i.iQ(h)
p=t.N
o=A.u(p,p)
for(;;){p=i.d=B.a.eh(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gN():n
if(!m)break
p=i.d=h.eh(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gN()
i.f8(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.f8("=")
n=i.d=s.eh(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gN()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.MG(i)
n=i.d=h.eh(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.v6()
return A.Cu(r,q,o)},
$S:105}
A.v3.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Hu()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.GL(b,$.Hj(),new A.v2(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:37}
A.v2.prototype={
$1(a){return"\\"+A.p(a.h(0,0))},
$S:59}
A.Bw.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:59}
A.pN.prototype={
dr(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dr=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eF(),$async$dr)
case 5:o=b
s=o.gnk()<0.25?6:7
break
case 6:s=8
return A.a(p.jD(o),$async$dr)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnk()<0.25?9:10
break
case 9:s=11
return A.a(p.jD(m),$async$dr)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
ix(){var s=0,r=A.h(t.q),q,p=this
var $async$ix=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eF(),$async$ix)
case 3:q=p.jD(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ix,r)},
eF(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eF=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.cb():j
p=3
s=6
return A.a(l,$async$eF)
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
return A.f($async$eF,r)},
jD(a){var s=this.c
if(s!=null)return s
return this.c=this.h4(a)},
h4(a){return this.pW(a)},
pW(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$h4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.kU("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.iy(l),$async$h4)
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
return A.f($async$h4,r)}}
A.jf.prototype={
oP(a,b,c,d,e,f,g,h,i){var s=this,r=new A.pN(s.c)
s.y!==$&&A.ce()
s.y=r
s.z!==$&&A.ce()
s.z=new A.vJ(s.x,s.b,r,s.a)},
ir(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$ir=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.v()
s=7
return A.a(m.it(),$async$ir)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.C(k)
if(m instanceof A.cj){n.as=!1
n.ax=!0}else if(m instanceof A.bp)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ir,r)},
fV(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.v()
n=A.IY(B.c8,o,A.j(["data"],t.s),p.gr0(),p.gqY())
p.Q=n
s=3
return A.a(n.az(),$async$fV)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fV,r)},
ey(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ey=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aH()
s=2
return A.a(o instanceof A.w?o:A.bx(o,t.H),$async$ey)
case 2:q.Q=null
for(o=q.ch,p=new A.aT(o,o.r,o.e,A.n(o).i("aT<2>"));p.k();)p.d.C()
o.am(0)
q.CW.am(0)
return A.e(null,r)}})
return A.f($async$ey,r)},
h1(){var s=0,r=A.h(t.H),q=this
var $async$h1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.ey(),$async$h1)
case 2:q.x.a.q()
return A.e(null,r)}})
return A.f($async$h1,r)},
qZ(){var s,r,q,p
for(s=this.cx,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
this.eC(p,new A.cC(p,B.aa,null))}},
r1(a){var s=a.b,r=s.b
if(!B.b.D(this.cx,r))return
if(a.a==="delete"){this.hw(s)
return}this.eC(r,new A.cC(r,B.aa,s))},
hw(a){return this.tp(a)},
tp(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hw=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.D(n.cx,j)){s=1
break}m=null
p=4
l=n.z
l===$&&A.v()
s=7
return A.a(l.bZ(a.a),$async$hw)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.C(i)
if(l instanceof A.cl){n.eC(j,new A.cC(j,B.aQ,null))
s=1
break}else if(l instanceof A.bp){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eC(j,new A.cC(j,B.aQ,null))
s=1
break}n.eC(j,new A.cC(j,B.aa,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hw,r)},
eC(a,b){var s,r,q=this
q.CW.j(0,a,b)
s=q.ch
r=s.h(0,a)
if(r!=null)r.C()
s.j(0,a,A.cQ(q.d,new A.vF(q,a)))},
xa(a,b){return this.iD(null,a,null,b,null)},
iD(a,b,c,d,e){return this.xd(a,b,c,d,e)},
xc(a,b){return this.iD(null,a,null,null,b)},
xd(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iD=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aU(0,new A.vG(p),t.N,t.co)
n=p.z
n===$&&A.v()
q=n.iC(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iD,r)},
$iCM:1}
A.vF.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.G(0,q)
s=r.CW.G(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.vG.prototype={
$2(a,b){return new A.S(a,new A.dB("imgs+",b.a,b.b,b.c),t.ia)},
$S:124}
A.mL.prototype={}
A.w0.prototype={
hN(a,b,c,d){return this.u4(a,b,c,d)},
u4(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$hN=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.Am(d)
n=t.hw
m=A.dS(null,null,n)
l=t.N
k=$.D.h(0,B.dw)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.l5(A.j([],t.kG))
j=new A.vH(j)
p=new A.mL(c,B.aW,a,o,B.b_,200,25,b,null,j,m,A.u(l,t.hU),A.u(l,n))
p.oP(a,B.aW,b,25,200,null,B.b_,o,null)
s=3
return A.a(p.fV(),$async$hN)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
hT(a){return this.uO(a)},
uO(a){var s=0,r=A.h(t.H),q
var $async$hT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ey(),$async$hT)
case 2:a.h1()
q=a.ay
if((q.c&4)===0)q.q()
return A.e(null,r)}})
return A.f($async$hT,r)}}
A.Am.prototype={
cb(){var s=0,r=A.h(t.q),q,p=this,o
var $async$cb=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.cb(),$async$cb)
case 3:q=o.EK(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cb,r)},
iy(a){return this.wL(a)},
wL(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$iy=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.cb(),$async$iy)
case 3:q=o.EK(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)}}
A.vS.prototype={}
A.vJ.prototype={
hH(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hH=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dr(),$async$hH)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.C(j)
l=A.kU("token provider failed: "+A.p(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hH,r)},
fj(a,b,c,d,e,f){return this.vV(a,b,c,d,e,f)},
vV(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fj=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Nk(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m="(store="+A.fi(a)+" && updated>="+A.fi(n)+")"
o=c==null?m:m+" && (updated>"+A.fi(n)+" || (updated="+A.fi(n)+" && id>"+A.fi(c)+"))"}l=t.N
l=A.u(l,l)
l.j(0,"filter",o)
l.j(0,"sort",h?"updated,id":"id")
l.j(0,"perPage",""+B.c.iB(B.c.bO(f,1,500)))
l.j(0,"skipTotal","1")
if(b!=null)l.j(0,"fields",B.b.B(b,","))
k=p.b.bW("/api/collections/data/records").kz(l)
s=3
return A.a(p.mc("GET",k),$async$fj)
case 3:j=a0
p.dI(j,A.j([200],t.t),k)
i=p.d1(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.aR("List response has no items array."))
h=J.c_(i,new A.vR(p),t.Q)
h=A.Q(h,h.$ti.i("a_.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
bZ(a){return this.od(a)},
od(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.jB(a)
s=3
return A.a(p.mc("GET",o),$async$bZ)
case 3:n=c
if(n.a===404)throw A.b(A.IV("not found"))
p.dI(n,A.j([200],t.t),o)
q=A.fZ(p.d1(n),p.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bZ,r)},
hP(a,b,c){return this.u9(a,b,c)},
u9(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hP=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bW("/api/collections/data/records")
s=3
return A.a(p.eU("POST",o,B.h.a6(A.m(["id",b,"store",c,"data",p.j7(a)],t.N,t.X),null)),$async$hP)
case 3:n=e
if(n.a===400&&p.qD(n))throw A.b(new A.ep(p.eE(n)))
p.dI(n,A.j([200,201],t.t),o)
q=A.fZ(p.d1(n),p.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
j7(a){var s,r,q
try{r=B.h.aE(a,null)
return r}catch(q){s=A.C(q)
r=A.IX("Corrupt local payload: "+A.p(s))
throw A.b(r)}},
qD(a){var s,r,q,p,o,n
try{s=this.d1(a)
r=J.W(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fI(a,b,c){return this.x9(a,b,c)},
x9(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fI=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.jB(c)
s=3
return A.a(p.eU("PATCH",o,B.h.a6(A.m(["data",p.j7(b)],t.N,t.X),null)),$async$fI)
case 3:n=e
p.dI(n,A.j([200],t.t),o)
q=A.fZ(p.d1(n),p.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fI,r)},
iC(a,b,c,d,e){return this.xb(a,b,c,d,e)},
xb(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$iC=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.jB(b)
m=t.N
l=A.u(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a6(d,null))
if(e==null)m=null
else{m=A.n(e).i("al<2>")
m=A.Q(new A.al(e,m),m.i("o.E"))}s=3
return A.a(p.rY(new A.m1("PATCH",n,B.az,l,m==null?B.cL:m)),$async$iC)
case 3:o=g
p.dI(o,A.j([200],t.t),n)
q=A.fZ(p.d1(o),p.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iC,r)},
f3(a,b,c){return this.uS(a,b,c)},
uS(a,b,c){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$f3=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.u(i,i)
l=n.b.bW("/api/files/data/"+A.p5(2,b,B.o,!1)+"/"+A.p5(2,a,B.o,!1))
k=i.a===0?l:l.kz(i)
s=3
return A.a(n.r3(new A.eu("GET",k,B.az,null)),$async$f3)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.aT(new A.vQ()).C().fG(B.c9),$async$f3)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.lP(A.Ir(m.a,m.b,""),k))
case 5:q=m.c
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f3,r)},
fu(a){return this.ws(a)},
ws(a7){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$fu=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a5=p.b.bW("/api/batch")
a6=A.j([],t.kf)
for(l=J.aH(a7),k=l.gu(a7),j=t.N,i=t.X,h=t.K;k.k();){g=k.gn()
a6.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",p.j7(g.d)],j,i)],j,h))}s=3
return A.a(p.eU("POST",a5,B.h.a6(A.m(["requests",a6],j,t.ew),null)),$async$fu)
case 3:o=b0
if(o.a===403)throw A.b(A.Ih(p.eE(o)))
if(o.a===400)throw A.b(new A.dw(p.eE(o)))
p.dI(o,A.j([200],t.t),a5)
n=null
try{n=B.h.aE(o.c,null)}catch(a8){a6=A.C(a8)
if(t.Y.b(a6)){m=a6
throw A.b(A.aR("Batch response is not valid JSON: "+m.gij()))}else throw a8}a6=t.j
if(a6.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a6.b(c))throw A.b(A.aR("Batch response has no results array."))}else throw A.b(A.aR("Batch response is not a list or envelope."))
e=c}a6=J.L(e)
if(a6.gm(e)!==l.gm(a7))throw A.b(A.aR("Batch response has "+a6.gm(e)+" results for "+l.gm(a7)+" requests."))
b=A.j([],t.g2)
for(k=t.f,j=p.d,a=0;a<l.gm(a7);++a){a0=a6.h(e,a)
if(!k.b(a0))throw A.b(A.aR("Batch response entry "+a+" is not a JSON object."))
i=l.h(a7,a)
a1=a0.h(0,"status")
h=J.ds(a1)
a2=h.P(a1,200)||h.P(a1,201)
a3=a0.h(0,"body")
h=a2&&k.b(a3)?A.fZ(a3,j):null
g=a2?null:p.q1(a0)
a4=a2&&k.b(a3)?B.h.a6(a3.h(0,"data"),null):null
b.push(new A.jl(i.a,a2,h,g,a4))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
it(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$it=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eU("POST",p.b.bW("/api/batch"),B.h.a6(A.m(["requests",[]],t.N,t.kS),null)),$async$it)
case 3:o=b
n=o.a
if(n===403||n===404||n===405||n===501){q=!1
s=1
break}if(n===401)throw A.b(A.kU(p.eE(o)))
if(n===408||n===429||n>=500)throw A.b(A.EL("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
jB(a){return this.b.bW("/api/collections/data/records/"+A.p5(2,a,B.o,!1))},
eU(a,b,c){return this.c8(new A.vM(this,a,b,c),new A.vN(),t.w)},
mc(a,b){return this.eU(a,b,null)},
rY(a){return this.c8(new A.vO(this,a),new A.vP(),t.w)},
r3(a){return this.c8(new A.vK(this,a),new A.vL(),t.lI)},
c8(a,b,c){return this.tu(a,b,c,c)},
tu(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c8=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.fZ(),$async$c8)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c8)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(n.j_(),$async$c8)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$c8)
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
i=A.C(g)
if(i instanceof A.dC){j=i
throw A.b(A.EL(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c8,r)},
fZ(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$fZ=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dr(),$async$fZ)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.C(j)
l=A.kU("token provider failed: "+A.p(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fZ,r)},
eo(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$eo=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.ix(),$async$eo)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.C(j)
l=A.kU("token refresh failed: "+A.p(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eo,r)},
j_(){var s=0,r=A.h(t.q),q,p=this
var $async$j_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.eo()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j_,r)},
jI(a,b,c,d){return this.rW(a,b,c,d)},
rW(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jI=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.u(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b4(new A.eu(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jI,r)},
dI(a,b,c){if(B.b.D(b,a.a))return
throw A.b(this.lP(a,c))},
lP(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eE(a)
if(401===s)return new A.bM(q)
if(403===s)return new A.cj(q)
if(404===s)return new A.cl(q)
if(408===s||429===s)return new A.da(r,q)
if(400===s)return new A.dQ(q)
if(s>=500)return new A.hb(q)
return new A.eG("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eE(a){var s,r,q,p,o
try{s=this.d1(a)
r=J.W(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.W(s,"data")
if(t.f.b(q)){p=q
p=p.gY(p)}else p=!1
if(p){p=B.h.a6(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
d1(a){var s,r,q,p=null
try{p=B.h.aE(a.c,null)}catch(r){q=A.C(r)
if(t.Y.b(q)){s=q
throw A.b(A.aR("Response is not valid JSON: "+s.gij()))}else throw r}if(t.f.b(p))return A.bm(p,t.N,t.X)
throw A.b(A.aR("Expected a JSON object, got "+J.bZ(p).l(0)+"."))},
q1(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.p(r)+")"}}
A.vR.prototype={
$1(a){return A.fZ(a,this.a.d)},
$S:129}
A.vQ.prototype={
$1(a){},
$S:14}
A.vM.prototype={
$1(a){var s=this
return s.a.jI(s.b,s.c,s.d,a)},
$S:56}
A.vN.prototype={
$1(a){return a.a},
$S:55}
A.vO.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dw(new A.m1(s.a,s.b,r,s.d,s.e))},
$S:56}
A.vP.prototype={
$1(a){return a.a},
$S:55}
A.vK.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.ek(new A.eu(s.a,s.b,r,s.d))},
$S:138}
A.vL.prototype={
$1(a){return a.a},
$S:143}
A.jh.prototype={}
A.hQ.prototype={}
A.vT.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eT()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aH(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.C()
s=2
return A.a(n instanceof A.w?n:A.bx(n,t.H),$async$aH)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.an()
return A.e(null,r)}})
return A.f($async$aH,r)},
eT(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eT=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.bH(),$async$eT)
case 8:k=0
q=1
s=7
break
case 5:q=4
j=p.pop();++k
s=7
break
case 4:s=1
break
case 7:if(!o.x){s=3
break}s=9
return A.a(A.In(n.$1(k),m),$async$eT)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eT,r)},
lV(a){var s=this.a,r=t.N
return s.a.ek(new A.eu("GET",s.b.bW("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
md(a,b){var s=this.a,r=t.N
return s.a.b4(new A.eu("POST",s.b.bW("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a6(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
bH(){return this.pE()},
pE(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$bH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a
s=3
return A.a(l.hH(),$async$bH)
case 3:k=b
m.a=k
s=4
return A.a(p.lV(k),$async$bH)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.eo(),$async$bH)
case 7:k=b
m.a=k
s=8
return A.a(p.lV(k),$async$bH)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.iH("realtime connect status "+l,null))
s=!p.x?9:10
break
case 9:s=11
return A.a(o.c.aT(new A.vW()).C(),$async$bH)
case 11:s=1
break
case 10:++p.as
p.z=new A.aJ(new A.w($.D,t.D),t.h)
l=$.pu()
n=A.j([],t.s)
m.b=m.c=!1
n=o.c.bA(new A.vX(m,p,new A.An(new A.zc(l),n)),new A.vY(p),new A.vZ(p))
p.y=n
s=!p.x?12:13
break
case 12:s=14
return A.a(n.C(),$async$bH)
case 14:p.y=null
s=1
break
case 13:s=15
return A.a(p.z.a,$async$bH)
case 15:p.y=null
if(m.b)throw A.b(A.iH("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$bH,r)},
dM(a,b){return this.qo(a,b)},
qo(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$dM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=a.a
s=h!=null?3:4
break
case 3:s=5
return A.a(p.md(h,b),$async$dM)
case 5:l=d
s=l.a===401?6:8
break
case 6:g=h
s=10
return A.a(p.a.eo(),$async$dM)
case 10:s=9
return A.a(p.md(g,d),$async$dM)
case 9:s=7
break
case 8:d=l
case 7:k=d.a
if(k!==204&&k!==200)throw A.b(A.iH("realtime subscribe status "+k,null))
s=1
break
case 4:j=a.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
if(!t.f.b(n)){s=1
break}try{m=A.fZ(n,p.a.d)
p.w.$1(new A.jh(o,m))}catch(f){}case 1:return A.e(q,r)}})
return A.f($async$dM,r)}}
A.w_.prototype={
$1(a){return A.Gt(a,this.a,this.b,A.Ne())},
$S:144}
A.vW.prototype={
$1(a){},
$S:14}
A.vX.prototype={
$1(a){var s,r,q,p,o,n,m=this.c.v8(a)
for(s=m.length,r=this.b,q=this.a,p=t.P,o=0;o<m.length;m.length===s||(0,A.r)(m),++o){n=m[o]
r.Q=r.Q.W(new A.vU(q,r,n),p).jV(new A.vV(r))}},
$S:14}
A.vU.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=n.a
if(i.b){s=1
break}p=4
s=7
return A.a(n.b.dM(n.c,i.a),$async$$1)
case 7:p=2
s=6
break
case 4:p=3
h=o.pop()
i.b=!0
i=n.b
j=i.y
j=j==null?null:j.C()
s=8
return A.a(j instanceof A.w?j:A.bx(j,t.H),$async$$1)
case 8:i=i.z
if((i.a.a&30)===0)i.an()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!i.c&&n.c.a!=null){i.c=!0
try{n.b.r.$0()}catch(g){m=A.C(g)
l=A.ad(g)
i=n.b
i.at=m
i.ax=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:149}
A.vV.prototype={
$2(a,b){var s=this.a
if(s.at==null)s.at=a
if(s.ax==null)s.ax=b},
$S:7}
A.vY.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:0}
A.vZ.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:19}
A.An.prototype={
v8(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.kC()
r=A.j([],t.gy)
for(q=s.length,p=0;;){o=this.qA(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dp(p,o,q)))
p=o+1
m=this.pS(B.a.x4(new A.dm(!0).d_(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.f.b5(s,p))
return r},
qA(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
qh(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.am(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.am(k)
try{q=B.h.aE(r,l)
if(t.f.b(q)){p=A.bm(q,t.N,t.X)
o=J.W(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.hQ(o,l)
return new A.hQ(l,p)}}catch(n){}return l},
pS(a){var s,r=this,q=null
if(a.length===0)return r.qh()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.am(r.c)
return new A.hQ(B.a.cm(B.a.ae(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.cm(B.a.ae(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.cm(B.a.ae(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eu.prototype={}
A.dB.prototype={
ox(){return this.d.$0()},
gm(a){return this.c}}
A.m1.prototype={}
A.cH.prototype={}
A.dC.prototype={
l(a){return"HttpTransportException: "+this.a},
$iG:1}
A.dT.prototype={}
A.vH.prototype={
b4(a){return this.om(a)},
om(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.ek(a),$async$b4)
case 7:m=c
j=m.c
s=8
return A.a(B.aN.l_(j).ed(0).fG(B.ae),$async$b4)
case 8:l=c
j=m.a
i=m.b
q=new A.cH(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.C(g)
if(j instanceof A.dC)throw g
else{k=j
j=A.iH("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
dw(a){return this.on(a)},
on(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dw=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.IR(a6.a,a6.b)
h.r.E(0,a6.c)
h.x.E(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.ox(),$async$dw)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.GO(a0)
a3=new A.fP("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cS(A.u(d,d),e))
b.push(new A.ms(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.r)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b4(m).fG(B.ae),$async$dw)
case 11:k=a8
g=k.w
s=12
return A.a(B.aN.l_(g).ed(0).fG(B.ae),$async$dw)
case 12:j=a8
g=k.b
f=k.e
q=new A.cH(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.C(a5)
if(g instanceof A.dC)throw a5
else{i=g
g=A.iH("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dw,r)},
ek(a){return this.wg(a)},
wg(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ek=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.Jd(a,a0)
a1.r.E(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gka().k9(j)
i.pp()
i.y=A.No(j)
h=i.gct()
if(h==null){j=t.N
i.sct(A.Cu("text","plain",A.m(["charset",i.gka().gaP()],j,j)))}else{j=i.gct()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.bQ(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gka().gaP()],j,j)
e=h.a
d=h.b
c=A.bm(h.c,j,j)
c.E(0,f)
i.sct(A.Cu(e,d,c))}}}p=4
s=7
return A.a(n.a.b4(a1).fG(B.ae),$async$ek)
case 7:m=a5
j=t.N
l=A.u(j,j)
m.e.a8(0,new A.vI(l))
j=m.b
i=m.w
q=new A.dT(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.C(a2)
if(j instanceof A.dC)throw a2
else{k=j
a=A.iH("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ek,r)}}
A.vI.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:37}
A.qN.prototype={
$1(a){return a.b===this.a},
$S:157}
A.qO.prototype={
$1(a){return a.b===this.a},
$S:158}
A.lf.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.Q(s,A.n(s).c)
B.b.aG(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.Q(s,A.n(s).c)
B.b.aG(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.c1.prototype={}
A.lb.prototype={
gV(){return"committedChange"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"id",r.b)
q.j(0,"origin",r.c.b)
q.j(0,"action",r.d.b)
s=r.e
if(s!=null)q.j(0,"oldRecord",s)
s=r.f
if(s!=null)q.j(0,"newRecord",s)
s=r.r
s=A.Q(s,A.n(s).c)
B.b.aG(s)
q.j(0,"changedFields",s)
return q}}
A.li.prototype={
gV(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jD.prototype={
gV(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.lS.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"refId",r.a)
q.j(0,"store",r.b)
q.j(0,"recordId",r.c)
q.j(0,"field",r.d)
q.j(0,"hash",r.e)
s=r.f
if(s!=null)q.j(0,"remoteName",s)
q.j(0,"state",r.r)
q.j(0,"nextRetryAt",r.w)
q.j(0,"attemptCount",r.x)
s=r.y
if(s!=null)q.j(0,"lastError",s)
return q}}
A.lI.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"size",r.e)
q.j(0,"field",r.c)
q.j(0,"name",r.d)
s=r.f
if(s!=null)q.j(0,"expectedSha256",s)
if(r.r)q.j(0,"allowVolatileBlobs",!0)
return q}}
A.lJ.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.lN.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lK.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.lH.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lX.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.lQ.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lL.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.lU.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lO.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.lB.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.ni.prototype={
p(){return B.j}}
A.lW.prototype={
gV(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.lT.prototype={
gV(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fH.prototype={
gV(){return"fileRefs"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.lR.prototype={
gV(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fG.prototype={
gV(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fE.prototype={
gV(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.hi.prototype={
gV(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fF.prototype={
gV(){return"fileChunk"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",r.b)
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.vl.prototype={}
A.j1.prototype={}
A.j4.prototype={}
A.j2.prototype={}
A.j5.prototype={}
A.iZ.prototype={}
A.j_.prototype={}
A.iY.prototype={}
A.j3.prototype={}
A.j0.prototype={}
A.B4.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.wG.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.u(k,j),h=t.d,g=A.j([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)g.push(s[q].p())
i.j(0,"where",g)
g=A.j([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=A.j([],h)
for(n=B.b.gu(p);n.k();)o.push(n.gn().p())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.p())
h=A.j([],h)
for(g=l.d,s=g.length,q=0;q<g.length;g.length===s||(0,A.r)(g),++q){m=g[q]
h.push(A.m(["field",m.a,"desc",m.b],k,j))}i.j(0,"order",h)
k=l.e
if(k!=null)i.j(0,"limit",k)
i.j(0,"all",l.f)
k=l.r
if(k!=null)i.j(0,"select",k)
i.j(0,"includeArchived",l.w)
i.j(0,"includeHidden",l.x)
k=l.y
if(k!=null)i.j(0,"cursor",k)
i.j(0,"backward",l.z)
return i}}
A.wH.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.wI.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.N("Malformed query conditions."))
s=A.j([],t.cM)
for(r=J.E(a);r.k();)s.push(A.Ez(r.gn()))
return s},
$S:172}
A.eH.prototype={
p(){var s,r,q,p,o=this,n=A.u(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.r)(s),++p)r.push(A.fe(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.fe(o.c))
return n}}
A.wC.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.wD.prototype={
$1(a){return a.b===this.a},
$S:177}
A.aZ.prototype={
a4(){return"QueryConditionOp."+this.b}}
A.cL.prototype={}
A.w4.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.w3.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.N("Malformed predicate children."))
s=A.j([],t.eK)
for(r=J.E(a);r.k();)s.push(A.Cw(r.gn()))
return s},
$S:179}
A.iS.prototype={
p(){var s=A.u(t.N,t.X)
s.j(0,"kind","leaf")
s.E(0,this.a.p())
return s}}
A.jc.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.id.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.ie.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mS.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.wF.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.cB.prototype={
a4(){return"AggregateFn."+this.b}}
A.wW.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.wX.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.mX.prototype={}
A.mD.prototype={
p(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.l6.prototype={
p(){return B.j}}
A.m_.prototype={
p(){return B.j}}
A.l9.prototype={
p(){return B.j}}
A.lY.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.n0.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mt.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.L2(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mT.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.ll.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lk.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lx.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.m2.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kM.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.lE.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.n6.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dV.prototype={
a4(){return"TransactionDurability."+this.b}}
A.nF.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.nG.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nI.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nK.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nJ.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nH.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nZ.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.o_.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.nY.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kO.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.nX.prototype={
p(){return B.j}}
A.nV.prototype={
p(){return B.j}}
A.mP.prototype={
p(){return B.j}}
A.lc.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.n1.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lh.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.lg.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.mZ.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.kJ.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.kK.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.lj.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ag.prototype={}
A.fX.prototype={
gV(){return"ok"},
p(){return B.j}}
A.im.prototype={
gV(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.m0.prototype={
gV(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.h7.prototype={
gV(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.h8.prototype={
gV(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fT.prototype={
gV(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.h3.prototype={
gV(){return"queryRows"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fz.prototype={
gV(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fA.prototype={
gV(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fM.prototype={
gV(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fn.prototype={
gV(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fD.prototype={
gV(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.ha.prototype={
gV(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.j([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.n5.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fx.prototype={
gV(){return"conflicts"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fw.prototype={
gV(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hn.prototype={
gV(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hu.prototype={
gV(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.h0.prototype={
gV(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fu.prototype={
gV(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.eN.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"state",r.a.b)
q.j(0,"pending",r.b)
q.j(0,"conflicts",r.c)
q.j(0,"hidden",r.d)
q.j(0,"blocked",r.e)
s=r.f
if(s!=null)q.j(0,"lastError",s)
s=r.r
if(s!=null)q.j(0,"lastSyncAt",s)
s=r.w
if(s!=null)q.j(0,"lastSuccessfulSyncAt",s)
return q}}
A.b5.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"},
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.nv.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.nA.prototype={
p(){return B.j}}
A.nq.prototype={
p(){return B.j}}
A.nr.prototype={
p(){return B.j}}
A.nt.prototype={
p(){return B.j}}
A.nB.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.nu.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.ny.prototype={
p(){return B.j}}
A.nw.prototype={
gV(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.ns.prototype={
gV(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.nz.prototype={
gV(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.nx.prototype={
gV(){return"syncStatusEvent"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.kV.prototype={
gV(){return"authRequired"},
p(){return B.j}}
A.eS.prototype={
l(a){return"WireException: "+this.a},
$iG:1}
A.C0.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:180}
A.mK.prototype={
a4(){return"PlatformProfile."+this.b}}
A.nh.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.x6.prototype={
$1(a){return J.bY(a.gaY())},
$S:35}
A.x7.prototype={
$1(a){return B.a.D(a,"ENABLE_FTS5")},
$S:10}
A.ip.prototype={
a4(){return"ChangeOrigin."+this.b}}
A.dy.prototype={
a4(){return"ChangeAction."+this.b}}
A.aU.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"id",r.b)
q.j(0,"origin",r.c.b)
q.j(0,"action",r.d.b)
s=r.e
if(s!=null)q.j(0,"oldRecord",s)
s=r.f
if(s!=null)q.j(0,"newRecord",s)
s=r.r
s=A.Q(s,A.n(s).c)
B.b.aG(s)
q.j(0,"changedFields",s)
return q},
P(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aU))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.r.Z(b.e,s.e)&&B.r.Z(b.f,s.f)&&B.r.Z(b.r,s.r)},
gJ(a){var s=this
return A.c4(s.a,s.b,s.c,s.d,B.r.ac(s.e),B.r.ac(s.f),B.r.ac(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a2.prototype={}
A.q1.prototype={
k8(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
uW(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.q2.prototype={}
A.q3.prototype={}
A.rF.prototype={}
A.pB.prototype={
uX(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cL(256)
q=this.b.uY(new Uint8Array(A.b9(a)),b,m,this.c)
s=q.a
p=s.length
o=29+p
n=new Uint8Array(o)
n[0]=1
B.f.aw(n,1,13,q.c)
p=13+p
B.f.aw(n,13,p,s)
B.f.aw(n,p,o,q.b.a)
return n},
ug(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.P("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.A("Unsupported ciphertext version 0x"+B.a.iq(B.c.kE(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b9(B.f.U(a,1,13)))
n-=16
r=new Uint8Array(A.b9(B.f.b5(a,n)))
q=new Uint8Array(A.b9(B.f.U(a,13,n)))
try{n=this.b.uh(new A.jp(q,new A.iV(r),s),b,this.c)
return n}catch(o){if(A.C(o) instanceof A.jq)throw A.b(A.A("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d2.prototype={
a4(){return"KindViolation."+this.b}}
A.Bj.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:187}
A.f6.prototype={$iG:1}
A.A1.prototype={
cb(){var s=0,r=A.h(t.N),q,p=this,o
var $async$cb=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cb,r)}}
A.p0.prototype={}
A.hO.prototype={}
A.tG.prototype={
oO(a){var s=this,r=s.a.a.a$.b
r=new A.b1(r,A.n(r).i("b1<1>")).aT(new A.u6(s))
s.c!==$&&A.ce()
s.c=r},
vk(a){var s,r,q=this
A:{if(a instanceof A.mD){s=q.hi(a.a,a.b)
break A}if(a instanceof A.l6){s=A.bb(q.h_(),t.V)
break A}if(a instanceof A.m_){s=A.bb(new A.m0(!0,q.a.d.a),t.V)
break A}if(a instanceof A.l9){s=q.q().W(new A.u7(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lY){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bx(r,new A.u8(s,q),new A.u9())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.n0){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bx(r,new A.uk(s,q),new A.uv())
break A}if(a instanceof A.mt){s=q.qL(a.a,a.b,a.c)
break A}if(a instanceof A.mT){s=q.r4(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ll){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bx(r,new A.uw(s,q),A.Gk())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lk){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bx(r,new A.ux(s,q),A.Gk())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lx){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bx(r,new A.uy(s,q),A.Mr())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.m2){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bx(r,new A.uz(s,q),A.Mt())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kM){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bx(r,new A.uA(s,q),A.Mq())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lE){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bx(r,new A.uB(s,q),A.Ms())
break A}if(a instanceof A.n6){s=q.rS(a.a,a.b,a.c)
break A}if(a instanceof A.nF){s=q.pc(a.a,a.b)
break A}if(a instanceof A.nG){s=q.eV(a.a,!0)
break A}if(a instanceof A.nI){s=q.eV(a.a,!1)
break A}if(a instanceof A.nK){s=q.hq(a.a,a.b)
break A}if(a instanceof A.nJ){s=q.hp(a.a,a.b)
break A}if(a instanceof A.nH){s=q.hn(a.a,a.b)
break A}if(a instanceof A.nZ){s=q.hx(a.a,a.b)
break A}if(a instanceof A.o_){s=q.tr(a.a,a.b)
break A}if(a instanceof A.nY){s=q.jO(a.a)
break A}if(a instanceof A.kO){s=q.a.a.e2(a.a).W(new A.ua(),t.V)
break A}if(a instanceof A.nX){s=q.a.a.fJ().W(new A.ub(),t.V)
break A}if(a instanceof A.nV){s=q.a.a.iE().W(new A.uc(),t.V)
break A}if(a instanceof A.mP){s=q.a.a.ft().W(new A.ud(),t.V)
break A}if(a instanceof A.lc){s=q.a.a.e6(a.a,A.d_(0,a.b,0)).W(new A.ue(),t.V)
break A}if(a instanceof A.n1){s=q.a.a.cP(A.d_(0,a.a,0)).W(new A.uf(),t.V)
break A}if(a instanceof A.lh){s=q.a.a.db
s===$&&A.v()
s=s.fi(a.a).W(new A.ug(q),t.V)
break A}if(a instanceof A.lg){s=q.a.a.db
s===$&&A.v()
s=s.dv(a.a,a.b).W(new A.uh(q),t.V)
break A}if(a instanceof A.mZ){s=q.a.a.db
s===$&&A.v()
s=s.ep(a.b,a.c,a.a).W(new A.ui(),t.V)
break A}if(a instanceof A.kJ){s=q.a.a.db
s===$&&A.v()
s=s.eX(a.a,a.b).W(new A.uj(),t.V)
break A}if(a instanceof A.kK){s=q.a.a.db
s===$&&A.v()
s=s.e0(a.a,a.b).W(new A.ul(),t.V)
break A}if(a instanceof A.lj){s=q.ts(a.a)
break A}if(a instanceof A.lI){s=q.jd(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.lJ){s=q.je(a.a,a.b)
break A}if(a instanceof A.lN){s=q.ha(a.a)
break A}if(a instanceof A.lH){s=q.jc(a.a)
break A}if(a instanceof A.lX){s=q.a.a.dx
s===$&&A.v()
s=s.ef(a.c,a.b,a.a).W(new A.um(q),t.V)
break A}if(a instanceof A.lQ){s=q.hb(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.lL){s=q.jf(a.a,a.b)
break A}if(a instanceof A.lK){s=q.h9(a.a)
break A}if(a instanceof A.lU){s=q.a.a.dx
s===$&&A.v()
s=s.fA(0,a.c,a.d,a.b,a.e,a.a).W(new A.un(),t.V)
break A}if(a instanceof A.lO){s=q.a.a.dx
s===$&&A.v()
s=s.bi(A.d_(0,a.a,0),A.d_(0,a.b,0)).W(new A.uo(),t.V)
break A}if(a instanceof A.lB){s=q.a.a.dx
s===$&&A.v()
s=s.cF(a.a).W(new A.up(),t.V)
break A}if(a instanceof A.ni){s=q.a.a.dx
s===$&&A.v()
s=s.gib().W(new A.uq(),t.V)
break A}if(a instanceof A.nv){s=q.dZ(a.a,a.b,a.c)
break A}if(a instanceof A.nA){s=q.cC().W(new A.ur(),t.V)
break A}if(a instanceof A.nq){s=q.hs()
break A}if(a instanceof A.nr){s=q.dY(new A.us(q))
break A}if(a instanceof A.nt){s=q.dY(new A.ut(q))
break A}if(a instanceof A.nB){s=q.ht(a.a)
break A}s={}
s.a=null
if(a instanceof A.nu){s.a=a.a
s=q.dY(new A.uu(s,q))
break A}if(a instanceof A.ny){s=q.as
s=A.bb(new A.nz(s==null?B.dC:s),t.V)
break A}throw A.b(A.eJ(u.P))}return s},
hi(a,b){return this.r2(a,b)},
r2(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hi=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.q7(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:s=9
return A.a(n.aQ(j),$async$hi)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.t(A.A('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.CG(j)
e=new A.a3("")
A.cf(e,g.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c0()
b=A.cW(c)
b.t(0,d)
b.q()
b=A.ar(c.a.a)
e=new A.a3("")
A.cf(e,f.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c0()
a=A.cW(c)
a.t(0,d)
a.q()
if(b!==A.ar(c.a.a))throw A.b(A.aB('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.t(A.A('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a3("")
A.cf(e,h.c.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c0()
b=A.cW(c)
b.t(0,d)
b.q()
b=a0!==A.ar(c.a.a)
d=b}else d=!1
if(d)throw A.b(A.aB('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.r)(a1),++k
s=3
break
case 5:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
h_(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$h_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bY(B.b.gH(m.b.oj("PRAGMA journal_mode")).gaY())
m=m.a.dx
m===$&&A.v()
s=3
return A.a(m.gib(),$async$h_)
case 3:o=b
m=l.e===B.aB
n=m?"opfs":"file"
q=new A.im(l.a,l.b,l.c,l.d,m,n,o,J.Z(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h_,r)},
dF(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.au(a)
if(b!=null){s=this.d6(b)
r=A.Ee(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.t(A.A('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.d6(b)
return new A.ft(n,m,new A.iA(q),p.r)}return new A.ft(n,m,o.gbp(),null)},
pr(a){return this.dF(a,null)},
qL(a,b,c){return this.bx(c,new A.tS(this,a,c,b),new A.tT())},
bt(a,b){var s
A.ar(B.l.v(B.e.v(A.ai(this.a.a.au(a).c.p()))).a)
if(a.length===0)A.t(A.az(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.t(A.az(s,"spec.limit","must not be negative"))
return new A.wE(a,b)},
ba(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.dF(a.a,a0),c=t.fC,b=new A.mR(d.a,d.b.a,d.c.b,A.j([],c),A.j([],c),A.j([],t.k),A.j([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.r)(d),++s)b=this.p8(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.r)(d),++s){o=d[s]
n=A.j([],p)
for(m=B.b.gu(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bf)throw A.b(A.ah('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.wi(n)}j=e.c
if(j!=null){d=A.BO(j)
b.jP(d)
A.D8(d)
i=A.B1(d,!0)
h=b.h2()
h.d.push(new A.b0(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.r)(d),++s,b=h){g=d[s]
q=g.a
b.cY(q)
h=b.h2()
h.r.push(new A.cm(q,g.b))}d=e.r
if(d!=null)b=b.ln(A.bF(d,!0,r))
if(e.w)b=b.pI(!0)
if(e.x)b=b.pJ(!0)
if(e.f)b=b.pG(!0)
else{d=e.e
if(d!=null){if(d<0)A.t(A.ah("Limit must be non-negative, got "+A.p(d)+".",f))
b=b.pK(d)}}return b},
p8(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.nv(0,b.a,!0)
return a.xi(0,b.a,s)
case 1:return a.xp(0,b.a,b.c)
case 2:return a.xj(0,b.a,b.c)
case 3:return a.xk(0,b.a,b.c)
case 4:return a.xn(0,b.a,b.c)
case 5:return a.xo(0,b.a,b.c)
case 6:return a.xl(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.n
if(r.length!==2)throw A.b(A.P("between requires exactly two values.",null))
return a.xf(0,b.a,new A.a5(r[0],r[1]))
case 8:return a.xq(0,b.a,A.a6(b.c))
case 9:return a.xh(0,b.a,A.a6(b.c))
case 10:return a.xg(0,b.a,A.a6(b.c))
case 11:return a.nv(0,b.a,!0)
case 12:return a.xm(0,b.a,!0)}},
r4(a,b,c){return this.bx(c,new A.tU(this,this.bt(a,b),c),new A.tV())},
rS(a,b,c){return this.bx(c,new A.tY(this,a,c,b),new A.tZ())},
pc(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.A("A transaction session is already active on this database."))
s="tx"+ ++l.at
r=$.D
q=t.D
p=t.h
o=new A.w(r,q)
n=new A.p0(s,new A.aJ(new A.w(r,q),p),new A.aJ(o,p),A.j([],t.mc),new A.aP(Date.now(),0,!1))
k.j(0,s,n)
l.q_()
m=l.a.a
k=new A.tJ(n)
if(a){if(A.nL(m)!=null)A.t(A.A(u.L))
r=m.b
r===$&&A.v()
k=r.wD(k,t.H)}else{r=b===B.bp?B.aY:B.p
r=m.aX(k,r,t.H)
k=r}n.w!==$&&A.ce()
n.w=k
k.jV(new A.tH(l,n,s))
return o.W(new A.tI(s),t.V)},
eV(a,b){return this.t0(a,b)},
t0(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eV=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d6(a)
for(l=h.e,k=A.a0(l).i("bw<1>"),l=new A.bw(l,k),l=new A.ao(l,l.gm(0),k.i("ao<a_.E>")),k=k.i("a_.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.t(A.A("Future already completed"))
j.aD(null)}h.f=!b
h.c.an()
p=4
l=h.w
l===$&&A.v()
s=7
return A.a(l,$async$eV)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.C(g) instanceof A.f6){if(b)throw g}else throw g
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.d.G(0,a)
s=n.pop()
break
case 6:q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eV,r)},
hq(a,b){return this.rP(a,b)},
rP(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hq=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d6(a)
n=$.D
m=t.D
l=t.h
k=new A.w(n,m)
j=new A.hO(b,new A.aJ(new A.w(n,m),l),new A.aJ(k,l))
l=o.r.a2(new A.tX(j),t.H)
j.f!==$&&A.ce()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hq)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
hp(a,b){return this.rN(a,b)},
rN(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hp=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d6(a).e
f=B.b.mY(g,new A.tW(b))
if(f<0)throw A.b(A.A('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a0(g).i("bw<1>")
l=A.Q(new A.bw(g,l),l.i("a_.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bR(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.t(A.A("Future already completed"))
i.aD(null)
p=7
i=m.f
i===$&&A.v()
s=10
return A.a(i,$async$hp)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.C(e) instanceof A.f6))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.r)(l),++j
s=3
break
case 5:B.b.iA(g,f,g.length)
q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hp,r)},
hn(a,b){return this.rF(a,b)},
rF(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hn=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d6(a).e
j=A.Ee(k)
if(j==null||j.a!==b)throw A.b(A.A('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.an()
p=4
m=j.f
m===$&&A.v()
s=7
return A.a(m,$async$hn)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.C(i) instanceof A.f6)throw i
else throw i
s=6
break
case 3:s=2
break
case 6:k.pop()
q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hn,r)},
hx(a,b){return this.tt(a,b)},
tt(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hx=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.au(a)
s=3
return A.a(p.pr(a).bY(b),$async$hx)
case 3:o="w"+ ++p.at
n=A.yM()
n.shY(new A.mC(l,b,m,B.aZ).iR().n4(new A.u2(p,o),new A.u3(p,n,o)))
p.f.j(0,o,n.bb())
q=A.bb(new A.hu(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hx,r)},
tr(a,b){var s=this,r="w"+ ++s.at,q=s.ba(s.bt(a,b),null),p=A.yM()
p.shY(new A.mU(q,q.gdW(),B.aZ).iR().n4(new A.u4(s,r),new A.u5(s,p,r)))
s.f.j(0,r,p.bb())
return A.bb(new A.hu(r),t.V)},
jO(a){return this.ti(a)},
ti(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.G(0,a)
if(o!=null)o.C()
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jO,r)},
q0(){if(this.w!=null)return
this.w=A.CP(A.d_(9e8,0,0),new A.tN(this))},
jd(a,b,c,d,e,f,g){return this.q9(a,b,c,d,e,f,g)},
q9(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$jd=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.q0()
o=p.r
n="u"+ ++p.at
o.mT()
m=o.r
if(m.a>=16)A.t(A.ah("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.t(A.ah("Invalid file size: "+c,null))
if(o.gnq()+c>536870912)A.t(A.ah("Aggregate upload quota exceeded: "+o.gnq()+" + "+c+" > 536870912",null))
o=o.f.$0().iZ(18e8)
m.j(0,n,new A.cG(n,a,b,d,e,c,f,g,A.j([],t.bs),o))
q=new A.lW("u"+p.at,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jd,r)},
je(a,b){return this.qa(a,b)},
qa(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$je=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.t(A.ah("Unknown upload session: "+a,null))
l=l.f
if(!j.z.km(l.$0())){k.G(0,a)
A.t(A.ah("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.G(0,a)
A.t(A.ah("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.G(0,a)
A.t(A.ah("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().iZ(18e8)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$je,r)},
ha(a){return this.qd(a)},
qd(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$ha=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.r
g=h.r.G(0,a)
if(g==null)A.t(A.ah("Unknown upload session: "+a,null))
if(!g.z.km(h.f.$0()))A.t(A.ah("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.t(A.ah("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.dx
h===$&&A.v()
n=g.b
m=g.c
l=new A.tO(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.d9(g.w,l,i,o,k,j,m,n),$async$ha)
case 3:q=new f.lT(p.lB(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
jc(a){return this.q8(a)},
q8(a){var s=0,r=A.h(t.V),q,p=this
var $async$jc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.G(0,a)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jc,r)},
hb(a,b,c,d,e){return this.qf(a,b,c,d,e)},
qf(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$hb=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.dx
k===$&&A.v()
s=3
return A.a(k.fo(c,d,b,e,a),$async$hb)
case 3:o=g
n="f"+ ++p.at
m=new A.lM()
l=A.yM()
l.shY(o.bA(new A.tP(p,m,n,l),new A.tQ(p,n),new A.tR(p,n)))
k=l.bb()
m.c!==$&&A.ce()
m.c=k
p.x.j(0,n,m)
q=new A.lR(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
jf(a,b){return this.qc(a,b)},
qc(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$jf=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.A('Unknown file stream "'+a+'".'))
o=n.b-=b
if((o<0?n.b=0:o)<1048576){o=n.c
o===$&&A.v()
o.b1()}q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jf,r)},
h9(a){return this.qb(a)},
qb(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$h9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.G(0,a)
s=n!=null?3:4
break
case 3:o=n.c
o===$&&A.v()
s=5
return A.a(o.C(),$async$h9)
case 5:case 4:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
lB(a){return new A.lS(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
dZ(a,b,c){return this.ta(a,b,c)},
ta(a,b,a0){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$dZ=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.ah("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cC(),$async$dZ)
case 3:if(b==null||b.length===0)throw A.b(A.ah("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.A1(a0)
m=A.nS(a)
l=o.dy
k=A.n(l).i("T<1>")
l=A.Q(new A.T(l,k),k.i("o.E"))
s=4
return A.a(o.as.hN(m,b,l,n),$async$dZ)
case 4:j=a2
m=A.dS(null,null,t.n6)
l=A.dS(null,null,t.ic)
k=t.H
i=A.bb(null,k)
h=new A.pC(A.bb(null,k))
g=A.bb(B.O,t.fD)
f=A.j([],t.s)
k=A.bb(null,k)
e=new A.xn(A.Nl(),o.CW)
d=new A.no(o,j,e,new A.u_(p),B.N,m,l,i,h,A.aL(t.N),g,f,k)
c=j.r
m=d.e=new A.xA(o,B.a.A(A.ar(B.l.v(B.e.v(j.b.l(0)+"|"+c)).a),0,12))
k=new A.rI(o,j,e,o.ax)
d.x=k
k=new A.wf(o,j,e,m,k,h)
d.f=k
d.r=new A.xl(o,j,e,m,k)
d.w=new A.wo(o,j,e,d.gqP(),j.as)
p.z=n
p.y=d
p.Q=new A.b1(l,A.n(l).i("b1<1>")).aT(new A.u0(p))
s=5
return A.a(d.az(),$async$dZ)
case 5:q=new A.nw(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
eR(){var s=this.y
return s==null?A.t(A.ah("Sync is not started.",null)):s},
hs(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hs=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.eR()
o.c5("cycle")
n=A
s=3
return A.a(o.eS(),$async$hs)
case 3:q=new n.ns(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)},
dY(a){var s=0,r=A.h(t.V),q
var $async$dY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$dY)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dY,r)},
ht(a){return this.tb(a)},
tb(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$ht=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.z
n=p.eR()
if(o==null)throw A.b(A.ah("Sync is not started.",null))
o.a=a
s=3
return A.a(n.eg(),$async$ht)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
cC(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.y
q.y=null
p=q.Q
p=p==null?null:p.C()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bx(p,o),$async$cC)
case 2:q.Q=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aH(),$async$cC)
case 5:p=q.a.a.as.hT(n)
s=6
return A.a(p,$async$cC)
case 6:case 4:q.as=q.z=null
return A.e(null,r)}})
return A.f($async$cC,r)},
j5(a){return new A.lf(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
ts(a){var s=this,r="w"+ ++s.at,q=s.a.a.db
q===$&&A.v()
s.f.j(0,r,q.xe(a).aT(new A.u1(s,r)))
return A.bb(new A.hu(r),t.V)},
d6(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.A('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.A('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aP(Date.now(),0,!1)
return s},
q_(){var s,r,q=this
if(q.e!=null)return
s=q.a.ax
r=s.a
if(r<=0)return
q.e=A.CP(A.d_(B.c.M(r,4),0,0),new A.tM(q,s))},
hy(a,b,c){return this.tw(a,b,c)},
bx(a,b,c){return this.hy(a,b,c,t.z)},
tw(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hy=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d6(a)
o=c
s=3
return A.a(b.$0(),$async$hy)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hy,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cC(),$async$q)
case 2:p=q.f,o=new A.aT(p,p.r,p.e,A.n(p).i("aT<2>"))
case 3:if(!o.k()){s=4
break}s=5
return A.a(o.d.C(),$async$q)
case 5:s=3
break
case 4:p.am(0)
p=q.w
if(p!=null)p.C()
q.w=null
p=q.e
if(p!=null)p.C()
q.e=null
q.r.r.am(0)
for(p=q.x,o=new A.aT(p,p.r,p.e,A.n(p).i("aT<2>"));o.k();){n=o.d.c
n===$&&A.v()
n.C()}p.am(0)
p=q.c
p===$&&A.v()
p.C()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.u6.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cJ(r,t.N,t.X)
s=a.f
s=s==null?null:A.cJ(s,t.N,t.X)
this.a.b.t(0,new A.lb(a.a,a.b,a.c,a.d,r,s,A.d3(a.r,t.N)))},
$S:188}
A.u7.prototype={
$1(a){return B.k},
$S:8}
A.u8.prototype={
$0(){var s=this.a
return this.b.dF(s.c,s.a).bY(s.b)},
$S:194}
A.u9.prototype={
$1(a){return new A.h7(a)},
$S:196}
A.uk.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.j([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dF(o.c,o.a).bY(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.r)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:197}
A.uv.prototype={
$1(a){return new A.h8(a)},
$S:212}
A.uw.prototype={
$0(){var s=this.b,r=this.a
return s.ba(s.bt(r.c,r.b),r.a).hK()},
$S:50}
A.ux.prototype={
$0(){var s=this.b,r=this.a
return s.ba(s.bt(r.d,r.b),r.a).hM(r.c)},
$S:50}
A.uy.prototype={
$0(){var s=this.b,r=this.a
return s.ba(s.bt(r.d,r.b),r.a).hU(r.c)},
$S:217}
A.uz.prototype={
$0(){var s=this.b,r=this.a
return s.ba(s.bt(r.c,r.b),r.a).ia()},
$S:49}
A.uA.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.ba(s.bt(q.e,q.b),q.a).cX("SUM",q.c)
break
case 1:s=r.b
q=s.ba(s.bt(q.e,q.b),q.a).cX("AVG",q.c)
break
case 2:s=r.b
q=s.ba(s.bt(q.e,q.b),q.a).cX("MIN",q.c)
break
case 3:s=r.b
q=s.ba(s.bt(q.e,q.b),q.a).cX("MAX",q.c)
break
default:q=null}return q},
$S:236}
A.uB.prototype={
$0(){var s=this.b,r=this.a
return s.ba(s.bt(r.c,r.b),r.a).hV()},
$S:73}
A.ua.prototype={
$1(a){return B.k},
$S:8}
A.ub.prototype={
$1(a){return B.k},
$S:8}
A.uc.prototype={
$1(a){return B.k},
$S:8}
A.ud.prototype={
$1(a){return new A.h0(a)},
$S:74}
A.ue.prototype={
$1(a){return new A.fu(a)},
$S:75}
A.uf.prototype={
$1(a){return B.k},
$S:8}
A.ug.prototype={
$1(a){var s,r,q=A.j([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.j5(s.gn()))
return new A.fx(q)},
$S:76}
A.uh.prototype={
$1(a){return new A.fw(a==null?null:this.a.j5(a))},
$S:77}
A.ui.prototype={
$1(a){return B.k},
$S:8}
A.uj.prototype={
$1(a){return B.k},
$S:8}
A.ul.prototype={
$1(a){return B.k},
$S:8}
A.um.prototype={
$1(a){var s,r,q=A.j([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.lB(s.gn()))
return new A.fH(q)},
$S:78}
A.un.prototype={
$1(a){return B.k},
$S:8}
A.uo.prototype={
$1(a){return new A.fG(a)},
$S:79}
A.up.prototype={
$1(a){return new A.fE(a)},
$S:80}
A.uq.prototype={
$1(a){return new A.hi(a)},
$S:81}
A.ur.prototype={
$1(a){return B.k},
$S:8}
A.us.prototype={
$0(){return this.a.eR().bf()},
$S:3}
A.ut.prototype={
$0(){return this.a.eR().b1()},
$S:3}
A.uu.prototype={
$0(){return this.b.eR().fT(this.a.a)},
$S:3}
A.tS.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dF(p.b,a1)
a0.a.a.c===$&&A.v()
o=p.d
n=o instanceof A.j1
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.iu(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.il(B.a0,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.j([A.F(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 4:n=o instanceof A.j4
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.ns(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.il(B.a1,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.j([A.F(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 11:k=o instanceof A.j2
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.nd(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.ne(i),$async$$0)
case 23:case 20:a0=A.j([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.r)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 18:k=o instanceof A.j5
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nt(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bB(i,B.a1),$async$$0)
case 30:case 27:a0=A.j([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.r)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iZ
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.na(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cO(b,c,!1),$async$$0)
case 37:case 34:q=A.j([b],t.s)
s=1
break
case 32:a0=o instanceof A.j_
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.nb(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.fp(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.Q(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iY
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mx(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.ik(B.C,b),$async$$0)
case 51:case 48:q=A.j([b],t.s)
s=1
break
case 46:e=o instanceof A.j3
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.nn(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.ik(B.E,b),$async$$0)
case 58:case 55:q=A.j([b],t.s)
s=1
break
case 53:e=o instanceof A.j0
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.kw(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.dl(b),$async$$0)
case 65:case 62:q=A.j([b],t.s)
s=1
break
case 60:throw A.b(A.eJ(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:49}
A.tT.prototype={
$1(a){return new A.fT(a)},
$S:72}
A.tU.prototype={
$0(){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
l=m.b
k=l.y
s=k!=null?3:4
break
case 3:o=p.a
n=p.c
s=l.z?5:7
break
case 5:s=8
return A.a(o.ba(m,n).pL(!0,k).cH(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.ba(m,n).pH(k).cH(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.ba(m,p.c).cH()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:83}
A.tV.prototype={
$1(a){return new A.h3(a.a,a.d,a.e,a.b,a.c)},
$S:84}
A.tY.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dF(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.wV(m,l,o.c.b,n.a)
if(l.w==null)A.t(A.rX('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.t(A.rX(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.t(A.ah("Limit must be non-negative, got "+A.p(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cH()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:85}
A.tZ.prototype={
$1(a){var s,r,q=A.j([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.n5(r.a,r.b))}return new A.ha(q)},
$S:86}
A.tJ.prototype={
nH(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.an()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aX)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nH(a)},
$S:4}
A.tH.prototype={
$2(a,b){var s=this.b.d
if((s.a.a&30)===0){this.a.d.G(0,this.c)
s.bP(a,b)}},
$S:7}
A.tI.prototype={
$1(a){return new A.hn(this.a)},
$S:88}
A.tX.prototype={
$1(a){return this.nI(a)},
nI(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.an()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aX)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.tW.prototype={
$1(a){return a.a===this.a},
$S:89}
A.u2.prototype={
$1(a){var s=a==null?B.b8:A.j([a],t.d)
this.a.b.t(0,new A.jD(this.b,s))},
$S:90}
A.u3.prototype={
$1(a){this.b.bb().C()
this.a.f.G(0,this.c)},
$S:19}
A.u4.prototype={
$1(a){this.a.b.t(0,new A.jD(this.b,a))},
$S:91}
A.u5.prototype={
$1(a){this.b.bb().C()
this.a.f.G(0,this.c)},
$S:19}
A.tN.prototype={
$1(a){return this.a.r.mT()},
$S:38}
A.tO.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bU(A.e2(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.r)(l),++j
s=3
break
case 5:case 1:return A.bU(null,0,r)
case 2:return A.bU(o.at(-1),1,r)}})
var s=0,r=A.FR($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.G6(r)},
$S:93}
A.tP.prototype={
$1(a){var s=this,r=new Uint8Array(A.b9(a)),q=s.b
q.b=q.b+r.length
s.a.b.t(0,new A.fF(s.c,r,!1,null))
if(q.b>=1048576)s.d.bb().bf()},
$S:14}
A.tR.prototype={
$1(a){var s=this.a,r=this.b
s.x.G(0,r)
s.b.t(0,new A.fF(r,new Uint8Array(0),!0,J.Z(a)))},
$S:19}
A.tQ.prototype={
$0(){var s=this.a,r=this.b
s.x.G(0,r)
s.b.t(0,new A.fF(r,new Uint8Array(0),!0,null))},
$S:0}
A.u_.prototype={
$0(){this.a.b.t(0,B.bE)},
$S:2}
A.u0.prototype={
$1(a){var s=this.a
s.as=a
s.b.t(0,new A.nx(a))},
$S:94}
A.u1.prototype={
$1(a){var s,r=this.a,q=A.j([],t.oS)
for(s=J.E(a);s.k();)q.push(r.j5(s.gn()))
r.b.t(0,new A.li(this.b,q))},
$S:95}
A.tM.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.d
if(i.a===0){i=j.e
if(i!=null)i.C()
j.e=null
return}j=Date.now()
s=A.n(i).i("al<2>")
s=A.Q(new A.al(i,s),s.i("o.E"))
r=s.length
q=this.b.a
p=t.H
o=0
for(;o<s.length;s.length===r||(0,A.r)(s),++o){n=s[o]
m=n.x
if(0-m.b+1000*(j-m.a)>q){for(m=n.e,l=A.a0(m).i("bw<1>"),m=new A.bw(m,l),m=new A.ao(m,m.gm(0),l.i("ao<a_.E>")),l=l.i("a_.E");m.k();){k=m.d
k=(k==null?l.a(k):k).b.a
if((k.a&30)===0)k.aD(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aD(null)
i.G(0,n.a)
m=n.w
m===$&&A.v()
m.bg(new A.tK(),new A.tL(),p)}}},
$S:38}
A.tK.prototype={
$1(a){},
$S:48}
A.tL.prototype={
$2(a,b){},
$S:7}
A.le.prototype={
a4(){return"ConflictAlgorithm."+this.b}}
A.iw.prototype={
q(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aT(o,o.r,o.e,A.n(o).i("aT<2>"));n.k();){m=n.d
if(!m.r){m.r=!0
if(!m.f){l=m.a
l.c.d.sqlite3_reset(l.b)
m.f=!0}m=m.a
l=m.c
l.d.sqlite3_finalize(m.b)
l=l.w
if(l!=null){l=l.a
if(l!=null)l.unregister(m.d)}}}o.am(0)
p.b.q()
case 1:return A.e(q,r)}})
return A.f($async$q,r)},
cn(a){var s,r=this.a,q=r.G(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.G(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(s!=null)s.q()}q=this.b.wo(a)
r.j(0,a,q)
return q},
kP(a,b){var s=this.cn(a).kQ(new A.bO(b)),r=A.n(s).i("X<I.E,J<l,k?>>")
r=A.Q(new A.X(s,new A.rC(),r),r.i("a_.E"))
return r},
oj(a){return this.kP(a,B.n)},
f7(a,b){this.cn(a).e7(new A.bO(b))},
kb(a){return this.f7(a,B.n)},
aF(a,b){return this.v3(a,b)},
O(a){return this.aF(a,B.n)},
v3(a,b){var s=0,r=A.h(t.H),q=this
var $async$aF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.f7(a,b)
return A.e(null,r)}})
return A.f($async$aF,r)},
ai(a,b){return this.wC(a,b)},
b0(a){return this.ai(a,B.n)},
wC(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ai=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kP(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ai,r)},
bT(a,b,c,d,e,f,g){return this.wz(a,b,c,d,e,f,g)},
aL(a,b,c,d){return this.bT(a,null,b,null,null,c,d)},
el(a,b,c,d,e){return this.bT(a,b,c,null,null,d,e)},
ng(a,b,c,d){return this.bT(a,b,null,null,null,c,d)},
cl(a,b,c){var s=null
return this.bT(a,s,s,s,s,b,c)},
wx(a,b,c,d,e){return this.bT(a,null,b,null,c,d,e)},
ww(a,b,c,d,e){return this.bT(a,b,c,d,e,null,null)},
wy(a,b,c,d,e,f){return this.bT(a,b,c,null,d,e,f)},
wv(a,b,c,d){return this.bT(a,null,null,null,b,c,d)},
wz(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bT=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.B(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.p(c)
if(d!=null)n+=" OFFSET "+A.p(d)
o=g==null?B.n:g
q=p.ai(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bT,r)},
ce(a,b,c,d){return this.vM(0,b,c,d)},
aC(a,b,c){return this.ce(0,b,c,null)},
vM(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$ce=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.P("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dK(new A.T(c,n),new A.rB(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.ab(c.a,"?",!1,m),", ")
j=A.E1(d)
o=o.i("al<2>")
o=A.Q(new A.al(c,o),o.i("o.E"))
p.f7("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.aq(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ce,r)},
L(a,b,c,d){return this.x7(a,b,c,d)},
x7(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dK(new A.T(b,n),new A.rD(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.E1(null)+' "'+a+'" SET '+m
o=A.Q(new A.al(b,o.i("al<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.E(o,d)}p.f7(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
T(a,b,c){return this.uj(a,b,c)},
ui(a,b){return this.T(a,b,null)},
uj(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$T=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
if(c!=null)B.b.E(n,c)}p.f7(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$T,r)},
u6(a,b,c){this.b.u7(B.bw,!0,!1,new A.rA(b),c)},
a2(a,b){return this.x3(a,b,b)},
x3(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:if(n.d)throw A.b(A.dd("Database connection is wedged: an earlier rollback failed and left an open transaction. Reopen the database to recover."))
n.kb("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.kb("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
l=A.C(g)
try{n.kb("ROLLBACK")}catch(f){k=A.C(f)
h=J.Z(k).toLowerCase()
if(!(B.a.D(h,"no transaction is active")||B.a.D(h,"cannot rollback"))){n.d=!0
throw A.b(A.dd("Rollback failed after a transaction error ("+A.p(k)+"); original error: "+A.p(l)+". The database connection is left in an open transaction; reopen to recover."))}}throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$ir9:1}
A.rC.prototype={
$1(a){return A.bm(a,t.N,t.X)},
$S:97}
A.rB.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.rD.prototype={
$1(a){return'"'+a+'" = ?'},
$S:6}
A.rA.prototype={
$1(a){var s=a.gm(0)===0?null:a.gH(a)
return this.a.$1(s)},
$S:99}
A.qq.prototype={}
A.iv.prototype={
jX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.j([],t.s),c=A.aL(t.N),b=a.a
if(B.a.D(b,"'")||B.a.D(b,'"'))A.t(A.aB('Store name "'+b+"\" must not contain quote characters: a quote would break the FTS content reference and the database adapter's table quoting."))
if(B.a.S(b,"sqlite_")||B.a.S(b,"lp_"))A.t(A.aB('Store name "'+b+'" uses a reserved prefix (sqlite_ is SQLite-owned, lp_ is the engine metadata namespace).'))
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
l=m.a
k=$.Dx()
if(!k.b.test(l))A.t(A.aB('Field "'+l+u.Z))
if(B.aD.D(0,l))throw A.b(A.aB('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.t(0,l))throw A.b(A.aB('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aB(e+l+'" cannot be unique.'))
if(B.b.c9(o,new A.rz(m)))throw A.b(A.aB(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.D(k,l)}else k=!1
if(k)throw A.b(A.aB(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.r)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ao(l,l.gm(0),k.i("ao<I.E>")),k=k.i("I.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.D(0,j)&&!B.aD.D(0,j))throw A.b(A.aB('Index column "'+j+'" is not a declared field of store "'+b+'".'))}for(b=l,i=0;i<b;b=r,i=h)for(h=i+1,b=h,g=0;r=o.length,g<r;++g){if(i===g)continue
if(B.ay.Z(o[i].a,o[g].a)){if(i<g){r=o[i].a
d.push("Duplicate index columns "+r.l(r)+" (declarations "+b+" and "+(g+1)+").")}}else if(A.I7(o[g].a,o[i].a)&&!o[g].b){r=o[g].a
r=r.l(r)
l=o[i].a
d.push("Index "+r+" is prefix-subsumed by index "+l.l(l)+".")}}if(p){b=f.a
if(!b.d)throw A.b(A.rX(u.r))
if(q.b&&!A.EH(b.a,3,34))throw A.b(A.rX("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+b.a+")."))
for(b=q.a,r=b.$ti,b=new A.ao(b,b.gm(0),r.i("ao<I.E>")),r=r.i("I.E");b.k();){p=b.d
if(p==null)p=r.a(p)
if(!c.D(0,p))throw A.b(A.aB('FTS field "'+p+'" is not a declared field.'))}for(b=q.c.a.ga7(),b=b.gu(b);b.k();){r=b.gn()
A.E9(r.a,r.b)}}for(b=s.length,n=0;n<b;++n){m=s[n]
r=m.b
if(r===B.I){q=m.f
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aB('Enum field "'+m.a+'" must declare values.'))
if(r===B.J){r=m.r
r=r==null||r.length===0}else r=!1
if(r)throw A.b(A.aB('Ref field "'+m.a+'" must declare its target store.'))}return new A.qq(f.pl(a),f.pk(a),f.pj(a),d)},
pl(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.j(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.B(n,'"',i)+'"')+" "+o.gkU()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.ry(),A.a0(k).i("X<1,l>")).B(0,", ")
m+=" CHECK ("+('"'+A.B(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.J&&o.w){n=o.r
n.toString
n=A.B(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.B("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.B(a.a,'"',i)
r=B.b.B(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
pk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.j([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.r)(s),++n){m=s[n]
l=m.a
k=m.b
j=l.$ti.i("X<I.E,l>")
i=A.Q(new A.X(l,A.po(),j),j.i("a_.E"))
if(!k&&!l.D(l,"id"))i.push('"'+A.B("id",e,d)+'"')
h=m.c===B.b3?"archived = 0 AND hidden = 0":"archived = 0"
if(k){l=l.B(l,"_")
l=A.B(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.B(q,e,d)+'"')+" ("+B.b.B(i,", ")+") WHERE "+h+";")}else{l=l.B(l,"_")
l=A.B(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.B(q,e,d)+'"')+" ("+B.b.B(i,", ")+") WHERE "+h+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.r)(r),++n){g=r[n]
if(g.b!==B.J)continue
if(B.b.c9(s,new A.rx(g)))continue
k=g.a
j=A.B(p+k,e,d)
f=A.B(q,e,d)
k=A.B(k,e,d)
b.push("CREATE INDEX "+('"'+j+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.B("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.r)(r),++n){g=r[n]
if(g.d){s=g.a
p=A.B(o+s,e,d)
l=A.B(q,e,d)
j=A.B(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+j+'"')+") WHERE "+('"'+A.B(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
pj(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.u
s=a0.a
if(s.gm(0)===0)throw A.b(A.aB("FTS requires at least one field to index."))
r=A.j([],t.s)
q=a1.a
p=q+"_fts"
o=s.$ti.i("X<I.E,l>")
n=A.Q(new A.X(s,A.po(),o),o.i("a_.E"))
m=new A.rw(q,a0.c)
l=new A.X(s,new A.rt(m),o).B(0,f)
k=new A.X(s,new A.ru(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
r.push("CREATE VIRTUAL TABLE "+('"'+A.B(p,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+q+"',\n  content_rowid = 'rowid'\n"+j)
s=A.B(q+"_ai",e,d)
o=A.B(q,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.B(p,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
s=A.B(q+"_ad",e,d)
o=A.B(q,e,d)
m=A.B(p,e,d)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.B(p,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.rv(),A.a0(n).i("X<1,l>")).B(0," OR ")
s=A.B(q+"_au",e,d)
o=A.B(q,e,d)
m=A.B(p,e,d)
h=A.B(p,e,d)
g=B.b.B(n,f)
r.push("CREATE TRIGGER "+('"'+s+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.B(p,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return r}}
A.rz.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:46}
A.ry.prototype={
$1(a){return"'"+A.B(a,"'","''")+"'"},
$S:6}
A.rx.prototype={
$1(a){var s=a.a
return s.D(s,this.a.a)},
$S:46}
A.rw.prototype={
$2(a,b){return A.Dn(this.a,this.b,a,b)},
$S:101}
A.rt.prototype={
$1(a){return this.a.$2("new",a)},
$S:6}
A.ru.prototype={
$1(a){return this.a.$2("old",a)},
$S:6}
A.rv.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:6}
A.dJ.prototype={
l(a){return A.dt(this).l(0)+": "+this.a},
$iG:1}
A.eR.prototype={}
A.eQ.prototype={}
A.eD.prototype={}
A.fr.prototype={}
A.h_.prototype={}
A.fJ.prototype={}
A.cN.prototype={}
A.h5.prototype={}
A.h9.prototype={}
A.eK.prototype={}
A.hq.prototype={}
A.fL.prototype={}
A.hg.prototype={}
A.fS.prototype={}
A.fv.prototype={}
A.eo.prototype={}
A.h4.prototype={}
A.iA.prototype={}
A.bk.prototype={}
A.rH.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"ref_id")
j.toString
A.F(j)
s=k.h(0,"store")
s.toString
A.F(s)
r=k.h(0,"record_id")
r.toString
A.F(r)
q=k.h(0,"field")
q.toString
A.F(q)
p=k.h(0,"hash")
p.toString
A.F(p)
o=A.a6(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.F(n)
m=A.bf(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.bf(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bk(j,s,r,q,p,o,n,m,l,A.a6(k.h(0,"last_error")))},
$S:102}
A.uP.prototype={
gm6(){return this.b},
gib(){var s=0,r=A.h(t.y),q,p=this
var $async$gib=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.gfg()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gib,r)},
lA(a,b){return b},
ef(a,b,c){return this.vT(a,b,c)},
vT(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$ef=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.v()
n=J
s=3
return A.a(o.gbp().b.cl("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.lA(c,a)]),$async$ef)
case 3:o=n.c_(e,A.MH(),t.A)
o=A.Q(o,o.$ti.i("a_.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ef,r)},
d9(a,b,c,d,e,f,g,h){return this.tS(a,b,c,d,e,f,g,h)},
tS(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$d9=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.gm6()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.gfg(),$async$d9)
case 5:j=!j
case 4:if(j)throw A.b(A.A("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.lA(h,e)
s=6
return A.a(l.ck(b,c,d),$async$d9)
case 6:n=j
s=7
return A.a(l.bk(n),$async$d9)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a2(new A.uQ(p,h,g,o,n,m,A.i5(),f),t.A),$async$d9)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d9,r)},
fo(a,b,c,d,e){return this.wc(a,b,c,d,e)},
wc(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fo=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gm6()
s=3
return A.a(p.ef(a,c,e),$async$fo)
case 3:k=g
j=J.L(k)
if(j.gF(k))throw A.b(A.A("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.fb(k,new A.uS(d),new A.uT(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.A("File is remote_only; download it before opening."))
j=p.a
n=j.a
n===$&&A.v()
n=n.gbp()
j=j.CW.$0()
m=o.e
s=4
return A.a(n.b.aF("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,m]),$async$fo)
case 4:q=l.cM(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
fA(a,b,c,d,e,f){return this.wO(0,b,c,d,e,f)},
wO(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fA=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ef(b,d,f),$async$fA)
case 3:n=h
m=J.L(n)
if(m.gF(n)){s=1
break}o=e!=null?m.fb(n,new A.uU(e),new A.uV(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.uW(p,o,f,d,b),t.P),$async$fA)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fA,r)},
bi(a,b){return this.o9(a,b)},
o9(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bi=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e4(a8),$async$bi)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.CW.$0()-B.c.M(a7.a,1000)
s=6
return A.a(e.a2(new A.uR(a2,n),t.P),$async$bi)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fh(),$async$bi)
case 13:l=b0
s=J.ee(l)?14:15
break
case 14:k=0
j=A.aL(t.N)
d=t.s
case 16:c=e.a
c===$&&A.v()
s=18
return A.a(c.gbp().b.ww("lp_blobs",A.j(["hash"],d),250,k,"hash ASC"),$async$bi)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.W(h,"hash")
b.toString
J.aO(j,A.F(b))}if(J.as(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.C5(j,g)){s=19
break}p=22
b=new A.w($.D,c)
b.aD(null)
s=25
return A.a(b,$async$bi)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.dc(g),$async$bi)
case 26:++a2.a
p=10
s=24
break
case 22:p=21
a4=o.pop()
s=24
break
case 21:s=10
break
case 24:s=19
break
case 20:case 15:p=2
s=12
break
case 10:p=9
a5=o.pop()
s=12
break
case 9:s=2
break
case 12:case 8:d=e.r,c=t.s
case 27:b=e.a
b===$&&A.v()
s=29
return A.a(b.gbp().b.wy("lp_blobs",A.j(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bi)
case 29:a0=b0
b=J.L(a0)
if(b.gF(a0)){s=28
break}b=b.gu(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.F(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.dc(a1),$async$bi)
case 34:case 33:s=35
return A.a(d.T("lp_blobs","hash = ?",[a1]),$async$bi)
case 35:++a2.a
s=30
break
case 31:s=27
break
case 28:q=a2.a
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bi,r)},
cF(a){return this.uZ(a)},
uZ(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.v()
d=A
s=3
return A.a(e.gbp().b.b0("SELECT SUM(size) as total FROM lp_blobs"),$async$cF)
case 3:o=d.ff(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.r,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbp().b.b0("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cF)
case 6:k=c
j=J.L(k)
if(j.gF(k)){s=5
break}j=j.gu(k)
case 7:if(!j.k()){s=8
break}i=j.gn()
if(o<=a){s=8
break}h=i.h(0,"hash")
h.toString
A.F(h)
i=i.h(0,"size")
i.toString
A.aq(i)
s=9
return A.a(g.dc(h),$async$cF)
case 9:s=10
return A.a(e.gbp().b.L("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$cF)
case 10:s=11
return A.a(f.T("lp_blobs","hash = ?",[h]),$async$cF)
case 11:o-=i;++l
s=7
break
case 8:s=4
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cF,r)}}
A.uQ.prototype={
$1(a){return this.nM(a)},
nM(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$$1=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:k=a.b
j=p.a.a.CW.$0()
i=t.s
h=p.b
g=p.c
f=p.d
e=p.e
s=3
return A.a(k.el("lp_file_refs",A.j(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],i),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[h,g,f,e]),$async$$1)
case 3:d=a0
c=J.L(d)
if(c.gY(d)){q=A.E5(c.gH(d))
s=1
break}s=4
return A.a(A.ib(k,e,j,p.f),$async$$1)
case 4:s=5
return A.a(k.el("lp_outbox",A.j(["op_id","base_updated"],i),1,"store = ? AND record_id = ?",[h,g]),$async$$1)
case 5:o=a0
i=J.L(o)
n=i.gY(o)&&J.W(i.gH(o),"base_updated")==null?A.a6(J.W(i.gH(o),"op_id")):null
i=p.r
c=t.N
m=t.X
s=6
return A.a(k.ce(0,"lp_file_refs",A.m(["ref_id",i,"store",h,"record_id",g,"field",f,"hash",e,"remote_name",null,"state","pending_upload"],c,m),B.R),$async$$1)
case 6:l=A.i5()
s=7
return A.a(k.aC(0,"lp_op_queue",A.m(["op_id",l,"store",h,"record_id",g,"kind","fileUpload","payload_json",B.h.a6(A.m(["ref_id",i,"field",f,"hash",e,"name",p.w],c,c),null),"state","pending","depends_on_op",n,"created_at",j],c,m)),$async$$1)
case 7:a.a_(new A.a2(h,A.at([g],c)))
q=new A.bk(i,h,g,f,e,null,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:103}
A.uS.prototype={
$1(a){return a.a===this.a},
$S:71}
A.uT.prototype={
$0(){return A.t(A.A("FileRef "+this.a+" not found"))},
$S:28}
A.uU.prototype={
$1(a){return a.a===this.a},
$S:71}
A.uV.prototype={
$0(){return A.t(A.A("FileRef "+this.a+" not found"))},
$S:28}
A.uW.prototype={
$1(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.a.a.CW.$0()
n=q.b
m=n.r==="pending_upload"&&n.f==null
l=t.N
k=t.X
j=n.a
i=n.e
s=m?2:4
break
case 2:s=5
return A.a(p.T("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aF(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aC(0,"lp_op_queue",A.m(["op_id",A.i5(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a6(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.x),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a_(new A.a2(q.c,A.at([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uR.prototype={
$1(a){return this.nN(a)},
nN(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dy,p=new A.bE(p,p.r,p.e,A.n(p).i("bE<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ai('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.B(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.E(c)
case 5:if(!l.k()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.F(j)
k=k.h(0,"hash")
k.toString
A.F(k)
s=7
return A.a(i.T("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aF(u.y,[k]),$async$$1)
case 8:s=9
return A.a(i.L("lp_op_queue",A.m(["state","done"],o,n),"payload_json LIKE ?",['%"ref_id":"'+j+'"%']),$async$$1)
case 9:++m.a
s=5
break
case 6:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.cG.prototype={}
A.rP.prototype={
gnq(){var s=this.r
return new A.al(s,A.n(s).i("al<2>")).vi(0,0,new A.rS())},
mT(){var s,r=this.r,q=A.n(r).i("al<2>"),p=q.i("ck<o.E,l>"),o=A.Q(new A.ck(new A.am(new A.al(r,q),new A.rQ(this.f.$0()),q.i("am<o.E>")),new A.rR(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.r)(o),++s)r.G(0,o[s])
return p}}
A.rS.prototype={
$2(a,b){return a+b.f},
$S:106}
A.rQ.prototype={
$1(a){return!a.z.km(this.a)},
$S:107}
A.rR.prototype={
$1(a){return a.a},
$S:108}
A.lM.prototype={}
A.pQ.prototype={}
A.fp.prototype={
l(a){return"BlobMissingError: "+this.a},
$iG:1}
A.ij.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.p(this.a)},
$iG:1}
A.nk.prototype={}
A.BP.prototype={
$1(a){return B.b.E(this.a,a)},
$S:109}
A.iC.prototype={}
A.rI.prototype={
bs(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bs=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.cb
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.cy
a3===$&&A.v()
b5=J
s=3
return A.a(a3.f4(25),$async$bs)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.ba?10:12
break
case 10:s=13
return A.a(n.cu(i,b2),$async$bs)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.n7(i.b),$async$bs)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.bb?17:18
break
case 17:s=19
return A.a(n.eL(i),$async$bs)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.n7(i.b),$async$bs)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.C(b3)
j=!0
e=i.w+1
d=a5.mL(e)
a8=i.b
a9=J.Z(f)
b0=a6.$0()
s=23
return A.a(a3.w2(a8,a9,e,b0+B.c.M(d.a,1000)),$async$bs)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.dy,a4=new A.bE(a3,a3.r,a3.e,A.n(a3).i("bE<1>")),a2=a2.r
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.t(A.A('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.cl("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bs)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.W(b,"ref_id")
a6.toString
a=A.F(a6)
a6=J.W(b,"record_id")
a6.toString
a0=A.F(a6)
a1=A.a6(J.W(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.dd(a0,a,a1,c),$async$bs)
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
case 25:q=new A.iC(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bs,r)},
cu(a,b){return this.ri(a,b)},
ri(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cu=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aE(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.F(a1)
l=a0.h(0,"hash")
l.toString
A.F(l)
k=A.a6(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bq(l),$async$cu)
case 3:if(!a6)throw A.b(A.A("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bk(l),$async$cu)
case 4:j=a6
if(j==null)throw A.b(A.A("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.z
i===$&&A.v()
s=9
return A.a(i.bZ(a3.d),$async$cu)
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
if(m!=null){f=B.a.A(l,0,B.c.bO(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.xc(a3.d,A.m([k,new A.hj(k,j,new A.rK(a4,l))],t.N,t.h3)),$async$cu)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga1(l):k
case 11:s=14
return A.a(n.a.a2(new A.rL(a,a1,a3),t.P),$async$cu)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cu,r)},
eL(a){return this.rh(a)},
rh(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aE(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.F(l)
o=A.a6(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.F(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.xa(a.d,A.j([o],t.s)),$async$eL)
case 5:case 4:s=6
return A.a(p.a.a2(new A.rJ(l,n,a),t.P),$async$eL)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
dd(a,b,c,d){return this.uR(a,b,c,d)},
uR(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dd=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.z
l===$&&A.v()
k=m
s=4
return A.a(l.f3(c,a,null),$async$dd)
case 4:s=3
return A.a(k.iu(f),$async$dd)
case 3:o=f
s=5
return A.a(m.bk(o),$async$dd)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.rM(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$dd)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dd,r)},
dj(a,b,c,d){return this.w9(a,b,c,d)},
w9(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dj=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.cl("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dj)
case 2:e=a5
d=A.uL(a2,A.a0(a2).c)
c=J.aH(e)
b=t.v
a=A.d3(new A.dY(c.ci(e,new A.rN(),t.x),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.dy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.D(0,k)?6:7
break
case 6:j=A.i5()
i=n.h(0,a3)
if(i==null)A.t(A.A(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.ce(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.c7),$async$dj)
case 8:case 7:case 4:a2.length===b||(0,A.r)(a2),++l
s=3
break
case 5:c=c.gu(e)
case 9:if(!c.k()){s=10
break}b=c.gn()
g=A.a6(b.h(0,"remote_name"))
if(g==null){s=9
break}if(d.D(0,g)){s=9
break}p=b.h(0,"state")
p.toString
A.F(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.T("lp_file_refs","ref_id = ?",[p]),$async$dj)
case 11:f=A.a6(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.S(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aF(u.y,[f]),$async$dj)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dj,r)}}
A.rK.prototype={
$0(){return this.a.cM(this.b)},
$S:110}
A.rL.prototype={
$1(a){return this.nD(a)},
nD(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a_(new A.a2(p.c,A.at([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rJ.prototype={
$1(a){return this.nC(a)},
nC(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.T("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aF(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a_(new A.a2(p.c,A.at([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rM.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.ib(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a_(new A.a2(q.f,A.at([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rN.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:111}
A.BV.prototype={
$1(a){if(typeof a!="string")return a
return this.a.ej(a)},
$S:29}
A.uC.prototype={
gbp(){var s=this.c
return s===$?this.c=new A.iA(this.b):s}}
A.nj.prototype={}
A.w1.prototype={
bY(a){var s,r=this.a
if(!r.I(a))return null
s=r.G(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.pd(s)
r.toString
t.G.a(r)}return r},
kR(a,b){var s,r=this.a
if(r.a>=256)r.G(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(b==null)s=null
else{s=A.pd(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vN(a){var s,r,q,p=a.a
if(p===0){this.a.am(0)
return}s=this.a
if(p>=s.a){s.am(0)
return}for(p=A.hJ(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.G(0,q==null?r.a(q):q)}}}
A.mf.prototype={
aQ(a){return this.wM(a)},
wM(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dy
h=a.a
if(i.I(h))throw A.b(A.aB('Duplicate store name "'+h+'" in this open call.'))
p=A.CG(a)
o=q.w
if(o.e===B.aB&&p.b.length!==0)throw A.b(new A.hq('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fY(a,p),$async$aQ)
case 2:n=new A.iv(o).jX(a)
o=a.w
if(o!=null)A.Nb(q.r,h,o.c)
o=q.r
s=3
return A.a(o.aL("lp_stores",1,"store = ?",[h]),$async$aQ)
case 3:m=c
l=J.L(m)
s=l.gF(m)?4:6
break
case 4:s=7
return A.a(o.O(n.b),$async$aQ)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.O(l[j]),$async$aQ)
case 11:case 9:l.length===k||(0,A.r)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$aQ)
case 15:case 13:l.length===k||(0,A.r)(l),++j
s=12
break
case 14:l=a.b
k=q.CW
s=16
return A.a(o.aC(0,"lp_stores",A.m(["store",h,"table_name",h,"schema_ver",l,"definition_json",B.h.a6(a.p(),null),"created_at",k.$0()],t.N,t.X)),$async$aQ)
case 16:s=17
return A.a(A.fR(o,0,0,"create:"+h,k,l),$async$aQ)
case 17:s=5
break
case 6:l=J.W(l.gH(m),"schema_ver")
l.toString
A.aq(l)
k=a.b
if(l>k)throw A.b(A.EE('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fQ(q,a,l),$async$aQ)
case 20:case 19:s=21
return A.a(q.bL(a),$async$aQ)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a6(a.p(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aQ)
case 22:case 5:i.j(0,h,new A.nj(a,p,new A.w1(A.u(t.N,t.b))))
s=23
return A.a(q.dP(h,p),$async$aQ)
case 23:return A.e(null,r)}})
return A.f($async$aQ,r)},
fY(a,b){return this.p9(a,b)},
p9(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aL("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fY)
case 3:j=d
if(J.bA(j)){s=1
break}o=null
try{n=J.W(J.bY(j),"v")
o=A.Jh(typeof n=="string"?B.h.aE(n,null):n)}catch(i){if(A.C(i) instanceof A.dJ){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.ar(B.l.v(B.e.v(A.ai(o.p()))).a)!==A.ar(B.l.v(B.e.v(A.ai(b.p()))).a))throw A.b(A.aB('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fY,r)},
dP(a,b){return this.r9(a,b)},
r9(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ai(b.p())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aL("lp_meta",1,"k = ?",[p]),$async$dP)
case 5:s=k.bA(d)?2:4
break
case 2:s=6
return A.a(n.aC(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dP)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dP)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dP,r)},
hI(a){return this.tT(a)},
tT(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.e
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hI)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
bL(a){return this.rA(a)},
rA(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bL=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.el("lp_stores",A.j(["definition_json"],t.s),1,"store = ?",[a1]),$async$bL)
case 3:a2=a6
if(J.bA(a2)){s=1
break}o=null
try{n=J.W(J.bY(a2),"definition_json")
m=typeof n=="string"?B.h.aE(n,null):n
l=m
l.toString
k=t.X
o=A.q7(A.bm(t.f.a(l),t.N,k),k)}catch(a4){if(A.C(a4) instanceof A.cN){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.ay.Z(i.a,h.a)&&i.b===h.b&&i.c.P(0,h.c)
g=l}}if(g){s=1
break}f=new A.jv()
$.kE()
f.az()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a0.O("DROP TRIGGER IF EXISTS "+('"'+A.B(a1+d,'"','""')+'"')),$async$bL)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a0.O("DROP TABLE IF EXISTS "+('"'+A.B(a1+"_fts",'"','""')+'"')),$async$bL)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.iv(p.w).jX(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.O(l[e]),$async$bL)
case 16:case 14:l.length===k||(0,A.r)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.B(l,'"','""')
s=17
return A.a(a0.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.B(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bL)
case 17:k=h.a
c=k.$ti.i("X<I.E,l>")
b=new A.X(k,A.po(),c).B(0,", ")
a=new A.X(k,new A.uD(a3,h),c).B(0,", ")
l=A.B(l,'"','""')
s=18
return A.a(a0.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.B(a1,'"','""')+'"')),$async$bL)
case 18:case 12:if(f.b==null)f.b=$.mN.$0()
l=a3.b
s=19
return A.a(A.fR(a0,f.gmO(),l,"fts:"+a1,p.CW,l),$async$bL)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bL,r)},
hR(a){return this.ul(a)},
ul(a){var s=0,r=A.h(t.H),q=this,p
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.f
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hR)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hR,r)},
au(a){var s=this.dy.h(0,a)
if(s==null)throw A.b(A.A('No store "'+a+'" registered in this LocalPocket.'))
return s},
bz(a){var s,r,q=this
if(A.nL(q)!=null)A.t(A.A(u.L))
s=q.au(a)
r=q.a
r===$&&A.v()
return new A.ft(q,s,r.gbp(),null)},
aX(a,b,c){var s
if(A.nL(this)!=null)A.t(A.A(u.L))
s=this.b
s===$&&A.v()
return s.aX(a,b,c)},
a2(a,b){return this.aX(a,B.p,b)},
nr(a,b){++this.y.e
return this.r.aF(a,B.n)},
e2(a){return this.tO(a)},
tN(){return this.e2(null)},
tO(a){var s=0,r=A.h(t.H),q=this,p
var $async$e2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e2)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.B(a,'"','""')+'"')),$async$e2)
case 6:case 3:return A.e(null,r)}})
return A.f($async$e2,r)},
fJ(){var s=0,r=A.h(t.H),q=this
var $async$fJ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fJ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fJ,r)},
iF(){var s=0,r=A.h(t.H),q=this
var $async$iF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iF)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iF,r)},
iE(){var s=0,r=A.h(t.H),q=this
var $async$iE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.r.O("VACUUM"),$async$iE)
case 2:return A.e(null,r)}})
return A.f($async$iE,r)},
ft(){return this.wp()},
wp(){var s=0,r=A.h(t.S),q,p=this,o
var $async$ft=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.uH(o),t.P),$async$ft)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
cP(a){return this.wY(a)},
wY(a){var s=0,r=A.h(t.H),q=this,p
var $async$cP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dy,p=new A.bE(p,p.r,p.e,A.n(p).i("bE<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.e6(p.d,a),$async$cP)
case 4:s=2
break
case 3:s=5
return A.a(q.ft(),$async$cP)
case 5:s=6
return A.a(q.fN(B.ca),$async$cP)
case 6:s=7
return A.a(q.fJ(),$async$cP)
case 7:s=8
return A.a(q.tN(),$async$cP)
case 8:return A.e(null,r)}})
return A.f($async$cP,r)},
fN(a){return this.oa(a)},
oa(a){var s=0,r=A.h(t.H),q=this
var $async$fN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.a2(new A.uG(q,a),t.P),$async$fN)
case 2:return A.e(null,r)}})
return A.f($async$fN,r)},
e6(a,b){return this.u1(a,b)},
u1(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$e6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.CW.$0()
h=i-B.c.M(b.a,1000)
j.a=0
o=p.au(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ai("SELECT b.id FROM "+('"'+A.B(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$e6)
case 5:l=d
if(J.bA(l)){s=4
break}if(A.nL(p)!=null)A.t(A.A(u.L))
k=p.b
k===$&&A.v()
s=6
return A.a(k.aX(new A.uF(j,p,l,a,h,o),B.p,n),$async$e6)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e6,r)},
q(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$q=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.fr){s=1
break}n.fr=!0
m=n.a$
m.a.q()
m.b.q()
p=4
s=7
return A.a(n.r.O("PRAGMA optimize"),$async$q)
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
return A.a(n.r.q(),$async$q)
case 8:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$q,r)}}
A.uD.prototype={
$1(a){return A.Dn(this.a.a,this.b.c,"",a)},
$S:6}
A.uH.prototype={
$1(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b0("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.E(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.F(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.T("lp_outbox","store = ? AND record_id = ?",[m,A.F(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uG.prototype={
$1(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.P),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
s=2
return A.a(p.ui("lp_op_queue","state = 'done'"),$async$$1)
case 2:s=3
return A.a(p.T("lp_dead_letter","at < ?",[q.a.CW.$0()-B.c.M(q.b.a,1000)]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uF.prototype={
$1(a){return this.nJ(a)},
nJ(a3){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:a1=a3.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=t.X,k=a3.c,j=a3.a.y,i=q.e,h=q.f,g=q.b,f=g.ay,g=g.ch
case 2:if(!p.k()){s=3
break}e=p.gn().h(0,"id")
e.toString
A.F(e)
a2=J
s=4
return A.a(a1.ai("SELECT b.id FROM "+('"'+A.B(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,e,"clean",i]),$async$$1)
case 4:if(a2.bA(a5)){s=2
break}s=5
return A.a(a1.ai("SELECT * FROM "+('"'+A.B(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[e]),$async$$1)
case 5:d=a5
c=J.L(d)
b=c.gY(d)?A.cd(h,c.gH(d),f,g):null
s=6
return A.a(A.cA(a1,n,e,!1),$async$$1)
case 6:s=7
return A.a(a1.T("lp_outbox","store = ? AND record_id = ?",[n,e]),$async$$1)
case 7:s=8
return A.a(a1.T(n,"id = ?",[e]),$async$$1)
case 8:s=9
return A.a(a1.L("lp_sync_row",A.m(["access_state","purged"],m,l),"store = ? AND record_id = ?",[n,e]),$async$$1)
case 9:c=A.at([e],m)
k.push(new A.a2(n,c))
j.r+=c.a
if(b!=null){c=A.n(b).i("T<1>")
a=c.i("am<o.E>")
a0=A.mk(a.i("o.E"))
a0.E(0,new A.am(new A.T(b,c),new A.uE(),a))
a3.bd(new A.aU(n,e,B.H,B.at,b,null,a0))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uE.prototype={
$1(a){return a!=="id"},
$S:10}
A.oB.prototype={}
A.vg.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:42}
A.vh.prototype={
$2(a,b){return B.c.a0(a.a,b.a)},
$S:113}
A.vc.prototype={
$1(a){return a.h(0,"name")},
$S:35}
A.vf.prototype={
$1(a){return this.nP(a)},
nP(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.ay,j=j.ch,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.cd(k,p,i,j)
n=o
A.IO(k,n)
g=J.W(o,"id")
g.toString
A.F(g)
m=A.dr(k,J.x(J.W(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aC(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:43}
A.vd.prototype={
$1(a){return A.Dn(this.a.a,this.b.c,"",a)},
$S:6}
A.vm.prototype={}
A.mI.prototype={
wB(a){if(a>this.w)this.w=a},
ni(){return this.f++}}
A.uI.prototype={
uc(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aE(B.o.f0(B.ar.v(a)),null))
i=J.W(s,"store")
h=J.W(s,"schemaVer")
g=J.W(s,"shape")
f=J.W(s,"ir")
q=t.lH
p=q.a(J.W(s,"sort"))
if(p==null)p=B.aj
e=A.bF(p,!0,t.N)
r=b?J.W(s,"pv"):J.W(s,"values")
q=q.a(r)
if(q==null)q=B.aj
d=A.bF(q,!0,t.X)}catch(o){q=A.CJ(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.c3.Z(e,n)||J.as(d)!==n.length)throw A.b(A.CJ("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.by(l)&&!A.av(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.CJ(j))}return d}}
A.Av.prototype={
Z(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.wE.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.p(s.e)+", backward: "+s.z+")"}}
A.d6.prototype={}
A.aj.prototype={}
A.c3.prototype={}
A.dv.prototype={}
A.cZ.prototype={}
A.b0.prototype={}
A.cm.prototype={}
A.mR.prototype={
cw(a,b){var s=this.gdW()
s.y.ni()
return this.c.ai(a,b)},
c2(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bF(i.d,!0,h)
h=A.bF(i.e,!0,h)
s=a0==null?A.bF(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bF(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bF(i.f,!0,t.jS)
return new A.mR(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
h2(){var s=null
return this.c2(s,s,s,s,s,s,s,s,s)},
ln(a){var s=null
return this.c2(s,s,s,s,s,s,s,a,s)},
pI(a){var s=null
return this.c2(s,s,s,a,s,s,s,s,s)},
pJ(a){var s=null
return this.c2(s,s,s,s,a,s,s,s,s)},
pG(a){var s=null
return this.c2(a,s,s,s,s,s,s,s,s)},
pK(a){var s=null
return this.c2(s,s,s,s,s,a,s,s,s)},
pM(a,b,c){var s=null
return this.c2(s,s,s,s,s,s,a,b,c)},
pL(a,b){var s=null
return this.c2(s,a,b,s,s,s,s,s,s)},
pH(a){var s=null
return this.c2(s,s,a,s,s,s,s,s,s)},
cY(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aB('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.ah('Unknown field "'+a+'" for query.',a))},
bh(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cY(a0)
s='"'+A.B(a0,'"','""')+'"'
r=A.j([],t.fC)
q=a4!=null
if(q)r.push(new A.b0(s+" = ?",[a4]))
p=b2!=null
if(p)r.push(new A.b0(s+" <> ?",[b2]))
o=a5!=null
if(o)r.push(new A.b0(s+" > ?",[a5]))
n=a6!=null
if(n)r.push(new A.b0(s+" >= ?",[a6]))
m=b0!=null
if(m)r.push(new A.b0(s+" < ?",[b0]))
l=b1!=null
if(l)r.push(new A.b0(s+" <= ?",[b1]))
k=a7!=null
if(k)r.push(new A.b0(s+" IN ("+B.b.B(A.ab(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.b0(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.b0(s+b,[A.kx(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b0(s+b,["%"+A.kx(a3)]))
g=a2!=null
if(g)r.push(new A.b0(s+b,["%"+A.kx(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b0(s+" IS NULL",B.n))
e=a8===!0
if(e)r.push(new A.b0(s+" IS NOT NULL",B.n))
d=this.h2()
B.b.E(d.d,r)
c=A.j([],t.k)
if(q)c.push(new A.aj(a0,"eq",[a4]))
if(p)c.push(new A.c3(new A.aj(a0,"eq",[b2])))
if(o)c.push(new A.aj(a0,"gt",[a5]))
if(n)c.push(new A.aj(a0,"gte",[a6]))
if(m)c.push(new A.aj(a0,"lt",[b0]))
if(l)c.push(new A.aj(a0,"lte",[b1]))
if(k)c.push(new A.aj(a0,"inValues",a7))
if(j)c.push(new A.aj(a0,"between",[a1.a,a1.b]))
if(i)c.push(new A.aj(a0,"startsWith",[b3]))
if(h)c.push(new A.aj(a0,"endsWith",[a3]))
if(g)c.push(new A.aj(a0,"contains",[a2]))
if(f)c.push(new A.aj(a0,"isNull",B.n))
if(e)c.push(new A.c3(new A.aj(a0,"isNull",B.n)))
B.b.E(d.f,c)
return d},
nv(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
xi(a,b,c){var s=null
return this.bh(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xp(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
xj(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
xk(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xn(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xo(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xl(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
xf(a,b,c){var s=null
return this.bh(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xq(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
xh(a,b,c){var s=null
return this.bh(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
xg(a,b,c){var s=null
return this.bh(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xm(a,b,c){var s=null
return this.bh(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
wi(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.j([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.r)(a),++r){q=a[r]
p=A.j([],j)
q.a8(0,new A.wB(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.h2()
o.e.push(new A.b0("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.j([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.r)(a),++r){q=a[r]
if(q.gY(0)){m=A.j([],j)
for(l=q.ga7().gu(0);l.k();){k=l.gn()
m.push(new A.aj(k.a,"eq",[k.b]))}s.push(new A.dv(m))}}o.f.push(new A.cZ(s))
return o},
jP(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.aj
r=s?a.a:l
if(s){this.cY(r)
break A}s=a instanceof A.c3
q=s?a.a:l
if(s){this.jP(q)
break A}p=a instanceof A.dv
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.r)(n),++m)this.jP(n[m])
break A}},
gc3(){var s,r=A.Q(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga1(r).a!=="id"
else s=!1
if(s)r.push(B.d5)
return r},
glk(){var s,r,q,p,o
if(this.at){s=A.j([],t.fi)
for(r=this.gc3(),q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
s.push(new A.cm(o.a,!o.b))}}else s=this.gc3()
return s},
gt6(){var s,r,q,p,o,n=A.j([],t.s)
for(s=this.gc3(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jF(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.Eo('Query on "'+this.gaP()+'" requires .limit(n) or .all().'))
return s},
gaP(){return this.b.a},
gdW(){return this.a},
eB(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.j([],e),c=[],b=A.j([],e)
e=f.z
if(!e)b.push("archived = 0")
s=f.Q
if(!s)b.push("hidden = 0")
if(b.length!==0)d.push(B.b.B(b," AND "))
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
d.push(o.a)
B.b.E(c,o.b)}for(r=f.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
d.push(o.a)
B.b.E(c,o.b)}r=f.as
if(r!=null){n=f.glr().uc(r,f.at)
m=f.lM(f.glk(),n)
d.push(m.a)
B.b.E(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.B(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.B(a,'"','""')+'"')+") AS v"}else r=f.grU()
k=r}j=f.glk()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.ww(),A.a0(j).i("X<1,l>")).B(0,", ")
h=A.J8(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.p(a0)+"|af:"+A.p(a)+"|df:null",new A.wx(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jF():a3
g=e}return new A.a5(h+(g==null?"":" LIMIT "+A.p(g)),c)},
j3(a){return this.eB(null,null,!1,!1,a)},
px(a,b){return this.eB(a,b,!1,!1,null)},
pv(){return this.eB(null,null,!1,!1,null)},
py(a,b,c){return this.eB(a,null,b,c,null)},
pw(a){return this.eB(null,null,!1,a,null)},
grU(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.l8())return"*"
o=A.Q(o,t.N)
for(s=this.gc3(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].a
if(!B.b.D(o,p))o.push(p)}return new A.X(o,A.po(),A.a0(o).i("X<1,l>")).B(0,", ")},
glr(){var s=this.b
return new A.uI(s.a,s.b,this.gt6(),this.gt3())},
gt3(){var s,r,q,p,o,n=this,m=A.j([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
m.push(A.j([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
m.push(A.j([o.a,o.b],q))}return B.h.a6(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lM(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cG(a,new A.wy(a)),c=B.b.cG(b,new A.wz())
if(a.length>=2&&d&&!B.b.gH(a).b&&c){s=A.j([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.r)(a),++q){p=a[q]
s.push('"'+A.B(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gH(a).b?"<":">"
return new A.a5("("+o+") "+n+" ("+B.b.B(A.ab(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.j([],s)
l=[]
for(k=0;k<a.length;++k){j=A.j([],s)
i=[]
g=0
for(;;){if(!(g<=k)){h=!0
break}r=a[g]
f='"'+A.B(r.a,'"','""')+'"'
e=b[g]
if(g===k)if(e==null){if(a[g].b){h=!1
break}j.push(f+" IS NOT NULL")}else{r=a[g].b
n=r?"<":">"
if(r)j.push("("+f+" "+n+" ? OR "+f+" IS NULL)")
else j.push(f+" "+n+" ?")
i.push(e)}else if(e==null)j.push(f+" IS NULL")
else{j.push(f+" = ?")
i.push(e)}++g}if(h){m.push("("+B.b.B(j," AND ")+")")
B.b.E(l,i)}}if(m.length===0)return B.dl
return new A.a5("("+B.b.B(m," OR ")+")",l)},
lN(a,b){var s,r,q,p,o=this.glr(),n=[]
for(s=this.gc3(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gc3(),p=r.length,q=0;q<r.length;r.length===p||(0,A.r)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.v(B.h.a6(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bz.gf6().v(o)},
e8(a){return this.v9(a)},
cH(){return this.e8(null)},
v9(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$e8=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.jF():a1
if(a0===0){q=B.d6
s=1
break}o=a0==null
n=p.j3(o?null:a0+1)
s=3
return A.a(p.cw(n.a,n.b),$async$e8)
case 3:m=a3
l=o?m:J.C7(m,a0).cR(0)
k=!o&&J.as(m)>a0
o=p.y
j=o!=null
i=j&&p.l8()
h=p.b
if(i){i=A.Q(o,t.N)
B.b.E(i,p.rj())
g=A.MA(h,l,p.gdW().ay,i,p.gdW().ch)}else g=A.Mz(h,l,p.gdW().ay,p.gdW().ch)
i=p.at
if(i&&g.length!==0){h=A.a0(g).i("bw<1>")
f=A.Q(new A.bw(g,h),h.i("a_.E"))
B.b.am(g)
B.b.E(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hj(g),$async$e8)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.Na(g,o):g
if(g.length!==0){b=e?p.lN(B.b.ga1(g),B.b.gH(g)):null
a=d?p.lN(B.b.ga1(g),B.b.gH(g)):null}else{b=null
a=null}q=new A.co(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e8,r)},
hj(a){return this.rd(a)},
rd(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga1(a)
e=p.gc3()
n=[]
for(m=p.gc3(),l=m.length,k=0;k<m.length;m.length===l||(0,A.r)(m),++k)n.push(o.h(0,m[k].a))
j=p.lM(e,n)
e=t.s
i=A.j([],e)
h=[]
g=A.j([],e)
if(!p.z)g.push("archived = 0")
if(!p.Q)g.push("hidden = 0")
if(g.length!==0)i.push(B.b.B(g," AND "))
for(e=p.d,n=e.length,k=0;k<e.length;e.length===n||(0,A.r)(e),++k){f=e[k]
i.push(f.a)
B.b.E(h,f.b)}for(e=p.e,n=e.length,k=0;k<e.length;e.length===n||(0,A.r)(e),++k){f=e[k]
i.push(f.a)
B.b.E(h,f.b)}i.push(j.a)
B.b.E(h,j.b)
d=J
s=3
return A.a(p.cw("SELECT 1 FROM "+('"'+A.B(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hj)
case 3:q=d.ee(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hj,r)},
l8(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.fa(o)==null)return!1}return!0},
rj(){var s,r,q,p,o=A.j([],t.s)
for(s=this.gc3(),r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hK(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hK=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pw(!0)
m=A
s=3
return A.a(p.cw(o.a,o.b),$async$hK)
case 3:n=m.ff(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
hM(a){return this.u3(a)},
u3(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cY(a)
o=p.py(a,!0,!0)
m=A
s=3
return A.a(p.cw(o.a,o.b),$async$hM)
case 3:n=m.ff(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)},
hU(a){return this.uQ(a)},
uQ(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cY(a)
o=A.j([a],t.s)
n=A.j([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.r)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pM(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.j3(h)
o=[]
f=J
s=3
return A.a(i.cw(B.a.kA(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hU)
case 3:n=f.E(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hU,r)},
qF(a){var s,r,q=this.b.fa(a)
if(q==null)return!1
s=q.b
A:{r=B.T===s||B.U===s||B.B===s||B.V===s
break A}return r},
cX(a,b){return this.p7(a,b)},
p7(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cY(b)
if(!p.qF(b))throw A.b(A.ah('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.px(b,a)
s=3
return A.a(p.cw(o.a,o.b),$async$cX)
case 3:n=d
m=J.L(n)
q=A.FD(m.gF(n)?null:J.W(m.gH(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cX,r)},
ia(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$ia=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.ln(A.j(["id"],m))
k=l.pv()
s=3
return A.a(l.cw(k.a,k.b),$async$ia)
case 3:j=b
m=A.j([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.F(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
hV(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$hV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.j3(p.jF())
n=J
s=3
return A.a(p.cw("EXPLAIN QUERY PLAN "+o.a,o.b),$async$hV)
case 3:q=n.c_(b,new A.wA(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)}}
A.wB.prototype={
$2(a,b){this.a.cY(a)
this.b.push('"'+A.B(a,'"','""')+'" = ?')
this.c.push(b)},
$S:115}
A.ww.prototype={
$1(a){var s=A.B(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:116}
A.wx.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.B(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:117}
A.wy.prototype={
$1(a){return a.b===B.b.gH(this.a).b},
$S:118}
A.wz.prototype={
$1(a){return a!=null},
$S:22}
A.wA.prototype={
$1(a){return a.h(0,"detail")},
$S:35}
A.cM.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.p(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cM&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gJ(a){return A.c4(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.wV.prototype={
rT(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.Eo('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cH(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cH=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.cm(a3).length===0){q=B.cO
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.ej(a3)
A.Jj(d)
if(e.b)A.Ji(d)
c=f.a
b=c+"_fts"
a=A.j(['"'+A.B(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.B(a," AND ")
a0=n.rT()
a1=a0==null?"":" LIMIT "+A.p(a0)
f=A.B(b,'"','""')
e=A.B(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.B(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.y.ni()
s=7
return A.a(n.c.ai(m,l),$async$cH)
case 7:j=a6
i=A.j([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.W(h,"id")
f.toString
A.F(f)
e=J.W(h,"score")
e.toString
J.aO(i,new A.cM(f,A.FC(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.C(a4)
if(i instanceof A.c6){g=i
throw A.b(A.ah("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cH,r)}}
A.co.prototype={}
A.wO.prototype={}
A.c2.prototype={
a4(){return"FieldKind."+this.b}}
A.aY.prototype={
gkU(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aw===s||B.I===s||B.W===s||B.X===s||B.J===s){r="TEXT"
break A}if(B.T===s||B.B===s||B.V===s){r="INTEGER"
break A}if(B.U===s){r="REAL"
break A}throw A.b(A.eJ(u.P))}return r},
p(){var s,r=this,q=A.u(t.N,t.X)
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
A.rG.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fC(B.cI,A.F(m))
m=n.h(0,"name")
m.toString
A.F(m)
r=J.x(n.h(0,"required"),!0)
q=J.x(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aY(m,B.aw,r,J.x(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aY(m,B.T,r,!1,q,o,o,!1)
case 2:return new A.aY(m,B.U,r,!1,q,o,o,!1)
case 3:return new A.aY(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aY(m,B.V,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aY(m,B.I,r,!1,!1,A.fO(J.px(t.j.a(n),p),p),o,!1)
case 6:return new A.aY(m,B.W,!1,!1,q,o,o,!1)
case 7:return new A.aY(m,B.X,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aY(m,B.J,!1,!1,!1,o,A.F(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:119}
A.iJ.prototype={
a4(){return"IndexScope."+this.b}}
A.dD.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.tt.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.px(t.j.a(q),t.N)
s=J.x(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dD(q,s,A.fC(B.cD,A.F(r)))},
$S:120}
A.fK.prototype={
p(){var s,r=t.N,q=t.X,p=A.u(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gY(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fK&&r.b===b.b&&B.ay.Z(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gJ(a){return A.c4(A.vr(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.rW.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.px(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fK(p,r,t.f.b(q)?A.Ij(q.ca(0,s,t.X)):B.cj)},
$S:121}
A.et.prototype={
ej(a){var s,r,q,p
for(s=this.a.ga7(),s=s.gu(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.D(r,p))continue
q=q.b
r=A.B(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.et&&A.Ii(this.a,b.a)
else s=!0
return s},
gJ(a){var s,r,q,p=this.a,o=p.gK(),n=A.Q(o,A.n(o).i("o.E"))
B.b.aG(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.r)(n),++r){q=n[r]
o.push(A.c4(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.vr(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.rV.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.u(s,s)
for(o=t.d2.a(o).ga7(),o=o.gu(o);o.k();){q=o.gn()
p=q.a
p.toString
A.F(p)
q=q.b
q.toString
A.F(q)
A.E9(p,q)
r.j(0,p,q)}return new A.et(A.I0(r,s,s))},
$S:122}
A.c7.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.xa.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.aq(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.j([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.E4(q.a(p.gn())))
return new A.c7(o,s,r)},
$S:123}
A.vi.prototype={
a4(){return"MissingRemotePolicy."+this.b}}
A.qB.prototype={}
A.cD.prototype={
gda(){var s,r,q,p,o=this,n=$.GU()
A.Cf(o)
s=n.a.get(o)
if(s==null){s=A.aL(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
fa(a){var s,r,q,p,o,n=this,m=$.GV()
A.Cf(n)
s=m.a.get(n)
if(s==null){s=A.u(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.r)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.W(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.u(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.j([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o)r.push(q[o].p())
j.j(0,"fields",r)
r=A.j([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.r)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.Q
if(l!=null)j.j(0,"attachmentField",l)
l=m.w
if(l!=null)j.j(0,"fts",l.p())
l=A.j([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.r)(k),++o)l.push(k[o].p())
j.j(0,"migrations",l)
return j}}
A.q8.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j="attachmentField",i=this.a,h=i.h(0,"name")
h.toString
A.F(h)
s=i.h(0,"version")
s.toString
A.aq(s)
r=A.j([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.E4(o.a(q.gn())))
q=A.j([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.It(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.F(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.Ik(o.a(l))}else l=null
k=A.j([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.aj:i)
while(i.k())k.push(A.Js(o.a(i.gn())))
return new A.cD(h,s,r,q,n,p,l,k,m,this.b.i("cD<0>"))},
$S(){return this.b.i("cD<0>()")}}
A.n4.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.wR.prototype={
$1(a){return!1},
$S:42}
A.wS.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.I)},
$S:12}
A.wT.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.eB)},
$S:44}
A.wU.prototype={
$1(a){return J.Z(a)},
$S:125}
A.dN.prototype={
a4(){return"MutationAction."+this.b}}
A.ft.prototype={
gaP(){return this.b.a.a},
eD(){var s=this.d
if(s!=null&&s.e){s=this.gaP()
throw A.b(new A.h4('Cannot mutate "'+s+'" through a read-only Tx.'))}},
iu(a){var s=this
if(s.d!=null)return s.il(B.a0,a)
return s.a.aX(new A.qm(s,a),B.p,t.H)},
ns(a){var s=this
if(s.d!=null)return s.il(B.a1,a)
return s.a.aX(new A.qp(s,a),B.p,t.H)},
nd(a){var s=this
if(s.d!=null)return s.ne(a)
return s.a.aX(new A.ql(s,a),B.p,t.H)},
nt(a){var s=this
if(s.d!=null)return s.bB(a,B.a1)
return s.a.aX(new A.qo(s,a),B.p,t.H)},
na(a,b){var s=this
if(s.d!=null)return s.wl(a,b)
return s.a.aX(new A.qi(s,a,b),B.p,t.H)},
nb(a){var s=this
if(s.d!=null)return s.fp(a)
return s.a.aX(new A.qh(s,a),B.p,t.H)},
fp(a){return this.wk(a)},
wk(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$fp=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eD()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aK(a,o.i("aK<1,2>")).gu(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cO(m.a,m.b,!0),$async$fp)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aL(t.N)
for(o=new A.bE(a,a.r,a.e,o.i("bE<1>"));o.k();)l.t(0,o.d)
n.a_(new A.a2(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
mx(a){var s=this
if(s.d!=null)return s.ik(B.C,a)
return s.a.aX(new A.qe(s,a),B.p,t.H)},
nn(a){var s=this
if(s.d!=null)return s.ik(B.E,a)
return s.a.aX(new A.qn(s,a),B.p,t.H)},
kw(a){var s=this
if(s.d!=null)return s.dl(a)
return s.a.aX(new A.qj(s,a),B.p,t.H)},
dl(a){return this.wr(a)},
wr(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eD()
s=2
return A.a(q.dV(a),$async$dl)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cA(n,m,a,!0),$async$dl)
case 3:s=4
return A.a(n.T(m,"id = ?",[a]),$async$dl)
case 4:l=t.N
o.a_(new A.a2(m,A.at([a],l)))
if(p!=null){l=A.d3(p.gK(),l)
l.G(0,"id")
o.bd(new A.aU(m,a,B.H,B.at,p,null,l))}return A.e(null,r)}})
return A.f($async$dl,r)},
cO(a,b,c){return this.wm(a,b,c)},
wl(a,b){return this.cO(a,b,!1)},
wm(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eD()
s=3
return A.a(p.c.b.ai("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cO)
case 3:o=e
n=J.L(o)
if(n.gY(o)){m=n.gH(o)
l=A.jA(m)
k=m.h(0,"o_kind")!=null?A.mF(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eJ(a,b,l,k,c),$async$cO)
case 6:s=1
break
case 5:s=7
return A.a(p.d3(a,b,c,k,l),$async$cO)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cO,r)},
d3(a,b,c,d,e){return this.q5(a,b,c,d,e)},
q5(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d3=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dV(a),$async$d3)
case 2:m=g
if(m==null)throw A.b(A.CE("No record "+q.gaP()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cJ(m,p,o)
n.E(0,b)
o=A.u(p,o)
o.j(0,"id",a)
o.E(0,n)
s=3
return A.a(q.aO(B.K,c,m,a,d,e,o),$async$d3)
case 3:return A.e(null,r)}})
return A.f($async$d3,r)},
eJ(a,b,c,d,e){return this.r6(a,b,c,d,e)},
r6(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eJ=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.aE(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.d3(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.x(i,a7)){q=n.d3(a7,a8,b1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.cJ(a5,h,g)
f.E(0,a8)
m=f
J.cY(m,"id",a7)
e=new A.a3("")
f=n.b
d=f.a
c=A.Bi(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cJ(m,h,g)
b.G(0,"id")
n.hu(a7,b,a,c)
a0=n.lu(a5,m,B.K)
l=null
b=a0.length===1&&d.gda().D(0,B.b.gap(a0))
a1=n.a
a2=a1.ay
a3=a1.ch
if(b){a4=d.fa(B.b.gap(a0))
b=a4.a
l=A.m([b,A.Gr(d,a4,J.W(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dr(d,J.x(J.W(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.c.b.L(d.a,l,"id = ?",[a7]),$async$eJ)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.C(a6)
h=A.GP(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.cx
g===$&&A.v()
b=l
s=8
return A.a(g.bo(B.K,null,a0,n.c.b,a7,m,a5,b0,a,b,a9,f),$async$eJ)
case 8:if(!b1){g=n.d
if(g!=null)g.a_(new A.a2(d.a,A.at([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bd(new A.aU(d.a,a7,B.H,B.A,a5,m,A.uL(a0,A.a0(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eJ,r)},
aO(a,b,c,d,e,f,g){return this.w7(a,b,c,d,e,f,g)},
il(a,b){var s=null
return this.aO(a,!1,s,s,s,s,b)},
ik(a,b){var s=null
return this.aO(a,!1,s,b,s,s,s)},
w5(a,b,c){var s=null
return this.aO(a,b,s,s,s,s,c)},
w6(a,b,c,d,e,f){return this.aO(a,b,c,null,d,e,f)},
w7(b9,c0,c1,c2,c3,c4,c5){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$aO=A.c(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:b7={}
n.eD()
m=null
b7.a=c1
l=null
b7.b=b7.c=null
i=new A.qg(b7,n,c4,c3)
s=b9===B.a0?3:5
break
case 3:h=A.a6(c5.h(0,"id"))
if(h==null)h=A.i5()
g=$.pv()
if(!g.b.test(h))throw A.b(A.ah('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aO)
case 6:l=n.eG(c5,m)
b9=b7.a==null?B.b9:B.K
s=4
break
case 5:s=b9===B.K?7:9
break
case 7:c2.toString
m=c2
s=10
return A.a(i.$1(m),$async$aO)
case 10:if(b7.a==null)throw A.b(A.CE("No record "+n.gaP()+"/"+A.p(m)+" to update."))
c5.toString
l=n.eG(c5,m)
s=8
break
case 9:s=b9===B.a1?11:13
break
case 11:h=A.a6(c5.h(0,"id"))
if(h==null)h=A.i5()
g=$.pv()
if(!g.b.test(h))throw A.b(A.ah('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aO)
case 14:g=b7.a
if(g==null){l=n.eG(c5,m)
b9=B.b9}else{l=A.cJ(g,t.N,t.X)
for(g=new A.aK(c5,A.n(c5).i("aK<1,2>")).gu(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.cY(l,e,f.b)}b9=B.K}s=12
break
case 13:c2.toString
m=c2
s=15
return A.a(i.$1(m),$async$aO)
case 15:g=b7.a
if(g==null)throw A.b(A.CE("No record "+n.gaP()+"/"+A.p(m)+" to archive/restore."))
g=A.cJ(g,t.N,t.X)
g.j(0,"archived",b9===B.C)
l=g
case 12:case 8:case 4:d=new A.a3("")
g=n.b
e=g.a
c=l
b=A.Bi(d,e,c,J.as(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hu(m,l,a,b)
s=b7.a==null?16:18
break
case 16:a0=null
s=17
break
case 18:c=c4==null?b7.c:c4
s=c==null?19:21
break
case 19:c=n.a.cx
c===$&&A.v()
s=22
return A.a(c.bU(n.c.b,e.a,m),$async$aO)
case 22:c=c7
a0=c
s=20
break
case 21:a0=c
case 20:case 17:s=b7.a==null?23:25
break
case 23:a1=null
s=24
break
case 25:c=c3==null?b7.b:c3
s=c==null?26:28
break
case 26:c=n.a.cx
c===$&&A.v()
s=29
return A.a(c.en(n.c.b,e.a,m),$async$aO)
case 29:c=c7
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a5)throw A.b(A.DY("Record "+n.gaP()+"/"+A.p(m)+u.W))
a3=b7.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ai(A.bh(e,a3))
a2=A.ar(B.l.v(B.e.v(a6)).a)
a7=new A.pP(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ay
a8=a3.ch
a9=A.dr(e,J.x(J.W(l,"archived"),!0),a4,a8,c,a2)
b0=n.lu(b7.a,l,b9)
k=null
if(b7.a!=null&&b0.length===1&&e.gda().D(0,B.b.gap(b0))){b1=e.fa(B.b.gap(b0))
c=b1.a
k=A.m([c,A.Gr(e,b1,J.W(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
a2=n.c.b
s=b7.a==null?34:36
break
case 34:s=37
return A.a(a2.aC(0,c,k),$async$aO)
case 37:s=35
break
case 36:s=38
return A.a(a2.L(c,k,"id = ?",[m]),$async$aO)
case 38:case 35:p=2
s=33
break
case 31:p=30
b8=o.pop()
j=A.C(b8)
g=A.GP(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.cx
c===$&&A.v()
a2=m
a3=b7.a
s=39
return A.a(c.bo(b9,a7,b0,n.c.b,a2,l,a3,a1,a,a9,a0,g),$async$aO)
case 39:b3=c7
b4=b3.a
if(b4)b5=B.at
else switch(b9.a){case 2:case 0:case 1:b5=b7.a==null?B.ac:B.A
break
case 3:b5=B.A
break
case 4:b5=B.c4
break
case 5:b5=B.c5
break
default:b5=null}if(b4){g=A.aL(t.N)
c=b7.a
c=J.E((c==null?l:c).gK())
while(c.k()){a2=c.gn()
if(a2!=="id")g.t(0,a2)}b6=g}else if(b9===B.C||b9===B.E)b6=A.at(["archived"],t.N)
else if(b7.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("am<o.E>")
b6=A.d3(new A.am(new A.T(g,c),new A.qf(),a2),a2.i("o.E"))}else b6=A.uL(b0,A.a0(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c){a2=m
a3=b7.a
a4=b4?null:l
g.bd(new A.aU(e.a,a2,B.H,b5,a3,a4,b6))}if(!c0)if(!c)g.a_(new A.a2(e.a,A.at([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aO,r)},
bB(a,b){return this.wu(a,b)},
ne(a){return this.bB(a,B.a0)},
wu(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bB=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eD()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.j([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.r)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a6(a0)
a2=a1?A.i5():a0
a1=$.pv()
if(!a1.b.test(a2))throw A.b(A.ah('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aO(l,new A.a5(a2,a))}if(!c){a3=A.u(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.r)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.al(a3,a3.$ti.i("al<2>")).c9(0,new A.qk())}else a5=!1
s=c3===B.a0&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dT(m,l),$async$bB)
case 9:k=A.aL(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.r)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aO(k,i)}g.a_(new A.a2(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.C(c0) instanceof A.hx))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.u(k,t.G)
j=n.a,d=j.ay,j=j.ch,a1=t.s,a8=0
case 10:if(!(a8<J.as(l))){s=12
break}a9=a8+2000
b0=B.c.bO(a9,0,J.as(l))
a4=A.j([],a1)
for(b1=J.HI(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.r)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.cl(e,"id IN ("+B.b.B(A.ab(a4.length,"?",!1,k),", ")+")",a4),$async$bB)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.F(b2),A.cd(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.u(k,t.nw)
b4=A.u(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.Q(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.U(b5,a8,B.c.bO(a9,0,j))
b7=B.b.B(A.ab(b6.length,"?",!1,k),", ")
j=A.j([e],a1)
B.b.E(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.cl("lp_sync_row",f,j),$async$bB)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.F(b1),A.jA(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.cl("lp_outbox",f,j),$async$bB)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.F(d),A.mF(f))
s=23
break
case 24:case 17:a8=a9
s=16
break
case 18:b8=A.aL(k)
j=l,f=j.length,d=t.X,b=0
case 25:if(!(b<j.length)){s=27
break}a1=j[b]
a2=a1.a
a=a1.b
b9=a7.h(0,a2)
s=b8.D(0,a2)?28:30
break
case 28:a1=A.dI(null,null,k,d)
a1.E(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.w5(c3,!0,a1),$async$bB)
case 31:s=29
break
case 30:a1=A.dI(null,null,k,d)
a1.E(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.w6(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bB)
case 32:b8.t(0,a2)
case 29:case 26:j.length===f||(0,A.r)(j),++b
s=25
break
case 27:g.a_(new A.a2(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bB,r)},
dT(a,b){return this.rr(a,b)},
rr(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dT=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.iw?3:4
break
case 3:s=5
return A.a(n.dU(a6,a7),$async$dT)
case 5:s=1
break
case 4:m=n.a.CW.$0()
a=n.d
a0=a==null?null:a.a.a$.b.d!=null
l=a0===!0
k=A.j([],t.jO)
j=0
p=7
a0=a7.length,a1=0
case 10:if(!(a1<a7.length)){s=12
break}i=a7[a1]
h=null
g=null
f=i
h=f.a
g=f.b
s=13
return A.a(n.ez(a6,a4,h,g,m),$async$dT)
case 13:e=a9
if(l)J.aO(k,new A.a5(h,e));++j
case 11:a7.length===a0||(0,A.r)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.C(a5) instanceof A.c6?14:16
break
case 14:d=A.j([],t.s)
for(c=0;c<j;++c)J.aO(d,a7[c].a)
b=d
s=17
return A.a(n.d2(a6,b),$async$dT)
case 17:throw A.b(new A.hx())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a0=n.b.a.a,a1=0;a1<i.length;i.length===d||(0,A.r)(i),++a1){a3=i[a1]
e=a3.b
a.toString
a.bd(new A.aU(a0,a3.a,B.H,B.ac,null,e,J.DK(e.gK(),new A.qd()).fH(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dT,r)},
dU(a,b){return this.rs(a,b)},
rs(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dU=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.CW.$0()
d1=o.c.b
d2=t.s
d3=A.j(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.r)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.i9(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.i9(B.Z)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.i9(B.Y)+") VALUES "
j=new A.qc()
b1=new A.a3("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.j([],t.jO):null
i=0,a9=b3==null,b4=c9.ay,b5=c9.ch,b6=c8.b
case 2:if(!(b7=i,b8=d6.length,b7<b8)){s=4
break}h=B.x.bO(i+500,0,b8)
g=h-i
f=[]
e=[]
d=[]
for(b9=i;b9<h;++b9){c0=d6[b9]
c1=c0.a
c2=c0.b
c3=b2?o.eG(c2,c1):c2
b1.a=""
c4=A.Bi(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hu(c1,c3,c5,c4)
A.LY(f,c8,J.x(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.cx
b7===$&&A.v()
c6=b7.fO()
A.Gg(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.Gh(d,B.a6,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a5(c1,c3))}c=!1
b=!1
q=6
b7=d1.cn(A.p(m)+A.p(j.$2(J.as(n),g)))
if(b7.r||b7.b.r)A.t(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eA(new A.bO(f))
b7.h7()
c=!0
b7=d1.cn(A.p(l)+A.p(j.$2(11,g)))
if(b7.r||b7.b.r)A.t(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eA(new A.bO(e))
b7.h7()
b=!0
b7=d1.cn(A.p(k)+A.p(j.$2(16,g)))
if(b7.r||b7.b.r)A.t(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eA(new A.bO(d))
b7.h7()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.C(d4) instanceof A.c6?9:11
break
case 9:a=A.j([],d2)
for(a0=0;a0<i;++a0)J.aO(a,d6[a0].a)
a1=a
s=12
return A.a(o.d2(d5,a1),$async$dU)
case 12:s=c||b?13:14
break
case 13:a2=A.j([],d2)
for(a3=i;a3<h;++a3)J.aO(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.ab(J.as(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.T(d3,"id IN ("+A.p(a5)+")",a4),$async$dU)
case 17:case 16:s=b?18:19
break
case 18:a6=A.j([d3],d2)
J.DF(a6,a4)
a7=a6
s=20
return A.a(d5.T("lp_outbox","store = ? AND record_id IN ("+A.p(a5)+")",a7),$async$dU)
case 20:case 19:case 14:throw A.b(new A.hx())
s=10
break
case 11:throw d4
case 10:s=8
break
case 5:s=1
break
case 8:case 3:i+=500
s=2
break
case 4:if(b2)for(a=b3.length,b0=0;b0<b3.length;b3.length===a||(0,A.r)(b3),++b0){a2=b3[b0]
c3=a2.b
a8.toString
a8.bd(new A.aU(d3,a2.a,B.H,B.ac,null,c3,J.DK(c3.gK(),new A.qb()).fH(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dU,r)},
ez(a,b,c,d,e){return this.pb(a,b,c,d,e)},
pb(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ez=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eG(b1,b0)
a3=new A.a3("")
a4=A.Bi(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hu(b0,a2,a6,a4)
a5=n.a
m=A.dr(a1,J.x(a2.h(0,"archived"),!0),a5.ay,a5.ch,b0,a2)
a5=a5.cx
a5===$&&A.v()
e=a5.fO()
a5=a1.a
l=A.Gj("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.Mi('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dK(new A.T(d,c),new A.q9(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.ab(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.p(h)+") VALUES ("+A.p(g)+")"
c=a9.cn(f)
d=m
a=A.n(d).i("al<2>")
d=A.Q(new A.al(d,a),a.i("o.E"))
c.e7(new A.bO(d))
j=!0
a9.cn("INSERT INTO lp_outbox ("+A.i9(B.Z)+") VALUES ("+B.b.B(A.ab(11,"?",!1,b),", ")+")").e7(new A.bO(A.GJ(l,B.Z)))
i=!0
a9.cn("INSERT INTO lp_sync_row ("+A.i9(B.Y)+") VALUES ("+B.b.B(A.ab(16,"?",!1,b),", ")+")").e7(new A.bO(A.GJ(k,B.Y)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.T(a5,"id = ?",[b0]),$async$ez)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.T("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$ez)
case 12:case 11:throw a7
s=6
break
case 3:s=2
break
case 6:q=a2
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ez,r)},
d2(a,b){return this.pQ(a,b)},
pQ(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$d2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.ab(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.T(m,"id IN ("+o+")",b),$async$d2)
case 3:m=A.j([m],t.s)
B.b.E(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.T("lp_outbox",n,m),$async$d2)
case 4:s=5
return A.a(a.T("lp_sync_row",n,m),$async$d2)
case 5:case 1:return A.e(q,r)}})
return A.f($async$d2,r)},
eG(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=a.ga7(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.nf("archived",new A.qa())
return p},
lu(a,b,c){var s,r,q,p,o
if(a==null)return B.cP
s=t.N
r=A.aL(s)
s=A.d3(a.gK(),s)
s.E(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hJ(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.r.Z(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.Q(r,r.$ti.c)
B.b.aG(o)
return o},
dV(a){return this.rw(a)},
rw(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ai('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dV)
case 3:m=c
l=J.L(m)
if(l.gF(m)){q=null
s=1
break}o=p.a
q=A.cd(n,l.gH(m),o.ay,o.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
hk(a){return this.re(a)},
re(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ai('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hk)
case 3:j=c
k=J.L(j)
if(k.gF(j)){q=B.dn
s=1
break}o=k.gH(j)
k=p.a
n=A.cd(l,o,k.ay,k.ch)
m=o.h(0,"s_sync_state")!=null?A.jA(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.f4(n,m,o.h(0,"o_kind")!=null?A.mF(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
bY(a){return this.ob(a)},
ob(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$bY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:f=p.d==null
if(f&&p.b.e.a.I(a)){q=p.b.e.bY(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
k=p.c.b
s=m>1?3:5
break
case 3:s=6
return A.a(k.ai("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bY)
case 6:s=4
break
case 5:s=7
return A.a(k.ai('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bY)
case 7:case 4:j=c
l=J.L(j)
if(l.gF(j)){if(f)o.e.kR(a,null)
q=null
s=1
break}i=l.gH(j)
l=p.a
h=A.cd(n,i,l.ay,l.ch)
g=A.bf(i.h(0,"lp_schema_ver"))
if(g==null)g=1
if(g<m)h=A.LZ(n,h,g,m)
if(f)o.e.kR(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bY,r)},
hu(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.ah('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.Dm(p,n)
if(m!=null)throw A.b(A.ah(A.HW(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.ah("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.qm.prototype={
$1(a){return a.bz(this.a.b.a.a).iu(this.b)},
$S:4}
A.qp.prototype={
$1(a){return a.bz(this.a.b.a.a).ns(this.b)},
$S:4}
A.ql.prototype={
$1(a){return a.bz(this.a.b.a.a).nd(this.b)},
$S:4}
A.qo.prototype={
$1(a){return a.bz(this.a.b.a.a).nt(this.b)},
$S:4}
A.qi.prototype={
$1(a){return a.bz(this.a.b.a.a).na(this.b,this.c)},
$S:4}
A.qh.prototype={
$1(a){return a.bz(this.a.b.a.a).nb(this.b)},
$S:4}
A.qe.prototype={
$1(a){return a.bz(this.a.b.a.a).mx(this.b)},
$S:4}
A.qn.prototype={
$1(a){return a.bz(this.a.b.a.a).nn(this.b)},
$S:4}
A.qj.prototype={
$1(a){return a.bz(this.a.b.a.a).kw(this.b)},
$S:4}
A.qg.prototype={
nA(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.dV(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.hk(a),$async$$1)
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
$1(a){return this.nA(a)},
$S:126}
A.qf.prototype={
$1(a){return a!=="id"},
$S:10}
A.qk.prototype={
$1(a){return a>1},
$S:127}
A.qd.prototype={
$1(a){return a!=="id"},
$S:10}
A.qc.prototype={
$2(a,b){var s=t.N
return B.b.B(A.ab(b,"("+B.b.B(A.ab(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:128}
A.qb.prototype={
$1(a){return a!=="id"},
$S:10}
A.q9.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.qa.prototype={
$0(){return!1},
$S:45}
A.hx.prototype={$iG:1}
A.oh.prototype={}
A.pC.prototype={
aW(a,b){var s=this.a.W(new A.pD(a,b),b)
this.a=s.bg(new A.pE(b),new A.pF(),t.H)
return s}}
A.pD.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.pE.prototype={
$1(a){},
$S(){return this.a.i("U(0)")}}
A.pF.prototype={
$2(a,b){},
$S:7}
A.bj.prototype={
gnl(){var s=this.e
return s.gm(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.qC.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.F(d)
s=e.h(0,"record_id")
s.toString
A.F(s)
r=A.Bq(e.h(0,l),l,k)
q=A.Bq(e.h(0,j),j,k)
p=A.Bq(e.h(0,i),i,k)
o=A.Gp(e.h(0,h),h,k)
n=A.Gp(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.aq(m)
return new A.bj(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.Bq(e.h(0,f),f,k):null)},
$S:130}
A.qD.prototype={
fi(a){return this.vU(a)},
vU(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fi=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.v()
m=m.gbp()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.wv("lp_conflicts","detected_at ASC",n,o),$async$fi)
case 3:o=l.c_(c,A.Mo(),t.n8)
m=A.Q(o,o.$ti.i("a_.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
dv(a,b){return this.oc(a,b)},
oc(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.v()
s=3
return A.a(n.gbp().b.aL("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dv)
case 3:o=d
n=J.L(o)
if(n.gF(o)){q=null
s=1
break}q=A.Ca(n.gH(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dv,r)},
xe(a){var s={},r=A.yM()
s.a=null
r.shY(A.dS(new A.qG(s,r),new A.qH(s,this,a,new A.qI(this,r,a)),t.ba))
return r.bb().gcW()},
ep(a,b,c){return this.wT(a,b,c)},
wT(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ep=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(c)
s=2
return A.a(p.a2(new A.qE(q,c,a,o.a,o,b),t.P),$async$ep)
case 2:return A.e(null,r)}})
return A.f($async$ep,r)},
eX(a,b){return this.tE(a,b)},
tE(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dv(a,b),$async$eX)
case 2:p=d
if(p==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=3
return A.a(q.ep(b,p.d,a),$async$eX)
case 3:return A.e(null,r)}})
return A.f($async$eX,r)},
e0(a,b){return this.tF(a,b)},
tF(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$e0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dv(a,b),$async$e0)
case 3:o=d
if(o==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=o.gnl()?4:5
break
case 4:s=6
return A.a(p.a.bz(a).kw(b),$async$e0)
case 6:s=1
break
case 5:s=7
return A.a(p.ep(b,o.e,a),$async$e0)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e0,r)}}
A.qI.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bb().gic()){s=1
break}p=4
s=7
return A.a(n.a.fi(n.c),$async$$0)
case 7:m=b
if(!i.bb().gic())J.aO(i.bb(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.C(h)
k=A.ad(h)
if(!i.bb().gic())i.bb().by(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.qH.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b1(p,A.n(p).i("b1<1>")).aT(new A.qF(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qF.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:39}
A.qG.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.C()
s=2
return A.a(p instanceof A.w?p:A.bx(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bb().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qE.prototype={
$1(a){return this.nB(a)},
nB(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aL("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.L(a3)
if(a4.gF(a3))throw A.b(A.A("No conflict found for "+a1+"/"+a2))
o=A.Ca(a4.gH(a3))
n=o.gnl()
m=n?null:A.ai(o.e)
l=n?"":A.ar(B.l.v(B.e.v(A.ai(A.bh(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aL(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bA(a8)?4:5
break
case 4:s=7
return A.a(a0.T("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.T("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.T("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a_(new A.a2(a1,A.at([a2],a4)))
a6.a_(new A.a2("lp_conflicts",A.at([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aL("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.L(k)
if(i.gY(k)){h=A.a6(J.W(i.gH(k),"base_updated"))
i=h==null?A.a6(J.W(i.gH(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.T("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cJ(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dr(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bI(n?B.j:o.e,g)
d=A.Q(a4,A.n(a4).c)
B.b.aG(d)
c=A.ai(A.bh(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a6(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aL("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bA(a8)?14:16
break
case 14:a4=p.a.a
b=a4.CW.$0()
h=f?B.L:B.v
e=B.h.a6(d,null)
a4=a4.cx
a4===$&&A.v()
s=18
return A.a(a0.aC(0,"lp_outbox",A.Gj(l,j,b,e,h,a4.fO(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a_(new A.a2(a1,A.at([a2],i)))
a6.a_(new A.a2("lp_conflicts",A.at([a2],i)))
a4=o.d
a=A.bI(a4,g)
a.G(0,"id")
a6.bd(new A.aU(a1,a2,B.ad,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.no.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dS(null,null,t.n6)
n.ay=A.dS(null,null,t.ic)}n.z=!0
s=3
return A.a(n.aK(B.dx),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.ir(),$async$az)
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
n.fr=new A.b1(l,A.n(l).i("b1<1>")).aT(n.gvy())
l=n.b.ay
n.fx=new A.b1(l,A.n(l).i("b1<1>")).aT(n.gvw())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aH(),$async$az)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.CP(B.S,new A.xy(n))
s=14
return A.a(n.aK(n.dH()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.c5("cycle")
s=17
return A.a(n.eS(),$async$az)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$az,r)},
aH(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1;++p.db
o=p.fy
if(o!=null)o.C()
o=p.go
if(o!=null)o.C()
o=p.id
if(o!=null)o.C()
o=p.k1
if(o!=null)o.C()
s=3
return A.a(p.k4,$async$aH)
case 3:s=4
return A.a(p.dx,$async$aH)
case 4:s=5
return A.a(p.dy.a,$async$aH)
case 5:s=6
return A.a(p.p2,$async$aH)
case 6:o=p.fr
o=o==null?null:o.C()
n=t.H
s=7
return A.a(o instanceof A.w?o:A.bx(o,n),$async$aH)
case 7:o=p.fx
o=o==null?null:o.C()
s=8
return A.a(o instanceof A.w?o:A.bx(o,n),$async$aH)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.N
o.t(0,B.N)
s=12
return A.a(p.ax.q(),$async$aH)
case 12:s=10
break
case 11:p.y=B.N
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aH)
case 15:case 14:p.y=B.N
case 1:return A.e(q,r)}})
return A.f($async$aH,r)},
dH(){if(this.at)return B.bm
if(this.Q)return B.bj
if(this.as)return B.aE
return B.bk},
aK(a){return this.tf(a)},
tf(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.pY(),$async$aK)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aK,r)},
pY(){return this.p2=this.p2.W(new A.xo(this),t.H)},
h3(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$h3=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.hL(),$async$h3)
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
if((g.c&4)===0)g.t(0,new A.eN(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h3,r)},
vz(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.c5("push")
s.rR(B.af)},
vx(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dy.I(s))return
r=a.c
if(r!=null&&a.b===B.aa){q.c5("fast:"+s)
q.dx=q.dx.W(new A.xw(q,r),t.H)
return}q.c5("pull:"+s)
q.hr(B.af,A.j([s],t.s))},
h8(a){return this.q6(a)},
q6(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h8=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hr(B.af,A.j([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.v()
s=7
return A.a(l.hW(a),$async$h8)
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
break}if(!m)n.hr(B.af,A.j([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h8,r)},
vH(){if(!this.z)return
this.c5("cycle")
this.m8()},
hr(a,b){var s=this,r=s.go
if(r!=null)r.C()
if(b==null)s.k2=!0
else s.k3.E(0,b)
s.go=A.cQ(a,new A.xv(s))},
rR(a){return this.hr(a,null)},
rQ(a){var s=this.id
if(s!=null)s.C()
this.id=A.cQ(B.D,new A.xu(this,a))},
jw(){this.as=!0
this.aK(B.aE)
A.iF(this.d,t.H)},
eg(){var s=0,r=A.h(t.H),q,p=this,o
var $async$eg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.cx
o===$&&A.v()
s=3
return A.a(o.wR(),$async$eg)
case 3:s=4
return A.a(p.aK(p.dH()),$async$eg)
case 4:p.c5("cycle")
s=5
return A.a(p.eS(),$async$eg)
case 5:case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
fT(a){return this.op(a)},
op(a){var s=0,r=A.h(t.H),q=this,p
var $async$fT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.C()
q.k1=A.cQ(B.av,new A.xx(q))
s=3
break
case 4:s=5
return A.a(q.aK(B.bj),$async$fT)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fT,r)},
bf(){var s=0,r=A.h(t.H),q=this
var $async$bf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aK(B.bm),$async$bf)
case 2:return A.e(null,r)}})
return A.f($async$bf,r)},
b1(){var s=0,r=A.h(t.H),q,p=this
var $async$b1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aK(p.dH()),$async$b1)
case 3:p.c5("cycle")
s=4
return A.a(p.eS(),$async$b1)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b1,r)},
ma(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.C()}s=t.fD
r=q.k4.W(new A.xr(q,a),s)
q.k4=r.bg(new A.xs(),new A.xt(),s)
return r},
eS(){return this.ma(null)},
c5(a){var s,r=this.p1
r.push(a)
s=r.length
if(s>1000)B.b.iA(r,0,s-1000)},
jG(a){this.ma(a).bg(new A.xp(),new A.xq(this),t.H)},
m8(){return this.jG(null)},
b6(a){return this.pV(a)},
pV(b8){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b6=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aK(n.dH()),$async$b6)
case 5:q=B.O
s=1
break
case 4:b3=t.N
a4=t.S
m=A.u(b3,a4)
l=A.u(b3,a4)
k=!1
j=!1
i=A.j([],t.s)
s=6
return A.a(n.aK(B.dy),$async$b6)
case 6:b3=b8==null
if(b3){a4=n.a.dy
a5=A.n(a4).i("T<1>")
a6=A.Q(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.v()
s=14
return A.a(a5.dk(h),$async$b6)
case 14:g=c0
J.cY(m,h,g.b)
if(g.f&&g.b>0)J.aO(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.C(b4)
if(a5 instanceof A.bM){n.jw()
s=9
break}else if(a5 instanceof A.bp){f=a5
k=!0
j=!0
n.ch=f.a}else throw b4
s=13
break
case 10:s=2
break
case 13:case 8:a6.length===a4||(0,A.r)(a6),++a7
s=7
break
case 9:s=n.as?15:16
break
case 15:s=17
return A.a(n.aK(B.aE),$async$b6)
case 17:q=n.ok=new A.b5(m,B.al,0,0,0,0,!0)
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
return A.a(b3.dC(e),$async$b6)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.W(l,c.a)
if(a5==null)a5=0
J.cY(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.C(b5)
if(b3 instanceof A.bp){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aK(B.dz),$async$b6)
case 25:a=B.a3
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.v()
s=33
return A.a(b3.fv(),$async$b6)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b0("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b6)
case 36:a0=c0
if(J.ee(a0)&&typeof J.W(J.bY(a0),"last_error")=="string"){b3=J.W(J.bY(a0),"last_error")
b3.toString
n.ch=A.F(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.C(b6)
if(b3 instanceof A.bM)n.jw()
else if(b3 instanceof A.bp){a1=b3
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
return A.a(b3.bs(),$async$b6)
case 41:a2=c0
k=k||a2.d
if(a2.d&&n.ch==null)n.ch="file sync failed"
p=2
s=40
break
case 38:p=37
b7=o.pop()
a3=A.C(b7)
k=!0
n.ch=A.p(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.O
s=1
break}if(J.as(i)!==0)n.rQ(i)
a9=k||a.f
b0=new A.aP(A.lu(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dH()
s=42
return A.a(n.aK(a9&&b1===B.bk?B.bl:b1),$async$b6)
case 42:q=n.ok=new A.b5(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b6,r)}}
A.xy.prototype={
$1(a){return this.a.vH()},
$S:38}
A.xo.prototype={
$1(a){return this.a.h3()},
$S:41}
A.xw.prototype={
$1(a){return this.a.h8(this.b)},
$S:41}
A.xv.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.Q(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jt()}if(r||p.length===0)s.m8()
else s.jG(p)},
$S:0}
A.xu.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jG(this.b)},
$S:0}
A.xx.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aK(p.dH()),$async$$0)
case 2:p.c5("cycle")
s=3
return A.a(p.eS(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.xr.prototype={
$1(a){return this.a.b6(this.b)},
$S:134}
A.xs.prototype={
$1(a){return B.O},
$S:135}
A.xt.prototype={
$1(a){return B.O},
$S:136}
A.xp.prototype={
$1(a){},
$S:137}
A.xq.prototype={
$2(a,b){var s=this.a
if(s.ch==null)s.ch=A.p(a)
s.aK(B.bl)},
$S:7}
A.d4.prototype={
l(a){return"MapFailure: "+this.a},
$iG:1}
A.eC.prototype={}
A.Bm.prototype={
$1(a){return typeof a=="string"},
$S:23}
A.Bn.prototype={
$1(a){return typeof a=="string"},
$S:23}
A.v4.prototype={}
A.dL.prototype={}
A.mn.prototype={}
A.Aa.prototype={}
A.A8.prototype={}
A.yq.prototype={}
A.vb.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.va(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:139}
A.v5.prototype={
$1(a){return typeof a=="string"},
$S:23}
A.v6.prototype={
$1(a){return typeof a=="string"},
$S:23}
A.v7.prototype={
$1(a){return typeof a=="string"},
$S:23}
A.v8.prototype={
$1(a){return a instanceof A.w?a:A.bb(a,t.X)},
$S:140}
A.v9.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hJ(s,s.r,A.n(s).c),r=this.b,q=J.L(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:141}
A.vt.prototype={
f4(a){return this.uT(a)},
uT(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.CW.$0()
e=e.r
s=3
return A.a(e.wx("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f4)
case 3:o=c
n=t.ox
m=A.j([],n)
for(l=J.E(o);l.k();)m.push(A.IW(l.gn()))
l=A.aL(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.r)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.kB(e,l),$async$f4)
case 4:h=c
g=A.j([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.r)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.D(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f4,r)},
n7(a){return this.a.a2(new A.vv(a),t.H)},
w2(a,b,c,d){return this.a.a2(new A.vw(c,d,b,a),t.H)}}
A.vv.prototype={
$1(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vw.prototype={
$1(a){return this.nR(a)},
nR(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.pP.prototype={}
A.iU.prototype={}
A.jm.prototype={}
A.vy.prototype={
fO(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cL(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
en(a,b,c){return this.wG(a,b,c)},
wG(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$en=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aL("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$en)
case 3:p=e
o=J.L(p)
q=o.gF(p)?null:A.mF(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$en,r)},
bU(a,b,c){return this.wI(a,b,c)},
wI(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bU=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aL("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bU)
case 3:p=e
o=J.L(p)
q=o.gF(p)?null:A.jA(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)},
bo(a,b,c,d,e,f,g,h,i,j,k,l){return this.tP(a,b,c,d,e,f,g,h,i,j,k,l)},
tP(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bo=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a5)throw A.b(A.DY("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ao
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.L
break A}if(B.E===a5){l=a6==null?B.v:B.a2
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.L
break B}if(B.E===a5){l=B.a2
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.E===a5){l=B.a2
break C}l=B.L
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.L
break D}if(B.E===a5){l=B.a2
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.T("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bo)
case 5:s=6
return A.a(a8.T("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bo)
case 6:s=7
return A.a(p.hv(a8,a2,a9),$async$bo)
case 7:s=8
return A.a(a8.T(a2,"id = ?",[a9]),$async$bo)
case 8:q=B.cW
s=1
break
case 4:k=p.a.CW.$0()
j=a4?null:b2.w
if(j==null)j=p.fO()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
if(i!=null&&g==null)throw A.b(A.dd("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
l=t.N
f=A.aL(l)
e=a4?null:b2.r
if(e!=null)f.E(0,e)
f.E(0,a7)
d=A.Q(f,f.$ti.c)
B.b.aG(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a6(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.i9(B.Z)
e=B.b.B(A.ab(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aF("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.GB(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bo)
case 12:s=10
break
case 11:s=13
return A.a(a8.aF('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bo)
case 13:case 10:f=A.j(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.E(f,B.cJ)
if(o)B.b.E(f,B.cx)
s=a3?14:16
break
case 14:a3=A.i9(B.Y)
l=B.b.B(A.ab(16,"?",!1,l),", ")
s=17
return A.a(a8.aF("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.GN(B.a6,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bo)
case 17:s=15
break
case 16:for(a3=f.length,a0=0,l="UPDATE lp_sync_row SET ";a0<a3;++a0){if(a0>0)l+=", "
l+='"'+f[a0]+'" = ?'}a3=l+' WHERE "store" = ? AND "record_id" = ?'
a1=["dirty",b,a+1,j,a1.b]
if(a4)B.b.E(a1,[i,h,g])
if(o)B.b.E(a1,[0,0,null])
a1.push(a2)
a1.push(a9)
s=18
return A.a(a8.aF(a3.charCodeAt(0)==0?a3:a3,a1),$async$bo)
case 18:case 15:q=new A.iU(!1)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bo,r)},
hv(a,b,c){return this.tn(a,b,c)},
tn(a,b,c){var s=0,r=A.h(t.H)
var $async$hv=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cA(a,b,c,!1),$async$hv)
case 2:return A.e(null,r)}})
return A.f($async$hv,r)},
f5(a,b){return this.uU(a,b)},
uU(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a3("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.Q([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ai("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f5)
case 3:o=d
f=J.L(o)
if(f.gF(o)){q=B.cN
s=1
break}e=t.my
n=A.j([],e)
for(f=f.gu(o);f.k();)n.push(A.mF(f.gn()))
f=A.aL(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.kB(g,f),$async$f5)
case 4:j=d
i=A.j([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.r)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.D(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f5,r)},
kS(a){if(a.length===0)return A.bb(null,t.H)
return this.a.a2(new A.vE(this,a),t.H)},
aJ(a,b){return this.t2(a,b)},
t2(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aJ=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.au(a0).a
a4=a2.CW.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aL("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 5:o=a9
n=J.L(o)
s=!(n.gY(o)&&!J.x(J.W(n.gH(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aL(a,1,"id = ?",[a1]),$async$aJ)
case 8:m=a9
n=J.L(m)
l=n.gY(m)?A.cd(a3,n.gH(m),a2.ay,a2.ch):null
s=9
return A.a(b.L(a,A.dr(a3,J.x(a5.h(0,"archived"),!0),a2.ay,a2.ch,a1,a5),"id = ?",[a1]),$async$aJ)
case 9:a6.a_(new A.a2(a0,A.at([a1],t.N)))
k=A.bI(l==null?B.j:l,a5)
k.G(0,"id")
a6.bd(new A.aU(a0,a1,B.ad,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aL(a,1,"id = ?",[a1]),$async$aJ)
case 10:j=a9
a5=J.L(j)
s=a5.gF(j)?11:12
break
case 11:s=13
return A.a(b.T("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 13:s=14
return A.a(p.d4(b,a0,a1,a7.c,a4),$async$aJ)
case 14:a6.a_(new A.a2(a0,A.at([a1],t.N)))
s=1
break
case 12:n=a2.ay
a2=a2.ch
i=A.cd(a3,a5.gH(j),n,a2)
h=A.ar(B.l.v(B.e.v(A.ai(A.bh(a3,i)))).a)
a5=a7.b
g=A.ar(B.l.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.T("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 18:s=19
return A.a(p.d4(b,a0,a1,a7.c,a4),$async$aJ)
case 19:a6.a_(new A.a2(a0,A.at([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aE(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bm(d,a5,f):A.u(a5,f)
s=23
return A.a(b.L(a,A.dr(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aJ)
case 23:s=24
return A.a(b.T("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 24:s=25
return A.a(p.d4(b,a0,a1,a7.c,a4),$async$aJ)
case 25:a6.a_(new A.a2(a0,A.at([a1],a5)))
k=A.bI(i,c)
k.G(0,"id")
a6.bd(new A.aU(a0,a1,B.ad,B.A,i,c,k))
s=21
break
case 22:g=A.ar(B.l.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aJ)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aJ)
case 28:a6.a_(new A.a2(a0,A.at([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aJ,r)},
d4(a,b,c,d,e){return this.qH(a,b,c,d,e)},
qH(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d4=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d4)
case 2:s=3
return A.a(a.L(q.a.au(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d4)
case 3:return A.e(null,r)}})
return A.f($async$d4,r)},
wJ(a,b,c,d,e){return this.a.a2(new A.vC(c,e,d,B.G,a,b),t.H)},
n6(a,b,c,d,e,f){return this.a.a2(new A.vB(this,c,f,b,a,d,e),t.H)},
fk(a,b,c,d,e){return this.n6(a,b,c,d,B.ao,e)},
n5(a,b,c){return this.a.a2(new A.vA(a,c,b),t.H)},
wR(){return this.a.a2(new A.vD(null),t.S)},
eY(a,b,c,d,e,f,g){return this.tM(a,b,c,d,e,f,g)},
tM(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$eY=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$eY)
case 2:p=A.u(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$eY)
case 3:return A.e(null,r)}})
return A.f($async$eY,r)}}
A.vE.prototype={
$1(a){return this.nW(a)},
nW(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=q.a
n=o.a.y
m=n.at
l=q.b
k=l.length
n.at=m+k
p=0
case 2:if(!(p<l.length)){s=4
break}s=5
return A.a(o.aJ(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.r)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vC.prototype={
$1(a){return this.nU(a)},
nU(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vB.prototype={
$1(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aC(0,"lp_dead_letter",A.m(["at",q.a.a.CW.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vA.prototype={
$1(a){return this.nS(a)},
nS(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vD.prototype={
$1(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.j(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:142}
A.ef.prototype={
a4(){return"ApplyResult."+this.b}}
A.mQ.prototype={}
A.wf.prototype={
dk(a){return this.wq(a)},
wq(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dk=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iv(b4),$async$dk)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.Hn().e9(n)
if(m==null)A.t(A.aR('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aI(k)
k=l[2]
k.toString
i=A.aI(k)
k=l[3]
k.toString
h=A.aI(k)
k=l[4]
k.toString
g=A.aI(k)
k=l[5]
k.toString
f=A.aI(k)
k=l[6]
k.toString
e=A.aI(k)
l=l[7]
l.toString
d=A.aI(l)
if(i<1||i>12||g>23||f>59||e>59)A.t(A.aR('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.Cb(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.w6(k))A.t(A.aR('Bad timestamp "'+n+'"'))
o=A.MK(A.Cb(j,i,h,g,f,e,d).iZ(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iB(B.c.bO(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.z
a4===$&&A.v()
s=6
return A.a(a4.fj(b4,null,a2,o,null,b),$async$dk)
case 6:a5=b6
a4=J.L(a5)
if(a4.gF(a5)){s=5
break}++a.ax
a6=p.qJ(a5)
a7=k.h(0,b4)
if(a7==null)A.t(A.A(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.Ds(a7.a,a5),$async$dk)
case 8:s=7
return A.a(b0.aW(new b1.wn(b2,p,b3,b6,a6),l),$async$dk)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mQ(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
mn(a,b){var s=B.a.a0(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a0(a.a,b.b)<=0},
tg(a,b){var s=B.a.a0(a.c,b.c)
if(s!==0)return s>0
return B.a.a0(a.a,b.a)>0},
qJ(a){var s,r,q,p=J.aH(a),o=p.gH(a)
for(p=p.bl(a,1),s=p.$ti,p=new A.ao(p,p.gm(0),s.i("ao<a_.E>")),s=s.i("a_.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.tg(q,o))o=q}return o},
hW(a){return this.v7(a)},
v7(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aW(new A.wh(o,p,a),t.P),$async$hW)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
de(a,b){return this.va(a,b)},
va(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$de=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bF(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dy,e=n.b,d=A.a0(j),c=d.c,d=d.i("ct<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.ct(j,0,200,d)
a2.iU(j,0,200,c)
a3=a2.cR(0)
a4=a3.length
b&1&&A.H(j,18)
A.be(0,a4,j.length)
j.splice(0,a4)
m=A.j([],a)
a5=A.j([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.z
a7===$&&A.v()
s=12
return A.a(a7.bZ(l),$async$de)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.C(b1)
if(a7 instanceof A.cl){J.aO(m,l)
s=6
break}else if(a7 instanceof A.bM)throw b1
else if(a7 instanceof A.bp){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aO(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.r)(a3),++a6
s=5
break
case 7:s=J.as(m)!==0?13:14
break
case 13:s=15
return A.a(n.fm(b2,m),$async$de)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.t(A.A(a1))
b0=a9.a
a2=A.j([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.r)(a5),++a6)a2.push(A.Dt(b0,a5[a6]))
s=16
return A.a(i.aW(new A.wj(n,a2,b2,b0),h),$async$de)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$de,r)},
dQ(a,b,c,d){return this.rb(a,b,c,d)},
rb(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dQ=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.u(c,t.nw)
a=A.u(c,t.G)
o=p.a,n=o.ay,m=o.ch,o=o.dy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.U(a4,k,B.c.bO(i,0,j))
g=B.b.B(A.ab(h.length,"?",!1,c),", ")
j=[a2]
B.b.E(j,h)
a0=J
s=6
return A.a(a1.ai(u.m+g+")",j),$async$dQ)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.F(e),A.jA(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.t(A.A(l))
a0=J
s=9
return A.a(a1.cl(d.a.a,"id IN ("+g+")",h),$async$dQ)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.F(e),A.cd(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a5(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dQ,r)},
mw(a,b,c,d,e){return this.a5(a,b,A.Dt(this.a.au(b).a,c),null,!1,d,e)},
tR(a,b,c){return this.mw(a,b,c,null,!1)},
a5(a,b,c,d,e,f,g){return this.tQ(a,b,c,d,e,f,g)},
mv(a,b,c){return this.a5(a,b,c,null,!1,null,!1)},
tQ(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a5=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.au(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bu(a4,a7,b2,a8,a9),$async$a5)
case 5:q=B.a8
s=1
break
case 4:a9=b3.b
a9.toString
j=A.bh(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bu(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a5)
case 8:q=B.a8
s=1
break
case 7:g=a8.a
f=$.pv()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bu(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a5)
case 11:q=B.a8
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.cx
g===$&&A.v()
s=15
return A.a(g.bU(a4,b2,a8.a),$async$a5)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aL(a6.a,1,"id = ?",[a8.a]),$async$a5)
case 19:c=b9
g=J.L(c)
d=g.gF(c)?null:A.cd(a7,g.gH(c),a5.ay,a5.ch)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dj(a4,a8.a,a8.e,b2),$async$a5)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.HC(a4,a6.a,A.dr(a7,J.x(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9)),$async$a5)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.d8(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 26:b1.a_(new A.a2(b2,A.at([a8.a],t.N)))
b=A.bI(B.j,a9)
b.G(0,"id")
b1.bd(new A.aU(b2,a8.a,B.au,B.ac,null,a9,b))
q=B.a7
s=1
break
case 24:g=m
a=g==null?null:g.w
if(a==null)a=B.z
s=a===B.z?27:28
break
case 27:i=m
i=i==null?null:i.c
s=i===a8.c?29:30
break
case 29:s=31
return A.a(n.c7(b1,b2,a8.a,a8.c,!1),$async$a5)
case 31:q=B.a9
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dr(a7,J.x(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9),"id = ?",[a8.a]),$async$a5)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.d8(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 33:b1.a_(new A.a2(b2,A.at([a8.a],t.N)))
b=A.bI(d,a9)
b.G(0,"id")
b1.bd(new A.aU(b2,a8.a,B.au,B.A,d,a9,b))
q=B.a7
s=1
break
case 28:s=a===B.G||a===B.bn||a===B.a5?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.c7(b1,b2,a8.a,a8.c,!1),$async$a5)
case 38:q=B.a9
s=1
break
case 37:s=a===B.a5?39:40
break
case 39:s=41
return A.a(n.c7(b1,b2,a8.a,a8.c,!1),$async$a5)
case 41:q=B.a9
s=1
break
case 40:a0=A.bh(a7,d)
s=A.ai(a0)===i?42:43
break
case 42:s=44
return A.a(a4.T("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a5)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.d8(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a5)
case 45:b1.a_(new A.a2(b2,A.at([a8.a],t.N)))
q=B.a7
s=1
break
case 43:l=null
p=47
a9=m
l=A.i8(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.C(b0)
s=a5 instanceof A.d4?50:52
break
case 50:k=a5
s=53
return A.a(n.bu(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a5)
case 53:q=B.a8
s=1
break
s=51
break
case 52:throw b0
case 51:s=49
break
case 46:s=2
break
case 49:a7.toString
a7.toString
a7.toString
a9=A.Gz(l,a0,new A.mn(null,B.a_,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bx(a9,t.r),$async$a5)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eP(a4,b2,a8,a7,m,a0,l,a2),$async$a5)
case 57:s=58
return A.a(n.c7(b1,b2,a8.a,a8.c,!1),$async$a5)
case 58:a5=t.N
b1.a_(new A.a2(b2,A.at([a8.a],a5)))
b1.a_(new A.a2("lp_conflicts",A.at([a8.a],a5)))
q=B.bx
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dr(a7,J.x(a3.h(0,"archived"),!0),a5.ay,a5.ch,a9,a3),"id = ?",[a8.a]),$async$a5)
case 59:a5=a5.cx
a5===$&&A.v()
s=60
return A.a(a5.eY(a4,b2,a8.a,h,i,a8.c,A.ai(a3)),$async$a5)
case 60:s=61
return A.a(n.td(b1,b2,a8.a,a8.c),$async$a5)
case 61:b1.a_(new A.a2(b2,A.at([a8.a],t.N)))
b=A.bI(d,a3)
b.G(0,"id")
b1.bd(new A.aU(b2,a8.a,B.ad,B.A,d,a3,b))
q=B.a7
s=1
break
case 35:q=B.a9
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a5,r)},
eP(a,b,c,d,e,f,g,h){return this.rC(a,b,c,d,e,f,g,h)},
rC(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eP=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bh(d,A.fh(d,c))
k=A.bI(g,f)
j=A.Q(k,A.n(k).c)
B.b.aG(j)
k=A.bI(g,l)
p=A.Q(k,A.n(k).c)
B.b.aG(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ai(g)
n=t.N
m=t.X
s=2
return A.a(a.ce(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ai(f),"remote_json",A.ai(l),"dirty_local",B.h.a6(j,null),"dirty_remote",B.h.a6(p,null),"detected_at",q.c.ay.$0()],n,m),B.R),$async$eP)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(l),"base_hash",A.ar(B.l.v(B.e.v(A.ai(A.bh(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eP)
case 3:return A.e(null,r)}})
return A.f($async$eP,r)},
bu(a,b,c,d,e){return this.rt(a,b,c,d,e)},
rt(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bu=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a6(d.d,null)}catch(a1){o=t.N
e=B.h.a6(A.m(["raw",d.d.l(0)],o,o),null)}o=d.a
s=2
return A.a(a.T("lp_dead_letter","store = ? AND record_id = ?",[c,o]),$async$bu)
case 2:n=q.c
m=n.ay
l=t.N
k=t.X
s=3
return A.a(a.aC(0,"lp_dead_letter",A.m(["at",m.$0(),"kind","map_failure","store",c,"record_id",o,"error",a0,"payload_json",e],l,k)),$async$bu)
case 3:j=q.a.cx
j===$&&A.v()
s=4
return A.a(j.bU(a,c,o),$async$bu)
case 4:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=g>=8?253402300799e3:m.$0()+B.c.M(n.mL(g).a,1000)
n=d.c
s=j?5:7
break
case 5:s=8
return A.a(a.aC(0,"lp_sync_row",A.m(["store",c,"record_id",o,"remote_updated",n,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bu)
case 8:s=6
break
case 7:s=9
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",n,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,o]),$async$bu)
case 9:case 6:return A.e(null,r)}})
return A.f($async$bu,r)},
d8(a,b,c,d,e,f,g,h){return this.tm(a,b,c,d,e,f,g,!0)},
tm(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$d8=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.au(b)
o=A.u(t.N,t.X)
o.j(0,"store",b)
o.j(0,"record_id",c)
o.j(0,"remote_updated",f)
o.j(0,"last_seen_at",d)
o.j(0,"sync_state",g.b)
o.j(0,"access_state","visible")
o.j(0,"schema_ver",p.a.b)
p=g===B.z
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
return A.a(a.aC(0,"lp_sync_row",o),$async$d8)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$d8)
case 6:case 3:return A.e(null,r)}})
return A.f($async$d8,r)},
c7(a,b,c,d,e){return this.te(a,b,c,d,e)},
td(a,b,c,d){return this.c7(a,b,c,d,!0)},
te(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c7=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.u(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c7)
case 2:s=3
return A.a(p.L(q.a.au(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c7)
case 3:if(g>0)a.a_(new A.a2(b,A.at([c],o)))
return A.e(null,r)}})
return A.f($async$c7,r)},
fm(a,b){return this.w3(a,b)},
w3(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bF(b,!0,t.N)
n=A.a0(o),m=n.c,n=n.i("ct<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.ct(o,0,500,n)
i.iU(o,0,500,m)
h=i.cR(0)
g=h.length
l&1&&A.H(o,18)
A.be(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aW(new A.wl(p,a,h),j),$async$fm)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fm,r)}}
A.wn.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.wm(s.a,r,s.c,s.d,s.e),t.P)},
$S:21}
A.wm.prototype={
$1(a){return this.o0(a)},
o0(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.au(a1)
a3=A.j([],t.s)
for(p=q.d,o=J.aH(p),n=o.gu(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dQ(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aL(t.N)
a2=o.gu(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mn(i,c)){s=3
break}p=i.a
s=j.D(0,p)?5:7
break
case 5:s=8
return A.a(a.mv(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a5(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
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
case 4:g=c==null||!a.mn(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.es(b,a1,e,f),$async$$1)
case 10:d.a=new A.jk(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wh.prototype={
$0(){var s=this.b
return s.a.a2(new A.wg(this.a,s,this.c),t.P)},
$S:21}
A.wg.prototype={
$1(a){return this.nY(a)},
nY(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.cx
k===$&&A.v()
o=p.c
n=o.b
s=3
return A.a(k.bU(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.tR(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a0(o.c,k)<=0){s=1
break}s=7
return A.a(l.mw(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.wj.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.wi(r,s.b,s.c,s.d),t.P)},
$S:21}
A.wi.prototype={
$1(a){return this.nZ(a)},
nZ(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.j([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.r)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dQ(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aL(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.D(0,g)?6:8
break
case 6:s=9
return A.a(o.mv(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a5(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.t(0,g)
case 7:case 4:p.length===e||(0,A.r)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wl.prototype={
$0(){var s=this.a
return s.a.a2(new A.wk(s,this.b,this.c),t.P)},
$S:21}
A.wk.prototype={
$1(a){return this.o_(a)},
o_(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.au(g).a
e=h.au(g).a.a
d=q.c
c=t.N
b=B.b.B(A.ab(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.u(c,t.G)
a1=J
s=2
return A.a(i.cl(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.ay,h=h.ch
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.F(m),A.cd(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.m(["access_state","hidden"],c,h)
o=[g]
B.b.E(o,d)
s=5
return A.a(i.L("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.L(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.a_(new A.a2(g,A.uL(d,A.a0(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.r)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dI(null,null,c,h)
p.E(0,j)
p.j(0,"hidden",!0)
a2.bd(new A.aU(g,k,B.au,B.c6,j,p,B.dp))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b4.prototype={}
A.wo.prototype={
fv(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fv=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.cx
f===$&&A.v()
s=3
return A.a(f.f5(25,p.c.ay.$0()),$async$fv)
case 3:o=b
f=J.L(o)
if(f.gF(o)){q=B.a3
s=1
break}if(p.f){q=p.b9(o)
s=1
break}f=f.gu(o),n=B.a3
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dR(f.gn()),$async$fv)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.b4(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fv,r)},
dR(a){return this.rn(a)},
rn(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.cx
l===$&&A.v()
m=m.r
s=3
return A.a(l.en(m,a.a,a.b),$async$dR)
case 3:o=c
if(o==null){q=B.a3
s=1
break}s=4
return A.a(l.bU(m,o.a,o.b),$async$dR)
case 4:n=c
if(n==null){q=B.a3
s=1
break}if(o.e==null){q=p.rl(o,n)
s=1
break}q=p.jy(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dR,r)},
bI(a,b,c,d,e){return this.qy(a,b,c,d,e)},
qx(a,b,c,d){return this.bI(a,b,c,!1,d)},
qv(a,b,c){return this.bI(a,b,c,!1,!1)},
qw(a,b,c,d){return this.bI(a,b,c,d,!1)},
qy(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bI=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bI)
case 7:k=g
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.C(i)
s=k instanceof A.bM?8:10
break
case 8:n.e.$0()
q=B.an
s=1
break
s=9
break
case 10:s=k instanceof A.cj?11:13
break
case 11:k=n.a.cx
k===$&&A.v()
s=14
return A.a(k.n5("forbidden_push",a.b,a.a),$async$bI)
case 14:q=B.d7
s=1
break
s=12
break
case 13:s=k instanceof A.dQ?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.d0(a,"validation_push",m.a),$async$bI)
case 20:q=B.M
s=1
break
case 19:q=n.cv(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cl){q=n.dN(a,b,!e)
s=1
break}else if(k instanceof A.bp){l=k
q=n.cv(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bI,r)},
jx(a,b,c){return this.rm(a,b,c)},
rl(a,b){return this.jx(a,b,!1)},
rm(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jx=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bI(a,b,new A.wq(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jx,r)},
jC(a,b,c){return this.rD(a,b,c)},
rD(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qx(a,b,new A.wv(p,a,p.a.au(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jC,r)},
jy(a,b){return this.ro(a,b)},
ro(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jy=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qv(a,b,new A.wt(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jy,r)},
d5(a,b,c,d){return this.rq(a,b,c,d)},
rp(a,b,c){return this.d5(a,b,c,!1)},
rq(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d5=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.l9(a,c)
j=n.a.au(a.a).a
i=a.d
s=A.ar(B.l.v(B.e.v(A.ai(A.bh(j,A.fh(j,c))))).a)===A.ar(B.l.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eN(a,c),$async$d5)
case 5:q=B.a4
s=1
break
case 4:m=null
l=null
p=7
m=A.i8(b.r)
l=A.i8(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.C(f)
s=i instanceof A.d4?10:12
break
case 10:k=i
s=13
return A.a(n.d0(a,"corrupt_payload",k.a),$async$d5)
case 13:q=B.M
s=1
break
s=11
break
case 12:throw f
case 11:s=9
break
case 6:s=2
break
case 9:s=14
return A.a(n.dO(a,b,c,j,m,l),$async$d5)
case 14:g=a0
if(g==null){q=B.be
s=1
break}q=n.bI(a,b,new A.wr(n,a,A.ai(A.bh(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d5,r)},
b9(a){return this.rk(a)},
rk(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b9=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.j([],t.k1)
c0=t.N
c1=A.u(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.u(c0,c0)
c0=J.E(d0),d=n.a,c=d.y,b=n.b,a=d.dy,a0=d.r
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.cx
a2===$&&A.v()
s=5
return A.a(a2.en(a0,a1.a,a1.b),$async$b9)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bU(a0,m.a,m.b),$async$b9)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.t(A.A('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.z
a5===$&&A.v()
s=11
return A.a(a5.bZ(a1),$async$b9)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.C(c8)
s=a1 instanceof A.cl?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lH(m,l),$async$b9)
case 17:j=d2
c2+=j.a
c3+=j.b
c4+=j.c
c5+=j.d
c6+=j.e
s=3
break
case 16:k=null
s=13
break
case 14:s=a1 instanceof A.bM?18:20
break
case 18:n.e.$0()
q=B.an
s=1
break
s=19
break
case 20:s=a1 instanceof A.cj?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.n5("forbidden_push",m.b,a1),$async$b9)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bp?25:27
break
case 25:i=a1
s=28
return A.a(n.cv(m,l,i),$async$b9)
case 28:h=d2
c2+=h.a
c3+=h.b
s=3
break
s=26
break
case 27:throw c8
case 26:case 22:case 19:case 13:s=10
break
case 7:s=2
break
case 10:s=k!=null?29:30
break
case 29:a1=k.a
a5=m.b
if(a1!==a5)A.t(A.ez('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a3("")
A.cf(a7,A.bh(a4,A.fh(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c0()
a5=A.cW(a8)
a5.t(0,a1)
a5.q()
a9=A.ar(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c0()
a1=A.cW(a8)
a1.t(0,a5)
a1.q()
s=a9===A.ar(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eN(m,k),$async$b9)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.i8(l.r)
f=A.i8(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.C(c9)
s=a1 instanceof A.d4?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fk(e.a,a5,"corrupt_payload",m.d,a1),$async$b9)
case 41:++c3
s=3
break
s=39
break
case 40:throw c9
case 39:s=37
break
case 34:s=2
break
case 37:s=42
return A.a(n.dO(m,l,k,a4,g,f),$async$b9)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a3("")
A.cf(a7,A.bh(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.h1(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.h1(m.w,m.a,m.b,m.d,m.e))
s=3
break
case 4:s=b9.length!==0?43:44
break
case 43:b4=b.f
if(b4<=0)b4=25
if(25<b4)b4=25
b5=0
case 45:if(!(b6=b9.length,b5<b6)){s=47
break}b7=b5+b4
s=48
return A.a(n.c6(B.b.U(b9,b5,b7<b6?b7:b6),c1,c7),$async$b9)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.b4(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.b4(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b9,r)},
dO(a,b,c,d,e,f){return this.qK(a,b,c,d,e,f)},
qK(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dO=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.fh(d,c)
n=A.Gz(e,f,new A.mn(null,B.a_,!1),a.b,A.bh(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bx(n,t.r),$async$dO)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hm(a,b,c,m,e,f),$async$dO)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
c6(a,b,c){return this.rX(a,b,c)},
rX(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c6=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.z
a7===$&&A.v()
s=7
return A.a(a7.fu(b9),$async$c6)
case 7:m=c3
a7=t.N
l=A.u(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.r)(b9),++a9){k=b9[a9]
J.cY(l,k.a,k)}j=l
i=A.aL(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aO(i,h.a)){l=A.aR("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.aR("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.j([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.W(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jr(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c0()
b2=A.cW(b1)
b2.t(0,b0)
b2.q()
b2=A.ar(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aO(g,new A.jm(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.cx
a8===$&&A.v()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.fk(b4,b2,b3,e.d,b0),$async$c6)
case 13:++b7
case 11:s=8
break
case 9:l=a7.cx
l===$&&A.v()
s=14
return A.a(l.kS(g),$async$c6)
case 14:l=b6
a7=b7
q=new A.b4(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.C(b8)
s=l instanceof A.dw?15:17
break
case 15:q=n.c1(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cj?18:20
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
return A.a(n.dR(n.lO(a0)),$async$c6)
case 24:a1=c3
b6+=a1.a
b7+=a1.b
d+=a1.c
c+=a1.d
b+=a1.e
a=a||a1.f
case 22:b9.length===l||(0,A.r)(b9),++a9
s=21
break
case 23:q=new A.b4(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.bM?25:27
break
case 25:n.e.$0()
q=B.an
s=1
break
s=26
break
case 27:s=l instanceof A.bp?28:30
break
case 28:a2=l
a3=a2 instanceof A.da?a2:new A.eP("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.cx
b0===$&&A.v()
s=34
return A.a(b0.bU(a8,a4.b,a4.c),$async$c6)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cv(n.lO(a4),a5,a3),$async$c6)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.r)(b9),++a9
s=31
break
case 33:q=new A.b4(b6,b7,0,0,0,!0)
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
return A.f($async$c6,r)},
c1(a,b,c){return this.pe(a,b,c)},
pe(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$c1=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.L(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.cx
h===$&&A.v()
b3=g.b
s=5
return A.a(h.fk("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$c1)
case 5:q=B.M
s=1
break
case 4:a0=B.c.M(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.U(b5,0,a0),b3.b5(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.z
a6===$&&A.v()
s=13
return A.a(a6.fu(j),$async$c1)
case 13:i=b9
h=A.u(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.cY(h,g.a,g)}f=h
e=A.aL(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aO(e,d.a)){a6=A.aR("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.aR("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.W(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jr(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dS(a7,a8,a9,b0==null?b.d:b0),$async$c1)
case 19:++m
s=17
break
case 18:a7=a1.cx
a7===$&&A.v()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.fk(b1,a9,b0,b.d,a8),$async$c1)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.C(b4)
s=a6 instanceof A.dw?21:23
break
case 21:s=24
return A.a(n.c1(j,b6,b7),$async$c1)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bp){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.b4(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c1,r)},
jr(a,b){var s=b==null?a.d:b
return new A.cn(a.b,a.c,B.v,s,a.e,A.ar(B.l.v(B.e.v(a.d)).a),B.u,a.a,0,null)},
lO(a){return this.jr(a,null)},
dS(a,b,c,d){return this.t1(a,b,c,d)},
eN(a,b){return this.dS(a,b,null,null)},
t1(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(a.a).a
n=A.fh(o,b)
m=d==null
l=m?A.ai(A.bh(o,n)):d
p=p.cx
p===$&&A.v()
s=2
return A.a(p.kS(A.j([new A.jm(a,l,b.c,A.ar(B.l.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dS)
case 2:return A.e(null,r)}})
return A.f($async$dS,r)},
l9(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.ez('record id "'+s+'" does not match requested "'+r+'"'))},
cv(a,b,c){return this.rL(a,b,c)},
rL(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cv=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.da?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.cx
o===$&&A.v()
s=5
return A.a(o.n6(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$cv)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.mM(l,k)
m=p.a.cx
m===$&&A.v()
s=6
return A.a(m.wJ(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$cv)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cv,r)},
d0(a,b,c){return this.pO(a,b,c)},
pN(a,b){return this.d0(a,b,null)},
pO(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$d0=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.cx
o===$&&A.v()
p=c==null?b:c
s=2
return A.a(o.fk(p,a.b,b,a.d,a.a),$async$d0)
case 2:return A.e(null,r)}})
return A.f($async$d0,r)},
dN(a,b,c){return this.qq(a,b,c)},
lH(a,b){return this.dN(a,b,!0)},
qq(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dN=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.au(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:m=null
l=null
p=7
m=A.i8(b.r)
l=A.i8(a.d)
p=2
s=9
break
case 7:p=6
h=o.pop()
i=A.C(h)
s=i instanceof A.d4?10:12
break
case 10:k=i
s=13
return A.a(n.d0(a,"corrupt_payload",k.a),$async$dN)
case 13:q=B.M
s=1
break
s=11
break
case 12:throw h
case 11:s=9
break
case 6:s=2
break
case 9:s=14
return A.a(n.h6(a,b,m,l),$async$dN)
case 14:q=B.be
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dN,r)},
h6(a,b,c,d){return this.q2(a,b,c,d)},
q2(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$h6=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bI(c,d)
n=A.Q(o,A.n(o).c)
B.b.aG(n)
p=b.r
if(p==null)p=A.ai(c)
s=2
return A.a(q.a.a2(new A.wp(q,a,p,d,n),t.P),$async$h6)
case 2:return A.e(null,r)}})
return A.f($async$h6,r)},
hm(a,b,c,d,e,f){return this.rB(a,b,c,d,e,f)},
rB(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hm=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.au(a.a).a
m=A.bh(n,A.fh(n,c))
l=A.bI(e,f)
k=A.Q(l,A.n(l).c)
B.b.aG(k)
l=A.bI(e,m)
p=A.Q(l,A.n(l).c)
B.b.aG(p)
s=2
return A.a(o.a2(new A.wu(q,a,b,e,f,m,k,p,n,c),t.P),$async$hm)
case 2:return A.e(null,r)}})
return A.f($async$hm,r)}}
A.wq.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.hP(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eN(k,m),$async$$0)
case 8:q=B.a4
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.C(h) instanceof A.ep){q=n.a.jC(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:20}
A.wv.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bZ(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.pN(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.ar(B.l.v(B.e.v(A.ai(A.bh(l,A.fh(l,o))))).a)===A.ar(B.l.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eN(m,o),$async$$0)
case 9:q=B.a4
s=1
break
case 8:q=n.d5(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.wt.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bZ(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lH(m,p.c)
s=1
break}n.l9(m,o)
if(o.c===m.e){l=p.c
q=n.qw(m,l,new A.ws(n,m,o,l),!0)
s=1
break}q=n.rp(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.ws.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.fI(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eN(k,m),$async$$0)
case 8:q=B.a4
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
$S:20}
A.wr.prototype={
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
return A.a(l.fI(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dS(j,b,p.e.a,m),$async$$0)
case 3:q=B.a4
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:20}
A.wp.prototype={
$1(a){return this.o1(a)},
o1(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.ce(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ai(q.d),"remote_json",A.ai(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a6(q.e,null),"dirty_remote",B.h.a6(B.u,null),"detected_at",q.a.c.ay.$0()],k,j),B.R),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a_(new A.a2(n,A.at([m],k)))
a.a_(new A.a2("lp_conflicts",A.at([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wu.prototype={
$1(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=q.b
j=k.a
k=k.b
p=q.c.r
if(p==null)p=A.ai(q.d)
o=q.f
n=t.N
m=t.X
s=2
return A.a(l.ce(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ai(q.e),"remote_json",A.ai(o),"dirty_local",B.h.a6(q.r,null),"dirty_remote",B.h.a6(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.R),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(o),"base_hash",A.ar(B.l.v(B.e.v(A.ai(A.bh(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a_(new A.a2(j,A.at([k],n)))
a.a_(new A.a2("lp_conflicts",A.at([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.c8.prototype={
a4(){return"SyncEngineState."+this.b}}
A.hl.prototype={}
A.xl.prototype={
glb(){return 36},
dC(a){return this.oM(a)},
oM(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dC=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.j([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dy,g=new A.bE(g,g.r,g.e,A.n(g).i("bE<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.iw(m),$async$dC)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.glb():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.ak(c.a+1,n.glb())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bF(m,a),$async$dC)
case 13:a5.aO(a6,a9)
case 11:++j
s=10
break
case 12:if(A.nL(h)!=null)A.t(A.A(u.L))
b=h.b
b===$&&A.v()
s=14
return A.a(b.aX(new A.xm(c,n,m,a3),B.p,f),$async$dC)
case 14:p=2
s=8
break
case 6:p=5
a4=o.pop()
i=A.C(a4)
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
return A.f($async$dC,r)},
bF(a,b){return this.oL(a,b)},
oL(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bF=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.P("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aL(t.N)
m=B.c.iB(B.c.bO(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.z
g===$&&A.v()
s=5
return A.a(g.fj(a4,B.cR,h,null,o,m),$async$bF)
case 5:f=a7
g=J.L(f)
if(g.gF(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.j([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hl(a4,e),$async$bF)
case 6:c=a7
b=A.j([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aP||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.de(a4,b),$async$bF)
case 9:i+=b.length
case 8:h=g.ga1(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ai("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bF)
case 10:a1=a7
a2=A.j([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.F(a)
if(!n.D(0,a)){if(J.x(d.h(0,"access_state"),"hidden")||J.x(d.h(0,"access_state"),"purged"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fm(a4,a2),$async$bF)
case 13:case 12:s=14
return A.a(k.ai("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bF)
case 14:a3=a7
k=J.L(a3)
s=k.gY(a3)?15:16
break
case 15:l=A.j([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.F(g))}s=17
return A.a(j.de(a4,l),$async$bF)
case 17:case 16:q=new A.hl(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bF,r)},
hl(a,b){return this.rf(a,b)},
rf(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.u(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.U(b,n,B.c.bO(l,0,m))
j=B.b.B(A.ab(k.length,"?",!1,g),", ")
m=[a]
B.b.E(m,k)
e=J
s=6
return A.a(o.ai(u.m+j+")",m),$async$hl)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.F(h),A.jA(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)}}
A.xm.prototype={
$1(a){return this.o4(a)},
o4(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.eu(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bp.prototype={
l(a){return A.dt(this).l(0)+": "+this.a},
$iG:1}
A.eP.prototype={}
A.da.prototype={}
A.hb.prototype={}
A.bM.prototype={}
A.cj.prototype={}
A.cl.prototype={}
A.dQ.prototype={}
A.eG.prototype={}
A.ep.prototype={}
A.np.prototype={}
A.dw.prototype={}
A.hj.prototype={
gm(a){return this.b}}
A.d9.prototype={}
A.h1.prototype={}
A.jl.prototype={}
A.kW.prototype={
a4(){return"BackendHintKind."+this.b}}
A.cC.prototype={}
A.By.prototype={
$2(a,b){return B.a.iq(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:145}
A.nE.prototype={
gnk(){return 1}}
A.xn.prototype={
mM(a,b){var s,r
if(b!=null){s=this.r5(b)
if(A.av(s))return A.d_(0,0,s<0?0:s)
if(s instanceof A.aP){r=s.a-this.ay.$0()
return r<=0?B.D:A.d_(0,r,0)}return B.av}return A.Gt(a,B.av,B.S,this.at)},
mL(a){return this.mM(a,null)},
r5(a){var s=B.a.cm(a),r=A.ji(s,null)
if(r!=null)return r
return A.Jw(s)}}
A.jk.prototype={}
A.jy.prototype={}
A.xA.prototype={
iv(a){return this.wF(a)},
wF(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.el("lp_sync_state",A.j(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iv)
case 3:m=c
l=J.L(m)
if(l.gF(m)){q=null
s=1
break}o=A.a6(J.W(l.gH(m),"cursor_updated"))
n=A.a6(J.W(l.gH(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jk(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
es(a,b,c,d){return this.xv(a,b,c,d)},
xv(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$es=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aL("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$es)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$es)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$es)
case 7:case 3:return A.e(null,r)}})
return A.f($async$es,r)},
iw(a){return this.wH(a)},
wH(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$iw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.el("lp_sync_state",A.j(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iw)
case 3:n=c
m=J.L(n)
if(m.gF(n)){q=B.dv
s=1
break}o=A.bf(J.W(m.gH(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jy(o,A.bf(J.W(m.gH(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
eu(a,b,c,d){return this.xz(a,b,c,d)},
xz(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eu=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aL("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eu)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eu)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eu)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eu,r)},
hL(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b0("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hL)
case 3:l=b
k=J.L(l)
j=k.gF(l)?B.j:k.gH(l)
k=A.bf(j.h(0,"pending"))
if(k==null)k=0
o=A.bf(j.h(0,"conflicts"))
if(o==null)o=0
n=A.bf(j.h(0,"hidden"))
if(n==null)n=0
m=A.bf(j.h(0,"blocked"))
q=new A.oL([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)}}
A.cP.prototype={
a4(){return"SyncState."+this.b}}
A.fm.prototype={
a4(){return"AccessState."+this.b}}
A.fY.prototype={
a4(){return"OutboxKind."+this.b}}
A.je.prototype={
a4(){return"OpQueueKind."+this.b}}
A.BU.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.cO.prototype={}
A.xz.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
i=j.h(0,"record_id")
i.toString
A.F(i)
i=A.a6(j.h(0,"remote_updated"))
s=A.bf(j.h(0,"last_seen_at"))
r=A.a6(j.h(0,"base_updated"))
A.a6(j.h(0,"base_hash"))
q=A.a6(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fC(B.cB,A.F(p))
A.Go(j.h(0,"dirty_fields"))
o=A.bf(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fC(B.cA,A.F(n))
A.a6(j.h(0,"op_id"))
m=A.bf(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.bf(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.bf(j.h(0,"schema_ver"))
return new A.cO(i,s,r,q,p,o,n,m,l,k)},
$S:146}
A.cn.prototype={}
A.vz.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
s=j.h(0,"record_id")
s.toString
A.F(s)
r=j.h(0,"kind")
r.toString
r=A.fC(B.cK,A.F(r))
q=j.h(0,"payload_json")
q.toString
A.F(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Go(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.F(m)
l=j.h(0,"created_at")
l.toString
A.aq(l)
k=j.h(0,"updated_at")
k.toString
A.aq(k)
return new A.cn(i,s,r,q,p,o,n,m,l,A.a6(j.h(0,"depends_on_op")))},
$S:147}
A.eE.prototype={}
A.vu.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.aq(l)
l=m.h(0,"op_id")
l.toString
A.F(l)
s=m.h(0,"store")
s.toString
A.F(s)
r=m.h(0,"record_id")
r.toString
A.F(r)
q=m.h(0,"kind")
q.toString
q=A.fC(B.cF,A.F(q))
p=m.h(0,"payload_json")
p.toString
A.F(p)
o=m.h(0,"state")
o.toString
A.F(o)
o=A.bf(m.h(0,"attempt_count"))
if(o==null)o=0
A.bf(m.h(0,"next_retry_at"))
A.a6(m.h(0,"last_error"))
n=A.a6(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.aq(m)
return new A.eE(l,s,r,q,p,o,n)},
$S:148}
A.BS.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:51}
A.BT.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:51}
A.bG.prototype={
a_(a){this.c.push(a)
this.a.y.r+=a.b.a},
bd(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
bz(a){var s=this.a
return new A.ft(s,s.au(a),new A.iA(this.b),this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.A("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cD(o,a,b)},
cD(a,b,c){return this.tv(a,b,c,c)},
tv(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cD=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cD)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.y
k=e.r
p=5
d=A.CR(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.pr(new A.xK(a3,j,a4),null,A.m([$.kG(),j],f,f),a4.i("y<0>")),$async$cD)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cD)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cD)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cD)
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
if(a>m)B.b.iA(h,m,a)
a=g.length
if(a>l)B.b.iA(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cD,r)}}
A.xK.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.Af.prototype={}
A.ly.prototype={
a4(){return"DurabilityClass."+this.b}}
A.xC.prototype={
aX(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.D,t._)
r.c.push(new A.hA(a,new A.aJ(s,t.jk)))
return s.W(new A.xJ(c),c)}return this.t7(a,b,c)},
t7(a,b,c){var s,r,q,p=this
if(p.a.at.a>0){s=p.c
if(s!=null)s.kd()}s=A.j([],t.i4)
r=new A.oi(p,b,s)
p.c=r
r.wS()
q=new A.w($.D,t._)
s.push(new A.hA(a,new A.aJ(q,t.jk)))
return q.W(new A.xF(c),c)},
wD(a,b){var s,r=this.a
if(r.at.a>0){s=this.c
if(s!=null)s.kd()}return r.e.aW(new A.xI(this,a,b),b)},
qO(){if(++this.d<64)return
this.d=0
A.cQ(B.D,new A.xE(this))}}
A.xJ.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xF.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xI.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.xH(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.xH.prototype={
$1(a){return this.o5(a,this.c)},
o5(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.CR(p.a.a.a,a,A.j([],t.gi),!0,null)
n=p.c
m=t.X
q=A.pr(new A.xG(p.b,o,n),null,A.m([$.kG(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(r9)")}}
A.xG.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.xE.prototype={
$0(){this.a.a.a.iF().jV(new A.xD())},
$S:0}
A.xD.prototype={
$1(a){},
$S:19}
A.oi.prototype={
wS(){var s,r,q=this,p=new A.aJ(new A.w($.D,t.D),t.h)
q.e=p
s=q.a.a
s.e.aW(new A.z3(q,p),t.H)
r=s.at
s=q.gvg()
if(r.a>0)A.cQ(r,s)
else A.cQ(B.D,s)},
kd(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.an()},
cI(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cI=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.f;++b2.b
b2.c+=b1}b3=new A.jv()
$.kE()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aY&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.nr("PRAGMA synchronous=FULL",null),$async$cI)
case 5:b1.b="FULL"
case 4:i=A.j([],t.gi)
h=A.j([],t.eb)
g=A.j([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.z2(m,i,h,l,g),t.P),$async$cI)
case 10:for(b5=g,b6=b5.length,b7=0;b7<b5.length;b5.length===b6||(0,A.r)(b5),++b7){f=b5[b7]
e=null
d=null
c=null
b=null
a=f
e=a.a[0]
d=a.a[1]
c=a.a[2]
b=a.a[3]
if(c!=null){b8=e.b
b9=c
c0=b
if((b8.a.a&30)!==0)A.t(A.A("Future already completed"))
b8.al(A.f9(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.t(A.A("Future already completed"))
b8.aD(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dy,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.vN(a0.b)
b6.k8(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a1=f[b7]
b6.uW(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.C(c2)
a3=A.ad(c2)
for(f=g,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.r)(f),++b7){a4=f[b7]
a5=null
a6=null
a7=null
a8=a4
a5=a8.a[0]
a6=a8.a[2]
a7=a8.a[3]
if((a5.b.a.a&30)!==0)continue
if(a6!=null&&a2===a6){b6=a5.b
b8=a6
b9=a7
if((b6.a.a&30)!==0)A.t(A.A("Future already completed"))
b6.al(A.f9(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.t(A.A("Future already completed"))
b6.al(A.f9(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.nr("PRAGMA synchronous=NORMAL",null),$async$cI)
case 17:b1.b="NORMAL"
p=2
s=16
break
case 14:p=13
c3=o.pop()
s=16
break
case 13:s=2
break
case 16:case 12:f=b2.f
a4=k.guV();++f.a
f.d+=a4
b1.qO()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.r)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.t(A.A("Future already completed"))
a4.al(A.f9(new A.bn("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cI,r)}}
A.z3.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cI(),$async$$0)
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
A.z2.prototype={
$1(a){return this.o6(a)},
o6(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.CR(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.pr(new A.z0(a,a0),null,A.m([$.kG(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.f5([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.C(a1)
l=A.ad(a1)
o.e.push(new A.f5([B.b.gap(a.c),null,m,l]))
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
return A.a(A.pr(new A.z1(a0,k),null,A.m([$.kG(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.f5([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.C(a2)
h=A.ad(a2)
e.push(new A.f5([k,null,i,h]))
s=16
break
case 13:s=1
break
case 16:case 11:a.length===g||(0,A.r)(a),++b
s=10
break
case 12:case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:43}
A.z0.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:52}
A.z1.prototype={
$0(){return this.a.a2(new A.z_(this.b),t.z)},
$S:52}
A.z_.prototype={
$1(a){return this.a.a.$1(a)},
$S:151}
A.hA.prototype={}
A.mU.prototype={
kT(a){return a.a===this.x.b.a},
f9(){var s=this.x
return s.e8(s.w==null&&!s.x?50:null).W(new A.wK(),t.J)},
mF(a){return A.Mn(a,new A.wJ(this),this.x.r.length!==0)},
n9(a){var s=this.y
return s==null?null:s.t(0,a)},
kr(a,b){var s=this.y
return s==null?null:s.by(a,b)},
iR(){var s=this.y=A.xb(this.gk6(),new A.wL(this),null,!1,t.J)
return new A.b7(s,A.n(s).i("b7<1>"))},
f2(){this.kZ()
var s=this.y
if(s!=null)s.q()}}
A.wK.prototype={
$1(a){return a.a},
$S:152}
A.wJ.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:9}
A.wL.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e_(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.mC.prototype={
kT(a){var s
if(a.a!==this.x.a.a)return!1
s=a.b
if(s.a!==0&&!s.D(0,this.y))return!1
return!0},
f9(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$f9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.v()
o=p.x.a
s=3
return A.a(l.gbp().b.aL(o.a,1,"id = ?",[p.y]),$async$f9)
case 3:n=b
l=J.L(n)
if(l.gF(n)){q=null
s=1
break}q=A.cd(o,l.gH(n),m.ay,m.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
mF(a){return a==null?"<null>":A.ar(B.l.v(B.e.v(A.ai(a))).a)},
n9(a){var s=this.z
return s==null?null:s.t(0,a)},
kr(a,b){var s=this.z
return s==null?null:s.by(a,b)},
iR(){var s=this.z=A.xb(this.gk6(),new A.vs(this),null,!1,t.b)
return new A.b7(s,A.n(s).i("b7<1>"))},
f2(){this.kZ()
var s=this.z
if(s!=null)s.q()}}
A.vs.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e_(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fs.prototype={
kr(a,b){},
az(){var s=this.a.a$.a
this.c=new A.b1(s,A.n(s).i("b1<1>")).aT(this.gqQ())},
qR(a){var s,r=this
if(!r.kT(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.C()
r.d=A.cQ(r.b,r.gmq())},
e_(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$e_=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(m.r){s=1
break}m.e=!0
h=m.a.y;++h.y
p=4
s=7
return A.a(m.f9(),$async$e_)
case 7:l=b
if(m.r){n=[1]
s=5
break}k=m.mF(l)
if(!J.x(k,m.w)){m.w=k;++h.z
m.n9(l)}n.push(6)
s=5
break
case 4:p=3
f=o.pop()
j=A.C(f)
i=A.ad(f)
if(!m.r)m.kr(j,i)
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.e=!1
if(!m.r&&m.f){m.f=!1
h=m.d
if(h!=null)h.C()
m.d=A.cQ(m.b,m.gmq())}s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e_,r)},
f2(){var s,r=this
r.r=!0
s=r.d
if(s!=null)s.C()
r.f=!1
s=r.c
if(s!=null)s.C()}}
A.yl.prototype={
aW(a,b){var s,r=this;++r.b
r.lT()
s=new A.w($.D,b.i("w<0>"))
r.a=r.a.W(new A.ym(r,new A.aJ(s,b.i("aJ<0>")),a),t.H)
return s},
lT(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.ym.prototype={
$1(a){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
h=n.b
s=6
return A.a(n.c.$0(),$async$$1)
case 6:h.aB(c)
o.push(5)
s=4
break
case 3:q=2
i=p.pop()
m=A.C(i)
l=A.ad(i)
n.b.bP(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lT()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:41}
A.hv.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.ya.prototype={
$2(a,b){return new A.S(J.Z(a),b,t.eB)},
$S:44}
A.o0.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.y7.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.jj.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iG:1}
A.y5.prototype={
eK(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eK=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.ia()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a1(n.getDirectory(),l),$async$eK)
case 7:m=b
s=8
return A.a(A.a1(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eK)
case 8:q=!0
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
q=!1
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eK,r)},
hg(){var s=0,r=A.h(t.y),q,p=this,o
var $async$hg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.w){q=!1
s=1
break}o=p.r
s=o==null?3:5
break
case 3:s=6
return A.a(p.eK(),$async$hg)
case 6:b=p.r=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
b7(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$b7=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.x
if(h!=null){q=h
s=1
break}s=3
return A.a(n.hg(),$async$b7)
case 3:if(!b){q=null
s=1
break}p=5
m=A.ia()
if(m==null){q=null
s=1
break}j=t.m
s=8
return A.a(A.a1(m.getDirectory(),j),$async$b7)
case 8:l=b
f=A
s=9
return A.a(A.a1(l.getDirectoryHandle("localpocket_blobs",{create:!0}),j),$async$b7)
case 9:k=new f.oG(b)
n.x=k
q=k
s=1
break
p=2
s=7
break
case 5:p=4
g=o.pop()
n.w=!0
q=null
s=1
break
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b7,r)},
gfg(){var s=0,r=A.h(t.y),q,p=this
var $async$gfg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.b7(),$async$gfg)
case 3:q=b!=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gfg,r)},
ck(a,b,c){return this.wt(a,b,c)},
iu(a){return this.ck(a,null,null)},
wt(a,a0,a1){var s=0,r=A.h(t.N),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b
var $async$ck=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:f=new A.yK(A.j([],t.bs))
s=3
return A.a(A.kA(a,a0,a1,null,268435456,new A.y6(f)),$async$ck)
case 3:e=a3
d=f.kC()
s=4
return A.a(m.b7(),$async$ck)
case 4:c=a3
s=c!=null?5:7
break
case 5:l="tmp_"+e.a
p=8
s=11
return A.a(c.av(l,d),$async$ck)
case 11:s=12
return A.a(c.av(e.a,d),$async$ck)
case 12:n.push(10)
s=9
break
case 8:n=[2]
case 9:p=2
p=14
s=17
return A.a(c.G(0,l),$async$ck)
case 17:p=2
s=16
break
case 14:p=13
b=o.pop()
s=16
break
case 13:s=2
break
case 16:s=n.pop()
break
case 10:s=6
break
case 7:j=e.a
i=d
h=m.e
g=i.length
h+=g
if(h>134217728)A.t(A.ik(A.A("volatile blob memory cap exceeded: would reach "+h+" of 134217728 bytes"),j))
m.d.j(0,j,i)
m.e+=g
case 6:q=e.a
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ck,r)},
cM(a){return this.we(a)},
we(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cM=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.l4(a)
j=n.d
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.CK(j,t.L)
s=1
break}s=3
return A.a(n.b7(),$async$cM)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.em(a),$async$cM)
case 10:l=c
j=A.CK(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.C(h)
if(!(k instanceof A.fp))throw A.b(A.ik(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.A("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cM,r)},
dc(a){return this.uk(a)},
uk(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$dc=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.l4(a)
l=o.d.G(0,a)
if(l!=null)o.e=o.e-l.length
s=2
return A.a(o.b7(),$async$dc)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.G(0,a),$async$dc)
case 9:q=1
s=8
break
case 6:q=5
j=p.pop()
m=A.C(j)
if(!(m instanceof A.fp))throw A.b(A.ik(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dc,r)},
bq(a){return this.v4(a)},
v4(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.l4(a)
if(p.d.I(a)){q=!0
s=1
break}s=3
return A.a(p.b7(),$async$bq)
case 3:o=c
if(o!=null){q=o.bq(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bq,r)},
bk(a){return this.oq(a)},
oq(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bk=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.l4(a)
o=p.d
if(o.I(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.b7(),$async$bk)
case 3:n=c
if(n!=null){q=n.bk(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bk,r)},
e4(a){return this.tZ(a)},
tZ(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.b7(),$async$e4)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.ee(),$async$e4)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.HH(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.G(0,l),$async$e4)
case 15:++m
p=5
s=14
break
case 12:p=11
h=o.pop()
s=14
break
case 11:s=5
break
case 14:s=9
break
case 10:p=2
s=7
break
case 5:p=4
g=o.pop()
s=7
break
case 4:s=2
break
case 7:q=m
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e4,r)},
fh(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fh=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.d
i=A.d3(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.b7(),$async$fh)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.ee(),$async$fh)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.Dw()
if(l.b.test(m))J.aO(i,m)
s=11
break
case 12:p=2
s=9
break
case 7:p=6
g=o.pop()
s=9
break
case 6:s=2
break
case 9:case 5:j=i
j=A.Q(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fh,r)}}
A.y6.prototype={
$1(a){return this.a.t(0,a)},
$S:14}
A.oG.prototype={
em(a){return this.wE(a)},
wE(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$em=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a1(n.a.getFileHandle(a,{create:!1}),i),$async$em)
case 7:m=c
s=8
return A.a(A.a1(m.getFile(),i),$async$em)
case 8:l=c
s=9
return A.a(A.a1(l.arrayBuffer(),t.a),$async$em)
case 9:k=c
i=A.bS(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.C(g)
if(A.ES(j))throw A.b(A.DQ(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$em,r)},
av(a,b){return this.xu(a,b)},
xu(a1,a2){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$av=A.c(function(a3,a4){if(a3===1){p.push(a4)
s=q}for(;;)switch(s){case 0:h=o.a
g=t.m
a0=A
s=3
return A.a(A.a1(h.getFileHandle(a1,{create:!0}),g),$async$av)
case 3:s=2
return A.a(a0.a1(a4.createWritable(),g),$async$av)
case 2:f=a4
q=5
j=t.X
s=8
return A.a(A.a1(f.write(t.a.a(B.f.gab(a2))),j),$async$av)
case 8:s=9
return A.a(A.a1(f.close(),j),$async$av)
case 9:q=1
s=7
break
case 5:q=4
e=p.pop()
n=A.C(e)
q=11
s=14
return A.a(A.a1(f.abort(),t.X),$async$av)
case 14:q=4
s=13
break
case 11:q=10
d=p.pop()
s=13
break
case 10:s=4
break
case 13:throw A.b(A.ik(n,a1))
s=7
break
case 4:s=1
break
case 7:q=16
s=19
return A.a(A.a1(h.getFileHandle(a1,{create:!1}),g),$async$av)
case 19:m=a4
s=20
return A.a(A.a1(m.getFile(),g),$async$av)
case 20:l=a4
g=a2.length
s=!J.x(l.size,g)?21:22
break
case 21:q=24
s=27
return A.a(A.lV(h,a1),$async$av)
case 27:q=16
s=26
break
case 24:q=23
c=p.pop()
s=26
break
case 23:s=16
break
case 26:g=A.ik(A.A("write verification failed: persisted "+A.p(A.BC(l,"size"))+" of "+g+" bytes"),a1)
throw A.b(g)
case 22:q=1
s=18
break
case 16:q=15
b=p.pop()
g=A.C(b)
s=g instanceof A.ij?28:30
break
case 28:throw b
s=29
break
case 30:k=g
q=32
s=35
return A.a(A.lV(h,a1),$async$av)
case 35:q=15
s=34
break
case 32:q=31
a=p.pop()
s=34
break
case 31:s=15
break
case 34:throw A.b(A.ik(k,a1))
case 29:s=18
break
case 15:s=1
break
case 18:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$av,r)},
G(a,b){return this.wP(0,b)},
wP(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$G=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.lV(o.a,b),$async$G)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.C(l)
if(A.ES(n))throw A.b(A.DQ(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$G,r)},
bq(a){return this.v5(a)},
v5(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$bq=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a1(n.a.getFileHandle(a,{create:!1}),t.m),$async$bq)
case 7:q=!0
s=1
break
p=2
s=6
break
case 4:p=3
l=o.pop()
q=!1
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bq,r)},
bk(a){return this.or(a)},
or(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bk=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a1(n.a.getFileHandle(a,{create:!1}),k),$async$bk)
case 7:m=c
s=8
return A.a(A.a1(m.getFile(),k),$async$bk)
case 8:l=c
k=l.size
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bk,r)},
ee(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$ee=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.j([],t.s)
j=new A.cy(A.cz(A.E6(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$ee)
case 8:if(!b){s=7
break}l=j.gn()
J.aO(k,l.name)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=9
return A.a(j.C(),$async$ee)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ee,r)},
$iEs:1}
A.uM.prototype={
cJ(a,b){return this.vp(a,b)},
vp(a,b){var s=0,r=A.h(t.X),q,p
var $async$cJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.pp(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cJ,r)},
ip(a,b,c,d){return this.wf(a,b,c,d)},
wf(a7,a8,a9,b0){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$ip=A.c(function(b1,b2){if(b1===1){o.push(b2)
s=p}for(;;)switch(s){case 0:a2=a7.wb(a8,a9)
a3=t.N
a4=new A.iw(A.u(a3,t.fw),a2)
a5=!1
p=4
d=b0==null
n=A.GH(d?null:A.pn(b0),"backupDbName")
if(n!=null&&typeof n!="string"){a3=A.bT('"backupDbName" must be a string.')
throw A.b(a3)}c=A.a6(n)
m=c==null?a8:c
a4.e=new A.uN(m)
a4.f=new A.uO(m)
a2.O("PRAGMA journal_mode=TRUNCATE")
b=a2.og("PRAGMA journal_mode")
l=b.gH(b).b[0]
if(J.Z(l).toLowerCase()!=="truncate"){a3=A.A("journal_mode read-back was "+A.p(l)+", expected truncate")
throw A.b(a3)}k=A.N6(d?null:A.pn(b0))
a=t.bE.a(J.W(k,"stores"))
j=a==null?A.j([],t.aw):a
a0=A.bf(J.W(k,"maxDocBytes"))
i=a0==null?19e5:a0
b=A.Fz(J.W(k,"destructiveBackup"))
h=b!==!1
g=A.N5(A.GH(d?null:A.pn(b0),"fieldCipher"))
if(A.MP(j,g)){a3=A.ah("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a3)}f=new A.y5(A.u(a3,t.p))
s=7
return A.a(A.d1(f,a4,h,g,i,a8,B.aB,j,B.bS),$async$ip)
case 7:e=b2
a5=!0
a3=t.be
q=new A.ml(a2,new A.yf(e,A.aL(a3)),A.u(t.eg,a3))
s=1
break
p=2
s=6
break
case 4:p=3
a6=o.pop()
if(!a5)a2.q()
throw a6
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ip,r)}}
A.uN.prototype={
$1(a){return A.pf(this.a,a)},
$S:153}
A.uO.prototype={
$1(a){return A.ph(this.a,a)},
$S:154}
A.ml.prototype={
cJ(a,b){return this.vq(a,b)},
vq(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.Ct(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.IH(j)
if(o==null){q=A.Ct(0,"protocol_envelope","Payload must be a map",null)
s=1
break}k.a=null
n=p.e
m=n.h(0,a)
if(m!=null)k.a=m
else{l=new A.oj(a)
k.a=l
n.j(0,a,l)
a.b.a.W(new A.uX(k,p,a),t.H)}i=A
s=3
return A.a(p.d.i5(k.a,o),$async$cJ)
case 3:q=i.II(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cJ,r)}}
A.uX.prototype={
$1(a){var s=this.b
s.e.G(0,this.c)
s.d.d.G(0,this.a.a)},
$S:48}
A.oj.prototype={
k8(a){var s=this,r=s.b
if(r>=128)return
s.b=r+1
s.a.hQ(A.pp(a)).bg(new A.z9(s),new A.za(s),t.H)},
$io4:1}
A.z9.prototype={
$1(a){--this.a.b},
$S:155}
A.za.prototype={
$1(a){--this.a.b},
$S:26}
A.BE.prototype={
$1(a){return B.b.c9(a.c,new A.BD())},
$S:156}
A.BD.prototype={
$1(a){return a.e},
$S:53}
A.yc.prototype={
wh(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.bT('Invalid "'+a+'" argument: expected '+A.bJ(b).l(0)+", got "+J.bZ(s).l(0)+"."))
return b.a(s)}}
A.hw.prototype={}
A.jF.prototype={}
A.eU.prototype={}
A.Bt.prototype={
$2(a,b){var s,r,q=J.Z(a)
if(t.f.b(b))this.a.j(0,q,A.fd(b))
else{s=this.a
if(t.j.b(b)){r=J.c_(b,new A.Bs(),t.z)
r=A.Q(r,r.$ti.i("a_.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:40}
A.Bs.prototype={
$1(a){return t.f.b(a)?A.fd(a):a},
$S:32}
A.o3.prototype={
hd(a,b){return this.qm(a,b)},
qm(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hd=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.bT('Contract envelope requires a "request" map.'))
j=A.fd(b)
i=j.h(0,"tag")
if(typeof i!="string")A.t(A.N("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.t(A.N("Missing request payload."))
g=A.kw(h)
j=t.G
if(!j.b(g))A.t(A.N("Malformed request payload."))
f=A.I3(i,g)
if(f==null)A.t(A.N("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.v()
s=7
return A.a(e.vk(m),$async$hd)
case 7:l=a3
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gV(),"payload",A.fe(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.C(a)
j=A.m(["error",A.ME(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hd,r)}}
A.yf.prototype={
i5(a,b){return this.vE(a,b)},
vE(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$i5=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.d.t(0,a)
if(n.e==null){i=n.c.e
i===$&&A.v()
i=i.b
n.e=new A.b1(i,A.n(i).i("b1<1>")).aT(new A.yg(n))}m=null
try{m=A.JF(b)}catch(d){l=A.C(d)
i=J.Z(l)
q=new A.eU("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eU("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.j9(a,m),$async$i5)
case 7:k=a0
i=m.b
q=new A.jF(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.C(e)
i=m.b
g=J.Z(j)
f=A.m(["type",A.Nf(j)],t.N,t.X)
q=new A.eU("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i5,r)},
j9(a,b){return this.pR(a,b)},
pR(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$j9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
if(l===$){o=A.m(["open",p.gqr(),"contract_request",p.gql()],t.N,t.n1)
p.f!==$&&A.C_()
p.f=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.bT("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j9,r)}}
A.yg.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gV(),"payload",A.fe(a.p())],r,q)],r,q)
for(r=this.a.d,r=A.hJ(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).k8(p)}},
$S:159}
A.o2.prototype={
he(a,b){return this.qs(a,b)},
qs(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$he=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.yc(a3).wh("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.u(a3,a3)
n=t.f
if(n.b(a5))a5.a8(0,new A.yd(o))
s=a4!=null?3:4
break
case 3:m=J.E(a4),l=p.c,k=l.dy,j=t.X,i=l.ay==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.t(A.a8("Schema must be a map: "+A.p(h),null,null))
g=A.q7(A.fd(h),j)
if(B.b.c9(g.c,new A.ye())&&i)throw A.b(A.ah('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.CG(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a3("")
A.cf(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c0()
a0=A.cW(a)
a0.t(0,b)
a0.q()
a0=d!==A.ar(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.bT('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.I(e)?7:9
break
case 7:s=10
return A.a(l.aQ(g),$async$he)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.t(A.A('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a3("")
A.cf(c,a1.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c0()
a0=A.cW(a)
a0.t(0,b)
a0.q()
a0=A.ar(a.a.a)
c=new A.a3("")
A.cf(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c0()
a2=A.cW(a)
a2.t(0,b)
a2.q()
if(a0!==A.ar(a.a.a))throw A.b(A.bT('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)}}
A.yd.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:65}
A.ye.prototype={
$1(a){return a.e},
$S:53}
A.p7.prototype={}
A.qK.prototype={
tD(a){var s,r=null
A.Gb("absolute",A.j([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b2(a)>0&&!s.cK(a)
if(s)return a
s=A.Gn()
return this.n3(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
un(a){var s,r,q=A.dP(a,this.a)
q.fB()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.ky(s)
q.e.pop()
q.fB()
return q.l(0)},
n3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.j([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.Gb("join",s)
return this.vR(new A.dY(s,t.v))},
vR(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.cU(s,new A.qL(),a.$ti.i("cU<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cK(m)&&o){l=A.dP(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.eq(k,!0))
l.b=n
if(q.fn(n))l.e[0]=q.gdz()
n=l.l(0)}else if(q.b2(m)>0){o=!q.cK(m)
n=m}else{if(!(m.length!==0&&q.jY(m[0])))if(p)n+=q.gdz()
n+=m}p=q.fn(m)}return n.charCodeAt(0)==0?n:n},
cV(a,b){var s=A.dP(b,this.a),r=s.d,q=A.a0(r).i("am<1>")
r=A.Q(new A.am(r,new A.qM(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aC(r,0,q)
return s.d},
ej(a){var s
if(!this.qN(a))return a
s=A.dP(a,this.a)
s.kq()
return s.l(0)},
qN(a){var s,r,q,p,o,n,m,l=this.a,k=l.b2(a)
if(k!==0){if(l===$.pt())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cf(n)){if(l===$.pt()&&n===47)return!0
if(q!=null&&l.cf(q))return!0
if(q===46)m=o==null||o===46||l.cf(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cf(q))return!0
if(q===46)l=o==null||l.cf(o)||o===46
else l=!1
if(l)return!0
return!1},
wN(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b2(a)
if(l<=0)return o.ej(a)
s=A.Gn()
if(m.b2(s)<=0&&m.b2(a)>0)return o.ej(a)
if(m.b2(a)<=0||m.cK(a))a=o.tD(a)
if(m.b2(a)<=0&&m.b2(s)>0)throw A.b(A.Et(n+a+'" from "'+s+'".'))
r=A.dP(s,m)
r.kq()
q=A.dP(a,m)
q.kq()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.ku(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.ku(l[0],p[0])}else l=!1
if(!l)break
B.b.iz(r.d,0)
B.b.iz(r.e,1)
B.b.iz(q.d,0)
B.b.iz(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Et(n+a+'" from "'+s+'".'))
l=t.N
B.b.kj(q.d,0,A.ab(p,"..",!1,l))
p=q.e
p[0]=""
B.b.kj(p,1,A.ab(r.d.length,m.gdz(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga1(m)==="."){B.b.ky(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fB()
return q.l(0)},
nc(a){var s,r,q=this,p=A.FW(a)
if(p.gb_()==="file"&&q.a===$.kF())return p.l(0)
else if(p.gb_()!=="file"&&p.gb_()!==""&&q.a!==$.kF())return p.l(0)
s=q.ej(q.a.kt(A.FW(p)))
r=q.wN(s)
return q.cV(0,r).length>q.cV(0,s).length?s:r}}
A.qL.prototype={
$1(a){return a!==""},
$S:10}
A.qM.prototype={
$1(a){return a.length!==0},
$S:10}
A.Be.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:160}
A.tB.prototype={
oe(a){var s=this.b2(a)
if(s>0)return B.a.A(a,0,s)
return this.cK(a)?a[0]:null},
ku(a,b){return a===b}}
A.mG.prototype={
gjT(){var s=this,r=t.N,q=new A.mG(s.a,s.b,s.c,A.bF(s.d,!0,r),A.bF(s.e,!0,r))
q.fB()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga1(r)},
fB(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga1(s)===""))break
B.b.ky(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kq(){var s,r,q,p,o,n=this,m=A.j([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.r)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.kj(m,0,A.ab(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.ab(m.length+1,s.gdz(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fn(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.pt())n.b=A.B(r,"/","\\")
n.fB()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga1(q)
return o.charCodeAt(0)==0?o:o}}
A.mH.prototype={
l(a){return"PathException: "+this.a},
$iG:1}
A.xk.prototype={
l(a){return this.gaP()}}
A.w2.prototype={
jY(a){return B.a.D(a,"/")},
cf(a){return a===47},
fn(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
eq(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b2(a){return this.eq(a,!1)},
cK(a){return!1},
kt(a){var s
if(a.gb_()===""||a.gb_()==="file"){s=a.gbr()
return A.D7(s,0,s.length,B.o,!1)}throw A.b(A.P("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaP(){return"posix"},
gdz(){return"/"}}
A.xS.prototype={
jY(a){return B.a.D(a,"/")},
cf(a){return a===47},
fn(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bQ(a,"://")&&this.b2(a)===s},
eq(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cd(a,"/",B.a.ad(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.Gq(a,q+1)
return p==null?q:p}}return 0},
b2(a){return this.eq(a,!1)},
cK(a){return a.length!==0&&a.charCodeAt(0)===47},
kt(a){return a.l(0)},
gaP(){return"url"},
gdz(){return"/"}}
A.yb.prototype={
jY(a){return B.a.D(a,"/")},
cf(a){return a===47||a===92},
fn(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
eq(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cd(a,"\\",2)
if(s>0){s=B.a.cd(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Gw(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b2(a){return this.eq(a,!1)},
cK(a){return this.b2(a)===1},
kt(a){var s,r
if(a.gb_()!==""&&a.gb_()!=="file")throw A.b(A.P("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbr()
if(a.gdg()===""){if(s.length>=3&&B.a.S(s,"/")&&A.Gq(s,1)!=null)s=B.a.kA(s,"/","")}else s="\\\\"+a.gdg()+s
r=A.B(s,"/","\\")
return A.D7(r,0,r.length,B.o,!1)},
u0(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
ku(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.u0(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaP(){return"windows"},
gdz(){return"\\"}}
A.x2.prototype={
gm(a){return this.c.length},
gvS(){return this.b.length},
oR(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.H(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ew(a){var s,r=this
if(a<0)throw A.b(A.b_("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b_("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gH(s))return-1
if(a>=B.b.ga1(s))return s.length-1
if(r.qE(a)){s=r.d
s.toString
return s}return r.d=r.pd(a)-1},
qE(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
pd(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iP(a){var s,r,q=this
if(a<0)throw A.b(A.b_("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b_("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.ew(a)
r=q.b[s]
if(r>a)throw A.b(A.b_("Line "+s+" comes after offset "+a+"."))
return a-r},
fP(a){var s,r,q,p
if(a<0)throw A.b(A.b_("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b_("Line "+a+" must be less than the number of lines in the file, "+this.gvS()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b_("Line "+a+" doesn't have 0 columns."))
return q}}
A.lP.prototype={
ga3(){return this.a.a},
gag(){return this.a.ew(this.b)},
gaq(){return this.a.iP(this.b)},
gar(){return this.b}}
A.hG.prototype={
ga3(){return this.a.a},
gm(a){return this.c-this.b},
gR(){return A.Cg(this.a,this.b)},
gN(){return A.Cg(this.a,this.c)},
gaM(){return A.dU(B.y.U(this.a.c,this.b,this.c),0,null)},
gbe(){var s=this,r=s.a,q=s.c,p=r.ew(q)
if(r.iP(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dU(B.y.U(r.c,r.fP(p),r.fP(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fP(p+1)
return A.dU(B.y.U(r.c,r.fP(r.ew(s.b)),q),0,null)},
a0(a,b){var s
if(!(b instanceof A.hG))return this.oG(0,b)
s=B.c.a0(this.b,b.b)
return s===0?B.c.a0(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hG))return s.oF(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gJ(a){return A.c4(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idc:1}
A.t7.prototype={
vK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.ms(B.b.gH(a1).c)
s=a.e
r=A.ab(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.hB("\u2575")
q.a+="\n"
a.ms(l)}else if(m.b+1!==n.b){a.tC("...")
q.a+="\n"}}for(l=n.d,k=A.a0(l).i("bw<1>"),j=new A.bw(l,k),j=new A.ao(j,j.gm(0),k.i("ao<a_.E>")),k=k.i("a_.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gag()!==f.gN().gag()&&f.gR().gag()===i&&a.qG(B.a.A(h,0,f.gR().gaq()))){e=B.b.bR(r,a0)
if(e<0)A.t(A.P(A.p(r)+" contains no null elements.",a0))
r[e]=g}}a.tB(i)
q.a+=" "
a.tA(n,r)
if(s)q.a+=" "
d=B.b.mY(l,new A.ts())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gag()===i?j.gR().gaq():0
a.ty(h,g,j.gN().gag()===i?j.gN().gaq():h.length,p)}else a.hD(h)
q.a+="\n"
if(k)a.tz(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hB("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
ms(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hB("\u2577")
else{q.hB("\u250c")
q.bm(new A.tf(q),"\x1b[34m")
s=q.r
r=" "+$.ic().nc(a)
s.a+=r}q.r.a+="\n"},
hz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gag()
i=k?null:l.a.gN().gag()
if(s&&l===c){h.bm(new A.tm(h,j,a),r)
n=!0}else if(n)h.bm(new A.tn(h,l),r)
else if(k)if(g.a)h.bm(new A.to(h),g.b)
else o.a+=" "
else h.bm(new A.tp(g,h,c,j,a,l,i),p)}},
tA(a,b){return this.hz(a,b,null)},
ty(a,b,c,d){var s=this
s.hD(B.a.A(a,0,b))
s.bm(new A.tg(s,a,b,c),d)
s.hD(B.a.A(a,c,a.length))},
tz(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gag()===p.gN().gag()){r.jQ()
p=r.r
p.a+=" "
r.hz(a,c,b)
if(c.length!==0)p.a+=" "
r.mt(b,c,r.bm(new A.th(r,a,b),q))}else{s=a.b
if(p.gR().gag()===s){if(B.b.D(c,b))return
A.Nc(c,b)
r.jQ()
p=r.r
p.a+=" "
r.hz(a,c,b)
r.bm(new A.ti(r,a,b),q)
p.a+="\n"}else if(p.gN().gag()===s){p=p.gN().gaq()
if(p===a.a.length){A.GI(c,b)
return}r.jQ()
r.r.a+=" "
r.hz(a,c,b)
r.mt(b,c,r.bm(new A.tj(r,!1,a,b),q))
A.GI(c,b)}}},
mr(a,b,c){var s=c?0:1,r=this.r
s=B.a.bj("\u2500",1+b+this.j6(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tx(a,b){return this.mr(a,b,!0)},
mt(a,b,c){this.r.a+="\n"
return},
hD(a){var s,r,q,p
for(s=new A.ch(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<I.E>")),q=this.r,r=r.i("I.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bj(" ",4)
else{p=A.bv(p)
q.a+=p}}},
hC(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bm(new A.tq(s,this,a),"\x1b[34m")},
hB(a){return this.hC(a,null,null)},
tC(a){return this.hC(null,null,a)},
tB(a){return this.hC(null,a,null)},
jQ(){return this.hC(null,null,null)},
j6(a){var s,r,q,p
for(s=new A.ch(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<I.E>")),r=r.i("I.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qG(a){var s,r,q
for(s=new A.ch(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<I.E>")),r=r.i("I.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
ps(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bm(a,b){return this.ps(a,b,t.z)}}
A.tr.prototype={
$0(){return this.a},
$S:161}
A.t9.prototype={
$1(a){var s=a.d
return new A.am(s,new A.t8(),A.a0(s).i("am<1>")).gm(0)},
$S:244}
A.t8.prototype={
$1(a){var s=a.a
return s.gR().gag()!==s.gN().gag()},
$S:34}
A.ta.prototype={
$1(a){return a.c},
$S:164}
A.tc.prototype={
$1(a){var s=a.a.ga3()
return s==null?new A.k():s},
$S:165}
A.td.prototype={
$2(a,b){return a.a.a0(0,b.a)},
$S:166}
A.te.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.j([],t.dg)
for(s=J.aH(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbe()
n=A.Bx(o,p.gaM(),p.gR().gaq())
n.toString
m=B.a.hE("\n",B.a.A(o,0,n)).gm(0)
l=p.gR().gag()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga1(b).b)b.push(new A.cx(j,l,d,A.j([],q)));++l}}i=A.j([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.r)(b),++k){j=b[k]
h&1&&A.H(i,16)
B.b.rI(i,new A.tb(j),!0)
f=i.length
for(q=s.bl(c,g),p=q.$ti,q=new A.ao(q,q.gm(0),p.i("ao<a_.E>")),n=j.b,p=p.i("a_.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gag()>n)break
i.push(e)}g+=i.length-f
B.b.E(j.d,i)}return b},
$S:167}
A.tb.prototype={
$1(a){return a.a.gN().gag()<this.a.b},
$S:34}
A.ts.prototype={
$1(a){return!0},
$S:34}
A.tf.prototype={
$0(){this.a.r.a+=B.a.bj("\u2500",2)+">"
return null},
$S:0}
A.tm.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.tn.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.to.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.tp.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bm(new A.tk(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bm(new A.tl(r,o),p.b)}}},
$S:2}
A.tk.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.tl.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.tg.prototype={
$0(){var s=this
return s.a.hD(B.a.A(s.b,s.c,s.d))},
$S:0}
A.th.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gaq(),l=n.gN().gaq()
n=this.b.a
s=q.j6(B.a.A(n,0,m))
r=q.j6(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bj(" ",m))+B.a.bj("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:11}
A.ti.prototype={
$0(){return this.a.tx(this.b,this.c.a.gR().gaq())},
$S:0}
A.tj.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bj("\u2500",3)
else r.mr(s.c,Math.max(s.d.a.gN().gaq()-1,0),!1)
return q.a.length-p.length},
$S:11}
A.tq.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wj(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bs.prototype={
l(a){var s=this.a
s="primary "+(""+s.gR().gag()+":"+s.gR().gaq()+"-"+s.gN().gag()+":"+s.gN().gaq())
return s.charCodeAt(0)==0?s:s}}
A.zL.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.Bx(o.gbe(),o.gaM(),o.gR().gaq())!=null)){s=A.nc(o.gR().gar(),0,0,o.ga3())
r=o.gN().gar()
q=o.ga3()
p=A.Mx(o.gaM(),10)
o=A.x3(s,A.nc(r,A.F8(o.gaM()),p,q),o.gaM(),o.gaM())}return A.K3(A.K5(A.K4(o)))},
$S:168}
A.cx.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cr.prototype={
k7(a){var s=this.a
if(!J.x(s,a.ga3()))throw A.b(A.P('Source URLs "'+A.p(s)+'" and "'+A.p(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){var s=this.a
if(!J.x(s,b.ga3()))throw A.b(A.P('Source URLs "'+A.p(s)+'" and "'+A.p(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.ga3())&&this.b===b.gar()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dt(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.p(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaw:1,
ga3(){return this.a},
gar(){return this.b},
gag(){return this.c},
gaq(){return this.d}}
A.nd.prototype={
k7(a){if(!J.x(this.a.a,a.ga3()))throw A.b(A.P('Source URLs "'+A.p(this.ga3())+'" and "'+A.p(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){if(!J.x(this.a.a,b.ga3()))throw A.b(A.P('Source URLs "'+A.p(this.ga3())+'" and "'+A.p(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga3())&&this.b===b.gar()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dt(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.p(p==null?"unknown source":p)+":"+(q.ew(r)+1)+":"+(q.iP(r)+1))+">"},
$iaw:1,
$icr:1}
A.nf.prototype={
oS(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga3(),q.ga3()))throw A.b(A.P('Source URLs "'+A.p(q.ga3())+'" and  "'+A.p(r.ga3())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.P("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.k7(r))throw A.b(A.P('Text "'+s+'" must be '+q.k7(r)+" characters long.",null))}},
gR(){return this.a},
gN(){return this.b},
gaM(){return this.c}}
A.ng.prototype={
gij(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gR().gag()+1)+", column "+(p.gR().gaq()+1)
if(p.ga3()!=null){s=p.ga3()
r=$.ic()
s.toString
s=o+(" of "+r.nc(s))
o=s}o+=": "+this.a
q=p.vL(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iG:1}
A.he.prototype={
gar(){var s=this.b
s=A.Cg(s.a,s.b)
return s.b},
$ibl:1,
gfU(){return this.c}}
A.hf.prototype={
ga3(){return this.gR().ga3()},
gm(a){return this.gN().gar()-this.gR().gar()},
a0(a,b){var s=this.gR().a0(0,b.gR())
return s===0?this.gN().a0(0,b.gN()):s},
vL(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.Io(s,a).vK()},
P(a,b){if(b==null)return!1
return b instanceof A.hf&&this.gR().P(0,b.gR())&&this.gN().P(0,b.gN())},
gJ(a){return A.c4(this.gR(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dt(s).l(0)+": from "+s.gR().l(0)+" to "+s.gN().l(0)+' "'+s.gaM()+'">'},
$iaw:1}
A.dc.prototype={
gbe(){return this.d}}
A.jt.prototype={
a4(){return"SqliteUpdateKind."+this.b}}
A.cs.prototype={
gJ(a){return A.c4(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.cs&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.c6.prototype={
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
p=p!=null?s+(", parameters: "+J.c_(p,new A.x8(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iG:1}
A.x8.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.Z(a)},
$S:169}
A.kN.prototype={}
A.ra.prototype={
tk(){var s=this,r=s.d
return r==null?s.d=new A.e6(s,A.j([],t.fU),new A.rj(s),new A.rk(s),t.jy):r},
rM(){var s=this,r=s.e
return r==null?s.e=new A.e6(s,A.j([],t.lw),new A.rg(s),new A.rh(s),t.lU):r},
pu(){var s=this,r=s.f
return r==null?s.f=new A.e6(s,A.j([],t.lw),new A.rc(s),new A.rd(s),t.ag):r},
u7(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.t(A.az(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b9(m))
r=n.a
q=r.e1(s,1)
s=r.d
p=A.Dh(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.d8(new A.rl(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.BZ(this,p,o,o,o)},
q(){var s,r,q,p=this
if(p.r)return
p.r=!0
s=p.d
if(s!=null)s.q()
s=p.f
if(s!=null)s.q()
s=p.e
if(s!=null)s.q()
s=p.b
r=s.kV()
q=r!==0?A.Dl(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aF(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.t(A.A("This database has already been closed"))
r=p.b
q=r.a
s=q.e1(B.e.v(a),1)
q=q.d
r=A.Dh(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.BZ(p,r,"executing",a,b)}else{s=p.is(a,!0)
try{s.e7(new A.bO(b))}finally{s.q()}}},
O(a){return this.aF(a,B.n)},
ra(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.t(A.A("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cE(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.y4(r,p,n,o)
l=A.j([],t.lE)
k=new A.re(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kX(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.BZ(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null)l.push(new A.hh(f,e,new A.dm(!1).d_(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kX(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null){l.push(new A.hh(f,e,""))
k.$0()
throw A.b(A.az(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.az(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
is(a,b){var s=this.ra(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.az(a,"sql","Must contain an SQL statement."))
return B.b.gH(s)},
wo(a){return this.is(a,!1)},
oh(a,b){var s,r=this.is(a,!0)
try{s=r.kQ(new A.bO(b))
return s}finally{r.q()}},
og(a){return this.oh(a,B.n)}}
A.rj.prototype={
$0(){var s=this.a,r=s.b
r.a.mK(r.b,new A.ri(s))},
$S:0}
A.ri.prototype={
$3(a,b,c){var s=A.Jr(a)
if(s==null)return
this.a.d.k5(new A.cs(s,b,c))},
$S:170}
A.rk.prototype={
$0(){var s=this.a.b
s.a.mK(s.b,null)
return null},
$S:0}
A.rg.prototype={
$0(){var s=this.a,r=s.b
r.a.mJ(r.b,new A.rf(s))
return null},
$S:0}
A.rf.prototype={
$0(){this.a.e.k5(null)},
$S:0}
A.rh.prototype={
$0(){var s=this.a.b
s.a.mJ(s.b,null)
return null},
$S:0}
A.rc.prototype={
$0(){var s=this.a,r=s.b
r.a.mI(r.b,new A.rb(s))
return null},
$S:0}
A.rb.prototype={
$0(){var s=this.a.f
s.k5(null)
return 0},
$S:11}
A.rd.prototype={
$0(){var s=this.a.b
s.a.mI(s.b,null)
return null},
$S:0}
A.rl.prototype={
$2(a,b){A.L4(a,this.a,b)},
$S:171}
A.re.prototype={
$0(){var s,r,q,p,o,n
this.a.q()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
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
A.nW.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.Ja(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.Jc(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.P("The argument list is unmodifiable",null))},
$ix5:1}
A.e6.prototype={
gcW(){var s=this.r
return s==null?this.r=this.qi(!1):s},
qi(a){return new A.dl(new A.Aq(this,!1),this.$ti.i("dl<1>"))},
k5(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.t(o.bG())
if((n&1)!==0)o.gaN().aA(a)}else{n=o.b
if(n>=4)A.t(o.bG())
if((n&1)!==0)o.cz(a)
else if((n&3)===0){n=o.h5()
o=new A.c9(a,o.$ti.i("c9<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sei(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.Aq.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.Ar(q,a,s)
a.r=a.e=new A.As(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dM<1>)")}}
A.Ar.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.k7(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.As.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,new A.k7(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.x4.prototype={
mZ(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Jq(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wb(a,b){var s,r,q,p,o,n,m,l,k,j
this.mZ()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e1(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e1(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d5(r.b.buffer,0,null)[B.c.af(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.k()
k=new A.xY(r,l,o)
r=r.r
if(r!=null)r.mB(k,l,o)
if(m!==0){j=A.Dl(s,k,m,"opening the database",null,null)
k.kV()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.ra(s,k,!1)}}
A.hh.prototype={
gpt(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.j([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.o5(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dm(!1).d_(o,0,null,!0))}return q},
gtc(){return null},
bC(a,b){A.BZ(this.b,a,b,this.d,this.e)},
lx(){if(this.r||this.b.r)throw A.b(A.A(u.f))},
h7(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dq()
if(s!==0?s!==101:q)r.bC(s,"executing statement")},
rV(){var s,r,q,p,o,n,m=this,l=A.j([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rz(o))
l.push(p)}m.dq()
if(p!==0?p!==101:k)m.bC(p,"selecting from statement")
n=m.gpt()
m.gtc()
k=new A.n_(l,n,B.al)
k.pn()
return k},
rz(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.aq(r.Number(s)):A.F3(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.ov(a)
case 4:return s.kW(a)
case 5:default:return null}},
pg(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.t(A.az(a,"parameters","Expected "+A.p(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.ph(a[s-1],s)
this.e=a},
ph(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.av(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aM){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.DP(a).l(0)))
break A}if(A.by(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.ou(b,a)
break A}if(t.L.b(a)){s=q.a.ot(b,a)
break A}s=q.pf(a,b)
break A}if(s!==0)q.bC(s,"binding parameter")},
pf(a,b){throw A.b(A.az(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eA(a){A:{if(a instanceof A.bO){this.pg(a.a)
break A}if(a instanceof A.ln)a.a.$1(this)}},
dq(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dq()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mN(s.d)}},
kQ(a){var s=this
s.lx()
s.dq()
s.eA(a)
return s.rV()},
e7(a){var s=this
s.lx()
s.dq()
s.eA(a)
s.h7()}}
A.m3.prototype={
iK(a,b){return this.d.I(a)?1:0},
kJ(a,b){this.d.G(0,a)},
kK(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r=a.a
if(r==null)r=A.Ea(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cw(new Uint8Array(0),0))
else throw A.b(A.hr(14))
return new A.hN(new A.ow(this,r,(b&8)!==0),0)},
kM(a){}}
A.ow.prototype={
nh(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ah(a,0,s,J.bL(B.f.gab(r.a),0,r.b),b)
return s},
kI(){return this.d>=2?1:0},
iL(){if(this.c)this.a.d.G(0,this.b)},
fK(){return this.a.d.h(0,this.b).b},
kL(a){this.d=a},
kN(a){},
fL(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cw(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kO(a){this.d=a},
ev(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cw(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.aw(0,b,s,a)}}
A.BN.prototype={
$1(a){return a.length!==0},
$S:10}
A.qQ.prototype={
pn(){var s,r,q,p,o=A.u(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
o.j(0,p,B.b.di(s,p))}this.c=o}}
A.n_.prototype={
gu(a){return new A.A9(this)},
h(a,b){return new A.c5(this,A.fO(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iK:1,
$io:1,
$iq:1}
A.c5.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.av(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gK(){return this.a.a},
gaY(){return this.b},
$iJ:1}
A.A9.prototype={
gn(){var s=this.a
return new A.c5(s,A.fO(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.oM.prototype={}
A.oN.prototype={}
A.oP.prototype={}
A.oQ.prototype={}
A.vx.prototype={
a4(){return"OpenMode."+this.b}}
A.el.prototype={}
A.bO.prototype={}
A.ln.prototype={}
A.dh.prototype={
l(a){return"VfsException("+this.a+")"},
$iG:1}
A.js.prototype={}
A.b6.prototype={}
A.l3.prototype={}
A.l2.prototype={
giM(){return 0},
ny(a,b){return 12},
giO(){return 4096},
iN(a,b){var s=this.nh(a,b),r=a.length
if(s<r){B.f.kc(a,s,r,0)
throw A.b(B.dU)}},
$ibq:1,
$ijC:1}
A.eV.prototype={}
A.BY.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.t(A.A("No such element"))
r=s.c
q=r.a
q.toString
q.jM(A.n(r).i("b3.E").a(r))
r.d.$0()}},
$S:0}
A.BW.prototype={
$1(a){var s=this.a,r=s.b
s.hf(s.c,new A.eV(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:18}
A.BX.prototype={
$4(a,b,c,d){this.a.$1(c.eZ(d))},
$S:173}
A.y2.prototype={}
A.xY.prototype={
kV(){var s=this.a,r=s.r
if(r!=null)r.mN(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.y4.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kX(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Dh(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d5(o.b.buffer,0,null)[B.c.af(n,2)]
if(s===0)r=null
else{n=new A.k()
r=new A.y3(s,o,n)
o=o.w
if(o!=null)o.mB(r,s,n)}return new A.oK(r,p)}}
A.y3.prototype={
ot(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cE(b),J.as(b))},
ou(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cE(s),s.length)},
kW(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.ET(s.b,q.sqlite3_column_blob(r,a),p)},
ov(a){var s=this.c
return A.dZ(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dX.prototype={$iCC:1}
A.di.prototype={$iCD:1}
A.ht.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.di(s,A.d5(s.b.buffer,0,null)[B.c.af(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lq.prototype={
w1(a){var s,r,q=this.b
q===$&&A.v()
s="[sqlite3] "+A.dZ(q,a,null)
r=$.LB
if(r==null)A.GE(s)
else r.$1(s)},
w_(a,b){var s,r=new A.aP(A.lu(A.aq(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.v()
s=A.Eq(q.buffer,b,8)
s.$flags&2&&A.H(s)
s[0]=A.CA(r)
s[1]=A.Cy(r)
s[2]=A.Cx(r)
s[3]=A.w6(r)
s[4]=A.Cz(r)-1
s[5]=A.CB(r)-1900
s[6]=B.c.ak(A.J2(r),7)},
xU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.v()
s=new A.js(A.CT(j,b,k))
try{r=a.du(s,d)
if(e!==0){p=r.b
o=A.d5(j.buffer,0,k)
n=B.c.af(e,2)
o.$flags&2&&A.H(o)
o[n]=p}p=A.d5(j.buffer,0,k)
o=B.c.af(c,2)
p.$flags&2&&A.H(p)
p[o]=0
m=r.a
return m}catch(l){p=A.C(l)
if(p instanceof A.dh){q=p
p=q.a
j=A.d5(j.buffer,0,k)
o=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[o]=p}else{j=j.buffer
j=A.d5(j,0,k)
p=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[p]=1}}return k},
xJ(a,b,c){var s=this.b
s===$&&A.v()
return A.bX(new A.qW(a,A.dZ(s,b,null),c))},
xB(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bX(new A.qT(this,a,A.dZ(s,b,null),c,d))},
xQ(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bX(new A.qY(this,a,A.dZ(s,b,null),c,d))},
xW(a,b,c){return A.bX(new A.r_(this,c,b,a))},
y0(a,b){return A.bX(new A.r1(a,b))},
xH(a,b){var s,r=Date.now(),q=this.b
q===$&&A.v()
s=v.G.BigInt(r)
A.Co(A.Ep(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xF(a){return A.bX(new A.qV(a))},
xY(a,b,c,d){return A.bX(new A.r0(this,a,b,c,d))},
ya(a,b,c,d){return A.bX(new A.r5(this,a,b,c,d))},
y6(a,b){return A.bX(new A.r3(a,b))},
y4(a,b){return A.bX(new A.r2(a,b))},
xO(a,b){return A.bX(new A.qX(this,a,b))},
xS(a,b){return A.bX(new A.qZ(a,b))},
y8(a,b){return A.bX(new A.r4(a,b))},
xD(a,b){return A.bX(new A.qU(this,a,b))},
xK(a){return a.giM()},
xM(a,b,c){if(t.j2.b(a))return a.ny(b,c)
return 12},
xZ(a){if(t.j2.b(a))return a.giO()
return 4096},
uB(a){a.$0()},
uw(a){return a.$0()},
uz(a,b,c,d,e){var s=this.b
s===$&&A.v()
a.$3(b,A.dZ(s,d,null),A.aq(v.G.Number(e)))},
uH(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.dX(s,b),new A.ht(s,c,d))},
uL(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.dX(s,b),new A.ht(s,c,d))},
uJ(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.v()
null.$2(new A.dX(s,b),new A.ht(s,c,d))},
uN(a,b){var s
null.toString
s=this.a
s===$&&A.v()
null.$1(new A.dX(s,b))},
uF(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.v()
r.$1(new A.dX(s,b))},
uD(a,b,c,d,e){var s=this.b
s===$&&A.v()
return null.$2(A.CT(s,c,b),A.CT(s,e,d))},
uu(a,b){return a.$1(b)},
us(a,b){return a.gye().$1(b)},
uq(a,b,c){return a.gyd().$2(b,c)}}
A.qW.prototype={
$0(){return this.a.kJ(this.b,this.c)},
$S:0}
A.qT.prototype={
$0(){var s,r=this,q=r.b.iK(r.c,r.d),p=r.a.b
p===$&&A.v()
p=A.d5(p.buffer,0,null)
s=B.c.af(r.e,2)
p.$flags&2&&A.H(p)
p[s]=q},
$S:0}
A.qY.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kK(q.c)),o=p.length
if(o>q.d)throw A.b(A.hr(14))
s=q.a.b
s===$&&A.v()
s=A.bS(s.buffer,0,null)
r=q.e
B.f.cU(s,r,p)
s.$flags&2&&A.H(s)
s[r+o]=0},
$S:0}
A.r_.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.v()
s=A.bS(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.DN(s,q.b)
else return A.DN(s,null)},
$S:0}
A.r1.prototype={
$0(){this.a.kM(A.d_(this.b,0,0))},
$S:0}
A.qV.prototype={
$0(){return this.a.iL()},
$S:0}
A.r0.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.iN(A.bS(r.buffer,s.c,s.d),A.aq(v.G.Number(s.e)))},
$S:0}
A.r5.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.ev(A.bS(r.buffer,s.c,s.d),A.aq(v.G.Number(s.e)))},
$S:0}
A.r3.prototype={
$0(){return this.a.fL(A.aq(v.G.Number(this.b)))},
$S:0}
A.r2.prototype={
$0(){return this.a.kN(this.b)},
$S:0}
A.qX.prototype={
$0(){var s,r=this.b.fK(),q=this.a.b
q===$&&A.v()
q=A.d5(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.qZ.prototype={
$0(){return this.a.kL(this.b)},
$S:0}
A.r4.prototype={
$0(){return this.a.kO(this.b)},
$S:0}
A.qU.prototype={
$0(){var s,r=this.b.kI(),q=this.a.b
q===$&&A.v()
q=A.d5(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.d8.prototype={}
A.ih.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bg(A.Co(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.xb(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.pG(q,this,p,o)
o.d=s
o.f=new A.pH(q,o,s)
return new A.b7(o,A.n(o).i("b7<1>")).aa(a,b,c,d)},
bA(a,b,c){return this.aa(a,null,b,c)}}
A.pG.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a1(q,t.m).bg(new A.pI(p,r.b,s,r),s.gtH(),t.P)},
$S:0}
A.pI.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaN().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:16}
A.pH.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaN().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eZ.prototype={
C(){var s=0,r=A.h(t.H),q=this,p
var $async$C=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.C()
p=q.c
if(p!=null)p.C()
q.c=q.b=null
return A.e(null,r)}})
return A.f($async$C,r)},
gn(){var s=this.a
return s==null?A.t(A.A("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.w($.D,t.g5)
s=new A.ap(o,t.ex)
r=p.d
q=t.m
p.b=A.br(r,"success",new A.zd(p,s),!1,q)
p.c=A.br(r,"error",new A.ze(p,s),!1,q)
return o}}
A.zd.prototype={
$1(a){var s,r=this.a
r.C()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.ze.prototype={
$1(a){var s=this.a
s.C()
s=s.d.error
if(s==null)s=a
this.b.aS(s)},
$S:1}
A.qt.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qu.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qy.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qz.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qA.prototype={
$1(a){this.a.aS(new A.bn("IndexedDB open blocked"))},
$S:1}
A.rO.prototype={
$1(a){return A.bg(a[1])},
$S:195}
A.xZ.prototype={
u8(){var s={}
s.dart=new A.y_(this).$0()
return s},
ih(a){return this.vW(a)},
vW(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ih=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a1(v.G.WebAssembly.instantiateStreaming(a,p.u8()),t.m),$async$ih)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ih,r)}}
A.y_.prototype={
$0(){var s=this.a.a,r=A.bg(v.G.Object),q=A.bg(r.create.apply(r,[null]))
q.error_log=A.cX(s.gw0())
q.localtime=A.bV(s.gvZ())
q.xOpen=A.Da(s.gxT())
q.xDelete=A.pe(s.gxI())
q.xAccess=A.i_(s.gxA())
q.xFullPathname=A.i_(s.gxP())
q.xRandomness=A.pe(s.gxV())
q.xSleep=A.bV(s.gy_())
q.xCurrentTimeInt64=A.bV(s.gxG())
q.xClose=A.cX(s.gxE())
q.xRead=A.i_(s.gxX())
q.xWrite=A.i_(s.gy9())
q.xTruncate=A.bV(s.gy5())
q.xSync=A.bV(s.gy3())
q.xFileSize=A.bV(s.gxN())
q.xLock=A.bV(s.gxR())
q.xUnlock=A.bV(s.gy7())
q.xCheckReservedLock=A.bV(s.gxC())
q.xDeviceCharacteristics=A.cX(s.giM())
q.xFileControl=A.pe(s.gxL())
q.xSectorSize=A.cX(s.giO())
q["dispatch_()v"]=A.cX(s.guA())
q["dispatch_()i"]=A.cX(s.guv())
q.dispatch_update=A.Da(s.guy())
q.dispatch_xFunc=A.i_(s.guG())
q.dispatch_xStep=A.i_(s.guK())
q.dispatch_xInverse=A.i_(s.guI())
q.dispatch_xValue=A.bV(s.guM())
q.dispatch_xFinal=A.bV(s.guE())
q.dispatch_compare=A.Da(s.guC())
q.dispatch_busy=A.bV(s.gut())
q.changeset_apply_filter=A.bV(s.gur())
q.changeset_apply_conflict=A.pe(s.guo())
return q},
$S:36}
A.hs.prototype={}
A.pJ.prototype={
io(){var s=0,r=A.h(t.H),q=this,p,o
var $async$io=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.D,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cX(new A.pM(o))
new A.ap(p,t.h1).aB(A.I_(o,t.m))
s=2
return A.a(p,$async$io)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$io,r)},
dX(a,b){return this.rO(a,b)},
rO(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Ht(),b)
o=A.K6(p)
s=2
return A.a(A.Nd(new A.pL(a,o,p),t.mj),$async$dX)
case 2:s=3
return A.a(o.b.a,$async$dX)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dX,r)},
r8(a){return this.dX(new A.pK(a),"readwrite")}}
A.pM.prototype={
$1(a){var s=A.bg(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:16}
A.pL.prototype={
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
$S:21}
A.pK.prototype={
$1(a){return this.nz(a)},
nz(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aV(a),$async$$1)
case 5:case 3:p.length===o||(0,A.r)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.jY.prototype={
oW(a){var s=A.B6(new A.zO(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.B6(new A.zP(this))},
jz(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.j([a,c],s),A.j([a,b],s))},
ru(a){return this.jz(a,9007199254740992,0)},
rv(a,b){return this.jz(a,9007199254740992,b)},
ig(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$ig=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.u(t.N,t.S)
k=new A.eZ(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$ig)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.t(A.A("Await moveNext() first"))
n=o.key
n.toString
A.F(n)
m=o.primaryKey
m.toString
l.j(0,n,A.aq(A.f8(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ig,r)},
hX(a){return this.vb(a)},
vb(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$hX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cE(p.d.index("fileName").getKey(a),t.W),$async$hX)
case 3:q=o.aq(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
jA(a){return A.cE(this.d.get(a),t.B).W(new A.zN(a),t.m)},
ex(a,b){return this.ow(a,b)},
ow(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ex=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jA(a),$async$ex)
case 3:h=d
g=h.length
f=new A.cw(new Uint8Array(g),g)
e=new A.eZ(p.e.openCursor(p.ru(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$ex)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.t(A.A("Await moveNext() first"))
k=n.a(l.key)
j=A.aq(A.f8(k[1]))
if(j>=h.length){s=5
break}i=new A.zQ(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.wN(A.bg(l.value)).W(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
hO(a){return this.u5(a)},
u5(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.t(A.A("IDB transaction already completed"))
o=A
s=3
return A.a(A.cE(p.d.put({name:a,length:0}),t.W),$async$hO)
case 3:q=o.aq(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
av(a,b){return this.xt(a,b)},
xt(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$av=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.A("IDB transaction already completed"))
s=2
return A.a(q.jA(a),$async$av)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.Q(new A.T(o,n),n.i("o.E"))
B.b.aG(m)
s=3
return A.a(A.Ci(new A.X(m,new A.zR(new A.zS(q,a),b),A.a0(m).i("X<1,y<~>>")),t.H),$async$av)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eZ(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$av)
case 6:s=7
return A.a(A.cE(l.gn().update({name:p.name,length:b.c}),t.X),$async$av)
case 7:case 5:return A.e(null,r)}})
return A.f($async$av,r)},
ds(a,b,c){return this.x5(0,b,c)},
x5(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ds=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.A("IDB transaction already completed"))
s=2
return A.a(q.jA(b),$async$ds)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cE(q.e.delete(q.rv(b,B.c.M(c,4096)*4096)),t.X),$async$ds)
case 5:case 4:o=new A.eZ(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$ds)
case 6:s=7
return A.a(A.cE(o.gn().update({name:p.name,length:c}),t.X),$async$ds)
case 7:return A.e(null,r)}})
return A.f($async$ds,r)},
hS(a){return this.um(a)},
um(a){var s=0,r=A.h(t.H),q=this,p
var $async$hS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.A("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.Ci(A.j([A.cE(q.e.delete(q.jz(a,9007199254740992,0)),p),A.cE(q.d.delete(a),p)],t.iw),t.H),$async$hS)
case 2:return A.e(null,r)}})
return A.f($async$hS,r)}}
A.zO.prototype={
$0(){this.a.b.an()},
$S:2}
A.zP.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aS(r)},
$S:2}
A.zN.prototype={
$1(a){if(a==null)throw A.b(A.az(this.a,"fileId","File not found in database"))
else return a},
$S:198}
A.zQ.prototype={
$1(a){var s=this.a
s.cU(s,this.b,J.bL(a,0,this.c))},
$S:199}
A.zS.prototype={
o8(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cE(p.openCursor(v.G.IDBKeyRange.only(A.j([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gab(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cE(p.put(l,A.j([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cE(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.o8(a,b)},
$S:200}
A.zR.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:201}
A.zp.prototype={
tj(a,b,c){B.f.cU(this.b.nf(a,new A.zq(this,a)),b,c)},
tL(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.ak(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.tj(p*4096,o,J.bL(B.f.gab(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.zq.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cU(s,0,J.bL(B.f.gab(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:202}
A.oF.prototype={}
A.dE.prototype={
eW(a){var s=this
if(s.e||s.d.a==null)A.t(A.hr(10))
if(a.kk(s.x)){s.cB(!0)
return a.d.a}else return A.bb(null,t.H)},
cB(a){return this.t9(a)},
t9(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.Q(o,o.$ti.i("o.E"))
o.am(0)
s=5
return A.a(p.d.r8(n).aZ(new A.tv(p,n,a)),$async$cB)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cB,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eW(new A.jW(new A.tw(),new A.ap(new A.w($.D,t.D),t.F)))
p.e=!0
p.cB(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.ga1(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dJ(a,b){return this.qe(a,b)},
qe(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dJ=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.hX(b),$async$dJ)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dJ,r)},
eO(){var s=0,r=A.h(t.H),q=this,p
var $async$eO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.j([],t.iw)
s=2
return A.a(q.d.dX(new A.tu(q,p),"readonly"),$async$eO)
case 2:s=3
return A.a(A.Il(p,t.H),$async$eO)
case 3:return A.e(null,r)}})
return A.f($async$eO,r)},
cI(){return this.cB(!1)},
iK(a,b){return this.w.d.I(a)?1:0},
kJ(a,b){var s=this
s.w.d.G(0,a)
if(!s.y.G(0,a))s.eW(new A.jQ(s,a,new A.ap(new A.w($.D,t.D),t.F)))},
kK(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.Ea(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.du(new A.js(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.eW(new A.hC(p,o,new A.ap(new A.w($.D,t.D),t.F)))
return new A.hN(new A.ox(p,q.a,o),0)},
kM(a){}}
A.tv.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.t(A.A("Future already completed"))
p.cr(null)}o.cB(this.c)},
$S:2}
A.tw.prototype={
$1(a){return this.nG(a)},
nG(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.tu.prototype={
$1(a){return this.nF(a)},
nF(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ig(),$async$$1)
case 2:m=c
l=q.a
l.z.E(0,m)
p=m.ga7(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.ex(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.ox.prototype={
iN(a,b){this.b.iN(a,b)},
giM(){return 0},
giO(){return 4096},
kI(){return this.b.d>=2?1:0},
iL(){},
fK(){return this.b.fK()},
kL(a){this.b.d=a
return null},
kN(a){},
ny(a,b){return 12},
fL(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.t(A.hr(10))
s.b.fL(a)
if(!r.y.D(0,s.c))r.eW(new A.jW(new A.zM(s,a),new A.ap(new A.w($.D,t.D),t.F)))},
kO(a){this.b.d=a
return null},
ev(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.t(A.hr(10))
s=m.c
if(l.y.D(0,s)){m.b.ev(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cw(new Uint8Array(0),0)
q=J.bL(B.f.gab(r.a),0,r.b)
m.b.ev(a,b)
p=new Uint8Array(a.length)
B.f.cU(p,0,a)
o=A.j([],t.p8)
n=$.D
o.push(new A.oF(b,p))
l.eW(new A.hW(l,s,q,o,new A.ap(new A.w(n,t.D),t.F)))},
$ibq:1,
$ijC:1}
A.zM.prototype={
$1(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dJ(a,o.c),$async$$1)
case 3:q=n.ds(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:24}
A.b8.prototype={
kk(a){a.hf(a.c,this,!1)
return!0}}
A.jW.prototype={
aV(a){return this.w.$1(a)}}
A.jQ.prototype={
kk(a){var s,r,q,p
if(!a.gF(0)){s=a.ga1(0)
for(r=this.x;s!=null;)if(s instanceof A.jQ)if(s.x===r)return!1
else s=s.gfs()
else if(s instanceof A.hW){q=s.gfs()
if(s.x===r){p=s.a
p.toString
p.jM(A.n(s).i("b3.E").a(s))}s=q}else if(s instanceof A.hC){if(s.x===r){r=s.a
r.toString
r.jM(A.n(s).i("b3.E").a(s))
return!1}s=s.gfs()}else break}a.hf(a.c,this,!1)
return!0},
aV(a){return this.wW(a)},
wW(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dJ(a,o),$async$aV)
case 2:n=c
p.z.G(0,o)
s=3
return A.a(a.hS(n),$async$aV)
case 3:return A.e(null,r)}})
return A.f($async$aV,r)}}
A.hC.prototype={
aV(a){return this.wV(a)},
wV(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hO(p),$async$aV)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aV,r)}}
A.hW.prototype={
kk(a){var s,r=a.b===0?null:a.ga1(0)
for(s=this.x;r!=null;)if(r instanceof A.hW)if(r.x===s){B.b.E(r.z,this.z)
return!1}else r=r.gfs()
else if(r instanceof A.hC){if(r.x===s)break
r=r.gfs()}else break
a.hf(a.c,this,!1)
return!0},
aV(a){return this.wX(a)},
wX(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.zp(m,A.u(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.r)(m),++o){n=m[o]
l.tL(n.a,n.b)}k=a
s=3
return A.a(q.w.dJ(a,q.x),$async$aV)
case 3:s=2
return A.a(k.av(c,l),$async$aV)
case 2:return A.e(null,r)}})
return A.f($async$aV,r)}}
A.fI.prototype={
a4(){return"FileType."+this.b}}
A.hd.prototype={
bM(){var s=this.d
if(s!=null)return s
throw A.b(A.A("VFS closed"))},
iK(a,b){var s=$.C1().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bM().bq(s)?1:0},
kJ(a,b){var s=$.C1().h(0,a)
if(s==null){this.e.d.G(0,a)
return null}else this.bM().fl(s,!1)},
kK(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.du(a,b)
s=$.C1().h(0,p)
if(s==null)return q.e.du(a,b)
r=q.bM()
if(!r.bq(s))if((b&4)!==0){r.df(s).truncate(0)
r.fl(s,!0)}else throw A.b(B.dT)
return new A.hN(new A.oV(q,s,(b&8)!==0),0)},
kM(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cN(a,b){return this.wd(a,b)},
cM(a){return this.cN(a,!1)},
wd(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cN=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.x1(a,b)
s=2
return A.a(m.$1("meta"),$async$cN)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cN)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cN)
case 4:o=d
n=q.d=new A.A5(new Uint8Array(2),l,p,o)
if(k){n.fl(B.b1,p.getSize()>0)
n.fl(B.b2,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cN,r)}}
A.x1.prototype={
o3(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a1(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a1(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.o3(a)},
$S:203}
A.oV.prototype={
nh(a,b){return A.E7(this.a.bM().df(this.b),a,{at:b})},
kI(){return this.d>=2?1:0},
iL(){var s=this.a,r=this.b
s.bM().df(r).flush()
if(this.c)s.bM().fl(r,!1)},
fK(){return this.a.bM().df(this.b).getSize()},
kL(a){this.d=a},
kN(a){this.a.bM().df(this.b).flush()},
fL(a){this.a.bM().df(this.b).truncate(a)},
kO(a){this.d=a},
ev(a,b){if(A.E8(this.a.bM().df(this.b),a,{at:b})<a.length)throw A.b(B.dV)}}
A.A5.prototype={
bq(a){var s=this.a
A.E7(this.b,s,{at:0})
return s[a.a]!==0},
fl(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.H(s)
s[a.a]=r
A.E8(this.b,s,{at:0})},
df(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.xT.prototype={
oT(a,b){var s=this,r=s.c
r.a!==$&&A.ce()
r.a=s
r=t.S
A.zr(new A.xU(s),r)
A.zr(new A.xV(s),r)
s.r=A.zr(new A.xW(s),r)
s.w=A.zr(new A.xX(s),r)},
e1(a,b){var s=J.L(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bS(this.b.buffer,0,null)
B.f.aw(q,r,r+s.gm(a),a)
B.f.kc(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cE(a){return this.e1(a,0)},
mK(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mI(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mJ(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.xU.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:9}
A.xV.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:9}
A.xW.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:9}
A.xX.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:9}
A.is.prototype={}
A.w9.prototype={
oQ(a){var s,r=this,q=r.a
q.start()
r.c=A.br(q,"message",new A.wd(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kH()
q.toString
A.jE(q,s,null,null,!1).W(new A.we(r),t.P)}},
jo(a){return this.qp(a)},
qp(a){var s=0,r=A.h(t.H),q=this
var $async$jo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.MC(a,new A.wa(q),q.gvA(),new A.wb(q),new A.wc(q))
return A.e(null,r)}})
return A.f($async$jo,r)},
fS(a,b,c){return this.oo(a,b,c,c)},
oo(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.HQ(null))
o=p.e++
n=new A.w($.D,t.a7)
p.f.j(0,o,new A.ap(n,t.h1))
a.i=o
p.a.postMessage(a,A.i4(a))
s=3
return A.a(n,$async$fS)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Je(m))
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
qI(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.C()
s=q.d
if(s!=null)s.C()
for(s=q.f,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();)r.d.aS(new A.iq(a))
s.am(0)
p.an()},
lQ(){return this.qI(null)}}
A.wd.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lQ()
return}this.a.jo(A.bg(a.data))},
$S:1}
A.we.prototype={
$1(a){this.a.lQ()
a.a.an()},
$S:204}
A.wc.prototype={
$1(a){var s=this.a.f.G(0,a.i)
if(s!=null)s.aB(a)},
$S:16}
A.wb.prototype={
$1(a){return this.nX(a)},
nX(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.ux(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bx(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.C(a0)
k=A.ad(a0)
if(!(l instanceof A.du)){b.console.error("Error in worker: "+J.Z(l))
b.console.error("Original trace: "+A.p(k))}b=l
if(b instanceof A.c6){h=A.Id(b)
g=0}else{g=b instanceof A.du?1:null
h=null}f={e:J.Z(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.G(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.i4(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:205}
A.wa.prototype={
$1(a){var s=this.a.r.G(0,a.i)
if(s!=null)s.abort()},
$S:16}
A.iq.prototype={
l(a){return"Channel to database worker is closed: "+A.p(this.a)},
$iG:1}
A.r8.prototype={
cg(a){return this.vX(a)},
vX(a){var s=0,r=A.h(t.n),q
var $async$cg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.y1(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cg,r)}}
A.lm.prototype={}
A.qR.prototype={}
A.eT.prototype={}
A.lF.prototype={
ii(){var s=0,r=A.h(t.H),q=this
var $async$ii=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cM(q.b),$async$ii)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ii,r)},
kx(){var s=0,r=A.h(t.H),q=this
var $async$kx=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kx,r)}}
A.t5.prototype={
wZ(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
qj(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.y8.prototype={
$1(a){var s=new A.w($.D,t.D),r=new A.d0(new A.ap(s,t.F))
this.a.a=r
this.b.aB(r)
return A.Im(s)},
$S:206}
A.y9.prototype={
$2(a,b){var s,r,q
A.bg(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bP(new A.du("Operation was cancelled"),b)
else q.bP(a,b)}return null},
$S:207}
A.d0.prototype={}
A.lr.prototype={
gtX(){if(this.c.a)return!1
return!this.d||this.f!=null},
dD(a){return this.p_(a)},
p_(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dD=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kH()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jE(n,o.a,null,o.gqt(),!0),$async$dD)
case 6:m=c
s=7
return A.a(A.jE(n,o.b,a,null,!1),$async$dD)
case 7:l=c
j=o.e
j=j==null?null:j.ii()
s=8
return A.a(j instanceof A.w?j:A.bx(j,t.H),$async$dD)
case 8:o.f=new A.a5(m,l)
q=1
s=5
break
case 3:q=2
i=p.pop()
j=m
if(j!=null)j.a.an()
j=l
if(j!=null)j.a.an()
throw i
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dD,r)},
qu(){this.nj()},
kp(a,b,c){return this.c.iG(new A.rn(this,a,b,c),b,c)},
nj(){return this.c.kH(new A.ro(this),t.H)}}
A.rn.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dD(r.c).W(new A.rm(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rm.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.ro.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kx()
s.a.an()
r.a.an()
p.f=null}},
$S:2}
A.j6.prototype={
iG(a,b,c){return this.xs(a,b,c,c)},
kH(a,b){return this.iG(a,null,b)},
xs(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iG=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.vp(h,p)
if(!p.a){h.a=p.a=!0
q=A.iF(a,c).aZ(o)
s=1
break}else{n={}
m=new A.w($.D,c.i("w<0>"))
l=new A.ap(m,c.i("ap<0>"))
n.a=null
h=new A.vo(h,n,l,a,c)
if(!g)n.a=A.br(b,"abort",new A.vn(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.ab(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.ah(j,0,i,h,n)
B.b.ah(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aZ(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iG,r)}}
A.vp.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gF(0)){s=r.b
if(s===r.c)A.t(A.aE());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.vo.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.C()
r.c.aB(A.iF(r.d,r.e))},
$S:0}
A.vn.prototype={
$1(a){var s,r=this
r.a.a.C()
s=r.c
if((s.a.a&30)===0){r.b.b.G(0,r.d)
s.aS(B.ap)}},
$S:1}
A.em.prototype={
gnp(){var s,r,q,p,o,n=this,m=t.s,l=A.j([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q){p=s[q]
B.b.E(l,A.j([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.rE.prototype={
$1(a){if(a!=null)return A.F(a)
return null},
$S:208}
A.mo.prototype={
a4(){return"MessageType."+this.b}}
A.wQ.prototype={
ux(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.i3(a,b)
case"connect":return p.ke(a,b)
case"custom":return p.ea(a,b)
case"fileSystemExists":return p.fd(a,b)
case"fileSystemFlush":return p.fe(a,b)
case"fileSystemAccess":return p.fc(a,b)
case"runQuery":return p.i7(a,b)
case"exclusiveLock":return p.i2(a,b)
case"releaseLock":s=p.bw(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.t(A.A("Lock to be released is not active."))
q.b.an()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.i0(a,b)
case"openAdditionalConnection":return p.i4(a,b)
case"updateRequest":return p.i8(a,b)
case"rollbackRequest":return p.i6(a,b)
case"commitRequest":return p.i1(a,b)
case"dedicatedCompatibilityCheck":return p.dL(a,b)
case"sharedCompatibilityCheck":return p.dL(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dL(a,b)
default:r=A.f9(new A.bB(!1,o,o,"Unsupported request "+A.p(a.t)),o)
q=new A.w($.D,t.hl)
q.cq(r)
return q}}}
A.dA.prototype={
a4(){return"FileSystemImplementation."+this.b}}
A.cv.prototype={
a4(){return"TypeCode."+this.b},
ud(a){var s=null
switch(this.a){case 0:s=A.t(A.P("Unsupported type code",null))
break
case 1:a=A.aq(A.f8(a))
s=a
break
case 2:s=A.F3(t.bJ.a(a).toString(),null)
break
case 3:A.f8(a)
s=a
break
case 4:A.F(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.hY(a)
s=a
break
case 6:break}return s}}
A.en.prototype={
mC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.P("Expected "+A.p(r)+" parameters, got "+A.p(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aF:B.b6[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.aq(A.f8(h))))
if(k!==0)a.bC(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bC(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f8(h))
if(k!==0)a.bC(k,e)
break
case 4:g=B.e.v(A.F(h))
k=s.dart_sqlite3_bind_text(d,i,c.cE(g),g.length)
if(k!==0)a.bC(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cE(h),h.length)
if(k!==0)a.bC(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bC(k,e)
break
case 7:f=A.hY(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bC(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mp()},
h(a,b){var s=this.c[b],r=s>=8?B.aF:B.b6[s]
return r.ud(this.a[b])},
j(a,b,c){this.mp()},
mp(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.Bl.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:16}
A.qr.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qs.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qv.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qw.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qx.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.w5.prototype={
uP(){var s,r,q,p
for(s=this.b,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.am(0)}}
A.iD.prototype={
a4(){return"FileType."+this.b}}
A.dR.prototype={
a4(){return"StorageMode."+this.b}}
A.h6.prototype={
l(a){return"Remote error: "+this.a},
$iG:1}
A.du.prototype={}
A.B5.prototype={
$1(a){return A.bg(a.data)},
$S:210}
A.kb.prototype={
C(){var s=this.a
if(s!=null)s.C()
this.a=null}}
A.hB.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.C()
q.d.C()
q.e.C()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.r)(p),++n)p[n].abort()
B.b.am(p)
p=q.f
if(p!=null)p.b.an()
s=2
return A.a(q.a.f1(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
mh(a){var s=new v.G.AbortController()
a.onabort=A.B6(new A.z4(s))
this.w.push(s)
return s},
kF(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gtX()){r=p.mh(b)
o=s.kp(c,r.signal,d).aZ(new A.z8(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.A("Requested operation on inactive lock state."))}if(o==null)o=A.iF(c,d)
q=p.a.z
return q instanceof A.dE?o.aZ(q.gve()):o},
wa(a){var s=this,r=s.mh(a),q=new A.w($.D,t.hy),p=new A.aJ(q,t.ho),o=t.H
A.Ch(s.a.f.kp(new A.z5(s,p),r.signal,o),new A.z6(p),o,t.K)
return q.aZ(new A.z7(s,r))}}
A.z4.prototype={
$0(){return this.a.abort()},
$S:0}
A.z8.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.z5.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.D,t.D)
s.f=new A.a5(r,new A.aJ(q,t.h))
this.b.aB(r)
return q},
$S:3}
A.z6.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bP(a,b)},
$S:7}
A.z7.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.hz.prototype={
oV(a,b,c){this.b.a.aZ(new A.yP(this))},
dL(a,b){return this.qk(a,b)},
qk(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mE(a),$async$dL)
case 3:q={r:d.gnp(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dL,r)},
ke(a,b){return this.vn(a,b)},
vn(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ke=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glJ()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.i4(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ke,r)},
ea(a,b){return this.vo(a,b)},
vo(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ea=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.ls(l)
n=a.r
s=7
return A.a(o.a.gcj(),$async$ea)
case 7:s=6
return A.a(d.cJ(p,new A.qR(n)),$async$ea)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cJ(p,new A.lm(a)),$async$ea)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ea,r)},
i3(a,b){return this.vC(a,b)},
vC(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kH(new A.yU(p,a),t.m),$async$i3)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)},
i7(a,b){return this.vG(a,b)},
vG(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bw(a)
n=o.a
s=3
return A.a(n.gcj(),$async$i7)
case 3:m=d
q=o.kF(a.z,b,new A.yX(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i7,r)},
i2(a,b){return this.vs(a,b)},
vs(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bw(a).wa(b),$async$i2)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)},
i1(a,b){return this.vm(a,b)},
vm(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bw(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yR(p,o),a),$async$i1)
case 6:q=d
s=1
break
s=4
break
case 5:n.C()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
i6(a,b){return this.vF(a,b)},
vF(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bw(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yW(p,o),a),$async$i6)
case 6:q=d
s=1
break
s=4
break
case 5:n.C()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$i6,r)},
i8(a,b){return this.vI(a,b)},
vI(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bw(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yZ(p,o),a),$async$i8)
case 6:q=d
s=1
break
s=4
break
case 5:n.C()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
i4(a,b){return this.vD(a,b)},
vD(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bw(a).a;++m.w
s=3
return A.a(A.Bo(),$async$i4)
case 3:o=d
n=o.a
p.w.l4(o.b).x.push(A.F4(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i4,r)},
i0(a,b){return this.vl(a,b)},
vl(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$i0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bw(a)
B.b.G(p.x,o)
s=3
return A.a(o.q(),$async$i0)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i0,r)},
fe(a,b){return this.vv(a,b)},
vv(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fe=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bw(a).a.gcS(),$async$fe)
case 3:o=d
s=o instanceof A.dE?4:5
break
case 4:s=6
return A.a(o.cB(!1),$async$fe)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fe,r)},
fc(a,b){return this.vt(a,b)},
vt(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bw(a)
n=B.b7[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcS(),$async$fc)
case 4:s=3
return A.a(l.kF(null,k,new j.yS(d,n,m,a),t.m),$async$fc)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fc,r)},
fd(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bw(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcS(),$async$fd)
case 4:s=3
return A.a(n.kF(null,m,new l.yT(d,a),t.y),$async$fd)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
dB(a,b,c){return this.oy(a,b,c)},
oy(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dB=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dB)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dB,r)},
vB(a){},
hQ(a){var s=0,r=A.h(t.X),q,p=this
var $async$hQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fS({r:a,z:null,i:0,d:null,t:"custom"},B.d_,t.m),$async$hQ)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)},
ls(a){return B.b.mU(this.x,new A.yO(a))},
bw(a){var s=a.d
if(s!=null)return this.ls(s)
else throw A.b(A.P("Request requires database id",null))},
$iDV:1}
A.yP.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.r)(p),++n
s=2
break
case 4:B.b.am(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.yU.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cg(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.vc(h.d,A.Ig(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcS():m.gcj(),$async$$0)
case 8:l=A.F4(m,null)
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
case 9:B.b.G(j.x,l)
s=11
return A.a(m.f1(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:211}
A.yX.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.A("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.en(s,r,A.bS(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.oi(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.aq(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.v2(l,k.s,q)
s=o.d
return A.GA(s.sqlite3_get_autocommit(p)!==0,m,A.aq(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:36}
A.yR.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcj(),$async$$0)
case 3:q=b.a.pu().gcW().aT(new A.yQ(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:68}
A.yQ.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.i4(s))},
$S:69}
A.yW.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcj(),$async$$0)
case 3:q=b.a.rM().gcW().aT(new A.yV(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:68}
A.yV.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.i4(s))},
$S:69}
A.yZ.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcj(),$async$$0)
case 3:q=b.a.tk().gcW().aT(new A.yY(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.yY.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.i4(s))},
$S:215}
A.yS.prototype={
$0(){var s,r,q,p=this,o=p.a.du(new A.js(A.FL(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fL(s.byteLength)
o.ev(A.bS(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fK()
r=new Uint8Array(q)
o.iN(r,0)
q={r:t.a.a(J.HA(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iL()}},
$S:36}
A.yT.prototype={
$0(){return this.a.iK(A.FL(B.b7[this.b.f]),0)===1},
$S:45}
A.yO.prototype={
$1(a){return a.b===this.a},
$S:216}
A.ls.prototype={
gcS(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iF(new A.rr(p),t.H):o,$async$gcS)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcS,r)},
gcj(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcj=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iF(new A.rq(p),t.u):o,$async$gcj)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcj,r)},
f1(){var s=0,r=A.h(t.H),q=this
var $async$f1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$f1)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f1,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:j=q.a.r
j.toString
s=2
return A.a(j,$async$q)
case 2:p=b
o=q.x
s=o!=null?3:4
break
case 3:s=5
return A.a(o,$async$q)
case 5:n=b
j=q.r
if(j!=null)j.uP()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.Dz()
A.Cf(m)
k=l.a.get(m)
if(k==null)A.t(A.A("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bx(j,t.H),$async$q)
case 6:q.f.nj()
return A.e(null,r)}})
return A.f($async$q,r)},
lX(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.G(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a5(s,!0)
p=a.is(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.G(0,new A.T(n,A.n(n).i("T<1>")).gH(0)).q()
n.j(0,p.d,p)
return new A.a5(p,!0)}return new A.a5(p,!1)},
v2(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aF(b,B.n)
else{s=null
r=null
q=this.lX(a,b)
s=q.a
r=q.b
try{s.e7(new A.ln(c.gtV()))}finally{if(r)s.dq()
else s.q()}}},
oi(a,b,c){var s,r=null,q=null,p=this.lX(a,b)
r=p.a
q=p.b
try{s=A.Jf(r,c)
return s}finally{if(q)r.dq()
else r.q()}}}
A.rr.prototype={
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
return A.a(A.x0("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ge5()
s=3
break
case 5:case 6:s=10
return A.a(A.lG("drift_db/"+l.c,k===B.ax,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ge5()
s=3
break
case 7:s=11
return A.a(A.m5(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ge5()
s=3
break
case 8:l.z=A.Ck("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rq.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcS(),$async$$0)
case 4:n=b
o.mZ()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e1(B.e.v(n.a),1),n,0)
if(m===0)A.t(A.A("could not register vfs"))
$.Dz().j(0,n,m)
s=5
return A.a(l.f.kp(new A.rp(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:70}
A.rp.prototype={
$0(){var s=this.a
return s.a.b.ip(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:70}
A.yh.prototype={
glJ(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.os()
r.Q!==$&&A.C_()
r.Q=s
q=s}return q},
eb(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$eb=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cy(A.cz(A.L3(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$eb)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.is(i.port,i.lockName,null)
n.l4(l)
s=9
break
case 10:s=A.MY(m.t)?11:12
break
case 11:s=13
return A.a(n.mE(m),$async$eb)
case 13:k=b
j.postMessage(k.gnp())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.C(),$async$eb)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eb,r)},
l4(a){var s=this,r=A.JY(a,s.d++,s)
s.c.push(r)
r.b.a.aZ(new A.yi(s,r))
return r},
mE(a){return this.x.kH(new A.yj(this,a),t.p6)},
cg(a){return this.vY(a)},
vY(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bg(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.A("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.p(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bx(n,t.he),$async$cg)
case 5:s=3
break
case 4:o=A.Ch(q.b.cg(m),new A.yk(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cg)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cg,r)},
vc(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ax||b===B.b0
o=A.Cs(t.cj)
n=c===0?null:new A.w5(c,A.dI(null,null,t.N,t.fw))
n=new A.ls(this,r,a,b,d,new A.lr(q+"-outer",q,new A.j6(o),p),n)
s.j(0,r,n)
return n}}
A.yi.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.yj.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.ea(),$async$$0)
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
return A.a(A.pl(),$async$$0)
case 9:case 8:j=a1
i=A.aL(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glJ()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.i4(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hF(n,"message",!1,t.d4).gH(0),$async$$0)
case 15:e=b.HX(a.bg(a1.data))
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
return A.a(A.i7(),$async$$0)
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.t(0,new A.a5(B.bh,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.Bk(c),$async$$0)
case 23:if(a1)i.t(0,new A.a5(B.bi,c))
case 22:d=A.Q(i,i.$ti.c)
q=new A.em(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:218}
A.yk.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:219}
A.kn.prototype={}
A.oo.prototype={
gmX(){return new A.hF(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.oT.prototype={
gmX(){return new A.dl(new A.Ak(this),t.k8)},
q(){}}
A.Ak.prototype={
$1(a){var s=A.j([],t.kG),r=A.j([],t.dw)
r.push(A.br(this.a.a,"connect",new A.Ah(new A.Al(s,r,a)),!1,t.m))
a.r=new A.Ai(r)},
$S:220}
A.Al.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.br(a,"message",new A.Aj(this.c),!1,t.m))},
$S:1}
A.Aj.prototype={
$1(a){this.a.tK(a)},
$S:1}
A.Ah.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bN(r,A.a0(r).i("bN<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.Ai.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.r)(s),++q)s[q].C()},
$S:2}
A.op.prototype={
os(){var s=v.G
if(!("Worker" in s))return null
return new A.zk(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.zk.prototype={}
A.nn.prototype={
gfU(){return A.F(this.c)}}
A.xj.prototype={
gko(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iQ(a){var s,r=this,q=r.d=J.HD(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
mS(a,b){var s
if(this.iQ(a))return
if(b==null)if(a instanceof A.ew)b="/"+a.a+"/"
else{s=J.Z(a)
s=A.B(s,"\\","\\\\")
b='"'+A.B(s,'"','\\"')+'"'}this.lz(b)},
f8(a){return this.mS(a,null)},
v6(){if(this.c===this.b.length)return
this.lz("no more input")},
v1(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.t(A.b_("position must be greater than or equal to 0."))
else if(c>n.length)A.t(A.b_("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.t(A.b_("position plus length must not go beyond the end of the string."))
s=this.a
r=A.j([0],t.t)
q=n.length
p=new A.x2(s,r,new Uint32Array(q))
p.oR(new A.ch(n),s)
o=c+b
if(o>q)A.t(A.b_("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.t(A.b_("Start may not be negative, was "+c+"."))
throw A.b(new A.nn(n,a,new A.hG(p,c,o)))},
lz(a){this.v1("expected "+a+".",0,this.c)}}
A.ho.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Eb(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Eb(b,this))
s=this.a
s.$flags&2&&A.H(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.H(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lo(b)
B.f.aw(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.th(q)
q=r.a
s=r.b++
q.$flags&2&&A.H(q)
q[s]=b},
lo(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
th(a){var s=this.lo(null)
B.f.aw(s,0,a,this.a)
this.a=s},
ah(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ax(c,0,s,null,null))
s=this.a
if(d instanceof A.cw)B.f.ah(s,b,c,d.a,e)
else B.f.ah(s,b,c,d,e)},
aw(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.oy.prototype={}
A.cw.prototype={}
A.Cd.prototype={}
A.hF.prototype={
aa(a,b,c,d){return A.br(this.a,this.b,a,!1,this.$ti.c)},
bA(a,b,c){return this.aa(a,null,b,c)}}
A.jU.prototype={
C(){var s=this,r=A.bb(null,t.H)
if(s.b==null)return r
s.jN()
s.d=s.b=null
return r},
im(a){var s,r=this
if(r.b==null)throw A.b(A.A("Subscription has been canceled."))
r.jN()
s=A.Gd(new A.zo(a),t.m)
s=s==null?null:A.cX(s)
r.d=s
r.jL()},
bf(){if(this.b==null)return;++this.a
this.jN()},
b1(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jL()},
jL(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jN(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibo:1}
A.zn.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.zo.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dH.prototype
s.oE=s.l
s=A.bD.prototype
s.oA=s.n_
s.oB=s.n0
s.oD=s.n2
s.oC=s.n1
s=A.b2.prototype
s.iS=s.aA
s.l1=s.aI
s.l2=s.aR
s=A.dj.prototype
s.oH=s.ll
s.oI=s.lE
s.oJ=s.me
s=A.I.prototype
s.l0=s.ah
s=A.aC.prototype
s.l_=s.tU
s=A.kc.prototype
s.oK=s.q
s=A.o.prototype
s.oz=s.dt
s=A.l_.prototype
s.kY=s.hZ
s=A.fs.prototype
s.kZ=s.f2
s=A.hf.prototype
s.oG=s.a0
s.oF=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"Ld","Iw",47)
r(A,"Lq","J0",11)
q(A,"M_","JJ",18)
q(A,"M0","JK",18)
q(A,"M1","JL",18)
q(A,"M2","Lt",22)
r(A,"Gi","LQ",0)
q(A,"M3","Lu",25)
s(A,"M4","Lw",13)
r(A,"Bg","Lv",0)
p(A,"M9",5,null,["$5"],["LK"],222,0)
p(A,"Me",4,null,["$1$4","$4"],["Bb",function(a,b,c,d){return A.Bb(a,b,c,d,t.z)}],223,0)
p(A,"Mg",5,null,["$2$5","$5"],["Bc",function(a,b,c,d,e){var i=t.z
return A.Bc(a,b,c,d,e,i,i)}],224,0)
p(A,"Mf",6,null,["$3$6"],["Dd"],225,0)
p(A,"Mc",4,null,["$1$4","$4"],["G0",function(a,b,c,d){return A.G0(a,b,c,d,t.z)}],226,0)
p(A,"Md",4,null,["$2$4","$4"],["G1",function(a,b,c,d){var i=t.z
return A.G1(a,b,c,d,i,i)}],227,0)
p(A,"Mb",4,null,["$3$4","$4"],["G_",function(a,b,c,d){var i=t.z
return A.G_(a,b,c,d,i,i,i)}],228,0)
p(A,"M7",5,null,["$5"],["LJ"],229,0)
p(A,"Mh",4,null,["$4"],["Bd"],230,0)
p(A,"M6",5,null,["$5"],["LI"],231,0)
p(A,"M5",5,null,["$5"],["LH"],232,0)
p(A,"Ma",4,null,["$4"],["LL"],233,0)
p(A,"M8",5,null,["$5"],["FZ"],234,0)
var j
o(j=A.eW.prototype,"geH","bJ",0)
o(j,"geI","bK",0)
n(A.eX.prototype,"gu2",0,1,null,["$2","$1"],["bP","aS"],66,0,0)
m(A.w.prototype,"gj4","pz",13)
n(j=A.e5.prototype,"gtH",0,1,null,["$2","$1"],["by","tI"],66,0,0)
l(j,"gpa","aA",15)
m(j,"gp6","aI",13)
o(j,"gpq","aR",0)
o(j=A.e0.prototype,"geH","bJ",0)
o(j,"geI","bK",0)
o(j=A.b2.prototype,"geH","bJ",0)
o(j,"geI","bK",0)
o(A.hE.prototype,"glU","r_",0)
l(j=A.cy.prototype,"gqS","qT",15)
m(j,"gqW","qX",13)
o(j,"gqU","qV",0)
o(j=A.hH.prototype,"geH","bJ",0)
o(j,"geI","bK",0)
l(j,"gji","jj",15)
m(j,"gjm","jn",150)
o(j,"gjk","jl",0)
o(j=A.hP.prototype,"geH","bJ",0)
o(j,"geI","bK",0)
l(j,"gji","jj",15)
m(j,"gjm","jn",13)
o(j,"gjk","jl",0)
s(A,"Dj","KX",30)
q(A,"Dk","KY",31)
s(A,"Mm","IE",47)
q(A,"Mv","L0",32)
k(j=A.of.prototype,"gtG","t",15)
o(j,"ge5","q",0)
q(A,"Gm","MR",31)
s(A,"Gl","MQ",30)
q(A,"Mw","JD",6)
p(A,"N3",2,null,["$1$2","$2"],["Gy",function(a,b){return A.Gy(a,b,t.o)}],235,0)
m(j=A.lv.prototype,"gv0","Z",30)
l(j,"gvJ","ac",31)
l(j,"gvP","vQ",22)
q(A,"Mk","HP",6)
o(j=A.jf.prototype,"gqY","qZ",0)
l(j,"gr0","r1",114)
q(A,"Ne","IZ",61)
q(A,"Gk","I4",237)
q(A,"Mr","I9",238)
q(A,"Mt","Is",239)
q(A,"Mq","HL",240)
q(A,"Ms","If",241)
q(A,"po","I8",6)
q(A,"MH","E5",242)
r(A,"MI","LU",243)
r(A,"N_","KZ",11)
r(A,"Oy","L_",11)
l(A.mI.prototype,"gwA","wB",9)
q(A,"Mo","Ca",162)
l(j=A.no.prototype,"gvy","vz",39)
l(j,"gvw","vx",132)
o(j,"gqP","jw",0)
q(A,"Nl","Jv",61)
o(A.oi.prototype,"gvg","kd",0)
o(A.mU.prototype,"gk6","f2",0)
o(A.mC.prototype,"gk6","f2",0)
l(j=A.fs.prototype,"gqQ","qR",39)
o(j,"gmq","e_",3)
m(A.o3.prototype,"gql","hd",54)
m(A.o2.prototype,"gqr","he",54)
l(j=A.lq.prototype,"gw0","w1",9)
m(j,"gvZ","w_",174)
n(j,"gxT",0,5,null,["$5"],["xU"],175,0,0)
n(j,"gxI",0,3,null,["$3"],["xJ"],176,0,0)
n(j,"gxA",0,4,null,["$4"],["xB"],57,0,0)
n(j,"gxP",0,4,null,["$4"],["xQ"],57,0,0)
n(j,"gxV",0,3,null,["$3"],["xW"],178,0,0)
m(j,"gy_","y0",58)
m(j,"gxG","xH",58)
l(j,"gxE","xF",33)
n(j,"gxX",0,4,null,["$4"],["xY"],60,0,0)
n(j,"gy9",0,4,null,["$4"],["ya"],60,0,0)
m(j,"gy5","y6",182)
m(j,"gy3","y4",17)
m(j,"gxN","xO",17)
m(j,"gxR","xS",17)
m(j,"gy7","y8",17)
m(j,"gxC","xD",17)
l(j,"giM","xK",33)
n(j,"gxL",0,3,null,["$3"],["xM"],184,0,0)
l(j,"giO","xZ",33)
l(j,"guA","uB",18)
l(j,"guv","uw",185)
n(j,"guy",0,5,null,["$5"],["uz"],186,0,0)
n(j,"guG",0,4,null,["$4"],["uH"],27,0,0)
n(j,"guK",0,4,null,["$4"],["uL"],27,0,0)
n(j,"guI",0,4,null,["$4"],["uJ"],27,0,0)
m(j,"guM","uN",63)
m(j,"guE","uF",63)
n(j,"guC",0,5,null,["$5"],["uD"],189,0,0)
m(j,"gut","uu",190)
m(j,"gur","us",191)
n(j,"guo",0,3,null,["$3"],["uq"],192,0,0)
o(j=A.dE.prototype,"ge5","q",3)
o(j,"gve","cI",3)
o(A.hd.prototype,"ge5","q",0)
o(A.lr.prototype,"gqt","qu",0)
l(A.en.prototype,"gtV","mC",209)
l(A.hz.prototype,"gvA","vB",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.Cq,J.m7,A.jo,J.fo,A.zc,A.yK,A.o,A.l7,A.ek,A.V,A.ae,A.I,A.wZ,A.ao,A.mm,A.cU,A.lC,A.nC,A.na,A.lz,A.o1,A.iE,A.nO,A.jz,A.hM,A.iX,A.fy,A.hI,A.cq,A.xL,A.mB,A.iz,A.k9,A.uJ,A.bE,A.aT,A.mj,A.ew,A.hL,A.o8,A.hk,A.At,A.og,A.p4,A.cp,A.ou,A.p1,A.kd,A.jH,A.oa,A.jZ,A.oZ,A.an,A.a9,A.b2,A.jN,A.nD,A.jX,A.eX,A.ca,A.w,A.o9,A.e5,A.p_,A.jJ,A.o6,A.oq,A.zl,A.e4,A.hE,A.cy,A.jT,A.AS,A.AU,A.AT,A.AQ,A.AR,A.AP,A.AM,A.pa,A.AL,A.AK,A.AO,A.AN,A.p9,A.pb,A.p8,A.hX,A.jG,A.ov,A.A3,A.e3,A.oC,A.b3,A.oE,A.p3,A.oD,A.nm,A.la,A.aC,A.oc,A.pS,A.ob,A.l8,A.oU,A.eY,A.A_,A.Au,A.p6,A.dm,A.aM,A.ot,A.aP,A.aD,A.zm,A.mE,A.ju,A.os,A.bl,A.m6,A.S,A.U,A.oY,A.jv,A.n2,A.a3,A.kk,A.xQ,A.cb,A.lD,A.mA,A.zT,A.zU,A.lA,A.a4,A.lw,A.iM,A.ey,A.hU,A.hK,A.iW,A.lv,A.mz,A.nP,A.ci,A.c0,A.t6,A.q4,A.iV,A.jq,A.uY,A.jp,A.wY,A.qS,A.r7,A.zb,A.ej,A.kZ,A.l_,A.pO,A.ms,A.fP,A.pN,A.jf,A.w0,A.Am,A.vS,A.vJ,A.jh,A.hQ,A.vT,A.An,A.eu,A.dB,A.m1,A.cH,A.dC,A.dT,A.vH,A.lf,A.c1,A.lS,A.mX,A.ag,A.vl,A.wG,A.eH,A.cL,A.mS,A.wW,A.n5,A.eN,A.b5,A.eS,A.nh,A.aU,A.a2,A.q1,A.q2,A.q3,A.rF,A.f6,A.A1,A.p0,A.hO,A.tG,A.iw,A.qq,A.iv,A.dJ,A.iA,A.bk,A.uP,A.cG,A.rP,A.lM,A.pQ,A.fp,A.ij,A.nk,A.iC,A.rI,A.uC,A.nj,A.w1,A.oB,A.vm,A.mI,A.uI,A.Av,A.wE,A.d6,A.b0,A.cm,A.mR,A.cM,A.wV,A.co,A.wO,A.aY,A.dD,A.fK,A.et,A.c7,A.qB,A.cD,A.n4,A.oh,A.hx,A.pC,A.bj,A.qD,A.no,A.d4,A.eC,A.v4,A.dL,A.mn,A.Aa,A.A8,A.vt,A.pP,A.iU,A.jm,A.vy,A.mQ,A.wf,A.b4,A.wo,A.hl,A.xl,A.bp,A.hj,A.d9,A.h1,A.jl,A.cC,A.nE,A.xn,A.jk,A.jy,A.xA,A.cO,A.cn,A.eE,A.bG,A.Af,A.xC,A.oi,A.hA,A.fs,A.yl,A.hv,A.o0,A.y7,A.jj,A.oG,A.r8,A.eT,A.oj,A.yc,A.hw,A.o3,A.o2,A.qK,A.xk,A.mG,A.mH,A.x2,A.nd,A.hf,A.t7,A.bs,A.cx,A.cr,A.ng,A.cs,A.c6,A.kN,A.ra,A.e6,A.x4,A.el,A.b6,A.l2,A.qQ,A.oP,A.A9,A.bO,A.ln,A.dh,A.js,A.y2,A.xY,A.y4,A.y3,A.dX,A.di,A.lq,A.d8,A.eZ,A.xZ,A.pJ,A.jY,A.zp,A.oF,A.ox,A.A5,A.xT,A.is,A.wQ,A.iq,A.lm,A.lF,A.t5,A.d0,A.lr,A.j6,A.em,A.w5,A.h6,A.kb,A.hB,A.ls,A.yh,A.kn,A.op,A.zk,A.xj,A.Cd,A.jU])
q(J.m7,[J.m9,J.iO,J.aF,J.bt,J.fN,J.ev,J.dF])
q(J.aF,[J.dH,J.z,A.fV,A.j8])
q(J.dH,[J.mJ,J.dW,J.bP])
r(J.m8,A.jo)
r(J.tD,J.z)
q(J.ev,[J.iN,J.ma])
q(A.o,[A.e_,A.K,A.ck,A.am,A.iB,A.eO,A.db,A.dY,A.f1,A.o7,A.oX,A.hS,A.ex,A.jn])
q(A.e_,[A.eh,A.ko])
r(A.jR,A.eh)
r(A.jO,A.ko)
q(A.ek,[A.q6,A.q_,A.q5,A.tx,A.xB,A.BG,A.BI,A.ys,A.yr,A.AX,A.AW,A.t3,A.rZ,A.zt,A.zs,A.zE,A.zH,A.xf,A.xg,A.xd,A.zj,A.zi,A.Ae,A.zK,A.zf,A.A2,A.uZ,A.zY,A.qP,A.yF,A.t_,A.BK,A.BQ,A.BR,A.Bp,A.pV,A.pX,A.pZ,A.l1,A.pR,A.AZ,A.pT,A.v2,A.Bw,A.vR,A.vQ,A.vM,A.vN,A.vO,A.vP,A.vK,A.vL,A.w_,A.vW,A.vX,A.vU,A.vZ,A.qN,A.qO,A.wI,A.wD,A.w3,A.x6,A.x7,A.u6,A.u7,A.u9,A.uv,A.ua,A.ub,A.uc,A.ud,A.ue,A.uf,A.ug,A.uh,A.ui,A.uj,A.ul,A.um,A.un,A.uo,A.up,A.uq,A.ur,A.tT,A.tV,A.tZ,A.tJ,A.tI,A.tX,A.tW,A.u2,A.u3,A.u4,A.u5,A.tN,A.tP,A.tR,A.u0,A.u1,A.tM,A.tK,A.rC,A.rB,A.rD,A.rA,A.rz,A.ry,A.rx,A.rt,A.ru,A.rv,A.uQ,A.uS,A.uU,A.uW,A.uR,A.rQ,A.rR,A.BP,A.rL,A.rJ,A.rM,A.rN,A.BV,A.uD,A.uH,A.uG,A.uF,A.uE,A.vg,A.vc,A.vf,A.vd,A.ww,A.wy,A.wz,A.wA,A.wR,A.wU,A.qm,A.qp,A.ql,A.qo,A.qi,A.qh,A.qe,A.qn,A.qj,A.qg,A.qf,A.qk,A.qd,A.qb,A.q9,A.pD,A.pE,A.qF,A.qE,A.xy,A.xo,A.xw,A.xr,A.xs,A.xt,A.xp,A.Bm,A.Bn,A.vb,A.v5,A.v6,A.v7,A.v8,A.v9,A.vv,A.vw,A.vE,A.vC,A.vB,A.vA,A.vD,A.wm,A.wg,A.wi,A.wk,A.wp,A.wu,A.xm,A.By,A.BU,A.BS,A.BT,A.xJ,A.xF,A.xH,A.xD,A.z2,A.z_,A.wK,A.wJ,A.ym,A.y6,A.uN,A.uO,A.uX,A.z9,A.za,A.BE,A.BD,A.Bs,A.yg,A.ye,A.qL,A.qM,A.Be,A.t9,A.t8,A.ta,A.tc,A.te,A.tb,A.ts,A.x8,A.ri,A.Aq,A.BN,A.BW,A.BX,A.pI,A.zd,A.ze,A.qt,A.qu,A.qy,A.qz,A.qA,A.rO,A.pM,A.pK,A.zN,A.zQ,A.zR,A.tw,A.tu,A.zM,A.x1,A.xU,A.xV,A.xW,A.xX,A.wd,A.we,A.wc,A.wb,A.wa,A.y8,A.rm,A.vn,A.rE,A.Bl,A.qr,A.qs,A.qv,A.qw,A.qx,A.B5,A.yQ,A.yV,A.yY,A.yO,A.Ak,A.Al,A.Aj,A.Ah,A.zn,A.zo])
q(A.q6,[A.yL,A.q0,A.qJ,A.tE,A.BH,A.AY,A.Bf,A.t4,A.rY,A.zu,A.zF,A.zI,A.yo,A.zJ,A.uK,A.v0,A.A0,A.yE,A.AE,A.xR,A.AD,A.AC,A.t1,A.t0,A.pU,A.pW,A.pY,A.l0,A.vk,A.v3,A.vG,A.vV,A.vI,A.B4,A.wH,A.wC,A.w4,A.wF,A.wX,A.C0,A.Bj,A.tH,A.tL,A.rw,A.rS,A.vh,A.wB,A.wS,A.wT,A.qc,A.pF,A.xq,A.ya,A.Bt,A.yd,A.td,A.rl,A.zS,A.y9,A.z6,A.yk])
r(A.bN,A.jO)
q(A.V,[A.ei,A.bD,A.dj,A.oz])
q(A.ae,[A.dG,A.mV,A.df,A.mb,A.nN,A.n3,A.or,A.jg,A.iR,A.kS,A.bB,A.cT,A.nM,A.bn,A.ld])
q(A.I,[A.hp,A.n7,A.nW,A.ht,A.en,A.ho])
r(A.ch,A.hp)
q(A.q5,[A.BM,A.w7,A.yt,A.yu,A.Ax,A.Aw,A.AV,A.yw,A.yx,A.yz,A.yA,A.yy,A.yv,A.t2,A.zv,A.zA,A.zz,A.zx,A.zw,A.zD,A.zC,A.zB,A.zG,A.xe,A.xh,A.xc,A.Ap,A.Ao,A.yn,A.yJ,A.yI,A.A6,A.A4,A.B_,A.B0,A.zh,A.zg,A.Ad,A.Ac,A.Ba,A.AH,A.AG,A.rs,A.B7,A.B8,A.v1,A.vF,A.vY,A.u8,A.uk,A.uw,A.ux,A.uy,A.uz,A.uA,A.uB,A.us,A.ut,A.uu,A.tS,A.tU,A.tY,A.tO,A.tQ,A.u_,A.rH,A.uT,A.uV,A.rK,A.wx,A.rG,A.tt,A.rW,A.rV,A.xa,A.q8,A.qa,A.qC,A.qI,A.qH,A.qG,A.xv,A.xu,A.xx,A.wn,A.wh,A.wj,A.wl,A.wq,A.wv,A.wt,A.ws,A.wr,A.xz,A.vz,A.vu,A.xK,A.xI,A.xG,A.xE,A.z3,A.z0,A.z1,A.wL,A.vs,A.tr,A.tf,A.tm,A.tn,A.to,A.tp,A.tk,A.tl,A.tg,A.th,A.ti,A.tj,A.tq,A.zL,A.rj,A.rk,A.rg,A.rf,A.rh,A.rc,A.rb,A.rd,A.re,A.Ar,A.As,A.BY,A.qW,A.qT,A.qY,A.r_,A.r1,A.qV,A.r0,A.r5,A.r3,A.r2,A.qX,A.qZ,A.r4,A.qU,A.pG,A.pH,A.y_,A.pL,A.zO,A.zP,A.zq,A.tv,A.rn,A.ro,A.vp,A.vo,A.z4,A.z8,A.z5,A.z7,A.yP,A.yU,A.yX,A.yR,A.yW,A.yZ,A.yS,A.yT,A.rr,A.rq,A.rp,A.yi,A.yj,A.Ai])
q(A.K,[A.a_,A.er,A.T,A.al,A.aK,A.f0,A.k0])
q(A.a_,[A.ct,A.X,A.bw,A.iT,A.oA])
r(A.eq,A.ck)
r(A.ix,A.eO)
r(A.fB,A.db)
q(A.hM,[A.oH,A.oI,A.oJ])
q(A.oH,[A.a5,A.k6,A.k7,A.hN,A.oK])
r(A.f4,A.oI)
q(A.oJ,[A.f5,A.oL])
r(A.kj,A.iX)
r(A.cS,A.kj)
r(A.it,A.cS)
q(A.fy,[A.aX,A.iG])
q(A.cq,[A.iu,A.k8])
r(A.dz,A.iu)
r(A.iK,A.tx)
r(A.jd,A.df)
q(A.xB,[A.x9,A.il])
q(A.bD,[A.iQ,A.iP,A.k_])
r(A.fU,A.fV)
q(A.j8,[A.j7,A.fW])
q(A.fW,[A.k2,A.k4])
r(A.k3,A.k2)
r(A.dO,A.k3)
r(A.k5,A.k4)
r(A.bR,A.k5)
q(A.dO,[A.mu,A.mv])
q(A.bR,[A.mw,A.mx,A.my,A.j9,A.ja,A.jb,A.eB])
r(A.ke,A.or)
q(A.a9,[A.hR,A.jw,A.jS,A.dl,A.jV,A.jM,A.ih,A.hF])
r(A.b7,A.hR)
r(A.b1,A.b7)
q(A.b2,[A.e0,A.hH,A.hP])
r(A.eW,A.e0)
r(A.jI,A.jN)
q(A.eX,[A.aJ,A.ap])
q(A.e5,[A.cV,A.hT])
r(A.ka,A.o6)
q(A.oq,[A.c9,A.hD])
r(A.k1,A.cV)
r(A.f2,A.jV)
q(A.p8,[A.ok,A.oO])
q(A.dj,[A.e1,A.jP])
r(A.dk,A.k8)
q(A.nm,[A.kc,A.Ay,A.yB,A.oW])
r(A.zW,A.kc)
q(A.la,[A.es,A.kX,A.tF])
q(A.es,[A.kQ,A.mh,A.nT])
q(A.aC,[A.p2,A.ii,A.kY,A.me,A.md,A.nU,A.jB,A.lZ])
q(A.p2,[A.kR,A.mi])
r(A.yG,A.oc)
q(A.pS,[A.yC,A.hy,A.of,A.AF])
r(A.yp,A.yC)
r(A.mc,A.iR)
r(A.zX,A.l8)
r(A.zZ,A.A_)
r(A.pc,A.p6)
r(A.AI,A.pc)
q(A.bB,[A.d7,A.iI])
r(A.on,A.kk)
r(A.hc,A.hU)
r(A.oR,A.lZ)
r(A.Ag,A.t6)
r(A.oS,A.Ag)
r(A.kL,A.q4)
r(A.jr,A.wY)
r(A.ol,A.kL)
r(A.lo,A.ol)
r(A.om,A.uY)
r(A.r6,A.om)
r(A.mY,A.ej)
r(A.l5,A.kZ)
r(A.dx,A.jw)
q(A.l_,[A.vj,A.wP])
r(A.jx,A.pO)
r(A.nl,A.jx)
r(A.io,A.a4)
r(A.mL,A.jf)
q(A.c1,[A.lb,A.li,A.jD,A.fF,A.nx,A.kV])
q(A.mX,[A.lI,A.lJ,A.lN,A.lK,A.lH,A.lX,A.lQ,A.lL,A.lU,A.lO,A.lB,A.ni,A.mD,A.l6,A.m_,A.l9,A.lY,A.n0,A.mt,A.mT,A.ll,A.lk,A.lx,A.m2,A.kM,A.lE,A.n6,A.nF,A.nG,A.nI,A.nK,A.nJ,A.nH,A.nZ,A.o_,A.nY,A.kO,A.nX,A.nV,A.mP,A.lc,A.n1,A.lh,A.lg,A.mZ,A.kJ,A.kK,A.lj,A.nv,A.nA,A.nq,A.nr,A.nt,A.nB,A.nu,A.ny])
q(A.ag,[A.lW,A.lT,A.fH,A.lR,A.fG,A.fE,A.hi,A.fX,A.im,A.m0,A.h7,A.h8,A.fT,A.h3,A.fz,A.fA,A.fM,A.fn,A.fD,A.ha,A.fx,A.fw,A.hn,A.hu,A.h0,A.fu,A.nw,A.ns,A.nz])
q(A.vl,[A.j1,A.j4,A.j2,A.j5,A.iZ,A.j_,A.iY,A.j3,A.j0])
q(A.zm,[A.aZ,A.cB,A.dV,A.mK,A.ip,A.dy,A.d2,A.le,A.c2,A.iJ,A.vi,A.dN,A.ef,A.c8,A.kW,A.cP,A.fm,A.fY,A.je,A.ly,A.jt,A.vx,A.fI,A.mo,A.dA,A.cv,A.iD,A.dR])
q(A.cL,[A.iS,A.jc,A.id,A.ie])
r(A.pB,A.rF)
q(A.dJ,[A.eR,A.eQ,A.eD,A.fr,A.h_,A.fJ,A.cN,A.h5,A.h9,A.eK,A.hg,A.fS,A.fv,A.eo,A.h4])
q(A.eK,[A.hq,A.fL])
r(A.mf,A.oB)
q(A.d6,[A.aj,A.c3,A.dv,A.cZ])
r(A.ft,A.oh)
r(A.yq,A.A8)
q(A.bp,[A.eP,A.da,A.hb,A.bM,A.cj,A.cl,A.dQ,A.eG,A.ep,A.np,A.dw])
q(A.fs,[A.mU,A.mC])
r(A.y5,A.pQ)
r(A.uM,A.r8)
r(A.ml,A.eT)
q(A.hw,[A.jF,A.eU])
r(A.p7,A.o3)
r(A.yf,A.p7)
r(A.tB,A.xk)
q(A.tB,[A.w2,A.xS,A.yb])
r(A.lP,A.nd)
q(A.hf,[A.hG,A.nf])
r(A.he,A.ng)
r(A.dc,A.nf)
r(A.hh,A.el)
r(A.l3,A.b6)
q(A.l3,[A.m3,A.dE,A.hd])
q(A.l2,[A.ow,A.oV])
r(A.oM,A.qQ)
r(A.oN,A.oM)
r(A.n_,A.oN)
r(A.oQ,A.oP)
r(A.c5,A.oQ)
q(A.b3,[A.eV,A.b8])
r(A.hs,A.x4)
q(A.b8,[A.jW,A.jQ,A.hC,A.hW])
r(A.w9,A.wQ)
r(A.qR,A.lm)
r(A.du,A.h6)
r(A.hz,A.w9)
q(A.kn,[A.oo,A.oT])
r(A.nn,A.he)
r(A.oy,A.ho)
r(A.cw,A.oy)
s(A.hp,A.nO)
s(A.ko,A.I)
s(A.k2,A.I)
s(A.k3,A.iE)
s(A.k4,A.I)
s(A.k5,A.iE)
s(A.cV,A.jJ)
s(A.hT,A.p_)
s(A.kj,A.p3)
s(A.pc,A.nm)
s(A.ol,A.qS)
s(A.om,A.r7)
s(A.oB,A.q2)
s(A.oh,A.q3)
s(A.p7,A.o2)
s(A.oM,A.I)
s(A.oN,A.mz)
s(A.oP,A.nP)
s(A.oQ,A.V)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",aa:"double",aW:"num",l:"String",R:"bool",U:"Null",q:"List",k:"Object",J:"Map",M:"JSObject"},mangledNames:{},types:["~()","~(M)","U()","y<~>()","y<~>(bG)","y<U>(bG)","l(l)","U(k,aG)","fX(~)","~(i)","R(l)","i()","S<l,@>(@,@)","~(k,aG)","~(q<i>)","~(k?)","U(M)","i(bq,i)","~(~())","U(k)","y<b4>()","y<U>()","R(k?)","R(@)","y<~>(jY)","~(@)","U(@)","~(d8,i,i,i)","0&()","k?(k?)","R(k?,k?)","i(k?)","@(@)","i(bq)","R(bs)","k?(J<l,k?>)","M()","~(l,l)","~(de)","~(a2)","~(k?,k?)","y<~>(~)","R(c7)","y<U>(r9)","S<l,k?>(@,@)","R()","R(dD)","i(@,@)","U(~)","y<q<l>>()","y<i>()","l(J<l,k?>)","y<@>()","R(aY)","y<k?>(o4,hv)","i(cH)","y<cH>(l)","i(b6,i,i,i)","i(b6,i)","l(eA)","i(bq,i,i,bt)","aa(i)","~(l,@)","~(d8,i)","@()","~(@,@)","~(k[aG?])","@(l)","y<bo<~>>()","~(~)","y<eT>()","R(bk)","fT(q<l>)","y<l>()","h0(i)","fu(i)","fx(q<bj>)","fw(bj?)","fH(q<bk>)","fG(i)","fE(i)","hi(R)","U(@,aG)","y<co>()","h3(co)","y<q<cM>>()","ha(q<cM>)","R(l,l)","hn(~)","R(hO)","~(J<l,k?>?)","~(q<J<l,k?>>)","i(l)","a9<q<i>>()","~(eN)","~(q<bj>)","U(l,l[k?])","J<l,k?>(c5)","~(dM<q<i>>)","k?(x5)","~(i,@)","l(l,l)","bk()","y<bk>(bG)","eY<@,@>(bC<@>)","fP()","i(i,cG)","R(cG)","l(cG)","~(q<ci>)","y<a9<q<i>>>()","l?(J<l,k?>)","i(i,i)","i(c7,c7)","~(jh)","~(l,k?)","l(cm)","l()","R(cm)","aY()","dD()","fK()","et()","c7()","S<l,dB>(l,hj)","l(@)","y<J<l,k?>?>(l)","R(i)","l(i,i)","d9(@)","bj()","i(i)","~(cC)","w<@>?()","y<b5>(b5)","b5(b5)","b5(k)","U(b5)","y<dT>(l)","dL/(k?)","y<k?>(k?)","J<l,k?>(q<k?>)","y<i>(bG)","i(dT)","aD(i)","l(i[i])","cO()","cn()","eE()","y<U>(~)","~(@,aG)","y<@>(bG)","q<J<l,k?>>(co)","y<R>(l)","y<~>(l)","U(k?)","R(cD<k?>)","R(cB)","R(dV)","~(c1)","l(l?)","l?()","bj(J<l,k?>)","0&(l,i?)","k(cx)","k(bs)","i(bs,bs)","q<cx>(S<k,q<bs>>)","dc()","l(k?)","~(i,l,i)","~(CC,q<CD>)","q<eH>(k?)","~(O,au,O,~())","~(bt,i)","bq?(b6,i,i,i,i)","i(b6,i,i)","R(aZ)","i(b6?,i,i)","q<cL>(k?)","i(+(l,k),+(l,k))","~(l,l?)","i(bq,bt)","U(bP,bP)","i(bq,i,i)","i(i())","~(~(i,l,i),i,i,i,bt)","i(+(l,k?),+(l,k?))","~(aU)","i(d8,i,i,i,i)","i(i(i),i)","i(CH,i)","i(CH,i,i)","k?(~)","y<J<l,k?>?>()","M(z<k?>)","h7(J<l,k?>?)","y<q<J<l,k?>?>>()","M(M?)","~(eg)","y<~>(i,cR)","y<~>(i)","cR()","y<M>(l)","U(d0)","y<U>(M)","M(k)","U(k?,aG)","l?(k?)","~(el)","M(M)","y<M>()","h8(q<J<l,k?>?>)","U(~())","y<bo<cs>>()","~(cs)","R(hB)","y<q<k?>>()","y<em>()","0&(k?,aG)","~(dM<M>)","@(@,l)","~(O?,au?,O,k,aG)","0^(O?,au?,O,0^())<k?>","0^(O?,au?,O,0^(1^),1^)<k?,k?>","0^(O?,au?,O,0^(1^,2^),1^,2^)<k?,k?,k?>","0^()(O,au,O,0^())<k?>","0^(1^)(O,au,O,0^(1^))<k?,k?>","0^(1^,2^)(O,au,O,0^(1^,2^))<k?,k?,k?>","an?(O,au,O,k,aG?)","~(O?,au?,O,~())","de(O,au,O,aD,~())","de(O,au,O,aD,~(de))","~(O,au,O,l)","O(O?,au?,O,jG?,J<k?,k?>?)","0^(0^,0^)<aW>","y<aW?>()","fz(i)","fA(q<k?>)","fM(q<l>)","fn(aW?)","fD(l)","bk(J<l,k?>)","aP()","i(cx)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a5&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.k6&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.k7&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hN&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.oK&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.f4&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.f5&&A.GC(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.oL&&A.GC(a,b.a)}}
A.Ks(v.typeUniverse,JSON.parse('{"bP":"dH","mJ":"dH","dW":"dH","NH":"fV","z":{"q":["1"],"aF":[],"K":["1"],"M":[],"o":["1"],"bc":["1"]},"m9":{"R":[],"ak":[]},"iO":{"U":[],"ak":[]},"aF":{"M":[]},"dH":{"aF":[],"M":[]},"m8":{"jo":[]},"tD":{"z":["1"],"q":["1"],"aF":[],"K":["1"],"M":[],"o":["1"],"bc":["1"]},"ev":{"aa":[],"aW":[],"aw":["aW"]},"iN":{"aa":[],"i":[],"aW":[],"aw":["aW"],"ak":[]},"ma":{"aa":[],"aW":[],"aw":["aW"],"ak":[]},"dF":{"l":[],"aw":["l"],"bc":["@"],"ak":[]},"e_":{"o":["2"]},"eh":{"e_":["1","2"],"o":["2"],"o.E":"2"},"jR":{"eh":["1","2"],"e_":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"jO":{"I":["2"],"q":["2"],"e_":["1","2"],"K":["2"],"o":["2"]},"bN":{"jO":["1","2"],"I":["2"],"q":["2"],"e_":["1","2"],"K":["2"],"o":["2"],"I.E":"2","o.E":"2"},"ei":{"V":["3","4"],"J":["3","4"],"V.V":"4","V.K":"3"},"dG":{"ae":[]},"mV":{"ae":[]},"ch":{"I":["i"],"q":["i"],"K":["i"],"o":["i"],"I.E":"i"},"K":{"o":["1"]},"a_":{"K":["1"],"o":["1"]},"ct":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"ck":{"o":["2"],"o.E":"2"},"eq":{"ck":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"X":{"a_":["2"],"K":["2"],"o":["2"],"a_.E":"2","o.E":"2"},"am":{"o":["1"],"o.E":"1"},"iB":{"o":["2"],"o.E":"2"},"eO":{"o":["1"],"o.E":"1"},"ix":{"eO":["1"],"K":["1"],"o":["1"],"o.E":"1"},"db":{"o":["1"],"o.E":"1"},"fB":{"db":["1"],"K":["1"],"o":["1"],"o.E":"1"},"er":{"K":["1"],"o":["1"],"o.E":"1"},"dY":{"o":["1"],"o.E":"1"},"hp":{"I":["1"],"q":["1"],"K":["1"],"o":["1"]},"bw":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"it":{"cS":["1","2"],"J":["1","2"]},"fy":{"J":["1","2"]},"aX":{"fy":["1","2"],"J":["1","2"]},"f1":{"o":["1"],"o.E":"1"},"iG":{"fy":["1","2"],"J":["1","2"]},"iu":{"cq":["1"],"eL":["1"],"K":["1"],"o":["1"]},"dz":{"cq":["1"],"eL":["1"],"K":["1"],"o":["1"]},"jd":{"df":[],"ae":[]},"mb":{"ae":[]},"nN":{"ae":[]},"mB":{"G":[]},"k9":{"aG":[]},"n3":{"ae":[]},"bD":{"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"T":{"K":["1"],"o":["1"],"o.E":"1"},"al":{"K":["1"],"o":["1"],"o.E":"1"},"aK":{"K":["S<1,2>"],"o":["S<1,2>"],"o.E":"S<1,2>"},"iQ":{"bD":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"iP":{"bD":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"hL":{"mW":[],"eA":[]},"o7":{"o":["mW"],"o.E":"mW"},"hk":{"eA":[]},"oX":{"o":["eA"],"o.E":"eA"},"fU":{"aF":[],"M":[],"eg":[],"ak":[]},"fV":{"aF":[],"M":[],"eg":[],"ak":[]},"j8":{"aF":[],"M":[]},"p4":{"eg":[]},"j7":{"aF":[],"C8":[],"M":[],"ak":[]},"fW":{"bQ":["1"],"aF":[],"M":[],"bc":["1"]},"dO":{"I":["aa"],"q":["aa"],"bQ":["aa"],"aF":[],"K":["aa"],"M":[],"bc":["aa"],"o":["aa"]},"bR":{"I":["i"],"q":["i"],"bQ":["i"],"aF":[],"K":["i"],"M":[],"bc":["i"],"o":["i"]},"mu":{"dO":[],"rT":[],"I":["aa"],"q":["aa"],"bQ":["aa"],"aF":[],"K":["aa"],"M":[],"bc":["aa"],"o":["aa"],"ak":[],"I.E":"aa"},"mv":{"dO":[],"rU":[],"I":["aa"],"q":["aa"],"bQ":["aa"],"aF":[],"K":["aa"],"M":[],"bc":["aa"],"o":["aa"],"ak":[],"I.E":"aa"},"mw":{"bR":[],"ty":[],"I":["i"],"q":["i"],"bQ":["i"],"aF":[],"K":["i"],"M":[],"bc":["i"],"o":["i"],"ak":[],"I.E":"i"},"mx":{"bR":[],"tz":[],"I":["i"],"q":["i"],"bQ":["i"],"aF":[],"K":["i"],"M":[],"bc":["i"],"o":["i"],"ak":[],"I.E":"i"},"my":{"bR":[],"tA":[],"I":["i"],"q":["i"],"bQ":["i"],"aF":[],"K":["i"],"M":[],"bc":["i"],"o":["i"],"ak":[],"I.E":"i"},"j9":{"bR":[],"xN":[],"I":["i"],"q":["i"],"bQ":["i"],"aF":[],"K":["i"],"M":[],"bc":["i"],"o":["i"],"ak":[],"I.E":"i"},"ja":{"bR":[],"xO":[],"I":["i"],"q":["i"],"bQ":["i"],"aF":[],"K":["i"],"M":[],"bc":["i"],"o":["i"],"ak":[],"I.E":"i"},"jb":{"bR":[],"xP":[],"I":["i"],"q":["i"],"bQ":["i"],"aF":[],"K":["i"],"M":[],"bc":["i"],"o":["i"],"ak":[],"I.E":"i"},"eB":{"bR":[],"cR":[],"I":["i"],"q":["i"],"bQ":["i"],"aF":[],"K":["i"],"M":[],"bc":["i"],"o":["i"],"ak":[],"I.E":"i"},"or":{"ae":[]},"ke":{"df":[],"ae":[]},"an":{"ae":[]},"w":{"y":["1"]},"dM":{"bC":["1"]},"kd":{"de":[]},"jH":{"ir":["1"]},"hS":{"o":["1"],"o.E":"1"},"b1":{"b7":["1"],"hR":["1"],"a9":["1"],"a9.T":"1"},"eW":{"e0":["1"],"b2":["1"],"bo":["1"],"b2.T":"1"},"jN":{"bC":["1"]},"jI":{"jN":["1"],"bC":["1"]},"nD":{"G":[]},"jg":{"ae":[]},"eX":{"ir":["1"]},"aJ":{"eX":["1"],"ir":["1"]},"ap":{"eX":["1"],"ir":["1"]},"jw":{"a9":["1"]},"e5":{"bC":["1"]},"cV":{"jJ":["1"],"e5":["1"],"bC":["1"]},"hT":{"e5":["1"],"bC":["1"]},"b7":{"hR":["1"],"a9":["1"],"a9.T":"1"},"e0":{"b2":["1"],"bo":["1"],"b2.T":"1"},"ka":{"o6":["1"]},"b2":{"bo":["1"],"b2.T":"1"},"hR":{"a9":["1"]},"hE":{"bo":["1"]},"jS":{"a9":["1"],"a9.T":"1"},"dl":{"a9":["1"],"a9.T":"1"},"k1":{"cV":["1"],"jJ":["1"],"e5":["1"],"dM":["1"],"bC":["1"]},"jV":{"a9":["2"]},"hH":{"b2":["2"],"bo":["2"],"b2.T":"2"},"f2":{"jV":["1","2"],"a9":["2"],"a9.T":"2"},"jT":{"bC":["1"]},"hP":{"b2":["2"],"bo":["2"],"b2.T":"2"},"jM":{"a9":["2"],"a9.T":"2"},"p8":{"O":[]},"ok":{"O":[]},"oO":{"O":[]},"hX":{"au":[]},"dj":{"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"e1":{"dj":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"jP":{"dj":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"f0":{"K":["1"],"o":["1"],"o.E":"1"},"k_":{"bD":["1","2"],"V":["1","2"],"J":["1","2"],"V.V":"2","V.K":"1"},"dk":{"cq":["1"],"eL":["1"],"K":["1"],"o":["1"]},"ex":{"o":["1"],"o.E":"1"},"I":{"q":["1"],"K":["1"],"o":["1"]},"V":{"J":["1","2"]},"k0":{"K":["2"],"o":["2"],"o.E":"2"},"iX":{"J":["1","2"]},"cS":{"J":["1","2"]},"iT":{"a_":["1"],"K":["1"],"o":["1"],"a_.E":"1","o.E":"1"},"cq":{"eL":["1"],"K":["1"],"o":["1"]},"k8":{"cq":["1"],"eL":["1"],"K":["1"],"o":["1"]},"eY":{"bC":["1"]},"oz":{"V":["l","@"],"J":["l","@"],"V.V":"@","V.K":"l"},"oA":{"a_":["l"],"K":["l"],"o":["l"],"a_.E":"l","o.E":"l"},"kQ":{"es":[]},"p2":{"aC":["l","q<i>"]},"kR":{"aC":["l","q<i>"],"aC.T":"q<i>"},"ii":{"aC":["q<i>","l"],"aC.T":"l"},"kY":{"aC":["l","q<i>"],"aC.T":"q<i>"},"iR":{"ae":[]},"mc":{"ae":[]},"me":{"aC":["k?","l"],"aC.T":"l"},"md":{"aC":["l","k?"],"aC.T":"k?"},"mh":{"es":[]},"mi":{"aC":["l","q<i>"],"aC.T":"q<i>"},"nT":{"es":[]},"nU":{"aC":["l","q<i>"],"aC.T":"q<i>"},"jB":{"aC":["q<i>","l"],"aC.T":"l"},"DO":{"aw":["DO"]},"aP":{"aw":["aP"]},"aa":{"aW":[],"aw":["aW"]},"aD":{"aw":["aD"]},"i":{"aW":[],"aw":["aW"]},"q":{"K":["1"],"o":["1"]},"aW":{"aw":["aW"]},"mW":{"eA":[]},"eL":{"K":["1"],"o":["1"]},"l":{"aw":["l"]},"aM":{"aw":["DO"]},"kS":{"ae":[]},"df":{"ae":[]},"bB":{"ae":[]},"d7":{"ae":[]},"iI":{"d7":[],"ae":[]},"cT":{"ae":[]},"nM":{"cT":[],"ae":[]},"bn":{"ae":[]},"ld":{"ae":[]},"mE":{"ae":[]},"ju":{"ae":[]},"os":{"G":[]},"bl":{"G":[]},"m6":{"cT":[],"G":[],"ae":[]},"oY":{"aG":[]},"jn":{"o":["i"],"o.E":"i"},"kk":{"nQ":[]},"cb":{"nQ":[]},"on":{"nQ":[]},"mA":{"G":[]},"tA":{"q":["i"],"K":["i"],"o":["i"]},"cR":{"q":["i"],"K":["i"],"o":["i"]},"xP":{"q":["i"],"K":["i"],"o":["i"]},"ty":{"q":["i"],"K":["i"],"o":["i"]},"xN":{"q":["i"],"K":["i"],"o":["i"]},"tz":{"q":["i"],"K":["i"],"o":["i"]},"xO":{"q":["i"],"K":["i"],"o":["i"]},"rT":{"q":["aa"],"K":["aa"],"o":["aa"]},"rU":{"q":["aa"],"K":["aa"],"o":["aa"]},"a4":{"J":["2","3"]},"hc":{"hU":["1","eL<1>"],"hU.E":"1"},"lZ":{"aC":["q<i>","ci"]},"oR":{"aC":["q<i>","ci"],"aC.T":"ci"},"jq":{"G":[]},"n7":{"I":["i"],"q":["i"],"K":["i"],"o":["i"],"I.E":"i"},"mY":{"G":[]},"kZ":{"C9":[]},"l5":{"C9":[]},"dx":{"a9":["q<i>"],"a9.T":"q<i>"},"ej":{"G":[]},"nl":{"jx":[]},"io":{"a4":["l","l","1"],"J":["l","1"],"a4.V":"1","a4.K":"l","a4.C":"l"},"jf":{"CM":[]},"mL":{"CM":[]},"dC":{"G":[]},"lW":{"ag":[]},"lT":{"ag":[]},"fH":{"ag":[]},"lR":{"ag":[]},"fG":{"ag":[]},"fE":{"ag":[]},"hi":{"ag":[]},"fX":{"ag":[]},"im":{"ag":[]},"m0":{"ag":[]},"h7":{"ag":[]},"h8":{"ag":[]},"fT":{"ag":[]},"h3":{"ag":[]},"fz":{"ag":[]},"fA":{"ag":[]},"fM":{"ag":[]},"fn":{"ag":[]},"fD":{"ag":[]},"ha":{"ag":[]},"fx":{"ag":[]},"fw":{"ag":[]},"hn":{"ag":[]},"hu":{"ag":[]},"h0":{"ag":[]},"fu":{"ag":[]},"nw":{"ag":[]},"ns":{"ag":[]},"nz":{"ag":[]},"lb":{"c1":[]},"li":{"c1":[]},"jD":{"c1":[]},"fF":{"c1":[]},"iS":{"cL":[]},"jc":{"cL":[]},"id":{"cL":[]},"ie":{"cL":[]},"nx":{"c1":[]},"kV":{"c1":[]},"eS":{"G":[]},"f6":{"G":[]},"iw":{"r9":[]},"dJ":{"G":[]},"eR":{"G":[]},"eQ":{"G":[]},"eD":{"G":[]},"fr":{"G":[]},"h_":{"G":[]},"fJ":{"G":[]},"cN":{"G":[]},"h5":{"G":[]},"h9":{"G":[]},"eK":{"G":[]},"hq":{"G":[]},"fL":{"G":[]},"hg":{"G":[]},"fS":{"G":[]},"fv":{"G":[]},"eo":{"G":[]},"h4":{"G":[]},"fp":{"G":[]},"ij":{"G":[]},"aj":{"d6":[]},"c3":{"d6":[]},"dv":{"d6":[]},"cZ":{"d6":[]},"hx":{"G":[]},"d4":{"G":[]},"bp":{"G":[]},"eP":{"G":[]},"da":{"G":[]},"hb":{"G":[]},"bM":{"G":[]},"cj":{"G":[]},"cl":{"G":[]},"dQ":{"G":[]},"eG":{"G":[]},"ep":{"G":[]},"dw":{"G":[]},"jj":{"G":[]},"oG":{"Es":[]},"ml":{"eT":[]},"oj":{"o4":[]},"jF":{"hw":[]},"eU":{"hw":[]},"mH":{"G":[]},"lP":{"cr":[],"aw":["cr"]},"hG":{"dc":[],"aw":["ne"]},"cr":{"aw":["cr"]},"nd":{"cr":[],"aw":["cr"]},"ne":{"aw":["ne"]},"nf":{"aw":["ne"]},"ng":{"G":[]},"he":{"bl":[],"G":[]},"hf":{"aw":["ne"]},"dc":{"aw":["ne"]},"c6":{"G":[]},"x5":{"q":["k?"],"K":["k?"],"o":["k?"]},"nW":{"I":["k?"],"x5":[],"q":["k?"],"K":["k?"],"o":["k?"],"I.E":"k?"},"hh":{"el":[]},"m3":{"b6":[]},"ow":{"jC":[],"bq":[]},"c5":{"V":["l","@"],"J":["l","@"],"V.V":"@","V.K":"l"},"n_":{"I":["c5"],"q":["c5"],"K":["c5"],"o":["c5"],"I.E":"c5"},"dh":{"G":[]},"l3":{"b6":[]},"l2":{"jC":[],"bq":[]},"eV":{"b3":["eV"],"b3.E":"eV"},"di":{"CD":[]},"dX":{"CC":[]},"ht":{"I":["di"],"q":["di"],"K":["di"],"o":["di"],"I.E":"di"},"ih":{"a9":["1"],"a9.T":"1"},"dE":{"b6":[]},"b8":{"b3":["b8"]},"ox":{"jC":[],"bq":[]},"jW":{"b8":[],"b3":["b8"],"b3.E":"b8"},"jQ":{"b8":[],"b3":["b8"],"b3.E":"b8"},"hC":{"b8":[],"b3":["b8"],"b3.E":"b8"},"hW":{"b8":[],"b3":["b8"],"b3.E":"b8"},"hd":{"b6":[]},"oV":{"jC":[],"bq":[]},"iq":{"G":[]},"en":{"I":["k?"],"q":["k?"],"K":["k?"],"o":["k?"],"I.E":"k?"},"h6":{"G":[]},"du":{"G":[]},"hz":{"DV":[]},"oo":{"kn":["M"]},"oT":{"kn":["M"]},"nn":{"bl":[],"G":[]},"cw":{"ho":["i"],"I":["i"],"q":["i"],"K":["i"],"o":["i"],"I.E":"i"},"ho":{"I":["1"],"q":["1"],"K":["1"],"o":["1"]},"oy":{"ho":["i"],"I":["i"],"q":["i"],"K":["i"],"o":["i"]},"hF":{"a9":["1"],"a9.T":"1"},"jU":{"bo":["1"]}}'))
A.Kr(v.typeUniverse,JSON.parse('{"iE":1,"nO":1,"hp":1,"ko":2,"iu":1,"fW":1,"bC":1,"jw":1,"p_":1,"oq":1,"p3":2,"iX":2,"k8":1,"kj":2,"l8":1,"la":2,"kc":1,"mz":1,"nP":2,"mX":1,"fs":1,"HK":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("HK<k?>"),bG:s("ef"),om:s("ih<z<k?>>"),hw:s("cC"),lo:s("eg"),fW:s("C8"),jA:s("im"),fo:s("io<l>"),iv:s("a2"),eg:s("DV"),dF:s("C9()"),E:s("ch"),fw:s("el"),bP:s("aw<@>"),p6:s("em"),br:s("ir<M>"),n8:s("bj"),M:s("dz<l>"),lp:s("ls"),O:s("K<@>"),C:s("ae"),fq:s("c1"),mA:s("G"),eZ:s("lF"),d9:s("aY"),oX:s("lM"),A:s("bk"),k4:s("iC"),f6:s("cG"),pk:s("rT"),kI:s("rU"),Y:s("bl"),gY:s("ND"),nW:s("y<M>"),fr:s("y<dL>"),mj:s("y<U>"),g7:s("y<@>"),fP:s("y<d0?>"),n1:s("y<k?>(o4,hv)"),jN:s("y<hs?>"),co:s("dB"),w:s("cH"),cF:s("dE"),m6:s("ty"),bW:s("tz"),jx:s("tA"),nZ:s("iM<@>"),e7:s("o<@>"),gi:s("z<a2>"),aw:s("z<cD<@>>"),oq:s("z<cD<k?>>"),oS:s("z<lf>"),i5:s("z<ci>"),mK:s("z<aY>"),kB:s("z<lS>"),iw:s("z<y<~>>"),mr:s("z<dD>"),kG:s("z<M>"),bi:s("z<q<J<l,k?>>>"),h2:s("z<q<k>>"),ae:s("z<q<eH>>"),dO:s("z<q<k?>>"),kf:s("z<J<l,k>>"),d:s("z<J<l,k?>>"),e8:s("z<ms>"),i7:s("z<eC>"),hf:s("z<k>"),ox:s("z<eE>"),fi:s("z<cm>"),my:s("z<cn>"),k:s("z<d6>"),eK:s("z<cL>"),k1:s("z<h1>"),g2:s("z<jl>"),bo:s("z<jm>"),cM:s("z<eH>"),gc:s("z<mS>"),eb:s("z<aU>"),fU:s("z<+controller,sync(dM<cs>,R)>"),lw:s("z<+controller,sync(dM<~>,R)>"),kC:s("z<+(dR,l)>"),jO:s("z<+(l,J<l,k?>)>"),l5:s("z<+(l,k)>"),fj:s("z<+(l,aY?)>"),iE:s("z<+(l,k?)>"),aY:s("z<+(hA,k?,k?,aG?)>"),g1:s("z<d9>"),cP:s("z<n5>"),kj:s("z<cM>"),lE:s("z<hh>"),c0:s("z<c7>"),dw:s("z<bo<@>>"),s:s("z<l>"),en:s("z<hl>"),bs:s("z<cR>"),fC:s("z<b0>"),az:s("z<hz>"),i4:s("z<hA>"),fV:s("z<hB>"),pg:s("z<bs>"),dg:s("z<cx>"),p8:s("z<oF>"),mc:s("z<hO>"),gy:s("z<hQ>"),gk:s("z<aa>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<an?>"),eU:s("z<J<l,k?>?>"),c:s("z<k?>"),mf:s("z<l?>"),iy:s("bc<@>"),T:s("iO"),m:s("M"),bJ:s("bt"),g:s("bP"),dX:s("bQ<@>"),aq:s("aF"),fZ:s("mf"),kk:s("ex<eV>"),p3:s("ex<b8>"),hI:s("ey<@>"),ba:s("q<bj>"),ck:s("q<bk>"),ip:s("q<M>"),ew:s("q<J<l,k>>"),J:s("q<J<l,k?>>"),eT:s("q<eC>"),hg:s("q<eE>"),a6:s("q<cn>"),jX:s("q<jl>"),kR:s("q<d9>"),fE:s("q<cM>"),i:s("q<l>"),bR:s("q<hl>"),j:s("q<@>"),L:s("q<i>"),oz:s("q<J<l,k?>?>"),kS:s("q<k?>"),jD:s("iU"),ia:s("S<l,dB>"),af:s("S<l,l>"),I:s("S<l,@>"),eB:s("S<l,k?>"),a3:s("iW<@,@>"),cy:s("J<l,cO>"),dV:s("J<l,i>"),f:s("J<@,@>"),G:s("J<l,k?>"),d2:s("J<k?,k?>"),iZ:s("X<l,@>"),r:s("dL"),a:s("fU"),dQ:s("dO"),aj:s("bR"),Z:s("eB"),P:s("U"),K:s("k"),k5:s("cm"),dZ:s("cn"),i0:s("co"),jS:s("d6"),ot:s("mQ"),gq:s("h1"),e:s("b4"),b0:s("d7"),lZ:s("NJ"),oZ:s("aU"),aK:s("+()"),ja:s("+(M,is)"),hP:s("+(J<l,cO>,J<l,J<l,k?>>)"),cU:s("+(dR,l)"),mk:s("+(R,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(R,R)"),mt:s("+(M?,M)"),po:s("+(k?,i)"),g0:s("+(J<l,k?>?,cO?,cn?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mW"),Q:s("d9"),V:s("ag"),hF:s("bw<l>"),cu:s("hc<@>"),aJ:s("eL<l>"),g_:s("hd"),hq:s("cr"),ol:s("dc"),gE:s("nh"),l:s("aG"),nv:s("nj"),h3:s("hj"),ha:s("bo<cs>"),dz:s("bo<@>"),ey:s("bo<~>"),bv:s("nk"),ku:s("a9<q<i>>"),lI:s("dT"),hL:s("jx"),N:s("l"),f_:s("hl"),k6:s("jy"),o8:s("CM"),n6:s("c8"),fD:s("b5"),nw:s("cO"),ic:s("eN"),hU:s("de"),q:s("nE"),dH:s("ak"),do:s("df"),hM:s("xN"),mC:s("xO"),oR:s("cw"),nn:s("xP"),p:s("cR"),cx:s("dW"),ph:s("cS<l,l>"),eo:s("cT"),jJ:s("nQ"),e6:s("b6"),j2:s("jC"),n:s("hs"),fA:s("b0"),gx:s("am<cB>"),mz:s("am<aZ>"),mE:s("am<dV>"),v:s("dY<l>"),u:s("eT"),bp:s("eU"),be:s("o4"),ec:s("hw"),iq:s("aJ<cR>"),jk:s("aJ<@>"),ho:s("aJ<i>"),h:s("aJ<~>"),oW:s("eY<@,@>"),R:s("eZ<M>"),d4:s("hF<M>"),nI:s("w<d0>"),a7:s("w<M>"),hl:s("w<0&>"),os:s("w<l>"),jz:s("w<cR>"),g5:s("w<R>"),_:s("w<@>"),hy:s("w<i>"),jQ:s("w<i?>"),D:s("w<~>"),nf:s("bs"),mp:s("e1<k?,k?>"),mB:s("hK"),k8:s("dl<M>"),fb:s("dl<q<i>>"),mI:s("oU<ci>"),jy:s("e6<cs,~()>"),ag:s("e6<~,R()>"),lU:s("e6<~,~()>"),hT:s("cy<M>"),lj:s("cy<q<i>>"),aP:s("ap<d0>"),h1:s("ap<M>"),ex:s("ap<R>"),F:s("ap<~>"),g8:s("p0"),y:s("R"),W:s("aa"),z:s("@"),mq:s("@(k)"),ng:s("@(k,aG)"),S:s("i"),ma:s("bj?"),gK:s("y<U>?"),b3:s("d0?"),B:s("M?"),bE:s("q<cD<@>>?"),lH:s("q<@>?"),b:s("J<l,k?>?"),nh:s("dL?"),X:s("k?"),ad:s("Es?"),dY:s("cn?"),lY:s("jk?"),jB:s("d9?"),x:s("l?"),f8:s("cO?"),a_:s("cw?"),he:s("hs?"),dd:s("bs?"),o9:s("R?"),dA:s("aa?"),U:s("i?"),jh:s("aW?"),o:s("aW"),H:s("~"),cj:s("~()"),i6:s("~(k)"),b9:s("~(k,aG)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cl=J.m7.prototype
B.b=J.z.prototype
B.c=J.iN.prototype
B.x=J.ev.prototype
B.a=J.dF.prototype
B.cm=J.bP.prototype
B.cn=J.aF.prototype
B.aA=A.j7.prototype
B.d0=A.j9.prototype
B.y=A.ja.prototype
B.f=A.eB.prototype
B.bc=J.mJ.prototype
B.aM=J.dW.prototype
B.ap=new A.du("Operation was cancelled")
B.a6=new A.fm(0,"visible")
B.aP=new A.fm(1,"hidden")
B.bw=new A.kN(1)
B.e8=new A.kN(-1)
B.a7=new A.ef(0,"applied")
B.a8=new A.ef(1,"quarantined")
B.bx=new A.ef(2,"conflict")
B.a9=new A.ef(3,"skipped")
B.by=new A.kR(127)
B.aa=new A.kW(0,"changed")
B.aQ=new A.kW(1,"deleted")
B.bA=new A.ii(!1)
B.aq=new A.kX(B.bA)
B.bB=new A.ii(!0)
B.bz=new A.kX(B.bB)
B.c2=new A.jS(A.ac("jS<q<i>>"))
B.bC=new A.dx(B.c2)
B.bD=new A.iK(A.N3(),A.ac("iK<i>"))
B.bE=new A.kV()
B.ar=new A.kY()
B.bF=new A.l6()
B.bG=new A.l9()
B.F={}
B.a_=new A.aX(B.F,[],A.ac("aX<l,k>"))
B.ed=new A.vi(0,"conflict")
B.e9=new A.qB()
B.aR=new A.r6()
B.bH=new A.lw(A.ac("lw<0&>"))
B.r=new A.lv()
B.aS=new A.lz(A.ac("lz<0&>"))
B.aT=new A.lA()
B.P=new A.lA()
B.bI=new A.m_()
B.bJ=new A.m6()
B.aU=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bK=function() {
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
B.bP=function(getTagFallback) {
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
B.bL=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bO=function(hooks) {
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
B.bN=function(hooks) {
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
B.bM=function(hooks) {
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
B.aV=function(hooks) { return hooks; }

B.h=new A.tF()
B.bQ=new A.uM()
B.k=new A.fX()
B.bR=new A.mE()
B.aW=new A.vS()
B.bS=new A.w0()
B.bT=new A.mP()
B.d=new A.wZ()
B.bU=new A.ni()
B.bV=new A.nq()
B.bW=new A.nr()
B.bX=new A.nt()
B.bY=new A.ny()
B.bZ=new A.nA()
B.o=new A.nT()
B.e=new A.nU()
B.c_=new A.nV()
B.c0=new A.nX()
B.c1=new A.yq()
B.t=new A.zb()
B.ab=new A.zl()
B.as=new A.zT()
B.aX=new A.f6()
B.i=new A.oO()
B.l=new A.oR()
B.c3=new A.Av()
B.Q=new A.oY()
B.ac=new A.dy(0,"create")
B.A=new A.dy(1,"update")
B.c4=new A.dy(2,"archive")
B.c5=new A.dy(3,"restore")
B.at=new A.dy(4,"purge")
B.c6=new A.dy(5,"hide")
B.H=new A.ip(0,"local")
B.au=new A.ip(1,"remote")
B.ad=new A.ip(2,"resolution")
B.c7=new A.le(3,"ignore")
B.R=new A.le(4,"replace")
B.p=new A.ly(0,"normal")
B.aY=new A.ly(1,"full")
B.D=new A.aD(0)
B.av=new A.aD(1e6)
B.aZ=new A.aD(16e3)
B.ea=new A.aD(18e8)
B.c8=new A.aD(2e5)
B.b_=new A.aD(3e5)
B.ae=new A.aD(3e7)
B.S=new A.aD(3e8)
B.af=new A.aD(5e5)
B.c9=new A.aD(5e6)
B.eb=new A.aD(6048e8)
B.ca=new A.aD(7776e9)
B.ec=new A.aD(864e8)
B.aw=new A.c2(0,"text")
B.T=new A.c2(1,"int")
B.U=new A.c2(2,"real")
B.B=new A.c2(3,"bool")
B.V=new A.c2(4,"date")
B.I=new A.c2(5,"enumValue")
B.W=new A.c2(6,"json")
B.X=new A.c2(7,"jsonList")
B.J=new A.c2(8,"ref")
B.cb=new A.iC(!1)
B.ax=new A.dA("x",1,"opfsExternalLocks")
B.b0=new A.dA("y",2,"opfsExternalLocksWorkaround")
B.b1=new A.fI("/database",0,"database")
B.b2=new A.fI("/database-journal",1,"journal")
B.ch=new A.bl("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.ci=new A.bl("fieldCipher envelope must be a map.",null,null)
B.az=new A.aX(B.F,[],A.ac("aX<l,l>"))
B.cj=new A.et(B.az)
B.b3=new A.iJ(0,"live")
B.co=new A.md(null)
B.cp=new A.me(null)
B.cq=new A.d2(0,"textExpected")
B.cr=new A.d2(1,"intExpected")
B.b4=new A.d2(2,"numberExpected")
B.cs=new A.d2(3,"boolExpected")
B.ct=new A.d2(4,"jsonExpected")
B.cu=new A.d2(5,"jsonListExpected")
B.cv=new A.d2(6,"enumValueRejected")
B.cw=new A.mi(255)
B.ay=new A.ey(B.bH,A.ac("ey<l>"))
B.cx=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b5=s([13,10],t.t)
B.aF=new A.cv(0,"unknown")
B.aG=new A.cv(1,"integer")
B.aH=new A.cv(2,"bigInt")
B.aI=new A.cv(3,"float")
B.aJ=new A.cv(4,"text")
B.aK=new A.cv(5,"blob")
B.aL=new A.cv(6,"$null")
B.bq=new A.cv(7,"boolean")
B.b6=s([B.aF,B.aG,B.aH,B.aI,B.aJ,B.aK,B.aL,B.bq],A.ac("z<cv>"))
B.cy=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.bf=new A.aZ(0,"eq")
B.d8=new A.aZ(1,"neq")
B.dc=new A.aZ(2,"gt")
B.dd=new A.aZ(3,"gte")
B.de=new A.aZ(4,"lt")
B.df=new A.aZ(5,"lte")
B.dg=new A.aZ(6,"inValues")
B.dh=new A.aZ(7,"between")
B.di=new A.aZ(8,"startsWith")
B.dj=new A.aZ(9,"endsWith")
B.d9=new A.aZ(10,"contains")
B.da=new A.aZ(11,"isNull")
B.db=new A.aZ(12,"isNotNull")
B.cz=s([B.bf,B.d8,B.dc,B.dd,B.de,B.df,B.dg,B.dh,B.di,B.dj,B.d9,B.da,B.db],A.ac("z<aZ>"))
B.cf=new A.iD(0,"database")
B.cg=new A.iD(1,"journal")
B.b7=s([B.cf,B.cg],A.ac("z<iD>"))
B.br=new A.fm(2,"purged")
B.cA=s([B.a6,B.aP,B.br],A.ac("z<fm>"))
B.z=new A.cP(0,"clean")
B.G=new A.cP(1,"dirty")
B.bn=new A.cP(2,"inFlight")
B.a5=new A.cP(3,"conflict")
B.ao=new A.cP(4,"error")
B.dA=new A.cP(5,"quarantine")
B.dB=new A.cP(6,"blocked")
B.cB=s([B.z,B.G,B.bn,B.a5,B.ao,B.dA,B.dB],A.ac("z<cP>"))
B.Y=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ag=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cC=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.ck=new A.iJ(1,"notArchived")
B.cD=s([B.b3,B.ck],A.ac("z<iJ>"))
B.cE=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.ba=new A.je(0,"fileUpload")
B.bb=new A.je(1,"fileRemove")
B.cF=s([B.ba,B.bb],A.ac("z<je>"))
B.ce=new A.dA("s",0,"opfsShared")
B.cc=new A.dA("i",3,"indexedDb")
B.cd=new A.dA("m",4,"inMemory")
B.cG=s([B.ce,B.ax,B.b0,B.cc,B.cd],A.ac("z<dA>"))
B.ah=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bs=new A.cB(0,"sum")
B.bt=new A.cB(1,"avg")
B.bu=new A.cB(2,"min")
B.bv=new A.cB(3,"max")
B.cH=s([B.bs,B.bt,B.bu,B.bv],A.ac("z<cB>"))
B.cI=s([B.aw,B.T,B.U,B.B,B.V,B.I,B.W,B.X,B.J],A.ac("z<c2>"))
B.m=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ai=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.Z=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cJ=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fY(0,"upsert")
B.L=new A.fY(1,"archive")
B.a2=new A.fY(2,"restore")
B.cK=s([B.v,B.L,B.a2],A.ac("z<fY>"))
B.cL=s([],A.ac("z<dB>"))
B.b8=s([],t.d)
B.cN=s([],t.my)
B.cO=s([],t.kj)
B.u=s([],t.s)
B.cM=s([],t.t)
B.aj=s([],t.dG)
B.n=s([],t.c)
B.cP=s(["*"],t.s)
B.cQ=s([B.b1,B.b2],A.ac("z<fI>"))
B.cR=s(["id","updated"],t.s)
B.cS=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bh=new A.dR(0,"opfs")
B.bi=new A.dR(1,"indexedDb")
B.du=new A.dR(2,"inMemory")
B.cT=s([B.bh,B.bi,B.du],A.ac("z<dR>"))
B.bo=new A.dV(0,"normal")
B.bp=new A.dV(1,"full")
B.cU=s([B.bo,B.bp],A.ac("z<dV>"))
B.ak=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cV=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cW=new A.iU(!0)
B.cX=new A.iG([16,10,24,12,32,14],A.ac("iG<i,i>"))
B.d2={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.mh()
B.q=new A.kQ()
B.cY=new A.aX(B.d2,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.o,B.o],A.ac("aX<l,es>"))
B.al=new A.aX(B.F,[],A.ac("aX<l,i>"))
B.j=new A.aX(B.F,[],A.ac("aX<l,k?>"))
B.am=new A.aX(B.F,[],A.ac("aX<i,J<l,k?>(J<l,k?>)>"))
B.d_=new A.mo(11,"simpleSuccessResponse",A.ac("mo<M>"))
B.a0=new A.dN(0,"createOrUpdate")
B.a1=new A.dN(1,"createOrUpdateMerge")
B.b9=new A.dN(2,"create")
B.K=new A.dN(3,"update")
B.C=new A.dN(4,"archive")
B.E=new A.dN(5,"restore")
B.ee=new A.vx(2,"readWriteCreate")
B.d5=new A.cm("id",!1)
B.d6=new A.co(B.b8,null,null,!1,!1)
B.bd=new A.mK(0,"native")
B.aB=new A.mK(1,"web")
B.M=new A.b4(0,1,0,0,0,!1)
B.an=new A.b4(0,0,0,0,0,!0)
B.a3=new A.b4(0,0,0,0,0,!1)
B.d7=new A.b4(0,0,0,1,0,!1)
B.be=new A.b4(0,0,1,0,0,!1)
B.a4=new A.b4(1,0,0,0,0,!1)
B.dk=new A.a5("archived",!0)
B.dl=new A.a5("0",B.n)
B.aC=new A.k6(!1,!1)
B.dm=new A.f4(0,0,0)
B.dn=new A.f4(null,null,null)
B.d4={id:0,archived:1,hidden:2,extra:3,rowid:4,_rowid_:5,oid:6}
B.aD=new A.dz(B.d4,7,t.M)
B.d1={hidden:0}
B.dp=new A.dz(B.d1,1,t.M)
B.d3={open:0,contract_request:1,contract_event:2}
B.dq=new A.dz(B.d3,3,t.M)
B.bg=new A.dz(B.F,0,t.M)
B.dr=new A.jt(0,"insert")
B.ds=new A.jt(1,"update")
B.dt=new A.jt(2,"delete")
B.dv=new A.jy(-1,null)
B.dw=new A.jz("_clientToken")
B.N=new A.c8(0,"closed")
B.dx=new A.c8(1,"opening")
B.bj=new A.c8(2,"offline")
B.aE=new A.c8(3,"authRequired")
B.bk=new A.c8(4,"idle")
B.dy=new A.c8(5,"pulling")
B.dz=new A.c8(6,"pushing")
B.bl=new A.c8(7,"backoff")
B.bm=new A.c8(8,"paused")
B.O=new A.b5(B.al,B.al,0,0,0,0,!1)
B.dC=new A.eN(B.N,0,0,0,0,null,null,null)
B.dD=A.bK("kL")
B.dE=A.bK("eg")
B.dF=A.bK("C8")
B.dG=A.bK("rT")
B.dH=A.bK("rU")
B.dI=A.bK("ty")
B.dJ=A.bK("tz")
B.dK=A.bK("tA")
B.dL=A.bK("M")
B.dM=A.bK("k")
B.dN=A.bK("jr")
B.dO=A.bK("xN")
B.dP=A.bK("xO")
B.dQ=A.bK("xP")
B.dR=A.bK("cR")
B.aN=new A.jB(!1)
B.dS=new A.jB(!0)
B.dT=new A.dh(14)
B.dU=new A.dh(522)
B.dV=new A.dh(778)
B.dW=new A.AK(B.i,A.M5())
B.dX=new A.AL(B.i,A.M6())
B.dY=new A.AM(B.i,A.M7())
B.dZ=new A.AN(B.i,A.M8())
B.e_=new A.p9(B.i,A.M9())
B.e0=new A.AO(B.i,A.Ma())
B.e1=new A.AP(B.i,A.Mb())
B.e2=new A.AQ(B.i,A.Mc())
B.e3=new A.AR(B.i,A.Md())
B.e4=new A.AT(B.i,A.Mf())
B.e5=new A.AU(B.i,A.Mg())
B.e6=new A.AS(B.i,A.Me())
B.e7=new A.pa(B.i,A.Mh())
B.cZ=new A.aX(B.F,[],A.ac("aX<k?,k?>"))
B.aO=new A.pb(B.i,B.cZ)})();(function staticFields(){$.zV=null
$.fa=A.j([],t.hf)
$.LB=null
$.Ev=null
$.w8=0
$.mN=A.Lq()
$.DT=null
$.DS=null
$.Gv=null
$.Gf=null
$.GF=null
$.Bv=null
$.BJ=null
$.Dp=null
$.A7=A.j([],A.ac("z<q<k>?>"))
$.i0=null
$.kq=null
$.kr=null
$.Dc=!1
$.D=B.i
$.Ab=null
$.EY=null
$.EZ=null
$.F_=null
$.F0=null
$.CU=A.yN("_lastQuoRemDigits")
$.CV=A.yN("_lastQuoRemUsed")
$.jL=A.yN("_lastRemUsed")
$.CW=A.yN("_lastRem_nsh")
$.EP=""
$.EQ=null
$.h2=function(){var s=t.N
return A.u(s,s)}()
$.FH=null
$.B3=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Nz","GW",()=>A.BA("_$dart_dartClosure"))
s($,"Ny","fj",()=>A.BA("_$dart_dartClosure_dartJSInterop"))
s($,"Oc","pu",()=>A.vq(0))
s($,"OA","Hv",()=>B.i.aW(new A.BM(),A.ac("y<~>")))
s($,"Ou","Hs",()=>A.j([new J.m8()],A.ac("z<jo>")))
s($,"NR","H_",()=>A.dg(A.xM({
toString:function(){return"$receiver$"}})))
s($,"NS","H0",()=>A.dg(A.xM({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"NT","H1",()=>A.dg(A.xM(null)))
s($,"NU","H2",()=>A.dg(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"NX","H5",()=>A.dg(A.xM(void 0)))
s($,"NY","H6",()=>A.dg(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"NW","H4",()=>A.dg(A.EM(null)))
s($,"NV","H3",()=>A.dg(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"O_","H8",()=>A.dg(A.EM(void 0)))
s($,"NZ","H7",()=>A.dg(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"O2","DA",()=>A.JI())
s($,"NF","ed",()=>$.Hv())
s($,"NE","GX",()=>A.K0(!1,B.i,t.y))
s($,"Oi","Hi",()=>A.vq(4096))
s($,"Og","Hg",()=>new A.AH().$0())
s($,"Oh","Hh",()=>new A.AG().$0())
s($,"O4","DB",()=>A.IT(A.b9(A.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"O3","H9",()=>A.vq(0))
s($,"Ob","cg",()=>A.jK(0))
s($,"O9","fk",()=>A.jK(1))
s($,"Oa","Hc",()=>A.jK(2))
s($,"O7","DD",()=>$.fk().bD(0))
s($,"O5","DC",()=>A.jK(1e4))
r($,"O8","Hb",()=>A.af("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"O6","Ha",()=>A.vq(8))
s($,"Od","Hd",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Oe","He",()=>A.af("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Of","Hf",()=>typeof URLSearchParams=="function")
s($,"Ol","fl",()=>A.kz(B.dM))
s($,"NK","kE",()=>{A.J3()
return $.w8})
s($,"Om","Hl",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"NI","C2",()=>{var q=new A.zU(A.IS(8))
q.oX()
return q})
s($,"NA","kD",()=>A.HO(B.d0.gab(A.IU(A.b9(A.j([1],t.t)))),0,null).getInt8(0)===1?B.P:B.aT)
s($,"Nr","Dv",()=>A.af("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Oo","C3",()=>A.af("\\r\\n|\\r|\\n",!0,!1))
s($,"NG","GY",()=>A.EA())
s($,"Oj","DE",()=>A.af("^[\\x00-\\x7F]+$",!0,!1))
s($,"Ok","Hj",()=>A.af('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"OC","Hw",()=>A.af('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"On","Hm",()=>A.af("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Or","Hp",()=>A.af('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Oq","Ho",()=>A.af("\\\\(.)",!0,!1))
s($,"Oz","Hu",()=>A.af('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"OD","Hx",()=>A.af("(?:"+$.Hm().a+")*",!0,!1))
s($,"Nv","Dw",()=>A.af("^[0-9a-f]{64}$",!0,!1))
s($,"Ot","Hr",()=>A.EB())
s($,"OB","pv",()=>A.af("^[a-z0-9]{15}$",!0,!1))
r($,"L9","Hk",()=>A.I5().a)
s($,"NB","Dx",()=>A.af("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"Nw","GU",()=>A.Ce("declaredNames",t.aJ))
s($,"Nx","GV",()=>A.Ce("fieldByName",A.ac("J<l,aY>")))
s($,"Op","Hn",()=>A.af("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"NQ","kG",()=>new A.k())
s($,"Ow","ic",()=>new A.qK($.Dy()))
s($,"NN","GZ",()=>new A.w2(A.af("/",!0,!1),A.af("[^/]$",!0,!1),A.af("^/",!0,!1)))
s($,"NP","pt",()=>new A.yb(A.af("[/\\\\]",!0,!1),A.af("[^/\\\\]$",!0,!1),A.af("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.af("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"NO","kF",()=>new A.xS(A.af("/",!0,!1),A.af("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.af("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.af("^/",!0,!1)))
s($,"NM","Dy",()=>A.Ju())
s($,"Nu","GT",()=>$.fk().bE(0,63).bD(0))
s($,"Nt","GS",()=>{var q=$.fk()
return q.bE(0,63).fW(0,q)})
s($,"Ns","ps",()=>A.EB())
s($,"O0","Dz",()=>A.Ce(null,t.S))
s($,"Ov","Ht",()=>A.IG(A.j([A.CL("files"),A.CL("blocks")],t.s)))
s($,"NC","C1",()=>{var q,p,o=A.u(t.N,A.ac("fI"))
for(q=0;q<2;++q){p=B.cQ[q]
o.j(0,p.c,p)}return o})
s($,"Os","Hq",()=>A.EA())
r($,"O1","kH",()=>{var q="navigator"
return A.Ix(A.Iy(A.BC(A.GK(),q),A.CL("locks")))?A.BC(A.BC(A.GK(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fV,ArrayBuffer:A.fU,ArrayBufferView:A.j8,DataView:A.j7,Float32Array:A.mu,Float64Array:A.mv,Int16Array:A.mw,Int32Array:A.mx,Int8Array:A.my,Uint16Array:A.j9,Uint32Array:A.ja,Uint8ClampedArray:A.jb,CanvasPixelArray:A.jb,Uint8Array:A.eB})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fW.$nativeSuperclassTag="ArrayBufferView"
A.k2.$nativeSuperclassTag="ArrayBufferView"
A.k3.$nativeSuperclassTag="ArrayBufferView"
A.dO.$nativeSuperclassTag="ArrayBufferView"
A.k4.$nativeSuperclassTag="ArrayBufferView"
A.k5.$nativeSuperclassTag="ArrayBufferView"
A.bR.$nativeSuperclassTag="ArrayBufferView"})()
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
Function.prototype.$2$0=function(){return this()}
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
var s=A.N1
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
