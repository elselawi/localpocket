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
if(a[b]!==s){A.ML(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.CC(b)
return new s(c,this)}:function(){if(s===null)s=A.CC(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.CC(a).prototype
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
CL(a,b,c,d){return{i:a,p:b,e:c,x:d}},
AY(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.CJ==null){A.Mh()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Ea("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.zg
if(o==null)o=$.zg=A.AX(n)
p=q[o]}if(p!=null)return p
p=A.Mq(a)
if(p!=null)return p
if(typeof a=="function")return B.c9
s=Object.getPrototypeOf(a)
if(s==null)return B.b9
if(s===Object.prototype)return B.b9
if(typeof q=="function"){o=$.zg
if(o==null)o=$.zg=A.AX(n)
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
BL(a,b){if(a<0||a>4294967295)throw A.b(A.aw(a,0,4294967295,"length",null))
return J.DD(new Array(a),b)},
DC(a,b){if(a<0)throw A.b(A.P("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("B<0>"))},
DB(a,b){if(a<0)throw A.b(A.P("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("B<0>"))},
DD(a,b){var s=A.k(a,b.i("B<0>"))
s.$flags=1
return s},
HW(a,b){return J.D1(a,b)},
DE(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
HZ(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.DE(r))break;++b}return b},
DF(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.DE(r))break}return b},
dp(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iF.prototype
return J.m1.prototype}if(typeof a=="string")return J.dC.prototype
if(a==null)return J.iG.prototype
if(typeof a=="boolean")return J.m0.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fC.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.AY(a)},
M(a){if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fC.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.AY(a)},
aA(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fC.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.AY(a)},
M9(a){if(typeof a=="number")return J.eq.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dT.prototype
return a},
Ma(a){if(typeof a=="number")return J.eq.prototype
if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dT.prototype
return a},
AW(a){if(typeof a=="string")return J.dC.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dT.prototype
return a},
kt(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bR.prototype
if(typeof a=="symbol")return J.fC.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.j)return a
return J.AY(a)},
v(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dp(a).R(a,b)},
S(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.FX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.M(a).h(a,b)},
bZ(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.FX(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aA(a).j(a,b,c)},
aL(a,b){return J.aA(a).t(a,b)},
CZ(a,b){return J.aA(a).C(a,b)},
Bs(a,b){return J.AW(a).hA(a,b)},
p9(a){return J.kt(a).mm(a)},
D_(a,b,c){return J.kt(a).hB(a,b,c)},
D0(a,b,c){return J.kt(a).mn(a,b,c)},
GY(a){return J.kt(a).mo(a)},
bN(a,b,c){return J.kt(a).hC(a,b,c)},
pa(a,b){return J.aA(a).hF(a,b)},
GZ(a,b,c){return J.M9(a).bM(a,b,c)},
D1(a,b){return J.Ma(a).a_(a,b)},
Bt(a,b){return J.M(a).F(a,b)},
pb(a,b){return J.aA(a).a8(a,b)},
kD(a,b){return J.aA(a).cC(a,b)},
H_(a){return J.kt(a).gaa(a)},
c_(a){return J.aA(a).gG(a)},
a7(a){return J.dp(a).gI(a)},
bA(a){return J.M(a).gE(a)},
e9(a){return J.M(a).gV(a)},
D(a){return J.aA(a).gu(a)},
pc(a){return J.aA(a).ga0(a)},
ap(a){return J.M(a).gm(a)},
bO(a){return J.dp(a).gak(a)},
Bu(a){return J.aA(a).gap(a)},
H0(a,b,c){return J.aA(a).fJ(a,b,c)},
H1(a,b,c){return J.aA(a).aC(a,b,c)},
bB(a,b,c){return J.aA(a).cc(a,b,c)},
H2(a,b,c){return J.AW(a).eg(a,b,c)},
H3(a,b){return J.M(a).sm(a,b)},
H4(a,b,c,d,e){return J.aA(a).aj(a,b,c,d,e)},
pd(a,b){return J.aA(a).bj(a,b)},
D2(a,b){return J.aA(a).ci(a,b)},
H5(a,b){return J.AW(a).cO(a,b)},
H6(a,b){return J.AW(a).S(a,b)},
H7(a,b,c){return J.aA(a).T(a,b,c)},
Bv(a,b){return J.aA(a).cJ(a,b)},
H8(a){return J.aA(a).eq(a)},
a_(a){return J.dp(a).l(a)},
D3(a,b){return J.aA(a).dr(a,b)},
D4(a,b){return J.aA(a).ky(a,b)},
lZ:function lZ(){},
m0:function m0(){},
iG:function iG(){},
aE:function aE(){},
dE:function dE(){},
mB:function mB(){},
dT:function dT(){},
bR:function bR(){},
br:function br(){},
fC:function fC(){},
B:function B(a){this.$ti=a},
m_:function m_(){},
tg:function tg(a){this.$ti=a},
fc:function fc(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eq:function eq(){},
iF:function iF(){},
m1:function m1(){},
dC:function dC(){}},A={BO:function BO(){},
fe(a,b,c){if(t.O.b(a))return new A.jM(a,b.i("@<0>").U(c).i("jM<1,2>"))
return new A.ed(a,b.i("@<0>").U(c).i("ed<1,2>"))},
DH(a){return new A.dD("Field '"+a+"' has been assigned during initialization.")},
DI(a){return new A.dD("Field '"+a+"' has not been initialized.")},
I2(a){return new A.dD("Field '"+a+"' has already been initialized.")},
fU(a){return new A.mM(a)},
B0(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ax(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hc(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cy(a,b,c){return a},
CK(a){var s,r
for(s=$.f1.length,r=0;r<s;++r)if(a===$.f1[r])return!0
return!1},
ct(a,b,c,d){A.ba(b,"start")
if(c!=null){A.ba(c,"end")
if(b>c)A.w(A.aw(b,0,c,"start",null))}return new A.cs(a,b,c,d.i("cs<0>"))},
dI(a,b,c,d){if(t.O.b(a))return new A.el(a,b,c.i("@<0>").U(d).i("el<1,2>"))
return new A.ck(a,b,c.i("@<0>").U(d).i("ck<1,2>"))},
E4(a,b,c){var s="takeCount"
A.kK(b,s)
A.ba(b,s)
if(t.O.b(a))return new A.iq(a,b,c.i("iq<0>"))
return new A.eH(a,b,c.i("eH<0>"))},
E2(a,b,c){var s="count"
if(t.O.b(a)){A.kK(b,s)
A.ba(b,s)
return new A.fq(a,b,c.i("fq<0>"))}A.kK(b,s)
A.ba(b,s)
return new A.da(a,b,c.i("da<0>"))},
aD(){return new A.bk("No element")},
iD(){return new A.bk("Too many elements")},
Dz(){return new A.bk("Too few elements")},
n2(a,b,c,d){if(c-b<=32)A.IL(a,b,c,d)
else A.IK(a,b,c,d)},
IL(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.M(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
IK(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.N(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.N(a4+a5,2),e=f-i,d=f+i,c=J.M(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
p=J.v(a6.$2(a,a1),0)
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
A.n2(a3,a4,r-2,a6)
A.n2(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.v(a6.$2(c.h(a3,r),a),0))++r
while(J.v(a6.$2(c.h(a3,q),a1),0))--q
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
break}}A.n2(a3,r,q,a6)}else A.n2(a3,r,q,a6)},
yx:function yx(a){this.a=0
this.b=a},
y6:function y6(a){this.a=0
this.b=a},
dW:function dW(){},
l1:function l1(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b){this.a=a
this.$ti=b},
jM:function jM(a,b){this.a=a
this.$ti=b},
jJ:function jJ(){},
y7:function y7(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.$ti=b},
ee:function ee(a,b){this.a=a
this.$ti=b},
pE:function pE(a,b){this.a=a
this.b=b},
pD:function pD(a){this.a=a},
dD:function dD(a){this.a=a},
mM:function mM(a){this.a=a},
ci:function ci(a){this.a=a},
B7:function B7(){},
wl:function wl(){},
J:function J(){},
Z:function Z(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
md:function md(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(a,b,c){this.a=a
this.b=b
this.$ti=c},
cV:function cV(a,b,c){this.a=a
this.b=b
this.$ti=c},
it:function it(a,b,c){this.a=a
this.b=b
this.$ti=c},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
iq:function iq(a,b,c){this.a=a
this.b=b
this.$ti=c},
ng:function ng(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
fq:function fq(a,b,c){this.a=a
this.b=b
this.$ti=c},
n1:function n1(a,b,c){this.a=a
this.b=b
this.$ti=c},
em:function em(a){this.$ti=a},
lt:function lt(a){this.$ti=a},
bI:function bI(a,b){this.a=a
this.$ti=b},
nG:function nG(a,b){this.a=a
this.$ti=b},
iw:function iw(){},
ns:function ns(){},
hg:function hg(){},
bV:function bV(a,b){this.a=a
this.$ti=b},
js:function js(a){this.a=a},
kj:function kj(){},
Hr(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bG(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.q)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aW(q,A.bG(new A.aq(a,m.i("aq<2>")),!0,c),b.i("@<0>").U(c).i("aW<1,2>"))
n.$keys=l
return n}return new A.il(A.b9(a,b,c),b.i("@<0>").U(c).i("il<1,2>"))},
Hs(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
Ht(){throw A.b(A.Y("Cannot modify constant Set"))},
Gg(a){var s=A.Gf(a)
if(s!=null)return s
return"minified:"+a},
FX(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a_(a)
return s},
eA(a){var s,r=$.DS
if(r==null)r=$.DS=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
j9(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
It(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cf(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mD(a){var s,r,q,p
if(a instanceof A.j)return A.bx(A.bz(a),null)
s=J.dp(a)
if(s===B.c8||s===B.ca||t.cx.b(a)){r=B.aS(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bx(A.bz(a),null)},
DU(a){var s,r,q
if(a==null||typeof a=="number"||A.bw(a))return J.a_(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.eg)return a.l(0)
if(a instanceof A.hE)return a.mb(!0)
s=$.GS()
for(r=0;r<1;++r){q=s[r].x_(a)
if(q!=null)return q}return"Instance of '"+A.mD(a)+"'"},
Ip(){return Date.now()},
Is(){var s,r
if($.vw!==0)return
$.vw=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.vw=1e6
$.mE=new A.vv(r)},
Io(){if(!!self.location)return self.location.href
return null},
DR(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
Iu(a){var s,r,q,p=A.k([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
if(!A.ac(q))throw A.b(A.f3(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.ag(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.f3(q))}return A.DR(p)},
DV(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ac(q))throw A.b(A.f3(q))
if(q<0)throw A.b(A.f3(q))
if(q>65535)return A.Iu(a)}return A.DR(a)},
Iv(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bt(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.ag(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aw(a,0,1114111,null,null))},
Iw(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.al(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.N(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bs(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
BZ(a){return a.c?A.bs(a).getUTCFullYear()+0:A.bs(a).getFullYear()+0},
BX(a){return a.c?A.bs(a).getUTCMonth()+1:A.bs(a).getMonth()+1},
vu(a){return a.c?A.bs(a).getUTCDate()+0:A.bs(a).getDate()+0},
BV(a){return a.c?A.bs(a).getUTCHours()+0:A.bs(a).getHours()+0},
BW(a){return a.c?A.bs(a).getUTCMinutes()+0:A.bs(a).getMinutes()+0},
BY(a){return a.c?A.bs(a).getUTCSeconds()+0:A.bs(a).getSeconds()+0},
DT(a){return a.c?A.bs(a).getUTCMilliseconds()+0:A.bs(a).getMilliseconds()+0},
Ir(a){return B.c.al((a.c?A.bs(a).getUTCDay()+0:A.bs(a).getDay()+0)+6,7)+1},
Iq(a){var s=a.$thrownJsError
if(s==null)return null
return A.ah(s)},
mF(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
AP(a,b){var s,r="index"
if(!A.ac(b))return new A.bC(!0,b,r,null)
s=J.ap(a)
if(b<0||b>=s)return A.lW(b,s,a,null,r)
return A.w8(b,r)},
M1(a,b,c){if(a<0||a>c)return A.aw(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aw(b,a,c,"end",null)
return new A.bC(!0,b,"end",null)},
f3(a){return new A.bC(!0,a,null,null)},
b(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.dd()
b.dartException=a
s=A.MM
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
MM(){return J.a_(this.dartException)},
w(a,b){throw A.aK(a,b==null?new Error():b)},
H(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.w(A.Ks(a,b,c),s)},
Ks(a,b,c){var s,r,q,p,o,n,m,l,k
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
q(a){throw A.b(A.az(a))},
de(a){var s,r,q,p,o,n
a=A.G5(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.x5(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
x6(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
E9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
BP(a,b){var s=b==null,r=s?null:b.method
return new A.m2(a,r,s?null:b.receiver)},
E(a){if(a==null)return new A.ms(a)
if(a instanceof A.is)return A.e7(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.e7(a,a.dartException)
return A.Lm(a)},
e7(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
Lm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.ag(r,16)&8191)===10)switch(q){case 438:return A.e7(a,A.BP(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.e7(a,new A.j5())}}if(a instanceof TypeError){p=$.Gp()
o=$.Gq()
n=$.Gr()
m=$.Gs()
l=$.Gv()
k=$.Gw()
j=$.Gu()
$.Gt()
i=$.Gy()
h=$.Gx()
g=p.bO(s)
if(g!=null)return A.e7(a,A.BP(s,g))
else{g=o.bO(s)
if(g!=null){g.method="call"
return A.e7(a,A.BP(s,g))}else if(n.bO(s)!=null||m.bO(s)!=null||l.bO(s)!=null||k.bO(s)!=null||j.bO(s)!=null||m.bO(s)!=null||i.bO(s)!=null||h.bO(s)!=null)return A.e7(a,new A.j5())}return A.e7(a,new A.nr(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jm()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e7(a,new A.bC(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jm()
return a},
ah(a){var s
if(a instanceof A.is)return a.b
if(a==null)return new A.k4(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.k4(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ku(a){if(a==null)return J.a7(a)
if(typeof a=="object")return A.eA(a)
return J.a7(a)},
LP(a){if(typeof a=="number")return B.x.gI(a)
if(a instanceof A.oH)return A.eA(a)
if(a instanceof A.hE)return a.gI(a)
if(a instanceof A.js)return a.gI(0)
return A.ku(a)},
FT(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
M7(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
KF(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.Dp("Unsupported number of arguments for wrapped closure"))},
e6(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.LV(a,b)
a.$identity=s
return s},
LV(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.KF)},
Hl(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ww().constructor.prototype):Object.create(new A.id(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.Di(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Hh(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.Di(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Hh(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Hc)}throw A.b("Error in functionType of tearoff")},
Hi(a,b,c,d){var s=A.Df
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
Di(a,b,c,d){if(c)return A.Hk(a,b,d)
return A.Hi(b.length,d,a,b)},
Hj(a,b,c,d){var s=A.Df,r=A.Hd
switch(b?-1:a){case 0:throw A.b(new A.mV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
Hk(a,b,c){var s,r
if($.Dd==null)$.Dd=A.Dc("interceptor")
if($.De==null)$.De=A.Dc("receiver")
s=b.length
r=A.Hj(s,c,a,b)
return r},
CC(a){return A.Hl(a)},
Hc(a,b){return A.kd(v.typeUniverse,A.bz(a.a),b)},
Df(a){return a.a},
Hd(a){return a.b},
Dc(a){var s,r,q,p=new A.id("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.P("Field name "+a+" not found.",null))},
AX(a){return v.getIsolateTag(a)},
MP(a,b){var s=$.C
if(s===B.i)return a
return s.hE(a,b)},
G9(){return v.G},
NW(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Mq(a){var s,r,q,p,o,n=$.FV.$1(a),m=$.AQ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.B4[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.FD.$2(a,n)
if(q!=null){m=$.AQ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.B4[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.B6(s)
$.AQ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.B4[n]=s
return s}if(p==="-"){o=A.B6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.G2(a,s)
if(p==="*")throw A.b(A.Ea(n))
if(v.leafTags[n]===true){o=A.B6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.G2(a,s)},
G2(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.CL(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
B6(a){return J.CL(a,!1,null,!!a.$ibS)},
Ms(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.B6(s)
else return J.CL(s,c,null,null)},
Mh(){if(!0===$.CJ)return
$.CJ=!0
A.Mi()},
Mi(){var s,r,q,p,o,n,m,l
$.AQ=Object.create(null)
$.B4=Object.create(null)
A.Mg()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.G4.$1(o)
if(n!=null){m=A.Ms(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Mg(){var s,r,q,p,o,n,m=B.bF()
m=A.hX(B.bG,A.hX(B.bH,A.hX(B.aT,A.hX(B.aT,A.hX(B.bI,A.hX(B.bJ,A.hX(B.bK(B.aS),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.FV=new A.B1(p)
$.FD=new A.B2(o)
$.G4=new A.B3(n)},
hX(a,b){return a(b)||b},
JK(a,b){var s
for(s=0;s<a.length;++s)if(!J.v(a[s],b[s]))return!1
return!0},
LZ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
BN(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
MF(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.er){s=B.a.af(a,c)
return b.b.test(s)}else return!J.Bs(b,B.a.af(a,c)).gE(0)},
FR(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
G5(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.MH(a,b,c)
if(b instanceof A.er){s=b.glH()
s.lastIndex=0
return a.replace(s,A.FR(c))}return A.MG(a,b,c)},
MG(a,b,c){var s,r,q,p
for(s=J.Bs(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gP())+c
r=p.gM()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
MH(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.G5(b),"g"),A.FR(c))},
Fw(a){return a},
Ga(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hA(0,a),s=new A.nO(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.Fw(B.a.A(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.Fw(B.a.af(a,q)))
return s.charCodeAt(0)==0?s:s},
MI(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.Gb(a,s,s+b.length,c)},
Gb(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a4:function a4(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
op:function op(a,b){this.a=a
this.b=b},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a){this.a=a},
oq:function oq(a){this.a=a},
il:function il(a,b){this.a=a
this.$ti=b},
fm:function fm(){},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
eT:function eT(a,b){this.a=a
this.$ti=b},
hA:function hA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iy:function iy(a,b){this.a=a
this.$ti=b},
im:function im(){},
dv:function dv(a,b,c){this.a=a
this.b=b
this.$ti=c},
ta:function ta(){},
iC:function iC(a,b){this.a=a
this.$ti=b},
vv:function vv(a){this.a=a},
jf:function jf(){},
x5:function x5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j5:function j5(){},
m2:function m2(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function nr(a){this.a=a},
ms:function ms(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a
this.b=null},
eg:function eg(){},
pJ:function pJ(){},
pK:function pK(){},
wW:function wW(){},
ww:function ww(){},
id:function id(a,b){this.a=a
this.b=b},
mV:function mV(a){this.a=a},
bE:function bE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
th:function th(a){this.a=a},
u9:function u9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
T:function T(a,b){this.a=a
this.$ti=b},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aq:function aq(a,b){this.a=a
this.$ti=b},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aM:function aM(a,b){this.a=a
this.$ti=b},
ma:function ma(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iI:function iI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iH:function iH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
B1:function B1(a){this.a=a},
B2:function B2(a){this.a=a},
B3:function B3(a){this.a=a},
hE:function hE(){},
om:function om(){},
on:function on(){},
oo:function oo(){},
er:function er(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hD:function hD(a){this.b=a},
nN:function nN(a,b,c){this.a=a
this.b=b
this.c=c},
nO:function nO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h9:function h9(a,b){this.a=a
this.c=b},
oC:function oC(a,b,c){this.a=a
this.b=b
this.c=c},
zN:function zN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ML(a){throw A.aK(A.DH(a),new Error())},
y(){throw A.aK(A.DI(""),new Error())},
cf(){throw A.aK(A.I2(""),new Error())},
Bm(){throw A.aK(A.DH(""),new Error())},
y8(){var s=new A.nW("")
return s.b=s},
y9(a){var s=new A.nW(a)
return s.b=s},
nW:function nW(a){this.a=a
this.b=null},
hS(a,b,c){},
b7(a){var s,r,q
if(t.iy.b(a))return a
s=J.M(a)
r=A.af(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
Ih(a){return new DataView(new ArrayBuffer(a))},
DM(a,b,c){A.hS(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d5(a,b,c){A.hS(a,b,c)
c=B.c.N(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Ii(a){return new Int8Array(a)},
Ij(a){return new Uint16Array(a)},
DN(a,b,c){A.hS(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
uQ(a){return new Uint8Array(a)},
bU(a,b,c){A.hS(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dl(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.AP(b,a))},
dm(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.M1(a,b,c))
if(b==null)return c
return b},
fJ:function fJ(){},
fI:function fI(){},
j0:function j0(){},
oK:function oK(a){this.a=a},
j_:function j_(){},
fK:function fK(){},
dM:function dM(){},
bT:function bT(){},
ml:function ml(){},
mm:function mm(){},
mn:function mn(){},
mo:function mo(){},
mp:function mp(){},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
ew:function ew(){},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(){},
C2(a,b){var s=b.c
return s==null?b.c=A.kb(a,"A",[b.x]):s},
E_(a){var s=a.w
if(s===6||s===7)return A.E_(a.x)
return s===11||s===12},
IF(a){return a.as},
G1(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ad(a){return A.zS(v.typeUniverse,a,!1)},
Mk(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.e4(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
e4(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e4(a1,s,a3,a4)
if(r===s)return a2
return A.EH(a1,r,!0)
case 7:s=a2.x
r=A.e4(a1,s,a3,a4)
if(r===s)return a2
return A.EG(a1,r,!0)
case 8:q=a2.y
p=A.hW(a1,q,a3,a4)
if(p===q)return a2
return A.kb(a1,a2.x,p)
case 9:o=a2.x
n=A.e4(a1,o,a3,a4)
m=a2.y
l=A.hW(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.Cn(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hW(a1,j,a3,a4)
if(i===j)return a2
return A.EI(a1,k,i)
case 11:h=a2.x
g=A.e4(a1,h,a3,a4)
f=a2.y
e=A.Lh(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.EF(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hW(a1,d,a3,a4)
o=a2.x
n=A.e4(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.Co(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kO("Attempted to substitute unexpected RTI kind "+a0))}},
hW(a,b,c,d){var s,r,q,p,o=b.length,n=A.A1(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e4(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Li(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.A1(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e4(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Lh(a,b,c,d){var s,r=b.a,q=A.hW(a,r,c,d),p=b.b,o=A.hW(a,p,c,d),n=b.c,m=A.Li(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.o9()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
p0(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Mb(s)
return a.$S()}return null},
Mj(a,b){var s
if(A.E_(b))if(a instanceof A.eg){s=A.p0(a)
if(s!=null)return s}return A.bz(a)},
bz(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.a0(a)
return A.Cx(J.dp(a))},
a0(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.Cx(a)},
Cx(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.KD(a,s)},
KD(a,b){var s=a instanceof A.eg?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.JU(v.typeUniverse,s.name)
b.$ccache=r
return r},
Mb(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.zS(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dq(a){return A.bL(A.n(a))},
CI(a){var s=A.p0(a)
return A.bL(s==null?A.bz(a):s)},
CA(a){var s
if(a instanceof A.hE)return a.lw()
s=a instanceof A.eg?A.p0(a):null
if(s!=null)return s
if(t.dH.b(a))return J.bO(a).a
if(Array.isArray(a))return A.a0(a)
return A.bz(a)},
bL(a){var s=a.r
return s==null?a.r=new A.oH(a):s},
M4(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kd(v.typeUniverse,A.CA(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.EK(v.typeUniverse,s,A.CA(q[r]))
return A.kd(v.typeUniverse,s,a)},
bM(a){return A.bL(A.zS(v.typeUniverse,a,!1))},
KC(a){var s=this
s.b=A.Lf(s)
return s.b(a)},
Lf(a){var s,r,q,p
if(a===t.K)return A.KL
if(A.f6(a))return A.KP
s=a.w
if(s===6)return A.Kz
if(s===1)return A.Ff
if(s===7)return A.KG
r=A.Le(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f6)){a.f="$i"+q
if(q==="p")return A.KJ
if(a===t.m)return A.KI
return A.KO}}else if(s===10){p=A.LZ(a.x,a.y)
return p==null?A.Ff:p}return A.Kx},
Le(a){if(a.w===8){if(a===t.S)return A.ac
if(a===t.W||a===t.o)return A.KK
if(a===t.N)return A.KN
if(a===t.y)return A.bw}return null},
KB(a){var s=this,r=A.Kw
if(A.f6(s))r=A.K7
else if(s===t.K)r=A.K6
else if(A.i_(s)){r=A.Ky
if(s===t.U)r=A.bc
else if(s===t.x)r=A.a6
else if(s===t.o9)r=A.EZ
else if(s===t.jh)r=A.F2
else if(s===t.dA)r=A.F_
else if(s===t.B)r=A.F0}else if(s===t.S)r=A.ao
else if(s===t.N)r=A.F
else if(s===t.y)r=A.hR
else if(s===t.o)r=A.F1
else if(s===t.W)r=A.f_
else if(s===t.m)r=A.bd
s.a=r
return s.a(a)},
Kx(a){var s=this
if(a==null)return A.i_(s)
return A.Mn(v.typeUniverse,A.Mj(a,s),s)},
Kz(a){if(a==null)return!0
return this.x.b(a)},
KO(a){var s,r=this
if(a==null)return A.i_(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dp(a)[s]},
KJ(a){var s,r=this
if(a==null)return A.i_(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dp(a)[s]},
KI(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Fe(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
Kw(a){var s=this
if(a==null){if(A.i_(s))return a}else if(s.b(a))return a
throw A.aK(A.F8(a,s),new Error())},
Ky(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.F8(a,s),new Error())},
F8(a,b){return new A.k9("TypeError: "+A.Ew(a,A.bx(b,null)))},
Ew(a,b){return A.ir(a)+": type '"+A.bx(A.CA(a),null)+"' is not a subtype of type '"+b+"'"},
cd(a,b){return new A.k9("TypeError: "+A.Ew(a,b))},
KG(a){var s=this
return s.x.b(a)||A.C2(v.typeUniverse,s).b(a)},
KL(a){return a!=null},
K6(a){if(a!=null)return a
throw A.aK(A.cd(a,"Object"),new Error())},
KP(a){return!0},
K7(a){return a},
Ff(a){return!1},
bw(a){return!0===a||!1===a},
hR(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.cd(a,"bool"),new Error())},
EZ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.cd(a,"bool?"),new Error())},
f_(a){if(typeof a=="number")return a
throw A.aK(A.cd(a,"double"),new Error())},
F_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.cd(a,"double?"),new Error())},
ac(a){return typeof a=="number"&&Math.floor(a)===a},
ao(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.cd(a,"int"),new Error())},
bc(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.cd(a,"int?"),new Error())},
KK(a){return typeof a=="number"},
F1(a){if(typeof a=="number")return a
throw A.aK(A.cd(a,"num"),new Error())},
F2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.cd(a,"num?"),new Error())},
KN(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.aK(A.cd(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.cd(a,"String?"),new Error())},
bd(a){if(A.Fe(a))return a
throw A.aK(A.cd(a,"JSObject"),new Error())},
F0(a){if(a==null)return a
if(A.Fe(a))return a
throw A.aK(A.cd(a,"JSObject?"),new Error())},
Fr(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bx(a[q],b)
return s},
L4(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.Fr(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bx(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Fc(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.k([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bx(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bx(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bx(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bx(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bx(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bx(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bx(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bx(a.x,b)+">"
if(m===8){p=A.Ll(a.x)
o=a.y
return o.length>0?p+("<"+A.Fr(o,b)+">"):p}if(m===10)return A.L4(a,b)
if(m===11)return A.Fc(a,b,null)
if(m===12)return A.Fc(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
Ll(a){var s=A.Gf(a)
if(s!=null)return s
return"minified:"+a},
JV(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
JU(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.zS(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kc(a,5,"#")
q=A.A1(s)
for(p=0;p<s;++p)q[p]=r
o=A.kb(a,b,q)
n[b]=o
return o}else return m},
JT(a,b){return A.EX(a.tR,b)},
JS(a,b){return A.EX(a.eT,b)},
zS(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.EJ(a,null,b,!1)
r.set(b,s)
return s},
kd(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.EJ(a,b,c,!0)
q.set(c,r)
return r},
EK(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.Cn(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
EJ(a,b,c,d){return A.JI(A.JC(a,b,c,d))},
e3(a,b){b.a=A.KB
b.b=A.KC
return b},
kc(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.co(null,null)
s.w=b
s.as=c
r=A.e3(a,s)
a.eC.set(c,r)
return r},
EH(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.JQ(a,b,r,c)
a.eC.set(r,s)
return s},
JQ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f6(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.i_(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.co(null,null)
q.w=6
q.x=b
q.as=c
return A.e3(a,q)},
EG(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.JO(a,b,r,c)
a.eC.set(r,s)
return s},
JO(a,b,c,d){var s,r
if(d){s=b.w
if(A.f6(b)||b===t.K)return b
else if(s===1)return A.kb(a,"A",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.co(null,null)
r.w=7
r.x=b
r.as=c
return A.e3(a,r)},
JR(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.co(null,null)
s.w=13
s.x=b
s.as=q
r=A.e3(a,s)
a.eC.set(q,r)
return r},
ka(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
JN(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kb(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ka(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.co(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e3(a,r)
a.eC.set(p,q)
return q},
Cn(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ka(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.co(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e3(a,o)
a.eC.set(q,n)
return n},
EI(a,b,c){var s,r,q="+"+(b+"("+A.ka(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.co(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e3(a,s)
a.eC.set(q,r)
return r},
EF(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ka(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ka(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.JN(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.co(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e3(a,p)
a.eC.set(r,o)
return o},
Co(a,b,c,d){var s,r=b.as+("<"+A.ka(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.JP(a,b,c,r,d)
a.eC.set(r,s)
return s},
JP(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.A1(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e4(a,b,r,0)
m=A.hW(a,c,r,0)
return A.Co(a,n,m,c!==m)}}l=new A.co(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e3(a,l)},
JC(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
JI(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.JE(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.EB(a,r,l,k,!1)
else if(q===46)r=A.EB(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eV(a.u,a.e,k.pop()))
break
case 94:k.push(A.JR(a.u,k.pop()))
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
case 62:A.JG(a,k)
break
case 38:A.JF(a,k)
break
case 63:p=a.u
k.push(A.EH(p,A.eV(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.EG(p,A.eV(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.JD(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.EC(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.JJ(a.u,a.e,o)
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
return A.eV(a.u,a.e,m)},
JE(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
EB(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.JV(s,o.x)[p]
if(n==null)A.w('No "'+p+'" in "'+A.IF(o)+'"')
d.push(A.kd(s,o,n))}else d.push(p)
return m},
JG(a,b){var s,r=a.u,q=A.EA(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kb(r,p,q))
else{s=A.eV(r,a.e,p)
switch(s.w){case 11:b.push(A.Co(r,s,q,a.n))
break
default:b.push(A.Cn(r,s,q))
break}}},
JD(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.EA(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eV(p,a.e,o)
q=new A.o9()
q.a=s
q.b=n
q.c=m
b.push(A.EF(p,r,q))
return
case-4:b.push(A.EI(p,b.pop(),s))
return
default:throw A.b(A.kO("Unexpected state under `()`: "+A.r(o)))}},
JF(a,b){var s=b.pop()
if(0===s){b.push(A.kc(a.u,1,"0&"))
return}if(1===s){b.push(A.kc(a.u,4,"1&"))
return}throw A.b(A.kO("Unexpected extended operation "+A.r(s)))},
EA(a,b){var s=b.splice(a.p)
A.EC(a.u,a.e,s)
a.p=b.pop()
return s},
eV(a,b,c){if(typeof c=="string")return A.kb(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.JH(a,b,c)}else return c},
EC(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eV(a,b,c[s])},
JJ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eV(a,b,c[s])},
JH(a,b,c){var s,r,q=b.w
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
Mn(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aU(a,b,null,c,null)
r.set(c,s)}return s},
aU(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.f6(d))return!0
s=b.w
if(s===4)return!0
if(A.f6(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aU(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aU(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aU(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aU(a,b.x,c,d,e))return!1
return A.aU(a,A.C2(a,b),c,d,e)}if(s===6)return A.aU(a,p,c,d,e)&&A.aU(a,b.x,c,d,e)
if(q===7){if(A.aU(a,b,c,d.x,e))return!0
return A.aU(a,b,c,A.C2(a,d),e)}if(q===6)return A.aU(a,b,c,p,e)||A.aU(a,b,c,d.x,e)
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
if(!A.aU(a,j,c,i,e)||!A.aU(a,i,e,j,c))return!1}return A.Fd(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.Fd(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.KH(a,b,c,d,e)}if(o&&q===10)return A.KM(a,b,c,d,e)
return!1},
Fd(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
KH(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kd(a,b,r[o])
return A.EY(a,p,null,c,d.y,e)}return A.EY(a,b.y,null,c,d.y,e)},
EY(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aU(a,b[s],d,e[s],f))return!1
return!0},
KM(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aU(a,r[s],c,q[s],e))return!1
return!0},
i_(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.f6(a))if(s!==6)r=s===7&&A.i_(a.x)
return r},
f6(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
EX(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
A1(a){return a>0?new Array(a):v.typeUniverse.sEA},
co:function co(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
o9:function o9(){this.c=this.b=this.a=null},
oH:function oH(a){this.a=a},
o5:function o5(){},
k9:function k9(a){this.a=a},
J8(){var s,r,q
if(self.scheduleImmediate!=null)return A.Lp()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e6(new A.xP(s),1)).observe(r,{childList:true})
return new A.xO(s,r,q)}else if(self.setImmediate!=null)return A.Lq()
return A.Lr()},
J9(a){self.scheduleImmediate(A.e6(new A.xQ(a),0))},
Ja(a){self.setImmediate(A.e6(new A.xR(a),0))},
Jb(a){A.Cb(B.D,a)},
Cb(a,b){var s=B.c.N(a.a,1000)
return A.JL(s<0?0:s,b)},
E6(a,b){var s=B.c.N(a.a,1000)
return A.JM(s<0?0:s,b)},
JL(a,b){var s=new A.k8(!0)
s.oI(a,b)
return s},
JM(a,b){var s=new A.k8(!1)
s.oJ(a,b)
return s},
h(a){return new A.jC(new A.u($.C,a.i("u<0>")),a.i("jC<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.F3(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.c4(A.E(a),A.ah(a))},
F3(a,b){var s,r,q=new A.Ag(b),p=new A.Ah(b)
if(a instanceof A.u)a.m9(q,p,t.z)
else{s=t.z
if(a instanceof A.u)a.bS(q,p,s)
else{r=new A.u($.C,t._)
r.a=8
r.c=a
r.m9(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fs(new A.Az(s),t.H,t.S,t.z)},
bW(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cS(null)
else{s=c.a
s===$&&A.y()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.E(a)
q=A.ah(a)
s.am(new A.al(r,q))}else{s=A.E(a)
r=A.ah(a)
q=c.a
q===$&&A.y()
q.bx(s,r)
c.a.q()}return}if(a instanceof A.jU){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.y()
r.t(0,s)
A.kx(new A.Ae(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.y()
s.tP(p,!1).W(new A.Af(c,b),t.P)
return}}A.F3(a,b)},
Fv(a){var s=a.a
s===$&&A.y()
return new A.b5(s,A.n(s).i("b5<1>"))},
Jc(a,b){var s=new A.nQ(b.i("nQ<0>"))
s.oE(a,b)
return s},
Fg(a,b){return A.Jc(a,b)},
Jy(a){return new A.jU(a,1)},
dZ(a){return new A.jU(a,0)},
EE(a,b,c){return 0},
ia(a){var s
if(t.C.b(a)){s=a.gcj()
if(s!=null)return s}return B.P},
ix(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.E(q)
r=A.ah(q)
p=new A.u($.C,b.i("u<0>"))
o=s
n=r
m=A.kk(o,n)
if(m==null)o=new A.al(o,n==null?A.ia(o):n)
else o=m
p.ck(o)
return p}return b.i("A<0>").b(l)?l:A.bp(l,b)},
bj(a,b){var s=a==null?b.a(a):a,r=new A.u($.C,b.i("u<0>"))
r.aK(s)
return r},
HO(a,b){var s
if(!b.b(null))throw A.b(A.aH(null,"computation","The type parameter is not nullable"))
s=new A.u($.C,b.i("u<0>"))
A.cR(a,new A.rG(null,s,b))
return s},
BH(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.u($.C,b.i("u<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.rI(i,h,g,f)
try{for(n=J.D(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bS(new A.rH(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cS(A.k([],b.i("B<0>")))
return n}i.a=A.af(n,null,!1,b.i("0?"))}catch(l){p=A.E(l)
o=A.ah(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kk(m,k)
if(j==null)m=new A.al(m,k==null?A.ia(m):k)
else m=j
n.ck(m)
return n}else{i.d=p
i.c=o}}return f},
BG(a,b,c,d){var s=new A.rB(d,null,b,c),r=$.C,q=new A.u(r,c.i("u<0>"))
if(r!==B.i)s=r.fs(s,c.i("0/"),t.K,t.l)
a.dC(new A.cb(q,2,null,s,a.$ti.i("@<1>").U(c).i("cb<1,2>")))
return q},
HM(a,b){var s,r,q,p=A.k([],b.i("B<jS<0>>"))
for(s=a.length,r=b.i("jS<0>"),q=0;q<a.length;a.length===s||(0,A.q)(a),++q)p.push(new A.jS(a[q],r))
if(p.length===0)return A.bj(A.k([],b.i("B<0>")),b.i("p<0>"))
s=new A.u($.C,b.i("u<p<0>>"))
A.Js(p,new A.rC(new A.an(s,b.i("an<p<0>>")),p,b))
return s},
KU(a){return a!=null},
Js(a,b){var s,r={},q=r.a=r.b=0,p=new A.yO(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.q)(a),++q)a[q].tw(p)},
kk(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.mG(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mF(r,q)
return s},
f0(a,b){var s
if($.C!==B.i){s=A.kk(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcj()
if(b==null){A.mF(a,B.P)
b=B.P}}else b=B.P
else if(t.C.b(a))A.mF(a,b)
return new A.al(a,b)},
Jr(a,b,c){var s=new A.u(b,c.i("u<0>"))
s.a=8
s.c=a
return s},
bp(a,b){var s=new A.u($.C,b.i("u<0>"))
s.a=8
s.c=a
return s},
yU(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.C5()
b.ck(new A.al(new A.bC(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lM(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eQ()
b.fT(p.a)
A.eR(b,q)
return}b.a^=2
b.b.cM(new A.yV(p,b))},
eR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fb(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.eR(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gc6()===k.gc6())}else f=!1
if(f){f=g.a
r=f.c
f.b.fb(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.yZ(s,g,p).$0()
else if(q){if((f&1)!==0)new A.yY(s,m).$0()}else if((f&2)!==0)new A.yX(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.u){r=s.a.$ti
r=r.i("A<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hk(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.yU(f,i,!0)
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
Fl(a,b){if(t.ng.b(a))return b.fs(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dj(a,t.z,t.K)
throw A.b(A.aH(a,"onError",u.w))},
KT(){var s,r
for(s=$.hU;s!=null;s=$.hU){$.km=null
r=s.b
$.hU=r
if(r==null)$.kl=null
s.a.$0()}},
Lg(){$.Cy=!0
try{A.KT()}finally{$.km=null
$.Cy=!1
if($.hU!=null)$.CU().$1(A.FG())}},
Ft(a){var s=new A.nP(a),r=$.kl
if(r==null){$.hU=$.kl=s
if(!$.Cy)$.CU().$1(A.FG())}else $.kl=r.b=s},
Ld(a){var s,r,q,p=$.hU
if(p==null){A.Ft(a)
$.km=$.kl
return}s=new A.nP(a)
r=$.km
if(r==null){s.b=p
$.hU=$.km=s}else{q=r.b
s.b=q
$.km=r.b=s
if(q==null)$.kl=s}},
kx(a){var s,r=null,q=$.C
if(B.i===q){A.Ax(r,r,B.i,a)
return}if(B.i===q.gju().a)s=B.i.gc6()===q.gc6()
else s=!1
if(s){A.Ax(r,r,q,q.bR(a,t.H))
return}s=$.C
s.cM(s.eX(a))},
C7(a,b){var s=null,r=b.i("cW<0>"),q=new A.cW(s,s,s,s,r)
q.aA(a)
q.l7()
return new A.b5(q,r.i("b5<1>"))},
N9(a,b){return new A.cx(A.cy(a,"stream",t.K),b.i("cx<0>"))},
wy(a,b,c,d,e){return d?new A.hL(b,null,c,a,e.i("hL<0>")):new A.cW(b,null,c,a,e.i("cW<0>"))},
dP(a,b,c){return new A.jD(b,a,c.i("jD<0>"))},
oX(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.E(q)
r=A.ah(q)
$.C.fb(s,r)}},
Jp(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.nU(s,b,f),o=A.y3(s,c),n=d==null?A.AA():d
return new A.dX(a,p,o,s.bR(n,t.H),s,r|q,f.i("dX<0>"))},
J7(a){return new A.xL(a)},
nU(a,b,c){var s=b==null?A.Lt():b
return a.dj(s,t.H,c)},
y3(a,b){if(b==null)b=A.Lu()
if(t.b9.b(b))return a.fs(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dj(b,t.z,t.K)
throw A.b(A.P("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
KV(a){},
KX(a,b){$.C.fb(a,b)},
KW(){},
Ev(a,b){var s=$.C,r=new A.hw(s,b.i("hw<0>"))
A.kx(r.glJ())
if(a!=null)r.c=s.bR(a,t.H)
return r},
Kf(a,b,c){var s=a.D()
if(s!==$.e8())s.aZ(new A.Aj(b,c))
else b.am(c)},
Kg(a,b,c){var s=a.D()
if(s!==$.e8())s.aZ(new A.Ak(b,c))
else b.cl(c)},
cR(a,b){var s=$.C
if(s===B.i)return s.jM(a,b)
return s.jM(a,s.eX(b))},
E5(a,b){var s,r=$.C
if(r===B.i)return r.jL(a,b)
s=r.hE(b,t.hU)
return $.C.jL(a,s)},
p4(a,b,c,d){return A.Lc(a,c,b,d)},
Lc(a,b,c,d){return $.C.mK(c,b).aW(a,d)},
La(a,b,c,d,e){A.kp(d,e)},
kp(a,b){A.Ld(new A.Au(a,b))},
Av(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
Aw(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
Cz(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
Fp(a,b,c,d){return d},
Fq(a,b,c,d){return d},
Fo(a,b,c,d){return d},
L9(a,b,c,d,e){return null},
Ax(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gc6()
r=c.gc6()
d=s!==r?c.eX(d):c.jH(d,t.H)}A.Ft(d)},
L8(a,b,c,d,e){return A.Cb(d,B.i!==c?c.jH(e,t.H):e)},
L7(a,b,c,d,e){e=c.u1(e,t.H,t.hU)
return A.E6(d,e)},
Lb(a,b,c,d){A.G3(d)},
Fn(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.BI(o,o,o,s,s)
r.C(0,e)}else r=o
s=new A.nZ(c.glY(),c.gm_(),c.glZ(),c.glU(),c.glV(),c.glT(),c.glp(),c.gju(),c.gli(),c.glh(),c.glN(),c.glt(),c.gje(),c.gjE(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.oQ(s,q)
p=d.a
if(p!=null)s.as=new A.oP(s,p)}if(r!=null)s.at=new A.oR(s,r)
return s},
xP:function xP(a){this.a=a},
xO:function xO(a,b,c){this.a=a
this.b=b
this.c=c},
xQ:function xQ(a){this.a=a},
xR:function xR(a){this.a=a},
k8:function k8(a){this.a=a
this.b=null
this.c=0},
zQ:function zQ(a,b){this.a=a
this.b=b},
zP:function zP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jC:function jC(a,b){this.a=a
this.b=!1
this.$ti=b},
Ag:function Ag(a){this.a=a},
Ah:function Ah(a){this.a=a},
Az:function Az(a){this.a=a},
Ae:function Ae(a,b){this.a=a
this.b=b},
Af:function Af(a,b){this.a=a
this.b=b},
nQ:function nQ(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
xT:function xT(a){this.a=a},
xU:function xU(a){this.a=a},
xW:function xW(a){this.a=a},
xX:function xX(a,b){this.a=a
this.b=b},
xV:function xV(a,b){this.a=a
this.b=b},
xS:function xS(a){this.a=a},
jU:function jU(a,b){this.a=a
this.b=b},
oE:function oE(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hK:function hK(a,b){this.a=a
this.$ti=b},
al:function al(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.$ti=b},
eN:function eN(a,b,c,d,e,f,g){var _=this
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
rG:function rG(a,b,c){this.a=a
this.b=b
this.c=c},
rI:function rI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rH:function rH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rB:function rB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nh:function nh(a,b){this.a=a
this.b=b},
rC:function rC(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b,c){this.c=a
this.d=b
this.$ti=c},
jS:function jS(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
yP:function yP(a,b){this.a=a
this.b=b},
yQ:function yQ(a,b){this.a=a
this.b=b},
yO:function yO(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
an:function an(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
u:function u(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
yR:function yR(a,b){this.a=a
this.b=b},
yW:function yW(a,b){this.a=a
this.b=b},
yV:function yV(a,b){this.a=a
this.b=b},
yT:function yT(a,b){this.a=a
this.b=b},
yS:function yS(a,b){this.a=a
this.b=b},
yZ:function yZ(a,b,c){this.a=a
this.b=b
this.c=c},
z_:function z_(a,b){this.a=a
this.b=b},
z0:function z0(a){this.a=a},
yY:function yY(a,b){this.a=a
this.b=b},
yX:function yX(a,b){this.a=a
this.b=b},
z1:function z1(a,b){this.a=a
this.b=b},
z2:function z2(a,b,c){this.a=a
this.b=b
this.c=c},
z3:function z3(a,b){this.a=a
this.b=b},
nP:function nP(a){this.a=a
this.b=null},
aa:function aa(){},
wB:function wB(a,b){this.a=a
this.b=b},
wC:function wC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wD:function wD(a,b){this.a=a
this.b=b},
wE:function wE(a,b){this.a=a
this.b=b},
wz:function wz(a){this.a=a},
wA:function wA(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(){},
e1:function e1(){},
zJ:function zJ(a){this.a=a},
zI:function zI(a){this.a=a},
oF:function oF(){},
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
hL:function hL(a,b,c,d,e){var _=this
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
dX:function dX(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
nM:function nM(){},
xL:function xL(a){this.a=a},
xK:function xK(a){this.a=a},
k5:function k5(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b1:function b1(){},
y5:function y5(a,b,c){this.a=a
this.b=b
this.c=c},
y4:function y4(a){this.a=a},
hJ:function hJ(){},
o4:function o4(){},
ca:function ca(a,b){this.b=a
this.a=null
this.$ti=b},
hv:function hv(a,b){this.b=a
this.c=b
this.a=null},
yH:function yH(){},
e0:function e0(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
zr:function zr(a,b){this.a=a
this.b=b},
hw:function hw(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cx:function cx(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jN:function jN(a){this.$ti=a},
dj:function dj(a,b){this.b=a
this.$ti=b},
zp:function zp(a,b){this.a=a
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
Aj:function Aj(a,b){this.a=a
this.b=b},
Ak:function Ak(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
hz:function hz(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
eU:function eU(a,b,c){this.b=a
this.a=b
this.$ti=c},
jO:function jO(a,b){this.a=a
this.$ti=b},
hH:function hH(a,b,c,d,e,f){var _=this
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
Ab:function Ab(a,b){this.a=a
this.b=b},
Ad:function Ad(a,b){this.a=a
this.b=b},
Ac:function Ac(a,b){this.a=a
this.b=b},
A9:function A9(a,b){this.a=a
this.b=b},
Aa:function Aa(a,b){this.a=a
this.b=b},
A8:function A8(a,b){this.a=a
this.b=b},
A5:function A5(a,b){this.a=a
this.b=b},
oQ:function oQ(a,b){this.a=a
this.b=b},
A4:function A4(a,b){this.a=a
this.b=b},
A3:function A3(a,b){this.a=a
this.b=b},
A7:function A7(a,b){this.a=a
this.b=b},
A6:function A6(a,b){this.a=a
this.b=b},
oP:function oP(a,b){this.a=a
this.b=b},
oR:function oR(a,b){this.a=a
this.b=b},
oO:function oO(){},
nZ:function nZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
yD:function yD(a,b,c){this.a=a
this.b=b
this.c=c},
yF:function yF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yC:function yC(a,b){this.a=a
this.b=b},
yE:function yE(a,b,c){this.a=a
this.b=b
this.c=c},
ot:function ot(){},
zy:function zy(a,b,c){this.a=a
this.b=b
this.c=c},
zx:function zx(a,b){this.a=a
this.b=b},
zz:function zz(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
Au:function Au(a,b){this.a=a
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
BI(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dh(d.i("@<0>").U(e).i("dh<1,2>"))
b=A.CE()}else{if(A.FK()===b&&A.FJ()===a)return new A.dY(d.i("@<0>").U(e).i("dY<1,2>"))
if(a==null)a=A.CD()}else{if(b==null)b=A.CE()
if(a==null)a=A.CD()}return A.Jq(a,b,c,d,e)},
Ex(a,b){var s=a[b]
return s===a?null:s},
Cl(a,b,c){if(c==null)a[b]=a
else a[b]=c},
Ck(){var s=Object.create(null)
A.Cl(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
Jq(a,b,c,d,e){var s=c!=null?c:new A.yB(d)
return new A.jK(a,b,s,d.i("@<0>").U(e).i("jK<1,2>"))},
dF(a,b,c,d){if(b==null){if(a==null)return new A.bE(c.i("@<0>").U(d).i("bE<1,2>"))
b=A.CE()}else{if(A.FK()===b&&A.FJ()===a)return new A.iI(c.i("@<0>").U(d).i("iI<1,2>"))
if(a==null)a=A.CD()}return A.JB(a,b,null,c,d)},
m(a,b,c){return A.FT(a,new A.bE(b.i("@<0>").U(c).i("bE<1,2>")))},
t(a,b){return new A.bE(a.i("@<0>").U(b).i("bE<1,2>"))},
JB(a,b,c,d,e){return new A.jV(a,b,new A.zn(d),d.i("@<0>").U(e).i("jV<1,2>"))},
mb(a){return new A.di(a.i("di<0>"))},
aN(a){return new A.di(a.i("di<0>"))},
ar(a,b){return A.M7(a,new A.di(b.i("di<0>")))},
Cm(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hB(a,b,c){var s=new A.e_(a,b,c.i("e_<0>"))
s.c=a.e
return s},
Kn(a,b){return J.v(a,b)},
Ko(a){return J.a7(a)},
DA(a){if(a.length===0)return null
return B.b.ga0(a)},
b9(a,b,c){var s=A.dF(null,null,b,c)
a.a3(0,new A.ua(s,b,c))
return s},
cJ(a,b,c){var s=A.dF(null,null,b,c)
s.C(0,a)
return s},
ub(a,b){var s,r,q=A.mb(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.t(0,b.a(a[r]))
return q},
d2(a,b){var s=A.mb(b)
s.C(0,a)
return s},
I3(a,b){var s=t.bP
return J.D1(s.a(a),s.a(b))},
uq(a){var s,r
if(A.CK(a))return"{...}"
s=new A.a2("")
try{r={}
$.f1.push(a)
s.a+="{"
r.a=!0
a.a3(0,new A.ur(r,s))
s.a+="}"}finally{$.f1.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
BQ(a){return new A.iL(A.af(A.I4(null),null,!1,a.i("0?")),a.i("iL<0>"))},
I4(a){return 8},
dh:function dh(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
z5:function z5(a){this.a=a},
z4:function z4(a){this.a=a},
dY:function dY(a){var _=this
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
yB:function yB(a){this.a=a},
eS:function eS(a,b){this.a=a
this.$ti=b},
oa:function oa(a,b,c){var _=this
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
zn:function zn(a){this.a=a},
di:function di(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
zo:function zo(a){this.a=a
this.c=this.b=null},
e_:function e_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ua:function ua(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
oh:function oh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b2:function b2(){},
K:function K(){},
U:function U(){},
up:function up(a){this.a=a},
ur:function ur(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.$ti=b},
oj:function oj(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
oJ:function oJ(){},
iP:function iP(){},
cT:function cT(a,b){this.a=a
this.$ti=b},
iL:function iL(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
oi:function oi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cp:function cp(){},
k3:function k3(){},
ke:function ke(){},
Fj(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.E(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.Am(p)
return q},
Am(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.oe(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.Am(a[s])
return a},
K5(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.GI()
else s=new Uint8Array(o)
for(r=J.M(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
K4(a,b,c,d){var s=a?$.GH():$.GG()
if(s==null)return null
if(0===c&&d===b.length)return A.EV(s,b)
return A.EV(s,b.subarray(c,d))},
EV(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
D6(a,b,c,d,e,f){if(B.c.al(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
Jg(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.aH(b,"Not a byte value at index "+q+": 0x"+B.c.kv(s.h(b,q),16),null))},
Jf(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.ag(f,2),i=f&3,h=$.CV()
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
return A.Ej(a,r+1,c,-m-1)}throw A.b(A.a8(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a8(k,a,r))},
Jd(a,b,c,d){var s=A.Je(a,b,c),r=(d&3)+(s-b),q=B.c.ag(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.Gz()},
Je(a,b,c){var s,r=c,q=r,p=0
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
Ej(a,b,c,d){var s,r
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
HB(a){return B.cL.h(0,a.toLowerCase())},
DG(a,b,c){return new A.iJ(a,b)},
Kr(a){return a.p()},
Jz(a,b){return new A.zk(a,[],A.LW())},
JA(a,b,c){var s,r=new A.a2("")
A.Ez(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
Ez(a,b,c,d){var s=A.Jz(b,c)
s.ix(a)},
EW(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oe:function oe(a,b){this.a=a
this.b=b
this.c=null},
zj:function zj(a){this.a=a},
of:function of(a){this.a=a},
zh:function zh(a,b,c){this.b=a
this.c=b
this.a=c},
A_:function A_(){},
zZ:function zZ(){},
kL:function kL(){},
oI:function oI(){},
kM:function kM(a){this.a=a},
zR:function zR(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
ic:function ic(a){this.a=a},
nS:function nS(a){this.a=0
this.b=a},
y2:function y2(a){this.c=null
this.a=0
this.b=a},
xZ:function xZ(){},
xM:function xM(a,b){this.a=a
this.b=b},
kR:function kR(){},
nR:function nR(){this.a=0},
xY:function xY(a,b){this.a=a
this.b=b},
pv:function pv(){},
hp:function hp(a){this.a=a},
nV:function nV(a,b){this.a=a
this.b=b
this.c=0},
l2:function l2(){},
oz:function oz(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b,c){this.a=a
this.b=b
this.$ti=c},
l4:function l4(){},
aB:function aB(){},
qs:function qs(a){this.a=a},
en:function en(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
m3:function m3(a,b){this.a=a
this.b=b},
ti:function ti(){},
m5:function m5(a){this.b=a},
zi:function zi(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
m4:function m4(a){this.a=a},
zl:function zl(){},
zm:function zm(a,b){this.a=a
this.b=b},
zk:function zk(a,b,c){this.c=a
this.a=b
this.b=c},
m8:function m8(){},
m9:function m9(a){this.a=a},
nd:function nd(){},
zO:function zO(a,b){this.a=a
this.b=b},
k7:function k7(){},
oB:function oB(a){this.a=a},
zY:function zY(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function nx(){},
ny:function ny(){},
oL:function oL(a){this.b=this.a=0
this.c=a},
A0:function A0(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
ju:function ju(a){this.a=a},
dk:function dk(a){this.a=a
this.b=16
this.c=0},
oS:function oS(){},
Et(a,b){var s=A.Jn(a,b)
if(s==null)throw A.b(A.a8("Could not parse BigInt",a,null))
return s},
Jk(a,b){var s,r,q=$.ch(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bh(0,$.CW()).fG(0,A.jF(s))
s=0
o=0}}if(b)return q.bA(0)
return q},
El(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
Jl(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.u3(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.El(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.El(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ch()
l=A.bJ(j,i)
return new A.aJ(l===0?!1:c,i,l)},
Jn(a,b){var s,r,q,p,o
if(a==="")return null
s=$.GB().e8(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.Jk(p,q)
if(o!=null)return A.Jl(o,2,q)
return null},
bJ(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
Ci(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
Ek(a){var s
if(a===0)return $.ch()
if(a===1)return $.f9()
if(a===2)return $.GC()
if(Math.abs(a)<4294967296)return A.jF(B.c.iq(a))
s=A.Jh(a)
return s},
jF(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bJ(4,s)
return new A.aJ(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bJ(1,s)
return new A.aJ(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.ag(a,16)
r=A.bJ(2,s)
return new A.aJ(r===0?!1:o,s,r)}r=B.c.N(B.c.gmr(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.N(a,65536)}r=A.bJ(r,s)
return new A.aJ(r===0?!1:o,s,r)},
Jh(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.P("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.ch()
r=$.GA()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.H(r)
r[p]=0}q=J.p9(B.f.gaa(r))
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
if(n<0)k=l.dw(0,-n)
else k=n>0?l.bB(0,n):l
if(s)return k.bA(0)
return k},
Cj(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.H(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.H(d)
d[s]=0}return b+c},
Er(a,b,c,d){var s,r,q,p,o,n=B.c.N(c,16),m=B.c.al(c,16),l=16-m,k=B.c.bB(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dw(p,l)
r&2&&A.H(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bB((p&k)>>>0,m)}r&2&&A.H(d)
d[n]=q},
Em(a,b,c,d){var s,r,q,p,o=B.c.N(c,16)
if(B.c.al(c,16)===0)return A.Cj(a,b,o,d)
s=b+o+1
A.Er(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.H(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
Jm(a,b,c,d){var s,r,q,p,o=B.c.N(c,16),n=B.c.al(c,16),m=16-n,l=B.c.bB(1,n)-1,k=B.c.dw(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bB((q&l)>>>0,m)
s&2&&A.H(d)
d[r]=(p|k)>>>0
k=B.c.dw(q,n)}s&2&&A.H(d)
d[j]=k},
y_(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
Ji(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.ag(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.ag(r,16)}s&2&&A.H(e)
e[b]=r},
nT(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.ag(r,16)&1)}},
Es(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.H(d)
d[e]=p&65535
r=B.c.N(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.H(d)
d[e]=n&65535
r=B.c.N(n,65536)}},
Jj(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iI((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Mf(a){return A.ku(a)},
BC(a,b){return new A.lx(new WeakMap(),a,b.i("lx<0>"))},
BD(a){},
yN(a,b){var s=$.GD()
s=s==null?null:new s(A.e6(A.MP(a,b),1))
return new A.o8(s,b.i("o8<0>"))},
aG(a){var s=A.j9(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
M3(a){var s=A.It(a)
if(s!=null)return s
throw A.b(A.a8("Invalid double",a,null))},
HF(a,b){a=A.aK(a,new Error())
a.stack=b.l(0)
throw a},
af(a,b,c,d){var s,r=c?J.DC(a,d):J.BL(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bG(a,b,c){var s,r=A.k([],c.i("B<0>"))
for(s=J.D(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
O(a,b){var s,r
if(Array.isArray(a))return A.k(a.slice(0),b.i("B<0>"))
s=A.k([],b.i("B<0>"))
for(r=J.D(a);r.k();)s.push(r.gn())
return s},
dG(a,b){var s=A.bG(a,!1,b)
s.$flags=3
return s},
dR(a,b,c){var s,r,q,p,o
A.ba(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.aw(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.DV(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.IT(a,b,c)
if(r)a=J.Bv(a,c)
if(b>0)a=J.pd(a,b)
s=A.O(a,t.S)
return A.DV(s)},
IT(a,b,c){var s=a.length
if(b>=s)return""
return A.Iv(a,b,c==null||c>s?s:c)},
ag(a,b,c){return new A.er(a,A.BN(a,!1,b,c,!1,""))},
Me(a,b){return a==null?b==null:a===b},
wF(a,b,c){var s=J.D(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
Cd(){var s,r,q=A.Io()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.Ed
if(s!=null&&q===$.Ec)return s
r=A.nw(q)
$.Ed=r
$.Ec=q
return r},
hO(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.l){s=$.GE()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bt(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
K_(a){var s,r,q
if(!$.GF())return A.K0(a)
s=new URLSearchParams()
a.a3(0,new A.zX(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
C5(){return A.ah(new Error())},
Bz(a,b,c,d,e,f,g){var s=A.Iw(a,b,c,d,e,f,g,0,!0)
return new A.aR(s==null?new A.r5(a,b,c,d,e,f,g,0).$0():s,0,!0)},
Hw(){return new A.aR(Date.now(),0,!1)},
lo(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.aw(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.aw(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aH(b,s,"Time including microseconds is outside valid range"))
A.cy(c,"isUtc",t.y)
return a},
Hx(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
Dm(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ln(a){if(a>=10)return""+a
return"0"+a},
dw(a,b,c){return new A.aC(a+1000*b+1e6*c)},
fr(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aH(b,"name","No enum value with that name"))},
ir(a){if(typeof a=="number"||A.bw(a)||a==null)return J.a_(a)
if(typeof a=="string")return JSON.stringify(a)
return A.DU(a)},
Do(a,b){A.cy(a,"error",t.K)
A.cy(b,"stackTrace",t.l)
A.HF(a,b)},
kO(a){return new A.kN(a)},
P(a,b){return new A.bC(!1,null,b,a)},
aH(a,b,c){return new A.bC(!0,a,b,c)},
kK(a,b){return a},
aZ(a){var s=null
return new A.d8(s,s,!1,s,s,a)},
w8(a,b){return new A.d8(null,null,!0,a,b,"Value not in range")},
aw(a,b,c,d,e){return new A.d8(b,c,!0,a,d,"Invalid value")},
DZ(a,b,c,d){if(a<b||a>c)throw A.b(A.aw(a,b,c,d,null))
return a},
Iz(a,b,c,d){return A.Dy(a,d,b,null,c)},
bb(a,b,c){if(0>a||a>c)throw A.b(A.aw(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aw(b,a,c,"end",null))
return b}return c},
ba(a,b){if(a<0)throw A.b(A.aw(a,0,null,b,null))
return a},
Dx(a,b){var s=b.b
return new A.iA(s,!0,a,null,"Index out of range")},
lW(a,b,c,d,e){return new A.iA(b,!0,a,e,"Index out of range")},
Dy(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.lW(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cU(a)},
Ea(a){return new A.nq(a)},
x(a){return new A.bk(a)},
az(a){return new A.l7(a)},
Dp(a){return new A.o6(a)},
a8(a,b,c){return new A.bi(a,b,c)},
HU(a,b,c){var s,r
if(A.CK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
$.f1.push(a)
try{A.KQ(a,s)}finally{$.f1.pop()}r=A.wF(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
tf(a,b,c){var s,r
if(A.CK(a))return b+"..."+c
s=new A.a2(b)
$.f1.push(a)
try{r=s
r.a=A.wF(r.a,a,", ")}finally{$.f1.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
KQ(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
DJ(a,b,c,d,e){return new A.ee(a,b.i("@<0>").U(c).U(d).U(e).i("ee<1,2,3,4>"))},
c5(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a7(a)
b=J.a7(b)
return A.hc(A.ax(A.ax($.fa(),s),b))}if(B.d===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.hc(A.ax(A.ax(A.ax($.fa(),s),b),c))}if(B.d===e){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
return A.hc(A.ax(A.ax(A.ax(A.ax($.fa(),s),b),c),d))}if(B.d===f){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
return A.hc(A.ax(A.ax(A.ax(A.ax(A.ax($.fa(),s),b),c),d),e))}if(B.d===g){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
return A.hc(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax($.fa(),s),b),c),d),e),f))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
g=J.a7(g)
g=A.hc(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax($.fa(),s),b),c),d),e),f),g))
return g},
uR(a){var s,r=$.fa()
for(s=J.D(a);s.k();)r=A.ax(r,J.a7(s.gn()))
return A.hc(r)},
F4(a,b){return 65536+((a&1023)<<10)+(b&1023)},
nw(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Eb(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gnh()
else if(s===32)return A.Eb(B.a.A(a5,5,a4),0,a3).gnh()}r=A.af(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.Fs(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.Fs(a5,0,q,20,r)===20)r[7]=q
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
if(!(i&&o+1===n)){if(!B.a.ae(a5,"\\",n))if(p>0)h=B.a.ae(a5,"\\",p-1)||B.a.ae(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.ae(a5,"..",n)))h=m>n+2&&B.a.ae(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.ae(a5,"file",0)){if(p<=0){if(!B.a.ae(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.A(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.dk(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.ae(a5,"http",0)){if(i&&o+3===n&&B.a.ae(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dk(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.ae(a5,"https",0)){if(i&&o+4===n&&B.a.ae(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dk(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cc(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.Cq(a5,0,q)
else{if(q===0)A.hN(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.ER(a5,c,p-1):""
a=A.EP(a5,p,o,!1)
i=o+1
if(i<n){a0=A.j9(B.a.A(a5,i,n),a3)
d=A.zT(a0==null?A.w(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.EQ(a5,n,m,a3,j,a!=null)
a2=m<l?A.zU(a5,m+1,l,a3):a3
return A.kg(j,b,a,d,a1,a2,l<a4?A.EO(a5,l+1,a4):a3)},
J3(a){return A.Ct(a,0,a.length,B.l,!1)},
nv(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
J0(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.nv("each part must be in the range 0..255",a,r)}A.nv("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.nv(k,a,q)}l=p+1
s&2&&A.H(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.nv(k,a,q)
p=l}A.nv("IPv4 address should contain exactly 4 parts",a,q)},
J1(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.J2(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.Ee(a,b,c)
return!0},
J2(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bi(o,a,r)
s=r
break}return new A.bi("Unexpected character",a,r-1)}if(s-1===b)return new A.bi(o,a,s)
return new A.bi("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bi("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bi("Invalid IPvFuture address character",a,s)}},
Ee(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.xc(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.J0(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.c.ag(n,8)
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
B.f.aj(s,b,16,s,c)
B.f.jV(s,c,b,0)}}return s},
kg(a,b,c,d,e,f,g){return new A.kf(a,b,c,d,e,f,g)},
EL(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hN(a,b,c){throw A.b(A.a8(c,a,b))},
JX(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.F(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
zT(a,b){if(a!=null&&a===A.EL(b))return null
return a},
EP(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hN(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.JY(a,r,s)
if(p<s){o=p+1
q=A.EU(a,B.a.ae(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.J1(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.c8(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.EU(a,B.a.ae(a,"25",o)?s+3:o,c,"%25")}else q=""
A.Ee(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.K2(a,b,c)},
JY(a,b,c){var s=B.a.c8(a,"%",b)
return s>=b&&s<c?s:c},
EU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.Cr(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a2("")
m=i.a+=B.a.A(a,r,s)
if(n)o=B.a.A(a,s,s+3)
else if(o==="%")A.hN(a,s,"ZoneID should not contain % anymore")
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
m=A.Cp(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
K2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.Cr(a,s,!0)
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
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hN(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a2("")
m=q}else m=q
m.a+=l
k=A.Cp(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
Cq(a,b,c){var s,r,q
if(b===c)return""
if(!A.EN(a.charCodeAt(b)))A.hN(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hN(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.JW(r?a.toLowerCase():a)},
JW(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ER(a,b,c){if(a==null)return""
return A.kh(a,b,c,16,!1,!1)},
EQ(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kh(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.K1(s,e,f)},
K1(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.Cs(a,!s||c)
return A.eZ(a)},
zU(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.P("Both query and queryParameters specified",null))
return A.kh(a,b,c,256,!0,!1)}if(d==null)return null
return A.K_(d)},
K0(a){var s={},r=new A.a2("")
s.a=""
a.a3(0,new A.zV(new A.zW(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
EO(a,b,c){if(a==null)return null
return A.kh(a,b,c,256,!0,!1)},
Cr(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.B0(s)
p=A.B0(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bt(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
Cp(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.m4(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dR(s,0,null)},
kh(a,b,c,d,e,f){var s=A.ET(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
ET(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.Cr(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hN(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.Cp(o)}if(p==null){p=new A.a2("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
ES(a){if(B.a.S(a,"."))return!0
return B.a.bN(a,"/.")!==-1},
eZ(a){var s,r,q,p,o,n
if(!A.ES(a))return a
s=A.k([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
Cs(a,b){var s,r,q,p,o,n
if(!A.ES(a))return!b?A.EM(a):a
s=A.k([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga0(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.EM(s[0])
return B.b.B(s,"/")},
EM(a){var s,r,q=a.length
if(q>=2&&A.EN(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.af(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
K3(a,b){if(a.vR("package")&&a.c==null)return A.Fu(b,0,b.length)
return-1},
JZ(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.P("Invalid URL encoding",null))}}return s},
Ct(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.l===d)return B.a.A(a,b,c)
else p=new A.ci(B.a.A(a,b,c))
else{p=A.k([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.P("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.P("Truncated URI",null))
p.push(A.JZ(a,o+1))
o+=2}else p.push(r)}}return d.eY(p)},
EN(a){var s=a|32
return 97<=s&&s<=122},
Eb(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.k([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.b(A.a8(k,a,r))}}if(q<0&&r>b)throw A.b(A.a8(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga0(j)
if(p!==44||r!==n+7||!B.a.ae(a,"base64",n+1))throw A.b(A.a8("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aq.w9(a,m,s)
else{l=A.ET(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dk(a,m,s,l)}return new A.xb(a,j,c)},
Fs(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
ED(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.Fu(a.a,a.e,a.f)
return-1},
Fu(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
Ki(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
y0:function y0(){},
y1:function y1(){},
o8:function o8(a,b){this.a=a
this.$ti=b},
zX:function zX(a){this.a=a},
r5:function r5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a){this.a=a},
yI:function yI(){},
ae:function ae(){},
kN:function kN(a){this.a=a},
dd:function dd(){},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d8:function d8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iA:function iA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cU:function cU(a){this.a=a},
nq:function nq(a){this.a=a},
bk:function bk(a){this.a=a},
l7:function l7(a){this.a=a},
mv:function mv(){},
jm:function jm(){},
o6:function o6(a){this.a=a},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(){},
o:function o(){},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
j:function j(){},
oD:function oD(){},
jn:function jn(){this.b=this.a=0},
je:function je(a){this.a=a},
mU:function mU(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
xc:function xc(a){this.a=a},
kf:function kf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
zW:function zW(a,b){this.a=a
this.b=b},
zV:function zV(a){this.a=a},
xb:function xb(a,b,c){this.a=a
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
o1:function o1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
lx:function lx(a,b,c){this.a=a
this.b=b
this.$ti=c},
I5(a){return a},
HX(a){return a},
C8(a){return a},
HV(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.F0(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
HN(a){return new v.G.Promise(A.bX(new A.rF(a)))},
mr:function mr(a){this.a=a},
rF:function rF(a){this.a=a},
rD:function rD(a){this.a=a},
rE:function rE(a){this.a=a},
Aq(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.K9,a)
s[$.f8()]=a
return s},
cY(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Ka,a)
s[$.f8()]=a
return s},
bX(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.Kb,a)
s[$.f8()]=a
return s},
oU(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.Kc,a)
s[$.f8()]=a
return s},
hT(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.Kd,a)
s[$.f8()]=a
return s},
Cw(a){var s
if(typeof a=="function")throw A.b(A.P("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.Ke,a)
s[$.f8()]=a
return s},
K9(a){return a.$0()},
Ka(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
Kb(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
Kc(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
Kd(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
Ke(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
Fi(a){return a==null||A.bw(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
i0(a){if(A.Fi(a))return a
return new A.B5(new A.dY(t.mp)).$1(a)},
CH(a,b){return a[b]},
CB(a,b,c){return a[b].apply(a,c)},
LJ(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.b.C(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
a5(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.aI(s,b.i("aI<0>"))
a.then(A.e6(new A.Bc(r),1),A.e6(new A.Bd(r),1))
return s},
Fh(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
p1(a){if(A.Fh(a))return a
return new A.AJ(new A.dY(t.mp)).$1(a)},
B5:function B5(a){this.a=a},
Bc:function Bc(a){this.a=a},
Bd:function Bd(a){this.a=a},
AJ:function AJ(a){this.a=a},
FY(a,b){return Math.max(a,b)},
DX(){return B.as},
DY(){return $.Bq()},
ze:function ze(){},
zf:function zf(a){this.a=a},
He(a,b,c){return J.D_(a,b,c)},
lu:function lu(){},
a3:function a3(){},
px:function px(a){this.a=a},
py:function py(a){this.a=a},
pz:function pz(a,b){this.a=a
this.b=b},
pA:function pA(a){this.a=a},
pB:function pB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pC:function pC(a){this.a=a},
lq:function lq(a){this.$ti=a},
iE:function iE(a,b){this.a=a
this.$ti=b},
et:function et(a,b){this.a=a
this.$ti=b},
hM:function hM(){},
h1:function h1(a,b){this.a=a
this.$ti=b},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.$ti=c},
lp:function lp(){},
DO(){throw A.b(A.Y(u.O))},
J_(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
mq:function mq(){},
nt:function nt(){},
as(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dR(m,0,null)},
cj:function cj(a){this.a=a},
c2:function c2(){this.a=null},
lQ:function lQ(){},
rK:function rK(){},
cX(a){var s=new Uint32Array(A.b7(A.k([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.ox(s,r,a,q,new Uint32Array(16))},
ow:function ow(){},
zB:function zB(){},
ox:function ox(a,b,c,d,e){var _=this
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
pI:function pI(){},
iN:function iN(a){this.a=a},
jh:function jh(){},
uo:function uo(){},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
wk:function wk(){},
ji:function ji(a,b){this.b=a
this.c=b},
mZ:function mZ(a){this.a=a},
by(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lj(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
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
g=B.c.al(k,16)
for(h=0;h<g;++h)a4.setUint8(h,a7[j+h])}s^=a4.getUint32(0,!1)
r^=a4.getUint32(4,!1)
q^=a4.getUint32(8,!1)
p^=a4.getUint32(12,!1)
for(f=o,e=0,d=0,c=0,b=0,j=0;j<128;++j,p=a3,q=a2,r=a1){a=B.c.al(j,32)
if(a===0&&j!==0)if(j===32)f=n
else f=j===64?m:l
if((f&B.c.bB(1,31-a))>>>0!==0){e=(e^s)>>>0
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
Dl(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cN(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.N(q,n),!1)
r.setUint32(12,B.c.al(q,n),!1)
p=J.bN(B.az.gaa(r),0,null)
o=new Uint32Array(4)
A.lj(o,a,b)
A.lj(o,a,p)
return J.bN(B.y.gaa(o),0,null)},
li:function li(a,b,c){this.c=a
this.d=b
this.a=c},
qK:function qK(){},
o_:function o_(){},
o0:function o0(){},
oZ(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.ky()===B.O){a5=A.f2(a5)
a6=A.f2(a6)
a7=A.f2(a7)
a8=A.f2(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.ai[a5>>>24&255]^B.ag[a6>>>16&255]^B.ah[a7>>>8&255]^B.ak[a8&255]^b3[r]
o=B.ai[a6>>>24&255]^B.ag[a7>>>16&255]^B.ah[a8>>>8&255]^B.ak[a5&255]^b3[r+1]
n=B.ai[a7>>>24&255]^B.ag[a8>>>16&255]^B.ah[a5>>>8&255]^B.ak[a6&255]^b3[r+2]
m=B.ai[a8>>>24&255]^B.ag[a5>>>16&255]^B.ah[a6>>>8&255]^B.ak[a7&255]^b3[r+3]
r+=4}o=B.j[a5>>>24&255]
n=B.j[a6>>>16&255]
m=B.j[a7>>>8&255]
l=B.j[a8&255]
k=B.j[a6>>>24&255]
j=B.j[a7>>>16&255]
i=B.j[a8>>>8&255]
h=B.j[a5&255]
g=B.j[a7>>>24&255]
f=B.j[a8>>>16&255]
e=B.j[a5>>>8&255]
d=B.j[a6&255]
c=B.j[a8>>>24&255]
b=B.j[a5>>>16&255]
a=B.j[a6>>>8&255]
a0=B.j[a7&255]
a1=(((o&255)<<24|(n&255)<<16|(m&255)<<8|l&255)^b3[r])>>>0
a2=(((k&255)<<24|(j&255)<<16|(i&255)<<8|h&255)^b3[r+1])>>>0
a3=(((g&255)<<24|(f&255)<<16|(e&255)<<8|d&255)^b3[r+2])>>>0
a4=(((c&255)<<24|(b&255)<<16|(a&255)<<8|a0&255)^b3[r+3])>>>0
if($.ky()===B.O){a1=A.f2(a1)
a2=A.f2(a2)
a3=A.f2(a3)
a4=A.f2(a4)}a9.$flags&2&&A.H(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
FC(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge1(),h=B.cK.h(0,i.gm(0))
if(h==null)throw A.b(A.P("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.D_(B.y.gaa(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.H(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.ky()===B.O)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.al(m,k)
if(n===0)j=A.Fy((j<<8|j>>>24)>>>0)^B.cm[B.c.iI(m,k)-1]<<24
else if(o&&n===4)j=A.Fy(j)
r[m]=(j^r[m-k])>>>0}return r},
Fy(a){return(B.j[a>>>24&255]<<24|B.j[a>>>16&255]<<16|B.j[a>>>8&255]<<8|B.j[a&255])>>>0},
f2(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qv:function qv(){},
qL:function qL(){},
yw:function yw(){},
mP:function mP(a,b){this.a=a
this.b=b},
kS:function kS(){},
kT:function kT(){},
kU:function kU(){},
kV:function kV(){},
pr:function pr(){},
Fz(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mP("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.ef)){s=J.a_(a)
if(B.a.S(s,"TypeError: "))s=B.a.af(s,11)
a=new A.ef(s,b.b)}return a},
Fm(a,b,c){A.Do(A.Fz(a,c),b)},
K8(a,b){return new A.dj(new A.Ai(a,b),t.fb)},
hV(a,b,c){return A.L3(a,b,c)},
L3(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$hV=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.a(a1.q(),$async$hV)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.Ar(e)
a1.r=new A.As(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a5(c.read(),k),$async$hV)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.E(b)
l=A.ah(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.Fz(m,a)
k=l
j=a1.b
if(j>=4)A.w(a1.bD())
if((j&1)!==0){j=a1.gaM()
j.aG(d,k==null?B.P:k)}s=15
return A.a(a1.q(),$async$hV)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.u5()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.w(a1.bD())
if((f&1)!==0)a1.gaM().aA(g)}g=a1.b
s=((g&1)!==0?(a1.gaM().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aI(new A.u($.C,j),i):g).a,$async$hV)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hV,r)},
l_:function l_(a){this.b=!1
this.c=a},
pu:function pu(a){this.a=a},
Ai:function Ai(a,b){this.a=a
this.b=b},
Ar:function Ar(a){this.a=a},
As:function As(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a){this.a=a},
pw:function pw(a){this.a=a},
Dh(a,b){return new A.ef(a,b)},
ef:function ef(a,b){this.a=a
this.b=b},
mj:function mj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
Ig(a,b){var s=t.N,r=A.k([],t.e8),q=$.CP()
if(!q.b.test(a))A.w(A.aH(a,"method","Not a valid method"))
return new A.uJ(A.t(s,s),r,a,b,A.dF(new A.kU(),new A.kV(),s,s))},
uJ:function uJ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
uK:function uK(a,b){this.a=a
this.b=b},
IC(a,b){var s=new Uint8Array(0),r=$.CP()
if(!r.b.test(a))A.w(A.aH(a,"method","Not a valid method"))
r=t.N
return new A.wb(s,a,b,A.dF(new A.kU(),new A.kV(),r,r))},
wb:function wb(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jq:function jq(){},
nc:function nc(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
Hf(a){return a.toLowerCase()},
ig:function ig(a,b,c){this.a=a
this.c=b
this.$ti=c},
I8(a){return A.MO("media type",a,new A.us(a))},
BS(a,b,c){var s=t.N
if(c==null)s=A.t(s,s)
else{s=new A.ig(A.LK(),A.t(s,t.af),t.fo)
s.C(0,c)}return new A.fD(a.toLowerCase(),b.toLowerCase(),new A.cT(s,t.ph))},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
us:function us(a){this.a=a},
uu:function uu(a){this.a=a},
ut:function ut(){},
M5(a){var s
a.mH($.GP(),"quoted string")
s=a.gkb().h(0,0)
return A.Ga(B.a.A(s,1,s.length-1),$.GO(),new A.AT(),null)},
AT:function AT(){},
Hu(b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9="recordId",b0="field",b1="imgs",b2="name",b3="expectedSha256",b4="session",b5="refId",b6="id",b7="spec",b8="store"
switch(b9){case"open":s=c0.h(0,"stores")
r=c0.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.V("Malformed open payload."))
q=A.k([],t.d)
for(p=J.D(s);p.k();)q.push(A.Dk(p.gn(),"stores"))
p=t.N
p=A.t(p,p)
for(o=r.gac(),o=o.gu(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string"&&typeof n.b=="string")p.j(0,m,A.F(n.b))}return new A.mu(q,p)
case"capabilities":return B.bA
case"health":return B.bD
case"close":return B.bB
case"fileBeginUpload":l=c0.h(0,"size")
if(!A.ac(l))throw A.b(A.V("Malformed fileBeginUpload payload."))
q=A.aQ(c0)
p=A.bg(c0,a9)
if(typeof c0.h(0,b0)=="string"){o=c0.h(0,b0)
o.toString
A.F(o)}else o=b1
if(typeof c0.h(0,b2)=="string"){n=c0.h(0,b2)
n.toString
A.F(n)}else n="blob.bin"
if(typeof c0.h(0,b3)=="string"){m=c0.h(0,b3)
m.toString
A.F(m)}else m=a8
return new A.lC(q,p,l,o,n,m,J.v(c0.h(0,"allowVolatileBlobs"),!0))
case"fileChunk":k=c0.h(0,"chunk")
if(!t.p.b(k))throw A.b(A.V("Malformed fileChunk payload."))
return new A.lD(A.bg(c0,b4),k)
case"fileFinish":return new A.lF(A.bg(c0,b4))
case"fileAbort":return new A.lB(A.bg(c0,b4))
case"filesList":q=A.aQ(c0)
p=A.bg(c0,a9)
if(typeof c0.h(0,b0)=="string"){o=c0.h(0,b0)
o.toString
A.F(o)}else o=b1
return new A.lO(q,p,o)
case"fileOpen":j=c0.h(0,"index")
if(j!=null&&!A.ac(j))throw A.b(A.V("Malformed fileOpen payload."))
q=A.aQ(c0)
p=A.bg(c0,a9)
if(typeof c0.h(0,b0)=="string"){o=c0.h(0,b0)
o.toString
A.F(o)}else o=b1
n=A.ac(j)?j:0
if(typeof c0.h(0,b5)=="string"){m=c0.h(0,b5)
m.toString
A.F(m)}else m=a8
return new A.lI(q,p,o,n,m)
case"fileCredit":i=c0.h(0,"bytes")
if(!A.ac(i))throw A.b(A.V("Malformed fileCredit payload."))
return new A.lE(A.bg(c0,"stream"),i)
case"fileRemove":j=c0.h(0,"index")
if(j!=null&&!A.ac(j))throw A.b(A.V("Malformed fileRemove payload."))
q=A.aQ(c0)
p=A.bg(c0,a9)
if(typeof c0.h(0,b0)=="string"){o=c0.h(0,b0)
o.toString
A.F(o)}else o=b1
n=A.ac(j)?j:0
if(typeof c0.h(0,b5)=="string"){m=c0.h(0,b5)
m.toString
A.F(m)}else m=a8
return new A.lM(q,p,o,n,m)
case"fileGc":h=c0.h(0,"blobGraceMs")
g=c0.h(0,"tmpGraceMs")
if(!A.ac(h)||!A.ac(g))throw A.b(A.V("Malformed fileGc payload."))
return new A.lG(h,g)
case"fileEnforceStorageCap":f=c0.h(0,"maxBytes")
if(!A.ac(f))throw A.b(A.V("Malformed fileEnforceStorageCap payload."))
return new A.lv(f)
case"fileStorageStatus":return B.bP
case"get":return new A.lP(A.aQ(c0),A.bg(c0,b6),A.cD(c0))
case"rows":e=c0.h(0,"ids")
if(!t.j.b(e))throw A.b(A.V("Malformed rows payload."))
q=A.aQ(c0)
p=A.k([],t.s)
for(o=J.D(e);o.k();)p.push(A.F(o.gn()))
return new A.mS(q,p,A.cD(c0))
case"mutate":return new A.mk(A.aQ(c0),A.Km(c0.h(0,"mutation")),A.cD(c0))
case"query":return new A.mK(A.aQ(c0),A.eC(c0.h(0,b7)),A.cD(c0))
case"count":return new A.lf(A.aQ(c0),A.eC(c0.h(0,b7)),A.cD(c0))
case"countDistinct":return new A.le(A.aQ(c0),A.bg(c0,b0),A.eC(c0.h(0,b7)),A.cD(c0))
case"distinct":q=A.aQ(c0)
p=A.bg(c0,b0)
o=c0.h(0,b7)
return new A.lr(q,p,A.eC(o==null?B.o:o),A.cD(c0))
case"ids":return new A.lU(A.aQ(c0),A.eC(c0.h(0,b7)),A.cD(c0))
case"aggregate":d=c0.h(0,"fn")
c=A.BK(new A.ak(B.cv,new A.qq(d),t.gx))
if(c==null)throw A.b(A.V("Unknown aggregate: "+A.r(d)))
return new A.kH(A.aQ(c0),c,A.bg(c0,b0),A.eC(c0.h(0,b7)),A.cD(c0))
case"explain":return new A.ly(A.aQ(c0),A.eC(c0.h(0,b7)),A.cD(c0))
case"search":return new A.mY(A.aQ(c0),A.IJ(c0.h(0,b7)),A.cD(c0))
case"txBegin":b=c0.h(0,"readOnly")
if(!A.bw(b))throw A.b(A.V("Malformed txBegin payload."))
a=c0.h(0,"durability")
a0=A.BK(new A.ak(B.cI,new A.qr(a),t.mE))
if(typeof a=="string"&&a0==null)throw A.b(A.V("Unknown tx durability: "+a))
return new A.nj(b,a0==null?B.bl:a0)
case"txCommit":case"txRollback":a1=c0.h(0,b4)
if(typeof a1!="string")throw A.b(A.V("Malformed tx payload."))
return b9==="txCommit"?new A.nk(a1):new A.nm(a1)
case"txSavepoint":case"txRollbackTo":case"txRelease":a1=c0.h(0,b4)
a2=c0.h(0,b2)
if(typeof a1!="string"||typeof a2!="string")throw A.b(A.V("Malformed savepoint payload."))
A:{if("txSavepoint"===b9){q=new A.no(a1,a2)
break A}if("txRollbackTo"===b9){q=new A.nn(a1,a2)
break A}q=new A.nl(a1,a2)
break A}return q
case"watchOne":return new A.nD(A.aQ(c0),A.bg(c0,b6))
case"watch":return new A.nE(A.aQ(c0),A.eC(c0.h(0,b7)))
case"watchCancel":a3=c0.h(0,"subscription")
if(typeof a3!="string")throw A.b(A.V("Malformed watchCancel payload."))
return new A.nC(a3)
case"analyze":if(typeof c0.h(0,b8)=="string"){q=c0.h(0,b8)
q.toString
A.F(q)}else q=a8
return new A.kJ(q)
case"walCheckpoint":return B.bR
case"vacuum":return B.bQ
case"pruneOutbox":return B.bO
case"compact":a4=c0.h(0,b8)
a5=c0.h(0,"olderThanMs")
if(typeof a4!="string"||!A.ac(a5))throw A.b(A.V("Malformed compact payload."))
return new A.l6(a4,a5)
case"runMaintenance":a6=c0.h(0,"compactOlderThanMs")
if(!A.ac(a6))throw A.b(A.V("Malformed runMaintenance payload."))
return new A.mT(a6)
case"conflictsList":a4=c0.h(0,b8)
return new A.lb(typeof a4=="string"?a4:a8)
case"conflictGet":return new A.la(A.aQ(c0),A.bg(c0,b6))
case"conflictsResolve":a7=c0.h(0,"merged")
if(!t.f.b(a7))throw A.b(A.V("Malformed conflictsResolve payload."))
return new A.mQ(A.aQ(c0),A.bg(c0,b6),A.Dk(a7,"merged"))
case"conflictsAcceptLocal":return new A.kE(A.aQ(c0),A.bg(c0,b6))
case"conflictsAcceptRemote":return new A.kF(A.aQ(c0),A.bg(c0,b6))
case"conflictsWatch":a4=c0.h(0,b8)
return new A.ld(typeof a4=="string"?a4:a8)
default:return a8}},
aQ(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.V("Malformed store name."))
return s},
bg(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.V('Malformed field "'+b+'".'))
return s},
cD(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.V("Malformed session id."))
return s},
Dk(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.gac(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),q.b)}return s}throw A.b(A.V('Malformed field "'+b+'".'))},
KS(a){var s
A:{if(a instanceof A.eJ){s="ValidationException"
break A}if(a instanceof A.eI){s="UniqueConstraintException"
break A}if(a instanceof A.ey){s="NotNullConstraintException"
break A}if(a instanceof A.ff){s="CheckConstraintException"
break A}if(a instanceof A.fO){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fy){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hh){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fA){s="FtsUnavailableError"
break A}if(a instanceof A.eD){s="SchemaRegistrationError"
break A}if(a instanceof A.h_){s="SchemaTooNewError"
break A}if(a instanceof A.cO){s="StorageError"
break A}if(a instanceof A.fW){s="RecordNotFoundException"
break A}if(a instanceof A.h5){s="StaleCursorError"
break A}if(a instanceof A.fG){s="MissingLimitError"
break A}if(a instanceof A.fj){s="ConflictBlockedError"
break A}if(a instanceof A.ek){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.fV){s="ReadOnlyTxError"
break A}throw A.b(A.fU(u.P))}return s},
Kt(a){var s
A:{if(a instanceof A.iU){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.iX){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.iV){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iY){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iR){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iS){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iQ){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.iW){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iT){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.fU(u.P))}return s},
Km(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.V("Malformed mutation payload."))
s=t.N
r=a.aU(0,new A.Ao(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iU(A.oY(r.h(0,n),n))
case"upsert":return new A.iX(A.oY(r.h(0,n),n))
case"putAll":return new A.iV(A.Fx(r.h(0,m),m))
case"upsertAll":return new A.iY(A.Fx(r.h(0,m),m))
case"patch":return new A.iR(A.At(r.h(0,l),l),A.oY(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.V("Malformed patchAll patches."))
k=A.t(s,t.G)
for(s=p.gac(),s=s.gu(s);s.k();){o=s.gn()
k.j(0,J.a_(o.a),A.oY(o.b,"patches"))}return new A.iS(k)
case"archive":return new A.iQ(A.At(r.h(0,l),l))
case"restore":return new A.iW(A.At(r.h(0,l),l))
case"purge":return new A.iT(A.At(r.h(0,l),l))
default:throw A.b(A.V("Unknown mutation kind: "+A.r(q)))}},
At(a,b){if(typeof a=="string")return a
throw A.b(A.V('Malformed mutation field "'+b+'".'))},
oY(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.gac(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),q.b)}return s}throw A.b(A.V('Malformed mutation field "'+b+'".'))},
Fx(a,b){var s,r
if(t.j.b(a)){s=A.k([],t.d)
for(r=J.D(a);r.k();)s.push(A.oY(r.gn(),b))
return s}throw A.b(A.V('Malformed mutation field "'+b+'".'))},
eC(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="predicate",a=null,a0=t.f
if(!a0.b(a1))throw A.b(A.V("Malformed query spec."))
s=a1.aU(0,new A.w3(),t.N,t.z)
r=new A.w4()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.k([],t.ae)
i=t.j
if(i.b(p))for(h=J.D(p);h.k();)j.push(r.$1(h.gn()))
a0=a0.b(s.h(0,b))?A.BU(s.h(0,b)):a
h=A.k([],t.gc)
if(i.b(o))for(g=J.D(o);g.k();)h.push(A.Iy(g.gn()))
g=A.ac(m)?m:a
f=J.v(s.h(0,"all"),!0)
if(i.b(n)){i=A.k([],t.s)
for(e=J.D(n);e.k();)i.push(J.a_(e.gn()))}else i=a
e=J.v(s.h(0,"includeArchived"),!0)
d=J.v(s.h(0,"includeHidden"),!0)
c=typeof l=="string"?l:a
return new A.w2(k,j,a0,h,g,f,i,e,d,c,J.v(s.h(0,"backward"),!0))},
DW(a){var s,r,q,p,o,n,m,l="Malformed query condition."
if(!t.f.b(a))throw A.b(A.V(l))
s=a.aU(0,new A.w_(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.V(l))
p=A.BK(new A.ak(B.co,new A.w0(q),t.mz))
if(p==null)throw A.b(A.V("Unknown query operator: "+q))
o=A.p2(s.h(0,"value"))
n=t.j
if(n.b(s.h(0,"values"))){m=[]
for(n=J.D(n.a(s.h(0,"values")));n.k();)m.push(A.p2(n.gn()))
n=m}else n=null
return new A.eB(r,p,o,n)},
BU(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.V("Malformed predicate tree."))
s=a.aU(0,new A.vs(),t.N,t.z)
r=new A.vr()
switch(s.h(0,"kind")){case"leaf":return new A.iK(A.DW(s))
case"not":return new A.j4(A.BU(s.h(0,"child")))
case"all":return new A.i8(r.$1(s.h(0,q)))
case"any":return new A.i9(r.$1(s.h(0,q)))
default:throw A.b(A.V("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
Iy(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.V(q))
s=a.aU(0,new A.w1(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.V(q))
return new A.mJ(r,J.v(s.h(0,"desc"),!0))},
IJ(a){var s,r,q,p
if(!t.f.b(a))throw A.b(A.V("Malformed search spec."))
s=a.aU(0,new A.wj(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.V("Malformed search term."))
q=s.h(0,"limit")
p=A.ac(q)?q:null
return new A.wi(r,p,J.v(s.h(0,"all"),!0),J.v(s.h(0,"includeArchived"),!0),J.v(s.h(0,"includeHidden"),!0))},
Hv(a){return new A.fn(a)},
HA(a){return new A.fo(a)},
HS(a){return new A.fB(a)},
Ha(a){return new A.fb(a)},
HG(a){return new A.fs(a)},
kr(a){var s,r,q
if(a instanceof A.aR)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gf2().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.kr(r.gn()))
return s}if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.gac(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a_(q.a),A.kr(q.b))}return s}if(a==null||A.bw(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.V("Value of type "+J.bO(a).l(0)+" is not wire-safe."))},
p2(a){var s,r,q,p,o,n,m,l="Malformed bytes wire value."
if(t.f.b(a)){r=a.h(0,"__lp_t")
q=J.dp(r)
if(q.R(r,"datetime")){s=a.h(0,"v")
if(A.ac(s))return new A.aR(A.lo(s,0,!0),0,!0)
throw A.b(A.V("Malformed datetime wire value."))}if(q.R(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{q=B.ar.v(s)
return q}catch(p){if(t.Y.b(A.E(p)))throw A.b(A.V(l))
else throw p}throw A.b(A.V(l))}q=A.t(t.N,t.X)
for(o=a.gac(),o=o.gu(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string")q.j(0,m,A.p2(n.b))}return q}if(t.j.b(a)){q=[]
for(o=J.D(a);o.k();)q.push(A.p2(o.gn()))
return q}return a},
V(a){return new A.jz(a)},
qq:function qq(a){this.a=a},
qr:function qr(a){this.a=a},
l9:function l9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
cE:function cE(){},
l5:function l5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lc:function lc(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
lK:function lK(a,b,c,d,e,f,g,h,i,j){var _=this
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
lC:function lC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lD:function lD(a,b){this.a=a
this.b=b},
lF:function lF(a){this.a=a},
lB:function lB(a){this.a=a},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
lI:function lI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lE:function lE(a,b){this.a=a
this.b=b},
lM:function lM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lG:function lG(a,b){this.a=a
this.b=b},
lv:function lv(a){this.a=a},
n9:function n9(){},
lN:function lN(a,b){this.a=a
this.b=b},
lL:function lL(a){this.a=a},
fw:function fw(a){this.a=a},
lJ:function lJ(a){this.a=a},
fv:function fv(a){this.a=a},
ft:function ft(a){this.a=a},
h7:function h7(a){this.a=a},
fu:function fu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uL:function uL(){},
iU:function iU(a){this.a=a},
iX:function iX(a){this.a=a},
iV:function iV(a){this.a=a},
iY:function iY(a){this.a=a},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a},
iQ:function iQ(a){this.a=a},
iW:function iW(a){this.a=a},
iT:function iT(a){this.a=a},
Ao:function Ao(){},
w2:function w2(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
w3:function w3(){},
w4:function w4(){},
eB:function eB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w_:function w_(){},
w0:function w0(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
cL:function cL(){},
vs:function vs(){},
vr:function vr(){},
iK:function iK(a){this.a=a},
j4:function j4(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
mJ:function mJ(a,b){this.a=a
this.b=b},
w1:function w1(){},
cA:function cA(a,b){this.a=a
this.b=b},
wi:function wi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wj:function wj(){},
mO:function mO(){},
mu:function mu(a,b){this.a=a
this.b=b},
l0:function l0(){},
lR:function lR(){},
l3:function l3(){},
lP:function lP(a,b,c){this.a=a
this.b=b
this.c=c},
mS:function mS(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function mk(a,b,c){this.a=a
this.b=b
this.c=c},
mK:function mK(a,b,c){this.a=a
this.b=b
this.c=c},
lf:function lf(a,b,c){this.a=a
this.b=b
this.c=c},
le:function le(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lr:function lr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lU:function lU(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ly:function ly(a,b,c){this.a=a
this.b=b
this.c=c},
mY:function mY(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b){this.a=a
this.b=b},
nj:function nj(a,b){this.a=a
this.b=b},
nk:function nk(a){this.a=a},
nm:function nm(a){this.a=a},
no:function no(a,b){this.a=a
this.b=b},
nn:function nn(a,b){this.a=a
this.b=b},
nl:function nl(a,b){this.a=a
this.b=b},
nD:function nD(a,b){this.a=a
this.b=b},
nE:function nE(a,b){this.a=a
this.b=b},
nC:function nC(a){this.a=a},
kJ:function kJ(a){this.a=a},
nB:function nB(){},
nz:function nz(){},
mG:function mG(){},
l6:function l6(a,b){this.a=a
this.b=b},
mT:function mT(a){this.a=a},
lb:function lb(a){this.a=a},
la:function la(a,b){this.a=a
this.b=b},
mQ:function mQ(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a,b){this.a=a
this.b=b},
kF:function kF(a,b){this.a=a
this.b=b},
ld:function ld(a){this.a=a},
am:function am(){},
fL:function fL(){},
ie:function ie(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lS:function lS(a,b){this.a=a
this.b=b},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
fH:function fH(a){this.a=a},
fT:function fT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
fB:function fB(a){this.a=a},
fb:function fb(a){this.a=a},
fs:function fs(a){this.a=a},
h0:function h0(a){this.a=a},
mX:function mX(a,b){this.a=a
this.b=b},
fl:function fl(a){this.a=a},
fk:function fk(a){this.a=a},
hd:function hd(a){this.a=a},
hl:function hl(a){this.a=a},
fQ:function fQ(a){this.a=a},
fi:function fi(a){this.a=a},
jz:function jz(a){this.a=a},
aj(a){var s,r=new A.a2("")
A.cg(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
CO(a){var s,r,q
for(s=new A.mU(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
Kh(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.c5(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
cg(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.bw(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.ac(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.Kh(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a7(b,h)
a.a+=r
return A.CO(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.M(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cg(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.k([],t.l5)
for(s=J.D(b.gK());s.k();){n=s.gn()
r=J.a_(n)
if(B.b.bL(o,new A.Bn(r)))throw A.b(A.P('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a4(r,n))}B.b.ci(o,new A.Bo())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.q)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a7(k.a,h)
a.a+=j
i=A.CO(j)
a.a+=":"
q=q+i+1+A.cg(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.P("Cannot canonicalize value of type "+J.bO(b).l(0),h))},
Bn:function Bn(a){this.a=a},
Bo:function Bo(){},
IN(a){var s,r,q,p=A.ag("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).e8(a)
if(p==null)return B.d9
s=p.b
r=s[1]
r.toString
r=A.aG(r)
q=s[2]
q.toString
q=A.aG(q)
s=s[3]
s=A.j9(s==null?"":s,null)
return new A.eW(r,q,s==null?0:s)},
E3(a,b,c){var s,r=A.IN(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eG(a,b){return A.IO(a,b)},
IO(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eG=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b1("SELECT sqlite_version() AS v"),$async$eG)
case 3:g=d.S(c.c_(a2),"v")
g.toString
A.F(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b1("PRAGMA compile_options"),$async$eG)
case 4:j=d.O(new c.bI(b.bB(a2,new A.wt(),t.X),k),k.i("o.E"))
n=B.b.bL(j,new A.wu())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eG)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$eG)
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
k=a0===B.ba
s=k?13:14
break
case 13:p=16
s=19
return A.a(a.b1("PRAGMA journal_mode"),$async$eG)
case 19:l=a2
if(J.e9(l))m=A.a6(J.c_(J.c_(l).gaY()))
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
case 18:case 14:h=A.E3(g,3,37)
k=k&&J.v(m,"wal")
q=new A.n8(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eG,r)},
mC:function mC(a,b){this.a=a
this.b=b},
n8:function n8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wt:function wt(){},
wu:function wu(){},
ih:function ih(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
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
pF:function pF(a,b){this.a=a
this.b=b},
pG:function pG(){},
pH:function pH(){},
D5(a){return new Uint8Array(A.b7(a))},
ri:function ri(){},
pe:function pe(a,b,c){this.b=a
this.c=b
this.d=c},
CG(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cd
if(r===B.I){r=a.f
r.toString
r=!B.b.F(r,b)}else r=!1
if(r)return B.cj
return s
case 1:case 4:return!A.ac(b)?B.ce:s
case 2:return typeof b!="number"?B.cf:s
case 3:return!A.bw(b)?B.cg:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.ch:s
case 7:return!t.j.b(b)?B.ci:s}},
dn(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gd7(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.Cv(n,a0.h(0,l),new Uint8Array(A.b7(B.e.v(q+l+"\x00"+e))),m))}k=A.t(h,g)
for(h=new A.aM(a0,A.n(a0).i("aM<1,2>")).gu(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.F(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.aj(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
FP(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.Cv(b,c,new Uint8Array(A.b7(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
Ln(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gd7()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.Cv(n,g.h(0,l),new Uint8Array(A.b7(B.e.v(q+l+"\x00"+f))),m))}k=A.t(t.N,t.X)
for(s=g.gac(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.F(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.aj(k))
a.push(c?1:0)
a.push(0)},
ce(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.m(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.a6(b.h(0,"id"))
f.j(0,n,A.F7(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.v(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.av(k,null)
if(t.f.b(j))f.C(0,A.b9(j,h,g))}return f},
M_(a,b,c,d){var s,r=A.k([],t.d)
for(s=J.D(b);s.k();)r.push(A.ce(a,s.gn(),c,d))
return r},
M0(a,b,c,d,e){var s,r,q,p,o,n,m=A.k([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.q)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a4(p,a.f6(p)))}s=A.k([],t.d)
for(o=J.D(b),n=a.a;o.k();)s.push(A.Kl(o.gn(),m,r,c,e,n))
return s},
Kl(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.F7(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.v(a.h(0,m),1))
return l},
F7(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.x('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.jo("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.bO(b).l(0)+"."))
r=B.l.eY(s.uk(B.ar.v(b),new Uint8Array(A.b7(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.R===q||B.T===q){p=A.aG(r)
break A}if(B.S===q){p=A.M3(r)
break A}if(B.U===q||B.V===q){p=B.h.av(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.v(b,1)
if(p===B.U||p===B.V){if(typeof b!="string")throw A.b(A.jo("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bO(b).l(0)+"."))
return B.h.av(b,o)}return b},
Cv(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.x('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.v(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.a_(b)
break
case 6:case 7:s=A.aj(b)
break
default:A.F(b)
s=b}r=d.v_(B.e.v(s),c)
return B.aq.gf2().v(r)}switch(a.b.a){case 3:return J.v(b,!0)?1:0
case 6:case 7:return A.aj(b)
default:return b}},
be(a,b){var s,r,q,p,o,n="archived",m=a.gd7(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.q)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.v(o,!0):o)}for(l=b.gac(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.F(0,p))continue
k.j(0,p,s.b)}if(J.v(b.h(0,n),!0))k.j(0,n,!0)
return k},
AC(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gd7(),i=A.k([],t.iE)
i.push(new A.a4("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a4(o,p.b===B.B?J.v(n,!0):n))}for(s=c.gac(),s=s.gu(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.F(0,o))continue
i.push(new A.a4(o,r.b))}if(J.v(c.h(0,"archived"),!0))i.push(B.d7)
B.b.ci(i,new A.AD())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.q)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a7(r.a,null)
a.a+=k
o=A.CO(k)
a.a+=":"
m=m+o+1+A.cg(a,r.b)}a.a+="}"
return m+1},
d1:function d1(a,b){this.a=a
this.b=b},
AD:function AD(){},
Dn(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
l8:function l8(a,b){this.a=a
this.b=b},
ip:function ip(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
rf:function rf(){},
re:function re(){},
rg:function rg(){},
rd:function rd(a){this.a=a},
Hz(a){return'"'+A.z(a,'"','""')+'"'},
Hy(a,b){var s,r,q,p=a.a,o=J.M(p),n=b.a,m=J.M(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.v(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
q3:function q3(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
io:function io(a){this.a=a},
rc:function rc(a){this.a=a},
rb:function rb(){},
ra:function ra(a){this.a=a},
r9:function r9(a,b){this.a=a
this.b=b},
r6:function r6(a){this.a=a},
r7:function r7(a){this.a=a},
r8:function r8(){},
ay(a,b){return new A.eJ(b,a)},
jo(a){return new A.cO(a)},
C1(a){return new A.fW(a)},
E0(a){return new A.h_(a)},
aP(a){return new A.eD(a)},
rA(a){return new A.fA(a)},
C6(a){return new A.h5(a)},
DL(a){return new A.fG(a)},
Dj(a){return new A.fj(a)},
BA(a){return new A.ek(a)},
Ge(a,b){var s,r="UNIQUE constraint failed",q=J.a_(a),p=a instanceof A.c7,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.F(q,"PRIMARY KEY")&&!B.a.F(q,r)
else p=!0
if(p)return new A.fO("PRIMARY KEY constraint violated.")
if(o===2067||B.a.F(q,r)){s=A.Fb(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.eI(s,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.F(q,"NOT NULL constraint failed")){p=A.Fb(q,"NOT NULL constraint failed:")
return new A.ey(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.F(q,"CHECK constraint failed")||o===275||n===275)return new A.ff("CHECK constraint violated.")
if(B.a.F(q,"FOREIGN KEY")||o===787||n===787)return new A.fy("FOREIGN KEY constraint violated.")
if(B.a.F(q,"database or disk is full"))return new A.cO("Database full: "+A.r(a))
return new A.cO("SQLite error: "+A.r(a))},
Fb(a,b){var s,r,q,p,o,n,m=B.a.bN(a,b)
if(m<0)return"?"
s=B.a.af(a,m+b.length)
r=s.length
q=B.a.bN(s,",")
if(q>=0)r=q
p=B.a.bN(s,"(")
s=B.a.cf(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.df(s,".")
s=B.a.cf(o>=0?B.a.af(s,o+1):s)
if(B.a.S(s,'"')&&B.a.c5(s,'"')){n=B.a.A(s,1,s.length-1)
s=A.z(n,'""','"')}return s.length===0?"?":s},
dH:function dH(){},
eJ:function eJ(a,b){this.b=a
this.a=b},
eI:function eI(a,b){this.b=a
this.a=b},
ey:function ey(a,b){this.b=a
this.a=b},
ff:function ff(a){this.a=a},
fO:function fO(a){this.a=a},
fy:function fy(a){this.a=a},
cO:function cO(a){this.a=a},
fW:function fW(a){this.a=a},
h_:function h_(a){this.a=a},
eD:function eD(a){this.a=a},
hh:function hh(a){this.a=a},
fA:function fA(a){this.a=a},
h5:function h5(a){this.a=a},
fG:function fG(a){this.a=a},
fj:function fj(a){this.a=a},
ek:function ek(a){this.a=a},
fV:function fV(a){this.a=a},
MA(a,b,c){a.uc(!0,new A.Bh(c),"lp_norm_"+b)},
FU(a,b,c,d){var s,r,q='""',p=b.a
if(p.gE(p))return c+"."+('"'+A.z(d,'"',q)+'"')
s='"'+A.z(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.z(c,'"',q)+'".'+s
return'"'+A.z("lp_norm_"+a,'"',q)+'"('+r+")"},
Bh:function Bh(a){this.a=a},
Kp(){return Date.now()},
oT(a){var s,r,q
if(t.G.b(a)){s=A.t(t.N,t.X)
for(r=a.gac(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.oT(q.b))}return s}if(t.f.b(a)){s=A.t(t.z,t.X)
for(r=a.gac(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.oT(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.D(a);r.k();)s.push(A.oT(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b7(a))
return a},
d0(a,b,c,d,e,f,g,h){var s=null,r=B.D,q=null,p=null
return A.I1(a,b,c,d,e,f,g,h)},
I1(b0,b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d0=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a3=null
a4=B.D
a5=null
a6=null
a7=null
a7=b1
p=4
s=7
return A.a(A.cI(a7,b6),$async$d0)
case 7:s=8
return A.a(A.eG(a7,b6),$async$d0)
case 8:n=b9
i=0
case 9:if(!(i<3)){s=11
break}m=B.cs[i]
s=12
return A.a(a7.O(m),$async$d0)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cJ[i]
s=16
return A.a(a7.O(l),$async$d0)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a5
if(f==null)f=A.Mo()
e=a6
d=a4
c=t.N
b=t.ls
a=new A.mA()
a0=new A.m6(b5,h,g,a,b4,b2,e,b0,b3,a3,f,A.t(c,t.nv),new A.x7(A.t(c,b),A.t(b,t.nL)),d,new A.pF(A.dP(null,null,t.iv),A.dP(null,null,t.oZ)))
b=new A.xI(A.bj(null,t.H),a.gwv())
a0.x=b
d=a0.a=new A.u4(a0,h,g,b,a,e,d)
a0.b=new A.wX(d)
a0.c=new A.uM()
a0.d=new A.wa()
d=A.I_(d)
a0.e!==$&&A.cf()
a0.e=d
d=$.Bq()
a0.CW!==$&&A.cf()
a0.CW=new A.uY(a0,d)
a0.cx!==$&&A.cf()
a0.cx=new A.uT(a0,d)
a0.cy!==$&&A.cf()
a0.cy=new A.qg(a0)
a0.db!==$&&A.cf()
a0.db=new A.uf(a0,b0)
k=a0
s=17
return A.a(A.m7(a7,k.ch),$async$d0)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
s=21
return A.a(k.aP(j),$async$d0)
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
return A.a(a7.q(),$async$d0)
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
return A.f($async$d0,r)},
cI(a,b){return A.I0(a,b)},
I0(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cI=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.ba?2:3
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
m7(a,b){var s=0,r=A.h(t.H),q,p
var $async$m7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ce("lp_migrations","version = ?",[1]),$async$m7)
case 3:if(p.e9(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$m7)
case 4:case 1:return A.e(q,r)}})
return A.f($async$m7,r)},
I_(a){var s=A.dP(null,null,t.fq),r=t.N
s=new A.tj(a,s,A.t(r,t.g8),A.t(r,t.dz),new A.rs(A.Mp(),A.t(r,t.f6)),A.t(r,t.mS))
s.oy(a)
return s},
Ba(a){var s,r,q,p
A:{if(a instanceof A.iK){s=A.L0(a.a)
break A}if(a instanceof A.j4){s=new A.c4(A.Ba(a.a))
break A}if(a instanceof A.i8){r=a.a
s=A.k([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.Ba(r[p]))
s=new A.ds(s)
break A}if(a instanceof A.i9){r=a.a
s=A.k([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.Ba(r[p]))
s=new A.cZ(s)
break A}throw A.b(A.fU(u.P))}return s},
L0(a){var s,r,q,p="isNull",o=a.a
switch(a.b.a){case 0:s=a.c
if(s==null)return new A.a9(o,p,B.k)
return new A.a9(o,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.P("neq(null) matches no rows; use isNotNull.",null))
return new A.c4(new A.a9(o,"eq",[s]))
case 2:return new A.a9(o,"gt",[a.c])
case 3:return new A.a9(o,"gte",[a.c])
case 4:return new A.a9(o,"lt",[a.c])
case 5:return new A.a9(o,"lte",[a.c])
case 6:r=a.d
return new A.a9(o,"inValues",r==null?B.k:r)
case 7:q=a.d
if(q==null)q=B.k
if(q.length!==2)throw A.b(A.P("between requires exactly two values.",null))
return new A.a9(o,"between",q)
case 8:return new A.a9(o,"startsWith",[a.c])
case 9:return new A.a9(o,"endsWith",[a.c])
case 10:return new A.a9(o,"contains",[a.c])
case 11:return new A.a9(o,p,B.k)
case 12:return new A.c4(new A.a9(o,p,B.k))}},
Lj(){return new A.aR(Date.now(),0,!1)},
u4:function u4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=f
_.as=g},
ls:function ls(a,b){this.a=a
this.b=b},
na:function na(a,b,c){this.a=a
this.c=b
this.e=c},
vp:function vp(a){this.a=a},
m6:function m6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.db=_.cy=_.cx=_.CW=$
_.dx=l
_.dy=!1
_.fr=m
_.fy=n
_.a$=o},
u5:function u5(a,b){this.a=a
this.b=b},
u8:function u8(a){this.a=a},
u7:function u7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
u6:function u6(){},
nY:function nY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
yq:function yq(a,b){this.a=a
this.b=b},
yp:function yp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yn:function yn(a,b){this.a=a
this.b=b},
yo:function yo(a,b){this.a=a
this.b=b},
ym:function ym(a){this.a=a},
hr:function hr(a,b){this.a=a
this.b=b},
wa:function wa(){},
wX:function wX(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
x3:function x3(a){this.a=a},
x_:function x_(a){this.a=a},
x2:function x2(a,b,c){this.a=a
this.b=b
this.c=c},
x1:function x1(a,b,c){this.a=a
this.b=b
this.c=c},
x0:function x0(a,b,c){this.a=a
this.b=b
this.c=c},
wZ:function wZ(a){this.a=a},
wY:function wY(){},
eY:function eY(){},
oG:function oG(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=!1
_.r=null
_.w=$},
hG:function hG(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
tj:function tj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=e
_.r=null
_.w=f
_.x=0},
tD:function tD(a){this.a=a},
tE:function tE(){},
tF:function tF(a,b){this.a=a
this.b=b},
tG:function tG(){},
tR:function tR(a,b){this.a=a
this.b=b},
tY:function tY(){},
tZ:function tZ(a,b){this.a=a
this.b=b},
u_:function u_(a,b){this.a=a
this.b=b},
u0:function u0(a,b){this.a=a
this.b=b},
u1:function u1(a,b){this.a=a
this.b=b},
u2:function u2(a,b){this.a=a
this.b=b},
u3:function u3(a,b){this.a=a
this.b=b},
tH:function tH(){},
tI:function tI(){},
tJ:function tJ(){},
tK:function tK(){},
tL:function tL(){},
tM:function tM(){},
tN:function tN(a){this.a=a},
tO:function tO(a){this.a=a},
tP:function tP(){},
tQ:function tQ(){},
tS:function tS(){},
tT:function tT(a){this.a=a},
tU:function tU(){},
tV:function tV(){},
tW:function tW(){},
tX:function tX(){},
tr:function tr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ts:function ts(){},
tt:function tt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tu:function tu(){},
tx:function tx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ty:function ty(){},
tl:function tl(a){this.a=a},
tk:function tk(a){this.a=a},
tw:function tw(a){this.a=a},
tv:function tv(a){this.a=a},
tA:function tA(a,b){this.a=a
this.b=b},
tB:function tB(a,b,c){this.a=a
this.b=b
this.c=c},
tC:function tC(a,b){this.a=a
this.b=b},
tm:function tm(a){this.a=a},
tn:function tn(a){this.a=a},
to:function to(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tq:function tq(a,b){this.a=a
this.b=b},
tp:function tp(a,b){this.a=a
this.b=b},
tz:function tz(a,b){this.a=a
this.b=b},
cF:function cF(a,b,c,d,e,f,g,h,i,j){var _=this
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
rs:function rs(a,b){this.f=a
this.r=b},
rv:function rv(){},
rt:function rt(a){this.a=a},
ru:function ru(){},
o7:function o7(){this.b=0
this.c=$},
og:function og(){},
fE(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a0(h).i("ak<1>")
f=A.O(new A.ak(h,new A.uG(c,b),g),g.i("o.E"))
B.b.ci(f,new A.uH())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.ch,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aP('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jn()
$.kz()
j.az()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aO(a,b,m),$async$fE)
case 8:s=6
break
case 7:s=9
return A.a(A.mg(a,b,m),$async$fE)
case 9:case 6:if(j.b==null)j.b=$.mE.$0()
s=10
return A.a(A.fF(i,j.gmD(),o,q+l,p,l),$async$fE)
case 10:case 3:f.length===h||(0,A.q)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aP('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fE)
case 11:return A.e(null,r)}})
return A.f($async$fE,r)},
fF(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fF=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b1("SELECT MAX(version) AS m FROM lp_migrations"),$async$fF)
case 2:q=p.f5(h)
if(q==null)q=0
s=3
return A.a(a.aC(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fF)
case 3:return A.e(null,r)}})
return A.f($async$fF,r)},
mg(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$mg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b1("PRAGMA table_info("+('"'+A.z(k,'"','""')+'"')+")"),$async$mg)
case 2:i=h.d2(new g.bI(f.bB(e,new A.uD(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.CR()
if(!m.b.test(n))A.w(A.aP('Field "'+n+u.Z))
if(o.c)throw A.b(A.aP('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.F(0,n)){s=4
break}m=A.z(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.z(n,'"','""')+'"')+" "+o.gkM()),$async$mg)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.q)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$mg,r)},
aO(a,b,c){return A.Ic(a,b,c)},
Ic(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aO=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.BA('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.io(b0.w).jJ(b1)
j=A.If(b0.f,a2,a3)
p=4
s=7
return A.a(A.uE(a7,l),$async$aO)
case 7:i=b4
s=8
return A.a(b0.hD(j),$async$aO)
case 8:h=b4
if(J.v(i,"done")&&h){a3=A.BA('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.mi(a7,m),$async$aO)
case 9:g=b4
s=10
return A.a(A.mi(a7,n),$async$aO)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b1("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aO)
case 13:a0=a9.f5(b4)
e=a0==null?0:a0
a3=A.z(m,'"','""')
s=14
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aO)
case 14:s=15
return A.a(A.d4(b0,a7,b1,k,l,e),$async$aO)
case 15:s=1
break
case 12:s=16
return A.a(a7.O("DROP TABLE IF EXISTS "+('"'+A.z(m,'"','""')+'"')),$async$aO)
case 16:s=h?17:18
break
case 17:s=19
return A.a(b0.hL(j),$async$aO)
case 19:case 18:s=20
return A.a(A.mh(a7,l,"rebuilding"),$async$aO)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.z(j,"'","''")+"'"),$async$aO)
case 21:a3=k.b
a4=A.z(n,'"','""')
d=B.a.kr(a3,'"'+a4+'"','"'+A.z(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aO)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ai("SELECT rowid, * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aO)
case 25:b=b4
if(J.bA(b)){s=24
break}s=26
return A.a(a7.a2(new A.uF(b,b1,b0,b2,m),a3),$async$aO)
case 26:a4=J.S(J.pc(b),"rowid")
a4.toString
c=A.ao(a4)
if(J.ap(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b1("SELECT COUNT(*) c FROM "+('"'+A.z(n,'"','""')+'"')),$async$aO)
case 27:a5=a9.f5(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b1("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aO)
case 28:e=a9.f5(b4)
a0=e==null?0:e
if(!J.v(a,a0)){a3=A.x('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
throw A.b(a3)}s=29
return A.a(a7.O("DROP TABLE "+('"'+A.z(n,'"','""')+'"')),$async$aO)
case 29:a3=A.z(m,'"','""')
s=30
return A.a(a7.O("ALTER TABLE "+('"'+a3+'"')+" RENAME TO "+('"'+A.z(n,'"','""')+'"')),$async$aO)
case 30:s=31
return A.a(A.d4(b0,a7,b1,k,l,a),$async$aO)
case 31:p=2
s=6
break
case 4:p=3
a8=o.pop()
a3=A.E(a8)
if(a3 instanceof A.ek)throw a8
else if(a3 instanceof A.c7){a1=a3
throw A.b(A.BA('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aO,r)},
d4(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p,o,n,m,l
var $async$d4=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=d.c,p=q.length,o=0
case 2:if(!(o<q.length)){s=4
break}s=5
return A.a(b.O(q[o]),$async$d4)
case 5:case 3:q.length===p||(0,A.q)(q),++o
s=2
break
case 4:q=c.w!=null
s=q?6:7
break
case 6:s=8
return A.a(b.O("DROP TABLE IF EXISTS "+('"'+A.z(c.a+"_fts",'"','""')+'"')),$async$d4)
case 8:case 7:p=d.d,n=p.length,o=0
case 9:if(!(o<p.length)){s=11
break}s=12
return A.a(b.O(p[o]),$async$d4)
case 12:case 10:p.length===n||(0,A.q)(p),++o
s=9
break
case 11:s=q?13:14
break
case 13:q=c.a+"_fts"
p=A.z(q,'"','""')
s=15
return A.a(b.O("INSERT INTO "+('"'+p+'"')+"("+('"'+A.z(q,'"','""')+'"')+") VALUES('rebuild')"),$async$d4)
case 15:case 14:q=c.a
l=A
s=16
return A.a(b.b1("SELECT COUNT(*) c FROM "+('"'+A.z(q,'"','""')+'"')),$async$d4)
case 16:m=l.f5(h)
if((m==null?0:m)!==f)throw A.b(A.x('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.mh(b,e,"done"),$async$d4)
case 17:return A.e(null,r)}})
return A.f($async$d4,r)},
mi(a,b){var s=0,r=A.h(t.y),q,p
var $async$mi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ai("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$mi)
case 3:q=p.e9(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mi,r)},
If(a,b,c){var s=null,r=$.i6(),q=r.ur(a),p=A.dN(a,r.a).gjG()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.mT(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
Ie(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.ay('Field "'+s+'" is required.',s))}if(b==null)return
r=A.CG(a,b)
if(r!=null)throw A.b(A.ay(A.Ib(a,b,r),a.a))},
Id(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
A.Ie(p,b.h(0,p.a))}},
Ib(a,b,c){var s,r=a.a,q=J.bO(b)
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
uE(a,b){var s=0,r=A.h(t.x),q,p,o
var $async$uE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.n2("lp_meta",A.k(["v"],t.s),"k = ?",[b]),$async$uE)
case 3:p=d
o=J.M(p)
q=o.gE(p)?null:A.a6(J.S(o.gG(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$uE,r)},
mh(a,b,c){var s=0,r=A.h(t.H)
var $async$mh=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.c9(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.Q),$async$mh)
case 2:return A.e(null,r)}})
return A.f($async$mh,r)},
Kq(){return Date.now()},
uG:function uG(a,b){this.a=a
this.b=b},
uH:function uH(){},
uD:function uD(){},
uF:function uF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mA:function mA(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
ks(a){var s=A.z(a,"\\","\\\\")
s=A.z(s,"%","\\%")
return A.z(s,"_","\\_")},
Cu(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.a9){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.w(A.aH(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aH(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aH(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.aH(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c4){A.Cu(a.a)
break A}p=a instanceof A.ds
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aH(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.q)(n),++m)A.Cu(n[m])}break A}},
Al(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.a9)return A.F5(a,!1,b)
if(a instanceof A.c4){s=a.a
r=A.Al(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.cZ||s instanceof A.c4){s=new A.a4("NOT "+q,p)
break A}s=new A.a4("NOT ("+q+")",p)
break A}return s}if(a instanceof A.ds){o=A.k([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){l=A.Al(s[m],!1)
o.push(l.a)
B.b.C(p,l.b)}k=B.b.B(o," AND ")
return new A.a4(b?k:"("+k+")",p)}if(a instanceof A.cZ){o=A.k([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){j=A.Kj(s[m])
o.push(j.a)
B.b.C(p,j.b)}return new A.a4("("+B.b.B(o," OR ")+")",p)}throw A.b(A.fU(u.M))},
Kj(a){var s
A:{if(a instanceof A.a9){s=A.F5(a,!0,!1)
break A}s=A.Al(a,!1)
break A}return s},
F5(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.z(a.a,'"','""')+'"',n=A.O(a.c,t.X),m=a.b
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
case"inValues":s=o+" IN ("+B.b.B(A.af(n.length,"?",!1,t.N),", ")+")"
break
case"between":s=o+" >= ? AND "+o+" <= ?"
break
case"isNull":s=o+" IS NULL"
break
case"startsWith":s=o+p
r=n[0]
r.toString
n[0]=A.ks(A.F(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.ks(A.F(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.ks(A.F(r))+"%"
break
default:throw A.b(A.aH(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a4(q?"("+s+")":s,n)},
d6:function d6(){},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a){this.a=a},
ds:function ds(a){this.a=a},
cZ:function cZ(a){this.a=a},
Ix(a,b){var s,r=$.fS.H(0,a)
if(r!=null){$.fS.j(0,a,r)
return r}s=b.$0()
if($.fS.a>=512)$.fS.H(0,new A.T($.fS,A.n($.fS).i("T<1>")).gG(0))
$.fS.j(0,a,s)
return s},
b_:function b_(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
yy:function yy(a){this.a=a},
mI:function mI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
vZ:function vZ(a,b,c){this.a=a
this.b=b
this.c=c},
vU:function vU(){},
vV:function vV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vW:function vW(a){this.a=a},
vX:function vX(){},
vY:function vY(){},
II(a){var s,r,q=B.a.cf(a)
if(q.length===0)return
s=!0
if(!B.a.F(q,'"')){r=A.ag("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.ag("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.ay("Invalid search term: "+a,null))},
IH(a){var s,r,q,p
for(s=B.a.cO(a,A.ag("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
if(p.length!==0&&new A.je(p).gm(0)<3)throw A.b(A.ay('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cN:function cN(a,b){this.a=a
this.b=b},
wh:function wh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
ko(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.dH)throw q
else{s=r
r=A.jo("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
Dq(a){return A.ko(new A.rj(a))},
HT(a){return A.ko(new A.t6(a))},
HL(a){return A.ko(new A.rz(a))},
Dv(a,b){var s
if(new A.je(a).gm(0)!==1)throw A.b(A.aP('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aP('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
HK(a){return A.ko(new A.ry(a))},
HJ(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.gac(),s=s.gu(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
IS(a){return A.ko(new A.wx(a))},
pL(a,b){return A.ko(new A.pM(a,b))},
Lo(a,b,c,d){var s
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
rj:function rj(a){this.a=a},
iB:function iB(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
t6:function t6(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
rz:function rz(a){this.a=a},
eo:function eo(a){this.a=a},
ry:function ry(a){this.a=a},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
wx:function wx(a){this.a=a},
uI:function uI(a,b){this.a=a
this.b=b},
qe:function qe(){},
c1:function c1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f
_.w=g
_.x=h
_.$ti=i},
pM:function pM(a,b){this.a=a
this.b=b},
C3(a){var s=A.Kk(a),r=A.k([],t.s)
if(B.Y.gV(B.Y))r.push("fieldResolvers")
if(B.b.bL(a.x,new A.wd()))r.push("migrationTransform")
if(B.am.gV(B.am))r.push("documentMigrations")
return new A.mW(s,A.dG(r,t.N),1,a.a,a.b,2)},
IG(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aP("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aU(0,new A.we(),s,r)
p=q.h(0,"formatVersion")
if(!A.ac(p))throw A.b(A.aP("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.E0("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.ac(n)||!j.b(m)||!t.j.b(l)||!A.ac(k))throw A.b(A.aP('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.mW(m.aU(0,new A.wf(),s,t.X),A.dG(J.bB(l,new A.wg(),r),s),p,o,n,k)},
Kk(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cJ(a.p(),n,m),k=B.Y.gK()
k=A.O(k,A.n(k).i("o.E"))
B.b.aE(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.k([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].p()
o=A.dF(null,null,n,m)
o.C(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.am.gK()
n=A.O(n,A.n(n).i("o.E"))
B.b.aE(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
mW:function mW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wd:function wd(){},
we:function we(){},
wf:function wf(){},
wg:function wg(){},
Hm(a,b){var s,r=a.a
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
uM:function uM(){},
dL:function dL(a,b){this.a=a
this.b=b},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q_:function q_(a,b){this.a=a
this.b=b},
q2:function q2(a,b){this.a=a
this.b=b},
pZ:function pZ(a,b){this.a=a
this.b=b},
q1:function q1(a,b){this.a=a
this.b=b},
pX:function pX(a,b,c){this.a=a
this.b=b
this.c=c},
pW:function pW(a,b){this.a=a
this.b=b},
pV:function pV(a,b){this.a=a
this.b=b},
q0:function q0(a,b){this.a=a
this.b=b},
pY:function pY(a,b){this.a=a
this.b=b},
pQ:function pQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pP:function pP(){},
pU:function pU(){},
pT:function pT(){},
pS:function pS(){},
pR:function pR(){},
pN:function pN(){},
pO:function pO(){},
ho:function ho(){},
nX:function nX(){},
Cc(a,b,c,d,e){var s=e==null?A.k([],t.eb):e
return new A.bH(a,b,c,s,d,new A.zA())},
np(a){var s=$.C.h(0,$.kB())
if(s instanceof A.bH&&s.a===a)return s
return null},
bH:function bH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
x4:function x4(a,b,c){this.a=a
this.b=b
this.c=c},
zA:function zA(){this.a=0
this.b=null},
LN(a,b,c){var s,r,q,p,o=A.k([],t.s)
for(s=J.D(a);s.k();){r=new A.a2("")
A.cg(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aE(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.as(B.m.v(B.e.v(p)).a)},
mL:function mL(a,b,c){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.d=_.c=null
_.f=_.e=!1
_.r=null},
w6:function w6(){},
w5:function w5(a){this.a=a},
w7:function w7(a){this.a=a},
mt:function mt(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
uS:function uS(a){this.a=a},
fg:function fg(){},
xI:function xI(a,b){this.a=a
this.b=0
this.c=b},
xJ:function xJ(a,b,c){this.a=a
this.b=b
this.c=c},
kZ(a){var s=$.CQ()
if(!s.b.test(a))throw A.b(A.P('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
Da(a){return new A.fd(a)},
Db(a,b){return new A.kY(a,b)},
kv(a,b,c,d,e){return A.Mz(a,b,c,d,e)},
Mz(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$kv=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.k([],h)
f=new A.hp(A.cX(new A.oz(new A.Bb(g),A.k([],h),t.mI)))
e=0
h=new A.cx(A.cy(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$kv)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.u)){j=new A.u($.C,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$kv)
case 9:f.a.t(0,m)
e+=J.ap(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.D(),$async$kv)
case 10:s=n.pop()
break
case 5:f.a.q()
if(c!=null&&!J.v(e,c))throw A.b(A.x("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.as(B.b.gap(g).a)
A.kZ(i)
if(b!=null&&i!==b)throw A.b(A.x("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.nb(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$kv,r)},
pt:function pt(){},
fd:function fd(a){this.a=a},
kY:function kY(a,b){this.a=a
this.b=b},
nb:function nb(a){this.a=a},
Bb:function Bb(a){this.a=a},
iu:function iu(a){this.d=a},
rl:function rl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rn:function rn(a,b){this.a=a
this.b=b},
ro:function ro(a,b,c){this.a=a
this.b=b
this.c=c},
rm:function rm(a,b,c){this.a=a
this.b=b
this.c=c},
rp:function rp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rq:function rq(){},
Dr(a){return A.p3("lp_file_refs",new A.rk(a))},
bh:function bh(a,b,c,d,e,f,g,h,i,j){var _=this
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
rk:function rk(a){this.a=a},
uf:function uf(a,b){this.a=a
this.b=b},
ug:function ug(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ui:function ui(a){this.a=a},
uj:function uj(a){this.a=a},
uk:function uk(a){this.a=a},
ul:function ul(a){this.a=a},
um:function um(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uh:function uh(a,b){this.a=a
this.b=b},
Ef(a){var s
if(t.m.b(a))s=J.v(a.name,"NotFoundError")||J.v(a.name,"TypeMismatchError")
else s=!1
return s},
xr:function xr(a){this.b=a
this.d=null},
xs:function xs(a){this.a=a},
ol:function ol(a){this.a=a},
E7(a){var s=Date.now()
return new A.ni(a,new A.aR(s,0,!1))},
ni:function ni(a,b){this.a=a
this.c=b},
pq:function pq(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
mx:function mx(){},
v4:function v4(a,b){this.a=a
this.b=b},
v5:function v5(){},
vo:function vo(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.CW=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.y=_.x=$
_.z=null
_.at=_.as=_.Q=!1
_.ax=j
_.ay=k
_.ch=l},
v8:function v8(a,b,c){this.a=a
this.b=b
this.c=c},
vf:function vf(a){this.a=a},
vb:function vb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vc:function vc(){},
vd:function vd(a,b){this.a=a
this.b=b},
ve:function ve(){},
v9:function v9(a,b){this.a=a
this.b=b},
va:function va(){},
Im(a,b,c,d,e){var s=A.bj(null,t.H)
return new A.vg(b,c,new A.vn(a,B.av,null),e,d,s)},
In(a){return 0.5+B.as.mX()},
j8:function j8(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
vg:function vg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0},
vn:function vn(a,b,c){this.a=a
this.b=b
this.c=c},
vj:function vj(){},
vk:function vk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vh:function vh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vi:function vi(){},
vl:function vl(a){this.a=a},
vm:function vm(a){this.a=a},
zH:function zH(a,b){this.a=a
this.b=null
this.c=b},
iz(a,b){return new A.dz(a)},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lT:function lT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
dz:function dz(a){this.a=a},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
v6:function v6(a){this.a=a},
v7:function v7(a){this.a=a},
pf:function pf(a){this.a=a},
pg:function pg(a,b){this.a=a
this.b=b},
ph:function ph(a){this.a=a},
pi:function pi(){},
By(a){return A.p3("lp_conflicts",new A.qf(a))},
bf:function bf(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qf:function qf(a){this.a=a},
qg:function qg(a){this.a=a},
ql:function ql(a,b,c){this.a=a
this.b=b
this.c=c},
qk:function qk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qi:function qi(a,b){this.a=a
this.b=b},
qj:function qj(a,b){this.a=a
this.b=b},
qh:function qh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nf:function nf(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
wT:function wT(a){this.a=a},
wL:function wL(a){this.a=a},
wR:function wR(a,b){this.a=a
this.b=b},
wQ:function wQ(a){this.a=a},
wP:function wP(a,b){this.a=a
this.b=b},
wS:function wS(a){this.a=a},
wM:function wM(a,b){this.a=a
this.b=b},
wN:function wN(){},
wO:function wO(){},
eu(a){return new A.d3(a)},
CN(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.f7(a,b)
r=A.be(a,s)
q=A.aj(r)
p=A.as(B.m.v(B.e.v(q)).a)
return new A.ex(b,s,q,p,k)}catch(m){l=A.E(m)
if(l instanceof A.d3){o=l
return new A.ex(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.ex(b,k,k,k,l)}}},
Mu(a,b){var s,r=A.k([],t.i7)
for(s=J.D(b);s.k();)r.push(A.CN(a,s.gn()))
return r},
CM(a,b){var s=0,r=A.h(t.eT),q
var $async$CM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.Mu(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$CM,r)},
f7(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.b9(b.d,j,i),g=a.gd7(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.v(f,s))throw A.b(A.eu('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bw(r))throw A.b(A.eu('Field "archived" must be a boolean, got '+J.bO(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.q)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.eu('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.CG(o,n)
if(m!=null)throw A.b(A.eu(A.L5(o,n,m)))
q.j(0,s,n)}for(j=new A.aM(h,A.n(h).i("aM<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.F(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.v(r,!0))
return q},
L5(a,b,c){var s,r=a.a,q=J.bO(b)
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
i2(a){var s,r,q,p
if(a==null||a.length===0)return B.o
s=null
try{s=B.h.av(a,null)}catch(q){r=A.E(q)
p=A.eu("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.eu("Corrupt payload JSON: expected an object, got "+J.bO(s).l(0)+"."))
return A.b9(s,t.N,t.X)},
d3:function d3(a){this.a=a},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bK(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aN(i),g=A.d2(a.gK(),i)
g.C(0,b.gK())
for(g=A.hB(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.t.Y(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.kD(o.gK(),new A.AG())&&J.kD(n.gK(),new A.AH())){m=A.bK(A.b9(o,i,q),A.b9(n,i,q))
for(l=A.n(m),k=new A.e_(m,m.r,l.i("e_<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
I9(a,b,c,d,e,f,g){return new A.uv()},
L_(a,b){var s,r,q=a.b
if(q.gE(q))return null
for(s=b;;){q.h(0,s)
r=B.a.df(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
BT(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$BT=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.Ia(B.bS,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$BT,r)},
Ia(a,b,c,d,e,f,g){var s,r,q,p=A.bK(b,c),o=A.bK(b,f)
A.I9(b,p,o,c,e,f,g)
s=t.N
r=A.d2(c.gK(),s)
r.C(0,new A.T(f,A.n(f).i("T<1>")))
r.C(0,b.gK())
q=A.O(r,A.n(r).c)
return A.uB(a,b,p,o,0,q,c,A.t(s,t.X),d,e,f,new A.zv(),g)},
uB(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.dJ(h,a0.a,null)
s=f[e]
r=g.h(0,s)
q=k.h(0,s)
p=b.h(0,s)
if(s==="archived"){o=J.v(p,!0)
n=J.v(r,!0)
m=J.v(q,!0)
if(n===m)h.j(0,s,n)
else if(n===o)h.j(0,s,m)
else if(m===o)h.j(0,s,n)
else{i.b.h(0,s)
h.j(0,s,m)}return A.uB(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.DK(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.u)return l.W(new A.uC(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.uB(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
DK(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.t.Y(a1,a4))return a1
if(B.t.Y(a1,a0))return a4
if(B.t.Y(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kD(a1.gK(),new A.uw()))if(J.kD(a4.gK(),new A.ux()))if(a0!=null)r=s.b(a0)&&J.kD(a0.gK(),new A.uy())
else r=!0
if(r){r=t.N
q=t.X
p=A.b9(a1,r,q)
o=A.b9(a4,r,q)
n=a0==null?null:A.b9(s.a(a0),r,q)
s=A.aN(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.C(0,l)
s.C(0,new A.T(p,A.n(p).i("T<1>")))
s.C(0,new A.T(o,A.n(o).i("T<1>")))
k=A.t(r,q)
j=[]
for(r=s.$ti.c,l=A.hB(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.DK(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.u)g=!0
j.push(d)}if(!g){for(s=A.hB(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.BH(new A.X(j,new A.uz(),A.a0(j).i("X<1,A<j?>>")),q).W(new A.uA(s,k),q)}A.L_(a3,a2)
return a4},
FZ(a,b,c,d,e,f){return A.BT(a,b,c,d,e,f)},
AG:function AG(){},
AH:function AH(){},
uv:function uv(){},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
zv:function zv(){this.a=!1},
zt:function zt(){},
xN:function xN(){},
uC:function uC(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
uw:function uw(){},
ux:function ux(){},
uy:function uy(){},
uz:function uz(){},
uA:function uA(a,b){this.a=a
this.b=b},
uT:function uT(a,b){this.a=a
this.b=b},
uV:function uV(a){this.a=a},
uW:function uW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ps:function ps(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(){},
jd:function jd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uY:function uY(a,b){this.a=a
this.b=b},
v3:function v3(a,b){this.a=a
this.b=b},
v1:function v1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
v0:function v0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
v_:function v_(a,b,c){this.a=a
this.b=b
this.c=c},
v2:function v2(a){this.a=a},
ea:function ea(a,b){this.a=a
this.b=b},
mH:function mH(a,b){this.b=a
this.f=b},
vD:function vD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vL:function vL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vK:function vK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vF:function vF(a,b,c){this.a=a
this.b=b
this.c=c},
vE:function vE(a,b,c){this.a=a
this.b=b
this.c=c},
vH:function vH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vG:function vG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vJ:function vJ(a,b,c){this.a=a
this.b=b
this.c=c},
vI:function vI(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vM:function vM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
vO:function vO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vT:function vT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vR:function vR(a,b,c){this.a=a
this.b=b
this.c=c},
vQ:function vQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vP:function vP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vN:function vN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vS:function vS(a,b,c,d,e,f,g,h,i,j){var _=this
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
bm:function bm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hb:function hb(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
ha:function ha(a,b){this.a=a
this.b=b},
wI:function wI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wJ:function wJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E8(a){return new A.he(a)},
Hb(a){return new A.c0(a)},
HI(a){return new A.cG(a)},
Ik(a){return new A.cK(a)},
bu(a){return new A.fP(a)},
M8(a){var s=a.wW(),r=new A.AV()
return A.r(r.$2(A.BZ(s),4))+"-"+A.r(r.$1(A.BX(s)))+"-"+A.r(r.$1(A.vu(s)))+" "+A.r(r.$1(A.BV(s)))+":"+A.r(r.$1(A.BW(s)))+":"+A.r(r.$1(A.BY(s)))+"."+A.r(r.$2(A.DT(s),3))+"Z"},
bv:function bv(){},
he:function he(a){this.a=a},
eE:function eE(a,b){this.b=a
this.a=b},
jj:function jj(a){this.a=a},
c0:function c0(a){this.a=a},
cG:function cG(a){this.a=a},
cK:function cK(a){this.a=a},
fN:function fN(a){this.a=a},
fP:function fP(a){this.a=a},
fp:function fp(a){this.a=a},
eb:function eb(a){this.a=a},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fR:function fR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jc:function jc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kP:function kP(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
AV:function AV(){},
IV(a){return 0.5+B.as.mX()},
C9(a){var s,r=a.toLowerCase()
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
IW(a){var s,r,q,p,o,n,m,l,k=null,j=A.ag("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).e8(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.C9(r)
if(q==null)return k
r=s[3]
r.toString
r=A.aG(r)
p=s[1]
p.toString
p=A.aG(p)
o=s[4]
o.toString
o=A.aG(o)
n=s[5]
n.toString
n=A.aG(n)
s=s[6]
s.toString
return A.Ca(r,q,p,o,n,A.aG(s))}j=A.ag("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).e8(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.C9(r)
if(q==null)return k
r=s[3]
r.toString
m=A.aG(r)
l=m>=70?1900+m:2000+m
r=s[1]
r.toString
r=A.aG(r)
p=s[4]
p.toString
p=A.aG(p)
o=s[5]
o.toString
o=A.aG(o)
s=s[6]
s.toString
return A.Ca(l,q,r,p,o,A.aG(s))}j=A.ag("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).e8(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.C9(r)
if(q==null)return k
r=s[6]
r.toString
r=A.aG(r)
p=s[2]
p.toString
p=A.aG(p)
o=s[3]
o.toString
o=A.aG(o)
n=s[4]
n.toString
n=A.aG(n)
s=s[5]
s.toString
return A.Ca(r,q,p,o,n,A.aG(s))}return k},
Ca(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.Bz(a,b,c,d,e,f,0)
return s}catch(r){return null}},
wK:function wK(a,b){this.at=a
this.ay=b},
jb:function jb(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
wV:function wV(a,b){this.a=a
this.b=b},
FH(a,b,c,d,e,f,g,h,i,j){var s,r=A.G0(a,b,c,null,d,e,f,g,h,i,j),q=A.t(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.X[s],r[s])
return q},
G0(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.FE(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
FE(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
LI(a,b,c,d,e,f,g){var s,r=null,q=A.Gc(B.a5,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.t(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.W[s],q[s])
return p},
Gc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.FF(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
FF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
G8(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
i3(a){return new A.X(a,new A.Bg(),A.a0(a).i("X<1,l>")).B(0,", ")},
jt(a){return A.p3("lp_sync_row",new A.wU(a))},
mw(a){return A.p3("lp_outbox",new A.uZ(a))},
Il(a){return A.p3("lp_op_queue",new A.uU(a))},
kw(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kw=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aN(n)
l=A.O(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.B(A.af(k,"?",!1,n),", ")
k=a.ai("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kw)
case 3:j.C(0,i.bB(h.a(d),new A.Be(),n))
k=A.O(l,n)
k.push("pending")
k.push("failed")
k=a.ai("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kw)
case 4:j.C(0,i.bB(h.a(d),new A.Bf(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kw,r)},
i5(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$i5=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.ek("lp_blobs",A.k(["hash"],q),1,"hash = ?",A.k([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$i5)
case 5:s=p.bA(o.a(f))?2:4
break
case 2:q=a.aC(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$i5)
case 6:s=3
break
case 4:q=a.aD("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.k([c,b],t.hf))
s=7
return A.a(q,$async$i5)
case 7:case 3:return A.e(null,r)}})
return A.f($async$i5,r)},
AM(a,b){var s=0,r=A.h(t.H),q,p
var $async$AM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aD(u.y,A.k([b],t.s))
s=3
return A.a(p,$async$AM)
case 3:case 1:return A.e(q,r)}})
return A.f($async$AM,r)},
cz(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cz=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.n2("lp_file_refs",A.k(["ref_id","hash"],n),"store = ? AND record_id = ?",A.k([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cz)
case 2:m=l.D(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.X("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cz)
case 5:o=A.a6(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.AM(a,o),$async$cz)
case 8:case 7:s=3
break
case 4:m=a.X("lp_conflicts","store = ? AND record_id = ?",A.k([b,c],n))
s=9
return A.a(m,$async$cz)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.k([b,c],n))
s=10
return A.a(m,$async$cz)
case 10:s=d?11:12
break
case 11:m=a.X("lp_outbox","store = ? AND record_id = ?",A.k([b,c],n))
s=13
return A.a(m,$async$cz)
case 13:n=a.X("lp_sync_row","store = ? AND record_id = ?",A.k([b,c],n))
s=14
return A.a(n,$async$cz)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cz,r)},
cQ:function cQ(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
Bg:function Bg(){},
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
wU:function wU(a){this.a=a},
cm:function cm(a,b,c,d,e,f,g,h,i,j){var _=this
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
uZ:function uZ(a){this.a=a},
ez:function ez(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
uU:function uU(a){this.a=a},
Be:function Be(){},
Bf:function Bf(){},
x7:function x7(a,b){this.a=a
this.b=b},
I6(a){var s,r,q
try{s=A.p1(a)
if(t.f.b(s)){r=A.f4(s)
return r}}catch(q){}return null},
I7(a){if(a instanceof A.jA)return A.i0(new A.nF(3,a.a,a.b,null).p())
t.bp.a(a)
return A.BR(a.a,a.b,a.c,a.d)},
BR(a,b,c,d){return A.i0(new A.nF(3,a,null,new A.xt(b,c,d)).p())},
kn(a){return A.KY(a)},
KY(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kn=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.i4()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a5(f.getDirectory(),k),$async$kn)
case 7:n=c
j=$.i6()
i=A.O(j.cO(0,"drift_db"),t.N)
m=i
J.CZ(m,j.cO(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.ap(l)===0){s=9
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
oV(a,b){return A.KZ(a,b)},
KZ(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$oV=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kn(a),$async$oV)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a5(m.getFileHandle(A.dN(b,$.i6().a).gjG(),{create:!1}),t.m),$async$oV)
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
return A.f($async$oV,r)},
oW(a,b){return A.L6(a,b)},
L6(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$oW=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kn(a),$async$oW)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.BF(m,A.dN(b,$.i6().a).gjG()),$async$oW)
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
return A.f($async$oW,r)},
uc:function uc(){},
ud:function ud(a){this.a=a},
ue:function ue(a){this.a=a},
mc:function mc(a,b,c){this.a=a
this.d=b
this.e=c},
un:function un(a){this.a=a},
ht:function ht(a){this.a=a},
AR(a){var s,r,q
if(a instanceof A.aR)return A.m(["lp:datetime",1000*a.a+a.b],t.N,t.S)
if(a instanceof A.aJ){s=t.N
return A.m(["lp:bigint",a.l(0)],s,s)}if(t.p.b(a))return A.m(["lp:bytes",A.dG(a,t.S)],t.N,t.L)
if(t.j.b(a)){s=t.X
r=J.bB(a,A.LU(),s)
r=A.O(r,r.$ti.i("Z.E"))
return A.dG(r,s)}if(t.f.b(a)){q=A.t(t.N,t.X)
a.a3(0,new A.AS(q))
return q}if(a==null||A.bw(a)||A.ac(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.P("Value of type "+J.bO(a).l(0)+" is not wire-safe. Only null, bool, int, double, String, DateTime, BigInt, Uint8List, List, and Map are supported.",null))},
AS:function AS(a){this.a=a},
Mw(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.t(t.N,t.X)
try{if(t.f.b(a)){s=A.f4(a)
r=A.t(t.N,t.X)
q=t.j
if(q.b(J.S(s,n))){p=J.S(s,n)
p.toString
p=J.bB(q.a(p),new A.B8(),t.bU)
q=A.O(p,p.$ti.i("Z.E"))
J.bZ(r,n,q)}if(A.ac(J.S(s,m)))J.bZ(r,m,J.S(s,m))
if(A.bw(J.S(s,l)))J.bZ(r,l,J.S(s,l))
return r}}catch(o){}return A.t(t.N,t.X)},
G6(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.f4(a).h(0,b)
return s}}catch(r){}return null},
Md(a,b){if(b!=null)return!1
return B.b.bL(a,new A.B_())},
B8:function B8(){},
B_:function B_(){},
AZ:function AZ(){},
ME(a){if(a instanceof A.dH){if(a instanceof A.eJ)return"ValidationException"
if(a instanceof A.eI)return"UniqueConstraintException"
if(a instanceof A.ey)return"NotNullConstraintException"
if(a instanceof A.ff)return"CheckConstraintException"
if(a instanceof A.fO)return"PrimaryKeyConstraintException"
if(a instanceof A.fy)return"ForeignKeyConstraintException"
if(a instanceof A.cO)return"StorageError"
if(a instanceof A.fW)return"RecordNotFoundException"
if(a instanceof A.h_)return"SchemaTooNewError"
if(a instanceof A.fA)return"FtsUnavailableError"
if(a instanceof A.hh)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eD)return"SchemaRegistrationError"
if(a instanceof A.h5)return"StaleCursorError"
if(a instanceof A.fG)return"MissingLimitError"
if(a instanceof A.fj)return"ConflictBlockedError"
if(a instanceof A.ek)return"DestructiveMigrationRefusedError"
if(a instanceof A.fV)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bv){if(a instanceof A.he)return"TransientNetworkError"
if(a instanceof A.eE)return"ServerBusyError"
if(a instanceof A.jj)return"ServerError"
if(a instanceof A.c0)return"AuthError"
if(a instanceof A.cG)return"ForbiddenError"
if(a instanceof A.cK)return"NotFoundError"
if(a instanceof A.fN)return"PayloadError"
if(a instanceof A.fP)return"ProtocolError"
if(a instanceof A.fp)return"DuplicateIdError"
if(a instanceof A.eb)return"BatchFailedError"
return"SyncError"}if(a instanceof A.ja)return"ProtocolEnvelopeException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bk)return"StateError"
if(a instanceof A.bC)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
J5(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.ac(s))throw A.b(A.d7('Request "v" must be an int.'))
if(!A.ac(r)||r<0)throw A.b(A.d7('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.db.F(0,q))throw A.b(A.d7("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.d7('Request "a" must be a map.'))
return new A.hm(s,r,q,p.aU(0,new A.xw(),t.N,t.X))},
d7(a){return new A.ja(a)},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xw:function xw(){},
nF:function nF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xt:function xt(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a){this.a=a},
Eg(a){return A.bx(A.bL(a).a,null)},
Eh(a){return A.bx(J.bO(a).a,null)},
jy:function jy(a){this.a=a},
Mx(a){if(!t.f.b(a))throw A.b(A.a8("Schema must be a map: "+A.r(a),null,null))
return A.pL(A.f4(a),t.X)},
f4(a){var s=A.t(t.N,t.X)
a.a3(0,new A.AO(s))
return s},
hn:function hn(){},
jA:function jA(a,b){this.b=a
this.a=b},
eL:function eL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
AO:function AO(a){this.a=a},
AN:function AN(){},
nI:function nI(){},
xA:function xA(a,b){var _=this
_.y=$
_.c=a
_.r=_.f=_.e=_.d=null
_.w=b
_.x=null},
xB:function xB(a){this.a=a},
nH:function nH(){},
xy:function xy(a){this.a=a},
xz:function xz(){},
A2:function A2(a,b){this.a=a
this.b=b},
nK:function nK(){},
xG:function xG(a){this.a=a},
xH:function xH(a,b){this.a=a
this.b=b},
oM:function oM(){},
oN:function oN(){},
Fk(a){return a},
FA(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=a+"("
p.a=o
n=A.a0(b)
m=n.i("cs<1>")
l=new A.cs(b,0,s,m)
l.iJ(b,0,s,n.c)
m=o+new A.X(l,new A.Ay(),m.i("X<Z.E,l>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.P(p.l(0),null))}},
qn:function qn(a){this.a=a},
qo:function qo(){},
qp:function qp(){},
Ay:function Ay(){},
te:function te(){},
dN(a,b){var s,r,q,p,o,n=b.nZ(a),m=b.cF(a)
if(n!=null)a=B.a.af(a,n.length)
s=t.s
r=A.k([],s)
q=A.k([],s)
s=a.length
if(s!==0&&b.ca(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.ca(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.af(a,p))
q.push("")}return new A.my(b,n,m,r,q)},
my:function my(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
DQ(a){return new A.mz(a)},
mz:function mz(a){this.a=a},
IU(){var s,r,q,p,o,n,m,l,k=null
if(A.Cd().gb0()!=="file")return $.kA()
if(!B.a.c5(A.Cd().gbq(),"/"))return $.kA()
s=A.ER(k,0,0)
r=A.EP(k,0,0,!1)
q=A.zU(k,0,0,k)
p=A.EO(k,0,0)
o=A.zT(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.EQ("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.Cs(l,m)
else l=A.eZ(l)
if(A.kg("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).ku()==="a\\b")return $.p6()
return $.Go()},
wH:function wH(){},
vq:function vq(a,b,c){this.d=a
this.e=b
this.f=c},
xd:function xd(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
xx:function xx(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
BE(a,b){if(b<0)A.w(A.aZ("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.w(A.aZ("Offset "+b+u.D+a.gm(0)+"."))
return new A.lH(a,b)},
wp:function wp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lH:function lH(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
HP(a,b){var s=A.HQ(A.k([A.Jt(a,!0)],t.pg)),r=new A.t4(b).$0(),q=B.c.l(B.b.ga0(s).b+1),p=A.HR(s)?0:3,o=A.a0(s)
return new A.rL(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.rN(),o.i("X<1,i>")).wF(0,B.bz),!A.Ml(new A.X(s,new A.rO(),o.i("X<1,j?>"))),new A.a2(""))},
HR(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.v(r.c,q.c))return!1}return!0},
HQ(a){var s,r,q=A.Mc(a,new A.rQ(),t.nf,t.K)
for(s=A.n(q),r=new A.aS(q,q.r,q.e,s.i("aS<2>"));r.k();)J.D2(r.d,new A.rR())
s=s.i("aM<1,2>")
r=s.i("it<o.E,cw>")
s=A.O(new A.it(new A.aM(q,s),new A.rS(),r),r.i("o.E"))
return s},
Jt(a,b){var s=new A.z6(a).$0()
return new A.bq(s,!0,null)},
Jv(a){var s,r,q,p,o,n,m=a.gaJ()
if(!B.a.F(m,"\r\n"))return a
s=a.gM().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gP()
p=a.ga4()
o=a.gM().gah()
p=A.n3(s,a.gM().gaq(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gbd()
return A.wq(r,p,o,A.z(n,"\r\n","\n"))},
Jw(a){var s,r,q,p,o,n,m
if(!B.a.c5(a.gbd(),"\n"))return a
if(B.a.c5(a.gaJ(),"\n\n"))return a
s=B.a.A(a.gbd(),0,a.gbd().length-1)
r=a.gaJ()
q=a.gP()
p=a.gM()
if(B.a.c5(a.gaJ(),"\n")){o=A.AU(a.gbd(),a.gaJ(),a.gP().gaq())
o.toString
o=o+a.gP().gaq()+a.gm(a)===a.gbd().length}else o=!1
if(o){r=B.a.A(a.gaJ(),0,a.gaJ().length-1)
if(r.length===0)p=q
else{o=a.gM().gar()
n=a.ga4()
m=a.gM().gah()
p=A.n3(o-1,A.Ey(s),m-1,n)
q=a.gP().gar()===a.gM().gar()?p:a.gP()}}return A.wq(q,p,r,s)},
Ju(a){var s,r,q,p,o
if(a.gM().gaq()!==0)return a
if(a.gM().gah()===a.gP().gah())return a
s=B.a.A(a.gaJ(),0,a.gaJ().length-1)
r=a.gP()
q=a.gM().gar()
p=a.ga4()
o=a.gM().gah()
p=A.n3(q-1,s.length-B.a.df(s,"\n")-1,o-1,p)
return A.wq(r,p,s,B.a.c5(a.gbd(),"\n")?B.a.A(a.gbd(),0,a.gbd().length-1):a.gbd())},
Ey(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.i6(a,"\n",s-2)-1
else return s-B.a.df(a,"\n")-1},
rL:function rL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
t4:function t4(a){this.a=a},
rN:function rN(){},
rM:function rM(){},
rO:function rO(){},
rQ:function rQ(){},
rR:function rR(){},
rS:function rS(){},
rP:function rP(a){this.a=a},
t5:function t5(){},
rT:function rT(a){this.a=a},
t_:function t_(a,b,c){this.a=a
this.b=b
this.c=c},
t0:function t0(a,b){this.a=a
this.b=b},
t1:function t1(a){this.a=a},
t2:function t2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rY:function rY(a,b){this.a=a
this.b=b},
rZ:function rZ(a,b){this.a=a
this.b=b},
rU:function rU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rV:function rV(a,b,c){this.a=a
this.b=b
this.c=c},
rW:function rW(a,b,c){this.a=a
this.b=b
this.c=c},
rX:function rX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t3:function t3(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
z6:function z6(a){this.a=a},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n3(a,b,c,d){if(a<0)A.w(A.aZ("Offset may not be negative, was "+a+"."))
else if(c<0)A.w(A.aZ("Line may not be negative, was "+c+"."))
else if(b<0)A.w(A.aZ("Column may not be negative, was "+b+"."))
return new A.cq(d,a,c,b)},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4:function n4(){},
n6:function n6(){},
IM(a,b,c){return new A.h3(c,a,b)},
n7:function n7(){},
h3:function h3(a,b,c){this.c=a
this.a=b
this.b=c},
h4:function h4(){},
wq(a,b,c,d){var s=new A.db(d,a,b,c)
s.oC(a,b,c)
if(!B.a.F(d,c))A.w(A.P('The context line "'+d+'" must contain "'+c+'".',null))
if(A.AU(d,c,a.gaq())==null)A.w(A.P('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
db:function db(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
IQ(a){var s
A:{if(18===a){s=B.dd
break A}if(23===a){s=B.de
break A}if(9===a){s=B.df
break A}s=null
break A}return s},
jl:function jl(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
IP(a,b,c,d,e,f,g){return new A.c7(d,b,c,e,f,a,g)},
c7:function c7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wv:function wv(){},
kI:function kI(a){this.a=a},
Kv(a,b,c){var s,r,q,p,o,n=new A.nA(c,A.af(c.b,null,!1,t.X))
try{A.F9(a,b.$1(n))}catch(r){s=A.E(r)
q=B.e.v(A.ir(s))
p=a.a
o=p.cA(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
F9(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.ac(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Ek(b).l(0)))
break A}if(b instanceof A.aJ){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.D9(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bw(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Ek(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cA(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cA(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.ap(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.F9(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.w(A.aH(b,"result","Unsupported type"))}return s},
qO:function qO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
qX:function qX(a){this.a=a},
qW:function qW(a){this.a=a},
qY:function qY(a){this.a=a},
qU:function qU(a){this.a=a},
qT:function qT(a){this.a=a},
qV:function qV(a){this.a=a},
qQ:function qQ(a){this.a=a},
qP:function qP(a){this.a=a},
qR:function qR(a){this.a=a},
qZ:function qZ(a){this.a=a},
qS:function qS(a,b){this.a=a
this.b=b},
nA:function nA(a,b){this.a=a
this.b=b},
e2:function e2(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
zK:function zK(a,b){this.a=a
this.b=b},
zL:function zL(a,b,c){this.a=a
this.b=b
this.c=c},
zM:function zM(a,b,c){this.a=a
this.b=b
this.c=c},
wr:function wr(){},
h6:function h6(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
BJ(a,b){var s=$.p5()
return new A.lV(A.t(t.N,t.a_),s,a)},
lV:function lV(a,b,c){this.d=a
this.b=b
this.a=c},
ob:function ob(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
My(a){var s=J.H5(new v.G.URL(a,"file:///").pathname,"/")
return new A.ak(s,new A.B9(),A.a0(s).i("ak<1>"))},
B9:function B9(){},
qt:function qt(){},
mR:function mR(a,b,c){this.d=a
this.a=b
this.c=c},
c6:function c6(a,b){this.a=a
this.b=b},
zu:function zu(a){this.a=a
this.b=-1},
or:function or(){},
os:function os(){},
ou:function ou(){},
ov:function ov(){},
uX:function uX(a,b){this.a=a
this.b=b},
IA(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bz(r,"step")}return s},
eh:function eh(){},
bQ:function bQ(a){this.a=a},
lh:function lh(a){this.a=a},
hi(a){return new A.df(a)},
D7(a,b){var s,r,q,p
if(b==null)b=$.p5()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cG(256)
r&2&&A.H(a)
a[q]=p}},
df:function df(a){this.a=a},
jk:function jk(a){this.a=a},
b4:function b4(){},
kX:function kX(){},
kW:function kW(){},
MC(a,b){var s=null,r=new A.es(t.kk)
return A.p4(a,new A.jB(s,s,s,s,s,s,s,s,new A.Bj(new A.Bi(r,A.Aq(new A.Bk(r)))),s,s,s,s),s,b)},
eM:function eM(a){var _=this
_.d=a
_.c=_.b=_.a=null},
Bk:function Bk(a){this.a=a},
Bi:function Bi(a,b){this.a=a
this.b=b},
Bj:function Bj(a){this.a=a},
xo:function xo(a){this.a=a},
xj:function xj(a,b,c){this.a=a
this.b=b
this.c=c},
xq:function xq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xp:function xp(a,b,c){this.b=a
this.c=b
this.d=c},
dU:function dU(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
bY(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.E(r)
if(q instanceof A.df){s=q
return s.a}else return 1}},
lk:function lk(a){this.b=this.a=$
this.d=a},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
qw:function qw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qB:function qB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qD:function qD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qF:function qF(a,b){this.a=a
this.b=b},
qy:function qy(a){this.a=a},
qE:function qE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qJ:function qJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qH:function qH(a,b){this.a=a
this.b=b},
qG:function qG(a,b){this.a=a
this.b=b},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
qC:function qC(a,b){this.a=a
this.b=b},
qI:function qI(a,b){this.a=a
this.b=b},
qx:function qx(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b){this.a=a
this.$ti=b},
pj:function pj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pl:function pl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pk:function pk(a,b,c){this.a=a
this.b=b
this.c=c},
cC(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bo(a,"success",new A.q6(r,a,b),!1,q)
A.bo(a,"error",new A.q7(r,a),!1,q)
return s},
Hq(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bo(a,"success",new A.qb(r,a,b),!1,q)
A.bo(a,"error",new A.qc(r,a),!1,q)
A.bo(a,"blocked",new A.qd(r),!1,q)
return s},
eQ:function eQ(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
yz:function yz(a,b){this.a=a
this.b=b},
yA:function yA(a,b){this.a=a
this.b=b},
q6:function q6(a,b,c){this.a=a
this.b=b
this.c=c},
q7:function q7(a,b){this.a=a
this.b=b},
qb:function qb(a,b,c){this.a=a
this.b=b
this.c=c},
qc:function qc(a,b){this.a=a
this.b=b},
qd:function qd(a){this.a=a},
i4(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
Dt(a,b,c){var s=a.read(b,c)
return s},
Du(a,b,c){var s=a.write(b,c)
return s},
BF(a,b){return A.a5(a.removeEntry(b,{recursive:!1}),t.X)},
Ds(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.w(A.P("Target object does not implement the async iterable interface",null))
return new A.eU(new A.rr(),new A.ib(a,s),s.i("eU<aa.T,L>"))},
rr:function rr(){},
xk:function xk(a){this.a=a},
xl:function xl(a){this.a=a},
xn(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$xn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a5(p.fetch(new p.URL(a,A.bd(p.location).href),null),t.m),$async$xn)
case 3:q=o.xm(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xn,r)},
xm(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$xm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lk(A.t(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.xk(p).i8(a),$async$xm)
case 3:q=new o.hj(new n.xo(m.J4(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xm,r)},
hj:function hj(a){this.a=a},
Jx(a){var s=new A.jT(a,new A.an(new A.u($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.oG(a)
return s},
lX(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$lX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.pm(a)
n=A.BJ("dart-memory",null)
m=$.p5()
l=new A.dB(o,n,new A.es(t.p3),A.aN(p),A.t(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.ib(),$async$lX)
case 3:s=4
return A.a(l.eO(),$async$lX)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lX,r)},
pm:function pm(a){this.a=null
this.b=a},
pp:function pp(a){this.a=a},
po:function po(a,b,c){this.a=a
this.b=b
this.c=c},
pn:function pn(a){this.a=a},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
z9:function z9(a){this.a=a},
za:function za(a){this.a=a},
z8:function z8(a){this.a=a},
zb:function zb(a,b,c){this.a=a
this.b=b
this.c=c},
zd:function zd(a,b){this.a=a
this.b=b},
zc:function zc(a,b){this.a=a
this.b=b},
yL:function yL(a,b,c){this.a=a
this.b=b
this.c=c},
yM:function yM(a,b){this.a=a
this.b=b},
ok:function ok(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
t8:function t8(a,b,c){this.a=a
this.b=b
this.c=c},
t9:function t9(){},
t7:function t7(a,b){this.a=a
this.b=b},
oc:function oc(a,b,c){this.a=a
this.b=b
this.c=c},
z7:function z7(a,b){this.a=a
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
hu:function hu(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
hP:function hP(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
E1(a){var s=A.BJ("dart-memory",null),r=$.p5()
return new A.h2(s,r,a)},
n_(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$n_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.i4()
if(j==null)throw A.b(A.hi(1))
p=t.m
s=3
return A.a(A.a5(j.getDirectory(),p),$async$n_)
case 3:o=d
n=A.My(a),m=J.D(n.a),n=new A.cV(m,n.b,n.$ti.i("cV<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a5(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$n_)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a4(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n_,r)},
n0(a){var s=0,r=A.h(t.m),q
var $async$n0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n_(a,!0),$async$n0)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n0,r)},
wn(a,b){var s=0,r=A.h(t.g_),q,p
var $async$wn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.i4()==null)throw A.b(A.hi(1))
p=A
s=3
return A.a(A.n0(a),$async$wn)
case 3:q=p.wm(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wn,r)},
wm(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$wm=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.E1(c)
s=3
return A.a(p.cI(a,!1),$async$wm)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wm,r)},
fx:function fx(a,b,c){this.c=a
this.a=b
this.b=c},
h2:function h2(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
wo:function wo(a,b){this.a=a
this.b=b},
oA:function oA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
zq:function zq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J4(a,b){var s=A.bd(a.exports.memory)
b.b!==$&&A.cf()
b.b=s
s=new A.xe(s,b,a.exports)
s.oD(a,b)
return s},
nL(a,b){var s,r=A.bU(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dV(a,b,c){var s=a.buffer
return B.l.eY(A.bU(s,b,c==null?A.nL(a,b):c))},
Ce(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.l.eY(A.bU(s,b,c==null?A.nL(a,b):c))},
Ei(a,b,c){var s=new Uint8Array(c)
B.f.cN(s,0,A.bU(a.buffer,b,c))
return s},
xe:function xe(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
xf:function xf(a){this.a=a},
xg:function xg(a){this.a=a},
xh:function xh(a){this.a=a},
xi:function xi(a){this.a=a},
AI(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$AI=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kC()
s=l!=null?3:5
break
case 3:p=A.L2()
s=6
return A.a(A.jx(l,p,null,null,!1),$async$AI)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a4({port:m.port1,lockName:p},new A.ik(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$AI,r)},
L2(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bt(97+$.GQ().cG(26))
return r.charCodeAt(0)==0?r:r},
Hg(a){return new A.ii(a)},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
vx:function vx(){},
vB:function vB(a){this.a=a},
vC:function vC(a){this.a=a},
vA:function vA(a){this.a=a},
vz:function vz(a){this.a=a},
vy:function vy(a){this.a=a},
ii:function ii(a){this.a=a},
qM:function qM(){},
lg:function lg(a){this.a=a},
qu:function qu(a){this.a=a},
eK:function eK(){},
lA(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n0(a),$async$lA)
case 3:p=e
o=A.E1(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cI(p,!0),$async$lA)
case 6:case 5:q=new A.lz(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lA,r)},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
rJ:function rJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jx(a,b,c,d,e){var s,r,q={},p=new A.u($.C,t.nI),o=new A.an(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.BG(A.a5(a.request(b,s,A.cY(new A.xu(q,o))),r),new A.xv(q,d,o),r,t.K)
return p},
xu:function xu(a,b){this.a=a
this.b=b},
xv:function xv(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){this.a=a},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
r0:function r0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r_:function r_(a,b){this.a=a
this.b=b},
r1:function r1(a){this.a=a},
iZ:function iZ(a){this.a=!1
this.b=a},
uP:function uP(a,b){this.a=a
this.b=b},
uO:function uO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uN:function uN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Hn(a){var s,r,q,p,o=A.k([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bP(n,A.a0(n).i("bP<1,l>"))
for(s=J.M(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a4(A.fr(B.cH,s.h(m,q)),s.h(m,q+1)))}s=A.hR(a.b)
q=A.hR(a.c)
p=A.hR(a.d)
return new A.ei(o,s,q,A.hR(a.g),p)},
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ID(a){var s
if(J.v(a.t,"errorResponse")){s=A.HC(a)
if(s!=null&&s instanceof A.dr)return s
else return new A.fX(a.e)}else return new A.fX("Did not respond with expected type, got "+A.r(a))},
HC(a){var s=a.s,r=s==null?null:A.ao(s)
A:{if(0===r){s=A.HD(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
HD(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.x("Pattern matching error"))
n=new A.rh()
l=A.ao(A.f_(l))
A.F(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ej(i,h,A.bU(h,0,o))}else p=o
n=n.$1(k)
A.F_(g)
return new A.c7(s,r,l,g==null?o:A.ao(g),n,q,p)},
HE(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.IY(l)
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
IE(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.rJ(a2,512,"transfer" in a2)
a5.mq(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.IA(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.q2(l)
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
d=A.nL(r,f)
f=new Uint8Array(e,f,d)
c=new A.dk(!1).cU(f,0,a,!0)
i=c
g=B.aH
break
case 4:i=s.kO(j)
g=B.aI
break
case 5:default:i=a
g=B.aJ}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.nL(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dk(!1).cU(a0,0,a,!0)}return A.G_(!1,b,0,0,a1,a,a3.wU(0))},
Mm(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
rh:function rh(){},
G_(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
hY(a){var s,r,q,p,o=v.G,n=new o.Array()
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
M2(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mf:function mf(a,b,c){this.a=a
this.b=b
this.$ti=c},
wc:function wc(){},
HH(a){var s,r
for(s=0;s<5;++s){r=B.cu[s]
if(r.c===a)return r}throw A.b(A.P("Unknown FS implementation: "+a,null))},
IX(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aJ
break A}q=A.ac(a)
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
break A}q=A.bw(a)
k=q?a:j
if(q){s=k
r=B.bn
break A}throw A.b(A.P("Unsupported value: "+A.r(a),j))}return new A.a4(r,s)},
IY(a){var s,r,q,p,o,n
if(a instanceof A.ej)return new A.a4(a.a,a.b)
s=[]
r=J.M(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.IX(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a4(s,t.a.a(B.f.gaa(p)))},
dx:function dx(a,b,c){this.c=a
this.a=b
this.b=c},
cu:function cu(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
p_(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$p_=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bd(i.indexedDB)
i=$.kC()
i=i==null?null:A.jx(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bp(i,t.b3),$async$p_)
case 3:l=b
p=5
s=8
return A.a(A.Hp(m.open("drift_mock_db"),t.m),$async$p_)
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
return A.f($async$p_,r)},
AE(a){return A.LL(a)},
LL(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$AE=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bd(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cY(new A.AF(j,m))
s=7
return A.a(A.Ho(m,t.m),$async$AE)
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
return A.f($async$AE,r)},
i1(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$i1=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.i4()
if(h==null){q=B.q
s=1
break}j=t.m
s=3
return A.a(A.a5(h.getDirectory(),j),$async$i1)
case 3:m=b
p=5
s=8
return A.a(A.a5(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$i1)
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
j=new A.cx(A.cy(A.Ds(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$i1)
case 14:if(!b){s=13
break}k=j.gn()
if(J.v(k.kind,"directory"))J.aL(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.a(j.D(),$async$i1)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i1,r)},
Ho(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bo(a,"success",new A.q4(r,a,b),!1,q)
A.bo(a,"error",new A.q5(r,a),!1,q)
return s},
Hp(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bo(a,"success",new A.q8(r,a,b),!1,q)
A.bo(a,"error",new A.q9(r,a),!1,q)
A.bo(a,"blocked",new A.qa(r,a),!1,q)
return s},
AF:function AF(a,b){this.a=a
this.b=b},
q4:function q4(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(a,b){this.a=a
this.b=b},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a,b){this.a=a
this.b=b},
qa:function qa(a,b){this.a=a
this.b=b},
vt:function vt(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a},
dr:function dr(a){this.a=a},
Ku(a){var s=a.gmM()
return new A.eU(new A.Ap(),s,A.n(s).i("eU<aa.T,L>"))},
Eu(a,b){var s=A.k([],t.kG),r=b==null?a.b:b
return new A.hs(a,r,new A.k6(),new A.k6(),new A.k6(),s)},
Jo(a,b,c){var s=t.S
s=new A.hq(c,A.k([],t.fV),a.a,new A.aI(new A.u($.C,t.D),t.h),A.t(s,t.br),A.t(s,t.m))
s.oA(a)
s.oF(a,b,c)
return s},
Fa(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
e5(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e5=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.i4()
if(b==null){q=B.aB
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.kC()
d=d==null?null:A.jx(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bp(d,t.b3),$async$e5)
case 7:j=a1
d=t.m
s=8
return A.a(A.a5(b.getDirectory(),d),$async$e5)
case 8:m=a1
s=9
return A.a(A.a5(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e5)
case 9:l=a1
s=10
return A.a(A.kq(l),$async$e5)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.BM(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a5(A.bd(e),t.X),$async$e5)
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
return A.a(A.BF(m,"_drift_feature_detection"),$async$e5)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e5,r)},
kq(a){return A.Lk(a)},
Lk(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
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
Ap:function Ap(){},
k6:function k6(){this.a=null},
hs:function hs(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
yr:function yr(a){this.a=a},
yv:function yv(a,b){this.a=a
this.b=b},
ys:function ys(a,b){this.a=a
this.b=b},
yt:function yt(a){this.a=a},
yu:function yu(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
yb:function yb(a){this.a=a},
yg:function yg(a,b){this.a=a
this.b=b},
yj:function yj(a,b,c){this.a=a
this.b=b
this.c=c},
yd:function yd(a,b){this.a=a
this.b=b},
yc:function yc(a,b){this.a=a
this.b=b},
yi:function yi(a,b){this.a=a
this.b=b},
yh:function yh(a,b){this.a=a
this.b=b},
yl:function yl(a,b){this.a=a
this.b=b},
yk:function yk(a,b){this.a=a
this.b=b},
ye:function ye(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yf:function yf(a,b){this.a=a
this.b=b},
ya:function ya(a){this.a=a},
lm:function lm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
r4:function r4(a){this.a=a},
r3:function r3(a){this.a=a},
r2:function r2(a,b){this.a=a
this.b=b},
xC:function xC(a,b,c,d,e,f){var _=this
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
xD:function xD(a,b){this.a=a
this.b=b},
xE:function xE(a,b){this.a=a
this.b=b},
xF:function xF(a){this.a=a},
J6(){var s=v.G
if(A.HV(s,"DedicatedWorkerGlobalScope"))return new A.o2(s,new A.o3(s.location.href))
else return new A.oy(s,new A.o3(s.location.href))},
ki:function ki(){},
o2:function o2(a,b){this.a=a
this.b=b},
oy:function oy(a,b){this.a=a
this.b=b},
zF:function zF(a){this.a=a},
zG:function zG(a,b,c){this.a=a
this.b=b
this.c=c},
zE:function zE(a){this.a=a},
zC:function zC(a){this.a=a},
zD:function zD(a){this.a=a},
o3:function o3(a){this.a=a},
yG:function yG(a){this.a=a},
ne:function ne(a,b,c){this.c=a
this.a=b
this.b=c},
wG:function wG(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hf:function hf(){},
od:function od(){},
cv:function cv(a,b){this.a=a
this.b=b},
bo(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.FB(new A.yJ(c),t.m)
s=s==null?null:A.cY(s)}s=new A.jP(a,b,s,!1,e.i("jP<0>"))
s.jy()
return s},
FB(a,b){var s=$.C
if(s===B.i)return a
return s.hE(a,b)},
BB:function BB(a,b){this.a=a
this.$ti=b},
hx:function hx(a,b,c,d){var _=this
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
yJ:function yJ(a){this.a=a},
yK:function yK(a){this.a=a},
Gf(a){return v.mangledGlobalNames[a]},
G3(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
HY(a,b){return b in a},
BM(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Mc(a,b,c,d){var s,r,q,p,o,n=A.t(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.k([],s)
n.j(0,p,o)
p=o}else p=o
J.aL(p,q)}return n},
BK(a){var s=J.D(a.a)
if(new A.cV(s,a.b,a.$ti.i("cV<1>")).k())return s.gn()
return null},
AB(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.H(a)
a[r]=s&255
b=s/256|0;--r}},
MN(a){return a},
Gd(a){if(a instanceof A.dt)return a
return new A.dt(a)},
MO(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.E(p)
if(q instanceof A.h3){s=q
throw A.b(A.IM("Invalid "+a+": "+s.a,s.b,s.gfN()))}else if(t.Y.b(q)){r=q
throw A.b(A.a8("Invalid "+a+' "'+b+'": '+r.gkd(),r.gfN(),r.gar()))}else throw p}},
hZ(){var s,r,q,p=$.GR(),o=$.GK()+1
$.KA=o
s=B.a.ie(B.c.kv(o,36),8,"0")
r=J.DB(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cG(36)]
return B.a.A(s+B.b.ec(r),0,15)},
p3(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.E(q)
if(r instanceof A.cO)throw q
else{s=r
r=A.jo("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
AL(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.o
try{s=B.h.av(a,null)
if(t.f.b(s)){q=A.b9(s,t.N,t.X)
return q}return B.o}catch(p){r=A.E(p)
q=A.jo("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
FN(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.be
try{s=B.h.av(a,null)
if(t.j.b(s)){q=J.pa(s,t.N)
q=q.fB(q)
return q}return B.be}catch(p){r=A.E(p)
q=A.jo("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
FM(a){var s,r,q,p,o=null
if(a==null)return B.q
A.F(a)
if(a.length===0)return B.q
s=B.h.av(a,o)
if(!t.j.b(s))throw A.b(A.a8("expected a JSON array, got "+J.bO(s).l(0),o,o))
r=A.k([],t.s)
for(q=J.D(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.w(A.a8("dirty-field member is "+J.bO(p).l(0)+", expected String",o,o)))}return r},
f5(a){var s,r=J.M(a)
if(r.gE(a))return null
s=J.c_(r.gG(a).gaY())
if(A.ac(s))return s
if(typeof s=="string")return A.j9(s,null)
return null},
MJ(a,b,c){var s=A.z(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.z(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.z(c,"'","\\'")+"'")+")"},
FS(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.dw(B.x.wP(r*J.GZ(d.$1(o),0.5,1.5)),0,0)},
Mv(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.c5)
s=a.h(0,"type")
if(!J.v(s,"aes-gcm"))throw A.b(A.a8("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ap(r)!==32)throw A.b(B.c4)
q=new Uint8Array(32)
for(p=J.M(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.ac(n)||n<0||n>255)throw A.b(A.a8("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.D5(q)
p=$.Bq()
if($.ky()!==B.O)A.w(A.x("BigEndian systems are unsupported"))
return new A.pe(new A.li(12,32,m),new A.ji(new A.mZ(A.D5(q)),m),p)},
FQ(a){var s,r=A.t(t.N,t.X)
r.j(0,"state",a.a.b)
r.j(0,"pending",a.b)
r.j(0,"conflicts",a.c)
r.j(0,"hidden",a.d)
r.j(0,"blocked",a.e)
s=a.f
if(s!=null)r.j(0,"lastError",s)
s=a.r
if(s!=null)r.j(0,"lastSyncAt",A.AR(s))
s=a.w
if(s!=null)r.j(0,"lastSuccessfulSyncAt",A.AR(s))
return r},
Mr(){var s=A.J6(),r=t.cj
new A.xC(s,B.bL,A.k([],t.az),A.t(t.S,t.lp),new A.iZ(A.BQ(r)),new A.iZ(A.BQ(r))).ea()},
FL(){var s,r,q,p,o=null
try{o=A.Cd()}catch(s){if(t.mA.b(A.E(s))){r=$.An
if(r!=null)return r
throw s}else throw s}if(J.v(o,$.F6)){r=$.An
r.toString
return r}$.F6=o
if($.CS()===$.kA())r=$.An=o.br(".").l(0)
else{q=o.ku()
p=q.length-1
r=$.An=p===0?q:B.a.A(q,0,p)}return r},
FW(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
FO(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.FW(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Ml(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gG(0)
for(r=A.ct(a,1,null,a.$ti.i("Z.E")),q=r.$ti,r=new A.at(r,r.gm(0),q.i("at<Z.E>")),q=q.i("Z.E");r.k();){p=r.d
if(!J.v(p==null?q.a(p):p,s))return!1}return!0},
MB(a,b){var s=B.b.bN(a,null)
if(s<0)throw A.b(A.P(A.r(a)+" contains no null elements.",null))
a[s]=b},
G7(a,b){var s=B.b.bN(a,b)
if(s<0)throw A.b(A.P(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
LY(a,b){var s,r,q,p
for(s=new A.ci(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
AU(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.c8(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bN(a,b)
while(r!==-1){q=r===0?0:B.a.i6(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.c8(a,b,r+1)}return null},
CF(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c7(A.dV(r.b,p.sqlite3_errmsg(q),null),A.dV(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
Bl(a,b,c,d,e){throw A.b(A.CF(a.a,a.b,b,c,d,e))},
D9(a){if(a.a_(0,$.Gi())<0||a.a_(0,$.Gh())>0)throw A.b(A.Dp("BigInt value exceeds the range of 64 bits"))
return a},
IB(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ao(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dV(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.Ei(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
Dw(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bt("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cG(61)))
return s.charCodeAt(0)==0?s:s},
w9(a){var s=0,r=A.h(t.lo),q
var $async$w9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(a.arrayBuffer(),t.a),$async$w9)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$w9,r)}},B={}
var w=[A,J,B]
var $={}
A.BO.prototype={}
J.lZ.prototype={
R(a,b){return a===b},
gI(a){return A.eA(a)},
l(a){return"Instance of '"+A.mD(a)+"'"},
gak(a){return A.bL(A.Cx(this))}}
J.m0.prototype={
l(a){return String(a)},
gI(a){return a?519018:218159},
gak(a){return A.bL(t.y)},
$iai:1,
$iQ:1}
J.iG.prototype={
R(a,b){return null==b},
l(a){return"null"},
gI(a){return 0},
gak(a){return A.bL(t.P)},
$iai:1,
$iW:1}
J.aE.prototype={$iL:1}
J.dE.prototype={
gI(a){return 0},
gak(a){return B.dy},
l(a){return String(a)}}
J.mB.prototype={}
J.dT.prototype={}
J.bR.prototype={
l(a){var s=a[$.Gl()]
if(s==null)s=a[$.f8()]
if(s==null)return this.oo(a)
return"JavaScript function for "+J.a_(s)}}
J.br.prototype={
gI(a){return 0},
l(a){return String(a)}}
J.fC.prototype={
gI(a){return 0},
l(a){return String(a)}}
J.B.prototype={
hF(a,b){return new A.bP(a,A.a0(a).i("@<1>").U(b).i("bP<1,2>"))},
t(a,b){a.$flags&1&&A.H(a,29)
a.push(b)},
io(a,b){var s
a.$flags&1&&A.H(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.w8(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.H(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.w8(b,null))
a.splice(b,0,c)},
k6(a,b,c){var s,r
a.$flags&1&&A.H(a,"insertAll",2)
A.DZ(b,0,a.length,"index")
if(!t.O.b(c))c=J.H8(c)
s=J.ap(c)
a.length=a.length+s
r=b+s
this.aj(a,r,a.length,a,b)
this.au(a,b,r,c)},
ko(a){a.$flags&1&&A.H(a,"removeLast",1)
if(a.length===0)throw A.b(A.AP(a,-1))
return a.pop()},
H(a,b){var s
a.$flags&1&&A.H(a,"remove",1)
for(s=0;s<a.length;++s)if(J.v(a[s],b)){a.splice(s,1)
return!0}return!1},
rQ(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.az(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dr(a,b){return new A.ak(a,b,A.a0(a).i("ak<1>"))},
C(a,b){var s
a.$flags&1&&A.H(a,"addAll",2)
if(Array.isArray(b)){this.oM(a,b)
return}for(s=J.D(b);s.k();)a.push(s.gn())},
oM(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.az(a))
for(s=0;s<r;++s)a.push(b[s])},
ab(a){a.$flags&1&&A.H(a,"clear","clear")
a.length=0},
cc(a,b,c){return new A.X(a,b,A.a0(a).i("@<1>").U(c).i("X<1,2>"))},
B(a,b){var s,r=A.af(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
ec(a){return this.B(a,"")},
cJ(a,b){return A.ct(a,0,A.cy(b,"count",t.S),A.a0(a).c)},
bj(a,b){return A.ct(a,b,null,A.a0(a).c)},
f7(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.az(a))}if(c!=null)return c.$0()
throw A.b(A.aD())},
mJ(a,b){return this.f7(a,b,null)},
a8(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.aw(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.aw(c,b,a.length,"end",null))
if(b===c)return A.k([],A.a0(a))
return A.k(a.slice(b,c),A.a0(a))},
b6(a,b){return this.T(a,b,null)},
fJ(a,b,c){A.bb(b,c,a.length)
return A.ct(a,b,c,A.a0(a).c)},
gG(a){if(a.length>0)return a[0]
throw A.b(A.aD())},
ga0(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aD())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aD())
throw A.b(A.iD())},
kp(a,b,c){a.$flags&1&&A.H(a,18)
A.bb(b,c,a.length)
a.splice(b,c-b)},
aj(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.H(a,5)
A.bb(b,c,a.length)
s=c-b
if(s===0)return
A.ba(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.pd(d,e).cK(0,!1)
q=0}p=J.M(r)
if(q+s>p.gm(r))throw A.b(A.Dz())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
au(a,b,c,d){return this.aj(a,b,c,d,0)},
bL(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.az(a))}return!1},
cC(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.az(a))}return!0},
ci(a,b){var s,r,q,p,o
a.$flags&2&&A.H(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.KE()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a0(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e6(b,2))
if(p>0)this.rR(a,p)},
aE(a){return this.ci(a,null)},
rR(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bN(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.v(a[s],b))return s
return-1},
df(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.v(a[s],b))return s
return-1},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.v(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gV(a){return a.length!==0},
l(a){return A.tf(a,"[","]")},
cK(a,b){var s=A.k(a.slice(0),A.a0(a))
return s},
eq(a){return this.cK(a,!0)},
gu(a){return new J.fc(a,a.length,A.a0(a).i("fc<1>"))},
gI(a){return A.eA(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.H(a,"set length","change the length of")
if(b<0)throw A.b(A.aw(b,0,null,"newLength",null))
if(b>a.length)A.a0(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.AP(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
if(!(b>=0&&b<a.length))throw A.b(A.AP(a,b))
a[b]=c},
ky(a,b){return new A.bI(a,b.i("bI<0>"))},
mN(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gak(a){return A.bL(A.a0(a))},
$ib8:1,
$iJ:1,
$io:1,
$ip:1}
J.m_.prototype={
x_(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mD(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.tg.prototype={}
J.fc.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.eq.prototype={
a_(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gka(b)
if(this.gka(a)===s)return 0
if(this.gka(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gka(a){return a===0?1/a<0:a<0},
iq(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
u3(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
vg(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
wP(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bM(a,b,c){if(this.a_(b,c)>0)throw A.b(A.f3(b))
if(this.a_(a,b)<0)return b
if(this.a_(a,c)>0)return c
return a},
kv(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.aw(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.w(A.Y("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.bh("0",q)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
fG(a,b){return a+b},
al(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iI(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.m7(a,b)},
N(a,b){return(a|0)===a?a/b|0:this.m7(a,b)},
m7(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bB(a,b){if(b<0)throw A.b(A.f3(b))
return b>31?0:a<<b>>>0},
tb(a,b){return b>31?0:a<<b>>>0},
dw(a,b){var s
if(b<0)throw A.b(A.f3(b))
if(a>0)s=this.jw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ag(a,b){var s
if(a>0)s=this.jw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
m4(a,b){if(0>b)throw A.b(A.f3(b))
return this.jw(a,b)},
jw(a,b){return b>31?0:a>>>b},
o_(a,b){return a>b},
gak(a){return A.bL(t.o)},
$iav:1,
$iab:1,
$iaV:1}
J.iF.prototype={
gmr(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.N(q,4294967296)
s+=32}return s-Math.clz32(q)},
gak(a){return A.bL(t.S)},
$iai:1,
$ii:1}
J.m1.prototype={
gak(a){return A.bL(t.W)},
$iai:1}
J.dC.prototype={
jF(a,b,c){var s=b.length
if(c>s)throw A.b(A.aw(c,0,s,null,null))
return new A.oC(b,a,c)},
hA(a,b){return this.jF(a,b,0)},
eg(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.aw(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.h9(c,a)},
c5(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.af(a,r-s)},
kr(a,b,c){A.DZ(0,0,a.length,"startIndex")
return A.MI(a,b,c,0)},
cO(a,b){var s
if(typeof b=="string")return A.k(a.split(b),t.s)
else{if(b instanceof A.er){s=b.e
s=!(s==null?b.e=b.pm():s)}else s=!1
if(s)return A.k(a.split(b.b),t.s)
else return this.pA(a,b)}},
dk(a,b,c,d){var s=A.bb(b,c,a.length)
return A.Gb(a,b,s,d)},
pA(a,b){var s,r,q,p,o,n,m=A.k([],t.s)
for(s=J.Bs(b,a),s=s.gu(s),r=0,q=1;s.k();){p=s.gn()
o=p.gP()
n=p.gM()
q=n-o
if(q===0&&r===o)continue
m.push(this.A(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.af(a,r))
return m},
ae(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aw(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.ae(a,b,0)},
A(a,b,c){return a.substring(b,A.bb(b,c,a.length))},
af(a,b){return this.A(a,b,null)},
cf(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.HZ(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.DF(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
wY(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.DF(r,s))},
bh(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bN)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ie(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bh(c,s)+a},
wj(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bh(" ",s)},
c8(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aw(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bN(a,b){return this.c8(a,b,0)},
i6(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.aw(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
df(a,b){return this.i6(a,b,null)},
F(a,b){return A.MF(a,b,0)},
a_(a,b){var s
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
gak(a){return A.bL(t.N)},
gm(a){return a.length},
$ib8:1,
$iai:1,
$iav:1,
$il:1}
A.yx.prototype={
t(a,b){var s,r,q,p,o,n,m,l,k=this,j=J.M(b),i=j.gm(b)
if(i===0)return
s=k.a+i
r=k.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.c.ag(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.f.au(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.au(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.H(r)
r[q+m]=l}k.a=s},
kt(){var s,r=this
if(r.a===0)return $.p7()
s=J.bN(B.f.gaa(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.p7()
return s},
gm(a){return this.a}}
A.y6.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b7(b))
this.b.push(s)
this.a=this.a+s.length},
kt(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.p7()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.ab(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.q)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.au(q,p,m,n)}l.a=0
B.b.ab(s)
return q},
gm(a){return this.a}}
A.dW.prototype={
gu(a){return new A.l1(J.D(this.gbb()),A.n(this).i("l1<1,2>"))},
gm(a){return J.ap(this.gbb())},
gE(a){return J.bA(this.gbb())},
gV(a){return J.e9(this.gbb())},
bj(a,b){var s=A.n(this)
return A.fe(J.pd(this.gbb(),b),s.c,s.y[1])},
cJ(a,b){var s=A.n(this)
return A.fe(J.Bv(this.gbb(),b),s.c,s.y[1])},
a8(a,b){return A.n(this).y[1].a(J.pb(this.gbb(),b))},
gG(a){return A.n(this).y[1].a(J.c_(this.gbb()))},
ga0(a){return A.n(this).y[1].a(J.pc(this.gbb()))},
gap(a){return A.n(this).y[1].a(J.Bu(this.gbb()))},
F(a,b){return J.Bt(this.gbb(),b)},
l(a){return J.a_(this.gbb())}}
A.l1.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ed.prototype={
gbb(){return this.a}}
A.jM.prototype={$iJ:1}
A.jJ.prototype={
h(a,b){return this.$ti.y[1].a(J.S(this.a,b))},
j(a,b,c){J.bZ(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.H3(this.a,b)},
t(a,b){J.aL(this.a,this.$ti.c.a(b))},
ci(a,b){var s=b==null?null:new A.y7(this,b)
J.D2(this.a,s)},
fJ(a,b,c){var s=this.$ti
return A.fe(J.H0(this.a,b,c),s.c,s.y[1])},
aj(a,b,c,d,e){var s=this.$ti
J.H4(this.a,b,c,A.fe(d,s.y[1],s.c),e)},
au(a,b,c,d){return this.aj(0,b,c,d,0)},
$iJ:1,
$ip:1}
A.y7.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bP.prototype={
hF(a,b){return new A.bP(this.a,this.$ti.i("@<1>").U(b).i("bP<1,2>"))},
gbb(){return this.a}}
A.ee.prototype={
c2(a,b,c){return new A.ee(this.a,this.$ti.i("@<1,2>").U(b).U(c).i("ee<1,2,3,4>"))},
J(a){return this.a.J(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a3(a,b){this.a.a3(0,new A.pE(this,b))},
gK(){var s=this.$ti
return A.fe(this.a.gK(),s.c,s.y[2])},
gaY(){var s=this.$ti
return A.fe(this.a.gaY(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gV(a){var s=this.a
return s.gV(s)},
gac(){var s=this.a.gac()
return s.cc(s,new A.pD(this),this.$ti.i("R<3,4>"))}}
A.pE.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.pD.prototype={
$1(a){var s=this.a.$ti
return new A.R(s.y[2].a(a.a),s.y[3].a(a.b),s.i("R<3,4>"))},
$S(){return this.a.$ti.i("R<3,4>(R<1,2>)")}}
A.dD.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mM.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.ci.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.B7.prototype={
$0(){return A.bj(null,t.H)},
$S:4}
A.wl.prototype={}
A.J.prototype={}
A.Z.prototype={
gu(a){var s=this
return new A.at(s,s.gm(s),A.n(s).i("at<Z.E>"))},
gE(a){return this.gm(this)===0},
gG(a){if(this.gm(this)===0)throw A.b(A.aD())
return this.a8(0,0)},
ga0(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
return s.a8(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
if(s.gm(s)>1)throw A.b(A.iD())
return s.a8(0,0)},
F(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.v(r.a8(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.az(r))}return!1},
cC(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a8(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.az(r))}return!0},
B(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a8(0,0))
if(o!==p.gm(p))throw A.b(A.az(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a8(0,q))
if(o!==p.gm(p))throw A.b(A.az(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a8(0,q))
if(o!==p.gm(p))throw A.b(A.az(p))}return r.charCodeAt(0)==0?r:r}},
ec(a){return this.B(0,"")},
dr(a,b){return this.oi(0,b)},
cc(a,b,c){return new A.X(this,b,A.n(this).i("@<Z.E>").U(c).i("X<1,2>"))},
wF(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aD())
s=q.a8(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a8(0,r))
if(p!==q.gm(q))throw A.b(A.az(q))}return s},
bj(a,b){return A.ct(this,b,null,A.n(this).i("Z.E"))},
cJ(a,b){return A.ct(this,0,A.cy(b,"count",t.S),A.n(this).i("Z.E"))}}
A.cs.prototype={
iJ(a,b,c,d){var s,r=this.b
A.ba(r,"start")
s=this.c
if(s!=null){A.ba(s,"end")
if(r>s)throw A.b(A.aw(r,0,s,"start",null))}},
gpK(){var s=J.ap(this.a),r=this.c
if(r==null||r>s)return s
return r},
gte(){var s=J.ap(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ap(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a8(a,b){var s=this,r=s.gte()+b
if(b<0||r>=s.gpK())throw A.b(A.lW(b,s.gm(0),s,null,"index"))
return J.pb(s.a,r)},
bj(a,b){var s,r,q=this
A.ba(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.em(q.$ti.i("em<1>"))
return A.ct(q.a,s,r,q.$ti.c)},
cJ(a,b){var s,r,q,p=this
A.ba(b,"count")
s=p.c
r=p.b
if(s==null)return A.ct(p.a,r,B.c.fG(r,b),p.$ti.c)
else{q=B.c.fG(r,b)
if(s<q)return p
return A.ct(p.a,r,q,p.$ti.c)}},
cK(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.M(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.DC(0,n):J.BL(0,n)}r=A.af(s,m.a8(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a8(n,o+q)
if(m.gm(n)<l)throw A.b(A.az(p))}return r},
eq(a){return this.cK(0,!0)}}
A.at.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.M(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.az(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a8(q,s);++r.c
return!0}}
A.ck.prototype={
gu(a){return new A.md(J.D(this.a),this.b,A.n(this).i("md<1,2>"))},
gm(a){return J.ap(this.a)},
gE(a){return J.bA(this.a)},
gG(a){return this.b.$1(J.c_(this.a))},
ga0(a){return this.b.$1(J.pc(this.a))},
gap(a){return this.b.$1(J.Bu(this.a))},
a8(a,b){return this.b.$1(J.pb(this.a,b))}}
A.el.prototype={$iJ:1}
A.md.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.ap(this.a)},
a8(a,b){return this.b.$1(J.pb(this.a,b))}}
A.ak.prototype={
gu(a){return new A.cV(J.D(this.a),this.b,this.$ti.i("cV<1>"))},
cc(a,b,c){return new A.ck(this,b,this.$ti.i("@<1>").U(c).i("ck<1,2>"))}}
A.cV.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.it.prototype={
gu(a){return new A.lw(J.D(this.a),this.b,B.aQ,this.$ti.i("lw<1,2>"))}}
A.lw.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.D(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eH.prototype={
gu(a){var s=this.a
return new A.ng(s.gu(s),this.b,A.n(this).i("ng<1>"))}}
A.iq.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.o_(r,s))return s
return r},
$iJ:1}
A.ng.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.da.prototype={
bj(a,b){A.kK(b,"count")
A.ba(b,"count")
return new A.da(this.a,this.b+b,A.n(this).i("da<1>"))},
gu(a){var s=this.a
return new A.n1(s.gu(s),this.b,A.n(this).i("n1<1>"))}}
A.fq.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bj(a,b){A.kK(b,"count")
A.ba(b,"count")
return new A.fq(this.a,this.b+b,this.$ti)},
$iJ:1}
A.n1.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.em.prototype={
gu(a){return B.aQ},
gE(a){return!0},
gm(a){return 0},
gG(a){throw A.b(A.aD())},
ga0(a){throw A.b(A.aD())},
gap(a){throw A.b(A.aD())},
a8(a,b){throw A.b(A.aw(b,0,0,"index",null))},
F(a,b){return!1},
cC(a,b){return!0},
dr(a,b){return this},
cc(a,b,c){return new A.em(c.i("em<0>"))},
bj(a,b){A.ba(b,"count")
return this},
cJ(a,b){A.ba(b,"count")
return this},
cK(a,b){var s=J.BL(0,this.$ti.c)
return s},
fB(a){return A.mb(this.$ti.c)}}
A.lt.prototype={
k(){return!1},
gn(){throw A.b(A.aD())}}
A.bI.prototype={
gu(a){return new A.nG(J.D(this.a),this.$ti.i("nG<1>"))}}
A.nG.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.iw.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.ns.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
ci(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
aj(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
au(a,b,c,d){return this.aj(0,b,c,d,0)}}
A.hg.prototype={}
A.bV.prototype={
gm(a){return J.ap(this.a)},
a8(a,b){var s=this.a,r=J.M(s)
return r.a8(s,r.gm(s)-1-b)}}
A.js.prototype={
gI(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gI(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
R(a,b){if(b==null)return!1
return b instanceof A.js&&this.a===b.a}}
A.kj.prototype={}
A.a4.prototype={$r:"+(1,2)",$s:1}
A.k1.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.k2.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hF.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.op.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.eW.prototype={$r:"+(1,2,3)",$s:6}
A.eX.prototype={$r:"+(1,2,3,4)",$s:7}
A.oq.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.il.prototype={}
A.fm.prototype={
c2(a,b,c){var s=A.n(this)
return A.DJ(this,s.c,s.y[1],b,c)},
gE(a){return this.gm(this)===0},
gV(a){return this.gm(this)!==0},
l(a){return A.uq(this)},
j(a,b,c){A.Hs()},
gac(){return new A.hK(this.v2(),A.n(this).i("hK<R<1,2>>"))},
v2(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gac(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gK(),o=o.gu(o),n=A.n(s).i("R<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.R(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aU(a,b,c,d){var s=A.t(c,d)
this.a3(0,new A.qm(this,b,s))
return s},
$iI:1}
A.qm.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aW.prototype={
gm(a){return this.b.length},
glB(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
J(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.J(b))return null
return this.b[this.a[b]]},
a3(a,b){var s,r,q=this.glB(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.eT(this.glB(),this.$ti.i("eT<1>"))},
gaY(){return new A.eT(this.b,this.$ti.i("eT<2>"))}}
A.eT.prototype={
gm(a){return this.a.length},
gE(a){return 0===this.a.length},
gV(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.hA(s,s.length,this.$ti.i("hA<1>"))}}
A.hA.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iy.prototype={
dH(){var s=this,r=s.$map
if(r==null){r=new A.iH(s.$ti.i("iH<1,2>"))
A.FT(s.a,r)
s.$map=r}return r},
J(a){return this.dH().J(a)},
h(a,b){return this.dH().h(0,b)},
a3(a,b){this.dH().a3(0,b)},
gK(){var s=this.dH()
return new A.T(s,A.n(s).i("T<1>"))},
gaY(){var s=this.dH()
return new A.aq(s,A.n(s).i("aq<2>"))},
gm(a){return this.dH().a}}
A.im.prototype={
t(a,b){A.Ht()}}
A.dv.prototype={
gm(a){return this.b},
gE(a){return this.b===0},
gV(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hA(s,s.length,r.$ti.i("hA<1>"))},
F(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.ta.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.iC&&this.a.R(0,b.a)&&A.CI(this)===A.CI(b)},
gI(a){return A.c5(this.a,A.CI(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bL(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iC.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Mk(A.p0(this.a),this.$ti)}}
A.vv.prototype={
$0(){return B.x.vg(1000*this.a.now())},
$S:11}
A.jf.prototype={}
A.x5.prototype={
bO(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.j5.prototype={
l(a){return"Null check operator used on a null value"}}
A.m2.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.nr.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ms.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iG:1}
A.is.prototype={}
A.k4.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaF:1}
A.eg.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Gg(r==null?"unknown":r)+"'"},
gak(a){var s=A.p0(this)
return A.bL(s==null?A.bz(this):s)},
gy7(){return this},
$C:"$1",
$R:1,
$D:null}
A.pJ.prototype={$C:"$0",$R:0}
A.pK.prototype={$C:"$2",$R:2}
A.wW.prototype={}
A.ww.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Gg(s)+"'"}}
A.id.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.id))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.ku(this.a)^A.eA(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mD(this.a)+"'")}}
A.mV.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bE.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gV(a){return this.a!==0},
gK(){return new A.T(this,A.n(this).i("T<1>"))},
gaY(){return new A.aq(this,A.n(this).i("aq<2>"))},
gac(){return new A.aM(this,A.n(this).i("aM<1,2>"))},
J(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mP(a)},
mP(a){var s=this.d
if(s==null)return!1
return this.de(this.lv(s,a),a)>=0},
C(a,b){b.a3(0,new A.th(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mQ(b)},
mQ(a){var s,r,q=this.d
if(q==null)return null
s=this.lv(q,a)
r=this.de(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kW(s==null?q.b=q.jj():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kW(r==null?q.c=q.jj():r,b,c)}else q.mS(b,c)},
mS(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jj()
s=p.eb(a)
r=o[s]
if(r==null)o[s]=[p.iL(a,b)]
else{q=p.de(r,a)
if(q>=0)r[q].b=b
else r.push(p.iL(a,b))}},
kl(a,b){var s,r,q=this
if(q.J(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.lW(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.lW(s.c,b)
else return s.mR(b)},
mR(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eb(a)
r=n[s]
q=o.de(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.md(p)
if(r.length===0)delete n[s]
return p.b},
ab(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iK()}},
a3(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.az(s))
r=r.c}},
kW(a,b,c){var s=a[b]
if(s==null)a[b]=this.iL(b,c)
else s.b=c},
lW(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.md(s)
delete a[b]
return s.b},
iK(){this.r=this.r+1&1073741823},
iL(a,b){var s,r=this,q=new A.u9(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iK()
return q},
md(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iK()},
eb(a){return J.a7(a)&1073741823},
lv(a,b){return a[this.eb(b)]},
de(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1},
l(a){return A.uq(this)},
jj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.th.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.u9.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bF(s,s.r,s.e,this.$ti.i("bF<1>"))},
F(a,b){return this.a.J(b)}}
A.bF.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.aq.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.aS(s,s.r,s.e,this.$ti.i("aS<1>"))}}
A.aS.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aM.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.ma(s,s.r,s.e,this.$ti.i("ma<1,2>"))}}
A.ma.prototype={
gn(){var s=this.d
s.toString
return s},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.az(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.R(s.a,s.b,r.$ti.i("R<1,2>"))
r.c=s.c
return!0}}}
A.iI.prototype={
eb(a){return A.ku(a)&1073741823},
de(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iH.prototype={
eb(a){return A.LP(a)&1073741823},
de(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.B1.prototype={
$1(a){return this.a(a)},
$S:31}
A.B2.prototype={
$2(a,b){return this.a(a,b)},
$S:193}
A.B3.prototype={
$1(a){return this.a(a)},
$S:58}
A.hE.prototype={
gak(a){return A.bL(this.lw())},
lw(){return A.M4(this.$r,this.h2())},
l(a){return this.mb(!1)},
mb(a){var s,r,q,p,o,n=this.pS(),m=this.h2(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.DU(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
pS(){var s,r=this.$s
while($.zs.length<=r)$.zs.push(null)
s=$.zs[r]
if(s==null){s=this.pl()
$.zs[r]=s}return s},
pl(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.DB(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.dG(j,k)}}
A.om.prototype={
h2(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.om&&this.$s===b.$s&&J.v(this.a,b.a)&&J.v(this.b,b.b)},
gI(a){return A.c5(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.on.prototype={
h2(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.on&&s.$s===b.$s&&J.v(s.a,b.a)&&J.v(s.b,b.b)&&J.v(s.c,b.c)},
gI(a){var s=this
return A.c5(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.oo.prototype={
h2(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.oo&&this.$s===b.$s&&A.JK(this.a,b.a)},
gI(a){return A.c5(this.$s,A.uR(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.er.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glH(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.BN(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqP(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.BN(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pm(){var s,r=this.a
if(!B.a.F(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
e8(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hD(s)},
jF(a,b,c){var s=b.length
if(c>s)throw A.b(A.aw(c,0,s,null,null))
return new A.nN(this,b,c)},
hA(a,b){return this.jF(0,b,0)},
pP(a,b){var s,r=this.glH()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hD(s)},
pO(a,b){var s,r=this.gqP()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hD(s)},
eg(a,b,c){if(c<0||c>b.length)throw A.b(A.aw(c,0,b.length,null,null))
return this.pO(b,c)}}
A.hD.prototype={
gP(){return this.b.index},
gM(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$iev:1,
$imN:1}
A.nN.prototype={
gu(a){return new A.nO(this.a,this.b,this.c)}}
A.nO.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.pP(l,s)
if(p!=null){m.d=p
o=p.gM()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.h9.prototype={
gM(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.w8(b,null))
return this.c},
$iev:1,
gP(){return this.a}}
A.oC.prototype={
gu(a){return new A.zN(this.a,this.b,this.c)},
gG(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.h9(r,s)
throw A.b(A.aD())}}
A.zN.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.h9(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.nW.prototype={
aR(){var s=this.b
if(s===this)throw A.b(new A.dD("Local '"+this.a+"' has not been initialized."))
return s},
bu(){var s=this.b
if(s===this)throw A.b(A.DI(this.a))
return s},
sjW(a){var s=this
if(s.b!==s)throw A.b(new A.dD("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fJ.prototype={
gak(a){return B.dr},
hC(a,b,c){A.hS(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mo(a){return this.hC(a,0,null)},
mn(a,b,c){A.hS(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hB(a,b,c){A.hS(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mm(a){return this.hB(a,0,null)},
$iai:1,
$iec:1}
A.fI.prototype={$ifI:1}
A.j0.prototype={
gaa(a){if(((a.$flags|0)&2)!==0)return new A.oK(a.buffer)
else return a.buffer},
qD(a,b,c,d){var s=A.aw(b,0,c,d,null)
throw A.b(s)},
l6(a,b,c,d){if(b>>>0!==b||b>c)this.qD(a,b,c,d)}}
A.oK.prototype={
hC(a,b,c){var s=A.bU(this.a,b,c)
s.$flags=3
return s},
mo(a){return this.hC(0,0,null)},
mn(a,b,c){var s=A.DN(this.a,b,c)
s.$flags=3
return s},
hB(a,b,c){var s=A.DM(this.a,b,c)
s.$flags=3
return s},
mm(a){return this.hB(0,0,null)},
$iec:1}
A.j_.prototype={
gak(a){return B.ds},
$iai:1,
$iBw:1}
A.fK.prototype={
gm(a){return a.length},
m2(a,b,c,d,e){var s,r,q=a.length
this.l6(a,b,q,"start")
this.l6(a,c,q,"end")
if(b>c)throw A.b(A.aw(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.P(e,null))
r=d.length
if(r-e<s)throw A.b(A.x("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ib8:1,
$ibS:1}
A.dM.prototype={
h(a,b){A.dl(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
A.dl(b,a,a.length)
a[b]=c},
aj(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.dQ.b(d)){this.m2(a,b,c,d,e)
return}this.kT(a,b,c,d,e)},
au(a,b,c,d){return this.aj(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.bT.prototype={
j(a,b,c){a.$flags&2&&A.H(a)
A.dl(b,a,a.length)
a[b]=c},
aj(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.aj.b(d)){this.m2(a,b,c,d,e)
return}this.kT(a,b,c,d,e)},
au(a,b,c,d){return this.aj(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.ml.prototype={
gak(a){return B.dt},
T(a,b,c){return new Float32Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$irw:1}
A.mm.prototype={
gak(a){return B.du},
T(a,b,c){return new Float64Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$irx:1}
A.mn.prototype={
gak(a){return B.dv},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$itb:1}
A.mo.prototype={
gak(a){return B.dw},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$itc:1}
A.mp.prototype={
gak(a){return B.dx},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$itd:1}
A.j1.prototype={
gak(a){return B.dB},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$ix8:1}
A.j2.prototype={
gak(a){return B.dC},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$ix9:1}
A.j3.prototype={
gak(a){return B.dD},
gm(a){return a.length},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$ixa:1}
A.ew.prototype={
gak(a){return B.dE},
gm(a){return a.length},
h(a,b){A.dl(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dm(b,c,a.length)))},
b6(a,b){return this.T(a,b,null)},
$iai:1,
$iew:1,
$icS:1}
A.jY.prototype={}
A.jZ.prototype={}
A.k_.prototype={}
A.k0.prototype={}
A.co.prototype={
i(a){return A.kd(v.typeUniverse,this,a)},
U(a){return A.EK(v.typeUniverse,this,a)}}
A.o9.prototype={}
A.oH.prototype={
l(a){return A.bx(this.a,null)}}
A.o5.prototype={
l(a){return this.a}}
A.k9.prototype={$idd:1}
A.xP.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:33}
A.xO.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:187}
A.xQ.prototype={
$0(){this.a.$0()},
$S:2}
A.xR.prototype={
$0(){this.a.$0()},
$S:2}
A.k8.prototype={
oI(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e6(new A.zQ(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oJ(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e6(new A.zP(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
D(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$idc:1}
A.zQ.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.zP.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.iI(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.jC.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aK(a)
else{s=r.a
if(r.$ti.i("A<1>").b(a))s.l5(a)
else s.cS(a)}},
c4(a,b){var s
if(b==null)b=A.ia(a)
s=this.a
if(this.b)s.am(new A.al(a,b))
else s.ck(new A.al(a,b))},
aS(a){return this.c4(a,null)},
$iij:1}
A.Ag.prototype={
$1(a){return this.a.$2(0,a)},
$S:26}
A.Ah.prototype={
$2(a,b){this.a.$2(1,new A.is(a,b))},
$S:196}
A.Az.prototype={
$2(a,b){this.a(a,b)},
$S:93}
A.Ae.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.y()
s=q.b
if((s&1)!==0?(q.gaM().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.Af.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:33}
A.nQ.prototype={
oE(a,b){var s=new A.xT(a)
this.a=A.wy(new A.xV(this,a),new A.xW(s),new A.xX(this,s),!1,b)}}
A.xT.prototype={
$0(){A.kx(new A.xU(this.a))},
$S:2}
A.xU.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.xW.prototype={
$0(){this.a.$0()},
$S:0}
A.xX.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.xV.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.y()
if((r.b&4)===0){s.c=new A.u($.C,t._)
if(s.b){s.b=!1
A.kx(new A.xS(this.b))}return s.c}},
$S:150}
A.xS.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jU.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.oE.prototype={
gn(){return this.b},
rS(a,b){var s,r,q
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
o.d=null}q=o.rS(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.EE
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.EE
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.x("sync*"))}return!1},
y8(a){var s,r,q=this
if(a instanceof A.hK){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.D(a)
return 2}}}
A.hK.prototype={
gu(a){return new A.oE(this.a(),this.$ti.i("oE<1>"))}}
A.al.prototype={
l(a){return A.r(this.a)},
$iae:1,
gcj(){return this.b}}
A.b0.prototype={}
A.eN.prototype={
bF(){},
bG(){}}
A.jI.prototype={
gcP(){return new A.b0(this,A.n(this).i("b0<1>"))},
gi5(){return(this.c&4)!==0},
gjh(){return this.c<4},
rP(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jx(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.Ev(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.nU(r,a,s.c)
n=A.y3(r,b)
m=c==null?A.AA():c
l=new A.eN(j,o,n,r.bR(m,t.H),r,q|p,s.i("eN<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.oX(j.a)
return l},
lP(a){var s,r=this
A.n(r).i("eN<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.rP(a)
if((r.c&2)===0&&r.d==null)r.p8()}return null},
lQ(a){},
lR(a){},
iN(){if((this.c&4)!==0)return new A.bk("Cannot add new events after calling close")
return new A.bk("Cannot add new events while doing an addStream")},
t(a,b){if(!this.gjh())throw A.b(this.iN())
this.ct(b)},
bx(a,b){var s
if(!this.gjh())throw A.b(this.iN())
s=A.f0(a,b)
this.cu(s.a,s.b)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjh())throw A.b(q.iN())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.u($.C,t.D)
q.d4()
return r},
aG(a,b){this.cu(a,b)},
aQ(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aK(null)},
p8(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aK(null)}A.oX(this.b)},
$ibD:1}
A.jD.prototype={
ct(a){var s,r
for(s=this.d,r=this.$ti.i("ca<1>");s!=null;s=s.ch)s.bW(new A.ca(a,r))},
cu(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bW(new A.hv(a,b))},
d4(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bW(B.aa)
else this.r.aK(null)}}
A.rG.prototype={
$0(){this.c.a(null)
this.b.cl(null)},
$S:0}
A.rI.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.am(new A.al(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.am(new A.al(q,r))}},
$S:14}
A.rH.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bZ(j,m.b,a)
if(J.v(k,0)){l=m.d
s=A.k([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aL(s,n)}m.c.cS(s)}}else if(J.v(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.am(new A.al(s,l))}},
$S(){return this.d.i("W(0)")}}
A.rB.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aF)")}}
A.nh.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iG:1}
A.rC.prototype={
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
l.a.aS(new A.j7(B.b.mJ(s,A.Ls()),a,q.i("j7<p<0?>,p<al?>>")))}},
$S:8}
A.j7.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gcj(){var s=this.c
s=s==null?null:s.b
return s==null?A.ae.prototype.gcj.call(this):s}}
A.jS.prototype={
tw(a){this.a.bS(new A.yP(this,a),new A.yQ(this,a),t.P)}}
A.yP.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.yQ.prototype={
$2(a,b){this.a.c=new A.al(a,b)
this.b.$1(1)},
$S:12}
A.yO.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.eO.prototype={
c4(a,b){if((this.a.a&30)!==0)throw A.b(A.x("Future already completed"))
this.am(A.f0(a,b))},
aS(a){return this.c4(a,null)},
$iij:1}
A.aI.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.aK(a)},
an(){return this.aB(null)},
am(a){this.a.ck(a)}}
A.an.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.cl(a)},
an(){return this.aB(null)},
am(a){this.a.am(a)}}
A.cb.prototype={
w8(a){if((this.c&15)!==6)return!0
return this.b.b.ep(this.d,a.a,t.y,t.K)},
vu(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.ks(r,n,a.b,p,o,t.l)
else q=m.ep(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.E(s))){if((this.c&1)!==0)throw A.b(A.P("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.P("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
bS(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aH(b,"onError",u.w))}else{a=q.dj(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.Fl(b,q)}s=new A.u($.C,c.i("u<0>"))
r=b==null?1:3
this.dC(new A.cb(s,r,a,b,this.$ti.i("@<1>").U(c).i("cb<1,2>")))
return s},
W(a,b){return this.bS(a,null,b)},
m9(a,b,c){var s=new A.u($.C,c.i("u<0>"))
this.dC(new A.cb(s,19,a,b,this.$ti.i("@<1>").U(c).i("cb<1,2>")))
return s},
ms(a){var s=this.$ti,r=$.C,q=new A.u(r,s)
if(r!==B.i)a=A.Fl(a,r)
this.dC(new A.cb(q,2,null,a,s.i("cb<1,1>")))
return q},
aZ(a){var s=this.$ti,r=$.C,q=new A.u(r,s)
if(r!==B.i)a=r.bR(a,t.z)
this.dC(new A.cb(q,8,a,null,s.i("cb<1,1>")))
return q},
t6(a){this.a=this.a&1|16
this.c=a},
fT(a){this.a=a.a&30|this.a&1
this.c=a.c},
dC(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dC(a)
return}s.fT(r)}s.b.cM(new A.yR(s,a))}},
lM(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lM(a)
return}n.fT(s)}m.a=n.hk(a)
n.b.cM(new A.yW(m,n))}},
eQ(){var s=this.c
this.c=null
return this.hk(s)},
hk(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cl(a){var s,r=this
if(r.$ti.i("A<1>").b(a))A.yU(a,r,!0)
else{s=r.eQ()
r.a=8
r.c=a
A.eR(r,s)}},
cS(a){var s=this,r=s.eQ()
s.a=8
s.c=a
A.eR(s,r)},
pk(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gc6()===r.gc6())}else s=!1
if(s)return
q=p.eQ()
p.fT(a)
A.eR(p,q)},
am(a){var s=this.eQ()
this.t6(a)
A.eR(this,s)},
pj(a,b){this.am(new A.al(a,b))},
aK(a){if(this.$ti.i("A<1>").b(a)){this.l5(a)
return}this.l2(a)},
l2(a){this.a^=2
this.b.cM(new A.yT(this,a))},
l5(a){A.yU(a,this,!1)
return},
ck(a){this.a^=2
this.b.cM(new A.yS(this,a))},
ip(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.u($.C,r.$ti)
q.aK(r)
return q}s=new A.u($.C,r.$ti)
q.a=null
q.a=A.cR(a,new A.z1(s,a))
r.bS(new A.z2(q,r,s),new A.z3(q,s),t.P)
return s},
$iA:1}
A.yR.prototype={
$0(){A.eR(this.a,this.b)},
$S:0}
A.yW.prototype={
$0(){A.eR(this.b,this.a.a)},
$S:0}
A.yV.prototype={
$0(){A.yU(this.a.a,this.b,!0)},
$S:0}
A.yT.prototype={
$0(){this.a.cS(this.b)},
$S:0}
A.yS.prototype={
$0(){this.a.am(this.b)},
$S:0}
A.yZ.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aW(q.d,t.z)}catch(p){s=A.E(p)
r=A.ah(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ia(q)
n=k.a
n.c=new A.al(q,o)
q=n}q.b=!0
return}if(j instanceof A.u&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.u){m=k.b.a
l=new A.u(m.b,m.$ti)
j.bS(new A.z_(l,m),new A.z0(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.z_.prototype={
$1(a){this.a.pk(this.b)},
$S:33}
A.z0.prototype={
$2(a,b){this.a.am(new A.al(a,b))},
$S:12}
A.yY.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.ep(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.E(n)
r=A.ah(n)
q=s
p=r
if(p==null)p=A.ia(q)
o=this.a
o.c=new A.al(q,p)
o.b=!0}},
$S:0}
A.yX.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.w8(s)&&p.a.e!=null){p.c=p.a.vu(s)
p.b=!1}}catch(o){r=A.E(o)
q=A.ah(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ia(p)
m=l.b
m.c=new A.al(p,n)
p=m}p.b=!0}},
$S:0}
A.z1.prototype={
$0(){var s=A.C5()
this.a.am(new A.al(new A.nh("Future not completed",this.b),s))},
$S:0}
A.z2.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.D()
this.c.cS(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.z3.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.D()
this.b.am(new A.al(a,b))}},
$S:12}
A.nP.prototype={}
A.aa.prototype={
ec(a){var s=new A.u($.C,t.os),r=new A.a2(""),q=this.a9(null,!0,new A.wB(s,r),s.giU())
q.ia(new A.wC(this,r,q,s))
return s},
gm(a){var s={},r=new A.u($.C,t.hy)
s.a=0
this.a9(new A.wD(s,this),!0,new A.wE(s,r),r.giU())
return r},
gG(a){var s=new A.u($.C,A.n(this).i("u<aa.T>")),r=this.a9(null,!0,new A.wz(s),s.giU())
r.ia(new A.wA(this,r,s))
return s}}
A.wB.prototype={
$0(){var s=this.b.a
this.a.cl(s.charCodeAt(0)==0?s:s)},
$S:0}
A.wC.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.E(o)
r=A.ah(o)
q=s
p=r
n=A.kk(q,p)
if(n==null)q=new A.al(q,p)
else q=n
A.Kf(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.wD.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(aa.T)")}}
A.wE.prototype={
$0(){this.b.cl(this.a.a)},
$S:0}
A.wz.prototype={
$0(){var s,r=A.C5(),q=new A.bk("No element")
A.mF(q,r)
s=A.kk(q,r)
if(s==null)s=new A.al(q,r)
this.a.am(s)},
$S:0}
A.wA.prototype={
$1(a){A.Kg(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.jp.prototype={
a9(a,b,c,d){return this.a.a9(a,b,c,d)},
by(a,b,c){return this.a9(a,null,b,c)},
aT(a){return this.a9(a,null,null,null)}}
A.e1.prototype={
gcP(){return new A.b5(this,A.n(this).i("b5<1>"))},
gi5(){return(this.b&4)!==0},
gre(){if((this.b&8)===0)return this.a
return this.a.c},
fX(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e0(A.n(q).i("e0<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e0(A.n(q).i("e0<1>")):s},
gaM(){var s=this.a
return(this.b&8)!==0?s.c:s},
bD(){if((this.b&4)!==0)return new A.bk("Cannot add event after closing")
return new A.bk("Cannot add event while adding a stream")},
tP(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bD())
if((o&2)!==0){o=new A.u($.C,t._)
o.aK(null)
return o}o=p.a
s=b===!0
r=new A.u($.C,t._)
q=s?A.J7(p):p.goN()
q=a.a9(p.goR(),s,p.gpa(),q)
s=p.b
if((s&1)!==0?(p.gaM().e&4)!==0:(s&2)===0)q.be()
p.a=new A.k5(o,r,q,A.n(p).i("k5<1>"))
p.b|=8
return r},
ln(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.e8():new A.u($.C,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bD())
this.aA(b)},
bx(a,b){var s
if(this.b>=4)throw A.b(this.bD())
s=A.f0(a,b)
this.aG(s.a,s.b)},
tO(a){return this.bx(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.ln()
if(r>=4)throw A.b(s.bD())
s.l7()
return s.ln()},
l7(){var s=this.b|=4
if((s&1)!==0)this.d4()
else if((s&3)===0)this.fX().t(0,B.aa)},
aA(a){var s=this,r=s.b
if((r&1)!==0)s.ct(a)
else if((r&3)===0)s.fX().t(0,new A.ca(a,A.n(s).i("ca<1>")))},
aG(a,b){var s=this.b
if((s&1)!==0)this.cu(a,b)
else if((s&3)===0)this.fX().t(0,new A.hv(a,b))},
aQ(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aK(null)},
jx(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.x("Stream has already been listened to."))
s=A.Jp(p,a,b,c,d,A.n(p).c)
r=p.gre()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b2()}else p.a=s
s.t7(r)
s.j5(new A.zJ(p))
return s},
lP(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.D()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.u)k=r}catch(o){q=A.E(o)
p=A.ah(o)
n=new A.u($.C,t.D)
n.ck(new A.al(q,p))
k=n}else k=k.aZ(s)
m=new A.zI(l)
if(k!=null)k=k.aZ(m)
else m.$0()
return k},
lQ(a){if((this.b&8)!==0)this.a.b.be()
A.oX(this.e)},
lR(a){if((this.b&8)!==0)this.a.b.b2()
A.oX(this.f)},
$ibD:1}
A.zJ.prototype={
$0(){A.oX(this.a.d)},
$S:0}
A.zI.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aK(null)},
$S:0}
A.oF.prototype={
ct(a){this.gaM().aA(a)},
cu(a,b){this.gaM().aG(a,b)},
d4(){this.gaM().aQ()}}
A.jE.prototype={
ct(a){this.gaM().bW(new A.ca(a,A.n(this).i("ca<1>")))},
cu(a,b){this.gaM().bW(new A.hv(a,b))},
d4(){this.gaM().bW(B.aa)}}
A.cW.prototype={}
A.hL.prototype={}
A.b5.prototype={
gI(a){return(A.eA(this.a)^892482866)>>>0},
R(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b5&&b.a===this.a}}
A.dX.prototype={
hd(){return this.w.lP(this)},
bF(){this.w.lQ(this)},
bG(){this.w.lR(this)}}
A.nM.prototype={
D(){var s=this.b.D()
return s.aZ(new A.xK(this))}}
A.xL.prototype={
$2(a,b){var s=this.a
s.aG(a,b)
s.aQ()},
$S:12}
A.xK.prototype={
$0(){this.a.a.aK(null)},
$S:2}
A.k5.prototype={}
A.b1.prototype={
t7(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fK(s)}},
ia(a){this.a=A.nU(this.d,a,A.n(this).i("b1.T"))},
be(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.j5(q.geG())},
b2(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fK(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.j5(s.geH())}}},
D(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.iQ()
r=s.f
return r==null?$.e8():r},
iQ(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.hd()},
aA(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.ct(a)
else s.bW(new A.ca(a,A.n(s).i("ca<b1.T>")))},
aG(a,b){var s
if(t.C.b(a))A.mF(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cu(a,b)
else this.bW(new A.hv(a,b))},
aQ(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d4()
else s.bW(B.aa)},
bF(){},
bG(){},
hd(){return null},
bW(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e0(A.n(r).i("e0<b1.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fK(r)}},
ct(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fA(s.a,a,A.n(s).i("b1.T"))
s.e=(s.e&4294967231)>>>0
s.iS((r&4)!==0)},
cu(a,b){var s,r=this,q=r.e,p=new A.y5(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.iQ()
s=r.f
if(s!=null&&s!==$.e8())s.aZ(p)
else p.$0()}else{p.$0()
r.iS((q&4)!==0)}},
d4(){var s,r=this,q=new A.y4(r)
r.iQ()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.e8())s.aZ(q)
else q.$0()},
j5(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.iS((r&4)!==0)},
iS(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bF()
else q.bG()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fK(q)},
$ibl:1}
A.y5.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.na(s,o,this.c,r,t.l)
else q.fA(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.y4.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fz(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hJ.prototype={
a9(a,b,c,d){return this.a.jx(a,d,c,b===!0)},
by(a,b,c){return this.a9(a,null,b,c)},
aT(a){return this.a9(a,null,null,null)},
vZ(a,b){return this.a9(a,null,null,b)}}
A.o4.prototype={
geh(){return this.a},
seh(a){return this.a=a}}
A.ca.prototype={
kj(a){a.ct(this.b)}}
A.hv.prototype={
kj(a){a.cu(this.b,this.c)}}
A.yH.prototype={
kj(a){a.d4()},
geh(){return null},
seh(a){throw A.b(A.x("No events after a done."))}}
A.e0.prototype={
fK(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kx(new A.zr(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.seh(b)
s.c=b}}}
A.zr.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.geh()
q.b=r
if(r==null)q.c=null
s.kj(this.b)},
$S:0}
A.hw.prototype={
ia(a){},
be(){var s=this.a
if(s>=0)this.a=s+2},
b2(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kx(s.glJ())}else s.a=r},
D(){this.a=-1
this.c=null
return $.e8()},
r2(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fz(s)}}else r.a=q},
$ibl:1}
A.cx.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.u($.C,t.g5)
r.b=s
r.c=!1
q.b2()
return s}throw A.b(A.x("Already waiting for next."))}return r.qC()},
qC(){var s,r,q=this,p=q.b
if(p!=null){s=new A.u($.C,t.g5)
q.b=s
r=p.a9(q.gqV(),!0,q.gqX(),q.gqZ())
if(q.b!=null)q.a=r
return s}return $.Gm()},
D(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aK(!1)
else s.c=!1
return r.D()}return $.e8()},
qW(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cl(!0)
if(q.c){r=q.a
if(r!=null)r.be()}},
r_(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.am(new A.al(a,b))
else q.ck(new A.al(a,b))},
qY(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cS(!1)
else q.l2(!1)}}
A.jN.prototype={
a9(a,b,c,d){return A.Ev(c,this.$ti.c)},
by(a,b,c){return this.a9(a,null,b,c)}}
A.dj.prototype={
a9(a,b,c,d){var s=null,r=new A.jX(s,s,s,s,this.$ti.i("jX<1>"))
r.d=new A.zp(this,r)
return r.jx(a,d,c,b===!0)},
by(a,b,c){return this.a9(a,null,b,c)},
aT(a){return this.a9(a,null,null,null)}}
A.zp.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.jX.prototype={
tQ(a){var s=this.b
if(s>=4)throw A.b(this.bD())
if((s&1)!==0)this.gaM().aA(a)},
u5(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bD())
r|=4
s.b=r
if((r&1)!==0)s.gaM().aQ()},
gcP(){throw A.b(A.Y("Not available"))},
$idK:1}
A.Aj.prototype={
$0(){return this.a.am(this.b)},
$S:0}
A.Ak.prototype={
$0(){return this.a.cl(this.b)},
$S:0}
A.jQ.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nU(r,a,s.y[1]),n=A.y3(r,d),m=c==null?A.AA():c
s=new A.hz(this,o,n,r.bR(m,t.H),r,q|p,s.i("hz<1,2>"))
s.x=this.a.by(s.gj6(),s.gj8(),s.gja())
return s},
by(a,b,c){return this.a9(a,null,b,c)}}
A.hz.prototype={
aA(a){if((this.e&2)!==0)return
this.iH(a)},
aG(a,b){if((this.e&2)!==0)return
this.kU(a,b)},
bF(){var s=this.x
if(s!=null)s.be()},
bG(){var s=this.x
if(s!=null)s.b2()},
hd(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
j7(a){this.w.q8(a,this)},
jb(a,b){this.aG(a,b)},
j9(){this.aQ()}}
A.eU.prototype={
q8(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.E(q)
r=A.ah(q)
p=s
o=r
n=A.kk(p,o)
if(n!=null){p=n.a
o=n.b}b.aG(p,o)
return}b.aA(m)}}
A.jO.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.w(A.x("Stream is already closed"))
s.iH(b)},
bx(a,b){this.a.aG(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.w(A.x("Stream is already closed"))
s.kV()},
$ibD:1}
A.hH.prototype={
aA(a){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.iH(a)},
aG(a,b){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.kU(a,b)},
aQ(){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.kV()},
bF(){var s=this.x
if(s!=null)s.be()},
bG(){var s=this.x
if(s!=null)s.b2()},
hd(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
j7(a){var s,r,q,p
try{q=this.w
q===$&&A.y()
q.t(0,a)}catch(p){s=A.E(p)
r=A.ah(p)
this.aG(s,r)}},
jb(a,b){var s,r,q,p
try{q=this.w
q===$&&A.y()
q.bx(a,b)}catch(p){s=A.E(p)
r=A.ah(p)
if(s===a)this.aG(a,b)
else this.aG(s,r)}},
j9(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.y()
q.q()}catch(p){s=A.E(p)
r=A.ah(p)
this.aG(s,r)}}}
A.jH.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.nU(r,a,s.y[1]),n=A.y3(r,d),m=c==null?A.AA():c,l=new A.hH(o,n,r.bR(m,t.H),r,q|p,s.i("hH<1,2>"))
l.w=this.a.$1(new A.jO(l,s.i("jO<2>")))
l.x=this.b.by(l.gj6(),l.gj8(),l.gja())
return l},
by(a,b,c){return this.a9(a,null,b,c)}}
A.Ab.prototype={}
A.Ad.prototype={}
A.Ac.prototype={}
A.A9.prototype={}
A.Aa.prototype={}
A.A8.prototype={}
A.A5.prototype={}
A.oQ.prototype={}
A.A4.prototype={}
A.A3.prototype={}
A.A7.prototype={}
A.A6.prototype={}
A.oP.prototype={
vm(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.oR.prototype={}
A.oO.prototype={
eM(a,b,c){var s,r,q,p,o,n,m=this.gje(),l=m.a
if(l===B.i){A.kp(b,c)
return}o=l.gkg()
o.toString
s=o
r=$.C
try{$.C=s
m.vm(l,l.gb8(),a,b,c)
$.C=r}catch(n){q=A.E(n)
p=A.ah(n)
$.C=r
o=b===q?c:p
s.eM(l,q,o)}},
$iN:1}
A.nZ.prototype={
glk(){var s=this.ax
return s==null?this.ax=new A.hQ(this):s},
gb8(){return this.ay.glk()},
gc6(){return this.as.a},
fz(a){var s,r,q
try{this.aW(a,t.H)}catch(q){s=A.E(q)
r=A.ah(q)
this.eM(this,s,r)}},
fA(a,b,c){var s,r,q
try{this.ep(a,b,t.H,c)}catch(q){s=A.E(q)
r=A.ah(q)
this.eM(this,s,r)}},
na(a,b,c,d,e){var s,r,q
try{this.ks(a,b,c,t.H,d,e)}catch(q){s=A.E(q)
r=A.ah(q)
this.eM(this,s,r)}},
jH(a,b){return new A.yD(this,this.bR(a,b),b)},
u1(a,b,c){return new A.yF(this,this.dj(a,b,c),c,b)},
eX(a){return new A.yC(this,this.bR(a,t.H))},
hE(a,b){return new A.yE(this,this.dj(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aM)return null
s=q.b
r=s.h(0,b)
return r!=null||s.J(b)?r:this.rM(q,b)},
rM(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkg().gjE()
if(s===B.aM)break
q=s.b
r=q.h(0,b)
if(r!=null||q.J(b)){a.b.j(0,b,r)
break}}return r},
fb(a,b){this.eM(this,a,b)},
mK(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
aW(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
ep(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb8(),this,a,b,c,d)},
ks(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb8(),this,a,b,c,d,e,f)},
bR(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb8(),this,a,b)},
dj(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb8(),this,a,b,c)},
fs(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb8(),this,a,b,c,d)},
mG(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb8(),this,a,b)},
cM(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb8(),this,a)},
jM(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
jL(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb8(),this,a,b)},
glY(){return this.a},
gm_(){return this.b},
glZ(){return this.c},
glU(){return this.d},
glV(){return this.e},
glT(){return this.f},
glp(){return this.r},
gju(){return this.w},
gli(){return this.x},
glh(){return this.y},
glN(){return this.z},
glt(){return this.Q},
gje(){return this.as},
gjE(){return this.at},
gkg(){return this.ay}}
A.yD.prototype={
$0(){return this.a.aW(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.yF.prototype={
$1(a){var s=this
return s.a.ep(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").U(this.c).i("1(2)")}}
A.yC.prototype={
$0(){return this.a.fz(this.b)},
$S:0}
A.yE.prototype={
$1(a){return this.a.fA(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.ot.prototype={
glY(){return B.dU},
gm_(){return B.dT},
glZ(){return B.dS},
glU(){return B.dQ},
glV(){return B.dR},
glT(){return B.dP},
glp(){return B.dL},
gju(){return B.dV},
gli(){return B.dK},
glh(){return B.dJ},
glN(){return B.dO},
glt(){return B.dM},
gje(){return B.dN},
gjE(){return B.aM},
gkg(){return null},
glk(){var s=$.zw
return s==null?$.zw=new A.hQ(this):s},
gb8(){var s=$.zw
return s==null?$.zw=new A.hQ(this):s},
gc6(){return this},
fz(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.Av(null,null,this,a)}catch(q){s=A.E(q)
r=A.ah(q)
A.kp(s,r)}},
fA(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.Aw(null,null,this,a,b)}catch(q){s=A.E(q)
r=A.ah(q)
A.kp(s,r)}},
na(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.Cz(null,null,this,a,b,c)}catch(q){s=A.E(q)
r=A.ah(q)
A.kp(s,r)}},
jH(a,b){return new A.zy(this,a,b)},
eX(a){return new A.zx(this,a)},
hE(a,b){return new A.zz(this,a,b)},
h(a,b){return null},
fb(a,b){A.kp(a,b)},
mK(a,b){return A.Fn(null,null,this,a,b)},
aW(a){if($.C===B.i)return a.$0()
return A.Av(null,null,this,a)},
ep(a,b){if($.C===B.i)return a.$1(b)
return A.Aw(null,null,this,a,b)},
ks(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.Cz(null,null,this,a,b,c)},
bR(a){return a},
dj(a){return a},
fs(a){return a},
mG(a,b){return null},
cM(a){A.Ax(null,null,this,a)},
jM(a,b){return A.Cb(a,b)},
jL(a,b){return A.E6(a,b)}}
A.zy.prototype={
$0(){return this.a.aW(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.zx.prototype={
$0(){return this.a.fz(this.b)},
$S:0}
A.zz.prototype={
$1(a){return this.a.fA(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hQ.prototype={$iau:1}
A.Au.prototype={
$0(){A.Do(this.a,this.b)},
$S:0}
A.jB.prototype={}
A.dh.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gV(a){return this.a!==0},
gK(){return new A.eS(this,A.n(this).i("eS<1>"))},
gaY(){var s=A.n(this)
return A.dI(new A.eS(this,s.i("eS<1>")),new A.z5(this),s.c,s.y[1])},
J(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ld(a)},
ld(a){var s=this.d
if(s==null)return!1
return this.bZ(this.l9(s,a),a)>=0},
C(a,b){b.a3(0,new A.z4(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.Ex(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.Ex(q,b)
return r}else return this.lu(b)},
lu(a){var s,r,q=this.d
if(q==null)return null
s=this.l9(q,a)
r=this.bZ(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.l_(s==null?q.b=A.Ck():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.l_(r==null?q.c=A.Ck():r,b,c)}else q.m1(b,c)},
m1(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.Ck()
s=p.cm(a)
r=o[s]
if(r==null){A.Cl(o,s,[a,b]);++p.a
p.e=null}else{q=p.bZ(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a3(a,b){var s,r,q,p,o,n=this,m=n.l8()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.az(n))}},
l8(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.af(i.a,null,!1,t.z)
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
l_(a,b,c){if(a[b]==null){++this.a
this.e=null}A.Cl(a,b,c)},
cm(a){return J.a7(a)&1073741823},
l9(a,b){return a[this.cm(b)]},
bZ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.v(a[r],b))return r
return-1}}
A.z5.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.z4.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.dY.prototype={
cm(a){return A.ku(a)&1073741823},
bZ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jK.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.os(b)},
j(a,b,c){this.ot(b,c)},
J(a){if(!this.w.$1(a))return!1
return this.or(a)},
cm(a){return this.r.$1(a)&1073741823},
bZ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.yB.prototype={
$1(a){return this.a.b(a)},
$S:18}
A.eS.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gV(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.oa(s,s.l8(),this.$ti.i("oa<1>"))},
F(a,b){return this.a.J(b)}}
A.oa.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.az(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.jV.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.ol(b)},
j(a,b,c){this.on(b,c)},
J(a){if(!this.y.$1(a))return!1
return this.oj(a)},
H(a,b){if(!this.y.$1(b))return null
return this.om(b)},
eb(a){return this.x.$1(a)&1073741823},
de(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.zn.prototype={
$1(a){return this.a.b(a)},
$S:18}
A.di.prototype={
gu(a){var s=this,r=new A.e_(s,s.r,A.n(s).i("e_<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gE(a){return this.a===0},
gV(a){return this.a!==0},
F(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.pp(b)},
pp(a){var s=this.d
if(s==null)return!1
return this.bZ(s[this.cm(a)],a)>=0},
gG(a){var s=this.e
if(s==null)throw A.b(A.x("No elements"))
return s.a},
ga0(a){var s=this.f
if(s==null)throw A.b(A.x("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.kZ(s==null?q.b=A.Cm():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.kZ(r==null?q.c=A.Cm():r,b)}else return q.oL(b)},
oL(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.Cm()
s=q.cm(a)
r=p[s]
if(r==null)p[s]=[q.jk(a)]
else{if(q.bZ(r,a)>=0)return!1
r.push(q.jk(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.la(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.la(s.c,b)
else return s.jr(b)},
jr(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cm(a)
r=n[s]
q=o.bZ(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lb(p)
return!0},
ab(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ji()}},
kZ(a,b){if(a[b]!=null)return!1
a[b]=this.jk(b)
return!0},
la(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lb(s)
delete a[b]
return!0},
ji(){this.r=this.r+1&1073741823},
jk(a){var s,r=this,q=new A.zo(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ji()
return q},
lb(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ji()},
cm(a){return J.a7(a)&1073741823},
bZ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.zo.prototype={}
A.e_.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.az(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.ua.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:34}
A.es.prototype={
F(a,b){return b instanceof A.b2&&this===b.a},
gu(a){var s=this
return new A.oh(s,s.a,s.c,s.$ti.i("oh<1>"))},
gm(a){return this.b},
ab(a){var s,r,q,p=this;++p.a
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
if(this.b===0)throw A.b(A.x("No such element"))
s=this.c
s.toString
return s},
ga0(a){var s
if(this.b===0)throw A.b(A.x("No such element"))
s=this.c.c
s.toString
return s},
gap(a){var s=this.b
if(s===0)throw A.b(A.x("No such element"))
if(s>1)throw A.b(A.x("Too many elements"))
s=this.c
s.toString
return s},
gE(a){return this.b===0},
hc(a,b,c){var s,r,q=this
if(b.a!=null)throw A.b(A.x("LinkedListEntry is already in a LinkedList"));++q.a
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
jz(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.oh.prototype={
gn(){var s=this.c
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.a
if(s.b!==r.a)throw A.b(A.az(s))
if(r.b!==0)r=s.e&&s.d===r.gG(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.b2.prototype={
gfm(){var s=this.a
if(s==null||this===s.gG(0))return null
return this.c}}
A.K.prototype={
gu(a){return new A.at(a,this.gm(a),A.bz(a).i("at<K.E>"))},
a8(a,b){return this.h(a,b)},
gE(a){return this.gm(a)===0},
gV(a){return!this.gE(a)},
gG(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,0)},
ga0(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aD())
if(this.gm(a)>1)throw A.b(A.iD())
return this.h(a,0)},
F(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.v(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.az(a))}return!1},
cC(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.az(a))}return!0},
f7(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.az(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.wF("",a,b)
return s.charCodeAt(0)==0?s:s},
dr(a,b){return new A.ak(a,b,A.bz(a).i("ak<K.E>"))},
ky(a,b){return new A.bI(a,b.i("bI<0>"))},
cc(a,b,c){return new A.X(a,b,A.bz(a).i("@<K.E>").U(c).i("X<1,2>"))},
bj(a,b){return A.ct(a,b,null,A.bz(a).i("K.E"))},
cJ(a,b){return A.ct(a,0,A.cy(b,"count",t.S),A.bz(a).i("K.E"))},
fB(a){var s,r=A.mb(A.bz(a).i("K.E"))
for(s=0;s<this.gm(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
hF(a,b){return new A.bP(a,A.bz(a).i("@<K.E>").U(b).i("bP<1,2>"))},
ci(a,b){var s=b==null?A.LM():b
A.n2(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bb(b,c,r)
s=A.O(this.fJ(a,b,c),A.bz(a).i("K.E"))
return s},
b6(a,b){return this.T(a,b,null)},
fJ(a,b,c){A.bb(b,c,this.gm(a))
return A.ct(a,b,c,A.bz(a).i("K.E"))},
jV(a,b,c,d){var s
A.bb(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
aj(a,b,c,d,e){var s,r,q,p,o
A.bb(b,c,this.gm(a))
s=c-b
if(s===0)return
A.ba(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.pd(d,e).cK(0,!1)
r=0}p=J.M(q)
if(r+s>p.gm(q))throw A.b(A.Dz())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
au(a,b,c,d){return this.aj(a,b,c,d,0)},
cN(a,b,c){var s,r
if(t.j.b(c))this.au(a,b,b+c.length,c)
else for(s=J.D(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.tf(a,"[","]")},
$iJ:1,
$io:1,
$ip:1}
A.U.prototype={
c2(a,b,c){var s=A.n(this)
return A.DJ(this,s.i("U.K"),s.i("U.V"),b,c)},
a3(a,b){var s,r,q,p
for(s=J.D(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gac(){return J.bB(this.gK(),new A.up(this),A.n(this).i("R<U.K,U.V>"))},
aU(a,b,c,d){var s,r,q,p,o,n=A.t(c,d)
for(s=J.D(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
J(a){return J.Bt(this.gK(),a)},
gm(a){return J.ap(this.gK())},
gE(a){return J.bA(this.gK())},
gV(a){return J.e9(this.gK())},
gaY(){return new A.jW(this,A.n(this).i("jW<U.K,U.V>"))},
l(a){return A.uq(this)},
$iI:1}
A.up.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("U.V").a(r)
return new A.R(a,r,A.n(s).i("R<U.K,U.V>"))},
$S(){return A.n(this.a).i("R<U.K,U.V>(U.K)")}}
A.ur.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:38}
A.jW.prototype={
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gV(a){var s=this.a
return s.gV(s)},
gG(a){var s=this.a
s=s.h(0,J.c_(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gap(a){var s=this.a
s=s.h(0,J.Bu(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga0(a){var s=this.a
s=s.h(0,J.pc(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.oj(J.D(s.gK()),s,this.$ti.i("oj<1,2>"))}}
A.oj.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.oJ.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iP.prototype={
c2(a,b,c){return this.a.c2(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
J(a){return this.a.J(a)},
a3(a,b){this.a.a3(0,b)},
gE(a){var s=this.a
return s.gE(s)},
gV(a){var s=this.a
return s.gV(s)},
gm(a){var s=this.a
return s.gm(s)},
gK(){return this.a.gK()},
l(a){return this.a.l(0)},
gaY(){return this.a.gaY()},
gac(){return this.a.gac()},
aU(a,b,c,d){return this.a.aU(0,b,c,d)},
$iI:1}
A.cT.prototype={
c2(a,b,c){return new A.cT(this.a.c2(0,b,c),b.i("@<0>").U(c).i("cT<1,2>"))}}
A.iL.prototype={
gu(a){var s=this
return new A.oi(s,s.c,s.d,s.b,s.$ti.i("oi<1>"))},
gE(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gG(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aD())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga0(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aD())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gap(a){var s,r=this
if(r.b===r.c)throw A.b(A.aD())
if(r.gm(0)>1)throw A.b(A.iD())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a8(a,b){var s,r=this
A.Dy(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.v(r.a[s],b)){r.jr(s);++r.d
return!0}return!1},
l(a){return A.tf(this,"{","}")},
jr(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.oi.prototype={
gn(){var s=this.e
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a
if(r.c!==q.d)A.w(A.az(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.cp.prototype={
gE(a){return this.gm(this)===0},
gV(a){return this.gm(this)!==0},
C(a,b){var s
for(s=J.D(b);s.k();)this.t(0,s.gn())},
cc(a,b,c){return new A.el(this,b,A.n(this).i("@<1>").U(c).i("el<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iD())
s=r.gu(r)
if(!s.k())throw A.b(A.aD())
return s.gn()},
l(a){return A.tf(this,"{","}")},
dr(a,b){return new A.ak(this,b,A.n(this).i("ak<1>"))},
cC(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cJ(a,b){return A.E4(this,b,A.n(this).c)},
bj(a,b){return A.E2(this,b,A.n(this).c)},
gG(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aD())
return s.gn()},
ga0(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aD())
do s=r.gn()
while(r.k())
return s},
a8(a,b){var s,r
A.ba(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lW(b,b-r,this,null,"index"))},
$iJ:1,
$io:1,
$ieF:1}
A.k3.prototype={}
A.ke.prototype={}
A.oe.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.rm(b):s}},
gm(a){return this.b==null?this.c.a:this.dE().length},
gE(a){return this.gm(0)===0},
gV(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.of(this)},
gaY(){var s,r=this
if(r.b==null){s=r.c
return new A.aq(s,A.n(s).i("aq<2>"))}return A.dI(r.dE(),new A.zj(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.J(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.ts().j(0,b,c)},
J(a){if(this.b==null)return this.c.J(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a3(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a3(0,b)
s=o.dE()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.Am(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.az(o))}},
dE(){var s=this.c
if(s==null)s=this.c=A.k(Object.keys(this.a),t.s)
return s},
ts(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.t(t.N,t.z)
r=n.dE()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.ab(r)
n.a=n.b=null
return n.c=s},
rm(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.Am(this.a[a])
return this.b[a]=s}}
A.zj.prototype={
$1(a){return this.a.h(0,a)},
$S:58}
A.of.prototype={
gm(a){return this.a.gm(0)},
a8(a,b){var s=this.a
return s.b==null?s.gK().a8(0,b):s.dE()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gu(s)}else{s=s.dE()
s=new J.fc(s,s.length,A.a0(s).i("fc<1>"))}return s},
F(a,b){return this.a.J(b)}}
A.zh.prototype={
q(){var s,r,q=this
q.ou()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aA(A.Fj(r.charCodeAt(0)==0?r:r,q.b))
s.aQ()}}
A.A_.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:50}
A.zZ.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:50}
A.kL.prototype={
gaO(){return"us-ascii"},
jS(a){return B.bu.v(a)}}
A.oI.prototype={
v(a){var s,r,q,p=A.bb(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aH(a,"string","Contains invalid characters."))
o[r]=q}return o},
bV(a){return new A.zR(new A.hp(a),this.a)}}
A.kM.prototype={}
A.zR.prototype={
q(){this.a.a.q()},
bK(a,b,c,d){var s,r,q,p
A.bb(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.P("Source contains invalid character with code point: "+q+".",null))}s=new A.ci(a)
p=this.a.a
p.t(0,s.T(s,b,c))
if(d)p.q()}}
A.kQ.prototype={
gf2(){return this.a},
w9(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bb(a1,a2,a0.length)
s=$.CV()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.B0(a0.charCodeAt(l))
h=A.B0(a0.charCodeAt(l+1))
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
d=A.bt(k)
e.a+=d
q=l
continue}}throw A.b(A.a8("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.D6(a0,n,a2,o,m,d)
else{c=B.c.al(d-1,4)+1
if(c===1)throw A.b(A.a8(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dk(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.D6(a0,n,a2,o,m,b)
else{c=B.c.al(b,4)
if(c===1)throw A.b(A.a8(a,a0,a2))
if(c>1)a0=B.a.dk(a0,a2,a2,c===2?"==":"=")}return a0}}
A.ic.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.nS(this.a?u.G:u.U).mF(a,0,s,!0)
s.toString
return A.dR(s,0,null)},
bV(a){return new A.xM(a,new A.y2(this.a?u.G:u.U))}}
A.nS.prototype={
mw(a){return new Uint8Array(a)},
mF(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.N(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mw(o)
r.a=A.Jg(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.y2.prototype={
mw(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bN(B.f.gaa(s),s.byteOffset,a)}}
A.xZ.prototype={
t(a,b){this.le(b,0,J.ap(b),!1)},
q(){this.le(B.cB,0,0,!0)}}
A.xM.prototype={
le(a,b,c,d){var s=this.b.mF(a,b,c,d)
if(s!=null)this.a.a.aA(A.dR(s,0,null))
if(d)this.a.a.aQ()}}
A.kR.prototype={
v(a){var s,r,q=A.bb(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.nR()
r=s.jO(a,0,q)
r.toString
s.jI(a,q)
return r},
bV(a){return new A.xY(a,new A.nR())}}
A.nR.prototype={
jO(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.Ej(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Jd(a,b,c,q)
r.a=A.Jf(a,b,c,s,0,r.a)
return s},
jI(a,b){var s=this.a
if(s<-1)throw A.b(A.a8("Missing padding character",a,b))
if(s>0)throw A.b(A.a8("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.xY.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.jO(b,0,r)
if(s!=null)this.a.a.aA(s)},
q(){this.b.jI(null,null)
this.a.a.aQ()},
bK(a,b,c,d){var s,r
A.bb(b,c,a.length)
if(b===c)return
s=this.b
r=s.jO(a,b,c)
if(r!=null)this.a.a.aA(r)
if(d){s.jI(a,c)
this.a.a.aQ()}}}
A.pv.prototype={}
A.hp.prototype={
t(a,b){this.a.t(0,b)},
q(){this.a.q()}}
A.nV.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.M(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.ag(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.au(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.au(p,o,o+n.gm(b),b)
q.c=q.c+n.gm(b)},
q(){this.a.$1(B.f.T(this.b,0,this.c))}}
A.l2.prototype={}
A.oz.prototype={
t(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.eP.prototype={
t(a,b){this.b.t(0,b)},
bx(a,b){A.cy(a,"error",t.K)
this.a.bx(a,b)},
q(){this.b.q()},
$ibD:1}
A.l4.prototype={}
A.aB.prototype={
bV(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
u_(a){return new A.jH(new A.qs(this),a,t.fM.U(A.n(this).i("aB.T")).i("jH<1,2>"))}}
A.qs.prototype={
$1(a){return new A.eP(a,this.a.bV(a),t.oW)},
$S:99}
A.en.prototype={}
A.iJ.prototype={
l(a){var s=A.ir(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.m3.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.ti.prototype={
av(a,b){var s=A.Fj(a,this.guj().a)
return s},
a7(a,b){var s=A.JA(a,this.gf2().b,null)
return s},
gf2(){return B.cc},
guj(){return B.cb}}
A.m5.prototype={
bV(a){return new A.zi(null,this.b,new A.oB(a))}}
A.zi.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.x("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a2("")
q=new A.zO(r,s)
A.Ez(b,q,p.b,p.a)
if(r.a.length!==0)q.j4()
s.q()},
q(){}}
A.m4.prototype={
bV(a){return new A.zh(this.a,a,new A.a2(""))}}
A.zl.prototype={
nj(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iy(a,s,r)
s=r+1
n.ao(92)
n.ao(117)
n.ao(100)
p=q>>>8&15
n.ao(p<10?48+p:87+p)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iy(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.iy(a,s,r)
s=r+1
n.ao(92)
n.ao(q)}}if(s===0)n.b4(a)
else if(s<m)n.iy(a,s,m)},
iR(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.m3(a,null))}s.push(a)},
ix(a){var s,r,q,p,o=this
if(o.ni(a))return
o.iR(a)
try{s=o.b.$1(a)
if(!o.ni(s)){q=A.DG(a,null,o.glK())
throw A.b(q)}o.a.pop()}catch(p){r=A.E(p)
q=A.DG(a,r,o.glK())
throw A.b(q)}},
ni(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xu(a)
return!0}else if(a===!0){r.b4("true")
return!0}else if(a===!1){r.b4("false")
return!0}else if(a==null){r.b4("null")
return!0}else if(typeof a=="string"){r.b4('"')
r.nj(a)
r.b4('"')
return!0}else if(t.j.b(a)){r.iR(a)
r.xs(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.iR(a)
s=r.xt(a)
r.a.pop()
return s}else return!1},
xs(a){var s,r,q=this
q.b4("[")
s=J.M(a)
if(s.gV(a)){q.ix(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b4(",")
q.ix(s.h(a,r))}}q.b4("]")},
xt(a){var s,r,q,p,o=this,n={}
if(a.gE(a)){o.b4("{}")
return!0}s=a.gm(a)*2
r=A.af(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a3(0,new A.zm(n,r))
if(!n.b)return!1
o.b4("{")
for(p='"';q<s;q+=2,p=',"'){o.b4(p)
o.nj(A.F(r[q]))
o.b4('":')
o.ix(r[q+1])}o.b4("}")
return!0}}
A.zm.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:38}
A.zk.prototype={
glK(){var s=this.c
return s instanceof A.a2?s.l(0):null},
xu(a){this.c.iw(B.x.l(a))},
b4(a){this.c.iw(a)},
iy(a,b,c){this.c.iw(B.a.A(a,b,c))},
ao(a){this.c.ao(a)}}
A.m8.prototype={
gaO(){return"iso-8859-1"},
jS(a){return B.ck.v(a)}}
A.m9.prototype={}
A.nd.prototype={
t(a,b){this.bK(b,0,b.length,!1)}}
A.zO.prototype={
ao(a){var s=this.a,r=A.bt(a)
if((s.a+=r).length>16)this.j4()},
iw(a){if(this.a.a.length!==0)this.j4()
this.b.t(0,a)},
j4(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.k7.prototype={
q(){},
bK(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bt(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
t(a,b){this.a.a+=b}}
A.oB.prototype={
t(a,b){this.a.a.aA(b)},
bK(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aA(a)
else r.aA(B.a.A(a,b,c))
if(d)r.aQ()},
q(){this.a.a.aQ()}}
A.zY.prototype={
q(){var s,r,q,p=this.c
this.a.vi(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bK(q,0,q.length,!0)}else r.q()},
t(a,b){this.bK(b,0,J.ap(b),!1)},
bK(a,b,c,d){var s,r=this.c,q=this.a.cU(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bK(s,0,s.length,!1)
r.a=""
return}}}
A.nx.prototype={
gaO(){return"utf-8"},
ug(a,b){return new A.dk((b===!0?B.dF:B.aL).a).cU(a,0,null,!0)},
eY(a){return this.ug(a,null)},
jS(a){return B.e.v(a)}}
A.ny.prototype={
v(a){var s,r,q=A.bb(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.oL(s)
if(r.ls(a,0,q)!==q)r.hw()
return B.f.T(s,0,r.b)},
bV(a){return new A.A0(new A.hp(a),new Uint8Array(1024))}}
A.oL.prototype={
hw(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.H(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mi(a,b){var s,r,q,p,o=this
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
ls(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.H(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mi(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
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
A.A0.prototype={
q(){if(this.a!==0){this.bK("",0,0,!0)
return}this.d.a.q()},
bK(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mi(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.ls(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hw()
else n.a=a.charCodeAt(b);++b}s.t(0,B.f.T(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.ju.prototype={
bV(a){return new A.zY(new A.dk(this.a),new A.oB(a),new A.a2(""))}}
A.dk.prototype={
cU(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bb(b,c,J.ap(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.K5(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.K4(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.iX(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.EW(p)
m.b=0
throw A.b(A.a8(n,a,q+m.c))}return o},
iX(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.N(b+c,2)
r=q.iX(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.iX(a,s,c,d)}return q.ui(a,b,c,d)},
vi(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bt(65533)
a.a+=s}else throw A.b(A.a8(A.EW(77),null,null))},
ui(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a2(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bt(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bt(k)
h.a+=q
break
case 65:q=A.bt(k)
h.a+=q;--g
break
default:q=A.bt(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bt(a[m])
h.a+=q}else{q=A.dR(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bt(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.oS.prototype={}
A.aJ.prototype={
bA(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bJ(p,r)
return new A.aJ(p===0?!1:s,r,p)},
pF(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.ch()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bJ(s,q)
return new A.aJ(n===0?!1:o,q,n)},
pI(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ch()
s=k-a
if(s<=0)return l.a?$.CX():$.ch()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bJ(s,q)
m=new A.aJ(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fP(0,$.f9())
return m},
bB(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.P("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.N(b,16)
if(B.c.al(b,16)===0)return n.pF(r)
q=s+r+1
p=new Uint16Array(q)
A.Er(n.b,s,b,p)
s=n.a
o=A.bJ(q,p)
return new A.aJ(o===0?!1:s,p,o)},
dw(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.P("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.N(b,16)
q=B.c.al(b,16)
if(q===0)return j.pI(r)
p=s-r
if(p<=0)return j.a?$.CX():$.ch()
o=j.b
n=new Uint16Array(p)
A.Jm(o,s,b,n)
s=j.a
m=A.bJ(p,n)
l=new A.aJ(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bB(1,q)-1)>>>0!==0)return l.fP(0,$.f9())
for(k=0;k<r;++k)if(o[k]!==0)return l.fP(0,$.f9())}return l},
a_(a,b){var s,r=this.a
if(r===b.a){s=A.y_(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iM(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iM(p,b)
if(o===0)return $.ch()
if(n===0)return p.a===b?p:p.bA(0)
s=o+1
r=new Uint16Array(s)
A.Ji(p.b,o,a.b,n,r)
q=A.bJ(s,r)
return new A.aJ(q===0?!1:b,r,q)},
fQ(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ch()
s=a.c
if(s===0)return p.a===b?p:p.bA(0)
r=new Uint16Array(o)
A.nT(p.b,o,a.b,s,r)
q=A.bJ(o,r)
return new A.aJ(q===0?!1:b,r,q)},
fG(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iM(b,r)
if(A.y_(q.b,p,b.b,s)>=0)return q.fQ(b,r)
return b.fQ(q,!r)},
fP(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bA(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iM(b,r)
if(A.y_(q.b,p,b.b,s)>=0)return q.fQ(b,r)
return b.fQ(q,!r)},
bh(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ch()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.Es(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bJ(s,p)
return new A.aJ(m===0?!1:n,p,m)},
pE(a){var s,r,q,p
if(this.c<a.c)return $.ch()
this.lm(a)
s=$.Cg.bu()-$.jG.bu()
r=A.Ci($.Cf.bu(),$.jG.bu(),$.Cg.bu(),s)
q=A.bJ(s,r)
p=new A.aJ(!1,r,q)
return this.a!==a.a&&q>0?p.bA(0):p},
rO(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lm(a)
s=A.Ci($.Cf.bu(),0,$.jG.bu(),$.jG.bu())
r=A.bJ($.jG.bu(),s)
q=new A.aJ(!1,s,r)
if($.Ch.bu()>0)q=q.dw(0,$.Ch.bu())
return p.a&&q.c>0?q.bA(0):q},
lm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.Eo&&a.c===$.Eq&&c.b===$.En&&a.b===$.Ep)return
s=a.b
r=a.c
q=16-B.c.gmr(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.Em(s,r,q,p)
n=new Uint16Array(b+5)
m=A.Em(c.b,b,q,n)}else{n=A.Ci(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.Cj(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.y_(n,m,j,i)>=0){g&2&&A.H(n)
n[m]=1
A.nT(n,h,j,i,n)}else{g&2&&A.H(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.nT(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.Jj(l,n,e);--k
A.Es(d,f,0,n,k,o)
if(n[e]<d){i=A.Cj(f,o,k,j)
A.nT(n,h,j,i,n)
while(--d,n[e]<d)A.nT(n,h,j,i,n)}--e}$.En=c.b
$.Eo=b
$.Ep=s
$.Eq=r
$.Cf.b=n
$.Cg.b=h
$.jG.b=o
$.Ch.b=q},
gI(a){var s,r,q,p=new A.y0(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.y1().$1(s)},
R(a,b){if(b==null)return!1
return b instanceof A.aJ&&this.a_(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.k([],t.s)
m=n.a
r=m?n.bA(0):n
while(r.c>1){q=$.CW()
if(q.c===0)A.w(B.bE)
p=r.rO(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pE(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bV(s,t.hF).ec(0)},
$iav:1}
A.y0.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:115}
A.y1.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:124}
A.o8.prototype={
mp(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mC(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.zX.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.D(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:53}
A.r5.prototype={
$0(){var s=this
return A.w(A.P("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:32}
A.aR.prototype={
iO(a){var s=1000,r=B.c.al(a,s),q=B.c.N(a-r,s),p=this.b+r,o=B.c.al(p,s),n=this.c
return new A.aR(A.lo(this.a+B.c.N(p-o,s)+q,o,n),o,n)},
R(a,b){if(b==null)return!1
return b instanceof A.aR&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.c5(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
k9(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a_(a,b){var s=B.c.a_(this.a,b.a)
if(s!==0)return s
return B.c.a_(this.b,b.b)},
wW(){var s=this
if(s.c)return s
return new A.aR(s.a,s.b,!0)},
l(a){var s=this,r=A.Hx(A.BZ(s)),q=A.ln(A.BX(s)),p=A.ln(A.vu(s)),o=A.ln(A.BV(s)),n=A.ln(A.BW(s)),m=A.ln(A.BY(s)),l=A.Dm(A.DT(s)),k=s.b,j=k===0?"":A.Dm(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iav:1}
A.aC.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aC&&this.a===b.a},
gI(a){return B.c.gI(this.a)},
a_(a,b){return B.c.a_(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.N(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.N(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.N(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.ie(B.c.l(n%1e6),6,"0")},
$iav:1}
A.yI.prototype={
l(a){return this.a5()}}
A.ae.prototype={
gcj(){return A.Iq(this)}}
A.kN.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ir(s)
return"Assertion failed"}}
A.dd.prototype={}
A.bC.prototype={
gj_(){return"Invalid argument"+(!this.a?"(s)":"")},
giZ(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gj_()+q+o
if(!s.a)return n
return n+s.giZ()+": "+A.ir(s.gk8())},
gk8(){return this.b}}
A.d8.prototype={
gk8(){return this.b},
gj_(){return"RangeError"},
giZ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.iA.prototype={
gk8(){return this.b},
gj_(){return"RangeError"},
giZ(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id8:1,
gm(a){return this.f}}
A.cU.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.nq.prototype={
l(a){return"UnimplementedError: "+this.a},
$icU:1}
A.bk.prototype={
l(a){return"Bad state: "+this.a}}
A.l7.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ir(s)+"."}}
A.mv.prototype={
l(a){return"Out of Memory"},
gcj(){return null},
$iae:1}
A.jm.prototype={
l(a){return"Stack Overflow"},
gcj(){return null},
$iae:1}
A.o6.prototype={
l(a){return"Exception: "+this.a},
$iG:1}
A.bi.prototype={
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
k=""}return g+l+B.a.A(e,i,j)+k+"\n"+B.a.bh(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.r(f)+")"):g},
$iG:1,
gkd(){return this.a},
gfN(){return this.b},
gar(){return this.c}}
A.lY.prototype={
gcj(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iae:1,
$icU:1,
$iG:1}
A.o.prototype={
hF(a,b){return A.fe(this,A.n(this).i("o.E"),b)},
cc(a,b,c){return A.dI(this,b,A.n(this).i("o.E"),c)},
dr(a,b){return new A.ak(this,b,A.n(this).i("ak<o.E>"))},
ky(a,b){return new A.bI(this,b.i("bI<0>"))},
F(a,b){var s
for(s=this.gu(this);s.k();)if(J.v(s.gn(),b))return!0
return!1},
vk(a,b,c){var s,r
for(s=this.gu(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
vl(a,b,c){return this.vk(0,b,c,t.z)},
cC(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
B(a,b){var s,r,q=this.gu(this)
if(!q.k())return""
s=J.a_(q.gn())
if(!q.k())return s
if(b.length===0){r=s
do r+=J.a_(q.gn())
while(q.k())}else{r=s
do r=r+b+J.a_(q.gn())
while(q.k())}return r.charCodeAt(0)==0?r:r},
bL(a,b){var s
for(s=this.gu(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
cK(a,b){var s=A.n(this).i("o.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
eq(a){return this.cK(0,!0)},
fB(a){return A.d2(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gE(a){return!this.gu(this).k()},
gV(a){return!this.gE(this)},
cJ(a,b){return A.E4(this,b,A.n(this).i("o.E"))},
bj(a,b){return A.E2(this,b,A.n(this).i("o.E"))},
gG(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aD())
return s.gn()},
ga0(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aD())
do s=r.gn()
while(r.k())
return s},
gap(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aD())
s=r.gn()
if(r.k())throw A.b(A.iD())
return s},
f7(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a8(a,b){var s,r
A.ba(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lW(b,b-r,this,null,"index"))},
l(a){return A.HU(this,"(",")")}}
A.R.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gI(a){return A.j.prototype.gI.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
R(a,b){return this===b},
gI(a){return A.eA(this)},
l(a){return"Instance of '"+A.mD(this)+"'"},
gak(a){return A.dq(this)},
toString(){return this.l(this)}}
A.oD.prototype={
l(a){return""},
$iaF:1}
A.jn.prototype={
guX(){var s=this.gmE()
if($.kz()===1e6)return s
return s*1000},
gmD(){var s=this.gmE()
if($.kz()===1000)return s
return B.c.N(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mE.$0()-r)
s.b=null}},
gmE(){var s=this.b
if(s==null)s=$.mE.$0()
return s-this.a}}
A.je.prototype={
gu(a){return new A.mU(this.a)},
ga0(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.x("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.F4(r,s)}return s}}
A.mU.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.F4(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a2.prototype={
gm(a){return this.a.length},
iw(a){var s=A.r(a)
this.a+=s},
ao(a){var s=A.bt(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.xc.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:172}
A.kf.prototype={
gm8(){var s,r,q,p,o=this,n=o.w
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
gwk(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.af(s,1)
r=s.length===0?B.q:A.dG(new A.X(A.k(s.split("/"),t.s),A.LX(),t.iZ),t.N)
q.x!==$&&A.Bm()
p=q.x=r}return p},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.a.gI(r.gm8())
r.y!==$&&A.Bm()
r.y=s
q=s}return q},
gkx(){return this.b},
gdd(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ae(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfl(){var s=this.d
return s==null?A.EL(this.a):s},
gfq(){var s=this.f
return s==null?"":s},
ghT(){var s=this.r
return s==null?"":s},
vR(a){var s=this.a
if(a.length!==s.length)return!1
return A.Ki(a,s,0)>=0},
fv(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.Cq(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.zT(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.zU(null,0,0,a)
else k=j.f
return A.kg(b,q,o,p,l,k,j.r)},
kq(a){return this.fv(a,null)},
n8(a){return this.fv(null,a)},
lG(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ae(b,"../",r);){r+=3;++s}q=B.a.df(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.i6(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dk(a,q+1,null,B.a.af(b,r-3*s))},
br(a){return this.fw(A.nw(a))},
fw(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb0().length!==0)return a
else{s=h.a
if(a.gk_()){r=a.n8(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmL())m=a.gi2()?a.gfq():h.f
else{l=A.K3(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gjZ()?k+A.eZ(a.gbq()):k+A.eZ(h.lG(B.a.af(n,k.length),a.gbq()))}else if(a.gjZ())n=A.eZ(a.gbq())
else if(n.length===0)if(p==null)n=s.length===0?a.gbq():A.eZ(a.gbq())
else n=A.eZ("/"+a.gbq())
else{j=h.lG(n,a.gbq())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.eZ(j)
else n=A.Cs(j,!r||p!=null)}m=a.gi2()?a.gfq():null}}}i=a.gk0()?a.ghT():null
return A.kg(s,q,p,o,n,m,i)},
gk_(){return this.c!=null},
gi2(){return this.f!=null},
gk0(){return this.r!=null},
gmL(){return this.e.length===0},
gjZ(){return B.a.S(this.e,"/")},
ku(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gdd()!=="")A.w(A.Y(u.Q))
s=r.gwk()
A.JX(s,!1)
q=A.wF(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gm8()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb0())if(p.c!=null===b.gk_())if(p.b===b.gkx())if(p.gdd()===b.gdd())if(p.gfl()===b.gfl())if(p.e===b.gbq()){r=p.f
q=r==null
if(!q===b.gi2()){if(q)r=""
if(r===b.gfq()){r=p.r
q=r==null
if(!q===b.gk0()){s=q?"":r
s=s===b.ghT()}}}}return s},
$inu:1,
gb0(){return this.a},
gbq(){return this.e}}
A.zW.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.hO(1,a,B.l,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.hO(1,b,B.l,!0)
s.a+=r}},
$S:179}
A.zV.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.D(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:53}
A.xb.prototype={
gnh(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.c8(m,"?",s)
q=m.length
if(r>=0){p=A.kh(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.o1("data","",n,n,A.kh(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cc.prototype={
gk_(){return this.c>0},
gk5(){return this.c>0&&this.d+1<this.e},
gi2(){return this.f<this.r},
gk0(){return this.r<this.a.length},
gjZ(){return B.a.ae(this.a,"/",this.e)},
gmL(){return this.e===this.f},
gb0(){var s=this.w
return s==null?this.w=this.pn():s},
pn(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gkx(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gdd(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfl(){var s,r=this
if(r.gk5())return A.aG(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbq(){return B.a.A(this.a,this.e,this.f)},
gfq(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
ghT(){var s=this.r,r=this.a
return s<r.length?B.a.af(r,s+1):""},
lA(a){var s=this.d+1
return s+a.length===this.e&&B.a.ae(this.a,a,s)},
wL(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cc(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.Cq(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb0()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gk5()?h.gfl():g
if(s)o=A.zT(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.zU(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.af(q,m+1):g
return A.kg(b,p,n,o,l,j,i)},
kq(a){return this.fv(a,null)},
n8(a){return this.fv(null,a)},
br(a){return this.fw(A.nw(a))},
fw(a){if(a instanceof A.cc)return this.tc(this,a)
return this.ma().fw(a)},
tc(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lA("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lA("443")
if(p){o=r+1
return new A.cc(B.a.A(a.a,0,o)+B.a.af(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.ma().fw(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cc(B.a.A(a.a,0,r)+B.a.af(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cc(B.a.A(a.a,0,r)+B.a.af(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wL()}s=b.a
if(B.a.ae(s,"/",n)){m=a.e
l=A.ED(this)
k=l>0?l:m
o=k-n
return new A.cc(B.a.A(a.a,0,k)+B.a.af(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ae(s,"../",n))n+=3
o=j-n+1
return new A.cc(B.a.A(a.a,0,j)+"/"+B.a.af(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.ED(this)
if(l>=0)g=l
else for(g=j;B.a.ae(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.ae(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.ae(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.cc(B.a.A(h,0,i)+d+B.a.af(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
ku(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gb0()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.b(A.Y(u.z))
throw A.b(A.Y(u.A))}if(r.c<r.d)A.w(A.Y(u.Q))
q=B.a.A(s,r.e,q)
return q},
gI(a){var s=this.x
return s==null?this.x=B.a.gI(this.a):s},
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
ma(){var s=this,r=null,q=s.gb0(),p=s.gkx(),o=s.c>0?s.gdd():r,n=s.gk5()?s.gfl():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gfq():r
return A.kg(q,p,o,n,k,l,j<m.length?s.ghT():r)},
l(a){return this.a},
$inu:1}
A.o1.prototype={}
A.lx.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.mr.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iG:1}
A.rF.prototype={
$2(a,b){this.a.bS(new A.rD(a),new A.rE(b),t.X)},
$S:181}
A.rD.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:183}
A.rE.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.LJ(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.w("Attempting to box non-Dart object.")
s={}
s[$.GL()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:12}
A.B5.prototype={
$1(a){var s,r,q,p
if(A.Fi(a))return a
s=this.a
if(s.J(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.D(a.gK());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.C(p,J.bB(a,this,t.z))
return p}else return a},
$S:25}
A.Bc.prototype={
$1(a){return this.a.aB(a)},
$S:26}
A.Bd.prototype={
$1(a){if(a==null)return this.a.aS(new A.mr(a===undefined))
return this.a.aS(a)},
$S:26}
A.AJ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Fh(a))return a
s=this.a
a.toString
if(s.J(a))return s.h(0,a)
if(a instanceof Date)return new A.aR(A.lo(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.P("structured clone of RegExp",null))
if(a instanceof Promise)return A.a5(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.t(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aA(o),q=s.gu(o);q.k();)n.push(A.p1(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.M(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:25}
A.ze.prototype={
cG(a){if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
return Math.random()*a>>>0},
mX(){return Math.random()}}
A.zf.prototype={
oH(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cG(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.H(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.ao(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bN(B.az.gaa(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.lu.prototype={}
A.a3.prototype={
h(a,b){var s,r=this
if(!r.jf(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a3.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jf(b))return
s.c.j(0,s.a.$1(b),new A.R(b,c,s.$ti.i("R<a3.K,a3.V>")))},
C(a,b){b.a3(0,new A.px(this))},
c2(a,b,c){return this.c.c2(0,b,c)},
J(a){var s=this
if(!s.jf(a))return!1
return s.c.J(s.a.$1(s.$ti.i("a3.K").a(a)))},
gac(){var s=this.c,r=A.n(s).i("aM<1,2>")
return A.dI(new A.aM(s,r),new A.py(this),r.i("o.E"),this.$ti.i("R<a3.K,a3.V>"))},
a3(a,b){this.c.a3(0,new A.pz(this,b))},
gE(a){return this.c.a===0},
gV(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("aq<2>")
return A.dI(new A.aq(s,r),new A.pA(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aU(a,b,c,d){return this.c.aU(0,new A.pB(this,b,c,d),c,d)},
gaY(){var s=this.c,r=A.n(s).i("aq<2>")
return A.dI(new A.aq(s,r),new A.pC(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.uq(this)},
jf(a){return this.$ti.i("a3.K").b(a)},
$iI:1}
A.px.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.py.prototype={
$1(a){var s=a.b
return new A.R(s.a,s.b,this.a.$ti.i("R<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("R<a3.K,a3.V>(R<a3.C,R<a3.K,a3.V>>)")}}
A.pz.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,R<a3.K,a3.V>)")}}
A.pA.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(R<a3.K,a3.V>)")}}
A.pB.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.U(this.c).U(this.d).i("R<1,2>(a3.C,R<a3.K,a3.V>)")}}
A.pC.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(R<a3.K,a3.V>)")}}
A.lq.prototype={
Y(a,b){return J.v(a,b)},
ad(a){return J.a7(a)}}
A.iE.prototype={
Y(a,b){var s,r,q,p
if(a===b)return!0
s=J.D(a)
r=J.D(b)
for(q=this.a;;){p=s.k()
if(p!==r.k())return!1
if(!p)return!0
if(!q.Y(s.gn(),r.gn()))return!1}},
ad(a){var s,r,q
for(s=J.D(a),r=this.a,q=0;s.k();){q=q+r.ad(s.gn())&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.et.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.M(a)
r=s.gm(a)
q=J.M(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.Y(s.h(a,o),q.h(b,o)))return!1
return!0},
ad(a){var s,r,q,p
for(s=J.M(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ad(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hM.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.BI(s.gv3(),s.gvM(),s.gvS(),A.n(this).i("hM.E"),t.S)
for(s=J.D(a),q=0;s.k();){p=s.gn()
o=r.h(0,p)
r.j(0,p,(o==null?0:o)+1);++q}for(s=J.D(b);s.k();){p=s.gn()
o=r.h(0,p)
if(o==null||o===0)return!1
r.j(0,p,o-1);--q}return q===0},
ad(a){var s,r,q
for(s=J.D(a),r=this.a,q=0;s.k();)q=q+r.ad(s.gn())&2147483647
q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.h1.prototype={}
A.hC.prototype={
gI(a){var s=this.a
return 3*s.a.ad(this.b)+7*s.b.ad(this.c)&2147483647},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.hC){s=this.a
s=s.a.Y(this.b,b.b)&&s.b.Y(this.c,b.c)}else s=!1
return s}}
A.iO.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.BI(null,null,null,t.mB,t.S)
for(r=J.D(a.gK());r.k();){q=r.gn()
p=new A.hC(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.D(b.gK());r.k();){q=r.gn()
p=new A.hC(this,q,b.h(0,q))
o=s.h(0,p)
if(o==null||o===0)return!1
s.j(0,p,o-1)}return!0},
ad(a){var s,r,q,p,o,n,m,l
for(s=J.D(a.gK()),r=this.a,q=this.b,p=this.$ti.y[1],o=0;s.k();){n=s.gn()
m=r.ad(n)
l=a.h(0,n)
o=o+3*m+7*q.ad(l==null?p.a(l):l)&2147483647}o=o+(o<<3>>>0)&2147483647
o^=o>>>11
return o+(o<<15>>>0)&2147483647}}
A.lp.prototype={
Y(a,b){var s,r=this
if(a instanceof A.cp)return b instanceof A.cp&&new A.h1(r,t.cu).Y(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iO(r,r,t.a3).Y(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.et(r,t.hI).Y(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iE(r,t.nZ).Y(a,b)
return J.v(a,b)},
ad(a){var s=this
if(a instanceof A.cp)return new A.h1(s,t.cu).ad(a)
if(t.f.b(a))return new A.iO(s,s,t.a3).ad(a)
if(t.j.b(a))return new A.et(s,t.hI).ad(a)
if(t.e7.b(a))return new A.iE(s,t.nZ).ad(a)
return J.a7(a)},
vT(a){return!0}}
A.mq.prototype={
sm(a,b){A.DO()},
t(a,b){return A.DO()}}
A.nt.prototype={
j(a,b,c){return A.J_()}}
A.cj.prototype={
R(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.cj){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gI(a){return A.uR(this.a)},
l(a){return A.as(this.a)}}
A.c2.prototype={
t(a,b){if(this.a!=null)throw A.b(A.x("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.x("add must be called once."))}}
A.lQ.prototype={
v(a){var s=new A.c2(),r=A.cX(s)
r.t(0,a)
r.q()
r=s.a
r.toString
return r}}
A.rK.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.x("Hash.add() called after close()."))
s.r=s.r+J.ap(b)
s.kY(b)},
kY(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.p9(B.f.gaa(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.M(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.aj(i,j,n,a,o)
k.e=n
return}B.f.aj(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.H(s)
s[m]=l;++m}while(m<q)
k.x3(s)}},
q(){var s,r,q,p,o,n,m,l=this
if(l.w)return
l.w=!0
s=l.r
if(s>1125899906842623)A.w(A.Y("Hashing is unsupported for messages with more than 2^53 bits."))
r=l.d.byteLength
r=((s+1+8+r-1&-r)>>>0)-s
q=new Uint8Array(r)
q[0]=128
p=s*8
o=r-8
n=J.p9(B.f.gaa(q))
m=B.c.N(p,4294967296)
n.$flags&2&&A.H(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kY(q)
s=l.a
s.t(0,new A.cj(l.p6()))
s.q()},
p6(){var s,r,q,p,o,n,m
if(B.aR===$.ky())return J.GY(B.y.gaa(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.p9(B.f.gaa(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.H(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.ow.prototype={
bV(a){var s=new Uint32Array(A.b7(A.k([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hp(new A.ox(s,r,a,q,new Uint32Array(16)))}}
A.zB.prototype={
x3(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cq[q]+s[q]>>>0)>>>0)>>>0
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
A.ox.prototype={}
A.kG.prototype={
gI(a){return A.c5(B.dq,this.d,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.li&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dq(s).l(0)+".with"+s.d*8+"bits()"
return A.dq(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.pI.prototype={}
A.iN.prototype={
gI(a){return B.u.ad(this.a)},
R(a,b){if(b==null)return!1
return b instanceof A.iN&&B.u.Y(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.jh.prototype={
l(a){return A.dq(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iG:1}
A.uo.prototype={
l(a){return A.dq(this).l(0)+"()"}}
A.jg.prototype={
gI(a){return(B.u.ad(this.b.a)^B.u.ad(this.c)^B.u.ad(this.a))>>>0},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.jg){s=B.u.Y(this.b.a,b.b.a)
s=s&&B.u.Y(this.c,b.c)&&B.u.Y(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.wk.prototype={}
A.ji.prototype={
ge1(){return this.b},
gI(a){var s=A.eA(B.dA),r=B.u.ad(this.ge1())
return(s^r)>>>0},
R(a,b){if(b==null)return!1
return b instanceof A.ji&&B.u.Y(this.ge1(),b.ge1())},
l(a){return"SecretKeyData(...)"}}
A.mZ.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.li.prototype={
ul(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge1().gm(0),f=this.d
if(g!==f)throw A.b(A.aH(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.FC(c)
r=new Uint32Array(4)
A.oZ(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.Dl(r,a.c)
p=J.D0(B.f.gaa(q),0,null)
o=a.a
n=B.u.Y(B.aP.l4(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jh())
A.AB(q,1)
n=o.length
m=B.c.N(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oZ(l,k,p,0,s)
A.AB(q,1)}j=J.bN(B.y.gaa(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.H(j)
j[k]=i^h}return j},
v0(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge1().gm(0),f=this.d
if(g!==f)throw A.b(A.aH(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.FC(d)
r=new Uint32Array(4)
A.oZ(r,0,r,0,s)
r[0]=A.by(r[0])
r[1]=A.by(r[1])
r[2]=A.by(r[2])
r[3]=A.by(r[3])
q=A.Dl(r,c)
p=J.D0(B.f.gaa(q),0,null)
o=new Uint32Array(A.b7(p))
A.AB(q,1)
n=a.length
m=(B.c.N(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.oZ(l,k,p,0,s)
A.AB(q,1)}j=J.bN(B.y.gaa(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.H(j)
j[k]=i^h}return new A.jg(j,B.aP.l4(j,b,s,r,o),c)}}
A.qK.prototype={
l(a){return"DartGcm()"},
l4(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lj(n,d,b)
A.lj(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.N(s,o),!1)
q.setUint32(4,B.c.al(s,o),!1)
q.setUint32(8,B.c.N(r,o),!1)
q.setUint32(12,B.c.al(r,o),!1)
A.lj(n,d,J.bN(B.az.gaa(q),0,null))
p=new Uint32Array(4)
A.oZ(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iN(J.bN(B.y.gaa(n),0,null))}}
A.o_.prototype={}
A.o0.prototype={}
A.qv.prototype={}
A.qL.prototype={}
A.yw.prototype={
Y(a,b){var s,r,q=J.M(a),p=J.M(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ad(a){var s,r,q,p,o
for(s=J.M(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.al(q,16)
r=(r^B.c.tb(p,o)^B.c.m4(p,16-o))>>>0}return r}}
A.mP.prototype={}
A.kS.prototype={$iBx:1}
A.kT.prototype={
hS(){if(this.w)throw A.b(A.x("Can't finalize a finalized Request."))
this.w=!0
return B.by},
l(a){return this.a+" "+this.b.l(0)}}
A.kU.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:221}
A.kV.prototype={
$1(a){return B.a.gI(a.toLowerCase())},
$S:72}
A.pr.prototype={
ox(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.P("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.P("Invalid content length "+A.r(s)+".",null))}}}
A.l_.prototype={
b5(a){return this.o4(a)},
o4(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b5=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.Dh("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hS().wV(),$async$b5)
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
f=A.t(a9,t.K)
e=b4.gmv()
d=null
if(e!=null){d=e
J.bZ(f,"content-length",d)}for(b0=b4.r,b0=new A.aM(b0,A.n(b0).i("aM<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.bZ(f,c.a,c.b)}f=A.i0(f)
f.toString
A.bd(f)
b0=l.signal
s=8
return A.a(A.a5(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b5)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.j9(a,null):null
if(a0==null&&a!=null){f=A.Dh("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.t(a9,a9)
b.headers.forEach(A.oU(new A.pu(a1)))
f=A.K8(b4,b)
a4=b.status
a6=a1
a8=a0
A.nw(b.url)
a9=b.statusText
f=new A.nc(A.Gd(f),a4,a8,a6)
f.ox(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.ah(b3)
A.Fm(a2,a3,b4)
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
return A.f($async$b5,r)},
q(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].abort()
this.b=!0}}
A.pu.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:82}
A.Ai.prototype={
$1(a){return A.hV(this.a,this.b,a)},
$S:88}
A.Ar.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.an()}},
$S:0}
A.As.prototype={
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
n=A.E(k)
m=A.ah(k)
if(!o.a.b)A.Fm(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.dt.prototype={
wV(){var s=new A.u($.C,t.jz),r=new A.aI(s,t.iq),q=new A.nV(new A.pw(r),new Uint8Array(1024))
this.a9(q.gtM(q),!0,q.ge3(),r.gu8())
return s}}
A.pw.prototype={
$1(a){return this.a.aB(new Uint8Array(A.b7(a)))},
$S:15}
A.ef.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iG:1}
A.mj.prototype={
gm(a){return this.b}}
A.uJ.prototype={
gmv(){var s,r,q,p=this,o={},n=o.a=0
p.x.a3(0,new A.uK(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.q)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.ly(q)).length+q.b+2)}return o.a+2+70+4},
hS(){var s=this,r=s.oZ()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kQ()
return new A.dt(s.bm(r))},
bm(a){return this.q_(a)},
q_(a){var $async$bm=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.v(f+"\r\n")
d=B.e.v(f+"--\r\n")
f=m.x,f=new A.aM(f,A.n(f).i("aM<1,2>")).gu(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bW(A.dZ(e),$async$bm,r)
case 5:k=l.b
j=$.Br()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.CY()
s=6
q=[1]
return A.bW(A.dZ(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bm,r)
case 6:s=7
q=[1]
return A.bW(A.dZ(B.e.v(k)),$async$bm,r)
case 7:s=8
q=[1]
return A.bW(A.dZ(B.b2),$async$bm,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bW(A.dZ(e),$async$bm,r)
case 12:s=13
q=[1]
return A.bW(A.dZ(B.e.v(m.ly(g))),$async$bm,r)
case 13:if(g.f)A.w(A.x("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bW(A.Jy(g.e),$async$bm,r)
case 14:s=15
q=[1]
return A.bW(A.dZ(B.b2),$async$bm,r)
case 15:case 10:f.length===l||(0,A.q)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bW(A.dZ(d),$async$bm,r)
case 16:case 1:return A.bW(null,0,r)
case 2:return A.bW(o.at(-1),1,r)}})
var s=0,r=A.Fg($async$bm,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.Fv(r)},
qA(a,b){var s,r=$.Br()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.CY()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
ly(a){var s=a.d.l(0),r=$.Br(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
oZ(){var s,r=J.DD(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cG[$.Gn().cG(66)]
return"dart-http-boundary-"+A.dR(r,0,null)}}
A.uK.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.qA(a,b)).length+B.e.v(b).length+2)},
$S:30}
A.wb.prototype={
gmv(){return this.y.length},
gjT(){var s,r
if(this.gcn()==null||!this.gcn().c.a.J("charset"))return B.l
s=this.gcn().c.a.h(0,"charset")
s.toString
r=A.HB(s)
return r==null?A.w(A.a8('Unsupported encoding "'+s+'".',null,null)):r},
hS(){this.kQ()
return new A.dt(A.C7(this.y,t.L))},
gcn(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.I8(s)},
scn(a){this.r.j(0,"content-type",a.l(0))},
p9(){if(!this.w)return
throw A.b(A.x("Can't modify a finalized Request."))}}
A.jq.prototype={}
A.nc.prototype={}
A.ig.prototype={}
A.fD.prototype={
l(a){var s=new A.a2(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a3(0,new A.uu(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.us.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.wG(null,j),h=$.GX()
i.iF(h)
s=$.GW()
i.f4(s)
r=i.gkb().h(0,0)
r.toString
i.f4("/")
i.f4(s)
q=i.gkb().h(0,0)
q.toString
i.iF(h)
p=t.N
o=A.t(p,p)
for(;;){p=i.d=B.a.eg(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gM():n
if(!m)break
p=i.d=h.eg(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gM()
i.f4(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.f4("=")
n=i.d=s.eg(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gM()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.M5(i)
n=i.d=h.eg(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gM()
o.j(0,p,k)}i.v9()
return A.BS(r,q,o)},
$S:110}
A.uu.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.GU()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.Ga(b,$.GJ(),new A.ut(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:30}
A.ut.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:43}
A.AT.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:43}
A.qq.prototype={
$1(a){return a.b===this.a},
$S:117}
A.qr.prototype={
$1(a){return a.b===this.a},
$S:118}
A.l9.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.O(s,A.n(s).c)
B.b.aE(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.O(s,A.n(s).c)
B.b.aE(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.cE.prototype={}
A.l5.prototype={
ga1(){return"committedChange"},
p(){var s,r=this,q=A.t(t.N,t.X)
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
B.b.aE(s)
q.j(0,"changedFields",s)
return q}}
A.lc.prototype={
ga1(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jw.prototype={
ga1(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.lK.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
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
A.lC.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"size",r.c)
q.j(0,"field",r.d)
q.j(0,"name",r.e)
s=r.f
if(s!=null)q.j(0,"expectedSha256",s)
if(r.r)q.j(0,"allowVolatileBlobs",!0)
return q}}
A.lD.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.lF.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lB.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lO.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.lI.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lE.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.lM.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lG.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.lv.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.n9.prototype={
p(){return B.o}}
A.lN.prototype={
ga1(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.lL.prototype={
ga1(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fw.prototype={
ga1(){return"fileRefs"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.lJ.prototype={
ga1(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fv.prototype={
ga1(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.ft.prototype={
ga1(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.h7.prototype={
ga1(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fu.prototype={
ga1(){return"fileChunk"},
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",A.kr(r.b))
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.uL.prototype={}
A.iU.prototype={}
A.iX.prototype={}
A.iV.prototype={}
A.iY.prototype={}
A.iR.prototype={}
A.iS.prototype={}
A.iQ.prototype={}
A.iW.prototype={}
A.iT.prototype={}
A.Ao.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:13}
A.w2.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.t(k,j),h=t.d,g=A.k([],h)
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
A.w3.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:13}
A.w4.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.V("Malformed query conditions."))
s=A.k([],t.cM)
for(r=J.D(a);r.k();)s.push(A.DW(r.gn()))
return s},
$S:128}
A.eB.prototype={
p(){var s,r,q,p,o=this,n=A.t(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.q)(s),++p)r.push(A.kr(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.kr(o.c))
return n}}
A.w_.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:13}
A.w0.prototype={
$1(a){return a.b===this.a},
$S:129}
A.aY.prototype={
a5(){return"QueryConditionOp."+this.b}}
A.cL.prototype={}
A.vs.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:13}
A.vr.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.V("Malformed predicate children."))
s=A.k([],t.eK)
for(r=J.D(a);r.k();)s.push(A.BU(r.gn()))
return s},
$S:139}
A.iK.prototype={
p(){var s=A.t(t.N,t.X)
s.j(0,"kind","leaf")
s.C(0,this.a.p())
return s}}
A.j4.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.i8.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.i9.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mJ.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.w1.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:13}
A.cA.prototype={
a5(){return"AggregateFn."+this.b}}
A.wi.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.wj.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:13}
A.mO.prototype={}
A.mu.prototype={
p(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.l0.prototype={
p(){return B.o}}
A.lR.prototype={
p(){return B.o}}
A.l3.prototype={
p(){return B.o}}
A.lP.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mS.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mk.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.Kt(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mK.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lf.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.le.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lr.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lU.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kH.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.ly.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mY.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dS.prototype={
a5(){return"TransactionDurability."+this.b}}
A.nj.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.nk.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nm.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.no.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nn.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nl.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nD.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.nE.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.nC.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kJ.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.nB.prototype={
p(){return B.o}}
A.nz.prototype={
p(){return B.o}}
A.mG.prototype={
p(){return B.o}}
A.l6.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.mT.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lb.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.la.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.mQ.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.kE.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.kF.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.ld.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.am.prototype={}
A.fL.prototype={
ga1(){return"ok"},
p(){return B.o}}
A.ie.prototype={
ga1(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.lS.prototype={
ga1(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.fY.prototype={
ga1(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.fZ.prototype={
ga1(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fH.prototype={
ga1(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fT.prototype={
ga1(){return"queryRows"},
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fn.prototype={
ga1(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fo.prototype={
ga1(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fB.prototype={
ga1(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fb.prototype={
ga1(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fs.prototype={
ga1(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.h0.prototype={
ga1(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.k([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.mX.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fl.prototype={
ga1(){return"conflicts"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fk.prototype={
ga1(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hd.prototype={
ga1(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hl.prototype={
ga1(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fQ.prototype={
ga1(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fi.prototype={
ga1(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.jz.prototype={
l(a){return"WireException: "+this.a},
$iG:1}
A.Bn.prototype={
$1(a){return a.a===this.a},
$S:144}
A.Bo.prototype={
$2(a,b){return B.a.a_(a.a,b.a)},
$S:145}
A.mC.prototype={
a5(){return"PlatformProfile."+this.b}}
A.n8.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.wt.prototype={
$1(a){return J.c_(a.gaY())},
$S:42}
A.wu.prototype={
$1(a){return B.a.F(a,"ENABLE_FTS5")},
$S:10}
A.ih.prototype={
a5(){return"ChangeOrigin."+this.b}}
A.du.prototype={
a5(){return"ChangeAction."+this.b}}
A.aT.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
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
B.b.aE(s)
q.j(0,"changedFields",s)
return q},
R(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aT))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.t.Y(b.e,s.e)&&B.t.Y(b.f,s.f)&&B.t.Y(b.r,s.r)},
gI(a){var s=this
return A.c5(s.a,s.b,s.c,s.d,B.t.ad(s.e),B.t.ad(s.f),B.t.ad(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a1.prototype={}
A.pF.prototype={
uY(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
uZ(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.pG.prototype={}
A.pH.prototype={}
A.ri.prototype={}
A.pe.prototype={
v_(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cG(256)
q=this.b.v0(new Uint8Array(A.b7(a)),b,m,this.c)
s=q.a
p=s.length
o=29+p
n=new Uint8Array(o)
n[0]=1
B.f.au(n,1,13,q.c)
p=13+p
B.f.au(n,13,p,s)
B.f.au(n,p,o,q.b.a)
return n},
uk(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.P("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.x("Unsupported ciphertext version 0x"+B.a.ie(B.c.kv(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b7(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b7(B.f.b6(a,n)))
q=new Uint8Array(A.b7(B.f.T(a,13,n)))
try{n=this.b.ul(new A.jg(q,new A.iN(r),s),b,this.c)
return n}catch(o){if(A.E(o) instanceof A.jh)throw A.b(A.x("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d1.prototype={
a5(){return"KindViolation."+this.b}}
A.AD.prototype={
$2(a,b){return B.a.a_(a.a,b.a)},
$S:157}
A.l8.prototype={
a5(){return"ConflictAlgorithm."+this.b}}
A.ip.prototype={
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
if(l!=null)l.unregister(m.d)}}}o.ab(0)
p.b.q()
case 1:return A.e(q,r)}})
return A.f($async$q,r)},
cg(a){var s,r=this.a,q=r.H(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(s!=null)s.q()}q=this.b.wl(a)
r.j(0,a,q)
return q},
kH(a,b){var s=this.cg(a).kI(new A.bQ(b)),r=A.n(s).i("X<K.E,I<l,j?>>")
r=A.O(new A.X(s,new A.rf(),r),r.i("Z.E"))
return r},
o3(a){return this.kH(a,B.k)},
f3(a,b){this.cg(a).e6(new A.bQ(b))},
jU(a){return this.f3(a,B.k)},
aD(a,b){return this.v6(a,b)},
O(a){return this.aD(a,B.k)},
v6(a,b){var s=0,r=A.h(t.H),q=this
var $async$aD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.f3(a,b)
return A.e(null,r)}})
return A.f($async$aD,r)},
ai(a,b){return this.wx(a,b)},
b1(a){return this.ai(a,B.k)},
wx(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ai=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kH(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ai,r)},
bP(a,b,c,d,e,f,g){return this.wu(a,b,c,d,e,f,g)},
aI(a,b,c,d){return this.bP(a,null,b,null,null,c,d)},
ek(a,b,c,d,e){return this.bP(a,b,c,null,null,d,e)},
n2(a,b,c,d){return this.bP(a,b,null,null,null,c,d)},
ce(a,b,c){var s=null
return this.bP(a,s,s,s,s,b,c)},
wr(a,b,c,d,e){return this.bP(a,b,c,d,e,null,null)},
wt(a,b,c,d,e,f){return this.bP(a,b,c,null,d,e,f)},
wq(a,b,c,d){return this.bP(a,null,null,null,b,c,d)},
ws(a,b,c,d,e){return this.bP(a,null,b,null,c,d,e)},
wu(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bP=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.B(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.k:g
q=p.ai(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bP,r)},
c9(a,b,c,d){return this.vP(0,b,c,d)},
aC(a,b,c){return this.c9(0,b,c,null)},
vP(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$c9=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.P("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dI(new A.T(c,n),new A.re(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.af(c.a,"?",!1,m),", ")
j=A.Dn(d)
o=o.i("aq<2>")
o=A.O(new A.aq(c,o),o.i("o.E"))
p.f3("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ao(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c9,r)},
L(a,b,c,d){return this.x0(a,b,c,d)},
x0(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dI(new A.T(b,n),new A.rg(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.Dn(null)+' "'+a+'" SET '+m
o=A.O(new A.aq(b,o.i("aq<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.C(o,d)}p.f3(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
X(a,b,c){return this.um(a,b,c)},
um(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$X=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.C(n,c)}p.f3(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$X,r)},
uc(a,b,c){this.b.ud(B.bs,!0,!1,new A.rd(b),c)},
a2(a,b){return this.wX(a,b,b)},
wX(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jU("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.jU("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jU("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$iqN:1}
A.rf.prototype={
$1(a){return A.b9(a,t.N,t.X)},
$S:163}
A.re.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.rg.prototype={
$1(a){return'"'+a+'" = ?'},
$S:6}
A.rd.prototype={
$1(a){var s=a.gm(0)===0?null:a.gG(a)
return this.a.$1(s)},
$S:177}
A.q3.prototype={}
A.io.prototype={
jJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.k([],t.s),c=A.aN(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=$.CR()
if(!k.b.test(l))A.w(A.aP('Field "'+l+u.Z))
if(B.bd.F(0,l))throw A.b(A.aP('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.t(0,l))throw A.b(A.aP('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aP(e+l+'" cannot be unique.'))
if(B.b.bL(o,new A.rc(m)))throw A.b(A.aP(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.F(k,l)}else k=!1
if(k)throw A.b(A.aP(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.q)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.at(l,l.gm(0),k.i("at<K.E>")),k=k.i("K.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.F(0,j)&&!B.bd.F(0,j))throw A.b(A.aP('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.af.Y(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.Hy(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.rA(u.r))
if(q.b&&!A.E3(r.a,3,34))throw A.b(A.rA("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.at(r,r.gm(0),p.i("at<K.E>")),p=p.i("K.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.F(0,o))throw A.b(A.aP('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gac(),r=r.gu(r);r.k();){q=r.gn()
A.Dv(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aP('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aP('Ref field "'+m.a+'" must declare its target store.'))}return new A.q3(f.p5(a),f.p0(a),f.p_(a),d)},
p5(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.k(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.gkM()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.rb(),A.a0(k).i("X<1,l>")).B(0,", ")
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
p0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.k([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("X<K.E,l>")
j=A.O(new A.X(l,A.AK(),k),k.i("Z.E"))
if(!l.F(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.b1?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.B(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}else{l=l.B(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.q)(r),++n){h=r[n]
if(h.b!==B.J)continue
if(B.b.bL(s,new A.ra(h)))continue
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
p_(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.q
s=A.k([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("X<K.E,l>")
n=A.O(new A.X(p,A.AK(),o),o.i("Z.E"))
m=new A.r9(r,a0.c)
l=new A.X(p,new A.r6(m),o).B(0,f)
k=new A.X(p,new A.r7(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.z(r+"_ai",e,d)
o=A.z(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.z(r+"_ad",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.z(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.r8(),A.a0(n).i("X<1,l>")).B(0," OR ")
p=A.z(r+"_au",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
h=A.z(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.rc.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:66}
A.rb.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:6}
A.ra.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:66}
A.r9.prototype={
$2(a,b){return A.FU(this.a,this.b,a,b)},
$S:180}
A.r6.prototype={
$1(a){return this.a.$2("new",a)},
$S:6}
A.r7.prototype={
$1(a){return this.a.$2("old",a)},
$S:6}
A.r8.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:6}
A.dH.prototype={
l(a){return A.dq(this).l(0)+": "+this.a},
$iG:1}
A.eJ.prototype={}
A.eI.prototype={}
A.ey.prototype={}
A.ff.prototype={}
A.fO.prototype={}
A.fy.prototype={}
A.cO.prototype={}
A.fW.prototype={}
A.h_.prototype={}
A.eD.prototype={}
A.hh.prototype={}
A.fA.prototype={}
A.h5.prototype={}
A.fG.prototype={}
A.fj.prototype={}
A.ek.prototype={}
A.fV.prototype={}
A.Bh.prototype={
$1(a){if(typeof a!="string")return a
return this.a.ei(a)},
$S:25}
A.u4.prototype={}
A.ls.prototype={
a5(){return"DurabilityClass."+this.b}}
A.na.prototype={}
A.vp.prototype={
bT(a){var s,r=this.a
if(!r.J(a))return null
s=r.H(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.oT(s)
r.toString
t.G.a(r)}return r},
kJ(a,b){var s,r=this.a
if(r.a>=256)r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(b==null)s=null
else{s=A.oT(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vQ(a){var s,r,q,p=a.a
if(p===0){this.a.ab(0)
return}s=this.a
if(p>=s.a){s.ab(0)
return}for(p=A.hB(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.H(0,q==null?r.a(q):q)}}}
A.m6.prototype={
aP(a){return this.wH(a)},
wH(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dx
h=a.a
if(i.J(h))throw A.b(A.aP('Duplicate store name "'+h+'" in this open call.'))
p=A.C3(a)
o=q.w
if(o.e===B.aA&&p.b.length!==0)throw A.b(new A.hh('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fR(a,p),$async$aP)
case 2:n=new A.io(o).jJ(a)
o=a.w
if(o!=null)A.MA(q.r,h,o.c)
o=q.r
s=3
return A.a(o.aI("lp_stores",1,"store = ?",[h]),$async$aP)
case 3:m=c
l=J.M(m)
s=l.gE(m)?4:6
break
case 4:s=7
return A.a(o.O(n.b),$async$aP)
case 7:l=n.c,k=l.length,j=0
case 8:if(!(j<l.length)){s=10
break}s=11
return A.a(o.O(l[j]),$async$aP)
case 11:case 9:l.length===k||(0,A.q)(l),++j
s=8
break
case 10:l=n.d,k=l.length,j=0
case 12:if(!(j<l.length)){s=14
break}s=15
return A.a(o.O(l[j]),$async$aP)
case 15:case 13:l.length===k||(0,A.q)(l),++j
s=12
break
case 14:l=a.b
k=q.ch
s=16
return A.a(o.aC(0,"lp_stores",A.m(["store",h,"table_name",h,"schema_ver",l,"definition_json",B.h.a7(a.p(),null),"created_at",k.$0()],t.N,t.X)),$async$aP)
case 16:s=17
return A.a(A.fF(o,0,0,"create:"+h,k,l),$async$aP)
case 17:s=5
break
case 6:l=J.S(l.gG(m),"schema_ver")
l.toString
A.ao(l)
k=a.b
if(l>k)throw A.b(A.E0('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fE(q,a,l),$async$aP)
case 20:case 19:s=21
return A.a(q.bI(a),$async$aP)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a7(a.p(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aP)
case 22:case 5:i.j(0,h,new A.na(a,p,new A.vp(A.t(t.N,t.b))))
s=23
return A.a(q.dP(h,p),$async$aP)
case 23:return A.e(null,r)}})
return A.f($async$aP,r)},
fR(a,b){return this.oQ(a,b)},
oQ(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aI("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fR)
case 3:j=d
if(J.bA(j)){s=1
break}o=null
try{n=J.S(J.c_(j),"v")
o=A.IG(typeof n=="string"?B.h.av(n,null):n)}catch(i){if(A.E(i) instanceof A.dH){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.as(B.m.v(B.e.v(A.aj(o.p()))).a)!==A.as(B.m.v(B.e.v(A.aj(b.p()))).a))throw A.b(A.aP('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fR,r)},
dP(a,b){return this.rg(a,b)},
rg(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.aj(b.p())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aI("lp_meta",1,"k = ?",[p]),$async$dP)
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
hD(a){return this.tZ(a)},
tZ(a){var s=0,r=A.h(t.y),q,p=this,o
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
bI(a){return this.rI(a)},
rI(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bI=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.ek("lp_stores",A.k(["definition_json"],t.s),1,"store = ?",[a1]),$async$bI)
case 3:a2=a6
if(J.bA(a2)){s=1
break}o=null
try{n=J.S(J.c_(a2),"definition_json")
m=typeof n=="string"?B.h.av(n,null):n
l=m
l.toString
k=t.X
o=A.pL(A.b9(t.f.a(l),t.N,k),k)}catch(a4){if(A.E(a4) instanceof A.cO){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.af.Y(i.a,h.a)&&i.b===h.b&&i.c.R(0,h.c)
g=l}}if(g){s=1
break}f=new A.jn()
$.kz()
f.az()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a0.O("DROP TRIGGER IF EXISTS "+('"'+A.z(a1+d,'"','""')+'"')),$async$bI)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a0.O("DROP TABLE IF EXISTS "+('"'+A.z(a1+"_fts",'"','""')+'"')),$async$bI)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.io(p.w).jJ(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.O(l[e]),$async$bI)
case 16:case 14:l.length===k||(0,A.q)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.z(l,'"','""')
s=17
return A.a(a0.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.z(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bI)
case 17:k=h.a
c=k.$ti.i("X<K.E,l>")
b=new A.X(k,A.AK(),c).B(0,", ")
a=new A.X(k,new A.u5(a3,h),c).B(0,", ")
l=A.z(l,'"','""')
s=18
return A.a(a0.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.z(a1,'"','""')+'"')),$async$bI)
case 18:case 12:if(f.b==null)f.b=$.mE.$0()
l=a3.b
s=19
return A.a(A.fF(a0,f.gmD(),l,"fts:"+a1,p.ch,l),$async$bI)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bI,r)},
hL(a){return this.uo(a)},
uo(a){var s=0,r=A.h(t.H),q=this,p
var $async$hL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hL)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hL,r)},
aw(a){var s=this.dx.h(0,a)
if(s==null)throw A.b(A.x('No store "'+a+'" registered in this LocalPocket.'))
return s},
aX(a,b,c){var s
if(A.np(this)!=null)A.w(A.x(u.L))
s=this.b
s===$&&A.y()
return s.aX(a,b,c)},
a2(a,b){return this.aX(a,B.p,b)},
nd(a,b){++this.y.e
return this.r.aD(a,B.k)},
ne(a,b){this.y.n4()
return this.r.ai(a,b)},
e0(a){return this.tU(a)},
tT(){return this.e0(null)},
tU(a){var s=0,r=A.h(t.H),q=this,p
var $async$e0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e0)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$e0)
case 6:case 3:return A.e(null,r)}})
return A.f($async$e0,r)},
fD(){var s=0,r=A.h(t.H),q=this
var $async$fD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fD)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fD,r)},
iu(){var s=0,r=A.h(t.H),q=this
var $async$iu=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iu)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iu,r)},
it(){var s=0,r=A.h(t.H),q=this
var $async$it=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.r.O("VACUUM"),$async$it)
case 2:return A.e(null,r)}})
return A.f($async$it,r)},
fn(){return this.wm()},
wm(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.u8(o),t.P),$async$fn)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
dm(a){return this.wT(a)},
wT(a){var s=0,r=A.h(t.H),q=this,p
var $async$dm=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dx,p=new A.bF(p,p.r,p.e,A.n(p).i("bF<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.e4(p.d,a),$async$dm)
case 4:s=2
break
case 3:s=5
return A.a(q.fn(),$async$dm)
case 5:s=6
return A.a(q.fD(),$async$dm)
case 6:s=7
return A.a(q.tT(),$async$dm)
case 7:return A.e(null,r)}})
return A.f($async$dm,r)},
e4(a,b){return this.u7(a,b)},
u7(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$e4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.ch.$0()
h=i-B.c.N(b.a,1000)
j.a=0
o=p.aw(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ai("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$e4)
case 5:l=d
if(J.bA(l)){s=4
break}if(A.np(p)!=null)A.w(A.x(u.L))
k=p.b
k===$&&A.y()
s=6
return A.a(k.aX(new A.u7(j,p,l,a,h,o),B.p,n),$async$e4)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e4,r)},
q(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$q=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.dy){s=1
break}n.dy=!0
m=n.a$
m.a.q()
m.b.q()
n.fr.b.ab(0)
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
A.u5.prototype={
$1(a){return A.FU(this.a.a,this.b.c,"",a)},
$S:6}
A.u8.prototype={
$1(a){return this.nw(a)},
nw(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=J
s=2
return A.a(l.b1("SELECT o.store, o.record_id FROM lp_outbox o LEFT JOIN lp_sync_row s ON s.store = o.store AND s.record_id = o.record_id WHERE s.record_id IS NULL OR s.sync_state = 'clean'"),$async$$1)
case 2:p=k.D(c),o=q.a
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"store")
m.toString
A.F(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.X("lp_outbox","store = ? AND record_id = ?",[m,A.F(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.u7.prototype={
$1(a){return this.nv(a)},
nv(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.D(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.y,j=q.e,i=q.f,h=q.b,g=h.ax,h=h.ay
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.F(f)
a1=J
s=4
return A.a(a0.ai("SELECT b.id FROM "+('"'+A.z(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.bA(a4)){s=2
break}s=5
return A.a(a0.ai("SELECT * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.M(e)
c=d.gV(e)?A.ce(i,d.gG(e),g,h):null
s=6
return A.a(A.cz(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.X(n,"id = ?",[f]),$async$$1)
case 7:d=A.ar([f],m)
l.push(new A.a1(n,d))
k.r+=d.a
if(c!=null){d=A.n(c).i("T<1>")
b=d.i("ak<o.E>")
a=A.mb(b.i("o.E"))
a.C(0,new A.ak(new A.T(c,d),new A.u6(),b))
a2.bc(new A.aT(n,f,B.H,B.aV,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.u6.prototype={
$1(a){return a!=="id"},
$S:10}
A.nY.prototype={
wN(){var s,r,q=this,p=new A.aI(new A.u($.C,t.D),t.h)
q.e=p
s=q.a.a
s.d.aW(new A.yq(q,p),t.H)
r=s.as
s=q.gvj()
if(r.a>0)A.cR(r,s)
else A.cR(B.D,s)},
jX(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.an()},
cD(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cD=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.e;++b2.b
b2.c+=b1}b3=new A.jn()
$.kz()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aW&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.nd("PRAGMA synchronous=FULL",null),$async$cD)
case 5:b1.b="FULL"
case 4:i=A.k([],t.gi)
h=A.k([],t.eb)
g=A.k([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.yp(m,i,h,l,g),t.P),$async$cD)
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
if((b8.a.a&30)!==0)A.w(A.x("Future already completed"))
b8.am(A.f0(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.w(A.x("Future already completed"))
b8.aK(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dx,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.vQ(a0.b)
b6.uY(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a1=f[b7]
b6.uZ(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.E(c2)
a3=A.ah(c2)
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
if((b6.a.a&30)!==0)A.w(A.x("Future already completed"))
b6.am(A.f0(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.w(A.x("Future already completed"))
b6.am(A.f0(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.nd("PRAGMA synchronous=NORMAL",null),$async$cD)
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
case 16:case 12:f=b2.e
a4=k.guX();++f.a
f.d+=a4
b1.qR()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.q)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.w(A.x("Future already completed"))
a4.am(A.f0(new A.bk("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cD,r)}}
A.yq.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cD(),$async$$0)
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
$S:4}
A.yp.prototype={
$1(a){return this.nS(a)},
nS(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.Cc(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.p4(new A.yn(a,a0),null,A.m([$.kB(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.eX([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.E(a1)
l=A.ah(a1)
o.e.push(new A.eX([B.b.gap(a.c),null,m,l]))
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
return A.a(A.p4(new A.yo(a0,k),null,A.m([$.kB(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.eX([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.E(a2)
h=A.ah(a2)
e.push(new A.eX([k,null,i,h]))
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
$S:48}
A.yn.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:49}
A.yo.prototype={
$0(){return this.a.a2(new A.ym(this.b),t.z)},
$S:49}
A.ym.prototype={
$1(a){return this.a.a.$1(a)},
$S:188}
A.hr.prototype={}
A.wa.prototype={}
A.wX.prototype={
aX(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.u($.C,t._)
r.c.push(new A.hr(a,new A.aI(s,t.jk)))
return s.W(new A.x3(c),c)}return this.td(a,b,c)},
td(a,b,c){var s,r,q,p=this
if(p.a.as.a>0){s=p.c
if(s!=null)s.jX()}s=A.k([],t.i4)
r=new A.nY(p,b,s)
p.c=r
r.wN()
q=new A.u($.C,t._)
s.push(new A.hr(a,new A.aI(q,t.jk)))
return q.W(new A.x_(c),c)},
wy(a,b){var s,r=this.a
if(r.as.a>0){s=this.c
if(s!=null)s.jX()}return r.d.aW(new A.x2(this,a,b),b)},
qR(){if(++this.d<64)return
this.d=0
A.cR(B.D,new A.wZ(this))}}
A.x3.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.x_.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.x2.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.x1(s,this.b,r),r)},
$S(){return this.c.i("A<0>()")}}
A.x1.prototype={
$1(a){return this.nR(a,this.c)},
nR(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.Cc(p.a.a.a,a,A.k([],t.gi),!0,null)
n=p.c
m=t.X
q=A.p4(new A.x0(p.b,o,n),null,A.m([$.kB(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("A<0>(qN)")}}
A.x0.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.wZ.prototype={
$0(){this.a.a.a.iu().ms(new A.wY())},
$S:0}
A.wY.prototype={
$1(a){},
$S:17}
A.eY.prototype={$iG:1}
A.oG.prototype={}
A.hG.prototype={}
A.tj.prototype={
oy(a){var s=this,r=s.a.a.a$.b
r=new A.b0(r,A.n(r).i("b0<1>")).aT(new A.tD(s))
s.c!==$&&A.cf()
s.c=r},
vn(a){var s,r,q=this
A:{if(a instanceof A.mu){s=q.he(a.a,a.b)
break A}if(a instanceof A.l0){s=A.bj(q.fS(),t.V)
break A}if(a instanceof A.lR){s=A.bj(new A.lS(!0,q.a.c.a),t.V)
break A}if(a instanceof A.l3){s=q.q().W(new A.tE(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lP){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.tF(s,q),new A.tG())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mS){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.tR(s,q),new A.tY())
break A}if(a instanceof A.mk){s=q.qN(a.a,a.b,a.c)
break A}if(a instanceof A.mK){s=q.r7(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lf){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.tZ(s,q),A.FI())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.le){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.u_(s,q),A.FI())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lr){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.u0(s,q),A.LR())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lU){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.u1(s,q),A.LT())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kH){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bw(r,new A.u2(s,q),A.LQ())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ly){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.u3(s,q),A.LS())
break A}if(a instanceof A.mY){s=q.t_(a.a,a.b,a.c)
break A}if(a instanceof A.nj){s=q.oT(a.a,a.b)
break A}if(a instanceof A.nk){s=q.eT(a.a,!0)
break A}if(a instanceof A.nm){s=q.eT(a.a,!1)
break A}if(a instanceof A.no){s=q.hm(a.a,a.b)
break A}if(a instanceof A.nn){s=q.hl(a.a,a.b)
break A}if(a instanceof A.nl){s=q.hj(a.a,a.b)
break A}if(a instanceof A.nD){s=q.ht(a.a,a.b)
break A}if(a instanceof A.nE){s=q.tx(a.a,a.b)
break A}if(a instanceof A.nC){s=q.jB(a.a)
break A}if(a instanceof A.kJ){s=q.a.a.e0(a.a).W(new A.tH(),t.V)
break A}if(a instanceof A.nB){s=q.a.a.fD().W(new A.tI(),t.V)
break A}if(a instanceof A.nz){s=q.a.a.it().W(new A.tJ(),t.V)
break A}if(a instanceof A.mG){s=q.a.a.fn().W(new A.tK(),t.V)
break A}if(a instanceof A.l6){s=q.a.a.e4(a.a,A.dw(0,a.b,0)).W(new A.tL(),t.V)
break A}if(a instanceof A.mT){s=q.a.a.dm(A.dw(0,a.a,0)).W(new A.tM(),t.V)
break A}if(a instanceof A.lb){s=q.a.a.cy
s===$&&A.y()
s=s.fd(a.a).W(new A.tN(q),t.V)
break A}if(a instanceof A.la){s=q.a.a.cy
s===$&&A.y()
s=s.dt(a.a,a.b).W(new A.tO(q),t.V)
break A}if(a instanceof A.mQ){s=q.a.a.cy
s===$&&A.y()
s=s.en(a.b,a.c,a.a).W(new A.tP(),t.V)
break A}if(a instanceof A.kE){s=q.a.a.cy
s===$&&A.y()
s=s.eV(a.a,a.b).W(new A.tQ(),t.V)
break A}if(a instanceof A.kF){s=q.a.a.cy
s===$&&A.y()
s=s.dZ(a.a,a.b).W(new A.tS(),t.V)
break A}if(a instanceof A.ld){s=q.ty(a.a)
break A}if(a instanceof A.lC){s=q.j1(a.a,a.b,a.c,a.d,a.e,a.f,a.r)
break A}if(a instanceof A.lD){s=q.j2(a.a,a.b)
break A}if(a instanceof A.lF){s=q.h0(a.a)
break A}if(a instanceof A.lB){s=q.j0(a.a)
break A}if(a instanceof A.lO){s=q.a.a.db
s===$&&A.y()
s=s.ee(a.c,a.b,a.a).W(new A.tT(q),t.V)
break A}if(a instanceof A.lI){s=q.h1(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.lE){s=q.j3(a.a,a.b)
break A}if(a instanceof A.lM){s=q.a.a.db
s===$&&A.y()
s=s.ft(0,a.c,a.d,a.b,a.e,a.a).W(new A.tU(),t.V)
break A}if(a instanceof A.lG){s=q.a.a.db
s===$&&A.y()
s=s.bg(A.dw(0,a.a,0),A.dw(0,a.b,0)).W(new A.tV(),t.V)
break A}if(a instanceof A.lv){s=q.a.a.db
s===$&&A.y()
s=s.cB(a.a).W(new A.tW(),t.V)
break A}if(a instanceof A.n9){s=q.a.a.db
s===$&&A.y()
s=s.gi4().W(new A.tX(),t.V)
break A}throw A.b(A.fU(u.P))}return s},
he(a,b){return this.r5(a,b)},
r5(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$he=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dx,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.pL(a1[k],l)
i=j.a
s=!m.J(i)?6:8
break
case 6:s=9
return A.a(n.aP(j),$async$he)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.w(A.x('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.C3(j)
e=new A.a2("")
A.cg(e,g.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cX(c)
b.t(0,d)
b.q()
b=A.as(c.a.a)
e=new A.a2("")
A.cg(e,f.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
a=A.cX(c)
a.t(0,d)
a.q()
if(b!==A.as(c.a.a))throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.w(A.x('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a2("")
A.cg(e,h.c.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cX(c)
b.t(0,d)
b.q()
b=a0!==A.as(c.a.a)
d=b}else d=!1
if(d)throw A.b(A.x('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.q)(a1),++k
s=3
break
case 5:q=B.n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$he,r)},
fS(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$fS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.c
k=J.c_(B.b.gG(m.b.o3("PRAGMA journal_mode")).gaY())
m=m.a.db
m===$&&A.y()
s=3
return A.a(m.gi4(),$async$fS)
case 3:o=b
m=l.e===B.aA
n=m?"opfs":"file"
q=new A.ie(l.a,l.b,l.c,l.d,m,n,o,J.a_(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
dD(a,b){var s,r,q,p=this.a.a,o=p.aw(a)
if(b!=null){s=this.d2(b)
r=A.DA(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.w(A.x('Transaction session "'+b+'" has no executor.'))
return new A.fh(p,o,q.b,this.d2(b).r)}return new A.fh(p,o,null,null)},
pb(a){return this.dD(a,null)},
qN(a,b,c){return this.bw(c,new A.tr(this,a,c,b),new A.ts())},
ba(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.dD(a,c),e=t.fC,d=new A.mI(f.a,f.b.a,f.c,A.k([],e),A.k([],e),A.k([],t.k),A.k([],t.fi),g,!1,g,!1,!1,g,!1,!1)
for(f=b.a,e=f.length,s=0;s<f.length;f.length===e||(0,A.q)(f),++s)d=this.oP(d,f[s])
for(f=b.b,e=f.length,r=t.N,q=t.X,p=t.d,s=0;s<f.length;f.length===e||(0,A.q)(f),++s){o=f[s]
n=A.k([],p)
for(m=B.b.gu(o);m.k();){l=m.gn()
if(l.b===B.bc)n.push(A.m([l.a,l.c],r,q))}d=d.wi(n)}k=b.c
if(k!=null){f=A.Ba(k)
d.jC(f)
A.Cu(f)
j=A.Al(f,!0)
i=d.fU()
i.d.push(new A.b_(j.a,j.b))
i.f.push(f)
d=i}for(f=b.d,e=f.length,s=0;s<f.length;f.length===e||(0,A.q)(f),++s,d=i){h=f[s]
q=h.a
d.cR(q)
i=d.fU()
i.r.push(new A.cl(q,h.b))}f=b.r
if(f!=null)d=d.lf(A.bG(f,!0,r))
if(b.w)d=d.ps(!0)
if(b.x)d=d.pt(!0)
if(b.f)d=d.pq(!0)
else{f=b.e
if(f!=null){if(f<0)A.w(A.ay("Limit must be non-negative, got "+A.r(f)+".",g))
d=d.pu(f)}}return d},
oP(a,b){var s
switch(b.b.a){case 0:return a.xd(0,b.a,b.c)
case 1:return a.xl(0,b.a,b.c)
case 2:return a.xe(0,b.a,b.c)
case 3:return a.xf(0,b.a,b.c)
case 4:return a.xj(0,b.a,b.c)
case 5:return a.xk(0,b.a,b.c)
case 6:return a.xg(0,b.a,b.d)
case 7:s=b.d
if(s==null)s=B.k
if(s.length!==2)throw A.b(A.P("between requires exactly two values.",null))
return a.xa(0,b.a,new A.a4(s[0],s[1]))
case 8:return a.xm(0,b.a,A.a6(b.c))
case 9:return a.xc(0,b.a,A.a6(b.c))
case 10:return a.xb(0,b.a,A.a6(b.c))
case 11:return a.xi(0,b.a,!0)
case 12:return a.xh(0,b.a,!0)}},
r7(a,b,c){return this.bw(c,new A.tt(this,b,a,c),new A.tu())},
t_(a,b,c){return this.bw(c,new A.tx(this,a,c,b),new A.ty())},
oT(a,b){var s,r,q,p,o,n,m,l=this.d
if(l.a!==0)throw A.b(A.x("A transaction session is already active on this database."))
s="tx"+ ++this.x
r=$.C
q=t.D
p=t.h
o=new A.u(r,q)
n=new A.oG(new A.aI(new A.u(r,q),p),new A.aI(o,p),A.k([],t.mc))
l.j(0,s,n)
m=this.a.a
l=new A.tl(n)
if(a){if(A.np(m)!=null)A.w(A.x(u.L))
r=m.b
r===$&&A.y()
l=r.wy(l,t.H)}else{r=b===B.bm?B.aW:B.p
r=m.aX(l,r,t.H)
l=r}n.w!==$&&A.cf()
n.w=l
return o.W(new A.tk(s),t.V)},
eT(a,b){return this.t8(a,b)},
t8(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eT=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d2(a)
for(l=h.e,k=A.a0(l).i("bV<1>"),l=new A.bV(l,k),l=new A.at(l,l.gm(0),k.i("at<Z.E>")),k=k.i("Z.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.w(A.x("Future already completed"))
j.aK(null)}h.f=!b
h.c.an()
p=4
l=h.w
l===$&&A.y()
s=7
return A.a(l,$async$eT)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.E(g) instanceof A.eY){if(b)throw g}else throw g
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.d.H(0,a)
s=n.pop()
break
case 6:q=B.n
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eT,r)},
hm(a,b){return this.rX(a,b)},
rX(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hm=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d2(a)
n=$.C
m=t.D
l=t.h
k=new A.u(n,m)
j=new A.hG(b,new A.aI(new A.u(n,m),l),new A.aI(k,l))
l=o.r.a2(new A.tw(j),t.H)
j.f!==$&&A.cf()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hm)
case 3:q=B.n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hm,r)},
hl(a,b){return this.rV(a,b)},
rV(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hl=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d2(a).e
f=B.b.mN(g,new A.tv(b))
if(f<0)throw A.b(A.x('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a0(g).i("bV<1>")
l=A.O(new A.bV(g,l),l.i("Z.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bN(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.w(A.x("Future already completed"))
i.aK(null)
p=7
i=m.f
i===$&&A.y()
s=10
return A.a(i,$async$hl)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.E(e) instanceof A.eY))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:B.b.kp(g,f,g.length)
q=B.n
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hl,r)},
hj(a,b){return this.rN(a,b)},
rN(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hj=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d2(a).e
j=A.DA(k)
if(j==null||j.a!==b)throw A.b(A.x('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.an()
p=4
m=j.f
m===$&&A.y()
s=7
return A.a(m,$async$hj)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.E(i) instanceof A.eY)throw i
else throw i
s=6
break
case 3:s=2
break
case 6:k.pop()
q=B.n
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hj,r)},
ht(a,b){return this.tz(a,b)},
tz(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$ht=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.aw(a)
s=3
return A.a(p.pb(a).bT(b),$async$ht)
case 3:o="w"+ ++p.x
n=A.y8()
n.sjW(new A.mt(l,b,m,B.aX).iG().vZ(new A.tA(p,o),new A.tB(p,n,o)))
p.e.j(0,o,n.aR())
q=A.bj(new A.hl(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ht,r)},
tx(a,b){var s=this,r="w"+ ++s.x,q=s.ba(a,b,null)
s.e.j(0,r,new A.mL(q,q.gdX(),B.aX).iG().aT(new A.tC(s,r)))
return A.bj(new A.hl(r),t.V)},
jB(a){return this.tp(a)},
tp(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.e.H(0,a)
if(o!=null)o.D()
q=B.n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jB,r)},
pL(){if(this.r!=null)return
this.r=A.E5(A.dw(9e8,0,0),new A.tm(this))},
j1(a,b,c,d,e,f,g){return this.pU(a,b,c,d,e,f,g)},
pU(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$j1=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.pL()
o=p.f
n="u"+ ++p.x
o.mI()
m=o.r
if(m.a>=16)A.w(A.ay("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.w(A.ay("Invalid file size: "+c,null))
if(o.gnc()+c>536870912)A.w(A.ay("Aggregate upload quota exceeded: "+o.gnc()+" + "+c+" > 536870912",null))
o=o.f.$0().iO(18e8)
m.j(0,n,new A.cF(n,a,b,d,e,c,f,g,A.k([],t.bs),o))
q=new A.lN("u"+p.x,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j1,r)},
j2(a,b){return this.pV(a,b)},
pV(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$j2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
k=l.r
j=k.h(0,a)
if(j==null)A.w(A.ay("Unknown upload session: "+a,null))
l=l.f
if(!j.z.k9(l.$0())){k.H(0,a)
A.w(A.ay("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.H(0,a)
A.w(A.ay("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.H(0,a)
A.w(A.ay("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().iO(18e8)
q=B.n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j2,r)},
h0(a){return this.pX(a)},
pX(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$h0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.f
g=h.r.H(0,a)
if(g==null)A.w(A.ay("Unknown upload session: "+a,null))
if(!g.z.k9(h.f.$0()))A.w(A.ay("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.w(A.ay("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.db
h===$&&A.y()
n=g.b
m=g.c
l=new A.tn(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.d6(g.w,l,i,o,k,j,m,n),$async$h0)
case 3:q=new f.lL(p.lr(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h0,r)},
j0(a){return this.pT(a)},
pT(a){var s=0,r=A.h(t.V),q,p=this
var $async$j0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.f.r.H(0,a)
q=B.n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j0,r)},
h1(a,b,c,d,e){return this.pZ(a,b,c,d,e)},
pZ(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$h1=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.db
k===$&&A.y()
s=3
return A.a(k.fj(c,d,b,e,a),$async$h1)
case 3:o=g
n="f"+ ++p.x
m=new A.o7()
l=A.y8()
l.sjW(o.by(new A.to(p,m,n,l),new A.tp(p,n),new A.tq(p,n)))
k=l.aR()
m.c!==$&&A.cf()
m.c=k
p.w.j(0,n,m)
q=new A.lJ(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h1,r)},
j3(a,b){return this.pW(a,b)},
pW(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$j3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.h(0,a)
if(n==null)throw A.b(A.x('Unknown file stream "'+a+'".'))
o=n.b-=b
if((o<0?n.b=0:o)<1048576){o=n.c
o===$&&A.y()
o.b2()}q=B.n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j3,r)},
lr(a){return new A.lK(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
iV(a){return new A.l9(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
ty(a){var s=this,r="w"+ ++s.x,q=s.a.a.cy
q===$&&A.y()
s.e.j(0,r,q.x9(a).aT(new A.tz(s,r)))
return A.bj(new A.hl(r),t.V)},
d2(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.x('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.x('Transaction session "'+a+'" is not ready yet.'))
return s},
hu(a,b,c){return this.tC(a,b,c)},
bw(a,b,c){return this.hu(a,b,c,t.z)},
tC(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
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
for(;;)switch(s){case 0:p=q.e,o=new A.aS(p,p.r,p.e,A.n(p).i("aS<2>"))
case 2:if(!o.k()){s=3
break}s=4
return A.a(o.d.D(),$async$q)
case 4:s=2
break
case 3:p.ab(0)
p=q.r
if(p!=null)p.D()
q.r=null
q.f.r.ab(0)
for(p=q.w,o=new A.aS(p,p.r,p.e,A.n(p).i("aS<2>"));o.k();){n=o.d.c
n===$&&A.y()
n.D()}p.ab(0)
p=q.c
p===$&&A.y()
p.D()
s=5
return A.a(q.a.a.q(),$async$q)
case 5:s=6
return A.a(q.b.q(),$async$q)
case 6:return A.e(null,r)}})
return A.f($async$q,r)}}
A.tD.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cJ(r,t.N,t.X)
s=a.f
s=s==null?null:A.cJ(s,t.N,t.X)
this.a.b.t(0,new A.l5(a.a,a.b,a.c,a.d,r,s,A.d2(a.r,t.N)))},
$S:194}
A.tE.prototype={
$1(a){return B.n},
$S:9}
A.tF.prototype={
$0(){var s=this.a
return this.b.dD(s.c,s.a).bT(s.b)},
$S:197}
A.tG.prototype={
$1(a){return new A.fY(a)},
$S:212}
A.tR.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.k([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dD(o.c,o.a).bT(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.q)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:213}
A.tY.prototype={
$1(a){return new A.fZ(a)},
$S:217}
A.tZ.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).hG()},
$S:54}
A.u_.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).hI(s.c)},
$S:54}
A.u0.prototype={
$0(){var s=this.a
return this.b.ba(s.d,s.b,s.a).hN(s.c)},
$S:243}
A.u1.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).i3()},
$S:55}
A.u2.prototype={
$0(){var s=this,r=s.a
switch(r.d.a){case 0:r=s.b.ba(r.e,r.b,r.a).cQ("SUM",r.c)
break
case 1:r=s.b.ba(r.e,r.b,r.a).cQ("AVG",r.c)
break
case 2:r=s.b.ba(r.e,r.b,r.a).cQ("MIN",r.c)
break
case 3:r=s.b.ba(r.e,r.b,r.a).cQ("MAX",r.c)
break
default:r=null}return r},
$S:73}
A.u3.prototype={
$0(){var s=this.a
return this.b.ba(s.c,s.b,s.a).hP()},
$S:74}
A.tH.prototype={
$1(a){return B.n},
$S:9}
A.tI.prototype={
$1(a){return B.n},
$S:9}
A.tJ.prototype={
$1(a){return B.n},
$S:9}
A.tK.prototype={
$1(a){return new A.fQ(a)},
$S:75}
A.tL.prototype={
$1(a){return new A.fi(a)},
$S:76}
A.tM.prototype={
$1(a){return B.n},
$S:9}
A.tN.prototype={
$1(a){var s,r,q=A.k([],t.oS)
for(s=J.D(a),r=this.a;s.k();)q.push(r.iV(s.gn()))
return new A.fl(q)},
$S:77}
A.tO.prototype={
$1(a){return new A.fk(a==null?null:this.a.iV(a))},
$S:78}
A.tP.prototype={
$1(a){return B.n},
$S:9}
A.tQ.prototype={
$1(a){return B.n},
$S:9}
A.tS.prototype={
$1(a){return B.n},
$S:9}
A.tT.prototype={
$1(a){var s,r,q=A.k([],t.kB)
for(s=J.D(a),r=this.a;s.k();)q.push(r.lr(s.gn()))
return new A.fw(q)},
$S:79}
A.tU.prototype={
$1(a){return B.n},
$S:9}
A.tV.prototype={
$1(a){return new A.fv(a)},
$S:80}
A.tW.prototype={
$1(a){return new A.ft(a)},
$S:81}
A.tX.prototype={
$1(a){return new A.h7(a)},
$S:71}
A.tr.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dD(p.b,a1)
a0.a.a.c===$&&A.y()
o=p.d
n=o instanceof A.iU
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.ij(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.hp(B.Z,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.k([A.F(a0)],t.s)}else a0=B.q
q=a0
s=1
break
case 4:n=o instanceof A.iX
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nf(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.hp(B.a_,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.k([A.F(a0)],t.s)}else a0=B.q
q=a0
s=1
break
case 11:k=o instanceof A.iV
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.n1(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.lO(i),$async$$0)
case 23:case 20:a0=A.k([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 18:k=o instanceof A.iY
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.ng(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bt(i,B.a_),$async$$0)
case 30:case 27:a0=A.k([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iR
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.mZ(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cp(b,c,!1),$async$$0)
case 37:case 34:q=A.k([b],t.s)
s=1
break
case 32:a0=o instanceof A.iS
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.n_(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.eI(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.O(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iQ
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.ml(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.ho(B.C,b),$async$$0)
case 51:case 48:q=A.k([b],t.s)
s=1
break
case 46:e=o instanceof A.iW
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.n9(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.ho(B.E,b),$async$$0)
case 58:case 55:q=A.k([b],t.s)
s=1
break
case 53:e=o instanceof A.iT
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.kk(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.d0(b),$async$$0)
case 65:case 62:q=A.k([b],t.s)
s=1
break
case 60:throw A.b(A.fU(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:55}
A.ts.prototype={
$1(a){return new A.fH(a)},
$S:83}
A.tt.prototype={
$0(){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.b
k=l.y
s=k!=null?3:4
break
case 3:o=p.a
n=p.c
m=p.d
s=l.z?5:7
break
case 5:s=8
return A.a(o.ba(n,l,m).pv(!0,k).c7(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.ba(n,l,m).pr(k).c7(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.ba(p.c,l,p.d).c7()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:84}
A.tu.prototype={
$1(a){return new A.fT(a.a,a.d,a.e,a.b,a.c)},
$S:85}
A.tx.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dD(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.wh(m,l,o.c,n.a)
if(l.w==null)A.w(A.rA('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.w(A.rA(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.w(A.ay("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.c7()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:86}
A.ty.prototype={
$1(a){var s,r,q=A.k([],t.cP)
for(s=J.D(a);s.k();){r=s.gn()
q.push(new A.mX(r.a,r.b))}return new A.h0(q)},
$S:87}
A.tl.prototype={
nt(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.an()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aU)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nt(a)},
$S:3}
A.tk.prototype={
$1(a){return new A.hd(this.a)},
$S:89}
A.tw.prototype={
$1(a){return this.nu(a)},
nu(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.an()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aU)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:3}
A.tv.prototype={
$1(a){return a.a===this.a},
$S:90}
A.tA.prototype={
$1(a){var s=a==null?B.b5:A.k([a],t.d)
this.a.b.t(0,new A.jw(this.b,s))},
$S:91}
A.tB.prototype={
$1(a){this.b.aR().D()
this.a.e.H(0,this.c)},
$S:17}
A.tC.prototype={
$1(a){this.a.b.t(0,new A.jw(this.b,a))},
$S:92}
A.tm.prototype={
$1(a){return this.a.f.mI()},
$S:61}
A.tn.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bW(A.dZ(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:case 1:return A.bW(null,0,r)
case 2:return A.bW(o.at(-1),1,r)}})
var s=0,r=A.Fg($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.Fv(r)},
$S:94}
A.to.prototype={
$1(a){var s=this,r=new Uint8Array(A.b7(a)),q=s.b
q.b=q.b+r.length
s.a.b.t(0,new A.fu(s.c,r,!1,null))
if(q.b>=1048576)s.d.aR().be()},
$S:15}
A.tq.prototype={
$1(a){var s=this.a,r=this.b
s.w.H(0,r)
s.b.t(0,new A.fu(r,new Uint8Array(0),!0,J.a_(a)))},
$S:17}
A.tp.prototype={
$0(){var s=this.a,r=this.b
s.w.H(0,r)
s.b.t(0,new A.fu(r,new Uint8Array(0),!0,null))},
$S:0}
A.tz.prototype={
$1(a){var s,r=this.a,q=A.k([],t.oS)
for(s=J.D(a);s.k();)q.push(r.iV(s.gn()))
r.b.t(0,new A.lc(this.b,q))},
$S:95}
A.cF.prototype={}
A.rs.prototype={
gnc(){var s=this.r
return new A.aq(s,A.n(s).i("aq<2>")).vl(0,0,new A.rv())},
mI(){var s,r=this.r,q=A.n(r).i("aq<2>"),p=q.i("ck<o.E,l>"),o=A.O(new A.ck(new A.ak(new A.aq(r,q),new A.rt(this.f.$0()),q.i("ak<o.E>")),new A.ru(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.q)(o),++s)r.H(0,o[s])
return p}}
A.rv.prototype={
$2(a,b){return a+b.f},
$S:96}
A.rt.prototype={
$1(a){return!a.z.k9(this.a)},
$S:97}
A.ru.prototype={
$1(a){return a.a},
$S:98}
A.o7.prototype={}
A.og.prototype={}
A.uG.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:63}
A.uH.prototype={
$2(a,b){return B.c.a_(a.a,b.a)},
$S:100}
A.uD.prototype={
$1(a){return a.h(0,"name")},
$S:42}
A.uF.prototype={
$1(a){return this.nA(a)},
nA(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.D(q.a),k=q.b,j=q.c,i=j.ax,j=j.ay,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.ce(k,p,i,j)
n=o
A.Id(k,n)
g=J.S(o,"id")
g.toString
A.F(g)
m=A.dn(k,J.v(J.S(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aC(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:48}
A.mA.prototype={
ww(a){if(a>this.w)this.w=a},
n4(){return this.f++}}
A.d6.prototype={}
A.a9.prototype={}
A.c4.prototype={}
A.ds.prototype={}
A.cZ.prototype={}
A.b_.prototype={}
A.cl.prototype={}
A.yy.prototype={}
A.mI.prototype={
cs(a,b){var s=this.gdX(),r=this.c
if(r==null)return s.ne(a,b)
s.y.n4()
return r.ai(a,b)},
bY(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bG(i.d,!0,h)
h=A.bG(i.e,!0,h)
s=a0==null?A.bG(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bG(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bG(i.f,!0,t.jS)
return new A.mI(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
fU(){var s=null
return this.bY(s,s,s,s,s,s,s,s,s)},
lf(a){var s=null
return this.bY(s,s,s,s,s,s,s,a,s)},
ps(a){var s=null
return this.bY(s,s,s,a,s,s,s,s,s)},
pt(a){var s=null
return this.bY(s,s,s,s,a,s,s,s,s)},
pq(a){var s=null
return this.bY(a,s,s,s,s,s,s,s,s)},
pu(a){var s=null
return this.bY(s,s,s,s,s,a,s,s,s)},
pw(a,b,c){var s=null
return this.bY(s,s,s,s,s,s,a,b,c)},
pv(a,b){var s=null
return this.bY(s,a,b,s,s,s,s,s,s)},
pr(a){var s=null
return this.bY(s,s,a,s,s,s,s,s,s)},
cR(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aP('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.ay('Unknown field "'+a+'" for query.',a))},
bf(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cR(a0)
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
if(k)r.push(new A.b_(s+" IN ("+B.b.B(A.af(a7.length,"?",!1,t.N),", ")+")",a7))
j=a1!=null
if(j)r.push(new A.b_(s+" >= ? AND "+s+" <= ?",[a1.a,a1.b]))
i=b3!=null
if(i)r.push(new A.b_(s+b,[A.ks(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b_(s+b,["%"+A.ks(a3)]))
g=a2!=null
if(g)r.push(new A.b_(s+b,["%"+A.ks(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b_(s+" IS NULL",B.k))
e=a8===!0
if(e)r.push(new A.b_(s+" IS NOT NULL",B.k))
d=this.fU()
B.b.C(d.d,r)
c=A.k([],t.k)
if(q)c.push(new A.a9(a0,"eq",[a4]))
if(p)c.push(new A.c4(new A.a9(a0,"eq",[b2])))
if(o)c.push(new A.a9(a0,"gt",[a5]))
if(n)c.push(new A.a9(a0,"gte",[a6]))
if(m)c.push(new A.a9(a0,"lt",[b0]))
if(l)c.push(new A.a9(a0,"lte",[b1]))
if(k)c.push(new A.a9(a0,"inValues",a7))
if(j)c.push(new A.a9(a0,"between",[a1.a,a1.b]))
if(i)c.push(new A.a9(a0,"startsWith",[b3]))
if(h)c.push(new A.a9(a0,"endsWith",[a3]))
if(g)c.push(new A.a9(a0,"contains",[a2]))
if(f)c.push(new A.a9(a0,"isNull",B.k))
if(e)c.push(new A.c4(new A.a9(a0,"isNull",B.k)))
B.b.C(d.f,c)
return d},
xd(a,b,c){var s=null
return this.bf(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xl(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
xe(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
xf(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xj(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xk(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xg(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
xa(a,b,c){var s=null
return this.bf(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xm(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
xc(a,b,c){var s=null
return this.bf(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
xb(a,b,c){var s=null
return this.bf(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xi(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
xh(a,b,c){var s=null
return this.bf(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
wi(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.k([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
p=A.k([],j)
q.a3(0,new A.vZ(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.fU()
o.e.push(new A.b_("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.k([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.q)(a),++r){q=a[r]
if(q.gV(0)){m=A.k([],j)
for(l=q.gac().gu(0);l.k();){k=l.gn()
m.push(new A.a9(k.a,"eq",[k.b]))}s.push(new A.ds(m))}}o.f.push(new A.cZ(s))
return o},
jC(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.a9
r=s?a.a:l
if(s){this.cR(r)
break A}s=a instanceof A.c4
q=s?a.a:l
if(s){this.jC(q)
break A}p=a instanceof A.ds
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.q)(n),++m)this.jC(n[m])
break A}},
gco(){var s,r=A.O(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga0(r).a!=="id"
else s=!1
if(s)r.push(B.cT)
return r},
glc(){var s,r,q,p,o
if(this.at){s=A.k([],t.fi)
for(r=this.gco(),q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.push(new A.cl(o.a,!o.b))}}else s=this.gco()
return s},
gm5(){var s,r,q,p,o,n=A.k([],t.s)
for(s=this.gco(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
js(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.DL('Query on "'+this.gaO()+'" requires .limit(n) or .all().'))
return s},
gaO(){return this.b.a},
gdX(){return this.a},
eA(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.k([],e),c=[],b=A.k([],e)
e=f.z
if(!e)b.push("archived = 0")
s=f.Q
if(!s)b.push("hidden = 0")
if(b.length!==0)d.push(B.b.B(b," AND "))
for(r=f.d,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
d.push(o.a)
B.b.C(c,o.b)}for(r=f.e,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
d.push(o.a)
B.b.C(c,o.b)}r=f.as
if(r!=null){n=f.pz(r)
m=f.lC(f.glc(),n.a)
d.push(m.a)
B.b.C(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.z(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.z(a,'"','""')+'"')+") AS v"}else r=f.gt1()
k=r}j=f.glc()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.vU(),A.a0(j).i("X<1,l>")).B(0,", ")
h=A.Ix(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.vV(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.js():a3
g=e}return new A.a4(h+(g==null?"":" LIMIT "+A.r(g)),c)},
iT(a){return this.eA(null,null,!1,!1,a)},
ph(a,b){return this.eA(a,b,!1,!1,null)},
pf(){return this.eA(null,null,!1,!1,null)},
pi(a,b,c){return this.eA(a,null,b,c,null)},
pg(a){return this.eA(null,null,!1,a,null)},
gt1(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.l0())return"*"
o=A.O(o,t.N)
for(s=this.gco(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(!B.b.F(o,p))o.push(p)}return new A.X(o,A.AK(),A.a0(o).i("X<1,l>")).B(0,", ")},
pz(a){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null
try{s=t.G.a(B.h.av(B.l.eY(B.ar.v(a)),null))
i=J.S(s,"store")
h=J.S(s,"schemaVer")
g=J.S(s,"shape")
q=t.lH
p=q.a(J.S(s,"sort"))
if(p==null)p=B.aj
f=A.bG(p,!0,t.N)
r=k.at?J.S(s,"pv"):J.S(s,"values")
q=q.a(r)
if(q==null)q=B.aj
e=A.bG(q,!0,t.X)}catch(o){q=A.C6(j)
throw A.b(q)}n=k.gm5()
q=k.b
if(!J.v(i,q.a)||!J.v(h,q.b)||!J.v(g,k.gm3())||!B.af.Y(f,n)||J.ap(e)!==n.length)throw A.b(A.C6("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=e,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bw(l)&&!A.ac(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.C6(j))}return new A.yy(e)},
gm3(){var s,r,q,p,o,n=this,m=A.k([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.k([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.k([o.a,o.b],q))}return B.h.a7(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lC(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cC(a,new A.vW(a)),c=B.b.cC(b,new A.vX())
if(a.length>=2&&d&&!B.b.gG(a).b&&c){s=A.k([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.q)(a),++q){p=a[q]
s.push('"'+A.z(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gG(a).b?"<":">"
return new A.a4("("+o+") "+n+" ("+B.b.B(A.af(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
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
B.b.C(l,i)}}if(m.length===0)return B.d8
return new A.a4("("+B.b.B(m," OR ")+")",l)},
lD(a,b){var s,r,q,p=this,o=p.gco(),n=p.b,m=p.gm5(),l=p.gm3(),k=[]
for(s=o.length,r=0;q=o.length,r<q;o.length===s||(0,A.q)(o),++r)k.push(a.h(0,o[r].a))
s=[]
for(r=0;r<o.length;o.length===q||(0,A.q)(o),++r)s.push(b.h(0,o[r].a))
n=B.e.v(B.h.a7(A.m(["store",n.a,"schemaVer",n.b,"sort",m,"shape",l,"values",k,"pv",s],t.N,t.K),null))
return B.bv.gf2().v(n)},
e7(a){return this.vc(a)},
c7(){return this.e7(null)},
vc(a8){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$e7=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a7=a8==null?p.js():a8
if(a7===0){q=B.cU
s=1
break}o=a7==null
n=p.iT(o?null:a7+1)
s=3
return A.a(p.cs(n.a,n.b),$async$e7)
case 3:m=b0
l=!o&&J.ap(m)>a7
k=o?m:J.Bv(m,a7).eq(0)
o=p.y
j=o!=null
i=j&&p.l0()
h=p.b
if(i){i=A.O(o,t.N)
B.b.C(i,p.rp())
g=A.M0(h,k,p.gdX().ax,i,p.gdX().ay)}else g=A.M_(h,k,p.gdX().ax,p.gdX().ay)
i=p.at
if(i&&g.length!==0){h=A.a0(g).i("bV<1>")
f=A.O(new A.bV(g,h),h.i("Z.E"))
B.b.ab(g)
B.b.C(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hf(g),$async$e7)
case 7:e=b0
d=l
l=e
s=5
break
case 6:d=p.as!=null&&g.length!==0
case 5:c=A.k([],t.d)
for(i=g.length,h=t.N,b=t.X,a=0;a0=g.length,a<a0;g.length===i||(0,A.q)(g),++a){a1=g[a]
if(j){a0=A.t(h,b)
for(a2=o.length,a3=0;a3<o.length;o.length===a2||(0,A.q)(o),++a3){a4=o[a3]
if(a1.J(a4))a0.j(0,a4,a1.h(0,a4))}c.push(a0)}else c.push(a1)}if(a0!==0){a5=l?p.lD(B.b.ga0(g),B.b.gG(g)):null
a6=d?p.lD(B.b.ga0(g),B.b.gG(g)):null}else{a5=null
a6=null}q=new A.cn(c,a5,a6,l,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e7,r)},
hf(a){return this.rj(a)},
rj(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga0(a)
e=p.gco()
n=[]
for(m=p.gco(),l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k)n.push(o.h(0,m[k].a))
j=p.lC(e,n)
e=t.s
i=A.k([],e)
h=[]
g=A.k([],e)
if(!p.z)g.push("archived = 0")
if(!p.Q)g.push("hidden = 0")
if(g.length!==0)i.push(B.b.B(g," AND "))
for(e=p.d,n=e.length,k=0;k<e.length;e.length===n||(0,A.q)(e),++k){f=e[k]
i.push(f.a)
B.b.C(h,f.b)}for(e=p.e,n=e.length,k=0;k<e.length;e.length===n||(0,A.q)(e),++k){f=e[k]
i.push(f.a)
B.b.C(h,f.b)}i.push(j.a)
B.b.C(h,j.b)
d=J
s=3
return A.a(p.cs("SELECT 1 FROM "+('"'+A.z(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hf)
case 3:q=d.e9(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)},
l0(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.f6(o)==null)return!1}return!0},
rp(){var s,r,q,p,o=A.k([],t.s)
for(s=this.gco(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hG(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pg(!0)
m=A
s=3
return A.a(p.cs(o.a,o.b),$async$hG)
case 3:n=m.f5(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
hI(a){return this.u9(a)},
u9(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cR(a)
o=p.pi(a,!0,!0)
m=A
s=3
return A.a(p.cs(o.a,o.b),$async$hI)
case 3:n=m.f5(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
hN(a){return this.uS(a)},
uS(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cR(a)
o=A.k([a],t.s)
n=A.k([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pw(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.iT(h)
o=[]
f=J
s=3
return A.a(i.cs(B.a.kr(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hN)
case 3:n=f.D(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
qG(a){var s,r,q=this.b.f6(a)
if(q==null)return!1
s=q.b
A:{r=B.R===s||B.S===s||B.B===s||B.T===s
break A}return r},
cQ(a,b){return this.oO(a,b)},
oO(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cR(b)
if(!p.qG(b))throw A.b(A.ay('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.ph(b,a)
s=3
return A.a(p.cs(o.a,o.b),$async$cQ)
case 3:n=d
m=J.M(n)
q=A.F2(m.gE(n)?null:J.S(m.gG(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cQ,r)},
i3(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$i3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lf(A.k(["id"],m))
k=l.pf()
s=3
return A.a(l.cs(k.a,k.b),$async$i3)
case 3:j=b
m=A.k([],m)
for(o=J.D(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.F(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)},
hP(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$hP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.iT(p.js())
n=J
s=3
return A.a(p.cs("EXPLAIN QUERY PLAN "+o.a,o.b),$async$hP)
case 3:q=n.bB(b,new A.vY(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)}}
A.vZ.prototype={
$2(a,b){this.a.cR(a)
this.b.push('"'+A.z(a,'"','""')+'" = ?')
this.c.push(b)},
$S:101}
A.vU.prototype={
$1(a){var s=A.z(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:102}
A.vV.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.z(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:103}
A.vW.prototype={
$1(a){return a.b===B.b.gG(this.a).b},
$S:104}
A.vX.prototype={
$1(a){return a!=null},
$S:18}
A.vY.prototype={
$1(a){return a.h(0,"detail")},
$S:42}
A.cN.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cN&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gI(a){return A.c5(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.wh.prototype={
t0(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.DL('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
c7(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$c7=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a4=n.d
if(B.a.cf(a4).length===0){q=B.cz
s=1
break}m=n.a
if(m==null)throw A.b(A.x("A compile-only SearchBuilder cannot execute fetch()."))
l=null
k=null
e=n.b
d=e.w
c=d.c.ei(a4)
A.II(c)
if(d.b)A.IH(c)
b=e.a
a=b+"_fts"
a0=A.k(['"'+A.z(a,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a0.push("b.archived = 0")
if(!n.w)a0.push("b.hidden = 0")
a4=B.b.B(a0," AND ")
a1=n.t0()
a2=a1==null?"":" LIMIT "+A.r(a1)
e=A.z(a,'"','""')
d=A.z(b,'"','""')
l="SELECT b.id, rank AS score FROM "+('"'+e+'"')+" JOIN "+('"'+d+'"')+" b ON b.rowid = "+('"'+A.z(a,'"','""')+'"')+".rowid"+(" WHERE "+a4)+" ORDER BY rank"+a2
k=[c]
p=4
j=n.c
s=j==null?7:9
break
case 7:s=10
return A.a(m.ne(l,k),$async$c7)
case 10:s=8
break
case 9:s=11
return A.a(j.ai(l,k),$async$c7)
case 11:case 8:i=a7
h=A.k([],t.kj)
for(a4=J.D(i);a4.k();){g=a4.gn()
e=J.S(g,"id")
e.toString
A.F(e)
d=J.S(g,"score")
d.toString
J.aL(h,new A.cN(e,A.F1(d)))}q=h
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
h=A.E(a5)
if(h instanceof A.c7){f=h
throw A.b(A.ay("Invalid search term: "+f.a,null))}else throw a5
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c7,r)}}
A.c3.prototype={
a5(){return"FieldKind."+this.b}}
A.aX.prototype={
gkM(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aw===s||B.I===s||B.U===s||B.V===s||B.J===s){r="TEXT"
break A}if(B.R===s||B.B===s||B.T===s){r="INTEGER"
break A}if(B.S===s){r="REAL"
break A}throw A.b(A.fU(u.P))}return r},
p(){var s,r=this,q=A.t(t.N,t.X)
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
A.rj.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fr(B.cw,A.F(m))
m=n.h(0,"name")
m.toString
A.F(m)
r=J.v(n.h(0,"required"),!0)
q=J.v(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aX(m,B.aw,r,J.v(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aX(m,B.R,r,!1,q,o,o,!1)
case 2:return new A.aX(m,B.S,r,!1,q,o,o,!1)
case 3:return new A.aX(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aX(m,B.T,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aX(m,B.I,r,!1,!1,A.dG(J.pa(t.j.a(n),p),p),o,!1)
case 6:return new A.aX(m,B.U,!1,!1,q,o,o,!1)
case 7:return new A.aX(m,B.V,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aX(m,B.J,!1,!1,!1,o,A.F(p),J.v(n.h(0,"enforceFk"),!0))}},
$S:105}
A.iB.prototype={
a5(){return"IndexScope."+this.b}}
A.dA.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.t6.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.pa(t.j.a(q),t.N)
s=J.v(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dA(q,s,A.fr(B.cr,A.F(r)))},
$S:106}
A.fz.prototype={
p(){var s,r=t.N,q=t.X,p=A.t(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gV(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fz&&r.b===b.b&&B.af.Y(r.a,b.a)&&r.c.R(0,b.c)
else s=!0
return s},
gI(a){return A.c5(A.uR(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.rz.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.pa(t.j.a(p),s)
r=J.v(r.h(0,"fuzzy"),!0)
return new A.fz(p,r,t.f.b(q)?A.HK(q.c2(0,s,t.X)):B.c6)},
$S:107}
A.eo.prototype={
ei(a){var s,r,q,p
for(s=this.a.gac(),s=s.gu(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.F(r,p))continue
q=q.b
r=A.z(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.eo&&A.HJ(this.a,b.a)
else s=!0
return s},
gI(a){var s,r,q,p=this.a,o=p.gK(),n=A.O(o,A.n(o).i("o.E"))
B.b.aE(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.q)(n),++r){q=n[r]
o.push(A.c5(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.uR(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.ry.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.t(s,s)
for(o=t.d2.a(o).gac(),o=o.gu(o);o.k();){q=o.gn()
p=q.a
p.toString
A.F(p)
q=q.b
q.toString
A.F(q)
A.Dv(p,q)
r.j(0,p,q)}return new A.eo(A.Hr(r,s,s))},
$S:108}
A.c8.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.wx.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ao(o)
s=J.v(p.h(0,"destructive"),!0)
r=A.k([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.D(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.Dq(q.a(p.gn())))
return new A.c8(o,s,r)},
$S:109}
A.uI.prototype={
a5(){return"MissingRemotePolicy."+this.b}}
A.qe.prototype={}
A.c1.prototype={
gd7(){var s,r,q,p,o=this,n=$.Gj()
A.BD(o)
s=n.a.get(o)
if(s==null){s=A.aN(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
f6(a){var s,r,q,p,o,n=this,m=$.Gk()
A.BD(n)
s=m.a.get(n)
if(s==null){s=A.t(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.S(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.t(l,k)
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
l=m.w
if(l!=null)j.j(0,"fts",l.p())
l=A.k([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.q)(k),++o)l.push(k[o].p())
j.j(0,"migrations",l)
return j}}
A.pM.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.F(j)
s=k.h(0,"version")
s.toString
A.ao(s)
r=A.k([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.D(p.a(q))
o=t.G
while(q.k())r.push(A.Dq(o.a(q.gn())))
q=A.k([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.D(p.a(n))
while(n.k())q.push(A.HT(o.a(n.gn())))
p=J.v(k.h(0,"keepUnsyncedArchives"),!0)
n=J.v(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.HL(o.a(m))}else m=null
l=A.k([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.D(k==null?B.aj:k)
while(k.k())l.push(A.IS(o.a(k.gn())))
return new A.c1(j,s,r,q,n,p,m,l,this.b.i("c1<0>"))},
$S(){return this.b.i("c1<0>()")}}
A.mW.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.wd.prototype={
$1(a){return!1},
$S:63}
A.we.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.I)},
$S:13}
A.wf.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.eB)},
$S:64}
A.wg.prototype={
$1(a){return J.a_(a)},
$S:111}
A.uM.prototype={}
A.dL.prototype={
a5(){return"MutationAction."+this.b}}
A.cn.prototype={}
A.fh.prototype={
gbl(){var s=this.c
return s==null?this.a.r:s},
gaO(){return this.b.a.a},
eC(){var s=this.d
if(s!=null&&s.e){s=this.gaO()
throw A.b(new A.fV('Cannot mutate "'+s+'" through a read-only Tx.'))}},
ij(a){var s=this
if(s.d!=null)return s.hp(B.Z,a)
return s.a.aX(new A.q_(s,a),B.p,t.H)},
nf(a){var s=this
if(s.d!=null)return s.hp(B.a_,a)
return s.a.aX(new A.q2(s,a),B.p,t.H)},
n1(a){var s=this
if(s.d!=null)return s.lO(a)
return s.a.aX(new A.pZ(s,a),B.p,t.H)},
ng(a){var s=this
if(s.d!=null)return s.bt(a,B.a_)
return s.a.aX(new A.q1(s,a),B.p,t.H)},
mZ(a,b){var s=this
if(s.d!=null)return s.r9(a,b)
return s.a.aX(new A.pX(s,a,b),B.p,t.H)},
n_(a){var s=this
if(s.d!=null)return s.eI(a)
return s.a.aX(new A.pW(s,a),B.p,t.H)},
eI(a){return this.rb(a)},
rb(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$eI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eC()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aM(a,o.i("aM<1,2>")).gu(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cp(m.a,m.b,!0),$async$eI)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aN(t.N)
for(o=new A.bF(a,a.r,a.e,o.i("bF<1>"));o.k();)l.t(0,o.d)
n.Z(new A.a1(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$eI,r)},
ml(a){var s=this
if(s.d!=null)return s.ho(B.C,a)
return s.a.aX(new A.pV(s,a),B.p,t.H)},
n9(a){var s=this
if(s.d!=null)return s.ho(B.E,a)
return s.a.aX(new A.q0(s,a),B.p,t.H)},
kk(a){var s=this
if(s.d!=null)return s.d0(a)
return s.a.aX(new A.pY(s,a),B.p,t.H)},
d0(a){return this.rq(a)},
rq(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eC()
s=2
return A.a(q.dV(a),$async$d0)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cz(n,m,a,!0),$async$d0)
case 3:s=4
return A.a(n.X(m,"id = ?",[a]),$async$d0)
case 4:l=t.N
o.Z(new A.a1(m,A.ar([a],l)))
if(p!=null){l=A.d2(p.gK(),l)
l.H(0,"id")
o.bc(new A.aT(m,a,B.H,B.aV,p,null,l))}return A.e(null,r)}})
return A.f($async$d0,r)},
cp(a,b,c){return this.ra(a,b,c)},
r9(a,b){return this.cp(a,b,!1)},
ra(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cp=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eC()
s=3
return A.a(p.gbl().ai("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cp)
case 3:o=e
n=J.M(o)
if(n.gV(o)){m=n.gG(o)
l=A.jt(m)
k=m.h(0,"o_kind")!=null?A.mw(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eJ(a,b,l,k,c),$async$cp)
case 6:s=1
break
case 5:s=7
return A.a(p.cZ(a,b,c,k,l),$async$cp)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cp,r)},
cZ(a,b,c,d,e){return this.pQ(a,b,c,d,e)},
pQ(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cZ=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dV(a),$async$cZ)
case 2:m=g
if(m==null)throw A.b(A.C1("No record "+q.gaO()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cJ(m,p,o)
n.C(0,b)
o=A.t(p,o)
o.j(0,"id",a)
o.C(0,n)
s=3
return A.a(q.aL(B.K,c,m,a,d,e,o),$async$cZ)
case 3:return A.e(null,r)}})
return A.f($async$cZ,r)},
eJ(a,b,c,d,e){return this.rd(a,b,c,d,e)},
rd(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eJ=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.av(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.cZ(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.v(i,a7)){q=n.cZ(a7,a8,b1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.cJ(a5,h,g)
f.C(0,a8)
m=f
J.bZ(m,"id",a7)
e=new A.a2("")
f=n.b
d=f.a
c=A.AC(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cJ(m,h,g)
b.H(0,"id")
n.hq(a7,b,a,c)
a0=n.ll(a5,m,B.K)
l=null
b=a0.length===1&&d.gd7().F(0,B.b.gap(a0))
a1=n.a
a2=a1.ax
a3=a1.ay
if(b){a4=d.f6(B.b.gap(a0))
b=a4.a
l=A.m([b,A.FP(d,a4,J.S(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dn(d,J.v(J.S(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gbl().L(d.a,l,"id = ?",[a7]),$async$eJ)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.E(a6)
h=A.Ge(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.CW
g===$&&A.y()
b=n.gbl()
a1=l
s=8
return A.a(g.bo(B.K,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$eJ)
case 8:if(!b1){g=n.d
if(g!=null)g.Z(new A.a1(d.a,A.ar([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bc(new A.aT(d.a,a7,B.H,B.A,a5,m,A.ub(a0,A.a0(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eJ,r)},
aL(a,b,c,d,e,f,g){return this.qO(a,b,c,d,e,f,g)},
hp(a,b){var s=null
return this.aL(a,!1,s,s,s,s,b)},
ho(a,b){var s=null
return this.aL(a,!1,s,b,s,s,s)},
tg(a,b,c){var s=null
return this.aL(a,b,s,s,s,s,c)},
th(a,b,c,d,e,f){return this.aL(a,b,c,null,d,e,f)},
qO(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aL=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.eC()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.pQ(b5,n,c2,c1)
s=b7===B.Z?3:5
break
case 3:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.hZ()
g=$.p8()
if(!g.b.test(h))throw A.b(A.ay('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aL)
case 6:l=n.eF(c3,m)
b7=b5.a==null?B.b6:B.K
s=4
break
case 5:s=b7===B.K?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aL)
case 10:if(b5.a==null)throw A.b(A.C1("No record "+n.gaO()+"/"+A.r(m)+" to update."))
c3.toString
l=n.eF(c3,m)
s=8
break
case 9:s=b7===B.a_?11:13
break
case 11:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.hZ()
g=$.p8()
if(!g.b.test(h))throw A.b(A.ay('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aL)
case 14:g=b5.a
if(g==null){l=n.eF(c3,m)
b7=B.b6}else{l=A.cJ(g,t.N,t.X)
for(g=new A.aM(c3,A.n(c3).i("aM<1,2>")).gu(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.bZ(l,e,f.b)}b7=B.K}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aL)
case 15:g=b5.a
if(g==null)throw A.b(A.C1("No record "+n.gaO()+"/"+A.r(m)+" to archive/restore."))
g=A.cJ(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.a2("")
g=n.b
e=g.a
c=l
b=A.AC(d,e,c,J.ap(m)!==0?m:null)
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
case 19:c=n.a.CW
c===$&&A.y()
s=22
return A.a(c.bQ(n.gbl(),e.a,m),$async$aL)
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
case 26:c=n.a.CW
c===$&&A.y()
s=29
return A.a(c.em(n.gbl(),e.a,m),$async$aL)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a4)throw A.b(A.Dj("Record "+n.gaO()+"/"+A.r(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.aj(A.be(e,a3))
a2=A.as(B.m.v(B.e.v(a6)).a)
a7=new A.ps(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ax
a8=a3.ay
a9=A.dn(e,J.v(J.S(l,"archived"),!0),a4,a8,c,a2)
b0=n.ll(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gd7().F(0,B.b.gap(b0))){b1=e.f6(B.b.gap(b0))
c=b1.a
k=A.m([c,A.FP(e,b1,J.S(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
s=b5.a==null?34:36
break
case 34:s=37
return A.a(n.gbl().aC(0,c,k),$async$aL)
case 37:s=35
break
case 36:s=38
return A.a(n.gbl().L(c,k,"id = ?",[m]),$async$aL)
case 38:case 35:p=2
s=33
break
case 31:p=30
b6=o.pop()
j=A.E(b6)
g=A.Ge(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.CW
c===$&&A.y()
a2=n.gbl()
a3=m
a4=b5.a
s=39
return A.a(c.bo(b7,a7,b0,a2,a3,l,a4,a1,a,a9,a0,g),$async$aL)
case 39:switch(b7.a){case 2:case 0:case 1:b3=b5.a==null?B.ab:B.A
break
case 3:b3=B.A
break
case 4:b3=B.bU
break
case 5:b3=B.bV
break
default:b3=null}if(b7===B.C||b7===B.E)b4=A.ar(["archived"],t.N)
else if(b5.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("ak<o.E>")
b4=A.d2(new A.ak(new A.T(g,c),new A.pP(),a2),a2.i("o.E"))}else b4=A.ub(b0,A.a0(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bc(new A.aT(e.a,m,B.H,b3,b5.a,l,b4))
if(!b8)if(!c)g.Z(new A.a1(e.a,A.ar([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aL,r)},
bt(a,b){return this.rA(a,b)},
lO(a){return this.bt(a,B.Z)},
rA(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bt=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eC()
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
a2=a1?A.hZ():a0
a1=$.p8()
if(!a1.b.test(a2))throw A.b(A.ay('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aL(l,new A.a4(a2,a))}if(!c){a3=A.t(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.aq(a3,a3.$ti.i("aq<2>")).bL(0,new A.pU())}else a5=!1
s=c3===B.Z&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dT(m,l),$async$bt)
case 9:k=A.aN(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aL(k,i)}g.Z(new A.a1(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.E(c0) instanceof A.ho))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.t(k,t.G)
j=n.a,d=j.ax,j=j.ay,a1=t.s,a8=0
case 10:if(!(a8<J.ap(l))){s=12
break}a9=a8+2000
b0=B.c.bM(a9,0,J.ap(l))
a4=A.k([],a1)
for(b1=J.H7(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.q)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.ce(e,"id IN ("+B.b.B(A.af(a4.length,"?",!1,k),", ")+")",a4),$async$bt)
case 13:a4=c1.D(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.F(b2),A.ce(f,b1,d,j))
s=14
break
case 15:case 11:a8=a9
s=10
break
case 12:b3=A.t(k,t.nw)
b4=A.t(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.O(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.T(b5,a8,B.c.bM(a9,0,j))
b7=B.b.B(A.af(b6.length,"?",!1,k),", ")
j=A.k([e],a1)
B.b.C(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.ce("lp_sync_row",f,j),$async$bt)
case 19:d=c1.D(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.F(b1),A.jt(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.ce("lp_outbox",f,j),$async$bt)
case 22:j=c1.D(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.F(d),A.mw(f))
s=23
break
case 24:case 17:a8=a9
s=16
break
case 18:b8=A.aN(k)
j=l,f=j.length,d=t.X,b=0
case 25:if(!(b<j.length)){s=27
break}a1=j[b]
a2=a1.a
a=a1.b
b9=a7.h(0,a2)
s=b8.F(0,a2)?28:30
break
case 28:a1=A.dF(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.tg(c3,!0,a1),$async$bt)
case 31:s=29
break
case 30:a1=A.dF(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.th(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bt)
case 32:b8.t(0,a2)
case 29:case 26:j.length===f||(0,A.q)(j),++b
s=25
break
case 27:g.Z(new A.a1(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bt,r)},
dT(a,b){return this.rB(a,b)},
rB(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dT=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a3=n.a
a4=a3.r
s=a4 instanceof A.ip?3:4
break
case 3:s=5
return A.a(n.dU(a6,a7),$async$dT)
case 5:s=1
break
case 4:m=a3.ch.$0()
a3=n.d
a=a3==null?null:a3.a.a$.b.d!=null
l=a===!0
k=A.k([],t.jO)
j=0
p=7
a=a7.length,a0=0
case 10:if(!(a0<a7.length)){s=12
break}i=a7[a0]
h=null
g=null
f=i
h=f.a
g=f.b
s=13
return A.a(n.ey(a6,a4,h,g,m),$async$dT)
case 13:e=a9
if(l)J.aL(k,new A.a4(h,e));++j
case 11:a7.length===a||(0,A.q)(a7),++a0
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.E(a5) instanceof A.c7?14:16
break
case 14:d=A.k([],t.s)
for(c=0;c<j;++c)J.aL(d,a7[c].a)
b=d
s=17
return A.a(n.cX(a6,b),$async$dT)
case 17:throw A.b(new A.ho())
s=15
break
case 16:throw a5
case 15:s=9
break
case 6:s=2
break
case 9:if(l)for(i=k,d=i.length,a=n.b.a.a,a0=0;a0<i.length;i.length===d||(0,A.q)(i),++a0){a2=i[a0]
e=a2.b
a3.toString
a3.bc(new A.aT(a,a2.a,B.H,B.ab,null,e,J.D3(e.gK(),new A.pT()).fB(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dT,r)},
dU(a,b){return this.rC(a,b)},
rC(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dU=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.ch.$0()
d1=c9.r
d2=t.s
d3=A.k(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.q)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.i3(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.i3(B.X)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.i3(B.W)+") VALUES "
j=new A.pS()
b1=new A.a2("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.k([],t.jO):null
i=0,a9=b3==null,b4=c9.ax,b5=c9.ay,b6=c8.b
case 2:if(!(b7=i,b8=d6.length,b7<b8)){s=4
break}h=B.x.bM(i+500,0,b8)
g=h-i
f=[]
e=[]
d=[]
for(b9=i;b9<h;++b9){c0=d6[b9]
c1=c0.a
c2=c0.b
c3=b2?o.eF(c2,c1):c2
b1.a=""
c4=A.AC(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hq(c1,c3,c5,c4)
A.Ln(f,c8,J.v(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.CW
b7===$&&A.y()
c6=b7.fH()
A.FE(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.FF(d,B.a5,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a4(c1,c3))}c=!1
b=!1
q=6
b7=d1.cg(A.r(m)+A.r(j.$2(J.ap(n),g)))
if(b7.r||b7.b.r)A.w(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.ez(new A.bQ(f))
b7.fZ()
c=!0
b7=d1.cg(A.r(l)+A.r(j.$2(11,g)))
if(b7.r||b7.b.r)A.w(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.ez(new A.bQ(e))
b7.fZ()
b=!0
b7=d1.cg(A.r(k)+A.r(j.$2(16,g)))
if(b7.r||b7.b.r)A.w(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.ez(new A.bQ(d))
b7.fZ()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.E(d4) instanceof A.c7?9:11
break
case 9:a=A.k([],d2)
for(a0=0;a0<i;++a0)J.aL(a,d6[a0].a)
a1=a
s=12
return A.a(o.cX(d5,a1),$async$dU)
case 12:s=c||b?13:14
break
case 13:a2=A.k([],d2)
for(a3=i;a3<h;++a3)J.aL(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.af(J.ap(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.X(d3,"id IN ("+A.r(a5)+")",a4),$async$dU)
case 17:case 16:s=b?18:19
break
case 18:a6=A.k([d3],d2)
J.CZ(a6,a4)
a7=a6
s=20
return A.a(d5.X("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dU)
case 20:case 19:case 14:throw A.b(new A.ho())
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
a8.bc(new A.aT(d3,a2.a,B.H,B.ab,null,c3,J.D3(c3.gK(),new A.pR()).fB(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dU,r)},
ey(a,b,c,d,e){return this.oS(a,b,c,d,e)},
oS(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ey=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eF(b1,b0)
a3=new A.a2("")
a4=A.AC(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hq(b0,a2,a6,a4)
a5=n.a
m=A.dn(a1,J.v(a2.h(0,"archived"),!0),a5.ax,a5.ay,b0,a2)
a5=a5.CW
a5===$&&A.y()
e=a5.fH()
a5=a1.a
l=A.FH("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.LI('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dI(new A.T(d,c),new A.pN(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.af(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=a9.cg(f)
d=m
a=A.n(d).i("aq<2>")
d=A.O(new A.aq(d,a),a.i("o.E"))
c.e6(new A.bQ(d))
j=!0
a9.cg("INSERT INTO lp_outbox ("+A.i3(B.X)+") VALUES ("+B.b.B(A.af(11,"?",!1,b),", ")+")").e6(new A.bQ(A.G8(l,B.X)))
i=!0
a9.cg("INSERT INTO lp_sync_row ("+A.i3(B.W)+") VALUES ("+B.b.B(A.af(16,"?",!1,b),", ")+")").e6(new A.bQ(A.G8(k,B.W)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.X(a5,"id = ?",[b0]),$async$ey)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.X("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$ey)
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
return A.f($async$ey,r)},
cX(a,b){return this.pB(a,b)},
pB(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$cX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.af(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.X(m,"id IN ("+o+")",b),$async$cX)
case 3:m=A.k([m],t.s)
B.b.C(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.X("lp_outbox",n,m),$async$cX)
case 4:s=5
return A.a(a.X("lp_sync_row",n,m),$async$cX)
case 5:case 1:return A.e(q,r)}})
return A.f($async$cX,r)},
eF(a,b){var s,r,q,p=A.t(t.N,t.X)
for(s=a.gac(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.kl("archived",new A.pO())
return p},
ll(a,b,c){var s,r,q,p,o
if(a==null)return B.cD
s=t.N
r=A.aN(s)
s=A.d2(a.gK(),s)
s.C(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hB(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.t.Y(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.O(r,r.$ti.c)
B.b.aE(o)
return o},
dV(a){return this.rG(a)},
rG(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbl().ai('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dV)
case 3:m=c
l=J.M(m)
if(l.gE(m)){q=null
s=1
break}o=p.a
q=A.ce(n,l.gG(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
hg(a){return this.rk(a)},
rk(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gbl().ai('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hg)
case 3:j=c
k=J.M(j)
if(k.gE(j)){q=B.da
s=1
break}o=k.gG(j)
k=p.a
n=A.ce(l,o,k.ax,k.ay)
m=o.h(0,"s_sync_state")!=null?A.jt(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.eW(n,m,o.h(0,"o_kind")!=null?A.mw(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
bT(a){return this.nW(a)},
nW(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
var $async$bT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.d==null
if(g&&p.b.e.a.J(a)){q=p.b.e.bT(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
s=m>1?3:5
break
case 3:s=6
return A.a(p.gbl().ai("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bT)
case 6:s=4
break
case 5:s=7
return A.a(p.gbl().ai('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bT)
case 7:case 4:k=c
l=J.M(k)
if(l.gE(k)){if(g)o.e.kJ(a,null)
q=null
s=1
break}j=l.gG(k)
l=p.a
i=A.ce(n,j,l.ax,l.ay)
h=A.bc(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.Lo(n,i,h,m)
if(g)o.e.kJ(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bT,r)},
hq(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.ay('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.CG(p,n)
if(m!=null)throw A.b(A.ay(A.Hm(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.ay("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.q_.prototype={
$1(a){return a.c3(this.a.b.a.a).ij(this.b)},
$S:3}
A.q2.prototype={
$1(a){return a.c3(this.a.b.a.a).nf(this.b)},
$S:3}
A.pZ.prototype={
$1(a){return a.c3(this.a.b.a.a).n1(this.b)},
$S:3}
A.q1.prototype={
$1(a){return a.c3(this.a.b.a.a).ng(this.b)},
$S:3}
A.pX.prototype={
$1(a){return a.c3(this.a.b.a.a).mZ(this.b,this.c)},
$S:3}
A.pW.prototype={
$1(a){return a.c3(this.a.b.a.a).n_(this.b)},
$S:3}
A.pV.prototype={
$1(a){return a.c3(this.a.b.a.a).ml(this.b)},
$S:3}
A.q0.prototype={
$1(a){return a.c3(this.a.b.a.a).n9(this.b)},
$S:3}
A.pY.prototype={
$1(a){return a.c3(this.a.b.a.a).kk(this.b)},
$S:3}
A.pQ.prototype={
nm(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
$1(a){return this.nm(a)},
$S:112}
A.pP.prototype={
$1(a){return a!=="id"},
$S:10}
A.pU.prototype={
$1(a){return a>1},
$S:113}
A.pT.prototype={
$1(a){return a!=="id"},
$S:10}
A.pS.prototype={
$2(a,b){var s=t.N
return B.b.B(A.af(b,"("+B.b.B(A.af(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:114}
A.pR.prototype={
$1(a){return a!=="id"},
$S:10}
A.pN.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.pO.prototype={
$0(){return!1},
$S:65}
A.ho.prototype={$iG:1}
A.nX.prototype={}
A.bH.prototype={
Z(a){this.c.push(a)
this.a.y.r+=a.b.a},
bc(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
c3(a){var s=this.a
return new A.fh(s,s.aw(a),this.b,this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.x("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cz(o,a,b)},
cz(a,b,c){return this.tB(a,b,c,c)},
tB(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cz=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cz)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.y
k=e.r
p=5
d=A.Cc(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.p4(new A.x4(a3,j,a4),null,A.m([$.kB(),j],f,f),a4.i("A<0>")),$async$cz)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cz)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cz)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cz)
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
if(a>m)B.b.kp(h,m,a)
a=g.length
if(a>l)B.b.kp(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cz,r)}}
A.x4.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.zA.prototype={}
A.mL.prototype={
kL(a){return a.a===this.w.b.a},
f5(){var s=this.w
return s.e7(s.w==null&&!s.x?50:null).W(new A.w6(),t.J)},
mu(a){return A.LN(a,new A.w5(this),this.w.r.length!==0)},
mY(a){var s=this.x
return s==null?null:s.t(0,a)},
kf(a,b){var s=this.x
return s==null?null:s.bx(a,b)},
iG(){var s=this.x=A.wy(this.gjQ(),new A.w7(this),null,!1,t.J)
return new A.b5(s,A.n(s).i("b5<1>"))},
f_(){this.kR()
var s=this.x
if(s!=null)s.q()}}
A.w6.prototype={
$1(a){return a.a},
$S:116}
A.w5.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.w7.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.dW(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.mt.prototype={
kL(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.F(0,this.x))return!1
return!0},
f5(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$f5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.r.aI(n.a,1,"id = ?",[p.x]),$async$f5)
case 3:m=b
l=J.M(m)
if(l.gE(m)){q=null
s=1
break}q=A.ce(n,l.gG(m),o.ax,o.ay)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f5,r)},
mu(a){return a==null?"<null>":A.as(B.m.v(B.e.v(A.aj(a))).a)},
mY(a){var s=this.y
return s==null?null:s.t(0,a)},
kf(a,b){var s=this.y
return s==null?null:s.bx(a,b)},
iG(){var s=this.y=A.wy(this.gjQ(),new A.uS(this),null,!1,t.b)
return new A.b5(s,A.n(s).i("b5<1>"))},
f_(){this.kR()
var s=this.y
if(s!=null)s.q()}}
A.uS.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.dW(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.fg.prototype={
kf(a,b){},
az(){var s=this.a.a$.a
this.c=new A.b0(s,A.n(s).i("b0<1>")).aT(this.gqT())},
qU(a){var s,r=this
if(!r.kL(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.D()
r.d=A.cR(r.b,r.glS())},
dW(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$dW=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.y;++i.y
q=3
s=6
return A.a(n.f5(),$async$dW)
case 6:m=b
l=n.mu(m)
if(!J.v(l,n.r)){n.r=l;++i.z
n.mY(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.E(g)
j=A.ah(g)
n.kf(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.D()
n.d=A.cR(n.b,n.glS())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dW,r)},
f_(){var s=this.d
if(s!=null)s.D()
s=this.c
if(s!=null)s.D()}}
A.xI.prototype={
aW(a,b){var s,r=this;++r.b
r.lI()
s=new A.u($.C,b.i("u<0>"))
r.a=r.a.W(new A.xJ(r,new A.aI(s,b.i("aI<0>")),a),t.H)
return s},
lI(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.xJ.prototype={
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
m=A.E(i)
l=A.ah(i)
n.b.c4(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lI()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:37}
A.pt.prototype={}
A.fd.prototype={
l(a){return"BlobMissingError: "+this.a},
$iG:1}
A.kY.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iG:1}
A.nb.prototype={}
A.Bb.prototype={
$1(a){return B.b.C(this.a,a)},
$S:119}
A.iu.prototype={}
A.rl.prototype={
bs(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bs=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.bZ
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.cx
a3===$&&A.y()
b5=J
s=3
return A.a(a3.f0(25),$async$bs)
case 3:a4=b5.D(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.b7?10:12
break
case 10:s=13
return A.a(n.cq(i,b2),$async$bs)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.mW(i.b),$async$bs)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b8?17:18
break
case 17:s=19
return A.a(n.eL(i),$async$bs)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.mW(i.b),$async$bs)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.E(b3)
j=!0
e=i.w+1
d=a5.mA(e)
a8=i.b
a9=J.a_(f)
b0=a6.$0()
s=23
return A.a(a3.w6(a8,a9,e,b0+B.c.N(d.a,1000)),$async$bs)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.dx,a4=new A.bF(a3,a3.r,a3.e,A.n(a3).i("bF<1>")),a2=a2.r
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.w(A.x('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.ce("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bs)
case 28:a5=b5.D(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.S(b,"ref_id")
a6.toString
a=A.F(a6)
a6=J.S(b,"record_id")
a6.toString
a0=A.F(a6)
a1=A.a6(J.S(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.d9(a0,a,a1,c),$async$bs)
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
case 25:q=new A.iu(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bs,r)},
cq(a,b){return this.ro(a,b)},
ro(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cq=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.av(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.F(a1)
l=a0.h(0,"hash")
l.toString
A.F(l)
k=A.a6(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bp(l),$async$cq)
case 3:if(!a6)throw A.b(A.x("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bi(l),$async$cq)
case 4:j=a6
if(j==null)throw A.b(A.x("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.y
i===$&&A.y()
s=9
return A.a(i.bU(a3.d),$async$cq)
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
if(m!=null){f=B.a.A(l,0,B.c.bM(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.x7(a3.d,A.m([k,new A.h8(k,j,new A.rn(a4,l))],t.N,t.h3)),$async$cq)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga0(l):k
case 11:s=14
return A.a(n.a.a2(new A.ro(a,a1,a3),t.P),$async$cq)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cq,r)},
eL(a){return this.rn(a)},
rn(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.av(a.f,null))
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
return A.a(p.b.x5(a.d,A.k([o],t.s)),$async$eL)
case 5:case 4:s=6
return A.a(p.a.a2(new A.rm(l,n,a),t.P),$async$eL)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
d9(a,b,c,d){return this.uT(a,b,c,d)},
uT(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$d9=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.y
l===$&&A.y()
k=m
s=4
return A.a(l.hO(c,a,null),$async$d9)
case 4:s=3
return A.a(k.ij(f),$async$d9)
case 3:o=f
s=5
return A.a(m.bi(o),$async$d9)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.rp(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$d9)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d9,r)},
dg(a,b,c,d){return this.wa(a,b,c,d)},
wa(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$dg=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ce("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$dg)
case 2:k=f
j=A.ub(c,A.a0(c).c)
i=J.aA(k)
h=t.v
g=A.d2(new A.bI(i.cc(k,new A.rq(),t.x),h),h.i("o.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.F(0,n)?6:7
break
case 6:s=8
return A.a(a.c9(0,"lp_file_refs",A.m(["ref_id",A.hZ(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.bX),$async$dg)
case 8:case 7:case 4:c.length===h||(0,A.q)(c),++o
s=3
break
case 5:i=i.gu(k)
case 9:if(!i.k()){s=10
break}h=i.gn()
m=A.a6(h.h(0,"remote_name"))
if(m==null){s=9
break}if(j.F(0,m)){s=9
break}q=h.h(0,"state")
q.toString
A.F(q)
if(q==="pending_remove"||q==="pending_upload"){s=9
break}q=h.h(0,"ref_id")
q.toString
s=11
return A.a(a.X("lp_file_refs","ref_id = ?",[q]),$async$dg)
case 11:l=A.a6(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.S(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aD(u.y,[l]),$async$dg)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dg,r)}}
A.rn.prototype={
$0(){return this.a.cH(this.b)},
$S:120}
A.ro.prototype={
$1(a){return this.np(a)},
np(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.Z(new A.a1(p.c,A.ar([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rm.prototype={
$1(a){return this.no(a)},
no(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.X("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aD(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.Z(new A.a1(p.c,A.ar([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rp.prototype={
$1(a){return this.nq(a)},
nq(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.i5(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.Z(new A.a1(q.f,A.ar([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rq.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:121}
A.bh.prototype={}
A.rk.prototype={
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
m=A.bc(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.bc(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bh(j,s,r,q,p,o,n,m,l,A.a6(k.h(0,"last_error")))},
$S:122}
A.uf.prototype={
glX(){return this.b},
gi4(){var s=0,r=A.h(t.y),q,p=this
var $async$gi4=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dM()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gi4,r)},
ee(a,b,c){return this.vW(a,b,c)},
vW(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$ee=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.r.ce("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$ee)
case 3:o=n.bB(e,A.M6(),t.A)
o=A.O(o,o.$ti.i("Z.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ee,r)},
d6(a,b,c,d,e,f,g,h){return this.tY(a,b,c,d,e,f,g,h)},
tY(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l
var $async$d6=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:m=p.glX()
l=!a
if(l){s=3
break}else j=l
s=4
break
case 3:s=5
return A.a(m.dM(),$async$d6)
case 5:j=!j
case 4:if(j)throw A.b(A.x("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
s=6
return A.a(m.di(b,c,d),$async$d6)
case 6:o=j
s=7
return A.a(m.bi(o),$async$d6)
case 7:n=j
if(n==null)n=0
s=8
return A.a(p.a.a2(new A.ug(p,h,g,e,o,n,A.hZ(),f),t.A),$async$d6)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d6,r)},
fj(a,b,c,d,e){return this.wd(a,b,c,d,e)},
wd(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fj=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.glX()
s=3
return A.a(p.ee(a,c,e),$async$fj)
case 3:k=g
j=J.M(k)
if(j.gE(k))throw A.b(A.x("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.f7(k,new A.ui(d),new A.uj(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.x("File is remote_only; download it before opening."))
j=p.a
n=j.ch.$0()
m=o.e
s=4
return A.a(j.r.aD("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$fj)
case 4:q=l.cH(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fj,r)},
ft(a,b,c,d,e,f){return this.wJ(0,b,c,d,e,f)},
wJ(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$ft=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ee(b,d,f),$async$ft)
case 3:n=h
m=J.M(n)
if(m.gE(n)){s=1
break}o=e!=null?m.f7(n,new A.uk(e),new A.ul(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.um(p,o,f,d,b),t.P),$async$ft)
case 4:case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
bg(a,b){return this.nV(a,b)},
nV(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bg=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e2(a8),$async$bg)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.ch.$0()-B.c.N(a7.a,1000)
s=6
return A.a(e.a2(new A.uh(a2,n),t.P),$async$bg)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fc(),$async$bg)
case 13:l=b0
s=J.e9(l)?14:15
break
case 14:k=0
j=A.aN(t.N)
d=e.r,c=t.s
case 16:s=18
return A.a(d.wr("lp_blobs",A.k(["hash"],c),250,k,"hash ASC"),$async$bg)
case 18:i=b0
for(b=J.D(i);b.k();){h=b.gn()
a=J.S(h,"hash")
a.toString
J.aL(j,A.F(a))}if(J.ap(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.D(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.Bt(j,g)){s=19
break}p=22
b=new A.u($.C,c)
b.aK(null)
s=25
return A.a(b,$async$bg)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.d8(g),$async$bg)
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
case 12:case 8:e=e.r,d=t.s
case 27:s=29
return A.a(e.wt("lp_blobs",A.k(["hash"],d),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bg)
case 29:a1=b0
c=J.M(a1)
if(c.gE(a1)){s=28
break}c=c.gu(a1)
case 30:if(!c.k()){s=31
break}b=c.gn().h(0,"hash")
b.toString
A.F(b)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.d8(b),$async$bg)
case 34:case 33:s=35
return A.a(e.X("lp_blobs","hash = ?",[b]),$async$bg)
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
return A.f($async$bg,r)},
cB(a){return this.v1(a)},
v1(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.r
e=A
s=3
return A.a(g.b1("SELECT SUM(size) as total FROM lp_blobs"),$async$cB)
case 3:f=e.f5(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.b1("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cB)
case 6:l=c
k=J.M(l)
if(k.gE(l)){s=5
break}k=k.gu(l)
case 7:if(!k.k()){s=8
break}j=k.gn()
if(f<=a){s=8
break}i=j.h(0,"hash")
i.toString
A.F(i)
j=j.h(0,"size")
j.toString
A.ao(j)
s=9
return A.a(h.d8(i),$async$cB)
case 9:s=10
return A.a(g.L("lp_file_refs",A.m(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$cB)
case 10:s=11
return A.a(g.X("lp_blobs","hash = ?",[i]),$async$cB)
case 11:f-=j;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cB,r)}}
A.ug.prototype={
$1(a){return this.nx(a)},
nx(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.ch.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.ek("lp_file_refs",A.k(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.M(c)
if(b.gV(c)){q=A.Dr(b.gG(c))
s=1
break}s=4
return A.a(A.i5(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.ek("lp_outbox",A.k(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.M(o)
n=h.gV(o)&&J.S(h.gG(o),"base_updated")==null?A.a6(J.S(h.gG(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.c9(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.Q),$async$$1)
case 6:k=A.hZ()
s=7
return A.a(j.aC(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a7(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.Z(new A.a1(g,A.ar([f],m)))
q=new A.bh(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:123}
A.ui.prototype={
$1(a){return a.a===this.a},
$S:45}
A.uj.prototype={
$0(){return A.w(A.x("FileRef "+this.a+" not found"))},
$S:32}
A.uk.prototype={
$1(a){return a.a===this.a},
$S:45}
A.ul.prototype={
$0(){return A.w(A.x("FileRef "+this.a+" not found"))},
$S:32}
A.um.prototype={
$1(a){return this.nz(a)},
nz(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.a.a.ch.$0()
n=q.b
m=n.r==="pending_upload"&&n.f==null
l=t.N
k=t.X
j=n.a
i=n.e
s=m?2:4
break
case 2:s=5
return A.a(p.X("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aD(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aC(0,"lp_op_queue",A.m(["op_id",A.hZ(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a7(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.x),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.Z(new A.a1(q.c,A.ar([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uh.prototype={
$1(a){return this.ny(a)},
ny(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dx,p=new A.bF(p,p.r,p.e,A.n(p).i("bF<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ai('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.z(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
case 4:l=h.D(c)
case 5:if(!l.k()){s=6
break}k=l.gn()
j=k.h(0,"ref_id")
j.toString
A.F(j)
k=k.h(0,"hash")
k.toString
A.F(k)
s=7
return A.a(i.X("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 7:s=8
return A.a(i.aD(u.y,[k]),$async$$1)
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
A.xr.prototype={
eK(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eK=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.i4()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a5(n.getDirectory(),l),$async$eK)
case 7:m=b
s=8
return A.a(A.a5(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eK)
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
dM(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eK(),$async$dM)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dM,r)},
bn(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bn=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dM(),$async$bn)
case 3:if(!b){q=null
s=1
break}p=5
m=A.i4()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a5(m.getDirectory(),k),$async$bn)
case 8:l=b
s=9
return A.a(A.a5(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bn)
case 9:k=b
q=new A.ol(k)
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
return A.f($async$bn,r)},
di(a,b,c){return this.wp(a,b,c)},
ij(a){return this.di(a,null,null)},
wp(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$di=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.y6(A.k([],t.bs))
s=3
return A.a(A.kv(a,b,c,null,new A.xs(o)),$async$di)
case 3:n=e
m=o.kt()
s=4
return A.a(p.bn(),$async$di)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.b_(k,m),$async$di)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$di,r)},
cH(a){return this.wf(a)},
wf(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cH=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.kZ(a)
j=n.b
if(j.J(a)){j=j.h(0,a)
j.toString
q=A.C7(j,t.L)
s=1
break}s=3
return A.a(n.bn(),$async$cH)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.el(a),$async$cH)
case 10:l=c
j=A.C7(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.E(h)
if(!(k instanceof A.fd))throw A.b(A.Db(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.x("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cH,r)},
d8(a){return this.un(a)},
un(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$d8=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.kZ(a)
o.b.H(0,a)
s=2
return A.a(o.bn(),$async$d8)
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
m=A.E(k)
if(!(m instanceof A.fd))throw A.b(A.Db(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$d8,r)},
bp(a){return this.v7(a)},
v7(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bp=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kZ(a)
if(p.b.J(a)){q=!0
s=1
break}s=3
return A.a(p.bn(),$async$bp)
case 3:o=c
if(o!=null){q=o.bp(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bp,r)},
bi(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bi=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kZ(a)
o=p.b
if(o.J(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bn(),$async$bi)
case 3:n=c
if(n!=null){q=n.bi(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bi,r)},
e2(a){return this.u4(a)},
u4(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e2=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bn(),$async$e2)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.ed(),$async$e2)
case 8:k=f.D(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.H6(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.H(0,l),$async$e2)
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
return A.f($async$e2,r)},
fc(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fc=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.d2(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bn(),$async$fc)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.ed(),$async$fc)
case 10:j=f.D(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.CQ()
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
return A.f($async$fc,r)}}
A.xs.prototype={
$1(a){return this.a.t(0,a)},
$S:15}
A.ol.prototype={
el(a){return this.wz(a)},
wz(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$el=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),i),$async$el)
case 7:m=c
s=8
return A.a(A.a5(m.getFile(),i),$async$el)
case 8:l=c
s=9
return A.a(A.a5(l.arrayBuffer(),t.a),$async$el)
case 9:k=c
i=A.bU(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.E(g)
if(A.Ef(j))throw A.b(A.Da(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$el,r)},
b_(a,b){return this.xp(a,b)},
xp(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$b_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.m
n=A
s=3
return A.a(A.a5(q.a.getFileHandle(a,{create:!0}),p),$async$b_)
case 3:s=2
return A.a(n.a5(d.createWritable(),p),$async$b_)
case 2:o=d
p=t.X
s=4
return A.a(A.a5(o.write(t.a.a(B.f.gaa(b))),p),$async$b_)
case 4:s=5
return A.a(A.a5(o.close(),p),$async$b_)
case 5:return A.e(null,r)}})
return A.f($async$b_,r)},
H(a,b){return this.wK(0,b)},
wK(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$H=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.BF(o.a,b),$async$H)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.E(l)
if(A.Ef(n))throw A.b(A.Da(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$H,r)},
bp(a){return this.v8(a)},
v8(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
var $async$bp=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),t.m),$async$bp)
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
return A.f($async$bp,r)},
bi(a){return this.oa(a)},
oa(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bi=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
k=t.m
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),k),$async$bi)
case 7:m=c
s=8
return A.a(A.a5(m.getFile(),k),$async$bi)
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
return A.f($async$bi,r)},
ed(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$ed=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.k([],t.s)
j=new A.cx(A.cy(A.Ds(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$ed)
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
return A.a(j.D(),$async$ed)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ed,r)},
$iDP:1}
A.ni.prototype={
gn6(){return 1}}
A.pq.prototype={
dn(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eE(),$async$dn)
case 5:o=b
s=o.gn6()<0.25?6:7
break
case 6:s=8
return A.a(p.iP(o),$async$dn)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gn6()<0.25?9:10
break
case 9:s=11
return A.a(p.iP(m),$async$dn)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dn,r)},
im(){var s=0,r=A.h(t.q),q,p=this
var $async$im=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eE(),$async$im)
case 3:q=p.iP(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$im,r)},
eE(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eE=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.jN():j
p=3
s=6
return A.a(l,$async$eE)
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
return A.f($async$eE,r)},
iP(a){var s=this.c
if(s!=null)return s
return this.c=this.fW(a)},
fW(a){return this.pH(a)},
pH(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fW=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.x("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.km(l),$async$fW)
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
return A.f($async$fW,r)}}
A.mx.prototype={
oz(a,b,c,d,e,f,g,h){var s=this,r=new A.pq(s.b)
s.x!==$&&A.cf()
s.x=r
s.y!==$&&A.cf()
s.y=new A.v8(s.w,s.a,r)},
ig(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$ig=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.as){s=1
break}n.as=!0
if(n.at){s=1
break}p=4
m=n.y
m===$&&A.y()
s=7
return A.a(m.ii(),$async$ig)
case 7:n.Q=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.E(k)
if(m instanceof A.cG){n.Q=!1
n.at=!0}else if(m instanceof A.bv)n.as=n.Q=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ig,r)},
fO(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.z!=null){s=1
break}o=p.y
o===$&&A.y()
n=A.Im(B.bY,o,A.k([p.r],t.s),p.gr3(),p.gr0())
p.z=n
s=3
return A.a(n.az(),$async$fO)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fO,r)},
ex(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ex=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.z
o=o==null?null:o.aF()
s=2
return A.a(o instanceof A.u?o:A.bp(o,t.H),$async$ex)
case 2:q.z=null
for(o=q.ay,p=new A.aS(o,o.r,o.e,A.n(o).i("aS<2>"));p.k();)p.d.D()
o.ab(0)
q.ch.ab(0)
return A.e(null,r)}})
return A.f($async$ex,r)},
r1(){var s,r,q,p
for(s=this.CW,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
this.eB(p,new A.cB(p,B.a9,null))}},
r4(a){var s=a.b,r=s.b
if(!B.b.F(this.CW,r))return
if(a.a==="delete"){this.hs(s)
return}this.eB(r,new A.cB(r,B.a9,s))},
hs(a){return this.tv(a)},
tv(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hs=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.F(n.CW,j)){s=1
break}m=null
p=4
l=n.y
l===$&&A.y()
s=7
return A.a(l.bU(a.a),$async$hs)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.E(i)
if(l instanceof A.cK){n.eB(j,new A.cB(j,B.aO,null))
s=1
break}else if(l instanceof A.bv){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eB(j,new A.cB(j,B.aO,null))
s=1
break}n.eB(j,new A.cB(j,B.a9,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hs,r)},
eB(a,b){var s,r,q=this
q.ch.j(0,a,b)
s=q.ay
r=s.h(0,a)
if(r!=null)r.D()
s.j(0,a,A.cR(q.c,new A.v4(q,a)))},
x5(a,b){return this.is(null,a,null,b,null)},
is(a,b,c,d,e){return this.x8(a,b,c,d,e)},
x7(a,b){return this.is(null,a,null,null,b)},
x8(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$is=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aU(0,new A.v5(),t.N,t.co)
n=p.y
n===$&&A.y()
q=n.ir(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$is,r)}}
A.v4.prototype={
$0(){var s,r=this.a,q=this.b
r.ay.H(0,q)
s=r.ch.H(0,q)
if(s!=null&&(r.ax.c&4)===0)r.ax.t(0,s)},
$S:0}
A.v5.prototype={
$2(a,b){return new A.R(a,new A.dy("imgs+",b.a,b.b,b.c),t.ia)},
$S:126}
A.vo.prototype={}
A.v8.prototype={
fe(a,b,c,d,e,f){return this.vY(a,b,c,d,e,f)},
vY(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fe=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.MJ(a,e,c)
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.z(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.z(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.z(c,"'","\\'")+"'")}n=t.N
n=A.t(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.iq(B.c.bM(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.B(b,","))
k=p.b.br("/api/collections/data/records").kq(n)
s=3
return A.a(p.m0("GET",k),$async$fe)
case 3:j=a0
p.cY(j,A.k([200],t.t),k)
i=p.cW(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bu("List response has no items array."))
h=J.bB(i,new A.vf(p),t.Q)
h=A.O(h,h.$ti.i("Z.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fe,r)},
bU(a){return this.nY(a)},
nY(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.br("/api/collections/data/records/"+A.hO(2,a,B.l,!1))
s=3
return A.a(p.m0("GET",o),$async$bU)
case 3:n=c
if(n.a===404)throw A.b(A.Ik("not found"))
p.cY(n,A.k([200],t.t),o)
q=p.dO(p.cW(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)},
hK(a,b,c){return this.uf(a,b,c)},
uf(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hK=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.br("/api/collections/data/records")
s=3
return A.a(p.eS("POST",o,B.h.a7(A.m(["id",b,"store",c,"data",B.h.av(a,null)],t.N,t.z),null)),$async$hK)
case 3:n=e
if(n.a===400&&p.qE(n))throw A.b(new A.fp(p.eD(n)))
p.cY(n,A.k([200,201],t.t),o)
q=p.dO(p.cW(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
qE(a){var s,r,q,p,o,n
try{s=this.cW(a)
r=J.S(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.v(p,"validation_not_unique")||J.v(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fC(a,b,c){return this.x4(a,b,c)},
x4(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.br("/api/collections/data/records/"+A.hO(2,c,B.l,!1))
s=3
return A.a(p.eS("PATCH",o,B.h.a7(A.m(["data",B.h.av(b,null)],t.N,t.z),null)),$async$fC)
case 3:n=e
p.cY(n,A.k([200],t.t),o)
q=p.dO(p.cW(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
ir(a,b,c,d,e){return this.x6(a,b,c,d,e)},
x6(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$ir=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.br("/api/collections/data/records/"+A.hO(2,b,B.l,!1))
m=t.N
l=A.t(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a7(d,null))
if(e==null)m=null
else{m=A.n(e).i("aq<2>")
m=A.O(new A.aq(e,m),m.i("o.E"))}s=3
return A.a(p.t5(new A.lT("PATCH",n,B.ay,l,m==null?B.cA:m)),$async$ir)
case 3:o=g
p.cY(o,A.k([200],t.t),n)
q=p.dO(p.cW(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ir,r)},
hO(a,b,c){return this.uU(a,b,c)},
uU(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$hO=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.t(l,l)
o=p.b.br("/api/files/data/"+A.hO(2,b,B.l,!1)+"/"+A.hO(2,a,B.l,!1))
n=l.a===0?o:o.kq(l)
s=3
return A.a(p.r6(new A.ep("GET",n,B.ay,null)),$async$hO)
case 3:m=e
p.cY(new A.cH(m.a,m.b,""),A.k([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
fo(a){return this.wo(a)},
wo(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$fo=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.br("/api/batch")
a3=A.k([],t.ic)
for(o=J.aA(a4),n=o.gu(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.h.av(j.d,null)],m,l)],m,k))}s=3
return A.a(p.eS("POST",a2,B.h.a7(A.m(["requests",a3],m,t.ew),null)),$async$fo)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.HI(p.eD(i)))
if(a3===400)throw A.b(new A.eb(p.eD(i)))
p.cY(i,A.k([200],t.t),a2)
h=B.h.av(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.bu("Batch response has no results array."))}else throw A.b(A.bu("Batch response is not a list or envelope."))
g=e}a3=J.M(g)
if(a3.gm(g)!==o.gm(a4))throw A.b(A.bu("Batch response has "+a3.gm(g)+" results for "+o.gm(a4)+" requests."))
d=A.k([],t.g2)
for(n=t.f,c=0;c<o.gm(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.bu("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dp(a)
a0=l.R(a,200)||l.R(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dO(a1):null
k=a0?null:p.pM(b)
j=a0&&n.b(a1)?B.h.a7(a1.h(0,"data"),null):null
d.push(new A.jc(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
ii(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$ii=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eS("POST",p.b.br("/api/batch"),B.h.a7(A.m(["requests",[]],t.N,t.kS),null)),$async$ii)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.Hb(p.eD(o)))
if(n===408||n===429||n>=500)throw A.b(A.E8("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ii,r)},
eS(a,b,c){return this.c1(new A.vb(this,a,b,c),new A.vc(),t.w)},
m0(a,b){return this.eS(a,b,null)},
t5(a){return this.c1(new A.vd(this,a),new A.ve(),t.w)},
r6(a){return this.c1(new A.v9(this,a),new A.va(),t.lI)},
c1(a,b,c){return this.tA(a,b,c,c)},
tA(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c1=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.dn(),$async$c1)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c1)
case 8:l=f
s=J.v(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.im(),$async$c1)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$c1)
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
i=A.E(g)
if(i instanceof A.dz){j=i
throw A.b(A.E8(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c1,r)},
jv(a,b,c,d){return this.t3(a,b,c,d)},
t3(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jv=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.t(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b5(new A.ep(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jv,r)},
cY(a,b,c){if(B.b.F(b,a.a))return
throw A.b(this.qI(a,c))},
qI(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eD(a)
if(401===s)return new A.c0(q)
if(403===s)return new A.cG(q)
if(404===s)return new A.cK(q)
if(408===s||429===s)return new A.eE(r,q)
if(400===s)return new A.fN(q)
if(s>=500)return new A.jj(q)
return new A.fP("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eD(a){var s,r,q,p,o
try{s=this.cW(a)
r=J.S(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.S(s,"data")
if(t.f.b(q)){p=q
p=p.gV(p)}else p=!1
if(p){p=B.h.a7(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
cW(a){var s,r,q,p=null
try{p=B.h.av(a.c,null)}catch(r){q=A.E(r)
if(t.Y.b(q)){s=q
throw A.b(A.bu("Response is not valid JSON: "+s.gkd()))}else throw r}if(t.f.b(p))return A.b9(p,t.N,t.X)
throw A.b(A.bu("Expected a JSON object, got "+J.bO(p).l(0)+"."))},
dO(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bu("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bu("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.b9(o,n,m):A.t(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.D4(k,n)
j=A.O(j,j.$ti.i("o.E"))}else j=B.q
return new A.cM(s,p,q,l,j)},
pM(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.vf.prototype={
$1(a){return this.a.dO(a)},
$S:127}
A.vb.prototype={
$1(a){var s=this
return s.a.jv(s.b,s.c,s.d,a)},
$S:70}
A.vc.prototype={
$1(a){return a.a},
$S:47}
A.vd.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.du(new A.lT(s.a,s.b,r,s.d,s.e))},
$S:70}
A.ve.prototype={
$1(a){return a.a},
$S:47}
A.v9.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.ej(new A.ep(s.a,s.b,r,s.d))},
$S:130}
A.va.prototype={
$1(a){return a.a},
$S:131}
A.j8.prototype={}
A.hI.prototype={}
A.vg.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eR()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aF(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.D()
s=2
return A.a(n instanceof A.u?n:A.bp(n,t.H),$async$aF)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.an()
return A.e(null,r)}})
return A.f($async$aF,r)},
eR(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eR=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.cT(),$async$eR)
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
return A.a(A.HO(n.$1(k),m),$async$eR)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eR,r)},
cT(){return this.po()},
po(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.dn(),$async$cT)
case 3:m=b
l=t.N
s=4
return A.a(n.a.ej(new A.ep("GET",n.b.br("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cT)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.iz("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aT(new A.vj()).D(),$async$cT)
case 7:s=1
break
case 6:++p.as
p.z=new A.aI(new A.u($.C,t.D),t.h)
n=$.p7()
l=A.k([],t.s)
o.a=o.b=!1
p.y=k.c.by(new A.vk(o,p,new A.zH(new A.yx(n),l),m),new A.vl(p),new A.vm(p))
s=8
return A.a(p.z.a,$async$cT)
case 8:p.y=null
if(o.a)throw A.b(A.iz("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$cT,r)},
h4(a,b){return this.q9(a,b)},
q9(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$h4=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b5(new A.ep("POST",l.b.br("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.h.a7(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$h4)
case 5:l=a4.a
if(l!==204&&l!==200)throw A.b(A.iz("realtime subscribe status "+l,null))
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
l=l.b(j)?A.b9(j,t.N,t.X):B.o
if(t.j.b(f)){c=J.D4(f,t.N)
c=A.O(c,c.$ti.i("o.E"))}else c=B.q
m=new A.cM(k,e,d,l,c)
p.w.$1(new A.j8(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$h4,r)}}
A.vn.prototype={
$1(a){return A.FS(a,this.a,this.b,A.MD())},
$S:132}
A.vj.prototype={
$1(a){},
$S:15}
A.vk.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.vb(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.q)(k),++n){m=k[n]
r.Q=r.Q.W(new A.vh(q,r,m,p),o).ms(new A.vi())}},
$S:15}
A.vh.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:k=n.a
if(k.a){s=1
break}p=4
s=7
return A.a(n.b.h4(n.c,n.d),$async$$1)
case 7:p=2
s=6
break
case 4:p=3
j=o.pop()
k.a=!0
k=n.b
l=k.y
l=l==null?null:l.D()
s=8
return A.a(l instanceof A.u?l:A.bp(l,t.H),$async$$1)
case 8:k=k.z
if((k.a.a&30)===0)k.an()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!k.b&&n.c.a!=null){k.b=!0
n.b.r.$0()}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:133}
A.vi.prototype={
$1(a){},
$S:17}
A.vl.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:0}
A.vm.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:17}
A.zH.prototype={
vb(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.kt()
r=A.k([],t.gy)
for(q=s.length,p=0;;){o=this.qB(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dm(p,o,q)))
p=o+1
m=this.pD(B.a.wY(new A.dk(!0).cU(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.f.b6(s,p))
return r},
qB(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
q0(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.ab(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.ab(k)
try{q=B.h.av(r,l)
if(t.f.b(q)){p=A.b9(q,t.N,t.X)
o=J.S(p,"clientId")
if(J.v(s,"PB_CONNECT")&&typeof o=="string")return new A.hI(o,l)
return new A.hI(l,p)}}catch(n){}return l},
pD(a){var s,r=this,q=null
if(a.length===0)return r.q0()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.ab(r.c)
return new A.hI(B.a.cf(B.a.af(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.cf(B.a.af(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.cf(B.a.af(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.ep.prototype={}
A.dy.prototype={
og(){return this.d.$0()},
gm(a){return this.c}}
A.lT.prototype={}
A.cH.prototype={}
A.dz.prototype={
l(a){return"HttpTransportException: "+this.a},
$iG:1}
A.dQ.prototype={}
A.v6.prototype={
b5(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b5=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.ej(a),$async$b5)
case 7:m=c
j=m.c
s=8
return A.a(B.aL.kS(j).ec(0).ip(B.ad),$async$b5)
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
j=A.E(g)
if(j instanceof A.dz)throw g
else{k=j
j=A.iz("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b5,r)},
du(a){return this.o6(a)},
o6(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$du=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.Ig(a6.a,a6.b)
h.r.C(0,a6.c)
h.x.C(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.og(),$async$du)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.Gd(a0)
a3=new A.fD("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cT(A.t(d,d),e))
b.push(new A.mj(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.q)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b5(m).ip(B.ad),$async$du)
case 11:k=a8
g=k.w
s=12
return A.a(B.aL.kS(g).ec(0).ip(B.ad),$async$du)
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
g=A.E(a5)
if(g instanceof A.dz)throw a5
else{i=g
g=A.iz("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$du,r)},
ej(a){return this.wh(a)},
wh(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ej=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.IC(a,a0)
a1.r.C(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjT().jS(j)
i.p9()
i.y=A.MN(j)
h=i.gcn()
if(h==null){j=t.N
i.scn(A.BS("text","plain",A.m(["charset",i.gjT().gaO()],j,j)))}else{j=i.gcn()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c5(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.J("charset")){j=t.N
f=A.m(["charset",i.gjT().gaO()],j,j)
e=h.a
d=h.b
c=A.b9(h.c,j,j)
c.C(0,f)
i.scn(A.BS(e,d,c))}}}p=4
s=7
return A.a(n.a.b5(a1).ip(B.ad),$async$ej)
case 7:m=a5
j=t.N
l=A.t(j,j)
m.e.a3(0,new A.v7(l))
j=m.b
i=m.w
q=new A.dQ(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.E(a2)
if(j instanceof A.dz)throw a2
else{k=j
a=A.iz("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ej,r)}}
A.v7.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:30}
A.pf.prototype={
aW(a,b){var s=this.a.W(new A.pg(a,b),b)
this.a=s.bS(new A.ph(b),new A.pi(),t.H)
return s}}
A.pg.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("A<0>(~)")}}
A.ph.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.pi.prototype={
$2(a,b){},
$S:12}
A.bf.prototype={
gn7(){var s=this.e
return s.gm(s)===1&&J.v(s.h(0,"__lp_deleted__"),!0)}}
A.qf.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.F(d)
s=e.h(0,"record_id")
s.toString
A.F(s)
r=A.AL(e.h(0,l),l,k)
q=A.AL(e.h(0,j),j,k)
p=A.AL(e.h(0,i),i,k)
o=A.FN(e.h(0,h),h,k)
n=A.FN(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ao(m)
return new A.bf(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.AL(e.h(0,f),f,k):null)},
$S:134}
A.qg.prototype={
fd(a){return this.vX(a)},
vX(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$fd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.r.wq("lp_conflicts","detected_at ASC",n,o),$async$fd)
case 3:o=m.bB(c,A.LO(),t.n8)
o=A.O(o,o.$ti.i("Z.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
dt(a,b){return this.nX(a,b)},
nX(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dt=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.aI("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dt)
case 3:o=d
n=J.M(o)
if(n.gE(o)){q=null
s=1
break}q=A.By(n.gG(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dt,r)},
x9(a){var s={},r=A.y8()
s.a=null
r.sjW(A.dP(new A.qj(s,r),new A.qk(s,this,a,new A.ql(this,r,a)),t.ba))
return r.aR().gcP()},
en(a,b,c){return this.wO(a,b,c)},
wO(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$en=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(c)
s=2
return A.a(p.a2(new A.qh(q,c,a,o.a,o,b),t.P),$async$en)
case 2:return A.e(null,r)}})
return A.f($async$en,r)},
eV(a,b){return this.tK(a,b)},
tK(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dt(a,b),$async$eV)
case 2:p=d
if(p==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=3
return A.a(q.en(b,p.d,a),$async$eV)
case 3:return A.e(null,r)}})
return A.f($async$eV,r)},
dZ(a,b){return this.tL(a,b)},
tL(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$dZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dt(a,b),$async$dZ)
case 3:n=d
if(n==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=n.gn7()?4:5
break
case 4:o=p.a
if(A.np(o)!=null)A.w(A.x(u.L))
s=6
return A.a(new A.fh(o,o.aw(a),null,null).kk(b),$async$dZ)
case 6:s=1
break
case 5:s=7
return A.a(p.en(b,n.e,a),$async$dZ)
case 7:case 1:return A.e(q,r)}})
return A.f($async$dZ,r)}}
A.ql.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.aR().gi5()){s=1
break}p=4
s=7
return A.a(n.a.fd(n.c),$async$$0)
case 7:m=b
if(!i.aR().gi5())J.aL(i.aR(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.E(h)
k=A.ah(h)
if(!i.aR().gi5())i.aR().bx(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:4}
A.qk.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b0(p,A.n(p).i("b0<1>")).aT(new A.qi(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.qi.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:36}
A.qj.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.u?p:A.bp(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.aR().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.qh.prototype={
$1(a){return this.nn(a)},
nn(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aI("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.M(a3)
if(a4.gE(a3))throw A.b(A.x("No conflict found for "+a1+"/"+a2))
o=A.By(a4.gG(a3))
n=o.gn7()
m=n?null:A.aj(o.e)
l=n?"":A.as(B.m.v(B.e.v(A.aj(A.be(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aI(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bA(a8)?4:5
break
case 4:s=7
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.X("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.X("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.Z(new A.a1(a1,A.ar([a2],a4)))
a6.Z(new A.a1("lp_conflicts",A.ar([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aI("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.M(k)
if(i.gV(k)){h=A.a6(J.S(i.gG(k),"base_updated"))
i=h==null?A.a6(J.S(i.gG(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.X("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cJ(p.f,i,h)
g.j(0,"id",a2)
f=J.v(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dn(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bK(n?B.o:o.e,g)
d=A.O(a4,A.n(a4).c)
B.b.aE(d)
c=A.aj(A.be(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a7(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aI("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.bA(a8)?14:16
break
case 14:a4=p.a.a
b=a4.ch.$0()
h=f?B.L:B.v
e=B.h.a7(d,null)
a4=a4.CW
a4===$&&A.y()
s=18
return A.a(a0.aC(0,"lp_outbox",A.FH(l,j,b,e,h,a4.fH(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.Z(new A.a1(a1,A.ar([a2],i)))
a6.Z(new A.a1("lp_conflicts",A.ar([a2],i)))
a4=o.d
a=A.bK(a4,g)
a.H(0,"id")
a6.bc(new A.aT(a1,a2,B.ac,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.nf.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dP(null,null,t.n6)
n.ay=A.dP(null,null,t.em)}n.z=!0
s=3
return A.a(n.aN(B.dj),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.ig(),$async$az)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.y()
k.f=l.Q
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
n.fr=new A.b0(l,A.n(l).i("b0<1>")).aT(n.gvB())
l=n.b.ax
n.fx=new A.b0(l,A.n(l).i("b0<1>")).aT(n.gvz())
p=2
s=12
break
case 10:p=9
h=o.pop()
s=13
return A.a(n.aF(),$async$az)
case 13:throw h
s=12
break
case 9:s=2
break
case 12:n.fy=A.E5(B.av,new A.wT(n))
s=14
return A.a(n.aN(n.dF()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.d3(),$async$az)
case 17:case 16:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$az,r)},
aF(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$aF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.z){s=1
break}p.z=!1;++p.db
o=p.fy
if(o!=null)o.D()
o=p.go
if(o!=null)o.D()
o=p.id
if(o!=null)o.D()
o=p.k1
if(o!=null)o.D()
s=3
return A.a(p.k4,$async$aF)
case 3:s=4
return A.a(p.dx,$async$aF)
case 4:s=5
return A.a(p.dy.a,$async$aF)
case 5:s=6
return A.a(p.p2,$async$aF)
case 6:o=p.fr
o=o==null?null:o.D()
n=t.H
s=7
return A.a(o instanceof A.u?o:A.bp(o,n),$async$aF)
case 7:o=p.fx
o=o==null?null:o.D()
s=8
return A.a(o instanceof A.u?o:A.bp(o,n),$async$aF)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.a3
o.t(0,B.a3)
s=12
return A.a(p.ax.q(),$async$aF)
case 12:s=10
break
case 11:p.y=B.a3
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aF)
case 15:case 14:p.y=B.a3
case 1:return A.e(q,r)}})
return A.f($async$aF,r)},
dF(){if(this.at)return B.bj
if(this.Q)return B.bh
if(this.as)return B.aC
return B.bi},
aN(a){return this.tl(a)},
tl(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.pJ(),$async$aN)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aN,r)},
pJ(){return this.p2=this.p2.W(new A.wL(this),t.H)},
fV(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fV=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=n.z
if(!g){s=1
break}m=0
l=0
k=0
j=0
p=4
g=n.e
g===$&&A.y()
s=7
return A.a(g.hH(),$async$fV)
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
if((g.c&4)===0)g.t(0,new A.hb(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fV,r)},
vC(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.rZ(B.ae)},
vA(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dx.J(s))return
r=a.c
if(r!=null&&a.b===B.a9){q.p1.push("fast:"+s)
q.dx=q.dx.W(new A.wR(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hn(B.ae,A.k([s],t.s))},
h_(a){return this.pR(a)},
pR(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h_=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hn(B.ae,A.k([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.y()
s=7
return A.a(l.hQ(a),$async$h_)
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
break}if(!m)n.hn(B.ae,A.k([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h_,r)},
vK(){if(!this.z)return
this.p1.push("cycle")
this.d3()},
hn(a,b){var s=this,r=s.go
if(r!=null)r.D()
if(b==null)s.k2=!0
else s.k3.C(0,b)
s.go=A.cR(a,new A.wQ(s))},
rZ(a){return this.hn(a,null)},
rY(a){var s=this.id
if(s!=null)s.D()
this.id=A.cR(B.D,new A.wP(this,a))},
jl(){this.as=!0
this.aN(B.aC)
A.ix(this.d,t.H)},
ef(){var s=0,r=A.h(t.H),q,p=this,o
var $async$ef=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.CW
o===$&&A.y()
s=3
return A.a(o.wM(),$async$ef)
case 3:s=4
return A.a(p.aN(p.dF()),$async$ef)
case 4:p.p1.push("cycle")
s=5
return A.a(p.d3(),$async$ef)
case 5:case 1:return A.e(q,r)}})
return A.f($async$ef,r)},
fM(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.H),q=this,p
var $async$fM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.D()
q.k1=A.cR(B.au,new A.wS(q))
s=3
break
case 4:s=5
return A.a(q.aN(B.bh),$async$fM)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fM,r)},
be(){var s=0,r=A.h(t.H),q=this
var $async$be=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aN(B.bj),$async$be)
case 2:return A.e(null,r)}})
return A.f($async$be,r)},
b2(){var s=0,r=A.h(t.H),q,p=this
var $async$b2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aN(p.dF()),$async$b2)
case 3:p.p1.push("cycle")
s=4
return A.a(p.d3(),$async$b2)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b2,r)},
jt(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.D()}s=t.mv
r=q.k4.W(new A.wM(q,a),s)
q.k4=r.bS(new A.wN(),new A.wO(),s)
return r},
d3(){return this.jt(null)},
b7(a){return this.pG(a)},
pG(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b7=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.N
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aN(n.dF()),$async$b7)
case 5:q=B.N
s=1
break
case 4:b3=t.N
a4=t.S
m=A.t(b3,a4)
l=A.t(b3,a4)
k=!1
j=!1
i=A.k([],t.s)
s=6
return A.a(n.aN(B.dk),$async$b7)
case 6:b3=b8==null
if(b3){a4=n.a.dx
a5=A.n(a4).i("T<1>")
a6=A.O(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.y()
s=14
return A.a(a5.dh(h),$async$b7)
case 14:g=c0
J.bZ(m,h,g.b)
if(g.f&&g.b>0)J.aL(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.E(b4)
if(a5 instanceof A.c0){n.jl()
s=9
break}else if(a5 instanceof A.bv){f=a5
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
return A.a(n.aN(B.aC),$async$b7)
case 17:q=n.ok=new A.bm(m,B.al,0,0,0,0,!0)
s=1
break
case 16:s=b3?18:19
break
case 18:p=21
e=n.cy
n.cy=!1
b3=n.r
b3===$&&A.y()
s=24
return A.a(b3.dA(e),$async$b7)
case 24:d=c0
for(b3=J.D(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.S(l,c.a)
if(a5==null)a5=0
J.bZ(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.E(b5)
if(b3 instanceof A.bv){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aN(B.dl),$async$b7)
case 25:a=B.a1
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.y()
s=33
return A.a(b3.fp(),$async$b7)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b1("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b7)
case 36:a0=c0
if(J.e9(a0)&&typeof J.S(J.c_(a0),"last_error")=="string"){b3=J.S(J.c_(a0),"last_error")
b3.toString
n.ch=A.F(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.E(b6)
if(b3 instanceof A.c0)n.jl()
else if(b3 instanceof A.bv){a1=b3
k=!0
n.ch=a1.a}else throw b6
s=32
break
case 29:s=2
break
case 32:case 27:p=38
b3=n.x
b3===$&&A.y()
s=41
return A.a(b3.bs(),$async$b7)
case 41:a2=c0
k=k||a2.d
if(a2.d&&n.ch==null)n.ch="file sync failed"
p=2
s=40
break
case 38:p=37
b7=o.pop()
a3=A.E(b7)
k=!0
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.N
s=1
break}if(J.ap(i)!==0)n.rY(i)
a9=k||a.f
b0=new A.aR(A.lo(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dF()
s=42
return A.a(n.aN(a9&&b1===B.bi?B.dm:b1),$async$b7)
case 42:q=n.ok=new A.bm(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b7,r)}}
A.wT.prototype={
$1(a){return this.a.vK()},
$S:61}
A.wL.prototype={
$1(a){return this.a.fV()},
$S:37}
A.wR.prototype={
$1(a){return this.a.h_(this.b)},
$S:37}
A.wQ.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.O(q,A.n(q).c)
s.k2=!1
q.ab(0)
if(r||p.length===0)s.d3()
else s.jt(p)},
$S:0}
A.wP.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jt(this.b)},
$S:0}
A.wS.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aN(p.dF()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.d3(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.wM.prototype={
$1(a){return this.a.b7(this.b)},
$S:136}
A.wN.prototype={
$1(a){return B.N},
$S:137}
A.wO.prototype={
$1(a){return B.N},
$S:138}
A.d3.prototype={
l(a){return"MapFailure: "+this.a},
$iG:1}
A.ex.prototype={}
A.AG.prototype={
$1(a){return typeof a=="string"},
$S:19}
A.AH.prototype={
$1(a){return typeof a=="string"},
$S:19}
A.uv.prototype={}
A.dJ.prototype={}
A.me.prototype={}
A.zv.prototype={}
A.zt.prototype={}
A.xN.prototype={}
A.uC.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.uB(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:140}
A.uw.prototype={
$1(a){return typeof a=="string"},
$S:19}
A.ux.prototype={
$1(a){return typeof a=="string"},
$S:19}
A.uy.prototype={
$1(a){return typeof a=="string"},
$S:19}
A.uz.prototype={
$1(a){return a instanceof A.u?a:A.bj(a,t.X)},
$S:141}
A.uA.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hB(s,s.r,A.n(s).c),r=this.b,q=J.M(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:142}
A.uT.prototype={
f0(a){return this.uV(a)},
uV(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.ch.$0()
e=e.r
s=3
return A.a(e.ws("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f0)
case 3:o=c
n=t.ox
m=A.k([],n)
for(l=J.D(o);l.k();)m.push(A.Il(l.gn()))
l=A.aN(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.q)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.kw(e,l),$async$f0)
case 4:h=c
g=A.k([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.q)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.F(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f0,r)},
mW(a){return this.a.a2(new A.uV(a),t.H)},
w6(a,b,c,d){return this.a.a2(new A.uW(c,d,b,a),t.H)}}
A.uV.prototype={
$1(a){return this.nB(a)},
nB(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:3}
A.uW.prototype={
$1(a){return this.nC(a)},
nC(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:3}
A.ps.prototype={}
A.iM.prototype={}
A.jd.prototype={}
A.uY.prototype={
fH(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cG(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
em(a,b,c){return this.wB(a,b,c)},
wB(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$em=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aI("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$em)
case 3:p=e
o=J.M(p)
q=o.gE(p)?null:A.mw(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$em,r)},
bQ(a,b,c){return this.wD(a,b,c)},
wD(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aI("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bQ)
case 3:p=e
o=J.M(p)
q=o.gE(p)?null:A.jt(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bQ,r)},
bo(a,b,c,d,e,f,g,h,i,j,k,l){return this.tV(a,b,c,d,e,f,g,h,i,j,k,l)},
tV(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bo=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a4)throw A.b(A.Dj("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ao
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.L
break A}if(B.E===a5){l=a6==null?B.v:B.a0
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.L
break B}if(B.E===a5){l=B.a0
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.E===a5){l=B.a0
break C}l=B.L
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.L
break D}if(B.E===a5){l=B.a0
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.X("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bo)
case 5:s=6
return A.a(a8.X("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bo)
case 6:s=7
return A.a(p.hr(a8,a2,a9),$async$bo)
case 7:s=8
return A.a(a8.X(a2,"id = ?",[a9]),$async$bo)
case 8:q=B.bM
s=1
break
case 4:k=p.a.ch.$0()
j=a4?null:b2.w
if(j==null)j=p.fH()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
l=t.N
f=A.aN(l)
e=a4?null:b2.r
if(e!=null)f.C(0,e)
f.C(0,a7)
d=A.O(f,f.$ti.c)
B.b.aE(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a7(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.i3(B.X)
e=B.b.B(A.af(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aD("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.G0(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bo)
case 12:s=10
break
case 11:s=13
return A.a(a8.aD('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bo)
case 13:case 10:f=A.k(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.C(f,B.cx)
if(o)B.b.C(f,B.cl)
s=a3?14:16
break
case 14:a3=A.i3(B.W)
l=B.b.B(A.af(16,"?",!1,l),", ")
s=17
return A.a(a8.aD("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.Gc(B.a5,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bo)
case 17:s=15
break
case 16:for(a3=f.length,a0=0,l="UPDATE lp_sync_row SET ";a0<a3;++a0){if(a0>0)l+=", "
l+='"'+f[a0]+'" = ?'}a3=l+' WHERE "store" = ? AND "record_id" = ?'
a1=["dirty",b,a+1,j,a1.b]
if(a4)B.b.C(a1,[i,h,g])
if(o)B.b.C(a1,[0,0,null])
a1.push(a2)
a1.push(a9)
s=18
return A.a(a8.aD(a3.charCodeAt(0)==0?a3:a3,a1),$async$bo)
case 18:case 15:q=new A.iM()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bo,r)},
hr(a,b,c){return this.tu(a,b,c)},
tu(a,b,c){var s=0,r=A.h(t.H)
var $async$hr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cz(a,b,c,!1),$async$hr)
case 2:return A.e(null,r)}})
return A.f($async$hr,r)},
f1(a,b){return this.uW(a,b)},
uW(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a2("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.O([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ai("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f1)
case 3:o=d
f=J.M(o)
if(f.gE(o)){q=B.cC
s=1
break}e=t.my
n=A.k([],e)
for(f=f.gu(o);f.k();)n.push(A.mw(f.gn()))
f=A.aN(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.q)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.kw(g,f),$async$f1)
case 4:j=d
i=A.k([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.q)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.F(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f1,r)},
kK(a){if(a.length===0)return A.bj(null,t.H)
return this.a.a2(new A.v3(this,a),t.H)},
aH(a,b){return this.ta(a,b)},
ta(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aH=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.aw(a0).a
a4=a2.ch.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aI("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 5:o=a9
n=J.M(o)
s=!(n.gV(o)&&!J.v(J.S(n.gG(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aI(a,1,"id = ?",[a1]),$async$aH)
case 8:m=a9
n=J.M(m)
l=n.gV(m)?A.ce(a3,n.gG(m),a2.ax,a2.ay):null
s=9
return A.a(b.L(a,A.dn(a3,J.v(a5.h(0,"archived"),!0),a2.ax,a2.ay,a1,a5),"id = ?",[a1]),$async$aH)
case 9:a6.Z(new A.a1(a0,A.ar([a1],t.N)))
k=A.bK(l==null?B.o:l,a5)
k.H(0,"id")
a6.bc(new A.aT(a0,a1,B.ac,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aI(a,1,"id = ?",[a1]),$async$aH)
case 10:j=a9
a5=J.M(j)
s=a5.gE(j)?11:12
break
case 11:s=13
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 13:s=14
return A.a(p.d_(b,a0,a1,a7.c,a4),$async$aH)
case 14:a6.Z(new A.a1(a0,A.ar([a1],t.N)))
s=1
break
case 12:n=a2.ax
a2=a2.ay
i=A.ce(a3,a5.gG(j),n,a2)
h=A.as(B.m.v(B.e.v(A.aj(A.be(a3,i)))).a)
a5=a7.b
g=A.as(B.m.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 18:s=19
return A.a(p.d_(b,a0,a1,a7.c,a4),$async$aH)
case 19:a6.Z(new A.a1(a0,A.ar([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.av(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.b9(d,a5,f):A.t(a5,f)
s=23
return A.a(b.L(a,A.dn(a3,J.v(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aH)
case 23:s=24
return A.a(b.X("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 24:s=25
return A.a(p.d_(b,a0,a1,a7.c,a4),$async$aH)
case 25:a6.Z(new A.a1(a0,A.ar([a1],a5)))
k=A.bK(i,c)
k.H(0,"id")
a6.bc(new A.aT(a0,a1,B.ac,B.A,i,c,k))
s=21
break
case 22:g=A.as(B.m.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aH)
case 28:a6.Z(new A.a1(a0,A.ar([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aH,r)},
d_(a,b,c,d,e){return this.qJ(a,b,c,d,e)},
qJ(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d_=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d_)
case 2:s=3
return A.a(a.L(q.a.aw(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d_)
case 3:return A.e(null,r)}})
return A.f($async$d_,r)},
wE(a,b,c,d,e){return this.a.a2(new A.v1(c,e,d,B.G,a,b),t.H)},
mV(a,b,c,d,e,f){return this.a.a2(new A.v0(this,c,f,b,a,d,e),t.H)},
ff(a,b,c,d,e){return this.mV(a,b,c,d,B.ao,e)},
mU(a,b,c){return this.a.a2(new A.v_(a,c,b),t.H)},
wM(){return this.a.a2(new A.v2(null),t.S)},
eW(a,b,c,d,e,f,g){return this.tS(a,b,c,d,e,f,g)},
tS(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$eW=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$eW)
case 2:p=A.t(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$eW)
case 3:return A.e(null,r)}})
return A.f($async$eW,r)}}
A.v3.prototype={
$1(a){return this.nH(a)},
nH(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
return A.a(o.aH(a,l[p]),$async$$1)
case 5:case 3:l.length===k||(0,A.q)(l),++p
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:3}
A.v1.prototype={
$1(a){return this.nF(a)},
nF(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:3}
A.v0.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.c
n=q.d
m=q.e
l=t.N
k=t.X
s=2
return A.a(p.aC(0,"lp_dead_letter",A.m(["at",q.a.a.ch.$0(),"kind",q.b,"store",o,"record_id",n,"error",m,"payload_json",q.f],l,k)),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state",q.r.b,"last_error",m],l,k),"store = ? AND record_id = ?",[o,n]),$async$$1)
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:3}
A.v_.prototype={
$1(a){return this.nD(a)},
nD(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:3}
A.v2.prototype={
$1(a){return this.nG(a)},
nG(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.k(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:143}
A.ea.prototype={
a5(){return"ApplyResult."+this.b}}
A.mH.prototype={}
A.vD.prototype={
dh(a){return this.wn(a)},
wn(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dh=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.ik(b4),$async$dh)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.GN().e8(n)
if(m==null)A.w(A.bu('Bad timestamp "'+n+'"'))
l=m.b
k=l[1]
k.toString
j=A.aG(k)
k=l[2]
k.toString
i=A.aG(k)
k=l[3]
k.toString
h=A.aG(k)
k=l[4]
k.toString
g=A.aG(k)
k=l[5]
k.toString
f=A.aG(k)
k=l[6]
k.toString
e=A.aG(k)
l=l[7]
l.toString
d=A.aG(l)
if(i<1||i>12||g>23||f>59||e>59)A.w(A.bu('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.Bz(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.vu(k))A.w(A.bu('Bad timestamp "'+n+'"'))
o=A.M8(A.Bz(j,i,h,g,f,e,d).iO(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iq(B.c.bM(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dx,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.y
a4===$&&A.y()
s=6
return A.a(a4.fe(b4,null,a2,o,null,b),$async$dh)
case 6:a5=b6
a4=J.M(a5)
if(a4.gE(a5)){s=5
break}++a.ax
a6=p.qL(a5)
a7=k.h(0,b4)
if(a7==null)A.w(A.x(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.CM(a7.a,a5),$async$dh)
case 8:s=7
return A.a(b0.aW(new b1.vL(b2,p,b3,b6,a6),l),$async$dh)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mH(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dh,r)},
mc(a,b){var s=B.a.a_(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a_(a.a,b.b)<=0},
tm(a,b){var s=B.a.a_(a.c,b.c)
if(s!==0)return s>0
return B.a.a_(a.a,b.a)>0},
qL(a){var s,r,q,p=J.aA(a),o=p.gG(a)
for(p=p.bj(a,1),s=p.$ti,p=new A.at(p,p.gm(0),s.i("at<Z.E>")),s=s.i("Z.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.tm(q,o))o=q}return o},
hQ(a){return this.va(a)},
va(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aW(new A.vF(o,p,a),t.P),$async$hQ)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)},
da(a,b){return this.vd(a,b)},
vd(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$da=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bG(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dx,e=n.b,d=A.a0(j),c=d.c,d=d.i("cs<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.cs(j,0,200,d)
a2.iJ(j,0,200,c)
a3=a2.eq(0)
a4=a3.length
b&1&&A.H(j,18)
A.bb(0,a4,j.length)
j.splice(0,a4)
m=A.k([],a)
a5=A.k([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.y
a7===$&&A.y()
s=12
return A.a(a7.bU(l),$async$da)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.E(b1)
if(a7 instanceof A.cK){J.aL(m,l)
s=6
break}else if(a7 instanceof A.c0)throw b1
else if(a7 instanceof A.bv){s=6
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
case 7:s=J.ap(m)!==0?13:14
break
case 13:s=15
return A.a(n.fh(b2,m),$async$da)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.w(A.x(a1))
b0=a9.a
a2=A.k([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.q)(a5),++a6)a2.push(A.CN(b0,a5[a6]))
s=16
return A.a(i.aW(new A.vH(n,a2,b2,b0),h),$async$da)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$da,r)},
dQ(a,b,c,d){return this.ri(a,b,c,d)},
ri(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dQ=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.t(c,t.nw)
a=A.t(c,t.G)
o=p.a,n=o.ax,m=o.ay,o=o.dx,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.T(a4,k,B.c.bM(i,0,j))
g=B.b.B(A.af(h.length,"?",!1,c),", ")
j=[a2]
B.b.C(j,h)
a0=J
s=6
return A.a(a1.ai(u.m+g+")",j),$async$dQ)
case 6:j=a0.D(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.F(e),A.jt(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.w(A.x(l))
a0=J
s=9
return A.a(a1.ce(d.a.a,"id IN ("+g+")",h),$async$dQ)
case 9:j=a0.D(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.F(e),A.ce(a3,f,n,m))
s=10
break
case 11:case 4:k=i
s=3
break
case 5:q=new A.a4(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dQ,r)},
mk(a,b,c,d,e){return this.a6(a,b,A.CN(this.a.aw(b).a,c),null,!1,d,e)},
tX(a,b,c){return this.mk(a,b,c,null,!1)},
a6(a,b,c,d,e,f,g){return this.tW(a,b,c,d,e,f,g)},
mj(a,b,c){return this.a6(a,b,c,null,!1,null,!1)},
tW(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a6=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.aw(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bH(a4,a7,b2,a8,a9),$async$a6)
case 5:q=B.a7
s=1
break
case 4:a9=b3.b
a9.toString
j=A.be(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bH(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a6)
case 8:q=B.a7
s=1
break
case 7:g=a8.a
f=$.p8()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bH(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a6)
case 11:q=B.a7
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.CW
g===$&&A.y()
s=15
return A.a(g.bQ(a4,b2,a8.a),$async$a6)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aI(a6.a,1,"id = ?",[a8.a]),$async$a6)
case 19:c=b9
g=J.M(c)
d=g.gE(c)?null:A.ce(a7,g.gG(c),a5.ax,a5.ay)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dg(a4,a8.a,a8.e,b2),$async$a6)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.H1(a4,a6.a,A.dn(a7,J.v(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9)),$async$a6)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.d5(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a6)
case 26:b1.Z(new A.a1(b2,A.ar([a8.a],t.N)))
b=A.bK(B.o,a9)
b.H(0,"id")
b1.bc(new A.aT(b2,a8.a,B.at,B.ab,null,a9,b))
q=B.a6
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
return A.a(n.c0(b1,b2,a8.a,a8.c,!1),$async$a6)
case 31:q=B.a8
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dn(a7,J.v(a9.h(0,"archived"),!0),a5.ax,a5.ay,i,a9),"id = ?",[a8.a]),$async$a6)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.d5(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a6)
case 33:b1.Z(new A.a1(b2,A.ar([a8.a],t.N)))
b=A.bK(d,a9)
b.H(0,"id")
b1.bc(new A.aT(b2,a8.a,B.at,B.A,d,a9,b))
q=B.a6
s=1
break
case 28:s=a===B.G||a===B.bk||a===B.a4?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.c0(b1,b2,a8.a,a8.c,!1),$async$a6)
case 38:q=B.a8
s=1
break
case 37:s=a===B.a4?39:40
break
case 39:s=41
return A.a(n.c0(b1,b2,a8.a,a8.c,!1),$async$a6)
case 41:q=B.a8
s=1
break
case 40:a0=A.be(a7,d)
s=A.aj(a0)===i?42:43
break
case 42:s=44
return A.a(a4.X("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a6)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.d5(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a6)
case 45:b1.Z(new A.a1(b2,A.ar([a8.a],t.N)))
q=B.a6
s=1
break
case 43:l=null
p=47
a9=m
l=A.i2(a9==null?null:a9.r)
p=2
s=49
break
case 47:p=46
b0=o.pop()
a5=A.E(b0)
s=a5 instanceof A.d3?50:52
break
case 50:k=a5
s=53
return A.a(n.bH(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a6)
case 53:q=B.a7
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
a9=A.FZ(l,a0,new A.me(null,B.Y,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bp(a9,t.r),$async$a6)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eP(a4,b2,a8,a7,m,a0,l,a2),$async$a6)
case 57:s=58
return A.a(n.c0(b1,b2,a8.a,a8.c,!1),$async$a6)
case 58:a5=t.N
b1.Z(new A.a1(b2,A.ar([a8.a],a5)))
b1.Z(new A.a1("lp_conflicts",A.ar([a8.a],a5)))
q=B.bt
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dn(a7,J.v(a3.h(0,"archived"),!0),a5.ax,a5.ay,a9,a3),"id = ?",[a8.a]),$async$a6)
case 59:a5=a5.CW
a5===$&&A.y()
s=60
return A.a(a5.eW(a4,b2,a8.a,h,i,a8.c,A.aj(a3)),$async$a6)
case 60:s=61
return A.a(n.tj(b1,b2,a8.a,a8.c),$async$a6)
case 61:b1.Z(new A.a1(b2,A.ar([a8.a],t.N)))
b=A.bK(d,a3)
b.H(0,"id")
b1.bc(new A.aT(b2,a8.a,B.ac,B.A,d,a3,b))
q=B.a6
s=1
break
case 35:q=B.a8
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a6,r)},
eP(a,b,c,d,e,f,g,h){return this.rK(a,b,c,d,e,f,g,h)},
rK(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eP=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.be(d,A.f7(d,c))
k=A.bK(g,f)
j=A.O(k,A.n(k).c)
B.b.aE(j)
k=A.bK(g,l)
p=A.O(k,A.n(k).c)
B.b.aE(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.aj(g)
n=t.N
m=t.X
s=2
return A.a(a.c9(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.aj(f),"remote_json",A.aj(l),"dirty_local",B.h.a7(j,null),"dirty_remote",B.h.a7(p,null),"detected_at",q.c.ay.$0()],n,m),B.Q),$async$eP)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.aj(l),"base_hash",A.as(B.m.v(B.e.v(A.aj(A.be(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eP)
case 3:return A.e(null,r)}})
return A.f($async$eP,r)},
bH(a,b,c,d,e){return this.rD(a,b,c,d,e)},
rD(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bH=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a7(d.d,null)}catch(a1){o=t.N
e=B.h.a7(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aC(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bH)
case 2:j=q.a.CW
j===$&&A.y()
s=3
return A.a(j.bQ(a,c,m),$async$bH)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.N(o.mA(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aC(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bH)
case 7:s=5
break
case 6:s=8
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bH)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bH,r)},
d5(a,b,c,d,e,f,g,h){return this.tt(a,b,c,d,e,f,g,!0)},
tt(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$d5=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.aw(b)
o=A.t(t.N,t.X)
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
c0(a,b,c,d,e){return this.tk(a,b,c,d,e)},
tj(a,b,c,d){return this.c0(a,b,c,d,!0)},
tk(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c0=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.t(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c0)
case 2:s=3
return A.a(p.L(q.a.aw(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c0)
case 3:if(g>0)a.Z(new A.a1(b,A.ar([c],o)))
return A.e(null,r)}})
return A.f($async$c0,r)},
fh(a,b){return this.w7(a,b)},
w7(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bG(b,!0,t.N)
n=A.a0(o),m=n.c,n=n.i("cs<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.cs(o,0,500,n)
i.iJ(o,0,500,m)
h=i.eq(0)
g=h.length
l&1&&A.H(o,18)
A.bb(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aW(new A.vJ(p,a,h),j),$async$fh)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fh,r)}}
A.vL.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.vK(s.a,r,s.c,s.d,s.e),t.P)},
$S:20}
A.vK.prototype={
$1(a){return this.nM(a)},
nM(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.aw(a1)
a3=A.k([],t.s)
for(p=q.d,o=J.aA(p),n=o.gu(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dQ(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aN(t.N)
a2=o.gu(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mc(i,c)){s=3
break}p=i.a
s=j.F(0,p)?5:7
break
case 5:s=8
return A.a(a.mj(a4,a1,a3),$async$$1)
case 8:h=a6
s=6
break
case 7:o=l.h(0,p)
s=9
return A.a(a.a6(a4,a1,a3,k.h(0,p),!0,o,!0),$async$$1)
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
case 4:g=c==null||!a.mc(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.er(b,a1,e,f),$async$$1)
case 10:d.a=new A.jb(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vF.prototype={
$0(){var s=this.b
return s.a.a2(new A.vE(this.a,s,this.c),t.P)},
$S:20}
A.vE.prototype={
$1(a){return this.nJ(a)},
nJ(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.CW
k===$&&A.y()
o=p.c
n=o.b
s=3
return A.a(k.bQ(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.tX(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a_(o.c,k)<=0){s=1
break}s=7
return A.a(l.mk(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.vH.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.vG(r,s.b,s.c,s.d),t.P)},
$S:20}
A.vG.prototype={
$1(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.k([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dQ(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aN(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.F(0,g)?6:8
break
case 6:s=9
return A.a(o.mj(a,m,h),$async$$1)
case 9:s=7
break
case 8:f=k.h(0,g)
s=10
return A.a(o.a6(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.t(0,g)
case 7:case 4:p.length===e||(0,A.q)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vJ.prototype={
$0(){var s=this.a
return s.a.a2(new A.vI(s,this.b,this.c),t.P)},
$S:20}
A.vI.prototype={
$1(a){return this.nL(a)},
nL(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.aw(g).a
e=h.aw(g).a.a
d=q.c
c=t.N
b=B.b.B(A.af(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.t(c,t.G)
a1=J
s=2
return A.a(i.ce(e,a,d),$async$$1)
case 2:p=a1.D(a4),o=h.ax,h=h.ay
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.F(m),A.ce(f,n,o,h))
s=3
break
case 4:h=t.X
p=A.m(["access_state","hidden"],c,h)
o=[g]
B.b.C(o,d)
s=5
return A.a(i.L("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.L(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.Z(new A.a1(g,A.ub(d,A.a0(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.q)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dF(null,null,c,h)
p.C(0,j)
p.j(0,"hidden",!0)
a2.bc(new A.aT(g,k,B.at,B.bW,j,p,B.dc))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b3.prototype={}
A.vM.prototype={
fp(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fp=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.CW
f===$&&A.y()
s=3
return A.a(f.f1(25,p.c.ay.$0()),$async$fp)
case 3:o=b
f=J.M(o)
if(f.gE(o)){q=B.a1
s=1
break}if(p.f){q=p.b9(o)
s=1
break}f=f.gu(o),n=B.a1
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dR(f.gn()),$async$fp)
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
return A.f($async$fp,r)},
dR(a){return this.ru(a)},
ru(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.CW
l===$&&A.y()
m=m.r
s=3
return A.a(l.em(m,a.a,a.b),$async$dR)
case 3:o=c
if(o==null){q=B.a1
s=1
break}s=4
return A.a(l.bQ(m,o.a,o.b),$async$dR)
case 4:n=c
if(n==null){q=B.a1
s=1
break}if(o.e==null){q=p.rs(o,n)
s=1
break}q=p.jn(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dR,r)},
bE(a,b,c,d,e){return this.qj(a,b,c,d,e)},
qi(a,b,c,d){return this.bE(a,b,c,!1,d)},
qg(a,b,c){return this.bE(a,b,c,!1,!1)},
qh(a,b,c,d){return this.bE(a,b,c,d,!1)},
qj(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bE=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bE)
case 7:k=g
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.E(i)
s=k instanceof A.c0?8:10
break
case 8:n.e.$0()
q=B.an
s=1
break
s=9
break
case 10:s=k instanceof A.cG?11:13
break
case 11:k=n.a.CW
k===$&&A.y()
s=14
return A.a(k.mU("forbidden_push",a.b,a.a),$async$bE)
case 14:q=B.cV
s=1
break
s=12
break
case 13:s=k instanceof A.fN?15:17
break
case 15:m=k
s=d?18:19
break
case 18:s=20
return A.a(n.cV(a,"validation_push",m.a),$async$bE)
case 20:q=B.M
s=1
break
case 19:q=n.cr(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cK){q=n.dK(a,b,!e)
s=1
break}else if(k instanceof A.bv){l=k
q=n.cr(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bE,r)},
jm(a,b,c){return this.rt(a,b,c)},
rs(a,b){return this.jm(a,b,!1)},
rt(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jm=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bE(a,b,new A.vO(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jm,r)},
jq(a,b,c){return this.rL(a,b,c)},
rL(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qi(a,b,new A.vT(p,a,p.a.aw(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jq,r)},
jn(a,b){return this.rv(a,b)},
rv(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qg(a,b,new A.vR(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jn,r)},
d1(a,b,c,d){return this.rz(a,b,c,d)},
rw(a,b,c){return this.d1(a,b,c,!1)},
rz(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d1=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.l1(a,c)
j=n.a.aw(a.a).a
i=a.d
s=A.as(B.m.v(B.e.v(A.aj(A.be(j,A.f7(j,c))))).a)===A.as(B.m.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eN(a,c),$async$d1)
case 5:q=B.a2
s=1
break
case 4:m=null
l=null
p=7
m=A.i2(b.r)
l=A.i2(i)
p=2
s=9
break
case 7:p=6
f=o.pop()
i=A.E(f)
s=i instanceof A.d3?10:12
break
case 10:k=i
s=13
return A.a(n.cV(a,"corrupt_payload",k.a),$async$d1)
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
return A.a(n.dN(a,b,c,j,m,l),$async$d1)
case 14:g=a0
if(g==null){q=B.bb
s=1
break}q=n.bE(a,b,new A.vP(n,a,A.aj(A.be(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d1,r)},
b9(a){return this.rr(a)},
rr(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b9=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.k([],t.k1)
c0=t.N
c1=A.t(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.t(c0,c0)
c0=J.D(d0),d=n.a,c=d.y,b=n.b,a=d.dx,a0=d.r
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.CW
a2===$&&A.y()
s=5
return A.a(a2.em(a0,a1.a,a1.b),$async$b9)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bQ(a0,m.a,m.b),$async$b9)
case 6:l=d2
if(l==null){s=3
break}a1=m.a
a3=a.h(0,a1)
if(a3==null)A.w(A.x('No store "'+a1+'" registered in this LocalPocket.'))
a4=a3.a
k=null
p=8;++c.as
a1=m.b
a5=b.y
a5===$&&A.y()
s=11
return A.a(a5.bU(a1),$async$b9)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.E(c8)
s=a1 instanceof A.cK?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lx(m,l),$async$b9)
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
case 14:s=a1 instanceof A.c0?18:20
break
case 18:n.e.$0()
q=B.an
s=1
break
s=19
break
case 20:s=a1 instanceof A.cG?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.mU("forbidden_push",m.b,a1),$async$b9)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bv?25:27
break
case 25:i=a1
s=28
return A.a(n.cr(m,l,i),$async$b9)
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
if(a1!==a5)A.w(A.eu('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a2("")
A.cg(a7,A.be(a4,A.f7(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c2()
a5=A.cX(a8)
a5.t(0,a1)
a5.q()
a9=A.as(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c2()
a1=A.cX(a8)
a1.t(0,a5)
a1.q()
s=a9===A.as(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eN(m,k),$async$b9)
case 33:++c2
s=3
break
case 32:g=null
f=null
p=35
g=A.i2(l.r)
f=A.i2(m.d)
p=2
s=37
break
case 35:p=34
c9=o.pop()
a1=A.E(c9)
s=a1 instanceof A.d3?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.ff(e.a,a5,"corrupt_payload",m.d,a1),$async$b9)
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
return A.a(n.dN(m,l,k,a4,g,f),$async$b9)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a2("")
A.cg(a7,A.be(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.fR(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.fR(m.w,m.a,m.b,m.d,m.e))
s=3
break
case 4:s=b9.length!==0?43:44
break
case 43:b4=b.e
if(b4<=0)b4=25
if(25<b4)b4=25
b5=0
case 45:if(!(b6=b9.length,b5<b6)){s=47
break}b7=b5+b4
s=48
return A.a(n.c_(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$b9)
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
return A.f($async$b9,r)},
dN(a,b,c,d,e,f){return this.qM(a,b,c,d,e,f)},
qM(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dN=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.f7(d,c)
n=A.FZ(e,f,new A.me(null,B.Y,!1),a.b,A.be(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bp(n,t.r),$async$dN)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hi(a,b,c,m,e,f),$async$dN)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dN,r)},
c_(a,b,c){return this.t4(a,b,c)},
t4(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c_=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.y
a7===$&&A.y()
s=7
return A.a(a7.fo(b9),$async$c_)
case 7:m=c3
a7=t.N
l=A.t(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.q)(b9),++a9){k=b9[a9]
J.bZ(l,k.a,k)}j=l
i=A.aN(a7)
for(l=J.D(m);l.k();){h=l.gn()
if(!J.aL(i,h.a)){l=A.bu("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.J(h.a)){l=A.bu("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.k([],t.bo)
l=J.D(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.S(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jg(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c2()
b2=A.cX(b1)
b2.t(0,b0)
b2.q()
b2=A.as(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aL(g,new A.jd(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.CW
a8===$&&A.y()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.ff(b4,b2,b3,e.d,b0),$async$c_)
case 13:++b7
case 11:s=8
break
case 9:l=a7.CW
l===$&&A.y()
s=14
return A.a(l.kK(g),$async$c_)
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
l=A.E(b8)
s=l instanceof A.eb?15:17
break
case 15:q=n.bX(b9,c0,c1)
s=1
break
s=16
break
case 17:s=l instanceof A.cG?18:20
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
return A.a(n.dR(n.lE(a0)),$async$c_)
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
case 20:s=l instanceof A.c0?25:27
break
case 25:n.e.$0()
q=B.an
s=1
break
s=26
break
case 27:s=l instanceof A.bv?28:30
break
case 28:a2=l
a3=a2 instanceof A.eE?a2:new A.he("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.CW
b0===$&&A.y()
s=34
return A.a(b0.bQ(a8,a4.b,a4.c),$async$c_)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cr(n.lE(a4),a5,a3),$async$c_)
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
return A.f($async$c_,r)},
bX(a,b,c){return this.oV(a,b,c)},
oV(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bX=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.M(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.CW
h===$&&A.y()
b3=g.b
s=5
return A.a(h.ff("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bX)
case 5:q=B.M
s=1
break
case 4:a0=B.c.N(b3.gm(b5),2)
m=0
l=0
k=!1
b3=[b3.T(b5,0,a0),b3.b6(b5,a0)],a1=n.a,a2=t.N,a3=n.b,a4=t.gq,a5=0
case 6:if(!(a5<2)){s=8
break}j=b3[a5]
p=10
a6=a3.y
a6===$&&A.y()
s=13
return A.a(a6.fo(j),$async$bX)
case 13:i=b9
h=A.t(a2,a4)
for(a6=J.D(j);a6.k();){g=a6.gn()
J.bZ(h,g.a,g)}f=h
e=A.aN(a2)
for(a6=J.D(i);a6.k();){d=a6.gn()
if(!J.aL(e,d.a)){a6=A.bu("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.J(d.a)){a6=A.bu("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.D(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.S(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jg(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dS(a7,a8,a9,b0==null?b.d:b0),$async$bX)
case 19:++m
s=17
break
case 18:a7=a1.CW
a7===$&&A.y()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.ff(b1,a9,b0,b.d,a8),$async$bX)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.E(b4)
s=a6 instanceof A.eb?21:23
break
case 21:s=24
return A.a(n.bX(j,b6,b7),$async$bX)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bv){k=!0
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
return A.f($async$bX,r)},
jg(a,b){var s=b==null?a.d:b
return new A.cm(a.b,a.c,B.v,s,a.e,A.as(B.m.v(B.e.v(a.d)).a),B.q,a.a,0,null)},
lE(a){return this.jg(a,null)},
dS(a,b,c,d){return this.t9(a,b,c,d)},
eN(a,b){return this.dS(a,b,null,null)},
t9(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(a.a).a
n=A.f7(o,b)
m=d==null
l=m?A.aj(A.be(o,n)):d
p=p.CW
p===$&&A.y()
s=2
return A.a(p.kK(A.k([new A.jd(a,l,b.c,A.as(B.m.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dS)
case 2:return A.e(null,r)}})
return A.f($async$dS,r)},
l1(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.eu('record id "'+s+'" does not match requested "'+r+'"'))},
cr(a,b,c){return this.rT(a,b,c)},
rT(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.eE?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.CW
o===$&&A.y()
s=5
return A.a(o.mV(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$cr)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.mB(l,k)
m=p.a.CW
m===$&&A.y()
s=6
return A.a(m.wE(a.a,a.b,l,c.a,o.ay.$0()+B.c.N(n.a,1000)),$async$cr)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cr,r)},
cV(a,b,c){return this.py(a,b,c)},
px(a,b){return this.cV(a,b,null)},
py(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.CW
o===$&&A.y()
p=c==null?b:c
s=2
return A.a(o.ff(p,a.b,b,a.d,a.a),$async$cV)
case 2:return A.e(null,r)}})
return A.f($async$cV,r)},
dK(a,b,c){return this.qb(a,b,c)},
lx(a,b){return this.dK(a,b,!0)},
qb(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dK=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.aw(a.a)
case 3:switch(0){case 0:s=5
break
default:s=4
break}break
case 5:m=null
l=null
p=7
m=A.i2(b.r)
l=A.i2(a.d)
p=2
s=9
break
case 7:p=6
h=o.pop()
i=A.E(h)
s=i instanceof A.d3?10:12
break
case 10:k=i
s=13
return A.a(n.cV(a,"corrupt_payload",k.a),$async$dK)
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
return A.a(n.fY(a,b,m,l),$async$dK)
case 14:q=B.bb
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dK,r)},
fY(a,b,c,d){return this.pN(a,b,c,d)},
pN(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$fY=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bK(c,d)
n=A.O(o,A.n(o).c)
B.b.aE(n)
p=b.r
if(p==null)p=A.aj(c)
s=2
return A.a(q.a.a2(new A.vN(q,a,p,d,n),t.P),$async$fY)
case 2:return A.e(null,r)}})
return A.f($async$fY,r)},
hi(a,b,c,d,e,f){return this.rJ(a,b,c,d,e,f)},
rJ(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hi=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.aw(a.a).a
m=A.be(n,A.f7(n,c))
l=A.bK(e,f)
k=A.O(l,A.n(l).c)
B.b.aE(k)
l=A.bK(e,m)
p=A.O(l,A.n(l).c)
B.b.aE(p)
s=2
return A.a(o.a2(new A.vS(q,a,b,e,f,m,k,p,n,c),t.P),$async$hi)
case 2:return A.e(null,r)}})
return A.f($async$hi,r)}}
A.vO.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.y()
s=7
return A.a(j.hK(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eN(k,m),$async$$0)
case 8:q=B.a2
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.E(h) instanceof A.fp){q=n.a.jq(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:21}
A.vT.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.y()
s=3
return A.a(l.bU(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.px(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.as(B.m.v(B.e.v(A.aj(A.be(l,A.f7(l,o))))).a)===A.as(B.m.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eN(m,o),$async$$0)
case 9:q=B.a2
s=1
break
case 8:q=n.d1(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.vR.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.y()
s=3
return A.a(l.bU(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lx(m,p.c)
s=1
break}n.l1(m,o)
if(o.c===m.e){l=p.c
q=n.qh(m,l,new A.vQ(n,m,o,l),!0)
s=1
break}q=n.rw(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.vQ.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.y()
s=7
return A.a(j.fC(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eN(k,m),$async$$0)
case 8:q=B.a2
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
$S:21}
A.vP.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.y
l===$&&A.y()
k=o
j=n
s=4
return A.a(l.fC(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dS(j,b,p.e.a,m),$async$$0)
case 3:q=B.a2
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:21}
A.vN.prototype={
$1(a){return this.nN(a)},
nN(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.c9(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.aj(q.d),"remote_json",A.aj(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a7(q.e,null),"dirty_remote",B.h.a7(B.q,null),"detected_at",q.a.c.ay.$0()],k,j),B.Q),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.Z(new A.a1(n,A.ar([m],k)))
a.Z(new A.a1("lp_conflicts",A.ar([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vS.prototype={
$1(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.c9(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.aj(q.e),"remote_json",A.aj(o),"dirty_local",B.h.a7(q.r,null),"dirty_remote",B.h.a7(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.Q),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.aj(o),"base_hash",A.as(B.m.v(B.e.v(A.aj(A.be(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.Z(new A.a1(j,A.ar([k],n)))
a.Z(new A.a1("lp_conflicts",A.ar([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.c9.prototype={
a5(){return"SyncEngineState."+this.b}}
A.bm.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.hb.prototype={}
A.ha.prototype={}
A.wI.prototype={
gl3(){return 36},
dA(a){return this.ow(a)},
ow(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dA=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.k([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dx,g=new A.bF(g,g.r,g.e,A.n(g).i("bF<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.il(m),$async$dA)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gl3():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.al(c.a+1,n.gl3())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bC(m,a),$async$dA)
case 13:a5.aL(a6,a9)
case 11:++j
s=10
break
case 12:if(A.np(h)!=null)A.w(A.x(u.L))
b=h.b
b===$&&A.y()
s=14
return A.a(b.aX(new A.wJ(c,n,m,a3),B.p,f),$async$dA)
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
case 4:if(a2!=null)throw A.b(a2)
q=a1
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dA,r)},
bC(a,b){return this.ov(a,b)},
ov(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bC=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.P("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aN(t.N)
m=B.c.iq(B.c.bM(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.y
g===$&&A.y()
s=5
return A.a(g.fe(a4,B.cF,h,null,o,m),$async$bC)
case 5:f=a7
g=J.M(f)
if(g.gE(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.k([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hh(a4,e),$async$bC)
case 6:c=a7
b=A.k([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aN||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.da(a4,b),$async$bC)
case 9:i+=b.length
case 8:h=g.ga0(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ai("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bC)
case 10:a1=a7
a2=A.k([],l)
for(e=J.D(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.F(a)
if(!n.F(0,a)){if(J.v(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fh(a4,a2),$async$bC)
case 13:case 12:s=14
return A.a(k.ai("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bC)
case 14:a3=a7
k=J.M(a3)
s=k.gV(a3)?15:16
break
case 15:l=A.k([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.F(g))}s=17
return A.a(j.da(a4,l),$async$bC)
case 17:case 16:q=new A.ha(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bC,r)},
hh(a,b){return this.rl(a,b)},
rl(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hh=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.t(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.T(b,n,B.c.bM(l,0,m))
j=B.b.B(A.af(k.length,"?",!1,g),", ")
m=[a]
B.b.C(m,k)
e=J
s=6
return A.a(o.ai(u.m+j+")",m),$async$hh)
case 6:m=e.D(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.F(h),A.jt(i))
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
A.wJ.prototype={
$1(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.es(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bv.prototype={
l(a){return A.dq(this).l(0)+": "+this.a},
$iG:1}
A.he.prototype={}
A.eE.prototype={}
A.jj.prototype={}
A.c0.prototype={}
A.cG.prototype={}
A.cK.prototype={}
A.fN.prototype={}
A.fP.prototype={}
A.fp.prototype={}
A.eb.prototype={}
A.h8.prototype={
gm(a){return this.b}}
A.cM.prototype={}
A.fR.prototype={}
A.jc.prototype={}
A.kP.prototype={
a5(){return"BackendHintKind."+this.b}}
A.cB.prototype={}
A.AV.prototype={
$2(a,b){return B.a.ie(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:146}
A.wK.prototype={
mB(a,b){var s,r
if(b!=null){s=this.r8(b)
if(A.ac(s))return A.dw(0,0,s<0?0:s)
if(s instanceof A.aR){r=s.a-this.ay.$0()
return r<=0?B.D:A.dw(0,r,0)}return B.au}return A.FS(a,B.au,B.av,this.at)},
mA(a){return this.mB(a,null)},
r8(a){var s=B.a.cf(a),r=A.j9(s,null)
if(r!=null)return r
return A.IW(s)}}
A.jb.prototype={}
A.jr.prototype={}
A.wV.prototype={
ik(a){return this.wA(a)},
wA(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$ik=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.ek("lp_sync_state",A.k(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$ik)
case 3:m=c
l=J.M(m)
if(l.gE(m)){q=null
s=1
break}o=A.a6(J.S(l.gG(m),"cursor_updated"))
n=A.a6(J.S(l.gG(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jb(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
er(a,b,c,d){return this.xq(a,b,c,d)},
xq(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$er=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aI("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$er)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$er)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$er)
case 7:case 3:return A.e(null,r)}})
return A.f($async$er,r)},
il(a){return this.wC(a)},
wC(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$il=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.ek("lp_sync_state",A.k(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$il)
case 3:n=c
m=J.M(n)
if(m.gE(n)){q=B.dh
s=1
break}o=A.bc(J.S(m.gG(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jr(o,A.bc(J.S(m.gG(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)},
es(a,b,c,d){return this.xv(a,b,c,d)},
xv(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$es=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aI("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$es)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$es)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$es)
case 7:case 3:return A.e(null,r)}})
return A.f($async$es,r)},
hH(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b1("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hH)
case 3:l=b
k=J.M(l)
j=k.gE(l)?B.o:k.gG(l)
k=A.bc(j.h(0,"pending"))
if(k==null)k=0
o=A.bc(j.h(0,"conflicts"))
if(o==null)o=0
n=A.bc(j.h(0,"hidden"))
if(n==null)n=0
m=A.bc(j.h(0,"blocked"))
q=new A.oq([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)}}
A.cQ.prototype={
a5(){return"SyncState."+this.b}}
A.i7.prototype={
a5(){return"AccessState."+this.b}}
A.fM.prototype={
a5(){return"OutboxKind."+this.b}}
A.j6.prototype={
a5(){return"OpQueueKind."+this.b}}
A.Bg.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.cP.prototype={}
A.wU.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
i=j.h(0,"record_id")
i.toString
A.F(i)
i=A.a6(j.h(0,"remote_updated"))
s=A.bc(j.h(0,"last_seen_at"))
r=A.a6(j.h(0,"base_updated"))
A.a6(j.h(0,"base_hash"))
q=A.a6(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fr(B.cp,A.F(p))
A.FM(j.h(0,"dirty_fields"))
o=A.bc(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fr(B.cn,A.F(n))
A.a6(j.h(0,"op_id"))
m=A.bc(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.bc(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.bc(j.h(0,"schema_ver"))
return new A.cP(i,s,r,q,p,o,n,m,l,k)},
$S:147}
A.cm.prototype={}
A.uZ.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
s=j.h(0,"record_id")
s.toString
A.F(s)
r=j.h(0,"kind")
r.toString
r=A.fr(B.cy,A.F(r))
q=j.h(0,"payload_json")
q.toString
A.F(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.FM(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.F(m)
l=j.h(0,"created_at")
l.toString
A.ao(l)
k=j.h(0,"updated_at")
k.toString
A.ao(k)
return new A.cm(i,s,r,q,p,o,n,m,l,A.a6(j.h(0,"depends_on_op")))},
$S:148}
A.ez.prototype={}
A.uU.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ao(l)
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
q=A.fr(B.ct,A.F(q))
p=m.h(0,"payload_json")
p.toString
A.F(p)
o=m.h(0,"state")
o.toString
A.F(o)
o=A.bc(m.h(0,"attempt_count"))
if(o==null)o=0
A.bc(m.h(0,"next_retry_at"))
A.a6(m.h(0,"last_error"))
n=A.a6(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ao(m)
return new A.ez(l,s,r,q,p,o,n)},
$S:149}
A.Be.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:51}
A.Bf.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:51}
A.x7.prototype={}
A.uc.prototype={
cE(a,b){return this.vs(a,b)},
vs(a,b){var s=0,r=A.h(t.X),q,p
var $async$cE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.i0(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cE,r)},
ic(a,b,c,d){return this.wg(a,b,c,d)},
wg(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$ic=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.wc(a6,a7)
a=t.N
a0=new A.ip(A.t(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.a6(A.G6(a2?null:A.p1(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.ud(a3)
a0.e=new A.ue(a3)
p=4
b.O("PRAGMA journal_mode=TRUNCATE")
f=b.o0("PRAGMA journal_mode")
n=f.gG(f).b[0]
if(J.a_(n).toLowerCase()!=="truncate"){a=A.x("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.Mw(a2?null:A.p1(a8))
e=t.bE.a(J.S(m,"stores"))
l=e==null?A.k([],t.aw):e
d=A.bc(J.S(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.EZ(J.S(m,"destructiveBackup"))
j=f!==!1
i=A.Mv(A.G6(a2?null:A.p1(a8),"fieldCipher"))
if(A.Md(l,i)){a=A.ay("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.xr(A.t(a,t.p))
s=7
return A.a(A.d0(h,a0,j,i,k,a6,B.aA,l),$async$ic)
case 7:g=b0
a1=!0
a=t.be
q=new A.mc(b,new A.xA(g,A.aN(a)),A.t(t.eg,a))
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
if(!a1)b.q()
throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ic,r)}}
A.ud.prototype={
$1(a){return A.oV(this.a,a)},
$S:151}
A.ue.prototype={
$1(a){return A.oW(this.a,a)},
$S:152}
A.mc.prototype={
cE(a,b){return this.vt(a,b)},
vt(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.BR(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.I6(n)
if(o==null){q=A.BR(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.hZ(p.e.kl(a,new A.un(a)),o),$async$cE)
case 3:q=m.I7(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cE,r)}}
A.un.prototype={
$0(){return new A.ht(this.a)},
$S:153}
A.ht.prototype={$inJ:1}
A.AS.prototype={
$2(a,b){this.a.j(0,J.a_(a),A.AR(b))},
$S:34}
A.B8.prototype={
$1(a){return A.Mx(a)},
$S:154}
A.B_.prototype={
$1(a){return B.b.bL(a.c,new A.AZ())},
$S:155}
A.AZ.prototype={
$1(a){return a.e},
$S:52}
A.hm.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.xw.prototype={
$2(a,b){return new A.R(J.a_(a),b,t.eB)},
$S:64}
A.nF.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.xt.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.ja.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iG:1}
A.jy.prototype={
fk(a,b){var s=this.a
if(!s.J(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.d7('Invalid "'+a+'" argument: expected '+A.Eg(b)+", got "+A.Eh(s)+"."))
return b.a(s)}}
A.hn.prototype={}
A.jA.prototype={}
A.eL.prototype={}
A.AO.prototype={
$2(a,b){var s,r,q=J.a_(a)
if(t.f.b(b))this.a.j(0,q,A.f4(b))
else{s=this.a
if(t.j.b(b)){r=J.bB(b,new A.AN(),t.z)
r=A.O(r,r.$ti.i("Z.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:38}
A.AN.prototype={
$1(a){return t.f.b(a)?A.f4(a):a},
$S:31}
A.nI.prototype={
dI(a,b){return this.q4(a,b)},
q4(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$dI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cw(),$async$dI)
case 3:o=p.x
o=o==null?null:o.D()
s=4
return A.a(o instanceof A.u?o:A.bp(o,t.H),$async$dI)
case 4:p.x=null
p.w.ab(0)
s=5
return A.a(p.c.q(),$async$dI)
case 5:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
h3(a,b){return this.q7(a,b)},
q7(a3,a4){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$h3=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a1=a4.d.h(0,"request")
if(!t.f.b(a1))throw A.b(A.d7('Contract envelope requires a "request" map.'))
j=A.f4(a1)
i=j.h(0,"tag")
if(typeof i!="string")A.w(A.V("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.w(A.V("Missing request payload."))
g=A.p2(h)
j=t.G
if(!j.b(g))A.w(A.V("Malformed request payload."))
f=A.Hu(i,g)
if(f==null)A.w(A.V("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.y()
s=7
return A.a(e.vn(m),$async$h3)
case 7:l=a6
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.ga1(),"payload",A.kr(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
k=A.E(a2)
e=k
b=J.a_(e)
if(e instanceof A.dH){a=A.KS(e)
b=e.a
if(e instanceof A.eJ&&e.b!=null)a0=A.m(["field",e.b],t.N,t.X)
else if(e instanceof A.eI)a0=A.m(["field",e.b],t.N,t.X)
else a0=e instanceof A.ey?A.m(["field",e.b],t.N,t.X):null}else{if(e instanceof A.jz){b=e.a
a="WireException"}else if(e instanceof A.bk){b=e.a
a="StateError"}else if(e instanceof A.bC){b=A.r(e.d)
a="ArgumentError"}else if(t.b0.b(e)){b=A.r(e.d)
a="RangeError"}else a="unknown"
a0=null}e=t.N
d=A.t(e,t.X)
d.j(0,"type",a)
d.j(0,"message",b)
if(a0!=null)d.j(0,"details",a0)
q=A.m(["error",d],e,j)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h3,r)},
cw(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$cw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=q.d
q.d=null
p=q.f
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.u?p:A.bp(p,t.H),$async$cw)
case 2:q.f=null
s=n!=null?3:4
break
case 3:o=n.b
s=5
return A.a(n.aF(),$async$cw)
case 5:s=6
return A.a(o.ex(),$async$cw)
case 6:o.ex()
p=o.ax
if((p.c&4)===0)p.q()
o.w.a.q()
case 4:q.r=q.e=null
return A.e(null,r)}})
return A.f($async$cw,r)}}
A.xA.prototype={
hZ(a,b){return this.vH(a,b)},
vH(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hZ=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.w.t(0,a)
if(n.x==null){i=n.c.e
i===$&&A.y()
i=i.b
n.x=new A.b0(i,A.n(i).i("b0<1>")).aT(new A.xB(n))}m=null
try{m=A.J5(b)}catch(d){l=A.E(d)
i=J.a_(l)
q=new A.eL("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eL("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.iY(a,m),$async$hZ)
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
j=A.E(e)
i=m.b
g=J.a_(j)
f=A.m(["type",A.ME(j)],t.N,t.X)
q=new A.eL("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hZ,r)},
iY(a,b){return this.pC(a,b)},
pC(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$iY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.y
if(l===$){o=A.m(["open",p.gqc(),"sync_start",p.gqs(),"sync_stop",p.gqw(),"sync_now",p.gqk(),"sync_pause",p.gqm(),"sync_resume",p.gqo(),"sync_set_connectivity",p.gqq(),"sync_update_auth",p.gqy(),"sync_status",p.gqu(),"contract_request",p.gq6(),"close",p.gq3()],t.N,t.n1)
p.y!==$&&A.Bm()
p.y=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.d7("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iY,r)}}
A.xB.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.ga1(),"payload",a.p()],r,q)],r,q)
for(r=this.a.w,r=A.hB(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).a.e5(A.i0(p))}},
$S:158}
A.nH.prototype={
h5(a,b){return this.qd(a,b)},
qd(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$h5=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.jy(a3).fk("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.t(a3,a3)
n=t.f
if(n.b(a5))a5.a3(0,new A.xy(o))
s=a4!=null?3:4
break
case 3:m=J.D(a4),l=p.c,k=l.dx,j=t.X,i=l.ax==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.w(A.a8("Schema must be a map: "+A.r(h),null,null))
g=A.pL(A.f4(h),j)
if(B.b.bL(g.c,new A.xz())&&i)throw A.b(A.ay('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.C3(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a2("")
A.cg(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cX(a)
a0.t(0,b)
a0.q()
a0=d!==A.as(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.d7('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.J(e)?7:9
break
case 7:s=10
return A.a(l.aP(g),$async$h5)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.w(A.x('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a2("")
A.cg(c,a1.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cX(a)
a0.t(0,b)
a0.q()
a0=A.as(a.a.a)
c=new A.a2("")
A.cg(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a2=A.cX(a)
a2.t(0,b)
a2.q()
if(a0!==A.as(a.a.a))throw A.b(A.d7('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h5,r)}}
A.xy.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:34}
A.xz.prototype={
$1(a){return a.e},
$S:52}
A.A2.prototype={
jN(){var s=0,r=A.h(t.q),q,p=this,o
var $async$jN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=A.E7(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jN,r)},
km(a){return this.wG(a)},
wG(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$km=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
q=A.E7(o==null?"":o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$km,r)}}
A.nK.prototype={
dL(a,b){return this.qt(a,b)},
qt(a4,a5){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$dL=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:a1=new A.jy(a5.d)
a2=t.N
a3=a1.fk("baseUrl",a2)
if(a3==null||a3.length===0)throw A.b(A.ay("syncStart requires baseUrl.",null))
s=3
return A.a(p.cw(),$async$dL)
case 3:o=a1.fk("token",a2)
n=a1.fk("scopeId",a2)
if(n==null)n="web-sync"
m=new A.A2(o,n)
l=A.nw(a3)
k=p.c
j=k.dx
i=A.n(j).i("T<1>")
j=A.O(new A.T(j,i),i.i("o.E"))
i=t.hw
h=A.dP(null,null,i)
g=$.C.h(0,B.di)
f=g==null?null:t.dF.a(g).$0()
if(f==null)f=new A.l_(A.k([],t.kG))
f=new A.v6(f)
e=new A.vo(j,l,m,B.aY,200,25,n,"data",f,h,A.t(a2,t.hU),A.t(a2,i))
e.oz(l,n,25,200,"data",B.aY,m,null)
d=A.y8()
i=A.dP(null,null,t.n6)
h=A.dP(null,null,t.em)
f=t.H
j=A.bj(null,f)
c=new A.pf(A.bj(null,f))
b=A.bj(B.N,t.mv)
a=A.k([],t.s)
f=A.bj(null,f)
a0=new A.wK(A.MK(),k.ch)
f=new A.nf(k,e,a0,new A.xG(a4),B.a3,i,h,j,c,A.aN(a2),b,a,f)
l=f.e=new A.wV(k,B.a.A(A.as(B.m.v(B.e.v(l.l(0)+"|"+n)).a),0,12))
j=new A.rl(k,e,a0,k.at)
f.x=j
j=new A.vD(k,e,a0,l,j,c)
f.f=j
f.r=new A.wI(k,e,a0,l,j)
f.w=new A.vM(k,e,a0,f.gqS(),e.Q)
d.b=f
p.e=m
p.d=d.aR()
f=d.aR().ay
p.f=new A.b0(f,A.n(f).i("b0<1>")).aT(new A.xH(p,a4))
s=4
return A.a(d.aR().az(),$async$dL)
case 4:s=5
return A.a(e.fO(),$async$dL)
case 5:q=A.m(["ok",!0,"state",d.aR().y.b],a2,t.K)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dL,r)},
ha(a,b){return this.qx(a,b)},
qx(a,b){var s=0,r=A.h(t.X),q,p=this
var $async$ha=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.cw(),$async$ha)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
h6(a,b){return this.ql(a,b)},
ql(a,b){var s=0,r=A.h(t.X),q,p=this,o,n
var $async$h6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.d
if(n==null)throw A.b(A.x("Sync is not started."))
n.p1.push("cycle")
s=3
return A.a(n.d3(),$async$h6)
case 3:o=d
q=A.m(["pulled",o.a,"swept",o.b,"pushed",o.c,"deadLettered",o.d,"blocked",o.e,"discarded",o.f,"hadError",o.r],t.N,t.X)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h6,r)},
h7(a,b){return this.qn(a,b)},
qn(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$h7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.be(),$async$h7)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)},
h8(a,b){return this.qp(a,b)},
qp(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$h8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d
if(o==null)throw A.b(A.x("Sync is not started."))
s=3
return A.a(o.b2(),$async$h8)
case 3:q=A.m(["ok",!0],t.N,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
h9(a,b){return this.qr(a,b)},
qr(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k
var $async$h9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=p.d
if(k==null)throw A.b(A.x("Sync is not started."))
o=t.y
n=b.d.h(0,"online")
if(!A.bw(n)){m=A.Eg(o)
l=n==null?"null":A.Eh(n)
A.w(A.d7('Missing or invalid "online" argument for sync_set_connectivity: expected '+m+", got "+l+"."))}s=3
return A.a(k.fM(n),$async$h9)
case 3:q=A.m(["ok",!0],t.N,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
hb(a,b){return this.qz(a,b)},
qz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$hb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.e
m=p.d
if(n==null||m==null)throw A.b(A.x("Sync is not started."))
o=t.N
n.a=new A.jy(b.d).fk("token",o)
s=3
return A.a(m.ef(),$async$hb)
case 3:q=A.m(["ok",!0],o,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
jd(a,b){return this.qv(a,b)},
qv(a,b){var s=0,r=A.h(t.X),q,p=this,o
var $async$jd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.r
if(o==null){o=t.N
o=A.m(["state","closed"],o,o)}else o=A.FQ(o)
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jd,r)}}
A.xG.prototype={
$0(){var s=0,r=A.h(t.H),q=this
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.a.a.e5(A.i0(A.m(["v",3,"op","auth_required"],t.N,t.X)))
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.xH.prototype={
$1(a){this.a.r=a
this.b.a.e5(A.i0(A.m(["v",3,"op","sync_status","status",A.FQ(a)],t.N,t.X)))},
$S:159}
A.oM.prototype={}
A.oN.prototype={}
A.qn.prototype={
tJ(a){var s,r=null
A.FA("absolute",A.k([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b3(a)>0&&!s.cF(a)
if(s)return a
s=A.FL()
return this.mT(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
ur(a){var s,r,q=A.dN(a,this.a)
q.fu()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.ko(s)
q.e.pop()
q.fu()
return q.l(0)},
mT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.k([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.FA("join",s)
return this.vU(new A.bI(s,t.v))},
vU(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.cV(s,new A.qo(),a.$ti.i("cV<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cF(m)&&o){l=A.dN(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.eo(k,!0))
l.b=n
if(q.fi(n))l.e[0]=q.gdv()
n=l.l(0)}else if(q.b3(m)>0){o=!q.cF(m)
n=m}else{if(!(m.length!==0&&q.jK(m[0])))if(p)n+=q.gdv()
n+=m}p=q.fi(m)}return n.charCodeAt(0)==0?n:n},
cO(a,b){var s=A.dN(b,this.a),r=s.d,q=A.a0(r).i("ak<1>")
r=A.O(new A.ak(r,new A.qp(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aC(r,0,q)
return s.d},
ei(a){var s
if(!this.qQ(a))return a
s=A.dN(a,this.a)
s.ke()
return s.l(0)},
qQ(a){var s,r,q,p,o,n,m,l=this.a,k=l.b3(a)
if(k!==0){if(l===$.p6())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.ca(n)){if(l===$.p6()&&n===47)return!0
if(q!=null&&l.ca(q))return!0
if(q===46)m=o==null||o===46||l.ca(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.ca(q))return!0
if(q===46)l=o==null||l.ca(o)||o===46
else l=!1
if(l)return!0
return!1},
wI(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b3(a)
if(l<=0)return o.ei(a)
s=A.FL()
if(m.b3(s)<=0&&m.b3(a)>0)return o.ei(a)
if(m.b3(a)<=0||m.cF(a))a=o.tJ(a)
if(m.b3(a)<=0&&m.b3(s)>0)throw A.b(A.DQ(n+a+'" from "'+s+'".'))
r=A.dN(s,m)
r.ke()
q=A.dN(a,m)
q.ke()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.ki(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.ki(l[0],p[0])}else l=!1
if(!l)break
B.b.io(r.d,0)
B.b.io(r.e,1)
B.b.io(q.d,0)
B.b.io(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.DQ(n+a+'" from "'+s+'".'))
l=t.N
B.b.k6(q.d,0,A.af(p,"..",!1,l))
p=q.e
p[0]=""
B.b.k6(p,1,A.af(r.d.length,m.gdv(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga0(m)==="."){B.b.ko(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fu()
return q.l(0)},
n0(a){var s,r,q=this,p=A.Fk(a)
if(p.gb0()==="file"&&q.a===$.kA())return p.l(0)
else if(p.gb0()!=="file"&&p.gb0()!==""&&q.a!==$.kA())return p.l(0)
s=q.ei(q.a.kh(A.Fk(p)))
r=q.wI(s)
return q.cO(0,r).length>q.cO(0,s).length?s:r}}
A.qo.prototype={
$1(a){return a!==""},
$S:10}
A.qp.prototype={
$1(a){return a.length!==0},
$S:10}
A.Ay.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:160}
A.te.prototype={
nZ(a){var s=this.b3(a)
if(s>0)return B.a.A(a,0,s)
return this.cF(a)?a[0]:null},
ki(a,b){return a===b}}
A.my.prototype={
gjG(){var s=this,r=t.N,q=new A.my(s.a,s.b,s.c,A.bG(s.d,!0,r),A.bG(s.e,!0,r))
q.fu()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga0(r)},
fu(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga0(s)===""))break
B.b.ko(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
ke(){var s,r,q,p,o,n=this,m=A.k([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.k6(m,0,A.af(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.af(m.length+1,s.gdv(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fi(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.p6())n.b=A.z(r,"/","\\")
n.fu()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga0(q)
return o.charCodeAt(0)==0?o:o}}
A.mz.prototype={
l(a){return"PathException: "+this.a},
$iG:1}
A.wH.prototype={
l(a){return this.gaO()}}
A.vq.prototype={
jK(a){return B.a.F(a,"/")},
ca(a){return a===47},
fi(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
eo(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b3(a){return this.eo(a,!1)},
cF(a){return!1},
kh(a){var s
if(a.gb0()===""||a.gb0()==="file"){s=a.gbq()
return A.Ct(s,0,s.length,B.l,!1)}throw A.b(A.P("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaO(){return"posix"},
gdv(){return"/"}}
A.xd.prototype={
jK(a){return B.a.F(a,"/")},
ca(a){return a===47},
fi(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c5(a,"://")&&this.b3(a)===s},
eo(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.c8(a,"/",B.a.ae(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.FO(a,q+1)
return p==null?q:p}}return 0},
b3(a){return this.eo(a,!1)},
cF(a){return a.length!==0&&a.charCodeAt(0)===47},
kh(a){return a.l(0)},
gaO(){return"url"},
gdv(){return"/"}}
A.xx.prototype={
jK(a){return B.a.F(a,"/")},
ca(a){return a===47||a===92},
fi(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
eo(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.c8(a,"\\",2)
if(s>0){s=B.a.c8(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.FW(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b3(a){return this.eo(a,!1)},
cF(a){return this.b3(a)===1},
kh(a){var s,r
if(a.gb0()!==""&&a.gb0()!=="file")throw A.b(A.P("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbq()
if(a.gdd()===""){if(s.length>=3&&B.a.S(s,"/")&&A.FO(s,1)!=null)s=B.a.kr(s,"/","")}else s="\\\\"+a.gdd()+s
r=A.z(s,"/","\\")
return A.Ct(r,0,r.length,B.l,!1)},
u6(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
ki(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.u6(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaO(){return"windows"},
gdv(){return"\\"}}
A.wp.prototype={
gm(a){return this.c.length},
gvV(){return this.b.length},
oB(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.H(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ev(a){var s,r=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aZ("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gG(s))return-1
if(a>=B.b.ga0(s))return s.length-1
if(r.qF(a)){s=r.d
s.toString
return s}return r.d=r.oU(a)-1},
qF(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
oU(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.N(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iE(a){var s,r,q=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aZ("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.ev(a)
r=q.b[s]
if(r>a)throw A.b(A.aZ("Line "+s+" comes after offset "+a+"."))
return a-r},
fI(a){var s,r,q,p
if(a<0)throw A.b(A.aZ("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aZ("Line "+a+" must be less than the number of lines in the file, "+this.gvV()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aZ("Line "+a+" doesn't have 0 columns."))
return q}}
A.lH.prototype={
ga4(){return this.a.a},
gah(){return this.a.ev(this.b)},
gaq(){return this.a.iE(this.b)},
gar(){return this.b}}
A.hy.prototype={
ga4(){return this.a.a},
gm(a){return this.c-this.b},
gP(){return A.BE(this.a,this.b)},
gM(){return A.BE(this.a,this.c)},
gaJ(){return A.dR(B.y.T(this.a.c,this.b,this.c),0,null)},
gbd(){var s=this,r=s.a,q=s.c,p=r.ev(q)
if(r.iE(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dR(B.y.T(r.c,r.fI(p),r.fI(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fI(p+1)
return A.dR(B.y.T(r.c,r.fI(r.ev(s.b)),q),0,null)},
a_(a,b){var s
if(!(b instanceof A.hy))return this.oq(0,b)
s=B.c.a_(this.b,b.b)
return s===0?B.c.a_(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hy))return s.op(0,b)
return s.b===b.b&&s.c===b.c&&J.v(s.a.a,b.a.a)},
gI(a){return A.c5(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idb:1}
A.rL.prototype={
vN(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mg(B.b.gG(a1).c)
s=a.e
r=A.af(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.v(m.c,l)){a.hx("\u2575")
q.a+="\n"
a.mg(l)}else if(m.b+1!==n.b){a.tI("...")
q.a+="\n"}}for(l=n.d,k=A.a0(l).i("bV<1>"),j=new A.bV(l,k),j=new A.at(j,j.gm(0),k.i("at<Z.E>")),k=k.i("Z.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gP().gah()!==f.gM().gah()&&f.gP().gah()===i&&a.qH(B.a.A(h,0,f.gP().gaq()))){e=B.b.bN(r,a0)
if(e<0)A.w(A.P(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.tH(i)
q.a+=" "
a.tG(n,r)
if(s)q.a+=" "
d=B.b.mN(l,new A.t5())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gP().gah()===i?j.gP().gaq():0
a.tE(h,g,j.gM().gah()===i?j.gM().gaq():h.length,p)}else a.hz(h)
q.a+="\n"
if(k)a.tF(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hx("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mg(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hx("\u2577")
else{q.hx("\u250c")
q.bk(new A.rT(q),"\x1b[34m")
s=q.r
r=" "+$.i6().n0(a)
s.a+=r}q.r.a+="\n"},
hv(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gP().gah()
i=k?null:l.a.gM().gah()
if(s&&l===c){h.bk(new A.t_(h,j,a),r)
n=!0}else if(n)h.bk(new A.t0(h,l),r)
else if(k)if(g.a)h.bk(new A.t1(h),g.b)
else o.a+=" "
else h.bk(new A.t2(g,h,c,j,a,l,i),p)}},
tG(a,b){return this.hv(a,b,null)},
tE(a,b,c,d){var s=this
s.hz(B.a.A(a,0,b))
s.bk(new A.rU(s,a,b,c),d)
s.hz(B.a.A(a,c,a.length))},
tF(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gP().gah()===p.gM().gah()){r.jD()
p=r.r
p.a+=" "
r.hv(a,c,b)
if(c.length!==0)p.a+=" "
r.mh(b,c,r.bk(new A.rV(r,a,b),q))}else{s=a.b
if(p.gP().gah()===s){if(B.b.F(c,b))return
A.MB(c,b)
r.jD()
p=r.r
p.a+=" "
r.hv(a,c,b)
r.bk(new A.rW(r,a,b),q)
p.a+="\n"}else if(p.gM().gah()===s){p=p.gM().gaq()
if(p===a.a.length){A.G7(c,b)
return}r.jD()
r.r.a+=" "
r.hv(a,c,b)
r.mh(b,c,r.bk(new A.rX(r,!1,a,b),q))
A.G7(c,b)}}},
mf(a,b,c){var s=c?0:1,r=this.r
s=B.a.bh("\u2500",1+b+this.iW(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tD(a,b){return this.mf(a,b,!0)},
mh(a,b,c){this.r.a+="\n"
return},
hz(a){var s,r,q,p
for(s=new A.ci(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),q=this.r,r=r.i("K.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bh(" ",4)
else{p=A.bt(p)
q.a+=p}}},
hy(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bk(new A.t3(s,this,a),"\x1b[34m")},
hx(a){return this.hy(a,null,null)},
tI(a){return this.hy(null,null,a)},
tH(a){return this.hy(null,a,null)},
jD(){return this.hy(null,null,null)},
iW(a){var s,r,q,p
for(s=new A.ci(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qH(a){var s,r,q
for(s=new A.ci(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pc(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bk(a,b){return this.pc(a,b,t.z)}}
A.t4.prototype={
$0(){return this.a},
$S:161}
A.rN.prototype={
$1(a){var s=a.d
return new A.ak(s,new A.rM(),A.a0(s).i("ak<1>")).gm(0)},
$S:244}
A.rM.prototype={
$1(a){var s=a.a
return s.gP().gah()!==s.gM().gah()},
$S:39}
A.rO.prototype={
$1(a){return a.c},
$S:164}
A.rQ.prototype={
$1(a){var s=a.a.ga4()
return s==null?new A.j():s},
$S:165}
A.rR.prototype={
$2(a,b){return a.a.a_(0,b.a)},
$S:166}
A.rS.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.k([],t.dg)
for(s=J.aA(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbd()
n=A.AU(o,p.gaJ(),p.gP().gaq())
n.toString
m=B.a.hA("\n",B.a.A(o,0,n)).gm(0)
l=p.gP().gah()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga0(b).b)b.push(new A.cw(j,l,d,A.k([],q)));++l}}i=A.k([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.q)(b),++k){j=b[k]
h&1&&A.H(i,16)
B.b.rQ(i,new A.rP(j),!0)
f=i.length
for(q=s.bj(c,g),p=q.$ti,q=new A.at(q,q.gm(0),p.i("at<Z.E>")),n=j.b,p=p.i("Z.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gP().gah()>n)break
i.push(e)}g+=i.length-f
B.b.C(j.d,i)}return b},
$S:167}
A.rP.prototype={
$1(a){return a.a.gM().gah()<this.a.b},
$S:39}
A.t5.prototype={
$1(a){return!0},
$S:39}
A.rT.prototype={
$0(){this.a.r.a+=B.a.bh("\u2500",2)+">"
return null},
$S:0}
A.t_.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.t0.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.t1.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.t2.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bk(new A.rY(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gM().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bk(new A.rZ(r,o),p.b)}}},
$S:2}
A.rY.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.rZ.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.rU.prototype={
$0(){var s=this
return s.a.hz(B.a.A(s.b,s.c,s.d))},
$S:0}
A.rV.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gP().gaq(),l=n.gM().gaq()
n=this.b.a
s=q.iW(B.a.A(n,0,m))
r=q.iW(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bh(" ",m))+B.a.bh("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:11}
A.rW.prototype={
$0(){return this.a.tD(this.b,this.c.a.gP().gaq())},
$S:0}
A.rX.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bh("\u2500",3)
else r.mf(s.c,Math.max(s.d.a.gM().gaq()-1,0),!1)
return q.a.length-p.length},
$S:11}
A.t3.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wj(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bq.prototype={
l(a){var s=this.a
s="primary "+(""+s.gP().gah()+":"+s.gP().gaq()+"-"+s.gM().gah()+":"+s.gM().gaq())
return s.charCodeAt(0)==0?s:s}}
A.z6.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.AU(o.gbd(),o.gaJ(),o.gP().gaq())!=null)){s=A.n3(o.gP().gar(),0,0,o.ga4())
r=o.gM().gar()
q=o.ga4()
p=A.LY(o.gaJ(),10)
o=A.wq(s,A.n3(r,A.Ey(o.gaJ()),p,q),o.gaJ(),o.gaJ())}return A.Ju(A.Jw(A.Jv(o)))},
$S:168}
A.cw.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cq.prototype={
jR(a){var s=this.a
if(!J.v(s,a.ga4()))throw A.b(A.P('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga4())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a_(a,b){var s=this.a
if(!J.v(s,b.ga4()))throw A.b(A.P('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga4())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a,b.ga4())&&this.b===b.gar()},
gI(a){var s=this.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dq(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iav:1,
ga4(){return this.a},
gar(){return this.b},
gah(){return this.c},
gaq(){return this.d}}
A.n4.prototype={
jR(a){if(!J.v(this.a.a,a.ga4()))throw A.b(A.P('Source URLs "'+A.r(this.ga4())+'" and "'+A.r(a.ga4())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a_(a,b){if(!J.v(this.a.a,b.ga4()))throw A.b(A.P('Source URLs "'+A.r(this.ga4())+'" and "'+A.r(b.ga4())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a.a,b.ga4())&&this.b===b.gar()},
gI(a){var s=this.a.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dq(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ev(r)+1)+":"+(q.iE(r)+1))+">"},
$iav:1,
$icq:1}
A.n6.prototype={
oC(a,b,c){var s,r=this.b,q=this.a
if(!J.v(r.ga4(),q.ga4()))throw A.b(A.P('Source URLs "'+A.r(q.ga4())+'" and  "'+A.r(r.ga4())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.P("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.jR(r))throw A.b(A.P('Text "'+s+'" must be '+q.jR(r)+" characters long.",null))}},
gP(){return this.a},
gM(){return this.b},
gaJ(){return this.c}}
A.n7.prototype={
gkd(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gP().gah()+1)+", column "+(p.gP().gaq()+1)
if(p.ga4()!=null){s=p.ga4()
r=$.i6()
s.toString
s=o+(" of "+r.n0(s))
o=s}o+=": "+this.a
q=p.vO(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iG:1}
A.h3.prototype={
gar(){var s=this.b
s=A.BE(s.a,s.b)
return s.b},
$ibi:1,
gfN(){return this.c}}
A.h4.prototype={
ga4(){return this.gP().ga4()},
gm(a){return this.gM().gar()-this.gP().gar()},
a_(a,b){var s=this.gP().a_(0,b.gP())
return s===0?this.gM().a_(0,b.gM()):s},
vO(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.HP(s,a).vN()},
R(a,b){if(b==null)return!1
return b instanceof A.h4&&this.gP().R(0,b.gP())&&this.gM().R(0,b.gM())},
gI(a){return A.c5(this.gP(),this.gM(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dq(s).l(0)+": from "+s.gP().l(0)+" to "+s.gM().l(0)+' "'+s.gaJ()+'">'},
$iav:1}
A.db.prototype={
gbd(){return this.d}}
A.jl.prototype={
a5(){return"SqliteUpdateKind."+this.b}}
A.cr.prototype={
gI(a){return A.c5(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.cr&&b.a===this.a&&b.b===this.b&&b.c===this.c},
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
p=p!=null?s+(", parameters: "+J.bB(p,new A.wv(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iG:1}
A.wv.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.a_(a)},
$S:169}
A.kI.prototype={}
A.qO.prototype={
tr(){var s=this,r=s.d
return r==null?s.d=new A.e2(s,A.k([],t.fU),new A.qX(s),new A.qY(s),t.jy):r},
rU(){var s=this,r=s.e
return r==null?s.e=new A.e2(s,A.k([],t.lw),new A.qU(s),new A.qV(s),t.lU):r},
pe(){var s=this,r=s.f
return r==null?s.f=new A.e2(s,A.k([],t.lw),new A.qQ(s),new A.qR(s),t.ag):r},
ud(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.w(A.aH(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b7(m))
r=n.a
q=r.e_(s,1)
s=r.d
p=A.CB(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.d9(new A.qZ(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.Bl(this,p,o,o,o)},
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
r=s.kN()
q=r!==0?A.CF(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aD(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.w(A.x("This database has already been closed"))
r=p.b
q=r.a
s=q.e_(B.e.v(a),1)
q=q.d
r=A.CB(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.Bl(p,r,"executing",a,b)}else{s=p.ih(a,!0)
try{s.e6(new A.bQ(b))}finally{s.q()}}},
O(a){return this.aD(a,B.k)},
rh(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.w(A.x("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cA(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.xq(r,p,n,o)
l=A.k([],t.lE)
k=new A.qS(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kP(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.Bl(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.N(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null)l.push(new A.h6(f,e,new A.dk(!1).cU(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kP(j,r-j,0)
n=q.buffer
h=B.c.N(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.ag(o,2)]-p
f=i.a
if(f!=null){l.push(new A.h6(f,e,""))
k.$0()
throw A.b(A.aH(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aH(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
ih(a,b){var s=this.rh(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aH(a,"sql","Must contain an SQL statement."))
return B.b.gG(s)},
wl(a){return this.ih(a,!1)},
o1(a,b){var s,r=this.ih(a,!0)
try{s=r.kI(new A.bQ(b))
return s}finally{r.q()}},
o0(a){return this.o1(a,B.k)}}
A.qX.prototype={
$0(){var s=this.a,r=s.b
r.a.mz(r.b,new A.qW(s))},
$S:0}
A.qW.prototype={
$3(a,b,c){var s=A.IQ(a)
if(s==null)return
this.a.d.jP(new A.cr(s,b,c))},
$S:170}
A.qY.prototype={
$0(){var s=this.a.b
s.a.mz(s.b,null)
return null},
$S:0}
A.qU.prototype={
$0(){var s=this.a,r=s.b
r.a.my(r.b,new A.qT(s))
return null},
$S:0}
A.qT.prototype={
$0(){this.a.e.jP(null)},
$S:0}
A.qV.prototype={
$0(){var s=this.a.b
s.a.my(s.b,null)
return null},
$S:0}
A.qQ.prototype={
$0(){var s=this.a,r=s.b
r.a.mx(r.b,new A.qP(s))
return null},
$S:0}
A.qP.prototype={
$0(){var s=this.a.f
s.jP(null)
return 0},
$S:11}
A.qR.prototype={
$0(){var s=this.a.b
s.a.mx(s.b,null)
return null},
$S:0}
A.qZ.prototype={
$2(a,b){A.Kv(a,this.a,b)},
$S:171}
A.qS.prototype={
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
A.nA.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.Iz(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.IB(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.P("The argument list is unmodifiable",null))},
$iws:1}
A.e2.prototype={
gcP(){var s=this.r
return s==null?this.r=this.q1(!1):s},
q1(a){return new A.dj(new A.zK(this,!1),this.$ti.i("dj<1>"))},
jP(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.w(o.bD())
if((n&1)!==0)o.gaM().aA(a)}else{n=o.b
if(n>=4)A.w(o.bD())
if((n&1)!==0)o.ct(a)
else if((n&3)===0){n=o.fX()
o=new A.ca(a,o.$ti.i("ca<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.seh(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.zK.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.zL(q,a,s)
a.r=a.e=new A.zM(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dK<1>)")}}
A.zL.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.k2(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.zM.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,new A.k2(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.wr.prototype={
mO(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.IP(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
wc(a,b){var s,r,q,p,o,n,m,l,k,j
this.mO()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e_(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e_(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d5(r.b.buffer,0,null)[B.c.ag(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.xj(r,l,o)
r=r.r
if(r!=null)r.mp(k,l,o)
if(m!==0){j=A.CF(s,k,m,"opening the database",null,null)
k.kN()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.qO(s,k,!1)}}
A.h6.prototype={
gpd(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.k([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.nL(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dk(!1).cU(o,0,null,!0))}return q},
gti(){return null},
bz(a,b){A.Bl(this.b,a,b,this.d,this.e)},
lo(){if(this.r||this.b.r)throw A.b(A.x(u.f))},
fZ(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dl()
if(s!==0?s!==101:q)r.bz(s,"executing statement")},
t2(){var s,r,q,p,o,n,m=this,l=A.k([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rH(o))
l.push(p)}m.dl()
if(p!==0?p!==101:k)m.bz(p,"selecting from statement")
n=m.gpd()
m.gti()
k=new A.mR(l,n,B.al)
k.p7()
return k},
rH(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ao(r.Number(s)):A.Et(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.oe(a)
case 4:return s.kO(a)
case 5:default:return null}},
oX(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.w(A.aH(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.oY(a[s-1],s)
this.e=a},
oY(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.ac(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aJ){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.D9(a).l(0)))
break A}if(A.bw(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.od(b,a)
break A}if(t.L.b(a)){s=q.a.oc(b,a)
break A}s=q.oW(a,b)
break A}if(s!==0)q.bz(s,"binding parameter")},
oW(a,b){throw A.b(A.aH(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
ez(a){A:{if(a instanceof A.bQ){this.oX(a.a)
break A}if(a instanceof A.lh)a.a.$1(this)}},
dl(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dl()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mC(s.d)}},
kI(a){var s=this
s.lo()
s.dl()
s.ez(a)
return s.t2()},
e6(a){var s=this
s.lo()
s.dl()
s.ez(a)
s.fZ()}}
A.lV.prototype={
iz(a,b){return this.d.J(a)?1:0},
kB(a,b){this.d.H(0,a)},
kC(a){return new v.G.URL(a,"file:///").pathname},
ds(a,b){var s,r=a.a
if(r==null)r=A.Dw(this.b,"/")
s=this.d
if(!s.J(r))if((b&4)!==0)s.j(0,r,new A.cv(new Uint8Array(0),0))
else throw A.b(A.hi(14))
return new A.hF(new A.ob(this,r,(b&8)!==0),0)},
kE(a){}}
A.ob.prototype={
n3(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.aj(a,0,s,J.bN(B.f.gaa(r.a),0,r.b),b)
return s},
kA(){return this.d>=2?1:0},
iA(){if(this.c)this.a.d.H(0,this.b)},
fE(){return this.a.d.h(0,this.b).b},
kD(a){this.d=a},
kF(a){},
fF(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cv(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kG(a){this.d=a},
eu(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cv(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.au(0,b,s,a)}}
A.B9.prototype={
$1(a){return a.length!==0},
$S:10}
A.qt.prototype={
p7(){var s,r,q,p,o=A.t(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o.j(0,p,B.b.df(s,p))}this.c=o}}
A.mR.prototype={
gu(a){return new A.zu(this)},
h(a,b){return new A.c6(this,A.dG(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iJ:1,
$io:1,
$ip:1}
A.c6.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.ac(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gK(){return this.a.a},
gaY(){return this.b},
$iI:1}
A.zu.prototype={
gn(){var s=this.a
return new A.c6(s,A.dG(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.or.prototype={}
A.os.prototype={}
A.ou.prototype={}
A.ov.prototype={}
A.uX.prototype={
a5(){return"OpenMode."+this.b}}
A.eh.prototype={}
A.bQ.prototype={}
A.lh.prototype={}
A.df.prototype={
l(a){return"VfsException("+this.a+")"},
$iG:1}
A.jk.prototype={}
A.b4.prototype={}
A.kX.prototype={}
A.kW.prototype={
giB(){return 0},
nk(a,b){return 12},
giD(){return 4096},
iC(a,b){var s=this.n3(a,b),r=a.length
if(s<r){B.f.jV(a,s,r,0)
throw A.b(B.dH)}},
$ibn:1,
$ijv:1}
A.eM.prototype={}
A.Bk.prototype={
$0(){var s,r,q
for(s=this.a;!s.gE(0);){if(s.b===0)A.w(A.x("No such element"))
r=s.c
q=r.a
q.toString
q.jz(A.n(r).i("b2.E").a(r))
r.d.$0()}},
$S:0}
A.Bi.prototype={
$1(a){var s=this.a,r=s.b
s.hc(s.c,new A.eM(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:22}
A.Bj.prototype={
$4(a,b,c,d){this.a.$1(c.eX(d))},
$S:173}
A.xo.prototype={}
A.xj.prototype={
kN(){var s=this.a,r=s.r
if(r!=null)r.mC(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.xq.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kP(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.CB(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d5(o.b.buffer,0,null)[B.c.ag(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.xp(s,o,n)
o=o.w
if(o!=null)o.mp(r,s,n)}return new A.op(r,p)}}
A.xp.prototype={
oc(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cA(b),J.ap(b))},
od(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cA(s),s.length)},
kO(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.Ei(s.b,q.sqlite3_column_blob(r,a),p)},
oe(a){var s=this.c
return A.dV(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dU.prototype={$iC_:1}
A.dg.prototype={$iC0:1}
A.hk.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dg(s,A.d5(s.b.buffer,0,null)[B.c.ag(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lk.prototype={
w5(a){var s,r,q=this.b
q===$&&A.y()
s="[sqlite3] "+A.dV(q,a,null)
r=$.L1
if(r==null)A.G3(s)
else r.$1(s)},
w3(a,b){var s,r=new A.aR(A.lo(A.ao(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.y()
s=A.DN(q.buffer,b,8)
s.$flags&2&&A.H(s)
s[0]=A.BY(r)
s[1]=A.BW(r)
s[2]=A.BV(r)
s[3]=A.vu(r)
s[4]=A.BX(r)-1
s[5]=A.BZ(r)-1900
s[6]=B.c.al(A.Ir(r),7)},
xQ(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.y()
s=new A.jk(A.Ce(j,b,k))
try{r=a.ds(s,d)
if(e!==0){p=r.b
o=A.d5(j.buffer,0,k)
n=B.c.ag(e,2)
o.$flags&2&&A.H(o)
o[n]=p}p=A.d5(j.buffer,0,k)
o=B.c.ag(c,2)
p.$flags&2&&A.H(p)
p[o]=0
m=r.a
return m}catch(l){p=A.E(l)
if(p instanceof A.df){q=p
p=q.a
j=A.d5(j.buffer,0,k)
o=B.c.ag(c,2)
j.$flags&2&&A.H(j)
j[o]=p}else{j=j.buffer
j=A.d5(j,0,k)
p=B.c.ag(c,2)
j.$flags&2&&A.H(j)
j[p]=1}}return k},
xF(a,b,c){var s=this.b
s===$&&A.y()
return A.bY(new A.qz(a,A.dV(s,b,null),c))},
xx(a,b,c,d){var s=this.b
s===$&&A.y()
return A.bY(new A.qw(this,a,A.dV(s,b,null),c,d))},
xM(a,b,c,d){var s=this.b
s===$&&A.y()
return A.bY(new A.qB(this,a,A.dV(s,b,null),c,d))},
xS(a,b,c){return A.bY(new A.qD(this,c,b,a))},
xX(a,b){return A.bY(new A.qF(a,b))},
xD(a,b){var s,r=Date.now(),q=this.b
q===$&&A.y()
s=v.G.BigInt(r)
A.BM(A.DM(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xB(a){return A.bY(new A.qy(a))},
xU(a,b,c,d){return A.bY(new A.qE(this,a,b,c,d))},
y6(a,b,c,d){return A.bY(new A.qJ(this,a,b,c,d))},
y0(a,b){return A.bY(new A.qH(a,b))},
xZ(a,b){return A.bY(new A.qG(a,b))},
xK(a,b){return A.bY(new A.qA(this,a,b))},
xO(a,b){return A.bY(new A.qC(a,b))},
y4(a,b){return A.bY(new A.qI(a,b))},
xz(a,b){return A.bY(new A.qx(this,a,b))},
xG(a){return a.giB()},
xI(a,b,c){if(t.j2.b(a))return a.nk(b,c)
return 12},
xV(a){if(t.j2.b(a))return a.giD()
return 4096},
uE(a){a.$0()},
uz(a){return a.$0()},
uC(a,b,c,d,e){var s=this.b
s===$&&A.y()
a.$3(b,A.dV(s,d,null),A.ao(v.G.Number(e)))},
uK(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.y()
r.$2(new A.dU(s,b),new A.hk(s,c,d))},
uO(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.y()
r.$2(new A.dU(s,b),new A.hk(s,c,d))},
uM(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.y()
null.$2(new A.dU(s,b),new A.hk(s,c,d))},
uQ(a,b){var s
null.toString
s=this.a
s===$&&A.y()
null.$1(new A.dU(s,b))},
uI(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.y()
r.$1(new A.dU(s,b))},
uG(a,b,c,d,e){var s=this.b
s===$&&A.y()
return null.$2(A.Ce(s,c,b),A.Ce(s,e,d))},
ux(a,b){return a.$1(b)},
uv(a,b){return a.gya().$1(b)},
ut(a,b,c){return a.gy9().$2(b,c)}}
A.qz.prototype={
$0(){return this.a.kB(this.b,this.c)},
$S:0}
A.qw.prototype={
$0(){var s,r=this,q=r.b.iz(r.c,r.d),p=r.a.b
p===$&&A.y()
p=A.d5(p.buffer,0,null)
s=B.c.ag(r.e,2)
p.$flags&2&&A.H(p)
p[s]=q},
$S:0}
A.qB.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kC(q.c)),o=p.length
if(o>q.d)throw A.b(A.hi(14))
s=q.a.b
s===$&&A.y()
s=A.bU(s.buffer,0,null)
r=q.e
B.f.cN(s,r,p)
s.$flags&2&&A.H(s)
s[r+o]=0},
$S:0}
A.qD.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.y()
s=A.bU(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.D7(s,q.b)
else return A.D7(s,null)},
$S:0}
A.qF.prototype={
$0(){this.a.kE(A.dw(this.b,0,0))},
$S:0}
A.qy.prototype={
$0(){return this.a.iA()},
$S:0}
A.qE.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.y()
s.b.iC(A.bU(r.buffer,s.c,s.d),A.ao(v.G.Number(s.e)))},
$S:0}
A.qJ.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.y()
s.b.eu(A.bU(r.buffer,s.c,s.d),A.ao(v.G.Number(s.e)))},
$S:0}
A.qH.prototype={
$0(){return this.a.fF(A.ao(v.G.Number(this.b)))},
$S:0}
A.qG.prototype={
$0(){return this.a.kF(this.b)},
$S:0}
A.qA.prototype={
$0(){var s,r=this.b.fE(),q=this.a.b
q===$&&A.y()
q=A.d5(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.qC.prototype={
$0(){return this.a.kD(this.b)},
$S:0}
A.qI.prototype={
$0(){return this.a.kG(this.b)},
$S:0}
A.qx.prototype={
$0(){var s,r=this.b.kA(),q=this.a.b
q===$&&A.y()
q=A.d5(q.buffer,0,null)
s=B.c.ag(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.d9.prototype={}
A.ib.prototype={
a9(a,b,c,d){var s,r=null,q={},p=A.bd(A.BM(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.wy(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.pj(q,this,p,o)
o.d=s
o.f=new A.pk(q,o,s)
return new A.b5(o,A.n(o).i("b5<1>")).a9(a,b,c,d)},
by(a,b,c){return this.a9(a,null,b,c)}}
A.pj.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a5(q,t.m).bS(new A.pl(p,r.b,s,r),s.gtN(),t.P)},
$S:0}
A.pl.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaM().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:24}
A.pk.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaM().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eQ.prototype={
D(){var s=0,r=A.h(t.H),q=this,p
var $async$D=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.D()
p=q.c
if(p!=null)p.D()
q.c=q.b=null
return A.e(null,r)}})
return A.f($async$D,r)},
gn(){var s=this.a
return s==null?A.w(A.x("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.u($.C,t.g5)
s=new A.an(o,t.ex)
r=p.d
q=t.m
p.b=A.bo(r,"success",new A.yz(p,s),!1,q)
p.c=A.bo(r,"error",new A.yA(p,s),!1,q)
return o}}
A.yz.prototype={
$1(a){var s,r=this.a
r.D()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.yA.prototype={
$1(a){var s=this.a
s.D()
s=s.d.error
if(s==null)s=a
this.b.aS(s)},
$S:1}
A.q6.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.q7.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qb.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qc.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qd.prototype={
$1(a){this.a.aS(new A.bk("IndexedDB open blocked"))},
$S:1}
A.rr.prototype={
$1(a){return A.bd(a[1])},
$S:195}
A.xk.prototype={
ue(){var s={}
s.dart=new A.xl(this).$0()
return s},
i8(a){return this.w_(a)},
w_(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(v.G.WebAssembly.instantiateStreaming(a,p.ue()),t.m),$async$i8)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)}}
A.xl.prototype={
$0(){var s=this.a.a,r=A.bd(v.G.Object),q=A.bd(r.create.apply(r,[null]))
q.error_log=A.cY(s.gw4())
q.localtime=A.bX(s.gw2())
q.xOpen=A.Cw(s.gxP())
q.xDelete=A.oU(s.gxE())
q.xAccess=A.hT(s.gxw())
q.xFullPathname=A.hT(s.gxL())
q.xRandomness=A.oU(s.gxR())
q.xSleep=A.bX(s.gxW())
q.xCurrentTimeInt64=A.bX(s.gxC())
q.xClose=A.cY(s.gxA())
q.xRead=A.hT(s.gxT())
q.xWrite=A.hT(s.gy5())
q.xTruncate=A.bX(s.gy_())
q.xSync=A.bX(s.gxY())
q.xFileSize=A.bX(s.gxJ())
q.xLock=A.bX(s.gxN())
q.xUnlock=A.bX(s.gy3())
q.xCheckReservedLock=A.bX(s.gxy())
q.xDeviceCharacteristics=A.cY(s.giB())
q.xFileControl=A.oU(s.gxH())
q.xSectorSize=A.cY(s.giD())
q["dispatch_()v"]=A.cY(s.guD())
q["dispatch_()i"]=A.cY(s.guy())
q.dispatch_update=A.Cw(s.guB())
q.dispatch_xFunc=A.hT(s.guJ())
q.dispatch_xStep=A.hT(s.guN())
q.dispatch_xInverse=A.hT(s.guL())
q.dispatch_xValue=A.bX(s.guP())
q.dispatch_xFinal=A.bX(s.guH())
q.dispatch_compare=A.Cw(s.guF())
q.dispatch_busy=A.bX(s.guw())
q.changeset_apply_filter=A.bX(s.guu())
q.changeset_apply_conflict=A.oU(s.gus())
return q},
$S:35}
A.hj.prototype={}
A.pm.prototype={
ib(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ib=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.u($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cY(new A.pp(o))
new A.an(p,t.h1).aB(A.Hq(o,t.m))
s=2
return A.a(p,$async$ib)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$ib,r)},
dY(a,b){return this.rW(a,b)},
rW(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.GT(),b)
o=A.Jx(p)
s=2
return A.a(A.MC(new A.po(a,o,p),t.mj),$async$dY)
case 2:s=3
return A.a(o.b.a,$async$dY)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dY,r)},
rf(a){return this.dY(new A.pn(a),"readwrite")}}
A.pp.prototype={
$1(a){var s=A.bd(this.a.result)
if(J.v(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:24}
A.po.prototype={
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
A.pn.prototype={
$1(a){return this.nl(a)},
nl(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].aV(a),$async$$1)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.jT.prototype={
oG(a){var s=A.Aq(new A.z9(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.Aq(new A.za(this))},
jo(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.k([a,c],s),A.k([a,b],s))},
rE(a){return this.jo(a,9007199254740992,0)},
rF(a,b){return this.jo(a,9007199254740992,b)},
i7(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$i7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.t(t.N,t.S)
k=new A.eQ(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$i7)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.w(A.x("Await moveNext() first"))
n=o.key
n.toString
A.F(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ao(A.f_(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i7,r)},
hR(a){return this.ve(a)},
ve(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cC(p.d.index("fileName").getKey(a),t.W),$async$hR)
case 3:q=o.ao(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
jp(a){return A.cC(this.d.get(a),t.B).W(new A.z8(a),t.m)},
ew(a,b){return this.of(a,b)},
of(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ew=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jp(a),$async$ew)
case 3:h=d
g=h.length
f=new A.cv(new Uint8Array(g),g)
e=new A.eQ(p.e.openCursor(p.rE(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$ew)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.w(A.x("Await moveNext() first"))
k=n.a(l.key)
j=A.ao(A.f_(k[1]))
if(j>=h.length){s=5
break}i=new A.zb(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.w9(A.bd(l.value)).W(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ew,r)},
hJ(a){return this.ua(a)},
ua(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.w(A.x("IDB transaction already completed"))
o=A
s=3
return A.a(A.cC(p.d.put({name:a,length:0}),t.W),$async$hJ)
case 3:q=o.ao(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
b_(a,b){return this.xo(a,b)},
xo(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$b_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.x("IDB transaction already completed"))
s=2
return A.a(q.jp(a),$async$b_)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.O(new A.T(o,n),n.i("o.E"))
B.b.aE(m)
s=3
return A.a(A.BH(new A.X(m,new A.zc(new A.zd(q,a),b),A.a0(m).i("X<1,A<~>>")),t.H),$async$b_)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eQ(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$b_)
case 6:s=7
return A.a(A.cC(l.gn().update({name:p.name,length:b.c}),t.X),$async$b_)
case 7:case 5:return A.e(null,r)}})
return A.f($async$b_,r)},
dq(a,b,c){return this.wZ(0,b,c)},
wZ(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.x("IDB transaction already completed"))
s=2
return A.a(q.jp(b),$async$dq)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cC(q.e.delete(q.rF(b,B.c.N(c,4096)*4096)),t.X),$async$dq)
case 5:case 4:o=new A.eQ(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$dq)
case 6:s=7
return A.a(A.cC(o.gn().update({name:p.name,length:c}),t.X),$async$dq)
case 7:return A.e(null,r)}})
return A.f($async$dq,r)},
hM(a){return this.uq(a)},
uq(a){var s=0,r=A.h(t.H),q=this,p
var $async$hM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.x("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.BH(A.k([A.cC(q.e.delete(q.jo(a,9007199254740992,0)),p),A.cC(q.d.delete(a),p)],t.iw),t.H),$async$hM)
case 2:return A.e(null,r)}})
return A.f($async$hM,r)}}
A.z9.prototype={
$0(){this.a.b.an()},
$S:2}
A.za.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aS(r)},
$S:2}
A.z8.prototype={
$1(a){if(a==null)throw A.b(A.aH(this.a,"fileId","File not found in database"))
else return a},
$S:198}
A.zb.prototype={
$1(a){var s=this.a
s.cN(s,this.b,J.bN(a,0,this.c))},
$S:199}
A.zd.prototype={
nU(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cC(p.openCursor(v.G.IDBKeyRange.only(A.k([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gaa(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cC(p.put(l,A.k([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cC(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.nU(a,b)},
$S:200}
A.zc.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:201}
A.yL.prototype={
tq(a,b,c){B.f.cN(this.b.kl(a,new A.yM(this,a)),b,c)},
tR(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.N(q,4096)
o=B.c.al(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.tq(p*4096,o,J.bN(B.f.gaa(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.yM.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cN(s,0,J.bN(B.f.gaa(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:202}
A.ok.prototype={}
A.dB.prototype={
eU(a){var s=this
if(s.e||s.d.a==null)A.w(A.hi(10))
if(a.k7(s.x)){s.cv(!0)
return a.d.a}else return A.bj(null,t.H)},
cv(a){return this.tf(a)},
tf(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cv=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gE(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.O(o,o.$ti.i("o.E"))
o.ab(0)
s=5
return A.a(p.d.rf(n).aZ(new A.t8(p,n,a)),$async$cv)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cv,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eU(new A.jR(new A.t9(),new A.an(new A.u($.C,t.D),t.F)))
p.e=!0
p.cv(!1)
q=o
s=1
break}else{n=p.x
if(!n.gE(0)){q=n.ga0(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dG(a,b){return this.pY(a,b)},
pY(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dG=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.hR(b),$async$dG)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dG,r)},
eO(){var s=0,r=A.h(t.H),q=this,p
var $async$eO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.k([],t.iw)
s=2
return A.a(q.d.dY(new A.t7(q,p),"readonly"),$async$eO)
case 2:s=3
return A.a(A.HM(p,t.H),$async$eO)
case 3:return A.e(null,r)}})
return A.f($async$eO,r)},
cD(){return this.cv(!1)},
iz(a,b){return this.w.d.J(a)?1:0},
kB(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.eU(new A.jL(s,a,new A.an(new A.u($.C,t.D),t.F)))},
kC(a){return new v.G.URL(a,"file:///").pathname},
ds(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.Dw(p.b,"/")
s=p.w
r=s.d.J(o)?1:0
q=s.ds(new A.jk(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.eU(new A.hu(p,o,new A.an(new A.u($.C,t.D),t.F)))
return new A.hF(new A.oc(p,q.a,o),0)},
kE(a){}}
A.t8.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.w(A.x("Future already completed"))
p.cl(null)}o.cv(this.c)},
$S:2}
A.t9.prototype={
$1(a){return this.ns(a)},
ns(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.t7.prototype={
$1(a){return this.nr(a)},
nr(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.i7(),$async$$1)
case 2:m=c
l=q.a
l.z.C(0,m)
p=m.gac(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.ew(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:27}
A.oc.prototype={
iC(a,b){this.b.iC(a,b)},
giB(){return 0},
giD(){return 4096},
kA(){return this.b.d>=2?1:0},
iA(){},
fE(){return this.b.fE()},
kD(a){this.b.d=a
return null},
kF(a){},
nk(a,b){return 12},
fF(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.w(A.hi(10))
s.b.fF(a)
if(!r.y.F(0,s.c))r.eU(new A.jR(new A.z7(s,a),new A.an(new A.u($.C,t.D),t.F)))},
kG(a){this.b.d=a
return null},
eu(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.w(A.hi(10))
s=m.c
if(l.y.F(0,s)){m.b.eu(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cv(new Uint8Array(0),0)
q=J.bN(B.f.gaa(r.a),0,r.b)
m.b.eu(a,b)
p=new Uint8Array(a.length)
B.f.cN(p,0,a)
o=A.k([],t.p8)
n=$.C
o.push(new A.ok(b,p))
l.eU(new A.hP(l,s,q,o,new A.an(new A.u(n,t.D),t.F)))},
$ibn:1,
$ijv:1}
A.z7.prototype={
$1(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dG(a,o.c),$async$$1)
case 3:q=n.dq(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:27}
A.b6.prototype={
k7(a){a.hc(a.c,this,!1)
return!0}}
A.jR.prototype={
aV(a){return this.w.$1(a)}}
A.jL.prototype={
k7(a){var s,r,q,p
if(!a.gE(0)){s=a.ga0(0)
for(r=this.x;s!=null;)if(s instanceof A.jL)if(s.x===r)return!1
else s=s.gfm()
else if(s instanceof A.hP){q=s.gfm()
if(s.x===r){p=s.a
p.toString
p.jz(A.n(s).i("b2.E").a(s))}s=q}else if(s instanceof A.hu){if(s.x===r){r=s.a
r.toString
r.jz(A.n(s).i("b2.E").a(s))
return!1}s=s.gfm()}else break}a.hc(a.c,this,!1)
return!0},
aV(a){return this.wR(a)},
wR(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dG(a,o),$async$aV)
case 2:n=c
p.z.H(0,o)
s=3
return A.a(a.hM(n),$async$aV)
case 3:return A.e(null,r)}})
return A.f($async$aV,r)}}
A.hu.prototype={
aV(a){return this.wQ(a)},
wQ(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hJ(p),$async$aV)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aV,r)}}
A.hP.prototype={
k7(a){var s,r=a.b===0?null:a.ga0(0)
for(s=this.x;r!=null;)if(r instanceof A.hP)if(r.x===s){B.b.C(r.z,this.z)
return!1}else r=r.gfm()
else if(r instanceof A.hu){if(r.x===s)break
r=r.gfm()}else break
a.hc(a.c,this,!1)
return!0},
aV(a){return this.wS(a)},
wS(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.yL(m,A.t(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.q)(m),++o){n=m[o]
l.tR(n.a,n.b)}k=a
s=3
return A.a(q.w.dG(a,q.x),$async$aV)
case 3:s=2
return A.a(k.b_(c,l),$async$aV)
case 2:return A.e(null,r)}})
return A.f($async$aV,r)}}
A.fx.prototype={
a5(){return"FileType."+this.b}}
A.h2.prototype={
bJ(){var s=this.d
if(s!=null)return s
throw A.b(A.x("VFS closed"))},
iz(a,b){var s=$.Bp().h(0,a)
if(s==null)return this.e.d.J(a)?1:0
else return this.bJ().bp(s)?1:0},
kB(a,b){var s=$.Bp().h(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.bJ().fg(s,!1)},
kC(a){return new v.G.URL(a,"file:///").pathname},
ds(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.ds(a,b)
s=$.Bp().h(0,p)
if(s==null)return q.e.ds(a,b)
r=q.bJ()
if(!r.bp(s))if((b&4)!==0){r.dc(s).truncate(0)
r.fg(s,!0)}else throw A.b(B.dG)
return new A.hF(new A.oA(q,s,(b&8)!==0),0)},
kE(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cI(a,b){return this.we(a,b)},
cH(a){return this.cI(a,!1)},
we(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cI=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.wo(a,b)
s=2
return A.a(m.$1("meta"),$async$cI)
case 2:l=d
k=J.v(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cI)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cI)
case 4:o=d
n=q.d=new A.zq(new Uint8Array(2),l,p,o)
if(k){n.fg(B.b_,p.getSize()>0)
n.fg(B.b0,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cI,r)}}
A.wo.prototype={
nP(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.nP(a)},
$S:203}
A.oA.prototype={
n3(a,b){return A.Dt(this.a.bJ().dc(this.b),a,{at:b})},
kA(){return this.d>=2?1:0},
iA(){var s=this.a,r=this.b
s.bJ().dc(r).flush()
if(this.c)s.bJ().fg(r,!1)},
fE(){return this.a.bJ().dc(this.b).getSize()},
kD(a){this.d=a},
kF(a){this.a.bJ().dc(this.b).flush()},
fF(a){this.a.bJ().dc(this.b).truncate(a)},
kG(a){this.d=a},
eu(a,b){if(A.Du(this.a.bJ().dc(this.b),a,{at:b})<a.length)throw A.b(B.dI)}}
A.zq.prototype={
bp(a){var s=this.a
A.Dt(this.b,s,{at:0})
return s[a.a]!==0},
fg(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.H(s)
s[a.a]=r
A.Du(this.b,s,{at:0})},
dc(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.xe.prototype={
oD(a,b){var s=this,r=s.c
r.a!==$&&A.cf()
r.a=s
r=t.S
A.yN(new A.xf(s),r)
A.yN(new A.xg(s),r)
s.r=A.yN(new A.xh(s),r)
s.w=A.yN(new A.xi(s),r)},
e_(a,b){var s=J.M(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bU(this.b.buffer,0,null)
B.f.au(q,r,r+s.gm(a),a)
B.f.jV(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cA(a){return this.e_(a,0)},
mz(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mx(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
my(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.xf.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.xg.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.xh.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.xi.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.ik.prototype={}
A.vx.prototype={
oA(a){var s,r=this,q=r.a
q.start()
r.c=A.bo(q,"message",new A.vB(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kC()
q.toString
A.jx(q,s,null,null,!1).W(new A.vC(r),t.P)}},
jc(a){return this.qa(a)},
qa(a){var s=0,r=A.h(t.H),q=this
var $async$jc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.M2(a,new A.vy(q),q.gvD(),new A.vz(q),new A.vA(q))
return A.e(null,r)}})
return A.f($async$jc,r)},
fL(a,b,c){return this.o7(a,b,c,c)},
o7(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fL=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.Hg(null))
o=p.e++
n=new A.u($.C,t.a7)
p.f.j(0,o,new A.an(n,t.h1))
a.i=o
p.a.postMessage(a,A.hY(a))
s=3
return A.a(n,$async$fL)
case 3:m=f
if(J.v(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.ID(m))
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
qK(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.D()
s=q.d
if(s!=null)s.D()
for(s=q.f,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();)r.d.aS(new A.ii(a))
s.ab(0)
p.an()},
lF(){return this.qK(null)}}
A.vB.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lF()
return}this.a.jc(A.bd(a.data))},
$S:1}
A.vC.prototype={
$1(a){this.a.lF()
a.a.an()},
$S:204}
A.vA.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.aB(a)},
$S:24}
A.vz.prototype={
$1(a){return this.nI(a)},
nI(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.uA(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bp(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.E(a0)
k=A.ah(a0)
if(!(l instanceof A.dr)){b.console.error("Error in worker: "+J.a_(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.c7){h=A.HE(b)
g=0}else{g=b instanceof A.dr?1:null
h=null}f={e:J.a_(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.H(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.hY(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:205}
A.vy.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:24}
A.ii.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iG:1}
A.qM.prototype={
cb(a){return this.w0(a)},
w0(a){var s=0,r=A.h(t.n),q
var $async$cb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.xn(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cb,r)}}
A.lg.prototype={}
A.qu.prototype={}
A.eK.prototype={}
A.lz.prototype={
i9(){var s=0,r=A.h(t.H),q=this
var $async$i9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cH(q.b),$async$i9)
case 4:case 3:return A.e(null,r)}})
return A.f($async$i9,r)},
kn(){var s=0,r=A.h(t.H),q=this
var $async$kn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kn,r)}}
A.rJ.prototype={
wU(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
q2(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.xu.prototype={
$1(a){var s=new A.u($.C,t.D),r=new A.d_(new A.an(s,t.F))
this.a.a=r
this.b.aB(r)
return A.HN(s)},
$S:206}
A.xv.prototype={
$2(a,b){var s,r,q
A.bd(a)
s=J.v(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.c4(new A.dr("Operation was cancelled"),b)
else q.c4(a,b)}return null},
$S:207}
A.d_.prototype={}
A.ll.prototype={
gu2(){if(this.c.a)return!1
return!this.d||this.f!=null},
dB(a){return this.oK(a)},
oK(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dB=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kC()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jx(n,o.a,null,o.gqe(),!0),$async$dB)
case 6:m=c
s=7
return A.a(A.jx(n,o.b,a,null,!1),$async$dB)
case 7:l=c
j=o.e
j=j==null?null:j.i9()
s=8
return A.a(j instanceof A.u?j:A.bp(j,t.H),$async$dB)
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
return A.f($async$dB,r)},
qf(){this.n5()},
kc(a,b,c){return this.c.iv(new A.r0(this,a,b,c),b,c)},
n5(){return this.c.kz(new A.r1(this),t.H)}}
A.r0.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dB(r.c).W(new A.r_(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.r_.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.r1.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kn()
s.a.an()
r.a.an()
p.f=null}},
$S:2}
A.iZ.prototype={
iv(a,b,c){return this.xn(a,b,c,c)},
kz(a,b){return this.iv(a,null,b)},
xn(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iv=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.v(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.uP(h,p)
if(!p.a){h.a=p.a=!0
q=A.ix(a,c).aZ(o)
s=1
break}else{n={}
m=new A.u($.C,c.i("u<0>"))
l=new A.an(m,c.i("an<0>"))
n.a=null
h=new A.uO(h,n,l,a,c)
if(!g)n.a=A.bo(b,"abort",new A.uN(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.af(n*2,null,!1,g.$ti.i("1?"))
h=g.a
n=g.b
i=h.length-n
B.b.aj(j,0,i,h,n)
B.b.aj(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aZ(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iv,r)}}
A.uP.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gE(0)){s=r.b
if(s===r.c)A.w(A.aD());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.uO.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.D()
r.c.aB(A.ix(r.d,r.e))},
$S:0}
A.uN.prototype={
$1(a){var s,r=this
r.a.a.D()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.aS(B.ap)}},
$S:1}
A.ei.prototype={
gnb(){var s,r,q,p,o,n=this,m=t.s,l=A.k([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
B.b.C(l,A.k([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.rh.prototype={
$1(a){if(a!=null)return A.F(a)
return null},
$S:208}
A.mf.prototype={
a5(){return"MessageType."+this.b}}
A.wc.prototype={
uA(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hX(a,b)
case"connect":return p.jY(a,b)
case"custom":return p.e9(a,b)
case"fileSystemExists":return p.f9(a,b)
case"fileSystemFlush":return p.fa(a,b)
case"fileSystemAccess":return p.f8(a,b)
case"runQuery":return p.i0(a,b)
case"exclusiveLock":return p.hW(a,b)
case"releaseLock":s=p.bv(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.w(A.x("Lock to be released is not active."))
q.b.an()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hU(a,b)
case"openAdditionalConnection":return p.hY(a,b)
case"updateRequest":return p.i1(a,b)
case"rollbackRequest":return p.i_(a,b)
case"commitRequest":return p.hV(a,b)
case"dedicatedCompatibilityCheck":return p.dJ(a,b)
case"sharedCompatibilityCheck":return p.dJ(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dJ(a,b)
default:r=A.f0(new A.bC(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.u($.C,t.hl)
q.ck(r)
return q}}}
A.dx.prototype={
a5(){return"FileSystemImplementation."+this.b}}
A.cu.prototype={
a5(){return"TypeCode."+this.b},
uh(a){var s=null
switch(this.a){case 0:s=A.w(A.P("Unsupported type code",null))
break
case 1:a=A.ao(A.f_(a))
s=a
break
case 2:s=A.Et(t.bJ.a(a).toString(),null)
break
case 3:A.f_(a)
s=a
break
case 4:A.F(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.hR(a)
s=a
break
case 6:break}return s}}
A.ej.prototype={
mq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.P("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aD:B.b3[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ao(A.f_(h))))
if(k!==0)a.bz(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bz(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f_(h))
if(k!==0)a.bz(k,e)
break
case 4:g=B.e.v(A.F(h))
k=s.dart_sqlite3_bind_text(d,i,c.cA(g),g.length)
if(k!==0)a.bz(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cA(h),h.length)
if(k!==0)a.bz(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bz(k,e)
break
case 7:f=A.hR(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bz(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.me()},
h(a,b){var s=this.c[b],r=s>=8?B.aD:B.b3[s]
return r.uh(this.a[b])},
j(a,b,c){this.me()},
me(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.AF.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:24}
A.q4.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.q5.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.q8.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.q9.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qa.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.vt.prototype={
uR(){var s,r,q,p
for(s=this.b,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.ab(0)}}
A.iv.prototype={
a5(){return"FileType."+this.b}}
A.dO.prototype={
a5(){return"StorageMode."+this.b}}
A.fX.prototype={
l(a){return"Remote error: "+this.a},
$iG:1}
A.dr.prototype={}
A.Ap.prototype={
$1(a){return A.bd(a.data)},
$S:210}
A.k6.prototype={
D(){var s=this.a
if(s!=null)s.D()
this.a=null}}
A.hs.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.D()
q.d.D()
q.e.D()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)p[n].abort()
B.b.ab(p)
p=q.f
if(p!=null)p.b.an()
s=2
return A.a(q.a.eZ(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
m6(a){var s=new v.G.AbortController()
a.onabort=A.Aq(new A.yr(s))
this.w.push(s)
return s},
kw(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gu2()){r=p.m6(b)
o=s.kc(c,r.signal,d).aZ(new A.yv(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.x("Requested operation on inactive lock state."))}if(o==null)o=A.ix(c,d)
q=p.a.z
return q instanceof A.dB?o.aZ(q.gvh()):o},
wb(a){var s=this,r=s.m6(a),q=new A.u($.C,t.hy),p=new A.aI(q,t.ho),o=t.H
A.BG(s.a.f.kc(new A.ys(s,p),r.signal,o),new A.yt(p),o,t.K)
return q.aZ(new A.yu(s,r))}}
A.yr.prototype={
$0(){return this.a.abort()},
$S:0}
A.yv.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:2}
A.ys.prototype={
$0(){var s=this.a,r=s.r++,q=new A.u($.C,t.D)
s.f=new A.a4(r,new A.aI(q,t.h))
this.b.aB(r)
return q},
$S:4}
A.yt.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.c4(a,b)},
$S:12}
A.yu.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:2}
A.hq.prototype={
oF(a,b,c){this.b.a.aZ(new A.yb(this))},
dJ(a,b){return this.q5(a,b)},
q5(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mt(a),$async$dJ)
case 3:q={r:d.gnb(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dJ,r)},
jY(a,b){return this.vq(a,b)},
vq(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$jY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glz()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.hY(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jY,r)},
e9(a,b){return this.vr(a,b)},
vr(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$e9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lj(l)
n=a.r
s=7
return A.a(o.a.gcd(),$async$e9)
case 7:s=6
return A.a(d.cE(p,new A.qu(n)),$async$e9)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cE(p,new A.lg(a)),$async$e9)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e9,r)},
hX(a,b){return this.vF(a,b)},
vF(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kz(new A.yg(p,a),t.m),$async$hX)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
i0(a,b){return this.vJ(a,b)},
vJ(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.a
s=3
return A.a(n.gcd(),$async$i0)
case 3:m=d
q=o.kw(a.z,b,new A.yj(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i0,r)},
hW(a,b){return this.vv(a,b)},
vv(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).wb(b),$async$hW)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
hV(a,b){return this.vp(a,b)},
vp(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dz(n,new A.yd(p,o),a),$async$hV)
case 6:q=d
s=1
break
s=4
break
case 5:n.D()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
i_(a,b){return this.vI(a,b)},
vI(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dz(n,new A.yi(p,o),a),$async$i_)
case 6:q=d
s=1
break
s=4
break
case 5:n.D()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$i_,r)},
i1(a,b){return this.vL(a,b)},
vL(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dz(n,new A.yl(p,o),a),$async$i1)
case 6:q=d
s=1
break
s=4
break
case 5:n.D()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
hY(a,b){return this.vG(a,b)},
vG(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bv(a).a;++m.w
s=3
return A.a(A.AI(),$async$hY)
case 3:o=d
n=o.a
p.w.kX(o.b).x.push(A.Eu(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hY,r)},
hU(a,b){return this.vo(a,b)},
vo(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
B.b.H(p.x,o)
s=3
return A.a(o.q(),$async$hU)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hU,r)},
fa(a,b){return this.vy(a,b)},
vy(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fa=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).a.gcL(),$async$fa)
case 3:o=d
s=o instanceof A.dB?4:5
break
case 4:s=6
return A.a(o.cv(!1),$async$fa)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fa,r)},
f8(a,b){return this.vw(a,b)},
vw(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$f8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=B.b4[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcL(),$async$f8)
case 4:s=3
return A.a(l.kw(null,k,new j.ye(d,n,m,a),t.m),$async$f8)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f8,r)},
f9(a,b){return this.vx(a,b)},
vx(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$f9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcL(),$async$f9)
case 4:s=3
return A.a(n.kw(null,m,new l.yf(d,a),t.y),$async$f9)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
dz(a,b,c){return this.oh(a,b,c)},
oh(a,b,c){var s=0,r=A.h(t.m),q,p
var $async$dz=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.a(b.$0(),$async$dz)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dz,r)},
vE(a){},
e5(a){var s=0,r=A.h(t.X),q,p=this
var $async$e5=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fL({r:a,z:null,i:0,d:null,t:"custom"},B.cN,t.m),$async$e5)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e5,r)},
lj(a){return B.b.mJ(this.x,new A.ya(a))},
bv(a){var s=a.d
if(s!=null)return this.lj(s)
else throw A.b(A.P("Request requires database id",null))},
$iDg:1}
A.yb.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:B.b.ab(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.yg.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cb(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.vf(h.d,A.HH(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcL():m.gcd(),$async$$0)
case 8:l=A.Eu(m,null)
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
return A.a(m.eZ(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:211}
A.yj.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.x("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ej(s,r,A.bU(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.o2(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ao(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.v5(l,k.s,q)
s=o.d
return A.G_(s.sqlite3_get_autocommit(p)!==0,m,A.ao(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:35}
A.yd.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcd(),$async$$0)
case 3:q=b.a.pe().gcP().aT(new A.yc(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:67}
A.yc.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.hY(s))},
$S:68}
A.yi.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcd(),$async$$0)
case 3:q=b.a.rU().gcP().aT(new A.yh(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:67}
A.yh.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.hY(s))},
$S:68}
A.yl.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcd(),$async$$0)
case 3:q=b.a.tr().gcP().aT(new A.yk(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.yk.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.hY(s))},
$S:215}
A.ye.prototype={
$0(){var s,r,q,p=this,o=p.a.ds(new A.jk(A.Fa(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fF(s.byteLength)
o.eu(A.bU(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fE()
r=new Uint8Array(q)
o.iC(r,0)
q={r:t.a.a(J.H_(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iA()}},
$S:35}
A.yf.prototype={
$0(){return this.a.iz(A.Fa(B.b4[this.b.f]),0)===1},
$S:65}
A.ya.prototype={
$1(a){return a.b===this.a},
$S:216}
A.lm.prototype={
gcL(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.ix(new A.r4(p),t.H):o,$async$gcL)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcL,r)},
gcd(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.ix(new A.r3(p),t.u):o,$async$gcd)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcd,r)},
eZ(){var s=0,r=A.h(t.H),q=this
var $async$eZ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$eZ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$eZ,r)},
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
if(j!=null)j.uR()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.CT()
A.BD(m)
k=l.a.get(m)
if(k==null)A.w(A.x("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.u?j:A.bp(j,t.H),$async$q)
case 6:q.f.n5()
return A.e(null,r)}})
return A.f($async$q,r)},
lL(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a4(s,!0)
p=a.ih(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.T(n,A.n(n).i("T<1>")).gG(0)).q()
n.j(0,p.d,p)
return new A.a4(p,!0)}return new A.a4(p,!1)},
v5(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aD(b,B.k)
else{s=null
r=null
q=this.lL(a,b)
s=q.a
r=q.b
try{s.e6(new A.lh(c.gu0()))}finally{if(r)s.dl()
else s.q()}}},
o2(a,b,c){var s,r=null,q=null,p=this.lL(a,b)
r=p.a
q=p.b
try{s=A.IE(r,c)
return s}finally{if(q)r.dl()
else r.q()}}}
A.r4.prototype={
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
return A.a(A.wn("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ge3()
s=3
break
case 5:case 6:s=10
return A.a(A.lA("drift_db/"+l.c,k===B.ax,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ge3()
s=3
break
case 7:s=11
return A.a(A.lX(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ge3()
s=3
break
case 8:l.z=A.BJ("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:4}
A.r3.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcL(),$async$$0)
case 4:n=b
o.mO()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e_(B.e.v(n.a),1),n,0)
if(m===0)A.w(A.x("could not register vfs"))
$.CT().j(0,n,m)
s=5
return A.a(l.f.kc(new A.r2(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:69}
A.r2.prototype={
$0(){var s=this.a
return s.a.b.ic(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:69}
A.xC.prototype={
glz(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.ob()
r.Q!==$&&A.Bm()
r.Q=s
q=s}return q},
ea(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ea=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cx(A.cy(A.Ku(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$ea)
case 7:if(!b){s=6
break}m=h.gn()
s=J.v(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.ik(i.port,i.lockName,null)
n.kX(l)
s=9
break
case 10:s=A.Mm(m.t)?11:12
break
case 11:s=13
return A.a(n.mt(m),$async$ea)
case 13:k=b
j.postMessage(k.gnb())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.a(h.D(),$async$ea)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$ea,r)},
kX(a){var s=this,r=A.Jo(a,s.d++,s)
s.c.push(r)
r.b.a.aZ(new A.xD(s,r))
return r},
mt(a){return this.x.kz(new A.xE(this,a),t.p6)},
cb(a){return this.w1(a)},
w1(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bd(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.x("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bp(n,t.he),$async$cb)
case 5:s=3
break
case 4:o=A.BG(q.b.cb(m),new A.xF(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cb)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cb,r)},
vf(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aS(s,s.r,s.e,A.n(s).i("aS<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ax||b===B.aZ
o=A.BQ(t.cj)
n=c===0?null:new A.vt(c,A.dF(null,null,t.N,t.fw))
n=new A.lm(this,r,a,b,d,new A.ll(q+"-outer",q,new A.iZ(o),p),n)
s.j(0,r,n)
return n}}
A.xD.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.xE.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.v(d.t,"dedicatedCompatibilityCheck")||J.v(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.e5(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.v(d.t,"dedicatedCompatibilityCheck")||J.v(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.p_(),$async$$0)
case 9:case 8:j=a1
i=A.aN(t.cU)
s=J.v(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glz()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.hY(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hx(n,"message",!1,t.d4).gG(0),$async$$0)
case 15:e=b.Hn(a.bd(a1.data))
k=e.c
l=e.d
i.C(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.a(A.i1(),$async$$0)
case 18:d=b.D(a1)
case 19:if(!d.k()){s=20
break}i.t(0,new A.a4(B.bf,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.AE(c),$async$$0)
case 23:if(a1)i.t(0,new A.a4(B.bg,c))
case 22:d=A.O(i,i.$ti.c)
q=new A.ei(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:218}
A.xF.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:219}
A.ki.prototype={}
A.o2.prototype={
gmM(){return new A.hx(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.oy.prototype={
gmM(){return new A.dj(new A.zF(this),t.k8)},
q(){}}
A.zF.prototype={
$1(a){var s=A.k([],t.kG),r=A.k([],t.dw)
r.push(A.bo(this.a.a,"connect",new A.zC(new A.zG(s,r,a)),!1,t.m))
a.r=new A.zD(r)},
$S:220}
A.zG.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bo(a,"message",new A.zE(this.c),!1,t.m))},
$S:1}
A.zE.prototype={
$1(a){this.a.tQ(a)},
$S:1}
A.zC.prototype={
$1(a){var s,r=a.ports
r=J.D(t.ip.b(r)?r:new A.bP(r,A.a0(r).i("bP<1,L>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.zD.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].D()},
$S:2}
A.o3.prototype={
ob(){var s=v.G
if(!("Worker" in s))return null
return new A.yG(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.yG.prototype={}
A.ne.prototype={
gfN(){return A.F(this.c)}}
A.wG.prototype={
gkb(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iF(a){var s,r=this,q=r.d=J.H2(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gM()
return s},
mH(a,b){var s
if(this.iF(a))return
if(b==null)if(a instanceof A.er)b="/"+a.a+"/"
else{s=J.a_(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.lq(b)},
f4(a){return this.mH(a,null)},
v9(){if(this.c===this.b.length)return
this.lq("no more input")},
v4(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.w(A.aZ("position must be greater than or equal to 0."))
else if(c>n.length)A.w(A.aZ("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.w(A.aZ("position plus length must not go beyond the end of the string."))
s=this.a
r=A.k([0],t.t)
q=n.length
p=new A.wp(s,r,new Uint32Array(q))
p.oB(new A.ci(n),s)
o=c+b
if(o>q)A.w(A.aZ("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.w(A.aZ("Start may not be negative, was "+c+"."))
throw A.b(new A.ne(n,a,new A.hy(p,c,o)))},
lq(a){this.v4("expected "+a+".",0,this.c)}}
A.hf.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.Dx(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.Dx(b,this))
s=this.a
s.$flags&2&&A.H(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.H(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lg(b)
B.f.au(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.tn(q)
q=r.a
s=r.b++
q.$flags&2&&A.H(q)
q[s]=b},
lg(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
tn(a){var s=this.lg(null)
B.f.au(s,0,a,this.a)
this.a=s},
aj(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.aw(c,0,s,null,null))
s=this.a
if(d instanceof A.cv)B.f.aj(s,b,c,d.a,e)
else B.f.aj(s,b,c,d,e)},
au(a,b,c,d){return this.aj(0,b,c,d,0)}}
A.od.prototype={}
A.cv.prototype={}
A.BB.prototype={}
A.hx.prototype={
a9(a,b,c,d){return A.bo(this.a,this.b,a,!1,this.$ti.c)},
by(a,b,c){return this.a9(a,null,b,c)}}
A.jP.prototype={
D(){var s=this,r=A.bj(null,t.H)
if(s.b==null)return r
s.jA()
s.d=s.b=null
return r},
ia(a){var s,r=this
if(r.b==null)throw A.b(A.x("Subscription has been canceled."))
r.jA()
s=A.FB(new A.yK(a),t.m)
s=s==null?null:A.cY(s)
r.d=s
r.jy()},
be(){if(this.b==null)return;++this.a
this.jA()},
b2(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jy()},
jy(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jA(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibl:1}
A.yJ.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.yK.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dE.prototype
s.oo=s.l
s=A.bE.prototype
s.oj=s.mP
s.ol=s.mQ
s.on=s.mS
s.om=s.mR
s=A.b1.prototype
s.iH=s.aA
s.kU=s.aG
s.kV=s.aQ
s=A.dh.prototype
s.or=s.ld
s.os=s.lu
s.ot=s.m1
s=A.K.prototype
s.kT=s.aj
s=A.aB.prototype
s.kS=s.u_
s=A.k7.prototype
s.ou=s.q
s=A.o.prototype
s.oi=s.dr
s=A.kT.prototype
s.kQ=s.hS
s=A.fg.prototype
s.kR=s.f_
s=A.h4.prototype
s.oq=s.a_
s.op=s.R})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"KE","HW",46)
r(A,"KR","Ip",11)
q(A,"Lp","J9",22)
q(A,"Lq","Ja",22)
q(A,"Lr","Jb",22)
q(A,"Ls","KU",18)
r(A,"FG","Lg",0)
q(A,"Lt","KV",26)
s(A,"Lu","KX",14)
r(A,"AA","KW",0)
p(A,"Lz",5,null,["$5"],["La"],222,0)
p(A,"LE",4,null,["$1$4","$4"],["Av",function(a,b,c,d){return A.Av(a,b,c,d,t.z)}],223,0)
p(A,"LG",5,null,["$2$5","$5"],["Aw",function(a,b,c,d,e){var i=t.z
return A.Aw(a,b,c,d,e,i,i)}],224,0)
p(A,"LF",6,null,["$3$6"],["Cz"],225,0)
p(A,"LC",4,null,["$1$4","$4"],["Fp",function(a,b,c,d){return A.Fp(a,b,c,d,t.z)}],226,0)
p(A,"LD",4,null,["$2$4","$4"],["Fq",function(a,b,c,d){var i=t.z
return A.Fq(a,b,c,d,i,i)}],227,0)
p(A,"LB",4,null,["$3$4","$4"],["Fo",function(a,b,c,d){var i=t.z
return A.Fo(a,b,c,d,i,i,i)}],228,0)
p(A,"Lx",5,null,["$5"],["L9"],229,0)
p(A,"LH",4,null,["$4"],["Ax"],230,0)
p(A,"Lw",5,null,["$5"],["L8"],231,0)
p(A,"Lv",5,null,["$5"],["L7"],232,0)
p(A,"LA",4,null,["$4"],["Lb"],233,0)
p(A,"Ly",5,null,["$5"],["Fn"],234,0)
var j
o(j=A.eN.prototype,"geG","bF",0)
o(j,"geH","bG",0)
n(A.eO.prototype,"gu8",0,1,null,["$2","$1"],["c4","aS"],60,0,0)
m(A.u.prototype,"giU","pj",14)
n(j=A.e1.prototype,"gtN",0,1,null,["$2","$1"],["bx","tO"],60,0,0)
l(j,"goR","aA",16)
m(j,"goN","aG",14)
o(j,"gpa","aQ",0)
o(j=A.dX.prototype,"geG","bF",0)
o(j,"geH","bG",0)
o(j=A.b1.prototype,"geG","bF",0)
o(j,"geH","bG",0)
o(A.hw.prototype,"glJ","r2",0)
l(j=A.cx.prototype,"gqV","qW",16)
m(j,"gqZ","r_",14)
o(j,"gqX","qY",0)
o(j=A.hz.prototype,"geG","bF",0)
o(j,"geH","bG",0)
l(j,"gj6","j7",16)
m(j,"gja","jb",156)
o(j,"gj8","j9",0)
o(j=A.hH.prototype,"geG","bF",0)
o(j,"geH","bG",0)
l(j,"gj6","j7",16)
m(j,"gja","jb",14)
o(j,"gj8","j9",0)
s(A,"CD","Kn",28)
q(A,"CE","Ko",29)
s(A,"LM","I3",46)
q(A,"LW","Kr",31)
k(j=A.nV.prototype,"gtM","t",16)
o(j,"ge3","q",0)
q(A,"FK","Mf",29)
s(A,"FJ","Me",28)
q(A,"LX","J3",6)
p(A,"Mt",2,null,["$1$2","$2"],["FY",function(a,b){return A.FY(a,b,t.o)}],235,0)
m(j=A.lp.prototype,"gv3","Y",28)
l(j,"gvM","ad",29)
l(j,"gvS","vT",18)
q(A,"LK","Hf",6)
q(A,"FI","Hv",236)
q(A,"LR","HA",237)
q(A,"LT","HS",238)
q(A,"LQ","Ha",239)
q(A,"LS","HG",240)
q(A,"AK","Hz",6)
r(A,"Mo","Kp",11)
r(A,"Mp","Lj",241)
o(A.nY.prototype,"gvj","jX",0)
r(A,"NX","Kq",11)
l(A.mA.prototype,"gwv","ww",8)
o(A.mL.prototype,"gjQ","f_",0)
o(A.mt.prototype,"gjQ","f_",0)
l(j=A.fg.prototype,"gqT","qU",36)
o(j,"glS","dW",4)
q(A,"M6","Dr",242)
o(j=A.mx.prototype,"gr0","r1",0)
l(j,"gr3","r4",125)
q(A,"MD","In",44)
q(A,"LO","By",162)
l(j=A.nf.prototype,"gvB","vC",36)
l(j,"gvz","vA",135)
o(j,"gqS","jl",0)
q(A,"MK","IV",44)
q(A,"LU","AR",25)
m(j=A.nI.prototype,"gq3","dI",7)
m(j,"gq6","h3",7)
m(A.nH.prototype,"gqc","h5",7)
m(j=A.nK.prototype,"gqs","dL",7)
m(j,"gqw","ha",7)
m(j,"gqk","h6",7)
m(j,"gqm","h7",7)
m(j,"gqo","h8",7)
m(j,"gqq","h9",7)
m(j,"gqy","hb",7)
m(j,"gqu","jd",7)
l(j=A.lk.prototype,"gw4","w5",8)
m(j,"gw2","w3",174)
n(j,"gxP",0,5,null,["$5"],["xQ"],175,0,0)
n(j,"gxE",0,3,null,["$3"],["xF"],176,0,0)
n(j,"gxw",0,4,null,["$4"],["xx"],56,0,0)
n(j,"gxL",0,4,null,["$4"],["xM"],56,0,0)
n(j,"gxR",0,3,null,["$3"],["xS"],178,0,0)
m(j,"gxW","xX",57)
m(j,"gxC","xD",57)
l(j,"gxA","xB",40)
n(j,"gxT",0,4,null,["$4"],["xU"],59,0,0)
n(j,"gy5",0,4,null,["$4"],["y6"],59,0,0)
m(j,"gy_","y0",182)
m(j,"gxY","xZ",23)
m(j,"gxJ","xK",23)
m(j,"gxN","xO",23)
m(j,"gy3","y4",23)
m(j,"gxy","xz",23)
l(j,"giB","xG",40)
n(j,"gxH",0,3,null,["$3"],["xI"],184,0,0)
l(j,"giD","xV",40)
l(j,"guD","uE",22)
l(j,"guy","uz",185)
n(j,"guB",0,5,null,["$5"],["uC"],186,0,0)
n(j,"guJ",0,4,null,["$4"],["uK"],41,0,0)
n(j,"guN",0,4,null,["$4"],["uO"],41,0,0)
n(j,"guL",0,4,null,["$4"],["uM"],41,0,0)
m(j,"guP","uQ",62)
m(j,"guH","uI",62)
n(j,"guF",0,5,null,["$5"],["uG"],189,0,0)
m(j,"guw","ux",190)
m(j,"guu","uv",191)
n(j,"gus",0,3,null,["$3"],["ut"],192,0,0)
o(j=A.dB.prototype,"ge3","q",4)
o(j,"gvh","cD",4)
o(A.h2.prototype,"ge3","q",0)
o(A.ll.prototype,"gqe","qf",0)
l(A.ej.prototype,"gu0","mq",209)
l(A.hq.prototype,"gvD","vE",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.BO,J.lZ,A.jf,J.fc,A.yx,A.y6,A.o,A.l1,A.eg,A.U,A.ae,A.K,A.wl,A.at,A.md,A.cV,A.lw,A.ng,A.n1,A.lt,A.nG,A.iw,A.ns,A.js,A.hE,A.iP,A.fm,A.hA,A.cp,A.x5,A.ms,A.is,A.k4,A.u9,A.bF,A.aS,A.ma,A.er,A.hD,A.nO,A.h9,A.zN,A.nW,A.oK,A.co,A.o9,A.oH,A.k8,A.jC,A.nQ,A.jU,A.oE,A.al,A.aa,A.b1,A.jI,A.nh,A.jS,A.eO,A.cb,A.u,A.nP,A.e1,A.oF,A.jE,A.nM,A.o4,A.yH,A.e0,A.hw,A.cx,A.jO,A.Ab,A.Ad,A.Ac,A.A9,A.Aa,A.A8,A.A5,A.oQ,A.A4,A.A3,A.A7,A.A6,A.oP,A.oR,A.oO,A.hQ,A.jB,A.oa,A.zo,A.e_,A.oh,A.b2,A.oj,A.oJ,A.oi,A.nd,A.l4,A.aB,A.nS,A.pv,A.nR,A.l2,A.oz,A.eP,A.zl,A.zO,A.oL,A.dk,A.aJ,A.o8,A.aR,A.aC,A.yI,A.mv,A.jm,A.o6,A.bi,A.lY,A.R,A.W,A.oD,A.jn,A.mU,A.a2,A.kf,A.xb,A.cc,A.lx,A.mr,A.ze,A.zf,A.lu,A.a3,A.lq,A.iE,A.et,A.hM,A.hC,A.iO,A.lp,A.mq,A.nt,A.cj,A.c2,A.rK,A.pI,A.iN,A.jh,A.uo,A.jg,A.wk,A.qv,A.qL,A.yw,A.ef,A.kS,A.kT,A.pr,A.mj,A.fD,A.l9,A.cE,A.lK,A.mO,A.am,A.uL,A.w2,A.eB,A.cL,A.mJ,A.wi,A.mX,A.jz,A.n8,A.aT,A.a1,A.pF,A.pG,A.pH,A.ri,A.ip,A.q3,A.io,A.dH,A.u4,A.na,A.vp,A.og,A.nY,A.hr,A.wa,A.wX,A.eY,A.oG,A.hG,A.tj,A.cF,A.rs,A.o7,A.mA,A.d6,A.b_,A.cl,A.yy,A.mI,A.cN,A.wh,A.aX,A.dA,A.fz,A.eo,A.c8,A.qe,A.c1,A.mW,A.uM,A.cn,A.nX,A.ho,A.bH,A.zA,A.fg,A.xI,A.pt,A.fd,A.kY,A.nb,A.iu,A.rl,A.bh,A.uf,A.ol,A.ni,A.pq,A.mx,A.v8,A.j8,A.hI,A.vg,A.zH,A.ep,A.dy,A.lT,A.cH,A.dz,A.dQ,A.v6,A.pf,A.bf,A.qg,A.nf,A.d3,A.ex,A.uv,A.dJ,A.me,A.zv,A.zt,A.uT,A.ps,A.iM,A.jd,A.uY,A.mH,A.vD,A.b3,A.vM,A.bm,A.hb,A.ha,A.wI,A.bv,A.h8,A.cM,A.fR,A.jc,A.cB,A.wK,A.jb,A.jr,A.wV,A.cP,A.cm,A.ez,A.x7,A.qM,A.eK,A.ht,A.hm,A.nF,A.xt,A.ja,A.jy,A.hn,A.nI,A.nH,A.A2,A.nK,A.qn,A.wH,A.my,A.mz,A.wp,A.n4,A.h4,A.rL,A.bq,A.cw,A.cq,A.n7,A.cr,A.c7,A.kI,A.qO,A.e2,A.wr,A.eh,A.b4,A.kW,A.qt,A.ou,A.zu,A.bQ,A.lh,A.df,A.jk,A.xo,A.xj,A.xq,A.xp,A.dU,A.dg,A.lk,A.d9,A.eQ,A.xk,A.pm,A.jT,A.yL,A.ok,A.oc,A.zq,A.xe,A.ik,A.wc,A.ii,A.lg,A.lz,A.rJ,A.d_,A.ll,A.iZ,A.ei,A.vt,A.fX,A.k6,A.hs,A.lm,A.xC,A.ki,A.o3,A.yG,A.wG,A.BB,A.jP])
q(J.lZ,[J.m0,J.iG,J.aE,J.br,J.fC,J.eq,J.dC])
q(J.aE,[J.dE,J.B,A.fJ,A.j0])
q(J.dE,[J.mB,J.dT,J.bR])
r(J.m_,A.jf)
r(J.tg,J.B)
q(J.eq,[J.iF,J.m1])
q(A.o,[A.dW,A.J,A.ck,A.ak,A.it,A.eH,A.da,A.bI,A.eT,A.nN,A.oC,A.hK,A.es,A.je])
q(A.dW,[A.ed,A.kj])
r(A.jM,A.ed)
r(A.jJ,A.kj)
q(A.eg,[A.pK,A.pD,A.pJ,A.ta,A.wW,A.B1,A.B3,A.xP,A.xO,A.Ag,A.Af,A.rH,A.rC,A.yP,A.yO,A.z_,A.z2,A.wC,A.wD,A.wA,A.yF,A.yE,A.zz,A.z5,A.yB,A.zn,A.up,A.zj,A.qs,A.y1,A.rD,A.B5,A.Bc,A.Bd,A.AJ,A.py,A.pA,A.pC,A.kV,A.pu,A.Ai,A.pw,A.ut,A.AT,A.qq,A.qr,A.w4,A.w0,A.vr,A.Bn,A.wt,A.wu,A.rf,A.re,A.rg,A.rd,A.rc,A.rb,A.ra,A.r6,A.r7,A.r8,A.Bh,A.u5,A.u8,A.u7,A.u6,A.yp,A.ym,A.x3,A.x_,A.x1,A.wY,A.tD,A.tE,A.tG,A.tY,A.tH,A.tI,A.tJ,A.tK,A.tL,A.tM,A.tN,A.tO,A.tP,A.tQ,A.tS,A.tT,A.tU,A.tV,A.tW,A.tX,A.ts,A.tu,A.ty,A.tl,A.tk,A.tw,A.tv,A.tA,A.tB,A.tC,A.tm,A.to,A.tq,A.tz,A.rt,A.ru,A.uG,A.uD,A.uF,A.vU,A.vW,A.vX,A.vY,A.wd,A.wg,A.q_,A.q2,A.pZ,A.q1,A.pX,A.pW,A.pV,A.q0,A.pY,A.pQ,A.pP,A.pU,A.pT,A.pR,A.pN,A.w6,A.w5,A.xJ,A.Bb,A.ro,A.rm,A.rp,A.rq,A.ug,A.ui,A.uk,A.um,A.uh,A.xs,A.vf,A.vb,A.vc,A.vd,A.ve,A.v9,A.va,A.vn,A.vj,A.vk,A.vh,A.vi,A.vm,A.pg,A.ph,A.qi,A.qh,A.wT,A.wL,A.wR,A.wM,A.wN,A.wO,A.AG,A.AH,A.uC,A.uw,A.ux,A.uy,A.uz,A.uA,A.uV,A.uW,A.v3,A.v1,A.v0,A.v_,A.v2,A.vK,A.vE,A.vG,A.vI,A.vN,A.vS,A.wJ,A.AV,A.Bg,A.Be,A.Bf,A.ud,A.ue,A.B8,A.B_,A.AZ,A.AN,A.xB,A.xz,A.xH,A.qo,A.qp,A.Ay,A.rN,A.rM,A.rO,A.rQ,A.rS,A.rP,A.t5,A.wv,A.qW,A.zK,A.B9,A.Bi,A.Bj,A.pl,A.yz,A.yA,A.q6,A.q7,A.qb,A.qc,A.qd,A.rr,A.pp,A.pn,A.z8,A.zb,A.zc,A.t9,A.t7,A.z7,A.wo,A.xf,A.xg,A.xh,A.xi,A.vB,A.vC,A.vA,A.vz,A.vy,A.xu,A.r_,A.uN,A.rh,A.AF,A.q4,A.q5,A.q8,A.q9,A.qa,A.Ap,A.yc,A.yh,A.yk,A.ya,A.zF,A.zG,A.zE,A.zC,A.yJ,A.yK])
q(A.pK,[A.y7,A.pE,A.qm,A.th,A.B2,A.Ah,A.Az,A.rI,A.rB,A.yQ,A.z0,A.z3,A.xL,A.z4,A.ua,A.ur,A.zm,A.y0,A.zX,A.xc,A.zW,A.zV,A.rF,A.rE,A.px,A.pz,A.pB,A.kU,A.uK,A.uu,A.Ao,A.w3,A.w_,A.vs,A.w1,A.wj,A.Bo,A.AD,A.r9,A.rv,A.uH,A.vZ,A.we,A.wf,A.pS,A.v5,A.v7,A.pi,A.AS,A.xw,A.AO,A.xy,A.rR,A.qZ,A.zd,A.xv,A.yt,A.xF])
r(A.bP,A.jJ)
q(A.U,[A.ee,A.bE,A.dh,A.oe])
q(A.ae,[A.dD,A.mM,A.dd,A.m2,A.nr,A.mV,A.o5,A.j7,A.iJ,A.kN,A.bC,A.cU,A.nq,A.bk,A.l7])
q(A.K,[A.hg,A.mZ,A.nA,A.hk,A.ej,A.hf])
r(A.ci,A.hg)
q(A.pJ,[A.B7,A.vv,A.xQ,A.xR,A.zQ,A.zP,A.Ae,A.xT,A.xU,A.xW,A.xX,A.xV,A.xS,A.rG,A.yR,A.yW,A.yV,A.yT,A.yS,A.yZ,A.yY,A.yX,A.z1,A.wB,A.wE,A.wz,A.zJ,A.zI,A.xK,A.y5,A.y4,A.zr,A.zp,A.Aj,A.Ak,A.yD,A.yC,A.zy,A.zx,A.Au,A.A_,A.zZ,A.r5,A.Ar,A.As,A.us,A.yq,A.yn,A.yo,A.x2,A.x0,A.wZ,A.tF,A.tR,A.tZ,A.u_,A.u0,A.u1,A.u2,A.u3,A.tr,A.tt,A.tx,A.tn,A.tp,A.vV,A.rj,A.t6,A.rz,A.ry,A.wx,A.pM,A.pO,A.x4,A.w7,A.uS,A.rn,A.rk,A.uj,A.ul,A.v4,A.vl,A.qf,A.ql,A.qk,A.qj,A.wQ,A.wP,A.wS,A.vL,A.vF,A.vH,A.vJ,A.vO,A.vT,A.vR,A.vQ,A.vP,A.wU,A.uZ,A.uU,A.un,A.xG,A.t4,A.rT,A.t_,A.t0,A.t1,A.t2,A.rY,A.rZ,A.rU,A.rV,A.rW,A.rX,A.t3,A.z6,A.qX,A.qY,A.qU,A.qT,A.qV,A.qQ,A.qP,A.qR,A.qS,A.zL,A.zM,A.Bk,A.qz,A.qw,A.qB,A.qD,A.qF,A.qy,A.qE,A.qJ,A.qH,A.qG,A.qA,A.qC,A.qI,A.qx,A.pj,A.pk,A.xl,A.po,A.z9,A.za,A.yM,A.t8,A.r0,A.r1,A.uP,A.uO,A.yr,A.yv,A.ys,A.yu,A.yb,A.yg,A.yj,A.yd,A.yi,A.yl,A.ye,A.yf,A.r4,A.r3,A.r2,A.xD,A.xE,A.zD])
q(A.J,[A.Z,A.em,A.T,A.aq,A.aM,A.eS,A.jW])
q(A.Z,[A.cs,A.X,A.bV,A.iL,A.of])
r(A.el,A.ck)
r(A.iq,A.eH)
r(A.fq,A.da)
q(A.hE,[A.om,A.on,A.oo])
q(A.om,[A.a4,A.k1,A.k2,A.hF,A.op])
r(A.eW,A.on)
q(A.oo,[A.eX,A.oq])
r(A.ke,A.iP)
r(A.cT,A.ke)
r(A.il,A.cT)
q(A.fm,[A.aW,A.iy])
q(A.cp,[A.im,A.k3])
r(A.dv,A.im)
r(A.iC,A.ta)
r(A.j5,A.dd)
q(A.wW,[A.ww,A.id])
q(A.bE,[A.iI,A.iH,A.jV])
r(A.fI,A.fJ)
q(A.j0,[A.j_,A.fK])
q(A.fK,[A.jY,A.k_])
r(A.jZ,A.jY)
r(A.dM,A.jZ)
r(A.k0,A.k_)
r(A.bT,A.k0)
q(A.dM,[A.ml,A.mm])
q(A.bT,[A.mn,A.mo,A.mp,A.j1,A.j2,A.j3,A.ew])
r(A.k9,A.o5)
q(A.aa,[A.hJ,A.jp,A.jN,A.dj,A.jQ,A.jH,A.ib,A.hx])
r(A.b5,A.hJ)
r(A.b0,A.b5)
q(A.b1,[A.dX,A.hz,A.hH])
r(A.eN,A.dX)
r(A.jD,A.jI)
q(A.eO,[A.aI,A.an])
q(A.e1,[A.cW,A.hL])
r(A.k5,A.nM)
q(A.o4,[A.ca,A.hv])
r(A.jX,A.cW)
r(A.eU,A.jQ)
q(A.oO,[A.nZ,A.ot])
q(A.dh,[A.dY,A.jK])
r(A.di,A.k3)
q(A.nd,[A.k7,A.zR,A.xY,A.oB])
r(A.zh,A.k7)
q(A.l4,[A.en,A.kQ,A.ti])
q(A.en,[A.kL,A.m8,A.nx])
q(A.aB,[A.oI,A.ic,A.kR,A.m5,A.m4,A.ny,A.ju,A.lQ])
q(A.oI,[A.kM,A.m9])
r(A.y2,A.nS)
q(A.pv,[A.xZ,A.hp,A.nV,A.zY])
r(A.xM,A.xZ)
r(A.m3,A.iJ)
r(A.zi,A.l2)
r(A.zk,A.zl)
r(A.oS,A.oL)
r(A.A0,A.oS)
q(A.bC,[A.d8,A.iA])
r(A.o1,A.kf)
r(A.h1,A.hM)
r(A.ow,A.lQ)
r(A.zB,A.rK)
r(A.ox,A.zB)
r(A.kG,A.pI)
r(A.ji,A.wk)
r(A.o_,A.kG)
r(A.li,A.o_)
r(A.o0,A.uo)
r(A.qK,A.o0)
r(A.mP,A.ef)
r(A.l_,A.kS)
r(A.dt,A.jp)
q(A.kT,[A.uJ,A.wb])
r(A.jq,A.pr)
r(A.nc,A.jq)
r(A.ig,A.a3)
q(A.cE,[A.l5,A.lc,A.jw,A.fu])
q(A.mO,[A.lC,A.lD,A.lF,A.lB,A.lO,A.lI,A.lE,A.lM,A.lG,A.lv,A.n9,A.mu,A.l0,A.lR,A.l3,A.lP,A.mS,A.mk,A.mK,A.lf,A.le,A.lr,A.lU,A.kH,A.ly,A.mY,A.nj,A.nk,A.nm,A.no,A.nn,A.nl,A.nD,A.nE,A.nC,A.kJ,A.nB,A.nz,A.mG,A.l6,A.mT,A.lb,A.la,A.mQ,A.kE,A.kF,A.ld])
q(A.am,[A.lN,A.lL,A.fw,A.lJ,A.fv,A.ft,A.h7,A.fL,A.ie,A.lS,A.fY,A.fZ,A.fH,A.fT,A.fn,A.fo,A.fB,A.fb,A.fs,A.h0,A.fl,A.fk,A.hd,A.hl,A.fQ,A.fi])
q(A.uL,[A.iU,A.iX,A.iV,A.iY,A.iR,A.iS,A.iQ,A.iW,A.iT])
q(A.yI,[A.aY,A.cA,A.dS,A.mC,A.ih,A.du,A.d1,A.l8,A.ls,A.c3,A.iB,A.uI,A.dL,A.ea,A.c9,A.kP,A.cQ,A.i7,A.fM,A.j6,A.jl,A.uX,A.fx,A.mf,A.dx,A.cu,A.iv,A.dO])
q(A.cL,[A.iK,A.j4,A.i8,A.i9])
r(A.pe,A.ri)
q(A.dH,[A.eJ,A.eI,A.ey,A.ff,A.fO,A.fy,A.cO,A.fW,A.h_,A.eD,A.h5,A.fG,A.fj,A.ek,A.fV])
q(A.eD,[A.hh,A.fA])
r(A.m6,A.og)
q(A.d6,[A.a9,A.c4,A.ds,A.cZ])
r(A.fh,A.nX)
q(A.fg,[A.mL,A.mt])
r(A.xr,A.pt)
r(A.vo,A.mx)
r(A.xN,A.zt)
q(A.bv,[A.he,A.eE,A.jj,A.c0,A.cG,A.cK,A.fN,A.fP,A.fp,A.eb])
r(A.uc,A.qM)
r(A.mc,A.eK)
q(A.hn,[A.jA,A.eL])
r(A.oM,A.nI)
r(A.oN,A.oM)
r(A.xA,A.oN)
r(A.te,A.wH)
q(A.te,[A.vq,A.xd,A.xx])
r(A.lH,A.n4)
q(A.h4,[A.hy,A.n6])
r(A.h3,A.n7)
r(A.db,A.n6)
r(A.h6,A.eh)
r(A.kX,A.b4)
q(A.kX,[A.lV,A.dB,A.h2])
q(A.kW,[A.ob,A.oA])
r(A.or,A.qt)
r(A.os,A.or)
r(A.mR,A.os)
r(A.ov,A.ou)
r(A.c6,A.ov)
q(A.b2,[A.eM,A.b6])
r(A.hj,A.wr)
q(A.b6,[A.jR,A.jL,A.hu,A.hP])
r(A.vx,A.wc)
r(A.qu,A.lg)
r(A.dr,A.fX)
r(A.hq,A.vx)
q(A.ki,[A.o2,A.oy])
r(A.ne,A.h3)
r(A.od,A.hf)
r(A.cv,A.od)
s(A.hg,A.ns)
s(A.kj,A.K)
s(A.jY,A.K)
s(A.jZ,A.iw)
s(A.k_,A.K)
s(A.k0,A.iw)
s(A.cW,A.jE)
s(A.hL,A.oF)
s(A.ke,A.oJ)
s(A.oS,A.nd)
s(A.o_,A.qv)
s(A.o0,A.qL)
s(A.og,A.pG)
s(A.nX,A.pH)
s(A.oM,A.nH)
s(A.oN,A.nK)
s(A.or,A.K)
s(A.os,A.mq)
s(A.ou,A.nt)
s(A.ov,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ab:"double",aV:"num",l:"String",Q:"bool",W:"Null",p:"List",j:"Object",I:"Map",L:"JSObject"},mangledNames:{},types:["~()","~(L)","W()","A<~>(bH)","A<~>()","A<W>(bH)","l(l)","A<j?>(nJ,hm)","~(i)","fL(~)","Q(l)","i()","W(j,aF)","R<l,@>(@,@)","~(j,aF)","~(p<i>)","~(j?)","W(j)","Q(j?)","Q(@)","A<W>()","A<b3>()","~(~())","i(bn,i)","W(L)","j?(j?)","~(@)","A<~>(jT)","Q(j?,j?)","i(j?)","~(l,l)","@(@)","0&()","W(@)","~(@,@)","L()","~(a1)","A<~>(~)","~(j?,j?)","Q(bq)","i(bn)","~(d9,i,i,i)","j?(I<l,j?>)","l(ev)","ab(i)","Q(bh)","i(@,@)","i(cH)","A<W>(qN)","A<@>()","@()","l(I<l,j?>)","Q(aX)","~(l,@)","A<i>()","A<p<l>>()","i(b4,i,i,i)","i(b4,i)","@(l)","i(bn,i,i,br)","~(j[aF?])","~(dc)","~(d9,i)","Q(c8)","R<l,j?>(@,@)","Q()","Q(dA)","A<bl<~>>()","~(~)","A<eK>()","A<cH>(l)","h7(Q)","i(l)","A<aV?>()","A<l>()","fQ(i)","fi(i)","fl(p<bf>)","fk(bf?)","fw(p<bh>)","fv(i)","ft(i)","W(l,l[j?])","fH(p<l>)","A<cn>()","fT(cn)","A<p<cN>>()","h0(p<cN>)","~(dK<p<i>>)","hd(~)","Q(hG)","~(I<l,j?>?)","~(p<I<l,j?>>)","~(i,@)","aa<p<i>>()","~(p<bf>)","i(i,cF)","Q(cF)","l(cF)","eP<@,@>(bD<@>)","i(c8,c8)","~(l,j?)","l(cl)","l()","Q(cl)","aX()","dA()","fz()","eo()","c8()","fD()","l(@)","A<I<l,j?>?>(l)","Q(i)","l(i,i)","i(i,i)","p<I<l,j?>>(cn)","Q(cA)","Q(dS)","~(p<cj>)","A<aa<p<i>>>()","l?(I<l,j?>)","bh()","A<bh>(bH)","i(i)","~(j8)","R<l,dy>(l,h8)","cM(@)","p<eB>(j?)","Q(aY)","A<dQ>(l)","i(dQ)","aC(i)","A<W>(~)","bf()","~(cB)","A<bm>(bm)","bm(bm)","bm(j)","p<cL>(j?)","dJ/(j?)","A<j?>(j?)","I<l,j?>(p<j?>)","A<i>(bH)","Q(+(l,j))","i(+(l,j),+(l,j))","l(i[i])","cP()","cm()","ez()","u<@>?()","A<Q>(l)","A<~>(l)","ht()","c1<j?>(@)","Q(c1<j?>)","~(@,aF)","i(+(l,j?),+(l,j?))","~(cE)","~(hb)","l(l?)","l?()","bf(I<l,j?>)","I<l,j?>(c6)","j(cw)","j(bq)","i(bq,bq)","p<cw>(R<j,p<bq>>)","db()","l(j?)","~(i,l,i)","~(C_,p<C0>)","0&(l,i?)","~(N,au,N,~())","~(br,i)","bn?(b4,i,i,i,i)","i(b4,i,i)","j?(ws)","i(b4?,i,i)","~(l,l?)","l(l,l)","W(bR,bR)","i(bn,br)","j?(~)","i(bn,i,i)","i(i())","~(~(i,l,i),i,i,i,br)","W(~())","A<@>(bH)","i(d9,i,i,i,i)","i(i(i),i)","i(C4,i)","i(C4,i,i)","@(@,l)","~(aT)","L(B<j?>)","W(@,aF)","A<I<l,j?>?>()","L(L?)","~(ec)","A<~>(i,cS)","A<~>(i)","cS()","A<L>(l)","W(d_)","A<W>(L)","L(j)","W(j?,aF)","l?(j?)","~(eh)","L(L)","A<L>()","fY(I<l,j?>?)","A<p<I<l,j?>?>>()","A<bl<cr>>()","~(cr)","Q(hs)","fZ(p<I<l,j?>?>)","A<ei>()","0&(j?,aF)","~(dK<L>)","Q(l,l)","~(N?,au?,N,j,aF)","0^(N?,au?,N,0^())<j?>","0^(N?,au?,N,0^(1^),1^)<j?,j?>","0^(N?,au?,N,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(N,au,N,0^())<j?>","0^(1^)(N,au,N,0^(1^))<j?,j?>","0^(1^,2^)(N,au,N,0^(1^,2^))<j?,j?,j?>","al?(N,au,N,j,aF?)","~(N?,au?,N,~())","dc(N,au,N,aC,~())","dc(N,au,N,aC,~(dc))","~(N,au,N,l)","N(N?,au?,N,jB?,I<j?,j?>?)","0^(0^,0^)<aV>","fn(i)","fo(p<j?>)","fB(p<l>)","fb(aV?)","fs(l)","aR()","bh(I<l,j?>)","A<p<j?>>()","i(cw)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a4&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.k1&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.k2&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hF&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.op&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eW&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eX&&A.G1(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.oq&&A.G1(a,b.a)}}
A.JT(v.typeUniverse,JSON.parse('{"bR":"dE","mB":"dE","dT":"dE","N5":"fJ","B":{"p":["1"],"aE":[],"J":["1"],"L":[],"o":["1"],"b8":["1"]},"m0":{"Q":[],"ai":[]},"iG":{"W":[],"ai":[]},"aE":{"L":[]},"dE":{"aE":[],"L":[]},"m_":{"jf":[]},"tg":{"B":["1"],"p":["1"],"aE":[],"J":["1"],"L":[],"o":["1"],"b8":["1"]},"eq":{"ab":[],"aV":[],"av":["aV"]},"iF":{"ab":[],"i":[],"aV":[],"av":["aV"],"ai":[]},"m1":{"ab":[],"aV":[],"av":["aV"],"ai":[]},"dC":{"l":[],"av":["l"],"b8":["@"],"ai":[]},"dW":{"o":["2"]},"ed":{"dW":["1","2"],"o":["2"],"o.E":"2"},"jM":{"ed":["1","2"],"dW":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"jJ":{"K":["2"],"p":["2"],"dW":["1","2"],"J":["2"],"o":["2"]},"bP":{"jJ":["1","2"],"K":["2"],"p":["2"],"dW":["1","2"],"J":["2"],"o":["2"],"K.E":"2","o.E":"2"},"ee":{"U":["3","4"],"I":["3","4"],"U.V":"4","U.K":"3"},"dD":{"ae":[]},"mM":{"ae":[]},"ci":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"J":{"o":["1"]},"Z":{"J":["1"],"o":["1"]},"cs":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"ck":{"o":["2"],"o.E":"2"},"el":{"ck":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"X":{"Z":["2"],"J":["2"],"o":["2"],"Z.E":"2","o.E":"2"},"ak":{"o":["1"],"o.E":"1"},"it":{"o":["2"],"o.E":"2"},"eH":{"o":["1"],"o.E":"1"},"iq":{"eH":["1"],"J":["1"],"o":["1"],"o.E":"1"},"da":{"o":["1"],"o.E":"1"},"fq":{"da":["1"],"J":["1"],"o":["1"],"o.E":"1"},"em":{"J":["1"],"o":["1"],"o.E":"1"},"bI":{"o":["1"],"o.E":"1"},"hg":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"bV":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"il":{"cT":["1","2"],"I":["1","2"]},"fm":{"I":["1","2"]},"aW":{"fm":["1","2"],"I":["1","2"]},"eT":{"o":["1"],"o.E":"1"},"iy":{"fm":["1","2"],"I":["1","2"]},"im":{"cp":["1"],"eF":["1"],"J":["1"],"o":["1"]},"dv":{"cp":["1"],"eF":["1"],"J":["1"],"o":["1"]},"j5":{"dd":[],"ae":[]},"m2":{"ae":[]},"nr":{"ae":[]},"ms":{"G":[]},"k4":{"aF":[]},"mV":{"ae":[]},"bE":{"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"T":{"J":["1"],"o":["1"],"o.E":"1"},"aq":{"J":["1"],"o":["1"],"o.E":"1"},"aM":{"J":["R<1,2>"],"o":["R<1,2>"],"o.E":"R<1,2>"},"iI":{"bE":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"iH":{"bE":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"hD":{"mN":[],"ev":[]},"nN":{"o":["mN"],"o.E":"mN"},"h9":{"ev":[]},"oC":{"o":["ev"],"o.E":"ev"},"fI":{"aE":[],"L":[],"ec":[],"ai":[]},"fJ":{"aE":[],"L":[],"ec":[],"ai":[]},"j0":{"aE":[],"L":[]},"oK":{"ec":[]},"j_":{"aE":[],"Bw":[],"L":[],"ai":[]},"fK":{"bS":["1"],"aE":[],"L":[],"b8":["1"]},"dM":{"K":["ab"],"p":["ab"],"bS":["ab"],"aE":[],"J":["ab"],"L":[],"b8":["ab"],"o":["ab"]},"bT":{"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"L":[],"b8":["i"],"o":["i"]},"ml":{"dM":[],"rw":[],"K":["ab"],"p":["ab"],"bS":["ab"],"aE":[],"J":["ab"],"L":[],"b8":["ab"],"o":["ab"],"ai":[],"K.E":"ab"},"mm":{"dM":[],"rx":[],"K":["ab"],"p":["ab"],"bS":["ab"],"aE":[],"J":["ab"],"L":[],"b8":["ab"],"o":["ab"],"ai":[],"K.E":"ab"},"mn":{"bT":[],"tb":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"L":[],"b8":["i"],"o":["i"],"ai":[],"K.E":"i"},"mo":{"bT":[],"tc":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"L":[],"b8":["i"],"o":["i"],"ai":[],"K.E":"i"},"mp":{"bT":[],"td":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"L":[],"b8":["i"],"o":["i"],"ai":[],"K.E":"i"},"j1":{"bT":[],"x8":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"L":[],"b8":["i"],"o":["i"],"ai":[],"K.E":"i"},"j2":{"bT":[],"x9":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"L":[],"b8":["i"],"o":["i"],"ai":[],"K.E":"i"},"j3":{"bT":[],"xa":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"L":[],"b8":["i"],"o":["i"],"ai":[],"K.E":"i"},"ew":{"bT":[],"cS":[],"K":["i"],"p":["i"],"bS":["i"],"aE":[],"J":["i"],"L":[],"b8":["i"],"o":["i"],"ai":[],"K.E":"i"},"o5":{"ae":[]},"k9":{"dd":[],"ae":[]},"al":{"ae":[]},"u":{"A":["1"]},"dK":{"bD":["1"]},"k8":{"dc":[]},"jC":{"ij":["1"]},"hK":{"o":["1"],"o.E":"1"},"b0":{"b5":["1"],"hJ":["1"],"aa":["1"],"aa.T":"1"},"eN":{"dX":["1"],"b1":["1"],"bl":["1"],"b1.T":"1"},"jI":{"bD":["1"]},"jD":{"jI":["1"],"bD":["1"]},"nh":{"G":[]},"j7":{"ae":[]},"eO":{"ij":["1"]},"aI":{"eO":["1"],"ij":["1"]},"an":{"eO":["1"],"ij":["1"]},"jp":{"aa":["1"]},"e1":{"bD":["1"]},"cW":{"jE":["1"],"e1":["1"],"bD":["1"]},"hL":{"e1":["1"],"bD":["1"]},"b5":{"hJ":["1"],"aa":["1"],"aa.T":"1"},"dX":{"b1":["1"],"bl":["1"],"b1.T":"1"},"k5":{"nM":["1"]},"b1":{"bl":["1"],"b1.T":"1"},"hJ":{"aa":["1"]},"hw":{"bl":["1"]},"jN":{"aa":["1"],"aa.T":"1"},"dj":{"aa":["1"],"aa.T":"1"},"jX":{"cW":["1"],"jE":["1"],"e1":["1"],"dK":["1"],"bD":["1"]},"jQ":{"aa":["2"]},"hz":{"b1":["2"],"bl":["2"],"b1.T":"2"},"eU":{"jQ":["1","2"],"aa":["2"],"aa.T":"2"},"jO":{"bD":["1"]},"hH":{"b1":["2"],"bl":["2"],"b1.T":"2"},"jH":{"aa":["2"],"aa.T":"2"},"oO":{"N":[]},"nZ":{"N":[]},"ot":{"N":[]},"hQ":{"au":[]},"dh":{"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"dY":{"dh":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"jK":{"dh":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"eS":{"J":["1"],"o":["1"],"o.E":"1"},"jV":{"bE":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"di":{"cp":["1"],"eF":["1"],"J":["1"],"o":["1"]},"es":{"o":["1"],"o.E":"1"},"K":{"p":["1"],"J":["1"],"o":["1"]},"U":{"I":["1","2"]},"jW":{"J":["2"],"o":["2"],"o.E":"2"},"iP":{"I":["1","2"]},"cT":{"I":["1","2"]},"iL":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"cp":{"eF":["1"],"J":["1"],"o":["1"]},"k3":{"cp":["1"],"eF":["1"],"J":["1"],"o":["1"]},"eP":{"bD":["1"]},"oe":{"U":["l","@"],"I":["l","@"],"U.V":"@","U.K":"l"},"of":{"Z":["l"],"J":["l"],"o":["l"],"Z.E":"l","o.E":"l"},"kL":{"en":[]},"oI":{"aB":["l","p<i>"]},"kM":{"aB":["l","p<i>"],"aB.T":"p<i>"},"ic":{"aB":["p<i>","l"],"aB.T":"l"},"kR":{"aB":["l","p<i>"],"aB.T":"p<i>"},"iJ":{"ae":[]},"m3":{"ae":[]},"m5":{"aB":["j?","l"],"aB.T":"l"},"m4":{"aB":["l","j?"],"aB.T":"j?"},"m8":{"en":[]},"m9":{"aB":["l","p<i>"],"aB.T":"p<i>"},"nx":{"en":[]},"ny":{"aB":["l","p<i>"],"aB.T":"p<i>"},"ju":{"aB":["p<i>","l"],"aB.T":"l"},"D8":{"av":["D8"]},"aR":{"av":["aR"]},"ab":{"aV":[],"av":["aV"]},"aC":{"av":["aC"]},"i":{"aV":[],"av":["aV"]},"p":{"J":["1"],"o":["1"]},"aV":{"av":["aV"]},"mN":{"ev":[]},"eF":{"J":["1"],"o":["1"]},"l":{"av":["l"]},"aJ":{"av":["D8"]},"kN":{"ae":[]},"dd":{"ae":[]},"bC":{"ae":[]},"d8":{"ae":[]},"iA":{"d8":[],"ae":[]},"cU":{"ae":[]},"nq":{"cU":[],"ae":[]},"bk":{"ae":[]},"l7":{"ae":[]},"mv":{"ae":[]},"jm":{"ae":[]},"o6":{"G":[]},"bi":{"G":[]},"lY":{"cU":[],"G":[],"ae":[]},"oD":{"aF":[]},"je":{"o":["i"],"o.E":"i"},"kf":{"nu":[]},"cc":{"nu":[]},"o1":{"nu":[]},"mr":{"G":[]},"td":{"p":["i"],"J":["i"],"o":["i"]},"cS":{"p":["i"],"J":["i"],"o":["i"]},"xa":{"p":["i"],"J":["i"],"o":["i"]},"tb":{"p":["i"],"J":["i"],"o":["i"]},"x8":{"p":["i"],"J":["i"],"o":["i"]},"tc":{"p":["i"],"J":["i"],"o":["i"]},"x9":{"p":["i"],"J":["i"],"o":["i"]},"rw":{"p":["ab"],"J":["ab"],"o":["ab"]},"rx":{"p":["ab"],"J":["ab"],"o":["ab"]},"a3":{"I":["2","3"]},"h1":{"hM":["1","eF<1>"],"hM.E":"1"},"lQ":{"aB":["p<i>","cj"]},"ow":{"aB":["p<i>","cj"],"aB.T":"cj"},"jh":{"G":[]},"mZ":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"mP":{"G":[]},"kS":{"Bx":[]},"l_":{"Bx":[]},"dt":{"aa":["p<i>"],"aa.T":"p<i>"},"ef":{"G":[]},"nc":{"jq":[]},"ig":{"a3":["l","l","1"],"I":["l","1"],"a3.V":"1","a3.K":"l","a3.C":"l"},"lN":{"am":[]},"lL":{"am":[]},"fw":{"am":[]},"lJ":{"am":[]},"fv":{"am":[]},"ft":{"am":[]},"h7":{"am":[]},"fL":{"am":[]},"ie":{"am":[]},"lS":{"am":[]},"fY":{"am":[]},"fZ":{"am":[]},"fH":{"am":[]},"fT":{"am":[]},"fn":{"am":[]},"fo":{"am":[]},"fB":{"am":[]},"fb":{"am":[]},"fs":{"am":[]},"h0":{"am":[]},"fl":{"am":[]},"fk":{"am":[]},"hd":{"am":[]},"hl":{"am":[]},"fQ":{"am":[]},"fi":{"am":[]},"l5":{"cE":[]},"lc":{"cE":[]},"jw":{"cE":[]},"fu":{"cE":[]},"iK":{"cL":[]},"j4":{"cL":[]},"i8":{"cL":[]},"i9":{"cL":[]},"jz":{"G":[]},"ip":{"qN":[]},"dH":{"G":[]},"eJ":{"G":[]},"eI":{"G":[]},"ey":{"G":[]},"ff":{"G":[]},"fO":{"G":[]},"fy":{"G":[]},"cO":{"G":[]},"fW":{"G":[]},"h_":{"G":[]},"eD":{"G":[]},"hh":{"G":[]},"fA":{"G":[]},"h5":{"G":[]},"fG":{"G":[]},"fj":{"G":[]},"ek":{"G":[]},"fV":{"G":[]},"eY":{"G":[]},"a9":{"d6":[]},"c4":{"d6":[]},"ds":{"d6":[]},"cZ":{"d6":[]},"ho":{"G":[]},"fd":{"G":[]},"kY":{"G":[]},"ol":{"DP":[]},"dz":{"G":[]},"d3":{"G":[]},"bv":{"G":[]},"he":{"G":[]},"eE":{"G":[]},"jj":{"G":[]},"c0":{"G":[]},"cG":{"G":[]},"cK":{"G":[]},"fN":{"G":[]},"fP":{"G":[]},"fp":{"G":[]},"eb":{"G":[]},"ht":{"nJ":[]},"mc":{"eK":[]},"ja":{"G":[]},"jA":{"hn":[]},"eL":{"hn":[]},"mz":{"G":[]},"lH":{"cq":[],"av":["cq"]},"hy":{"db":[],"av":["n5"]},"cq":{"av":["cq"]},"n4":{"cq":[],"av":["cq"]},"n5":{"av":["n5"]},"n6":{"av":["n5"]},"n7":{"G":[]},"h3":{"bi":[],"G":[]},"h4":{"av":["n5"]},"db":{"av":["n5"]},"c7":{"G":[]},"ws":{"p":["j?"],"J":["j?"],"o":["j?"]},"nA":{"K":["j?"],"ws":[],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"h6":{"eh":[]},"lV":{"b4":[]},"ob":{"jv":[],"bn":[]},"c6":{"U":["l","@"],"I":["l","@"],"U.V":"@","U.K":"l"},"mR":{"K":["c6"],"p":["c6"],"J":["c6"],"o":["c6"],"K.E":"c6"},"df":{"G":[]},"kX":{"b4":[]},"kW":{"jv":[],"bn":[]},"eM":{"b2":["eM"],"b2.E":"eM"},"dg":{"C0":[]},"dU":{"C_":[]},"hk":{"K":["dg"],"p":["dg"],"J":["dg"],"o":["dg"],"K.E":"dg"},"ib":{"aa":["1"],"aa.T":"1"},"dB":{"b4":[]},"b6":{"b2":["b6"]},"oc":{"jv":[],"bn":[]},"jR":{"b6":[],"b2":["b6"],"b2.E":"b6"},"jL":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hu":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hP":{"b6":[],"b2":["b6"],"b2.E":"b6"},"h2":{"b4":[]},"oA":{"jv":[],"bn":[]},"ii":{"G":[]},"ej":{"K":["j?"],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"fX":{"G":[]},"dr":{"G":[]},"hq":{"Dg":[]},"o2":{"ki":["L"]},"oy":{"ki":["L"]},"ne":{"bi":[],"G":[]},"cv":{"hf":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"hf":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"od":{"hf":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"]},"hx":{"aa":["1"],"aa.T":"1"},"jP":{"bl":["1"]}}'))
A.JS(v.typeUniverse,JSON.parse('{"iw":1,"ns":1,"hg":1,"kj":2,"im":1,"fK":1,"bD":1,"jp":1,"oF":1,"o4":1,"oJ":2,"iP":2,"k3":1,"ke":2,"l2":1,"l4":2,"k7":1,"mq":1,"nt":2,"mO":1,"fg":1,"H9":1,"IR":1,"IZ":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ad
return{fM:s("@<@>"),ie:s("H9<j?>"),bG:s("ea"),om:s("ib<B<j?>>"),hw:s("cB"),lo:s("ec"),fW:s("Bw"),jA:s("ie"),fo:s("ig<l>"),iv:s("a1"),eg:s("Dg"),dF:s("Bx()"),E:s("ci"),bU:s("c1<j?>"),fw:s("eh"),bP:s("av<@>"),p6:s("ei"),br:s("ij<L>"),n8:s("bf"),M:s("dv<l>"),lp:s("lm"),O:s("J<@>"),C:s("ae"),fq:s("cE"),mA:s("G"),eZ:s("lz"),d9:s("aX"),A:s("bh"),k4:s("iu"),f6:s("cF"),pk:s("rw"),kI:s("rx"),Y:s("bi"),gY:s("N1"),nW:s("A<L>"),fr:s("A<dJ>"),mj:s("A<W>"),g7:s("A<@>"),fP:s("A<d_?>"),n1:s("A<j?>(nJ,hm)"),jN:s("A<hj?>"),co:s("dy"),w:s("cH"),cF:s("dB"),m6:s("tb"),bW:s("tc"),jx:s("td"),nZ:s("iE<@>"),e7:s("o<@>"),gi:s("B<a1>"),aw:s("B<c1<@>>"),oS:s("B<l9>"),i5:s("B<cj>"),mK:s("B<aX>"),kB:s("B<lK>"),iw:s("B<A<~>>"),mr:s("B<dA>"),kG:s("B<L>"),bi:s("B<p<I<l,j?>>>"),h2:s("B<p<j>>"),ae:s("B<p<eB>>"),dO:s("B<p<j?>>"),ic:s("B<I<l,j>>"),d:s("B<I<l,j?>>"),e8:s("B<mj>"),i7:s("B<ex>"),hf:s("B<j>"),ox:s("B<ez>"),fi:s("B<cl>"),my:s("B<cm>"),k:s("B<d6>"),eK:s("B<cL>"),k1:s("B<fR>"),g2:s("B<jc>"),bo:s("B<jd>"),cM:s("B<eB>"),gc:s("B<mJ>"),eb:s("B<aT>"),fU:s("B<+controller,sync(dK<cr>,Q)>"),lw:s("B<+controller,sync(dK<~>,Q)>"),kC:s("B<+(dO,l)>"),jO:s("B<+(l,I<l,j?>)>"),l5:s("B<+(l,j)>"),fj:s("B<+(l,aX?)>"),iE:s("B<+(l,j?)>"),aY:s("B<+(hr,j?,j?,aF?)>"),g1:s("B<cM>"),cP:s("B<mX>"),kj:s("B<cN>"),lE:s("B<h6>"),c0:s("B<c8>"),dw:s("B<bl<@>>"),s:s("B<l>"),en:s("B<ha>"),bs:s("B<cS>"),fC:s("B<b_>"),az:s("B<hq>"),i4:s("B<hr>"),fV:s("B<hs>"),pg:s("B<bq>"),dg:s("B<cw>"),p8:s("B<ok>"),mc:s("B<hG>"),gy:s("B<hI>"),gk:s("B<ab>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<al?>"),eU:s("B<I<l,j?>?>"),c:s("B<j?>"),mf:s("B<l?>"),iy:s("b8<@>"),T:s("iG"),m:s("L"),bJ:s("br"),g:s("bR"),dX:s("bS<@>"),aq:s("aE"),fZ:s("m6"),kk:s("es<eM>"),p3:s("es<b6>"),hI:s("et<@>"),ba:s("p<bf>"),ck:s("p<bh>"),ip:s("p<L>"),ew:s("p<I<l,j>>"),J:s("p<I<l,j?>>"),eT:s("p<ex>"),hg:s("p<ez>"),a6:s("p<cm>"),jX:s("p<jc>"),kR:s("p<cM>"),fE:s("p<cN>"),i:s("p<l>"),bR:s("p<ha>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<I<l,j?>?>"),kS:s("p<j?>"),jD:s("iM"),ia:s("R<l,dy>"),af:s("R<l,l>"),I:s("R<l,@>"),eB:s("R<l,j?>"),a3:s("iO<@,@>"),cy:s("I<l,cP>"),dV:s("I<l,i>"),f:s("I<@,@>"),G:s("I<l,j?>"),d2:s("I<j?,j?>"),iZ:s("X<l,@>"),r:s("dJ"),a:s("fI"),dQ:s("dM"),aj:s("bT"),Z:s("ew"),P:s("W"),K:s("j"),k5:s("cl"),dZ:s("cm"),i0:s("cn"),jS:s("d6"),ot:s("mH"),gq:s("fR"),e:s("b3"),b0:s("d8"),lZ:s("N7"),oZ:s("aT"),aK:s("+()"),ja:s("+(L,ik)"),hP:s("+(I<l,cP>,I<l,I<l,j?>>)"),cU:s("+(dO,l)"),mk:s("+(Q,L)"),kO:s("+basicSupport,supportsReadWriteUnsafe(Q,Q)"),mt:s("+(L?,L)"),po:s("+(j?,i)"),g0:s("+(I<l,j?>?,cP?,cm?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mN"),Q:s("cM"),V:s("am"),hF:s("bV<l>"),cu:s("h1<@>"),aJ:s("eF<l>"),g_:s("h2"),hq:s("cq"),ol:s("db"),gE:s("n8"),l:s("aF"),ls:s("IR<j?>"),nv:s("na"),h3:s("h8"),ha:s("bl<cr>"),dz:s("bl<@>"),ey:s("bl<~>"),bv:s("nb"),ku:s("aa<p<i>>"),lI:s("dQ"),hL:s("jq"),N:s("l"),f_:s("ha"),k6:s("jr"),n6:s("c9"),mv:s("bm"),nw:s("cP"),em:s("hb"),hU:s("dc"),q:s("ni"),dH:s("ai"),do:s("dd"),nL:s("IZ<j?>"),hM:s("x8"),mC:s("x9"),oR:s("cv"),nn:s("xa"),p:s("cS"),cx:s("dT"),ph:s("cT<l,l>"),eo:s("cU"),jJ:s("nu"),e6:s("b4"),j2:s("jv"),n:s("hj"),fA:s("b_"),gx:s("ak<cA>"),mz:s("ak<aY>"),mE:s("ak<dS>"),v:s("bI<l>"),u:s("eK"),bp:s("eL"),be:s("nJ"),ec:s("hn"),iq:s("aI<cS>"),jk:s("aI<@>"),ho:s("aI<i>"),h:s("aI<~>"),oW:s("eP<@,@>"),R:s("eQ<L>"),d4:s("hx<L>"),mS:s("o7"),nI:s("u<d_>"),a7:s("u<L>"),hl:s("u<0&>"),os:s("u<l>"),jz:s("u<cS>"),g5:s("u<Q>"),_:s("u<@>"),hy:s("u<i>"),jQ:s("u<i?>"),D:s("u<~>"),nf:s("bq"),mp:s("dY<j?,j?>"),mB:s("hC"),k8:s("dj<L>"),fb:s("dj<p<i>>"),mI:s("oz<cj>"),jy:s("e2<cr,~()>"),ag:s("e2<~,Q()>"),lU:s("e2<~,~()>"),hT:s("cx<L>"),lj:s("cx<p<i>>"),aP:s("an<d_>"),h1:s("an<L>"),ex:s("an<Q>"),F:s("an<~>"),g8:s("oG"),y:s("Q"),W:s("ab"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aF)"),S:s("i"),ma:s("bf?"),gK:s("A<W>?"),b3:s("d_?"),B:s("L?"),bE:s("p<c1<@>>?"),lH:s("p<@>?"),b:s("I<l,j?>?"),nh:s("dJ?"),X:s("j?"),ad:s("DP?"),dY:s("cm?"),lY:s("jb?"),jB:s("cM?"),x:s("l?"),f8:s("cP?"),a_:s("cv?"),he:s("hj?"),dd:s("bq?"),o9:s("Q?"),dA:s("ab?"),U:s("i?"),jh:s("aV?"),o:s("aV"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aF)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.c8=J.lZ.prototype
B.b=J.B.prototype
B.c=J.iF.prototype
B.x=J.eq.prototype
B.a=J.dC.prototype
B.c9=J.bR.prototype
B.ca=J.aE.prototype
B.az=A.j_.prototype
B.cO=A.j1.prototype
B.y=A.j2.prototype
B.f=A.ew.prototype
B.b9=J.mB.prototype
B.aK=J.dT.prototype
B.ap=new A.dr("Operation was cancelled")
B.a5=new A.i7(0,"visible")
B.aN=new A.i7(1,"hidden")
B.bs=new A.kI(1)
B.dW=new A.kI(-1)
B.a6=new A.ea(0,"applied")
B.a7=new A.ea(1,"quarantined")
B.bt=new A.ea(2,"conflict")
B.a8=new A.ea(3,"skipped")
B.bu=new A.kM(127)
B.a9=new A.kP(0,"changed")
B.aO=new A.kP(1,"deleted")
B.bw=new A.ic(!1)
B.aq=new A.kQ(B.bw)
B.bx=new A.ic(!0)
B.bv=new A.kQ(B.bx)
B.bT=new A.jN(A.ad("jN<p<i>>"))
B.by=new A.dt(B.bT)
B.bz=new A.iC(A.Mt(),A.ad("iC<i>"))
B.ar=new A.kR()
B.bA=new A.l0()
B.bB=new A.l3()
B.F={}
B.Y=new A.aW(B.F,[],A.ad("aW<l,j>"))
B.e2=new A.uI(0,"conflict")
B.dX=new A.qe()
B.aP=new A.qK()
B.bC=new A.lq(A.ad("lq<0&>"))
B.t=new A.lp()
B.aQ=new A.lt(A.ad("lt<0&>"))
B.aR=new A.lu()
B.O=new A.lu()
B.bD=new A.lR()
B.bE=new A.lY()
B.aS=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bF=function() {
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
B.bK=function(getTagFallback) {
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
B.bG=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bJ=function(hooks) {
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
B.bI=function(hooks) {
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
B.bH=function(hooks) {
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

B.h=new A.ti()
B.bL=new A.uc()
B.bM=new A.iM()
B.n=new A.fL()
B.bN=new A.mv()
B.bO=new A.mG()
B.d=new A.wl()
B.bP=new A.n9()
B.l=new A.nx()
B.e=new A.ny()
B.bQ=new A.nz()
B.bR=new A.nB()
B.bS=new A.xN()
B.u=new A.yw()
B.aa=new A.yH()
B.as=new A.ze()
B.aU=new A.eY()
B.i=new A.ot()
B.m=new A.ow()
B.P=new A.oD()
B.ab=new A.du(0,"create")
B.A=new A.du(1,"update")
B.bU=new A.du(2,"archive")
B.bV=new A.du(3,"restore")
B.aV=new A.du(4,"purge")
B.bW=new A.du(5,"hide")
B.H=new A.ih(0,"local")
B.at=new A.ih(1,"remote")
B.ac=new A.ih(2,"resolution")
B.bX=new A.l8(3,"ignore")
B.Q=new A.l8(4,"replace")
B.p=new A.ls(0,"normal")
B.aW=new A.ls(1,"full")
B.D=new A.aC(0)
B.au=new A.aC(1e6)
B.aX=new A.aC(16e3)
B.dY=new A.aC(18e8)
B.bY=new A.aC(2e5)
B.aY=new A.aC(3e5)
B.ad=new A.aC(3e7)
B.av=new A.aC(3e8)
B.ae=new A.aC(5e5)
B.dZ=new A.aC(5e6)
B.e_=new A.aC(6048e8)
B.e0=new A.aC(7776e9)
B.e1=new A.aC(864e8)
B.aw=new A.c3(0,"text")
B.R=new A.c3(1,"int")
B.S=new A.c3(2,"real")
B.B=new A.c3(3,"bool")
B.T=new A.c3(4,"date")
B.I=new A.c3(5,"enumValue")
B.U=new A.c3(6,"json")
B.V=new A.c3(7,"jsonList")
B.J=new A.c3(8,"ref")
B.bZ=new A.iu(!1)
B.ax=new A.dx("x",1,"opfsExternalLocks")
B.aZ=new A.dx("y",2,"opfsExternalLocksWorkaround")
B.b_=new A.fx("/database",0,"database")
B.b0=new A.fx("/database-journal",1,"journal")
B.c4=new A.bi("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.c5=new A.bi("fieldCipher envelope must be a map.",null,null)
B.ay=new A.aW(B.F,[],A.ad("aW<l,l>"))
B.c6=new A.eo(B.ay)
B.b1=new A.iB(0,"live")
B.cb=new A.m4(null)
B.cc=new A.m5(null)
B.cd=new A.d1(0,"textExpected")
B.ce=new A.d1(1,"intExpected")
B.cf=new A.d1(2,"numberExpected")
B.cg=new A.d1(3,"boolExpected")
B.ch=new A.d1(4,"jsonExpected")
B.ci=new A.d1(5,"jsonListExpected")
B.cj=new A.d1(6,"enumValueRejected")
B.ck=new A.m9(255)
B.af=new A.et(B.bC,A.ad("et<l>"))
B.cl=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b2=s([13,10],t.t)
B.aD=new A.cu(0,"unknown")
B.aE=new A.cu(1,"integer")
B.aF=new A.cu(2,"bigInt")
B.aG=new A.cu(3,"float")
B.aH=new A.cu(4,"text")
B.aI=new A.cu(5,"blob")
B.aJ=new A.cu(6,"$null")
B.bn=new A.cu(7,"boolean")
B.b3=s([B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.aJ,B.bn],A.ad("B<cu>"))
B.cm=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.cn=s([B.a5,B.aN],A.ad("B<i7>"))
B.bc=new A.aY(0,"eq")
B.cW=new A.aY(1,"neq")
B.d_=new A.aY(2,"gt")
B.d0=new A.aY(3,"gte")
B.d1=new A.aY(4,"lt")
B.d2=new A.aY(5,"lte")
B.d3=new A.aY(6,"inValues")
B.d4=new A.aY(7,"between")
B.d5=new A.aY(8,"startsWith")
B.d6=new A.aY(9,"endsWith")
B.cX=new A.aY(10,"contains")
B.cY=new A.aY(11,"isNull")
B.cZ=new A.aY(12,"isNotNull")
B.co=s([B.bc,B.cW,B.d_,B.d0,B.d1,B.d2,B.d3,B.d4,B.d5,B.d6,B.cX,B.cY,B.cZ],A.ad("B<aY>"))
B.c2=new A.iv(0,"database")
B.c3=new A.iv(1,"journal")
B.b4=s([B.c2,B.c3],A.ad("B<iv>"))
B.z=new A.cQ(0,"clean")
B.G=new A.cQ(1,"dirty")
B.bk=new A.cQ(2,"inFlight")
B.a4=new A.cQ(3,"conflict")
B.ao=new A.cQ(4,"error")
B.dn=new A.cQ(5,"quarantine")
B.dp=new A.cQ(6,"blocked")
B.cp=s([B.z,B.G,B.bk,B.a4,B.ao,B.dn,B.dp],A.ad("B<cQ>"))
B.W=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ag=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cq=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.c7=new A.iB(1,"notArchived")
B.cr=s([B.b1,B.c7],A.ad("B<iB>"))
B.cs=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b7=new A.j6(0,"fileUpload")
B.b8=new A.j6(1,"fileRemove")
B.ct=s([B.b7,B.b8],A.ad("B<j6>"))
B.c1=new A.dx("s",0,"opfsShared")
B.c_=new A.dx("i",3,"indexedDb")
B.c0=new A.dx("m",4,"inMemory")
B.cu=s([B.c1,B.ax,B.aZ,B.c_,B.c0],A.ad("B<dx>"))
B.ah=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bo=new A.cA(0,"sum")
B.bp=new A.cA(1,"avg")
B.bq=new A.cA(2,"min")
B.br=new A.cA(3,"max")
B.cv=s([B.bo,B.bp,B.bq,B.br],A.ad("B<cA>"))
B.cw=s([B.aw,B.R,B.S,B.B,B.T,B.I,B.U,B.V,B.J],A.ad("B<c3>"))
B.j=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ai=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.X=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cx=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fM(0,"upsert")
B.L=new A.fM(1,"archive")
B.a0=new A.fM(2,"restore")
B.cy=s([B.v,B.L,B.a0],A.ad("B<fM>"))
B.cA=s([],A.ad("B<dy>"))
B.b5=s([],t.d)
B.cC=s([],t.my)
B.cz=s([],t.kj)
B.q=s([],t.s)
B.cB=s([],t.t)
B.aj=s([],t.dG)
B.k=s([],t.c)
B.cD=s(["*"],t.s)
B.cE=s([B.b_,B.b0],A.ad("B<fx>"))
B.cF=s(["id","updated"],t.s)
B.cG=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bf=new A.dO(0,"opfs")
B.bg=new A.dO(1,"indexedDb")
B.dg=new A.dO(2,"inMemory")
B.cH=s([B.bf,B.bg,B.dg],A.ad("B<dO>"))
B.bl=new A.dS(0,"normal")
B.bm=new A.dS(1,"full")
B.cI=s([B.bl,B.bm],A.ad("B<dS>"))
B.ak=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cJ=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cK=new A.iy([16,10,24,12,32,14],A.ad("iy<i,i>"))
B.cS={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.m8()
B.r=new A.kL()
B.cL=new A.aW(B.cS,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.l,B.l],A.ad("aW<l,en>"))
B.al=new A.aW(B.F,[],A.ad("aW<l,i>"))
B.o=new A.aW(B.F,[],A.ad("aW<l,j?>"))
B.am=new A.aW(B.F,[],A.ad("aW<i,I<l,j?>(I<l,j?>)>"))
B.cN=new A.mf(11,"simpleSuccessResponse",A.ad("mf<L>"))
B.Z=new A.dL(0,"createOrUpdate")
B.a_=new A.dL(1,"createOrUpdateMerge")
B.b6=new A.dL(2,"create")
B.K=new A.dL(3,"update")
B.C=new A.dL(4,"archive")
B.E=new A.dL(5,"restore")
B.e3=new A.uX(2,"readWriteCreate")
B.cT=new A.cl("id",!1)
B.cU=new A.cn(B.b5,null,null,!1,!1)
B.ba=new A.mC(0,"native")
B.aA=new A.mC(1,"web")
B.M=new A.b3(0,1,0,0,0,!1)
B.an=new A.b3(0,0,0,0,0,!0)
B.a1=new A.b3(0,0,0,0,0,!1)
B.cV=new A.b3(0,0,0,1,0,!1)
B.bb=new A.b3(0,0,1,0,0,!1)
B.a2=new A.b3(1,0,0,0,0,!1)
B.d7=new A.a4("archived",!0)
B.d8=new A.a4("0",B.k)
B.aB=new A.k1(!1,!1)
B.d9=new A.eW(0,0,0)
B.da=new A.eW(null,null,null)
B.cR={open:0,close:1,sync_start:2,sync_stop:3,sync_now:4,sync_status:5,auth_required:6,sync_pause:7,sync_resume:8,sync_update_auth:9,sync_set_connectivity:10,contract_request:11,contract_event:12}
B.db=new A.dv(B.cR,13,t.M)
B.cQ={hidden:0}
B.dc=new A.dv(B.cQ,1,t.M)
B.cP={id:0,archived:1,hidden:2,extra:3}
B.bd=new A.dv(B.cP,4,t.M)
B.be=new A.dv(B.F,0,t.M)
B.dd=new A.jl(0,"insert")
B.de=new A.jl(1,"update")
B.df=new A.jl(2,"delete")
B.dh=new A.jr(-1,null)
B.di=new A.js("_clientToken")
B.a3=new A.c9(0,"closed")
B.dj=new A.c9(1,"opening")
B.bh=new A.c9(2,"offline")
B.aC=new A.c9(3,"authRequired")
B.bi=new A.c9(4,"idle")
B.dk=new A.c9(5,"pulling")
B.dl=new A.c9(6,"pushing")
B.dm=new A.c9(7,"backoff")
B.bj=new A.c9(8,"paused")
B.N=new A.bm(B.al,B.al,0,0,0,0,!1)
B.dq=A.bM("kG")
B.dr=A.bM("ec")
B.ds=A.bM("Bw")
B.dt=A.bM("rw")
B.du=A.bM("rx")
B.dv=A.bM("tb")
B.dw=A.bM("tc")
B.dx=A.bM("td")
B.dy=A.bM("L")
B.dz=A.bM("j")
B.dA=A.bM("ji")
B.dB=A.bM("x8")
B.dC=A.bM("x9")
B.dD=A.bM("xa")
B.dE=A.bM("cS")
B.aL=new A.ju(!1)
B.dF=new A.ju(!0)
B.dG=new A.df(14)
B.dH=new A.df(522)
B.dI=new A.df(778)
B.dJ=new A.A3(B.i,A.Lv())
B.dK=new A.A4(B.i,A.Lw())
B.dL=new A.A5(B.i,A.Lx())
B.dM=new A.A6(B.i,A.Ly())
B.dN=new A.oP(B.i,A.Lz())
B.dO=new A.A7(B.i,A.LA())
B.dP=new A.A8(B.i,A.LB())
B.dQ=new A.A9(B.i,A.LC())
B.dR=new A.Aa(B.i,A.LD())
B.dS=new A.Ac(B.i,A.LF())
B.dT=new A.Ad(B.i,A.LG())
B.dU=new A.Ab(B.i,A.LE())
B.dV=new A.oQ(B.i,A.LH())
B.cM=new A.aW(B.F,[],A.ad("aW<j?,j?>"))
B.aM=new A.oR(B.i,B.cM)})();(function staticFields(){$.zg=null
$.f1=A.k([],t.hf)
$.L1=null
$.DS=null
$.vw=0
$.mE=A.KR()
$.De=null
$.Dd=null
$.FV=null
$.FD=null
$.G4=null
$.AQ=null
$.B4=null
$.CJ=null
$.zs=A.k([],A.ad("B<p<j>?>"))
$.hU=null
$.kl=null
$.km=null
$.Cy=!1
$.C=B.i
$.zw=null
$.En=null
$.Eo=null
$.Ep=null
$.Eq=null
$.Cf=A.y9("_lastQuoRemDigits")
$.Cg=A.y9("_lastQuoRemUsed")
$.jG=A.y9("_lastRemUsed")
$.Ch=A.y9("_lastRem_nsh")
$.Ec=""
$.Ed=null
$.fS=function(){var s=t.N
return A.t(s,s)}()
$.F6=null
$.An=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"MY","Gl",()=>A.AX("_$dart_dartClosure"))
s($,"MX","f8",()=>A.AX("_$dart_dartClosure_dartJSInterop"))
s($,"NB","p7",()=>A.uQ(0))
s($,"NZ","GV",()=>B.i.aW(new A.B7(),A.ad("A<~>")))
s($,"NT","GS",()=>A.k([new J.m_()],A.ad("B<jf>")))
s($,"Nf","Gp",()=>A.de(A.x6({
toString:function(){return"$receiver$"}})))
s($,"Ng","Gq",()=>A.de(A.x6({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Nh","Gr",()=>A.de(A.x6(null)))
s($,"Ni","Gs",()=>A.de(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Nl","Gv",()=>A.de(A.x6(void 0)))
s($,"Nm","Gw",()=>A.de(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Nk","Gu",()=>A.de(A.E9(null)))
s($,"Nj","Gt",()=>A.de(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"No","Gy",()=>A.de(A.E9(void 0)))
s($,"Nn","Gx",()=>A.de(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Nr","CU",()=>A.J8())
s($,"N3","e8",()=>$.GV())
s($,"N2","Gm",()=>A.Jr(!1,B.i,t.y))
s($,"NH","GI",()=>A.uQ(4096))
s($,"NF","GG",()=>new A.A_().$0())
s($,"NG","GH",()=>new A.zZ().$0())
s($,"Nt","CV",()=>A.Ii(A.b7(A.k([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Ns","Gz",()=>A.uQ(0))
s($,"NA","ch",()=>A.jF(0))
s($,"Ny","f9",()=>A.jF(1))
s($,"Nz","GC",()=>A.jF(2))
s($,"Nw","CX",()=>$.f9().bA(0))
s($,"Nu","CW",()=>A.jF(1e4))
r($,"Nx","GB",()=>A.ag("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"Nv","GA",()=>A.uQ(8))
s($,"NC","GD",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"ND","GE",()=>A.ag("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"NE","GF",()=>typeof URLSearchParams=="function")
s($,"NK","fa",()=>A.ku(B.dz))
s($,"N8","kz",()=>{A.Is()
return $.vw})
s($,"NL","GL",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"N6","Bq",()=>{var q=new A.zf(A.Ih(8))
q.oH()
return q})
s($,"MZ","ky",()=>A.He(B.cO.gaa(A.Ij(A.b7(A.k([1],t.t)))),0,null).getInt8(0)===1?B.O:B.aR)
s($,"MQ","CP",()=>A.ag("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"NN","Br",()=>A.ag("\\r\\n|\\r|\\n",!0,!1))
s($,"N4","Gn",()=>A.DX())
s($,"NI","CY",()=>A.ag("^[\\x00-\\x7F]+$",!0,!1))
s($,"NJ","GJ",()=>A.ag('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"O0","GW",()=>A.ag('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"NM","GM",()=>A.ag("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"NQ","GP",()=>A.ag('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"NP","GO",()=>A.ag("\\\\(.)",!0,!1))
s($,"NY","GU",()=>A.ag('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"O1","GX",()=>A.ag("(?:"+$.GM().a+")*",!0,!1))
s($,"NS","GR",()=>A.DY())
s($,"O_","p8",()=>A.ag("^[a-z0-9]{15}$",!0,!1))
r($,"KA","GK",()=>A.Hw().a)
s($,"N_","CR",()=>A.ag("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"MV","Gj",()=>A.BC("declaredNames",t.aJ))
s($,"MW","Gk",()=>A.BC("fieldByName",A.ad("I<l,aX>")))
s($,"Ne","kB",()=>new A.j())
s($,"MU","CQ",()=>A.ag("^[0-9a-f]{64}$",!0,!1))
s($,"NO","GN",()=>A.ag("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"NV","i6",()=>new A.qn($.CS()))
s($,"Nb","Go",()=>new A.vq(A.ag("/",!0,!1),A.ag("[^/]$",!0,!1),A.ag("^/",!0,!1)))
s($,"Nd","p6",()=>new A.xx(A.ag("[/\\\\]",!0,!1),A.ag("[^/\\\\]$",!0,!1),A.ag("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ag("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"Nc","kA",()=>new A.xd(A.ag("/",!0,!1),A.ag("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ag("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ag("^/",!0,!1)))
s($,"Na","CS",()=>A.IU())
s($,"MT","Gi",()=>$.f9().bB(0,63).bA(0))
s($,"MS","Gh",()=>{var q=$.f9()
return q.bB(0,63).fP(0,q)})
s($,"MR","p5",()=>A.DY())
s($,"Np","CT",()=>A.BC(null,t.S))
s($,"NU","GT",()=>A.I5(A.k([A.C8("files"),A.C8("blocks")],t.s)))
s($,"N0","Bp",()=>{var q,p,o=A.t(t.N,A.ad("fx"))
for(q=0;q<2;++q){p=B.cE[q]
o.j(0,p.c,p)}return o})
s($,"NR","GQ",()=>A.DX())
r($,"Nq","kC",()=>{var q="navigator"
return A.HX(A.HY(A.CH(A.G9(),q),A.C8("locks")))?A.CH(A.CH(A.G9(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fJ,ArrayBuffer:A.fI,ArrayBufferView:A.j0,DataView:A.j_,Float32Array:A.ml,Float64Array:A.mm,Int16Array:A.mn,Int32Array:A.mo,Int8Array:A.mp,Uint16Array:A.j1,Uint32Array:A.j2,Uint8ClampedArray:A.j3,CanvasPixelArray:A.j3,Uint8Array:A.ew})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fK.$nativeSuperclassTag="ArrayBufferView"
A.jY.$nativeSuperclassTag="ArrayBufferView"
A.jZ.$nativeSuperclassTag="ArrayBufferView"
A.dM.$nativeSuperclassTag="ArrayBufferView"
A.k_.$nativeSuperclassTag="ArrayBufferView"
A.k0.$nativeSuperclassTag="ArrayBufferView"
A.bT.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.Mr
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
