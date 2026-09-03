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
if(a[b]!==s){A.Ne(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.D5(b)
return new s(c,this)}:function(){if(s===null)s=A.D5(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.D5(a).prototype
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
De(a,b,c,d){return{i:a,p:b,e:c,x:d}},
Bo(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Dc==null){A.ML()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.ED("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.zH
if(o==null)o=$.zH=A.Bn(n)
p=q[o]}if(p!=null)return p
p=A.MT(a)
if(p!=null)return p
if(typeof a=="function")return B.cj
s=Object.getPrototypeOf(a)
if(s==null)return B.ba
if(s===Object.prototype)return B.ba
if(typeof q=="function"){o=$.zH
if(o==null)o=$.zH=A.Bn(n)
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
Ca(a,b){if(a<0||a>4294967295)throw A.b(A.ax(a,0,4294967295,"length",null))
return J.E6(new Array(a),b)},
E5(a,b){if(a<0)throw A.b(A.R("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("B<0>"))},
E4(a,b){if(a<0)throw A.b(A.R("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("B<0>"))},
E6(a,b){var s=A.k(a,b.i("B<0>"))
s.$flags=1
return s},
Ip(a,b){return J.Dv(a,b)},
E7(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Is(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.E7(r))break;++b}return b},
E8(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.E7(r))break}return b},
ds(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iI.prototype
return J.m4.prototype}if(typeof a=="string")return J.dF.prototype
if(a==null)return J.iJ.prototype
if(typeof a=="boolean")return J.m3.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fI.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.j)return a
return J.Bo(a)},
M(a){if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fI.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.j)return a
return J.Bo(a)},
aB(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fI.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.j)return a
return J.Bo(a)},
MD(a){if(typeof a=="number")return J.et.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dV.prototype
return a},
ME(a){if(typeof a=="number")return J.et.prototype
if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dV.prototype
return a},
Bm(a){if(typeof a=="string")return J.dF.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dV.prototype
return a},
kt(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bQ.prototype
if(typeof a=="symbol")return J.fI.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.j)return a
return J.Bo(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ds(a).P(a,b)},
V(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Gp(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.M(a).h(a,b)},
cZ(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Gp(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aB(a).j(a,b,c)},
aL(a,b){return J.aB(a).t(a,b)},
Ds(a,b){return J.aB(a).D(a,b)},
BS(a,b){return J.Bm(a).hA(a,b)},
pp(a){return J.kt(a).mp(a)},
Dt(a,b,c){return J.kt(a).hB(a,b,c)},
Du(a,b,c){return J.kt(a).mq(a,b,c)},
Hq(a){return J.kt(a).mr(a)},
bM(a,b,c){return J.kt(a).hC(a,b,c)},
pq(a,b){return J.aB(a).hF(a,b)},
Hr(a,b,c){return J.MD(a).bO(a,b,c)},
Dv(a,b){return J.ME(a).a0(a,b)},
BT(a,b){return J.M(a).E(a,b)},
pr(a,b){return J.aB(a).a9(a,b)},
kD(a,b){return J.aB(a).cD(a,b)},
Hs(a){return J.kt(a).gab(a)},
bZ(a){return J.aB(a).gG(a)},
a7(a){return J.ds(a).gI(a)},
bA(a){return J.M(a).gF(a)},
ec(a){return J.M(a).gX(a)},
E(a){return J.aB(a).gu(a)},
ps(a){return J.aB(a).ga1(a)},
as(a){return J.M(a).gm(a)},
c_(a){return J.ds(a).gaj(a)},
BU(a){return J.aB(a).gap(a)},
Ht(a,b,c){return J.aB(a).fO(a,b,c)},
Hu(a,b,c){return J.aB(a).aC(a,b,c)},
c0(a,b,c){return J.aB(a).cf(a,b,c)},
Hv(a,b,c){return J.Bm(a).ei(a,b,c)},
Hw(a,b){return J.M(a).sm(a,b)},
Hx(a,b,c,d,e){return J.aB(a).ah(a,b,c,d,e)},
pt(a,b){return J.aB(a).bi(a,b)},
Dw(a,b){return J.aB(a).cl(a,b)},
Hy(a,b){return J.Bm(a).cR(a,b)},
Hz(a,b){return J.Bm(a).S(a,b)},
HA(a,b,c){return J.aB(a).T(a,b,c)},
BV(a,b){return J.aB(a).cM(a,b)},
HB(a){return J.aB(a).eu(a)},
a0(a){return J.ds(a).l(a)},
Dx(a,b){return J.aB(a).ds(a,b)},
Dy(a,b){return J.aB(a).kz(a,b)},
m1:function m1(){},
m3:function m3(){},
iJ:function iJ(){},
aF:function aF(){},
dH:function dH(){},
mD:function mD(){},
dV:function dV(){},
bQ:function bQ(){},
bs:function bs(){},
fI:function fI(){},
B:function B(a){this.$ti=a},
m2:function m2(){},
tw:function tw(a){this.$ti=a},
fj:function fj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
et:function et(){},
iI:function iI(){},
m4:function m4(){},
dF:function dF(){}},A={Cd:function Cd(){},
fl(a,b,c){if(t.O.b(a))return new A.jM(a,b.i("@<0>").W(c).i("jM<1,2>"))
return new A.ef(a,b.i("@<0>").W(c).i("ef<1,2>"))},
Ea(a){return new A.dG("Field '"+a+"' has been assigned during initialization.")},
Eb(a){return new A.dG("Field '"+a+"' has not been initialized.")},
Iw(a){return new A.dG("Field '"+a+"' has already been initialized.")},
eI(a){return new A.mP(a)},
Br(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ay(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hh(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cA(a,b,c){return a},
Dd(a){var s,r
for(s=$.f8.length,r=0;r<s;++r)if(a===$.f8[r])return!0
return!1},
cv(a,b,c,d){A.bd(b,"start")
if(c!=null){A.bd(c,"end")
if(b>c)A.t(A.ax(b,0,c,"start",null))}return new A.cu(a,b,c,d.i("cu<0>"))},
dK(a,b,c,d){if(t.O.b(a))return new A.eo(a,b,c.i("@<0>").W(d).i("eo<1,2>"))
return new A.cl(a,b,c.i("@<0>").W(d).i("cl<1,2>"))},
Ey(a,b,c){var s="takeCount"
A.kK(b,s)
A.bd(b,s)
if(t.O.b(a))return new A.is(a,b,c.i("is<0>"))
return new A.eN(a,b,c.i("eN<0>"))},
Ew(a,b,c){var s="count"
if(t.O.b(a)){A.kK(b,s)
A.bd(b,s)
return new A.fw(a,b,c.i("fw<0>"))}A.kK(b,s)
A.bd(b,s)
return new A.dc(a,b,c.i("dc<0>"))},
aE(){return new A.bl("No element")},
iG(){return new A.bl("Too many elements")},
E2(){return new A.bl("Too few elements")},
n5(a,b,c,d){if(c-b<=32)A.Je(a,b,c,d)
else A.Jd(a,b,c,d)},
Je(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.M(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Jd(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.M(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.n5(a3,a4,r-2,a6)
A.n5(a3,q+2,a5,a6)
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
break}}A.n5(a3,r,q,a6)}else A.n5(a3,r,q,a6)},
yZ:function yZ(a){this.a=0
this.b=a},
yx:function yx(a){this.a=0
this.b=a},
dY:function dY(){},
l2:function l2(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b){this.a=a
this.$ti=b},
jM:function jM(a,b){this.a=a
this.$ti=b},
jJ:function jJ(){},
yy:function yy(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b){this.a=a
this.$ti=b},
pU:function pU(a,b){this.a=a
this.b=b},
pT:function pT(a){this.a=a},
dG:function dG(a){this.a=a},
mP:function mP(a){this.a=a},
ci:function ci(a){this.a=a},
By:function By(){},
wO:function wO(){},
J:function J(){},
Z:function Z(){},
cu:function cu(a,b,c,d){var _=this
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
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
eo:function eo(a,b,c){this.a=a
this.b=b
this.$ti=c},
mg:function mg(a,b,c){var _=this
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
cV:function cV(a,b,c){this.a=a
this.b=b
this.$ti=c},
iw:function iw(a,b,c){this.a=a
this.b=b
this.$ti=c},
lx:function lx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eN:function eN(a,b,c){this.a=a
this.b=b
this.$ti=c},
is:function is(a,b,c){this.a=a
this.b=b
this.$ti=c},
nv:function nv(a,b,c){this.a=a
this.b=b
this.$ti=c},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
fw:function fw(a,b,c){this.a=a
this.b=b
this.$ti=c},
n4:function n4(a,b,c){this.a=a
this.b=b
this.$ti=c},
ep:function ep(a){this.$ti=a},
lu:function lu(a){this.$ti=a},
bH:function bH(a,b){this.a=a
this.$ti=b},
nV:function nV(a,b){this.a=a
this.$ti=b},
iz:function iz(){},
nH:function nH(){},
hk:function hk(){},
bv:function bv(a,b){this.a=a
this.$ti=b},
ju:function ju(a){this.a=a},
kj:function kj(){},
HU(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bF(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.q)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aW(q,A.bF(new A.ak(a,m.i("ak<2>")),!0,c),b.i("@<0>").W(c).i("aW<1,2>"))
n.$keys=l
return n}return new A.io(A.bb(a,b,c),b.i("@<0>").W(c).i("io<1,2>"))},
HV(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
HW(){throw A.b(A.Y("Cannot modify constant Set"))},
GJ(a){var s=A.GI(a)
if(s!=null)return s
return"minified:"+a},
Gp(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a0(a)
return s},
eE(a){var s,r=$.El
if(r==null)r=$.El=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jd(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
IX(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cj(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mG(a){var s,r,q,p
if(a instanceof A.j)return A.bX(A.bz(a),null)
s=J.ds(a)
if(s===B.ci||s===B.ck||t.cx.b(a)){r=B.aS(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bX(A.bz(a),null)},
En(a){var s,r,q
if(a==null||typeof a=="number"||A.bx(a))return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ei)return a.l(0)
if(a instanceof A.hI)return a.md(!0)
s=$.Hk()
for(r=0;r<1;++r){q=s[r].wU(a)
if(q!=null)return q}return"Instance of '"+A.mG(a)+"'"},
IT(){return Date.now()},
IW(){var s,r
if($.vY!==0)return
$.vY=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.vY=1e6
$.mH=new A.vX(r)},
IS(){if(!!self.location)return self.location.href
return null},
Ek(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
IY(a){var s,r,q,p=A.k([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
if(!A.au(q))throw A.b(A.fa(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.af(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fa(q))}return A.Ek(p)},
Eo(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.au(q))throw A.b(A.fa(q))
if(q<0)throw A.b(A.fa(q))
if(q>65535)return A.IY(a)}return A.Ek(a)},
IZ(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bu(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.af(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ax(a,0,1114111,null,null))},
J_(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.ak(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bt(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Co(a){return a.c?A.bt(a).getUTCFullYear()+0:A.bt(a).getFullYear()+0},
Cm(a){return a.c?A.bt(a).getUTCMonth()+1:A.bt(a).getMonth()+1},
vW(a){return a.c?A.bt(a).getUTCDate()+0:A.bt(a).getDate()+0},
Ck(a){return a.c?A.bt(a).getUTCHours()+0:A.bt(a).getHours()+0},
Cl(a){return a.c?A.bt(a).getUTCMinutes()+0:A.bt(a).getMinutes()+0},
Cn(a){return a.c?A.bt(a).getUTCSeconds()+0:A.bt(a).getSeconds()+0},
Em(a){return a.c?A.bt(a).getUTCMilliseconds()+0:A.bt(a).getMilliseconds()+0},
IV(a){return B.c.ak((a.c?A.bt(a).getUTCDay()+0:A.bt(a).getDay()+0)+6,7)+1},
IU(a){var s=a.$thrownJsError
if(s==null)return null
return A.ac(s)},
mI(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
Bh(a,b){var s,r="index"
if(!A.au(b))return new A.bB(!0,b,r,null)
s=J.as(a)
if(b<0||b>=s)return A.lZ(b,s,a,null,r)
return A.wB(b,r)},
Mt(a,b,c){if(a<0||a>c)return A.ax(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ax(b,a,c,"end",null)
return new A.bB(!0,b,"end",null)},
fa(a){return new A.bB(!0,a,null,null)},
b(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.df()
b.dartException=a
s=A.Nf
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Nf(){return J.a0(this.dartException)},
t(a,b){throw A.aK(a,b==null?new Error():b)},
H(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.t(A.KU(a,b,c),s)},
KU(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.cU("'"+s+"': Cannot "+o+" "+l+k+n)},
q(a){throw A.b(A.aA(a))},
dg(a){var s,r,q,p,o,n
a=A.Gy(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.xy(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
xz(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
EC(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Ce(a,b){var s=b==null,r=s?null:b.method
return new A.m5(a,r,s?null:b.receiver)},
D(a){if(a==null)return new A.mv(a)
if(a instanceof A.iu)return A.ea(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ea(a,a.dartException)
return A.LP(a)},
ea(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
LP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.af(r,16)&8191)===10)switch(q){case 438:return A.ea(a,A.Ce(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.ea(a,new A.j8())}}if(a instanceof TypeError){p=$.GS()
o=$.GT()
n=$.GU()
m=$.GV()
l=$.GY()
k=$.GZ()
j=$.GX()
$.GW()
i=$.H0()
h=$.H_()
g=p.bQ(s)
if(g!=null)return A.ea(a,A.Ce(s,g))
else{g=o.bQ(s)
if(g!=null){g.method="call"
return A.ea(a,A.Ce(s,g))}else if(n.bQ(s)!=null||m.bQ(s)!=null||l.bQ(s)!=null||k.bQ(s)!=null||j.bQ(s)!=null||m.bQ(s)!=null||i.bQ(s)!=null||h.bQ(s)!=null)return A.ea(a,new A.j8())}return A.ea(a,new A.nG(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jp()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ea(a,new A.bB(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jp()
return a},
ac(a){var s
if(a instanceof A.iu)return a.b
if(a==null)return new A.k4(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.k4(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ku(a){if(a==null)return J.a7(a)
if(typeof a=="object")return A.eE(a)
return J.a7(a)},
Mh(a){if(typeof a=="number")return B.x.gI(a)
if(a instanceof A.oV)return A.eE(a)
if(a instanceof A.hI)return a.gI(a)
if(a instanceof A.ju)return a.gI(0)
return A.ku(a)},
Gl(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
MB(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
L6(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.DT("Unsupported number of arguments for wrapped closure"))},
e8(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Mm(a,b)
a.$identity=s
return s},
Mm(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.L6)},
HO(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.wZ().constructor.prototype):Object.create(new A.ig(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.DM(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.HK(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.DM(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
HK(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.HF)}throw A.b("Error in functionType of tearoff")},
HL(a,b,c,d){var s=A.DJ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
DM(a,b,c,d){if(c)return A.HN(a,b,d)
return A.HL(b.length,d,a,b)},
HM(a,b,c,d){var s=A.DJ,r=A.HG
switch(b?-1:a){case 0:throw A.b(new A.mY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
HN(a,b,c){var s,r
if($.DH==null)$.DH=A.DG("interceptor")
if($.DI==null)$.DI=A.DG("receiver")
s=b.length
r=A.HM(s,c,a,b)
return r},
D5(a){return A.HO(a)},
HF(a,b){return A.kd(v.typeUniverse,A.bz(a.a),b)},
DJ(a){return a.a},
HG(a){return a.b},
DG(a){var s,r,q,p=new A.ig("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.R("Field name "+a+" not found.",null))},
Bn(a){return v.getIsolateTag(a)},
Ni(a,b){var s=$.C
if(s===B.i)return a
return s.hE(a,b)},
GC(){return v.G},
Op(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
MT(a){var s,r,q,p,o,n=$.Gn.$1(a),m=$.Bi[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Bv[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.G6.$2(a,n)
if(q!=null){m=$.Bi[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Bv[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.Bx(s)
$.Bi[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.Bv[n]=s
return s}if(p==="-"){o=A.Bx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Gv(a,s)
if(p==="*")throw A.b(A.ED(n))
if(v.leafTags[n]===true){o=A.Bx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Gv(a,s)},
Gv(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.De(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
Bx(a){return J.De(a,!1,null,!!a.$ibR)},
MV(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.Bx(s)
else return J.De(s,c,null,null)},
ML(){if(!0===$.Dc)return
$.Dc=!0
A.MM()},
MM(){var s,r,q,p,o,n,m,l
$.Bi=Object.create(null)
$.Bv=Object.create(null)
A.MK()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Gx.$1(o)
if(n!=null){m=A.MV(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
MK(){var s,r,q,p,o,n,m=B.bH()
m=A.i_(B.bI,A.i_(B.bJ,A.i_(B.aT,A.i_(B.aT,A.i_(B.bK,A.i_(B.bL,A.i_(B.bM(B.aS),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Gn=new A.Bs(p)
$.G6=new A.Bt(o)
$.Gx=new A.Bu(n)},
i_(a,b){return a(b)||b},
Kb(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
Mq(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
Cc(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
N8(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eu){s=B.a.ae(a,c)
return b.b.test(s)}else return!J.BS(b,B.a.ae(a,c)).gF(0)},
Gj(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Gy(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.Na(a,b,c)
if(b instanceof A.eu){s=b.glL()
s.lastIndex=0
return a.replace(s,A.Gj(c))}return A.N9(a,b,c)},
N9(a,b,c){var s,r,q,p
for(s=J.BS(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Na(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Gy(b),"g"),A.Gj(c))},
FY(a){return a},
GD(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hA(0,a),s=new A.o1(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.FY(B.a.A(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.FY(B.a.ae(a,q)))
return s.charCodeAt(0)==0?s:s},
Nb(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.GE(a,s,s+b.length,c)},
GE(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a4:function a4(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
oD:function oD(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
oE:function oE(a){this.a=a},
io:function io(a,b){this.a=a
this.$ti=b},
ft:function ft(){},
qC:function qC(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b){this.a=a
this.$ti=b},
hE:function hE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iB:function iB(a,b){this.a=a
this.$ti=b},
ip:function ip(){},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
tq:function tq(){},
iF:function iF(a,b){this.a=a
this.$ti=b},
vX:function vX(a){this.a=a},
jj:function jj(){},
xy:function xy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j8:function j8(){},
m5:function m5(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function nG(a){this.a=a},
mv:function mv(a){this.a=a},
iu:function iu(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a
this.b=null},
ei:function ei(){},
pZ:function pZ(){},
q_:function q_(){},
xo:function xo(){},
wZ:function wZ(){},
ig:function ig(a,b){this.a=a
this.b=b},
mY:function mY(a){this.a=a},
bD:function bD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tx:function tx(a){this.a=a},
uz:function uz(a,b){var _=this
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
ak:function ak(a,b){this.a=a
this.$ti=b},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aN:function aN(a,b){this.a=a
this.$ti=b},
md:function md(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iL:function iL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iK:function iK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
Bs:function Bs(a){this.a=a},
Bt:function Bt(a){this.a=a},
Bu:function Bu(a){this.a=a},
hI:function hI(){},
oA:function oA(){},
oB:function oB(){},
oC:function oC(){},
eu:function eu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hH:function hH(a){this.b=a},
o0:function o0(a,b,c){this.a=a
this.b=b
this.c=c},
o1:function o1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hf:function hf(a,b){this.a=a
this.c=b},
oQ:function oQ(a,b,c){this.a=a
this.b=b
this.c=c},
Af:function Af(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Ne(a){throw A.aK(A.Ea(a),new Error())},
v(){throw A.aK(A.Eb(""),new Error())},
cf(){throw A.aK(A.Iw(""),new Error())},
BM(){throw A.aK(A.Ea(""),new Error())},
CM(){var s=new A.o9("")
return s.b=s},
yz(a){var s=new A.o9(a)
return s.b=s},
o9:function o9(a){this.a=a
this.b=null},
hV(a,b,c){},
b7(a){var s,r,q
if(t.iy.b(a))return a
s=J.M(a)
r=A.ae(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
IL(a){return new DataView(new ArrayBuffer(a))},
Ef(a,b,c){A.hV(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d7(a,b,c){A.hV(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
IM(a){return new Int8Array(a)},
IN(a){return new Uint16Array(a)},
Eg(a,b,c){A.hV(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
vf(a){return new Uint8Array(a)},
bT(a,b,c){A.hV(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dn(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.Bh(b,a))},
dp(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Mt(a,b,c))
if(b==null)return c
return b},
fQ:function fQ(){},
fP:function fP(){},
j3:function j3(){},
oY:function oY(a){this.a=a},
j2:function j2(){},
fR:function fR(){},
dO:function dO(){},
bS:function bS(){},
mo:function mo(){},
mp:function mp(){},
mq:function mq(){},
mr:function mr(){},
ms:function ms(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
ez:function ez(){},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(){},
Cs(a,b){var s=b.c
return s==null?b.c=A.kb(a,"A",[b.x]):s},
Et(a){var s=a.w
if(s===6||s===7)return A.Et(a.x)
return s===11||s===12},
J8(a){return a.as},
Gu(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ab(a){return A.Al(v.typeUniverse,a,!1)},
MO(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.e6(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
e6(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e6(a1,s,a3,a4)
if(r===s)return a2
return A.F7(a1,r,!0)
case 7:s=a2.x
r=A.e6(a1,s,a3,a4)
if(r===s)return a2
return A.F6(a1,r,!0)
case 8:q=a2.y
p=A.hZ(a1,q,a3,a4)
if(p===q)return a2
return A.kb(a1,a2.x,p)
case 9:o=a2.x
n=A.e6(a1,o,a3,a4)
m=a2.y
l=A.hZ(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.CQ(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hZ(a1,j,a3,a4)
if(i===j)return a2
return A.F8(a1,k,i)
case 11:h=a2.x
g=A.e6(a1,h,a3,a4)
f=a2.y
e=A.LJ(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.F5(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hZ(a1,d,a3,a4)
o=a2.x
n=A.e6(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.CR(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kO("Attempted to substitute unexpected RTI kind "+a0))}},
hZ(a,b,c,d){var s,r,q,p,o=b.length,n=A.Av(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e6(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
LK(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.Av(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e6(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
LJ(a,b,c,d){var s,r=b.a,q=A.hZ(a,r,c,d),p=b.b,o=A.hZ(a,p,c,d),n=b.c,m=A.LK(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.on()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
pg(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.MF(s)
return a.$S()}return null},
MN(a,b){var s
if(A.Et(b))if(a instanceof A.ei){s=A.pg(a)
if(s!=null)return s}return A.bz(a)},
bz(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.a_(a)
return A.D_(J.ds(a))},
a_(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.D_(a)},
D_(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.L4(a,s)},
L4(a,b){var s=a instanceof A.ei?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Kl(v.typeUniverse,s.name)
b.$ccache=r
return r},
MF(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.Al(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dt(a){return A.bK(A.n(a))},
Db(a){var s=A.pg(a)
return A.bK(s==null?A.bz(a):s)},
D2(a){var s
if(a instanceof A.hI)return a.lz()
s=a instanceof A.ei?A.pg(a):null
if(s!=null)return s
if(t.dH.b(a))return J.c_(a).a
if(Array.isArray(a))return A.a_(a)
return A.bz(a)},
bK(a){var s=a.r
return s==null?a.r=new A.oV(a):s},
Mx(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kd(v.typeUniverse,A.D2(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Fa(v.typeUniverse,s,A.D2(q[r]))
return A.kd(v.typeUniverse,s,a)},
bL(a){return A.bK(A.Al(v.typeUniverse,a,!1))},
L3(a){var s=this
s.b=A.LH(s)
return s.b(a)},
LH(a){var s,r,q,p
if(a===t.K)return A.Lc
if(A.fd(a))return A.Lg
s=a.w
if(s===6)return A.L0
if(s===1)return A.FG
if(s===7)return A.L7
r=A.LG(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.fd)){a.f="$i"+q
if(q==="p")return A.La
if(a===t.m)return A.L9
return A.Lf}}else if(s===10){p=A.Mq(a.x,a.y)
return p==null?A.FG:p}return A.KZ},
LG(a){if(a.w===8){if(a===t.S)return A.au
if(a===t.W||a===t.o)return A.Lb
if(a===t.N)return A.Le
if(a===t.y)return A.bx}return null},
L2(a){var s=this,r=A.KY
if(A.fd(s))r=A.Kz
else if(s===t.K)r=A.Ky
else if(A.i2(s)){r=A.L_
if(s===t.U)r=A.bf
else if(s===t.x)r=A.a6
else if(s===t.o9)r=A.Fp
else if(s===t.jh)r=A.Ft
else if(s===t.dA)r=A.Fq
else if(s===t.B)r=A.Fr}else if(s===t.S)r=A.aq
else if(s===t.N)r=A.G
else if(s===t.y)r=A.hU
else if(s===t.o)r=A.Fs
else if(s===t.W)r=A.f6
else if(s===t.m)r=A.bg
s.a=r
return s.a(a)},
KZ(a){var s=this
if(a==null)return A.i2(s)
return A.MR(v.typeUniverse,A.MN(a,s),s)},
L0(a){if(a==null)return!0
return this.x.b(a)},
Lf(a){var s,r=this
if(a==null)return A.i2(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.ds(a)[s]},
La(a){var s,r=this
if(a==null)return A.i2(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.ds(a)[s]},
L9(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
FF(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
KY(a){var s=this
if(a==null){if(A.i2(s))return a}else if(s.b(a))return a
throw A.aK(A.Fz(a,s),new Error())},
L_(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.Fz(a,s),new Error())},
Fz(a,b){return new A.k9("TypeError: "+A.EX(a,A.bX(b,null)))},
EX(a,b){return A.it(a)+": type '"+A.bX(A.D2(a),null)+"' is not a subtype of type '"+b+"'"},
cd(a,b){return new A.k9("TypeError: "+A.EX(a,b))},
L7(a){var s=this
return s.x.b(a)||A.Cs(v.typeUniverse,s).b(a)},
Lc(a){return a!=null},
Ky(a){if(a!=null)return a
throw A.aK(A.cd(a,"Object"),new Error())},
Lg(a){return!0},
Kz(a){return a},
FG(a){return!1},
bx(a){return!0===a||!1===a},
hU(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.cd(a,"bool"),new Error())},
Fp(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.cd(a,"bool?"),new Error())},
f6(a){if(typeof a=="number")return a
throw A.aK(A.cd(a,"double"),new Error())},
Fq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.cd(a,"double?"),new Error())},
au(a){return typeof a=="number"&&Math.floor(a)===a},
aq(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.cd(a,"int"),new Error())},
bf(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.cd(a,"int?"),new Error())},
Lb(a){return typeof a=="number"},
Fs(a){if(typeof a=="number")return a
throw A.aK(A.cd(a,"num"),new Error())},
Ft(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.cd(a,"num?"),new Error())},
Le(a){return typeof a=="string"},
G(a){if(typeof a=="string")return a
throw A.aK(A.cd(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.cd(a,"String?"),new Error())},
bg(a){if(A.FF(a))return a
throw A.aK(A.cd(a,"JSObject"),new Error())},
Fr(a){if(a==null)return a
if(A.FF(a))return a
throw A.aK(A.cd(a,"JSObject?"),new Error())},
FT(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bX(a[q],b)
return s},
Lw(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.FT(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bX(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
FD(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.k([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bX(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bX(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bX(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bX(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bX(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bX(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bX(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bX(a.x,b)+">"
if(m===8){p=A.LO(a.x)
o=a.y
return o.length>0?p+("<"+A.FT(o,b)+">"):p}if(m===10)return A.Lw(a,b)
if(m===11)return A.FD(a,b,null)
if(m===12)return A.FD(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
LO(a){var s=A.GI(a)
if(s!=null)return s
return"minified:"+a},
Km(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Kl(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.Al(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kc(a,5,"#")
q=A.Av(s)
for(p=0;p<s;++p)q[p]=r
o=A.kb(a,b,q)
n[b]=o
return o}else return m},
Kk(a,b){return A.Fn(a.tR,b)},
Kj(a,b){return A.Fn(a.eT,b)},
Al(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.F9(a,null,b,!1)
r.set(b,s)
return s},
kd(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.F9(a,b,c,!0)
q.set(c,r)
return r},
Fa(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.CQ(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
F9(a,b,c,d){return A.K9(A.K3(a,b,c,d))},
e5(a,b){b.a=A.L2
b.b=A.L3
return b},
kc(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cq(null,null)
s.w=b
s.as=c
r=A.e5(a,s)
a.eC.set(c,r)
return r},
F7(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Kh(a,b,r,c)
a.eC.set(r,s)
return s},
Kh(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.fd(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.i2(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cq(null,null)
q.w=6
q.x=b
q.as=c
return A.e5(a,q)},
F6(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Kf(a,b,r,c)
a.eC.set(r,s)
return s},
Kf(a,b,c,d){var s,r
if(d){s=b.w
if(A.fd(b)||b===t.K)return b
else if(s===1)return A.kb(a,"A",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cq(null,null)
r.w=7
r.x=b
r.as=c
return A.e5(a,r)},
Ki(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cq(null,null)
s.w=13
s.x=b
s.as=q
r=A.e5(a,s)
a.eC.set(q,r)
return r},
ka(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ke(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kb(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ka(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cq(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e5(a,r)
a.eC.set(p,q)
return q},
CQ(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ka(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cq(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e5(a,o)
a.eC.set(q,n)
return n},
F8(a,b,c){var s,r,q="+"+(b+"("+A.ka(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cq(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e5(a,s)
a.eC.set(q,r)
return r},
F5(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ka(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ka(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ke(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cq(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e5(a,p)
a.eC.set(r,o)
return o},
CR(a,b,c,d){var s,r=b.as+("<"+A.ka(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Kg(a,b,c,r,d)
a.eC.set(r,s)
return s},
Kg(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.Av(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e6(a,b,r,0)
m=A.hZ(a,c,r,0)
return A.CR(a,n,m,c!==m)}}l=new A.cq(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e5(a,l)},
K3(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
K9(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.K5(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.F1(a,r,l,k,!1)
else if(q===46)r=A.F1(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f1(a.u,a.e,k.pop()))
break
case 94:k.push(A.Ki(a.u,k.pop()))
break
case 35:k.push(A.kc(a.u,5,"#"))
break
case 64:k.push(A.kc(a.u,2,"@"))
break
case 126:k.push(A.kc(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.K7(a,k)
break
case 38:A.K6(a,k)
break
case 63:p=a.u
k.push(A.F7(p,A.f1(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.F6(p,A.f1(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.K4(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.F2(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Ka(a.u,a.e,o)
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
return A.f1(a.u,a.e,m)},
K5(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
F1(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Km(s,o.x)[p]
if(n==null)A.t('No "'+p+'" in "'+A.J8(o)+'"')
d.push(A.kd(s,o,n))}else d.push(p)
return m},
K7(a,b){var s,r=a.u,q=A.F0(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kb(r,p,q))
else{s=A.f1(r,a.e,p)
switch(s.w){case 11:b.push(A.CR(r,s,q,a.n))
break
default:b.push(A.CQ(r,s,q))
break}}},
K4(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.F0(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f1(p,a.e,o)
q=new A.on()
q.a=s
q.b=n
q.c=m
b.push(A.F5(p,r,q))
return
case-4:b.push(A.F8(p,b.pop(),s))
return
default:throw A.b(A.kO("Unexpected state under `()`: "+A.r(o)))}},
K6(a,b){var s=b.pop()
if(0===s){b.push(A.kc(a.u,1,"0&"))
return}if(1===s){b.push(A.kc(a.u,4,"1&"))
return}throw A.b(A.kO("Unexpected extended operation "+A.r(s)))},
F0(a,b){var s=b.splice(a.p)
A.F2(a.u,a.e,s)
a.p=b.pop()
return s},
f1(a,b,c){if(typeof c=="string")return A.kb(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.K8(a,b,c)}else return c},
F2(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f1(a,b,c[s])},
Ka(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f1(a,b,c[s])},
K8(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kO("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kO("Bad index "+c+" for "+b.l(0)))},
MR(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aU(a,b,null,c,null)
r.set(c,s)}return s},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.fd(d))return!0
s=b.w
if(s===4)return!0
if(A.fd(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aU(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aU(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aU(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aU(a,b.x,c,d,e))return!1
return A.aU(a,A.Cs(a,b),c,d,e)}if(s===6)return A.aU(a,p,c,d,e)&&A.aU(a,b.x,c,d,e)
if(q===7){if(A.aU(a,b,c,d.x,e))return!0
return A.aU(a,b,c,A.Cs(a,d),e)}if(q===6)return A.aU(a,b,c,p,e)||A.aU(a,b,c,d.x,e)
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
if(!A.aU(a,j,c,i,e)||!A.aU(a,i,e,j,c))return!1}return A.FE(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.FE(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.L8(a,b,c,d,e)}if(o&&q===10)return A.Ld(a,b,c,d,e)
return!1},
FE(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aU(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aU(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aU(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aU(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aU(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
L8(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kd(a,b,r[o])
return A.Fo(a,p,null,c,d.y,e)}return A.Fo(a,b.y,null,c,d.y,e)},
Fo(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aU(a,b[s],d,e[s],f))return!1
return!0},
Ld(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aU(a,r[s],c,q[s],e))return!1
return!0},
i2(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.fd(a))if(s!==6)r=s===7&&A.i2(a.x)
return r},
fd(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Fn(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
Av(a){return a>0?new Array(a):v.typeUniverse.sEA},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
on:function on(){this.c=this.b=this.a=null},
oV:function oV(a){this.a=a},
ok:function ok(){},
k9:function k9(a){this.a=a},
JA(){var s,r,q
if(self.scheduleImmediate!=null)return A.LS()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e8(new A.yf(s),1)).observe(r,{childList:true})
return new A.ye(s,r,q)}else if(self.setImmediate!=null)return A.LT()
return A.LU()},
JB(a){self.scheduleImmediate(A.e8(new A.yg(a),0))},
JC(a){self.setImmediate(A.e8(new A.yh(a),0))},
JD(a){A.CD(B.D,a)},
CD(a,b){var s=B.c.M(a.a,1000)
return A.Kc(s<0?0:s,b)},
Ez(a,b){var s=B.c.M(a.a,1000)
return A.Kd(s<0?0:s,b)},
Kc(a,b){var s=new A.k8(!0)
s.oN(a,b)
return s},
Kd(a,b){var s=new A.k8(!1)
s.oO(a,b)
return s},
h(a){return new A.jC(new A.w($.C,a.i("w<0>")),a.i("jC<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.Fu(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.c7(A.D(a),A.ac(a))},
Fu(a,b){var s,r,q=new A.AJ(b),p=new A.AK(b)
if(a instanceof A.w)a.mb(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.bq(q,p,s)
else{r=new A.w($.C,t._)
r.a=8
r.c=a
r.mb(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fw(new A.B1(s),t.H,t.S,t.z)},
bV(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cV(null)
else{s=c.a
s===$&&A.v()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.D(a)
q=A.ac(a)
s.al(new A.an(r,q))}else{s=A.D(a)
r=A.ac(a)
q=c.a
q===$&&A.v()
q.bx(s,r)
c.a.q()}return}if(a instanceof A.jU){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.v()
r.t(0,s)
A.kx(new A.AH(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.v()
s.ty(p,!1).V(new A.AI(c,b),t.P)
return}}A.Fu(a,b)},
FX(a){var s=a.a
s===$&&A.v()
return new A.b5(s,A.n(s).i("b5<1>"))},
JE(a,b){var s=new A.o3(b.i("o3<0>"))
s.oJ(a,b)
return s},
FH(a,b){return A.JE(a,b)},
K_(a){return new A.jU(a,1)},
e0(a){return new A.jU(a,0)},
F4(a,b,c){return 0},
ic(a){var s
if(t.C.b(a)){s=a.gcm()
if(s!=null)return s}return B.Q},
iA(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.D(q)
r=A.ac(q)
p=new A.w($.C,b.i("w<0>"))
o=s
n=r
m=A.kk(o,n)
if(m==null)o=new A.an(o,n==null?A.ic(o):n)
else o=m
p.cn(o)
return p}return b.i("A<0>").b(l)?l:A.bw(l,b)},
b9(a,b){var s=a==null?b.a(a):a,r=new A.w($.C,b.i("w<0>"))
r.aD(s)
return r},
Ig(a,b){var s
if(!b.b(null))throw A.b(A.az(null,"computation","The type parameter is not nullable"))
s=new A.w($.C,b.i("w<0>"))
A.cR(a,new A.rW(null,s,b))
return s},
C6(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.C,b.i("w<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.rY(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bq(new A.rX(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cV(A.k([],b.i("B<0>")))
return n}i.a=A.ae(n,null,!1,b.i("0?"))}catch(l){p=A.D(l)
o=A.ac(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kk(m,k)
if(j==null)m=new A.an(m,k==null?A.ic(m):k)
else m=j
n.cn(m)
return n}else{i.d=p
i.c=o}}return f},
C5(a,b,c,d){var s=new A.rR(d,null,b,c),r=$.C,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fw(s,c.i("0/"),t.K,t.l)
a.dD(new A.cb(q,2,null,s,a.$ti.i("@<1>").W(c).i("cb<1,2>")))
return q},
Ie(a,b){var s,r,q,p=A.k([],b.i("B<jS<0>>"))
for(s=a.length,r=b.i("jS<0>"),q=0;q<a.length;a.length===s||(0,A.q)(a),++q)p.push(new A.jS(a[q],r))
if(p.length===0)return A.b9(A.k([],b.i("B<0>")),b.i("p<0>"))
s=new A.w($.C,b.i("w<p<0>>"))
A.JU(p,new A.rS(new A.ap(s,b.i("ap<p<0>>")),p,b))
return s},
Ll(a){return a!=null},
JU(a,b){var s,r={},q=r.a=r.b=0,p=new A.ze(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.q)(a),++q)a[q].te(p)},
kk(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.mJ(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mI(r,q)
return s},
f7(a,b){var s
if($.C!==B.i){s=A.kk(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcm()
if(b==null){A.mI(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.C.b(a))A.mI(a,b)
return new A.an(a,b)},
JT(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bw(a,b){var s=new A.w($.C,b.i("w<0>"))
s.a=8
s.c=a
return s},
zk(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.Cv()
b.cn(new A.an(new A.bB(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lR(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eS()
b.fY(p.a)
A.eY(b,q)
return}b.a^=2
b.b.cP(new A.zl(p,b))},
eY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.ff(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.eY(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gca()===k.gca())}else f=!1
if(f){f=g.a
r=f.c
f.b.ff(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.zp(s,g,p).$0()
else if(q){if((f&1)!==0)new A.zo(s,m).$0()}else if((f&2)!==0)new A.zn(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("A<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hk(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.zk(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hk(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
FN(a,b){if(t.ng.b(a))return b.fw(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dk(a,t.z,t.K)
throw A.b(A.az(a,"onError",u.w))},
Lk(){var s,r
for(s=$.hX;s!=null;s=$.hX){$.km=null
r=s.b
$.hX=r
if(r==null)$.kl=null
s.a.$0()}},
LI(){$.D0=!0
try{A.Lk()}finally{$.km=null
$.D0=!1
if($.hX!=null)$.Dn().$1(A.G9())}},
FV(a){var s=new A.o2(a),r=$.kl
if(r==null){$.hX=$.kl=s
if(!$.D0)$.Dn().$1(A.G9())}else $.kl=r.b=s},
LF(a){var s,r,q,p=$.hX
if(p==null){A.FV(a)
$.km=$.kl
return}s=new A.o2(a)
r=$.km
if(r==null){s.b=p
$.hX=$.km=s}else{q=r.b
s.b=q
$.km=r.b=s
if(q==null)$.kl=s}},
kx(a){var s,r=null,q=$.C
if(B.i===q){A.B_(r,r,B.i,a)
return}if(B.i===q.gjy().a)s=B.i.gca()===q.gca()
else s=!1
if(s){A.B_(r,r,q,q.bT(a,t.H))
return}s=$.C
s.cP(s.f_(a))},
Cx(a,b){var s=null,r=b.i("cW<0>"),q=new A.cW(s,s,s,s,r)
q.aA(a)
q.l8()
return new A.b5(q,r.i("b5<1>"))},
ND(a,b){return new A.cz(A.cA(a,"stream",t.K),b.i("cz<0>"))},
x0(a,b,c,d,e){return d?new A.hP(b,null,c,a,e.i("hP<0>")):new A.cW(b,null,c,a,e.i("cW<0>"))},
dR(a,b,c){return new A.jD(b,a,c.i("jD<0>"))},
pc(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.D(q)
r=A.ac(q)
$.C.ff(s,r)}},
JR(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.o7(s,b,f),o=A.yu(s,c),n=d==null?A.B2():d
return new A.dZ(a,p,o,s.bT(n,t.H),s,r|q,f.i("dZ<0>"))},
Jz(a){return new A.yb(a)},
o7(a,b,c){var s=b==null?A.LW():b
return a.dk(s,t.H,c)},
yu(a,b){if(b==null)b=A.LX()
if(t.b9.b(b))return a.fw(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dk(b,t.z,t.K)
throw A.b(A.R("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Lm(a){},
Lo(a,b){$.C.ff(a,b)},
Ln(){},
EW(a,b){var s=$.C,r=new A.hA(s,b.i("hA<0>"))
A.kx(r.glN())
if(a!=null)r.c=s.bT(a,t.H)
return r},
KH(a,b,c){var s=a.C()
if(s!==$.eb())s.aY(new A.AM(b,c))
else b.al(c)},
KI(a,b,c){var s=a.C()
if(s!==$.eb())s.aY(new A.AN(b,c))
else b.co(c)},
cR(a,b){var s=$.C
if(s===B.i)return s.jQ(a,b)
return s.jQ(a,s.f_(b))},
CC(a,b){var s,r=$.C
if(r===B.i)return r.jP(a,b)
s=r.hE(b,t.hU)
return $.C.jP(a,s)},
pk(a,b,c,d){return A.LE(a,c,b,d)},
LE(a,b,c,d){return $.C.mN(c,b).aV(a,d)},
LC(a,b,c,d,e){A.kp(d,e)},
kp(a,b){A.LF(new A.AX(a,b))},
AY(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
AZ(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
D1(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
FR(a,b,c,d){return d},
FS(a,b,c,d){return d},
FQ(a,b,c,d){return d},
LB(a,b,c,d,e){return null},
B_(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gca()
r=c.gca()
d=s!==r?c.f_(d):c.jL(d,t.H)}A.FV(d)},
LA(a,b,c,d,e){return A.CD(d,B.i!==c?c.jL(e,t.H):e)},
Lz(a,b,c,d,e){e=c.tL(e,t.H,t.hU)
return A.Ez(d,e)},
LD(a,b,c,d){A.Gw(d)},
FP(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.C7(o,o,o,s,s)
r.D(0,e)}else r=o
s=new A.od(c.gm0(),c.gm2(),c.gm1(),c.glX(),c.glY(),c.glW(),c.glr(),c.gjy(),c.glj(),c.gli(),c.glS(),c.glw(),c.gjg(),c.gjI(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.p3(s,q)
p=d.a
if(p!=null)s.as=new A.p2(s,p)}if(r!=null)s.at=new A.p4(s,r)
return s},
yf:function yf(a){this.a=a},
ye:function ye(a,b,c){this.a=a
this.b=b
this.c=c},
yg:function yg(a){this.a=a},
yh:function yh(a){this.a=a},
k8:function k8(a){this.a=a
this.b=null
this.c=0},
Aj:function Aj(a,b){this.a=a
this.b=b},
Ai:function Ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jC:function jC(a,b){this.a=a
this.b=!1
this.$ti=b},
AJ:function AJ(a){this.a=a},
AK:function AK(a){this.a=a},
B1:function B1(a){this.a=a},
AH:function AH(a,b){this.a=a
this.b=b},
AI:function AI(a,b){this.a=a
this.b=b},
o3:function o3(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
yj:function yj(a){this.a=a},
yk:function yk(a){this.a=a},
ym:function ym(a){this.a=a},
yn:function yn(a,b){this.a=a
this.b=b},
yl:function yl(a,b){this.a=a
this.b=b},
yi:function yi(a){this.a=a},
jU:function jU(a,b){this.a=a
this.b=b},
oS:function oS(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hO:function hO(a,b){this.a=a
this.$ti=b},
an:function an(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b,c,d,e,f,g){var _=this
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
jI:function jI(){},
jD:function jD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
rW:function rW(a,b,c){this.a=a
this.b=b
this.c=c},
rY:function rY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rX:function rX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rR:function rR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nw:function nw(a,b){this.a=a
this.b=b},
rS:function rS(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b,c){this.c=a
this.d=b
this.$ti=c},
jS:function jS(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
zf:function zf(a,b){this.a=a
this.b=b},
zg:function zg(a,b){this.a=a
this.b=b},
ze:function ze(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
ap:function ap(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d,e){var _=this
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
zh:function zh(a,b){this.a=a
this.b=b},
zm:function zm(a,b){this.a=a
this.b=b},
zl:function zl(a,b){this.a=a
this.b=b},
zj:function zj(a,b){this.a=a
this.b=b},
zi:function zi(a,b){this.a=a
this.b=b},
zp:function zp(a,b,c){this.a=a
this.b=b
this.c=c},
zq:function zq(a,b){this.a=a
this.b=b},
zr:function zr(a){this.a=a},
zo:function zo(a,b){this.a=a
this.b=b},
zn:function zn(a,b){this.a=a
this.b=b},
zs:function zs(a,b){this.a=a
this.b=b},
zt:function zt(a,b,c){this.a=a
this.b=b
this.c=c},
zu:function zu(a,b){this.a=a
this.b=b},
o2:function o2(a){this.a=a
this.b=null},
a9:function a9(){},
x3:function x3(a,b){this.a=a
this.b=b},
x4:function x4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x5:function x5(a,b){this.a=a
this.b=b},
x6:function x6(a,b){this.a=a
this.b=b},
x1:function x1(a){this.a=a},
x2:function x2(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function jr(){},
e3:function e3(){},
Ab:function Ab(a){this.a=a},
Aa:function Aa(a){this.a=a},
oT:function oT(){},
jE:function jE(){},
cW:function cW(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
hP:function hP(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
b5:function b5(a,b){this.a=a
this.$ti=b},
dZ:function dZ(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
o_:function o_(){},
yb:function yb(a){this.a=a},
ya:function ya(a){this.a=a},
k5:function k5(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b1:function b1(){},
yw:function yw(a,b,c){this.a=a
this.b=b
this.c=c},
yv:function yv(a){this.a=a},
hN:function hN(){},
oj:function oj(){},
ca:function ca(a,b){this.b=a
this.a=null
this.$ti=b},
hz:function hz(a,b){this.b=a
this.c=b
this.a=null},
z7:function z7(){},
e2:function e2(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
zT:function zT(a,b){this.a=a
this.b=b},
hA:function hA(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cz:function cz(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jN:function jN(a){this.$ti=a},
dl:function dl(a,b){this.b=a
this.$ti=b},
zR:function zR(a,b){this.a=a
this.b=b},
jX:function jX(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
AM:function AM(a,b){this.a=a
this.b=b},
AN:function AN(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
hD:function hD(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
f0:function f0(a,b,c){this.b=a
this.a=b
this.$ti=c},
jO:function jO(a,b){this.a=a
this.$ti=b},
hL:function hL(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
jH:function jH(a,b,c){this.a=a
this.b=b
this.$ti=c},
AE:function AE(a,b){this.a=a
this.b=b},
AG:function AG(a,b){this.a=a
this.b=b},
AF:function AF(a,b){this.a=a
this.b=b},
AC:function AC(a,b){this.a=a
this.b=b},
AD:function AD(a,b){this.a=a
this.b=b},
AB:function AB(a,b){this.a=a
this.b=b},
Ay:function Ay(a,b){this.a=a
this.b=b},
p3:function p3(a,b){this.a=a
this.b=b},
Ax:function Ax(a,b){this.a=a
this.b=b},
Aw:function Aw(a,b){this.a=a
this.b=b},
AA:function AA(a,b){this.a=a
this.b=b},
Az:function Az(a,b){this.a=a
this.b=b},
p2:function p2(a,b){this.a=a
this.b=b},
p4:function p4(a,b){this.a=a
this.b=b},
p1:function p1(){},
od:function od(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
z3:function z3(a,b,c){this.a=a
this.b=b
this.c=c},
z5:function z5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z2:function z2(a,b){this.a=a
this.b=b},
z4:function z4(a,b,c){this.a=a
this.b=b
this.c=c},
oH:function oH(){},
A_:function A_(a,b,c){this.a=a
this.b=b
this.c=c},
zZ:function zZ(a,b){this.a=a
this.b=b},
A0:function A0(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a){this.a=a},
AX:function AX(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
C7(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dj(d.i("@<0>").W(e).i("dj<1,2>"))
b=A.D7()}else{if(A.Gd()===b&&A.Gc()===a)return new A.e_(d.i("@<0>").W(e).i("e_<1,2>"))
if(a==null)a=A.D6()}else{if(b==null)b=A.D7()
if(a==null)a=A.D6()}return A.JS(a,b,c,d,e)},
EY(a,b){var s=a[b]
return s===a?null:s},
CO(a,b,c){if(c==null)a[b]=a
else a[b]=c},
CN(){var s=Object.create(null)
A.CO(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
JS(a,b,c,d,e){var s=c!=null?c:new A.z1(d)
return new A.jK(a,b,s,d.i("@<0>").W(e).i("jK<1,2>"))},
dI(a,b,c,d){if(b==null){if(a==null)return new A.bD(c.i("@<0>").W(d).i("bD<1,2>"))
b=A.D7()}else{if(A.Gd()===b&&A.Gc()===a)return new A.iL(c.i("@<0>").W(d).i("iL<1,2>"))
if(a==null)a=A.D6()}return A.K2(a,b,null,c,d)},
m(a,b,c){return A.Gl(a,new A.bD(b.i("@<0>").W(c).i("bD<1,2>")))},
u(a,b){return new A.bD(a.i("@<0>").W(b).i("bD<1,2>"))},
K2(a,b,c,d,e){return new A.jV(a,b,new A.zP(d),d.i("@<0>").W(e).i("jV<1,2>"))},
me(a){return new A.dk(a.i("dk<0>"))},
aO(a){return new A.dk(a.i("dk<0>"))},
at(a,b){return A.MB(a,new A.dk(b.i("dk<0>")))},
CP(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hF(a,b,c){var s=new A.e1(a,b,c.i("e1<0>"))
s.c=a.e
return s},
KP(a,b){return J.x(a,b)},
KQ(a){return J.a7(a)},
E3(a){if(a.length===0)return null
return B.b.ga1(a)},
bb(a,b,c){var s=A.dI(null,null,b,c)
a.a8(0,new A.uA(s,b,c))
return s},
cK(a,b,c){var s=A.dI(null,null,b,c)
s.D(0,a)
return s},
uB(a,b){var s,r,q=A.me(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.t(0,b.a(a[r]))
return q},
d4(a,b){var s=A.me(b)
s.D(0,a)
return s},
Ix(a,b){var s=t.bP
return J.Dv(s.a(a),s.a(b))},
uQ(a){var s,r
if(A.Dd(a))return"{...}"
s=new A.a2("")
try{r={}
$.f8.push(a)
s.a+="{"
r.a=!0
a.a8(0,new A.uR(r,s))
s.a+="}"}finally{$.f8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Cf(a){return new A.iO(A.ae(A.Iy(null),null,!1,a.i("0?")),a.i("iO<0>"))},
Iy(a){return 8},
dj:function dj(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
zw:function zw(a){this.a=a},
zv:function zv(a){this.a=a},
e_:function e_(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
jK:function jK(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
z1:function z1(a){this.a=a},
eZ:function eZ(a,b){this.a=a
this.$ti=b},
oo:function oo(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
jV:function jV(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
zP:function zP(a){this.a=a},
dk:function dk(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
zQ:function zQ(a){this.a=a
this.c=this.b=null},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
uA:function uA(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
ov:function ov(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b2:function b2(){},
K:function K(){},
U:function U(){},
uP:function uP(a){this.a=a},
uR:function uR(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.$ti=b},
ox:function ox(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
oX:function oX(){},
iS:function iS(){},
cT:function cT(a,b){this.a=a
this.$ti=b},
iO:function iO(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
ow:function ow(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cr:function cr(){},
k3:function k3(){},
ke:function ke(){},
FL(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.D(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.AP(p)
return q},
AP(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.os(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.AP(a[s])
return a},
Kx(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Ha()
else s=new Uint8Array(o)
for(r=J.M(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Kw(a,b,c,d){var s=a?$.H9():$.H8()
if(s==null)return null
if(0===c&&d===b.length)return A.Fl(s,b)
return A.Fl(s,b.subarray(c,d))},
Fl(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
DA(a,b,c,d,e,f){if(B.c.ak(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
JI(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.M(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.h(b,q)
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
if(o<0||o>255)break;++q}throw A.b(A.az(b,"Not a byte value at index "+q+": 0x"+B.c.kw(s.h(b,q),16),null))},
JH(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.af(f,2),i=f&3,h=$.Do()
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
return A.EK(a,r+1,c,-m-1)}throw A.b(A.a8(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a8(k,a,r))},
JF(a,b,c,d){var s=A.JG(a,b,c),r=(d&3)+(s-b),q=B.c.af(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.H1()},
JG(a,b,c){var s,r=c,q=r,p=0
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
EK(a,b,c,d){var s,r
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
I3(a){return B.cV.h(0,a.toLowerCase())},
E9(a,b,c){return new A.iM(a,b)},
KT(a){return a.p()},
K0(a,b){return new A.zL(a,[],A.Mn())},
K1(a,b,c){var s,r=new A.a2("")
A.F_(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
F_(a,b,c,d){var s=A.K0(b,c)
s.iB(a)},
Fm(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
os:function os(a,b){this.a=a
this.b=b
this.c=null},
zK:function zK(a){this.a=a},
ot:function ot(a){this.a=a},
zI:function zI(a,b,c){this.b=a
this.c=b
this.a=c},
At:function At(){},
As:function As(){},
kL:function kL(){},
oW:function oW(){},
kM:function kM(a){this.a=a},
Ak:function Ak(a,b){this.a=a
this.b=b},
kR:function kR(a){this.a=a},
ie:function ie(a){this.a=a},
o5:function o5(a){this.a=0
this.b=a},
yt:function yt(a){this.c=null
this.a=0
this.b=a},
yp:function yp(){},
yc:function yc(a,b){this.a=a
this.b=b},
kS:function kS(){},
o4:function o4(){this.a=0},
yo:function yo(a,b){this.a=a
this.b=b},
pL:function pL(){},
hu:function hu(a){this.a=a},
o8:function o8(a,b){this.a=a
this.b=b
this.c=0},
l3:function l3(){},
oN:function oN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eW:function eW(a,b,c){this.a=a
this.b=b
this.$ti=c},
l5:function l5(){},
aC:function aC(){},
qI:function qI(a){this.a=a},
eq:function eq(){},
iM:function iM(a,b){this.a=a
this.b=b},
m6:function m6(a,b){this.a=a
this.b=b},
ty:function ty(){},
m8:function m8(a){this.b=a},
zJ:function zJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
m7:function m7(a){this.a=a},
zM:function zM(){},
zN:function zN(a,b){this.a=a
this.b=b},
zL:function zL(a,b,c){this.c=a
this.a=b
this.b=c},
mb:function mb(){},
mc:function mc(a){this.a=a},
ng:function ng(){},
Ag:function Ag(a,b){this.a=a
this.b=b},
k7:function k7(){},
oP:function oP(a){this.a=a},
Ar:function Ar(a,b,c){this.a=a
this.b=b
this.c=c},
nM:function nM(){},
nN:function nN(){},
p_:function p_(a){this.b=this.a=0
this.c=a},
Au:function Au(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jw:function jw(a){this.a=a},
dm:function dm(a){this.a=a
this.b=16
this.c=0},
p5:function p5(){},
EU(a,b){var s=A.JP(a,b)
if(s==null)throw A.b(A.a8("Could not parse BigInt",a,null))
return s},
JM(a,b){var s,r,q=$.ch(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bg(0,$.Dp()).fL(0,A.jF(s))
s=0
o=0}}if(b)return q.bC(0)
return q},
EM(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
JN(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.tN(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.EM(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.EM(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ch()
l=A.bI(j,i)
return new A.aJ(l===0?!1:c,i,l)},
JP(a,b){var s,r,q,p,o
if(a==="")return null
s=$.H3().ea(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.JM(p,q)
if(o!=null)return A.JN(o,2,q)
return null},
bI(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
CK(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
EL(a){var s
if(a===0)return $.ch()
if(a===1)return $.fg()
if(a===2)return $.H4()
if(Math.abs(a)<4294967296)return A.jF(B.c.iu(a))
s=A.JJ(a)
return s},
jF(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bI(4,s)
return new A.aJ(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bI(1,s)
return new A.aJ(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.af(a,16)
r=A.bI(2,s)
return new A.aJ(r===0?!1:o,s,r)}r=B.c.M(B.c.gmu(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bI(r,s)
return new A.aJ(r===0?!1:o,s,r)},
JJ(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.R("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.ch()
r=$.H2()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.H(r)
r[p]=0}q=J.pp(B.f.gab(r))
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
l=new A.aJ(!1,m,4)
if(n<0)k=l.dz(0,-n)
else k=n>0?l.bD(0,n):l
if(s)return k.bC(0)
return k},
CL(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.H(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.H(d)
d[s]=0}return b+c},
ES(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.ak(c,16),l=16-m,k=B.c.bD(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dz(p,l)
r&2&&A.H(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bD((p&k)>>>0,m)}r&2&&A.H(d)
d[n]=q},
EN(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.ak(c,16)===0)return A.CL(a,b,o,d)
s=b+o+1
A.ES(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.H(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
JO(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.ak(c,16),m=16-n,l=B.c.bD(1,n)-1,k=B.c.dz(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bD((q&l)>>>0,m)
s&2&&A.H(d)
d[r]=(p|k)>>>0
k=B.c.dz(q,n)}s&2&&A.H(d)
d[j]=k},
yq(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
JK(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}s&2&&A.H(e)
e[b]=r},
o6(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}},
ET(a,b,c,d,e,f){var s,r,q,p,o,n
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
JL(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iM((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
MJ(a){return A.ku(a)},
C1(a,b){return new A.ly(new WeakMap(),a,b.i("ly<0>"))},
C2(a){},
zd(a,b){var s=$.H5()
s=s==null?null:new s(A.e8(A.Ni(a,b),1))
return new A.om(s,b.i("om<0>"))},
aH(a){var s=A.jd(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
Mv(a){var s=A.IX(a)
if(s!=null)return s
throw A.b(A.a8("Invalid double",a,null))},
I7(a,b){a=A.aK(a,new Error())
a.stack=b.l(0)
throw a},
ae(a,b,c,d){var s,r=c?J.E5(a,d):J.Ca(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bF(a,b,c){var s,r=A.k([],c.i("B<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
O(a,b){var s,r
if(Array.isArray(a))return A.k(a.slice(0),b.i("B<0>"))
s=A.k([],b.i("B<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fJ(a,b){var s=A.bF(a,!1,b)
s.$flags=3
return s},
dT(a,b,c){var s,r,q,p,o
A.bd(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ax(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Eo(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Jl(a,b,c)
if(r)a=J.BV(a,c)
if(b>0)a=J.pt(a,b)
s=A.O(a,t.S)
return A.Eo(s)},
Jl(a,b,c){var s=a.length
if(b>=s)return""
return A.IZ(a,b,c==null||c>s?s:c)},
af(a,b,c){return new A.eu(a,A.Cc(a,!1,b,c,!1,""))},
MI(a,b){return a==null?b==null:a===b},
x7(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
CF(){var s,r,q=A.IS()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.EG
if(s!=null&&q===$.EF)return s
r=A.nL(q)
$.EG=r
$.EF=q
return r},
oZ(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.H6()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bu(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Kr(a){var s,r,q
if(!$.H7())return A.Ks(a)
s=new URLSearchParams()
a.a8(0,new A.Aq(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
Cv(){return A.ac(new Error())},
BZ(a,b,c,d,e,f,g){var s=A.J_(a,b,c,d,e,f,g,0,!0)
return new A.aM(s==null?new A.rl(a,b,c,d,e,f,g,0).$0():s,0,!0)},
HZ(){return new A.aM(Date.now(),0,!1)},
lp(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ax(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ax(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.az(b,s,"Time including microseconds is outside valid range"))
A.cA(c,"isUtc",t.y)
return a},
I_(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
DQ(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
lo(a){if(a>=10)return""+a
return"0"+a},
d0(a,b,c){return new A.aD(a+1000*b+1e6*c)},
fx(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.az(b,"name","No enum value with that name"))},
it(a){if(typeof a=="number"||A.bx(a)||a==null)return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.En(a)},
DS(a,b){A.cA(a,"error",t.K)
A.cA(b,"stackTrace",t.l)
A.I7(a,b)},
kO(a){return new A.kN(a)},
R(a,b){return new A.bB(!1,null,b,a)},
az(a,b,c){return new A.bB(!0,a,b,c)},
kK(a,b){return a},
aZ(a){var s=null
return new A.d9(s,s,!1,s,s,a)},
wB(a,b){return new A.d9(null,null,!0,a,b,"Value not in range")},
ax(a,b,c,d,e){return new A.d9(b,c,!0,a,d,"Invalid value")},
Es(a,b,c,d){if(a<b||a>c)throw A.b(A.ax(a,b,c,d,null))
return a},
J2(a,b,c,d){return A.E1(a,d,b,null,c)},
be(a,b,c){if(0>a||a>c)throw A.b(A.ax(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ax(b,a,c,"end",null))
return b}return c},
bd(a,b){if(a<0)throw A.b(A.ax(a,0,null,b,null))
return a},
E0(a,b){var s=b.b
return new A.iD(s,!0,a,null,"Index out of range")},
lZ(a,b,c,d,e){return new A.iD(b,!0,a,e,"Index out of range")},
E1(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.lZ(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cU(a)},
ED(a){return new A.nF(a)},
y(a){return new A.bl(a)},
aA(a){return new A.l8(a)},
DT(a){return new A.ol(a)},
a8(a,b,c){return new A.bk(a,b,c)},
In(a,b,c){var s,r
if(A.Dd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
$.f8.push(a)
try{A.Lh(a,s)}finally{$.f8.pop()}r=A.x7(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
tv(a,b,c){var s,r
if(A.Dd(a))return b+"..."+c
s=new A.a2(b)
$.f8.push(a)
try{r=s
r.a=A.x7(r.a,a,", ")}finally{$.f8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Lh(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
Ec(a,b,c,d,e){return new A.eg(a,b.i("@<0>").W(c).W(d).W(e).i("eg<1,2,3,4>"))},
c5(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a7(a)
b=J.a7(b)
return A.hh(A.ay(A.ay($.fh(),s),b))}if(B.d===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.hh(A.ay(A.ay(A.ay($.fh(),s),b),c))}if(B.d===e){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
return A.hh(A.ay(A.ay(A.ay(A.ay($.fh(),s),b),c),d))}if(B.d===f){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
return A.hh(A.ay(A.ay(A.ay(A.ay(A.ay($.fh(),s),b),c),d),e))}if(B.d===g){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
return A.hh(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fh(),s),b),c),d),e),f))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
g=J.a7(g)
g=A.hh(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fh(),s),b),c),d),e),f),g))
return g},
vg(a){var s,r=$.fh()
for(s=J.E(a);s.k();)r=A.ay(r,J.a7(s.gn()))
return A.hh(r)},
Fv(a,b){return 65536+((a&1023)<<10)+(b&1023)},
nL(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.EE(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gnl()
else if(s===32)return A.EE(B.a.A(a5,5,a4),0,a3).gnl()}r=A.ae(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.FU(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.FU(a5,0,q,20,r)===20)r[7]=q
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
a5=B.a.dl(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.ad(a5,"http",0)){if(i&&o+3===n&&B.a.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dl(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.ad(a5,"https",0)){if(i&&o+4===n&&B.a.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dl(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cc(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.CT(a5,0,q)
else{if(q===0)A.hR(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Fh(a5,c,p-1):""
a=A.Ff(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jd(B.a.A(a5,i,n),a3)
d=A.Am(a0==null?A.t(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Fg(a5,n,m,a3,j,a!=null)
a2=m<l?A.An(a5,m+1,l,a3):a3
return A.kg(j,b,a,d,a1,a2,l<a4?A.Fe(a5,l+1,a4):a3)},
Jv(a){return A.CW(a,0,a.length,B.o,!1)},
nK(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
Js(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.nK("each part must be in the range 0..255",a,r)}A.nK("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.nK(k,a,q)}l=p+1
s&2&&A.H(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.nK(k,a,q)
p=l}A.nK("IPv4 address should contain exactly 4 parts",a,q)},
Jt(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Ju(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.EH(a,b,c)
return!0},
Ju(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bk(o,a,r)
s=r
break}return new A.bk("Unexpected character",a,r-1)}if(s-1===b)return new A.bk(o,a,s)
return new A.bk("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bk("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bk("Invalid IPvFuture address character",a,s)}},
EH(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.xE(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Js(a1,o,a3,s,q*2)
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
B.f.jZ(s,c,b,0)}}return s},
kg(a,b,c,d,e,f,g){return new A.kf(a,b,c,d,e,f,g)},
Fb(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hR(a,b,c){throw A.b(A.a8(c,a,b))},
Ko(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.E(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
Am(a,b){if(a!=null&&a===A.Fb(b))return null
return a},
Ff(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hR(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Kp(a,r,s)
if(p<s){o=p+1
q=A.Fk(a,B.a.ad(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Jt(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cb(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Fk(a,B.a.ad(a,"25",o)?s+3:o,c,"%25")}else q=""
A.EH(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.Ku(a,b,c)},
Kp(a,b,c){var s=B.a.cb(a,"%",b)
return s>=b&&s<c?s:c},
Fk(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.CU(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a2("")
m=i.a+=B.a.A(a,r,s)
if(n)o=B.a.A(a,s,s+3)
else if(o==="%")A.hR(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a2("")
if(r<s){i.a+=B.a.A(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.A(a,r,s)
if(i==null){i=new A.a2("")
n=i}else n=i
n.a+=j
m=A.CS(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Ku(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.CU(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a2("")
l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.A(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a2("")
if(r<s){q.a+=B.a.A(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hR(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a2("")
m=q}else m=q
m.a+=l
k=A.CS(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
CT(a,b,c){var s,r,q
if(b===c)return""
if(!A.Fd(a.charCodeAt(b)))A.hR(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hR(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.Kn(r?a.toLowerCase():a)},
Kn(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Fh(a,b,c){if(a==null)return""
return A.kh(a,b,c,16,!1,!1)},
Fg(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kh(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.Kt(s,e,f)},
Kt(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.CV(a,!s||c)
return A.f5(a)},
An(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.R("Both query and queryParameters specified",null))
return A.kh(a,b,c,256,!0,!1)}if(d==null)return null
return A.Kr(d)},
Ks(a){var s={},r=new A.a2("")
s.a=""
a.a8(0,new A.Ao(new A.Ap(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Fe(a,b,c){if(a==null)return null
return A.kh(a,b,c,256,!0,!1)},
CU(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.Br(s)
p=A.Br(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bu(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
CS(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.m7(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dT(s,0,null)},
kh(a,b,c,d,e,f){var s=A.Fj(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
Fj(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.CU(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hR(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.CS(o)}if(p==null){p=new A.a2("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Fi(a){if(B.a.S(a,"."))return!0
return B.a.bP(a,"/.")!==-1},
f5(a){var s,r,q,p,o,n
if(!A.Fi(a))return a
s=A.k([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
CV(a,b){var s,r,q,p,o,n
if(!A.Fi(a))return!b?A.Fc(a):a
s=A.k([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga1(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Fc(s[0])
return B.b.B(s,"/")},
Fc(a){var s,r,q=a.length
if(q>=2&&A.Fd(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ae(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Kv(a,b){if(a.vC("package")&&a.c==null)return A.FW(b,0,b.length)
return-1},
Kq(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.R("Invalid URL encoding",null))}}return s},
CW(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.A(a,b,c)
else p=new A.ci(B.a.A(a,b,c))
else{p=A.k([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.R("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.R("Truncated URI",null))
p.push(A.Kq(a,o+1))
o+=2}else p.push(r)}}return d.f0(p)},
Fd(a){var s=a|32
return 97<=s&&s<=122},
EE(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.k([b-1],t.t)
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
if((j.length&1)===1)a=B.aq.vY(a,m,s)
else{l=A.Fj(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dl(a,m,s,l)}return new A.xD(a,j,c)},
FU(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
F3(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.FW(a.a,a.e,a.f)
return-1},
FW(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
KK(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
yr:function yr(){},
ys:function ys(){},
om:function om(a,b){this.a=a
this.$ti=b},
Aq:function Aq(a){this.a=a},
rl:function rl(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a){this.a=a},
z8:function z8(){},
ad:function ad(){},
kN:function kN(a){this.a=a},
df:function df(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iD:function iD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cU:function cU(a){this.a=a},
nF:function nF(a){this.a=a},
bl:function bl(a){this.a=a},
l8:function l8(a){this.a=a},
my:function my(){},
jp:function jp(){},
ol:function ol(a){this.a=a},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function m0(){},
o:function o(){},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
j:function j(){},
oR:function oR(){},
jq:function jq(){this.b=this.a=0},
ji:function ji(a){this.a=a},
mX:function mX(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
xE:function xE(a){this.a=a},
kf:function kf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
Ap:function Ap(a,b){this.a=a
this.b=b},
Ao:function Ao(a){this.a=a},
xD:function xD(a,b,c){this.a=a
this.b=b
this.c=c},
cc:function cc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
og:function og(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
ly:function ly(a,b,c){this.a=a
this.b=b
this.$ti=c},
Iz(a){return a},
Iq(a){return a},
Cy(a){return a},
Io(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.Fr(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
If(a){return new v.G.Promise(A.bW(new A.rV(a)))},
mu:function mu(a){this.a=a},
rV:function rV(a){this.a=a},
rT:function rT(a){this.a=a},
rU:function rU(a){this.a=a},
AT(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.KB,a)
s[$.ff()]=a
return s},
cY(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.KC,a)
s[$.ff()]=a
return s},
bW(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.KD,a)
s[$.ff()]=a
return s},
p7(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.KE,a)
s[$.ff()]=a
return s},
hW(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.KF,a)
s[$.ff()]=a
return s},
CZ(a){var s
if(typeof a=="function")throw A.b(A.R("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.KG,a)
s[$.ff()]=a
return s},
KB(a){return a.$0()},
KC(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
KD(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
KE(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
KF(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
KG(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
FJ(a){return a==null||A.bx(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
pi(a){if(A.FJ(a))return a
return new A.Bw(new A.e_(t.mp)).$1(a)},
Da(a,b){return a[b]},
D4(a,b,c){return a[b].apply(a,c)},
Mb(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.b.D(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a5(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.aI(s,b.i("aI<0>"))
a.then(A.e8(new A.BC(r),1),A.e8(new A.BD(r),1))
return s},
FI(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
ph(a){if(A.FI(a))return a
return new A.Bb(new A.e_(t.mp)).$1(a)},
Bw:function Bw(a){this.a=a},
BC:function BC(a){this.a=a},
BD:function BD(a){this.a=a},
Bb:function Bb(a){this.a=a},
Gq(a,b){return Math.max(a,b)},
Eq(){return B.as},
Er(){return $.BQ()},
zF:function zF(){},
zG:function zG(a){this.a=a},
HH(a,b,c){return J.Dt(a,b,c)},
lv:function lv(){},
a3:function a3(){},
pN:function pN(a){this.a=a},
pO:function pO(a){this.a=a},
pP:function pP(a,b){this.a=a
this.b=b},
pQ:function pQ(a){this.a=a},
pR:function pR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pS:function pS(a){this.a=a},
lr:function lr(a){this.$ti=a},
iH:function iH(a,b){this.a=a
this.$ti=b},
ew:function ew(a,b){this.a=a
this.$ti=b},
hQ:function hQ(){},
h6:function h6(a,b){this.a=a
this.$ti=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a,b,c){this.a=a
this.b=b
this.$ti=c},
lq:function lq(){},
Eh(){throw A.b(A.Y(u.O))},
Jr(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
mt:function mt(){},
nI:function nI(){},
ar(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dT(m,0,null)},
cj:function cj(a){this.a=a},
c1:function c1(){this.a=null},
lT:function lT(){},
t_:function t_(){},
cX(a){var s=new Uint32Array(A.b7(A.k([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.oL(s,r,a,q,new Uint32Array(16))},
oK:function oK(){},
A2:function A2(){},
oL:function oL(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kG:function kG(){},
pY:function pY(){},
iQ:function iQ(a){this.a=a},
jl:function jl(){},
uO:function uO(){},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
wN:function wN(){},
jm:function jm(a,b){this.b=a
this.c=b},
n1:function n1(a){this.a=a},
by(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lk(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.by(a5[0])
r=A.by(a5[1])
q=A.by(a5[2])
p=A.by(a5[3])
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
if((f&B.c.bD(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.by(s)
a5.$flags&2&&A.H(a5)
a5[0]=k
a5[1]=A.by(r)
a5[2]=A.by(q)
a5[3]=A.by(p)},
DP(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cQ(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
r.setUint32(12,B.c.ak(q,n),!1)
p=J.bM(B.az.gab(r),0,null)
o=new Uint32Array(4)
A.lk(o,a,b)
A.lk(o,a,p)
return J.bM(B.y.gab(o),0,null)},
lj:function lj(a,b,c){this.c=a
this.d=b
this.a=c},
r_:function r_(){},
oe:function oe(){},
of:function of(){},
pe(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.ky()===B.P){a5=A.f9(a5)
a6=A.f9(a6)
a7=A.f9(a7)
a8=A.f9(a8)}a5^=b3[0]
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
if($.ky()===B.P){a1=A.f9(a1)
a2=A.f9(a2)
a3=A.f9(a3)
a4=A.f9(a4)}a9.$flags&2&&A.H(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
G5(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge4(),h=B.cU.h(0,i.gm(0))
if(h==null)throw A.b(A.R("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.Dt(B.y.gab(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.H(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.ky()===B.P)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.ak(m,k)
if(n===0)j=A.G_((j<<8|j>>>24)>>>0)^B.cw[B.c.iM(m,k)-1]<<24
else if(o&&n===4)j=A.G_(j)
r[m]=(j^r[m-k])>>>0}return r},
G_(a){return(B.m[a>>>24&255]<<24|B.m[a>>>16&255]<<16|B.m[a>>>8&255]<<8|B.m[a&255])>>>0},
f9(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qL:function qL(){},
r0:function r0(){},
yY:function yY(){},
mS:function mS(a,b){this.a=a
this.b=b},
kT:function kT(){},
kU:function kU(){},
kV:function kV(){},
kW:function kW(){},
pH:function pH(){},
G0(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mS("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.eh)){s=J.a0(a)
if(B.a.S(s,"TypeError: "))s=B.a.ae(s,11)
a=new A.eh(s,b.b)}return a},
FO(a,b,c){A.DS(A.G0(a,c),b)},
KA(a,b){return new A.dl(new A.AL(a,b),t.fb)},
hY(a,b,c){return A.Lv(a,b,c)},
Lv(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hY=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.q(),$async$hY)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.AU(e)
a1.r=new A.AV(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a5(c.read(),k),$async$hY)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.D(b)
l=A.ac(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.G0(m,a)
k=l
j=a1.b
if(j>=4)A.t(a1.bF())
if((j&1)!==0){j=a1.gaL()
j.aH(d,k==null?B.Q:k)}s=15
return A.a(a1.q(),$async$hY)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.tP()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.t(a1.bF())
if((f&1)!==0)a1.gaL().aA(g)}g=a1.b
s=((g&1)!==0?(a1.gaL().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aI(new A.w($.C,j),i):g).a,$async$hY)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hY,r)},
l0:function l0(a){this.b=!1
this.c=a},
pK:function pK(a){this.a=a},
AL:function AL(a,b){this.a=a
this.b=b},
AU:function AU(a){this.a=a},
AV:function AV(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a){this.a=a},
pM:function pM(a){this.a=a},
DL(a,b){return new A.eh(a,b)},
eh:function eh(a,b){this.a=a
this.b=b},
mm:function mm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
IK(a,b){var s=t.N,r=A.k([],t.e8),q=$.Di()
if(!q.b.test(a))A.t(A.az(a,"method","Not a valid method"))
return new A.v8(A.u(s,s),r,a,b,A.dI(new A.kV(),new A.kW(),s,s))},
v8:function v8(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
v9:function v9(a,b){this.a=a
this.b=b},
J5(a,b){var s=new Uint8Array(0),r=$.Di()
if(!r.b.test(a))A.t(A.az(a,"method","Not a valid method"))
r=t.N
return new A.wE(s,a,b,A.dI(new A.kV(),new A.kW(),r,r))},
wE:function wE(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
js:function js(){},
nf:function nf(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
HI(a){return a.toLowerCase()},
ii:function ii(a,b,c){this.a=a
this.c=b
this.$ti=c},
IC(a){return A.Nh("media type",a,new A.uS(a))},
Ch(a,b,c){var s=t.N
if(c==null)s=A.u(s,s)
else{s=new A.ii(A.Mc(),A.u(s,t.af),t.fo)
s.D(0,c)}return new A.fK(a.toLowerCase(),b.toLowerCase(),new A.cT(s,t.ph))},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
uS:function uS(a){this.a=a},
uU:function uU(a){this.a=a},
uT:function uT(){},
My(a){var s
a.mK($.Hh(),"quoted string")
s=a.gkf().h(0,0)
return A.GD(B.a.A(s,1,s.length-1),$.Hg(),new A.Bj(),null)},
Bj:function Bj(){},
pG:function pG(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
ja:function ja(){},
vu:function vu(a,b){this.a=a
this.b=b},
vv:function vv(a){this.a=a},
mF:function mF(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
vQ:function vQ(){},
A8:function A8(a){this.a=a},
vH:function vH(){},
vy:function vy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vG:function vG(a){this.a=a},
vF:function vF(){},
vB:function vB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vC:function vC(){},
vD:function vD(a,b){this.a=a
this.b=b},
vE:function vE(){},
vz:function vz(a,b){this.a=a
this.b=b},
vA:function vA(){},
IQ(a,b,c,d,e){var s=A.b9(null,t.H)
return new A.vI(b,c,new A.vP(a,B.S,null),e,d,s)},
IR(a){return 0.5+B.as.n_()},
jc:function jc(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
vI:function vI(a,b,c,d,e,f){var _=this
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
vP:function vP(a,b,c){this.a=a
this.b=b
this.c=c},
vL:function vL(){},
vM:function vM(a,b,c){this.a=a
this.b=b
this.c=c},
vJ:function vJ(a,b,c){this.a=a
this.b=b
this.c=c},
vK:function vK(a){this.a=a},
vN:function vN(a){this.a=a},
vO:function vO(a){this.a=a},
A9:function A9(a,b){this.a=a
this.b=null
this.c=b},
Ik(a,b,c){return new A.cI(a,b,c)},
iC(a,b){return new A.dC(a)},
es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lW:function lW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a){this.a=a},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
vw:function vw(a){this.a=a},
vx:function vx(a){this.a=a},
HX(c1,c2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="recordId",a9="field",b0="imgs",b1="name",b2="expectedSha256",b3="allowVolatileBlobs",b4="session",b5="index",b6="refId",b7="token",b8="id",b9="spec",c0="store"
switch(c1){case"open":s=c2.h(0,"stores")
r=c2.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.P("Malformed open payload."))
q=A.k([],t.d)
for(p=J.E(s);p.k();)q.push(A.DO(p.gn(),"stores"))
p=t.N
p=A.u(p,p)
for(o=r.ga7(),o=o.gu(o);o.k();){n=o.gn()
p.j(0,J.a0(n.a),A.D3(n.b,"fingerprint"))}return new A.mx(q,p)
case"capabilities":return B.bC
case"health":return B.bF
case"close":return B.bD
case"fileBeginUpload":m=c2.h(0,"size")
if(!A.au(m))throw A.b(A.P("Malformed fileBeginUpload payload."))
return new A.lD(A.aR(c2),A.b8(c2,a8),A.pa(c2.h(0,a9),a9,b0),A.pa(c2.h(0,b1),b1,"blob.bin"),m,A.dq(c2.h(0,b2),b2),A.p9(c2.h(0,b3),b3,!1))
case"fileChunk":l=c2.h(0,"chunk")
if(!t.p.b(l))throw A.b(A.P("Malformed fileChunk payload."))
return new A.lE(A.b8(c2,b4),l)
case"fileFinish":return new A.lI(A.b8(c2,b4))
case"fileAbort":return new A.lC(A.b8(c2,b4))
case"filesList":return new A.lR(A.aR(c2),A.b8(c2,a8),A.pa(c2.h(0,a9),a9,b0))
case"fileOpen":return new A.lL(A.aR(c2),A.b8(c2,a8),A.pa(c2.h(0,a9),a9,b0),A.FK(c2.h(0,b5),b5,0),A.dq(c2.h(0,b6),b6))
case"fileCredit":k=c2.h(0,"bytes")
if(!A.au(k))throw A.b(A.P("Malformed fileCredit payload."))
return new A.lG(A.b8(c2,"stream"),k)
case"fileClose":return new A.lF(A.b8(c2,"stream"))
case"fileRemove":return new A.lP(A.aR(c2),A.b8(c2,a8),A.pa(c2.h(0,a9),a9,b0),A.FK(c2.h(0,b5),b5,0),A.dq(c2.h(0,b6),b6))
case"fileGc":j=c2.h(0,"blobGraceMs")
i=c2.h(0,"tmpGraceMs")
if(!A.au(j)||!A.au(i))throw A.b(A.P("Malformed fileGc payload."))
return new A.lJ(j,i)
case"fileEnforceStorageCap":h=c2.h(0,"maxBytes")
if(!A.au(h))throw A.b(A.P("Malformed fileEnforceStorageCap payload."))
return new A.lw(h)
case"fileStorageStatus":return B.bS
case"syncStart":g=c2.h(0,"baseUrl")
if(typeof g!="string")throw A.b(A.P("Malformed syncStart payload."))
return new A.no(g,A.dq(c2.h(0,"scopeId"),"scopeId"),A.dq(c2.h(0,b7),b7))
case"syncStop":return B.bX
case"syncNow":return B.bT
case"syncPause":return B.bU
case"syncResume":return B.bV
case"syncUpdateAuth":return new A.nu(A.dq(c2.h(0,b7),b7))
case"syncSetConnectivity":f=c2.h(0,"online")
if(!A.bx(f))throw A.b(A.P("Malformed syncSetConnectivity payload."))
return new A.nn(f)
case"syncStatus":return B.bW
case"get":return new A.lS(A.aR(c2),A.b8(c2,b8),A.cG(c2))
case"rows":e=c2.h(0,"ids")
if(!t.j.b(e))throw A.b(A.P("Malformed rows payload."))
return new A.mV(A.aR(c2),A.G3(e,"ids"),A.cG(c2))
case"mutate":return new A.mn(A.aR(c2),A.KO(c2.h(0,"mutation")),A.cG(c2))
case"query":return new A.mN(A.aR(c2),A.eH(c2.h(0,b9)),A.cG(c2))
case"count":return new A.lg(A.aR(c2),A.eH(c2.h(0,b9)),A.cG(c2))
case"countDistinct":return new A.lf(A.aR(c2),A.b8(c2,a9),A.eH(c2.h(0,b9)),A.cG(c2))
case"distinct":q=A.aR(c2)
p=A.b8(c2,a9)
o=c2.h(0,b9)
return new A.ls(q,p,A.eH(o==null?B.j:o),A.cG(c2))
case"ids":return new A.lX(A.aR(c2),A.eH(c2.h(0,b9)),A.cG(c2))
case"aggregate":d=c2.h(0,"fn")
c=A.C9(new A.am(B.cF,new A.qG(d),t.gx))
if(c==null)throw A.b(A.P("Unknown aggregate: "+A.r(d)))
return new A.kH(A.aR(c2),c,A.b8(c2,a9),A.eH(c2.h(0,b9)),A.cG(c2))
case"explain":return new A.lz(A.aR(c2),A.eH(c2.h(0,b9)),A.cG(c2))
case"search":return new A.n0(A.aR(c2),A.Jc(c2.h(0,b9)),A.cG(c2))
case"txBegin":b=c2.h(0,"readOnly")
if(!A.bx(b))throw A.b(A.P("Malformed txBegin payload."))
a=c2.h(0,"durability")
if(a==null)a0=B.bm
else if(typeof a=="string"){q=A.C9(new A.am(B.cS,new A.qH(a),t.mE))
if(q==null)q=A.t(A.P("Unknown tx durability: "+a))
a0=q}else{q=A.t(A.P("Malformed txBegin durability."))
a0=q}return new A.ny(b,a0)
case"txCommit":case"txRollback":a1=c2.h(0,b4)
if(typeof a1!="string")throw A.b(A.P("Malformed tx payload."))
return c1==="txCommit"?new A.nz(a1):new A.nB(a1)
case"txSavepoint":case"txRollbackTo":case"txRelease":a1=c2.h(0,b4)
a2=c2.h(0,b1)
if(typeof a1!="string"||typeof a2!="string")throw A.b(A.P("Malformed savepoint payload."))
A:{if("txSavepoint"===c1){q=new A.nD(a1,a2)
break A}if("txRollbackTo"===c1){q=new A.nC(a1,a2)
break A}q=new A.nA(a1,a2)
break A}return q
case"watchOne":return new A.nS(A.aR(c2),A.b8(c2,b8))
case"watch":return new A.nT(A.aR(c2),A.eH(c2.h(0,b9)))
case"watchCancel":a3=c2.h(0,"subscription")
if(typeof a3!="string")throw A.b(A.P("Malformed watchCancel payload."))
return new A.nR(a3)
case"analyze":return new A.kJ(A.dq(c2.h(0,c0),c0))
case"walCheckpoint":return B.bZ
case"vacuum":return B.bY
case"pruneOutbox":return B.bR
case"compact":a4=c2.h(0,c0)
a5=c2.h(0,"olderThanMs")
if(typeof a4!="string"||!A.au(a5))throw A.b(A.P("Malformed compact payload."))
return new A.l7(a4,a5)
case"runMaintenance":a6=c2.h(0,"compactOlderThanMs")
if(!A.au(a6))throw A.b(A.P("Malformed runMaintenance payload."))
return new A.mW(a6)
case"conflictsList":return new A.lc(A.dq(c2.h(0,c0),c0))
case"conflictGet":return new A.lb(A.aR(c2),A.b8(c2,b8))
case"conflictsResolve":a7=c2.h(0,"merged")
if(!t.f.b(a7))throw A.b(A.P("Malformed conflictsResolve payload."))
return new A.mT(A.aR(c2),A.b8(c2,b8),A.DO(a7,"merged"))
case"conflictsAcceptLocal":return new A.kE(A.aR(c2),A.b8(c2,b8))
case"conflictsAcceptRemote":return new A.kF(A.aR(c2),A.b8(c2,b8))
case"conflictsWatch":return new A.le(A.dq(c2.h(0,c0),c0))
default:return null}},
aR(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.P("Malformed store name."))
return s},
b8(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.P('Malformed field "'+b+'".'))
return s},
cG(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.P("Malformed session id."))
return s},
DO(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.P('Malformed field "'+b+'".'))},
Mw(a){var s,r,q,p=J.a0(a),o=null
if(a instanceof A.dJ){s=A.Lj(a)
p=a.a
if(a instanceof A.eQ&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.eP){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.e9(a.c))}catch(r){if(!(A.D(r) instanceof A.hr))throw r}}else if(a instanceof A.eB)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.bn){s=A.LL(a)
p=a.a
if(a instanceof A.db&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else if(a instanceof A.hr){p=a.a
s="WireException"}else if(a instanceof A.bl){p=a.a
s="StateError"}else if(t.b0.b(a)){p=A.r(a.d)
s="RangeError"}else if(a instanceof A.bB){p=A.r(a.d)
s="ArgumentError"}else s="unknown"
q=A.u(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
Lj(a){var s
A:{if(a instanceof A.eQ){s="ValidationException"
break A}if(a instanceof A.eP){s="UniqueConstraintException"
break A}if(a instanceof A.eB){s="NotNullConstraintException"
break A}if(a instanceof A.fm){s="CheckConstraintException"
break A}if(a instanceof A.fU){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fE){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hl){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fG){s="FtsUnavailableError"
break A}if(a instanceof A.eJ){s="SchemaRegistrationError"
break A}if(a instanceof A.h3){s="SchemaTooNewError"
break A}if(a instanceof A.cO){s="StorageError"
break A}if(a instanceof A.h_){s="RecordNotFoundException"
break A}if(a instanceof A.ha){s="StaleCursorError"
break A}if(a instanceof A.fN){s="MissingLimitError"
break A}if(a instanceof A.fq){s="ConflictBlockedError"
break A}if(a instanceof A.em){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.fZ){s="ReadOnlyTxError"
break A}throw A.b(A.eI(u.P))}return s},
LL(a){var s
A:{if(a instanceof A.eO){s="TransientNetworkError"
break A}if(a instanceof A.db){s="ServerBusyError"
break A}if(a instanceof A.h5){s="ServerError"
break A}if(a instanceof A.bN){s="AuthError"
break A}if(a instanceof A.ck){s="ForbiddenError"
break A}if(a instanceof A.cm){s="NotFoundError"
break A}if(a instanceof A.eD){s="PayloadError"
break A}if(a instanceof A.eF){s="ProtocolError"
break A}if(a instanceof A.en){s="DuplicateIdError"
break A}if(a instanceof A.dw){s="BatchFailedError"
break A}throw A.b(A.eI(u.P))}return s},
KV(a){var s
A:{if(a instanceof A.iX){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.j_){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.iY){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.j0){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iU){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iV){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iT){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.iZ){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iW){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.eI(u.P))}return s},
KO(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.P("Malformed mutation payload."))
s=t.N
r=a.aT(0,new A.AR(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iX(A.pd(r.h(0,n),n))
case"upsert":return new A.j_(A.pd(r.h(0,n),n))
case"putAll":return new A.iY(A.FZ(r.h(0,m),m))
case"upsertAll":return new A.j0(A.FZ(r.h(0,m),m))
case"patch":return new A.iU(A.AW(r.h(0,l),l),A.pd(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.P("Malformed patchAll patches."))
k=A.u(s,t.G)
for(s=p.ga7(),s=s.gu(s);s.k();){o=s.gn()
k.j(0,J.a0(o.a),A.pd(o.b,"patches"))}return new A.iV(k)
case"archive":return new A.iT(A.AW(r.h(0,l),l))
case"restore":return new A.iZ(A.AW(r.h(0,l),l))
case"purge":return new A.iW(A.AW(r.h(0,l),l))
default:throw A.b(A.P("Unknown mutation kind: "+A.r(q)))}},
AW(a,b){if(typeof a=="string")return a
throw A.b(A.P('Malformed mutation field "'+b+'".'))},
pd(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.P('Malformed mutation field "'+b+'".'))},
FZ(a,b){var s,r
if(t.j.b(a)){s=A.k([],t.d)
for(r=J.E(a);r.k();)s.push(A.pd(r.gn(),b))
return s}throw A.b(A.P('Malformed mutation field "'+b+'".'))},
eH(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.P("Malformed query spec."))
s=a0.aT(0,new A.ww(),t.N,t.z)
r=new A.wx()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.k([],t.ae)
if(p!=null&&!t.j.b(p))j.push(A.t(A.P("Malformed query orGroups.")))
else if(t.j.b(p))for(i=J.E(p);i.k();)j.push(r.$1(i.gn()))
if(!s.J(e)||s.h(0,e)==null)a=null
else a=a.b(s.h(0,e))?A.Cj(s.h(0,e)):A.t(A.P("Malformed query predicate."))
i=A.k([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.t(A.P("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.J1(h.gn()))
h=m==null?null:A.G2(m,"limit")
g=A.p9(s.h(0,"all"),"all",!1)
f=n==null?null:A.G3(n,"select")
return new A.wv(k,j,a,i,h,g,f,A.p9(s.h(0,d),d,!1),A.p9(s.h(0,c),c,!1),A.dq(l,"cursor"),A.p9(s.h(0,b),b,!1))},
Ep(a){var s,r,q,p,o,n,m,l="Malformed query condition."
if(!t.f.b(a))throw A.b(A.P(l))
s=a.aT(0,new A.wr(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.P(l))
p=A.C9(new A.am(B.cy,new A.ws(q),t.mz))
if(p==null)throw A.b(A.P("Unknown query operator: "+q))
o=A.kr(s.h(0,"value"))
n=t.j
if(n.b(s.h(0,"values"))){m=[]
for(n=J.E(n.a(s.h(0,"values")));n.k();)m.push(A.kr(n.gn()))
n=m}else n=null
return new A.eG(r,p,o,n)},
Cj(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.P("Malformed predicate tree."))
s=a.aT(0,new A.vU(),t.N,t.z)
r=new A.vT()
switch(s.h(0,"kind")){case"leaf":return new A.iN(A.Ep(s))
case"not":return new A.j7(A.Cj(s.h(0,"child")))
case"all":return new A.ia(r.$1(s.h(0,q)))
case"any":return new A.ib(r.$1(s.h(0,q)))
default:throw A.b(A.P("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
J1(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.P(q))
s=a.aT(0,new A.wu(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.P(q))
return new A.mM(r,J.x(s.h(0,"desc"),!0))},
Jc(a){var s,r,q,p
if(!t.f.b(a))throw A.b(A.P("Malformed search spec."))
s=a.aT(0,new A.wM(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.P("Malformed search term."))
q=s.h(0,"limit")
p=A.au(q)?q:null
return new A.wL(r,p,J.x(s.h(0,"all"),!0),J.x(s.h(0,"includeArchived"),!0),J.x(s.h(0,"includeHidden"),!0))},
HY(a){return new A.fu(a)},
I2(a){return new A.fv(a)},
Il(a){return new A.fH(a)},
HD(a){return new A.fi(a)},
I8(a){return new A.fy(a)},
e9(a){var s,r,q,p
if(a instanceof A.aM)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gf6().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.e9(r.gn()))
return s}if(t.f.b(a)){if(a.J("__lp_t")){s=t.N
r=A.u(s,t.X)
for(q=a.ga7(),q=q.gu(q);q.k();){p=q.gn()
r.j(0,J.a0(p.a),A.e9(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.u(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),A.e9(q.b))}return s}if(a==null||A.bx(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.P("Value of type "+J.c_(a).l(0)+" is not wire-safe."))},
kr(a){var s,r,q,p,o,n,m,l="Malformed bytes wire value.",k=t.f
if(k.b(a)){r=a.h(0,"__lp_t")
q=J.ds(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.au(s))return new A.aM(A.lp(s,0,!0),0,!0)
throw A.b(A.P("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{k=B.ar.v(s)
return k}catch(p){if(t.Y.b(A.D(p)))throw A.b(A.P(l))
else throw p}throw A.b(A.P(l))}if(q.P(r,"map")){o=a.h(0,"v")
if(!k.b(o))throw A.b(A.P("Malformed map wire value."))
k=A.u(t.N,t.X)
for(q=o.ga7(),q=q.gu(q);q.k();){n=q.gn()
m=n.a
if(typeof m=="string")k.j(0,m,A.kr(n.b))}return k}k=A.u(t.N,t.X)
for(q=a.ga7(),q=q.gu(q);q.k();){n=q.gn()
m=n.a
if(typeof m=="string")k.j(0,m,A.kr(n.b))}return k}if(t.j.b(a)){k=[]
for(q=J.E(a);q.k();)k.push(A.kr(q.gn()))
return k}return a},
P(a){return new A.hr(a)},
D3(a,b){if(typeof a=="string")return a
throw A.b(A.P('Malformed wire field "'+b+'".'))},
G2(a,b){if(A.au(a))return a
throw A.b(A.P('Malformed wire field "'+b+'".'))},
dq(a,b){if(a==null)return null
return A.D3(a,b)},
FK(a,b,c){if(a==null)return c
return A.G2(a,b)},
p9(a,b,c){if(a==null)return!1
if(A.bx(a))return a
throw A.b(A.P('Malformed wire field "'+b+'".'))},
pa(a,b,c){if(a==null)return c
return A.D3(a,b)},
G3(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.k([],t.s)
for(r=J.E(a);r.k();){q=r.gn()
if(typeof q!="string")throw A.b(A.P(p+b+'".'))
s.push(q)}return s}throw A.b(A.P(p+b+'".'))},
qG:function qG(a){this.a=a},
qH:function qH(a){this.a=a},
la:function la(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
c2:function c2(){},
l6:function l6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ld:function ld(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
lN:function lN(a,b,c,d,e,f,g,h,i,j){var _=this
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
lD:function lD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lE:function lE(a,b){this.a=a
this.b=b},
lI:function lI(a){this.a=a},
lF:function lF(a){this.a=a},
lC:function lC(a){this.a=a},
lR:function lR(a,b,c){this.a=a
this.b=b
this.c=c},
lL:function lL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lG:function lG(a,b){this.a=a
this.b=b},
lP:function lP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lJ:function lJ(a,b){this.a=a
this.b=b},
lw:function lw(a){this.a=a},
nc:function nc(){},
lQ:function lQ(a,b){this.a=a
this.b=b},
lO:function lO(a){this.a=a},
fC:function fC(a){this.a=a},
lM:function lM(a){this.a=a},
fB:function fB(a){this.a=a},
fz:function fz(a){this.a=a},
hd:function hd(a){this.a=a},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
va:function va(){},
iX:function iX(a){this.a=a},
j_:function j_(a){this.a=a},
iY:function iY(a){this.a=a},
j0:function j0(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
iT:function iT(a){this.a=a},
iZ:function iZ(a){this.a=a},
iW:function iW(a){this.a=a},
AR:function AR(){},
wv:function wv(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
ww:function ww(){},
wx:function wx(){},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wr:function wr(){},
ws:function ws(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
cL:function cL(){},
vU:function vU(){},
vT:function vT(){},
iN:function iN(a){this.a=a},
j7:function j7(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
mM:function mM(a,b){this.a=a
this.b=b},
wu:function wu(){},
cC:function cC(a,b){this.a=a
this.b=b},
wL:function wL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wM:function wM(){},
mR:function mR(){},
mx:function mx(a,b){this.a=a
this.b=b},
l1:function l1(){},
lU:function lU(){},
l4:function l4(){},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
mV:function mV(a,b,c){this.a=a
this.b=b
this.c=c},
mn:function mn(a,b,c){this.a=a
this.b=b
this.c=c},
mN:function mN(a,b,c){this.a=a
this.b=b
this.c=c},
lg:function lg(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function lf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ls:function ls(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lX:function lX(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
n0:function n0(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b){this.a=a
this.b=b},
ny:function ny(a,b){this.a=a
this.b=b},
nz:function nz(a){this.a=a},
nB:function nB(a){this.a=a},
nD:function nD(a,b){this.a=a
this.b=b},
nC:function nC(a,b){this.a=a
this.b=b},
nA:function nA(a,b){this.a=a
this.b=b},
nS:function nS(a,b){this.a=a
this.b=b},
nT:function nT(a,b){this.a=a
this.b=b},
nR:function nR(a){this.a=a},
kJ:function kJ(a){this.a=a},
nQ:function nQ(){},
nO:function nO(){},
mJ:function mJ(){},
l7:function l7(a,b){this.a=a
this.b=b},
mW:function mW(a){this.a=a},
lc:function lc(a){this.a=a},
lb:function lb(a,b){this.a=a
this.b=b},
mT:function mT(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a,b){this.a=a
this.b=b},
kF:function kF(a,b){this.a=a
this.b=b},
le:function le(a){this.a=a},
ag:function ag(){},
fS:function fS(){},
ih:function ih(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lV:function lV(a,b){this.a=a
this.b=b},
h1:function h1(a){this.a=a},
h2:function h2(a){this.a=a},
fO:function fO(a){this.a=a},
fY:function fY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
fH:function fH(a){this.a=a},
fi:function fi(a){this.a=a},
fy:function fy(a){this.a=a},
h4:function h4(a){this.a=a},
n_:function n_(a,b){this.a=a
this.b=b},
fs:function fs(a){this.a=a},
fr:function fr(a){this.a=a},
hi:function hi(a){this.a=a},
hp:function hp(a){this.a=a},
fV:function fV(a){this.a=a},
fp:function fp(a){this.a=a},
eM:function eM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bo:function bo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
no:function no(a,b,c){this.a=a
this.b=b
this.c=c},
nt:function nt(){},
nj:function nj(){},
nk:function nk(){},
nm:function nm(){},
nu:function nu(a){this.a=a},
nn:function nn(a){this.a=a},
nr:function nr(){},
np:function np(a){this.a=a},
nl:function nl(a){this.a=a},
ns:function ns(a){this.a=a},
nq:function nq(a){this.a=a},
kP:function kP(){},
hr:function hr(a){this.a=a},
ah(a){var s,r=new A.a2("")
A.cg(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Dh(a){var s,r,q
for(s=new A.mX(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
KJ(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.c9(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
cg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.bx(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.au(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.KJ(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a6(b,h)
a.a+=r
return A.Dh(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.M(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cg(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.k([],t.l5)
for(s=J.E(b.gK());s.k();){n=s.gn()
r=J.a0(n)
if(B.b.bN(o,new A.BN(r)))throw A.b(A.R('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a4(r,n))}B.b.cl(o,new A.BO())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.q)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a6(k.a,h)
a.a+=j
i=A.Dh(j)
a.a+=":"
q=q+i+1+A.cg(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.R("Cannot canonicalize value of type "+J.c_(b).l(0),h))},
BN:function BN(a){this.a=a},
BO:function BO(){},
Jg(a){var s,r,q,p=A.af("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ea(a)
if(p==null)return B.dj
s=p.b
r=s[1]
r.toString
r=A.aH(r)
q=s[2]
q.toString
q=A.aH(q)
s=s[3]
s=A.jd(s==null?"":s,null)
return new A.f2(r,q,s==null?0:s)},
Ex(a,b,c){var s,r=A.Jg(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eL(a,b){return A.Jh(a,b)},
Jh(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eL=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b0("SELECT sqlite_version() AS v"),$async$eL)
case 3:g=d.V(c.bZ(a2),"v")
g.toString
A.G(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b0("PRAGMA compile_options"),$async$eL)
case 4:j=d.O(new c.bH(b.c0(a2,new A.wW(),t.X),k),k.i("o.E"))
n=B.b.bN(j,new A.wX())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eL)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$eL)
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
k=a0===B.bb
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.b0("PRAGMA journal_mode"),$async$eL)
case 19:l=a2
if(J.ec(l))m=A.a6(J.bZ(J.bZ(l).gaX()))
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
case 18:case 14:h=A.Ex(g,3,37)
k=k&&J.x(m,"wal")
q=new A.nb(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eL,r)},
mE:function mE(a,b){this.a=a
this.b=b},
nb:function nb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wW:function wW(){},
wX:function wX(){},
ij:function ij(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
aT:function aT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a1:function a1(a,b){this.a=a
this.b=b},
pV:function pV(a,b){this.a=a
this.b=b},
pW:function pW(){},
pX:function pX(){},
Dz(a){return new Uint8Array(A.b7(a))},
ry:function ry(){},
pu:function pu(a,b,c){this.b=a
this.c=b
this.d=c},
D9(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cn
if(r===B.I){r=a.f
r.toString
r=!B.b.E(r,b)}else r=!1
if(r)return B.ct
return s
case 1:case 4:return!A.au(b)?B.co:s
case 2:return typeof b!="number"?B.cp:s
case 3:return!A.bx(b)?B.cq:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cr:s
case 7:return!t.j.b(b)?B.cs:s}},
dr(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gd7(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.CY(n,a0.h(0,l),new Uint8Array(A.b7(B.e.v(q+l+"\x00"+e))),m))}k=A.u(h,g)
for(h=new A.aN(a0,A.n(a0).i("aN<1,2>")).gu(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.E(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ah(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
Gi(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.CY(b,c,new Uint8Array(A.b7(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
LQ(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gd7()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.CY(n,g.h(0,l),new Uint8Array(A.b7(B.e.v(q+l+"\x00"+f))),m))}k=A.u(t.N,t.X)
for(s=g.ga7(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.E(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ah(k))
a.push(c?1:0)
a.push(0)},
ce(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.m(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.a6(b.h(0,"id"))
f.j(0,n,A.Fy(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.x(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.aw(k,null)
if(t.f.b(j))f.D(0,A.bb(j,h,g))}return f},
Mr(a,b,c,d){var s,r=A.k([],t.d)
for(s=J.E(b);s.k();)r.push(A.ce(a,s.gn(),c,d))
return r},
Ms(a,b,c,d,e){var s,r,q,p,o,n,m=A.k([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.q)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a4(p,a.fa(p)))}s=A.k([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.KN(o.gn(),m,r,c,e,n))
return s},
KN(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.Fy(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
Fy(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.y('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.hc("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.c_(b).l(0)+"."))
r=B.o.f0(s.u4(B.ar.v(b),new Uint8Array(A.b7(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.T===q||B.V===q){p=A.aH(r)
break A}if(B.U===q){p=A.Mv(r)
break A}if(B.W===q||B.X===q){p=B.h.aw(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.x(b,1)
if(p===B.W||p===B.X){if(typeof b!="string")throw A.b(A.hc("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.c_(b).l(0)+"."))
return B.h.aw(b,o)}return b},
CY(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.y('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.a0(b)
break
case 6:case 7:s=A.ah(b)
break
default:A.G(b)
s=b}r=d.uL(B.e.v(s),c)
return B.aq.gf6().v(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.ah(b)
default:return b}},
bh(a,b){var s,r,q,p,o,n="archived",m=a.gd7(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.q)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.ga7(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.E(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
B4(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gd7(),i=A.k([],t.iE)
i.push(new A.a4("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a4(o,p.b===B.B?J.x(n,!0):n))}for(s=c.ga7(),s=s.gu(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.E(0,o))continue
i.push(new A.a4(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.dh)
B.b.cl(i,new A.B5())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.q)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a6(r.a,null)
a.a+=k
o=A.Dh(k)
a.a+=":"
m=m+o+1+A.cg(a,r.b)}a.a+="}"
return m+1},
d3:function d3(a,b){this.a=a
this.b=b},
B5:function B5(){},
DR(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
l9:function l9(a,b){this.a=a
this.b=b},
ir:function ir(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
rv:function rv(){},
ru:function ru(){},
rw:function rw(){},
rt:function rt(a){this.a=a},
I1(a){return'"'+A.z(a,'"','""')+'"'},
I0(a,b){var s,r,q,p=a.a,o=J.M(p),n=b.a,m=J.M(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qj:function qj(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iq:function iq(a){this.a=a},
rs:function rs(a){this.a=a},
rr:function rr(){},
rq:function rq(a){this.a=a},
rp:function rp(a,b){this.a=a
this.b=b},
rm:function rm(a){this.a=a},
rn:function rn(a){this.a=a},
ro:function ro(){},
al(a,b){return new A.eQ(b,a)},
hc(a){return new A.cO(a)},
Cr(a){return new A.h_(a)},
Eu(a){return new A.h3(a)},
aQ(a){return new A.eJ(a)},
rQ(a){return new A.fG(a)},
Cw(a){return new A.ha(a)},
Ee(a){return new A.fN(a)},
DN(a){return new A.fq(a)},
C_(a){return new A.em(a)},
GH(a,b){var s,r="UNIQUE constraint failed",q=J.a0(a),p=a instanceof A.c7,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.E(q,"PRIMARY KEY")&&!B.a.E(q,r)
else p=!0
if(p)return new A.fU("PRIMARY KEY constraint violated.")
if(o===2067||B.a.E(q,r)){s=A.FC(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.eP(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.E(q,"NOT NULL constraint failed")){p=A.FC(q,"NOT NULL constraint failed:")
return new A.eB(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.E(q,"CHECK constraint failed")||o===275||n===275)return new A.fm("CHECK constraint violated.")
if(B.a.E(q,"FOREIGN KEY")||o===787||n===787)return new A.fE("FOREIGN KEY constraint violated.")
if(B.a.E(q,"database or disk is full"))return new A.cO("Database full: "+A.r(a))
return new A.cO("SQLite error: "+A.r(a))},
FC(a,b){var s,r,q,p,o,n,m=B.a.bP(a,b)
if(m<0)return"?"
s=B.a.ae(a,m+b.length)
r=s.length
q=B.a.bP(s,",")
if(q>=0)r=q
p=B.a.bP(s,"(")
s=B.a.cj(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.df(s,".")
s=B.a.cj(o>=0?B.a.ae(s,o+1):s)
if(B.a.S(s,'"')&&B.a.c9(s,'"')){n=B.a.A(s,1,s.length-1)
s=A.z(n,'""','"')}return s.length===0?"?":s},
dJ:function dJ(){},
eQ:function eQ(a,b){this.b=a
this.a=b},
eP:function eP(a,b,c){this.b=a
this.c=b
this.a=c},
eB:function eB(a,b){this.b=a
this.a=b},
fm:function fm(a){this.a=a},
fU:function fU(a){this.a=a},
fE:function fE(a){this.a=a},
cO:function cO(a){this.a=a},
h_:function h_(a){this.a=a},
h3:function h3(a){this.a=a},
eJ:function eJ(a){this.a=a},
hl:function hl(a){this.a=a},
fG:function fG(a){this.a=a},
ha:function ha(a){this.a=a},
fN:function fN(a){this.a=a},
fq:function fq(a){this.a=a},
em:function em(a){this.a=a},
fZ:function fZ(a){this.a=a},
iv:function iv(a){this.b=a},
DV(a){return A.pj("lp_file_refs",new A.rA(a))},
bj:function bj(a,b,c,d,e,f,g,h,i,j){var _=this
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
rA:function rA(a){this.a=a},
uF:function uF(a,b){this.a=a
this.b=b},
uG:function uG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uI:function uI(a){this.a=a},
uJ:function uJ(a){this.a=a},
uK:function uK(a){this.a=a},
uL:function uL(a){this.a=a},
uM:function uM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uH:function uH(a,b){this.a=a
this.b=b},
LM(){return new A.aM(Date.now(),0,!1)},
cH:function cH(a,b,c,d,e,f,g,h,i,j){var _=this
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
rI:function rI(a,b){this.f=a
this.r=b},
rL:function rL(){},
rJ:function rJ(a){this.a=a},
rK:function rK(){},
lH:function lH(){this.b=0
this.c=$},
l_(a){var s=$.Dj()
if(!s.b.test(a))throw A.b(A.R('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
DE(a){return new A.fk(a)},
DF(a,b){return new A.kZ(a,b)},
kv(a,b,c,d,e){return A.N0(a,b,c,d,e)},
N0(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$kv=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.k([],h)
f=new A.hu(A.cX(new A.oN(new A.BB(g),A.k([],h),t.mI)))
e=0
h=new A.cz(A.cA(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$kv)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.w)){j=new A.w($.C,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$kv)
case 9:f.a.t(0,m)
e+=J.as(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.C(),$async$kv)
case 10:s=n.pop()
break
case 5:f.a.q()
if(c!=null&&!J.x(e,c))throw A.b(A.y("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.ar(B.b.gap(g).a)
A.l_(i)
if(b!=null&&i!==b)throw A.b(A.y("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.ne(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kv,r)},
pJ:function pJ(){},
fk:function fk(a){this.a=a},
kZ:function kZ(a,b){this.a=a
this.b=b},
ne:function ne(a){this.a=a},
BB:function BB(a){this.a=a},
ix:function ix(a){this.d=a},
rB:function rB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rD:function rD(a,b){this.a=a
this.b=b},
rE:function rE(a,b,c){this.a=a
this.b=b
this.c=c},
rC:function rC(a,b,c){this.a=a
this.b=b
this.c=c},
rF:function rF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rG:function rG(){},
N3(a,b,c){a.tW(!0,new A.BH(c),"lp_norm_"+b)},
Gm(a,b,c,d){var s,r,q='""',p=b.a
if(p.gF(p))return c+"."+('"'+A.z(d,'"',q)+'"')
s='"'+A.z(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.z(c,'"',q)+'".'+s
return'"'+A.z("lp_norm_"+a,'"',q)+'"('+r+")"},
BH:function BH(a){this.a=a},
ut:function ut(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=e
_.y=f
_.at=g
_.ax=h},
It(a){var s=A.dR(null,null,t.fq),r=t.N
s=new A.tz(a,s,A.u(r,t.g8),A.u(r,t.dz),new A.rI(A.MA(),A.u(r,t.f6)),A.u(r,t.oX))
s.oD(a)
return s},
BA(a){var s,r,q,p
A:{if(a instanceof A.iN){s=A.Ls(a.a)
break A}if(a instanceof A.j7){s=new A.c4(A.BA(a.a))
break A}if(a instanceof A.ia){r=a.a
s=A.k([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.BA(r[p]))
s=new A.dv(s)
break A}if(a instanceof A.ib){r=a.a
s=A.k([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.BA(r[p]))
s=new A.d_(s)
break A}throw A.b(A.eI(u.P))}return s},
Ls(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
switch(l.a){case 0:s=a.c
if(s==null)return new A.ai(m,n,B.n)
return new A.ai(m,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.R("neq(null) matches no rows; use isNotNull.",o))
return new A.c4(new A.ai(m,"eq",[s]))
case 2:case 3:case 4:case 5:r=a.c
if(r==null)throw A.b(A.al('"'+l.b+'" does not accept null \u2014 use isNull().',o))
return new A.ai(m,l.b,[r])
case 6:q=a.d
if(q==null)q=B.n
if(B.b.E(q,o))throw A.b(A.al("inValues does not accept null \u2014 use isNull().",o))
return new A.ai(m,"inValues",q)
case 7:p=a.d
if(p==null)p=B.n
if(p.length!==2)throw A.b(A.R("between requires exactly two values.",o))
return new A.ai(m,"between",p)
case 8:return new A.ai(m,"startsWith",[a.c])
case 9:return new A.ai(m,"endsWith",[a.c])
case 10:return new A.ai(m,"contains",[a.c])
case 11:return new A.ai(m,n,B.n)
case 12:return new A.c4(new A.ai(m,n,B.n))}},
KR(){return Date.now()},
p6(a){var s,r,q
if(t.G.b(a)){s=A.u(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.p6(q.b))}return s}if(t.f.b(a)){s=A.u(t.z,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.p6(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.p6(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b7(a))
return a},
d2(a,b,c,d,e,f,g,h,i){var s=null,r=B.D,q=null,p=null,o=B.S
return A.Iv(a,b,c,d,e,f,g,h,i)},
Iv(b0,b1,b2,b3,b4,b5,b6,b7,b8){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d2=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:a2=null
a3=B.D
a4=null
a5=null
a6=B.S
a7=null
a7=b1
p=4
s=7
return A.a(A.cJ(a7,b6),$async$d2)
case 7:s=8
return A.a(A.eL(a7,b6),$async$d2)
case 8:n=c0
i=0
case 9:if(!(i<3)){s=11
break}m=B.cC[i]
s=12
return A.a(a7.O(m),$async$d2)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cT[i]
s=16
return A.a(a7.O(l),$async$d2)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a4
if(f==null)f=A.MS()
e=a5
d=a3
c=a6
b=new A.mC()
a=new A.m9(b5,h,g,b,b4,b2,b8,e,b0,b3,a2,f,A.u(t.N,t.nv),d,c,new A.pV(A.dR(null,null,t.iv),A.dR(null,null,t.oZ)))
f=new A.y8(A.b9(null,t.H),b.gwp())
a.x=f
c=a.a=new A.ut(a,h,g,f,b,e,d,c)
a.b=new A.xp(c)
a.c=new A.vb()
a.d=new A.wD()
c=A.It(c)
a.e!==$&&A.cf()
a.e=c
c=$.BQ()
a.cx!==$&&A.cf()
a.cx=new A.vn(a,c)
a.cy!==$&&A.cf()
a.cy=new A.vi(a,c)
a.db!==$&&A.cf()
a.db=new A.qw(a)
a.dx!==$&&A.cf()
a.dx=new A.uF(a,b0)
k=a
s=17
return A.a(A.ma(a7,k.CW),$async$d2)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
s=21
return A.a(k.aQ(j),$async$d2)
case 21:case 19:b7.length===h||(0,A.q)(b7),++i
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
return A.a(a7.q(),$async$d2)
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
return A.f($async$d2,r)},
cJ(a,b){return A.Iu(a,b)},
Iu(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cJ=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.bb?2:3
break
case 2:q=5
s=8
return A.a(a.O("PRAGMA journal_mode=WAL"),$async$cJ)
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
return A.a(a.O("PRAGMA wal_autocheckpoint=0"),$async$cJ)
case 9:s=10
return A.a(a.O("PRAGMA mmap_size=67108864"),$async$cJ)
case 10:case 3:s=11
return A.a(a.O("PRAGMA synchronous=NORMAL"),$async$cJ)
case 11:s=12
return A.a(a.O("PRAGMA foreign_keys=ON"),$async$cJ)
case 12:s=13
return A.a(a.O("PRAGMA busy_timeout=5000"),$async$cJ)
case 13:s=14
return A.a(a.O("PRAGMA cache_size=-8000"),$async$cJ)
case 14:s=15
return A.a(a.O("PRAGMA temp_store=MEMORY"),$async$cJ)
case 15:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$cJ,r)},
ma(a,b){var s=0,r=A.h(t.H),q,p
var $async$ma=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ci("lp_migrations","version = ?",[1]),$async$ma)
case 3:if(p.ec(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$ma)
case 4:case 1:return A.e(q,r)}})
return A.f($async$ma,r)},
f4:function f4(){},
zO:function zO(a){this.a=a},
oU:function oU(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r=null
_.w=$
_.x=e},
hK:function hK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
tz:function tz(a,b,c,d,e,f){var _=this
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
tY:function tY(a){this.a=a},
tZ:function tZ(){},
u_:function u_(a,b){this.a=a
this.b=b},
u0:function u0(){},
ub:function ub(a,b){this.a=a
this.b=b},
um:function um(){},
un:function un(a,b){this.a=a
this.b=b},
uo:function uo(a,b){this.a=a
this.b=b},
up:function up(a,b){this.a=a
this.b=b},
uq:function uq(a,b){this.a=a
this.b=b},
ur:function ur(a,b){this.a=a
this.b=b},
us:function us(a,b){this.a=a
this.b=b},
u1:function u1(){},
u2:function u2(){},
u3:function u3(){},
u4:function u4(){},
u5:function u5(){},
u6:function u6(){},
u7:function u7(a){this.a=a},
u8:function u8(a){this.a=a},
u9:function u9(){},
ua:function ua(){},
uc:function uc(){},
ud:function ud(a){this.a=a},
ue:function ue(){},
uf:function uf(){},
ug:function ug(){},
uh:function uh(){},
ui:function ui(){},
uj:function uj(a){this.a=a},
uk:function uk(a){this.a=a},
ul:function ul(a,b){this.a=a
this.b=b},
tK:function tK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tL:function tL(){},
tM:function tM(a,b,c){this.a=a
this.b=b
this.c=c},
tN:function tN(){},
tQ:function tQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tR:function tR(){},
tB:function tB(a){this.a=a},
tA:function tA(a){this.a=a},
tP:function tP(a){this.a=a},
tO:function tO(a){this.a=a},
tV:function tV(a,b){this.a=a
this.b=b},
tW:function tW(a,b,c){this.a=a
this.b=b
this.c=c},
tX:function tX(a,b){this.a=a
this.b=b},
tF:function tF(a){this.a=a},
tG:function tG(a){this.a=a},
tH:function tH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tJ:function tJ(a,b){this.a=a
this.b=b},
tI:function tI(a,b){this.a=a
this.b=b},
tS:function tS(a){this.a=a},
tT:function tT(a){this.a=a},
tU:function tU(a,b){this.a=a
this.b=b},
tE:function tE(a,b){this.a=a
this.b=b},
tC:function tC(){},
tD:function tD(){},
nd:function nd(a,b,c){this.a=a
this.c=b
this.e=c},
vR:function vR(a){this.a=a},
m9:function m9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
uu:function uu(a,b){this.a=a
this.b=b},
ux:function ux(a){this.a=a},
uw:function uw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uv:function uv(){},
ou:function ou(){},
fL(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a_(h).i("am<1>")
f=A.O(new A.am(h,new A.v5(c,b),g),g.i("o.E"))
B.b.cl(f,new A.v6())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.CW,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aQ('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jq()
$.kz()
j.az()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aP(a,b,m),$async$fL)
case 8:s=6
break
case 7:s=9
return A.a(A.mj(a,b,m),$async$fL)
case 9:case 6:if(j.b==null)j.b=$.mH.$0()
s=10
return A.a(A.fM(i,j.gmG(),o,q+l,p,l),$async$fL)
case 10:case 3:f.length===h||(0,A.q)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aQ('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fL)
case 11:return A.e(null,r)}})
return A.f($async$fL,r)},
fM(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fM=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b0("SELECT MAX(version) AS m FROM lp_migrations"),$async$fM)
case 2:q=p.fc(h)
if(q==null)q=0
s=3
return A.a(a.aC(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fM)
case 3:return A.e(null,r)}})
return A.f($async$fM,r)},
mj(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$mj=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b0("PRAGMA table_info("+('"'+A.z(k,'"','""')+'"')+")"),$async$mj)
case 2:i=h.d4(new g.bH(f.c0(e,new A.v2(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.Dk()
if(!m.b.test(n))A.t(A.aQ('Field "'+n+u.Z))
if(o.c)throw A.b(A.aQ('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.E(0,n)){s=4
break}m=A.z(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.z(n,'"','""')+'"')+" "+o.gkN()),$async$mj)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.q)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$mj,r)},
aP(a,b,c){return A.IG(a,b,c)},
IG(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aP=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.C_('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.iq(b0.w).jN(b1)
j=A.IJ(b0.f,a2,a3)
p=4
s=7
return A.a(A.v3(a7,l),$async$aP)
case 7:i=b4
s=8
return A.a(b0.hD(j),$async$aP)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.C_('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.ml(a7,m),$async$aP)
case 9:g=b4
s=10
return A.a(A.ml(a7,n),$async$aP)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aP)
case 13:a0=a9.fc(b4)
e=a0==null?0:a0
a3=A.z(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aP)
case 14:s=15
return A.a(A.d6(b0,a7,b1,k,l,e),$async$aP)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.z(m,'"','""')+'"')),$async$aP)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.hN(j),$async$aP)
case 19:case 18:s=20
return A.a(A.mk(a7,l,"rebuilding"),$async$aP)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.z(j,"'","''")+"'"),$async$aP)
case 21:a3=k.b
a4=A.z(n,'"','""')
d=B.a.ks(a3,'"'+a4+'"','"'+A.z(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aP)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ai("SELECT rowid, * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aP)
case 25:b=b4
if(J.bA(b)){s=24
break}s=26
return A.a(a7.a2(new A.v4(b,b1,b0,b2,m),a3),$async$aP)
case 26:a4=J.V(J.ps(b),"rowid")
a4.toString
c=A.aq(a4)
if(J.as(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.z(n,'"','""')+'"')),$async$aP)
case 27:a5=a9.fc(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aP)
case 28:e=a9.fc(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.y('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.z(n,'"','""')+'"')),$async$aP)
case 29:a3=A.z(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aP)
case 30:s=31
return A.a(A.d6(b0,a7,b1,k,l,a),$async$aP)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.D(a8)
if(a3 instanceof A.em)throw a8
else if(a3 instanceof A.c7){a1=a3
throw A.b(A.C_('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aP,r)},
d6(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l
var $async$d6=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.O(q[o]),$async$d6)
case 5:case 3:q.length===p||(0,A.q)(q),++o
s=2
break
case 4:q=c.w!=null
s=q?6:7
break
case 6:s=8
return A.a(b.O("DROP TABLE IF EXISTS "+('"'+A.z(c.a+"_fts",'"','""')+'"')),$async$d6)
case 8:case 7:p=d.d,n=p.length,o=0
case 9:if(!(o<p.length)){s=11
break}s=12
return A.a(b.O(p[o]),$async$d6)
case 12:case 10:p.length===n||(0,A.q)(p),++o
s=9
break
case 11:s=q?13:14
break
case 13:q=c.a+"_fts"
p=A.z(q,'"','""')
s=15
return A.a(b.O("INSERT INTO "+('"'+p+'"')+"("+('"'+A.z(q,'"','""')+'"')+") VALUES('rebuild')"),$async$d6)
case 15:case 14:q=c.a
l=A
s=16
return A.a(b.b0("SELECT COUNT(*) c FROM "+('"'+A.z(q,'"','""')+'"')),$async$d6)
case 16:m=l.fc(h)
if((m==null?0:m)!==f)throw A.b(A.y('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.mk(b,e,"done"),$async$d6)
case 17:return A.e(null,r)}})
return A.f($async$d6,r)},
ml(a,b){var s=0,r=A.h(t.y),q,p
var $async$ml=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ai("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$ml)
case 3:q=p.ec(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ml,r)},
IJ(a,b,c){var s=null,r=$.i8(),q=r.ua(a),p=A.dP(a,r.a).gjK()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.mW(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
II(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.al('Field "'+s+'" is required.',s))}if(b==null)return
r=A.D9(a,b)
if(r!=null)throw A.b(A.al(A.IF(a,b,r),a.a))},
IH(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
A.II(p,b.h(0,p.a))}},
IF(a,b,c){var s,r=a.a,q=J.c_(b)
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
case 6:s='Field "'+r+'" has unknown enum value "'+A.r(b)+'".'
break
default:s=null}return s},
v3(a,b){var s=0,r=A.h(t.x),q,p,o
var $async$v3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.n7("lp_meta",A.k(["v"],t.s),"k = ?",[b]),$async$v3)
case 3:p=d
o=J.M(p)
q=o.gF(p)?null:A.a6(J.V(o.gG(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$v3,r)},
mk(a,b,c){var s=0,r=A.h(t.H)
var $async$mk=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cc(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.R),$async$mk)
case 2:return A.e(null,r)}})
return A.f($async$mk,r)},
KS(){return Date.now()},
v5:function v5(a,b){this.a=a
this.b=b},
v6:function v6(){},
v2:function v2(){},
v4:function v4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vb:function vb(){},
mC:function mC(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
uy:function uy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ah:function Ah(){},
wt:function wt(a,b){this.a=a
this.b=b},
ks(a){var s=A.z(a,"\\","\\\\")
s=A.z(s,"%","\\%")
return A.z(s,"_","\\_")},
CX(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.ai){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.t(A.az(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.az(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.az(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.az(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c4){A.CX(a.a)
break A}p=a instanceof A.dv
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d_
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.az(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.q)(n),++m)A.CX(n[m])}break A}},
AO(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.ai)return A.Fw(a,!1,b)
if(a instanceof A.c4){s=a.a
r=A.AO(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.d_||s instanceof A.c4){s=new A.a4("NOT "+q,p)
break A}s=new A.a4("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dv){o=A.k([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){l=A.AO(s[m],!1)
o.push(l.a)
B.b.D(p,l.b)}k=B.b.B(o," AND ")
return new A.a4(b?k:"("+k+")",p)}if(a instanceof A.d_){o=A.k([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){j=A.KL(s[m])
o.push(j.a)
B.b.D(p,j.b)}return new A.a4("("+B.b.B(o," OR ")+")",p)}throw A.b(A.eI(u.M))},
KL(a){var s
A:{if(a instanceof A.ai){s=A.Fw(a,!0,!1)
break A}s=A.AO(a,!1)
break A}return s},
Fw(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.z(a.a,'"','""')+'"',n=A.O(a.c,t.X),m=a.b
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
case"inValues":s=o+" IN ("+B.b.B(A.ae(n.length,"?",!1,t.N),", ")+")"
break
case"between":s=o+" >= ? AND "+o+" <= ?"
break
case"isNull":s=o+" IS NULL"
break
case"startsWith":s=o+p
r=n[0]
r.toString
n[0]=A.ks(A.G(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.ks(A.G(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.ks(A.G(r))+"%"
break
default:throw A.b(A.az(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a4(q?"("+s+")":s,n)},
d8:function d8(){},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a){this.a=a},
dv:function dv(a){this.a=a},
d_:function d_(a){this.a=a},
J0(a,b){var s,r=$.fX.H(0,a)
if(r!=null){$.fX.j(0,a,r)
return r}s=b.$0()
if($.fX.a>=512)$.fX.H(0,new A.T($.fX,A.n($.fX).i("T<1>")).gG(0))
$.fX.j(0,a,s)
return s},
b_:function b_(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
mL:function mL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
wq:function wq(a,b,c){this.a=a
this.b=b
this.c=c},
wl:function wl(){},
wm:function wm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wn:function wn(a){this.a=a},
wo:function wo(){},
wp:function wp(){},
Jb(a){var s,r,q=B.a.cj(a)
if(q.length===0)return
s=!0
if(!B.a.E(q,'"')){r=A.af("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.af("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.al("Invalid search term: "+a,null))},
Ja(a){var s,r,q,p
for(s=B.a.cR(a,A.af("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
if(p.length!==0&&new A.ji(p).gm(0)<3)throw A.b(A.al('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cN:function cN(a,b){this.a=a
this.b=b},
wK:function wK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wD:function wD(){},
ko(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.dJ)throw q
else{s=r
r=A.hc("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
DU(a){return A.ko(new A.rz(a))},
Im(a){return A.ko(new A.tm(a))},
Id(a){return A.ko(new A.rP(a))},
DZ(a,b){var s
if(new A.ji(a).gm(0)!==1)throw A.b(A.aQ('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aQ('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
Ic(a){return A.ko(new A.rO(a))},
Ib(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.ga7(),s=s.gu(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Jk(a){return A.ko(new A.x_(a))},
q0(a,b){return A.ko(new A.q1(a,b))},
LR(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.am.h(0,s)
return b},
c3:function c3(a,b){this.a=a
this.b=b},
aX:function aX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
rz:function rz(a){this.a=a},
iE:function iE(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
tm:function tm(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
rP:function rP(a){this.a=a},
er:function er(a){this.a=a},
rO:function rO(a){this.a=a},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
x_:function x_(a){this.a=a},
v7:function v7(a,b){this.a=a
this.b=b},
qu:function qu(){},
cE:function cE(a,b,c,d,e,f,g,h,i,j){var _=this
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
q1:function q1(a,b){this.a=a
this.b=b},
Ct(a){var s=A.KM(a),r=A.k([],t.s)
if(B.a_.gX(B.a_))r.push("fieldResolvers")
if(B.b.bN(a.x,new A.wG()))r.push("migrationTransform")
if(B.am.gX(B.am))r.push("documentMigrations")
return new A.mZ(s,A.fJ(r,t.N),1,a.a,a.b,2)},
J9(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aQ("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aT(0,new A.wH(),s,r)
p=q.h(0,"formatVersion")
if(!A.au(p))throw A.b(A.aQ("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.Eu("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.au(n)||!j.b(m)||!t.j.b(l)||!A.au(k))throw A.b(A.aQ('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.mZ(m.aT(0,new A.wI(),s,t.X),A.fJ(J.c0(l,new A.wJ(),r),s),p,o,n,k)},
KM(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cK(a.p(),n,m),k=B.a_.gK()
k=A.O(k,A.n(k).i("o.E"))
B.b.aF(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.k([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].p()
o=A.dI(null,null,n,m)
o.D(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.am.gK()
n=A.O(n,A.n(n).i("o.E"))
B.b.aF(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
mZ:function mZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wG:function wG(){},
wH:function wH(){},
wI:function wI(){},
wJ:function wJ(){},
HP(a,b){var s,r=a.a
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
fo:function fo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qf:function qf(a,b){this.a=a
this.b=b},
qi:function qi(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
qh:function qh(a,b){this.a=a
this.b=b},
qb:function qb(a,b,c){this.a=a
this.b=b
this.c=c},
qa:function qa(a,b){this.a=a
this.b=b},
q7:function q7(a,b){this.a=a
this.b=b},
qg:function qg(a,b){this.a=a
this.b=b},
qc:function qc(a,b){this.a=a
this.b=b},
q9:function q9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q8:function q8(){},
qd:function qd(){},
q6:function q6(){},
q5:function q5(){},
q4:function q4(){},
q2:function q2(){},
q3:function q3(){},
ht:function ht(){},
oa:function oa(){},
pv:function pv(a){this.a=a},
pw:function pw(a,b){this.a=a
this.b=b},
px:function px(a){this.a=a},
py:function py(){},
BY(a){return A.pj("lp_conflicts",new A.qv(a))},
bi:function bi(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qv:function qv(a){this.a=a},
qw:function qw(a){this.a=a},
qB:function qB(a,b,c){this.a=a
this.b=b
this.c=c},
qA:function qA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qy:function qy(a,b){this.a=a
this.b=b},
qz:function qz(a,b){this.a=a
this.b=b},
qx:function qx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ni:function ni(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
xl:function xl(a){this.a=a},
xd:function xd(a){this.a=a},
xj:function xj(a,b){this.a=a
this.b=b},
xi:function xi(a){this.a=a},
xh:function xh(a,b){this.a=a
this.b=b},
xk:function xk(a){this.a=a},
xe:function xe(a,b){this.a=a
this.b=b},
xf:function xf(){},
xg:function xg(){},
ex(a){return new A.d5(a)},
Dg(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fe(a,b)
r=A.bh(a,s)
q=A.ah(r)
p=A.ar(B.l.v(B.e.v(q)).a)
return new A.eA(b,s,q,p,k)}catch(m){l=A.D(m)
if(l instanceof A.d5){o=l
return new A.eA(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.eA(b,k,k,k,l)}}},
MX(a,b){var s,r=A.k([],t.i7)
for(s=J.E(b);s.k();)r.push(A.Dg(a,s.gn()))
return r},
Df(a,b){var s=0,r=A.h(t.eT),q
var $async$Df=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.MX(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Df,r)},
fe(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bb(b.d,j,i),g=a.gd7(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.ex('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bx(r))throw A.b(A.ex('Field "archived" must be a boolean, got '+J.c_(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.q)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.ex('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.D9(o,n)
if(m!=null)throw A.b(A.ex(A.Lx(o,n,m)))
q.j(0,s,n)}for(j=new A.aN(h,A.n(h).i("aN<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.E(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
Lx(a,b,c){var s,r=a.a,q=J.c_(b)
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
case 6:s='Field "'+r+'" has unknown enum value "'+A.r(b)+'".'
break
default:s=null}return s},
i4(a){var s,r,q,p
if(a==null||a.length===0)return B.j
s=null
try{s=B.h.aw(a,null)}catch(q){r=A.D(q)
p=A.ex("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.ex("Corrupt payload JSON: expected an object, got "+J.c_(s).l(0)+"."))
return A.bb(s,t.N,t.X)},
d5:function d5(a){this.a=a},
eA:function eA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bJ(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aO(i),g=A.d4(a.gK(),i)
g.D(0,b.gK())
for(g=A.hF(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.t.Y(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.kD(o.gK(),new A.B8())&&J.kD(n.gK(),new A.B9())){m=A.bJ(A.bb(o,i,q),A.bb(n,i,q))
for(l=A.n(m),k=new A.e1(m,m.r,l.i("e1<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
ID(a,b,c,d,e,f,g){return new A.uV()},
Lr(a,b){var s,r,q=a.b
if(q.gF(q))return null
for(s=b;;){q.h(0,s)
r=B.a.df(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
Ci(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$Ci=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.IE(B.c_,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Ci,r)},
IE(a,b,c,d,e,f,g){var s,r,q,p=A.bJ(b,c),o=A.bJ(b,f)
A.ID(b,p,o,c,e,f,g)
s=t.N
r=A.d4(c.gK(),s)
r.D(0,new A.T(f,A.n(f).i("T<1>")))
r.D(0,b.gK())
q=A.O(r,A.n(r).c)
return A.v0(a,b,p,o,0,q,c,A.u(s,t.X),d,e,f,new A.zX(),g)},
v0(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
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
h.j(0,s,m)}return A.v0(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.Ed(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.w)return l.V(new A.v1(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.v0(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
Ed(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.t.Y(a1,a4))return a1
if(B.t.Y(a1,a0))return a4
if(B.t.Y(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kD(a1.gK(),new A.uW()))if(J.kD(a4.gK(),new A.uX()))if(a0!=null)r=s.b(a0)&&J.kD(a0.gK(),new A.uY())
else r=!0
if(r){r=t.N
q=t.X
p=A.bb(a1,r,q)
o=A.bb(a4,r,q)
n=a0==null?null:A.bb(s.a(a0),r,q)
s=A.aO(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.D(0,l)
s.D(0,new A.T(p,A.n(p).i("T<1>")))
s.D(0,new A.T(o,A.n(o).i("T<1>")))
k=A.u(r,q)
j=[]
for(r=s.$ti.c,l=A.hF(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.Ed(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.hF(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.C6(new A.X(j,new A.uZ(),A.a_(j).i("X<1,A<j?>>")),q).V(new A.v_(s,k),q)}A.Lr(a3,a2)
return a4},
Gr(a,b,c,d,e,f){return A.Ci(a,b,c,d,e,f)},
B8:function B8(){},
B9:function B9(){},
uV:function uV(){},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function mh(a,b,c){this.a=a
this.b=b
this.c=c},
zX:function zX(){this.a=!1},
zV:function zV(){},
yd:function yd(){},
v1:function v1(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
uW:function uW(){},
uX:function uX(){},
uY:function uY(){},
uZ:function uZ(){},
v_:function v_(a,b){this.a=a
this.b=b},
vi:function vi(a,b){this.a=a
this.b=b},
vk:function vk(a){this.a=a},
vl:function vl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pI:function pI(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(){},
jh:function jh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vn:function vn(a,b){this.a=a
this.b=b},
vt:function vt(a,b){this.a=a
this.b=b},
vr:function vr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vq:function vq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vp:function vp(a,b,c){this.a=a
this.b=b
this.c=c},
vs:function vs(a){this.a=a},
ed:function ed(a,b){this.a=a
this.b=b},
mK:function mK(a,b){this.b=a
this.f=b},
w4:function w4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wc:function wc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wb:function wb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w6:function w6(a,b,c){this.a=a
this.b=b
this.c=c},
w5:function w5(a,b,c){this.a=a
this.b=b
this.c=c},
w8:function w8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w7:function w7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wa:function wa(a,b,c){this.a=a
this.b=b
this.c=c},
w9:function w9(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wd:function wd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wf:function wf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wk:function wk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wi:function wi(a,b,c){this.a=a
this.b=b
this.c=c},
wh:function wh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wg:function wg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
we:function we(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wj:function wj(a,b,c,d,e,f,g,h,i,j){var _=this
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
c9:function c9(a,b){this.a=a
this.b=b},
hg:function hg(a,b){this.a=a
this.b=b},
xa:function xa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xb:function xb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
EB(a){return new A.eO(a)},
HE(a){return new A.bN(a)},
Ia(a){return new A.ck(a)},
IO(a){return new A.cm(a)},
bc(a){return new A.eF(a)},
MC(a){var s=a.wQ(),r=new A.Bl()
return A.r(r.$2(A.Co(s),4))+"-"+A.r(r.$1(A.Cm(s)))+"-"+A.r(r.$1(A.vW(s)))+" "+A.r(r.$1(A.Ck(s)))+":"+A.r(r.$1(A.Cl(s)))+":"+A.r(r.$1(A.Cn(s)))+"."+A.r(r.$2(A.Em(s),3))+"Z"},
EA(a){var s=Date.now()
return new A.nx(a,new A.aM(s,0,!1))},
bn:function bn(){},
eO:function eO(a){this.a=a},
db:function db(a,b){this.b=a
this.a=b},
h5:function h5(a){this.a=a},
bN:function bN(a){this.a=a},
ck:function ck(a){this.a=a},
cm:function cm(a){this.a=a},
eD:function eD(a){this.a=a},
eF:function eF(a){this.a=a},
en:function en(a){this.a=a},
dw:function dw(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fW:function fW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jg:function jg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kQ:function kQ(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
Bl:function Bl(){},
nx:function nx(a,b){this.a=a
this.c=b},
Jn(a){return 0.5+B.as.n_()},
CA(a){var s,r=a.toLowerCase()
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
Jo(a){var s,r,q,p,o,n,m,l,k=null,j=A.af("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ea(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.CA(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aH(r)
p=s[1]
p.toString
p=A.aH(p)
o=s[4]
o.toString
o=A.aH(o)
n=s[5]
n.toString
n=A.aH(n)
s=s[6]
s.toString
return A.CB(r,q,p,o,n,A.aH(s))}j=A.af("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ea(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.CA(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aH(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aH(r)
p=s[4]
p.toString
p=A.aH(p)
o=s[5]
o.toString
o=A.aH(o)
s=s[6]
s.toString
return A.CB(l,q,r,p,o,A.aH(s))}j=A.af("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ea(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.CA(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aH(r)
p=s[2]
p.toString
p=A.aH(p)
o=s[3]
o.toString
o=A.aH(o)
n=s[4]
n.toString
n=A.aH(n)
s=s[5]
s.toString
return A.CB(r,q,p,o,n,A.aH(s))}return k},
CB(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.BZ(a,b,c,d,e,f,0)
return s}catch(r){return null}},
xc:function xc(a,b){this.at=a
this.ay=b},
jf:function jf(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
xn:function xn(a,b){this.a=a
this.b=b},
Ga(a,b,c,d,e,f,g,h,i,j){var s,r=A.Gt(a,b,c,null,d,e,f,g,h,i,j),q=A.u(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.Z[s],r[s])
return q},
Gt(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.G7(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
G7(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
Ma(a,b,c,d,e,f,g){var s,r=null,q=A.GF(B.a6,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.u(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.Y[s],q[s])
return p},
GF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.G8(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
G8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
GB(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
i5(a){return new A.X(a,new A.BG(),A.a_(a).i("X<1,l>")).B(0,", ")},
jv(a){return A.pj("lp_sync_row",new A.xm(a))},
mz(a){return A.pj("lp_outbox",new A.vo(a))},
IP(a){return A.pj("lp_op_queue",new A.vj(a))},
kw(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aO(n)
l=A.O(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.B(A.ae(k,"?",!1,n),", ")
k=a.ai("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kw)
case 3:j.D(0,i.c0(h.a(d),new A.BE(),n))
k=A.O(l,n)
k.push("pending")
k.push("failed")
k=a.ai("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kw)
case 4:j.D(0,i.c0(h.a(d),new A.BF(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kw,r)},
i7(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$i7=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.em("lp_blobs",A.k(["hash"],q),1,"hash = ?",A.k([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$i7)
case 5:s=p.bA(o.a(f))?2:4
break
case 2:q=a.aC(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$i7)
case 6:s=3
break
case 4:q=a.aE("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.k([c,b],t.hf))
s=7
return A.a(q,$async$i7)
case 7:case 3:return A.e(null,r)}})
return A.f($async$i7,r)},
Be(a,b){var s=0,r=A.h(t.H),q,p
var $async$Be=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aE(u.y,A.k([b],t.s))
s=3
return A.a(p,$async$Be)
case 3:case 1:return A.e(q,r)}})
return A.f($async$Be,r)},
cB(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cB=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.n7("lp_file_refs",A.k(["ref_id","hash"],n),"store = ? AND record_id = ?",A.k([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cB)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.Z("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cB)
case 5:o=A.a6(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.Be(a,o),$async$cB)
case 8:case 7:s=3
break
case 4:m=a.Z("lp_conflicts","store = ? AND record_id = ?",A.k([b,c],n))
s=9
return A.a(m,$async$cB)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.k([b,c],n))
s=10
return A.a(m,$async$cB)
case 10:s=d?11:12
break
case 11:m=a.Z("lp_outbox","store = ? AND record_id = ?",A.k([b,c],n))
s=13
return A.a(m,$async$cB)
case 13:n=a.Z("lp_sync_row","store = ? AND record_id = ?",A.k([b,c],n))
s=14
return A.a(n,$async$cB)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cB,r)},
cQ:function cQ(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
BG:function BG(){},
cP:function cP(a,b,c,d,e,f,g,h,i,j){var _=this
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
xm:function xm(a){this.a=a},
co:function co(a,b,c,d,e,f,g,h,i,j){var _=this
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
vo:function vo(a){this.a=a},
eC:function eC(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
vj:function vj(a){this.a=a},
BE:function BE(){},
BF:function BF(){},
CE(a,b,c,d,e){var s=e==null?A.k([],t.eb):e
return new A.bG(a,b,c,s,d,new A.A1())},
nE(a){var s=$.C.h(0,$.kB())
if(s instanceof A.bG&&s.a===a)return s
return null},
bG:function bG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xx:function xx(a,b,c){this.a=a
this.b=b
this.c=c},
A1:function A1(){this.a=0
this.b=null},
lt:function lt(a,b){this.a=a
this.b=b},
xp:function xp(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
xw:function xw(a){this.a=a},
xs:function xs(a){this.a=a},
xv:function xv(a,b,c){this.a=a
this.b=b
this.c=c},
xu:function xu(a,b,c){this.a=a
this.b=b
this.c=c},
xt:function xt(a,b,c){this.a=a
this.b=b
this.c=c},
xr:function xr(a){this.a=a},
xq:function xq(){},
ob:function ob(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
yQ:function yQ(a,b){this.a=a
this.b=b},
yP:function yP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yN:function yN(a,b){this.a=a
this.b=b},
yO:function yO(a,b){this.a=a
this.b=b},
yM:function yM(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b},
Mf(a,b,c){var s,r,q,p,o=A.k([],t.s)
for(s=J.E(a);s.k();){r=new A.a2("")
A.cg(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aF(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.ar(B.l.v(B.e.v(p)).a)},
mO:function mO(a,b,c){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.d=_.c=null
_.f=_.e=!1
_.r=null},
wz:function wz(){},
wy:function wy(a){this.a=a},
wA:function wA(a){this.a=a},
mw:function mw(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
vh:function vh(a){this.a=a},
fn:function fn(){},
y8:function y8(a,b){this.a=a
this.b=0
this.c=b},
y9:function y9(a,b,c){this.a=a
this.b=b
this.c=c},
N7(a){if(a instanceof A.dJ){if(a instanceof A.eQ)return"ValidationException"
if(a instanceof A.eP)return"UniqueConstraintException"
if(a instanceof A.eB)return"NotNullConstraintException"
if(a instanceof A.fm)return"CheckConstraintException"
if(a instanceof A.fU)return"PrimaryKeyConstraintException"
if(a instanceof A.fE)return"ForeignKeyConstraintException"
if(a instanceof A.cO)return"StorageError"
if(a instanceof A.h_)return"RecordNotFoundException"
if(a instanceof A.h3)return"SchemaTooNewError"
if(a instanceof A.fG)return"FtsUnavailableError"
if(a instanceof A.hl)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eJ)return"SchemaRegistrationError"
if(a instanceof A.ha)return"StaleCursorError"
if(a instanceof A.fN)return"MissingLimitError"
if(a instanceof A.fq)return"ConflictBlockedError"
if(a instanceof A.em)return"DestructiveMigrationRefusedError"
if(a instanceof A.fZ)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bn){if(a instanceof A.eO)return"TransientNetworkError"
if(a instanceof A.db)return"ServerBusyError"
if(a instanceof A.h5)return"ServerError"
if(a instanceof A.bN)return"AuthError"
if(a instanceof A.ck)return"ForbiddenError"
if(a instanceof A.cm)return"NotFoundError"
if(a instanceof A.eD)return"PayloadError"
if(a instanceof A.eF)return"ProtocolError"
if(a instanceof A.en)return"DuplicateIdError"
if(a instanceof A.dw)return"BatchFailedError"
return"SyncError"}if(a instanceof A.je)return"ProtocolEnvelopeException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bl)return"StateError"
if(a instanceof A.bB)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
Jx(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.au(s))throw A.b(A.bU('Request "v" must be an int.'))
if(!A.au(r)||r<0)throw A.b(A.bU('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dm.E(0,q))throw A.b(A.bU("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.bU('Request "a" must be a map.'))
return new A.hq(s,r,q,p.aT(0,new A.xY(),t.N,t.X))},
bU(a){return new A.je(a)},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xY:function xY(){},
nU:function nU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xV:function xV(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a){this.a=a},
EI(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
xT:function xT(a){this.b=a
this.d=null},
xU:function xU(a){this.a=a},
oz:function oz(a){this.a=a},
IA(a){var s,r,q
try{s=A.ph(a)
if(t.f.b(s)){r=A.fb(s)
return r}}catch(q){}return null},
IB(a){if(a instanceof A.jA)return A.pi(new A.nU(3,a.a,a.b,null).p())
t.bp.a(a)
return A.Cg(a.a,a.b,a.c,a.d)},
Cg(a,b,c,d){return A.pi(new A.nU(3,a,null,new A.xV(b,c,d)).p())},
kn(a){return A.Lp(a)},
Lp(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kn=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.i6()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a5(f.getDirectory(),k),$async$kn)
case 7:n=c
j=$.i8()
i=A.O(j.cR(0,"drift_db"),t.N)
m=i
J.Ds(m,j.cR(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.as(l)===0){s=9
break}s=11
return A.a(A.a5(n.getDirectoryHandle(l,{create:!1}),k),$async$kn)
case 11:n=c
case 9:m.length===j||(0,A.q)(m),++h
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
return A.f($async$kn,r)},
p8(a,b){return A.Lq(a,b)},
Lq(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$p8=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kn(a),$async$p8)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a5(m.getFileHandle(A.dP(b,$.i8().a).gjK(),{create:!1}),t.m),$async$p8)
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
return A.f($async$p8,r)},
pb(a,b){return A.Ly(a,b)},
Ly(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$pb=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kn(a),$async$pb)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.C4(m,A.dP(b,$.i8().a).gjK()),$async$pb)
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
return A.f($async$pb,r)},
uC:function uC(){},
uD:function uD(a){this.a=a},
uE:function uE(a){this.a=a},
mf:function mf(a,b,c){this.a=a
this.d=b
this.e=c},
uN:function uN(a,b,c){this.a=a
this.b=b
this.c=c},
oc:function oc(a){this.a=a},
yW:function yW(){},
yX:function yX(){},
MZ(a){var s,r,q,p,o,n,m,l,k,j,i="maxDocBytes",h="destructiveBackup"
if(a==null)return A.u(t.N,t.X)
s=t.f
if(!s.b(a))throw A.b(A.bU("Open options must be a map."))
r=A.fb(a)
q=t.X
p=A.u(t.N,q)
o=r.h(0,"stores")
if(o!=null){if(!t.j.b(o))throw A.b(A.bU('"stores" must be a list.'))
n=A.k([],t.oq)
for(m=J.E(o);m.k();){l=m.gn()
if(!s.b(l))A.t(A.a8("Schema must be a map: "+A.r(l),null,null))
n.push(A.q0(A.fb(l),q))}p.j(0,"stores",n)}k=r.h(0,i)
if(k!=null){if(!A.au(k))throw A.b(A.bU('"maxDocBytes" must be an int.'))
p.j(0,i,k)}j=r.h(0,h)
if(j!=null){if(!A.bx(j))throw A.b(A.bU('"destructiveBackup" must be a bool.'))
p.j(0,h,j)}return p},
Gz(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.fb(a).h(0,b)
return s}}catch(r){}return null},
MH(a,b){if(b!=null)return!1
return B.b.bN(a,new A.Bq())},
Bq:function Bq(){},
Bp:function Bp(){},
y_:function y_(a){this.a=a},
fb(a){var s=A.u(t.N,t.X)
a.a8(0,new A.Bg(s))
return s},
hs:function hs(){},
jA:function jA(a,b){this.b=a
this.a=b},
eS:function eS(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
Bg:function Bg(a){this.a=a},
Bf:function Bf(){},
nX:function nX(){},
y2:function y2(a,b){var _=this
_.f=$
_.c=a
_.d=b
_.e=null},
y3:function y3(a){this.a=a},
nW:function nW(){},
y0:function y0(a){this.a=a},
y1:function y1(){},
p0:function p0(){},
FM(a){return a},
G1(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=a+"("
p.a=o
n=A.a_(b)
m=n.i("cu<1>")
l=new A.cu(b,0,s,m)
l.iN(b,0,s,n.c)
m=o+new A.X(l,new A.B0(),m.i("X<Z.E,l>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.R(p.l(0),null))}},
qD:function qD(a){this.a=a},
qE:function qE(){},
qF:function qF(){},
B0:function B0(){},
tu:function tu(){},
dP(a,b){var s,r,q,p,o,n=b.o3(a),m=b.cH(a)
if(n!=null)a=B.a.ae(a,n.length)
s=t.s
r=A.k([],s)
q=A.k([],s)
s=a.length
if(s!==0&&b.cd(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cd(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ae(a,p))
q.push("")}return new A.mA(b,n,m,r,q)},
mA:function mA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Ej(a){return new A.mB(a)},
mB:function mB(a){this.a=a},
Jm(){var s,r,q,p,o,n,m,l,k=null
if(A.CF().gb_()!=="file")return $.kA()
if(!B.a.c9(A.CF().gbp(),"/"))return $.kA()
s=A.Fh(k,0,0)
r=A.Ff(k,0,0,!1)
q=A.An(k,0,0,k)
p=A.Fe(k,0,0)
o=A.Am(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Fg("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.CV(l,m)
else l=A.f5(l)
if(A.kg("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).kv()==="a\\b")return $.pm()
return $.GR()},
x9:function x9(){},
vS:function vS(a,b,c){this.d=a
this.e=b
this.f=c},
xF:function xF(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
xZ:function xZ(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
C3(a,b){if(b<0)A.t(A.aZ("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.t(A.aZ("Offset "+b+u.D+a.gm(0)+"."))
return new A.lK(a,b)},
wS:function wS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lK:function lK(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
Ih(a,b){var s=A.Ii(A.k([A.JV(a,!0)],t.pg)),r=new A.tk(b).$0(),q=B.c.l(B.b.ga1(s).b+1),p=A.Ij(s)?0:3,o=A.a_(s)
return new A.t0(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.t2(),o.i("X<1,i>")).wz(0,B.bA),!A.MP(new A.X(s,new A.t3(),o.i("X<1,j?>"))),new A.a2(""))},
Ij(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
Ii(a){var s,r,q=A.MG(a,new A.t5(),t.nf,t.K)
for(s=A.n(q),r=new A.aS(q,q.r,q.e,s.i("aS<2>"));r.k();)J.Dw(r.d,new A.t6())
s=s.i("aN<1,2>")
r=s.i("iw<o.E,cy>")
s=A.O(new A.iw(new A.aN(q,s),new A.t7(),r),r.i("o.E"))
return s},
JV(a,b){var s=new A.zx(a).$0()
return new A.br(s,!0,null)},
JX(a){var s,r,q,p,o,n,m=a.gaK()
if(!B.a.E(m,"\r\n"))return a
s=a.gN().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga3()
o=a.gN().gag()
p=A.n6(s,a.gN().gaq(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gbc()
return A.wT(r,p,o,A.z(n,"\r\n","\n"))},
JY(a){var s,r,q,p,o,n,m
if(!B.a.c9(a.gbc(),"\n"))return a
if(B.a.c9(a.gaK(),"\n\n"))return a
s=B.a.A(a.gbc(),0,a.gbc().length-1)
r=a.gaK()
q=a.gR()
p=a.gN()
if(B.a.c9(a.gaK(),"\n")){o=A.Bk(a.gbc(),a.gaK(),a.gR().gaq())
o.toString
o=o+a.gR().gaq()+a.gm(a)===a.gbc().length}else o=!1
if(o){r=B.a.A(a.gaK(),0,a.gaK().length-1)
if(r.length===0)p=q
else{o=a.gN().gar()
n=a.ga3()
m=a.gN().gag()
p=A.n6(o-1,A.EZ(s),m-1,n)
q=a.gR().gar()===a.gN().gar()?p:a.gR()}}return A.wT(q,p,r,s)},
JW(a){var s,r,q,p,o
if(a.gN().gaq()!==0)return a
if(a.gN().gag()===a.gR().gag())return a
s=B.a.A(a.gaK(),0,a.gaK().length-1)
r=a.gR()
q=a.gN().gar()
p=a.ga3()
o=a.gN().gag()
p=A.n6(q-1,s.length-B.a.df(s,"\n")-1,o-1,p)
return A.wT(r,p,s,B.a.c9(a.gbc(),"\n")?B.a.A(a.gbc(),0,a.gbc().length-1):a.gbc())},
EZ(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.i8(a,"\n",s-2)-1
else return s-B.a.df(a,"\n")-1},
t0:function t0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tk:function tk(a){this.a=a},
t2:function t2(){},
t1:function t1(){},
t3:function t3(){},
t5:function t5(){},
t6:function t6(){},
t7:function t7(){},
t4:function t4(a){this.a=a},
tl:function tl(){},
t8:function t8(a){this.a=a},
tf:function tf(a,b,c){this.a=a
this.b=b
this.c=c},
tg:function tg(a,b){this.a=a
this.b=b},
th:function th(a){this.a=a},
ti:function ti(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
td:function td(a,b){this.a=a
this.b=b},
te:function te(a,b){this.a=a
this.b=b},
t9:function t9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ta:function ta(a,b,c){this.a=a
this.b=b
this.c=c},
tb:function tb(a,b,c){this.a=a
this.b=b
this.c=c},
tc:function tc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tj:function tj(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
zx:function zx(a){this.a=a},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n6(a,b,c,d){if(a<0)A.t(A.aZ("Offset may not be negative, was "+a+"."))
else if(c<0)A.t(A.aZ("Line may not be negative, was "+c+"."))
else if(b<0)A.t(A.aZ("Column may not be negative, was "+b+"."))
return new A.cs(d,a,c,b)},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n7:function n7(){},
n9:function n9(){},
Jf(a,b,c){return new A.h8(c,a,b)},
na:function na(){},
h8:function h8(a,b,c){this.c=a
this.a=b
this.b=c},
h9:function h9(){},
wT(a,b,c,d){var s=new A.dd(d,a,b,c)
s.oH(a,b,c)
if(!B.a.E(d,c))A.t(A.R('The context line "'+d+'" must contain "'+c+'".',null))
if(A.Bk(d,c,a.gaq())==null)A.t(A.R('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
dd:function dd(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Jj(a){var s
A:{if(18===a){s=B.dn
break A}if(23===a){s=B.dp
break A}if(9===a){s=B.dq
break A}s=null
break A}return s},
jo:function jo(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
Ji(a,b,c,d,e,f,g){return new A.c7(d,b,c,e,f,a,g)},
c7:function c7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wY:function wY(){},
kI:function kI(a){this.a=a},
KX(a,b,c){var s,r,q,p,o,n=new A.nP(c,A.ae(c.b,null,!1,t.X))
try{A.FA(a,b.$1(n))}catch(r){s=A.D(r)
q=B.e.v(A.it(s))
p=a.a
o=p.cB(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
FA(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.au(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EL(b).l(0)))
break A}if(b instanceof A.aJ){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.DD(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bx(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EL(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cB(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cB(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.as(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.FA(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.t(A.az(b,"result","Unsupported type"))}return s},
r3:function r3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
rc:function rc(a){this.a=a},
rb:function rb(a){this.a=a},
rd:function rd(a){this.a=a},
r9:function r9(a){this.a=a},
r8:function r8(a){this.a=a},
ra:function ra(a){this.a=a},
r5:function r5(a){this.a=a},
r4:function r4(a){this.a=a},
r6:function r6(a){this.a=a},
re:function re(a){this.a=a},
r7:function r7(a,b){this.a=a
this.b=b},
nP:function nP(a,b){this.a=a
this.b=b},
e4:function e4(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
Ac:function Ac(a,b){this.a=a
this.b=b},
Ad:function Ad(a,b,c){this.a=a
this.b=b
this.c=c},
Ae:function Ae(a,b,c){this.a=a
this.b=b
this.c=c},
wU:function wU(){},
hb:function hb(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
C8(a,b){var s=$.pl()
return new A.lY(A.u(t.N,t.a_),s,a)},
lY:function lY(a,b,c){this.d=a
this.b=b
this.a=c},
op:function op(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
N_(a){var s=J.Hy(new v.G.URL(a,"file:///").pathname,"/")
return new A.am(s,new A.Bz(),A.a_(s).i("am<1>"))},
Bz:function Bz(){},
qJ:function qJ(){},
mU:function mU(a,b,c){this.d=a
this.a=b
this.c=c},
c6:function c6(a,b){this.a=a
this.b=b},
zW:function zW(a){this.a=a
this.b=-1},
oF:function oF(){},
oG:function oG(){},
oI:function oI(){},
oJ:function oJ(){},
vm:function vm(a,b){this.a=a
this.b=b},
J3(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bB(r,"step")}return s},
ej:function ej(){},
bP:function bP(a){this.a=a},
li:function li(a){this.a=a},
hm(a){return new A.dh(a)},
DB(a,b){var s,r,q,p
if(b==null)b=$.pl()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cI(256)
r&2&&A.H(a)
a[q]=p}},
dh:function dh(a){this.a=a},
jn:function jn(a){this.a=a},
b4:function b4(){},
kY:function kY(){},
kX:function kX(){},
N5(a,b){var s=null,r=new A.ev(t.kk)
return A.pk(a,new A.jB(s,s,s,s,s,s,s,s,new A.BJ(new A.BI(r,A.AT(new A.BK(r)))),s,s,s,s),s,b)},
eT:function eT(a){var _=this
_.d=a
_.c=_.b=_.a=null},
BK:function BK(a){this.a=a},
BI:function BI(a,b){this.a=a
this.b=b},
BJ:function BJ(a){this.a=a},
xQ:function xQ(a){this.a=a},
xL:function xL(a,b,c){this.a=a
this.b=b
this.c=c},
xS:function xS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xR:function xR(a,b,c){this.b=a
this.c=b
this.d=c},
dW:function dW(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
bY(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.D(r)
if(q instanceof A.dh){s=q
return s.a}else return 1}},
ll:function ll(a){this.b=this.a=$
this.d=a},
qP:function qP(a,b,c){this.a=a
this.b=b
this.c=c},
qM:function qM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qR:function qR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qT:function qT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qV:function qV(a,b){this.a=a
this.b=b},
qO:function qO(a){this.a=a},
qU:function qU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qZ:function qZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qX:function qX(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
qQ:function qQ(a,b,c){this.a=a
this.b=b
this.c=c},
qS:function qS(a,b){this.a=a
this.b=b},
qY:function qY(a,b){this.a=a
this.b=b},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a,b){this.a=a
this.$ti=b},
pz:function pz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pB:function pB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
cF(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.bq(a,"success",new A.qm(r,a,b),!1,q)
A.bq(a,"error",new A.qn(r,a),!1,q)
return s},
HT(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.bq(a,"success",new A.qr(r,a,b),!1,q)
A.bq(a,"error",new A.qs(r,a),!1,q)
A.bq(a,"blocked",new A.qt(r),!1,q)
return s},
eX:function eX(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
z_:function z_(a,b){this.a=a
this.b=b},
z0:function z0(a,b){this.a=a
this.b=b},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
qn:function qn(a,b){this.a=a
this.b=b},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(a,b){this.a=a
this.b=b},
qt:function qt(a){this.a=a},
i6(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
DX(a,b,c){var s=a.read(b,c)
return s},
DY(a,b,c){var s=a.write(b,c)
return s},
C4(a,b){return A.a5(a.removeEntry(b,{recursive:!1}),t.X)},
DW(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.t(A.R("Target object does not implement the async iterable interface",null))
return new A.f0(new A.rH(),new A.id(a,s),s.i("f0<a9.T,L>"))},
rH:function rH(){},
xM:function xM(a){this.a=a},
xN:function xN(a){this.a=a},
xP(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$xP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a5(p.fetch(new p.URL(a,A.bg(p.location).href),null),t.m),$async$xP)
case 3:q=o.xO(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xP,r)},
xO(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$xO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.ll(A.u(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.xM(p).ia(a),$async$xO)
case 3:q=new o.hn(new n.xQ(m.Jw(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xO,r)},
hn:function hn(a){this.a=a},
JZ(a){var s=new A.jT(a,new A.ap(new A.w($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.oL(a)
return s},
m_(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$m_=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.pC(a)
n=A.C8("dart-memory",null)
m=$.pl()
l=new A.dE(o,n,new A.ev(t.p3),A.aO(p),A.u(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.ii(),$async$m_)
case 3:s=4
return A.a(l.eQ(),$async$m_)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$m_,r)},
pC:function pC(a){this.a=null
this.b=a},
pF:function pF(a){this.a=a},
pE:function pE(a,b,c){this.a=a
this.b=b
this.c=c},
pD:function pD(a){this.a=a},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
zA:function zA(a){this.a=a},
zB:function zB(a){this.a=a},
zz:function zz(a){this.a=a},
zC:function zC(a,b,c){this.a=a
this.b=b
this.c=c},
zE:function zE(a,b){this.a=a
this.b=b},
zD:function zD(a,b){this.a=a
this.b=b},
zb:function zb(a,b,c){this.a=a
this.b=b
this.c=c},
zc:function zc(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
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
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
tp:function tp(){},
tn:function tn(a,b){this.a=a
this.b=b},
oq:function oq(a,b,c){this.a=a
this.b=b
this.c=c},
zy:function zy(a,b){this.a=a
this.b=b},
b6:function b6(){},
jR:function jR(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
jL:function jL(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hy:function hy(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hS:function hS(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
Ev(a){var s=A.C8("dart-memory",null),r=$.pl()
return new A.h7(s,r,a)},
n2(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$n2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.i6()
if(j==null)throw A.b(A.hm(1))
p=t.m
s=3
return A.a(A.a5(j.getDirectory(),p),$async$n2)
case 3:o=d
n=A.N_(a),m=J.E(n.a),n=new A.cV(m,n.b,n.$ti.i("cV<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a5(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$n2)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a4(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n2,r)},
n3(a){var s=0,r=A.h(t.m),q
var $async$n3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n2(a,!0),$async$n3)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n3,r)},
wQ(a,b){var s=0,r=A.h(t.g_),q,p
var $async$wQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.i6()==null)throw A.b(A.hm(1))
p=A
s=3
return A.a(A.n3(a),$async$wQ)
case 3:q=p.wP(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wQ,r)},
wP(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$wP=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.Ev(c)
s=3
return A.a(p.cK(a,!1),$async$wP)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wP,r)},
fD:function fD(a,b,c){this.c=a
this.a=b
this.b=c},
h7:function h7(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
wR:function wR(a,b){this.a=a
this.b=b},
oO:function oO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
zS:function zS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Jw(a,b){var s=A.bg(a.exports.memory)
b.b!==$&&A.cf()
b.b=s
s=new A.xG(s,b,a.exports)
s.oI(a,b)
return s},
nZ(a,b){var s,r=A.bT(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dX(a,b,c){var s=a.buffer
return B.o.f0(A.bT(s,b,c==null?A.nZ(a,b):c))},
CG(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.f0(A.bT(s,b,c==null?A.nZ(a,b):c))},
EJ(a,b,c){var s=new Uint8Array(c)
B.f.cQ(s,0,A.bT(a.buffer,b,c))
return s},
xG:function xG(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
xH:function xH(a){this.a=a},
xI:function xI(a){this.a=a},
xJ:function xJ(a){this.a=a},
xK:function xK(a){this.a=a},
Ba(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$Ba=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kC()
s=l!=null?3:5
break
case 3:p=A.Lu()
s=6
return A.a(A.jz(l,p,null,null,!1),$async$Ba)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a4({port:m.port1,lockName:p},new A.im(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Ba,r)},
Lu(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bu(97+$.Hi().cI(26))
return r.charCodeAt(0)==0?r:r},
HJ(a){return new A.ik(a)},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
vZ:function vZ(){},
w2:function w2(a){this.a=a},
w3:function w3(a){this.a=a},
w1:function w1(a){this.a=a},
w0:function w0(a){this.a=a},
w_:function w_(a){this.a=a},
ik:function ik(a){this.a=a},
r1:function r1(){},
lh:function lh(a){this.a=a},
qK:function qK(a){this.a=a},
eR:function eR(){},
lB(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lB=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n3(a),$async$lB)
case 3:p=e
o=A.Ev(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cK(p,!0),$async$lB)
case 6:case 5:q=new A.lA(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lB,r)},
lA:function lA(a,b,c){this.a=a
this.b=b
this.c=c},
rZ:function rZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jz(a,b,c,d,e){var s,r,q={},p=new A.w($.C,t.nI),o=new A.ap(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.C5(A.a5(a.request(b,s,A.cY(new A.xW(q,o))),r),new A.xX(q,d,o),r,t.K)
return p},
xW:function xW(a,b){this.a=a
this.b=b},
xX:function xX(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a){this.a=a},
lm:function lm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
rg:function rg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rf:function rf(a,b){this.a=a
this.b=b},
rh:function rh(a){this.a=a},
j1:function j1(a){this.a=!1
this.b=a},
ve:function ve(a,b){this.a=a
this.b=b},
vd:function vd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vc:function vc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
HQ(a){var s,r,q,p,o=A.k([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bO(n,A.a_(n).i("bO<1,l>"))
for(s=J.M(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a4(A.fx(B.cR,s.h(m,q)),s.h(m,q+1)))}s=A.hU(a.b)
q=A.hU(a.c)
p=A.hU(a.d)
return new A.ek(o,s,q,A.hU(a.g),p)},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
J6(a){var s
if(J.x(a.t,"errorResponse")){s=A.I4(a)
if(s!=null&&s instanceof A.du)return s
else return new A.h0(a.e)}else return new A.h0("Did not respond with expected type, got "+A.r(a))},
I4(a){var s=a.s,r=s==null?null:A.aq(s)
A:{if(0===r){s=A.I5(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
I5(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.y("Pattern matching error"))
n=new A.rx()
l=A.aq(A.f6(l))
A.G(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.el(i,h,A.bT(h,0,o))}else p=o
n=n.$1(k)
A.Fq(g)
return new A.c7(s,r,l,g==null?o:A.aq(g),n,q,p)},
I6(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Jq(l)
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
J7(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.rZ(a2,512,"transfer" in a2)
a5.mt(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.J3(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.q8(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aE}else g=B.aF
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aG
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.nZ(r,f)
f=new Uint8Array(e,f,d)
c=new A.dm(!1).cW(f,0,a,!0)
i=c
g=B.aH
break
case 4:i=s.kP(j)
g=B.aI
break
case 5:default:i=a
g=B.aJ}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.nZ(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dm(!1).cW(a0,0,a,!0)}return A.Gs(!1,b,0,0,a1,a,a3.wO(0))},
MQ(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
rx:function rx(){},
Gs(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
i0(a){var s,r,q,p,o=v.G,n=new o.Array()
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
Mu(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mi:function mi(a,b,c){this.a=a
this.b=b
this.$ti=c},
wF:function wF(){},
I9(a){var s,r
for(s=0;s<5;++s){r=B.cE[s]
if(r.c===a)return r}throw A.b(A.R("Unknown FS implementation: "+a,null))},
Jp(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aJ
break A}q=A.au(a)
p=q?a:j
if(q){s=p
r=B.aE
break A}q=a instanceof A.aJ
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.aF
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aG
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aH
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aI
break A}q=A.bx(a)
k=q?a:j
if(q){s=k
r=B.bo
break A}throw A.b(A.R("Unsupported value: "+A.r(a),j))}return new A.a4(r,s)},
Jq(a){var s,r,q,p,o,n
if(a instanceof A.el)return new A.a4(a.a,a.b)
s=[]
r=J.M(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.Jp(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a4(s,t.a.a(B.f.gab(p)))},
dA:function dA(a,b,c){this.c=a
this.a=b
this.b=c},
cw:function cw(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
pf(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$pf=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bg(i.indexedDB)
i=$.kC()
i=i==null?null:A.jz(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bw(i,t.b3),$async$pf)
case 3:l=b
p=5
s=8
return A.a(A.HS(m.open("drift_mock_db"),t.m),$async$pf)
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
return A.f($async$pf,r)},
B6(a){return A.Md(a)},
Md(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$B6=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bg(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cY(new A.B7(j,m))
s=7
return A.a(A.HR(m,t.m),$async$B6)
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
return A.f($async$B6,r)},
i3(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$i3=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.i6()
if(h==null){q=B.q
s=1
break}j=t.m
s=3
return A.a(A.a5(h.getDirectory(),j),$async$i3)
case 3:m=b
p=5
s=8
return A.a(A.a5(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$i3)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.q
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.k([],t.s)
j=new A.cz(A.cA(A.DW(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$i3)
case 14:if(!b){s=13
break}k=j.gn()
if(J.x(k.kind,"directory"))J.aL(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.C(),$async$i3)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i3,r)},
HR(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.bq(a,"success",new A.qk(r,a,b),!1,q)
A.bq(a,"error",new A.ql(r,a),!1,q)
return s},
HS(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.bq(a,"success",new A.qo(r,a,b),!1,q)
A.bq(a,"error",new A.qp(r,a),!1,q)
A.bq(a,"blocked",new A.qq(r,a),!1,q)
return s},
B7:function B7(a,b){this.a=a
this.b=b},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a,b){this.a=a
this.b=b},
qo:function qo(a,b,c){this.a=a
this.b=b
this.c=c},
qp:function qp(a,b){this.a=a
this.b=b},
qq:function qq(a,b){this.a=a
this.b=b},
vV:function vV(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=a
this.b=b},
h0:function h0(a){this.a=a},
du:function du(a){this.a=a},
KW(a){var s=a.gmP()
return new A.f0(new A.AS(),s,A.n(s).i("f0<a9.T,L>"))},
EV(a,b){var s=A.k([],t.kG),r=b==null?a.b:b
return new A.hx(a,r,new A.k6(),new A.k6(),new A.k6(),s)},
JQ(a,b,c){var s=t.S
s=new A.hv(c,A.k([],t.fV),a.a,new A.aI(new A.w($.C,t.D),t.h),A.u(s,t.br),A.u(s,t.m))
s.oF(a)
s.oK(a,b,c)
return s},
FB(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
e7(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e7=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.i6()
if(b==null){q=B.aB
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.kC()
d=d==null?null:A.jz(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bw(d,t.b3),$async$e7)
case 7:j=a1
d=t.m
s=8
return A.a(A.a5(b.getDirectory(),d),$async$e7)
case 8:m=a1
s=9
return A.a(A.a5(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e7)
case 9:l=a1
s=10
return A.a(A.kq(l),$async$e7)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.Cb(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a5(A.bg(e),t.X),$async$e7)
case 13:q=B.aB
n=[1]
s=5
break
case 12:g=i
q=new A.k1(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.aB
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
return A.a(A.C4(m,"_drift_feature_detection"),$async$e7)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e7,r)},
kq(a){return A.LN(a)},
LN(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$kq=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a5(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kq)
case 7:j=c
s=8
return A.a(A.a5(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kq)
case 8:n=c
n.close()
l=j
q=new A.a4(!0,l)
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
return A.a(A.a5(a.createSyncAccessHandle(),t.m),$async$kq)
case 9:m=c
q=new A.a4(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kq,r)},
AS:function AS(){},
k6:function k6(){this.a=null},
hx:function hx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
yR:function yR(a){this.a=a},
yV:function yV(a,b){this.a=a
this.b=b},
yS:function yS(a,b){this.a=a
this.b=b},
yT:function yT(a){this.a=a},
yU:function yU(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
yB:function yB(a){this.a=a},
yG:function yG(a,b){this.a=a
this.b=b},
yJ:function yJ(a,b,c){this.a=a
this.b=b
this.c=c},
yD:function yD(a,b){this.a=a
this.b=b},
yC:function yC(a,b){this.a=a
this.b=b},
yI:function yI(a,b){this.a=a
this.b=b},
yH:function yH(a,b){this.a=a
this.b=b},
yL:function yL(a,b){this.a=a
this.b=b},
yK:function yK(a,b){this.a=a
this.b=b},
yE:function yE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yF:function yF(a,b){this.a=a
this.b=b},
yA:function yA(a){this.a=a},
ln:function ln(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
rk:function rk(a){this.a=a},
rj:function rj(a){this.a=a},
ri:function ri(a,b){this.a=a
this.b=b},
y4:function y4(a,b,c,d,e,f){var _=this
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
y5:function y5(a,b){this.a=a
this.b=b},
y6:function y6(a,b){this.a=a
this.b=b},
y7:function y7(a){this.a=a},
Jy(){var s=v.G
if(A.Io(s,"DedicatedWorkerGlobalScope"))return new A.oh(s,new A.oi(s.location.href))
else return new A.oM(s,new A.oi(s.location.href))},
ki:function ki(){},
oh:function oh(a,b){this.a=a
this.b=b},
oM:function oM(a,b){this.a=a
this.b=b},
A6:function A6(a){this.a=a},
A7:function A7(a,b,c){this.a=a
this.b=b
this.c=c},
A5:function A5(a){this.a=a},
A3:function A3(a){this.a=a},
A4:function A4(a){this.a=a},
oi:function oi(a){this.a=a},
z6:function z6(a){this.a=a},
nh:function nh(a,b,c){this.c=a
this.a=b
this.b=c},
x8:function x8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hj:function hj(){},
or:function or(){},
cx:function cx(a,b){this.a=a
this.b=b},
bq(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.G4(new A.z9(c),t.m)
s=s==null?null:A.cY(s)}s=new A.jP(a,b,s,!1,e.i("jP<0>"))
s.jC()
return s},
G4(a,b){var s=$.C
if(s===B.i)return a
return s.hE(a,b)},
C0:function C0(a,b){this.a=a
this.$ti=b},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jP:function jP(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
z9:function z9(a){this.a=a},
za:function za(a){this.a=a},
GI(a){return v.mangledGlobalNames[a]},
Gw(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Ir(a,b){return b in a},
Cb(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
MG(a,b,c,d){var s,r,q,p,o,n=A.u(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.k([],s)
n.j(0,p,o)
p=o}else p=o
J.aL(p,q)}return n},
C9(a){var s=J.E(a.a)
if(new A.cV(s,a.b,a.$ti.i("cV<1>")).k())return s.gn()
return null},
B3(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.H(a)
a[r]=s&255
b=s/256|0;--r}},
Ng(a){return a},
GG(a){if(a instanceof A.dx)return a
return new A.dx(a)},
Nh(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.D(p)
if(q instanceof A.h8){s=q
throw A.b(A.Jf("Invalid "+a+": "+s.a,s.b,s.gfS()))}else if(t.Y.b(q)){r=q
throw A.b(A.a8("Invalid "+a+' "'+b+'": '+r.gic(),r.gfS(),r.gar()))}else throw p}},
Nc(a,b,c,d){var s=A.z(a,"'","\\'"),r="("+d+"="+("'"+s+"'")+" && id~"+("'"+A.z(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.z(c,"'","\\'")+"'")+")"},
i1(){var s,r,q,p=$.Hj(),o=$.Hc()+1
$.L1=o
s=B.a.ik(B.c.kw(o,36),8,"0")
r=J.E4(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cI(36)]
return B.a.A(s+B.b.ee(r),0,15)},
N1(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
if(a.J(q))p.j(0,q,a.h(0,q))}return p},
N2(a,b){var s,r,q=A.k([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.push(A.N1(a[r],b))
return q},
pj(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.cO)throw q
else{s=r
r=A.hc("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
Bd(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.j
try{s=B.h.aw(a,null)
if(t.f.b(s)){q=A.bb(s,t.N,t.X)
return q}return B.j}catch(p){r=A.D(p)
q=A.hc("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Gg(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bf
try{s=B.h.aw(a,null)
if(t.j.b(s)){q=J.pq(s,t.N)
q=q.fG(q)
return q}return B.bf}catch(p){r=A.D(p)
q=A.hc("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Gf(a){var s,r,q,p,o=null
if(a==null)return B.q
A.G(a)
if(a.length===0)return B.q
s=B.h.aw(a,o)
if(!t.j.b(s))throw A.b(A.a8("expected a JSON array, got "+J.c_(s).l(0),o,o))
r=A.k([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.t(A.a8("dirty-field member is "+J.c_(p).l(0)+", expected String",o,o)))}return r},
fc(a){var s,r=J.M(a)
if(r.gF(a))return null
s=J.bZ(r.gG(a).gaX())
if(A.au(s))return s
if(typeof s=="string")return A.jd(s,null)
return null},
Gk(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.d0(B.x.wJ(r*J.Hr(d.$1(o),0.5,1.5)),0,0)},
MY(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.cf)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.a8("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.as(r)!==32)throw A.b(B.ce)
q=new Uint8Array(32)
for(p=J.M(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.au(n)||n<0||n>255)throw A.b(A.a8("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.Dz(q)
p=$.BQ()
if($.ky()!==B.P)A.t(A.y("BigEndian systems are unsupported"))
return new A.pu(new A.lj(12,32,m),new A.jm(new A.n1(A.Dz(q)),m),p)},
MU(){var s=A.Jy(),r=t.cj
new A.y4(s,B.bN,A.k([],t.az),A.u(t.S,t.lp),new A.j1(A.Cf(r)),new A.j1(A.Cf(r))).ec()},
Ge(){var s,r,q,p,o=null
try{o=A.CF()}catch(s){if(t.mA.b(A.D(s))){r=$.AQ
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.Fx)){r=$.AQ
r.toString
return r}$.Fx=o
if($.Dl()===$.kA())r=$.AQ=o.bU(".").l(0)
else{q=o.kv()
p=q.length-1
r=$.AQ=p===0?q:B.a.A(q,0,p)}return r},
Go(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Gh(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Go(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
MP(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gG(0)
for(r=A.cv(a,1,null,a.$ti.i("Z.E")),q=r.$ti,r=new A.ao(r,r.gm(0),q.i("ao<Z.E>")),q=q.i("Z.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
N4(a,b){var s=B.b.bP(a,null)
if(s<0)throw A.b(A.R(A.r(a)+" contains no null elements.",null))
a[s]=b},
GA(a,b){var s=B.b.bP(a,b)
if(s<0)throw A.b(A.R(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Mp(a,b){var s,r,q,p
for(s=new A.ci(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
Bk(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cb(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bP(a,b)
while(r!==-1){q=r===0?0:B.a.i8(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cb(a,b,r+1)}return null},
D8(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c7(A.dX(r.b,p.sqlite3_errmsg(q),null),A.dX(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
BL(a,b,c,d,e){throw A.b(A.D8(a.a,a.b,b,c,d,e))},
DD(a){if(a.a0(0,$.GL())<0||a.a0(0,$.GK())>0)throw A.b(A.DT("BigInt value exceeds the range of 64 bits"))
return a},
J4(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.aq(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dX(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.EJ(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
E_(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bu("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cI(61)))
return s.charCodeAt(0)==0?s:s},
wC(a){var s=0,r=A.h(t.lo),q
var $async$wC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(a.arrayBuffer(),t.a),$async$wC)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wC,r)}},B={}
var w=[A,J,B]
var $={}
A.Cd.prototype={}
J.m1.prototype={
P(a,b){return a===b},
gI(a){return A.eE(a)},
l(a){return"Instance of '"+A.mG(a)+"'"},
gaj(a){return A.bK(A.D_(this))}}
J.m3.prototype={
l(a){return String(a)},
gI(a){return a?519018:218159},
gaj(a){return A.bK(t.y)},
$iaj:1,
$iQ:1}
J.iJ.prototype={
P(a,b){return null==b},
l(a){return"null"},
gI(a){return 0},
gaj(a){return A.bK(t.P)},
$iaj:1,
$iW:1}
J.aF.prototype={$iL:1}
J.dH.prototype={
gI(a){return 0},
gaj(a){return B.dJ},
l(a){return String(a)}}
J.mD.prototype={}
J.dV.prototype={}
J.bQ.prototype={
l(a){var s=a[$.GO()]
if(s==null)s=a[$.ff()]
if(s==null)return this.ot(a)
return"JavaScript function for "+J.a0(s)}}
J.bs.prototype={
gI(a){return 0},
l(a){return String(a)}}
J.fI.prototype={
gI(a){return 0},
l(a){return String(a)}}
J.B.prototype={
hF(a,b){return new A.bO(a,A.a_(a).i("@<1>").W(b).i("bO<1,2>"))},
t(a,b){a.$flags&1&&A.H(a,29)
a.push(b)},
it(a,b){var s
a.$flags&1&&A.H(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.wB(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.H(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.wB(b,null))
a.splice(b,0,c)},
ka(a,b,c){var s,r
a.$flags&1&&A.H(a,"insertAll",2)
A.Es(b,0,a.length,"index")
if(!t.O.b(c))c=J.HB(c)
s=J.as(c)
a.length=a.length+s
r=b+s
this.ah(a,r,a.length,a,b)
this.av(a,b,r,c)},
kp(a){a.$flags&1&&A.H(a,"removeLast",1)
if(a.length===0)throw A.b(A.Bh(a,-1))
return a.pop()},
H(a,b){var s
a.$flags&1&&A.H(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
rv(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aA(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
ds(a,b){return new A.am(a,b,A.a_(a).i("am<1>"))},
D(a,b){var s
a.$flags&1&&A.H(a,"addAll",2)
if(Array.isArray(b)){this.oR(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
oR(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aA(a))
for(s=0;s<r;++s)a.push(b[s])},
am(a){a.$flags&1&&A.H(a,"clear","clear")
a.length=0},
cf(a,b,c){return new A.X(a,b,A.a_(a).i("@<1>").W(c).i("X<1,2>"))},
B(a,b){var s,r=A.ae(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
ee(a){return this.B(a,"")},
cM(a,b){return A.cv(a,0,A.cA(b,"count",t.S),A.a_(a).c)},
bi(a,b){return A.cv(a,b,null,A.a_(a).c)},
fb(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aA(a))}if(c!=null)return c.$0()
throw A.b(A.aE())},
mM(a,b){return this.fb(a,b,null)},
a9(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.ax(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ax(c,b,a.length,"end",null))
if(b===c)return A.k([],A.a_(a))
return A.k(a.slice(b,c),A.a_(a))},
b5(a,b){return this.T(a,b,null)},
fO(a,b,c){A.be(b,c,a.length)
return A.cv(a,b,c,A.a_(a).c)},
gG(a){if(a.length>0)return a[0]
throw A.b(A.aE())},
ga1(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aE())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aE())
throw A.b(A.iG())},
kq(a,b,c){a.$flags&1&&A.H(a,18)
A.be(b,c,a.length)
a.splice(b,c-b)},
ah(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.H(a,5)
A.be(b,c,a.length)
s=c-b
if(s===0)return
A.bd(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.pt(d,e).cN(0,!1)
q=0}p=J.M(r)
if(q+s>p.gm(r))throw A.b(A.E2())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
bN(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aA(a))}return!1},
cD(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aA(a))}return!0},
cl(a,b){var s,r,q,p,o
a.$flags&2&&A.H(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.L5()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a_(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e8(b,2))
if(p>0)this.rw(a,p)},
aF(a){return this.cl(a,null)},
rw(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bP(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
df(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.x(a[s],b))return s
return-1},
E(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gX(a){return a.length!==0},
l(a){return A.tv(a,"[","]")},
cN(a,b){var s=A.k(a.slice(0),A.a_(a))
return s},
eu(a){return this.cN(a,!0)},
gu(a){return new J.fj(a,a.length,A.a_(a).i("fj<1>"))},
gI(a){return A.eE(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.H(a,"set length","change the length of")
if(b<0)throw A.b(A.ax(b,0,null,"newLength",null))
if(b>a.length)A.a_(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.Bh(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
if(!(b>=0&&b<a.length))throw A.b(A.Bh(a,b))
a[b]=c},
kz(a,b){return new A.bH(a,b.i("bH<0>"))},
mQ(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gaj(a){return A.bK(A.a_(a))},
$iba:1,
$iJ:1,
$io:1,
$ip:1}
J.m2.prototype={
wU(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mG(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.tw.prototype={}
J.fj.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.et.prototype={
a0(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gke(b)
if(this.gke(a)===s)return 0
if(this.gke(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gke(a){return a===0?1/a<0:a<0},
iu(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
tN(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
v1(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
wJ(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bO(a,b,c){if(this.a0(b,c)>0)throw A.b(A.fa(b))
if(this.a0(a,b)<0)return b
if(this.a0(a,c)>0)return c
return a},
kw(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.ax(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.t(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bg("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
fL(a,b){return a+b},
ak(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iM(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.m9(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.m9(a,b)},
m9(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bD(a,b){if(b<0)throw A.b(A.fa(b))
return b>31?0:a<<b>>>0},
rU(a,b){return b>31?0:a<<b>>>0},
dz(a,b){var s
if(b<0)throw A.b(A.fa(b))
if(a>0)s=this.jA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
af(a,b){var s
if(a>0)s=this.jA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
m7(a,b){if(0>b)throw A.b(A.fa(b))
return this.jA(a,b)},
jA(a,b){return b>31?0:a>>>b},
o4(a,b){return a>b},
gaj(a){return A.bK(t.o)},
$iaw:1,
$iaa:1,
$iaV:1}
J.iI.prototype={
gmu(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gaj(a){return A.bK(t.S)},
$iaj:1,
$ii:1}
J.m4.prototype={
gaj(a){return A.bK(t.W)},
$iaj:1}
J.dF.prototype={
jJ(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.oQ(b,a,c)},
hA(a,b){return this.jJ(a,b,0)},
ei(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.hf(c,a)},
c9(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ae(a,r-s)},
ks(a,b,c){A.Es(0,0,a.length,"startIndex")
return A.Nb(a,b,c,0)},
cR(a,b){var s
if(typeof b=="string")return A.k(a.split(b),t.s)
else{if(b instanceof A.eu){s=b.e
s=!(s==null?b.e=b.pr():s)}else s=!1
if(s)return A.k(a.split(b.b),t.s)
else return this.pE(a,b)}},
dl(a,b,c,d){var s=A.be(b,c,a.length)
return A.GE(a,b,s,d)},
pE(a,b){var s,r,q,p,o,n,m=A.k([],t.s)
for(s=J.BS(b,a),s=s.gu(s),r=0,q=1;s.k();){p=s.gn()
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
cj(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Is(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.E8(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
wS(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.E8(r,s))},
bg(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bP)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ik(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bg(c,s)+a},
w8(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bg(" ",s)},
cb(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bP(a,b){return this.cb(a,b,0)},
i8(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
df(a,b){return this.i8(a,b,null)},
E(a,b){return A.N8(a,b,0)},
a0(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gI(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gaj(a){return A.bK(t.N)},
gm(a){return a.length},
$iba:1,
$iaj:1,
$iaw:1,
$il:1}
A.yZ.prototype={
t(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.M(b),i=j.gm(b)
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
B.f.av(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.av(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.H(r)
r[q+m]=l}k.a=s},
ku(){var s,r=this
if(r.a===0)return $.pn()
s=J.bM(B.f.gab(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.pn()
return s},
gm(a){return this.a}}
A.yx.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b7(b))
this.b.push(s)
this.a=this.a+s.length},
ku(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.pn()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.am(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.q)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.av(q,p,m,n)}l.a=0
B.b.am(s)
return q},
gm(a){return this.a}}
A.dY.prototype={
gu(a){return new A.l2(J.E(this.gba()),A.n(this).i("l2<1,2>"))},
gm(a){return J.as(this.gba())},
gF(a){return J.bA(this.gba())},
gX(a){return J.ec(this.gba())},
bi(a,b){var s=A.n(this)
return A.fl(J.pt(this.gba(),b),s.c,s.y[1])},
cM(a,b){var s=A.n(this)
return A.fl(J.BV(this.gba(),b),s.c,s.y[1])},
a9(a,b){return A.n(this).y[1].a(J.pr(this.gba(),b))},
gG(a){return A.n(this).y[1].a(J.bZ(this.gba()))},
ga1(a){return A.n(this).y[1].a(J.ps(this.gba()))},
gap(a){return A.n(this).y[1].a(J.BU(this.gba()))},
E(a,b){return J.BT(this.gba(),b)},
l(a){return J.a0(this.gba())}}
A.l2.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ef.prototype={
gba(){return this.a}}
A.jM.prototype={$iJ:1}
A.jJ.prototype={
h(a,b){return this.$ti.y[1].a(J.V(this.a,b))},
j(a,b,c){J.cZ(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.Hw(this.a,b)},
t(a,b){J.aL(this.a,this.$ti.c.a(b))},
cl(a,b){var s=b==null?null:new A.yy(this,b)
J.Dw(this.a,s)},
fO(a,b,c){var s=this.$ti
return A.fl(J.Ht(this.a,b,c),s.c,s.y[1])},
ah(a,b,c,d,e){var s=this.$ti
J.Hx(this.a,b,c,A.fl(d,s.y[1],s.c),e)},
av(a,b,c,d){return this.ah(0,b,c,d,0)},
$iJ:1,
$ip:1}
A.yy.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bO.prototype={
hF(a,b){return new A.bO(this.a,this.$ti.i("@<1>").W(b).i("bO<1,2>"))},
gba(){return this.a}}
A.eg.prototype={
c6(a,b,c){return new A.eg(this.a,this.$ti.i("@<1,2>").W(b).W(c).i("eg<1,2,3,4>"))},
J(a){return this.a.J(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a8(a,b){this.a.a8(0,new A.pU(this,b))},
gK(){var s=this.$ti
return A.fl(this.a.gK(),s.c,s.y[2])},
gaX(){var s=this.$ti
return A.fl(this.a.gaX(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gX(a){var s=this.a
return s.gX(s)},
ga7(){var s=this.a.ga7()
return s.cf(s,new A.pT(this),this.$ti.i("S<3,4>"))}}
A.pU.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.pT.prototype={
$1(a){var s=this.a.$ti
return new A.S(s.y[2].a(a.a),s.y[3].a(a.b),s.i("S<3,4>"))},
$S(){return this.a.$ti.i("S<3,4>(S<1,2>)")}}
A.dG.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mP.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.ci.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.By.prototype={
$0(){return A.b9(null,t.H)},
$S:3}
A.wO.prototype={}
A.J.prototype={}
A.Z.prototype={
gu(a){var s=this
return new A.ao(s,s.gm(s),A.n(s).i("ao<Z.E>"))},
gF(a){return this.gm(this)===0},
gG(a){if(this.gm(this)===0)throw A.b(A.aE())
return this.a9(0,0)},
ga1(a){var s=this
if(s.gm(s)===0)throw A.b(A.aE())
return s.a9(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aE())
if(s.gm(s)>1)throw A.b(A.iG())
return s.a9(0,0)},
E(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.x(r.a9(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.aA(r))}return!1},
cD(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a9(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.aA(r))}return!0},
B(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a9(0,0))
if(o!==p.gm(p))throw A.b(A.aA(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a9(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a9(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}},
ee(a){return this.B(0,"")},
ds(a,b){return this.oo(0,b)},
cf(a,b,c){return new A.X(this,b,A.n(this).i("@<Z.E>").W(c).i("X<1,2>"))},
wz(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aE())
s=q.a9(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a9(0,r))
if(p!==q.gm(q))throw A.b(A.aA(q))}return s},
bi(a,b){return A.cv(this,b,null,A.n(this).i("Z.E"))},
cM(a,b){return A.cv(this,0,A.cA(b,"count",t.S),A.n(this).i("Z.E"))}}
A.cu.prototype={
iN(a,b,c,d){var s,r=this.b
A.bd(r,"start")
s=this.c
if(s!=null){A.bd(s,"end")
if(r>s)throw A.b(A.ax(r,0,s,"start",null))}},
gpO(){var s=J.as(this.a),r=this.c
if(r==null||r>s)return s
return r},
grY(){var s=J.as(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.as(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a9(a,b){var s=this,r=s.grY()+b
if(b<0||r>=s.gpO())throw A.b(A.lZ(b,s.gm(0),s,null,"index"))
return J.pr(s.a,r)},
bi(a,b){var s,r,q=this
A.bd(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ep(q.$ti.i("ep<1>"))
return A.cv(q.a,s,r,q.$ti.c)},
cM(a,b){var s,r,q,p=this
A.bd(b,"count")
s=p.c
r=p.b
if(s==null)return A.cv(p.a,r,B.c.fL(r,b),p.$ti.c)
else{q=B.c.fL(r,b)
if(s<q)return p
return A.cv(p.a,r,q,p.$ti.c)}},
cN(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.M(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.E5(0,n):J.Ca(0,n)}r=A.ae(s,m.a9(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a9(n,o+q)
if(m.gm(n)<l)throw A.b(A.aA(p))}return r},
eu(a){return this.cN(0,!0)}}
A.ao.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.M(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.aA(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a9(q,s);++r.c
return!0}}
A.cl.prototype={
gu(a){return new A.mg(J.E(this.a),this.b,A.n(this).i("mg<1,2>"))},
gm(a){return J.as(this.a)},
gF(a){return J.bA(this.a)},
gG(a){return this.b.$1(J.bZ(this.a))},
ga1(a){return this.b.$1(J.ps(this.a))},
gap(a){return this.b.$1(J.BU(this.a))},
a9(a,b){return this.b.$1(J.pr(this.a,b))}}
A.eo.prototype={$iJ:1}
A.mg.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.as(this.a)},
a9(a,b){return this.b.$1(J.pr(this.a,b))}}
A.am.prototype={
gu(a){return new A.cV(J.E(this.a),this.b,this.$ti.i("cV<1>"))},
cf(a,b,c){return new A.cl(this,b,this.$ti.i("@<1>").W(c).i("cl<1,2>"))}}
A.cV.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.iw.prototype={
gu(a){return new A.lx(J.E(this.a),this.b,B.aQ,this.$ti.i("lx<1,2>"))}}
A.lx.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.E(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eN.prototype={
gu(a){var s=this.a
return new A.nv(s.gu(s),this.b,A.n(this).i("nv<1>"))}}
A.is.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.o4(r,s))return s
return r},
$iJ:1}
A.nv.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.dc.prototype={
bi(a,b){A.kK(b,"count")
A.bd(b,"count")
return new A.dc(this.a,this.b+b,A.n(this).i("dc<1>"))},
gu(a){var s=this.a
return new A.n4(s.gu(s),this.b,A.n(this).i("n4<1>"))}}
A.fw.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bi(a,b){A.kK(b,"count")
A.bd(b,"count")
return new A.fw(this.a,this.b+b,this.$ti)},
$iJ:1}
A.n4.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.ep.prototype={
gu(a){return B.aQ},
gF(a){return!0},
gm(a){return 0},
gG(a){throw A.b(A.aE())},
ga1(a){throw A.b(A.aE())},
gap(a){throw A.b(A.aE())},
a9(a,b){throw A.b(A.ax(b,0,0,"index",null))},
E(a,b){return!1},
cD(a,b){return!0},
ds(a,b){return this},
cf(a,b,c){return new A.ep(c.i("ep<0>"))},
bi(a,b){A.bd(b,"count")
return this},
cM(a,b){A.bd(b,"count")
return this},
cN(a,b){var s=J.Ca(0,this.$ti.c)
return s},
fG(a){return A.me(this.$ti.c)}}
A.lu.prototype={
k(){return!1},
gn(){throw A.b(A.aE())}}
A.bH.prototype={
gu(a){return new A.nV(J.E(this.a),this.$ti.i("nV<1>"))}}
A.nV.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.iz.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.nH.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
cl(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ah(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
av(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.hk.prototype={}
A.bv.prototype={
gm(a){return J.as(this.a)},
a9(a,b){var s=this.a,r=J.M(s)
return r.a9(s,r.gm(s)-1-b)}}
A.ju.prototype={
gI(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gI(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
P(a,b){if(b==null)return!1
return b instanceof A.ju&&this.a===b.a}}
A.kj.prototype={}
A.a4.prototype={$r:"+(1,2)",$s:1}
A.k1.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.k2.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hJ.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.oD.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.f2.prototype={$r:"+(1,2,3)",$s:7}
A.f3.prototype={$r:"+(1,2,3,4)",$s:8}
A.oE.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.io.prototype={}
A.ft.prototype={
c6(a,b,c){var s=A.n(this)
return A.Ec(this,s.c,s.y[1],b,c)},
gF(a){return this.gm(this)===0},
gX(a){return this.gm(this)!==0},
l(a){return A.uQ(this)},
j(a,b,c){A.HV()},
ga7(){return new A.hO(this.uO(),A.n(this).i("hO<S<1,2>>"))},
uO(){var s=this
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
aT(a,b,c,d){var s=A.u(c,d)
this.a8(0,new A.qC(this,b,s))
return s},
$iI:1}
A.qC.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aW.prototype={
gm(a){return this.b.length},
glE(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
J(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.J(b))return null
return this.b[this.a[b]]},
a8(a,b){var s,r,q=this.glE(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.f_(this.glE(),this.$ti.i("f_<1>"))},
gaX(){return new A.f_(this.b,this.$ti.i("f_<2>"))}}
A.f_.prototype={
gm(a){return this.a.length},
gF(a){return 0===this.a.length},
gX(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.hE(s,s.length,this.$ti.i("hE<1>"))}}
A.hE.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iB.prototype={
dJ(){var s=this,r=s.$map
if(r==null){r=new A.iK(s.$ti.i("iK<1,2>"))
A.Gl(s.a,r)
s.$map=r}return r},
J(a){return this.dJ().J(a)},
h(a,b){return this.dJ().h(0,b)},
a8(a,b){this.dJ().a8(0,b)},
gK(){var s=this.dJ()
return new A.T(s,A.n(s).i("T<1>"))},
gaX(){var s=this.dJ()
return new A.ak(s,A.n(s).i("ak<2>"))},
gm(a){return this.dJ().a}}
A.ip.prototype={
t(a,b){A.HW()}}
A.dz.prototype={
gm(a){return this.b},
gF(a){return this.b===0},
gX(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hE(s,s.length,r.$ti.i("hE<1>"))},
E(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.tq.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.iF&&this.a.P(0,b.a)&&A.Db(this)===A.Db(b)},
gI(a){return A.c5(this.a,A.Db(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bK(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iF.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.MO(A.pg(this.a),this.$ti)}}
A.vX.prototype={
$0(){return B.x.v1(1000*this.a.now())},
$S:11}
A.jj.prototype={}
A.xy.prototype={
bQ(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.j8.prototype={
l(a){return"Null check operator used on a null value"}}
A.m5.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.nG.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mv.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iF:1}
A.iu.prototype={}
A.k4.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaG:1}
A.ei.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.GJ(r==null?"unknown":r)+"'"},
gaj(a){var s=A.pg(this)
return A.bK(s==null?A.bz(this):s)},
gxZ(){return this},
$C:"$1",
$R:1,
$D:null}
A.pZ.prototype={$C:"$0",$R:0}
A.q_.prototype={$C:"$2",$R:2}
A.xo.prototype={}
A.wZ.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.GJ(s)+"'"}}
A.ig.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ig))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.ku(this.a)^A.eE(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mG(this.a)+"'")}}
A.mY.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bD.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gX(a){return this.a!==0},
gK(){return new A.T(this,A.n(this).i("T<1>"))},
gaX(){return new A.ak(this,A.n(this).i("ak<2>"))},
ga7(){return new A.aN(this,A.n(this).i("aN<1,2>"))},
J(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mS(a)},
mS(a){var s=this.d
if(s==null)return!1
return this.de(this.ly(s,a),a)>=0},
D(a,b){b.a8(0,new A.tx(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mT(b)},
mT(a){var s,r,q=this.d
if(q==null)return null
s=this.ly(q,a)
r=this.de(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kX(s==null?q.b=q.jl():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kX(r==null?q.c=q.jl():r,b,c)}else q.mV(b,c)},
mV(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jl()
s=p.ed(a)
r=o[s]
if(r==null)o[s]=[p.iP(a,b)]
else{q=p.de(r,a)
if(q>=0)r[q].b=b
else r.push(p.iP(a,b))}},
n6(a,b){var s,r,q=this
if(q.J(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.lZ(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.lZ(s.c,b)
else return s.mU(b)},
mU(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ed(a)
r=n[s]
q=o.de(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mf(p)
if(r.length===0)delete n[s]
return p.b},
am(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iO()}},
a8(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aA(s))
r=r.c}},
kX(a,b,c){var s=a[b]
if(s==null)a[b]=this.iP(b,c)
else s.b=c},
lZ(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mf(s)
delete a[b]
return s.b},
iO(){this.r=this.r+1&1073741823},
iP(a,b){var s,r=this,q=new A.uz(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iO()
return q},
mf(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iO()},
ed(a){return J.a7(a)&1073741823},
ly(a,b){return a[this.ed(b)]},
de(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.uQ(this)},
jl(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.tx.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.uz.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bE(s,s.r,s.e,this.$ti.i("bE<1>"))},
E(a,b){return this.a.J(b)}}
A.bE.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.ak.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gu(a){var s=this.a
return new A.aS(s,s.r,s.e,this.$ti.i("aS<1>"))}}
A.aS.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aN.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gu(a){var s=this.a
return new A.md(s,s.r,s.e,this.$ti.i("md<1,2>"))}}
A.md.prototype={
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
A.iL.prototype={
ed(a){return A.ku(a)&1073741823},
de(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iK.prototype={
ed(a){return A.Mh(a)&1073741823},
de(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.Bs.prototype={
$1(a){return this.a(a)},
$S:32}
A.Bt.prototype={
$2(a,b){return this.a(a,b)},
$S:221}
A.Bu.prototype={
$1(a){return this.a(a)},
$S:67}
A.hI.prototype={
gaj(a){return A.bK(this.lz())},
lz(){return A.Mx(this.$r,this.h9())},
l(a){return this.md(!1)},
md(a){var s,r,q,p,o,n=this.pX(),m=this.h9(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.En(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
pX(){var s,r=this.$s
while($.zU.length<=r)$.zU.push(null)
s=$.zU[r]
if(s==null){s=this.pq()
$.zU[r]=s}return s},
pq(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.E4(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fJ(j,k)}}
A.oA.prototype={
h9(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.oA&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gI(a){return A.c5(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.oB.prototype={
h9(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.oB&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gI(a){var s=this
return A.c5(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.oC.prototype={
h9(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.oC&&this.$s===b.$s&&A.Kb(this.a,b.a)},
gI(a){return A.c5(this.$s,A.vg(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eu.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glL(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.Cc(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqB(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.Cc(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pr(){var s,r=this.a
if(!B.a.E(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ea(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hH(s)},
jJ(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.o0(this,b,c)},
hA(a,b){return this.jJ(0,b,0)},
pU(a,b){var s,r=this.glL()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hH(s)},
pT(a,b){var s,r=this.gqB()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hH(s)},
ei(a,b,c){if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,null,null))
return this.pT(b,c)}}
A.hH.prototype={
gR(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$iey:1,
$imQ:1}
A.o0.prototype={
gu(a){return new A.o1(this.a,this.b,this.c)}}
A.o1.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.pU(l,s)
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
A.hf.prototype={
gN(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.wB(b,null))
return this.c},
$iey:1,
gR(){return this.a}}
A.oQ.prototype={
gu(a){return new A.Af(this.a,this.b,this.c)},
gG(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hf(r,s)
throw A.b(A.aE())}}
A.Af.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.hf(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.o9.prototype={
bu(){var s=this.b
if(s===this)throw A.b(new A.dG("Local '"+this.a+"' has not been initialized."))
return s},
bt(){var s=this.b
if(s===this)throw A.b(A.Eb(this.a))
return s},
sk_(a){var s=this
if(s.b!==s)throw A.b(new A.dG("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fQ.prototype={
gaj(a){return B.dC},
hC(a,b,c){A.hV(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mr(a){return this.hC(a,0,null)},
mq(a,b,c){A.hV(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hB(a,b,c){A.hV(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mp(a){return this.hB(a,0,null)},
$iaj:1,
$iee:1}
A.fP.prototype={$ifP:1}
A.j3.prototype={
gab(a){if(((a.$flags|0)&2)!==0)return new A.oY(a.buffer)
else return a.buffer},
qr(a,b,c,d){var s=A.ax(b,0,c,d,null)
throw A.b(s)},
l7(a,b,c,d){if(b>>>0!==b||b>c)this.qr(a,b,c,d)}}
A.oY.prototype={
hC(a,b,c){var s=A.bT(this.a,b,c)
s.$flags=3
return s},
mr(a){return this.hC(0,0,null)},
mq(a,b,c){var s=A.Eg(this.a,b,c)
s.$flags=3
return s},
hB(a,b,c){var s=A.Ef(this.a,b,c)
s.$flags=3
return s},
mp(a){return this.hB(0,0,null)},
$iee:1}
A.j2.prototype={
gaj(a){return B.dD},
$iaj:1,
$iBW:1}
A.fR.prototype={
gm(a){return a.length},
m6(a,b,c,d,e){var s,r,q=a.length
this.l7(a,b,q,"start")
this.l7(a,c,q,"end")
if(b>c)throw A.b(A.ax(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.R(e,null))
r=d.length
if(r-e<s)throw A.b(A.y("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iba:1,
$ibR:1}
A.dO.prototype={
h(a,b){A.dn(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
A.dn(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.dQ.b(d)){this.m6(a,b,c,d,e)
return}this.kU(a,b,c,d,e)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.bS.prototype={
j(a,b,c){a.$flags&2&&A.H(a)
A.dn(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.aj.b(d)){this.m6(a,b,c,d,e)
return}this.kU(a,b,c,d,e)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.mo.prototype={
gaj(a){return B.dE},
T(a,b,c){return new Float32Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$irM:1}
A.mp.prototype={
gaj(a){return B.dF},
T(a,b,c){return new Float64Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$irN:1}
A.mq.prototype={
gaj(a){return B.dG},
h(a,b){A.dn(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$itr:1}
A.mr.prototype={
gaj(a){return B.dH},
h(a,b){A.dn(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$its:1}
A.ms.prototype={
gaj(a){return B.dI},
h(a,b){A.dn(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$itt:1}
A.j4.prototype={
gaj(a){return B.dM},
h(a,b){A.dn(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$ixA:1}
A.j5.prototype={
gaj(a){return B.dN},
h(a,b){A.dn(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$ixB:1}
A.j6.prototype={
gaj(a){return B.dO},
gm(a){return a.length},
h(a,b){A.dn(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$ixC:1}
A.ez.prototype={
gaj(a){return B.dP},
gm(a){return a.length},
h(a,b){A.dn(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dp(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$iez:1,
$icS:1}
A.jY.prototype={}
A.jZ.prototype={}
A.k_.prototype={}
A.k0.prototype={}
A.cq.prototype={
i(a){return A.kd(v.typeUniverse,this,a)},
W(a){return A.Fa(v.typeUniverse,this,a)}}
A.on.prototype={}
A.oV.prototype={
l(a){return A.bX(this.a,null)}}
A.ok.prototype={
l(a){return this.a}}
A.k9.prototype={$idf:1}
A.yf.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:26}
A.ye.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:197}
A.yg.prototype={
$0(){this.a.$0()},
$S:2}
A.yh.prototype={
$0(){this.a.$0()},
$S:2}
A.k8.prototype={
oN(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e8(new A.Aj(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oO(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e8(new A.Ai(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
C(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$ide:1}
A.Aj.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.Ai.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.iM(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.jC.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aD(a)
else{s=r.a
if(r.$ti.i("A<1>").b(a))s.l6(a)
else s.cV(a)}},
c7(a,b){var s
if(b==null)b=A.ic(a)
s=this.a
if(this.b)s.al(new A.an(a,b))
else s.cn(new A.an(a,b))},
aS(a){return this.c7(a,null)},
$iil:1}
A.AJ.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.AK.prototype={
$2(a,b){this.a.$2(1,new A.iu(a,b))},
$S:236}
A.B1.prototype={
$2(a,b){this.a(a,b)},
$S:103}
A.AH.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.v()
s=q.b
if((s&1)!==0?(q.gaL().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.AI.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:26}
A.o3.prototype={
oJ(a,b){var s=new A.yj(a)
this.a=A.x0(new A.yl(this,a),new A.ym(s),new A.yn(this,s),!1,b)}}
A.yj.prototype={
$0(){A.kx(new A.yk(this.a))},
$S:2}
A.yk.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.ym.prototype={
$0(){this.a.$0()},
$S:0}
A.yn.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.yl.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.v()
if((r.b&4)===0){s.c=new A.w($.C,t._)
if(s.b){s.b=!1
A.kx(new A.yi(this.b))}return s.c}},
$S:134}
A.yi.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jU.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.oS.prototype={
gn(){return this.b},
rz(a,b){var s,r,q
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
o.d=null}q=o.rz(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.F4
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.F4
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.y("sync*"))}return!1},
y_(a){var s,r,q=this
if(a instanceof A.hO){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hO.prototype={
gu(a){return new A.oS(this.a(),this.$ti.i("oS<1>"))}}
A.an.prototype={
l(a){return A.r(this.a)},
$iad:1,
gcm(){return this.b}}
A.b0.prototype={}
A.eU.prototype={
bH(){},
bI(){}}
A.jI.prototype={
gcS(){return new A.b0(this,A.n(this).i("b0<1>"))},
gi7(){return(this.c&4)!==0},
gjj(){return this.c<4},
ru(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jB(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.EW(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.o7(r,a,s.c)
n=A.yu(r,b)
m=c==null?A.B2():c
l=new A.eU(j,o,n,r.bT(m,t.H),r,q|p,s.i("eU<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.pc(j.a)
return l},
lT(a){var s,r=this
A.n(r).i("eU<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.ru(a)
if((r.c&2)===0&&r.d==null)r.pd()}return null},
lU(a){},
lV(a){},
iR(){if((this.c&4)!==0)return new A.bl("Cannot add new events after calling close")
return new A.bl("Cannot add new events while doing an addStream")},
t(a,b){if(!this.gjj())throw A.b(this.iR())
this.cu(b)},
bx(a,b){var s
if(!this.gjj())throw A.b(this.iR())
s=A.f7(a,b)
this.cv(s.a,s.b)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjj())throw A.b(q.iR())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.C,t.D)
q.d4()
return r},
aH(a,b){this.cv(a,b)},
aR(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aD(null)},
pd(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aD(null)}A.pc(this.b)},
$ibC:1}
A.jD.prototype={
cu(a){var s,r
for(s=this.d,r=this.$ti.i("ca<1>");s!=null;s=s.ch)s.bY(new A.ca(a,r))},
cv(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bY(new A.hz(a,b))},
d4(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bY(B.ab)
else this.r.aD(null)}}
A.rW.prototype={
$0(){this.c.a(null)
this.b.co(null)},
$S:0}
A.rY.prototype={
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
A.rX.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.cZ(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.k([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aL(s,n)}m.c.cV(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.al(new A.an(s,l))}},
$S(){return this.d.i("W(0)")}}
A.rR.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aG)")}}
A.nw.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iF:1}
A.rS.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.k([],l.c.i("B<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aB(s)}else{s=A.k([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(r[p].c)
q=l.c
n=A.k([],q.i("B<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.q)(r),++p)n.push(r[p].b)
l.a.aS(new A.jb(B.b.mM(s,A.LV()),a,q.i("jb<p<0?>,p<an?>>")))}},
$S:8}
A.jb.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gcm(){var s=this.c
s=s==null?null:s.b
return s==null?A.ad.prototype.gcm.call(this):s}}
A.jS.prototype={
te(a){this.a.bq(new A.zf(this,a),new A.zg(this,a),t.P)}}
A.zf.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.zg.prototype={
$2(a,b){this.a.c=new A.an(a,b)
this.b.$1(1)},
$S:9}
A.ze.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.eV.prototype={
c7(a,b){if((this.a.a&30)!==0)throw A.b(A.y("Future already completed"))
this.al(A.f7(a,b))},
aS(a){return this.c7(a,null)},
$iil:1}
A.aI.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.y("Future already completed"))
s.aD(a)},
an(){return this.aB(null)},
al(a){this.a.cn(a)}}
A.ap.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.y("Future already completed"))
s.co(a)},
an(){return this.aB(null)},
al(a){this.a.al(a)}}
A.cb.prototype={
vU(a){if((this.c&15)!==6)return!0
return this.b.b.es(this.d,a.a,t.y,t.K)},
vf(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kt(r,n,a.b,p,o,t.l)
else q=m.es(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.D(s))){if((this.c&1)!==0)throw A.b(A.R("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.R("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
bq(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.az(b,"onError",u.w))}else{a=q.dk(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.FN(b,q)}s=new A.w($.C,c.i("w<0>"))
r=b==null?1:3
this.dD(new A.cb(s,r,a,b,this.$ti.i("@<1>").W(c).i("cb<1,2>")))
return s},
V(a,b){return this.bq(a,null,b)},
mb(a,b,c){var s=new A.w($.C,c.i("w<0>"))
this.dD(new A.cb(s,19,a,b,this.$ti.i("@<1>").W(c).i("cb<1,2>")))
return s},
mv(a){var s=this.$ti,r=$.C,q=new A.w(r,s)
if(r!==B.i)a=A.FN(a,r)
this.dD(new A.cb(q,2,null,a,s.i("cb<1,1>")))
return q},
aY(a){var s=this.$ti,r=$.C,q=new A.w(r,s)
if(r!==B.i)a=r.bT(a,t.z)
this.dD(new A.cb(q,8,a,null,s.i("cb<1,1>")))
return q},
rO(a){this.a=this.a&1|16
this.c=a},
fY(a){this.a=a.a&30|this.a&1
this.c=a.c},
dD(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dD(a)
return}s.fY(r)}s.b.cP(new A.zh(s,a))}},
lR(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lR(a)
return}n.fY(s)}m.a=n.hk(a)
n.b.cP(new A.zm(m,n))}},
eS(){var s=this.c
this.c=null
return this.hk(s)},
hk(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
co(a){var s,r=this
if(r.$ti.i("A<1>").b(a))A.zk(a,r,!0)
else{s=r.eS()
r.a=8
r.c=a
A.eY(r,s)}},
cV(a){var s=this,r=s.eS()
s.a=8
s.c=a
A.eY(s,r)},
pp(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gca()===r.gca())}else s=!1
if(s)return
q=p.eS()
p.fY(a)
A.eY(p,q)},
al(a){var s=this.eS()
this.rO(a)
A.eY(this,s)},
po(a,b){this.al(new A.an(a,b))},
aD(a){if(this.$ti.i("A<1>").b(a)){this.l6(a)
return}this.l3(a)},
l3(a){this.a^=2
this.b.cP(new A.zj(this,a))},
l6(a){A.zk(a,this,!1)
return},
cn(a){this.a^=2
this.b.cP(new A.zi(this,a))},
fF(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.C,r.$ti)
q.aD(r)
return q}s=new A.w($.C,r.$ti)
q.a=null
q.a=A.cR(a,new A.zs(s,a))
r.bq(new A.zt(q,r,s),new A.zu(q,s),t.P)
return s},
$iA:1}
A.zh.prototype={
$0(){A.eY(this.a,this.b)},
$S:0}
A.zm.prototype={
$0(){A.eY(this.b,this.a.a)},
$S:0}
A.zl.prototype={
$0(){A.zk(this.a.a,this.b,!0)},
$S:0}
A.zj.prototype={
$0(){this.a.cV(this.b)},
$S:0}
A.zi.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.zp.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aV(q.d,t.z)}catch(p){s=A.D(p)
r=A.ac(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ic(q)
n=k.a
n.c=new A.an(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.bq(new A.zq(l,m),new A.zr(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.zq.prototype={
$1(a){this.a.pp(this.b)},
$S:26}
A.zr.prototype={
$2(a,b){this.a.al(new A.an(a,b))},
$S:9}
A.zo.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.es(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.D(n)
r=A.ac(n)
q=s
p=r
if(p==null)p=A.ic(q)
o=this.a
o.c=new A.an(q,p)
o.b=!0}},
$S:0}
A.zn.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.vU(s)&&p.a.e!=null){p.c=p.a.vf(s)
p.b=!1}}catch(o){r=A.D(o)
q=A.ac(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ic(p)
m=l.b
m.c=new A.an(p,n)
p=m}p.b=!0}},
$S:0}
A.zs.prototype={
$0(){var s=A.Cv()
this.a.al(new A.an(new A.nw("Future not completed",this.b),s))},
$S:0}
A.zt.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.C()
this.c.cV(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.zu.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.C()
this.b.al(new A.an(a,b))}},
$S:9}
A.o2.prototype={}
A.a9.prototype={
ee(a){var s=new A.w($.C,t.os),r=new A.a2(""),q=this.aa(null,!0,new A.x3(s,r),s.giX())
q.ih(new A.x4(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.C,t.hy)
s.a=0
this.aa(new A.x5(s,this),!0,new A.x6(s,r),r.giX())
return r},
gG(a){var s=new A.w($.C,A.n(this).i("w<a9.T>")),r=this.aa(null,!0,new A.x1(s),s.giX())
r.ih(new A.x2(this,r,s))
return s}}
A.x3.prototype={
$0(){var s=this.b.a
this.a.co(s.charCodeAt(0)==0?s:s)},
$S:0}
A.x4.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.D(o)
r=A.ac(o)
q=s
p=r
n=A.kk(q,p)
if(n==null)q=new A.an(q,p)
else q=n
A.KH(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(a9.T)")}}
A.x5.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(a9.T)")}}
A.x6.prototype={
$0(){this.b.co(this.a.a)},
$S:0}
A.x1.prototype={
$0(){var s,r=A.Cv(),q=new A.bl("No element")
A.mI(q,r)
s=A.kk(q,r)
if(s==null)s=new A.an(q,r)
this.a.al(s)},
$S:0}
A.x2.prototype={
$1(a){A.KI(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(a9.T)")}}
A.jr.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bz(a,b,c){return this.aa(a,null,b,c)},
aN(a){return this.aa(a,null,null,null)}}
A.e3.prototype={
gcS(){return new A.b5(this,A.n(this).i("b5<1>"))},
gi7(){return(this.b&4)!==0},
gqX(){if((this.b&8)===0)return this.a
return this.a.c},
h2(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e2(A.n(q).i("e2<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e2(A.n(q).i("e2<1>")):s},
gaL(){var s=this.a
return(this.b&8)!==0?s.c:s},
bF(){if((this.b&4)!==0)return new A.bl("Cannot add event after closing")
return new A.bl("Cannot add event while adding a stream")},
ty(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bF())
if((o&2)!==0){o=new A.w($.C,t._)
o.aD(null)
return o}o=p.a
s=b===!0
r=new A.w($.C,t._)
q=s?A.Jz(p):p.goS()
q=a.aa(p.goW(),s,p.gpf(),q)
s=p.b
if((s&1)!==0?(p.gaL().e&4)!==0:(s&2)===0)q.bd()
p.a=new A.k5(o,r,q,A.n(p).i("k5<1>"))
p.b|=8
return r},
lp(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.eb():new A.w($.C,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bF())
this.aA(b)},
bx(a,b){var s
if(this.b>=4)throw A.b(this.bF())
s=A.f7(a,b)
this.aH(s.a,s.b)},
tx(a){return this.bx(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lp()
if(r>=4)throw A.b(s.bF())
s.l8()
return s.lp()},
l8(){var s=this.b|=4
if((s&1)!==0)this.d4()
else if((s&3)===0)this.h2().t(0,B.ab)},
aA(a){var s=this,r=s.b
if((r&1)!==0)s.cu(a)
else if((r&3)===0)s.h2().t(0,new A.ca(a,A.n(s).i("ca<1>")))},
aH(a,b){var s=this.b
if((s&1)!==0)this.cv(a,b)
else if((s&3)===0)this.h2().t(0,new A.hz(a,b))},
aR(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aD(null)},
jB(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.y("Stream has already been listened to."))
s=A.JR(p,a,b,c,d,A.n(p).c)
r=p.gqX()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b1()}else p.a=s
s.rP(r)
s.j8(new A.Ab(p))
return s},
lT(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.C()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.D(o)
p=A.ac(o)
n=new A.w($.C,t.D)
n.cn(new A.an(q,p))
k=n}else k=k.aY(s)
m=new A.Aa(l)
if(k!=null)k=k.aY(m)
else m.$0()
return k},
lU(a){if((this.b&8)!==0)this.a.b.bd()
A.pc(this.e)},
lV(a){if((this.b&8)!==0)this.a.b.b1()
A.pc(this.f)},
$ibC:1}
A.Ab.prototype={
$0(){A.pc(this.a.d)},
$S:0}
A.Aa.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aD(null)},
$S:0}
A.oT.prototype={
cu(a){this.gaL().aA(a)},
cv(a,b){this.gaL().aH(a,b)},
d4(){this.gaL().aR()}}
A.jE.prototype={
cu(a){this.gaL().bY(new A.ca(a,A.n(this).i("ca<1>")))},
cv(a,b){this.gaL().bY(new A.hz(a,b))},
d4(){this.gaL().bY(B.ab)}}
A.cW.prototype={}
A.hP.prototype={}
A.b5.prototype={
gI(a){return(A.eE(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b5&&b.a===this.a}}
A.dZ.prototype={
hd(){return this.w.lT(this)},
bH(){this.w.lU(this)},
bI(){this.w.lV(this)}}
A.o_.prototype={
C(){var s=this.b.C()
return s.aY(new A.ya(this))}}
A.yb.prototype={
$2(a,b){var s=this.a
s.aH(a,b)
s.aR()},
$S:9}
A.ya.prototype={
$0(){this.a.a.aD(null)},
$S:2}
A.k5.prototype={}
A.b1.prototype={
rP(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fP(s)}},
ih(a){this.a=A.o7(this.d,a,A.n(this).i("b1.T"))},
bd(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.j8(q.geJ())},
b1(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fP(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.j8(s.geK())}}},
C(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.iT()
r=s.f
return r==null?$.eb():r},
iT(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hd()},
aA(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cu(a)
else s.bY(new A.ca(a,A.n(s).i("ca<b1.T>")))},
aH(a,b){var s
if(t.C.b(a))A.mI(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cv(a,b)
else this.bY(new A.hz(a,b))},
aR(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d4()
else s.bY(B.ab)},
bH(){},
bI(){},
hd(){return null},
bY(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e2(A.n(r).i("e2<b1.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fP(r)}},
cu(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fE(s.a,a,A.n(s).i("b1.T"))
s.e=(s.e&4294967231)>>>0
s.iV((r&4)!==0)},
cv(a,b){var s,r=this,q=r.e,p=new A.yw(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.iT()
s=r.f
if(s!=null&&s!==$.eb())s.aY(p)
else p.$0()}else{p.$0()
r.iV((q&4)!==0)}},
d4(){var s,r=this,q=new A.yv(r)
r.iT()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.eb())s.aY(q)
else q.$0()},
j8(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.iV((r&4)!==0)},
iV(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bH()
else q.bI()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fP(q)},
$ibm:1}
A.yw.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nf(s,o,this.c,r,t.l)
else q.fE(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.yv.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fD(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hN.prototype={
aa(a,b,c,d){return this.a.jB(a,d,c,b===!0)},
bz(a,b,c){return this.aa(a,null,b,c)},
aN(a){return this.aa(a,null,null,null)},
vK(a,b){return this.aa(a,null,null,b)}}
A.oj.prototype={
gej(){return this.a},
sej(a){return this.a=a}}
A.ca.prototype={
km(a){a.cu(this.b)}}
A.hz.prototype={
km(a){a.cv(this.b,this.c)}}
A.z7.prototype={
km(a){a.d4()},
gej(){return null},
sej(a){throw A.b(A.y("No events after a done."))}}
A.e2.prototype={
fP(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kx(new A.zT(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sej(b)
s.c=b}}}
A.zT.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gej()
q.b=r
if(r==null)q.c=null
s.km(this.b)},
$S:0}
A.hA.prototype={
ih(a){},
bd(){var s=this.a
if(s>=0)this.a=s+2},
b1(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kx(s.glN())}else s.a=r},
C(){this.a=-1
this.c=null
return $.eb()},
qP(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fD(s)}}else r.a=q},
$ibm:1}
A.cz.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.C,t.g5)
r.b=s
r.c=!1
q.b1()
return s}throw A.b(A.y("Already waiting for next."))}return r.qq()},
qq(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.C,t.g5)
q.b=s
r=p.aa(q.gqH(),!0,q.gqJ(),q.gqL())
if(q.b!=null)q.a=r
return s}return $.GP()},
C(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aD(!1)
else s.c=!1
return r.C()}return $.eb()},
qI(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.co(!0)
if(q.c){r=q.a
if(r!=null)r.bd()}},
qM(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.al(new A.an(a,b))
else q.cn(new A.an(a,b))},
qK(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cV(!1)
else q.l3(!1)}}
A.jN.prototype={
aa(a,b,c,d){return A.EW(c,this.$ti.c)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.dl.prototype={
aa(a,b,c,d){var s=null,r=new A.jX(s,s,s,s,this.$ti.i("jX<1>"))
r.d=new A.zR(this,r)
return r.jB(a,d,c,b===!0)},
bz(a,b,c){return this.aa(a,null,b,c)},
aN(a){return this.aa(a,null,null,null)}}
A.zR.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.jX.prototype={
tz(a){var s=this.b
if(s>=4)throw A.b(this.bF())
if((s&1)!==0)this.gaL().aA(a)},
tP(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bF())
r|=4
s.b=r
if((r&1)!==0)s.gaL().aR()},
gcS(){throw A.b(A.Y("Not available"))},
$idM:1}
A.AM.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.AN.prototype={
$0(){return this.a.co(this.b)},
$S:0}
A.jQ.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.o7(r,a,s.y[1]),n=A.yu(r,d),m=c==null?A.B2():c
s=new A.hD(this,o,n,r.bT(m,t.H),r,q|p,s.i("hD<1,2>"))
s.x=this.a.bz(s.gj9(),s.gjb(),s.gjd())
return s},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.hD.prototype={
aA(a){if((this.e&2)!==0)return
this.iL(a)},
aH(a,b){if((this.e&2)!==0)return
this.kV(a,b)},
bH(){var s=this.x
if(s!=null)s.bd()},
bI(){var s=this.x
if(s!=null)s.b1()},
hd(){var s=this.x
if(s!=null){this.x=null
return s.C()}return null},
ja(a){this.w.qc(a,this)},
je(a,b){this.aH(a,b)},
jc(){this.aR()}}
A.f0.prototype={
qc(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.D(q)
r=A.ac(q)
p=s
o=r
n=A.kk(p,o)
if(n!=null){p=n.a
o=n.b}b.aH(p,o)
return}b.aA(m)}}
A.jO.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.t(A.y("Stream is already closed"))
s.iL(b)},
bx(a,b){this.a.aH(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.t(A.y("Stream is already closed"))
s.kW()},
$ibC:1}
A.hL.prototype={
aA(a){if((this.e&2)!==0)throw A.b(A.y("Stream is already closed"))
this.iL(a)},
aH(a,b){if((this.e&2)!==0)throw A.b(A.y("Stream is already closed"))
this.kV(a,b)},
aR(){if((this.e&2)!==0)throw A.b(A.y("Stream is already closed"))
this.kW()},
bH(){var s=this.x
if(s!=null)s.bd()},
bI(){var s=this.x
if(s!=null)s.b1()},
hd(){var s=this.x
if(s!=null){this.x=null
return s.C()}return null},
ja(a){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.t(0,a)}catch(p){s=A.D(p)
r=A.ac(p)
this.aH(s,r)}},
je(a,b){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.bx(a,b)}catch(p){s=A.D(p)
r=A.ac(p)
if(s===a)this.aH(a,b)
else this.aH(s,r)}},
jc(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.v()
q.q()}catch(p){s=A.D(p)
r=A.ac(p)
this.aH(s,r)}}}
A.jH.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.o7(r,a,s.y[1]),n=A.yu(r,d),m=c==null?A.B2():c,l=new A.hL(o,n,r.bT(m,t.H),r,q|p,s.i("hL<1,2>"))
l.w=this.a.$1(new A.jO(l,s.i("jO<2>")))
l.x=this.b.bz(l.gj9(),l.gjb(),l.gjd())
return l},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.AE.prototype={}
A.AG.prototype={}
A.AF.prototype={}
A.AC.prototype={}
A.AD.prototype={}
A.AB.prototype={}
A.Ay.prototype={}
A.p3.prototype={}
A.Ax.prototype={}
A.Aw.prototype={}
A.AA.prototype={}
A.Az.prototype={}
A.p2.prototype={
v7(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.p4.prototype={}
A.p1.prototype={
eO(a,b,c){var s,r,q,p,o,n,m=this.gjg(),l=m.a
if(l===B.i){A.kp(b,c)
return}o=l.gkj()
o.toString
s=o
r=$.C
try{$.C=s
m.v7(l,l.gb7(),a,b,c)
$.C=r}catch(n){q=A.D(n)
p=A.ac(n)
$.C=r
o=b===q?c:p
s.eO(l,q,o)}},
$iN:1}
A.od.prototype={
glm(){var s=this.ax
return s==null?this.ax=new A.hT(this):s},
gb7(){return this.ay.glm()},
gca(){return this.as.a},
fD(a){var s,r,q
try{this.aV(a,t.H)}catch(q){s=A.D(q)
r=A.ac(q)
this.eO(this,s,r)}},
fE(a,b,c){var s,r,q
try{this.es(a,b,t.H,c)}catch(q){s=A.D(q)
r=A.ac(q)
this.eO(this,s,r)}},
nf(a,b,c,d,e){var s,r,q
try{this.kt(a,b,c,t.H,d,e)}catch(q){s=A.D(q)
r=A.ac(q)
this.eO(this,s,r)}},
jL(a,b){return new A.z3(this,this.bT(a,b),b)},
tL(a,b,c){return new A.z5(this,this.dk(a,b,c),c,b)},
f_(a){return new A.z2(this,this.bT(a,t.H))},
hE(a,b){return new A.z4(this,this.dk(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aM)return null
s=q.b
r=s.h(0,b)
return r!=null||s.J(b)?r:this.rr(q,b)},
rr(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkj().gjI()
if(s===B.aM)break
q=s.b
r=q.h(0,b)
if(r!=null||q.J(b)){a.b.j(0,b,r)
break}}return r},
ff(a,b){this.eO(this,a,b)},
mN(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
aV(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb7(),this,a,b)},
es(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb7(),this,a,b,c,d)},
kt(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb7(),this,a,b,c,d,e,f)},
bT(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb7(),this,a,b)},
dk(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb7(),this,a,b,c)},
fw(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb7(),this,a,b,c,d)},
mJ(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb7(),this,a,b)},
cP(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb7(),this,a)},
jQ(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
jP(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
gm0(){return this.a},
gm2(){return this.b},
gm1(){return this.c},
glX(){return this.d},
glY(){return this.e},
glW(){return this.f},
glr(){return this.r},
gjy(){return this.w},
glj(){return this.x},
gli(){return this.y},
glS(){return this.z},
glw(){return this.Q},
gjg(){return this.as},
gjI(){return this.at},
gkj(){return this.ay}}
A.z3.prototype={
$0(){return this.a.aV(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.z5.prototype={
$1(a){var s=this
return s.a.es(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").W(this.c).i("1(2)")}}
A.z2.prototype={
$0(){return this.a.fD(this.b)},
$S:0}
A.z4.prototype={
$1(a){return this.a.fE(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.oH.prototype={
gm0(){return B.e4},
gm2(){return B.e3},
gm1(){return B.e2},
glX(){return B.e0},
glY(){return B.e1},
glW(){return B.e_},
glr(){return B.dW},
gjy(){return B.e5},
glj(){return B.dV},
gli(){return B.dU},
glS(){return B.dZ},
glw(){return B.dX},
gjg(){return B.dY},
gjI(){return B.aM},
gkj(){return null},
glm(){var s=$.zY
return s==null?$.zY=new A.hT(this):s},
gb7(){var s=$.zY
return s==null?$.zY=new A.hT(this):s},
gca(){return this},
fD(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.AY(null,null,this,a)}catch(q){s=A.D(q)
r=A.ac(q)
A.kp(s,r)}},
fE(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.AZ(null,null,this,a,b)}catch(q){s=A.D(q)
r=A.ac(q)
A.kp(s,r)}},
nf(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.D1(null,null,this,a,b,c)}catch(q){s=A.D(q)
r=A.ac(q)
A.kp(s,r)}},
jL(a,b){return new A.A_(this,a,b)},
f_(a){return new A.zZ(this,a)},
hE(a,b){return new A.A0(this,a,b)},
h(a,b){return null},
ff(a,b){A.kp(a,b)},
mN(a,b){return A.FP(null,null,this,a,b)},
aV(a){if($.C===B.i)return a.$0()
return A.AY(null,null,this,a)},
es(a,b){if($.C===B.i)return a.$1(b)
return A.AZ(null,null,this,a,b)},
kt(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.D1(null,null,this,a,b,c)},
bT(a){return a},
dk(a){return a},
fw(a){return a},
mJ(a,b){return null},
cP(a){A.B_(null,null,this,a)},
jQ(a,b){return A.CD(a,b)},
jP(a,b){return A.Ez(a,b)}}
A.A_.prototype={
$0(){return this.a.aV(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.zZ.prototype={
$0(){return this.a.fD(this.b)},
$S:0}
A.A0.prototype={
$1(a){return this.a.fE(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hT.prototype={$iav:1}
A.AX.prototype={
$0(){A.DS(this.a,this.b)},
$S:0}
A.jB.prototype={}
A.dj.prototype={
gm(a){return this.a},
gF(a){return this.a===0},
gX(a){return this.a!==0},
gK(){return new A.eZ(this,A.n(this).i("eZ<1>"))},
gaX(){var s=A.n(this)
return A.dK(new A.eZ(this,s.i("eZ<1>")),new A.zw(this),s.c,s.y[1])},
J(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.le(a)},
le(a){var s=this.d
if(s==null)return!1
return this.c2(this.la(s,a),a)>=0},
D(a,b){b.a8(0,new A.zv(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.EY(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.EY(q,b)
return r}else return this.lx(b)},
lx(a){var s,r,q=this.d
if(q==null)return null
s=this.la(q,a)
r=this.c2(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.l0(s==null?q.b=A.CN():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.l0(r==null?q.c=A.CN():r,b,c)}else q.m5(b,c)},
m5(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.CN()
s=p.cp(a)
r=o[s]
if(r==null){A.CO(o,s,[a,b]);++p.a
p.e=null}else{q=p.c2(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a8(a,b){var s,r,q,p,o,n=this,m=n.l9()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aA(n))}},
l9(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.ae(i.a,null,!1,t.z)
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
l0(a,b,c){if(a[b]==null){++this.a
this.e=null}A.CO(a,b,c)},
cp(a){return J.a7(a)&1073741823},
la(a,b){return a[this.cp(b)]},
c2(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.zw.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.zv.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.e_.prototype={
cp(a){return A.ku(a)&1073741823},
c2(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jK.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.ox(b)},
j(a,b,c){this.oy(b,c)},
J(a){if(!this.w.$1(a))return!1
return this.ow(a)},
cp(a){return this.r.$1(a)&1073741823},
c2(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.z1.prototype={
$1(a){return this.a.b(a)},
$S:21}
A.eZ.prototype={
gm(a){return this.a.a},
gF(a){return this.a.a===0},
gX(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.oo(s,s.l9(),this.$ti.i("oo<1>"))},
E(a,b){return this.a.J(b)}}
A.oo.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aA(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.jV.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.oq(b)},
j(a,b,c){this.os(b,c)},
J(a){if(!this.y.$1(a))return!1
return this.op(a)},
H(a,b){if(!this.y.$1(b))return null
return this.or(b)},
ed(a){return this.x.$1(a)&1073741823},
de(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.zP.prototype={
$1(a){return this.a.b(a)},
$S:21}
A.dk.prototype={
gu(a){var s=this,r=new A.e1(s,s.r,A.n(s).i("e1<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gF(a){return this.a===0},
gX(a){return this.a!==0},
E(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.pu(b)},
pu(a){var s=this.d
if(s==null)return!1
return this.c2(s[this.cp(a)],a)>=0},
gG(a){var s=this.e
if(s==null)throw A.b(A.y("No elements"))
return s.a},
ga1(a){var s=this.f
if(s==null)throw A.b(A.y("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.l_(s==null?q.b=A.CP():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.l_(r==null?q.c=A.CP():r,b)}else return q.oQ(b)},
oQ(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.CP()
s=q.cp(a)
r=p[s]
if(r==null)p[s]=[q.jm(a)]
else{if(q.c2(r,a)>=0)return!1
r.push(q.jm(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.lb(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.lb(s.c,b)
else return s.jv(b)},
jv(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cp(a)
r=n[s]
q=o.c2(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lc(p)
return!0},
l_(a,b){if(a[b]!=null)return!1
a[b]=this.jm(b)
return!0},
lb(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lc(s)
delete a[b]
return!0},
jk(){this.r=this.r+1&1073741823},
jm(a){var s,r=this,q=new A.zQ(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jk()
return q},
lc(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jk()},
cp(a){return J.a7(a)&1073741823},
c2(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.zQ.prototype={}
A.e1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.uA.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:65}
A.ev.prototype={
E(a,b){return b instanceof A.b2&&this===b.a},
gu(a){var s=this
return new A.ov(s,s.a,s.c,s.$ti.i("ov<1>"))},
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
gG(a){var s
if(this.b===0)throw A.b(A.y("No such element"))
s=this.c
s.toString
return s},
ga1(a){var s
if(this.b===0)throw A.b(A.y("No such element"))
s=this.c.c
s.toString
return s},
gap(a){var s=this.b
if(s===0)throw A.b(A.y("No such element"))
if(s>1)throw A.b(A.y("Too many elements"))
s=this.c
s.toString
return s},
gF(a){return this.b===0},
hc(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.y("LinkedListEntry is already in a LinkedList"));++q.a
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
jD(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.ov.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.aA(s))
if(r.b!==0)r=s.e&&s.d===r.gG(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.b2.prototype={
gfq(){var s=this.a
if(s==null||this===s.gG(0))return null
return this.c}}
A.K.prototype={
gu(a){return new A.ao(a,this.gm(a),A.bz(a).i("ao<K.E>"))},
a9(a,b){return this.h(a,b)},
gF(a){return this.gm(a)===0},
gX(a){return!this.gF(a)},
gG(a){if(this.gm(a)===0)throw A.b(A.aE())
return this.h(a,0)},
ga1(a){if(this.gm(a)===0)throw A.b(A.aE())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aE())
if(this.gm(a)>1)throw A.b(A.iG())
return this.h(a,0)},
E(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.aA(a))}return!1},
cD(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.aA(a))}return!0},
fb(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.aA(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.x7("",a,b)
return s.charCodeAt(0)==0?s:s},
ds(a,b){return new A.am(a,b,A.bz(a).i("am<K.E>"))},
kz(a,b){return new A.bH(a,b.i("bH<0>"))},
cf(a,b,c){return new A.X(a,b,A.bz(a).i("@<K.E>").W(c).i("X<1,2>"))},
bi(a,b){return A.cv(a,b,null,A.bz(a).i("K.E"))},
cM(a,b){return A.cv(a,0,A.cA(b,"count",t.S),A.bz(a).i("K.E"))},
fG(a){var s,r=A.me(A.bz(a).i("K.E"))
for(s=0;s<this.gm(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
hF(a,b){return new A.bO(a,A.bz(a).i("@<K.E>").W(b).i("bO<1,2>"))},
cl(a,b){var s=b==null?A.Me():b
A.n5(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.be(b,c,r)
s=A.O(this.fO(a,b,c),A.bz(a).i("K.E"))
return s},
b5(a,b){return this.T(a,b,null)},
fO(a,b,c){A.be(b,c,this.gm(a))
return A.cv(a,b,c,A.bz(a).i("K.E"))},
jZ(a,b,c,d){var s
A.be(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ah(a,b,c,d,e){var s,r,q,p,o
A.be(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bd(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.pt(d,e).cN(0,!1)
r=0}p=J.M(q)
if(r+s>p.gm(q))throw A.b(A.E2())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
cQ(a,b,c){var s,r
if(t.j.b(c))this.av(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.tv(a,"[","]")},
$iJ:1,
$io:1,
$ip:1}
A.U.prototype={
c6(a,b,c){var s=A.n(this)
return A.Ec(this,s.i("U.K"),s.i("U.V"),b,c)},
a8(a,b){var s,r,q,p
for(s=J.E(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga7(){return J.c0(this.gK(),new A.uP(this),A.n(this).i("S<U.K,U.V>"))},
aT(a,b,c,d){var s,r,q,p,o,n=A.u(c,d)
for(s=J.E(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
J(a){return J.BT(this.gK(),a)},
gm(a){return J.as(this.gK())},
gF(a){return J.bA(this.gK())},
gX(a){return J.ec(this.gK())},
gaX(){return new A.jW(this,A.n(this).i("jW<U.K,U.V>"))},
l(a){return A.uQ(this)},
$iI:1}
A.uP.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("U.V").a(r)
return new A.S(a,r,A.n(s).i("S<U.K,U.V>"))},
$S(){return A.n(this.a).i("S<U.K,U.V>(U.K)")}}
A.uR.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:39}
A.jW.prototype={
gm(a){var s=this.a
return s.gm(s)},
gF(a){var s=this.a
return s.gF(s)},
gX(a){var s=this.a
return s.gX(s)},
gG(a){var s=this.a
s=s.h(0,J.bZ(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gap(a){var s=this.a
s=s.h(0,J.BU(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga1(a){var s=this.a
s=s.h(0,J.ps(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.ox(J.E(s.gK()),s,this.$ti.i("ox<1,2>"))}}
A.ox.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.oX.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iS.prototype={
c6(a,b,c){return this.a.c6(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
J(a){return this.a.J(a)},
a8(a,b){this.a.a8(0,b)},
gF(a){var s=this.a
return s.gF(s)},
gX(a){var s=this.a
return s.gX(s)},
gm(a){var s=this.a
return s.gm(s)},
gK(){return this.a.gK()},
l(a){return this.a.l(0)},
gaX(){return this.a.gaX()},
ga7(){return this.a.ga7()},
aT(a,b,c,d){return this.a.aT(0,b,c,d)},
$iI:1}
A.cT.prototype={
c6(a,b,c){return new A.cT(this.a.c6(0,b,c),b.i("@<0>").W(c).i("cT<1,2>"))}}
A.iO.prototype={
gu(a){var s=this
return new A.ow(s,s.c,s.d,s.b,s.$ti.i("ow<1>"))},
gF(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gG(a){var s=this,r=s.b
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
if(r.gm(0)>1)throw A.b(A.iG())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a9(a,b){var s,r=this
A.E1(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.jv(s);++r.d
return!0}return!1},
l(a){return A.tv(this,"{","}")},
jv(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.ow.prototype={
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
A.cr.prototype={
gF(a){return this.gm(this)===0},
gX(a){return this.gm(this)!==0},
D(a,b){var s
for(s=J.E(b);s.k();)this.t(0,s.gn())},
cf(a,b,c){return new A.eo(this,b,A.n(this).i("@<1>").W(c).i("eo<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iG())
s=r.gu(r)
if(!s.k())throw A.b(A.aE())
return s.gn()},
l(a){return A.tv(this,"{","}")},
ds(a,b){return new A.am(this,b,A.n(this).i("am<1>"))},
cD(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cM(a,b){return A.Ey(this,b,A.n(this).c)},
bi(a,b){return A.Ew(this,b,A.n(this).c)},
gG(a){var s=this.gu(this)
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
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lZ(b,b-r,this,null,"index"))},
$iJ:1,
$io:1,
$ieK:1}
A.k3.prototype={}
A.ke.prototype={}
A.os.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.r4(b):s}},
gm(a){return this.b==null?this.c.a:this.dF().length},
gF(a){return this.gm(0)===0},
gX(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.ot(this)},
gaX(){var s,r=this
if(r.b==null){s=r.c
return new A.ak(s,A.n(s).i("ak<2>"))}return A.dK(r.dF(),new A.zK(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.J(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.ta().j(0,b,c)},
J(a){if(this.b==null)return this.c.J(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a8(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a8(0,b)
s=o.dF()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.AP(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aA(o))}},
dF(){var s=this.c
if(s==null)s=this.c=A.k(Object.keys(this.a),t.s)
return s},
ta(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.u(t.N,t.z)
r=n.dF()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.am(r)
n.a=n.b=null
return n.c=s},
r4(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.AP(this.a[a])
return this.b[a]=s}}
A.zK.prototype={
$1(a){return this.a.h(0,a)},
$S:67}
A.ot.prototype={
gm(a){return this.a.gm(0)},
a9(a,b){var s=this.a
return s.b==null?s.gK().a9(0,b):s.dF()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gu(s)}else{s=s.dF()
s=new J.fj(s,s.length,A.a_(s).i("fj<1>"))}return s},
E(a,b){return this.a.J(b)}}
A.zI.prototype={
q(){var s,r,q=this
q.oz()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aA(A.FL(r.charCodeAt(0)==0?r:r,q.b))
s.aR()}}
A.At.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:64}
A.As.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:64}
A.kL.prototype={
gaP(){return"us-ascii"},
jW(a){return B.bv.v(a)}}
A.oW.prototype={
v(a){var s,r,q,p=A.be(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.az(a,"string","Contains invalid characters."))
o[r]=q}return o},
bX(a){return new A.Ak(new A.hu(a),this.a)}}
A.kM.prototype={}
A.Ak.prototype={
q(){this.a.a.q()},
bM(a,b,c,d){var s,r,q,p
A.be(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.R("Source contains invalid character with code point: "+q+".",null))}s=new A.ci(a)
p=this.a.a
p.t(0,s.T(s,b,c))
if(d)p.q()}}
A.kR.prototype={
gf6(){return this.a},
vY(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.be(a1,a2,a0.length)
s=$.Do()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.Br(a0.charCodeAt(l))
h=A.Br(a0.charCodeAt(l+1))
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
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a2("")
e=p}else e=p
e.a+=B.a.A(a0,q,r)
d=A.bu(k)
e.a+=d
q=l
continue}}throw A.b(A.a8("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.DA(a0,n,a2,o,m,d)
else{c=B.c.ak(d-1,4)+1
if(c===1)throw A.b(A.a8(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dl(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.DA(a0,n,a2,o,m,b)
else{c=B.c.ak(b,4)
if(c===1)throw A.b(A.a8(a,a0,a2))
if(c>1)a0=B.a.dl(a0,a2,a2,c===2?"==":"=")}return a0}}
A.ie.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.o5(this.a?u.G:u.U).mI(a,0,s,!0)
s.toString
return A.dT(s,0,null)},
bX(a){return new A.yc(a,new A.yt(this.a?u.G:u.U))}}
A.o5.prototype={
mz(a){return new Uint8Array(a)},
mI(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mz(o)
r.a=A.JI(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.yt.prototype={
mz(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bM(B.f.gab(s),s.byteOffset,a)}}
A.yp.prototype={
t(a,b){this.lf(b,0,J.as(b),!1)},
q(){this.lf(B.cK,0,0,!0)}}
A.yc.prototype={
lf(a,b,c,d){var s=this.b.mI(a,b,c,d)
if(s!=null)this.a.a.aA(A.dT(s,0,null))
if(d)this.a.a.aR()}}
A.kS.prototype={
v(a){var s,r,q=A.be(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.o4()
r=s.jR(a,0,q)
r.toString
s.jM(a,q)
return r},
bX(a){return new A.yo(a,new A.o4())}}
A.o4.prototype={
jR(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.EK(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.JF(a,b,c,q)
r.a=A.JH(a,b,c,s,0,r.a)
return s},
jM(a,b){var s=this.a
if(s<-1)throw A.b(A.a8("Missing padding character",a,b))
if(s>0)throw A.b(A.a8("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.yo.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.jR(b,0,r)
if(s!=null)this.a.a.aA(s)},
q(){this.b.jM(null,null)
this.a.a.aR()},
bM(a,b,c,d){var s,r
A.be(b,c,a.length)
if(b===c)return
s=this.b
r=s.jR(a,b,c)
if(r!=null)this.a.a.aA(r)
if(d){s.jM(a,c)
this.a.a.aR()}}}
A.pL.prototype={}
A.hu.prototype={
t(a,b){this.a.t(0,b)},
q(){this.a.q()}}
A.o8.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.M(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.af(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.av(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.av(p,o,o+n.gm(b),b)
q.c=q.c+n.gm(b)},
q(){this.a.$1(B.f.T(this.b,0,this.c))}}
A.l3.prototype={}
A.oN.prototype={
t(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.eW.prototype={
t(a,b){this.b.t(0,b)},
bx(a,b){A.cA(a,"error",t.K)
this.a.bx(a,b)},
q(){this.b.q()},
$ibC:1}
A.l5.prototype={}
A.aC.prototype={
bX(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
tJ(a){return new A.jH(new A.qI(this),a,t.fM.W(A.n(this).i("aC.T")).i("jH<1,2>"))}}
A.qI.prototype={
$1(a){return new A.eW(a,this.a.bX(a),t.oW)},
$S:108}
A.eq.prototype={}
A.iM.prototype={
l(a){var s=A.it(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.m6.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.ty.prototype={
aw(a,b){var s=A.FL(a,this.gu3().a)
return s},
a6(a,b){var s=A.K1(a,this.gf6().b,null)
return s},
gf6(){return B.cm},
gu3(){return B.cl}}
A.m8.prototype={
bX(a){return new A.zJ(null,this.b,new A.oP(a))}}
A.zJ.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.y("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a2("")
q=new A.Ag(r,s)
A.F_(b,q,p.b,p.a)
if(r.a.length!==0)q.j7()
s.q()},
q(){}}
A.m7.prototype={
bX(a){return new A.zI(this.a,a,new A.a2(""))}}
A.zM.prototype={
no(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iC(a,s,r)
s=r+1
n.ao(92)
n.ao(117)
n.ao(100)
p=q>>>8&15
n.ao(p<10?48+p:87+p)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iC(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.iC(a,s,r)
s=r+1
n.ao(92)
n.ao(q)}}if(s===0)n.b3(a)
else if(s<m)n.iC(a,s,m)},
iU(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.m6(a,null))}s.push(a)},
iB(a){var s,r,q,p,o=this
if(o.nn(a))return
o.iU(a)
try{s=o.b.$1(a)
if(!o.nn(s)){q=A.E9(a,null,o.glP())
throw A.b(q)}o.a.pop()}catch(p){r=A.D(p)
q=A.E9(a,r,o.glP())
throw A.b(q)}},
nn(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xm(a)
return!0}else if(a===!0){r.b3("true")
return!0}else if(a===!1){r.b3("false")
return!0}else if(a==null){r.b3("null")
return!0}else if(typeof a=="string"){r.b3('"')
r.no(a)
r.b3('"')
return!0}else if(t.j.b(a)){r.iU(a)
r.xk(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.iU(a)
s=r.xl(a)
r.a.pop()
return s}else return!1},
xk(a){var s,r,q=this
q.b3("[")
s=J.M(a)
if(s.gX(a)){q.iB(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b3(",")
q.iB(s.h(a,r))}}q.b3("]")},
xl(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.b3("{}")
return!0}s=a.gm(a)*2
r=A.ae(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a8(0,new A.zN(n,r))
if(!n.b)return!1
o.b3("{")
for(p='"';q<s;q+=2,p=',"'){o.b3(p)
o.no(A.G(r[q]))
o.b3('":')
o.iB(r[q+1])}o.b3("}")
return!0}}
A.zN.prototype={
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
A.zL.prototype={
glP(){var s=this.c
return s instanceof A.a2?s.l(0):null},
xm(a){this.c.iA(B.x.l(a))},
b3(a){this.c.iA(a)},
iC(a,b,c){this.c.iA(B.a.A(a,b,c))},
ao(a){this.c.ao(a)}}
A.mb.prototype={
gaP(){return"iso-8859-1"},
jW(a){return B.cu.v(a)}}
A.mc.prototype={}
A.ng.prototype={
t(a,b){this.bM(b,0,b.length,!1)}}
A.Ag.prototype={
ao(a){var s=this.a,r=A.bu(a)
if((s.a+=r).length>16)this.j7()},
iA(a){if(this.a.a.length!==0)this.j7()
this.b.t(0,a)},
j7(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.k7.prototype={
q(){},
bM(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bu(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
t(a,b){this.a.a+=b}}
A.oP.prototype={
t(a,b){this.a.a.aA(b)},
bM(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aA(a)
else r.aA(B.a.A(a,b,c))
if(d)r.aR()},
q(){this.a.a.aR()}}
A.Ar.prototype={
q(){var s,r,q,p=this.c
this.a.v3(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bM(q,0,q.length,!0)}else r.q()},
t(a,b){this.bM(b,0,J.as(b),!1)},
bM(a,b,c,d){var s,r=this.c,q=this.a.cW(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bM(s,0,s.length,!1)
r.a=""
return}}}
A.nM.prototype={
gaP(){return"utf-8"},
u_(a,b){return new A.dm((b===!0?B.dQ:B.aL).a).cW(a,0,null,!0)},
f0(a){return this.u_(a,null)},
jW(a){return B.e.v(a)}}
A.nN.prototype={
v(a){var s,r,q=A.be(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.p_(s)
if(r.lv(a,0,q)!==q)r.hw()
return B.f.T(s,0,r.b)},
bX(a){return new A.Au(new A.hu(a),new Uint8Array(1024))}}
A.p_.prototype={
hw(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.H(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
ml(a,b){var s,r,q,p,o=this
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
return!0}else{o.hw()
return!1}},
lv(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.H(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.ml(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hw()}else if(o<=2047){n=k.b
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
A.Au.prototype={
q(){if(this.a!==0){this.bM("",0,0,!0)
return}this.d.a.q()},
bM(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.ml(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lv(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hw()
else n.a=a.charCodeAt(b);++b}s.t(0,B.f.T(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jw.prototype={
bX(a){return new A.Ar(new A.dm(this.a),new A.oP(a),new A.a2(""))}}
A.dm.prototype={
cW(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.be(b,c,J.as(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Kx(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Kw(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.j_(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Fm(p)
m.b=0
throw A.b(A.a8(n,a,q+m.c))}return o},
j_(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.j_(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.j_(a,s,c,d)}return q.u2(a,b,c,d)},
v3(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bu(65533)
a.a+=s}else throw A.b(A.a8(A.Fm(77),null,null))},
u2(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a2(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bu(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bu(k)
h.a+=q
break
case 65:q=A.bu(k)
h.a+=q;--g
break
default:q=A.bu(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bu(a[m])
h.a+=q}else{q=A.dT(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bu(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.p5.prototype={}
A.aJ.prototype={
bC(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bI(p,r)
return new A.aJ(p===0?!1:s,r,p)},
pJ(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.ch()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bI(s,q)
return new A.aJ(n===0?!1:o,q,n)},
pM(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ch()
s=k-a
if(s<=0)return l.a?$.Dq():$.ch()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bI(s,q)
m=new A.aJ(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fU(0,$.fg())
return m},
bD(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.R("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.ak(b,16)===0)return n.pJ(r)
q=s+r+1
p=new Uint16Array(q)
A.ES(n.b,s,b,p)
s=n.a
o=A.bI(q,p)
return new A.aJ(o===0?!1:s,p,o)},
dz(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.R("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.ak(b,16)
if(q===0)return j.pM(r)
p=s-r
if(p<=0)return j.a?$.Dq():$.ch()
o=j.b
n=new Uint16Array(p)
A.JO(o,s,b,n)
s=j.a
m=A.bI(p,n)
l=new A.aJ(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bD(1,q)-1)>>>0!==0)return l.fU(0,$.fg())
for(k=0;k<r;++k)if(o[k]!==0)return l.fU(0,$.fg())}return l},
a0(a,b){var s,r=this.a
if(r===b.a){s=A.yq(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iQ(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iQ(p,b)
if(o===0)return $.ch()
if(n===0)return p.a===b?p:p.bC(0)
s=o+1
r=new Uint16Array(s)
A.JK(p.b,o,a.b,n,r)
q=A.bI(s,r)
return new A.aJ(q===0?!1:b,r,q)},
fV(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ch()
s=a.c
if(s===0)return p.a===b?p:p.bC(0)
r=new Uint16Array(o)
A.o6(p.b,o,a.b,s,r)
q=A.bI(o,r)
return new A.aJ(q===0?!1:b,r,q)},
fL(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iQ(b,r)
if(A.yq(q.b,p,b.b,s)>=0)return q.fV(b,r)
return b.fV(q,!r)},
fU(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bC(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iQ(b,r)
if(A.yq(q.b,p,b.b,s)>=0)return q.fV(b,r)
return b.fV(q,!r)},
bg(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ch()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.ET(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bI(s,p)
return new A.aJ(m===0?!1:n,p,m)},
pI(a){var s,r,q,p
if(this.c<a.c)return $.ch()
this.lo(a)
s=$.CI.bt()-$.jG.bt()
r=A.CK($.CH.bt(),$.jG.bt(),$.CI.bt(),s)
q=A.bI(s,r)
p=new A.aJ(!1,r,q)
return this.a!==a.a&&q>0?p.bC(0):p},
rt(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lo(a)
s=A.CK($.CH.bt(),0,$.jG.bt(),$.jG.bt())
r=A.bI($.jG.bt(),s)
q=new A.aJ(!1,s,r)
if($.CJ.bt()>0)q=q.dz(0,$.CJ.bt())
return p.a&&q.c>0?q.bC(0):q},
lo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.EP&&a.c===$.ER&&c.b===$.EO&&a.b===$.EQ)return
s=a.b
r=a.c
q=16-B.c.gmu(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.EN(s,r,q,p)
n=new Uint16Array(b+5)
m=A.EN(c.b,b,q,n)}else{n=A.CK(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.CL(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.yq(n,m,j,i)>=0){g&2&&A.H(n)
n[m]=1
A.o6(n,h,j,i,n)}else{g&2&&A.H(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.o6(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.JL(l,n,e);--k
A.ET(d,f,0,n,k,o)
if(n[e]<d){i=A.CL(f,o,k,j)
A.o6(n,h,j,i,n)
while(--d,n[e]<d)A.o6(n,h,j,i,n)}--e}$.EO=c.b
$.EP=b
$.EQ=s
$.ER=r
$.CH.b=n
$.CI.b=h
$.jG.b=o
$.CJ.b=q},
gI(a){var s,r,q,p=new A.yr(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.ys().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aJ&&this.a0(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.k([],t.s)
m=n.a
r=m?n.bC(0):n
while(r.c>1){q=$.Dp()
if(q.c===0)A.t(B.bG)
p=r.rt(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pI(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bv(s,t.hF).ee(0)},
$iaw:1}
A.yr.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:113}
A.ys.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:132}
A.om.prototype={
ms(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mF(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.Aq.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:62}
A.rl.prototype={
$0(){var s=this
return A.t(A.R("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:28}
A.aM.prototype={
iS(a){var s=1000,r=B.c.ak(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.ak(p,s),n=this.c
return new A.aM(A.lp(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aM&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.c5(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kd(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a0(a,b){var s=B.c.a0(this.a,b.a)
if(s!==0)return s
return B.c.a0(this.b,b.b)},
wQ(){var s=this
if(s.c)return s
return new A.aM(s.a,s.b,!0)},
l(a){var s=this,r=A.I_(A.Co(s)),q=A.lo(A.Cm(s)),p=A.lo(A.vW(s)),o=A.lo(A.Ck(s)),n=A.lo(A.Cl(s)),m=A.lo(A.Cn(s)),l=A.DQ(A.Em(s)),k=s.b,j=k===0?"":A.DQ(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaw:1}
A.aD.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aD&&this.a===b.a},
gI(a){return B.c.gI(this.a)},
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
return s+m+":"+q+r+":"+o+p+"."+B.a.ik(B.c.l(n%1e6),6,"0")},
$iaw:1}
A.z8.prototype={
l(a){return this.a4()}}
A.ad.prototype={
gcm(){return A.IU(this)}}
A.kN.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.it(s)
return"Assertion failed"}}
A.df.prototype={}
A.bB.prototype={
gj2(){return"Invalid argument"+(!this.a?"(s)":"")},
gj1(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gj2()+q+o
if(!s.a)return n
return n+s.gj1()+": "+A.it(s.gkc())},
gkc(){return this.b}}
A.d9.prototype={
gkc(){return this.b},
gj2(){return"RangeError"},
gj1(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.iD.prototype={
gkc(){return this.b},
gj2(){return"RangeError"},
gj1(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id9:1,
gm(a){return this.f}}
A.cU.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.nF.prototype={
l(a){return"UnimplementedError: "+this.a},
$icU:1}
A.bl.prototype={
l(a){return"Bad state: "+this.a}}
A.l8.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.it(s)+"."}}
A.my.prototype={
l(a){return"Out of Memory"},
gcm(){return null},
$iad:1}
A.jp.prototype={
l(a){return"Stack Overflow"},
gcm(){return null},
$iad:1}
A.ol.prototype={
l(a){return"Exception: "+this.a},
$iF:1}
A.bk.prototype={
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
k=""}return g+l+B.a.A(e,i,j)+k+"\n"+B.a.bg(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iF:1,
gic(){return this.a},
gfS(){return this.b},
gar(){return this.c}}
A.m0.prototype={
gcm(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iad:1,
$icU:1,
$iF:1}
A.o.prototype={
hF(a,b){return A.fl(this,A.n(this).i("o.E"),b)},
cf(a,b,c){return A.dK(this,b,A.n(this).i("o.E"),c)},
ds(a,b){return new A.am(this,b,A.n(this).i("am<o.E>"))},
kz(a,b){return new A.bH(this,b.i("bH<0>"))},
E(a,b){var s
for(s=this.gu(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
v5(a,b,c){var s,r
for(s=this.gu(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
v6(a,b,c){return this.v5(0,b,c,t.z)},
cD(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
B(a,b){var s,r,q=this.gu(this)
if(!q.k())return""
s=J.a0(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.a0(q.gn())
while(q.k())}else{r=s
do r=r+b+J.a0(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
bN(a,b){var s
for(s=this.gu(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
cN(a,b){var s=A.n(this).i("o.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
eu(a){return this.cN(0,!0)},
fG(a){return A.d4(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gF(a){return!this.gu(this).k()},
gX(a){return!this.gF(this)},
cM(a,b){return A.Ey(this,b,A.n(this).i("o.E"))},
bi(a,b){return A.Ew(this,b,A.n(this).i("o.E"))},
gG(a){var s=this.gu(this)
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
if(r.k())throw A.b(A.iG())
return s},
fb(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a9(a,b){var s,r
A.bd(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lZ(b,b-r,this,null,"index"))},
l(a){return A.In(this,"(",")")}}
A.S.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gI(a){return A.j.prototype.gI.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
P(a,b){return this===b},
gI(a){return A.eE(this)},
l(a){return"Instance of '"+A.mG(this)+"'"},
gaj(a){return A.dt(this)},
toString(){return this.l(this)}}
A.oR.prototype={
l(a){return""},
$iaG:1}
A.jq.prototype={
guJ(){var s=this.gmH()
if($.kz()===1e6)return s
return s*1000},
gmG(){var s=this.gmH()
if($.kz()===1000)return s
return B.c.M(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mH.$0()-r)
s.b=null}},
gmH(){var s=this.b
if(s==null)s=$.mH.$0()
return s-this.a}}
A.ji.prototype={
gu(a){return new A.mX(this.a)},
ga1(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.y("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.Fv(r,s)}return s}}
A.mX.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.Fv(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a2.prototype={
gm(a){return this.a.length},
iA(a){var s=A.r(a)
this.a+=s},
ao(a){var s=A.bu(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.xE.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:163}
A.kf.prototype={
gma(){var s,r,q,p,o=this,n=o.w
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
gwc(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ae(s,1)
r=s.length===0?B.q:A.fJ(new A.X(A.k(s.split("/"),t.s),A.Mo(),t.iZ),t.N)
q.x!==$&&A.BM()
p=q.x=r}return p},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.a.gI(r.gma())
r.y!==$&&A.BM()
r.y=s
q=s}return q},
gky(){return this.b},
gdd(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ad(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfp(){var s=this.d
return s==null?A.Fb(this.a):s},
gfv(){var s=this.f
return s==null?"":s},
ghV(){var s=this.r
return s==null?"":s},
vC(a){var s=this.a
if(a.length!==s.length)return!1
return A.KK(a,s,0)>=0},
fB(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.CT(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.Am(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.An(null,0,0,a)
else k=j.f
return A.kg(b,q,o,p,l,k,j.r)},
kr(a){return this.fB(a,null)},
nd(a){return this.fB(null,a)},
lK(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ad(b,"../",r);){r+=3;++s}q=B.a.df(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.i8(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dl(a,q+1,null,B.a.ae(b,r-3*s))},
bU(a){return this.fC(A.nL(a))},
fC(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb_().length!==0)return a
else{s=h.a
if(a.gk7()){r=a.nd(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmO())m=a.gi4()?a.gfv():h.f
else{l=A.Kv(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gk6()?k+A.f5(a.gbp()):k+A.f5(h.lK(B.a.ae(n,k.length),a.gbp()))}else if(a.gk6())n=A.f5(a.gbp())
else if(n.length===0)if(p==null)n=s.length===0?a.gbp():A.f5(a.gbp())
else n=A.f5("/"+a.gbp())
else{j=h.lK(n,a.gbp())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.f5(j)
else n=A.CV(j,!r||p!=null)}m=a.gi4()?a.gfv():null}}}i=a.gk8()?a.ghV():null
return A.kg(s,q,p,o,n,m,i)},
gk7(){return this.c!=null},
gi4(){return this.f!=null},
gk8(){return this.r!=null},
gmO(){return this.e.length===0},
gk6(){return B.a.S(this.e,"/")},
kv(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gdd()!=="")A.t(A.Y(u.Q))
s=r.gwc()
A.Ko(s,!1)
q=A.x7(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gma()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb_())if(p.c!=null===b.gk7())if(p.b===b.gky())if(p.gdd()===b.gdd())if(p.gfp()===b.gfp())if(p.e===b.gbp()){r=p.f
q=r==null
if(!q===b.gi4()){if(q)r=""
if(r===b.gfv()){r=p.r
q=r==null
if(!q===b.gk8()){s=q?"":r
s=s===b.ghV()}}}}return s},
$inJ:1,
gb_(){return this.a},
gbp(){return this.e}}
A.Ap.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.oZ(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.oZ(1,b,B.o,!0)
s.a+=r}},
$S:183}
A.Ao.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:62}
A.xD.prototype={
gnl(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cb(m,"?",s)
q=m.length
if(r>=0){p=A.kh(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.og("data","",n,n,A.kh(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cc.prototype={
gk7(){return this.c>0},
gk9(){return this.c>0&&this.d+1<this.e},
gi4(){return this.f<this.r},
gk8(){return this.r<this.a.length},
gk6(){return B.a.ad(this.a,"/",this.e)},
gmO(){return this.e===this.f},
gb_(){var s=this.w
return s==null?this.w=this.ps():s},
ps(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gky(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gdd(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfp(){var s,r=this
if(r.gk9())return A.aH(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbp(){return B.a.A(this.a,this.e,this.f)},
gfv(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
ghV(){var s=this.r,r=this.a
return s<r.length?B.a.ae(r,s+1):""},
lD(a){var s=this.d+1
return s+a.length===this.e&&B.a.ad(this.a,a,s)},
wF(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cc(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.CT(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb_()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gk9()?h.gfp():g
if(s)o=A.Am(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.An(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ae(q,m+1):g
return A.kg(b,p,n,o,l,j,i)},
kr(a){return this.fB(a,null)},
nd(a){return this.fB(null,a)},
bU(a){return this.fC(A.nL(a))},
fC(a){if(a instanceof A.cc)return this.rV(this,a)
return this.mc().fC(a)},
rV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lD("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lD("443")
if(p){o=r+1
return new A.cc(B.a.A(a.a,0,o)+B.a.ae(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mc().fC(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cc(B.a.A(a.a,0,r)+B.a.ae(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cc(B.a.A(a.a,0,r)+B.a.ae(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wF()}s=b.a
if(B.a.ad(s,"/",n)){m=a.e
l=A.F3(this)
k=l>0?l:m
o=k-n
return new A.cc(B.a.A(a.a,0,k)+B.a.ae(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ad(s,"../",n))n+=3
o=j-n+1
return new A.cc(B.a.A(a.a,0,j)+"/"+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.F3(this)
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
return new A.cc(B.a.A(h,0,i)+d+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
kv(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gb_()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.t(A.Y(u.Q))
q=B.a.A(s,r.e,q)
return q},
gI(a){var s=this.x
return s==null?this.x=B.a.gI(this.a):s},
P(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
mc(){var s=this,r=null,q=s.gb_(),p=s.gky(),o=s.c>0?s.gdd():r,n=s.gk9()?s.gfp():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gfv():r
return A.kg(q,p,o,n,k,l,j<m.length?s.ghV():r)},
l(a){return this.a},
$inJ:1}
A.og.prototype={}
A.ly.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.mu.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iF:1}
A.rV.prototype={
$2(a,b){this.a.bq(new A.rT(a),new A.rU(b),t.X)},
$S:187}
A.rT.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:194}
A.rU.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Mb(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.t("Attempting to box non-Dart object.")
s={}
s[$.Hd()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:9}
A.Bw.prototype={
$1(a){var s,r,q,p
if(A.FJ(a))return a
s=this.a
if(s.J(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gK());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.D(p,J.c0(a,this,t.z))
return p}else return a},
$S:29}
A.BC.prototype={
$1(a){return this.a.aB(a)},
$S:25}
A.BD.prototype={
$1(a){if(a==null)return this.a.aS(new A.mu(a===undefined))
return this.a.aS(a)},
$S:25}
A.Bb.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.FI(a))return a
s=this.a
a.toString
if(s.J(a))return s.h(0,a)
if(a instanceof Date)return new A.aM(A.lp(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.R("structured clone of RegExp",null))
if(a instanceof Promise)return A.a5(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.u(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aB(o),q=s.gu(o);q.k();)n.push(A.ph(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.M(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:29}
A.zF.prototype={
cI(a){if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
return Math.random()*a>>>0},
n_(){return Math.random()}}
A.zG.prototype={
oM(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cI(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.H(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.aq(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bM(B.az.gab(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.lv.prototype={}
A.a3.prototype={
h(a,b){var s,r=this
if(!r.jh(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a3.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jh(b))return
s.c.j(0,s.a.$1(b),new A.S(b,c,s.$ti.i("S<a3.K,a3.V>")))},
D(a,b){b.a8(0,new A.pN(this))},
c6(a,b,c){return this.c.c6(0,b,c)},
J(a){var s=this
if(!s.jh(a))return!1
return s.c.J(s.a.$1(s.$ti.i("a3.K").a(a)))},
ga7(){var s=this.c,r=A.n(s).i("aN<1,2>")
return A.dK(new A.aN(s,r),new A.pO(this),r.i("o.E"),this.$ti.i("S<a3.K,a3.V>"))},
a8(a,b){this.c.a8(0,new A.pP(this,b))},
gF(a){return this.c.a===0},
gX(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("ak<2>")
return A.dK(new A.ak(s,r),new A.pQ(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aT(a,b,c,d){return this.c.aT(0,new A.pR(this,b,c,d),c,d)},
gaX(){var s=this.c,r=A.n(s).i("ak<2>")
return A.dK(new A.ak(s,r),new A.pS(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.uQ(this)},
jh(a){return this.$ti.i("a3.K").b(a)},
$iI:1}
A.pN.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.pO.prototype={
$1(a){var s=a.b
return new A.S(s.a,s.b,this.a.$ti.i("S<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("S<a3.K,a3.V>(S<a3.C,S<a3.K,a3.V>>)")}}
A.pP.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,S<a3.K,a3.V>)")}}
A.pQ.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(S<a3.K,a3.V>)")}}
A.pR.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.W(this.c).W(this.d).i("S<1,2>(a3.C,S<a3.K,a3.V>)")}}
A.pS.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(S<a3.K,a3.V>)")}}
A.lr.prototype={
Y(a,b){return J.x(a,b)},
ac(a){return J.a7(a)}}
A.iH.prototype={
Y(a,b){var s,r,q,p
if(a===b)return!0
s=J.E(a)
r=J.E(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.Y(s.gn(),r.gn()))return!1}},
ac(a){var s,r,q
for(s=J.E(a),r=this.a,q=0;s.k();){q=q+r.ac(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.ew.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.M(a)
r=s.gm(a)
q=J.M(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.Y(s.h(a,o),q.h(b,o)))return!1
return!0},
ac(a){var s,r,q,p
for(s=J.M(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ac(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hQ.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.C7(s.guP(),s.gvx(),s.gvD(),A.n(this).i("hQ.E"),t.S)
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
A.h6.prototype={}
A.hG.prototype={
gI(a){var s=this.a
return 3*s.a.ac(this.b)+7*s.b.ac(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hG){s=this.a
s=s.a.Y(this.b,b.b)&&s.b.Y(this.c,b.c)}else s=!1
return s}}
A.iR.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.C7(null,null,null,t.mB,t.S)
for(r=J.E(a.gK());r.k();){q=r.gn()
p=new A.hG(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gK());r.k();){q=r.gn()
p=new A.hG(this,q,b.h(0,q))
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
A.lq.prototype={
Y(a,b){var s,r=this
if(a instanceof A.cr)return b instanceof A.cr&&new A.h6(r,t.cu).Y(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iR(r,r,t.a3).Y(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.ew(r,t.hI).Y(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iH(r,t.nZ).Y(a,b)
return J.x(a,b)},
ac(a){var s=this
if(a instanceof A.cr)return new A.h6(s,t.cu).ac(a)
if(t.f.b(a))return new A.iR(s,s,t.a3).ac(a)
if(t.j.b(a))return new A.ew(s,t.hI).ac(a)
if(t.e7.b(a))return new A.iH(s,t.nZ).ac(a)
return J.a7(a)},
vE(a){return!0}}
A.mt.prototype={
sm(a,b){A.Eh()},
t(a,b){return A.Eh()}}
A.nI.prototype={
j(a,b,c){return A.Jr()}}
A.cj.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.cj){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gI(a){return A.vg(this.a)},
l(a){return A.ar(this.a)}}
A.c1.prototype={
t(a,b){if(this.a!=null)throw A.b(A.y("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.y("add must be called once."))}}
A.lT.prototype={
v(a){var s=new A.c1(),r=A.cX(s)
r.t(0,a)
r.q()
r=s.a
r.toString
return r}}
A.t_.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.y("Hash.add() called after close()."))
s.r=s.r+J.as(b)
s.kZ(b)},
kZ(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.pp(B.f.gab(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.M(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ah(i,j,n,a,o)
k.e=n
return}B.f.ah(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.H(s)
s[m]=l;++m}while(m<q)
k.wW(s)}},
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
n=J.pp(B.f.gab(q))
m=B.c.M(p,4294967296)
n.$flags&2&&A.H(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kZ(q)
s=l.a
s.t(0,new A.cj(l.pb()))
s.q()},
pb(){var s,r,q,p,o,n,m
if(B.aR===$.ky())return J.Hq(B.y.gab(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.pp(B.f.gab(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.H(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.oK.prototype={
bX(a){var s=new Uint32Array(A.b7(A.k([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hu(new A.oL(s,r,a,q,new Uint32Array(16)))}}
A.A2.prototype={
wW(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cA[q]+s[q]>>>0)>>>0)>>>0
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
A.oL.prototype={}
A.kG.prototype={
gI(a){return A.c5(B.dB,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.lj&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dt(s).l(0)+".with"+s.d*8+"bits()"
return A.dt(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.pY.prototype={}
A.iQ.prototype={
gI(a){return B.u.ac(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.iQ&&B.u.Y(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.jl.prototype={
l(a){return A.dt(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iF:1}
A.uO.prototype={
l(a){return A.dt(this).l(0)+"()"}}
A.jk.prototype={
gI(a){return(B.u.ac(this.b.a)^B.u.ac(this.c)^B.u.ac(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jk){s=B.u.Y(this.b.a,b.b.a)
s=s&&B.u.Y(this.c,b.c)&&B.u.Y(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.wN.prototype={}
A.jm.prototype={
ge4(){return this.b},
gI(a){var s=A.eE(B.dL),r=B.u.ac(this.ge4())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jm&&B.u.Y(this.ge4(),b.ge4())},
l(a){return"SecretKeyData(...)"}}
A.n1.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.lj.prototype={
u5(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge4().gm(0),f=this.d
if(g!==f)throw A.b(A.az(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.G5(c)
r=new Uint32Array(4)
A.pe(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.DP(r,a.c)
p=J.Du(B.f.gab(q),0,null)
o=a.a
n=B.u.Y(B.aP.l5(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jl())
A.B3(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pe(l,k,p,0,s)
A.B3(q,1)}j=J.bM(B.y.gab(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.H(j)
j[k]=i^h}return j},
uM(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge4().gm(0),f=this.d
if(g!==f)throw A.b(A.az(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.G5(d)
r=new Uint32Array(4)
A.pe(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.DP(r,c)
p=J.Du(B.f.gab(q),0,null)
o=new Uint32Array(A.b7(p))
A.B3(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pe(l,k,p,0,s)
A.B3(q,1)}j=J.bM(B.y.gab(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.H(j)
j[k]=i^h}return new A.jk(j,B.aP.l5(j,b,s,r,o),c)}}
A.r_.prototype={
l(a){return"DartGcm()"},
l5(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lk(n,d,b)
A.lk(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.ak(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
q.setUint32(12,B.c.ak(r,o),!1)
A.lk(n,d,J.bM(B.az.gab(q),0,null))
p=new Uint32Array(4)
A.pe(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iQ(J.bM(B.y.gab(n),0,null))}}
A.oe.prototype={}
A.of.prototype={}
A.qL.prototype={}
A.r0.prototype={}
A.yY.prototype={
Y(a,b){var s,r,q=J.M(a),p=J.M(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ac(a){var s,r,q,p,o
for(s=J.M(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.ak(q,16)
r=(r^B.c.rU(p,o)^B.c.m7(p,16-o))>>>0}return r}}
A.mS.prototype={}
A.kT.prototype={$iBX:1}
A.kU.prototype={
hU(){if(this.w)throw A.b(A.y("Can't finalize a finalized Request."))
this.w=!0
return B.bz},
l(a){return this.a+" "+this.b.l(0)}}
A.kV.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:80}
A.kW.prototype={
$1(a){return B.a.gI(a.toLowerCase())},
$S:82}
A.pH.prototype={
oC(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.R("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.R("Invalid content length "+A.r(s)+".",null))}}}
A.l0.prototype={
b4(a){return this.o9(a)},
o9(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b4=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.DL("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hU().wP(),$async$b4)
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
e=b4.gmy()
d=null
if(e!=null){d=e
J.cZ(f,"content-length",d)}for(b0=b4.r,b0=new A.aN(b0,A.n(b0).i("aN<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.cZ(f,c.a,c.b)}f=A.pi(f)
f.toString
A.bg(f)
b0=l.signal
s=8
return A.a(A.a5(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b4)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.jd(a,null):null
if(a0==null&&a!=null){f=A.DL("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.u(a9,a9)
b.headers.forEach(A.p7(new A.pK(a1)))
f=A.KA(b4,b)
a4=b.status
a6=a1
a8=a0
A.nL(b.url)
a9=b.statusText
f=new A.nf(A.GG(f),a4,a8,a6)
f.oC(a4,a8,a6,!1,!0,a9,b4)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b3=o.pop()
a2=A.D(b3)
a3=A.ac(b3)
A.FO(a2,a3,b4)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.b.H(a5,l)
s=n.pop()
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].abort()
this.b=!0}}
A.pK.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:85}
A.AL.prototype={
$1(a){return A.hY(this.a,this.b,a)},
$S:87}
A.AU.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.an()}},
$S:0}
A.AV.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.a(A.a5(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.D(k)
m=A.ac(k)
if(!o.a.b)A.FO(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.dx.prototype={
wP(){var s=new A.w($.C,t.jz),r=new A.aI(s,t.iq),q=new A.o8(new A.pM(r),new Uint8Array(1024))
this.aa(q.gtv(q),!0,q.ge6(),r.gtS())
return s}}
A.pM.prototype={
$1(a){return this.a.aB(new Uint8Array(A.b7(a)))},
$S:14}
A.eh.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iF:1}
A.mm.prototype={
gm(a){return this.b}}
A.v8.prototype={
gmy(){var s,r,q,p=this,o={},n=o.a=0
p.x.a8(0,new A.v9(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.q)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.lB(q)).length+q.b+2)}return o.a+2+70+4},
hU(){var s=this,r=s.p7()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kR()
return new A.dx(s.bk(r))},
bk(a){return this.q5(a)},
q5(a){var $async$bk=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.v(f+"\r\n")
d=B.e.v(f+"--\r\n")
f=m.x,f=new A.aN(f,A.n(f).i("aN<1,2>")).gu(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bV(A.e0(e),$async$bk,r)
case 5:k=l.b
j=$.BR()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.Dr()
s=6
q=[1]
return A.bV(A.e0(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bk,r)
case 6:s=7
q=[1]
return A.bV(A.e0(B.e.v(k)),$async$bk,r)
case 7:s=8
q=[1]
return A.bV(A.e0(B.b3),$async$bk,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bV(A.e0(e),$async$bk,r)
case 12:s=13
q=[1]
return A.bV(A.e0(B.e.v(m.lB(g))),$async$bk,r)
case 13:if(g.f)A.t(A.y("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bV(A.K_(g.e),$async$bk,r)
case 14:s=15
q=[1]
return A.bV(A.e0(B.b3),$async$bk,r)
case 15:case 10:f.length===l||(0,A.q)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bV(A.e0(d),$async$bk,r)
case 16:case 1:return A.bV(null,0,r)
case 2:return A.bV(o.at(-1),1,r)}})
var s=0,r=A.FH($async$bk,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.FX(r)},
qo(a,b){var s,r=$.BR()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.Dr()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lB(a){var s=a.d.l(0),r=$.BR(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
p7(){var s,r=J.E6(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cQ[$.GQ().cI(66)]
return"dart-http-boundary-"+A.dT(r,0,null)}}
A.v9.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.qo(a,b)).length+B.e.v(b).length+2)},
$S:37}
A.wE.prototype={
gmy(){return this.y.length},
gjX(){var s,r
if(this.gcq()==null||!this.gcq().c.a.J("charset"))return B.o
s=this.gcq().c.a.h(0,"charset")
s.toString
r=A.I3(s)
return r==null?A.t(A.a8('Unsupported encoding "'+s+'".',null,null)):r},
hU(){this.kR()
return new A.dx(A.Cx(this.y,t.L))},
gcq(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.IC(s)},
scq(a){this.r.j(0,"content-type",a.l(0))},
pe(){if(!this.w)return
throw A.b(A.y("Can't modify a finalized Request."))}}
A.js.prototype={}
A.nf.prototype={}
A.ii.prototype={}
A.fK.prototype={
l(a){var s=new A.a2(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a8(0,new A.uU(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.uS.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.x8(null,j),h=$.Hp()
i.iJ(h)
s=$.Ho()
i.f8(s)
r=i.gkf().h(0,0)
r.toString
i.f8("/")
i.f8(s)
q=i.gkf().h(0,0)
q.toString
i.iJ(h)
p=t.N
o=A.u(p,p)
for(;;){p=i.d=B.a.ei(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gN():n
if(!m)break
p=i.d=h.ei(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gN()
i.f8(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.f8("=")
n=i.d=s.ei(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gN()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.My(i)
n=i.d=h.ei(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.uV()
return A.Ch(r,q,o)},
$S:112}
A.uU.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Hm()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.GD(b,$.Hb(),new A.uT(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:37}
A.uT.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:59}
A.Bj.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:59}
A.pG.prototype={
dq(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eH(),$async$dq)
case 5:o=b
s=o.gnb()<0.25?6:7
break
case 6:s=8
return A.a(p.ju(o),$async$dq)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnb()<0.25?9:10
break
case 9:s=11
return A.a(p.ju(m),$async$dq)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
ep(){var s=0,r=A.h(t.q),q,p=this
var $async$ep=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eH(),$async$ep)
case 3:q=p.ju(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ep,r)},
eH(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eH=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.c8():j
p=3
s=6
return A.a(l,$async$eH)
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
return A.f($async$eH,r)},
ju(a){var s=this.c
if(s!=null)return s
return this.c=this.h1(a)},
h1(a){return this.pL(a)},
pL(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$h1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.y("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.is(l),$async$h1)
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
return A.f($async$h1,r)}}
A.ja.prototype={
oE(a,b,c,d,e,f,g,h,i){var s=this,r=new A.pG(s.c)
s.y!==$&&A.cf()
s.y=r
s.z!==$&&A.cf()
s.z=new A.vy(s.x,s.b,r,s.a)},
il(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$il=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.v()
s=7
return A.a(m.io(),$async$il)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.D(k)
if(m instanceof A.ck){n.as=!1
n.ax=!0}else if(m instanceof A.bn)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$il,r)},
fT(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.v()
n=A.IQ(B.c6,o,A.k(["data"],t.s),p.gqQ(),p.gqN())
p.Q=n
s=3
return A.a(n.az(),$async$fT)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
eA(){var s=0,r=A.h(t.H),q=this,p,o
var $async$eA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aG()
s=2
return A.a(o instanceof A.w?o:A.bw(o,t.H),$async$eA)
case 2:q.Q=null
for(o=q.ch,p=new A.aS(o,o.r,o.e,A.n(o).i("aS<2>"));p.k();)p.d.C()
o.am(0)
q.CW.am(0)
return A.e(null,r)}})
return A.f($async$eA,r)},
fZ(){var s=0,r=A.h(t.H),q=this
var $async$fZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.eA(),$async$fZ)
case 2:q.x.a.q()
return A.e(null,r)}})
return A.f($async$fZ,r)},
qO(){var s,r,q,p
for(s=this.cx,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
this.eE(p,new A.cD(p,B.aa,null))}},
qR(a){var s=a.b,r=s.b
if(!B.b.E(this.cx,r))return
if(a.a==="delete"){this.hs(s)
return}this.eE(r,new A.cD(r,B.aa,s))},
hs(a){return this.td(a)},
td(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hs=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.E(n.cx,j)){s=1
break}m=null
p=4
l=n.z
l===$&&A.v()
s=7
return A.a(l.bW(a.a),$async$hs)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.D(i)
if(l instanceof A.cm){n.eE(j,new A.cD(j,B.aO,null))
s=1
break}else if(l instanceof A.bn){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eE(j,new A.cD(j,B.aO,null))
s=1
break}n.eE(j,new A.cD(j,B.aa,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hs,r)},
eE(a,b){var s,r,q=this
q.CW.j(0,a,b)
s=q.ch
r=s.h(0,a)
if(r!=null)r.C()
s.j(0,a,A.cR(q.d,new A.vu(q,a)))},
wY(a,b){return this.iw(null,a,null,b,null)},
iw(a,b,c,d,e){return this.x0(a,b,c,d,e)},
x_(a,b){return this.iw(null,a,null,null,b)},
x0(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iw=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aT(0,new A.vv(p),t.N,t.co)
n=p.z
n===$&&A.v()
q=n.iv(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iw,r)},
$iCz:1}
A.vu.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.H(0,q)
s=r.CW.H(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.vv.prototype={
$2(a,b){return new A.S(a,new A.dB("imgs+",b.a,b.b,b.c),t.ia)},
$S:125}
A.mF.prototype={}
A.vQ.prototype={
hJ(a,b,c,d){return this.tU(a,b,c,d)},
tU(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$hJ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.A8(d)
n=t.hw
m=A.dR(null,null,n)
l=t.N
k=$.C.h(0,B.dt)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.l0(A.k([],t.kG))
j=new A.vw(j)
p=new A.mF(c,B.aU,a,o,B.aZ,200,25,b,null,j,m,A.u(l,t.hU),A.u(l,n))
p.oE(a,B.aU,b,25,200,null,B.aZ,o,null)
s=3
return A.a(p.fT(),$async$hJ)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
hP(a){return this.uC(a)},
uC(a){var s=0,r=A.h(t.H),q
var $async$hP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.eA(),$async$hP)
case 2:a.fZ()
q=a.ay
if((q.c&4)===0)q.q()
return A.e(null,r)}})
return A.f($async$hP,r)}}
A.A8.prototype={
c8(){var s=0,r=A.h(t.q),q,p=this,o
var $async$c8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c8(),$async$c8)
case 3:q=o.EA(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c8,r)},
is(a){return this.wA(a)},
wA(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$is=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c8(),$async$is)
case 3:q=o.EA(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$is,r)}}
A.vH.prototype={}
A.vy.prototype={
fi(a,b,c,d,e,f){return this.vJ(a,b,c,d,e,f)},
vJ(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fi=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Nc(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.z(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.z(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.z(c,"'","\\'")+"'")}n=t.N
n=A.u(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.iu(B.c.bO(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.B(b,","))
k=p.b.bU("/api/collections/data/records").kr(n)
s=3
return A.a(p.m3("GET",k),$async$fi)
case 3:j=a0
p.dH(j,A.k([200],t.t),k)
i=p.cY(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bc("List response has no items array."))
h=J.c0(i,new A.vG(p),t.Q)
h=A.O(h,h.$ti.i("Z.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
bW(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.js(a)
s=3
return A.a(p.m3("GET",o),$async$bW)
case 3:n=c
if(n.a===404)throw A.b(A.IO("not found"))
p.dH(n,A.k([200],t.t),o)
q=p.dP(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
hL(a,b,c){return this.tZ(a,b,c)},
tZ(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bU("/api/collections/data/records")
s=3
return A.a(p.eV("POST",o,B.h.a6(A.m(["id",b,"store",c,"data",B.h.aw(a,null)],t.N,t.z),null)),$async$hL)
case 3:n=e
if(n.a===400&&p.qs(n))throw A.b(new A.en(p.eG(n)))
p.dH(n,A.k([200,201],t.t),o)
q=p.dP(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)},
qs(a){var s,r,q,p,o,n
try{s=this.cY(a)
r=J.V(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fH(a,b,c){return this.wX(a,b,c)},
wX(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fH=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.js(c)
s=3
return A.a(p.eV("PATCH",o,B.h.a6(A.m(["data",B.h.aw(b,null)],t.N,t.z),null)),$async$fH)
case 3:n=e
p.dH(n,A.k([200],t.t),o)
q=p.dP(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
iv(a,b,c,d,e){return this.wZ(a,b,c,d,e)},
wZ(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$iv=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.js(b)
m=t.N
l=A.u(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a6(d,null))
if(e==null)m=null
else{m=A.n(e).i("ak<2>")
m=A.O(new A.ak(e,m),m.i("o.E"))}s=3
return A.a(p.rN(new A.lW("PATCH",n,B.ay,l,m==null?B.cJ:m)),$async$iv)
case 3:o=g
p.dH(o,A.k([200],t.t),n)
q=p.dP(p.cY(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iv,r)},
f3(a,b,c){return this.uG(a,b,c)},
uG(a,b,c){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$f3=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.u(i,i)
l=n.b.bU("/api/files/data/"+A.oZ(2,b,B.o,!1)+"/"+A.oZ(2,a,B.o,!1))
k=i.a===0?l:l.kr(i)
s=3
return A.a(n.qT(new A.es("GET",k,B.ay,null)),$async$f3)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.aN(new A.vF()).C().fF(B.c7),$async$f3)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.lI(A.Ik(m.a,m.b,""),k))
case 5:q=m.c
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f3,r)},
ft(a){return this.wh(a)},
wh(a6){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$ft=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a4=p.b.bU("/api/batch")
a5=A.k([],t.kf)
for(l=J.aB(a6),k=l.gu(a6),j=t.N,i=t.z,h=t.K;k.k();){g=k.gn()
a5.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",B.h.aw(g.d,null)],j,i)],j,h))}s=3
return A.a(p.eV("POST",a4,B.h.a6(A.m(["requests",a5],j,t.ew),null)),$async$ft)
case 3:o=a9
if(o.a===403)throw A.b(A.Ia(p.eG(o)))
if(o.a===400)throw A.b(new A.dw(p.eG(o)))
p.dH(o,A.k([200],t.t),a4)
n=null
try{n=B.h.aw(o.c,null)}catch(a7){a5=A.D(a7)
if(t.Y.b(a5)){m=a5
throw A.b(A.bc("Batch response is not valid JSON: "+m.gic()))}else throw a7}a5=t.j
if(a5.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a5.b(c))throw A.b(A.bc("Batch response has no results array."))}else throw A.b(A.bc("Batch response is not a list or envelope."))
e=c}a5=J.M(e)
if(a5.gm(e)!==l.gm(a6))throw A.b(A.bc("Batch response has "+a5.gm(e)+" results for "+l.gm(a6)+" requests."))
b=A.k([],t.g2)
for(k=t.f,a=0;a<l.gm(a6);++a){a0=a5.h(e,a)
if(!k.b(a0))throw A.b(A.bc("Batch response entry "+a+" is not a JSON object."))
j=l.h(a6,a)
a1=a0.h(0,"status")
i=J.ds(a1)
a2=i.P(a1,200)||i.P(a1,201)
a3=a0.h(0,"body")
i=a2&&k.b(a3)?p.dP(a3):null
h=a2?null:p.pR(a0)
g=a2&&k.b(a3)?B.h.a6(a3.h(0,"data"),null):null
b.push(new A.jg(j.a,a2,i,h,g))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
io(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$io=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eV("POST",p.b.bU("/api/batch"),B.h.a6(A.m(["requests",[]],t.N,t.kS),null)),$async$io)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.HE(p.eG(o)))
if(n===408||n===429||n>=500)throw A.b(A.EB("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$io,r)},
js(a){return this.b.bU("/api/collections/data/records/"+A.oZ(2,a,B.o,!1))},
eV(a,b,c){return this.c5(new A.vB(this,a,b,c),new A.vC(),t.w)},
m3(a,b){return this.eV(a,b,null)},
rN(a){return this.c5(new A.vD(this,a),new A.vE(),t.w)},
qT(a){return this.c5(new A.vz(this,a),new A.vA(),t.lI)},
c5(a,b,c){return this.ti(a,b,c,c)},
ti(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c5=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.dq(),$async$c5)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c5)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.ep(),$async$c5)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$c5)
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
i=A.D(g)
if(i instanceof A.dC){j=i
throw A.b(A.EB(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c5,r)},
jz(a,b,c,d){return this.rL(a,b,c,d)},
rL(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.u(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b4(new A.es(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jz,r)},
dH(a,b,c){if(B.b.E(b,a.a))return
throw A.b(this.lI(a,c))},
lI(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eG(a)
if(401===s)return new A.bN(q)
if(403===s)return new A.ck(q)
if(404===s)return new A.cm(q)
if(408===s||429===s)return new A.db(r,q)
if(400===s)return new A.eD(q)
if(s>=500)return new A.h5(q)
return new A.eF("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eG(a){var s,r,q,p,o
try{s=this.cY(a)
r=J.V(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.V(s,"data")
if(t.f.b(q)){p=q
p=p.gX(p)}else p=!1
if(p){p=B.h.a6(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
cY(a){var s,r,q,p=null
try{p=B.h.aw(a.c,null)}catch(r){q=A.D(r)
if(t.Y.b(q)){s=q
throw A.b(A.bc("Response is not valid JSON: "+s.gic()))}else throw r}if(t.f.b(p))return A.bb(p,t.N,t.X)
throw A.b(A.bc("Expected a JSON object, got "+J.c_(p).l(0)+"."))},
dP(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bc("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bc("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.bb(o,n,m):A.u(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.Dy(k,n)
j=A.O(j,j.$ti.i("o.E"))}else j=B.q
return new A.cM(s,p,q,l,j)},
pR(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.vG.prototype={
$1(a){return this.a.dP(a)},
$S:130}
A.vF.prototype={
$1(a){},
$S:14}
A.vB.prototype={
$1(a){var s=this
return s.a.jz(s.b,s.c,s.d,a)},
$S:56}
A.vC.prototype={
$1(a){return a.a},
$S:55}
A.vD.prototype={
$1(a){var s=this.b,r=t.N
r=A.cK(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dv(new A.lW(s.a,s.b,r,s.d,s.e))},
$S:56}
A.vE.prototype={
$1(a){return a.a},
$S:55}
A.vz.prototype={
$1(a){var s=this.b,r=t.N
r=A.cK(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.el(new A.es(s.a,s.b,r,s.d))},
$S:138}
A.vA.prototype={
$1(a){return a.a},
$S:143}
A.jc.prototype={}
A.hM.prototype={}
A.vI.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eU()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aG(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.C()
s=2
return A.a(n instanceof A.w?n:A.bw(n,t.H),$async$aG)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.an()
return A.e(null,r)}})
return A.f($async$aG,r)},
eU(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eU=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.c_(),$async$eU)
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
return A.a(A.Ig(n.$1(k),m),$async$eU)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eU,r)},
lO(a){var s=this.a,r=t.N
return s.a.el(new A.es("GET",s.b.bU("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
m4(a,b){var s=this.a,r=t.N
return s.a.b4(new A.es("POST",s.b.bU("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a6(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
c_(){return this.pt()},
pt(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$c_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a.c
s=3
return A.a(l.dq(),$async$c_)
case 3:k=b
m.a=k
s=4
return A.a(p.lO(k),$async$c_)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.ep(),$async$c_)
case 7:k=b
m.a=k
s=8
return A.a(p.lO(k),$async$c_)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.iC("realtime connect status "+l,null))
s=!p.x?9:10
break
case 9:s=11
return A.a(o.c.aN(new A.vL()).C(),$async$c_)
case 11:s=1
break
case 10:++p.as
p.z=new A.aI(new A.w($.C,t.D),t.h)
l=$.pn()
n=A.k([],t.s)
m.b=m.c=!1
p.y=o.c.bz(new A.vM(m,p,new A.A9(new A.yZ(l),n)),new A.vN(p),new A.vO(p))
s=12
return A.a(p.z.a,$async$c_)
case 12:p.y=null
if(m.b)throw A.b(A.iC("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
dL(a,b){return this.qd(a,b)},
qd(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dL=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:b=a0.a
s=b!=null?3:4
break
case 3:s=5
return A.a(p.m4(b,a1),$async$dL)
case 5:l=a4
s=l.a===401?6:8
break
case 6:a=b
s=10
return A.a(p.a.c.ep(),$async$dL)
case 10:s=9
return A.a(p.m4(a,a4),$async$dL)
case 9:s=7
break
case 8:a4=l
case 7:k=a4.a
if(k!==204&&k!==200)throw A.b(A.iC("realtime subscribe status "+k,null))
s=1
break
case 4:j=a0.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
k=t.f
if(!k.b(n)){s=1
break}try{i=n
h=i.h(0,"id")
g=i.h(0,"updated")
if(typeof h!="string"||typeof g!="string")A.t(A.bc("Realtime record missing id/updated."))
f=i.h(0,"store")
j=i.h(0,"data")
e=i.h(0,"imgs")
i=typeof f=="string"?f:""
k=k.b(j)?A.bb(j,t.N,t.X):B.j
if(t.j.b(e)){d=J.Dy(e,t.N)
d=A.O(d,d.$ti.i("o.E"))}else d=B.q
m=new A.cM(h,i,g,k,d)
p.w.$1(new A.jc(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$dL,r)}}
A.vP.prototype={
$1(a){return A.Gk(a,this.a,this.b,A.N6())},
$S:144}
A.vL.prototype={
$1(a){},
$S:14}
A.vM.prototype={
$1(a){var s,r,q,p,o,n,m=this.c.uX(a)
for(s=m.length,r=this.b,q=this.a,p=t.P,o=0;o<m.length;m.length===s||(0,A.q)(m),++o){n=m[o]
r.Q=r.Q.V(new A.vJ(q,r,n),p).mv(new A.vK(r))}},
$S:14}
A.vJ.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=n.a
if(i.b){s=1
break}p=4
s=7
return A.a(n.b.dL(n.c,i.a),$async$$1)
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
return A.a(j instanceof A.w?j:A.bw(j,t.H),$async$$1)
case 8:i=i.z
if((i.a.a&30)===0)i.an()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!i.c&&n.c.a!=null){i.c=!0
try{n.b.r.$0()}catch(g){m=A.D(g)
l=A.ac(g)
i=n.b
i.at=m
i.ax=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:149}
A.vK.prototype={
$2(a,b){var s=this.a
if(s.at==null)s.at=a
if(s.ax==null)s.ax=b},
$S:9}
A.vN.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:0}
A.vO.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:23}
A.A9.prototype={
uX(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.ku()
r=A.k([],t.gy)
for(q=s.length,p=0;;){o=this.qp(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dp(p,o,q)))
p=o+1
m=this.pH(B.a.wS(new A.dm(!0).cW(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.f.b5(s,p))
return r},
qp(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
q6(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.am(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.am(k)
try{q=B.h.aw(r,l)
if(t.f.b(q)){p=A.bb(q,t.N,t.X)
o=J.V(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.hM(o,l)
return new A.hM(l,p)}}catch(n){}return l},
pH(a){var s,r=this,q=null
if(a.length===0)return r.q6()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.am(r.c)
return new A.hM(B.a.cj(B.a.ae(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.cj(B.a.ae(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.cj(B.a.ae(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.es.prototype={}
A.dB.prototype={
om(){return this.d.$0()},
gm(a){return this.c}}
A.lW.prototype={}
A.cI.prototype={}
A.dC.prototype={
l(a){return"HttpTransportException: "+this.a},
$iF:1}
A.dS.prototype={}
A.vw.prototype={
b4(a){return this.oa(a)},
oa(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.el(a),$async$b4)
case 7:m=c
j=m.c
s=8
return A.a(B.aL.kT(j).ee(0).fF(B.ae),$async$b4)
case 8:l=c
j=m.a
i=m.b
q=new A.cI(j,i,l)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.D(g)
if(j instanceof A.dC)throw g
else{k=j
j=A.iC("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
dv(a){return this.ob(a)},
ob(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dv=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.IK(a6.a,a6.b)
h.r.D(0,a6.c)
h.x.D(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.om(),$async$dv)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.GG(a0)
a3=new A.fK("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cT(A.u(d,d),e))
b.push(new A.mm(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.q)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b4(m).fF(B.ae),$async$dv)
case 11:k=a8
g=k.w
s=12
return A.a(B.aL.kT(g).ee(0).fF(B.ae),$async$dv)
case 12:j=a8
g=k.b
f=k.e
q=new A.cI(g,f,j)
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
g=A.D(a5)
if(g instanceof A.dC)throw a5
else{i=g
g=A.iC("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dv,r)},
el(a){return this.w5(a)},
w5(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$el=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.J5(a,a0)
a1.r.D(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjX().jW(j)
i.pe()
i.y=A.Ng(j)
h=i.gcq()
if(h==null){j=t.N
i.scq(A.Ch("text","plain",A.m(["charset",i.gjX().gaP()],j,j)))}else{j=i.gcq()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c9(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.J("charset")){j=t.N
f=A.m(["charset",i.gjX().gaP()],j,j)
e=h.a
d=h.b
c=A.bb(h.c,j,j)
c.D(0,f)
i.scq(A.Ch(e,d,c))}}}p=4
s=7
return A.a(n.a.b4(a1).fF(B.ae),$async$el)
case 7:m=a5
j=t.N
l=A.u(j,j)
m.e.a8(0,new A.vx(l))
j=m.b
i=m.w
q=new A.dS(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.D(a2)
if(j instanceof A.dC)throw a2
else{k=j
a=A.iC("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$el,r)}}
A.vx.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:37}
A.qG.prototype={
$1(a){return a.b===this.a},
$S:157}
A.qH.prototype={
$1(a){return a.b===this.a},
$S:158}
A.la.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.O(s,A.n(s).c)
B.b.aF(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.O(s,A.n(s).c)
B.b.aF(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.c2.prototype={}
A.l6.prototype={
gU(){return"committedChange"},
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
s=A.O(s,A.n(s).c)
B.b.aF(s)
q.j(0,"changedFields",s)
return q}}
A.ld.prototype={
gU(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jy.prototype={
gU(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.lN.prototype={
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
A.lD.prototype={
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
A.lE.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.lI.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lF.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.lC.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lR.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.lL.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lG.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.lP.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lJ.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.lw.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.nc.prototype={
p(){return B.j}}
A.lQ.prototype={
gU(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.lO.prototype={
gU(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fC.prototype={
gU(){return"fileRefs"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.lM.prototype={
gU(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fB.prototype={
gU(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fz.prototype={
gU(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.hd.prototype={
gU(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fA.prototype={
gU(){return"fileChunk"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",A.e9(r.b))
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.va.prototype={}
A.iX.prototype={}
A.j_.prototype={}
A.iY.prototype={}
A.j0.prototype={}
A.iU.prototype={}
A.iV.prototype={}
A.iT.prototype={}
A.iZ.prototype={}
A.iW.prototype={}
A.AR.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.wv.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.u(k,j),h=t.d,g=A.k([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)g.push(s[q].p())
i.j(0,"where",g)
g=A.k([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=A.k([],h)
for(n=B.b.gu(p);n.k();)o.push(n.gn().p())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.p())
h=A.k([],h)
for(g=l.d,s=g.length,q=0;q<g.length;g.length===s||(0,A.q)(g),++q){m=g[q]
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
A.ww.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.wx.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.P("Malformed query conditions."))
s=A.k([],t.cM)
for(r=J.E(a);r.k();)s.push(A.Ep(r.gn()))
return s},
$S:172}
A.eG.prototype={
p(){var s,r,q,p,o=this,n=A.u(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.q)(s),++p)r.push(A.e9(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.e9(o.c))
return n}}
A.wr.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.ws.prototype={
$1(a){return a.b===this.a},
$S:177}
A.aY.prototype={
a4(){return"QueryConditionOp."+this.b}}
A.cL.prototype={}
A.vU.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.vT.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.P("Malformed predicate children."))
s=A.k([],t.eK)
for(r=J.E(a);r.k();)s.push(A.Cj(r.gn()))
return s},
$S:179}
A.iN.prototype={
p(){var s=A.u(t.N,t.X)
s.j(0,"kind","leaf")
s.D(0,this.a.p())
return s}}
A.j7.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.ia.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.ib.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mM.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.wu.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.cC.prototype={
a4(){return"AggregateFn."+this.b}}
A.wL.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.wM.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.mR.prototype={}
A.mx.prototype={
p(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.l1.prototype={
p(){return B.j}}
A.lU.prototype={
p(){return B.j}}
A.l4.prototype={
p(){return B.j}}
A.lS.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mV.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mn.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.KV(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mN.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lg.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lf.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.ls.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lX.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kH.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.lz.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.n0.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dU.prototype={
a4(){return"TransactionDurability."+this.b}}
A.ny.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.nz.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nB.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nD.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nC.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nA.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nS.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.nT.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.nR.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kJ.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.nQ.prototype={
p(){return B.j}}
A.nO.prototype={
p(){return B.j}}
A.mJ.prototype={
p(){return B.j}}
A.l7.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.mW.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lc.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.lb.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.mT.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.kE.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.kF.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.le.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ag.prototype={}
A.fS.prototype={
gU(){return"ok"},
p(){return B.j}}
A.ih.prototype={
gU(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.lV.prototype={
gU(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.h1.prototype={
gU(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.h2.prototype={
gU(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fO.prototype={
gU(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fY.prototype={
gU(){return"queryRows"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fu.prototype={
gU(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fv.prototype={
gU(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fH.prototype={
gU(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fi.prototype={
gU(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fy.prototype={
gU(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.h4.prototype={
gU(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.k([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.n_.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fs.prototype={
gU(){return"conflicts"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fr.prototype={
gU(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hi.prototype={
gU(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hp.prototype={
gU(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fV.prototype={
gU(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fp.prototype={
gU(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.eM.prototype={
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
A.bo.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"},
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.no.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.nt.prototype={
p(){return B.j}}
A.nj.prototype={
p(){return B.j}}
A.nk.prototype={
p(){return B.j}}
A.nm.prototype={
p(){return B.j}}
A.nu.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.nn.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.nr.prototype={
p(){return B.j}}
A.np.prototype={
gU(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.nl.prototype={
gU(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.ns.prototype={
gU(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.nq.prototype={
gU(){return"syncStatusEvent"},
p(){return A.m(["status",A.e9(this.a.p())],t.N,t.X)}}
A.kP.prototype={
gU(){return"authRequired"},
p(){return B.j}}
A.hr.prototype={
l(a){return"WireException: "+this.a},
$iF:1}
A.BN.prototype={
$1(a){return a.a===this.a},
$S:180}
A.BO.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:181}
A.mE.prototype={
a4(){return"PlatformProfile."+this.b}}
A.nb.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.wW.prototype={
$1(a){return J.bZ(a.gaX())},
$S:35}
A.wX.prototype={
$1(a){return B.a.E(a,"ENABLE_FTS5")},
$S:10}
A.ij.prototype={
a4(){return"ChangeOrigin."+this.b}}
A.dy.prototype={
a4(){return"ChangeAction."+this.b}}
A.aT.prototype={
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
s=A.O(s,A.n(s).c)
B.b.aF(s)
q.j(0,"changedFields",s)
return q},
P(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aT))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.t.Y(b.e,s.e)&&B.t.Y(b.f,s.f)&&B.t.Y(b.r,s.r)},
gI(a){var s=this
return A.c5(s.a,s.b,s.c,s.d,B.t.ac(s.e),B.t.ac(s.f),B.t.ac(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a1.prototype={}
A.pV.prototype={
jV(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
uK(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.pW.prototype={}
A.pX.prototype={}
A.ry.prototype={}
A.pu.prototype={
uL(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cI(256)
q=this.b.uM(new Uint8Array(A.b7(a)),b,m,this.c)
s=q.a
p=s.length
o=29+p
n=new Uint8Array(o)
n[0]=1
B.f.av(n,1,13,q.c)
p=13+p
B.f.av(n,13,p,s)
B.f.av(n,p,o,q.b.a)
return n},
u4(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.R("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.y("Unsupported ciphertext version 0x"+B.a.ik(B.c.kw(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b7(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b7(B.f.b5(a,n)))
q=new Uint8Array(A.b7(B.f.T(a,13,n)))
try{n=this.b.u5(new A.jk(q,new A.iQ(r),s),b,this.c)
return n}catch(o){if(A.D(o) instanceof A.jl)throw A.b(A.y("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d3.prototype={
a4(){return"KindViolation."+this.b}}
A.B5.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:188}
A.l9.prototype={
a4(){return"ConflictAlgorithm."+this.b}}
A.ir.prototype={
q(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aS(o,o.r,o.e,A.n(o).i("aS<2>"));n.k();){m=n.d
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
ck(a){var s,r=this.a,q=r.H(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(s!=null)s.q()}q=this.b.wd(a)
r.j(0,a,q)
return q},
kI(a,b){var s=this.ck(a).kJ(new A.bP(b)),r=A.n(s).i("X<K.E,I<l,j?>>")
r=A.O(new A.X(s,new A.rv(),r),r.i("Z.E"))
return r},
o8(a){return this.kI(a,B.n)},
f7(a,b){this.ck(a).e8(new A.bP(b))},
jY(a){return this.f7(a,B.n)},
aE(a,b){return this.uS(a,b)},
O(a){return this.aE(a,B.n)},
uS(a,b){var s=0,r=A.h(t.H),q=this
var $async$aE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.f7(a,b)
return A.e(null,r)}})
return A.f($async$aE,r)},
ai(a,b){return this.wr(a,b)},
b0(a){return this.ai(a,B.n)},
wr(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ai=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kI(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ai,r)},
bR(a,b,c,d,e,f,g){return this.wo(a,b,c,d,e,f,g)},
aJ(a,b,c,d){return this.bR(a,null,b,null,null,c,d)},
em(a,b,c,d,e){return this.bR(a,b,c,null,null,d,e)},
n7(a,b,c,d){return this.bR(a,b,null,null,null,c,d)},
ci(a,b,c){var s=null
return this.bR(a,s,s,s,s,b,c)},
wm(a,b,c,d,e){return this.bR(a,null,b,null,c,d,e)},
wl(a,b,c,d,e){return this.bR(a,b,c,d,e,null,null)},
wn(a,b,c,d,e,f){return this.bR(a,b,c,null,d,e,f)},
wk(a,b,c,d){return this.bR(a,null,null,null,b,c,d)},
wo(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bR=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.B(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.n:g
q=p.ai(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bR,r)},
cc(a,b,c,d){return this.vA(0,b,c,d)},
aC(a,b,c){return this.cc(0,b,c,null)},
vA(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cc=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.R("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dK(new A.T(c,n),new A.ru(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.ae(c.a,"?",!1,m),", ")
j=A.DR(d)
o=o.i("ak<2>")
o=A.O(new A.ak(c,o),o.i("o.E"))
p.f7("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.aq(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cc,r)},
L(a,b,c,d){return this.wV(a,b,c,d)},
wV(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dK(new A.T(b,n),new A.rw(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.DR(null)+' "'+a+'" SET '+m
o=A.O(new A.ak(b,o.i("ak<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.D(o,d)}p.f7(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
Z(a,b,c){return this.u6(a,b,c)},
u6(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$Z=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.D(n,c)}p.f7(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Z,r)},
tW(a,b,c){this.b.tX(B.bt,!0,!1,new A.rt(b),c)},
a2(a,b){return this.wR(a,b,b)},
wR(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jY("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.jY("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jY("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$ir2:1}
A.rv.prototype={
$1(a){return A.bb(a,t.N,t.X)},
$S:193}
A.ru.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.rw.prototype={
$1(a){return'"'+a+'" = ?'},
$S:6}
A.rt.prototype={
$1(a){var s=a.gm(0)===0?null:a.gG(a)
return this.a.$1(s)},
$S:196}
A.qj.prototype={}
A.iq.prototype={
jN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.k([],t.s),c=A.aO(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=$.Dk()
if(!k.b.test(l))A.t(A.aQ('Field "'+l+u.Z))
if(B.be.E(0,l))throw A.b(A.aQ('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.t(0,l))throw A.b(A.aQ('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aQ(e+l+'" cannot be unique.'))
if(B.b.bN(o,new A.rs(m)))throw A.b(A.aQ(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.E(k,l)}else k=!1
if(k)throw A.b(A.aQ(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.q)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ao(l,l.gm(0),k.i("ao<K.E>")),k=k.i("K.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.E(0,j)&&!B.be.E(0,j))throw A.b(A.aQ('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.ax.Y(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.I0(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.rQ(u.r))
if(q.b&&!A.Ex(r.a,3,34))throw A.b(A.rQ("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.ao(r,r.gm(0),p.i("ao<K.E>")),p=p.i("K.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.E(0,o))throw A.b(A.aQ('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.ga7(),r=r.gu(r);r.k();){q=r.gn()
A.DZ(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aQ('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aQ('Ref field "'+m.a+'" must declare its target store.'))}return new A.qj(f.pa(a),f.p9(a),f.p8(a),d)},
pa(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.k(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.gkN()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.rr(),A.a_(k).i("X<1,l>")).B(0,", ")
m+=" CHECK ("+('"'+A.z(n,'"',i)+'"')+" IN ("+j+"))"}if(l===B.J&&o.w){n=o.r
n.toString
n=A.z(n,'"',i)
m+=" REFERENCES "+('"'+n+'"')+"("+('"'+A.z("id",'"',i)+'"')+")"}h.push(m)}h.push("  archived INTEGER NOT NULL DEFAULT 0")
h.push("  hidden INTEGER NOT NULL DEFAULT 0")
h.push("  extra TEXT")
s=A.z(a.a,'"',i)
r=B.b.B(h,",\n")
q=q?"\n) STRICT;":"\n);"
q="CREATE TABLE "+('"'+s+'"')+" (\n"+r+q
return q.charCodeAt(0)==0?q:q},
p9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.k([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("X<K.E,l>")
j=A.O(new A.X(l,A.Bc(),k),k.i("Z.E"))
if(!l.E(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.b2?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.B(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}else{l=l.B(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.q)(r),++n){h=r[n]
if(h.b!==B.J)continue
if(B.b.bN(s,new A.rq(h)))continue
k=h.a
g=A.z(p+k,e,d)
f=A.z(q,e,d)
k=A.z(k,e,d)
b.push("CREATE INDEX "+('"'+g+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.z("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.q)(r),++n){h=r[n]
if(h.d){s=h.a
p=A.z(o+s,e,d)
l=A.z(q,e,d)
g=A.z(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+g+'"')+") WHERE "+('"'+A.z(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
p8(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.q
s=A.k([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("X<K.E,l>")
n=A.O(new A.X(p,A.Bc(),o),o.i("Z.E"))
m=new A.rp(r,a0.c)
l=new A.X(p,new A.rm(m),o).B(0,f)
k=new A.X(p,new A.rn(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.z(r+"_ai",e,d)
o=A.z(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.z(r+"_ad",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.z(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.ro(),A.a_(n).i("X<1,l>")).B(0," OR ")
p=A.z(r+"_au",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
h=A.z(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.rs.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:50}
A.rr.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:6}
A.rq.prototype={
$1(a){var s=a.a
return s.E(s,this.a.a)},
$S:50}
A.rp.prototype={
$2(a,b){return A.Gm(this.a,this.b,a,b)},
$S:212}
A.rm.prototype={
$1(a){return this.a.$2("new",a)},
$S:6}
A.rn.prototype={
$1(a){return this.a.$2("old",a)},
$S:6}
A.ro.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:6}
A.dJ.prototype={
l(a){return A.dt(this).l(0)+": "+this.a},
$iF:1}
A.eQ.prototype={}
A.eP.prototype={}
A.eB.prototype={}
A.fm.prototype={}
A.fU.prototype={}
A.fE.prototype={}
A.cO.prototype={}
A.h_.prototype={}
A.h3.prototype={}
A.eJ.prototype={}
A.hl.prototype={}
A.fG.prototype={}
A.ha.prototype={}
A.fN.prototype={}
A.fq.prototype={}
A.em.prototype={}
A.fZ.prototype={}
A.iv.prototype={}
A.bj.prototype={}
A.rA.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"ref_id")
j.toString
A.G(j)
s=k.h(0,"store")
s.toString
A.G(s)
r=k.h(0,"record_id")
r.toString
A.G(r)
q=k.h(0,"field")
q.toString
A.G(q)
p=k.h(0,"hash")
p.toString
A.G(p)
o=A.a6(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.G(n)
m=A.bf(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.bf(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bj(j,s,r,q,p,o,n,m,l,A.a6(k.h(0,"last_error")))},
$S:213}
A.uF.prototype={
gm_(){return this.b},
gi6(){var s=0,r=A.h(t.y),q,p=this
var $async$gi6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dN()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gi6,r)},
lt(a,b){return b},
eg(a,b,c){return this.vH(a,b,c)},
vH(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$eg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.v()
n=J
s=3
return A.a(o.gbn().b.ci("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.lt(c,a)]),$async$eg)
case 3:o=n.c0(e,A.Mz(),t.A)
o=A.O(o,o.$ti.i("Z.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
d6(a,b,c,d,e,f,g,h){return this.tH(a,b,c,d,e,f,g,h)},
tH(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$d6=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.gm_()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.dN(),$async$d6)
case 5:j=!j
case 4:if(j)throw A.b(A.y("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.lt(h,e)
s=6
return A.a(l.dj(b,c,d),$async$d6)
case 6:n=j
s=7
return A.a(l.bh(n),$async$d6)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a2(new A.uG(p,h,g,o,n,m,A.i1(),f),t.A),$async$d6)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d6,r)},
fn(a,b,c,d,e){return this.w1(a,b,c,d,e)},
w1(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fn=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gm_()
s=3
return A.a(p.eg(a,c,e),$async$fn)
case 3:k=g
j=J.M(k)
if(j.gF(k))throw A.b(A.y("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.fb(k,new A.uI(d),new A.uJ(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.y("File is remote_only; download it before opening."))
j=p.a
n=j.a
n===$&&A.v()
n=n.gbn()
j=j.CW.$0()
m=o.e
s=4
return A.a(n.b.aE("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,m]),$async$fn)
case 4:q=l.cJ(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
fz(a,b,c,d,e,f){return this.wD(0,b,c,d,e,f)},
wD(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fz=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eg(b,d,f),$async$fz)
case 3:n=h
m=J.M(n)
if(m.gF(n)){s=1
break}o=e!=null?m.fb(n,new A.uK(e),new A.uL(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.uM(p,o,f,d,b),t.P),$async$fz)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
bf(a,b){return this.o_(a,b)},
o_(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bf=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e5(a8),$async$bf)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.CW.$0()-B.c.M(a7.a,1000)
s=6
return A.a(e.a2(new A.uH(a2,n),t.P),$async$bf)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fg(),$async$bf)
case 13:l=b0
s=J.ec(l)?14:15
break
case 14:k=0
j=A.aO(t.N)
d=t.s
case 16:c=e.a
c===$&&A.v()
s=18
return A.a(c.gbn().b.wl("lp_blobs",A.k(["hash"],d),250,k,"hash ASC"),$async$bf)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.V(h,"hash")
b.toString
J.aL(j,A.G(b))}if(J.as(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.BT(j,g)){s=19
break}p=22
b=new A.w($.C,c)
b.aD(null)
s=25
return A.a(b,$async$bf)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.d8(g),$async$bf)
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
return A.a(b.gbn().b.wn("lp_blobs",A.k(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bf)
case 29:a0=b0
b=J.M(a0)
if(b.gF(a0)){s=28
break}b=b.gu(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.G(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.d8(a1),$async$bf)
case 34:case 33:s=35
return A.a(d.Z("lp_blobs","hash = ?",[a1]),$async$bf)
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
return A.f($async$bf,r)},
cC(a){return this.uN(a)},
uN(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.v()
d=A
s=3
return A.a(e.gbn().b.b0("SELECT SUM(size) as total FROM lp_blobs"),$async$cC)
case 3:o=d.fc(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.r,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbn().b.b0("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cC)
case 6:k=c
j=J.M(k)
if(j.gF(k)){s=5
break}j=j.gu(k)
case 7:if(!j.k()){s=8
break}i=j.gn()
if(o<=a){s=8
break}h=i.h(0,"hash")
h.toString
A.G(h)
i=i.h(0,"size")
i.toString
A.aq(i)
s=9
return A.a(g.d8(h),$async$cC)
case 9:s=10
return A.a(e.gbn().b.L("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$cC)
case 10:s=11
return A.a(f.Z("lp_blobs","hash = ?",[h]),$async$cC)
case 11:o-=i;++l
s=7
break
case 8:s=4
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cC,r)}}
A.uG.prototype={
$1(a){return this.nC(a)},
nC(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.CW.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.em("lp_file_refs",A.k(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.M(c)
if(b.gX(c)){q=A.DV(b.gG(c))
s=1
break}s=4
return A.a(A.i7(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.em("lp_outbox",A.k(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.M(o)
n=h.gX(o)&&J.V(h.gG(o),"base_updated")==null?A.a6(J.V(h.gG(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.cc(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.R),$async$$1)
case 6:k=A.i1()
s=7
return A.a(j.aC(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a6(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.a_(new A.a1(g,A.at([f],m)))
q=new A.bj(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:217}
A.uI.prototype={
$1(a){return a.a===this.a},
$S:49}
A.uJ.prototype={
$0(){return A.t(A.y("FileRef "+this.a+" not found"))},
$S:28}
A.uK.prototype={
$1(a){return a.a===this.a},
$S:49}
A.uL.prototype={
$0(){return A.t(A.y("FileRef "+this.a+" not found"))},
$S:28}
A.uM.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.Z("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aE(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aC(0,"lp_op_queue",A.m(["op_id",A.i1(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a6(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.x),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a_(new A.a1(q.c,A.at([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uH.prototype={
$1(a){return this.nD(a)},
nD(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dy,p=new A.bE(p,p.r,p.e,A.n(p).i("bE<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ai('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.z(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.E(c)
case 5:if(!l.k()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.G(j)
k=k.h(0,"hash")
k.toString
A.G(k)
s=7
return A.a(i.Z("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aE(u.y,[k]),$async$$1)
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
A.cH.prototype={}
A.rI.prototype={
gnh(){var s=this.r
return new A.ak(s,A.n(s).i("ak<2>")).v6(0,0,new A.rL())},
mL(){var s,r=this.r,q=A.n(r).i("ak<2>"),p=q.i("cl<o.E,l>"),o=A.O(new A.cl(new A.am(new A.ak(r,q),new A.rJ(this.f.$0()),q.i("am<o.E>")),new A.rK(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.q)(o),++s)r.H(0,o[s])
return p}}
A.rL.prototype={
$2(a,b){return a+b.f},
$S:73}
A.rJ.prototype={
$1(a){return!a.z.kd(this.a)},
$S:74}
A.rK.prototype={
$1(a){return a.a},
$S:75}
A.lH.prototype={}
A.pJ.prototype={}
A.fk.prototype={
l(a){return"BlobMissingError: "+this.a},
$iF:1}
A.kZ.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iF:1}
A.ne.prototype={}
A.BB.prototype={
$1(a){return B.b.D(this.a,a)},
$S:76}
A.ix.prototype={}
A.rB.prototype={
br(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$br=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.c8
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
return A.a(a3.f4(25),$async$br)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.b8?10:12
break
case 10:s=13
return A.a(n.cr(i,b2),$async$br)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.mZ(i.b),$async$br)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b9?17:18
break
case 17:s=19
return A.a(n.eN(i),$async$br)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.mZ(i.b),$async$br)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.D(b3)
j=!0
e=i.w+1
d=a5.mD(e)
a8=i.b
a9=J.a0(f)
b0=a6.$0()
s=23
return A.a(a3.vS(a8,a9,e,b0+B.c.M(d.a,1000)),$async$br)
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
if(b1==null)A.t(A.y('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.ci("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$br)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.V(b,"ref_id")
a6.toString
a=A.G(a6)
a6=J.V(b,"record_id")
a6.toString
a0=A.G(a6)
a1=A.a6(J.V(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.d9(a0,a,a1,c),$async$br)
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
case 25:q=new A.ix(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$br,r)},
cr(a,b){return this.r6(a,b)},
r6(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cr=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aw(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.G(a1)
l=a0.h(0,"hash")
l.toString
A.G(l)
k=A.a6(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bo(l),$async$cr)
case 3:if(!a6)throw A.b(A.y("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bh(l),$async$cr)
case 4:j=a6
if(j==null)throw A.b(A.y("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.z
i===$&&A.v()
s=9
return A.a(i.bW(a3.d),$async$cr)
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
return A.a(n.b.x_(a3.d,A.m([k,new A.he(k,j,new A.rD(a4,l))],t.N,t.h3)),$async$cr)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga1(l):k
case 11:s=14
return A.a(n.a.a2(new A.rE(a,a1,a3),t.P),$async$cr)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cr,r)},
eN(a){return this.r5(a)},
r5(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aw(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.G(l)
o=A.a6(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.G(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.wY(a.d,A.k([o],t.s)),$async$eN)
case 5:case 4:s=6
return A.a(p.a.a2(new A.rC(l,n,a),t.P),$async$eN)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eN,r)},
d9(a,b,c,d){return this.uF(a,b,c,d)},
uF(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$d9=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.z
l===$&&A.v()
k=m
s=4
return A.a(l.f3(c,a,null),$async$d9)
case 4:s=3
return A.a(k.ip(f),$async$d9)
case 3:o=f
s=5
return A.a(m.bh(o),$async$d9)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.rF(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$d9)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d9,r)},
dg(a,b,c,d){return this.vZ(a,b,c,d)},
vZ(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dg=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.ci("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dg)
case 2:e=a5
d=A.uB(a2,A.a_(a2).c)
c=J.aB(e)
b=t.v
a=A.d4(new A.bH(c.cf(e,new A.rG(),t.x),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.dy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.E(0,k)?6:7
break
case 6:j=A.i1()
i=n.h(0,a3)
if(i==null)A.t(A.y(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.cc(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.c5),$async$dg)
case 8:case 7:case 4:a2.length===b||(0,A.q)(a2),++l
s=3
break
case 5:c=c.gu(e)
case 9:if(!c.k()){s=10
break}b=c.gn()
g=A.a6(b.h(0,"remote_name"))
if(g==null){s=9
break}if(d.E(0,g)){s=9
break}p=b.h(0,"state")
p.toString
A.G(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.Z("lp_file_refs","ref_id = ?",[p]),$async$dg)
case 11:f=A.a6(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.S(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aE(u.y,[f]),$async$dg)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dg,r)}}
A.rD.prototype={
$0(){return this.a.cJ(this.b)},
$S:77}
A.rE.prototype={
$1(a){return this.nu(a)},
nu(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a_(new A.a1(p.c,A.at([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rC.prototype={
$1(a){return this.nt(a)},
nt(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.Z("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aE(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a_(new A.a1(p.c,A.at([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rF.prototype={
$1(a){return this.nv(a)},
nv(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.i7(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a_(new A.a1(q.f,A.at([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rG.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:78}
A.BH.prototype={
$1(a){if(typeof a!="string")return a
return this.a.ek(a)},
$S:29}
A.ut.prototype={
gbn(){var s=this.c
return s===$?this.c=new A.iv(this.b):s}}
A.f4.prototype={$iF:1}
A.zO.prototype={
c8(){var s=0,r=A.h(t.N),q,p=this,o
var $async$c8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c8,r)}}
A.oU.prototype={}
A.hK.prototype={}
A.tz.prototype={
oD(a){var s=this,r=s.a.a.a$.b
r=new A.b0(r,A.n(r).i("b0<1>")).aN(new A.tY(s))
s.c!==$&&A.cf()
s.c=r},
v8(a){var s,r,q=this
A:{if(a instanceof A.mx){s=q.he(a.a,a.b)
break A}if(a instanceof A.l1){s=A.b9(q.fX(),t.V)
break A}if(a instanceof A.lU){s=A.b9(new A.lV(!0,q.a.d.a),t.V)
break A}if(a instanceof A.l4){s=q.q().V(new A.tZ(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lS){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.u_(s,q),new A.u0())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mV){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.ub(s,q),new A.um())
break A}if(a instanceof A.mn){s=q.qA(a.a,a.b,a.c)
break A}if(a instanceof A.mN){s=q.qU(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lg){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.un(s,q),A.Gb())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lf){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.uo(s,q),A.Gb())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.ls){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.up(s,q),A.Mj())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lX){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.uq(s,q),A.Ml())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kH){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bw(r,new A.ur(s,q),A.Mi())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lz){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.us(s,q),A.Mk())
break A}if(a instanceof A.n0){s=q.rH(a.a,a.b,a.c)
break A}if(a instanceof A.ny){s=q.oY(a.a,a.b)
break A}if(a instanceof A.nz){s=q.eW(a.a,!0)
break A}if(a instanceof A.nB){s=q.eW(a.a,!1)
break A}if(a instanceof A.nD){s=q.hm(a.a,a.b)
break A}if(a instanceof A.nC){s=q.hl(a.a,a.b)
break A}if(a instanceof A.nA){s=q.hj(a.a,a.b)
break A}if(a instanceof A.nS){s=q.ht(a.a,a.b)
break A}if(a instanceof A.nT){s=q.tf(a.a,a.b)
break A}if(a instanceof A.nR){s=q.jF(a.a)
break A}if(a instanceof A.kJ){s=q.a.a.e3(a.a).V(new A.u1(),t.V)
break A}if(a instanceof A.nQ){s=q.a.a.fI().V(new A.u2(),t.V)
break A}if(a instanceof A.nO){s=q.a.a.ix().V(new A.u3(),t.V)
break A}if(a instanceof A.mJ){s=q.a.a.fs().V(new A.u4(),t.V)
break A}if(a instanceof A.l7){s=q.a.a.e7(a.a,A.d0(0,a.b,0)).V(new A.u5(),t.V)
break A}if(a instanceof A.mW){s=q.a.a.dn(A.d0(0,a.a,0)).V(new A.u6(),t.V)
break A}if(a instanceof A.lc){s=q.a.a.db
s===$&&A.v()
s=s.fh(a.a).V(new A.u7(q),t.V)
break A}if(a instanceof A.lb){s=q.a.a.db
s===$&&A.v()
s=s.du(a.a,a.b).V(new A.u8(q),t.V)
break A}if(a instanceof A.mT){s=q.a.a.db
s===$&&A.v()
s=s.eq(a.b,a.c,a.a).V(new A.u9(),t.V)
break A}if(a instanceof A.kE){s=q.a.a.db
s===$&&A.v()
s=s.eY(a.a,a.b).V(new A.ua(),t.V)
break A}if(a instanceof A.kF){s=q.a.a.db
s===$&&A.v()
s=s.e1(a.a,a.b).V(new A.uc(),t.V)
break A}if(a instanceof A.le){s=q.tg(a.a)
break A}if(a instanceof A.lD){s=q.j4(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.lE){s=q.j5(a.a,a.b)
break A}if(a instanceof A.lI){s=q.h7(a.a)
break A}if(a instanceof A.lC){s=q.j3(a.a)
break A}if(a instanceof A.lR){s=q.a.a.dx
s===$&&A.v()
s=s.eg(a.c,a.b,a.a).V(new A.ud(q),t.V)
break A}if(a instanceof A.lL){s=q.h8(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.lG){s=q.j6(a.a,a.b)
break A}if(a instanceof A.lF){s=q.h6(a.a)
break A}if(a instanceof A.lP){s=q.a.a.dx
s===$&&A.v()
s=s.fz(0,a.c,a.d,a.b,a.e,a.a).V(new A.ue(),t.V)
break A}if(a instanceof A.lJ){s=q.a.a.dx
s===$&&A.v()
s=s.bf(A.d0(0,a.a,0),A.d0(0,a.b,0)).V(new A.uf(),t.V)
break A}if(a instanceof A.lw){s=q.a.a.dx
s===$&&A.v()
s=s.cC(a.a).V(new A.ug(),t.V)
break A}if(a instanceof A.nc){s=q.a.a.dx
s===$&&A.v()
s=s.gi6().V(new A.uh(),t.V)
break A}if(a instanceof A.no){s=q.e_(a.a,a.b,a.c)
break A}if(a instanceof A.nt){s=q.cz().V(new A.ui(),t.V)
break A}if(a instanceof A.nj){s=q.ho()
break A}if(a instanceof A.nk){s=q.dZ(new A.uj(q))
break A}if(a instanceof A.nm){s=q.dZ(new A.uk(q))
break A}if(a instanceof A.nu){s=q.hp(a.a)
break A}s={}
s.a=null
if(a instanceof A.nn){s.a=a.a
s=q.dZ(new A.ul(s,q))
break A}if(a instanceof A.nr){s=q.as
s=A.b9(new A.ns(s==null?B.dA:s),t.V)
break A}throw A.b(A.eI(u.P))}return s},
he(a,b){return this.qS(a,b)},
qS(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$he=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.q0(a1[k],l)
i=j.a
s=!m.J(i)?6:8
break
case 6:s=9
return A.a(n.aQ(j),$async$he)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.t(A.y('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.Ct(j)
e=new A.a2("")
A.cg(e,g.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c1()
b=A.cX(c)
b.t(0,d)
b.q()
b=A.ar(c.a.a)
e=new A.a2("")
A.cg(e,f.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c1()
a=A.cX(c)
a.t(0,d)
a.q()
if(b!==A.ar(c.a.a))throw A.b(A.y('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.t(A.y('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a2("")
A.cg(e,h.c.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c1()
b=A.cX(c)
b.t(0,d)
b.q()
b=a0!==A.ar(c.a.a)
d=b}else d=!1
if(d)throw A.b(A.y('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.q)(a1),++k
s=3
break
case 5:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)},
fX(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$fX=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bZ(B.b.gG(m.b.o8("PRAGMA journal_mode")).gaX())
m=m.a.dx
m===$&&A.v()
s=3
return A.a(m.gi6(),$async$fX)
case 3:o=b
m=l.e===B.aA
n=m?"opfs":"file"
q=new A.ih(l.a,l.b,l.c,l.d,m,n,o,J.a0(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fX,r)},
dE(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.au(a)
if(b!=null){s=this.d2(b)
r=A.E3(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.t(A.y('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.d2(b)
return new A.fo(n,m,new A.iv(q),p.r)}return new A.fo(n,m,o.gbn(),null)},
pg(a){return this.dE(a,null)},
qA(a,b,c){return this.bw(c,new A.tK(this,a,c,b),new A.tL())},
bs(a,b){var s
A.ar(B.l.v(B.e.v(A.ah(this.a.a.au(a).c.p()))).a)
if(a.length===0)A.t(A.az(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.t(A.az(s,"spec.limit","must not be negative"))
return new A.wt(a,b)},
b9(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.dE(a.a,a0),c=t.fC,b=new A.mL(d.a,d.b.a,d.c.b,A.k([],c),A.k([],c),A.k([],t.k),A.k([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.q)(d),++s)b=this.oU(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.q)(d),++s){o=d[s]
n=A.k([],p)
for(m=B.b.gu(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bd)throw A.b(A.al('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.w7(n)}j=e.c
if(j!=null){d=A.BA(j)
b.jG(d)
A.CX(d)
i=A.AO(d,!0)
h=b.h_()
h.d.push(new A.b_(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.q)(d),++s,b=h){g=d[s]
q=g.a
b.cU(q)
h=b.h_()
h.r.push(new A.cn(q,g.b))}d=e.r
if(d!=null)b=b.lg(A.bF(d,!0,r))
if(e.w)b=b.px(!0)
if(e.x)b=b.py(!0)
if(e.f)b=b.pv(!0)
else{d=e.e
if(d!=null){if(d<0)A.t(A.al("Limit must be non-negative, got "+A.r(d)+".",f))
b=b.pz(d)}}return b},
oU(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.nm(0,b.a,!0)
return a.x7(0,b.a,s)
case 1:return a.xe(0,b.a,b.c)
case 2:return a.x8(0,b.a,b.c)
case 3:return a.x9(0,b.a,b.c)
case 4:return a.xc(0,b.a,b.c)
case 5:return a.xd(0,b.a,b.c)
case 6:return a.xa(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.n
if(r.length!==2)throw A.b(A.R("between requires exactly two values.",null))
return a.x4(0,b.a,new A.a4(r[0],r[1]))
case 8:return a.xf(0,b.a,A.a6(b.c))
case 9:return a.x6(0,b.a,A.a6(b.c))
case 10:return a.x5(0,b.a,A.a6(b.c))
case 11:return a.nm(0,b.a,!0)
case 12:return a.xb(0,b.a,!0)}},
qU(a,b,c){return this.bw(c,new A.tM(this,this.bs(a,b),c),new A.tN())},
rH(a,b,c){return this.bw(c,new A.tQ(this,a,c,b),new A.tR())},
oY(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.y("A transaction session is already active on this database."))
s="tx"+ ++l.at
r=$.C
q=t.D
p=t.h
o=new A.w(r,q)
n=new A.oU(s,new A.aI(new A.w(r,q),p),new A.aI(o,p),A.k([],t.mc),new A.aM(Date.now(),0,!1))
k.j(0,s,n)
l.pP()
m=l.a.a
k=new A.tB(n)
if(a){if(A.nE(m)!=null)A.t(A.y(u.L))
r=m.b
r===$&&A.v()
k=r.ws(k,t.H)}else{r=b===B.bn?B.aX:B.p
r=m.aW(k,r,t.H)
k=r}n.w!==$&&A.cf()
n.w=k
return o.V(new A.tA(s),t.V)},
eW(a,b){return this.rQ(a,b)},
rQ(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eW=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d2(a)
for(l=h.e,k=A.a_(l).i("bv<1>"),l=new A.bv(l,k),l=new A.ao(l,l.gm(0),k.i("ao<Z.E>")),k=k.i("Z.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.t(A.y("Future already completed"))
j.aD(null)}h.f=!b
h.c.an()
p=4
l=h.w
l===$&&A.v()
s=7
return A.a(l,$async$eW)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.D(g) instanceof A.f4){if(b)throw g}else throw g
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.d.H(0,a)
s=n.pop()
break
case 6:q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eW,r)},
hm(a,b){return this.rE(a,b)},
rE(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d2(a)
n=$.C
m=t.D
l=t.h
k=new A.w(n,m)
j=new A.hK(b,new A.aI(new A.w(n,m),l),new A.aI(k,l))
l=o.r.a2(new A.tP(j),t.H)
j.f!==$&&A.cf()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hm)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hm,r)},
hl(a,b){return this.rC(a,b)},
rC(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hl=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d2(a).e
f=B.b.mQ(g,new A.tO(b))
if(f<0)throw A.b(A.y('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a_(g).i("bv<1>")
l=A.O(new A.bv(g,l),l.i("Z.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bP(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.t(A.y("Future already completed"))
i.aD(null)
p=7
i=m.f
i===$&&A.v()
s=10
return A.a(i,$async$hl)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.D(e) instanceof A.f4))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:B.b.kq(g,f,g.length)
q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hl,r)},
hj(a,b){return this.rs(a,b)},
rs(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hj=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d2(a).e
j=A.E3(k)
if(j==null||j.a!==b)throw A.b(A.y('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.an()
p=4
m=j.f
m===$&&A.v()
s=7
return A.a(m,$async$hj)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.D(i) instanceof A.f4)throw i
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
return A.f($async$hj,r)},
ht(a,b){return this.th(a,b)},
th(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$ht=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.au(a)
s=3
return A.a(p.pg(a).bV(b),$async$ht)
case 3:o="w"+ ++p.at
n=A.CM()
n.sk_(new A.mw(l,b,m,B.aY).iK().vK(new A.tV(p,o),new A.tW(p,n,o)))
p.f.j(0,o,n.bu())
q=A.b9(new A.hp(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
tf(a,b){var s=this,r="w"+ ++s.at,q=s.b9(s.bs(a,b),null)
s.f.j(0,r,new A.mO(q,q.gdX(),B.aY).iK().aN(new A.tX(s,r)))
return A.b9(new A.hp(r),t.V)},
jF(a){return this.t7(a)},
t7(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.H(0,a)
if(o!=null)o.C()
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jF,r)},
pQ(){if(this.w!=null)return
this.w=A.CC(A.d0(9e8,0,0),new A.tF(this))},
j4(a,b,c,d,e,f,g){return this.pZ(a,b,c,d,e,f,g)},
pZ(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$j4=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.pQ()
o=p.r
n="u"+ ++p.at
o.mL()
m=o.r
if(m.a>=16)A.t(A.al("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.t(A.al("Invalid file size: "+c,null))
if(o.gnh()+c>536870912)A.t(A.al("Aggregate upload quota exceeded: "+o.gnh()+" + "+c+" > 536870912",null))
o=o.f.$0().iS(18e8)
m.j(0,n,new A.cH(n,a,b,d,e,c,f,g,A.k([],t.bs),o))
q=new A.lQ("u"+p.at,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j4,r)},
j5(a,b){return this.q_(a,b)},
q_(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$j5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.t(A.al("Unknown upload session: "+a,null))
l=l.f
if(!j.z.kd(l.$0())){k.H(0,a)
A.t(A.al("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.H(0,a)
A.t(A.al("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.H(0,a)
A.t(A.al("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().iS(18e8)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j5,r)},
h7(a){return this.q2(a)},
q2(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$h7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.r
g=h.r.H(0,a)
if(g==null)A.t(A.al("Unknown upload session: "+a,null))
if(!g.z.kd(h.f.$0()))A.t(A.al("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.t(A.al("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.dx
h===$&&A.v()
n=g.b
m=g.c
l=new A.tG(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.d6(g.w,l,i,o,k,j,m,n),$async$h7)
case 3:q=new f.lO(p.lu(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)},
j3(a){return this.pY(a)},
pY(a){var s=0,r=A.h(t.V),q,p=this
var $async$j3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.H(0,a)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j3,r)},
h8(a,b,c,d,e){return this.q4(a,b,c,d,e)},
q4(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$h8=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.dx
k===$&&A.v()
s=3
return A.a(k.fn(c,d,b,e,a),$async$h8)
case 3:o=g
n="f"+ ++p.at
m=new A.lH()
l=A.CM()
l.sk_(o.bz(new A.tH(p,m,n,l),new A.tI(p,n),new A.tJ(p,n)))
k=l.bu()
m.c!==$&&A.cf()
m.c=k
p.x.j(0,n,m)
q=new A.lM(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
j6(a,b){return this.q1(a,b)},
q1(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$j6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.y('Unknown file stream "'+a+'".'))
o=n.b-=b
if((o<0?n.b=0:o)<1048576){o=n.c
o===$&&A.v()
o.b1()}q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j6,r)},
h6(a){return this.q0(a)},
q0(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$h6=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.H(0,a)
s=n!=null?3:4
break
case 3:o=n.c
o===$&&A.v()
s=5
return A.a(o.C(),$async$h6)
case 5:case 4:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h6,r)},
lu(a){return new A.lN(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
e_(a,b,c){return this.t_(a,b,c)},
t_(a,b,a0){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$e_=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.al("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cz(),$async$e_)
case 3:if(b==null||b.length===0)throw A.b(A.al("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.zO(a0)
m=A.nL(a)
l=o.dy
k=A.n(l).i("T<1>")
l=A.O(new A.T(l,k),k.i("o.E"))
s=4
return A.a(o.as.hJ(m,b,l,n),$async$e_)
case 4:j=a2
m=A.dR(null,null,t.n6)
l=A.dR(null,null,t.ic)
k=t.H
i=A.b9(null,k)
h=new A.pv(A.b9(null,k))
g=A.b9(B.O,t.fD)
f=A.k([],t.s)
k=A.b9(null,k)
e=new A.xc(A.Nd(),o.CW)
d=new A.ni(o,j,e,new A.tS(p),B.N,m,l,i,h,A.aO(t.N),g,f,k)
c=j.r
m=d.e=new A.xn(o,B.a.A(A.ar(B.l.v(B.e.v(j.b.l(0)+"|"+c)).a),0,12))
k=new A.rB(o,j,e,o.ax)
d.x=k
k=new A.w4(o,j,e,m,k,h)
d.f=k
d.r=new A.xa(o,j,e,m,k)
d.w=new A.wd(o,j,e,d.gqE(),j.as)
p.z=n
p.y=d
p.Q=new A.b0(l,A.n(l).i("b0<1>")).aN(new A.tT(p))
s=5
return A.a(d.az(),$async$e_)
case 5:q=new A.np(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e_,r)},
eT(){var s=this.y
return s==null?A.t(A.y("Sync is not started.")):s},
ho(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$ho=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.eT()
o.p1.push("cycle")
n=A
s=3
return A.a(o.d3(),$async$ho)
case 3:q=new n.nl(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ho,r)},
dZ(a){var s=0,r=A.h(t.V),q
var $async$dZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$dZ)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
hp(a){return this.t0(a)},
t0(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hp=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.z
n=p.eT()
if(o==null)throw A.b(A.y("Sync is not started."))
o.a=a
s=3
return A.a(n.eh(),$async$hp)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
cz(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.y
q.y=null
p=q.Q
p=p==null?null:p.C()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bw(p,o),$async$cz)
case 2:q.Q=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aG(),$async$cz)
case 5:p=q.a.a.as.hP(n)
s=6
return A.a(p,$async$cz)
case 6:case 4:q.as=q.z=null
return A.e(null,r)}})
return A.f($async$cz,r)},
iY(a){return new A.la(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
tg(a){var s=this,r="w"+ ++s.at,q=s.a.a.db
q===$&&A.v()
s.f.j(0,r,q.x3(a).aN(new A.tU(s,r)))
return A.b9(new A.hp(r),t.V)},
d2(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.y('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.y('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aM(Date.now(),0,!1)
return s},
pP(){var s,r,q=this
if(q.e!=null)return
s=q.a.ax
r=s.a
if(r<=0)return
q.e=A.CC(A.d0(B.c.M(r,4),0,0),new A.tE(q,s))},
hu(a,b,c){return this.tk(a,b,c)},
bw(a,b,c){return this.hu(a,b,c,t.z)},
tk(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hu=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d2(a)
o=c
s=3
return A.a(b.$0(),$async$hu)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cz(),$async$q)
case 2:p=q.f,o=new A.aS(p,p.r,p.e,A.n(p).i("aS<2>"))
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
for(p=q.x,o=new A.aS(p,p.r,p.e,A.n(p).i("aS<2>"));o.k();){n=o.d.c
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
A.tY.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cK(r,t.N,t.X)
s=a.f
s=s==null?null:A.cK(s,t.N,t.X)
this.a.b.t(0,new A.l6(a.a,a.b,a.c,a.d,r,s,A.d4(a.r,t.N)))},
$S:79}
A.tZ.prototype={
$1(a){return B.k},
$S:7}
A.u_.prototype={
$0(){var s=this.a
return this.b.dE(s.c,s.a).bV(s.b)},
$S:81}
A.u0.prototype={
$1(a){return new A.h1(a)},
$S:72}
A.ub.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.k([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dE(o.c,o.a).bV(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.q)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:83}
A.um.prototype={
$1(a){return new A.h2(a)},
$S:84}
A.un.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.c,r.b),r.a).hG()},
$S:48}
A.uo.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.d,r.b),r.a).hI(r.c)},
$S:48}
A.up.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.d,r.b),r.a).hQ(r.c)},
$S:86}
A.uq.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.c,r.b),r.a).i5()},
$S:46}
A.ur.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.b9(s.bs(q.e,q.b),q.a).cT("SUM",q.c)
break
case 1:s=r.b
q=s.b9(s.bs(q.e,q.b),q.a).cT("AVG",q.c)
break
case 2:s=r.b
q=s.b9(s.bs(q.e,q.b),q.a).cT("MIN",q.c)
break
case 3:s=r.b
q=s.b9(s.bs(q.e,q.b),q.a).cT("MAX",q.c)
break
default:q=null}return q},
$S:88}
A.us.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.c,r.b),r.a).hR()},
$S:89}
A.u1.prototype={
$1(a){return B.k},
$S:7}
A.u2.prototype={
$1(a){return B.k},
$S:7}
A.u3.prototype={
$1(a){return B.k},
$S:7}
A.u4.prototype={
$1(a){return new A.fV(a)},
$S:90}
A.u5.prototype={
$1(a){return new A.fp(a)},
$S:91}
A.u6.prototype={
$1(a){return B.k},
$S:7}
A.u7.prototype={
$1(a){var s,r,q=A.k([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.iY(s.gn()))
return new A.fs(q)},
$S:92}
A.u8.prototype={
$1(a){return new A.fr(a==null?null:this.a.iY(a))},
$S:93}
A.u9.prototype={
$1(a){return B.k},
$S:7}
A.ua.prototype={
$1(a){return B.k},
$S:7}
A.uc.prototype={
$1(a){return B.k},
$S:7}
A.ud.prototype={
$1(a){var s,r,q=A.k([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.lu(s.gn()))
return new A.fC(q)},
$S:94}
A.ue.prototype={
$1(a){return B.k},
$S:7}
A.uf.prototype={
$1(a){return new A.fB(a)},
$S:95}
A.ug.prototype={
$1(a){return new A.fz(a)},
$S:96}
A.uh.prototype={
$1(a){return new A.hd(a)},
$S:97}
A.ui.prototype={
$1(a){return B.k},
$S:7}
A.uj.prototype={
$0(){return this.a.eT().bd()},
$S:3}
A.uk.prototype={
$0(){return this.a.eT().b1()},
$S:3}
A.ul.prototype={
$0(){return this.b.eT().fR(this.a.a)},
$S:3}
A.tK.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dE(p.b,a1)
a0.a.a.c===$&&A.v()
o=p.d
n=o instanceof A.iX
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.ip(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.ig(B.a0,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.k([A.G(a0)],t.s)}else a0=B.q
q=a0
s=1
break
case 4:n=o instanceof A.j_
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nj(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.ig(B.a1,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.k([A.G(a0)],t.s)}else a0=B.q
q=a0
s=1
break
case 11:k=o instanceof A.iY
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.n4(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.n5(i),$async$$0)
case 23:case 20:a0=A.k([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 18:k=o instanceof A.j0
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nk(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bA(i,B.a1),$async$$0)
case 30:case 27:a0=A.k([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.G(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iU
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.n1(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cL(b,c,!1),$async$$0)
case 37:case 34:q=A.k([b],t.s)
s=1
break
case 32:a0=o instanceof A.iV
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.n2(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.fo(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.O(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iT
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mo(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.ie(B.C,b),$async$$0)
case 51:case 48:q=A.k([b],t.s)
s=1
break
case 46:e=o instanceof A.iZ
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.ne(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.ie(B.E,b),$async$$0)
case 58:case 55:q=A.k([b],t.s)
s=1
break
case 53:e=o instanceof A.iW
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.kn(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.di(b),$async$$0)
case 65:case 62:q=A.k([b],t.s)
s=1
break
case 60:throw A.b(A.eI(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:46}
A.tL.prototype={
$1(a){return new A.fO(a)},
$S:98}
A.tM.prototype={
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
return A.a(o.b9(m,n).pA(!0,k).cE(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.b9(m,n).pw(k).cE(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.b9(m,p.c).cE()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:99}
A.tN.prototype={
$1(a){return new A.fY(a.a,a.d,a.e,a.b,a.c)},
$S:100}
A.tQ.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dE(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.wK(m,l,o.c.b,n.a)
if(l.w==null)A.t(A.rQ('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.t(A.rQ(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.t(A.al("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cE()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:101}
A.tR.prototype={
$1(a){var s,r,q=A.k([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.n_(r.a,r.b))}return new A.h4(q)},
$S:102}
A.tB.prototype={
ny(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.an()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aV)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.ny(a)},
$S:4}
A.tA.prototype={
$1(a){return new A.hi(this.a)},
$S:104}
A.tP.prototype={
$1(a){return this.nz(a)},
nz(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.an()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aV)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.tO.prototype={
$1(a){return a.a===this.a},
$S:105}
A.tV.prototype={
$1(a){var s=a==null?B.b6:A.k([a],t.d)
this.a.b.t(0,new A.jy(this.b,s))},
$S:106}
A.tW.prototype={
$1(a){this.b.bu().C()
this.a.f.H(0,this.c)},
$S:23}
A.tX.prototype={
$1(a){this.a.b.t(0,new A.jy(this.b,a))},
$S:107}
A.tF.prototype={
$1(a){return this.a.r.mL()},
$S:40}
A.tG.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bV(A.e0(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:case 1:return A.bV(null,0,r)
case 2:return A.bV(o.at(-1),1,r)}})
var s=0,r=A.FH($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.FX(r)},
$S:109}
A.tH.prototype={
$1(a){var s=this,r=new Uint8Array(A.b7(a)),q=s.b
q.b=q.b+r.length
s.a.b.t(0,new A.fA(s.c,r,!1,null))
if(q.b>=1048576)s.d.bu().bd()},
$S:14}
A.tJ.prototype={
$1(a){var s=this.a,r=this.b
s.x.H(0,r)
s.b.t(0,new A.fA(r,new Uint8Array(0),!0,J.a0(a)))},
$S:23}
A.tI.prototype={
$0(){var s=this.a,r=this.b
s.x.H(0,r)
s.b.t(0,new A.fA(r,new Uint8Array(0),!0,null))},
$S:0}
A.tS.prototype={
$0(){this.a.b.t(0,B.bB)},
$S:2}
A.tT.prototype={
$1(a){var s=this.a
s.as=a
s.b.t(0,new A.nq(a))},
$S:110}
A.tU.prototype={
$1(a){var s,r=this.a,q=A.k([],t.oS)
for(s=J.E(a);s.k();)q.push(r.iY(s.gn()))
r.b.t(0,new A.ld(this.b,q))},
$S:111}
A.tE.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.d
if(i.a===0){i=j.e
if(i!=null)i.C()
j.e=null
return}j=Date.now()
s=A.n(i).i("ak<2>")
s=A.O(new A.ak(i,s),s.i("o.E"))
r=s.length
q=this.b.a
p=t.H
o=0
for(;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m=n.x
if(0-m.b+1000*(j-m.a)>q){for(m=n.e,l=A.a_(m).i("bv<1>"),m=new A.bv(m,l),m=new A.ao(m,m.gm(0),l.i("ao<Z.E>")),l=l.i("Z.E");m.k();){k=m.d
k=(k==null?l.a(k):k).b.a
if((k.a&30)===0)k.aD(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aD(null)
i.H(0,n.a)
m=n.w
m===$&&A.v()
m.bq(new A.tC(),new A.tD(),p)}}},
$S:40}
A.tC.prototype={
$1(a){},
$S:71}
A.tD.prototype={
$2(a,b){},
$S:9}
A.nd.prototype={}
A.vR.prototype={
bV(a){var s,r=this.a
if(!r.J(a))return null
s=r.H(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.p6(s)
r.toString
t.G.a(r)}return r},
kK(a,b){var s,r=this.a
if(r.a>=256)r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(b==null)s=null
else{s=A.p6(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vB(a){var s,r,q,p=a.a
if(p===0){this.a.am(0)
return}s=this.a
if(p>=s.a){s.am(0)
return}for(p=A.hF(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.H(0,q==null?r.a(q):q)}}}
A.m9.prototype={
aQ(a){return this.wB(a)},
wB(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dy
h=a.a
if(i.J(h))throw A.b(A.aQ('Duplicate store name "'+h+'" in this open call.'))
p=A.Ct(a)
o=q.w
if(o.e===B.aA&&p.b.length!==0)throw A.b(new A.hl('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fW(a,p),$async$aQ)
case 2:n=new A.iq(o).jN(a)
o=a.w
if(o!=null)A.N3(q.r,h,o.c)
o=q.r
s=3
return A.a(o.aJ("lp_stores",1,"store = ?",[h]),$async$aQ)
case 3:m=c
l=J.M(m)
s=l.gF(m)?4:6
break
case 4:s=7
return A.a(o.O(n.b),$async$aQ)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.O(l[j]),$async$aQ)
case 11:case 9:l.length===k||(0,A.q)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$aQ)
case 15:case 13:l.length===k||(0,A.q)(l),++j
s=12
break
case 14:l=a.b
k=q.CW
s=16
return A.a(o.aC(0,"lp_stores",A.m(["store",h,"table_name",h,"schema_ver",l,"definition_json",B.h.a6(a.p(),null),"created_at",k.$0()],t.N,t.X)),$async$aQ)
case 16:s=17
return A.a(A.fM(o,0,0,"create:"+h,k,l),$async$aQ)
case 17:s=5
break
case 6:l=J.V(l.gG(m),"schema_ver")
l.toString
A.aq(l)
k=a.b
if(l>k)throw A.b(A.Eu('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fL(q,a,l),$async$aQ)
case 20:case 19:s=21
return A.a(q.bK(a),$async$aQ)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a6(a.p(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aQ)
case 22:case 5:i.j(0,h,new A.nd(a,p,new A.vR(A.u(t.N,t.b))))
s=23
return A.a(q.dQ(h,p),$async$aQ)
case 23:return A.e(null,r)}})
return A.f($async$aQ,r)},
fW(a,b){return this.oV(a,b)},
oV(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aJ("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fW)
case 3:j=d
if(J.bA(j)){s=1
break}o=null
try{n=J.V(J.bZ(j),"v")
o=A.J9(typeof n=="string"?B.h.aw(n,null):n)}catch(i){if(A.D(i) instanceof A.dJ){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.ar(B.l.v(B.e.v(A.ah(o.p()))).a)!==A.ar(B.l.v(B.e.v(A.ah(b.p()))).a))throw A.b(A.aQ('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fW,r)},
dQ(a,b){return this.qZ(a,b)},
qZ(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ah(b.p())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aJ("lp_meta",1,"k = ?",[p]),$async$dQ)
case 5:s=k.bA(d)?2:4
break
case 2:s=6
return A.a(n.aC(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dQ)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dQ)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dQ,r)},
hD(a){return this.tI(a)},
tI(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hD)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)},
bK(a){return this.rn(a)},
rn(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bK=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.em("lp_stores",A.k(["definition_json"],t.s),1,"store = ?",[a1]),$async$bK)
case 3:a2=a6
if(J.bA(a2)){s=1
break}o=null
try{n=J.V(J.bZ(a2),"definition_json")
m=typeof n=="string"?B.h.aw(n,null):n
l=m
l.toString
k=t.X
o=A.q0(A.bb(t.f.a(l),t.N,k),k)}catch(a4){if(A.D(a4) instanceof A.cO){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.ax.Y(i.a,h.a)&&i.b===h.b&&i.c.P(0,h.c)
g=l}}if(g){s=1
break}f=new A.jq()
$.kz()
f.az()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a0.O("DROP TRIGGER IF EXISTS "+('"'+A.z(a1+d,'"','""')+'"')),$async$bK)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a0.O("DROP TABLE IF EXISTS "+('"'+A.z(a1+"_fts",'"','""')+'"')),$async$bK)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.iq(p.w).jN(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.O(l[e]),$async$bK)
case 16:case 14:l.length===k||(0,A.q)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.z(l,'"','""')
s=17
return A.a(a0.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.z(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bK)
case 17:k=h.a
c=k.$ti.i("X<K.E,l>")
b=new A.X(k,A.Bc(),c).B(0,", ")
a=new A.X(k,new A.uu(a3,h),c).B(0,", ")
l=A.z(l,'"','""')
s=18
return A.a(a0.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.z(a1,'"','""')+'"')),$async$bK)
case 18:case 12:if(f.b==null)f.b=$.mH.$0()
l=a3.b
s=19
return A.a(A.fM(a0,f.gmG(),l,"fts:"+a1,p.CW,l),$async$bK)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bK,r)},
hN(a){return this.u8(a)},
u8(a){var s=0,r=A.h(t.H),q=this,p
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hN)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hN,r)},
au(a){var s=this.dy.h(0,a)
if(s==null)throw A.b(A.y('No store "'+a+'" registered in this LocalPocket.'))
return s},
by(a){var s,r,q=this
if(A.nE(q)!=null)A.t(A.y(u.L))
s=q.au(a)
r=q.a
r===$&&A.v()
return new A.fo(q,s,r.gbn(),null)},
aW(a,b,c){var s
if(A.nE(this)!=null)A.t(A.y(u.L))
s=this.b
s===$&&A.v()
return s.aW(a,b,c)},
a2(a,b){return this.aW(a,B.p,b)},
ni(a,b){++this.y.e
return this.r.aE(a,B.n)},
e3(a){return this.tD(a)},
tC(){return this.e3(null)},
tD(a){var s=0,r=A.h(t.H),q=this,p
var $async$e3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e3)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$e3)
case 6:case 3:return A.e(null,r)}})
return A.f($async$e3,r)},
fI(){var s=0,r=A.h(t.H),q=this
var $async$fI=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fI)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fI,r)},
iy(){var s=0,r=A.h(t.H),q=this
var $async$iy=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iy)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iy,r)},
ix(){var s=0,r=A.h(t.H),q=this
var $async$ix=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.r.O("VACUUM"),$async$ix)
case 2:return A.e(null,r)}})
return A.f($async$ix,r)},
fs(){return this.we()},
we(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fs=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.ux(o),t.P),$async$fs)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)},
dn(a){return this.wN(a)},
wN(a){var s=0,r=A.h(t.H),q=this,p
var $async$dn=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dy,p=new A.bE(p,p.r,p.e,A.n(p).i("bE<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.e7(p.d,a),$async$dn)
case 4:s=2
break
case 3:s=5
return A.a(q.fs(),$async$dn)
case 5:s=6
return A.a(q.fI(),$async$dn)
case 6:s=7
return A.a(q.tC(),$async$dn)
case 7:return A.e(null,r)}})
return A.f($async$dn,r)},
e7(a,b){return this.tR(a,b)},
tR(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$e7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.CW.$0()
h=i-B.c.M(b.a,1000)
j.a=0
o=p.au(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ai("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$e7)
case 5:l=d
if(J.bA(l)){s=4
break}if(A.nE(p)!=null)A.t(A.y(u.L))
k=p.b
k===$&&A.v()
s=6
return A.a(k.aW(new A.uw(j,p,l,a,h,o),B.p,n),$async$e7)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e7,r)},
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
A.uu.prototype={
$1(a){return A.Gm(this.a.a,this.b.c,"",a)},
$S:6}
A.ux.prototype={
$1(a){return this.nB(a)},
nB(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
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
A.G(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.Z("lp_outbox","store = ? AND record_id = ?",[m,A.G(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uw.prototype={
$1(a){return this.nA(a)},
nA(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.y,j=q.e,i=q.f,h=q.b,g=h.ay,h=h.ch
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.G(f)
a1=J
s=4
return A.a(a0.ai("SELECT b.id FROM "+('"'+A.z(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.bA(a4)){s=2
break}s=5
return A.a(a0.ai("SELECT * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.M(e)
c=d.gX(e)?A.ce(i,d.gG(e),g,h):null
s=6
return A.a(A.cB(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.Z(n,"id = ?",[f]),$async$$1)
case 7:d=A.at([f],m)
l.push(new A.a1(n,d))
k.r+=d.a
if(c!=null){d=A.n(c).i("T<1>")
b=d.i("am<o.E>")
a=A.me(b.i("o.E"))
a.D(0,new A.am(new A.T(c,d),new A.uv(),b))
a2.bb(new A.aT(n,f,B.H,B.aW,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uv.prototype={
$1(a){return a!=="id"},
$S:10}
A.ou.prototype={}
A.v5.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:42}
A.v6.prototype={
$2(a,b){return B.c.a0(a.a,b.a)},
$S:114}
A.v2.prototype={
$1(a){return a.h(0,"name")},
$S:35}
A.v4.prototype={
$1(a){return this.nF(a)},
nF(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.ay,j=j.ch,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.ce(k,p,i,j)
n=o
A.IH(k,n)
g=J.V(o,"id")
g.toString
A.G(g)
m=A.dr(k,J.x(J.V(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aC(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:43}
A.vb.prototype={}
A.mC.prototype={
wq(a){if(a>this.w)this.w=a},
n9(){return this.f++}}
A.uy.prototype={
u0(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aw(B.o.f0(B.ar.v(a)),null))
i=J.V(s,"store")
h=J.V(s,"schemaVer")
g=J.V(s,"shape")
f=J.V(s,"ir")
q=t.lH
p=q.a(J.V(s,"sort"))
if(p==null)p=B.aj
e=A.bF(p,!0,t.N)
r=b?J.V(s,"pv"):J.V(s,"values")
q=q.a(r)
if(q==null)q=B.aj
d=A.bF(q,!0,t.X)}catch(o){q=A.Cw(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.c1.Y(e,n)||J.as(d)!==n.length)throw A.b(A.Cw("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bx(l)&&!A.au(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.Cw(j))}return d}}
A.Ah.prototype={
Y(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.wt.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.r(s.e)+", backward: "+s.z+")"}}
A.d8.prototype={}
A.ai.prototype={}
A.c4.prototype={}
A.dv.prototype={}
A.d_.prototype={}
A.b_.prototype={}
A.cn.prototype={}
A.mL.prototype={
ct(a,b){var s=this.gdX()
s.y.n9()
return this.c.ai(a,b)},
c0(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bF(i.d,!0,h)
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
return new A.mL(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
h_(){var s=null
return this.c0(s,s,s,s,s,s,s,s,s)},
lg(a){var s=null
return this.c0(s,s,s,s,s,s,s,a,s)},
px(a){var s=null
return this.c0(s,s,s,a,s,s,s,s,s)},
py(a){var s=null
return this.c0(s,s,s,s,a,s,s,s,s)},
pv(a){var s=null
return this.c0(a,s,s,s,s,s,s,s,s)},
pz(a){var s=null
return this.c0(s,s,s,s,s,a,s,s,s)},
pB(a,b,c){var s=null
return this.c0(s,s,s,s,s,s,a,b,c)},
pA(a,b){var s=null
return this.c0(s,a,b,s,s,s,s,s,s)},
pw(a){var s=null
return this.c0(s,s,a,s,s,s,s,s,s)},
cU(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aQ('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.al('Unknown field "'+a+'" for query.',a))},
be(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cU(a0)
s='"'+A.z(a0,'"','""')+'"'
r=A.k([],t.fC)
q=a4!=null
if(q)r.push(new A.b_(s+" = ?",[a4]))
p=b2!=null
if(p)r.push(new A.b_(s+" <> ?",[b2]))
o=a5!=null
if(o)r.push(new A.b_(s+" > ?",[a5]))
n=a6!=null
if(n)r.push(new A.b_(s+" >= ?",[a6]))
m=b0!=null
if(m)r.push(new A.b_(s+" < ?",[b0]))
l=b1!=null
if(l)r.push(new A.b_(s+" <= ?",[b1]))
k=a7!=null
if(k)r.push(new A.b_(s+" IN ("+B.b.B(A.ae(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.b_(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.b_(s+b,[A.ks(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b_(s+b,["%"+A.ks(a3)]))
g=a2!=null
if(g)r.push(new A.b_(s+b,["%"+A.ks(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b_(s+" IS NULL",B.n))
e=a8===!0
if(e)r.push(new A.b_(s+" IS NOT NULL",B.n))
d=this.h_()
B.b.D(d.d,r)
c=A.k([],t.k)
if(q)c.push(new A.ai(a0,"eq",[a4]))
if(p)c.push(new A.c4(new A.ai(a0,"eq",[b2])))
if(o)c.push(new A.ai(a0,"gt",[a5]))
if(n)c.push(new A.ai(a0,"gte",[a6]))
if(m)c.push(new A.ai(a0,"lt",[b0]))
if(l)c.push(new A.ai(a0,"lte",[b1]))
if(k)c.push(new A.ai(a0,"inValues",a7))
if(j)c.push(new A.ai(a0,"between",[a1.a,a1.b]))
if(i)c.push(new A.ai(a0,"startsWith",[b3]))
if(h)c.push(new A.ai(a0,"endsWith",[a3]))
if(g)c.push(new A.ai(a0,"contains",[a2]))
if(f)c.push(new A.ai(a0,"isNull",B.n))
if(e)c.push(new A.c4(new A.ai(a0,"isNull",B.n)))
B.b.D(d.f,c)
return d},
nm(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
x7(a,b,c){var s=null
return this.be(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xe(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
x8(a,b,c){var s=null
return this.be(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
x9(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xc(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xd(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xa(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
x4(a,b,c){var s=null
return this.be(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xf(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
x6(a,b,c){var s=null
return this.be(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
x5(a,b,c){var s=null
return this.be(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xb(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
w7(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.k([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
p=A.k([],j)
q.a8(0,new A.wq(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.h_()
o.e.push(new A.b_("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.k([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.q)(a),++r){q=a[r]
if(q.gX(0)){m=A.k([],j)
for(l=q.ga7().gu(0);l.k();){k=l.gn()
m.push(new A.ai(k.a,"eq",[k.b]))}s.push(new A.dv(m))}}o.f.push(new A.d_(s))
return o},
jG(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.ai
r=s?a.a:l
if(s){this.cU(r)
break A}s=a instanceof A.c4
q=s?a.a:l
if(s){this.jG(q)
break A}p=a instanceof A.dv
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.d_
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.q)(n),++m)this.jG(n[m])
break A}},
gc1(){var s,r=A.O(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga1(r).a!=="id"
else s=!1
if(s)r.push(B.d2)
return r},
gld(){var s,r,q,p,o
if(this.at){s=A.k([],t.fi)
for(r=this.gc1(),q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.push(new A.cn(o.a,!o.b))}}else s=this.gc1()
return s},
grW(){var s,r,q,p,o,n=A.k([],t.s)
for(s=this.gc1(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jw(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.Ee('Query on "'+this.gaP()+'" requires .limit(n) or .all().'))
return s},
gaP(){return this.b.a},
gdX(){return this.a},
eD(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.k([],e),c=[],b=A.k([],e)
e=f.z
if(!e)b.push("archived = 0")
s=f.Q
if(!s)b.push("hidden = 0")
if(b.length!==0)d.push(B.b.B(b," AND "))
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
d.push(o.a)
B.b.D(c,o.b)}for(r=f.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
d.push(o.a)
B.b.D(c,o.b)}r=f.as
if(r!=null){n=f.glk().u0(r,f.at)
m=f.lF(f.gld(),n)
d.push(m.a)
B.b.D(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.z(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.z(a,'"','""')+'"')+") AS v"}else r=f.grJ()
k=r}j=f.gld()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.wl(),A.a_(j).i("X<1,l>")).B(0,", ")
h=A.J0(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.wm(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jw():a3
g=e}return new A.a4(h+(g==null?"":" LIMIT "+A.r(g)),c)},
iW(a){return this.eD(null,null,!1,!1,a)},
pm(a,b){return this.eD(a,b,!1,!1,null)},
pk(){return this.eD(null,null,!1,!1,null)},
pn(a,b,c){return this.eD(a,null,b,c,null)},
pl(a){return this.eD(null,null,!1,a,null)},
grJ(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.l1())return"*"
o=A.O(o,t.N)
for(s=this.gc1(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(!B.b.E(o,p))o.push(p)}return new A.X(o,A.Bc(),A.a_(o).i("X<1,l>")).B(0,", ")},
glk(){var s=this.b
return new A.uy(s.a,s.b,this.grW(),this.grT())},
grT(){var s,r,q,p,o,n=this,m=A.k([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.k([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.k([o.a,o.b],q))}return B.h.a6(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lF(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cD(a,new A.wn(a)),c=B.b.cD(b,new A.wo())
if(a.length>=2&&d&&!B.b.gG(a).b&&c){s=A.k([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.q)(a),++q){p=a[q]
s.push('"'+A.z(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gG(a).b?"<":">"
return new A.a4("("+o+") "+n+" ("+B.b.B(A.ae(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.k([],s)
l=[]
for(k=0;k<a.length;++k){j=A.k([],s)
i=[]
g=0
for(;;){if(!(g<=k)){h=!0
break}r=a[g]
f='"'+A.z(r.a,'"','""')+'"'
e=b[g]
if(g===k)if(e==null){if(a[g].b){h=!1
break}j.push(f+" IS NOT NULL")}else{r=a[g].b
n=r?"<":">"
if(r)j.push("("+f+" "+n+" ? OR "+f+" IS NULL)")
else j.push(f+" "+n+" ?")
i.push(e)}else if(e==null)j.push(f+" IS NULL")
else{j.push(f+" = ?")
i.push(e)}++g}if(h){m.push("("+B.b.B(j," AND ")+")")
B.b.D(l,i)}}if(m.length===0)return B.di
return new A.a4("("+B.b.B(m," OR ")+")",l)},
lG(a,b){var s,r,q,p,o=this.glk(),n=[]
for(s=this.gc1(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gc1(),p=r.length,q=0;q<r.length;r.length===p||(0,A.q)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.v(B.h.a6(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bw.gf6().v(o)},
e9(a){return this.uY(a)},
cE(){return this.e9(null)},
uY(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$e9=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.jw():a1
if(a0===0){q=B.d3
s=1
break}o=a0==null
n=p.iW(o?null:a0+1)
s=3
return A.a(p.ct(n.a,n.b),$async$e9)
case 3:m=a3
l=o?m:J.BV(m,a0).eu(0)
k=!o&&J.as(m)>a0
o=p.y
j=o!=null
i=j&&p.l1()
h=p.b
if(i){i=A.O(o,t.N)
B.b.D(i,p.r7())
g=A.Ms(h,l,p.gdX().ay,i,p.gdX().ch)}else g=A.Mr(h,l,p.gdX().ay,p.gdX().ch)
i=p.at
if(i&&g.length!==0){h=A.a_(g).i("bv<1>")
f=A.O(new A.bv(g,h),h.i("Z.E"))
B.b.am(g)
B.b.D(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hf(g),$async$e9)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.N2(g,o):g
if(g.length!==0){b=e?p.lG(B.b.ga1(g),B.b.gG(g)):null
a=d?p.lG(B.b.ga1(g),B.b.gG(g)):null}else{b=null
a=null}q=new A.cp(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e9,r)},
hf(a){return this.r1(a)},
r1(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga1(a)
e=p.gc1()
n=[]
for(m=p.gc1(),l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k)n.push(o.h(0,m[k].a))
j=p.lF(e,n)
e=t.s
i=A.k([],e)
h=[]
g=A.k([],e)
if(!p.z)g.push("archived = 0")
if(!p.Q)g.push("hidden = 0")
if(g.length!==0)i.push(B.b.B(g," AND "))
for(e=p.d,n=e.length,k=0;k<e.length;e.length===n||(0,A.q)(e),++k){f=e[k]
i.push(f.a)
B.b.D(h,f.b)}for(e=p.e,n=e.length,k=0;k<e.length;e.length===n||(0,A.q)(e),++k){f=e[k]
i.push(f.a)
B.b.D(h,f.b)}i.push(j.a)
B.b.D(h,j.b)
d=J
s=3
return A.a(p.ct("SELECT 1 FROM "+('"'+A.z(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hf)
case 3:q=d.ec(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)},
l1(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.fa(o)==null)return!1}return!0},
r7(){var s,r,q,p,o=A.k([],t.s)
for(s=this.gc1(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hG(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pl(!0)
m=A
s=3
return A.a(p.ct(o.a,o.b),$async$hG)
case 3:n=m.fc(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
hI(a){return this.tT(a)},
tT(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cU(a)
o=p.pn(a,!0,!0)
m=A
s=3
return A.a(p.ct(o.a,o.b),$async$hI)
case 3:n=m.fc(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
hQ(a){return this.uE(a)},
uE(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cU(a)
o=A.k([a],t.s)
n=A.k([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pB(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.iW(h)
o=[]
f=J
s=3
return A.a(i.ct(B.a.ks(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hQ)
case 3:n=f.E(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)},
qu(a){var s,r,q=this.b.fa(a)
if(q==null)return!1
s=q.b
A:{r=B.T===s||B.U===s||B.B===s||B.V===s
break A}return r},
cT(a,b){return this.oT(a,b)},
oT(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cU(b)
if(!p.qu(b))throw A.b(A.al('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pm(b,a)
s=3
return A.a(p.ct(o.a,o.b),$async$cT)
case 3:n=d
m=J.M(n)
q=A.Ft(m.gF(n)?null:J.V(m.gG(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cT,r)},
i5(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$i5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lg(A.k(["id"],m))
k=l.pk()
s=3
return A.a(l.ct(k.a,k.b),$async$i5)
case 3:j=b
m=A.k([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.G(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i5,r)},
hR(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$hR=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.iW(p.jw())
n=J
s=3
return A.a(p.ct("EXPLAIN QUERY PLAN "+o.a,o.b),$async$hR)
case 3:q=n.c0(b,new A.wp(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)}}
A.wq.prototype={
$2(a,b){this.a.cU(a)
this.b.push('"'+A.z(a,'"','""')+'" = ?')
this.c.push(b)},
$S:116}
A.wl.prototype={
$1(a){var s=A.z(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:117}
A.wm.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.z(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:118}
A.wn.prototype={
$1(a){return a.b===B.b.gG(this.a).b},
$S:119}
A.wo.prototype={
$1(a){return a!=null},
$S:21}
A.wp.prototype={
$1(a){return a.h(0,"detail")},
$S:35}
A.cN.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cN&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gI(a){return A.c5(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.wK.prototype={
rI(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.Ee('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cE(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cE=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.cj(a3).length===0){q=B.cM
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.ek(a3)
A.Jb(d)
if(e.b)A.Ja(d)
c=f.a
b=c+"_fts"
a=A.k(['"'+A.z(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.B(a," AND ")
a0=n.rI()
a1=a0==null?"":" LIMIT "+A.r(a0)
f=A.z(b,'"','""')
e=A.z(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.z(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.y.n9()
s=7
return A.a(n.c.ai(m,l),$async$cE)
case 7:j=a6
i=A.k([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.V(h,"id")
f.toString
A.G(f)
e=J.V(h,"score")
e.toString
J.aL(i,new A.cN(f,A.Fs(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.D(a4)
if(i instanceof A.c7){g=i
throw A.b(A.al("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cE,r)}}
A.cp.prototype={}
A.wD.prototype={}
A.c3.prototype={
a4(){return"FieldKind."+this.b}}
A.aX.prototype={
gkN(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.av===s||B.I===s||B.W===s||B.X===s||B.J===s){r="TEXT"
break A}if(B.T===s||B.B===s||B.V===s){r="INTEGER"
break A}if(B.U===s){r="REAL"
break A}throw A.b(A.eI(u.P))}return r},
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
A.rz.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fx(B.cG,A.G(m))
m=n.h(0,"name")
m.toString
A.G(m)
r=J.x(n.h(0,"required"),!0)
q=J.x(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aX(m,B.av,r,J.x(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aX(m,B.T,r,!1,q,o,o,!1)
case 2:return new A.aX(m,B.U,r,!1,q,o,o,!1)
case 3:return new A.aX(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aX(m,B.V,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aX(m,B.I,r,!1,!1,A.fJ(J.pq(t.j.a(n),p),p),o,!1)
case 6:return new A.aX(m,B.W,!1,!1,q,o,o,!1)
case 7:return new A.aX(m,B.X,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aX(m,B.J,!1,!1,!1,o,A.G(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:120}
A.iE.prototype={
a4(){return"IndexScope."+this.b}}
A.dD.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.tm.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.pq(t.j.a(q),t.N)
s=J.x(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dD(q,s,A.fx(B.cB,A.G(r)))},
$S:121}
A.fF.prototype={
p(){var s,r=t.N,q=t.X,p=A.u(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gX(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fF&&r.b===b.b&&B.ax.Y(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gI(a){return A.c5(A.vg(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.rP.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.pq(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fF(p,r,t.f.b(q)?A.Ic(q.c6(0,s,t.X)):B.cg)},
$S:122}
A.er.prototype={
ek(a){var s,r,q,p
for(s=this.a.ga7(),s=s.gu(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.E(r,p))continue
q=q.b
r=A.z(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.er&&A.Ib(this.a,b.a)
else s=!0
return s},
gI(a){var s,r,q,p=this.a,o=p.gK(),n=A.O(o,A.n(o).i("o.E"))
B.b.aF(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.q)(n),++r){q=n[r]
o.push(A.c5(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.vg(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.rO.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.u(s,s)
for(o=t.d2.a(o).ga7(),o=o.gu(o);o.k();){q=o.gn()
p=q.a
p.toString
A.G(p)
q=q.b
q.toString
A.G(q)
A.DZ(p,q)
r.j(0,p,q)}return new A.er(A.HU(r,s,s))},
$S:123}
A.c8.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.x_.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.aq(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.k([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.DU(q.a(p.gn())))
return new A.c8(o,s,r)},
$S:124}
A.v7.prototype={
a4(){return"MissingRemotePolicy."+this.b}}
A.qu.prototype={}
A.cE.prototype={
gd7(){var s,r,q,p,o=this,n=$.GM()
A.C2(o)
s=n.a.get(o)
if(s==null){s=A.aO(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
fa(a){var s,r,q,p,o,n=this,m=$.GN()
A.C2(n)
s=m.a.get(n)
if(s==null){s=A.u(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.V(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.u(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.k([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o)r.push(q[o].p())
j.j(0,"fields",r)
r=A.k([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.Q
if(l!=null)j.j(0,"attachmentField",l)
l=m.w
if(l!=null)j.j(0,"fts",l.p())
l=A.k([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.q)(k),++o)l.push(k[o].p())
j.j(0,"migrations",l)
return j}}
A.q1.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j="attachmentField",i=this.a,h=i.h(0,"name")
h.toString
A.G(h)
s=i.h(0,"version")
s.toString
A.aq(s)
r=A.k([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.DU(o.a(q.gn())))
q=A.k([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.Im(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.G(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.Id(o.a(l))}else l=null
k=A.k([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.aj:i)
while(i.k())k.push(A.Jk(o.a(i.gn())))
return new A.cE(h,s,r,q,n,p,l,k,m,this.b.i("cE<0>"))},
$S(){return this.b.i("cE<0>()")}}
A.mZ.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.wG.prototype={
$1(a){return!1},
$S:42}
A.wH.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.wI.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.eB)},
$S:44}
A.wJ.prototype={
$1(a){return J.a0(a)},
$S:126}
A.dN.prototype={
a4(){return"MutationAction."+this.b}}
A.fo.prototype={
gaP(){return this.b.a.a},
eF(){var s=this.d
if(s!=null&&s.e){s=this.gaP()
throw A.b(new A.fZ('Cannot mutate "'+s+'" through a read-only Tx.'))}},
ip(a){var s=this
if(s.d!=null)return s.ig(B.a0,a)
return s.a.aW(new A.qf(s,a),B.p,t.H)},
nj(a){var s=this
if(s.d!=null)return s.ig(B.a1,a)
return s.a.aW(new A.qi(s,a),B.p,t.H)},
n4(a){var s=this
if(s.d!=null)return s.n5(a)
return s.a.aW(new A.qe(s,a),B.p,t.H)},
nk(a){var s=this
if(s.d!=null)return s.bA(a,B.a1)
return s.a.aW(new A.qh(s,a),B.p,t.H)},
n1(a,b){var s=this
if(s.d!=null)return s.wa(a,b)
return s.a.aW(new A.qb(s,a,b),B.p,t.H)},
n2(a){var s=this
if(s.d!=null)return s.fo(a)
return s.a.aW(new A.qa(s,a),B.p,t.H)},
fo(a){return this.w9(a)},
w9(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$fo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eF()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aN(a,o.i("aN<1,2>")).gu(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cL(m.a,m.b,!0),$async$fo)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aO(t.N)
for(o=new A.bE(a,a.r,a.e,o.i("bE<1>"));o.k();)l.t(0,o.d)
n.a_(new A.a1(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
mo(a){var s=this
if(s.d!=null)return s.ie(B.C,a)
return s.a.aW(new A.q7(s,a),B.p,t.H)},
ne(a){var s=this
if(s.d!=null)return s.ie(B.E,a)
return s.a.aW(new A.qg(s,a),B.p,t.H)},
kn(a){var s=this
if(s.d!=null)return s.di(a)
return s.a.aW(new A.qc(s,a),B.p,t.H)},
di(a){return this.wg(a)},
wg(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$di=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eF()
s=2
return A.a(q.dW(a),$async$di)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cB(n,m,a,!0),$async$di)
case 3:s=4
return A.a(n.Z(m,"id = ?",[a]),$async$di)
case 4:l=t.N
o.a_(new A.a1(m,A.at([a],l)))
if(p!=null){l=A.d4(p.gK(),l)
l.H(0,"id")
o.bb(new A.aT(m,a,B.H,B.aW,p,null,l))}return A.e(null,r)}})
return A.f($async$di,r)},
cL(a,b,c){return this.wb(a,b,c)},
wa(a,b){return this.cL(a,b,!1)},
wb(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cL=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eF()
s=3
return A.a(p.c.b.ai("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cL)
case 3:o=e
n=J.M(o)
if(n.gX(o)){m=n.gG(o)
l=A.jv(m)
k=m.h(0,"o_kind")!=null?A.mz(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eL(a,b,l,k,c),$async$cL)
case 6:s=1
break
case 5:s=7
return A.a(p.d_(a,b,c,k,l),$async$cL)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cL,r)},
d_(a,b,c,d,e){return this.pV(a,b,c,d,e)},
pV(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d_=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dW(a),$async$d_)
case 2:m=g
if(m==null)throw A.b(A.Cr("No record "+q.gaP()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cK(m,p,o)
n.D(0,b)
o=A.u(p,o)
o.j(0,"id",a)
o.D(0,n)
s=3
return A.a(q.aO(B.K,c,m,a,d,e,o),$async$d_)
case 3:return A.e(null,r)}})
return A.f($async$d_,r)},
eL(a,b,c,d,e){return this.qW(a,b,c,d,e)},
qW(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eL=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.aw(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.d_(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.x(i,a7)){q=n.d_(a7,a8,b1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.cK(a5,h,g)
f.D(0,a8)
m=f
J.cZ(m,"id",a7)
e=new A.a2("")
f=n.b
d=f.a
c=A.B4(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cK(m,h,g)
b.H(0,"id")
n.hq(a7,b,a,c)
a0=n.ln(a5,m,B.K)
l=null
b=a0.length===1&&d.gd7().E(0,B.b.gap(a0))
a1=n.a
a2=a1.ay
a3=a1.ch
if(b){a4=d.fa(B.b.gap(a0))
b=a4.a
l=A.m([b,A.Gi(d,a4,J.V(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dr(d,J.x(J.V(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.c.b.L(d.a,l,"id = ?",[a7]),$async$eL)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.D(a6)
h=A.GH(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.cx
g===$&&A.v()
b=l
s=8
return A.a(g.bm(B.K,null,a0,n.c.b,a7,m,a5,b0,a,b,a9,f),$async$eL)
case 8:if(!b1){g=n.d
if(g!=null)g.a_(new A.a1(d.a,A.at([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bb(new A.aT(d.a,a7,B.H,B.A,a5,m,A.uB(a0,A.a_(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eL,r)},
aO(a,b,c,d,e,f,g){return this.vX(a,b,c,d,e,f,g)},
ig(a,b){var s=null
return this.aO(a,!1,s,s,s,s,b)},
ie(a,b){var s=null
return this.aO(a,!1,s,b,s,s,s)},
vV(a,b,c){var s=null
return this.aO(a,b,s,s,s,s,c)},
vW(a,b,c,d,e,f){return this.aO(a,b,c,null,d,e,f)},
vX(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aO=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.eF()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.q9(b5,n,c2,c1)
s=b7===B.a0?3:5
break
case 3:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.i1()
g=$.po()
if(!g.b.test(h))throw A.b(A.al('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aO)
case 6:l=n.eI(c3,m)
b7=b5.a==null?B.b7:B.K
s=4
break
case 5:s=b7===B.K?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aO)
case 10:if(b5.a==null)throw A.b(A.Cr("No record "+n.gaP()+"/"+A.r(m)+" to update."))
c3.toString
l=n.eI(c3,m)
s=8
break
case 9:s=b7===B.a1?11:13
break
case 11:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.i1()
g=$.po()
if(!g.b.test(h))throw A.b(A.al('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aO)
case 14:g=b5.a
if(g==null){l=n.eI(c3,m)
b7=B.b7}else{l=A.cK(g,t.N,t.X)
for(g=new A.aN(c3,A.n(c3).i("aN<1,2>")).gu(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.cZ(l,e,f.b)}b7=B.K}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aO)
case 15:g=b5.a
if(g==null)throw A.b(A.Cr("No record "+n.gaP()+"/"+A.r(m)+" to archive/restore."))
g=A.cK(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.a2("")
g=n.b
e=g.a
c=l
b=A.B4(d,e,c,J.as(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hq(m,l,a,b)
s=b5.a==null?16:18
break
case 16:a0=null
s=17
break
case 18:c=c2==null?b5.c:c2
s=c==null?19:21
break
case 19:c=n.a.cx
c===$&&A.v()
s=22
return A.a(c.bS(n.c.b,e.a,m),$async$aO)
case 22:c=c5
a0=c
s=20
break
case 21:a0=c
case 20:case 17:s=b5.a==null?23:25
break
case 23:a1=null
s=24
break
case 25:c=c1==null?b5.b:c1
s=c==null?26:28
break
case 26:c=n.a.cx
c===$&&A.v()
s=29
return A.a(c.eo(n.c.b,e.a,m),$async$aO)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a5)throw A.b(A.DN("Record "+n.gaP()+"/"+A.r(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ah(A.bh(e,a3))
a2=A.ar(B.l.v(B.e.v(a6)).a)
a7=new A.pI(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ay
a8=a3.ch
a9=A.dr(e,J.x(J.V(l,"archived"),!0),a4,a8,c,a2)
b0=n.ln(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gd7().E(0,B.b.gap(b0))){b1=e.fa(B.b.gap(b0))
c=b1.a
k=A.m([c,A.Gi(e,b1,J.V(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
a2=n.c.b
s=b5.a==null?34:36
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
b6=o.pop()
j=A.D(b6)
g=A.GH(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.cx
c===$&&A.v()
a2=m
a3=b5.a
s=39
return A.a(c.bm(b7,a7,b0,n.c.b,a2,l,a3,a1,a,a9,a0,g),$async$aO)
case 39:switch(b7.a){case 2:case 0:case 1:b3=b5.a==null?B.ac:B.A
break
case 3:b3=B.A
break
case 4:b3=B.c2
break
case 5:b3=B.c3
break
default:b3=null}if(b7===B.C||b7===B.E)b4=A.at(["archived"],t.N)
else if(b5.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("am<o.E>")
b4=A.d4(new A.am(new A.T(g,c),new A.q8(),a2),a2.i("o.E"))}else b4=A.uB(b0,A.a_(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bb(new A.aT(e.a,m,B.H,b3,b5.a,l,b4))
if(!b8)if(!c)g.a_(new A.a1(e.a,A.at([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aO,r)},
bA(a,b){return this.wj(a,b)},
n5(a){return this.bA(a,B.a0)},
wj(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bA=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eF()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.k([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.q)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a6(a0)
a2=a1?A.i1():a0
a1=$.po()
if(!a1.b.test(a2))throw A.b(A.al('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aL(l,new A.a4(a2,a))}if(!c){a3=A.u(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.ak(a3,a3.$ti.i("ak<2>")).bN(0,new A.qd())}else a5=!1
s=c3===B.a0&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dU(m,l),$async$bA)
case 9:k=A.aO(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aL(k,i)}g.a_(new A.a1(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.D(c0) instanceof A.ht))throw c0
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
a4=A.k([],a1)
for(b1=J.HA(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.q)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.ci(e,"id IN ("+B.b.B(A.ae(a4.length,"?",!1,k),", ")+")",a4),$async$bA)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.G(b2),A.ce(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.u(k,t.nw)
b4=A.u(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.O(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.T(b5,a8,B.c.bO(a9,0,j))
b7=B.b.B(A.ae(b6.length,"?",!1,k),", ")
j=A.k([e],a1)
B.b.D(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.ci("lp_sync_row",f,j),$async$bA)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.G(b1),A.jv(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.ci("lp_outbox",f,j),$async$bA)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.G(d),A.mz(f))
s=23
break
case 24:case 17:a8=a9
s=16
break
case 18:b8=A.aO(k)
j=l,f=j.length,d=t.X,b=0
case 25:if(!(b<j.length)){s=27
break}a1=j[b]
a2=a1.a
a=a1.b
b9=a7.h(0,a2)
s=b8.E(0,a2)?28:30
break
case 28:a1=A.dI(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.vV(c3,!0,a1),$async$bA)
case 31:s=29
break
case 30:a1=A.dI(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.vW(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bA)
case 32:b8.t(0,a2)
case 29:case 26:j.length===f||(0,A.q)(j),++b
s=25
break
case 27:g.a_(new A.a1(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bA,r)},
dU(a,b){return this.rg(a,b)},
rg(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dU=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.ir?3:4
break
case 3:s=5
return A.a(n.dV(a6,a7),$async$dU)
case 5:s=1
break
case 4:m=n.a.CW.$0()
a=n.d
a0=a==null?null:a.a.a$.b.d!=null
l=a0===!0
k=A.k([],t.jO)
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
return A.a(n.eB(a6,a4,h,g,m),$async$dU)
case 13:e=a9
if(l)J.aL(k,new A.a4(h,e));++j
case 11:a7.length===a0||(0,A.q)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.D(a5) instanceof A.c7?14:16
break
case 14:d=A.k([],t.s)
for(c=0;c<j;++c)J.aL(d,a7[c].a)
b=d
s=17
return A.a(n.cZ(a6,b),$async$dU)
case 17:throw A.b(new A.ht())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a0=n.b.a.a,a1=0;a1<i.length;i.length===d||(0,A.q)(i),++a1){a3=i[a1]
e=a3.b
a.toString
a.bb(new A.aT(a0,a3.a,B.H,B.ac,null,e,J.Dx(e.gK(),new A.q6()).fG(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dU,r)},
dV(a,b){return this.rh(a,b)},
rh(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dV=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.CW.$0()
d1=o.c.b
d2=t.s
d3=A.k(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.q)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.i5(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.i5(B.Z)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.i5(B.Y)+") VALUES "
j=new A.q5()
b1=new A.a2("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.k([],t.jO):null
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
c3=b2?o.eI(c2,c1):c2
b1.a=""
c4=A.B4(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hq(c1,c3,c5,c4)
A.LQ(f,c8,J.x(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.cx
b7===$&&A.v()
c6=b7.fM()
A.G7(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.G8(d,B.a6,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a4(c1,c3))}c=!1
b=!1
q=6
b7=d1.ck(A.r(m)+A.r(j.$2(J.as(n),g)))
if(b7.r||b7.b.r)A.t(A.y(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bP(f))
b7.h4()
c=!0
b7=d1.ck(A.r(l)+A.r(j.$2(11,g)))
if(b7.r||b7.b.r)A.t(A.y(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bP(e))
b7.h4()
b=!0
b7=d1.ck(A.r(k)+A.r(j.$2(16,g)))
if(b7.r||b7.b.r)A.t(A.y(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eC(new A.bP(d))
b7.h4()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.D(d4) instanceof A.c7?9:11
break
case 9:a=A.k([],d2)
for(a0=0;a0<i;++a0)J.aL(a,d6[a0].a)
a1=a
s=12
return A.a(o.cZ(d5,a1),$async$dV)
case 12:s=c||b?13:14
break
case 13:a2=A.k([],d2)
for(a3=i;a3<h;++a3)J.aL(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.ae(J.as(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.Z(d3,"id IN ("+A.r(a5)+")",a4),$async$dV)
case 17:case 16:s=b?18:19
break
case 18:a6=A.k([d3],d2)
J.Ds(a6,a4)
a7=a6
s=20
return A.a(d5.Z("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dV)
case 20:case 19:case 14:throw A.b(new A.ht())
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
case 4:if(b2)for(a=b3.length,b0=0;b0<b3.length;b3.length===a||(0,A.q)(b3),++b0){a2=b3[b0]
c3=a2.b
a8.toString
a8.bb(new A.aT(d3,a2.a,B.H,B.ac,null,c3,J.Dx(c3.gK(),new A.q4()).fG(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dV,r)},
eB(a,b,c,d,e){return this.oX(a,b,c,d,e)},
oX(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$eB=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eI(b1,b0)
a3=new A.a2("")
a4=A.B4(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hq(b0,a2,a6,a4)
a5=n.a
m=A.dr(a1,J.x(a2.h(0,"archived"),!0),a5.ay,a5.ch,b0,a2)
a5=a5.cx
a5===$&&A.v()
e=a5.fM()
a5=a1.a
l=A.Ga("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.Ma('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dK(new A.T(d,c),new A.q2(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.ae(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=a9.ck(f)
d=m
a=A.n(d).i("ak<2>")
d=A.O(new A.ak(d,a),a.i("o.E"))
c.e8(new A.bP(d))
j=!0
a9.ck("INSERT INTO lp_outbox ("+A.i5(B.Z)+") VALUES ("+B.b.B(A.ae(11,"?",!1,b),", ")+")").e8(new A.bP(A.GB(l,B.Z)))
i=!0
a9.ck("INSERT INTO lp_sync_row ("+A.i5(B.Y)+") VALUES ("+B.b.B(A.ae(16,"?",!1,b),", ")+")").e8(new A.bP(A.GB(k,B.Y)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.Z(a5,"id = ?",[b0]),$async$eB)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.Z("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$eB)
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
return A.f($async$eB,r)},
cZ(a,b){return this.pF(a,b)},
pF(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$cZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.ae(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.Z(m,"id IN ("+o+")",b),$async$cZ)
case 3:m=A.k([m],t.s)
B.b.D(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.Z("lp_outbox",n,m),$async$cZ)
case 4:s=5
return A.a(a.Z("lp_sync_row",n,m),$async$cZ)
case 5:case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
eI(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=a.ga7(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.n6("archived",new A.q3())
return p},
ln(a,b,c){var s,r,q,p,o
if(a==null)return B.cN
s=t.N
r=A.aO(s)
s=A.d4(a.gK(),s)
s.D(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hF(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.t.Y(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.O(r,r.$ti.c)
B.b.aF(o)
return o},
dW(a){return this.rl(a)},
rl(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ai('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dW)
case 3:m=c
l=J.M(m)
if(l.gF(m)){q=null
s=1
break}o=p.a
q=A.ce(n,l.gG(m),o.ay,o.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dW,r)},
hg(a){return this.r2(a)},
r2(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ai('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hg)
case 3:j=c
k=J.M(j)
if(k.gF(j)){q=B.dk
s=1
break}o=k.gG(j)
k=p.a
n=A.ce(l,o,k.ay,k.ch)
m=o.h(0,"s_sync_state")!=null?A.jv(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.f2(n,m,o.h(0,"o_kind")!=null?A.mz(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
bV(a){return this.o0(a)},
o0(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$bV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:f=p.d==null
if(f&&p.b.e.a.J(a)){q=p.b.e.bV(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
k=p.c.b
s=m>1?3:5
break
case 3:s=6
return A.a(k.ai("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bV)
case 6:s=4
break
case 5:s=7
return A.a(k.ai('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bV)
case 7:case 4:j=c
l=J.M(j)
if(l.gF(j)){if(f)o.e.kK(a,null)
q=null
s=1
break}i=l.gG(j)
l=p.a
h=A.ce(n,i,l.ay,l.ch)
g=A.bf(i.h(0,"lp_schema_ver"))
if(g==null)g=1
if(g<m)h=A.LR(n,h,g,m)
if(f)o.e.kK(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
hq(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.al('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.D9(p,n)
if(m!=null)throw A.b(A.al(A.HP(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.al("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.qf.prototype={
$1(a){return a.by(this.a.b.a.a).ip(this.b)},
$S:4}
A.qi.prototype={
$1(a){return a.by(this.a.b.a.a).nj(this.b)},
$S:4}
A.qe.prototype={
$1(a){return a.by(this.a.b.a.a).n4(this.b)},
$S:4}
A.qh.prototype={
$1(a){return a.by(this.a.b.a.a).nk(this.b)},
$S:4}
A.qb.prototype={
$1(a){return a.by(this.a.b.a.a).n1(this.b,this.c)},
$S:4}
A.qa.prototype={
$1(a){return a.by(this.a.b.a.a).n2(this.b)},
$S:4}
A.q7.prototype={
$1(a){return a.by(this.a.b.a.a).mo(this.b)},
$S:4}
A.qg.prototype={
$1(a){return a.by(this.a.b.a.a).ne(this.b)},
$S:4}
A.qc.prototype={
$1(a){return a.by(this.a.b.a.a).kn(this.b)},
$S:4}
A.q9.prototype={
nr(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.dW(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.hg(a),$async$$1)
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
$1(a){return this.nr(a)},
$S:127}
A.q8.prototype={
$1(a){return a!=="id"},
$S:10}
A.qd.prototype={
$1(a){return a>1},
$S:128}
A.q6.prototype={
$1(a){return a!=="id"},
$S:10}
A.q5.prototype={
$2(a,b){var s=t.N
return B.b.B(A.ae(b,"("+B.b.B(A.ae(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:129}
A.q4.prototype={
$1(a){return a!=="id"},
$S:10}
A.q2.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.q3.prototype={
$0(){return!1},
$S:45}
A.ht.prototype={$iF:1}
A.oa.prototype={}
A.pv.prototype={
aV(a,b){var s=this.a.V(new A.pw(a,b),b)
this.a=s.bq(new A.px(b),new A.py(),t.H)
return s}}
A.pw.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("A<0>(~)")}}
A.px.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.py.prototype={
$2(a,b){},
$S:9}
A.bi.prototype={
gnc(){var s=this.e
return s.gm(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.qv.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.G(d)
s=e.h(0,"record_id")
s.toString
A.G(s)
r=A.Bd(e.h(0,l),l,k)
q=A.Bd(e.h(0,j),j,k)
p=A.Bd(e.h(0,i),i,k)
o=A.Gg(e.h(0,h),h,k)
n=A.Gg(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.aq(m)
return new A.bi(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.Bd(e.h(0,f),f,k):null)},
$S:131}
A.qw.prototype={
fh(a){return this.vI(a)},
vI(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.v()
m=m.gbn()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.wk("lp_conflicts","detected_at ASC",n,o),$async$fh)
case 3:o=l.c0(c,A.Mg(),t.n8)
m=A.O(o,o.$ti.i("Z.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
du(a,b){return this.o1(a,b)},
o1(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$du=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.v()
s=3
return A.a(n.gbn().b.aJ("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$du)
case 3:o=d
n=J.M(o)
if(n.gF(o)){q=null
s=1
break}q=A.BY(n.gG(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$du,r)},
x3(a){var s={},r=A.CM()
s.a=null
r.sk_(A.dR(new A.qz(s,r),new A.qA(s,this,a,new A.qB(this,r,a)),t.ba))
return r.bu().gcS()},
eq(a,b,c){return this.wI(a,b,c)},
wI(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(c)
s=2
return A.a(p.a2(new A.qx(q,c,a,o.a,o,b),t.P),$async$eq)
case 2:return A.e(null,r)}})
return A.f($async$eq,r)},
eY(a,b){return this.tt(a,b)},
tt(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.du(a,b),$async$eY)
case 2:p=d
if(p==null)throw A.b(A.y("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eq(b,p.d,a),$async$eY)
case 3:return A.e(null,r)}})
return A.f($async$eY,r)},
e1(a,b){return this.tu(a,b)},
tu(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$e1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.du(a,b),$async$e1)
case 3:o=d
if(o==null)throw A.b(A.y("No conflict found for "+a+"/"+b))
s=o.gnc()?4:5
break
case 4:s=6
return A.a(p.a.by(a).kn(b),$async$e1)
case 6:s=1
break
case 5:s=7
return A.a(p.eq(b,o.e,a),$async$e1)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e1,r)}}
A.qB.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bu().gi7()){s=1
break}p=4
s=7
return A.a(n.a.fh(n.c),$async$$0)
case 7:m=b
if(!i.bu().gi7())J.aL(i.bu(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.D(h)
k=A.ac(h)
if(!i.bu().gi7())i.bu().bx(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.qA.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b0(p,A.n(p).i("b0<1>")).aN(new A.qy(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qy.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:38}
A.qz.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.C()
s=2
return A.a(p instanceof A.w?p:A.bw(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bu().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qx.prototype={
$1(a){return this.ns(a)},
ns(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aJ("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.M(a3)
if(a4.gF(a3))throw A.b(A.y("No conflict found for "+a1+"/"+a2))
o=A.BY(a4.gG(a3))
n=o.gnc()
m=n?null:A.ah(o.e)
l=n?"":A.ar(B.l.v(B.e.v(A.ah(A.bh(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aJ(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bA(a8)?4:5
break
case 4:s=7
return A.a(a0.Z("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.Z("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.Z("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a_(new A.a1(a1,A.at([a2],a4)))
a6.a_(new A.a1("lp_conflicts",A.at([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aJ("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.M(k)
if(i.gX(k)){h=A.a6(J.V(i.gG(k),"base_updated"))
i=h==null?A.a6(J.V(i.gG(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.Z("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cK(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dr(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bJ(n?B.j:o.e,g)
d=A.O(a4,A.n(a4).c)
B.b.aF(d)
c=A.ah(A.bh(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a6(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aJ("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bA(a8)?14:16
break
case 14:a4=p.a.a
b=a4.CW.$0()
h=f?B.L:B.v
e=B.h.a6(d,null)
a4=a4.cx
a4===$&&A.v()
s=18
return A.a(a0.aC(0,"lp_outbox",A.Ga(l,j,b,e,h,a4.fM(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a_(new A.a1(a1,A.at([a2],i)))
a6.a_(new A.a1("lp_conflicts",A.at([a2],i)))
a4=o.d
a=A.bJ(a4,g)
a.H(0,"id")
a6.bb(new A.aT(a1,a2,B.ad,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.ni.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dR(null,null,t.n6)
n.ay=A.dR(null,null,t.ic)}n.z=!0
s=3
return A.a(n.aM(B.du),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.il(),$async$az)
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
n.fr=new A.b0(l,A.n(l).i("b0<1>")).aN(n.gvm())
l=n.b.ay
n.fx=new A.b0(l,A.n(l).i("b0<1>")).aN(n.gvk())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aG(),$async$az)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.CC(B.S,new A.xl(n))
s=14
return A.a(n.aM(n.dG()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.d3(),$async$az)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$az,r)},
aG(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
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
return A.a(p.k4,$async$aG)
case 3:s=4
return A.a(p.dx,$async$aG)
case 4:s=5
return A.a(p.dy.a,$async$aG)
case 5:s=6
return A.a(p.p2,$async$aG)
case 6:o=p.fr
o=o==null?null:o.C()
n=t.H
s=7
return A.a(o instanceof A.w?o:A.bw(o,n),$async$aG)
case 7:o=p.fx
o=o==null?null:o.C()
s=8
return A.a(o instanceof A.w?o:A.bw(o,n),$async$aG)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.N
o.t(0,B.N)
s=12
return A.a(p.ax.q(),$async$aG)
case 12:s=10
break
case 11:p.y=B.N
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aG)
case 15:case 14:p.y=B.N
case 1:return A.e(q,r)}})
return A.f($async$aG,r)},
dG(){if(this.at)return B.bk
if(this.Q)return B.bi
if(this.as)return B.aC
return B.bj},
aM(a){return this.t4(a)},
t4(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.pN(),$async$aM)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aM,r)},
pN(){return this.p2=this.p2.V(new A.xd(this),t.H)},
h0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$h0=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.hH(),$async$h0)
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
if((g.c&4)===0)g.t(0,new A.eM(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h0,r)},
vn(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.rG(B.af)},
vl(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dy.J(s))return
r=a.c
if(r!=null&&a.b===B.aa){q.p1.push("fast:"+s)
q.dx=q.dx.V(new A.xj(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hn(B.af,A.k([s],t.s))},
h5(a){return this.pW(a)},
pW(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hn(B.af,A.k([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.v()
s=7
return A.a(l.hS(a),$async$h5)
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
break}if(!m)n.hn(B.af,A.k([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h5,r)},
vv(){if(!this.z)return
this.p1.push("cycle")
this.d3()},
hn(a,b){var s=this,r=s.go
if(r!=null)r.C()
if(b==null)s.k2=!0
else s.k3.D(0,b)
s.go=A.cR(a,new A.xi(s))},
rG(a){return this.hn(a,null)},
rF(a){var s=this.id
if(s!=null)s.C()
this.id=A.cR(B.D,new A.xh(this,a))},
jn(){this.as=!0
this.aM(B.aC)
A.iA(this.d,t.H)},
eh(){var s=0,r=A.h(t.H),q,p=this,o
var $async$eh=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.cx
o===$&&A.v()
s=3
return A.a(o.wG(),$async$eh)
case 3:s=4
return A.a(p.aM(p.dG()),$async$eh)
case 4:p.p1.push("cycle")
s=5
return A.a(p.d3(),$async$eh)
case 5:case 1:return A.e(q,r)}})
return A.f($async$eh,r)},
fR(a){return this.od(a)},
od(a){var s=0,r=A.h(t.H),q=this,p
var $async$fR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.C()
q.k1=A.cR(B.au,new A.xk(q))
s=3
break
case 4:s=5
return A.a(q.aM(B.bi),$async$fR)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fR,r)},
bd(){var s=0,r=A.h(t.H),q=this
var $async$bd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aM(B.bk),$async$bd)
case 2:return A.e(null,r)}})
return A.f($async$bd,r)},
b1(){var s=0,r=A.h(t.H),q,p=this
var $async$b1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aM(p.dG()),$async$b1)
case 3:p.p1.push("cycle")
s=4
return A.a(p.d3(),$async$b1)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b1,r)},
jx(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.C()}s=t.fD
r=q.k4.V(new A.xe(q,a),s)
q.k4=r.bq(new A.xf(),new A.xg(),s)
return r},
d3(){return this.jx(null)},
b6(a){return this.pK(a)},
pK(b8){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b6=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aM(n.dG()),$async$b6)
case 5:q=B.O
s=1
break
case 4:b3=t.N
a4=t.S
m=A.u(b3,a4)
l=A.u(b3,a4)
k=!1
j=!1
i=A.k([],t.s)
s=6
return A.a(n.aM(B.dv),$async$b6)
case 6:b3=b8==null
if(b3){a4=n.a.dy
a5=A.n(a4).i("T<1>")
a6=A.O(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.v()
s=14
return A.a(a5.dh(h),$async$b6)
case 14:g=c0
J.cZ(m,h,g.b)
if(g.f&&g.b>0)J.aL(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.D(b4)
if(a5 instanceof A.bN){n.jn()
s=9
break}else if(a5 instanceof A.bn){f=a5
k=!0
j=!0
n.ch=f.a}else throw b4
s=13
break
case 10:s=2
break
case 13:case 8:a6.length===a4||(0,A.q)(a6),++a7
s=7
break
case 9:s=n.as?15:16
break
case 15:s=17
return A.a(n.aM(B.aC),$async$b6)
case 17:q=n.ok=new A.bo(m,B.al,0,0,0,0,!0)
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
return A.a(b3.dB(e),$async$b6)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.V(l,c.a)
if(a5==null)a5=0
J.cZ(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.D(b5)
if(b3 instanceof A.bn){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aM(B.dw),$async$b6)
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
return A.a(b3.fu(),$async$b6)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b0("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b6)
case 36:a0=c0
if(J.ec(a0)&&typeof J.V(J.bZ(a0),"last_error")=="string"){b3=J.V(J.bZ(a0),"last_error")
b3.toString
n.ch=A.G(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.D(b6)
if(b3 instanceof A.bN)n.jn()
else if(b3 instanceof A.bn){a1=b3
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
return A.a(b3.br(),$async$b6)
case 41:a2=c0
k=k||a2.d
if(a2.d&&n.ch==null)n.ch="file sync failed"
p=2
s=40
break
case 38:p=37
b7=o.pop()
a3=A.D(b7)
k=!0
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.O
s=1
break}if(J.as(i)!==0)n.rF(i)
a9=k||a.f
b0=new A.aM(A.lp(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dG()
s=42
return A.a(n.aM(a9&&b1===B.bj?B.dx:b1),$async$b6)
case 42:q=n.ok=new A.bo(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b6,r)}}
A.xl.prototype={
$1(a){return this.a.vv()},
$S:40}
A.xd.prototype={
$1(a){return this.a.h0()},
$S:41}
A.xj.prototype={
$1(a){return this.a.h5(this.b)},
$S:41}
A.xi.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.O(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jk()}if(r||p.length===0)s.d3()
else s.jx(p)},
$S:0}
A.xh.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jx(this.b)},
$S:0}
A.xk.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aM(p.dG()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.d3(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.xe.prototype={
$1(a){return this.a.b6(this.b)},
$S:135}
A.xf.prototype={
$1(a){return B.O},
$S:136}
A.xg.prototype={
$1(a){return B.O},
$S:137}
A.d5.prototype={
l(a){return"MapFailure: "+this.a},
$iF:1}
A.eA.prototype={}
A.B8.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.B9.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.uV.prototype={}
A.dL.prototype={}
A.mh.prototype={}
A.zX.prototype={}
A.zV.prototype={}
A.yd.prototype={}
A.v1.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.v0(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:139}
A.uW.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.uX.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.uY.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.uZ.prototype={
$1(a){return a instanceof A.w?a:A.b9(a,t.X)},
$S:140}
A.v_.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hF(s,s.r,A.n(s).c),r=this.b,q=J.M(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:141}
A.vi.prototype={
f4(a){return this.uH(a)},
uH(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.CW.$0()
e=e.r
s=3
return A.a(e.wm("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f4)
case 3:o=c
n=t.ox
m=A.k([],n)
for(l=J.E(o);l.k();)m.push(A.IP(l.gn()))
l=A.aO(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.q)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.kw(e,l),$async$f4)
case 4:h=c
g=A.k([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.q)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.E(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f4,r)},
mZ(a){return this.a.a2(new A.vk(a),t.H)},
vS(a,b,c,d){return this.a.a2(new A.vl(c,d,b,a),t.H)}}
A.vk.prototype={
$1(a){return this.nG(a)},
nG(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vl.prototype={
$1(a){return this.nH(a)},
nH(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.pI.prototype={}
A.iP.prototype={}
A.jh.prototype={}
A.vn.prototype={
fM(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cI(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
eo(a,b,c){return this.wv(a,b,c)},
wv(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$eo=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aJ("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$eo)
case 3:p=e
o=J.M(p)
q=o.gF(p)?null:A.mz(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eo,r)},
bS(a,b,c){return this.wx(a,b,c)},
wx(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bS=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aJ("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bS)
case 3:p=e
o=J.M(p)
q=o.gF(p)?null:A.jv(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bS,r)},
bm(a,b,c,d,e,f,g,h,i,j,k,l){return this.tE(a,b,c,d,e,f,g,h,i,j,k,l)},
tE(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bm=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a5)throw A.b(A.DN("Record "+a2+"/"+a9+u.W))
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
return A.a(a8.Z("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bm)
case 5:s=6
return A.a(a8.Z("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bm)
case 6:s=7
return A.a(p.hr(a8,a2,a9),$async$bm)
case 7:s=8
return A.a(a8.Z(a2,"id = ?",[a9]),$async$bm)
case 8:q=B.bO
s=1
break
case 4:k=p.a.CW.$0()
j=a4?null:b2.w
if(j==null)j=p.fM()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
if(i!=null&&g==null)throw A.b(A.hc("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
l=t.N
f=A.aO(l)
e=a4?null:b2.r
if(e!=null)f.D(0,e)
f.D(0,a7)
d=A.O(f,f.$ti.c)
B.b.aF(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a6(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.i5(B.Z)
e=B.b.B(A.ae(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aE("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.Gt(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bm)
case 12:s=10
break
case 11:s=13
return A.a(a8.aE('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bm)
case 13:case 10:f=A.k(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.D(f,B.cH)
if(o)B.b.D(f,B.cv)
s=a3?14:16
break
case 14:a3=A.i5(B.Y)
l=B.b.B(A.ae(16,"?",!1,l),", ")
s=17
return A.a(a8.aE("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.GF(B.a6,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bm)
case 17:s=15
break
case 16:for(a3=f.length,a0=0,l="UPDATE lp_sync_row SET ";a0<a3;++a0){if(a0>0)l+=", "
l+='"'+f[a0]+'" = ?'}a3=l+' WHERE "store" = ? AND "record_id" = ?'
a1=["dirty",b,a+1,j,a1.b]
if(a4)B.b.D(a1,[i,h,g])
if(o)B.b.D(a1,[0,0,null])
a1.push(a2)
a1.push(a9)
s=18
return A.a(a8.aE(a3.charCodeAt(0)==0?a3:a3,a1),$async$bm)
case 18:case 15:q=new A.iP()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bm,r)},
hr(a,b,c){return this.tc(a,b,c)},
tc(a,b,c){var s=0,r=A.h(t.H)
var $async$hr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cB(a,b,c,!1),$async$hr)
case 2:return A.e(null,r)}})
return A.f($async$hr,r)},
f5(a,b){return this.uI(a,b)},
uI(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a2("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.O([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ai("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f5)
case 3:o=d
f=J.M(o)
if(f.gF(o)){q=B.cL
s=1
break}e=t.my
n=A.k([],e)
for(f=f.gu(o);f.k();)n.push(A.mz(f.gn()))
f=A.aO(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.q)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.kw(g,f),$async$f5)
case 4:j=d
i=A.k([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.q)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.E(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f5,r)},
kL(a){if(a.length===0)return A.b9(null,t.H)
return this.a.a2(new A.vt(this,a),t.H)},
aI(a,b){return this.rS(a,b)},
rS(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aI=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
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
return A.a(b.aJ("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 5:o=a9
n=J.M(o)
s=!(n.gX(o)&&!J.x(J.V(n.gG(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aJ(a,1,"id = ?",[a1]),$async$aI)
case 8:m=a9
n=J.M(m)
l=n.gX(m)?A.ce(a3,n.gG(m),a2.ay,a2.ch):null
s=9
return A.a(b.L(a,A.dr(a3,J.x(a5.h(0,"archived"),!0),a2.ay,a2.ch,a1,a5),"id = ?",[a1]),$async$aI)
case 9:a6.a_(new A.a1(a0,A.at([a1],t.N)))
k=A.bJ(l==null?B.j:l,a5)
k.H(0,"id")
a6.bb(new A.aT(a0,a1,B.ad,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aJ(a,1,"id = ?",[a1]),$async$aI)
case 10:j=a9
a5=J.M(j)
s=a5.gF(j)?11:12
break
case 11:s=13
return A.a(b.Z("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 13:s=14
return A.a(p.d0(b,a0,a1,a7.c,a4),$async$aI)
case 14:a6.a_(new A.a1(a0,A.at([a1],t.N)))
s=1
break
case 12:n=a2.ay
a2=a2.ch
i=A.ce(a3,a5.gG(j),n,a2)
h=A.ar(B.l.v(B.e.v(A.ah(A.bh(a3,i)))).a)
a5=a7.b
g=A.ar(B.l.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.Z("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 18:s=19
return A.a(p.d0(b,a0,a1,a7.c,a4),$async$aI)
case 19:a6.a_(new A.a1(a0,A.at([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aw(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bb(d,a5,f):A.u(a5,f)
s=23
return A.a(b.L(a,A.dr(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aI)
case 23:s=24
return A.a(b.Z("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 24:s=25
return A.a(p.d0(b,a0,a1,a7.c,a4),$async$aI)
case 25:a6.a_(new A.a1(a0,A.at([a1],a5)))
k=A.bJ(i,c)
k.H(0,"id")
a6.bb(new A.aT(a0,a1,B.ad,B.A,i,c,k))
s=21
break
case 22:g=A.ar(B.l.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aI)
case 28:a6.a_(new A.a1(a0,A.at([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aI,r)},
d0(a,b,c,d,e){return this.qw(a,b,c,d,e)},
qw(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d0=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d0)
case 2:s=3
return A.a(a.L(q.a.au(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d0)
case 3:return A.e(null,r)}})
return A.f($async$d0,r)},
wy(a,b,c,d,e){return this.a.a2(new A.vr(c,e,d,B.G,a,b),t.H)},
mY(a,b,c,d,e,f){return this.a.a2(new A.vq(this,c,f,b,a,d,e),t.H)},
fj(a,b,c,d,e){return this.mY(a,b,c,d,B.ao,e)},
mX(a,b,c){return this.a.a2(new A.vp(a,c,b),t.H)},
wG(){return this.a.a2(new A.vs(null),t.S)},
eZ(a,b,c,d,e,f,g){return this.tB(a,b,c,d,e,f,g)},
tB(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$eZ=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$eZ)
case 2:p=A.u(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$eZ)
case 3:return A.e(null,r)}})
return A.f($async$eZ,r)}}
A.vt.prototype={
$1(a){return this.nM(a)},
nM(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.aI(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.q)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vr.prototype={
$1(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vq.prototype={
$1(a){return this.nJ(a)},
nJ(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
A.vp.prototype={
$1(a){return this.nI(a)},
nI(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vs.prototype={
$1(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.k(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:142}
A.ed.prototype={
a4(){return"ApplyResult."+this.b}}
A.mK.prototype={}
A.w4.prototype={
dh(a){return this.wf(a)},
wf(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dh=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.iq(b4),$async$dh)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.Hf().ea(n)
if(m==null)A.t(A.bc('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aH(k)
k=l[2]
k.toString
i=A.aH(k)
k=l[3]
k.toString
h=A.aH(k)
k=l[4]
k.toString
g=A.aH(k)
k=l[5]
k.toString
f=A.aH(k)
k=l[6]
k.toString
e=A.aH(k)
l=l[7]
l.toString
d=A.aH(l)
if(i<1||i>12||g>23||f>59||e>59)A.t(A.bc('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.BZ(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.vW(k))A.t(A.bc('Bad timestamp "'+n+'"'))
o=A.MC(A.BZ(j,i,h,g,f,e,d).iS(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iu(B.c.bO(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.z
a4===$&&A.v()
s=6
return A.a(a4.fi(b4,null,a2,o,null,b),$async$dh)
case 6:a5=b6
a4=J.M(a5)
if(a4.gF(a5)){s=5
break}++a.ax
a6=p.qy(a5)
a7=k.h(0,b4)
if(a7==null)A.t(A.y(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.Df(a7.a,a5),$async$dh)
case 8:s=7
return A.a(b0.aV(new b1.wc(b2,p,b3,b6,a6),l),$async$dh)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mK(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dh,r)},
me(a,b){var s=B.a.a0(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a0(a.a,b.b)<=0},
t5(a,b){var s=B.a.a0(a.c,b.c)
if(s!==0)return s>0
return B.a.a0(a.a,b.a)>0},
qy(a){var s,r,q,p=J.aB(a),o=p.gG(a)
for(p=p.bi(a,1),s=p.$ti,p=new A.ao(p,p.gm(0),s.i("ao<Z.E>")),s=s.i("Z.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.t5(q,o))o=q}return o},
hS(a){return this.uW(a)},
uW(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aV(new A.w6(o,p,a),t.P),$async$hS)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)},
da(a,b){return this.uZ(a,b)},
uZ(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$da=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bF(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dy,e=n.b,d=A.a_(j),c=d.c,d=d.i("cu<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cu(j,0,200,d)
a2.iN(j,0,200,c)
a3=a2.eu(0)
a4=a3.length
b&1&&A.H(j,18)
A.be(0,a4,j.length)
j.splice(0,a4)
m=A.k([],a)
a5=A.k([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.z
a7===$&&A.v()
s=12
return A.a(a7.bW(l),$async$da)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.D(b1)
if(a7 instanceof A.cm){J.aL(m,l)
s=6
break}else if(a7 instanceof A.bN)throw b1
else if(a7 instanceof A.bn){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aL(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.q)(a3),++a6
s=5
break
case 7:s=J.as(m)!==0?13:14
break
case 13:s=15
return A.a(n.fl(b2,m),$async$da)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.t(A.y(a1))
b0=a9.a
a2=A.k([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.q)(a5),++a6)a2.push(A.Dg(b0,a5[a6]))
s=16
return A.a(i.aV(new A.w8(n,a2,b2,b0),h),$async$da)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$da,r)},
dR(a,b,c,d){return this.r0(a,b,c,d)},
r0(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dR=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.u(c,t.nw)
a=A.u(c,t.G)
o=p.a,n=o.ay,m=o.ch,o=o.dy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.T(a4,k,B.c.bO(i,0,j))
g=B.b.B(A.ae(h.length,"?",!1,c),", ")
j=[a2]
B.b.D(j,h)
a0=J
s=6
return A.a(a1.ai(u.m+g+")",j),$async$dR)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.G(e),A.jv(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.t(A.y(l))
a0=J
s=9
return A.a(a1.ci(d.a.a,"id IN ("+g+")",h),$async$dR)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.G(e),A.ce(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a4(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dR,r)},
mn(a,b,c,d,e){return this.a5(a,b,A.Dg(this.a.au(b).a,c),null,!1,d,e)},
tG(a,b,c){return this.mn(a,b,c,null,!1)},
a5(a,b,c,d,e,f,g){return this.tF(a,b,c,d,e,f,g)},
mm(a,b,c){return this.a5(a,b,c,null,!1,null,!1)},
tF(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return A.a(n.bJ(a4,a7,b2,a8,a9),$async$a5)
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
return A.a(n.bJ(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a5)
case 8:q=B.a8
s=1
break
case 7:g=a8.a
f=$.po()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bJ(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a5)
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
return A.a(g.bS(a4,b2,a8.a),$async$a5)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aJ(a6.a,1,"id = ?",[a8.a]),$async$a5)
case 19:c=b9
g=J.M(c)
d=g.gF(c)?null:A.ce(a7,g.gG(c),a5.ay,a5.ch)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dg(a4,a8.a,a8.e,b2),$async$a5)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.Hu(a4,a6.a,A.dr(a7,J.x(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9)),$async$a5)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.d5(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 26:b1.a_(new A.a1(b2,A.at([a8.a],t.N)))
b=A.bJ(B.j,a9)
b.H(0,"id")
b1.bb(new A.aT(b2,a8.a,B.at,B.ac,null,a9,b))
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
return A.a(n.c4(b1,b2,a8.a,a8.c,!1),$async$a5)
case 31:q=B.a9
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dr(a7,J.x(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9),"id = ?",[a8.a]),$async$a5)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.d5(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 33:b1.a_(new A.a1(b2,A.at([a8.a],t.N)))
b=A.bJ(d,a9)
b.H(0,"id")
b1.bb(new A.aT(b2,a8.a,B.at,B.A,d,a9,b))
q=B.a7
s=1
break
case 28:s=a===B.G||a===B.bl||a===B.a5?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.c4(b1,b2,a8.a,a8.c,!1),$async$a5)
case 38:q=B.a9
s=1
break
case 37:s=a===B.a5?39:40
break
case 39:s=41
return A.a(n.c4(b1,b2,a8.a,a8.c,!1),$async$a5)
case 41:q=B.a9
s=1
break
case 40:a0=A.bh(a7,d)
s=A.ah(a0)===i?42:43
break
case 42:s=44
return A.a(a4.Z("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a5)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.d5(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a5)
case 45:b1.a_(new A.a1(b2,A.at([a8.a],t.N)))
q=B.a7
s=1
break
case 43:l=null
p=47
a9=m
l=A.i4(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.D(b0)
s=a5 instanceof A.d5?50:52
break
case 50:k=a5
s=53
return A.a(n.bJ(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a5)
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
a9=A.Gr(l,a0,new A.mh(null,B.a_,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bw(a9,t.r),$async$a5)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eR(a4,b2,a8,a7,m,a0,l,a2),$async$a5)
case 57:s=58
return A.a(n.c4(b1,b2,a8.a,a8.c,!1),$async$a5)
case 58:a5=t.N
b1.a_(new A.a1(b2,A.at([a8.a],a5)))
b1.a_(new A.a1("lp_conflicts",A.at([a8.a],a5)))
q=B.bu
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dr(a7,J.x(a3.h(0,"archived"),!0),a5.ay,a5.ch,a9,a3),"id = ?",[a8.a]),$async$a5)
case 59:a5=a5.cx
a5===$&&A.v()
s=60
return A.a(a5.eZ(a4,b2,a8.a,h,i,a8.c,A.ah(a3)),$async$a5)
case 60:s=61
return A.a(n.t2(b1,b2,a8.a,a8.c),$async$a5)
case 61:b1.a_(new A.a1(b2,A.at([a8.a],t.N)))
b=A.bJ(d,a3)
b.H(0,"id")
b1.bb(new A.aT(b2,a8.a,B.ad,B.A,d,a3,b))
q=B.a7
s=1
break
case 35:q=B.a9
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a5,r)},
eR(a,b,c,d,e,f,g,h){return this.rp(a,b,c,d,e,f,g,h)},
rp(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eR=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bh(d,A.fe(d,c))
k=A.bJ(g,f)
j=A.O(k,A.n(k).c)
B.b.aF(j)
k=A.bJ(g,l)
p=A.O(k,A.n(k).c)
B.b.aF(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ah(g)
n=t.N
m=t.X
s=2
return A.a(a.cc(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ah(f),"remote_json",A.ah(l),"dirty_local",B.h.a6(j,null),"dirty_remote",B.h.a6(p,null),"detected_at",q.c.ay.$0()],n,m),B.R),$async$eR)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ah(l),"base_hash",A.ar(B.l.v(B.e.v(A.ah(A.bh(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eR)
case 3:return A.e(null,r)}})
return A.f($async$eR,r)},
bJ(a,b,c,d,e){return this.ri(a,b,c,d,e)},
ri(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bJ=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a6(d.d,null)}catch(a1){o=t.N
e=B.h.a6(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aC(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bJ)
case 2:j=q.a.cx
j===$&&A.v()
s=3
return A.a(j.bS(a,c,m),$async$bJ)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.M(o.mD(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aC(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bJ)
case 7:s=5
break
case 6:s=8
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bJ)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bJ,r)},
d5(a,b,c,d,e,f,g,h){return this.tb(a,b,c,d,e,f,g,!0)},
tb(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$d5=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aC(0,"lp_sync_row",o),$async$d5)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$d5)
case 6:case 3:return A.e(null,r)}})
return A.f($async$d5,r)},
c4(a,b,c,d,e){return this.t3(a,b,c,d,e)},
t2(a,b,c,d){return this.c4(a,b,c,d,!0)},
t3(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c4=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.u(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c4)
case 2:s=3
return A.a(p.L(q.a.au(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c4)
case 3:if(g>0)a.a_(new A.a1(b,A.at([c],o)))
return A.e(null,r)}})
return A.f($async$c4,r)},
fl(a,b){return this.vT(a,b)},
vT(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bF(b,!0,t.N)
n=A.a_(o),m=n.c,n=n.i("cu<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cu(o,0,500,n)
i.iN(o,0,500,m)
h=i.eu(0)
g=h.length
l&1&&A.H(o,18)
A.be(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aV(new A.wa(p,a,h),j),$async$fl)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fl,r)}}
A.wc.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.wb(s.a,r,s.c,s.d,s.e),t.P)},
$S:20}
A.wb.prototype={
$1(a){return this.nR(a)},
nR(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.au(a1)
a3=A.k([],t.s)
for(p=q.d,o=J.aB(p),n=o.gu(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dR(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aO(t.N)
a2=o.gu(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.me(i,c)){s=3
break}p=i.a
s=j.E(0,p)?5:7
break
case 5:s=8
return A.a(a.mm(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.me(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.ev(b,a1,e,f),$async$$1)
case 10:d.a=new A.jf(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.w6.prototype={
$0(){var s=this.b
return s.a.a2(new A.w5(this.a,s,this.c),t.P)},
$S:20}
A.w5.prototype={
$1(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.cx
k===$&&A.v()
o=p.c
n=o.b
s=3
return A.a(k.bS(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.tG(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a0(o.c,k)<=0){s=1
break}s=7
return A.a(l.mn(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.w8.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.w7(r,s.b,s.c,s.d),t.P)},
$S:20}
A.w7.prototype={
$1(a){return this.nP(a)},
nP(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.k([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dR(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aO(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.E(0,g)?6:8
break
case 6:s=9
return A.a(o.mm(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a5(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.t(0,g)
case 7:case 4:p.length===e||(0,A.q)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wa.prototype={
$0(){var s=this.a
return s.a.a2(new A.w9(s,this.b,this.c),t.P)},
$S:20}
A.w9.prototype={
$1(a){return this.nQ(a)},
nQ(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.au(g).a
e=h.au(g).a.a
d=q.c
c=t.N
b=B.b.B(A.ae(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.u(c,t.G)
a1=J
s=2
return A.a(i.ci(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.ay,h=h.ch
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.G(m),A.ce(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.m(["access_state","hidden"],c,h)
o=[g]
B.b.D(o,d)
s=5
return A.a(i.L("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.L(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.a_(new A.a1(g,A.uB(d,A.a_(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.q)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dI(null,null,c,h)
p.D(0,j)
p.j(0,"hidden",!0)
a2.bb(new A.aT(g,k,B.at,B.c4,j,p,B.dl))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b3.prototype={}
A.wd.prototype={
fu(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fu=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.cx
f===$&&A.v()
s=3
return A.a(f.f5(25,p.c.ay.$0()),$async$fu)
case 3:o=b
f=J.M(o)
if(f.gF(o)){q=B.a3
s=1
break}if(p.f){q=p.b8(o)
s=1
break}f=f.gu(o),n=B.a3
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dS(f.gn()),$async$fu)
case 6:m=b
l=m.a
k=m.b
j=m.c
i=m.d
h=m.e
g=n.f||m.f
n=new A.b3(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
dS(a){return this.rb(a)},
rb(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.cx
l===$&&A.v()
m=m.r
s=3
return A.a(l.eo(m,a.a,a.b),$async$dS)
case 3:o=c
if(o==null){q=B.a3
s=1
break}s=4
return A.a(l.bS(m,o.a,o.b),$async$dS)
case 4:n=c
if(n==null){q=B.a3
s=1
break}if(o.e==null){q=p.r9(o,n)
s=1
break}q=p.jp(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dS,r)},
bG(a,b,c,d,e){return this.qn(a,b,c,d,e)},
qm(a,b,c,d){return this.bG(a,b,c,!1,d)},
qk(a,b,c){return this.bG(a,b,c,!1,!1)},
ql(a,b,c,d){return this.bG(a,b,c,d,!1)},
qn(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bG=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bG)
case 7:k=g
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.D(i)
s=k instanceof A.bN?8:10
break
case 8:n.e.$0()
q=B.an
s=1
break
s=9
break
case 10:s=k instanceof A.ck?11:13
break
case 11:k=n.a.cx
k===$&&A.v()
s=14
return A.a(k.mX("forbidden_push",a.b,a.a),$async$bG)
case 14:q=B.d4
s=1
break
s=12
break
case 13:s=k instanceof A.eD?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.cX(a,"validation_push",m.a),$async$bG)
case 20:q=B.M
s=1
break
case 19:q=n.cs(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cm){q=n.dM(a,b,!e)
s=1
break}else if(k instanceof A.bn){l=k
q=n.cs(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bG,r)},
jo(a,b,c){return this.ra(a,b,c)},
r9(a,b){return this.jo(a,b,!1)},
ra(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jo=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bG(a,b,new A.wf(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jo,r)},
jt(a,b,c){return this.rq(a,b,c)},
rq(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jt=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qm(a,b,new A.wk(p,a,p.a.au(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jt,r)},
jp(a,b){return this.rd(a,b)},
rd(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qk(a,b,new A.wi(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jp,r)},
d1(a,b,c,d){return this.rf(a,b,c,d)},
re(a,b,c){return this.d1(a,b,c,!1)},
rf(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d1=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.l2(a,c)
j=n.a.au(a.a).a
i=a.d
s=A.ar(B.l.v(B.e.v(A.ah(A.bh(j,A.fe(j,c))))).a)===A.ar(B.l.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eP(a,c),$async$d1)
case 5:q=B.a4
s=1
break
case 4:m=null
l=null
p=7
m=A.i4(b.r)
l=A.i4(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.D(f)
s=i instanceof A.d5?10:12
break
case 10:k=i
s=13
return A.a(n.cX(a,"corrupt_payload",k.a),$async$d1)
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
return A.a(n.dO(a,b,c,j,m,l),$async$d1)
case 14:g=a0
if(g==null){q=B.bc
s=1
break}q=n.bG(a,b,new A.wg(n,a,A.ah(A.bh(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d1,r)},
b8(a){return this.r8(a)},
r8(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b8=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.k([],t.k1)
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
return A.a(a2.eo(a0,a1.a,a1.b),$async$b8)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bS(a0,m.a,m.b),$async$b8)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.t(A.y('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.z
a5===$&&A.v()
s=11
return A.a(a5.bW(a1),$async$b8)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.D(c8)
s=a1 instanceof A.cm?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lA(m,l),$async$b8)
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
case 14:s=a1 instanceof A.bN?18:20
break
case 18:n.e.$0()
q=B.an
s=1
break
s=19
break
case 20:s=a1 instanceof A.ck?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.mX("forbidden_push",m.b,a1),$async$b8)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bn?25:27
break
case 25:i=a1
s=28
return A.a(n.cs(m,l,i),$async$b8)
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
if(a1!==a5)A.t(A.ex('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a2("")
A.cg(a7,A.bh(a4,A.fe(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c1()
a5=A.cX(a8)
a5.t(0,a1)
a5.q()
a9=A.ar(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c1()
a1=A.cX(a8)
a1.t(0,a5)
a1.q()
s=a9===A.ar(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eP(m,k),$async$b8)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.i4(l.r)
f=A.i4(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.D(c9)
s=a1 instanceof A.d5?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fj(e.a,a5,"corrupt_payload",m.d,a1),$async$b8)
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
return A.a(n.dO(m,l,k,a4,g,f),$async$b8)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a2("")
A.cg(a7,A.bh(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.fW(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.fW(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.c3(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$b8)
case 48:b8=d2
c2+=b8.a
c3+=b8.b
c4+=b8.c
c6+=b8.e
if(b8.f){q=new A.b3(c2,c3,c4,c5,c6,!0)
s=1
break}case 46:b5=b7
s=45
break
case 47:case 44:q=new A.b3(c2,c3,c4,c5,c6,!1)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b8,r)},
dO(a,b,c,d,e,f){return this.qz(a,b,c,d,e,f)},
qz(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dO=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.fe(d,c)
n=A.Gr(e,f,new A.mh(null,B.a_,!1),a.b,A.bh(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bw(n,t.r),$async$dO)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hi(a,b,c,m,e,f),$async$dO)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
c3(a,b,c){return this.rM(a,b,c)},
rM(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c3=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.z
a7===$&&A.v()
s=7
return A.a(a7.ft(b9),$async$c3)
case 7:m=c3
a7=t.N
l=A.u(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.q)(b9),++a9){k=b9[a9]
J.cZ(l,k.a,k)}j=l
i=A.aO(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aL(i,h.a)){l=A.bc("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.J(h.a)){l=A.bc("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.k([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.V(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.ji(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c1()
b2=A.cX(b1)
b2.t(0,b0)
b2.q()
b2=A.ar(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aL(g,new A.jh(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
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
return A.a(a8.fj(b4,b2,b3,e.d,b0),$async$c3)
case 13:++b7
case 11:s=8
break
case 9:l=a7.cx
l===$&&A.v()
s=14
return A.a(l.kL(g),$async$c3)
case 14:l=b6
a7=b7
q=new A.b3(l,a7,0,0,0,!1)
s=1
break
p=2
s=6
break
case 4:p=3
b8=o.pop()
l=A.D(b8)
s=l instanceof A.dw?15:17
break
case 15:q=n.bZ(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.ck?18:20
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
return A.a(n.dS(n.lH(a0)),$async$c3)
case 24:a1=c3
b6+=a1.a
b7+=a1.b
d+=a1.c
c+=a1.d
b+=a1.e
a=a||a1.f
case 22:b9.length===l||(0,A.q)(b9),++a9
s=21
break
case 23:q=new A.b3(b6,b7,d,c,b,a)
s=1
break
s=19
break
case 20:s=l instanceof A.bN?25:27
break
case 25:n.e.$0()
q=B.an
s=1
break
s=26
break
case 27:s=l instanceof A.bn?28:30
break
case 28:a2=l
a3=a2 instanceof A.db?a2:new A.eO("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.cx
b0===$&&A.v()
s=34
return A.a(b0.bS(a8,a4.b,a4.c),$async$c3)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cs(n.lH(a4),a5,a3),$async$c3)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.q)(b9),++a9
s=31
break
case 33:q=new A.b3(b6,b7,0,0,0,!0)
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
return A.f($async$c3,r)},
bZ(a,b,c){return this.p_(a,b,c)},
p_(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bZ=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.M(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.cx
h===$&&A.v()
b3=g.b
s=5
return A.a(h.fj("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bZ)
case 5:q=B.M
s=1
break
case 4:a0=B.c.M(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.T(b5,0,a0),b3.b5(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.z
a6===$&&A.v()
s=13
return A.a(a6.ft(j),$async$bZ)
case 13:i=b9
h=A.u(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.cZ(h,g.a,g)}f=h
e=A.aO(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aL(e,d.a)){a6=A.bc("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.J(d.a)){a6=A.bc("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.V(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.ji(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dT(a7,a8,a9,b0==null?b.d:b0),$async$bZ)
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
return A.a(a7.fj(b1,a9,b0,b.d,a8),$async$bZ)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.D(b4)
s=a6 instanceof A.dw?21:23
break
case 21:s=24
return A.a(n.bZ(j,b6,b7),$async$bZ)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bn){k=!0
s=7
break}else throw b4
case 22:s=12
break
case 9:s=2
break
case 12:case 7:++a5
s=6
break
case 8:q=new A.b3(m,l,0,0,0,k)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bZ,r)},
ji(a,b){var s=b==null?a.d:b
return new A.co(a.b,a.c,B.v,s,a.e,A.ar(B.l.v(B.e.v(a.d)).a),B.q,a.a,0,null)},
lH(a){return this.ji(a,null)},
dT(a,b,c,d){return this.rR(a,b,c,d)},
eP(a,b){return this.dT(a,b,null,null)},
rR(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dT=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(a.a).a
n=A.fe(o,b)
m=d==null
l=m?A.ah(A.bh(o,n)):d
p=p.cx
p===$&&A.v()
s=2
return A.a(p.kL(A.k([new A.jh(a,l,b.c,A.ar(B.l.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dT)
case 2:return A.e(null,r)}})
return A.f($async$dT,r)},
l2(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.ex('record id "'+s+'" does not match requested "'+r+'"'))},
cs(a,b,c){return this.rA(a,b,c)},
rA(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cs=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.db?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.cx
o===$&&A.v()
s=5
return A.a(o.mY(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$cs)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.mE(l,k)
m=p.a.cx
m===$&&A.v()
s=6
return A.a(m.wy(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$cs)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cs,r)},
cX(a,b,c){return this.pD(a,b,c)},
pC(a,b){return this.cX(a,b,null)},
pD(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.cx
o===$&&A.v()
p=c==null?b:c
s=2
return A.a(o.fj(p,a.b,b,a.d,a.a),$async$cX)
case 2:return A.e(null,r)}})
return A.f($async$cX,r)},
dM(a,b,c){return this.qf(a,b,c)},
lA(a,b){return this.dM(a,b,!0)},
qf(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dM=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.au(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:m=null
l=null
p=7
m=A.i4(b.r)
l=A.i4(a.d)
p=2
s=9
break
case 7:p=6
h=o.pop()
i=A.D(h)
s=i instanceof A.d5?10:12
break
case 10:k=i
s=13
return A.a(n.cX(a,"corrupt_payload",k.a),$async$dM)
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
return A.a(n.h3(a,b,m,l),$async$dM)
case 14:q=B.bc
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dM,r)},
h3(a,b,c,d){return this.pS(a,b,c,d)},
pS(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$h3=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bJ(c,d)
n=A.O(o,A.n(o).c)
B.b.aF(n)
p=b.r
if(p==null)p=A.ah(c)
s=2
return A.a(q.a.a2(new A.we(q,a,p,d,n),t.P),$async$h3)
case 2:return A.e(null,r)}})
return A.f($async$h3,r)},
hi(a,b,c,d,e,f){return this.ro(a,b,c,d,e,f)},
ro(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hi=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.au(a.a).a
m=A.bh(n,A.fe(n,c))
l=A.bJ(e,f)
k=A.O(l,A.n(l).c)
B.b.aF(k)
l=A.bJ(e,m)
p=A.O(l,A.n(l).c)
B.b.aF(p)
s=2
return A.a(o.a2(new A.wj(q,a,b,e,f,m,k,p,n,c),t.P),$async$hi)
case 2:return A.e(null,r)}})
return A.f($async$hi,r)}}
A.wf.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.hL(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eP(k,m),$async$$0)
case 8:q=B.a4
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.D(h) instanceof A.en){q=n.a.jt(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:19}
A.wk.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bW(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.pC(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.ar(B.l.v(B.e.v(A.ah(A.bh(l,A.fe(l,o))))).a)===A.ar(B.l.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eP(m,o),$async$$0)
case 9:q=B.a4
s=1
break
case 8:q=n.d1(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.wi.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bW(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lA(m,p.c)
s=1
break}n.l2(m,o)
if(o.c===m.e){l=p.c
q=n.ql(m,l,new A.wh(n,m,o,l),!0)
s=1
break}q=n.re(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.wh.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.fH(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eP(k,m),$async$$0)
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
$S:19}
A.wg.prototype={
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
return A.a(l.fH(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dT(j,b,p.e.a,m),$async$$0)
case 3:q=B.a4
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.we.prototype={
$1(a){return this.nS(a)},
nS(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cc(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ah(q.d),"remote_json",A.ah(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a6(q.e,null),"dirty_remote",B.h.a6(B.q,null),"detected_at",q.a.c.ay.$0()],k,j),B.R),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a_(new A.a1(n,A.at([m],k)))
a.a_(new A.a1("lp_conflicts",A.at([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wj.prototype={
$1(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=q.b
j=k.a
k=k.b
p=q.c.r
if(p==null)p=A.ah(q.d)
o=q.f
n=t.N
m=t.X
s=2
return A.a(l.cc(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ah(q.e),"remote_json",A.ah(o),"dirty_local",B.h.a6(q.r,null),"dirty_remote",B.h.a6(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.R),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ah(o),"base_hash",A.ar(B.l.v(B.e.v(A.ah(A.bh(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a_(new A.a1(j,A.at([k],n)))
a.a_(new A.a1("lp_conflicts",A.at([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.c9.prototype={
a4(){return"SyncEngineState."+this.b}}
A.hg.prototype={}
A.xa.prototype={
gl4(){return 36},
dB(a){return this.oB(a)},
oB(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dB=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.k([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dy,g=new A.bE(g,g.r,g.e,A.n(g).i("bE<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.ir(m),$async$dB)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gl4():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.ak(c.a+1,n.gl4())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bE(m,a),$async$dB)
case 13:a5.aL(a6,a9)
case 11:++j
s=10
break
case 12:if(A.nE(h)!=null)A.t(A.y(u.L))
b=h.b
b===$&&A.v()
s=14
return A.a(b.aW(new A.xb(c,n,m,a3),B.p,f),$async$dB)
case 14:p=2
s=8
break
case 6:p=5
a4=o.pop()
i=A.D(a4)
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
return A.f($async$dB,r)},
bE(a,b){return this.oA(a,b)},
oA(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bE=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.R("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aO(t.N)
m=B.c.iu(B.c.bO(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.z
g===$&&A.v()
s=5
return A.a(g.fi(a4,B.cP,h,null,o,m),$async$bE)
case 5:f=a7
g=J.M(f)
if(g.gF(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.k([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hh(a4,e),$async$bE)
case 6:c=a7
b=A.k([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aN||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.da(a4,b),$async$bE)
case 9:i+=b.length
case 8:h=g.ga1(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ai("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bE)
case 10:a1=a7
a2=A.k([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.G(a)
if(!n.E(0,a)){if(J.x(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fl(a4,a2),$async$bE)
case 13:case 12:s=14
return A.a(k.ai("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bE)
case 14:a3=a7
k=J.M(a3)
s=k.gX(a3)?15:16
break
case 15:l=A.k([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.G(g))}s=17
return A.a(j.da(a4,l),$async$bE)
case 17:case 16:q=new A.hg(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bE,r)},
hh(a,b){return this.r3(a,b)},
r3(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.u(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.T(b,n,B.c.bO(l,0,m))
j=B.b.B(A.ae(k.length,"?",!1,g),", ")
m=[a]
B.b.D(m,k)
e=J
s=6
return A.a(o.ai(u.m+j+")",m),$async$hh)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.G(h),A.jv(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)}}
A.xb.prototype={
$1(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.ew(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bn.prototype={
l(a){return A.dt(this).l(0)+": "+this.a},
$iF:1}
A.eO.prototype={}
A.db.prototype={}
A.h5.prototype={}
A.bN.prototype={}
A.ck.prototype={}
A.cm.prototype={}
A.eD.prototype={}
A.eF.prototype={}
A.en.prototype={}
A.dw.prototype={}
A.he.prototype={
gm(a){return this.b}}
A.cM.prototype={}
A.fW.prototype={}
A.jg.prototype={}
A.kQ.prototype={
a4(){return"BackendHintKind."+this.b}}
A.cD.prototype={}
A.Bl.prototype={
$2(a,b){return B.a.ik(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:145}
A.nx.prototype={
gnb(){return 1}}
A.xc.prototype={
mE(a,b){var s,r
if(b!=null){s=this.qV(b)
if(A.au(s))return A.d0(0,0,s<0?0:s)
if(s instanceof A.aM){r=s.a-this.ay.$0()
return r<=0?B.D:A.d0(0,r,0)}return B.au}return A.Gk(a,B.au,B.S,this.at)},
mD(a){return this.mE(a,null)},
qV(a){var s=B.a.cj(a),r=A.jd(s,null)
if(r!=null)return r
return A.Jo(s)}}
A.jf.prototype={}
A.jt.prototype={}
A.xn.prototype={
iq(a){return this.wu(a)},
wu(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$iq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.em("lp_sync_state",A.k(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$iq)
case 3:m=c
l=J.M(m)
if(l.gF(m)){q=null
s=1
break}o=A.a6(J.V(l.gG(m),"cursor_updated"))
n=A.a6(J.V(l.gG(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jf(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iq,r)},
ev(a,b,c,d){return this.xj(a,b,c,d)},
xj(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ev=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aJ("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ev)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$ev)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$ev)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ev,r)},
ir(a){return this.ww(a)},
ww(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$ir=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.em("lp_sync_state",A.k(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$ir)
case 3:n=c
m=J.M(n)
if(m.gF(n)){q=B.ds
s=1
break}o=A.bf(J.V(m.gG(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jt(o,A.bf(J.V(m.gG(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ir,r)},
ew(a,b,c,d){return this.xn(a,b,c,d)},
xn(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ew=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aJ("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$ew)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$ew)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$ew)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ew,r)},
hH(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b0("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hH)
case 3:l=b
k=J.M(l)
j=k.gF(l)?B.j:k.gG(l)
k=A.bf(j.h(0,"pending"))
if(k==null)k=0
o=A.bf(j.h(0,"conflicts"))
if(o==null)o=0
n=A.bf(j.h(0,"hidden"))
if(n==null)n=0
m=A.bf(j.h(0,"blocked"))
q=new A.oE([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)}}
A.cQ.prototype={
a4(){return"SyncState."+this.b}}
A.i9.prototype={
a4(){return"AccessState."+this.b}}
A.fT.prototype={
a4(){return"OutboxKind."+this.b}}
A.j9.prototype={
a4(){return"OpQueueKind."+this.b}}
A.BG.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.cP.prototype={}
A.xm.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
i=j.h(0,"record_id")
i.toString
A.G(i)
i=A.a6(j.h(0,"remote_updated"))
s=A.bf(j.h(0,"last_seen_at"))
r=A.a6(j.h(0,"base_updated"))
A.a6(j.h(0,"base_hash"))
q=A.a6(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fx(B.cz,A.G(p))
A.Gf(j.h(0,"dirty_fields"))
o=A.bf(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fx(B.cx,A.G(n))
A.a6(j.h(0,"op_id"))
m=A.bf(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.bf(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.bf(j.h(0,"schema_ver"))
return new A.cP(i,s,r,q,p,o,n,m,l,k)},
$S:146}
A.co.prototype={}
A.vo.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.G(i)
s=j.h(0,"record_id")
s.toString
A.G(s)
r=j.h(0,"kind")
r.toString
r=A.fx(B.cI,A.G(r))
q=j.h(0,"payload_json")
q.toString
A.G(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Gf(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.G(m)
l=j.h(0,"created_at")
l.toString
A.aq(l)
k=j.h(0,"updated_at")
k.toString
A.aq(k)
return new A.co(i,s,r,q,p,o,n,m,l,A.a6(j.h(0,"depends_on_op")))},
$S:147}
A.eC.prototype={}
A.vj.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.aq(l)
l=m.h(0,"op_id")
l.toString
A.G(l)
s=m.h(0,"store")
s.toString
A.G(s)
r=m.h(0,"record_id")
r.toString
A.G(r)
q=m.h(0,"kind")
q.toString
q=A.fx(B.cD,A.G(q))
p=m.h(0,"payload_json")
p.toString
A.G(p)
o=m.h(0,"state")
o.toString
A.G(o)
o=A.bf(m.h(0,"attempt_count"))
if(o==null)o=0
A.bf(m.h(0,"next_retry_at"))
A.a6(m.h(0,"last_error"))
n=A.a6(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.aq(m)
return new A.eC(l,s,r,q,p,o,n)},
$S:148}
A.BE.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:51}
A.BF.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.G(s)},
$S:51}
A.bG.prototype={
a_(a){this.c.push(a)
this.a.y.r+=a.b.a},
bb(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
by(a){var s=this.a
return new A.fo(s,s.au(a),new A.iv(this.b),this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.y("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cA(o,a,b)},
cA(a,b,c){return this.tj(a,b,c,c)},
tj(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cA=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cA)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.y
k=e.r
p=5
d=A.CE(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.pk(new A.xx(a3,j,a4),null,A.m([$.kB(),j],f,f),a4.i("A<0>")),$async$cA)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cA)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cA)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cA)
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
if(a>m)B.b.kq(h,m,a)
a=g.length
if(a>l)B.b.kq(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cA,r)}}
A.xx.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.A1.prototype={}
A.lt.prototype={
a4(){return"DurabilityClass."+this.b}}
A.xp.prototype={
aW(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.C,t._)
r.c.push(new A.hw(a,new A.aI(s,t.jk)))
return s.V(new A.xw(c),c)}return this.rX(a,b,c)},
rX(a,b,c){var s,r,q,p=this
if(p.a.at.a>0){s=p.c
if(s!=null)s.k0()}s=A.k([],t.i4)
r=new A.ob(p,b,s)
p.c=r
r.wH()
q=new A.w($.C,t._)
s.push(new A.hw(a,new A.aI(q,t.jk)))
return q.V(new A.xs(c),c)},
ws(a,b){var s,r=this.a
if(r.at.a>0){s=this.c
if(s!=null)s.k0()}return r.e.aV(new A.xv(this,a,b),b)},
qD(){if(++this.d<64)return
this.d=0
A.cR(B.D,new A.xr(this))}}
A.xw.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xs.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xv.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.xu(s,this.b,r),r)},
$S(){return this.c.i("A<0>()")}}
A.xu.prototype={
$1(a){return this.nW(a,this.c)},
nW(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.CE(p.a.a.a,a,A.k([],t.gi),!0,null)
n=p.c
m=t.X
q=A.pk(new A.xt(p.b,o,n),null,A.m([$.kB(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("A<0>(r2)")}}
A.xt.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.xr.prototype={
$0(){this.a.a.a.iy().mv(new A.xq())},
$S:0}
A.xq.prototype={
$1(a){},
$S:23}
A.ob.prototype={
wH(){var s,r,q=this,p=new A.aI(new A.w($.C,t.D),t.h)
q.e=p
s=q.a.a
s.e.aV(new A.yQ(q,p),t.H)
r=s.at
s=q.gv4()
if(r.a>0)A.cR(r,s)
else A.cR(B.D,s)},
k0(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.an()},
cF(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cF=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.f;++b2.b
b2.c+=b1}b3=new A.jq()
$.kz()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aX&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.ni("PRAGMA synchronous=FULL",null),$async$cF)
case 5:b1.b="FULL"
case 4:i=A.k([],t.gi)
h=A.k([],t.eb)
g=A.k([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.yP(m,i,h,l,g),t.P),$async$cF)
case 10:for(b5=g,b6=b5.length,b7=0;b7<b5.length;b5.length===b6||(0,A.q)(b5),++b7){f=b5[b7]
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
if((b8.a.a&30)!==0)A.t(A.y("Future already completed"))
b8.al(A.f7(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.t(A.y("Future already completed"))
b8.aD(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dy,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.vB(a0.b)
b6.jV(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a1=f[b7]
b6.uK(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.D(c2)
a3=A.ac(c2)
for(f=g,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a4=f[b7]
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
if((b6.a.a&30)!==0)A.t(A.y("Future already completed"))
b6.al(A.f7(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.t(A.y("Future already completed"))
b6.al(A.f7(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.ni("PRAGMA synchronous=NORMAL",null),$async$cF)
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
a4=k.guJ();++f.a
f.d+=a4
b1.qD()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.q)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.t(A.y("Future already completed"))
a4.al(A.f7(new A.bl("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cF,r)}}
A.yQ.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cF(),$async$$0)
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
A.yP.prototype={
$1(a){return this.nX(a)},
nX(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.CE(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.pk(new A.yN(a,a0),null,A.m([$.kB(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.f3([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.D(a1)
l=A.ac(a1)
o.e.push(new A.f3([B.b.gap(a.c),null,m,l]))
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
return A.a(A.pk(new A.yO(a0,k),null,A.m([$.kB(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.f3([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.D(a2)
h=A.ac(a2)
e.push(new A.f3([k,null,i,h]))
s=16
break
case 13:s=1
break
case 16:case 11:a.length===g||(0,A.q)(a),++b
s=10
break
case 12:case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:43}
A.yN.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:52}
A.yO.prototype={
$0(){return this.a.a2(new A.yM(this.b),t.z)},
$S:52}
A.yM.prototype={
$1(a){return this.a.a.$1(a)},
$S:151}
A.hw.prototype={}
A.mO.prototype={
kM(a){return a.a===this.w.b.a},
f9(){var s=this.w
return s.e9(s.w==null&&!s.x?50:null).V(new A.wz(),t.J)},
mx(a){return A.Mf(a,new A.wy(this),this.w.r.length!==0)},
n0(a){var s=this.x
return s==null?null:s.t(0,a)},
ki(a,b){var s=this.x
return s==null?null:s.bx(a,b)},
iK(){var s=this.x=A.x0(this.gjT(),new A.wA(this),null,!1,t.J)
return new A.b5(s,A.n(s).i("b5<1>"))},
f2(){this.kS()
var s=this.x
if(s!=null)s.q()}}
A.wz.prototype={
$1(a){return a.a},
$S:152}
A.wy.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.wA.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.mw.prototype={
kM(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.E(0,this.x))return!1
return!0},
f9(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$f9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.v()
o=p.w.a
s=3
return A.a(l.gbn().b.aJ(o.a,1,"id = ?",[p.x]),$async$f9)
case 3:n=b
l=J.M(n)
if(l.gF(n)){q=null
s=1
break}q=A.ce(o,l.gG(n),m.ay,m.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
mx(a){return a==null?"<null>":A.ar(B.l.v(B.e.v(A.ah(a))).a)},
n0(a){var s=this.y
return s==null?null:s.t(0,a)},
ki(a,b){var s=this.y
return s==null?null:s.bx(a,b)},
iK(){var s=this.y=A.x0(this.gjT(),new A.vh(this),null,!1,t.b)
return new A.b5(s,A.n(s).i("b5<1>"))},
f2(){this.kS()
var s=this.y
if(s!=null)s.q()}}
A.vh.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fn.prototype={
ki(a,b){},
az(){var s=this.a.a$.a
this.c=new A.b0(s,A.n(s).i("b0<1>")).aN(this.gqF())},
qG(a){var s,r=this
if(!r.kM(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.C()
r.d=A.cR(r.b,r.gmh())},
e0(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$e0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.y;++i.y
q=3
s=6
return A.a(n.f9(),$async$e0)
case 6:m=b
l=n.mx(m)
if(!J.x(l,n.r)){n.r=l;++i.z
n.n0(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.D(g)
j=A.ac(g)
n.ki(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.C()
n.d=A.cR(n.b,n.gmh())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$e0,r)},
f2(){var s=this.d
if(s!=null)s.C()
s=this.c
if(s!=null)s.C()}}
A.y8.prototype={
aV(a,b){var s,r=this;++r.b
r.lM()
s=new A.w($.C,b.i("w<0>"))
r.a=r.a.V(new A.y9(r,new A.aI(s,b.i("aI<0>")),a),t.H)
return s},
lM(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.y9.prototype={
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
m=A.D(i)
l=A.ac(i)
n.b.c7(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lM()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:41}
A.hq.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.xY.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.eB)},
$S:44}
A.nU.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.xV.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.je.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iF:1}
A.xT.prototype={
eM(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eM=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.i6()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a5(n.getDirectory(),l),$async$eM)
case 7:m=b
s=8
return A.a(A.a5(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eM)
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
return A.f($async$eM,r)},
dN(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eM(),$async$dN)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dN,r)},
bl(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bl=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dN(),$async$bl)
case 3:if(!b){q=null
s=1
break}p=5
m=A.i6()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a5(m.getDirectory(),k),$async$bl)
case 8:l=b
s=9
return A.a(A.a5(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bl)
case 9:k=b
q=new A.oz(k)
s=1
break
p=2
s=7
break
case 5:p=4
i=o.pop()
q=null
s=1
break
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bl,r)},
dj(a,b,c){return this.wi(a,b,c)},
ip(a){return this.dj(a,null,null)},
wi(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dj=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.yx(A.k([],t.bs))
s=3
return A.a(A.kv(a,b,c,null,new A.xU(o)),$async$dj)
case 3:n=e
m=o.ku()
s=4
return A.a(p.bl(),$async$dj)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.aZ(k,m),$async$dj)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dj,r)},
cJ(a){return this.w3(a)},
w3(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cJ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.l_(a)
j=n.b
if(j.J(a)){j=j.h(0,a)
j.toString
q=A.Cx(j,t.L)
s=1
break}s=3
return A.a(n.bl(),$async$cJ)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.en(a),$async$cJ)
case 10:l=c
j=A.Cx(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.D(h)
if(!(k instanceof A.fk))throw A.b(A.DF(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.y("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cJ,r)},
d8(a){return this.u7(a)},
u7(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$d8=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.l_(a)
o.b.H(0,a)
s=2
return A.a(o.bl(),$async$d8)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.H(0,a),$async$d8)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.D(k)
if(!(m instanceof A.fk))throw A.b(A.DF(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$d8,r)},
bo(a){return this.uT(a)},
uT(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.l_(a)
if(p.b.J(a)){q=!0
s=1
break}s=3
return A.a(p.bl(),$async$bo)
case 3:o=c
if(o!=null){q=o.bo(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bo,r)},
bh(a){return this.oe(a)},
oe(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.l_(a)
o=p.b
if(o.J(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bl(),$async$bh)
case 3:n=c
if(n!=null){q=n.bh(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bh,r)},
e5(a){return this.tO(a)},
tO(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bl(),$async$e5)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.ef(),$async$e5)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.Hz(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.H(0,l),$async$e5)
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
return A.f($async$e5,r)},
fg(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fg=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.d4(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bl(),$async$fg)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.ef(),$async$fg)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.Dj()
if(l.b.test(m))J.aL(i,m)
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
j=A.O(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fg,r)}}
A.xU.prototype={
$1(a){return this.a.t(0,a)},
$S:14}
A.oz.prototype={
en(a){return this.wt(a)},
wt(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$en=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),i),$async$en)
case 7:m=c
s=8
return A.a(A.a5(m.getFile(),i),$async$en)
case 8:l=c
s=9
return A.a(A.a5(l.arrayBuffer(),t.a),$async$en)
case 9:k=c
i=A.bT(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.D(g)
if(A.EI(j))throw A.b(A.DE(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$en,r)},
aZ(a,b){return this.xi(a,b)},
xi(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.m
n=A
s=3
return A.a(A.a5(q.a.getFileHandle(a,{create:!0}),p),$async$aZ)
case 3:s=2
return A.a(n.a5(d.createWritable(),p),$async$aZ)
case 2:o=d
p=t.X
s=4
return A.a(A.a5(o.write(t.a.a(B.f.gab(b))),p),$async$aZ)
case 4:s=5
return A.a(A.a5(o.close(),p),$async$aZ)
case 5:return A.e(null,r)}})
return A.f($async$aZ,r)},
H(a,b){return this.wE(0,b)},
wE(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$H=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.C4(o.a,b),$async$H)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.D(l)
if(A.EI(n))throw A.b(A.DE(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$H,r)},
bo(a){return this.uU(a)},
uU(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$bo=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),t.m),$async$bo)
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
return A.f($async$bo,r)},
bh(a){return this.of(a)},
of(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bh=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),k),$async$bh)
case 7:m=c
s=8
return A.a(A.a5(m.getFile(),k),$async$bh)
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
return A.f($async$bh,r)},
ef(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$ef=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.k([],t.s)
j=new A.cz(A.cA(A.DW(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$ef)
case 8:if(!b){s=7
break}l=j.gn()
J.aL(k,l.name)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=9
return A.a(j.C(),$async$ef)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ef,r)},
$iEi:1}
A.uC.prototype={
cG(a,b){return this.vd(a,b)},
vd(a,b){var s=0,r=A.h(t.X),q,p
var $async$cG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.pi(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)},
ij(a,b,c,d){return this.w4(a,b,c,d)},
w4(a6,a7,a8,a9){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$ij=A.c(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:b=a6.w0(a7,a8)
a=t.N
a0=new A.ir(A.u(a,t.fw),b)
a1=!1
a2=a9==null
a3=A.Gz(a2?null:A.ph(a9),"backupDbName")
a4=a3==null
if(!a4&&typeof a3!="string")throw A.b(A.bU('"backupDbName" must be a string.'))
A.a6(a3)
f=a4?a7:a3
a0.d=new A.uD(f)
a0.e=new A.uE(f)
p=4
b.O("PRAGMA journal_mode=TRUNCATE")
a4=b.o5("PRAGMA journal_mode")
n=a4.gG(a4).b[0]
if(J.a0(n).toLowerCase()!=="truncate"){a=A.y("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.MZ(a2?null:A.ph(a9))
e=t.bE.a(J.V(m,"stores"))
l=e==null?A.k([],t.aw):e
d=A.bf(J.V(m,"maxDocBytes"))
k=d==null?19e5:d
a4=A.Fp(J.V(m,"destructiveBackup"))
j=a4!==!1
i=A.MY(A.Gz(a2?null:A.ph(a9),"fieldCipher"))
if(A.MH(l,i)){a=A.al("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.xT(A.u(a,t.p))
s=7
return A.a(A.d2(h,a0,j,i,k,a7,B.aA,l,B.bQ),$async$ij)
case 7:g=b1
a1=!0
a=t.be
q=new A.mf(b,new A.y2(g,A.aO(a)),A.u(t.eg,a))
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
if(!a1)b.q()
throw a5
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ij,r)}}
A.uD.prototype={
$1(a){return A.p8(this.a,a)},
$S:153}
A.uE.prototype={
$1(a){return A.pb(this.a,a)},
$S:154}
A.mf.prototype={
cG(a,b){return this.ve(a,b)},
ve(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.Cg(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.IA(j)
if(o==null){q=A.Cg(0,"protocol_envelope","Payload must be a map",null)
s=1
break}k.a=null
n=p.e
m=n.h(0,a)
if(m!=null)k.a=m
else{l=new A.oc(a)
k.a=l
n.j(0,a,l)
a.b.a.V(new A.uN(k,p,a),t.H)}i=A
s=3
return A.a(p.d.i0(k.a,o),$async$cG)
case 3:q=i.IB(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)}}
A.uN.prototype={
$1(a){var s=this.b
s.e.H(0,this.c)
s.d.d.H(0,this.a.a)},
$S:71}
A.oc.prototype={
jV(a){this.a.hM(A.pi(a)).bq(new A.yW(),new A.yX(),t.H)},
$inY:1}
A.yW.prototype={
$1(a){},
$S:155}
A.yX.prototype={
$1(a){},
$S:26}
A.Bq.prototype={
$1(a){return B.b.bN(a.c,new A.Bp())},
$S:156}
A.Bp.prototype={
$1(a){return a.e},
$S:53}
A.y_.prototype={
w6(a,b){var s=this.a
if(!s.J(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.bU('Invalid "'+a+'" argument: expected '+A.bK(b).l(0)+", got "+J.c_(s).l(0)+"."))
return b.a(s)}}
A.hs.prototype={}
A.jA.prototype={}
A.eS.prototype={}
A.Bg.prototype={
$2(a,b){var s,r,q=J.a0(a)
if(t.f.b(b))this.a.j(0,q,A.fb(b))
else{s=this.a
if(t.j.b(b)){r=J.c0(b,new A.Bf(),t.z)
r=A.O(r,r.$ti.i("Z.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:39}
A.Bf.prototype={
$1(a){return t.f.b(a)?A.fb(a):a},
$S:32}
A.nX.prototype={
ha(a,b){return this.qb(a,b)},
qb(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$ha=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.bU('Contract envelope requires a "request" map.'))
j=A.fb(b)
i=j.h(0,"tag")
if(typeof i!="string")A.t(A.P("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.t(A.P("Missing request payload."))
g=A.kr(h)
j=t.G
if(!j.b(g))A.t(A.P("Malformed request payload."))
f=A.HX(i,g)
if(f==null)A.t(A.P("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.v()
s=7
return A.a(e.v8(m),$async$ha)
case 7:l=a3
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gU(),"payload",A.e9(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.D(a)
j=A.m(["error",A.Mw(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ha,r)}}
A.y2.prototype={
i0(a,b){return this.vs(a,b)},
vs(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$i0=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.d.t(0,a)
if(n.e==null){i=n.c.e
i===$&&A.v()
i=i.b
n.e=new A.b0(i,A.n(i).i("b0<1>")).aN(new A.y3(n))}m=null
try{m=A.Jx(b)}catch(d){l=A.D(d)
i=J.a0(l)
q=new A.eS("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eS("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.j0(a,m),$async$i0)
case 7:k=a0
i=m.b
q=new A.jA(k,i)
s=1
break
p=2
s=6
break
case 4:p=3
e=o.pop()
j=A.D(e)
i=m.b
g=J.a0(j)
f=A.m(["type",A.N7(j)],t.N,t.X)
q=new A.eS("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i0,r)},
j0(a,b){return this.pG(a,b)},
pG(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$j0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
if(l===$){o=A.m(["open",p.gqg(),"contract_request",p.gqa()],t.N,t.n1)
p.f!==$&&A.BM()
p.f=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.bU("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j0,r)}}
A.y3.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gU(),"payload",a.p()],r,q)],r,q)
for(r=this.a.d,r=A.hF(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).jV(p)}},
$S:159}
A.nW.prototype={
hb(a,b){return this.qh(a,b)},
qh(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$hb=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.y_(a3).w6("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.u(a3,a3)
n=t.f
if(n.b(a5))a5.a8(0,new A.y0(o))
s=a4!=null?3:4
break
case 3:m=J.E(a4),l=p.c,k=l.dy,j=t.X,i=l.ay==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.t(A.a8("Schema must be a map: "+A.r(h),null,null))
g=A.q0(A.fb(h),j)
if(B.b.bN(g.c,new A.y1())&&i)throw A.b(A.al('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.Ct(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a2("")
A.cg(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c1()
a0=A.cX(a)
a0.t(0,b)
a0.q()
a0=d!==A.ar(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.bU('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.J(e)?7:9
break
case 7:s=10
return A.a(l.aQ(g),$async$hb)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.t(A.y('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a2("")
A.cg(c,a1.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c1()
a0=A.cX(a)
a0.t(0,b)
a0.q()
a0=A.ar(a.a.a)
c=new A.a2("")
A.cg(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c1()
a2=A.cX(a)
a2.t(0,b)
a2.q()
if(a0!==A.ar(a.a.a))throw A.b(A.bU('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)}}
A.y0.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:65}
A.y1.prototype={
$1(a){return a.e},
$S:53}
A.p0.prototype={}
A.qD.prototype={
ts(a){var s,r=null
A.G1("absolute",A.k([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b2(a)>0&&!s.cH(a)
if(s)return a
s=A.Ge()
return this.mW(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
ua(a){var s,r,q=A.dP(a,this.a)
q.fA()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kp(s)
q.e.pop()
q.fA()
return q.l(0)},
mW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.k([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.G1("join",s)
return this.vF(new A.bH(s,t.v))},
vF(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.cV(s,new A.qE(),a.$ti.i("cV<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cH(m)&&o){l=A.dP(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.er(k,!0))
l.b=n
if(q.fm(n))l.e[0]=q.gdw()
n=l.l(0)}else if(q.b2(m)>0){o=!q.cH(m)
n=m}else{if(!(m.length!==0&&q.jO(m[0])))if(p)n+=q.gdw()
n+=m}p=q.fm(m)}return n.charCodeAt(0)==0?n:n},
cR(a,b){var s=A.dP(b,this.a),r=s.d,q=A.a_(r).i("am<1>")
r=A.O(new A.am(r,new A.qF(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aC(r,0,q)
return s.d},
ek(a){var s
if(!this.qC(a))return a
s=A.dP(a,this.a)
s.kh()
return s.l(0)},
qC(a){var s,r,q,p,o,n,m,l=this.a,k=l.b2(a)
if(k!==0){if(l===$.pm())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cd(n)){if(l===$.pm()&&n===47)return!0
if(q!=null&&l.cd(q))return!0
if(q===46)m=o==null||o===46||l.cd(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cd(q))return!0
if(q===46)l=o==null||l.cd(o)||o===46
else l=!1
if(l)return!0
return!1},
wC(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b2(a)
if(l<=0)return o.ek(a)
s=A.Ge()
if(m.b2(s)<=0&&m.b2(a)>0)return o.ek(a)
if(m.b2(a)<=0||m.cH(a))a=o.ts(a)
if(m.b2(a)<=0&&m.b2(s)>0)throw A.b(A.Ej(n+a+'" from "'+s+'".'))
r=A.dP(s,m)
r.kh()
q=A.dP(a,m)
q.kh()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kl(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kl(l[0],p[0])}else l=!1
if(!l)break
B.b.it(r.d,0)
B.b.it(r.e,1)
B.b.it(q.d,0)
B.b.it(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Ej(n+a+'" from "'+s+'".'))
l=t.N
B.b.ka(q.d,0,A.ae(p,"..",!1,l))
p=q.e
p[0]=""
B.b.ka(p,1,A.ae(r.d.length,m.gdw(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga1(m)==="."){B.b.kp(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fA()
return q.l(0)},
n3(a){var s,r,q=this,p=A.FM(a)
if(p.gb_()==="file"&&q.a===$.kA())return p.l(0)
else if(p.gb_()!=="file"&&p.gb_()!==""&&q.a!==$.kA())return p.l(0)
s=q.ek(q.a.kk(A.FM(p)))
r=q.wC(s)
return q.cR(0,r).length>q.cR(0,s).length?s:r}}
A.qE.prototype={
$1(a){return a!==""},
$S:10}
A.qF.prototype={
$1(a){return a.length!==0},
$S:10}
A.B0.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:160}
A.tu.prototype={
o3(a){var s=this.b2(a)
if(s>0)return B.a.A(a,0,s)
return this.cH(a)?a[0]:null},
kl(a,b){return a===b}}
A.mA.prototype={
gjK(){var s=this,r=t.N,q=new A.mA(s.a,s.b,s.c,A.bF(s.d,!0,r),A.bF(s.e,!0,r))
q.fA()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga1(r)},
fA(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga1(s)===""))break
B.b.kp(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kh(){var s,r,q,p,o,n=this,m=A.k([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.ka(m,0,A.ae(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.ae(m.length+1,s.gdw(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fm(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.pm())n.b=A.z(r,"/","\\")
n.fA()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga1(q)
return o.charCodeAt(0)==0?o:o}}
A.mB.prototype={
l(a){return"PathException: "+this.a},
$iF:1}
A.x9.prototype={
l(a){return this.gaP()}}
A.vS.prototype={
jO(a){return B.a.E(a,"/")},
cd(a){return a===47},
fm(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
er(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b2(a){return this.er(a,!1)},
cH(a){return!1},
kk(a){var s
if(a.gb_()===""||a.gb_()==="file"){s=a.gbp()
return A.CW(s,0,s.length,B.o,!1)}throw A.b(A.R("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaP(){return"posix"},
gdw(){return"/"}}
A.xF.prototype={
jO(a){return B.a.E(a,"/")},
cd(a){return a===47},
fm(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c9(a,"://")&&this.b2(a)===s},
er(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cb(a,"/",B.a.ad(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.Gh(a,q+1)
return p==null?q:p}}return 0},
b2(a){return this.er(a,!1)},
cH(a){return a.length!==0&&a.charCodeAt(0)===47},
kk(a){return a.l(0)},
gaP(){return"url"},
gdw(){return"/"}}
A.xZ.prototype={
jO(a){return B.a.E(a,"/")},
cd(a){return a===47||a===92},
fm(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
er(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cb(a,"\\",2)
if(s>0){s=B.a.cb(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Go(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b2(a){return this.er(a,!1)},
cH(a){return this.b2(a)===1},
kk(a){var s,r
if(a.gb_()!==""&&a.gb_()!=="file")throw A.b(A.R("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbp()
if(a.gdd()===""){if(s.length>=3&&B.a.S(s,"/")&&A.Gh(s,1)!=null)s=B.a.ks(s,"/","")}else s="\\\\"+a.gdd()+s
r=A.z(s,"/","\\")
return A.CW(r,0,r.length,B.o,!1)},
tQ(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kl(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.tQ(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaP(){return"windows"},
gdw(){return"\\"}}
A.wS.prototype={
gm(a){return this.c.length},
gvG(){return this.b.length},
oG(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.H(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ey(a){var s,r=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aZ("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gG(s))return-1
if(a>=B.b.ga1(s))return s.length-1
if(r.qt(a)){s=r.d
s.toString
return s}return r.d=r.oZ(a)-1},
qt(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
oZ(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iI(a){var s,r,q=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aZ("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.ey(a)
r=q.b[s]
if(r>a)throw A.b(A.aZ("Line "+s+" comes after offset "+a+"."))
return a-r},
fN(a){var s,r,q,p
if(a<0)throw A.b(A.aZ("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aZ("Line "+a+" must be less than the number of lines in the file, "+this.gvG()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aZ("Line "+a+" doesn't have 0 columns."))
return q}}
A.lK.prototype={
ga3(){return this.a.a},
gag(){return this.a.ey(this.b)},
gaq(){return this.a.iI(this.b)},
gar(){return this.b}}
A.hC.prototype={
ga3(){return this.a.a},
gm(a){return this.c-this.b},
gR(){return A.C3(this.a,this.b)},
gN(){return A.C3(this.a,this.c)},
gaK(){return A.dT(B.y.T(this.a.c,this.b,this.c),0,null)},
gbc(){var s=this,r=s.a,q=s.c,p=r.ey(q)
if(r.iI(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dT(B.y.T(r.c,r.fN(p),r.fN(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fN(p+1)
return A.dT(B.y.T(r.c,r.fN(r.ey(s.b)),q),0,null)},
a0(a,b){var s
if(!(b instanceof A.hC))return this.ov(0,b)
s=B.c.a0(this.b,b.b)
return s===0?B.c.a0(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hC))return s.ou(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gI(a){return A.c5(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idd:1}
A.t0.prototype={
vy(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mj(B.b.gG(a1).c)
s=a.e
r=A.ae(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.hx("\u2575")
q.a+="\n"
a.mj(l)}else if(m.b+1!==n.b){a.tr("...")
q.a+="\n"}}for(l=n.d,k=A.a_(l).i("bv<1>"),j=new A.bv(l,k),j=new A.ao(j,j.gm(0),k.i("ao<Z.E>")),k=k.i("Z.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gag()!==f.gN().gag()&&f.gR().gag()===i&&a.qv(B.a.A(h,0,f.gR().gaq()))){e=B.b.bP(r,a0)
if(e<0)A.t(A.R(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.tq(i)
q.a+=" "
a.tp(n,r)
if(s)q.a+=" "
d=B.b.mQ(l,new A.tl())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gag()===i?j.gR().gaq():0
a.tm(h,g,j.gN().gag()===i?j.gN().gaq():h.length,p)}else a.hz(h)
q.a+="\n"
if(k)a.tn(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hx("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mj(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hx("\u2577")
else{q.hx("\u250c")
q.bj(new A.t8(q),"\x1b[34m")
s=q.r
r=" "+$.i8().n3(a)
s.a+=r}q.r.a+="\n"},
hv(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gag()
i=k?null:l.a.gN().gag()
if(s&&l===c){h.bj(new A.tf(h,j,a),r)
n=!0}else if(n)h.bj(new A.tg(h,l),r)
else if(k)if(g.a)h.bj(new A.th(h),g.b)
else o.a+=" "
else h.bj(new A.ti(g,h,c,j,a,l,i),p)}},
tp(a,b){return this.hv(a,b,null)},
tm(a,b,c,d){var s=this
s.hz(B.a.A(a,0,b))
s.bj(new A.t9(s,a,b,c),d)
s.hz(B.a.A(a,c,a.length))},
tn(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gag()===p.gN().gag()){r.jH()
p=r.r
p.a+=" "
r.hv(a,c,b)
if(c.length!==0)p.a+=" "
r.mk(b,c,r.bj(new A.ta(r,a,b),q))}else{s=a.b
if(p.gR().gag()===s){if(B.b.E(c,b))return
A.N4(c,b)
r.jH()
p=r.r
p.a+=" "
r.hv(a,c,b)
r.bj(new A.tb(r,a,b),q)
p.a+="\n"}else if(p.gN().gag()===s){p=p.gN().gaq()
if(p===a.a.length){A.GA(c,b)
return}r.jH()
r.r.a+=" "
r.hv(a,c,b)
r.mk(b,c,r.bj(new A.tc(r,!1,a,b),q))
A.GA(c,b)}}},
mi(a,b,c){var s=c?0:1,r=this.r
s=B.a.bg("\u2500",1+b+this.iZ(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tl(a,b){return this.mi(a,b,!0)},
mk(a,b,c){this.r.a+="\n"
return},
hz(a){var s,r,q,p
for(s=new A.ci(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<K.E>")),q=this.r,r=r.i("K.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bg(" ",4)
else{p=A.bu(p)
q.a+=p}}},
hy(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bj(new A.tj(s,this,a),"\x1b[34m")},
hx(a){return this.hy(a,null,null)},
tr(a){return this.hy(null,null,a)},
tq(a){return this.hy(null,a,null)},
jH(){return this.hy(null,null,null)},
iZ(a){var s,r,q,p
for(s=new A.ci(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qv(a){var s,r,q
for(s=new A.ci(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<K.E>")),r=r.i("K.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
ph(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bj(a,b){return this.ph(a,b,t.z)}}
A.tk.prototype={
$0(){return this.a},
$S:161}
A.t2.prototype={
$1(a){var s=a.d
return new A.am(s,new A.t1(),A.a_(s).i("am<1>")).gm(0)},
$S:244}
A.t1.prototype={
$1(a){var s=a.a
return s.gR().gag()!==s.gN().gag()},
$S:34}
A.t3.prototype={
$1(a){return a.c},
$S:164}
A.t5.prototype={
$1(a){var s=a.a.ga3()
return s==null?new A.j():s},
$S:165}
A.t6.prototype={
$2(a,b){return a.a.a0(0,b.a)},
$S:166}
A.t7.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.k([],t.dg)
for(s=J.aB(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbc()
n=A.Bk(o,p.gaK(),p.gR().gaq())
n.toString
m=B.a.hA("\n",B.a.A(o,0,n)).gm(0)
l=p.gR().gag()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga1(b).b)b.push(new A.cy(j,l,d,A.k([],q)));++l}}i=A.k([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.q)(b),++k){j=b[k]
h&1&&A.H(i,16)
B.b.rv(i,new A.t4(j),!0)
f=i.length
for(q=s.bi(c,g),p=q.$ti,q=new A.ao(q,q.gm(0),p.i("ao<Z.E>")),n=j.b,p=p.i("Z.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gag()>n)break
i.push(e)}g+=i.length-f
B.b.D(j.d,i)}return b},
$S:167}
A.t4.prototype={
$1(a){return a.a.gN().gag()<this.a.b},
$S:34}
A.tl.prototype={
$1(a){return!0},
$S:34}
A.t8.prototype={
$0(){this.a.r.a+=B.a.bg("\u2500",2)+">"
return null},
$S:0}
A.tf.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.tg.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.th.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.ti.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bj(new A.td(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bj(new A.te(r,o),p.b)}}},
$S:2}
A.td.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.te.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.t9.prototype={
$0(){var s=this
return s.a.hz(B.a.A(s.b,s.c,s.d))},
$S:0}
A.ta.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gaq(),l=n.gN().gaq()
n=this.b.a
s=q.iZ(B.a.A(n,0,m))
r=q.iZ(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bg(" ",m))+B.a.bg("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:11}
A.tb.prototype={
$0(){return this.a.tl(this.b,this.c.a.gR().gaq())},
$S:0}
A.tc.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bg("\u2500",3)
else r.mi(s.c,Math.max(s.d.a.gN().gaq()-1,0),!1)
return q.a.length-p.length},
$S:11}
A.tj.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.w8(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.br.prototype={
l(a){var s=this.a
s="primary "+(""+s.gR().gag()+":"+s.gR().gaq()+"-"+s.gN().gag()+":"+s.gN().gaq())
return s.charCodeAt(0)==0?s:s}}
A.zx.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.Bk(o.gbc(),o.gaK(),o.gR().gaq())!=null)){s=A.n6(o.gR().gar(),0,0,o.ga3())
r=o.gN().gar()
q=o.ga3()
p=A.Mp(o.gaK(),10)
o=A.wT(s,A.n6(r,A.EZ(o.gaK()),p,q),o.gaK(),o.gaK())}return A.JW(A.JY(A.JX(o)))},
$S:168}
A.cy.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cs.prototype={
jU(a){var s=this.a
if(!J.x(s,a.ga3()))throw A.b(A.R('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){var s=this.a
if(!J.x(s,b.ga3()))throw A.b(A.R('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.ga3())&&this.b===b.gar()},
gI(a){var s=this.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dt(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaw:1,
ga3(){return this.a},
gar(){return this.b},
gag(){return this.c},
gaq(){return this.d}}
A.n7.prototype={
jU(a){if(!J.x(this.a.a,a.ga3()))throw A.b(A.R('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){if(!J.x(this.a.a,b.ga3()))throw A.b(A.R('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga3())&&this.b===b.gar()},
gI(a){var s=this.a.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dt(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ey(r)+1)+":"+(q.iI(r)+1))+">"},
$iaw:1,
$ics:1}
A.n9.prototype={
oH(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga3(),q.ga3()))throw A.b(A.R('Source URLs "'+A.r(q.ga3())+'" and  "'+A.r(r.ga3())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.R("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.jU(r))throw A.b(A.R('Text "'+s+'" must be '+q.jU(r)+" characters long.",null))}},
gR(){return this.a},
gN(){return this.b},
gaK(){return this.c}}
A.na.prototype={
gic(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gR().gag()+1)+", column "+(p.gR().gaq()+1)
if(p.ga3()!=null){s=p.ga3()
r=$.i8()
s.toString
s=o+(" of "+r.n3(s))
o=s}o+=": "+this.a
q=p.vz(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iF:1}
A.h8.prototype={
gar(){var s=this.b
s=A.C3(s.a,s.b)
return s.b},
$ibk:1,
gfS(){return this.c}}
A.h9.prototype={
ga3(){return this.gR().ga3()},
gm(a){return this.gN().gar()-this.gR().gar()},
a0(a,b){var s=this.gR().a0(0,b.gR())
return s===0?this.gN().a0(0,b.gN()):s},
vz(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.Ih(s,a).vy()},
P(a,b){if(b==null)return!1
return b instanceof A.h9&&this.gR().P(0,b.gR())&&this.gN().P(0,b.gN())},
gI(a){return A.c5(this.gR(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dt(s).l(0)+": from "+s.gR().l(0)+" to "+s.gN().l(0)+' "'+s.gaK()+'">'},
$iaw:1}
A.dd.prototype={
gbc(){return this.d}}
A.jo.prototype={
a4(){return"SqliteUpdateKind."+this.b}}
A.ct.prototype={
gI(a){return A.c5(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.ct&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.c7.prototype={
l(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.r(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.c0(p,new A.wY(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iF:1}
A.wY.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.a0(a)},
$S:169}
A.kI.prototype={}
A.r3.prototype={
t9(){var s=this,r=s.d
return r==null?s.d=new A.e4(s,A.k([],t.fU),new A.rc(s),new A.rd(s),t.jy):r},
rB(){var s=this,r=s.e
return r==null?s.e=new A.e4(s,A.k([],t.lw),new A.r9(s),new A.ra(s),t.lU):r},
pj(){var s=this,r=s.f
return r==null?s.f=new A.e4(s,A.k([],t.lw),new A.r5(s),new A.r6(s),t.ag):r},
tX(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.t(A.az(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b7(m))
r=n.a
q=r.e2(s,1)
s=r.d
p=A.D4(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.da(new A.re(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.BL(this,p,o,o,o)},
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
r=s.kO()
q=r!==0?A.D8(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aE(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.t(A.y("This database has already been closed"))
r=p.b
q=r.a
s=q.e2(B.e.v(a),1)
q=q.d
r=A.D4(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.BL(p,r,"executing",a,b)}else{s=p.im(a,!0)
try{s.e8(new A.bP(b))}finally{s.q()}}},
O(a){return this.aE(a,B.n)},
r_(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.t(A.y("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cB(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.xS(r,p,n,o)
l=A.k([],t.lE)
k=new A.r7(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kQ(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.BL(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null)l.push(new A.hb(f,e,new A.dm(!1).cW(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kQ(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null){l.push(new A.hb(f,e,""))
k.$0()
throw A.b(A.az(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.az(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
im(a,b){var s=this.r_(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.az(a,"sql","Must contain an SQL statement."))
return B.b.gG(s)},
wd(a){return this.im(a,!1)},
o6(a,b){var s,r=this.im(a,!0)
try{s=r.kJ(new A.bP(b))
return s}finally{r.q()}},
o5(a){return this.o6(a,B.n)}}
A.rc.prototype={
$0(){var s=this.a,r=s.b
r.a.mC(r.b,new A.rb(s))},
$S:0}
A.rb.prototype={
$3(a,b,c){var s=A.Jj(a)
if(s==null)return
this.a.d.jS(new A.ct(s,b,c))},
$S:170}
A.rd.prototype={
$0(){var s=this.a.b
s.a.mC(s.b,null)
return null},
$S:0}
A.r9.prototype={
$0(){var s=this.a,r=s.b
r.a.mB(r.b,new A.r8(s))
return null},
$S:0}
A.r8.prototype={
$0(){this.a.e.jS(null)},
$S:0}
A.ra.prototype={
$0(){var s=this.a.b
s.a.mB(s.b,null)
return null},
$S:0}
A.r5.prototype={
$0(){var s=this.a,r=s.b
r.a.mA(r.b,new A.r4(s))
return null},
$S:0}
A.r4.prototype={
$0(){var s=this.a.f
s.jS(null)
return 0},
$S:11}
A.r6.prototype={
$0(){var s=this.a.b
s.a.mA(s.b,null)
return null},
$S:0}
A.re.prototype={
$2(a,b){A.KX(a,this.a,b)},
$S:171}
A.r7.prototype={
$0(){var s,r,q,p,o,n
this.a.q()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
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
A.nP.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.J2(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.J4(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.R("The argument list is unmodifiable",null))},
$iwV:1}
A.e4.prototype={
gcS(){var s=this.r
return s==null?this.r=this.q7(!1):s},
q7(a){return new A.dl(new A.Ac(this,!1),this.$ti.i("dl<1>"))},
jS(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.t(o.bF())
if((n&1)!==0)o.gaL().aA(a)}else{n=o.b
if(n>=4)A.t(o.bF())
if((n&1)!==0)o.cu(a)
else if((n&3)===0){n=o.h2()
o=new A.ca(a,o.$ti.i("ca<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sej(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.Ac.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.Ad(q,a,s)
a.r=a.e=new A.Ae(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dM<1>)")}}
A.Ad.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.k2(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.Ae.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,new A.k2(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.wU.prototype={
mR(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Ji(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
w0(a,b){var s,r,q,p,o,n,m,l,k,j
this.mR()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e2(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e2(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d7(r.b.buffer,0,null)[B.c.af(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.xL(r,l,o)
r=r.r
if(r!=null)r.ms(k,l,o)
if(m!==0){j=A.D8(s,k,m,"opening the database",null,null)
k.kO()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.r3(s,k,!1)}}
A.hb.prototype={
gpi(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.k([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.nZ(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dm(!1).cW(o,0,null,!0))}return q},
gt1(){return null},
bB(a,b){A.BL(this.b,a,b,this.d,this.e)},
lq(){if(this.r||this.b.r)throw A.b(A.y(u.f))},
h4(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dm()
if(s!==0?s!==101:q)r.bB(s,"executing statement")},
rK(){var s,r,q,p,o,n,m=this,l=A.k([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rm(o))
l.push(p)}m.dm()
if(p!==0?p!==101:k)m.bB(p,"selecting from statement")
n=m.gpi()
m.gt1()
k=new A.mU(l,n,B.al)
k.pc()
return k},
rm(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.aq(r.Number(s)):A.EU(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oj(a)
case 4:return s.kP(a)
case 5:default:return null}},
p5(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.t(A.az(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.p6(a[s-1],s)
this.e=a},
p6(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.au(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aJ){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.DD(a).l(0)))
break A}if(A.bx(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.oi(b,a)
break A}if(t.L.b(a)){s=q.a.oh(b,a)
break A}s=q.p0(a,b)
break A}if(s!==0)q.bB(s,"binding parameter")},
p0(a,b){throw A.b(A.az(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eC(a){A:{if(a instanceof A.bP){this.p5(a.a)
break A}if(a instanceof A.li)a.a.$1(this)}},
dm(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dm()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mF(s.d)}},
kJ(a){var s=this
s.lq()
s.dm()
s.eC(a)
return s.rK()},
e8(a){var s=this
s.lq()
s.dm()
s.eC(a)
s.h4()}}
A.lY.prototype={
iD(a,b){return this.d.J(a)?1:0},
kC(a,b){this.d.H(0,a)},
kD(a){return new v.G.URL(a,"file:///").pathname},
dt(a,b){var s,r=a.a
if(r==null)r=A.E_(this.b,"/")
s=this.d
if(!s.J(r))if((b&4)!==0)s.j(0,r,new A.cx(new Uint8Array(0),0))
else throw A.b(A.hm(14))
return new A.hJ(new A.op(this,r,(b&8)!==0),0)},
kF(a){}}
A.op.prototype={
n8(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ah(a,0,s,J.bM(B.f.gab(r.a),0,r.b),b)
return s},
kB(){return this.d>=2?1:0},
iE(){if(this.c)this.a.d.H(0,this.b)},
fJ(){return this.a.d.h(0,this.b).b},
kE(a){this.d=a},
kG(a){},
fK(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cx(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kH(a){this.d=a},
ex(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cx(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.av(0,b,s,a)}}
A.Bz.prototype={
$1(a){return a.length!==0},
$S:10}
A.qJ.prototype={
pc(){var s,r,q,p,o=A.u(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o.j(0,p,B.b.df(s,p))}this.c=o}}
A.mU.prototype={
gu(a){return new A.zW(this)},
h(a,b){return new A.c6(this,A.fJ(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iJ:1,
$io:1,
$ip:1}
A.c6.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.au(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gK(){return this.a.a},
gaX(){return this.b},
$iI:1}
A.zW.prototype={
gn(){var s=this.a
return new A.c6(s,A.fJ(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.oF.prototype={}
A.oG.prototype={}
A.oI.prototype={}
A.oJ.prototype={}
A.vm.prototype={
a4(){return"OpenMode."+this.b}}
A.ej.prototype={}
A.bP.prototype={}
A.li.prototype={}
A.dh.prototype={
l(a){return"VfsException("+this.a+")"},
$iF:1}
A.jn.prototype={}
A.b4.prototype={}
A.kY.prototype={}
A.kX.prototype={
giF(){return 0},
np(a,b){return 12},
giH(){return 4096},
iG(a,b){var s=this.n8(a,b),r=a.length
if(s<r){B.f.jZ(a,s,r,0)
throw A.b(B.dS)}},
$ibp:1,
$ijx:1}
A.eT.prototype={}
A.BK.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.t(A.y("No such element"))
r=s.c
q=r.a
q.toString
q.jD(A.n(r).i("b2.E").a(r))
r.d.$0()}},
$S:0}
A.BI.prototype={
$1(a){var s=this.a,r=s.b
s.hc(s.c,new A.eT(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:18}
A.BJ.prototype={
$4(a,b,c,d){this.a.$1(c.f_(d))},
$S:173}
A.xQ.prototype={}
A.xL.prototype={
kO(){var s=this.a,r=s.r
if(r!=null)r.mF(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.xS.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kQ(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.D4(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d7(o.b.buffer,0,null)[B.c.af(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.xR(s,o,n)
o=o.w
if(o!=null)o.ms(r,s,n)}return new A.oD(r,p)}}
A.xR.prototype={
oh(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cB(b),J.as(b))},
oi(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cB(s),s.length)},
kP(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.EJ(s.b,q.sqlite3_column_blob(r,a),p)},
oj(a){var s=this.c
return A.dX(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dW.prototype={$iCp:1}
A.di.prototype={$iCq:1}
A.ho.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.di(s,A.d7(s.b.buffer,0,null)[B.c.af(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.ll.prototype={
vR(a){var s,r,q=this.b
q===$&&A.v()
s="[sqlite3] "+A.dX(q,a,null)
r=$.Lt
if(r==null)A.Gw(s)
else r.$1(s)},
vP(a,b){var s,r=new A.aM(A.lp(A.aq(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.v()
s=A.Eg(q.buffer,b,8)
s.$flags&2&&A.H(s)
s[0]=A.Cn(r)
s[1]=A.Cl(r)
s[2]=A.Ck(r)
s[3]=A.vW(r)
s[4]=A.Cm(r)-1
s[5]=A.Co(r)-1900
s[6]=B.c.ak(A.IV(r),7)},
xJ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.v()
s=new A.jn(A.CG(j,b,k))
try{r=a.dt(s,d)
if(e!==0){p=r.b
o=A.d7(j.buffer,0,k)
n=B.c.af(e,2)
o.$flags&2&&A.H(o)
o[n]=p}p=A.d7(j.buffer,0,k)
o=B.c.af(c,2)
p.$flags&2&&A.H(p)
p[o]=0
m=r.a
return m}catch(l){p=A.D(l)
if(p instanceof A.dh){q=p
p=q.a
j=A.d7(j.buffer,0,k)
o=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[o]=p}else{j=j.buffer
j=A.d7(j,0,k)
p=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[p]=1}}return k},
xy(a,b,c){var s=this.b
s===$&&A.v()
return A.bY(new A.qP(a,A.dX(s,b,null),c))},
xp(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bY(new A.qM(this,a,A.dX(s,b,null),c,d))},
xF(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bY(new A.qR(this,a,A.dX(s,b,null),c,d))},
xL(a,b,c){return A.bY(new A.qT(this,c,b,a))},
xQ(a,b){return A.bY(new A.qV(a,b))},
xw(a,b){var s,r=Date.now(),q=this.b
q===$&&A.v()
s=v.G.BigInt(r)
A.Cb(A.Ef(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xu(a){return A.bY(new A.qO(a))},
xN(a,b,c,d){return A.bY(new A.qU(this,a,b,c,d))},
xY(a,b,c,d){return A.bY(new A.qZ(this,a,b,c,d))},
xU(a,b){return A.bY(new A.qX(a,b))},
xS(a,b){return A.bY(new A.qW(a,b))},
xD(a,b){return A.bY(new A.qQ(this,a,b))},
xH(a,b){return A.bY(new A.qS(a,b))},
xW(a,b){return A.bY(new A.qY(a,b))},
xs(a,b){return A.bY(new A.qN(this,a,b))},
xz(a){return a.giF()},
xB(a,b,c){if(t.j2.b(a))return a.np(b,c)
return 12},
xO(a){if(t.j2.b(a))return a.giH()
return 4096},
uo(a){a.$0()},
uj(a){return a.$0()},
um(a,b,c,d,e){var s=this.b
s===$&&A.v()
a.$3(b,A.dX(s,d,null),A.aq(v.G.Number(e)))},
uv(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.dW(s,b),new A.ho(s,c,d))},
uz(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.dW(s,b),new A.ho(s,c,d))},
ux(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.v()
null.$2(new A.dW(s,b),new A.ho(s,c,d))},
uB(a,b){var s
null.toString
s=this.a
s===$&&A.v()
null.$1(new A.dW(s,b))},
ut(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.v()
r.$1(new A.dW(s,b))},
ur(a,b,c,d,e){var s=this.b
s===$&&A.v()
return null.$2(A.CG(s,c,b),A.CG(s,e,d))},
uh(a,b){return a.$1(b)},
uf(a,b){return a.gy3().$1(b)},
ud(a,b,c){return a.gy0().$2(b,c)}}
A.qP.prototype={
$0(){return this.a.kC(this.b,this.c)},
$S:0}
A.qM.prototype={
$0(){var s,r=this,q=r.b.iD(r.c,r.d),p=r.a.b
p===$&&A.v()
p=A.d7(p.buffer,0,null)
s=B.c.af(r.e,2)
p.$flags&2&&A.H(p)
p[s]=q},
$S:0}
A.qR.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kD(q.c)),o=p.length
if(o>q.d)throw A.b(A.hm(14))
s=q.a.b
s===$&&A.v()
s=A.bT(s.buffer,0,null)
r=q.e
B.f.cQ(s,r,p)
s.$flags&2&&A.H(s)
s[r+o]=0},
$S:0}
A.qT.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.v()
s=A.bT(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.DB(s,q.b)
else return A.DB(s,null)},
$S:0}
A.qV.prototype={
$0(){this.a.kF(A.d0(this.b,0,0))},
$S:0}
A.qO.prototype={
$0(){return this.a.iE()},
$S:0}
A.qU.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.iG(A.bT(r.buffer,s.c,s.d),A.aq(v.G.Number(s.e)))},
$S:0}
A.qZ.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.ex(A.bT(r.buffer,s.c,s.d),A.aq(v.G.Number(s.e)))},
$S:0}
A.qX.prototype={
$0(){return this.a.fK(A.aq(v.G.Number(this.b)))},
$S:0}
A.qW.prototype={
$0(){return this.a.kG(this.b)},
$S:0}
A.qQ.prototype={
$0(){var s,r=this.b.fJ(),q=this.a.b
q===$&&A.v()
q=A.d7(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.qS.prototype={
$0(){return this.a.kE(this.b)},
$S:0}
A.qY.prototype={
$0(){return this.a.kH(this.b)},
$S:0}
A.qN.prototype={
$0(){var s,r=this.b.kB(),q=this.a.b
q===$&&A.v()
q=A.d7(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.da.prototype={}
A.id.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bg(A.Cb(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.x0(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.pz(q,this,p,o)
o.d=s
o.f=new A.pA(q,o,s)
return new A.b5(o,A.n(o).i("b5<1>")).aa(a,b,c,d)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.pz.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a5(q,t.m).bq(new A.pB(p,r.b,s,r),s.gtw(),t.P)},
$S:0}
A.pB.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaL().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:16}
A.pA.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaL().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eX.prototype={
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
return s==null?A.t(A.y("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.w($.C,t.g5)
s=new A.ap(o,t.ex)
r=p.d
q=t.m
p.b=A.bq(r,"success",new A.z_(p,s),!1,q)
p.c=A.bq(r,"error",new A.z0(p,s),!1,q)
return o}}
A.z_.prototype={
$1(a){var s,r=this.a
r.C()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.z0.prototype={
$1(a){var s=this.a
s.C()
s=s.d.error
if(s==null)s=a
this.b.aS(s)},
$S:1}
A.qm.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qn.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qr.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qs.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qt.prototype={
$1(a){this.a.aS(new A.bl("IndexedDB open blocked"))},
$S:1}
A.rH.prototype={
$1(a){return A.bg(a[1])},
$S:195}
A.xM.prototype={
tY(){var s={}
s.dart=new A.xN(this).$0()
return s},
ia(a){return this.vL(a)},
vL(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ia=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(v.G.WebAssembly.instantiateStreaming(a,p.tY()),t.m),$async$ia)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)}}
A.xN.prototype={
$0(){var s=this.a.a,r=A.bg(v.G.Object),q=A.bg(r.create.apply(r,[null]))
q.error_log=A.cY(s.gvQ())
q.localtime=A.bW(s.gvO())
q.xOpen=A.CZ(s.gxI())
q.xDelete=A.p7(s.gxx())
q.xAccess=A.hW(s.gxo())
q.xFullPathname=A.hW(s.gxE())
q.xRandomness=A.p7(s.gxK())
q.xSleep=A.bW(s.gxP())
q.xCurrentTimeInt64=A.bW(s.gxv())
q.xClose=A.cY(s.gxt())
q.xRead=A.hW(s.gxM())
q.xWrite=A.hW(s.gxX())
q.xTruncate=A.bW(s.gxT())
q.xSync=A.bW(s.gxR())
q.xFileSize=A.bW(s.gxC())
q.xLock=A.bW(s.gxG())
q.xUnlock=A.bW(s.gxV())
q.xCheckReservedLock=A.bW(s.gxq())
q.xDeviceCharacteristics=A.cY(s.giF())
q.xFileControl=A.p7(s.gxA())
q.xSectorSize=A.cY(s.giH())
q["dispatch_()v"]=A.cY(s.gun())
q["dispatch_()i"]=A.cY(s.gui())
q.dispatch_update=A.CZ(s.gul())
q.dispatch_xFunc=A.hW(s.guu())
q.dispatch_xStep=A.hW(s.guy())
q.dispatch_xInverse=A.hW(s.guw())
q.dispatch_xValue=A.bW(s.guA())
q.dispatch_xFinal=A.bW(s.gus())
q.dispatch_compare=A.CZ(s.guq())
q.dispatch_busy=A.bW(s.gug())
q.changeset_apply_filter=A.bW(s.gue())
q.changeset_apply_conflict=A.p7(s.guc())
return q},
$S:36}
A.hn.prototype={}
A.pC.prototype={
ii(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ii=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cY(new A.pF(o))
new A.ap(p,t.h1).aB(A.HT(o,t.m))
s=2
return A.a(p,$async$ii)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$ii,r)},
dY(a,b){return this.rD(a,b)},
rD(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Hl(),b)
o=A.JZ(p)
s=2
return A.a(A.N5(new A.pE(a,o,p),t.mj),$async$dY)
case 2:s=3
return A.a(o.b.a,$async$dY)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dY,r)},
qY(a){return this.dY(new A.pD(a),"readwrite")}}
A.pF.prototype={
$1(a){var s=A.bg(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:16}
A.pE.prototype={
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
$S:20}
A.pD.prototype={
$1(a){return this.nq(a)},
nq(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aU(a),$async$$1)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.jT.prototype={
oL(a){var s=A.AT(new A.zA(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.AT(new A.zB(this))},
jq(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.k([a,c],s),A.k([a,b],s))},
rj(a){return this.jq(a,9007199254740992,0)},
rk(a,b){return this.jq(a,9007199254740992,b)},
i9(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$i9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.u(t.N,t.S)
k=new A.eX(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$i9)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.t(A.y("Await moveNext() first"))
n=o.key
n.toString
A.G(n)
m=o.primaryKey
m.toString
l.j(0,n,A.aq(A.f6(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i9,r)},
hT(a){return this.v_(a)},
v_(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$hT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cF(p.d.index("fileName").getKey(a),t.W),$async$hT)
case 3:q=o.aq(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)},
jr(a){return A.cF(this.d.get(a),t.B).V(new A.zz(a),t.m)},
ez(a,b){return this.ol(a,b)},
ol(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ez=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jr(a),$async$ez)
case 3:h=d
g=h.length
f=new A.cx(new Uint8Array(g),g)
e=new A.eX(p.e.openCursor(p.rj(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$ez)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.t(A.y("Await moveNext() first"))
k=n.a(l.key)
j=A.aq(A.f6(k[1]))
if(j>=h.length){s=5
break}i=new A.zC(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.wC(A.bg(l.value)).V(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ez,r)},
hK(a){return this.tV(a)},
tV(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.t(A.y("IDB transaction already completed"))
o=A
s=3
return A.a(A.cF(p.d.put({name:a,length:0}),t.W),$async$hK)
case 3:q=o.aq(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
aZ(a,b){return this.xh(a,b)},
xh(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$aZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.y("IDB transaction already completed"))
s=2
return A.a(q.jr(a),$async$aZ)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.O(new A.T(o,n),n.i("o.E"))
B.b.aF(m)
s=3
return A.a(A.C6(new A.X(m,new A.zD(new A.zE(q,a),b),A.a_(m).i("X<1,A<~>>")),t.H),$async$aZ)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eX(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$aZ)
case 6:s=7
return A.a(A.cF(l.gn().update({name:p.name,length:b.c}),t.X),$async$aZ)
case 7:case 5:return A.e(null,r)}})
return A.f($async$aZ,r)},
dr(a,b,c){return this.wT(0,b,c)},
wT(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.y("IDB transaction already completed"))
s=2
return A.a(q.jr(b),$async$dr)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cF(q.e.delete(q.rk(b,B.c.M(c,4096)*4096)),t.X),$async$dr)
case 5:case 4:o=new A.eX(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$dr)
case 6:s=7
return A.a(A.cF(o.gn().update({name:p.name,length:c}),t.X),$async$dr)
case 7:return A.e(null,r)}})
return A.f($async$dr,r)},
hO(a){return this.u9(a)},
u9(a){var s=0,r=A.h(t.H),q=this,p
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.y("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.C6(A.k([A.cF(q.e.delete(q.jq(a,9007199254740992,0)),p),A.cF(q.d.delete(a),p)],t.iw),t.H),$async$hO)
case 2:return A.e(null,r)}})
return A.f($async$hO,r)}}
A.zA.prototype={
$0(){this.a.b.an()},
$S:2}
A.zB.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aS(r)},
$S:2}
A.zz.prototype={
$1(a){if(a==null)throw A.b(A.az(this.a,"fileId","File not found in database"))
else return a},
$S:198}
A.zC.prototype={
$1(a){var s=this.a
s.cQ(s,this.b,J.bM(a,0,this.c))},
$S:199}
A.zE.prototype={
nZ(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cF(p.openCursor(v.G.IDBKeyRange.only(A.k([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gab(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cF(p.put(l,A.k([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cF(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.nZ(a,b)},
$S:200}
A.zD.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:201}
A.zb.prototype={
t8(a,b,c){B.f.cQ(this.b.n6(a,new A.zc(this,a)),b,c)},
tA(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.ak(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.t8(p*4096,o,J.bM(B.f.gab(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.zc.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cQ(s,0,J.bM(B.f.gab(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:202}
A.oy.prototype={}
A.dE.prototype={
eX(a){var s=this
if(s.e||s.d.a==null)A.t(A.hm(10))
if(a.kb(s.x)){s.cw(!0)
return a.d.a}else return A.b9(null,t.H)},
cw(a){return this.rZ(a)},
rZ(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.O(o,o.$ti.i("o.E"))
o.am(0)
s=5
return A.a(p.d.qY(n).aY(new A.to(p,n,a)),$async$cw)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cw,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eX(new A.jR(new A.tp(),new A.ap(new A.w($.C,t.D),t.F)))
p.e=!0
p.cw(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.ga1(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dI(a,b){return this.q3(a,b)},
q3(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.z
s=n.J(b)?3:5
break
case 3:n=n.h(0,b)
n.toString
q=n
s=1
break
s=4
break
case 5:s=6
return A.a(a.hT(b),$async$dI)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
eQ(){var s=0,r=A.h(t.H),q=this,p
var $async$eQ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.k([],t.iw)
s=2
return A.a(q.d.dY(new A.tn(q,p),"readonly"),$async$eQ)
case 2:s=3
return A.a(A.Ie(p,t.H),$async$eQ)
case 3:return A.e(null,r)}})
return A.f($async$eQ,r)},
cF(){return this.cw(!1)},
iD(a,b){return this.w.d.J(a)?1:0},
kC(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.eX(new A.jL(s,a,new A.ap(new A.w($.C,t.D),t.F)))},
kD(a){return new v.G.URL(a,"file:///").pathname},
dt(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.E_(p.b,"/")
s=p.w
r=s.d.J(o)?1:0
q=s.dt(new A.jn(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.eX(new A.hy(p,o,new A.ap(new A.w($.C,t.D),t.F)))
return new A.hJ(new A.oq(p,q.a,o),0)},
kF(a){}}
A.to.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.t(A.y("Future already completed"))
p.co(null)}o.cw(this.c)},
$S:2}
A.tp.prototype={
$1(a){return this.nx(a)},
nx(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.tn.prototype={
$1(a){return this.nw(a)},
nw(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.i9(),$async$$1)
case 2:m=c
l=q.a
l.z.D(0,m)
p=m.ga7(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.ez(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.oq.prototype={
iG(a,b){this.b.iG(a,b)},
giF(){return 0},
giH(){return 4096},
kB(){return this.b.d>=2?1:0},
iE(){},
fJ(){return this.b.fJ()},
kE(a){this.b.d=a
return null},
kG(a){},
np(a,b){return 12},
fK(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.t(A.hm(10))
s.b.fK(a)
if(!r.y.E(0,s.c))r.eX(new A.jR(new A.zy(s,a),new A.ap(new A.w($.C,t.D),t.F)))},
kH(a){this.b.d=a
return null},
ex(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.t(A.hm(10))
s=m.c
if(l.y.E(0,s)){m.b.ex(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cx(new Uint8Array(0),0)
q=J.bM(B.f.gab(r.a),0,r.b)
m.b.ex(a,b)
p=new Uint8Array(a.length)
B.f.cQ(p,0,a)
o=A.k([],t.p8)
n=$.C
o.push(new A.oy(b,p))
l.eX(new A.hS(l,s,q,o,new A.ap(new A.w(n,t.D),t.F)))},
$ibp:1,
$ijx:1}
A.zy.prototype={
$1(a){return this.nY(a)},
nY(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dI(a,o.c),$async$$1)
case 3:q=n.dr(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:24}
A.b6.prototype={
kb(a){a.hc(a.c,this,!1)
return!0}}
A.jR.prototype={
aU(a){return this.w.$1(a)}}
A.jL.prototype={
kb(a){var s,r,q,p
if(!a.gF(0)){s=a.ga1(0)
for(r=this.x;s!=null;)if(s instanceof A.jL)if(s.x===r)return!1
else s=s.gfq()
else if(s instanceof A.hS){q=s.gfq()
if(s.x===r){p=s.a
p.toString
p.jD(A.n(s).i("b2.E").a(s))}s=q}else if(s instanceof A.hy){if(s.x===r){r=s.a
r.toString
r.jD(A.n(s).i("b2.E").a(s))
return!1}s=s.gfq()}else break}a.hc(a.c,this,!1)
return!0},
aU(a){return this.wL(a)},
wL(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dI(a,o),$async$aU)
case 2:n=c
p.z.H(0,o)
s=3
return A.a(a.hO(n),$async$aU)
case 3:return A.e(null,r)}})
return A.f($async$aU,r)}}
A.hy.prototype={
aU(a){return this.wK(a)},
wK(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hK(p),$async$aU)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aU,r)}}
A.hS.prototype={
kb(a){var s,r=a.b===0?null:a.ga1(0)
for(s=this.x;r!=null;)if(r instanceof A.hS)if(r.x===s){B.b.D(r.z,this.z)
return!1}else r=r.gfq()
else if(r instanceof A.hy){if(r.x===s)break
r=r.gfq()}else break
a.hc(a.c,this,!1)
return!0},
aU(a){return this.wM(a)},
wM(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.zb(m,A.u(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.q)(m),++o){n=m[o]
l.tA(n.a,n.b)}k=a
s=3
return A.a(q.w.dI(a,q.x),$async$aU)
case 3:s=2
return A.a(k.aZ(c,l),$async$aU)
case 2:return A.e(null,r)}})
return A.f($async$aU,r)}}
A.fD.prototype={
a4(){return"FileType."+this.b}}
A.h7.prototype={
bL(){var s=this.d
if(s!=null)return s
throw A.b(A.y("VFS closed"))},
iD(a,b){var s=$.BP().h(0,a)
if(s==null)return this.e.d.J(a)?1:0
else return this.bL().bo(s)?1:0},
kC(a,b){var s=$.BP().h(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.bL().fk(s,!1)},
kD(a){return new v.G.URL(a,"file:///").pathname},
dt(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dt(a,b)
s=$.BP().h(0,p)
if(s==null)return q.e.dt(a,b)
r=q.bL()
if(!r.bo(s))if((b&4)!==0){r.dc(s).truncate(0)
r.fk(s,!0)}else throw A.b(B.dR)
return new A.hJ(new A.oO(q,s,(b&8)!==0),0)},
kF(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cK(a,b){return this.w2(a,b)},
cJ(a){return this.cK(a,!1)},
w2(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.wR(a,b)
s=2
return A.a(m.$1("meta"),$async$cK)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cK)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cK)
case 4:o=d
n=q.d=new A.zS(new Uint8Array(2),l,p,o)
if(k){n.fk(B.b0,p.getSize()>0)
n.fk(B.b1,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cK,r)}}
A.wR.prototype={
nU(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.a(A.a5(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.a(A.a5(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$1(a){return this.nU(a)},
$S:203}
A.oO.prototype={
n8(a,b){return A.DX(this.a.bL().dc(this.b),a,{at:b})},
kB(){return this.d>=2?1:0},
iE(){var s=this.a,r=this.b
s.bL().dc(r).flush()
if(this.c)s.bL().fk(r,!1)},
fJ(){return this.a.bL().dc(this.b).getSize()},
kE(a){this.d=a},
kG(a){this.a.bL().dc(this.b).flush()},
fK(a){this.a.bL().dc(this.b).truncate(a)},
kH(a){this.d=a},
ex(a,b){if(A.DY(this.a.bL().dc(this.b),a,{at:b})<a.length)throw A.b(B.dT)}}
A.zS.prototype={
bo(a){var s=this.a
A.DX(this.b,s,{at:0})
return s[a.a]!==0},
fk(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.H(s)
s[a.a]=r
A.DY(this.b,s,{at:0})},
dc(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.xG.prototype={
oI(a,b){var s=this,r=s.c
r.a!==$&&A.cf()
r.a=s
r=t.S
A.zd(new A.xH(s),r)
A.zd(new A.xI(s),r)
s.r=A.zd(new A.xJ(s),r)
s.w=A.zd(new A.xK(s),r)},
e2(a,b){var s=J.M(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bT(this.b.buffer,0,null)
B.f.av(q,r,r+s.gm(a),a)
B.f.jZ(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cB(a){return this.e2(a,0)},
mC(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mA(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mB(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.xH.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.xI.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.xJ.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.xK.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.im.prototype={}
A.vZ.prototype={
oF(a){var s,r=this,q=r.a
q.start()
r.c=A.bq(q,"message",new A.w2(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kC()
q.toString
A.jz(q,s,null,null,!1).V(new A.w3(r),t.P)}},
jf(a){return this.qe(a)},
qe(a){var s=0,r=A.h(t.H),q=this
var $async$jf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.Mu(a,new A.w_(q),q.gvo(),new A.w0(q),new A.w1(q))
return A.e(null,r)}})
return A.f($async$jf,r)},
fQ(a,b,c){return this.oc(a,b,c,c)},
oc(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fQ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.HJ(null))
o=p.e++
n=new A.w($.C,t.a7)
p.f.j(0,o,new A.ap(n,t.h1))
a.i=o
p.a.postMessage(a,A.i0(a))
s=3
return A.a(n,$async$fQ)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.J6(m))
case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
qx(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.C()
s=q.d
if(s!=null)s.C()
for(s=q.f,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();)r.d.aS(new A.ik(a))
s.am(0)
p.an()},
lJ(){return this.qx(null)}}
A.w2.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lJ()
return}this.a.jf(A.bg(a.data))},
$S:1}
A.w3.prototype={
$1(a){this.a.lJ()
a.a.an()},
$S:204}
A.w1.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.aB(a)},
$S:16}
A.w0.prototype={
$1(a){return this.nN(a)},
nN(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.uk(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bw(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.D(a0)
k=A.ac(a0)
if(!(l instanceof A.du)){b.console.error("Error in worker: "+J.a0(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.c7){h=A.I6(b)
g=0}else{g=b instanceof A.du?1:null
h=null}f={e:J.a0(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.H(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.i0(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:205}
A.w_.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:16}
A.ik.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iF:1}
A.r1.prototype={
ce(a){return this.vM(a)},
vM(a){var s=0,r=A.h(t.n),q
var $async$ce=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.xP(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ce,r)}}
A.lh.prototype={}
A.qK.prototype={}
A.eR.prototype={}
A.lA.prototype={
ib(){var s=0,r=A.h(t.H),q=this
var $async$ib=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cJ(q.b),$async$ib)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ib,r)},
ko(){var s=0,r=A.h(t.H),q=this
var $async$ko=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$ko,r)}}
A.rZ.prototype={
wO(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
q8(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.xW.prototype={
$1(a){var s=new A.w($.C,t.D),r=new A.d1(new A.ap(s,t.F))
this.a.a=r
this.b.aB(r)
return A.If(s)},
$S:206}
A.xX.prototype={
$2(a,b){var s,r,q
A.bg(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.c7(new A.du("Operation was cancelled"),b)
else q.c7(a,b)}return null},
$S:207}
A.d1.prototype={}
A.lm.prototype={
gtM(){if(this.c.a)return!1
return!this.d||this.f!=null},
dC(a){return this.oP(a)},
oP(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dC=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kC()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jz(n,o.a,null,o.gqi(),!0),$async$dC)
case 6:m=c
s=7
return A.a(A.jz(n,o.b,a,null,!1),$async$dC)
case 7:l=c
j=o.e
j=j==null?null:j.ib()
s=8
return A.a(j instanceof A.w?j:A.bw(j,t.H),$async$dC)
case 8:o.f=new A.a4(m,l)
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
return A.f($async$dC,r)},
qj(){this.na()},
kg(a,b,c){return this.c.iz(new A.rg(this,a,b,c),b,c)},
na(){return this.c.kA(new A.rh(this),t.H)}}
A.rg.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dC(r.c).V(new A.rf(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rf.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rh.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.ko()
s.a.an()
r.a.an()
p.f=null}},
$S:2}
A.j1.prototype={
iz(a,b,c){return this.xg(a,b,c,c)},
kA(a,b){return this.iz(a,null,b)},
xg(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.ve(h,p)
if(!p.a){h.a=p.a=!0
q=A.iA(a,c).aY(o)
s=1
break}else{n={}
m=new A.w($.C,c.i("w<0>"))
l=new A.ap(m,c.i("ap<0>"))
n.a=null
h=new A.vd(h,n,l,a,c)
if(!g)n.a=A.bq(b,"abort",new A.vc(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.ae(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.ah(j,0,i,h,n)
B.b.ah(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aY(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iz,r)}}
A.ve.prototype={
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
A.vd.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.C()
r.c.aB(A.iA(r.d,r.e))},
$S:0}
A.vc.prototype={
$1(a){var s,r=this
r.a.a.C()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.aS(B.ap)}},
$S:1}
A.ek.prototype={
gng(){var s,r,q,p,o,n=this,m=t.s,l=A.k([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
B.b.D(l,A.k([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.rx.prototype={
$1(a){if(a!=null)return A.G(a)
return null},
$S:208}
A.mi.prototype={
a4(){return"MessageType."+this.b}}
A.wF.prototype={
uk(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hZ(a,b)
case"connect":return p.k5(a,b)
case"custom":return p.eb(a,b)
case"fileSystemExists":return p.fd(a,b)
case"fileSystemFlush":return p.fe(a,b)
case"fileSystemAccess":return p.fc(a,b)
case"runQuery":return p.i2(a,b)
case"exclusiveLock":return p.hY(a,b)
case"releaseLock":s=p.bv(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.t(A.y("Lock to be released is not active."))
q.b.an()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hW(a,b)
case"openAdditionalConnection":return p.i_(a,b)
case"updateRequest":return p.i3(a,b)
case"rollbackRequest":return p.i1(a,b)
case"commitRequest":return p.hX(a,b)
case"dedicatedCompatibilityCheck":return p.dK(a,b)
case"sharedCompatibilityCheck":return p.dK(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dK(a,b)
default:r=A.f7(new A.bB(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.w($.C,t.hl)
q.cn(r)
return q}}}
A.dA.prototype={
a4(){return"FileSystemImplementation."+this.b}}
A.cw.prototype={
a4(){return"TypeCode."+this.b},
u1(a){var s=null
switch(this.a){case 0:s=A.t(A.R("Unsupported type code",null))
break
case 1:a=A.aq(A.f6(a))
s=a
break
case 2:s=A.EU(t.bJ.a(a).toString(),null)
break
case 3:A.f6(a)
s=a
break
case 4:A.G(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.hU(a)
s=a
break
case 6:break}return s}}
A.el.prototype={
mt(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.R("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aD:B.b4[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.aq(A.f6(h))))
if(k!==0)a.bB(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bB(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f6(h))
if(k!==0)a.bB(k,e)
break
case 4:g=B.e.v(A.G(h))
k=s.dart_sqlite3_bind_text(d,i,c.cB(g),g.length)
if(k!==0)a.bB(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cB(h),h.length)
if(k!==0)a.bB(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bB(k,e)
break
case 7:f=A.hU(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bB(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mg()},
h(a,b){var s=this.c[b],r=s>=8?B.aD:B.b4[s]
return r.u1(this.a[b])},
j(a,b,c){this.mg()},
mg(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.B7.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:16}
A.qk.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.ql.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qo.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qp.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qq.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.vV.prototype={
uD(){var s,r,q,p
for(s=this.b,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.am(0)}}
A.iy.prototype={
a4(){return"FileType."+this.b}}
A.dQ.prototype={
a4(){return"StorageMode."+this.b}}
A.h0.prototype={
l(a){return"Remote error: "+this.a},
$iF:1}
A.du.prototype={}
A.AS.prototype={
$1(a){return A.bg(a.data)},
$S:210}
A.k6.prototype={
C(){var s=this.a
if(s!=null)s.C()
this.a=null}}
A.hx.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.C()
q.d.C()
q.e.C()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)p[n].abort()
B.b.am(p)
p=q.f
if(p!=null)p.b.an()
s=2
return A.a(q.a.f1(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
m8(a){var s=new v.G.AbortController()
a.onabort=A.AT(new A.yR(s))
this.w.push(s)
return s},
kx(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gtM()){r=p.m8(b)
o=s.kg(c,r.signal,d).aY(new A.yV(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.y("Requested operation on inactive lock state."))}if(o==null)o=A.iA(c,d)
q=p.a.z
return q instanceof A.dE?o.aY(q.gv2()):o},
w_(a){var s=this,r=s.m8(a),q=new A.w($.C,t.hy),p=new A.aI(q,t.ho),o=t.H
A.C5(s.a.f.kg(new A.yS(s,p),r.signal,o),new A.yT(p),o,t.K)
return q.aY(new A.yU(s,r))}}
A.yR.prototype={
$0(){return this.a.abort()},
$S:0}
A.yV.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:2}
A.yS.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.C,t.D)
s.f=new A.a4(r,new A.aI(q,t.h))
this.b.aB(r)
return q},
$S:3}
A.yT.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.c7(a,b)},
$S:9}
A.yU.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:2}
A.hv.prototype={
oK(a,b,c){this.b.a.aY(new A.yB(this))},
dK(a,b){return this.q9(a,b)},
q9(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mw(a),$async$dK)
case 3:q={r:d.gng(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dK,r)},
k5(a,b){return this.vb(a,b)},
vb(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$k5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glC()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.i0(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k5,r)},
eb(a,b){return this.vc(a,b)},
vc(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.ll(l)
n=a.r
s=7
return A.a(o.a.gcg(),$async$eb)
case 7:s=6
return A.a(d.cG(p,new A.qK(n)),$async$eb)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cG(p,new A.lh(a)),$async$eb)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eb,r)},
hZ(a,b){return this.vq(a,b)},
vq(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kA(new A.yG(p,a),t.m),$async$hZ)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hZ,r)},
i2(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.a
s=3
return A.a(n.gcg(),$async$i2)
case 3:m=d
q=o.kx(a.z,b,new A.yJ(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)},
hY(a,b){return this.vg(a,b)},
vg(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).w_(b),$async$hY)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hY,r)},
hX(a,b){return this.va(a,b)},
va(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dA(n,new A.yD(p,o),a),$async$hX)
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
return A.f($async$hX,r)},
i1(a,b){return this.vt(a,b)},
vt(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dA(n,new A.yI(p,o),a),$async$i1)
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
i3(a,b){return this.vw(a,b)},
vw(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dA(n,new A.yL(p,o),a),$async$i3)
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
return A.f($async$i3,r)},
i_(a,b){return this.vr(a,b)},
vr(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bv(a).a;++m.w
s=3
return A.a(A.Ba(),$async$i_)
case 3:o=d
n=o.a
p.w.kY(o.b).x.push(A.EV(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i_,r)},
hW(a,b){return this.v9(a,b)},
v9(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
B.b.H(p.x,o)
s=3
return A.a(o.q(),$async$hW)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
fe(a,b){return this.vj(a,b)},
vj(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fe=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).a.gcO(),$async$fe)
case 3:o=d
s=o instanceof A.dE?4:5
break
case 4:s=6
return A.a(o.cw(!1),$async$fe)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fe,r)},
fc(a,b){return this.vh(a,b)},
vh(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=B.b5[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcO(),$async$fc)
case 4:s=3
return A.a(l.kx(null,k,new j.yE(d,n,m,a),t.m),$async$fc)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fc,r)},
fd(a,b){return this.vi(a,b)},
vi(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcO(),$async$fd)
case 4:s=3
return A.a(n.kx(null,m,new l.yF(d,a),t.y),$async$fd)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
dA(a,b,c){return this.on(a,b,c)},
on(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dA)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dA,r)},
vp(a){},
hM(a){var s=0,r=A.h(t.X),q,p=this
var $async$hM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fQ({r:a,z:null,i:0,d:null,t:"custom"},B.cX,t.m),$async$hM)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)},
ll(a){return B.b.mM(this.x,new A.yA(a))},
bv(a){var s=a.d
if(s!=null)return this.ll(s)
else throw A.b(A.R("Request requires database id",null))},
$iDK:1}
A.yB.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:B.b.am(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.yG.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.ce(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.v0(h.d,A.I9(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcO():m.gcg(),$async$$0)
case 8:l=A.EV(m,null)
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
case 9:B.b.H(j.x,l)
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
A.yJ.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.y("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.el(s,r,A.bT(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.o7(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.aq(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.uR(l,k.s,q)
s=o.d
return A.Gs(s.sqlite3_get_autocommit(p)!==0,m,A.aq(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:36}
A.yD.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcg(),$async$$0)
case 3:q=b.a.pj().gcS().aN(new A.yC(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:68}
A.yC.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.i0(s))},
$S:69}
A.yI.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcg(),$async$$0)
case 3:q=b.a.rB().gcS().aN(new A.yH(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:68}
A.yH.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.i0(s))},
$S:69}
A.yL.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcg(),$async$$0)
case 3:q=b.a.t9().gcS().aN(new A.yK(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.yK.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.i0(s))},
$S:215}
A.yE.prototype={
$0(){var s,r,q,p=this,o=p.a.dt(new A.jn(A.FB(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fK(s.byteLength)
o.ex(A.bT(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fJ()
r=new Uint8Array(q)
o.iG(r,0)
q={r:t.a.a(J.Hs(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iE()}},
$S:36}
A.yF.prototype={
$0(){return this.a.iD(A.FB(B.b5[this.b.f]),0)===1},
$S:45}
A.yA.prototype={
$1(a){return a.b===this.a},
$S:216}
A.ln.prototype={
gcO(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iA(new A.rk(p),t.H):o,$async$gcO)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcO,r)},
gcg(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iA(new A.rj(p),t.u):o,$async$gcg)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcg,r)},
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
if(j!=null)j.uD()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.Dm()
A.C2(m)
k=l.a.get(m)
if(k==null)A.t(A.y("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bw(j,t.H),$async$q)
case 6:q.f.na()
return A.e(null,r)}})
return A.f($async$q,r)},
lQ(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a4(s,!0)
p=a.im(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.T(n,A.n(n).i("T<1>")).gG(0)).q()
n.j(0,p.d,p)
return new A.a4(p,!0)}return new A.a4(p,!1)},
uR(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aE(b,B.n)
else{s=null
r=null
q=this.lQ(a,b)
s=q.a
r=q.b
try{s.e8(new A.li(c.gtK()))}finally{if(r)s.dm()
else s.q()}}},
o7(a,b,c){var s,r=null,q=null,p=this.lQ(a,b)
r=p.a
q=p.b
try{s=A.J7(r,c)
return s}finally{if(q)r.dm()
else r.q()}}}
A.rk.prototype={
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
return A.a(A.wQ("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ge6()
s=3
break
case 5:case 6:s=10
return A.a(A.lB("drift_db/"+l.c,k===B.aw,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ge6()
s=3
break
case 7:s=11
return A.a(A.m_(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ge6()
s=3
break
case 8:l.z=A.C8("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rj.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcO(),$async$$0)
case 4:n=b
o.mR()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e2(B.e.v(n.a),1),n,0)
if(m===0)A.t(A.y("could not register vfs"))
$.Dm().j(0,n,m)
s=5
return A.a(l.f.kg(new A.ri(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:70}
A.ri.prototype={
$0(){var s=this.a
return s.a.b.ij(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:70}
A.y4.prototype={
glC(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.og()
r.Q!==$&&A.BM()
r.Q=s
q=s}return q},
ec(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ec=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cz(A.cA(A.KW(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$ec)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.im(i.port,i.lockName,null)
n.kY(l)
s=9
break
case 10:s=A.MQ(m.t)?11:12
break
case 11:s=13
return A.a(n.mw(m),$async$ec)
case 13:k=b
j.postMessage(k.gng())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.C(),$async$ec)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ec,r)},
kY(a){var s=this,r=A.JQ(a,s.d++,s)
s.c.push(r)
r.b.a.aY(new A.y5(s,r))
return r},
mw(a){return this.x.kA(new A.y6(this,a),t.p6)},
ce(a){return this.vN(a)},
vN(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$ce=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bg(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.y("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bw(n,t.he),$async$ce)
case 5:s=3
break
case 4:o=A.C5(q.b.ce(m),new A.y7(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$ce)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$ce,r)},
v0(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.aw||b===B.b_
o=A.Cf(t.cj)
n=c===0?null:new A.vV(c,A.dI(null,null,t.N,t.fw))
n=new A.ln(this,r,a,b,d,new A.lm(q+"-outer",q,new A.j1(o),p),n)
s.j(0,r,n)
return n}}
A.y5.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.y6.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.e7(),$async$$0)
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
return A.a(A.pf(),$async$$0)
case 9:case 8:j=a1
i=A.aO(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glC()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.i0(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hB(n,"message",!1,t.d4).gG(0),$async$$0)
case 15:e=b.HQ(a.bg(a1.data))
k=e.c
l=e.d
i.D(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.a(A.i3(),$async$$0)
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.t(0,new A.a4(B.bg,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.B6(c),$async$$0)
case 23:if(a1)i.t(0,new A.a4(B.bh,c))
case 22:d=A.O(i,i.$ti.c)
q=new A.ek(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:218}
A.y7.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:219}
A.ki.prototype={}
A.oh.prototype={
gmP(){return new A.hB(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.oM.prototype={
gmP(){return new A.dl(new A.A6(this),t.k8)},
q(){}}
A.A6.prototype={
$1(a){var s=A.k([],t.kG),r=A.k([],t.dw)
r.push(A.bq(this.a.a,"connect",new A.A3(new A.A7(s,r,a)),!1,t.m))
a.r=new A.A4(r)},
$S:220}
A.A7.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bq(a,"message",new A.A5(this.c),!1,t.m))},
$S:1}
A.A5.prototype={
$1(a){this.a.tz(a)},
$S:1}
A.A3.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bO(r,A.a_(r).i("bO<1,L>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.A4.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].C()},
$S:2}
A.oi.prototype={
og(){var s=v.G
if(!("Worker" in s))return null
return new A.z6(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.z6.prototype={}
A.nh.prototype={
gfS(){return A.G(this.c)}}
A.x8.prototype={
gkf(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iJ(a){var s,r=this,q=r.d=J.Hv(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
mK(a,b){var s
if(this.iJ(a))return
if(b==null)if(a instanceof A.eu)b="/"+a.a+"/"
else{s=J.a0(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.ls(b)},
f8(a){return this.mK(a,null)},
uV(){if(this.c===this.b.length)return
this.ls("no more input")},
uQ(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.t(A.aZ("position must be greater than or equal to 0."))
else if(c>n.length)A.t(A.aZ("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.t(A.aZ("position plus length must not go beyond the end of the string."))
s=this.a
r=A.k([0],t.t)
q=n.length
p=new A.wS(s,r,new Uint32Array(q))
p.oG(new A.ci(n),s)
o=c+b
if(o>q)A.t(A.aZ("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.t(A.aZ("Start may not be negative, was "+c+"."))
throw A.b(new A.nh(n,a,new A.hC(p,c,o)))},
ls(a){this.uQ("expected "+a+".",0,this.c)}}
A.hj.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.E0(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.E0(b,this))
s=this.a
s.$flags&2&&A.H(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.H(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lh(b)
B.f.av(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.t6(q)
q=r.a
s=r.b++
q.$flags&2&&A.H(q)
q[s]=b},
lh(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
t6(a){var s=this.lh(null)
B.f.av(s,0,a,this.a)
this.a=s},
ah(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ax(c,0,s,null,null))
s=this.a
if(d instanceof A.cx)B.f.ah(s,b,c,d.a,e)
else B.f.ah(s,b,c,d,e)},
av(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.or.prototype={}
A.cx.prototype={}
A.C0.prototype={}
A.hB.prototype={
aa(a,b,c,d){return A.bq(this.a,this.b,a,!1,this.$ti.c)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.jP.prototype={
C(){var s=this,r=A.b9(null,t.H)
if(s.b==null)return r
s.jE()
s.d=s.b=null
return r},
ih(a){var s,r=this
if(r.b==null)throw A.b(A.y("Subscription has been canceled."))
r.jE()
s=A.G4(new A.za(a),t.m)
s=s==null?null:A.cY(s)
r.d=s
r.jC()},
bd(){if(this.b==null)return;++this.a
this.jE()},
b1(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jC()},
jC(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jE(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibm:1}
A.z9.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.za.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dH.prototype
s.ot=s.l
s=A.bD.prototype
s.op=s.mS
s.oq=s.mT
s.os=s.mV
s.or=s.mU
s=A.b1.prototype
s.iL=s.aA
s.kV=s.aH
s.kW=s.aR
s=A.dj.prototype
s.ow=s.le
s.ox=s.lx
s.oy=s.m5
s=A.K.prototype
s.kU=s.ah
s=A.aC.prototype
s.kT=s.tJ
s=A.k7.prototype
s.oz=s.q
s=A.o.prototype
s.oo=s.ds
s=A.kU.prototype
s.kR=s.hU
s=A.fn.prototype
s.kS=s.f2
s=A.h9.prototype
s.ov=s.a0
s.ou=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"L5","Ip",47)
r(A,"Li","IT",11)
q(A,"LS","JB",18)
q(A,"LT","JC",18)
q(A,"LU","JD",18)
q(A,"LV","Ll",21)
r(A,"G9","LI",0)
q(A,"LW","Lm",25)
s(A,"LX","Lo",13)
r(A,"B2","Ln",0)
p(A,"M1",5,null,["$5"],["LC"],222,0)
p(A,"M6",4,null,["$1$4","$4"],["AY",function(a,b,c,d){return A.AY(a,b,c,d,t.z)}],223,0)
p(A,"M8",5,null,["$2$5","$5"],["AZ",function(a,b,c,d,e){var i=t.z
return A.AZ(a,b,c,d,e,i,i)}],224,0)
p(A,"M7",6,null,["$3$6"],["D1"],225,0)
p(A,"M4",4,null,["$1$4","$4"],["FR",function(a,b,c,d){return A.FR(a,b,c,d,t.z)}],226,0)
p(A,"M5",4,null,["$2$4","$4"],["FS",function(a,b,c,d){var i=t.z
return A.FS(a,b,c,d,i,i)}],227,0)
p(A,"M3",4,null,["$3$4","$4"],["FQ",function(a,b,c,d){var i=t.z
return A.FQ(a,b,c,d,i,i,i)}],228,0)
p(A,"M_",5,null,["$5"],["LB"],229,0)
p(A,"M9",4,null,["$4"],["B_"],230,0)
p(A,"LZ",5,null,["$5"],["LA"],231,0)
p(A,"LY",5,null,["$5"],["Lz"],232,0)
p(A,"M2",4,null,["$4"],["LD"],233,0)
p(A,"M0",5,null,["$5"],["FP"],234,0)
var j
o(j=A.eU.prototype,"geJ","bH",0)
o(j,"geK","bI",0)
n(A.eV.prototype,"gtS",0,1,null,["$2","$1"],["c7","aS"],66,0,0)
m(A.w.prototype,"giX","po",13)
n(j=A.e3.prototype,"gtw",0,1,null,["$2","$1"],["bx","tx"],66,0,0)
l(j,"goW","aA",15)
m(j,"goS","aH",13)
o(j,"gpf","aR",0)
o(j=A.dZ.prototype,"geJ","bH",0)
o(j,"geK","bI",0)
o(j=A.b1.prototype,"geJ","bH",0)
o(j,"geK","bI",0)
o(A.hA.prototype,"glN","qP",0)
l(j=A.cz.prototype,"gqH","qI",15)
m(j,"gqL","qM",13)
o(j,"gqJ","qK",0)
o(j=A.hD.prototype,"geJ","bH",0)
o(j,"geK","bI",0)
l(j,"gj9","ja",15)
m(j,"gjd","je",150)
o(j,"gjb","jc",0)
o(j=A.hL.prototype,"geJ","bH",0)
o(j,"geK","bI",0)
l(j,"gj9","ja",15)
m(j,"gjd","je",13)
o(j,"gjb","jc",0)
s(A,"D6","KP",30)
q(A,"D7","KQ",31)
s(A,"Me","Ix",47)
q(A,"Mn","KT",32)
k(j=A.o8.prototype,"gtv","t",15)
o(j,"ge6","q",0)
q(A,"Gd","MJ",31)
s(A,"Gc","MI",30)
q(A,"Mo","Jv",6)
p(A,"MW",2,null,["$1$2","$2"],["Gq",function(a,b){return A.Gq(a,b,t.o)}],235,0)
m(j=A.lq.prototype,"guP","Y",30)
l(j,"gvx","ac",31)
l(j,"gvD","vE",21)
q(A,"Mc","HI",6)
o(j=A.ja.prototype,"gqN","qO",0)
l(j,"gqQ","qR",115)
q(A,"N6","IR",61)
q(A,"Gb","HY",237)
q(A,"Mj","I2",238)
q(A,"Ml","Il",239)
q(A,"Mi","HD",240)
q(A,"Mk","I8",241)
q(A,"Bc","I1",6)
q(A,"Mz","DV",242)
r(A,"MA","LM",243)
r(A,"MS","KR",11)
r(A,"Oq","KS",11)
l(A.mC.prototype,"gwp","wq",8)
q(A,"Mg","BY",162)
l(j=A.ni.prototype,"gvm","vn",38)
l(j,"gvk","vl",133)
o(j,"gqE","jn",0)
q(A,"Nd","Jn",61)
o(A.ob.prototype,"gv4","k0",0)
o(A.mO.prototype,"gjT","f2",0)
o(A.mw.prototype,"gjT","f2",0)
l(j=A.fn.prototype,"gqF","qG",38)
o(j,"gmh","e0",3)
m(A.nX.prototype,"gqa","ha",54)
m(A.nW.prototype,"gqg","hb",54)
l(j=A.ll.prototype,"gvQ","vR",8)
m(j,"gvO","vP",174)
n(j,"gxI",0,5,null,["$5"],["xJ"],175,0,0)
n(j,"gxx",0,3,null,["$3"],["xy"],176,0,0)
n(j,"gxo",0,4,null,["$4"],["xp"],57,0,0)
n(j,"gxE",0,4,null,["$4"],["xF"],57,0,0)
n(j,"gxK",0,3,null,["$3"],["xL"],178,0,0)
m(j,"gxP","xQ",58)
m(j,"gxv","xw",58)
l(j,"gxt","xu",33)
n(j,"gxM",0,4,null,["$4"],["xN"],60,0,0)
n(j,"gxX",0,4,null,["$4"],["xY"],60,0,0)
m(j,"gxT","xU",182)
m(j,"gxR","xS",17)
m(j,"gxC","xD",17)
m(j,"gxG","xH",17)
m(j,"gxV","xW",17)
m(j,"gxq","xs",17)
l(j,"giF","xz",33)
n(j,"gxA",0,3,null,["$3"],["xB"],184,0,0)
l(j,"giH","xO",33)
l(j,"gun","uo",18)
l(j,"gui","uj",185)
n(j,"gul",0,5,null,["$5"],["um"],186,0,0)
n(j,"guu",0,4,null,["$4"],["uv"],27,0,0)
n(j,"guy",0,4,null,["$4"],["uz"],27,0,0)
n(j,"guw",0,4,null,["$4"],["ux"],27,0,0)
m(j,"guA","uB",63)
m(j,"gus","ut",63)
n(j,"guq",0,5,null,["$5"],["ur"],189,0,0)
m(j,"gug","uh",190)
m(j,"gue","uf",191)
n(j,"guc",0,3,null,["$3"],["ud"],192,0,0)
o(j=A.dE.prototype,"ge6","q",3)
o(j,"gv2","cF",3)
o(A.h7.prototype,"ge6","q",0)
o(A.lm.prototype,"gqi","qj",0)
l(A.el.prototype,"gtK","mt",209)
l(A.hv.prototype,"gvo","vp",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.Cd,J.m1,A.jj,J.fj,A.yZ,A.yx,A.o,A.l2,A.ei,A.U,A.ad,A.K,A.wO,A.ao,A.mg,A.cV,A.lx,A.nv,A.n4,A.lu,A.nV,A.iz,A.nH,A.ju,A.hI,A.iS,A.ft,A.hE,A.cr,A.xy,A.mv,A.iu,A.k4,A.uz,A.bE,A.aS,A.md,A.eu,A.hH,A.o1,A.hf,A.Af,A.o9,A.oY,A.cq,A.on,A.oV,A.k8,A.jC,A.o3,A.jU,A.oS,A.an,A.a9,A.b1,A.jI,A.nw,A.jS,A.eV,A.cb,A.w,A.o2,A.e3,A.oT,A.jE,A.o_,A.oj,A.z7,A.e2,A.hA,A.cz,A.jO,A.AE,A.AG,A.AF,A.AC,A.AD,A.AB,A.Ay,A.p3,A.Ax,A.Aw,A.AA,A.Az,A.p2,A.p4,A.p1,A.hT,A.jB,A.oo,A.zQ,A.e1,A.ov,A.b2,A.ox,A.oX,A.ow,A.ng,A.l5,A.aC,A.o5,A.pL,A.o4,A.l3,A.oN,A.eW,A.zM,A.Ag,A.p_,A.dm,A.aJ,A.om,A.aM,A.aD,A.z8,A.my,A.jp,A.ol,A.bk,A.m0,A.S,A.W,A.oR,A.jq,A.mX,A.a2,A.kf,A.xD,A.cc,A.ly,A.mu,A.zF,A.zG,A.lv,A.a3,A.lr,A.iH,A.ew,A.hQ,A.hG,A.iR,A.lq,A.mt,A.nI,A.cj,A.c1,A.t_,A.pY,A.iQ,A.jl,A.uO,A.jk,A.wN,A.qL,A.r0,A.yY,A.eh,A.kT,A.kU,A.pH,A.mm,A.fK,A.pG,A.ja,A.vQ,A.A8,A.vH,A.vy,A.jc,A.hM,A.vI,A.A9,A.es,A.dB,A.lW,A.cI,A.dC,A.dS,A.vw,A.la,A.c2,A.lN,A.mR,A.ag,A.va,A.wv,A.eG,A.cL,A.mM,A.wL,A.n_,A.eM,A.bo,A.hr,A.nb,A.aT,A.a1,A.pV,A.pW,A.pX,A.ry,A.ir,A.qj,A.iq,A.dJ,A.iv,A.bj,A.uF,A.cH,A.rI,A.lH,A.pJ,A.fk,A.kZ,A.ne,A.ix,A.rB,A.ut,A.f4,A.zO,A.oU,A.hK,A.tz,A.nd,A.vR,A.ou,A.vb,A.mC,A.uy,A.Ah,A.wt,A.d8,A.b_,A.cn,A.mL,A.cN,A.wK,A.cp,A.wD,A.aX,A.dD,A.fF,A.er,A.c8,A.qu,A.cE,A.mZ,A.oa,A.ht,A.pv,A.bi,A.qw,A.ni,A.d5,A.eA,A.uV,A.dL,A.mh,A.zX,A.zV,A.vi,A.pI,A.iP,A.jh,A.vn,A.mK,A.w4,A.b3,A.wd,A.hg,A.xa,A.bn,A.he,A.cM,A.fW,A.jg,A.cD,A.nx,A.xc,A.jf,A.jt,A.xn,A.cP,A.co,A.eC,A.bG,A.A1,A.xp,A.ob,A.hw,A.fn,A.y8,A.hq,A.nU,A.xV,A.je,A.oz,A.r1,A.eR,A.oc,A.y_,A.hs,A.nX,A.nW,A.qD,A.x9,A.mA,A.mB,A.wS,A.n7,A.h9,A.t0,A.br,A.cy,A.cs,A.na,A.ct,A.c7,A.kI,A.r3,A.e4,A.wU,A.ej,A.b4,A.kX,A.qJ,A.oI,A.zW,A.bP,A.li,A.dh,A.jn,A.xQ,A.xL,A.xS,A.xR,A.dW,A.di,A.ll,A.da,A.eX,A.xM,A.pC,A.jT,A.zb,A.oy,A.oq,A.zS,A.xG,A.im,A.wF,A.ik,A.lh,A.lA,A.rZ,A.d1,A.lm,A.j1,A.ek,A.vV,A.h0,A.k6,A.hx,A.ln,A.y4,A.ki,A.oi,A.z6,A.x8,A.C0,A.jP])
q(J.m1,[J.m3,J.iJ,J.aF,J.bs,J.fI,J.et,J.dF])
q(J.aF,[J.dH,J.B,A.fQ,A.j3])
q(J.dH,[J.mD,J.dV,J.bQ])
r(J.m2,A.jj)
r(J.tw,J.B)
q(J.et,[J.iI,J.m4])
q(A.o,[A.dY,A.J,A.cl,A.am,A.iw,A.eN,A.dc,A.bH,A.f_,A.o0,A.oQ,A.hO,A.ev,A.ji])
q(A.dY,[A.ef,A.kj])
r(A.jM,A.ef)
r(A.jJ,A.kj)
q(A.ei,[A.q_,A.pT,A.pZ,A.tq,A.xo,A.Bs,A.Bu,A.yf,A.ye,A.AJ,A.AI,A.rX,A.rS,A.zf,A.ze,A.zq,A.zt,A.x4,A.x5,A.x2,A.z5,A.z4,A.A0,A.zw,A.z1,A.zP,A.uP,A.zK,A.qI,A.ys,A.rT,A.Bw,A.BC,A.BD,A.Bb,A.pO,A.pQ,A.pS,A.kW,A.pK,A.AL,A.pM,A.uT,A.Bj,A.vG,A.vF,A.vB,A.vC,A.vD,A.vE,A.vz,A.vA,A.vP,A.vL,A.vM,A.vJ,A.vO,A.qG,A.qH,A.wx,A.ws,A.vT,A.BN,A.wW,A.wX,A.rv,A.ru,A.rw,A.rt,A.rs,A.rr,A.rq,A.rm,A.rn,A.ro,A.uG,A.uI,A.uK,A.uM,A.uH,A.rJ,A.rK,A.BB,A.rE,A.rC,A.rF,A.rG,A.BH,A.tY,A.tZ,A.u0,A.um,A.u1,A.u2,A.u3,A.u4,A.u5,A.u6,A.u7,A.u8,A.u9,A.ua,A.uc,A.ud,A.ue,A.uf,A.ug,A.uh,A.ui,A.tL,A.tN,A.tR,A.tB,A.tA,A.tP,A.tO,A.tV,A.tW,A.tX,A.tF,A.tH,A.tJ,A.tT,A.tU,A.tE,A.tC,A.uu,A.ux,A.uw,A.uv,A.v5,A.v2,A.v4,A.wl,A.wn,A.wo,A.wp,A.wG,A.wJ,A.qf,A.qi,A.qe,A.qh,A.qb,A.qa,A.q7,A.qg,A.qc,A.q9,A.q8,A.qd,A.q6,A.q4,A.q2,A.pw,A.px,A.qy,A.qx,A.xl,A.xd,A.xj,A.xe,A.xf,A.xg,A.B8,A.B9,A.v1,A.uW,A.uX,A.uY,A.uZ,A.v_,A.vk,A.vl,A.vt,A.vr,A.vq,A.vp,A.vs,A.wb,A.w5,A.w7,A.w9,A.we,A.wj,A.xb,A.Bl,A.BG,A.BE,A.BF,A.xw,A.xs,A.xu,A.xq,A.yP,A.yM,A.wz,A.wy,A.y9,A.xU,A.uD,A.uE,A.uN,A.yW,A.yX,A.Bq,A.Bp,A.Bf,A.y3,A.y1,A.qE,A.qF,A.B0,A.t2,A.t1,A.t3,A.t5,A.t7,A.t4,A.tl,A.wY,A.rb,A.Ac,A.Bz,A.BI,A.BJ,A.pB,A.z_,A.z0,A.qm,A.qn,A.qr,A.qs,A.qt,A.rH,A.pF,A.pD,A.zz,A.zC,A.zD,A.tp,A.tn,A.zy,A.wR,A.xH,A.xI,A.xJ,A.xK,A.w2,A.w3,A.w1,A.w0,A.w_,A.xW,A.rf,A.vc,A.rx,A.B7,A.qk,A.ql,A.qo,A.qp,A.qq,A.AS,A.yC,A.yH,A.yK,A.yA,A.A6,A.A7,A.A5,A.A3,A.z9,A.za])
q(A.q_,[A.yy,A.pU,A.qC,A.tx,A.Bt,A.AK,A.B1,A.rY,A.rR,A.zg,A.zr,A.zu,A.yb,A.zv,A.uA,A.uR,A.zN,A.yr,A.Aq,A.xE,A.Ap,A.Ao,A.rV,A.rU,A.pN,A.pP,A.pR,A.kV,A.v9,A.uU,A.vv,A.vK,A.vx,A.AR,A.ww,A.wr,A.vU,A.wu,A.wM,A.BO,A.B5,A.rp,A.rL,A.tD,A.v6,A.wq,A.wH,A.wI,A.q5,A.py,A.xY,A.Bg,A.y0,A.t6,A.re,A.zE,A.xX,A.yT,A.y7])
r(A.bO,A.jJ)
q(A.U,[A.eg,A.bD,A.dj,A.os])
q(A.ad,[A.dG,A.mP,A.df,A.m5,A.nG,A.mY,A.ok,A.jb,A.iM,A.kN,A.bB,A.cU,A.nF,A.bl,A.l8])
q(A.K,[A.hk,A.n1,A.nP,A.ho,A.el,A.hj])
r(A.ci,A.hk)
q(A.pZ,[A.By,A.vX,A.yg,A.yh,A.Aj,A.Ai,A.AH,A.yj,A.yk,A.ym,A.yn,A.yl,A.yi,A.rW,A.zh,A.zm,A.zl,A.zj,A.zi,A.zp,A.zo,A.zn,A.zs,A.x3,A.x6,A.x1,A.Ab,A.Aa,A.ya,A.yw,A.yv,A.zT,A.zR,A.AM,A.AN,A.z3,A.z2,A.A_,A.zZ,A.AX,A.At,A.As,A.rl,A.AU,A.AV,A.uS,A.vu,A.vN,A.rA,A.uJ,A.uL,A.rD,A.u_,A.ub,A.un,A.uo,A.up,A.uq,A.ur,A.us,A.uj,A.uk,A.ul,A.tK,A.tM,A.tQ,A.tG,A.tI,A.tS,A.wm,A.rz,A.tm,A.rP,A.rO,A.x_,A.q1,A.q3,A.qv,A.qB,A.qA,A.qz,A.xi,A.xh,A.xk,A.wc,A.w6,A.w8,A.wa,A.wf,A.wk,A.wi,A.wh,A.wg,A.xm,A.vo,A.vj,A.xx,A.xv,A.xt,A.xr,A.yQ,A.yN,A.yO,A.wA,A.vh,A.tk,A.t8,A.tf,A.tg,A.th,A.ti,A.td,A.te,A.t9,A.ta,A.tb,A.tc,A.tj,A.zx,A.rc,A.rd,A.r9,A.r8,A.ra,A.r5,A.r4,A.r6,A.r7,A.Ad,A.Ae,A.BK,A.qP,A.qM,A.qR,A.qT,A.qV,A.qO,A.qU,A.qZ,A.qX,A.qW,A.qQ,A.qS,A.qY,A.qN,A.pz,A.pA,A.xN,A.pE,A.zA,A.zB,A.zc,A.to,A.rg,A.rh,A.ve,A.vd,A.yR,A.yV,A.yS,A.yU,A.yB,A.yG,A.yJ,A.yD,A.yI,A.yL,A.yE,A.yF,A.rk,A.rj,A.ri,A.y5,A.y6,A.A4])
q(A.J,[A.Z,A.ep,A.T,A.ak,A.aN,A.eZ,A.jW])
q(A.Z,[A.cu,A.X,A.bv,A.iO,A.ot])
r(A.eo,A.cl)
r(A.is,A.eN)
r(A.fw,A.dc)
q(A.hI,[A.oA,A.oB,A.oC])
q(A.oA,[A.a4,A.k1,A.k2,A.hJ,A.oD])
r(A.f2,A.oB)
q(A.oC,[A.f3,A.oE])
r(A.ke,A.iS)
r(A.cT,A.ke)
r(A.io,A.cT)
q(A.ft,[A.aW,A.iB])
q(A.cr,[A.ip,A.k3])
r(A.dz,A.ip)
r(A.iF,A.tq)
r(A.j8,A.df)
q(A.xo,[A.wZ,A.ig])
q(A.bD,[A.iL,A.iK,A.jV])
r(A.fP,A.fQ)
q(A.j3,[A.j2,A.fR])
q(A.fR,[A.jY,A.k_])
r(A.jZ,A.jY)
r(A.dO,A.jZ)
r(A.k0,A.k_)
r(A.bS,A.k0)
q(A.dO,[A.mo,A.mp])
q(A.bS,[A.mq,A.mr,A.ms,A.j4,A.j5,A.j6,A.ez])
r(A.k9,A.ok)
q(A.a9,[A.hN,A.jr,A.jN,A.dl,A.jQ,A.jH,A.id,A.hB])
r(A.b5,A.hN)
r(A.b0,A.b5)
q(A.b1,[A.dZ,A.hD,A.hL])
r(A.eU,A.dZ)
r(A.jD,A.jI)
q(A.eV,[A.aI,A.ap])
q(A.e3,[A.cW,A.hP])
r(A.k5,A.o_)
q(A.oj,[A.ca,A.hz])
r(A.jX,A.cW)
r(A.f0,A.jQ)
q(A.p1,[A.od,A.oH])
q(A.dj,[A.e_,A.jK])
r(A.dk,A.k3)
q(A.ng,[A.k7,A.Ak,A.yo,A.oP])
r(A.zI,A.k7)
q(A.l5,[A.eq,A.kR,A.ty])
q(A.eq,[A.kL,A.mb,A.nM])
q(A.aC,[A.oW,A.ie,A.kS,A.m8,A.m7,A.nN,A.jw,A.lT])
q(A.oW,[A.kM,A.mc])
r(A.yt,A.o5)
q(A.pL,[A.yp,A.hu,A.o8,A.Ar])
r(A.yc,A.yp)
r(A.m6,A.iM)
r(A.zJ,A.l3)
r(A.zL,A.zM)
r(A.p5,A.p_)
r(A.Au,A.p5)
q(A.bB,[A.d9,A.iD])
r(A.og,A.kf)
r(A.h6,A.hQ)
r(A.oK,A.lT)
r(A.A2,A.t_)
r(A.oL,A.A2)
r(A.kG,A.pY)
r(A.jm,A.wN)
r(A.oe,A.kG)
r(A.lj,A.oe)
r(A.of,A.uO)
r(A.r_,A.of)
r(A.mS,A.eh)
r(A.l0,A.kT)
r(A.dx,A.jr)
q(A.kU,[A.v8,A.wE])
r(A.js,A.pH)
r(A.nf,A.js)
r(A.ii,A.a3)
r(A.mF,A.ja)
q(A.c2,[A.l6,A.ld,A.jy,A.fA,A.nq,A.kP])
q(A.mR,[A.lD,A.lE,A.lI,A.lF,A.lC,A.lR,A.lL,A.lG,A.lP,A.lJ,A.lw,A.nc,A.mx,A.l1,A.lU,A.l4,A.lS,A.mV,A.mn,A.mN,A.lg,A.lf,A.ls,A.lX,A.kH,A.lz,A.n0,A.ny,A.nz,A.nB,A.nD,A.nC,A.nA,A.nS,A.nT,A.nR,A.kJ,A.nQ,A.nO,A.mJ,A.l7,A.mW,A.lc,A.lb,A.mT,A.kE,A.kF,A.le,A.no,A.nt,A.nj,A.nk,A.nm,A.nu,A.nn,A.nr])
q(A.ag,[A.lQ,A.lO,A.fC,A.lM,A.fB,A.fz,A.hd,A.fS,A.ih,A.lV,A.h1,A.h2,A.fO,A.fY,A.fu,A.fv,A.fH,A.fi,A.fy,A.h4,A.fs,A.fr,A.hi,A.hp,A.fV,A.fp,A.np,A.nl,A.ns])
q(A.va,[A.iX,A.j_,A.iY,A.j0,A.iU,A.iV,A.iT,A.iZ,A.iW])
q(A.z8,[A.aY,A.cC,A.dU,A.mE,A.ij,A.dy,A.d3,A.l9,A.c3,A.iE,A.v7,A.dN,A.ed,A.c9,A.kQ,A.cQ,A.i9,A.fT,A.j9,A.lt,A.jo,A.vm,A.fD,A.mi,A.dA,A.cw,A.iy,A.dQ])
q(A.cL,[A.iN,A.j7,A.ia,A.ib])
r(A.pu,A.ry)
q(A.dJ,[A.eQ,A.eP,A.eB,A.fm,A.fU,A.fE,A.cO,A.h_,A.h3,A.eJ,A.ha,A.fN,A.fq,A.em,A.fZ])
q(A.eJ,[A.hl,A.fG])
r(A.m9,A.ou)
q(A.d8,[A.ai,A.c4,A.dv,A.d_])
r(A.fo,A.oa)
r(A.yd,A.zV)
q(A.bn,[A.eO,A.db,A.h5,A.bN,A.ck,A.cm,A.eD,A.eF,A.en,A.dw])
q(A.fn,[A.mO,A.mw])
r(A.xT,A.pJ)
r(A.uC,A.r1)
r(A.mf,A.eR)
q(A.hs,[A.jA,A.eS])
r(A.p0,A.nX)
r(A.y2,A.p0)
r(A.tu,A.x9)
q(A.tu,[A.vS,A.xF,A.xZ])
r(A.lK,A.n7)
q(A.h9,[A.hC,A.n9])
r(A.h8,A.na)
r(A.dd,A.n9)
r(A.hb,A.ej)
r(A.kY,A.b4)
q(A.kY,[A.lY,A.dE,A.h7])
q(A.kX,[A.op,A.oO])
r(A.oF,A.qJ)
r(A.oG,A.oF)
r(A.mU,A.oG)
r(A.oJ,A.oI)
r(A.c6,A.oJ)
q(A.b2,[A.eT,A.b6])
r(A.hn,A.wU)
q(A.b6,[A.jR,A.jL,A.hy,A.hS])
r(A.vZ,A.wF)
r(A.qK,A.lh)
r(A.du,A.h0)
r(A.hv,A.vZ)
q(A.ki,[A.oh,A.oM])
r(A.nh,A.h8)
r(A.or,A.hj)
r(A.cx,A.or)
s(A.hk,A.nH)
s(A.kj,A.K)
s(A.jY,A.K)
s(A.jZ,A.iz)
s(A.k_,A.K)
s(A.k0,A.iz)
s(A.cW,A.jE)
s(A.hP,A.oT)
s(A.ke,A.oX)
s(A.p5,A.ng)
s(A.oe,A.qL)
s(A.of,A.r0)
s(A.ou,A.pW)
s(A.oa,A.pX)
s(A.p0,A.nW)
s(A.oF,A.K)
s(A.oG,A.mt)
s(A.oI,A.nI)
s(A.oJ,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",aa:"double",aV:"num",l:"String",Q:"bool",W:"Null",p:"List",j:"Object",I:"Map",L:"JSObject"},mangledNames:{},types:["~()","~(L)","W()","A<~>()","A<~>(bG)","A<W>(bG)","l(l)","fS(~)","~(i)","W(j,aG)","Q(l)","i()","S<l,@>(@,@)","~(j,aG)","~(p<i>)","~(j?)","W(L)","i(bp,i)","~(~())","A<b3>()","A<W>()","Q(j?)","Q(@)","W(j)","A<~>(jT)","~(@)","W(@)","~(da,i,i,i)","0&()","j?(j?)","Q(j?,j?)","i(j?)","@(@)","i(bp)","Q(br)","j?(I<l,j?>)","L()","~(l,l)","~(a1)","~(j?,j?)","~(de)","A<~>(~)","Q(c8)","A<W>(r2)","S<l,j?>(@,@)","Q()","A<p<l>>()","i(@,@)","A<i>()","Q(bj)","Q(dD)","l(I<l,j?>)","A<@>()","Q(aX)","A<j?>(nY,hq)","i(cI)","A<cI>(l)","i(b4,i,i,i)","i(b4,i)","l(ey)","i(bp,i,i,bs)","aa(i)","~(l,@)","~(da,i)","@()","~(@,@)","~(j[aG?])","@(l)","A<bm<~>>()","~(~)","A<eR>()","W(~)","h1(I<l,j?>?)","i(i,cH)","Q(cH)","l(cH)","~(p<cj>)","A<a9<p<i>>>()","l?(I<l,j?>)","~(aT)","Q(l,l)","A<I<l,j?>?>()","i(l)","A<p<I<l,j?>?>>()","h2(p<I<l,j?>?>)","W(l,l[j?])","A<p<j?>>()","~(dM<p<i>>)","A<aV?>()","A<l>()","fV(i)","fp(i)","fs(p<bi>)","fr(bi?)","fC(p<bj>)","fB(i)","fz(i)","hd(Q)","fO(p<l>)","A<cp>()","fY(cp)","A<p<cN>>()","h4(p<cN>)","~(i,@)","hi(~)","Q(hK)","~(I<l,j?>?)","~(p<I<l,j?>>)","eW<@,@>(bC<@>)","a9<p<i>>()","~(eM)","~(p<bi>)","fK()","i(i,i)","i(c8,c8)","~(jc)","~(l,j?)","l(cn)","l()","Q(cn)","aX()","dD()","fF()","er()","c8()","S<l,dB>(l,he)","l(@)","A<I<l,j?>?>(l)","Q(i)","l(i,i)","cM(@)","bi()","i(i)","~(cD)","w<@>?()","A<bo>(bo)","bo(bo)","bo(j)","A<dS>(l)","dL/(j?)","A<j?>(j?)","I<l,j?>(p<j?>)","A<i>(bG)","i(dS)","aD(i)","l(i[i])","cP()","co()","eC()","A<W>(~)","~(@,aG)","A<@>(bG)","p<I<l,j?>>(cp)","A<Q>(l)","A<~>(l)","W(j?)","Q(cE<j?>)","Q(cC)","Q(dU)","~(c2)","l(l?)","l?()","bi(I<l,j?>)","0&(l,i?)","j(cy)","j(br)","i(br,br)","p<cy>(S<j,p<br>>)","dd()","l(j?)","~(i,l,i)","~(Cp,p<Cq>)","p<eG>(j?)","~(N,av,N,~())","~(bs,i)","bp?(b4,i,i,i,i)","i(b4,i,i)","Q(aY)","i(b4?,i,i)","p<cL>(j?)","Q(+(l,j))","i(+(l,j),+(l,j))","i(bp,bs)","~(l,l?)","i(bp,i,i)","i(i())","~(~(i,l,i),i,i,i,bs)","W(bQ,bQ)","i(+(l,j?),+(l,j?))","i(da,i,i,i,i)","i(i(i),i)","i(Cu,i)","i(Cu,i,i)","I<l,j?>(c6)","j?(~)","L(B<j?>)","j?(wV)","W(~())","L(L?)","~(ee)","A<~>(i,cS)","A<~>(i)","cS()","A<L>(l)","W(d1)","A<W>(L)","L(j)","W(j?,aG)","l?(j?)","~(ej)","L(L)","A<L>()","l(l,l)","bj()","A<bm<ct>>()","~(ct)","Q(hx)","A<bj>(bG)","A<ek>()","0&(j?,aG)","~(dM<L>)","@(@,l)","~(N?,av?,N,j,aG)","0^(N?,av?,N,0^())<j?>","0^(N?,av?,N,0^(1^),1^)<j?,j?>","0^(N?,av?,N,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(N,av,N,0^())<j?>","0^(1^)(N,av,N,0^(1^))<j?,j?>","0^(1^,2^)(N,av,N,0^(1^,2^))<j?,j?,j?>","an?(N,av,N,j,aG?)","~(N?,av?,N,~())","de(N,av,N,aD,~())","de(N,av,N,aD,~(de))","~(N,av,N,l)","N(N?,av?,N,jB?,I<j?,j?>?)","0^(0^,0^)<aV>","W(@,aG)","fu(i)","fv(p<j?>)","fH(p<l>)","fi(aV?)","fy(l)","bj(I<l,j?>)","aM()","i(cy)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a4&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.k1&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.k2&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hJ&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.oD&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.f2&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.f3&&A.Gu(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.oE&&A.Gu(a,b.a)}}
A.Kk(v.typeUniverse,JSON.parse('{"bQ":"dH","mD":"dH","dV":"dH","Nz":"fQ","B":{"p":["1"],"aF":[],"J":["1"],"L":[],"o":["1"],"ba":["1"]},"m3":{"Q":[],"aj":[]},"iJ":{"W":[],"aj":[]},"aF":{"L":[]},"dH":{"aF":[],"L":[]},"m2":{"jj":[]},"tw":{"B":["1"],"p":["1"],"aF":[],"J":["1"],"L":[],"o":["1"],"ba":["1"]},"et":{"aa":[],"aV":[],"aw":["aV"]},"iI":{"aa":[],"i":[],"aV":[],"aw":["aV"],"aj":[]},"m4":{"aa":[],"aV":[],"aw":["aV"],"aj":[]},"dF":{"l":[],"aw":["l"],"ba":["@"],"aj":[]},"dY":{"o":["2"]},"ef":{"dY":["1","2"],"o":["2"],"o.E":"2"},"jM":{"ef":["1","2"],"dY":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"jJ":{"K":["2"],"p":["2"],"dY":["1","2"],"J":["2"],"o":["2"]},"bO":{"jJ":["1","2"],"K":["2"],"p":["2"],"dY":["1","2"],"J":["2"],"o":["2"],"K.E":"2","o.E":"2"},"eg":{"U":["3","4"],"I":["3","4"],"U.V":"4","U.K":"3"},"dG":{"ad":[]},"mP":{"ad":[]},"ci":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"J":{"o":["1"]},"Z":{"J":["1"],"o":["1"]},"cu":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"cl":{"o":["2"],"o.E":"2"},"eo":{"cl":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"X":{"Z":["2"],"J":["2"],"o":["2"],"Z.E":"2","o.E":"2"},"am":{"o":["1"],"o.E":"1"},"iw":{"o":["2"],"o.E":"2"},"eN":{"o":["1"],"o.E":"1"},"is":{"eN":["1"],"J":["1"],"o":["1"],"o.E":"1"},"dc":{"o":["1"],"o.E":"1"},"fw":{"dc":["1"],"J":["1"],"o":["1"],"o.E":"1"},"ep":{"J":["1"],"o":["1"],"o.E":"1"},"bH":{"o":["1"],"o.E":"1"},"hk":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"bv":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"io":{"cT":["1","2"],"I":["1","2"]},"ft":{"I":["1","2"]},"aW":{"ft":["1","2"],"I":["1","2"]},"f_":{"o":["1"],"o.E":"1"},"iB":{"ft":["1","2"],"I":["1","2"]},"ip":{"cr":["1"],"eK":["1"],"J":["1"],"o":["1"]},"dz":{"cr":["1"],"eK":["1"],"J":["1"],"o":["1"]},"j8":{"df":[],"ad":[]},"m5":{"ad":[]},"nG":{"ad":[]},"mv":{"F":[]},"k4":{"aG":[]},"mY":{"ad":[]},"bD":{"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"T":{"J":["1"],"o":["1"],"o.E":"1"},"ak":{"J":["1"],"o":["1"],"o.E":"1"},"aN":{"J":["S<1,2>"],"o":["S<1,2>"],"o.E":"S<1,2>"},"iL":{"bD":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"iK":{"bD":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"hH":{"mQ":[],"ey":[]},"o0":{"o":["mQ"],"o.E":"mQ"},"hf":{"ey":[]},"oQ":{"o":["ey"],"o.E":"ey"},"fP":{"aF":[],"L":[],"ee":[],"aj":[]},"fQ":{"aF":[],"L":[],"ee":[],"aj":[]},"j3":{"aF":[],"L":[]},"oY":{"ee":[]},"j2":{"aF":[],"BW":[],"L":[],"aj":[]},"fR":{"bR":["1"],"aF":[],"L":[],"ba":["1"]},"dO":{"K":["aa"],"p":["aa"],"bR":["aa"],"aF":[],"J":["aa"],"L":[],"ba":["aa"],"o":["aa"]},"bS":{"K":["i"],"p":["i"],"bR":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"]},"mo":{"dO":[],"rM":[],"K":["aa"],"p":["aa"],"bR":["aa"],"aF":[],"J":["aa"],"L":[],"ba":["aa"],"o":["aa"],"aj":[],"K.E":"aa"},"mp":{"dO":[],"rN":[],"K":["aa"],"p":["aa"],"bR":["aa"],"aF":[],"J":["aa"],"L":[],"ba":["aa"],"o":["aa"],"aj":[],"K.E":"aa"},"mq":{"bS":[],"tr":[],"K":["i"],"p":["i"],"bR":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"aj":[],"K.E":"i"},"mr":{"bS":[],"ts":[],"K":["i"],"p":["i"],"bR":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"aj":[],"K.E":"i"},"ms":{"bS":[],"tt":[],"K":["i"],"p":["i"],"bR":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"aj":[],"K.E":"i"},"j4":{"bS":[],"xA":[],"K":["i"],"p":["i"],"bR":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"aj":[],"K.E":"i"},"j5":{"bS":[],"xB":[],"K":["i"],"p":["i"],"bR":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"aj":[],"K.E":"i"},"j6":{"bS":[],"xC":[],"K":["i"],"p":["i"],"bR":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"aj":[],"K.E":"i"},"ez":{"bS":[],"cS":[],"K":["i"],"p":["i"],"bR":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"aj":[],"K.E":"i"},"ok":{"ad":[]},"k9":{"df":[],"ad":[]},"an":{"ad":[]},"w":{"A":["1"]},"dM":{"bC":["1"]},"k8":{"de":[]},"jC":{"il":["1"]},"hO":{"o":["1"],"o.E":"1"},"b0":{"b5":["1"],"hN":["1"],"a9":["1"],"a9.T":"1"},"eU":{"dZ":["1"],"b1":["1"],"bm":["1"],"b1.T":"1"},"jI":{"bC":["1"]},"jD":{"jI":["1"],"bC":["1"]},"nw":{"F":[]},"jb":{"ad":[]},"eV":{"il":["1"]},"aI":{"eV":["1"],"il":["1"]},"ap":{"eV":["1"],"il":["1"]},"jr":{"a9":["1"]},"e3":{"bC":["1"]},"cW":{"jE":["1"],"e3":["1"],"bC":["1"]},"hP":{"e3":["1"],"bC":["1"]},"b5":{"hN":["1"],"a9":["1"],"a9.T":"1"},"dZ":{"b1":["1"],"bm":["1"],"b1.T":"1"},"k5":{"o_":["1"]},"b1":{"bm":["1"],"b1.T":"1"},"hN":{"a9":["1"]},"hA":{"bm":["1"]},"jN":{"a9":["1"],"a9.T":"1"},"dl":{"a9":["1"],"a9.T":"1"},"jX":{"cW":["1"],"jE":["1"],"e3":["1"],"dM":["1"],"bC":["1"]},"jQ":{"a9":["2"]},"hD":{"b1":["2"],"bm":["2"],"b1.T":"2"},"f0":{"jQ":["1","2"],"a9":["2"],"a9.T":"2"},"jO":{"bC":["1"]},"hL":{"b1":["2"],"bm":["2"],"b1.T":"2"},"jH":{"a9":["2"],"a9.T":"2"},"p1":{"N":[]},"od":{"N":[]},"oH":{"N":[]},"hT":{"av":[]},"dj":{"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"e_":{"dj":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"jK":{"dj":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"eZ":{"J":["1"],"o":["1"],"o.E":"1"},"jV":{"bD":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"dk":{"cr":["1"],"eK":["1"],"J":["1"],"o":["1"]},"ev":{"o":["1"],"o.E":"1"},"K":{"p":["1"],"J":["1"],"o":["1"]},"U":{"I":["1","2"]},"jW":{"J":["2"],"o":["2"],"o.E":"2"},"iS":{"I":["1","2"]},"cT":{"I":["1","2"]},"iO":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"cr":{"eK":["1"],"J":["1"],"o":["1"]},"k3":{"cr":["1"],"eK":["1"],"J":["1"],"o":["1"]},"eW":{"bC":["1"]},"os":{"U":["l","@"],"I":["l","@"],"U.V":"@","U.K":"l"},"ot":{"Z":["l"],"J":["l"],"o":["l"],"Z.E":"l","o.E":"l"},"kL":{"eq":[]},"oW":{"aC":["l","p<i>"]},"kM":{"aC":["l","p<i>"],"aC.T":"p<i>"},"ie":{"aC":["p<i>","l"],"aC.T":"l"},"kS":{"aC":["l","p<i>"],"aC.T":"p<i>"},"iM":{"ad":[]},"m6":{"ad":[]},"m8":{"aC":["j?","l"],"aC.T":"l"},"m7":{"aC":["l","j?"],"aC.T":"j?"},"mb":{"eq":[]},"mc":{"aC":["l","p<i>"],"aC.T":"p<i>"},"nM":{"eq":[]},"nN":{"aC":["l","p<i>"],"aC.T":"p<i>"},"jw":{"aC":["p<i>","l"],"aC.T":"l"},"DC":{"aw":["DC"]},"aM":{"aw":["aM"]},"aa":{"aV":[],"aw":["aV"]},"aD":{"aw":["aD"]},"i":{"aV":[],"aw":["aV"]},"p":{"J":["1"],"o":["1"]},"aV":{"aw":["aV"]},"mQ":{"ey":[]},"eK":{"J":["1"],"o":["1"]},"l":{"aw":["l"]},"aJ":{"aw":["DC"]},"kN":{"ad":[]},"df":{"ad":[]},"bB":{"ad":[]},"d9":{"ad":[]},"iD":{"d9":[],"ad":[]},"cU":{"ad":[]},"nF":{"cU":[],"ad":[]},"bl":{"ad":[]},"l8":{"ad":[]},"my":{"ad":[]},"jp":{"ad":[]},"ol":{"F":[]},"bk":{"F":[]},"m0":{"cU":[],"F":[],"ad":[]},"oR":{"aG":[]},"ji":{"o":["i"],"o.E":"i"},"kf":{"nJ":[]},"cc":{"nJ":[]},"og":{"nJ":[]},"mu":{"F":[]},"tt":{"p":["i"],"J":["i"],"o":["i"]},"cS":{"p":["i"],"J":["i"],"o":["i"]},"xC":{"p":["i"],"J":["i"],"o":["i"]},"tr":{"p":["i"],"J":["i"],"o":["i"]},"xA":{"p":["i"],"J":["i"],"o":["i"]},"ts":{"p":["i"],"J":["i"],"o":["i"]},"xB":{"p":["i"],"J":["i"],"o":["i"]},"rM":{"p":["aa"],"J":["aa"],"o":["aa"]},"rN":{"p":["aa"],"J":["aa"],"o":["aa"]},"a3":{"I":["2","3"]},"h6":{"hQ":["1","eK<1>"],"hQ.E":"1"},"lT":{"aC":["p<i>","cj"]},"oK":{"aC":["p<i>","cj"],"aC.T":"cj"},"jl":{"F":[]},"n1":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"mS":{"F":[]},"kT":{"BX":[]},"l0":{"BX":[]},"dx":{"a9":["p<i>"],"a9.T":"p<i>"},"eh":{"F":[]},"nf":{"js":[]},"ii":{"a3":["l","l","1"],"I":["l","1"],"a3.V":"1","a3.K":"l","a3.C":"l"},"ja":{"Cz":[]},"mF":{"Cz":[]},"dC":{"F":[]},"lQ":{"ag":[]},"lO":{"ag":[]},"fC":{"ag":[]},"lM":{"ag":[]},"fB":{"ag":[]},"fz":{"ag":[]},"hd":{"ag":[]},"fS":{"ag":[]},"ih":{"ag":[]},"lV":{"ag":[]},"h1":{"ag":[]},"h2":{"ag":[]},"fO":{"ag":[]},"fY":{"ag":[]},"fu":{"ag":[]},"fv":{"ag":[]},"fH":{"ag":[]},"fi":{"ag":[]},"fy":{"ag":[]},"h4":{"ag":[]},"fs":{"ag":[]},"fr":{"ag":[]},"hi":{"ag":[]},"hp":{"ag":[]},"fV":{"ag":[]},"fp":{"ag":[]},"np":{"ag":[]},"nl":{"ag":[]},"ns":{"ag":[]},"l6":{"c2":[]},"ld":{"c2":[]},"jy":{"c2":[]},"fA":{"c2":[]},"iN":{"cL":[]},"j7":{"cL":[]},"ia":{"cL":[]},"ib":{"cL":[]},"nq":{"c2":[]},"kP":{"c2":[]},"hr":{"F":[]},"ir":{"r2":[]},"dJ":{"F":[]},"eQ":{"F":[]},"eP":{"F":[]},"eB":{"F":[]},"fm":{"F":[]},"fU":{"F":[]},"fE":{"F":[]},"cO":{"F":[]},"h_":{"F":[]},"h3":{"F":[]},"eJ":{"F":[]},"hl":{"F":[]},"fG":{"F":[]},"ha":{"F":[]},"fN":{"F":[]},"fq":{"F":[]},"em":{"F":[]},"fZ":{"F":[]},"fk":{"F":[]},"kZ":{"F":[]},"f4":{"F":[]},"ai":{"d8":[]},"c4":{"d8":[]},"dv":{"d8":[]},"d_":{"d8":[]},"ht":{"F":[]},"d5":{"F":[]},"bn":{"F":[]},"eO":{"F":[]},"db":{"F":[]},"h5":{"F":[]},"bN":{"F":[]},"ck":{"F":[]},"cm":{"F":[]},"eD":{"F":[]},"eF":{"F":[]},"en":{"F":[]},"dw":{"F":[]},"je":{"F":[]},"oz":{"Ei":[]},"mf":{"eR":[]},"oc":{"nY":[]},"jA":{"hs":[]},"eS":{"hs":[]},"mB":{"F":[]},"lK":{"cs":[],"aw":["cs"]},"hC":{"dd":[],"aw":["n8"]},"cs":{"aw":["cs"]},"n7":{"cs":[],"aw":["cs"]},"n8":{"aw":["n8"]},"n9":{"aw":["n8"]},"na":{"F":[]},"h8":{"bk":[],"F":[]},"h9":{"aw":["n8"]},"dd":{"aw":["n8"]},"c7":{"F":[]},"wV":{"p":["j?"],"J":["j?"],"o":["j?"]},"nP":{"K":["j?"],"wV":[],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"hb":{"ej":[]},"lY":{"b4":[]},"op":{"jx":[],"bp":[]},"c6":{"U":["l","@"],"I":["l","@"],"U.V":"@","U.K":"l"},"mU":{"K":["c6"],"p":["c6"],"J":["c6"],"o":["c6"],"K.E":"c6"},"dh":{"F":[]},"kY":{"b4":[]},"kX":{"jx":[],"bp":[]},"eT":{"b2":["eT"],"b2.E":"eT"},"di":{"Cq":[]},"dW":{"Cp":[]},"ho":{"K":["di"],"p":["di"],"J":["di"],"o":["di"],"K.E":"di"},"id":{"a9":["1"],"a9.T":"1"},"dE":{"b4":[]},"b6":{"b2":["b6"]},"oq":{"jx":[],"bp":[]},"jR":{"b6":[],"b2":["b6"],"b2.E":"b6"},"jL":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hy":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hS":{"b6":[],"b2":["b6"],"b2.E":"b6"},"h7":{"b4":[]},"oO":{"jx":[],"bp":[]},"ik":{"F":[]},"el":{"K":["j?"],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"h0":{"F":[]},"du":{"F":[]},"hv":{"DK":[]},"oh":{"ki":["L"]},"oM":{"ki":["L"]},"nh":{"bk":[],"F":[]},"cx":{"hj":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"hj":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"or":{"hj":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"]},"hB":{"a9":["1"],"a9.T":"1"},"jP":{"bm":["1"]}}'))
A.Kj(v.typeUniverse,JSON.parse('{"iz":1,"nH":1,"hk":1,"kj":2,"ip":1,"fR":1,"bC":1,"jr":1,"oT":1,"oj":1,"oX":2,"iS":2,"k3":1,"ke":2,"l3":1,"l5":2,"k7":1,"mt":1,"nI":2,"mR":1,"fn":1,"HC":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ab
return{fM:s("@<@>"),ie:s("HC<j?>"),bG:s("ed"),om:s("id<B<j?>>"),hw:s("cD"),lo:s("ee"),fW:s("BW"),jA:s("ih"),fo:s("ii<l>"),iv:s("a1"),eg:s("DK"),dF:s("BX()"),E:s("ci"),fw:s("ej"),bP:s("aw<@>"),p6:s("ek"),br:s("il<L>"),n8:s("bi"),M:s("dz<l>"),lp:s("ln"),O:s("J<@>"),C:s("ad"),fq:s("c2"),mA:s("F"),eZ:s("lA"),d9:s("aX"),oX:s("lH"),A:s("bj"),k4:s("ix"),f6:s("cH"),pk:s("rM"),kI:s("rN"),Y:s("bk"),gY:s("Nv"),nW:s("A<L>"),fr:s("A<dL>"),mj:s("A<W>"),g7:s("A<@>"),fP:s("A<d1?>"),n1:s("A<j?>(nY,hq)"),jN:s("A<hn?>"),co:s("dB"),w:s("cI"),cF:s("dE"),m6:s("tr"),bW:s("ts"),jx:s("tt"),nZ:s("iH<@>"),e7:s("o<@>"),gi:s("B<a1>"),aw:s("B<cE<@>>"),oq:s("B<cE<j?>>"),oS:s("B<la>"),i5:s("B<cj>"),mK:s("B<aX>"),kB:s("B<lN>"),iw:s("B<A<~>>"),mr:s("B<dD>"),kG:s("B<L>"),bi:s("B<p<I<l,j?>>>"),h2:s("B<p<j>>"),ae:s("B<p<eG>>"),dO:s("B<p<j?>>"),kf:s("B<I<l,j>>"),d:s("B<I<l,j?>>"),e8:s("B<mm>"),i7:s("B<eA>"),hf:s("B<j>"),ox:s("B<eC>"),fi:s("B<cn>"),my:s("B<co>"),k:s("B<d8>"),eK:s("B<cL>"),k1:s("B<fW>"),g2:s("B<jg>"),bo:s("B<jh>"),cM:s("B<eG>"),gc:s("B<mM>"),eb:s("B<aT>"),fU:s("B<+controller,sync(dM<ct>,Q)>"),lw:s("B<+controller,sync(dM<~>,Q)>"),kC:s("B<+(dQ,l)>"),jO:s("B<+(l,I<l,j?>)>"),l5:s("B<+(l,j)>"),fj:s("B<+(l,aX?)>"),iE:s("B<+(l,j?)>"),aY:s("B<+(hw,j?,j?,aG?)>"),g1:s("B<cM>"),cP:s("B<n_>"),kj:s("B<cN>"),lE:s("B<hb>"),c0:s("B<c8>"),dw:s("B<bm<@>>"),s:s("B<l>"),en:s("B<hg>"),bs:s("B<cS>"),fC:s("B<b_>"),az:s("B<hv>"),i4:s("B<hw>"),fV:s("B<hx>"),pg:s("B<br>"),dg:s("B<cy>"),p8:s("B<oy>"),mc:s("B<hK>"),gy:s("B<hM>"),gk:s("B<aa>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<an?>"),eU:s("B<I<l,j?>?>"),c:s("B<j?>"),mf:s("B<l?>"),iy:s("ba<@>"),T:s("iJ"),m:s("L"),bJ:s("bs"),g:s("bQ"),dX:s("bR<@>"),aq:s("aF"),fZ:s("m9"),kk:s("ev<eT>"),p3:s("ev<b6>"),hI:s("ew<@>"),ba:s("p<bi>"),ck:s("p<bj>"),ip:s("p<L>"),ew:s("p<I<l,j>>"),J:s("p<I<l,j?>>"),eT:s("p<eA>"),hg:s("p<eC>"),a6:s("p<co>"),jX:s("p<jg>"),kR:s("p<cM>"),fE:s("p<cN>"),i:s("p<l>"),bR:s("p<hg>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<I<l,j?>?>"),kS:s("p<j?>"),jD:s("iP"),ia:s("S<l,dB>"),af:s("S<l,l>"),I:s("S<l,@>"),eB:s("S<l,j?>"),a3:s("iR<@,@>"),cy:s("I<l,cP>"),dV:s("I<l,i>"),f:s("I<@,@>"),G:s("I<l,j?>"),d2:s("I<j?,j?>"),iZ:s("X<l,@>"),r:s("dL"),a:s("fP"),dQ:s("dO"),aj:s("bS"),Z:s("ez"),P:s("W"),K:s("j"),k5:s("cn"),dZ:s("co"),i0:s("cp"),jS:s("d8"),ot:s("mK"),gq:s("fW"),e:s("b3"),b0:s("d9"),lZ:s("NB"),oZ:s("aT"),aK:s("+()"),ja:s("+(L,im)"),hP:s("+(I<l,cP>,I<l,I<l,j?>>)"),cU:s("+(dQ,l)"),mk:s("+(Q,L)"),kO:s("+basicSupport,supportsReadWriteUnsafe(Q,Q)"),mt:s("+(L?,L)"),po:s("+(j?,i)"),g0:s("+(I<l,j?>?,cP?,co?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mQ"),Q:s("cM"),V:s("ag"),hF:s("bv<l>"),cu:s("h6<@>"),aJ:s("eK<l>"),g_:s("h7"),hq:s("cs"),ol:s("dd"),gE:s("nb"),l:s("aG"),nv:s("nd"),h3:s("he"),ha:s("bm<ct>"),dz:s("bm<@>"),ey:s("bm<~>"),bv:s("ne"),ku:s("a9<p<i>>"),lI:s("dS"),hL:s("js"),N:s("l"),f_:s("hg"),k6:s("jt"),o8:s("Cz"),n6:s("c9"),fD:s("bo"),nw:s("cP"),ic:s("eM"),hU:s("de"),q:s("nx"),dH:s("aj"),do:s("df"),hM:s("xA"),mC:s("xB"),oR:s("cx"),nn:s("xC"),p:s("cS"),cx:s("dV"),ph:s("cT<l,l>"),eo:s("cU"),jJ:s("nJ"),e6:s("b4"),j2:s("jx"),n:s("hn"),fA:s("b_"),gx:s("am<cC>"),mz:s("am<aY>"),mE:s("am<dU>"),v:s("bH<l>"),u:s("eR"),bp:s("eS"),be:s("nY"),ec:s("hs"),iq:s("aI<cS>"),jk:s("aI<@>"),ho:s("aI<i>"),h:s("aI<~>"),oW:s("eW<@,@>"),R:s("eX<L>"),d4:s("hB<L>"),nI:s("w<d1>"),a7:s("w<L>"),hl:s("w<0&>"),os:s("w<l>"),jz:s("w<cS>"),g5:s("w<Q>"),_:s("w<@>"),hy:s("w<i>"),jQ:s("w<i?>"),D:s("w<~>"),nf:s("br"),mp:s("e_<j?,j?>"),mB:s("hG"),k8:s("dl<L>"),fb:s("dl<p<i>>"),mI:s("oN<cj>"),jy:s("e4<ct,~()>"),ag:s("e4<~,Q()>"),lU:s("e4<~,~()>"),hT:s("cz<L>"),lj:s("cz<p<i>>"),aP:s("ap<d1>"),h1:s("ap<L>"),ex:s("ap<Q>"),F:s("ap<~>"),g8:s("oU"),y:s("Q"),W:s("aa"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aG)"),S:s("i"),ma:s("bi?"),gK:s("A<W>?"),b3:s("d1?"),B:s("L?"),bE:s("p<cE<@>>?"),lH:s("p<@>?"),b:s("I<l,j?>?"),nh:s("dL?"),X:s("j?"),ad:s("Ei?"),dY:s("co?"),lY:s("jf?"),jB:s("cM?"),x:s("l?"),f8:s("cP?"),a_:s("cx?"),he:s("hn?"),dd:s("br?"),o9:s("Q?"),dA:s("aa?"),U:s("i?"),jh:s("aV?"),o:s("aV"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aG)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ci=J.m1.prototype
B.b=J.B.prototype
B.c=J.iI.prototype
B.x=J.et.prototype
B.a=J.dF.prototype
B.cj=J.bQ.prototype
B.ck=J.aF.prototype
B.az=A.j2.prototype
B.cY=A.j4.prototype
B.y=A.j5.prototype
B.f=A.ez.prototype
B.ba=J.mD.prototype
B.aK=J.dV.prototype
B.ap=new A.du("Operation was cancelled")
B.a6=new A.i9(0,"visible")
B.aN=new A.i9(1,"hidden")
B.bt=new A.kI(1)
B.e6=new A.kI(-1)
B.a7=new A.ed(0,"applied")
B.a8=new A.ed(1,"quarantined")
B.bu=new A.ed(2,"conflict")
B.a9=new A.ed(3,"skipped")
B.bv=new A.kM(127)
B.aa=new A.kQ(0,"changed")
B.aO=new A.kQ(1,"deleted")
B.bx=new A.ie(!1)
B.aq=new A.kR(B.bx)
B.by=new A.ie(!0)
B.bw=new A.kR(B.by)
B.c0=new A.jN(A.ab("jN<p<i>>"))
B.bz=new A.dx(B.c0)
B.bA=new A.iF(A.MW(),A.ab("iF<i>"))
B.bB=new A.kP()
B.ar=new A.kS()
B.bC=new A.l1()
B.bD=new A.l4()
B.F={}
B.a_=new A.aW(B.F,[],A.ab("aW<l,j>"))
B.ec=new A.v7(0,"conflict")
B.e7=new A.qu()
B.aP=new A.r_()
B.bE=new A.lr(A.ab("lr<0&>"))
B.t=new A.lq()
B.aQ=new A.lu(A.ab("lu<0&>"))
B.aR=new A.lv()
B.P=new A.lv()
B.bF=new A.lU()
B.bG=new A.m0()
B.aS=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bH=function() {
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
B.bM=function(getTagFallback) {
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
B.bI=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bL=function(hooks) {
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
B.bK=function(hooks) {
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
B.bJ=function(hooks) {
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
B.aT=function(hooks) { return hooks; }

B.h=new A.ty()
B.bN=new A.uC()
B.bO=new A.iP()
B.k=new A.fS()
B.bP=new A.my()
B.aU=new A.vH()
B.bQ=new A.vQ()
B.bR=new A.mJ()
B.d=new A.wO()
B.bS=new A.nc()
B.bT=new A.nj()
B.bU=new A.nk()
B.bV=new A.nm()
B.bW=new A.nr()
B.bX=new A.nt()
B.o=new A.nM()
B.e=new A.nN()
B.bY=new A.nO()
B.bZ=new A.nQ()
B.c_=new A.yd()
B.u=new A.yY()
B.ab=new A.z7()
B.as=new A.zF()
B.aV=new A.f4()
B.i=new A.oH()
B.l=new A.oK()
B.c1=new A.Ah()
B.Q=new A.oR()
B.ac=new A.dy(0,"create")
B.A=new A.dy(1,"update")
B.c2=new A.dy(2,"archive")
B.c3=new A.dy(3,"restore")
B.aW=new A.dy(4,"purge")
B.c4=new A.dy(5,"hide")
B.H=new A.ij(0,"local")
B.at=new A.ij(1,"remote")
B.ad=new A.ij(2,"resolution")
B.c5=new A.l9(3,"ignore")
B.R=new A.l9(4,"replace")
B.p=new A.lt(0,"normal")
B.aX=new A.lt(1,"full")
B.D=new A.aD(0)
B.au=new A.aD(1e6)
B.aY=new A.aD(16e3)
B.e8=new A.aD(18e8)
B.c6=new A.aD(2e5)
B.aZ=new A.aD(3e5)
B.ae=new A.aD(3e7)
B.S=new A.aD(3e8)
B.af=new A.aD(5e5)
B.c7=new A.aD(5e6)
B.e9=new A.aD(6048e8)
B.ea=new A.aD(7776e9)
B.eb=new A.aD(864e8)
B.av=new A.c3(0,"text")
B.T=new A.c3(1,"int")
B.U=new A.c3(2,"real")
B.B=new A.c3(3,"bool")
B.V=new A.c3(4,"date")
B.I=new A.c3(5,"enumValue")
B.W=new A.c3(6,"json")
B.X=new A.c3(7,"jsonList")
B.J=new A.c3(8,"ref")
B.c8=new A.ix(!1)
B.aw=new A.dA("x",1,"opfsExternalLocks")
B.b_=new A.dA("y",2,"opfsExternalLocksWorkaround")
B.b0=new A.fD("/database",0,"database")
B.b1=new A.fD("/database-journal",1,"journal")
B.ce=new A.bk("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.cf=new A.bk("fieldCipher envelope must be a map.",null,null)
B.ay=new A.aW(B.F,[],A.ab("aW<l,l>"))
B.cg=new A.er(B.ay)
B.b2=new A.iE(0,"live")
B.cl=new A.m7(null)
B.cm=new A.m8(null)
B.cn=new A.d3(0,"textExpected")
B.co=new A.d3(1,"intExpected")
B.cp=new A.d3(2,"numberExpected")
B.cq=new A.d3(3,"boolExpected")
B.cr=new A.d3(4,"jsonExpected")
B.cs=new A.d3(5,"jsonListExpected")
B.ct=new A.d3(6,"enumValueRejected")
B.cu=new A.mc(255)
B.ax=new A.ew(B.bE,A.ab("ew<l>"))
B.cv=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b3=s([13,10],t.t)
B.aD=new A.cw(0,"unknown")
B.aE=new A.cw(1,"integer")
B.aF=new A.cw(2,"bigInt")
B.aG=new A.cw(3,"float")
B.aH=new A.cw(4,"text")
B.aI=new A.cw(5,"blob")
B.aJ=new A.cw(6,"$null")
B.bo=new A.cw(7,"boolean")
B.b4=s([B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.aJ,B.bo],A.ab("B<cw>"))
B.cw=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.cx=s([B.a6,B.aN],A.ab("B<i9>"))
B.bd=new A.aY(0,"eq")
B.d5=new A.aY(1,"neq")
B.d9=new A.aY(2,"gt")
B.da=new A.aY(3,"gte")
B.db=new A.aY(4,"lt")
B.dc=new A.aY(5,"lte")
B.dd=new A.aY(6,"inValues")
B.de=new A.aY(7,"between")
B.df=new A.aY(8,"startsWith")
B.dg=new A.aY(9,"endsWith")
B.d6=new A.aY(10,"contains")
B.d7=new A.aY(11,"isNull")
B.d8=new A.aY(12,"isNotNull")
B.cy=s([B.bd,B.d5,B.d9,B.da,B.db,B.dc,B.dd,B.de,B.df,B.dg,B.d6,B.d7,B.d8],A.ab("B<aY>"))
B.cc=new A.iy(0,"database")
B.cd=new A.iy(1,"journal")
B.b5=s([B.cc,B.cd],A.ab("B<iy>"))
B.z=new A.cQ(0,"clean")
B.G=new A.cQ(1,"dirty")
B.bl=new A.cQ(2,"inFlight")
B.a5=new A.cQ(3,"conflict")
B.ao=new A.cQ(4,"error")
B.dy=new A.cQ(5,"quarantine")
B.dz=new A.cQ(6,"blocked")
B.cz=s([B.z,B.G,B.bl,B.a5,B.ao,B.dy,B.dz],A.ab("B<cQ>"))
B.Y=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ag=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cA=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.ch=new A.iE(1,"notArchived")
B.cB=s([B.b2,B.ch],A.ab("B<iE>"))
B.cC=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b8=new A.j9(0,"fileUpload")
B.b9=new A.j9(1,"fileRemove")
B.cD=s([B.b8,B.b9],A.ab("B<j9>"))
B.cb=new A.dA("s",0,"opfsShared")
B.c9=new A.dA("i",3,"indexedDb")
B.ca=new A.dA("m",4,"inMemory")
B.cE=s([B.cb,B.aw,B.b_,B.c9,B.ca],A.ab("B<dA>"))
B.ah=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bp=new A.cC(0,"sum")
B.bq=new A.cC(1,"avg")
B.br=new A.cC(2,"min")
B.bs=new A.cC(3,"max")
B.cF=s([B.bp,B.bq,B.br,B.bs],A.ab("B<cC>"))
B.cG=s([B.av,B.T,B.U,B.B,B.V,B.I,B.W,B.X,B.J],A.ab("B<c3>"))
B.m=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ai=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.Z=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cH=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fT(0,"upsert")
B.L=new A.fT(1,"archive")
B.a2=new A.fT(2,"restore")
B.cI=s([B.v,B.L,B.a2],A.ab("B<fT>"))
B.cJ=s([],A.ab("B<dB>"))
B.b6=s([],t.d)
B.cL=s([],t.my)
B.cM=s([],t.kj)
B.q=s([],t.s)
B.cK=s([],t.t)
B.aj=s([],t.dG)
B.n=s([],t.c)
B.cN=s(["*"],t.s)
B.cO=s([B.b0,B.b1],A.ab("B<fD>"))
B.cP=s(["id","updated"],t.s)
B.cQ=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bg=new A.dQ(0,"opfs")
B.bh=new A.dQ(1,"indexedDb")
B.dr=new A.dQ(2,"inMemory")
B.cR=s([B.bg,B.bh,B.dr],A.ab("B<dQ>"))
B.bm=new A.dU(0,"normal")
B.bn=new A.dU(1,"full")
B.cS=s([B.bm,B.bn],A.ab("B<dU>"))
B.ak=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cT=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cU=new A.iB([16,10,24,12,32,14],A.ab("iB<i,i>"))
B.d0={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.mb()
B.r=new A.kL()
B.cV=new A.aW(B.d0,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.o,B.o],A.ab("aW<l,eq>"))
B.al=new A.aW(B.F,[],A.ab("aW<l,i>"))
B.j=new A.aW(B.F,[],A.ab("aW<l,j?>"))
B.am=new A.aW(B.F,[],A.ab("aW<i,I<l,j?>(I<l,j?>)>"))
B.cX=new A.mi(11,"simpleSuccessResponse",A.ab("mi<L>"))
B.a0=new A.dN(0,"createOrUpdate")
B.a1=new A.dN(1,"createOrUpdateMerge")
B.b7=new A.dN(2,"create")
B.K=new A.dN(3,"update")
B.C=new A.dN(4,"archive")
B.E=new A.dN(5,"restore")
B.ed=new A.vm(2,"readWriteCreate")
B.d2=new A.cn("id",!1)
B.d3=new A.cp(B.b6,null,null,!1,!1)
B.bb=new A.mE(0,"native")
B.aA=new A.mE(1,"web")
B.M=new A.b3(0,1,0,0,0,!1)
B.an=new A.b3(0,0,0,0,0,!0)
B.a3=new A.b3(0,0,0,0,0,!1)
B.d4=new A.b3(0,0,0,1,0,!1)
B.bc=new A.b3(0,0,1,0,0,!1)
B.a4=new A.b3(1,0,0,0,0,!1)
B.dh=new A.a4("archived",!0)
B.di=new A.a4("0",B.n)
B.aB=new A.k1(!1,!1)
B.dj=new A.f2(0,0,0)
B.dk=new A.f2(null,null,null)
B.d_={hidden:0}
B.dl=new A.dz(B.d_,1,t.M)
B.cZ={id:0,archived:1,hidden:2,extra:3}
B.be=new A.dz(B.cZ,4,t.M)
B.d1={open:0,contract_request:1,contract_event:2}
B.dm=new A.dz(B.d1,3,t.M)
B.bf=new A.dz(B.F,0,t.M)
B.dn=new A.jo(0,"insert")
B.dp=new A.jo(1,"update")
B.dq=new A.jo(2,"delete")
B.ds=new A.jt(-1,null)
B.dt=new A.ju("_clientToken")
B.N=new A.c9(0,"closed")
B.du=new A.c9(1,"opening")
B.bi=new A.c9(2,"offline")
B.aC=new A.c9(3,"authRequired")
B.bj=new A.c9(4,"idle")
B.dv=new A.c9(5,"pulling")
B.dw=new A.c9(6,"pushing")
B.dx=new A.c9(7,"backoff")
B.bk=new A.c9(8,"paused")
B.O=new A.bo(B.al,B.al,0,0,0,0,!1)
B.dA=new A.eM(B.N,0,0,0,0,null,null,null)
B.dB=A.bL("kG")
B.dC=A.bL("ee")
B.dD=A.bL("BW")
B.dE=A.bL("rM")
B.dF=A.bL("rN")
B.dG=A.bL("tr")
B.dH=A.bL("ts")
B.dI=A.bL("tt")
B.dJ=A.bL("L")
B.dK=A.bL("j")
B.dL=A.bL("jm")
B.dM=A.bL("xA")
B.dN=A.bL("xB")
B.dO=A.bL("xC")
B.dP=A.bL("cS")
B.aL=new A.jw(!1)
B.dQ=new A.jw(!0)
B.dR=new A.dh(14)
B.dS=new A.dh(522)
B.dT=new A.dh(778)
B.dU=new A.Aw(B.i,A.LY())
B.dV=new A.Ax(B.i,A.LZ())
B.dW=new A.Ay(B.i,A.M_())
B.dX=new A.Az(B.i,A.M0())
B.dY=new A.p2(B.i,A.M1())
B.dZ=new A.AA(B.i,A.M2())
B.e_=new A.AB(B.i,A.M3())
B.e0=new A.AC(B.i,A.M4())
B.e1=new A.AD(B.i,A.M5())
B.e2=new A.AF(B.i,A.M7())
B.e3=new A.AG(B.i,A.M8())
B.e4=new A.AE(B.i,A.M6())
B.e5=new A.p3(B.i,A.M9())
B.cW=new A.aW(B.F,[],A.ab("aW<j?,j?>"))
B.aM=new A.p4(B.i,B.cW)})();(function staticFields(){$.zH=null
$.f8=A.k([],t.hf)
$.Lt=null
$.El=null
$.vY=0
$.mH=A.Li()
$.DI=null
$.DH=null
$.Gn=null
$.G6=null
$.Gx=null
$.Bi=null
$.Bv=null
$.Dc=null
$.zU=A.k([],A.ab("B<p<j>?>"))
$.hX=null
$.kl=null
$.km=null
$.D0=!1
$.C=B.i
$.zY=null
$.EO=null
$.EP=null
$.EQ=null
$.ER=null
$.CH=A.yz("_lastQuoRemDigits")
$.CI=A.yz("_lastQuoRemUsed")
$.jG=A.yz("_lastRemUsed")
$.CJ=A.yz("_lastRem_nsh")
$.EF=""
$.EG=null
$.fX=function(){var s=t.N
return A.u(s,s)}()
$.Fx=null
$.AQ=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Nr","GO",()=>A.Bn("_$dart_dartClosure"))
s($,"Nq","ff",()=>A.Bn("_$dart_dartClosure_dartJSInterop"))
s($,"O4","pn",()=>A.vf(0))
s($,"Os","Hn",()=>B.i.aV(new A.By(),A.ab("A<~>")))
s($,"Om","Hk",()=>A.k([new J.m2()],A.ab("B<jj>")))
s($,"NJ","GS",()=>A.dg(A.xz({
toString:function(){return"$receiver$"}})))
s($,"NK","GT",()=>A.dg(A.xz({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"NL","GU",()=>A.dg(A.xz(null)))
s($,"NM","GV",()=>A.dg(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"NP","GY",()=>A.dg(A.xz(void 0)))
s($,"NQ","GZ",()=>A.dg(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"NO","GX",()=>A.dg(A.EC(null)))
s($,"NN","GW",()=>A.dg(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"NS","H0",()=>A.dg(A.EC(void 0)))
s($,"NR","H_",()=>A.dg(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"NV","Dn",()=>A.JA())
s($,"Nx","eb",()=>$.Hn())
s($,"Nw","GP",()=>A.JT(!1,B.i,t.y))
s($,"Oa","Ha",()=>A.vf(4096))
s($,"O8","H8",()=>new A.At().$0())
s($,"O9","H9",()=>new A.As().$0())
s($,"NX","Do",()=>A.IM(A.b7(A.k([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"NW","H1",()=>A.vf(0))
s($,"O3","ch",()=>A.jF(0))
s($,"O1","fg",()=>A.jF(1))
s($,"O2","H4",()=>A.jF(2))
s($,"O_","Dq",()=>$.fg().bC(0))
s($,"NY","Dp",()=>A.jF(1e4))
r($,"O0","H3",()=>A.af("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"NZ","H2",()=>A.vf(8))
s($,"O5","H5",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"O6","H6",()=>A.af("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"O7","H7",()=>typeof URLSearchParams=="function")
s($,"Od","fh",()=>A.ku(B.dK))
s($,"NC","kz",()=>{A.IW()
return $.vY})
s($,"Oe","Hd",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"NA","BQ",()=>{var q=new A.zG(A.IL(8))
q.oM()
return q})
s($,"Ns","ky",()=>A.HH(B.cY.gab(A.IN(A.b7(A.k([1],t.t)))),0,null).getInt8(0)===1?B.P:B.aR)
s($,"Nj","Di",()=>A.af("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Og","BR",()=>A.af("\\r\\n|\\r|\\n",!0,!1))
s($,"Ny","GQ",()=>A.Eq())
s($,"Ob","Dr",()=>A.af("^[\\x00-\\x7F]+$",!0,!1))
s($,"Oc","Hb",()=>A.af('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"Ou","Ho",()=>A.af('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Of","He",()=>A.af("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"Oj","Hh",()=>A.af('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Oi","Hg",()=>A.af("\\\\(.)",!0,!1))
s($,"Or","Hm",()=>A.af('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"Ov","Hp",()=>A.af("(?:"+$.He().a+")*",!0,!1))
s($,"Nn","Dj",()=>A.af("^[0-9a-f]{64}$",!0,!1))
s($,"Ol","Hj",()=>A.Er())
s($,"Ot","po",()=>A.af("^[a-z0-9]{15}$",!0,!1))
r($,"L1","Hc",()=>A.HZ().a)
s($,"Nt","Dk",()=>A.af("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"No","GM",()=>A.C1("declaredNames",t.aJ))
s($,"Np","GN",()=>A.C1("fieldByName",A.ab("I<l,aX>")))
s($,"Oh","Hf",()=>A.af("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"NI","kB",()=>new A.j())
s($,"Oo","i8",()=>new A.qD($.Dl()))
s($,"NF","GR",()=>new A.vS(A.af("/",!0,!1),A.af("[^/]$",!0,!1),A.af("^/",!0,!1)))
s($,"NH","pm",()=>new A.xZ(A.af("[/\\\\]",!0,!1),A.af("[^/\\\\]$",!0,!1),A.af("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.af("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"NG","kA",()=>new A.xF(A.af("/",!0,!1),A.af("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.af("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.af("^/",!0,!1)))
s($,"NE","Dl",()=>A.Jm())
s($,"Nm","GL",()=>$.fg().bD(0,63).bC(0))
s($,"Nl","GK",()=>{var q=$.fg()
return q.bD(0,63).fU(0,q)})
s($,"Nk","pl",()=>A.Er())
s($,"NT","Dm",()=>A.C1(null,t.S))
s($,"On","Hl",()=>A.Iz(A.k([A.Cy("files"),A.Cy("blocks")],t.s)))
s($,"Nu","BP",()=>{var q,p,o=A.u(t.N,A.ab("fD"))
for(q=0;q<2;++q){p=B.cO[q]
o.j(0,p.c,p)}return o})
s($,"Ok","Hi",()=>A.Eq())
r($,"NU","kC",()=>{var q="navigator"
return A.Iq(A.Ir(A.Da(A.GC(),q),A.Cy("locks")))?A.Da(A.Da(A.GC(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fQ,ArrayBuffer:A.fP,ArrayBufferView:A.j3,DataView:A.j2,Float32Array:A.mo,Float64Array:A.mp,Int16Array:A.mq,Int32Array:A.mr,Int8Array:A.ms,Uint16Array:A.j4,Uint32Array:A.j5,Uint8ClampedArray:A.j6,CanvasPixelArray:A.j6,Uint8Array:A.ez})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fR.$nativeSuperclassTag="ArrayBufferView"
A.jY.$nativeSuperclassTag="ArrayBufferView"
A.jZ.$nativeSuperclassTag="ArrayBufferView"
A.dO.$nativeSuperclassTag="ArrayBufferView"
A.k_.$nativeSuperclassTag="ArrayBufferView"
A.k0.$nativeSuperclassTag="ArrayBufferView"
A.bS.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.MU
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
