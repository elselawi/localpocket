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
if(a[b]!==s){A.N3(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.j(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.CY(b)
return new s(c,this)}:function(){if(s===null)s=A.CY(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.CY(a).prototype
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
D6(a,b,c,d){return{i:a,p:b,e:c,x:d}},
Bh(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.D4==null){A.My()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Ex("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.zA
if(o==null)o=$.zA=A.Bg(n)
p=q[o]}if(p!=null)return p
p=A.MH(a)
if(p!=null)return p
if(typeof a=="function")return B.ci
s=Object.getPrototypeOf(a)
if(s==null)return B.ba
if(s===Object.prototype)return B.ba
if(typeof q=="function"){o=$.zA
if(o==null)o=$.zA=A.Bg(n)
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
C4(a,b){if(a<0||a>4294967295)throw A.b(A.ax(a,0,4294967295,"length",null))
return J.DZ(new Array(a),b)},
DY(a,b){if(a<0)throw A.b(A.Q("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("B<0>"))},
DX(a,b){if(a<0)throw A.b(A.Q("Length must be a non-negative integer: "+a,null))
return A.j(new Array(a),b.i("B<0>"))},
DZ(a,b){var s=A.j(a,b.i("B<0>"))
s.$flags=1
return s},
If(a,b){return J.Dn(a,b)},
E_(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Ii(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.E_(r))break;++b}return b},
E0(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.E_(r))break}return b},
dn(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iG.prototype
return J.m2.prototype}if(typeof a=="string")return J.dB.prototype
if(a==null)return J.iH.prototype
if(typeof a=="boolean")return J.m1.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fB.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.k)return a
return J.Bh(a)},
M(a){if(typeof a=="string")return J.dB.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fB.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.k)return a
return J.Bh(a)},
aB(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fB.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.k)return a
return J.Bh(a)},
Mq(a){if(typeof a=="number")return J.ep.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dS.prototype
return a},
Mr(a){if(typeof a=="number")return J.ep.prototype
if(typeof a=="string")return J.dB.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dS.prototype
return a},
Bf(a){if(typeof a=="string")return J.dB.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dS.prototype
return a},
ks(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fB.prototype
if(typeof a=="bigint")return J.br.prototype
return a}if(a instanceof A.k)return a
return J.Bh(a)},
x(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dn(a).R(a,b)},
R(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Gg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.M(a).h(a,b)},
bY(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Gg(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aB(a).j(a,b,c)},
aL(a,b){return J.aB(a).t(a,b)},
Dk(a,b){return J.aB(a).C(a,b)},
BM(a,b){return J.Bf(a).hy(a,b)},
pn(a){return J.ks(a).mm(a)},
Dl(a,b,c){return J.ks(a).hz(a,b,c)},
Dm(a,b,c){return J.ks(a).mn(a,b,c)},
Hh(a){return J.ks(a).mo(a)},
bL(a,b,c){return J.ks(a).hA(a,b,c)},
po(a,b){return J.aB(a).hD(a,b)},
Hi(a,b,c){return J.Mq(a).bN(a,b,c)},
Dn(a,b){return J.Mr(a).a0(a,b)},
BN(a,b){return J.M(a).F(a,b)},
pp(a,b){return J.aB(a).a8(a,b)},
kC(a,b){return J.aB(a).cD(a,b)},
Hj(a){return J.ks(a).gaa(a)},
bZ(a){return J.aB(a).gG(a)},
a7(a){return J.dn(a).gI(a)},
by(a){return J.M(a).gE(a)},
e8(a){return J.M(a).gW(a)},
E(a){return J.aB(a).gu(a)},
pq(a){return J.aB(a).ga1(a)},
aq(a){return J.M(a).gm(a)},
c_(a){return J.dn(a).gaj(a)},
BO(a){return J.aB(a).gap(a)},
Hk(a,b,c){return J.aB(a).fK(a,b,c)},
Hl(a,b,c){return J.aB(a).aC(a,b,c)},
bM(a,b,c){return J.aB(a).ce(a,b,c)},
Hm(a,b,c){return J.Bf(a).eh(a,b,c)},
Hn(a,b){return J.M(a).sm(a,b)},
Ho(a,b,c,d,e){return J.aB(a).ah(a,b,c,d,e)},
pr(a,b){return J.aB(a).bi(a,b)},
Do(a,b){return J.aB(a).ck(a,b)},
Hp(a,b){return J.Bf(a).cQ(a,b)},
Hq(a,b){return J.Bf(a).S(a,b)},
Hr(a,b,c){return J.aB(a).T(a,b,c)},
BP(a,b){return J.aB(a).cL(a,b)},
Hs(a){return J.aB(a).er(a)},
a0(a){return J.dn(a).l(a)},
Dp(a,b){return J.aB(a).dt(a,b)},
Dq(a,b){return J.aB(a).ky(a,b)},
m_:function m_(){},
m1:function m1(){},
iH:function iH(){},
aF:function aF(){},
dD:function dD(){},
mB:function mB(){},
dS:function dS(){},
bP:function bP(){},
br:function br(){},
fB:function fB(){},
B:function B(a){this.$ti=a},
m0:function m0(){},
tu:function tu(a){this.$ti=a},
fb:function fb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ep:function ep(){},
iG:function iG(){},
m2:function m2(){},
dB:function dB(){}},A={C7:function C7(){},
fd(a,b,c){if(t.O.b(a))return new A.jM(a,b.i("@<0>").V(c).i("jM<1,2>"))
return new A.ec(a,b.i("@<0>").V(c).i("ec<1,2>"))},
E2(a){return new A.dC("Field '"+a+"' has been assigned during initialization.")},
E3(a){return new A.dC("Field '"+a+"' has not been initialized.")},
Im(a){return new A.dC("Field '"+a+"' has already been initialized.")},
fU(a){return new A.mN(a)},
Bk(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ay(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hd(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cz(a,b,c){return a},
D5(a){var s,r
for(s=$.f0.length,r=0;r<s;++r)if(a===$.f0[r])return!0
return!1},
cu(a,b,c,d){A.bc(b,"start")
if(c!=null){A.bc(c,"end")
if(b>c)A.t(A.ax(b,0,c,"start",null))}return new A.ct(a,b,c,d.i("ct<0>"))},
dG(a,b,c,d){if(t.O.b(a))return new A.ek(a,b,c.i("@<0>").V(d).i("ek<1,2>"))
return new A.cl(a,b,c.i("@<0>").V(d).i("cl<1,2>"))},
Er(a,b,c){var s="takeCount"
A.kJ(b,s)
A.bc(b,s)
if(t.O.b(a))return new A.iq(a,b,c.i("iq<0>"))
return new A.eG(a,b,c.i("eG<0>"))},
Eo(a,b,c){var s="count"
if(t.O.b(a)){A.kJ(b,s)
A.bc(b,s)
return new A.fp(a,b,c.i("fp<0>"))}A.kJ(b,s)
A.bc(b,s)
return new A.d9(a,b,c.i("d9<0>"))},
aE(){return new A.bl("No element")},
iE(){return new A.bl("Too many elements")},
DV(){return new A.bl("Too few elements")},
n3(a,b,c,d){if(c-b<=32)A.J4(a,b,c,d)
else A.J3(a,b,c,d)},
J4(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.M(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
J3(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.N(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.N(a4+a5,2),e=f-i,d=f+i,c=J.M(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
A.n3(a3,a4,r-2,a6)
A.n3(a3,q+2,a5,a6)
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
break}}A.n3(a3,r,q,a6)}else A.n3(a3,r,q,a6)},
yS:function yS(a){this.a=0
this.b=a},
ys:function ys(a){this.a=0
this.b=a},
dV:function dV(){},
l1:function l1(a,b){this.a=a
this.$ti=b},
ec:function ec(a,b){this.a=a
this.$ti=b},
jM:function jM(a,b){this.a=a
this.$ti=b},
jJ:function jJ(){},
yt:function yt(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b){this.a=a
this.$ti=b},
pS:function pS(a,b){this.a=a
this.b=b},
pR:function pR(a){this.a=a},
dC:function dC(a){this.a=a},
mN:function mN(a){this.a=a},
cj:function cj(a){this.a=a},
Br:function Br(){},
wI:function wI(){},
J:function J(){},
Z:function Z(){},
ct:function ct(a,b,c,d){var _=this
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
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
me:function me(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(a,b,c){this.a=a
this.b=b
this.$ti=c},
cV:function cV(a,b,c){this.a=a
this.b=b
this.$ti=c},
iu:function iu(a,b,c){this.a=a
this.b=b
this.$ti=c},
lw:function lw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eG:function eG(a,b,c){this.a=a
this.b=b
this.$ti=c},
iq:function iq(a,b,c){this.a=a
this.b=b
this.$ti=c},
nu:function nu(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
fp:function fp(a,b,c){this.a=a
this.b=b
this.$ti=c},
n2:function n2(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a){this.$ti=a},
lt:function lt(a){this.$ti=a},
bF:function bF(a,b){this.a=a
this.$ti=b},
nU:function nU(a,b){this.a=a
this.$ti=b},
ix:function ix(){},
nG:function nG(){},
hh:function hh(){},
bT:function bT(a,b){this.a=a
this.$ti=b},
jt:function jt(a){this.a=a},
kj:function kj(){},
HL(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bD(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.q)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aV(q,A.bD(new A.ar(a,m.i("ar<2>")),!0,c),b.i("@<0>").V(c).i("aV<1,2>"))
n.$keys=l
return n}return new A.il(A.bb(a,b,c),b.i("@<0>").V(c).i("il<1,2>"))},
HM(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
HN(){throw A.b(A.Y("Cannot modify constant Set"))},
GA(a){var s=A.Gz(a)
if(s!=null)return s
return"minified:"+a},
Gg(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a0(a)
return s},
ez(a){var s,r=$.Ed
if(r==null)r=$.Ed=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jb(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
IN(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.ci(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mE(a){var s,r,q,p
if(a instanceof A.k)return A.bW(A.bx(a),null)
s=J.dn(a)
if(s===B.ch||s===B.cj||t.cx.b(a)){r=B.aS(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bW(A.bx(a),null)},
Ef(a){var s,r,q
if(a==null||typeof a=="number"||A.bH(a))return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ef)return a.l(0)
if(a instanceof A.hF)return a.ma(!0)
s=$.Hb()
for(r=0;r<1;++r){q=s[r].wP(a)
if(q!=null)return q}return"Instance of '"+A.mE(a)+"'"},
IJ(){return Date.now()},
IM(){var s,r
if($.vS!==0)return
$.vS=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.vS=1e6
$.mF=new A.vR(r)},
II(){if(!!self.location)return self.location.href
return null},
Ec(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
IO(a){var s,r,q,p=A.j([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
if(!A.ai(q))throw A.b(A.f2(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.af(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.f2(q))}return A.Ec(p)},
Eg(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ai(q))throw A.b(A.f2(q))
if(q<0)throw A.b(A.f2(q))
if(q>65535)return A.IO(a)}return A.Ec(a)},
IP(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bt(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.af(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.ax(a,0,1114111,null,null))},
IQ(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.ak(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.N(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
bs(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Ci(a){return a.c?A.bs(a).getUTCFullYear()+0:A.bs(a).getFullYear()+0},
Cg(a){return a.c?A.bs(a).getUTCMonth()+1:A.bs(a).getMonth()+1},
vQ(a){return a.c?A.bs(a).getUTCDate()+0:A.bs(a).getDate()+0},
Ce(a){return a.c?A.bs(a).getUTCHours()+0:A.bs(a).getHours()+0},
Cf(a){return a.c?A.bs(a).getUTCMinutes()+0:A.bs(a).getMinutes()+0},
Ch(a){return a.c?A.bs(a).getUTCSeconds()+0:A.bs(a).getSeconds()+0},
Ee(a){return a.c?A.bs(a).getUTCMilliseconds()+0:A.bs(a).getMilliseconds()+0},
IL(a){return B.c.ak((a.c?A.bs(a).getUTCDay()+0:A.bs(a).getDay()+0)+6,7)+1},
IK(a){var s=a.$thrownJsError
if(s==null)return null
return A.ad(s)},
mG(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
Ba(a,b){var s,r="index"
if(!A.ai(b))return new A.bz(!0,b,r,null)
s=J.aq(a)
if(b<0||b>=s)return A.lX(b,s,a,null,r)
return A.wv(b,r)},
Mi(a,b,c){if(a<0||a>c)return A.ax(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ax(b,a,c,"end",null)
return new A.bz(!0,b,"end",null)},
f2(a){return new A.bz(!0,a,null,null)},
b(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.dc()
b.dartException=a
s=A.N4
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
N4(){return J.a0(this.dartException)},
t(a,b){throw A.aK(a,b==null?new Error():b)},
H(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.t(A.KK(a,b,c),s)},
KK(a,b,c){var s,r,q,p,o,n,m,l,k
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
dd(a){var s,r,q,p,o,n
a=A.Gp(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.j([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.xt(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
xu(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Ew(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
C8(a,b){var s=b==null,r=s?null:b.method
return new A.m3(a,r,s?null:b.receiver)},
F(a){if(a==null)return new A.mt(a)
if(a instanceof A.is)return A.e6(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.e6(a,a.dartException)
return A.LE(a)},
e6(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
LE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.af(r,16)&8191)===10)switch(q){case 438:return A.e6(a,A.C8(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.e6(a,new A.j6())}}if(a instanceof TypeError){p=$.GJ()
o=$.GK()
n=$.GL()
m=$.GM()
l=$.GP()
k=$.GQ()
j=$.GO()
$.GN()
i=$.GS()
h=$.GR()
g=p.bP(s)
if(g!=null)return A.e6(a,A.C8(s,g))
else{g=o.bP(s)
if(g!=null){g.method="call"
return A.e6(a,A.C8(s,g))}else if(n.bP(s)!=null||m.bP(s)!=null||l.bP(s)!=null||k.bP(s)!=null||j.bP(s)!=null||m.bP(s)!=null||i.bP(s)!=null||h.bP(s)!=null)return A.e6(a,new A.j6())}return A.e6(a,new A.nF(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jo()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e6(a,new A.bz(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jo()
return a},
ad(a){var s
if(a instanceof A.is)return a.b
if(a==null)return new A.k4(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.k4(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kt(a){if(a==null)return J.a7(a)
if(typeof a=="object")return A.ez(a)
return J.a7(a)},
M6(a){if(typeof a=="number")return B.x.gI(a)
if(a instanceof A.oU)return A.ez(a)
if(a instanceof A.hF)return a.gI(a)
if(a instanceof A.jt)return a.gI(0)
return A.kt(a)},
Gc(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
Mo(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
KX(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.DL("Unsupported number of arguments for wrapped closure"))},
e5(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.Mb(a,b)
a.$identity=s
return s},
Mb(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.KX)},
HF(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.wT().constructor.prototype):Object.create(new A.id(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.DE(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.HB(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.DE(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
HB(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Hw)}throw A.b("Error in functionType of tearoff")},
HC(a,b,c,d){var s=A.DB
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
DE(a,b,c,d){if(c)return A.HE(a,b,d)
return A.HC(b.length,d,a,b)},
HD(a,b,c,d){var s=A.DB,r=A.Hx
switch(b?-1:a){case 0:throw A.b(new A.mW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
HE(a,b,c){var s,r
if($.Dz==null)$.Dz=A.Dy("interceptor")
if($.DA==null)$.DA=A.Dy("receiver")
s=b.length
r=A.HD(s,c,a,b)
return r},
CY(a){return A.HF(a)},
Hw(a,b){return A.kd(v.typeUniverse,A.bx(a.a),b)},
DB(a){return a.a},
Hx(a){return a.b},
Dy(a){var s,r,q,p=new A.id("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.Q("Field name "+a+" not found.",null))},
Bg(a){return v.getIsolateTag(a)},
N7(a,b){var s=$.C
if(s===B.i)return a
return s.hC(a,b)},
Gt(){return v.G},
Oe(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
MH(a){var s,r,q,p,o,n=$.Ge.$1(a),m=$.Bb[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Bo[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.FY.$2(a,n)
if(q!=null){m=$.Bb[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Bo[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.Bq(s)
$.Bb[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.Bo[n]=s
return s}if(p==="-"){o=A.Bq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Gm(a,s)
if(p==="*")throw A.b(A.Ex(n))
if(v.leafTags[n]===true){o=A.Bq(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Gm(a,s)},
Gm(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.D6(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
Bq(a){return J.D6(a,!1,null,!!a.$ibQ)},
MJ(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.Bq(s)
else return J.D6(s,c,null,null)},
My(){if(!0===$.D4)return
$.D4=!0
A.Mz()},
Mz(){var s,r,q,p,o,n,m,l
$.Bb=Object.create(null)
$.Bo=Object.create(null)
A.Mx()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Go.$1(o)
if(n!=null){m=A.MJ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Mx(){var s,r,q,p,o,n,m=B.bH()
m=A.hX(B.bI,A.hX(B.bJ,A.hX(B.aT,A.hX(B.aT,A.hX(B.bK,A.hX(B.bL,A.hX(B.bM(B.aS),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Ge=new A.Bl(p)
$.FY=new A.Bm(o)
$.Go=new A.Bn(n)},
hX(a,b){return a(b)||b},
K1(a,b){var s
for(s=0;s<a.length;++s)if(!J.x(a[s],b[s]))return!1
return!0},
Mf(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
C6(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
MY(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eq){s=B.a.ae(a,c)
return b.b.test(s)}else return!J.BM(b,B.a.ae(a,c)).gE(0)},
Ga(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Gp(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.N_(a,b,c)
if(b instanceof A.eq){s=b.glJ()
s.lastIndex=0
return a.replace(s,A.Ga(c))}return A.MZ(a,b,c)},
MZ(a,b,c){var s,r,q,p
for(s=J.BM(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gP())+c
r=p.gM()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
N_(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Gp(b),"g"),A.Ga(c))},
FR(a){return a},
Gu(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hy(0,a),s=new A.o0(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.FR(B.a.A(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.FR(B.a.ae(a,q)))
return s.charCodeAt(0)==0?s:s},
N0(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.Gv(a,s,s+b.length,c)},
Gv(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a4:function a4(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
oC:function oC(a,b){this.a=a
this.b=b},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
oD:function oD(a){this.a=a},
il:function il(a,b){this.a=a
this.$ti=b},
fl:function fl(){},
qA:function qA(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b){this.a=a
this.$ti=b},
hB:function hB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iz:function iz(a,b){this.a=a
this.$ti=b},
im:function im(){},
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
to:function to(){},
iD:function iD(a,b){this.a=a
this.$ti=b},
vR:function vR(a){this.a=a},
jh:function jh(){},
xt:function xt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j6:function j6(){},
m3:function m3(a,b,c){this.a=a
this.b=b
this.c=c},
nF:function nF(a){this.a=a},
mt:function mt(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a
this.b=null},
ef:function ef(){},
pX:function pX(){},
pY:function pY(){},
xj:function xj(){},
wT:function wT(){},
id:function id(a,b){this.a=a
this.b=b},
mW:function mW(a){this.a=a},
bB:function bB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tv:function tv(a){this.a=a},
uu:function uu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
T:function T(a,b){this.a=a
this.$ti=b},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ar:function ar(a,b){this.a=a
this.$ti=b},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aM:function aM(a,b){this.a=a
this.$ti=b},
mb:function mb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
iJ:function iJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iI:function iI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
Bl:function Bl(a){this.a=a},
Bm:function Bm(a){this.a=a},
Bn:function Bn(a){this.a=a},
hF:function hF(){},
oz:function oz(){},
oA:function oA(){},
oB:function oB(){},
eq:function eq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hE:function hE(a){this.b=a},
o_:function o_(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ha:function ha(a,b){this.a=a
this.c=b},
oP:function oP(a,b,c){this.a=a
this.b=b
this.c=c},
A8:function A8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
N3(a){throw A.aK(A.E2(a),new Error())},
v(){throw A.aK(A.E3(""),new Error())},
cg(){throw A.aK(A.Im(""),new Error())},
BG(){throw A.aK(A.E2(""),new Error())},
CF(){var s=new A.o8("")
return s.b=s},
yu(a){var s=new A.o8(a)
return s.b=s},
o8:function o8(a){this.a=a
this.b=null},
hS(a,b,c){},
b7(a){var s,r,q
if(t.iy.b(a))return a
s=J.M(a)
r=A.af(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
IB(a){return new DataView(new ArrayBuffer(a))},
E7(a,b,c){A.hS(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d5(a,b,c){A.hS(a,b,c)
c=B.c.N(a.byteLength-b,4)
return new Int32Array(a,b,c)},
IC(a){return new Int8Array(a)},
ID(a){return new Uint16Array(a)},
E8(a,b,c){A.hS(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
va(a){return new Uint8Array(a)},
bS(a,b,c){A.hS(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dk(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.Ba(b,a))},
dl(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Mi(a,b,c))
if(b==null)return c
return b},
fJ:function fJ(){},
fI:function fI(){},
j1:function j1(){},
oX:function oX(a){this.a=a},
j0:function j0(){},
fK:function fK(){},
dK:function dK(){},
bR:function bR(){},
mm:function mm(){},
mn:function mn(){},
mo:function mo(){},
mp:function mp(){},
mq:function mq(){},
j2:function j2(){},
j3:function j3(){},
j4:function j4(){},
ev:function ev(){},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(){},
Cm(a,b){var s=b.c
return s==null?b.c=A.kb(a,"A",[b.x]):s},
El(a){var s=a.w
if(s===6||s===7)return A.El(a.x)
return s===11||s===12},
IZ(a){return a.as},
Gl(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.Ae(v.typeUniverse,a,!1)},
MB(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.e3(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
e3(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.e3(a1,s,a3,a4)
if(r===s)return a2
return A.F1(a1,r,!0)
case 7:s=a2.x
r=A.e3(a1,s,a3,a4)
if(r===s)return a2
return A.F0(a1,r,!0)
case 8:q=a2.y
p=A.hW(a1,q,a3,a4)
if(p===q)return a2
return A.kb(a1,a2.x,p)
case 9:o=a2.x
n=A.e3(a1,o,a3,a4)
m=a2.y
l=A.hW(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.CJ(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hW(a1,j,a3,a4)
if(i===j)return a2
return A.F2(a1,k,i)
case 11:h=a2.x
g=A.e3(a1,h,a3,a4)
f=a2.y
e=A.Lz(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.F_(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hW(a1,d,a3,a4)
o=a2.x
n=A.e3(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.CK(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kN("Attempted to substitute unexpected RTI kind "+a0))}},
hW(a,b,c,d){var s,r,q,p,o=b.length,n=A.Ao(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e3(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
LA(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.Ao(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e3(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Lz(a,b,c,d){var s,r=b.a,q=A.hW(a,r,c,d),p=b.b,o=A.hW(a,p,c,d),n=b.c,m=A.LA(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.om()
s.a=q
s.b=o
s.c=m
return s},
j(a,b){a[v.arrayRti]=b
return a},
pd(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Ms(s)
return a.$S()}return null},
MA(a,b){var s
if(A.El(b))if(a instanceof A.ef){s=A.pd(a)
if(s!=null)return s}return A.bx(a)},
bx(a){if(a instanceof A.k)return A.n(a)
if(Array.isArray(a))return A.a_(a)
return A.CT(J.dn(a))},
a_(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.CT(a)},
CT(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.KV(a,s)},
KV(a,b){var s=a instanceof A.ef?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Kb(v.typeUniverse,s.name)
b.$ccache=r
return r},
Ms(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.Ae(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dp(a){return A.bJ(A.n(a))},
D3(a){var s=A.pd(a)
return A.bJ(s==null?A.bx(a):s)},
CW(a){var s
if(a instanceof A.hF)return a.ly()
s=a instanceof A.ef?A.pd(a):null
if(s!=null)return s
if(t.dH.b(a))return J.c_(a).a
if(Array.isArray(a))return A.a_(a)
return A.bx(a)},
bJ(a){var s=a.r
return s==null?a.r=new A.oU(a):s},
Ml(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kd(v.typeUniverse,A.CW(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.F4(v.typeUniverse,s,A.CW(q[r]))
return A.kd(v.typeUniverse,s,a)},
bK(a){return A.bJ(A.Ae(v.typeUniverse,a,!1))},
KU(a){var s=this
s.b=A.Lx(s)
return s.b(a)},
Lx(a){var s,r,q,p
if(a===t.K)return A.L2
if(A.f5(a))return A.L6
s=a.w
if(s===6)return A.KR
if(s===1)return A.FA
if(s===7)return A.KY
r=A.Lw(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f5)){a.f="$i"+q
if(q==="p")return A.L0
if(a===t.m)return A.L_
return A.L5}}else if(s===10){p=A.Mf(a.x,a.y)
return p==null?A.FA:p}return A.KP},
Lw(a){if(a.w===8){if(a===t.S)return A.ai
if(a===t.W||a===t.o)return A.L1
if(a===t.N)return A.L4
if(a===t.y)return A.bH}return null},
KT(a){var s=this,r=A.KO
if(A.f5(s))r=A.Kp
else if(s===t.K)r=A.Ko
else if(A.i0(s)){r=A.KQ
if(s===t.U)r=A.be
else if(s===t.x)r=A.a6
else if(s===t.o9)r=A.Fj
else if(s===t.jh)r=A.Fn
else if(s===t.dA)r=A.Fk
else if(s===t.B)r=A.Fl}else if(s===t.S)r=A.ao
else if(s===t.N)r=A.D
else if(s===t.y)r=A.hR
else if(s===t.o)r=A.Fm
else if(s===t.W)r=A.eZ
else if(s===t.m)r=A.bf
s.a=r
return s.a(a)},
KP(a){var s=this
if(a==null)return A.i0(s)
return A.ME(v.typeUniverse,A.MA(a,s),s)},
KR(a){if(a==null)return!0
return this.x.b(a)},
L5(a){var s,r=this
if(a==null)return A.i0(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.dn(a)[s]},
L0(a){var s,r=this
if(a==null)return A.i0(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.dn(a)[s]},
L_(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Fz(a){if(typeof a=="object"){if(a instanceof A.k)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
KO(a){var s=this
if(a==null){if(A.i0(s))return a}else if(s.b(a))return a
throw A.aK(A.Ft(a,s),new Error())},
KQ(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.Ft(a,s),new Error())},
Ft(a,b){return new A.k9("TypeError: "+A.ER(a,A.bW(b,null)))},
ER(a,b){return A.ir(a)+": type '"+A.bW(A.CW(a),null)+"' is not a subtype of type '"+b+"'"},
ce(a,b){return new A.k9("TypeError: "+A.ER(a,b))},
KY(a){var s=this
return s.x.b(a)||A.Cm(v.typeUniverse,s).b(a)},
L2(a){return a!=null},
Ko(a){if(a!=null)return a
throw A.aK(A.ce(a,"Object"),new Error())},
L6(a){return!0},
Kp(a){return a},
FA(a){return!1},
bH(a){return!0===a||!1===a},
hR(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.ce(a,"bool"),new Error())},
Fj(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.ce(a,"bool?"),new Error())},
eZ(a){if(typeof a=="number")return a
throw A.aK(A.ce(a,"double"),new Error())},
Fk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.ce(a,"double?"),new Error())},
ai(a){return typeof a=="number"&&Math.floor(a)===a},
ao(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.ce(a,"int"),new Error())},
be(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.ce(a,"int?"),new Error())},
L1(a){return typeof a=="number"},
Fm(a){if(typeof a=="number")return a
throw A.aK(A.ce(a,"num"),new Error())},
Fn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.ce(a,"num?"),new Error())},
L4(a){return typeof a=="string"},
D(a){if(typeof a=="string")return a
throw A.aK(A.ce(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.ce(a,"String?"),new Error())},
bf(a){if(A.Fz(a))return a
throw A.aK(A.ce(a,"JSObject"),new Error())},
Fl(a){if(a==null)return a
if(A.Fz(a))return a
throw A.aK(A.ce(a,"JSObject?"),new Error())},
FM(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bW(a[q],b)
return s},
Lm(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.FM(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bW(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Fx(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
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
if(m===8){p=A.LD(a.x)
o=a.y
return o.length>0?p+("<"+A.FM(o,b)+">"):p}if(m===10)return A.Lm(a,b)
if(m===11)return A.Fx(a,b,null)
if(m===12)return A.Fx(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
LD(a){var s=A.Gz(a)
if(s!=null)return s
return"minified:"+a},
Kc(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Kb(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.Ae(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kc(a,5,"#")
q=A.Ao(s)
for(p=0;p<s;++p)q[p]=r
o=A.kb(a,b,q)
n[b]=o
return o}else return m},
Ka(a,b){return A.Fh(a.tR,b)},
K9(a,b){return A.Fh(a.eT,b)},
Ae(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.F3(a,null,b,!1)
r.set(b,s)
return s},
kd(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.F3(a,b,c,!0)
q.set(c,r)
return r},
F4(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.CJ(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
F3(a,b,c,d){return A.K_(A.JU(a,b,c,d))},
e2(a,b){b.a=A.KT
b.b=A.KU
return b},
kc(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cp(null,null)
s.w=b
s.as=c
r=A.e2(a,s)
a.eC.set(c,r)
return r},
F1(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.K7(a,b,r,c)
a.eC.set(r,s)
return s},
K7(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f5(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.i0(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cp(null,null)
q.w=6
q.x=b
q.as=c
return A.e2(a,q)},
F0(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.K5(a,b,r,c)
a.eC.set(r,s)
return s},
K5(a,b,c,d){var s,r
if(d){s=b.w
if(A.f5(b)||b===t.K)return b
else if(s===1)return A.kb(a,"A",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cp(null,null)
r.w=7
r.x=b
r.as=c
return A.e2(a,r)},
K8(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=13
s.x=b
s.as=q
r=A.e2(a,s)
a.eC.set(q,r)
return r},
ka(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
K4(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
kb(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ka(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.cp(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.e2(a,r)
a.eC.set(p,q)
return q},
CJ(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.ka(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.cp(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.e2(a,o)
a.eC.set(q,n)
return n},
F2(a,b,c){var s,r,q="+"+(b+"("+A.ka(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e2(a,s)
a.eC.set(q,r)
return r},
F_(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ka(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ka(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.K4(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.cp(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.e2(a,p)
a.eC.set(r,o)
return o},
CK(a,b,c,d){var s,r=b.as+("<"+A.ka(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.K6(a,b,c,r,d)
a.eC.set(r,s)
return s},
K6(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.Ao(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e3(a,b,r,0)
m=A.hW(a,c,r,0)
return A.CK(a,n,m,c!==m)}}l=new A.cp(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e2(a,l)},
JU(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
K_(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.JW(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.EW(a,r,l,k,!1)
else if(q===46)r=A.EW(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eU(a.u,a.e,k.pop()))
break
case 94:k.push(A.K8(a.u,k.pop()))
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
case 62:A.JY(a,k)
break
case 38:A.JX(a,k)
break
case 63:p=a.u
k.push(A.F1(p,A.eU(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.F0(p,A.eU(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.JV(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.EX(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.K0(a.u,a.e,o)
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
return A.eU(a.u,a.e,m)},
JW(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
EW(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Kc(s,o.x)[p]
if(n==null)A.t('No "'+p+'" in "'+A.IZ(o)+'"')
d.push(A.kd(s,o,n))}else d.push(p)
return m},
JY(a,b){var s,r=a.u,q=A.EV(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kb(r,p,q))
else{s=A.eU(r,a.e,p)
switch(s.w){case 11:b.push(A.CK(r,s,q,a.n))
break
default:b.push(A.CJ(r,s,q))
break}}},
JV(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.EV(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eU(p,a.e,o)
q=new A.om()
q.a=s
q.b=n
q.c=m
b.push(A.F_(p,r,q))
return
case-4:b.push(A.F2(p,b.pop(),s))
return
default:throw A.b(A.kN("Unexpected state under `()`: "+A.r(o)))}},
JX(a,b){var s=b.pop()
if(0===s){b.push(A.kc(a.u,1,"0&"))
return}if(1===s){b.push(A.kc(a.u,4,"1&"))
return}throw A.b(A.kN("Unexpected extended operation "+A.r(s)))},
EV(a,b){var s=b.splice(a.p)
A.EX(a.u,a.e,s)
a.p=b.pop()
return s},
eU(a,b,c){if(typeof c=="string")return A.kb(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.JZ(a,b,c)}else return c},
EX(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eU(a,b,c[s])},
K0(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eU(a,b,c[s])},
JZ(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.b(A.kN("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.b(A.kN("Bad index "+c+" for "+b.l(0)))},
ME(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aT(a,b,null,c,null)
r.set(c,s)}return s},
aT(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.f5(d))return!0
s=b.w
if(s===4)return!0
if(A.f5(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aT(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.aT(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aT(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aT(a,b.x,c,d,e))return!1
return A.aT(a,A.Cm(a,b),c,d,e)}if(s===6)return A.aT(a,p,c,d,e)&&A.aT(a,b.x,c,d,e)
if(q===7){if(A.aT(a,b,c,d.x,e))return!0
return A.aT(a,b,c,A.Cm(a,d),e)}if(q===6)return A.aT(a,b,c,p,e)||A.aT(a,b,c,d.x,e)
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
if(!A.aT(a,j,c,i,e)||!A.aT(a,i,e,j,c))return!1}return A.Fy(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.Fy(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.KZ(a,b,c,d,e)}if(o&&q===10)return A.L3(a,b,c,d,e)
return!1},
Fy(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aT(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aT(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aT(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aT(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aT(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
KZ(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kd(a,b,r[o])
return A.Fi(a,p,null,c,d.y,e)}return A.Fi(a,b.y,null,c,d.y,e)},
Fi(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aT(a,b[s],d,e[s],f))return!1
return!0},
L3(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aT(a,r[s],c,q[s],e))return!1
return!0},
i0(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.f5(a))if(s!==6)r=s===7&&A.i0(a.x)
return r},
f5(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Fh(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
Ao(a){return a>0?new Array(a):v.typeUniverse.sEA},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
om:function om(){this.c=this.b=this.a=null},
oU:function oU(a){this.a=a},
oi:function oi(){},
k9:function k9(a){this.a=a},
Jq(){var s,r,q
if(self.scheduleImmediate!=null)return A.LH()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e5(new A.ya(s),1)).observe(r,{childList:true})
return new A.y9(s,r,q)}else if(self.setImmediate!=null)return A.LI()
return A.LJ()},
Jr(a){self.scheduleImmediate(A.e5(new A.yb(a),0))},
Js(a){self.setImmediate(A.e5(new A.yc(a),0))},
Jt(a){A.Cw(B.D,a)},
Cw(a,b){var s=B.c.N(a.a,1000)
return A.K2(s<0?0:s,b)},
Et(a,b){var s=B.c.N(a.a,1000)
return A.K3(s<0?0:s,b)},
K2(a,b){var s=new A.k8(!0)
s.oH(a,b)
return s},
K3(a,b){var s=new A.k8(!1)
s.oI(a,b)
return s},
h(a){return new A.jC(new A.w($.C,a.i("w<0>")),a.i("jC<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.Fo(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.c6(A.F(a),A.ad(a))},
Fo(a,b){var s,r,q=new A.AC(b),p=new A.AD(b)
if(a instanceof A.w)a.m8(q,p,t.z)
else{s=t.z
if(a instanceof A.w)a.bU(q,p,s)
else{r=new A.w($.C,t._)
r.a=8
r.c=a
r.m8(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.ft(new A.AV(s),t.H,t.S,t.z)},
bU(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cU(null)
else{s=c.a
s===$&&A.v()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.F(a)
q=A.ad(a)
s.al(new A.am(r,q))}else{s=A.F(a)
r=A.ad(a)
q=c.a
q===$&&A.v()
q.bx(s,r)
c.a.q()}return}if(a instanceof A.jU){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.v()
r.t(0,s)
A.kw(new A.AA(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.v()
s.tA(p,!1).X(new A.AB(c,b),t.P)
return}}A.Fo(a,b)},
FQ(a){var s=a.a
s===$&&A.v()
return new A.b5(s,A.n(s).i("b5<1>"))},
Ju(a,b){var s=new A.o2(b.i("o2<0>"))
s.oD(a,b)
return s},
FB(a,b){return A.Ju(a,b)},
JQ(a){return new A.jU(a,1)},
dY(a){return new A.jU(a,0)},
EZ(a,b,c){return 0},
ia(a){var s
if(t.C.b(a)){s=a.gcl()
if(s!=null)return s}return B.Q},
iy(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.F(q)
r=A.ad(q)
p=new A.w($.C,b.i("w<0>"))
o=s
n=r
m=A.kk(o,n)
if(m==null)o=new A.am(o,n==null?A.ia(o):n)
else o=m
p.cm(o)
return p}return b.i("A<0>").b(l)?l:A.bv(l,b)},
b9(a,b){var s=a==null?b.a(a):a,r=new A.w($.C,b.i("w<0>"))
r.aK(s)
return r},
I7(a,b){var s
if(!b.b(null))throw A.b(A.az(null,"computation","The type parameter is not nullable"))
s=new A.w($.C,b.i("w<0>"))
A.cR(a,new A.rU(null,s,b))
return s},
C0(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.w($.C,b.i("w<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.rW(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bU(new A.rV(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cU(A.j([],b.i("B<0>")))
return n}i.a=A.af(n,null,!1,b.i("0?"))}catch(l){p=A.F(l)
o=A.ad(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kk(m,k)
if(j==null)m=new A.am(m,k==null?A.ia(m):k)
else m=j
n.cm(m)
return n}else{i.d=p
i.c=o}}return f},
C_(a,b,c,d){var s=new A.rP(d,null,b,c),r=$.C,q=new A.w(r,c.i("w<0>"))
if(r!==B.i)s=r.ft(s,c.i("0/"),t.K,t.l)
a.dE(new A.cc(q,2,null,s,a.$ti.i("@<1>").V(c).i("cc<1,2>")))
return q},
I5(a,b){var s,r,q,p=A.j([],b.i("B<jS<0>>"))
for(s=a.length,r=b.i("jS<0>"),q=0;q<a.length;a.length===s||(0,A.q)(a),++q)p.push(new A.jS(a[q],r))
if(p.length===0)return A.b9(A.j([],b.i("B<0>")),b.i("p<0>"))
s=new A.w($.C,b.i("w<p<0>>"))
A.JK(p,new A.rQ(new A.an(s,b.i("an<p<0>>")),p,b))
return s},
Lb(a){return a!=null},
JK(a,b){var s,r={},q=r.a=r.b=0,p=new A.z7(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.q)(a),++q)a[q].tg(p)},
kk(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.mG(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mG(r,q)
return s},
f_(a,b){var s
if($.C!==B.i){s=A.kk(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gcl()
if(b==null){A.mG(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.C.b(a))A.mG(a,b)
return new A.am(a,b)},
JJ(a,b,c){var s=new A.w(b,c.i("w<0>"))
s.a=8
s.c=a
return s},
bv(a,b){var s=new A.w($.C,b.i("w<0>"))
s.a=8
s.c=a
return s},
zd(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.Cp()
b.cm(new A.am(new A.bz(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lO(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eR()
b.fU(p.a)
A.eQ(b,q)
return}b.a^=2
b.b.cO(new A.ze(p,b))},
eQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fd(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.eQ(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gc9()===k.gc9())}else f=!1
if(f){f=g.a
r=f.c
f.b.fd(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.zi(s,g,p).$0()
else if(q){if((f&1)!==0)new A.zh(s,m).$0()}else if((f&2)!==0)new A.zg(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.w){r=s.a.$ti
r=r.i("A<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.hg(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.zd(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.hg(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
FG(a,b){if(t.ng.b(a))return b.ft(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dl(a,t.z,t.K)
throw A.b(A.az(a,"onError",u.w))},
La(){var s,r
for(s=$.hU;s!=null;s=$.hU){$.km=null
r=s.b
$.hU=r
if(r==null)$.kl=null
s.a.$0()}},
Ly(){$.CU=!0
try{A.La()}finally{$.km=null
$.CU=!1
if($.hU!=null)$.Df().$1(A.G0())}},
FO(a){var s=new A.o1(a),r=$.kl
if(r==null){$.hU=$.kl=s
if(!$.CU)$.Df().$1(A.G0())}else $.kl=r.b=s},
Lv(a){var s,r,q,p=$.hU
if(p==null){A.FO(a)
$.km=$.kl
return}s=new A.o1(a)
r=$.km
if(r==null){s.b=p
$.hU=$.km=s}else{q=r.b
s.b=q
$.km=r.b=s
if(q==null)$.kl=s}},
kw(a){var s,r=null,q=$.C
if(B.i===q){A.AT(r,r,B.i,a)
return}if(B.i===q.gjw().a)s=B.i.gc9()===q.gc9()
else s=!1
if(s){A.AT(r,r,q,q.bS(a,t.H))
return}s=$.C
s.cO(s.eZ(a))},
Cr(a,b){var s=null,r=b.i("cW<0>"),q=new A.cW(s,s,s,s,r)
q.aA(a)
q.l7()
return new A.b5(q,r.i("b5<1>"))},
Ns(a,b){return new A.cy(A.cz(a,"stream",t.K),b.i("cy<0>"))},
wV(a,b,c,d,e){return d?new A.hM(b,null,c,a,e.i("hM<0>")):new A.cW(b,null,c,a,e.i("cW<0>"))},
dO(a,b,c){return new A.jD(b,a,c.i("jD<0>"))},
p9(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.F(q)
r=A.ad(q)
$.C.fd(s,r)}},
JH(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.o6(s,b,f),o=A.yp(s,c),n=d==null?A.AW():d
return new A.dW(a,p,o,s.bS(n,t.H),s,r|q,f.i("dW<0>"))},
Jp(a){return new A.y6(a)},
o6(a,b,c){var s=b==null?A.LL():b
return a.dl(s,t.H,c)},
yp(a,b){if(b==null)b=A.LM()
if(t.b9.b(b))return a.ft(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dl(b,t.z,t.K)
throw A.b(A.Q("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
Lc(a){},
Le(a,b){$.C.fd(a,b)},
Ld(){},
EQ(a,b){var s=$.C,r=new A.hx(s,b.i("hx<0>"))
A.kw(r.glL())
if(a!=null)r.c=s.bS(a,t.H)
return r},
Kx(a,b,c){var s=a.D()
if(s!==$.e7())s.aY(new A.AF(b,c))
else b.al(c)},
Ky(a,b,c){var s=a.D()
if(s!==$.e7())s.aY(new A.AG(b,c))
else b.cn(c)},
cR(a,b){var s=$.C
if(s===B.i)return s.jO(a,b)
return s.jO(a,s.eZ(b))},
Es(a,b){var s,r=$.C
if(r===B.i)return r.jN(a,b)
s=r.hC(b,t.hU)
return $.C.jN(a,s)},
pi(a,b,c,d){return A.Lu(a,c,b,d)},
Lu(a,b,c,d){return $.C.mK(c,b).aV(a,d)},
Ls(a,b,c,d,e){A.kp(d,e)},
kp(a,b){A.Lv(new A.AQ(a,b))},
AR(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
AS(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
CV(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
FK(a,b,c,d){return d},
FL(a,b,c,d){return d},
FJ(a,b,c,d){return d},
Lr(a,b,c,d,e){return null},
AT(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gc9()
r=c.gc9()
d=s!==r?c.eZ(d):c.jJ(d,t.H)}A.FO(d)},
Lq(a,b,c,d,e){return A.Cw(d,B.i!==c?c.jJ(e,t.H):e)},
Lp(a,b,c,d,e){e=c.tN(e,t.H,t.hU)
return A.Et(d,e)},
Lt(a,b,c,d){A.Gn(d)},
FI(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.C1(o,o,o,s,s)
r.C(0,e)}else r=o
s=new A.ob(c.glZ(),c.gm0(),c.gm_(),c.glV(),c.glW(),c.glU(),c.glq(),c.gjw(),c.gli(),c.glh(),c.glP(),c.glv(),c.gje(),c.gjG(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.p2(s,q)
p=d.a
if(p!=null)s.as=new A.p1(s,p)}if(r!=null)s.at=new A.p3(s,r)
return s},
ya:function ya(a){this.a=a},
y9:function y9(a,b,c){this.a=a
this.b=b
this.c=c},
yb:function yb(a){this.a=a},
yc:function yc(a){this.a=a},
k8:function k8(a){this.a=a
this.b=null
this.c=0},
Ac:function Ac(a,b){this.a=a
this.b=b},
Ab:function Ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jC:function jC(a,b){this.a=a
this.b=!1
this.$ti=b},
AC:function AC(a){this.a=a},
AD:function AD(a){this.a=a},
AV:function AV(a){this.a=a},
AA:function AA(a,b){this.a=a
this.b=b},
AB:function AB(a,b){this.a=a
this.b=b},
o2:function o2(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
ye:function ye(a){this.a=a},
yf:function yf(a){this.a=a},
yh:function yh(a){this.a=a},
yi:function yi(a,b){this.a=a
this.b=b},
yg:function yg(a,b){this.a=a
this.b=b},
yd:function yd(a){this.a=a},
jU:function jU(a,b){this.a=a
this.b=b},
oR:function oR(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hL:function hL(a,b){this.a=a
this.$ti=b},
am:function am(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c,d,e,f,g){var _=this
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
rU:function rU(a,b,c){this.a=a
this.b=b
this.c=c},
rW:function rW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rV:function rV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rP:function rP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nv:function nv(a,b){this.a=a
this.b=b},
rQ:function rQ(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a,b,c){this.c=a
this.d=b
this.$ti=c},
jS:function jS(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
z8:function z8(a,b){this.a=a
this.b=b},
z9:function z9(a,b){this.a=a
this.b=b},
z7:function z7(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
an:function an(a,b){this.a=a
this.$ti=b},
cc:function cc(a,b,c,d,e){var _=this
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
za:function za(a,b){this.a=a
this.b=b},
zf:function zf(a,b){this.a=a
this.b=b},
ze:function ze(a,b){this.a=a
this.b=b},
zc:function zc(a,b){this.a=a
this.b=b},
zb:function zb(a,b){this.a=a
this.b=b},
zi:function zi(a,b,c){this.a=a
this.b=b
this.c=c},
zj:function zj(a,b){this.a=a
this.b=b},
zk:function zk(a){this.a=a},
zh:function zh(a,b){this.a=a
this.b=b},
zg:function zg(a,b){this.a=a
this.b=b},
zl:function zl(a,b){this.a=a
this.b=b},
zm:function zm(a,b,c){this.a=a
this.b=b
this.c=c},
zn:function zn(a,b){this.a=a
this.b=b},
o1:function o1(a){this.a=a
this.b=null},
aa:function aa(){},
wY:function wY(a,b){this.a=a
this.b=b},
wZ:function wZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x_:function x_(a,b){this.a=a
this.b=b},
x0:function x0(a,b){this.a=a
this.b=b},
wW:function wW(a){this.a=a},
wX:function wX(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(){},
e0:function e0(){},
A4:function A4(a){this.a=a},
A3:function A3(a){this.a=a},
oS:function oS(){},
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
hM:function hM(a,b,c,d,e){var _=this
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
dW:function dW(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
nZ:function nZ(){},
y6:function y6(a){this.a=a},
y5:function y5(a){this.a=a},
k5:function k5(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b1:function b1(){},
yr:function yr(a,b,c){this.a=a
this.b=b
this.c=c},
yq:function yq(a){this.a=a},
hK:function hK(){},
oh:function oh(){},
cb:function cb(a,b){this.b=a
this.a=null
this.$ti=b},
hw:function hw(a,b){this.b=a
this.c=b
this.a=null},
z0:function z0(){},
e_:function e_(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
zM:function zM(a,b){this.a=a
this.b=b},
hx:function hx(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cy:function cy(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
jN:function jN(a){this.$ti=a},
di:function di(a,b){this.b=a
this.$ti=b},
zK:function zK(a,b){this.a=a
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
AF:function AF(a,b){this.a=a
this.b=b},
AG:function AG(a,b){this.a=a
this.b=b},
jQ:function jQ(){},
hA:function hA(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
eT:function eT(a,b,c){this.b=a
this.a=b
this.$ti=c},
jO:function jO(a,b){this.a=a
this.$ti=b},
hI:function hI(a,b,c,d,e,f){var _=this
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
Ax:function Ax(a,b){this.a=a
this.b=b},
Az:function Az(a,b){this.a=a
this.b=b},
Ay:function Ay(a,b){this.a=a
this.b=b},
Av:function Av(a,b){this.a=a
this.b=b},
Aw:function Aw(a,b){this.a=a
this.b=b},
Au:function Au(a,b){this.a=a
this.b=b},
Ar:function Ar(a,b){this.a=a
this.b=b},
p2:function p2(a,b){this.a=a
this.b=b},
Aq:function Aq(a,b){this.a=a
this.b=b},
Ap:function Ap(a,b){this.a=a
this.b=b},
At:function At(a,b){this.a=a
this.b=b},
As:function As(a,b){this.a=a
this.b=b},
p1:function p1(a,b){this.a=a
this.b=b},
p3:function p3(a,b){this.a=a
this.b=b},
p0:function p0(){},
ob:function ob(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
yX:function yX(a,b,c){this.a=a
this.b=b
this.c=c},
yZ:function yZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yW:function yW(a,b){this.a=a
this.b=b},
yY:function yY(a,b,c){this.a=a
this.b=b
this.c=c},
oG:function oG(){},
zT:function zT(a,b,c){this.a=a
this.b=b
this.c=c},
zS:function zS(a,b){this.a=a
this.b=b},
zU:function zU(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
AQ:function AQ(a,b){this.a=a
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
C1(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dg(d.i("@<0>").V(e).i("dg<1,2>"))
b=A.D_()}else{if(A.G4()===b&&A.G3()===a)return new A.dX(d.i("@<0>").V(e).i("dX<1,2>"))
if(a==null)a=A.CZ()}else{if(b==null)b=A.D_()
if(a==null)a=A.CZ()}return A.JI(a,b,c,d,e)},
ES(a,b){var s=a[b]
return s===a?null:s},
CH(a,b,c){if(c==null)a[b]=a
else a[b]=c},
CG(){var s=Object.create(null)
A.CH(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
JI(a,b,c,d,e){var s=c!=null?c:new A.yV(d)
return new A.jK(a,b,s,d.i("@<0>").V(e).i("jK<1,2>"))},
dE(a,b,c,d){if(b==null){if(a==null)return new A.bB(c.i("@<0>").V(d).i("bB<1,2>"))
b=A.D_()}else{if(A.G4()===b&&A.G3()===a)return new A.iJ(c.i("@<0>").V(d).i("iJ<1,2>"))
if(a==null)a=A.CZ()}return A.JT(a,b,null,c,d)},
m(a,b,c){return A.Gc(a,new A.bB(b.i("@<0>").V(c).i("bB<1,2>")))},
u(a,b){return new A.bB(a.i("@<0>").V(b).i("bB<1,2>"))},
JT(a,b,c,d,e){return new A.jV(a,b,new A.zI(d),d.i("@<0>").V(e).i("jV<1,2>"))},
mc(a){return new A.dh(a.i("dh<0>"))},
aN(a){return new A.dh(a.i("dh<0>"))},
as(a,b){return A.Mo(a,new A.dh(b.i("dh<0>")))},
CI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hC(a,b,c){var s=new A.dZ(a,b,c.i("dZ<0>"))
s.c=a.e
return s},
KF(a,b){return J.x(a,b)},
KG(a){return J.a7(a)},
DW(a){if(a.length===0)return null
return B.b.ga1(a)},
bb(a,b,c){var s=A.dE(null,null,b,c)
a.a7(0,new A.uv(s,b,c))
return s},
cJ(a,b,c){var s=A.dE(null,null,b,c)
s.C(0,a)
return s},
uw(a,b){var s,r,q=A.mc(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.t(0,b.a(a[r]))
return q},
d2(a,b){var s=A.mc(b)
s.C(0,a)
return s},
In(a,b){var s=t.bP
return J.Dn(s.a(a),s.a(b))},
uL(a){var s,r
if(A.D5(a))return"{...}"
s=new A.a2("")
try{r={}
$.f0.push(a)
s.a+="{"
r.a=!0
a.a7(0,new A.uM(r,s))
s.a+="}"}finally{$.f0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
C9(a){return new A.iM(A.af(A.Io(null),null,!1,a.i("0?")),a.i("iM<0>"))},
Io(a){return 8},
dg:function dg(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
zp:function zp(a){this.a=a},
zo:function zo(a){this.a=a},
dX:function dX(a){var _=this
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
yV:function yV(a){this.a=a},
eR:function eR(a,b){this.a=a
this.$ti=b},
on:function on(a,b,c){var _=this
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
zI:function zI(a){this.a=a},
dh:function dh(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
zJ:function zJ(a){this.a=a
this.c=this.b=null},
dZ:function dZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
uv:function uv(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
ou:function ou(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b2:function b2(){},
K:function K(){},
V:function V(){},
uK:function uK(a){this.a=a},
uM:function uM(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.$ti=b},
ow:function ow(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
oW:function oW(){},
iQ:function iQ(){},
cT:function cT(a,b){this.a=a
this.$ti=b},
iM:function iM(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
ov:function ov(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cq:function cq(){},
k3:function k3(){},
ke:function ke(){},
FE(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.F(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.AI(p)
return q},
AI(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.or(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.AI(a[s])
return a},
Kn(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.H1()
else s=new Uint8Array(o)
for(r=J.M(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Km(a,b,c,d){var s=a?$.H0():$.H_()
if(s==null)return null
if(0===c&&d===b.length)return A.Ff(s,b)
return A.Ff(s,b.subarray(c,d))},
Ff(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
Ds(a,b,c,d,e,f){if(B.c.ak(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
Jy(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.az(b,"Not a byte value at index "+q+": 0x"+B.c.kv(s.h(b,q),16),null))},
Jx(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.af(f,2),i=f&3,h=$.Dg()
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
return A.EE(a,r+1,c,-m-1)}throw A.b(A.a8(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a8(k,a,r))},
Jv(a,b,c,d){var s=A.Jw(a,b,c),r=(d&3)+(s-b),q=B.c.af(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.GT()},
Jw(a,b,c){var s,r=c,q=r,p=0
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
EE(a,b,c,d){var s,r
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
HV(a){return B.cU.h(0,a.toLowerCase())},
E1(a,b,c){return new A.iK(a,b)},
KJ(a){return a.p()},
JR(a,b){return new A.zE(a,[],A.Mc())},
JS(a,b,c){var s,r=new A.a2("")
A.EU(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
EU(a,b,c,d){var s=A.JR(b,c)
s.iz(a)},
Fg(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
or:function or(a,b){this.a=a
this.b=b
this.c=null},
zD:function zD(a){this.a=a},
os:function os(a){this.a=a},
zB:function zB(a,b,c){this.b=a
this.c=b
this.a=c},
Am:function Am(){},
Al:function Al(){},
kK:function kK(){},
oV:function oV(){},
kL:function kL(a){this.a=a},
Ad:function Ad(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
ic:function ic(a){this.a=a},
o4:function o4(a){this.a=0
this.b=a},
yo:function yo(a){this.c=null
this.a=0
this.b=a},
yk:function yk(){},
y7:function y7(a,b){this.a=a
this.b=b},
kR:function kR(){},
o3:function o3(){this.a=0},
yj:function yj(a,b){this.a=a
this.b=b},
pJ:function pJ(){},
hq:function hq(a){this.a=a},
o7:function o7(a,b){this.a=a
this.b=b
this.c=0},
l2:function l2(){},
oM:function oM(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b,c){this.a=a
this.b=b
this.$ti=c},
l4:function l4(){},
aC:function aC(){},
qG:function qG(a){this.a=a},
em:function em(){},
iK:function iK(a,b){this.a=a
this.b=b},
m4:function m4(a,b){this.a=a
this.b=b},
tw:function tw(){},
m6:function m6(a){this.b=a},
zC:function zC(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
m5:function m5(a){this.a=a},
zF:function zF(){},
zG:function zG(a,b){this.a=a
this.b=b},
zE:function zE(a,b,c){this.c=a
this.a=b
this.b=c},
m9:function m9(){},
ma:function ma(a){this.a=a},
ne:function ne(){},
A9:function A9(a,b){this.a=a
this.b=b},
k7:function k7(){},
oO:function oO(a){this.a=a},
Ak:function Ak(a,b,c){this.a=a
this.b=b
this.c=c},
nL:function nL(){},
nM:function nM(){},
oZ:function oZ(a){this.b=this.a=0
this.c=a},
An:function An(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jv:function jv(a){this.a=a},
dj:function dj(a){this.a=a
this.b=16
this.c=0},
p4:function p4(){},
EO(a,b){var s=A.JF(a,b)
if(s==null)throw A.b(A.a8("Could not parse BigInt",a,null))
return s},
JC(a,b){var s,r,q=$.ci(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bg(0,$.Dh()).fH(0,A.jF(s))
s=0
o=0}}if(b)return q.bB(0)
return q},
EG(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
JD(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.tP(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.EG(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.EG(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ci()
l=A.bG(j,i)
return new A.aJ(l===0?!1:c,i,l)},
JF(a,b){var s,r,q,p,o
if(a==="")return null
s=$.GV().e9(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.JC(p,q)
if(o!=null)return A.JD(o,2,q)
return null},
bG(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
CD(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
EF(a){var s
if(a===0)return $.ci()
if(a===1)return $.f8()
if(a===2)return $.GW()
if(Math.abs(a)<4294967296)return A.jF(B.c.is(a))
s=A.Jz(a)
return s},
jF(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bG(4,s)
return new A.aJ(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bG(1,s)
return new A.aJ(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.c.af(a,16)
r=A.bG(2,s)
return new A.aJ(r===0?!1:o,s,r)}r=B.c.N(B.c.gmr(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.N(a,65536)}r=A.bG(r,s)
return new A.aJ(r===0?!1:o,s,r)},
Jz(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.Q("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.ci()
r=$.GU()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.H(r)
r[p]=0}q=J.pn(B.f.gaa(r))
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
if(n<0)k=l.dA(0,-n)
else k=n>0?l.bC(0,n):l
if(s)return k.bB(0)
return k},
CE(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.H(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.H(d)
d[s]=0}return b+c},
EM(a,b,c,d){var s,r,q,p,o,n=B.c.N(c,16),m=B.c.ak(c,16),l=16-m,k=B.c.bC(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dA(p,l)
r&2&&A.H(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bC((p&k)>>>0,m)}r&2&&A.H(d)
d[n]=q},
EH(a,b,c,d){var s,r,q,p,o=B.c.N(c,16)
if(B.c.ak(c,16)===0)return A.CE(a,b,o,d)
s=b+o+1
A.EM(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.H(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
JE(a,b,c,d){var s,r,q,p,o=B.c.N(c,16),n=B.c.ak(c,16),m=16-n,l=B.c.bC(1,n)-1,k=B.c.dA(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bC((q&l)>>>0,m)
s&2&&A.H(d)
d[r]=(p|k)>>>0
k=B.c.dA(q,n)}s&2&&A.H(d)
d[j]=k},
yl(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
JA(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}s&2&&A.H(e)
e[b]=r},
o5(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}},
EN(a,b,c,d,e,f){var s,r,q,p,o,n
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
JB(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iK((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Mw(a){return A.kt(a)},
BW(a,b){return new A.lx(new WeakMap(),a,b.i("lx<0>"))},
BX(a){},
z6(a,b){var s=$.GX()
s=s==null?null:new s(A.e5(A.N7(a,b),1))
return new A.ol(s,b.i("ol<0>"))},
aH(a){var s=A.jb(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
Mk(a){var s=A.IN(a)
if(s!=null)return s
throw A.b(A.a8("Invalid double",a,null))},
HZ(a,b){a=A.aK(a,new Error())
a.stack=b.l(0)
throw a},
af(a,b,c,d){var s,r=c?J.DY(a,d):J.C4(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bD(a,b,c){var s,r=A.j([],c.i("B<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
O(a,b){var s,r
if(Array.isArray(a))return A.j(a.slice(0),b.i("B<0>"))
s=A.j([],b.i("B<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fC(a,b){var s=A.bD(a,!1,b)
s.$flags=3
return s},
dQ(a,b,c){var s,r,q,p,o
A.bc(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.ax(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Eg(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Jb(a,b,c)
if(r)a=J.BP(a,c)
if(b>0)a=J.pr(a,b)
s=A.O(a,t.S)
return A.Eg(s)},
Jb(a,b,c){var s=a.length
if(b>=s)return""
return A.IP(a,b,c==null||c>s?s:c)},
ag(a,b,c){return new A.eq(a,A.C6(a,!1,b,c,!1,""))},
Mv(a,b){return a==null?b==null:a===b},
x1(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
Cy(){var s,r,q=A.II()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.EA
if(s!=null&&q===$.Ez)return s
r=A.nK(q)
$.EA=r
$.Ez=q
return r},
oY(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.o){s=$.GY()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bt(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Kh(a){var s,r,q
if(!$.GZ())return A.Ki(a)
s=new URLSearchParams()
a.a7(0,new A.Aj(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
Cp(){return A.ad(new Error())},
BT(a,b,c,d,e,f,g){var s=A.IQ(a,b,c,d,e,f,g,0,!0)
return new A.aW(s==null?new A.rj(a,b,c,d,e,f,g,0).$0():s,0,!0)},
HQ(){return new A.aW(Date.now(),0,!1)},
lo(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.ax(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.ax(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.az(b,s,"Time including microseconds is outside valid range"))
A.cz(c,"isUtc",t.y)
return a},
HR(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
DI(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ln(a){if(a>=10)return""+a
return"0"+a},
dv(a,b,c){return new A.aD(a+1000*b+1e6*c)},
fq(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.az(b,"name","No enum value with that name"))},
ir(a){if(typeof a=="number"||A.bH(a)||a==null)return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Ef(a)},
DK(a,b){A.cz(a,"error",t.K)
A.cz(b,"stackTrace",t.l)
A.HZ(a,b)},
kN(a){return new A.kM(a)},
Q(a,b){return new A.bz(!1,null,b,a)},
az(a,b,c){return new A.bz(!0,a,b,c)},
kJ(a,b){return a},
aZ(a){var s=null
return new A.d7(s,s,!1,s,s,a)},
wv(a,b){return new A.d7(null,null,!0,a,b,"Value not in range")},
ax(a,b,c,d,e){return new A.d7(b,c,!0,a,d,"Invalid value")},
Ek(a,b,c,d){if(a<b||a>c)throw A.b(A.ax(a,b,c,d,null))
return a},
IT(a,b,c,d){return A.DU(a,d,b,null,c)},
bd(a,b,c){if(0>a||a>c)throw A.b(A.ax(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ax(b,a,c,"end",null))
return b}return c},
bc(a,b){if(a<0)throw A.b(A.ax(a,0,null,b,null))
return a},
DT(a,b){var s=b.b
return new A.iB(s,!0,a,null,"Index out of range")},
lX(a,b,c,d,e){return new A.iB(b,!0,a,e,"Index out of range")},
DU(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.lX(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cU(a)},
Ex(a){return new A.nE(a)},
y(a){return new A.bl(a)},
aA(a){return new A.l7(a)},
DL(a){return new A.oj(a)},
a8(a,b,c){return new A.bj(a,b,c)},
Id(a,b,c){var s,r
if(A.D5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.j([],t.s)
$.f0.push(a)
try{A.L7(a,s)}finally{$.f0.pop()}r=A.x1(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
tt(a,b,c){var s,r
if(A.D5(a))return b+"..."+c
s=new A.a2(b)
$.f0.push(a)
try{r=s
r.a=A.x1(r.a,a,", ")}finally{$.f0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
L7(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
E4(a,b,c,d,e){return new A.ed(a,b.i("@<0>").V(c).V(d).V(e).i("ed<1,2,3,4>"))},
c6(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a7(a)
b=J.a7(b)
return A.hd(A.ay(A.ay($.f9(),s),b))}if(B.d===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.hd(A.ay(A.ay(A.ay($.f9(),s),b),c))}if(B.d===e){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
return A.hd(A.ay(A.ay(A.ay(A.ay($.f9(),s),b),c),d))}if(B.d===f){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
return A.hd(A.ay(A.ay(A.ay(A.ay(A.ay($.f9(),s),b),c),d),e))}if(B.d===g){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
return A.hd(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.f9(),s),b),c),d),e),f))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
g=J.a7(g)
g=A.hd(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay(A.ay($.f9(),s),b),c),d),e),f),g))
return g},
vb(a){var s,r=$.f9()
for(s=J.E(a);s.k();)r=A.ay(r,J.a7(s.gn()))
return A.hd(r)},
Fp(a,b){return 65536+((a&1023)<<10)+(b&1023)},
nK(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Ey(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gng()
else if(s===32)return A.Ey(B.a.A(a5,5,a4),0,a3).gng()}r=A.af(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.FN(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.FN(a5,0,q,20,r)===20)r[7]=q
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
n=e}j="https"}k=!h}}}}if(k)return new A.cd(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.CM(a5,0,q)
else{if(q===0)A.hO(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.Fb(a5,c,p-1):""
a=A.F9(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jb(B.a.A(a5,i,n),a3)
d=A.Af(a0==null?A.t(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.Fa(a5,n,m,a3,j,a!=null)
a2=m<l?A.Ag(a5,m+1,l,a3):a3
return A.kg(j,b,a,d,a1,a2,l<a4?A.F8(a5,l+1,a4):a3)},
Jl(a){return A.CP(a,0,a.length,B.o,!1)},
nJ(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
Ji(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.nJ("each part must be in the range 0..255",a,r)}A.nJ("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.nJ(k,a,q)}l=p+1
s&2&&A.H(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.nJ(k,a,q)
p=l}A.nJ("IPv4 address should contain exactly 4 parts",a,q)},
Jj(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Jk(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.EB(a,b,c)
return!0},
Jk(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.bj(o,a,r)
s=r
break}return new A.bj("Unexpected character",a,r-1)}if(s-1===b)return new A.bj(o,a,s)
return new A.bj("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.bj("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.bj("Invalid IPvFuture address character",a,s)}},
EB(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.xz(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Ji(a1,o,a3,s,q*2)
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
B.f.jW(s,c,b,0)}}return s},
kg(a,b,c,d,e,f,g){return new A.kf(a,b,c,d,e,f,g)},
F5(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hO(a,b,c){throw A.b(A.a8(c,a,b))},
Ke(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.F(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
Af(a,b){if(a!=null&&a===A.F5(b))return null
return a},
F9(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hO(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Kf(a,r,s)
if(p<s){o=p+1
q=A.Fe(a,B.a.ad(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Jj(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.ca(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Fe(a,B.a.ad(a,"25",o)?s+3:o,c,"%25")}else q=""
A.EB(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.Kk(a,b,c)},
Kf(a,b,c){var s=B.a.ca(a,"%",b)
return s>=b&&s<c?s:c},
Fe(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.CN(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a2("")
m=i.a+=B.a.A(a,r,s)
if(n)o=B.a.A(a,s,s+3)
else if(o==="%")A.hO(a,s,"ZoneID should not contain % anymore")
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
m=A.CL(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Kk(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.CN(a,s,!0)
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
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.hO(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a2("")
m=q}else m=q
m.a+=l
k=A.CL(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
CM(a,b,c){var s,r,q
if(b===c)return""
if(!A.F7(a.charCodeAt(b)))A.hO(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hO(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.Kd(r?a.toLowerCase():a)},
Kd(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
Fb(a,b,c){if(a==null)return""
return A.kh(a,b,c,16,!1,!1)},
Fa(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kh(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.Kj(s,e,f)},
Kj(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.CO(a,!s||c)
return A.eY(a)},
Ag(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.Q("Both query and queryParameters specified",null))
return A.kh(a,b,c,256,!0,!1)}if(d==null)return null
return A.Kh(d)},
Ki(a){var s={},r=new A.a2("")
s.a=""
a.a7(0,new A.Ah(new A.Ai(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
F8(a,b,c){if(a==null)return null
return A.kh(a,b,c,256,!0,!1)},
CN(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.Bk(s)
p=A.Bk(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bt(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
CL(a){var s,r,q,p,o,n="0123456789ABCDEF"
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
p+=3}}return A.dQ(s,0,null)},
kh(a,b,c,d,e,f){var s=A.Fd(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
Fd(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.CN(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hO(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.CL(o)}if(p==null){p=new A.a2("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
Fc(a){if(B.a.S(a,"."))return!0
return B.a.bO(a,"/.")!==-1},
eY(a){var s,r,q,p,o,n
if(!A.Fc(a))return a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
CO(a,b){var s,r,q,p,o,n
if(!A.Fc(a))return!b?A.F6(a):a
s=A.j([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga1(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.F6(s[0])
return B.b.B(s,"/")},
F6(a){var s,r,q=a.length
if(q>=2&&A.F7(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ae(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Kl(a,b){if(a.vF("package")&&a.c==null)return A.FP(b,0,b.length)
return-1},
Kg(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.Q("Invalid URL encoding",null))}}return s},
CP(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.o===d)return B.a.A(a,b,c)
else p=new A.cj(B.a.A(a,b,c))
else{p=A.j([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.Q("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.Q("Truncated URI",null))
p.push(A.Kg(a,o+1))
o+=2}else p.push(r)}}return d.f_(p)},
F7(a){var s=a|32
return 97<=s&&s<=122},
Ey(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.j([b-1],t.t)
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
if((j.length&1)===1)a=B.ap.vY(a,m,s)
else{l=A.Fd(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dm(a,m,s,l)}return new A.xy(a,j,c)},
FN(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
EY(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.FP(a.a,a.e,a.f)
return-1},
FP(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
KA(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
ym:function ym(){},
yn:function yn(){},
ol:function ol(a,b){this.a=a
this.$ti=b},
Aj:function Aj(a){this.a=a},
rj:function rj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a){this.a=a},
z1:function z1(){},
ae:function ae(){},
kM:function kM(a){this.a=a},
dc:function dc(){},
bz:function bz(a,b,c,d){var _=this
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
iB:function iB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cU:function cU(a){this.a=a},
nE:function nE(a){this.a=a},
bl:function bl(a){this.a=a},
l7:function l7(a){this.a=a},
mw:function mw(){},
jo:function jo(){},
oj:function oj(a){this.a=a},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function lZ(){},
o:function o(){},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
k:function k(){},
oQ:function oQ(){},
jp:function jp(){this.b=this.a=0},
jg:function jg(a){this.a=a},
mV:function mV(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
xz:function xz(a){this.a=a},
kf:function kf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
Ai:function Ai(a,b){this.a=a
this.b=b},
Ah:function Ah(a){this.a=a},
xy:function xy(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
oe:function oe(a,b,c,d,e,f,g){var _=this
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
Ip(a){return a},
Ig(a){return a},
Cs(a){return a},
Ie(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.Fl(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
I6(a){return new v.G.Promise(A.bV(new A.rT(a)))},
ms:function ms(a){this.a=a},
rT:function rT(a){this.a=a},
rR:function rR(a){this.a=a},
rS:function rS(a){this.a=a},
AM(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Kr,a)
s[$.f7()]=a
return s},
cY(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Ks,a)
s[$.f7()]=a
return s},
bV(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.Kt,a)
s[$.f7()]=a
return s},
p6(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.Ku,a)
s[$.f7()]=a
return s},
hT(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.Kv,a)
s[$.f7()]=a
return s},
CS(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.Kw,a)
s[$.f7()]=a
return s},
Kr(a){return a.$0()},
Ks(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
Kt(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
Ku(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
Kv(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
Kw(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
FD(a){return a==null||A.bH(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
pg(a){if(A.FD(a))return a
return new A.Bp(new A.dX(t.mp)).$1(a)},
D2(a,b){return a[b]},
CX(a,b,c){return a[b].apply(a,c)},
M0(a,b){var s,r
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
a5(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.aI(s,b.i("aI<0>"))
a.then(A.e5(new A.Bw(r),1),A.e5(new A.Bx(r),1))
return s},
FC(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
pe(a){if(A.FC(a))return a
return new A.B4(new A.dX(t.mp)).$1(a)},
Bp:function Bp(a){this.a=a},
Bw:function Bw(a){this.a=a},
Bx:function Bx(a){this.a=a},
B4:function B4(a){this.a=a},
Gh(a,b){return Math.max(a,b)},
Ei(){return B.ar},
Ej(){return $.BK()},
zy:function zy(){},
zz:function zz(a){this.a=a},
Hy(a,b,c){return J.Dl(a,b,c)},
lu:function lu(){},
a3:function a3(){},
pL:function pL(a){this.a=a},
pM:function pM(a){this.a=a},
pN:function pN(a,b){this.a=a
this.b=b},
pO:function pO(a){this.a=a},
pP:function pP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pQ:function pQ(a){this.a=a},
lq:function lq(a){this.$ti=a},
iF:function iF(a,b){this.a=a
this.$ti=b},
es:function es(a,b){this.a=a
this.$ti=b},
hN:function hN(){},
h1:function h1(a,b){this.a=a
this.$ti=b},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b,c){this.a=a
this.b=b
this.$ti=c},
lp:function lp(){},
E9(){throw A.b(A.Y(u.O))},
Jh(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
mr:function mr(){},
nH:function nH(){},
ap(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dQ(m,0,null)},
ck:function ck(a){this.a=a},
c2:function c2(){this.a=null},
lR:function lR(){},
rY:function rY(){},
cX(a){var s=new Uint32Array(A.b7(A.j([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.oK(s,r,a,q,new Uint32Array(16))},
oJ:function oJ(){},
zW:function zW(){},
oK:function oK(a,b,c,d,e){var _=this
_.y=a
_.z=b
_.a=c
_.c=null
_.d=d
_.e=0
_.f=e
_.r=0
_.w=!1},
kF:function kF(){},
pW:function pW(){},
iO:function iO(a){this.a=a},
jj:function jj(){},
uJ:function uJ(){},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
wH:function wH(){},
jk:function jk(a,b){this.b=a
this.c=b},
n_:function n_(a){this.a=a},
bw(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
lj(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=new DataView(new ArrayBuffer(16))
a4.setUint32(0,0,!1)
a4.setUint32(4,0,!1)
a4.setUint32(8,0,!1)
a4.setUint32(12,0,!1)
s=A.bw(a5[0])
r=A.bw(a5[1])
q=A.bw(a5[2])
p=A.bw(a5[3])
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
if((f&B.c.bC(1,31-a))>>>0!==0){e=(e^s)>>>0
d=(d^r)>>>0
c=(c^q)>>>0
b=(b^p)>>>0}a0=s>>>1|0
a1=(s&1)<<31|r>>>1
a2=(r&1)<<31|q>>>1
a3=(q&1)<<31|p>>>1
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bw(s)
a5.$flags&2&&A.H(a5)
a5[0]=k
a5[1]=A.bw(r)
a5[2]=A.bw(q)
a5[3]=A.bw(p)},
DH(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cP(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.N(q,n),!1)
r.setUint32(12,B.c.ak(q,n),!1)
p=J.bL(B.az.gaa(r),0,null)
o=new Uint32Array(4)
A.lj(o,a,b)
A.lj(o,a,p)
return J.bL(B.y.gaa(o),0,null)},
li:function li(a,b,c){this.c=a
this.d=b
this.a=c},
qY:function qY(){},
oc:function oc(){},
od:function od(){},
pb(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kx()===B.P){a5=A.f1(a5)
a6=A.f1(a6)
a7=A.f1(a7)
a8=A.f1(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.ah[a5>>>24&255]^B.af[a6>>>16&255]^B.ag[a7>>>8&255]^B.aj[a8&255]^b3[r]
o=B.ah[a6>>>24&255]^B.af[a7>>>16&255]^B.ag[a8>>>8&255]^B.aj[a5&255]^b3[r+1]
n=B.ah[a7>>>24&255]^B.af[a8>>>16&255]^B.ag[a5>>>8&255]^B.aj[a6&255]^b3[r+2]
m=B.ah[a8>>>24&255]^B.af[a5>>>16&255]^B.ag[a6>>>8&255]^B.aj[a7&255]^b3[r+3]
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
if($.kx()===B.P){a1=A.f1(a1)
a2=A.f1(a2)
a3=A.f1(a3)
a4=A.f1(a4)}a9.$flags&2&&A.H(a9)
a9[b0]=a1
a9[b0+1]=a2
a9[b0+2]=a3
a9[b0+3]=a4},
FX(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge3(),h=B.cT.h(0,i.gm(0))
if(h==null)throw A.b(A.Q("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.Dl(B.y.gaa(r),r.byteOffset,i.gm(0))
p=i.a
o=q.$flags|0
n=p.length
m=0
for(;;){if(!(m<n))break
l=p[m]
o&2&&A.H(q,9)
q.setUint8(m,l);++m}k=i.gm(0)/4|0
if($.kx()===B.P)for(m=0;m<k;++m)r[m]=q.getUint32(4*m,!1)
for(o=k>6,m=k;m<s;++m){j=r[m-1]
n=B.c.ak(m,k)
if(n===0)j=A.FT((j<<8|j>>>24)>>>0)^B.cv[B.c.iK(m,k)-1]<<24
else if(o&&n===4)j=A.FT(j)
r[m]=(j^r[m-k])>>>0}return r},
FT(a){return(B.m[a>>>24&255]<<24|B.m[a>>>16&255]<<16|B.m[a>>>8&255]<<8|B.m[a&255])>>>0},
f1(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qJ:function qJ(){},
qZ:function qZ(){},
yR:function yR(){},
mQ:function mQ(a,b){this.a=a
this.b=b},
kS:function kS(){},
kT:function kT(){},
kU:function kU(){},
kV:function kV(){},
pF:function pF(){},
FU(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mQ("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.ee)){s=J.a0(a)
if(B.a.S(s,"TypeError: "))s=B.a.ae(s,11)
a=new A.ee(s,b.b)}return a},
FH(a,b,c){A.DK(A.FU(a,c),b)},
Kq(a,b){return new A.di(new A.AE(a,b),t.fb)},
hV(a,b,c){return A.Ll(a,b,c)},
Ll(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
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
a1.f=new A.AN(e)
a1.r=new A.AO(e,c,a)
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
m=A.F(b)
l=A.ad(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.FU(m,a)
k=l
j=a1.b
if(j>=4)A.t(a1.bE())
if((j&1)!==0){j=a1.gaM()
j.aG(d,k==null?B.Q:k)}s=15
return A.a(a1.q(),$async$hV)
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
if(f>=4)A.t(a1.bE())
if((f&1)!==0)a1.gaM().aA(g)}g=a1.b
s=((g&1)!==0?(a1.gaM().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.a((g==null?e.a=new A.aI(new A.w($.C,j),i):g).a,$async$hV)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hV,r)},
l_:function l_(a){this.b=!1
this.c=a},
pI:function pI(a){this.a=a},
AE:function AE(a,b){this.a=a
this.b=b},
AN:function AN(a){this.a=a},
AO:function AO(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a){this.a=a},
pK:function pK(a){this.a=a},
DD(a,b){return new A.ee(a,b)},
ee:function ee(a,b){this.a=a
this.b=b},
mk:function mk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
IA(a,b){var s=t.N,r=A.j([],t.e8),q=$.Da()
if(!q.b.test(a))A.t(A.az(a,"method","Not a valid method"))
return new A.v3(A.u(s,s),r,a,b,A.dE(new A.kU(),new A.kV(),s,s))},
v3:function v3(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
v4:function v4(a,b){this.a=a
this.b=b},
IW(a,b){var s=new Uint8Array(0),r=$.Da()
if(!r.b.test(a))A.t(A.az(a,"method","Not a valid method"))
r=t.N
return new A.wy(s,a,b,A.dE(new A.kU(),new A.kV(),r,r))},
wy:function wy(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jr:function jr(){},
nd:function nd(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
Hz(a){return a.toLowerCase()},
ig:function ig(a,b,c){this.a=a
this.c=b
this.$ti=c},
Is(a){return A.N6("media type",a,new A.uN(a))},
Cb(a,b,c){var s=t.N
if(c==null)s=A.u(s,s)
else{s=new A.ig(A.M1(),A.u(s,t.af),t.fo)
s.C(0,c)}return new A.fD(a.toLowerCase(),b.toLowerCase(),new A.cT(s,t.ph))},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
uN:function uN(a){this.a=a},
uP:function uP(a){this.a=a},
uO:function uO(){},
Mm(a){var s
a.mH($.H8(),"quoted string")
s=a.gkc().h(0,0)
return A.Gu(B.a.A(s,1,s.length-1),$.H7(),new A.Bc(),null)},
Bc:function Bc(){},
pE:function pE(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
j8:function j8(){},
vp:function vp(a,b){this.a=a
this.b=b},
vq:function vq(a){this.a=a},
mD:function mD(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
vK:function vK(){},
A1:function A1(a){this.a=a},
vB:function vB(){},
vt:function vt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vA:function vA(a){this.a=a},
vw:function vw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vx:function vx(){},
vy:function vy(a,b){this.a=a
this.b=b},
vz:function vz(){},
vu:function vu(a,b){this.a=a
this.b=b},
vv:function vv(){},
IG(a,b,c,d,e){var s=A.b9(null,t.H)
return new A.vC(b,c,new A.vJ(a,B.au,null),e,d,s)},
IH(a){return 0.5+B.ar.mX()},
ja:function ja(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
vC:function vC(a,b,c,d,e,f){var _=this
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
vJ:function vJ(a,b,c){this.a=a
this.b=b
this.c=c},
vF:function vF(){},
vG:function vG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vD:function vD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vE:function vE(a){this.a=a},
vH:function vH(a){this.a=a},
vI:function vI(a){this.a=a},
A2:function A2(a,b){this.a=a
this.b=null
this.c=b},
iA(a,b){return new A.dy(a)},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lU:function lU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.a=a},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
vr:function vr(a){this.a=a},
vs:function vs(a){this.a=a},
HO(c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="recordId",b2="field",b3="imgs",b4="name",b5="expectedSha256",b6="session",b7="refId",b8="token",b9="id",c0="spec",c1="store"
switch(c2){case"open":s=c3.h(0,"stores")
r=c3.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.U("Malformed open payload."))
q=A.j([],t.d)
for(p=J.E(s);p.k();)q.push(A.DG(p.gn(),"stores"))
p=t.N
p=A.u(p,p)
for(o=r.gab(),o=o.gu(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string"&&typeof n.b=="string")p.j(0,m,A.D(n.b))}return new A.mv(q,p)
case"capabilities":return B.bC
case"health":return B.bF
case"close":return B.bD
case"fileBeginUpload":l=c3.h(0,"size")
if(!A.ai(l))throw A.b(A.U("Malformed fileBeginUpload payload."))
q=A.aQ(c3)
p=A.b8(c3,b1)
if(typeof c3.h(0,b2)=="string"){o=c3.h(0,b2)
o.toString
A.D(o)}else o=b3
if(typeof c3.h(0,b4)=="string"){n=c3.h(0,b4)
n.toString
A.D(n)}else n="blob.bin"
if(typeof c3.h(0,b5)=="string"){m=c3.h(0,b5)
m.toString
A.D(m)}else m=b0
return new A.lC(q,p,o,n,l,m,J.x(c3.h(0,"allowVolatileBlobs"),!0))
case"fileChunk":k=c3.h(0,"chunk")
if(!t.p.b(k))throw A.b(A.U("Malformed fileChunk payload."))
return new A.lD(A.b8(c3,b6),k)
case"fileFinish":return new A.lG(A.b8(c3,b6))
case"fileAbort":return new A.lB(A.b8(c3,b6))
case"filesList":q=A.aQ(c3)
p=A.b8(c3,b1)
if(typeof c3.h(0,b2)=="string"){o=c3.h(0,b2)
o.toString
A.D(o)}else o=b3
return new A.lP(q,p,o)
case"fileOpen":j=c3.h(0,"index")
if(j!=null&&!A.ai(j))throw A.b(A.U("Malformed fileOpen payload."))
q=A.aQ(c3)
p=A.b8(c3,b1)
if(typeof c3.h(0,b2)=="string"){o=c3.h(0,b2)
o.toString
A.D(o)}else o=b3
n=A.ai(j)?j:0
if(typeof c3.h(0,b7)=="string"){m=c3.h(0,b7)
m.toString
A.D(m)}else m=b0
return new A.lJ(q,p,o,n,m)
case"fileCredit":i=c3.h(0,"bytes")
if(!A.ai(i))throw A.b(A.U("Malformed fileCredit payload."))
return new A.lF(A.b8(c3,"stream"),i)
case"fileClose":return new A.lE(A.b8(c3,"stream"))
case"fileRemove":j=c3.h(0,"index")
if(j!=null&&!A.ai(j))throw A.b(A.U("Malformed fileRemove payload."))
q=A.aQ(c3)
p=A.b8(c3,b1)
if(typeof c3.h(0,b2)=="string"){o=c3.h(0,b2)
o.toString
A.D(o)}else o=b3
n=A.ai(j)?j:0
if(typeof c3.h(0,b7)=="string"){m=c3.h(0,b7)
m.toString
A.D(m)}else m=b0
return new A.lN(q,p,o,n,m)
case"fileGc":h=c3.h(0,"blobGraceMs")
g=c3.h(0,"tmpGraceMs")
if(!A.ai(h)||!A.ai(g))throw A.b(A.U("Malformed fileGc payload."))
return new A.lH(h,g)
case"fileEnforceStorageCap":f=c3.h(0,"maxBytes")
if(!A.ai(f))throw A.b(A.U("Malformed fileEnforceStorageCap payload."))
return new A.lv(f)
case"fileStorageStatus":return B.bS
case"syncStart":e=c3.h(0,"baseUrl")
if(typeof e!="string")throw A.b(A.U("Malformed syncStart payload."))
if(typeof c3.h(0,"scopeId")=="string"){q=c3.h(0,"scopeId")
q.toString
A.D(q)}else q=b0
if(typeof c3.h(0,b8)=="string"){p=c3.h(0,b8)
p.toString
A.D(p)}else p=b0
return new A.nm(e,q,p)
case"syncStop":return B.bX
case"syncNow":return B.bT
case"syncPause":return B.bU
case"syncResume":return B.bV
case"syncUpdateAuth":if(typeof c3.h(0,b8)=="string"){q=c3.h(0,b8)
q.toString
A.D(q)}else q=b0
return new A.nt(q)
case"syncSetConnectivity":d=c3.h(0,"online")
if(!A.bH(d))throw A.b(A.U("Malformed syncSetConnectivity payload."))
return new A.nl(d)
case"syncStatus":return B.bW
case"get":return new A.lQ(A.aQ(c3),A.b8(c3,b9),A.cE(c3))
case"rows":c=c3.h(0,"ids")
if(!t.j.b(c))throw A.b(A.U("Malformed rows payload."))
q=A.aQ(c3)
p=A.j([],t.s)
for(o=J.E(c);o.k();)p.push(A.D(o.gn()))
return new A.mT(q,p,A.cE(c3))
case"mutate":return new A.ml(A.aQ(c3),A.KE(c3.h(0,"mutation")),A.cE(c3))
case"query":return new A.mL(A.aQ(c3),A.eB(c3.h(0,c0)),A.cE(c3))
case"count":return new A.lf(A.aQ(c3),A.eB(c3.h(0,c0)),A.cE(c3))
case"countDistinct":return new A.le(A.aQ(c3),A.b8(c3,b2),A.eB(c3.h(0,c0)),A.cE(c3))
case"distinct":q=A.aQ(c3)
p=A.b8(c3,b2)
o=c3.h(0,c0)
return new A.lr(q,p,A.eB(o==null?B.j:o),A.cE(c3))
case"ids":return new A.lV(A.aQ(c3),A.eB(c3.h(0,c0)),A.cE(c3))
case"aggregate":b=c3.h(0,"fn")
a=A.C3(new A.al(B.cE,new A.qE(b),t.gx))
if(a==null)throw A.b(A.U("Unknown aggregate: "+A.r(b)))
return new A.kG(A.aQ(c3),a,A.b8(c3,b2),A.eB(c3.h(0,c0)),A.cE(c3))
case"explain":return new A.ly(A.aQ(c3),A.eB(c3.h(0,c0)),A.cE(c3))
case"search":return new A.mZ(A.aQ(c3),A.J2(c3.h(0,c0)),A.cE(c3))
case"txBegin":a0=c3.h(0,"readOnly")
if(!A.bH(a0))throw A.b(A.U("Malformed txBegin payload."))
a1=c3.h(0,"durability")
if(a1==null)a2=B.bm
else if(typeof a1=="string"){q=A.C3(new A.al(B.cR,new A.qF(a1),t.mE))
if(q==null)q=A.t(A.U("Unknown tx durability: "+a1))
a2=q}else{q=A.t(A.U("Malformed txBegin durability."))
a2=q}return new A.nx(a0,a2)
case"txCommit":case"txRollback":a3=c3.h(0,b6)
if(typeof a3!="string")throw A.b(A.U("Malformed tx payload."))
return c2==="txCommit"?new A.ny(a3):new A.nA(a3)
case"txSavepoint":case"txRollbackTo":case"txRelease":a3=c3.h(0,b6)
a4=c3.h(0,b4)
if(typeof a3!="string"||typeof a4!="string")throw A.b(A.U("Malformed savepoint payload."))
A:{if("txSavepoint"===c2){q=new A.nC(a3,a4)
break A}if("txRollbackTo"===c2){q=new A.nB(a3,a4)
break A}q=new A.nz(a3,a4)
break A}return q
case"watchOne":return new A.nR(A.aQ(c3),A.b8(c3,b9))
case"watch":return new A.nS(A.aQ(c3),A.eB(c3.h(0,c0)))
case"watchCancel":a5=c3.h(0,"subscription")
if(typeof a5!="string")throw A.b(A.U("Malformed watchCancel payload."))
return new A.nQ(a5)
case"analyze":if(typeof c3.h(0,c1)=="string"){q=c3.h(0,c1)
q.toString
A.D(q)}else q=b0
return new A.kI(q)
case"walCheckpoint":return B.bZ
case"vacuum":return B.bY
case"pruneOutbox":return B.bR
case"compact":a6=c3.h(0,c1)
a7=c3.h(0,"olderThanMs")
if(typeof a6!="string"||!A.ai(a7))throw A.b(A.U("Malformed compact payload."))
return new A.l6(a6,a7)
case"runMaintenance":a8=c3.h(0,"compactOlderThanMs")
if(!A.ai(a8))throw A.b(A.U("Malformed runMaintenance payload."))
return new A.mU(a8)
case"conflictsList":a6=c3.h(0,c1)
return new A.lb(typeof a6=="string"?a6:b0)
case"conflictGet":return new A.la(A.aQ(c3),A.b8(c3,b9))
case"conflictsResolve":a9=c3.h(0,"merged")
if(!t.f.b(a9))throw A.b(A.U("Malformed conflictsResolve payload."))
return new A.mR(A.aQ(c3),A.b8(c3,b9),A.DG(a9,"merged"))
case"conflictsAcceptLocal":return new A.kD(A.aQ(c3),A.b8(c3,b9))
case"conflictsAcceptRemote":return new A.kE(A.aQ(c3),A.b8(c3,b9))
case"conflictsWatch":a6=c3.h(0,c1)
return new A.ld(typeof a6=="string"?a6:b0)
default:return b0}},
aQ(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.U("Malformed store name."))
return s},
b8(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.U('Malformed field "'+b+'".'))
return s},
cE(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.U("Malformed session id."))
return s},
DG(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.U('Malformed field "'+b+'".'))},
L9(a){var s
A:{if(a instanceof A.eI){s="ValidationException"
break A}if(a instanceof A.eH){s="UniqueConstraintException"
break A}if(a instanceof A.ex){s="NotNullConstraintException"
break A}if(a instanceof A.fe){s="CheckConstraintException"
break A}if(a instanceof A.fO){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fx){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hi){s="UnsupportedSchemaFeatureError"
break A}if(a instanceof A.fz){s="FtsUnavailableError"
break A}if(a instanceof A.eC){s="SchemaRegistrationError"
break A}if(a instanceof A.h_){s="SchemaTooNewError"
break A}if(a instanceof A.cO){s="StorageError"
break A}if(a instanceof A.fW){s="RecordNotFoundException"
break A}if(a instanceof A.h5){s="StaleCursorError"
break A}if(a instanceof A.fG){s="MissingLimitError"
break A}if(a instanceof A.fi){s="ConflictBlockedError"
break A}if(a instanceof A.ej){s="DestructiveMigrationRefusedError"
break A}if(a instanceof A.fV){s="ReadOnlyTxError"
break A}throw A.b(A.fU(u.P))}return s},
KL(a){var s
A:{if(a instanceof A.iV){s=A.m(["kind","put","record",a.a],t.N,t.X)
break A}if(a instanceof A.iY){s=A.m(["kind","upsert","record",a.a],t.N,t.X)
break A}if(a instanceof A.iW){s=A.m(["kind","putAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iZ){s=A.m(["kind","upsertAll","records",a.a],t.N,t.X)
break A}if(a instanceof A.iS){s=A.m(["kind","patch","id",a.a,"changes",a.b],t.N,t.X)
break A}if(a instanceof A.iT){s=A.m(["kind","patchAll","patches",a.a],t.N,t.X)
break A}if(a instanceof A.iR){s=A.m(["kind","archive","id",a.a],t.N,t.X)
break A}if(a instanceof A.iX){s=A.m(["kind","restore","id",a.a],t.N,t.X)
break A}if(a instanceof A.iU){s=A.m(["kind","purge","id",a.a],t.N,t.X)
break A}throw A.b(A.fU(u.P))}return s},
KE(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.U("Malformed mutation payload."))
s=t.N
r=a.aT(0,new A.AK(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iV(A.pa(r.h(0,n),n))
case"upsert":return new A.iY(A.pa(r.h(0,n),n))
case"putAll":return new A.iW(A.FS(r.h(0,m),m))
case"upsertAll":return new A.iZ(A.FS(r.h(0,m),m))
case"patch":return new A.iS(A.AP(r.h(0,l),l),A.pa(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.U("Malformed patchAll patches."))
k=A.u(s,t.G)
for(s=p.gab(),s=s.gu(s);s.k();){o=s.gn()
k.j(0,J.a0(o.a),A.pa(o.b,"patches"))}return new A.iT(k)
case"archive":return new A.iR(A.AP(r.h(0,l),l))
case"restore":return new A.iX(A.AP(r.h(0,l),l))
case"purge":return new A.iU(A.AP(r.h(0,l),l))
default:throw A.b(A.U("Unknown mutation kind: "+A.r(q)))}},
AP(a,b){if(typeof a=="string")return a
throw A.b(A.U('Malformed mutation field "'+b+'".'))},
pa(a,b){var s,r,q
if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.U('Malformed mutation field "'+b+'".'))},
FS(a,b){var s,r
if(t.j.b(a)){s=A.j([],t.d)
for(r=J.E(a);r.k();)s.push(A.pa(r.gn(),b))
return s}throw A.b(A.U('Malformed mutation field "'+b+'".'))},
eB(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="predicate",a=null,a0=t.f
if(!a0.b(a1))throw A.b(A.U("Malformed query spec."))
s=a1.aT(0,new A.wq(),t.N,t.z)
r=new A.wr()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.j([],t.ae)
i=t.j
if(i.b(p))for(h=J.E(p);h.k();)j.push(r.$1(h.gn()))
if(!s.J(b)||s.h(0,b)==null)a0=a
else a0=a0.b(s.h(0,b))?A.Cd(s.h(0,b)):A.t(A.U("Malformed query predicate."))
h=A.j([],t.gc)
if(i.b(o))for(g=J.E(o);g.k();)h.push(A.IS(g.gn()))
g=A.ai(m)?m:a
f=J.x(s.h(0,"all"),!0)
if(i.b(n)){i=A.j([],t.s)
for(e=J.E(n);e.k();)i.push(J.a0(e.gn()))}else i=a
e=J.x(s.h(0,"includeArchived"),!0)
d=J.x(s.h(0,"includeHidden"),!0)
c=typeof l=="string"?l:a
return new A.wp(k,j,a0,h,g,f,i,e,d,c,J.x(s.h(0,"backward"),!0))},
Eh(a){var s,r,q,p,o,n,m,l="Malformed query condition."
if(!t.f.b(a))throw A.b(A.U(l))
s=a.aT(0,new A.wl(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.U(l))
p=A.C3(new A.al(B.cx,new A.wm(q),t.mz))
if(p==null)throw A.b(A.U("Unknown query operator: "+q))
o=A.pf(s.h(0,"value"))
n=t.j
if(n.b(s.h(0,"values"))){m=[]
for(n=J.E(n.a(s.h(0,"values")));n.k();)m.push(A.pf(n.gn()))
n=m}else n=null
return new A.eA(r,p,o,n)},
Cd(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.U("Malformed predicate tree."))
s=a.aT(0,new A.vO(),t.N,t.z)
r=new A.vN()
switch(s.h(0,"kind")){case"leaf":return new A.iL(A.Eh(s))
case"not":return new A.j5(A.Cd(s.h(0,"child")))
case"all":return new A.i8(r.$1(s.h(0,q)))
case"any":return new A.i9(r.$1(s.h(0,q)))
default:throw A.b(A.U("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
IS(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.U(q))
s=a.aT(0,new A.wo(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.U(q))
return new A.mK(r,J.x(s.h(0,"desc"),!0))},
J2(a){var s,r,q,p
if(!t.f.b(a))throw A.b(A.U("Malformed search spec."))
s=a.aT(0,new A.wG(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.U("Malformed search term."))
q=s.h(0,"limit")
p=A.ai(q)?q:null
return new A.wF(r,p,J.x(s.h(0,"all"),!0),J.x(s.h(0,"includeArchived"),!0),J.x(s.h(0,"includeHidden"),!0))},
HP(a){return new A.fm(a)},
HU(a){return new A.fn(a)},
Ib(a){return new A.fA(a)},
Hu(a){return new A.fa(a)},
I_(a){return new A.fr(a)},
Eq(a){return new A.no(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w)},
hY(a){var s,r,q
if(a instanceof A.aW)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.ap.gf4().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.hY(r.gn()))
return s}if(t.f.b(a)){s=A.u(t.N,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),A.hY(q.b))}return s}if(a==null||A.bH(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.U("Value of type "+J.c_(a).l(0)+" is not wire-safe."))},
pf(a){var s,r,q,p,o,n,m,l="Malformed bytes wire value."
if(t.f.b(a)){r=a.h(0,"__lp_t")
q=J.dn(r)
if(q.R(r,"datetime")){s=a.h(0,"v")
if(A.ai(s))return new A.aW(A.lo(s,0,!0),0,!0)
throw A.b(A.U("Malformed datetime wire value."))}if(q.R(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{q=B.aq.v(s)
return q}catch(p){if(t.Y.b(A.F(p)))throw A.b(A.U(l))
else throw p}throw A.b(A.U(l))}q=A.u(t.N,t.X)
for(o=a.gab(),o=o.gu(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string")q.j(0,m,A.pf(n.b))}return q}if(t.j.b(a)){q=[]
for(o=J.E(a);o.k();)q.push(A.pf(o.gn()))
return q}return a},
U(a){return new A.jz(a)},
qE:function qE(a){this.a=a},
qF:function qF(a){this.a=a},
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
c3:function c3(){},
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
jx:function jx(a,b){this.a=a
this.b=b},
lL:function lL(a,b,c,d,e,f,g,h,i,j){var _=this
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
lG:function lG(a){this.a=a},
lE:function lE(a){this.a=a},
lB:function lB(a){this.a=a},
lP:function lP(a,b,c){this.a=a
this.b=b
this.c=c},
lJ:function lJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lF:function lF(a,b){this.a=a
this.b=b},
lN:function lN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lH:function lH(a,b){this.a=a
this.b=b},
lv:function lv(a){this.a=a},
na:function na(){},
lO:function lO(a,b){this.a=a
this.b=b},
lM:function lM(a){this.a=a},
fv:function fv(a){this.a=a},
lK:function lK(a){this.a=a},
fu:function fu(a){this.a=a},
fs:function fs(a){this.a=a},
h8:function h8(a){this.a=a},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v5:function v5(){},
iV:function iV(a){this.a=a},
iY:function iY(a){this.a=a},
iW:function iW(a){this.a=a},
iZ:function iZ(a){this.a=a},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a},
iR:function iR(a){this.a=a},
iX:function iX(a){this.a=a},
iU:function iU(a){this.a=a},
AK:function AK(){},
wp:function wp(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
wq:function wq(){},
wr:function wr(){},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wl:function wl(){},
wm:function wm(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
cL:function cL(){},
vO:function vO(){},
vN:function vN(){},
iL:function iL(a){this.a=a},
j5:function j5(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
mK:function mK(a,b){this.a=a
this.b=b},
wo:function wo(){},
cB:function cB(a,b){this.a=a
this.b=b},
wF:function wF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wG:function wG(){},
mP:function mP(){},
mv:function mv(a,b){this.a=a
this.b=b},
l0:function l0(){},
lS:function lS(){},
l3:function l3(){},
lQ:function lQ(a,b,c){this.a=a
this.b=b
this.c=c},
mT:function mT(a,b,c){this.a=a
this.b=b
this.c=c},
ml:function ml(a,b,c){this.a=a
this.b=b
this.c=c},
mL:function mL(a,b,c){this.a=a
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
lV:function lV(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ly:function ly(a,b,c){this.a=a
this.b=b
this.c=c},
mZ:function mZ(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a,b){this.a=a
this.b=b},
nx:function nx(a,b){this.a=a
this.b=b},
ny:function ny(a){this.a=a},
nA:function nA(a){this.a=a},
nC:function nC(a,b){this.a=a
this.b=b},
nB:function nB(a,b){this.a=a
this.b=b},
nz:function nz(a,b){this.a=a
this.b=b},
nR:function nR(a,b){this.a=a
this.b=b},
nS:function nS(a,b){this.a=a
this.b=b},
nQ:function nQ(a){this.a=a},
kI:function kI(a){this.a=a},
nP:function nP(){},
nN:function nN(){},
mH:function mH(){},
l6:function l6(a,b){this.a=a
this.b=b},
mU:function mU(a){this.a=a},
lb:function lb(a){this.a=a},
la:function la(a,b){this.a=a
this.b=b},
mR:function mR(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b},
ld:function ld(a){this.a=a},
ah:function ah(){},
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
lT:function lT(a,b){this.a=a
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
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fA:function fA(a){this.a=a},
fa:function fa(a){this.a=a},
fr:function fr(a){this.a=a},
h0:function h0(a){this.a=a},
mY:function mY(a,b){this.a=a
this.b=b},
fk:function fk(a){this.a=a},
fj:function fj(a){this.a=a},
he:function he(a){this.a=a},
hm:function hm(a){this.a=a},
fQ:function fQ(a){this.a=a},
fh:function fh(a){this.a=a},
no:function no(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
xg:function xg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nm:function nm(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function ns(){},
nh:function nh(){},
ni:function ni(){},
nk:function nk(){},
nt:function nt(a){this.a=a},
nl:function nl(a){this.a=a},
nq:function nq(){},
nn:function nn(a){this.a=a},
nj:function nj(a){this.a=a},
nr:function nr(a){this.a=a},
np:function np(a){this.a=a},
kO:function kO(){},
jz:function jz(a){this.a=a},
aj(a){var s,r=new A.a2("")
A.ch(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
D9(a){var s,r,q
for(s=new A.mV(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
Kz(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.c8(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
ch(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.bH(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.ai(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.Kz(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a6(b,h)
a.a+=r
return A.D9(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.M(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.ch(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.j([],t.l5)
for(s=J.E(b.gK());s.k();){n=s.gn()
r=J.a0(n)
if(B.b.bM(o,new A.BH(r)))throw A.b(A.Q('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a4(r,n))}B.b.ck(o,new A.BI())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.q)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a6(k.a,h)
a.a+=j
i=A.D9(j)
a.a+=":"
q=q+i+1+A.ch(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.Q("Cannot canonicalize value of type "+J.c_(b).l(0),h))},
BH:function BH(a){this.a=a},
BI:function BI(){},
J6(a){var s,r,q,p=A.ag("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).e9(a)
if(p==null)return B.di
s=p.b
r=s[1]
r.toString
r=A.aH(r)
q=s[2]
q.toString
q=A.aH(q)
s=s[3]
s=A.jb(s==null?"":s,null)
return new A.eV(r,q,s==null?0:s)},
Ep(a,b,c){var s,r=A.J6(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eF(a,b){return A.J7(a,b)},
J7(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eF=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b0("SELECT sqlite_version() AS v"),$async$eF)
case 3:g=d.R(c.bZ(a2),"v")
g.toString
A.D(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b0("PRAGMA compile_options"),$async$eF)
case 4:j=d.O(new c.bF(b.bM(a2,new A.wQ(),t.X),k),k.i("o.E"))
n=B.b.bM(j,new A.wR())
s=!n?5:6
break
case 5:p=8
s=11
return A.a(a.O("CREATE VIRTUAL TABLE lp__fts5_probe USING fts5(lp__probe)"),$async$eF)
case 11:s=12
return A.a(a.O("DROP TABLE lp__fts5_probe"),$async$eF)
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
return A.a(a.b0("PRAGMA journal_mode"),$async$eF)
case 19:l=a2
if(J.e8(l))m=A.a6(J.bZ(J.bZ(l).gaX()))
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
case 18:case 14:h=A.Ep(g,3,37)
k=k&&J.x(m,"wal")
q=new A.n9(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eF,r)},
mC:function mC(a,b){this.a=a
this.b=b},
n9:function n9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wQ:function wQ(){},
wR:function wR(){},
ih:function ih(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
aS:function aS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
a1:function a1(a,b){this.a=a
this.b=b},
pT:function pT(a,b){this.a=a
this.b=b},
pU:function pU(){},
pV:function pV(){},
Dr(a){return new Uint8Array(A.b7(a))},
rw:function rw(){},
ps:function ps(a,b,c){this.b=a
this.c=b
this.d=c},
D1(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.cm
if(r===B.I){r=a.f
r.toString
r=!B.b.F(r,b)}else r=!1
if(r)return B.cs
return s
case 1:case 4:return!A.ai(b)?B.cn:s
case 2:return typeof b!="number"?B.co:s
case 3:return!A.bH(b)?B.cp:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.cq:s
case 7:return!t.j.b(b)?B.cr:s}},
dm(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gd9(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.CR(n,a0.h(0,l),new Uint8Array(A.b7(B.e.v(q+l+"\x00"+e))),m))}k=A.u(h,g)
for(h=new A.aM(a0,A.n(a0).i("aM<1,2>")).gu(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.F(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.aj(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
G9(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.CR(b,c,new Uint8Array(A.b7(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
LF(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gd9()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.CR(n,g.h(0,l),new Uint8Array(A.b7(B.e.v(q+l+"\x00"+f))),m))}k=A.u(t.N,t.X)
for(s=g.gab(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.F(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.aj(k))
a.push(c?1:0)
a.push(0)},
cf(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.m(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.a6(b.h(0,"id"))
f.j(0,n,A.Fs(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.x(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.aw(k,null)
if(t.f.b(j))f.C(0,A.bb(j,h,g))}return f},
Mg(a,b,c,d){var s,r=A.j([],t.d)
for(s=J.E(b);s.k();)r.push(A.cf(a,s.gn(),c,d))
return r},
Mh(a,b,c,d,e){var s,r,q,p,o,n,m=A.j([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.q)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a4(p,a.f8(p)))}s=A.j([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.KD(o.gn(),m,r,c,e,n))
return s},
KD(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.Fs(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.x(a.h(0,m),1))
return l},
Fs(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.y('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.h7("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.c_(b).l(0)+"."))
r=B.o.f_(s.u6(B.aq.v(b),new Uint8Array(A.b7(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.S===q||B.U===q){p=A.aH(r)
break A}if(B.T===q){p=A.Mk(r)
break A}if(B.V===q||B.W===q){p=B.h.aw(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.x(b,1)
if(p===B.V||p===B.W){if(typeof b!="string")throw A.b(A.h7("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.c_(b).l(0)+"."))
return B.h.aw(b,o)}return b},
CR(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.y('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.x(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.a0(b)
break
case 6:case 7:s=A.aj(b)
break
default:A.D(b)
s=b}r=d.uO(B.e.v(s),c)
return B.ap.gf4().v(r)}switch(a.b.a){case 3:return J.x(b,!0)?1:0
case 6:case 7:return A.aj(b)
default:return b}},
bg(a,b){var s,r,q,p,o,n="archived",m=a.gd9(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.q)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.x(o,!0):o)}for(l=b.gab(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.F(0,p))continue
k.j(0,p,s.b)}if(J.x(b.h(0,n),!0))k.j(0,n,!0)
return k},
AY(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gd9(),i=A.j([],t.iE)
i.push(new A.a4("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a4(o,p.b===B.B?J.x(n,!0):n))}for(s=c.gab(),s=s.gu(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.F(0,o))continue
i.push(new A.a4(o,r.b))}if(J.x(c.h(0,"archived"),!0))i.push(B.dg)
B.b.ck(i,new A.AZ())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.q)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a6(r.a,null)
a.a+=k
o=A.D9(k)
a.a+=":"
m=m+o+1+A.ch(a,r.b)}a.a+="}"
return m+1},
d1:function d1(a,b){this.a=a
this.b=b},
AZ:function AZ(){},
DJ(a){if(a==null)return""
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
rt:function rt(){},
rs:function rs(){},
ru:function ru(){},
rr:function rr(a){this.a=a},
HT(a){return'"'+A.z(a,'"','""')+'"'},
HS(a,b){var s,r,q,p=a.a,o=J.M(p),n=b.a,m=J.M(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.x(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qh:function qh(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
io:function io(a){this.a=a},
rq:function rq(a){this.a=a},
rp:function rp(){},
ro:function ro(a){this.a=a},
rn:function rn(a,b){this.a=a
this.b=b},
rk:function rk(a){this.a=a},
rl:function rl(a){this.a=a},
rm:function rm(){},
au(a,b){return new A.eI(b,a)},
h7(a){return new A.cO(a)},
Cl(a){return new A.fW(a)},
Em(a){return new A.h_(a)},
aP(a){return new A.eC(a)},
rO(a){return new A.fz(a)},
Cq(a){return new A.h5(a)},
E6(a){return new A.fG(a)},
DF(a){return new A.fi(a)},
BU(a){return new A.ej(a)},
Gy(a,b){var s,r="UNIQUE constraint failed",q=J.a0(a),p=a instanceof A.c8,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.F(q,"PRIMARY KEY")&&!B.a.F(q,r)
else p=!0
if(p)return new A.fO("PRIMARY KEY constraint violated.")
if(o===2067||B.a.F(q,r)){s=A.Fw(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.eH(s,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.F(q,"NOT NULL constraint failed")){p=A.Fw(q,"NOT NULL constraint failed:")
return new A.ex(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.F(q,"CHECK constraint failed")||o===275||n===275)return new A.fe("CHECK constraint violated.")
if(B.a.F(q,"FOREIGN KEY")||o===787||n===787)return new A.fx("FOREIGN KEY constraint violated.")
if(B.a.F(q,"database or disk is full"))return new A.cO("Database full: "+A.r(a))
return new A.cO("SQLite error: "+A.r(a))},
Fw(a,b){var s,r,q,p,o,n,m=B.a.bO(a,b)
if(m<0)return"?"
s=B.a.ae(a,m+b.length)
r=s.length
q=B.a.bO(s,",")
if(q>=0)r=q
p=B.a.bO(s,"(")
s=B.a.ci(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.dh(s,".")
s=B.a.ci(o>=0?B.a.ae(s,o+1):s)
if(B.a.S(s,'"')&&B.a.c8(s,'"')){n=B.a.A(s,1,s.length-1)
s=A.z(n,'""','"')}return s.length===0?"?":s},
dF:function dF(){},
eI:function eI(a,b){this.b=a
this.a=b},
eH:function eH(a,b){this.b=a
this.a=b},
ex:function ex(a,b){this.b=a
this.a=b},
fe:function fe(a){this.a=a},
fO:function fO(a){this.a=a},
fx:function fx(a){this.a=a},
cO:function cO(a){this.a=a},
fW:function fW(a){this.a=a},
h_:function h_(a){this.a=a},
eC:function eC(a){this.a=a},
hi:function hi(a){this.a=a},
fz:function fz(a){this.a=a},
h5:function h5(a){this.a=a},
fG:function fG(a){this.a=a},
fi:function fi(a){this.a=a},
ej:function ej(a){this.a=a},
fV:function fV(a){this.a=a},
it:function it(a){this.b=a},
DN(a){return A.ph("lp_file_refs",new A.ry(a))},
bi:function bi(a,b,c,d,e,f,g,h,i,j){var _=this
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
ry:function ry(a){this.a=a},
uA:function uA(a,b){this.a=a
this.b=b},
uB:function uB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uD:function uD(a){this.a=a},
uE:function uE(a){this.a=a},
uF:function uF(a){this.a=a},
uG:function uG(a){this.a=a},
uH:function uH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uC:function uC(a,b){this.a=a
this.b=b},
kZ(a){var s=$.Db()
if(!s.b.test(a))throw A.b(A.Q('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
Dw(a){return new A.fc(a)},
Dx(a,b){return new A.kY(a,b)},
ku(a,b,c,d,e){return A.MQ(a,b,c,d,e)},
MQ(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$ku=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.j([],h)
f=new A.hq(A.cX(new A.oM(new A.Bv(g),A.j([],h),t.mI)))
e=0
h=new A.cy(A.cz(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$ku)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.w)){j=new A.w($.C,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$ku)
case 9:f.a.t(0,m)
e+=J.aq(m)
s=6
break
case 7:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
s=10
return A.a(h.D(),$async$ku)
case 10:s=n.pop()
break
case 5:f.a.q()
if(c!=null&&!J.x(e,c))throw A.b(A.y("Size mismatch: expected "+A.r(c)+" but got "+A.r(e)))
i=A.ap(B.b.gap(g).a)
A.kZ(i)
if(b!=null&&i!==b)throw A.b(A.y("SHA-256 mismatch: expected "+b+" but got "+i))
q=new A.nc(i)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ku,r)},
pH:function pH(){},
fc:function fc(a){this.a=a},
kY:function kY(a,b){this.a=a
this.b=b},
nc:function nc(a){this.a=a},
Bv:function Bv(a){this.a=a},
iv:function iv(a){this.d=a},
rz:function rz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rB:function rB(a,b){this.a=a
this.b=b},
rC:function rC(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b,c){this.a=a
this.b=b
this.c=c},
rD:function rD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rE:function rE(){},
MT(a,b,c){a.tY(!0,new A.BB(c),"lp_norm_"+b)},
Gd(a,b,c,d){var s,r,q='""',p=b.a
if(p.gE(p))return c+"."+('"'+A.z(d,'"',q)+'"')
s='"'+A.z(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.z(c,'"',q)+'".'+s
return'"'+A.z("lp_norm_"+a,'"',q)+'"('+r+")"},
BB:function BB(a){this.a=a},
Ij(a){var s=A.dO(null,null,t.fq),r=t.N
s=new A.tx(a,s,A.u(r,t.g8),A.u(r,t.dz),new A.rG(A.MG(),A.u(r,t.f6)),A.u(r,t.mS))
s.ox(a)
return s},
Bu(a){var s,r,q,p
A:{if(a instanceof A.iL){s=A.Li(a.a)
break A}if(a instanceof A.j5){s=new A.c5(A.Bu(a.a))
break A}if(a instanceof A.i8){r=a.a
s=A.j([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.Bu(r[p]))
s=new A.dr(s)
break A}if(a instanceof A.i9){r=a.a
s=A.j([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.Bu(r[p]))
s=new A.cZ(s)
break A}throw A.b(A.fU(u.P))}return s},
Li(a){var s,r,q,p="isNull",o=a.a
switch(a.b.a){case 0:s=a.c
if(s==null)return new A.a9(o,p,B.n)
return new A.a9(o,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.Q("neq(null) matches no rows; use isNotNull.",null))
return new A.c5(new A.a9(o,"eq",[s]))
case 2:return new A.a9(o,"gt",[a.c])
case 3:return new A.a9(o,"gte",[a.c])
case 4:return new A.a9(o,"lt",[a.c])
case 5:return new A.a9(o,"lte",[a.c])
case 6:r=a.d
return new A.a9(o,"inValues",r==null?B.n:r)
case 7:q=a.d
if(q==null)q=B.n
if(q.length!==2)throw A.b(A.Q("between requires exactly two values.",null))
return new A.a9(o,"between",q)
case 8:return new A.a9(o,"startsWith",[a.c])
case 9:return new A.a9(o,"endsWith",[a.c])
case 10:return new A.a9(o,"contains",[a.c])
case 11:return new A.a9(o,p,B.n)
case 12:return new A.c5(new A.a9(o,p,B.n))}},
LB(){return new A.aW(Date.now(),0,!1)},
KH(){return Date.now()},
p5(a){var s,r,q
if(t.G.b(a)){s=A.u(t.N,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.p5(q.b))}return s}if(t.f.b(a)){s=A.u(t.z,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.p5(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.p5(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b7(a))
return a},
d0(a,b,c,d,e,f,g,h,i){var s=null,r=B.D,q=null,p=null
return A.Il(a,b,c,d,e,f,g,h,i)},
Il(a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$d0=A.c(function(b7,b8){if(b7===1){o.push(b8)
s=p}for(;;)switch(s){case 0:a1=null
a2=B.D
a3=null
a4=null
a5=null
a5=a9
p=4
s=7
return A.a(A.cI(a5,b4),$async$d0)
case 7:s=8
return A.a(A.eF(a5,b4),$async$d0)
case 8:n=b8
i=0
case 9:if(!(i<3)){s=11
break}m=B.cB[i]
s=12
return A.a(a5.O(m),$async$d0)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cS[i]
s=16
return A.a(a5.O(l),$async$d0)
case 16:case 14:++i
s=13
break
case 15:h=a5
g=n
f=a3
if(f==null)f=A.MF()
e=a4
d=a2
c=new A.mA()
b=new A.m7(b3,h,g,c,b2,b0,b6,e,a8,b1,a1,f,A.u(t.N,t.nv),d,new A.pT(A.dO(null,null,t.iv),A.dO(null,null,t.oZ)))
f=new A.y3(A.b9(null,t.H),c.gwk())
b.x=f
d=b.a=new A.uo(b,h,g,f,c,e,d)
b.b=new A.xk(d)
b.c=new A.v6()
b.d=new A.wx()
d=A.Ij(d)
b.e!==$&&A.cg()
b.e=d
d=$.BK()
b.cx!==$&&A.cg()
b.cx=new A.vi(b,d)
b.cy!==$&&A.cg()
b.cy=new A.vd(b,d)
b.db!==$&&A.cg()
b.db=new A.qu(b)
b.dx!==$&&A.cg()
b.dx=new A.uA(b,a8)
k=b
s=17
return A.a(A.m8(a5,k.CW),$async$d0)
case 17:h=b5.length,i=0
case 18:if(!(i<b5.length)){s=20
break}j=b5[i]
s=21
return A.a(k.aP(j),$async$d0)
case 21:case 19:b5.length===h||(0,A.q)(b5),++i
s=18
break
case 20:q=k
s=1
break
p=2
s=6
break
case 4:p=3
a6=o.pop()
p=23
s=26
return A.a(a5.q(),$async$d0)
case 26:p=3
s=25
break
case 23:p=22
a7=o.pop()
s=25
break
case 22:s=3
break
case 25:throw a6
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d0,r)},
cI(a,b){return A.Ik(a,b)},
Ik(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
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
m8(a,b){var s=0,r=A.h(t.H),q,p
var $async$m8=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.cg("lp_migrations","version = ?",[1]),$async$m8)
case 3:if(p.e8(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$m8)
case 4:case 1:return A.e(q,r)}})
return A.f($async$m8,r)},
eX:function eX(){},
zH:function zH(a){this.a=a},
oT:function oT(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=!1
_.r=null
_.w=$},
hH:function hH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=$},
tx:function tx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=e
_.r=null
_.w=f
_.Q=_.z=_.y=_.x=null
_.as=0},
tT:function tT(a){this.a=a},
tU:function tU(){},
tV:function tV(a,b){this.a=a
this.b=b},
tW:function tW(){},
u6:function u6(a,b){this.a=a
this.b=b},
uh:function uh(){},
ui:function ui(a,b){this.a=a
this.b=b},
uj:function uj(a,b){this.a=a
this.b=b},
uk:function uk(a,b){this.a=a
this.b=b},
ul:function ul(a,b){this.a=a
this.b=b},
um:function um(a,b){this.a=a
this.b=b},
un:function un(a,b){this.a=a
this.b=b},
tX:function tX(){},
tY:function tY(){},
tZ:function tZ(){},
u_:function u_(){},
u0:function u0(){},
u1:function u1(){},
u2:function u2(a){this.a=a},
u3:function u3(a){this.a=a},
u4:function u4(){},
u5:function u5(){},
u7:function u7(){},
u8:function u8(a){this.a=a},
u9:function u9(){},
ua:function ua(){},
ub:function ub(){},
uc:function uc(){},
ud:function ud(){},
ue:function ue(a){this.a=a},
uf:function uf(a){this.a=a},
ug:function ug(a,b){this.a=a
this.b=b},
tF:function tF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tG:function tG(){},
tH:function tH(a,b,c){this.a=a
this.b=b
this.c=c},
tI:function tI(){},
tL:function tL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tM:function tM(){},
tz:function tz(a){this.a=a},
ty:function ty(a){this.a=a},
tK:function tK(a){this.a=a},
tJ:function tJ(a){this.a=a},
tQ:function tQ(a,b){this.a=a
this.b=b},
tR:function tR(a,b,c){this.a=a
this.b=b
this.c=c},
tS:function tS(a,b){this.a=a
this.b=b},
tA:function tA(a){this.a=a},
tB:function tB(a){this.a=a},
tC:function tC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tE:function tE(a,b){this.a=a
this.b=b},
tD:function tD(a,b){this.a=a
this.b=b},
tN:function tN(a){this.a=a},
tO:function tO(a){this.a=a},
tP:function tP(a,b){this.a=a
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
rG:function rG(a,b){this.f=a
this.r=b},
rJ:function rJ(){},
rH:function rH(a){this.a=a},
rI:function rI(){},
ok:function ok(){this.b=0
this.c=$},
uo:function uo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=$
_.d=c
_.e=d
_.f=e
_.y=f
_.at=g},
ls:function ls(a,b){this.a=a
this.b=b},
nb:function nb(a,b,c){this.a=a
this.c=b
this.e=c},
vL:function vL(a){this.a=a},
m7:function m7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
_.a$=o},
up:function up(a,b){this.a=a
this.b=b},
us:function us(a){this.a=a},
ur:function ur(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uq:function uq(){},
oa:function oa(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
yL:function yL(a,b){this.a=a
this.b=b},
yK:function yK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yI:function yI(a,b){this.a=a
this.b=b},
yJ:function yJ(a,b){this.a=a
this.b=b},
yH:function yH(a){this.a=a},
hs:function hs(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wx:function wx(){},
xk:function xk(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
xr:function xr(a){this.a=a},
xn:function xn(a){this.a=a},
xq:function xq(a,b,c){this.a=a
this.b=b
this.c=c},
xp:function xp(a,b,c){this.a=a
this.b=b
this.c=c},
xo:function xo(a,b,c){this.a=a
this.b=b
this.c=c},
xm:function xm(a){this.a=a},
xl:function xl(){},
ot:function ot(){},
fE(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a_(h).i("al<1>")
f=A.O(new A.al(h,new A.v0(c,b),g),g.i("o.E"))
B.b.ck(f,new A.v1())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.CW,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aP('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jp()
$.ky()
j.az()
s=m.b?5:7
break
case 5:s=8
return A.a(A.aO(a,b,m),$async$fE)
case 8:s=6
break
case 7:s=9
return A.a(A.mh(a,b,m),$async$fE)
case 9:case 6:if(j.b==null)j.b=$.mF.$0()
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
return A.a(a.b0("SELECT MAX(version) AS m FROM lp_migrations"),$async$fF)
case 2:q=p.f4(h)
if(q==null)q=0
s=3
return A.a(a.aC(0,"lp_migrations",A.m(["version",q+1,"name",d,"applied_at",e.$0(),"duration_ms",b],t.N,t.X)),$async$fF)
case 3:return A.e(null,r)}})
return A.f($async$fF,r)},
mh(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$mh=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b0("PRAGMA table_info("+('"'+A.z(k,'"','""')+'"')+")"),$async$mh)
case 2:i=h.d2(new g.bF(f.bM(e,new A.uY(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.Dc()
if(!m.b.test(n))A.t(A.aP('Field "'+n+u.Z))
if(o.c)throw A.b(A.aP('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.F(0,n)){s=4
break}m=A.z(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.z(n,'"','""')+'"')+" "+o.gkM()),$async$mh)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.q)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$mh,r)},
aO(a,b,c){return A.Iw(a,b,c)},
Iw(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aO=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.BU('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.io(b0.w).jL(b1)
j=A.Iz(b0.f,a2,a3)
p=4
s=7
return A.a(A.uZ(a7,l),$async$aO)
case 7:i=b4
s=8
return A.a(b0.hB(j),$async$aO)
case 8:h=b4
if(J.x(i,"done")&&h){a3=A.BU('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
throw A.b(a3)}s=9
return A.a(A.mj(a7,m),$async$aO)
case 9:g=b4
s=10
return A.a(A.mj(a7,n),$async$aO)
case 10:f=b4
s=g&&!f?11:12
break
case 11:a9=A
s=13
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aO)
case 13:a0=a9.f4(b4)
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
return A.a(A.mi(a7,l,"rebuilding"),$async$aO)
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
if(J.by(b)){s=24
break}s=26
return A.a(a7.a2(new A.v_(b,b1,b0,b2,m),a3),$async$aO)
case 26:a4=J.R(J.pq(b),"rowid")
a4.toString
c=A.ao(a4)
if(J.aq(b)<1e4){s=24
break}s=23
break
case 24:a9=A
s=27
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.z(n,'"','""')+'"')),$async$aO)
case 27:a5=a9.f4(b4)
a=a5==null?0:a5
a9=A
s=28
return A.a(a7.b0("SELECT COUNT(*) c FROM "+('"'+A.z(m,'"','""')+'"')),$async$aO)
case 28:e=a9.f4(b4)
a0=e==null?0:e
if(!J.x(a,a0)){a3=A.y('Rebuild of "'+a2+'" count mismatch: '+A.r(a)+" vs "+A.r(a0)+".")
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
a3=A.F(a8)
if(a3 instanceof A.ej)throw a8
else if(a3 instanceof A.c8){a1=a3
throw A.b(A.BU('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
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
return A.a(b.b0("SELECT COUNT(*) c FROM "+('"'+A.z(q,'"','""')+'"')),$async$d4)
case 16:m=l.f4(h)
if((m==null?0:m)!==f)throw A.b(A.y('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.mi(b,e,"done"),$async$d4)
case 17:return A.e(null,r)}})
return A.f($async$d4,r)},
mj(a,b){var s=0,r=A.h(t.y),q,p
var $async$mj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ai("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$mj)
case 3:q=p.e8(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mj,r)},
Iz(a,b,c){var s=null,r=$.i6(),q=r.ud(a),p=A.dL(a,r.a).gjI()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.mT(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
Iy(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.au('Field "'+s+'" is required.',s))}if(b==null)return
r=A.D1(a,b)
if(r!=null)throw A.b(A.au(A.Iv(a,b,r),a.a))},
Ix(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
A.Iy(p,b.h(0,p.a))}},
Iv(a,b,c){var s,r=a.a,q=J.c_(b)
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
uZ(a,b){var s=0,r=A.h(t.x),q,p,o
var $async$uZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.n2("lp_meta",A.j(["v"],t.s),"k = ?",[b]),$async$uZ)
case 3:p=d
o=J.M(p)
q=o.gE(p)?null:A.a6(J.R(o.gG(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$uZ,r)},
mi(a,b,c){var s=0,r=A.h(t.H)
var $async$mi=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cb(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.R),$async$mi)
case 2:return A.e(null,r)}})
return A.f($async$mi,r)},
KI(){return Date.now()},
v0:function v0(a,b){this.a=a
this.b=b},
v1:function v1(){},
uY:function uY(){},
v_:function v_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mA:function mA(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
ut:function ut(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Aa:function Aa(){},
wn:function wn(a,b){this.a=a
this.b=b},
kr(a){var s=A.z(a,"\\","\\\\")
s=A.z(s,"%","\\%")
return A.z(s,"_","\\_")},
CQ(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.a9){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.t(A.az(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.az(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.az(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.az(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c5){A.CQ(a.a)
break A}p=a instanceof A.dr
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.az(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.q)(n),++m)A.CQ(n[m])}break A}},
AH(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.a9)return A.Fq(a,!1,b)
if(a instanceof A.c5){s=a.a
r=A.AH(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.cZ||s instanceof A.c5){s=new A.a4("NOT "+q,p)
break A}s=new A.a4("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dr){o=A.j([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){l=A.AH(s[m],!1)
o.push(l.a)
B.b.C(p,l.b)}k=B.b.B(o," AND ")
return new A.a4(b?k:"("+k+")",p)}if(a instanceof A.cZ){o=A.j([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){j=A.KB(s[m])
o.push(j.a)
B.b.C(p,j.b)}return new A.a4("("+B.b.B(o," OR ")+")",p)}throw A.b(A.fU(u.M))},
KB(a){var s
A:{if(a instanceof A.a9){s=A.Fq(a,!0,!1)
break A}s=A.AH(a,!1)
break A}return s},
Fq(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.z(a.a,'"','""')+'"',n=A.O(a.c,t.X),m=a.b
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
n[0]=A.kr(A.D(r))+"%"
break
case"endsWith":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kr(A.D(r))
break
case"contains":s=o+p
r=n[0]
r.toString
n[0]="%"+A.kr(A.D(r))+"%"
break
default:throw A.b(A.az(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a4(q?"("+s+")":s,n)},
d6:function d6(){},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a){this.a=a},
dr:function dr(a){this.a=a},
cZ:function cZ(a){this.a=a},
IR(a,b){var s,r=$.fS.H(0,a)
if(r!=null){$.fS.j(0,a,r)
return r}s=b.$0()
if($.fS.a>=512)$.fS.H(0,new A.T($.fS,A.n($.fS).i("T<1>")).gG(0))
$.fS.j(0,a,s)
return s},
b_:function b_(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
mJ:function mJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
wk:function wk(a,b,c){this.a=a
this.b=b
this.c=c},
wf:function wf(){},
wg:function wg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wh:function wh(a){this.a=a},
wi:function wi(){},
wj:function wj(){},
J1(a){var s,r,q=B.a.ci(a)
if(q.length===0)return
s=!0
if(!B.a.F(q,'"')){r=A.ag("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.ag("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.au("Invalid search term: "+a,null))},
J0(a){var s,r,q,p
for(s=B.a.cQ(a,A.ag("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
if(p.length!==0&&new A.jg(p).gm(0)<3)throw A.b(A.au('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cN:function cN(a,b){this.a=a
this.b=b},
wE:function wE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.w=_.r=_.f=!1},
ko(a){var s,r,q
try{r=a.$0()
return r}catch(q){r=A.F(q)
if(r instanceof A.dF)throw q
else{s=r
r=A.h7("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
DM(a){return A.ko(new A.rx(a))},
Ic(a){return A.ko(new A.tk(a))},
I4(a){return A.ko(new A.rN(a))},
DR(a,b){var s
if(new A.jg(a).gm(0)!==1)throw A.b(A.aP('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aP('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
I3(a){return A.ko(new A.rM(a))},
I2(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.gab(),s=s.gu(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
Ja(a){return A.ko(new A.wU(a))},
pZ(a,b){return A.ko(new A.q_(a,b))},
LG(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.al.h(0,s)
return b},
c4:function c4(a,b){this.a=a
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
rx:function rx(a){this.a=a},
iC:function iC(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
tk:function tk(a){this.a=a},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(a){this.a=a},
en:function en(a){this.a=a},
rM:function rM(a){this.a=a},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
wU:function wU(a){this.a=a},
v2:function v2(a,b){this.a=a
this.b=b},
qs:function qs(){},
c1:function c1(a,b,c,d,e,f,g,h,i,j){var _=this
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
q_:function q_(a,b){this.a=a
this.b=b},
Cn(a){var s=A.KC(a),r=A.j([],t.s)
if(B.Z.gW(B.Z))r.push("fieldResolvers")
if(B.b.bM(a.x,new A.wA()))r.push("migrationTransform")
if(B.al.gW(B.al))r.push("documentMigrations")
return new A.mX(s,A.fC(r,t.N),1,a.a,a.b,2)},
J_(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aP("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aT(0,new A.wB(),s,r)
p=q.h(0,"formatVersion")
if(!A.ai(p))throw A.b(A.aP("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.Em("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.ai(n)||!j.b(m)||!t.j.b(l)||!A.ai(k))throw A.b(A.aP('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.mX(m.aT(0,new A.wC(),s,t.X),A.fC(J.bM(l,new A.wD(),r),s),p,o,n,k)},
KC(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cJ(a.p(),n,m),k=B.Z.gK()
k=A.O(k,A.n(k).i("o.E"))
B.b.aE(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.j([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].p()
o=A.dE(null,null,n,m)
o.C(0,p)
o.j(0,"hasTransform",!1)
k.push(o)}l.j(0,"migrations",k)
n=B.al.gK()
n=A.O(n,A.n(n).i("o.E"))
B.b.aE(n)
l.j(0,"documentMigrationVersions",n)
l.j(0,"hasValidatorCallback",!1)
return l},
mX:function mX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
wA:function wA(){},
wB:function wB(){},
wC:function wC(){},
wD:function wD(){},
HG(a,b){var s,r=a.a
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
v6:function v6(){},
dJ:function dJ(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qd:function qd(a,b){this.a=a
this.b=b},
qg:function qg(a,b){this.a=a
this.b=b},
qc:function qc(a,b){this.a=a
this.b=b},
qf:function qf(a,b){this.a=a
this.b=b},
qa:function qa(a,b,c){this.a=a
this.b=b
this.c=c},
q9:function q9(a,b){this.a=a
this.b=b},
q8:function q8(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
qb:function qb(a,b){this.a=a
this.b=b},
q3:function q3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q2:function q2(){},
q7:function q7(){},
q6:function q6(){},
q5:function q5(){},
q4:function q4(){},
q0:function q0(){},
q1:function q1(){},
hp:function hp(){},
o9:function o9(){},
pt:function pt(a){this.a=a},
pu:function pu(a,b){this.a=a
this.b=b},
pv:function pv(a){this.a=a},
pw:function pw(){},
BS(a){return A.ph("lp_conflicts",new A.qt(a))},
bh:function bh(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qt:function qt(a){this.a=a},
qu:function qu(a){this.a=a},
qz:function qz(a,b,c){this.a=a
this.b=b
this.c=c},
qy:function qy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qw:function qw(a,b){this.a=a
this.b=b},
qx:function qx(a,b){this.a=a
this.b=b},
qv:function qv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ng:function ng(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
xf:function xf(a){this.a=a},
x7:function x7(a){this.a=a},
xd:function xd(a,b){this.a=a
this.b=b},
xc:function xc(a){this.a=a},
xb:function xb(a,b){this.a=a
this.b=b},
xe:function xe(a){this.a=a},
x8:function x8(a,b){this.a=a
this.b=b},
x9:function x9(){},
xa:function xa(){},
et(a){return new A.d3(a)},
D8(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.f6(a,b)
r=A.bg(a,s)
q=A.aj(r)
p=A.ap(B.l.v(B.e.v(q)).a)
return new A.ew(b,s,q,p,k)}catch(m){l=A.F(m)
if(l instanceof A.d3){o=l
return new A.ew(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.ew(b,k,k,k,l)}}},
ML(a,b){var s,r=A.j([],t.i7)
for(s=J.E(b);s.k();)r.push(A.D8(a,s.gn()))
return r},
D7(a,b){var s=0,r=A.h(t.eT),q
var $async$D7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.ML(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$D7,r)},
f6(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.bb(b.d,j,i),g=a.gd9(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.x(f,s))throw A.b(A.et('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bH(r))throw A.b(A.et('Field "archived" must be a boolean, got '+J.c_(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.q)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.et('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.D1(o,n)
if(m!=null)throw A.b(A.et(A.Ln(o,n,m)))
q.j(0,s,n)}for(j=new A.aM(h,A.n(h).i("aM<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.F(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.x(r,!0))
return q},
Ln(a,b,c){var s,r=a.a,q=J.c_(b)
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
if(a==null||a.length===0)return B.j
s=null
try{s=B.h.aw(a,null)}catch(q){r=A.F(q)
p=A.et("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.et("Corrupt payload JSON: expected an object, got "+J.c_(s).l(0)+"."))
return A.bb(s,t.N,t.X)},
d3:function d3(a){this.a=a},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bI(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aN(i),g=A.d2(a.gK(),i)
g.C(0,b.gK())
for(g=A.hC(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.t.Y(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.kC(o.gK(),new A.B1())&&J.kC(n.gK(),new A.B2())){m=A.bI(A.bb(o,i,q),A.bb(n,i,q))
for(l=A.n(m),k=new A.dZ(m,m.r,l.i("dZ<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
It(a,b,c,d,e,f,g){return new A.uQ()},
Lh(a,b){var s,r,q=a.b
if(q.gE(q))return null
for(s=b;;){q.h(0,s)
r=B.a.dh(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
Cc(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$Cc=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.Iu(B.c_,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Cc,r)},
Iu(a,b,c,d,e,f,g){var s,r,q,p=A.bI(b,c),o=A.bI(b,f)
A.It(b,p,o,c,e,f,g)
s=t.N
r=A.d2(c.gK(),s)
r.C(0,new A.T(f,A.n(f).i("T<1>")))
r.C(0,b.gK())
q=A.O(r,A.n(r).c)
return A.uW(a,b,p,o,0,q,c,A.u(s,t.X),d,e,f,new A.zQ(),g)},
uW(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.dH(h,a0.a,null)
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
h.j(0,s,m)}return A.uW(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.E5(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.w)return l.X(new A.uX(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.uW(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
E5(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.t.Y(a1,a4))return a1
if(B.t.Y(a1,a0))return a4
if(B.t.Y(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kC(a1.gK(),new A.uR()))if(J.kC(a4.gK(),new A.uS()))if(a0!=null)r=s.b(a0)&&J.kC(a0.gK(),new A.uT())
else r=!0
if(r){r=t.N
q=t.X
p=A.bb(a1,r,q)
o=A.bb(a4,r,q)
n=a0==null?null:A.bb(s.a(a0),r,q)
s=A.aN(r)
m=n==null
l=m?null:new A.T(n,A.n(n).i("T<1>"))
if(l!=null)s.C(0,l)
s.C(0,new A.T(p,A.n(p).i("T<1>")))
s.C(0,new A.T(o,A.n(o).i("T<1>")))
k=A.u(r,q)
j=[]
for(r=s.$ti.c,l=A.hC(s,s.r,r),i=a2+".",h=l.$ti.c,g=!1;l.k();){f=l.d
if(f==null)f=h.a(f)
e=m?null:n.h(0,f)
d=A.E5(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.w)g=!0
j.push(d)}if(!g){for(s=A.hC(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.C0(new A.X(j,new A.uU(),A.a_(j).i("X<1,A<k?>>")),q).X(new A.uV(s,k),q)}A.Lh(a3,a2)
return a4},
Gi(a,b,c,d,e,f){return A.Cc(a,b,c,d,e,f)},
B1:function B1(){},
B2:function B2(){},
uQ:function uQ(){},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
mf:function mf(a,b,c){this.a=a
this.b=b
this.c=c},
zQ:function zQ(){this.a=!1},
zO:function zO(){},
y8:function y8(){},
uX:function uX(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
uR:function uR(){},
uS:function uS(){},
uT:function uT(){},
uU:function uU(){},
uV:function uV(a,b){this.a=a
this.b=b},
vd:function vd(a,b){this.a=a
this.b=b},
vf:function vf(a){this.a=a},
vg:function vg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(){},
jf:function jf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vi:function vi(a,b){this.a=a
this.b=b},
vo:function vo(a,b){this.a=a
this.b=b},
vm:function vm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vl:function vl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vk:function vk(a,b,c){this.a=a
this.b=b
this.c=c},
vn:function vn(a){this.a=a},
e9:function e9(a,b){this.a=a
this.b=b},
mI:function mI(a,b){this.b=a
this.f=b},
vZ:function vZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w6:function w6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w5:function w5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w0:function w0(a,b,c){this.a=a
this.b=b
this.c=c},
w_:function w_(a,b,c){this.a=a
this.b=b
this.c=c},
w2:function w2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w1:function w1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w4:function w4(a,b,c){this.a=a
this.b=b
this.c=c},
w3:function w3(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w7:function w7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
w9:function w9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
we:function we(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wc:function wc(a,b,c){this.a=a
this.b=b
this.c=c},
wb:function wb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wa:function wa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w8:function w8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wd:function wd(a,b,c,d,e,f,g,h,i,j){var _=this
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
ca:function ca(a,b){this.a=a
this.b=b},
bn:function bn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hc:function hc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
hb:function hb(a,b){this.a=a
this.b=b},
x4:function x4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x5:function x5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Ev(a){return new A.hf(a)},
Hv(a){return new A.c0(a)},
I1(a){return new A.cG(a)},
IE(a){return new A.cK(a)},
bk(a){return new A.fP(a)},
Mp(a){var s=a.wL(),r=new A.Be()
return A.r(r.$2(A.Ci(s),4))+"-"+A.r(r.$1(A.Cg(s)))+"-"+A.r(r.$1(A.vQ(s)))+" "+A.r(r.$1(A.Ce(s)))+":"+A.r(r.$1(A.Cf(s)))+":"+A.r(r.$1(A.Ch(s)))+"."+A.r(r.$2(A.Ee(s),3))+"Z"},
Eu(a){var s=Date.now()
return new A.nw(a,new A.aW(s,0,!1))},
bu:function bu(){},
hf:function hf(a){this.a=a},
eD:function eD(a,b){this.b=a
this.a=b},
jl:function jl(a){this.a=a},
c0:function c0(a){this.a=a},
cG:function cG(a){this.a=a},
cK:function cK(a){this.a=a},
fN:function fN(a){this.a=a},
fP:function fP(a){this.a=a},
fo:function fo(a){this.a=a},
ea:function ea(a){this.a=a},
h9:function h9(a,b,c){this.a=a
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
je:function je(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kP:function kP(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
Be:function Be(){},
nw:function nw(a,b){this.a=a
this.c=b},
Jd(a){return 0.5+B.ar.mX()},
Cu(a){var s,r=a.toLowerCase()
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
Je(a){var s,r,q,p,o,n,m,l,k=null,j=A.ag("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).e9(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.Cu(r)
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
return A.Cv(r,q,p,o,n,A.aH(s))}j=A.ag("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).e9(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.Cu(r)
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
return A.Cv(l,q,r,p,o,A.aH(s))}j=A.ag("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).e9(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.Cu(r)
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
return A.Cv(r,q,p,o,n,A.aH(s))}return k},
Cv(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.BT(a,b,c,d,e,f,0)
return s}catch(r){return null}},
x6:function x6(a,b){this.at=a
this.ay=b},
jd:function jd(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
xi:function xi(a,b){this.a=a
this.b=b},
G1(a,b,c,d,e,f,g,h,i,j){var s,r=A.Gk(a,b,c,null,d,e,f,g,h,i,j),q=A.u(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.Y[s],r[s])
return q},
Gk(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.FZ(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
FZ(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
M_(a,b,c,d,e,f,g){var s,r=null,q=A.Gw(B.a5,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.u(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.X[s],q[s])
return p},
Gw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.G_(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
G_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
Gs(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
i3(a){return new A.X(a,new A.BA(),A.a_(a).i("X<1,l>")).B(0,", ")},
ju(a){return A.ph("lp_sync_row",new A.xh(a))},
mx(a){return A.ph("lp_outbox",new A.vj(a))},
IF(a){return A.ph("lp_op_queue",new A.ve(a))},
kv(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kv=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(k,$async$kv)
case 3:j.C(0,i.bM(h.a(d),new A.By(),n))
k=A.O(l,n)
k.push("pending")
k.push("failed")
k=a.ai("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kv)
case 4:j.C(0,i.bM(h.a(d),new A.Bz(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kv,r)},
i5(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$i5=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.el("lp_blobs",A.j(["hash"],q),1,"hash = ?",A.j([b],q))
p=J
o=t.J
s=5
return A.a(q,$async$i5)
case 5:s=p.by(o.a(f))?2:4
break
case 2:q=a.aC(0,"lp_blobs",A.m(["hash",b,"size",d,"state","local","refcount",1,"last_access",c,"created_at",c],t.N,t.K))
s=6
return A.a(q,$async$i5)
case 6:s=3
break
case 4:q=a.aD("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.j([c,b],t.hf))
s=7
return A.a(q,$async$i5)
case 7:case 3:return A.e(null,r)}})
return A.f($async$i5,r)},
B7(a,b){var s=0,r=A.h(t.H),q,p
var $async$B7=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aD(u.y,A.j([b],t.s))
s=3
return A.a(p,$async$B7)
case 3:case 1:return A.e(q,r)}})
return A.f($async$B7,r)},
cA(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cA=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.n2("lp_file_refs",A.j(["ref_id","hash"],n),"store = ? AND record_id = ?",A.j([b,c],n))
l=J
k=t.J
s=2
return A.a(m,$async$cA)
case 2:m=l.E(k.a(f))
case 3:if(!m.k()){s=4
break}q=m.gn()
p=a.Z("lp_file_refs","ref_id = ?",[q.h(0,"ref_id")])
s=5
return A.a(p,$async$cA)
case 5:o=A.a6(q.h(0,"hash"))
s=o!=null&&o.length!==0?6:7
break
case 6:s=8
return A.a(A.B7(a,o),$async$cA)
case 8:case 7:s=3
break
case 4:m=a.Z("lp_conflicts","store = ? AND record_id = ?",A.j([b,c],n))
s=9
return A.a(m,$async$cA)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.j([b,c],n))
s=10
return A.a(m,$async$cA)
case 10:s=d?11:12
break
case 11:m=a.Z("lp_outbox","store = ? AND record_id = ?",A.j([b,c],n))
s=13
return A.a(m,$async$cA)
case 13:n=a.Z("lp_sync_row","store = ? AND record_id = ?",A.j([b,c],n))
s=14
return A.a(n,$async$cA)
case 14:case 12:return A.e(null,r)}})
return A.f($async$cA,r)},
cQ:function cQ(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
BA:function BA(){},
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
xh:function xh(a){this.a=a},
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
vj:function vj(a){this.a=a},
ey:function ey(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
ve:function ve(a){this.a=a},
By:function By(){},
Bz:function Bz(){},
Cx(a,b,c,d,e){var s=e==null?A.j([],t.eb):e
return new A.bE(a,b,c,s,d,new A.zV())},
nD(a){var s=$.C.h(0,$.kA())
if(s instanceof A.bE&&s.a===a)return s
return null},
bE:function bE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xs:function xs(a,b,c){this.a=a
this.b=b
this.c=c},
zV:function zV(){this.a=0
this.b=null},
M4(a,b,c){var s,r,q,p,o=A.j([],t.s)
for(s=J.E(a);s.k();){r=new A.a2("")
A.ch(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aE(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.ap(B.l.v(B.e.v(p)).a)},
mM:function mM(a,b,c){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.d=_.c=null
_.f=_.e=!1
_.r=null},
wt:function wt(){},
ws:function ws(a){this.a=a},
wu:function wu(a){this.a=a},
mu:function mu(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
vc:function vc(a){this.a=a},
ff:function ff(){},
y3:function y3(a,b){this.a=a
this.b=0
this.c=b},
y4:function y4(a,b,c){this.a=a
this.b=b
this.c=c},
MX(a){if(a instanceof A.dF){if(a instanceof A.eI)return"ValidationException"
if(a instanceof A.eH)return"UniqueConstraintException"
if(a instanceof A.ex)return"NotNullConstraintException"
if(a instanceof A.fe)return"CheckConstraintException"
if(a instanceof A.fO)return"PrimaryKeyConstraintException"
if(a instanceof A.fx)return"ForeignKeyConstraintException"
if(a instanceof A.cO)return"StorageError"
if(a instanceof A.fW)return"RecordNotFoundException"
if(a instanceof A.h_)return"SchemaTooNewError"
if(a instanceof A.fz)return"FtsUnavailableError"
if(a instanceof A.hi)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eC)return"SchemaRegistrationError"
if(a instanceof A.h5)return"StaleCursorError"
if(a instanceof A.fG)return"MissingLimitError"
if(a instanceof A.fi)return"ConflictBlockedError"
if(a instanceof A.ej)return"DestructiveMigrationRefusedError"
if(a instanceof A.fV)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bu){if(a instanceof A.hf)return"TransientNetworkError"
if(a instanceof A.eD)return"ServerBusyError"
if(a instanceof A.jl)return"ServerError"
if(a instanceof A.c0)return"AuthError"
if(a instanceof A.cG)return"ForbiddenError"
if(a instanceof A.cK)return"NotFoundError"
if(a instanceof A.fN)return"PayloadError"
if(a instanceof A.fP)return"ProtocolError"
if(a instanceof A.fo)return"DuplicateIdError"
if(a instanceof A.ea)return"BatchFailedError"
return"SyncError"}if(a instanceof A.jc)return"ProtocolEnvelopeException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bl)return"StateError"
if(a instanceof A.bz)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
Jn(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.ai(s))throw A.b(A.dM('Request "v" must be an int.'))
if(!A.ai(r)||r<0)throw A.b(A.dM('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dl.F(0,q))throw A.b(A.dM("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.dM('Request "a" must be a map.'))
return new A.hn(s,r,q,p.aT(0,new A.xT(),t.N,t.X))},
dM(a){return new A.jc(a)},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xT:function xT(){},
nT:function nT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xQ:function xQ(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a){this.a=a},
EC(a){var s
if(t.m.b(a))s=J.x(a.name,"NotFoundError")||J.x(a.name,"TypeMismatchError")
else s=!1
return s},
xO:function xO(a){this.b=a
this.d=null},
xP:function xP(a){this.a=a},
oy:function oy(a){this.a=a},
Iq(a){var s,r,q
try{s=A.pe(a)
if(t.f.b(s)){r=A.f3(s)
return r}}catch(q){}return null},
Ir(a){if(a instanceof A.jA)return A.pg(new A.nT(3,a.a,a.b,null).p())
t.bp.a(a)
return A.Ca(a.a,a.b,a.c,a.d)},
Ca(a,b,c,d){return A.pg(new A.nT(3,a,null,new A.xQ(b,c,d)).p())},
kn(a){return A.Lf(a)},
Lf(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
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
i=A.O(j.cQ(0,"drift_db"),t.N)
m=i
J.Dk(m,j.cQ(0,a))
m=m
j=m.length
h=0
case 8:if(!(h<m.length)){s=10
break}l=m[h]
if(J.aq(l)===0){s=9
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
p7(a,b){return A.Lg(a,b)},
Lg(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$p7=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kn(a),$async$p7)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a5(m.getFileHandle(A.dL(b,$.i6().a).gjI(),{create:!1}),t.m),$async$p7)
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
return A.f($async$p7,r)},
p8(a,b){return A.Lo(a,b)},
Lo(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$p8=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kn(a),$async$p8)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.BZ(m,A.dL(b,$.i6().a).gjI()),$async$p8)
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
return A.f($async$p8,r)},
ux:function ux(){},
uy:function uy(a){this.a=a},
uz:function uz(a){this.a=a},
md:function md(a,b,c){this.a=a
this.d=b
this.e=c},
uI:function uI(a){this.a=a},
hu:function hu(a){this.a=a},
MN(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.u(t.N,t.X)
try{if(t.f.b(a)){s=A.f3(a)
r=A.u(t.N,t.X)
q=t.j
if(q.b(J.R(s,n))){p=J.R(s,n)
p.toString
p=J.bM(q.a(p),new A.Bs(),t.bU)
q=A.O(p,p.$ti.i("Z.E"))
J.bY(r,n,q)}if(A.ai(J.R(s,m)))J.bY(r,m,J.R(s,m))
if(A.bH(J.R(s,l)))J.bY(r,l,J.R(s,l))
return r}}catch(o){}return A.u(t.N,t.X)},
Gq(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.f3(a).h(0,b)
return s}}catch(r){}return null},
Mu(a,b){if(b!=null)return!1
return B.b.bM(a,new A.Bj())},
Bs:function Bs(){},
Bj:function Bj(){},
Bi:function Bi(){},
xV:function xV(a){this.a=a},
MO(a){if(!t.f.b(a))throw A.b(A.a8("Schema must be a map: "+A.r(a),null,null))
return A.pZ(A.f3(a),t.X)},
f3(a){var s=A.u(t.N,t.X)
a.a7(0,new A.B9(s))
return s},
ho:function ho(){},
jA:function jA(a,b){this.b=a
this.a=b},
eK:function eK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
B9:function B9(a){this.a=a},
B8:function B8(){},
nW:function nW(){},
xY:function xY(a,b){var _=this
_.f=$
_.c=a
_.d=b
_.e=null},
xZ:function xZ(a){this.a=a},
nV:function nV(){},
xW:function xW(a){this.a=a},
xX:function xX(){},
p_:function p_(){},
FF(a){return a},
FV(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=a+"("
p.a=o
n=A.a_(b)
m=n.i("ct<1>")
l=new A.ct(b,0,s,m)
l.iL(b,0,s,n.c)
m=o+new A.X(l,new A.AU(),m.i("X<Z.E,l>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.Q(p.l(0),null))}},
qB:function qB(a){this.a=a},
qC:function qC(){},
qD:function qD(){},
AU:function AU(){},
ts:function ts(){},
dL(a,b){var s,r,q,p,o,n=b.nY(a),m=b.cH(a)
if(n!=null)a=B.a.ae(a,n.length)
s=t.s
r=A.j([],s)
q=A.j([],s)
s=a.length
if(s!==0&&b.cc(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cc(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ae(a,p))
q.push("")}return new A.my(b,n,m,r,q)},
my:function my(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
Eb(a){return new A.mz(a)},
mz:function mz(a){this.a=a},
Jc(){var s,r,q,p,o,n,m,l,k=null
if(A.Cy().gb_()!=="file")return $.kz()
if(!B.a.c8(A.Cy().gbp(),"/"))return $.kz()
s=A.Fb(k,0,0)
r=A.F9(k,0,0,!1)
q=A.Ag(k,0,0,k)
p=A.F8(k,0,0)
o=A.Af(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.Fa("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.CO(l,m)
else l=A.eY(l)
if(A.kg("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).ku()==="a\\b")return $.pk()
return $.GI()},
x3:function x3(){},
vM:function vM(a,b,c){this.d=a
this.e=b
this.f=c},
xA:function xA(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
xU:function xU(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
BY(a,b){if(b<0)A.t(A.aZ("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.t(A.aZ("Offset "+b+u.D+a.gm(0)+"."))
return new A.lI(a,b)},
wM:function wM(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lI:function lI(a,b){this.a=a
this.b=b},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
I8(a,b){var s=A.I9(A.j([A.JL(a,!0)],t.pg)),r=new A.ti(b).$0(),q=B.c.l(B.b.ga1(s).b+1),p=A.Ia(s)?0:3,o=A.a_(s)
return new A.rZ(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.t0(),o.i("X<1,i>")).wu(0,B.bA),!A.MC(new A.X(s,new A.t1(),o.i("X<1,k?>"))),new A.a2(""))},
Ia(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.x(r.c,q.c))return!1}return!0},
I9(a){var s,r,q=A.Mt(a,new A.t3(),t.nf,t.K)
for(s=A.n(q),r=new A.aR(q,q.r,q.e,s.i("aR<2>"));r.k();)J.Do(r.d,new A.t4())
s=s.i("aM<1,2>")
r=s.i("iu<o.E,cx>")
s=A.O(new A.iu(new A.aM(q,s),new A.t5(),r),r.i("o.E"))
return s},
JL(a,b){var s=new A.zq(a).$0()
return new A.bq(s,!0,null)},
JN(a){var s,r,q,p,o,n,m=a.gaJ()
if(!B.a.F(m,"\r\n"))return a
s=a.gM().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gP()
p=a.ga3()
o=a.gM().gag()
p=A.n4(s,a.gM().gaq(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gbc()
return A.wN(r,p,o,A.z(n,"\r\n","\n"))},
JO(a){var s,r,q,p,o,n,m
if(!B.a.c8(a.gbc(),"\n"))return a
if(B.a.c8(a.gaJ(),"\n\n"))return a
s=B.a.A(a.gbc(),0,a.gbc().length-1)
r=a.gaJ()
q=a.gP()
p=a.gM()
if(B.a.c8(a.gaJ(),"\n")){o=A.Bd(a.gbc(),a.gaJ(),a.gP().gaq())
o.toString
o=o+a.gP().gaq()+a.gm(a)===a.gbc().length}else o=!1
if(o){r=B.a.A(a.gaJ(),0,a.gaJ().length-1)
if(r.length===0)p=q
else{o=a.gM().gar()
n=a.ga3()
m=a.gM().gag()
p=A.n4(o-1,A.ET(s),m-1,n)
q=a.gP().gar()===a.gM().gar()?p:a.gP()}}return A.wN(q,p,r,s)},
JM(a){var s,r,q,p,o
if(a.gM().gaq()!==0)return a
if(a.gM().gag()===a.gP().gag())return a
s=B.a.A(a.gaJ(),0,a.gaJ().length-1)
r=a.gP()
q=a.gM().gar()
p=a.ga3()
o=a.gM().gag()
p=A.n4(q-1,s.length-B.a.dh(s,"\n")-1,o-1,p)
return A.wN(r,p,s,B.a.c8(a.gbc(),"\n")?B.a.A(a.gbc(),0,a.gbc().length-1):a.gbc())},
ET(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.i7(a,"\n",s-2)-1
else return s-B.a.dh(a,"\n")-1},
rZ:function rZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ti:function ti(a){this.a=a},
t0:function t0(){},
t_:function t_(){},
t1:function t1(){},
t3:function t3(){},
t4:function t4(){},
t5:function t5(){},
t2:function t2(a){this.a=a},
tj:function tj(){},
t6:function t6(a){this.a=a},
td:function td(a,b,c){this.a=a
this.b=b
this.c=c},
te:function te(a,b){this.a=a
this.b=b},
tf:function tf(a){this.a=a},
tg:function tg(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tb:function tb(a,b){this.a=a
this.b=b},
tc:function tc(a,b){this.a=a
this.b=b},
t7:function t7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t8:function t8(a,b,c){this.a=a
this.b=b
this.c=c},
t9:function t9(a,b,c){this.a=a
this.b=b
this.c=c},
ta:function ta(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
th:function th(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
zq:function zq(a){this.a=a},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4(a,b,c,d){if(a<0)A.t(A.aZ("Offset may not be negative, was "+a+"."))
else if(c<0)A.t(A.aZ("Line may not be negative, was "+c+"."))
else if(b<0)A.t(A.aZ("Column may not be negative, was "+b+"."))
return new A.cr(d,a,c,b)},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n5:function n5(){},
n7:function n7(){},
J5(a,b,c){return new A.h3(c,a,b)},
n8:function n8(){},
h3:function h3(a,b,c){this.c=a
this.a=b
this.b=c},
h4:function h4(){},
wN(a,b,c,d){var s=new A.da(d,a,b,c)
s.oB(a,b,c)
if(!B.a.F(d,c))A.t(A.Q('The context line "'+d+'" must contain "'+c+'".',null))
if(A.Bd(d,c,a.gaq())==null)A.t(A.Q('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
da:function da(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
J9(a){var s
A:{if(18===a){s=B.dm
break A}if(23===a){s=B.dn
break A}if(9===a){s=B.dp
break A}s=null
break A}return s},
jn:function jn(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
J8(a,b,c,d,e,f,g){return new A.c8(d,b,c,e,f,a,g)},
c8:function c8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wS:function wS(){},
kH:function kH(a){this.a=a},
KN(a,b,c){var s,r,q,p,o,n=new A.nO(c,A.af(c.b,null,!1,t.X))
try{A.Fu(a,b.$1(n))}catch(r){s=A.F(r)
q=B.e.v(A.ir(s))
p=a.a
o=p.cB(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
Fu(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.ai(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EF(b).l(0)))
break A}if(b instanceof A.aJ){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Dv(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bH(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EF(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cB(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cB(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.aq(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.Fu(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.t(A.az(b,"result","Unsupported type"))}return s},
r1:function r1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
ra:function ra(a){this.a=a},
r9:function r9(a){this.a=a},
rb:function rb(a){this.a=a},
r7:function r7(a){this.a=a},
r6:function r6(a){this.a=a},
r8:function r8(a){this.a=a},
r3:function r3(a){this.a=a},
r2:function r2(a){this.a=a},
r4:function r4(a){this.a=a},
rc:function rc(a){this.a=a},
r5:function r5(a,b){this.a=a
this.b=b},
nO:function nO(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.r=null
_.$ti=e},
A5:function A5(a,b){this.a=a
this.b=b},
A6:function A6(a,b,c){this.a=a
this.b=b
this.c=c},
A7:function A7(a,b,c){this.a=a
this.b=b
this.c=c},
wO:function wO(){},
h6:function h6(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
C2(a,b){var s=$.pj()
return new A.lW(A.u(t.N,t.a_),s,a)},
lW:function lW(a,b,c){this.d=a
this.b=b
this.a=c},
oo:function oo(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
MP(a){var s=J.Hp(new v.G.URL(a,"file:///").pathname,"/")
return new A.al(s,new A.Bt(),A.a_(s).i("al<1>"))},
Bt:function Bt(){},
qH:function qH(){},
mS:function mS(a,b,c){this.d=a
this.a=b
this.c=c},
c7:function c7(a,b){this.a=a
this.b=b},
zP:function zP(a){this.a=a
this.b=-1},
oE:function oE(){},
oF:function oF(){},
oH:function oH(){},
oI:function oI(){},
vh:function vh(a,b){this.a=a
this.b=b},
IU(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bA(r,"step")}return s},
eg:function eg(){},
bO:function bO(a){this.a=a},
lh:function lh(a){this.a=a},
hj(a){return new A.de(a)},
Dt(a,b){var s,r,q,p
if(b==null)b=$.pj()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cI(256)
r&2&&A.H(a)
a[q]=p}},
de:function de(a){this.a=a},
jm:function jm(a){this.a=a},
b4:function b4(){},
kX:function kX(){},
kW:function kW(){},
MV(a,b){var s=null,r=new A.er(t.kk)
return A.pi(a,new A.jB(s,s,s,s,s,s,s,s,new A.BD(new A.BC(r,A.AM(new A.BE(r)))),s,s,s,s),s,b)},
eL:function eL(a){var _=this
_.d=a
_.c=_.b=_.a=null},
BE:function BE(a){this.a=a},
BC:function BC(a,b){this.a=a
this.b=b},
BD:function BD(a){this.a=a},
xL:function xL(a){this.a=a},
xG:function xG(a,b,c){this.a=a
this.b=b
this.c=c},
xN:function xN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xM:function xM(a,b,c){this.b=a
this.c=b
this.d=c},
dT:function dT(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
bX(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.F(r)
if(q instanceof A.de){s=q
return s.a}else return 1}},
lk:function lk(a){this.b=this.a=$
this.d=a},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qK:function qK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qP:function qP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qR:function qR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qT:function qT(a,b){this.a=a
this.b=b},
qM:function qM(a){this.a=a},
qS:function qS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qX:function qX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qV:function qV(a,b){this.a=a
this.b=b},
qU:function qU(a,b){this.a=a
this.b=b},
qO:function qO(a,b,c){this.a=a
this.b=b
this.c=c},
qQ:function qQ(a,b){this.a=a
this.b=b},
qW:function qW(a,b){this.a=a
this.b=b},
qL:function qL(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b){this.a=a
this.$ti=b},
px:function px(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pz:function pz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
py:function py(a,b,c){this.a=a
this.b=b
this.c=c},
cD(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bp(a,"success",new A.qk(r,a,b),!1,q)
A.bp(a,"error",new A.ql(r,a),!1,q)
return s},
HK(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bp(a,"success",new A.qp(r,a,b),!1,q)
A.bp(a,"error",new A.qq(r,a),!1,q)
A.bp(a,"blocked",new A.qr(r),!1,q)
return s},
eP:function eP(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
yT:function yT(a,b){this.a=a
this.b=b},
yU:function yU(a,b){this.a=a
this.b=b},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a,b){this.a=a
this.b=b},
qp:function qp(a,b,c){this.a=a
this.b=b
this.c=c},
qq:function qq(a,b){this.a=a
this.b=b},
qr:function qr(a){this.a=a},
i4(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
DP(a,b,c){var s=a.read(b,c)
return s},
DQ(a,b,c){var s=a.write(b,c)
return s},
BZ(a,b){return A.a5(a.removeEntry(b,{recursive:!1}),t.X)},
DO(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.t(A.Q("Target object does not implement the async iterable interface",null))
return new A.eT(new A.rF(),new A.ib(a,s),s.i("eT<aa.T,L>"))},
rF:function rF(){},
xH:function xH(a){this.a=a},
xI:function xI(a){this.a=a},
xK(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$xK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a5(p.fetch(new p.URL(a,A.bf(p.location).href),null),t.m),$async$xK)
case 3:q=o.xJ(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xK,r)},
xJ(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$xJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lk(A.u(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.xH(p).i9(a),$async$xJ)
case 3:q=new o.hk(new n.xL(m.Jm(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xJ,r)},
hk:function hk(a){this.a=a},
JP(a){var s=new A.jT(a,new A.an(new A.w($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.oF(a)
return s},
lY(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$lY=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.pA(a)
n=A.C2("dart-memory",null)
m=$.pj()
l=new A.dA(o,n,new A.er(t.p3),A.aN(p),A.u(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.ic(),$async$lY)
case 3:s=4
return A.a(l.eP(),$async$lY)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lY,r)},
pA:function pA(a){this.a=null
this.b=a},
pD:function pD(a){this.a=a},
pC:function pC(a,b,c){this.a=a
this.b=b
this.c=c},
pB:function pB(a){this.a=a},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
zt:function zt(a){this.a=a},
zu:function zu(a){this.a=a},
zs:function zs(a){this.a=a},
zv:function zv(a,b,c){this.a=a
this.b=b
this.c=c},
zx:function zx(a,b){this.a=a
this.b=b},
zw:function zw(a,b){this.a=a
this.b=b},
z4:function z4(a,b,c){this.a=a
this.b=b
this.c=c},
z5:function z5(a,b){this.a=a
this.b=b},
ox:function ox(a,b){this.a=a
this.b=b},
dA:function dA(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
tm:function tm(a,b,c){this.a=a
this.b=b
this.c=c},
tn:function tn(){},
tl:function tl(a,b){this.a=a
this.b=b},
op:function op(a,b,c){this.a=a
this.b=b
this.c=c},
zr:function zr(a,b){this.a=a
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
hv:function hv(a,b,c){var _=this
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
En(a){var s=A.C2("dart-memory",null),r=$.pj()
return new A.h2(s,r,a)},
n0(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$n0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.i4()
if(j==null)throw A.b(A.hj(1))
p=t.m
s=3
return A.a(A.a5(j.getDirectory(),p),$async$n0)
case 3:o=d
n=A.MP(a),m=J.E(n.a),n=new A.cV(m,n.b,n.$ti.i("cV<1>")),l=null
case 4:if(!n.k()){s=6
break}s=7
return A.a(A.a5(o.getDirectoryHandle(m.gn(),{create:!0}),p),$async$n0)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.a4(l,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n0,r)},
n1(a){var s=0,r=A.h(t.m),q
var $async$n1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n0(a,!0),$async$n1)
case 3:q=c.b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$n1,r)},
wK(a,b){var s=0,r=A.h(t.g_),q,p
var $async$wK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.i4()==null)throw A.b(A.hj(1))
p=A
s=3
return A.a(A.n1(a),$async$wK)
case 3:q=p.wJ(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wK,r)},
wJ(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$wJ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.En(c)
s=3
return A.a(p.cK(a,!1),$async$wJ)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wJ,r)},
fw:function fw(a,b,c){this.c=a
this.a=b
this.b=c},
h2:function h2(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
wL:function wL(a,b){this.a=a
this.b=b},
oN:function oN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
zL:function zL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Jm(a,b){var s=A.bf(a.exports.memory)
b.b!==$&&A.cg()
b.b=s
s=new A.xB(s,b,a.exports)
s.oC(a,b)
return s},
nY(a,b){var s,r=A.bS(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dU(a,b,c){var s=a.buffer
return B.o.f_(A.bS(s,b,c==null?A.nY(a,b):c))},
Cz(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.o.f_(A.bS(s,b,c==null?A.nY(a,b):c))},
ED(a,b,c){var s=new Uint8Array(c)
B.f.cP(s,0,A.bS(a.buffer,b,c))
return s},
xB:function xB(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
xC:function xC(a){this.a=a},
xD:function xD(a){this.a=a},
xE:function xE(a){this.a=a},
xF:function xF(a){this.a=a},
B3(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$B3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kB()
s=l!=null?3:5
break
case 3:p=A.Lk()
s=6
return A.a(A.jy(l,p,null,null,!1),$async$B3)
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
return A.f($async$B3,r)},
Lk(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bt(97+$.H9().cI(26))
return r.charCodeAt(0)==0?r:r},
HA(a){return new A.ii(a)},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
vT:function vT(){},
vX:function vX(a){this.a=a},
vY:function vY(a){this.a=a},
vW:function vW(a){this.a=a},
vV:function vV(a){this.a=a},
vU:function vU(a){this.a=a},
ii:function ii(a){this.a=a},
r_:function r_(){},
lg:function lg(a){this.a=a},
qI:function qI(a){this.a=a},
eJ:function eJ(){},
lA(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n1(a),$async$lA)
case 3:p=e
o=A.En(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cK(p,!0),$async$lA)
case 6:case 5:q=new A.lz(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lA,r)},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
rX:function rX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jy(a,b,c,d,e){var s,r,q={},p=new A.w($.C,t.nI),o=new A.an(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.C_(A.a5(a.request(b,s,A.cY(new A.xR(q,o))),r),new A.xS(q,d,o),r,t.K)
return p},
xR:function xR(a,b){this.a=a
this.b=b},
xS:function xS(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){this.a=a},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
re:function re(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rd:function rd(a,b){this.a=a
this.b=b},
rf:function rf(a){this.a=a},
j_:function j_(a){this.a=!1
this.b=a},
v9:function v9(a,b){this.a=a
this.b=b},
v8:function v8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v7:function v7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
HH(a){var s,r,q,p,o=A.j([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bN(n,A.a_(n).i("bN<1,l>"))
for(s=J.M(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a4(A.fq(B.cQ,s.h(m,q)),s.h(m,q+1)))}s=A.hR(a.b)
q=A.hR(a.c)
p=A.hR(a.d)
return new A.eh(o,s,q,A.hR(a.g),p)},
eh:function eh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
IX(a){var s
if(J.x(a.t,"errorResponse")){s=A.HW(a)
if(s!=null&&s instanceof A.dq)return s
else return new A.fX(a.e)}else return new A.fX("Did not respond with expected type, got "+A.r(a))},
HW(a){var s=a.s,r=s==null?null:A.ao(s)
A:{if(0===r){s=A.HX(t.c.a(a.r))
break A}if(1===r){s=B.ao
break A}s=null
break A}return s},
HX(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.y("Pattern matching error"))
n=new A.rv()
l=A.ao(A.eZ(l))
A.D(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ei(i,h,A.bS(h,0,o))}else p=o
n=n.$1(k)
A.Fk(g)
return new A.c8(s,r,l,g==null?o:A.ao(g),n,q,p)},
HY(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Jg(l)
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
IY(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.rX(a2,512,"transfer" in a2)
a5.mq(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.IU(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.q1(l)
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
d=A.nY(r,f)
f=new Uint8Array(e,f,d)
c=new A.dj(!1).cW(f,0,a,!0)
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
l=A.nY(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dj(!1).cW(a0,0,a,!0)}return A.Gj(!1,b,0,0,a1,a,a3.wJ(0))},
MD(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
rv:function rv(){},
Gj(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
hZ(a){var s,r,q,p,o=v.G,n=new o.Array()
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
Mj(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mg:function mg(a,b,c){this.a=a
this.b=b
this.$ti=c},
wz:function wz(){},
I0(a){var s,r
for(s=0;s<5;++s){r=B.cD[s]
if(r.c===a)return r}throw A.b(A.Q("Unknown FS implementation: "+a,null))},
Jf(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aJ
break A}q=A.ai(a)
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
break A}q=A.bH(a)
k=q?a:j
if(q){s=k
r=B.bo
break A}throw A.b(A.Q("Unsupported value: "+A.r(a),j))}return new A.a4(r,s)},
Jg(a){var s,r,q,p,o,n
if(a instanceof A.ei)return new A.a4(a.a,a.b)
s=[]
r=J.M(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.Jf(r.h(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.a4(s,t.a.a(B.f.gaa(p)))},
dw:function dw(a,b,c){this.c=a
this.a=b
this.b=c},
cv:function cv(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
pc(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$pc=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.bf(i.indexedDB)
i=$.kB()
i=i==null?null:A.jy(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bv(i,t.b3),$async$pc)
case 3:l=b
p=5
s=8
return A.a(A.HJ(m.open("drift_mock_db"),t.m),$async$pc)
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
return A.f($async$pc,r)},
B_(a){return A.M2(a)},
M2(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$B_=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.bf(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cY(new A.B0(j,m))
s=7
return A.a(A.HI(m,t.m),$async$B_)
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
return A.f($async$B_,r)},
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
case 7:l=A.j([],t.s)
j=new A.cy(A.cz(A.DO(m),"stream",t.K),t.hT)
p=9
case 12:s=14
return A.a(j.k(),$async$i1)
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
return A.a(j.D(),$async$i1)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i1,r)},
HI(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bp(a,"success",new A.qi(r,a,b),!1,q)
A.bp(a,"error",new A.qj(r,a),!1,q)
return s},
HJ(a,b){var s=new A.w($.C,b.i("w<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bp(a,"success",new A.qm(r,a,b),!1,q)
A.bp(a,"error",new A.qn(r,a),!1,q)
A.bp(a,"blocked",new A.qo(r,a),!1,q)
return s},
B0:function B0(a,b){this.a=a
this.b=b},
qi:function qi(a,b,c){this.a=a
this.b=b
this.c=c},
qj:function qj(a,b){this.a=a
this.b=b},
qm:function qm(a,b,c){this.a=a
this.b=b
this.c=c},
qn:function qn(a,b){this.a=a
this.b=b},
qo:function qo(a,b){this.a=a
this.b=b},
vP:function vP(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a},
dq:function dq(a){this.a=a},
KM(a){var s=a.gmM()
return new A.eT(new A.AL(),s,A.n(s).i("eT<aa.T,L>"))},
EP(a,b){var s=A.j([],t.kG),r=b==null?a.b:b
return new A.ht(a,r,new A.k6(),new A.k6(),new A.k6(),s)},
JG(a,b,c){var s=t.S
s=new A.hr(c,A.j([],t.fV),a.a,new A.aI(new A.w($.C,t.D),t.h),A.u(s,t.br),A.u(s,t.m))
s.oz(a)
s.oE(a,b,c)
return s},
Fv(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
e4(){var s=0,r=A.h(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$e4=A.c(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.i4()
if(b==null){q=B.aB
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.kB()
d=d==null?null:A.jy(d,"_drift_feature_detection",null,null,!1)
s=7
return A.a(t.fP.b(d)?d:A.bv(d,t.b3),$async$e4)
case 7:j=a1
d=t.m
s=8
return A.a(A.a5(b.getDirectory(),d),$async$e4)
case 8:m=a1
s=9
return A.a(A.a5(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$e4)
case 9:l=a1
s=10
return A.a(A.kq(l),$async$e4)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.C5(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a5(A.bf(e),t.X),$async$e4)
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
return A.a(A.BZ(m,"_drift_feature_detection"),$async$e4)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e4,r)},
kq(a){return A.LC(a)},
LC(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
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
AL:function AL(){},
k6:function k6(){this.a=null},
ht:function ht(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
yM:function yM(a){this.a=a},
yQ:function yQ(a,b){this.a=a
this.b=b},
yN:function yN(a,b){this.a=a
this.b=b},
yO:function yO(a){this.a=a},
yP:function yP(a,b){this.a=a
this.b=b},
hr:function hr(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
yw:function yw(a){this.a=a},
yB:function yB(a,b){this.a=a
this.b=b},
yE:function yE(a,b,c){this.a=a
this.b=b
this.c=c},
yy:function yy(a,b){this.a=a
this.b=b},
yx:function yx(a,b){this.a=a
this.b=b},
yD:function yD(a,b){this.a=a
this.b=b},
yC:function yC(a,b){this.a=a
this.b=b},
yG:function yG(a,b){this.a=a
this.b=b},
yF:function yF(a,b){this.a=a
this.b=b},
yz:function yz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yA:function yA(a,b){this.a=a
this.b=b},
yv:function yv(a){this.a=a},
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
ri:function ri(a){this.a=a},
rh:function rh(a){this.a=a},
rg:function rg(a,b){this.a=a
this.b=b},
y_:function y_(a,b,c,d,e,f){var _=this
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
y0:function y0(a,b){this.a=a
this.b=b},
y1:function y1(a,b){this.a=a
this.b=b},
y2:function y2(a){this.a=a},
Jo(){var s=v.G
if(A.Ie(s,"DedicatedWorkerGlobalScope"))return new A.of(s,new A.og(s.location.href))
else return new A.oL(s,new A.og(s.location.href))},
ki:function ki(){},
of:function of(a,b){this.a=a
this.b=b},
oL:function oL(a,b){this.a=a
this.b=b},
A_:function A_(a){this.a=a},
A0:function A0(a,b,c){this.a=a
this.b=b
this.c=c},
zZ:function zZ(a){this.a=a},
zX:function zX(a){this.a=a},
zY:function zY(a){this.a=a},
og:function og(a){this.a=a},
z_:function z_(a){this.a=a},
nf:function nf(a,b,c){this.c=a
this.a=b
this.b=c},
x2:function x2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hg:function hg(){},
oq:function oq(){},
cw:function cw(a,b){this.a=a
this.b=b},
bp(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.FW(new A.z2(c),t.m)
s=s==null?null:A.cY(s)}s=new A.jP(a,b,s,!1,e.i("jP<0>"))
s.jA()
return s},
FW(a,b){var s=$.C
if(s===B.i)return a
return s.hC(a,b)},
BV:function BV(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b,c,d){var _=this
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
z2:function z2(a){this.a=a},
z3:function z3(a){this.a=a},
Gz(a){return v.mangledGlobalNames[a]},
Gn(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Ih(a,b){return b in a},
C5(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Mt(a,b,c,d){var s,r,q,p,o,n=A.u(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.j([],s)
n.j(0,p,o)
p=o}else p=o
J.aL(p,q)}return n},
C3(a){var s=J.E(a.a)
if(new A.cV(s,a.b,a.$ti.i("cV<1>")).k())return s.gn()
return null},
AX(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.H(a)
a[r]=s&255
b=s/256|0;--r}},
N5(a){return a},
Gx(a){if(a instanceof A.ds)return a
return new A.ds(a)},
N6(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.F(p)
if(q instanceof A.h3){s=q
throw A.b(A.J5("Invalid "+a+": "+s.a,s.b,s.gfO()))}else if(t.Y.b(q)){r=q
throw A.b(A.a8("Invalid "+a+' "'+b+'": '+r.gke(),r.gfO(),r.gar()))}else throw p}},
N1(a,b,c,d){var s=A.z(a,"'","\\'"),r="("+d+"="+("'"+s+"'")+" && id~"+("'"+A.z(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.z(c,"'","\\'")+"'")+")"},
i_(){var s,r,q,p=$.Ha(),o=$.H3()+1
$.KS=o
s=B.a.ig(B.c.kv(o,36),8,"0")
r=J.DX(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cI(36)]
return B.a.A(s+B.b.ed(r),0,15)},
MR(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
if(a.J(q))p.j(0,q,a.h(0,q))}return p},
MS(a,b){var s,r,q=A.j([],t.d)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.push(A.MR(a[r],b))
return q},
ph(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.F(q)
if(r instanceof A.cO)throw q
else{s=r
r=A.h7("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
B6(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.j
try{s=B.h.aw(a,null)
if(t.f.b(s)){q=A.bb(s,t.N,t.X)
return q}return B.j}catch(p){r=A.F(p)
q=A.h7("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
G7(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.bf
try{s=B.h.aw(a,null)
if(t.j.b(s)){q=J.po(s,t.N)
q=q.fC(q)
return q}return B.bf}catch(p){r=A.F(p)
q=A.h7("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
G6(a){var s,r,q,p,o=null
if(a==null)return B.q
A.D(a)
if(a.length===0)return B.q
s=B.h.aw(a,o)
if(!t.j.b(s))throw A.b(A.a8("expected a JSON array, got "+J.c_(s).l(0),o,o))
r=A.j([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.t(A.a8("dirty-field member is "+J.c_(p).l(0)+", expected String",o,o)))}return r},
f4(a){var s,r=J.M(a)
if(r.gE(a))return null
s=J.bZ(r.gG(a).gaX())
if(A.ai(s))return s
if(typeof s=="string")return A.jb(s,null)
return null},
Gb(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.dv(B.x.wE(r*J.Hi(d.$1(o),0.5,1.5)),0,0)},
MM(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.ce)
s=a.h(0,"type")
if(!J.x(s,"aes-gcm"))throw A.b(A.a8("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.aq(r)!==32)throw A.b(B.cd)
q=new Uint8Array(32)
for(p=J.M(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.ai(n)||n<0||n>255)throw A.b(A.a8("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.Dr(q)
p=$.BK()
if($.kx()!==B.P)A.t(A.y("BigEndian systems are unsupported"))
return new A.ps(new A.li(12,32,m),new A.jk(new A.n_(A.Dr(q)),m),p)},
MI(){var s=A.Jo(),r=t.cj
new A.y_(s,B.bN,A.j([],t.az),A.u(t.S,t.lp),new A.j_(A.C9(r)),new A.j_(A.C9(r))).eb()},
G5(){var s,r,q,p,o=null
try{o=A.Cy()}catch(s){if(t.mA.b(A.F(s))){r=$.AJ
if(r!=null)return r
throw s}else throw s}if(J.x(o,$.Fr)){r=$.AJ
r.toString
return r}$.Fr=o
if($.Dd()===$.kz())r=$.AJ=o.bT(".").l(0)
else{q=o.ku()
p=q.length-1
r=$.AJ=p===0?q:B.a.A(q,0,p)}return r},
Gf(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
G8(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Gf(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
MC(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gG(0)
for(r=A.cu(a,1,null,a.$ti.i("Z.E")),q=r.$ti,r=new A.at(r,r.gm(0),q.i("at<Z.E>")),q=q.i("Z.E");r.k();){p=r.d
if(!J.x(p==null?q.a(p):p,s))return!1}return!0},
MU(a,b){var s=B.b.bO(a,null)
if(s<0)throw A.b(A.Q(A.r(a)+" contains no null elements.",null))
a[s]=b},
Gr(a,b){var s=B.b.bO(a,b)
if(s<0)throw A.b(A.Q(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Me(a,b){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
Bd(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.ca(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bO(a,b)
while(r!==-1){q=r===0?0:B.a.i7(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.ca(a,b,r+1)}return null},
D0(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c8(A.dU(r.b,p.sqlite3_errmsg(q),null),A.dU(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
BF(a,b,c,d,e){throw A.b(A.D0(a.a,a.b,b,c,d,e))},
Dv(a){if(a.a0(0,$.GC())<0||a.a0(0,$.GB())>0)throw A.b(A.DL("BigInt value exceeds the range of 64 bits"))
return a},
IV(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ao(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dU(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.ED(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
DS(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bt("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cI(61)))
return s.charCodeAt(0)==0?s:s},
ww(a){var s=0,r=A.h(t.lo),q
var $async$ww=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(a.arrayBuffer(),t.a),$async$ww)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ww,r)}},B={}
var w=[A,J,B]
var $={}
A.C7.prototype={}
J.m_.prototype={
R(a,b){return a===b},
gI(a){return A.ez(a)},
l(a){return"Instance of '"+A.mE(a)+"'"},
gaj(a){return A.bJ(A.CT(this))}}
J.m1.prototype={
l(a){return String(a)},
gI(a){return a?519018:218159},
gaj(a){return A.bJ(t.y)},
$iak:1,
$iP:1}
J.iH.prototype={
R(a,b){return null==b},
l(a){return"null"},
gI(a){return 0},
gaj(a){return A.bJ(t.P)},
$iak:1,
$iW:1}
J.aF.prototype={$iL:1}
J.dD.prototype={
gI(a){return 0},
gaj(a){return B.dI},
l(a){return String(a)}}
J.mB.prototype={}
J.dS.prototype={}
J.bP.prototype={
l(a){var s=a[$.GF()]
if(s==null)s=a[$.f7()]
if(s==null)return this.on(a)
return"JavaScript function for "+J.a0(s)}}
J.br.prototype={
gI(a){return 0},
l(a){return String(a)}}
J.fB.prototype={
gI(a){return 0},
l(a){return String(a)}}
J.B.prototype={
hD(a,b){return new A.bN(a,A.a_(a).i("@<1>").V(b).i("bN<1,2>"))},
t(a,b){a.$flags&1&&A.H(a,29)
a.push(b)},
iq(a,b){var s
a.$flags&1&&A.H(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.wv(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.H(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.wv(b,null))
a.splice(b,0,c)},
k7(a,b,c){var s,r
a.$flags&1&&A.H(a,"insertAll",2)
A.Ek(b,0,a.length,"index")
if(!t.O.b(c))c=J.Hs(c)
s=J.aq(c)
a.length=a.length+s
r=b+s
this.ah(a,r,a.length,a,b)
this.av(a,b,r,c)},
ko(a){a.$flags&1&&A.H(a,"removeLast",1)
if(a.length===0)throw A.b(A.Ba(a,-1))
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
dt(a,b){return new A.al(a,b,A.a_(a).i("al<1>"))},
C(a,b){var s
a.$flags&1&&A.H(a,"addAll",2)
if(Array.isArray(b)){this.oL(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
oL(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.aA(a))
for(s=0;s<r;++s)a.push(b[s])},
am(a){a.$flags&1&&A.H(a,"clear","clear")
a.length=0},
ce(a,b,c){return new A.X(a,b,A.a_(a).i("@<1>").V(c).i("X<1,2>"))},
B(a,b){var s,r=A.af(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
ed(a){return this.B(a,"")},
cL(a,b){return A.cu(a,0,A.cz(b,"count",t.S),A.a_(a).c)},
bi(a,b){return A.cu(a,b,null,A.a_(a).c)},
f9(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.aA(a))}if(c!=null)return c.$0()
throw A.b(A.aE())},
mJ(a,b){return this.f9(a,b,null)},
a8(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.ax(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.ax(c,b,a.length,"end",null))
if(b===c)return A.j([],A.a_(a))
return A.j(a.slice(b,c),A.a_(a))},
b5(a,b){return this.T(a,b,null)},
fK(a,b,c){A.bd(b,c,a.length)
return A.cu(a,b,c,A.a_(a).c)},
gG(a){if(a.length>0)return a[0]
throw A.b(A.aE())},
ga1(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aE())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aE())
throw A.b(A.iE())},
kp(a,b,c){a.$flags&1&&A.H(a,18)
A.bd(b,c,a.length)
a.splice(b,c-b)},
ah(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.H(a,5)
A.bd(b,c,a.length)
s=c-b
if(s===0)return
A.bc(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.pr(d,e).cM(0,!1)
q=0}p=J.M(r)
if(q+s>p.gm(r))throw A.b(A.DV())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
bM(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.aA(a))}return!1},
cD(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.aA(a))}return!0},
ck(a,b){var s,r,q,p,o
a.$flags&2&&A.H(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.KW()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a_(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e5(b,2))
if(p>0)this.rw(a,p)},
aE(a){return this.ck(a,null)},
rw(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bO(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.x(a[s],b))return s
return-1},
dh(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.x(a[s],b))return s
return-1},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.x(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gW(a){return a.length!==0},
l(a){return A.tt(a,"[","]")},
cM(a,b){var s=A.j(a.slice(0),A.a_(a))
return s},
er(a){return this.cM(a,!0)},
gu(a){return new J.fb(a,a.length,A.a_(a).i("fb<1>"))},
gI(a){return A.ez(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.H(a,"set length","change the length of")
if(b<0)throw A.b(A.ax(b,0,null,"newLength",null))
if(b>a.length)A.a_(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.Ba(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
if(!(b>=0&&b<a.length))throw A.b(A.Ba(a,b))
a[b]=c},
ky(a,b){return new A.bF(a,b.i("bF<0>"))},
mN(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gaj(a){return A.bJ(A.a_(a))},
$iba:1,
$iJ:1,
$io:1,
$ip:1}
J.m0.prototype={
wP(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mE(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.tu.prototype={}
J.fb.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ep.prototype={
a0(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gkb(b)
if(this.gkb(a)===s)return 0
if(this.gkb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gkb(a){return a===0?1/a<0:a<0},
is(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
tP(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
v4(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
wE(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bN(a,b,c){if(this.a0(b,c)>0)throw A.b(A.f2(b))
if(this.a0(a,b)<0)return b
if(this.a0(a,c)>0)return c
return a},
kv(a,b){var s,r,q,p
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
fH(a,b){return a+b},
ak(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iK(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.m6(a,b)},
N(a,b){return(a|0)===a?a/b|0:this.m6(a,b)},
m6(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bC(a,b){if(b<0)throw A.b(A.f2(b))
return b>31?0:a<<b>>>0},
rU(a,b){return b>31?0:a<<b>>>0},
dA(a,b){var s
if(b<0)throw A.b(A.f2(b))
if(a>0)s=this.jy(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
af(a,b){var s
if(a>0)s=this.jy(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
m4(a,b){if(0>b)throw A.b(A.f2(b))
return this.jy(a,b)},
jy(a,b){return b>31?0:a>>>b},
nZ(a,b){return a>b},
gaj(a){return A.bJ(t.o)},
$iaw:1,
$iab:1,
$iaU:1}
J.iG.prototype={
gmr(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.N(q,4294967296)
s+=32}return s-Math.clz32(q)},
gaj(a){return A.bJ(t.S)},
$iak:1,
$ii:1}
J.m2.prototype={
gaj(a){return A.bJ(t.W)},
$iak:1}
J.dB.prototype={
jH(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.oP(b,a,c)},
hy(a,b){return this.jH(a,b,0)},
eh(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.ha(c,a)},
c8(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ae(a,r-s)},
kr(a,b,c){A.Ek(0,0,a.length,"startIndex")
return A.N0(a,b,c,0)},
cQ(a,b){var s
if(typeof b=="string")return A.j(a.split(b),t.s)
else{if(b instanceof A.eq){s=b.e
s=!(s==null?b.e=b.pl():s)}else s=!1
if(s)return A.j(a.split(b.b),t.s)
else return this.py(a,b)}},
dm(a,b,c,d){var s=A.bd(b,c,a.length)
return A.Gv(a,b,s,d)},
py(a,b){var s,r,q,p,o,n,m=A.j([],t.s)
for(s=J.BM(b,a),s=s.gu(s),r=0,q=1;s.k();){p=s.gn()
o=p.gP()
n=p.gM()
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
ci(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Ii(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.E0(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
wN(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.E0(r,s))},
bg(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bP)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ig(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bg(c,s)+a},
w8(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bg(" ",s)},
ca(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bO(a,b){return this.ca(a,b,0)},
i7(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.ax(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dh(a,b){return this.i7(a,b,null)},
F(a,b){return A.MY(a,b,0)},
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
gaj(a){return A.bJ(t.N)},
gm(a){return a.length},
$iba:1,
$iak:1,
$iaw:1,
$il:1}
A.yS.prototype={
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
kt(){var s,r=this
if(r.a===0)return $.pl()
s=J.bL(B.f.gaa(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.pl()
return s},
gm(a){return this.a}}
A.ys.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b7(b))
this.b.push(s)
this.a=this.a+s.length},
kt(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.pl()
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
A.dV.prototype={
gu(a){return new A.l1(J.E(this.gba()),A.n(this).i("l1<1,2>"))},
gm(a){return J.aq(this.gba())},
gE(a){return J.by(this.gba())},
gW(a){return J.e8(this.gba())},
bi(a,b){var s=A.n(this)
return A.fd(J.pr(this.gba(),b),s.c,s.y[1])},
cL(a,b){var s=A.n(this)
return A.fd(J.BP(this.gba(),b),s.c,s.y[1])},
a8(a,b){return A.n(this).y[1].a(J.pp(this.gba(),b))},
gG(a){return A.n(this).y[1].a(J.bZ(this.gba()))},
ga1(a){return A.n(this).y[1].a(J.pq(this.gba()))},
gap(a){return A.n(this).y[1].a(J.BO(this.gba()))},
F(a,b){return J.BN(this.gba(),b)},
l(a){return J.a0(this.gba())}}
A.l1.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ec.prototype={
gba(){return this.a}}
A.jM.prototype={$iJ:1}
A.jJ.prototype={
h(a,b){return this.$ti.y[1].a(J.R(this.a,b))},
j(a,b,c){J.bY(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.Hn(this.a,b)},
t(a,b){J.aL(this.a,this.$ti.c.a(b))},
ck(a,b){var s=b==null?null:new A.yt(this,b)
J.Do(this.a,s)},
fK(a,b,c){var s=this.$ti
return A.fd(J.Hk(this.a,b,c),s.c,s.y[1])},
ah(a,b,c,d,e){var s=this.$ti
J.Ho(this.a,b,c,A.fd(d,s.y[1],s.c),e)},
av(a,b,c,d){return this.ah(0,b,c,d,0)},
$iJ:1,
$ip:1}
A.yt.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bN.prototype={
hD(a,b){return new A.bN(this.a,this.$ti.i("@<1>").V(b).i("bN<1,2>"))},
gba(){return this.a}}
A.ed.prototype={
c5(a,b,c){return new A.ed(this.a,this.$ti.i("@<1,2>").V(b).V(c).i("ed<1,2,3,4>"))},
J(a){return this.a.J(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a7(a,b){this.a.a7(0,new A.pS(this,b))},
gK(){var s=this.$ti
return A.fd(this.a.gK(),s.c,s.y[2])},
gaX(){var s=this.$ti
return A.fd(this.a.gaX(),s.y[1],s.y[3])},
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gW(a){var s=this.a
return s.gW(s)},
gab(){var s=this.a.gab()
return s.ce(s,new A.pR(this),this.$ti.i("S<3,4>"))}}
A.pS.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.pR.prototype={
$1(a){var s=this.a.$ti
return new A.S(s.y[2].a(a.a),s.y[3].a(a.b),s.i("S<3,4>"))},
$S(){return this.a.$ti.i("S<3,4>(S<1,2>)")}}
A.dC.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mN.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.cj.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.Br.prototype={
$0(){return A.b9(null,t.H)},
$S:3}
A.wI.prototype={}
A.J.prototype={}
A.Z.prototype={
gu(a){var s=this
return new A.at(s,s.gm(s),A.n(s).i("at<Z.E>"))},
gE(a){return this.gm(this)===0},
gG(a){if(this.gm(this)===0)throw A.b(A.aE())
return this.a8(0,0)},
ga1(a){var s=this
if(s.gm(s)===0)throw A.b(A.aE())
return s.a8(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aE())
if(s.gm(s)>1)throw A.b(A.iE())
return s.a8(0,0)},
F(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.x(r.a8(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.aA(r))}return!1},
cD(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(!b.$1(r.a8(0,s)))return!1
if(q!==r.gm(r))throw A.b(A.aA(r))}return!0},
B(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.r(p.a8(0,0))
if(o!==p.gm(p))throw A.b(A.aA(p))
for(r=s,q=1;q<o;++q){r=r+b+A.r(p.a8(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.r(p.a8(0,q))
if(o!==p.gm(p))throw A.b(A.aA(p))}return r.charCodeAt(0)==0?r:r}},
ed(a){return this.B(0,"")},
dt(a,b){return this.oh(0,b)},
ce(a,b,c){return new A.X(this,b,A.n(this).i("@<Z.E>").V(c).i("X<1,2>"))},
wu(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aE())
s=q.a8(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a8(0,r))
if(p!==q.gm(q))throw A.b(A.aA(q))}return s},
bi(a,b){return A.cu(this,b,null,A.n(this).i("Z.E"))},
cL(a,b){return A.cu(this,0,A.cz(b,"count",t.S),A.n(this).i("Z.E"))}}
A.ct.prototype={
iL(a,b,c,d){var s,r=this.b
A.bc(r,"start")
s=this.c
if(s!=null){A.bc(s,"end")
if(r>s)throw A.b(A.ax(r,0,s,"start",null))}},
gpI(){var s=J.aq(this.a),r=this.c
if(r==null||r>s)return s
return r},
grY(){var s=J.aq(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.aq(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a8(a,b){var s=this,r=s.grY()+b
if(b<0||r>=s.gpI())throw A.b(A.lX(b,s.gm(0),s,null,"index"))
return J.pp(s.a,r)},
bi(a,b){var s,r,q=this
A.bc(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.el(q.$ti.i("el<1>"))
return A.cu(q.a,s,r,q.$ti.c)},
cL(a,b){var s,r,q,p=this
A.bc(b,"count")
s=p.c
r=p.b
if(s==null)return A.cu(p.a,r,B.c.fH(r,b),p.$ti.c)
else{q=B.c.fH(r,b)
if(s<q)return p
return A.cu(p.a,r,q,p.$ti.c)}},
cM(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.M(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.DY(0,n):J.C4(0,n)}r=A.af(s,m.a8(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a8(n,o+q)
if(m.gm(n)<l)throw A.b(A.aA(p))}return r},
er(a){return this.cM(0,!0)}}
A.at.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.M(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.aA(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a8(q,s);++r.c
return!0}}
A.cl.prototype={
gu(a){return new A.me(J.E(this.a),this.b,A.n(this).i("me<1,2>"))},
gm(a){return J.aq(this.a)},
gE(a){return J.by(this.a)},
gG(a){return this.b.$1(J.bZ(this.a))},
ga1(a){return this.b.$1(J.pq(this.a))},
gap(a){return this.b.$1(J.BO(this.a))},
a8(a,b){return this.b.$1(J.pp(this.a,b))}}
A.ek.prototype={$iJ:1}
A.me.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.aq(this.a)},
a8(a,b){return this.b.$1(J.pp(this.a,b))}}
A.al.prototype={
gu(a){return new A.cV(J.E(this.a),this.b,this.$ti.i("cV<1>"))},
ce(a,b,c){return new A.cl(this,b,this.$ti.i("@<1>").V(c).i("cl<1,2>"))}}
A.cV.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.iu.prototype={
gu(a){return new A.lw(J.E(this.a),this.b,B.aQ,this.$ti.i("lw<1,2>"))}}
A.lw.prototype={
gn(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
k(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.k();){q.d=null
if(s.k()){q.c=null
p=J.E(r.$1(s.gn()))
q.c=p}else return!1}q.d=q.c.gn()
return!0}}
A.eG.prototype={
gu(a){var s=this.a
return new A.nu(s.gu(s),this.b,A.n(this).i("nu<1>"))}}
A.iq.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.nZ(r,s))return s
return r},
$iJ:1}
A.nu.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.d9.prototype={
bi(a,b){A.kJ(b,"count")
A.bc(b,"count")
return new A.d9(this.a,this.b+b,A.n(this).i("d9<1>"))},
gu(a){var s=this.a
return new A.n2(s.gu(s),this.b,A.n(this).i("n2<1>"))}}
A.fp.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bi(a,b){A.kJ(b,"count")
A.bc(b,"count")
return new A.fp(this.a,this.b+b,this.$ti)},
$iJ:1}
A.n2.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.el.prototype={
gu(a){return B.aQ},
gE(a){return!0},
gm(a){return 0},
gG(a){throw A.b(A.aE())},
ga1(a){throw A.b(A.aE())},
gap(a){throw A.b(A.aE())},
a8(a,b){throw A.b(A.ax(b,0,0,"index",null))},
F(a,b){return!1},
cD(a,b){return!0},
dt(a,b){return this},
ce(a,b,c){return new A.el(c.i("el<0>"))},
bi(a,b){A.bc(b,"count")
return this},
cL(a,b){A.bc(b,"count")
return this},
cM(a,b){var s=J.C4(0,this.$ti.c)
return s},
fC(a){return A.mc(this.$ti.c)}}
A.lt.prototype={
k(){return!1},
gn(){throw A.b(A.aE())}}
A.bF.prototype={
gu(a){return new A.nU(J.E(this.a),this.$ti.i("nU<1>"))}}
A.nU.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.ix.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.nG.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
ck(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ah(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
av(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.hh.prototype={}
A.bT.prototype={
gm(a){return J.aq(this.a)},
a8(a,b){var s=this.a,r=J.M(s)
return r.a8(s,r.gm(s)-1-b)}}
A.jt.prototype={
gI(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gI(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
R(a,b){if(b==null)return!1
return b instanceof A.jt&&this.a===b.a}}
A.kj.prototype={}
A.a4.prototype={$r:"+(1,2)",$s:1}
A.k1.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:2}
A.k2.prototype={$r:"+controller,sync(1,2)",$s:3}
A.hG.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.oC.prototype={$r:"+result,resultCode(1,2)",$s:6}
A.eV.prototype={$r:"+(1,2,3)",$s:7}
A.eW.prototype={$r:"+(1,2,3,4)",$s:8}
A.oD.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:9}
A.il.prototype={}
A.fl.prototype={
c5(a,b,c){var s=A.n(this)
return A.E4(this,s.c,s.y[1],b,c)},
gE(a){return this.gm(this)===0},
gW(a){return this.gm(this)!==0},
l(a){return A.uL(this)},
j(a,b,c){A.HM()},
gab(){return new A.hL(this.uR(),A.n(this).i("hL<S<1,2>>"))},
uR(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gab(a,b,c){if(b===1){p.push(c)
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
this.a7(0,new A.qA(this,b,s))
return s},
$iI:1}
A.qA.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aV.prototype={
gm(a){return this.b.length},
glD(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
J(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.J(b))return null
return this.b[this.a[b]]},
a7(a,b){var s,r,q=this.glD(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.eS(this.glD(),this.$ti.i("eS<1>"))},
gaX(){return new A.eS(this.b,this.$ti.i("eS<2>"))}}
A.eS.prototype={
gm(a){return this.a.length},
gE(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
gu(a){var s=this.a
return new A.hB(s,s.length,this.$ti.i("hB<1>"))}}
A.hB.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.iz.prototype={
dJ(){var s=this,r=s.$map
if(r==null){r=new A.iI(s.$ti.i("iI<1,2>"))
A.Gc(s.a,r)
s.$map=r}return r},
J(a){return this.dJ().J(a)},
h(a,b){return this.dJ().h(0,b)},
a7(a,b){this.dJ().a7(0,b)},
gK(){var s=this.dJ()
return new A.T(s,A.n(s).i("T<1>"))},
gaX(){var s=this.dJ()
return new A.ar(s,A.n(s).i("ar<2>"))},
gm(a){return this.dJ().a}}
A.im.prototype={
t(a,b){A.HN()}}
A.du.prototype={
gm(a){return this.b},
gE(a){return this.b===0},
gW(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hB(s,s.length,r.$ti.i("hB<1>"))},
F(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.to.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.iD&&this.a.R(0,b.a)&&A.D3(this)===A.D3(b)},
gI(a){return A.c6(this.a,A.D3(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bJ(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iD.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.MB(A.pd(this.a),this.$ti)}}
A.vR.prototype={
$0(){return B.x.v4(1000*this.a.now())},
$S:12}
A.jh.prototype={}
A.xt.prototype={
bP(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.j6.prototype={
l(a){return"Null check operator used on a null value"}}
A.m3.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.nF.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mt.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iG:1}
A.is.prototype={}
A.k4.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaG:1}
A.ef.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.GA(r==null?"unknown":r)+"'"},
gaj(a){var s=A.pd(this)
return A.bJ(s==null?A.bx(this):s)},
gxV(){return this},
$C:"$1",
$R:1,
$D:null}
A.pX.prototype={$C:"$0",$R:0}
A.pY.prototype={$C:"$2",$R:2}
A.xj.prototype={}
A.wT.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.GA(s)+"'"}}
A.id.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.id))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.kt(this.a)^A.ez(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mE(this.a)+"'")}}
A.mW.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bB.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gW(a){return this.a!==0},
gK(){return new A.T(this,A.n(this).i("T<1>"))},
gaX(){return new A.ar(this,A.n(this).i("ar<2>"))},
gab(){return new A.aM(this,A.n(this).i("aM<1,2>"))},
J(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mP(a)},
mP(a){var s=this.d
if(s==null)return!1
return this.dg(this.lx(s,a),a)>=0},
C(a,b){b.a7(0,new A.tv(this))},
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
s=this.lx(q,a)
r=this.dg(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kW(s==null?q.b=q.jj():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kW(r==null?q.c=q.jj():r,b,c)}else q.mS(b,c)},
mS(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jj()
s=p.ec(a)
r=o[s]
if(r==null)o[s]=[p.iN(a,b)]
else{q=p.dg(r,a)
if(q>=0)r[q].b=b
else r.push(p.iN(a,b))}},
km(a,b){var s,r,q=this
if(q.J(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.lX(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.lX(s.c,b)
else return s.mR(b)},
mR(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.ec(a)
r=n[s]
q=o.dg(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.mc(p)
if(r.length===0)delete n[s]
return p.b},
am(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iM()}},
a7(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.aA(s))
r=r.c}},
kW(a,b,c){var s=a[b]
if(s==null)a[b]=this.iN(b,c)
else s.b=c},
lX(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.mc(s)
delete a[b]
return s.b},
iM(){this.r=this.r+1&1073741823},
iN(a,b){var s,r=this,q=new A.uu(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iM()
return q},
mc(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iM()},
ec(a){return J.a7(a)&1073741823},
lx(a,b){return a[this.ec(b)]},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1},
l(a){return A.uL(this)},
jj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.tv.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.uu.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bC(s,s.r,s.e,this.$ti.i("bC<1>"))},
F(a,b){return this.a.J(b)}}
A.bC.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.ar.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.aR(s,s.r,s.e,this.$ti.i("aR<1>"))}}
A.aR.prototype={
gn(){return this.d},
k(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.aA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aM.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.mb(s,s.r,s.e,this.$ti.i("mb<1,2>"))}}
A.mb.prototype={
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
A.iJ.prototype={
ec(a){return A.kt(a)&1073741823},
dg(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iI.prototype={
ec(a){return A.M6(a)&1073741823},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.Bl.prototype={
$1(a){return this.a(a)},
$S:39}
A.Bm.prototype={
$2(a,b){return this.a(a,b)},
$S:145}
A.Bn.prototype={
$1(a){return this.a(a)},
$S:51}
A.hF.prototype={
gaj(a){return A.bJ(this.ly())},
ly(){return A.Ml(this.$r,this.h4())},
l(a){return this.ma(!1)},
ma(a){var s,r,q,p,o,n=this.pQ(),m=this.h4(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Ef(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
pQ(){var s,r=this.$s
while($.zN.length<=r)$.zN.push(null)
s=$.zN[r]
if(s==null){s=this.pk()
$.zN[r]=s}return s},
pk(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.DX(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fC(j,k)}}
A.oz.prototype={
h4(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.oz&&this.$s===b.$s&&J.x(this.a,b.a)&&J.x(this.b,b.b)},
gI(a){return A.c6(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.oA.prototype={
h4(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.oA&&s.$s===b.$s&&J.x(s.a,b.a)&&J.x(s.b,b.b)&&J.x(s.c,b.c)},
gI(a){var s=this
return A.c6(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.oB.prototype={
h4(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.oB&&this.$s===b.$s&&A.K1(this.a,b.a)},
gI(a){return A.c6(this.$s,A.vb(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eq.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glJ(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.C6(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqw(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.C6(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pl(){var s,r=this.a
if(!B.a.F(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
e9(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hE(s)},
jH(a,b,c){var s=b.length
if(c>s)throw A.b(A.ax(c,0,s,null,null))
return new A.o_(this,b,c)},
hy(a,b){return this.jH(0,b,0)},
pN(a,b){var s,r=this.glJ()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hE(s)},
pM(a,b){var s,r=this.gqw()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hE(s)},
eh(a,b,c){if(c<0||c>b.length)throw A.b(A.ax(c,0,b.length,null,null))
return this.pM(b,c)}}
A.hE.prototype={
gP(){return this.b.index},
gM(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieu:1,
$imO:1}
A.o_.prototype={
gu(a){return new A.o0(this.a,this.b,this.c)}}
A.o0.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.pN(l,s)
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
A.ha.prototype={
gM(){return this.a+this.c.length},
h(a,b){if(b!==0)throw A.b(A.wv(b,null))
return this.c},
$ieu:1,
gP(){return this.a}}
A.oP.prototype={
gu(a){return new A.A8(this.a,this.b,this.c)},
gG(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.ha(r,s)
throw A.b(A.aE())}}
A.A8.prototype={
k(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.ha(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s}}
A.o8.prototype={
bu(){var s=this.b
if(s===this)throw A.b(new A.dC("Local '"+this.a+"' has not been initialized."))
return s},
bt(){var s=this.b
if(s===this)throw A.b(A.E3(this.a))
return s},
sjX(a){var s=this
if(s.b!==s)throw A.b(new A.dC("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fJ.prototype={
gaj(a){return B.dB},
hA(a,b,c){A.hS(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
mo(a){return this.hA(a,0,null)},
mn(a,b,c){A.hS(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hz(a,b,c){A.hS(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mm(a){return this.hz(a,0,null)},
$iak:1,
$ieb:1}
A.fI.prototype={$ifI:1}
A.j1.prototype={
gaa(a){if(((a.$flags|0)&2)!==0)return new A.oX(a.buffer)
else return a.buffer},
qk(a,b,c,d){var s=A.ax(b,0,c,d,null)
throw A.b(s)},
l6(a,b,c,d){if(b>>>0!==b||b>c)this.qk(a,b,c,d)}}
A.oX.prototype={
hA(a,b,c){var s=A.bS(this.a,b,c)
s.$flags=3
return s},
mo(a){return this.hA(0,0,null)},
mn(a,b,c){var s=A.E8(this.a,b,c)
s.$flags=3
return s},
hz(a,b,c){var s=A.E7(this.a,b,c)
s.$flags=3
return s},
mm(a){return this.hz(0,0,null)},
$ieb:1}
A.j0.prototype={
gaj(a){return B.dC},
$iak:1,
$iBQ:1}
A.fK.prototype={
gm(a){return a.length},
m3(a,b,c,d,e){var s,r,q=a.length
this.l6(a,b,q,"start")
this.l6(a,c,q,"end")
if(b>c)throw A.b(A.ax(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.Q(e,null))
r=d.length
if(r-e<s)throw A.b(A.y("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iba:1,
$ibQ:1}
A.dK.prototype={
h(a,b){A.dk(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
A.dk(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.dQ.b(d)){this.m3(a,b,c,d,e)
return}this.kT(a,b,c,d,e)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.bR.prototype={
j(a,b,c){a.$flags&2&&A.H(a)
A.dk(b,a,a.length)
a[b]=c},
ah(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.aj.b(d)){this.m3(a,b,c,d,e)
return}this.kT(a,b,c,d,e)},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.mm.prototype={
gaj(a){return B.dD},
T(a,b,c){return new Float32Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$irK:1}
A.mn.prototype={
gaj(a){return B.dE},
T(a,b,c){return new Float64Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$irL:1}
A.mo.prototype={
gaj(a){return B.dF},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$itp:1}
A.mp.prototype={
gaj(a){return B.dG},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$itq:1}
A.mq.prototype={
gaj(a){return B.dH},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$itr:1}
A.j2.prototype={
gaj(a){return B.dL},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$ixv:1}
A.j3.prototype={
gaj(a){return B.dM},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$ixw:1}
A.j4.prototype={
gaj(a){return B.dN},
gm(a){return a.length},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$ixx:1}
A.ev.prototype={
gaj(a){return B.dO},
gm(a){return a.length},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iak:1,
$iev:1,
$icS:1}
A.jY.prototype={}
A.jZ.prototype={}
A.k_.prototype={}
A.k0.prototype={}
A.cp.prototype={
i(a){return A.kd(v.typeUniverse,this,a)},
V(a){return A.F4(v.typeUniverse,this,a)}}
A.om.prototype={}
A.oU.prototype={
l(a){return A.bW(this.a,null)}}
A.oi.prototype={
l(a){return this.a}}
A.k9.prototype={$idc:1}
A.ya.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:38}
A.y9.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:163}
A.yb.prototype={
$0(){this.a.$0()},
$S:2}
A.yc.prototype={
$0(){this.a.$0()},
$S:2}
A.k8.prototype={
oH(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e5(new A.Ac(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oI(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e5(new A.Ab(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
D(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$idb:1}
A.Ac.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.Ab.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.c.iK(s,o)}q.c=p
r.d.$1(q)},
$S:2}
A.jC.prototype={
aB(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aK(a)
else{s=r.a
if(r.$ti.i("A<1>").b(a))s.l5(a)
else s.cU(a)}},
c6(a,b){var s
if(b==null)b=A.ia(a)
s=this.a
if(this.b)s.al(new A.am(a,b))
else s.cm(new A.am(a,b))},
aR(a){return this.c6(a,null)},
$iij:1}
A.AC.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.AD.prototype={
$2(a,b){this.a.$2(1,new A.is(a,b))},
$S:194}
A.AV.prototype={
$2(a,b){this.a(a,b)},
$S:105}
A.AA.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.v()
s=q.b
if((s&1)!==0?(q.gaM().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.AB.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:38}
A.o2.prototype={
oD(a,b){var s=new A.ye(a)
this.a=A.wV(new A.yg(this,a),new A.yh(s),new A.yi(this,s),!1,b)}}
A.ye.prototype={
$0(){A.kw(new A.yf(this.a))},
$S:2}
A.yf.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.yh.prototype={
$0(){this.a.$0()},
$S:0}
A.yi.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.yg.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.v()
if((r.b&4)===0){s.c=new A.w($.C,t._)
if(s.b){s.b=!1
A.kw(new A.yd(this.b))}return s.c}},
$S:158}
A.yd.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jU.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.oR.prototype={
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
if(p==null||p.length===0){o.a=A.EZ
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.EZ
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.y("sync*"))}return!1},
xW(a){var s,r,q=this
if(a instanceof A.hL){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hL.prototype={
gu(a){return new A.oR(this.a(),this.$ti.i("oR<1>"))}}
A.am.prototype={
l(a){return A.r(this.a)},
$iae:1,
gcl(){return this.b}}
A.b0.prototype={}
A.eM.prototype={
bG(){},
bH(){}}
A.jI.prototype={
gcR(){return new A.b0(this,A.n(this).i("b0<1>"))},
gi6(){return(this.c&4)!==0},
gjh(){return this.c<4},
ru(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jz(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.EQ(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.o6(r,a,s.c)
n=A.yp(r,b)
m=c==null?A.AW():c
l=new A.eM(j,o,n,r.bS(m,t.H),r,q|p,s.i("eM<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.p9(j.a)
return l},
lR(a){var s,r=this
A.n(r).i("eM<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.ru(a)
if((r.c&2)===0&&r.d==null)r.p7()}return null},
lS(a){},
lT(a){},
iP(){if((this.c&4)!==0)return new A.bl("Cannot add new events after calling close")
return new A.bl("Cannot add new events while doing an addStream")},
t(a,b){if(!this.gjh())throw A.b(this.iP())
this.cu(b)},
bx(a,b){var s
if(!this.gjh())throw A.b(this.iP())
s=A.f_(a,b)
this.cv(s.a,s.b)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjh())throw A.b(q.iP())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.w($.C,t.D)
q.d6()
return r},
aG(a,b){this.cv(a,b)},
aQ(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aK(null)},
p7(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aK(null)}A.p9(this.b)},
$ibA:1}
A.jD.prototype={
cu(a){var s,r
for(s=this.d,r=this.$ti.i("cb<1>");s!=null;s=s.ch)s.bY(new A.cb(a,r))},
cv(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bY(new A.hw(a,b))},
d6(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bY(B.aa)
else this.r.aK(null)}}
A.rU.prototype={
$0(){this.c.a(null)
this.b.cn(null)},
$S:0}
A.rW.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.al(new A.am(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.al(new A.am(q,r))}},
$S:13}
A.rV.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bY(j,m.b,a)
if(J.x(k,0)){l=m.d
s=A.j([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aL(s,n)}m.c.cU(s)}}else if(J.x(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.al(new A.am(s,l))}},
$S(){return this.d.i("W(0)")}}
A.rP.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(k,aG)")}}
A.nv.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iG:1}
A.rQ.prototype={
$1(a){var s,r,q,p,o,n,m,l=this
if(a===0){s=A.j([],l.c.i("B<0>"))
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}l.a.aB(s)}else{s=A.j([],t.fQ)
for(r=l.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(r[p].c)
q=l.c
n=A.j([],q.i("B<0?>"))
for(m=r.length,p=0;p<r.length;r.length===m||(0,A.q)(r),++p)n.push(r[p].b)
l.a.aR(new A.j9(B.b.mJ(s,A.LK()),a,q.i("j9<p<0?>,p<am?>>")))}},
$S:8}
A.j9.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gcl(){var s=this.c
s=s==null?null:s.b
return s==null?A.ae.prototype.gcl.call(this):s}}
A.jS.prototype={
tg(a){this.a.bU(new A.z8(this,a),new A.z9(this,a),t.P)}}
A.z8.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.z9.prototype={
$2(a,b){this.a.c=new A.am(a,b)
this.b.$1(1)},
$S:9}
A.z7.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.eN.prototype={
c6(a,b){if((this.a.a&30)!==0)throw A.b(A.y("Future already completed"))
this.al(A.f_(a,b))},
aR(a){return this.c6(a,null)},
$iij:1}
A.aI.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.y("Future already completed"))
s.aK(a)},
an(){return this.aB(null)},
al(a){this.a.cm(a)}}
A.an.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.y("Future already completed"))
s.cn(a)},
an(){return this.aB(null)},
al(a){this.a.al(a)}}
A.cc.prototype={
vX(a){if((this.c&15)!==6)return!0
return this.b.b.eq(this.d,a.a,t.y,t.K)},
vi(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.ks(r,n,a.b,p,o,t.l)
else q=m.eq(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.F(s))){if((this.c&1)!==0)throw A.b(A.Q("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.Q("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.w.prototype={
bU(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.az(b,"onError",u.w))}else{a=q.dl(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.FG(b,q)}s=new A.w($.C,c.i("w<0>"))
r=b==null?1:3
this.dE(new A.cc(s,r,a,b,this.$ti.i("@<1>").V(c).i("cc<1,2>")))
return s},
X(a,b){return this.bU(a,null,b)},
m8(a,b,c){var s=new A.w($.C,c.i("w<0>"))
this.dE(new A.cc(s,19,a,b,this.$ti.i("@<1>").V(c).i("cc<1,2>")))
return s},
ms(a){var s=this.$ti,r=$.C,q=new A.w(r,s)
if(r!==B.i)a=A.FG(a,r)
this.dE(new A.cc(q,2,null,a,s.i("cc<1,1>")))
return q},
aY(a){var s=this.$ti,r=$.C,q=new A.w(r,s)
if(r!==B.i)a=r.bS(a,t.z)
this.dE(new A.cc(q,8,a,null,s.i("cc<1,1>")))
return q},
rO(a){this.a=this.a&1|16
this.c=a},
fU(a){this.a=a.a&30|this.a&1
this.c=a.c},
dE(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dE(a)
return}s.fU(r)}s.b.cO(new A.za(s,a))}},
lO(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lO(a)
return}n.fU(s)}m.a=n.hg(a)
n.b.cO(new A.zf(m,n))}},
eR(){var s=this.c
this.c=null
return this.hg(s)},
hg(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cn(a){var s,r=this
if(r.$ti.i("A<1>").b(a))A.zd(a,r,!0)
else{s=r.eR()
r.a=8
r.c=a
A.eQ(r,s)}},
cU(a){var s=this,r=s.eR()
s.a=8
s.c=a
A.eQ(s,r)},
pj(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gc9()===r.gc9())}else s=!1
if(s)return
q=p.eR()
p.fU(a)
A.eQ(p,q)},
al(a){var s=this.eR()
this.rO(a)
A.eQ(this,s)},
pi(a,b){this.al(new A.am(a,b))},
aK(a){if(this.$ti.i("A<1>").b(a)){this.l5(a)
return}this.l2(a)},
l2(a){this.a^=2
this.b.cO(new A.zc(this,a))},
l5(a){A.zd(a,this,!1)
return},
cm(a){this.a^=2
this.b.cO(new A.zb(this,a))},
ir(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.w($.C,r.$ti)
q.aK(r)
return q}s=new A.w($.C,r.$ti)
q.a=null
q.a=A.cR(a,new A.zl(s,a))
r.bU(new A.zm(q,r,s),new A.zn(q,s),t.P)
return s},
$iA:1}
A.za.prototype={
$0(){A.eQ(this.a,this.b)},
$S:0}
A.zf.prototype={
$0(){A.eQ(this.b,this.a.a)},
$S:0}
A.ze.prototype={
$0(){A.zd(this.a.a,this.b,!0)},
$S:0}
A.zc.prototype={
$0(){this.a.cU(this.b)},
$S:0}
A.zb.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.zi.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aV(q.d,t.z)}catch(p){s=A.F(p)
r=A.ad(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ia(q)
n=k.a
n.c=new A.am(q,o)
q=n}q.b=!0
return}if(j instanceof A.w&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.w){m=k.b.a
l=new A.w(m.b,m.$ti)
j.bU(new A.zj(l,m),new A.zk(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.zj.prototype={
$1(a){this.a.pj(this.b)},
$S:38}
A.zk.prototype={
$2(a,b){this.a.al(new A.am(a,b))},
$S:9}
A.zh.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.eq(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.F(n)
r=A.ad(n)
q=s
p=r
if(p==null)p=A.ia(q)
o=this.a
o.c=new A.am(q,p)
o.b=!0}},
$S:0}
A.zg.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.vX(s)&&p.a.e!=null){p.c=p.a.vi(s)
p.b=!1}}catch(o){r=A.F(o)
q=A.ad(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ia(p)
m=l.b
m.c=new A.am(p,n)
p=m}p.b=!0}},
$S:0}
A.zl.prototype={
$0(){var s=A.Cp()
this.a.al(new A.am(new A.nv("Future not completed",this.b),s))},
$S:0}
A.zm.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.D()
this.c.cU(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.zn.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.D()
this.b.al(new A.am(a,b))}},
$S:9}
A.o1.prototype={}
A.aa.prototype={
ed(a){var s=new A.w($.C,t.os),r=new A.a2(""),q=this.a9(null,!0,new A.wY(s,r),s.giV())
q.ib(new A.wZ(this,r,q,s))
return s},
gm(a){var s={},r=new A.w($.C,t.hy)
s.a=0
this.a9(new A.x_(s,this),!0,new A.x0(s,r),r.giV())
return r},
gG(a){var s=new A.w($.C,A.n(this).i("w<aa.T>")),r=this.a9(null,!0,new A.wW(s),s.giV())
r.ib(new A.wX(this,r,s))
return s}}
A.wY.prototype={
$0(){var s=this.b.a
this.a.cn(s.charCodeAt(0)==0?s:s)},
$S:0}
A.wZ.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.F(o)
r=A.ad(o)
q=s
p=r
n=A.kk(q,p)
if(n==null)q=new A.am(q,p)
else q=n
A.Kx(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.x_.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(aa.T)")}}
A.x0.prototype={
$0(){this.b.cn(this.a.a)},
$S:0}
A.wW.prototype={
$0(){var s,r=A.Cp(),q=new A.bl("No element")
A.mG(q,r)
s=A.kk(q,r)
if(s==null)s=new A.am(q,r)
this.a.al(s)},
$S:0}
A.wX.prototype={
$1(a){A.Ky(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.jq.prototype={
a9(a,b,c,d){return this.a.a9(a,b,c,d)},
bz(a,b,c){return this.a9(a,null,b,c)},
aS(a){return this.a9(a,null,null,null)}}
A.e0.prototype={
gcR(){return new A.b5(this,A.n(this).i("b5<1>"))},
gi6(){return(this.b&4)!==0},
gqV(){if((this.b&8)===0)return this.a
return this.a.c},
fY(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e_(A.n(q).i("e_<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e_(A.n(q).i("e_<1>")):s},
gaM(){var s=this.a
return(this.b&8)!==0?s.c:s},
bE(){if((this.b&4)!==0)return new A.bl("Cannot add event after closing")
return new A.bl("Cannot add event while adding a stream")},
tA(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bE())
if((o&2)!==0){o=new A.w($.C,t._)
o.aK(null)
return o}o=p.a
s=b===!0
r=new A.w($.C,t._)
q=s?A.Jp(p):p.goM()
q=a.a9(p.goQ(),s,p.gp9(),q)
s=p.b
if((s&1)!==0?(p.gaM().e&4)!==0:(s&2)===0)q.bd()
p.a=new A.k5(o,r,q,A.n(p).i("k5<1>"))
p.b|=8
return r},
lo(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.e7():new A.w($.C,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bE())
this.aA(b)},
bx(a,b){var s
if(this.b>=4)throw A.b(this.bE())
s=A.f_(a,b)
this.aG(s.a,s.b)},
tz(a){return this.bx(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lo()
if(r>=4)throw A.b(s.bE())
s.l7()
return s.lo()},
l7(){var s=this.b|=4
if((s&1)!==0)this.d6()
else if((s&3)===0)this.fY().t(0,B.aa)},
aA(a){var s=this,r=s.b
if((r&1)!==0)s.cu(a)
else if((r&3)===0)s.fY().t(0,new A.cb(a,A.n(s).i("cb<1>")))},
aG(a,b){var s=this.b
if((s&1)!==0)this.cv(a,b)
else if((s&3)===0)this.fY().t(0,new A.hw(a,b))},
aQ(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aK(null)},
jz(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.y("Stream has already been listened to."))
s=A.JH(p,a,b,c,d,A.n(p).c)
r=p.gqV()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b1()}else p.a=s
s.rP(r)
s.j6(new A.A4(p))
return s},
lR(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.D()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.w)k=r}catch(o){q=A.F(o)
p=A.ad(o)
n=new A.w($.C,t.D)
n.cm(new A.am(q,p))
k=n}else k=k.aY(s)
m=new A.A3(l)
if(k!=null)k=k.aY(m)
else m.$0()
return k},
lS(a){if((this.b&8)!==0)this.a.b.bd()
A.p9(this.e)},
lT(a){if((this.b&8)!==0)this.a.b.b1()
A.p9(this.f)},
$ibA:1}
A.A4.prototype={
$0(){A.p9(this.a.d)},
$S:0}
A.A3.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aK(null)},
$S:0}
A.oS.prototype={
cu(a){this.gaM().aA(a)},
cv(a,b){this.gaM().aG(a,b)},
d6(){this.gaM().aQ()}}
A.jE.prototype={
cu(a){this.gaM().bY(new A.cb(a,A.n(this).i("cb<1>")))},
cv(a,b){this.gaM().bY(new A.hw(a,b))},
d6(){this.gaM().bY(B.aa)}}
A.cW.prototype={}
A.hM.prototype={}
A.b5.prototype={
gI(a){return(A.ez(this.a)^892482866)>>>0},
R(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b5&&b.a===this.a}}
A.dW.prototype={
h9(){return this.w.lR(this)},
bG(){this.w.lS(this)},
bH(){this.w.lT(this)}}
A.nZ.prototype={
D(){var s=this.b.D()
return s.aY(new A.y5(this))}}
A.y6.prototype={
$2(a,b){var s=this.a
s.aG(a,b)
s.aQ()},
$S:9}
A.y5.prototype={
$0(){this.a.a.aK(null)},
$S:2}
A.k5.prototype={}
A.b1.prototype={
rP(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fL(s)}},
ib(a){this.a=A.o6(this.d,a,A.n(this).i("b1.T"))},
bd(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.j6(q.geH())},
b1(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fL(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.j6(s.geI())}}},
D(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.iR()
r=s.f
return r==null?$.e7():r},
iR(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.h9()},
aA(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cu(a)
else s.bY(new A.cb(a,A.n(s).i("cb<b1.T>")))},
aG(a,b){var s
if(t.C.b(a))A.mG(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cv(a,b)
else this.bY(new A.hw(a,b))},
aQ(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d6()
else s.bY(B.aa)},
bG(){},
bH(){},
h9(){return null},
bY(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e_(A.n(r).i("e_<b1.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fL(r)}},
cu(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fB(s.a,a,A.n(s).i("b1.T"))
s.e=(s.e&4294967231)>>>0
s.iT((r&4)!==0)},
cv(a,b){var s,r=this,q=r.e,p=new A.yr(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.iR()
s=r.f
if(s!=null&&s!==$.e7())s.aY(p)
else p.$0()}else{p.$0()
r.iT((q&4)!==0)}},
d6(){var s,r=this,q=new A.yq(r)
r.iR()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.e7())s.aY(q)
else q.$0()},
j6(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.iT((r&4)!==0)},
iT(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.bG()
else q.bH()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.fL(q)},
$ibm:1}
A.yr.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.na(s,o,this.c,r,t.l)
else q.fB(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.yq.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fA(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hK.prototype={
a9(a,b,c,d){return this.a.jz(a,d,c,b===!0)},
bz(a,b,c){return this.a9(a,null,b,c)},
aS(a){return this.a9(a,null,null,null)},
vN(a,b){return this.a9(a,null,null,b)}}
A.oh.prototype={
gei(){return this.a},
sei(a){return this.a=a}}
A.cb.prototype={
kk(a){a.cu(this.b)}}
A.hw.prototype={
kk(a){a.cv(this.b,this.c)}}
A.z0.prototype={
kk(a){a.d6()},
gei(){return null},
sei(a){throw A.b(A.y("No events after a done."))}}
A.e_.prototype={
fL(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kw(new A.zM(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sei(b)
s.c=b}}}
A.zM.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gei()
q.b=r
if(r==null)q.c=null
s.kk(this.b)},
$S:0}
A.hx.prototype={
ib(a){},
bd(){var s=this.a
if(s>=0)this.a=s+2},
b1(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kw(s.glL())}else s.a=r},
D(){this.a=-1
this.c=null
return $.e7()},
qK(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fA(s)}}else r.a=q},
$ibm:1}
A.cy.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.w($.C,t.g5)
r.b=s
r.c=!1
q.b1()
return s}throw A.b(A.y("Already waiting for next."))}return r.qj()},
qj(){var s,r,q=this,p=q.b
if(p!=null){s=new A.w($.C,t.g5)
q.b=s
r=p.a9(q.gqC(),!0,q.gqE(),q.gqG())
if(q.b!=null)q.a=r
return s}return $.GG()},
D(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aK(!1)
else s.c=!1
return r.D()}return $.e7()},
qD(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cn(!0)
if(q.c){r=q.a
if(r!=null)r.bd()}},
qH(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.al(new A.am(a,b))
else q.cm(new A.am(a,b))},
qF(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cU(!1)
else q.l2(!1)}}
A.jN.prototype={
a9(a,b,c,d){return A.EQ(c,this.$ti.c)},
bz(a,b,c){return this.a9(a,null,b,c)}}
A.di.prototype={
a9(a,b,c,d){var s=null,r=new A.jX(s,s,s,s,this.$ti.i("jX<1>"))
r.d=new A.zK(this,r)
return r.jz(a,d,c,b===!0)},
bz(a,b,c){return this.a9(a,null,b,c)},
aS(a){return this.a9(a,null,null,null)}}
A.zK.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.jX.prototype={
tB(a){var s=this.b
if(s>=4)throw A.b(this.bE())
if((s&1)!==0)this.gaM().aA(a)},
tR(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bE())
r|=4
s.b=r
if((r&1)!==0)s.gaM().aQ()},
gcR(){throw A.b(A.Y("Not available"))},
$idI:1}
A.AF.prototype={
$0(){return this.a.al(this.b)},
$S:0}
A.AG.prototype={
$0(){return this.a.cn(this.b)},
$S:0}
A.jQ.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.o6(r,a,s.y[1]),n=A.yp(r,d),m=c==null?A.AW():c
s=new A.hA(this,o,n,r.bS(m,t.H),r,q|p,s.i("hA<1,2>"))
s.x=this.a.bz(s.gj7(),s.gj9(),s.gjb())
return s},
bz(a,b,c){return this.a9(a,null,b,c)}}
A.hA.prototype={
aA(a){if((this.e&2)!==0)return
this.iJ(a)},
aG(a,b){if((this.e&2)!==0)return
this.kU(a,b)},
bG(){var s=this.x
if(s!=null)s.bd()},
bH(){var s=this.x
if(s!=null)s.b1()},
h9(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
j8(a){this.w.q5(a,this)},
jc(a,b){this.aG(a,b)},
ja(){this.aQ()}}
A.eT.prototype={
q5(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.F(q)
r=A.ad(q)
p=s
o=r
n=A.kk(p,o)
if(n!=null){p=n.a
o=n.b}b.aG(p,o)
return}b.aA(m)}}
A.jO.prototype={
t(a,b){var s=this.a
if((s.e&2)!==0)A.t(A.y("Stream is already closed"))
s.iJ(b)},
bx(a,b){this.a.aG(a,b)},
q(){var s=this.a
if((s.e&2)!==0)A.t(A.y("Stream is already closed"))
s.kV()},
$ibA:1}
A.hI.prototype={
aA(a){if((this.e&2)!==0)throw A.b(A.y("Stream is already closed"))
this.iJ(a)},
aG(a,b){if((this.e&2)!==0)throw A.b(A.y("Stream is already closed"))
this.kU(a,b)},
aQ(){if((this.e&2)!==0)throw A.b(A.y("Stream is already closed"))
this.kV()},
bG(){var s=this.x
if(s!=null)s.bd()},
bH(){var s=this.x
if(s!=null)s.b1()},
h9(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
j8(a){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.t(0,a)}catch(p){s=A.F(p)
r=A.ad(p)
this.aG(s,r)}},
jc(a,b){var s,r,q,p
try{q=this.w
q===$&&A.v()
q.bx(a,b)}catch(p){s=A.F(p)
r=A.ad(p)
if(s===a)this.aG(a,b)
else this.aG(s,r)}},
ja(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.v()
q.q()}catch(p){s=A.F(p)
r=A.ad(p)
this.aG(s,r)}}}
A.jH.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.o6(r,a,s.y[1]),n=A.yp(r,d),m=c==null?A.AW():c,l=new A.hI(o,n,r.bS(m,t.H),r,q|p,s.i("hI<1,2>"))
l.w=this.a.$1(new A.jO(l,s.i("jO<2>")))
l.x=this.b.bz(l.gj7(),l.gj9(),l.gjb())
return l},
bz(a,b,c){return this.a9(a,null,b,c)}}
A.Ax.prototype={}
A.Az.prototype={}
A.Ay.prototype={}
A.Av.prototype={}
A.Aw.prototype={}
A.Au.prototype={}
A.Ar.prototype={}
A.p2.prototype={}
A.Aq.prototype={}
A.Ap.prototype={}
A.At.prototype={}
A.As.prototype={}
A.p1.prototype={
va(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.p3.prototype={}
A.p0.prototype={
eN(a,b,c){var s,r,q,p,o,n,m=this.gje(),l=m.a
if(l===B.i){A.kp(b,c)
return}o=l.gkh()
o.toString
s=o
r=$.C
try{$.C=s
m.va(l,l.gb7(),a,b,c)
$.C=r}catch(n){q=A.F(n)
p=A.ad(n)
$.C=r
o=b===q?c:p
s.eN(l,q,o)}},
$iN:1}
A.ob.prototype={
gll(){var s=this.ax
return s==null?this.ax=new A.hQ(this):s},
gb7(){return this.ay.gll()},
gc9(){return this.as.a},
fA(a){var s,r,q
try{this.aV(a,t.H)}catch(q){s=A.F(q)
r=A.ad(q)
this.eN(this,s,r)}},
fB(a,b,c){var s,r,q
try{this.eq(a,b,t.H,c)}catch(q){s=A.F(q)
r=A.ad(q)
this.eN(this,s,r)}},
na(a,b,c,d,e){var s,r,q
try{this.ks(a,b,c,t.H,d,e)}catch(q){s=A.F(q)
r=A.ad(q)
this.eN(this,s,r)}},
jJ(a,b){return new A.yX(this,this.bS(a,b),b)},
tN(a,b,c){return new A.yZ(this,this.dl(a,b,c),c,b)},
eZ(a){return new A.yW(this,this.bS(a,t.H))},
hC(a,b){return new A.yY(this,this.dl(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aM)return null
s=q.b
r=s.h(0,b)
return r!=null||s.J(b)?r:this.rr(q,b)},
rr(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gkh().gjG()
if(s===B.aM)break
q=s.b
r=q.h(0,b)
if(r!=null||q.J(b)){a.b.j(0,b,r)
break}}return r},
fd(a,b){this.eN(this,a,b)},
mK(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
aV(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb7(),this,a,b)},
eq(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb7(),this,a,b,c,d)},
ks(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb7(),this,a,b,c,d,e,f)},
bS(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb7(),this,a,b)},
dl(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb7(),this,a,b,c)},
ft(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb7(),this,a,b,c,d)},
mG(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb7(),this,a,b)},
cO(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb7(),this,a)},
jO(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
jN(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
glZ(){return this.a},
gm0(){return this.b},
gm_(){return this.c},
glV(){return this.d},
glW(){return this.e},
glU(){return this.f},
glq(){return this.r},
gjw(){return this.w},
gli(){return this.x},
glh(){return this.y},
glP(){return this.z},
glv(){return this.Q},
gje(){return this.as},
gjG(){return this.at},
gkh(){return this.ay}}
A.yX.prototype={
$0(){return this.a.aV(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.yZ.prototype={
$1(a){var s=this
return s.a.eq(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").V(this.c).i("1(2)")}}
A.yW.prototype={
$0(){return this.a.fA(this.b)},
$S:0}
A.yY.prototype={
$1(a){return this.a.fB(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.oG.prototype={
glZ(){return B.e3},
gm0(){return B.e2},
gm_(){return B.e1},
glV(){return B.e_},
glW(){return B.e0},
glU(){return B.dZ},
glq(){return B.dV},
gjw(){return B.e4},
gli(){return B.dU},
glh(){return B.dT},
glP(){return B.dY},
glv(){return B.dW},
gje(){return B.dX},
gjG(){return B.aM},
gkh(){return null},
gll(){var s=$.zR
return s==null?$.zR=new A.hQ(this):s},
gb7(){var s=$.zR
return s==null?$.zR=new A.hQ(this):s},
gc9(){return this},
fA(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.AR(null,null,this,a)}catch(q){s=A.F(q)
r=A.ad(q)
A.kp(s,r)}},
fB(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.AS(null,null,this,a,b)}catch(q){s=A.F(q)
r=A.ad(q)
A.kp(s,r)}},
na(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.CV(null,null,this,a,b,c)}catch(q){s=A.F(q)
r=A.ad(q)
A.kp(s,r)}},
jJ(a,b){return new A.zT(this,a,b)},
eZ(a){return new A.zS(this,a)},
hC(a,b){return new A.zU(this,a,b)},
h(a,b){return null},
fd(a,b){A.kp(a,b)},
mK(a,b){return A.FI(null,null,this,a,b)},
aV(a){if($.C===B.i)return a.$0()
return A.AR(null,null,this,a)},
eq(a,b){if($.C===B.i)return a.$1(b)
return A.AS(null,null,this,a,b)},
ks(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.CV(null,null,this,a,b,c)},
bS(a){return a},
dl(a){return a},
ft(a){return a},
mG(a,b){return null},
cO(a){A.AT(null,null,this,a)},
jO(a,b){return A.Cw(a,b)},
jN(a,b){return A.Et(a,b)}}
A.zT.prototype={
$0(){return this.a.aV(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.zS.prototype={
$0(){return this.a.fA(this.b)},
$S:0}
A.zU.prototype={
$1(a){return this.a.fB(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hQ.prototype={$iav:1}
A.AQ.prototype={
$0(){A.DK(this.a,this.b)},
$S:0}
A.jB.prototype={}
A.dg.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gW(a){return this.a!==0},
gK(){return new A.eR(this,A.n(this).i("eR<1>"))},
gaX(){var s=A.n(this)
return A.dG(new A.eR(this,s.i("eR<1>")),new A.zp(this),s.c,s.y[1])},
J(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.ld(a)},
ld(a){var s=this.d
if(s==null)return!1
return this.c1(this.l9(s,a),a)>=0},
C(a,b){b.a7(0,new A.zo(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.ES(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.ES(q,b)
return r}else return this.lw(b)},
lw(a){var s,r,q=this.d
if(q==null)return null
s=this.l9(q,a)
r=this.c1(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.l_(s==null?q.b=A.CG():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.l_(r==null?q.c=A.CG():r,b,c)}else q.m2(b,c)},
m2(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.CG()
s=p.co(a)
r=o[s]
if(r==null){A.CH(o,s,[a,b]);++p.a
p.e=null}else{q=p.c1(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a7(a,b){var s,r,q,p,o,n=this,m=n.l8()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.aA(n))}},
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
this.e=null}A.CH(a,b,c)},
co(a){return J.a7(a)&1073741823},
l9(a,b){return a[this.co(b)]},
c1(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.x(a[r],b))return r
return-1}}
A.zp.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.zo.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.dX.prototype={
co(a){return A.kt(a)&1073741823},
c1(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jK.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.or(b)},
j(a,b,c){this.os(b,c)},
J(a){if(!this.w.$1(a))return!1
return this.oq(a)},
co(a){return this.r.$1(a)&1073741823},
c1(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.yV.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.eR.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.on(s,s.l8(),this.$ti.i("on<1>"))},
F(a,b){return this.a.J(b)}}
A.on.prototype={
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
return this.oj(b)},
j(a,b,c){this.om(b,c)},
J(a){if(!this.y.$1(a))return!1
return this.oi(a)},
H(a,b){if(!this.y.$1(b))return null
return this.ol(b)},
ec(a){return this.x.$1(a)&1073741823},
dg(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.zI.prototype={
$1(a){return this.a.b(a)},
$S:22}
A.dh.prototype={
gu(a){var s=this,r=new A.dZ(s,s.r,A.n(s).i("dZ<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gE(a){return this.a===0},
gW(a){return this.a!==0},
F(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.po(b)},
po(a){var s=this.d
if(s==null)return!1
return this.c1(s[this.co(a)],a)>=0},
gG(a){var s=this.e
if(s==null)throw A.b(A.y("No elements"))
return s.a},
ga1(a){var s=this.f
if(s==null)throw A.b(A.y("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.kZ(s==null?q.b=A.CI():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.kZ(r==null?q.c=A.CI():r,b)}else return q.oK(b)},
oK(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.CI()
s=q.co(a)
r=p[s]
if(r==null)p[s]=[q.jk(a)]
else{if(q.c1(r,a)>=0)return!1
r.push(q.jk(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.la(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.la(s.c,b)
else return s.jt(b)},
jt(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.co(a)
r=n[s]
q=o.c1(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.lb(p)
return!0},
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
jk(a){var s,r=this,q=new A.zJ(a)
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
co(a){return J.a7(a)&1073741823},
c1(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.x(a[r].a,b))return r
return-1}}
A.zJ.prototype={}
A.dZ.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.aA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.uv.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:45}
A.er.prototype={
F(a,b){return b instanceof A.b2&&this===b.a},
gu(a){var s=this
return new A.ou(s,s.a,s.c,s.$ti.i("ou<1>"))},
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
gE(a){return this.b===0},
h8(a,b,c){var s,r,q=this
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
jB(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.ou.prototype={
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
gfn(){var s=this.a
if(s==null||this===s.gG(0))return null
return this.c}}
A.K.prototype={
gu(a){return new A.at(a,this.gm(a),A.bx(a).i("at<K.E>"))},
a8(a,b){return this.h(a,b)},
gE(a){return this.gm(a)===0},
gW(a){return!this.gE(a)},
gG(a){if(this.gm(a)===0)throw A.b(A.aE())
return this.h(a,0)},
ga1(a){if(this.gm(a)===0)throw A.b(A.aE())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aE())
if(this.gm(a)>1)throw A.b(A.iE())
return this.h(a,0)},
F(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.x(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.aA(a))}return!1},
cD(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.aA(a))}return!0},
f9(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.aA(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.x1("",a,b)
return s.charCodeAt(0)==0?s:s},
dt(a,b){return new A.al(a,b,A.bx(a).i("al<K.E>"))},
ky(a,b){return new A.bF(a,b.i("bF<0>"))},
ce(a,b,c){return new A.X(a,b,A.bx(a).i("@<K.E>").V(c).i("X<1,2>"))},
bi(a,b){return A.cu(a,b,null,A.bx(a).i("K.E"))},
cL(a,b){return A.cu(a,0,A.cz(b,"count",t.S),A.bx(a).i("K.E"))},
fC(a){var s,r=A.mc(A.bx(a).i("K.E"))
for(s=0;s<this.gm(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
hD(a,b){return new A.bN(a,A.bx(a).i("@<K.E>").V(b).i("bN<1,2>"))},
ck(a,b){var s=b==null?A.M3():b
A.n3(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bd(b,c,r)
s=A.O(this.fK(a,b,c),A.bx(a).i("K.E"))
return s},
b5(a,b){return this.T(a,b,null)},
fK(a,b,c){A.bd(b,c,this.gm(a))
return A.cu(a,b,c,A.bx(a).i("K.E"))},
jW(a,b,c,d){var s
A.bd(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ah(a,b,c,d,e){var s,r,q,p,o
A.bd(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bc(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.pr(d,e).cM(0,!1)
r=0}p=J.M(q)
if(r+s>p.gm(q))throw A.b(A.DV())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
av(a,b,c,d){return this.ah(a,b,c,d,0)},
cP(a,b,c){var s,r
if(t.j.b(c))this.av(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.tt(a,"[","]")},
$iJ:1,
$io:1,
$ip:1}
A.V.prototype={
c5(a,b,c){var s=A.n(this)
return A.E4(this,s.i("V.K"),s.i("V.V"),b,c)},
a7(a,b){var s,r,q,p
for(s=J.E(this.gK()),r=A.n(this).i("V.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gab(){return J.bM(this.gK(),new A.uK(this),A.n(this).i("S<V.K,V.V>"))},
aT(a,b,c,d){var s,r,q,p,o,n=A.u(c,d)
for(s=J.E(this.gK()),r=A.n(this).i("V.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
J(a){return J.BN(this.gK(),a)},
gm(a){return J.aq(this.gK())},
gE(a){return J.by(this.gK())},
gW(a){return J.e8(this.gK())},
gaX(){return new A.jW(this,A.n(this).i("jW<V.K,V.V>"))},
l(a){return A.uL(this)},
$iI:1}
A.uK.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("V.V").a(r)
return new A.S(a,r,A.n(s).i("S<V.K,V.V>"))},
$S(){return A.n(this.a).i("S<V.K,V.V>(V.K)")}}
A.uM.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.r(a)
r.a=(r.a+=s)+": "
s=A.r(b)
r.a+=s},
$S:36}
A.jW.prototype={
gm(a){var s=this.a
return s.gm(s)},
gE(a){var s=this.a
return s.gE(s)},
gW(a){var s=this.a
return s.gW(s)},
gG(a){var s=this.a
s=s.h(0,J.bZ(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gap(a){var s=this.a
s=s.h(0,J.BO(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga1(a){var s=this.a
s=s.h(0,J.pq(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.ow(J.E(s.gK()),s,this.$ti.i("ow<1,2>"))}}
A.ow.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.oW.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iQ.prototype={
c5(a,b,c){return this.a.c5(0,b,c)},
h(a,b){return this.a.h(0,b)},
j(a,b,c){this.a.j(0,b,c)},
J(a){return this.a.J(a)},
a7(a,b){this.a.a7(0,b)},
gE(a){var s=this.a
return s.gE(s)},
gW(a){var s=this.a
return s.gW(s)},
gm(a){var s=this.a
return s.gm(s)},
gK(){return this.a.gK()},
l(a){return this.a.l(0)},
gaX(){return this.a.gaX()},
gab(){return this.a.gab()},
aT(a,b,c,d){return this.a.aT(0,b,c,d)},
$iI:1}
A.cT.prototype={
c5(a,b,c){return new A.cT(this.a.c5(0,b,c),b.i("@<0>").V(c).i("cT<1,2>"))}}
A.iM.prototype={
gu(a){var s=this
return new A.ov(s,s.c,s.d,s.b,s.$ti.i("ov<1>"))},
gE(a){return this.b===this.c},
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
if(r.gm(0)>1)throw A.b(A.iE())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a8(a,b){var s,r=this
A.DU(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.x(r.a[s],b)){r.jt(s);++r.d
return!0}return!1},
l(a){return A.tt(this,"{","}")},
jt(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.ov.prototype={
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
gW(a){return this.gm(this)!==0},
C(a,b){var s
for(s=J.E(b);s.k();)this.t(0,s.gn())},
ce(a,b,c){return new A.ek(this,b,A.n(this).i("@<1>").V(c).i("ek<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iE())
s=r.gu(r)
if(!s.k())throw A.b(A.aE())
return s.gn()},
l(a){return A.tt(this,"{","}")},
dt(a,b){return new A.al(this,b,A.n(this).i("al<1>"))},
cD(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cL(a,b){return A.Er(this,b,A.n(this).c)},
bi(a,b){return A.Eo(this,b,A.n(this).c)},
gG(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aE())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aE())
do s=r.gn()
while(r.k())
return s},
a8(a,b){var s,r
A.bc(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lX(b,b-r,this,null,"index"))},
$iJ:1,
$io:1,
$ieE:1}
A.k3.prototype={}
A.ke.prototype={}
A.or.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.r2(b):s}},
gm(a){return this.b==null?this.c.a:this.dG().length},
gE(a){return this.gm(0)===0},
gW(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.os(this)},
gaX(){var s,r=this
if(r.b==null){s=r.c
return new A.ar(s,A.n(s).i("ar<2>"))}return A.dG(r.dG(),new A.zD(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.J(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.tc().j(0,b,c)},
J(a){if(this.b==null)return this.c.J(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a7(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a7(0,b)
s=o.dG()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.AI(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.aA(o))}},
dG(){var s=this.c
if(s==null)s=this.c=A.j(Object.keys(this.a),t.s)
return s},
tc(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.u(t.N,t.z)
r=n.dG()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.am(r)
n.a=n.b=null
return n.c=s},
r2(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.AI(this.a[a])
return this.b[a]=s}}
A.zD.prototype={
$1(a){return this.a.h(0,a)},
$S:51}
A.os.prototype={
gm(a){return this.a.gm(0)},
a8(a,b){var s=this.a
return s.b==null?s.gK().a8(0,b):s.dG()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gu(s)}else{s=s.dG()
s=new J.fb(s,s.length,A.a_(s).i("fb<1>"))}return s},
F(a,b){return this.a.J(b)}}
A.zB.prototype={
q(){var s,r,q=this
q.ot()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aA(A.FE(r.charCodeAt(0)==0?r:r,q.b))
s.aQ()}}
A.Am.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:46}
A.Al.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:46}
A.kK.prototype={
gaO(){return"us-ascii"},
jT(a){return B.bv.v(a)}}
A.oV.prototype={
v(a){var s,r,q,p=A.bd(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.az(a,"string","Contains invalid characters."))
o[r]=q}return o},
bX(a){return new A.Ad(new A.hq(a),this.a)}}
A.kL.prototype={}
A.Ad.prototype={
q(){this.a.a.q()},
bL(a,b,c,d){var s,r,q,p
A.bd(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.Q("Source contains invalid character with code point: "+q+".",null))}s=new A.cj(a)
p=this.a.a
p.t(0,s.T(s,b,c))
if(d)p.q()}}
A.kQ.prototype={
gf4(){return this.a},
vY(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bd(a1,a2,a0.length)
s=$.Dg()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.Bk(a0.charCodeAt(l))
h=A.Bk(a0.charCodeAt(l+1))
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
if(o>=0)A.Ds(a0,n,a2,o,m,d)
else{c=B.c.ak(d-1,4)+1
if(c===1)throw A.b(A.a8(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dm(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.Ds(a0,n,a2,o,m,b)
else{c=B.c.ak(b,4)
if(c===1)throw A.b(A.a8(a,a0,a2))
if(c>1)a0=B.a.dm(a0,a2,a2,c===2?"==":"=")}return a0}}
A.ic.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.o4(this.a?u.G:u.U).mF(a,0,s,!0)
s.toString
return A.dQ(s,0,null)},
bX(a){return new A.y7(a,new A.yo(this.a?u.G:u.U))}}
A.o4.prototype={
mw(a){return new Uint8Array(a)},
mF(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.N(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mw(o)
r.a=A.Jy(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.yo.prototype={
mw(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bL(B.f.gaa(s),s.byteOffset,a)}}
A.yk.prototype={
t(a,b){this.le(b,0,J.aq(b),!1)},
q(){this.le(B.cJ,0,0,!0)}}
A.y7.prototype={
le(a,b,c,d){var s=this.b.mF(a,b,c,d)
if(s!=null)this.a.a.aA(A.dQ(s,0,null))
if(d)this.a.a.aQ()}}
A.kR.prototype={
v(a){var s,r,q=A.bd(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.o3()
r=s.jP(a,0,q)
r.toString
s.jK(a,q)
return r},
bX(a){return new A.yj(a,new A.o3())}}
A.o3.prototype={
jP(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.EE(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Jv(a,b,c,q)
r.a=A.Jx(a,b,c,s,0,r.a)
return s},
jK(a,b){var s=this.a
if(s<-1)throw A.b(A.a8("Missing padding character",a,b))
if(s>0)throw A.b(A.a8("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.yj.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.jP(b,0,r)
if(s!=null)this.a.a.aA(s)},
q(){this.b.jK(null,null)
this.a.a.aQ()},
bL(a,b,c,d){var s,r
A.bd(b,c,a.length)
if(b===c)return
s=this.b
r=s.jP(a,b,c)
if(r!=null)this.a.a.aA(r)
if(d){s.jK(a,c)
this.a.a.aQ()}}}
A.pJ.prototype={}
A.hq.prototype={
t(a,b){this.a.t(0,b)},
q(){this.a.q()}}
A.o7.prototype={
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
A.l2.prototype={}
A.oM.prototype={
t(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.eO.prototype={
t(a,b){this.b.t(0,b)},
bx(a,b){A.cz(a,"error",t.K)
this.a.bx(a,b)},
q(){this.b.q()},
$ibA:1}
A.l4.prototype={}
A.aC.prototype={
bX(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
tL(a){return new A.jH(new A.qG(this),a,t.fM.V(A.n(this).i("aC.T")).i("jH<1,2>"))}}
A.qG.prototype={
$1(a){return new A.eO(a,this.a.bX(a),t.oW)},
$S:181}
A.em.prototype={}
A.iK.prototype={
l(a){var s=A.ir(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.m4.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.tw.prototype={
aw(a,b){var s=A.FE(a,this.gu5().a)
return s},
a6(a,b){var s=A.JS(a,this.gf4().b,null)
return s},
gf4(){return B.cl},
gu5(){return B.ck}}
A.m6.prototype={
bX(a){return new A.zC(null,this.b,new A.oO(a))}}
A.zC.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.y("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a2("")
q=new A.A9(r,s)
A.EU(b,q,p.b,p.a)
if(r.a.length!==0)q.j5()
s.q()},
q(){}}
A.m5.prototype={
bX(a){return new A.zB(this.a,a,new A.a2(""))}}
A.zF.prototype={
ni(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.iA(a,s,r)
s=r+1
n.ao(92)
n.ao(117)
n.ao(100)
p=q>>>8&15
n.ao(p<10?48+p:87+p)
p=q>>>4&15
n.ao(p<10?48+p:87+p)
p=q&15
n.ao(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.iA(a,s,r)
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
break}}else if(q===34||q===92){if(r>s)n.iA(a,s,r)
s=r+1
n.ao(92)
n.ao(q)}}if(s===0)n.b3(a)
else if(s<m)n.iA(a,s,m)},
iS(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.m4(a,null))}s.push(a)},
iz(a){var s,r,q,p,o=this
if(o.nh(a))return
o.iS(a)
try{s=o.b.$1(a)
if(!o.nh(s)){q=A.E1(a,null,o.glM())
throw A.b(q)}o.a.pop()}catch(p){r=A.F(p)
q=A.E1(a,r,o.glM())
throw A.b(q)}},
nh(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xi(a)
return!0}else if(a===!0){r.b3("true")
return!0}else if(a===!1){r.b3("false")
return!0}else if(a==null){r.b3("null")
return!0}else if(typeof a=="string"){r.b3('"')
r.ni(a)
r.b3('"')
return!0}else if(t.j.b(a)){r.iS(a)
r.xg(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.iS(a)
s=r.xh(a)
r.a.pop()
return s}else return!1},
xg(a){var s,r,q=this
q.b3("[")
s=J.M(a)
if(s.gW(a)){q.iz(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b3(",")
q.iz(s.h(a,r))}}q.b3("]")},
xh(a){var s,r,q,p,o=this,n={}
if(a.gE(a)){o.b3("{}")
return!0}s=a.gm(a)*2
r=A.af(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a7(0,new A.zG(n,r))
if(!n.b)return!1
o.b3("{")
for(p='"';q<s;q+=2,p=',"'){o.b3(p)
o.ni(A.D(r[q]))
o.b3('":')
o.iz(r[q+1])}o.b3("}")
return!0}}
A.zG.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:36}
A.zE.prototype={
glM(){var s=this.c
return s instanceof A.a2?s.l(0):null},
xi(a){this.c.iy(B.x.l(a))},
b3(a){this.c.iy(a)},
iA(a,b,c){this.c.iy(B.a.A(a,b,c))},
ao(a){this.c.ao(a)}}
A.m9.prototype={
gaO(){return"iso-8859-1"},
jT(a){return B.ct.v(a)}}
A.ma.prototype={}
A.ne.prototype={
t(a,b){this.bL(b,0,b.length,!1)}}
A.A9.prototype={
ao(a){var s=this.a,r=A.bt(a)
if((s.a+=r).length>16)this.j5()},
iy(a){if(this.a.a.length!==0)this.j5()
this.b.t(0,a)},
j5(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.k7.prototype={
q(){},
bL(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bt(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
t(a,b){this.a.a+=b}}
A.oO.prototype={
t(a,b){this.a.a.aA(b)},
bL(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aA(a)
else r.aA(B.a.A(a,b,c))
if(d)r.aQ()},
q(){this.a.a.aQ()}}
A.Ak.prototype={
q(){var s,r,q,p=this.c
this.a.v6(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bL(q,0,q.length,!0)}else r.q()},
t(a,b){this.bL(b,0,J.aq(b),!1)},
bL(a,b,c,d){var s,r=this.c,q=this.a.cW(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bL(s,0,s.length,!1)
r.a=""
return}}}
A.nL.prototype={
gaO(){return"utf-8"},
u1(a,b){return new A.dj((b===!0?B.dP:B.aL).a).cW(a,0,null,!0)},
f_(a){return this.u1(a,null)},
jT(a){return B.e.v(a)}}
A.nM.prototype={
v(a){var s,r,q=A.bd(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.oZ(s)
if(r.lu(a,0,q)!==q)r.hu()
return B.f.T(s,0,r.b)},
bX(a){return new A.An(new A.hq(a),new Uint8Array(1024))}}
A.oZ.prototype={
hu(){var s=this,r=s.c,q=s.b,p=s.b=q+1
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
return!0}else{o.hu()
return!1}},
lu(a,b,c){var s,r,q,p,o,n,m,l,k=this
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
k.hu()}else if(o<=2047){n=k.b
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
A.An.prototype={
q(){if(this.a!==0){this.bL("",0,0,!0)
return}this.d.a.q()},
bL(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mi(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lu(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hu()
else n.a=a.charCodeAt(b);++b}s.t(0,B.f.T(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jv.prototype={
bX(a){return new A.Ak(new A.dj(this.a),new A.oO(a),new A.a2(""))}}
A.dj.prototype={
cW(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bd(b,c,J.aq(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Kn(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Km(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.iY(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Fg(p)
m.b=0
throw A.b(A.a8(n,a,q+m.c))}return o},
iY(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.N(b+c,2)
r=q.iY(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.iY(a,s,c,d)}return q.u4(a,b,c,d)},
v6(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bt(65533)
a.a+=s}else throw A.b(A.a8(A.Fg(77),null,null))},
u4(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a2(""),g=b+1,f=a[b]
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
h.a+=q}else{q=A.dQ(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bt(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.p4.prototype={}
A.aJ.prototype={
bB(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bG(p,r)
return new A.aJ(p===0?!1:s,r,p)},
pD(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.ci()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bG(s,q)
return new A.aJ(n===0?!1:o,q,n)},
pG(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ci()
s=k-a
if(s<=0)return l.a?$.Di():$.ci()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bG(s,q)
m=new A.aJ(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fQ(0,$.f8())
return m},
bC(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.Q("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.N(b,16)
if(B.c.ak(b,16)===0)return n.pD(r)
q=s+r+1
p=new Uint16Array(q)
A.EM(n.b,s,b,p)
s=n.a
o=A.bG(q,p)
return new A.aJ(o===0?!1:s,p,o)},
dA(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.Q("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.N(b,16)
q=B.c.ak(b,16)
if(q===0)return j.pG(r)
p=s-r
if(p<=0)return j.a?$.Di():$.ci()
o=j.b
n=new Uint16Array(p)
A.JE(o,s,b,n)
s=j.a
m=A.bG(p,n)
l=new A.aJ(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bC(1,q)-1)>>>0!==0)return l.fQ(0,$.f8())
for(k=0;k<r;++k)if(o[k]!==0)return l.fQ(0,$.f8())}return l},
a0(a,b){var s,r=this.a
if(r===b.a){s=A.yl(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iO(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iO(p,b)
if(o===0)return $.ci()
if(n===0)return p.a===b?p:p.bB(0)
s=o+1
r=new Uint16Array(s)
A.JA(p.b,o,a.b,n,r)
q=A.bG(s,r)
return new A.aJ(q===0?!1:b,r,q)},
fR(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ci()
s=a.c
if(s===0)return p.a===b?p:p.bB(0)
r=new Uint16Array(o)
A.o5(p.b,o,a.b,s,r)
q=A.bG(o,r)
return new A.aJ(q===0?!1:b,r,q)},
fH(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iO(b,r)
if(A.yl(q.b,p,b.b,s)>=0)return q.fR(b,r)
return b.fR(q,!r)},
fQ(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bB(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iO(b,r)
if(A.yl(q.b,p,b.b,s)>=0)return q.fR(b,r)
return b.fR(q,!r)},
bg(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ci()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.EN(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bG(s,p)
return new A.aJ(m===0?!1:n,p,m)},
pC(a){var s,r,q,p
if(this.c<a.c)return $.ci()
this.ln(a)
s=$.CB.bt()-$.jG.bt()
r=A.CD($.CA.bt(),$.jG.bt(),$.CB.bt(),s)
q=A.bG(s,r)
p=new A.aJ(!1,r,q)
return this.a!==a.a&&q>0?p.bB(0):p},
rt(a){var s,r,q,p=this
if(p.c<a.c)return p
p.ln(a)
s=A.CD($.CA.bt(),0,$.jG.bt(),$.jG.bt())
r=A.bG($.jG.bt(),s)
q=new A.aJ(!1,s,r)
if($.CC.bt()>0)q=q.dA(0,$.CC.bt())
return p.a&&q.c>0?q.bB(0):q},
ln(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.EJ&&a.c===$.EL&&c.b===$.EI&&a.b===$.EK)return
s=a.b
r=a.c
q=16-B.c.gmr(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.EH(s,r,q,p)
n=new Uint16Array(b+5)
m=A.EH(c.b,b,q,n)}else{n=A.CD(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.CE(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.yl(n,m,j,i)>=0){g&2&&A.H(n)
n[m]=1
A.o5(n,h,j,i,n)}else{g&2&&A.H(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.o5(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.JB(l,n,e);--k
A.EN(d,f,0,n,k,o)
if(n[e]<d){i=A.CE(f,o,k,j)
A.o5(n,h,j,i,n)
while(--d,n[e]<d)A.o5(n,h,j,i,n)}--e}$.EI=c.b
$.EJ=b
$.EK=s
$.EL=r
$.CA.b=n
$.CB.b=h
$.jG.b=o
$.CC.b=q},
gI(a){var s,r,q,p=new A.ym(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.yn().$1(s)},
R(a,b){if(b==null)return!1
return b instanceof A.aJ&&this.a0(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.j([],t.s)
m=n.a
r=m?n.bB(0):n
while(r.c>1){q=$.Dh()
if(q.c===0)A.t(B.bG)
p=r.rt(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pC(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bT(s,t.hF).ed(0)},
$iaw:1}
A.ym.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:72}
A.yn.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:77}
A.ol.prototype={
mp(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mC(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.Aj.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:49}
A.rj.prototype={
$0(){var s=this
return A.t(A.Q("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:32}
A.aW.prototype={
iQ(a){var s=1000,r=B.c.ak(a,s),q=B.c.N(a-r,s),p=this.b+r,o=B.c.ak(p,s),n=this.c
return new A.aW(A.lo(this.a+B.c.N(p-o,s)+q,o,n),o,n)},
R(a,b){if(b==null)return!1
return b instanceof A.aW&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.c6(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
ka(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a0(a,b){var s=B.c.a0(this.a,b.a)
if(s!==0)return s
return B.c.a0(this.b,b.b)},
wL(){var s=this
if(s.c)return s
return new A.aW(s.a,s.b,!0)},
l(a){var s=this,r=A.HR(A.Ci(s)),q=A.ln(A.Cg(s)),p=A.ln(A.vQ(s)),o=A.ln(A.Ce(s)),n=A.ln(A.Cf(s)),m=A.ln(A.Ch(s)),l=A.DI(A.Ee(s)),k=s.b,j=k===0?"":A.DI(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iaw:1}
A.aD.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aD&&this.a===b.a},
gI(a){return B.c.gI(this.a)},
a0(a,b){return B.c.a0(this.a,b.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.c.N(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.c.N(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.c.N(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.ig(B.c.l(n%1e6),6,"0")},
$iaw:1}
A.z1.prototype={
l(a){return this.a4()}}
A.ae.prototype={
gcl(){return A.IK(this)}}
A.kM.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ir(s)
return"Assertion failed"}}
A.dc.prototype={}
A.bz.prototype={
gj0(){return"Invalid argument"+(!this.a?"(s)":"")},
gj_(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.gj0()+q+o
if(!s.a)return n
return n+s.gj_()+": "+A.ir(s.gk9())},
gk9(){return this.b}}
A.d7.prototype={
gk9(){return this.b},
gj0(){return"RangeError"},
gj_(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.iB.prototype={
gk9(){return this.b},
gj0(){return"RangeError"},
gj_(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id7:1,
gm(a){return this.f}}
A.cU.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.nE.prototype={
l(a){return"UnimplementedError: "+this.a},
$icU:1}
A.bl.prototype={
l(a){return"Bad state: "+this.a}}
A.l7.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ir(s)+"."}}
A.mw.prototype={
l(a){return"Out of Memory"},
gcl(){return null},
$iae:1}
A.jo.prototype={
l(a){return"Stack Overflow"},
gcl(){return null},
$iae:1}
A.oj.prototype={
l(a){return"Exception: "+this.a},
$iG:1}
A.bj.prototype={
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
gke(){return this.a},
gfO(){return this.b},
gar(){return this.c}}
A.lZ.prototype={
gcl(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iae:1,
$icU:1,
$iG:1}
A.o.prototype={
hD(a,b){return A.fd(this,A.n(this).i("o.E"),b)},
ce(a,b,c){return A.dG(this,b,A.n(this).i("o.E"),c)},
dt(a,b){return new A.al(this,b,A.n(this).i("al<o.E>"))},
ky(a,b){return new A.bF(this,b.i("bF<0>"))},
F(a,b){var s
for(s=this.gu(this);s.k();)if(J.x(s.gn(),b))return!0
return!1},
v8(a,b,c){var s,r
for(s=this.gu(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
v9(a,b,c){return this.v8(0,b,c,t.z)},
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
bM(a,b){var s
for(s=this.gu(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
cM(a,b){var s=A.n(this).i("o.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
er(a){return this.cM(0,!0)},
fC(a){return A.d2(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gE(a){return!this.gu(this).k()},
gW(a){return!this.gE(this)},
cL(a,b){return A.Er(this,b,A.n(this).i("o.E"))},
bi(a,b){return A.Eo(this,b,A.n(this).i("o.E"))},
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
if(r.k())throw A.b(A.iE())
return s},
f9(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a8(a,b){var s,r
A.bc(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lX(b,b-r,this,null,"index"))},
l(a){return A.Id(this,"(",")")}}
A.S.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gI(a){return A.k.prototype.gI.call(this,0)},
l(a){return"null"}}
A.k.prototype={$ik:1,
R(a,b){return this===b},
gI(a){return A.ez(this)},
l(a){return"Instance of '"+A.mE(this)+"'"},
gaj(a){return A.dp(this)},
toString(){return this.l(this)}}
A.oQ.prototype={
l(a){return""},
$iaG:1}
A.jp.prototype={
guL(){var s=this.gmE()
if($.ky()===1e6)return s
return s*1000},
gmD(){var s=this.gmE()
if($.ky()===1000)return s
return B.c.N(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mF.$0()-r)
s.b=null}},
gmE(){var s=this.b
if(s==null)s=$.mF.$0()
return s-this.a}}
A.jg.prototype={
gu(a){return new A.mV(this.a)},
ga1(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.y("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.Fp(r,s)}return s}}
A.mV.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.Fp(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a2.prototype={
gm(a){return this.a.length},
iy(a){var s=A.r(a)
this.a+=s},
ao(a){var s=A.bt(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.xz.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:133}
A.kf.prototype={
gm7(){var s,r,q,p,o=this,n=o.w
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
gw9(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ae(s,1)
r=s.length===0?B.q:A.fC(new A.X(A.j(s.split("/"),t.s),A.Md(),t.iZ),t.N)
q.x!==$&&A.BG()
p=q.x=r}return p},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.a.gI(r.gm7())
r.y!==$&&A.BG()
r.y=s
q=s}return q},
gkx(){return this.b},
gdf(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ad(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfm(){var s=this.d
return s==null?A.F5(this.a):s},
gfs(){var s=this.f
return s==null?"":s},
ghU(){var s=this.r
return s==null?"":s},
vF(a){var s=this.a
if(a.length!==s.length)return!1
return A.KA(a,s,0)>=0},
fw(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.CM(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.Af(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.Ag(null,0,0,a)
else k=j.f
return A.kg(b,q,o,p,l,k,j.r)},
kq(a){return this.fw(a,null)},
n8(a){return this.fw(null,a)},
lI(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ad(b,"../",r);){r+=3;++s}q=B.a.dh(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.i7(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dm(a,q+1,null,B.a.ae(b,r-3*s))},
bT(a){return this.fz(A.nK(a))},
fz(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb_().length!==0)return a
else{s=h.a
if(a.gk0()){r=a.n8(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmL())m=a.gi3()?a.gfs():h.f
else{l=A.Kl(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gk_()?k+A.eY(a.gbp()):k+A.eY(h.lI(B.a.ae(n,k.length),a.gbp()))}else if(a.gk_())n=A.eY(a.gbp())
else if(n.length===0)if(p==null)n=s.length===0?a.gbp():A.eY(a.gbp())
else n=A.eY("/"+a.gbp())
else{j=h.lI(n,a.gbp())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.eY(j)
else n=A.CO(j,!r||p!=null)}m=a.gi3()?a.gfs():null}}}i=a.gk5()?a.ghU():null
return A.kg(s,q,p,o,n,m,i)},
gk0(){return this.c!=null},
gi3(){return this.f!=null},
gk5(){return this.r!=null},
gmL(){return this.e.length===0},
gk_(){return B.a.S(this.e,"/")},
ku(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gdf()!=="")A.t(A.Y(u.Q))
s=r.gw9()
A.Ke(s,!1)
q=A.x1(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gm7()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb_())if(p.c!=null===b.gk0())if(p.b===b.gkx())if(p.gdf()===b.gdf())if(p.gfm()===b.gfm())if(p.e===b.gbp()){r=p.f
q=r==null
if(!q===b.gi3()){if(q)r=""
if(r===b.gfs()){r=p.r
q=r==null
if(!q===b.gk5()){s=q?"":r
s=s===b.ghU()}}}}return s},
$inI:1,
gb_(){return this.a},
gbp(){return this.e}}
A.Ai.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.oY(1,a,B.o,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.oY(1,b,B.o,!0)
s.a+=r}},
$S:135}
A.Ah.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:49}
A.xy.prototype={
gng(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.ca(m,"?",s)
q=m.length
if(r>=0){p=A.kh(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.oe("data","",n,n,A.kh(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cd.prototype={
gk0(){return this.c>0},
gk6(){return this.c>0&&this.d+1<this.e},
gi3(){return this.f<this.r},
gk5(){return this.r<this.a.length},
gk_(){return B.a.ad(this.a,"/",this.e)},
gmL(){return this.e===this.f},
gb_(){var s=this.w
return s==null?this.w=this.pm():s},
pm(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gkx(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gdf(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfm(){var s,r=this
if(r.gk6())return A.aH(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbp(){return B.a.A(this.a,this.e,this.f)},
gfs(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
ghU(){var s=this.r,r=this.a
return s<r.length?B.a.ae(r,s+1):""},
lC(a){var s=this.d+1
return s+a.length===this.e&&B.a.ad(this.a,a,s)},
wA(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cd(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.CM(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb_()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gk6()?h.gfm():g
if(s)o=A.Af(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.Ag(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ae(q,m+1):g
return A.kg(b,p,n,o,l,j,i)},
kq(a){return this.fw(a,null)},
n8(a){return this.fw(null,a)},
bT(a){return this.fz(A.nK(a))},
fz(a){if(a instanceof A.cd)return this.rV(this,a)
return this.m9().fz(a)},
rV(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lC("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lC("443")
if(p){o=r+1
return new A.cd(B.a.A(a.a,0,o)+B.a.ae(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.m9().fz(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cd(B.a.A(a.a,0,r)+B.a.ae(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cd(B.a.A(a.a,0,r)+B.a.ae(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wA()}s=b.a
if(B.a.ad(s,"/",n)){m=a.e
l=A.EY(this)
k=l>0?l:m
o=k-n
return new A.cd(B.a.A(a.a,0,k)+B.a.ae(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ad(s,"../",n))n+=3
o=j-n+1
return new A.cd(B.a.A(a.a,0,j)+"/"+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.EY(this)
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
return new A.cd(B.a.A(h,0,i)+d+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
ku(){var s,r=this,q=r.b
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
R(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
m9(){var s=this,r=null,q=s.gb_(),p=s.gkx(),o=s.c>0?s.gdf():r,n=s.gk6()?s.gfm():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gfs():r
return A.kg(q,p,o,n,k,l,j<m.length?s.ghU():r)},
l(a){return this.a},
$inI:1}
A.oe.prototype={}
A.lx.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.ms.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iG:1}
A.rT.prototype={
$2(a,b){this.a.bU(new A.rR(a),new A.rS(b),t.X)},
$S:139}
A.rR.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:144}
A.rS.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.M0(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.t("Attempting to box non-Dart object.")
s={}
s[$.H4()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:9}
A.Bp.prototype={
$1(a){var s,r,q,p
if(A.FD(a))return a
s=this.a
if(s.J(a))return s.h(0,a)
if(t.f.b(a)){r={}
s.j(0,a,r)
for(s=J.E(a.gK());s.k();){q=s.gn()
r[q]=this.$1(a.h(0,q))}return r}else if(t.e7.b(a)){p=[]
s.j(0,a,p)
B.b.C(p,J.bM(a,this,t.z))
return p}else return a},
$S:34}
A.Bw.prototype={
$1(a){return this.a.aB(a)},
$S:25}
A.Bx.prototype={
$1(a){if(a==null)return this.a.aR(new A.ms(a===undefined))
return this.a.aR(a)},
$S:25}
A.B4.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.FC(a))return a
s=this.a
a.toString
if(s.J(a))return s.h(0,a)
if(a instanceof Date)return new A.aW(A.lo(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.Q("structured clone of RegExp",null))
if(a instanceof Promise)return A.a5(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.u(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aB(o),q=s.gu(o);q.k();)n.push(A.pe(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.M(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:34}
A.zy.prototype={
cI(a){if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
return Math.random()*a>>>0},
mX(){return Math.random()}}
A.zz.prototype={
oG(){var s=self.crypto
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
p=A.ao(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.bL(B.az.gaa(r),q,s))
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
s.c.j(0,s.a.$1(b),new A.S(b,c,s.$ti.i("S<a3.K,a3.V>")))},
C(a,b){b.a7(0,new A.pL(this))},
c5(a,b,c){return this.c.c5(0,b,c)},
J(a){var s=this
if(!s.jf(a))return!1
return s.c.J(s.a.$1(s.$ti.i("a3.K").a(a)))},
gab(){var s=this.c,r=A.n(s).i("aM<1,2>")
return A.dG(new A.aM(s,r),new A.pM(this),r.i("o.E"),this.$ti.i("S<a3.K,a3.V>"))},
a7(a,b){this.c.a7(0,new A.pN(this,b))},
gE(a){return this.c.a===0},
gW(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("ar<2>")
return A.dG(new A.ar(s,r),new A.pO(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aT(a,b,c,d){return this.c.aT(0,new A.pP(this,b,c,d),c,d)},
gaX(){var s=this.c,r=A.n(s).i("ar<2>")
return A.dG(new A.ar(s,r),new A.pQ(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.uL(this)},
jf(a){return this.$ti.i("a3.K").b(a)},
$iI:1}
A.pL.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.pM.prototype={
$1(a){var s=a.b
return new A.S(s.a,s.b,this.a.$ti.i("S<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("S<a3.K,a3.V>(S<a3.C,S<a3.K,a3.V>>)")}}
A.pN.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,S<a3.K,a3.V>)")}}
A.pO.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(S<a3.K,a3.V>)")}}
A.pP.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.V(this.c).V(this.d).i("S<1,2>(a3.C,S<a3.K,a3.V>)")}}
A.pQ.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(S<a3.K,a3.V>)")}}
A.lq.prototype={
Y(a,b){return J.x(a,b)},
ac(a){return J.a7(a)}}
A.iF.prototype={
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
A.es.prototype={
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
A.hN.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.C1(s.guS(),s.gvA(),s.gvG(),A.n(this).i("hN.E"),t.S)
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
A.h1.prototype={}
A.hD.prototype={
gI(a){var s=this.a
return 3*s.a.ac(this.b)+7*s.b.ac(this.c)&2147483647},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.hD){s=this.a
s=s.a.Y(this.b,b.b)&&s.b.Y(this.c,b.c)}else s=!1
return s}}
A.iP.prototype={
Y(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.C1(null,null,null,t.mB,t.S)
for(r=J.E(a.gK());r.k();){q=r.gn()
p=new A.hD(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gK());r.k();){q=r.gn()
p=new A.hD(this,q,b.h(0,q))
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
A.lp.prototype={
Y(a,b){var s,r=this
if(a instanceof A.cq)return b instanceof A.cq&&new A.h1(r,t.cu).Y(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iP(r,r,t.a3).Y(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.es(r,t.hI).Y(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iF(r,t.nZ).Y(a,b)
return J.x(a,b)},
ac(a){var s=this
if(a instanceof A.cq)return new A.h1(s,t.cu).ac(a)
if(t.f.b(a))return new A.iP(s,s,t.a3).ac(a)
if(t.j.b(a))return new A.es(s,t.hI).ac(a)
if(t.e7.b(a))return new A.iF(s,t.nZ).ac(a)
return J.a7(a)},
vH(a){return!0}}
A.mr.prototype={
sm(a,b){A.E9()},
t(a,b){return A.E9()}}
A.nH.prototype={
j(a,b,c){return A.Jh()}}
A.ck.prototype={
R(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.ck){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gI(a){return A.vb(this.a)},
l(a){return A.ap(this.a)}}
A.c2.prototype={
t(a,b){if(this.a!=null)throw A.b(A.y("add may only be called once."))
this.a=b},
q(){if(this.a==null)throw A.b(A.y("add must be called once."))}}
A.lR.prototype={
v(a){var s=new A.c2(),r=A.cX(s)
r.t(0,a)
r.q()
r=s.a
r.toString
return r}}
A.rY.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.y("Hash.add() called after close()."))
s.r=s.r+J.aq(b)
s.kY(b)},
kY(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.pn(B.f.gaa(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.M(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ah(i,j,n,a,o)
k.e=n
return}B.f.ah(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.H(s)
s[m]=l;++m}while(m<q)
k.wR(s)}},
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
n=J.pn(B.f.gaa(q))
m=B.c.N(p,4294967296)
n.$flags&2&&A.H(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kY(q)
s=l.a
s.t(0,new A.ck(l.p5()))
s.q()},
p5(){var s,r,q,p,o,n,m
if(B.aR===$.kx())return J.Hh(B.y.gaa(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.pn(B.f.gaa(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.H(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.oJ.prototype={
bX(a){var s=new Uint32Array(A.b7(A.j([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hq(new A.oK(s,r,a,q,new Uint32Array(16)))}}
A.zW.prototype={
wR(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cz[q]+s[q]>>>0)>>>0)>>>0
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
A.oK.prototype={}
A.kF.prototype={
gI(a){return A.c6(B.dA,this.d,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.li&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dp(s).l(0)+".with"+s.d*8+"bits()"
return A.dp(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.pW.prototype={}
A.iO.prototype={
gI(a){return B.u.ac(this.a)},
R(a,b){if(b==null)return!1
return b instanceof A.iO&&B.u.Y(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.jj.prototype={
l(a){return A.dp(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iG:1}
A.uJ.prototype={
l(a){return A.dp(this).l(0)+"()"}}
A.ji.prototype={
gI(a){return(B.u.ac(this.b.a)^B.u.ac(this.c)^B.u.ac(this.a))>>>0},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.ji){s=B.u.Y(this.b.a,b.b.a)
s=s&&B.u.Y(this.c,b.c)&&B.u.Y(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.wH.prototype={}
A.jk.prototype={
ge3(){return this.b},
gI(a){var s=A.ez(B.dK),r=B.u.ac(this.ge3())
return(s^r)>>>0},
R(a,b){if(b==null)return!1
return b instanceof A.jk&&B.u.Y(this.ge3(),b.ge3())},
l(a){return"SecretKeyData(...)"}}
A.n_.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.li.prototype={
u7(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge3().gm(0),f=this.d
if(g!==f)throw A.b(A.az(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.FX(c)
r=new Uint32Array(4)
A.pb(r,0,r,0,s)
r[0]=A.bw(r[0])
r[1]=A.bw(r[1])
r[2]=A.bw(r[2])
r[3]=A.bw(r[3])
q=A.DH(r,a.c)
p=J.Dm(B.f.gaa(q),0,null)
o=a.a
n=B.u.Y(B.aP.l4(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.jj())
A.AX(q,1)
n=o.length
m=B.c.N(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pb(l,k,p,0,s)
A.AX(q,1)}j=J.bL(B.y.gaa(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.H(j)
j[k]=i^h}return j},
uP(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge3().gm(0),f=this.d
if(g!==f)throw A.b(A.az(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.FX(d)
r=new Uint32Array(4)
A.pb(r,0,r,0,s)
r[0]=A.bw(r[0])
r[1]=A.bw(r[1])
r[2]=A.bw(r[2])
r[3]=A.bw(r[3])
q=A.DH(r,c)
p=J.Dm(B.f.gaa(q),0,null)
o=new Uint32Array(A.b7(p))
A.AX(q,1)
n=a.length
m=(B.c.N(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.pb(l,k,p,0,s)
A.AX(q,1)}j=J.bL(B.y.gaa(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.H(j)
j[k]=i^h}return new A.ji(j,B.aP.l4(j,b,s,r,o),c)}}
A.qY.prototype={
l(a){return"DartGcm()"},
l4(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lj(n,d,b)
A.lj(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.N(s,o),!1)
q.setUint32(4,B.c.ak(s,o),!1)
q.setUint32(8,B.c.N(r,o),!1)
q.setUint32(12,B.c.ak(r,o),!1)
A.lj(n,d,J.bL(B.az.gaa(q),0,null))
p=new Uint32Array(4)
A.pb(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iO(J.bL(B.y.gaa(n),0,null))}}
A.oc.prototype={}
A.od.prototype={}
A.qJ.prototype={}
A.qZ.prototype={}
A.yR.prototype={
Y(a,b){var s,r,q=J.M(a),p=J.M(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ac(a){var s,r,q,p,o
for(s=J.M(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.ak(q,16)
r=(r^B.c.rU(p,o)^B.c.m4(p,16-o))>>>0}return r}}
A.mQ.prototype={}
A.kS.prototype={$iBR:1}
A.kT.prototype={
hT(){if(this.w)throw A.b(A.y("Can't finalize a finalized Request."))
this.w=!0
return B.bz},
l(a){return this.a+" "+this.b.l(0)}}
A.kU.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:180}
A.kV.prototype={
$1(a){return B.a.gI(a.toLowerCase())},
$S:183}
A.pF.prototype={
ow(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.Q("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.Q("Invalid content length "+A.r(s)+".",null))}}}
A.l_.prototype={
b4(a){return this.o3(a)},
o3(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b4=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.DD("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hT().wK(),$async$b4)
case 3:k=b6
p=5
j=b4
i=null
h=!1
g=null
a6=b4.b
a7=a6.l(0)
a8=!J.by(k)?k:null
a9=t.N
f=A.u(a9,t.K)
e=b4.gmv()
d=null
if(e!=null){d=e
J.bY(f,"content-length",d)}for(b0=b4.r,b0=new A.aM(b0,A.n(b0).i("aM<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.bY(f,c.a,c.b)}f=A.pg(f)
f.toString
A.bf(f)
b0=l.signal
s=8
return A.a(A.a5(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b4)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.jb(a,null):null
if(a0==null&&a!=null){f=A.DD("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.u(a9,a9)
b.headers.forEach(A.p6(new A.pI(a1)))
f=A.Kq(b4,b)
a4=b.status
a6=a1
a8=a0
A.nK(b.url)
a9=b.statusText
f=new A.nd(A.Gx(f),a4,a8,a6)
f.ow(a4,a8,a6,!1,!0,a9,b4)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b3=o.pop()
a2=A.F(b3)
a3=A.ad(b3)
A.FH(a2,a3,b4)
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
A.pI.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:187}
A.AE.prototype={
$1(a){return A.hV(this.a,this.b,a)},
$S:193}
A.AN.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.an()}},
$S:0}
A.AO.prototype={
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
n=A.F(k)
m=A.ad(k)
if(!o.a.b)A.FH(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.ds.prototype={
wK(){var s=new A.w($.C,t.jz),r=new A.aI(s,t.iq),q=new A.o7(new A.pK(r),new Uint8Array(1024))
this.a9(q.gtx(q),!0,q.ge5(),r.gtU())
return s}}
A.pK.prototype={
$1(a){return this.a.aB(new Uint8Array(A.b7(a)))},
$S:18}
A.ee.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iG:1}
A.mk.prototype={
gm(a){return this.b}}
A.v3.prototype={
gmv(){var s,r,q,p=this,o={},n=o.a=0
p.x.a7(0,new A.v4(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.q)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.lA(q)).length+q.b+2)}return o.a+2+70+4},
hT(){var s=this,r=s.oY()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kQ()
return new A.ds(s.bk(r))},
bk(a){return this.pZ(a)},
pZ(a){var $async$bk=A.c(function(b,c){switch(b){case 2:n=q
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
return A.bU(A.dY(e),$async$bk,r)
case 5:k=l.b
j=$.BL()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.Dj()
s=6
q=[1]
return A.bU(A.dY(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bk,r)
case 6:s=7
q=[1]
return A.bU(A.dY(B.e.v(k)),$async$bk,r)
case 7:s=8
q=[1]
return A.bU(A.dY(B.b3),$async$bk,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bU(A.dY(e),$async$bk,r)
case 12:s=13
q=[1]
return A.bU(A.dY(B.e.v(m.lA(g))),$async$bk,r)
case 13:if(g.f)A.t(A.y("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bU(A.JQ(g.e),$async$bk,r)
case 14:s=15
q=[1]
return A.bU(A.dY(B.b3),$async$bk,r)
case 15:case 10:f.length===l||(0,A.q)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bU(A.dY(d),$async$bk,r)
case 16:case 1:return A.bU(null,0,r)
case 2:return A.bU(o.at(-1),1,r)}})
var s=0,r=A.FB($async$bk,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.FQ(r)},
qh(a,b){var s,r=$.BL()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.Dj()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lA(a){var s=a.d.l(0),r=$.BL(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
oY(){var s,r=J.DZ(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cP[$.GH().cI(66)]
return"dart-http-boundary-"+A.dQ(r,0,null)}}
A.v4.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.qh(a,b)).length+B.e.v(b).length+2)},
$S:27}
A.wy.prototype={
gmv(){return this.y.length},
gjU(){var s,r
if(this.gcp()==null||!this.gcp().c.a.J("charset"))return B.o
s=this.gcp().c.a.h(0,"charset")
s.toString
r=A.HV(s)
return r==null?A.t(A.a8('Unsupported encoding "'+s+'".',null,null)):r},
hT(){this.kQ()
return new A.ds(A.Cr(this.y,t.L))},
gcp(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.Is(s)},
scp(a){this.r.j(0,"content-type",a.l(0))},
p8(){if(!this.w)return
throw A.b(A.y("Can't modify a finalized Request."))}}
A.jr.prototype={}
A.nd.prototype={}
A.ig.prototype={}
A.fD.prototype={
l(a){var s=new A.a2(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a7(0,new A.uP(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.uN.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.x2(null,j),h=$.Hg()
i.iH(h)
s=$.Hf()
i.f6(s)
r=i.gkc().h(0,0)
r.toString
i.f6("/")
i.f6(s)
q=i.gkc().h(0,0)
q.toString
i.iH(h)
p=t.N
o=A.u(p,p)
for(;;){p=i.d=B.a.eh(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gM():n
if(!m)break
p=i.d=h.eh(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gM()
i.f6(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.f6("=")
n=i.d=s.eh(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gM()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.Mm(i)
n=i.d=h.eh(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gM()
o.j(0,p,k)}i.uY()
return A.Cb(r,q,o)},
$S:197}
A.uP.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.Hd()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.Gu(b,$.H2(),new A.uO(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:27}
A.uO.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:53}
A.Bc.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:53}
A.pE.prototype={
dr(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dr=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eF(),$async$dr)
case 5:o=b
s=o.gn6()<0.25?6:7
break
case 6:s=8
return A.a(p.js(o),$async$dr)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gn6()<0.25?9:10
break
case 9:s=11
return A.a(p.js(m),$async$dr)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dr,r)},
io(){var s=0,r=A.h(t.q),q,p=this
var $async$io=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eF(),$async$io)
case 3:q=p.js(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$io,r)},
eF(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eF=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.c7():j
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
js(a){var s=this.c
if(s!=null)return s
return this.c=this.fX(a)},
fX(a){return this.pF(a)},
pF(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fX=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.y("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.ip(l),$async$fX)
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
return A.f($async$fX,r)}}
A.j8.prototype={
oy(a,b,c,d,e,f,g,h,i){var s=this,r=new A.pE(s.c)
s.y!==$&&A.cg()
s.y=r
s.z!==$&&A.cg()
s.z=new A.vt(s.x,s.b,r,s.a)},
ih(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$ih=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.at){s=1
break}n.at=!0
if(n.ax){s=1
break}p=4
m=n.z
m===$&&A.v()
s=7
return A.a(m.ij(),$async$ih)
case 7:n.as=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.F(k)
if(m instanceof A.cG){n.as=!1
n.ax=!0}else if(m instanceof A.bu)n.at=n.as=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ih,r)},
fP(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.Q!=null){s=1
break}o=p.z
o===$&&A.v()
n=A.IG(B.c6,o,A.j(["data"],t.s),p.gqL(),p.gqI())
p.Q=n
s=3
return A.a(n.az(),$async$fP)
case 3:case 1:return A.e(q,r)}})
return A.f($async$fP,r)},
ey(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ey=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.Q
o=o==null?null:o.aF()
s=2
return A.a(o instanceof A.w?o:A.bv(o,t.H),$async$ey)
case 2:q.Q=null
for(o=q.ch,p=new A.aR(o,o.r,o.e,A.n(o).i("aR<2>"));p.k();)p.d.D()
o.am(0)
q.CW.am(0)
return A.e(null,r)}})
return A.f($async$ey,r)},
qJ(){var s,r,q,p
for(s=this.cx,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
this.eC(p,new A.cC(p,B.a9,null))}},
qM(a){var s=a.b,r=s.b
if(!B.b.F(this.cx,r))return
if(a.a==="delete"){this.hq(s)
return}this.eC(r,new A.cC(r,B.a9,s))},
hq(a){return this.tf(a)},
tf(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hq=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.F(n.cx,j)){s=1
break}m=null
p=4
l=n.z
l===$&&A.v()
s=7
return A.a(l.bW(a.a),$async$hq)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.F(i)
if(l instanceof A.cK){n.eC(j,new A.cC(j,B.aO,null))
s=1
break}else if(l instanceof A.bu){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eC(j,new A.cC(j,B.aO,null))
s=1
break}n.eC(j,new A.cC(j,B.a9,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hq,r)},
eC(a,b){var s,r,q=this
q.CW.j(0,a,b)
s=q.ch
r=s.h(0,a)
if(r!=null)r.D()
s.j(0,a,A.cR(q.d,new A.vp(q,a)))},
wT(a,b){return this.iu(null,a,null,b,null)},
iu(a,b,c,d,e){return this.wW(a,b,c,d,e)},
wV(a,b){return this.iu(null,a,null,null,b)},
wW(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$iu=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aT(0,new A.vq(p),t.N,t.co)
n=p.z
n===$&&A.v()
q=n.it(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iu,r)},
$iCt:1}
A.vp.prototype={
$0(){var s,r=this.a,q=this.b
r.ch.H(0,q)
s=r.CW.H(0,q)
if(s!=null&&(r.ay.c&4)===0)r.ay.t(0,s)},
$S:0}
A.vq.prototype={
$2(a,b){return new A.S(a,new A.dx("imgs+",b.a,b.b,b.c),t.ia)},
$S:212}
A.mD.prototype={}
A.vK.prototype={
hH(a,b,c,d){return this.tW(a,b,c,d)},
tW(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$hH=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.A1(d)
n=t.hw
m=A.dO(null,null,n)
l=t.N
k=$.C.h(0,B.ds)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.l_(A.j([],t.kG))
j=new A.vr(j)
p=new A.mD(c,B.aU,a,o,B.aZ,200,25,b,null,j,m,A.u(l,t.hU),A.u(l,n))
p.oy(a,B.aU,b,25,200,null,B.aZ,o,null)
s=3
return A.a(p.fP(),$async$hH)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
hN(a){return this.uE(a)},
uE(a){var s=0,r=A.h(t.H),q
var $async$hN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ey(),$async$hN)
case 2:a.ey()
q=a.ay
if((q.c&4)===0)q.q()
a.x.a.q()
return A.e(null,r)}})
return A.f($async$hN,r)}}
A.A1.prototype={
c7(){var s=0,r=A.h(t.q),q,p=this,o
var $async$c7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c7(),$async$c7)
case 3:q=o.Eu(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c7,r)},
ip(a){return this.wv(a)},
wv(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$ip=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c7(),$async$ip)
case 3:q=o.Eu(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ip,r)}}
A.vB.prototype={}
A.vt.prototype={
fg(a,b,c,d,e,f){return this.vM(a,b,c,d,e,f)},
vM(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$fg=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.N1(a,e,c,"store")
else{n=d==null?"1970-01-01 00:00:00.000Z":d
m=A.z(a,"'","\\'")
l="(store="+("'"+m+"'")+" && updated>="+("'"+A.z(n,"'","\\'")+"'")+")"
if(c==null)o=l
else o=l+" && id>"+("'"+A.z(c,"'","\\'")+"'")}n=t.N
n=A.u(n,n)
n.j(0,"filter",o)
n.j(0,"sort",h?"updated,id":"id")
n.j(0,"perPage",""+B.c.is(B.c.bN(f,1,500)))
n.j(0,"skipTotal","1")
if(b!=null)n.j(0,"fields",B.b.B(b,","))
k=p.b.bT("/api/collections/data/records").kq(n)
s=3
return A.a(p.m1("GET",k),$async$fg)
case 3:j=a0
p.d_(j,A.j([200],t.t),k)
i=p.cY(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bk("List response has no items array."))
h=J.bM(i,new A.vA(p),t.Q)
h=A.O(h,h.$ti.i("Z.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fg,r)},
bW(a){return this.nX(a)},
nX(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bW=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.jq(a)
s=3
return A.a(p.m1("GET",o),$async$bW)
case 3:n=c
if(n.a===404)throw A.b(A.IE("not found"))
p.d_(n,A.j([200],t.t),o)
q=p.dO(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bW,r)},
hJ(a,b,c){return this.u0(a,b,c)},
u0(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hJ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bT("/api/collections/data/records")
s=3
return A.a(p.eU("POST",o,B.h.a6(A.m(["id",b,"store",c,"data",B.h.aw(a,null)],t.N,t.z),null)),$async$hJ)
case 3:n=e
if(n.a===400&&p.ql(n))throw A.b(new A.fo(p.eE(n)))
p.d_(n,A.j([200,201],t.t),o)
q=p.dO(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hJ,r)},
ql(a){var s,r,q,p,o,n
try{s=this.cY(a)
r=J.R(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.x(p,"validation_not_unique")||J.x(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fD(a,b,c){return this.wS(a,b,c)},
wS(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fD=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.jq(c)
s=3
return A.a(p.eU("PATCH",o,B.h.a6(A.m(["data",B.h.aw(b,null)],t.N,t.z),null)),$async$fD)
case 3:n=e
p.d_(n,A.j([200],t.t),o)
q=p.dO(p.cY(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fD,r)},
it(a,b,c,d,e){return this.wU(a,b,c,d,e)},
wU(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$it=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.jq(b)
m=t.N
l=A.u(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a6(d,null))
if(e==null)m=null
else{m=A.n(e).i("ar<2>")
m=A.O(new A.ar(e,m),m.i("o.E"))}s=3
return A.a(p.rN(new A.lU("PATCH",n,B.ay,l,m==null?B.cI:m)),$async$it)
case 3:o=g
p.d_(o,A.j([200],t.t),n)
q=p.dO(p.cY(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$it,r)},
hP(a,b,c){return this.uI(a,b,c)},
uI(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$hP=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.u(l,l)
o=p.b.bT("/api/files/data/"+A.oY(2,b,B.o,!1)+"/"+A.oY(2,a,B.o,!1))
n=l.a===0?o:o.kq(l)
s=3
return A.a(p.qO(new A.eo("GET",n,B.ay,null)),$async$hP)
case 3:m=e
p.d_(new A.cH(m.a,m.b,""),A.j([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
fp(a){return this.wd(a)},
wd(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$fp=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bT("/api/batch")
a3=A.j([],t.ic)
for(o=J.aB(a4),n=o.gu(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.h.aw(j.d,null)],m,l)],m,k))}s=3
return A.a(p.eU("POST",a2,B.h.a6(A.m(["requests",a3],m,t.ew),null)),$async$fp)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.I1(p.eE(i)))
if(a3===400)throw A.b(new A.ea(p.eE(i)))
p.d_(i,A.j([200],t.t),a2)
h=B.h.aw(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.bk("Batch response has no results array."))}else throw A.b(A.bk("Batch response is not a list or envelope."))
g=e}a3=J.M(g)
if(a3.gm(g)!==o.gm(a4))throw A.b(A.bk("Batch response has "+a3.gm(g)+" results for "+o.gm(a4)+" requests."))
d=A.j([],t.g2)
for(n=t.f,c=0;c<o.gm(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.bk("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dn(a)
a0=l.R(a,200)||l.R(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dO(a1):null
k=a0?null:p.pK(b)
j=a0&&n.b(a1)?B.h.a6(a1.h(0,"data"),null):null
d.push(new A.je(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fp,r)},
ij(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$ij=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eU("POST",p.b.bT("/api/batch"),B.h.a6(A.m(["requests",[]],t.N,t.kS),null)),$async$ij)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.Hv(p.eE(o)))
if(n===408||n===429||n>=500)throw A.b(A.Ev("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
jq(a){return this.b.bT("/api/collections/data/records/"+A.oY(2,a,B.o,!1))},
eU(a,b,c){return this.c4(new A.vw(this,a,b,c),new A.vx(),t.w)},
m1(a,b){return this.eU(a,b,null)},
rN(a){return this.c4(new A.vy(this,a),new A.vz(),t.w)},
qO(a){return this.c4(new A.vu(this,a),new A.vv(),t.lI)},
c4(a,b,c){return this.tk(a,b,c,c)},
tk(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c4=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.dr(),$async$c4)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c4)
case 8:l=f
s=J.x(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.io(),$async$c4)
case 11:k=f
s=12
return A.a(a.$1(k.a),$async$c4)
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
i=A.F(g)
if(i instanceof A.dy){j=i
throw A.b(A.Ev(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c4,r)},
jx(a,b,c,d){return this.rL(a,b,c,d)},
rL(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$jx=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.u(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b4(new A.eo(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jx,r)},
d_(a,b,c){if(B.b.F(b,a.a))return
throw A.b(this.qp(a,c))},
qp(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eE(a)
if(401===s)return new A.c0(q)
if(403===s)return new A.cG(q)
if(404===s)return new A.cK(q)
if(408===s||429===s)return new A.eD(r,q)
if(400===s)return new A.fN(q)
if(s>=500)return new A.jl(q)
return new A.fP("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eE(a){var s,r,q,p,o
try{s=this.cY(a)
r=J.R(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.R(s,"data")
if(t.f.b(q)){p=q
p=p.gW(p)}else p=!1
if(p){p=B.h.a6(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
cY(a){var s,r,q,p=null
try{p=B.h.aw(a.c,null)}catch(r){q=A.F(r)
if(t.Y.b(q)){s=q
throw A.b(A.bk("Response is not valid JSON: "+s.gke()))}else throw r}if(t.f.b(p))return A.bb(p,t.N,t.X)
throw A.b(A.bk("Expected a JSON object, got "+J.c_(p).l(0)+"."))},
dO(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bk("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bk("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.bb(o,n,m):A.u(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.Dq(k,n)
j=A.O(j,j.$ti.i("o.E"))}else j=B.q
return new A.cM(s,p,q,l,j)},
pK(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.vA.prototype={
$1(a){return this.a.dO(a)},
$S:113}
A.vw.prototype={
$1(a){var s=this
return s.a.jx(s.b,s.c,s.d,a)},
$S:43}
A.vx.prototype={
$1(a){return a.a},
$S:44}
A.vy.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dw(new A.lU(s.a,s.b,r,s.d,s.e))},
$S:43}
A.vz.prototype={
$1(a){return a.a},
$S:44}
A.vu.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.ek(new A.eo(s.a,s.b,r,s.d))},
$S:236}
A.vv.prototype={
$1(a){return a.a},
$S:82}
A.ja.prototype={}
A.hJ.prototype={}
A.vC.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eT()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aF(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.D()
s=2
return A.a(n instanceof A.w?n:A.bv(n,t.H),$async$aF)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.an()
return A.e(null,r)}})
return A.f($async$aF,r)},
eT(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eT=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.cV(),$async$eT)
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
return A.a(A.I7(n.$1(k),m),$async$eT)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eT,r)},
cV(){return this.pn()},
pn(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cV=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.dr(),$async$cV)
case 3:m=b
l=t.N
s=4
return A.a(n.a.ek(new A.eo("GET",n.b.bT("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cV)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.iA("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aS(new A.vF()).D(),$async$cV)
case 7:s=1
break
case 6:++p.as
p.z=new A.aI(new A.w($.C,t.D),t.h)
n=$.pl()
l=A.j([],t.s)
o.a=o.b=!1
p.y=k.c.bz(new A.vG(o,p,new A.A2(new A.yS(n),l),m),new A.vH(p),new A.vI(p))
s=8
return A.a(p.z.a,$async$cV)
case 8:p.y=null
if(o.a)throw A.b(A.iA("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$cV,r)},
h6(a,b){return this.q6(a,b)},
q6(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$h6=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:c=a.a
s=c!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b4(new A.eo("POST",l.b.bT("/api/realtime"),A.m(["Authorization","Bearer "+b.a,"Content-Type","application/json"],k,k),B.h.a6(A.m(["clientId",c,"subscriptions",p.b],k,t.K),null))),$async$h6)
case 5:l=a2.a
if(l!==204&&l!==200)throw A.b(A.iA("realtime subscribe status "+l,null))
s=1
break
case 4:j=a.b
if(j==null){s=1
break}o=j.h(0,"action")
if(typeof o!="string"){s=1
break}n=j.h(0,"record")
l=t.f
if(!l.b(n)){s=1
break}try{k=n
i=k.h(0,"id")
h=k.h(0,"updated")
if(typeof i!="string"||typeof h!="string")A.t(A.bk("Realtime record missing id/updated."))
g=k.h(0,"store")
j=k.h(0,"data")
f=k.h(0,"imgs")
k=typeof g=="string"?g:""
l=l.b(j)?A.bb(j,t.N,t.X):B.j
if(t.j.b(f)){e=J.Dq(f,t.N)
e=A.O(e,e.$ti.i("o.E"))}else e=B.q
m=new A.cM(i,k,h,l,e)
p.w.$1(new A.ja(o,m))}catch(a0){}case 1:return A.e(q,r)}})
return A.f($async$h6,r)}}
A.vJ.prototype={
$1(a){return A.Gb(a,this.a,this.b,A.MW())},
$S:84}
A.vF.prototype={
$1(a){},
$S:18}
A.vG.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.v_(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.q)(k),++n){m=k[n]
r.Q=r.Q.X(new A.vD(q,r,m,p),o).ms(new A.vE(r))}},
$S:18}
A.vD.prototype={
$1(a){var s=0,r=A.h(t.P),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:i=n.a
if(i.a){s=1
break}p=4
s=7
return A.a(n.b.h6(n.c,n.d),$async$$1)
case 7:p=2
s=6
break
case 4:p=3
h=o.pop()
i.a=!0
i=n.b
j=i.y
j=j==null?null:j.D()
s=8
return A.a(j instanceof A.w?j:A.bv(j,t.H),$async$$1)
case 8:i=i.z
if((i.a.a&30)===0)i.an()
s=1
break
s=6
break
case 3:s=2
break
case 6:if(!i.b&&n.c.a!=null){i.b=!0
try{n.b.r.$0()}catch(g){m=A.F(g)
l=A.ad(g)
i=n.b
i.at=m
i.ax=l}}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$1,r)},
$S:100}
A.vE.prototype={
$2(a,b){var s=this.a
if(s.at==null)s.at=a
if(s.ax==null)s.ax=b},
$S:9}
A.vH.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:0}
A.vI.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:24}
A.A2.prototype={
v_(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.kt()
r=A.j([],t.gy)
for(q=s.length,p=0;;){o=this.qi(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dl(p,o,q)))
p=o+1
m=this.pB(B.a.wN(new A.dj(!0).cW(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.f.b5(s,p))
return r},
qi(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
q_(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.am(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.am(k)
try{q=B.h.aw(r,l)
if(t.f.b(q)){p=A.bb(q,t.N,t.X)
o=J.R(p,"clientId")
if(J.x(s,"PB_CONNECT")&&typeof o=="string")return new A.hJ(o,l)
return new A.hJ(l,p)}}catch(n){}return l},
pB(a){var s,r=this,q=null
if(a.length===0)return r.q_()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.am(r.c)
return new A.hJ(B.a.ci(B.a.ae(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.ci(B.a.ae(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.ci(B.a.ae(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eo.prototype={}
A.dx.prototype={
of(){return this.d.$0()},
gm(a){return this.c}}
A.lU.prototype={}
A.cH.prototype={}
A.dy.prototype={
l(a){return"HttpTransportException: "+this.a},
$iG:1}
A.dP.prototype={}
A.vr.prototype={
b4(a){return this.o4(a)},
o4(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.ek(a),$async$b4)
case 7:m=c
j=m.c
s=8
return A.a(B.aL.kS(j).ed(0).ir(B.ad),$async$b4)
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
j=A.F(g)
if(j instanceof A.dy)throw g
else{k=j
j=A.iA("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
dw(a){return this.o5(a)},
o5(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dw=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.IA(a6.a,a6.b)
h.r.C(0,a6.c)
h.x.C(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.of(),$async$dw)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.Gx(a0)
a3=new A.fD("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cT(A.u(d,d),e))
b.push(new A.mk(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.q)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b4(m).ir(B.ad),$async$dw)
case 11:k=a8
g=k.w
s=12
return A.a(B.aL.kS(g).ed(0).ir(B.ad),$async$dw)
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
g=A.F(a5)
if(g instanceof A.dy)throw a5
else{i=g
g=A.iA("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dw,r)},
ek(a){return this.w5(a)},
w5(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ek=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.IW(a,a0)
a1.r.C(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjU().jT(j)
i.p8()
i.y=A.N5(j)
h=i.gcp()
if(h==null){j=t.N
i.scp(A.Cb("text","plain",A.m(["charset",i.gjU().gaO()],j,j)))}else{j=i.gcp()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c8(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.J("charset")){j=t.N
f=A.m(["charset",i.gjU().gaO()],j,j)
e=h.a
d=h.b
c=A.bb(h.c,j,j)
c.C(0,f)
i.scp(A.Cb(e,d,c))}}}p=4
s=7
return A.a(n.a.b4(a1).ir(B.ad),$async$ek)
case 7:m=a5
j=t.N
l=A.u(j,j)
m.e.a7(0,new A.vs(l))
j=m.b
i=m.w
q=new A.dP(j,l,i)
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.F(a2)
if(j instanceof A.dy)throw a2
else{k=j
a=A.iA("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ek,r)}}
A.vs.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:27}
A.qE.prototype={
$1(a){return a.b===this.a},
$S:109}
A.qF.prototype={
$1(a){return a.b===this.a},
$S:112}
A.l9.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
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
A.c3.prototype={}
A.l5.prototype={
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
B.b.aE(s)
q.j(0,"changedFields",s)
return q}}
A.lc.prototype={
gU(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jx.prototype={
gU(){return"watchSnapshot"},
p(){return A.m(["subscription",this.a,"items",this.b],t.N,t.X)}}
A.lL.prototype={
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
A.lC.prototype={
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
A.lD.prototype={
p(){return A.m(["session",this.a,"chunk",this.b],t.N,t.X)}}
A.lG.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lE.prototype={
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.lB.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.lP.prototype={
p(){return A.m(["store",this.a,"recordId",this.b,"field",this.c],t.N,t.X)}}
A.lJ.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lF.prototype={
p(){return A.m(["stream",this.a,"bytes",this.b],t.N,t.X)}}
A.lN.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"recordId",r.b)
q.j(0,"field",r.c)
q.j(0,"index",r.d)
s=r.e
if(s!=null)q.j(0,"refId",s)
return q}}
A.lH.prototype={
p(){return A.m(["blobGraceMs",this.a,"tmpGraceMs",this.b],t.N,t.X)}}
A.lv.prototype={
p(){return A.m(["maxBytes",this.a],t.N,t.X)}}
A.na.prototype={
p(){return B.j}}
A.lO.prototype={
gU(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.lM.prototype={
gU(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fv.prototype={
gU(){return"fileRefs"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.lK.prototype={
gU(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fu.prototype={
gU(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fs.prototype={
gU(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.h8.prototype={
gU(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.ft.prototype={
gU(){return"fileChunk"},
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",A.hY(r.b))
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.v5.prototype={}
A.iV.prototype={}
A.iY.prototype={}
A.iW.prototype={}
A.iZ.prototype={}
A.iS.prototype={}
A.iT.prototype={}
A.iR.prototype={}
A.iX.prototype={}
A.iU.prototype={}
A.AK.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:11}
A.wp.prototype={
p(){var s,r,q,p,o,n,m,l=this,k=t.N,j=t.X,i=A.u(k,j),h=t.d,g=A.j([],h)
for(s=l.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)g.push(s[q].p())
i.j(0,"where",g)
g=A.j([],t.bi)
for(s=l.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=A.j([],h)
for(n=B.b.gu(p);n.k();)o.push(n.gn().p())
g.push(o)}i.j(0,"orGroups",g)
g=l.c
if(g!=null)i.j(0,"predicate",g.p())
h=A.j([],h)
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
A.wq.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:11}
A.wr.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.U("Malformed query conditions."))
s=A.j([],t.cM)
for(r=J.E(a);r.k();)s.push(A.Eh(r.gn()))
return s},
$S:115}
A.eA.prototype={
p(){var s,r,q,p,o=this,n=A.u(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.q)(s),++p)r.push(A.hY(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.hY(o.c))
return n}}
A.wl.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:11}
A.wm.prototype={
$1(a){return a.b===this.a},
$S:126}
A.aY.prototype={
a4(){return"QueryConditionOp."+this.b}}
A.cL.prototype={}
A.vO.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:11}
A.vN.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.U("Malformed predicate children."))
s=A.j([],t.eK)
for(r=J.E(a);r.k();)s.push(A.Cd(r.gn()))
return s},
$S:131}
A.iL.prototype={
p(){var s=A.u(t.N,t.X)
s.j(0,"kind","leaf")
s.C(0,this.a.p())
return s}}
A.j5.prototype={
p(){return A.m(["kind","not","child",this.a.p()],t.N,t.X)}}
A.i8.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","all","children",p],t.N,t.X)}}
A.i9.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["kind","any","children",p],t.N,t.X)}}
A.mK.prototype={
p(){return A.m(["field",this.a,"desc",this.b],t.N,t.X)}}
A.wo.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:11}
A.cB.prototype={
a4(){return"AggregateFn."+this.b}}
A.wF.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.wG.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:11}
A.mP.prototype={}
A.mv.prototype={
p(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.l0.prototype={
p(){return B.j}}
A.lS.prototype={
p(){return B.j}}
A.l3.prototype={
p(){return B.j}}
A.lQ.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"id",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mT.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"ids",this.b)
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.ml.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"mutation",A.KL(this.b))
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mL.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.lf.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.le.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lr.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"field",r.b)
q.j(0,"spec",r.c.p())
s=r.d
if(s!=null)q.j(0,"session",s)
return q}}
A.lV.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.kG.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"store",r.a)
q.j(0,"fn",r.b.b)
q.j(0,"field",r.c)
q.j(0,"spec",r.d.p())
s=r.e
if(s!=null)q.j(0,"session",s)
return q}}
A.ly.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.mZ.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"store",this.a)
r.j(0,"spec",this.b.p())
s=this.c
if(s!=null)r.j(0,"session",s)
return r}}
A.dR.prototype={
a4(){return"TransactionDurability."+this.b}}
A.nx.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.ny.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nA.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nC.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nB.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nz.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nR.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.nS.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.nQ.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kI.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.nP.prototype={
p(){return B.j}}
A.nN.prototype={
p(){return B.j}}
A.mH.prototype={
p(){return B.j}}
A.l6.prototype={
p(){return A.m(["store",this.a,"olderThanMs",this.b],t.N,t.X)}}
A.mU.prototype={
p(){return A.m(["compactOlderThanMs",this.a],t.N,t.X)}}
A.lb.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.la.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.mR.prototype={
p(){return A.m(["store",this.a,"id",this.b,"merged",this.c],t.N,t.X)}}
A.kD.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.kE.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.ld.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ah.prototype={}
A.fL.prototype={
gU(){return"ok"},
p(){return B.j}}
A.ie.prototype={
gU(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.lT.prototype={
gU(){return"health"},
p(){return A.m(["ok",!0,"sqliteVersion",this.b],t.N,t.X)}}
A.fY.prototype={
gU(){return"row"},
p(){return A.m(["row",this.a],t.N,t.X)}}
A.fZ.prototype={
gU(){return"rows"},
p(){return A.m(["rows",this.a],t.N,t.X)}}
A.fH.prototype={
gU(){return"mutation"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fT.prototype={
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
A.fm.prototype={
gU(){return"count"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fn.prototype={
gU(){return"distinct"},
p(){return A.m(["values",this.a],t.N,t.X)}}
A.fA.prototype={
gU(){return"ids"},
p(){return A.m(["ids",this.a],t.N,t.X)}}
A.fa.prototype={
gU(){return"aggregate"},
p(){return A.m(["value",this.a],t.N,t.X)}}
A.fr.prototype={
gU(){return"explain"},
p(){return A.m(["plan",this.a],t.N,t.X)}}
A.h0.prototype={
gU(){return"searchHits"},
p(){var s,r,q,p,o,n,m=A.j([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.mY.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fk.prototype={
gU(){return"conflicts"},
p(){var s,r,q,p=A.j([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fj.prototype={
gU(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.he.prototype={
gU(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hm.prototype={
gU(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fQ.prototype={
gU(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fh.prototype={
gU(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.no.prototype={
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
A.xg.prototype={
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.nm.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.ns.prototype={
p(){return B.j}}
A.nh.prototype={
p(){return B.j}}
A.ni.prototype={
p(){return B.j}}
A.nk.prototype={
p(){return B.j}}
A.nt.prototype={
p(){var s=A.u(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.nl.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.nq.prototype={
p(){return B.j}}
A.nn.prototype={
gU(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.nj.prototype={
gU(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.nr.prototype={
gU(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.np.prototype={
gU(){return"syncStatusEvent"},
p(){return A.m(["status",A.hY(this.a.p())],t.N,t.X)}}
A.kO.prototype={
gU(){return"authRequired"},
p(){return B.j}}
A.jz.prototype={
l(a){return"WireException: "+this.a},
$iG:1}
A.BH.prototype={
$1(a){return a.a===this.a},
$S:150}
A.BI.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:157}
A.mC.prototype={
a4(){return"PlatformProfile."+this.b}}
A.n9.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.wQ.prototype={
$1(a){return J.bZ(a.gaX())},
$S:40}
A.wR.prototype={
$1(a){return B.a.F(a,"ENABLE_FTS5")},
$S:10}
A.ih.prototype={
a4(){return"ChangeOrigin."+this.b}}
A.dt.prototype={
a4(){return"ChangeAction."+this.b}}
A.aS.prototype={
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
B.b.aE(s)
q.j(0,"changedFields",s)
return q},
R(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof A.aS))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.t.Y(b.e,s.e)&&B.t.Y(b.f,s.f)&&B.t.Y(b.r,s.r)},
gI(a){var s=this
return A.c6(s.a,s.b,s.c,s.d,B.t.ac(s.e),B.t.ac(s.f),B.t.ac(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a1.prototype={}
A.pT.prototype={
uM(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
uN(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.pU.prototype={}
A.pV.prototype={}
A.rw.prototype={}
A.ps.prototype={
uO(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cI(256)
q=this.b.uP(new Uint8Array(A.b7(a)),b,m,this.c)
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
if(p!==1)throw A.b(A.y("Unsupported ciphertext version 0x"+B.a.ig(B.c.kv(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b7(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b7(B.f.b5(a,n)))
q=new Uint8Array(A.b7(B.f.T(a,13,n)))
try{n=this.b.u7(new A.ji(q,new A.iO(r),s),b,this.c)
return n}catch(o){if(A.F(o) instanceof A.jj)throw A.b(A.y("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d1.prototype={
a4(){return"KindViolation."+this.b}}
A.AZ.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:177}
A.l8.prototype={
a4(){return"ConflictAlgorithm."+this.b}}
A.ip.prototype={
q(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.c){s=1
break}p.c=!1
for(o=p.a,n=new A.aR(o,o.r,o.e,A.n(o).i("aR<2>"));n.k();){m=n.d
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
cj(a){var s,r=this.a,q=r.H(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(s!=null)s.q()}q=this.b.wa(a)
r.j(0,a,q)
return q},
kH(a,b){var s=this.cj(a).kI(new A.bO(b)),r=A.n(s).i("X<K.E,I<l,k?>>")
r=A.O(new A.X(s,new A.rt(),r),r.i("Z.E"))
return r},
o2(a){return this.kH(a,B.n)},
f5(a,b){this.cj(a).e7(new A.bO(b))},
jV(a){return this.f5(a,B.n)},
aD(a,b){return this.uV(a,b)},
O(a){return this.aD(a,B.n)},
uV(a,b){var s=0,r=A.h(t.H),q=this
var $async$aD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.f5(a,b)
return A.e(null,r)}})
return A.f($async$aD,r)},
ai(a,b){return this.wm(a,b)},
b0(a){return this.ai(a,B.n)},
wm(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ai=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kH(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ai,r)},
bQ(a,b,c,d,e,f,g){return this.wj(a,b,c,d,e,f,g)},
aI(a,b,c,d){return this.bQ(a,null,b,null,null,c,d)},
el(a,b,c,d,e){return this.bQ(a,b,c,null,null,d,e)},
n2(a,b,c,d){return this.bQ(a,b,null,null,null,c,d)},
cg(a,b,c){var s=null
return this.bQ(a,s,s,s,s,b,c)},
wh(a,b,c,d,e){return this.bQ(a,null,b,null,c,d,e)},
wg(a,b,c,d,e){return this.bQ(a,b,c,d,e,null,null)},
wi(a,b,c,d,e,f){return this.bQ(a,b,c,null,d,e,f)},
wf(a,b,c,d){return this.bQ(a,null,null,null,b,c,d)},
wj(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bQ=A.c(function(h,i){if(h===1)return A.d(i,r)
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
return A.f($async$bQ,r)},
cb(a,b,c,d){return this.vD(0,b,c,d)},
aC(a,b,c){return this.cb(0,b,c,null)},
vD(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$cb=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.Q("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dG(new A.T(c,n),new A.rs(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.af(c.a,"?",!1,m),", ")
j=A.DJ(d)
o=o.i("ar<2>")
o=A.O(new A.ar(c,o),o.i("o.E"))
p.f5("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ao(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cb,r)},
L(a,b,c,d){return this.wQ(a,b,c,d)},
wQ(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dG(new A.T(b,n),new A.ru(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.DJ(null)+' "'+a+'" SET '+m
o=A.O(new A.ar(b,o.i("ar<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.C(o,d)}p.f5(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
Z(a,b,c){return this.u8(a,b,c)},
u8(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$Z=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.C(n,c)}p.f5(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Z,r)},
tY(a,b,c){this.b.tZ(B.bt,!0,!1,new A.rr(b),c)},
a2(a,b){return this.wM(a,b,b)},
wM(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jV("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.jV("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jV("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$ir0:1}
A.rt.prototype={
$1(a){return A.bb(a,t.N,t.X)},
$S:179}
A.rs.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.ru.prototype={
$1(a){return'"'+a+'" = ?'},
$S:6}
A.rr.prototype={
$1(a){var s=a.gm(0)===0?null:a.gG(a)
return this.a.$1(s)},
$S:188}
A.qh.prototype={}
A.io.prototype={
jL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.j([],t.s),c=A.aN(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=$.Dc()
if(!k.b.test(l))A.t(A.aP('Field "'+l+u.Z))
if(B.be.F(0,l))throw A.b(A.aP('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.t(0,l))throw A.b(A.aP('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aP(e+l+'" cannot be unique.'))
if(B.b.bM(o,new A.rq(m)))throw A.b(A.aP(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.F(k,l)}else k=!1
if(k)throw A.b(A.aP(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.q)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.at(l,l.gm(0),k.i("at<K.E>")),k=k.i("K.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.F(0,j)&&!B.be.F(0,j))throw A.b(A.aP('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.ax.Y(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.HS(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.rO(u.r))
if(q.b&&!A.Ep(r.a,3,34))throw A.b(A.rO("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.at(r,r.gm(0),p.i("at<K.E>")),p=p.i("K.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.F(0,o))throw A.b(A.aP('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gab(),r=r.gu(r);r.k();){q=r.gn()
A.DR(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aP('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aP('Ref field "'+m.a+'" must declare its target store.'))}return new A.qh(f.p0(a),f.p_(a),f.oZ(a),d)},
p0(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.j(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.gkM()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.rp(),A.a_(k).i("X<1,l>")).B(0,", ")
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
p_(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.j([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("X<K.E,l>")
j=A.O(new A.X(l,A.B5(),k),k.i("Z.E"))
if(!l.F(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.b2?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.B(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}else{l=l.B(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.q)(r),++n){h=r[n]
if(h.b!==B.J)continue
if(B.b.bM(s,new A.ro(h)))continue
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
oZ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.q
s=A.j([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("X<K.E,l>")
n=A.O(new A.X(p,A.B5(),o),o.i("Z.E"))
m=new A.rn(r,a0.c)
l=new A.X(p,new A.rk(m),o).B(0,f)
k=new A.X(p,new A.rl(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.z(r+"_ai",e,d)
o=A.z(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.z(r+"_ad",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.z(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.rm(),A.a_(n).i("X<1,l>")).B(0," OR ")
p=A.z(r+"_au",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
h=A.z(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.rq.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:47}
A.rp.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:6}
A.ro.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:47}
A.rn.prototype={
$2(a,b){return A.Gd(this.a,this.b,a,b)},
$S:213}
A.rk.prototype={
$1(a){return this.a.$2("new",a)},
$S:6}
A.rl.prototype={
$1(a){return this.a.$2("old",a)},
$S:6}
A.rm.prototype={
$1(a){return"new."+a+" IS NOT old."+a},
$S:6}
A.dF.prototype={
l(a){return A.dp(this).l(0)+": "+this.a},
$iG:1}
A.eI.prototype={}
A.eH.prototype={}
A.ex.prototype={}
A.fe.prototype={}
A.fO.prototype={}
A.fx.prototype={}
A.cO.prototype={}
A.fW.prototype={}
A.h_.prototype={}
A.eC.prototype={}
A.hi.prototype={}
A.fz.prototype={}
A.h5.prototype={}
A.fG.prototype={}
A.fi.prototype={}
A.ej.prototype={}
A.fV.prototype={}
A.it.prototype={}
A.bi.prototype={}
A.ry.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"ref_id")
j.toString
A.D(j)
s=k.h(0,"store")
s.toString
A.D(s)
r=k.h(0,"record_id")
r.toString
A.D(r)
q=k.h(0,"field")
q.toString
A.D(q)
p=k.h(0,"hash")
p.toString
A.D(p)
o=A.a6(k.h(0,"remote_name"))
n=k.h(0,"state")
n.toString
A.D(n)
m=A.be(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.be(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bi(j,s,r,q,p,o,n,m,l,A.a6(k.h(0,"last_error")))},
$S:217}
A.uA.prototype={
glY(){return this.b},
gi5(){var s=0,r=A.h(t.y),q,p=this
var $async$gi5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dM()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gi5,r)},
ls(a,b){return b},
ef(a,b,c){return this.vK(a,b,c)},
vK(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$ef=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.a.a
o===$&&A.v()
n=J
s=3
return A.a(o.gbn().b.cg("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,p.ls(c,a)]),$async$ef)
case 3:o=n.bM(e,A.Mn(),t.A)
o=A.O(o,o.$ti.i("Z.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ef,r)},
d8(a,b,c,d,e,f,g,h){return this.tJ(a,b,c,d,e,f,g,h)},
tJ(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k
var $async$d8=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:l=p.glY()
k=!a
if(k){s=3
break}else j=k
s=4
break
case 3:s=5
return A.a(l.dM(),$async$d8)
case 5:j=!j
case 4:if(j)throw A.b(A.y("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
o=p.ls(h,e)
s=6
return A.a(l.dk(b,c,d),$async$d8)
case 6:n=j
s=7
return A.a(l.bh(n),$async$d8)
case 7:m=j
if(m==null)m=0
s=8
return A.a(p.a.a2(new A.uB(p,h,g,o,n,m,A.i_(),f),t.A),$async$d8)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d8,r)},
fl(a,b,c,d,e){return this.w1(a,b,c,d,e)},
w1(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fl=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.glY()
s=3
return A.a(p.ef(a,c,e),$async$fl)
case 3:k=g
j=J.M(k)
if(j.gE(k))throw A.b(A.y("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.f9(k,new A.uD(d),new A.uE(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.y("File is remote_only; download it before opening."))
j=p.a
n=j.a
n===$&&A.v()
n=n.gbn()
j=j.CW.$0()
m=o.e
s=4
return A.a(n.b.aD("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[j,m]),$async$fl)
case 4:q=l.cJ(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fl,r)},
fu(a,b,c,d,e,f){return this.wy(0,b,c,d,e,f)},
wy(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$fu=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ef(b,d,f),$async$fu)
case 3:n=h
m=J.M(n)
if(m.gE(n)){s=1
break}o=e!=null?m.f9(n,new A.uF(e),new A.uG(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.uH(p,o,f,d,b),t.P),$async$fu)
case 4:case 1:return A.e(q,r)}})
return A.f($async$fu,r)},
bf(a,b){return this.nU(a,b)},
nU(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bf=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e4(a8),$async$bf)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.CW.$0()-B.c.N(a7.a,1000)
s=6
return A.a(e.a2(new A.uC(a2,n),t.P),$async$bf)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fe(),$async$bf)
case 13:l=b0
s=J.e8(l)?14:15
break
case 14:k=0
j=A.aN(t.N)
d=t.s
case 16:c=e.a
c===$&&A.v()
s=18
return A.a(c.gbn().b.wg("lp_blobs",A.j(["hash"],d),250,k,"hash ASC"),$async$bf)
case 18:i=b0
for(c=J.E(i);c.k();){h=c.gn()
b=J.R(h,"hash")
b.toString
J.aL(j,A.D(b))}if(J.aq(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.BN(j,g)){s=19
break}p=22
b=new A.w($.C,c)
b.aK(null)
s=25
return A.a(b,$async$bf)
case 25:f=b0
if(f==null||f>m){s=19
break}s=26
return A.a(a3.da(g),$async$bf)
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
return A.a(b.gbn().b.wi("lp_blobs",A.j(["hash"],c),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bf)
case 29:a0=b0
b=J.M(a0)
if(b.gE(a0)){s=28
break}b=b.gu(a0)
case 30:if(!b.k()){s=31
break}a1=b.gn().h(0,"hash")
a1.toString
A.D(a1)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.da(a1),$async$bf)
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
cC(a){return this.uQ(a)},
uQ(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:g=p.b
f=p.a
e=f.a
e===$&&A.v()
d=A
s=3
return A.a(e.gbn().b.b0("SELECT SUM(size) as total FROM lp_blobs"),$async$cC)
case 3:o=d.f4(c)
if(o==null)o=0
if(o<=a){q=0
s=1
break}n=t.N,m=t.X,f=f.r,l=0
case 4:if(!(o>a)){s=5
break}s=6
return A.a(e.gbn().b.b0("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cC)
case 6:k=c
j=J.M(k)
if(j.gE(k)){s=5
break}j=j.gu(k)
case 7:if(!j.k()){s=8
break}i=j.gn()
if(o<=a){s=8
break}h=i.h(0,"hash")
h.toString
A.D(h)
i=i.h(0,"size")
i.toString
A.ao(i)
s=9
return A.a(g.da(h),$async$cC)
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
A.uB.prototype={
$1(a){return this.nw(a)},
nw(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.CW.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.el("lp_file_refs",A.j(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.M(c)
if(b.gW(c)){q=A.DN(b.gG(c))
s=1
break}s=4
return A.a(A.i5(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.el("lp_outbox",A.j(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.M(o)
n=h.gW(o)&&J.R(h.gG(o),"base_updated")==null?A.a6(J.R(h.gG(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.cb(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.R),$async$$1)
case 6:k=A.i_()
s=7
return A.a(j.aC(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a6(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.a_(new A.a1(g,A.as([f],m)))
q=new A.bi(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:221}
A.uD.prototype={
$1(a){return a.a===this.a},
$S:48}
A.uE.prototype={
$0(){return A.t(A.y("FileRef "+this.a+" not found"))},
$S:32}
A.uF.prototype={
$1(a){return a.a===this.a},
$S:48}
A.uG.prototype={
$0(){return A.t(A.y("FileRef "+this.a+" not found"))},
$S:32}
A.uH.prototype={
$1(a){return this.ny(a)},
ny(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.aD(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aC(0,"lp_op_queue",A.m(["op_id",A.i_(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a6(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.x),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a_(new A.a1(q.c,A.as([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uC.prototype={
$1(a){return this.nx(a)},
nx(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dy,p=new A.bC(p,p.r,p.e,A.n(p).i("bC<1>")),o=t.N,n=t.X,m=q.a
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
A.D(j)
k=k.h(0,"hash")
k.toString
A.D(k)
s=7
return A.a(i.Z("lp_file_refs","ref_id = ?",[j]),$async$$1)
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
A.pH.prototype={}
A.fc.prototype={
l(a){return"BlobMissingError: "+this.a},
$iG:1}
A.kY.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iG:1}
A.nc.prototype={}
A.Bv.prototype={
$1(a){return B.b.C(this.a,a)},
$S:73}
A.iv.prototype={}
A.rz.prototype={
bq(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bq=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.c7
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
return A.a(a3.f2(25),$async$bq)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.b8?10:12
break
case 10:s=13
return A.a(n.cr(i,b2),$async$bq)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.mW(i.b),$async$bq)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b9?17:18
break
case 17:s=19
return A.a(n.eM(i),$async$bq)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.mW(i.b),$async$bq)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.F(b3)
j=!0
e=i.w+1
d=a5.mA(e)
a8=i.b
a9=J.a0(f)
b0=a6.$0()
s=23
return A.a(a3.vV(a8,a9,e,b0+B.c.N(d.a,1000)),$async$bq)
case 23:s=9
break
case 6:s=2
break
case 9:s=4
break
case 5:a3=a2.dy,a4=new A.bC(a3,a3.r,a3.e,A.n(a3).i("bC<1>")),a2=a2.r
case 24:if(!a4.k()){s=25
break}c=a4.d
a5=c
b1=a3.h(0,a5)
if(b1==null)A.t(A.y('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.cg("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$bq)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.R(b,"ref_id")
a6.toString
a=A.D(a6)
a6=J.R(b,"record_id")
a6.toString
a0=A.D(a6)
a1=A.a6(J.R(b,"remote_name"))
s=a1!=null?35:36
break
case 35:s=37
return A.a(n.dc(a0,a,a1,c),$async$bq)
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
case 25:q=new A.iv(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bq,r)},
cr(a,b){return this.r4(a,b)},
r4(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cr=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.aw(a3.f,null))
a1=a0.h(0,"ref_id")
a1.toString
A.D(a1)
l=a0.h(0,"hash")
l.toString
A.D(l)
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
if(m!=null){f=B.a.A(l,0,B.c.bN(l.length,0,10))
for(i=m.e,e=i.length,d=f.length!==0,c=0;c<e;++c){b=i[c]
if(d&&B.a.S(b,f)||B.a.S(b,k)){g=b
break}}}a.a=null
s=g!=null?10:12
break
case 10:a.a=g
s=11
break
case 12:s=13
return A.a(n.b.wV(a3.d,A.m([k,new A.h9(k,j,new A.rB(a4,l))],t.N,t.h3)),$async$cr)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga1(l):k
case 11:s=14
return A.a(n.a.a2(new A.rC(a,a1,a3),t.P),$async$cr)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cr,r)},
eM(a){return this.r3(a)},
r3(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.aw(a.f,null))
l=m.h(0,"ref_id")
l.toString
A.D(l)
o=A.a6(m.h(0,"remote_name"))
n=m.h(0,"hash")
n.toString
A.D(n)
s=o!=null?3:4
break
case 3:s=5
return A.a(p.b.wT(a.d,A.j([o],t.s)),$async$eM)
case 5:case 4:s=6
return A.a(p.a.a2(new A.rA(l,n,a),t.P),$async$eM)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eM,r)},
dc(a,b,c,d){return this.uH(a,b,c,d)},
uH(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dc=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.z
l===$&&A.v()
k=m
s=4
return A.a(l.hP(c,a,null),$async$dc)
case 4:s=3
return A.a(k.ik(f),$async$dc)
case 3:o=f
s=5
return A.a(m.bh(o),$async$dc)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.rD(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$dc)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dc,r)},
di(a,b,c,d){return this.vZ(a,b,c,d)},
vZ(a0,a1,a2,a3){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$di=A.c(function(a4,a5){if(a4===1)return A.d(a5,r)
for(;;)switch(s){case 0:s=2
return A.a(a0.cg("lp_file_refs","store = ? AND record_id = ?",[a3,a1]),$async$di)
case 2:e=a5
d=A.uw(a2,A.a_(a2).c)
c=J.aB(e)
b=t.v
a=A.d2(new A.bF(c.ce(e,new A.rE(),t.x),b),b.i("o.E"))
b=a2.length,p=t.N,o=t.X,n=q.a.dy,m='No store "'+a3+'" registered in this LocalPocket.',l=0
case 3:if(!(l<a2.length)){s=5
break}k=a2[l]
s=!a.F(0,k)?6:7
break
case 6:j=A.i_()
i=n.h(0,a3)
if(i==null)A.t(A.y(m))
h=i.a.Q
if(h==null)h="imgs"
s=8
return A.a(a0.cb(0,"lp_file_refs",A.m(["ref_id",j,"store",a3,"record_id",a1,"field",h,"hash","unknown_"+k,"remote_name",k,"state","remote_only"],p,o),B.c5),$async$di)
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
A.D(p)
if(p==="pending_remove"||p==="pending_upload"){s=9
break}p=b.h(0,"ref_id")
p.toString
s=11
return A.a(a0.Z("lp_file_refs","ref_id = ?",[p]),$async$di)
case 11:f=A.a6(b.h(0,"hash"))
s=f!=null&&f.length!==0&&!B.a.S(f,"unknown_")?12:13
break
case 12:s=14
return A.a(a0.aD(u.y,[f]),$async$di)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$di,r)}}
A.rB.prototype={
$0(){return this.a.cJ(this.b)},
$S:74}
A.rC.prototype={
$1(a){return this.no(a)},
no(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a_(new A.a1(p.c,A.as([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rA.prototype={
$1(a){return this.nn(a)},
nn(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.Z("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aD(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a_(new A.a1(p.c,A.as([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rD.prototype={
$1(a){return this.np(a)},
np(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.i5(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a_(new A.a1(q.f,A.as([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rE.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:75}
A.BB.prototype={
$1(a){if(typeof a!="string")return a
return this.a.ej(a)},
$S:34}
A.eX.prototype={$iG:1}
A.zH.prototype={
c7(){var s=0,r=A.h(t.N),q,p=this,o
var $async$c7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c7,r)}}
A.oT.prototype={}
A.hH.prototype={}
A.tx.prototype={
ox(a){var s=this,r=s.a.a.a$.b
r=new A.b0(r,A.n(r).i("b0<1>")).aS(new A.tT(s))
s.c!==$&&A.cg()
s.c=r},
vb(a){var s,r,q=this
A:{if(a instanceof A.mv){s=q.ha(a.a,a.b)
break A}if(a instanceof A.l0){s=A.b9(q.fT(),t.V)
break A}if(a instanceof A.lS){s=A.b9(new A.lT(!0,q.a.d.a),t.V)
break A}if(a instanceof A.l3){s=q.q().X(new A.tU(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lQ){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.tV(s,q),new A.tW())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mT){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.u6(s,q),new A.uh())
break A}if(a instanceof A.ml){s=q.qu(a.a,a.b,a.c)
break A}if(a instanceof A.mL){s=q.qP(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lf){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.ui(s,q),A.G2())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.le){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.uj(s,q),A.G2())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lr){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.uk(s,q),A.M8())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lV){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.ul(s,q),A.Ma())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kG){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bw(r,new A.um(s,q),A.M7())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ly){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.un(s,q),A.M9())
break A}if(a instanceof A.mZ){s=q.rH(a.a,a.b,a.c)
break A}if(a instanceof A.nx){s=q.oS(a.a,a.b)
break A}if(a instanceof A.ny){s=q.eV(a.a,!0)
break A}if(a instanceof A.nA){s=q.eV(a.a,!1)
break A}if(a instanceof A.nC){s=q.hi(a.a,a.b)
break A}if(a instanceof A.nB){s=q.hh(a.a,a.b)
break A}if(a instanceof A.nz){s=q.hf(a.a,a.b)
break A}if(a instanceof A.nR){s=q.hr(a.a,a.b)
break A}if(a instanceof A.nS){s=q.th(a.a,a.b)
break A}if(a instanceof A.nQ){s=q.jD(a.a)
break A}if(a instanceof A.kI){s=q.a.a.e2(a.a).X(new A.tX(),t.V)
break A}if(a instanceof A.nP){s=q.a.a.fE().X(new A.tY(),t.V)
break A}if(a instanceof A.nN){s=q.a.a.iv().X(new A.tZ(),t.V)
break A}if(a instanceof A.mH){s=q.a.a.fo().X(new A.u_(),t.V)
break A}if(a instanceof A.l6){s=q.a.a.e6(a.a,A.dv(0,a.b,0)).X(new A.u0(),t.V)
break A}if(a instanceof A.mU){s=q.a.a.dq(A.dv(0,a.a,0)).X(new A.u1(),t.V)
break A}if(a instanceof A.lb){s=q.a.a.db
s===$&&A.v()
s=s.ff(a.a).X(new A.u2(q),t.V)
break A}if(a instanceof A.la){s=q.a.a.db
s===$&&A.v()
s=s.dv(a.a,a.b).X(new A.u3(q),t.V)
break A}if(a instanceof A.mR){s=q.a.a.db
s===$&&A.v()
s=s.eo(a.b,a.c,a.a).X(new A.u4(),t.V)
break A}if(a instanceof A.kD){s=q.a.a.db
s===$&&A.v()
s=s.eX(a.a,a.b).X(new A.u5(),t.V)
break A}if(a instanceof A.kE){s=q.a.a.db
s===$&&A.v()
s=s.e0(a.a,a.b).X(new A.u7(),t.V)
break A}if(a instanceof A.ld){s=q.ti(a.a)
break A}if(a instanceof A.lC){s=q.j2(a.a,a.b,a.e,a.c,a.d,a.f,a.r)
break A}if(a instanceof A.lD){s=q.j3(a.a,a.b)
break A}if(a instanceof A.lG){s=q.h2(a.a)
break A}if(a instanceof A.lB){s=q.j1(a.a)
break A}if(a instanceof A.lP){s=q.a.a.dx
s===$&&A.v()
s=s.ef(a.c,a.b,a.a).X(new A.u8(q),t.V)
break A}if(a instanceof A.lJ){s=q.h3(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.lF){s=q.j4(a.a,a.b)
break A}if(a instanceof A.lE){s=q.h1(a.a)
break A}if(a instanceof A.lN){s=q.a.a.dx
s===$&&A.v()
s=s.fu(0,a.c,a.d,a.b,a.e,a.a).X(new A.u9(),t.V)
break A}if(a instanceof A.lH){s=q.a.a.dx
s===$&&A.v()
s=s.bf(A.dv(0,a.a,0),A.dv(0,a.b,0)).X(new A.ua(),t.V)
break A}if(a instanceof A.lv){s=q.a.a.dx
s===$&&A.v()
s=s.cC(a.a).X(new A.ub(),t.V)
break A}if(a instanceof A.na){s=q.a.a.dx
s===$&&A.v()
s=s.gi5().X(new A.uc(),t.V)
break A}if(a instanceof A.nm){s=q.dZ(a.a,a.b,a.c)
break A}if(a instanceof A.ns){s=q.cz().X(new A.ud(),t.V)
break A}if(a instanceof A.nh){s=q.hm()
break A}if(a instanceof A.ni){s=q.dY(new A.ue(q))
break A}if(a instanceof A.nk){s=q.dY(new A.uf(q))
break A}if(a instanceof A.nt){s=q.hn(a.a)
break A}s={}
s.a=null
if(a instanceof A.nl){s.a=a.a
s=q.dY(new A.ug(s,q))
break A}if(a instanceof A.nq){s=q.Q
s=A.b9(new A.nr(s==null?B.dz:A.Eq(s)),t.V)
break A}throw A.b(A.fU(u.P))}return s},
ha(a,b){return this.qN(a,b)},
qN(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$ha=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.pZ(a1[k],l)
i=j.a
s=!m.J(i)?6:8
break
case 6:s=9
return A.a(n.aP(j),$async$ha)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.t(A.y('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.Cn(j)
e=new A.a2("")
A.ch(e,g.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cX(c)
b.t(0,d)
b.q()
b=A.ap(c.a.a)
e=new A.a2("")
A.ch(e,f.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
a=A.cX(c)
a.t(0,d)
a.q()
if(b!==A.ap(c.a.a))throw A.b(A.y('Schema manifest mismatch for "'+i+'".'))
case 7:a0=a2.h(0,i)
if(a0!=null){h=m.h(0,i)
if(h==null)A.t(A.y('No store "'+i+'" registered in this LocalPocket.'))
e=new A.a2("")
A.ch(e,h.c.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cX(c)
b.t(0,d)
b.q()
b=a0!==A.ap(c.a.a)
d=b}else d=!1
if(d)throw A.b(A.y('Schema manifest mismatch for "'+i+'".'))
case 4:a1.length===o||(0,A.q)(a1),++k
s=3
break
case 5:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
fT(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$fT=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.d
k=J.bZ(B.b.gG(m.b.o2("PRAGMA journal_mode")).gaX())
m=m.a.dx
m===$&&A.v()
s=3
return A.a(m.gi5(),$async$fT)
case 3:o=b
m=l.e===B.aA
n=m?"opfs":"file"
q=new A.ie(l.a,l.b,l.c,l.d,m,n,o,J.a0(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fT,r)},
dF(a,b){var s,r,q,p,o=this.a,n=o.a,m=n.au(a)
if(b!=null){s=this.d4(b)
r=A.DW(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.t(A.y('Transaction session "'+b+'" has no executor.'))
q=q.b
p=this.d4(b)
return new A.fg(n,m,new A.it(q),p.r)}return new A.fg(n,m,o.gbn(),null)},
pa(a){return this.dF(a,null)},
qu(a,b,c){return this.bw(c,new A.tF(this,a,c,b),new A.tG())},
br(a,b){var s
A.ap(B.l.v(B.e.v(A.aj(this.a.a.au(a).c.p()))).a)
if(a.length===0)A.t(A.az(a,"store","must not be empty"))
s=b.e
if(s!=null&&s<0)A.t(A.az(s,"spec.limit","must not be negative"))
return new A.wn(a,b)},
b9(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.b,e=this.dF(a.a,b),d=t.fC,c=new A.mJ(e.a,e.b.a,e.c.b,A.j([],d),A.j([],d),A.j([],t.k),A.j([],t.fi),g,!1,g,!1,!1,g,!1,!1)
for(e=f.a,d=e.length,s=0;s<e.length;e.length===d||(0,A.q)(e),++s)c=this.oO(c,e[s])
for(e=f.b,d=e.length,r=t.N,q=t.X,p=t.d,s=0;s<e.length;e.length===d||(0,A.q)(e),++s){o=e[s]
n=A.j([],p)
for(m=B.b.gu(o);m.k();){l=m.gn()
if(l.b===B.bd)n.push(A.m([l.a,l.c],r,q))}c=c.w7(n)}k=f.c
if(k!=null){e=A.Bu(k)
c.jE(e)
A.CQ(e)
j=A.AH(e,!0)
i=c.fV()
i.d.push(new A.b_(j.a,j.b))
i.f.push(e)
c=i}for(e=f.d,d=e.length,s=0;s<e.length;e.length===d||(0,A.q)(e),++s,c=i){h=e[s]
q=h.a
c.cT(q)
i=c.fV()
i.r.push(new A.cm(q,h.b))}e=f.r
if(e!=null)c=c.lf(A.bD(e,!0,r))
if(f.w)c=c.pr(!0)
if(f.x)c=c.ps(!0)
if(f.f)c=c.pp(!0)
else{e=f.e
if(e!=null){if(e<0)A.t(A.au("Limit must be non-negative, got "+A.r(e)+".",g))
c=c.pt(e)}}return c},
oO(a,b){var s
switch(b.b.a){case 0:return a.x0(0,b.a,b.c)
case 1:return a.xa(0,b.a,b.c)
case 2:return a.x3(0,b.a,b.c)
case 3:return a.x4(0,b.a,b.c)
case 4:return a.x8(0,b.a,b.c)
case 5:return a.x9(0,b.a,b.c)
case 6:return a.x5(0,b.a,b.d)
case 7:s=b.d
if(s==null)s=B.n
if(s.length!==2)throw A.b(A.Q("between requires exactly two values.",null))
return a.wY(0,b.a,new A.a4(s[0],s[1]))
case 8:return a.xb(0,b.a,A.a6(b.c))
case 9:return a.x_(0,b.a,A.a6(b.c))
case 10:return a.wZ(0,b.a,A.a6(b.c))
case 11:return a.x7(0,b.a,!0)
case 12:return a.x6(0,b.a,!0)}},
qP(a,b,c){return this.bw(c,new A.tH(this,this.br(a,b),c),new A.tI())},
rH(a,b,c){return this.bw(c,new A.tL(this,a,c,b),new A.tM())},
oS(a,b){var s,r,q,p,o,n,m,l=this.d
if(l.a!==0)throw A.b(A.y("A transaction session is already active on this database."))
s="tx"+ ++this.as
r=$.C
q=t.D
p=t.h
o=new A.w(r,q)
n=new A.oT(new A.aI(new A.w(r,q),p),new A.aI(o,p),A.j([],t.mc))
l.j(0,s,n)
m=this.a.a
l=new A.tz(n)
if(a){if(A.nD(m)!=null)A.t(A.y(u.L))
r=m.b
r===$&&A.v()
l=r.wn(l,t.H)}else{r=b===B.bn?B.aX:B.p
r=m.aW(l,r,t.H)
l=r}n.w!==$&&A.cg()
n.w=l
return o.X(new A.ty(s),t.V)},
eV(a,b){return this.rQ(a,b)},
rQ(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eV=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d4(a)
for(l=h.e,k=A.a_(l).i("bT<1>"),l=new A.bT(l,k),l=new A.at(l,l.gm(0),k.i("at<Z.E>")),k=k.i("Z.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.t(A.y("Future already completed"))
j.aK(null)}h.f=!b
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
if(A.F(g) instanceof A.eX){if(b)throw g}else throw g
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
return A.f($async$eV,r)},
hi(a,b){return this.rE(a,b)},
rE(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d4(a)
n=$.C
m=t.D
l=t.h
k=new A.w(n,m)
j=new A.hH(b,new A.aI(new A.w(n,m),l),new A.aI(k,l))
l=o.r.a2(new A.tK(j),t.H)
j.f!==$&&A.cg()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hi)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hi,r)},
hh(a,b){return this.rC(a,b)},
rC(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hh=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d4(a).e
f=B.b.mN(g,new A.tJ(b))
if(f<0)throw A.b(A.y('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a_(g).i("bT<1>")
l=A.O(new A.bT(g,l),l.i("Z.E"))
k=l.length
j=0
case 3:if(!(j<l.length)){s=5
break}m=l[j]
i=m.a===b||B.b.bO(g,m)>f
m.d=i
i=m.b.a
if((i.a&30)!==0)A.t(A.y("Future already completed"))
i.aK(null)
p=7
i=m.f
i===$&&A.v()
s=10
return A.a(i,$async$hh)
case 10:p=2
s=9
break
case 7:p=6
e=o.pop()
if(!(A.F(e) instanceof A.eX))throw e
s=9
break
case 6:s=2
break
case 9:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:B.b.kp(g,f,g.length)
q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hh,r)},
hf(a,b){return this.rs(a,b)},
rs(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hf=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d4(a).e
j=A.DW(k)
if(j==null||j.a!==b)throw A.b(A.y('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.an()
p=4
m=j.f
m===$&&A.v()
s=7
return A.a(m,$async$hf)
case 7:p=2
s=6
break
case 4:p=3
i=o.pop()
if(A.F(i) instanceof A.eX)throw i
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
return A.f($async$hf,r)},
hr(a,b){return this.tj(a,b)},
tj(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hr=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.au(a)
s=3
return A.a(p.pa(a).bV(b),$async$hr)
case 3:o="w"+ ++p.as
n=A.CF()
n.sjX(new A.mu(l,b,m,B.aY).iI().vN(new A.tQ(p,o),new A.tR(p,n,o)))
p.e.j(0,o,n.bu())
q=A.b9(new A.hm(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hr,r)},
th(a,b){var s=this,r="w"+ ++s.as,q=s.b9(s.br(a,b),null)
s.e.j(0,r,new A.mM(q,q.gdW(),B.aY).iI().aS(new A.tS(s,r)))
return A.b9(new A.hm(r),t.V)},
jD(a){return this.t9(a)},
t9(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jD=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.e.H(0,a)
if(o!=null)o.D()
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jD,r)},
pJ(){if(this.r!=null)return
this.r=A.Es(A.dv(9e8,0,0),new A.tA(this))},
j2(a,b,c,d,e,f,g){return this.pS(a,b,c,d,e,f,g)},
pS(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$j2=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.pJ()
o=p.f
n="u"+ ++p.as
o.mI()
m=o.r
if(m.a>=16)A.t(A.au("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.t(A.au("Invalid file size: "+c,null))
if(o.gnc()+c>536870912)A.t(A.au("Aggregate upload quota exceeded: "+o.gnc()+" + "+c+" > 536870912",null))
o=o.f.$0().iQ(18e8)
m.j(0,n,new A.cF(n,a,b,d,e,c,f,g,A.j([],t.bs),o))
q=new A.lO("u"+p.as,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j2,r)},
j3(a,b){return this.pT(a,b)},
pT(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$j3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
k=l.r
j=k.h(0,a)
if(j==null)A.t(A.au("Unknown upload session: "+a,null))
l=l.f
if(!j.z.ka(l.$0())){k.H(0,a)
A.t(A.au("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.H(0,a)
A.t(A.au("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.H(0,a)
A.t(A.au("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().iQ(18e8)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j3,r)},
h2(a){return this.pW(a)},
pW(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$h2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.f
g=h.r.H(0,a)
if(g==null)A.t(A.au("Unknown upload session: "+a,null))
if(!g.z.ka(h.f.$0()))A.t(A.au("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.t(A.au("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.dx
h===$&&A.v()
n=g.b
m=g.c
l=new A.tB(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.d8(g.w,l,i,o,k,j,m,n),$async$h2)
case 3:q=new f.lM(p.lt(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h2,r)},
j1(a){return this.pR(a)},
pR(a){var s=0,r=A.h(t.V),q,p=this
var $async$j1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.f.r.H(0,a)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j1,r)},
h3(a,b,c,d,e){return this.pY(a,b,c,d,e)},
pY(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$h3=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.dx
k===$&&A.v()
s=3
return A.a(k.fl(c,d,b,e,a),$async$h3)
case 3:o=g
n="f"+ ++p.as
m=new A.ok()
l=A.CF()
l.sjX(o.bz(new A.tC(p,m,n,l),new A.tD(p,n),new A.tE(p,n)))
k=l.bu()
m.c!==$&&A.cg()
m.c=k
p.w.j(0,n,m)
q=new A.lK(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h3,r)},
j4(a,b){return this.pV(a,b)},
pV(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$j4=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.h(0,a)
if(n==null)throw A.b(A.y('Unknown file stream "'+a+'".'))
o=n.b-=b
if((o<0?n.b=0:o)<1048576){o=n.c
o===$&&A.v()
o.b1()}q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j4,r)},
h1(a){return this.pU(a)},
pU(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$h1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.w.H(0,a)
s=n!=null?3:4
break
case 3:o=n.c
o===$&&A.v()
s=5
return A.a(o.D(),$async$h1)
case 5:case 4:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h1,r)},
lt(a){return new A.lL(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
dZ(a,b,c){return this.t1(a,b,c)},
t1(a,b,a0){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$dZ=A.c(function(a1,a2){if(a1===1)return A.d(a2,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.au("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cz(),$async$dZ)
case 3:if(b==null||b.length===0)throw A.b(A.au("syncStart requires a stable per-account identity (PocketBaseSyncOptions.identity): without one, every account on the same server would share one sync scope and bleed cursors and watermarks across users.",null))
n=new A.zH(a0)
m=A.nK(a)
l=o.dy
k=A.n(l).i("T<1>")
l=A.O(new A.T(l,k),k.i("o.E"))
s=4
return A.a(o.as.hH(m,b,l,n),$async$dZ)
case 4:j=a2
m=A.dO(null,null,t.n6)
l=A.dO(null,null,t.em)
k=t.H
i=A.b9(null,k)
h=new A.pt(A.b9(null,k))
g=A.b9(B.O,t.mv)
f=A.j([],t.s)
k=A.b9(null,k)
e=new A.x6(A.N2(),o.CW)
d=new A.ng(o,j,e,new A.tN(p),B.N,m,l,i,h,A.aN(t.N),g,f,k)
c=j.r
m=d.e=new A.xi(o,B.a.A(A.ap(B.l.v(B.e.v(j.b.l(0)+"|"+c)).a),0,12))
k=new A.rz(o,j,e,o.ax)
d.x=k
k=new A.vZ(o,j,e,m,k,h)
d.f=k
d.r=new A.x4(o,j,e,m,k)
d.w=new A.w7(o,j,e,d.gqz(),j.as)
p.y=n
p.x=d
p.z=new A.b0(l,A.n(l).i("b0<1>")).aS(new A.tO(p))
s=5
return A.a(d.az(),$async$dZ)
case 5:q=new A.nn(d.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dZ,r)},
eS(){var s=this.x
return s==null?A.t(A.y("Sync is not started.")):s},
hm(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hm=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.eS()
n.p1.push("cycle")
s=3
return A.a(n.d5(),$async$hm)
case 3:o=b
q=new A.nj(new A.xg(o.a,o.b,o.c,o.d,o.e,o.f,o.r))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hm,r)},
dY(a){var s=0,r=A.h(t.V),q
var $async$dY=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$dY)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dY,r)},
hn(a){return this.t2(a)},
t2(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hn=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.y
n=p.eS()
if(o==null)throw A.b(A.y("Sync is not started."))
o.a=a
s=3
return A.a(n.eg(),$async$hn)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hn,r)},
cz(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.x
q.x=null
p=q.z
p=p==null?null:p.D()
o=t.H
s=2
return A.a(p instanceof A.w?p:A.bv(p,o),$async$cz)
case 2:q.z=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aF(),$async$cz)
case 5:p=q.a.a.as.hN(n)
s=6
return A.a(p,$async$cz)
case 6:case 4:q.Q=q.y=null
return A.e(null,r)}})
return A.f($async$cz,r)},
iW(a){return new A.l9(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
ti(a){var s=this,r="w"+ ++s.as,q=s.a.a.db
q===$&&A.v()
s.e.j(0,r,q.wX(a).aS(new A.tP(s,r)))
return A.b9(new A.hm(r),t.V)},
d4(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.y('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.y('Transaction session "'+a+'" is not ready yet.'))
return s},
hs(a,b,c){return this.tm(a,b,c)},
bw(a,b,c){return this.hs(a,b,c,t.z)},
tm(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hs=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d4(a)
o=c
s=3
return A.a(b.$0(),$async$hs)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hs,r)},
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.cz(),$async$q)
case 2:p=q.e,o=new A.aR(p,p.r,p.e,A.n(p).i("aR<2>"))
case 3:if(!o.k()){s=4
break}s=5
return A.a(o.d.D(),$async$q)
case 5:s=3
break
case 4:p.am(0)
p=q.r
if(p!=null)p.D()
q.r=null
q.f.r.am(0)
for(p=q.w,o=new A.aR(p,p.r,p.e,A.n(p).i("aR<2>"));o.k();){n=o.d.c
n===$&&A.v()
n.D()}p.am(0)
p=q.c
p===$&&A.v()
p.D()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.tT.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cJ(r,t.N,t.X)
s=a.f
s=s==null?null:A.cJ(s,t.N,t.X)
this.a.b.t(0,new A.l5(a.a,a.b,a.c,a.d,r,s,A.d2(a.r,t.N)))},
$S:76}
A.tU.prototype={
$1(a){return B.k},
$S:7}
A.tV.prototype={
$0(){var s=this.a
return this.b.dF(s.c,s.a).bV(s.b)},
$S:78}
A.tW.prototype={
$1(a){return new A.fY(a)},
$S:79}
A.u6.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.j([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dF(o.c,o.a).bV(j),$async$$0)
case 6:h.push(b)
case 4:n.length===m||(0,A.q)(n),++k
s=3
break
case 5:q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:80}
A.uh.prototype={
$1(a){return new A.fZ(a)},
$S:81}
A.ui.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.br(r.c,r.b),r.a).hE()},
$S:41}
A.uj.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.br(r.d,r.b),r.a).hG(r.c)},
$S:41}
A.uk.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.br(r.d,r.b),r.a).hO(r.c)},
$S:83}
A.ul.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.br(r.c,r.b),r.a).i4()},
$S:50}
A.um.prototype={
$0(){var s,r=this,q=r.a
switch(q.d.a){case 0:s=r.b
q=s.b9(s.br(q.e,q.b),q.a).cS("SUM",q.c)
break
case 1:s=r.b
q=s.b9(s.br(q.e,q.b),q.a).cS("AVG",q.c)
break
case 2:s=r.b
q=s.b9(s.br(q.e,q.b),q.a).cS("MIN",q.c)
break
case 3:s=r.b
q=s.b9(s.br(q.e,q.b),q.a).cS("MAX",q.c)
break
default:q=null}return q},
$S:85}
A.un.prototype={
$0(){var s=this.b,r=this.a
return s.b9(s.br(r.c,r.b),r.a).hQ()},
$S:86}
A.tX.prototype={
$1(a){return B.k},
$S:7}
A.tY.prototype={
$1(a){return B.k},
$S:7}
A.tZ.prototype={
$1(a){return B.k},
$S:7}
A.u_.prototype={
$1(a){return new A.fQ(a)},
$S:87}
A.u0.prototype={
$1(a){return new A.fh(a)},
$S:88}
A.u1.prototype={
$1(a){return B.k},
$S:7}
A.u2.prototype={
$1(a){var s,r,q=A.j([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.iW(s.gn()))
return new A.fk(q)},
$S:89}
A.u3.prototype={
$1(a){return new A.fj(a==null?null:this.a.iW(a))},
$S:90}
A.u4.prototype={
$1(a){return B.k},
$S:7}
A.u5.prototype={
$1(a){return B.k},
$S:7}
A.u7.prototype={
$1(a){return B.k},
$S:7}
A.u8.prototype={
$1(a){var s,r,q=A.j([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.lt(s.gn()))
return new A.fv(q)},
$S:91}
A.u9.prototype={
$1(a){return B.k},
$S:7}
A.ua.prototype={
$1(a){return new A.fu(a)},
$S:92}
A.ub.prototype={
$1(a){return new A.fs(a)},
$S:93}
A.uc.prototype={
$1(a){return new A.h8(a)},
$S:94}
A.ud.prototype={
$1(a){return B.k},
$S:7}
A.ue.prototype={
$0(){return this.a.eS().bd()},
$S:3}
A.uf.prototype={
$0(){return this.a.eS().b1()},
$S:3}
A.ug.prototype={
$0(){return this.b.eS().fN(this.a.a)},
$S:3}
A.tF.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dF(p.b,a1)
a0.a.a.c===$&&A.v()
o=p.d
n=o instanceof A.iV
m=null
l=null
if(n){m=o.a
l=m}s=n?3:4
break
case 3:s=a1==null?5:7
break
case 5:s=8
return A.a(a2.ik(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.hl(B.a_,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.j([A.D(a0)],t.s)}else a0=B.q
q=a0
s=1
break
case 4:n=o instanceof A.iY
if(n)l=o.a
else l=null
s=n?10:11
break
case 10:s=a1==null?12:14
break
case 12:s=15
return A.a(a2.ne(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.hl(B.a0,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.j([A.D(a0)],t.s)}else a0=B.q
q=a0
s=1
break
case 11:k=o instanceof A.iW
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
return A.a(a2.lQ(i),$async$$0)
case 23:case 20:a0=A.j([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.D(f))}}q=a0
s=1
break
case 18:k=o instanceof A.iZ
if(k)i=o.a
else i=null
s=k?24:25
break
case 24:s=a1==null?26:28
break
case 26:s=29
return A.a(a2.nf(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bs(i,B.a0),$async$$0)
case 30:case 27:a0=A.j([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.D(f))}}q=a0
s=1
break
case 25:e=o instanceof A.iS
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
return A.a(a2.cq(b,c,!1),$async$$0)
case 37:case 34:q=A.j([b],t.s)
s=1
break
case 32:a0=o instanceof A.iT
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
return A.a(a2.eJ(a),$async$$0)
case 44:case 41:a0=A.n(a).i("T<1>")
a0=A.O(new A.T(a,a0),a0.i("o.E"))
q=a0
s=1
break
case 39:e=o instanceof A.iR
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
return A.a(a2.hk(B.C,b),$async$$0)
case 51:case 48:q=A.j([b],t.s)
s=1
break
case 46:e=o instanceof A.iX
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
return A.a(a2.hk(B.E,b),$async$$0)
case 58:case 55:q=A.j([b],t.s)
s=1
break
case 53:e=o instanceof A.iU
if(e)b=o.a
else b=null
s=e?59:60
break
case 59:s=a1==null?61:63
break
case 61:s=64
return A.a(a2.kl(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.d2(b),$async$$0)
case 65:case 62:q=A.j([b],t.s)
s=1
break
case 60:throw A.b(A.fU(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:50}
A.tG.prototype={
$1(a){return new A.fH(a)},
$S:95}
A.tH.prototype={
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
return A.a(o.b9(m,n).pu(!0,k).cE(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.b9(m,n).pq(k).cE(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.b9(m,p.c).cE()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:96}
A.tI.prototype={
$1(a){return new A.fT(a.a,a.d,a.e,a.b,a.c)},
$S:97}
A.tL.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dF(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.wE(m,l,o.c.b,n.a)
if(l.w==null)A.t(A.rO('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.t(A.rO(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.t(A.au("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.cE()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:98}
A.tM.prototype={
$1(a){var s,r,q=A.j([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.mY(r.a,r.b))}return new A.h0(q)},
$S:99}
A.tz.prototype={
ns(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.an()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aV)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.ns(a)},
$S:4}
A.ty.prototype={
$1(a){return new A.he(this.a)},
$S:101}
A.tK.prototype={
$1(a){return this.nt(a)},
nt(a){var s=0,r=A.h(t.H),q=this,p
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
A.tJ.prototype={
$1(a){return a.a===this.a},
$S:102}
A.tQ.prototype={
$1(a){var s=a==null?B.b6:A.j([a],t.d)
this.a.b.t(0,new A.jx(this.b,s))},
$S:103}
A.tR.prototype={
$1(a){this.b.bu().D()
this.a.e.H(0,this.c)},
$S:24}
A.tS.prototype={
$1(a){this.a.b.t(0,new A.jx(this.b,a))},
$S:104}
A.tA.prototype={
$1(a){return this.a.f.mI()},
$S:52}
A.tB.prototype={
$0(){var $async$$0=A.c(function(a,b){switch(a){case 2:n=q
s=n.pop()
break
case 1:o.push(b)
s=p}for(;;)switch(s){case 0:l=m.a.y,k=l.length,j=0
case 3:if(!(j<l.length)){s=5
break}s=6
q=[1]
return A.bU(A.dY(l[j]),$async$$0,r)
case 6:case 4:l.length===k||(0,A.q)(l),++j
s=3
break
case 5:case 1:return A.bU(null,0,r)
case 2:return A.bU(o.at(-1),1,r)}})
var s=0,r=A.FB($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.FQ(r)},
$S:106}
A.tC.prototype={
$1(a){var s=this,r=new Uint8Array(A.b7(a)),q=s.b
q.b=q.b+r.length
s.a.b.t(0,new A.ft(s.c,r,!1,null))
if(q.b>=1048576)s.d.bu().bd()},
$S:18}
A.tE.prototype={
$1(a){var s=this.a,r=this.b
s.w.H(0,r)
s.b.t(0,new A.ft(r,new Uint8Array(0),!0,J.a0(a)))},
$S:24}
A.tD.prototype={
$0(){var s=this.a,r=this.b
s.w.H(0,r)
s.b.t(0,new A.ft(r,new Uint8Array(0),!0,null))},
$S:0}
A.tN.prototype={
$0(){this.a.b.t(0,B.bB)},
$S:2}
A.tO.prototype={
$1(a){var s=this.a
s.Q=a
s.b.t(0,new A.np(A.Eq(a)))},
$S:107}
A.tP.prototype={
$1(a){var s,r=this.a,q=A.j([],t.oS)
for(s=J.E(a);s.k();)q.push(r.iW(s.gn()))
r.b.t(0,new A.lc(this.b,q))},
$S:108}
A.cF.prototype={}
A.rG.prototype={
gnc(){var s=this.r
return new A.ar(s,A.n(s).i("ar<2>")).v9(0,0,new A.rJ())},
mI(){var s,r=this.r,q=A.n(r).i("ar<2>"),p=q.i("cl<o.E,l>"),o=A.O(new A.cl(new A.al(new A.ar(r,q),new A.rH(this.f.$0()),q.i("al<o.E>")),new A.rI(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.q)(o),++s)r.H(0,o[s])
return p}}
A.rJ.prototype={
$2(a,b){return a+b.f},
$S:71}
A.rH.prototype={
$1(a){return!a.z.ka(this.a)},
$S:110}
A.rI.prototype={
$1(a){return a.a},
$S:111}
A.ok.prototype={}
A.uo.prototype={
gbn(){var s=this.c
return s===$?this.c=new A.it(this.b):s}}
A.ls.prototype={
a4(){return"DurabilityClass."+this.b}}
A.nb.prototype={}
A.vL.prototype={
bV(a){var s,r=this.a
if(!r.J(a))return null
s=r.H(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.p5(s)
r.toString
t.G.a(r)}return r},
kJ(a,b){var s,r=this.a
if(r.a>=256)r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(b==null)s=null
else{s=A.p5(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vE(a){var s,r,q,p=a.a
if(p===0){this.a.am(0)
return}s=this.a
if(p>=s.a){s.am(0)
return}for(p=A.hC(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.H(0,q==null?r.a(q):q)}}}
A.m7.prototype={
aP(a){return this.ww(a)},
ww(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dy
h=a.a
if(i.J(h))throw A.b(A.aP('Duplicate store name "'+h+'" in this open call.'))
p=A.Cn(a)
o=q.w
if(o.e===B.aA&&p.b.length!==0)throw A.b(new A.hi('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fS(a,p),$async$aP)
case 2:n=new A.io(o).jL(a)
o=a.w
if(o!=null)A.MT(q.r,h,o.c)
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
k=q.CW
s=16
return A.a(o.aC(0,"lp_stores",A.m(["store",h,"table_name",h,"schema_ver",l,"definition_json",B.h.a6(a.p(),null),"created_at",k.$0()],t.N,t.X)),$async$aP)
case 16:s=17
return A.a(A.fF(o,0,0,"create:"+h,k,l),$async$aP)
case 17:s=5
break
case 6:l=J.R(l.gG(m),"schema_ver")
l.toString
A.ao(l)
k=a.b
if(l>k)throw A.b(A.Em('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fE(q,a,l),$async$aP)
case 20:case 19:s=21
return A.a(q.bJ(a),$async$aP)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a6(a.p(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aP)
case 22:case 5:i.j(0,h,new A.nb(a,p,new A.vL(A.u(t.N,t.b))))
s=23
return A.a(q.dP(h,p),$async$aP)
case 23:return A.e(null,r)}})
return A.f($async$aP,r)},
fS(a,b){return this.oP(a,b)},
oP(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aI("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fS)
case 3:j=d
if(J.by(j)){s=1
break}o=null
try{n=J.R(J.bZ(j),"v")
o=A.J_(typeof n=="string"?B.h.aw(n,null):n)}catch(i){if(A.F(i) instanceof A.dF){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.ap(B.l.v(B.e.v(A.aj(o.p()))).a)!==A.ap(B.l.v(B.e.v(A.aj(b.p()))).a))throw A.b(A.aP('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
dP(a,b){return this.qX(a,b)},
qX(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dP=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.aj(b.p())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aI("lp_meta",1,"k = ?",[p]),$async$dP)
case 5:s=k.by(d)?2:4
break
case 2:s=6
return A.a(n.aC(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dP)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dP)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dP,r)},
hB(a){return this.tK(a)},
tK(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hB=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hB)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hB,r)},
bJ(a){return this.rn(a)},
rn(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bJ=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.el("lp_stores",A.j(["definition_json"],t.s),1,"store = ?",[a1]),$async$bJ)
case 3:a2=a6
if(J.by(a2)){s=1
break}o=null
try{n=J.R(J.bZ(a2),"definition_json")
m=typeof n=="string"?B.h.aw(n,null):n
l=m
l.toString
k=t.X
o=A.pZ(A.bb(t.f.a(l),t.N,k),k)}catch(a4){if(A.F(a4) instanceof A.cO){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.ax.Y(i.a,h.a)&&i.b===h.b&&i.c.R(0,h.c)
g=l}}if(g){s=1
break}f=new A.jp()
$.ky()
f.az()
l=["_ai","_ad","_au"],e=0
case 4:if(!(e<3)){s=6
break}d=l[e]
s=7
return A.a(a0.O("DROP TRIGGER IF EXISTS "+('"'+A.z(a1+d,'"','""')+'"')),$async$bJ)
case 7:case 5:++e
s=4
break
case 6:s=i!=null?8:9
break
case 8:s=10
return A.a(a0.O("DROP TABLE IF EXISTS "+('"'+A.z(a1+"_fts",'"','""')+'"')),$async$bJ)
case 10:case 9:s=h!=null?11:12
break
case 11:l=new A.io(p.w).jL(a3).d,k=l.length,e=0
case 13:if(!(e<l.length)){s=15
break}s=16
return A.a(a0.O(l[e]),$async$bJ)
case 16:case 14:l.length===k||(0,A.q)(l),++e
s=13
break
case 15:l=a1+"_fts"
k=A.z(l,'"','""')
s=17
return A.a(a0.O("INSERT INTO "+('"'+k+'"')+"("+('"'+A.z(l,'"','""')+'"')+") VALUES('delete-all')"),$async$bJ)
case 17:k=h.a
c=k.$ti.i("X<K.E,l>")
b=new A.X(k,A.B5(),c).B(0,", ")
a=new A.X(k,new A.up(a3,h),c).B(0,", ")
l=A.z(l,'"','""')
s=18
return A.a(a0.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.z(a1,'"','""')+'"')),$async$bJ)
case 18:case 12:if(f.b==null)f.b=$.mF.$0()
l=a3.b
s=19
return A.a(A.fF(a0,f.gmD(),l,"fts:"+a1,p.CW,l),$async$bJ)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bJ,r)},
hL(a){return this.ua(a)},
ua(a){var s=0,r=A.h(t.H),q=this,p
var $async$hL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hL)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hL,r)},
au(a){var s=this.dy.h(0,a)
if(s==null)throw A.b(A.y('No store "'+a+'" registered in this LocalPocket.'))
return s},
by(a){var s,r,q=this
if(A.nD(q)!=null)A.t(A.y(u.L))
s=q.au(a)
r=q.a
r===$&&A.v()
return new A.fg(q,s,r.gbn(),null)},
aW(a,b,c){var s
if(A.nD(this)!=null)A.t(A.y(u.L))
s=this.b
s===$&&A.v()
return s.aW(a,b,c)},
a2(a,b){return this.aW(a,B.p,b)},
nd(a,b){++this.y.e
return this.r.aD(a,B.n)},
e2(a){return this.tF(a)},
tE(){return this.e2(null)},
tF(a){var s=0,r=A.h(t.H),q=this,p
var $async$e2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e2)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$e2)
case 6:case 3:return A.e(null,r)}})
return A.f($async$e2,r)},
fE(){var s=0,r=A.h(t.H),q=this
var $async$fE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(TRUNCATE)"),$async$fE)
case 4:case 3:return A.e(null,r)}})
return A.f($async$fE,r)},
iw(){var s=0,r=A.h(t.H),q=this
var $async$iw=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=q.w.c?2:3
break
case 2:s=4
return A.a(q.r.O("PRAGMA wal_checkpoint(PASSIVE)"),$async$iw)
case 4:case 3:return A.e(null,r)}})
return A.f($async$iw,r)},
iv(){var s=0,r=A.h(t.H),q=this
var $async$iv=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=2
return A.a(q.r.O("VACUUM"),$async$iv)
case 2:return A.e(null,r)}})
return A.f($async$iv,r)},
fo(){return this.wb()},
wb(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fo=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.us(o),t.P),$async$fo)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
dq(a){return this.wI(a)},
wI(a){var s=0,r=A.h(t.H),q=this,p
var $async$dq=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dy,p=new A.bC(p,p.r,p.e,A.n(p).i("bC<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.e6(p.d,a),$async$dq)
case 4:s=2
break
case 3:s=5
return A.a(q.fo(),$async$dq)
case 5:s=6
return A.a(q.fE(),$async$dq)
case 6:s=7
return A.a(q.tE(),$async$dq)
case 7:return A.e(null,r)}})
return A.f($async$dq,r)},
e6(a,b){return this.tT(a,b)},
tT(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$e6=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.CW.$0()
h=i-B.c.N(b.a,1000)
j.a=0
o=p.au(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ai("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$e6)
case 5:l=d
if(J.by(l)){s=4
break}if(A.nD(p)!=null)A.t(A.y(u.L))
k=p.b
k===$&&A.v()
s=6
return A.a(k.aW(new A.ur(j,p,l,a,h,o),B.p,n),$async$e6)
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
A.up.prototype={
$1(a){return A.Gd(this.a.a,this.b.c,"",a)},
$S:6}
A.us.prototype={
$1(a){return this.nv(a)},
nv(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
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
A.D(m)
n=n.h(0,"record_id")
n.toString
s=5
return A.a(l.Z("lp_outbox","store = ? AND record_id = ?",[m,A.D(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ur.prototype={
$1(a){return this.nu(a)},
nu(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.y,j=q.e,i=q.f,h=q.b,g=h.ay,h=h.ch
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.D(f)
a1=J
s=4
return A.a(a0.ai("SELECT b.id FROM "+('"'+A.z(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.by(a4)){s=2
break}s=5
return A.a(a0.ai("SELECT * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.M(e)
c=d.gW(e)?A.cf(i,d.gG(e),g,h):null
s=6
return A.a(A.cA(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.Z(n,"id = ?",[f]),$async$$1)
case 7:d=A.as([f],m)
l.push(new A.a1(n,d))
k.r+=d.a
if(c!=null){d=A.n(c).i("T<1>")
b=d.i("al<o.E>")
a=A.mc(b.i("o.E"))
a.C(0,new A.al(new A.T(c,d),new A.uq(),b))
a2.bb(new A.aS(n,f,B.H,B.aW,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uq.prototype={
$1(a){return a!=="id"},
$S:10}
A.oa.prototype={
wC(){var s,r,q=this,p=new A.aI(new A.w($.C,t.D),t.h)
q.e=p
s=q.a.a
s.e.aV(new A.yL(q,p),t.H)
r=s.at
s=q.gv7()
if(r.a>0)A.cR(r,s)
else A.cR(B.D,s)},
jY(){var s,r=this
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
b2.c+=b1}b3=new A.jp()
$.ky()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aX&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.nd("PRAGMA synchronous=FULL",null),$async$cF)
case 5:b1.b="FULL"
case 4:i=A.j([],t.gi)
h=A.j([],t.eb)
g=A.j([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.yK(m,i,h,l,g),t.P),$async$cF)
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
b8.al(A.f_(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.t(A.y("Future already completed"))
b8.aK(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dy,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.vE(a0.b)
b6.uM(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a1=f[b7]
b6.uN(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.F(c2)
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
if((b6.a.a&30)!==0)A.t(A.y("Future already completed"))
b6.al(A.f_(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.t(A.y("Future already completed"))
b6.al(A.f_(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.nd("PRAGMA synchronous=NORMAL",null),$async$cF)
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
b1.qy()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.q)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.t(A.y("Future already completed"))
a4.al(A.f_(new A.bl("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cF,r)}}
A.yL.prototype={
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
A.yK.prototype={
$1(a){return this.nR(a)},
nR(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.Cx(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.pi(new A.yI(a,a0),null,A.m([$.kA(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.eW([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.F(a1)
l=A.ad(a1)
o.e.push(new A.eW([B.b.gap(a.c),null,m,l]))
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
return A.a(A.pi(new A.yJ(a0,k),null,A.m([$.kA(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.eW([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.F(a2)
h=A.ad(a2)
e.push(new A.eW([k,null,i,h]))
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
$S:54}
A.yI.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:55}
A.yJ.prototype={
$0(){return this.a.a2(new A.yH(this.b),t.z)},
$S:55}
A.yH.prototype={
$1(a){return this.a.a.$1(a)},
$S:114}
A.hs.prototype={}
A.co.prototype={}
A.wx.prototype={}
A.xk.prototype={
aW(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.w($.C,t._)
r.c.push(new A.hs(a,new A.aI(s,t.jk)))
return s.X(new A.xr(c),c)}return this.rX(a,b,c)},
rX(a,b,c){var s,r,q,p=this
if(p.a.at.a>0){s=p.c
if(s!=null)s.jY()}s=A.j([],t.i4)
r=new A.oa(p,b,s)
p.c=r
r.wC()
q=new A.w($.C,t._)
s.push(new A.hs(a,new A.aI(q,t.jk)))
return q.X(new A.xn(c),c)},
wn(a,b){var s,r=this.a
if(r.at.a>0){s=this.c
if(s!=null)s.jY()}return r.e.aV(new A.xq(this,a,b),b)},
qy(){if(++this.d<64)return
this.d=0
A.cR(B.D,new A.xm(this))}}
A.xr.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xn.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xq.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.xp(s,this.b,r),r)},
$S(){return this.c.i("A<0>()")}}
A.xp.prototype={
$1(a){return this.nQ(a,this.c)},
nQ(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.Cx(p.a.a.a,a,A.j([],t.gi),!0,null)
n=p.c
m=t.X
q=A.pi(new A.xo(p.b,o,n),null,A.m([$.kA(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("A<0>(r0)")}}
A.xo.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.xm.prototype={
$0(){this.a.a.a.iw().ms(new A.xl())},
$S:0}
A.xl.prototype={
$1(a){},
$S:24}
A.ot.prototype={}
A.v0.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:56}
A.v1.prototype={
$2(a,b){return B.c.a0(a.a,b.a)},
$S:116}
A.uY.prototype={
$1(a){return a.h(0,"name")},
$S:40}
A.v_.prototype={
$1(a){return this.nz(a)},
nz(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.ay,j=j.ch,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.cf(k,p,i,j)
n=o
A.Ix(k,n)
g=J.R(o,"id")
g.toString
A.D(g)
m=A.dm(k,J.x(J.R(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aC(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:54}
A.mA.prototype={
wl(a){if(a>this.w)this.w=a},
n4(){return this.f++}}
A.ut.prototype={
u2(a,b){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null,d=null
try{s=t.G.a(B.h.aw(B.o.f_(B.aq.v(a)),null))
i=J.R(s,"store")
h=J.R(s,"schemaVer")
g=J.R(s,"shape")
f=J.R(s,"ir")
q=t.lH
p=q.a(J.R(s,"sort"))
if(p==null)p=B.ai
e=A.bD(p,!0,t.N)
r=b?J.R(s,"pv"):J.R(s,"values")
q=q.a(r)
if(q==null)q=B.ai
d=A.bD(q,!0,t.X)}catch(o){q=A.Cq(j)
throw A.b(q)}n=k.c
if(!J.x(i,k.a)||!J.x(h,k.b)||!J.x(g,k.d)||!J.x(f,1)||!B.c1.Y(e,n)||J.aq(d)!==n.length)throw A.b(A.Cq("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=d,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bH(l)&&!A.ai(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.Cq(j))}return d}}
A.Aa.prototype={
Y(a,b){var s,r=a.length
if(r!==b.length)return!1
for(s=0;s<r;++s)if(a[s]!==b[s])return!1
return!0}}
A.wn.prototype={
l(a){var s=this.b
return"QueryIR(v1, "+this.a+", limit: "+A.r(s.e)+", backward: "+s.z+")"}}
A.d6.prototype={}
A.a9.prototype={}
A.c5.prototype={}
A.dr.prototype={}
A.cZ.prototype={}
A.b_.prototype={}
A.cm.prototype={}
A.mJ.prototype={
ct(a,b){var s=this.gdW()
s.y.n4()
return this.c.ai(a,b)},
c_(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bD(i.d,!0,h)
h=A.bD(i.e,!0,h)
s=a0==null?A.bD(i.r,!0,t.k5):a0
r=f==null?i.w:f
q=a==null?i.x:a
if(a1==null){p=i.y
p=p==null?null:A.bD(p,!0,t.N)}else p=a1
o=d==null?i.z:d
n=e==null?i.Q:e
m=c==null?i.as:c
l=b==null?i.at:b
k=a2==null?i.ax:a2
j=A.bD(i.f,!0,t.jS)
return new A.mJ(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
fV(){var s=null
return this.c_(s,s,s,s,s,s,s,s,s)},
lf(a){var s=null
return this.c_(s,s,s,s,s,s,s,a,s)},
pr(a){var s=null
return this.c_(s,s,s,a,s,s,s,s,s)},
ps(a){var s=null
return this.c_(s,s,s,s,a,s,s,s,s)},
pp(a){var s=null
return this.c_(a,s,s,s,s,s,s,s,s)},
pt(a){var s=null
return this.c_(s,s,s,s,s,a,s,s,s)},
pv(a,b,c){var s=null
return this.c_(s,s,s,s,s,s,a,b,c)},
pu(a,b){var s=null
return this.c_(s,a,b,s,s,s,s,s,s)},
pq(a){var s=null
return this.c_(s,s,a,s,s,s,s,s,s)},
cT(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aP('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.au('Unknown field "'+a+'" for query.',a))},
be(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cT(a0)
s='"'+A.z(a0,'"','""')+'"'
r=A.j([],t.fC)
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
if(i)r.push(new A.b_(s+b,[A.kr(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b_(s+b,["%"+A.kr(a3)]))
g=a2!=null
if(g)r.push(new A.b_(s+b,["%"+A.kr(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b_(s+" IS NULL",B.n))
e=a8===!0
if(e)r.push(new A.b_(s+" IS NOT NULL",B.n))
d=this.fV()
B.b.C(d.d,r)
c=A.j([],t.k)
if(q)c.push(new A.a9(a0,"eq",[a4]))
if(p)c.push(new A.c5(new A.a9(a0,"eq",[b2])))
if(o)c.push(new A.a9(a0,"gt",[a5]))
if(n)c.push(new A.a9(a0,"gte",[a6]))
if(m)c.push(new A.a9(a0,"lt",[b0]))
if(l)c.push(new A.a9(a0,"lte",[b1]))
if(k)c.push(new A.a9(a0,"inValues",a7))
if(j)c.push(new A.a9(a0,"between",[a1.a,a1.b]))
if(i)c.push(new A.a9(a0,"startsWith",[b3]))
if(h)c.push(new A.a9(a0,"endsWith",[a3]))
if(g)c.push(new A.a9(a0,"contains",[a2]))
if(f)c.push(new A.a9(a0,"isNull",B.n))
if(e)c.push(new A.c5(new A.a9(a0,"isNull",B.n)))
B.b.C(d.f,c)
return d},
x0(a,b,c){var s=null
return this.be(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
xa(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
x3(a,b,c){var s=null
return this.be(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
x4(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
x8(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
x9(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
x5(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
wY(a,b,c){var s=null
return this.be(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
xb(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
x_(a,b,c){var s=null
return this.be(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
wZ(a,b,c){var s=null
return this.be(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
x7(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
x6(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
w7(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.j([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
p=A.j([],j)
q.a7(0,new A.wk(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.fV()
o.e.push(new A.b_("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.j([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.q)(a),++r){q=a[r]
if(q.gW(0)){m=A.j([],j)
for(l=q.gab().gu(0);l.k();){k=l.gn()
m.push(new A.a9(k.a,"eq",[k.b]))}s.push(new A.dr(m))}}o.f.push(new A.cZ(s))
return o},
jE(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.a9
r=s?a.a:l
if(s){this.cT(r)
break A}s=a instanceof A.c5
q=s?a.a:l
if(s){this.jE(q)
break A}p=a instanceof A.dr
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.q)(n),++m)this.jE(n[m])
break A}},
gc0(){var s,r=A.O(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga1(r).a!=="id"
else s=!1
if(s)r.push(B.d1)
return r},
glc(){var s,r,q,p,o
if(this.at){s=A.j([],t.fi)
for(r=this.gc0(),q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.push(new A.cm(o.a,!o.b))}}else s=this.gc0()
return s},
grW(){var s,r,q,p,o,n=A.j([],t.s)
for(s=this.gc0(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
ju(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.E6('Query on "'+this.gaO()+'" requires .limit(n) or .all().'))
return s},
gaO(){return this.b.a},
gdW(){return this.a},
eB(a,a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.s,d=A.j([],e),c=[],b=A.j([],e)
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
if(r!=null){n=f.glj().u2(r,f.at)
m=f.lE(f.glc(),n)
d.push(m.a)
B.b.C(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.z(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.z(a,'"','""')+'"')+") AS v"}else r=f.grJ()
k=r}j=f.glc()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.wf(),A.a_(j).i("X<1,l>")).B(0,", ")
h=A.IR(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.wg(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.ju():a3
g=e}return new A.a4(h+(g==null?"":" LIMIT "+A.r(g)),c)},
iU(a){return this.eB(null,null,!1,!1,a)},
pg(a,b){return this.eB(a,b,!1,!1,null)},
pe(){return this.eB(null,null,!1,!1,null)},
ph(a,b,c){return this.eB(a,null,b,c,null)},
pf(a){return this.eB(null,null,!1,a,null)},
grJ(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.l0())return"*"
o=A.O(o,t.N)
for(s=this.gc0(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(!B.b.F(o,p))o.push(p)}return new A.X(o,A.B5(),A.a_(o).i("X<1,l>")).B(0,", ")},
glj(){var s=this.b
return new A.ut(s.a,s.b,this.grW(),this.grT())},
grT(){var s,r,q,p,o,n=this,m=A.j([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.j([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.j([o.a,o.b],q))}return B.h.a6(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cD(a,new A.wh(a)),c=B.b.cD(b,new A.wi())
if(a.length>=2&&d&&!B.b.gG(a).b&&c){s=A.j([],t.s)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.q)(a),++q){p=a[q]
s.push('"'+A.z(p.a,'"','""')+'"')}o=B.b.B(s,", ")
n=B.b.gG(a).b?"<":">"
return new A.a4("("+o+") "+n+" ("+B.b.B(A.af(b.length,"?",!1,t.N),", ")+")",b)}s=t.s
m=A.j([],s)
l=[]
for(k=0;k<a.length;++k){j=A.j([],s)
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
B.b.C(l,i)}}if(m.length===0)return B.dh
return new A.a4("("+B.b.B(m," OR ")+")",l)},
lF(a,b){var s,r,q,p,o=this.glj(),n=[]
for(s=this.gc0(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)n.push(a.h(0,s[q].a))
s=[]
for(r=this.gc0(),p=r.length,q=0;q<r.length;r.length===p||(0,A.q)(r),++q)s.push(b.h(0,r[q].a))
o=B.e.v(B.h.a6(A.m(["store",o.a,"schemaVer",o.b,"sort",o.c,"shape",o.d,"ir",1,"cv",2,"values",n,"pv",s],t.N,t.K),null))
return B.bw.gf4().v(o)},
e8(a){return this.v0(a)},
cE(){return this.e8(null)},
v0(a1){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$e8=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:a0=a1==null?p.ju():a1
if(a0===0){q=B.d2
s=1
break}o=a0==null
n=p.iU(o?null:a0+1)
s=3
return A.a(p.ct(n.a,n.b),$async$e8)
case 3:m=a3
l=o?m:J.BP(m,a0).er(0)
k=!o&&J.aq(m)>a0
o=p.y
j=o!=null
i=j&&p.l0()
h=p.b
if(i){i=A.O(o,t.N)
B.b.C(i,p.r5())
g=A.Mh(h,l,p.gdW().ay,i,p.gdW().ch)}else g=A.Mg(h,l,p.gdW().ay,p.gdW().ch)
i=p.at
if(i&&g.length!==0){h=A.a_(g).i("bT<1>")
f=A.O(new A.bT(g,h),h.i("Z.E"))
B.b.am(g)
B.b.C(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.hb(g),$async$e8)
case 7:e=a3
d=k
s=5
break
case 6:d=p.as!=null&&g.length!==0
e=k
case 5:c=j?A.MS(g,o):g
if(g.length!==0){b=e?p.lF(B.b.ga1(g),B.b.gG(g)):null
a=d?p.lF(B.b.ga1(g),B.b.gG(g)):null}else{b=null
a=null}q=new A.co(c,b,a,e,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e8,r)},
hb(a){return this.r_(a)},
r_(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$hb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga1(a)
e=p.gc0()
n=[]
for(m=p.gc0(),l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k)n.push(o.h(0,m[k].a))
j=p.lE(e,n)
e=t.s
i=A.j([],e)
h=[]
g=A.j([],e)
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
return A.a(p.ct("SELECT 1 FROM "+('"'+A.z(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$hb)
case 3:q=d.e8(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hb,r)},
l0(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.f8(o)==null)return!1}return!0},
r5(){var s,r,q,p,o=A.j([],t.s)
for(s=this.gc0(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hE(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hE=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pf(!0)
m=A
s=3
return A.a(p.ct(o.a,o.b),$async$hE)
case 3:n=m.f4(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hE,r)},
hG(a){return this.tV(a)},
tV(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cT(a)
o=p.ph(a,!0,!0)
m=A
s=3
return A.a(p.ct(o.a,o.b),$async$hG)
case 3:n=m.f4(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
hO(a){return this.uG(a)},
uG(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hO=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cT(a)
o=A.j([a],t.s)
n=A.j([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pv(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.iU(h)
o=[]
f=J
s=3
return A.a(i.ct(B.a.kr(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hO)
case 3:n=f.E(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)},
qn(a){var s,r,q=this.b.f8(a)
if(q==null)return!1
s=q.b
A:{r=B.S===s||B.T===s||B.B===s||B.U===s
break A}return r},
cS(a,b){return this.oN(a,b)},
oN(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cS=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cT(b)
if(!p.qn(b))throw A.b(A.au('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pg(b,a)
s=3
return A.a(p.ct(o.a,o.b),$async$cS)
case 3:n=d
m=J.M(n)
q=A.Fn(m.gE(n)?null:J.R(m.gG(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cS,r)},
i4(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$i4=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lf(A.j(["id"],m))
k=l.pe()
s=3
return A.a(l.ct(k.a,k.b),$async$i4)
case 3:j=b
m=A.j([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.D(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i4,r)},
hQ(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$hQ=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.iU(p.ju())
n=J
s=3
return A.a(p.ct("EXPLAIN QUERY PLAN "+o.a,o.b),$async$hQ)
case 3:q=n.bM(b,new A.wj(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)}}
A.wk.prototype={
$2(a,b){this.a.cT(a)
this.b.push('"'+A.z(a,'"','""')+'" = ?')
this.c.push(b)},
$S:117}
A.wf.prototype={
$1(a){var s=A.z(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:118}
A.wg.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.z(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:119}
A.wh.prototype={
$1(a){return a.b===B.b.gG(this.a).b},
$S:120}
A.wi.prototype={
$1(a){return a!=null},
$S:22}
A.wj.prototype={
$1(a){return a.h(0,"detail")},
$S:40}
A.cN.prototype={
l(a){return"SearchResult(id: "+this.a+", score: "+A.r(this.b)+")"},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.cN&&b.a===this.a&&b.b===this.b
else s=!0
return s},
gI(a){return A.c6(this.a,this.b,B.d,B.d,B.d,B.d,B.d)}}
A.wE.prototype={
rI(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.E6('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
cE(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$cE=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a3=n.d
if(B.a.ci(a3).length===0){q=B.cL
s=1
break}m=null
l=null
f=n.b
e=f.w
d=e.c.ej(a3)
A.J1(d)
if(e.b)A.J0(d)
c=f.a
b=c+"_fts"
a=A.j(['"'+A.z(b,'"','""')+'" MATCH ?'],t.s)
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
k.y.n4()
s=7
return A.a(n.c.ai(m,l),$async$cE)
case 7:j=a6
i=A.j([],t.kj)
for(a3=J.E(j);a3.k();){h=a3.gn()
f=J.R(h,"id")
f.toString
A.D(f)
e=J.R(h,"score")
e.toString
J.aL(i,new A.cN(f,A.Fm(e)))}q=i
s=1
break
p=2
s=6
break
case 4:p=3
a4=o.pop()
i=A.F(a4)
if(i instanceof A.c8){g=i
throw A.b(A.au("Invalid search term: "+g.a,null))}else throw a4
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cE,r)}}
A.c4.prototype={
a4(){return"FieldKind."+this.b}}
A.aX.prototype={
gkM(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.av===s||B.I===s||B.V===s||B.W===s||B.J===s){r="TEXT"
break A}if(B.S===s||B.B===s||B.U===s){r="INTEGER"
break A}if(B.T===s){r="REAL"
break A}throw A.b(A.fU(u.P))}return r},
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
A.rx.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fq(B.cF,A.D(m))
m=n.h(0,"name")
m.toString
A.D(m)
r=J.x(n.h(0,"required"),!0)
q=J.x(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aX(m,B.av,r,J.x(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aX(m,B.S,r,!1,q,o,o,!1)
case 2:return new A.aX(m,B.T,r,!1,q,o,o,!1)
case 3:return new A.aX(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aX(m,B.U,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aX(m,B.I,r,!1,!1,A.fC(J.po(t.j.a(n),p),p),o,!1)
case 6:return new A.aX(m,B.V,!1,!1,q,o,o,!1)
case 7:return new A.aX(m,B.W,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aX(m,B.J,!1,!1,!1,o,A.D(p),J.x(n.h(0,"enforceFk"),!0))}},
$S:121}
A.iC.prototype={
a4(){return"IndexScope."+this.b}}
A.dz.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.tk.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.po(t.j.a(q),t.N)
s=J.x(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dz(q,s,A.fq(B.cA,A.D(r)))},
$S:122}
A.fy.prototype={
p(){var s,r=t.N,q=t.X,p=A.u(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gW(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fy&&r.b===b.b&&B.ax.Y(r.a,b.a)&&r.c.R(0,b.c)
else s=!0
return s},
gI(a){return A.c6(A.vb(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.rN.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.po(t.j.a(p),s)
r=J.x(r.h(0,"fuzzy"),!0)
return new A.fy(p,r,t.f.b(q)?A.I3(q.c5(0,s,t.X)):B.cf)},
$S:123}
A.en.prototype={
ej(a){var s,r,q,p
for(s=this.a.gab(),s=s.gu(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.F(r,p))continue
q=q.b
r=A.z(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.en&&A.I2(this.a,b.a)
else s=!0
return s},
gI(a){var s,r,q,p=this.a,o=p.gK(),n=A.O(o,A.n(o).i("o.E"))
B.b.aE(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.q)(n),++r){q=n[r]
o.push(A.c6(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.vb(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.rM.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.u(s,s)
for(o=t.d2.a(o).gab(),o=o.gu(o);o.k();){q=o.gn()
p=q.a
p.toString
A.D(p)
q=q.b
q.toString
A.D(q)
A.DR(p,q)
r.j(0,p,q)}return new A.en(A.HL(r,s,s))},
$S:124}
A.c9.prototype={
p(){var s,r,q,p=A.j([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.wU.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ao(o)
s=J.x(p.h(0,"destructive"),!0)
r=A.j([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.ai:p)
q=t.G
while(p.k())r.push(A.DM(q.a(p.gn())))
return new A.c9(o,s,r)},
$S:125}
A.v2.prototype={
a4(){return"MissingRemotePolicy."+this.b}}
A.qs.prototype={}
A.c1.prototype={
gd9(){var s,r,q,p,o=this,n=$.GD()
A.BX(o)
s=n.a.get(o)
if(s==null){s=A.aN(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
f8(a){var s,r,q,p,o,n=this,m=$.GE()
A.BX(n)
s=m.a.get(n)
if(s==null){s=A.u(t.N,t.d9)
for(r=n.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.j(0,o.a,o)}m.j(0,n,s)
m=s}else m=s
return J.R(m,a)},
p(){var s,r,q,p,o,n,m=this,l=t.N,k=t.X,j=A.u(l,k)
j.j(0,"name",m.a)
j.j(0,"version",m.b)
s=t.d
r=A.j([],s)
for(q=m.c,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o)r.push(q[o].p())
j.j(0,"fields",r)
r=A.j([],s)
for(q=m.d,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){n=q[o]
r.push(A.m(["columns",n.a,"unique",n.b,"scope",n.c.b],l,k))}j.j(0,"indexes",r)
j.j(0,"keepUnsyncedArchives",m.r)
j.j(0,"prefetchFiles",m.f)
l=m.Q
if(l!=null)j.j(0,"attachmentField",l)
l=m.w
if(l!=null)j.j(0,"fts",l.p())
l=A.j([],s)
for(k=m.x,s=k.length,o=0;o<k.length;k.length===s||(0,A.q)(k),++o)l.push(k[o].p())
j.j(0,"migrations",l)
return j}}
A.q_.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j="attachmentField",i=this.a,h=i.h(0,"name")
h.toString
A.D(h)
s=i.h(0,"version")
s.toString
A.ao(s)
r=A.j([],t.mK)
q=i.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.DM(o.a(q.gn())))
q=A.j([],t.mr)
n=i.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.Ic(o.a(n.gn())))
p=J.x(i.h(0,"keepUnsyncedArchives"),!0)
n=J.x(i.h(0,"prefetchFiles"),!0)
if(typeof i.h(0,j)=="string"){m=i.h(0,j)
m.toString
A.D(m)}else m=null
if(t.f.b(i.h(0,"fts"))){l=i.h(0,"fts")
l.toString
l=A.I4(o.a(l))}else l=null
k=A.j([],t.c0)
i=t.lH.a(i.h(0,"migrations"))
i=J.E(i==null?B.ai:i)
while(i.k())k.push(A.Ja(o.a(i.gn())))
return new A.c1(h,s,r,q,n,p,l,k,m,this.b.i("c1<0>"))},
$S(){return this.b.i("c1<0>()")}}
A.mX.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.wA.prototype={
$1(a){return!1},
$S:56}
A.wB.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.I)},
$S:11}
A.wC.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.eB)},
$S:57}
A.wD.prototype={
$1(a){return J.a0(a)},
$S:127}
A.v6.prototype={}
A.dJ.prototype={
a4(){return"MutationAction."+this.b}}
A.fg.prototype={
gaO(){return this.b.a.a},
eD(){var s=this.d
if(s!=null&&s.e){s=this.gaO()
throw A.b(new A.fV('Cannot mutate "'+s+'" through a read-only Tx.'))}},
ik(a){var s=this
if(s.d!=null)return s.hl(B.a_,a)
return s.a.aW(new A.qd(s,a),B.p,t.H)},
ne(a){var s=this
if(s.d!=null)return s.hl(B.a0,a)
return s.a.aW(new A.qg(s,a),B.p,t.H)},
n1(a){var s=this
if(s.d!=null)return s.lQ(a)
return s.a.aW(new A.qc(s,a),B.p,t.H)},
nf(a){var s=this
if(s.d!=null)return s.bs(a,B.a0)
return s.a.aW(new A.qf(s,a),B.p,t.H)},
mZ(a,b){var s=this
if(s.d!=null)return s.qR(a,b)
return s.a.aW(new A.qa(s,a,b),B.p,t.H)},
n_(a){var s=this
if(s.d!=null)return s.eJ(a)
return s.a.aW(new A.q9(s,a),B.p,t.H)},
eJ(a){return this.qT(a)},
qT(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$eJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eD()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aM(a,o.i("aM<1,2>")).gu(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cq(m.a,m.b,!0),$async$eJ)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aN(t.N)
for(o=new A.bC(a,a.r,a.e,o.i("bC<1>"));o.k();)l.t(0,o.d)
n.a_(new A.a1(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$eJ,r)},
ml(a){var s=this
if(s.d!=null)return s.hk(B.C,a)
return s.a.aW(new A.q8(s,a),B.p,t.H)},
n9(a){var s=this
if(s.d!=null)return s.hk(B.E,a)
return s.a.aW(new A.qe(s,a),B.p,t.H)},
kl(a){var s=this
if(s.d!=null)return s.d2(a)
return s.a.aW(new A.qb(s,a),B.p,t.H)},
d2(a){return this.r6(a)},
r6(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eD()
s=2
return A.a(q.dV(a),$async$d2)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cA(n,m,a,!0),$async$d2)
case 3:s=4
return A.a(n.Z(m,"id = ?",[a]),$async$d2)
case 4:l=t.N
o.a_(new A.a1(m,A.as([a],l)))
if(p!=null){l=A.d2(p.gK(),l)
l.H(0,"id")
o.bb(new A.aS(m,a,B.H,B.aW,p,null,l))}return A.e(null,r)}})
return A.f($async$d2,r)},
cq(a,b,c){return this.qS(a,b,c)},
qR(a,b){return this.cq(a,b,!1)},
qS(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eD()
s=3
return A.a(p.c.b.ai("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cq)
case 3:o=e
n=J.M(o)
if(n.gW(o)){m=n.gG(o)
l=A.ju(m)
k=m.h(0,"o_kind")!=null?A.mx(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eK(a,b,l,k,c),$async$cq)
case 6:s=1
break
case 5:s=7
return A.a(p.d0(a,b,c,k,l),$async$cq)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cq,r)},
d0(a,b,c,d,e){return this.pO(a,b,c,d,e)},
pO(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d0=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dV(a),$async$d0)
case 2:m=g
if(m==null)throw A.b(A.Cl("No record "+q.gaO()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cJ(m,p,o)
n.C(0,b)
o=A.u(p,o)
o.j(0,"id",a)
o.C(0,n)
s=3
return A.a(q.aL(B.K,c,m,a,d,e,o),$async$d0)
case 3:return A.e(null,r)}})
return A.f($async$d0,r)},
eK(a,b,c,d,e){return this.qU(a,b,c,d,e)},
qU(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
f.C(0,a8)
m=f
J.bY(m,"id",a7)
e=new A.a2("")
f=n.b
d=f.a
c=A.AY(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cJ(m,h,g)
b.H(0,"id")
n.ho(a7,b,a,c)
a0=n.lm(a5,m,B.K)
l=null
b=a0.length===1&&d.gd9().F(0,B.b.gap(a0))
a1=n.a
a2=a1.ay
a3=a1.ch
if(b){a4=d.f8(B.b.gap(a0))
b=a4.a
l=A.m([b,A.G9(d,a4,J.R(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dm(d,J.x(J.R(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.c.b.L(d.a,l,"id = ?",[a7]),$async$eK)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.F(a6)
h=A.Gy(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.cx
g===$&&A.v()
b=l
s=8
return A.a(g.bm(B.K,null,a0,n.c.b,a7,m,a5,b0,a,b,a9,f),$async$eK)
case 8:if(!b1){g=n.d
if(g!=null)g.a_(new A.a1(d.a,A.as([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bb(new A.aS(d.a,a7,B.H,B.A,a5,m,A.uw(a0,A.a_(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eK,r)},
aL(a,b,c,d,e,f,g){return this.qv(a,b,c,d,e,f,g)},
hl(a,b){var s=null
return this.aL(a,!1,s,s,s,s,b)},
hk(a,b){var s=null
return this.aL(a,!1,s,b,s,s,s)},
t_(a,b,c){var s=null
return this.aL(a,b,s,s,s,s,c)},
t0(a,b,c,d,e,f){return this.aL(a,b,c,null,d,e,f)},
qv(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aL=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.eD()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.q3(b5,n,c2,c1)
s=b7===B.a_?3:5
break
case 3:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.i_()
g=$.pm()
if(!g.b.test(h))throw A.b(A.au('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=6
return A.a(i.$1(m),$async$aL)
case 6:l=n.eG(c3,m)
b7=b5.a==null?B.b7:B.K
s=4
break
case 5:s=b7===B.K?7:9
break
case 7:c0.toString
m=c0
s=10
return A.a(i.$1(m),$async$aL)
case 10:if(b5.a==null)throw A.b(A.Cl("No record "+n.gaO()+"/"+A.r(m)+" to update."))
c3.toString
l=n.eG(c3,m)
s=8
break
case 9:s=b7===B.a0?11:13
break
case 11:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.i_()
g=$.pm()
if(!g.b.test(h))throw A.b(A.au('Invalid record id "'+h+'"; expected [a-z0-9]{15}.',"id"))
m=h
s=14
return A.a(i.$1(m),$async$aL)
case 14:g=b5.a
if(g==null){l=n.eG(c3,m)
b7=B.b7}else{l=A.cJ(g,t.N,t.X)
for(g=new A.aM(c3,A.n(c3).i("aM<1,2>")).gu(0);g.k();){f=g.d
e=f.a
if(e==="id")continue
J.bY(l,e,f.b)}b7=B.K}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aL)
case 15:g=b5.a
if(g==null)throw A.b(A.Cl("No record "+n.gaO()+"/"+A.r(m)+" to archive/restore."))
g=A.cJ(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.a2("")
g=n.b
e=g.a
c=l
b=A.AY(d,e,c,J.aq(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.ho(m,l,a,b)
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
return A.a(c.bR(n.c.b,e.a,m),$async$aL)
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
return A.a(c.en(n.c.b,e.a,m),$async$aL)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a4)throw A.b(A.DF("Record "+n.gaO()+"/"+A.r(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.aj(A.bg(e,a3))
a2=A.ap(B.l.v(B.e.v(a6)).a)
a7=new A.pG(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ay
a8=a3.ch
a9=A.dm(e,J.x(J.R(l,"archived"),!0),a4,a8,c,a2)
b0=n.lm(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gd9().F(0,B.b.gap(b0))){b1=e.f8(B.b.gap(b0))
c=b1.a
k=A.m([c,A.G9(e,b1,J.R(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
a2=n.c.b
s=b5.a==null?34:36
break
case 34:s=37
return A.a(a2.aC(0,c,k),$async$aL)
case 37:s=35
break
case 36:s=38
return A.a(a2.L(c,k,"id = ?",[m]),$async$aL)
case 38:case 35:p=2
s=33
break
case 31:p=30
b6=o.pop()
j=A.F(b6)
g=A.Gy(j,l)
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
return A.a(c.bm(b7,a7,b0,n.c.b,a2,l,a3,a1,a,a9,a0,g),$async$aL)
case 39:switch(b7.a){case 2:case 0:case 1:b3=b5.a==null?B.ab:B.A
break
case 3:b3=B.A
break
case 4:b3=B.c2
break
case 5:b3=B.c3
break
default:b3=null}if(b7===B.C||b7===B.E)b4=A.as(["archived"],t.N)
else if(b5.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("al<o.E>")
b4=A.d2(new A.al(new A.T(g,c),new A.q2(),a2),a2.i("o.E"))}else b4=A.uw(b0,A.a_(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bb(new A.aS(e.a,m,B.H,b3,b5.a,l,b4))
if(!b8)if(!c)g.a_(new A.a1(e.a,A.as([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aL,r)},
bs(a,b){return this.rf(a,b)},
lQ(a){return this.bs(a,B.a_)},
rf(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bs=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:n.eD()
if(c2.length===0){s=1
break}g=n.d
m=g.b
f=n.b.a
e=f.a
l=A.j([],t.jO)
for(d=c2.length,c=!0,b=0;b<c2.length;c2.length===d||(0,A.q)(c2),++b){a=c2[b]
a0=a.h(0,"id")
a1=a0==null
if(!a1)c=!1
A.a6(a0)
a2=a1?A.i_():a0
a1=$.pm()
if(!a1.b.test(a2))throw A.b(A.au('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aL(l,new A.a4(a2,a))}if(!c){a3=A.u(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.ar(a3,a3.$ti.i("ar<2>")).bM(0,new A.q7())}else a5=!1
s=c3===B.a_&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dT(m,l),$async$bs)
case 9:k=A.aN(t.N)
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
if(!(A.F(c0) instanceof A.hp))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.u(k,t.G)
j=n.a,d=j.ay,j=j.ch,a1=t.s,a8=0
case 10:if(!(a8<J.aq(l))){s=12
break}a9=a8+2000
b0=B.c.bN(a9,0,J.aq(l))
a4=A.j([],a1)
for(b1=J.Hr(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.q)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.cg(e,"id IN ("+B.b.B(A.af(a4.length,"?",!1,k),", ")+")",a4),$async$bs)
case 13:a4=c1.E(c5)
case 14:if(!a4.k()){s=15
break}b1=a4.gn()
b2=b1.h(0,"id")
b2.toString
a7.j(0,A.D(b2),A.cf(f,b1,d,j))
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
b6=B.b.T(b5,a8,B.c.bN(a9,0,j))
b7=B.b.B(A.af(b6.length,"?",!1,k),", ")
j=A.j([e],a1)
B.b.C(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.cg("lp_sync_row",f,j),$async$bs)
case 19:d=c1.E(c5)
case 20:if(!d.k()){s=21
break}a4=d.gn()
b1=a4.h(0,"record_id")
b1.toString
b3.j(0,A.D(b1),A.ju(a4))
s=20
break
case 21:c1=J
s=22
return A.a(m.cg("lp_outbox",f,j),$async$bs)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.D(d),A.mx(f))
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
case 28:a1=A.dE(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
s=31
return A.a(n.t_(c3,!0,a1),$async$bs)
case 31:s=29
break
case 30:a1=A.dE(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.t0(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bs)
case 32:b8.t(0,a2)
case 29:case 26:j.length===f||(0,A.q)(j),++b
s=25
break
case 27:g.a_(new A.a1(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bs,r)},
dT(a,b){return this.rg(a,b)},
rg(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dT=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a4=n.c.b
s=a4 instanceof A.ip?3:4
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
if(l)J.aL(k,new A.a4(h,e));++j
case 11:a7.length===a0||(0,A.q)(a7),++a1
s=10
break
case 12:p=2
s=9
break
case 7:p=6
a5=o.pop()
s=A.F(a5) instanceof A.c8?14:16
break
case 14:d=A.j([],t.s)
for(c=0;c<j;++c)J.aL(d,a7[c].a)
b=d
s=17
return A.a(n.cZ(a6,b),$async$dT)
case 17:throw A.b(new A.hp())
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
a.bb(new A.aS(a0,a3.a,B.H,B.ab,null,e,J.Dp(e.gK(),new A.q6()).fC(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dT,r)},
dU(a,b){return this.rh(a,b)},
rh(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dU=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.CW.$0()
d1=o.c.b
d2=t.s
d3=A.j(["id"],d2)
for(a8=c8.c,a9=a8.length,b0=0;b0<a8.length;a8.length===a9||(0,A.q)(a8),++b0)d3.push(a8[b0].a)
d3.push("extra")
d3.push("archived")
d3.push("hidden")
n=d3
d3=c8.a
m='INSERT INTO "'+d3+'" ('+A.i3(n)+") VALUES "
l="INSERT INTO lp_outbox ("+A.i3(B.Y)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.i3(B.X)+") VALUES "
j=new A.q5()
b1=new A.a2("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.j([],t.jO):null
i=0,a9=b3==null,b4=c9.ay,b5=c9.ch,b6=c8.b
case 2:if(!(b7=i,b8=d6.length,b7<b8)){s=4
break}h=B.x.bN(i+500,0,b8)
g=h-i
f=[]
e=[]
d=[]
for(b9=i;b9<h;++b9){c0=d6[b9]
c1=c0.a
c2=c0.b
c3=b2?o.eG(c2,c1):c2
b1.a=""
c4=A.AY(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.ho(c1,c3,c5,c4)
A.LF(f,c8,J.x(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.cx
b7===$&&A.v()
c6=b7.fI()
A.FZ(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.G_(d,B.a5,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a4(c1,c3))}c=!1
b=!1
q=6
b7=d1.cj(A.r(m)+A.r(j.$2(J.aq(n),g)))
if(b7.r||b7.b.r)A.t(A.y(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eA(new A.bO(f))
b7.h_()
c=!0
b7=d1.cj(A.r(l)+A.r(j.$2(11,g)))
if(b7.r||b7.b.r)A.t(A.y(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eA(new A.bO(e))
b7.h_()
b=!0
b7=d1.cj(A.r(k)+A.r(j.$2(16,g)))
if(b7.r||b7.b.r)A.t(A.y(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.eA(new A.bO(d))
b7.h_()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.F(d4) instanceof A.c8?9:11
break
case 9:a=A.j([],d2)
for(a0=0;a0<i;++a0)J.aL(a,d6[a0].a)
a1=a
s=12
return A.a(o.cZ(d5,a1),$async$dU)
case 12:s=c||b?13:14
break
case 13:a2=A.j([],d2)
for(a3=i;a3<h;++a3)J.aL(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.af(J.aq(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.Z(d3,"id IN ("+A.r(a5)+")",a4),$async$dU)
case 17:case 16:s=b?18:19
break
case 18:a6=A.j([d3],d2)
J.Dk(a6,a4)
a7=a6
s=20
return A.a(d5.Z("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dU)
case 20:case 19:case 14:throw A.b(new A.hp())
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
a8.bb(new A.aS(d3,a2.a,B.H,B.ab,null,c3,J.Dp(c3.gK(),new A.q4()).fC(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dU,r)},
ez(a,b,c,d,e){return this.oR(a,b,c,d,e)},
oR(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ez=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eG(b1,b0)
a3=new A.a2("")
a4=A.AY(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.ho(b0,a2,a6,a4)
a5=n.a
m=A.dm(a1,J.x(a2.h(0,"archived"),!0),a5.ay,a5.ch,b0,a2)
a5=a5.cx
a5===$&&A.v()
e=a5.fI()
a5=a1.a
l=A.G1("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.M_('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dG(new A.T(d,c),new A.q0(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.af(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=a9.cj(f)
d=m
a=A.n(d).i("ar<2>")
d=A.O(new A.ar(d,a),a.i("o.E"))
c.e7(new A.bO(d))
j=!0
a9.cj("INSERT INTO lp_outbox ("+A.i3(B.Y)+") VALUES ("+B.b.B(A.af(11,"?",!1,b),", ")+")").e7(new A.bO(A.Gs(l,B.Y)))
i=!0
a9.cj("INSERT INTO lp_sync_row ("+A.i3(B.X)+") VALUES ("+B.b.B(A.af(16,"?",!1,b),", ")+")").e7(new A.bO(A.Gs(k,B.X)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.Z(a5,"id = ?",[b0]),$async$ez)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.Z("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$ez)
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
cZ(a,b){return this.pz(a,b)},
pz(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$cZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.af(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.Z(m,"id IN ("+o+")",b),$async$cZ)
case 3:m=A.j([m],t.s)
B.b.C(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.Z("lp_outbox",n,m),$async$cZ)
case 4:s=5
return A.a(a.Z("lp_sync_row",n,m),$async$cZ)
case 5:case 1:return A.e(q,r)}})
return A.f($async$cZ,r)},
eG(a,b){var s,r,q,p=A.u(t.N,t.X)
for(s=a.gab(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.km("archived",new A.q1())
return p},
lm(a,b,c){var s,r,q,p,o
if(a==null)return B.cM
s=t.N
r=A.aN(s)
s=A.d2(a.gK(),s)
s.C(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hC(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.t.Y(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.O(r,r.$ti.c)
B.b.aE(o)
return o},
dV(a){return this.rl(a)},
rl(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dV=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.c.b.ai('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dV)
case 3:m=c
l=J.M(m)
if(l.gE(m)){q=null
s=1
break}o=p.a
q=A.cf(n,l.gG(m),o.ay,o.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dV,r)},
hc(a){return this.r0(a)},
r0(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$hc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.c.b.ai('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$hc)
case 3:j=c
k=J.M(j)
if(k.gE(j)){q=B.dj
s=1
break}o=k.gG(j)
k=p.a
n=A.cf(l,o,k.ay,k.ch)
m=o.h(0,"s_sync_state")!=null?A.ju(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.eV(n,m,o.h(0,"o_kind")!=null?A.mx(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hc,r)},
bV(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g,f
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
if(l.gE(j)){if(f)o.e.kJ(a,null)
q=null
s=1
break}i=l.gG(j)
l=p.a
h=A.cf(n,i,l.ay,l.ch)
g=A.be(i.h(0,"lp_schema_ver"))
if(g==null)g=1
if(g<m)h=A.LG(n,h,g,m)
if(f)o.e.kJ(a,h)
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bV,r)},
ho(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.au('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.D1(p,n)
if(m!=null)throw A.b(A.au(A.HG(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.au("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.qd.prototype={
$1(a){return a.by(this.a.b.a.a).ik(this.b)},
$S:4}
A.qg.prototype={
$1(a){return a.by(this.a.b.a.a).ne(this.b)},
$S:4}
A.qc.prototype={
$1(a){return a.by(this.a.b.a.a).n1(this.b)},
$S:4}
A.qf.prototype={
$1(a){return a.by(this.a.b.a.a).nf(this.b)},
$S:4}
A.qa.prototype={
$1(a){return a.by(this.a.b.a.a).mZ(this.b,this.c)},
$S:4}
A.q9.prototype={
$1(a){return a.by(this.a.b.a.a).n_(this.b)},
$S:4}
A.q8.prototype={
$1(a){return a.by(this.a.b.a.a).ml(this.b)},
$S:4}
A.qe.prototype={
$1(a){return a.by(this.a.b.a.a).n9(this.b)},
$S:4}
A.qb.prototype={
$1(a){return a.by(this.a.b.a.a).kl(this.b)},
$S:4}
A.q3.prototype={
nl(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.hc(a),$async$$1)
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
$1(a){return this.nl(a)},
$S:128}
A.q2.prototype={
$1(a){return a!=="id"},
$S:10}
A.q7.prototype={
$1(a){return a>1},
$S:129}
A.q6.prototype={
$1(a){return a!=="id"},
$S:10}
A.q5.prototype={
$2(a,b){var s=t.N
return B.b.B(A.af(b,"("+B.b.B(A.af(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:130}
A.q4.prototype={
$1(a){return a!=="id"},
$S:10}
A.q0.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.q1.prototype={
$0(){return!1},
$S:58}
A.hp.prototype={$iG:1}
A.o9.prototype={}
A.pt.prototype={
aV(a,b){var s=this.a.X(new A.pu(a,b),b)
this.a=s.bU(new A.pv(b),new A.pw(),t.H)
return s}}
A.pu.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("A<0>(~)")}}
A.pv.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.pw.prototype={
$2(a,b){},
$S:9}
A.bh.prototype={
gn7(){var s=this.e
return s.gm(s)===1&&J.x(s.h(0,"__lp_deleted__"),!0)}}
A.qt.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.D(d)
s=e.h(0,"record_id")
s.toString
A.D(s)
r=A.B6(e.h(0,l),l,k)
q=A.B6(e.h(0,j),j,k)
p=A.B6(e.h(0,i),i,k)
o=A.G7(e.h(0,h),h,k)
n=A.G7(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ao(m)
return new A.bh(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.B6(e.h(0,f),f,k):null)},
$S:132}
A.qu.prototype={
ff(a){return this.vL(a)},
vL(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m,l
var $async$ff=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a.a
m===$&&A.v()
m=m.gbn()
o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
l=J
s=3
return A.a(m.b.wf("lp_conflicts","detected_at ASC",n,o),$async$ff)
case 3:o=l.bM(c,A.M5(),t.n8)
m=A.O(o,o.$ti.i("Z.E"))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ff,r)},
dv(a,b){return this.nW(a,b)},
nW(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$dv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.a.a
n===$&&A.v()
s=3
return A.a(n.gbn().b.aI("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$dv)
case 3:o=d
n=J.M(o)
if(n.gE(o)){q=null
s=1
break}q=A.BS(n.gG(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dv,r)},
wX(a){var s={},r=A.CF()
s.a=null
r.sjX(A.dO(new A.qx(s,r),new A.qy(s,this,a,new A.qz(this,r,a)),t.ba))
return r.bu().gcR()},
eo(a,b,c){return this.wD(a,b,c)},
wD(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$eo=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(c)
s=2
return A.a(p.a2(new A.qv(q,c,a,o.a,o,b),t.P),$async$eo)
case 2:return A.e(null,r)}})
return A.f($async$eo,r)},
eX(a,b){return this.tv(a,b)},
tv(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dv(a,b),$async$eX)
case 2:p=d
if(p==null)throw A.b(A.y("No conflict found for "+a+"/"+b))
s=3
return A.a(q.eo(b,p.d,a),$async$eX)
case 3:return A.e(null,r)}})
return A.f($async$eX,r)},
e0(a,b){return this.tw(a,b)},
tw(a,b){var s=0,r=A.h(t.H),q,p=this,o
var $async$e0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.dv(a,b),$async$e0)
case 3:o=d
if(o==null)throw A.b(A.y("No conflict found for "+a+"/"+b))
s=o.gn7()?4:5
break
case 4:s=6
return A.a(p.a.by(a).kl(b),$async$e0)
case 6:s=1
break
case 5:s=7
return A.a(p.eo(b,o.e,a),$async$e0)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e0,r)}}
A.qz.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bu().gi6()){s=1
break}p=4
s=7
return A.a(n.a.ff(n.c),$async$$0)
case 7:m=b
if(!i.bu().gi6())J.aL(i.bu(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.F(h)
k=A.ad(h)
if(!i.bu().gi6())i.bu().bx(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.qy.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b0(p,A.n(p).i("b0<1>")).aS(new A.qw(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qw.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:28}
A.qx.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.w?p:A.bv(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bu().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qv.prototype={
$1(a){return this.nm(a)},
nm(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aI("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.M(a3)
if(a4.gE(a3))throw A.b(A.y("No conflict found for "+a1+"/"+a2))
o=A.BS(a4.gG(a3))
n=o.gn7()
m=n?null:A.aj(o.e)
l=n?"":A.ap(B.l.v(B.e.v(A.aj(A.bg(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aI(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.by(a8)?4:5
break
case 4:s=7
return A.a(a0.Z("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.Z("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.Z("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a_(new A.a1(a1,A.as([a2],a4)))
a6.a_(new A.a1("lp_conflicts",A.as([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aI("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.M(k)
if(i.gW(k)){h=A.a6(J.R(i.gG(k),"base_updated"))
i=h==null?A.a6(J.R(i.gG(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.Z("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cJ(p.f,i,h)
g.j(0,"id",a2)
f=J.x(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dm(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bI(n?B.j:o.e,g)
d=A.O(a4,A.n(a4).c)
B.b.aE(d)
c=A.aj(A.bg(e,g))
s=13
return A.a(a0.L("lp_sync_row",A.m(["sync_state","dirty","base_json",m,"base_hash",l,"base_updated",j,"dirty_fields",B.h.a6(d,null)],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 13:a5=J
s=17
return A.a(a0.aI("lp_outbox",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 17:s=a5.by(a8)?14:16
break
case 14:a4=p.a.a
b=a4.CW.$0()
h=f?B.L:B.v
e=B.h.a6(d,null)
a4=a4.cx
a4===$&&A.v()
s=18
return A.a(a0.aC(0,"lp_outbox",A.G1(l,j,b,e,h,a4.fI(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a_(new A.a1(a1,A.as([a2],i)))
a6.a_(new A.a1("lp_conflicts",A.as([a2],i)))
a4=o.d
a=A.bI(a4,g)
a.H(0,"id")
a6.bb(new A.aS(a1,a2,B.ac,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.ng.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dO(null,null,t.n6)
n.ay=A.dO(null,null,t.em)}n.z=!0
s=3
return A.a(n.aN(B.dt),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.ih(),$async$az)
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
n.fr=new A.b0(l,A.n(l).i("b0<1>")).aS(n.gvp())
l=n.b.ay
n.fx=new A.b0(l,A.n(l).i("b0<1>")).aS(n.gvn())
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
case 12:n.fy=A.Es(B.au,new A.xf(n))
s=14
return A.a(n.aN(n.dH()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.d5(),$async$az)
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
return A.a(o instanceof A.w?o:A.bv(o,n),$async$aF)
case 7:o=p.fx
o=o==null?null:o.D()
s=8
return A.a(o instanceof A.w?o:A.bv(o,n),$async$aF)
case 8:o=p.ax
s=(o.c&4)===0?9:11
break
case 9:p.y=B.N
o.t(0,B.N)
s=12
return A.a(p.ax.q(),$async$aF)
case 12:s=10
break
case 11:p.y=B.N
case 10:o=p.ay
s=(o.c&4)===0?13:14
break
case 13:s=15
return A.a(o.q(),$async$aF)
case 15:case 14:p.y=B.N
case 1:return A.e(q,r)}})
return A.f($async$aF,r)},
dH(){if(this.at)return B.bk
if(this.Q)return B.bi
if(this.as)return B.aC
return B.bj},
aN(a){return this.t6(a)},
t6(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.pH(),$async$aN)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aN,r)},
pH(){return this.p2=this.p2.X(new A.x7(this),t.H)},
fW(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fW=A.c(function(a,b){if(a===1){o.push(b)
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
return A.a(g.hF(),$async$fW)
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
if((g.c&4)===0)g.t(0,new A.hc(n.y,m,l,k,j,n.ch,n.CW,n.cx))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$fW,r)},
vq(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.rG(B.ae)},
vo(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dy.J(s))return
r=a.c
if(r!=null&&a.b===B.a9){q.p1.push("fast:"+s)
q.dx=q.dx.X(new A.xd(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hj(B.ae,A.j([s],t.s))},
h0(a){return this.pP(a)},
pP(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h0=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hj(B.ae,A.j([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.v()
s=7
return A.a(l.hR(a),$async$h0)
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
break}if(!m)n.hj(B.ae,A.j([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h0,r)},
vy(){if(!this.z)return
this.p1.push("cycle")
this.d5()},
hj(a,b){var s=this,r=s.go
if(r!=null)r.D()
if(b==null)s.k2=!0
else s.k3.C(0,b)
s.go=A.cR(a,new A.xc(s))},
rG(a){return this.hj(a,null)},
rF(a){var s=this.id
if(s!=null)s.D()
this.id=A.cR(B.D,new A.xb(this,a))},
jl(){this.as=!0
this.aN(B.aC)
A.iy(this.d,t.H)},
eg(){var s=0,r=A.h(t.H),q,p=this,o
var $async$eg=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.cx
o===$&&A.v()
s=3
return A.a(o.wB(),$async$eg)
case 3:s=4
return A.a(p.aN(p.dH()),$async$eg)
case 4:p.p1.push("cycle")
s=5
return A.a(p.d5(),$async$eg)
case 5:case 1:return A.e(q,r)}})
return A.f($async$eg,r)},
fN(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.H),q=this,p
var $async$fN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.D()
q.k1=A.cR(B.at,new A.xe(q))
s=3
break
case 4:s=5
return A.a(q.aN(B.bi),$async$fN)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fN,r)},
bd(){var s=0,r=A.h(t.H),q=this
var $async$bd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aN(B.bk),$async$bd)
case 2:return A.e(null,r)}})
return A.f($async$bd,r)},
b1(){var s=0,r=A.h(t.H),q,p=this
var $async$b1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aN(p.dH()),$async$b1)
case 3:p.p1.push("cycle")
s=4
return A.a(p.d5(),$async$b1)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b1,r)},
jv(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.D()}s=t.mv
r=q.k4.X(new A.x8(q,a),s)
q.k4=r.bU(new A.x9(),new A.xa(),s)
return r},
d5(){return this.jv(null)},
b6(a){return this.pE(a)},
pE(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b6=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aN(n.dH()),$async$b6)
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
return A.a(n.aN(B.du),$async$b6)
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
return A.a(a5.dj(h),$async$b6)
case 14:g=c0
J.bY(m,h,g.b)
if(g.f&&g.b>0)J.aL(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.F(b4)
if(a5 instanceof A.c0){n.jl()
s=9
break}else if(a5 instanceof A.bu){f=a5
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
return A.a(n.aN(B.aC),$async$b6)
case 17:q=n.ok=new A.bn(m,B.ak,0,0,0,0,!0)
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
a5=J.R(l,c.a)
if(a5==null)a5=0
J.bY(l,a4,a5+c.b)}p=2
s=23
break
case 21:p=20
b5=o.pop()
b3=A.F(b5)
if(b3 instanceof A.bu){b=b3
k=!0
n.ch=b.a}else throw b5
s=23
break
case 20:s=2
break
case 23:case 19:s=25
return A.a(n.aN(B.dv),$async$b6)
case 25:a=B.a2
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.v()
s=33
return A.a(b3.fq(),$async$b6)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b0("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b6)
case 36:a0=c0
if(J.e8(a0)&&typeof J.R(J.bZ(a0),"last_error")=="string"){b3=J.R(J.bZ(a0),"last_error")
b3.toString
n.ch=A.D(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.F(b6)
if(b3 instanceof A.c0)n.jl()
else if(b3 instanceof A.bu){a1=b3
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
return A.a(b3.bq(),$async$b6)
case 41:a2=c0
k=k||a2.d
if(a2.d&&n.ch==null)n.ch="file sync failed"
p=2
s=40
break
case 38:p=37
b7=o.pop()
a3=A.F(b7)
k=!0
n.ch=A.r(a3)
s=40
break
case 37:s=2
break
case 40:if(!(n.z&&b2===n.db)){q=B.O
s=1
break}if(J.aq(i)!==0)n.rF(i)
a9=k||a.f
b0=new A.aW(A.lo(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dH()
s=42
return A.a(n.aN(a9&&b1===B.bj?B.dw:b1),$async$b6)
case 42:q=n.ok=new A.bn(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b6,r)}}
A.xf.prototype={
$1(a){return this.a.vy()},
$S:52}
A.x7.prototype={
$1(a){return this.a.fW()},
$S:29}
A.xd.prototype={
$1(a){return this.a.h0(this.b)},
$S:29}
A.xc.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.O(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.ji()}if(r||p.length===0)s.d5()
else s.jv(p)},
$S:0}
A.xb.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.jv(this.b)},
$S:0}
A.xe.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aN(p.dH()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.d5(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.x8.prototype={
$1(a){return this.a.b6(this.b)},
$S:136}
A.x9.prototype={
$1(a){return B.O},
$S:137}
A.xa.prototype={
$1(a){return B.O},
$S:138}
A.d3.prototype={
l(a){return"MapFailure: "+this.a},
$iG:1}
A.ew.prototype={}
A.B1.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.B2.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.uQ.prototype={}
A.dH.prototype={}
A.mf.prototype={}
A.zQ.prototype={}
A.zO.prototype={}
A.y8.prototype={}
A.uX.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.uW(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:140}
A.uR.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.uS.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.uT.prototype={
$1(a){return typeof a=="string"},
$S:17}
A.uU.prototype={
$1(a){return a instanceof A.w?a:A.b9(a,t.X)},
$S:141}
A.uV.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hC(s,s.r,A.n(s).c),r=this.b,q=J.M(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:142}
A.vd.prototype={
f2(a){return this.uJ(a)},
uJ(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f2=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.CW.$0()
e=e.r
s=3
return A.a(e.wh("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f2)
case 3:o=c
n=t.ox
m=A.j([],n)
for(l=J.E(o);l.k();)m.push(A.IF(l.gn()))
l=A.aN(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.q)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.kv(e,l),$async$f2)
case 4:h=c
g=A.j([],n)
for(e=m.length,j=0;j<m.length;m.length===e||(0,A.q)(m),++j){f=m[j]
if(g.length>=a)break
n=f.z
if(n!=null&&h.F(0,n))continue
g.push(f)}q=g
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f2,r)},
mW(a){return this.a.a2(new A.vf(a),t.H)},
vV(a,b,c,d){return this.a.a2(new A.vg(c,d,b,a),t.H)}}
A.vf.prototype={
$1(a){return this.nA(a)},
nA(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vg.prototype={
$1(a){return this.nB(a)},
nB(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.pG.prototype={}
A.iN.prototype={}
A.jf.prototype={}
A.vi.prototype={
fI(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cI(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
en(a,b,c){return this.wq(a,b,c)},
wq(a,b,c){var s=0,r=A.h(t.dY),q,p,o
var $async$en=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aI("lp_outbox",1,"store = ? AND record_id = ?",[b,c]),$async$en)
case 3:p=e
o=J.M(p)
q=o.gE(p)?null:A.mx(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$en,r)},
bR(a,b,c){return this.ws(a,b,c)},
ws(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bR=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aI("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bR)
case 3:p=e
o=J.M(p)
q=o.gE(p)?null:A.ju(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bR,r)},
bm(a,b,c,d,e,f,g,h,i,j,k,l){return this.tG(a,b,c,d,e,f,g,h,i,j,k,l)},
tG(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bm=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a4)throw A.b(A.DF("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.an
a4=b2==null
n=a4?null:b2.c
m=!1
if(a4){A:{if(B.C===a5){l=a6==null?B.v:B.L
break A}if(B.E===a5){l=a6==null?B.v:B.a1
break A}l=B.v
break A}n=l}else{l=b2.e
switch(b2.c.a){case 0:if(l==null){m=a5===B.C&&!a1.r
n=m?n:B.v}else{B:{if(B.C===a5){l=B.L
break B}if(B.E===a5){l=B.a1
break B}l=B.v
break B}n=l}break
case 1:C:{if(B.E===a5){l=B.a1
break C}l=B.L
break C}n=l
break
case 2:D:{if(B.C===a5){l=B.L
break D}if(B.E===a5){l=B.a1
break D}l=B.v
break D}n=l
break}}s=m?3:4
break
case 3:s=5
return A.a(a8.Z("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bm)
case 5:s=6
return A.a(a8.Z("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bm)
case 6:s=7
return A.a(p.hp(a8,a2,a9),$async$bm)
case 7:s=8
return A.a(a8.Z(a2,"id = ?",[a9]),$async$bm)
case 8:q=B.bO
s=1
break
case 4:k=p.a.CW.$0()
j=a4?null:b2.w
if(j==null)j=p.fI()
i=a4?null:b2.e
if(i==null)i=a6==null?null:a6.c
l=a4?null:b2.f
if(l==null){l=a6==null?null:a6.b
h=l}else h=l
if(h==null)h=""
g=a3?null:b5.r
if(g==null)g=a6==null?null:a6.a
if(i!=null&&g==null)throw A.b(A.h7("Outbox base snapshot for "+a2+"/"+a9+' is inconsistent: base_updated "'+i+'" without base_json.'))
l=t.N
f=A.aN(l)
e=a4?null:b2.r
if(e!=null)f.C(0,e)
f.C(0,a7)
d=A.O(f,f.$ti.c)
B.b.aE(d)
c=a4?null:b2.x
if(c==null)c=k
b=B.h.a6(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.i3(B.Y)
e=B.b.B(A.af(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aD("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.Gk(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bm)
case 12:s=10
break
case 11:s=13
return A.a(a8.aD('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bm)
case 13:case 10:f=A.j(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.C(f,B.cG)
if(o)B.b.C(f,B.cu)
s=a3?14:16
break
case 14:a3=A.i3(B.X)
l=B.b.B(A.af(16,"?",!1,l),", ")
s=17
return A.a(a8.aD("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.Gw(B.a5,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bm)
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
return A.a(a8.aD(a3.charCodeAt(0)==0?a3:a3,a1),$async$bm)
case 18:case 15:q=new A.iN()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bm,r)},
hp(a,b,c){return this.te(a,b,c)},
te(a,b,c){var s=0,r=A.h(t.H)
var $async$hp=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cA(a,b,c,!1),$async$hp)
case 2:return A.e(null,r)}})
return A.f($async$hp,r)},
f3(a,b){return this.uK(a,b)},
uK(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a2("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.O([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ai("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f3)
case 3:o=d
f=J.M(o)
if(f.gE(o)){q=B.cK
s=1
break}e=t.my
n=A.j([],e)
for(f=f.gu(o);f.k();)n.push(A.mx(f.gn()))
f=A.aN(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.q)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.kv(g,f),$async$f3)
case 4:j=d
i=A.j([],e)
for(g=n.length,l=0;l<n.length;n.length===g||(0,A.q)(n),++l){h=n[l]
if(i.length>=a)break
f=h.z
if(f!=null&&j.F(0,f))continue
i.push(h)}q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f3,r)},
kK(a){if(a.length===0)return A.b9(null,t.H)
return this.a.a2(new A.vo(this,a),t.H)},
aH(a,b){return this.rS(a,b)},
rS(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aH=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
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
return A.a(b.aI("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 5:o=a9
n=J.M(o)
s=!(n.gW(o)&&!J.x(J.R(n.gG(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aI(a,1,"id = ?",[a1]),$async$aH)
case 8:m=a9
n=J.M(m)
l=n.gW(m)?A.cf(a3,n.gG(m),a2.ay,a2.ch):null
s=9
return A.a(b.L(a,A.dm(a3,J.x(a5.h(0,"archived"),!0),a2.ay,a2.ch,a1,a5),"id = ?",[a1]),$async$aH)
case 9:a6.a_(new A.a1(a0,A.as([a1],t.N)))
k=A.bI(l==null?B.j:l,a5)
k.H(0,"id")
a6.bb(new A.aS(a0,a1,B.ac,B.A,l,a5,k))
case 7:case 4:a=a3.a
s=10
return A.a(b.aI(a,1,"id = ?",[a1]),$async$aH)
case 10:j=a9
a5=J.M(j)
s=a5.gE(j)?11:12
break
case 11:s=13
return A.a(b.Z("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 13:s=14
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aH)
case 14:a6.a_(new A.a1(a0,A.as([a1],t.N)))
s=1
break
case 12:n=a2.ay
a2=a2.ch
i=A.cf(a3,a5.gG(j),n,a2)
h=A.ap(B.l.v(B.e.v(A.aj(A.bg(a3,i)))).a)
a5=a7.b
g=A.ap(B.l.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.Z("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 18:s=19
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aH)
case 19:a6.a_(new A.a1(a0,A.as([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.aw(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.bb(d,a5,f):A.u(a5,f)
s=23
return A.a(b.L(a,A.dm(a3,J.x(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aH)
case 23:s=24
return A.a(b.Z("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 24:s=25
return A.a(p.d1(b,a0,a1,a7.c,a4),$async$aH)
case 25:a6.a_(new A.a1(a0,A.as([a1],a5)))
k=A.bI(i,c)
k.H(0,"id")
a6.bb(new A.aS(a0,a1,B.ac,B.A,i,c,k))
s=21
break
case 22:g=A.ap(B.l.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aH)
case 28:a6.a_(new A.a1(a0,A.as([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aH,r)},
d1(a,b,c,d,e){return this.qq(a,b,c,d,e)},
qq(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d1=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d1)
case 2:s=3
return A.a(a.L(q.a.au(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d1)
case 3:return A.e(null,r)}})
return A.f($async$d1,r)},
wt(a,b,c,d,e){return this.a.a2(new A.vm(c,e,d,B.G,a,b),t.H)},
mV(a,b,c,d,e,f){return this.a.a2(new A.vl(this,c,f,b,a,d,e),t.H)},
fh(a,b,c,d,e){return this.mV(a,b,c,d,B.an,e)},
mU(a,b,c){return this.a.a2(new A.vk(a,c,b),t.H)},
wB(){return this.a.a2(new A.vn(null),t.S)},
eY(a,b,c,d,e,f,g){return this.tD(a,b,c,d,e,f,g)},
tD(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
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
A.vo.prototype={
$1(a){return this.nG(a)},
nG(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
$S:4}
A.vm.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vl.prototype={
$1(a){return this.nD(a)},
nD(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
A.vk.prototype={
$1(a){return this.nC(a)},
nC(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vn.prototype={
$1(a){return this.nF(a)},
nF(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.j(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:143}
A.e9.prototype={
a4(){return"ApplyResult."+this.b}}
A.mI.prototype={}
A.vZ.prototype={
dj(a){return this.wc(a)},
wc(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$dj=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.il(b4),$async$dj)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.H6().e9(n)
if(m==null)A.t(A.bk('Bad timestamp "'+n+'"'))
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
if(i<1||i>12||g>23||f>59||e>59)A.t(A.bk('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.BT(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.vQ(k))A.t(A.bk('Bad timestamp "'+n+'"'))
o=A.Mp(A.BT(j,i,h,g,f,e,d).iQ(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.is(B.c.bN(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.z
a4===$&&A.v()
s=6
return A.a(a4.fg(b4,null,a2,o,null,b),$async$dj)
case 6:a5=b6
a4=J.M(a5)
if(a4.gE(a5)){s=5
break}++a.ax
a6=p.qs(a5)
a7=k.h(0,b4)
if(a7==null)A.t(A.y(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.D7(a7.a,a5),$async$dj)
case 8:s=7
return A.a(b0.aV(new b1.w6(b2,p,b3,b6,a6),l),$async$dj)
case 7:o=a6.c
a2=a6.a;++c
if(a4.gm(a5)<b){s=5
break}if(c>=100){a3=!0
s=5
break}s=4
break
case 5:q=new A.mI(a8.d,a3)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dj,r)},
mb(a,b){var s=B.a.a0(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a0(a.a,b.b)<=0},
t7(a,b){var s=B.a.a0(a.c,b.c)
if(s!==0)return s>0
return B.a.a0(a.a,b.a)>0},
qs(a){var s,r,q,p=J.aB(a),o=p.gG(a)
for(p=p.bi(a,1),s=p.$ti,p=new A.at(p,p.gm(0),s.i("at<Z.E>")),s=s.i("Z.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.t7(q,o))o=q}return o},
hR(a){return this.uZ(a)},
uZ(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aV(new A.w0(o,p,a),t.P),$async$hR)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hR,r)},
dd(a,b){return this.v1(a,b)},
v1(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dd=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bD(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dy,e=n.b,d=A.a_(j),c=d.c,d=d.i("ct<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.ct(j,0,200,d)
a2.iL(j,0,200,c)
a3=a2.er(0)
a4=a3.length
b&1&&A.H(j,18)
A.bd(0,a4,j.length)
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
return A.a(a7.bW(l),$async$dd)
case 12:k=b5
p=2
s=11
break
case 9:p=8
b1=o.pop()
a7=A.F(b1)
if(a7 instanceof A.cK){J.aL(m,l)
s=6
break}else if(a7 instanceof A.c0)throw b1
else if(a7 instanceof A.bu){s=6
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
case 7:s=J.aq(m)!==0?13:14
break
case 13:s=15
return A.a(n.fj(b2,m),$async$dd)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.t(A.y(a1))
b0=a9.a
a2=A.j([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.q)(a5),++a6)a2.push(A.D8(b0,a5[a6]))
s=16
return A.a(i.aV(new A.w2(n,a2,b2,b0),h),$async$dd)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dd,r)},
dQ(a,b,c,d){return this.qZ(a,b,c,d)},
qZ(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dQ=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.u(c,t.nw)
a=A.u(c,t.G)
o=p.a,n=o.ay,m=o.ch,o=o.dy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.T(a4,k,B.c.bN(i,0,j))
g=B.b.B(A.af(h.length,"?",!1,c),", ")
j=[a2]
B.b.C(j,h)
a0=J
s=6
return A.a(a1.ai(u.m+g+")",j),$async$dQ)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.D(e),A.ju(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.t(A.y(l))
a0=J
s=9
return A.a(a1.cg(d.a.a,"id IN ("+g+")",h),$async$dQ)
case 9:j=a0.E(a6)
case 10:if(!j.k()){s=11
break}f=j.gn()
e=f.h(0,"id")
e.toString
a.j(0,A.D(e),A.cf(a3,f,n,m))
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
mk(a,b,c,d,e){return this.a5(a,b,A.D8(this.a.au(b).a,c),null,!1,d,e)},
tI(a,b,c){return this.mk(a,b,c,null,!1)},
a5(a,b,c,d,e,f,g){return this.tH(a,b,c,d,e,f,g)},
mj(a,b,c){return this.a5(a,b,c,null,!1,null,!1)},
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
return A.a(n.bI(a4,a7,b2,a8,a9),$async$a5)
case 5:q=B.a7
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
return A.a(n.bI(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a5)
case 8:q=B.a7
s=1
break
case 7:g=a8.a
f=$.pm()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bI(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a5)
case 11:q=B.a7
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
return A.a(g.bR(a4,b2,a8.a),$async$a5)
case 15:e=b9
case 13:m=e
s=b5?16:18
break
case 16:d=b4
s=17
break
case 18:s=19
return A.a(a4.aI(a6.a,1,"id = ?",[a8.a]),$async$a5)
case 19:c=b9
g=J.M(c)
d=g.gE(c)?null:A.cf(a7,g.gG(c),a5.ay,a5.ch)
case 17:g=a8.e.length!==0||d!=null
s=g?20:21
break
case 20:s=22
return A.a(n.e.di(a4,a8.a,a8.e,b2),$async$a5)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.Hl(a4,a6.a,A.dm(a7,J.x(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9)),$async$a5)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.d7(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 26:b1.a_(new A.a1(b2,A.as([a8.a],t.N)))
b=A.bI(B.j,a9)
b.H(0,"id")
b1.bb(new A.aS(b2,a8.a,B.as,B.ab,null,a9,b))
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
return A.a(n.c3(b1,b2,a8.a,a8.c,!1),$async$a5)
case 31:q=B.a8
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dm(a7,J.x(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9),"id = ?",[a8.a]),$async$a5)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.d7(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 33:b1.a_(new A.a1(b2,A.as([a8.a],t.N)))
b=A.bI(d,a9)
b.H(0,"id")
b1.bb(new A.aS(b2,a8.a,B.as,B.A,d,a9,b))
q=B.a6
s=1
break
case 28:s=a===B.G||a===B.bl||a===B.a4?34:35
break
case 34:a9=m
a9=a9==null?null:a9.e
s=a9===a8.c?36:37
break
case 36:s=38
return A.a(n.c3(b1,b2,a8.a,a8.c,!1),$async$a5)
case 38:q=B.a8
s=1
break
case 37:s=a===B.a4?39:40
break
case 39:s=41
return A.a(n.c3(b1,b2,a8.a,a8.c,!1),$async$a5)
case 41:q=B.a8
s=1
break
case 40:a0=A.bg(a7,d)
s=A.aj(a0)===i?42:43
break
case 42:s=44
return A.a(a4.Z("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a5)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.d7(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a5)
case 45:b1.a_(new A.a1(b2,A.as([a8.a],t.N)))
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
a5=A.F(b0)
s=a5 instanceof A.d3?50:52
break
case 50:k=a5
s=53
return A.a(n.bI(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a5)
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
a9=A.Gi(l,a0,new A.mf(null,B.Z,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bv(a9,t.r),$async$a5)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eQ(a4,b2,a8,a7,m,a0,l,a2),$async$a5)
case 57:s=58
return A.a(n.c3(b1,b2,a8.a,a8.c,!1),$async$a5)
case 58:a5=t.N
b1.a_(new A.a1(b2,A.as([a8.a],a5)))
b1.a_(new A.a1("lp_conflicts",A.as([a8.a],a5)))
q=B.bu
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dm(a7,J.x(a3.h(0,"archived"),!0),a5.ay,a5.ch,a9,a3),"id = ?",[a8.a]),$async$a5)
case 59:a5=a5.cx
a5===$&&A.v()
s=60
return A.a(a5.eY(a4,b2,a8.a,h,i,a8.c,A.aj(a3)),$async$a5)
case 60:s=61
return A.a(n.t4(b1,b2,a8.a,a8.c),$async$a5)
case 61:b1.a_(new A.a1(b2,A.as([a8.a],t.N)))
b=A.bI(d,a3)
b.H(0,"id")
b1.bb(new A.aS(b2,a8.a,B.ac,B.A,d,a3,b))
q=B.a6
s=1
break
case 35:q=B.a8
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a5,r)},
eQ(a,b,c,d,e,f,g,h){return this.rp(a,b,c,d,e,f,g,h)},
rp(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eQ=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bg(d,A.f6(d,c))
k=A.bI(g,f)
j=A.O(k,A.n(k).c)
B.b.aE(j)
k=A.bI(g,l)
p=A.O(k,A.n(k).c)
B.b.aE(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.aj(g)
n=t.N
m=t.X
s=2
return A.a(a.cb(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.aj(f),"remote_json",A.aj(l),"dirty_local",B.h.a6(j,null),"dirty_remote",B.h.a6(p,null),"detected_at",q.c.ay.$0()],n,m),B.R),$async$eQ)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.aj(l),"base_hash",A.ap(B.l.v(B.e.v(A.aj(A.bg(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eQ)
case 3:return A.e(null,r)}})
return A.f($async$eQ,r)},
bI(a,b,c,d,e){return this.ri(a,b,c,d,e)},
ri(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bI=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a6(d.d,null)}catch(a1){o=t.N
e=B.h.a6(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aC(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bI)
case 2:j=q.a.cx
j===$&&A.v()
s=3
return A.a(j.bR(a,c,m),$async$bI)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.N(o.mA(g).a,1000)
o=d.c
s=j?4:6
break
case 4:s=7
return A.a(a.aC(0,"lp_sync_row",A.m(["store",c,"record_id",m,"remote_updated",o,"sync_state","quarantine","attempt_count",g,"next_retry_at",f,"last_error",a0,"schema_ver",b.b],l,k)),$async$bI)
case 7:s=5
break
case 6:s=8
return A.a(a.L("lp_sync_row",A.m(["sync_state","quarantine","last_error",a0,"remote_updated",o,"attempt_count",g,"next_retry_at",f],l,k),"store = ? AND record_id = ?",[c,m]),$async$bI)
case 8:case 5:return A.e(null,r)}})
return A.f($async$bI,r)},
d7(a,b,c,d,e,f,g,h){return this.td(a,b,c,d,e,f,g,!0)},
td(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$d7=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aC(0,"lp_sync_row",o),$async$d7)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$d7)
case 6:case 3:return A.e(null,r)}})
return A.f($async$d7,r)},
c3(a,b,c,d,e){return this.t5(a,b,c,d,e)},
t4(a,b,c,d){return this.c3(a,b,c,d,!0)},
t5(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$c3=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=a.b
o=t.N
n=t.X
m=A.u(o,n)
m.j(0,"last_seen_at",q.c.ay.$0())
m.j(0,"access_state","visible")
if(e)m.j(0,"remote_updated",d)
s=2
return A.a(p.L("lp_sync_row",m,"store = ? AND record_id = ?",[b,c]),$async$c3)
case 2:s=3
return A.a(p.L(q.a.au(b).a.a,A.m(["hidden",0],o,n),"id = ? AND hidden <> 0",[c]),$async$c3)
case 3:if(g>0)a.a_(new A.a1(b,A.as([c],o)))
return A.e(null,r)}})
return A.f($async$c3,r)},
fj(a,b){return this.vW(a,b)},
vW(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fj=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bD(b,!0,t.N)
n=A.a_(o),m=n.c,n=n.i("ct<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.ct(o,0,500,n)
i.iL(o,0,500,m)
h=i.er(0)
g=h.length
l&1&&A.H(o,18)
A.bd(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aV(new A.w4(p,a,h),j),$async$fj)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fj,r)}}
A.w6.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.w5(s.a,r,s.c,s.d,s.e),t.P)},
$S:16}
A.w5.prototype={
$1(a){return this.nL(a)},
nL(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$$1=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:d=q.a
c=d.a
b=a4.b
a=q.b
a0=a.a
a1=q.c
a2=a0.au(a1)
a3=A.j([],t.s)
for(p=q.d,o=J.aB(p),n=o.gu(p);n.k();)a3.push(n.gn().a.a)
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
if(c!=null&&a.mb(i,c)){s=3
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
case 4:g=c==null||!a.mb(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.es(b,a1,e,f),$async$$1)
case 10:d.a=new A.jd(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.w0.prototype={
$0(){var s=this.b
return s.a.a2(new A.w_(this.a,s,this.c),t.P)},
$S:16}
A.w_.prototype={
$1(a){return this.nI(a)},
nI(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.cx
k===$&&A.v()
o=p.c
n=o.b
s=3
return A.a(k.bR(a.b,n,o.a),$async$$1)
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
return A.a(l.mk(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.w2.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.w1(r,s.b,s.c,s.d),t.P)},
$S:16}
A.w1.prototype={
$1(a){return this.nJ(a)},
nJ(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.j([],t.s)
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
return A.a(o.a5(a,m,h,j.h(0,g),!0,f,!0),$async$$1)
case 10:i.t(0,g)
case 7:case 4:p.length===e||(0,A.q)(p),++n
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.w4.prototype={
$0(){var s=this.a
return s.a.a2(new A.w3(s,this.b,this.c),t.P)},
$S:16}
A.w3.prototype={
$1(a){return this.nK(a)},
nK(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.au(g).a
e=h.au(g).a.a
d=q.c
c=t.N
b=B.b.B(A.af(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.u(c,t.G)
a1=J
s=2
return A.a(i.cg(e,a,d),$async$$1)
case 2:p=a1.E(a4),o=h.ay,h=h.ch
case 3:if(!p.k()){s=4
break}n=p.gn()
m=n.h(0,"id")
m.toString
a0.j(0,A.D(m),A.cf(f,n,o,h))
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
case 6:a2.a_(new A.a1(g,A.uw(d,A.a_(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.q)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dE(null,null,c,h)
p.C(0,j)
p.j(0,"hidden",!0)
a2.bb(new A.aS(g,k,B.as,B.c4,j,p,B.dk))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b3.prototype={}
A.w7.prototype={
fq(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.cx
f===$&&A.v()
s=3
return A.a(f.f3(25,p.c.ay.$0()),$async$fq)
case 3:o=b
f=J.M(o)
if(f.gE(o)){q=B.a2
s=1
break}if(p.f){q=p.b8(o)
s=1
break}f=f.gu(o),n=B.a2
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dR(f.gn()),$async$fq)
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
return A.f($async$fq,r)},
dR(a){return this.ra(a)},
ra(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dR=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.cx
l===$&&A.v()
m=m.r
s=3
return A.a(l.en(m,a.a,a.b),$async$dR)
case 3:o=c
if(o==null){q=B.a2
s=1
break}s=4
return A.a(l.bR(m,o.a,o.b),$async$dR)
case 4:n=c
if(n==null){q=B.a2
s=1
break}if(o.e==null){q=p.r8(o,n)
s=1
break}q=p.jn(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dR,r)},
bF(a,b,c,d,e){return this.qg(a,b,c,d,e)},
qf(a,b,c,d){return this.bF(a,b,c,!1,d)},
qd(a,b,c){return this.bF(a,b,c,!1,!1)},
qe(a,b,c,d){return this.bF(a,b,c,d,!1)},
qg(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bF=A.c(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(c.$0(),$async$bF)
case 7:k=g
q=k
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
k=A.F(i)
s=k instanceof A.c0?8:10
break
case 8:n.e.$0()
q=B.am
s=1
break
s=9
break
case 10:s=k instanceof A.cG?11:13
break
case 11:k=n.a.cx
k===$&&A.v()
s=14
return A.a(k.mU("forbidden_push",a.b,a.a),$async$bF)
case 14:q=B.d3
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
return A.a(n.cX(a,"validation_push",m.a),$async$bF)
case 20:q=B.M
s=1
break
case 19:q=n.cs(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cK){q=n.dL(a,b,!e)
s=1
break}else if(k instanceof A.bu){l=k
q=n.cs(a,b,l)
s=1
break}else throw i
case 16:case 12:case 9:s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bF,r)},
jm(a,b,c){return this.r9(a,b,c)},
r8(a,b){return this.jm(a,b,!1)},
r9(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jm=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bF(a,b,new A.w9(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jm,r)},
jr(a,b,c){return this.rq(a,b,c)},
rq(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qf(a,b,new A.we(p,a,p.a.au(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jr,r)},
jn(a,b){return this.rb(a,b)},
rb(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jn=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qd(a,b,new A.wc(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jn,r)},
d3(a,b,c,d){return this.re(a,b,c,d)},
rd(a,b,c){return this.d3(a,b,c,!1)},
re(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d3=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.l1(a,c)
j=n.a.au(a.a).a
i=a.d
s=A.ap(B.l.v(B.e.v(A.aj(A.bg(j,A.f6(j,c))))).a)===A.ap(B.l.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eO(a,c),$async$d3)
case 5:q=B.a3
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
i=A.F(f)
s=i instanceof A.d3?10:12
break
case 10:k=i
s=13
return A.a(n.cX(a,"corrupt_payload",k.a),$async$d3)
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
return A.a(n.dN(a,b,c,j,m,l),$async$d3)
case 14:g=a0
if(g==null){q=B.bc
s=1
break}q=n.bF(a,b,new A.wa(n,a,A.aj(A.bg(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d3,r)},
b8(a){return this.r7(a)},
r7(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b8=A.c(function(d1,d2){if(d1===1){o.push(d2)
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
return A.a(a2.en(a0,a1.a,a1.b),$async$b8)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bR(a0,m.a,m.b),$async$b8)
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
a1=A.F(c8)
s=a1 instanceof A.cK?12:14
break
case 12:s=m.e!=null?15:16
break
case 15:s=17
return A.a(n.lz(m,l),$async$b8)
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
q=B.am
s=1
break
s=19
break
case 20:s=a1 instanceof A.cG?21:23
break
case 21:a1=m.a
s=24
return A.a(a2.mU("forbidden_push",m.b,a1),$async$b8)
case 24:++c5
s=3
break
s=22
break
case 23:s=a1 instanceof A.bu?25:27
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
if(a1!==a5)A.t(A.et('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a2("")
A.ch(a7,A.bg(a4,A.f6(a4,k)))
a1=a7.a
a1=B.e.v(a1.charCodeAt(0)==0?a1:a1)
a8=new A.c2()
a5=A.cX(a8)
a5.t(0,a1)
a5.q()
a9=A.ap(a8.a.a)
a5=B.e.v(m.d)
a8=new A.c2()
a1=A.cX(a8)
a1.t(0,a5)
a1.q()
s=a9===A.ap(a8.a.a)?31:32
break
case 31:s=33
return A.a(n.eO(m,k),$async$b8)
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
a1=A.F(c9)
s=a1 instanceof A.d3?38:40
break
case 38:e=a1
a1=m.a
a5=m.b
s=41
return A.a(a2.fh(e.a,a5,"corrupt_payload",m.d,a1),$async$b8)
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
return A.a(n.dN(m,l,k,a4,g,f),$async$b8)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a2("")
A.ch(a7,A.bg(a4,b1))
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
case 43:b4=b.f
if(b4<=0)b4=25
if(25<b4)b4=25
b5=0
case 45:if(!(b6=b9.length,b5<b6)){s=47
break}b7=b5+b4
s=48
return A.a(n.c2(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$b8)
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
dN(a,b,c,d,e,f){return this.qt(a,b,c,d,e,f)},
qt(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dN=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.f6(d,c)
n=A.Gi(e,f,new A.mf(null,B.Z,!1),a.b,A.bg(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bv(n,t.r),$async$dN)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.he(a,b,c,m,e,f),$async$dN)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dN,r)},
c2(a,b,c){return this.rM(a,b,c)},
rM(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
var $async$c2=A.c(function(c2,c3){if(c2===1){o.push(c3)
s=p}for(;;)switch(s){case 0:b6=0
b7=0
p=4
a7=n.b.z
a7===$&&A.v()
s=7
return A.a(a7.fp(b9),$async$c2)
case 7:m=c3
a7=t.N
l=A.u(a7,t.gq)
for(a8=b9.length,a9=0;a9<b9.length;b9.length===a8||(0,A.q)(b9),++a9){k=b9[a9]
J.bY(l,k.a,k)}j=l
i=A.aN(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aL(i,h.a)){l=A.bk("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.J(h.a)){l=A.bk("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.j([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.R(j,f.a)
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
b2=A.ap(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aL(g,new A.jf(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
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
return A.a(a8.fh(b4,b2,b3,e.d,b0),$async$c2)
case 13:++b7
case 11:s=8
break
case 9:l=a7.cx
l===$&&A.v()
s=14
return A.a(l.kK(g),$async$c2)
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
l=A.F(b8)
s=l instanceof A.ea?15:17
break
case 15:q=n.bZ(b9,c0,c1)
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
return A.a(n.dR(n.lG(a0)),$async$c2)
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
q=B.am
s=1
break
s=26
break
case 27:s=l instanceof A.bu?28:30
break
case 28:a2=l
a3=a2 instanceof A.eD?a2:new A.hf("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.cx
b0===$&&A.v()
s=34
return A.a(b0.bR(a8,a4.b,a4.c),$async$c2)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cs(n.lG(a4),a5,a3),$async$c2)
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
return A.f($async$c2,r)},
bZ(a,b,c){return this.oU(a,b,c)},
oU(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bZ=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.M(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.cx
h===$&&A.v()
b3=g.b
s=5
return A.a(h.fh("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bZ)
case 5:q=B.M
s=1
break
case 4:a0=B.c.N(b3.gm(b5),2)
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
return A.a(a6.fp(j),$async$bZ)
case 13:i=b9
h=A.u(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.bY(h,g.a,g)}f=h
e=A.aN(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aL(e,d.a)){a6=A.bk("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.J(d.a)){a6=A.bk("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.R(f,c.a)
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
return A.a(n.dS(a7,a8,a9,b0==null?b.d:b0),$async$bZ)
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
return A.a(a7.fh(b1,a9,b0,b.d,a8),$async$bZ)
case 20:++l
case 17:s=14
break
case 15:p=2
s=12
break
case 10:p=9
b4=o.pop()
a6=A.F(b4)
s=a6 instanceof A.ea?21:23
break
case 21:s=24
return A.a(n.bZ(j,b6,b7),$async$bZ)
case 24:a=b9
m+=a.a
l+=a.b
k=k||a.f
s=22
break
case 23:if(a6 instanceof A.bu){k=!0
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
jg(a,b){var s=b==null?a.d:b
return new A.cn(a.b,a.c,B.v,s,a.e,A.ap(B.l.v(B.e.v(a.d)).a),B.q,a.a,0,null)},
lG(a){return this.jg(a,null)},
dS(a,b,c,d){return this.rR(a,b,c,d)},
eO(a,b){return this.dS(a,b,null,null)},
rR(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dS=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.au(a.a).a
n=A.f6(o,b)
m=d==null
l=m?A.aj(A.bg(o,n)):d
p=p.cx
p===$&&A.v()
s=2
return A.a(p.kK(A.j([new A.jf(a,l,b.c,A.ap(B.l.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dS)
case 2:return A.e(null,r)}})
return A.f($async$dS,r)},
l1(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.et('record id "'+s+'" does not match requested "'+r+'"'))},
cs(a,b,c){return this.rA(a,b,c)},
rA(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cs=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.eD?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.cx
o===$&&A.v()
s=5
return A.a(o.mV(c.a,a.b,"max_attempts",a.d,B.an,a.a),$async$cs)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.mB(l,k)
m=p.a.cx
m===$&&A.v()
s=6
return A.a(m.wt(a.a,a.b,l,c.a,o.ay.$0()+B.c.N(n.a,1000)),$async$cs)
case 6:q=B.am
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cs,r)},
cX(a,b,c){return this.px(a,b,c)},
pw(a,b){return this.cX(a,b,null)},
px(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.cx
o===$&&A.v()
p=c==null?b:c
s=2
return A.a(o.fh(p,a.b,b,a.d,a.a),$async$cX)
case 2:return A.e(null,r)}})
return A.f($async$cX,r)},
dL(a,b,c){return this.q8(a,b,c)},
lz(a,b){return this.dL(a,b,!0)},
q8(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$dL=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.a.au(a.a)
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
i=A.F(h)
s=i instanceof A.d3?10:12
break
case 10:k=i
s=13
return A.a(n.cX(a,"corrupt_payload",k.a),$async$dL)
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
return A.a(n.fZ(a,b,m,l),$async$dL)
case 14:q=B.bc
s=1
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dL,r)},
fZ(a,b,c,d){return this.pL(a,b,c,d)},
pL(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$fZ=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bI(c,d)
n=A.O(o,A.n(o).c)
B.b.aE(n)
p=b.r
if(p==null)p=A.aj(c)
s=2
return A.a(q.a.a2(new A.w8(q,a,p,d,n),t.P),$async$fZ)
case 2:return A.e(null,r)}})
return A.f($async$fZ,r)},
he(a,b,c,d,e,f){return this.ro(a,b,c,d,e,f)},
ro(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$he=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.au(a.a).a
m=A.bg(n,A.f6(n,c))
l=A.bI(e,f)
k=A.O(l,A.n(l).c)
B.b.aE(k)
l=A.bI(e,m)
p=A.O(l,A.n(l).c)
B.b.aE(p)
s=2
return A.a(o.a2(new A.wd(q,a,b,e,f,m,k,p,n,c),t.P),$async$he)
case 2:return A.e(null,r)}})
return A.f($async$he,r)}}
A.w9.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.hJ(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eO(k,m),$async$$0)
case 8:q=B.a3
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.F(h) instanceof A.fo){q=n.a.jr(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:15}
A.we.prototype={
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
return A.a(n.pw(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.ap(B.l.v(B.e.v(A.aj(A.bg(l,A.f6(l,o))))).a)===A.ap(B.l.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eO(m,o),$async$$0)
case 9:q=B.a3
s=1
break
case 8:q=n.d3(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:15}
A.wc.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.z
l===$&&A.v()
s=3
return A.a(l.bW(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lz(m,p.c)
s=1
break}n.l1(m,o)
if(o.c===m.e){l=p.c
q=n.qe(m,l,new A.wb(n,m,o,l),!0)
s=1
break}q=n.rd(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:15}
A.wb.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.z
j===$&&A.v()
s=7
return A.a(j.fD(n.c.c,k.d,k.b),$async$$0)
case 7:m=b
s=8
return A.a(l.eO(k,m),$async$$0)
case 8:q=B.a3
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
$S:15}
A.wa.prototype={
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
return A.a(l.fD(p.d.c,m,n.b),$async$$0)
case 4:s=3
return A.a(k.dS(j,b,p.e.a,m),$async$$0)
case 3:q=B.a3
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:15}
A.w8.prototype={
$1(a){return this.nM(a)},
nM(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.cb(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.aj(q.d),"remote_json",A.aj(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a6(q.e,null),"dirty_remote",B.h.a6(B.q,null),"detected_at",q.a.c.ay.$0()],k,j),B.R),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a_(new A.a1(n,A.as([m],k)))
a.a_(new A.a1("lp_conflicts",A.as([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.wd.prototype={
$1(a){return this.nN(a)},
nN(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
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
return A.a(l.cb(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.aj(q.e),"remote_json",A.aj(o),"dirty_local",B.h.a6(q.r,null),"dirty_remote",B.h.a6(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.R),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.aj(o),"base_hash",A.ap(B.l.v(B.e.v(A.aj(A.bg(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a_(new A.a1(j,A.as([k],n)))
a.a_(new A.a1("lp_conflicts",A.as([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ca.prototype={
a4(){return"SyncEngineState."+this.b}}
A.bn.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.hc.prototype={}
A.hb.prototype={}
A.x4.prototype={
gl3(){return 36},
dC(a){return this.ov(a)},
ov(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dC=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.j([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dy,g=new A.bC(g,g.r,g.e,A.n(g).i("bC<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.im(m),$async$dC)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gl3():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.ak(c.a+1,n.gl3())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bD(m,a),$async$dC)
case 13:a5.aL(a6,a9)
case 11:++j
s=10
break
case 12:if(A.nD(h)!=null)A.t(A.y(u.L))
b=h.b
b===$&&A.v()
s=14
return A.a(b.aW(new A.x5(c,n,m,a3),B.p,f),$async$dC)
case 14:p=2
s=8
break
case 6:p=5
a4=o.pop()
i=A.F(a4)
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
bD(a,b){return this.ou(a,b)},
ou(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bD=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.Q("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aN(t.N)
m=B.c.is(B.c.bN(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.z
g===$&&A.v()
s=5
return A.a(g.fg(a4,B.cO,h,null,o,m),$async$bD)
case 5:f=a7
g=J.M(f)
if(g.gE(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.j([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hd(a4,e),$async$bD)
case 6:c=a7
b=A.j([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aN||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dd(a4,b),$async$bD)
case 9:i+=b.length
case 8:h=g.ga1(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ai("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bD)
case 10:a1=a7
a2=A.j([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.D(a)
if(!n.F(0,a)){if(J.x(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fj(a4,a2),$async$bD)
case 13:case 12:s=14
return A.a(k.ai("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bD)
case 14:a3=a7
k=J.M(a3)
s=k.gW(a3)?15:16
break
case 15:l=A.j([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.D(g))}s=17
return A.a(j.dd(a4,l),$async$bD)
case 17:case 16:q=new A.hb(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bD,r)},
hd(a,b){return this.r1(a,b)},
r1(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hd=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.u(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.T(b,n,B.c.bN(l,0,m))
j=B.b.B(A.af(k.length,"?",!1,g),", ")
m=[a]
B.b.C(m,k)
e=J
s=6
return A.a(o.ai(u.m+j+")",m),$async$hd)
case 6:m=e.E(d)
case 7:if(!m.k()){s=8
break}i=m.gn()
h=i.h(0,"record_id")
h.toString
f.j(0,A.D(h),A.ju(i))
s=7
break
case 8:case 4:n=l
s=3
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hd,r)}}
A.x5.prototype={
$1(a){return this.nP(a)},
nP(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.eu(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bu.prototype={
l(a){return A.dp(this).l(0)+": "+this.a},
$iG:1}
A.hf.prototype={}
A.eD.prototype={}
A.jl.prototype={}
A.c0.prototype={}
A.cG.prototype={}
A.cK.prototype={}
A.fN.prototype={}
A.fP.prototype={}
A.fo.prototype={}
A.ea.prototype={}
A.h9.prototype={
gm(a){return this.b}}
A.cM.prototype={}
A.fR.prototype={}
A.je.prototype={}
A.kP.prototype={
a4(){return"BackendHintKind."+this.b}}
A.cC.prototype={}
A.Be.prototype={
$2(a,b){return B.a.ig(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:146}
A.nw.prototype={
gn6(){return 1}}
A.x6.prototype={
mB(a,b){var s,r
if(b!=null){s=this.qQ(b)
if(A.ai(s))return A.dv(0,0,s<0?0:s)
if(s instanceof A.aW){r=s.a-this.ay.$0()
return r<=0?B.D:A.dv(0,r,0)}return B.at}return A.Gb(a,B.at,B.au,this.at)},
mA(a){return this.mB(a,null)},
qQ(a){var s=B.a.ci(a),r=A.jb(s,null)
if(r!=null)return r
return A.Je(s)}}
A.jd.prototype={}
A.js.prototype={}
A.xi.prototype={
il(a){return this.wp(a)},
wp(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$il=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.el("lp_sync_state",A.j(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$il)
case 3:m=c
l=J.M(m)
if(l.gE(m)){q=null
s=1
break}o=A.a6(J.R(l.gG(m),"cursor_updated"))
n=A.a6(J.R(l.gG(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jd(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)},
es(a,b,c,d){return this.xf(a,b,c,d)},
xf(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$es=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aI("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$es)
case 5:s=m.by(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$es)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$es)
case 7:case 3:return A.e(null,r)}})
return A.f($async$es,r)},
im(a){return this.wr(a)},
wr(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$im=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.el("lp_sync_state",A.j(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$im)
case 3:n=c
m=J.M(n)
if(m.gE(n)){q=B.dr
s=1
break}o=A.be(J.R(m.gG(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.js(o,A.be(J.R(m.gG(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$im,r)},
eu(a,b,c,d){return this.xj(a,b,c,d)},
xj(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$eu=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aI("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$eu)
case 5:s=m.by(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$eu)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$eu)
case 7:case 3:return A.e(null,r)}})
return A.f($async$eu,r)},
hF(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b0("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hF)
case 3:l=b
k=J.M(l)
j=k.gE(l)?B.j:k.gG(l)
k=A.be(j.h(0,"pending"))
if(k==null)k=0
o=A.be(j.h(0,"conflicts"))
if(o==null)o=0
n=A.be(j.h(0,"hidden"))
if(n==null)n=0
m=A.be(j.h(0,"blocked"))
q=new A.oD([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)}}
A.cQ.prototype={
a4(){return"SyncState."+this.b}}
A.i7.prototype={
a4(){return"AccessState."+this.b}}
A.fM.prototype={
a4(){return"OutboxKind."+this.b}}
A.j7.prototype={
a4(){return"OpQueueKind."+this.b}}
A.BA.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.cP.prototype={}
A.xh.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.D(i)
i=j.h(0,"record_id")
i.toString
A.D(i)
i=A.a6(j.h(0,"remote_updated"))
s=A.be(j.h(0,"last_seen_at"))
r=A.a6(j.h(0,"base_updated"))
A.a6(j.h(0,"base_hash"))
q=A.a6(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fq(B.cy,A.D(p))
A.G6(j.h(0,"dirty_fields"))
o=A.be(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fq(B.cw,A.D(n))
A.a6(j.h(0,"op_id"))
m=A.be(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.be(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.be(j.h(0,"schema_ver"))
return new A.cP(i,s,r,q,p,o,n,m,l,k)},
$S:147}
A.cn.prototype={}
A.vj.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.D(i)
s=j.h(0,"record_id")
s.toString
A.D(s)
r=j.h(0,"kind")
r.toString
r=A.fq(B.cH,A.D(r))
q=j.h(0,"payload_json")
q.toString
A.D(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.G6(j.h(0,"dirty_fields"))
m=j.h(0,"op_id")
m.toString
A.D(m)
l=j.h(0,"created_at")
l.toString
A.ao(l)
k=j.h(0,"updated_at")
k.toString
A.ao(k)
return new A.cn(i,s,r,q,p,o,n,m,l,A.a6(j.h(0,"depends_on_op")))},
$S:148}
A.ey.prototype={}
A.ve.prototype={
$0(){var s,r,q,p,o,n,m=this.a,l=m.h(0,"seq")
l.toString
A.ao(l)
l=m.h(0,"op_id")
l.toString
A.D(l)
s=m.h(0,"store")
s.toString
A.D(s)
r=m.h(0,"record_id")
r.toString
A.D(r)
q=m.h(0,"kind")
q.toString
q=A.fq(B.cC,A.D(q))
p=m.h(0,"payload_json")
p.toString
A.D(p)
o=m.h(0,"state")
o.toString
A.D(o)
o=A.be(m.h(0,"attempt_count"))
if(o==null)o=0
A.be(m.h(0,"next_retry_at"))
A.a6(m.h(0,"last_error"))
n=A.a6(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ao(m)
return new A.ey(l,s,r,q,p,o,n)},
$S:149}
A.By.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.D(s)},
$S:59}
A.Bz.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.D(s)},
$S:59}
A.bE.prototype={
a_(a){this.c.push(a)
this.a.y.r+=a.b.a},
bb(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
by(a){var s=this.a
return new A.fg(s,s.au(a),new A.it(this.b),this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.y("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cA(o,a,b)},
cA(a,b,c){return this.tl(a,b,c,c)},
tl(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
d=A.Cx(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.pi(new A.xs(a3,j,a4),null,A.m([$.kA(),j],f,f),a4.i("A<0>")),$async$cA)
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
return A.f($async$cA,r)}}
A.xs.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.zV.prototype={}
A.mM.prototype={
kL(a){return a.a===this.w.b.a},
f7(){var s=this.w
return s.e8(s.w==null&&!s.x?50:null).X(new A.wt(),t.J)},
mu(a){return A.M4(a,new A.ws(this),this.w.r.length!==0)},
mY(a){var s=this.x
return s==null?null:s.t(0,a)},
kg(a,b){var s=this.x
return s==null?null:s.bx(a,b)},
iI(){var s=this.x=A.wV(this.gjR(),new A.wu(this),null,!1,t.J)
return new A.b5(s,A.n(s).i("b5<1>"))},
f1(){this.kR()
var s=this.x
if(s!=null)s.q()}}
A.wt.prototype={
$1(a){return a.a},
$S:151}
A.ws.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.wu.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e_(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.mu.prototype={
kL(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.F(0,this.x))return!1
return!0},
f7(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$f7=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.a
l===$&&A.v()
o=p.w.a
s=3
return A.a(l.gbn().b.aI(o.a,1,"id = ?",[p.x]),$async$f7)
case 3:n=b
l=J.M(n)
if(l.gE(n)){q=null
s=1
break}q=A.cf(o,l.gG(n),m.ay,m.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f7,r)},
mu(a){return a==null?"<null>":A.ap(B.l.v(B.e.v(A.aj(a))).a)},
mY(a){var s=this.y
return s==null?null:s.t(0,a)},
kg(a,b){var s=this.y
return s==null?null:s.bx(a,b)},
iI(){var s=this.y=A.wV(this.gjR(),new A.vc(this),null,!1,t.b)
return new A.b5(s,A.n(s).i("b5<1>"))},
f1(){this.kR()
var s=this.y
if(s!=null)s.q()}}
A.vc.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.e_(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.ff.prototype={
kg(a,b){},
az(){var s=this.a.a$.a
this.c=new A.b0(s,A.n(s).i("b0<1>")).aS(this.gqA())},
qB(a){var s,r=this
if(!r.kL(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.D()
r.d=A.cR(r.b,r.gme())},
e_(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$e_=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.y;++i.y
q=3
s=6
return A.a(n.f7(),$async$e_)
case 6:m=b
l=n.mu(m)
if(!J.x(l,n.r)){n.r=l;++i.z
n.mY(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.F(g)
j=A.ad(g)
n.kg(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.D()
n.d=A.cR(n.b,n.gme())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$e_,r)},
f1(){var s=this.d
if(s!=null)s.D()
s=this.c
if(s!=null)s.D()}}
A.y3.prototype={
aV(a,b){var s,r=this;++r.b
r.lK()
s=new A.w($.C,b.i("w<0>"))
r.a=r.a.X(new A.y4(r,new A.aI(s,b.i("aI<0>")),a),t.H)
return s},
lK(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.y4.prototype={
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
m=A.F(i)
l=A.ad(i)
n.b.c6(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lK()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:29}
A.hn.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.xT.prototype={
$2(a,b){return new A.S(J.a0(a),b,t.eB)},
$S:57}
A.nT.prototype={
p(){var s,r=this,q=A.u(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.xQ.prototype={
p(){var s,r=A.u(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.jc.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iG:1}
A.xO.prototype={
eL(){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j
var $async$eL=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
n=A.i4()
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
dM(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eL(),$async$dM)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dM,r)},
bl(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bl=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dM(),$async$bl)
case 3:if(!b){q=null
s=1
break}p=5
m=A.i4()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a5(m.getDirectory(),k),$async$bl)
case 8:l=b
s=9
return A.a(A.a5(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bl)
case 9:k=b
q=new A.oy(k)
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
dk(a,b,c){return this.we(a,b,c)},
ik(a){return this.dk(a,null,null)},
we(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dk=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.ys(A.j([],t.bs))
s=3
return A.a(A.ku(a,b,c,null,new A.xP(o)),$async$dk)
case 3:n=e
m=o.kt()
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
cJ(a){return this.w3(a)},
w3(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cJ=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.kZ(a)
j=n.b
if(j.J(a)){j=j.h(0,a)
j.toString
q=A.Cr(j,t.L)
s=1
break}s=3
return A.a(n.bl(),$async$cJ)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.em(a),$async$cJ)
case 10:l=c
j=A.Cr(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.F(h)
if(!(k instanceof A.fc))throw A.b(A.Dx(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.y("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cJ,r)},
da(a){return this.u9(a)},
u9(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$da=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.kZ(a)
o.b.H(0,a)
s=2
return A.a(o.bl(),$async$da)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.H(0,a),$async$da)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.F(k)
if(!(m instanceof A.fc))throw A.b(A.Dx(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$da,r)},
bo(a){return this.uW(a)},
uW(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kZ(a)
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
bh(a){return this.o8(a)},
o8(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kZ(a)
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
e4(a){return this.tQ(a)},
tQ(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bl(),$async$e4)
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
if(!J.Hq(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.H(0,l),$async$e4)
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
fe(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fe=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.d2(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bl(),$async$fe)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.ee(),$async$fe)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.Db()
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
return A.f($async$fe,r)}}
A.xP.prototype={
$1(a){return this.a.t(0,a)},
$S:18}
A.oy.prototype={
em(a){return this.wo(a)},
wo(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$em=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
i=t.m
s=7
return A.a(A.a5(n.a.getFileHandle(a,{create:!1}),i),$async$em)
case 7:m=c
s=8
return A.a(A.a5(m.getFile(),i),$async$em)
case 8:l=c
s=9
return A.a(A.a5(l.arrayBuffer(),t.a),$async$em)
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
j=A.F(g)
if(A.EC(j))throw A.b(A.Dw(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$em,r)},
aZ(a,b){return this.xe(a,b)},
xe(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
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
return A.a(A.a5(o.write(t.a.a(B.f.gaa(b))),p),$async$aZ)
case 4:s=5
return A.a(A.a5(o.close(),p),$async$aZ)
case 5:return A.e(null,r)}})
return A.f($async$aZ,r)},
H(a,b){return this.wz(0,b)},
wz(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$H=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.BZ(o.a,b),$async$H)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.F(l)
if(A.EC(n))throw A.b(A.Dw(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$H,r)},
bo(a){return this.uX(a)},
uX(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
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
bh(a){return this.o9(a)},
o9(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
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
ee(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$ee=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.j([],t.s)
j=new A.cy(A.cz(A.DO(m.a),"stream",t.K),t.hT)
p=3
case 6:s=8
return A.a(j.k(),$async$ee)
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
return A.a(j.D(),$async$ee)
case 9:s=n.pop()
break
case 5:q=k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ee,r)},
$iEa:1}
A.ux.prototype={
cG(a,b){return this.vg(a,b)},
vg(a,b){var s=0,r=A.h(t.X),q,p
var $async$cG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.pg(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)},
ie(a,b,c,d){return this.w4(a,b,c,d)},
w4(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$ie=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.w0(a6,a7)
a=t.N
a0=new A.ip(A.u(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.a6(A.Gq(a2?null:A.pe(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.uy(a3)
a0.e=new A.uz(a3)
p=4
b.O("PRAGMA journal_mode=TRUNCATE")
f=b.o_("PRAGMA journal_mode")
n=f.gG(f).b[0]
if(J.a0(n).toLowerCase()!=="truncate"){a=A.y("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.MN(a2?null:A.pe(a8))
e=t.bE.a(J.R(m,"stores"))
l=e==null?A.j([],t.aw):e
d=A.be(J.R(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.Fj(J.R(m,"destructiveBackup"))
j=f!==!1
i=A.MM(A.Gq(a2?null:A.pe(a8),"fieldCipher"))
if(A.Mu(l,i)){a=A.au("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.xO(A.u(a,t.p))
s=7
return A.a(A.d0(h,a0,j,i,k,a6,B.aA,l,B.bQ),$async$ie)
case 7:g=b0
a1=!0
a=t.be
q=new A.md(b,new A.xY(g,A.aN(a)),A.u(t.eg,a))
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
return A.f($async$ie,r)}}
A.uy.prototype={
$1(a){return A.p7(this.a,a)},
$S:152}
A.uz.prototype={
$1(a){return A.p8(this.a,a)},
$S:153}
A.md.prototype={
cG(a,b){return this.vh(a,b)},
vh(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.Ca(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.Iq(n)
if(o==null){q=A.Ca(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.i_(p.e.km(a,new A.uI(a)),o),$async$cG)
case 3:q=m.Ir(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cG,r)}}
A.uI.prototype={
$0(){return new A.hu(this.a)},
$S:154}
A.hu.prototype={$inX:1}
A.Bs.prototype={
$1(a){return A.MO(a)},
$S:155}
A.Bj.prototype={
$1(a){return B.b.bM(a.c,new A.Bi())},
$S:156}
A.Bi.prototype={
$1(a){return a.e},
$S:60}
A.xV.prototype={
w6(a,b){var s=this.a
if(!s.J(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.dM('Invalid "'+a+'" argument: expected '+A.bJ(b).l(0)+", got "+J.c_(s).l(0)+"."))
return b.a(s)}}
A.ho.prototype={}
A.jA.prototype={}
A.eK.prototype={}
A.B9.prototype={
$2(a,b){var s,r,q=J.a0(a)
if(t.f.b(b))this.a.j(0,q,A.f3(b))
else{s=this.a
if(t.j.b(b)){r=J.bM(b,new A.B8(),t.z)
r=A.O(r,r.$ti.i("Z.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:36}
A.B8.prototype={
$1(a){return t.f.b(a)?A.f3(a):a},
$S:39}
A.nW.prototype={
h5(a,b){return this.q4(a,b)},
q4(a3,a4){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$h5=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a1=a4.d.h(0,"request")
if(!t.f.b(a1))throw A.b(A.dM('Contract envelope requires a "request" map.'))
j=A.f3(a1)
i=j.h(0,"tag")
if(typeof i!="string")A.t(A.U("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.t(A.U("Missing request payload."))
g=A.pf(h)
j=t.G
if(!j.b(g))A.t(A.U("Malformed request payload."))
f=A.HO(i,g)
if(f==null)A.t(A.U("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.v()
s=7
return A.a(e.vb(m),$async$h5)
case 7:l=a6
e=l
d=t.N
d=A.m(["result",A.m(["tag",e.gU(),"payload",A.hY(e.p())],d,t.X)],d,j)
q=d
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
k=A.F(a2)
e=k
b=J.a0(e)
if(e instanceof A.dF){a=A.L9(e)
b=e.a
if(e instanceof A.eI&&e.b!=null)a0=A.m(["field",e.b],t.N,t.X)
else if(e instanceof A.eH)a0=A.m(["field",e.b],t.N,t.X)
else a0=e instanceof A.ex?A.m(["field",e.b],t.N,t.X):null}else{if(e instanceof A.jz){b=e.a
a="WireException"}else if(e instanceof A.bl){b=e.a
a="StateError"}else if(t.b0.b(e)){b=A.r(e.d)
a="RangeError"}else if(e instanceof A.bz){b=A.r(e.d)
a="ArgumentError"}else a="unknown"
a0=null}e=t.N
d=A.u(e,t.X)
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
return A.f($async$h5,r)}}
A.xY.prototype={
i_(a,b){return this.vv(a,b)},
vv(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$i_=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.d.t(0,a)
if(n.e==null){i=n.c.e
i===$&&A.v()
i=i.b
n.e=new A.b0(i,A.n(i).i("b0<1>")).aS(new A.xZ(n))}m=null
try{m=A.Jn(b)}catch(d){l=A.F(d)
i=J.a0(l)
q=new A.eK("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eK("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.iZ(a,m),$async$i_)
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
j=A.F(e)
i=m.b
g=J.a0(j)
f=A.m(["type",A.MX(j)],t.N,t.X)
q=new A.eK("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$i_,r)},
iZ(a,b){return this.pA(a,b)},
pA(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$iZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
if(l===$){o=A.m(["open",p.gq9(),"contract_request",p.gq3()],t.N,t.n1)
p.f!==$&&A.BG()
p.f=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.dM("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iZ,r)}}
A.xZ.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gU(),"payload",a.p()],r,q)],r,q)
for(r=this.a.d,r=A.hC(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).a.hK(A.pg(p))}},
$S:159}
A.nV.prototype={
h7(a,b){return this.qa(a,b)},
qa(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$h7=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.xV(a3).w6("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.u(a3,a3)
n=t.f
if(n.b(a5))a5.a7(0,new A.xW(o))
s=a4!=null?3:4
break
case 3:m=J.E(a4),l=p.c,k=l.dy,j=t.X,i=l.ay==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.t(A.a8("Schema must be a map: "+A.r(h),null,null))
g=A.pZ(A.f3(h),j)
if(B.b.bM(g.c,new A.xX())&&i)throw A.b(A.au('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.Cn(g)
e=g.a
d=o.h(0,e)
if(d!=null){c=new A.a2("")
A.ch(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cX(a)
a0.t(0,b)
a0.q()
a0=d!==A.ap(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.dM('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.J(e)?7:9
break
case 7:s=10
return A.a(l.aP(g),$async$h7)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.t(A.y('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a2("")
A.ch(c,a1.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cX(a)
a0.t(0,b)
a0.q()
a0=A.ap(a.a.a)
c=new A.a2("")
A.ch(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a2=A.cX(a)
a2.t(0,b)
a2.q()
if(a0!==A.ap(a.a.a))throw A.b(A.dM('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h7,r)}}
A.xW.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:45}
A.xX.prototype={
$1(a){return a.e},
$S:60}
A.p_.prototype={}
A.qB.prototype={
tu(a){var s,r=null
A.FV("absolute",A.j([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b2(a)>0&&!s.cH(a)
if(s)return a
s=A.G5()
return this.mT(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
ud(a){var s,r,q=A.dL(a,this.a)
q.fv()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.ko(s)
q.e.pop()
q.fv()
return q.l(0)},
mT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.j([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.FV("join",s)
return this.vI(new A.bF(s,t.v))},
vI(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.cV(s,new A.qC(),a.$ti.i("cV<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cH(m)&&o){l=A.dL(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.ep(k,!0))
l.b=n
if(q.fk(n))l.e[0]=q.gdz()
n=l.l(0)}else if(q.b2(m)>0){o=!q.cH(m)
n=m}else{if(!(m.length!==0&&q.jM(m[0])))if(p)n+=q.gdz()
n+=m}p=q.fk(m)}return n.charCodeAt(0)==0?n:n},
cQ(a,b){var s=A.dL(b,this.a),r=s.d,q=A.a_(r).i("al<1>")
r=A.O(new A.al(r,new A.qD(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aC(r,0,q)
return s.d},
ej(a){var s
if(!this.qx(a))return a
s=A.dL(a,this.a)
s.kf()
return s.l(0)},
qx(a){var s,r,q,p,o,n,m,l=this.a,k=l.b2(a)
if(k!==0){if(l===$.pk())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cc(n)){if(l===$.pk()&&n===47)return!0
if(q!=null&&l.cc(q))return!0
if(q===46)m=o==null||o===46||l.cc(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cc(q))return!0
if(q===46)l=o==null||l.cc(o)||o===46
else l=!1
if(l)return!0
return!1},
wx(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b2(a)
if(l<=0)return o.ej(a)
s=A.G5()
if(m.b2(s)<=0&&m.b2(a)>0)return o.ej(a)
if(m.b2(a)<=0||m.cH(a))a=o.tu(a)
if(m.b2(a)<=0&&m.b2(s)>0)throw A.b(A.Eb(n+a+'" from "'+s+'".'))
r=A.dL(s,m)
r.kf()
q=A.dL(a,m)
q.kf()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kj(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kj(l[0],p[0])}else l=!1
if(!l)break
B.b.iq(r.d,0)
B.b.iq(r.e,1)
B.b.iq(q.d,0)
B.b.iq(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.Eb(n+a+'" from "'+s+'".'))
l=t.N
B.b.k7(q.d,0,A.af(p,"..",!1,l))
p=q.e
p[0]=""
B.b.k7(p,1,A.af(r.d.length,m.gdz(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga1(m)==="."){B.b.ko(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fv()
return q.l(0)},
n0(a){var s,r,q=this,p=A.FF(a)
if(p.gb_()==="file"&&q.a===$.kz())return p.l(0)
else if(p.gb_()!=="file"&&p.gb_()!==""&&q.a!==$.kz())return p.l(0)
s=q.ej(q.a.ki(A.FF(p)))
r=q.wx(s)
return q.cQ(0,r).length>q.cQ(0,s).length?s:r}}
A.qC.prototype={
$1(a){return a!==""},
$S:10}
A.qD.prototype={
$1(a){return a.length!==0},
$S:10}
A.AU.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:160}
A.ts.prototype={
nY(a){var s=this.b2(a)
if(s>0)return B.a.A(a,0,s)
return this.cH(a)?a[0]:null},
kj(a,b){return a===b}}
A.my.prototype={
gjI(){var s=this,r=t.N,q=new A.my(s.a,s.b,s.c,A.bD(s.d,!0,r),A.bD(s.e,!0,r))
q.fv()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga1(r)},
fv(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga1(s)===""))break
B.b.ko(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kf(){var s,r,q,p,o,n=this,m=A.j([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.k7(m,0,A.af(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.af(m.length+1,s.gdz(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fk(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.pk())n.b=A.z(r,"/","\\")
n.fv()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga1(q)
return o.charCodeAt(0)==0?o:o}}
A.mz.prototype={
l(a){return"PathException: "+this.a},
$iG:1}
A.x3.prototype={
l(a){return this.gaO()}}
A.vM.prototype={
jM(a){return B.a.F(a,"/")},
cc(a){return a===47},
fk(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
ep(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b2(a){return this.ep(a,!1)},
cH(a){return!1},
ki(a){var s
if(a.gb_()===""||a.gb_()==="file"){s=a.gbp()
return A.CP(s,0,s.length,B.o,!1)}throw A.b(A.Q("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaO(){return"posix"},
gdz(){return"/"}}
A.xA.prototype={
jM(a){return B.a.F(a,"/")},
cc(a){return a===47},
fk(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c8(a,"://")&&this.b2(a)===s},
ep(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.ca(a,"/",B.a.ad(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.G8(a,q+1)
return p==null?q:p}}return 0},
b2(a){return this.ep(a,!1)},
cH(a){return a.length!==0&&a.charCodeAt(0)===47},
ki(a){return a.l(0)},
gaO(){return"url"},
gdz(){return"/"}}
A.xU.prototype={
jM(a){return B.a.F(a,"/")},
cc(a){return a===47||a===92},
fk(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
ep(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.ca(a,"\\",2)
if(s>0){s=B.a.ca(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Gf(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b2(a){return this.ep(a,!1)},
cH(a){return this.b2(a)===1},
ki(a){var s,r
if(a.gb_()!==""&&a.gb_()!=="file")throw A.b(A.Q("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbp()
if(a.gdf()===""){if(s.length>=3&&B.a.S(s,"/")&&A.G8(s,1)!=null)s=B.a.kr(s,"/","")}else s="\\\\"+a.gdf()+s
r=A.z(s,"/","\\")
return A.CP(r,0,r.length,B.o,!1)},
tS(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kj(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.tS(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaO(){return"windows"},
gdz(){return"\\"}}
A.wM.prototype={
gm(a){return this.c.length},
gvJ(){return this.b.length},
oA(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.H(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
ew(a){var s,r=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.b(A.aZ("Offset "+a+u.D+r.gm(0)+"."))
s=r.b
if(a<B.b.gG(s))return-1
if(a>=B.b.ga1(s))return s.length-1
if(r.qm(a)){s=r.d
s.toString
return s}return r.d=r.oT(a)-1},
qm(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
oT(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.c.N(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
iG(a){var s,r,q=this
if(a<0)throw A.b(A.aZ("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.b(A.aZ("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gm(0)+"."))
s=q.ew(a)
r=q.b[s]
if(r>a)throw A.b(A.aZ("Line "+s+" comes after offset "+a+"."))
return a-r},
fJ(a){var s,r,q,p
if(a<0)throw A.b(A.aZ("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.b(A.aZ("Line "+a+" must be less than the number of lines in the file, "+this.gvJ()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aZ("Line "+a+" doesn't have 0 columns."))
return q}}
A.lI.prototype={
ga3(){return this.a.a},
gag(){return this.a.ew(this.b)},
gaq(){return this.a.iG(this.b)},
gar(){return this.b}}
A.hz.prototype={
ga3(){return this.a.a},
gm(a){return this.c-this.b},
gP(){return A.BY(this.a,this.b)},
gM(){return A.BY(this.a,this.c)},
gaJ(){return A.dQ(B.y.T(this.a.c,this.b,this.c),0,null)},
gbc(){var s=this,r=s.a,q=s.c,p=r.ew(q)
if(r.iG(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dQ(B.y.T(r.c,r.fJ(p),r.fJ(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fJ(p+1)
return A.dQ(B.y.T(r.c,r.fJ(r.ew(s.b)),q),0,null)},
a0(a,b){var s
if(!(b instanceof A.hz))return this.op(0,b)
s=B.c.a0(this.b,b.b)
return s===0?B.c.a0(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hz))return s.oo(0,b)
return s.b===b.b&&s.c===b.c&&J.x(s.a.a,b.a.a)},
gI(a){return A.c6(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$ida:1}
A.rZ.prototype={
vB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.mg(B.b.gG(a1).c)
s=a.e
r=A.af(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.x(m.c,l)){a.hv("\u2575")
q.a+="\n"
a.mg(l)}else if(m.b+1!==n.b){a.tt("...")
q.a+="\n"}}for(l=n.d,k=A.a_(l).i("bT<1>"),j=new A.bT(l,k),j=new A.at(j,j.gm(0),k.i("at<Z.E>")),k=k.i("Z.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gP().gag()!==f.gM().gag()&&f.gP().gag()===i&&a.qo(B.a.A(h,0,f.gP().gaq()))){e=B.b.bO(r,a0)
if(e<0)A.t(A.Q(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.ts(i)
q.a+=" "
a.tr(n,r)
if(s)q.a+=" "
d=B.b.mN(l,new A.tj())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gP().gag()===i?j.gP().gaq():0
a.tp(h,g,j.gM().gag()===i?j.gM().gaq():h.length,p)}else a.hx(h)
q.a+="\n"
if(k)a.tq(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.hv("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
mg(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.hv("\u2577")
else{q.hv("\u250c")
q.bj(new A.t6(q),"\x1b[34m")
s=q.r
r=" "+$.i6().n0(a)
s.a+=r}q.r.a+="\n"},
ht(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gP().gag()
i=k?null:l.a.gM().gag()
if(s&&l===c){h.bj(new A.td(h,j,a),r)
n=!0}else if(n)h.bj(new A.te(h,l),r)
else if(k)if(g.a)h.bj(new A.tf(h),g.b)
else o.a+=" "
else h.bj(new A.tg(g,h,c,j,a,l,i),p)}},
tr(a,b){return this.ht(a,b,null)},
tp(a,b,c,d){var s=this
s.hx(B.a.A(a,0,b))
s.bj(new A.t7(s,a,b,c),d)
s.hx(B.a.A(a,c,a.length))},
tq(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gP().gag()===p.gM().gag()){r.jF()
p=r.r
p.a+=" "
r.ht(a,c,b)
if(c.length!==0)p.a+=" "
r.mh(b,c,r.bj(new A.t8(r,a,b),q))}else{s=a.b
if(p.gP().gag()===s){if(B.b.F(c,b))return
A.MU(c,b)
r.jF()
p=r.r
p.a+=" "
r.ht(a,c,b)
r.bj(new A.t9(r,a,b),q)
p.a+="\n"}else if(p.gM().gag()===s){p=p.gM().gaq()
if(p===a.a.length){A.Gr(c,b)
return}r.jF()
r.r.a+=" "
r.ht(a,c,b)
r.mh(b,c,r.bj(new A.ta(r,!1,a,b),q))
A.Gr(c,b)}}},
mf(a,b,c){var s=c?0:1,r=this.r
s=B.a.bg("\u2500",1+b+this.iX(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tn(a,b){return this.mf(a,b,!0)},
mh(a,b,c){this.r.a+="\n"
return},
hx(a){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),q=this.r,r=r.i("K.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bg(" ",4)
else{p=A.bt(p)
q.a+=p}}},
hw(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bj(new A.th(s,this,a),"\x1b[34m")},
hv(a){return this.hw(a,null,null)},
tt(a){return this.hw(null,null,a)},
ts(a){return this.hw(null,a,null)},
jF(){return this.hw(null,null,null)},
iX(a){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qo(a){var s,r,q
for(s=new A.cj(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
pb(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bj(a,b){return this.pb(a,b,t.z)}}
A.ti.prototype={
$0(){return this.a},
$S:161}
A.t0.prototype={
$1(a){var s=a.d
return new A.al(s,new A.t_(),A.a_(s).i("al<1>")).gm(0)},
$S:244}
A.t_.prototype={
$1(a){var s=a.a
return s.gP().gag()!==s.gM().gag()},
$S:33}
A.t1.prototype={
$1(a){return a.c},
$S:164}
A.t3.prototype={
$1(a){var s=a.a.ga3()
return s==null?new A.k():s},
$S:165}
A.t4.prototype={
$2(a,b){return a.a.a0(0,b.a)},
$S:166}
A.t5.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.j([],t.dg)
for(s=J.aB(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbc()
n=A.Bd(o,p.gaJ(),p.gP().gaq())
n.toString
m=B.a.hy("\n",B.a.A(o,0,n)).gm(0)
l=p.gP().gag()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga1(b).b)b.push(new A.cx(j,l,d,A.j([],q)));++l}}i=A.j([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.q)(b),++k){j=b[k]
h&1&&A.H(i,16)
B.b.rv(i,new A.t2(j),!0)
f=i.length
for(q=s.bi(c,g),p=q.$ti,q=new A.at(q,q.gm(0),p.i("at<Z.E>")),n=j.b,p=p.i("Z.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gP().gag()>n)break
i.push(e)}g+=i.length-f
B.b.C(j.d,i)}return b},
$S:167}
A.t2.prototype={
$1(a){return a.a.gM().gag()<this.a.b},
$S:33}
A.tj.prototype={
$1(a){return!0},
$S:33}
A.t6.prototype={
$0(){this.a.r.a+=B.a.bg("\u2500",2)+">"
return null},
$S:0}
A.td.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.te.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.tf.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.tg.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bj(new A.tb(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gM().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bj(new A.tc(r,o),p.b)}}},
$S:2}
A.tb.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.tc.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.t7.prototype={
$0(){var s=this
return s.a.hx(B.a.A(s.b,s.c,s.d))},
$S:0}
A.t8.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gP().gaq(),l=n.gM().gaq()
n=this.b.a
s=q.iX(B.a.A(n,0,m))
r=q.iX(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bg(" ",m))+B.a.bg("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:12}
A.t9.prototype={
$0(){return this.a.tn(this.b,this.c.a.gP().gaq())},
$S:0}
A.ta.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bg("\u2500",3)
else r.mf(s.c,Math.max(s.d.a.gM().gaq()-1,0),!1)
return q.a.length-p.length},
$S:12}
A.th.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.w8(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bq.prototype={
l(a){var s=this.a
s="primary "+(""+s.gP().gag()+":"+s.gP().gaq()+"-"+s.gM().gag()+":"+s.gM().gaq())
return s.charCodeAt(0)==0?s:s}}
A.zq.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.Bd(o.gbc(),o.gaJ(),o.gP().gaq())!=null)){s=A.n4(o.gP().gar(),0,0,o.ga3())
r=o.gM().gar()
q=o.ga3()
p=A.Me(o.gaJ(),10)
o=A.wN(s,A.n4(r,A.ET(o.gaJ()),p,q),o.gaJ(),o.gaJ())}return A.JM(A.JO(A.JN(o)))},
$S:168}
A.cx.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cr.prototype={
jS(a){var s=this.a
if(!J.x(s,a.ga3()))throw A.b(A.Q('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){var s=this.a
if(!J.x(s,b.ga3()))throw A.b(A.Q('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a,b.ga3())&&this.b===b.gar()},
gI(a){var s=this.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dp(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaw:1,
ga3(){return this.a},
gar(){return this.b},
gag(){return this.c},
gaq(){return this.d}}
A.n5.prototype={
jS(a){if(!J.x(this.a.a,a.ga3()))throw A.b(A.Q('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){if(!J.x(this.a.a,b.ga3()))throw A.b(A.Q('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.x(this.a.a,b.ga3())&&this.b===b.gar()},
gI(a){var s=this.a.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dp(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ew(r)+1)+":"+(q.iG(r)+1))+">"},
$iaw:1,
$icr:1}
A.n7.prototype={
oB(a,b,c){var s,r=this.b,q=this.a
if(!J.x(r.ga3(),q.ga3()))throw A.b(A.Q('Source URLs "'+A.r(q.ga3())+'" and  "'+A.r(r.ga3())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.Q("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.jS(r))throw A.b(A.Q('Text "'+s+'" must be '+q.jS(r)+" characters long.",null))}},
gP(){return this.a},
gM(){return this.b},
gaJ(){return this.c}}
A.n8.prototype={
gke(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gP().gag()+1)+", column "+(p.gP().gaq()+1)
if(p.ga3()!=null){s=p.ga3()
r=$.i6()
s.toString
s=o+(" of "+r.n0(s))
o=s}o+=": "+this.a
q=p.vC(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iG:1}
A.h3.prototype={
gar(){var s=this.b
s=A.BY(s.a,s.b)
return s.b},
$ibj:1,
gfO(){return this.c}}
A.h4.prototype={
ga3(){return this.gP().ga3()},
gm(a){return this.gM().gar()-this.gP().gar()},
a0(a,b){var s=this.gP().a0(0,b.gP())
return s===0?this.gM().a0(0,b.gM()):s},
vC(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.I8(s,a).vB()},
R(a,b){if(b==null)return!1
return b instanceof A.h4&&this.gP().R(0,b.gP())&&this.gM().R(0,b.gM())},
gI(a){return A.c6(this.gP(),this.gM(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dp(s).l(0)+": from "+s.gP().l(0)+" to "+s.gM().l(0)+' "'+s.gaJ()+'">'},
$iaw:1}
A.da.prototype={
gbc(){return this.d}}
A.jn.prototype={
a4(){return"SqliteUpdateKind."+this.b}}
A.cs.prototype={
gI(a){return A.c6(this.a,this.b,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.cs&&b.a===this.a&&b.b===this.b&&b.c===this.c},
l(a){return"SqliteUpdate: "+this.a.l(0)+" on "+this.b+", rowid = "+this.c}}
A.c8.prototype={
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
p=p!=null?s+(", parameters: "+J.bM(p,new A.wS(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iG:1}
A.wS.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.a0(a)},
$S:169}
A.kH.prototype={}
A.r1.prototype={
tb(){var s=this,r=s.d
return r==null?s.d=new A.e1(s,A.j([],t.fU),new A.ra(s),new A.rb(s),t.jy):r},
rB(){var s=this,r=s.e
return r==null?s.e=new A.e1(s,A.j([],t.lw),new A.r7(s),new A.r8(s),t.lU):r},
pd(){var s=this,r=s.f
return r==null?s.f=new A.e1(s,A.j([],t.lw),new A.r3(s),new A.r4(s),t.ag):r},
tZ(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.t(A.az(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b7(m))
r=n.a
q=r.e1(s,1)
s=r.d
p=A.CX(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.d8(new A.rc(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.BF(this,p,o,o,o)},
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
q=r!==0?A.D0(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aD(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.t(A.y("This database has already been closed"))
r=p.b
q=r.a
s=q.e1(B.e.v(a),1)
q=q.d
r=A.CX(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.BF(p,r,"executing",a,b)}else{s=p.ii(a,!0)
try{s.e7(new A.bO(b))}finally{s.q()}}},
O(a){return this.aD(a,B.n)},
qY(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.t(A.y("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cB(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.xN(r,p,n,o)
l=A.j([],t.lE)
k=new A.r5(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kP(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.BF(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.N(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null)l.push(new A.h6(f,e,new A.dj(!1).cW(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kP(j,r-j,0)
n=q.buffer
h=B.c.N(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null){l.push(new A.h6(f,e,""))
k.$0()
throw A.b(A.az(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.az(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
ii(a,b){var s=this.qY(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.az(a,"sql","Must contain an SQL statement."))
return B.b.gG(s)},
wa(a){return this.ii(a,!1)},
o0(a,b){var s,r=this.ii(a,!0)
try{s=r.kI(new A.bO(b))
return s}finally{r.q()}},
o_(a){return this.o0(a,B.n)}}
A.ra.prototype={
$0(){var s=this.a,r=s.b
r.a.mz(r.b,new A.r9(s))},
$S:0}
A.r9.prototype={
$3(a,b,c){var s=A.J9(a)
if(s==null)return
this.a.d.jQ(new A.cs(s,b,c))},
$S:170}
A.rb.prototype={
$0(){var s=this.a.b
s.a.mz(s.b,null)
return null},
$S:0}
A.r7.prototype={
$0(){var s=this.a,r=s.b
r.a.my(r.b,new A.r6(s))
return null},
$S:0}
A.r6.prototype={
$0(){this.a.e.jQ(null)},
$S:0}
A.r8.prototype={
$0(){var s=this.a.b
s.a.my(s.b,null)
return null},
$S:0}
A.r3.prototype={
$0(){var s=this.a,r=s.b
r.a.mx(r.b,new A.r2(s))
return null},
$S:0}
A.r2.prototype={
$0(){var s=this.a.f
s.jQ(null)
return 0},
$S:12}
A.r4.prototype={
$0(){var s=this.a.b
s.a.mx(s.b,null)
return null},
$S:0}
A.rc.prototype={
$2(a,b){A.KN(a,this.a,b)},
$S:171}
A.r5.prototype={
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
A.nO.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.IT(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.IV(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.Q("The argument list is unmodifiable",null))},
$iwP:1}
A.e1.prototype={
gcR(){var s=this.r
return s==null?this.r=this.q0(!1):s},
q0(a){return new A.di(new A.A5(this,!1),this.$ti.i("di<1>"))},
jQ(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.t(o.bE())
if((n&1)!==0)o.gaM().aA(a)}else{n=o.b
if(n>=4)A.t(o.bE())
if((n&1)!==0)o.cu(a)
else if((n&3)===0){n=o.fY()
o=new A.cb(a,o.$ti.i("cb<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.sei(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.A5.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.A6(q,a,s)
a.r=a.e=new A.A7(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dI<1>)")}}
A.A6.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.k2(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.A7.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,new A.k2(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.wO.prototype={
mO(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.J8(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
w0(a,b){var s,r,q,p,o,n,m,l,k,j
this.mO()
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
k=new A.xG(r,l,o)
r=r.r
if(r!=null)r.mp(k,l,o)
if(m!==0){j=A.D0(s,k,m,"opening the database",null,null)
k.kN()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.r1(s,k,!1)}}
A.h6.prototype={
gpc(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.j([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.nY(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dj(!1).cW(o,0,null,!0))}return q},
gt3(){return null},
bA(a,b){A.BF(this.b,a,b,this.d,this.e)},
lp(){if(this.r||this.b.r)throw A.b(A.y(u.f))},
h_(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dn()
if(s!==0?s!==101:q)r.bA(s,"executing statement")},
rK(){var s,r,q,p,o,n,m=this,l=A.j([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rm(o))
l.push(p)}m.dn()
if(p!==0?p!==101:k)m.bA(p,"selecting from statement")
n=m.gpc()
m.gt3()
k=new A.mS(l,n,B.ak)
k.p6()
return k},
rm(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ao(r.Number(s)):A.EO(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.od(a)
case 4:return s.kO(a)
case 5:default:return null}},
oW(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.t(A.az(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.oX(a[s-1],s)
this.e=a},
oX(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.ai(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aJ){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.Dv(a).l(0)))
break A}if(A.bH(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.oc(b,a)
break A}if(t.L.b(a)){s=q.a.ob(b,a)
break A}s=q.oV(a,b)
break A}if(s!==0)q.bA(s,"binding parameter")},
oV(a,b){throw A.b(A.az(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
eA(a){A:{if(a instanceof A.bO){this.oW(a.a)
break A}if(a instanceof A.lh)a.a.$1(this)}},
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
if(r!=null)r.mC(s.d)}},
kI(a){var s=this
s.lp()
s.dn()
s.eA(a)
return s.rK()},
e7(a){var s=this
s.lp()
s.dn()
s.eA(a)
s.h_()}}
A.lW.prototype={
iB(a,b){return this.d.J(a)?1:0},
kB(a,b){this.d.H(0,a)},
kC(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r=a.a
if(r==null)r=A.DS(this.b,"/")
s=this.d
if(!s.J(r))if((b&4)!==0)s.j(0,r,new A.cw(new Uint8Array(0),0))
else throw A.b(A.hj(14))
return new A.hG(new A.oo(this,r,(b&8)!==0),0)},
kE(a){}}
A.oo.prototype={
n3(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ah(a,0,s,J.bL(B.f.gaa(r.a),0,r.b),b)
return s},
kA(){return this.d>=2?1:0},
iC(){if(this.c)this.a.d.H(0,this.b)},
fF(){return this.a.d.h(0,this.b).b},
kD(a){this.d=a},
kF(a){},
fG(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cw(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kG(a){this.d=a},
ev(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cw(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.av(0,b,s,a)}}
A.Bt.prototype={
$1(a){return a.length!==0},
$S:10}
A.qH.prototype={
p6(){var s,r,q,p,o=A.u(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o.j(0,p,B.b.dh(s,p))}this.c=o}}
A.mS.prototype={
gu(a){return new A.zP(this)},
h(a,b){return new A.c7(this,A.fC(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iJ:1,
$io:1,
$ip:1}
A.c7.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.ai(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gK(){return this.a.a},
gaX(){return this.b},
$iI:1}
A.zP.prototype={
gn(){var s=this.a
return new A.c7(s,A.fC(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.oE.prototype={}
A.oF.prototype={}
A.oH.prototype={}
A.oI.prototype={}
A.vh.prototype={
a4(){return"OpenMode."+this.b}}
A.eg.prototype={}
A.bO.prototype={}
A.lh.prototype={}
A.de.prototype={
l(a){return"VfsException("+this.a+")"},
$iG:1}
A.jm.prototype={}
A.b4.prototype={}
A.kX.prototype={}
A.kW.prototype={
giD(){return 0},
nj(a,b){return 12},
giF(){return 4096},
iE(a,b){var s=this.n3(a,b),r=a.length
if(s<r){B.f.jW(a,s,r,0)
throw A.b(B.dR)}},
$ibo:1,
$ijw:1}
A.eL.prototype={}
A.BE.prototype={
$0(){var s,r,q
for(s=this.a;!s.gE(0);){if(s.b===0)A.t(A.y("No such element"))
r=s.c
q=r.a
q.toString
q.jB(A.n(r).i("b2.E").a(r))
r.d.$0()}},
$S:0}
A.BC.prototype={
$1(a){var s=this.a,r=s.b
s.h8(s.c,new A.eL(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:19}
A.BD.prototype={
$4(a,b,c,d){this.a.$1(c.eZ(d))},
$S:173}
A.xL.prototype={}
A.xG.prototype={
kN(){var s=this.a,r=s.r
if(r!=null)r.mC(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.xN.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kP(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.CX(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d5(o.b.buffer,0,null)[B.c.af(n,2)]
if(s===0)r=null
else{n=new A.k()
r=new A.xM(s,o,n)
o=o.w
if(o!=null)o.mp(r,s,n)}return new A.oC(r,p)}}
A.xM.prototype={
ob(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cB(b),J.aq(b))},
oc(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cB(s),s.length)},
kO(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.ED(s.b,q.sqlite3_column_blob(r,a),p)},
od(a){var s=this.c
return A.dU(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dT.prototype={$iCj:1}
A.df.prototype={$iCk:1}
A.hl.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.df(s,A.d5(s.b.buffer,0,null)[B.c.af(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lk.prototype={
vU(a){var s,r,q=this.b
q===$&&A.v()
s="[sqlite3] "+A.dU(q,a,null)
r=$.Lj
if(r==null)A.Gn(s)
else r.$1(s)},
vS(a,b){var s,r=new A.aW(A.lo(A.ao(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.v()
s=A.E8(q.buffer,b,8)
s.$flags&2&&A.H(s)
s[0]=A.Ch(r)
s[1]=A.Cf(r)
s[2]=A.Ce(r)
s[3]=A.vQ(r)
s[4]=A.Cg(r)-1
s[5]=A.Ci(r)-1900
s[6]=B.c.ak(A.IL(r),7)},
xF(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.v()
s=new A.jm(A.Cz(j,b,k))
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
return m}catch(l){p=A.F(l)
if(p instanceof A.de){q=p
p=q.a
j=A.d5(j.buffer,0,k)
o=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[o]=p}else{j=j.buffer
j=A.d5(j,0,k)
p=B.c.af(c,2)
j.$flags&2&&A.H(j)
j[p]=1}}return k},
xu(a,b,c){var s=this.b
s===$&&A.v()
return A.bX(new A.qN(a,A.dU(s,b,null),c))},
xl(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bX(new A.qK(this,a,A.dU(s,b,null),c,d))},
xB(a,b,c,d){var s=this.b
s===$&&A.v()
return A.bX(new A.qP(this,a,A.dU(s,b,null),c,d))},
xH(a,b,c){return A.bX(new A.qR(this,c,b,a))},
xM(a,b){return A.bX(new A.qT(a,b))},
xs(a,b){var s,r=Date.now(),q=this.b
q===$&&A.v()
s=v.G.BigInt(r)
A.C5(A.E7(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xp(a){return A.bX(new A.qM(a))},
xJ(a,b,c,d){return A.bX(new A.qS(this,a,b,c,d))},
xU(a,b,c,d){return A.bX(new A.qX(this,a,b,c,d))},
xQ(a,b){return A.bX(new A.qV(a,b))},
xO(a,b){return A.bX(new A.qU(a,b))},
xz(a,b){return A.bX(new A.qO(this,a,b))},
xD(a,b){return A.bX(new A.qQ(a,b))},
xS(a,b){return A.bX(new A.qW(a,b))},
xn(a,b){return A.bX(new A.qL(this,a,b))},
xv(a){return a.giD()},
xx(a,b,c){if(t.j2.b(a))return a.nj(b,c)
return 12},
xK(a){if(t.j2.b(a))return a.giF()
return 4096},
ur(a){a.$0()},
ul(a){return a.$0()},
uo(a,b,c,d,e){var s=this.b
s===$&&A.v()
a.$3(b,A.dU(s,d,null),A.ao(v.G.Number(e)))},
ux(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.dT(s,b),new A.hl(s,c,d))},
uB(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.v()
r.$2(new A.dT(s,b),new A.hl(s,c,d))},
uz(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.v()
null.$2(new A.dT(s,b),new A.hl(s,c,d))},
uD(a,b){var s
null.toString
s=this.a
s===$&&A.v()
null.$1(new A.dT(s,b))},
uv(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.v()
r.$1(new A.dT(s,b))},
ut(a,b,c,d,e){var s=this.b
s===$&&A.v()
return null.$2(A.Cz(s,c,b),A.Cz(s,e,d))},
uj(a,b){return a.$1(b)},
uh(a,b){return a.gxY().$1(b)},
uf(a,b,c){return a.gxX().$2(b,c)}}
A.qN.prototype={
$0(){return this.a.kB(this.b,this.c)},
$S:0}
A.qK.prototype={
$0(){var s,r=this,q=r.b.iB(r.c,r.d),p=r.a.b
p===$&&A.v()
p=A.d5(p.buffer,0,null)
s=B.c.af(r.e,2)
p.$flags&2&&A.H(p)
p[s]=q},
$S:0}
A.qP.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kC(q.c)),o=p.length
if(o>q.d)throw A.b(A.hj(14))
s=q.a.b
s===$&&A.v()
s=A.bS(s.buffer,0,null)
r=q.e
B.f.cP(s,r,p)
s.$flags&2&&A.H(s)
s[r+o]=0},
$S:0}
A.qR.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.v()
s=A.bS(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.Dt(s,q.b)
else return A.Dt(s,null)},
$S:0}
A.qT.prototype={
$0(){this.a.kE(A.dv(this.b,0,0))},
$S:0}
A.qM.prototype={
$0(){return this.a.iC()},
$S:0}
A.qS.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.iE(A.bS(r.buffer,s.c,s.d),A.ao(v.G.Number(s.e)))},
$S:0}
A.qX.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.v()
s.b.ev(A.bS(r.buffer,s.c,s.d),A.ao(v.G.Number(s.e)))},
$S:0}
A.qV.prototype={
$0(){return this.a.fG(A.ao(v.G.Number(this.b)))},
$S:0}
A.qU.prototype={
$0(){return this.a.kF(this.b)},
$S:0}
A.qO.prototype={
$0(){var s,r=this.b.fF(),q=this.a.b
q===$&&A.v()
q=A.d5(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.qQ.prototype={
$0(){return this.a.kD(this.b)},
$S:0}
A.qW.prototype={
$0(){return this.a.kG(this.b)},
$S:0}
A.qL.prototype={
$0(){var s,r=this.b.kA(),q=this.a.b
q===$&&A.v()
q=A.d5(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.d8.prototype={}
A.ib.prototype={
a9(a,b,c,d){var s,r=null,q={},p=A.bf(A.C5(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.wV(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.px(q,this,p,o)
o.d=s
o.f=new A.py(q,o,s)
return new A.b5(o,A.n(o).i("b5<1>")).a9(a,b,c,d)},
bz(a,b,c){return this.a9(a,null,b,c)}}
A.px.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a5(q,t.m).bU(new A.pz(p,r.b,s,r),s.gty(),t.P)},
$S:0}
A.pz.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaM().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:20}
A.py.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.gaM().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.eP.prototype={
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
return s==null?A.t(A.y("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.w($.C,t.g5)
s=new A.an(o,t.ex)
r=p.d
q=t.m
p.b=A.bp(r,"success",new A.yT(p,s),!1,q)
p.c=A.bp(r,"error",new A.yU(p,s),!1,q)
return o}}
A.yT.prototype={
$1(a){var s,r=this.a
r.D()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.yU.prototype={
$1(a){var s=this.a
s.D()
s=s.d.error
if(s==null)s=a
this.b.aR(s)},
$S:1}
A.qk.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.ql.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qp.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qq.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qr.prototype={
$1(a){this.a.aR(new A.bl("IndexedDB open blocked"))},
$S:1}
A.rF.prototype={
$1(a){return A.bf(a[1])},
$S:195}
A.xH.prototype={
u_(){var s={}
s.dart=new A.xI(this).$0()
return s},
i9(a){return this.vO(a)},
vO(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(v.G.WebAssembly.instantiateStreaming(a,p.u_()),t.m),$async$i9)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i9,r)}}
A.xI.prototype={
$0(){var s=this.a.a,r=A.bf(v.G.Object),q=A.bf(r.create.apply(r,[null]))
q.error_log=A.cY(s.gvT())
q.localtime=A.bV(s.gvR())
q.xOpen=A.CS(s.gxE())
q.xDelete=A.p6(s.gxt())
q.xAccess=A.hT(s.gxk())
q.xFullPathname=A.hT(s.gxA())
q.xRandomness=A.p6(s.gxG())
q.xSleep=A.bV(s.gxL())
q.xCurrentTimeInt64=A.bV(s.gxq())
q.xClose=A.cY(s.gxo())
q.xRead=A.hT(s.gxI())
q.xWrite=A.hT(s.gxT())
q.xTruncate=A.bV(s.gxP())
q.xSync=A.bV(s.gxN())
q.xFileSize=A.bV(s.gxy())
q.xLock=A.bV(s.gxC())
q.xUnlock=A.bV(s.gxR())
q.xCheckReservedLock=A.bV(s.gxm())
q.xDeviceCharacteristics=A.cY(s.giD())
q.xFileControl=A.p6(s.gxw())
q.xSectorSize=A.cY(s.giF())
q["dispatch_()v"]=A.cY(s.guq())
q["dispatch_()i"]=A.cY(s.guk())
q.dispatch_update=A.CS(s.gun())
q.dispatch_xFunc=A.hT(s.guw())
q.dispatch_xStep=A.hT(s.guA())
q.dispatch_xInverse=A.hT(s.guy())
q.dispatch_xValue=A.bV(s.guC())
q.dispatch_xFinal=A.bV(s.guu())
q.dispatch_compare=A.CS(s.gus())
q.dispatch_busy=A.bV(s.gui())
q.changeset_apply_filter=A.bV(s.gug())
q.changeset_apply_conflict=A.p6(s.gue())
return q},
$S:26}
A.hk.prototype={}
A.pA.prototype={
ic(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ic=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.w($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cY(new A.pD(o))
new A.an(p,t.h1).aB(A.HK(o,t.m))
s=2
return A.a(p,$async$ic)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$ic,r)},
dX(a,b){return this.rD(a,b)},
rD(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.Hc(),b)
o=A.JP(p)
s=2
return A.a(A.MV(new A.pC(a,o,p),t.mj),$async$dX)
case 2:s=3
return A.a(o.b.a,$async$dX)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dX,r)},
qW(a){return this.dX(new A.pB(a),"readwrite")}}
A.pD.prototype={
$1(a){var s=A.bf(this.a.result)
if(J.x(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:20}
A.pC.prototype={
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
A.pB.prototype={
$1(a){return this.nk(a)},
nk(a){var s=0,r=A.h(t.H),q=this,p,o,n
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
$S:23}
A.jT.prototype={
oF(a){var s=A.AM(new A.zt(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.AM(new A.zu(this))},
jo(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.j([a,c],s),A.j([a,b],s))},
rj(a){return this.jo(a,9007199254740992,0)},
rk(a,b){return this.jo(a,9007199254740992,b)},
i8(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$i8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.u(t.N,t.S)
k=new A.eP(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$i8)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.t(A.y("Await moveNext() first"))
n=o.key
n.toString
A.D(n)
m=o.primaryKey
m.toString
l.j(0,n,A.ao(A.eZ(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i8,r)},
hS(a){return this.v2(a)},
v2(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$hS=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cD(p.d.index("fileName").getKey(a),t.W),$async$hS)
case 3:q=o.ao(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hS,r)},
jp(a){return A.cD(this.d.get(a),t.B).X(new A.zs(a),t.m)},
ex(a,b){return this.oe(a,b)},
oe(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ex=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jp(a),$async$ex)
case 3:h=d
g=h.length
f=new A.cw(new Uint8Array(g),g)
e=new A.eP(p.e.openCursor(p.rj(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$ex)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.t(A.y("Await moveNext() first"))
k=n.a(l.key)
j=A.ao(A.eZ(k[1]))
if(j>=h.length){s=5
break}i=new A.zv(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.ww(A.bf(l.value)).X(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ex,r)},
hI(a){return this.tX(a)},
tX(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.t(A.y("IDB transaction already completed"))
o=A
s=3
return A.a(A.cD(p.d.put({name:a,length:0}),t.W),$async$hI)
case 3:q=o.ao(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
aZ(a,b){return this.xd(a,b)},
xd(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$aZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.y("IDB transaction already completed"))
s=2
return A.a(q.jp(a),$async$aZ)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.O(new A.T(o,n),n.i("o.E"))
B.b.aE(m)
s=3
return A.a(A.C0(new A.X(m,new A.zw(new A.zx(q,a),b),A.a_(m).i("X<1,A<~>>")),t.H),$async$aZ)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eP(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$aZ)
case 6:s=7
return A.a(A.cD(l.gn().update({name:p.name,length:b.c}),t.X),$async$aZ)
case 7:case 5:return A.e(null,r)}})
return A.f($async$aZ,r)},
ds(a,b,c){return this.wO(0,b,c)},
wO(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$ds=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.y("IDB transaction already completed"))
s=2
return A.a(q.jp(b),$async$ds)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cD(q.e.delete(q.rk(b,B.c.N(c,4096)*4096)),t.X),$async$ds)
case 5:case 4:o=new A.eP(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$ds)
case 6:s=7
return A.a(A.cD(o.gn().update({name:p.name,length:c}),t.X),$async$ds)
case 7:return A.e(null,r)}})
return A.f($async$ds,r)},
hM(a){return this.uc(a)},
uc(a){var s=0,r=A.h(t.H),q=this,p
var $async$hM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.t(A.y("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.C0(A.j([A.cD(q.e.delete(q.jo(a,9007199254740992,0)),p),A.cD(q.d.delete(a),p)],t.iw),t.H),$async$hM)
case 2:return A.e(null,r)}})
return A.f($async$hM,r)}}
A.zt.prototype={
$0(){this.a.b.an()},
$S:2}
A.zu.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aR(r)},
$S:2}
A.zs.prototype={
$1(a){if(a==null)throw A.b(A.az(this.a,"fileId","File not found in database"))
else return a},
$S:198}
A.zv.prototype={
$1(a){var s=this.a
s.cP(s,this.b,J.bL(a,0,this.c))},
$S:199}
A.zx.prototype={
nT(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cD(p.openCursor(v.G.IDBKeyRange.only(A.j([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gaa(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cD(p.put(l,A.j([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cD(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.nT(a,b)},
$S:200}
A.zw.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:201}
A.z4.prototype={
ta(a,b,c){B.f.cP(this.b.km(a,new A.z5(this,a)),b,c)},
tC(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.N(q,4096)
o=B.c.ak(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.ta(p*4096,o,J.bL(B.f.gaa(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.z5.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cP(s,0,J.bL(B.f.gaa(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:202}
A.ox.prototype={}
A.dA.prototype={
eW(a){var s=this
if(s.e||s.d.a==null)A.t(A.hj(10))
if(a.k8(s.x)){s.cw(!0)
return a.d.a}else return A.b9(null,t.H)},
cw(a){return this.rZ(a)},
rZ(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gE(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.O(o,o.$ti.i("o.E"))
o.am(0)
s=5
return A.a(p.d.qW(n).aY(new A.tm(p,n,a)),$async$cw)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cw,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eW(new A.jR(new A.tn(),new A.an(new A.w($.C,t.D),t.F)))
p.e=!0
p.cw(!1)
q=o
s=1
break}else{n=p.x
if(!n.gE(0)){q=n.ga1(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dI(a,b){return this.pX(a,b)},
pX(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
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
return A.a(a.hS(b),$async$dI)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dI,r)},
eP(){var s=0,r=A.h(t.H),q=this,p
var $async$eP=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.j([],t.iw)
s=2
return A.a(q.d.dX(new A.tl(q,p),"readonly"),$async$eP)
case 2:s=3
return A.a(A.I5(p,t.H),$async$eP)
case 3:return A.e(null,r)}})
return A.f($async$eP,r)},
cF(){return this.cw(!1)},
iB(a,b){return this.w.d.J(a)?1:0},
kB(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.eW(new A.jL(s,a,new A.an(new A.w($.C,t.D),t.F)))},
kC(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.DS(p.b,"/")
s=p.w
r=s.d.J(o)?1:0
q=s.du(new A.jm(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.eW(new A.hv(p,o,new A.an(new A.w($.C,t.D),t.F)))
return new A.hG(new A.op(p,q.a,o),0)},
kE(a){}}
A.tm.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.t(A.y("Future already completed"))
p.cn(null)}o.cw(this.c)},
$S:2}
A.tn.prototype={
$1(a){return this.nr(a)},
nr(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:23}
A.tl.prototype={
$1(a){return this.nq(a)},
nq(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.i8(),$async$$1)
case 2:m=c
l=q.a
l.z.C(0,m)
p=m.gab(),p=p.gu(p),o=q.b,l=l.w.d
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
$S:23}
A.op.prototype={
iE(a,b){this.b.iE(a,b)},
giD(){return 0},
giF(){return 4096},
kA(){return this.b.d>=2?1:0},
iC(){},
fF(){return this.b.fF()},
kD(a){this.b.d=a
return null},
kF(a){},
nj(a,b){return 12},
fG(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.t(A.hj(10))
s.b.fG(a)
if(!r.y.F(0,s.c))r.eW(new A.jR(new A.zr(s,a),new A.an(new A.w($.C,t.D),t.F)))},
kG(a){this.b.d=a
return null},
ev(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.t(A.hj(10))
s=m.c
if(l.y.F(0,s)){m.b.ev(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cw(new Uint8Array(0),0)
q=J.bL(B.f.gaa(r.a),0,r.b)
m.b.ev(a,b)
p=new Uint8Array(a.length)
B.f.cP(p,0,a)
o=A.j([],t.p8)
n=$.C
o.push(new A.ox(b,p))
l.eW(new A.hP(l,s,q,o,new A.an(new A.w(n,t.D),t.F)))},
$ibo:1,
$ijw:1}
A.zr.prototype={
$1(a){return this.nS(a)},
nS(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dI(a,o.c),$async$$1)
case 3:q=n.ds(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:23}
A.b6.prototype={
k8(a){a.h8(a.c,this,!1)
return!0}}
A.jR.prototype={
aU(a){return this.w.$1(a)}}
A.jL.prototype={
k8(a){var s,r,q,p
if(!a.gE(0)){s=a.ga1(0)
for(r=this.x;s!=null;)if(s instanceof A.jL)if(s.x===r)return!1
else s=s.gfn()
else if(s instanceof A.hP){q=s.gfn()
if(s.x===r){p=s.a
p.toString
p.jB(A.n(s).i("b2.E").a(s))}s=q}else if(s instanceof A.hv){if(s.x===r){r=s.a
r.toString
r.jB(A.n(s).i("b2.E").a(s))
return!1}s=s.gfn()}else break}a.h8(a.c,this,!1)
return!0},
aU(a){return this.wG(a)},
wG(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dI(a,o),$async$aU)
case 2:n=c
p.z.H(0,o)
s=3
return A.a(a.hM(n),$async$aU)
case 3:return A.e(null,r)}})
return A.f($async$aU,r)}}
A.hv.prototype={
aU(a){return this.wF(a)},
wF(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hI(p),$async$aU)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aU,r)}}
A.hP.prototype={
k8(a){var s,r=a.b===0?null:a.ga1(0)
for(s=this.x;r!=null;)if(r instanceof A.hP)if(r.x===s){B.b.C(r.z,this.z)
return!1}else r=r.gfn()
else if(r instanceof A.hv){if(r.x===s)break
r=r.gfn()}else break
a.h8(a.c,this,!1)
return!0},
aU(a){return this.wH(a)},
wH(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.z4(m,A.u(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.q)(m),++o){n=m[o]
l.tC(n.a,n.b)}k=a
s=3
return A.a(q.w.dI(a,q.x),$async$aU)
case 3:s=2
return A.a(k.aZ(c,l),$async$aU)
case 2:return A.e(null,r)}})
return A.f($async$aU,r)}}
A.fw.prototype={
a4(){return"FileType."+this.b}}
A.h2.prototype={
bK(){var s=this.d
if(s!=null)return s
throw A.b(A.y("VFS closed"))},
iB(a,b){var s=$.BJ().h(0,a)
if(s==null)return this.e.d.J(a)?1:0
else return this.bK().bo(s)?1:0},
kB(a,b){var s=$.BJ().h(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.bK().fi(s,!1)},
kC(a){return new v.G.URL(a,"file:///").pathname},
du(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.du(a,b)
s=$.BJ().h(0,p)
if(s==null)return q.e.du(a,b)
r=q.bK()
if(!r.bo(s))if((b&4)!==0){r.de(s).truncate(0)
r.fi(s,!0)}else throw A.b(B.dQ)
return new A.hG(new A.oN(q,s,(b&8)!==0),0)},
kE(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cK(a,b){return this.w2(a,b)},
cJ(a){return this.cK(a,!1)},
w2(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.wL(a,b)
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
n=q.d=new A.zL(new Uint8Array(2),l,p,o)
if(k){n.fi(B.b0,p.getSize()>0)
n.fi(B.b1,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cK,r)}}
A.wL.prototype={
nO(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.nO(a)},
$S:203}
A.oN.prototype={
n3(a,b){return A.DP(this.a.bK().de(this.b),a,{at:b})},
kA(){return this.d>=2?1:0},
iC(){var s=this.a,r=this.b
s.bK().de(r).flush()
if(this.c)s.bK().fi(r,!1)},
fF(){return this.a.bK().de(this.b).getSize()},
kD(a){this.d=a},
kF(a){this.a.bK().de(this.b).flush()},
fG(a){this.a.bK().de(this.b).truncate(a)},
kG(a){this.d=a},
ev(a,b){if(A.DQ(this.a.bK().de(this.b),a,{at:b})<a.length)throw A.b(B.dS)}}
A.zL.prototype={
bo(a){var s=this.a
A.DP(this.b,s,{at:0})
return s[a.a]!==0},
fi(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.H(s)
s[a.a]=r
A.DQ(this.b,s,{at:0})},
de(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.xB.prototype={
oC(a,b){var s=this,r=s.c
r.a!==$&&A.cg()
r.a=s
r=t.S
A.z6(new A.xC(s),r)
A.z6(new A.xD(s),r)
s.r=A.z6(new A.xE(s),r)
s.w=A.z6(new A.xF(s),r)},
e1(a,b){var s=J.M(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bS(this.b.buffer,0,null)
B.f.av(q,r,r+s.gm(a),a)
B.f.jW(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cB(a){return this.e1(a,0)},
mz(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mx(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
my(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.xC.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.xD.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.xE.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.xF.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.ik.prototype={}
A.vT.prototype={
oz(a){var s,r=this,q=r.a
q.start()
r.c=A.bp(q,"message",new A.vX(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kB()
q.toString
A.jy(q,s,null,null,!1).X(new A.vY(r),t.P)}},
jd(a){return this.q7(a)},
q7(a){var s=0,r=A.h(t.H),q=this
var $async$jd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.Mj(a,new A.vU(q),q.gvr(),new A.vV(q),new A.vW(q))
return A.e(null,r)}})
return A.f($async$jd,r)},
fM(a,b,c){return this.o6(a,b,c,c)},
o6(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fM=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.HA(null))
o=p.e++
n=new A.w($.C,t.a7)
p.f.j(0,o,new A.an(n,t.h1))
a.i=o
p.a.postMessage(a,A.hZ(a))
s=3
return A.a(n,$async$fM)
case 3:m=f
if(J.x(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.IX(m))
case 1:return A.e(q,r)}})
return A.f($async$fM,r)},
qr(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.D()
s=q.d
if(s!=null)s.D()
for(s=q.f,r=new A.aR(s,s.r,s.e,A.n(s).i("aR<2>"));r.k();)r.d.aR(new A.ii(a))
s.am(0)
p.an()},
lH(){return this.qr(null)}}
A.vX.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lH()
return}this.a.jd(A.bf(a.data))},
$S:1}
A.vY.prototype={
$1(a){this.a.lH()
a.a.an()},
$S:204}
A.vW.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.aB(a)},
$S:20}
A.vV.prototype={
$1(a){return this.nH(a)},
nH(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
return A.a(t.nW.b(j)?j:A.bv(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.F(a0)
k=A.ad(a0)
if(!(l instanceof A.dq)){b.console.error("Error in worker: "+J.a0(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.c8){h=A.HY(b)
g=0}else{g=b instanceof A.dq?1:null
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
d.a.postMessage(c,A.hZ(c))
return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:205}
A.vU.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:20}
A.ii.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iG:1}
A.r_.prototype={
cd(a){return this.vP(a)},
vP(a){var s=0,r=A.h(t.n),q
var $async$cd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.xK(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cd,r)}}
A.lg.prototype={}
A.qI.prototype={}
A.eJ.prototype={}
A.lz.prototype={
ia(){var s=0,r=A.h(t.H),q=this
var $async$ia=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cJ(q.b),$async$ia)
case 4:case 3:return A.e(null,r)}})
return A.f($async$ia,r)},
kn(){var s=0,r=A.h(t.H),q=this
var $async$kn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kn,r)}}
A.rX.prototype={
wJ(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
q1(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.xR.prototype={
$1(a){var s=new A.w($.C,t.D),r=new A.d_(new A.an(s,t.F))
this.a.a=r
this.b.aB(r)
return A.I6(s)},
$S:206}
A.xS.prototype={
$2(a,b){var s,r,q
A.bf(a)
s=J.x(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.c6(new A.dq("Operation was cancelled"),b)
else q.c6(a,b)}return null},
$S:207}
A.d_.prototype={}
A.ll.prototype={
gtO(){if(this.c.a)return!1
return!this.d||this.f!=null},
dD(a){return this.oJ(a)},
oJ(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dD=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kB()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jy(n,o.a,null,o.gqb(),!0),$async$dD)
case 6:m=c
s=7
return A.a(A.jy(n,o.b,a,null,!1),$async$dD)
case 7:l=c
j=o.e
j=j==null?null:j.ia()
s=8
return A.a(j instanceof A.w?j:A.bv(j,t.H),$async$dD)
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
qc(){this.n5()},
kd(a,b,c){return this.c.ix(new A.re(this,a,b,c),b,c)},
n5(){return this.c.kz(new A.rf(this),t.H)}}
A.re.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dD(r.c).X(new A.rd(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rd.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rf.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kn()
s.a.an()
r.a.an()
p.f=null}},
$S:2}
A.j_.prototype={
ix(a,b,c){return this.xc(a,b,c,c)},
kz(a,b){return this.ix(a,null,b)},
xc(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$ix=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.x(g?null:b.aborted,!0))throw A.b(B.ao)
h.a=!1
o=new A.v9(h,p)
if(!p.a){h.a=p.a=!0
q=A.iy(a,c).aY(o)
s=1
break}else{n={}
m=new A.w($.C,c.i("w<0>"))
l=new A.an(m,c.i("an<0>"))
n.a=null
h=new A.v8(h,n,l,a,c)
if(!g)n.a=A.bp(b,"abort",new A.v7(n,p,l,h),!1,t.m)
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
B.b.ah(j,0,i,h,n)
B.b.ah(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aY(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$ix,r)}}
A.v9.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gE(0)){s=r.b
if(s===r.c)A.t(A.aE());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.v8.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.D()
r.c.aB(A.iy(r.d,r.e))},
$S:0}
A.v7.prototype={
$1(a){var s,r=this
r.a.a.D()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.aR(B.ao)}},
$S:1}
A.eh.prototype={
gnb(){var s,r,q,p,o,n=this,m=t.s,l=A.j([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
B.b.C(l,A.j([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.rv.prototype={
$1(a){if(a!=null)return A.D(a)
return null},
$S:208}
A.mg.prototype={
a4(){return"MessageType."+this.b}}
A.wz.prototype={
um(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hY(a,b)
case"connect":return p.jZ(a,b)
case"custom":return p.ea(a,b)
case"fileSystemExists":return p.fb(a,b)
case"fileSystemFlush":return p.fc(a,b)
case"fileSystemAccess":return p.fa(a,b)
case"runQuery":return p.i1(a,b)
case"exclusiveLock":return p.hX(a,b)
case"releaseLock":s=p.bv(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.t(A.y("Lock to be released is not active."))
q.b.an()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hV(a,b)
case"openAdditionalConnection":return p.hZ(a,b)
case"updateRequest":return p.i2(a,b)
case"rollbackRequest":return p.i0(a,b)
case"commitRequest":return p.hW(a,b)
case"dedicatedCompatibilityCheck":return p.dK(a,b)
case"sharedCompatibilityCheck":return p.dK(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dK(a,b)
default:r=A.f_(new A.bz(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.w($.C,t.hl)
q.cm(r)
return q}}}
A.dw.prototype={
a4(){return"FileSystemImplementation."+this.b}}
A.cv.prototype={
a4(){return"TypeCode."+this.b},
u3(a){var s=null
switch(this.a){case 0:s=A.t(A.Q("Unsupported type code",null))
break
case 1:a=A.ao(A.eZ(a))
s=a
break
case 2:s=A.EO(t.bJ.a(a).toString(),null)
break
case 3:A.eZ(a)
s=a
break
case 4:A.D(a)
s=a
break
case 5:t.Z.a(a)
s=a
break
case 7:A.hR(a)
s=a
break
case 6:break}return s}}
A.ei.prototype={
mq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.Q("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aD:B.b4[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ao(A.eZ(h))))
if(k!==0)a.bA(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bA(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.eZ(h))
if(k!==0)a.bA(k,e)
break
case 4:g=B.e.v(A.D(h))
k=s.dart_sqlite3_bind_text(d,i,c.cB(g),g.length)
if(k!==0)a.bA(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cB(h),h.length)
if(k!==0)a.bA(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bA(k,e)
break
case 7:f=A.hR(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bA(k,e)
break
case 0:throw A.b(A.Y("Unknown type code"))}}},
gm(a){return this.a.length},
sm(a,b){this.md()},
h(a,b){var s=this.c[b],r=s>=8?B.aD:B.b4[s]
return r.u3(this.a[b])},
j(a,b,c){this.md()},
md(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.B0.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:20}
A.qi.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qj.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qm.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qn.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qo.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.vP.prototype={
uF(){var s,r,q,p
for(s=this.b,r=new A.aR(s,s.r,s.e,A.n(s).i("aR<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.am(0)}}
A.iw.prototype={
a4(){return"FileType."+this.b}}
A.dN.prototype={
a4(){return"StorageMode."+this.b}}
A.fX.prototype={
l(a){return"Remote error: "+this.a},
$iG:1}
A.dq.prototype={}
A.AL.prototype={
$1(a){return A.bf(a.data)},
$S:210}
A.k6.prototype={
D(){var s=this.a
if(s!=null)s.D()
this.a=null}}
A.ht.prototype={
q(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.c.D()
q.d.D()
q.e.D()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)p[n].abort()
B.b.am(p)
p=q.f
if(p!=null)p.b.an()
s=2
return A.a(q.a.f0(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
m5(a){var s=new v.G.AbortController()
a.onabort=A.AM(new A.yM(s))
this.w.push(s)
return s},
kw(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gtO()){r=p.m5(b)
o=s.kd(c,r.signal,d).aY(new A.yQ(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.y("Requested operation on inactive lock state."))}if(o==null)o=A.iy(c,d)
q=p.a.z
return q instanceof A.dA?o.aY(q.gv5()):o},
w_(a){var s=this,r=s.m5(a),q=new A.w($.C,t.hy),p=new A.aI(q,t.ho),o=t.H
A.C_(s.a.f.kd(new A.yN(s,p),r.signal,o),new A.yO(p),o,t.K)
return q.aY(new A.yP(s,r))}}
A.yM.prototype={
$0(){return this.a.abort()},
$S:0}
A.yQ.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:2}
A.yN.prototype={
$0(){var s=this.a,r=s.r++,q=new A.w($.C,t.D)
s.f=new A.a4(r,new A.aI(q,t.h))
this.b.aB(r)
return q},
$S:3}
A.yO.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.c6(a,b)},
$S:9}
A.yP.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:2}
A.hr.prototype={
oE(a,b,c){this.b.a.aY(new A.yw(this))},
dK(a,b){return this.q2(a,b)},
q2(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dK=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mt(a),$async$dK)
case 3:q={r:d.gnb(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dK,r)},
jZ(a,b){return this.ve(a,b)},
ve(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$jZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glB()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.hZ(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jZ,r)},
ea(a,b){return this.vf(a,b)},
vf(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$ea=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lk(l)
n=a.r
s=7
return A.a(o.a.gcf(),$async$ea)
case 7:s=6
return A.a(d.cG(p,new A.qI(n)),$async$ea)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cG(p,new A.lg(a)),$async$ea)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ea,r)},
hY(a,b){return this.vt(a,b)},
vt(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kz(new A.yB(p,a),t.m),$async$hY)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hY,r)},
i1(a,b){return this.vx(a,b)},
vx(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.a
s=3
return A.a(n.gcf(),$async$i1)
case 3:m=d
q=o.kw(a.z,b,new A.yE(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i1,r)},
hX(a,b){return this.vj(a,b)},
vj(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).w_(b),$async$hX)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
hW(a,b){return this.vd(a,b)},
vd(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yy(p,o),a),$async$hW)
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
return A.f($async$hW,r)},
i0(a,b){return this.vw(a,b)},
vw(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yD(p,o),a),$async$i0)
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
return A.f($async$i0,r)},
i2(a,b){return this.vz(a,b)},
vz(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dB(n,new A.yG(p,o),a),$async$i2)
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
return A.f($async$i2,r)},
hZ(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bv(a).a;++m.w
s=3
return A.a(A.B3(),$async$hZ)
case 3:o=d
n=o.a
p.w.kX(o.b).x.push(A.EP(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hZ,r)},
hV(a,b){return this.vc(a,b)},
vc(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
B.b.H(p.x,o)
s=3
return A.a(o.q(),$async$hV)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
fc(a,b){return this.vm(a,b)},
vm(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fc=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).a.gcN(),$async$fc)
case 3:o=d
s=o instanceof A.dA?4:5
break
case 4:s=6
return A.a(o.cw(!1),$async$fc)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fc,r)},
fa(a,b){return this.vk(a,b)},
vk(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$fa=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=B.b5[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcN(),$async$fa)
case 4:s=3
return A.a(l.kw(null,k,new j.yz(d,n,m,a),t.m),$async$fa)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fa,r)},
fb(a,b){return this.vl(a,b)},
vl(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcN(),$async$fb)
case 4:s=3
return A.a(n.kw(null,m,new l.yA(d,a),t.y),$async$fb)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fb,r)},
dB(a,b,c){return this.og(a,b,c)},
og(a,b,c){var s=0,r=A.h(t.m),q,p
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
vs(a){},
hK(a){var s=0,r=A.h(t.X),q,p=this
var $async$hK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fM({r:a,z:null,i:0,d:null,t:"custom"},B.cW,t.m),$async$hK)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hK,r)},
lk(a){return B.b.mJ(this.x,new A.yv(a))},
bv(a){var s=a.d
if(s!=null)return this.lk(s)
else throw A.b(A.Q("Request requires database id",null))},
$iDC:1}
A.yw.prototype={
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
A.yB.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cd(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.v3(h.d,A.I0(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcN():m.gcf(),$async$$0)
case 8:l=A.EP(m,null)
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
return A.a(m.f0(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:211}
A.yE.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.y("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ei(s,r,A.bS(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.o1(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ao(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.uU(l,k.s,q)
s=o.d
return A.Gj(s.sqlite3_get_autocommit(p)!==0,m,A.ao(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:26}
A.yy.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.pd().gcR().aS(new A.yx(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:67}
A.yx.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.hZ(s))},
$S:68}
A.yD.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.rB().gcR().aS(new A.yC(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:67}
A.yC.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.hZ(s))},
$S:68}
A.yG.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gcf(),$async$$0)
case 3:q=b.a.tb().gcR().aS(new A.yF(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.yF.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.hZ(s))},
$S:215}
A.yz.prototype={
$0(){var s,r,q,p=this,o=p.a.du(new A.jm(A.Fv(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fG(s.byteLength)
o.ev(A.bS(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fF()
r=new Uint8Array(q)
o.iE(r,0)
q={r:t.a.a(J.Hj(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iC()}},
$S:26}
A.yA.prototype={
$0(){return this.a.iB(A.Fv(B.b5[this.b.f]),0)===1},
$S:58}
A.yv.prototype={
$1(a){return a.b===this.a},
$S:216}
A.lm.prototype={
gcN(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcN=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.iy(new A.ri(p),t.H):o,$async$gcN)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcN,r)},
gcf(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gcf=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.iy(new A.rh(p),t.u):o,$async$gcf)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcf,r)},
f0(){var s=0,r=A.h(t.H),q=this
var $async$f0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$f0)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f0,r)},
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
l=$.De()
A.BX(m)
k=l.a.get(m)
if(k==null)A.t(A.y("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.w?j:A.bv(j,t.H),$async$q)
case 6:q.f.n5()
return A.e(null,r)}})
return A.f($async$q,r)},
lN(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a4(s,!0)
p=a.ii(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.T(n,A.n(n).i("T<1>")).gG(0)).q()
n.j(0,p.d,p)
return new A.a4(p,!0)}return new A.a4(p,!1)},
uU(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aD(b,B.n)
else{s=null
r=null
q=this.lN(a,b)
s=q.a
r=q.b
try{s.e7(new A.lh(c.gtM()))}finally{if(r)s.dn()
else s.q()}}},
o1(a,b,c){var s,r=null,q=null,p=this.lN(a,b)
r=p.a
q=p.b
try{s=A.IY(r,c)
return s}finally{if(q)r.dn()
else r.q()}}}
A.ri.prototype={
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
return A.a(A.wK("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ge5()
s=3
break
case 5:case 6:s=10
return A.a(A.lA("drift_db/"+l.c,k===B.aw,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ge5()
s=3
break
case 7:s=11
return A.a(A.lY(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ge5()
s=3
break
case 8:l.z=A.C2("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rh.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcN(),$async$$0)
case 4:n=b
o.mO()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e1(B.e.v(n.a),1),n,0)
if(m===0)A.t(A.y("could not register vfs"))
$.De().j(0,n,m)
s=5
return A.a(l.f.kd(new A.rg(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:69}
A.rg.prototype={
$0(){var s=this.a
return s.a.b.ie(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:69}
A.y_.prototype={
glB(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.oa()
r.Q!==$&&A.BG()
r.Q=s
q=s}return q},
eb(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$eb=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cy(A.cz(A.KM(n.a),"stream",t.K),t.hT)
q=2
j=v.G
case 5:s=7
return A.a(h.k(),$async$eb)
case 7:if(!b){s=6
break}m=h.gn()
s=J.x(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.ik(i.port,i.lockName,null)
n.kX(l)
s=9
break
case 10:s=A.MD(m.t)?11:12
break
case 11:s=13
return A.a(n.mt(m),$async$eb)
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
return A.a(h.D(),$async$eb)
case 14:s=o.pop()
break
case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eb,r)},
kX(a){var s=this,r=A.JG(a,s.d++,s)
s.c.push(r)
r.b.a.aY(new A.y0(s,r))
return r},
mt(a){return this.x.kz(new A.y1(this,a),t.p6)},
cd(a){return this.vQ(a)},
vQ(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cd=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.bf(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.y("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bv(n,t.he),$async$cd)
case 5:s=3
break
case 4:o=A.C_(q.b.cd(m),new A.y2(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cd)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cd,r)},
v3(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aR(s,s.r,s.e,A.n(s).i("aR<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.aw||b===B.b_
o=A.C9(t.cj)
n=c===0?null:new A.vP(c,A.dE(null,null,t.N,t.fw))
n=new A.lm(this,r,a,b,d,new A.ll(q+"-outer",q,new A.j_(o),p),n)
s.j(0,r,n)
return n}}
A.y0.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.y1.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.x(d.t,"dedicatedCompatibilityCheck")||J.x(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.a(A.e4(),$async$$0)
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
return A.a(A.pc(),$async$$0)
case 9:case 8:j=a1
i=A.aN(t.cU)
s=J.x(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glB()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.hZ(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.a(new A.hy(n,"message",!1,t.d4).gG(0),$async$$0)
case 15:e=b.HH(a.bf(a1.data))
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
case 18:d=b.E(a1)
case 19:if(!d.k()){s=20
break}i.t(0,new A.a4(B.bg,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.B_(c),$async$$0)
case 23:if(a1)i.t(0,new A.a4(B.bh,c))
case 22:d=A.O(i,i.$ti.c)
q=new A.eh(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:218}
A.y2.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:219}
A.ki.prototype={}
A.of.prototype={
gmM(){return new A.hy(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.oL.prototype={
gmM(){return new A.di(new A.A_(this),t.k8)},
q(){}}
A.A_.prototype={
$1(a){var s=A.j([],t.kG),r=A.j([],t.dw)
r.push(A.bp(this.a.a,"connect",new A.zX(new A.A0(s,r,a)),!1,t.m))
a.r=new A.zY(r)},
$S:220}
A.A0.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bp(a,"message",new A.zZ(this.c),!1,t.m))},
$S:1}
A.zZ.prototype={
$1(a){this.a.tB(a)},
$S:1}
A.zX.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bN(r,A.a_(r).i("bN<1,L>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.zY.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].D()},
$S:2}
A.og.prototype={
oa(){var s=v.G
if(!("Worker" in s))return null
return new A.z_(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.z_.prototype={}
A.nf.prototype={
gfO(){return A.D(this.c)}}
A.x2.prototype={
gkc(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iH(a){var s,r=this,q=r.d=J.Hm(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gM()
return s},
mH(a,b){var s
if(this.iH(a))return
if(b==null)if(a instanceof A.eq)b="/"+a.a+"/"
else{s=J.a0(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.lr(b)},
f6(a){return this.mH(a,null)},
uY(){if(this.c===this.b.length)return
this.lr("no more input")},
uT(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.t(A.aZ("position must be greater than or equal to 0."))
else if(c>n.length)A.t(A.aZ("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.t(A.aZ("position plus length must not go beyond the end of the string."))
s=this.a
r=A.j([0],t.t)
q=n.length
p=new A.wM(s,r,new Uint32Array(q))
p.oA(new A.cj(n),s)
o=c+b
if(o>q)A.t(A.aZ("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.t(A.aZ("Start may not be negative, was "+c+"."))
throw A.b(new A.nf(n,a,new A.hz(p,c,o)))},
lr(a){this.uT("expected "+a+".",0,this.c)}}
A.hg.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.DT(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.DT(b,this))
s=this.a
s.$flags&2&&A.H(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.H(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.lg(b)
B.f.av(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.t8(q)
q=r.a
s=r.b++
q.$flags&2&&A.H(q)
q[s]=b},
lg(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
t8(a){var s=this.lg(null)
B.f.av(s,0,a,this.a)
this.a=s},
ah(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.ax(c,0,s,null,null))
s=this.a
if(d instanceof A.cw)B.f.ah(s,b,c,d.a,e)
else B.f.ah(s,b,c,d,e)},
av(a,b,c,d){return this.ah(0,b,c,d,0)}}
A.oq.prototype={}
A.cw.prototype={}
A.BV.prototype={}
A.hy.prototype={
a9(a,b,c,d){return A.bp(this.a,this.b,a,!1,this.$ti.c)},
bz(a,b,c){return this.a9(a,null,b,c)}}
A.jP.prototype={
D(){var s=this,r=A.b9(null,t.H)
if(s.b==null)return r
s.jC()
s.d=s.b=null
return r},
ib(a){var s,r=this
if(r.b==null)throw A.b(A.y("Subscription has been canceled."))
r.jC()
s=A.FW(new A.z3(a),t.m)
s=s==null?null:A.cY(s)
r.d=s
r.jA()},
bd(){if(this.b==null)return;++this.a
this.jC()},
b1(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jA()},
jA(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jC(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibm:1}
A.z2.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.z3.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dD.prototype
s.on=s.l
s=A.bB.prototype
s.oi=s.mP
s.oj=s.mQ
s.om=s.mS
s.ol=s.mR
s=A.b1.prototype
s.iJ=s.aA
s.kU=s.aG
s.kV=s.aQ
s=A.dg.prototype
s.oq=s.ld
s.or=s.lw
s.os=s.m2
s=A.K.prototype
s.kT=s.ah
s=A.aC.prototype
s.kS=s.tL
s=A.k7.prototype
s.ot=s.q
s=A.o.prototype
s.oh=s.dt
s=A.kT.prototype
s.kQ=s.hT
s=A.ff.prototype
s.kR=s.f1
s=A.h4.prototype
s.op=s.a0
s.oo=s.R})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"KW","If",70)
r(A,"L8","IJ",12)
q(A,"LH","Jr",19)
q(A,"LI","Js",19)
q(A,"LJ","Jt",19)
q(A,"LK","Lb",22)
r(A,"G0","Ly",0)
q(A,"LL","Lc",25)
s(A,"LM","Le",13)
r(A,"AW","Ld",0)
p(A,"LR",5,null,["$5"],["Ls"],222,0)
p(A,"LW",4,null,["$1$4","$4"],["AR",function(a,b,c,d){return A.AR(a,b,c,d,t.z)}],223,0)
p(A,"LY",5,null,["$2$5","$5"],["AS",function(a,b,c,d,e){var i=t.z
return A.AS(a,b,c,d,e,i,i)}],224,0)
p(A,"LX",6,null,["$3$6"],["CV"],225,0)
p(A,"LU",4,null,["$1$4","$4"],["FK",function(a,b,c,d){return A.FK(a,b,c,d,t.z)}],226,0)
p(A,"LV",4,null,["$2$4","$4"],["FL",function(a,b,c,d){var i=t.z
return A.FL(a,b,c,d,i,i)}],227,0)
p(A,"LT",4,null,["$3$4","$4"],["FJ",function(a,b,c,d){var i=t.z
return A.FJ(a,b,c,d,i,i,i)}],228,0)
p(A,"LP",5,null,["$5"],["Lr"],229,0)
p(A,"LZ",4,null,["$4"],["AT"],230,0)
p(A,"LO",5,null,["$5"],["Lq"],231,0)
p(A,"LN",5,null,["$5"],["Lp"],232,0)
p(A,"LS",4,null,["$4"],["Lt"],233,0)
p(A,"LQ",5,null,["$5"],["FI"],234,0)
var j
o(j=A.eM.prototype,"geH","bG",0)
o(j,"geI","bH",0)
n(A.eN.prototype,"gtU",0,1,null,["$2","$1"],["c6","aR"],62,0,0)
m(A.w.prototype,"giV","pi",13)
n(j=A.e0.prototype,"gty",0,1,null,["$2","$1"],["bx","tz"],62,0,0)
l(j,"goQ","aA",21)
m(j,"goM","aG",13)
o(j,"gp9","aQ",0)
o(j=A.dW.prototype,"geH","bG",0)
o(j,"geI","bH",0)
o(j=A.b1.prototype,"geH","bG",0)
o(j,"geI","bH",0)
o(A.hx.prototype,"glL","qK",0)
l(j=A.cy.prototype,"gqC","qD",21)
m(j,"gqG","qH",13)
o(j,"gqE","qF",0)
o(j=A.hA.prototype,"geH","bG",0)
o(j,"geI","bH",0)
l(j,"gj7","j8",21)
m(j,"gjb","jc",196)
o(j,"gj9","ja",0)
o(j=A.hI.prototype,"geH","bG",0)
o(j,"geI","bH",0)
l(j,"gj7","j8",21)
m(j,"gjb","jc",13)
o(j,"gj9","ja",0)
s(A,"CZ","KF",31)
q(A,"D_","KG",30)
s(A,"M3","In",70)
q(A,"Mc","KJ",39)
k(j=A.o7.prototype,"gtx","t",21)
o(j,"ge5","q",0)
q(A,"G4","Mw",30)
s(A,"G3","Mv",31)
q(A,"Md","Jl",6)
p(A,"MK",2,null,["$1$2","$2"],["Gh",function(a,b){return A.Gh(a,b,t.o)}],235,0)
m(j=A.lp.prototype,"guS","Y",31)
l(j,"gvA","ac",30)
l(j,"gvG","vH",22)
q(A,"M1","Hz",6)
o(j=A.j8.prototype,"gqI","qJ",0)
l(j,"gqL","qM",172)
q(A,"MW","IH",42)
q(A,"G2","HP",237)
q(A,"M8","HU",238)
q(A,"Ma","Ib",239)
q(A,"M7","Hu",240)
q(A,"M9","I_",241)
q(A,"B5","HT",6)
q(A,"Mn","DN",242)
r(A,"MG","LB",175)
r(A,"MF","KH",12)
o(A.oa.prototype,"gv7","jY",0)
r(A,"Of","KI",12)
l(A.mA.prototype,"gwk","wl",8)
q(A,"M5","BS",162)
l(j=A.ng.prototype,"gvp","vq",28)
l(j,"gvn","vo",134)
o(j,"gqz","jl",0)
q(A,"N2","Jd",42)
o(A.mM.prototype,"gjR","f1",0)
o(A.mu.prototype,"gjR","f1",0)
l(j=A.ff.prototype,"gqA","qB",28)
o(j,"gme","e_",3)
m(A.nW.prototype,"gq3","h5",61)
m(A.nV.prototype,"gq9","h7",61)
l(j=A.lk.prototype,"gvT","vU",8)
m(j,"gvR","vS",174)
n(j,"gxE",0,5,null,["$5"],["xF"],243,0,0)
n(j,"gxt",0,3,null,["$3"],["xu"],176,0,0)
n(j,"gxk",0,4,null,["$4"],["xl"],63,0,0)
n(j,"gxA",0,4,null,["$4"],["xB"],63,0,0)
n(j,"gxG",0,3,null,["$3"],["xH"],178,0,0)
m(j,"gxL","xM",64)
m(j,"gxq","xs",64)
l(j,"gxo","xp",35)
n(j,"gxI",0,4,null,["$4"],["xJ"],65,0,0)
n(j,"gxT",0,4,null,["$4"],["xU"],65,0,0)
m(j,"gxP","xQ",182)
m(j,"gxN","xO",14)
m(j,"gxy","xz",14)
m(j,"gxC","xD",14)
m(j,"gxR","xS",14)
m(j,"gxm","xn",14)
l(j,"giD","xv",35)
n(j,"gxw",0,3,null,["$3"],["xx"],184,0,0)
l(j,"giF","xK",35)
l(j,"guq","ur",19)
l(j,"guk","ul",185)
n(j,"gun",0,5,null,["$5"],["uo"],186,0,0)
n(j,"guw",0,4,null,["$4"],["ux"],37,0,0)
n(j,"guA",0,4,null,["$4"],["uB"],37,0,0)
n(j,"guy",0,4,null,["$4"],["uz"],37,0,0)
m(j,"guC","uD",66)
m(j,"guu","uv",66)
n(j,"gus",0,5,null,["$5"],["ut"],189,0,0)
m(j,"gui","uj",190)
m(j,"gug","uh",191)
n(j,"gue",0,3,null,["$3"],["uf"],192,0,0)
o(j=A.dA.prototype,"ge5","q",3)
o(j,"gv5","cF",3)
o(A.h2.prototype,"ge5","q",0)
o(A.ll.prototype,"gqb","qc",0)
l(A.ei.prototype,"gtM","mq",209)
l(A.hr.prototype,"gvr","vs",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.C7,J.m_,A.jh,J.fb,A.yS,A.ys,A.o,A.l1,A.ef,A.V,A.ae,A.K,A.wI,A.at,A.me,A.cV,A.lw,A.nu,A.n2,A.lt,A.nU,A.ix,A.nG,A.jt,A.hF,A.iQ,A.fl,A.hB,A.cq,A.xt,A.mt,A.is,A.k4,A.uu,A.bC,A.aR,A.mb,A.eq,A.hE,A.o0,A.ha,A.A8,A.o8,A.oX,A.cp,A.om,A.oU,A.k8,A.jC,A.o2,A.jU,A.oR,A.am,A.aa,A.b1,A.jI,A.nv,A.jS,A.eN,A.cc,A.w,A.o1,A.e0,A.oS,A.jE,A.nZ,A.oh,A.z0,A.e_,A.hx,A.cy,A.jO,A.Ax,A.Az,A.Ay,A.Av,A.Aw,A.Au,A.Ar,A.p2,A.Aq,A.Ap,A.At,A.As,A.p1,A.p3,A.p0,A.hQ,A.jB,A.on,A.zJ,A.dZ,A.ou,A.b2,A.ow,A.oW,A.ov,A.ne,A.l4,A.aC,A.o4,A.pJ,A.o3,A.l2,A.oM,A.eO,A.zF,A.A9,A.oZ,A.dj,A.aJ,A.ol,A.aW,A.aD,A.z1,A.mw,A.jo,A.oj,A.bj,A.lZ,A.S,A.W,A.oQ,A.jp,A.mV,A.a2,A.kf,A.xy,A.cd,A.lx,A.ms,A.zy,A.zz,A.lu,A.a3,A.lq,A.iF,A.es,A.hN,A.hD,A.iP,A.lp,A.mr,A.nH,A.ck,A.c2,A.rY,A.pW,A.iO,A.jj,A.uJ,A.ji,A.wH,A.qJ,A.qZ,A.yR,A.ee,A.kS,A.kT,A.pF,A.mk,A.fD,A.pE,A.j8,A.vK,A.A1,A.vB,A.vt,A.ja,A.hJ,A.vC,A.A2,A.eo,A.dx,A.lU,A.cH,A.dy,A.dP,A.vr,A.l9,A.c3,A.lL,A.mP,A.ah,A.v5,A.wp,A.eA,A.cL,A.mK,A.wF,A.mY,A.no,A.xg,A.jz,A.n9,A.aS,A.a1,A.pT,A.pU,A.pV,A.rw,A.ip,A.qh,A.io,A.dF,A.it,A.bi,A.uA,A.pH,A.fc,A.kY,A.nc,A.iv,A.rz,A.eX,A.zH,A.oT,A.hH,A.tx,A.cF,A.rG,A.ok,A.uo,A.nb,A.vL,A.ot,A.oa,A.hs,A.co,A.wx,A.xk,A.mA,A.ut,A.Aa,A.wn,A.d6,A.b_,A.cm,A.mJ,A.cN,A.wE,A.aX,A.dz,A.fy,A.en,A.c9,A.qs,A.c1,A.mX,A.v6,A.o9,A.hp,A.pt,A.bh,A.qu,A.ng,A.d3,A.ew,A.uQ,A.dH,A.mf,A.zQ,A.zO,A.vd,A.pG,A.iN,A.jf,A.vi,A.mI,A.vZ,A.b3,A.w7,A.bn,A.hc,A.hb,A.x4,A.bu,A.h9,A.cM,A.fR,A.je,A.cC,A.nw,A.x6,A.jd,A.js,A.xi,A.cP,A.cn,A.ey,A.bE,A.zV,A.ff,A.y3,A.hn,A.nT,A.xQ,A.jc,A.oy,A.r_,A.eJ,A.hu,A.xV,A.ho,A.nW,A.nV,A.qB,A.x3,A.my,A.mz,A.wM,A.n5,A.h4,A.rZ,A.bq,A.cx,A.cr,A.n8,A.cs,A.c8,A.kH,A.r1,A.e1,A.wO,A.eg,A.b4,A.kW,A.qH,A.oH,A.zP,A.bO,A.lh,A.de,A.jm,A.xL,A.xG,A.xN,A.xM,A.dT,A.df,A.lk,A.d8,A.eP,A.xH,A.pA,A.jT,A.z4,A.ox,A.op,A.zL,A.xB,A.ik,A.wz,A.ii,A.lg,A.lz,A.rX,A.d_,A.ll,A.j_,A.eh,A.vP,A.fX,A.k6,A.ht,A.lm,A.y_,A.ki,A.og,A.z_,A.x2,A.BV,A.jP])
q(J.m_,[J.m1,J.iH,J.aF,J.br,J.fB,J.ep,J.dB])
q(J.aF,[J.dD,J.B,A.fJ,A.j1])
q(J.dD,[J.mB,J.dS,J.bP])
r(J.m0,A.jh)
r(J.tu,J.B)
q(J.ep,[J.iG,J.m2])
q(A.o,[A.dV,A.J,A.cl,A.al,A.iu,A.eG,A.d9,A.bF,A.eS,A.o_,A.oP,A.hL,A.er,A.jg])
q(A.dV,[A.ec,A.kj])
r(A.jM,A.ec)
r(A.jJ,A.kj)
q(A.ef,[A.pY,A.pR,A.pX,A.to,A.xj,A.Bl,A.Bn,A.ya,A.y9,A.AC,A.AB,A.rV,A.rQ,A.z8,A.z7,A.zj,A.zm,A.wZ,A.x_,A.wX,A.yZ,A.yY,A.zU,A.zp,A.yV,A.zI,A.uK,A.zD,A.qG,A.yn,A.rR,A.Bp,A.Bw,A.Bx,A.B4,A.pM,A.pO,A.pQ,A.kV,A.pI,A.AE,A.pK,A.uO,A.Bc,A.vA,A.vw,A.vx,A.vy,A.vz,A.vu,A.vv,A.vJ,A.vF,A.vG,A.vD,A.vI,A.qE,A.qF,A.wr,A.wm,A.vN,A.BH,A.wQ,A.wR,A.rt,A.rs,A.ru,A.rr,A.rq,A.rp,A.ro,A.rk,A.rl,A.rm,A.uB,A.uD,A.uF,A.uH,A.uC,A.Bv,A.rC,A.rA,A.rD,A.rE,A.BB,A.tT,A.tU,A.tW,A.uh,A.tX,A.tY,A.tZ,A.u_,A.u0,A.u1,A.u2,A.u3,A.u4,A.u5,A.u7,A.u8,A.u9,A.ua,A.ub,A.uc,A.ud,A.tG,A.tI,A.tM,A.tz,A.ty,A.tK,A.tJ,A.tQ,A.tR,A.tS,A.tA,A.tC,A.tE,A.tO,A.tP,A.rH,A.rI,A.up,A.us,A.ur,A.uq,A.yK,A.yH,A.xr,A.xn,A.xp,A.xl,A.v0,A.uY,A.v_,A.wf,A.wh,A.wi,A.wj,A.wA,A.wD,A.qd,A.qg,A.qc,A.qf,A.qa,A.q9,A.q8,A.qe,A.qb,A.q3,A.q2,A.q7,A.q6,A.q4,A.q0,A.pu,A.pv,A.qw,A.qv,A.xf,A.x7,A.xd,A.x8,A.x9,A.xa,A.B1,A.B2,A.uX,A.uR,A.uS,A.uT,A.uU,A.uV,A.vf,A.vg,A.vo,A.vm,A.vl,A.vk,A.vn,A.w5,A.w_,A.w1,A.w3,A.w8,A.wd,A.x5,A.Be,A.BA,A.By,A.Bz,A.wt,A.ws,A.y4,A.xP,A.uy,A.uz,A.Bs,A.Bj,A.Bi,A.B8,A.xZ,A.xX,A.qC,A.qD,A.AU,A.t0,A.t_,A.t1,A.t3,A.t5,A.t2,A.tj,A.wS,A.r9,A.A5,A.Bt,A.BC,A.BD,A.pz,A.yT,A.yU,A.qk,A.ql,A.qp,A.qq,A.qr,A.rF,A.pD,A.pB,A.zs,A.zv,A.zw,A.tn,A.tl,A.zr,A.wL,A.xC,A.xD,A.xE,A.xF,A.vX,A.vY,A.vW,A.vV,A.vU,A.xR,A.rd,A.v7,A.rv,A.B0,A.qi,A.qj,A.qm,A.qn,A.qo,A.AL,A.yx,A.yC,A.yF,A.yv,A.A_,A.A0,A.zZ,A.zX,A.z2,A.z3])
q(A.pY,[A.yt,A.pS,A.qA,A.tv,A.Bm,A.AD,A.AV,A.rW,A.rP,A.z9,A.zk,A.zn,A.y6,A.zo,A.uv,A.uM,A.zG,A.ym,A.Aj,A.xz,A.Ai,A.Ah,A.rT,A.rS,A.pL,A.pN,A.pP,A.kU,A.v4,A.uP,A.vq,A.vE,A.vs,A.AK,A.wq,A.wl,A.vO,A.wo,A.wG,A.BI,A.AZ,A.rn,A.rJ,A.v1,A.wk,A.wB,A.wC,A.q5,A.pw,A.xT,A.B9,A.xW,A.t4,A.rc,A.zx,A.xS,A.yO,A.y2])
r(A.bN,A.jJ)
q(A.V,[A.ed,A.bB,A.dg,A.or])
q(A.ae,[A.dC,A.mN,A.dc,A.m3,A.nF,A.mW,A.oi,A.j9,A.iK,A.kM,A.bz,A.cU,A.nE,A.bl,A.l7])
q(A.K,[A.hh,A.n_,A.nO,A.hl,A.ei,A.hg])
r(A.cj,A.hh)
q(A.pX,[A.Br,A.vR,A.yb,A.yc,A.Ac,A.Ab,A.AA,A.ye,A.yf,A.yh,A.yi,A.yg,A.yd,A.rU,A.za,A.zf,A.ze,A.zc,A.zb,A.zi,A.zh,A.zg,A.zl,A.wY,A.x0,A.wW,A.A4,A.A3,A.y5,A.yr,A.yq,A.zM,A.zK,A.AF,A.AG,A.yX,A.yW,A.zT,A.zS,A.AQ,A.Am,A.Al,A.rj,A.AN,A.AO,A.uN,A.vp,A.vH,A.ry,A.uE,A.uG,A.rB,A.tV,A.u6,A.ui,A.uj,A.uk,A.ul,A.um,A.un,A.ue,A.uf,A.ug,A.tF,A.tH,A.tL,A.tB,A.tD,A.tN,A.yL,A.yI,A.yJ,A.xq,A.xo,A.xm,A.wg,A.rx,A.tk,A.rN,A.rM,A.wU,A.q_,A.q1,A.qt,A.qz,A.qy,A.qx,A.xc,A.xb,A.xe,A.w6,A.w0,A.w2,A.w4,A.w9,A.we,A.wc,A.wb,A.wa,A.xh,A.vj,A.ve,A.xs,A.wu,A.vc,A.uI,A.ti,A.t6,A.td,A.te,A.tf,A.tg,A.tb,A.tc,A.t7,A.t8,A.t9,A.ta,A.th,A.zq,A.ra,A.rb,A.r7,A.r6,A.r8,A.r3,A.r2,A.r4,A.r5,A.A6,A.A7,A.BE,A.qN,A.qK,A.qP,A.qR,A.qT,A.qM,A.qS,A.qX,A.qV,A.qU,A.qO,A.qQ,A.qW,A.qL,A.px,A.py,A.xI,A.pC,A.zt,A.zu,A.z5,A.tm,A.re,A.rf,A.v9,A.v8,A.yM,A.yQ,A.yN,A.yP,A.yw,A.yB,A.yE,A.yy,A.yD,A.yG,A.yz,A.yA,A.ri,A.rh,A.rg,A.y0,A.y1,A.zY])
q(A.J,[A.Z,A.el,A.T,A.ar,A.aM,A.eR,A.jW])
q(A.Z,[A.ct,A.X,A.bT,A.iM,A.os])
r(A.ek,A.cl)
r(A.iq,A.eG)
r(A.fp,A.d9)
q(A.hF,[A.oz,A.oA,A.oB])
q(A.oz,[A.a4,A.k1,A.k2,A.hG,A.oC])
r(A.eV,A.oA)
q(A.oB,[A.eW,A.oD])
r(A.ke,A.iQ)
r(A.cT,A.ke)
r(A.il,A.cT)
q(A.fl,[A.aV,A.iz])
q(A.cq,[A.im,A.k3])
r(A.du,A.im)
r(A.iD,A.to)
r(A.j6,A.dc)
q(A.xj,[A.wT,A.id])
q(A.bB,[A.iJ,A.iI,A.jV])
r(A.fI,A.fJ)
q(A.j1,[A.j0,A.fK])
q(A.fK,[A.jY,A.k_])
r(A.jZ,A.jY)
r(A.dK,A.jZ)
r(A.k0,A.k_)
r(A.bR,A.k0)
q(A.dK,[A.mm,A.mn])
q(A.bR,[A.mo,A.mp,A.mq,A.j2,A.j3,A.j4,A.ev])
r(A.k9,A.oi)
q(A.aa,[A.hK,A.jq,A.jN,A.di,A.jQ,A.jH,A.ib,A.hy])
r(A.b5,A.hK)
r(A.b0,A.b5)
q(A.b1,[A.dW,A.hA,A.hI])
r(A.eM,A.dW)
r(A.jD,A.jI)
q(A.eN,[A.aI,A.an])
q(A.e0,[A.cW,A.hM])
r(A.k5,A.nZ)
q(A.oh,[A.cb,A.hw])
r(A.jX,A.cW)
r(A.eT,A.jQ)
q(A.p0,[A.ob,A.oG])
q(A.dg,[A.dX,A.jK])
r(A.dh,A.k3)
q(A.ne,[A.k7,A.Ad,A.yj,A.oO])
r(A.zB,A.k7)
q(A.l4,[A.em,A.kQ,A.tw])
q(A.em,[A.kK,A.m9,A.nL])
q(A.aC,[A.oV,A.ic,A.kR,A.m6,A.m5,A.nM,A.jv,A.lR])
q(A.oV,[A.kL,A.ma])
r(A.yo,A.o4)
q(A.pJ,[A.yk,A.hq,A.o7,A.Ak])
r(A.y7,A.yk)
r(A.m4,A.iK)
r(A.zC,A.l2)
r(A.zE,A.zF)
r(A.p4,A.oZ)
r(A.An,A.p4)
q(A.bz,[A.d7,A.iB])
r(A.oe,A.kf)
r(A.h1,A.hN)
r(A.oJ,A.lR)
r(A.zW,A.rY)
r(A.oK,A.zW)
r(A.kF,A.pW)
r(A.jk,A.wH)
r(A.oc,A.kF)
r(A.li,A.oc)
r(A.od,A.uJ)
r(A.qY,A.od)
r(A.mQ,A.ee)
r(A.l_,A.kS)
r(A.ds,A.jq)
q(A.kT,[A.v3,A.wy])
r(A.jr,A.pF)
r(A.nd,A.jr)
r(A.ig,A.a3)
r(A.mD,A.j8)
q(A.c3,[A.l5,A.lc,A.jx,A.ft,A.np,A.kO])
q(A.mP,[A.lC,A.lD,A.lG,A.lE,A.lB,A.lP,A.lJ,A.lF,A.lN,A.lH,A.lv,A.na,A.mv,A.l0,A.lS,A.l3,A.lQ,A.mT,A.ml,A.mL,A.lf,A.le,A.lr,A.lV,A.kG,A.ly,A.mZ,A.nx,A.ny,A.nA,A.nC,A.nB,A.nz,A.nR,A.nS,A.nQ,A.kI,A.nP,A.nN,A.mH,A.l6,A.mU,A.lb,A.la,A.mR,A.kD,A.kE,A.ld,A.nm,A.ns,A.nh,A.ni,A.nk,A.nt,A.nl,A.nq])
q(A.ah,[A.lO,A.lM,A.fv,A.lK,A.fu,A.fs,A.h8,A.fL,A.ie,A.lT,A.fY,A.fZ,A.fH,A.fT,A.fm,A.fn,A.fA,A.fa,A.fr,A.h0,A.fk,A.fj,A.he,A.hm,A.fQ,A.fh,A.nn,A.nj,A.nr])
q(A.v5,[A.iV,A.iY,A.iW,A.iZ,A.iS,A.iT,A.iR,A.iX,A.iU])
q(A.z1,[A.aY,A.cB,A.dR,A.mC,A.ih,A.dt,A.d1,A.l8,A.ls,A.c4,A.iC,A.v2,A.dJ,A.e9,A.ca,A.kP,A.cQ,A.i7,A.fM,A.j7,A.jn,A.vh,A.fw,A.mg,A.dw,A.cv,A.iw,A.dN])
q(A.cL,[A.iL,A.j5,A.i8,A.i9])
r(A.ps,A.rw)
q(A.dF,[A.eI,A.eH,A.ex,A.fe,A.fO,A.fx,A.cO,A.fW,A.h_,A.eC,A.h5,A.fG,A.fi,A.ej,A.fV])
q(A.eC,[A.hi,A.fz])
r(A.m7,A.ot)
q(A.d6,[A.a9,A.c5,A.dr,A.cZ])
r(A.fg,A.o9)
r(A.y8,A.zO)
q(A.bu,[A.hf,A.eD,A.jl,A.c0,A.cG,A.cK,A.fN,A.fP,A.fo,A.ea])
q(A.ff,[A.mM,A.mu])
r(A.xO,A.pH)
r(A.ux,A.r_)
r(A.md,A.eJ)
q(A.ho,[A.jA,A.eK])
r(A.p_,A.nW)
r(A.xY,A.p_)
r(A.ts,A.x3)
q(A.ts,[A.vM,A.xA,A.xU])
r(A.lI,A.n5)
q(A.h4,[A.hz,A.n7])
r(A.h3,A.n8)
r(A.da,A.n7)
r(A.h6,A.eg)
r(A.kX,A.b4)
q(A.kX,[A.lW,A.dA,A.h2])
q(A.kW,[A.oo,A.oN])
r(A.oE,A.qH)
r(A.oF,A.oE)
r(A.mS,A.oF)
r(A.oI,A.oH)
r(A.c7,A.oI)
q(A.b2,[A.eL,A.b6])
r(A.hk,A.wO)
q(A.b6,[A.jR,A.jL,A.hv,A.hP])
r(A.vT,A.wz)
r(A.qI,A.lg)
r(A.dq,A.fX)
r(A.hr,A.vT)
q(A.ki,[A.of,A.oL])
r(A.nf,A.h3)
r(A.oq,A.hg)
r(A.cw,A.oq)
s(A.hh,A.nG)
s(A.kj,A.K)
s(A.jY,A.K)
s(A.jZ,A.ix)
s(A.k_,A.K)
s(A.k0,A.ix)
s(A.cW,A.jE)
s(A.hM,A.oS)
s(A.ke,A.oW)
s(A.p4,A.ne)
s(A.oc,A.qJ)
s(A.od,A.qZ)
s(A.ot,A.pU)
s(A.o9,A.pV)
s(A.p_,A.nV)
s(A.oE,A.K)
s(A.oF,A.mr)
s(A.oH,A.nH)
s(A.oI,A.V)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ab:"double",aU:"num",l:"String",P:"bool",W:"Null",p:"List",k:"Object",I:"Map",L:"JSObject"},mangledNames:{},types:["~()","~(L)","W()","A<~>()","A<~>(bE)","A<W>(bE)","l(l)","fL(~)","~(i)","W(k,aG)","P(l)","S<l,@>(@,@)","i()","~(k,aG)","i(bo,i)","A<b3>()","A<W>()","P(@)","~(p<i>)","~(~())","W(L)","~(k?)","P(k?)","A<~>(jT)","W(k)","~(@)","L()","~(l,l)","~(a1)","A<~>(~)","i(k?)","P(k?,k?)","0&()","P(bq)","k?(k?)","i(bo)","~(k?,k?)","~(d8,i,i,i)","W(@)","@(@)","k?(I<l,k?>)","A<i>()","ab(i)","A<cH>(l)","i(cH)","~(@,@)","@()","P(dz)","P(bi)","~(l,@)","A<p<l>>()","@(l)","~(db)","l(eu)","A<W>(r0)","A<@>()","P(c9)","S<l,k?>(@,@)","P()","l(I<l,k?>)","P(aX)","A<k?>(nX,hn)","~(k[aG?])","i(b4,i,i,i)","i(b4,i)","i(bo,i,i,br)","~(d8,i)","A<bm<~>>()","~(~)","A<eJ>()","i(@,@)","i(i,cF)","i(i,i)","~(p<ck>)","A<aa<p<i>>>()","l?(I<l,k?>)","~(aS)","i(i)","A<I<l,k?>?>()","fY(I<l,k?>?)","A<p<I<l,k?>?>>()","fZ(p<I<l,k?>?>)","i(dP)","A<p<k?>>()","aD(i)","A<aU?>()","A<l>()","fQ(i)","fh(i)","fk(p<bh>)","fj(bh?)","fv(p<bi>)","fu(i)","fs(i)","h8(P)","fH(p<l>)","A<co>()","fT(co)","A<p<cN>>()","h0(p<cN>)","A<W>(~)","he(~)","P(hH)","~(I<l,k?>?)","~(p<I<l,k?>>)","~(i,@)","aa<p<i>>()","~(hc)","~(p<bh>)","P(cB)","P(cF)","l(cF)","P(dR)","cM(@)","A<@>(bE)","p<eA>(k?)","i(c9,c9)","~(l,k?)","l(cm)","l()","P(cm)","aX()","dz()","fy()","en()","c9()","P(aY)","l(@)","A<I<l,k?>?>(l)","P(i)","l(i,i)","p<cL>(k?)","bh()","0&(l,i?)","~(cC)","~(l,l?)","A<bn>(bn)","bn(bn)","bn(k)","W(bP,bP)","dH/(k?)","A<k?>(k?)","I<l,k?>(p<k?>)","A<i>(bE)","k?(~)","@(@,l)","l(i[i])","cP()","cn()","ey()","P(+(l,k))","p<I<l,k?>>(co)","A<P>(l)","A<~>(l)","hu()","c1<k?>(@)","P(c1<k?>)","i(+(l,k),+(l,k))","w<@>?()","~(c3)","l(l?)","l?()","bh(I<l,k?>)","W(~())","k(cx)","k(bq)","i(bq,bq)","p<cx>(S<k,p<bq>>)","da()","l(k?)","~(i,l,i)","~(Cj,p<Ck>)","~(ja)","~(N,av,N,~())","~(br,i)","aW()","i(b4,i,i)","i(+(l,k?),+(l,k?))","i(b4?,i,i)","I<l,k?>(c7)","P(l,l)","eO<@,@>(bA<@>)","i(bo,br)","i(l)","i(bo,i,i)","i(i())","~(~(i,l,i),i,i,i,br)","W(l,l[k?])","k?(wP)","i(d8,i,i,i,i)","i(i(i),i)","i(Co,i)","i(Co,i,i)","~(dI<p<i>>)","W(@,aG)","L(B<k?>)","~(@,aG)","fD()","L(L?)","~(eb)","A<~>(i,cS)","A<~>(i)","cS()","A<L>(l)","W(d_)","A<W>(L)","L(k)","W(k?,aG)","l?(k?)","~(eg)","L(L)","A<L>()","S<l,dx>(l,h9)","l(l,l)","A<bm<cs>>()","~(cs)","P(ht)","bi()","A<eh>()","0&(k?,aG)","~(dI<L>)","A<bi>(bE)","~(N?,av?,N,k,aG)","0^(N?,av?,N,0^())<k?>","0^(N?,av?,N,0^(1^),1^)<k?,k?>","0^(N?,av?,N,0^(1^,2^),1^,2^)<k?,k?,k?>","0^()(N,av,N,0^())<k?>","0^(1^)(N,av,N,0^(1^))<k?,k?>","0^(1^,2^)(N,av,N,0^(1^,2^))<k?,k?,k?>","am?(N,av,N,k,aG?)","~(N?,av?,N,~())","db(N,av,N,aD,~())","db(N,av,N,aD,~(db))","~(N,av,N,l)","N(N?,av?,N,jB?,I<k?,k?>?)","0^(0^,0^)<aU>","A<dP>(l)","fm(i)","fn(p<k?>)","fA(p<l>)","fa(aU?)","fr(l)","bi(I<l,k?>)","bo?(b4,i,i,i,i)","i(cx)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a4&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.k1&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.k2&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hG&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.oC&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eV&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eW&&A.Gl(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.oD&&A.Gl(a,b.a)}}
A.Ka(v.typeUniverse,JSON.parse('{"bP":"dD","mB":"dD","dS":"dD","No":"fJ","B":{"p":["1"],"aF":[],"J":["1"],"L":[],"o":["1"],"ba":["1"]},"m1":{"P":[],"ak":[]},"iH":{"W":[],"ak":[]},"aF":{"L":[]},"dD":{"aF":[],"L":[]},"m0":{"jh":[]},"tu":{"B":["1"],"p":["1"],"aF":[],"J":["1"],"L":[],"o":["1"],"ba":["1"]},"ep":{"ab":[],"aU":[],"aw":["aU"]},"iG":{"ab":[],"i":[],"aU":[],"aw":["aU"],"ak":[]},"m2":{"ab":[],"aU":[],"aw":["aU"],"ak":[]},"dB":{"l":[],"aw":["l"],"ba":["@"],"ak":[]},"dV":{"o":["2"]},"ec":{"dV":["1","2"],"o":["2"],"o.E":"2"},"jM":{"ec":["1","2"],"dV":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"jJ":{"K":["2"],"p":["2"],"dV":["1","2"],"J":["2"],"o":["2"]},"bN":{"jJ":["1","2"],"K":["2"],"p":["2"],"dV":["1","2"],"J":["2"],"o":["2"],"K.E":"2","o.E":"2"},"ed":{"V":["3","4"],"I":["3","4"],"V.V":"4","V.K":"3"},"dC":{"ae":[]},"mN":{"ae":[]},"cj":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"J":{"o":["1"]},"Z":{"J":["1"],"o":["1"]},"ct":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"cl":{"o":["2"],"o.E":"2"},"ek":{"cl":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"X":{"Z":["2"],"J":["2"],"o":["2"],"Z.E":"2","o.E":"2"},"al":{"o":["1"],"o.E":"1"},"iu":{"o":["2"],"o.E":"2"},"eG":{"o":["1"],"o.E":"1"},"iq":{"eG":["1"],"J":["1"],"o":["1"],"o.E":"1"},"d9":{"o":["1"],"o.E":"1"},"fp":{"d9":["1"],"J":["1"],"o":["1"],"o.E":"1"},"el":{"J":["1"],"o":["1"],"o.E":"1"},"bF":{"o":["1"],"o.E":"1"},"hh":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"bT":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"il":{"cT":["1","2"],"I":["1","2"]},"fl":{"I":["1","2"]},"aV":{"fl":["1","2"],"I":["1","2"]},"eS":{"o":["1"],"o.E":"1"},"iz":{"fl":["1","2"],"I":["1","2"]},"im":{"cq":["1"],"eE":["1"],"J":["1"],"o":["1"]},"du":{"cq":["1"],"eE":["1"],"J":["1"],"o":["1"]},"j6":{"dc":[],"ae":[]},"m3":{"ae":[]},"nF":{"ae":[]},"mt":{"G":[]},"k4":{"aG":[]},"mW":{"ae":[]},"bB":{"V":["1","2"],"I":["1","2"],"V.V":"2","V.K":"1"},"T":{"J":["1"],"o":["1"],"o.E":"1"},"ar":{"J":["1"],"o":["1"],"o.E":"1"},"aM":{"J":["S<1,2>"],"o":["S<1,2>"],"o.E":"S<1,2>"},"iJ":{"bB":["1","2"],"V":["1","2"],"I":["1","2"],"V.V":"2","V.K":"1"},"iI":{"bB":["1","2"],"V":["1","2"],"I":["1","2"],"V.V":"2","V.K":"1"},"hE":{"mO":[],"eu":[]},"o_":{"o":["mO"],"o.E":"mO"},"ha":{"eu":[]},"oP":{"o":["eu"],"o.E":"eu"},"fI":{"aF":[],"L":[],"eb":[],"ak":[]},"fJ":{"aF":[],"L":[],"eb":[],"ak":[]},"j1":{"aF":[],"L":[]},"oX":{"eb":[]},"j0":{"aF":[],"BQ":[],"L":[],"ak":[]},"fK":{"bQ":["1"],"aF":[],"L":[],"ba":["1"]},"dK":{"K":["ab"],"p":["ab"],"bQ":["ab"],"aF":[],"J":["ab"],"L":[],"ba":["ab"],"o":["ab"]},"bR":{"K":["i"],"p":["i"],"bQ":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"]},"mm":{"dK":[],"rK":[],"K":["ab"],"p":["ab"],"bQ":["ab"],"aF":[],"J":["ab"],"L":[],"ba":["ab"],"o":["ab"],"ak":[],"K.E":"ab"},"mn":{"dK":[],"rL":[],"K":["ab"],"p":["ab"],"bQ":["ab"],"aF":[],"J":["ab"],"L":[],"ba":["ab"],"o":["ab"],"ak":[],"K.E":"ab"},"mo":{"bR":[],"tp":[],"K":["i"],"p":["i"],"bQ":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"ak":[],"K.E":"i"},"mp":{"bR":[],"tq":[],"K":["i"],"p":["i"],"bQ":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"ak":[],"K.E":"i"},"mq":{"bR":[],"tr":[],"K":["i"],"p":["i"],"bQ":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"ak":[],"K.E":"i"},"j2":{"bR":[],"xv":[],"K":["i"],"p":["i"],"bQ":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"ak":[],"K.E":"i"},"j3":{"bR":[],"xw":[],"K":["i"],"p":["i"],"bQ":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"ak":[],"K.E":"i"},"j4":{"bR":[],"xx":[],"K":["i"],"p":["i"],"bQ":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"ak":[],"K.E":"i"},"ev":{"bR":[],"cS":[],"K":["i"],"p":["i"],"bQ":["i"],"aF":[],"J":["i"],"L":[],"ba":["i"],"o":["i"],"ak":[],"K.E":"i"},"oi":{"ae":[]},"k9":{"dc":[],"ae":[]},"am":{"ae":[]},"w":{"A":["1"]},"dI":{"bA":["1"]},"k8":{"db":[]},"jC":{"ij":["1"]},"hL":{"o":["1"],"o.E":"1"},"b0":{"b5":["1"],"hK":["1"],"aa":["1"],"aa.T":"1"},"eM":{"dW":["1"],"b1":["1"],"bm":["1"],"b1.T":"1"},"jI":{"bA":["1"]},"jD":{"jI":["1"],"bA":["1"]},"nv":{"G":[]},"j9":{"ae":[]},"eN":{"ij":["1"]},"aI":{"eN":["1"],"ij":["1"]},"an":{"eN":["1"],"ij":["1"]},"jq":{"aa":["1"]},"e0":{"bA":["1"]},"cW":{"jE":["1"],"e0":["1"],"bA":["1"]},"hM":{"e0":["1"],"bA":["1"]},"b5":{"hK":["1"],"aa":["1"],"aa.T":"1"},"dW":{"b1":["1"],"bm":["1"],"b1.T":"1"},"k5":{"nZ":["1"]},"b1":{"bm":["1"],"b1.T":"1"},"hK":{"aa":["1"]},"hx":{"bm":["1"]},"jN":{"aa":["1"],"aa.T":"1"},"di":{"aa":["1"],"aa.T":"1"},"jX":{"cW":["1"],"jE":["1"],"e0":["1"],"dI":["1"],"bA":["1"]},"jQ":{"aa":["2"]},"hA":{"b1":["2"],"bm":["2"],"b1.T":"2"},"eT":{"jQ":["1","2"],"aa":["2"],"aa.T":"2"},"jO":{"bA":["1"]},"hI":{"b1":["2"],"bm":["2"],"b1.T":"2"},"jH":{"aa":["2"],"aa.T":"2"},"p0":{"N":[]},"ob":{"N":[]},"oG":{"N":[]},"hQ":{"av":[]},"dg":{"V":["1","2"],"I":["1","2"],"V.V":"2","V.K":"1"},"dX":{"dg":["1","2"],"V":["1","2"],"I":["1","2"],"V.V":"2","V.K":"1"},"jK":{"dg":["1","2"],"V":["1","2"],"I":["1","2"],"V.V":"2","V.K":"1"},"eR":{"J":["1"],"o":["1"],"o.E":"1"},"jV":{"bB":["1","2"],"V":["1","2"],"I":["1","2"],"V.V":"2","V.K":"1"},"dh":{"cq":["1"],"eE":["1"],"J":["1"],"o":["1"]},"er":{"o":["1"],"o.E":"1"},"K":{"p":["1"],"J":["1"],"o":["1"]},"V":{"I":["1","2"]},"jW":{"J":["2"],"o":["2"],"o.E":"2"},"iQ":{"I":["1","2"]},"cT":{"I":["1","2"]},"iM":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"cq":{"eE":["1"],"J":["1"],"o":["1"]},"k3":{"cq":["1"],"eE":["1"],"J":["1"],"o":["1"]},"eO":{"bA":["1"]},"or":{"V":["l","@"],"I":["l","@"],"V.V":"@","V.K":"l"},"os":{"Z":["l"],"J":["l"],"o":["l"],"Z.E":"l","o.E":"l"},"kK":{"em":[]},"oV":{"aC":["l","p<i>"]},"kL":{"aC":["l","p<i>"],"aC.T":"p<i>"},"ic":{"aC":["p<i>","l"],"aC.T":"l"},"kR":{"aC":["l","p<i>"],"aC.T":"p<i>"},"iK":{"ae":[]},"m4":{"ae":[]},"m6":{"aC":["k?","l"],"aC.T":"l"},"m5":{"aC":["l","k?"],"aC.T":"k?"},"m9":{"em":[]},"ma":{"aC":["l","p<i>"],"aC.T":"p<i>"},"nL":{"em":[]},"nM":{"aC":["l","p<i>"],"aC.T":"p<i>"},"jv":{"aC":["p<i>","l"],"aC.T":"l"},"Du":{"aw":["Du"]},"aW":{"aw":["aW"]},"ab":{"aU":[],"aw":["aU"]},"aD":{"aw":["aD"]},"i":{"aU":[],"aw":["aU"]},"p":{"J":["1"],"o":["1"]},"aU":{"aw":["aU"]},"mO":{"eu":[]},"eE":{"J":["1"],"o":["1"]},"l":{"aw":["l"]},"aJ":{"aw":["Du"]},"kM":{"ae":[]},"dc":{"ae":[]},"bz":{"ae":[]},"d7":{"ae":[]},"iB":{"d7":[],"ae":[]},"cU":{"ae":[]},"nE":{"cU":[],"ae":[]},"bl":{"ae":[]},"l7":{"ae":[]},"mw":{"ae":[]},"jo":{"ae":[]},"oj":{"G":[]},"bj":{"G":[]},"lZ":{"cU":[],"G":[],"ae":[]},"oQ":{"aG":[]},"jg":{"o":["i"],"o.E":"i"},"kf":{"nI":[]},"cd":{"nI":[]},"oe":{"nI":[]},"ms":{"G":[]},"tr":{"p":["i"],"J":["i"],"o":["i"]},"cS":{"p":["i"],"J":["i"],"o":["i"]},"xx":{"p":["i"],"J":["i"],"o":["i"]},"tp":{"p":["i"],"J":["i"],"o":["i"]},"xv":{"p":["i"],"J":["i"],"o":["i"]},"tq":{"p":["i"],"J":["i"],"o":["i"]},"xw":{"p":["i"],"J":["i"],"o":["i"]},"rK":{"p":["ab"],"J":["ab"],"o":["ab"]},"rL":{"p":["ab"],"J":["ab"],"o":["ab"]},"a3":{"I":["2","3"]},"h1":{"hN":["1","eE<1>"],"hN.E":"1"},"lR":{"aC":["p<i>","ck"]},"oJ":{"aC":["p<i>","ck"],"aC.T":"ck"},"jj":{"G":[]},"n_":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"mQ":{"G":[]},"kS":{"BR":[]},"l_":{"BR":[]},"ds":{"aa":["p<i>"],"aa.T":"p<i>"},"ee":{"G":[]},"nd":{"jr":[]},"ig":{"a3":["l","l","1"],"I":["l","1"],"a3.V":"1","a3.K":"l","a3.C":"l"},"j8":{"Ct":[]},"mD":{"Ct":[]},"dy":{"G":[]},"lO":{"ah":[]},"lM":{"ah":[]},"fv":{"ah":[]},"lK":{"ah":[]},"fu":{"ah":[]},"fs":{"ah":[]},"h8":{"ah":[]},"fL":{"ah":[]},"ie":{"ah":[]},"lT":{"ah":[]},"fY":{"ah":[]},"fZ":{"ah":[]},"fH":{"ah":[]},"fT":{"ah":[]},"fm":{"ah":[]},"fn":{"ah":[]},"fA":{"ah":[]},"fa":{"ah":[]},"fr":{"ah":[]},"h0":{"ah":[]},"fk":{"ah":[]},"fj":{"ah":[]},"he":{"ah":[]},"hm":{"ah":[]},"fQ":{"ah":[]},"fh":{"ah":[]},"nn":{"ah":[]},"nj":{"ah":[]},"nr":{"ah":[]},"l5":{"c3":[]},"lc":{"c3":[]},"jx":{"c3":[]},"ft":{"c3":[]},"iL":{"cL":[]},"j5":{"cL":[]},"i8":{"cL":[]},"i9":{"cL":[]},"np":{"c3":[]},"kO":{"c3":[]},"jz":{"G":[]},"ip":{"r0":[]},"dF":{"G":[]},"eI":{"G":[]},"eH":{"G":[]},"ex":{"G":[]},"fe":{"G":[]},"fO":{"G":[]},"fx":{"G":[]},"cO":{"G":[]},"fW":{"G":[]},"h_":{"G":[]},"eC":{"G":[]},"hi":{"G":[]},"fz":{"G":[]},"h5":{"G":[]},"fG":{"G":[]},"fi":{"G":[]},"ej":{"G":[]},"fV":{"G":[]},"fc":{"G":[]},"kY":{"G":[]},"eX":{"G":[]},"a9":{"d6":[]},"c5":{"d6":[]},"dr":{"d6":[]},"cZ":{"d6":[]},"hp":{"G":[]},"d3":{"G":[]},"bu":{"G":[]},"hf":{"G":[]},"eD":{"G":[]},"jl":{"G":[]},"c0":{"G":[]},"cG":{"G":[]},"cK":{"G":[]},"fN":{"G":[]},"fP":{"G":[]},"fo":{"G":[]},"ea":{"G":[]},"jc":{"G":[]},"oy":{"Ea":[]},"hu":{"nX":[]},"md":{"eJ":[]},"jA":{"ho":[]},"eK":{"ho":[]},"mz":{"G":[]},"lI":{"cr":[],"aw":["cr"]},"hz":{"da":[],"aw":["n6"]},"cr":{"aw":["cr"]},"n5":{"cr":[],"aw":["cr"]},"n6":{"aw":["n6"]},"n7":{"aw":["n6"]},"n8":{"G":[]},"h3":{"bj":[],"G":[]},"h4":{"aw":["n6"]},"da":{"aw":["n6"]},"c8":{"G":[]},"wP":{"p":["k?"],"J":["k?"],"o":["k?"]},"nO":{"K":["k?"],"wP":[],"p":["k?"],"J":["k?"],"o":["k?"],"K.E":"k?"},"h6":{"eg":[]},"lW":{"b4":[]},"oo":{"jw":[],"bo":[]},"c7":{"V":["l","@"],"I":["l","@"],"V.V":"@","V.K":"l"},"mS":{"K":["c7"],"p":["c7"],"J":["c7"],"o":["c7"],"K.E":"c7"},"de":{"G":[]},"kX":{"b4":[]},"kW":{"jw":[],"bo":[]},"eL":{"b2":["eL"],"b2.E":"eL"},"df":{"Ck":[]},"dT":{"Cj":[]},"hl":{"K":["df"],"p":["df"],"J":["df"],"o":["df"],"K.E":"df"},"ib":{"aa":["1"],"aa.T":"1"},"dA":{"b4":[]},"b6":{"b2":["b6"]},"op":{"jw":[],"bo":[]},"jR":{"b6":[],"b2":["b6"],"b2.E":"b6"},"jL":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hv":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hP":{"b6":[],"b2":["b6"],"b2.E":"b6"},"h2":{"b4":[]},"oN":{"jw":[],"bo":[]},"ii":{"G":[]},"ei":{"K":["k?"],"p":["k?"],"J":["k?"],"o":["k?"],"K.E":"k?"},"fX":{"G":[]},"dq":{"G":[]},"hr":{"DC":[]},"of":{"ki":["L"]},"oL":{"ki":["L"]},"nf":{"bj":[],"G":[]},"cw":{"hg":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"hg":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"oq":{"hg":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"]},"hy":{"aa":["1"],"aa.T":"1"},"jP":{"bm":["1"]}}'))
A.K9(v.typeUniverse,JSON.parse('{"ix":1,"nG":1,"hh":1,"kj":2,"im":1,"fK":1,"bA":1,"jq":1,"oS":1,"oh":1,"oW":2,"iQ":2,"k3":1,"ke":2,"l2":1,"l4":2,"k7":1,"mr":1,"nH":2,"mP":1,"ff":1,"Ht":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("Ht<k?>"),bG:s("e9"),om:s("ib<B<k?>>"),hw:s("cC"),lo:s("eb"),fW:s("BQ"),jA:s("ie"),fo:s("ig<l>"),iv:s("a1"),eg:s("DC"),dF:s("BR()"),E:s("cj"),bU:s("c1<k?>"),fw:s("eg"),bP:s("aw<@>"),p6:s("eh"),br:s("ij<L>"),n8:s("bh"),M:s("du<l>"),lp:s("lm"),O:s("J<@>"),C:s("ae"),fq:s("c3"),mA:s("G"),eZ:s("lz"),d9:s("aX"),A:s("bi"),k4:s("iv"),f6:s("cF"),pk:s("rK"),kI:s("rL"),Y:s("bj"),gY:s("Nk"),nW:s("A<L>"),fr:s("A<dH>"),mj:s("A<W>"),g7:s("A<@>"),fP:s("A<d_?>"),n1:s("A<k?>(nX,hn)"),jN:s("A<hk?>"),co:s("dx"),w:s("cH"),cF:s("dA"),m6:s("tp"),bW:s("tq"),jx:s("tr"),nZ:s("iF<@>"),e7:s("o<@>"),gi:s("B<a1>"),aw:s("B<c1<@>>"),oS:s("B<l9>"),i5:s("B<ck>"),mK:s("B<aX>"),kB:s("B<lL>"),iw:s("B<A<~>>"),mr:s("B<dz>"),kG:s("B<L>"),bi:s("B<p<I<l,k?>>>"),h2:s("B<p<k>>"),ae:s("B<p<eA>>"),dO:s("B<p<k?>>"),ic:s("B<I<l,k>>"),d:s("B<I<l,k?>>"),e8:s("B<mk>"),i7:s("B<ew>"),hf:s("B<k>"),ox:s("B<ey>"),fi:s("B<cm>"),my:s("B<cn>"),k:s("B<d6>"),eK:s("B<cL>"),k1:s("B<fR>"),g2:s("B<je>"),bo:s("B<jf>"),cM:s("B<eA>"),gc:s("B<mK>"),eb:s("B<aS>"),fU:s("B<+controller,sync(dI<cs>,P)>"),lw:s("B<+controller,sync(dI<~>,P)>"),kC:s("B<+(dN,l)>"),jO:s("B<+(l,I<l,k?>)>"),l5:s("B<+(l,k)>"),fj:s("B<+(l,aX?)>"),iE:s("B<+(l,k?)>"),aY:s("B<+(hs,k?,k?,aG?)>"),g1:s("B<cM>"),cP:s("B<mY>"),kj:s("B<cN>"),lE:s("B<h6>"),c0:s("B<c9>"),dw:s("B<bm<@>>"),s:s("B<l>"),en:s("B<hb>"),bs:s("B<cS>"),fC:s("B<b_>"),az:s("B<hr>"),i4:s("B<hs>"),fV:s("B<ht>"),pg:s("B<bq>"),dg:s("B<cx>"),p8:s("B<ox>"),mc:s("B<hH>"),gy:s("B<hJ>"),gk:s("B<ab>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<am?>"),eU:s("B<I<l,k?>?>"),c:s("B<k?>"),mf:s("B<l?>"),iy:s("ba<@>"),T:s("iH"),m:s("L"),bJ:s("br"),g:s("bP"),dX:s("bQ<@>"),aq:s("aF"),fZ:s("m7"),kk:s("er<eL>"),p3:s("er<b6>"),hI:s("es<@>"),ba:s("p<bh>"),ck:s("p<bi>"),ip:s("p<L>"),ew:s("p<I<l,k>>"),J:s("p<I<l,k?>>"),eT:s("p<ew>"),hg:s("p<ey>"),a6:s("p<cn>"),jX:s("p<je>"),kR:s("p<cM>"),fE:s("p<cN>"),i:s("p<l>"),bR:s("p<hb>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<I<l,k?>?>"),kS:s("p<k?>"),jD:s("iN"),ia:s("S<l,dx>"),af:s("S<l,l>"),I:s("S<l,@>"),eB:s("S<l,k?>"),a3:s("iP<@,@>"),cy:s("I<l,cP>"),dV:s("I<l,i>"),f:s("I<@,@>"),G:s("I<l,k?>"),d2:s("I<k?,k?>"),iZ:s("X<l,@>"),r:s("dH"),a:s("fI"),dQ:s("dK"),aj:s("bR"),Z:s("ev"),P:s("W"),K:s("k"),k5:s("cm"),dZ:s("cn"),i0:s("co"),jS:s("d6"),ot:s("mI"),gq:s("fR"),e:s("b3"),b0:s("d7"),lZ:s("Nq"),oZ:s("aS"),aK:s("+()"),ja:s("+(L,ik)"),hP:s("+(I<l,cP>,I<l,I<l,k?>>)"),cU:s("+(dN,l)"),mk:s("+(P,L)"),kO:s("+basicSupport,supportsReadWriteUnsafe(P,P)"),mt:s("+(L?,L)"),po:s("+(k?,i)"),g0:s("+(I<l,k?>?,cP?,cn?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mO"),Q:s("cM"),V:s("ah"),hF:s("bT<l>"),cu:s("h1<@>"),aJ:s("eE<l>"),g_:s("h2"),hq:s("cr"),ol:s("da"),gE:s("n9"),l:s("aG"),nv:s("nb"),h3:s("h9"),ha:s("bm<cs>"),dz:s("bm<@>"),ey:s("bm<~>"),bv:s("nc"),ku:s("aa<p<i>>"),lI:s("dP"),hL:s("jr"),N:s("l"),f_:s("hb"),k6:s("js"),o8:s("Ct"),n6:s("ca"),mv:s("bn"),nw:s("cP"),em:s("hc"),hU:s("db"),q:s("nw"),dH:s("ak"),do:s("dc"),hM:s("xv"),mC:s("xw"),oR:s("cw"),nn:s("xx"),p:s("cS"),cx:s("dS"),ph:s("cT<l,l>"),eo:s("cU"),jJ:s("nI"),e6:s("b4"),j2:s("jw"),n:s("hk"),fA:s("b_"),gx:s("al<cB>"),mz:s("al<aY>"),mE:s("al<dR>"),v:s("bF<l>"),u:s("eJ"),bp:s("eK"),be:s("nX"),ec:s("ho"),iq:s("aI<cS>"),jk:s("aI<@>"),ho:s("aI<i>"),h:s("aI<~>"),oW:s("eO<@,@>"),R:s("eP<L>"),d4:s("hy<L>"),mS:s("ok"),nI:s("w<d_>"),a7:s("w<L>"),hl:s("w<0&>"),os:s("w<l>"),jz:s("w<cS>"),g5:s("w<P>"),_:s("w<@>"),hy:s("w<i>"),jQ:s("w<i?>"),D:s("w<~>"),nf:s("bq"),mp:s("dX<k?,k?>"),mB:s("hD"),k8:s("di<L>"),fb:s("di<p<i>>"),mI:s("oM<ck>"),jy:s("e1<cs,~()>"),ag:s("e1<~,P()>"),lU:s("e1<~,~()>"),hT:s("cy<L>"),lj:s("cy<p<i>>"),aP:s("an<d_>"),h1:s("an<L>"),ex:s("an<P>"),F:s("an<~>"),g8:s("oT"),y:s("P"),W:s("ab"),z:s("@"),mq:s("@(k)"),ng:s("@(k,aG)"),S:s("i"),ma:s("bh?"),gK:s("A<W>?"),b3:s("d_?"),B:s("L?"),bE:s("p<c1<@>>?"),lH:s("p<@>?"),b:s("I<l,k?>?"),nh:s("dH?"),X:s("k?"),ad:s("Ea?"),dY:s("cn?"),lY:s("jd?"),jB:s("cM?"),x:s("l?"),f8:s("cP?"),a_:s("cw?"),he:s("hk?"),dd:s("bq?"),o9:s("P?"),dA:s("ab?"),U:s("i?"),jh:s("aU?"),o:s("aU"),H:s("~"),cj:s("~()"),i6:s("~(k)"),b9:s("~(k,aG)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ch=J.m_.prototype
B.b=J.B.prototype
B.c=J.iG.prototype
B.x=J.ep.prototype
B.a=J.dB.prototype
B.ci=J.bP.prototype
B.cj=J.aF.prototype
B.az=A.j0.prototype
B.cX=A.j2.prototype
B.y=A.j3.prototype
B.f=A.ev.prototype
B.ba=J.mB.prototype
B.aK=J.dS.prototype
B.ao=new A.dq("Operation was cancelled")
B.a5=new A.i7(0,"visible")
B.aN=new A.i7(1,"hidden")
B.bt=new A.kH(1)
B.e5=new A.kH(-1)
B.a6=new A.e9(0,"applied")
B.a7=new A.e9(1,"quarantined")
B.bu=new A.e9(2,"conflict")
B.a8=new A.e9(3,"skipped")
B.bv=new A.kL(127)
B.a9=new A.kP(0,"changed")
B.aO=new A.kP(1,"deleted")
B.bx=new A.ic(!1)
B.ap=new A.kQ(B.bx)
B.by=new A.ic(!0)
B.bw=new A.kQ(B.by)
B.c0=new A.jN(A.ac("jN<p<i>>"))
B.bz=new A.ds(B.c0)
B.bA=new A.iD(A.MK(),A.ac("iD<i>"))
B.bB=new A.kO()
B.aq=new A.kR()
B.bC=new A.l0()
B.bD=new A.l3()
B.F={}
B.Z=new A.aV(B.F,[],A.ac("aV<l,k>"))
B.ec=new A.v2(0,"conflict")
B.e6=new A.qs()
B.aP=new A.qY()
B.bE=new A.lq(A.ac("lq<0&>"))
B.t=new A.lp()
B.aQ=new A.lt(A.ac("lt<0&>"))
B.aR=new A.lu()
B.P=new A.lu()
B.bF=new A.lS()
B.bG=new A.lZ()
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

B.h=new A.tw()
B.bN=new A.ux()
B.bO=new A.iN()
B.k=new A.fL()
B.bP=new A.mw()
B.aU=new A.vB()
B.bQ=new A.vK()
B.bR=new A.mH()
B.d=new A.wI()
B.bS=new A.na()
B.bT=new A.nh()
B.bU=new A.ni()
B.bV=new A.nk()
B.bW=new A.nq()
B.bX=new A.ns()
B.o=new A.nL()
B.e=new A.nM()
B.bY=new A.nN()
B.bZ=new A.nP()
B.c_=new A.y8()
B.u=new A.yR()
B.aa=new A.z0()
B.ar=new A.zy()
B.aV=new A.eX()
B.i=new A.oG()
B.l=new A.oJ()
B.c1=new A.Aa()
B.Q=new A.oQ()
B.ab=new A.dt(0,"create")
B.A=new A.dt(1,"update")
B.c2=new A.dt(2,"archive")
B.c3=new A.dt(3,"restore")
B.aW=new A.dt(4,"purge")
B.c4=new A.dt(5,"hide")
B.H=new A.ih(0,"local")
B.as=new A.ih(1,"remote")
B.ac=new A.ih(2,"resolution")
B.c5=new A.l8(3,"ignore")
B.R=new A.l8(4,"replace")
B.p=new A.ls(0,"normal")
B.aX=new A.ls(1,"full")
B.D=new A.aD(0)
B.at=new A.aD(1e6)
B.aY=new A.aD(16e3)
B.e7=new A.aD(18e8)
B.c6=new A.aD(2e5)
B.aZ=new A.aD(3e5)
B.ad=new A.aD(3e7)
B.au=new A.aD(3e8)
B.ae=new A.aD(5e5)
B.e8=new A.aD(5e6)
B.e9=new A.aD(6048e8)
B.ea=new A.aD(7776e9)
B.eb=new A.aD(864e8)
B.av=new A.c4(0,"text")
B.S=new A.c4(1,"int")
B.T=new A.c4(2,"real")
B.B=new A.c4(3,"bool")
B.U=new A.c4(4,"date")
B.I=new A.c4(5,"enumValue")
B.V=new A.c4(6,"json")
B.W=new A.c4(7,"jsonList")
B.J=new A.c4(8,"ref")
B.c7=new A.iv(!1)
B.aw=new A.dw("x",1,"opfsExternalLocks")
B.b_=new A.dw("y",2,"opfsExternalLocksWorkaround")
B.b0=new A.fw("/database",0,"database")
B.b1=new A.fw("/database-journal",1,"journal")
B.cd=new A.bj("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.ce=new A.bj("fieldCipher envelope must be a map.",null,null)
B.ay=new A.aV(B.F,[],A.ac("aV<l,l>"))
B.cf=new A.en(B.ay)
B.b2=new A.iC(0,"live")
B.ck=new A.m5(null)
B.cl=new A.m6(null)
B.cm=new A.d1(0,"textExpected")
B.cn=new A.d1(1,"intExpected")
B.co=new A.d1(2,"numberExpected")
B.cp=new A.d1(3,"boolExpected")
B.cq=new A.d1(4,"jsonExpected")
B.cr=new A.d1(5,"jsonListExpected")
B.cs=new A.d1(6,"enumValueRejected")
B.ct=new A.ma(255)
B.ax=new A.es(B.bE,A.ac("es<l>"))
B.cu=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b3=s([13,10],t.t)
B.aD=new A.cv(0,"unknown")
B.aE=new A.cv(1,"integer")
B.aF=new A.cv(2,"bigInt")
B.aG=new A.cv(3,"float")
B.aH=new A.cv(4,"text")
B.aI=new A.cv(5,"blob")
B.aJ=new A.cv(6,"$null")
B.bo=new A.cv(7,"boolean")
B.b4=s([B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.aJ,B.bo],A.ac("B<cv>"))
B.cv=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.cw=s([B.a5,B.aN],A.ac("B<i7>"))
B.bd=new A.aY(0,"eq")
B.d4=new A.aY(1,"neq")
B.d8=new A.aY(2,"gt")
B.d9=new A.aY(3,"gte")
B.da=new A.aY(4,"lt")
B.db=new A.aY(5,"lte")
B.dc=new A.aY(6,"inValues")
B.dd=new A.aY(7,"between")
B.de=new A.aY(8,"startsWith")
B.df=new A.aY(9,"endsWith")
B.d5=new A.aY(10,"contains")
B.d6=new A.aY(11,"isNull")
B.d7=new A.aY(12,"isNotNull")
B.cx=s([B.bd,B.d4,B.d8,B.d9,B.da,B.db,B.dc,B.dd,B.de,B.df,B.d5,B.d6,B.d7],A.ac("B<aY>"))
B.cb=new A.iw(0,"database")
B.cc=new A.iw(1,"journal")
B.b5=s([B.cb,B.cc],A.ac("B<iw>"))
B.z=new A.cQ(0,"clean")
B.G=new A.cQ(1,"dirty")
B.bl=new A.cQ(2,"inFlight")
B.a4=new A.cQ(3,"conflict")
B.an=new A.cQ(4,"error")
B.dx=new A.cQ(5,"quarantine")
B.dy=new A.cQ(6,"blocked")
B.cy=s([B.z,B.G,B.bl,B.a4,B.an,B.dx,B.dy],A.ac("B<cQ>"))
B.X=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.af=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cz=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.cg=new A.iC(1,"notArchived")
B.cA=s([B.b2,B.cg],A.ac("B<iC>"))
B.cB=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b8=new A.j7(0,"fileUpload")
B.b9=new A.j7(1,"fileRemove")
B.cC=s([B.b8,B.b9],A.ac("B<j7>"))
B.ca=new A.dw("s",0,"opfsShared")
B.c8=new A.dw("i",3,"indexedDb")
B.c9=new A.dw("m",4,"inMemory")
B.cD=s([B.ca,B.aw,B.b_,B.c8,B.c9],A.ac("B<dw>"))
B.ag=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bp=new A.cB(0,"sum")
B.bq=new A.cB(1,"avg")
B.br=new A.cB(2,"min")
B.bs=new A.cB(3,"max")
B.cE=s([B.bp,B.bq,B.br,B.bs],A.ac("B<cB>"))
B.cF=s([B.av,B.S,B.T,B.B,B.U,B.I,B.V,B.W,B.J],A.ac("B<c4>"))
B.m=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ah=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.Y=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cG=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fM(0,"upsert")
B.L=new A.fM(1,"archive")
B.a1=new A.fM(2,"restore")
B.cH=s([B.v,B.L,B.a1],A.ac("B<fM>"))
B.cI=s([],A.ac("B<dx>"))
B.b6=s([],t.d)
B.cK=s([],t.my)
B.cL=s([],t.kj)
B.q=s([],t.s)
B.cJ=s([],t.t)
B.ai=s([],t.dG)
B.n=s([],t.c)
B.cM=s(["*"],t.s)
B.cN=s([B.b0,B.b1],A.ac("B<fw>"))
B.cO=s(["id","updated"],t.s)
B.cP=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bg=new A.dN(0,"opfs")
B.bh=new A.dN(1,"indexedDb")
B.dq=new A.dN(2,"inMemory")
B.cQ=s([B.bg,B.bh,B.dq],A.ac("B<dN>"))
B.bm=new A.dR(0,"normal")
B.bn=new A.dR(1,"full")
B.cR=s([B.bm,B.bn],A.ac("B<dR>"))
B.aj=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cS=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cT=new A.iz([16,10,24,12,32,14],A.ac("iz<i,i>"))
B.d_={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.m9()
B.r=new A.kK()
B.cU=new A.aV(B.d_,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.o,B.o],A.ac("aV<l,em>"))
B.ak=new A.aV(B.F,[],A.ac("aV<l,i>"))
B.j=new A.aV(B.F,[],A.ac("aV<l,k?>"))
B.al=new A.aV(B.F,[],A.ac("aV<i,I<l,k?>(I<l,k?>)>"))
B.cW=new A.mg(11,"simpleSuccessResponse",A.ac("mg<L>"))
B.a_=new A.dJ(0,"createOrUpdate")
B.a0=new A.dJ(1,"createOrUpdateMerge")
B.b7=new A.dJ(2,"create")
B.K=new A.dJ(3,"update")
B.C=new A.dJ(4,"archive")
B.E=new A.dJ(5,"restore")
B.ed=new A.vh(2,"readWriteCreate")
B.d1=new A.cm("id",!1)
B.d2=new A.co(B.b6,null,null,!1,!1)
B.bb=new A.mC(0,"native")
B.aA=new A.mC(1,"web")
B.M=new A.b3(0,1,0,0,0,!1)
B.am=new A.b3(0,0,0,0,0,!0)
B.a2=new A.b3(0,0,0,0,0,!1)
B.d3=new A.b3(0,0,0,1,0,!1)
B.bc=new A.b3(0,0,1,0,0,!1)
B.a3=new A.b3(1,0,0,0,0,!1)
B.dg=new A.a4("archived",!0)
B.dh=new A.a4("0",B.n)
B.aB=new A.k1(!1,!1)
B.di=new A.eV(0,0,0)
B.dj=new A.eV(null,null,null)
B.cZ={hidden:0}
B.dk=new A.du(B.cZ,1,t.M)
B.cY={id:0,archived:1,hidden:2,extra:3}
B.be=new A.du(B.cY,4,t.M)
B.d0={open:0,contract_request:1,contract_event:2}
B.dl=new A.du(B.d0,3,t.M)
B.bf=new A.du(B.F,0,t.M)
B.dm=new A.jn(0,"insert")
B.dn=new A.jn(1,"update")
B.dp=new A.jn(2,"delete")
B.dr=new A.js(-1,null)
B.ds=new A.jt("_clientToken")
B.N=new A.ca(0,"closed")
B.dt=new A.ca(1,"opening")
B.bi=new A.ca(2,"offline")
B.aC=new A.ca(3,"authRequired")
B.bj=new A.ca(4,"idle")
B.du=new A.ca(5,"pulling")
B.dv=new A.ca(6,"pushing")
B.dw=new A.ca(7,"backoff")
B.bk=new A.ca(8,"paused")
B.O=new A.bn(B.ak,B.ak,0,0,0,0,!1)
B.dz=new A.no(B.N,0,0,0,0,null,null,null)
B.dA=A.bK("kF")
B.dB=A.bK("eb")
B.dC=A.bK("BQ")
B.dD=A.bK("rK")
B.dE=A.bK("rL")
B.dF=A.bK("tp")
B.dG=A.bK("tq")
B.dH=A.bK("tr")
B.dI=A.bK("L")
B.dJ=A.bK("k")
B.dK=A.bK("jk")
B.dL=A.bK("xv")
B.dM=A.bK("xw")
B.dN=A.bK("xx")
B.dO=A.bK("cS")
B.aL=new A.jv(!1)
B.dP=new A.jv(!0)
B.dQ=new A.de(14)
B.dR=new A.de(522)
B.dS=new A.de(778)
B.dT=new A.Ap(B.i,A.LN())
B.dU=new A.Aq(B.i,A.LO())
B.dV=new A.Ar(B.i,A.LP())
B.dW=new A.As(B.i,A.LQ())
B.dX=new A.p1(B.i,A.LR())
B.dY=new A.At(B.i,A.LS())
B.dZ=new A.Au(B.i,A.LT())
B.e_=new A.Av(B.i,A.LU())
B.e0=new A.Aw(B.i,A.LV())
B.e1=new A.Ay(B.i,A.LX())
B.e2=new A.Az(B.i,A.LY())
B.e3=new A.Ax(B.i,A.LW())
B.e4=new A.p2(B.i,A.LZ())
B.cV=new A.aV(B.F,[],A.ac("aV<k?,k?>"))
B.aM=new A.p3(B.i,B.cV)})();(function staticFields(){$.zA=null
$.f0=A.j([],t.hf)
$.Lj=null
$.Ed=null
$.vS=0
$.mF=A.L8()
$.DA=null
$.Dz=null
$.Ge=null
$.FY=null
$.Go=null
$.Bb=null
$.Bo=null
$.D4=null
$.zN=A.j([],A.ac("B<p<k>?>"))
$.hU=null
$.kl=null
$.km=null
$.CU=!1
$.C=B.i
$.zR=null
$.EI=null
$.EJ=null
$.EK=null
$.EL=null
$.CA=A.yu("_lastQuoRemDigits")
$.CB=A.yu("_lastQuoRemUsed")
$.jG=A.yu("_lastRemUsed")
$.CC=A.yu("_lastRem_nsh")
$.Ez=""
$.EA=null
$.fS=function(){var s=t.N
return A.u(s,s)}()
$.Fr=null
$.AJ=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Ng","GF",()=>A.Bg("_$dart_dartClosure"))
s($,"Nf","f7",()=>A.Bg("_$dart_dartClosure_dartJSInterop"))
s($,"NU","pl",()=>A.va(0))
s($,"Oh","He",()=>B.i.aV(new A.Br(),A.ac("A<~>")))
s($,"Ob","Hb",()=>A.j([new J.m0()],A.ac("B<jh>")))
s($,"Ny","GJ",()=>A.dd(A.xu({
toString:function(){return"$receiver$"}})))
s($,"Nz","GK",()=>A.dd(A.xu({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"NA","GL",()=>A.dd(A.xu(null)))
s($,"NB","GM",()=>A.dd(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"NE","GP",()=>A.dd(A.xu(void 0)))
s($,"NF","GQ",()=>A.dd(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ND","GO",()=>A.dd(A.Ew(null)))
s($,"NC","GN",()=>A.dd(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"NH","GS",()=>A.dd(A.Ew(void 0)))
s($,"NG","GR",()=>A.dd(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"NK","Df",()=>A.Jq())
s($,"Nm","e7",()=>$.He())
s($,"Nl","GG",()=>A.JJ(!1,B.i,t.y))
s($,"O_","H1",()=>A.va(4096))
s($,"NY","H_",()=>new A.Am().$0())
s($,"NZ","H0",()=>new A.Al().$0())
s($,"NM","Dg",()=>A.IC(A.b7(A.j([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"NL","GT",()=>A.va(0))
s($,"NT","ci",()=>A.jF(0))
s($,"NR","f8",()=>A.jF(1))
s($,"NS","GW",()=>A.jF(2))
s($,"NP","Di",()=>$.f8().bB(0))
s($,"NN","Dh",()=>A.jF(1e4))
r($,"NQ","GV",()=>A.ag("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"NO","GU",()=>A.va(8))
s($,"NV","GX",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"NW","GY",()=>A.ag("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"NX","GZ",()=>typeof URLSearchParams=="function")
s($,"O2","f9",()=>A.kt(B.dJ))
s($,"Nr","ky",()=>{A.IM()
return $.vS})
s($,"O3","H4",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"Np","BK",()=>{var q=new A.zz(A.IB(8))
q.oG()
return q})
s($,"Nh","kx",()=>A.Hy(B.cX.gaa(A.ID(A.b7(A.j([1],t.t)))),0,null).getInt8(0)===1?B.P:B.aR)
s($,"N8","Da",()=>A.ag("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"O5","BL",()=>A.ag("\\r\\n|\\r|\\n",!0,!1))
s($,"Nn","GH",()=>A.Ei())
s($,"O0","Dj",()=>A.ag("^[\\x00-\\x7F]+$",!0,!1))
s($,"O1","H2",()=>A.ag('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"Oj","Hf",()=>A.ag('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"O4","H5",()=>A.ag("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"O8","H8",()=>A.ag('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"O7","H7",()=>A.ag("\\\\(.)",!0,!1))
s($,"Og","Hd",()=>A.ag('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"Ok","Hg",()=>A.ag("(?:"+$.H5().a+")*",!0,!1))
s($,"Nc","Db",()=>A.ag("^[0-9a-f]{64}$",!0,!1))
s($,"Oa","Ha",()=>A.Ej())
s($,"Oi","pm",()=>A.ag("^[a-z0-9]{15}$",!0,!1))
r($,"KS","H3",()=>A.HQ().a)
s($,"Ni","Dc",()=>A.ag("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"Nd","GD",()=>A.BW("declaredNames",t.aJ))
s($,"Ne","GE",()=>A.BW("fieldByName",A.ac("I<l,aX>")))
s($,"O6","H6",()=>A.ag("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"Nx","kA",()=>new A.k())
s($,"Od","i6",()=>new A.qB($.Dd()))
s($,"Nu","GI",()=>new A.vM(A.ag("/",!0,!1),A.ag("[^/]$",!0,!1),A.ag("^/",!0,!1)))
s($,"Nw","pk",()=>new A.xU(A.ag("[/\\\\]",!0,!1),A.ag("[^/\\\\]$",!0,!1),A.ag("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.ag("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"Nv","kz",()=>new A.xA(A.ag("/",!0,!1),A.ag("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.ag("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.ag("^/",!0,!1)))
s($,"Nt","Dd",()=>A.Jc())
s($,"Nb","GC",()=>$.f8().bC(0,63).bB(0))
s($,"Na","GB",()=>{var q=$.f8()
return q.bC(0,63).fQ(0,q)})
s($,"N9","pj",()=>A.Ej())
s($,"NI","De",()=>A.BW(null,t.S))
s($,"Oc","Hc",()=>A.Ip(A.j([A.Cs("files"),A.Cs("blocks")],t.s)))
s($,"Nj","BJ",()=>{var q,p,o=A.u(t.N,A.ac("fw"))
for(q=0;q<2;++q){p=B.cN[q]
o.j(0,p.c,p)}return o})
s($,"O9","H9",()=>A.Ei())
r($,"NJ","kB",()=>{var q="navigator"
return A.Ig(A.Ih(A.D2(A.Gt(),q),A.Cs("locks")))?A.D2(A.D2(A.Gt(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fJ,ArrayBuffer:A.fI,ArrayBufferView:A.j1,DataView:A.j0,Float32Array:A.mm,Float64Array:A.mn,Int16Array:A.mo,Int32Array:A.mp,Int8Array:A.mq,Uint16Array:A.j2,Uint32Array:A.j3,Uint8ClampedArray:A.j4,CanvasPixelArray:A.j4,Uint8Array:A.ev})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.fK.$nativeSuperclassTag="ArrayBufferView"
A.jY.$nativeSuperclassTag="ArrayBufferView"
A.jZ.$nativeSuperclassTag="ArrayBufferView"
A.dK.$nativeSuperclassTag="ArrayBufferView"
A.k_.$nativeSuperclassTag="ArrayBufferView"
A.k0.$nativeSuperclassTag="ArrayBufferView"
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
var s=A.MI
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
