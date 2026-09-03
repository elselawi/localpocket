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
if(a[b]!==s){A.Ni(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.l(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.Dd(b)
return new s(c,this)}:function(){if(s===null)s=A.Dd(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.Dd(a).prototype
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
Dn(a,b,c,d){return{i:a,p:b,e:c,x:d}},
Bu(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.Dl==null){A.MP()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.EK("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.zO
if(o==null)o=$.zO=A.Bt(n)
p=q[o]}if(p!=null)return p
p=A.MX(a)
if(p!=null)return p
if(typeof a=="function")return B.cj
s=Object.getPrototypeOf(a)
if(s==null)return B.ba
if(s===Object.prototype)return B.ba
if(typeof q=="function"){o=$.zO
if(o==null)o=$.zO=A.Bt(n)
Object.defineProperty(q,o,{value:B.aL,enumerable:false,writable:true,configurable:true})
return B.aL}return B.aL},
Cg(a,b){if(a<0||a>4294967295)throw A.b(A.ax(a,0,4294967295,"length",null))
return J.Ed(new Array(a),b)},
Ch(a,b){if(a<0)throw A.b(A.Q("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
Ec(a,b){if(a<0)throw A.b(A.Q("Length must be a non-negative integer: "+a,null))
return A.l(new Array(a),b.i("z<0>"))},
Ed(a,b){var s=A.l(a,b.i("z<0>"))
s.$flags=1
return s},
It(a,b){return J.DE(a,b)},
Ee(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Iw(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.Ee(r))break;++b}return b},
Ef(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.Ee(r))break}return b},
dr(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iL.prototype
return J.m8.prototype}if(typeof a=="string")return J.dE.prototype
if(a==null)return J.iM.prototype
if(typeof a=="boolean")return J.m7.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fM.prototype
if(typeof a=="bigint")return J.bt.prototype
return a}if(a instanceof A.j)return a
return J.Bu(a)},
L(a){if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fM.prototype
if(typeof a=="bigint")return J.bt.prototype
return a}if(a instanceof A.j)return a
return J.Bu(a)},
aG(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fM.prototype
if(typeof a=="bigint")return J.bt.prototype
return a}if(a instanceof A.j)return a
return J.Bu(a)},
MH(a){if(typeof a=="number")return J.et.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
MI(a){if(typeof a=="number")return J.et.prototype
if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
Bs(a){if(typeof a=="string")return J.dE.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dU.prototype
return a},
kw(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fM.prototype
if(typeof a=="bigint")return J.bt.prototype
return a}if(a instanceof A.j)return a
return J.Bu(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dr(a).P(a,b)},
V(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Gu(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)},
cY(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Gu(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aG(a).j(a,b,c)},
aN(a,b){return J.aG(a).t(a,b)},
DB(a,b){return J.aG(a).D(a,b)},
BY(a,b){return J.Bs(a).hB(a,b)},
pu(a){return J.kw(a).ms(a)},
DC(a,b,c){return J.kw(a).hC(a,b,c)},
DD(a,b,c){return J.kw(a).mt(a,b,c)},
Hv(a){return J.kw(a).mu(a)},
bL(a,b,c){return J.kw(a).hD(a,b,c)},
pv(a,b){return J.aG(a).f_(a,b)},
Hw(a,b,c){return J.MH(a).bP(a,b,c)},
DE(a,b){return J.MI(a).a0(a,b)},
BZ(a,b){return J.L(a).F(a,b)},
pw(a,b){return J.aG(a).a9(a,b)},
kG(a,b){return J.aG(a).cE(a,b)},
Hx(a){return J.kw(a).gab(a)},
bY(a){return J.aG(a).gH(a)},
a7(a){return J.dr(a).gJ(a)},
bA(a){return J.L(a).gE(a)},
ec(a){return J.L(a).gX(a)},
E(a){return J.aG(a).gu(a)},
px(a){return J.aG(a).ga1(a)},
as(a){return J.L(a).gm(a)},
bZ(a){return J.dr(a).gaj(a)},
C_(a){return J.aG(a).gap(a)},
Hy(a,b,c){return J.aG(a).fO(a,b,c)},
Hz(a,b,c){return J.aG(a).aC(a,b,c)},
c_(a,b,c){return J.aG(a).cg(a,b,c)},
HA(a,b,c){return J.Bs(a).ei(a,b,c)},
HB(a,b){return J.L(a).sm(a,b)},
HC(a,b,c,d,e){return J.aG(a).ah(a,b,c,d,e)},
py(a,b){return J.aG(a).bi(a,b)},
DF(a,b){return J.aG(a).cm(a,b)},
HD(a,b){return J.Bs(a).cS(a,b)},
HE(a,b){return J.Bs(a).S(a,b)},
HF(a,b,c){return J.aG(a).T(a,b,c)},
C0(a,b){return J.aG(a).cN(a,b)},
HG(a){return J.aG(a).cO(a)},
a0(a){return J.dr(a).l(a)},
DG(a,b){return J.aG(a).dt(a,b)},
m5:function m5(){},
m7:function m7(){},
iM:function iM(){},
aE:function aE(){},
dG:function dG(){},
mH:function mH(){},
dU:function dU(){},
bP:function bP(){},
bt:function bt(){},
fM:function fM(){},
z:function z(a){this.$ti=a},
m6:function m6(){},
tB:function tB(a){this.$ti=a},
fn:function fn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
et:function et(){},
iL:function iL(){},
m8:function m8(){},
dE:function dE(){}},A={Ck:function Ck(){},
fp(a,b,c){if(t.O.b(a))return new A.jP(a,b.i("@<0>").W(c).i("jP<1,2>"))
return new A.ef(a,b.i("@<0>").W(c).i("ef<1,2>"))},
Eh(a){return new A.dF("Field '"+a+"' has been assigned during initialization.")},
Ei(a){return new A.dF("Field '"+a+"' has not been initialized.")},
IA(a){return new A.dF("Field '"+a+"' has already been initialized.")},
eI(a){return new A.mT(a)},
Bx(a){var s,r=a^48
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
Dm(a){var s,r
for(s=$.f9.length,r=0;r<s;++r)if(a===$.f9[r])return!0
return!1},
cu(a,b,c,d){A.bc(b,"start")
if(c!=null){A.bc(c,"end")
if(b>c)A.t(A.ax(b,0,c,"start",null))}return new A.ct(a,b,c,d.i("ct<0>"))},
dJ(a,b,c,d){if(t.O.b(a))return new A.eo(a,b,c.i("@<0>").W(d).i("eo<1,2>"))
return new A.ck(a,b,c.i("@<0>").W(d).i("ck<1,2>"))},
EF(a,b,c){var s="takeCount"
A.kN(b,s)
A.bc(b,s)
if(t.O.b(a))return new A.iv(a,b,c.i("iv<0>"))
return new A.eN(a,b,c.i("eN<0>"))},
ED(a,b,c){var s="count"
if(t.O.b(a)){A.kN(b,s)
A.bc(b,s)
return new A.fA(a,b,c.i("fA<0>"))}A.kN(b,s)
A.bc(b,s)
return new A.db(a,b,c.i("db<0>"))},
aD(){return new A.bm("No element")},
iJ(){return new A.bm("Too many elements")},
Ea(){return new A.bm("Too few elements")},
n9(a,b,c,d){if(c-b<=32)A.Ji(a,b,c,d)
else A.Jh(a,b,c,d)},
Ji(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.L(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
Jh(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.M(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.M(a4+a5,2),e=f-i,d=f+i,c=J.L(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.n9(a3,a4,r-2,a6)
A.n9(a3,q+2,a5,a6)
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
break}}A.n9(a3,r,q,a6)}else A.n9(a3,r,q,a6)},
z5:function z5(a){this.a=0
this.b=a},
yE:function yE(a){this.a=0
this.b=a},
dY:function dY(){},
l6:function l6(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b){this.a=a
this.$ti=b},
jP:function jP(a,b){this.a=a
this.$ti=b},
jM:function jM(){},
yF:function yF(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b){this.a=a
this.$ti=b},
pZ:function pZ(a,b){this.a=a
this.b=b},
pY:function pY(a){this.a=a},
dF:function dF(a){this.a=a},
mT:function mT(a){this.a=a},
ch:function ch(a){this.a=a},
BE:function BE(){},
wV:function wV(){},
K:function K(){},
Z:function Z(){},
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
eo:function eo(a,b,c){this.a=a
this.b=b
this.$ti=c},
mk:function mk(a,b,c){var _=this
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
iz:function iz(a,b,c){this.a=a
this.b=b
this.$ti=c},
lB:function lB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eN:function eN(a,b,c){this.a=a
this.b=b
this.$ti=c},
iv:function iv(a,b,c){this.a=a
this.b=b
this.$ti=c},
nA:function nA(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c){this.a=a
this.b=b
this.$ti=c},
fA:function fA(a,b,c){this.a=a
this.b=b
this.$ti=c},
n8:function n8(a,b,c){this.a=a
this.b=b
this.$ti=c},
ep:function ep(a){this.$ti=a},
ly:function ly(a){this.$ti=a},
dW:function dW(a,b){this.a=a
this.$ti=b},
o_:function o_(a,b){this.a=a
this.$ti=b},
iC:function iC(){},
nM:function nM(){},
hp:function hp(){},
bw:function bw(a,b){this.a=a
this.$ti=b},
jx:function jx(a){this.a=a},
km:function km(){},
HY(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bF(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.q)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aX(q,A.bF(new A.al(a,m.i("al<2>")),!0,c),b.i("@<0>").W(c).i("aX<1,2>"))
n.$keys=l
return n}return new A.ir(A.bl(a,b,c),b.i("@<0>").W(c).i("ir<1,2>"))},
HZ(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
I_(){throw A.b(A.Y("Cannot modify constant Set"))},
GO(a){var s=A.GN(a)
if(s!=null)return s
return"minified:"+a},
Gu(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a0(a)
return s},
eE(a){var s,r=$.Es
if(r==null)r=$.Es=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jg(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
J0(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.ck(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mK(a){var s,r,q,p
if(a instanceof A.j)return A.bW(A.bh(a),null)
s=J.dr(a)
if(s===B.ci||s===B.ck||t.cx.b(a)){r=B.aT(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bW(A.bh(a),null)},
Eu(a){var s,r,q
if(a==null||typeof a=="number"||A.by(a))return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ei)return a.l(0)
if(a instanceof A.hM)return a.mg(!0)
s=$.Hp()
for(r=0;r<1;++r){q=s[r].wW(a)
if(q!=null)return q}return"Instance of '"+A.mK(a)+"'"},
IX(){return Date.now()},
J_(){var s,r
if($.w4!==0)return
$.w4=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.w4=1e6
$.mL=new A.w3(r)},
IW(){if(!!self.location)return self.location.href
return null},
Er(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
J1(a){var s,r,q,p=A.l([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
if(!A.av(q))throw A.b(A.fb(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.af(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.fb(q))}return A.Er(p)},
Ev(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.av(q))throw A.b(A.fb(q))
if(q<0)throw A.b(A.fb(q))
if(q>65535)return A.J1(a)}return A.Er(a)},
J2(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bv(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.af(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ax(a,0,1114111,null,null))},
J3(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.ak(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.M(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bu(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Cv(a){return a.c?A.bu(a).getUTCFullYear()+0:A.bu(a).getFullYear()+0},
Ct(a){return a.c?A.bu(a).getUTCMonth()+1:A.bu(a).getMonth()+1},
w2(a){return a.c?A.bu(a).getUTCDate()+0:A.bu(a).getDate()+0},
Cr(a){return a.c?A.bu(a).getUTCHours()+0:A.bu(a).getHours()+0},
Cs(a){return a.c?A.bu(a).getUTCMinutes()+0:A.bu(a).getMinutes()+0},
Cu(a){return a.c?A.bu(a).getUTCSeconds()+0:A.bu(a).getSeconds()+0},
Et(a){return a.c?A.bu(a).getUTCMilliseconds()+0:A.bu(a).getMilliseconds()+0},
IZ(a){return B.c.ak((a.c?A.bu(a).getUTCDay()+0:A.bu(a).getDay()+0)+6,7)+1},
IY(a){var s=a.$thrownJsError
if(s==null)return null
return A.ad(s)},
mM(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aM(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
Bn(a,b){var s,r="index"
if(!A.av(b))return new A.bB(!0,b,r,null)
s=J.as(a)
if(b<0||b>=s)return A.m2(b,s,a,null,r)
return A.wI(b,r)},
Mx(a,b,c){if(a<0||a>c)return A.ax(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ax(b,a,c,"end",null)
return new A.bB(!0,b,"end",null)},
fb(a){return new A.bB(!0,a,null,null)},
b(a){return A.aM(a,new Error())},
aM(a,b){var s
if(a==null)a=new A.de()
b.dartException=a
s=A.Nj
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
Nj(){return J.a0(this.dartException)},
t(a,b){throw A.aM(a,b==null?new Error():b)},
H(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.t(A.KY(a,b,c),s)},
KY(a,b,c){var s,r,q,p,o,n,m,l,k
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
q(a){throw A.b(A.aA(a))},
df(a){var s,r,q,p,o,n
a=A.GD(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.l([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.xF(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
xG(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
EJ(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
Cl(a,b){var s=b==null,r=s?null:b.method
return new A.m9(a,r,s?null:b.receiver)},
D(a){if(a==null)return new A.mz(a)
if(a instanceof A.ix)return A.ea(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ea(a,a.dartException)
return A.LT(a)},
ea(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
LT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.af(r,16)&8191)===10)switch(q){case 438:return A.ea(a,A.Cl(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.ea(a,new A.jb())}}if(a instanceof TypeError){p=$.GX()
o=$.GY()
n=$.GZ()
m=$.H_()
l=$.H2()
k=$.H3()
j=$.H1()
$.H0()
i=$.H5()
h=$.H4()
g=p.bT(s)
if(g!=null)return A.ea(a,A.Cl(s,g))
else{g=o.bT(s)
if(g!=null){g.method="call"
return A.ea(a,A.Cl(s,g))}else if(n.bT(s)!=null||m.bT(s)!=null||l.bT(s)!=null||k.bT(s)!=null||j.bT(s)!=null||m.bT(s)!=null||i.bT(s)!=null||h.bT(s)!=null)return A.ea(a,new A.jb())}return A.ea(a,new A.nL(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.js()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ea(a,new A.bB(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.js()
return a},
ad(a){var s
if(a instanceof A.ix)return a.b
if(a==null)return new A.k7(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.k7(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kx(a){if(a==null)return J.a7(a)
if(typeof a=="object")return A.eE(a)
return J.a7(a)},
Ml(a){if(typeof a=="number")return B.x.gJ(a)
if(a instanceof A.p_)return A.eE(a)
if(a instanceof A.hM)return a.gJ(a)
if(a instanceof A.jx)return a.gJ(0)
return A.kx(a)},
Gr(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
MF(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
La(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.E0("Unsupported number of arguments for wrapped closure"))},
e9(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Mq(a,b)
a.$identity=s
return s},
Mq(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.La)},
HS(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.x5().constructor.prototype):Object.create(new A.ij(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.DU(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.HO(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.DU(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
HO(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.HJ)}throw A.b("Error in functionType of tearoff")},
HP(a,b,c,d){var s=A.DR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
DU(a,b,c,d){if(c)return A.HR(a,b,d)
return A.HP(b.length,d,a,b)},
HQ(a,b,c,d){var s=A.DR,r=A.HK
switch(b?-1:a){case 0:throw A.b(new A.n1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
HR(a,b,c){var s,r
if($.DP==null)$.DP=A.DO("interceptor")
if($.DQ==null)$.DQ=A.DO("receiver")
s=b.length
r=A.HQ(s,c,a,b)
return r},
Dd(a){return A.HS(a)},
HJ(a,b){return A.kg(v.typeUniverse,A.bh(a.a),b)},
DR(a){return a.a},
HK(a){return a.b},
DO(a){var s,r,q,p=new A.ij("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.Q("Field name "+a+" not found.",null))},
Bt(a){return v.getIsolateTag(a)},
Nm(a,b){var s=$.C
if(s===B.i)return a
return s.hG(a,b)},
GH(){return v.G},
Ot(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
MX(a){var s,r,q,p,o,n=$.Gs.$1(a),m=$.Bo[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.BB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.Gc.$2(a,n)
if(q!=null){m=$.Bo[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.BB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.BD(s)
$.Bo[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.BB[n]=s
return s}if(p==="-"){o=A.BD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.GA(a,s)
if(p==="*")throw A.b(A.EK(n))
if(v.leafTags[n]===true){o=A.BD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.GA(a,s)},
GA(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.Dn(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
BD(a){return J.Dn(a,!1,null,!!a.$ibQ)},
MZ(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.BD(s)
else return J.Dn(s,c,null,null)},
MP(){if(!0===$.Dl)return
$.Dl=!0
A.MQ()},
MQ(){var s,r,q,p,o,n,m,l
$.Bo=Object.create(null)
$.BB=Object.create(null)
A.MO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.GC.$1(o)
if(n!=null){m=A.MZ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
MO(){var s,r,q,p,o,n,m=B.bI()
m=A.i3(B.bJ,A.i3(B.bK,A.i3(B.aU,A.i3(B.aU,A.i3(B.bL,A.i3(B.bM,A.i3(B.bN(B.aT),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Gs=new A.By(p)
$.Gc=new A.Bz(o)
$.GC=new A.BA(n)},
i3(a,b){return a(b)||b},
Kf(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
Mu(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
Cj(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
Nc(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eu){s=B.a.ae(a,c)
return b.b.test(s)}else return!J.BY(b,B.a.ae(a,c)).gE(0)},
Gp(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
GD(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
B(a,b,c){var s
if(typeof b=="string")return A.Ne(a,b,c)
if(b instanceof A.eu){s=b.glO()
s.lastIndex=0
return a.replace(s,A.Gp(c))}return A.Nd(a,b,c)},
Nd(a,b,c){var s,r,q,p
for(s=J.BY(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gR())+c
r=p.gN()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
Ne(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.GD(b),"g"),A.Gp(c))},
G4(a){return a},
GI(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hB(0,a),s=new A.o6(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.G4(B.a.A(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.G4(B.a.ae(a,q)))
return s.charCodeAt(0)==0?s:s},
Nf(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.GJ(a,s,s+b.length,c)},
GJ(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a4:function a4(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
k5:function k5(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
oI:function oI(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a){this.a=a},
oJ:function oJ(a){this.a=a},
ir:function ir(a,b){this.a=a
this.$ti=b},
fx:function fx(){},
qH:function qH(a,b,c){this.a=a
this.b=b
this.c=c},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b){this.a=a
this.$ti=b},
hI:function hI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iE:function iE(a,b){this.a=a
this.$ti=b},
is:function is(){},
dy:function dy(a,b,c){this.a=a
this.b=b
this.$ti=c},
tv:function tv(){},
iI:function iI(a,b){this.a=a
this.$ti=b},
w3:function w3(a){this.a=a},
jm:function jm(){},
xF:function xF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jb:function jb(){},
m9:function m9(a,b,c){this.a=a
this.b=b
this.c=c},
nL:function nL(a){this.a=a},
mz:function mz(a){this.a=a},
ix:function ix(a,b){this.a=a
this.b=b},
k7:function k7(a){this.a=a
this.b=null},
ei:function ei(){},
q3:function q3(){},
q4:function q4(){},
xv:function xv(){},
x5:function x5(){},
ij:function ij(a,b){this.a=a
this.b=b},
n1:function n1(a){this.a=a},
bD:function bD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tC:function tC(a){this.a=a},
uF:function uF(a,b){var _=this
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
aP:function aP(a,b){this.a=a
this.$ti=b},
mh:function mh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iO:function iO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iN:function iN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
By:function By(a){this.a=a},
Bz:function Bz(a){this.a=a},
BA:function BA(a){this.a=a},
hM:function hM(){},
oF:function oF(){},
oG:function oG(){},
oH:function oH(){},
eu:function eu(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(a){this.b=a},
o5:function o5(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function o6(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hk:function hk(a,b){this.a=a
this.c=b},
oV:function oV(a,b,c){this.a=a
this.b=b
this.c=c},
Am:function Am(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
Ni(a){throw A.aM(A.Eh(a),new Error())},
u(){throw A.aM(A.Ei(""),new Error())},
ce(){throw A.aM(A.IA(""),new Error())},
BS(){throw A.aM(A.Eh(""),new Error())},
CT(){var s=new A.oe("")
return s.b=s},
yG(a){var s=new A.oe(a)
return s.b=s},
oe:function oe(a){this.a=a
this.b=null},
hZ(a,b,c){},
b8(a){var s,r,q
if(t.iy.b(a))return a
s=J.L(a)
r=A.ab(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
IP(a){return new DataView(new ArrayBuffer(a))},
Em(a,b,c){A.hZ(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d5(a,b,c){A.hZ(a,b,c)
c=B.c.M(a.byteLength-b,4)
return new Int32Array(a,b,c)},
IQ(a){return new Int8Array(a)},
IR(a){return new Uint16Array(a)},
En(a,b,c){A.hZ(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
vm(a){return new Uint8Array(a)},
bS(a,b,c){A.hZ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dm(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.Bn(b,a))},
dn(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Mx(a,b,c))
if(b==null)return c
return b},
fU:function fU(){},
fT:function fT(){},
j6:function j6(){},
p2:function p2(a){this.a=a},
j5:function j5(){},
fV:function fV(){},
dN:function dN(){},
bR:function bR(){},
ms:function ms(){},
mt:function mt(){},
mu:function mu(){},
mv:function mv(){},
mw:function mw(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
ez:function ez(){},
k0:function k0(){},
k1:function k1(){},
k2:function k2(){},
k3:function k3(){},
Cz(a,b){var s=b.c
return s==null?b.c=A.ke(a,"y",[b.x]):s},
EA(a){var s=a.w
if(s===6||s===7)return A.EA(a.x)
return s===11||s===12},
Jc(a){return a.as},
Gz(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.As(v.typeUniverse,a,!1)},
MS(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.e7(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
e7(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e7(a1,s,a3,a4)
if(r===s)return a2
return A.Fe(a1,r,!0)
case 7:s=a2.x
r=A.e7(a1,s,a3,a4)
if(r===s)return a2
return A.Fd(a1,r,!0)
case 8:q=a2.y
p=A.i2(a1,q,a3,a4)
if(p===q)return a2
return A.ke(a1,a2.x,p)
case 9:o=a2.x
n=A.e7(a1,o,a3,a4)
m=a2.y
l=A.i2(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.CX(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.i2(a1,j,a3,a4)
if(i===j)return a2
return A.Ff(a1,k,i)
case 11:h=a2.x
g=A.e7(a1,h,a3,a4)
f=a2.y
e=A.LN(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.Fc(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.i2(a1,d,a3,a4)
o=a2.x
n=A.e7(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.CY(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kR("Attempted to substitute unexpected RTI kind "+a0))}},
i2(a,b,c,d){var s,r,q,p,o=b.length,n=A.AC(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e7(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
LO(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.AC(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e7(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
LN(a,b,c,d){var s,r=b.a,q=A.i2(a,r,c,d),p=b.b,o=A.i2(a,p,c,d),n=b.c,m=A.LO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.os()
s.a=q
s.b=o
s.c=m
return s},
l(a,b){a[v.arrayRti]=b
return a},
pk(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.MJ(s)
return a.$S()}return null},
MR(a,b){var s
if(A.EA(b))if(a instanceof A.ei){s=A.pk(a)
if(s!=null)return s}return A.bh(a)},
bh(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.a_(a)
return A.D6(J.dr(a))},
a_(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.D6(a)},
D6(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.L8(a,s)},
L8(a,b){var s=a instanceof A.ei?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Kp(v.typeUniverse,s.name)
b.$ccache=r
return r},
MJ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.As(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ds(a){return A.bJ(A.n(a))},
Dk(a){var s=A.pk(a)
return A.bJ(s==null?A.bh(a):s)},
D9(a){var s
if(a instanceof A.hM)return a.lC()
s=a instanceof A.ei?A.pk(a):null
if(s!=null)return s
if(t.dH.b(a))return J.bZ(a).a
if(Array.isArray(a))return A.a_(a)
return A.bh(a)},
bJ(a){var s=a.r
return s==null?a.r=new A.p_(a):s},
MB(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kg(v.typeUniverse,A.D9(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.Fh(v.typeUniverse,s,A.D9(q[r]))
return A.kg(v.typeUniverse,s,a)},
bK(a){return A.bJ(A.As(v.typeUniverse,a,!1))},
L7(a){var s=this
s.b=A.LL(s)
return s.b(a)},
LL(a){var s,r,q,p
if(a===t.K)return A.Lg
if(A.ff(a))return A.Lk
s=a.w
if(s===6)return A.L4
if(s===1)return A.FN
if(s===7)return A.Lb
r=A.LK(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ff)){a.f="$i"+q
if(q==="p")return A.Le
if(a===t.m)return A.Ld
return A.Lj}}else if(s===10){p=A.Mu(a.x,a.y)
return p==null?A.FN:p}return A.L2},
LK(a){if(a.w===8){if(a===t.S)return A.av
if(a===t.W||a===t.o)return A.Lf
if(a===t.N)return A.Li
if(a===t.y)return A.by}return null},
L6(a){var s=this,r=A.L1
if(A.ff(s))r=A.KD
else if(s===t.K)r=A.KC
else if(A.i6(s)){r=A.L3
if(s===t.U)r=A.be
else if(s===t.x)r=A.a6
else if(s===t.o9)r=A.Fw
else if(s===t.jh)r=A.FA
else if(s===t.dA)r=A.Fx
else if(s===t.B)r=A.Fy}else if(s===t.S)r=A.aq
else if(s===t.N)r=A.F
else if(s===t.y)r=A.hY
else if(s===t.o)r=A.Fz
else if(s===t.W)r=A.f7
else if(s===t.m)r=A.bf
s.a=r
return s.a(a)},
L2(a){var s=this
if(a==null)return A.i6(s)
return A.MV(v.typeUniverse,A.MR(a,s),s)},
L4(a){if(a==null)return!0
return this.x.b(a)},
Lj(a){var s,r=this
if(a==null)return A.i6(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dr(a)[s]},
Le(a){var s,r=this
if(a==null)return A.i6(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dr(a)[s]},
Ld(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
FM(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
L1(a){var s=this
if(a==null){if(A.i6(s))return a}else if(s.b(a))return a
throw A.aM(A.FG(a,s),new Error())},
L3(a){var s=this
if(a==null||s.b(a))return a
throw A.aM(A.FG(a,s),new Error())},
FG(a,b){return new A.kc("TypeError: "+A.F3(a,A.bW(b,null)))},
F3(a,b){return A.iw(a)+": type '"+A.bW(A.D9(a),null)+"' is not a subtype of type '"+b+"'"},
cc(a,b){return new A.kc("TypeError: "+A.F3(a,b))},
Lb(a){var s=this
return s.x.b(a)||A.Cz(v.typeUniverse,s).b(a)},
Lg(a){return a!=null},
KC(a){if(a!=null)return a
throw A.aM(A.cc(a,"Object"),new Error())},
Lk(a){return!0},
KD(a){return a},
FN(a){return!1},
by(a){return!0===a||!1===a},
hY(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aM(A.cc(a,"bool"),new Error())},
Fw(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aM(A.cc(a,"bool?"),new Error())},
f7(a){if(typeof a=="number")return a
throw A.aM(A.cc(a,"double"),new Error())},
Fx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aM(A.cc(a,"double?"),new Error())},
av(a){return typeof a=="number"&&Math.floor(a)===a},
aq(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aM(A.cc(a,"int"),new Error())},
be(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aM(A.cc(a,"int?"),new Error())},
Lf(a){return typeof a=="number"},
Fz(a){if(typeof a=="number")return a
throw A.aM(A.cc(a,"num"),new Error())},
FA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aM(A.cc(a,"num?"),new Error())},
Li(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.aM(A.cc(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aM(A.cc(a,"String?"),new Error())},
bf(a){if(A.FM(a))return a
throw A.aM(A.cc(a,"JSObject"),new Error())},
Fy(a){if(a==null)return a
if(A.FM(a))return a
throw A.aM(A.cc(a,"JSObject?"),new Error())},
G_(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bW(a[q],b)
return s},
LA(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.G_(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bW(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
FK(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.l([],t.s)
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
if(m===8){p=A.LS(a.x)
o=a.y
return o.length>0?p+("<"+A.G_(o,b)+">"):p}if(m===10)return A.LA(a,b)
if(m===11)return A.FK(a,b,null)
if(m===12)return A.FK(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
LS(a){var s=A.GN(a)
if(s!=null)return s
return"minified:"+a},
Kq(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Kp(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.As(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kf(a,5,"#")
q=A.AC(s)
for(p=0;p<s;++p)q[p]=r
o=A.ke(a,b,q)
n[b]=o
return o}else return m},
Ko(a,b){return A.Fu(a.tR,b)},
Kn(a,b){return A.Fu(a.eT,b)},
As(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.Fg(a,null,b,!1)
r.set(b,s)
return s},
kg(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.Fg(a,b,c,!0)
q.set(c,r)
return r},
Fh(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.CX(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Fg(a,b,c,d){return A.Kd(A.K7(a,b,c,d))},
e5(a,b){b.a=A.L6
b.b=A.L7
return b},
kf(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cp(null,null)
s.w=b
s.as=c
r=A.e5(a,s)
a.eC.set(c,r)
return r},
Fe(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Kl(a,b,r,c)
a.eC.set(r,s)
return s},
Kl(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ff(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.i6(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cp(null,null)
q.w=6
q.x=b
q.as=c
return A.e5(a,q)},
Fd(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Kj(a,b,r,c)
a.eC.set(r,s)
return s},
Kj(a,b,c,d){var s,r
if(d){s=b.w
if(A.ff(b)||b===t.K)return b
else if(s===1)return A.ke(a,"y",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cp(null,null)
r.w=7
r.x=b
r.as=c
return A.e5(a,r)},
Km(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=13
s.x=b
s.as=q
r=A.e5(a,s)
a.eC.set(q,r)
return r},
kd(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Ki(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
ke(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.kd(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cp(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e5(a,r)
a.eC.set(p,q)
return q},
CX(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.kd(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cp(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e5(a,o)
a.eC.set(q,n)
return n},
Ff(a,b,c){var s,r,q="+"+(b+"("+A.kd(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e5(a,s)
a.eC.set(q,r)
return r},
Fc(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.kd(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.kd(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Ki(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cp(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e5(a,p)
a.eC.set(r,o)
return o},
CY(a,b,c,d){var s,r=b.as+("<"+A.kd(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Kk(a,b,c,r,d)
a.eC.set(r,s)
return s},
Kk(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.AC(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e7(a,b,r,0)
m=A.i2(a,c,r,0)
return A.CY(a,n,m,c!==m)}}l=new A.cp(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e5(a,l)},
K7(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Kd(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.K9(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.F8(a,r,l,k,!1)
else if(q===46)r=A.F8(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.f2(a.u,a.e,k.pop()))
break
case 94:k.push(A.Km(a.u,k.pop()))
break
case 35:k.push(A.kf(a.u,5,"#"))
break
case 64:k.push(A.kf(a.u,2,"@"))
break
case 126:k.push(A.kf(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Kb(a,k)
break
case 38:A.Ka(a,k)
break
case 63:p=a.u
k.push(A.Fe(p,A.f2(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.Fd(p,A.f2(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.K8(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.F9(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Ke(a.u,a.e,o)
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
return A.f2(a.u,a.e,m)},
K9(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
F8(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Kq(s,o.x)[p]
if(n==null)A.t('No "'+p+'" in "'+A.Jc(o)+'"')
d.push(A.kg(s,o,n))}else d.push(p)
return m},
Kb(a,b){var s,r=a.u,q=A.F7(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ke(r,p,q))
else{s=A.f2(r,a.e,p)
switch(s.w){case 11:b.push(A.CY(r,s,q,a.n))
break
default:b.push(A.CX(r,s,q))
break}}},
K8(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.F7(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.f2(p,a.e,o)
q=new A.os()
q.a=s
q.b=n
q.c=m
b.push(A.Fc(p,r,q))
return
case-4:b.push(A.Ff(p,b.pop(),s))
return
default:throw A.b(A.kR("Unexpected state under `()`: "+A.r(o)))}},
Ka(a,b){var s=b.pop()
if(0===s){b.push(A.kf(a.u,1,"0&"))
return}if(1===s){b.push(A.kf(a.u,4,"1&"))
return}throw A.b(A.kR("Unexpected extended operation "+A.r(s)))},
F7(a,b){var s=b.splice(a.p)
A.F9(a.u,a.e,s)
a.p=b.pop()
return s},
f2(a,b,c){if(typeof c=="string")return A.ke(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Kc(a,b,c)}else return c},
F9(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.f2(a,b,c[s])},
Ke(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.f2(a,b,c[s])},
Kc(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kR("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kR("Bad index "+c+" for "+b.l(0)))},
MV(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aV(a,b,null,c,null)
r.set(c,s)}return s},
aV(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ff(d))return!0
s=b.w
if(s===4)return!0
if(A.ff(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aV(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aV(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aV(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aV(a,b.x,c,d,e))return!1
return A.aV(a,A.Cz(a,b),c,d,e)}if(s===6)return A.aV(a,p,c,d,e)&&A.aV(a,b.x,c,d,e)
if(q===7){if(A.aV(a,b,c,d.x,e))return!0
return A.aV(a,b,c,A.Cz(a,d),e)}if(q===6)return A.aV(a,b,c,p,e)||A.aV(a,b,c,d.x,e)
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
if(!A.aV(a,j,c,i,e)||!A.aV(a,i,e,j,c))return!1}return A.FL(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.FL(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.Lc(a,b,c,d,e)}if(o&&q===10)return A.Lh(a,b,c,d,e)
return!1},
FL(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
Lc(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kg(a,b,r[o])
return A.Fv(a,p,null,c,d.y,e)}return A.Fv(a,b.y,null,c,d.y,e)},
Fv(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aV(a,b[s],d,e[s],f))return!1
return!0},
Lh(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aV(a,r[s],c,q[s],e))return!1
return!0},
i6(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.ff(a))if(s!==6)r=s===7&&A.i6(a.x)
return r},
ff(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Fu(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
AC(a){return a>0?new Array(a):v.typeUniverse.sEA},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
os:function os(){this.c=this.b=this.a=null},
p_:function p_(a){this.a=a},
op:function op(){},
kc:function kc(a){this.a=a},
JE(){var s,r,q
if(self.scheduleImmediate!=null)return A.LW()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e9(new A.ym(s),1)).observe(r,{childList:true})
return new A.yl(s,r,q)}else if(self.setImmediate!=null)return A.LX()
return A.LY()},
JF(a){self.scheduleImmediate(A.e9(new A.yn(a),0))},
JG(a){self.setImmediate(A.e9(new A.yo(a),0))},
JH(a){A.CK(B.D,a)},
CK(a,b){var s=B.c.M(a.a,1000)
return A.Kg(s<0?0:s,b)},
EG(a,b){var s=B.c.M(a.a,1000)
return A.Kh(s<0?0:s,b)},
Kg(a,b){var s=new A.kb(!0)
s.oP(a,b)
return s},
Kh(a,b){var s=new A.kb(!1)
s.oQ(a,b)
return s},
h(a){return new A.jF(new A.w($.C,a.i("w<0>")),a.i("jF<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.FB(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.bQ(A.D(a),A.ad(a))},
FB(a,b){var s,r,q=new A.AQ(b),p=new A.AR(b)
if(a instanceof A.w)a.me(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.bq(q,p,s)
else{r=new A.w($.C,t._)
r.a=8
r.c=a
r.me(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fw(new A.B8(s),t.H,t.S,t.z)},
bU(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cW(null)
else{s=c.a
s===$&&A.u()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.D(a)
q=A.ad(a)
s.al(new A.an(r,q))}else{s=A.D(a)
r=A.ad(a)
q=c.a
q===$&&A.u()
q.bx(s,r)
c.a.q()}return}if(a instanceof A.jX){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.u()
r.t(0,s)
A.kA(new A.AO(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.u()
s.tA(p,!1).V(new A.AP(c,b),t.P)
return}}A.FB(a,b)},
G3(a){var s=a.a
s===$&&A.u()
return new A.b6(s,A.n(s).i("b6<1>"))},
JI(a,b){var s=new A.o8(b.i("o8<0>"))
s.oL(a,b)
return s},
FO(a,b){return A.JI(a,b)},
K3(a){return new A.jX(a,1)},
e0(a){return new A.jX(a,0)},
Fb(a,b,c){return 0},
ig(a){var s
if(t.C.b(a)){s=a.gcn()
if(s!=null)return s}return B.Q},
iD(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.D(q)
r=A.ad(q)
p=new A.w($.C,b.i("w<0>"))
o=s
n=r
m=A.kn(o,n)
if(m==null)o=new A.an(o,n==null?A.ig(o):n)
else o=m
p.co(o)
return p}return b.i("y<0>").b(l)?l:A.bx(l,b)},
ba(a,b){var s=a==null?b.a(a):a,r=new A.w($.C,b.i("w<0>"))
r.aD(s)
return r},
Ik(a,b){var s
if(!b.b(null))throw A.b(A.az(null,"computation","The type parameter is not nullable"))
s=new A.w($.C,b.i("w<0>"))
A.cQ(a,new A.t0(null,s,b))
return s},
Cc(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.C,b.i("w<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.t2(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bq(new A.t1(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cW(A.l([],b.i("z<0>")))
return n}i.a=A.ab(n,null,!1,b.i("0?"))}catch(l){p=A.D(l)
o=A.ad(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kn(m,k)
if(j==null)m=new A.an(m,k==null?A.ig(m):k)
else m=j
n.co(m)
return n}else{i.d=p
i.c=o}}return f},
Cb(a,b,c,d){var s=new A.rW(d,null,b,c),r=$.C,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.fw(s,c.i("0/"),t.K,t.l)
a.dE(new A.ca(q,2,null,s,a.$ti.i("@<1>").W(c).i("ca<1,2>")))
return q},
Ii(a,b){var s,r,q,p=A.l([],b.i("z<jV<0>>"))
for(s=a.length,r=b.i("jV<0>"),q=0;q<a.length;a.length===s||(0,A.q)(a),++q)p.push(new A.jV(a[q],r))
if(p.length===0)return A.ba(A.l([],b.i("z<0>")),b.i("p<0>"))
s=new A.w($.C,b.i("w<p<0>>"))
A.JY(p,new A.rX(new A.ap(s,b.i("ap<p<0>>")),p,b))
return s},
Lp(a){return a!=null},
JY(a,b){var s,r={},q=r.a=r.b=0,p=new A.zl(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.q)(a),++q)a[q].tg(p)},
kn(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.mL(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mM(r,q)
return s},
f8(a,b){var s
if($.C!==B.i){s=A.kn(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcn()
if(b==null){A.mM(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.C.b(a))A.mM(a,b)
return new A.an(a,b)},
JX(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bx(a,b){var s=new A.w($.C,b.i("w<0>"))
s.a=8
s.c=a
return s},
zr(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.CC()
b.co(new A.an(new A.bB(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lU(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eR()
b.fZ(p.a)
A.eZ(b,q)
return}b.a^=2
b.b.cQ(new A.zs(p,b))},
eZ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.ff(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.eZ(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gcb()===k.gcb())}else f=!1
if(f){f=g.a
r=f.c
f.b.ff(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.zw(s,g,p).$0()
else if(q){if((f&1)!==0)new A.zv(s,m).$0()}else if((f&2)!==0)new A.zu(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hl(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.zr(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hl(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
FU(a,b){if(t.ng.b(a))return b.fw(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dl(a,t.z,t.K)
throw A.b(A.az(a,"onError",u.w))},
Lo(){var s,r
for(s=$.i0;s!=null;s=$.i0){$.kp=null
r=s.b
$.i0=r
if(r==null)$.ko=null
s.a.$0()}},
LM(){$.D7=!0
try{A.Lo()}finally{$.kp=null
$.D7=!1
if($.i0!=null)$.Dw().$1(A.Gf())}},
G1(a){var s=new A.o7(a),r=$.ko
if(r==null){$.i0=$.ko=s
if(!$.D7)$.Dw().$1(A.Gf())}else $.ko=r.b=s},
LJ(a){var s,r,q,p=$.i0
if(p==null){A.G1(a)
$.kp=$.ko
return}s=new A.o7(a)
r=$.kp
if(r==null){s.b=p
$.i0=$.kp=s}else{q=r.b
s.b=q
$.kp=r.b=s
if(q==null)$.ko=s}},
kA(a){var s,r=null,q=$.C
if(B.i===q){A.B6(r,r,B.i,a)
return}if(B.i===q.gjB().a)s=B.i.gcb()===q.gcb()
else s=!1
if(s){A.B6(r,r,q,q.bW(a,t.H))
return}s=$.C
s.cQ(s.eZ(a))},
CE(a,b){var s=null,r=b.i("cV<0>"),q=new A.cV(s,s,s,s,r)
q.aA(a)
q.lb()
return new A.b6(q,r.i("b6<1>"))},
NH(a,b){return new A.cy(A.cz(a,"stream",t.K),b.i("cy<0>"))},
x7(a,b,c,d,e){return d?new A.hT(b,null,c,a,e.i("hT<0>")):new A.cV(b,null,c,a,e.i("cV<0>"))},
dQ(a,b,c){return new A.jG(b,a,c.i("jG<0>"))},
pg(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.D(q)
r=A.ad(q)
$.C.ff(s,r)}},
JV(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.oc(s,b,f),o=A.yB(s,c),n=d==null?A.B9():d
return new A.dZ(a,p,o,s.bW(n,t.H),s,r|q,f.i("dZ<0>"))},
JD(a){return new A.yi(a)},
oc(a,b,c){var s=b==null?A.M_():b
return a.dl(s,t.H,c)},
yB(a,b){if(b==null)b=A.M0()
if(t.b9.b(b))return a.fw(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dl(b,t.z,t.K)
throw A.b(A.Q("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Lq(a){},
Ls(a,b){$.C.ff(a,b)},
Lr(){},
F2(a,b){var s=$.C,r=new A.hE(s,b.i("hE<0>"))
A.kA(r.glQ())
if(a!=null)r.c=s.bW(a,t.H)
return r},
KL(a,b,c){var s=a.C()
if(s!==$.eb())s.aY(new A.AT(b,c))
else b.al(c)},
KM(a,b,c){var s=a.C()
if(s!==$.eb())s.aY(new A.AU(b,c))
else b.cp(c)},
cQ(a,b){var s=$.C
if(s===B.i)return s.jU(a,b)
return s.jU(a,s.eZ(b))},
CJ(a,b){var s,r=$.C
if(r===B.i)return r.jT(a,b)
s=r.hG(b,t.hU)
return $.C.jT(a,s)},
pp(a,b,c,d){return A.LI(a,c,b,d)},
LI(a,b,c,d){return $.C.mP(c,b).aV(a,d)},
LG(a,b,c,d,e){A.ks(d,e)},
ks(a,b){A.LJ(new A.B3(a,b))},
B4(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
B5(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
D8(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
FY(a,b,c,d){return d},
FZ(a,b,c,d){return d},
FX(a,b,c,d){return d},
LF(a,b,c,d,e){return null},
B6(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gcb()
r=c.gcb()
d=s!==r?c.eZ(d):c.jO(d,t.H)}A.G1(d)},
LE(a,b,c,d,e){return A.CK(d,B.i!==c?c.jO(e,t.H):e)},
LD(a,b,c,d,e){e=c.tN(e,t.H,t.hU)
return A.EG(d,e)},
LH(a,b,c,d){A.GB(d)},
FW(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.Cd(o,o,o,s,s)
r.D(0,e)}else r=o
s=new A.oi(c.gm3(),c.gm5(),c.gm4(),c.gm_(),c.gm0(),c.glZ(),c.glu(),c.gjB(),c.glm(),c.gll(),c.glV(),c.glz(),c.gjj(),c.gjL(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.p8(s,q)
p=d.a
if(p!=null)s.as=new A.p7(s,p)}if(r!=null)s.at=new A.p9(s,r)
return s},
ym:function ym(a){this.a=a},
yl:function yl(a,b,c){this.a=a
this.b=b
this.c=c},
yn:function yn(a){this.a=a},
yo:function yo(a){this.a=a},
kb:function kb(a){this.a=a
this.b=null
this.c=0},
Aq:function Aq(a,b){this.a=a
this.b=b},
Ap:function Ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jF:function jF(a,b){this.a=a
this.b=!1
this.$ti=b},
AQ:function AQ(a){this.a=a},
AR:function AR(a){this.a=a},
B8:function B8(a){this.a=a},
AO:function AO(a,b){this.a=a
this.b=b},
AP:function AP(a,b){this.a=a
this.b=b},
o8:function o8(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
yq:function yq(a){this.a=a},
yr:function yr(a){this.a=a},
yt:function yt(a){this.a=a},
yu:function yu(a,b){this.a=a
this.b=b},
ys:function ys(a,b){this.a=a
this.b=b},
yp:function yp(a){this.a=a},
jX:function jX(a,b){this.a=a
this.b=b},
oX:function oX(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hS:function hS(a,b){this.a=a
this.$ti=b},
an:function an(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.$ti=b},
eV:function eV(a,b,c,d,e,f,g){var _=this
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
jL:function jL(){},
jG:function jG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
t0:function t0(a,b,c){this.a=a
this.b=b
this.c=c},
t2:function t2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t1:function t1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rW:function rW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nB:function nB(a,b){this.a=a
this.b=b},
rX:function rX(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a,b,c){this.c=a
this.d=b
this.$ti=c},
jV:function jV(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
zm:function zm(a,b){this.a=a
this.b=b},
zn:function zn(a,b){this.a=a
this.b=b},
zl:function zl(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(){},
aI:function aI(a,b){this.a=a
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
zo:function zo(a,b){this.a=a
this.b=b},
zt:function zt(a,b){this.a=a
this.b=b},
zs:function zs(a,b){this.a=a
this.b=b},
zq:function zq(a,b){this.a=a
this.b=b},
zp:function zp(a,b){this.a=a
this.b=b},
zw:function zw(a,b,c){this.a=a
this.b=b
this.c=c},
zx:function zx(a,b){this.a=a
this.b=b},
zy:function zy(a){this.a=a},
zv:function zv(a,b){this.a=a
this.b=b},
zu:function zu(a,b){this.a=a
this.b=b},
zz:function zz(a,b){this.a=a
this.b=b},
zA:function zA(a,b,c){this.a=a
this.b=b
this.c=c},
zB:function zB(a,b){this.a=a
this.b=b},
o7:function o7(a){this.a=a
this.b=null},
a9:function a9(){},
xa:function xa(a,b){this.a=a
this.b=b},
xb:function xb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xc:function xc(a,b){this.a=a
this.b=b},
xd:function xd(a,b){this.a=a
this.b=b},
x8:function x8(a){this.a=a},
x9:function x9(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(){},
e3:function e3(){},
Ai:function Ai(a){this.a=a},
Ah:function Ah(a){this.a=a},
oY:function oY(){},
jH:function jH(){},
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
b6:function b6(a,b){this.a=a
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
o4:function o4(){},
yi:function yi(a){this.a=a},
yh:function yh(a){this.a=a},
k8:function k8(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b2:function b2(){},
yD:function yD(a,b,c){this.a=a
this.b=b
this.c=c},
yC:function yC(a){this.a=a},
hR:function hR(){},
oo:function oo(){},
c9:function c9(a,b){this.b=a
this.a=null
this.$ti=b},
hD:function hD(a,b){this.b=a
this.c=b
this.a=null},
ze:function ze(){},
e2:function e2(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
A_:function A_(a,b){this.a=a
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
jQ:function jQ(a){this.$ti=a},
dk:function dk(a,b){this.b=a
this.$ti=b},
zY:function zY(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
AT:function AT(a,b){this.a=a
this.b=b},
AU:function AU(a,b){this.a=a
this.b=b},
jT:function jT(){},
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
f1:function f1(a,b,c){this.b=a
this.a=b
this.$ti=c},
jR:function jR(a,b){this.a=a
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
jK:function jK(a,b,c){this.a=a
this.b=b
this.$ti=c},
AL:function AL(a,b){this.a=a
this.b=b},
AN:function AN(a,b){this.a=a
this.b=b},
AM:function AM(a,b){this.a=a
this.b=b},
AJ:function AJ(a,b){this.a=a
this.b=b},
AK:function AK(a,b){this.a=a
this.b=b},
AI:function AI(a,b){this.a=a
this.b=b},
AF:function AF(a,b){this.a=a
this.b=b},
p8:function p8(a,b){this.a=a
this.b=b},
AE:function AE(a,b){this.a=a
this.b=b},
AD:function AD(a,b){this.a=a
this.b=b},
AH:function AH(a,b){this.a=a
this.b=b},
AG:function AG(a,b){this.a=a
this.b=b},
p7:function p7(a,b){this.a=a
this.b=b},
p9:function p9(a,b){this.a=a
this.b=b},
p6:function p6(){},
oi:function oi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
za:function za(a,b,c){this.a=a
this.b=b
this.c=c},
zc:function zc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
z9:function z9(a,b){this.a=a
this.b=b},
zb:function zb(a,b,c){this.a=a
this.b=b
this.c=c},
oM:function oM(){},
A6:function A6(a,b,c){this.a=a
this.b=b
this.c=c},
A5:function A5(a,b){this.a=a
this.b=b},
A7:function A7(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
B3:function B3(a,b){this.a=a
this.b=b},
jE:function jE(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
Cd(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.di(d.i("@<0>").W(e).i("di<1,2>"))
b=A.Df()}else{if(A.Gj()===b&&A.Gi()===a)return new A.e_(d.i("@<0>").W(e).i("e_<1,2>"))
if(a==null)a=A.De()}else{if(b==null)b=A.Df()
if(a==null)a=A.De()}return A.JW(a,b,c,d,e)},
F4(a,b){var s=a[b]
return s===a?null:s},
CV(a,b,c){if(c==null)a[b]=a
else a[b]=c},
CU(){var s=Object.create(null)
A.CV(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
JW(a,b,c,d,e){var s=c!=null?c:new A.z8(d)
return new A.jN(a,b,s,d.i("@<0>").W(e).i("jN<1,2>"))},
dH(a,b,c,d){if(b==null){if(a==null)return new A.bD(c.i("@<0>").W(d).i("bD<1,2>"))
b=A.Df()}else{if(A.Gj()===b&&A.Gi()===a)return new A.iO(c.i("@<0>").W(d).i("iO<1,2>"))
if(a==null)a=A.De()}return A.K6(a,b,null,c,d)},
m(a,b,c){return A.Gr(a,new A.bD(b.i("@<0>").W(c).i("bD<1,2>")))},
v(a,b){return new A.bD(a.i("@<0>").W(b).i("bD<1,2>"))},
K6(a,b,c,d,e){return new A.jY(a,b,new A.zW(d),d.i("@<0>").W(e).i("jY<1,2>"))},
mi(a){return new A.dj(a.i("dj<0>"))},
aL(a){return new A.dj(a.i("dj<0>"))},
at(a,b){return A.MF(a,new A.dj(b.i("dj<0>")))},
CW(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hJ(a,b,c){var s=new A.e1(a,b,c.i("e1<0>"))
s.c=a.e
return s},
KT(a,b){return J.x(a,b)},
KU(a){return J.a7(a)},
Eb(a){if(a.length===0)return null
return B.b.ga1(a)},
bl(a,b,c){var s=A.dH(null,null,b,c)
a.a8(0,new A.uG(s,b,c))
return s},
cJ(a,b,c){var s=A.dH(null,null,b,c)
s.D(0,a)
return s},
uH(a,b){var s,r,q=A.mi(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.t(0,b.a(a[r]))
return q},
d3(a,b){var s=A.mi(b)
s.D(0,a)
return s},
IB(a,b){var s=t.bP
return J.DE(s.a(a),s.a(b))},
uW(a){var s,r
if(A.Dm(a))return"{...}"
s=new A.a2("")
try{r={}
$.f9.push(a)
s.a+="{"
r.a=!0
a.a8(0,new A.uX(r,s))
s.a+="}"}finally{$.f9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
Cm(a){return new A.iR(A.ab(A.IC(null),null,!1,a.i("0?")),a.i("iR<0>"))},
IC(a){return 8},
di:function di(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
zD:function zD(a){this.a=a},
zC:function zC(a){this.a=a},
e_:function e_(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
jN:function jN(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
z8:function z8(a){this.a=a},
f_:function f_(a,b){this.a=a
this.$ti=b},
ot:function ot(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
jY:function jY(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
zW:function zW(a){this.a=a},
dj:function dj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
zX:function zX(a){this.a=a
this.c=this.b=null},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
uG:function uG(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
oA:function oA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b3:function b3(){},
I:function I(){},
U:function U(){},
uV:function uV(a){this.a=a},
uX:function uX(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.$ti=b},
oC:function oC(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
p1:function p1(){},
iV:function iV(){},
cS:function cS(a,b){this.a=a
this.$ti=b},
iR:function iR(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
oB:function oB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cq:function cq(){},
k6:function k6(){},
kh:function kh(){},
FS(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.D(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.AW(p)
return q},
AW(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.ox(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.AW(a[s])
return a},
KB(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.Hf()
else s=new Uint8Array(o)
for(r=J.L(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
KA(a,b,c,d){var s=a?$.He():$.Hd()
if(s==null)return null
if(0===c&&d===b.length)return A.Fs(s,b)
return A.Fs(s,b.subarray(c,d))},
Fs(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
DI(a,b,c,d,e,f){if(B.c.ak(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
JM(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.az(b,"Not a byte value at index "+q+": 0x"+B.c.kA(s.h(b,q),16),null))},
JL(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.af(f,2),i=f&3,h=$.Dx()
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
return A.ER(a,r+1,c,-m-1)}throw A.b(A.a8(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a8(k,a,r))},
JJ(a,b,c,d){var s=A.JK(a,b,c),r=(d&3)+(s-b),q=B.c.af(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.H6()},
JK(a,b,c){var s,r=c,q=r,p=0
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
ER(a,b,c,d){var s,r
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
I7(a){return B.cW.h(0,a.toLowerCase())},
Eg(a,b,c){return new A.iP(a,b)},
KX(a){return a.p()},
K4(a,b){return new A.zS(a,[],A.Mr())},
K5(a,b,c){var s,r=new A.a2("")
A.F6(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
F6(a,b,c,d){var s=A.K4(b,c)
s.iD(a)},
Ft(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ox:function ox(a,b){this.a=a
this.b=b
this.c=null},
zR:function zR(a){this.a=a},
oy:function oy(a){this.a=a},
zP:function zP(a,b,c){this.b=a
this.c=b
this.a=c},
AA:function AA(){},
Az:function Az(){},
kO:function kO(){},
p0:function p0(){},
kP:function kP(a){this.a=a},
Ar:function Ar(a,b){this.a=a
this.b=b},
kV:function kV(a){this.a=a},
ii:function ii(a){this.a=a},
oa:function oa(a){this.a=0
this.b=a},
yA:function yA(a){this.c=null
this.a=0
this.b=a},
yw:function yw(){},
yj:function yj(a,b){this.a=a
this.b=b},
kW:function kW(){},
o9:function o9(){this.a=0},
yv:function yv(a,b){this.a=a
this.b=b},
pQ:function pQ(){},
hy:function hy(a){this.a=a},
od:function od(a,b){this.a=a
this.b=b
this.c=0},
l7:function l7(){},
oS:function oS(a,b,c){this.a=a
this.b=b
this.$ti=c},
eX:function eX(a,b,c){this.a=a
this.b=b
this.$ti=c},
l9:function l9(){},
aB:function aB(){},
qN:function qN(a){this.a=a},
eq:function eq(){},
iP:function iP(a,b){this.a=a
this.b=b},
ma:function ma(a,b){this.a=a
this.b=b},
tD:function tD(){},
mc:function mc(a){this.b=a},
zQ:function zQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
mb:function mb(a){this.a=a},
zT:function zT(){},
zU:function zU(a,b){this.a=a
this.b=b},
zS:function zS(a,b,c){this.c=a
this.a=b
this.b=c},
mf:function mf(){},
mg:function mg(a){this.a=a},
nk:function nk(){},
An:function An(a,b){this.a=a
this.b=b},
ka:function ka(){},
oU:function oU(a){this.a=a},
Ay:function Ay(a,b,c){this.a=a
this.b=b
this.c=c},
nR:function nR(){},
nS:function nS(){},
p4:function p4(a){this.b=this.a=0
this.c=a},
AB:function AB(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jz:function jz(a){this.a=a},
dl:function dl(a){this.a=a
this.b=16
this.c=0},
pa:function pa(){},
F0(a,b){var s=A.JT(a,b)
if(s==null)throw A.b(A.a8("Could not parse BigInt",a,null))
return s},
JQ(a,b){var s,r,q=$.cg(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bg(0,$.Dy()).fL(0,A.jI(s))
s=0
o=0}}if(b)return q.bC(0)
return q},
ET(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
JR(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.tP(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.ET(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.ET(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cg()
l=A.bH(j,i)
return new A.aK(l===0?!1:c,i,l)},
JT(a,b){var s,r,q,p,o
if(a==="")return null
s=$.H8().ea(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.JQ(p,q)
if(o!=null)return A.JR(o,2,q)
return null},
bH(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
CR(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
ES(a){var s
if(a===0)return $.cg()
if(a===1)return $.fj()
if(a===2)return $.H9()
if(Math.abs(a)<4294967296)return A.jI(B.c.iw(a))
s=A.JN(a)
return s},
jI(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bH(4,s)
return new A.aK(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bH(1,s)
return new A.aK(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.af(a,16)
r=A.bH(2,s)
return new A.aK(r===0?!1:o,s,r)}r=B.c.M(B.c.gmx(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.M(a,65536)}r=A.bH(r,s)
return new A.aK(r===0?!1:o,s,r)},
JN(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.Q("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.cg()
r=$.H7()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.H(r)
r[p]=0}q=J.pu(B.f.gab(r))
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
l=new A.aK(!1,m,4)
if(n<0)k=l.dA(0,-n)
else k=n>0?l.bD(0,n):l
if(s)return k.bC(0)
return k},
CS(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.H(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.H(d)
d[s]=0}return b+c},
EZ(a,b,c,d){var s,r,q,p,o,n=B.c.M(c,16),m=B.c.ak(c,16),l=16-m,k=B.c.bD(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dA(p,l)
r&2&&A.H(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bD((p&k)>>>0,m)}r&2&&A.H(d)
d[n]=q},
EU(a,b,c,d){var s,r,q,p,o=B.c.M(c,16)
if(B.c.ak(c,16)===0)return A.CS(a,b,o,d)
s=b+o+1
A.EZ(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.H(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
JS(a,b,c,d){var s,r,q,p,o=B.c.M(c,16),n=B.c.ak(c,16),m=16-n,l=B.c.bD(1,n)-1,k=B.c.dA(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bD((q&l)>>>0,m)
s&2&&A.H(d)
d[r]=(p|k)>>>0
k=B.c.dA(q,n)}s&2&&A.H(d)
d[j]=k},
yx(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
JO(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}s&2&&A.H(e)
e[b]=r},
ob(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}},
F_(a,b,c,d,e,f){var s,r,q,p,o,n
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
JP(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iO((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
MN(a){return A.kx(a)},
C7(a,b){return new A.lC(new WeakMap(),a,b.i("lC<0>"))},
C8(a){},
zk(a,b){var s=$.Ha()
s=s==null?null:new s(A.e9(A.Nm(a,b),1))
return new A.or(s,b.i("or<0>"))},
aH(a){var s=A.jg(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
Mz(a){var s=A.J0(a)
if(s!=null)return s
throw A.b(A.a8("Invalid double",a,null))},
Ib(a,b){a=A.aM(a,new Error())
a.stack=b.l(0)
throw a},
ab(a,b,c,d){var s,r=c?J.Ch(a,d):J.Cg(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bF(a,b,c){var s,r=A.l([],c.i("z<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
R(a,b){var s,r
if(Array.isArray(a))return A.l(a.slice(0),b.i("z<0>"))
s=A.l([],b.i("z<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fN(a,b){var s=A.bF(a,!1,b)
s.$flags=3
return s},
dS(a,b,c){var s,r,q,p,o
A.bc(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ax(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Ev(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Jp(a,b,c)
if(r)a=J.C0(a,c)
if(b>0)a=J.py(a,b)
s=A.R(a,t.S)
return A.Ev(s)},
Jp(a,b,c){var s=a.length
if(b>=s)return""
return A.J2(a,b,c==null||c>s?s:c)},
af(a,b,c){return new A.eu(a,A.Cj(a,!1,b,c,!1,""))},
MM(a,b){return a==null?b==null:a===b},
xe(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
CM(){var s,r,q=A.IW()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.EN
if(s!=null&&q===$.EM)return s
r=A.nQ(q)
$.EN=r
$.EM=q
return r},
p3(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.Hb()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bv(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Kv(a){var s,r,q
if(!$.Hc())return A.Kw(a)
s=new URLSearchParams()
a.a8(0,new A.Ax(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
CC(){return A.ad(new Error())},
C4(a,b,c,d,e,f,g){var s=A.J3(a,b,c,d,e,f,g,0,!0)
return new A.aO(s==null?new A.rq(a,b,c,d,e,f,g,0).$0():s,0,!0)},
I2(){return new A.aO(Date.now(),0,!1)},
lt(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ax(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ax(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.az(b,s,"Time including microseconds is outside valid range"))
A.cz(c,"isUtc",t.y)
return a},
I3(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
DY(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ls(a){if(a>=10)return""+a
return"0"+a},
d_(a,b,c){return new A.aC(a+1000*b+1e6*c)},
fB(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.az(b,"name","No enum value with that name"))},
iw(a){if(typeof a=="number"||A.by(a)||a==null)return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Eu(a)},
E_(a,b){A.cz(a,"error",t.K)
A.cz(b,"stackTrace",t.l)
A.Ib(a,b)},
kR(a){return new A.kQ(a)},
Q(a,b){return new A.bB(!1,null,b,a)},
az(a,b,c){return new A.bB(!0,a,b,c)},
kN(a,b){return a},
b_(a){var s=null
return new A.d7(s,s,!1,s,s,a)},
wI(a,b){return new A.d7(null,null,!0,a,b,"Value not in range")},
ax(a,b,c,d,e){return new A.d7(b,c,!0,a,d,"Invalid value")},
Ez(a,b,c,d){if(a<b||a>c)throw A.b(A.ax(a,b,c,d,null))
return a},
J6(a,b,c,d){return A.E9(a,d,b,null,c)},
bd(a,b,c){if(0>a||a>c)throw A.b(A.ax(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ax(b,a,c,"end",null))
return b}return c},
bc(a,b){if(a<0)throw A.b(A.ax(a,0,null,b,null))
return a},
E8(a,b){var s=b.b
return new A.iG(s,!0,a,null,"Index out of range")},
m2(a,b,c,d,e){return new A.iG(b,!0,a,e,"Index out of range")},
E9(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.m2(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cT(a)},
EK(a){return new A.nK(a)},
A(a){return new A.bm(a)},
aA(a){return new A.lc(a)},
E0(a){return new A.oq(a)},
a8(a,b,c){return new A.bk(a,b,c)},
Ir(a,b,c){var s,r
if(A.Dm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.l([],t.s)
$.f9.push(a)
try{A.Ll(a,s)}finally{$.f9.pop()}r=A.xe(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
tA(a,b,c){var s,r
if(A.Dm(a))return b+"..."+c
s=new A.a2(b)
$.f9.push(a)
try{r=s
r.a=A.xe(r.a,a,", ")}finally{$.f9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
Ll(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
Ej(a,b,c,d,e){return new A.eg(a,b.i("@<0>").W(c).W(d).W(e).i("eg<1,2,3,4>"))},
c4(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a7(a)
b=J.a7(b)
return A.hm(A.ay(A.ay($.fk(),s),b))}if(B.d===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.hm(A.ay(A.ay(A.ay($.fk(),s),b),c))}if(B.d===e){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
return A.hm(A.ay(A.ay(A.ay(A.ay($.fk(),s),b),c),d))}if(B.d===f){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
return A.hm(A.ay(A.ay(A.ay(A.ay(A.ay($.fk(),s),b),c),d),e))}if(B.d===g){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
return A.hm(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fk(),s),b),c),d),e),f))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
g=J.a7(g)
g=A.hm(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.fk(),s),b),c),d),e),f),g))
return g},
vn(a){var s,r=$.fk()
for(s=J.E(a);s.k();)r=A.ay(r,J.a7(s.gn()))
return A.hm(r)},
FC(a,b){return 65536+((a&1023)<<10)+(b&1023)},
nQ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.EL(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gnn()
else if(s===32)return A.EL(B.a.A(a5,5,a4),0,a3).gnn()}r=A.ab(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.G0(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.G0(a5,0,q,20,r)===20)r[7]=q
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
a5=B.a.dm(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.ad(a5,"http",0)){if(i&&o+3===n&&B.a.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.dm(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.ad(a5,"https",0)){if(i&&o+4===n&&B.a.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.dm(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cb(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.D_(a5,0,q)
else{if(q===0)A.hV(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Fo(a5,c,p-1):""
a=A.Fm(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jg(B.a.A(a5,i,n),a3)
d=A.At(a0==null?A.t(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Fn(a5,n,m,a3,j,a!=null)
a2=m<l?A.Au(a5,m+1,l,a3):a3
return A.kj(j,b,a,d,a1,a2,l<a4?A.Fl(a5,l+1,a4):a3)},
Jz(a){return A.D2(a,0,a.length,B.o,!1)},
nP(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
Jw(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.nP("each part must be in the range 0..255",a,r)}A.nP("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.nP(k,a,q)}l=p+1
s&2&&A.H(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.nP(k,a,q)
p=l}A.nP("IPv4 address should contain exactly 4 parts",a,q)},
Jx(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Jy(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.EO(a,b,c)
return!0},
Jy(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
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
EO(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.xL(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Jw(a1,o,a3,s,q*2)
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
B.f.k6(s,c,b,0)}}return s},
kj(a,b,c,d,e,f,g){return new A.ki(a,b,c,d,e,f,g)},
Fi(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hV(a,b,c){throw A.b(A.a8(c,a,b))},
Ks(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.F(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
At(a,b){if(a!=null&&a===A.Fi(b))return null
return a},
Fm(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hV(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Kt(a,r,s)
if(p<s){o=p+1
q=A.Fr(a,B.a.ad(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Jx(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.cc(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Fr(a,B.a.ad(a,"25",o)?s+3:o,c,"%25")}else q=""
A.EO(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.Ky(a,b,c)},
Kt(a,b,c){var s=B.a.cc(a,"%",b)
return s>=b&&s<c?s:c},
Fr(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.D0(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a2("")
m=i.a+=B.a.A(a,r,s)
if(n)o=B.a.A(a,s,s+3)
else if(o==="%")A.hV(a,s,"ZoneID should not contain % anymore")
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
m=A.CZ(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Ky(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.D0(a,s,!0)
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
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hV(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a2("")
m=q}else m=q
m.a+=l
k=A.CZ(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
D_(a,b,c){var s,r,q
if(b===c)return""
if(!A.Fk(a.charCodeAt(b)))A.hV(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hV(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.Kr(r?a.toLowerCase():a)},
Kr(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Fo(a,b,c){if(a==null)return""
return A.kk(a,b,c,16,!1,!1)},
Fn(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kk(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.Kx(s,e,f)},
Kx(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.D1(a,!s||c)
return A.f6(a)},
Au(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.Q("Both query and queryParameters specified",null))
return A.kk(a,b,c,256,!0,!1)}if(d==null)return null
return A.Kv(d)},
Kw(a){var s={},r=new A.a2("")
s.a=""
a.a8(0,new A.Av(new A.Aw(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
Fl(a,b,c){if(a==null)return null
return A.kk(a,b,c,256,!0,!1)},
D0(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.Bx(s)
p=A.Bx(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bv(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
CZ(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.ma(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dS(s,0,null)},
kk(a,b,c,d,e,f){var s=A.Fq(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
Fq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.D0(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hV(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.CZ(o)}if(p==null){p=new A.a2("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Fp(a){if(B.a.S(a,"."))return!0
return B.a.bS(a,"/.")!==-1},
f6(a){var s,r,q,p,o,n
if(!A.Fp(a))return a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
D1(a,b){var s,r,q,p,o,n
if(!A.Fp(a))return!b?A.Fj(a):a
s=A.l([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga1(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.Fj(s[0])
return B.b.B(s,"/")},
Fj(a){var s,r,q=a.length
if(q>=2&&A.Fk(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ae(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Kz(a,b){if(a.vE("package")&&a.c==null)return A.G2(b,0,b.length)
return-1},
Ku(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.Q("Invalid URL encoding",null))}}return s},
D2(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.A(a,b,c)
else p=new A.ch(B.a.A(a,b,c))
else{p=A.l([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.Q("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.Q("Truncated URI",null))
p.push(A.Ku(a,o+1))
o+=2}else p.push(r)}}return d.f0(p)},
Fk(a){var s=a|32
return 97<=s&&s<=122},
EL(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.l([b-1],t.t)
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
if((j.length&1)===1)a=B.aq.w_(a,m,s)
else{l=A.Fq(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dm(a,m,s,l)}return new A.xK(a,j,c)},
G0(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
Fa(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.G2(a.a,a.e,a.f)
return-1},
G2(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
KO(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
yy:function yy(){},
yz:function yz(){},
or:function or(a,b){this.a=a
this.$ti=b},
Ax:function Ax(a){this.a=a},
rq:function rq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aO:function aO(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a){this.a=a},
zf:function zf(){},
ae:function ae(){},
kQ:function kQ(a){this.a=a},
de:function de(){},
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
iG:function iG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cT:function cT(a){this.a=a},
nK:function nK(a){this.a=a},
bm:function bm(a){this.a=a},
lc:function lc(a){this.a=a},
mC:function mC(){},
js:function js(){},
oq:function oq(a){this.a=a},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function m4(){},
o:function o(){},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
j:function j(){},
oW:function oW(){},
jt:function jt(){this.b=this.a=0},
jl:function jl(a){this.a=a},
n0:function n0(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
xL:function xL(a){this.a=a},
ki:function ki(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
Aw:function Aw(a,b){this.a=a
this.b=b},
Av:function Av(a){this.a=a},
xK:function xK(a,b,c){this.a=a
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
ol:function ol(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
lC:function lC(a,b,c){this.a=a
this.b=b
this.$ti=c},
ID(a){return a},
Iu(a){return a},
CF(a){return a},
Is(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.Fy(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
Ij(a){return new v.G.Promise(A.bV(new A.t_(a)))},
my:function my(a){this.a=a},
t_:function t_(a){this.a=a},
rY:function rY(a){this.a=a},
rZ:function rZ(a){this.a=a},
B_(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.KF,a)
s[$.fi()]=a
return s},
cX(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.KG,a)
s[$.fi()]=a
return s},
bV(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.KH,a)
s[$.fi()]=a
return s},
pc(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.KI,a)
s[$.fi()]=a
return s},
i_(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.KJ,a)
s[$.fi()]=a
return s},
D5(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.KK,a)
s[$.fi()]=a
return s},
KF(a){return a.$0()},
KG(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
KH(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
KI(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
KJ(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
KK(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
FQ(a){return a==null||A.by(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
pn(a){if(A.FQ(a))return a
return new A.BC(new A.e_(t.mp)).$1(a)},
Dj(a,b){return a[b]},
Dc(a,b,c){return a[b].apply(a,c)},
Mf(a,b){var s,r
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
a.then(A.e9(new A.BI(r),1),A.e9(new A.BJ(r),1))
return s},
FP(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
pl(a){if(A.FP(a))return a
return new A.Bi(new A.e_(t.mp)).$1(a)},
BC:function BC(a){this.a=a},
BI:function BI(a){this.a=a},
BJ:function BJ(a){this.a=a},
Bi:function Bi(a){this.a=a},
Gv(a,b){return Math.max(a,b)},
Ex(){return B.as},
Ey(){return $.BW()},
zM:function zM(){},
zN:function zN(a){this.a=a},
HL(a,b,c){return J.DC(a,b,c)},
lz:function lz(){},
a3:function a3(){},
pS:function pS(a){this.a=a},
pT:function pT(a){this.a=a},
pU:function pU(a,b){this.a=a
this.b=b},
pV:function pV(a){this.a=a},
pW:function pW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pX:function pX(a){this.a=a},
lv:function lv(a){this.$ti=a},
iK:function iK(a,b){this.a=a
this.$ti=b},
ew:function ew(a,b){this.a=a
this.$ti=b},
hU:function hU(){},
hb:function hb(a,b){this.a=a
this.$ti=b},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a,b,c){this.a=a
this.b=b
this.$ti=c},
lu:function lu(){},
Eo(){throw A.b(A.Y(u.O))},
Jv(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
mx:function mx(){},
nN:function nN(){},
ar(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dS(m,0,null)},
ci:function ci(a){this.a=a},
c0:function c0(){this.a=null},
lX:function lX(){},
t4:function t4(){},
cW(a){var s=new Uint32Array(A.b8(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.oQ(s,r,a,q,new Uint32Array(16))},
oP:function oP(){},
A9:function A9(){},
oQ:function oQ(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kJ:function kJ(){},
q2:function q2(){},
iT:function iT(a){this.a=a},
jo:function jo(){},
uU:function uU(){},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
wU:function wU(){},
jp:function jp(a,b){this.b=a
this.c=b},
n5:function n5(a){this.a=a},
bz(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lo(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
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
if((f&B.c.bD(1,31-a))>>>0!==0){e=(e^s)>>>0
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
DX(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cR(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.M(q,n),!1)
r.setUint32(12,B.c.ak(q,n),!1)
p=J.bL(B.aA.gab(r),0,null)
o=new Uint32Array(4)
A.lo(o,a,b)
A.lo(o,a,p)
return J.bL(B.y.gab(o),0,null)},
ln:function ln(a,b,c){this.c=a
this.d=b
this.a=c},
r4:function r4(){},
oj:function oj(){},
ok:function ok(){},
pi(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kB()===B.P){a5=A.fa(a5)
a6=A.fa(a6)
a7=A.fa(a7)
a8=A.fa(a8)}a5^=b3[0]
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
if($.kB()===B.P){a1=A.fa(a1)
a2=A.fa(a2)
a3=A.fa(a3)
a4=A.fa(a4)}a9.$flags&2&&A.H(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
Gb(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge4(),h=B.cV.h(0,i.gm(0))
if(h==null)throw A.b(A.Q("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.DC(B.y.gab(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.H(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.kB()===B.P)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.ak(m,k)
if(n===0)j=A.G6((j<<8|j>>>24)>>>0)^B.cw[B.c.iO(m,k)-1]<<24
else if(o&&n===4)j=A.G6(j)
r[m]=(j^r[m-k])>>>0}return r},
G6(a){return(B.m[a>>>24&255]<<24|B.m[a>>>16&255]<<16|B.m[a>>>8&255]<<8|B.m[a&255])>>>0},
fa(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qQ:function qQ(){},
r5:function r5(){},
z4:function z4(){},
mW:function mW(a,b){this.a=a
this.b=b},
kX:function kX(){},
kY:function kY(){},
kZ:function kZ(){},
l_:function l_(){},
pM:function pM(){},
G7(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mW("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.eh)){s=J.a0(a)
if(B.a.S(s,"TypeError: "))s=B.a.ae(s,11)
a=new A.eh(s,b.b)}return a},
FV(a,b,c){A.E_(A.G7(a,c),b)},
KE(a,b){return new A.dk(new A.AS(a,b),t.fb)},
i1(a,b,c){return A.Lz(a,b,c)},
Lz(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
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
a1.f=new A.B0(e)
a1.r=new A.B1(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.a(A.a5(c.read(),k),$async$i1)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.D(b)
l=A.ad(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.G7(m,a)
k=l
j=a1.b
if(j>=4)A.t(a1.bF())
if((j&1)!==0){j=a1.gaL()
j.aH(d,k==null?B.Q:k)}s=15
return A.a(a1.q(),$async$i1)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.tR()
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
return A.a((g==null?e.a=new A.aI(new A.w($.C,j),i):g).a,$async$i1)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i1,r)},
l4:function l4(a){this.b=!1
this.c=a},
pP:function pP(a){this.a=a},
AS:function AS(a,b){this.a=a
this.b=b},
B0:function B0(a){this.a=a},
B1:function B1(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a){this.a=a},
pR:function pR(a){this.a=a},
DT(a,b){return new A.eh(a,b)},
eh:function eh(a,b){this.a=a
this.b=b},
mq:function mq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
IO(a,b){var s=t.N,r=A.l([],t.e8),q=$.Dr()
if(!q.b.test(a))A.t(A.az(a,"method","Not a valid method"))
return new A.vf(A.v(s,s),r,a,b,A.dH(new A.kZ(),new A.l_(),s,s))},
vf:function vf(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
vg:function vg(a,b){this.a=a
this.b=b},
J9(a,b){var s=new Uint8Array(0),r=$.Dr()
if(!r.b.test(a))A.t(A.az(a,"method","Not a valid method"))
r=t.N
return new A.wL(s,a,b,A.dH(new A.kZ(),new A.l_(),r,r))},
wL:function wL(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jv:function jv(){},
nj:function nj(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
HM(a){return a.toLowerCase()},
il:function il(a,b,c){this.a=a
this.c=b
this.$ti=c},
IG(a){return A.Nl("media type",a,new A.uY(a))},
Co(a,b,c){var s=t.N
if(c==null)s=A.v(s,s)
else{s=new A.il(A.Mg(),A.v(s,t.af),t.fo)
s.D(0,c)}return new A.fO(a.toLowerCase(),b.toLowerCase(),new A.cS(s,t.ph))},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
uY:function uY(a){this.a=a},
v_:function v_(a){this.a=a},
uZ:function uZ(){},
MC(a){var s
a.mM($.Hm(),"quoted string")
s=a.gkj().h(0,0)
return A.GI(B.a.A(s,1,s.length-1),$.Hl(),new A.Bp(),null)},
Bp:function Bp(){},
pL:function pL(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
jd:function jd(){},
vB:function vB(a,b){this.a=a
this.b=b},
vC:function vC(a){this.a=a},
mJ:function mJ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
vX:function vX(){},
Af:function Af(a){this.a=a},
vO:function vO(){},
fY(a,b){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aR("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"updated")
if(typeof s!="string"||typeof r!="string")throw A.b(A.aR("Record missing id/updated."))
q=a.h(0,"store")
if(!a.I("store")||q==null)p=""
else{if(typeof q!="string")throw A.b(A.aR('Record field "store" is present but not a string.'))
p=q}o=a.h(0,"data")
if(!a.I("data")||o==null)n=B.j
else if(j.b(o))n=A.bl(o,t.N,t.X)
else throw A.b(A.aR('Record field "data" is present but not an object.'))
m=a.h(0,"imgs")
if(!a.I("imgs")||m==null)l=B.u
else if(t.j.b(m)){for(j=J.L(m),k=0;k<j.gm(m);++k)if(typeof j.h(m,k)!="string")throw A.b(A.aR('Record field "imgs"['+k+"] is present but not a string."))
j=j.f_(m,t.N)
l=j.cO(j)}else throw A.b(A.aR('Record field "imgs" is present but not a list.'))
return new A.d9(s,p,r,n,l)},
vF:function vF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vN:function vN(a){this.a=a},
vM:function vM(){},
vI:function vI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vJ:function vJ(){},
vK:function vK(a,b){this.a=a
this.b=b},
vL:function vL(){},
vG:function vG(a,b){this.a=a
this.b=b},
vH:function vH(){},
IU(a,b,c,d,e){var s=A.ba(null,t.H)
return new A.vP(b,c,new A.vW(a,B.S,null),e,d,s)},
IV(a){return 0.5+B.as.n1()},
jf:function jf(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
vP:function vP(a,b,c,d,e,f){var _=this
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
vW:function vW(a,b,c){this.a=a
this.b=b
this.c=c},
vS:function vS(){},
vT:function vT(a,b,c){this.a=a
this.b=b
this.c=c},
vQ:function vQ(a,b,c){this.a=a
this.b=b
this.c=c},
vR:function vR(a){this.a=a},
vU:function vU(a){this.a=a},
vV:function vV(a){this.a=a},
Ag:function Ag(a,b){this.a=a
this.b=null
this.c=b},
Io(a,b,c){return new A.cH(a,b,c)},
iF(a,b){return new A.dB(a)},
es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m_:function m_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a){this.a=a},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
vD:function vD(a){this.a=a},
vE:function vE(a){this.a=a},
I0(c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9="recordId",b0="field",b1="imgs",b2="name",b3="expectedSha256",b4="allowVolatileBlobs",b5="session",b6="index",b7="refId",b8="token",b9="id",c0="spec",c1="store"
switch(c2){case"open":s=c3.h(0,"stores")
r=c3.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.N("Malformed open payload."))
q=A.l([],t.d)
for(p=J.L(s),o=0;o<p.gm(s);++o)q.push(A.DW(p.h(s,o),"stores["+o+"]"))
p=t.N
p=A.v(p,p)
for(n=r.ga7(),n=n.gu(n);n.k();){m=n.gn()
p.j(0,J.a0(m.a),A.Db(m.b,"fingerprint"))}return new A.mB(q,p)
case"capabilities":return B.bD
case"health":return B.bG
case"close":return B.bE
case"fileBeginUpload":l=c3.h(0,"size")
if(!A.av(l))throw A.b(A.N("Malformed fileBeginUpload payload."))
return new A.lH(A.aS(c3),A.b9(c3,a9),A.pe(c3.h(0,b0),b0,b1),A.pe(c3.h(0,b2),b2,"blob.bin"),l,A.dp(c3.h(0,b3),b3),A.e6(c3.h(0,b4),b4,!1))
case"fileChunk":k=c3.h(0,"chunk")
if(!t.p.b(k))throw A.b(A.N("Malformed fileChunk payload."))
return new A.lI(A.b9(c3,b5),k)
case"fileFinish":return new A.lM(A.b9(c3,b5))
case"fileAbort":return new A.lG(A.b9(c3,b5))
case"filesList":return new A.lV(A.aS(c3),A.b9(c3,a9),A.pe(c3.h(0,b0),b0,b1))
case"fileOpen":return new A.lP(A.aS(c3),A.b9(c3,a9),A.pe(c3.h(0,b0),b0,b1),A.FR(c3.h(0,b6),b6,0),A.dp(c3.h(0,b7),b7))
case"fileCredit":j=c3.h(0,"bytes")
if(!A.av(j))throw A.b(A.N("Malformed fileCredit payload."))
return new A.lK(A.b9(c3,"stream"),j)
case"fileClose":return new A.lJ(A.b9(c3,"stream"))
case"fileRemove":return new A.lT(A.aS(c3),A.b9(c3,a9),A.pe(c3.h(0,b0),b0,b1),A.FR(c3.h(0,b6),b6,0),A.dp(c3.h(0,b7),b7))
case"fileGc":i=c3.h(0,"blobGraceMs")
h=c3.h(0,"tmpGraceMs")
if(!A.av(i)||!A.av(h))throw A.b(A.N("Malformed fileGc payload."))
return new A.lN(i,h)
case"fileEnforceStorageCap":g=c3.h(0,"maxBytes")
if(!A.av(g))throw A.b(A.N("Malformed fileEnforceStorageCap payload."))
return new A.lA(g)
case"fileStorageStatus":return B.bS
case"syncStart":f=c3.h(0,"baseUrl")
if(typeof f!="string")throw A.b(A.N("Malformed syncStart payload."))
return new A.nt(f,A.dp(c3.h(0,"scopeId"),"scopeId"),A.dp(c3.h(0,b8),b8))
case"syncStop":return B.bX
case"syncNow":return B.bT
case"syncPause":return B.bU
case"syncResume":return B.bV
case"syncUpdateAuth":return new A.nz(A.dp(c3.h(0,b8),b8))
case"syncSetConnectivity":e=c3.h(0,"online")
if(!A.by(e))throw A.b(A.N("Malformed syncSetConnectivity payload."))
return new A.ns(e)
case"syncStatus":return B.bW
case"get":return new A.lW(A.aS(c3),A.b9(c3,b9),A.cF(c3))
case"rows":d=c3.h(0,"ids")
if(!t.j.b(d))throw A.b(A.N("Malformed rows payload."))
return new A.mZ(A.aS(c3),A.G9(d,"ids"),A.cF(c3))
case"mutate":return new A.mr(A.aS(c3),A.KS(c3.h(0,"mutation")),A.cF(c3))
case"query":return new A.mR(A.aS(c3),A.eH(c3.h(0,c0)),A.cF(c3))
case"count":return new A.lk(A.aS(c3),A.eH(c3.h(0,c0)),A.cF(c3))
case"countDistinct":return new A.lj(A.aS(c3),A.b9(c3,b0),A.eH(c3.h(0,c0)),A.cF(c3))
case"distinct":q=A.aS(c3)
p=A.b9(c3,b0)
n=c3.h(0,c0)
return new A.lw(q,p,A.eH(n==null?B.j:n),A.cF(c3))
case"ids":return new A.m0(A.aS(c3),A.eH(c3.h(0,c0)),A.cF(c3))
case"aggregate":c=c3.h(0,"fn")
b=A.Cf(new A.am(B.cF,new A.qL(c),t.gx))
if(b==null)throw A.b(A.N("Unknown aggregate: "+A.r(c)))
return new A.kK(A.aS(c3),b,A.b9(c3,b0),A.eH(c3.h(0,c0)),A.cF(c3))
case"explain":return new A.lD(A.aS(c3),A.eH(c3.h(0,c0)),A.cF(c3))
case"search":return new A.n4(A.aS(c3),A.Jg(c3.h(0,c0)),A.cF(c3))
case"txBegin":a=c3.h(0,"readOnly")
if(!A.by(a))throw A.b(A.N("Malformed txBegin payload."))
a0=c3.h(0,"durability")
if(a0==null)a1=B.bm
else if(typeof a0=="string"){q=A.Cf(new A.am(B.cS,new A.qM(a0),t.mE))
if(q==null)q=A.t(A.N("Unknown tx durability: "+a0))
a1=q}else{q=A.t(A.N("Malformed txBegin durability."))
a1=q}return new A.nD(a,a1)
case"txCommit":case"txRollback":a2=c3.h(0,b5)
if(typeof a2!="string")throw A.b(A.N("Malformed tx payload."))
return c2==="txCommit"?new A.nE(a2):new A.nG(a2)
case"txSavepoint":case"txRollbackTo":case"txRelease":a2=c3.h(0,b5)
a3=c3.h(0,b2)
if(typeof a2!="string"||typeof a3!="string")throw A.b(A.N("Malformed savepoint payload."))
A:{if("txSavepoint"===c2){q=new A.nI(a2,a3)
break A}if("txRollbackTo"===c2){q=new A.nH(a2,a3)
break A}q=new A.nF(a2,a3)
break A}return q
case"watchOne":return new A.nX(A.aS(c3),A.b9(c3,b9))
case"watch":return new A.nY(A.aS(c3),A.eH(c3.h(0,c0)))
case"watchCancel":a4=c3.h(0,"subscription")
if(typeof a4!="string")throw A.b(A.N("Malformed watchCancel payload."))
return new A.nW(a4)
case"analyze":return new A.kM(A.dp(c3.h(0,c1),c1))
case"walCheckpoint":return B.bZ
case"vacuum":return B.bY
case"pruneOutbox":return B.bR
case"compact":a5=c3.h(0,c1)
a6=c3.h(0,"olderThanMs")
if(typeof a5!="string"||!A.av(a6))throw A.b(A.N("Malformed compact payload."))
return new A.lb(a5,a6)
case"runMaintenance":a7=c3.h(0,"compactOlderThanMs")
if(!A.av(a7))throw A.b(A.N("Malformed runMaintenance payload."))
return new A.n_(a7)
case"conflictsList":return new A.lg(A.dp(c3.h(0,c1),c1))
case"conflictGet":return new A.lf(A.aS(c3),A.b9(c3,b9))
case"conflictsResolve":a8=c3.h(0,"merged")
if(!t.f.b(a8))throw A.b(A.N("Malformed conflictsResolve payload."))
return new A.mX(A.aS(c3),A.b9(c3,b9),A.DW(a8,"merged"))
case"conflictsAcceptLocal":return new A.kH(A.aS(c3),A.b9(c3,b9))
case"conflictsAcceptRemote":return new A.kI(A.aS(c3),A.b9(c3,b9))
case"conflictsWatch":return new A.li(A.dp(c3.h(0,c1),c1))
default:return null}},
aS(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.N("Malformed store name."))
return s},
b9(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.N('Malformed field "'+b+'".'))
return s},
cF(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.N("Malformed session id."))
return s},
DW(a,b){var s,r,q
if(t.f.b(a)){s=A.v(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.N('Malformed field "'+b+'".'))},
MA(a){var s,r,q,p=J.a0(a),o=null
if(a instanceof A.dI){s=A.Ln(a)
p=a.a
if(a instanceof A.eQ&&a.b!=null)o=A.m(["field",a.b],t.N,t.X)
else if(a instanceof A.eP){o=A.m(["field",a.b],t.N,t.X)
try{o.j(0,"value",A.fd(a.c))}catch(r){if(!(A.D(r) instanceof A.eR))throw r}}else if(a instanceof A.eB)o=A.m(["field",a.b],t.N,t.X)}else if(a instanceof A.bo){s=A.LP(a)
p=a.a
if(a instanceof A.da&&a.b!=null)o=A.m(["retryAfter",a.b],t.N,t.X)}else if(a instanceof A.eR){p=a.a
s="WireException"}else if(a instanceof A.bm){p=a.a
s="StateError"}else if(t.b0.b(a)){p=A.r(a.d)
s="RangeError"}else if(a instanceof A.bB){p=A.r(a.d)
s="ArgumentError"}else s="unknown"
q=A.v(t.N,t.X)
q.j(0,"type",s)
q.j(0,"message",p)
if(o!=null)q.j(0,"details",o)
return q},
Ln(a){var s
A:{if(a instanceof A.eQ){s="ValidationException"
break A}if(a instanceof A.eP){s="UniqueConstraintException"
break A}if(a instanceof A.eB){s="NotNullConstraintException"
break A}if(a instanceof A.fq){s="CheckConstraintException"
break A}if(a instanceof A.fZ){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fI){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hq){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fK){s="FtsUnavailableError"
break A}if(a instanceof A.eJ){s="SchemaRegistrationError"
break A}if(a instanceof A.h8){s="SchemaTooNewError"
break A}if(a instanceof A.cN){s="StorageError"
break A}if(a instanceof A.h4){s="RecordNotFoundException"
break A}if(a instanceof A.hf){s="StaleCursorError"
break A}if(a instanceof A.fR){s="MissingLimitError"
break A}if(a instanceof A.fu){s="ConflictBlockedError"
break A}if(a instanceof A.em){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.h3){s="ReadOnlyTxError"
break A}throw A.b(A.eI(u.P))}return s},
LP(a){var s
A:{if(a instanceof A.eO){s="TransientNetworkError"
break A}if(a instanceof A.da){s="ServerBusyError"
break A}if(a instanceof A.ha){s="ServerError"
break A}if(a instanceof A.bM){s="AuthError"
break A}if(a instanceof A.cj){s="ForbiddenError"
break A}if(a instanceof A.cl){s="NotFoundError"
break A}if(a instanceof A.eD){s="PayloadError"
break A}if(a instanceof A.eF){s="ProtocolError"
break A}if(a instanceof A.en){s="DuplicateIdError"
break A}if(a instanceof A.dv){s="BatchFailedError"
break A}if(a instanceof A.nn){s="SyncIdentityError"
break A}throw A.b(A.eI(u.P))}return s},
KZ(a){var s
A:{if(a instanceof A.j_){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.j2){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.j0){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.j3){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iX){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iY){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iW){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.j1){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iZ){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.eI(u.P))}return s},
KS(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.N("Malformed mutation payload."))
s=t.N
r=a.aT(0,new A.AY(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.j_(A.ph(r.h(0,n),n))
case"upsert":return new A.j2(A.ph(r.h(0,n),n))
case"putAll":return new A.j0(A.G5(r.h(0,m),m))
case"upsertAll":return new A.j3(A.G5(r.h(0,m),m))
case"patch":return new A.iX(A.B2(r.h(0,l),l),A.ph(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.N("Malformed patchAll patches."))
k=A.v(s,t.G)
for(s=p.ga7(),s=s.gu(s);s.k();){o=s.gn()
k.j(0,J.a0(o.a),A.ph(o.b,"patches"))}return new A.iY(k)
case"archive":return new A.iW(A.B2(r.h(0,l),l))
case"restore":return new A.j1(A.B2(r.h(0,l),l))
case"purge":return new A.iZ(A.B2(r.h(0,l),l))
default:throw A.b(A.N("Unknown mutation kind: "+A.r(q)))}},
B2(a,b){if(typeof a=="string")return a
throw A.b(A.N('Malformed mutation field "'+b+'".'))},
ph(a,b){var s,r,q
if(t.f.b(a)){s=A.v(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.N('Malformed mutation field "'+b+'".'))},
G5(a,b){var s,r
if(t.j.b(a)){s=A.l([],t.d)
for(r=J.E(a);r.k();)s.push(A.ph(r.gn(),b))
return s}throw A.b(A.N('Malformed mutation field "'+b+'".'))},
eH(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="predicate",d="includeArchived",c="includeHidden",b="backward",a=t.f
if(!a.b(a0))throw A.b(A.N("Malformed query spec."))
s=a0.aT(0,new A.wD(),t.N,t.z)
r=new A.wE()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.l([],t.ae)
if(p!=null&&!t.j.b(p))j.push(A.t(A.N("Malformed query orGroups.")))
else if(t.j.b(p))for(i=J.E(p);i.k();)j.push(r.$1(i.gn()))
if(!s.I(e)||s.h(0,e)==null)a=null
else a=a.b(s.h(0,e))?A.Cq(s.h(0,e)):A.t(A.N("Malformed query predicate."))
i=A.l([],t.gc)
if(o!=null&&!t.j.b(o))i.push(A.t(A.N("Malformed query order.")))
else if(t.j.b(o))for(h=J.E(o);h.k();)i.push(A.J5(h.gn()))
h=m==null?null:A.Da(m,"limit")
g=A.e6(s.h(0,"all"),"all",!1)
f=n==null?null:A.G9(n,"select")
return new A.wC(k,j,a,i,h,g,f,A.e6(s.h(0,d),d,!1),A.e6(s.h(0,c),c,!1),A.dp(l,"cursor"),A.e6(s.h(0,b),b,!1))},
Ew(a){var s,r,q,p,o,n,m,l,k="Malformed query condition."
if(!t.f.b(a))throw A.b(A.N(k))
s=a.aT(0,new A.wy(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.N(k))
p=A.Cf(new A.am(B.cx,new A.wz(q),t.mz))
if(p==null)throw A.b(A.N("Unknown query operator: "+q))
o=s.h(0,"values")
if(o!=null&&!t.j.b(o))throw A.b(A.N('Query condition "values" must be a list.'))
n=A.ku(s.h(0,"value"))
if(t.j.b(o)){m=[]
for(l=J.E(o);l.k();)m.push(A.ku(l.gn()))}else m=null
return new A.eG(r,p,n,m)},
Cq(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.N("Malformed predicate tree."))
s=a.aT(0,new A.w0(),t.N,t.z)
r=new A.w_()
switch(s.h(0,"kind")){case"leaf":return new A.iQ(A.Ew(s))
case"not":return new A.ja(A.Cq(s.h(0,"child")))
case"all":return new A.id(r.$1(s.h(0,q)))
case"any":return new A.ie(r.$1(s.h(0,q)))
default:throw A.b(A.N("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
J5(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.N(q))
s=a.aT(0,new A.wB(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.N(q))
return new A.mQ(r,A.e6(s.h(0,"desc"),"desc",!1))},
Jg(a){var s,r,q,p="limit",o="includeArchived",n="includeHidden"
if(!t.f.b(a))throw A.b(A.N("Malformed search spec."))
s=a.aT(0,new A.wT(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.N("Malformed search term."))
q=s.h(0,p)==null?null:A.Da(s.h(0,p),p)
return new A.wS(r,q,A.e6(s.h(0,"all"),"all",!1),A.e6(s.h(0,o),o,!1),A.e6(s.h(0,n),n,!1))},
I1(a){return new A.fy(a)},
I6(a){return new A.fz(a)},
Ip(a){return new A.fL(a)},
HI(a){return new A.fm(a)},
Ic(a){return new A.fC(a)},
fd(a){var s,r,q,p
if(a instanceof A.aO)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gf6().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.fd(r.gn()))
return s}if(t.f.b(a)){if(a.I("__lp_t")){s=t.N
r=A.v(s,t.X)
for(q=a.ga7(),q=q.gu(q);q.k();){p=q.gn()
r.j(0,J.a0(p.a),A.fd(p.b))}return A.m(["__lp_t","map","v",r],s,t.K)}s=A.v(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),A.fd(q.b))}return s}if(a==null||A.by(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.N("Value of type "+J.bZ(a).l(0)+" is not wire-safe."))},
ku(a){var s,r,q,p,o,n,m,l,k="Malformed bytes wire value.",j="Non-string map key on the wire: ",i=t.f
if(i.b(a)){r=a.h(0,"__lp_t")
q=J.dr(r)
if(q.P(r,"datetime")){s=a.h(0,"v")
if(A.av(s))return new A.aO(A.lt(s,0,!0),0,!0)
throw A.b(A.N("Malformed datetime wire value."))}if(q.P(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{i=B.ar.v(s)
return i}catch(p){if(t.Y.b(A.D(p)))throw A.b(A.N(k))
else throw p}throw A.b(A.N(k))}if(q.P(r,"map")){o=a.h(0,"v")
if(!i.b(o))throw A.b(A.N("Malformed map wire value."))
n=A.v(t.N,t.X)
for(i=o.ga7(),i=i.gu(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.N(j+A.r(m)))
n.j(0,m,A.ku(q.b))}return n}l=A.v(t.N,t.X)
for(i=a.ga7(),i=i.gu(i);i.k();){q=i.gn()
m=q.a
if(typeof m!="string")throw A.b(A.N(j+A.r(m)))
l.j(0,m,A.ku(q.b))}return l}if(t.j.b(a)){i=[]
for(q=J.E(a);q.k();)i.push(A.ku(q.gn()))
return i}return a},
N(a){return new A.eR(a)},
Db(a,b){if(typeof a=="string")return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
Da(a,b){if(A.av(a))return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
dp(a,b){if(a==null)return null
return A.Db(a,b)},
FR(a,b,c){if(a==null)return c
return A.Da(a,b)},
e6(a,b,c){if(a==null)return!1
if(A.by(a))return a
throw A.b(A.N('Malformed wire field "'+b+'".'))},
pe(a,b,c){if(a==null)return c
return A.Db(a,b)},
G9(a,b){var s,r,q,p='Malformed wire field "'
if(t.j.b(a)){s=A.l([],t.s)
for(r=J.L(a),q=0;q<r.gm(a);++q){if(typeof r.h(a,q)!="string")throw A.b(A.N(p+b+"["+q+']".'))
s.push(A.F(r.h(a,q)))}return s}throw A.b(A.N(p+b+'".'))},
qL:function qL(a){this.a=a},
qM:function qM(a){this.a=a},
le:function le(a,b,c,d,e,f,g,h,i){var _=this
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
la:function la(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lh:function lh(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
lR:function lR(a,b,c,d,e,f,g,h,i,j){var _=this
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
lH:function lH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lI:function lI(a,b){this.a=a
this.b=b},
lM:function lM(a){this.a=a},
lJ:function lJ(a){this.a=a},
lG:function lG(a){this.a=a},
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lK:function lK(a,b){this.a=a
this.b=b},
lT:function lT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lN:function lN(a,b){this.a=a
this.b=b},
lA:function lA(a){this.a=a},
ng:function ng(){},
lU:function lU(a,b){this.a=a
this.b=b},
lS:function lS(a){this.a=a},
fG:function fG(a){this.a=a},
lQ:function lQ(a){this.a=a},
fF:function fF(a){this.a=a},
fD:function fD(a){this.a=a},
hi:function hi(a){this.a=a},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vh:function vh(){},
j_:function j_(a){this.a=a},
j2:function j2(a){this.a=a},
j0:function j0(a){this.a=a},
j3:function j3(a){this.a=a},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a},
iW:function iW(a){this.a=a},
j1:function j1(a){this.a=a},
iZ:function iZ(a){this.a=a},
AY:function AY(){},
wC:function wC(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
wD:function wD(){},
wE:function wE(){},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wy:function wy(){},
wz:function wz(a){this.a=a},
aZ:function aZ(a,b){this.a=a
this.b=b},
cL:function cL(){},
w0:function w0(){},
w_:function w_(){},
iQ:function iQ(a){this.a=a},
ja:function ja(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
mQ:function mQ(a,b){this.a=a
this.b=b},
wB:function wB(){},
cB:function cB(a,b){this.a=a
this.b=b},
wS:function wS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wT:function wT(){},
mV:function mV(){},
mB:function mB(a,b){this.a=a
this.b=b},
l5:function l5(){},
lY:function lY(){},
l8:function l8(){},
lW:function lW(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function mr(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function mR(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m0:function m0(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lD:function lD(a,b,c){this.a=a
this.b=b
this.c=c},
n4:function n4(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
nD:function nD(a,b){this.a=a
this.b=b},
nE:function nE(a){this.a=a},
nG:function nG(a){this.a=a},
nI:function nI(a,b){this.a=a
this.b=b},
nH:function nH(a,b){this.a=a
this.b=b},
nF:function nF(a,b){this.a=a
this.b=b},
nX:function nX(a,b){this.a=a
this.b=b},
nY:function nY(a,b){this.a=a
this.b=b},
nW:function nW(a){this.a=a},
kM:function kM(a){this.a=a},
nV:function nV(){},
nT:function nT(){},
mN:function mN(){},
lb:function lb(a,b){this.a=a
this.b=b},
n_:function n_(a){this.a=a},
lg:function lg(a){this.a=a},
lf:function lf(a,b){this.a=a
this.b=b},
mX:function mX(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a,b){this.a=a
this.b=b},
kI:function kI(a,b){this.a=a
this.b=b},
li:function li(a){this.a=a},
ag:function ag(){},
fW:function fW(){},
ik:function ik(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
lZ:function lZ(a,b){this.a=a
this.b=b},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
fS:function fS(a){this.a=a},
h2:function h2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
fL:function fL(a){this.a=a},
fm:function fm(a){this.a=a},
fC:function fC(a){this.a=a},
h9:function h9(a){this.a=a},
n3:function n3(a,b){this.a=a
this.b=b},
fw:function fw(a){this.a=a},
fv:function fv(a){this.a=a},
hn:function hn(a){this.a=a},
hu:function hu(a){this.a=a},
h_:function h_(a){this.a=a},
ft:function ft(a){this.a=a},
eM:function eM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bp:function bp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nt:function nt(a,b,c){this.a=a
this.b=b
this.c=c},
ny:function ny(){},
no:function no(){},
np:function np(){},
nr:function nr(){},
nz:function nz(a){this.a=a},
ns:function ns(a){this.a=a},
nw:function nw(){},
nu:function nu(a){this.a=a},
nq:function nq(a){this.a=a},
nx:function nx(a){this.a=a},
nv:function nv(a){this.a=a},
kT:function kT(){},
eR:function eR(a){this.a=a},
ai(a){var s,r=new A.a2("")
A.cf(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
Dq(a){var s,r,q
for(s=new A.n0(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
KN(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.bR(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
cf(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.by(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.av(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.KN(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a6(b,h)
a.a+=r
return A.Dq(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.L(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.cf(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.l([],t.l5)
for(s=J.E(b.gK());s.k();){n=s.gn()
r=J.a0(n)
if(B.b.bO(o,new A.BT(r)))throw A.b(A.Q('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a4(r,n))}B.b.cm(o,new A.BU())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.q)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a6(k.a,h)
a.a+=j
i=A.Dq(j)
a.a+=":"
q=q+i+1+A.cf(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.Q("Cannot canonicalize value of type "+J.bZ(b).l(0),h))},
BT:function BT(a){this.a=a},
BU:function BU(){},
Jk(a){var s,r,q,p=A.af("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).ea(a)
if(p==null)return B.dk
s=p.b
r=s[1]
r.toString
r=A.aH(r)
q=s[2]
q.toString
q=A.aH(q)
s=s[3]
s=A.jg(s==null?"":s,null)
return new A.f3(r,q,s==null?0:s)},
EE(a,b,c){var s,r=A.Jk(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eL(a,b){return A.Jl(a,b)},
Jl(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eL=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b0("SELECT sqlite_version() AS v"),$async$eL)
case 3:g=d.V(c.bY(a2),"v")
g.toString
A.F(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b0("PRAGMA compile_options"),$async$eL)
case 4:j=d.R(new c.dW(b.c_(a2,new A.x2(),t.X),k),k.i("o.E"))
n=B.b.bO(j,new A.x3())
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
if(J.ec(l))m=A.a6(J.bY(J.bY(l).gaX()))
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
case 18:case 14:h=A.EE(g,3,37)
k=k&&J.x(m,"wal")
q=new A.nf(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eL,r)},
mI:function mI(a,b){this.a=a
this.b=b},
nf:function nf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x2:function x2(){},
x3:function x3(){},
im:function im(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
aU:function aU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a1:function a1(a,b){this.a=a
this.b=b},
q_:function q_(a,b){this.a=a
this.b=b},
q0:function q0(){},
q1:function q1(){},
DH(a){return new Uint8Array(A.b8(a))},
rD:function rD(){},
pz:function pz(a,b,c){this.b=a
this.c=b
this.d=c},
Dh(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cn
if(r===B.I){r=a.f
r.toString
r=!B.b.F(r,b)}else r=!1
if(r)return B.ct
return s
case 1:case 4:return!A.av(b)?B.co:s
case 2:return typeof b!="number"?B.cp:s
case 3:return!A.by(b)?B.cq:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cr:s
case 7:return!t.j.b(b)?B.cs:s}},
dq(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gd8(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.D4(n,a0.h(0,l),new Uint8Array(A.b8(B.e.v(q+l+"\x00"+e))),m))}k=A.v(h,g)
for(h=new A.aP(a0,A.n(a0).i("aP<1,2>")).gu(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.F(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ai(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
Go(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.D4(b,c,new Uint8Array(A.b8(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
LU(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gd8()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.D4(n,g.h(0,l),new Uint8Array(A.b8(B.e.v(q+l+"\x00"+f))),m))}k=A.v(t.N,t.X)
for(s=g.ga7(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.F(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ai(k))
a.push(c?1:0)
a.push(0)},
cd(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.m(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.a6(b.h(0,"id"))
f.j(0,n,A.FF(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.x(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.aw(k,null)
if(t.f.b(j))f.D(0,A.bl(j,h,g))}return f},
Mv(a,b,c,d){var s,r=A.l([],t.d)
for(s=J.E(b);s.k();)r.push(A.cd(a,s.gn(),c,d))
return r},
Mw(a,b,c,d,e){var s,r,q,p,o,n,m=A.l([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.q)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a4(p,a.fa(p)))}s=A.l([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.KR(o.gn(),m,r,c,e,n))
return s},
KR(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.FF(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
FF(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.A('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.hh("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.bZ(b).l(0)+"."))
r=B.o.f0(s.u6(B.ar.v(b),new Uint8Array(A.b8(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.T===q||B.V===q){p=A.aH(r)
break A}if(B.U===q){p=A.Mz(r)
break A}if(B.W===q||B.X===q){p=B.h.aw(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.x(b,1)
if(p===B.W||p===B.X){if(typeof b!="string")throw A.b(A.hh("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.bZ(b).l(0)+"."))
return B.h.aw(b,o)}return b},
D4(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.A('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.a0(b)
break
case 6:case 7:s=A.ai(b)
break
default:A.F(b)
s=b}r=d.uN(B.e.v(s),c)
return B.aq.gf6().v(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.ai(b)
default:return b}},
bg(a,b){var s,r,q,p,o,n="archived",m=a.gd8(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.q)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.ga7(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.F(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
Bb(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gd8(),i=A.l([],t.iE)
i.push(new A.a4("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a4(o,p.b===B.B?J.x(n,!0):n))}for(s=c.ga7(),s=s.gu(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.F(0,o))continue
i.push(new A.a4(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.di)
B.b.cm(i,new A.Bc())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.q)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a6(r.a,null)
a.a+=k
o=A.Dq(k)
a.a+=":"
m=m+o+1+A.cf(a,r.b)}a.a+="}"
return m+1},
d2:function d2(a,b){this.a=a
this.b=b},
Bc:function Bc(){},
DZ(a){if(a==null)return""
switch(a.a){case 0:return" OR ROLLBACK"
case 1:return" OR ABORT"
case 2:return" OR FAIL"
case 3:return" OR IGNORE"
case 4:return" OR REPLACE"}},
ld:function ld(a,b){this.a=a
this.b=b},
iu:function iu(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.e=_.d=null},
rA:function rA(){},
rz:function rz(){},
rB:function rB(){},
ry:function ry(a){this.a=a},
I5(a){return'"'+A.B(a,'"','""')+'"'},
I4(a,b){var s,r,q,p=a.a,o=J.L(p),n=b.a,m=J.L(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qo:function qo(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
it:function it(a){this.a=a},
rx:function rx(a){this.a=a},
rw:function rw(){},
rv:function rv(a){this.a=a},
ru:function ru(a,b){this.a=a
this.b=b},
rr:function rr(a){this.a=a},
rs:function rs(a){this.a=a},
rt:function rt(){},
ah(a,b){return new A.eQ(b,a)},
hh(a){return new A.cN(a)},
Cy(a){return new A.h4(a)},
EB(a){return new A.h8(a)},
aJ(a){return new A.eJ(a)},
rV(a){return new A.fK(a)},
CD(a){return new A.hf(a)},
El(a){return new A.fR(a)},
DV(a){return new A.fu(a)},
C5(a){return new A.em(a)},
GM(a,b){var s,r="UNIQUE constraint failed",q=J.a0(a),p=a instanceof A.c6,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.F(q,"PRIMARY KEY")&&!B.a.F(q,r)
else p=!0
if(p)return new A.fZ("PRIMARY KEY constraint violated.")
if(o===2067||B.a.F(q,r)){s=A.FJ(q,"UNIQUE constraint failed:")
p=b.h(0,s)
return new A.eP(s,p,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.F(q,"NOT NULL constraint failed")){p=A.FJ(q,"NOT NULL constraint failed:")
return new A.eB(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.F(q,"CHECK constraint failed")||o===275||n===275)return new A.fq("CHECK constraint violated.")
if(B.a.F(q,"FOREIGN KEY")||o===787||n===787)return new A.fI("FOREIGN KEY constraint violated.")
if(B.a.F(q,"database or disk is full"))return new A.cN("Database full: "+A.r(a))
return new A.cN("SQLite error: "+A.r(a))},
FJ(a,b){var s,r,q,p,o,n,m=B.a.bS(a,b)
if(m<0)return"?"
s=B.a.ae(a,m+b.length)
r=s.length
q=B.a.bS(s,",")
if(q>=0)r=q
p=B.a.bS(s,"(")
s=B.a.ck(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.dg(s,".")
s=B.a.ck(o>=0?B.a.ae(s,o+1):s)
if(B.a.S(s,'"')&&B.a.bR(s,'"')){n=B.a.A(s,1,s.length-1)
s=A.B(n,'""','"')}return s.length===0?"?":s},
dI:function dI(){},
eQ:function eQ(a,b){this.b=a
this.a=b},
eP:function eP(a,b,c){this.b=a
this.c=b
this.a=c},
eB:function eB(a,b){this.b=a
this.a=b},
fq:function fq(a){this.a=a},
fZ:function fZ(a){this.a=a},
fI:function fI(a){this.a=a},
cN:function cN(a){this.a=a},
h4:function h4(a){this.a=a},
h8:function h8(a){this.a=a},
eJ:function eJ(a){this.a=a},
hq:function hq(a){this.a=a},
fK:function fK(a){this.a=a},
hf:function hf(a){this.a=a},
fR:function fR(a){this.a=a},
fu:function fu(a){this.a=a},
em:function em(a){this.a=a},
h3:function h3(a){this.a=a},
iy:function iy(a){this.b=a},
E2(a){return A.po("lp_file_refs",new A.rF(a))},
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
rF:function rF(a){this.a=a},
uL:function uL(a,b){this.a=a
this.b=b},
uM:function uM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uO:function uO(a){this.a=a},
uP:function uP(a){this.a=a},
uQ:function uQ(a){this.a=a},
uR:function uR(a){this.a=a},
uS:function uS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uN:function uN(a,b){this.a=a
this.b=b},
LQ(){return new A.aO(Date.now(),0,!1)},
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
rN:function rN(a,b){this.f=a
this.r=b},
rQ:function rQ(){},
rO:function rO(a){this.a=a},
rP:function rP(){},
lL:function lL(){this.b=0
this.c=$},
l3(a){var s=$.Ds()
if(!s.b.test(a))throw A.b(A.Q('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
DM(a){return new A.fo(a)},
DN(a,b){return new A.l2(a,b)},
ky(a,b,c,d,e){return A.N4(a,b,c,d,e)},
N4(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$ky=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.l([],h)
f=new A.hy(A.cW(new A.oS(new A.BH(g),A.l([],h),t.mI)))
e=0
h=new A.cy(A.cz(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$ky)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.w)){j=new A.w($.C,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$ky)
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
return A.a(h.C(),$async$ky)
case 10:s=n.pop()
break
case 5:f.a.q()
if(c!=null&&!J.x(e,c))throw A.b(A.A("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.ar(B.b.gap(g).a)
A.l3(i)
if(b!=null&&i!==b)throw A.b(A.A("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.ni(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ky,r)},
pO:function pO(){},
fo:function fo(a){this.a=a},
l2:function l2(a,b){this.a=a
this.b=b},
ni:function ni(a){this.a=a},
BH:function BH(a){this.a=a},
iA:function iA(a){this.d=a},
rG:function rG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rI:function rI(a,b){this.a=a
this.b=b},
rJ:function rJ(a,b,c){this.a=a
this.b=b
this.c=c},
rH:function rH(a,b,c){this.a=a
this.b=b
this.c=c},
rK:function rK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rL:function rL(){},
N7(a,b,c){a.tY(!0,new A.BN(c),"lp_norm_"+b)},
Di(a,b,c,d){var s,r='"'+A.B(d,'"','""')+'"',q=b.a
if(q.gE(q))return c.length===0?r:c+"."+r
if(c.length===0)s=r
else s='"'+A.B(c,'"','""')+'".'+r
return'"'+A.B("lp_norm_"+a,'"','""')+'"('+s+")"},
BN:function BN(a){this.a=a},
uz:function uz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=e
_.y=f
_.at=g
_.ax=h},
Ix(a){var s=A.dQ(null,null,t.fq),r=t.N
s=new A.tE(a,s,A.v(r,t.g8),A.v(r,t.dz),new A.rN(A.ME(),A.v(r,t.f6)),A.v(r,t.oX))
s.oF(a)
return s},
BG(a){var s,r,q,p
A:{if(a instanceof A.iQ){s=A.Lw(a.a)
break A}if(a instanceof A.ja){s=new A.c3(A.BG(a.a))
break A}if(a instanceof A.id){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.BG(r[p]))
s=new A.du(s)
break A}if(a instanceof A.ie){r=a.a
s=A.l([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.BG(r[p]))
s=new A.cZ(s)
break A}throw A.b(A.eI(u.P))}return s},
Lw(a){var s,r,q,p,o=null,n="isNull",m=a.a,l=a.b
switch(l.a){case 0:s=a.c
if(s==null)return new A.aj(m,n,B.n)
return new A.aj(m,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.Q("neq(null) matches no rows; use isNotNull.",o))
return new A.c3(new A.aj(m,"eq",[s]))
case 2:case 3:case 4:case 5:r=a.c
if(r==null)throw A.b(A.ah('"'+l.b+'" does not accept null \u2014 use isNull().',o))
return new A.aj(m,l.b,[r])
case 6:q=a.d
if(q==null)q=B.n
if(B.b.F(q,o))throw A.b(A.ah("inValues does not accept null \u2014 use isNull().",o))
return new A.aj(m,"inValues",q)
case 7:p=a.d
if(p==null)p=B.n
if(p.length!==2)throw A.b(A.Q("between requires exactly two values.",o))
return new A.aj(m,"between",p)
case 8:return new A.aj(m,"startsWith",[a.c])
case 9:return new A.aj(m,"endsWith",[a.c])
case 10:return new A.aj(m,"contains",[a.c])
case 11:return new A.aj(m,n,B.n)
case 12:return new A.c3(new A.aj(m,n,B.n))}},
KV(){return Date.now()},
pb(a){var s,r,q
if(t.G.b(a)){s=A.v(t.N,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.pb(q.b))}return s}if(t.f.b(a)){s=A.v(t.z,t.X)
for(r=a.ga7(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.pb(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.pb(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b8(a))
return a},
d1(a,b,c,d,e,f,g,h,i){var s=null,r=B.D,q=null,p=null,o=B.S
return A.Iz(a,b,c,d,e,f,g,h,i)},
Iz(b0,b1,b2,b3,b4,b5,b6,b7,b8){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
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
return A.a(A.eL(a7,b6),$async$d1)
case 8:n=c0
i=0
case 9:if(!(i<3)){s=11
break}m=B.cC[i]
s=12
return A.a(a7.O(m),$async$d1)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cT[i]
s=16
return A.a(a7.O(l),$async$d1)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a4
if(f==null)f=A.MW()
e=a5
d=a3
c=a6
b=new A.mG()
a=new A.md(b5,h,g,b,b4,b2,b8,e,b0,b3,a2,f,A.v(t.N,t.nv),d,c,new A.q_(A.dQ(null,null,t.iv),A.dQ(null,null,t.oZ)))
f=new A.yf(A.ba(null,t.H),b.gwr())
a.x=f
c=a.a=new A.uz(a,h,g,f,b,e,d,c)
a.b=new A.xw(c)
a.c=new A.vi()
a.d=new A.wK()
c=A.Ix(c)
a.e!==$&&A.ce()
a.e=c
c=$.BW()
a.cx!==$&&A.ce()
a.cx=new A.vu(a,c)
a.cy!==$&&A.ce()
a.cy=new A.vp(a,c)
a.db!==$&&A.ce()
a.db=new A.qB(a)
a.dx!==$&&A.ce()
a.dx=new A.uL(a,b0)
k=a
s=17
return A.a(A.me(a7,k.CW),$async$d1)
case 17:h=b7.length,i=0
case 18:if(!(i<b7.length)){s=20
break}j=b7[i]
s=21
return A.a(k.aQ(j),$async$d1)
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
cI(a,b){return A.Iy(a,b)},
Iy(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
var $async$cI=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:s=b===B.bb?2:3
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
me(a,b){var s=0,r=A.h(t.H),q,p
var $async$me=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.cj("lp_migrations","version = ?",[1]),$async$me)
case 3:if(p.ec(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$me)
case 4:case 1:return A.e(q,r)}})
return A.f($async$me,r)},
f5:function f5(){},
zV:function zV(a){this.a=a},
oZ:function oZ(a,b,c,d,e){var _=this
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
tE:function tE(a,b,c,d,e,f){var _=this
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
u3:function u3(a){this.a=a},
u4:function u4(){},
u5:function u5(a,b){this.a=a
this.b=b},
u6:function u6(){},
uh:function uh(a,b){this.a=a
this.b=b},
us:function us(){},
ut:function ut(a,b){this.a=a
this.b=b},
uu:function uu(a,b){this.a=a
this.b=b},
uv:function uv(a,b){this.a=a
this.b=b},
uw:function uw(a,b){this.a=a
this.b=b},
ux:function ux(a,b){this.a=a
this.b=b},
uy:function uy(a,b){this.a=a
this.b=b},
u7:function u7(){},
u8:function u8(){},
u9:function u9(){},
ua:function ua(){},
ub:function ub(){},
uc:function uc(){},
ud:function ud(a){this.a=a},
ue:function ue(a){this.a=a},
uf:function uf(){},
ug:function ug(){},
ui:function ui(){},
uj:function uj(a){this.a=a},
uk:function uk(){},
ul:function ul(){},
um:function um(){},
un:function un(){},
uo:function uo(){},
up:function up(a){this.a=a},
uq:function uq(a){this.a=a},
ur:function ur(a,b){this.a=a
this.b=b},
tQ:function tQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tR:function tR(){},
tS:function tS(a,b,c){this.a=a
this.b=b
this.c=c},
tT:function tT(){},
tW:function tW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tX:function tX(){},
tH:function tH(a){this.a=a},
tF:function tF(a,b,c){this.a=a
this.b=b
this.c=c},
tG:function tG(a){this.a=a},
tV:function tV(a){this.a=a},
tU:function tU(a){this.a=a},
u0:function u0(a,b){this.a=a
this.b=b},
u1:function u1(a,b,c){this.a=a
this.b=b
this.c=c},
u2:function u2(a,b){this.a=a
this.b=b},
tL:function tL(a){this.a=a},
tM:function tM(a){this.a=a},
tN:function tN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tP:function tP(a,b){this.a=a
this.b=b},
tO:function tO(a,b){this.a=a
this.b=b},
tY:function tY(a){this.a=a},
tZ:function tZ(a){this.a=a},
u_:function u_(a,b){this.a=a
this.b=b},
tK:function tK(a,b){this.a=a
this.b=b},
tI:function tI(){},
tJ:function tJ(){},
nh:function nh(a,b,c){this.a=a
this.c=b
this.e=c},
vY:function vY(a){this.a=a},
md:function md(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
uA:function uA(a,b){this.a=a
this.b=b},
uD:function uD(a){this.a=a},
uC:function uC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uB:function uB(){},
oz:function oz(){},
fP(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fP=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a_(h).i("am<1>")
f=A.R(new A.am(h,new A.vc(c,b),g),g.i("o.E"))
B.b.cm(f,new A.vd())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.CW,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aJ('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jt()
$.kC()
j.az()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aQ(a,b,m),$async$fP)
case 8:s=6
break
case 7:s=9
return A.a(A.mn(a,b,m),$async$fP)
case 9:case 6:if(j.b==null)j.b=$.mL.$0()
s=10
return A.a(A.fQ(i,j.gmI(),o,q+l,p,l),$async$fP)
case 10:case 3:f.length===h||(0,A.q)(f),++n,o=l
s=2
break
case 4:h=b.b
if(c<h&&o!==h)throw A.b(A.aJ('Missing migration steps for "'+g+'": migrated to v'+o+" but expected v"+h+"."))
s=11
return A.a(i.L("lp_stores",A.m(["schema_ver",h],t.N,t.X),"store = ?",[g]),$async$fP)
case 11:return A.e(null,r)}})
return A.f($async$fP,r)},
fQ(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p
var $async$fQ=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:p=A
s=2
return A.a(a.b0("SELECT MAX(version) AS m FROM lp_migrations"),$async$fQ)
case 2:q=p.fe(h)
if(q==null)q=0
s=3
return A.a(a.aC(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fQ)
case 3:return A.e(null,r)}})
return A.f($async$fQ,r)},
mn(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$mn=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b0("PRAGMA table_info("+('"'+A.B(k,'"','""')+'"')+")"),$async$mn)
case 2:i=h.d3(new g.dW(f.c_(e,new A.v8(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.Dt()
if(!m.b.test(n))A.t(A.aJ('Field "'+n+u.Z))
if(o.c)throw A.b(A.aJ('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.F(0,n)){s=4
break}m=A.B(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.B(n,'"','""')+'"')+" "+o.gkQ()),$async$mn)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.q)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$mn,r)},
aQ(a,b,c){return A.IK(a,b,c)},
IK(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aQ=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.C5('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.it(b0.w).jR(b1)
j=A.IN(b0.f,a2,a3)
p=4
s=7
return A.a(A.va(a7,l),$async$aQ)
case 7:i=b4
s=8
return A.a(b0.hF(j),$async$aQ)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.C5('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.mp(a7,m),$async$aQ)
case 9:g=b4
s=10
return A.a(A.mp(a7,n),$async$aQ)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.B(m,'"','""')+'"')),$async$aQ)
case 13:a0=a9.fe(b4)
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
return A.a(b0.hO(j),$async$aQ)
case 19:case 18:s=20
return A.a(A.mo(a7,l,"rebuilding"),$async$aQ)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.B(j,"'","''")+"'"),$async$aQ)
case 21:a3=k.b
a4=A.B(n,'"','""')
d=B.a.kw(a3,'"'+a4+'"','"'+A.B(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aQ)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ai("SELECT rowid, * FROM "+('"'+A.B(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aQ)
case 25:b=b4
if(J.bA(b)){s=24
break}s=26
return A.a(a7.a2(new A.vb(b,b1,b0,b2,m),a3),$async$aQ)
case 26:a4=J.V(J.px(b),"rowid")
a4.toString
c=A.aq(a4)
if(J.as(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.B(n,'"','""')+'"')),$async$aQ)
case 27:a5=a9.fe(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.B(m,'"','""')+'"')),$async$aQ)
case 28:e=a9.fe(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.A('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
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
a3=A.D(a8)
if(a3 instanceof A.em)throw a8
else if(a3 instanceof A.c6){a1=a3
throw A.b(A.C5('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
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
case 5:case 3:q.length===p||(0,A.q)(q),++o
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
case 12:case 10:n.length===m||(0,A.q)(n),++o
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
l=m.$ti.i("X<I.E,k>")
k=new A.X(m,A.pm(),l).B(0,", ")
j=new A.X(m,new A.v9(c,q),l).B(0,", ")
q=A.B(n,'"','""')
s=16
return A.a(b.O("INSERT INTO "+('"'+q+'"')+"(rowid, "+k+") SELECT rowid, "+j+" FROM "+('"'+A.B(p,'"','""')+'"')),$async$cK)
case 16:case 14:q=c.a
h=A
s=17
return A.a(b.b0("SELECT COUNT(*) c FROM "+('"'+A.B(q,'"','""')+'"')),$async$cK)
case 17:i=h.fe(a0)
if((i==null?0:i)!==f)throw A.b(A.A('Post-rebuild verification of "'+q+'" failed.'))
s=18
return A.a(A.mo(b,e,"done"),$async$cK)
case 18:return A.e(null,r)}})
return A.f($async$cK,r)},
mp(a,b){var s=0,r=A.h(t.y),q,p
var $async$mp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ai("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$mp)
case 3:q=p.ec(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mp,r)},
IN(a,b,c){var s=null,r=$.ic(),q=r.ud(a),p=A.dO(a,r.a).gjN()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.mY(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
IM(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.ah('Field "'+s+'" is required.',s))}if(b==null)return
r=A.Dh(a,b)
if(r!=null)throw A.b(A.ah(A.IJ(a,b,r),a.a))},
IL(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
A.IM(p,b.h(0,p.a))}},
IJ(a,b,c){var s,r=a.a,q=J.bZ(b)
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
va(a,b){var s=0,r=A.h(t.x),q,p,o
var $async$va=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.n9("lp_meta",A.l(["v"],t.s),"k = ?",[b]),$async$va)
case 3:p=d
o=J.L(p)
q=o.gE(p)?null:A.a6(J.V(o.gH(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$va,r)},
mo(a,b,c){var s=0,r=A.h(t.H)
var $async$mo=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cd(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.R),$async$mo)
case 2:return A.e(null,r)}})
return A.f($async$mo,r)},
KW(){return Date.now()},
vc:function vc(a,b){this.a=a
this.b=b},
vd:function vd(){},
v8:function v8(){},
vb:function vb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v9:function v9(a,b){this.a=a
this.b=b},
vi:function vi(){},
mG:function mG(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
uE:function uE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ao:function Ao(){},
wA:function wA(a,b){this.a=a
this.b=b},
kv(a){var s=A.B(a,"\\","\\\\")
s=A.B(s,"%","\\%")
return A.B(s,"_","\\_")},
D3(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.aj){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.t(A.az(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.az(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.az(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.az(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c3){A.D3(a.a)
break A}p=a instanceof A.du
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.az(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.q)(n),++m)A.D3(n[m])}break A}},
AV(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.aj)return A.FD(a,!1,b)
if(a instanceof A.c3){s=a.a
r=A.AV(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.cZ||s instanceof A.c3){s=new A.a4("NOT "+q,p)
break A}s=new A.a4("NOT ("+q+")",p)
break A}return s}if(a instanceof A.du){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){l=A.AV(s[m],!1)
o.push(l.a)
B.b.D(p,l.b)}k=B.b.B(o," AND ")
return new A.a4(b?k:"("+k+")",p)}if(a instanceof A.cZ){o=A.l([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){j=A.KP(s[m])
o.push(j.a)
B.b.D(p,j.b)}return new A.a4("("+B.b.B(o," OR ")+")",p)}throw A.b(A.eI(u.M))},
KP(a){var s
A:{if(a instanceof A.aj){s=A.FD(a,!0,!1)
break A}s=A.AV(a,!1)
break A}return s},
FD(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.B(a.a,'"','""')+'"',n=A.R(a.c,t.X),m=a.b
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
n[0]=A.kv(A.F(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kv(A.F(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kv(A.F(r))+"%"
break
default:throw A.b(A.az(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a4(q?"("+s+")":s,n)},
d6:function d6(){},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a){this.a=a},
du:function du(a){this.a=a},
cZ:function cZ(a){this.a=a},
J4(a,b){var s,r=$.h1.G(0,a)
if(r!=null){$.h1.j(0,a,r)
return r}s=b.$0()
if($.h1.a>=512)$.h1.G(0,new A.T($.h1,A.n($.h1).i("T<1>")).gH(0))
$.h1.j(0,a,s)
return s},
b0:function b0(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
mP:function mP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
wx:function wx(a,b,c){this.a=a
this.b=b
this.c=c},
ws:function ws(){},
wt:function wt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wu:function wu(a){this.a=a},
wv:function wv(){},
ww:function ww(){},
Jf(a){var s,r,q=B.a.ck(a)
if(q.length===0)return
s=!0
if(!B.a.F(q,'"')){r=A.af("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.af("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.ah("Invalid search term: "+a,null))},
Je(a){var s,r,q,p
for(s=B.a.cS(a,A.af("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
if(p.length!==0&&new A.jl(p).gm(0)<3)throw A.b(A.ah('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cM:function cM(a,b){this.a=a
this.b=b},
wR:function wR(a,b,c,d){var _=this
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
wK:function wK(){},
kr(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.dI)throw q
else{s=r
r=A.hh("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
E1(a){return A.kr(new A.rE(a))},
Iq(a){return A.kr(new A.tr(a))},
Ih(a){return A.kr(new A.rU(a))},
E6(a,b){var s
if(new A.jl(a).gm(0)!==1)throw A.b(A.aJ('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aJ('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
Ig(a){return A.kr(new A.rT(a))},
If(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.ga7(),s=s.gu(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Jo(a){return A.kr(new A.x6(a))},
q5(a,b){return A.kr(new A.q6(a,b))},
LV(a,b,c,d){var s
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
rE:function rE(a){this.a=a},
iH:function iH(a,b){this.a=a
this.b=b},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
tr:function tr(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
rU:function rU(a){this.a=a},
er:function er(a){this.a=a},
rT:function rT(a){this.a=a},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
x6:function x6(a){this.a=a},
ve:function ve(a,b){this.a=a
this.b=b},
qz:function qz(){},
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
q6:function q6(a,b){this.a=a
this.b=b},
CA(a){var s=A.KQ(a),r=A.l([],t.s)
if(B.a_.gX(B.a_))r.push("fieldResolvers")
if(B.b.bO(a.x,new A.wN()))r.push("migrationTransform")
if(B.am.gX(B.am))r.push("documentMigrations")
return new A.n2(s,A.fN(r,t.N),1,a.a,a.b,2)},
Jd(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aJ("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aT(0,new A.wO(),s,r)
p=q.h(0,"formatVersion")
if(!A.av(p))throw A.b(A.aJ("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.EB("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.av(n)||!j.b(m)||!t.j.b(l)||!A.av(k))throw A.b(A.aJ('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.n2(m.aT(0,new A.wP(),s,t.X),A.fN(J.c_(l,new A.wQ(),r),s),p,o,n,k)},
KQ(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cJ(a.p(),n,m),k=B.a_.gK()
k=A.R(k,A.n(k).i("o.E"))
B.b.aF(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.l([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].p()
o=A.dH(null,null,n,m)
o.D(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.am.gK()
n=A.R(n,A.n(n).i("o.E"))
B.b.aF(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
n2:function n2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wN:function wN(){},
wO:function wO(){},
wP:function wP(){},
wQ:function wQ(){},
HT(a,b){var s,r=a.a
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
dM:function dM(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qk:function qk(a,b){this.a=a
this.b=b},
qn:function qn(a,b){this.a=a
this.b=b},
qj:function qj(a,b){this.a=a
this.b=b},
qm:function qm(a,b){this.a=a
this.b=b},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qf:function qf(a,b){this.a=a
this.b=b},
qc:function qc(a,b){this.a=a
this.b=b},
ql:function ql(a,b){this.a=a
this.b=b},
qh:function qh(a,b){this.a=a
this.b=b},
qe:function qe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qd:function qd(){},
qi:function qi(){},
qb:function qb(){},
qa:function qa(){},
q9:function q9(){},
q7:function q7(){},
q8:function q8(){},
hx:function hx(){},
of:function of(){},
pA:function pA(a){this.a=a},
pB:function pB(a,b){this.a=a
this.b=b},
pC:function pC(a){this.a=a},
pD:function pD(){},
C3(a){return A.po("lp_conflicts",new A.qA(a))},
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
qA:function qA(a){this.a=a},
qB:function qB(a){this.a=a},
qG:function qG(a,b,c){this.a=a
this.b=b
this.c=c},
qF:function qF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qD:function qD(a,b){this.a=a
this.b=b},
qE:function qE(a,b){this.a=a
this.b=b},
qC:function qC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
nm:function nm(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
xs:function xs(a){this.a=a},
xk:function xk(a){this.a=a},
xq:function xq(a,b){this.a=a
this.b=b},
xp:function xp(a){this.a=a},
xo:function xo(a,b){this.a=a
this.b=b},
xr:function xr(a){this.a=a},
xl:function xl(a,b){this.a=a
this.b=b},
xm:function xm(){},
xn:function xn(){},
ex(a){return new A.d4(a)},
Dp(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.fg(a,b)
r=A.bg(a,s)
q=A.ai(r)
p=A.ar(B.l.v(B.e.v(q)).a)
return new A.eA(b,s,q,p,k)}catch(m){l=A.D(m)
if(l instanceof A.d4){o=l
return new A.eA(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.eA(b,k,k,k,l)}}},
N0(a,b){var s,r=A.l([],t.i7)
for(s=J.E(b);s.k();)r.push(A.Dp(a,s.gn()))
return r},
Do(a,b){var s=0,r=A.h(t.eT),q
var $async$Do=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.N0(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Do,r)},
fg(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bl(b.d,j,i),g=a.gd8(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.ex('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.by(r))throw A.b(A.ex('Field "archived" must be a boolean, got '+J.bZ(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.q)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.ex('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.Dh(o,n)
if(m!=null)throw A.b(A.ex(A.LB(o,n,m)))
q.j(0,s,n)}for(j=new A.aP(h,A.n(h).i("aP<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.F(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
LB(a,b,c){var s,r=a.a,q=J.bZ(b)
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
i8(a){var s,r,q,p
if(a==null||a.length===0)return B.j
s=null
try{s=B.h.aw(a,null)}catch(q){r=A.D(q)
p=A.ex("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.ex("Corrupt payload JSON: expected an object, got "+J.bZ(s).l(0)+"."))
return A.bl(s,t.N,t.X)},
d4:function d4(a){this.a=a},
eA:function eA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bI(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aL(i),g=A.d3(a.gK(),i)
g.D(0,b.gK())
for(g=A.hJ(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.r.Z(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.kG(o.gK(),new A.Bf())&&J.kG(n.gK(),new A.Bg())){m=A.bI(A.bl(o,i,q),A.bl(n,i,q))
for(l=A.n(m),k=new A.e1(m,m.r,l.i("e1<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
IH(a,b,c,d,e,f,g){return new A.v0()},
Lv(a,b){var s,r,q=a.b
if(q.gE(q))return null
for(s=b;;){q.h(0,s)
r=B.a.dg(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
Cp(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$Cp=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.II(B.c_,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cp,r)},
II(a,b,c,d,e,f,g){var s,r,q,p=A.bI(b,c),o=A.bI(b,f)
A.IH(b,p,o,c,e,f,g)
s=t.N
r=A.d3(c.gK(),s)
r.D(0,new A.T(f,A.n(f).i("T<1>")))
r.D(0,b.gK())
q=A.R(r,A.n(r).c)
return A.v6(a,b,p,o,0,q,c,A.v(s,t.X),d,e,f,new A.A3(),g)},
v6(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.dK(h,a0.a,null)
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
h.j(0,s,m)}return A.v6(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.Ek(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.w)return l.V(new A.v7(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.v6(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
Ek(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.r.Z(a1,a4))return a1
if(B.r.Z(a1,a0))return a4
if(B.r.Z(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kG(a1.gK(),new A.v1()))if(J.kG(a4.gK(),new A.v2()))if(a0!=null)r=s.b(a0)&&J.kG(a0.gK(),new A.v3())
else r=!0
if(r){r=t.N
q=t.X
p=A.bl(a1,r,q)
o=A.bl(a4,r,q)
n=a0==null?null:A.bl(s.a(a0),r,q)
s=A.aL(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.D(0,l)
s.D(0,new A.T(p,A.n(p).i("T<1>")))
s.D(0,new A.T(o,A.n(o).i("T<1>")))
k=A.v(r,q)
j=[]
for(r=s.$ti.c,l=A.hJ(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.Ek(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.hJ(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.Cc(new A.X(j,new A.v4(),A.a_(j).i("X<1,y<j?>>")),q).V(new A.v5(s,k),q)}A.Lv(a3,a2)
return a4},
Gw(a,b,c,d,e,f){return A.Cp(a,b,c,d,e,f)},
Bf:function Bf(){},
Bg:function Bg(){},
v0:function v0(){},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
ml:function ml(a,b,c){this.a=a
this.b=b
this.c=c},
A3:function A3(){this.a=!1},
A1:function A1(){},
yk:function yk(){},
v7:function v7(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
v1:function v1(){},
v2:function v2(){},
v3:function v3(){},
v4:function v4(){},
v5:function v5(a,b){this.a=a
this.b=b},
vp:function vp(a,b){this.a=a
this.b=b},
vr:function vr(a){this.a=a},
vs:function vs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pN:function pN(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a){this.a=a},
jk:function jk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vu:function vu(a,b){this.a=a
this.b=b},
vA:function vA(a,b){this.a=a
this.b=b},
vy:function vy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vx:function vx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vw:function vw(a,b,c){this.a=a
this.b=b
this.c=c},
vz:function vz(a){this.a=a},
ed:function ed(a,b){this.a=a
this.b=b},
mO:function mO(a,b){this.b=a
this.f=b},
wb:function wb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wj:function wj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wi:function wi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wd:function wd(a,b,c){this.a=a
this.b=b
this.c=c},
wc:function wc(a,b,c){this.a=a
this.b=b
this.c=c},
wf:function wf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
we:function we(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wh:function wh(a,b,c){this.a=a
this.b=b
this.c=c},
wg:function wg(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wk:function wk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
wm:function wm(a,b,c,d){var _=this
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
wp:function wp(a,b,c){this.a=a
this.b=b
this.c=c},
wo:function wo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wn:function wn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wl:function wl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wq:function wq(a,b,c,d,e,f,g,h,i,j){var _=this
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
xh:function xh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
xi:function xi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
EI(a){return new A.eO(a)},
kS(a){return new A.bM(a)},
Ie(a){return new A.cj(a)},
IS(a){return new A.cl(a)},
aR(a){return new A.eF(a)},
MG(a){var s=a.wS(),r=new A.Br()
return A.r(r.$2(A.Cv(s),4))+"-"+A.r(r.$1(A.Ct(s)))+"-"+A.r(r.$1(A.w2(s)))+" "+A.r(r.$1(A.Cr(s)))+":"+A.r(r.$1(A.Cs(s)))+":"+A.r(r.$1(A.Cu(s)))+"."+A.r(r.$2(A.Et(s),3))+"Z"},
EH(a){var s=Date.now()
return new A.nC(a,new A.aO(s,0,!1))},
bo:function bo(){},
eO:function eO(a){this.a=a},
da:function da(a,b){this.b=a
this.a=b},
ha:function ha(a){this.a=a},
bM:function bM(a){this.a=a},
cj:function cj(a){this.a=a},
cl:function cl(a){this.a=a},
eD:function eD(a){this.a=a},
eF:function eF(a){this.a=a},
en:function en(a){this.a=a},
nn:function nn(){},
dv:function dv(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h0:function h0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jj:function jj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kU:function kU(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
Br:function Br(){},
nC:function nC(a,b){this.a=a
this.c=b},
Jr(a){return 0.5+B.as.n1()},
CH(a){var s,r=a.toLowerCase()
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
Js(a){var s,r,q,p,o,n,m,l,k=null,j=A.af("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ea(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.CH(r)
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
return A.CI(r,q,p,o,n,A.aH(s))}j=A.af("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).ea(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.CH(r)
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
return A.CI(l,q,r,p,o,A.aH(s))}j=A.af("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).ea(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.CH(r)
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
return A.CI(r,q,p,o,n,A.aH(s))}return k},
CI(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.C4(a,b,c,d,e,f,0)
return s}catch(r){return null}},
xj:function xj(a,b){this.at=a
this.ay=b},
ji:function ji(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
xu:function xu(a,b){this.a=a
this.b=b},
Gg(a,b,c,d,e,f,g,h,i,j){var s,r=A.Gy(a,b,c,null,d,e,f,g,h,i,j),q=A.v(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.Z[s],r[s])
return q},
Gy(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.Gd(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
Gd(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
Me(a,b,c,d,e,f,g){var s,r=null,q=A.GK(B.a6,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.v(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.Y[s],q[s])
return p},
GK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.Ge(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
Ge(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
GG(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
i9(a){return new A.X(a,new A.BM(),A.a_(a).i("X<1,k>")).B(0,", ")},
jy(a){return A.po("lp_sync_row",new A.xt(a))},
mD(a){return A.po("lp_outbox",new A.vv(a))},
IT(a){return A.po("lp_op_queue",new A.vq(a))},
kz(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kz=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aL(n)
l=A.R(b,A.n(b).c)
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
return A.a(k,$async$kz)
case 3:j.D(0,i.c_(h.a(d),new A.BK(),n))
k=A.R(l,n)
k.push("pending")
k.push("failed")
k=a.ai("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kz)
case 4:j.D(0,i.c_(h.a(d),new A.BL(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kz,r)},
ib(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$ib=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.em("lp_blobs",A.l(["hash"],q),1,"hash = ?",A.l([b],q))
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
case 4:q=a.aE("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.l([c,b],t.hf))
s=7
return A.a(q,$async$ib)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ib,r)},
Bk(a,b){var s=0,r=A.h(t.H),q,p
var $async$Bk=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aE(u.y,A.l([b],t.s))
s=3
return A.a(p,$async$Bk)
case 3:case 1:return A.e(q,r)}})
return A.f($async$Bk,r)},
cA(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cA=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.n9("lp_file_refs",A.l(["ref_id","hash"],n),"store = ? AND record_id = ?",A.l([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cA)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.Y("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cA)
case 5:o=A.a6(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.Bk(a,o),$async$cA)
case 8:case 7:s=3
break
case 4:m=a.Y("lp_conflicts","store = ? AND record_id = ?",A.l([b,c],n))
s=9
return A.a(m,$async$cA)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.l([b,c],n))
s=10
return A.a(m,$async$cA)
case 10:s=d?11:12
break
case 11:m=a.Y("lp_outbox","store = ? AND record_id = ?",A.l([b,c],n))
s=13
return A.a(m,$async$cA)
case 13:n=a.Y("lp_sync_row","store = ? AND record_id = ?",A.l([b,c],n))
s=14
return A.a(n,$async$cA)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cA,r)},
cP:function cP(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
BM:function BM(){},
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
xt:function xt(a){this.a=a},
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
vv:function vv(a){this.a=a},
eC:function eC(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
vq:function vq(a){this.a=a},
BK:function BK(){},
BL:function BL(){},
CL(a,b,c,d,e){var s=e==null?A.l([],t.eb):e
return new A.bG(a,b,c,s,d,new A.A8())},
nJ(a){var s=$.C.h(0,$.kE())
if(s instanceof A.bG&&s.a===a)return s
return null},
bG:function bG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xE:function xE(a,b,c){this.a=a
this.b=b
this.c=c},
A8:function A8(){this.a=0
this.b=null},
lx:function lx(a,b){this.a=a
this.b=b},
xw:function xw(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
xD:function xD(a){this.a=a},
xz:function xz(a){this.a=a},
xC:function xC(a,b,c){this.a=a
this.b=b
this.c=c},
xB:function xB(a,b,c){this.a=a
this.b=b
this.c=c},
xA:function xA(a,b,c){this.a=a
this.b=b
this.c=c},
xy:function xy(a){this.a=a},
xx:function xx(){},
og:function og(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
yX:function yX(a,b){this.a=a
this.b=b},
yW:function yW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yU:function yU(a,b){this.a=a
this.b=b},
yV:function yV(a,b){this.a=a
this.b=b},
yT:function yT(a){this.a=a},
hA:function hA(a,b){this.a=a
this.b=b},
Mj(a,b,c){var s,r,q,p,o=A.l([],t.s)
for(s=J.E(a);s.k();){r=new A.a2("")
A.cf(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aF(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.ar(B.l.v(B.e.v(p)).a)},
mS:function mS(a,b,c){var _=this
_.x=a
_.y=null
_.a=b
_.b=c
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
wG:function wG(){},
wF:function wF(a){this.a=a},
wH:function wH(a){this.a=a},
mA:function mA(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=null
_.a=c
_.b=d
_.d=_.c=null
_.r=_.f=_.e=!1
_.w=null},
vo:function vo(a){this.a=a},
fr:function fr(){},
yf:function yf(a,b){this.a=a
this.b=0
this.c=b},
yg:function yg(a,b,c){this.a=a
this.b=b
this.c=c},
Nb(a){if(a instanceof A.dI){if(a instanceof A.eQ)return"ValidationException"
if(a instanceof A.eP)return"UniqueConstraintException"
if(a instanceof A.eB)return"NotNullConstraintException"
if(a instanceof A.fq)return"CheckConstraintException"
if(a instanceof A.fZ)return"PrimaryKeyConstraintException"
if(a instanceof A.fI)return"ForeignKeyConstraintException"
if(a instanceof A.cN)return"StorageError"
if(a instanceof A.h4)return"RecordNotFoundException"
if(a instanceof A.h8)return"SchemaTooNewError"
if(a instanceof A.fK)return"FtsUnavailableError"
if(a instanceof A.hq)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eJ)return"SchemaRegistrationError"
if(a instanceof A.hf)return"StaleCursorError"
if(a instanceof A.fR)return"MissingLimitError"
if(a instanceof A.fu)return"ConflictBlockedError"
if(a instanceof A.em)return"DestructiveMigrationRefusedError"
if(a instanceof A.h3)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bo){if(a instanceof A.eO)return"TransientNetworkError"
if(a instanceof A.da)return"ServerBusyError"
if(a instanceof A.ha)return"ServerError"
if(a instanceof A.bM)return"AuthError"
if(a instanceof A.cj)return"ForbiddenError"
if(a instanceof A.cl)return"NotFoundError"
if(a instanceof A.eD)return"PayloadError"
if(a instanceof A.eF)return"ProtocolError"
if(a instanceof A.en)return"DuplicateIdError"
if(a instanceof A.dv)return"BatchFailedError"
if(a instanceof A.nn)return"SyncIdentityError"
return"SyncError"}if(a instanceof A.eR)return"WireException"
if(a instanceof A.jh)return"ProtocolEnvelopeException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bm)return"StateError"
if(a instanceof A.bB)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
JB(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.av(s))throw A.b(A.bT('Request "v" must be an int.'))
if(!A.av(r)||r<0)throw A.b(A.bT('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dn.F(0,q))throw A.b(A.bT("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.bT('Request "a" must be a map.'))
return new A.hv(s,r,q,p.aT(0,new A.y4(),t.N,t.X))},
bT(a){return new A.jh(a)},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y4:function y4(){},
nZ:function nZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
y1:function y1(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a){this.a=a},
EP(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
y_:function y_(a){this.b=a
this.d=null},
y0:function y0(a){this.a=a},
oE:function oE(a){this.a=a},
IE(a){var s,r,q
try{s=A.pl(a)
if(t.f.b(s)){r=A.fc(s)
return r}}catch(q){}return null},
IF(a){if(a instanceof A.jD)return A.pn(new A.nZ(3,a.a,a.b,null).p())
t.bp.a(a)
return A.Cn(a.a,a.b,a.c,a.d)},
Cn(a,b,c,d){return A.pn(new A.nZ(3,a,null,new A.y1(b,c,d)).p())},
kq(a){return A.Lt(a)},
Lt(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
var $async$kq=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:f=A.ia()
if(f==null){q=null
s=1
break}p=4
k=t.m
s=7
return A.a(A.a5(f.getDirectory(),k),$async$kq)
case 7:n=c
j=$.ic()
i=A.R(j.cS(0,"drift_db"),t.N)
m=i
J.DB(m,j.cS(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.as(l)===0){s=9
break}s=11
return A.a(A.a5(n.getDirectoryHandle(l,{create:!1}),k),$async$kq)
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
return A.f($async$kq,r)},
pd(a,b){return A.Lu(a,b)},
Lu(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$pd=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kq(a),$async$pd)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a5(m.getFileHandle(A.dO(b,$.ic().a).gjN(),{create:!1}),t.m),$async$pd)
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
return A.f($async$pd,r)},
pf(a,b){return A.LC(a,b)},
LC(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$pf=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kq(a),$async$pf)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.Ca(m,A.dO(b,$.ic().a).gjN()),$async$pf)
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
return A.f($async$pf,r)},
uI:function uI(){},
uJ:function uJ(a){this.a=a},
uK:function uK(a){this.a=a},
mj:function mj(a,b,c){this.a=a
this.d=b
this.e=c},
uT:function uT(a,b,c){this.a=a
this.b=b
this.c=c},
oh:function oh(a){this.a=a},
z2:function z2(){},
z3:function z3(){},
N2(a){var s,r,q,p,o,n,m,l,k,j,i="maxDocBytes",h="destructiveBackup"
if(a==null)return A.v(t.N,t.X)
s=t.f
if(!s.b(a))throw A.b(A.bT("Open options must be a map."))
r=A.fc(a)
q=t.X
p=A.v(t.N,q)
o=r.h(0,"stores")
if(o!=null){if(!t.j.b(o))throw A.b(A.bT('"stores" must be a list.'))
n=A.l([],t.oq)
for(m=J.E(o);m.k();){l=m.gn()
if(!s.b(l))A.t(A.a8("Schema must be a map: "+A.r(l),null,null))
n.push(A.q5(A.fc(l),q))}p.j(0,"stores",n)}k=r.h(0,i)
if(k!=null){if(!A.av(k))throw A.b(A.bT('"maxDocBytes" must be an int.'))
p.j(0,i,k)}j=r.h(0,h)
if(j!=null){if(!A.by(j))throw A.b(A.bT('"destructiveBackup" must be a bool.'))
p.j(0,h,j)}return p},
GE(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.fc(a).h(0,b)
return s}}catch(r){}return null},
ML(a,b){if(b!=null)return!1
return B.b.bO(a,new A.Bw())},
Bw:function Bw(){},
Bv:function Bv(){},
y6:function y6(a){this.a=a},
fc(a){var s=A.v(t.N,t.X)
a.a8(0,new A.Bm(s))
return s},
hw:function hw(){},
jD:function jD(a,b){this.b=a
this.a=b},
eT:function eT(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
Bm:function Bm(a){this.a=a},
Bl:function Bl(){},
o1:function o1(){},
y9:function y9(a,b){var _=this
_.f=$
_.c=a
_.d=b
_.e=null},
ya:function ya(a){this.a=a},
o0:function o0(){},
y7:function y7(a){this.a=a},
y8:function y8(){},
p5:function p5(){},
FT(a){return a},
G8(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=a+"("
p.a=o
n=A.a_(b)
m=n.i("ct<1>")
l=new A.ct(b,0,s,m)
l.iP(b,0,s,n.c)
m=o+new A.X(l,new A.B7(),m.i("X<Z.E,k>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.Q(p.l(0),null))}},
qI:function qI(a){this.a=a},
qJ:function qJ(){},
qK:function qK(){},
B7:function B7(){},
tz:function tz(){},
dO(a,b){var s,r,q,p,o,n=b.o5(a),m=b.cI(a)
if(n!=null)a=B.a.ae(a,n.length)
s=t.s
r=A.l([],s)
q=A.l([],s)
s=a.length
if(s!==0&&b.ce(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.ce(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ae(a,p))
q.push("")}return new A.mE(b,n,m,r,q)},
mE:function mE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Eq(a){return new A.mF(a)},
mF:function mF(a){this.a=a},
Jq(){var s,r,q,p,o,n,m,l,k=null
if(A.CM().gb_()!=="file")return $.kD()
if(!B.a.bR(A.CM().gbp(),"/"))return $.kD()
s=A.Fo(k,0,0)
r=A.Fm(k,0,0,!1)
q=A.Au(k,0,0,k)
p=A.Fl(k,0,0)
o=A.At(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Fn("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.D1(l,m)
else l=A.f6(l)
if(A.kj("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).kz()==="a\\b")return $.pr()
return $.GW()},
xg:function xg(){},
vZ:function vZ(a,b,c){this.d=a
this.e=b
this.f=c},
xM:function xM(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
y5:function y5(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
C9(a,b){if(b<0)A.t(A.b_("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.t(A.b_("Offset "+b+u.D+a.gm(0)+"."))
return new A.lO(a,b)},
wZ:function wZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lO:function lO(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
Il(a,b){var s=A.Im(A.l([A.JZ(a,!0)],t.pg)),r=new A.tp(b).$0(),q=B.c.l(B.b.ga1(s).b+1),p=A.In(s)?0:3,o=A.a_(s)
return new A.t5(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.t7(),o.i("X<1,i>")).wB(0,B.bB),!A.MT(new A.X(s,new A.t8(),o.i("X<1,j?>"))),new A.a2(""))},
In(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
Im(a){var s,r,q=A.MK(a,new A.ta(),t.nf,t.K)
for(s=A.n(q),r=new A.aT(q,q.r,q.e,s.i("aT<2>"));r.k();)J.DF(r.d,new A.tb())
s=s.i("aP<1,2>")
r=s.i("iz<o.E,cx>")
s=A.R(new A.iz(new A.aP(q,s),new A.tc(),r),r.i("o.E"))
return s},
JZ(a,b){var s=new A.zE(a).$0()
return new A.bs(s,!0,null)},
K0(a){var s,r,q,p,o,n,m=a.gaK()
if(!B.a.F(m,"\r\n"))return a
s=a.gN().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gR()
p=a.ga3()
o=a.gN().gag()
p=A.na(s,a.gN().gaq(),o,p)
o=A.B(m,"\r\n","\n")
n=a.gbc()
return A.x_(r,p,o,A.B(n,"\r\n","\n"))},
K1(a){var s,r,q,p,o,n,m
if(!B.a.bR(a.gbc(),"\n"))return a
if(B.a.bR(a.gaK(),"\n\n"))return a
s=B.a.A(a.gbc(),0,a.gbc().length-1)
r=a.gaK()
q=a.gR()
p=a.gN()
if(B.a.bR(a.gaK(),"\n")){o=A.Bq(a.gbc(),a.gaK(),a.gR().gaq())
o.toString
o=o+a.gR().gaq()+a.gm(a)===a.gbc().length}else o=!1
if(o){r=B.a.A(a.gaK(),0,a.gaK().length-1)
if(r.length===0)p=q
else{o=a.gN().gar()
n=a.ga3()
m=a.gN().gag()
p=A.na(o-1,A.F5(s),m-1,n)
q=a.gR().gar()===a.gN().gar()?p:a.gR()}}return A.x_(q,p,r,s)},
K_(a){var s,r,q,p,o
if(a.gN().gaq()!==0)return a
if(a.gN().gag()===a.gR().gag())return a
s=B.a.A(a.gaK(),0,a.gaK().length-1)
r=a.gR()
q=a.gN().gar()
p=a.ga3()
o=a.gN().gag()
p=A.na(q-1,s.length-B.a.dg(s,"\n")-1,o-1,p)
return A.x_(r,p,s,B.a.bR(a.gbc(),"\n")?B.a.A(a.gbc(),0,a.gbc().length-1):a.gbc())},
F5(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.i9(a,"\n",s-2)-1
else return s-B.a.dg(a,"\n")-1},
t5:function t5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tp:function tp(a){this.a=a},
t7:function t7(){},
t6:function t6(){},
t8:function t8(){},
ta:function ta(){},
tb:function tb(){},
tc:function tc(){},
t9:function t9(a){this.a=a},
tq:function tq(){},
td:function td(a){this.a=a},
tk:function tk(a,b,c){this.a=a
this.b=b
this.c=c},
tl:function tl(a,b){this.a=a
this.b=b},
tm:function tm(a){this.a=a},
tn:function tn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ti:function ti(a,b){this.a=a
this.b=b},
tj:function tj(a,b){this.a=a
this.b=b},
te:function te(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tf:function tf(a,b,c){this.a=a
this.b=b
this.c=c},
tg:function tg(a,b,c){this.a=a
this.b=b
this.c=c},
th:function th(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
to:function to(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
zE:function zE(a){this.a=a},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
na(a,b,c,d){if(a<0)A.t(A.b_("Offset may not be negative, was "+a+"."))
else if(c<0)A.t(A.b_("Line may not be negative, was "+c+"."))
else if(b<0)A.t(A.b_("Column may not be negative, was "+b+"."))
return new A.cr(d,a,c,b)},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nb:function nb(){},
nd:function nd(){},
Jj(a,b,c){return new A.hd(c,a,b)},
ne:function ne(){},
hd:function hd(a,b,c){this.c=a
this.a=b
this.b=c},
he:function he(){},
x_(a,b,c,d){var s=new A.dc(d,a,b,c)
s.oJ(a,b,c)
if(!B.a.F(d,c))A.t(A.Q('The context line "'+d+'" must contain "'+c+'".',null))
if(A.Bq(d,c,a.gaq())==null)A.t(A.Q('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
dc:function dc(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Jn(a){var s
A:{if(18===a){s=B.dp
break A}if(23===a){s=B.dq
break A}if(9===a){s=B.dr
break A}s=null
break A}return s},
jr:function jr(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
Jm(a,b,c,d,e,f,g){return new A.c6(d,b,c,e,f,a,g)},
c6:function c6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
x4:function x4(){},
kL:function kL(a){this.a=a},
L0(a,b,c){var s,r,q,p,o,n=new A.nU(c,A.ab(c.b,null,!1,t.X))
try{A.FH(a,b.$1(n))}catch(r){s=A.D(r)
q=B.e.v(A.iw(s))
p=a.a
o=p.cC(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
FH(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.av(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.ES(b).l(0)))
break A}if(b instanceof A.aK){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.DL(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.by(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.ES(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cC(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cC(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.as(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.FH(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.t(A.az(b,"result","Unsupported type"))}return s},
r8:function r8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
rh:function rh(a){this.a=a},
rg:function rg(a){this.a=a},
ri:function ri(a){this.a=a},
re:function re(a){this.a=a},
rd:function rd(a){this.a=a},
rf:function rf(a){this.a=a},
ra:function ra(a){this.a=a},
r9:function r9(a){this.a=a},
rb:function rb(a){this.a=a},
rj:function rj(a){this.a=a},
rc:function rc(a,b){this.a=a
this.b=b},
nU:function nU(a,b){this.a=a
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
Aj:function Aj(a,b){this.a=a
this.b=b},
Ak:function Ak(a,b,c){this.a=a
this.b=b
this.c=c},
Al:function Al(a,b,c){this.a=a
this.b=b
this.c=c},
x0:function x0(){},
hg:function hg(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
Ce(a,b){var s=$.pq()
return new A.m1(A.v(t.N,t.a_),s,a)},
m1:function m1(a,b,c){this.d=a
this.b=b
this.a=c},
ou:function ou(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
N3(a){var s=J.HD(new v.G.URL(a,"file:///").pathname,"/")
return new A.am(s,new A.BF(),A.a_(s).i("am<1>"))},
BF:function BF(){},
qO:function qO(){},
mY:function mY(a,b,c){this.d=a
this.a=b
this.c=c},
c5:function c5(a,b){this.a=a
this.b=b},
A2:function A2(a){this.a=a
this.b=-1},
oK:function oK(){},
oL:function oL(){},
oN:function oN(){},
oO:function oO(){},
vt:function vt(a,b){this.a=a
this.b=b},
J7(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bB(r,"step")}return s},
ej:function ej(){},
bO:function bO(a){this.a=a},
lm:function lm(a){this.a=a},
hr(a){return new A.dg(a)},
DJ(a,b){var s,r,q,p
if(b==null)b=$.pq()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cJ(256)
r&2&&A.H(a)
a[q]=p}},
dg:function dg(a){this.a=a},
jq:function jq(a){this.a=a},
b5:function b5(){},
l1:function l1(){},
l0:function l0(){},
N9(a,b){var s=null,r=new A.ev(t.kk)
return A.pp(a,new A.jE(s,s,s,s,s,s,s,s,new A.BP(new A.BO(r,A.B_(new A.BQ(r)))),s,s,s,s),s,b)},
eU:function eU(a){var _=this
_.d=a
_.c=_.b=_.a=null},
BQ:function BQ(a){this.a=a},
BO:function BO(a,b){this.a=a
this.b=b},
BP:function BP(a){this.a=a},
xX:function xX(a){this.a=a},
xS:function xS(a,b,c){this.a=a
this.b=b
this.c=c},
xZ:function xZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xY:function xY(a,b,c){this.b=a
this.c=b
this.d=c},
dV:function dV(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
bX(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.D(r)
if(q instanceof A.dg){s=q
return s.a}else return 1}},
lp:function lp(a){this.b=this.a=$
this.d=a},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
qR:function qR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qW:function qW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qY:function qY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
r_:function r_(a,b){this.a=a
this.b=b},
qT:function qT(a){this.a=a},
qZ:function qZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r3:function r3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
r1:function r1(a,b){this.a=a
this.b=b},
r0:function r0(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a,b){this.a=a
this.b=b},
r2:function r2(a,b){this.a=a
this.b=b},
qS:function qS(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b){this.a=a
this.$ti=b},
pE:function pE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pG:function pG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pF:function pF(a,b,c){this.a=a
this.b=b
this.c=c},
cE(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.br(a,"success",new A.qr(r,a,b),!1,q)
A.br(a,"error",new A.qs(r,a),!1,q)
return s},
HX(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.br(a,"success",new A.qw(r,a,b),!1,q)
A.br(a,"error",new A.qx(r,a),!1,q)
A.br(a,"blocked",new A.qy(r),!1,q)
return s},
eY:function eY(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
z6:function z6(a,b){this.a=a
this.b=b},
z7:function z7(a,b){this.a=a
this.b=b},
qr:function qr(a,b,c){this.a=a
this.b=b
this.c=c},
qs:function qs(a,b){this.a=a
this.b=b},
qw:function qw(a,b,c){this.a=a
this.b=b
this.c=c},
qx:function qx(a,b){this.a=a
this.b=b},
qy:function qy(a){this.a=a},
ia(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
E4(a,b,c){var s=a.read(b,c)
return s},
E5(a,b,c){var s=a.write(b,c)
return s},
Ca(a,b){return A.a5(a.removeEntry(b,{recursive:!1}),t.X)},
E3(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.t(A.Q("Target object does not implement the async iterable interface",null))
return new A.f1(new A.rM(),new A.ih(a,s),s.i("f1<a9.T,M>"))},
rM:function rM(){},
xT:function xT(a){this.a=a},
xU:function xU(a){this.a=a},
xW(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$xW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a5(p.fetch(new p.URL(a,A.bf(p.location).href),null),t.m),$async$xW)
case 3:q=o.xV(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xW,r)},
xV(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$xV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lp(A.v(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.xT(p).ib(a),$async$xV)
case 3:q=new o.hs(new n.xX(m.JA(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xV,r)},
hs:function hs(a){this.a=a},
K2(a){var s=new A.jW(a,new A.ap(new A.w($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.oN(a)
return s},
m3(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$m3=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.pH(a)
n=A.Ce("dart-memory",null)
m=$.pq()
l=new A.dD(o,n,new A.ev(t.p3),A.aL(p),A.v(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.ij(),$async$m3)
case 3:s=4
return A.a(l.eP(),$async$m3)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$m3,r)},
pH:function pH(a){this.a=null
this.b=a},
pK:function pK(a){this.a=a},
pJ:function pJ(a,b,c){this.a=a
this.b=b
this.c=c},
pI:function pI(a){this.a=a},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
zH:function zH(a){this.a=a},
zI:function zI(a){this.a=a},
zG:function zG(a){this.a=a},
zJ:function zJ(a,b,c){this.a=a
this.b=b
this.c=c},
zL:function zL(a,b){this.a=a
this.b=b},
zK:function zK(a,b){this.a=a
this.b=b},
zi:function zi(a,b,c){this.a=a
this.b=b
this.c=c},
zj:function zj(a,b){this.a=a
this.b=b},
oD:function oD(a,b){this.a=a
this.b=b},
dD:function dD(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
tt:function tt(a,b,c){this.a=a
this.b=b
this.c=c},
tu:function tu(){},
ts:function ts(a,b){this.a=a
this.b=b},
ov:function ov(a,b,c){this.a=a
this.b=b
this.c=c},
zF:function zF(a,b){this.a=a
this.b=b},
b7:function b7(){},
jU:function jU(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
jO:function jO(a,b,c){var _=this
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
EC(a){var s=A.Ce("dart-memory",null),r=$.pq()
return new A.hc(s,r,a)},
n6(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$n6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.ia()
if(j==null)throw A.b(A.hr(1))
p=t.m
s=3
return A.a(A.a5(j.getDirectory(),p),$async$n6)
case 3:o=d
n=A.N3(a),m=J.E(n.a),n=new A.cU(m,n.b,n.$ti.i("cU<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a5(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$n6)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a4(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n6,r)},
n7(a){var s=0,r=A.h(t.m),q
var $async$n7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n6(a,!0),$async$n7)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n7,r)},
wX(a,b){var s=0,r=A.h(t.g_),q,p
var $async$wX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.ia()==null)throw A.b(A.hr(1))
p=A
s=3
return A.a(A.n7(a),$async$wX)
case 3:q=p.wW(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wX,r)},
wW(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$wW=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.EC(c)
s=3
return A.a(p.cL(a,!1),$async$wW)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wW,r)},
fH:function fH(a,b,c){this.c=a
this.a=b
this.b=c},
hc:function hc(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
wY:function wY(a,b){this.a=a
this.b=b},
oT:function oT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
zZ:function zZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
JA(a,b){var s=A.bf(a.exports.memory)
b.b!==$&&A.ce()
b.b=s
s=new A.xN(s,b,a.exports)
s.oK(a,b)
return s},
o3(a,b){var s,r=A.bS(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dX(a,b,c){var s=a.buffer
return B.o.f0(A.bS(s,b,c==null?A.o3(a,b):c))},
CN(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.f0(A.bS(s,b,c==null?A.o3(a,b):c))},
EQ(a,b,c){var s=new Uint8Array(c)
B.f.cR(s,0,A.bS(a.buffer,b,c))
return s},
xN:function xN(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
xO:function xO(a){this.a=a},
xP:function xP(a){this.a=a},
xQ:function xQ(a){this.a=a},
xR:function xR(a){this.a=a},
Bh(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$Bh=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kF()
s=l!=null?3:5
break
case 3:p=A.Ly()
s=6
return A.a(A.jC(l,p,null,null,!1),$async$Bh)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.a4({port:m.port1,lockName:p},new A.iq(n,p,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Bh,r)},
Ly(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bv(97+$.Hn().cJ(26))
return r.charCodeAt(0)==0?r:r},
HN(a){return new A.io(a)},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
w5:function w5(){},
w9:function w9(a){this.a=a},
wa:function wa(a){this.a=a},
w8:function w8(a){this.a=a},
w7:function w7(a){this.a=a},
w6:function w6(a){this.a=a},
io:function io(a){this.a=a},
r6:function r6(){},
ll:function ll(a){this.a=a},
qP:function qP(a){this.a=a},
eS:function eS(){},
lF(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lF=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n7(a),$async$lF)
case 3:p=e
o=A.EC(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cL(p,!0),$async$lF)
case 6:case 5:q=new A.lE(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lF,r)},
lE:function lE(a,b,c){this.a=a
this.b=b
this.c=c},
t3:function t3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jC(a,b,c,d,e){var s,r,q={},p=new A.w($.C,t.nI),o=new A.ap(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.Cb(A.a5(a.request(b,s,A.cX(new A.y2(q,o))),r),new A.y3(q,d,o),r,t.K)
return p},
y2:function y2(a,b){this.a=a
this.b=b},
y3:function y3(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a){this.a=a},
lq:function lq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
rl:function rl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rk:function rk(a,b){this.a=a
this.b=b},
rm:function rm(a){this.a=a},
j4:function j4(a){this.a=!1
this.b=a},
vl:function vl(a,b){this.a=a
this.b=b},
vk:function vk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vj:function vj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
HU(a){var s,r,q,p,o=A.l([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bN(n,A.a_(n).i("bN<1,k>"))
for(s=J.L(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a4(A.fB(B.cR,s.h(m,q)),s.h(m,q+1)))}s=A.hY(a.b)
q=A.hY(a.c)
p=A.hY(a.d)
return new A.ek(o,s,q,A.hY(a.g),p)},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Ja(a){var s
if(J.x(a.t,"errorResponse")){s=A.I8(a)
if(s!=null&&s instanceof A.dt)return s
else return new A.h5(a.e)}else return new A.h5("Did not respond with expected type, got "+A.r(a))},
I8(a){var s=a.s,r=s==null?null:A.aq(s)
A:{if(0===r){s=A.I9(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
I9(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.A("Pattern matching error"))
n=new A.rC()
l=A.aq(A.f7(l))
A.F(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.el(i,h,A.bS(h,0,o))}else p=o
n=n.$1(k)
A.Fx(g)
return new A.c6(s,r,l,g==null?o:A.aq(g),n,q,p)},
Ia(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Ju(l)
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
Jb(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.t3(a2,512,"transfer" in a2)
a5.mw(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.J7(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.qa(l)
l=new a0.DataView(a3.a,m,o)
k=new a0.Array(o)
for(j=0;j<o;++j){switch(p.sqlite3_column_type(q,j)){case 1:i=p.sqlite3_column_int64(q,j)
h=a0.Number(i)
if(a0.Number.isSafeInteger(h)){i=h
g=B.aF}else g=B.aG
break
case 2:i=p.sqlite3_column_double(q,j)
g=B.aH
break
case 3:f=p.sqlite3_column_text(q,j)
e=r.buffer
d=A.o3(r,f)
f=new Uint8Array(e,f,d)
c=new A.dl(!1).cX(f,0,a,!0)
i=c
g=B.aI
break
case 4:i=s.kS(j)
g=B.aJ
break
case 5:default:i=a
g=B.aK}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.o3(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dl(!1).cX(a0,0,a,!0)}return A.Gx(!1,b,0,0,a1,a,a3.wQ(0))},
MU(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
rC:function rC(){},
Gx(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
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
My(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mm:function mm(a,b,c){this.a=a
this.b=b
this.$ti=c},
wM:function wM(){},
Id(a){var s,r
for(s=0;s<5;++s){r=B.cE[s]
if(r.c===a)return r}throw A.b(A.Q("Unknown FS implementation: "+a,null))},
Jt(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aK
break A}q=A.av(a)
p=q?a:j
if(q){s=p
r=B.aF
break A}q=a instanceof A.aK
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.l(0))
r=B.aG
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.aH
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.aI
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.aJ
break A}q=A.by(a)
k=q?a:j
if(q){s=k
r=B.bo
break A}throw A.b(A.Q("Unsupported value: "+A.r(a),j))}return new A.a4(r,s)},
Ju(a){var s,r,q,p,o,n
if(a instanceof A.el)return new A.a4(a.a,a.b)
s=[]
r=J.L(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.Jt(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a4(s,t.a.a(B.f.gab(p)))},
dz:function dz(a,b,c){this.c=a
this.a=b
this.b=c},
cv:function cv(a,b){this.a=a
this.b=b},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
pj(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$pj=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bf(i.indexedDB)
i=$.kF()
i=i==null?null:A.jC(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bx(i,t.b3),$async$pj)
case 3:l=b
p=5
s=8
return A.a(A.HW(m.open("drift_mock_db"),t.m),$async$pj)
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
return A.f($async$pj,r)},
Bd(a){return A.Mh(a)},
Mh(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$Bd=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bf(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cX(new A.Be(j,m))
s=7
return A.a(A.HV(m,t.m),$async$Bd)
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
return A.f($async$Bd,r)},
i7(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$i7=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.ia()
if(h==null){q=B.u
s=1
break}j=t.m
s=3
return A.a(A.a5(h.getDirectory(),j),$async$i7)
case 3:m=b
p=5
s=8
return A.a(A.a5(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$i7)
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
case 7:l=A.l([],t.s)
j=new A.cy(A.cz(A.E3(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$i7)
case 14:if(!b){s=13
break}k=j.gn()
if(J.x(k.kind,"directory"))J.aN(l,k.name)
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
HV(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.br(a,"success",new A.qp(r,a,b),!1,q)
A.br(a,"error",new A.qq(r,a),!1,q)
return s},
HW(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.ap(s,b.i("ap<0>")),q=t.m
A.br(a,"success",new A.qt(r,a,b),!1,q)
A.br(a,"error",new A.qu(r,a),!1,q)
A.br(a,"blocked",new A.qv(r,a),!1,q)
return s},
Be:function Be(a,b){this.a=a
this.b=b},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(a,b){this.a=a
this.b=b},
qt:function qt(a,b,c){this.a=a
this.b=b
this.c=c},
qu:function qu(a,b){this.a=a
this.b=b},
qv:function qv(a,b){this.a=a
this.b=b},
w1:function w1(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
h5:function h5(a){this.a=a},
dt:function dt(a){this.a=a},
L_(a){var s=a.gmR()
return new A.f1(new A.AZ(),s,A.n(s).i("f1<a9.T,M>"))},
F1(a,b){var s=A.l([],t.kG),r=b==null?a.b:b
return new A.hB(a,r,new A.k9(),new A.k9(),new A.k9(),s)},
JU(a,b,c){var s=t.S
s=new A.hz(c,A.l([],t.fV),a.a,new A.aI(new A.w($.C,t.D),t.h),A.v(s,t.br),A.v(s,t.m))
s.oH(a)
s.oM(a,b,c)
return s},
FI(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
e8(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e8=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.ia()
if(b==null){q=B.aC
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.kF()
d=d==null?null:A.jC(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bx(d,t.b3),$async$e8)
case 7:j=a1
d=t.m
s=8
return A.a(A.a5(b.getDirectory(),d),$async$e8)
case 8:m=a1
s=9
return A.a(A.a5(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e8)
case 9:l=a1
s=10
return A.a(A.kt(l),$async$e8)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.Ci(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a5(A.bf(e),t.X),$async$e8)
case 13:q=B.aC
n=[1]
s=5
break
case 12:g=i
q=new A.k4(!0,g)
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
return A.a(A.Ca(m,"_drift_feature_detection"),$async$e8)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e8,r)},
kt(a){return A.LR(a)},
LR(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$kt=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.a(A.a5(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kt)
case 7:j=c
s=8
return A.a(A.a5(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$kt)
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
return A.a(A.a5(a.createSyncAccessHandle(),t.m),$async$kt)
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
return A.f($async$kt,r)},
AZ:function AZ(){},
k9:function k9(){this.a=null},
hB:function hB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
yY:function yY(a){this.a=a},
z1:function z1(a,b){this.a=a
this.b=b},
yZ:function yZ(a,b){this.a=a
this.b=b},
z_:function z_(a){this.a=a},
z0:function z0(a,b){this.a=a
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
yI:function yI(a){this.a=a},
yN:function yN(a,b){this.a=a
this.b=b},
yQ:function yQ(a,b,c){this.a=a
this.b=b
this.c=c},
yK:function yK(a,b){this.a=a
this.b=b},
yJ:function yJ(a,b){this.a=a
this.b=b},
yP:function yP(a,b){this.a=a
this.b=b},
yO:function yO(a,b){this.a=a
this.b=b},
yS:function yS(a,b){this.a=a
this.b=b},
yR:function yR(a,b){this.a=a
this.b=b},
yL:function yL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yM:function yM(a,b){this.a=a
this.b=b},
yH:function yH(a){this.a=a},
lr:function lr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
rp:function rp(a){this.a=a},
ro:function ro(a){this.a=a},
rn:function rn(a,b){this.a=a
this.b=b},
yb:function yb(a,b,c,d,e,f){var _=this
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
yc:function yc(a,b){this.a=a
this.b=b},
yd:function yd(a,b){this.a=a
this.b=b},
ye:function ye(a){this.a=a},
JC(){var s=v.G
if(A.Is(s,"DedicatedWorkerGlobalScope"))return new A.om(s,new A.on(s.location.href))
else return new A.oR(s,new A.on(s.location.href))},
kl:function kl(){},
om:function om(a,b){this.a=a
this.b=b},
oR:function oR(a,b){this.a=a
this.b=b},
Ad:function Ad(a){this.a=a},
Ae:function Ae(a,b,c){this.a=a
this.b=b
this.c=c},
Ac:function Ac(a){this.a=a},
Aa:function Aa(a){this.a=a},
Ab:function Ab(a){this.a=a},
on:function on(a){this.a=a},
zd:function zd(a){this.a=a},
nl:function nl(a,b,c){this.c=a
this.a=b
this.b=c},
xf:function xf(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
ho:function ho(){},
ow:function ow(){},
cw:function cw(a,b){this.a=a
this.b=b},
br(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.Ga(new A.zg(c),t.m)
s=s==null?null:A.cX(s)}s=new A.jS(a,b,s,!1,e.i("jS<0>"))
s.jF()
return s},
Ga(a,b){var s=$.C
if(s===B.i)return a
return s.hG(a,b)},
C6:function C6(a,b){this.a=a
this.$ti=b},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jS:function jS(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
zg:function zg(a){this.a=a},
zh:function zh(a){this.a=a},
GN(a){return v.mangledGlobalNames[a]},
GB(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Iv(a,b){return b in a},
Ci(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
MK(a,b,c,d){var s,r,q,p,o,n=A.v(d,c.i("p<0>"))
for(s=c.i("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.l([],s)
n.j(0,p,o)
p=o}else p=o
J.aN(p,q)}return n},
Cf(a){var s=J.E(a.a)
if(new A.cU(s,a.b,a.$ti.i("cU<1>")).k())return s.gn()
return null},
Ba(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.H(a)
a[r]=s&255
b=s/256|0;--r}},
Nk(a){return a},
GL(a){if(a instanceof A.dw)return a
return new A.dw(a)},
Nl(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.D(p)
if(q instanceof A.hd){s=q
throw A.b(A.Jj("Invalid "+a+": "+s.a,s.b,s.gfS()))}else if(t.Y.b(q)){r=q
throw A.b(A.a8("Invalid "+a+' "'+b+'": '+r.gie(),r.gfS(),r.gar()))}else throw p}},
fh(a){if(B.a.bR(a,"\\"))throw A.b(A.aR('Filter value "'+a+'" ends with a backslash: unrepresentable in a PB filter literal (the closing quote would be escaped).'))
return"'"+A.B(a,"'","\\'")+"'"},
Ng(a,b,c,d){var s="("+d+"="+A.fh(a)+" && id~"+A.fh(b+"%")
if(c==null)return s+")"
return s+" && id>"+A.fh(c)+")"},
i5(){var s,r,q,p=$.Ho(),o=$.Hh()+1
$.L5=o
s=B.a.il(B.c.kA(o,36),8,"0")
r=J.Ec(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cJ(36)]
return B.a.A(s+B.b.ee(r),0,15)},
N5(a,b){var s,r,q,p=A.v(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
if(a.I(q))p.j(0,q,a.h(0,q))}return p},
N6(a,b){var s,r,q=A.l([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.push(A.N5(a[r],b))
return q},
po(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.D(q)
if(r instanceof A.cN)throw q
else{s=r
r=A.hh("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
Bj(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.j
try{s=B.h.aw(a,null)
if(t.f.b(s)){q=A.bl(s,t.N,t.X)
return q}return B.j}catch(p){r=A.D(p)
q=A.hh("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Gm(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bf
try{s=B.h.aw(a,null)
if(t.j.b(s)){q=J.pv(s,t.N)
q=q.fG(q)
return q}return B.bf}catch(p){r=A.D(p)
q=A.hh("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
Gl(a){var s,r,q,p,o=null
if(a==null)return B.u
A.F(a)
if(a.length===0)return B.u
s=B.h.aw(a,o)
if(!t.j.b(s))throw A.b(A.a8("expected a JSON array, got "+J.bZ(s).l(0),o,o))
r=A.l([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.t(A.a8("dirty-field member is "+J.bZ(p).l(0)+", expected String",o,o)))}return r},
fe(a){var s,r=J.L(a)
if(r.gE(a))return null
s=J.bY(r.gH(a).gaX())
if(A.av(s))return s
if(typeof s=="string")return A.jg(s,null)
return null},
Gq(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.d_(B.x.wL(r*J.Hw(d.$1(o),0.5,1.5)),0,0)},
N1(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.cf)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.a8("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.as(r)!==32)throw A.b(B.ce)
q=new Uint8Array(32)
for(p=J.L(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.av(n)||n<0||n>255)throw A.b(A.a8("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.DH(q)
p=$.BW()
if($.kB()!==B.P)A.t(A.A("BigEndian systems are unsupported"))
return new A.pz(new A.ln(12,32,m),new A.jp(new A.n5(A.DH(q)),m),p)},
MY(){var s=A.JC(),r=t.cj
new A.yb(s,B.bO,A.l([],t.az),A.v(t.S,t.lp),new A.j4(A.Cm(r)),new A.j4(A.Cm(r))).ec()},
Gk(){var s,r,q,p,o=null
try{o=A.CM()}catch(s){if(t.mA.b(A.D(s))){r=$.AX
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.FE)){r=$.AX
r.toString
return r}$.FE=o
if($.Du()===$.kD())r=$.AX=o.bX(".").l(0)
else{q=o.kz()
p=q.length-1
r=$.AX=p===0?q:B.a.A(q,0,p)}return r},
Gt(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
Gn(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Gt(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
MT(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gH(0)
for(r=A.cu(a,1,null,a.$ti.i("Z.E")),q=r.$ti,r=new A.ao(r,r.gm(0),q.i("ao<Z.E>")),q=q.i("Z.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
N8(a,b){var s=B.b.bS(a,null)
if(s<0)throw A.b(A.Q(A.r(a)+" contains no null elements.",null))
a[s]=b},
GF(a,b){var s=B.b.bS(a,b)
if(s<0)throw A.b(A.Q(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Mt(a,b){var s,r,q,p
for(s=new A.ch(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<I.E>")),r=r.i("I.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
Bq(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.cc(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bS(a,b)
while(r!==-1){q=r===0?0:B.a.i9(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.cc(a,b,r+1)}return null},
Dg(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c6(A.dX(r.b,p.sqlite3_errmsg(q),null),A.dX(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
BR(a,b,c,d,e){throw A.b(A.Dg(a.a,a.b,b,c,d,e))},
DL(a){if(a.a0(0,$.GQ())<0||a.a0(0,$.GP())>0)throw A.b(A.E0("BigInt value exceeds the range of 64 bits"))
return a},
J8(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.aq(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dX(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.EQ(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
E7(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bv("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cJ(61)))
return s.charCodeAt(0)==0?s:s},
wJ(a){var s=0,r=A.h(t.lo),q
var $async$wJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(a.arrayBuffer(),t.a),$async$wJ)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wJ,r)}},B={}
var w=[A,J,B]
var $={}
A.Ck.prototype={}
J.m5.prototype={
P(a,b){return a===b},
gJ(a){return A.eE(a)},
l(a){return"Instance of '"+A.mK(a)+"'"},
gaj(a){return A.bJ(A.D6(this))}}
J.m7.prototype={
l(a){return String(a)},
gJ(a){return a?519018:218159},
gaj(a){return A.bJ(t.y)},
$iak:1,
$iP:1}
J.iM.prototype={
P(a,b){return null==b},
l(a){return"null"},
gJ(a){return 0},
gaj(a){return A.bJ(t.P)},
$iak:1,
$iW:1}
J.aE.prototype={$iM:1}
J.dG.prototype={
gJ(a){return 0},
gaj(a){return B.dK},
l(a){return String(a)}}
J.mH.prototype={}
J.dU.prototype={}
J.bP.prototype={
l(a){var s=a[$.GT()]
if(s==null)s=a[$.fi()]
if(s==null)return this.ov(a)
return"JavaScript function for "+J.a0(s)}}
J.bt.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.fM.prototype={
gJ(a){return 0},
l(a){return String(a)}}
J.z.prototype={
f_(a,b){return new A.bN(a,A.a_(a).i("@<1>").W(b).i("bN<1,2>"))},
t(a,b){a.$flags&1&&A.H(a,29)
a.push(b)},
iv(a,b){var s
a.$flags&1&&A.H(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.wI(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.H(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.wI(b,null))
a.splice(b,0,c)},
ke(a,b,c){var s,r
a.$flags&1&&A.H(a,"insertAll",2)
A.Ez(b,0,a.length,"index")
if(!t.O.b(c))c=J.HG(c)
s=J.as(c)
a.length=a.length+s
r=b+s
this.ah(a,r,a.length,a,b)
this.av(a,b,r,c)},
kt(a){a.$flags&1&&A.H(a,"removeLast",1)
if(a.length===0)throw A.b(A.Bn(a,-1))
return a.pop()},
G(a,b){var s
a.$flags&1&&A.H(a,"remove",1)
for(s=0;s<a.length;++s)if(J.x(a[s],b)){a.splice(s,1)
return!0}return!1},
rz(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.aA(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
dt(a,b){return new A.am(a,b,A.a_(a).i("am<1>"))},
D(a,b){var s
a.$flags&1&&A.H(a,"addAll",2)
if(Array.isArray(b)){this.oT(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
oT(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aA(a))
for(s=0;s<r;++s)a.push(b[s])},
am(a){a.$flags&1&&A.H(a,"clear","clear")
a.length=0},
cg(a,b,c){return new A.X(a,b,A.a_(a).i("@<1>").W(c).i("X<1,2>"))},
B(a,b){var s,r=A.ab(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
ee(a){return this.B(a,"")},
cN(a,b){return A.cu(a,0,A.cz(b,"count",t.S),A.a_(a).c)},
bi(a,b){return A.cu(a,b,null,A.a_(a).c)},
fb(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aA(a))}if(c!=null)return c.$0()
throw A.b(A.aD())},
mO(a,b){return this.fb(a,b,null)},
a9(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.ax(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ax(c,b,a.length,"end",null))
if(b===c)return A.l([],A.a_(a))
return A.l(a.slice(b,c),A.a_(a))},
b5(a,b){return this.T(a,b,null)},
fO(a,b,c){A.bd(b,c,a.length)
return A.cu(a,b,c,A.a_(a).c)},
gH(a){if(a.length>0)return a[0]
throw A.b(A.aD())},
ga1(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aD())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aD())
throw A.b(A.iJ())},
ku(a,b,c){a.$flags&1&&A.H(a,18)
A.bd(b,c,a.length)
a.splice(b,c-b)},
ah(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.H(a,5)
A.bd(b,c,a.length)
s=c-b
if(s===0)return
A.bc(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.py(d,e).bY(0,!1)
q=0}p=J.L(r)
if(q+s>p.gm(r))throw A.b(A.Ea())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
bO(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aA(a))}return!1},
cE(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aA(a))}return!0},
cm(a,b){var s,r,q,p,o
a.$flags&2&&A.H(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.L9()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a_(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e9(b,2))
if(p>0)this.rA(a,p)},
aF(a){return this.cm(a,null)},
rA(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bS(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
dg(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.x(a[s],b))return s
return-1},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gX(a){return a.length!==0},
l(a){return A.tA(a,"[","]")},
bY(a,b){var s=A.l(a.slice(0),A.a_(a))
return s},
cO(a){return this.bY(a,!0)},
gu(a){return new J.fn(a,a.length,A.a_(a).i("fn<1>"))},
gJ(a){return A.eE(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.H(a,"set length","change the length of")
if(b<0)throw A.b(A.ax(b,0,null,"newLength",null))
if(b>a.length)A.a_(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.Bn(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
if(!(b>=0&&b<a.length))throw A.b(A.Bn(a,b))
a[b]=c},
mS(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gaj(a){return A.bJ(A.a_(a))},
$ibb:1,
$iK:1,
$io:1,
$ip:1}
J.m6.prototype={
wW(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mK(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.tB.prototype={}
J.fn.prototype={
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
else if(a===b){if(a===0){s=this.gki(b)
if(this.gki(a)===s)return 0
if(this.gki(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gki(a){return a===0?1/a<0:a<0},
iw(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
tP(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
v3(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
wL(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bP(a,b,c){if(this.a0(b,c)>0)throw A.b(A.fb(b))
if(this.a0(a,b)<0)return b
if(this.a0(a,c)>0)return c
return a},
kA(a,b){var s,r,q,p
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
gJ(a){var s,r,q,p,o=a|0
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
iO(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.mc(a,b)},
M(a,b){return(a|0)===a?a/b|0:this.mc(a,b)},
mc(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bD(a,b){if(b<0)throw A.b(A.fb(b))
return b>31?0:a<<b>>>0},
rW(a,b){return b>31?0:a<<b>>>0},
dA(a,b){var s
if(b<0)throw A.b(A.fb(b))
if(a>0)s=this.jD(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
af(a,b){var s
if(a>0)s=this.jD(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ma(a,b){if(0>b)throw A.b(A.fb(b))
return this.jD(a,b)},
jD(a,b){return b>31?0:a>>>b},
o6(a,b){return a>b},
gaj(a){return A.bJ(t.o)},
$iaw:1,
$iaa:1,
$iaW:1}
J.iL.prototype={
gmx(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.M(q,4294967296)
s+=32}return s-Math.clz32(q)},
gaj(a){return A.bJ(t.S)},
$iak:1,
$ii:1}
J.m8.prototype={
gaj(a){return A.bJ(t.W)},
$iak:1}
J.dE.prototype={
jM(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.oV(b,a,c)},
hB(a,b){return this.jM(a,b,0)},
ei(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.hk(c,a)},
bR(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ae(a,r-s)},
kw(a,b,c){A.Ez(0,0,a.length,"startIndex")
return A.Nf(a,b,c,0)},
cS(a,b){var s
if(typeof b=="string")return A.l(a.split(b),t.s)
else{if(b instanceof A.eu){s=b.e
s=!(s==null?b.e=b.pt():s)}else s=!1
if(s)return A.l(a.split(b.b),t.s)
else return this.pG(a,b)}},
dm(a,b,c,d){var s=A.bd(b,c,a.length)
return A.GJ(a,b,s,d)},
pG(a,b){var s,r,q,p,o,n,m=A.l([],t.s)
for(s=J.BY(b,a),s=s.gu(s),r=0,q=1;s.k();){p=s.gn()
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
A(a,b,c){return a.substring(b,A.bd(b,c,a.length))},
ae(a,b){return this.A(a,b,null)},
ck(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Iw(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.Ef(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
wU(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.Ef(r,s))},
bg(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bP)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
il(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bg(c,s)+a},
wa(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bg(" ",s)},
cc(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bS(a,b){return this.cc(a,b,0)},
i9(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dg(a,b){return this.i9(a,b,null)},
F(a,b){return A.Nc(a,b,0)},
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
$ibb:1,
$iak:1,
$iaw:1,
$ik:1}
A.z5.prototype={
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
B.f.av(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.av(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.H(r)
r[q+m]=l}k.a=s},
ky(){var s,r=this
if(r.a===0)return $.ps()
s=J.bL(B.f.gab(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.ps()
return s},
gm(a){return this.a}}
A.yE.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b8(b))
this.b.push(s)
this.a=this.a+s.length},
ky(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.ps()
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
gu(a){return new A.l6(J.E(this.gba()),A.n(this).i("l6<1,2>"))},
gm(a){return J.as(this.gba())},
gE(a){return J.bA(this.gba())},
gX(a){return J.ec(this.gba())},
bi(a,b){var s=A.n(this)
return A.fp(J.py(this.gba(),b),s.c,s.y[1])},
cN(a,b){var s=A.n(this)
return A.fp(J.C0(this.gba(),b),s.c,s.y[1])},
a9(a,b){return A.n(this).y[1].a(J.pw(this.gba(),b))},
gH(a){return A.n(this).y[1].a(J.bY(this.gba()))},
ga1(a){return A.n(this).y[1].a(J.px(this.gba()))},
gap(a){return A.n(this).y[1].a(J.C_(this.gba()))},
F(a,b){return J.BZ(this.gba(),b)},
l(a){return J.a0(this.gba())}}
A.l6.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ef.prototype={
gba(){return this.a}}
A.jP.prototype={$iK:1}
A.jM.prototype={
h(a,b){return this.$ti.y[1].a(J.V(this.a,b))},
j(a,b,c){J.cY(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.HB(this.a,b)},
t(a,b){J.aN(this.a,this.$ti.c.a(b))},
cm(a,b){var s=b==null?null:new A.yF(this,b)
J.DF(this.a,s)},
fO(a,b,c){var s=this.$ti
return A.fp(J.Hy(this.a,b,c),s.c,s.y[1])},
ah(a,b,c,d,e){var s=this.$ti
J.HC(this.a,b,c,A.fp(d,s.y[1],s.c),e)},
av(a,b,c,d){return this.ah(0,b,c,d,0)},
$iK:1,
$ip:1}
A.yF.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bN.prototype={
f_(a,b){return new A.bN(this.a,this.$ti.i("@<1>").W(b).i("bN<1,2>"))},
gba(){return this.a}}
A.eg.prototype={
c9(a,b,c){return new A.eg(this.a,this.$ti.i("@<1,2>").W(b).W(c).i("eg<1,2,3,4>"))},
I(a){return this.a.I(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a8(a,b){this.a.a8(0,new A.pZ(this,b))},
gK(){var s=this.$ti
return A.fp(this.a.gK(),s.c,s.y[2])},
gaX(){var s=this.$ti
return A.fp(this.a.gaX(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gX(a){var s=this.a
return s.gX(s)},
ga7(){var s=this.a.ga7()
return s.cg(s,new A.pY(this),this.$ti.i("S<3,4>"))}}
A.pZ.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.pY.prototype={
$1(a){var s=this.a.$ti
return new A.S(s.y[2].a(a.a),s.y[3].a(a.b),s.i("S<3,4>"))},
$S(){return this.a.$ti.i("S<3,4>(S<1,2>)")}}
A.dF.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mT.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.ch.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.BE.prototype={
$0(){return A.ba(null,t.H)},
$S:3}
A.wV.prototype={}
A.K.prototype={}
A.Z.prototype={
gu(a){var s=this
return new A.ao(s,s.gm(s),A.n(s).i("ao<Z.E>"))},
gE(a){return this.gm(this)===0},
gH(a){if(this.gm(this)===0)throw A.b(A.aD())
return this.a9(0,0)},
ga1(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
return s.a9(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
if(s.gm(s)>1)throw A.b(A.iJ())
return s.a9(0,0)},
F(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.x(r.a9(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.aA(r))}return!1},
cE(a,b){var s,r=this,q=r.gm(r)
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
dt(a,b){return this.oq(0,b)},
cg(a,b,c){return new A.X(this,b,A.n(this).i("@<Z.E>").W(c).i("X<1,2>"))},
wB(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aD())
s=q.a9(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a9(0,r))
if(p!==q.gm(q))throw A.b(A.aA(q))}return s},
bi(a,b){return A.cu(this,b,null,A.n(this).i("Z.E"))},
cN(a,b){return A.cu(this,0,A.cz(b,"count",t.S),A.n(this).i("Z.E"))}}
A.ct.prototype={
iP(a,b,c,d){var s,r=this.b
A.bc(r,"start")
s=this.c
if(s!=null){A.bc(s,"end")
if(r>s)throw A.b(A.ax(r,0,s,"start",null))}},
gpQ(){var s=J.as(this.a),r=this.c
if(r==null||r>s)return s
return r},
gt_(){var s=J.as(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.as(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a9(a,b){var s=this,r=s.gt_()+b
if(b<0||r>=s.gpQ())throw A.b(A.m2(b,s.gm(0),s,null,"index"))
return J.pw(s.a,r)},
bi(a,b){var s,r,q=this
A.bc(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.ep(q.$ti.i("ep<1>"))
return A.cu(q.a,s,r,q.$ti.c)},
cN(a,b){var s,r,q,p=this
A.bc(b,"count")
s=p.c
r=p.b
if(s==null)return A.cu(p.a,r,B.c.fL(r,b),p.$ti.c)
else{q=B.c.fL(r,b)
if(s<q)return p
return A.cu(p.a,r,q,p.$ti.c)}},
bY(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.L(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.Ch(0,n):J.Cg(0,n)}r=A.ab(s,m.a9(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a9(n,o+q)
if(m.gm(n)<l)throw A.b(A.aA(p))}return r},
cO(a){return this.bY(0,!0)}}
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
gu(a){return new A.mk(J.E(this.a),this.b,A.n(this).i("mk<1,2>"))},
gm(a){return J.as(this.a)},
gE(a){return J.bA(this.a)},
gH(a){return this.b.$1(J.bY(this.a))},
ga1(a){return this.b.$1(J.px(this.a))},
gap(a){return this.b.$1(J.C_(this.a))},
a9(a,b){return this.b.$1(J.pw(this.a,b))}}
A.eo.prototype={$iK:1}
A.mk.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.as(this.a)},
a9(a,b){return this.b.$1(J.pw(this.a,b))}}
A.am.prototype={
gu(a){return new A.cU(J.E(this.a),this.b,this.$ti.i("cU<1>"))},
cg(a,b,c){return new A.ck(this,b,this.$ti.i("@<1>").W(c).i("ck<1,2>"))}}
A.cU.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.iz.prototype={
gu(a){return new A.lB(J.E(this.a),this.b,B.aR,this.$ti.i("lB<1,2>"))}}
A.lB.prototype={
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
return new A.nA(s.gu(s),this.b,A.n(this).i("nA<1>"))}}
A.iv.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.o6(r,s))return s
return r},
$iK:1}
A.nA.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.db.prototype={
bi(a,b){A.kN(b,"count")
A.bc(b,"count")
return new A.db(this.a,this.b+b,A.n(this).i("db<1>"))},
gu(a){var s=this.a
return new A.n8(s.gu(s),this.b,A.n(this).i("n8<1>"))}}
A.fA.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bi(a,b){A.kN(b,"count")
A.bc(b,"count")
return new A.fA(this.a,this.b+b,this.$ti)},
$iK:1}
A.n8.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.ep.prototype={
gu(a){return B.aR},
gE(a){return!0},
gm(a){return 0},
gH(a){throw A.b(A.aD())},
ga1(a){throw A.b(A.aD())},
gap(a){throw A.b(A.aD())},
a9(a,b){throw A.b(A.ax(b,0,0,"index",null))},
F(a,b){return!1},
cE(a,b){return!0},
dt(a,b){return this},
cg(a,b,c){return new A.ep(c.i("ep<0>"))},
bi(a,b){A.bc(b,"count")
return this},
cN(a,b){A.bc(b,"count")
return this},
bY(a,b){var s=J.Cg(0,this.$ti.c)
return s},
fG(a){return A.mi(this.$ti.c)}}
A.ly.prototype={
k(){return!1},
gn(){throw A.b(A.aD())}}
A.dW.prototype={
gu(a){return new A.o_(J.E(this.a),this.$ti.i("o_<1>"))}}
A.o_.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.iC.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.nM.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
cm(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ah(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
av(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.hp.prototype={}
A.bw.prototype={
gm(a){return J.as(this.a)},
a9(a,b){var s=this.a,r=J.L(s)
return r.a9(s,r.gm(s)-1-b)}}
A.jx.prototype={
gJ(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gJ(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
P(a,b){if(b==null)return!1
return b instanceof A.jx&&this.a===b.a}}
A.km.prototype={}
A.a4.prototype={$r:"+(1,2)",$s:1}
A.k4.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.k5.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hN.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.oI.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.f3.prototype={$r:"+(1,2,3)",$s:7}
A.f4.prototype={$r:"+(1,2,3,4)",$s:8}
A.oJ.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.ir.prototype={}
A.fx.prototype={
c9(a,b,c){var s=A.n(this)
return A.Ej(this,s.c,s.y[1],b,c)},
gE(a){return this.gm(this)===0},
gX(a){return this.gm(this)!==0},
l(a){return A.uW(this)},
j(a,b,c){A.HZ()},
ga7(){return new A.hS(this.uQ(),A.n(this).i("hS<S<1,2>>"))},
uQ(){var s=this
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
aT(a,b,c,d){var s=A.v(c,d)
this.a8(0,new A.qH(this,b,s))
return s},
$iJ:1}
A.qH.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aX.prototype={
gm(a){return this.b.length},
glH(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
I(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.I(b))return null
return this.b[this.a[b]]},
a8(a,b){var s,r,q=this.glH(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.f0(this.glH(),this.$ti.i("f0<1>"))},
gaX(){return new A.f0(this.b,this.$ti.i("f0<2>"))}}
A.f0.prototype={
gm(a){return this.a.length},
gE(a){return 0===this.a.length},
gX(a){return 0!==this.a.length},
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
A.iE.prototype={
dK(){var s=this,r=s.$map
if(r==null){r=new A.iN(s.$ti.i("iN<1,2>"))
A.Gr(s.a,r)
s.$map=r}return r},
I(a){return this.dK().I(a)},
h(a,b){return this.dK().h(0,b)},
a8(a,b){this.dK().a8(0,b)},
gK(){var s=this.dK()
return new A.T(s,A.n(s).i("T<1>"))},
gaX(){var s=this.dK()
return new A.al(s,A.n(s).i("al<2>"))},
gm(a){return this.dK().a}}
A.is.prototype={
t(a,b){A.I_()}}
A.dy.prototype={
gm(a){return this.b},
gE(a){return this.b===0},
gX(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hI(s,s.length,r.$ti.i("hI<1>"))},
F(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.tv.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.iI&&this.a.P(0,b.a)&&A.Dk(this)===A.Dk(b)},
gJ(a){return A.c4(this.a,A.Dk(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bJ(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iI.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.MS(A.pk(this.a),this.$ti)}}
A.w3.prototype={
$0(){return B.x.v3(1000*this.a.now())},
$S:11}
A.jm.prototype={}
A.xF.prototype={
bT(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.jb.prototype={
l(a){return"Null check operator used on a null value"}}
A.m9.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.nL.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mz.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iG:1}
A.ix.prototype={}
A.k7.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaF:1}
A.ei.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.GO(r==null?"unknown":r)+"'"},
gaj(a){var s=A.pk(this)
return A.bJ(s==null?A.bh(this):s)},
gy0(){return this},
$C:"$1",
$R:1,
$D:null}
A.q3.prototype={$C:"$0",$R:0}
A.q4.prototype={$C:"$2",$R:2}
A.xv.prototype={}
A.x5.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.GO(s)+"'"}}
A.ij.prototype={
P(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ij))return!1
return this.$_target===b.$_target&&this.a===b.a},
gJ(a){return(A.kx(this.a)^A.eE(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mK(this.a)+"'")}}
A.n1.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bD.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gX(a){return this.a!==0},
gK(){return new A.T(this,A.n(this).i("T<1>"))},
gaX(){return new A.al(this,A.n(this).i("al<2>"))},
ga7(){return new A.aP(this,A.n(this).i("aP<1,2>"))},
I(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mU(a)},
mU(a){var s=this.d
if(s==null)return!1
return this.df(this.lB(s,a),a)>=0},
D(a,b){b.a8(0,new A.tC(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mV(b)},
mV(a){var s,r,q=this.d
if(q==null)return null
s=this.lB(q,a)
r=this.df(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.l_(s==null?q.b=q.jo():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.l_(r==null?q.c=q.jo():r,b,c)}else q.mX(b,c)},
mX(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jo()
s=p.ed(a)
r=o[s]
if(r==null)o[s]=[p.iR(a,b)]
else{q=p.df(r,a)
if(q>=0)r[q].b=b
else r.push(p.iR(a,b))}},
n8(a,b){var s,r,q=this
if(q.I(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
G(a,b){var s=this
if(typeof b=="string")return s.m1(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.m1(s.c,b)
else return s.mW(b)},
mW(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ed(a)
r=n[s]
q=o.df(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mi(p)
if(r.length===0)delete n[s]
return p.b},
am(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iQ()}},
a8(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aA(s))
r=r.c}},
l_(a,b,c){var s=a[b]
if(s==null)a[b]=this.iR(b,c)
else s.b=c},
m1(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mi(s)
delete a[b]
return s.b},
iQ(){this.r=this.r+1&1073741823},
iR(a,b){var s,r=this,q=new A.uF(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iQ()
return q},
mi(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iQ()},
ed(a){return J.a7(a)&1073741823},
lB(a,b){return a[this.ed(b)]},
df(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.uW(this)},
jo(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.tC.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.uF.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bE(s,s.r,s.e,this.$ti.i("bE<1>"))},
F(a,b){return this.a.I(b)}}
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
gE(a){return this.a.a===0},
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
A.aP.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.mh(s,s.r,s.e,this.$ti.i("mh<1,2>"))}}
A.mh.prototype={
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
A.iO.prototype={
ed(a){return A.kx(a)&1073741823},
df(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iN.prototype={
ed(a){return A.Ml(a)&1073741823},
df(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.By.prototype={
$1(a){return this.a(a)},
$S:32}
A.Bz.prototype={
$2(a,b){return this.a(a,b)},
$S:221}
A.BA.prototype={
$1(a){return this.a(a)},
$S:67}
A.hM.prototype={
gaj(a){return A.bJ(this.lC())},
lC(){return A.MB(this.$r,this.ha())},
l(a){return this.mg(!1)},
mg(a){var s,r,q,p,o,n=this.pZ(),m=this.ha(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Eu(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
pZ(){var s,r=this.$s
while($.A0.length<=r)$.A0.push(null)
s=$.A0[r]
if(s==null){s=this.ps()
$.A0[r]=s}return s},
ps(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.Ec(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fN(j,k)}}
A.oF.prototype={
ha(){return[this.a,this.b]},
P(a,b){if(b==null)return!1
return b instanceof A.oF&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gJ(a){return A.c4(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.oG.prototype={
ha(){return[this.a,this.b,this.c]},
P(a,b){var s=this
if(b==null)return!1
return b instanceof A.oG&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gJ(a){var s=this
return A.c4(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.oH.prototype={
ha(){return this.a},
P(a,b){if(b==null)return!1
return b instanceof A.oH&&this.$s===b.$s&&A.Kf(this.a,b.a)},
gJ(a){return A.c4(this.$s,A.vn(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eu.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glO(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.Cj(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqD(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.Cj(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pt(){var s,r=this.a
if(!B.a.F(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ea(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hL(s)},
jM(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.o5(this,b,c)},
hB(a,b){return this.jM(0,b,0)},
pW(a,b){var s,r=this.glO()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hL(s)},
pV(a,b){var s,r=this.gqD()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hL(s)},
ei(a,b,c){if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,null,null))
return this.pV(b,c)}}
A.hL.prototype={
gR(){return this.b.index},
gN(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$iey:1,
$imU:1}
A.o5.prototype={
gu(a){return new A.o6(this.a,this.b,this.c)}}
A.o6.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.pW(l,s)
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
h(a,b){if(b!==0)throw A.b(A.wI(b,null))
return this.c},
$iey:1,
gR(){return this.a}}
A.oV.prototype={
gu(a){return new A.Am(this.a,this.b,this.c)},
gH(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.hk(r,s)
throw A.b(A.aD())}}
A.Am.prototype={
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
A.oe.prototype={
bu(){var s=this.b
if(s===this)throw A.b(new A.dF("Local '"+this.a+"' has not been initialized."))
return s},
bt(){var s=this.b
if(s===this)throw A.b(A.Ei(this.a))
return s},
sk7(a){var s=this
if(s.b!==s)throw A.b(new A.dF("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fU.prototype={
gaj(a){return B.dD},
hD(a,b,c){A.hZ(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mu(a){return this.hD(a,0,null)},
mt(a,b,c){A.hZ(a,b,c)
if(c==null)c=B.c.M(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hC(a,b,c){A.hZ(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
ms(a){return this.hC(a,0,null)},
$iak:1,
$iee:1}
A.fT.prototype={$ifT:1}
A.j6.prototype={
gab(a){if(((a.$flags|0)&2)!==0)return new A.p2(a.buffer)
else return a.buffer},
qt(a,b,c,d){var s=A.ax(b,0,c,d,null)
throw A.b(s)},
la(a,b,c,d){if(b>>>0!==b||b>c)this.qt(a,b,c,d)}}
A.p2.prototype={
hD(a,b,c){var s=A.bS(this.a,b,c)
s.$flags=3
return s},
mu(a){return this.hD(0,0,null)},
mt(a,b,c){var s=A.En(this.a,b,c)
s.$flags=3
return s},
hC(a,b,c){var s=A.Em(this.a,b,c)
s.$flags=3
return s},
ms(a){return this.hC(0,0,null)},
$iee:1}
A.j5.prototype={
gaj(a){return B.dE},
$iak:1,
$iC1:1}
A.fV.prototype={
gm(a){return a.length},
m9(a,b,c,d,e){var s,r,q=a.length
this.la(a,b,q,"start")
this.la(a,c,q,"end")
if(b>c)throw A.b(A.ax(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.Q(e,null))
r=d.length
if(r-e<s)throw A.b(A.A("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ibb:1,
$ibQ:1}
A.dN.prototype={
h(a,b){A.dm(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
A.dm(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.dQ.b(d)){this.m9(a,b,c,d,e)
return}this.kX(a,b,c,d,e)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
$iK:1,
$io:1,
$ip:1}
A.bR.prototype={
j(a,b,c){a.$flags&2&&A.H(a)
A.dm(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.aj.b(d)){this.m9(a,b,c,d,e)
return}this.kX(a,b,c,d,e)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
$iK:1,
$io:1,
$ip:1}
A.ms.prototype={
gaj(a){return B.dF},
T(a,b,c){return new Float32Array(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$irR:1}
A.mt.prototype={
gaj(a){return B.dG},
T(a,b,c){return new Float64Array(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$irS:1}
A.mu.prototype={
gaj(a){return B.dH},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$itw:1}
A.mv.prototype={
gaj(a){return B.dI},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$itx:1}
A.mw.prototype={
gaj(a){return B.dJ},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$ity:1}
A.j7.prototype={
gaj(a){return B.dN},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$ixH:1}
A.j8.prototype={
gaj(a){return B.dO},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$ixI:1}
A.j9.prototype={
gaj(a){return B.dP},
gm(a){return a.length},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$ixJ:1}
A.ez.prototype={
gaj(a){return B.dQ},
gm(a){return a.length},
h(a,b){A.dm(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dn(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$iez:1,
$icR:1}
A.k0.prototype={}
A.k1.prototype={}
A.k2.prototype={}
A.k3.prototype={}
A.cp.prototype={
i(a){return A.kg(v.typeUniverse,this,a)},
W(a){return A.Fh(v.typeUniverse,this,a)}}
A.os.prototype={}
A.p_.prototype={
l(a){return A.bW(this.a,null)}}
A.op.prototype={
l(a){return this.a}}
A.kc.prototype={$ide:1}
A.ym.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:26}
A.yl.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:197}
A.yn.prototype={
$0(){this.a.$0()},
$S:2}
A.yo.prototype={
$0(){this.a.$0()},
$S:2}
A.kb.prototype={
oP(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e9(new A.Aq(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oQ(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e9(new A.Ap(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
C(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$idd:1}
A.Aq.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.Ap.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.iO(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.jF.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aD(a)
else{s=r.a
if(r.$ti.i("y<1>").b(a))s.l9(a)
else s.cW(a)}},
bQ(a,b){var s
if(b==null)b=A.ig(a)
s=this.a
if(this.b)s.al(new A.an(a,b))
else s.co(new A.an(a,b))},
aS(a){return this.bQ(a,null)},
$iip:1}
A.AQ.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.AR.prototype={
$2(a,b){this.a.$2(1,new A.ix(a,b))},
$S:236}
A.B8.prototype={
$2(a,b){this.a(a,b)},
$S:103}
A.AO.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.u()
s=q.b
if((s&1)!==0?(q.gaL().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.AP.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:26}
A.o8.prototype={
oL(a,b){var s=new A.yq(a)
this.a=A.x7(new A.ys(this,a),new A.yt(s),new A.yu(this,s),!1,b)}}
A.yq.prototype={
$0(){A.kA(new A.yr(this.a))},
$S:2}
A.yr.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.yt.prototype={
$0(){this.a.$0()},
$S:0}
A.yu.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.ys.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.u()
if((r.b&4)===0){s.c=new A.w($.C,t._)
if(s.b){s.b=!1
A.kA(new A.yp(this.b))}return s.c}},
$S:134}
A.yp.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jX.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.oX.prototype={
gn(){return this.b},
rB(a,b){var s,r,q
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
o.d=null}q=o.rB(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.Fb
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.Fb
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.A("sync*"))}return!1},
y3(a){var s,r,q=this
if(a instanceof A.hS){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hS.prototype={
gu(a){return new A.oX(this.a(),this.$ti.i("oX<1>"))}}
A.an.prototype={
l(a){return A.r(this.a)},
$iae:1,
gcn(){return this.b}}
A.b1.prototype={}
A.eV.prototype={
bI(){},
bJ(){}}
A.jL.prototype={
gcT(){return new A.b1(this,A.n(this).i("b1<1>"))},
gi8(){return(this.c&4)!==0},
gjm(){return this.c<4},
rw(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jE(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.F2(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.oc(r,a,s.c)
n=A.yB(r,b)
m=c==null?A.B9():c
l=new A.eV(j,o,n,r.bW(m,t.H),r,q|p,s.i("eV<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.pg(j.a)
return l},
lW(a){var s,r=this
A.n(r).i("eV<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.rw(a)
if((r.c&2)===0&&r.d==null)r.pf()}return null},
lX(a){},
lY(a){},
iT(){if((this.c&4)!==0)return new A.bm("Cannot add new events after calling close")
return new A.bm("Cannot add new events while doing an addStream")},
t(a,b){if(!this.gjm())throw A.b(this.iT())
this.cv(b)},
bx(a,b){var s
if(!this.gjm())throw A.b(this.iT())
s=A.f8(a,b)
this.cw(s.a,s.b)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjm())throw A.b(q.iT())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.C,t.D)
q.d5()
return r},
aH(a,b){this.cw(a,b)},
aR(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aD(null)},
pf(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aD(null)}A.pg(this.b)},
$ibC:1}
A.jG.prototype={
cv(a){var s,r
for(s=this.d,r=this.$ti.i("c9<1>");s!=null;s=s.ch)s.c1(new A.c9(a,r))},
cw(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.c1(new A.hD(a,b))},
d5(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.c1(B.ab)
else this.r.aD(null)}}
A.t0.prototype={
$0(){this.c.a(null)
this.b.cp(null)},
$S:0}
A.t2.prototype={
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
A.t1.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.cY(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.l([],l.i("z<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aN(s,n)}m.c.cW(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.al(new A.an(s,l))}},
$S(){return this.d.i("W(0)")}}
A.rW.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aF)")}}
A.nB.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iG:1}
A.rX.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.l([],l.c.i("z<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aB(s)}else{s=A.l([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(r[p].c)
q=l.c
n=A.l([],q.i("z<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.q)(r),++p)n.push(r[p].b)
l.a.aS(new A.je(B.b.mO(s,A.LZ()),a,q.i("je<p<0?>,p<an?>>")))}},
$S:9}
A.je.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gcn(){var s=this.c
s=s==null?null:s.b
return s==null?A.ae.prototype.gcn.call(this):s}}
A.jV.prototype={
tg(a){this.a.bq(new A.zm(this,a),new A.zn(this,a),t.P)}}
A.zm.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.zn.prototype={
$2(a,b){this.a.c=new A.an(a,b)
this.b.$1(1)},
$S:7}
A.zl.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:9}
A.eW.prototype={
bQ(a,b){if((this.a.a&30)!==0)throw A.b(A.A("Future already completed"))
this.al(A.f8(a,b))},
aS(a){return this.bQ(a,null)},
$iip:1}
A.aI.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.aD(a)},
an(){return this.aB(null)},
al(a){this.a.co(a)}}
A.ap.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.A("Future already completed"))
s.cp(a)},
an(){return this.aB(null)},
al(a){this.a.al(a)}}
A.ca.prototype={
vW(a){if((this.c&15)!==6)return!0
return this.b.b.es(this.d,a.a,t.y,t.K)},
vh(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kx(r,n,a.b,p,o,t.l)
else q=m.es(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.D(s))){if((this.c&1)!==0)throw A.b(A.Q("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.Q("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
bq(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.az(b,"onError",u.w))}else{a=q.dl(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.FU(b,q)}s=new A.w($.C,c.i("w<0>"))
r=b==null?1:3
this.dE(new A.ca(s,r,a,b,this.$ti.i("@<1>").W(c).i("ca<1,2>")))
return s},
V(a,b){return this.bq(a,null,b)},
me(a,b,c){var s=new A.w($.C,c.i("w<0>"))
this.dE(new A.ca(s,19,a,b,this.$ti.i("@<1>").W(c).i("ca<1,2>")))
return s},
jP(a){var s=this.$ti,r=$.C,q=new A.w(r,s)
if(r!==B.i)a=A.FU(a,r)
this.dE(new A.ca(q,2,null,a,s.i("ca<1,1>")))
return q},
aY(a){var s=this.$ti,r=$.C,q=new A.w(r,s)
if(r!==B.i)a=r.bW(a,t.z)
this.dE(new A.ca(q,8,a,null,s.i("ca<1,1>")))
return q},
rQ(a){this.a=this.a&1|16
this.c=a},
fZ(a){this.a=a.a&30|this.a&1
this.c=a.c},
dE(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dE(a)
return}s.fZ(r)}s.b.cQ(new A.zo(s,a))}},
lU(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lU(a)
return}n.fZ(s)}m.a=n.hl(a)
n.b.cQ(new A.zt(m,n))}},
eR(){var s=this.c
this.c=null
return this.hl(s)},
hl(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cp(a){var s,r=this
if(r.$ti.i("y<1>").b(a))A.zr(a,r,!0)
else{s=r.eR()
r.a=8
r.c=a
A.eZ(r,s)}},
cW(a){var s=this,r=s.eR()
s.a=8
s.c=a
A.eZ(s,r)},
pr(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gcb()===r.gcb())}else s=!1
if(s)return
q=p.eR()
p.fZ(a)
A.eZ(p,q)},
al(a){var s=this.eR()
this.rQ(a)
A.eZ(this,s)},
pq(a,b){this.al(new A.an(a,b))},
aD(a){if(this.$ti.i("y<1>").b(a)){this.l9(a)
return}this.l6(a)},
l6(a){this.a^=2
this.b.cQ(new A.zq(this,a))},
l9(a){A.zr(a,this,!1)
return},
co(a){this.a^=2
this.b.cQ(new A.zp(this,a))},
fF(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.C,r.$ti)
q.aD(r)
return q}s=new A.w($.C,r.$ti)
q.a=null
q.a=A.cQ(a,new A.zz(s,a))
r.bq(new A.zA(q,r,s),new A.zB(q,s),t.P)
return s},
$iy:1}
A.zo.prototype={
$0(){A.eZ(this.a,this.b)},
$S:0}
A.zt.prototype={
$0(){A.eZ(this.b,this.a.a)},
$S:0}
A.zs.prototype={
$0(){A.zr(this.a.a,this.b,!0)},
$S:0}
A.zq.prototype={
$0(){this.a.cW(this.b)},
$S:0}
A.zp.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.zw.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aV(q.d,t.z)}catch(p){s=A.D(p)
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
j.bq(new A.zx(l,m),new A.zy(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.zx.prototype={
$1(a){this.a.pr(this.b)},
$S:26}
A.zy.prototype={
$2(a,b){this.a.al(new A.an(a,b))},
$S:7}
A.zv.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.es(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.D(n)
r=A.ad(n)
q=s
p=r
if(p==null)p=A.ig(q)
o=this.a
o.c=new A.an(q,p)
o.b=!0}},
$S:0}
A.zu.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.vW(s)&&p.a.e!=null){p.c=p.a.vh(s)
p.b=!1}}catch(o){r=A.D(o)
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
A.zz.prototype={
$0(){var s=A.CC()
this.a.al(new A.an(new A.nB("Future not completed",this.b),s))},
$S:0}
A.zA.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.C()
this.c.cW(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.zB.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.C()
this.b.al(new A.an(a,b))}},
$S:7}
A.o7.prototype={}
A.a9.prototype={
ee(a){var s=new A.w($.C,t.os),r=new A.a2(""),q=this.aa(null,!0,new A.xa(s,r),s.gj_())
q.ii(new A.xb(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.C,t.hy)
s.a=0
this.aa(new A.xc(s,this),!0,new A.xd(s,r),r.gj_())
return r},
gH(a){var s=new A.w($.C,A.n(this).i("w<a9.T>")),r=this.aa(null,!0,new A.x8(s),s.gj_())
r.ii(new A.x9(this,r,s))
return s}}
A.xa.prototype={
$0(){var s=this.b.a
this.a.cp(s.charCodeAt(0)==0?s:s)},
$S:0}
A.xb.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.D(o)
r=A.ad(o)
q=s
p=r
n=A.kn(q,p)
if(n==null)q=new A.an(q,p)
else q=n
A.KL(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(a9.T)")}}
A.xc.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(a9.T)")}}
A.xd.prototype={
$0(){this.b.cp(this.a.a)},
$S:0}
A.x8.prototype={
$0(){var s,r=A.CC(),q=new A.bm("No element")
A.mM(q,r)
s=A.kn(q,r)
if(s==null)s=new A.an(q,r)
this.a.al(s)},
$S:0}
A.x9.prototype={
$1(a){A.KM(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(a9.T)")}}
A.ju.prototype={
aa(a,b,c,d){return this.a.aa(a,b,c,d)},
bz(a,b,c){return this.aa(a,null,b,c)},
aN(a){return this.aa(a,null,null,null)}}
A.e3.prototype={
gcT(){return new A.b6(this,A.n(this).i("b6<1>"))},
gi8(){return(this.b&4)!==0},
gqZ(){if((this.b&8)===0)return this.a
return this.a.c},
h3(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e2(A.n(q).i("e2<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e2(A.n(q).i("e2<1>")):s},
gaL(){var s=this.a
return(this.b&8)!==0?s.c:s},
bF(){if((this.b&4)!==0)return new A.bm("Cannot add event after closing")
return new A.bm("Cannot add event while adding a stream")},
tA(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bF())
if((o&2)!==0){o=new A.w($.C,t._)
o.aD(null)
return o}o=p.a
s=b===!0
r=new A.w($.C,t._)
q=s?A.JD(p):p.goU()
q=a.aa(p.goY(),s,p.gph(),q)
s=p.b
if((s&1)!==0?(p.gaL().e&4)!==0:(s&2)===0)q.bd()
p.a=new A.k8(o,r,q,A.n(p).i("k8<1>"))
p.b|=8
return r},
ls(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.eb():new A.w($.C,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bF())
this.aA(b)},
bx(a,b){var s
if(this.b>=4)throw A.b(this.bF())
s=A.f8(a,b)
this.aH(s.a,s.b)},
tz(a){return this.bx(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.ls()
if(r>=4)throw A.b(s.bF())
s.lb()
return s.ls()},
lb(){var s=this.b|=4
if((s&1)!==0)this.d5()
else if((s&3)===0)this.h3().t(0,B.ab)},
aA(a){var s=this,r=s.b
if((r&1)!==0)s.cv(a)
else if((r&3)===0)s.h3().t(0,new A.c9(a,A.n(s).i("c9<1>")))},
aH(a,b){var s=this.b
if((s&1)!==0)this.cw(a,b)
else if((s&3)===0)this.h3().t(0,new A.hD(a,b))},
aR(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aD(null)},
jE(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.A("Stream has already been listened to."))
s=A.JV(p,a,b,c,d,A.n(p).c)
r=p.gqZ()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b1()}else p.a=s
s.rR(r)
s.jb(new A.Ai(p))
return s},
lW(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.C()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.D(o)
p=A.ad(o)
n=new A.w($.C,t.D)
n.co(new A.an(q,p))
k=n}else k=k.aY(s)
m=new A.Ah(l)
if(k!=null)k=k.aY(m)
else m.$0()
return k},
lX(a){if((this.b&8)!==0)this.a.b.bd()
A.pg(this.e)},
lY(a){if((this.b&8)!==0)this.a.b.b1()
A.pg(this.f)},
$ibC:1}
A.Ai.prototype={
$0(){A.pg(this.a.d)},
$S:0}
A.Ah.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aD(null)},
$S:0}
A.oY.prototype={
cv(a){this.gaL().aA(a)},
cw(a,b){this.gaL().aH(a,b)},
d5(){this.gaL().aR()}}
A.jH.prototype={
cv(a){this.gaL().c1(new A.c9(a,A.n(this).i("c9<1>")))},
cw(a,b){this.gaL().c1(new A.hD(a,b))},
d5(){this.gaL().c1(B.ab)}}
A.cV.prototype={}
A.hT.prototype={}
A.b6.prototype={
gJ(a){return(A.eE(this.a)^892482866)>>>0},
P(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b6&&b.a===this.a}}
A.dZ.prototype={
he(){return this.w.lW(this)},
bI(){this.w.lX(this)},
bJ(){this.w.lY(this)}}
A.o4.prototype={
C(){var s=this.b.C()
return s.aY(new A.yh(this))}}
A.yi.prototype={
$2(a,b){var s=this.a
s.aH(a,b)
s.aR()},
$S:7}
A.yh.prototype={
$0(){this.a.a.aD(null)},
$S:2}
A.k8.prototype={}
A.b2.prototype={
rR(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fP(s)}},
ii(a){this.a=A.oc(this.d,a,A.n(this).i("b2.T"))},
bd(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.jb(q.geI())},
b1(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fP(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.jb(s.geJ())}}},
C(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.iW()
r=s.f
return r==null?$.eb():r},
iW(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.he()},
aA(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cv(a)
else s.c1(new A.c9(a,A.n(s).i("c9<b2.T>")))},
aH(a,b){var s
if(t.C.b(a))A.mM(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cw(a,b)
else this.c1(new A.hD(a,b))},
aR(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d5()
else s.c1(B.ab)},
bI(){},
bJ(){},
he(){return null},
c1(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e2(A.n(r).i("e2<b2.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fP(r)}},
cv(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fE(s.a,a,A.n(s).i("b2.T"))
s.e=(s.e&4294967231)>>>0
s.iY((r&4)!==0)},
cw(a,b){var s,r=this,q=r.e,p=new A.yD(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.iW()
s=r.f
if(s!=null&&s!==$.eb())s.aY(p)
else p.$0()}else{p.$0()
r.iY((q&4)!==0)}},
d5(){var s,r=this,q=new A.yC(r)
r.iW()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.eb())s.aY(q)
else q.$0()},
jb(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.iY((r&4)!==0)},
iY(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bI()
else q.bJ()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fP(q)},
$ibn:1}
A.yD.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.nh(s,o,this.c,r,t.l)
else q.fE(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.yC.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fD(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hR.prototype={
aa(a,b,c,d){return this.a.jE(a,d,c,b===!0)},
bz(a,b,c){return this.aa(a,null,b,c)},
aN(a){return this.aa(a,null,null,null)},
vM(a,b){return this.aa(a,null,null,b)}}
A.oo.prototype={
gej(){return this.a},
sej(a){return this.a=a}}
A.c9.prototype={
kq(a){a.cv(this.b)}}
A.hD.prototype={
kq(a){a.cw(this.b,this.c)}}
A.ze.prototype={
kq(a){a.d5()},
gej(){return null},
sej(a){throw A.b(A.A("No events after a done."))}}
A.e2.prototype={
fP(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kA(new A.A_(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sej(b)
s.c=b}}}
A.A_.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gej()
q.b=r
if(r==null)q.c=null
s.kq(this.b)},
$S:0}
A.hE.prototype={
ii(a){},
bd(){var s=this.a
if(s>=0)this.a=s+2},
b1(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kA(s.glQ())}else s.a=r},
C(){this.a=-1
this.c=null
return $.eb()},
qR(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fD(s)}}else r.a=q},
$ibn:1}
A.cy.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.C,t.g5)
r.b=s
r.c=!1
q.b1()
return s}throw A.b(A.A("Already waiting for next."))}return r.qs()},
qs(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.C,t.g5)
q.b=s
r=p.aa(q.gqJ(),!0,q.gqL(),q.gqN())
if(q.b!=null)q.a=r
return s}return $.GU()},
C(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aD(!1)
else s.c=!1
return r.C()}return $.eb()},
qK(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cp(!0)
if(q.c){r=q.a
if(r!=null)r.bd()}},
qO(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.al(new A.an(a,b))
else q.co(new A.an(a,b))},
qM(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cW(!1)
else q.l6(!1)}}
A.jQ.prototype={
aa(a,b,c,d){return A.F2(c,this.$ti.c)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.dk.prototype={
aa(a,b,c,d){var s=null,r=new A.k_(s,s,s,s,this.$ti.i("k_<1>"))
r.d=new A.zY(this,r)
return r.jE(a,d,c,b===!0)},
bz(a,b,c){return this.aa(a,null,b,c)},
aN(a){return this.aa(a,null,null,null)}}
A.zY.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.k_.prototype={
tB(a){var s=this.b
if(s>=4)throw A.b(this.bF())
if((s&1)!==0)this.gaL().aA(a)},
tR(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bF())
r|=4
s.b=r
if((r&1)!==0)s.gaL().aR()},
gcT(){throw A.b(A.Y("Not available"))},
$idL:1}
A.AT.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.AU.prototype={
$0(){return this.a.cp(this.b)},
$S:0}
A.jT.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.oc(r,a,s.y[1]),n=A.yB(r,d),m=c==null?A.B9():c
s=new A.hH(this,o,n,r.bW(m,t.H),r,q|p,s.i("hH<1,2>"))
s.x=this.a.bz(s.gjc(),s.gje(),s.gjg())
return s},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.hH.prototype={
aA(a){if((this.e&2)!==0)return
this.iN(a)},
aH(a,b){if((this.e&2)!==0)return
this.kY(a,b)},
bI(){var s=this.x
if(s!=null)s.bd()},
bJ(){var s=this.x
if(s!=null)s.b1()},
he(){var s=this.x
if(s!=null){this.x=null
return s.C()}return null},
jd(a){this.w.qe(a,this)},
jh(a,b){this.aH(a,b)},
jf(){this.aR()}}
A.f1.prototype={
qe(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.D(q)
r=A.ad(q)
p=s
o=r
n=A.kn(p,o)
if(n!=null){p=n.a
o=n.b}b.aH(p,o)
return}b.aA(m)}}
A.jR.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.t(A.A("Stream is already closed"))
s.iN(b)},
bx(a,b){this.a.aH(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.t(A.A("Stream is already closed"))
s.kZ()},
$ibC:1}
A.hP.prototype={
aA(a){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.iN(a)},
aH(a,b){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.kY(a,b)},
aR(){if((this.e&2)!==0)throw A.b(A.A("Stream is already closed"))
this.kZ()},
bI(){var s=this.x
if(s!=null)s.bd()},
bJ(){var s=this.x
if(s!=null)s.b1()},
he(){var s=this.x
if(s!=null){this.x=null
return s.C()}return null},
jd(a){var s,r,q,p
try{q=this.w
q===$&&A.u()
q.t(0,a)}catch(p){s=A.D(p)
r=A.ad(p)
this.aH(s,r)}},
jh(a,b){var s,r,q,p
try{q=this.w
q===$&&A.u()
q.bx(a,b)}catch(p){s=A.D(p)
r=A.ad(p)
if(s===a)this.aH(a,b)
else this.aH(s,r)}},
jf(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.u()
q.q()}catch(p){s=A.D(p)
r=A.ad(p)
this.aH(s,r)}}}
A.jK.prototype={
aa(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.oc(r,a,s.y[1]),n=A.yB(r,d),m=c==null?A.B9():c,l=new A.hP(o,n,r.bW(m,t.H),r,q|p,s.i("hP<1,2>"))
l.w=this.a.$1(new A.jR(l,s.i("jR<2>")))
l.x=this.b.bz(l.gjc(),l.gje(),l.gjg())
return l},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.AL.prototype={}
A.AN.prototype={}
A.AM.prototype={}
A.AJ.prototype={}
A.AK.prototype={}
A.AI.prototype={}
A.AF.prototype={}
A.p8.prototype={}
A.AE.prototype={}
A.AD.prototype={}
A.AH.prototype={}
A.AG.prototype={}
A.p7.prototype={
v9(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.p9.prototype={}
A.p6.prototype={
eN(a,b,c){var s,r,q,p,o,n,m=this.gjj(),l=m.a
if(l===B.i){A.ks(b,c)
return}o=l.gkn()
o.toString
s=o
r=$.C
try{$.C=s
m.v9(l,l.gb7(),a,b,c)
$.C=r}catch(n){q=A.D(n)
p=A.ad(n)
$.C=r
o=b===q?c:p
s.eN(l,q,o)}},
$iO:1}
A.oi.prototype={
glp(){var s=this.ax
return s==null?this.ax=new A.hX(this):s},
gb7(){return this.ay.glp()},
gcb(){return this.as.a},
fD(a){var s,r,q
try{this.aV(a,t.H)}catch(q){s=A.D(q)
r=A.ad(q)
this.eN(this,s,r)}},
fE(a,b,c){var s,r,q
try{this.es(a,b,t.H,c)}catch(q){s=A.D(q)
r=A.ad(q)
this.eN(this,s,r)}},
nh(a,b,c,d,e){var s,r,q
try{this.kx(a,b,c,t.H,d,e)}catch(q){s=A.D(q)
r=A.ad(q)
this.eN(this,s,r)}},
jO(a,b){return new A.za(this,this.bW(a,b),b)},
tN(a,b,c){return new A.zc(this,this.dl(a,b,c),c,b)},
eZ(a){return new A.z9(this,this.bW(a,t.H))},
hG(a,b){return new A.zb(this,this.dl(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aN)return null
s=q.b
r=s.h(0,b)
return r!=null||s.I(b)?r:this.rt(q,b)},
rt(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkn().gjL()
if(s===B.aN)break
q=s.b
r=q.h(0,b)
if(r!=null||q.I(b)){a.b.j(0,b,r)
break}}return r},
ff(a,b){this.eN(this,a,b)},
mP(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
aV(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb7(),this,a,b)},
es(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb7(),this,a,b,c,d)},
kx(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb7(),this,a,b,c,d,e,f)},
bW(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb7(),this,a,b)},
dl(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb7(),this,a,b,c)},
fw(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb7(),this,a,b,c,d)},
mL(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb7(),this,a,b)},
cQ(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb7(),this,a)},
jU(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
jT(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
gm3(){return this.a},
gm5(){return this.b},
gm4(){return this.c},
gm_(){return this.d},
gm0(){return this.e},
glZ(){return this.f},
glu(){return this.r},
gjB(){return this.w},
glm(){return this.x},
gll(){return this.y},
glV(){return this.z},
glz(){return this.Q},
gjj(){return this.as},
gjL(){return this.at},
gkn(){return this.ay}}
A.za.prototype={
$0(){return this.a.aV(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.zc.prototype={
$1(a){var s=this
return s.a.es(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").W(this.c).i("1(2)")}}
A.z9.prototype={
$0(){return this.a.fD(this.b)},
$S:0}
A.zb.prototype={
$1(a){return this.a.fE(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.oM.prototype={
gm3(){return B.e5},
gm5(){return B.e4},
gm4(){return B.e3},
gm_(){return B.e1},
gm0(){return B.e2},
glZ(){return B.e0},
glu(){return B.dX},
gjB(){return B.e6},
glm(){return B.dW},
gll(){return B.dV},
glV(){return B.e_},
glz(){return B.dY},
gjj(){return B.dZ},
gjL(){return B.aN},
gkn(){return null},
glp(){var s=$.A4
return s==null?$.A4=new A.hX(this):s},
gb7(){var s=$.A4
return s==null?$.A4=new A.hX(this):s},
gcb(){return this},
fD(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.B4(null,null,this,a)}catch(q){s=A.D(q)
r=A.ad(q)
A.ks(s,r)}},
fE(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.B5(null,null,this,a,b)}catch(q){s=A.D(q)
r=A.ad(q)
A.ks(s,r)}},
nh(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.D8(null,null,this,a,b,c)}catch(q){s=A.D(q)
r=A.ad(q)
A.ks(s,r)}},
jO(a,b){return new A.A6(this,a,b)},
eZ(a){return new A.A5(this,a)},
hG(a,b){return new A.A7(this,a,b)},
h(a,b){return null},
ff(a,b){A.ks(a,b)},
mP(a,b){return A.FW(null,null,this,a,b)},
aV(a){if($.C===B.i)return a.$0()
return A.B4(null,null,this,a)},
es(a,b){if($.C===B.i)return a.$1(b)
return A.B5(null,null,this,a,b)},
kx(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.D8(null,null,this,a,b,c)},
bW(a){return a},
dl(a){return a},
fw(a){return a},
mL(a,b){return null},
cQ(a){A.B6(null,null,this,a)},
jU(a,b){return A.CK(a,b)},
jT(a,b){return A.EG(a,b)}}
A.A6.prototype={
$0(){return this.a.aV(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.A5.prototype={
$0(){return this.a.fD(this.b)},
$S:0}
A.A7.prototype={
$1(a){return this.a.fE(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hX.prototype={$iau:1}
A.B3.prototype={
$0(){A.E_(this.a,this.b)},
$S:0}
A.jE.prototype={}
A.di.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gX(a){return this.a!==0},
gK(){return new A.f_(this,A.n(this).i("f_<1>"))},
gaX(){var s=A.n(this)
return A.dJ(new A.f_(this,s.i("f_<1>")),new A.zD(this),s.c,s.y[1])},
I(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.lh(a)},
lh(a){var s=this.d
if(s==null)return!1
return this.c5(this.ld(s,a),a)>=0},
D(a,b){b.a8(0,new A.zC(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.F4(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.F4(q,b)
return r}else return this.lA(b)},
lA(a){var s,r,q=this.d
if(q==null)return null
s=this.ld(q,a)
r=this.c5(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.l3(s==null?q.b=A.CU():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.l3(r==null?q.c=A.CU():r,b,c)}else q.m8(b,c)},
m8(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.CU()
s=p.cq(a)
r=o[s]
if(r==null){A.CV(o,s,[a,b]);++p.a
p.e=null}else{q=p.c5(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a8(a,b){var s,r,q,p,o,n=this,m=n.lc()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aA(n))}},
lc(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
l3(a,b,c){if(a[b]==null){++this.a
this.e=null}A.CV(a,b,c)},
cq(a){return J.a7(a)&1073741823},
ld(a,b){return a[this.cq(b)]},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.zD.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.zC.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.e_.prototype={
cq(a){return A.kx(a)&1073741823},
c5(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jN.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.oz(b)},
j(a,b,c){this.oA(b,c)},
I(a){if(!this.w.$1(a))return!1
return this.oy(a)},
cq(a){return this.r.$1(a)&1073741823},
c5(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.z8.prototype={
$1(a){return this.a.b(a)},
$S:21}
A.f_.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gX(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.ot(s,s.lc(),this.$ti.i("ot<1>"))},
F(a,b){return this.a.I(b)}}
A.ot.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.aA(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.jY.prototype={
h(a,b){if(!this.y.$1(b))return null
return this.os(b)},
j(a,b,c){this.ou(b,c)},
I(a){if(!this.y.$1(a))return!1
return this.or(a)},
G(a,b){if(!this.y.$1(b))return null
return this.ot(b)},
ed(a){return this.x.$1(a)&1073741823},
df(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.zW.prototype={
$1(a){return this.a.b(a)},
$S:21}
A.dj.prototype={
gu(a){var s=this,r=new A.e1(s,s.r,A.n(s).i("e1<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gE(a){return this.a===0},
gX(a){return this.a!==0},
F(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.pw(b)},
pw(a){var s=this.d
if(s==null)return!1
return this.c5(s[this.cq(a)],a)>=0},
gH(a){var s=this.e
if(s==null)throw A.b(A.A("No elements"))
return s.a},
ga1(a){var s=this.f
if(s==null)throw A.b(A.A("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.l2(s==null?q.b=A.CW():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.l2(r==null?q.c=A.CW():r,b)}else return q.oS(b)},
oS(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.CW()
s=q.cq(a)
r=p[s]
if(r==null)p[s]=[q.jp(a)]
else{if(q.c5(r,a)>=0)return!1
r.push(q.jp(a))}return!0},
G(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.le(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.le(s.c,b)
else return s.jy(b)},
jy(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cq(a)
r=n[s]
q=o.c5(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lf(p)
return!0},
l2(a,b){if(a[b]!=null)return!1
a[b]=this.jp(b)
return!0},
le(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.lf(s)
delete a[b]
return!0},
jn(){this.r=this.r+1&1073741823},
jp(a){var s,r=this,q=new A.zX(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jn()
return q},
lf(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jn()},
cq(a){return J.a7(a)&1073741823},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.zX.prototype={}
A.e1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.uG.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:65}
A.ev.prototype={
F(a,b){return b instanceof A.b3&&this===b.a},
gu(a){var s=this
return new A.oA(s,s.a,s.c,s.$ti.i("oA<1>"))},
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
gE(a){return this.b===0},
hd(a,b,c){var s,r,q=this
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
jG(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.oA.prototype={
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
gfq(){var s=this.a
if(s==null||this===s.gH(0))return null
return this.c}}
A.I.prototype={
gu(a){return new A.ao(a,this.gm(a),A.bh(a).i("ao<I.E>"))},
a9(a,b){return this.h(a,b)},
gE(a){return this.gm(a)===0},
gX(a){return!this.gE(a)},
gH(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,0)},
ga1(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aD())
if(this.gm(a)>1)throw A.b(A.iJ())
return this.h(a,0)},
F(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.aA(a))}return!1},
cE(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.aA(a))}return!0},
fb(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.aA(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.xe("",a,b)
return s.charCodeAt(0)==0?s:s},
dt(a,b){return new A.am(a,b,A.bh(a).i("am<I.E>"))},
cg(a,b,c){return new A.X(a,b,A.bh(a).i("@<I.E>").W(c).i("X<1,2>"))},
bi(a,b){return A.cu(a,b,null,A.bh(a).i("I.E"))},
cN(a,b){return A.cu(a,0,A.cz(b,"count",t.S),A.bh(a).i("I.E"))},
bY(a,b){var s,r,q,p,o=this
if(o.gE(a)){s=J.Ch(0,A.bh(a).i("I.E"))
return s}r=o.h(a,0)
q=A.ab(o.gm(a),r,!0,A.bh(a).i("I.E"))
for(p=1;p<o.gm(a);++p)q[p]=o.h(a,p)
return q},
cO(a){return this.bY(a,!0)},
fG(a){var s,r=A.mi(A.bh(a).i("I.E"))
for(s=0;s<this.gm(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
f_(a,b){return new A.bN(a,A.bh(a).i("@<I.E>").W(b).i("bN<1,2>"))},
cm(a,b){var s=b==null?A.Mi():b
A.n9(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bd(b,c,r)
s=A.R(this.fO(a,b,c),A.bh(a).i("I.E"))
return s},
b5(a,b){return this.T(a,b,null)},
fO(a,b,c){A.bd(b,c,this.gm(a))
return A.cu(a,b,c,A.bh(a).i("I.E"))},
k6(a,b,c,d){var s
A.bd(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ah(a,b,c,d,e){var s,r,q,p,o
A.bd(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bc(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.py(d,e).bY(0,!1)
r=0}p=J.L(q)
if(r+s>p.gm(q))throw A.b(A.Ea())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
cR(a,b,c){var s,r
if(t.j.b(c))this.av(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.tA(a,"[","]")},
$iK:1,
$io:1,
$ip:1}
A.U.prototype={
c9(a,b,c){var s=A.n(this)
return A.Ej(this,s.i("U.K"),s.i("U.V"),b,c)},
a8(a,b){var s,r,q,p
for(s=J.E(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
ga7(){return J.c_(this.gK(),new A.uV(this),A.n(this).i("S<U.K,U.V>"))},
aT(a,b,c,d){var s,r,q,p,o,n=A.v(c,d)
for(s=J.E(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
I(a){return J.BZ(this.gK(),a)},
gm(a){return J.as(this.gK())},
gE(a){return J.bA(this.gK())},
gX(a){return J.ec(this.gK())},
gaX(){return new A.jZ(this,A.n(this).i("jZ<U.K,U.V>"))},
l(a){return A.uW(this)},
$iJ:1}
A.uV.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("U.V").a(r)
return new A.S(a,r,A.n(s).i("S<U.K,U.V>"))},
$S(){return A.n(this.a).i("S<U.K,U.V>(U.K)")}}
A.uX.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:39}
A.jZ.prototype={
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gX(a){var s=this.a
return s.gX(s)},
gH(a){var s=this.a
s=s.h(0,J.bY(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gap(a){var s=this.a
s=s.h(0,J.C_(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga1(a){var s=this.a
s=s.h(0,J.px(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.oC(J.E(s.gK()),s,this.$ti.i("oC<1,2>"))}}
A.oC.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.p1.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iV.prototype={
c9(a,b,c){return this.a.c9(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
I(a){return this.a.I(a)},
a8(a,b){this.a.a8(0,b)},
gE(a){var s=this.a
return s.gE(s)},
gX(a){var s=this.a
return s.gX(s)},
gm(a){var s=this.a
return s.gm(s)},
gK(){return this.a.gK()},
l(a){return this.a.l(0)},
gaX(){return this.a.gaX()},
ga7(){return this.a.ga7()},
aT(a,b,c,d){return this.a.aT(0,b,c,d)},
$iJ:1}
A.cS.prototype={
c9(a,b,c){return new A.cS(this.a.c9(0,b,c),b.i("@<0>").W(c).i("cS<1,2>"))}}
A.iR.prototype={
gu(a){var s=this
return new A.oB(s,s.c,s.d,s.b,s.$ti.i("oB<1>"))},
gE(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gH(a){var s=this,r=s.b
if(r===s.c)throw A.b(A.aD())
r=s.a[r]
return r==null?s.$ti.c.a(r):r},
ga1(a){var s=this,r=s.b,q=s.c
if(r===q)throw A.b(A.aD())
r=s.a
r=r[(q-1&r.length-1)>>>0]
return r==null?s.$ti.c.a(r):r},
gap(a){var s,r=this
if(r.b===r.c)throw A.b(A.aD())
if(r.gm(0)>1)throw A.b(A.iJ())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a9(a,b){var s,r=this
A.E9(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
G(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.jy(s);++r.d
return!0}return!1},
l(a){return A.tA(this,"{","}")},
jy(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.oB.prototype={
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
gE(a){return this.gm(this)===0},
gX(a){return this.gm(this)!==0},
D(a,b){var s
for(s=J.E(b);s.k();)this.t(0,s.gn())},
cg(a,b,c){return new A.eo(this,b,A.n(this).i("@<1>").W(c).i("eo<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iJ())
s=r.gu(r)
if(!s.k())throw A.b(A.aD())
return s.gn()},
l(a){return A.tA(this,"{","}")},
dt(a,b){return new A.am(this,b,A.n(this).i("am<1>"))},
cE(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cN(a,b){return A.EF(this,b,A.n(this).c)},
bi(a,b){return A.ED(this,b,A.n(this).c)},
gH(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aD())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aD())
do s=r.gn()
while(r.k())
return s},
a9(a,b){var s,r
A.bc(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.m2(b,b-r,this,null,"index"))},
$iK:1,
$io:1,
$ieK:1}
A.k6.prototype={}
A.kh.prototype={}
A.ox.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.r6(b):s}},
gm(a){return this.b==null?this.c.a:this.dG().length},
gE(a){return this.gm(0)===0},
gX(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.oy(this)},
gaX(){var s,r=this
if(r.b==null){s=r.c
return new A.al(s,A.n(s).i("al<2>"))}return A.dJ(r.dG(),new A.zR(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.I(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tc().j(0,b,c)},
I(a){if(this.b==null)return this.c.I(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a8(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a8(0,b)
s=o.dG()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.AW(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aA(o))}},
dG(){var s=this.c
if(s==null)s=this.c=A.l(Object.keys(this.a),t.s)
return s},
tc(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.v(t.N,t.z)
r=n.dG()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.am(r)
n.a=n.b=null
return n.c=s},
r6(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.AW(this.a[a])
return this.b[a]=s}}
A.zR.prototype={
$1(a){return this.a.h(0,a)},
$S:67}
A.oy.prototype={
gm(a){return this.a.gm(0)},
a9(a,b){var s=this.a
return s.b==null?s.gK().a9(0,b):s.dG()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gu(s)}else{s=s.dG()
s=new J.fn(s,s.length,A.a_(s).i("fn<1>"))}return s},
F(a,b){return this.a.I(b)}}
A.zP.prototype={
q(){var s,r,q=this
q.oB()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aA(A.FS(r.charCodeAt(0)==0?r:r,q.b))
s.aR()}}
A.AA.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:64}
A.Az.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:64}
A.kO.prototype={
gaP(){return"us-ascii"},
k_(a){return B.bw.v(a)}}
A.p0.prototype={
v(a){var s,r,q,p=A.bd(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.az(a,"string","Contains invalid characters."))
o[r]=q}return o},
c0(a){return new A.Ar(new A.hy(a),this.a)}}
A.kP.prototype={}
A.Ar.prototype={
q(){this.a.a.q()},
bN(a,b,c,d){var s,r,q,p
A.bd(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.Q("Source contains invalid character with code point: "+q+".",null))}s=new A.ch(a)
p=this.a.a
p.t(0,s.T(s,b,c))
if(d)p.q()}}
A.kV.prototype={
gf6(){return this.a},
w_(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bd(a1,a2,a0.length)
s=$.Dx()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.Bx(a0.charCodeAt(l))
h=A.Bx(a0.charCodeAt(l+1))
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
d=A.bv(k)
e.a+=d
q=l
continue}}throw A.b(A.a8("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.DI(a0,n,a2,o,m,d)
else{c=B.c.ak(d-1,4)+1
if(c===1)throw A.b(A.a8(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dm(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.DI(a0,n,a2,o,m,b)
else{c=B.c.ak(b,4)
if(c===1)throw A.b(A.a8(a,a0,a2))
if(c>1)a0=B.a.dm(a0,a2,a2,c===2?"==":"=")}return a0}}
A.ii.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.oa(this.a?u.G:u.U).mK(a,0,s,!0)
s.toString
return A.dS(s,0,null)},
c0(a){return new A.yj(a,new A.yA(this.a?u.G:u.U))}}
A.oa.prototype={
mB(a){return new Uint8Array(a)},
mK(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.M(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mB(o)
r.a=A.JM(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.yA.prototype={
mB(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bL(B.f.gab(s),s.byteOffset,a)}}
A.yw.prototype={
t(a,b){this.li(b,0,J.as(b),!1)},
q(){this.li(B.cK,0,0,!0)}}
A.yj.prototype={
li(a,b,c,d){var s=this.b.mK(a,b,c,d)
if(s!=null)this.a.a.aA(A.dS(s,0,null))
if(d)this.a.a.aR()}}
A.kW.prototype={
v(a){var s,r,q=A.bd(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.o9()
r=s.jV(a,0,q)
r.toString
s.jQ(a,q)
return r},
c0(a){return new A.yv(a,new A.o9())}}
A.o9.prototype={
jV(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.ER(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.JJ(a,b,c,q)
r.a=A.JL(a,b,c,s,0,r.a)
return s},
jQ(a,b){var s=this.a
if(s<-1)throw A.b(A.a8("Missing padding character",a,b))
if(s>0)throw A.b(A.a8("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.yv.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.jV(b,0,r)
if(s!=null)this.a.a.aA(s)},
q(){this.b.jQ(null,null)
this.a.a.aR()},
bN(a,b,c,d){var s,r
A.bd(b,c,a.length)
if(b===c)return
s=this.b
r=s.jV(a,b,c)
if(r!=null)this.a.a.aA(r)
if(d){s.jQ(a,c)
this.a.a.aR()}}}
A.pQ.prototype={}
A.hy.prototype={
t(a,b){this.a.t(0,b)},
q(){this.a.q()}}
A.od.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.L(b)
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
A.l7.prototype={}
A.oS.prototype={
t(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.eX.prototype={
t(a,b){this.b.t(0,b)},
bx(a,b){A.cz(a,"error",t.K)
this.a.bx(a,b)},
q(){this.b.q()},
$ibC:1}
A.l9.prototype={}
A.aB.prototype={
c0(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
tL(a){return new A.jK(new A.qN(this),a,t.fM.W(A.n(this).i("aB.T")).i("jK<1,2>"))}}
A.qN.prototype={
$1(a){return new A.eX(a,this.a.c0(a),t.oW)},
$S:108}
A.eq.prototype={}
A.iP.prototype={
l(a){var s=A.iw(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.ma.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.tD.prototype={
aw(a,b){var s=A.FS(a,this.gu5().a)
return s},
a6(a,b){var s=A.K5(a,this.gf6().b,null)
return s},
gf6(){return B.cm},
gu5(){return B.cl}}
A.mc.prototype={
c0(a){return new A.zQ(null,this.b,new A.oU(a))}}
A.zQ.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.A("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a2("")
q=new A.An(r,s)
A.F6(b,q,p.b,p.a)
if(r.a.length!==0)q.ja()
s.q()},
q(){}}
A.mb.prototype={
c0(a){return new A.zP(this.a,a,new A.a2(""))}}
A.zT.prototype={
nq(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iE(a,s,r)
s=r+1
n.ao(92)
n.ao(117)
n.ao(100)
p=q>>>8&15
n.ao(p<10?48+p:87+p)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iE(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.iE(a,s,r)
s=r+1
n.ao(92)
n.ao(q)}}if(s===0)n.b3(a)
else if(s<m)n.iE(a,s,m)},
iX(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.ma(a,null))}s.push(a)},
iD(a){var s,r,q,p,o=this
if(o.np(a))return
o.iX(a)
try{s=o.b.$1(a)
if(!o.np(s)){q=A.Eg(a,null,o.glS())
throw A.b(q)}o.a.pop()}catch(p){r=A.D(p)
q=A.Eg(a,r,o.glS())
throw A.b(q)}},
np(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xo(a)
return!0}else if(a===!0){r.b3("true")
return!0}else if(a===!1){r.b3("false")
return!0}else if(a==null){r.b3("null")
return!0}else if(typeof a=="string"){r.b3('"')
r.nq(a)
r.b3('"')
return!0}else if(t.j.b(a)){r.iX(a)
r.xm(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.iX(a)
s=r.xn(a)
r.a.pop()
return s}else return!1},
xm(a){var s,r,q=this
q.b3("[")
s=J.L(a)
if(s.gX(a)){q.iD(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b3(",")
q.iD(s.h(a,r))}}q.b3("]")},
xn(a){var s,r,q,p,o=this,n={}
if(a.gE(a)){o.b3("{}")
return!0}s=a.gm(a)*2
r=A.ab(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a8(0,new A.zU(n,r))
if(!n.b)return!1
o.b3("{")
for(p='"';q<s;q+=2,p=',"'){o.b3(p)
o.nq(A.F(r[q]))
o.b3('":')
o.iD(r[q+1])}o.b3("}")
return!0}}
A.zU.prototype={
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
A.zS.prototype={
glS(){var s=this.c
return s instanceof A.a2?s.l(0):null},
xo(a){this.c.iC(B.x.l(a))},
b3(a){this.c.iC(a)},
iE(a,b,c){this.c.iC(B.a.A(a,b,c))},
ao(a){this.c.ao(a)}}
A.mf.prototype={
gaP(){return"iso-8859-1"},
k_(a){return B.cu.v(a)}}
A.mg.prototype={}
A.nk.prototype={
t(a,b){this.bN(b,0,b.length,!1)}}
A.An.prototype={
ao(a){var s=this.a,r=A.bv(a)
if((s.a+=r).length>16)this.ja()},
iC(a){if(this.a.a.length!==0)this.ja()
this.b.t(0,a)},
ja(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.ka.prototype={
q(){},
bN(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bv(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
t(a,b){this.a.a+=b}}
A.oU.prototype={
t(a,b){this.a.a.aA(b)},
bN(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aA(a)
else r.aA(B.a.A(a,b,c))
if(d)r.aR()},
q(){this.a.a.aR()}}
A.Ay.prototype={
q(){var s,r,q,p=this.c
this.a.v5(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bN(q,0,q.length,!0)}else r.q()},
t(a,b){this.bN(b,0,J.as(b),!1)},
bN(a,b,c,d){var s,r=this.c,q=this.a.cX(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bN(s,0,s.length,!1)
r.a=""
return}}}
A.nR.prototype={
gaP(){return"utf-8"},
u1(a,b){return new A.dl((b===!0?B.dR:B.aM).a).cX(a,0,null,!0)},
f0(a){return this.u1(a,null)},
k_(a){return B.e.v(a)}}
A.nS.prototype={
v(a){var s,r,q=A.bd(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.p4(s)
if(r.ly(a,0,q)!==q)r.hx()
return B.f.T(s,0,r.b)},
c0(a){return new A.AB(new A.hy(a),new Uint8Array(1024))}}
A.p4.prototype={
hx(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.H(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mo(a,b){var s,r,q,p,o=this
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
return!0}else{o.hx()
return!1}},
ly(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.H(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mo(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hx()}else if(o<=2047){n=k.b
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
A.AB.prototype={
q(){if(this.a!==0){this.bN("",0,0,!0)
return}this.d.a.q()},
bN(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mo(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.ly(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hx()
else n.a=a.charCodeAt(b);++b}s.t(0,B.f.T(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jz.prototype={
c0(a){return new A.Ay(new A.dl(this.a),new A.oU(a),new A.a2(""))}}
A.dl.prototype={
cX(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bd(b,c,J.as(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.KB(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.KA(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.j2(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Ft(p)
m.b=0
throw A.b(A.a8(n,a,q+m.c))}return o},
j2(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.M(b+c,2)
r=q.j2(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.j2(a,s,c,d)}return q.u4(a,b,c,d)},
v5(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bv(65533)
a.a+=s}else throw A.b(A.a8(A.Ft(77),null,null))},
u4(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a2(""),g=b+1,f=a[b]
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
h.a+=q}else{q=A.dS(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bv(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.pa.prototype={}
A.aK.prototype={
bC(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bH(p,r)
return new A.aK(p===0?!1:s,r,p)},
pL(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.cg()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bH(s,q)
return new A.aK(n===0?!1:o,q,n)},
pO(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cg()
s=k-a
if(s<=0)return l.a?$.Dz():$.cg()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bH(s,q)
m=new A.aK(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fU(0,$.fj())
return m},
bD(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.Q("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.M(b,16)
if(B.c.ak(b,16)===0)return n.pL(r)
q=s+r+1
p=new Uint16Array(q)
A.EZ(n.b,s,b,p)
s=n.a
o=A.bH(q,p)
return new A.aK(o===0?!1:s,p,o)},
dA(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.Q("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.M(b,16)
q=B.c.ak(b,16)
if(q===0)return j.pO(r)
p=s-r
if(p<=0)return j.a?$.Dz():$.cg()
o=j.b
n=new Uint16Array(p)
A.JS(o,s,b,n)
s=j.a
m=A.bH(p,n)
l=new A.aK(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bD(1,q)-1)>>>0!==0)return l.fU(0,$.fj())
for(k=0;k<r;++k)if(o[k]!==0)return l.fU(0,$.fj())}return l},
a0(a,b){var s,r=this.a
if(r===b.a){s=A.yx(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iS(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iS(p,b)
if(o===0)return $.cg()
if(n===0)return p.a===b?p:p.bC(0)
s=o+1
r=new Uint16Array(s)
A.JO(p.b,o,a.b,n,r)
q=A.bH(s,r)
return new A.aK(q===0?!1:b,r,q)},
fV(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cg()
s=a.c
if(s===0)return p.a===b?p:p.bC(0)
r=new Uint16Array(o)
A.ob(p.b,o,a.b,s,r)
q=A.bH(o,r)
return new A.aK(q===0?!1:b,r,q)},
fL(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iS(b,r)
if(A.yx(q.b,p,b.b,s)>=0)return q.fV(b,r)
return b.fV(q,!r)},
fU(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bC(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iS(b,r)
if(A.yx(q.b,p,b.b,s)>=0)return q.fV(b,r)
return b.fV(q,!r)},
bg(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cg()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.F_(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bH(s,p)
return new A.aK(m===0?!1:n,p,m)},
pK(a){var s,r,q,p
if(this.c<a.c)return $.cg()
this.lr(a)
s=$.CP.bt()-$.jJ.bt()
r=A.CR($.CO.bt(),$.jJ.bt(),$.CP.bt(),s)
q=A.bH(s,r)
p=new A.aK(!1,r,q)
return this.a!==a.a&&q>0?p.bC(0):p},
rv(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lr(a)
s=A.CR($.CO.bt(),0,$.jJ.bt(),$.jJ.bt())
r=A.bH($.jJ.bt(),s)
q=new A.aK(!1,s,r)
if($.CQ.bt()>0)q=q.dA(0,$.CQ.bt())
return p.a&&q.c>0?q.bC(0):q},
lr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.EW&&a.c===$.EY&&c.b===$.EV&&a.b===$.EX)return
s=a.b
r=a.c
q=16-B.c.gmx(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.EU(s,r,q,p)
n=new Uint16Array(b+5)
m=A.EU(c.b,b,q,n)}else{n=A.CR(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.CS(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.yx(n,m,j,i)>=0){g&2&&A.H(n)
n[m]=1
A.ob(n,h,j,i,n)}else{g&2&&A.H(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.ob(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.JP(l,n,e);--k
A.F_(d,f,0,n,k,o)
if(n[e]<d){i=A.CS(f,o,k,j)
A.ob(n,h,j,i,n)
while(--d,n[e]<d)A.ob(n,h,j,i,n)}--e}$.EV=c.b
$.EW=b
$.EX=s
$.EY=r
$.CO.b=n
$.CP.b=h
$.jJ.b=o
$.CQ.b=q},
gJ(a){var s,r,q,p=new A.yy(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.yz().$1(s)},
P(a,b){if(b==null)return!1
return b instanceof A.aK&&this.a0(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.l([],t.s)
m=n.a
r=m?n.bC(0):n
while(r.c>1){q=$.Dy()
if(q.c===0)A.t(B.bH)
p=r.rv(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pK(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bw(s,t.hF).ee(0)},
$iaw:1}
A.yy.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:113}
A.yz.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:132}
A.or.prototype={
mv(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mH(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.Ax.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:62}
A.rq.prototype={
$0(){var s=this
return A.t(A.Q("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:28}
A.aO.prototype={
iU(a){var s=1000,r=B.c.ak(a,s),q=B.c.M(a-r,s),p=this.b+r,o=B.c.ak(p,s),n=this.c
return new A.aO(A.lt(this.a+B.c.M(p-o,s)+q,o,n),o,n)},
P(a,b){if(b==null)return!1
return b instanceof A.aO&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ(a){return A.c4(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
kh(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a0(a,b){var s=B.c.a0(this.a,b.a)
if(s!==0)return s
return B.c.a0(this.b,b.b)},
wS(){var s=this
if(s.c)return s
return new A.aO(s.a,s.b,!0)},
l(a){var s=this,r=A.I3(A.Cv(s)),q=A.ls(A.Ct(s)),p=A.ls(A.w2(s)),o=A.ls(A.Cr(s)),n=A.ls(A.Cs(s)),m=A.ls(A.Cu(s)),l=A.DY(A.Et(s)),k=s.b,j=k===0?"":A.DY(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaw:1}
A.aC.prototype={
P(a,b){if(b==null)return!1
return b instanceof A.aC&&this.a===b.a},
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
return s+m+":"+q+r+":"+o+p+"."+B.a.il(B.c.l(n%1e6),6,"0")},
$iaw:1}
A.zf.prototype={
l(a){return this.a4()}}
A.ae.prototype={
gcn(){return A.IY(this)}}
A.kQ.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.iw(s)
return"Assertion failed"}}
A.de.prototype={}
A.bB.prototype={
gj5(){return"Invalid argument"+(!this.a?"(s)":"")},
gj4(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gj5()+q+o
if(!s.a)return n
return n+s.gj4()+": "+A.iw(s.gkg())},
gkg(){return this.b}}
A.d7.prototype={
gkg(){return this.b},
gj5(){return"RangeError"},
gj4(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.iG.prototype={
gkg(){return this.b},
gj5(){return"RangeError"},
gj4(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id7:1,
gm(a){return this.f}}
A.cT.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.nK.prototype={
l(a){return"UnimplementedError: "+this.a},
$icT:1}
A.bm.prototype={
l(a){return"Bad state: "+this.a}}
A.lc.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.iw(s)+"."}}
A.mC.prototype={
l(a){return"Out of Memory"},
gcn(){return null},
$iae:1}
A.js.prototype={
l(a){return"Stack Overflow"},
gcn(){return null},
$iae:1}
A.oq.prototype={
l(a){return"Exception: "+this.a},
$iG:1}
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
$iG:1,
gie(){return this.a},
gfS(){return this.b},
gar(){return this.c}}
A.m4.prototype={
gcn(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iae:1,
$icT:1,
$iG:1}
A.o.prototype={
f_(a,b){return A.fp(this,A.n(this).i("o.E"),b)},
cg(a,b,c){return A.dJ(this,b,A.n(this).i("o.E"),c)},
dt(a,b){return new A.am(this,b,A.n(this).i("am<o.E>"))},
F(a,b){var s
for(s=this.gu(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
v7(a,b,c){var s,r
for(s=this.gu(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
v8(a,b,c){return this.v7(0,b,c,t.z)},
cE(a,b){var s
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
bO(a,b){var s
for(s=this.gu(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
bY(a,b){var s=A.n(this).i("o.E")
if(b)s=A.R(this,s)
else{s=A.R(this,s)
s.$flags=1
s=s}return s},
cO(a){return this.bY(0,!0)},
fG(a){return A.d3(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gE(a){return!this.gu(this).k()},
gX(a){return!this.gE(this)},
cN(a,b){return A.EF(this,b,A.n(this).i("o.E"))},
bi(a,b){return A.ED(this,b,A.n(this).i("o.E"))},
gH(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aD())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aD())
do s=r.gn()
while(r.k())
return s},
gap(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aD())
s=r.gn()
if(r.k())throw A.b(A.iJ())
return s},
fb(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a9(a,b){var s,r
A.bc(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.m2(b,b-r,this,null,"index"))},
l(a){return A.Ir(this,"(",")")}}
A.S.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gJ(a){return A.j.prototype.gJ.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
P(a,b){return this===b},
gJ(a){return A.eE(this)},
l(a){return"Instance of '"+A.mK(this)+"'"},
gaj(a){return A.ds(this)},
toString(){return this.l(this)}}
A.oW.prototype={
l(a){return""},
$iaF:1}
A.jt.prototype={
guL(){var s=this.gmJ()
if($.kC()===1e6)return s
return s*1000},
gmI(){var s=this.gmJ()
if($.kC()===1000)return s
return B.c.M(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mL.$0()-r)
s.b=null}},
gmJ(){var s=this.b
if(s==null)s=$.mL.$0()
return s-this.a}}
A.jl.prototype={
gu(a){return new A.n0(this.a)},
ga1(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.A("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.FC(r,s)}return s}}
A.n0.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.FC(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a2.prototype={
gm(a){return this.a.length},
iC(a){var s=A.r(a)
this.a+=s},
ao(a){var s=A.bv(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.xL.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:163}
A.ki.prototype={
gmd(){var s,r,q,p,o=this,n=o.w
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
gwe(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ae(s,1)
r=s.length===0?B.u:A.fN(new A.X(A.l(s.split("/"),t.s),A.Ms(),t.iZ),t.N)
q.x!==$&&A.BS()
p=q.x=r}return p},
gJ(a){var s,r=this,q=r.y
if(q===$){s=B.a.gJ(r.gmd())
r.y!==$&&A.BS()
r.y=s
q=s}return q},
gkC(){return this.b},
gde(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ad(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfp(){var s=this.d
return s==null?A.Fi(this.a):s},
gfv(){var s=this.f
return s==null?"":s},
ghW(){var s=this.r
return s==null?"":s},
vE(a){var s=this.a
if(a.length!==s.length)return!1
return A.KO(a,s,0)>=0},
fB(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.D_(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.At(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.Au(null,0,0,a)
else k=j.f
return A.kj(b,q,o,p,l,k,j.r)},
kv(a){return this.fB(a,null)},
nf(a){return this.fB(null,a)},
lN(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ad(b,"../",r);){r+=3;++s}q=B.a.dg(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.i9(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dm(a,q+1,null,B.a.ae(b,r-3*s))},
bX(a){return this.fC(A.nQ(a))},
fC(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb_().length!==0)return a
else{s=h.a
if(a.gkb()){r=a.nf(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmQ())m=a.gi5()?a.gfv():h.f
else{l=A.Kz(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gka()?k+A.f6(a.gbp()):k+A.f6(h.lN(B.a.ae(n,k.length),a.gbp()))}else if(a.gka())n=A.f6(a.gbp())
else if(n.length===0)if(p==null)n=s.length===0?a.gbp():A.f6(a.gbp())
else n=A.f6("/"+a.gbp())
else{j=h.lN(n,a.gbp())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.f6(j)
else n=A.D1(j,!r||p!=null)}m=a.gi5()?a.gfv():null}}}i=a.gkc()?a.ghW():null
return A.kj(s,q,p,o,n,m,i)},
gkb(){return this.c!=null},
gi5(){return this.f!=null},
gkc(){return this.r!=null},
gmQ(){return this.e.length===0},
gka(){return B.a.S(this.e,"/")},
kz(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gde()!=="")A.t(A.Y(u.Q))
s=r.gwe()
A.Ks(s,!1)
q=A.xe(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gmd()},
P(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb_())if(p.c!=null===b.gkb())if(p.b===b.gkC())if(p.gde()===b.gde())if(p.gfp()===b.gfp())if(p.e===b.gbp()){r=p.f
q=r==null
if(!q===b.gi5()){if(q)r=""
if(r===b.gfv()){r=p.r
q=r==null
if(!q===b.gkc()){s=q?"":r
s=s===b.ghW()}}}}return s},
$inO:1,
gb_(){return this.a},
gbp(){return this.e}}
A.Aw.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.p3(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.p3(1,b,B.o,!0)
s.a+=r}},
$S:183}
A.Av.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:62}
A.xK.prototype={
gnn(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.cc(m,"?",s)
q=m.length
if(r>=0){p=A.kk(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.ol("data","",n,n,A.kk(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cb.prototype={
gkb(){return this.c>0},
gkd(){return this.c>0&&this.d+1<this.e},
gi5(){return this.f<this.r},
gkc(){return this.r<this.a.length},
gka(){return B.a.ad(this.a,"/",this.e)},
gmQ(){return this.e===this.f},
gb_(){var s=this.w
return s==null?this.w=this.pu():s},
pu(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gkC(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gde(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfp(){var s,r=this
if(r.gkd())return A.aH(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbp(){return B.a.A(this.a,this.e,this.f)},
gfv(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
ghW(){var s=this.r,r=this.a
return s<r.length?B.a.ae(r,s+1):""},
lG(a){var s=this.d+1
return s+a.length===this.e&&B.a.ad(this.a,a,s)},
wH(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cb(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.D_(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb_()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gkd()?h.gfp():g
if(s)o=A.At(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.Au(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ae(q,m+1):g
return A.kj(b,p,n,o,l,j,i)},
kv(a){return this.fB(a,null)},
nf(a){return this.fB(null,a)},
bX(a){return this.fC(A.nQ(a))},
fC(a){if(a instanceof A.cb)return this.rX(this,a)
return this.mf().fC(a)},
rX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lG("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lG("443")
if(p){o=r+1
return new A.cb(B.a.A(a.a,0,o)+B.a.ae(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.mf().fC(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cb(B.a.A(a.a,0,r)+B.a.ae(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cb(B.a.A(a.a,0,r)+B.a.ae(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wH()}s=b.a
if(B.a.ad(s,"/",n)){m=a.e
l=A.Fa(this)
k=l>0?l:m
o=k-n
return new A.cb(B.a.A(a.a,0,k)+B.a.ae(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ad(s,"../",n))n+=3
o=j-n+1
return new A.cb(B.a.A(a.a,0,j)+"/"+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.Fa(this)
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
kz(){var s,r=this,q=r.b
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
mf(){var s=this,r=null,q=s.gb_(),p=s.gkC(),o=s.c>0?s.gde():r,n=s.gkd()?s.gfp():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gfv():r
return A.kj(q,p,o,n,k,l,j<m.length?s.ghW():r)},
l(a){return this.a},
$inO:1}
A.ol.prototype={}
A.lC.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.my.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iG:1}
A.t_.prototype={
$2(a,b){this.a.bq(new A.rY(a),new A.rZ(b),t.X)},
$S:187}
A.rY.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:194}
A.rZ.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.Mf(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.t("Attempting to box non-Dart object.")
s={}
s[$.Hi()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:7}
A.BC.prototype={
$1(a){var s,r,q,p
if(A.FQ(a))return a
s=this.a
if(s.I(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gK());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.D(p,J.c_(a,this,t.z))
return p}else return a},
$S:29}
A.BI.prototype={
$1(a){return this.a.aB(a)},
$S:25}
A.BJ.prototype={
$1(a){if(a==null)return this.a.aS(new A.my(a===undefined))
return this.a.aS(a)},
$S:25}
A.Bi.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.FP(a))return a
s=this.a
a.toString
if(s.I(a))return s.h(0,a)
if(a instanceof Date)return new A.aO(A.lt(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.Q("structured clone of RegExp",null))
if(a instanceof Promise)return A.a5(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.v(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aG(o),q=s.gu(o);q.k();)n.push(A.pl(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.L(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:29}
A.zM.prototype={
cJ(a){if(a<=0||a>4294967296)throw A.b(A.b_(u.E+a))
return Math.random()*a>>>0},
n1(){return Math.random()}}
A.zN.prototype={
oO(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cJ(a){var s,r,q,p,o,n,m,l
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
A.lz.prototype={}
A.a3.prototype={
h(a,b){var s,r=this
if(!r.jk(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a3.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jk(b))return
s.c.j(0,s.a.$1(b),new A.S(b,c,s.$ti.i("S<a3.K,a3.V>")))},
D(a,b){b.a8(0,new A.pS(this))},
c9(a,b,c){return this.c.c9(0,b,c)},
I(a){var s=this
if(!s.jk(a))return!1
return s.c.I(s.a.$1(s.$ti.i("a3.K").a(a)))},
ga7(){var s=this.c,r=A.n(s).i("aP<1,2>")
return A.dJ(new A.aP(s,r),new A.pT(this),r.i("o.E"),this.$ti.i("S<a3.K,a3.V>"))},
a8(a,b){this.c.a8(0,new A.pU(this,b))},
gE(a){return this.c.a===0},
gX(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("al<2>")
return A.dJ(new A.al(s,r),new A.pV(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aT(a,b,c,d){return this.c.aT(0,new A.pW(this,b,c,d),c,d)},
gaX(){var s=this.c,r=A.n(s).i("al<2>")
return A.dJ(new A.al(s,r),new A.pX(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.uW(this)},
jk(a){return this.$ti.i("a3.K").b(a)},
$iJ:1}
A.pS.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.pT.prototype={
$1(a){var s=a.b
return new A.S(s.a,s.b,this.a.$ti.i("S<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("S<a3.K,a3.V>(S<a3.C,S<a3.K,a3.V>>)")}}
A.pU.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,S<a3.K,a3.V>)")}}
A.pV.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(S<a3.K,a3.V>)")}}
A.pW.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.W(this.c).W(this.d).i("S<1,2>(a3.C,S<a3.K,a3.V>)")}}
A.pX.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(S<a3.K,a3.V>)")}}
A.lv.prototype={
Z(a,b){return J.x(a,b)},
ac(a){return J.a7(a)}}
A.iK.prototype={
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
A.ew.prototype={
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
r=A.Cd(s.guR(),s.gvz(),s.gvF(),A.n(this).i("hU.E"),t.S)
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
A.hb.prototype={}
A.hK.prototype={
gJ(a){var s=this.a
return 3*s.a.ac(this.b)+7*s.b.ac(this.c)&2147483647},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.hK){s=this.a
s=s.a.Z(this.b,b.b)&&s.b.Z(this.c,b.c)}else s=!1
return s}}
A.iU.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.Cd(null,null,null,t.mB,t.S)
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
A.lu.prototype={
Z(a,b){var s,r=this
if(a instanceof A.cq)return b instanceof A.cq&&new A.hb(r,t.cu).Z(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iU(r,r,t.a3).Z(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.ew(r,t.hI).Z(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iK(r,t.nZ).Z(a,b)
return J.x(a,b)},
ac(a){var s=this
if(a instanceof A.cq)return new A.hb(s,t.cu).ac(a)
if(t.f.b(a))return new A.iU(s,s,t.a3).ac(a)
if(t.j.b(a))return new A.ew(s,t.hI).ac(a)
if(t.e7.b(a))return new A.iK(s,t.nZ).ac(a)
return J.a7(a)},
vG(a){return!0}}
A.mx.prototype={
sm(a,b){A.Eo()},
t(a,b){return A.Eo()}}
A.nN.prototype={
j(a,b,c){return A.Jv()}}
A.ci.prototype={
P(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.ci){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gJ(a){return A.vn(this.a)},
l(a){return A.ar(this.a)}}
A.c0.prototype={
t(a,b){if(this.a!=null)throw A.b(A.A("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.A("add must be called once."))}}
A.lX.prototype={
v(a){var s=new A.c0(),r=A.cW(s)
r.t(0,a)
r.q()
r=s.a
r.toString
return r}}
A.t4.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.A("Hash.add() called after close()."))
s.r=s.r+J.as(b)
s.l1(b)},
l1(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.pu(B.f.gab(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.L(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ah(i,j,n,a,o)
k.e=n
return}B.f.ah(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.H(s)
s[m]=l;++m}while(m<q)
k.wY(s)}},
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
n=J.pu(B.f.gab(q))
m=B.c.M(p,4294967296)
n.$flags&2&&A.H(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.l1(q)
s=l.a
s.t(0,new A.ci(l.pd()))
s.q()},
pd(){var s,r,q,p,o,n,m
if(B.aS===$.kB())return J.Hv(B.y.gab(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.pu(B.f.gab(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.H(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.oP.prototype={
c0(a){var s=new Uint32Array(A.b8(A.l([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hy(new A.oQ(s,r,a,q,new Uint32Array(16)))}}
A.A9.prototype={
wY(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
A.oQ.prototype={}
A.kJ.prototype={
gJ(a){return A.c4(B.dC,this.d,this.c,B.d,B.d,B.d,B.d)},
P(a,b){if(b==null)return!1
return b instanceof A.ln&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.ds(s).l(0)+".with"+s.d*8+"bits()"
return A.ds(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.q2.prototype={}
A.iT.prototype={
gJ(a){return B.t.ac(this.a)},
P(a,b){if(b==null)return!1
return b instanceof A.iT&&B.t.Z(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.jo.prototype={
l(a){return A.ds(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iG:1}
A.uU.prototype={
l(a){return A.ds(this).l(0)+"()"}}
A.jn.prototype={
gJ(a){return(B.t.ac(this.b.a)^B.t.ac(this.c)^B.t.ac(this.a))>>>0},
P(a,b){var s
if(b==null)return!1
if(b instanceof A.jn){s=B.t.Z(this.b.a,b.b.a)
s=s&&B.t.Z(this.c,b.c)&&B.t.Z(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.wU.prototype={}
A.jp.prototype={
ge4(){return this.b},
gJ(a){var s=A.eE(B.dM),r=B.t.ac(this.ge4())
return(s^r)>>>0},
P(a,b){if(b==null)return!1
return b instanceof A.jp&&B.t.Z(this.ge4(),b.ge4())},
l(a){return"SecretKeyData(...)"}}
A.n5.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.ln.prototype={
u7(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge4().gm(0),f=this.d
if(g!==f)throw A.b(A.az(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Gb(c)
r=new Uint32Array(4)
A.pi(r,0,r,0,s)
r[0]=A.bz(r[0])
r[1]=A.bz(r[1])
r[2]=A.bz(r[2])
r[3]=A.bz(r[3])
q=A.DX(r,a.c)
p=J.DD(B.f.gab(q),0,null)
o=a.a
n=B.t.Z(B.aQ.l8(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jo())
A.Ba(q,1)
n=o.length
m=B.c.M(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pi(l,k,p,0,s)
A.Ba(q,1)}j=J.bL(B.y.gab(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.H(j)
j[k]=i^h}return j},
uO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge4().gm(0),f=this.d
if(g!==f)throw A.b(A.az(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.Gb(d)
r=new Uint32Array(4)
A.pi(r,0,r,0,s)
r[0]=A.bz(r[0])
r[1]=A.bz(r[1])
r[2]=A.bz(r[2])
r[3]=A.bz(r[3])
q=A.DX(r,c)
p=J.DD(B.f.gab(q),0,null)
o=new Uint32Array(A.b8(p))
A.Ba(q,1)
n=a.length
m=(B.c.M(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pi(l,k,p,0,s)
A.Ba(q,1)}j=J.bL(B.y.gab(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.H(j)
j[k]=i^h}return new A.jn(j,B.aQ.l8(j,b,s,r,o),c)}}
A.r4.prototype={
l(a){return"DartGcm()"},
l8(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lo(n,d,b)
A.lo(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.M(s,o),!1)
q.setUint32(4,B.c.ak(s,o),!1)
q.setUint32(8,B.c.M(r,o),!1)
q.setUint32(12,B.c.ak(r,o),!1)
A.lo(n,d,J.bL(B.aA.gab(q),0,null))
p=new Uint32Array(4)
A.pi(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iT(J.bL(B.y.gab(n),0,null))}}
A.oj.prototype={}
A.ok.prototype={}
A.qQ.prototype={}
A.r5.prototype={}
A.z4.prototype={
Z(a,b){var s,r,q=J.L(a),p=J.L(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ac(a){var s,r,q,p,o
for(s=J.L(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.ak(q,16)
r=(r^B.c.rW(p,o)^B.c.ma(p,16-o))>>>0}return r}}
A.mW.prototype={}
A.kX.prototype={$iC2:1}
A.kY.prototype={
hV(){if(this.w)throw A.b(A.A("Can't finalize a finalized Request."))
this.w=!0
return B.bA},
l(a){return this.a+" "+this.b.l(0)}}
A.kZ.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:80}
A.l_.prototype={
$1(a){return B.a.gJ(a.toLowerCase())},
$S:82}
A.pM.prototype={
oE(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.Q("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.Q("Invalid content length "+A.r(s)+".",null))}}}
A.l4.prototype={
b4(a){return this.ob(a)},
ob(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b4=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.DT("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hV().wR(),$async$b4)
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
f=A.v(a9,t.K)
e=b4.gmA()
d=null
if(e!=null){d=e
J.cY(f,"content-length",d)}for(b0=b4.r,b0=new A.aP(b0,A.n(b0).i("aP<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.cY(f,c.a,c.b)}f=A.pn(f)
f.toString
A.bf(f)
b0=l.signal
s=8
return A.a(A.a5(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b4)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.jg(a,null):null
if(a0==null&&a!=null){f=A.DT("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.v(a9,a9)
b.headers.forEach(A.pc(new A.pP(a1)))
f=A.KE(b4,b)
a4=b.status
a6=a1
a8=a0
A.nQ(b.url)
a9=b.statusText
f=new A.nj(A.GL(f),a4,a8,a6)
f.oE(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.ad(b3)
A.FV(a2,a3,b4)
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
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].abort()
this.b=!0}}
A.pP.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:85}
A.AS.prototype={
$1(a){return A.i1(this.a,this.b,a)},
$S:87}
A.B0.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.an()}},
$S:0}
A.B1.prototype={
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
m=A.ad(k)
if(!o.a.b)A.FV(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.dw.prototype={
wR(){var s=new A.w($.C,t.jz),r=new A.aI(s,t.iq),q=new A.od(new A.pR(r),new Uint8Array(1024))
this.aa(q.gtx(q),!0,q.ge6(),r.gtU())
return s}}
A.pR.prototype={
$1(a){return this.a.aB(new Uint8Array(A.b8(a)))},
$S:14}
A.eh.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iG:1}
A.mq.prototype={
gm(a){return this.b}}
A.vf.prototype={
gmA(){var s,r,q,p=this,o={},n=o.a=0
p.x.a8(0,new A.vg(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.q)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.lE(q)).length+q.b+2)}return o.a+2+70+4},
hV(){var s=this,r=s.p9()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kU()
return new A.dw(s.bk(r))},
bk(a){return this.q7(a)},
q7(a){var $async$bk=A.c(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:f="--"+a
e=B.e.v(f+"\r\n")
d=B.e.v(f+"--\r\n")
f=m.x,f=new A.aP(f,A.n(f).i("aP<1,2>")).gu(0)
case 3:if(!f.k()){s=4
break}l=f.d
l.toString
s=5
q=[1]
return A.bU(A.e0(e),$async$bk,r)
case 5:k=l.b
j=$.BX()
l=A.B(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.B(l,'"',"%22")+'"'
l=$.DA()
s=6
q=[1]
return A.bU(A.e0(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bk,r)
case 6:s=7
q=[1]
return A.bU(A.e0(B.e.v(k)),$async$bk,r)
case 7:s=8
q=[1]
return A.bU(A.e0(B.b3),$async$bk,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bU(A.e0(e),$async$bk,r)
case 12:s=13
q=[1]
return A.bU(A.e0(B.e.v(m.lE(g))),$async$bk,r)
case 13:if(g.f)A.t(A.A("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bU(A.K3(g.e),$async$bk,r)
case 14:s=15
q=[1]
return A.bU(A.e0(B.b3),$async$bk,r)
case 15:case 10:f.length===l||(0,A.q)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bU(A.e0(d),$async$bk,r)
case 16:case 1:return A.bU(null,0,r)
case 2:return A.bU(o.at(-1),1,r)}})
var s=0,r=A.FO($async$bk,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.G3(r)},
qq(a,b){var s,r=$.BX()
r=A.B(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.B(r,'"',"%22")+'"'
r=$.DA()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lE(a){var s=a.d.l(0),r=$.BX(),q=A.B(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.B(q,'"',"%22")+'"'
s=A.B(a.c,r,"%0D%0A")
p=p+'; filename="'+A.B(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
p9(){var s,r=J.Ed(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cQ[$.GV().cJ(66)]
return"dart-http-boundary-"+A.dS(r,0,null)}}
A.vg.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.qq(a,b)).length+B.e.v(b).length+2)},
$S:37}
A.wL.prototype={
gmA(){return this.y.length},
gk0(){var s,r
if(this.gcr()==null||!this.gcr().c.a.I("charset"))return B.o
s=this.gcr().c.a.h(0,"charset")
s.toString
r=A.I7(s)
return r==null?A.t(A.a8('Unsupported encoding "'+s+'".',null,null)):r},
hV(){this.kU()
return new A.dw(A.CE(this.y,t.L))},
gcr(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.IG(s)},
scr(a){this.r.j(0,"content-type",a.l(0))},
pg(){if(!this.w)return
throw A.b(A.A("Can't modify a finalized Request."))}}
A.jv.prototype={}
A.nj.prototype={}
A.il.prototype={}
A.fO.prototype={
l(a){var s=new A.a2(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a8(0,new A.v_(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.uY.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.xf(null,j),h=$.Hu()
i.iL(h)
s=$.Ht()
i.f8(s)
r=i.gkj().h(0,0)
r.toString
i.f8("/")
i.f8(s)
q=i.gkj().h(0,0)
q.toString
i.iL(h)
p=t.N
o=A.v(p,p)
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
k=n}else k=A.MC(i)
n=i.d=h.ei(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gN()
o.j(0,p,k)}i.uX()
return A.Co(r,q,o)},
$S:112}
A.v_.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Hr()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.GI(b,$.Hg(),new A.uZ(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:37}
A.uZ.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:59}
A.Bp.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:59}
A.pL.prototype={
dr(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dr=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eG(),$async$dr)
case 5:o=b
s=o.gnd()<0.25?6:7
break
case 6:s=8
return A.a(p.jx(o),$async$dr)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gnd()<0.25?9:10
break
case 9:s=11
return A.a(p.jx(m),$async$dr)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
it(){var s=0,r=A.h(t.q),q,p=this
var $async$it=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eG(),$async$it)
case 3:q=p.jx(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
eG(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eG=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.ca():j
p=3
s=6
return A.a(l,$async$eG)
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
return A.f($async$eG,r)},
jx(a){var s=this.c
if(s!=null)return s
return this.c=this.h2(a)},
h2(a){return this.pN(a)},
pN(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$h2=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.kS("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.iu(l),$async$h2)
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
return A.f($async$h2,r)}}
A.jd.prototype={
oG(a,b,c,d,e,f,g,h,i){var s=this,r=new A.pL(s.c)
s.y!==$&&A.ce()
s.y=r
s.z!==$&&A.ce()
s.z=new A.vF(s.x,s.b,r,s.a)},
im(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$im=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.u()
s=7
return A.a(m.ip(),$async$im)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.D(k)
if(m instanceof A.cj){n.as=!1
n.ax=!0}else if(m instanceof A.bo)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$im,r)},
fT(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.u()
n=A.IU(B.c6,o,A.l(["data"],t.s),p.gqS(),p.gqP())
p.Q=n
s=3
return A.a(n.az(),$async$fT)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
ez(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ez=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aG()
s=2
return A.a(o instanceof A.w?o:A.bx(o,t.H),$async$ez)
case 2:q.Q=null
for(o=q.ch,p=new A.aT(o,o.r,o.e,A.n(o).i("aT<2>"));p.k();)p.d.C()
o.am(0)
q.CW.am(0)
return A.e(null,r)}})
return A.f($async$ez,r)},
h_(){var s=0,r=A.h(t.H),q=this
var $async$h_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.ez(),$async$h_)
case 2:q.x.a.q()
return A.e(null,r)}})
return A.f($async$h_,r)},
qQ(){var s,r,q,p
for(s=this.cx,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
this.eD(p,new A.cC(p,B.aa,null))}},
qT(a){var s=a.b,r=s.b
if(!B.b.F(this.cx,r))return
if(a.a==="delete"){this.ht(s)
return}this.eD(r,new A.cC(r,B.aa,s))},
ht(a){return this.tf(a)},
tf(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$ht=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.F(n.cx,j)){s=1
break}m=null
p=4
l=n.z
l===$&&A.u()
s=7
return A.a(l.c_(a.a),$async$ht)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.D(i)
if(l instanceof A.cl){n.eD(j,new A.cC(j,B.aP,null))
s=1
break}else if(l instanceof A.bo){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eD(j,new A.cC(j,B.aP,null))
s=1
break}n.eD(j,new A.cC(j,B.aa,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ht,r)},
eD(a,b){var s,r,q=this
q.CW.j(0,a,b)
s=q.ch
r=s.h(0,a)
if(r!=null)r.C()
s.j(0,a,A.cQ(q.d,new A.vB(q,a)))},
x_(a,b){return this.iy(null,a,null,b,null)},
iy(a,b,c,d,e){return this.x4(a,b,c,d,e)},
x3(a,b){return this.iy(null,a,null,null,b)},
x4(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iy=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aT(0,new A.vC(p),t.N,t.co)
n=p.z
n===$&&A.u()
q=n.ix(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iy,r)},
$iCG:1}
A.vB.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.G(0,q)
s=r.CW.G(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.vC.prototype={
$2(a,b){return new A.S(a,new A.dA("imgs+",b.a,b.b,b.c),t.ia)},
$S:125}
A.mJ.prototype={}
A.vX.prototype={
hK(a,b,c,d){return this.tW(a,b,c,d)},
tW(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$hK=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.Af(d)
n=t.hw
m=A.dQ(null,null,n)
l=t.N
k=$.C.h(0,B.du)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.l4(A.l([],t.kG))
j=new A.vD(j)
p=new A.mJ(c,B.aV,a,o,B.aZ,200,25,b,null,j,m,A.v(l,t.hU),A.v(l,n))
p.oG(a,B.aV,b,25,200,null,B.aZ,o,null)
s=3
return A.a(p.fT(),$async$hK)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
hQ(a){return this.uE(a)},
uE(a){var s=0,r=A.h(t.H),q
var $async$hQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ez(),$async$hQ)
case 2:a.h_()
q=a.ay
if((q.c&4)===0)q.q()
return A.e(null,r)}})
return A.f($async$hQ,r)}}
A.Af.prototype={
ca(){var s=0,r=A.h(t.q),q,p=this,o
var $async$ca=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.ca(),$async$ca)
case 3:q=o.EH(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ca,r)},
iu(a){return this.wC(a)},
wC(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$iu=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.ca(),$async$iu)
case 3:q=o.EH(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iu,r)}}
A.vO.prototype={}
A.vF.prototype={
hE(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$hE=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dr(),$async$hE)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.D(j)
l=A.kS("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hE,r)},
fi(a,b,c,d,e,f){return this.vL(a,b,c,d,e,f)},
vL(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fi=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.Ng(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m="(store="+A.fh(a)+" && updated>="+A.fh(n)+")"
o=c==null?m:m+" && (updated>"+A.fh(n)+" || (updated="+A.fh(n)+" && id>"+A.fh(c)+"))"}l=t.N
l=A.v(l,l)
l.j(0,"filter",o)
l.j(0,"sort",h?"updated,id":"id")
l.j(0,"perPage",""+B.c.iw(B.c.bP(f,1,500)))
l.j(0,"skipTotal","1")
if(b!=null)l.j(0,"fields",B.b.B(b,","))
k=p.b.bX("/api/collections/data/records").kv(l)
s=3
return A.a(p.m6("GET",k),$async$fi)
case 3:j=a0
p.dI(j,A.l([200],t.t),k)
i=p.cZ(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.aR("List response has no items array."))
h=J.c_(i,new A.vN(p),t.Q)
h=A.R(h,h.$ti.i("Z.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fi,r)},
c_(a){return this.o4(a)},
o4(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$c_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.jv(a)
s=3
return A.a(p.m6("GET",o),$async$c_)
case 3:n=c
if(n.a===404)throw A.b(A.IS("not found"))
p.dI(n,A.l([200],t.t),o)
q=A.fY(p.cZ(n),p.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c_,r)},
hM(a,b,c){return this.u0(a,b,c)},
u0(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hM=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bX("/api/collections/data/records")
s=3
return A.a(p.eU("POST",o,B.h.a6(A.m(["id",b,"store",c,"data",B.h.aw(a,null)],t.N,t.z),null)),$async$hM)
case 3:n=e
if(n.a===400&&p.qu(n))throw A.b(new A.en(p.eF(n)))
p.dI(n,A.l([200,201],t.t),o)
q=A.fY(p.cZ(n),p.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)},
qu(a){var s,r,q,p,o,n
try{s=this.cZ(a)
r=J.V(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fH(a,b,c){return this.wZ(a,b,c)},
wZ(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fH=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.jv(c)
s=3
return A.a(p.eU("PATCH",o,B.h.a6(A.m(["data",B.h.aw(b,null)],t.N,t.z),null)),$async$fH)
case 3:n=e
p.dI(n,A.l([200],t.t),o)
q=A.fY(p.cZ(n),p.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fH,r)},
ix(a,b,c,d,e){return this.x0(a,b,c,d,e)},
x0(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$ix=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.jv(b)
m=t.N
l=A.v(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a6(d,null))
if(e==null)m=null
else{m=A.n(e).i("al<2>")
m=A.R(new A.al(e,m),m.i("o.E"))}s=3
return A.a(p.rP(new A.m_("PATCH",n,B.az,l,m==null?B.cJ:m)),$async$ix)
case 3:o=g
p.dI(o,A.l([200],t.t),n)
q=A.fY(p.cZ(o),p.d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ix,r)},
f3(a,b,c){return this.uI(a,b,c)},
uI(a,b,c){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$f3=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:i=t.N
i=A.v(i,i)
l=n.b.bX("/api/files/data/"+A.p3(2,b,B.o,!1)+"/"+A.p3(2,a,B.o,!1))
k=i.a===0?l:l.kv(i)
s=3
return A.a(n.qV(new A.es("GET",k,B.az,null)),$async$f3)
case 3:m=e
s=m.a!==200?4:5
break
case 4:p=7
s=10
return A.a(m.c.aN(new A.vM()).C().fF(B.c7),$async$f3)
case 10:p=2
s=9
break
case 7:p=6
h=o.pop()
s=9
break
case 6:s=2
break
case 9:throw A.b(n.lL(A.Io(m.a,m.b,""),k))
case 5:q=m.c
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$f3,r)},
ft(a){return this.wj(a)},
wj(a7){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$ft=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a5=p.b.bX("/api/batch")
a6=A.l([],t.kf)
for(l=J.aG(a7),k=l.gu(a7),j=t.N,i=t.z,h=t.K;k.k();){g=k.gn()
a6.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",g.c,"store",g.b,"data",B.h.aw(g.d,null)],j,i)],j,h))}s=3
return A.a(p.eU("POST",a5,B.h.a6(A.m(["requests",a6],j,t.ew),null)),$async$ft)
case 3:o=b0
if(o.a===403)throw A.b(A.Ie(p.eF(o)))
if(o.a===400)throw A.b(new A.dv(p.eF(o)))
p.dI(o,A.l([200],t.t),a5)
n=null
try{n=B.h.aw(o.c,null)}catch(a8){a6=A.D(a8)
if(t.Y.b(a6)){m=a6
throw A.b(A.aR("Batch response is not valid JSON: "+m.gie()))}else throw a8}a6=t.j
if(a6.b(n))e=n
else{k=t.f
if(k.b(n)){d=n.h(0,"data")
c=k.b(d)?d.h(0,"results"):n.h(0,"results")
if(!a6.b(c))throw A.b(A.aR("Batch response has no results array."))}else throw A.b(A.aR("Batch response is not a list or envelope."))
e=c}a6=J.L(e)
if(a6.gm(e)!==l.gm(a7))throw A.b(A.aR("Batch response has "+a6.gm(e)+" results for "+l.gm(a7)+" requests."))
b=A.l([],t.g2)
for(k=t.f,j=p.d,a=0;a<l.gm(a7);++a){a0=a6.h(e,a)
if(!k.b(a0))throw A.b(A.aR("Batch response entry "+a+" is not a JSON object."))
i=l.h(a7,a)
a1=a0.h(0,"status")
h=J.dr(a1)
a2=h.P(a1,200)||h.P(a1,201)
a3=a0.h(0,"body")
h=a2&&k.b(a3)?A.fY(a3,j):null
g=a2?null:p.pT(a0)
a4=a2&&k.b(a3)?B.h.a6(a3.h(0,"data"),null):null
b.push(new A.jj(i.a,a2,h,g,a4))}q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
ip(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$ip=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eU("POST",p.b.bX("/api/batch"),B.h.a6(A.m(["requests",[]],t.N,t.kS),null)),$async$ip)
case 3:o=b
n=o.a
if(n===403||n===404||n===405||n===501){q=!1
s=1
break}if(n===401)throw A.b(A.kS(p.eF(o)))
if(n===408||n===429||n>=500)throw A.b(A.EI("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)},
jv(a){return this.b.bX("/api/collections/data/records/"+A.p3(2,a,B.o,!1))},
eU(a,b,c){return this.c8(new A.vI(this,a,b,c),new A.vJ(),t.w)},
m6(a,b){return this.eU(a,b,null)},
rP(a){return this.c8(new A.vK(this,a),new A.vL(),t.w)},
qV(a){return this.c8(new A.vG(this,a),new A.vH(),t.lI)},
c8(a,b,c){return this.tk(a,b,c,c)},
tk(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c8=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.fX(),$async$c8)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c8)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(n.iV(),$async$c8)
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
i=A.D(g)
if(i instanceof A.dB){j=i
throw A.b(A.EI(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c8,r)},
fX(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$fX=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.dr(),$async$fX)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.D(j)
l=A.kS("token provider failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fX,r)},
ep(){var s=0,r=A.h(t.q),q,p=2,o=[],n=this,m,l,k,j
var $async$ep=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.c.it(),$async$ep)
case 7:l=b
q=l
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
m=A.D(j)
l=A.kS("token refresh failed: "+A.r(m))
throw A.b(l)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ep,r)},
iV(){var s=0,r=A.h(t.q),q,p=this
var $async$iV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.ep()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iV,r)},
jC(a,b,c,d){return this.rN(a,b,c,d)},
rN(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jC=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.v(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b4(new A.es(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jC,r)},
dI(a,b,c){if(B.b.F(b,a.a))return
throw A.b(this.lL(a,c))},
lL(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eF(a)
if(401===s)return new A.bM(q)
if(403===s)return new A.cj(q)
if(404===s)return new A.cl(q)
if(408===s||429===s)return new A.da(r,q)
if(400===s)return new A.eD(q)
if(s>=500)return new A.ha(q)
return new A.eF("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eF(a){var s,r,q,p,o
try{s=this.cZ(a)
r=J.V(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.V(s,"data")
if(t.f.b(q)){p=q
p=p.gX(p)}else p=!1
if(p){p=B.h.a6(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
cZ(a){var s,r,q,p=null
try{p=B.h.aw(a.c,null)}catch(r){q=A.D(r)
if(t.Y.b(q)){s=q
throw A.b(A.aR("Response is not valid JSON: "+s.gie()))}else throw r}if(t.f.b(p))return A.bl(p,t.N,t.X)
throw A.b(A.aR("Expected a JSON object, got "+J.bZ(p).l(0)+"."))},
pT(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.vN.prototype={
$1(a){return A.fY(a,this.a.d)},
$S:130}
A.vM.prototype={
$1(a){},
$S:14}
A.vI.prototype={
$1(a){var s=this
return s.a.jC(s.b,s.c,s.d,a)},
$S:56}
A.vJ.prototype={
$1(a){return a.a},
$S:55}
A.vK.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dw(new A.m_(s.a,s.b,r,s.d,s.e))},
$S:56}
A.vL.prototype={
$1(a){return a.a},
$S:55}
A.vG.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.el(new A.es(s.a,s.b,r,s.d))},
$S:138}
A.vH.prototype={
$1(a){return a.a},
$S:143}
A.jf.prototype={}
A.hQ.prototype={}
A.vP.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eT()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aG(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.C()
s=2
return A.a(n instanceof A.w?n:A.bx(n,t.H),$async$aG)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.an()
return A.e(null,r)}})
return A.f($async$aG,r)},
eT(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eT=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.bG(),$async$eT)
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
return A.a(A.Ik(n.$1(k),m),$async$eT)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eT,r)},
lR(a){var s=this.a,r=t.N
return s.a.el(new A.es("GET",s.b.bX("/api/realtime"),A.m(["Authorization","Bearer "+a.a],r,r),null))},
m7(a,b){var s=this.a,r=t.N
return s.a.b4(new A.es("POST",s.b.bX("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],r,r),B.h.a6(A.m(["clientId",a,"subscriptions",this.b],r,t.K),null)))},
bG(){return this.pv()},
pv(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$bG=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m={}
l=p.a
s=3
return A.a(l.hE(),$async$bG)
case 3:k=b
m.a=k
s=4
return A.a(p.lR(k),$async$bG)
case 4:o=b
s=o.a===401?5:6
break
case 5:s=7
return A.a(l.ep(),$async$bG)
case 7:k=b
m.a=k
s=8
return A.a(p.lR(k),$async$bG)
case 8:o=b
case 6:l=o.a
if(l!==200)throw A.b(A.iF("realtime connect status "+l,null))
s=!p.x?9:10
break
case 9:s=11
return A.a(o.c.aN(new A.vS()).C(),$async$bG)
case 11:s=1
break
case 10:++p.as
p.z=new A.aI(new A.w($.C,t.D),t.h)
l=$.ps()
n=A.l([],t.s)
m.b=m.c=!1
n=o.c.bz(new A.vT(m,p,new A.Ag(new A.z5(l),n)),new A.vU(p),new A.vV(p))
p.y=n
s=!p.x?12:13
break
case 12:s=14
return A.a(n.C(),$async$bG)
case 14:p.y=null
s=1
break
case 13:s=15
return A.a(p.z.a,$async$bG)
case 15:p.y=null
if(m.b)throw A.b(A.iF("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$bG,r)},
dM(a,b){return this.qf(a,b)},
qf(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$dM=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:h=a.a
s=h!=null?3:4
break
case 3:s=5
return A.a(p.m7(h,b),$async$dM)
case 5:l=d
s=l.a===401?6:8
break
case 6:g=h
s=10
return A.a(p.a.ep(),$async$dM)
case 10:s=9
return A.a(p.m7(g,d),$async$dM)
case 9:s=7
break
case 8:d=l
case 7:k=d.a
if(k!==204&&k!==200)throw A.b(A.iF("realtime subscribe status "+k,null))
s=1
break
case 4:j=a.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
if(!t.f.b(n)){s=1
break}try{m=A.fY(n,p.a.d)
p.w.$1(new A.jf(o,m))}catch(f){}case 1:return A.e(q,r)}})
return A.f($async$dM,r)}}
A.vW.prototype={
$1(a){return A.Gq(a,this.a,this.b,A.Na())},
$S:144}
A.vS.prototype={
$1(a){},
$S:14}
A.vT.prototype={
$1(a){var s,r,q,p,o,n,m=this.c.uZ(a)
for(s=m.length,r=this.b,q=this.a,p=t.P,o=0;o<m.length;m.length===s||(0,A.q)(m),++o){n=m[o]
r.Q=r.Q.V(new A.vQ(q,r,n),p).jP(new A.vR(r))}},
$S:14}
A.vQ.prototype={
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
try{n.b.r.$0()}catch(g){m=A.D(g)
l=A.ad(g)
i=n.b
i.at=m
i.ax=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:149}
A.vR.prototype={
$2(a,b){var s=this.a
if(s.at==null)s.at=a
if(s.ax==null)s.ax=b},
$S:7}
A.vU.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:0}
A.vV.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:23}
A.Ag.prototype={
uZ(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.ky()
r=A.l([],t.gy)
for(q=s.length,p=0;;){o=this.qr(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dn(p,o,q)))
p=o+1
m=this.pJ(B.a.wU(new A.dl(!0).cX(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.f.b5(s,p))
return r},
qr(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
q8(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.am(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.am(k)
try{q=B.h.aw(r,l)
if(t.f.b(q)){p=A.bl(q,t.N,t.X)
o=J.V(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.hQ(o,l)
return new A.hQ(l,p)}}catch(n){}return l},
pJ(a){var s,r=this,q=null
if(a.length===0)return r.q8()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.am(r.c)
return new A.hQ(B.a.ck(B.a.ae(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.ck(B.a.ae(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.ck(B.a.ae(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.es.prototype={}
A.dA.prototype={
oo(){return this.d.$0()},
gm(a){return this.c}}
A.m_.prototype={}
A.cH.prototype={}
A.dB.prototype={
l(a){return"HttpTransportException: "+this.a},
$iG:1}
A.dR.prototype={}
A.vD.prototype={
b4(a){return this.oc(a)},
oc(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.el(a),$async$b4)
case 7:m=c
j=m.c
s=8
return A.a(B.aM.kW(j).ee(0).fF(B.ae),$async$b4)
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
j=A.D(g)
if(j instanceof A.dB)throw g
else{k=j
j=A.iF("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
dw(a){return this.od(a)},
od(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dw=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.IO(a6.a,a6.b)
h.r.D(0,a6.c)
h.x.D(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.oo(),$async$dw)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.GL(a0)
a3=new A.fO("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cS(A.v(d,d),e))
b.push(new A.mq(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.q)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b4(m).fF(B.ae),$async$dw)
case 11:k=a8
g=k.w
s=12
return A.a(B.aM.kW(g).ee(0).fF(B.ae),$async$dw)
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
g=A.D(a5)
if(g instanceof A.dB)throw a5
else{i=g
g=A.iF("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dw,r)},
el(a){return this.w7(a)},
w7(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$el=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.J9(a,a0)
a1.r.D(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gk0().k_(j)
i.pg()
i.y=A.Nk(j)
h=i.gcr()
if(h==null){j=t.N
i.scr(A.Co("text","plain",A.m(["charset",i.gk0().gaP()],j,j)))}else{j=i.gcr()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.bR(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.I("charset")){j=t.N
f=A.m(["charset",i.gk0().gaP()],j,j)
e=h.a
d=h.b
c=A.bl(h.c,j,j)
c.D(0,f)
i.scr(A.Co(e,d,c))}}}p=4
s=7
return A.a(n.a.b4(a1).fF(B.ae),$async$el)
case 7:m=a5
j=t.N
l=A.v(j,j)
m.e.a8(0,new A.vE(l))
j=m.b
i=m.w
q=new A.dR(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.D(a2)
if(j instanceof A.dB)throw a2
else{k=j
a=A.iF("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$el,r)}}
A.vE.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:37}
A.qL.prototype={
$1(a){return a.b===this.a},
$S:157}
A.qM.prototype={
$1(a){return a.b===this.a},
$S:158}
A.le.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"base",r.c)
q.j(0,"local",r.d)
q.j(0,"remote",r.e)
s=r.f
s=A.R(s,A.n(s).c)
B.b.aF(s)
q.j(0,"dirtyLocal",s)
s=r.r
s=A.R(s,A.n(s).c)
B.b.aF(s)
q.j(0,"dirtyRemote",s)
q.j(0,"detectedAt",r.w)
s=r.x
if(s!=null)q.j(0,"resolved",s)
return q}}
A.c1.prototype={}
A.la.prototype={
gU(){return"committedChange"},
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"id",r.b)
q.j(0,"origin",r.c.b)
q.j(0,"action",r.d.b)
s=r.e
if(s!=null)q.j(0,"oldRecord",s)
s=r.f
if(s!=null)q.j(0,"newRecord",s)
s=r.r
s=A.R(s,A.n(s).c)
B.b.aF(s)
q.j(0,"changedFields",s)
return q}}
A.lh.prototype={
gU(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jB.prototype={
gU(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.lR.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
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
A.lH.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"size",r.e)
q.j(0,"field",r.c)
q.j(0,"name",r.d)
s=r.f
if(s!=null)q.j(0,"expectedSha256",s)
if(r.r)q.j(0,"allowVolatileBlobs",!0)
return q}}
A.lI.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.lM.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lJ.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.lG.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lV.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.lP.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lK.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.lT.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lN.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.lA.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.ng.prototype={
p(){return B.j}}
A.lU.prototype={
gU(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.lS.prototype={
gU(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fG.prototype={
gU(){return"fileRefs"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.lQ.prototype={
gU(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fF.prototype={
gU(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fD.prototype={
gU(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.hi.prototype={
gU(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.fE.prototype={
gU(){return"fileChunk"},
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",r.b)
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.vh.prototype={}
A.j_.prototype={}
A.j2.prototype={}
A.j0.prototype={}
A.j3.prototype={}
A.iX.prototype={}
A.iY.prototype={}
A.iW.prototype={}
A.j1.prototype={}
A.iZ.prototype={}
A.AY.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.wC.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.v(k,j),h=t.d,g=A.l([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)g.push(s[q].p())
i.j(0,"where",g)
g=A.l([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=A.l([],h)
for(n=B.b.gu(p);n.k();)o.push(n.gn().p())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.p())
h=A.l([],h)
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
A.wD.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.wE.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.N("Malformed query conditions."))
s=A.l([],t.cM)
for(r=J.E(a);r.k();)s.push(A.Ew(r.gn()))
return s},
$S:172}
A.eG.prototype={
p(){var s,r,q,p,o=this,n=A.v(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.q)(s),++p)r.push(A.fd(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.fd(o.c))
return n}}
A.wy.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.wz.prototype={
$1(a){return a.b===this.a},
$S:177}
A.aZ.prototype={
a4(){return"QueryConditionOp."+this.b}}
A.cL.prototype={}
A.w0.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.w_.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.N("Malformed predicate children."))
s=A.l([],t.eK)
for(r=J.E(a);r.k();)s.push(A.Cq(r.gn()))
return s},
$S:179}
A.iQ.prototype={
p(){var s=A.v(t.N,t.X)
s.j(0,"kind","leaf")
s.D(0,this.a.p())
return s}}
A.ja.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.id.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.ie.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mQ.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.wB.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.cB.prototype={
a4(){return"AggregateFn."+this.b}}
A.wS.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.wT.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.mV.prototype={}
A.mB.prototype={
p(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.l5.prototype={
p(){return B.j}}
A.lY.prototype={
p(){return B.j}}
A.l8.prototype={
p(){return B.j}}
A.lW.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mZ.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mr.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.KZ(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mR.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lk.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lj.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lw.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.m0.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kK.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.lD.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.n4.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dT.prototype={
a4(){return"TransactionDurability."+this.b}}
A.nD.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.nE.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nG.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nI.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nH.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nF.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nX.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.nY.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.nW.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kM.prototype={
p(){var s=A.v(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.nV.prototype={
p(){return B.j}}
A.nT.prototype={
p(){return B.j}}
A.mN.prototype={
p(){return B.j}}
A.lb.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.n_.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lg.prototype={
p(){var s=A.v(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.lf.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.mX.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.kH.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.kI.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.li.prototype={
p(){var s=A.v(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ag.prototype={}
A.fW.prototype={
gU(){return"ok"},
p(){return B.j}}
A.ik.prototype={
gU(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.lZ.prototype={
gU(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.h6.prototype={
gU(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.h7.prototype={
gU(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fS.prototype={
gU(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.h2.prototype={
gU(){return"queryRows"},
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"items",r.a)
q.j(0,"hasNext",r.b)
q.j(0,"hasPrev",r.c)
s=r.d
if(s!=null)q.j(0,"nextCursor",s)
s=r.e
if(s!=null)q.j(0,"prevCursor",s)
return q}}
A.fy.prototype={
gU(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fz.prototype={
gU(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fL.prototype={
gU(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fm.prototype={
gU(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fC.prototype={
gU(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.h9.prototype={
gU(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.l([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.n3.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fw.prototype={
gU(){return"conflicts"},
p(){var s,r,q,p=A.l([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fv.prototype={
gU(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hn.prototype={
gU(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hu.prototype={
gU(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.h_.prototype={
gU(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.ft.prototype={
gU(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.eM.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
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
A.bp.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"},
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.nt.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.ny.prototype={
p(){return B.j}}
A.no.prototype={
p(){return B.j}}
A.np.prototype={
p(){return B.j}}
A.nr.prototype={
p(){return B.j}}
A.nz.prototype={
p(){var s=A.v(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.ns.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.nw.prototype={
p(){return B.j}}
A.nu.prototype={
gU(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.nq.prototype={
gU(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.nx.prototype={
gU(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.nv.prototype={
gU(){return"syncStatusEvent"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.kT.prototype={
gU(){return"authRequired"},
p(){return B.j}}
A.eR.prototype={
l(a){return"WireException: "+this.a},
$iG:1}
A.BT.prototype={
$1(a){return a.a===this.a},
$S:180}
A.BU.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:181}
A.mI.prototype={
a4(){return"PlatformProfile."+this.b}}
A.nf.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.x2.prototype={
$1(a){return J.bY(a.gaX())},
$S:35}
A.x3.prototype={
$1(a){return B.a.F(a,"ENABLE_FTS5")},
$S:10}
A.im.prototype={
a4(){return"ChangeOrigin."+this.b}}
A.dx.prototype={
a4(){return"ChangeAction."+this.b}}
A.aU.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"id",r.b)
q.j(0,"origin",r.c.b)
q.j(0,"action",r.d.b)
s=r.e
if(s!=null)q.j(0,"oldRecord",s)
s=r.f
if(s!=null)q.j(0,"newRecord",s)
s=r.r
s=A.R(s,A.n(s).c)
B.b.aF(s)
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
A.a1.prototype={}
A.q_.prototype={
jZ(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
uM(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.q0.prototype={}
A.q1.prototype={}
A.rD.prototype={}
A.pz.prototype={
uN(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cJ(256)
q=this.b.uO(new Uint8Array(A.b8(a)),b,m,this.c)
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
u6(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.Q("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.A("Unsupported ciphertext version 0x"+B.a.il(B.c.kA(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b8(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b8(B.f.b5(a,n)))
q=new Uint8Array(A.b8(B.f.T(a,13,n)))
try{n=this.b.u7(new A.jn(q,new A.iT(r),s),b,this.c)
return n}catch(o){if(A.D(o) instanceof A.jo)throw A.b(A.A("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d2.prototype={
a4(){return"KindViolation."+this.b}}
A.Bc.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:188}
A.ld.prototype={
a4(){return"ConflictAlgorithm."+this.b}}
A.iu.prototype={
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
cl(a){var s,r=this.a,q=r.G(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.G(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(s!=null)s.q()}q=this.b.wf(a)
r.j(0,a,q)
return q},
kL(a,b){var s=this.cl(a).kM(new A.bO(b)),r=A.n(s).i("X<I.E,J<k,j?>>")
r=A.R(new A.X(s,new A.rA(),r),r.i("Z.E"))
return r},
oa(a){return this.kL(a,B.n)},
f7(a,b){this.cl(a).e8(new A.bO(b))},
k5(a){return this.f7(a,B.n)},
aE(a,b){return this.uU(a,b)},
O(a){return this.aE(a,B.n)},
uU(a,b){var s=0,r=A.h(t.H),q=this
var $async$aE=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.f7(a,b)
return A.e(null,r)}})
return A.f($async$aE,r)},
ai(a,b){return this.wt(a,b)},
b0(a){return this.ai(a,B.n)},
wt(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ai=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kL(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ai,r)},
bU(a,b,c,d,e,f,g){return this.wq(a,b,c,d,e,f,g)},
aJ(a,b,c,d){return this.bU(a,null,b,null,null,c,d)},
em(a,b,c,d,e){return this.bU(a,b,c,null,null,d,e)},
n9(a,b,c,d){return this.bU(a,b,null,null,null,c,d)},
cj(a,b,c){var s=null
return this.bU(a,s,s,s,s,b,c)},
wo(a,b,c,d,e){return this.bU(a,null,b,null,c,d,e)},
wn(a,b,c,d,e){return this.bU(a,b,c,d,e,null,null)},
wp(a,b,c,d,e,f){return this.bU(a,b,c,null,d,e,f)},
wm(a,b,c,d){return this.bU(a,null,null,null,b,c,d)},
wq(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bU=A.c(function(h,i){if(h===1)return A.d(i,r)
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
return A.f($async$bU,r)},
cd(a,b,c,d){return this.vC(0,b,c,d)},
aC(a,b,c){return this.cd(0,b,c,null)},
vC(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cd=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.Q("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dJ(new A.T(c,n),new A.rz(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.ab(c.a,"?",!1,m),", ")
j=A.DZ(d)
o=o.i("al<2>")
o=A.R(new A.al(c,o),o.i("o.E"))
p.f7("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.aq(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cd,r)},
L(a,b,c,d){return this.wX(a,b,c,d)},
wX(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dJ(new A.T(b,n),new A.rB(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.DZ(null)+' "'+a+'" SET '+m
o=A.R(new A.al(b,o.i("al<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.D(o,d)}p.f7(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
Y(a,b,c){return this.u8(a,b,c)},
u8(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$Y=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.D(n,c)}p.f7(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Y,r)},
tY(a,b,c){this.b.tZ(B.bu,!0,!1,new A.ry(b),c)},
a2(a,b){return this.wT(a,b,b)},
wT(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.k5("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.k5("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.k5("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$ir7:1}
A.rA.prototype={
$1(a){return A.bl(a,t.N,t.X)},
$S:193}
A.rz.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.rB.prototype={
$1(a){return'"'+a+'" = ?'},
$S:6}
A.ry.prototype={
$1(a){var s=a.gm(0)===0?null:a.gH(a)
return this.a.$1(s)},
$S:196}
A.qo.prototype={}
A.it.prototype={
jR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.l([],t.s),c=A.aL(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=$.Dt()
if(!k.b.test(l))A.t(A.aJ('Field "'+l+u.Z))
if(B.be.F(0,l))throw A.b(A.aJ('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.t(0,l))throw A.b(A.aJ('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aJ(e+l+'" cannot be unique.'))
if(B.b.bO(o,new A.rx(m)))throw A.b(A.aJ(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.F(k,l)}else k=!1
if(k)throw A.b(A.aJ(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.q)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.ao(l,l.gm(0),k.i("ao<I.E>")),k=k.i("I.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.F(0,j)&&!B.be.F(0,j))throw A.b(A.aJ('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.ay.Z(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.I4(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.rV(u.r))
if(q.b&&!A.EE(r.a,3,34))throw A.b(A.rV("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.ao(r,r.gm(0),p.i("ao<I.E>")),p=p.i("I.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.F(0,o))throw A.b(A.aJ('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.ga7(),r=r.gu(r);r.k();){q=r.gn()
A.E6(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aJ('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aJ('Ref field "'+m.a+'" must declare its target store.'))}return new A.qo(f.pc(a),f.pb(a),f.pa(a),d)},
pc(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.l(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.B(n,'"',i)+'"')+" "+o.gkQ()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.rw(),A.a_(k).i("X<1,k>")).B(0,", ")
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
pb(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.l([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=m.b
j=l.$ti.i("X<I.E,k>")
i=A.R(new A.X(l,A.pm(),j),j.i("Z.E"))
if(!k&&!l.F(l,"id"))i.push('"'+A.B("id",e,d)+'"')
h=m.c===B.b2?"archived = 0 AND hidden = 0":"archived = 0"
if(k){l=l.B(l,"_")
l=A.B(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.B(q,e,d)+'"')+" ("+B.b.B(i,", ")+") WHERE "+h+";")}else{l=l.B(l,"_")
l=A.B(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.B(q,e,d)+'"')+" ("+B.b.B(i,", ")+") WHERE "+h+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.q)(r),++n){g=r[n]
if(g.b!==B.J)continue
if(B.b.bO(s,new A.rv(g)))continue
k=g.a
j=A.B(p+k,e,d)
f=A.B(q,e,d)
k=A.B(k,e,d)
b.push("CREATE INDEX "+('"'+j+'"')+" ON "+('"'+f+'"')+" ("+('"'+k+'"')+", "+('"'+A.B("id",e,d)+'"')+") WHERE archived = 0 AND hidden = 0;")}for(n=0;n<r.length;r.length===k||(0,A.q)(r),++n){g=r[n]
if(g.d){s=g.a
p=A.B(o+s,e,d)
l=A.B(q,e,d)
j=A.B(s,e,d)
b.push(c+('"'+p+'"')+" ON "+('"'+l+'"')+" ("+('"'+j+'"')+") WHERE "+('"'+A.B(s,e,d)+'"')+" IS NOT NULL AND archived = 0;")}}return b},
pa(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.u
s=A.l([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("X<I.E,k>")
n=A.R(new A.X(p,A.pm(),o),o.i("Z.E"))
m=new A.ru(r,a0.c)
l=new A.X(p,new A.rr(m),o).B(0,f)
k=new A.X(p,new A.rs(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.B(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.B(r+"_ai",e,d)
o=A.B(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.B(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.B(r+"_ad",e,d)
o=A.B(r,e,d)
m=A.B(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.B(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.rt(),A.a_(n).i("X<1,k>")).B(0," OR ")
p=A.B(r+"_au",e,d)
o=A.B(r,e,d)
m=A.B(q,e,d)
h=A.B(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.B(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.rx.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:50}
A.rw.prototype={
$1(a){return"'"+A.B(a,"'","''")+"'"},
$S:6}
A.rv.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:50}
A.ru.prototype={
$2(a,b){return A.Di(this.a,this.b,a,b)},
$S:212}
A.rr.prototype={
$1(a){return this.a.$2("new",a)},
$S:6}
A.rs.prototype={
$1(a){return this.a.$2("old",a)},
$S:6}
A.rt.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:6}
A.dI.prototype={
l(a){return A.ds(this).l(0)+": "+this.a},
$iG:1}
A.eQ.prototype={}
A.eP.prototype={}
A.eB.prototype={}
A.fq.prototype={}
A.fZ.prototype={}
A.fI.prototype={}
A.cN.prototype={}
A.h4.prototype={}
A.h8.prototype={}
A.eJ.prototype={}
A.hq.prototype={}
A.fK.prototype={}
A.hf.prototype={}
A.fR.prototype={}
A.fu.prototype={}
A.em.prototype={}
A.h3.prototype={}
A.iy.prototype={}
A.bj.prototype={}
A.rF.prototype={
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
m=A.be(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.be(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bj(j,s,r,q,p,o,n,m,l,A.a6(k.h(0,"last_error")))},
$S:213}
A.uL.prototype={
gm2(){return this.b},
gi7(){var s=0,r=A.h(t.y),q,p=this
var $async$gi7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dO()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gi7,r)},
lw(a,b){return b},
eg(a,b,c){return this.vJ(a,b,c)},
vJ(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$eg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.u()
n=J
s=3
return A.a(o.gbn().b.cj("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.lw(c,a)]),$async$eg)
case 3:o=n.c_(e,A.MD(),t.A)
o=A.R(o,o.$ti.i("Z.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
d7(a,b,c,d,e,f,g,h){return this.tJ(a,b,c,d,e,f,g,h)},
tJ(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$d7=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.gm2()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.dO(),$async$d7)
case 5:j=!j
case 4:if(j)throw A.b(A.A("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.lw(h,e)
s=6
return A.a(l.dk(b,c,d),$async$d7)
case 6:n=j
s=7
return A.a(l.bh(n),$async$d7)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a2(new A.uM(p,h,g,o,n,m,A.i5(),f),t.A),$async$d7)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d7,r)},
fn(a,b,c,d,e){return this.w3(a,b,c,d,e)},
w3(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fn=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.gm2()
s=3
return A.a(p.eg(a,c,e),$async$fn)
case 3:k=g
j=J.L(k)
if(j.gE(k))throw A.b(A.A("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.fb(k,new A.uO(d),new A.uP(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.A("File is remote_only; download it before opening."))
j=p.a
n=j.a
n===$&&A.u()
n=n.gbn()
j=j.CW.$0()
m=o.e
s=4
return A.a(n.b.aE("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,m]),$async$fn)
case 4:q=l.cK(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
fz(a,b,c,d,e,f){return this.wF(0,b,c,d,e,f)},
wF(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fz=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eg(b,d,f),$async$fz)
case 3:n=h
m=J.L(n)
if(m.gE(n)){s=1
break}o=e!=null?m.fb(n,new A.uQ(e),new A.uR(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.uS(p,o,f,d,b),t.P),$async$fz)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fz,r)},
bf(a,b){return this.o1(a,b)},
o1(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
return A.a(e.a2(new A.uN(a2,n),t.P),$async$bf)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fg(),$async$bf)
case 13:l=b0
s=J.ec(l)?14:15
break
case 14:k=0
j=A.aL(t.N)
d=t.s
case 16:c=e.a
c===$&&A.u()
s=18
return A.a(c.gbn().b.wn("lp_blobs",A.l(["hash"],d),250,k,"hash ASC"),$async$bf)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.V(h,"hash")
b.toString
J.aN(j,A.F(b))}if(J.as(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.BZ(j,g)){s=19
break}p=22
b=new A.w($.C,c)
b.aD(null)
s=25
return A.a(b,$async$bf)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.d9(g),$async$bf)
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
b===$&&A.u()
s=29
return A.a(b.gbn().b.wp("lp_blobs",A.l(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bf)
case 29:a0=b0
b=J.L(a0)
if(b.gE(a0)){s=28
break}b=b.gu(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.F(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.d9(a1),$async$bf)
case 34:case 33:s=35
return A.a(d.Y("lp_blobs","hash = ?",[a1]),$async$bf)
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
cD(a){return this.uP(a)},
uP(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.u()
d=A
s=3
return A.a(e.gbn().b.b0("SELECT SUM(size) as total FROM lp_blobs"),$async$cD)
case 3:o=d.fe(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.r,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbn().b.b0("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cD)
case 6:k=c
j=J.L(k)
if(j.gE(k)){s=5
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
return A.a(g.d9(h),$async$cD)
case 9:s=10
return A.a(e.gbn().b.L("lp_file_refs",A.m(["state","remote_only"],n,m),"hash = ? AND state = ?",[h,"synced"]),$async$cD)
case 10:s=11
return A.a(f.Y("lp_blobs","hash = ?",[h]),$async$cD)
case 11:o-=i;++l
s=7
break
case 8:s=4
break
case 5:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cD,r)}}
A.uM.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$$1=A.c(function(b,a0){if(b===1)return A.d(a0,r)
for(;;)switch(s){case 0:k=a.b
j=p.a.a.CW.$0()
i=t.s
h=p.b
g=p.c
f=p.d
e=p.e
s=3
return A.a(k.em("lp_file_refs",A.l(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],i),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[h,g,f,e]),$async$$1)
case 3:d=a0
c=J.L(d)
if(c.gX(d)){q=A.E2(c.gH(d))
s=1
break}s=4
return A.a(A.ib(k,e,j,p.f),$async$$1)
case 4:s=5
return A.a(k.em("lp_outbox",A.l(["op_id","base_updated"],i),1,"store = ? AND record_id = ?",[h,g]),$async$$1)
case 5:o=a0
i=J.L(o)
n=i.gX(o)&&J.V(i.gH(o),"base_updated")==null?A.a6(J.V(i.gH(o),"op_id")):null
i=p.r
c=t.N
m=t.X
s=6
return A.a(k.cd(0,"lp_file_refs",A.m(["ref_id",i,"store",h,"record_id",g,"field",f,"hash",e,"remote_name",null,"state","pending_upload"],c,m),B.R),$async$$1)
case 6:l=A.i5()
s=7
return A.a(k.aC(0,"lp_op_queue",A.m(["op_id",l,"store",h,"record_id",g,"kind","fileUpload","payload_json",B.h.a6(A.m(["ref_id",i,"field",f,"hash",e,"name",p.w],c,c),null),"state","pending","depends_on_op",n,"created_at",j],c,m)),$async$$1)
case 7:a.a_(new A.a1(h,A.at([g],c)))
q=new A.bj(i,h,g,f,e,null,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:217}
A.uO.prototype={
$1(a){return a.a===this.a},
$S:49}
A.uP.prototype={
$0(){return A.t(A.A("FileRef "+this.a+" not found"))},
$S:28}
A.uQ.prototype={
$1(a){return a.a===this.a},
$S:49}
A.uR.prototype={
$0(){return A.t(A.A("FileRef "+this.a+" not found"))},
$S:28}
A.uS.prototype={
$1(a){return this.nG(a)},
nG(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.Y("lp_file_refs","ref_id = ?",[j]),$async$$1)
case 5:s=6
return A.a(p.aE(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aC(0,"lp_op_queue",A.m(["op_id",A.i5(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a6(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.x),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a_(new A.a1(q.c,A.at([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uN.prototype={
$1(a){return this.nF(a)},
nF(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
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
return A.a(i.Y("lp_file_refs","ref_id = ?",[j]),$async$$1)
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
A.cG.prototype={}
A.rN.prototype={
gnj(){var s=this.r
return new A.al(s,A.n(s).i("al<2>")).v8(0,0,new A.rQ())},
mN(){var s,r=this.r,q=A.n(r).i("al<2>"),p=q.i("ck<o.E,k>"),o=A.R(new A.ck(new A.am(new A.al(r,q),new A.rO(this.f.$0()),q.i("am<o.E>")),new A.rP(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.q)(o),++s)r.G(0,o[s])
return p}}
A.rQ.prototype={
$2(a,b){return a+b.f},
$S:73}
A.rO.prototype={
$1(a){return!a.z.kh(this.a)},
$S:74}
A.rP.prototype={
$1(a){return a.a},
$S:75}
A.lL.prototype={}
A.pO.prototype={}
A.fo.prototype={
l(a){return"BlobMissingError: "+this.a},
$iG:1}
A.l2.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iG:1}
A.ni.prototype={}
A.BH.prototype={
$1(a){return B.b.D(this.a,a)},
$S:76}
A.iA.prototype={}
A.rG.prototype={
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
a3===$&&A.u()
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
return A.a(n.cs(i,b2),$async$br)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.n0(i.b),$async$br)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b9?17:18
break
case 17:s=19
return A.a(n.eM(i),$async$br)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.n0(i.b),$async$br)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.D(b3)
j=!0
e=i.w+1
d=a5.mF(e)
a8=i.b
a9=J.a0(f)
b0=a6.$0()
s=23
return A.a(a3.vU(a8,a9,e,b0+B.c.M(d.a,1000)),$async$br)
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
return A.a(a2.cj("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$br)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.V(b,"ref_id")
a6.toString
a=A.F(a6)
a6=J.V(b,"record_id")
a6.toString
a0=A.F(a6)
a1=A.a6(J.V(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.da(a0,a,a1,c),$async$br)
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
case 25:q=new A.iA(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$br,r)},
cs(a,b){return this.r8(a,b)},
r8(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cs=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aw(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.F(a1)
l=a0.h(0,"hash")
l.toString
A.F(l)
k=A.a6(a0.h(0,"name"))
if(k==null)k=l+".bin"
s=3
return A.a(a4.bo(l),$async$cs)
case 3:if(!a6)throw A.b(A.A("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bh(l),$async$cs)
case 4:j=a6
if(j==null)throw A.b(A.A("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.z
i===$&&A.u()
s=9
return A.a(i.c_(a3.d),$async$cs)
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
if(m!=null){f=B.a.A(l,0,B.c.bP(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.x3(a3.d,A.m([k,new A.hj(k,j,new A.rI(a4,l))],t.N,t.h3)),$async$cs)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga1(l):k
case 11:s=14
return A.a(n.a.a2(new A.rJ(a,a1,a3),t.P),$async$cs)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cs,r)},
eM(a){return this.r7(a)},
r7(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aw(a.f,null))
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
return A.a(p.b.x_(a.d,A.l([o],t.s)),$async$eM)
case 5:case 4:s=6
return A.a(p.a.a2(new A.rH(l,n,a),t.P),$async$eM)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eM,r)},
da(a,b,c,d){return this.uH(a,b,c,d)},
uH(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$da=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.z
l===$&&A.u()
k=m
s=4
return A.a(l.f3(c,a,null),$async$da)
case 4:s=3
return A.a(k.iq(f),$async$da)
case 3:o=f
s=5
return A.a(m.bh(o),$async$da)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.rK(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$da)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$da,r)},
dh(a,b,c,d){return this.w0(a,b,c,d)},
w0(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$dh=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.cj("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$dh)
case 2:e=a5
d=A.uH(a2,A.a_(a2).c)
c=J.aG(e)
b=t.v
a=A.d3(new A.dW(c.cg(e,new A.rL(),t.x),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.dy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.F(0,k)?6:7
break
case 6:j=A.i5()
i=n.h(0,a3)
if(i==null)A.t(A.A(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.cd(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.c5),$async$dh)
case 8:case 7:case 4:a2.length===b||(0,A.q)(a2),++l
s=3
break
case 5:c=c.gu(e)
case 9:if(!c.k()){s=10
break}b=c.gn()
g=A.a6(b.h(0,"remote_name"))
if(g==null){s=9
break}if(d.F(0,g)){s=9
break}p=b.h(0,"state")
p.toString
A.F(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.Y("lp_file_refs","ref_id = ?",[p]),$async$dh)
case 11:f=A.a6(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.S(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aE(u.y,[f]),$async$dh)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dh,r)}}
A.rI.prototype={
$0(){return this.a.cK(this.b)},
$S:77}
A.rJ.prototype={
$1(a){return this.nw(a)},
nw(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a_(new A.a1(p.c,A.at([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rH.prototype={
$1(a){return this.nv(a)},
nv(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.Y("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aE(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a_(new A.a1(p.c,A.at([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rK.prototype={
$1(a){return this.nx(a)},
nx(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.ib(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a_(new A.a1(q.f,A.at([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rL.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:78}
A.BN.prototype={
$1(a){if(typeof a!="string")return a
return this.a.ek(a)},
$S:29}
A.uz.prototype={
gbn(){var s=this.c
return s===$?this.c=new A.iy(this.b):s}}
A.f5.prototype={$iG:1}
A.zV.prototype={
ca(){var s=0,r=A.h(t.N),q,p=this,o
var $async$ca=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ca,r)}}
A.oZ.prototype={}
A.hO.prototype={}
A.tE.prototype={
oF(a){var s=this,r=s.a.a.a$.b
r=new A.b1(r,A.n(r).i("b1<1>")).aN(new A.u3(s))
s.c!==$&&A.ce()
s.c=r},
va(a){var s,r,q=this
A:{if(a instanceof A.mB){s=q.hf(a.a,a.b)
break A}if(a instanceof A.l5){s=A.ba(q.fY(),t.V)
break A}if(a instanceof A.lY){s=A.ba(new A.lZ(!0,q.a.d.a),t.V)
break A}if(a instanceof A.l8){s=q.q().V(new A.u4(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lW){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.u5(s,q),new A.u6())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mZ){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.uh(s,q),new A.us())
break A}if(a instanceof A.mr){s=q.qC(a.a,a.b,a.c)
break A}if(a instanceof A.mR){s=q.qW(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lk){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.ut(s,q),A.Gh())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lj){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.uu(s,q),A.Gh())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lw){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.uv(s,q),A.Mn())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.m0){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.uw(s,q),A.Mp())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kK){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bw(r,new A.ux(s,q),A.Mm())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lD){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.uy(s,q),A.Mo())
break A}if(a instanceof A.n4){s=q.rJ(a.a,a.b,a.c)
break A}if(a instanceof A.nD){s=q.p_(a.a,a.b)
break A}if(a instanceof A.nE){s=q.eV(a.a,!0)
break A}if(a instanceof A.nG){s=q.eV(a.a,!1)
break A}if(a instanceof A.nI){s=q.hn(a.a,a.b)
break A}if(a instanceof A.nH){s=q.hm(a.a,a.b)
break A}if(a instanceof A.nF){s=q.hk(a.a,a.b)
break A}if(a instanceof A.nX){s=q.hu(a.a,a.b)
break A}if(a instanceof A.nY){s=q.th(a.a,a.b)
break A}if(a instanceof A.nW){s=q.jI(a.a)
break A}if(a instanceof A.kM){s=q.a.a.e3(a.a).V(new A.u7(),t.V)
break A}if(a instanceof A.nV){s=q.a.a.fI().V(new A.u8(),t.V)
break A}if(a instanceof A.nT){s=q.a.a.iz().V(new A.u9(),t.V)
break A}if(a instanceof A.mN){s=q.a.a.fs().V(new A.ua(),t.V)
break A}if(a instanceof A.lb){s=q.a.a.e7(a.a,A.d_(0,a.b,0)).V(new A.ub(),t.V)
break A}if(a instanceof A.n_){s=q.a.a.dq(A.d_(0,a.a,0)).V(new A.uc(),t.V)
break A}if(a instanceof A.lg){s=q.a.a.db
s===$&&A.u()
s=s.fh(a.a).V(new A.ud(q),t.V)
break A}if(a instanceof A.lf){s=q.a.a.db
s===$&&A.u()
s=s.dv(a.a,a.b).V(new A.ue(q),t.V)
break A}if(a instanceof A.mX){s=q.a.a.db
s===$&&A.u()
s=s.eq(a.b,a.c,a.a).V(new A.uf(),t.V)
break A}if(a instanceof A.kH){s=q.a.a.db
s===$&&A.u()
s=s.eX(a.a,a.b).V(new A.ug(),t.V)
break A}if(a instanceof A.kI){s=q.a.a.db
s===$&&A.u()
s=s.e1(a.a,a.b).V(new A.ui(),t.V)
break A}if(a instanceof A.li){s=q.ti(a.a)
break A}if(a instanceof A.lH){s=q.j7(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.lI){s=q.j8(a.a,a.b)
break A}if(a instanceof A.lM){s=q.h8(a.a)
break A}if(a instanceof A.lG){s=q.j6(a.a)
break A}if(a instanceof A.lV){s=q.a.a.dx
s===$&&A.u()
s=s.eg(a.c,a.b,a.a).V(new A.uj(q),t.V)
break A}if(a instanceof A.lP){s=q.h9(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.lK){s=q.j9(a.a,a.b)
break A}if(a instanceof A.lJ){s=q.h7(a.a)
break A}if(a instanceof A.lT){s=q.a.a.dx
s===$&&A.u()
s=s.fz(0,a.c,a.d,a.b,a.e,a.a).V(new A.uk(),t.V)
break A}if(a instanceof A.lN){s=q.a.a.dx
s===$&&A.u()
s=s.bf(A.d_(0,a.a,0),A.d_(0,a.b,0)).V(new A.ul(),t.V)
break A}if(a instanceof A.lA){s=q.a.a.dx
s===$&&A.u()
s=s.cD(a.a).V(new A.um(),t.V)
break A}if(a instanceof A.ng){s=q.a.a.dx
s===$&&A.u()
s=s.gi7().V(new A.un(),t.V)
break A}if(a instanceof A.nt){s=q.e_(a.a,a.b,a.c)
break A}if(a instanceof A.ny){s=q.cA().V(new A.uo(),t.V)
break A}if(a instanceof A.no){s=q.hp()
break A}if(a instanceof A.np){s=q.dZ(new A.up(q))
break A}if(a instanceof A.nr){s=q.dZ(new A.uq(q))
break A}if(a instanceof A.nz){s=q.hq(a.a)
break A}s={}
s.a=null
if(a instanceof A.ns){s.a=a.a
s=q.dZ(new A.ur(s,q))
break A}if(a instanceof A.nw){s=q.as
s=A.ba(new A.nx(s==null?B.dB:s),t.V)
break A}throw A.b(A.eI(u.P))}return s},
hf(a,b){return this.qU(a,b)},
qU(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$hf=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.q5(a1[k],l)
i=j.a
s=!m.I(i)?6:8
break
case 6:s=9
return A.a(n.aQ(j),$async$hf)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.t(A.A('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.CA(j)
e=new A.a2("")
A.cf(e,g.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c0()
b=A.cW(c)
b.t(0,d)
b.q()
b=A.ar(c.a.a)
e=new A.a2("")
A.cf(e,f.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c0()
a=A.cW(c)
a.t(0,d)
a.q()
if(b!==A.ar(c.a.a))throw A.b(A.aJ('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.t(A.A('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a2("")
A.cf(e,h.c.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c0()
b=A.cW(c)
b.t(0,d)
b.q()
b=a0!==A.ar(c.a.a)
d=b}else d=!1
if(d)throw A.b(A.aJ('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.q)(a1),++k
s=3
break
case 5:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hf,r)},
fY(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$fY=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bY(B.b.gH(m.b.oa("PRAGMA journal_mode")).gaX())
m=m.a.dx
m===$&&A.u()
s=3
return A.a(m.gi7(),$async$fY)
case 3:o=b
m=l.e===B.aB
n=m?"opfs":"file"
q=new A.ik(l.a,l.b,l.c,l.d,m,n,o,J.a0(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fY,r)},
dF(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.au(a)
if(b!=null){s=this.d3(b)
r=A.Eb(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.t(A.A('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.d3(b)
return new A.fs(n,m,new A.iy(q),p.r)}return new A.fs(n,m,o.gbn(),null)},
pi(a){return this.dF(a,null)},
qC(a,b,c){return this.bw(c,new A.tQ(this,a,c,b),new A.tR())},
bs(a,b){var s
A.ar(B.l.v(B.e.v(A.ai(this.a.a.au(a).c.p()))).a)
if(a.length===0)A.t(A.az(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.t(A.az(s,"spec.limit","must not be negative"))
return new A.wA(a,b)},
b9(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.b,d=this.dF(a.a,a0),c=t.fC,b=new A.mP(d.a,d.b.a,d.c.b,A.l([],c),A.l([],c),A.l([],t.k),A.l([],t.fi),f,!1,f,!1,!1,f,!1,!1)
for(d=e.a,c=d.length,s=0;s<d.length;d.length===c||(0,A.q)(d),++s)b=this.oW(b,d[s])
for(d=e.b,c=d.length,r=t.N,q=t.X,p=t.d,s=0;s<d.length;d.length===c||(0,A.q)(d),++s){o=d[s]
n=A.l([],p)
for(m=B.b.gu(o);m.k();){l=m.gn()
k=l.b
if(k!==B.bd)throw A.b(A.ah('orGroups only supports eq members; got "'+k.b+'" on field "'+l.a+'".',f))
n.push(A.m([l.a,l.c],r,q))}b=b.w9(n)}j=e.c
if(j!=null){d=A.BG(j)
b.jJ(d)
A.D3(d)
i=A.AV(d,!0)
h=b.h0()
h.d.push(new A.b0(i.a,i.b))
h.f.push(d)
b=h}for(d=e.d,c=d.length,s=0;s<d.length;d.length===c||(0,A.q)(d),++s,b=h){g=d[s]
q=g.a
b.cV(q)
h=b.h0()
h.r.push(new A.cm(q,g.b))}d=e.r
if(d!=null)b=b.lj(A.bF(d,!0,r))
if(e.w)b=b.pz(!0)
if(e.x)b=b.pA(!0)
if(e.f)b=b.px(!0)
else{d=e.e
if(d!=null){if(d<0)A.t(A.ah("Limit must be non-negative, got "+A.r(d)+".",f))
b=b.pB(d)}}return b},
oW(a,b){var s,r
switch(b.b.a){case 0:s=b.c
if(s==null)return a.no(0,b.a,!0)
return a.x9(0,b.a,s)
case 1:return a.xg(0,b.a,b.c)
case 2:return a.xa(0,b.a,b.c)
case 3:return a.xb(0,b.a,b.c)
case 4:return a.xe(0,b.a,b.c)
case 5:return a.xf(0,b.a,b.c)
case 6:return a.xc(0,b.a,b.d)
case 7:r=b.d
if(r==null)r=B.n
if(r.length!==2)throw A.b(A.Q("between requires exactly two values.",null))
return a.x6(0,b.a,new A.a4(r[0],r[1]))
case 8:return a.xh(0,b.a,A.a6(b.c))
case 9:return a.x8(0,b.a,A.a6(b.c))
case 10:return a.x7(0,b.a,A.a6(b.c))
case 11:return a.no(0,b.a,!0)
case 12:return a.xd(0,b.a,!0)}},
qW(a,b,c){return this.bw(c,new A.tS(this,this.bs(a,b),c),new A.tT())},
rJ(a,b,c){return this.bw(c,new A.tW(this,a,c,b),new A.tX())},
p_(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.a!==0)throw A.b(A.A("A transaction session is already active on this database."))
s="tx"+ ++l.at
r=$.C
q=t.D
p=t.h
o=new A.w(r,q)
n=new A.oZ(s,new A.aI(new A.w(r,q),p),new A.aI(o,p),A.l([],t.mc),new A.aO(Date.now(),0,!1))
k.j(0,s,n)
l.pR()
m=l.a.a
k=new A.tH(n)
if(a){if(A.nJ(m)!=null)A.t(A.A(u.L))
r=m.b
r===$&&A.u()
k=r.wu(k,t.H)}else{r=b===B.bn?B.aX:B.p
r=m.aW(k,r,t.H)
k=r}n.w!==$&&A.ce()
n.w=k
k.jP(new A.tF(l,n,s))
return o.V(new A.tG(s),t.V)},
eV(a,b){return this.rS(a,b)},
rS(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eV=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d3(a)
for(l=h.e,k=A.a_(l).i("bw<1>"),l=new A.bw(l,k),l=new A.ao(l,l.gm(0),k.i("ao<Z.E>")),k=k.i("Z.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.t(A.A("Future already completed"))
j.aD(null)}h.f=!b
h.c.an()
p=4
l=h.w
l===$&&A.u()
s=7
return A.a(l,$async$eV)
case 7:n.push(6)
s=5
break
case 4:p=3
g=o.pop()
if(A.D(g) instanceof A.f5){if(b)throw g}else throw g
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
hn(a,b){return this.rG(a,b)},
rG(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d3(a)
n=$.C
m=t.D
l=t.h
k=new A.w(n,m)
j=new A.hO(b,new A.aI(new A.w(n,m),l),new A.aI(k,l))
l=o.r.a2(new A.tV(j),t.H)
j.f!==$&&A.ce()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hn)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hn,r)},
hm(a,b){return this.rE(a,b)},
rE(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hm=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d3(a).e
f=B.b.mS(g,new A.tU(b))
if(f<0)throw A.b(A.A('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a_(g).i("bw<1>")
l=A.R(new A.bw(g,l),l.i("Z.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bS(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.t(A.A("Future already completed"))
i.aD(null)
p=7
i=m.f
i===$&&A.u()
s=10
return A.a(i,$async$hm)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.D(e) instanceof A.f5))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:B.b.ku(g,f,g.length)
q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hm,r)},
hk(a,b){return this.ru(a,b)},
ru(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hk=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d3(a).e
j=A.Eb(k)
if(j==null||j.a!==b)throw A.b(A.A('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.an()
p=4
m=j.f
m===$&&A.u()
s=7
return A.a(m,$async$hk)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.D(i) instanceof A.f5)throw i
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
return A.f($async$hk,r)},
hu(a,b){return this.tj(a,b)},
tj(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hu=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.au(a)
s=3
return A.a(p.pi(a).bZ(b),$async$hu)
case 3:o="w"+ ++p.at
n=A.CT()
n.sk7(new A.mA(l,b,m,B.aY).iM().vM(new A.u0(p,o),new A.u1(p,n,o)))
p.f.j(0,o,n.bu())
q=A.ba(new A.hu(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hu,r)},
th(a,b){var s=this,r="w"+ ++s.at,q=s.b9(s.bs(a,b),null)
s.f.j(0,r,new A.mS(q,q.gdX(),B.aY).iM().aN(new A.u2(s,r)))
return A.ba(new A.hu(r),t.V)},
jI(a){return this.t9(a)},
t9(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.f.G(0,a)
if(o!=null)o.C()
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jI,r)},
pS(){if(this.w!=null)return
this.w=A.CJ(A.d_(9e8,0,0),new A.tL(this))},
j7(a,b,c,d,e,f,g){return this.q0(a,b,c,d,e,f,g)},
q0(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$j7=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.pS()
o=p.r
n="u"+ ++p.at
o.mN()
m=o.r
if(m.a>=16)A.t(A.ah("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.t(A.ah("Invalid file size: "+c,null))
if(o.gnj()+c>536870912)A.t(A.ah("Aggregate upload quota exceeded: "+o.gnj()+" + "+c+" > 536870912",null))
o=o.f.$0().iU(18e8)
m.j(0,n,new A.cG(n,a,b,d,e,c,f,g,A.l([],t.bs),o))
q=new A.lU("u"+p.at,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j7,r)},
j8(a,b){return this.q1(a,b)},
q1(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$j8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.r
k=l.r
j=k.h(0,a)
if(j==null)A.t(A.ah("Unknown upload session: "+a,null))
l=l.f
if(!j.z.kh(l.$0())){k.G(0,a)
A.t(A.ah("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.G(0,a)
A.t(A.ah("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.G(0,a)
A.t(A.ah("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().iU(18e8)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j8,r)},
h8(a){return this.q4(a)},
q4(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$h8=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.r
g=h.r.G(0,a)
if(g==null)A.t(A.ah("Unknown upload session: "+a,null))
if(!g.z.kh(h.f.$0()))A.t(A.ah("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.t(A.ah("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.dx
h===$&&A.u()
n=g.b
m=g.c
l=new A.tM(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.d7(g.w,l,i,o,k,j,m,n),$async$h8)
case 3:q=new f.lS(p.lx(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
j6(a){return this.q_(a)},
q_(a){var s=0,r=A.h(t.V),q,p=this
var $async$j6=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.r.r.G(0,a)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j6,r)},
h9(a,b,c,d,e){return this.q6(a,b,c,d,e)},
q6(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$h9=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.dx
k===$&&A.u()
s=3
return A.a(k.fn(c,d,b,e,a),$async$h9)
case 3:o=g
n="f"+ ++p.at
m=new A.lL()
l=A.CT()
l.sk7(o.bz(new A.tN(p,m,n,l),new A.tO(p,n),new A.tP(p,n)))
k=l.bu()
m.c!==$&&A.ce()
m.c=k
p.x.j(0,n,m)
q=new A.lQ(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
j9(a,b){return this.q3(a,b)},
q3(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$j9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.x.h(0,a)
if(n==null)throw A.b(A.A('Unknown file stream "'+a+'".'))
o=n.b-=b
if((o<0?n.b=0:o)<1048576){o=n.c
o===$&&A.u()
o.b1()}q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j9,r)},
h7(a){return this.q2(a)},
q2(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$h7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.x.G(0,a)
s=n!=null?3:4
break
case 3:o=n.c
o===$&&A.u()
s=5
return A.a(o.C(),$async$h7)
case 5:case 4:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)},
lx(a){return new A.lR(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
e_(a,b,c){return this.t1(a,b,c)},
t1(a,b,a0){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$e_=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.ah("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cA(),$async$e_)
case 3:if(b==null||b.length===0)throw A.b(A.ah("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.zV(a0)
m=A.nQ(a)
l=o.dy
k=A.n(l).i("T<1>")
l=A.R(new A.T(l,k),k.i("o.E"))
s=4
return A.a(o.as.hK(m,b,l,n),$async$e_)
case 4:j=a2
m=A.dQ(null,null,t.n6)
l=A.dQ(null,null,t.ic)
k=t.H
i=A.ba(null,k)
h=new A.pA(A.ba(null,k))
g=A.ba(B.O,t.fD)
f=A.l([],t.s)
k=A.ba(null,k)
e=new A.xj(A.Nh(),o.CW)
d=new A.nm(o,j,e,new A.tY(p),B.N,m,l,i,h,A.aL(t.N),g,f,k)
c=j.r
m=d.e=new A.xu(o,B.a.A(A.ar(B.l.v(B.e.v(j.b.l(0)+"|"+c)).a),0,12))
k=new A.rG(o,j,e,o.ax)
d.x=k
k=new A.wb(o,j,e,m,k,h)
d.f=k
d.r=new A.xh(o,j,e,m,k)
d.w=new A.wk(o,j,e,d.gqG(),j.as)
p.z=n
p.y=d
p.Q=new A.b1(l,A.n(l).i("b1<1>")).aN(new A.tZ(p))
s=5
return A.a(d.az(),$async$e_)
case 5:q=new A.nu(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e_,r)},
eS(){var s=this.y
return s==null?A.t(A.ah("Sync is not started.",null)):s},
hp(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hp=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.eS()
o.p1.push("cycle")
n=A
s=3
return A.a(o.d4(),$async$hp)
case 3:q=new n.nq(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
dZ(a){var s=0,r=A.h(t.V),q
var $async$dZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$dZ)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
hq(a){return this.t2(a)},
t2(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.z
n=p.eS()
if(o==null)throw A.b(A.ah("Sync is not started.",null))
o.a=a
s=3
return A.a(n.eh(),$async$hq)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
cA(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.y
q.y=null
p=q.Q
p=p==null?null:p.C()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bx(p,o),$async$cA)
case 2:q.Q=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aG(),$async$cA)
case 5:p=q.a.a.as.hQ(n)
s=6
return A.a(p,$async$cA)
case 6:case 4:q.as=q.z=null
return A.e(null,r)}})
return A.f($async$cA,r)},
j0(a){return new A.le(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
ti(a){var s=this,r="w"+ ++s.at,q=s.a.a.db
q===$&&A.u()
s.f.j(0,r,q.x5(a).aN(new A.u_(s,r)))
return A.ba(new A.hu(r),t.V)},
d3(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.A('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.A('Transaction session "'+a+'" is not ready yet.'))
s.x=new A.aO(Date.now(),0,!1)
return s},
pR(){var s,r,q=this
if(q.e!=null)return
s=q.a.ax
r=s.a
if(r<=0)return
q.e=A.CJ(A.d_(B.c.M(r,4),0,0),new A.tK(q,s))},
hv(a,b,c){return this.tm(a,b,c)},
bw(a,b,c){return this.hv(a,b,c,t.z)},
tm(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hv=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d3(a)
o=c
s=3
return A.a(b.$0(),$async$hv)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hv,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cA(),$async$q)
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
n===$&&A.u()
n.C()}p.am(0)
p=q.c
p===$&&A.u()
p.C()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.u3.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cJ(r,t.N,t.X)
s=a.f
s=s==null?null:A.cJ(s,t.N,t.X)
this.a.b.t(0,new A.la(a.a,a.b,a.c,a.d,r,s,A.d3(a.r,t.N)))},
$S:79}
A.u4.prototype={
$1(a){return B.k},
$S:8}
A.u5.prototype={
$0(){var s=this.a
return this.b.dF(s.c,s.a).bZ(s.b)},
$S:81}
A.u6.prototype={
$1(a){return new A.h6(a)},
$S:72}
A.uh.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.l([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dF(o.c,o.a).bZ(j),$async$$0)
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
A.us.prototype={
$1(a){return new A.h7(a)},
$S:84}
A.ut.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.c,r.b),r.a).hH()},
$S:48}
A.uu.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.d,r.b),r.a).hJ(r.c)},
$S:48}
A.uv.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.d,r.b),r.a).hR(r.c)},
$S:86}
A.uw.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.c,r.b),r.a).i6()},
$S:46}
A.ux.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.b9(s.bs(q.e,q.b),q.a).cU("SUM",q.c)
break
case 1:s=r.b
q=s.b9(s.bs(q.e,q.b),q.a).cU("AVG",q.c)
break
case 2:s=r.b
q=s.b9(s.bs(q.e,q.b),q.a).cU("MIN",q.c)
break
case 3:s=r.b
q=s.b9(s.bs(q.e,q.b),q.a).cU("MAX",q.c)
break
default:q=null}return q},
$S:88}
A.uy.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.bs(r.c,r.b),r.a).hS()},
$S:89}
A.u7.prototype={
$1(a){return B.k},
$S:8}
A.u8.prototype={
$1(a){return B.k},
$S:8}
A.u9.prototype={
$1(a){return B.k},
$S:8}
A.ua.prototype={
$1(a){return new A.h_(a)},
$S:90}
A.ub.prototype={
$1(a){return new A.ft(a)},
$S:91}
A.uc.prototype={
$1(a){return B.k},
$S:8}
A.ud.prototype={
$1(a){var s,r,q=A.l([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.j0(s.gn()))
return new A.fw(q)},
$S:92}
A.ue.prototype={
$1(a){return new A.fv(a==null?null:this.a.j0(a))},
$S:93}
A.uf.prototype={
$1(a){return B.k},
$S:8}
A.ug.prototype={
$1(a){return B.k},
$S:8}
A.ui.prototype={
$1(a){return B.k},
$S:8}
A.uj.prototype={
$1(a){var s,r,q=A.l([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.lx(s.gn()))
return new A.fG(q)},
$S:94}
A.uk.prototype={
$1(a){return B.k},
$S:8}
A.ul.prototype={
$1(a){return new A.fF(a)},
$S:95}
A.um.prototype={
$1(a){return new A.fD(a)},
$S:96}
A.un.prototype={
$1(a){return new A.hi(a)},
$S:97}
A.uo.prototype={
$1(a){return B.k},
$S:8}
A.up.prototype={
$0(){return this.a.eS().bd()},
$S:3}
A.uq.prototype={
$0(){return this.a.eS().b1()},
$S:3}
A.ur.prototype={
$0(){return this.b.eS().fR(this.a.a)},
$S:3}
A.tQ.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dF(p.b,a1)
a0.a.a.c===$&&A.u()
o=p.d
n=o instanceof A.j_
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.iq(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.ih(B.a0,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.F(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 4:n=o instanceof A.j2
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.nl(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.ih(B.a1,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.l([A.F(a0)],t.s)}else a0=B.u
q=a0
s=1
break
case 11:k=o instanceof A.j0
j=null
i=null
if(k){j=o.a
i=j}s=k?17:18
break
case 17:s=a1==null?19:21
break
case 19:s=22
return A.a(a2.n6(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.n7(i),$async$$0)
case 23:case 20:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 18:k=o instanceof A.j3
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nm(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bA(i,B.a1),$async$$0)
case 30:case 27:a0=A.l([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.F(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iX
if(e){d=o.a
c=o.b
b=d}else{d=null
b=null
c=null}s=e?31:32
break
case 31:s=a1==null?33:35
break
case 33:s=36
return A.a(a2.n3(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cM(b,c,!1),$async$$0)
case 37:case 34:q=A.l([b],t.s)
s=1
break
case 32:a0=o instanceof A.iY
a=a0?o.a:null
s=a0?38:39
break
case 38:s=a1==null?40:42
break
case 40:s=43
return A.a(a2.n4(a),$async$$0)
case 43:s=41
break
case 42:s=44
return A.a(a2.fo(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.R(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iW
if(e){d=o.a
b=d}else b=null
s=e?45:46
break
case 45:s=a1==null?47:49
break
case 47:s=50
return A.a(a2.mr(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.ig(B.C,b),$async$$0)
case 51:case 48:q=A.l([b],t.s)
s=1
break
case 46:e=o instanceof A.j1
if(e){d=o.a
b=d}else b=null
s=e?52:53
break
case 52:s=a1==null?54:56
break
case 54:s=57
return A.a(a2.ng(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.ig(B.E,b),$async$$0)
case 58:case 55:q=A.l([b],t.s)
s=1
break
case 53:e=o instanceof A.iZ
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.kr(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.dj(b),$async$$0)
case 65:case 62:q=A.l([b],t.s)
s=1
break
case 60:throw A.b(A.eI(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:46}
A.tR.prototype={
$1(a){return new A.fS(a)},
$S:98}
A.tS.prototype={
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
return A.a(o.b9(m,n).pC(!0,k).cF(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.b9(m,n).py(k).cF(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.b9(m,p.c).cF()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:99}
A.tT.prototype={
$1(a){return new A.h2(a.a,a.d,a.e,a.b,a.c)},
$S:100}
A.tW.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dF(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.wR(m,l,o.c.b,n.a)
if(l.w==null)A.t(A.rV('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.t(A.rV(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.t(A.ah("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cF()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:101}
A.tX.prototype={
$1(a){var s,r,q=A.l([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.n3(r.a,r.b))}return new A.h9(q)},
$S:102}
A.tH.prototype={
nA(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.an()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aW)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nA(a)},
$S:4}
A.tF.prototype={
$2(a,b){var s=this.b.d
if((s.a.a&30)===0){this.a.d.G(0,this.c)
s.bQ(a,b)}},
$S:7}
A.tG.prototype={
$1(a){return new A.hn(this.a)},
$S:104}
A.tV.prototype={
$1(a){return this.nB(a)},
nB(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.an()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aW)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.tU.prototype={
$1(a){return a.a===this.a},
$S:105}
A.u0.prototype={
$1(a){var s=a==null?B.b6:A.l([a],t.d)
this.a.b.t(0,new A.jB(this.b,s))},
$S:106}
A.u1.prototype={
$1(a){this.b.bu().C()
this.a.f.G(0,this.c)},
$S:23}
A.u2.prototype={
$1(a){this.a.b.t(0,new A.jB(this.b,a))},
$S:107}
A.tL.prototype={
$1(a){return this.a.r.mN()},
$S:40}
A.tM.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bU(A.e0(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:case 1:return A.bU(null,0,r)
case 2:return A.bU(o.at(-1),1,r)}})
var s=0,r=A.FO($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.G3(r)},
$S:109}
A.tN.prototype={
$1(a){var s=this,r=new Uint8Array(A.b8(a)),q=s.b
q.b=q.b+r.length
s.a.b.t(0,new A.fE(s.c,r,!1,null))
if(q.b>=1048576)s.d.bu().bd()},
$S:14}
A.tP.prototype={
$1(a){var s=this.a,r=this.b
s.x.G(0,r)
s.b.t(0,new A.fE(r,new Uint8Array(0),!0,J.a0(a)))},
$S:23}
A.tO.prototype={
$0(){var s=this.a,r=this.b
s.x.G(0,r)
s.b.t(0,new A.fE(r,new Uint8Array(0),!0,null))},
$S:0}
A.tY.prototype={
$0(){this.a.b.t(0,B.bC)},
$S:2}
A.tZ.prototype={
$1(a){var s=this.a
s.as=a
s.b.t(0,new A.nv(a))},
$S:110}
A.u_.prototype={
$1(a){var s,r=this.a,q=A.l([],t.oS)
for(s=J.E(a);s.k();)q.push(r.j0(s.gn()))
r.b.t(0,new A.lh(this.b,q))},
$S:111}
A.tK.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.d
if(i.a===0){i=j.e
if(i!=null)i.C()
j.e=null
return}j=Date.now()
s=A.n(i).i("al<2>")
s=A.R(new A.al(i,s),s.i("o.E"))
r=s.length
q=this.b.a
p=t.H
o=0
for(;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m=n.x
if(0-m.b+1000*(j-m.a)>q){for(m=n.e,l=A.a_(m).i("bw<1>"),m=new A.bw(m,l),m=new A.ao(m,m.gm(0),l.i("ao<Z.E>")),l=l.i("Z.E");m.k();){k=m.d
k=(k==null?l.a(k):k).b.a
if((k.a&30)===0)k.aD(null)}n.f=!0
m=n.c.a
if((m.a&30)===0)m.aD(null)
i.G(0,n.a)
m=n.w
m===$&&A.u()
m.bq(new A.tI(),new A.tJ(),p)}}},
$S:40}
A.tI.prototype={
$1(a){},
$S:71}
A.tJ.prototype={
$2(a,b){},
$S:7}
A.nh.prototype={}
A.vY.prototype={
bZ(a){var s,r=this.a
if(!r.I(a))return null
s=r.G(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.pb(s)
r.toString
t.G.a(r)}return r},
kN(a,b){var s,r=this.a
if(r.a>=256)r.G(0,new A.T(r,A.n(r).i("T<1>")).gH(0))
if(b==null)s=null
else{s=A.pb(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vD(a){var s,r,q,p=a.a
if(p===0){this.a.am(0)
return}s=this.a
if(p>=s.a){s.am(0)
return}for(p=A.hJ(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.G(0,q==null?r.a(q):q)}}}
A.md.prototype={
aQ(a){return this.wD(a)},
wD(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dy
h=a.a
if(i.I(h))throw A.b(A.aJ('Duplicate store name "'+h+'" in this open call.'))
p=A.CA(a)
o=q.w
if(o.e===B.aB&&p.b.length!==0)throw A.b(new A.hq('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fW(a,p),$async$aQ)
case 2:n=new A.it(o).jR(a)
o=a.w
if(o!=null)A.N7(q.r,h,o.c)
o=q.r
s=3
return A.a(o.aJ("lp_stores",1,"store = ?",[h]),$async$aQ)
case 3:m=c
l=J.L(m)
s=l.gE(m)?4:6
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
return A.a(A.fQ(o,0,0,"create:"+h,k,l),$async$aQ)
case 17:s=5
break
case 6:l=J.V(l.gH(m),"schema_ver")
l.toString
A.aq(l)
k=a.b
if(l>k)throw A.b(A.EB('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fP(q,a,l),$async$aQ)
case 20:case 19:s=21
return A.a(q.bL(a),$async$aQ)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a6(a.p(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aQ)
case 22:case 5:i.j(0,h,new A.nh(a,p,new A.vY(A.v(t.N,t.b))))
s=23
return A.a(q.dQ(h,p),$async$aQ)
case 23:return A.e(null,r)}})
return A.f($async$aQ,r)},
fW(a,b){return this.oX(a,b)},
oX(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aJ("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fW)
case 3:j=d
if(J.bA(j)){s=1
break}o=null
try{n=J.V(J.bY(j),"v")
o=A.Jd(typeof n=="string"?B.h.aw(n,null):n)}catch(i){if(A.D(i) instanceof A.dI){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.ar(B.l.v(B.e.v(A.ai(o.p()))).a)!==A.ar(B.l.v(B.e.v(A.ai(b.p()))).a))throw A.b(A.aJ('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fW,r)},
dQ(a,b){return this.r0(a,b)},
r0(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dQ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ai(b.p())
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
hF(a){return this.tK(a)},
tK(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hF=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hF)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
bL(a){return this.rp(a)},
rp(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bL=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.em("lp_stores",A.l(["definition_json"],t.s),1,"store = ?",[a1]),$async$bL)
case 3:a2=a6
if(J.bA(a2)){s=1
break}o=null
try{n=J.V(J.bY(a2),"definition_json")
m=typeof n=="string"?B.h.aw(n,null):n
l=m
l.toString
k=t.X
o=A.q5(A.bl(t.f.a(l),t.N,k),k)}catch(a4){if(A.D(a4) instanceof A.cN){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.ay.Z(i.a,h.a)&&i.b===h.b&&i.c.P(0,h.c)
g=l}}if(g){s=1
break}f=new A.jt()
$.kC()
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
case 11:l=new A.it(p.w).jR(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.O(l[e]),$async$bL)
case 16:case 14:l.length===k||(0,A.q)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.B(l,'"','""')
s=17
return A.a(a0.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.B(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bL)
case 17:k=h.a
c=k.$ti.i("X<I.E,k>")
b=new A.X(k,A.pm(),c).B(0,", ")
a=new A.X(k,new A.uA(a3,h),c).B(0,", ")
l=A.B(l,'"','""')
s=18
return A.a(a0.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.B(a1,'"','""')+'"')),$async$bL)
case 18:case 12:if(f.b==null)f.b=$.mL.$0()
l=a3.b
s=19
return A.a(A.fQ(a0,f.gmI(),l,"fts:"+a1,p.CW,l),$async$bL)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bL,r)},
hO(a){return this.ua(a)},
ua(a){var s=0,r=A.h(t.H),q=this,p
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hO)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hO,r)},
au(a){var s=this.dy.h(0,a)
if(s==null)throw A.b(A.A('No store "'+a+'" registered in this LocalPocket.'))
return s},
by(a){var s,r,q=this
if(A.nJ(q)!=null)A.t(A.A(u.L))
s=q.au(a)
r=q.a
r===$&&A.u()
return new A.fs(q,s,r.gbn(),null)},
aW(a,b,c){var s
if(A.nJ(this)!=null)A.t(A.A(u.L))
s=this.b
s===$&&A.u()
return s.aW(a,b,c)},
a2(a,b){return this.aW(a,B.p,b)},
nk(a,b){++this.y.e
return this.r.aE(a,B.n)},
e3(a){return this.tF(a)},
tE(){return this.e3(null)},
tF(a){var s=0,r=A.h(t.H),q=this,p
var $async$e3=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e3)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.B(a,'"','""')+'"')),$async$e3)
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
iA(){var s=0,r=A.h(t.H),q=this
var $async$iA=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iA)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iA,r)},
iz(){var s=0,r=A.h(t.H),q=this
var $async$iz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.r.O("VACUUM"),$async$iz)
case 2:return A.e(null,r)}})
return A.f($async$iz,r)},
fs(){return this.wg()},
wg(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fs=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.uD(o),t.P),$async$fs)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fs,r)},
dq(a){return this.wP(a)},
wP(a){var s=0,r=A.h(t.H),q=this,p
var $async$dq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dy,p=new A.bE(p,p.r,p.e,A.n(p).i("bE<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.e7(p.d,a),$async$dq)
case 4:s=2
break
case 3:s=5
return A.a(q.fs(),$async$dq)
case 5:s=6
return A.a(q.fI(),$async$dq)
case 6:s=7
return A.a(q.tE(),$async$dq)
case 7:return A.e(null,r)}})
return A.f($async$dq,r)},
e7(a,b){return this.tT(a,b)},
tT(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$e7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.CW.$0()
h=i-B.c.M(b.a,1000)
j.a=0
o=p.au(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ai("SELECT b.id FROM "+('"'+A.B(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$e7)
case 5:l=d
if(J.bA(l)){s=4
break}if(A.nJ(p)!=null)A.t(A.A(u.L))
k=p.b
k===$&&A.u()
s=6
return A.a(k.aW(new A.uC(j,p,l,a,h,o),B.p,n),$async$e7)
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
A.uA.prototype={
$1(a){return A.Di(this.a.a,this.b.c,"",a)},
$S:6}
A.uD.prototype={
$1(a){return this.nD(a)},
nD(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
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
return A.a(l.Y("lp_outbox","store = ? AND record_id = ?",[m,A.F(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uC.prototype={
$1(a){return this.nC(a)},
nC(a3){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
b=c.gX(d)?A.cd(h,c.gH(d),f,g):null
s=6
return A.a(A.cA(a1,n,e,!1),$async$$1)
case 6:s=7
return A.a(a1.Y("lp_outbox","store = ? AND record_id = ?",[n,e]),$async$$1)
case 7:s=8
return A.a(a1.Y(n,"id = ?",[e]),$async$$1)
case 8:s=9
return A.a(a1.L("lp_sync_row",A.m(["access_state","purged"],m,l),"store = ? AND record_id = ?",[n,e]),$async$$1)
case 9:c=A.at([e],m)
k.push(new A.a1(n,c))
j.r+=c.a
if(b!=null){c=A.n(b).i("T<1>")
a=c.i("am<o.E>")
a0=A.mi(a.i("o.E"))
a0.D(0,new A.am(new A.T(b,c),new A.uB(),a))
a3.bb(new A.aU(n,e,B.H,B.at,b,null,a0))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uB.prototype={
$1(a){return a!=="id"},
$S:10}
A.oz.prototype={}
A.vc.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:42}
A.vd.prototype={
$2(a,b){return B.c.a0(a.a,b.a)},
$S:114}
A.v8.prototype={
$1(a){return a.h(0,"name")},
$S:35}
A.vb.prototype={
$1(a){return this.nH(a)},
nH(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.ay,j=j.ch,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.cd(k,p,i,j)
n=o
A.IL(k,n)
g=J.V(o,"id")
g.toString
A.F(g)
m=A.dq(k,J.x(J.V(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aC(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:43}
A.v9.prototype={
$1(a){return A.Di(this.a.a,this.b.c,"",a)},
$S:6}
A.vi.prototype={}
A.mG.prototype={
ws(a){if(a>this.w)this.w=a},
nb(){return this.f++}}
A.uE.prototype={
u2(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
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
d=A.bF(q,!0,t.X)}catch(o){q=A.CD(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.c1.Z(e,n)||J.as(d)!==n.length)throw A.b(A.CD("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.by(l)&&!A.av(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.CD(j))}return d}}
A.Ao.prototype={
Z(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.wA.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.r(s.e)+", backward: "+s.z+")"}}
A.d6.prototype={}
A.aj.prototype={}
A.c3.prototype={}
A.du.prototype={}
A.cZ.prototype={}
A.b0.prototype={}
A.cm.prototype={}
A.mP.prototype={
cu(a,b){var s=this.gdX()
s.y.nb()
return this.c.ai(a,b)},
c3(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bF(i.d,!0,h)
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
return new A.mP(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
h0(){var s=null
return this.c3(s,s,s,s,s,s,s,s,s)},
lj(a){var s=null
return this.c3(s,s,s,s,s,s,s,a,s)},
pz(a){var s=null
return this.c3(s,s,s,a,s,s,s,s,s)},
pA(a){var s=null
return this.c3(s,s,s,s,a,s,s,s,s)},
px(a){var s=null
return this.c3(a,s,s,s,s,s,s,s,s)},
pB(a){var s=null
return this.c3(s,s,s,s,s,a,s,s,s)},
pD(a,b,c){var s=null
return this.c3(s,s,s,s,s,s,a,b,c)},
pC(a,b){var s=null
return this.c3(s,a,b,s,s,s,s,s,s)},
py(a){var s=null
return this.c3(s,s,a,s,s,s,s,s,s)},
cV(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aJ('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.ah('Unknown field "'+a+'" for query.',a))},
be(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cV(a0)
s='"'+A.B(a0,'"','""')+'"'
r=A.l([],t.fC)
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
if(i)r.push(new A.b0(s+b,[A.kv(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b0(s+b,["%"+A.kv(a3)]))
g=a2!=null
if(g)r.push(new A.b0(s+b,["%"+A.kv(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b0(s+" IS NULL",B.n))
e=a8===!0
if(e)r.push(new A.b0(s+" IS NOT NULL",B.n))
d=this.h0()
B.b.D(d.d,r)
c=A.l([],t.k)
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
B.b.D(d.f,c)
return d},
no(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
x9(a,b,c){var s=null
return this.be(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xg(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
xa(a,b,c){var s=null
return this.be(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
xb(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
xe(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
xf(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
xc(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
x6(a,b,c){var s=null
return this.be(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xh(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
x8(a,b,c){var s=null
return this.be(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
x7(a,b,c){var s=null
return this.be(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
xd(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
w9(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.l([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
p=A.l([],j)
q.a8(0,new A.wx(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.h0()
o.e.push(new A.b0("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.l([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.q)(a),++r){q=a[r]
if(q.gX(0)){m=A.l([],j)
for(l=q.ga7().gu(0);l.k();){k=l.gn()
m.push(new A.aj(k.a,"eq",[k.b]))}s.push(new A.du(m))}}o.f.push(new A.cZ(s))
return o},
jJ(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.aj
r=s?a.a:l
if(s){this.cV(r)
break A}s=a instanceof A.c3
q=s?a.a:l
if(s){this.jJ(q)
break A}p=a instanceof A.du
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.q)(n),++m)this.jJ(n[m])
break A}},
gc4(){var s,r=A.R(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga1(r).a!=="id"
else s=!1
if(s)r.push(B.d3)
return r},
glg(){var s,r,q,p,o
if(this.at){s=A.l([],t.fi)
for(r=this.gc4(),q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.push(new A.cm(o.a,!o.b))}}else s=this.gc4()
return s},
grY(){var s,r,q,p,o,n=A.l([],t.s)
for(s=this.gc4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jz(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.El('Query on "'+this.gaP()+'" requires .limit(n) or .all().'))
return s},
gaP(){return this.b.a},
gdX(){return this.a},
eC(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.l([],e),c=[],b=A.l([],e)
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
if(r!=null){n=f.gln().u2(r,f.at)
m=f.lI(f.glg(),n)
d.push(m.a)
B.b.D(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.B(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.B(a,'"','""')+'"')+") AS v"}else r=f.grL()
k=r}j=f.glg()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.ws(),A.a_(j).i("X<1,k>")).B(0,", ")
h=A.J4(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.wt(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jz():a3
g=e}return new A.a4(h+(g==null?"":" LIMIT "+A.r(g)),c)},
iZ(a){return this.eC(null,null,!1,!1,a)},
po(a,b){return this.eC(a,b,!1,!1,null)},
pm(){return this.eC(null,null,!1,!1,null)},
pp(a,b,c){return this.eC(a,null,b,c,null)},
pn(a){return this.eC(null,null,!1,a,null)},
grL(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.l4())return"*"
o=A.R(o,t.N)
for(s=this.gc4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(!B.b.F(o,p))o.push(p)}return new A.X(o,A.pm(),A.a_(o).i("X<1,k>")).B(0,", ")},
gln(){var s=this.b
return new A.uE(s.a,s.b,this.grY(),this.grV())},
grV(){var s,r,q,p,o,n=this,m=A.l([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.l([o.a,o.b],q))}return B.h.a6(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lI(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cE(a,new A.wu(a)),c=B.b.cE(b,new A.wv())
if(a.length>=2&&d&&!B.b.gH(a).b&&c){s=A.l([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.q)(a),++q){p=a[q]
s.push('"'+A.B(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gH(a).b?"<":">"
return new A.a4("("+o+") "+n+" ("+B.b.B(A.ab(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.l([],s)
l=[]
for(k=0;k<a.length;++k){j=A.l([],s)
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
B.b.D(l,i)}}if(m.length===0)return B.dj
return new A.a4("("+B.b.B(m," OR ")+")",l)},
lJ(a,b){var s,r,q,p,o=this.gln(),n=[]
for(s=this.gc4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gc4(),p=r.length,q=0;q<r.length;r.length===p||(0,A.q)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.v(B.h.a6(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bx.gf6().v(o)},
e9(a){return this.v_(a)},
cF(){return this.e9(null)},
v_(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$e9=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.jz():a1
if(a0===0){q=B.d4
s=1
break}o=a0==null
n=p.iZ(o?null:a0+1)
s=3
return A.a(p.cu(n.a,n.b),$async$e9)
case 3:m=a3
l=o?m:J.C0(m,a0).cO(0)
k=!o&&J.as(m)>a0
o=p.y
j=o!=null
i=j&&p.l4()
h=p.b
if(i){i=A.R(o,t.N)
B.b.D(i,p.r9())
g=A.Mw(h,l,p.gdX().ay,i,p.gdX().ch)}else g=A.Mv(h,l,p.gdX().ay,p.gdX().ch)
i=p.at
if(i&&g.length!==0){h=A.a_(g).i("bw<1>")
f=A.R(new A.bw(g,h),h.i("Z.E"))
B.b.am(g)
B.b.D(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hg(g),$async$e9)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.N6(g,o):g
if(g.length!==0){b=e?p.lJ(B.b.ga1(g),B.b.gH(g)):null
a=d?p.lJ(B.b.ga1(g),B.b.gH(g)):null}else{b=null
a=null}q=new A.co(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e9,r)},
hg(a){return this.r3(a)},
r3(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hg=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga1(a)
e=p.gc4()
n=[]
for(m=p.gc4(),l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k)n.push(o.h(0,m[k].a))
j=p.lI(e,n)
e=t.s
i=A.l([],e)
h=[]
g=A.l([],e)
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
return A.a(p.cu("SELECT 1 FROM "+('"'+A.B(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hg)
case 3:q=d.ec(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
l4(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.fa(o)==null)return!1}return!0},
r9(){var s,r,q,p,o=A.l([],t.s)
for(s=this.gc4(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hH(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hH=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pn(!0)
m=A
s=3
return A.a(p.cu(o.a,o.b),$async$hH)
case 3:n=m.fe(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
hJ(a){return this.tV(a)},
tV(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cV(a)
o=p.pp(a,!0,!0)
m=A
s=3
return A.a(p.cu(o.a,o.b),$async$hJ)
case 3:n=m.fe(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
hR(a){return this.uG(a)},
uG(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cV(a)
o=A.l([a],t.s)
n=A.l([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pD(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.iZ(h)
o=[]
f=J
s=3
return A.a(i.cu(B.a.kw(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hR)
case 3:n=f.E(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
qw(a){var s,r,q=this.b.fa(a)
if(q==null)return!1
s=q.b
A:{r=B.T===s||B.U===s||B.B===s||B.V===s
break A}return r},
cU(a,b){return this.oV(a,b)},
oV(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cV(b)
if(!p.qw(b))throw A.b(A.ah('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.po(b,a)
s=3
return A.a(p.cu(o.a,o.b),$async$cU)
case 3:n=d
m=J.L(n)
q=A.FA(m.gE(n)?null:J.V(m.gH(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cU,r)},
i6(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$i6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lj(A.l(["id"],m))
k=l.pm()
s=3
return A.a(l.cu(k.a,k.b),$async$i6)
case 3:j=b
m=A.l([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.F(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i6,r)},
hS(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$hS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.iZ(p.jz())
n=J
s=3
return A.a(p.cu("EXPLAIN QUERY PLAN "+o.a,o.b),$async$hS)
case 3:q=n.c_(b,new A.ww(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)}}
A.wx.prototype={
$2(a,b){this.a.cV(a)
this.b.push('"'+A.B(a,'"','""')+'" = ?')
this.c.push(b)},
$S:116}
A.ws.prototype={
$1(a){var s=A.B(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:117}
A.wt.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.B(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:118}
A.wu.prototype={
$1(a){return a.b===B.b.gH(this.a).b},
$S:119}
A.wv.prototype={
$1(a){return a!=null},
$S:21}
A.ww.prototype={
$1(a){return a.h(0,"detail")},
$S:35}
A.cM.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cM&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gJ(a){return A.c4(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.wR.prototype={
rK(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.El('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cF(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cF=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.ck(a3).length===0){q=B.cM
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.ek(a3)
A.Jf(d)
if(e.b)A.Je(d)
c=f.a
b=c+"_fts"
a=A.l(['"'+A.B(b,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a.push("b.archived = 0")
if(!n.w)a.push("b.hidden = 0")
a3=B.b.B(a," AND ")
a0=n.rK()
a1=a0==null?"":" LIMIT "+A.r(a0)
f=A.B(b,'"','""')
e=A.B(c,'"','""')
m="SELECT b.id, rank AS score FROM "+('"'+f+'"')+" JOIN "+('"'+e+'"')+" b ON b.rowid = "+('"'+A.B(b,'"','""')+'"')+".rowid"+(" WHERE "+a3)+" ORDER BY rank"+a1
l=[d]
p=4
k=n.a
k.toString
k.y.nb()
s=7
return A.a(n.c.ai(m,l),$async$cF)
case 7:j=a6
i=A.l([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.V(h,"id")
f.toString
A.F(f)
e=J.V(h,"score")
e.toString
J.aN(i,new A.cM(f,A.Fz(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.D(a4)
if(i instanceof A.c6){g=i
throw A.b(A.ah("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cF,r)}}
A.co.prototype={}
A.wK.prototype={}
A.c2.prototype={
a4(){return"FieldKind."+this.b}}
A.aY.prototype={
gkQ(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aw===s||B.I===s||B.W===s||B.X===s||B.J===s){r="TEXT"
break A}if(B.T===s||B.B===s||B.V===s){r="INTEGER"
break A}if(B.U===s){r="REAL"
break A}throw A.b(A.eI(u.P))}return r},
p(){var s,r=this,q=A.v(t.N,t.X)
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
A.rE.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fB(B.cG,A.F(m))
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
return new A.aY(m,B.I,r,!1,!1,A.fN(J.pv(t.j.a(n),p),p),o,!1)
case 6:return new A.aY(m,B.W,!1,!1,q,o,o,!1)
case 7:return new A.aY(m,B.X,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aY(m,B.J,!1,!1,!1,o,A.F(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:120}
A.iH.prototype={
a4(){return"IndexScope."+this.b}}
A.dC.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.tr.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.pv(t.j.a(q),t.N)
s=J.x(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dC(q,s,A.fB(B.cB,A.F(r)))},
$S:121}
A.fJ.prototype={
p(){var s,r=t.N,q=t.X,p=A.v(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gX(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
P(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fJ&&r.b===b.b&&B.ay.Z(r.a,b.a)&&r.c.P(0,b.c)
else s=!0
return s},
gJ(a){return A.c4(A.vn(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.rU.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.pv(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fJ(p,r,t.f.b(q)?A.Ig(q.c9(0,s,t.X)):B.cg)},
$S:122}
A.er.prototype={
ek(a){var s,r,q,p
for(s=this.a.ga7(),s=s.gu(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.F(r,p))continue
q=q.b
r=A.B(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
P(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.er&&A.If(this.a,b.a)
else s=!0
return s},
gJ(a){var s,r,q,p=this.a,o=p.gK(),n=A.R(o,A.n(o).i("o.E"))
B.b.aF(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.q)(n),++r){q=n[r]
o.push(A.c4(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.vn(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.rT.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.v(s,s)
for(o=t.d2.a(o).ga7(),o=o.gu(o);o.k();){q=o.gn()
p=q.a
p.toString
A.F(p)
q=q.b
q.toString
A.F(q)
A.E6(p,q)
r.j(0,p,q)}return new A.er(A.HY(r,s,s))},
$S:123}
A.c7.prototype={
p(){var s,r,q,p=A.l([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.x6.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.aq(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.l([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.E1(q.a(p.gn())))
return new A.c7(o,s,r)},
$S:124}
A.ve.prototype={
a4(){return"MissingRemotePolicy."+this.b}}
A.qz.prototype={}
A.cD.prototype={
gd8(){var s,r,q,p,o=this,n=$.GR()
A.C8(o)
s=n.a.get(o)
if(s==null){s=A.aL(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
fa(a){var s,r,q,p,o,n=this,m=$.GS()
A.C8(n)
s=m.a.get(n)
if(s==null){s=A.v(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.V(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.v(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.l([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o)r.push(q[o].p())
j.j(0,"fields",r)
r=A.l([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.Q
if(l!=null)j.j(0,"attachmentField",l)
l=m.w
if(l!=null)j.j(0,"fts",l.p())
l=A.l([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.q)(k),++o)l.push(k[o].p())
j.j(0,"migrations",l)
return j}}
A.q6.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j="attachmentField",i=this.a,h=i.h(0,"name")
h.toString
A.F(h)
s=i.h(0,"version")
s.toString
A.aq(s)
r=A.l([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.E1(o.a(q.gn())))
q=A.l([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.Iq(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.F(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.Ih(o.a(l))}else l=null
k=A.l([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.aj:i)
while(i.k())k.push(A.Jo(o.a(i.gn())))
return new A.cD(h,s,r,q,n,p,l,k,m,this.b.i("cD<0>"))},
$S(){return this.b.i("cD<0>()")}}
A.n2.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.wN.prototype={
$1(a){return!1},
$S:42}
A.wO.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:12}
A.wP.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.eB)},
$S:44}
A.wQ.prototype={
$1(a){return J.a0(a)},
$S:126}
A.dM.prototype={
a4(){return"MutationAction."+this.b}}
A.fs.prototype={
gaP(){return this.b.a.a},
eE(){var s=this.d
if(s!=null&&s.e){s=this.gaP()
throw A.b(new A.h3('Cannot mutate "'+s+'" through a read-only Tx.'))}},
iq(a){var s=this
if(s.d!=null)return s.ih(B.a0,a)
return s.a.aW(new A.qk(s,a),B.p,t.H)},
nl(a){var s=this
if(s.d!=null)return s.ih(B.a1,a)
return s.a.aW(new A.qn(s,a),B.p,t.H)},
n6(a){var s=this
if(s.d!=null)return s.n7(a)
return s.a.aW(new A.qj(s,a),B.p,t.H)},
nm(a){var s=this
if(s.d!=null)return s.bA(a,B.a1)
return s.a.aW(new A.qm(s,a),B.p,t.H)},
n3(a,b){var s=this
if(s.d!=null)return s.wc(a,b)
return s.a.aW(new A.qg(s,a,b),B.p,t.H)},
n4(a){var s=this
if(s.d!=null)return s.fo(a)
return s.a.aW(new A.qf(s,a),B.p,t.H)},
fo(a){return this.wb(a)},
wb(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$fo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eE()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aP(a,o.i("aP<1,2>")).gu(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cM(m.a,m.b,!0),$async$fo)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aL(t.N)
for(o=new A.bE(a,a.r,a.e,o.i("bE<1>"));o.k();)l.t(0,o.d)
n.a_(new A.a1(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
mr(a){var s=this
if(s.d!=null)return s.ig(B.C,a)
return s.a.aW(new A.qc(s,a),B.p,t.H)},
ng(a){var s=this
if(s.d!=null)return s.ig(B.E,a)
return s.a.aW(new A.ql(s,a),B.p,t.H)},
kr(a){var s=this
if(s.d!=null)return s.dj(a)
return s.a.aW(new A.qh(s,a),B.p,t.H)},
dj(a){return this.wi(a)},
wi(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dj=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eE()
s=2
return A.a(q.dW(a),$async$dj)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cA(n,m,a,!0),$async$dj)
case 3:s=4
return A.a(n.Y(m,"id = ?",[a]),$async$dj)
case 4:l=t.N
o.a_(new A.a1(m,A.at([a],l)))
if(p!=null){l=A.d3(p.gK(),l)
l.G(0,"id")
o.bb(new A.aU(m,a,B.H,B.at,p,null,l))}return A.e(null,r)}})
return A.f($async$dj,r)},
cM(a,b,c){return this.wd(a,b,c)},
wc(a,b){return this.cM(a,b,!1)},
wd(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cM=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eE()
s=3
return A.a(p.c.b.ai("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cM)
case 3:o=e
n=J.L(o)
if(n.gX(o)){m=n.gH(o)
l=A.jy(m)
k=m.h(0,"o_kind")!=null?A.mD(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eK(a,b,l,k,c),$async$cM)
case 6:s=1
break
case 5:s=7
return A.a(p.d0(a,b,c,k,l),$async$cM)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cM,r)},
d0(a,b,c,d,e){return this.pX(a,b,c,d,e)},
pX(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d0=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dW(a),$async$d0)
case 2:m=g
if(m==null)throw A.b(A.Cy("No record "+q.gaP()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cJ(m,p,o)
n.D(0,b)
o=A.v(p,o)
o.j(0,"id",a)
o.D(0,n)
s=3
return A.a(q.aO(B.K,c,m,a,d,e,o),$async$d0)
case 3:return A.e(null,r)}})
return A.f($async$d0,r)},
eK(a,b,c,d,e){return this.qY(a,b,c,d,e)},
qY(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eK=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.aw(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.d0(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.x(i,a7)){q=n.d0(a7,a8,b1,b0,a9)
s=1
break}h=t.N
g=t.X
f=A.cJ(a5,h,g)
f.D(0,a8)
m=f
J.cY(m,"id",a7)
e=new A.a2("")
f=n.b
d=f.a
c=A.Bb(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cJ(m,h,g)
b.G(0,"id")
n.hr(a7,b,a,c)
a0=n.lq(a5,m,B.K)
l=null
b=a0.length===1&&d.gd8().F(0,B.b.gap(a0))
a1=n.a
a2=a1.ay
a3=a1.ch
if(b){a4=d.fa(B.b.gap(a0))
b=a4.a
l=A.m([b,A.Go(d,a4,J.V(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dq(d,J.x(J.V(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.c.b.L(d.a,l,"id = ?",[a7]),$async$eK)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.D(a6)
h=A.GM(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.cx
g===$&&A.u()
b=l
s=8
return A.a(g.bm(B.K,null,a0,n.c.b,a7,m,a5,b0,a,b,a9,f),$async$eK)
case 8:if(!b1){g=n.d
if(g!=null)g.a_(new A.a1(d.a,A.at([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bb(new A.aU(d.a,a7,B.H,B.A,a5,m,A.uH(a0,A.a_(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eK,r)},
aO(a,b,c,d,e,f,g){return this.vZ(a,b,c,d,e,f,g)},
ih(a,b){var s=null
return this.aO(a,!1,s,s,s,s,b)},
ig(a,b){var s=null
return this.aO(a,!1,s,b,s,s,s)},
vX(a,b,c){var s=null
return this.aO(a,b,s,s,s,s,c)},
vY(a,b,c,d,e,f){return this.aO(a,b,c,null,d,e,f)},
vZ(b9,c0,c1,c2,c3,c4,c5){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$aO=A.c(function(c6,c7){if(c6===1){o.push(c7)
s=p}for(;;)switch(s){case 0:b7={}
n.eE()
m=null
b7.a=c1
l=null
b7.b=b7.c=null
i=new A.qe(b7,n,c4,c3)
s=b9===B.a0?3:5
break
case 3:h=A.a6(c5.h(0,"id"))
if(h==null)h=A.i5()
g=$.pt()
if(!g.b.test(h))throw A.b(A.ah('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aO)
case 6:l=n.eH(c5,m)
b9=b7.a==null?B.b7:B.K
s=4
break
case 5:s=b9===B.K?7:9
break
case 7:c2.toString
m=c2
s=10
return A.a(i.$1(m),$async$aO)
case 10:if(b7.a==null)throw A.b(A.Cy("No record "+n.gaP()+"/"+A.r(m)+" to update."))
c5.toString
l=n.eH(c5,m)
s=8
break
case 9:s=b9===B.a1?11:13
break
case 11:h=A.a6(c5.h(0,"id"))
if(h==null)h=A.i5()
g=$.pt()
if(!g.b.test(h))throw A.b(A.ah('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aO)
case 14:g=b7.a
if(g==null){l=n.eH(c5,m)
b9=B.b7}else{l=A.cJ(g,t.N,t.X)
for(g=new A.aP(c5,A.n(c5).i("aP<1,2>")).gu(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.cY(l,e,f.b)}b9=B.K}s=12
break
case 13:c2.toString
m=c2
s=15
return A.a(i.$1(m),$async$aO)
case 15:g=b7.a
if(g==null)throw A.b(A.Cy("No record "+n.gaP()+"/"+A.r(m)+" to archive/restore."))
g=A.cJ(g,t.N,t.X)
g.j(0,"archived",b9===B.C)
l=g
case 12:case 8:case 4:d=new A.a2("")
g=n.b
e=g.a
c=l
b=A.Bb(d,e,c,J.as(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hr(m,l,a,b)
s=b7.a==null?16:18
break
case 16:a0=null
s=17
break
case 18:c=c4==null?b7.c:c4
s=c==null?19:21
break
case 19:c=n.a.cx
c===$&&A.u()
s=22
return A.a(c.bV(n.c.b,e.a,m),$async$aO)
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
c===$&&A.u()
s=29
return A.a(c.eo(n.c.b,e.a,m),$async$aO)
case 29:c=c7
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a5)throw A.b(A.DV("Record "+n.gaP()+"/"+A.r(m)+u.W))
a3=b7.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ai(A.bg(e,a3))
a2=A.ar(B.l.v(B.e.v(a6)).a)
a7=new A.pN(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ay
a8=a3.ch
a9=A.dq(e,J.x(J.V(l,"archived"),!0),a4,a8,c,a2)
b0=n.lq(b7.a,l,b9)
k=null
if(b7.a!=null&&b0.length===1&&e.gd8().F(0,B.b.gap(b0))){b1=e.fa(B.b.gap(b0))
c=b1.a
k=A.m([c,A.Go(e,b1,J.V(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
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
j=A.D(b8)
g=A.GM(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.cx
c===$&&A.u()
a2=m
a3=b7.a
s=39
return A.a(c.bm(b9,a7,b0,n.c.b,a2,l,a3,a1,a,a9,a0,g),$async$aO)
case 39:b3=c7
b4=b3.a
if(b4)b5=B.at
else switch(b9.a){case 2:case 0:case 1:b5=b7.a==null?B.ac:B.A
break
case 3:b5=B.A
break
case 4:b5=B.c2
break
case 5:b5=B.c3
break
default:b5=null}if(b4){g=A.aL(t.N)
c=b7.a
c=J.E((c==null?l:c).gK())
while(c.k()){a2=c.gn()
if(a2!=="id")g.t(0,a2)}b6=g}else if(b9===B.C||b9===B.E)b6=A.at(["archived"],t.N)
else if(b7.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("am<o.E>")
b6=A.d3(new A.am(new A.T(g,c),new A.qd(),a2),a2.i("o.E"))}else b6=A.uH(b0,A.a_(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c){a2=m
a3=b7.a
a4=b4?null:l
g.bb(new A.aU(e.a,a2,B.H,b5,a3,a4,b6))}if(!c0)if(!c)g.a_(new A.a1(e.a,A.at([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aO,r)},
bA(a,b){return this.wl(a,b)},
n7(a){return this.bA(a,B.a0)},
wl(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bA=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eE()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.l([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.q)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a6(a0)
a2=a1?A.i5():a0
a1=$.pt()
if(!a1.b.test(a2))throw A.b(A.ah('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aN(l,new A.a4(a2,a))}if(!c){a3=A.v(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.al(a3,a3.$ti.i("al<2>")).bO(0,new A.qi())}else a5=!1
s=c3===B.a0&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dU(m,l),$async$bA)
case 9:k=A.aL(t.N)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){j=d[b]
i=null
h=j
i=h.a
J.aN(k,i)}g.a_(new A.a1(e,k))
s=1
break
p=2
s=8
break
case 6:p=5
c0=o.pop()
if(!(A.D(c0) instanceof A.hx))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.v(k,t.G)
j=n.a,d=j.ay,j=j.ch,a1=t.s,a8=0
case 10:if(!(a8<J.as(l))){s=12
break}a9=a8+2000
b0=B.c.bP(a9,0,J.as(l))
a4=A.l([],a1)
for(b1=J.HF(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.q)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.cj(e,"id IN ("+B.b.B(A.ab(a4.length,"?",!1,k),", ")+")",a4),$async$bA)
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
case 12:b3=A.v(k,t.nw)
b4=A.v(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.R(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.T(b5,a8,B.c.bP(a9,0,j))
b7=B.b.B(A.ab(b6.length,"?",!1,k),", ")
j=A.l([e],a1)
B.b.D(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.cj("lp_sync_row",f,j),$async$bA)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.F(b1),A.jy(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.cj("lp_outbox",f,j),$async$bA)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.F(d),A.mD(f))
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
s=b8.F(0,a2)?28:30
break
case 28:a1=A.dH(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.vX(c3,!0,a1),$async$bA)
case 31:s=29
break
case 30:a1=A.dH(null,null,k,d)
a1.D(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.vY(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bA)
case 32:b8.t(0,a2)
case 29:case 26:j.length===f||(0,A.q)(j),++b
s=25
break
case 27:g.a_(new A.a1(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bA,r)},
dU(a,b){return this.ri(a,b)},
ri(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dU=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.iu?3:4
break
case 3:s=5
return A.a(n.dV(a6,a7),$async$dU)
case 5:s=1
break
case 4:m=n.a.CW.$0()
a=n.d
a0=a==null?null:a.a.a$.b.d!=null
l=a0===!0
k=A.l([],t.jO)
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
return A.a(n.eA(a6,a4,h,g,m),$async$dU)
case 13:e=a9
if(l)J.aN(k,new A.a4(h,e));++j
case 11:a7.length===a0||(0,A.q)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.D(a5) instanceof A.c6?14:16
break
case 14:d=A.l([],t.s)
for(c=0;c<j;++c)J.aN(d,a7[c].a)
b=d
s=17
return A.a(n.d_(a6,b),$async$dU)
case 17:throw A.b(new A.hx())
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
a.bb(new A.aU(a0,a3.a,B.H,B.ac,null,e,J.DG(e.gK(),new A.qb()).fG(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dU,r)},
dV(a,b){return this.rj(a,b)},
rj(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dV=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.CW.$0()
d1=o.c.b
d2=t.s
d3=A.l(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.q)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.i9(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.i9(B.Z)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.i9(B.Y)+") VALUES "
j=new A.qa()
b1=new A.a2("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.l([],t.jO):null
i=0,a9=b3==null,b4=c9.ay,b5=c9.ch,b6=c8.b
case 2:if(!(b7=i,b8=d6.length,b7<b8)){s=4
break}h=B.x.bP(i+500,0,b8)
g=h-i
f=[]
e=[]
d=[]
for(b9=i;b9<h;++b9){c0=d6[b9]
c1=c0.a
c2=c0.b
c3=b2?o.eH(c2,c1):c2
b1.a=""
c4=A.Bb(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hr(c1,c3,c5,c4)
A.LU(f,c8,J.x(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.cx
b7===$&&A.u()
c6=b7.fM()
A.Gd(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.Ge(d,B.a6,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a4(c1,c3))}c=!1
b=!1
q=6
b7=d1.cl(A.r(m)+A.r(j.$2(J.as(n),g)))
if(b7.r||b7.b.r)A.t(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eB(new A.bO(f))
b7.h5()
c=!0
b7=d1.cl(A.r(l)+A.r(j.$2(11,g)))
if(b7.r||b7.b.r)A.t(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eB(new A.bO(e))
b7.h5()
b=!0
b7=d1.cl(A.r(k)+A.r(j.$2(16,g)))
if(b7.r||b7.b.r)A.t(A.A(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eB(new A.bO(d))
b7.h5()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.D(d4) instanceof A.c6?9:11
break
case 9:a=A.l([],d2)
for(a0=0;a0<i;++a0)J.aN(a,d6[a0].a)
a1=a
s=12
return A.a(o.d_(d5,a1),$async$dV)
case 12:s=c||b?13:14
break
case 13:a2=A.l([],d2)
for(a3=i;a3<h;++a3)J.aN(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.ab(J.as(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.Y(d3,"id IN ("+A.r(a5)+")",a4),$async$dV)
case 17:case 16:s=b?18:19
break
case 18:a6=A.l([d3],d2)
J.DB(a6,a4)
a7=a6
s=20
return A.a(d5.Y("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dV)
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
case 4:if(b2)for(a=b3.length,b0=0;b0<b3.length;b3.length===a||(0,A.q)(b3),++b0){a2=b3[b0]
c3=a2.b
a8.toString
a8.bb(new A.aU(d3,a2.a,B.H,B.ac,null,c3,J.DG(c3.gK(),new A.q9()).fG(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dV,r)},
eA(a,b,c,d,e){return this.oZ(a,b,c,d,e)},
oZ(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$eA=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eH(b1,b0)
a3=new A.a2("")
a4=A.Bb(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hr(b0,a2,a6,a4)
a5=n.a
m=A.dq(a1,J.x(a2.h(0,"archived"),!0),a5.ay,a5.ch,b0,a2)
a5=a5.cx
a5===$&&A.u()
e=a5.fM()
a5=a1.a
l=A.Gg("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.Me('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dJ(new A.T(d,c),new A.q7(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.ab(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=a9.cl(f)
d=m
a=A.n(d).i("al<2>")
d=A.R(new A.al(d,a),a.i("o.E"))
c.e8(new A.bO(d))
j=!0
a9.cl("INSERT INTO lp_outbox ("+A.i9(B.Z)+") VALUES ("+B.b.B(A.ab(11,"?",!1,b),", ")+")").e8(new A.bO(A.GG(l,B.Z)))
i=!0
a9.cl("INSERT INTO lp_sync_row ("+A.i9(B.Y)+") VALUES ("+B.b.B(A.ab(16,"?",!1,b),", ")+")").e8(new A.bO(A.GG(k,B.Y)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.Y(a5,"id = ?",[b0]),$async$eA)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.Y("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$eA)
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
return A.f($async$eA,r)},
d_(a,b){return this.pH(a,b)},
pH(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$d_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.ab(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.Y(m,"id IN ("+o+")",b),$async$d_)
case 3:m=A.l([m],t.s)
B.b.D(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.Y("lp_outbox",n,m),$async$d_)
case 4:s=5
return A.a(a.Y("lp_sync_row",n,m),$async$d_)
case 5:case 1:return A.e(q,r)}})
return A.f($async$d_,r)},
eH(a,b){var s,r,q,p=A.v(t.N,t.X)
for(s=a.ga7(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.n8("archived",new A.q8())
return p},
lq(a,b,c){var s,r,q,p,o
if(a==null)return B.cN
s=t.N
r=A.aL(s)
s=A.d3(a.gK(),s)
s.D(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hJ(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.r.Z(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.R(r,r.$ti.c)
B.b.aF(o)
return o},
dW(a){return this.rn(a)},
rn(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ai('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dW)
case 3:m=c
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}o=p.a
q=A.cd(n,l.gH(m),o.ay,o.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dW,r)},
hh(a){return this.r4(a)},
r4(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ai('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hh)
case 3:j=c
k=J.L(j)
if(k.gE(j)){q=B.dl
s=1
break}o=k.gH(j)
k=p.a
n=A.cd(l,o,k.ay,k.ch)
m=o.h(0,"s_sync_state")!=null?A.jy(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.f3(n,m,o.h(0,"o_kind")!=null?A.mD(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hh,r)},
bZ(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$bZ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:f=p.d==null
if(f&&p.b.e.a.I(a)){q=p.b.e.bZ(a)
s=1
break}o=p.b
n=o.a
m=n.b
l=n.a
k=p.c.b
s=m>1?3:5
break
case 3:s=6
return A.a(k.ai("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bZ)
case 6:s=4
break
case 5:s=7
return A.a(k.ai('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bZ)
case 7:case 4:j=c
l=J.L(j)
if(l.gE(j)){if(f)o.e.kN(a,null)
q=null
s=1
break}i=l.gH(j)
l=p.a
h=A.cd(n,i,l.ay,l.ch)
g=A.be(i.h(0,"lp_schema_ver"))
if(g==null)g=1
if(g<m)h=A.LV(n,h,g,m)
if(f)o.e.kN(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bZ,r)},
hr(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.ah('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.Dh(p,n)
if(m!=null)throw A.b(A.ah(A.HT(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.ah("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.qk.prototype={
$1(a){return a.by(this.a.b.a.a).iq(this.b)},
$S:4}
A.qn.prototype={
$1(a){return a.by(this.a.b.a.a).nl(this.b)},
$S:4}
A.qj.prototype={
$1(a){return a.by(this.a.b.a.a).n6(this.b)},
$S:4}
A.qm.prototype={
$1(a){return a.by(this.a.b.a.a).nm(this.b)},
$S:4}
A.qg.prototype={
$1(a){return a.by(this.a.b.a.a).n3(this.b,this.c)},
$S:4}
A.qf.prototype={
$1(a){return a.by(this.a.b.a.a).n4(this.b)},
$S:4}
A.qc.prototype={
$1(a){return a.by(this.a.b.a.a).mr(this.b)},
$S:4}
A.ql.prototype={
$1(a){return a.by(this.a.b.a.a).ng(this.b)},
$S:4}
A.qh.prototype={
$1(a){return a.by(this.a.b.a.a).kr(this.b)},
$S:4}
A.qe.prototype={
nt(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.hh(a),$async$$1)
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
$1(a){return this.nt(a)},
$S:127}
A.qd.prototype={
$1(a){return a!=="id"},
$S:10}
A.qi.prototype={
$1(a){return a>1},
$S:128}
A.qb.prototype={
$1(a){return a!=="id"},
$S:10}
A.qa.prototype={
$2(a,b){var s=t.N
return B.b.B(A.ab(b,"("+B.b.B(A.ab(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:129}
A.q9.prototype={
$1(a){return a!=="id"},
$S:10}
A.q7.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.q8.prototype={
$0(){return!1},
$S:45}
A.hx.prototype={$iG:1}
A.of.prototype={}
A.pA.prototype={
aV(a,b){var s=this.a.V(new A.pB(a,b),b)
this.a=s.bq(new A.pC(b),new A.pD(),t.H)
return s}}
A.pB.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("y<0>(~)")}}
A.pC.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.pD.prototype={
$2(a,b){},
$S:7}
A.bi.prototype={
gne(){var s=this.e
return s.gm(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.qA.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.F(d)
s=e.h(0,"record_id")
s.toString
A.F(s)
r=A.Bj(e.h(0,l),l,k)
q=A.Bj(e.h(0,j),j,k)
p=A.Bj(e.h(0,i),i,k)
o=A.Gm(e.h(0,h),h,k)
n=A.Gm(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.aq(m)
return new A.bi(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.Bj(e.h(0,f),f,k):null)},
$S:131}
A.qB.prototype={
fh(a){return this.vK(a)},
vK(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$fh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.u()
m=m.gbn()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.wm("lp_conflicts","detected_at ASC",n,o),$async$fh)
case 3:o=l.c_(c,A.Mk(),t.n8)
m=A.R(o,o.$ti.i("Z.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fh,r)},
dv(a,b){return this.o3(a,b)},
o3(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.u()
s=3
return A.a(n.gbn().b.aJ("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dv)
case 3:o=d
n=J.L(o)
if(n.gE(o)){q=null
s=1
break}q=A.C3(n.gH(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dv,r)},
x5(a){var s={},r=A.CT()
s.a=null
r.sk7(A.dQ(new A.qE(s,r),new A.qF(s,this,a,new A.qG(this,r,a)),t.ba))
return r.bu().gcT()},
eq(a,b,c){return this.wK(a,b,c)},
wK(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(c)
s=2
return A.a(p.a2(new A.qC(q,c,a,o.a,o,b),t.P),$async$eq)
case 2:return A.e(null,r)}})
return A.f($async$eq,r)},
eX(a,b){return this.tv(a,b)},
tv(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dv(a,b),$async$eX)
case 2:p=d
if(p==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eq(b,p.d,a),$async$eX)
case 3:return A.e(null,r)}})
return A.f($async$eX,r)},
e1(a,b){return this.tw(a,b)},
tw(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$e1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dv(a,b),$async$e1)
case 3:o=d
if(o==null)throw A.b(A.A("No conflict found for "+a+"/"+b))
s=o.gne()?4:5
break
case 4:s=6
return A.a(p.a.by(a).kr(b),$async$e1)
case 6:s=1
break
case 5:s=7
return A.a(p.eq(b,o.e,a),$async$e1)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e1,r)}}
A.qG.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bu().gi8()){s=1
break}p=4
s=7
return A.a(n.a.fh(n.c),$async$$0)
case 7:m=b
if(!i.bu().gi8())J.aN(i.bu(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.D(h)
k=A.ad(h)
if(!i.bu().gi8())i.bu().bx(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.qF.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b1(p,A.n(p).i("b1<1>")).aN(new A.qD(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qD.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:38}
A.qE.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.C()
s=2
return A.a(p instanceof A.w?p:A.bx(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bu().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qC.prototype={
$1(a){return this.nu(a)},
nu(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aJ("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.L(a3)
if(a4.gE(a3))throw A.b(A.A("No conflict found for "+a1+"/"+a2))
o=A.C3(a4.gH(a3))
n=o.gne()
m=n?null:A.ai(o.e)
l=n?"":A.ar(B.l.v(B.e.v(A.ai(A.bg(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aJ(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.bA(a8)?4:5
break
case 4:s=7
return A.a(a0.Y("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.Y("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.Y("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a_(new A.a1(a1,A.at([a2],a4)))
a6.a_(new A.a1("lp_conflicts",A.at([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aJ("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.L(k)
if(i.gX(k)){h=A.a6(J.V(i.gH(k),"base_updated"))
i=h==null?A.a6(J.V(i.gH(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.Y("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cJ(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dq(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bI(n?B.j:o.e,g)
d=A.R(a4,A.n(a4).c)
B.b.aF(d)
c=A.ai(A.bg(e,g))
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
a4===$&&A.u()
s=18
return A.a(a0.aC(0,"lp_outbox",A.Gg(l,j,b,e,h,a4.fM(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a_(new A.a1(a1,A.at([a2],i)))
a6.a_(new A.a1("lp_conflicts",A.at([a2],i)))
a4=o.d
a=A.bI(a4,g)
a.G(0,"id")
a6.bb(new A.aU(a1,a2,B.ad,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.nm.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dQ(null,null,t.n6)
n.ay=A.dQ(null,null,t.ic)}n.z=!0
s=3
return A.a(n.aM(B.dv),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.im(),$async$az)
case 8:if(!(n.z&&m===n.db)){s=1
break}k=n.w
k===$&&A.u()
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
n.fr=new A.b1(l,A.n(l).i("b1<1>")).aN(n.gvo())
l=n.b.ay
n.fx=new A.b1(l,A.n(l).i("b1<1>")).aN(n.gvm())
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
case 12:n.fy=A.CJ(B.S,new A.xs(n))
s=14
return A.a(n.aM(n.dH()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.d4(),$async$az)
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
return A.a(o instanceof A.w?o:A.bx(o,n),$async$aG)
case 7:o=p.fx
o=o==null?null:o.C()
s=8
return A.a(o instanceof A.w?o:A.bx(o,n),$async$aG)
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
dH(){if(this.at)return B.bk
if(this.Q)return B.bi
if(this.as)return B.aD
return B.bj},
aM(a){return this.t6(a)},
t6(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.pP(),$async$aM)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aM,r)},
pP(){return this.p2=this.p2.V(new A.xk(this),t.H)},
h1(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$h1=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=n.z
if(!g){s=1
break}m=0
l=0
k=0
j=0
p=4
g=n.e
g===$&&A.u()
s=7
return A.a(g.hI(),$async$h1)
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
return A.f($async$h1,r)},
vp(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.rI(B.af)},
vn(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dy.I(s))return
r=a.c
if(r!=null&&a.b===B.aa){q.p1.push("fast:"+s)
q.dx=q.dx.V(new A.xq(q,r),t.H)
return}q.p1.push("pull:"+s)
q.ho(B.af,A.l([s],t.s))},
h6(a){return this.pY(a)},
pY(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h6=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.ho(B.af,A.l([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.u()
s=7
return A.a(l.hT(a),$async$h6)
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
break}if(!m)n.ho(B.af,A.l([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h6,r)},
vx(){if(!this.z)return
this.p1.push("cycle")
this.d4()},
ho(a,b){var s=this,r=s.go
if(r!=null)r.C()
if(b==null)s.k2=!0
else s.k3.D(0,b)
s.go=A.cQ(a,new A.xp(s))},
rI(a){return this.ho(a,null)},
rH(a){var s=this.id
if(s!=null)s.C()
this.id=A.cQ(B.D,new A.xo(this,a))},
jq(){this.as=!0
this.aM(B.aD)
A.iD(this.d,t.H)},
eh(){var s=0,r=A.h(t.H),q,p=this,o
var $async$eh=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.cx
o===$&&A.u()
s=3
return A.a(o.wI(),$async$eh)
case 3:s=4
return A.a(p.aM(p.dH()),$async$eh)
case 4:p.p1.push("cycle")
s=5
return A.a(p.d4(),$async$eh)
case 5:case 1:return A.e(q,r)}})
return A.f($async$eh,r)},
fR(a){return this.of(a)},
of(a){var s=0,r=A.h(t.H),q=this,p
var $async$fR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.C()
q.k1=A.cQ(B.av,new A.xr(q))
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
return A.a(p.aM(p.dH()),$async$b1)
case 3:p.p1.push("cycle")
s=4
return A.a(p.d4(),$async$b1)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b1,r)},
jA(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.C()}s=t.fD
r=q.k4.V(new A.xl(q,a),s)
q.k4=r.bq(new A.xm(),new A.xn(),s)
return r},
d4(){return this.jA(null)},
b6(a){return this.pM(a)},
pM(b8){var s=0,r=A.h(t.fD),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b6=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aM(n.dH()),$async$b6)
case 5:q=B.O
s=1
break
case 4:b3=t.N
a4=t.S
m=A.v(b3,a4)
l=A.v(b3,a4)
k=!1
j=!1
i=A.l([],t.s)
s=6
return A.a(n.aM(B.dw),$async$b6)
case 6:b3=b8==null
if(b3){a4=n.a.dy
a5=A.n(a4).i("T<1>")
a6=A.R(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.u()
s=14
return A.a(a5.di(h),$async$b6)
case 14:g=c0
J.cY(m,h,g.b)
if(g.f&&g.b>0)J.aN(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.D(b4)
if(a5 instanceof A.bM){n.jq()
s=9
break}else if(a5 instanceof A.bo){f=a5
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
return A.a(n.aM(B.aD),$async$b6)
case 17:q=n.ok=new A.bp(m,B.al,0,0,0,0,!0)
s=1
break
case 16:s=b3?18:19
break
case 18:p=21
e=n.cy
n.cy=!1
b3=n.r
b3===$&&A.u()
s=24
return A.a(b3.dC(e),$async$b6)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.V(l,c.a)
if(a5==null)a5=0
J.cY(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.D(b5)
if(b3 instanceof A.bo){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aM(B.dx),$async$b6)
case 25:a=B.a3
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.u()
s=33
return A.a(b3.fu(),$async$b6)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b0("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b6)
case 36:a0=c0
if(J.ec(a0)&&typeof J.V(J.bY(a0),"last_error")=="string"){b3=J.V(J.bY(a0),"last_error")
b3.toString
n.ch=A.F(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.D(b6)
if(b3 instanceof A.bM)n.jq()
else if(b3 instanceof A.bo){a1=b3
k=!0
n.ch=a1.a}else throw b6
s=32
break
case 29:s=2
break
case 32:case 27:p=38
b3=n.x
b3===$&&A.u()
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
break}if(J.as(i)!==0)n.rH(i)
a9=k||a.f
b0=new A.aO(A.lt(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dH()
s=42
return A.a(n.aM(a9&&b1===B.bj?B.dy:b1),$async$b6)
case 42:q=n.ok=new A.bp(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b6,r)}}
A.xs.prototype={
$1(a){return this.a.vx()},
$S:40}
A.xk.prototype={
$1(a){return this.a.h1()},
$S:41}
A.xq.prototype={
$1(a){return this.a.h6(this.b)},
$S:41}
A.xp.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.R(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jn()}if(r||p.length===0)s.d4()
else s.jA(p)},
$S:0}
A.xo.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jA(this.b)},
$S:0}
A.xr.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aM(p.dH()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.d4(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.xl.prototype={
$1(a){return this.a.b6(this.b)},
$S:135}
A.xm.prototype={
$1(a){return B.O},
$S:136}
A.xn.prototype={
$1(a){return B.O},
$S:137}
A.d4.prototype={
l(a){return"MapFailure: "+this.a},
$iG:1}
A.eA.prototype={}
A.Bf.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.Bg.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.v0.prototype={}
A.dK.prototype={}
A.ml.prototype={}
A.A3.prototype={}
A.A1.prototype={}
A.yk.prototype={}
A.v7.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.v6(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:139}
A.v1.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.v2.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.v3.prototype={
$1(a){return typeof a=="string"},
$S:22}
A.v4.prototype={
$1(a){return a instanceof A.w?a:A.ba(a,t.X)},
$S:140}
A.v5.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hJ(s,s.r,A.n(s).c),r=this.b,q=J.L(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:141}
A.vp.prototype={
f4(a){return this.uJ(a)},
uJ(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f4=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.CW.$0()
e=e.r
s=3
return A.a(e.wo("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f4)
case 3:o=c
n=t.ox
m=A.l([],n)
for(l=J.E(o);l.k();)m.push(A.IT(l.gn()))
l=A.aL(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.q)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.kz(e,l),$async$f4)
case 4:h=c
g=A.l([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.q)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.F(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f4,r)},
n0(a){return this.a.a2(new A.vr(a),t.H)},
vU(a,b,c,d){return this.a.a2(new A.vs(c,d,b,a),t.H)}}
A.vr.prototype={
$1(a){return this.nI(a)},
nI(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vs.prototype={
$1(a){return this.nJ(a)},
nJ(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.pN.prototype={}
A.iS.prototype={}
A.jk.prototype={}
A.vu.prototype={
fM(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cJ(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
eo(a,b,c){return this.wx(a,b,c)},
wx(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$eo=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aJ("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$eo)
case 3:p=e
o=J.L(p)
q=o.gE(p)?null:A.mD(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eo,r)},
bV(a,b,c){return this.wz(a,b,c)},
wz(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bV=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aJ("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bV)
case 3:p=e
o=J.L(p)
q=o.gE(p)?null:A.jy(o.gH(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
bm(a,b,c,d,e,f,g,h,i,j,k,l){return this.tG(a,b,c,d,e,f,g,h,i,j,k,l)},
tG(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bm=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a5)throw A.b(A.DV("Record "+a2+"/"+a9+u.W))
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
return A.a(a8.Y("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bm)
case 5:s=6
return A.a(a8.Y("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bm)
case 6:s=7
return A.a(p.hs(a8,a2,a9),$async$bm)
case 7:s=8
return A.a(a8.Y(a2,"id = ?",[a9]),$async$bm)
case 8:q=B.cU
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
if(i!=null&&g==null)throw A.b(A.hh("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
l=t.N
f=A.aL(l)
e=a4?null:b2.r
if(e!=null)f.D(0,e)
f.D(0,a7)
d=A.R(f,f.$ti.c)
B.b.aF(d)
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
return A.a(a8.aE("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.Gy(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bm)
case 12:s=10
break
case 11:s=13
return A.a(a8.aE('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bm)
case 13:case 10:f=A.l(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.D(f,B.cH)
if(o)B.b.D(f,B.cv)
s=a3?14:16
break
case 14:a3=A.i9(B.Y)
l=B.b.B(A.ab(16,"?",!1,l),", ")
s=17
return A.a(a8.aE("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.GK(B.a6,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bm)
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
case 18:case 15:q=new A.iS(!1)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bm,r)},
hs(a,b,c){return this.te(a,b,c)},
te(a,b,c){var s=0,r=A.h(t.H)
var $async$hs=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cA(a,b,c,!1),$async$hs)
case 2:return A.e(null,r)}})
return A.f($async$hs,r)},
f5(a,b){return this.uK(a,b)},
uK(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a2("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.R([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ai("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f5)
case 3:o=d
f=J.L(o)
if(f.gE(o)){q=B.cL
s=1
break}e=t.my
n=A.l([],e)
for(f=f.gu(o);f.k();)n.push(A.mD(f.gn()))
f=A.aL(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.q)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.kz(g,f),$async$f5)
case 4:j=d
i=A.l([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.q)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.F(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f5,r)},
kO(a){if(a.length===0)return A.ba(null,t.H)
return this.a.a2(new A.vA(this,a),t.H)},
aI(a,b){return this.rU(a,b)},
rU(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
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
n=J.L(o)
s=!(n.gX(o)&&!J.x(J.V(n.gH(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aJ(a,1,"id = ?",[a1]),$async$aI)
case 8:m=a9
n=J.L(m)
l=n.gX(m)?A.cd(a3,n.gH(m),a2.ay,a2.ch):null
s=9
return A.a(b.L(a,A.dq(a3,J.x(a5.h(0,"archived"),!0),a2.ay,a2.ch,a1,a5),"id = ?",[a1]),$async$aI)
case 9:a6.a_(new A.a1(a0,A.at([a1],t.N)))
k=A.bI(l==null?B.j:l,a5)
k.G(0,"id")
a6.bb(new A.aU(a0,a1,B.ad,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aJ(a,1,"id = ?",[a1]),$async$aI)
case 10:j=a9
a5=J.L(j)
s=a5.gE(j)?11:12
break
case 11:s=13
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 13:s=14
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aI)
case 14:a6.a_(new A.a1(a0,A.at([a1],t.N)))
s=1
break
case 12:n=a2.ay
a2=a2.ch
i=A.cd(a3,a5.gH(j),n,a2)
h=A.ar(B.l.v(B.e.v(A.ai(A.bg(a3,i)))).a)
a5=a7.b
g=A.ar(B.l.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 18:s=19
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aI)
case 19:a6.a_(new A.a1(a0,A.at([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aw(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bl(d,a5,f):A.v(a5,f)
s=23
return A.a(b.L(a,A.dq(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aI)
case 23:s=24
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aI)
case 24:s=25
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aI)
case 25:a6.a_(new A.a1(a0,A.at([a1],a5)))
k=A.bI(i,c)
k.G(0,"id")
a6.bb(new A.aU(a0,a1,B.ad,B.A,i,c,k))
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
d1(a,b,c,d,e){return this.qy(a,b,c,d,e)},
qy(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d1=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d1)
case 2:s=3
return A.a(a.L(q.a.au(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d1)
case 3:return A.e(null,r)}})
return A.f($async$d1,r)},
wA(a,b,c,d,e){return this.a.a2(new A.vy(c,e,d,B.G,a,b),t.H)},
n_(a,b,c,d,e,f){return this.a.a2(new A.vx(this,c,f,b,a,d,e),t.H)},
fj(a,b,c,d,e){return this.n_(a,b,c,d,B.ao,e)},
mZ(a,b,c){return this.a.a2(new A.vw(a,c,b),t.H)},
wI(){return this.a.a2(new A.vz(null),t.S)},
eY(a,b,c,d,e,f,g){return this.tD(a,b,c,d,e,f,g)},
tD(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$eY=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$eY)
case 2:p=A.v(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$eY)
case 3:return A.e(null,r)}})
return A.f($async$eY,r)}}
A.vA.prototype={
$1(a){return this.nO(a)},
nO(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
A.vy.prototype={
$1(a){return this.nM(a)},
nM(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vx.prototype={
$1(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
A.vw.prototype={
$1(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vz.prototype={
$1(a){return this.nN(a)},
nN(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.l(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:142}
A.ed.prototype={
a4(){return"ApplyResult."+this.b}}
A.mO.prototype={}
A.wb.prototype={
di(a){return this.wh(a)},
wh(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$di=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.ir(b4),$async$di)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.Hk().ea(n)
if(m==null)A.t(A.aR('Bad timestamp "'+n+'"'))
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
if(i<1||i>12||g>23||f>59||e>59)A.t(A.aR('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.C4(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.w2(k))A.t(A.aR('Bad timestamp "'+n+'"'))
o=A.MG(A.C4(j,i,h,g,f,e,d).iU(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iw(B.c.bP(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.z
a4===$&&A.u()
s=6
return A.a(a4.fi(b4,null,a2,o,null,b),$async$di)
case 6:a5=b6
a4=J.L(a5)
if(a4.gE(a5)){s=5
break}++a.ax
a6=p.qA(a5)
a7=k.h(0,b4)
if(a7==null)A.t(A.A(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.Do(a7.a,a5),$async$di)
case 8:s=7
return A.a(b0.aV(new b1.wj(b2,p,b3,b6,a6),l),$async$di)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mO(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$di,r)},
mh(a,b){var s=B.a.a0(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a0(a.a,b.b)<=0},
t7(a,b){var s=B.a.a0(a.c,b.c)
if(s!==0)return s>0
return B.a.a0(a.a,b.a)>0},
qA(a){var s,r,q,p=J.aG(a),o=p.gH(a)
for(p=p.bi(a,1),s=p.$ti,p=new A.ao(p,p.gm(0),s.i("ao<Z.E>")),s=s.i("Z.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.t7(q,o))o=q}return o},
hT(a){return this.uY(a)},
uY(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hT=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aV(new A.wd(o,p,a),t.P),$async$hT)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)},
dc(a,b){return this.v0(a,b)},
v0(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dc=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bF(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dy,e=n.b,d=A.a_(j),c=d.c,d=d.i("ct<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.ct(j,0,200,d)
a2.iP(j,0,200,c)
a3=a2.cO(0)
a4=a3.length
b&1&&A.H(j,18)
A.bd(0,a4,j.length)
j.splice(0,a4)
m=A.l([],a)
a5=A.l([],a0)
a2=a3.length,a6=0
case 5:if(!(a6<a3.length)){s=7
break}l=a3[a6]
k=null
p=9
a7=e.z
a7===$&&A.u()
s=12
return A.a(a7.c_(l),$async$dc)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.D(b1)
if(a7 instanceof A.cl){J.aN(m,l)
s=6
break}else if(a7 instanceof A.bM)throw b1
else if(a7 instanceof A.bo){s=6
break}else throw b1
s=11
break
case 8:s=2
break
case 11:if(k==null){J.aN(m,l)
s=6
break}a5.push(k)
case 6:a3.length===a2||(0,A.q)(a3),++a6
s=5
break
case 7:s=J.as(m)!==0?13:14
break
case 13:s=15
return A.a(n.fl(b2,m),$async$dc)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.t(A.A(a1))
b0=a9.a
a2=A.l([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.q)(a5),++a6)a2.push(A.Dp(b0,a5[a6]))
s=16
return A.a(i.aV(new A.wf(n,a2,b2,b0),h),$async$dc)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dc,r)},
dR(a,b,c,d){return this.r2(a,b,c,d)},
r2(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dR=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.v(c,t.nw)
a=A.v(c,t.G)
o=p.a,n=o.ay,m=o.ch,o=o.dy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.T(a4,k,B.c.bP(i,0,j))
g=B.b.B(A.ab(h.length,"?",!1,c),", ")
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
b.j(0,A.F(e),A.jy(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.t(A.A(l))
a0=J
s=9
return A.a(a1.cj(d.a.a,"id IN ("+g+")",h),$async$dR)
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
case 5:q=new A.a4(b,a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dR,r)},
mq(a,b,c,d,e){return this.a5(a,b,A.Dp(this.a.au(b).a,c),null,!1,d,e)},
tI(a,b,c){return this.mq(a,b,c,null,!1)},
a5(a,b,c,d,e,f,g){return this.tH(a,b,c,d,e,f,g)},
mp(a,b,c){return this.a5(a,b,c,null,!1,null,!1)},
tH(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return A.a(n.bK(a4,a7,b2,a8,a9),$async$a5)
case 5:q=B.a8
s=1
break
case 4:a9=b3.b
a9.toString
j=A.bg(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bK(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a5)
case 8:q=B.a8
s=1
break
case 7:g=a8.a
f=$.pt()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bK(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a5)
case 11:q=B.a8
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.cx
g===$&&A.u()
s=15
return A.a(g.bV(a4,b2,a8.a),$async$a5)
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
g=J.L(c)
d=g.gE(c)?null:A.cd(a7,g.gH(c),a5.ay,a5.ch)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.dh(a4,a8.a,a8.e,b2),$async$a5)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.Hz(a4,a6.a,A.dq(a7,J.x(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9)),$async$a5)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.d6(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 26:b1.a_(new A.a1(b2,A.at([a8.a],t.N)))
b=A.bI(B.j,a9)
b.G(0,"id")
b1.bb(new A.aU(b2,a8.a,B.au,B.ac,null,a9,b))
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
return A.a(a4.L(a6.a,A.dq(a7,J.x(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9),"id = ?",[a8.a]),$async$a5)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.d6(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 33:b1.a_(new A.a1(b2,A.at([a8.a],t.N)))
b=A.bI(d,a9)
b.G(0,"id")
b1.bb(new A.aU(b2,a8.a,B.au,B.A,d,a9,b))
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
case 40:a0=A.bg(a7,d)
s=A.ai(a0)===i?42:43
break
case 42:s=44
return A.a(a4.Y("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a5)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.d6(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a5)
case 45:b1.a_(new A.a1(b2,A.at([a8.a],t.N)))
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
a5=A.D(b0)
s=a5 instanceof A.d4?50:52
break
case 50:k=a5
s=53
return A.a(n.bK(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a5)
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
a9=A.Gw(l,a0,new A.ml(null,B.a_,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bx(a9,t.r),$async$a5)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eQ(a4,b2,a8,a7,m,a0,l,a2),$async$a5)
case 57:s=58
return A.a(n.c7(b1,b2,a8.a,a8.c,!1),$async$a5)
case 58:a5=t.N
b1.a_(new A.a1(b2,A.at([a8.a],a5)))
b1.a_(new A.a1("lp_conflicts",A.at([a8.a],a5)))
q=B.bv
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dq(a7,J.x(a3.h(0,"archived"),!0),a5.ay,a5.ch,a9,a3),"id = ?",[a8.a]),$async$a5)
case 59:a5=a5.cx
a5===$&&A.u()
s=60
return A.a(a5.eY(a4,b2,a8.a,h,i,a8.c,A.ai(a3)),$async$a5)
case 60:s=61
return A.a(n.t4(b1,b2,a8.a,a8.c),$async$a5)
case 61:b1.a_(new A.a1(b2,A.at([a8.a],t.N)))
b=A.bI(d,a3)
b.G(0,"id")
b1.bb(new A.aU(b2,a8.a,B.ad,B.A,d,a3,b))
q=B.a7
s=1
break
case 35:q=B.a9
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a5,r)},
eQ(a,b,c,d,e,f,g,h){return this.rr(a,b,c,d,e,f,g,h)},
rr(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eQ=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bg(d,A.fg(d,c))
k=A.bI(g,f)
j=A.R(k,A.n(k).c)
B.b.aF(j)
k=A.bI(g,l)
p=A.R(k,A.n(k).c)
B.b.aF(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ai(g)
n=t.N
m=t.X
s=2
return A.a(a.cd(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ai(f),"remote_json",A.ai(l),"dirty_local",B.h.a6(j,null),"dirty_remote",B.h.a6(p,null),"detected_at",q.c.ay.$0()],n,m),B.R),$async$eQ)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(l),"base_hash",A.ar(B.l.v(B.e.v(A.ai(A.bg(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eQ)
case 3:return A.e(null,r)}})
return A.f($async$eQ,r)},
bK(a,b,c,d,e){return this.rk(a,b,c,d,e)},
rk(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bK=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a6(d.d,null)}catch(a1){o=t.N
e=B.h.a6(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aC(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bK)
case 2:j=q.a.cx
j===$&&A.u()
s=3
return A.a(j.bV(a,c,m),$async$bK)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.M(o.mF(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aC(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bK)
case 7:s=5
break
case 6:s=8
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bK)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bK,r)},
d6(a,b,c,d,e,f,g,h){return this.td(a,b,c,d,e,f,g,!0)},
td(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$d6=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:p=q.a.au(b)
o=A.v(t.N,t.X)
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
return A.a(a.aC(0,"lp_sync_row",o),$async$d6)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$d6)
case 6:case 3:return A.e(null,r)}})
return A.f($async$d6,r)},
c7(a,b,c,d,e){return this.t5(a,b,c,d,e)},
t4(a,b,c,d){return this.c7(a,b,c,d,!0)},
t5(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c7=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.v(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c7)
case 2:s=3
return A.a(p.L(q.a.au(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c7)
case 3:if(g>0)a.a_(new A.a1(b,A.at([c],o)))
return A.e(null,r)}})
return A.f($async$c7,r)},
fl(a,b){return this.vV(a,b)},
vV(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bF(b,!0,t.N)
n=A.a_(o),m=n.c,n=n.i("ct<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.ct(o,0,500,n)
i.iP(o,0,500,m)
h=i.cO(0)
g=h.length
l&1&&A.H(o,18)
A.bd(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aV(new A.wh(p,a,h),j),$async$fl)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fl,r)}}
A.wj.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.wi(s.a,r,s.c,s.d,s.e),t.P)},
$S:20}
A.wi.prototype={
$1(a){return this.nT(a)},
nT(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.au(a1)
a3=A.l([],t.s)
for(p=q.d,o=J.aG(p),n=o.gu(p);n.k();)a3.push(n.gn().a.a)
s=2
return A.a(a.dR(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aL(t.N)
a2=o.gu(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.mh(i,c)){s=3
break}p=i.a
s=j.F(0,p)?5:7
break
case 5:s=8
return A.a(a.mp(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.mh(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.eu(b,a1,e,f),$async$$1)
case 10:d.a=new A.ji(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wd.prototype={
$0(){var s=this.b
return s.a.a2(new A.wc(this.a,s,this.c),t.P)},
$S:20}
A.wc.prototype={
$1(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.cx
k===$&&A.u()
o=p.c
n=o.b
s=3
return A.a(k.bV(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.tI(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a0(o.c,k)<=0){s=1
break}s=7
return A.a(l.mq(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.wf.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.we(r,s.b,s.c,s.d),t.P)},
$S:20}
A.we.prototype={
$1(a){return this.nR(a)},
nR(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.l([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dR(a.b,m,q.d,e),$async$$1)
case 2:l=c
k=l.a
j=l.b
i=A.aL(t.N)
e=p.length,n=0
case 3:if(!(n<p.length)){s=5
break}h=p[n]
g=h.a.a
s=i.F(0,g)?6:8
break
case 6:s=9
return A.a(o.mp(a,m,h),$async$$1)
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
A.wh.prototype={
$0(){var s=this.a
return s.a.a2(new A.wg(s,this.b,this.c),t.P)},
$S:20}
A.wg.prototype={
$1(a){return this.nS(a)},
nS(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
a0=A.v(c,t.G)
a1=J
s=2
return A.a(i.cj(e,a,d),$async$$1)
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
B.b.D(o,d)
s=5
return A.a(i.L("lp_sync_row",p,"store = ? AND record_id IN ("+b+")",o),$async$$1)
case 5:s=6
return A.a(i.L(e,A.m(["hidden",1],c,h),a,d),$async$$1)
case 6:a2.a_(new A.a1(g,A.uH(d,A.a_(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.q)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dH(null,null,c,h)
p.D(0,j)
p.j(0,"hidden",!0)
a2.bb(new A.aU(g,k,B.au,B.c4,j,p,B.dm))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b4.prototype={}
A.wk.prototype={
fu(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fu=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.cx
f===$&&A.u()
s=3
return A.a(f.f5(25,p.c.ay.$0()),$async$fu)
case 3:o=b
f=J.L(o)
if(f.gE(o)){q=B.a3
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
n=new A.b4(n.a+l,n.b+k,n.c+j,n.d+i,n.e+h,g)
s=4
break
case 5:q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
dS(a){return this.re(a)},
re(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.cx
l===$&&A.u()
m=m.r
s=3
return A.a(l.eo(m,a.a,a.b),$async$dS)
case 3:o=c
if(o==null){q=B.a3
s=1
break}s=4
return A.a(l.bV(m,o.a,o.b),$async$dS)
case 4:n=c
if(n==null){q=B.a3
s=1
break}if(o.e==null){q=p.rb(o,n)
s=1
break}q=p.js(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dS,r)},
bH(a,b,c,d,e){return this.qp(a,b,c,d,e)},
qo(a,b,c,d){return this.bH(a,b,c,!1,d)},
qm(a,b,c){return this.bH(a,b,c,!1,!1)},
qn(a,b,c,d){return this.bH(a,b,c,d,!1)},
qp(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bH=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bH)
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
k===$&&A.u()
s=14
return A.a(k.mZ("forbidden_push",a.b,a.a),$async$bH)
case 14:q=B.d5
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
return A.a(n.cY(a,"validation_push",m.a),$async$bH)
case 20:q=B.M
s=1
break
case 19:q=n.ct(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cl){q=n.dN(a,b,!e)
s=1
break}else if(k instanceof A.bo){l=k
q=n.ct(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bH,r)},
jr(a,b,c){return this.rd(a,b,c)},
rb(a,b){return this.jr(a,b,!1)},
rd(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bH(a,b,new A.wm(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jr,r)},
jw(a,b,c){return this.rs(a,b,c)},
rs(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jw=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qo(a,b,new A.wr(p,a,p.a.au(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jw,r)},
js(a,b){return this.rf(a,b)},
rf(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$js=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qm(a,b,new A.wp(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$js,r)},
d2(a,b,c,d){return this.rh(a,b,c,d)},
rg(a,b,c){return this.d2(a,b,c,!1)},
rh(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d2=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.l5(a,c)
j=n.a.au(a.a).a
i=a.d
s=A.ar(B.l.v(B.e.v(A.ai(A.bg(j,A.fg(j,c))))).a)===A.ar(B.l.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eO(a,c),$async$d2)
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
i=A.D(f)
s=i instanceof A.d4?10:12
break
case 10:k=i
s=13
return A.a(n.cY(a,"corrupt_payload",k.a),$async$d2)
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
return A.a(n.dP(a,b,c,j,m,l),$async$d2)
case 14:g=a0
if(g==null){q=B.bc
s=1
break}q=n.bH(a,b,new A.wn(n,a,A.ai(A.bg(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d2,r)},
b8(a){return this.ra(a)},
ra(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b8=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.l([],t.k1)
c0=t.N
c1=A.v(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.v(c0,c0)
c0=J.E(d0),d=n.a,c=d.y,b=n.b,a=d.dy,a0=d.r
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.cx
a2===$&&A.u()
s=5
return A.a(a2.eo(a0,a1.a,a1.b),$async$b8)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bV(a0,m.a,m.b),$async$b8)
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
a5===$&&A.u()
s=11
return A.a(a5.c_(a1),$async$b8)
case 11:k=d2
p=2
s=10
break
case 8:p=7
c8=o.pop()
a1=A.D(c8)
s=a1 instanceof A.cl?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lD(m,l),$async$b8)
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
return A.a(a2.mZ("forbidden_push",m.b,a1),$async$b8)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bo?25:27
break
case 25:i=a1
s=28
return A.a(n.ct(m,l,i),$async$b8)
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
A.cf(a7,A.bg(a4,A.fg(a4,k)))
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
return A.a(n.eO(m,k),$async$b8)
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
a1=A.D(c9)
s=a1 instanceof A.d4?38:40
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
return A.a(n.dP(m,l,k,a4,g,f),$async$b8)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a2("")
A.cf(a7,A.bg(a4,b1))
b2=a7.a
b3=m.e==null?null:k.c
b9.push(new A.h0(a1,a2,a5,b2.charCodeAt(0)==0?b2:b2,b3))
c1.j(0,m.w,b1)
s=3
break
case 30:b9.push(new A.h0(m.w,m.a,m.b,m.d,m.e))
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
return A.a(n.c6(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$b8)
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
return A.f($async$b8,r)},
dP(a,b,c,d,e,f){return this.qB(a,b,c,d,e,f)},
qB(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dP=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.fg(d,c)
n=A.Gw(e,f,new A.ml(null,B.a_,!1),a.b,A.bg(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bx(n,t.r),$async$dP)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hj(a,b,c,m,e,f),$async$dP)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dP,r)},
c6(a,b,c){return this.rO(a,b,c)},
rO(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c6=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.z
a7===$&&A.u()
s=7
return A.a(a7.ft(b9),$async$c6)
case 7:m=c3
a7=t.N
l=A.v(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.q)(b9),++a9){k=b9[a9]
J.cY(l,k.a,k)}j=l
i=A.aL(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aN(i,h.a)){l=A.aR("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.I(h.a)){l=A.aR("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.l([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.V(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.jl(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c0()
b2=A.cW(b1)
b2.t(0,b0)
b2.q()
b2=A.ar(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aN(g,new A.jk(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.cx
a8===$&&A.u()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.fj(b4,b2,b3,e.d,b0),$async$c6)
case 13:++b7
case 11:s=8
break
case 9:l=a7.cx
l===$&&A.u()
s=14
return A.a(l.kO(g),$async$c6)
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
l=A.D(b8)
s=l instanceof A.dv?15:17
break
case 15:q=n.c2(b9,c0,c1)
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
return A.a(n.dS(n.lK(a0)),$async$c6)
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
case 27:s=l instanceof A.bo?28:30
break
case 28:a2=l
a3=a2 instanceof A.da?a2:new A.eO("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.cx
b0===$&&A.u()
s=34
return A.a(b0.bV(a8,a4.b,a4.c),$async$c6)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.ct(n.lK(a4),a5,a3),$async$c6)
case 37:a6=c3
b6+=a6.a
b7+=a6.b
case 36:case 32:b9.length===l||(0,A.q)(b9),++a9
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
c2(a,b,c){return this.p5(a,b,c)},
p5(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$c2=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.L(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.cx
h===$&&A.u()
b3=g.b
s=5
return A.a(h.fj("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$c2)
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
a6===$&&A.u()
s=13
return A.a(a6.ft(j),$async$c2)
case 13:i=b9
h=A.v(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.cY(h,g.a,g)}f=h
e=A.aL(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aN(e,d.a)){a6=A.aR("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.I(d.a)){a6=A.aR("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.V(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.jl(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dT(a7,a8,a9,b0==null?b.d:b0),$async$c2)
case 19:++m
s=17
break
case 18:a7=a1.cx
a7===$&&A.u()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.fj(b1,a9,b0,b.d,a8),$async$c2)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.D(b4)
s=a6 instanceof A.dv?21:23
break
case 21:s=24
return A.a(n.c2(j,b6,b7),$async$c2)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bo){k=!0
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
return A.f($async$c2,r)},
jl(a,b){var s=b==null?a.d:b
return new A.cn(a.b,a.c,B.v,s,a.e,A.ar(B.l.v(B.e.v(a.d)).a),B.u,a.a,0,null)},
lK(a){return this.jl(a,null)},
dT(a,b,c,d){return this.rT(a,b,c,d)},
eO(a,b){return this.dT(a,b,null,null)},
rT(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dT=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(a.a).a
n=A.fg(o,b)
m=d==null
l=m?A.ai(A.bg(o,n)):d
p=p.cx
p===$&&A.u()
s=2
return A.a(p.kO(A.l([new A.jk(a,l,b.c,A.ar(B.l.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dT)
case 2:return A.e(null,r)}})
return A.f($async$dT,r)},
l5(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.ex('record id "'+s+'" does not match requested "'+r+'"'))},
ct(a,b,c){return this.rC(a,b,c)},
rC(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$ct=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.da?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.cx
o===$&&A.u()
s=5
return A.a(o.n_(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$ct)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.mG(l,k)
m=p.a.cx
m===$&&A.u()
s=6
return A.a(m.wA(a.a,a.b,l,c.a,o.ay.$0()+B.c.M(n.a,1000)),$async$ct)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ct,r)},
cY(a,b,c){return this.pF(a,b,c)},
pE(a,b){return this.cY(a,b,null)},
pF(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.cx
o===$&&A.u()
p=c==null?b:c
s=2
return A.a(o.fj(p,a.b,b,a.d,a.a),$async$cY)
case 2:return A.e(null,r)}})
return A.f($async$cY,r)},
dN(a,b,c){return this.qh(a,b,c)},
lD(a,b){return this.dN(a,b,!0)},
qh(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
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
i=A.D(h)
s=i instanceof A.d4?10:12
break
case 10:k=i
s=13
return A.a(n.cY(a,"corrupt_payload",k.a),$async$dN)
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
return A.a(n.h4(a,b,m,l),$async$dN)
case 14:q=B.bc
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dN,r)},
h4(a,b,c,d){return this.pU(a,b,c,d)},
pU(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$h4=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bI(c,d)
n=A.R(o,A.n(o).c)
B.b.aF(n)
p=b.r
if(p==null)p=A.ai(c)
s=2
return A.a(q.a.a2(new A.wl(q,a,p,d,n),t.P),$async$h4)
case 2:return A.e(null,r)}})
return A.f($async$h4,r)},
hj(a,b,c,d,e,f){return this.rq(a,b,c,d,e,f)},
rq(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hj=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.au(a.a).a
m=A.bg(n,A.fg(n,c))
l=A.bI(e,f)
k=A.R(l,A.n(l).c)
B.b.aF(k)
l=A.bI(e,m)
p=A.R(l,A.n(l).c)
B.b.aF(p)
s=2
return A.a(o.a2(new A.wq(q,a,b,e,f,m,k,p,n,c),t.P),$async$hj)
case 2:return A.e(null,r)}})
return A.f($async$hj,r)}}
A.wm.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.u()
s=7
return A.a(j.hM(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eO(k,m),$async$$0)
case 8:q=B.a4
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.D(h) instanceof A.en){q=n.a.jw(n.b,n.c,n.d)
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
A.wr.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.u()
s=3
return A.a(l.c_(m.b),$async$$0)
case 3:o=b
s=o==null?4:5
break
case 4:s=6
return A.a(n.pE(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.ar(B.l.v(B.e.v(A.ai(A.bg(l,A.fg(l,o))))).a)===A.ar(B.l.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eO(m,o),$async$$0)
case 9:q=B.a4
s=1
break
case 8:q=n.d2(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.wp.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.u()
s=3
return A.a(l.c_(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lD(m,p.c)
s=1
break}n.l5(m,o)
if(o.c===m.e){l=p.c
q=n.qn(m,l,new A.wo(n,m,o,l),!0)
s=1
break}q=n.rg(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:19}
A.wo.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.u()
s=7
return A.a(j.fH(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eO(k,m),$async$$0)
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
A.wn.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.b
m=p.c
l=o.b.z
l===$&&A.u()
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
A.wl.prototype={
$1(a){return this.nU(a)},
nU(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cd(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ai(q.d),"remote_json",A.ai(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a6(q.e,null),"dirty_remote",B.h.a6(B.u,null),"detected_at",q.a.c.ay.$0()],k,j),B.R),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a_(new A.a1(n,A.at([m],k)))
a.a_(new A.a1("lp_conflicts",A.at([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wq.prototype={
$1(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cd(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ai(q.e),"remote_json",A.ai(o),"dirty_local",B.h.a6(q.r,null),"dirty_remote",B.h.a6(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.R),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ai(o),"base_hash",A.ar(B.l.v(B.e.v(A.ai(A.bg(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a_(new A.a1(j,A.at([k],n)))
a.a_(new A.a1("lp_conflicts",A.at([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.c8.prototype={
a4(){return"SyncEngineState."+this.b}}
A.hl.prototype={}
A.xh.prototype={
gl7(){return 36},
dC(a){return this.oD(a)},
oD(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dC=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.l([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dy,g=new A.bE(g,g.r,g.e,A.n(g).i("bE<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.is(m),$async$dC)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gl7():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.ak(c.a+1,n.gl7())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bE(m,a),$async$dC)
case 13:a5.aN(a6,a9)
case 11:++j
s=10
break
case 12:if(A.nJ(h)!=null)A.t(A.A(u.L))
b=h.b
b===$&&A.u()
s=14
return A.a(b.aW(new A.xi(c,n,m,a3),B.p,f),$async$dC)
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
return A.f($async$dC,r)},
bE(a,b){return this.oC(a,b)},
oC(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bE=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.Q("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aL(t.N)
m=B.c.iw(B.c.bP(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.z
g===$&&A.u()
s=5
return A.a(g.fi(a4,B.cP,h,null,o,m),$async$bE)
case 5:f=a7
g=J.L(f)
if(g.gE(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.l([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hi(a4,e),$async$bE)
case 6:c=a7
b=A.l([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aO||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dc(a4,b),$async$bE)
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
a2=A.l([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.F(a)
if(!n.F(0,a)){if(J.x(d.h(0,"access_state"),"hidden")||J.x(d.h(0,"access_state"),"purged"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fl(a4,a2),$async$bE)
case 13:case 12:s=14
return A.a(k.ai("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bE)
case 14:a3=a7
k=J.L(a3)
s=k.gX(a3)?15:16
break
case 15:l=A.l([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.F(g))}s=17
return A.a(j.dc(a4,l),$async$bE)
case 17:case 16:q=new A.hl(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bE,r)},
hi(a,b){return this.r5(a,b)},
r5(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.v(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.T(b,n,B.c.bP(l,0,m))
j=B.b.B(A.ab(k.length,"?",!1,g),", ")
m=[a]
B.b.D(m,k)
e=J
s=6
return A.a(o.ai(u.m+j+")",m),$async$hi)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.F(h),A.jy(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)}}
A.xi.prototype={
$1(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.ev(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bo.prototype={
l(a){return A.ds(this).l(0)+": "+this.a},
$iG:1}
A.eO.prototype={}
A.da.prototype={}
A.ha.prototype={}
A.bM.prototype={}
A.cj.prototype={}
A.cl.prototype={}
A.eD.prototype={}
A.eF.prototype={}
A.en.prototype={}
A.nn.prototype={}
A.dv.prototype={}
A.hj.prototype={
gm(a){return this.b}}
A.d9.prototype={}
A.h0.prototype={}
A.jj.prototype={}
A.kU.prototype={
a4(){return"BackendHintKind."+this.b}}
A.cC.prototype={}
A.Br.prototype={
$2(a,b){return B.a.il(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:145}
A.nC.prototype={
gnd(){return 1}}
A.xj.prototype={
mG(a,b){var s,r
if(b!=null){s=this.qX(b)
if(A.av(s))return A.d_(0,0,s<0?0:s)
if(s instanceof A.aO){r=s.a-this.ay.$0()
return r<=0?B.D:A.d_(0,r,0)}return B.av}return A.Gq(a,B.av,B.S,this.at)},
mF(a){return this.mG(a,null)},
qX(a){var s=B.a.ck(a),r=A.jg(s,null)
if(r!=null)return r
return A.Js(s)}}
A.ji.prototype={}
A.jw.prototype={}
A.xu.prototype={
ir(a){return this.ww(a)},
ww(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$ir=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.em("lp_sync_state",A.l(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$ir)
case 3:m=c
l=J.L(m)
if(l.gE(m)){q=null
s=1
break}o=A.a6(J.V(l.gH(m),"cursor_updated"))
n=A.a6(J.V(l.gH(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.ji(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ir,r)},
eu(a,b,c,d){return this.xl(a,b,c,d)},
xl(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eu=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aJ("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eu)
case 5:s=m.bA(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$eu)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$eu)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eu,r)},
is(a){return this.wy(a)},
wy(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$is=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.em("lp_sync_state",A.l(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$is)
case 3:n=c
m=J.L(n)
if(m.gE(n)){q=B.dt
s=1
break}o=A.be(J.V(m.gH(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.jw(o,A.be(J.V(m.gH(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$is,r)},
ev(a,b,c,d){return this.xp(a,b,c,d)},
xp(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
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
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$ev)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$ev)
case 7:case 3:return A.e(null,r)}})
return A.f($async$ev,r)},
hI(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hI=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b0("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hI)
case 3:l=b
k=J.L(l)
j=k.gE(l)?B.j:k.gH(l)
k=A.be(j.h(0,"pending"))
if(k==null)k=0
o=A.be(j.h(0,"conflicts"))
if(o==null)o=0
n=A.be(j.h(0,"hidden"))
if(n==null)n=0
m=A.be(j.h(0,"blocked"))
q=new A.oJ([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)}}
A.cP.prototype={
a4(){return"SyncState."+this.b}}
A.fl.prototype={
a4(){return"AccessState."+this.b}}
A.fX.prototype={
a4(){return"OutboxKind."+this.b}}
A.jc.prototype={
a4(){return"OpQueueKind."+this.b}}
A.BM.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.cO.prototype={}
A.xt.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
i=j.h(0,"record_id")
i.toString
A.F(i)
i=A.a6(j.h(0,"remote_updated"))
s=A.be(j.h(0,"last_seen_at"))
r=A.a6(j.h(0,"base_updated"))
A.a6(j.h(0,"base_hash"))
q=A.a6(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fB(B.cz,A.F(p))
A.Gl(j.h(0,"dirty_fields"))
o=A.be(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fB(B.cy,A.F(n))
A.a6(j.h(0,"op_id"))
m=A.be(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.be(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.be(j.h(0,"schema_ver"))
return new A.cO(i,s,r,q,p,o,n,m,l,k)},
$S:146}
A.cn.prototype={}
A.vv.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.F(i)
s=j.h(0,"record_id")
s.toString
A.F(s)
r=j.h(0,"kind")
r.toString
r=A.fB(B.cI,A.F(r))
q=j.h(0,"payload_json")
q.toString
A.F(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.Gl(j.h(0,"dirty_fields"))
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
A.eC.prototype={}
A.vq.prototype={
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
q=A.fB(B.cD,A.F(q))
p=m.h(0,"payload_json")
p.toString
A.F(p)
o=m.h(0,"state")
o.toString
A.F(o)
o=A.be(m.h(0,"attempt_count"))
if(o==null)o=0
A.be(m.h(0,"next_retry_at"))
A.a6(m.h(0,"last_error"))
n=A.a6(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.aq(m)
return new A.eC(l,s,r,q,p,o,n)},
$S:148}
A.BK.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:51}
A.BL.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.F(s)},
$S:51}
A.bG.prototype={
a_(a){this.c.push(a)
this.a.y.r+=a.b.a},
bb(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
by(a){var s=this.a
return new A.fs(s,s.au(a),new A.iy(this.b),this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.A("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cB(o,a,b)},
cB(a,b,c){return this.tl(a,b,c,c)},
tl(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$cB=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a=n.b
s=3
return A.a(a.O("SAVEPOINT "+a2),$async$cB)
case 3:h=n.c
m=h.length
g=n.d
l=g.length
f=n.a
e=f.y
k=e.r
p=5
d=A.CL(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.pp(new A.xE(a3,j,a4),null,A.m([$.kE(),j],f,f),a4.i("y<0>")),$async$cB)
case 8:i=a7
s=9
return A.a(a.O("RELEASE "+a2),$async$cB)
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
return A.a(a.O("ROLLBACK TO "+a2),$async$cB)
case 14:s=15
return A.a(a.O("RELEASE "+a2),$async$cB)
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
if(a>m)B.b.ku(h,m,a)
a=g.length
if(a>l)B.b.ku(g,l,a)
a=e.r
e.r=a+(k-a)
throw a0
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cB,r)}}
A.xE.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.A8.prototype={}
A.lx.prototype={
a4(){return"DurabilityClass."+this.b}}
A.xw.prototype={
aW(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.C,t._)
r.c.push(new A.hA(a,new A.aI(s,t.jk)))
return s.V(new A.xD(c),c)}return this.rZ(a,b,c)},
rZ(a,b,c){var s,r,q,p=this
if(p.a.at.a>0){s=p.c
if(s!=null)s.k8()}s=A.l([],t.i4)
r=new A.og(p,b,s)
p.c=r
r.wJ()
q=new A.w($.C,t._)
s.push(new A.hA(a,new A.aI(q,t.jk)))
return q.V(new A.xz(c),c)},
wu(a,b){var s,r=this.a
if(r.at.a>0){s=this.c
if(s!=null)s.k8()}return r.e.aV(new A.xC(this,a,b),b)},
qF(){if(++this.d<64)return
this.d=0
A.cQ(B.D,new A.xy(this))}}
A.xD.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xz.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xC.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.xB(s,this.b,r),r)},
$S(){return this.c.i("y<0>()")}}
A.xB.prototype={
$1(a){return this.nY(a,this.c)},
nY(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.CL(p.a.a.a,a,A.l([],t.gi),!0,null)
n=p.c
m=t.X
q=A.pp(new A.xA(p.b,o,n),null,A.m([$.kE(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("y<0>(r7)")}}
A.xA.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("y<0>()")}}
A.xy.prototype={
$0(){this.a.a.a.iA().jP(new A.xx())},
$S:0}
A.xx.prototype={
$1(a){},
$S:23}
A.og.prototype={
wJ(){var s,r,q=this,p=new A.aI(new A.w($.C,t.D),t.h)
q.e=p
s=q.a.a
s.e.aV(new A.yX(q,p),t.H)
r=s.at
s=q.gv6()
if(r.a>0)A.cQ(r,s)
else A.cQ(B.D,s)},
k8(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.an()},
cG(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cG=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.f;++b2.b
b2.c+=b1}b3=new A.jt()
$.kC()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aX&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.nk("PRAGMA synchronous=FULL",null),$async$cG)
case 5:b1.b="FULL"
case 4:i=A.l([],t.gi)
h=A.l([],t.eb)
g=A.l([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.yW(m,i,h,l,g),t.P),$async$cG)
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
if((b8.a.a&30)!==0)A.t(A.A("Future already completed"))
b8.al(A.f8(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.t(A.A("Future already completed"))
b8.aD(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dy,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.vD(a0.b)
b6.jZ(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a1=f[b7]
b6.uM(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.D(c2)
a3=A.ad(c2)
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
if((b6.a.a&30)!==0)A.t(A.A("Future already completed"))
b6.al(A.f8(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.t(A.A("Future already completed"))
b6.al(A.f8(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.nk("PRAGMA synchronous=NORMAL",null),$async$cG)
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
a4=k.guL();++f.a
f.d+=a4
b1.qF()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.q)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.t(A.A("Future already completed"))
a4.al(A.f8(new A.bm("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cG,r)}}
A.yX.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cG(),$async$$0)
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
A.yW.prototype={
$1(a){return this.nZ(a)},
nZ(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.CL(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.pp(new A.yU(a,a0),null,A.m([$.kE(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.f4([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.D(a1)
l=A.ad(a1)
o.e.push(new A.f4([B.b.gap(a.c),null,m,l]))
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
return A.a(A.pp(new A.yV(a0,k),null,A.m([$.kE(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.f4([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.D(a2)
h=A.ad(a2)
e.push(new A.f4([k,null,i,h]))
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
A.yU.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:52}
A.yV.prototype={
$0(){return this.a.a2(new A.yT(this.b),t.z)},
$S:52}
A.yT.prototype={
$1(a){return this.a.a.$1(a)},
$S:151}
A.hA.prototype={}
A.mS.prototype={
kP(a){return a.a===this.x.b.a},
f9(){var s=this.x
return s.e9(s.w==null&&!s.x?50:null).V(new A.wG(),t.J)},
mz(a){return A.Mj(a,new A.wF(this),this.x.r.length!==0)},
n2(a){var s=this.y
return s==null?null:s.t(0,a)},
km(a,b){var s=this.y
return s==null?null:s.bx(a,b)},
iM(){var s=this.y=A.x7(this.gjX(),new A.wH(this),null,!1,t.J)
return new A.b6(s,A.n(s).i("b6<1>"))},
f2(){this.kV()
var s=this.y
if(s!=null)s.q()}}
A.wG.prototype={
$1(a){return a.a},
$S:152}
A.wF.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:9}
A.wH.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.mA.prototype={
kP(a){var s
if(a.a!==this.x.a.a)return!1
s=a.b
if(s.a!==0&&!s.F(0,this.y))return!1
return!0},
f9(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$f9=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.u()
o=p.x.a
s=3
return A.a(l.gbn().b.aJ(o.a,1,"id = ?",[p.y]),$async$f9)
case 3:n=b
l=J.L(n)
if(l.gE(n)){q=null
s=1
break}q=A.cd(o,l.gH(n),m.ay,m.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
mz(a){return a==null?"<null>":A.ar(B.l.v(B.e.v(A.ai(a))).a)},
n2(a){var s=this.z
return s==null?null:s.t(0,a)},
km(a,b){var s=this.z
return s==null?null:s.bx(a,b)},
iM(){var s=this.z=A.x7(this.gjX(),new A.vo(this),null,!1,t.b)
return new A.b6(s,A.n(s).i("b6<1>"))},
f2(){this.kV()
var s=this.z
if(s!=null)s.q()}}
A.vo.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.fr.prototype={
km(a,b){},
az(){var s=this.a.a$.a
this.c=new A.b1(s,A.n(s).i("b1<1>")).aN(this.gqH())},
qI(a){var s,r=this
if(!r.kP(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.C()
r.d=A.cQ(r.b,r.gmk())},
e0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$e0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(m.r){s=1
break}m.e=!0
h=m.a.y;++h.y
p=4
s=7
return A.a(m.f9(),$async$e0)
case 7:l=b
if(m.r){n=[1]
s=5
break}k=m.mz(l)
if(!J.x(k,m.w)){m.w=k;++h.z
m.n2(l)}n.push(6)
s=5
break
case 4:p=3
f=o.pop()
j=A.D(f)
i=A.ad(f)
if(!m.r)m.km(j,i)
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.e=!1
if(!m.r&&m.f){m.f=!1
h=m.d
if(h!=null)h.C()
m.d=A.cQ(m.b,m.gmk())}s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e0,r)},
f2(){var s,r=this
r.r=!0
s=r.d
if(s!=null)s.C()
r.f=!1
s=r.c
if(s!=null)s.C()}}
A.yf.prototype={
aV(a,b){var s,r=this;++r.b
r.lP()
s=new A.w($.C,b.i("w<0>"))
r.a=r.a.V(new A.yg(r,new A.aI(s,b.i("aI<0>")),a),t.H)
return s},
lP(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.yg.prototype={
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
l=A.ad(i)
n.b.bQ(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lP()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:41}
A.hv.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.y4.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.eB)},
$S:44}
A.nZ.prototype={
p(){var s,r=this,q=A.v(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.y1.prototype={
p(){var s,r=A.v(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.jh.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iG:1}
A.y_.prototype={
eL(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eL=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.ia()
if(n==null){q=!1
s=1
break}l=t.m
s=7
return A.a(A.a5(n.getDirectory(),l),$async$eL)
case 7:m=b
s=8
return A.a(A.a5(m.getDirectoryHandle("localpocket_blobs",{create:!0}),l),$async$eL)
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
return A.f($async$eL,r)},
dO(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eL(),$async$dO)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dO,r)},
bl(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bl=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dO(),$async$bl)
case 3:if(!b){q=null
s=1
break}p=5
m=A.ia()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a5(m.getDirectory(),k),$async$bl)
case 8:l=b
s=9
return A.a(A.a5(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bl)
case 9:k=b
q=new A.oE(k)
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
dk(a,b,c){return this.wk(a,b,c)},
iq(a){return this.dk(a,null,null)},
wk(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dk=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.yE(A.l([],t.bs))
s=3
return A.a(A.ky(a,b,c,null,new A.y0(o)),$async$dk)
case 3:n=e
m=o.ky()
s=4
return A.a(p.bl(),$async$dk)
case 4:l=e
k=n.a
s=l!=null?5:7
break
case 5:s=8
return A.a(l.aZ(k,m),$async$dk)
case 8:s=6
break
case 7:p.b.j(0,k,m)
case 6:q=k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dk,r)},
cK(a){return this.w5(a)},
w5(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cK=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.l3(a)
j=n.b
if(j.I(a)){j=j.h(0,a)
j.toString
q=A.CE(j,t.L)
s=1
break}s=3
return A.a(n.bl(),$async$cK)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.en(a),$async$cK)
case 10:l=c
j=A.CE(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.D(h)
if(!(k instanceof A.fo))throw A.b(A.DN(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.A("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cK,r)},
d9(a){return this.u9(a)},
u9(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$d9=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.l3(a)
o.b.G(0,a)
s=2
return A.a(o.bl(),$async$d9)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.G(0,a),$async$d9)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.D(k)
if(!(m instanceof A.fo))throw A.b(A.DN(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$d9,r)},
bo(a){return this.uV(a)},
uV(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.l3(a)
if(p.b.I(a)){q=!0
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
bh(a){return this.og(a)},
og(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.l3(a)
o=p.b
if(o.I(a)){q=o.h(0,a).length
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
e5(a){return this.tQ(a)},
tQ(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
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
if(!J.HE(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.G(0,l),$async$e5)
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
i=A.d3(new A.T(j,A.n(j).i("T<1>")),t.N)
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
l=$.Ds()
if(l.b.test(m))J.aN(i,m)
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
j=A.R(j,A.n(j).c)
q=j
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fg,r)}}
A.y0.prototype={
$1(a){return this.a.t(0,a)},
$S:14}
A.oE.prototype={
en(a){return this.wv(a)},
wv(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
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
i=A.bS(k,0,null)
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.D(g)
if(A.EP(j))throw A.b(A.DM(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$en,r)},
aZ(a,b){return this.xk(a,b)},
xk(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
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
G(a,b){return this.wG(0,b)},
wG(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$G=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.Ca(o.a,b),$async$G)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.D(l)
if(A.EP(n))throw A.b(A.DM(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$G,r)},
bo(a){return this.uW(a)},
uW(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
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
bh(a){return this.oh(a)},
oh(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
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
s=p}for(;;)switch(s){case 0:k=A.l([],t.s)
j=new A.cy(A.cz(A.E3(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$ef)
case 8:if(!b){s=7
break}l=j.gn()
J.aN(k,l.name)
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
$iEp:1}
A.uI.prototype={
cH(a,b){return this.vf(a,b)},
vf(a,b){var s=0,r=A.h(t.X),q,p
var $async$cH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.pn(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cH,r)},
ik(a,b,c,d){return this.w6(a,b,c,d)},
w6(a7,a8,a9,b0){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$ik=A.c(function(b1,b2){if(b1===1){o.push(b2)
s=p}for(;;)switch(s){case 0:a2=a7.w2(a8,a9)
a3=t.N
a4=new A.iu(A.v(a3,t.fw),a2)
a5=!1
p=4
d=b0==null
n=A.GE(d?null:A.pl(b0),"backupDbName")
if(n!=null&&typeof n!="string"){a3=A.bT('"backupDbName" must be a string.')
throw A.b(a3)}c=A.a6(n)
m=c==null?a8:c
a4.d=new A.uJ(m)
a4.e=new A.uK(m)
a2.O("PRAGMA journal_mode=TRUNCATE")
b=a2.o7("PRAGMA journal_mode")
l=b.gH(b).b[0]
if(J.a0(l).toLowerCase()!=="truncate"){a3=A.A("journal_mode read-back was "+A.r(l)+", expected truncate")
throw A.b(a3)}k=A.N2(d?null:A.pl(b0))
a=t.bE.a(J.V(k,"stores"))
j=a==null?A.l([],t.aw):a
a0=A.be(J.V(k,"maxDocBytes"))
i=a0==null?19e5:a0
b=A.Fw(J.V(k,"destructiveBackup"))
h=b!==!1
g=A.N1(A.GE(d?null:A.pl(b0),"fieldCipher"))
if(A.ML(j,g)){a3=A.ah("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a3)}f=new A.y_(A.v(a3,t.p))
s=7
return A.a(A.d1(f,a4,h,g,i,a8,B.aB,j,B.bQ),$async$ik)
case 7:e=b2
a5=!0
a3=t.be
q=new A.mj(a2,new A.y9(e,A.aL(a3)),A.v(t.eg,a3))
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
return A.f($async$ik,r)}}
A.uJ.prototype={
$1(a){return A.pd(this.a,a)},
$S:153}
A.uK.prototype={
$1(a){return A.pf(this.a,a)},
$S:154}
A.mj.prototype={
cH(a,b){return this.vg(a,b)},
vg(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cH=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k={}
j=b.a
if(j==null){q=A.Cn(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.IE(j)
if(o==null){q=A.Cn(0,"protocol_envelope","Payload must be a map",null)
s=1
break}k.a=null
n=p.e
m=n.h(0,a)
if(m!=null)k.a=m
else{l=new A.oh(a)
k.a=l
n.j(0,a,l)
a.b.a.V(new A.uT(k,p,a),t.H)}i=A
s=3
return A.a(p.d.i1(k.a,o),$async$cH)
case 3:q=i.IF(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cH,r)}}
A.uT.prototype={
$1(a){var s=this.b
s.e.G(0,this.c)
s.d.d.G(0,this.a.a)},
$S:71}
A.oh.prototype={
jZ(a){this.a.hN(A.pn(a)).bq(new A.z2(),new A.z3(),t.H)},
$io2:1}
A.z2.prototype={
$1(a){},
$S:155}
A.z3.prototype={
$1(a){},
$S:26}
A.Bw.prototype={
$1(a){return B.b.bO(a.c,new A.Bv())},
$S:156}
A.Bv.prototype={
$1(a){return a.e},
$S:53}
A.y6.prototype={
w8(a,b){var s=this.a
if(!s.I(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.bT('Invalid "'+a+'" argument: expected '+A.bJ(b).l(0)+", got "+J.bZ(s).l(0)+"."))
return b.a(s)}}
A.hw.prototype={}
A.jD.prototype={}
A.eT.prototype={}
A.Bm.prototype={
$2(a,b){var s,r,q=J.a0(a)
if(t.f.b(b))this.a.j(0,q,A.fc(b))
else{s=this.a
if(t.j.b(b)){r=J.c_(b,new A.Bl(),t.z)
r=A.R(r,r.$ti.i("Z.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:39}
A.Bl.prototype={
$1(a){return t.f.b(a)?A.fc(a):a},
$S:32}
A.o1.prototype={
hb(a,b){return this.qd(a,b)},
qd(a0,a1){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$hb=A.c(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:b=a1.d.h(0,"request")
if(!t.f.b(b))throw A.b(A.bT('Contract envelope requires a "request" map.'))
j=A.fc(b)
i=j.h(0,"tag")
if(typeof i!="string")A.t(A.N("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.t(A.N("Missing request payload."))
g=A.ku(h)
j=t.G
if(!j.b(g))A.t(A.N("Malformed request payload."))
f=A.I0(i,g)
if(f==null)A.t(A.N("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.u()
s=7
return A.a(e.va(m),$async$hb)
case 7:l=a3
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gU(),"payload",A.fd(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
k=A.D(a)
j=A.m(["error",A.MA(k)],t.N,j)
q=j
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hb,r)}}
A.y9.prototype={
i1(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$i1=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.d.t(0,a)
if(n.e==null){i=n.c.e
i===$&&A.u()
i=i.b
n.e=new A.b1(i,A.n(i).i("b1<1>")).aN(new A.ya(n))}m=null
try{m=A.JB(b)}catch(d){l=A.D(d)
i=J.a0(l)
q=new A.eT("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eT("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.j3(a,m),$async$i1)
case 7:k=a0
i=m.b
q=new A.jD(k,i)
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
f=A.m(["type",A.Nb(j)],t.N,t.X)
q=new A.eT("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i1,r)},
j3(a,b){return this.pI(a,b)},
pI(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$j3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
if(l===$){o=A.m(["open",p.gqi(),"contract_request",p.gqc()],t.N,t.n1)
p.f!==$&&A.BS()
p.f=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.bT("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j3,r)}}
A.ya.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gU(),"payload",A.fd(a.p())],r,q)],r,q)
for(r=this.a.d,r=A.hJ(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).jZ(p)}},
$S:159}
A.o0.prototype={
hc(a,b){return this.qj(a,b)},
qj(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$hc=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.y6(a3).w8("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.v(a3,a3)
n=t.f
if(n.b(a5))a5.a8(0,new A.y7(o))
s=a4!=null?3:4
break
case 3:m=J.E(a4),l=p.c,k=l.dy,j=t.X,i=l.ay==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.t(A.a8("Schema must be a map: "+A.r(h),null,null))
g=A.q5(A.fc(h),j)
if(B.b.bO(g.c,new A.y8())&&i)throw A.b(A.ah('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.CA(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a2("")
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
return A.a(l.aQ(g),$async$hc)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.t(A.A('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a2("")
A.cf(c,a1.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c0()
a0=A.cW(a)
a0.t(0,b)
a0.q()
a0=A.ar(a.a.a)
c=new A.a2("")
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
return A.f($async$hc,r)}}
A.y7.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:65}
A.y8.prototype={
$1(a){return a.e},
$S:53}
A.p5.prototype={}
A.qI.prototype={
tu(a){var s,r=null
A.G8("absolute",A.l([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b2(a)>0&&!s.cI(a)
if(s)return a
s=A.Gk()
return this.mY(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
ud(a){var s,r,q=A.dO(a,this.a)
q.fA()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kt(s)
q.e.pop()
q.fA()
return q.l(0)},
mY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.l([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.G8("join",s)
return this.vH(new A.dW(s,t.v))},
vH(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.cU(s,new A.qJ(),a.$ti.i("cU<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cI(m)&&o){l=A.dO(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.er(k,!0))
l.b=n
if(q.fm(n))l.e[0]=q.gdz()
n=l.l(0)}else if(q.b2(m)>0){o=!q.cI(m)
n=m}else{if(!(m.length!==0&&q.jS(m[0])))if(p)n+=q.gdz()
n+=m}p=q.fm(m)}return n.charCodeAt(0)==0?n:n},
cS(a,b){var s=A.dO(b,this.a),r=s.d,q=A.a_(r).i("am<1>")
r=A.R(new A.am(r,new A.qK(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aC(r,0,q)
return s.d},
ek(a){var s
if(!this.qE(a))return a
s=A.dO(a,this.a)
s.kl()
return s.l(0)},
qE(a){var s,r,q,p,o,n,m,l=this.a,k=l.b2(a)
if(k!==0){if(l===$.pr())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.ce(n)){if(l===$.pr()&&n===47)return!0
if(q!=null&&l.ce(q))return!0
if(q===46)m=o==null||o===46||l.ce(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.ce(q))return!0
if(q===46)l=o==null||l.ce(o)||o===46
else l=!1
if(l)return!0
return!1},
wE(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b2(a)
if(l<=0)return o.ek(a)
s=A.Gk()
if(m.b2(s)<=0&&m.b2(a)>0)return o.ek(a)
if(m.b2(a)<=0||m.cI(a))a=o.tu(a)
if(m.b2(a)<=0&&m.b2(s)>0)throw A.b(A.Eq(n+a+'" from "'+s+'".'))
r=A.dO(s,m)
r.kl()
q=A.dO(a,m)
q.kl()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kp(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kp(l[0],p[0])}else l=!1
if(!l)break
B.b.iv(r.d,0)
B.b.iv(r.e,1)
B.b.iv(q.d,0)
B.b.iv(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Eq(n+a+'" from "'+s+'".'))
l=t.N
B.b.ke(q.d,0,A.ab(p,"..",!1,l))
p=q.e
p[0]=""
B.b.ke(p,1,A.ab(r.d.length,m.gdz(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga1(m)==="."){B.b.kt(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fA()
return q.l(0)},
n5(a){var s,r,q=this,p=A.FT(a)
if(p.gb_()==="file"&&q.a===$.kD())return p.l(0)
else if(p.gb_()!=="file"&&p.gb_()!==""&&q.a!==$.kD())return p.l(0)
s=q.ek(q.a.ko(A.FT(p)))
r=q.wE(s)
return q.cS(0,r).length>q.cS(0,s).length?s:r}}
A.qJ.prototype={
$1(a){return a!==""},
$S:10}
A.qK.prototype={
$1(a){return a.length!==0},
$S:10}
A.B7.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:160}
A.tz.prototype={
o5(a){var s=this.b2(a)
if(s>0)return B.a.A(a,0,s)
return this.cI(a)?a[0]:null},
kp(a,b){return a===b}}
A.mE.prototype={
gjN(){var s=this,r=t.N,q=new A.mE(s.a,s.b,s.c,A.bF(s.d,!0,r),A.bF(s.e,!0,r))
q.fA()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga1(r)},
fA(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga1(s)===""))break
B.b.kt(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kl(){var s,r,q,p,o,n=this,m=A.l([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.ke(m,0,A.ab(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.ab(m.length+1,s.gdz(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fm(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.pr())n.b=A.B(r,"/","\\")
n.fA()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga1(q)
return o.charCodeAt(0)==0?o:o}}
A.mF.prototype={
l(a){return"PathException: "+this.a},
$iG:1}
A.xg.prototype={
l(a){return this.gaP()}}
A.vZ.prototype={
jS(a){return B.a.F(a,"/")},
ce(a){return a===47},
fm(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
er(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b2(a){return this.er(a,!1)},
cI(a){return!1},
ko(a){var s
if(a.gb_()===""||a.gb_()==="file"){s=a.gbp()
return A.D2(s,0,s.length,B.o,!1)}throw A.b(A.Q("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaP(){return"posix"},
gdz(){return"/"}}
A.xM.prototype={
jS(a){return B.a.F(a,"/")},
ce(a){return a===47},
fm(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bR(a,"://")&&this.b2(a)===s},
er(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.cc(a,"/",B.a.ad(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.Gn(a,q+1)
return p==null?q:p}}return 0},
b2(a){return this.er(a,!1)},
cI(a){return a.length!==0&&a.charCodeAt(0)===47},
ko(a){return a.l(0)},
gaP(){return"url"},
gdz(){return"/"}}
A.y5.prototype={
jS(a){return B.a.F(a,"/")},
ce(a){return a===47||a===92},
fm(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
er(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.cc(a,"\\",2)
if(s>0){s=B.a.cc(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Gt(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b2(a){return this.er(a,!1)},
cI(a){return this.b2(a)===1},
ko(a){var s,r
if(a.gb_()!==""&&a.gb_()!=="file")throw A.b(A.Q("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbp()
if(a.gde()===""){if(s.length>=3&&B.a.S(s,"/")&&A.Gn(s,1)!=null)s=B.a.kw(s,"/","")}else s="\\\\"+a.gde()+s
r=A.B(s,"/","\\")
return A.D2(r,0,r.length,B.o,!1)},
tS(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kp(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.tS(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaP(){return"windows"},
gdz(){return"\\"}}
A.wZ.prototype={
gm(a){return this.c.length},
gvI(){return this.b.length},
oI(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.H(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ex(a){var s,r=this
if(a<0)throw A.b(A.b_("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.b_("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gH(s))return-1
if(a>=B.b.ga1(s))return s.length-1
if(r.qv(a)){s=r.d
s.toString
return s}return r.d=r.p0(a)-1},
qv(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
p0(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.M(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iK(a){var s,r,q=this
if(a<0)throw A.b(A.b_("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.b_("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.ex(a)
r=q.b[s]
if(r>a)throw A.b(A.b_("Line "+s+" comes after offset "+a+"."))
return a-r},
fN(a){var s,r,q,p
if(a<0)throw A.b(A.b_("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.b_("Line "+a+" must be less than the number of lines in the file, "+this.gvI()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.b_("Line "+a+" doesn't have 0 columns."))
return q}}
A.lO.prototype={
ga3(){return this.a.a},
gag(){return this.a.ex(this.b)},
gaq(){return this.a.iK(this.b)},
gar(){return this.b}}
A.hG.prototype={
ga3(){return this.a.a},
gm(a){return this.c-this.b},
gR(){return A.C9(this.a,this.b)},
gN(){return A.C9(this.a,this.c)},
gaK(){return A.dS(B.y.T(this.a.c,this.b,this.c),0,null)},
gbc(){var s=this,r=s.a,q=s.c,p=r.ex(q)
if(r.iK(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dS(B.y.T(r.c,r.fN(p),r.fN(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fN(p+1)
return A.dS(B.y.T(r.c,r.fN(r.ex(s.b)),q),0,null)},
a0(a,b){var s
if(!(b instanceof A.hG))return this.ox(0,b)
s=B.c.a0(this.b,b.b)
return s===0?B.c.a0(this.c,b.c):s},
P(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hG))return s.ow(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gJ(a){return A.c4(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$idc:1}
A.t5.prototype={
vA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mm(B.b.gH(a1).c)
s=a.e
r=A.ab(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.hy("\u2575")
q.a+="\n"
a.mm(l)}else if(m.b+1!==n.b){a.tt("...")
q.a+="\n"}}for(l=n.d,k=A.a_(l).i("bw<1>"),j=new A.bw(l,k),j=new A.ao(j,j.gm(0),k.i("ao<Z.E>")),k=k.i("Z.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gR().gag()!==f.gN().gag()&&f.gR().gag()===i&&a.qx(B.a.A(h,0,f.gR().gaq()))){e=B.b.bS(r,a0)
if(e<0)A.t(A.Q(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.ts(i)
q.a+=" "
a.tr(n,r)
if(s)q.a+=" "
d=B.b.mS(l,new A.tq())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gR().gag()===i?j.gR().gaq():0
a.tp(h,g,j.gN().gag()===i?j.gN().gaq():h.length,p)}else a.hA(h)
q.a+="\n"
if(k)a.tq(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hy("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mm(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hy("\u2577")
else{q.hy("\u250c")
q.bj(new A.td(q),"\x1b[34m")
s=q.r
r=" "+$.ic().n5(a)
s.a+=r}q.r.a+="\n"},
hw(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gR().gag()
i=k?null:l.a.gN().gag()
if(s&&l===c){h.bj(new A.tk(h,j,a),r)
n=!0}else if(n)h.bj(new A.tl(h,l),r)
else if(k)if(g.a)h.bj(new A.tm(h),g.b)
else o.a+=" "
else h.bj(new A.tn(g,h,c,j,a,l,i),p)}},
tr(a,b){return this.hw(a,b,null)},
tp(a,b,c,d){var s=this
s.hA(B.a.A(a,0,b))
s.bj(new A.te(s,a,b,c),d)
s.hA(B.a.A(a,c,a.length))},
tq(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gR().gag()===p.gN().gag()){r.jK()
p=r.r
p.a+=" "
r.hw(a,c,b)
if(c.length!==0)p.a+=" "
r.mn(b,c,r.bj(new A.tf(r,a,b),q))}else{s=a.b
if(p.gR().gag()===s){if(B.b.F(c,b))return
A.N8(c,b)
r.jK()
p=r.r
p.a+=" "
r.hw(a,c,b)
r.bj(new A.tg(r,a,b),q)
p.a+="\n"}else if(p.gN().gag()===s){p=p.gN().gaq()
if(p===a.a.length){A.GF(c,b)
return}r.jK()
r.r.a+=" "
r.hw(a,c,b)
r.mn(b,c,r.bj(new A.th(r,!1,a,b),q))
A.GF(c,b)}}},
ml(a,b,c){var s=c?0:1,r=this.r
s=B.a.bg("\u2500",1+b+this.j1(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tn(a,b){return this.ml(a,b,!0)},
mn(a,b,c){this.r.a+="\n"
return},
hA(a){var s,r,q,p
for(s=new A.ch(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<I.E>")),q=this.r,r=r.i("I.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bg(" ",4)
else{p=A.bv(p)
q.a+=p}}},
hz(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bj(new A.to(s,this,a),"\x1b[34m")},
hy(a){return this.hz(a,null,null)},
tt(a){return this.hz(null,null,a)},
ts(a){return this.hz(null,a,null)},
jK(){return this.hz(null,null,null)},
j1(a){var s,r,q,p
for(s=new A.ch(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<I.E>")),r=r.i("I.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qx(a){var s,r,q
for(s=new A.ch(a),r=t.E,s=new A.ao(s,s.gm(0),r.i("ao<I.E>")),r=r.i("I.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pj(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bj(a,b){return this.pj(a,b,t.z)}}
A.tp.prototype={
$0(){return this.a},
$S:161}
A.t7.prototype={
$1(a){var s=a.d
return new A.am(s,new A.t6(),A.a_(s).i("am<1>")).gm(0)},
$S:244}
A.t6.prototype={
$1(a){var s=a.a
return s.gR().gag()!==s.gN().gag()},
$S:34}
A.t8.prototype={
$1(a){return a.c},
$S:164}
A.ta.prototype={
$1(a){var s=a.a.ga3()
return s==null?new A.j():s},
$S:165}
A.tb.prototype={
$2(a,b){return a.a.a0(0,b.a)},
$S:166}
A.tc.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.l([],t.dg)
for(s=J.aG(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbc()
n=A.Bq(o,p.gaK(),p.gR().gaq())
n.toString
m=B.a.hB("\n",B.a.A(o,0,n)).gm(0)
l=p.gR().gag()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga1(b).b)b.push(new A.cx(j,l,d,A.l([],q)));++l}}i=A.l([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.q)(b),++k){j=b[k]
h&1&&A.H(i,16)
B.b.rz(i,new A.t9(j),!0)
f=i.length
for(q=s.bi(c,g),p=q.$ti,q=new A.ao(q,q.gm(0),p.i("ao<Z.E>")),n=j.b,p=p.i("Z.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gR().gag()>n)break
i.push(e)}g+=i.length-f
B.b.D(j.d,i)}return b},
$S:167}
A.t9.prototype={
$1(a){return a.a.gN().gag()<this.a.b},
$S:34}
A.tq.prototype={
$1(a){return!0},
$S:34}
A.td.prototype={
$0(){this.a.r.a+=B.a.bg("\u2500",2)+">"
return null},
$S:0}
A.tk.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.tl.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.tm.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.tn.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bj(new A.ti(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gN().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bj(new A.tj(r,o),p.b)}}},
$S:2}
A.ti.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.tj.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.te.prototype={
$0(){var s=this
return s.a.hA(B.a.A(s.b,s.c,s.d))},
$S:0}
A.tf.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gR().gaq(),l=n.gN().gaq()
n=this.b.a
s=q.j1(B.a.A(n,0,m))
r=q.j1(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bg(" ",m))+B.a.bg("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:11}
A.tg.prototype={
$0(){return this.a.tn(this.b,this.c.a.gR().gaq())},
$S:0}
A.th.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bg("\u2500",3)
else r.ml(s.c,Math.max(s.d.a.gN().gaq()-1,0),!1)
return q.a.length-p.length},
$S:11}
A.to.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.wa(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bs.prototype={
l(a){var s=this.a
s="primary "+(""+s.gR().gag()+":"+s.gR().gaq()+"-"+s.gN().gag()+":"+s.gN().gaq())
return s.charCodeAt(0)==0?s:s}}
A.zE.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.Bq(o.gbc(),o.gaK(),o.gR().gaq())!=null)){s=A.na(o.gR().gar(),0,0,o.ga3())
r=o.gN().gar()
q=o.ga3()
p=A.Mt(o.gaK(),10)
o=A.x_(s,A.na(r,A.F5(o.gaK()),p,q),o.gaK(),o.gaK())}return A.K_(A.K1(A.K0(o)))},
$S:168}
A.cx.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cr.prototype={
jY(a){var s=this.a
if(!J.x(s,a.ga3()))throw A.b(A.Q('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){var s=this.a
if(!J.x(s,b.ga3()))throw A.b(A.Q('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.ga3())&&this.b===b.gar()},
gJ(a){var s=this.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.ds(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaw:1,
ga3(){return this.a},
gar(){return this.b},
gag(){return this.c},
gaq(){return this.d}}
A.nb.prototype={
jY(a){if(!J.x(this.a.a,a.ga3()))throw A.b(A.Q('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){if(!J.x(this.a.a,b.ga3()))throw A.b(A.Q('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
P(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga3())&&this.b===b.gar()},
gJ(a){var s=this.a.a
s=s==null?null:s.gJ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.ds(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ex(r)+1)+":"+(q.iK(r)+1))+">"},
$iaw:1,
$icr:1}
A.nd.prototype={
oJ(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga3(),q.ga3()))throw A.b(A.Q('Source URLs "'+A.r(q.ga3())+'" and  "'+A.r(r.ga3())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.Q("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.jY(r))throw A.b(A.Q('Text "'+s+'" must be '+q.jY(r)+" characters long.",null))}},
gR(){return this.a},
gN(){return this.b},
gaK(){return this.c}}
A.ne.prototype={
gie(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gR().gag()+1)+", column "+(p.gR().gaq()+1)
if(p.ga3()!=null){s=p.ga3()
r=$.ic()
s.toString
s=o+(" of "+r.n5(s))
o=s}o+=": "+this.a
q=p.vB(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iG:1}
A.hd.prototype={
gar(){var s=this.b
s=A.C9(s.a,s.b)
return s.b},
$ibk:1,
gfS(){return this.c}}
A.he.prototype={
ga3(){return this.gR().ga3()},
gm(a){return this.gN().gar()-this.gR().gar()},
a0(a,b){var s=this.gR().a0(0,b.gR())
return s===0?this.gN().a0(0,b.gN()):s},
vB(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.Il(s,a).vA()},
P(a,b){if(b==null)return!1
return b instanceof A.he&&this.gR().P(0,b.gR())&&this.gN().P(0,b.gN())},
gJ(a){return A.c4(this.gR(),this.gN(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.ds(s).l(0)+": from "+s.gR().l(0)+" to "+s.gN().l(0)+' "'+s.gaK()+'">'},
$iaw:1}
A.dc.prototype={
gbc(){return this.d}}
A.jr.prototype={
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
r=r!=null?" (at position "+A.r(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.c_(p,new A.x4(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iG:1}
A.x4.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.a0(a)},
$S:169}
A.kL.prototype={}
A.r8.prototype={
tb(){var s=this,r=s.d
return r==null?s.d=new A.e4(s,A.l([],t.fU),new A.rh(s),new A.ri(s),t.jy):r},
rD(){var s=this,r=s.e
return r==null?s.e=new A.e4(s,A.l([],t.lw),new A.re(s),new A.rf(s),t.lU):r},
pl(){var s=this,r=s.f
return r==null?s.f=new A.e4(s,A.l([],t.lw),new A.ra(s),new A.rb(s),t.ag):r},
tZ(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.t(A.az(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b8(m))
r=n.a
q=r.e2(s,1)
s=r.d
p=A.Dc(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.d8(new A.rj(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.BR(this,p,o,o,o)},
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
r=s.kR()
q=r!==0?A.Dg(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aE(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.t(A.A("This database has already been closed"))
r=p.b
q=r.a
s=q.e2(B.e.v(a),1)
q=q.d
r=A.Dc(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.BR(p,r,"executing",a,b)}else{s=p.io(a,!0)
try{s.e8(new A.bO(b))}finally{s.q()}}},
O(a){return this.aE(a,B.n)},
r1(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.t(A.A("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cC(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.xZ(r,p,n,o)
l=A.l([],t.lE)
k=new A.rc(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kT(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.BR(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.M(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null)l.push(new A.hg(f,e,new A.dl(!1).cX(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kT(j,r-j,0)
n=q.buffer
h=B.c.M(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null){l.push(new A.hg(f,e,""))
k.$0()
throw A.b(A.az(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.az(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
io(a,b){var s=this.r1(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.az(a,"sql","Must contain an SQL statement."))
return B.b.gH(s)},
wf(a){return this.io(a,!1)},
o8(a,b){var s,r=this.io(a,!0)
try{s=r.kM(new A.bO(b))
return s}finally{r.q()}},
o7(a){return this.o8(a,B.n)}}
A.rh.prototype={
$0(){var s=this.a,r=s.b
r.a.mE(r.b,new A.rg(s))},
$S:0}
A.rg.prototype={
$3(a,b,c){var s=A.Jn(a)
if(s==null)return
this.a.d.jW(new A.cs(s,b,c))},
$S:170}
A.ri.prototype={
$0(){var s=this.a.b
s.a.mE(s.b,null)
return null},
$S:0}
A.re.prototype={
$0(){var s=this.a,r=s.b
r.a.mD(r.b,new A.rd(s))
return null},
$S:0}
A.rd.prototype={
$0(){this.a.e.jW(null)},
$S:0}
A.rf.prototype={
$0(){var s=this.a.b
s.a.mD(s.b,null)
return null},
$S:0}
A.ra.prototype={
$0(){var s=this.a,r=s.b
r.a.mC(r.b,new A.r9(s))
return null},
$S:0}
A.r9.prototype={
$0(){var s=this.a.f
s.jW(null)
return 0},
$S:11}
A.rb.prototype={
$0(){var s=this.a.b
s.a.mC(s.b,null)
return null},
$S:0}
A.rj.prototype={
$2(a,b){A.L0(a,this.a,b)},
$S:171}
A.rc.prototype={
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
A.nU.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.J6(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.J8(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.Q("The argument list is unmodifiable",null))},
$ix1:1}
A.e4.prototype={
gcT(){var s=this.r
return s==null?this.r=this.q9(!1):s},
q9(a){return new A.dk(new A.Aj(this,!1),this.$ti.i("dk<1>"))},
jW(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.t(o.bF())
if((n&1)!==0)o.gaL().aA(a)}else{n=o.b
if(n>=4)A.t(o.bF())
if((n&1)!==0)o.cv(a)
else if((n&3)===0){n=o.h3()
o=new A.c9(a,o.$ti.i("c9<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sej(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.Aj.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.Ak(q,a,s)
a.r=a.e=new A.Al(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dL<1>)")}}
A.Ak.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.k5(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.Al.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,new A.k5(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.x0.prototype={
mT(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.Jm(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
w2(a,b){var s,r,q,p,o,n,m,l,k,j
this.mT()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e2(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e2(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d5(r.b.buffer,0,null)[B.c.af(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.xS(r,l,o)
r=r.r
if(r!=null)r.mv(k,l,o)
if(m!==0){j=A.Dg(s,k,m,"opening the database",null,null)
k.kR()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.r8(s,k,!1)}}
A.hg.prototype={
gpk(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.l([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.o3(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dl(!1).cX(o,0,null,!0))}return q},
gt3(){return null},
bB(a,b){A.BR(this.b,a,b,this.d,this.e)},
lt(){if(this.r||this.b.r)throw A.b(A.A(u.f))},
h5(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dn()
if(s!==0?s!==101:q)r.bB(s,"executing statement")},
rM(){var s,r,q,p,o,n,m=this,l=A.l([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.ro(o))
l.push(p)}m.dn()
if(p!==0?p!==101:k)m.bB(p,"selecting from statement")
n=m.gpk()
m.gt3()
k=new A.mY(l,n,B.al)
k.pe()
return k},
ro(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.aq(r.Number(s)):A.F0(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.om(a)
case 4:return s.kS(a)
case 5:default:return null}},
p7(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.t(A.az(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.p8(a[s-1],s)
this.e=a},
p8(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.av(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aK){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.DL(a).l(0)))
break A}if(A.by(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.ol(b,a)
break A}if(t.L.b(a)){s=q.a.oj(b,a)
break A}s=q.p6(a,b)
break A}if(s!==0)q.bB(s,"binding parameter")},
p6(a,b){throw A.b(A.az(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eB(a){A:{if(a instanceof A.bO){this.p7(a.a)
break A}if(a instanceof A.lm)a.a.$1(this)}},
dn(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
q(){var s,r,q=this
if(!q.r){q.r=!0
q.dn()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.mH(s.d)}},
kM(a){var s=this
s.lt()
s.dn()
s.eB(a)
return s.rM()},
e8(a){var s=this
s.lt()
s.dn()
s.eB(a)
s.h5()}}
A.m1.prototype={
iF(a,b){return this.d.I(a)?1:0},
kF(a,b){this.d.G(0,a)},
kG(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r=a.a
if(r==null)r=A.E7(this.b,"/")
s=this.d
if(!s.I(r))if((b&4)!==0)s.j(0,r,new A.cw(new Uint8Array(0),0))
else throw A.b(A.hr(14))
return new A.hN(new A.ou(this,r,(b&8)!==0),0)},
kI(a){}}
A.ou.prototype={
na(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ah(a,0,s,J.bL(B.f.gab(r.a),0,r.b),b)
return s},
kE(){return this.d>=2?1:0},
iG(){if(this.c)this.a.d.G(0,this.b)},
fJ(){return this.a.d.h(0,this.b).b},
kH(a){this.d=a},
kJ(a){},
fK(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cw(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kK(a){this.d=a},
ew(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cw(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.av(0,b,s,a)}}
A.BF.prototype={
$1(a){return a.length!==0},
$S:10}
A.qO.prototype={
pe(){var s,r,q,p,o=A.v(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o.j(0,p,B.b.dg(s,p))}this.c=o}}
A.mY.prototype={
gu(a){return new A.A2(this)},
h(a,b){return new A.c5(this,A.fN(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iK:1,
$io:1,
$ip:1}
A.c5.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.av(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gK(){return this.a.a},
gaX(){return this.b},
$iJ:1}
A.A2.prototype={
gn(){var s=this.a
return new A.c5(s,A.fN(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.oK.prototype={}
A.oL.prototype={}
A.oN.prototype={}
A.oO.prototype={}
A.vt.prototype={
a4(){return"OpenMode."+this.b}}
A.ej.prototype={}
A.bO.prototype={}
A.lm.prototype={}
A.dg.prototype={
l(a){return"VfsException("+this.a+")"},
$iG:1}
A.jq.prototype={}
A.b5.prototype={}
A.l1.prototype={}
A.l0.prototype={
giH(){return 0},
nr(a,b){return 12},
giJ(){return 4096},
iI(a,b){var s=this.na(a,b),r=a.length
if(s<r){B.f.k6(a,s,r,0)
throw A.b(B.dT)}},
$ibq:1,
$ijA:1}
A.eU.prototype={}
A.BQ.prototype={
$0(){var s,r,q
for(s=this.a;!s.gE(0);){if(s.b===0)A.t(A.A("No such element"))
r=s.c
q=r.a
q.toString
q.jG(A.n(r).i("b3.E").a(r))
r.d.$0()}},
$S:0}
A.BO.prototype={
$1(a){var s=this.a,r=s.b
s.hd(s.c,new A.eU(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:18}
A.BP.prototype={
$4(a,b,c,d){this.a.$1(c.eZ(d))},
$S:173}
A.xX.prototype={}
A.xS.prototype={
kR(){var s=this.a,r=s.r
if(r!=null)r.mH(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.xZ.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kT(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.Dc(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d5(o.b.buffer,0,null)[B.c.af(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.xY(s,o,n)
o=o.w
if(o!=null)o.mv(r,s,n)}return new A.oI(r,p)}}
A.xY.prototype={
oj(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cC(b),J.as(b))},
ol(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cC(s),s.length)},
kS(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.EQ(s.b,q.sqlite3_column_blob(r,a),p)},
om(a){var s=this.c
return A.dX(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dV.prototype={$iCw:1}
A.dh.prototype={$iCx:1}
A.ht.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.dh(s,A.d5(s.b.buffer,0,null)[B.c.af(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lp.prototype={
vT(a){var s,r,q=this.b
q===$&&A.u()
s="[sqlite3] "+A.dX(q,a,null)
r=$.Lx
if(r==null)A.GB(s)
else r.$1(s)},
vR(a,b){var s,r=new A.aO(A.lt(A.aq(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.u()
s=A.En(q.buffer,b,8)
s.$flags&2&&A.H(s)
s[0]=A.Cu(r)
s[1]=A.Cs(r)
s[2]=A.Cr(r)
s[3]=A.w2(r)
s[4]=A.Ct(r)-1
s[5]=A.Cv(r)-1900
s[6]=B.c.ak(A.IZ(r),7)},
xL(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.u()
s=new A.jq(A.CN(j,b,k))
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
return m}catch(l){p=A.D(l)
if(p instanceof A.dg){q=p
p=q.a
j=A.d5(j.buffer,0,k)
o=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[o]=p}else{j=j.buffer
j=A.d5(j,0,k)
p=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[p]=1}}return k},
xA(a,b,c){var s=this.b
s===$&&A.u()
return A.bX(new A.qU(a,A.dX(s,b,null),c))},
xs(a,b,c,d){var s=this.b
s===$&&A.u()
return A.bX(new A.qR(this,a,A.dX(s,b,null),c,d))},
xH(a,b,c,d){var s=this.b
s===$&&A.u()
return A.bX(new A.qW(this,a,A.dX(s,b,null),c,d))},
xN(a,b,c){return A.bX(new A.qY(this,c,b,a))},
xS(a,b){return A.bX(new A.r_(a,b))},
xy(a,b){var s,r=Date.now(),q=this.b
q===$&&A.u()
s=v.G.BigInt(r)
A.Ci(A.Em(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xw(a){return A.bX(new A.qT(a))},
xP(a,b,c,d){return A.bX(new A.qZ(this,a,b,c,d))},
y_(a,b,c,d){return A.bX(new A.r3(this,a,b,c,d))},
xW(a,b){return A.bX(new A.r1(a,b))},
xU(a,b){return A.bX(new A.r0(a,b))},
xF(a,b){return A.bX(new A.qV(this,a,b))},
xJ(a,b){return A.bX(new A.qX(a,b))},
xY(a,b){return A.bX(new A.r2(a,b))},
xu(a,b){return A.bX(new A.qS(this,a,b))},
xB(a){return a.giH()},
xD(a,b,c){if(t.j2.b(a))return a.nr(b,c)
return 12},
xQ(a){if(t.j2.b(a))return a.giJ()
return 4096},
ur(a){a.$0()},
ul(a){return a.$0()},
uo(a,b,c,d,e){var s=this.b
s===$&&A.u()
a.$3(b,A.dX(s,d,null),A.aq(v.G.Number(e)))},
ux(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.u()
r.$2(new A.dV(s,b),new A.ht(s,c,d))},
uB(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.u()
r.$2(new A.dV(s,b),new A.ht(s,c,d))},
uz(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.u()
null.$2(new A.dV(s,b),new A.ht(s,c,d))},
uD(a,b){var s
null.toString
s=this.a
s===$&&A.u()
null.$1(new A.dV(s,b))},
uv(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.u()
r.$1(new A.dV(s,b))},
ut(a,b,c,d,e){var s=this.b
s===$&&A.u()
return null.$2(A.CN(s,c,b),A.CN(s,e,d))},
uj(a,b){return a.$1(b)},
uh(a,b){return a.gy5().$1(b)},
uf(a,b,c){return a.gy4().$2(b,c)}}
A.qU.prototype={
$0(){return this.a.kF(this.b,this.c)},
$S:0}
A.qR.prototype={
$0(){var s,r=this,q=r.b.iF(r.c,r.d),p=r.a.b
p===$&&A.u()
p=A.d5(p.buffer,0,null)
s=B.c.af(r.e,2)
p.$flags&2&&A.H(p)
p[s]=q},
$S:0}
A.qW.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kG(q.c)),o=p.length
if(o>q.d)throw A.b(A.hr(14))
s=q.a.b
s===$&&A.u()
s=A.bS(s.buffer,0,null)
r=q.e
B.f.cR(s,r,p)
s.$flags&2&&A.H(s)
s[r+o]=0},
$S:0}
A.qY.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.u()
s=A.bS(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.DJ(s,q.b)
else return A.DJ(s,null)},
$S:0}
A.r_.prototype={
$0(){this.a.kI(A.d_(this.b,0,0))},
$S:0}
A.qT.prototype={
$0(){return this.a.iG()},
$S:0}
A.qZ.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.u()
s.b.iI(A.bS(r.buffer,s.c,s.d),A.aq(v.G.Number(s.e)))},
$S:0}
A.r3.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.u()
s.b.ew(A.bS(r.buffer,s.c,s.d),A.aq(v.G.Number(s.e)))},
$S:0}
A.r1.prototype={
$0(){return this.a.fK(A.aq(v.G.Number(this.b)))},
$S:0}
A.r0.prototype={
$0(){return this.a.kJ(this.b)},
$S:0}
A.qV.prototype={
$0(){var s,r=this.b.fJ(),q=this.a.b
q===$&&A.u()
q=A.d5(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.qX.prototype={
$0(){return this.a.kH(this.b)},
$S:0}
A.r2.prototype={
$0(){return this.a.kK(this.b)},
$S:0}
A.qS.prototype={
$0(){var s,r=this.b.kE(),q=this.a.b
q===$&&A.u()
q=A.d5(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.d8.prototype={}
A.ih.prototype={
aa(a,b,c,d){var s,r=null,q={},p=A.bf(A.Ci(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.x7(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.pE(q,this,p,o)
o.d=s
o.f=new A.pF(q,o,s)
return new A.b6(o,A.n(o).i("b6<1>")).aa(a,b,c,d)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.pE.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a5(q,t.m).bq(new A.pG(p,r.b,s,r),s.gty(),t.P)},
$S:0}
A.pG.prototype={
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
A.pF.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaL().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eY.prototype={
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
o=new A.w($.C,t.g5)
s=new A.ap(o,t.ex)
r=p.d
q=t.m
p.b=A.br(r,"success",new A.z6(p,s),!1,q)
p.c=A.br(r,"error",new A.z7(p,s),!1,q)
return o}}
A.z6.prototype={
$1(a){var s,r=this.a
r.C()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.z7.prototype={
$1(a){var s=this.a
s.C()
s=s.d.error
if(s==null)s=a
this.b.aS(s)},
$S:1}
A.qr.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qs.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qw.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qx.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qy.prototype={
$1(a){this.a.aS(new A.bm("IndexedDB open blocked"))},
$S:1}
A.rM.prototype={
$1(a){return A.bf(a[1])},
$S:195}
A.xT.prototype={
u_(){var s={}
s.dart=new A.xU(this).$0()
return s},
ib(a){return this.vN(a)},
vN(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$ib=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(v.G.WebAssembly.instantiateStreaming(a,p.u_()),t.m),$async$ib)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ib,r)}}
A.xU.prototype={
$0(){var s=this.a.a,r=A.bf(v.G.Object),q=A.bf(r.create.apply(r,[null]))
q.error_log=A.cX(s.gvS())
q.localtime=A.bV(s.gvQ())
q.xOpen=A.D5(s.gxK())
q.xDelete=A.pc(s.gxz())
q.xAccess=A.i_(s.gxq())
q.xFullPathname=A.i_(s.gxG())
q.xRandomness=A.pc(s.gxM())
q.xSleep=A.bV(s.gxR())
q.xCurrentTimeInt64=A.bV(s.gxx())
q.xClose=A.cX(s.gxv())
q.xRead=A.i_(s.gxO())
q.xWrite=A.i_(s.gxZ())
q.xTruncate=A.bV(s.gxV())
q.xSync=A.bV(s.gxT())
q.xFileSize=A.bV(s.gxE())
q.xLock=A.bV(s.gxI())
q.xUnlock=A.bV(s.gxX())
q.xCheckReservedLock=A.bV(s.gxt())
q.xDeviceCharacteristics=A.cX(s.giH())
q.xFileControl=A.pc(s.gxC())
q.xSectorSize=A.cX(s.giJ())
q["dispatch_()v"]=A.cX(s.guq())
q["dispatch_()i"]=A.cX(s.guk())
q.dispatch_update=A.D5(s.gun())
q.dispatch_xFunc=A.i_(s.guw())
q.dispatch_xStep=A.i_(s.guA())
q.dispatch_xInverse=A.i_(s.guy())
q.dispatch_xValue=A.bV(s.guC())
q.dispatch_xFinal=A.bV(s.guu())
q.dispatch_compare=A.D5(s.gus())
q.dispatch_busy=A.bV(s.gui())
q.changeset_apply_filter=A.bV(s.gug())
q.changeset_apply_conflict=A.pc(s.gue())
return q},
$S:36}
A.hs.prototype={}
A.pH.prototype={
ij(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ij=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cX(new A.pK(o))
new A.ap(p,t.h1).aB(A.HX(o,t.m))
s=2
return A.a(p,$async$ij)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$ij,r)},
dY(a,b){return this.rF(a,b)},
rF(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Hq(),b)
o=A.K2(p)
s=2
return A.a(A.N9(new A.pJ(a,o,p),t.mj),$async$dY)
case 2:s=3
return A.a(o.b.a,$async$dY)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dY,r)},
r_(a){return this.dY(new A.pI(a),"readwrite")}}
A.pK.prototype={
$1(a){var s=A.bf(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:16}
A.pJ.prototype={
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
A.pI.prototype={
$1(a){return this.ns(a)},
ns(a){var s=0,r=A.h(t.H),q=this,p,o,n
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
A.jW.prototype={
oN(a){var s=A.B_(new A.zH(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.B_(new A.zI(this))},
jt(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.l([a,c],s),A.l([a,b],s))},
rl(a){return this.jt(a,9007199254740992,0)},
rm(a,b){return this.jt(a,9007199254740992,b)},
ia(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$ia=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.v(t.N,t.S)
k=new A.eY(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$ia)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.t(A.A("Await moveNext() first"))
n=o.key
n.toString
A.F(n)
m=o.primaryKey
m.toString
l.j(0,n,A.aq(A.f7(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ia,r)},
hU(a){return this.v1(a)},
v1(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$hU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cE(p.d.index("fileName").getKey(a),t.W),$async$hU)
case 3:q=o.aq(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hU,r)},
ju(a){return A.cE(this.d.get(a),t.B).V(new A.zG(a),t.m)},
ey(a,b){return this.on(a,b)},
on(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ey=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ju(a),$async$ey)
case 3:h=d
g=h.length
f=new A.cw(new Uint8Array(g),g)
e=new A.eY(p.e.openCursor(p.rl(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$ey)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.t(A.A("Await moveNext() first"))
k=n.a(l.key)
j=A.aq(A.f7(k[1]))
if(j>=h.length){s=5
break}i=new A.zJ(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.wJ(A.bf(l.value)).V(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ey,r)},
hL(a){return this.tX(a)},
tX(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.t(A.A("IDB transaction already completed"))
o=A
s=3
return A.a(A.cE(p.d.put({name:a,length:0}),t.W),$async$hL)
case 3:q=o.aq(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hL,r)},
aZ(a,b){return this.xj(a,b)},
xj(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$aZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.A("IDB transaction already completed"))
s=2
return A.a(q.ju(a),$async$aZ)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.R(new A.T(o,n),n.i("o.E"))
B.b.aF(m)
s=3
return A.a(A.Cc(new A.X(m,new A.zK(new A.zL(q,a),b),A.a_(m).i("X<1,y<~>>")),t.H),$async$aZ)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eY(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$aZ)
case 6:s=7
return A.a(A.cE(l.gn().update({name:p.name,length:b.c}),t.X),$async$aZ)
case 7:case 5:return A.e(null,r)}})
return A.f($async$aZ,r)},
ds(a,b,c){return this.wV(0,b,c)},
wV(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ds=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.A("IDB transaction already completed"))
s=2
return A.a(q.ju(b),$async$ds)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cE(q.e.delete(q.rm(b,B.c.M(c,4096)*4096)),t.X),$async$ds)
case 5:case 4:o=new A.eY(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$ds)
case 6:s=7
return A.a(A.cE(o.gn().update({name:p.name,length:c}),t.X),$async$ds)
case 7:return A.e(null,r)}})
return A.f($async$ds,r)},
hP(a){return this.uc(a)},
uc(a){var s=0,r=A.h(t.H),q=this,p
var $async$hP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.A("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.Cc(A.l([A.cE(q.e.delete(q.jt(a,9007199254740992,0)),p),A.cE(q.d.delete(a),p)],t.iw),t.H),$async$hP)
case 2:return A.e(null,r)}})
return A.f($async$hP,r)}}
A.zH.prototype={
$0(){this.a.b.an()},
$S:2}
A.zI.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aS(r)},
$S:2}
A.zG.prototype={
$1(a){if(a==null)throw A.b(A.az(this.a,"fileId","File not found in database"))
else return a},
$S:198}
A.zJ.prototype={
$1(a){var s=this.a
s.cR(s,this.b,J.bL(a,0,this.c))},
$S:199}
A.zL.prototype={
o0(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cE(p.openCursor(v.G.IDBKeyRange.only(A.l([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gab(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cE(p.put(l,A.l([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cE(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.o0(a,b)},
$S:200}
A.zK.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:201}
A.zi.prototype={
ta(a,b,c){B.f.cR(this.b.n8(a,new A.zj(this,a)),b,c)},
tC(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.M(q,4096)
o=B.c.ak(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.ta(p*4096,o,J.bL(B.f.gab(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.zj.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cR(s,0,J.bL(B.f.gab(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:202}
A.oD.prototype={}
A.dD.prototype={
eW(a){var s=this
if(s.e||s.d.a==null)A.t(A.hr(10))
if(a.kf(s.x)){s.cz(!0)
return a.d.a}else return A.ba(null,t.H)},
cz(a){return this.t0(a)},
t0(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gE(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.R(o,o.$ti.i("o.E"))
o.am(0)
s=5
return A.a(p.d.r_(n).aY(new A.tt(p,n,a)),$async$cz)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cz,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eW(new A.jU(new A.tu(),new A.ap(new A.w($.C,t.D),t.F)))
p.e=!0
p.cz(!1)
q=o
s=1
break}else{n=p.x
if(!n.gE(0)){q=n.ga1(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dJ(a,b){return this.q5(a,b)},
q5(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
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
return A.a(a.hU(b),$async$dJ)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dJ,r)},
eP(){var s=0,r=A.h(t.H),q=this,p
var $async$eP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.l([],t.iw)
s=2
return A.a(q.d.dY(new A.ts(q,p),"readonly"),$async$eP)
case 2:s=3
return A.a(A.Ii(p,t.H),$async$eP)
case 3:return A.e(null,r)}})
return A.f($async$eP,r)},
cG(){return this.cz(!1)},
iF(a,b){return this.w.d.I(a)?1:0},
kF(a,b){var s=this
s.w.d.G(0,a)
if(!s.y.G(0,a))s.eW(new A.jO(s,a,new A.ap(new A.w($.C,t.D),t.F)))},
kG(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.E7(p.b,"/")
s=p.w
r=s.d.I(o)?1:0
q=s.du(new A.jq(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.eW(new A.hC(p,o,new A.ap(new A.w($.C,t.D),t.F)))
return new A.hN(new A.ov(p,q.a,o),0)},
kI(a){}}
A.tt.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.t(A.A("Future already completed"))
p.cp(null)}o.cz(this.c)},
$S:2}
A.tu.prototype={
$1(a){return this.nz(a)},
nz(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.ts.prototype={
$1(a){return this.ny(a)},
ny(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ia(),$async$$1)
case 2:m=c
l=q.a
l.z.D(0,m)
p=m.ga7(),p=p.gu(p),o=q.b,l=l.w.d
case 3:if(!p.k()){s=4
break}n=p.gn()
k=l
j=n.a
s=5
return A.a(a.ey(n.b,o),$async$$1)
case 5:k.j(0,j,c)
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.ov.prototype={
iI(a,b){this.b.iI(a,b)},
giH(){return 0},
giJ(){return 4096},
kE(){return this.b.d>=2?1:0},
iG(){},
fJ(){return this.b.fJ()},
kH(a){this.b.d=a
return null},
kJ(a){},
nr(a,b){return 12},
fK(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.t(A.hr(10))
s.b.fK(a)
if(!r.y.F(0,s.c))r.eW(new A.jU(new A.zF(s,a),new A.ap(new A.w($.C,t.D),t.F)))},
kK(a){this.b.d=a
return null},
ew(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.t(A.hr(10))
s=m.c
if(l.y.F(0,s)){m.b.ew(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cw(new Uint8Array(0),0)
q=J.bL(B.f.gab(r.a),0,r.b)
m.b.ew(a,b)
p=new Uint8Array(a.length)
B.f.cR(p,0,a)
o=A.l([],t.p8)
n=$.C
o.push(new A.oD(b,p))
l.eW(new A.hW(l,s,q,o,new A.ap(new A.w(n,t.D),t.F)))},
$ibq:1,
$ijA:1}
A.zF.prototype={
$1(a){return this.o_(a)},
o_(a){var s=0,r=A.h(t.H),q,p=this,o,n
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
A.b7.prototype={
kf(a){a.hd(a.c,this,!1)
return!0}}
A.jU.prototype={
aU(a){return this.w.$1(a)}}
A.jO.prototype={
kf(a){var s,r,q,p
if(!a.gE(0)){s=a.ga1(0)
for(r=this.x;s!=null;)if(s instanceof A.jO)if(s.x===r)return!1
else s=s.gfq()
else if(s instanceof A.hW){q=s.gfq()
if(s.x===r){p=s.a
p.toString
p.jG(A.n(s).i("b3.E").a(s))}s=q}else if(s instanceof A.hC){if(s.x===r){r=s.a
r.toString
r.jG(A.n(s).i("b3.E").a(s))
return!1}s=s.gfq()}else break}a.hd(a.c,this,!1)
return!0},
aU(a){return this.wN(a)},
wN(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dJ(a,o),$async$aU)
case 2:n=c
p.z.G(0,o)
s=3
return A.a(a.hP(n),$async$aU)
case 3:return A.e(null,r)}})
return A.f($async$aU,r)}}
A.hC.prototype={
aU(a){return this.wM(a)},
wM(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hL(p),$async$aU)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aU,r)}}
A.hW.prototype={
kf(a){var s,r=a.b===0?null:a.ga1(0)
for(s=this.x;r!=null;)if(r instanceof A.hW)if(r.x===s){B.b.D(r.z,this.z)
return!1}else r=r.gfq()
else if(r instanceof A.hC){if(r.x===s)break
r=r.gfq()}else break
a.hd(a.c,this,!1)
return!0},
aU(a){return this.wO(a)},
wO(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.zi(m,A.v(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.q)(m),++o){n=m[o]
l.tC(n.a,n.b)}k=a
s=3
return A.a(q.w.dJ(a,q.x),$async$aU)
case 3:s=2
return A.a(k.aZ(c,l),$async$aU)
case 2:return A.e(null,r)}})
return A.f($async$aU,r)}}
A.fH.prototype={
a4(){return"FileType."+this.b}}
A.hc.prototype={
bM(){var s=this.d
if(s!=null)return s
throw A.b(A.A("VFS closed"))},
iF(a,b){var s=$.BV().h(0,a)
if(s==null)return this.e.d.I(a)?1:0
else return this.bM().bo(s)?1:0},
kF(a,b){var s=$.BV().h(0,a)
if(s==null){this.e.d.G(0,a)
return null}else this.bM().fk(s,!1)},
kG(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.du(a,b)
s=$.BV().h(0,p)
if(s==null)return q.e.du(a,b)
r=q.bM()
if(!r.bo(s))if((b&4)!==0){r.dd(s).truncate(0)
r.fk(s,!0)}else throw A.b(B.dS)
return new A.hN(new A.oT(q,s,(b&8)!==0),0)},
kI(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cL(a,b){return this.w4(a,b)},
cK(a){return this.cL(a,!1)},
w4(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.wY(a,b)
s=2
return A.a(m.$1("meta"),$async$cL)
case 2:l=d
k=J.x(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cL)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cL)
case 4:o=d
n=q.d=new A.zZ(new Uint8Array(2),l,p,o)
if(k){n.fk(B.b0,p.getSize()>0)
n.fk(B.b1,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cL,r)}}
A.wY.prototype={
nW(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.nW(a)},
$S:203}
A.oT.prototype={
na(a,b){return A.E4(this.a.bM().dd(this.b),a,{at:b})},
kE(){return this.d>=2?1:0},
iG(){var s=this.a,r=this.b
s.bM().dd(r).flush()
if(this.c)s.bM().fk(r,!1)},
fJ(){return this.a.bM().dd(this.b).getSize()},
kH(a){this.d=a},
kJ(a){this.a.bM().dd(this.b).flush()},
fK(a){this.a.bM().dd(this.b).truncate(a)},
kK(a){this.d=a},
ew(a,b){if(A.E5(this.a.bM().dd(this.b),a,{at:b})<a.length)throw A.b(B.dU)}}
A.zZ.prototype={
bo(a){var s=this.a
A.E4(this.b,s,{at:0})
return s[a.a]!==0},
fk(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.H(s)
s[a.a]=r
A.E5(this.b,s,{at:0})},
dd(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.xN.prototype={
oK(a,b){var s=this,r=s.c
r.a!==$&&A.ce()
r.a=s
r=t.S
A.zk(new A.xO(s),r)
A.zk(new A.xP(s),r)
s.r=A.zk(new A.xQ(s),r)
s.w=A.zk(new A.xR(s),r)},
e2(a,b){var s=J.L(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bS(this.b.buffer,0,null)
B.f.av(q,r,r+s.gm(a),a)
B.f.k6(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cC(a){return this.e2(a,0)},
mE(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mC(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mD(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.xO.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:9}
A.xP.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:9}
A.xQ.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:9}
A.xR.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:9}
A.iq.prototype={}
A.w5.prototype={
oH(a){var s,r=this,q=r.a
q.start()
r.c=A.br(q,"message",new A.w9(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kF()
q.toString
A.jC(q,s,null,null,!1).V(new A.wa(r),t.P)}},
ji(a){return this.qg(a)},
qg(a){var s=0,r=A.h(t.H),q=this
var $async$ji=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.My(a,new A.w6(q),q.gvq(),new A.w7(q),new A.w8(q))
return A.e(null,r)}})
return A.f($async$ji,r)},
fQ(a,b,c){return this.oe(a,b,c,c)},
oe(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fQ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.HN(null))
o=p.e++
n=new A.w($.C,t.a7)
p.f.j(0,o,new A.ap(n,t.h1))
a.i=o
p.a.postMessage(a,A.i4(a))
s=3
return A.a(n,$async$fQ)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.Ja(m))
case 1:return A.e(q,r)}})
return A.f($async$fQ,r)},
qz(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.C()
s=q.d
if(s!=null)s.C()
for(s=q.f,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();)r.d.aS(new A.io(a))
s.am(0)
p.an()},
lM(){return this.qz(null)}}
A.w9.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lM()
return}this.a.ji(A.bf(a.data))},
$S:1}
A.wa.prototype={
$1(a){this.a.lM()
a.a.an()},
$S:204}
A.w8.prototype={
$1(a){var s=this.a.f.G(0,a.i)
if(s!=null)s.aB(a)},
$S:16}
A.w7.prototype={
$1(a){return this.nP(a)},
nP(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.um(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bx(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.D(a0)
k=A.ad(a0)
if(!(l instanceof A.dt)){b.console.error("Error in worker: "+J.a0(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.c6){h=A.Ia(b)
g=0}else{g=b instanceof A.dt?1:null
h=null}f={e:J.a0(b),s:g,r:h,i:e,t:"errorResponse"}
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
A.w6.prototype={
$1(a){var s=this.a.r.G(0,a.i)
if(s!=null)s.abort()},
$S:16}
A.io.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iG:1}
A.r6.prototype={
cf(a){return this.vO(a)},
vO(a){var s=0,r=A.h(t.n),q
var $async$cf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.xW(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cf,r)}}
A.ll.prototype={}
A.qP.prototype={}
A.eS.prototype={}
A.lE.prototype={
ic(){var s=0,r=A.h(t.H),q=this
var $async$ic=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cK(q.b),$async$ic)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ic,r)},
ks(){var s=0,r=A.h(t.H),q=this
var $async$ks=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$ks,r)}}
A.t3.prototype={
wQ(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
qa(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.y2.prototype={
$1(a){var s=new A.w($.C,t.D),r=new A.d0(new A.ap(s,t.F))
this.a.a=r
this.b.aB(r)
return A.Ij(s)},
$S:206}
A.y3.prototype={
$2(a,b){var s,r,q
A.bf(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.bQ(new A.dt("Operation was cancelled"),b)
else q.bQ(a,b)}return null},
$S:207}
A.d0.prototype={}
A.lq.prototype={
gtO(){if(this.c.a)return!1
return!this.d||this.f!=null},
dD(a){return this.oR(a)},
oR(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dD=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kF()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jC(n,o.a,null,o.gqk(),!0),$async$dD)
case 6:m=c
s=7
return A.a(A.jC(n,o.b,a,null,!1),$async$dD)
case 7:l=c
j=o.e
j=j==null?null:j.ic()
s=8
return A.a(j instanceof A.w?j:A.bx(j,t.H),$async$dD)
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
return A.f($async$dD,r)},
ql(){this.nc()},
kk(a,b,c){return this.c.iB(new A.rl(this,a,b,c),b,c)},
nc(){return this.c.kD(new A.rm(this),t.H)}}
A.rl.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dD(r.c).V(new A.rk(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rk.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rm.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.ks()
s.a.an()
r.a.an()
p.f=null}},
$S:2}
A.j4.prototype={
iB(a,b,c){return this.xi(a,b,c,c)},
kD(a,b){return this.iB(a,null,b)},
xi(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iB=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.vl(h,p)
if(!p.a){h.a=p.a=!0
q=A.iD(a,c).aY(o)
s=1
break}else{n={}
m=new A.w($.C,c.i("w<0>"))
l=new A.ap(m,c.i("ap<0>"))
n.a=null
h=new A.vk(h,n,l,a,c)
if(!g)n.a=A.br(b,"abort",new A.vj(n,p,l,h),!1,t.m)
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
q=m.aY(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iB,r)}}
A.vl.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gE(0)){s=r.b
if(s===r.c)A.t(A.aD());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.vk.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.C()
r.c.aB(A.iD(r.d,r.e))},
$S:0}
A.vj.prototype={
$1(a){var s,r=this
r.a.a.C()
s=r.c
if((s.a.a&30)===0){r.b.b.G(0,r.d)
s.aS(B.ap)}},
$S:1}
A.ek.prototype={
gni(){var s,r,q,p,o,n=this,m=t.s,l=A.l([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
B.b.D(l,A.l([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.rC.prototype={
$1(a){if(a!=null)return A.F(a)
return null},
$S:208}
A.mm.prototype={
a4(){return"MessageType."+this.b}}
A.wM.prototype={
um(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.i_(a,b)
case"connect":return p.k9(a,b)
case"custom":return p.eb(a,b)
case"fileSystemExists":return p.fd(a,b)
case"fileSystemFlush":return p.fe(a,b)
case"fileSystemAccess":return p.fc(a,b)
case"runQuery":return p.i3(a,b)
case"exclusiveLock":return p.hZ(a,b)
case"releaseLock":s=p.bv(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.t(A.A("Lock to be released is not active."))
q.b.an()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hX(a,b)
case"openAdditionalConnection":return p.i0(a,b)
case"updateRequest":return p.i4(a,b)
case"rollbackRequest":return p.i2(a,b)
case"commitRequest":return p.hY(a,b)
case"dedicatedCompatibilityCheck":return p.dL(a,b)
case"sharedCompatibilityCheck":return p.dL(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dL(a,b)
default:r=A.f8(new A.bB(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.w($.C,t.hl)
q.co(r)
return q}}}
A.dz.prototype={
a4(){return"FileSystemImplementation."+this.b}}
A.cv.prototype={
a4(){return"TypeCode."+this.b},
u3(a){var s=null
switch(this.a){case 0:s=A.t(A.Q("Unsupported type code",null))
break
case 1:a=A.aq(A.f7(a))
s=a
break
case 2:s=A.F0(t.bJ.a(a).toString(),null)
break
case 3:A.f7(a)
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
A.el.prototype={
mw(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.Q("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aE:B.b4[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.aq(A.f7(h))))
if(k!==0)a.bB(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bB(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.f7(h))
if(k!==0)a.bB(k,e)
break
case 4:g=B.e.v(A.F(h))
k=s.dart_sqlite3_bind_text(d,i,c.cC(g),g.length)
if(k!==0)a.bB(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cC(h),h.length)
if(k!==0)a.bB(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bB(k,e)
break
case 7:f=A.hY(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bB(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.mj()},
h(a,b){var s=this.c[b],r=s>=8?B.aE:B.b4[s]
return r.u3(this.a[b])},
j(a,b,c){this.mj()},
mj(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.Be.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:16}
A.qp.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qq.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qt.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qu.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.qv.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aS(s)},
$S:1}
A.w1.prototype={
uF(){var s,r,q,p
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
A.iB.prototype={
a4(){return"FileType."+this.b}}
A.dP.prototype={
a4(){return"StorageMode."+this.b}}
A.h5.prototype={
l(a){return"Remote error: "+this.a},
$iG:1}
A.dt.prototype={}
A.AZ.prototype={
$1(a){return A.bf(a.data)},
$S:210}
A.k9.prototype={
C(){var s=this.a
if(s!=null)s.C()
this.a=null}}
A.hB.prototype={
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
mb(a){var s=new v.G.AbortController()
a.onabort=A.B_(new A.yY(s))
this.w.push(s)
return s},
kB(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gtO()){r=p.mb(b)
o=s.kk(c,r.signal,d).aY(new A.z1(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.A("Requested operation on inactive lock state."))}if(o==null)o=A.iD(c,d)
q=p.a.z
return q instanceof A.dD?o.aY(q.gv4()):o},
w1(a){var s=this,r=s.mb(a),q=new A.w($.C,t.hy),p=new A.aI(q,t.ho),o=t.H
A.Cb(s.a.f.kk(new A.yZ(s,p),r.signal,o),new A.z_(p),o,t.K)
return q.aY(new A.z0(s,r))}}
A.yY.prototype={
$0(){return this.a.abort()},
$S:0}
A.z1.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.yZ.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.C,t.D)
s.f=new A.a4(r,new A.aI(q,t.h))
this.b.aB(r)
return q},
$S:3}
A.z_.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.bQ(a,b)},
$S:7}
A.z0.prototype={
$0(){B.b.G(this.a.w,this.b)},
$S:2}
A.hz.prototype={
oM(a,b,c){this.b.a.aY(new A.yI(this))},
dL(a,b){return this.qb(a,b)},
qb(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dL=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.my(a),$async$dL)
case 3:q={r:d.gni(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dL,r)},
k9(a,b){return this.vd(a,b)},
vd(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$k9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glF()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.i4(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$k9,r)},
eb(a,b){return this.ve(a,b)},
ve(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$eb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lo(l)
n=a.r
s=7
return A.a(o.a.gci(),$async$eb)
case 7:s=6
return A.a(d.cH(p,new A.qP(n)),$async$eb)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cH(p,new A.ll(a)),$async$eb)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eb,r)},
i_(a,b){return this.vs(a,b)},
vs(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$i_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kD(new A.yN(p,a),t.m),$async$i_)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i_,r)},
i3(a,b){return this.vw(a,b)},
vw(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.a
s=3
return A.a(n.gci(),$async$i3)
case 3:m=d
q=o.kB(a.z,b,new A.yQ(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i3,r)},
hZ(a,b){return this.vi(a,b)},
vi(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).w1(b),$async$hZ)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hZ,r)},
hY(a,b){return this.vc(a,b)},
vc(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yK(p,o),a),$async$hY)
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
return A.f($async$hY,r)},
i2(a,b){return this.vv(a,b)},
vv(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yP(p,o),a),$async$i2)
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
return A.f($async$i2,r)},
i4(a,b){return this.vy(a,b)},
vy(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yS(p,o),a),$async$i4)
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
return A.f($async$i4,r)},
i0(a,b){return this.vt(a,b)},
vt(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bv(a).a;++m.w
s=3
return A.a(A.Bh(),$async$i0)
case 3:o=d
n=o.a
p.w.l0(o.b).x.push(A.F1(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i0,r)},
hX(a,b){return this.vb(a,b)},
vb(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
B.b.G(p.x,o)
s=3
return A.a(o.q(),$async$hX)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
fe(a,b){return this.vl(a,b)},
vl(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fe=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).a.gcP(),$async$fe)
case 3:o=d
s=o instanceof A.dD?4:5
break
case 4:s=6
return A.a(o.cz(!1),$async$fe)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fe,r)},
fc(a,b){return this.vj(a,b)},
vj(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=B.b5[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcP(),$async$fc)
case 4:s=3
return A.a(l.kB(null,k,new j.yL(d,n,m,a),t.m),$async$fc)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fc,r)},
fd(a,b){return this.vk(a,b)},
vk(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcP(),$async$fd)
case 4:s=3
return A.a(n.kB(null,m,new l.yM(d,a),t.y),$async$fd)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fd,r)},
dB(a,b,c){return this.op(a,b,c)},
op(a,b,c){var s=0,r=A.h(t.m),q,p
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
vr(a){},
hN(a){var s=0,r=A.h(t.X),q,p=this
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fQ({r:a,z:null,i:0,d:null,t:"custom"},B.cY,t.m),$async$hN)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
lo(a){return B.b.mO(this.x,new A.yH(a))},
bv(a){var s=a.d
if(s!=null)return this.lo(s)
else throw A.b(A.Q("Request requires database id",null))},
$iDS:1}
A.yI.prototype={
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
A.yN.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cf(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.v2(h.d,A.Id(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcP():m.gci(),$async$$0)
case 8:l=A.F1(m,null)
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
A.yQ.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.A("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.el(s,r,A.bS(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.o9(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.aq(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.uT(l,k.s,q)
s=o.d
return A.Gx(s.sqlite3_get_autocommit(p)!==0,m,A.aq(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:36}
A.yK.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gci(),$async$$0)
case 3:q=b.a.pl().gcT().aN(new A.yJ(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:68}
A.yJ.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.i4(s))},
$S:69}
A.yP.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gci(),$async$$0)
case 3:q=b.a.rD().gcT().aN(new A.yO(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:68}
A.yO.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.i4(s))},
$S:69}
A.yS.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gci(),$async$$0)
case 3:q=b.a.tb().gcT().aN(new A.yR(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.yR.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.i4(s))},
$S:215}
A.yL.prototype={
$0(){var s,r,q,p=this,o=p.a.du(new A.jq(A.FI(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fK(s.byteLength)
o.ew(A.bS(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fJ()
r=new Uint8Array(q)
o.iI(r,0)
q={r:t.a.a(J.Hx(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iG()}},
$S:36}
A.yM.prototype={
$0(){return this.a.iF(A.FI(B.b5[this.b.f]),0)===1},
$S:45}
A.yH.prototype={
$1(a){return a.b===this.a},
$S:216}
A.lr.prototype={
gcP(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iD(new A.rp(p),t.H):o,$async$gcP)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcP,r)},
gci(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gci=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iD(new A.ro(p),t.u):o,$async$gci)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gci,r)},
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
if(j!=null)j.uF()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.Dv()
A.C8(m)
k=l.a.get(m)
if(k==null)A.t(A.A("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bx(j,t.H),$async$q)
case 6:q.f.nc()
return A.e(null,r)}})
return A.f($async$q,r)},
lT(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.G(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a4(s,!0)
p=a.io(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.G(0,new A.T(n,A.n(n).i("T<1>")).gH(0)).q()
n.j(0,p.d,p)
return new A.a4(p,!0)}return new A.a4(p,!1)},
uT(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aE(b,B.n)
else{s=null
r=null
q=this.lT(a,b)
s=q.a
r=q.b
try{s.e8(new A.lm(c.gtM()))}finally{if(r)s.dn()
else s.q()}}},
o9(a,b,c){var s,r=null,q=null,p=this.lT(a,b)
r=p.a
q=p.b
try{s=A.Jb(r,c)
return s}finally{if(q)r.dn()
else r.q()}}}
A.rp.prototype={
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
return A.a(A.wX("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ge6()
s=3
break
case 5:case 6:s=10
return A.a(A.lF("drift_db/"+l.c,k===B.ax,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ge6()
s=3
break
case 7:s=11
return A.a(A.m3(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ge6()
s=3
break
case 8:l.z=A.Ce("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.ro.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcP(),$async$$0)
case 4:n=b
o.mT()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e2(B.e.v(n.a),1),n,0)
if(m===0)A.t(A.A("could not register vfs"))
$.Dv().j(0,n,m)
s=5
return A.a(l.f.kk(new A.rn(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:70}
A.rn.prototype={
$0(){var s=this.a
return s.a.b.ik(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:70}
A.yb.prototype={
glF(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.oi()
r.Q!==$&&A.BS()
r.Q=s
q=s}return q},
ec(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ec=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cy(A.cz(A.L_(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$ec)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.iq(i.port,i.lockName,null)
n.l0(l)
s=9
break
case 10:s=A.MU(m.t)?11:12
break
case 11:s=13
return A.a(n.my(m),$async$ec)
case 13:k=b
j.postMessage(k.gni())
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
l0(a){var s=this,r=A.JU(a,s.d++,s)
s.c.push(r)
r.b.a.aY(new A.yc(s,r))
return r},
my(a){return this.x.kD(new A.yd(this,a),t.p6)},
cf(a){return this.vP(a)},
vP(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cf=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bf(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.A("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bx(n,t.he),$async$cf)
case 5:s=3
break
case 4:o=A.Cb(q.b.cf(m),new A.ye(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cf)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cf,r)},
v2(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aT(s,s.r,s.e,A.n(s).i("aT<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ax||b===B.b_
o=A.Cm(t.cj)
n=c===0?null:new A.w1(c,A.dH(null,null,t.N,t.fw))
n=new A.lr(this,r,a,b,d,new A.lq(q+"-outer",q,new A.j4(o),p),n)
s.j(0,r,n)
return n}}
A.yc.prototype={
$0(){var s=this.a,r=s.c
B.b.G(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.yd.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.e8(),$async$$0)
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
return A.a(A.pj(),$async$$0)
case 9:case 8:j=a1
i=A.aL(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glF()
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
case 15:e=b.HU(a.bf(a1.data))
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
return A.a(A.i7(),$async$$0)
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.t(0,new A.a4(B.bg,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.Bd(c),$async$$0)
case 23:if(a1)i.t(0,new A.a4(B.bh,c))
case 22:d=A.R(i,i.$ti.c)
q=new A.ek(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:218}
A.ye.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:219}
A.kl.prototype={}
A.om.prototype={
gmR(){return new A.hF(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.oR.prototype={
gmR(){return new A.dk(new A.Ad(this),t.k8)},
q(){}}
A.Ad.prototype={
$1(a){var s=A.l([],t.kG),r=A.l([],t.dw)
r.push(A.br(this.a.a,"connect",new A.Aa(new A.Ae(s,r,a)),!1,t.m))
a.r=new A.Ab(r)},
$S:220}
A.Ae.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.br(a,"message",new A.Ac(this.c),!1,t.m))},
$S:1}
A.Ac.prototype={
$1(a){this.a.tB(a)},
$S:1}
A.Aa.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bN(r,A.a_(r).i("bN<1,M>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.Ab.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].C()},
$S:2}
A.on.prototype={
oi(){var s=v.G
if(!("Worker" in s))return null
return new A.zd(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.zd.prototype={}
A.nl.prototype={
gfS(){return A.F(this.c)}}
A.xf.prototype={
gkj(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iL(a){var s,r=this,q=r.d=J.HA(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gN()
return s},
mM(a,b){var s
if(this.iL(a))return
if(b==null)if(a instanceof A.eu)b="/"+a.a+"/"
else{s=J.a0(a)
s=A.B(s,"\\","\\\\")
b='"'+A.B(s,'"','\\"')+'"'}this.lv(b)},
f8(a){return this.mM(a,null)},
uX(){if(this.c===this.b.length)return
this.lv("no more input")},
uS(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.t(A.b_("position must be greater than or equal to 0."))
else if(c>n.length)A.t(A.b_("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.t(A.b_("position plus length must not go beyond the end of the string."))
s=this.a
r=A.l([0],t.t)
q=n.length
p=new A.wZ(s,r,new Uint32Array(q))
p.oI(new A.ch(n),s)
o=c+b
if(o>q)A.t(A.b_("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.t(A.b_("Start may not be negative, was "+c+"."))
throw A.b(new A.nl(n,a,new A.hG(p,c,o)))},
lv(a){this.uS("expected "+a+".",0,this.c)}}
A.ho.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.E8(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.E8(b,this))
s=this.a
s.$flags&2&&A.H(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.H(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lk(b)
B.f.av(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.t8(q)
q=r.a
s=r.b++
q.$flags&2&&A.H(q)
q[s]=b},
lk(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
t8(a){var s=this.lk(null)
B.f.av(s,0,a,this.a)
this.a=s},
ah(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ax(c,0,s,null,null))
s=this.a
if(d instanceof A.cw)B.f.ah(s,b,c,d.a,e)
else B.f.ah(s,b,c,d,e)},
av(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.ow.prototype={}
A.cw.prototype={}
A.C6.prototype={}
A.hF.prototype={
aa(a,b,c,d){return A.br(this.a,this.b,a,!1,this.$ti.c)},
bz(a,b,c){return this.aa(a,null,b,c)}}
A.jS.prototype={
C(){var s=this,r=A.ba(null,t.H)
if(s.b==null)return r
s.jH()
s.d=s.b=null
return r},
ii(a){var s,r=this
if(r.b==null)throw A.b(A.A("Subscription has been canceled."))
r.jH()
s=A.Ga(new A.zh(a),t.m)
s=s==null?null:A.cX(s)
r.d=s
r.jF()},
bd(){if(this.b==null)return;++this.a
this.jH()},
b1(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jF()},
jF(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jH(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibn:1}
A.zg.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.zh.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dG.prototype
s.ov=s.l
s=A.bD.prototype
s.or=s.mU
s.os=s.mV
s.ou=s.mX
s.ot=s.mW
s=A.b2.prototype
s.iN=s.aA
s.kY=s.aH
s.kZ=s.aR
s=A.di.prototype
s.oy=s.lh
s.oz=s.lA
s.oA=s.m8
s=A.I.prototype
s.kX=s.ah
s=A.aB.prototype
s.kW=s.tL
s=A.ka.prototype
s.oB=s.q
s=A.o.prototype
s.oq=s.dt
s=A.kY.prototype
s.kU=s.hV
s=A.fr.prototype
s.kV=s.f2
s=A.he.prototype
s.ox=s.a0
s.ow=s.P})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"L9","It",47)
r(A,"Lm","IX",11)
q(A,"LW","JF",18)
q(A,"LX","JG",18)
q(A,"LY","JH",18)
q(A,"LZ","Lp",21)
r(A,"Gf","LM",0)
q(A,"M_","Lq",25)
s(A,"M0","Ls",13)
r(A,"B9","Lr",0)
p(A,"M5",5,null,["$5"],["LG"],222,0)
p(A,"Ma",4,null,["$1$4","$4"],["B4",function(a,b,c,d){return A.B4(a,b,c,d,t.z)}],223,0)
p(A,"Mc",5,null,["$2$5","$5"],["B5",function(a,b,c,d,e){var i=t.z
return A.B5(a,b,c,d,e,i,i)}],224,0)
p(A,"Mb",6,null,["$3$6"],["D8"],225,0)
p(A,"M8",4,null,["$1$4","$4"],["FY",function(a,b,c,d){return A.FY(a,b,c,d,t.z)}],226,0)
p(A,"M9",4,null,["$2$4","$4"],["FZ",function(a,b,c,d){var i=t.z
return A.FZ(a,b,c,d,i,i)}],227,0)
p(A,"M7",4,null,["$3$4","$4"],["FX",function(a,b,c,d){var i=t.z
return A.FX(a,b,c,d,i,i,i)}],228,0)
p(A,"M3",5,null,["$5"],["LF"],229,0)
p(A,"Md",4,null,["$4"],["B6"],230,0)
p(A,"M2",5,null,["$5"],["LE"],231,0)
p(A,"M1",5,null,["$5"],["LD"],232,0)
p(A,"M6",4,null,["$4"],["LH"],233,0)
p(A,"M4",5,null,["$5"],["FW"],234,0)
var j
o(j=A.eV.prototype,"geI","bI",0)
o(j,"geJ","bJ",0)
n(A.eW.prototype,"gtU",0,1,null,["$2","$1"],["bQ","aS"],66,0,0)
m(A.w.prototype,"gj_","pq",13)
n(j=A.e3.prototype,"gty",0,1,null,["$2","$1"],["bx","tz"],66,0,0)
l(j,"goY","aA",15)
m(j,"goU","aH",13)
o(j,"gph","aR",0)
o(j=A.dZ.prototype,"geI","bI",0)
o(j,"geJ","bJ",0)
o(j=A.b2.prototype,"geI","bI",0)
o(j,"geJ","bJ",0)
o(A.hE.prototype,"glQ","qR",0)
l(j=A.cy.prototype,"gqJ","qK",15)
m(j,"gqN","qO",13)
o(j,"gqL","qM",0)
o(j=A.hH.prototype,"geI","bI",0)
o(j,"geJ","bJ",0)
l(j,"gjc","jd",15)
m(j,"gjg","jh",150)
o(j,"gje","jf",0)
o(j=A.hP.prototype,"geI","bI",0)
o(j,"geJ","bJ",0)
l(j,"gjc","jd",15)
m(j,"gjg","jh",13)
o(j,"gje","jf",0)
s(A,"De","KT",30)
q(A,"Df","KU",31)
s(A,"Mi","IB",47)
q(A,"Mr","KX",32)
k(j=A.od.prototype,"gtx","t",15)
o(j,"ge6","q",0)
q(A,"Gj","MN",31)
s(A,"Gi","MM",30)
q(A,"Ms","Jz",6)
p(A,"N_",2,null,["$1$2","$2"],["Gv",function(a,b){return A.Gv(a,b,t.o)}],235,0)
m(j=A.lu.prototype,"guR","Z",30)
l(j,"gvz","ac",31)
l(j,"gvF","vG",21)
q(A,"Mg","HM",6)
o(j=A.jd.prototype,"gqP","qQ",0)
l(j,"gqS","qT",115)
q(A,"Na","IV",61)
q(A,"Gh","I1",237)
q(A,"Mn","I6",238)
q(A,"Mp","Ip",239)
q(A,"Mm","HI",240)
q(A,"Mo","Ic",241)
q(A,"pm","I5",6)
q(A,"MD","E2",242)
r(A,"ME","LQ",243)
r(A,"MW","KV",11)
r(A,"Ou","KW",11)
l(A.mG.prototype,"gwr","ws",9)
q(A,"Mk","C3",162)
l(j=A.nm.prototype,"gvo","vp",38)
l(j,"gvm","vn",133)
o(j,"gqG","jq",0)
q(A,"Nh","Jr",61)
o(A.og.prototype,"gv6","k8",0)
o(A.mS.prototype,"gjX","f2",0)
o(A.mA.prototype,"gjX","f2",0)
l(j=A.fr.prototype,"gqH","qI",38)
o(j,"gmk","e0",3)
m(A.o1.prototype,"gqc","hb",54)
m(A.o0.prototype,"gqi","hc",54)
l(j=A.lp.prototype,"gvS","vT",9)
m(j,"gvQ","vR",174)
n(j,"gxK",0,5,null,["$5"],["xL"],175,0,0)
n(j,"gxz",0,3,null,["$3"],["xA"],176,0,0)
n(j,"gxq",0,4,null,["$4"],["xs"],57,0,0)
n(j,"gxG",0,4,null,["$4"],["xH"],57,0,0)
n(j,"gxM",0,3,null,["$3"],["xN"],178,0,0)
m(j,"gxR","xS",58)
m(j,"gxx","xy",58)
l(j,"gxv","xw",33)
n(j,"gxO",0,4,null,["$4"],["xP"],60,0,0)
n(j,"gxZ",0,4,null,["$4"],["y_"],60,0,0)
m(j,"gxV","xW",182)
m(j,"gxT","xU",17)
m(j,"gxE","xF",17)
m(j,"gxI","xJ",17)
m(j,"gxX","xY",17)
m(j,"gxt","xu",17)
l(j,"giH","xB",33)
n(j,"gxC",0,3,null,["$3"],["xD"],184,0,0)
l(j,"giJ","xQ",33)
l(j,"guq","ur",18)
l(j,"guk","ul",185)
n(j,"gun",0,5,null,["$5"],["uo"],186,0,0)
n(j,"guw",0,4,null,["$4"],["ux"],27,0,0)
n(j,"guA",0,4,null,["$4"],["uB"],27,0,0)
n(j,"guy",0,4,null,["$4"],["uz"],27,0,0)
m(j,"guC","uD",63)
m(j,"guu","uv",63)
n(j,"gus",0,5,null,["$5"],["ut"],189,0,0)
m(j,"gui","uj",190)
m(j,"gug","uh",191)
n(j,"gue",0,3,null,["$3"],["uf"],192,0,0)
o(j=A.dD.prototype,"ge6","q",3)
o(j,"gv4","cG",3)
o(A.hc.prototype,"ge6","q",0)
o(A.lq.prototype,"gqk","ql",0)
l(A.el.prototype,"gtM","mw",209)
l(A.hz.prototype,"gvq","vr",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.Ck,J.m5,A.jm,J.fn,A.z5,A.yE,A.o,A.l6,A.ei,A.U,A.ae,A.I,A.wV,A.ao,A.mk,A.cU,A.lB,A.nA,A.n8,A.ly,A.o_,A.iC,A.nM,A.jx,A.hM,A.iV,A.fx,A.hI,A.cq,A.xF,A.mz,A.ix,A.k7,A.uF,A.bE,A.aT,A.mh,A.eu,A.hL,A.o6,A.hk,A.Am,A.oe,A.p2,A.cp,A.os,A.p_,A.kb,A.jF,A.o8,A.jX,A.oX,A.an,A.a9,A.b2,A.jL,A.nB,A.jV,A.eW,A.ca,A.w,A.o7,A.e3,A.oY,A.jH,A.o4,A.oo,A.ze,A.e2,A.hE,A.cy,A.jR,A.AL,A.AN,A.AM,A.AJ,A.AK,A.AI,A.AF,A.p8,A.AE,A.AD,A.AH,A.AG,A.p7,A.p9,A.p6,A.hX,A.jE,A.ot,A.zX,A.e1,A.oA,A.b3,A.oC,A.p1,A.oB,A.nk,A.l9,A.aB,A.oa,A.pQ,A.o9,A.l7,A.oS,A.eX,A.zT,A.An,A.p4,A.dl,A.aK,A.or,A.aO,A.aC,A.zf,A.mC,A.js,A.oq,A.bk,A.m4,A.S,A.W,A.oW,A.jt,A.n0,A.a2,A.ki,A.xK,A.cb,A.lC,A.my,A.zM,A.zN,A.lz,A.a3,A.lv,A.iK,A.ew,A.hU,A.hK,A.iU,A.lu,A.mx,A.nN,A.ci,A.c0,A.t4,A.q2,A.iT,A.jo,A.uU,A.jn,A.wU,A.qQ,A.r5,A.z4,A.eh,A.kX,A.kY,A.pM,A.mq,A.fO,A.pL,A.jd,A.vX,A.Af,A.vO,A.vF,A.jf,A.hQ,A.vP,A.Ag,A.es,A.dA,A.m_,A.cH,A.dB,A.dR,A.vD,A.le,A.c1,A.lR,A.mV,A.ag,A.vh,A.wC,A.eG,A.cL,A.mQ,A.wS,A.n3,A.eM,A.bp,A.eR,A.nf,A.aU,A.a1,A.q_,A.q0,A.q1,A.rD,A.iu,A.qo,A.it,A.dI,A.iy,A.bj,A.uL,A.cG,A.rN,A.lL,A.pO,A.fo,A.l2,A.ni,A.iA,A.rG,A.uz,A.f5,A.zV,A.oZ,A.hO,A.tE,A.nh,A.vY,A.oz,A.vi,A.mG,A.uE,A.Ao,A.wA,A.d6,A.b0,A.cm,A.mP,A.cM,A.wR,A.co,A.wK,A.aY,A.dC,A.fJ,A.er,A.c7,A.qz,A.cD,A.n2,A.of,A.hx,A.pA,A.bi,A.qB,A.nm,A.d4,A.eA,A.v0,A.dK,A.ml,A.A3,A.A1,A.vp,A.pN,A.iS,A.jk,A.vu,A.mO,A.wb,A.b4,A.wk,A.hl,A.xh,A.bo,A.hj,A.d9,A.h0,A.jj,A.cC,A.nC,A.xj,A.ji,A.jw,A.xu,A.cO,A.cn,A.eC,A.bG,A.A8,A.xw,A.og,A.hA,A.fr,A.yf,A.hv,A.nZ,A.y1,A.jh,A.oE,A.r6,A.eS,A.oh,A.y6,A.hw,A.o1,A.o0,A.qI,A.xg,A.mE,A.mF,A.wZ,A.nb,A.he,A.t5,A.bs,A.cx,A.cr,A.ne,A.cs,A.c6,A.kL,A.r8,A.e4,A.x0,A.ej,A.b5,A.l0,A.qO,A.oN,A.A2,A.bO,A.lm,A.dg,A.jq,A.xX,A.xS,A.xZ,A.xY,A.dV,A.dh,A.lp,A.d8,A.eY,A.xT,A.pH,A.jW,A.zi,A.oD,A.ov,A.zZ,A.xN,A.iq,A.wM,A.io,A.ll,A.lE,A.t3,A.d0,A.lq,A.j4,A.ek,A.w1,A.h5,A.k9,A.hB,A.lr,A.yb,A.kl,A.on,A.zd,A.xf,A.C6,A.jS])
q(J.m5,[J.m7,J.iM,J.aE,J.bt,J.fM,J.et,J.dE])
q(J.aE,[J.dG,J.z,A.fU,A.j6])
q(J.dG,[J.mH,J.dU,J.bP])
r(J.m6,A.jm)
r(J.tB,J.z)
q(J.et,[J.iL,J.m8])
q(A.o,[A.dY,A.K,A.ck,A.am,A.iz,A.eN,A.db,A.dW,A.f0,A.o5,A.oV,A.hS,A.ev,A.jl])
q(A.dY,[A.ef,A.km])
r(A.jP,A.ef)
r(A.jM,A.km)
q(A.ei,[A.q4,A.pY,A.q3,A.tv,A.xv,A.By,A.BA,A.ym,A.yl,A.AQ,A.AP,A.t1,A.rX,A.zm,A.zl,A.zx,A.zA,A.xb,A.xc,A.x9,A.zc,A.zb,A.A7,A.zD,A.z8,A.zW,A.uV,A.zR,A.qN,A.yz,A.rY,A.BC,A.BI,A.BJ,A.Bi,A.pT,A.pV,A.pX,A.l_,A.pP,A.AS,A.pR,A.uZ,A.Bp,A.vN,A.vM,A.vI,A.vJ,A.vK,A.vL,A.vG,A.vH,A.vW,A.vS,A.vT,A.vQ,A.vV,A.qL,A.qM,A.wE,A.wz,A.w_,A.BT,A.x2,A.x3,A.rA,A.rz,A.rB,A.ry,A.rx,A.rw,A.rv,A.rr,A.rs,A.rt,A.uM,A.uO,A.uQ,A.uS,A.uN,A.rO,A.rP,A.BH,A.rJ,A.rH,A.rK,A.rL,A.BN,A.u3,A.u4,A.u6,A.us,A.u7,A.u8,A.u9,A.ua,A.ub,A.uc,A.ud,A.ue,A.uf,A.ug,A.ui,A.uj,A.uk,A.ul,A.um,A.un,A.uo,A.tR,A.tT,A.tX,A.tH,A.tG,A.tV,A.tU,A.u0,A.u1,A.u2,A.tL,A.tN,A.tP,A.tZ,A.u_,A.tK,A.tI,A.uA,A.uD,A.uC,A.uB,A.vc,A.v8,A.vb,A.v9,A.ws,A.wu,A.wv,A.ww,A.wN,A.wQ,A.qk,A.qn,A.qj,A.qm,A.qg,A.qf,A.qc,A.ql,A.qh,A.qe,A.qd,A.qi,A.qb,A.q9,A.q7,A.pB,A.pC,A.qD,A.qC,A.xs,A.xk,A.xq,A.xl,A.xm,A.xn,A.Bf,A.Bg,A.v7,A.v1,A.v2,A.v3,A.v4,A.v5,A.vr,A.vs,A.vA,A.vy,A.vx,A.vw,A.vz,A.wi,A.wc,A.we,A.wg,A.wl,A.wq,A.xi,A.Br,A.BM,A.BK,A.BL,A.xD,A.xz,A.xB,A.xx,A.yW,A.yT,A.wG,A.wF,A.yg,A.y0,A.uJ,A.uK,A.uT,A.z2,A.z3,A.Bw,A.Bv,A.Bl,A.ya,A.y8,A.qJ,A.qK,A.B7,A.t7,A.t6,A.t8,A.ta,A.tc,A.t9,A.tq,A.x4,A.rg,A.Aj,A.BF,A.BO,A.BP,A.pG,A.z6,A.z7,A.qr,A.qs,A.qw,A.qx,A.qy,A.rM,A.pK,A.pI,A.zG,A.zJ,A.zK,A.tu,A.ts,A.zF,A.wY,A.xO,A.xP,A.xQ,A.xR,A.w9,A.wa,A.w8,A.w7,A.w6,A.y2,A.rk,A.vj,A.rC,A.Be,A.qp,A.qq,A.qt,A.qu,A.qv,A.AZ,A.yJ,A.yO,A.yR,A.yH,A.Ad,A.Ae,A.Ac,A.Aa,A.zg,A.zh])
q(A.q4,[A.yF,A.pZ,A.qH,A.tC,A.Bz,A.AR,A.B8,A.t2,A.rW,A.zn,A.zy,A.zB,A.yi,A.zC,A.uG,A.uX,A.zU,A.yy,A.Ax,A.xL,A.Aw,A.Av,A.t_,A.rZ,A.pS,A.pU,A.pW,A.kZ,A.vg,A.v_,A.vC,A.vR,A.vE,A.AY,A.wD,A.wy,A.w0,A.wB,A.wT,A.BU,A.Bc,A.ru,A.rQ,A.tF,A.tJ,A.vd,A.wx,A.wO,A.wP,A.qa,A.pD,A.y4,A.Bm,A.y7,A.tb,A.rj,A.zL,A.y3,A.z_,A.ye])
r(A.bN,A.jM)
q(A.U,[A.eg,A.bD,A.di,A.ox])
q(A.ae,[A.dF,A.mT,A.de,A.m9,A.nL,A.n1,A.op,A.je,A.iP,A.kQ,A.bB,A.cT,A.nK,A.bm,A.lc])
q(A.I,[A.hp,A.n5,A.nU,A.ht,A.el,A.ho])
r(A.ch,A.hp)
q(A.q3,[A.BE,A.w3,A.yn,A.yo,A.Aq,A.Ap,A.AO,A.yq,A.yr,A.yt,A.yu,A.ys,A.yp,A.t0,A.zo,A.zt,A.zs,A.zq,A.zp,A.zw,A.zv,A.zu,A.zz,A.xa,A.xd,A.x8,A.Ai,A.Ah,A.yh,A.yD,A.yC,A.A_,A.zY,A.AT,A.AU,A.za,A.z9,A.A6,A.A5,A.B3,A.AA,A.Az,A.rq,A.B0,A.B1,A.uY,A.vB,A.vU,A.rF,A.uP,A.uR,A.rI,A.u5,A.uh,A.ut,A.uu,A.uv,A.uw,A.ux,A.uy,A.up,A.uq,A.ur,A.tQ,A.tS,A.tW,A.tM,A.tO,A.tY,A.wt,A.rE,A.tr,A.rU,A.rT,A.x6,A.q6,A.q8,A.qA,A.qG,A.qF,A.qE,A.xp,A.xo,A.xr,A.wj,A.wd,A.wf,A.wh,A.wm,A.wr,A.wp,A.wo,A.wn,A.xt,A.vv,A.vq,A.xE,A.xC,A.xA,A.xy,A.yX,A.yU,A.yV,A.wH,A.vo,A.tp,A.td,A.tk,A.tl,A.tm,A.tn,A.ti,A.tj,A.te,A.tf,A.tg,A.th,A.to,A.zE,A.rh,A.ri,A.re,A.rd,A.rf,A.ra,A.r9,A.rb,A.rc,A.Ak,A.Al,A.BQ,A.qU,A.qR,A.qW,A.qY,A.r_,A.qT,A.qZ,A.r3,A.r1,A.r0,A.qV,A.qX,A.r2,A.qS,A.pE,A.pF,A.xU,A.pJ,A.zH,A.zI,A.zj,A.tt,A.rl,A.rm,A.vl,A.vk,A.yY,A.z1,A.yZ,A.z0,A.yI,A.yN,A.yQ,A.yK,A.yP,A.yS,A.yL,A.yM,A.rp,A.ro,A.rn,A.yc,A.yd,A.Ab])
q(A.K,[A.Z,A.ep,A.T,A.al,A.aP,A.f_,A.jZ])
q(A.Z,[A.ct,A.X,A.bw,A.iR,A.oy])
r(A.eo,A.ck)
r(A.iv,A.eN)
r(A.fA,A.db)
q(A.hM,[A.oF,A.oG,A.oH])
q(A.oF,[A.a4,A.k4,A.k5,A.hN,A.oI])
r(A.f3,A.oG)
q(A.oH,[A.f4,A.oJ])
r(A.kh,A.iV)
r(A.cS,A.kh)
r(A.ir,A.cS)
q(A.fx,[A.aX,A.iE])
q(A.cq,[A.is,A.k6])
r(A.dy,A.is)
r(A.iI,A.tv)
r(A.jb,A.de)
q(A.xv,[A.x5,A.ij])
q(A.bD,[A.iO,A.iN,A.jY])
r(A.fT,A.fU)
q(A.j6,[A.j5,A.fV])
q(A.fV,[A.k0,A.k2])
r(A.k1,A.k0)
r(A.dN,A.k1)
r(A.k3,A.k2)
r(A.bR,A.k3)
q(A.dN,[A.ms,A.mt])
q(A.bR,[A.mu,A.mv,A.mw,A.j7,A.j8,A.j9,A.ez])
r(A.kc,A.op)
q(A.a9,[A.hR,A.ju,A.jQ,A.dk,A.jT,A.jK,A.ih,A.hF])
r(A.b6,A.hR)
r(A.b1,A.b6)
q(A.b2,[A.dZ,A.hH,A.hP])
r(A.eV,A.dZ)
r(A.jG,A.jL)
q(A.eW,[A.aI,A.ap])
q(A.e3,[A.cV,A.hT])
r(A.k8,A.o4)
q(A.oo,[A.c9,A.hD])
r(A.k_,A.cV)
r(A.f1,A.jT)
q(A.p6,[A.oi,A.oM])
q(A.di,[A.e_,A.jN])
r(A.dj,A.k6)
q(A.nk,[A.ka,A.Ar,A.yv,A.oU])
r(A.zP,A.ka)
q(A.l9,[A.eq,A.kV,A.tD])
q(A.eq,[A.kO,A.mf,A.nR])
q(A.aB,[A.p0,A.ii,A.kW,A.mc,A.mb,A.nS,A.jz,A.lX])
q(A.p0,[A.kP,A.mg])
r(A.yA,A.oa)
q(A.pQ,[A.yw,A.hy,A.od,A.Ay])
r(A.yj,A.yw)
r(A.ma,A.iP)
r(A.zQ,A.l7)
r(A.zS,A.zT)
r(A.pa,A.p4)
r(A.AB,A.pa)
q(A.bB,[A.d7,A.iG])
r(A.ol,A.ki)
r(A.hb,A.hU)
r(A.oP,A.lX)
r(A.A9,A.t4)
r(A.oQ,A.A9)
r(A.kJ,A.q2)
r(A.jp,A.wU)
r(A.oj,A.kJ)
r(A.ln,A.oj)
r(A.ok,A.uU)
r(A.r4,A.ok)
r(A.mW,A.eh)
r(A.l4,A.kX)
r(A.dw,A.ju)
q(A.kY,[A.vf,A.wL])
r(A.jv,A.pM)
r(A.nj,A.jv)
r(A.il,A.a3)
r(A.mJ,A.jd)
q(A.c1,[A.la,A.lh,A.jB,A.fE,A.nv,A.kT])
q(A.mV,[A.lH,A.lI,A.lM,A.lJ,A.lG,A.lV,A.lP,A.lK,A.lT,A.lN,A.lA,A.ng,A.mB,A.l5,A.lY,A.l8,A.lW,A.mZ,A.mr,A.mR,A.lk,A.lj,A.lw,A.m0,A.kK,A.lD,A.n4,A.nD,A.nE,A.nG,A.nI,A.nH,A.nF,A.nX,A.nY,A.nW,A.kM,A.nV,A.nT,A.mN,A.lb,A.n_,A.lg,A.lf,A.mX,A.kH,A.kI,A.li,A.nt,A.ny,A.no,A.np,A.nr,A.nz,A.ns,A.nw])
q(A.ag,[A.lU,A.lS,A.fG,A.lQ,A.fF,A.fD,A.hi,A.fW,A.ik,A.lZ,A.h6,A.h7,A.fS,A.h2,A.fy,A.fz,A.fL,A.fm,A.fC,A.h9,A.fw,A.fv,A.hn,A.hu,A.h_,A.ft,A.nu,A.nq,A.nx])
q(A.vh,[A.j_,A.j2,A.j0,A.j3,A.iX,A.iY,A.iW,A.j1,A.iZ])
q(A.zf,[A.aZ,A.cB,A.dT,A.mI,A.im,A.dx,A.d2,A.ld,A.c2,A.iH,A.ve,A.dM,A.ed,A.c8,A.kU,A.cP,A.fl,A.fX,A.jc,A.lx,A.jr,A.vt,A.fH,A.mm,A.dz,A.cv,A.iB,A.dP])
q(A.cL,[A.iQ,A.ja,A.id,A.ie])
r(A.pz,A.rD)
q(A.dI,[A.eQ,A.eP,A.eB,A.fq,A.fZ,A.fI,A.cN,A.h4,A.h8,A.eJ,A.hf,A.fR,A.fu,A.em,A.h3])
q(A.eJ,[A.hq,A.fK])
r(A.md,A.oz)
q(A.d6,[A.aj,A.c3,A.du,A.cZ])
r(A.fs,A.of)
r(A.yk,A.A1)
q(A.bo,[A.eO,A.da,A.ha,A.bM,A.cj,A.cl,A.eD,A.eF,A.en,A.nn,A.dv])
q(A.fr,[A.mS,A.mA])
r(A.y_,A.pO)
r(A.uI,A.r6)
r(A.mj,A.eS)
q(A.hw,[A.jD,A.eT])
r(A.p5,A.o1)
r(A.y9,A.p5)
r(A.tz,A.xg)
q(A.tz,[A.vZ,A.xM,A.y5])
r(A.lO,A.nb)
q(A.he,[A.hG,A.nd])
r(A.hd,A.ne)
r(A.dc,A.nd)
r(A.hg,A.ej)
r(A.l1,A.b5)
q(A.l1,[A.m1,A.dD,A.hc])
q(A.l0,[A.ou,A.oT])
r(A.oK,A.qO)
r(A.oL,A.oK)
r(A.mY,A.oL)
r(A.oO,A.oN)
r(A.c5,A.oO)
q(A.b3,[A.eU,A.b7])
r(A.hs,A.x0)
q(A.b7,[A.jU,A.jO,A.hC,A.hW])
r(A.w5,A.wM)
r(A.qP,A.ll)
r(A.dt,A.h5)
r(A.hz,A.w5)
q(A.kl,[A.om,A.oR])
r(A.nl,A.hd)
r(A.ow,A.ho)
r(A.cw,A.ow)
s(A.hp,A.nM)
s(A.km,A.I)
s(A.k0,A.I)
s(A.k1,A.iC)
s(A.k2,A.I)
s(A.k3,A.iC)
s(A.cV,A.jH)
s(A.hT,A.oY)
s(A.kh,A.p1)
s(A.pa,A.nk)
s(A.oj,A.qQ)
s(A.ok,A.r5)
s(A.oz,A.q0)
s(A.of,A.q1)
s(A.p5,A.o0)
s(A.oK,A.I)
s(A.oL,A.mx)
s(A.oN,A.nN)
s(A.oO,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",aa:"double",aW:"num",k:"String",P:"bool",W:"Null",p:"List",j:"Object",J:"Map",M:"JSObject"},mangledNames:{},types:["~()","~(M)","W()","y<~>()","y<~>(bG)","y<W>(bG)","k(k)","W(j,aF)","fW(~)","~(i)","P(k)","i()","S<k,@>(@,@)","~(j,aF)","~(p<i>)","~(j?)","W(M)","i(bq,i)","~(~())","y<b4>()","y<W>()","P(j?)","P(@)","W(j)","y<~>(jW)","~(@)","W(@)","~(d8,i,i,i)","0&()","j?(j?)","P(j?,j?)","i(j?)","@(@)","i(bq)","P(bs)","j?(J<k,j?>)","M()","~(k,k)","~(a1)","~(j?,j?)","~(dd)","y<~>(~)","P(c7)","y<W>(r7)","S<k,j?>(@,@)","P()","y<p<k>>()","i(@,@)","y<i>()","P(bj)","P(dC)","k(J<k,j?>)","y<@>()","P(aY)","y<j?>(o2,hv)","i(cH)","y<cH>(k)","i(b5,i,i,i)","i(b5,i)","k(ey)","i(bq,i,i,bt)","aa(i)","~(k,@)","~(d8,i)","@()","~(@,@)","~(j[aF?])","@(k)","y<bn<~>>()","~(~)","y<eS>()","W(~)","h6(J<k,j?>?)","i(i,cG)","P(cG)","k(cG)","~(p<ci>)","y<a9<p<i>>>()","k?(J<k,j?>)","~(aU)","P(k,k)","y<J<k,j?>?>()","i(k)","y<p<J<k,j?>?>>()","h7(p<J<k,j?>?>)","W(k,k[j?])","y<p<j?>>()","~(dL<p<i>>)","y<aW?>()","y<k>()","h_(i)","ft(i)","fw(p<bi>)","fv(bi?)","fG(p<bj>)","fF(i)","fD(i)","hi(P)","fS(p<k>)","y<co>()","h2(co)","y<p<cM>>()","h9(p<cM>)","~(i,@)","hn(~)","P(hO)","~(J<k,j?>?)","~(p<J<k,j?>>)","eX<@,@>(bC<@>)","a9<p<i>>()","~(eM)","~(p<bi>)","fO()","i(i,i)","i(c7,c7)","~(jf)","~(k,j?)","k(cm)","k()","P(cm)","aY()","dC()","fJ()","er()","c7()","S<k,dA>(k,hj)","k(@)","y<J<k,j?>?>(k)","P(i)","k(i,i)","d9(@)","bi()","i(i)","~(cC)","w<@>?()","y<bp>(bp)","bp(bp)","bp(j)","y<dR>(k)","dK/(j?)","y<j?>(j?)","J<k,j?>(p<j?>)","y<i>(bG)","i(dR)","aC(i)","k(i[i])","cO()","cn()","eC()","y<W>(~)","~(@,aF)","y<@>(bG)","p<J<k,j?>>(co)","y<P>(k)","y<~>(k)","W(j?)","P(cD<j?>)","P(cB)","P(dT)","~(c1)","k(k?)","k?()","bi(J<k,j?>)","0&(k,i?)","j(cx)","j(bs)","i(bs,bs)","p<cx>(S<j,p<bs>>)","dc()","k(j?)","~(i,k,i)","~(Cw,p<Cx>)","p<eG>(j?)","~(O,au,O,~())","~(bt,i)","bq?(b5,i,i,i,i)","i(b5,i,i)","P(aZ)","i(b5?,i,i)","p<cL>(j?)","P(+(k,j))","i(+(k,j),+(k,j))","i(bq,bt)","~(k,k?)","i(bq,i,i)","i(i())","~(~(i,k,i),i,i,i,bt)","W(bP,bP)","i(+(k,j?),+(k,j?))","i(d8,i,i,i,i)","i(i(i),i)","i(CB,i)","i(CB,i,i)","J<k,j?>(c5)","j?(~)","M(z<j?>)","j?(x1)","W(~())","M(M?)","~(ee)","y<~>(i,cR)","y<~>(i)","cR()","y<M>(k)","W(d0)","y<W>(M)","M(j)","W(j?,aF)","k?(j?)","~(ej)","M(M)","y<M>()","k(k,k)","bj()","y<bn<cs>>()","~(cs)","P(hB)","y<bj>(bG)","y<ek>()","0&(j?,aF)","~(dL<M>)","@(@,k)","~(O?,au?,O,j,aF)","0^(O?,au?,O,0^())<j?>","0^(O?,au?,O,0^(1^),1^)<j?,j?>","0^(O?,au?,O,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(O,au,O,0^())<j?>","0^(1^)(O,au,O,0^(1^))<j?,j?>","0^(1^,2^)(O,au,O,0^(1^,2^))<j?,j?,j?>","an?(O,au,O,j,aF?)","~(O?,au?,O,~())","dd(O,au,O,aC,~())","dd(O,au,O,aC,~(dd))","~(O,au,O,k)","O(O?,au?,O,jE?,J<j?,j?>?)","0^(0^,0^)<aW>","W(@,aF)","fy(i)","fz(p<j?>)","fL(p<k>)","fm(aW?)","fC(k)","bj(J<k,j?>)","aO()","i(cx)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a4&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.k4&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.k5&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hN&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.oI&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.f3&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.f4&&A.Gz(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.oJ&&A.Gz(a,b.a)}}
A.Ko(v.typeUniverse,JSON.parse('{"bP":"dG","mH":"dG","dU":"dG","ND":"fU","z":{"p":["1"],"aE":[],"K":["1"],"M":[],"o":["1"],"bb":["1"]},"m7":{"P":[],"ak":[]},"iM":{"W":[],"ak":[]},"aE":{"M":[]},"dG":{"aE":[],"M":[]},"m6":{"jm":[]},"tB":{"z":["1"],"p":["1"],"aE":[],"K":["1"],"M":[],"o":["1"],"bb":["1"]},"et":{"aa":[],"aW":[],"aw":["aW"]},"iL":{"aa":[],"i":[],"aW":[],"aw":["aW"],"ak":[]},"m8":{"aa":[],"aW":[],"aw":["aW"],"ak":[]},"dE":{"k":[],"aw":["k"],"bb":["@"],"ak":[]},"dY":{"o":["2"]},"ef":{"dY":["1","2"],"o":["2"],"o.E":"2"},"jP":{"ef":["1","2"],"dY":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"jM":{"I":["2"],"p":["2"],"dY":["1","2"],"K":["2"],"o":["2"]},"bN":{"jM":["1","2"],"I":["2"],"p":["2"],"dY":["1","2"],"K":["2"],"o":["2"],"I.E":"2","o.E":"2"},"eg":{"U":["3","4"],"J":["3","4"],"U.V":"4","U.K":"3"},"dF":{"ae":[]},"mT":{"ae":[]},"ch":{"I":["i"],"p":["i"],"K":["i"],"o":["i"],"I.E":"i"},"K":{"o":["1"]},"Z":{"K":["1"],"o":["1"]},"ct":{"Z":["1"],"K":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"ck":{"o":["2"],"o.E":"2"},"eo":{"ck":["1","2"],"K":["2"],"o":["2"],"o.E":"2"},"X":{"Z":["2"],"K":["2"],"o":["2"],"Z.E":"2","o.E":"2"},"am":{"o":["1"],"o.E":"1"},"iz":{"o":["2"],"o.E":"2"},"eN":{"o":["1"],"o.E":"1"},"iv":{"eN":["1"],"K":["1"],"o":["1"],"o.E":"1"},"db":{"o":["1"],"o.E":"1"},"fA":{"db":["1"],"K":["1"],"o":["1"],"o.E":"1"},"ep":{"K":["1"],"o":["1"],"o.E":"1"},"dW":{"o":["1"],"o.E":"1"},"hp":{"I":["1"],"p":["1"],"K":["1"],"o":["1"]},"bw":{"Z":["1"],"K":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"ir":{"cS":["1","2"],"J":["1","2"]},"fx":{"J":["1","2"]},"aX":{"fx":["1","2"],"J":["1","2"]},"f0":{"o":["1"],"o.E":"1"},"iE":{"fx":["1","2"],"J":["1","2"]},"is":{"cq":["1"],"eK":["1"],"K":["1"],"o":["1"]},"dy":{"cq":["1"],"eK":["1"],"K":["1"],"o":["1"]},"jb":{"de":[],"ae":[]},"m9":{"ae":[]},"nL":{"ae":[]},"mz":{"G":[]},"k7":{"aF":[]},"n1":{"ae":[]},"bD":{"U":["1","2"],"J":["1","2"],"U.V":"2","U.K":"1"},"T":{"K":["1"],"o":["1"],"o.E":"1"},"al":{"K":["1"],"o":["1"],"o.E":"1"},"aP":{"K":["S<1,2>"],"o":["S<1,2>"],"o.E":"S<1,2>"},"iO":{"bD":["1","2"],"U":["1","2"],"J":["1","2"],"U.V":"2","U.K":"1"},"iN":{"bD":["1","2"],"U":["1","2"],"J":["1","2"],"U.V":"2","U.K":"1"},"hL":{"mU":[],"ey":[]},"o5":{"o":["mU"],"o.E":"mU"},"hk":{"ey":[]},"oV":{"o":["ey"],"o.E":"ey"},"fT":{"aE":[],"M":[],"ee":[],"ak":[]},"fU":{"aE":[],"M":[],"ee":[],"ak":[]},"j6":{"aE":[],"M":[]},"p2":{"ee":[]},"j5":{"aE":[],"C1":[],"M":[],"ak":[]},"fV":{"bQ":["1"],"aE":[],"M":[],"bb":["1"]},"dN":{"I":["aa"],"p":["aa"],"bQ":["aa"],"aE":[],"K":["aa"],"M":[],"bb":["aa"],"o":["aa"]},"bR":{"I":["i"],"p":["i"],"bQ":["i"],"aE":[],"K":["i"],"M":[],"bb":["i"],"o":["i"]},"ms":{"dN":[],"rR":[],"I":["aa"],"p":["aa"],"bQ":["aa"],"aE":[],"K":["aa"],"M":[],"bb":["aa"],"o":["aa"],"ak":[],"I.E":"aa"},"mt":{"dN":[],"rS":[],"I":["aa"],"p":["aa"],"bQ":["aa"],"aE":[],"K":["aa"],"M":[],"bb":["aa"],"o":["aa"],"ak":[],"I.E":"aa"},"mu":{"bR":[],"tw":[],"I":["i"],"p":["i"],"bQ":["i"],"aE":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"mv":{"bR":[],"tx":[],"I":["i"],"p":["i"],"bQ":["i"],"aE":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"mw":{"bR":[],"ty":[],"I":["i"],"p":["i"],"bQ":["i"],"aE":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"j7":{"bR":[],"xH":[],"I":["i"],"p":["i"],"bQ":["i"],"aE":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"j8":{"bR":[],"xI":[],"I":["i"],"p":["i"],"bQ":["i"],"aE":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"j9":{"bR":[],"xJ":[],"I":["i"],"p":["i"],"bQ":["i"],"aE":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"ez":{"bR":[],"cR":[],"I":["i"],"p":["i"],"bQ":["i"],"aE":[],"K":["i"],"M":[],"bb":["i"],"o":["i"],"ak":[],"I.E":"i"},"op":{"ae":[]},"kc":{"de":[],"ae":[]},"an":{"ae":[]},"w":{"y":["1"]},"dL":{"bC":["1"]},"kb":{"dd":[]},"jF":{"ip":["1"]},"hS":{"o":["1"],"o.E":"1"},"b1":{"b6":["1"],"hR":["1"],"a9":["1"],"a9.T":"1"},"eV":{"dZ":["1"],"b2":["1"],"bn":["1"],"b2.T":"1"},"jL":{"bC":["1"]},"jG":{"jL":["1"],"bC":["1"]},"nB":{"G":[]},"je":{"ae":[]},"eW":{"ip":["1"]},"aI":{"eW":["1"],"ip":["1"]},"ap":{"eW":["1"],"ip":["1"]},"ju":{"a9":["1"]},"e3":{"bC":["1"]},"cV":{"jH":["1"],"e3":["1"],"bC":["1"]},"hT":{"e3":["1"],"bC":["1"]},"b6":{"hR":["1"],"a9":["1"],"a9.T":"1"},"dZ":{"b2":["1"],"bn":["1"],"b2.T":"1"},"k8":{"o4":["1"]},"b2":{"bn":["1"],"b2.T":"1"},"hR":{"a9":["1"]},"hE":{"bn":["1"]},"jQ":{"a9":["1"],"a9.T":"1"},"dk":{"a9":["1"],"a9.T":"1"},"k_":{"cV":["1"],"jH":["1"],"e3":["1"],"dL":["1"],"bC":["1"]},"jT":{"a9":["2"]},"hH":{"b2":["2"],"bn":["2"],"b2.T":"2"},"f1":{"jT":["1","2"],"a9":["2"],"a9.T":"2"},"jR":{"bC":["1"]},"hP":{"b2":["2"],"bn":["2"],"b2.T":"2"},"jK":{"a9":["2"],"a9.T":"2"},"p6":{"O":[]},"oi":{"O":[]},"oM":{"O":[]},"hX":{"au":[]},"di":{"U":["1","2"],"J":["1","2"],"U.V":"2","U.K":"1"},"e_":{"di":["1","2"],"U":["1","2"],"J":["1","2"],"U.V":"2","U.K":"1"},"jN":{"di":["1","2"],"U":["1","2"],"J":["1","2"],"U.V":"2","U.K":"1"},"f_":{"K":["1"],"o":["1"],"o.E":"1"},"jY":{"bD":["1","2"],"U":["1","2"],"J":["1","2"],"U.V":"2","U.K":"1"},"dj":{"cq":["1"],"eK":["1"],"K":["1"],"o":["1"]},"ev":{"o":["1"],"o.E":"1"},"I":{"p":["1"],"K":["1"],"o":["1"]},"U":{"J":["1","2"]},"jZ":{"K":["2"],"o":["2"],"o.E":"2"},"iV":{"J":["1","2"]},"cS":{"J":["1","2"]},"iR":{"Z":["1"],"K":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"cq":{"eK":["1"],"K":["1"],"o":["1"]},"k6":{"cq":["1"],"eK":["1"],"K":["1"],"o":["1"]},"eX":{"bC":["1"]},"ox":{"U":["k","@"],"J":["k","@"],"U.V":"@","U.K":"k"},"oy":{"Z":["k"],"K":["k"],"o":["k"],"Z.E":"k","o.E":"k"},"kO":{"eq":[]},"p0":{"aB":["k","p<i>"]},"kP":{"aB":["k","p<i>"],"aB.T":"p<i>"},"ii":{"aB":["p<i>","k"],"aB.T":"k"},"kW":{"aB":["k","p<i>"],"aB.T":"p<i>"},"iP":{"ae":[]},"ma":{"ae":[]},"mc":{"aB":["j?","k"],"aB.T":"k"},"mb":{"aB":["k","j?"],"aB.T":"j?"},"mf":{"eq":[]},"mg":{"aB":["k","p<i>"],"aB.T":"p<i>"},"nR":{"eq":[]},"nS":{"aB":["k","p<i>"],"aB.T":"p<i>"},"jz":{"aB":["p<i>","k"],"aB.T":"k"},"DK":{"aw":["DK"]},"aO":{"aw":["aO"]},"aa":{"aW":[],"aw":["aW"]},"aC":{"aw":["aC"]},"i":{"aW":[],"aw":["aW"]},"p":{"K":["1"],"o":["1"]},"aW":{"aw":["aW"]},"mU":{"ey":[]},"eK":{"K":["1"],"o":["1"]},"k":{"aw":["k"]},"aK":{"aw":["DK"]},"kQ":{"ae":[]},"de":{"ae":[]},"bB":{"ae":[]},"d7":{"ae":[]},"iG":{"d7":[],"ae":[]},"cT":{"ae":[]},"nK":{"cT":[],"ae":[]},"bm":{"ae":[]},"lc":{"ae":[]},"mC":{"ae":[]},"js":{"ae":[]},"oq":{"G":[]},"bk":{"G":[]},"m4":{"cT":[],"G":[],"ae":[]},"oW":{"aF":[]},"jl":{"o":["i"],"o.E":"i"},"ki":{"nO":[]},"cb":{"nO":[]},"ol":{"nO":[]},"my":{"G":[]},"ty":{"p":["i"],"K":["i"],"o":["i"]},"cR":{"p":["i"],"K":["i"],"o":["i"]},"xJ":{"p":["i"],"K":["i"],"o":["i"]},"tw":{"p":["i"],"K":["i"],"o":["i"]},"xH":{"p":["i"],"K":["i"],"o":["i"]},"tx":{"p":["i"],"K":["i"],"o":["i"]},"xI":{"p":["i"],"K":["i"],"o":["i"]},"rR":{"p":["aa"],"K":["aa"],"o":["aa"]},"rS":{"p":["aa"],"K":["aa"],"o":["aa"]},"a3":{"J":["2","3"]},"hb":{"hU":["1","eK<1>"],"hU.E":"1"},"lX":{"aB":["p<i>","ci"]},"oP":{"aB":["p<i>","ci"],"aB.T":"ci"},"jo":{"G":[]},"n5":{"I":["i"],"p":["i"],"K":["i"],"o":["i"],"I.E":"i"},"mW":{"G":[]},"kX":{"C2":[]},"l4":{"C2":[]},"dw":{"a9":["p<i>"],"a9.T":"p<i>"},"eh":{"G":[]},"nj":{"jv":[]},"il":{"a3":["k","k","1"],"J":["k","1"],"a3.V":"1","a3.K":"k","a3.C":"k"},"jd":{"CG":[]},"mJ":{"CG":[]},"dB":{"G":[]},"lU":{"ag":[]},"lS":{"ag":[]},"fG":{"ag":[]},"lQ":{"ag":[]},"fF":{"ag":[]},"fD":{"ag":[]},"hi":{"ag":[]},"fW":{"ag":[]},"ik":{"ag":[]},"lZ":{"ag":[]},"h6":{"ag":[]},"h7":{"ag":[]},"fS":{"ag":[]},"h2":{"ag":[]},"fy":{"ag":[]},"fz":{"ag":[]},"fL":{"ag":[]},"fm":{"ag":[]},"fC":{"ag":[]},"h9":{"ag":[]},"fw":{"ag":[]},"fv":{"ag":[]},"hn":{"ag":[]},"hu":{"ag":[]},"h_":{"ag":[]},"ft":{"ag":[]},"nu":{"ag":[]},"nq":{"ag":[]},"nx":{"ag":[]},"la":{"c1":[]},"lh":{"c1":[]},"jB":{"c1":[]},"fE":{"c1":[]},"iQ":{"cL":[]},"ja":{"cL":[]},"id":{"cL":[]},"ie":{"cL":[]},"nv":{"c1":[]},"kT":{"c1":[]},"eR":{"G":[]},"iu":{"r7":[]},"dI":{"G":[]},"eQ":{"G":[]},"eP":{"G":[]},"eB":{"G":[]},"fq":{"G":[]},"fZ":{"G":[]},"fI":{"G":[]},"cN":{"G":[]},"h4":{"G":[]},"h8":{"G":[]},"eJ":{"G":[]},"hq":{"G":[]},"fK":{"G":[]},"hf":{"G":[]},"fR":{"G":[]},"fu":{"G":[]},"em":{"G":[]},"h3":{"G":[]},"fo":{"G":[]},"l2":{"G":[]},"f5":{"G":[]},"aj":{"d6":[]},"c3":{"d6":[]},"du":{"d6":[]},"cZ":{"d6":[]},"hx":{"G":[]},"d4":{"G":[]},"bo":{"G":[]},"eO":{"G":[]},"da":{"G":[]},"ha":{"G":[]},"bM":{"G":[]},"cj":{"G":[]},"cl":{"G":[]},"eD":{"G":[]},"eF":{"G":[]},"en":{"G":[]},"dv":{"G":[]},"jh":{"G":[]},"oE":{"Ep":[]},"mj":{"eS":[]},"oh":{"o2":[]},"jD":{"hw":[]},"eT":{"hw":[]},"mF":{"G":[]},"lO":{"cr":[],"aw":["cr"]},"hG":{"dc":[],"aw":["nc"]},"cr":{"aw":["cr"]},"nb":{"cr":[],"aw":["cr"]},"nc":{"aw":["nc"]},"nd":{"aw":["nc"]},"ne":{"G":[]},"hd":{"bk":[],"G":[]},"he":{"aw":["nc"]},"dc":{"aw":["nc"]},"c6":{"G":[]},"x1":{"p":["j?"],"K":["j?"],"o":["j?"]},"nU":{"I":["j?"],"x1":[],"p":["j?"],"K":["j?"],"o":["j?"],"I.E":"j?"},"hg":{"ej":[]},"m1":{"b5":[]},"ou":{"jA":[],"bq":[]},"c5":{"U":["k","@"],"J":["k","@"],"U.V":"@","U.K":"k"},"mY":{"I":["c5"],"p":["c5"],"K":["c5"],"o":["c5"],"I.E":"c5"},"dg":{"G":[]},"l1":{"b5":[]},"l0":{"jA":[],"bq":[]},"eU":{"b3":["eU"],"b3.E":"eU"},"dh":{"Cx":[]},"dV":{"Cw":[]},"ht":{"I":["dh"],"p":["dh"],"K":["dh"],"o":["dh"],"I.E":"dh"},"ih":{"a9":["1"],"a9.T":"1"},"dD":{"b5":[]},"b7":{"b3":["b7"]},"ov":{"jA":[],"bq":[]},"jU":{"b7":[],"b3":["b7"],"b3.E":"b7"},"jO":{"b7":[],"b3":["b7"],"b3.E":"b7"},"hC":{"b7":[],"b3":["b7"],"b3.E":"b7"},"hW":{"b7":[],"b3":["b7"],"b3.E":"b7"},"hc":{"b5":[]},"oT":{"jA":[],"bq":[]},"io":{"G":[]},"el":{"I":["j?"],"p":["j?"],"K":["j?"],"o":["j?"],"I.E":"j?"},"h5":{"G":[]},"dt":{"G":[]},"hz":{"DS":[]},"om":{"kl":["M"]},"oR":{"kl":["M"]},"nl":{"bk":[],"G":[]},"cw":{"ho":["i"],"I":["i"],"p":["i"],"K":["i"],"o":["i"],"I.E":"i"},"ho":{"I":["1"],"p":["1"],"K":["1"],"o":["1"]},"ow":{"ho":["i"],"I":["i"],"p":["i"],"K":["i"],"o":["i"]},"hF":{"a9":["1"],"a9.T":"1"},"jS":{"bn":["1"]}}'))
A.Kn(v.typeUniverse,JSON.parse('{"iC":1,"nM":1,"hp":1,"km":2,"is":1,"fV":1,"bC":1,"ju":1,"oY":1,"oo":1,"p1":2,"iV":2,"k6":1,"kh":2,"l7":1,"l9":2,"ka":1,"mx":1,"nN":2,"mV":1,"fr":1,"HH":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("HH<j?>"),bG:s("ed"),om:s("ih<z<j?>>"),hw:s("cC"),lo:s("ee"),fW:s("C1"),jA:s("ik"),fo:s("il<k>"),iv:s("a1"),eg:s("DS"),dF:s("C2()"),E:s("ch"),fw:s("ej"),bP:s("aw<@>"),p6:s("ek"),br:s("ip<M>"),n8:s("bi"),M:s("dy<k>"),lp:s("lr"),O:s("K<@>"),C:s("ae"),fq:s("c1"),mA:s("G"),eZ:s("lE"),d9:s("aY"),oX:s("lL"),A:s("bj"),k4:s("iA"),f6:s("cG"),pk:s("rR"),kI:s("rS"),Y:s("bk"),gY:s("Nz"),nW:s("y<M>"),fr:s("y<dK>"),mj:s("y<W>"),g7:s("y<@>"),fP:s("y<d0?>"),n1:s("y<j?>(o2,hv)"),jN:s("y<hs?>"),co:s("dA"),w:s("cH"),cF:s("dD"),m6:s("tw"),bW:s("tx"),jx:s("ty"),nZ:s("iK<@>"),e7:s("o<@>"),gi:s("z<a1>"),aw:s("z<cD<@>>"),oq:s("z<cD<j?>>"),oS:s("z<le>"),i5:s("z<ci>"),mK:s("z<aY>"),kB:s("z<lR>"),iw:s("z<y<~>>"),mr:s("z<dC>"),kG:s("z<M>"),bi:s("z<p<J<k,j?>>>"),h2:s("z<p<j>>"),ae:s("z<p<eG>>"),dO:s("z<p<j?>>"),kf:s("z<J<k,j>>"),d:s("z<J<k,j?>>"),e8:s("z<mq>"),i7:s("z<eA>"),hf:s("z<j>"),ox:s("z<eC>"),fi:s("z<cm>"),my:s("z<cn>"),k:s("z<d6>"),eK:s("z<cL>"),k1:s("z<h0>"),g2:s("z<jj>"),bo:s("z<jk>"),cM:s("z<eG>"),gc:s("z<mQ>"),eb:s("z<aU>"),fU:s("z<+controller,sync(dL<cs>,P)>"),lw:s("z<+controller,sync(dL<~>,P)>"),kC:s("z<+(dP,k)>"),jO:s("z<+(k,J<k,j?>)>"),l5:s("z<+(k,j)>"),fj:s("z<+(k,aY?)>"),iE:s("z<+(k,j?)>"),aY:s("z<+(hA,j?,j?,aF?)>"),g1:s("z<d9>"),cP:s("z<n3>"),kj:s("z<cM>"),lE:s("z<hg>"),c0:s("z<c7>"),dw:s("z<bn<@>>"),s:s("z<k>"),en:s("z<hl>"),bs:s("z<cR>"),fC:s("z<b0>"),az:s("z<hz>"),i4:s("z<hA>"),fV:s("z<hB>"),pg:s("z<bs>"),dg:s("z<cx>"),p8:s("z<oD>"),mc:s("z<hO>"),gy:s("z<hQ>"),gk:s("z<aa>"),dG:s("z<@>"),t:s("z<i>"),fQ:s("z<an?>"),eU:s("z<J<k,j?>?>"),c:s("z<j?>"),mf:s("z<k?>"),iy:s("bb<@>"),T:s("iM"),m:s("M"),bJ:s("bt"),g:s("bP"),dX:s("bQ<@>"),aq:s("aE"),fZ:s("md"),kk:s("ev<eU>"),p3:s("ev<b7>"),hI:s("ew<@>"),ba:s("p<bi>"),ck:s("p<bj>"),ip:s("p<M>"),ew:s("p<J<k,j>>"),J:s("p<J<k,j?>>"),eT:s("p<eA>"),hg:s("p<eC>"),a6:s("p<cn>"),jX:s("p<jj>"),kR:s("p<d9>"),fE:s("p<cM>"),i:s("p<k>"),bR:s("p<hl>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<J<k,j?>?>"),kS:s("p<j?>"),jD:s("iS"),ia:s("S<k,dA>"),af:s("S<k,k>"),I:s("S<k,@>"),eB:s("S<k,j?>"),a3:s("iU<@,@>"),cy:s("J<k,cO>"),dV:s("J<k,i>"),f:s("J<@,@>"),G:s("J<k,j?>"),d2:s("J<j?,j?>"),iZ:s("X<k,@>"),r:s("dK"),a:s("fT"),dQ:s("dN"),aj:s("bR"),Z:s("ez"),P:s("W"),K:s("j"),k5:s("cm"),dZ:s("cn"),i0:s("co"),jS:s("d6"),ot:s("mO"),gq:s("h0"),e:s("b4"),b0:s("d7"),lZ:s("NF"),oZ:s("aU"),aK:s("+()"),ja:s("+(M,iq)"),hP:s("+(J<k,cO>,J<k,J<k,j?>>)"),cU:s("+(dP,k)"),mk:s("+(P,M)"),kO:s("+basicSupport,supportsReadWriteUnsafe(P,P)"),mt:s("+(M?,M)"),po:s("+(j?,i)"),g0:s("+(J<k,j?>?,cO?,cn?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mU"),Q:s("d9"),V:s("ag"),hF:s("bw<k>"),cu:s("hb<@>"),aJ:s("eK<k>"),g_:s("hc"),hq:s("cr"),ol:s("dc"),gE:s("nf"),l:s("aF"),nv:s("nh"),h3:s("hj"),ha:s("bn<cs>"),dz:s("bn<@>"),ey:s("bn<~>"),bv:s("ni"),ku:s("a9<p<i>>"),lI:s("dR"),hL:s("jv"),N:s("k"),f_:s("hl"),k6:s("jw"),o8:s("CG"),n6:s("c8"),fD:s("bp"),nw:s("cO"),ic:s("eM"),hU:s("dd"),q:s("nC"),dH:s("ak"),do:s("de"),hM:s("xH"),mC:s("xI"),oR:s("cw"),nn:s("xJ"),p:s("cR"),cx:s("dU"),ph:s("cS<k,k>"),eo:s("cT"),jJ:s("nO"),e6:s("b5"),j2:s("jA"),n:s("hs"),fA:s("b0"),gx:s("am<cB>"),mz:s("am<aZ>"),mE:s("am<dT>"),v:s("dW<k>"),u:s("eS"),bp:s("eT"),be:s("o2"),ec:s("hw"),iq:s("aI<cR>"),jk:s("aI<@>"),ho:s("aI<i>"),h:s("aI<~>"),oW:s("eX<@,@>"),R:s("eY<M>"),d4:s("hF<M>"),nI:s("w<d0>"),a7:s("w<M>"),hl:s("w<0&>"),os:s("w<k>"),jz:s("w<cR>"),g5:s("w<P>"),_:s("w<@>"),hy:s("w<i>"),jQ:s("w<i?>"),D:s("w<~>"),nf:s("bs"),mp:s("e_<j?,j?>"),mB:s("hK"),k8:s("dk<M>"),fb:s("dk<p<i>>"),mI:s("oS<ci>"),jy:s("e4<cs,~()>"),ag:s("e4<~,P()>"),lU:s("e4<~,~()>"),hT:s("cy<M>"),lj:s("cy<p<i>>"),aP:s("ap<d0>"),h1:s("ap<M>"),ex:s("ap<P>"),F:s("ap<~>"),g8:s("oZ"),y:s("P"),W:s("aa"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aF)"),S:s("i"),ma:s("bi?"),gK:s("y<W>?"),b3:s("d0?"),B:s("M?"),bE:s("p<cD<@>>?"),lH:s("p<@>?"),b:s("J<k,j?>?"),nh:s("dK?"),X:s("j?"),ad:s("Ep?"),dY:s("cn?"),lY:s("ji?"),jB:s("d9?"),x:s("k?"),f8:s("cO?"),a_:s("cw?"),he:s("hs?"),dd:s("bs?"),o9:s("P?"),dA:s("aa?"),U:s("i?"),jh:s("aW?"),o:s("aW"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aF)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ci=J.m5.prototype
B.b=J.z.prototype
B.c=J.iL.prototype
B.x=J.et.prototype
B.a=J.dE.prototype
B.cj=J.bP.prototype
B.ck=J.aE.prototype
B.aA=A.j5.prototype
B.cZ=A.j7.prototype
B.y=A.j8.prototype
B.f=A.ez.prototype
B.ba=J.mH.prototype
B.aL=J.dU.prototype
B.ap=new A.dt("Operation was cancelled")
B.a6=new A.fl(0,"visible")
B.aO=new A.fl(1,"hidden")
B.bu=new A.kL(1)
B.e7=new A.kL(-1)
B.a7=new A.ed(0,"applied")
B.a8=new A.ed(1,"quarantined")
B.bv=new A.ed(2,"conflict")
B.a9=new A.ed(3,"skipped")
B.bw=new A.kP(127)
B.aa=new A.kU(0,"changed")
B.aP=new A.kU(1,"deleted")
B.by=new A.ii(!1)
B.aq=new A.kV(B.by)
B.bz=new A.ii(!0)
B.bx=new A.kV(B.bz)
B.c0=new A.jQ(A.ac("jQ<p<i>>"))
B.bA=new A.dw(B.c0)
B.bB=new A.iI(A.N_(),A.ac("iI<i>"))
B.bC=new A.kT()
B.ar=new A.kW()
B.bD=new A.l5()
B.bE=new A.l8()
B.F={}
B.a_=new A.aX(B.F,[],A.ac("aX<k,j>"))
B.ed=new A.ve(0,"conflict")
B.e8=new A.qz()
B.aQ=new A.r4()
B.bF=new A.lv(A.ac("lv<0&>"))
B.r=new A.lu()
B.aR=new A.ly(A.ac("ly<0&>"))
B.aS=new A.lz()
B.P=new A.lz()
B.bG=new A.lY()
B.bH=new A.m4()
B.aT=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bI=function() {
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
B.bN=function(getTagFallback) {
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
B.bJ=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bM=function(hooks) {
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
B.bL=function(hooks) {
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
B.bK=function(hooks) {
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
B.aU=function(hooks) { return hooks; }

B.h=new A.tD()
B.bO=new A.uI()
B.k=new A.fW()
B.bP=new A.mC()
B.aV=new A.vO()
B.bQ=new A.vX()
B.bR=new A.mN()
B.d=new A.wV()
B.bS=new A.ng()
B.bT=new A.no()
B.bU=new A.np()
B.bV=new A.nr()
B.bW=new A.nw()
B.bX=new A.ny()
B.o=new A.nR()
B.e=new A.nS()
B.bY=new A.nT()
B.bZ=new A.nV()
B.c_=new A.yk()
B.t=new A.z4()
B.ab=new A.ze()
B.as=new A.zM()
B.aW=new A.f5()
B.i=new A.oM()
B.l=new A.oP()
B.c1=new A.Ao()
B.Q=new A.oW()
B.ac=new A.dx(0,"create")
B.A=new A.dx(1,"update")
B.c2=new A.dx(2,"archive")
B.c3=new A.dx(3,"restore")
B.at=new A.dx(4,"purge")
B.c4=new A.dx(5,"hide")
B.H=new A.im(0,"local")
B.au=new A.im(1,"remote")
B.ad=new A.im(2,"resolution")
B.c5=new A.ld(3,"ignore")
B.R=new A.ld(4,"replace")
B.p=new A.lx(0,"normal")
B.aX=new A.lx(1,"full")
B.D=new A.aC(0)
B.av=new A.aC(1e6)
B.aY=new A.aC(16e3)
B.e9=new A.aC(18e8)
B.c6=new A.aC(2e5)
B.aZ=new A.aC(3e5)
B.ae=new A.aC(3e7)
B.S=new A.aC(3e8)
B.af=new A.aC(5e5)
B.c7=new A.aC(5e6)
B.ea=new A.aC(6048e8)
B.eb=new A.aC(7776e9)
B.ec=new A.aC(864e8)
B.aw=new A.c2(0,"text")
B.T=new A.c2(1,"int")
B.U=new A.c2(2,"real")
B.B=new A.c2(3,"bool")
B.V=new A.c2(4,"date")
B.I=new A.c2(5,"enumValue")
B.W=new A.c2(6,"json")
B.X=new A.c2(7,"jsonList")
B.J=new A.c2(8,"ref")
B.c8=new A.iA(!1)
B.ax=new A.dz("x",1,"opfsExternalLocks")
B.b_=new A.dz("y",2,"opfsExternalLocksWorkaround")
B.b0=new A.fH("/database",0,"database")
B.b1=new A.fH("/database-journal",1,"journal")
B.ce=new A.bk("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.cf=new A.bk("fieldCipher envelope must be a map.",null,null)
B.az=new A.aX(B.F,[],A.ac("aX<k,k>"))
B.cg=new A.er(B.az)
B.b2=new A.iH(0,"live")
B.cl=new A.mb(null)
B.cm=new A.mc(null)
B.cn=new A.d2(0,"textExpected")
B.co=new A.d2(1,"intExpected")
B.cp=new A.d2(2,"numberExpected")
B.cq=new A.d2(3,"boolExpected")
B.cr=new A.d2(4,"jsonExpected")
B.cs=new A.d2(5,"jsonListExpected")
B.ct=new A.d2(6,"enumValueRejected")
B.cu=new A.mg(255)
B.ay=new A.ew(B.bF,A.ac("ew<k>"))
B.cv=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b3=s([13,10],t.t)
B.aE=new A.cv(0,"unknown")
B.aF=new A.cv(1,"integer")
B.aG=new A.cv(2,"bigInt")
B.aH=new A.cv(3,"float")
B.aI=new A.cv(4,"text")
B.aJ=new A.cv(5,"blob")
B.aK=new A.cv(6,"$null")
B.bo=new A.cv(7,"boolean")
B.b4=s([B.aE,B.aF,B.aG,B.aH,B.aI,B.aJ,B.aK,B.bo],A.ac("z<cv>"))
B.cw=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.bd=new A.aZ(0,"eq")
B.d6=new A.aZ(1,"neq")
B.da=new A.aZ(2,"gt")
B.db=new A.aZ(3,"gte")
B.dc=new A.aZ(4,"lt")
B.dd=new A.aZ(5,"lte")
B.de=new A.aZ(6,"inValues")
B.df=new A.aZ(7,"between")
B.dg=new A.aZ(8,"startsWith")
B.dh=new A.aZ(9,"endsWith")
B.d7=new A.aZ(10,"contains")
B.d8=new A.aZ(11,"isNull")
B.d9=new A.aZ(12,"isNotNull")
B.cx=s([B.bd,B.d6,B.da,B.db,B.dc,B.dd,B.de,B.df,B.dg,B.dh,B.d7,B.d8,B.d9],A.ac("z<aZ>"))
B.cc=new A.iB(0,"database")
B.cd=new A.iB(1,"journal")
B.b5=s([B.cc,B.cd],A.ac("z<iB>"))
B.bp=new A.fl(2,"purged")
B.cy=s([B.a6,B.aO,B.bp],A.ac("z<fl>"))
B.z=new A.cP(0,"clean")
B.G=new A.cP(1,"dirty")
B.bl=new A.cP(2,"inFlight")
B.a5=new A.cP(3,"conflict")
B.ao=new A.cP(4,"error")
B.dz=new A.cP(5,"quarantine")
B.dA=new A.cP(6,"blocked")
B.cz=s([B.z,B.G,B.bl,B.a5,B.ao,B.dz,B.dA],A.ac("z<cP>"))
B.Y=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ag=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cA=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.ch=new A.iH(1,"notArchived")
B.cB=s([B.b2,B.ch],A.ac("z<iH>"))
B.cC=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b8=new A.jc(0,"fileUpload")
B.b9=new A.jc(1,"fileRemove")
B.cD=s([B.b8,B.b9],A.ac("z<jc>"))
B.cb=new A.dz("s",0,"opfsShared")
B.c9=new A.dz("i",3,"indexedDb")
B.ca=new A.dz("m",4,"inMemory")
B.cE=s([B.cb,B.ax,B.b_,B.c9,B.ca],A.ac("z<dz>"))
B.ah=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bq=new A.cB(0,"sum")
B.br=new A.cB(1,"avg")
B.bs=new A.cB(2,"min")
B.bt=new A.cB(3,"max")
B.cF=s([B.bq,B.br,B.bs,B.bt],A.ac("z<cB>"))
B.cG=s([B.aw,B.T,B.U,B.B,B.V,B.I,B.W,B.X,B.J],A.ac("z<c2>"))
B.m=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ai=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.Z=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cH=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fX(0,"upsert")
B.L=new A.fX(1,"archive")
B.a2=new A.fX(2,"restore")
B.cI=s([B.v,B.L,B.a2],A.ac("z<fX>"))
B.cJ=s([],A.ac("z<dA>"))
B.b6=s([],t.d)
B.cL=s([],t.my)
B.cM=s([],t.kj)
B.u=s([],t.s)
B.cK=s([],t.t)
B.aj=s([],t.dG)
B.n=s([],t.c)
B.cN=s(["*"],t.s)
B.cO=s([B.b0,B.b1],A.ac("z<fH>"))
B.cP=s(["id","updated"],t.s)
B.cQ=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bg=new A.dP(0,"opfs")
B.bh=new A.dP(1,"indexedDb")
B.ds=new A.dP(2,"inMemory")
B.cR=s([B.bg,B.bh,B.ds],A.ac("z<dP>"))
B.bm=new A.dT(0,"normal")
B.bn=new A.dT(1,"full")
B.cS=s([B.bm,B.bn],A.ac("z<dT>"))
B.ak=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cT=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cU=new A.iS(!0)
B.cV=new A.iE([16,10,24,12,32,14],A.ac("iE<i,i>"))
B.d1={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.mf()
B.q=new A.kO()
B.cW=new A.aX(B.d1,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.q,B.o,B.o],A.ac("aX<k,eq>"))
B.al=new A.aX(B.F,[],A.ac("aX<k,i>"))
B.j=new A.aX(B.F,[],A.ac("aX<k,j?>"))
B.am=new A.aX(B.F,[],A.ac("aX<i,J<k,j?>(J<k,j?>)>"))
B.cY=new A.mm(11,"simpleSuccessResponse",A.ac("mm<M>"))
B.a0=new A.dM(0,"createOrUpdate")
B.a1=new A.dM(1,"createOrUpdateMerge")
B.b7=new A.dM(2,"create")
B.K=new A.dM(3,"update")
B.C=new A.dM(4,"archive")
B.E=new A.dM(5,"restore")
B.ee=new A.vt(2,"readWriteCreate")
B.d3=new A.cm("id",!1)
B.d4=new A.co(B.b6,null,null,!1,!1)
B.bb=new A.mI(0,"native")
B.aB=new A.mI(1,"web")
B.M=new A.b4(0,1,0,0,0,!1)
B.an=new A.b4(0,0,0,0,0,!0)
B.a3=new A.b4(0,0,0,0,0,!1)
B.d5=new A.b4(0,0,0,1,0,!1)
B.bc=new A.b4(0,0,1,0,0,!1)
B.a4=new A.b4(1,0,0,0,0,!1)
B.di=new A.a4("archived",!0)
B.dj=new A.a4("0",B.n)
B.aC=new A.k4(!1,!1)
B.dk=new A.f3(0,0,0)
B.dl=new A.f3(null,null,null)
B.d0={hidden:0}
B.dm=new A.dy(B.d0,1,t.M)
B.d_={id:0,archived:1,hidden:2,extra:3}
B.be=new A.dy(B.d_,4,t.M)
B.d2={open:0,contract_request:1,contract_event:2}
B.dn=new A.dy(B.d2,3,t.M)
B.bf=new A.dy(B.F,0,t.M)
B.dp=new A.jr(0,"insert")
B.dq=new A.jr(1,"update")
B.dr=new A.jr(2,"delete")
B.dt=new A.jw(-1,null)
B.du=new A.jx("_clientToken")
B.N=new A.c8(0,"closed")
B.dv=new A.c8(1,"opening")
B.bi=new A.c8(2,"offline")
B.aD=new A.c8(3,"authRequired")
B.bj=new A.c8(4,"idle")
B.dw=new A.c8(5,"pulling")
B.dx=new A.c8(6,"pushing")
B.dy=new A.c8(7,"backoff")
B.bk=new A.c8(8,"paused")
B.O=new A.bp(B.al,B.al,0,0,0,0,!1)
B.dB=new A.eM(B.N,0,0,0,0,null,null,null)
B.dC=A.bK("kJ")
B.dD=A.bK("ee")
B.dE=A.bK("C1")
B.dF=A.bK("rR")
B.dG=A.bK("rS")
B.dH=A.bK("tw")
B.dI=A.bK("tx")
B.dJ=A.bK("ty")
B.dK=A.bK("M")
B.dL=A.bK("j")
B.dM=A.bK("jp")
B.dN=A.bK("xH")
B.dO=A.bK("xI")
B.dP=A.bK("xJ")
B.dQ=A.bK("cR")
B.aM=new A.jz(!1)
B.dR=new A.jz(!0)
B.dS=new A.dg(14)
B.dT=new A.dg(522)
B.dU=new A.dg(778)
B.dV=new A.AD(B.i,A.M1())
B.dW=new A.AE(B.i,A.M2())
B.dX=new A.AF(B.i,A.M3())
B.dY=new A.AG(B.i,A.M4())
B.dZ=new A.p7(B.i,A.M5())
B.e_=new A.AH(B.i,A.M6())
B.e0=new A.AI(B.i,A.M7())
B.e1=new A.AJ(B.i,A.M8())
B.e2=new A.AK(B.i,A.M9())
B.e3=new A.AM(B.i,A.Mb())
B.e4=new A.AN(B.i,A.Mc())
B.e5=new A.AL(B.i,A.Ma())
B.e6=new A.p8(B.i,A.Md())
B.cX=new A.aX(B.F,[],A.ac("aX<j?,j?>"))
B.aN=new A.p9(B.i,B.cX)})();(function staticFields(){$.zO=null
$.f9=A.l([],t.hf)
$.Lx=null
$.Es=null
$.w4=0
$.mL=A.Lm()
$.DQ=null
$.DP=null
$.Gs=null
$.Gc=null
$.GC=null
$.Bo=null
$.BB=null
$.Dl=null
$.A0=A.l([],A.ac("z<p<j>?>"))
$.i0=null
$.ko=null
$.kp=null
$.D7=!1
$.C=B.i
$.A4=null
$.EV=null
$.EW=null
$.EX=null
$.EY=null
$.CO=A.yG("_lastQuoRemDigits")
$.CP=A.yG("_lastQuoRemUsed")
$.jJ=A.yG("_lastRemUsed")
$.CQ=A.yG("_lastRem_nsh")
$.EM=""
$.EN=null
$.h1=function(){var s=t.N
return A.v(s,s)}()
$.FE=null
$.AX=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Nv","GT",()=>A.Bt("_$dart_dartClosure"))
s($,"Nu","fi",()=>A.Bt("_$dart_dartClosure_dartJSInterop"))
s($,"O8","ps",()=>A.vm(0))
s($,"Ow","Hs",()=>B.i.aV(new A.BE(),A.ac("y<~>")))
s($,"Oq","Hp",()=>A.l([new J.m6()],A.ac("z<jm>")))
s($,"NN","GX",()=>A.df(A.xG({
toString:function(){return"$receiver$"}})))
s($,"NO","GY",()=>A.df(A.xG({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"NP","GZ",()=>A.df(A.xG(null)))
s($,"NQ","H_",()=>A.df(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"NT","H2",()=>A.df(A.xG(void 0)))
s($,"NU","H3",()=>A.df(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"NS","H1",()=>A.df(A.EJ(null)))
s($,"NR","H0",()=>A.df(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"NW","H5",()=>A.df(A.EJ(void 0)))
s($,"NV","H4",()=>A.df(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"NZ","Dw",()=>A.JE())
s($,"NB","eb",()=>$.Hs())
s($,"NA","GU",()=>A.JX(!1,B.i,t.y))
s($,"Oe","Hf",()=>A.vm(4096))
s($,"Oc","Hd",()=>new A.AA().$0())
s($,"Od","He",()=>new A.Az().$0())
s($,"O0","Dx",()=>A.IQ(A.b8(A.l([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"O_","H6",()=>A.vm(0))
s($,"O7","cg",()=>A.jI(0))
s($,"O5","fj",()=>A.jI(1))
s($,"O6","H9",()=>A.jI(2))
s($,"O3","Dz",()=>$.fj().bC(0))
s($,"O1","Dy",()=>A.jI(1e4))
r($,"O4","H8",()=>A.af("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"O2","H7",()=>A.vm(8))
s($,"O9","Ha",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"Oa","Hb",()=>A.af("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"Ob","Hc",()=>typeof URLSearchParams=="function")
s($,"Oh","fk",()=>A.kx(B.dL))
s($,"NG","kC",()=>{A.J_()
return $.w4})
s($,"Oi","Hi",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"NE","BW",()=>{var q=new A.zN(A.IP(8))
q.oO()
return q})
s($,"Nw","kB",()=>A.HL(B.cZ.gab(A.IR(A.b8(A.l([1],t.t)))),0,null).getInt8(0)===1?B.P:B.aS)
s($,"Nn","Dr",()=>A.af("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"Ok","BX",()=>A.af("\\r\\n|\\r|\\n",!0,!1))
s($,"NC","GV",()=>A.Ex())
s($,"Of","DA",()=>A.af("^[\\x00-\\x7F]+$",!0,!1))
s($,"Og","Hg",()=>A.af('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"Oy","Ht",()=>A.af('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"Oj","Hj",()=>A.af("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"On","Hm",()=>A.af('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"Om","Hl",()=>A.af("\\\\(.)",!0,!1))
s($,"Ov","Hr",()=>A.af('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"Oz","Hu",()=>A.af("(?:"+$.Hj().a+")*",!0,!1))
s($,"Nr","Ds",()=>A.af("^[0-9a-f]{64}$",!0,!1))
s($,"Op","Ho",()=>A.Ey())
s($,"Ox","pt",()=>A.af("^[a-z0-9]{15}$",!0,!1))
r($,"L5","Hh",()=>A.I2().a)
s($,"Nx","Dt",()=>A.af("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"Ns","GR",()=>A.C7("declaredNames",t.aJ))
s($,"Nt","GS",()=>A.C7("fieldByName",A.ac("J<k,aY>")))
s($,"Ol","Hk",()=>A.af("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"NM","kE",()=>new A.j())
s($,"Os","ic",()=>new A.qI($.Du()))
s($,"NJ","GW",()=>new A.vZ(A.af("/",!0,!1),A.af("[^/]$",!0,!1),A.af("^/",!0,!1)))
s($,"NL","pr",()=>new A.y5(A.af("[/\\\\]",!0,!1),A.af("[^/\\\\]$",!0,!1),A.af("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.af("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"NK","kD",()=>new A.xM(A.af("/",!0,!1),A.af("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.af("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.af("^/",!0,!1)))
s($,"NI","Du",()=>A.Jq())
s($,"Nq","GQ",()=>$.fj().bD(0,63).bC(0))
s($,"Np","GP",()=>{var q=$.fj()
return q.bD(0,63).fU(0,q)})
s($,"No","pq",()=>A.Ey())
s($,"NX","Dv",()=>A.C7(null,t.S))
s($,"Or","Hq",()=>A.ID(A.l([A.CF("files"),A.CF("blocks")],t.s)))
s($,"Ny","BV",()=>{var q,p,o=A.v(t.N,A.ac("fH"))
for(q=0;q<2;++q){p=B.cO[q]
o.j(0,p.c,p)}return o})
s($,"Oo","Hn",()=>A.Ex())
r($,"NY","kF",()=>{var q="navigator"
return A.Iu(A.Iv(A.Dj(A.GH(),q),A.CF("locks")))?A.Dj(A.Dj(A.GH(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fU,ArrayBuffer:A.fT,ArrayBufferView:A.j6,DataView:A.j5,Float32Array:A.ms,Float64Array:A.mt,Int16Array:A.mu,Int32Array:A.mv,Int8Array:A.mw,Uint16Array:A.j7,Uint32Array:A.j8,Uint8ClampedArray:A.j9,CanvasPixelArray:A.j9,Uint8Array:A.ez})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fV.$nativeSuperclassTag="ArrayBufferView"
A.k0.$nativeSuperclassTag="ArrayBufferView"
A.k1.$nativeSuperclassTag="ArrayBufferView"
A.dN.$nativeSuperclassTag="ArrayBufferView"
A.k2.$nativeSuperclassTag="ArrayBufferView"
A.k3.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.MY
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
