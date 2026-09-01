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
if(a[b]!==s){A.N_(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.k(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.CU(b)
return new s(c,this)}:function(){if(s===null)s=A.CU(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.CU(a).prototype
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
D2(a,b,c,d){return{i:a,p:b,e:c,x:d}},
Bd(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.D0==null){A.Mw()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.b(A.Et("Return interceptor for "+A.r(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.zx
if(o==null)o=$.zx=A.Bc(n)
p=q[o]}if(p!=null)return p
p=A.MF(a)
if(p!=null)return p
if(typeof a=="function")return B.cg
s=Object.getPrototypeOf(a)
if(s==null)return B.b9
if(s===Object.prototype)return B.b9
if(typeof q=="function"){o=$.zx
if(o==null)o=$.zx=A.Bc(n)
Object.defineProperty(q,o,{value:B.aK,enumerable:false,writable:true,configurable:true})
return B.aK}return B.aK},
C0(a,b){if(a<0||a>4294967295)throw A.b(A.aw(a,0,4294967295,"length",null))
return J.DV(new Array(a),b)},
DU(a,b){if(a<0)throw A.b(A.Q("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("B<0>"))},
DT(a,b){if(a<0)throw A.b(A.Q("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.i("B<0>"))},
DV(a,b){var s=A.k(a,b.i("B<0>"))
s.$flags=1
return s},
Ib(a,b){return J.Dj(a,b)},
DW(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
Ie(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.DW(r))break;++b}return b},
DX(a,b){var s,r
for(;b>0;b=s){s=b-1
r=a.charCodeAt(s)
if(r!==32&&r!==13&&!J.DW(r))break}return b},
dn(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.iF.prototype
return J.m1.prototype}if(typeof a=="string")return J.dB.prototype
if(a==null)return J.iG.prototype
if(typeof a=="boolean")return J.m0.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fB.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.Bd(a)},
M(a){if(typeof a=="string")return J.dB.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fB.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.Bd(a)},
aA(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fB.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.Bd(a)},
Mo(a){if(typeof a=="number")return J.ep.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dS.prototype
return a},
Mp(a){if(typeof a=="number")return J.ep.prototype
if(typeof a=="string")return J.dB.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dS.prototype
return a},
Bb(a){if(typeof a=="string")return J.dB.prototype
if(a==null)return a
if(!(a instanceof A.j))return J.dS.prototype
return a},
ks(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bP.prototype
if(typeof a=="symbol")return J.fB.prototype
if(typeof a=="bigint")return J.bq.prototype
return a}if(a instanceof A.j)return a
return J.Bd(a)},
v(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dn(a).R(a,b)},
S(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.Gc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.M(a).h(a,b)},
bY(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.Gc(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.aA(a).j(a,b,c)},
aL(a,b){return J.aA(a).t(a,b)},
Dg(a,b){return J.aA(a).C(a,b)},
BI(a,b){return J.Bb(a).hw(a,b)},
pl(a){return J.ks(a).mj(a)},
Dh(a,b,c){return J.ks(a).hx(a,b,c)},
Di(a,b,c){return J.ks(a).mk(a,b,c)},
Hd(a){return J.ks(a).ml(a)},
bL(a,b,c){return J.ks(a).hy(a,b,c)},
pm(a,b){return J.aA(a).hB(a,b)},
He(a,b,c){return J.Mo(a).bM(a,b,c)},
Dj(a,b){return J.Mp(a).a0(a,b)},
BJ(a,b){return J.M(a).F(a,b)},
pn(a,b){return J.aA(a).a8(a,b)},
kC(a,b){return J.aA(a).cD(a,b)},
Hf(a){return J.ks(a).gaa(a)},
bZ(a){return J.aA(a).gG(a)},
a7(a){return J.dn(a).gI(a)},
by(a){return J.M(a).gE(a)},
e8(a){return J.M(a).gW(a)},
E(a){return J.aA(a).gu(a)},
po(a){return J.aA(a).ga1(a)},
ap(a){return J.M(a).gm(a)},
c_(a){return J.dn(a).gak(a)},
BK(a){return J.aA(a).gap(a)},
Hg(a,b,c){return J.aA(a).fJ(a,b,c)},
Hh(a,b,c){return J.aA(a).aC(a,b,c)},
bM(a,b,c){return J.aA(a).cd(a,b,c)},
Hi(a,b,c){return J.Bb(a).eg(a,b,c)},
Hj(a,b){return J.M(a).sm(a,b)},
Hk(a,b,c,d,e){return J.aA(a).ai(a,b,c,d,e)},
pp(a,b){return J.aA(a).bi(a,b)},
Dk(a,b){return J.aA(a).cj(a,b)},
Hl(a,b){return J.Bb(a).cP(a,b)},
Hm(a,b){return J.Bb(a).S(a,b)},
Hn(a,b,c){return J.aA(a).T(a,b,c)},
BL(a,b){return J.aA(a).cK(a,b)},
Ho(a){return J.aA(a).eq(a)},
a0(a){return J.dn(a).l(a)},
Dl(a,b){return J.aA(a).ds(a,b)},
Dm(a,b){return J.aA(a).kv(a,b)},
lZ:function lZ(){},
m0:function m0(){},
iG:function iG(){},
aE:function aE(){},
dD:function dD(){},
mA:function mA(){},
dS:function dS(){},
bP:function bP(){},
bq:function bq(){},
fB:function fB(){},
B:function B(a){this.$ti=a},
m_:function m_(){},
ts:function ts(a){this.$ti=a},
fb:function fb(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ep:function ep(){},
iF:function iF(){},
m1:function m1(){},
dB:function dB(){}},A={C3:function C3(){},
fd(a,b,c){if(t.O.b(a))return new A.jM(a,b.i("@<0>").V(c).i("jM<1,2>"))
return new A.ec(a,b.i("@<0>").V(c).i("ec<1,2>"))},
DZ(a){return new A.dC("Field '"+a+"' has been assigned during initialization.")},
E_(a){return new A.dC("Field '"+a+"' has not been initialized.")},
Ii(a){return new A.dC("Field '"+a+"' has already been initialized.")},
fU(a){return new A.mM(a)},
Bg(a){var s,r=a^48
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
cz(a,b,c){return a},
D1(a){var s,r
for(s=$.f0.length,r=0;r<s;++r)if(a===$.f0[r])return!0
return!1},
cu(a,b,c,d){A.bb(b,"start")
if(c!=null){A.bb(c,"end")
if(b>c)A.w(A.aw(b,0,c,"start",null))}return new A.ct(a,b,c,d.i("ct<0>"))},
dG(a,b,c,d){if(t.O.b(a))return new A.ek(a,b,c.i("@<0>").V(d).i("ek<1,2>"))
return new A.cl(a,b,c.i("@<0>").V(d).i("cl<1,2>"))},
En(a,b,c){var s="takeCount"
A.kJ(b,s)
A.bb(b,s)
if(t.O.b(a))return new A.iq(a,b,c.i("iq<0>"))
return new A.eG(a,b,c.i("eG<0>"))},
Ek(a,b,c){var s="count"
if(t.O.b(a)){A.kJ(b,s)
A.bb(b,s)
return new A.fp(a,b,c.i("fp<0>"))}A.kJ(b,s)
A.bb(b,s)
return new A.d9(a,b,c.i("d9<0>"))},
aD(){return new A.bk("No element")},
iD(){return new A.bk("Too many elements")},
DR(){return new A.bk("Too few elements")},
n2(a,b,c,d){if(c-b<=32)A.J0(a,b,c,d)
else A.J_(a,b,c,d)},
J0(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.M(a);s<=c;++s){q=r.h(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.h(a,p-1),q)>0))break
o=p-1
r.j(a,p,r.h(a,o))
p=o}r.j(a,p,q)}},
J_(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.c.N(a5-a4+1,6),h=a4+i,g=a5-i,f=B.c.N(a4+a5,2),e=f-i,d=f+i,c=J.M(a3),b=c.h(a3,h),a=c.h(a3,e),a0=c.h(a3,f),a1=c.h(a3,d),a2=c.h(a3,g)
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
yO:function yO(a){this.a=0
this.b=a},
yo:function yo(a){this.a=0
this.b=a},
dV:function dV(){},
l1:function l1(a,b){this.a=a
this.$ti=b},
ec:function ec(a,b){this.a=a
this.$ti=b},
jM:function jM(a,b){this.a=a
this.$ti=b},
jJ:function jJ(){},
yp:function yp(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b){this.a=a
this.$ti=b},
pQ:function pQ(a,b){this.a=a
this.b=b},
pP:function pP(a){this.a=a},
dC:function dC(a){this.a=a},
mM:function mM(a){this.a=a},
cj:function cj(a){this.a=a},
Bn:function Bn(){},
wD:function wD(){},
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
md:function md(a,b,c){var _=this
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
it:function it(a,b,c){this.a=a
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
nt:function nt(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
fp:function fp(a,b,c){this.a=a
this.b=b
this.$ti=c},
n1:function n1(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a){this.$ti=a},
lt:function lt(a){this.$ti=a},
bF:function bF(a,b){this.a=a
this.$ti=b},
nT:function nT(a,b){this.a=a
this.$ti=b},
iw:function iw(){},
nF:function nF(){},
hg:function hg(){},
bT:function bT(a,b){this.a=a
this.$ti=b},
jt:function jt(a){this.a=a},
kj:function kj(){},
HH(a,b,c){var s,r,q,p,o,n,m=A.n(a),l=A.bD(new A.T(a,m.i("T<1>")),!0,b),k=l.length,j=0
for(;;){if(!(j<k)){s=!0
break}r=l[j]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++j}if(s){q={}
for(p=0,j=0;j<l.length;l.length===k||(0,A.q)(l),++j,p=o){r=l[j]
a.h(0,r)
o=p+1
q[r]=p}n=new A.aV(q,A.bD(new A.aq(a,m.i("aq<2>")),!0,c),b.i("@<0>").V(c).i("aV<1,2>"))
n.$keys=l
return n}return new A.il(A.ba(a,b,c),b.i("@<0>").V(c).i("il<1,2>"))},
HI(){throw A.b(A.Y("Cannot modify unmodifiable Map"))},
HJ(){throw A.b(A.Y("Cannot modify constant Set"))},
Gw(a){var s=A.Gv(a)
if(s!=null)return s
return"minified:"+a},
Gc(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a0(a)
return s},
ez(a){var s,r=$.E9
if(r==null)r=$.E9=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ja(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
IJ(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.a.cg(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
mD(a){var s,r,q,p
if(a instanceof A.j)return A.bW(A.bx(a),null)
s=J.dn(a)
if(s===B.cf||s===B.ch||t.cx.b(a)){r=B.aS(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bW(A.bx(a),null)},
Eb(a){var s,r,q
if(a==null||typeof a=="number"||A.bH(a))return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ef)return a.l(0)
if(a instanceof A.hE)return a.m7(!0)
s=$.H7()
for(r=0;r<1;++r){q=s[r].wK(a)
if(q!=null)return q}return"Instance of '"+A.mD(a)+"'"},
IF(){return Date.now()},
II(){var s,r
if($.vO!==0)return
$.vO=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.vO=1e6
$.mE=new A.vN(r)},
IE(){if(!!self.location)return self.location.href
return null},
E8(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
IK(a){var s,r,q,p=A.k([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
if(!A.ah(q))throw A.b(A.f2(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.c.af(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.b(A.f2(q))}return A.E8(p)},
Ec(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ah(q))throw A.b(A.f2(q))
if(q<0)throw A.b(A.f2(q))
if(q>65535)return A.IK(a)}return A.E8(a)},
IL(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bs(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.af(s,10)|55296)>>>0,s&1023|56320)}}throw A.b(A.aw(a,0,1114111,null,null))},
IM(a,b,c,d,e,f,g,h,i){var s,r,q,p=b-1
if(0<=a&&a<100){a+=400
p-=4800}s=B.c.al(h,1000)
r=Date.UTC(a,p,c,d,e,f,g+B.c.N(h-s,1000))
q=!0
if(!isNaN(r))if(!(r<-864e13))if(!(r>864e13))q=r===864e13&&s!==0
if(q)return null
return r},
br(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
Ce(a){return a.c?A.br(a).getUTCFullYear()+0:A.br(a).getFullYear()+0},
Cc(a){return a.c?A.br(a).getUTCMonth()+1:A.br(a).getMonth()+1},
vM(a){return a.c?A.br(a).getUTCDate()+0:A.br(a).getDate()+0},
Ca(a){return a.c?A.br(a).getUTCHours()+0:A.br(a).getHours()+0},
Cb(a){return a.c?A.br(a).getUTCMinutes()+0:A.br(a).getMinutes()+0},
Cd(a){return a.c?A.br(a).getUTCSeconds()+0:A.br(a).getSeconds()+0},
Ea(a){return a.c?A.br(a).getUTCMilliseconds()+0:A.br(a).getMilliseconds()+0},
IH(a){return B.c.al((a.c?A.br(a).getUTCDay()+0:A.br(a).getDay()+0)+6,7)+1},
IG(a){var s=a.$thrownJsError
if(s==null)return null
return A.ai(s)},
mF(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
B6(a,b){var s,r="index"
if(!A.ah(b))return new A.bz(!0,b,r,null)
s=J.ap(a)
if(b<0||b>=s)return A.lW(b,s,a,null,r)
return A.wq(b,r)},
Mg(a,b,c){if(a<0||a>c)return A.aw(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aw(b,a,c,"end",null)
return new A.bz(!0,b,"end",null)},
f2(a){return new A.bz(!0,a,null,null)},
b(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.dc()
b.dartException=a
s=A.N0
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
N0(){return J.a0(this.dartException)},
w(a,b){throw A.aK(a,b==null?new Error():b)},
H(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.w(A.KI(a,b,c),s)},
KI(a,b,c){var s,r,q,p,o,n,m,l,k
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
dd(a){var s,r,q,p,o,n
a=A.Gl(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.xo(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
xp(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
Es(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
C4(a,b){var s=b==null,r=s?null:b.method
return new A.m2(a,r,s?null:b.receiver)},
F(a){if(a==null)return new A.ms(a)
if(a instanceof A.is)return A.e6(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.e6(a,a.dartException)
return A.LC(a)},
e6(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
LC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.af(r,16)&8191)===10)switch(q){case 438:return A.e6(a,A.C4(A.r(s)+" (Error "+q+")",null))
case 445:case 5007:A.r(s)
return A.e6(a,new A.j5())}}if(a instanceof TypeError){p=$.GF()
o=$.GG()
n=$.GH()
m=$.GI()
l=$.GL()
k=$.GM()
j=$.GK()
$.GJ()
i=$.GO()
h=$.GN()
g=p.bO(s)
if(g!=null)return A.e6(a,A.C4(s,g))
else{g=o.bO(s)
if(g!=null){g.method="call"
return A.e6(a,A.C4(s,g))}else if(n.bO(s)!=null||m.bO(s)!=null||l.bO(s)!=null||k.bO(s)!=null||j.bO(s)!=null||m.bO(s)!=null||i.bO(s)!=null||h.bO(s)!=null)return A.e6(a,new A.j5())}return A.e6(a,new A.nE(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.jn()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.e6(a,new A.bz(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.jn()
return a},
ai(a){var s
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
M4(a){if(typeof a=="number")return B.x.gI(a)
if(a instanceof A.oT)return A.ez(a)
if(a instanceof A.hE)return a.gI(a)
if(a instanceof A.jt)return a.gI(0)
return A.kt(a)},
G8(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
Mm(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
KV(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.DH("Unsupported number of arguments for wrapped closure"))},
e5(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.M9(a,b)
a.$identity=s
return s},
M9(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.KV)},
HB(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.wO().constructor.prototype):Object.create(new A.id(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.DA(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.Hx(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.DA(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
Hx(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.Hs)}throw A.b("Error in functionType of tearoff")},
Hy(a,b,c,d){var s=A.Dx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
DA(a,b,c,d){if(c)return A.HA(a,b,d)
return A.Hy(b.length,d,a,b)},
Hz(a,b,c,d){var s=A.Dx,r=A.Ht
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
HA(a,b,c){var s,r
if($.Dv==null)$.Dv=A.Du("interceptor")
if($.Dw==null)$.Dw=A.Du("receiver")
s=b.length
r=A.Hz(s,c,a,b)
return r},
CU(a){return A.HB(a)},
Hs(a,b){return A.kd(v.typeUniverse,A.bx(a.a),b)},
Dx(a){return a.a},
Ht(a){return a.b},
Du(a){var s,r,q,p=new A.id("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.b(A.Q("Field name "+a+" not found.",null))},
Bc(a){return v.getIsolateTag(a)},
N3(a,b){var s=$.C
if(s===B.i)return a
return s.hA(a,b)},
Gp(){return v.G},
Oa(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
MF(a){var s,r,q,p,o,n=$.Ga.$1(a),m=$.B7[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Bk[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.FU.$2(a,n)
if(q!=null){m=$.B7[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.Bk[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.Bm(s)
$.B7[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.Bk[n]=s
return s}if(p==="-"){o=A.Bm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.Gi(a,s)
if(p==="*")throw A.b(A.Et(n))
if(v.leafTags[n]===true){o=A.Bm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.Gi(a,s)},
Gi(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.D2(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
Bm(a){return J.D2(a,!1,null,!!a.$ibQ)},
MH(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.Bm(s)
else return J.D2(s,c,null,null)},
Mw(){if(!0===$.D0)return
$.D0=!0
A.Mx()},
Mx(){var s,r,q,p,o,n,m,l
$.B7=Object.create(null)
$.Bk=Object.create(null)
A.Mv()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.Gk.$1(o)
if(n!=null){m=A.MH(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Mv(){var s,r,q,p,o,n,m=B.bG()
m=A.hX(B.bH,A.hX(B.bI,A.hX(B.aT,A.hX(B.aT,A.hX(B.bJ,A.hX(B.bK,A.hX(B.bL(B.aS),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.Ga=new A.Bh(p)
$.FU=new A.Bi(o)
$.Gk=new A.Bj(n)},
hX(a,b){return a(b)||b},
K_(a,b){var s
for(s=0;s<a.length;++s)if(!J.v(a[s],b[s]))return!1
return!0},
Md(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
C2(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.b(A.a8("Illegal RegExp pattern ("+String(o)+")",a,null))},
MU(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.eq){s=B.a.ae(a,c)
return b.b.test(s)}else return!J.BI(b,B.a.ae(a,c)).gE(0)},
G6(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
Gl(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
z(a,b,c){var s
if(typeof b=="string")return A.MW(a,b,c)
if(b instanceof A.eq){s=b.glE()
s.lastIndex=0
return a.replace(s,A.G6(c))}return A.MV(a,b,c)},
MV(a,b,c){var s,r,q,p
for(s=J.BI(b,a),s=s.gu(s),r=0,q="";s.k();){p=s.gn()
q=q+a.substring(r,p.gP())+c
r=p.gM()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
MW(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.Gl(b),"g"),A.G6(c))},
FN(a){return a},
Gq(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.hw(0,a),s=new A.o_(s.a,s.b,s.c),r=t.lu,q=0,p="";s.k();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.r(A.FN(B.a.A(a,q,m)))+A.r(c.$1(o))
q=m+n[0].length}s=p+A.r(A.FN(B.a.ae(a,q)))
return s.charCodeAt(0)==0?s:s},
MX(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.Gr(a,s,s+b.length,c)},
Gr(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
a4:function a4(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
oB:function oB(a,b){this.a=a
this.b=b},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
oC:function oC(a){this.a=a},
il:function il(a,b){this.a=a
this.$ti=b},
fl:function fl(){},
qy:function qy(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b){this.a=a
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
du:function du(a,b,c){this.a=a
this.b=b
this.$ti=c},
tm:function tm(){},
iC:function iC(a,b){this.a=a
this.$ti=b},
vN:function vN(a){this.a=a},
jg:function jg(){},
xo:function xo(a,b,c,d,e,f){var _=this
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
nE:function nE(a){this.a=a},
ms:function ms(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a
this.b=null},
ef:function ef(){},
pV:function pV(){},
pW:function pW(){},
xe:function xe(){},
wO:function wO(){},
id:function id(a,b){this.a=a
this.b=b},
mV:function mV(a){this.a=a},
bB:function bB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
tt:function tt(a){this.a=a},
ur:function ur(a,b){var _=this
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
aq:function aq(a,b){this.a=a
this.$ti=b},
aR:function aR(a,b,c,d){var _=this
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
Bh:function Bh(a){this.a=a},
Bi:function Bi(a){this.a=a},
Bj:function Bj(a){this.a=a},
hE:function hE(){},
oy:function oy(){},
oz:function oz(){},
oA:function oA(){},
eq:function eq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hD:function hD(a){this.b=a},
nZ:function nZ(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function o_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
h9:function h9(a,b){this.a=a
this.c=b},
oO:function oO(a,b,c){this.a=a
this.b=b
this.c=c},
A5:function A5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
N_(a){throw A.aK(A.DZ(a),new Error())},
y(){throw A.aK(A.E_(""),new Error())},
cg(){throw A.aK(A.Ii(""),new Error())},
BC(){throw A.aK(A.DZ(""),new Error())},
CB(){var s=new A.o7("")
return s.b=s},
yq(a){var s=new A.o7(a)
return s.b=s},
o7:function o7(a){this.a=a
this.b=null},
hS(a,b,c){},
b7(a){var s,r,q
if(t.iy.b(a))return a
s=J.M(a)
r=A.ae(s.gm(a),null,!1,t.z)
for(q=0;q<s.gm(a);++q)r[q]=s.h(a,q)
return r},
Ix(a){return new DataView(new ArrayBuffer(a))},
E3(a,b,c){A.hS(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
d5(a,b,c){A.hS(a,b,c)
c=B.c.N(a.byteLength-b,4)
return new Int32Array(a,b,c)},
Iy(a){return new Int8Array(a)},
Iz(a){return new Uint16Array(a)},
E4(a,b,c){A.hS(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
v7(a){return new Uint8Array(a)},
bS(a,b,c){A.hS(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
dk(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.B6(b,a))},
dl(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.Mg(a,b,c))
if(b==null)return c
return b},
fJ:function fJ(){},
fI:function fI(){},
j0:function j0(){},
oW:function oW(a){this.a=a},
j_:function j_(){},
fK:function fK(){},
dK:function dK(){},
bR:function bR(){},
ml:function ml(){},
mm:function mm(){},
mn:function mn(){},
mo:function mo(){},
mp:function mp(){},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
ev:function ev(){},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(){},
Ci(a,b){var s=b.c
return s==null?b.c=A.kb(a,"A",[b.x]):s},
Eh(a){var s=a.w
if(s===6||s===7)return A.Eh(a.x)
return s===11||s===12},
IV(a){return a.as},
Gh(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
ac(a){return A.Aa(v.typeUniverse,a,!1)},
Mz(a,b){var s,r,q,p,o
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
return A.EY(a1,r,!0)
case 7:s=a2.x
r=A.e3(a1,s,a3,a4)
if(r===s)return a2
return A.EX(a1,r,!0)
case 8:q=a2.y
p=A.hW(a1,q,a3,a4)
if(p===q)return a2
return A.kb(a1,a2.x,p)
case 9:o=a2.x
n=A.e3(a1,o,a3,a4)
m=a2.y
l=A.hW(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.CF(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.hW(a1,j,a3,a4)
if(i===j)return a2
return A.EZ(a1,k,i)
case 11:h=a2.x
g=A.e3(a1,h,a3,a4)
f=a2.y
e=A.Lx(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.EW(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.hW(a1,d,a3,a4)
o=a2.x
n=A.e3(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.CG(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.b(A.kN("Attempted to substitute unexpected RTI kind "+a0))}},
hW(a,b,c,d){var s,r,q,p,o=b.length,n=A.Ak(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.e3(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
Ly(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.Ak(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.e3(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
Lx(a,b,c,d){var s,r=b.a,q=A.hW(a,r,c,d),p=b.b,o=A.hW(a,p,c,d),n=b.c,m=A.Ly(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ol()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
pb(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Mq(s)
return a.$S()}return null},
My(a,b){var s
if(A.Eh(b))if(a instanceof A.ef){s=A.pb(a)
if(s!=null)return s}return A.bx(a)},
bx(a){if(a instanceof A.j)return A.n(a)
if(Array.isArray(a))return A.a_(a)
return A.CP(J.dn(a))},
a_(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n(a){var s=a.$ti
return s!=null?s:A.CP(a)},
CP(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.KT(a,s)},
KT(a,b){var s=a instanceof A.ef?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.K9(v.typeUniverse,s.name)
b.$ccache=r
return r},
Mq(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.Aa(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dp(a){return A.bJ(A.n(a))},
D_(a){var s=A.pb(a)
return A.bJ(s==null?A.bx(a):s)},
CS(a){var s
if(a instanceof A.hE)return a.lt()
s=a instanceof A.ef?A.pb(a):null
if(s!=null)return s
if(t.dH.b(a))return J.c_(a).a
if(Array.isArray(a))return A.a_(a)
return A.bx(a)},
bJ(a){var s=a.r
return s==null?a.r=new A.oT(a):s},
Mj(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.kd(v.typeUniverse,A.CS(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.F0(v.typeUniverse,s,A.CS(q[r]))
return A.kd(v.typeUniverse,s,a)},
bK(a){return A.bJ(A.Aa(v.typeUniverse,a,!1))},
KS(a){var s=this
s.b=A.Lv(s)
return s.b(a)},
Lv(a){var s,r,q,p
if(a===t.K)return A.L0
if(A.f5(a))return A.L4
s=a.w
if(s===6)return A.KP
if(s===1)return A.Fw
if(s===7)return A.KW
r=A.Lu(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.f5)){a.f="$i"+q
if(q==="p")return A.KZ
if(a===t.m)return A.KY
return A.L3}}else if(s===10){p=A.Md(a.x,a.y)
return p==null?A.Fw:p}return A.KN},
Lu(a){if(a.w===8){if(a===t.S)return A.ah
if(a===t.W||a===t.o)return A.L_
if(a===t.N)return A.L2
if(a===t.y)return A.bH}return null},
KR(a){var s=this,r=A.KM
if(A.f5(s))r=A.Kn
else if(s===t.K)r=A.Km
else if(A.i0(s)){r=A.KO
if(s===t.U)r=A.bd
else if(s===t.x)r=A.a6
else if(s===t.o9)r=A.Ff
else if(s===t.jh)r=A.Fj
else if(s===t.dA)r=A.Fg
else if(s===t.B)r=A.Fh}else if(s===t.S)r=A.ao
else if(s===t.N)r=A.D
else if(s===t.y)r=A.hR
else if(s===t.o)r=A.Fi
else if(s===t.W)r=A.eZ
else if(s===t.m)r=A.be
s.a=r
return s.a(a)},
KN(a){var s=this
if(a==null)return A.i0(s)
return A.MC(v.typeUniverse,A.My(a,s),s)},
KP(a){if(a==null)return!0
return this.x.b(a)},
L3(a){var s,r=this
if(a==null)return A.i0(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dn(a)[s]},
KZ(a){var s,r=this
if(a==null)return A.i0(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.dn(a)[s]},
KY(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
Fv(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
KM(a){var s=this
if(a==null){if(A.i0(s))return a}else if(s.b(a))return a
throw A.aK(A.Fp(a,s),new Error())},
KO(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.Fp(a,s),new Error())},
Fp(a,b){return new A.k9("TypeError: "+A.EN(a,A.bW(b,null)))},
EN(a,b){return A.ir(a)+": type '"+A.bW(A.CS(a),null)+"' is not a subtype of type '"+b+"'"},
ce(a,b){return new A.k9("TypeError: "+A.EN(a,b))},
KW(a){var s=this
return s.x.b(a)||A.Ci(v.typeUniverse,s).b(a)},
L0(a){return a!=null},
Km(a){if(a!=null)return a
throw A.aK(A.ce(a,"Object"),new Error())},
L4(a){return!0},
Kn(a){return a},
Fw(a){return!1},
bH(a){return!0===a||!1===a},
hR(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.ce(a,"bool"),new Error())},
Ff(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.ce(a,"bool?"),new Error())},
eZ(a){if(typeof a=="number")return a
throw A.aK(A.ce(a,"double"),new Error())},
Fg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.ce(a,"double?"),new Error())},
ah(a){return typeof a=="number"&&Math.floor(a)===a},
ao(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.ce(a,"int"),new Error())},
bd(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.ce(a,"int?"),new Error())},
L_(a){return typeof a=="number"},
Fi(a){if(typeof a=="number")return a
throw A.aK(A.ce(a,"num"),new Error())},
Fj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.ce(a,"num?"),new Error())},
L2(a){return typeof a=="string"},
D(a){if(typeof a=="string")return a
throw A.aK(A.ce(a,"String"),new Error())},
a6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.ce(a,"String?"),new Error())},
be(a){if(A.Fv(a))return a
throw A.aK(A.ce(a,"JSObject"),new Error())},
Fh(a){if(a==null)return a
if(A.Fv(a))return a
throw A.aK(A.ce(a,"JSObject?"),new Error())},
FI(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bW(a[q],b)
return s},
Lk(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.FI(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bW(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
Ft(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.k([],t.s)
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
if(m===8){p=A.LB(a.x)
o=a.y
return o.length>0?p+("<"+A.FI(o,b)+">"):p}if(m===10)return A.Lk(a,b)
if(m===11)return A.Ft(a,b,null)
if(m===12)return A.Ft(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
LB(a){var s=A.Gv(a)
if(s!=null)return s
return"minified:"+a},
Ka(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
K9(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.Aa(a,b,!1)
else if(typeof m=="number"){s=m
r=A.kc(a,5,"#")
q=A.Ak(s)
for(p=0;p<s;++p)q[p]=r
o=A.kb(a,b,q)
n[b]=o
return o}else return m},
K8(a,b){return A.Fd(a.tR,b)},
K7(a,b){return A.Fd(a.eT,b)},
Aa(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.F_(a,null,b,!1)
r.set(b,s)
return s},
kd(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.F_(a,b,c,!0)
q.set(c,r)
return r},
F0(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.CF(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
F_(a,b,c,d){return A.JY(A.JS(a,b,c,d))},
e2(a,b){b.a=A.KR
b.b=A.KS
return b},
kc(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.cp(null,null)
s.w=b
s.as=c
r=A.e2(a,s)
a.eC.set(c,r)
return r},
EY(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.K5(a,b,r,c)
a.eC.set(r,s)
return s},
K5(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.f5(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.i0(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.cp(null,null)
q.w=6
q.x=b
q.as=c
return A.e2(a,q)},
EX(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.K3(a,b,r,c)
a.eC.set(r,s)
return s},
K3(a,b,c,d){var s,r
if(d){s=b.w
if(A.f5(b)||b===t.K)return b
else if(s===1)return A.kb(a,"A",[b])
else if(b===t.P||b===t.T)return t.gK}r=new A.cp(null,null)
r.w=7
r.x=b
r.as=c
return A.e2(a,r)},
K6(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
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
K2(a){var s,r,q,p,o,n=a.length
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
CF(a,b,c){var s,r,q,p,o,n
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
EZ(a,b,c){var s,r,q="+"+(b+"("+A.ka(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.cp(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.e2(a,s)
a.eC.set(q,r)
return r},
EW(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ka(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ka(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.K2(i)+"}"}r=n+(g+")")
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
CG(a,b,c,d){var s,r=b.as+("<"+A.ka(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.K4(a,b,c,r,d)
a.eC.set(r,s)
return s},
K4(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.Ak(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.e3(a,b,r,0)
m=A.hW(a,c,r,0)
return A.CG(a,n,m,c!==m)}}l=new A.cp(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.e2(a,l)},
JS(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
JY(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.JU(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ES(a,r,l,k,!1)
else if(q===46)r=A.ES(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.eU(a.u,a.e,k.pop()))
break
case 94:k.push(A.K6(a.u,k.pop()))
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
case 62:A.JW(a,k)
break
case 38:A.JV(a,k)
break
case 63:p=a.u
k.push(A.EY(p,A.eU(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.EX(p,A.eU(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.JT(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ET(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.JZ(a.u,a.e,o)
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
JU(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ES(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Ka(s,o.x)[p]
if(n==null)A.w('No "'+p+'" in "'+A.IV(o)+'"')
d.push(A.kd(s,o,n))}else d.push(p)
return m},
JW(a,b){var s,r=a.u,q=A.ER(a,b),p=b.pop()
if(typeof p=="string")b.push(A.kb(r,p,q))
else{s=A.eU(r,a.e,p)
switch(s.w){case 11:b.push(A.CG(r,s,q,a.n))
break
default:b.push(A.CF(r,s,q))
break}}},
JT(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ER(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.eU(p,a.e,o)
q=new A.ol()
q.a=s
q.b=n
q.c=m
b.push(A.EW(p,r,q))
return
case-4:b.push(A.EZ(p,b.pop(),s))
return
default:throw A.b(A.kN("Unexpected state under `()`: "+A.r(o)))}},
JV(a,b){var s=b.pop()
if(0===s){b.push(A.kc(a.u,1,"0&"))
return}if(1===s){b.push(A.kc(a.u,4,"1&"))
return}throw A.b(A.kN("Unexpected extended operation "+A.r(s)))},
ER(a,b){var s=b.splice(a.p)
A.ET(a.u,a.e,s)
a.p=b.pop()
return s},
eU(a,b,c){if(typeof c=="string")return A.kb(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.JX(a,b,c)}else return c},
ET(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.eU(a,b,c[s])},
JZ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.eU(a,b,c[s])},
JX(a,b,c){var s,r,q=b.w
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
MC(a,b,c){var s,r=b.d
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
return A.aT(a,A.Ci(a,b),c,d,e)}if(s===6)return A.aT(a,p,c,d,e)&&A.aT(a,b.x,c,d,e)
if(q===7){if(A.aT(a,b,c,d.x,e))return!0
return A.aT(a,b,c,A.Ci(a,d),e)}if(q===6)return A.aT(a,b,c,p,e)||A.aT(a,b,c,d.x,e)
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
if(!A.aT(a,j,c,i,e)||!A.aT(a,i,e,j,c))return!1}return A.Fu(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.Fu(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.KX(a,b,c,d,e)}if(o&&q===10)return A.L1(a,b,c,d,e)
return!1},
Fu(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
KX(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.kd(a,b,r[o])
return A.Fe(a,p,null,c,d.y,e)}return A.Fe(a,b.y,null,c,d.y,e)},
Fe(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aT(a,b[s],d,e[s],f))return!1
return!0},
L1(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aT(a,r[s],c,q[s],e))return!1
return!0},
i0(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.f5(a))if(s!==6)r=s===7&&A.i0(a.x)
return r},
f5(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
Fd(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
Ak(a){return a>0?new Array(a):v.typeUniverse.sEA},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ol:function ol(){this.c=this.b=this.a=null},
oT:function oT(a){this.a=a},
oh:function oh(){},
k9:function k9(a){this.a=a},
Jo(){var s,r,q
if(self.scheduleImmediate!=null)return A.LF()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e5(new A.y6(s),1)).observe(r,{childList:true})
return new A.y5(s,r,q)}else if(self.setImmediate!=null)return A.LG()
return A.LH()},
Jp(a){self.scheduleImmediate(A.e5(new A.y7(a),0))},
Jq(a){self.setImmediate(A.e5(new A.y8(a),0))},
Jr(a){A.Cs(B.D,a)},
Cs(a,b){var s=B.c.N(a.a,1000)
return A.K0(s<0?0:s,b)},
Ep(a,b){var s=B.c.N(a.a,1000)
return A.K1(s<0?0:s,b)},
K0(a,b){var s=new A.k8(!0)
s.oF(a,b)
return s},
K1(a,b){var s=new A.k8(!1)
s.oG(a,b)
return s},
h(a){return new A.jC(new A.u($.C,a.i("u<0>")),a.i("jC<0>"))},
f(a,b){a.$2(0,null)
b.b=!0
return b.a},
a(a,b){A.Fk(a,b)},
e(a,b){b.aB(a)},
d(a,b){b.c4(A.F(a),A.ai(a))},
Fk(a,b){var s,r,q=new A.Ay(b),p=new A.Az(b)
if(a instanceof A.u)a.m5(q,p,t.z)
else{s=t.z
if(a instanceof A.u)a.bS(q,p,s)
else{r=new A.u($.C,t._)
r.a=8
r.c=a
r.m5(q,p,s)}}},
c(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.C.fs(new A.AR(s),t.H,t.S,t.z)},
bU(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.cT(null)
else{s=c.a
s===$&&A.y()
s.q()}return}else if(b===1){s=c.c
if(s!=null){r=A.F(a)
q=A.ai(a)
s.am(new A.am(r,q))}else{s=A.F(a)
r=A.ai(a)
q=c.a
q===$&&A.y()
q.bx(s,r)
c.a.q()}return}if(a instanceof A.jU){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.y()
r.t(0,s)
A.kw(new A.Aw(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.y()
s.tw(p,!1).X(new A.Ax(c,b),t.P)
return}}A.Fk(a,b)},
FM(a){var s=a.a
s===$&&A.y()
return new A.b5(s,A.n(s).i("b5<1>"))},
Js(a,b){var s=new A.o1(b.i("o1<0>"))
s.oB(a,b)
return s},
Fx(a,b){return A.Js(a,b)},
JO(a){return new A.jU(a,1)},
dY(a){return new A.jU(a,0)},
EV(a,b,c){return 0},
ia(a){var s
if(t.C.b(a)){s=a.gck()
if(s!=null)return s}return B.Q},
ix(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.F(q)
r=A.ai(q)
p=new A.u($.C,b.i("u<0>"))
o=s
n=r
m=A.kk(o,n)
if(m==null)o=new A.am(o,n==null?A.ia(o):n)
else o=m
p.cl(o)
return p}return b.i("A<0>").b(l)?l:A.bv(l,b)},
b8(a,b){var s=a==null?b.a(a):a,r=new A.u($.C,b.i("u<0>"))
r.aK(s)
return r},
I3(a,b){var s
if(!b.b(null))throw A.b(A.aH(null,"computation","The type parameter is not nullable"))
s=new A.u($.C,b.i("u<0>"))
A.cR(a,new A.rS(null,s,b))
return s},
BX(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.u($.C,b.i("u<p<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.rU(i,h,g,f)
try{for(n=J.E(a),m=t.P;n.k();){r=n.gn()
q=i.b
r.bS(new A.rT(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.cT(A.k([],b.i("B<0>")))
return n}i.a=A.ae(n,null,!1,b.i("0?"))}catch(l){p=A.F(l)
o=A.ai(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.kk(m,k)
if(j==null)m=new A.am(m,k==null?A.ia(m):k)
else m=j
n.cl(m)
return n}else{i.d=p
i.c=o}}return f},
BW(a,b,c,d){var s=new A.rN(d,null,b,c),r=$.C,q=new A.u(r,c.i("u<0>"))
if(r!==B.i)s=r.fs(s,c.i("0/"),t.K,t.l)
a.dD(new A.cc(q,2,null,s,a.$ti.i("@<1>").V(c).i("cc<1,2>")))
return q},
I1(a,b){var s,r,q,p=A.k([],b.i("B<jS<0>>"))
for(s=a.length,r=b.i("jS<0>"),q=0;q<a.length;a.length===s||(0,A.q)(a),++q)p.push(new A.jS(a[q],r))
if(p.length===0)return A.b8(A.k([],b.i("B<0>")),b.i("p<0>"))
s=new A.u($.C,b.i("u<p<0>>"))
A.JI(p,new A.rO(new A.an(s,b.i("an<p<0>>")),p,b))
return s},
L9(a){return a!=null},
JI(a,b){var s,r={},q=r.a=r.b=0,p=new A.z4(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.q)(a),++q)a[q].tc(p)},
kk(a,b){var s,r,q,p=$.C
if(p===B.i)return null
s=p.mD(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.mF(r,q)
return s},
f_(a,b){var s
if($.C!==B.i){s=A.kk(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gck()
if(b==null){A.mF(a,B.Q)
b=B.Q}}else b=B.Q
else if(t.C.b(a))A.mF(a,b)
return new A.am(a,b)},
JH(a,b,c){var s=new A.u(b,c.i("u<0>"))
s.a=8
s.c=a
return s},
bv(a,b){var s=new A.u($.C,b.i("u<0>"))
s.a=8
s.c=a
return s},
za(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.Cl()
b.cl(new A.am(new A.bz(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.lJ(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.eQ()
b.fT(p.a)
A.eQ(b,q)
return}b.a^=2
b.b.cN(new A.zb(p,b))},
eQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.fc(r.a,r.b)}return}s.a=b
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
f=!(f===k||f.gc7()===k.gc7())}else f=!1
if(f){f=g.a
r=f.c
f.b.fc(r.a,r.b)
return}j=$.C
if(j!==k)$.C=k
else j=null
f=s.a.c
if((f&15)===8)new A.zf(s,g,p).$0()
else if(q){if((f&1)!==0)new A.ze(s,m).$0()}else if((f&2)!==0)new A.zd(g,s).$0()
if(j!=null)$.C=j
f=s.c
if(f instanceof A.u){r=s.a.$ti
r=r.i("A<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.he(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.za(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.he(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
FC(a,b){if(t.ng.b(a))return b.fs(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.dk(a,t.z,t.K)
throw A.b(A.aH(a,"onError",u.w))},
L8(){var s,r
for(s=$.hU;s!=null;s=$.hU){$.km=null
r=s.b
$.hU=r
if(r==null)$.kl=null
s.a.$0()}},
Lw(){$.CQ=!0
try{A.L8()}finally{$.km=null
$.CQ=!1
if($.hU!=null)$.Db().$1(A.FX())}},
FK(a){var s=new A.o0(a),r=$.kl
if(r==null){$.hU=$.kl=s
if(!$.CQ)$.Db().$1(A.FX())}else $.kl=r.b=s},
Lt(a){var s,r,q,p=$.hU
if(p==null){A.FK(a)
$.km=$.kl
return}s=new A.o0(a)
r=$.km
if(r==null){s.b=p
$.hU=$.km=s}else{q=r.b
s.b=q
$.km=r.b=s
if(q==null)$.kl=s}},
kw(a){var s,r=null,q=$.C
if(B.i===q){A.AP(r,r,B.i,a)
return}if(B.i===q.gjt().a)s=B.i.gc7()===q.gc7()
else s=!1
if(s){A.AP(r,r,q,q.bR(a,t.H))
return}s=$.C
s.cN(s.eY(a))},
Cn(a,b){var s=null,r=b.i("cW<0>"),q=new A.cW(s,s,s,s,r)
q.aA(a)
q.l4()
return new A.b5(q,r.i("b5<1>"))},
No(a,b){return new A.cy(A.cz(a,"stream",t.K),b.i("cy<0>"))},
wQ(a,b,c,d,e){return d?new A.hL(b,null,c,a,e.i("hL<0>")):new A.cW(b,null,c,a,e.i("cW<0>"))},
dO(a,b,c){return new A.jD(b,a,c.i("jD<0>"))},
p7(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.F(q)
r=A.ai(q)
$.C.fc(s,r)}},
JF(a,b,c,d,e,f){var s=$.C,r=e?1:0,q=c!=null?32:0,p=A.o5(s,b,f),o=A.yl(s,c),n=d==null?A.AS():d
return new A.dW(a,p,o,s.bR(n,t.H),s,r|q,f.i("dW<0>"))},
Jn(a){return new A.y2(a)},
o5(a,b,c){var s=b==null?A.LJ():b
return a.dk(s,t.H,c)},
yl(a,b){if(b==null)b=A.LK()
if(t.b9.b(b))return a.fs(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.dk(b,t.z,t.K)
throw A.b(A.Q("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
La(a){},
Lc(a,b){$.C.fc(a,b)},
Lb(){},
EM(a,b){var s=$.C,r=new A.hw(s,b.i("hw<0>"))
A.kw(r.glG())
if(a!=null)r.c=s.bR(a,t.H)
return r},
Kv(a,b,c){var s=a.D()
if(s!==$.e7())s.aY(new A.AB(b,c))
else b.am(c)},
Kw(a,b,c){var s=a.D()
if(s!==$.e7())s.aY(new A.AC(b,c))
else b.cm(c)},
cR(a,b){var s=$.C
if(s===B.i)return s.jL(a,b)
return s.jL(a,s.eY(b))},
Eo(a,b){var s,r=$.C
if(r===B.i)return r.jK(a,b)
s=r.hA(b,t.hU)
return $.C.jK(a,s)},
pg(a,b,c,d){return A.Ls(a,c,b,d)},
Ls(a,b,c,d){return $.C.mH(c,b).aV(a,d)},
Lq(a,b,c,d,e){A.kp(d,e)},
kp(a,b){A.Lt(new A.AM(a,b))},
AN(a,b,c,d){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
AO(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
CR(a,b,c,d,e,f){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
FG(a,b,c,d){return d},
FH(a,b,c,d){return d},
FF(a,b,c,d){return d},
Lp(a,b,c,d,e){return null},
AP(a,b,c,d){var s,r
if(B.i!==c){s=B.i.gc7()
r=c.gc7()
d=s!==r?c.eY(d):c.jG(d,t.H)}A.FK(d)},
Lo(a,b,c,d,e){return A.Cs(d,B.i!==c?c.jG(e,t.H):e)},
Ln(a,b,c,d,e){e=c.tJ(e,t.H,t.hU)
return A.Ep(d,e)},
Lr(a,b,c,d){A.Gj(d)},
FE(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.BY(o,o,o,s,s)
r.C(0,e)}else r=o
s=new A.oa(c.glU(),c.glW(),c.glV(),c.glQ(),c.glR(),c.glP(),c.glm(),c.gjt(),c.glf(),c.gle(),c.glK(),c.glq(),c.gjc(),c.gjD(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.p0(s,q)
p=d.a
if(p!=null)s.as=new A.p_(s,p)}if(r!=null)s.at=new A.p1(s,r)
return s},
y6:function y6(a){this.a=a},
y5:function y5(a,b,c){this.a=a
this.b=b
this.c=c},
y7:function y7(a){this.a=a},
y8:function y8(a){this.a=a},
k8:function k8(a){this.a=a
this.b=null
this.c=0},
A8:function A8(a,b){this.a=a
this.b=b},
A7:function A7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jC:function jC(a,b){this.a=a
this.b=!1
this.$ti=b},
Ay:function Ay(a){this.a=a},
Az:function Az(a){this.a=a},
AR:function AR(a){this.a=a},
Aw:function Aw(a,b){this.a=a
this.b=b},
Ax:function Ax(a,b){this.a=a
this.b=b},
o1:function o1(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
ya:function ya(a){this.a=a},
yb:function yb(a){this.a=a},
yd:function yd(a){this.a=a},
ye:function ye(a,b){this.a=a
this.b=b},
yc:function yc(a,b){this.a=a
this.b=b},
y9:function y9(a){this.a=a},
jU:function jU(a,b){this.a=a
this.b=b},
oQ:function oQ(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
hK:function hK(a,b){this.a=a
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
rS:function rS(a,b,c){this.a=a
this.b=b
this.c=c},
rU:function rU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rT:function rT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
rN:function rN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nu:function nu(a,b){this.a=a
this.b=b},
rO:function rO(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b,c){this.c=a
this.d=b
this.$ti=c},
jS:function jS(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
z5:function z5(a,b){this.a=a
this.b=b},
z6:function z6(a,b){this.a=a
this.b=b},
z4:function z4(a,b,c){this.a=a
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
u:function u(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
z7:function z7(a,b){this.a=a
this.b=b},
zc:function zc(a,b){this.a=a
this.b=b},
zb:function zb(a,b){this.a=a
this.b=b},
z9:function z9(a,b){this.a=a
this.b=b},
z8:function z8(a,b){this.a=a
this.b=b},
zf:function zf(a,b,c){this.a=a
this.b=b
this.c=c},
zg:function zg(a,b){this.a=a
this.b=b},
zh:function zh(a){this.a=a},
ze:function ze(a,b){this.a=a
this.b=b},
zd:function zd(a,b){this.a=a
this.b=b},
zi:function zi(a,b){this.a=a
this.b=b},
zj:function zj(a,b,c){this.a=a
this.b=b
this.c=c},
zk:function zk(a,b){this.a=a
this.b=b},
o0:function o0(a){this.a=a
this.b=null},
aa:function aa(){},
wT:function wT(a,b){this.a=a
this.b=b},
wU:function wU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wV:function wV(a,b){this.a=a
this.b=b},
wW:function wW(a,b){this.a=a
this.b=b},
wR:function wR(a){this.a=a},
wS:function wS(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(){},
e0:function e0(){},
A1:function A1(a){this.a=a},
A0:function A0(a){this.a=a},
oR:function oR(){},
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
dW:function dW(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
nY:function nY(){},
y2:function y2(a){this.a=a},
y1:function y1(a){this.a=a},
k5:function k5(a,b,c,d){var _=this
_.c=a
_.a=b
_.b=c
_.$ti=d},
b1:function b1(){},
yn:function yn(a,b,c){this.a=a
this.b=b
this.c=c},
ym:function ym(a){this.a=a},
hJ:function hJ(){},
og:function og(){},
cb:function cb(a,b){this.b=a
this.a=null
this.$ti=b},
hv:function hv(a,b){this.b=a
this.c=b
this.a=null},
yY:function yY(){},
e_:function e_(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
zJ:function zJ(a,b){this.a=a
this.b=b},
hw:function hw(a,b){var _=this
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
zH:function zH(a,b){this.a=a
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
AB:function AB(a,b){this.a=a
this.b=b},
AC:function AC(a,b){this.a=a
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
eT:function eT(a,b,c){this.b=a
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
At:function At(a,b){this.a=a
this.b=b},
Av:function Av(a,b){this.a=a
this.b=b},
Au:function Au(a,b){this.a=a
this.b=b},
Ar:function Ar(a,b){this.a=a
this.b=b},
As:function As(a,b){this.a=a
this.b=b},
Aq:function Aq(a,b){this.a=a
this.b=b},
An:function An(a,b){this.a=a
this.b=b},
p0:function p0(a,b){this.a=a
this.b=b},
Am:function Am(a,b){this.a=a
this.b=b},
Al:function Al(a,b){this.a=a
this.b=b},
Ap:function Ap(a,b){this.a=a
this.b=b},
Ao:function Ao(a,b){this.a=a
this.b=b},
p_:function p_(a,b){this.a=a
this.b=b},
p1:function p1(a,b){this.a=a
this.b=b},
oZ:function oZ(){},
oa:function oa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
yU:function yU(a,b,c){this.a=a
this.b=b
this.c=c},
yW:function yW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yT:function yT(a,b){this.a=a
this.b=b},
yV:function yV(a,b,c){this.a=a
this.b=b
this.c=c},
oF:function oF(){},
zQ:function zQ(a,b,c){this.a=a
this.b=b
this.c=c},
zP:function zP(a,b){this.a=a
this.b=b},
zR:function zR(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
AM:function AM(a,b){this.a=a
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
BY(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.dg(d.i("@<0>").V(e).i("dg<1,2>"))
b=A.CW()}else{if(A.G0()===b&&A.G_()===a)return new A.dX(d.i("@<0>").V(e).i("dX<1,2>"))
if(a==null)a=A.CV()}else{if(b==null)b=A.CW()
if(a==null)a=A.CV()}return A.JG(a,b,c,d,e)},
EO(a,b){var s=a[b]
return s===a?null:s},
CD(a,b,c){if(c==null)a[b]=a
else a[b]=c},
CC(){var s=Object.create(null)
A.CD(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
JG(a,b,c,d,e){var s=c!=null?c:new A.yS(d)
return new A.jK(a,b,s,d.i("@<0>").V(e).i("jK<1,2>"))},
dE(a,b,c,d){if(b==null){if(a==null)return new A.bB(c.i("@<0>").V(d).i("bB<1,2>"))
b=A.CW()}else{if(A.G0()===b&&A.G_()===a)return new A.iI(c.i("@<0>").V(d).i("iI<1,2>"))
if(a==null)a=A.CV()}return A.JR(a,b,null,c,d)},
m(a,b,c){return A.G8(a,new A.bB(b.i("@<0>").V(c).i("bB<1,2>")))},
t(a,b){return new A.bB(a.i("@<0>").V(b).i("bB<1,2>"))},
JR(a,b,c,d,e){return new A.jV(a,b,new A.zF(d),d.i("@<0>").V(e).i("jV<1,2>"))},
mb(a){return new A.dh(a.i("dh<0>"))},
aN(a){return new A.dh(a.i("dh<0>"))},
ar(a,b){return A.Mm(a,new A.dh(b.i("dh<0>")))},
CE(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
hB(a,b,c){var s=new A.dZ(a,b,c.i("dZ<0>"))
s.c=a.e
return s},
KD(a,b){return J.v(a,b)},
KE(a){return J.a7(a)},
DS(a){if(a.length===0)return null
return B.b.ga1(a)},
ba(a,b,c){var s=A.dE(null,null,b,c)
a.a7(0,new A.us(s,b,c))
return s},
cJ(a,b,c){var s=A.dE(null,null,b,c)
s.C(0,a)
return s},
ut(a,b){var s,r,q=A.mb(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r)q.t(0,b.a(a[r]))
return q},
d2(a,b){var s=A.mb(b)
s.C(0,a)
return s},
Ij(a,b){var s=t.bP
return J.Dj(s.a(a),s.a(b))},
uI(a){var s,r
if(A.D1(a))return"{...}"
s=new A.a2("")
try{r={}
$.f0.push(a)
s.a+="{"
r.a=!0
a.a7(0,new A.uJ(r,s))
s.a+="}"}finally{$.f0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
C5(a){return new A.iL(A.ae(A.Ik(null),null,!1,a.i("0?")),a.i("iL<0>"))},
Ik(a){return 8},
dg:function dg(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
zm:function zm(a){this.a=a},
zl:function zl(a){this.a=a},
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
yS:function yS(a){this.a=a},
eR:function eR(a,b){this.a=a
this.$ti=b},
om:function om(a,b,c){var _=this
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
zF:function zF(a){this.a=a},
dh:function dh(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
zG:function zG(a){this.a=a
this.c=this.b=null},
dZ:function dZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
us:function us(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
ot:function ot(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
b2:function b2(){},
K:function K(){},
U:function U(){},
uH:function uH(a){this.a=a},
uJ:function uJ(a,b){this.a=a
this.b=b},
jW:function jW(a,b){this.a=a
this.$ti=b},
ov:function ov(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
oV:function oV(){},
iP:function iP(){},
cT:function cT(a,b){this.a=a
this.$ti=b},
iL:function iL(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
ou:function ou(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
cq:function cq(){},
k3:function k3(){},
ke:function ke(){},
FA(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.F(r)
q=A.a8(String(s),null,null)
throw A.b(q)}q=A.AE(p)
return q},
AE(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.oq(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.AE(a[s])
return a},
Kl(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.GY()
else s=new Uint8Array(o)
for(r=J.M(a),q=0;q<o;++q){p=r.h(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Kk(a,b,c,d){var s=a?$.GX():$.GW()
if(s==null)return null
if(0===c&&d===b.length)return A.Fb(s,b)
return A.Fb(s,b.subarray(c,d))},
Fb(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
Do(a,b,c,d,e,f){if(B.c.al(f,4)!==0)throw A.b(A.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.b(A.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.b(A.a8("Invalid base64 padding, more than two '=' characters",a,b))},
Jw(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
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
if(o<0||o>255)break;++q}throw A.b(A.aH(b,"Not a byte value at index "+q+": 0x"+B.c.ks(s.h(b,q),16),null))},
Jv(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.c.af(f,2),i=f&3,h=$.Dc()
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
return A.EA(a,r+1,c,-m-1)}throw A.b(A.a8(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.b(A.a8(k,a,r))},
Jt(a,b,c,d){var s=A.Ju(a,b,c),r=(d&3)+(s-b),q=B.c.af(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.GP()},
Ju(a,b,c){var s,r=c,q=r,p=0
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
EA(a,b,c,d){var s,r
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
HR(a){return B.cS.h(0,a.toLowerCase())},
DY(a,b,c){return new A.iJ(a,b)},
KH(a){return a.p()},
JP(a,b){return new A.zB(a,[],A.Ma())},
JQ(a,b,c){var s,r=new A.a2("")
A.EQ(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
EQ(a,b,c,d){var s=A.JP(b,c)
s.ix(a)},
Fc(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
oq:function oq(a,b){this.a=a
this.b=b
this.c=null},
zA:function zA(a){this.a=a},
or:function or(a){this.a=a},
zy:function zy(a,b,c){this.b=a
this.c=b
this.a=c},
Ai:function Ai(){},
Ah:function Ah(){},
kK:function kK(){},
oU:function oU(){},
kL:function kL(a){this.a=a},
A9:function A9(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
ic:function ic(a){this.a=a},
o3:function o3(a){this.a=0
this.b=a},
yk:function yk(a){this.c=null
this.a=0
this.b=a},
yg:function yg(){},
y3:function y3(a,b){this.a=a
this.b=b},
kR:function kR(){},
o2:function o2(){this.a=0},
yf:function yf(a,b){this.a=a
this.b=b},
pH:function pH(){},
hp:function hp(a){this.a=a},
o6:function o6(a,b){this.a=a
this.b=b
this.c=0},
l2:function l2(){},
oL:function oL(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b,c){this.a=a
this.b=b
this.$ti=c},
l4:function l4(){},
aB:function aB(){},
qE:function qE(a){this.a=a},
em:function em(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
m3:function m3(a,b){this.a=a
this.b=b},
tu:function tu(){},
m5:function m5(a){this.b=a},
zz:function zz(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
m4:function m4(a){this.a=a},
zC:function zC(){},
zD:function zD(a,b){this.a=a
this.b=b},
zB:function zB(a,b,c){this.c=a
this.a=b
this.b=c},
m8:function m8(){},
m9:function m9(a){this.a=a},
nd:function nd(){},
A6:function A6(a,b){this.a=a
this.b=b},
k7:function k7(){},
oN:function oN(a){this.a=a},
Ag:function Ag(a,b,c){this.a=a
this.b=b
this.c=c},
nK:function nK(){},
nL:function nL(){},
oX:function oX(a){this.b=this.a=0
this.c=a},
Aj:function Aj(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jv:function jv(a){this.a=a},
dj:function dj(a){this.a=a
this.b=16
this.c=0},
p2:function p2(){},
EK(a,b){var s=A.JD(a,b)
if(s==null)throw A.b(A.a8("Could not parse BigInt",a,null))
return s},
JA(a,b){var s,r,q=$.ci(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.bg(0,$.Dd()).fG(0,A.jF(s))
s=0
o=0}}if(b)return q.bA(0)
return q},
EC(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
JB(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.x.tL(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.EC(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.EC(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.ci()
l=A.bG(j,i)
return new A.aJ(l===0?!1:c,i,l)},
JD(a,b){var s,r,q,p,o
if(a==="")return null
s=$.GR().e8(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.JA(p,q)
if(o!=null)return A.JB(o,2,q)
return null},
bG(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
Cz(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
EB(a){var s
if(a===0)return $.ci()
if(a===1)return $.f8()
if(a===2)return $.GS()
if(Math.abs(a)<4294967296)return A.jF(B.c.iq(a))
s=A.Jx(a)
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
return new A.aJ(r===0?!1:o,s,r)}r=B.c.N(B.c.gmo(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.c.N(a,65536)}r=A.bG(r,s)
return new A.aJ(r===0?!1:o,s,r)},
Jx(a){var s,r,q,p,o,n,m,l,k
if(isNaN(a)||a==1/0||a==-1/0)throw A.b(A.Q("Value must be finite: "+a,null))
s=a<0
if(s)a=-a
a=Math.floor(a)
if(a===0)return $.ci()
r=$.GQ()
for(q=r.$flags|0,p=0;p<8;++p){q&2&&A.H(r)
r[p]=0}q=J.pl(B.f.gaa(r))
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
else k=n>0?l.bB(0,n):l
if(s)return k.bA(0)
return k},
CA(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.H(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.H(d)
d[s]=0}return b+c},
EI(a,b,c,d){var s,r,q,p,o,n=B.c.N(c,16),m=B.c.al(c,16),l=16-m,k=B.c.bB(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.c.dz(p,l)
r&2&&A.H(d)
d[s+n+1]=(o|q)>>>0
q=B.c.bB((p&k)>>>0,m)}r&2&&A.H(d)
d[n]=q},
ED(a,b,c,d){var s,r,q,p,o=B.c.N(c,16)
if(B.c.al(c,16)===0)return A.CA(a,b,o,d)
s=b+o+1
A.EI(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.H(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
JC(a,b,c,d){var s,r,q,p,o=B.c.N(c,16),n=B.c.al(c,16),m=16-n,l=B.c.bB(1,n)-1,k=B.c.dz(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.c.bB((q&l)>>>0,m)
s&2&&A.H(d)
d[r]=(p|k)>>>0
k=B.c.dz(q,n)}s&2&&A.H(d)
d[j]=k},
yh(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
Jy(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=B.c.af(r,16)}s&2&&A.H(e)
e[b]=r},
o4(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.H(e)
e[q]=r&65535
r=0-(B.c.af(r,16)&1)}},
EJ(a,b,c,d,e,f){var s,r,q,p,o,n
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
Jz(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.c.iI((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
Mu(a){return A.kt(a)},
BS(a,b){return new A.lx(new WeakMap(),a,b.i("lx<0>"))},
BT(a){},
z3(a,b){var s=$.GT()
s=s==null?null:new s(A.e5(A.N3(a,b),1))
return new A.ok(s,b.i("ok<0>"))},
aG(a){var s=A.ja(a,null)
if(s!=null)return s
throw A.b(A.a8(a,null,null))},
Mi(a){var s=A.IJ(a)
if(s!=null)return s
throw A.b(A.a8("Invalid double",a,null))},
HV(a,b){a=A.aK(a,new Error())
a.stack=b.l(0)
throw a},
ae(a,b,c,d){var s,r=c?J.DU(a,d):J.C0(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bD(a,b,c){var s,r=A.k([],c.i("B<0>"))
for(s=J.E(a);s.k();)r.push(s.gn())
if(b)return r
r.$flags=1
return r},
O(a,b){var s,r
if(Array.isArray(a))return A.k(a.slice(0),b.i("B<0>"))
s=A.k([],b.i("B<0>"))
for(r=J.E(a);r.k();)s.push(r.gn())
return s},
fC(a,b){var s=A.bD(a,!1,b)
s.$flags=3
return s},
dQ(a,b,c){var s,r,q,p,o
A.bb(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.b(A.aw(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.Ec(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.J8(a,b,c)
if(r)a=J.BL(a,c)
if(b>0)a=J.pp(a,b)
s=A.O(a,t.S)
return A.Ec(s)},
J8(a,b,c){var s=a.length
if(b>=s)return""
return A.IL(a,b,c==null||c>s?s:c)},
af(a,b,c){return new A.eq(a,A.C2(a,!1,b,c,!1,""))},
Mt(a,b){return a==null?b==null:a===b},
wX(a,b,c){var s=J.E(b)
if(!s.k())return a
if(c.length===0){do a+=A.r(s.gn())
while(s.k())}else{a+=A.r(s.gn())
while(s.k())a=a+c+A.r(s.gn())}return a},
Cu(){var s,r,q=A.IE()
if(q==null)throw A.b(A.Y("'Uri.base' is not supported"))
s=$.Ew
if(s!=null&&q===$.Ev)return s
r=A.nJ(q)
$.Ew=r
$.Ev=q
return r},
hO(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.n){s=$.GU()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e.v(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.S.charCodeAt(o)&a)!==0)p+=A.bs(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
Kf(a){var s,r,q
if(!$.GV())return A.Kg(a)
s=new URLSearchParams()
a.a7(0,new A.Af(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.A(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
Cl(){return A.ai(new Error())},
BP(a,b,c,d,e,f,g){var s=A.IM(a,b,c,d,e,f,g,0,!0)
return new A.aW(s==null?new A.rh(a,b,c,d,e,f,g,0).$0():s,0,!0)},
HM(){return new A.aW(Date.now(),0,!1)},
lo(a,b,c){var s="microsecond"
if(b<0||b>999)throw A.b(A.aw(b,0,999,s,null))
if(a<-864e13||a>864e13)throw A.b(A.aw(a,-864e13,864e13,"millisecondsSinceEpoch",null))
if(a===864e13&&b!==0)throw A.b(A.aH(b,s,"Time including microseconds is outside valid range"))
A.cz(c,"isUtc",t.y)
return a},
HN(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
DE(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ln(a){if(a>=10)return""+a
return"0"+a},
dv(a,b,c){return new A.aC(a+1000*b+1e6*c)},
fq(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.b(A.aH(b,"name","No enum value with that name"))},
ir(a){if(typeof a=="number"||A.bH(a)||a==null)return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
return A.Eb(a)},
DG(a,b){A.cz(a,"error",t.K)
A.cz(b,"stackTrace",t.l)
A.HV(a,b)},
kN(a){return new A.kM(a)},
Q(a,b){return new A.bz(!1,null,b,a)},
aH(a,b,c){return new A.bz(!0,a,b,c)},
kJ(a,b){return a},
aZ(a){var s=null
return new A.d7(s,s,!1,s,s,a)},
wq(a,b){return new A.d7(null,null,!0,a,b,"Value not in range")},
aw(a,b,c,d,e){return new A.d7(b,c,!0,a,d,"Invalid value")},
Eg(a,b,c,d){if(a<b||a>c)throw A.b(A.aw(a,b,c,d,null))
return a},
IP(a,b,c,d){return A.DQ(a,d,b,null,c)},
bc(a,b,c){if(0>a||a>c)throw A.b(A.aw(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aw(b,a,c,"end",null))
return b}return c},
bb(a,b){if(a<0)throw A.b(A.aw(a,0,null,b,null))
return a},
DP(a,b){var s=b.b
return new A.iA(s,!0,a,null,"Index out of range")},
lW(a,b,c,d,e){return new A.iA(b,!0,a,e,"Index out of range")},
DQ(a,b,c,d,e){if(0>a||a>=b)throw A.b(A.lW(a,b,c,d,e==null?"index":e))
return a},
Y(a){return new A.cU(a)},
Et(a){return new A.nD(a)},
x(a){return new A.bk(a)},
az(a){return new A.l7(a)},
DH(a){return new A.oi(a)},
a8(a,b,c){return new A.bj(a,b,c)},
I9(a,b,c){var s,r
if(A.D1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
$.f0.push(a)
try{A.L5(a,s)}finally{$.f0.pop()}r=A.wX(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
tr(a,b,c){var s,r
if(A.D1(a))return b+"..."+c
s=new A.a2(b)
$.f0.push(a)
try{r=s
r.a=A.wX(r.a,a,", ")}finally{$.f0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
L5(a,b){var s,r,q,p,o,n,m,l=a.gu(a),k=0,j=0
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
E0(a,b,c,d,e){return new A.ed(a,b.i("@<0>").V(c).V(d).V(e).i("ed<1,2,3,4>"))},
c6(a,b,c,d,e,f,g){var s
if(B.d===c){s=J.a7(a)
b=J.a7(b)
return A.hc(A.ax(A.ax($.f9(),s),b))}if(B.d===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.hc(A.ax(A.ax(A.ax($.f9(),s),b),c))}if(B.d===e){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
return A.hc(A.ax(A.ax(A.ax(A.ax($.f9(),s),b),c),d))}if(B.d===f){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
return A.hc(A.ax(A.ax(A.ax(A.ax(A.ax($.f9(),s),b),c),d),e))}if(B.d===g){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
return A.hc(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax($.f9(),s),b),c),d),e),f))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
e=J.a7(e)
f=J.a7(f)
g=J.a7(g)
g=A.hc(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax(A.ax($.f9(),s),b),c),d),e),f),g))
return g},
v8(a){var s,r=$.f9()
for(s=J.E(a);s.k();)r=A.ax(r,J.a7(s.gn()))
return A.hc(r)},
Fl(a,b){return 65536+((a&1023)<<10)+(b&1023)},
nJ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.Eu(a4<a4?B.a.A(a5,0,a4):a5,5,a3).gne()
else if(s===32)return A.Eu(B.a.A(a5,5,a4),0,a3).gne()}r=A.ae(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.FJ(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.FJ(a5,0,q,20,r)===20)r[7]=q
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
n=e}j="https"}k=!h}}}}if(k)return new A.cd(a4<a5.length?B.a.A(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.CI(a5,0,q)
else{if(q===0)A.hN(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.F7(a5,c,p-1):""
a=A.F5(a5,p,o,!1)
i=o+1
if(i<n){a0=A.ja(B.a.A(a5,i,n),a3)
d=A.Ab(a0==null?A.w(A.a8("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.F6(a5,n,m,a3,j,a!=null)
a2=m<l?A.Ac(a5,m+1,l,a3):a3
return A.kg(j,b,a,d,a1,a2,l<a4?A.F4(a5,l+1,a4):a3)},
Jj(a){return A.CL(a,0,a.length,B.n,!1)},
nI(a,b,c){throw A.b(A.a8("Illegal IPv4 address, "+a,b,c))},
Jg(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.nI("each part must be in the range 0..255",a,r)}A.nI("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.nI(k,a,q)}l=p+1
s&2&&A.H(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.nI(k,a,q)
p=l}A.nI("IPv4 address should contain exactly 4 parts",a,q)},
Jh(a,b,c){var s
if(b===c)throw A.b(A.a8("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Ji(a,b,c)
if(s!=null)throw A.b(s)
return!1}A.Ex(a,b,c)
return!0},
Ji(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
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
Ex(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.xv(a1)
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
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Jg(a1,o,a3,s,q*2)
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
B.f.ai(s,b,16,s,c)
B.f.jT(s,c,b,0)}}return s},
kg(a,b,c,d,e,f,g){return new A.kf(a,b,c,d,e,f,g)},
F1(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
hN(a,b,c){throw A.b(A.a8(c,a,b))},
Kc(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.F(q,"/")){s=A.Y("Illegal path character "+q)
throw A.b(s)}}},
Ab(a,b){if(a!=null&&a===A.F1(b))return null
return a},
F5(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.hN(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Kd(a,r,s)
if(p<s){o=p+1
q=A.Fa(a,B.a.ad(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Jh(a,r,s)
m=B.a.A(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.c9(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.Fa(a,B.a.ad(a,"25",o)?s+3:o,c,"%25")}else q=""
A.Ex(a,b,s)
return"["+B.a.A(a,b,s)+q+"]"}return A.Ki(a,b,c)},
Kd(a,b,c){var s=B.a.c9(a,"%",b)
return s>=b&&s<c?s:c},
Fa(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.CJ(a,s,!0)
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
m=A.CH(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.A(a,b,c)
if(r<c){j=B.a.A(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Ki(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.CJ(a,s,!0)
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
k=A.CH(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.A(a,b,c)
if(r<c){l=B.a.A(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
CI(a,b,c){var s,r,q
if(b===c)return""
if(!A.F3(a.charCodeAt(b)))A.hN(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.hN(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.A(a,b,c)
return A.Kb(r?a.toLowerCase():a)},
Kb(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
F7(a,b,c){if(a==null)return""
return A.kh(a,b,c,16,!1,!1)},
F6(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.kh(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.S(s,"/"))s="/"+s
return A.Kh(s,e,f)},
Kh(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.S(a,"/")&&!B.a.S(a,"\\"))return A.CK(a,!s||c)
return A.eY(a)},
Ac(a,b,c,d){if(a!=null){if(d!=null)throw A.b(A.Q("Both query and queryParameters specified",null))
return A.kh(a,b,c,256,!0,!1)}if(d==null)return null
return A.Kf(d)},
Kg(a){var s={},r=new A.a2("")
s.a=""
a.a7(0,new A.Ad(new A.Ae(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
F4(a,b,c){if(a==null)return null
return A.kh(a,b,c,256,!0,!1)},
CJ(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.Bg(s)
p=A.Bg(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.bs(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.A(a,b,b+3).toUpperCase()
return null},
CH(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.m0(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.dQ(s,0,null)},
kh(a,b,c,d,e,f){var s=A.F9(a,b,c,d,e,f)
return s==null?B.a.A(a,b,c):s},
F9(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.CJ(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.hN(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.CH(o)}if(p==null){p=new A.a2("")
l=p}else l=p
l.a=(l.a+=B.a.A(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.A(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
F8(a){if(B.a.S(a,"."))return!0
return B.a.bN(a,"/.")!==-1},
eY(a){var s,r,q,p,o,n
if(!A.F8(a))return a
s=A.k([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.B(s,"/")},
CK(a,b){var s,r,q,p,o,n
if(!A.F8(a))return!b?A.F2(a):a
s=A.k([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.b.ga1(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.F2(s[0])
return B.b.B(s,"/")},
F2(a){var s,r,q=a.length
if(q>=2&&A.F3(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.A(a,0,s)+"%3A"+B.a.ae(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Kj(a,b){if(a.vA("package")&&a.c==null)return A.FL(b,0,b.length)
return-1},
Ke(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.Q("Invalid URL encoding",null))}}return s},
CL(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.n===d)return B.a.A(a,b,c)
else p=new A.cj(B.a.A(a,b,c))
else{p=A.k([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.b(A.Q("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.Q("Truncated URI",null))
p.push(A.Ke(a,o+1))
o+=2}else p.push(r)}}return d.eZ(p)},
F3(a){var s=a|32
return 97<=s&&s<=122},
Eu(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.k([b-1],t.t)
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
if((j.length&1)===1)a=B.aq.vT(a,m,s)
else{l=A.F9(a,m,s,256,!0,!1)
if(l!=null)a=B.a.dl(a,m,s,l)}return new A.xu(a,j,c)},
FJ(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
EU(a){if(a.b===7&&B.a.S(a.a,"package")&&a.c<=0)return A.FL(a.a,a.e,a.f)
return-1},
FL(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
Ky(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
yi:function yi(){},
yj:function yj(){},
ok:function ok(a,b){this.a=a
this.$ti=b},
Af:function Af(a){this.a=a},
rh:function rh(a,b,c,d,e,f,g,h){var _=this
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
aC:function aC(a){this.a=a},
yZ:function yZ(){},
ad:function ad(){},
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
iA:function iA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cU:function cU(a){this.a=a},
nD:function nD(a){this.a=a},
bk:function bk(a){this.a=a},
l7:function l7(a){this.a=a},
mv:function mv(){},
jn:function jn(){},
oi:function oi(a){this.a=a},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(){},
o:function o(){},
R:function R(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
j:function j(){},
oP:function oP(){},
jo:function jo(){this.b=this.a=0},
jf:function jf(a){this.a=a},
mU:function mU(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
xv:function xv(a){this.a=a},
kf:function kf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
Ae:function Ae(a,b){this.a=a
this.b=b},
Ad:function Ad(a){this.a=a},
xu:function xu(a,b,c){this.a=a
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
od:function od(a,b,c,d,e,f,g){var _=this
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
Il(a){return a},
Ic(a){return a},
Co(a){return a},
Ia(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.Fh(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
I2(a){return new v.G.Promise(A.bV(new A.rR(a)))},
mr:function mr(a){this.a=a},
rR:function rR(a){this.a=a},
rP:function rP(a){this.a=a},
rQ:function rQ(a){this.a=a},
AI(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.Kp,a)
s[$.f7()]=a
return s},
cY(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.Kq,a)
s[$.f7()]=a
return s},
bV(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.Kr,a)
s[$.f7()]=a
return s},
p4(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.Ks,a)
s[$.f7()]=a
return s},
hT(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.Kt,a)
s[$.f7()]=a
return s},
CO(a){var s
if(typeof a=="function")throw A.b(A.Q("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.Ku,a)
s[$.f7()]=a
return s},
Kp(a){return a.$0()},
Kq(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
Kr(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
Ks(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
Kt(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
Ku(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
Fz(a){return a==null||A.bH(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.hM.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
pe(a){if(A.Fz(a))return a
return new A.Bl(new A.dX(t.mp)).$1(a)},
CZ(a,b){return a[b]},
CT(a,b,c){return a[b].apply(a,c)},
LZ(a,b){var s,r
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
a.then(A.e5(new A.Bs(r),1),A.e5(new A.Bt(r),1))
return s},
Fy(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
pc(a){if(A.Fy(a))return a
return new A.B0(new A.dX(t.mp)).$1(a)},
Bl:function Bl(a){this.a=a},
Bs:function Bs(a){this.a=a},
Bt:function Bt(a){this.a=a},
B0:function B0(a){this.a=a},
Gd(a,b){return Math.max(a,b)},
Ee(){return B.as},
Ef(){return $.BG()},
zv:function zv(){},
zw:function zw(a){this.a=a},
Hu(a,b,c){return J.Dh(a,b,c)},
lu:function lu(){},
a3:function a3(){},
pJ:function pJ(a){this.a=a},
pK:function pK(a){this.a=a},
pL:function pL(a,b){this.a=a
this.b=b},
pM:function pM(a){this.a=a},
pN:function pN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pO:function pO(a){this.a=a},
lq:function lq(a){this.$ti=a},
iE:function iE(a,b){this.a=a
this.$ti=b},
es:function es(a,b){this.a=a
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
E5(){throw A.b(A.Y(u.O))},
Jf(){throw A.b(A.Y("Cannot modify an unmodifiable Map"))},
mq:function mq(){},
nG:function nG(){},
as(a){var s,r,q,p,o="0123456789abcdef",n=a.length,m=new Uint8Array(n*2)
for(s=0,r=0;s<n;++s){q=a[s]
p=r+1
m[r]=o.charCodeAt(q>>>4&15)
r=p+1
m[p]=o.charCodeAt(q&15)}return A.dQ(m,0,null)},
ck:function ck(a){this.a=a},
c2:function c2(){this.a=null},
lQ:function lQ(){},
rW:function rW(){},
cX(a){var s=new Uint32Array(A.b7(A.k([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.oJ(s,r,a,q,new Uint32Array(16))},
oI:function oI(){},
zT:function zT(){},
oJ:function oJ(a,b,c,d,e){var _=this
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
pU:function pU(){},
iN:function iN(a){this.a=a},
ji:function ji(){},
uG:function uG(){},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
wC:function wC(){},
jj:function jj(a,b){this.b=a
this.c=b},
mZ:function mZ(a){this.a=a},
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
s=(p&1)<<31>>>0!==0?a0^3774873600:a0}}k=A.bw(s)
a5.$flags&2&&A.H(a5)
a5[0]=k
a5[1]=A.bw(r)
a5[2]=A.bw(q)
a5[3]=A.bw(p)},
DD(a,b){var s,r,q,p,o,n=4294967296,m=b.length
if(m===12){s=new Uint8Array(16)
B.f.cO(s,0,b)
s[15]=1
return s}r=new DataView(new ArrayBuffer(16))
q=8*m
r.setUint32(8,B.c.N(q,n),!1)
r.setUint32(12,B.c.al(q,n),!1)
p=J.bL(B.az.gaa(r),0,null)
o=new Uint32Array(4)
A.lj(o,a,b)
A.lj(o,a,p)
return J.bL(B.y.gaa(o),0,null)},
li:function li(a,b,c){this.c=a
this.d=b
this.a=c},
qW:function qW(){},
ob:function ob(){},
oc:function oc(){},
p9(a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=b1[b2],a6=b1[b2+1],a7=b1[b2+2],a8=b1[b2+3]
if($.kx()===B.P){a5=A.f1(a5)
a6=A.f1(a6)
a7=A.f1(a7)
a8=A.f1(a8)}a5^=b3[0]
a6^=b3[1]
a7^=b3[2]
a8^=b3[3]
s=(b3.length/4|0)-1
for(r=4,q=1;q<s;++q,a8=m,a7=n,a6=o,a5=p){p=B.ai[a5>>>24&255]^B.ag[a6>>>16&255]^B.ah[a7>>>8&255]^B.ak[a8&255]^b3[r]
o=B.ai[a6>>>24&255]^B.ag[a7>>>16&255]^B.ah[a8>>>8&255]^B.ak[a5&255]^b3[r+1]
n=B.ai[a7>>>24&255]^B.ag[a8>>>16&255]^B.ah[a5>>>8&255]^B.ak[a6&255]^b3[r+2]
m=B.ai[a8>>>24&255]^B.ag[a5>>>16&255]^B.ah[a6>>>8&255]^B.ak[a7&255]^b3[r+3]
r+=4}o=B.l[a5>>>24&255]
n=B.l[a6>>>16&255]
m=B.l[a7>>>8&255]
l=B.l[a8&255]
k=B.l[a6>>>24&255]
j=B.l[a7>>>16&255]
i=B.l[a8>>>8&255]
h=B.l[a5&255]
g=B.l[a7>>>24&255]
f=B.l[a8>>>16&255]
e=B.l[a5>>>8&255]
d=B.l[a6&255]
c=B.l[a8>>>24&255]
b=B.l[a5>>>16&255]
a=B.l[a6>>>8&255]
a0=B.l[a7&255]
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
FT(a){var s,r,q,p,o,n,m,l,k,j,i=a.ge2(),h=B.cR.h(0,i.gm(0))
if(h==null)throw A.b(A.Q("Invalid key length",null))
s=(h+1)*4
r=new Uint32Array(s)
q=J.Dh(B.y.gaa(r),r.byteOffset,i.gm(0))
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
n=B.c.al(m,k)
if(n===0)j=A.FP((j<<8|j>>>24)>>>0)^B.ct[B.c.iI(m,k)-1]<<24
else if(o&&n===4)j=A.FP(j)
r[m]=(j^r[m-k])>>>0}return r},
FP(a){return(B.l[a>>>24&255]<<24|B.l[a>>>16&255]<<16|B.l[a>>>8&255]<<8|B.l[a&255])>>>0},
f1(a){return((a&255)<<24|(a>>>8&255)<<16&16777215|(a>>>16&255)<<8&65535|a>>>24&255)>>>0},
qH:function qH(){},
qX:function qX(){},
yN:function yN(){},
mP:function mP(a,b){this.a=a
this.b=b},
kS:function kS(){},
kT:function kT(){},
kU:function kU(){},
kV:function kV(){},
pD:function pD(){},
FQ(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.mP("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.ee)){s=J.a0(a)
if(B.a.S(s,"TypeError: "))s=B.a.ae(s,11)
a=new A.ee(s,b.b)}return a},
FD(a,b,c){A.DG(A.FQ(a,c),b)},
Ko(a,b){return new A.di(new A.AA(a,b),t.fb)},
hV(a,b,c){return A.Lj(a,b,c)},
Lj(a,a0,a1){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
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
a1.f=new A.AJ(e)
a1.r=new A.AK(e,c,a)
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
l=A.ai(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.FQ(m,a)
k=l
j=a1.b
if(j>=4)A.w(a1.bD())
if((j&1)!==0){j=a1.gaM()
j.aG(d,k==null?B.Q:k)}s=15
return A.a(a1.q(),$async$hV)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.tN()
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
pG:function pG(a){this.a=a},
AA:function AA(a,b){this.a=a
this.b=b},
AJ:function AJ(a){this.a=a},
AK:function AK(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a){this.a=a},
pI:function pI(a){this.a=a},
Dz(a,b){return new A.ee(a,b)},
ee:function ee(a,b){this.a=a
this.b=b},
mj:function mj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=!1},
Iw(a,b){var s=t.N,r=A.k([],t.e8),q=$.D6()
if(!q.b.test(a))A.w(A.aH(a,"method","Not a valid method"))
return new A.v0(A.t(s,s),r,a,b,A.dE(new A.kU(),new A.kV(),s,s))},
v0:function v0(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
v1:function v1(a,b){this.a=a
this.b=b},
IS(a,b){var s=new Uint8Array(0),r=$.D6()
if(!r.b.test(a))A.w(A.aH(a,"method","Not a valid method"))
r=t.N
return new A.wt(s,a,b,A.dE(new A.kU(),new A.kV(),r,r))},
wt:function wt(a,b,c,d){var _=this
_.y=a
_.a=b
_.b=c
_.r=d
_.w=!1},
jr:function jr(){},
nc:function nc(a,b,c,d){var _=this
_.w=a
_.b=b
_.d=c
_.e=d},
Hv(a){return a.toLowerCase()},
ig:function ig(a,b,c){this.a=a
this.c=b
this.$ti=c},
Io(a){return A.N2("media type",a,new A.uK(a))},
C7(a,b,c){var s=t.N
if(c==null)s=A.t(s,s)
else{s=new A.ig(A.M_(),A.t(s,t.af),t.fo)
s.C(0,c)}return new A.fD(a.toLowerCase(),b.toLowerCase(),new A.cT(s,t.ph))},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
uK:function uK(a){this.a=a},
uM:function uM(a){this.a=a},
uL:function uL(){},
Mk(a){var s
a.mE($.H4(),"quoted string")
s=a.gk9().h(0,0)
return A.Gq(B.a.A(s,1,s.length-1),$.H3(),new A.B8(),null)},
B8:function B8(){},
Eq(a){var s=Date.now()
return new A.nv(a,new A.aW(s,0,!1))},
nv:function nv(a,b){this.a=a
this.c=b},
pC:function pC(a){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=0},
j7:function j7(){},
vm:function vm(a,b){this.a=a
this.b=b},
vn:function vn(){},
mC:function mC(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
vG:function vG(){},
zZ:function zZ(a){this.a=a},
vq:function vq(a,b,c){this.a=a
this.b=b
this.c=c},
vx:function vx(a){this.a=a},
vt:function vt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vu:function vu(){},
vv:function vv(a,b){this.a=a
this.b=b},
vw:function vw(){},
vr:function vr(a,b){this.a=a
this.b=b},
vs:function vs(){},
IC(a,b,c,d,e){var s=A.b8(null,t.H)
return new A.vy(b,c,new A.vF(a,B.av,null),e,d,s)},
ID(a){return 0.5+B.as.mU()},
j9:function j9(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
vy:function vy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.w=e
_.x=!1
_.z=_.y=null
_.Q=f
_.as=0},
vF:function vF(a,b,c){this.a=a
this.b=b
this.c=c},
vB:function vB(){},
vC:function vC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vz:function vz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vA:function vA(){},
vD:function vD(a){this.a=a},
vE:function vE(a){this.a=a},
A_:function A_(a,b){this.a=a
this.b=null
this.c=b},
iz(a,b){return new A.dy(a)},
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
lT:function lT(a,b,c,d,e){var _=this
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
vo:function vo(a){this.a=a},
vp:function vp(a){this.a=a},
HK(c2,c3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="recordId",b2="field",b3="imgs",b4="name",b5="expectedSha256",b6="session",b7="refId",b8="token",b9="id",c0="spec",c1="store"
switch(c2){case"open":s=c3.h(0,"stores")
r=c3.h(0,"manifestFingerprints")
if(!t.j.b(s)||!t.f.b(r))throw A.b(A.V("Malformed open payload."))
q=A.k([],t.d)
for(p=J.E(s);p.k();)q.push(A.DC(p.gn(),"stores"))
p=t.N
p=A.t(p,p)
for(o=r.gab(),o=o.gu(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string"&&typeof n.b=="string")p.j(0,m,A.D(n.b))}return new A.mu(q,p)
case"capabilities":return B.bB
case"health":return B.bE
case"close":return B.bC
case"fileBeginUpload":l=c3.h(0,"size")
if(!A.ah(l))throw A.b(A.V("Malformed fileBeginUpload payload."))
q=A.aQ(c3)
p=A.bh(c3,b1)
if(typeof c3.h(0,b2)=="string"){o=c3.h(0,b2)
o.toString
A.D(o)}else o=b3
if(typeof c3.h(0,b4)=="string"){n=c3.h(0,b4)
n.toString
A.D(n)}else n="blob.bin"
if(typeof c3.h(0,b5)=="string"){m=c3.h(0,b5)
m.toString
A.D(m)}else m=b0
return new A.lC(q,p,l,o,n,m,J.v(c3.h(0,"allowVolatileBlobs"),!0))
case"fileChunk":k=c3.h(0,"chunk")
if(!t.p.b(k))throw A.b(A.V("Malformed fileChunk payload."))
return new A.lD(A.bh(c3,b6),k)
case"fileFinish":return new A.lF(A.bh(c3,b6))
case"fileAbort":return new A.lB(A.bh(c3,b6))
case"filesList":q=A.aQ(c3)
p=A.bh(c3,b1)
if(typeof c3.h(0,b2)=="string"){o=c3.h(0,b2)
o.toString
A.D(o)}else o=b3
return new A.lO(q,p,o)
case"fileOpen":j=c3.h(0,"index")
if(j!=null&&!A.ah(j))throw A.b(A.V("Malformed fileOpen payload."))
q=A.aQ(c3)
p=A.bh(c3,b1)
if(typeof c3.h(0,b2)=="string"){o=c3.h(0,b2)
o.toString
A.D(o)}else o=b3
n=A.ah(j)?j:0
if(typeof c3.h(0,b7)=="string"){m=c3.h(0,b7)
m.toString
A.D(m)}else m=b0
return new A.lI(q,p,o,n,m)
case"fileCredit":i=c3.h(0,"bytes")
if(!A.ah(i))throw A.b(A.V("Malformed fileCredit payload."))
return new A.lE(A.bh(c3,"stream"),i)
case"fileRemove":j=c3.h(0,"index")
if(j!=null&&!A.ah(j))throw A.b(A.V("Malformed fileRemove payload."))
q=A.aQ(c3)
p=A.bh(c3,b1)
if(typeof c3.h(0,b2)=="string"){o=c3.h(0,b2)
o.toString
A.D(o)}else o=b3
n=A.ah(j)?j:0
if(typeof c3.h(0,b7)=="string"){m=c3.h(0,b7)
m.toString
A.D(m)}else m=b0
return new A.lM(q,p,o,n,m)
case"fileGc":h=c3.h(0,"blobGraceMs")
g=c3.h(0,"tmpGraceMs")
if(!A.ah(h)||!A.ah(g))throw A.b(A.V("Malformed fileGc payload."))
return new A.lG(h,g)
case"fileEnforceStorageCap":f=c3.h(0,"maxBytes")
if(!A.ah(f))throw A.b(A.V("Malformed fileEnforceStorageCap payload."))
return new A.lv(f)
case"fileStorageStatus":return B.bR
case"syncStart":e=c3.h(0,"baseUrl")
if(typeof e!="string")throw A.b(A.V("Malformed syncStart payload."))
if(typeof c3.h(0,"scopeId")=="string"){q=c3.h(0,"scopeId")
q.toString
A.D(q)}else q=b0
if(typeof c3.h(0,b8)=="string"){p=c3.h(0,b8)
p.toString
A.D(p)}else p=b0
return new A.nl(e,q,p)
case"syncStop":return B.bW
case"syncNow":return B.bS
case"syncPause":return B.bT
case"syncResume":return B.bU
case"syncUpdateAuth":if(typeof c3.h(0,b8)=="string"){q=c3.h(0,b8)
q.toString
A.D(q)}else q=b0
return new A.ns(q)
case"syncSetConnectivity":d=c3.h(0,"online")
if(!A.bH(d))throw A.b(A.V("Malformed syncSetConnectivity payload."))
return new A.nk(d)
case"syncStatus":return B.bV
case"get":return new A.lP(A.aQ(c3),A.bh(c3,b9),A.cE(c3))
case"rows":c=c3.h(0,"ids")
if(!t.j.b(c))throw A.b(A.V("Malformed rows payload."))
q=A.aQ(c3)
p=A.k([],t.s)
for(o=J.E(c);o.k();)p.push(A.D(o.gn()))
return new A.mS(q,p,A.cE(c3))
case"mutate":return new A.mk(A.aQ(c3),A.KC(c3.h(0,"mutation")),A.cE(c3))
case"query":return new A.mK(A.aQ(c3),A.eB(c3.h(0,c0)),A.cE(c3))
case"count":return new A.lf(A.aQ(c3),A.eB(c3.h(0,c0)),A.cE(c3))
case"countDistinct":return new A.le(A.aQ(c3),A.bh(c3,b2),A.eB(c3.h(0,c0)),A.cE(c3))
case"distinct":q=A.aQ(c3)
p=A.bh(c3,b2)
o=c3.h(0,c0)
return new A.lr(q,p,A.eB(o==null?B.j:o),A.cE(c3))
case"ids":return new A.lU(A.aQ(c3),A.eB(c3.h(0,c0)),A.cE(c3))
case"aggregate":b=c3.h(0,"fn")
a=A.C_(new A.al(B.cC,new A.qC(b),t.gx))
if(a==null)throw A.b(A.V("Unknown aggregate: "+A.r(b)))
return new A.kG(A.aQ(c3),a,A.bh(c3,b2),A.eB(c3.h(0,c0)),A.cE(c3))
case"explain":return new A.ly(A.aQ(c3),A.eB(c3.h(0,c0)),A.cE(c3))
case"search":return new A.mY(A.aQ(c3),A.IZ(c3.h(0,c0)),A.cE(c3))
case"txBegin":a0=c3.h(0,"readOnly")
if(!A.bH(a0))throw A.b(A.V("Malformed txBegin payload."))
a1=c3.h(0,"durability")
a2=A.C_(new A.al(B.cP,new A.qD(a1),t.mE))
if(typeof a1=="string"&&a2==null)throw A.b(A.V("Unknown tx durability: "+a1))
return new A.nw(a0,a2==null?B.bl:a2)
case"txCommit":case"txRollback":a3=c3.h(0,b6)
if(typeof a3!="string")throw A.b(A.V("Malformed tx payload."))
return c2==="txCommit"?new A.nx(a3):new A.nz(a3)
case"txSavepoint":case"txRollbackTo":case"txRelease":a3=c3.h(0,b6)
a4=c3.h(0,b4)
if(typeof a3!="string"||typeof a4!="string")throw A.b(A.V("Malformed savepoint payload."))
A:{if("txSavepoint"===c2){q=new A.nB(a3,a4)
break A}if("txRollbackTo"===c2){q=new A.nA(a3,a4)
break A}q=new A.ny(a3,a4)
break A}return q
case"watchOne":return new A.nQ(A.aQ(c3),A.bh(c3,b9))
case"watch":return new A.nR(A.aQ(c3),A.eB(c3.h(0,c0)))
case"watchCancel":a5=c3.h(0,"subscription")
if(typeof a5!="string")throw A.b(A.V("Malformed watchCancel payload."))
return new A.nP(a5)
case"analyze":if(typeof c3.h(0,c1)=="string"){q=c3.h(0,c1)
q.toString
A.D(q)}else q=b0
return new A.kI(q)
case"walCheckpoint":return B.bY
case"vacuum":return B.bX
case"pruneOutbox":return B.bQ
case"compact":a6=c3.h(0,c1)
a7=c3.h(0,"olderThanMs")
if(typeof a6!="string"||!A.ah(a7))throw A.b(A.V("Malformed compact payload."))
return new A.l6(a6,a7)
case"runMaintenance":a8=c3.h(0,"compactOlderThanMs")
if(!A.ah(a8))throw A.b(A.V("Malformed runMaintenance payload."))
return new A.mT(a8)
case"conflictsList":a6=c3.h(0,c1)
return new A.lb(typeof a6=="string"?a6:b0)
case"conflictGet":return new A.la(A.aQ(c3),A.bh(c3,b9))
case"conflictsResolve":a9=c3.h(0,"merged")
if(!t.f.b(a9))throw A.b(A.V("Malformed conflictsResolve payload."))
return new A.mQ(A.aQ(c3),A.bh(c3,b9),A.DC(a9,"merged"))
case"conflictsAcceptLocal":return new A.kD(A.aQ(c3),A.bh(c3,b9))
case"conflictsAcceptRemote":return new A.kE(A.aQ(c3),A.bh(c3,b9))
case"conflictsWatch":a6=c3.h(0,c1)
return new A.ld(typeof a6=="string"?a6:b0)
default:return b0}},
aQ(a){var s=a.h(0,"store")
if(typeof s!="string")throw A.b(A.V("Malformed store name."))
return s},
bh(a,b){var s=a.h(0,b)
if(typeof s!="string")throw A.b(A.V('Malformed field "'+b+'".'))
return s},
cE(a){var s=a.h(0,"session")
if(s==null)return null
if(typeof s!="string")throw A.b(A.V("Malformed session id."))
return s},
DC(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.V('Malformed field "'+b+'".'))},
L7(a){var s
A:{if(a instanceof A.eI){s="ValidationException"
break A}if(a instanceof A.eH){s="UniqueConstraintException"
break A}if(a instanceof A.ex){s="NotNullConstraintException"
break A}if(a instanceof A.fe){s="CheckConstraintException"
break A}if(a instanceof A.fO){s="PrimaryKeyConstraintException"
break A}if(a instanceof A.fx){s="ForeignKeyConstraintException"
break A}if(a instanceof A.hh){s="UnsupportedSchemaFeatureError"
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
KJ(a){var s
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
KC(a){var s,r,q,p,o,n="record",m="records",l="id",k=t.f
if(!k.b(a))throw A.b(A.V("Malformed mutation payload."))
s=t.N
r=a.aT(0,new A.AG(),s,t.z)
q=r.h(0,"kind")
switch(q){case"put":return new A.iU(A.p8(r.h(0,n),n))
case"upsert":return new A.iX(A.p8(r.h(0,n),n))
case"putAll":return new A.iV(A.FO(r.h(0,m),m))
case"upsertAll":return new A.iY(A.FO(r.h(0,m),m))
case"patch":return new A.iR(A.AL(r.h(0,l),l),A.p8(r.h(0,"changes"),"changes"))
case"patchAll":p=r.h(0,"patches")
if(!k.b(p))throw A.b(A.V("Malformed patchAll patches."))
k=A.t(s,t.G)
for(s=p.gab(),s=s.gu(s);s.k();){o=s.gn()
k.j(0,J.a0(o.a),A.p8(o.b,"patches"))}return new A.iS(k)
case"archive":return new A.iQ(A.AL(r.h(0,l),l))
case"restore":return new A.iW(A.AL(r.h(0,l),l))
case"purge":return new A.iT(A.AL(r.h(0,l),l))
default:throw A.b(A.V("Unknown mutation kind: "+A.r(q)))}},
AL(a,b){if(typeof a=="string")return a
throw A.b(A.V('Malformed mutation field "'+b+'".'))},
p8(a,b){var s,r,q
if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),q.b)}return s}throw A.b(A.V('Malformed mutation field "'+b+'".'))},
FO(a,b){var s,r
if(t.j.b(a)){s=A.k([],t.d)
for(r=J.E(a);r.k();)s.push(A.p8(r.gn(),b))
return s}throw A.b(A.V('Malformed mutation field "'+b+'".'))},
eB(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="predicate",a=null,a0=t.f
if(!a0.b(a1))throw A.b(A.V("Malformed query spec."))
s=a1.aT(0,new A.wl(),t.N,t.z)
r=new A.wm()
q=s.h(0,"where")
p=s.h(0,"orGroups")
o=s.h(0,"order")
n=s.h(0,"select")
m=s.h(0,"limit")
l=s.h(0,"cursor")
k=r.$1(q)
j=A.k([],t.ae)
i=t.j
if(i.b(p))for(h=J.E(p);h.k();)j.push(r.$1(h.gn()))
a0=a0.b(s.h(0,b))?A.C9(s.h(0,b)):a
h=A.k([],t.gc)
if(i.b(o))for(g=J.E(o);g.k();)h.push(A.IO(g.gn()))
g=A.ah(m)?m:a
f=J.v(s.h(0,"all"),!0)
if(i.b(n)){i=A.k([],t.s)
for(e=J.E(n);e.k();)i.push(J.a0(e.gn()))}else i=a
e=J.v(s.h(0,"includeArchived"),!0)
d=J.v(s.h(0,"includeHidden"),!0)
c=typeof l=="string"?l:a
return new A.wk(k,j,a0,h,g,f,i,e,d,c,J.v(s.h(0,"backward"),!0))},
Ed(a){var s,r,q,p,o,n,m,l="Malformed query condition."
if(!t.f.b(a))throw A.b(A.V(l))
s=a.aT(0,new A.wh(),t.N,t.z)
r=s.h(0,"field")
q=s.h(0,"op")
if(typeof r!="string"||typeof q!="string")throw A.b(A.V(l))
p=A.C_(new A.al(B.cv,new A.wi(q),t.mz))
if(p==null)throw A.b(A.V("Unknown query operator: "+q))
o=A.pd(s.h(0,"value"))
n=t.j
if(n.b(s.h(0,"values"))){m=[]
for(n=J.E(n.a(s.h(0,"values")));n.k();)m.push(A.pd(n.gn()))
n=m}else n=null
return new A.eA(r,p,o,n)},
C9(a){var s,r,q="children"
if(!t.f.b(a))throw A.b(A.V("Malformed predicate tree."))
s=a.aT(0,new A.vK(),t.N,t.z)
r=new A.vJ()
switch(s.h(0,"kind")){case"leaf":return new A.iK(A.Ed(s))
case"not":return new A.j4(A.C9(s.h(0,"child")))
case"all":return new A.i8(r.$1(s.h(0,q)))
case"any":return new A.i9(r.$1(s.h(0,q)))
default:throw A.b(A.V("Unknown predicate node kind: "+A.r(s.h(0,"kind"))))}},
IO(a){var s,r,q="Malformed order term."
if(!t.f.b(a))throw A.b(A.V(q))
s=a.aT(0,new A.wj(),t.N,t.z)
r=s.h(0,"field")
if(typeof r!="string")throw A.b(A.V(q))
return new A.mJ(r,J.v(s.h(0,"desc"),!0))},
IZ(a){var s,r,q,p
if(!t.f.b(a))throw A.b(A.V("Malformed search spec."))
s=a.aT(0,new A.wB(),t.N,t.z)
r=s.h(0,"term")
if(typeof r!="string")throw A.b(A.V("Malformed search term."))
q=s.h(0,"limit")
p=A.ah(q)?q:null
return new A.wA(r,p,J.v(s.h(0,"all"),!0),J.v(s.h(0,"includeArchived"),!0),J.v(s.h(0,"includeHidden"),!0))},
HL(a){return new A.fm(a)},
HQ(a){return new A.fn(a)},
I7(a){return new A.fA(a)},
Hq(a){return new A.fa(a)},
HW(a){return new A.fr(a)},
Em(a){return new A.nn(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w)},
hY(a){var s,r,q
if(a instanceof A.aW)return A.m(["__lp_t","datetime","v",a.a],t.N,t.K)
if(t.p.b(a)){s=t.N
return A.m(["__lp_t","bytes","v",B.aq.gf3().v(a)],s,s)}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.hY(r.gn()))
return s}if(t.f.b(a)){s=A.t(t.N,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,J.a0(q.a),A.hY(q.b))}return s}if(a==null||A.bH(a)||typeof a=="number"||typeof a=="string")return a
throw A.b(A.V("Value of type "+J.c_(a).l(0)+" is not wire-safe."))},
pd(a){var s,r,q,p,o,n,m,l="Malformed bytes wire value."
if(t.f.b(a)){r=a.h(0,"__lp_t")
q=J.dn(r)
if(q.R(r,"datetime")){s=a.h(0,"v")
if(A.ah(s))return new A.aW(A.lo(s,0,!0),0,!0)
throw A.b(A.V("Malformed datetime wire value."))}if(q.R(r,"bytes")){s=a.h(0,"v")
if(typeof s=="string")try{q=B.ar.v(s)
return q}catch(p){if(t.Y.b(A.F(p)))throw A.b(A.V(l))
else throw p}throw A.b(A.V(l))}q=A.t(t.N,t.X)
for(o=a.gab(),o=o.gu(o);o.k();){n=o.gn()
m=n.a
if(typeof m=="string")q.j(0,m,A.pd(n.b))}return q}if(t.j.b(a)){q=[]
for(o=J.E(a);o.k();)q.push(A.pd(o.gn()))
return q}return a},
V(a){return new A.jz(a)},
qC:function qC(a){this.a=a},
qD:function qD(a){this.a=a},
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
fv:function fv(a){this.a=a},
lJ:function lJ(a){this.a=a},
fu:function fu(a){this.a=a},
fs:function fs(a){this.a=a},
h7:function h7(a){this.a=a},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
v2:function v2(){},
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
AG:function AG(){},
wk:function wk(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
wl:function wl(){},
wm:function wm(){},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wh:function wh(){},
wi:function wi(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
cL:function cL(){},
vK:function vK(){},
vJ:function vJ(){},
iK:function iK(a){this.a=a},
j4:function j4(a){this.a=a},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
mJ:function mJ(a,b){this.a=a
this.b=b},
wj:function wj(){},
cB:function cB(a,b){this.a=a
this.b=b},
wA:function wA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wB:function wB(){},
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
kG:function kG(a,b,c,d,e){var _=this
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
dR:function dR(a,b){this.a=a
this.b=b},
nw:function nw(a,b){this.a=a
this.b=b},
nx:function nx(a){this.a=a},
nz:function nz(a){this.a=a},
nB:function nB(a,b){this.a=a
this.b=b},
nA:function nA(a,b){this.a=a
this.b=b},
ny:function ny(a,b){this.a=a
this.b=b},
nQ:function nQ(a,b){this.a=a
this.b=b},
nR:function nR(a,b){this.a=a
this.b=b},
nP:function nP(a){this.a=a},
kI:function kI(a){this.a=a},
nO:function nO(){},
nM:function nM(){},
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
kD:function kD(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b},
ld:function ld(a){this.a=a},
ag:function ag(){},
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
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fA:function fA(a){this.a=a},
fa:function fa(a){this.a=a},
fr:function fr(a){this.a=a},
h0:function h0(a){this.a=a},
mX:function mX(a,b){this.a=a
this.b=b},
fk:function fk(a){this.a=a},
fj:function fj(a){this.a=a},
hd:function hd(a){this.a=a},
hl:function hl(a){this.a=a},
fQ:function fQ(a){this.a=a},
fh:function fh(a){this.a=a},
nn:function nn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
xb:function xb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nl:function nl(a,b,c){this.a=a
this.b=b
this.c=c},
nr:function nr(){},
ng:function ng(){},
nh:function nh(){},
nj:function nj(){},
ns:function ns(a){this.a=a},
nk:function nk(a){this.a=a},
np:function np(){},
nm:function nm(a){this.a=a},
ni:function ni(a){this.a=a},
nq:function nq(a){this.a=a},
no:function no(a){this.a=a},
kO:function kO(){},
jz:function jz(a){this.a=a},
Ey(a){var s
if(t.m.b(a))s=J.v(a.name,"NotFoundError")||J.v(a.name,"TypeMismatchError")
else s=!1
return s},
xK:function xK(a){this.b=a
this.d=null},
xL:function xL(a){this.a=a},
ox:function ox(a){this.a=a},
ak(a){var s,r=new A.a2("")
A.ch(r,a)
s=r.a
return s.charCodeAt(0)==0?s:s},
D5(a){var s,r,q
for(s=new A.mU(a),r=0;s.k();){q=s.d
if(q<128)++r
else if(q<2048)r+=2
else r=q<65536?r+3:r+4}return r},
Kx(a){var s
if(!isFinite(a))return B.x.l(a)
s=B.x.l(a)
if(B.a.c6(s,".0"))s=B.a.A(s,0,s.length-2)
return s==="-0"?"0":s},
ch(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
if(b==null){a.a+="null"
return 4}if(A.bH(b)){s=b?"true":"false"
a.a+=s
return b?4:5}if(A.ah(b)){r=B.c.l(b)
a.a+=r
return r.length}if(typeof b=="number"){r=A.Kx(b)
a.a+=r
return r.length}if(typeof b=="number"){r=B.x.l(b)
a.a+=r
return r.length}if(typeof b=="string"){r=B.h.a6(b,h)
a.a+=r
return A.D5(r)}if(t.j.b(b)){a.a+="["
for(q=1,p=0;s=J.M(b),p<s.gm(b);++p){if(p>0){a.a+=",";++q}q+=A.ch(a,s.h(b,p))}a.a+="]"
return q+1}if(t.f.b(b)){o=A.k([],t.l5)
for(s=J.E(b.gK());s.k();){n=s.gn()
r=J.a0(n)
if(B.b.bL(o,new A.BD(r)))throw A.b(A.Q('Cannot canonicalize map: keys collide after toString() ("'+r+'").',h))
o.push(new A.a4(r,n))}B.b.cj(o,new A.BE())
a.a+="{"
for(s=o.length,q=1,m=!0,l=0;l<o.length;o.length===s||(0,A.q)(o),++l,m=!1){k=o[l]
if(!m){a.a+=",";++q}j=B.h.a6(k.a,h)
a.a+=j
i=A.D5(j)
a.a+=":"
q=q+i+1+A.ch(a,b.h(0,k.b))}a.a+="}"
return q+1}throw A.b(A.Q("Cannot canonicalize value of type "+J.c_(b).l(0),h))},
BD:function BD(a){this.a=a},
BE:function BE(){},
J2(a){var s,r,q,p=A.af("(\\d+)\\.(\\d+)(?:\\.(\\d+))?",!0,!1).e8(a)
if(p==null)return B.dg
s=p.b
r=s[1]
r.toString
r=A.aG(r)
q=s[2]
q.toString
q=A.aG(q)
s=s[3]
s=A.ja(s==null?"":s,null)
return new A.eV(r,q,s==null?0:s)},
El(a,b,c){var s,r=A.J2(a),q=r.a
if(q<=b)s=q===b&&r.b>=c
else s=!0
return s},
eF(a,b){return A.J3(a,b)},
J3(a,a0){var s=0,r=A.h(t.gE),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eF=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:d=J
c=J
s=3
return A.a(a.b0("SELECT sqlite_version() AS v"),$async$eF)
case 3:g=d.S(c.bZ(a2),"v")
g.toString
A.D(g)
k=t.v
d=A
c=A
b=J
s=4
return A.a(a.b0("PRAGMA compile_options"),$async$eF)
case 4:j=d.O(new c.bF(b.bM(a2,new A.wL(),t.X),k),k.i("o.E"))
n=B.b.bL(j,new A.wM())
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
k=a0===B.ba
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
case 18:case 14:h=A.El(g,3,37)
k=k&&J.v(m,"wal")
q=new A.n8(g,h,k,n,a0)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eF,r)},
mB:function mB(a,b){this.a=a
this.b=b},
n8:function n8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
wL:function wL(){},
wM:function wM(){},
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
pR:function pR(a,b){this.a=a
this.b=b},
pS:function pS(){},
pT:function pT(){},
Dn(a){return new Uint8Array(A.b7(a))},
ru:function ru(){},
pq:function pq(a,b,c){this.b=a
this.c=b
this.d=c},
CY(a,b){var s=null,r=a.b
switch(r.a){case 0:case 5:case 8:if(typeof b!="string")return B.ck
if(r===B.I){r=a.f
r.toString
r=!B.b.F(r,b)}else r=!1
if(r)return B.cq
return s
case 1:case 4:return!A.ah(b)?B.cl:s
case 2:return typeof b!="number"?B.cm:s
case 3:return!A.bH(b)?B.cn:s
case 6:return!t.f.b(b)&&!t.j.b(b)?B.co:s
case 7:return!t.j.b(b)?B.cp:s}},
dm(a,b,c,d,e,a0){var s,r,q,p,o,n,m,l,k,j,i=a.gd8(),h=t.N,g=t.X,f=A.m(["id",e],h,g)
for(s=a.c,r=s.length,q=a.a+"\x00",p=c==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=c
l=n.a
f.j(0,l,A.CN(n,a0.h(0,l),new Uint8Array(A.b7(B.e.v(q+l+"\x00"+e))),m))}k=A.t(h,g)
for(h=new A.aM(a0,A.n(a0).i("aM<1,2>")).gu(0);h.k();){j=h.d
g=j.a
if(g==="id"||g==="archived"||i.F(0,g))continue
k.j(0,g,j.b)}f.j(0,"extra",k.a===0?"":A.ak(k))
f.j(0,"archived",b?1:0)
f.j(0,"hidden",0)
return f},
G5(a,b,c,d,e,f){var s
if(d==null)s=null
else s=d
return A.CN(b,c,new Uint8Array(A.b7(B.e.v(a.a+"\x00"+b.a+"\x00"+f))),s)},
LD(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l,k,j=b.gd8()
a.push(f)
for(s=b.c,r=s.length,q=b.a+"\x00",p=d==null,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
if(p)m=null
else m=d
l=n.a
a.push(A.CN(n,g.h(0,l),new Uint8Array(A.b7(B.e.v(q+l+"\x00"+f))),m))}k=A.t(t.N,t.X)
for(s=g.gab(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id"||q==="archived"||j.F(0,q))continue
k.j(0,q,r.b)}a.push(k.a===0?"":A.ak(k))
a.push(c?1:0)
a.push(0)},
cf(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i="archived",h=t.N,g=t.X,f=A.m(["id",b.h(0,"id")],h,g)
for(s=a.c,r=s.length,q=a.a,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m=b.h(0,n)
l=A.a6(b.h(0,"id"))
f.j(0,n,A.Fo(o,m,c,d,l==null?"":l,q))}f.j(0,i,J.v(b.h(0,i),1))
k=b.h(0,"extra")
if(typeof k=="string"&&k.length!==0){j=B.h.av(k,null)
if(t.f.b(j))f.C(0,A.ba(j,h,g))}return f},
Me(a,b,c,d){var s,r=A.k([],t.d)
for(s=J.E(b);s.k();)r.push(A.cf(a,s.gn(),c,d))
return r},
Mf(a,b,c,d,e){var s,r,q,p,o,n,m=A.k([],t.fj)
for(s=d.length,r=!1,q=0;q<d.length;d.length===s||(0,A.q)(d),++q){p=d[q]
if(p==="id")continue
if(p==="archived"){r=!0
continue}m.push(new A.a4(p,a.f7(p)))}s=A.k([],t.d)
for(o=J.E(b),n=a.a;o.k();)s.push(A.KB(o.gn(),m,r,c,e,n))
return s},
KB(a,b,c,d,e,f){var s,r,q,p,o,n,m="archived",l=A.m(["id",a.h(0,"id")],t.N,t.X)
for(s=b.length,r=0;r<b.length;b.length===s||(0,A.q)(b),++r){q=b[r]
p=q.a
o=q.b
if(o==null)continue
q=a.h(0,p)
n=A.a6(a.h(0,"id"))
l.j(0,p,A.Fo(o,q,d,e,n==null?"":n,f))}if(c)l.j(0,m,J.v(a.h(0,m),1))
return l},
Fo(a,b,c,d,e,f){var s,r,q,p,o=null
if(b==null)return o
if(a.e){if(c==null)s=o
else s=c
if(s==null)throw A.b(A.x('Field "'+a.a+u.C))
if(typeof b!="string")throw A.b(A.jp("Corrupt "+f+' row: encrypted field "'+a.a+'" must be TEXT ciphertext but is '+J.c_(b).l(0)+"."))
r=B.n.eZ(s.u1(B.ar.v(b),new Uint8Array(A.b7(B.e.v(f+"\x00"+a.a+"\x00"+e)))))
q=a.b
A:{if(B.B===q){p=r==="1"||r==="true"
break A}if(B.S===q||B.U===q){p=A.aG(r)
break A}if(B.T===q){p=A.Mi(r)
break A}if(B.V===q||B.W===q){p=B.h.av(r,o)
break A}p=r
break A}return p}p=a.b
if(p===B.B)return J.v(b,1)
if(p===B.V||p===B.W){if(typeof b!="string")throw A.b(A.jp("Corrupt "+f+' row: field "'+a.a+'" must be TEXT JSON but is '+J.c_(b).l(0)+"."))
return B.h.av(b,o)}return b},
CN(a,b,c,d){var s,r
if(b==null)return null
if(a.e){if(d==null)throw A.b(A.x('Field "'+a.a+u.C))
switch(a.b.a){case 3:s=J.v(b,!0)?"1":"0"
break
case 1:case 4:case 2:s=J.a0(b)
break
case 6:case 7:s=A.ak(b)
break
default:A.D(b)
s=b}r=d.uJ(B.e.v(s),c)
return B.aq.gf3().v(r)}switch(a.b.a){case 3:return J.v(b,!0)?1:0
case 6:case 7:return A.ak(b)
default:return b}},
bf(a,b){var s,r,q,p,o,n="archived",m=a.gd8(),l=b.h(0,"id"),k=A.m(["id",l],t.N,t.X)
for(l=a.c,s=l.length,r=0;r<l.length;l.length===s||(0,A.q)(l),++r){q=l[r]
p=q.a
o=b.h(0,p)
if(o!=null)k.j(0,p,q.b===B.B?J.v(o,!0):o)}for(l=b.gab(),l=l.gu(l);l.k();){s=l.gn()
p=s.a
if(p==="id"||p==="archived"||m.F(0,p))continue
k.j(0,p,s.b)}if(J.v(b.h(0,n),!0))k.j(0,n,!0)
return k},
AU(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=b.gd8(),i=A.k([],t.iE)
i.push(new A.a4("id",d==null?c.h(0,"id"):d))
for(s=b.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=c.h(0,o)
if(n!=null)i.push(new A.a4(o,p.b===B.B?J.v(n,!0):n))}for(s=c.gab(),s=s.gu(s);s.k();){r=s.gn()
o=r.a
if(o==="id"||o==="archived"||j.F(0,o))continue
i.push(new A.a4(o,r.b))}if(J.v(c.h(0,"archived"),!0))i.push(B.de)
B.b.cj(i,new A.AV())
a.a+="{"
for(s=i.length,m=1,l=!0,q=0;q<i.length;i.length===s||(0,A.q)(i),++q,l=!1){r=i[q]
if(!l){a.a+=",";++m}k=B.h.a6(r.a,null)
a.a+=k
o=A.D5(k)
a.a+=":"
m=m+o+1+A.ch(a,r.b)}a.a+="}"
return m+1},
d1:function d1(a,b){this.a=a
this.b=b},
AV:function AV(){},
DF(a){if(a==null)return""
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
rr:function rr(){},
rq:function rq(){},
rs:function rs(){},
rp:function rp(a){this.a=a},
HP(a){return'"'+A.z(a,'"','""')+'"'},
HO(a,b){var s,r,q,p=a.a,o=J.M(p),n=b.a,m=J.M(n)
if(o.gm(p)>=m.gm(n))return!1
for(s=a.$ti.y[1],r=b.$ti.y[1],q=0;q<o.gm(p);++q)if(!J.v(s.a(o.h(p,q)),r.a(m.h(n,q))))return!1
return!0},
qf:function qf(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
io:function io(a){this.a=a},
ro:function ro(a){this.a=a},
rn:function rn(){},
rm:function rm(a){this.a=a},
rl:function rl(a,b){this.a=a
this.b=b},
ri:function ri(a){this.a=a},
rj:function rj(a){this.a=a},
rk:function rk(){},
ay(a,b){return new A.eI(b,a)},
jp(a){return new A.cO(a)},
Ch(a){return new A.fW(a)},
Ei(a){return new A.h_(a)},
aP(a){return new A.eC(a)},
rM(a){return new A.fz(a)},
Cm(a){return new A.h5(a)},
E2(a){return new A.fG(a)},
DB(a){return new A.fi(a)},
BQ(a){return new A.ej(a)},
Gu(a,b){var s,r="UNIQUE constraint failed",q=J.a0(a),p=a instanceof A.c8,o=p?a.c:null,n=p?a.c&255:null
if(o!==1555)p=B.a.F(q,"PRIMARY KEY")&&!B.a.F(q,r)
else p=!0
if(p)return new A.fO("PRIMARY KEY constraint violated.")
if(o===2067||B.a.F(q,r)){s=A.Fs(q,"UNIQUE constraint failed:")
b.h(0,s)
return new A.eH(s,'Unique constraint violated on "'+s+'".')}if(o===1299||B.a.F(q,"NOT NULL constraint failed")){p=A.Fs(q,"NOT NULL constraint failed:")
return new A.ex(p,'NOT NULL constraint violated on "'+p+'".')}if(B.a.F(q,"CHECK constraint failed")||o===275||n===275)return new A.fe("CHECK constraint violated.")
if(B.a.F(q,"FOREIGN KEY")||o===787||n===787)return new A.fx("FOREIGN KEY constraint violated.")
if(B.a.F(q,"database or disk is full"))return new A.cO("Database full: "+A.r(a))
return new A.cO("SQLite error: "+A.r(a))},
Fs(a,b){var s,r,q,p,o,n,m=B.a.bN(a,b)
if(m<0)return"?"
s=B.a.ae(a,m+b.length)
r=s.length
q=B.a.bN(s,",")
if(q>=0)r=q
p=B.a.bN(s,"(")
s=B.a.cg(B.a.A(s,0,p>=0&&p<r?p:r))
o=B.a.dg(s,".")
s=B.a.cg(o>=0?B.a.ae(s,o+1):s)
if(B.a.S(s,'"')&&B.a.c6(s,'"')){n=B.a.A(s,1,s.length-1)
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
hh:function hh(a){this.a=a},
fz:function fz(a){this.a=a},
h5:function h5(a){this.a=a},
fG:function fG(a){this.a=a},
fi:function fi(a){this.a=a},
ej:function ej(a){this.a=a},
fV:function fV(a){this.a=a},
DJ(a){return A.pf("lp_file_refs",new A.rw(a))},
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
rw:function rw(a){this.a=a},
ux:function ux(a,b){this.a=a
this.b=b},
uy:function uy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
uA:function uA(a){this.a=a},
uB:function uB(a){this.a=a},
uC:function uC(a){this.a=a},
uD:function uD(a){this.a=a},
uE:function uE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
uz:function uz(a,b){this.a=a
this.b=b},
kZ(a){var s=$.D7()
if(!s.b.test(a))throw A.b(A.Q('Invalid blob hash "'+a+'": must be 64 hex chars.',null))},
Ds(a){return new A.fc(a)},
Dt(a,b){return new A.kY(a,b)},
ku(a,b,c,d,e){return A.MO(a,b,c,d,e)},
MO(a,b,c,d,a0){var s=0,r=A.h(t.bv),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e
var $async$ku=A.c(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:h=t.i5
g=A.k([],h)
f=new A.hp(A.cX(new A.oL(new A.Br(g),A.k([],h),t.mI)))
e=0
h=new A.cy(A.cz(a,"stream",t.K),t.lj)
p=3
l=t.D
case 6:s=8
return A.a(h.k(),$async$ku)
case 8:if(!a2){s=7
break}m=h.gn()
k=a0.$1(m)
if(!(k instanceof A.u)){j=new A.u($.C,l)
j.a=8
j.c=k
k=j}s=9
return A.a(k,$async$ku)
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
return A.a(h.D(),$async$ku)
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
return A.f($async$ku,r)},
pF:function pF(){},
fc:function fc(a){this.a=a},
kY:function kY(a,b){this.a=a
this.b=b},
nb:function nb(a){this.a=a},
Br:function Br(a){this.a=a},
iu:function iu(a){this.d=a},
rx:function rx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rz:function rz(a,b){this.a=a
this.b=b},
rA:function rA(a,b,c){this.a=a
this.b=b
this.c=c},
ry:function ry(a,b,c){this.a=a
this.b=b
this.c=c},
rB:function rB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
rC:function rC(){},
MP(a,b,c){a.tU(!0,new A.Bx(c),"lp_norm_"+b)},
G9(a,b,c,d){var s,r,q='""',p=b.a
if(p.gE(p))return c+"."+('"'+A.z(d,'"',q)+'"')
s='"'+A.z(d,'"',q)+'"'
if(c.length===0)r=s
else r='"'+A.z(c,'"',q)+'".'+s
return'"'+A.z("lp_norm_"+a,'"',q)+'"('+r+")"},
Bx:function Bx(a){this.a=a},
If(a){var s=A.dO(null,null,t.fq),r=t.N
s=new A.tv(a,s,A.t(r,t.g8),A.t(r,t.dz),new A.rE(A.ME(),A.t(r,t.f6)),A.t(r,t.mS))
s.ov(a)
return s},
Bq(a){var s,r,q,p
A:{if(a instanceof A.iK){s=A.Lg(a.a)
break A}if(a instanceof A.j4){s=new A.c5(A.Bq(a.a))
break A}if(a instanceof A.i8){r=a.a
s=A.k([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.Bq(r[p]))
s=new A.dr(s)
break A}if(a instanceof A.i9){r=a.a
s=A.k([],t.k)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.push(A.Bq(r[p]))
s=new A.cZ(s)
break A}throw A.b(A.fU(u.P))}return s},
Lg(a){var s,r,q,p="isNull",o=a.a
switch(a.b.a){case 0:s=a.c
if(s==null)return new A.a9(o,p,B.m)
return new A.a9(o,"eq",[s])
case 1:s=a.c
if(s==null)throw A.b(A.Q("neq(null) matches no rows; use isNotNull.",null))
return new A.c5(new A.a9(o,"eq",[s]))
case 2:return new A.a9(o,"gt",[a.c])
case 3:return new A.a9(o,"gte",[a.c])
case 4:return new A.a9(o,"lt",[a.c])
case 5:return new A.a9(o,"lte",[a.c])
case 6:r=a.d
return new A.a9(o,"inValues",r==null?B.m:r)
case 7:q=a.d
if(q==null)q=B.m
if(q.length!==2)throw A.b(A.Q("between requires exactly two values.",null))
return new A.a9(o,"between",q)
case 8:return new A.a9(o,"startsWith",[a.c])
case 9:return new A.a9(o,"endsWith",[a.c])
case 10:return new A.a9(o,"contains",[a.c])
case 11:return new A.a9(o,p,B.m)
case 12:return new A.c5(new A.a9(o,p,B.m))}},
Lz(){return new A.aW(Date.now(),0,!1)},
KF(){return Date.now()},
p3(a){var s,r,q
if(t.G.b(a)){s=A.t(t.N,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.p3(q.b))}return s}if(t.f.b(a)){s=A.t(t.z,t.X)
for(r=a.gab(),r=r.gu(r);r.k();){q=r.gn()
s.j(0,q.a,A.p3(q.b))}return s}if(t.j.b(a)){s=[]
for(r=J.E(a);r.k();)s.push(A.p3(r.gn()))
return s}if(t.p.b(a))return new Uint8Array(A.b7(a))
return a},
d0(a,b,c,d,e,f,g,h,i){var s=null,r=B.D,q=null,p=null
return A.Ih(a,b,c,d,e,f,g,h,i)},
Ih(b0,b1,b2,b3,b4,b5,b6,b7,b8){var s=0,r=A.h(t.fZ),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$d0=A.c(function(b9,c0){if(b9===1){o.push(c0)
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
return A.a(A.eF(a7,b6),$async$d0)
case 8:n=c0
i=0
case 9:if(!(i<3)){s=11
break}m=B.cz[i]
s=12
return A.a(a7.O(m),$async$d0)
case 12:case 10:++i
s=9
break
case 11:i=0
case 13:if(!(i<15)){s=15
break}l=B.cQ[i]
s=16
return A.a(a7.O(l),$async$d0)
case 16:case 14:++i
s=13
break
case 15:h=a7
g=n
f=a5
if(f==null)f=A.MD()
e=a6
d=a4
c=t.N
b=t.ls
a=new A.mz()
a0=new A.m6(b5,h,g,a,b4,b2,b8,e,b0,b3,a3,f,A.t(c,t.nv),new A.xq(A.t(c,b),A.t(b,t.nL)),d,new A.pR(A.dO(null,null,t.iv),A.dO(null,null,t.oZ)))
b=new A.y_(A.b8(null,t.H),a.gwf())
a0.x=b
d=a0.a=new A.um(a0,h,g,b,a,e,d)
a0.b=new A.xf(d)
a0.c=new A.v3()
a0.d=new A.ws()
d=A.If(d)
a0.e!==$&&A.cg()
a0.e=d
d=$.BG()
a0.cx!==$&&A.cg()
a0.cx=new A.vf(a0,d)
a0.cy!==$&&A.cg()
a0.cy=new A.va(a0,d)
a0.db!==$&&A.cg()
a0.db=new A.qs(a0)
a0.dx!==$&&A.cg()
a0.dx=new A.ux(a0,b0)
k=a0
s=17
return A.a(A.m7(a7,k.CW),$async$d0)
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
cI(a,b){return A.Ig(a,b)},
Ig(a,b){var s=0,r=A.h(t.H),q=1,p=[],o,n
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
return A.a(a.cf("lp_migrations","version = ?",[1]),$async$m7)
case 3:if(p.e8(d)){s=1
break}s=4
return A.a(a.aC(0,"lp_migrations",A.m(["version",1,"name","core:v1","applied_at",b.$0(),"duration_ms",0],t.N,t.X)),$async$m7)
case 4:case 1:return A.e(q,r)}})
return A.f($async$m7,r)},
eX:function eX(){},
zE:function zE(a){this.a=a},
oS:function oS(a,b,c){var _=this
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
tv:function tv(a,b,c,d,e,f){var _=this
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
tR:function tR(a){this.a=a},
tS:function tS(){},
tT:function tT(a,b){this.a=a
this.b=b},
tU:function tU(){},
u4:function u4(a,b){this.a=a
this.b=b},
uf:function uf(){},
ug:function ug(a,b){this.a=a
this.b=b},
uh:function uh(a,b){this.a=a
this.b=b},
ui:function ui(a,b){this.a=a
this.b=b},
uj:function uj(a,b){this.a=a
this.b=b},
uk:function uk(a,b){this.a=a
this.b=b},
ul:function ul(a,b){this.a=a
this.b=b},
tV:function tV(){},
tW:function tW(){},
tX:function tX(){},
tY:function tY(){},
tZ:function tZ(){},
u_:function u_(){},
u0:function u0(a){this.a=a},
u1:function u1(a){this.a=a},
u2:function u2(){},
u3:function u3(){},
u5:function u5(){},
u6:function u6(a){this.a=a},
u7:function u7(){},
u8:function u8(){},
u9:function u9(){},
ua:function ua(){},
ub:function ub(){},
uc:function uc(a){this.a=a},
ud:function ud(a){this.a=a},
ue:function ue(a,b){this.a=a
this.b=b},
tD:function tD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tE:function tE(){},
tF:function tF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tG:function tG(){},
tJ:function tJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tK:function tK(){},
tx:function tx(a){this.a=a},
tw:function tw(a){this.a=a},
tI:function tI(a){this.a=a},
tH:function tH(a){this.a=a},
tO:function tO(a,b){this.a=a
this.b=b},
tP:function tP(a,b,c){this.a=a
this.b=b
this.c=c},
tQ:function tQ(a,b){this.a=a
this.b=b},
ty:function ty(a){this.a=a},
tz:function tz(a){this.a=a},
tA:function tA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tC:function tC(a,b){this.a=a
this.b=b},
tB:function tB(a,b){this.a=a
this.b=b},
tL:function tL(a){this.a=a},
tM:function tM(a){this.a=a},
tN:function tN(a,b){this.a=a
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
rE:function rE(a,b){this.f=a
this.r=b},
rH:function rH(){},
rF:function rF(a){this.a=a},
rG:function rG(){},
oj:function oj(){this.b=0
this.c=$},
um:function um(a,b,c,d,e,f,g){var _=this
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
vH:function vH(a){this.a=a},
m6:function m6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.fx=n
_.go=o
_.a$=p},
un:function un(a,b){this.a=a
this.b=b},
uq:function uq(a){this.a=a},
up:function up(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
uo:function uo(){},
o9:function o9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1
_.e=null
_.f=!1},
yH:function yH(a,b){this.a=a
this.b=b},
yG:function yG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
yE:function yE(a,b){this.a=a
this.b=b},
yF:function yF(a,b){this.a=a
this.b=b},
yD:function yD(a){this.a=a},
hr:function hr(a,b){this.a=a
this.b=b},
ws:function ws(){},
xf:function xf(a){var _=this
_.a=a
_.b="NORMAL"
_.c=null
_.d=0},
xm:function xm(a){this.a=a},
xi:function xi(a){this.a=a},
xl:function xl(a,b,c){this.a=a
this.b=b
this.c=c},
xk:function xk(a,b,c){this.a=a
this.b=b
this.c=c},
xj:function xj(a,b,c){this.a=a
this.b=b
this.c=c},
xh:function xh(a){this.a=a},
xg:function xg(){},
os:function os(){},
fE(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$fE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:i=a.r
h=b.x
g=A.a_(h).i("al<1>")
f=A.O(new A.al(h,new A.uY(c,b),g),g.i("o.E"))
B.b.cj(f,new A.uZ())
h=f.length,g=b.a,q="migrate:"+g+":v",p=a.CW,o=c,n=0
case 2:if(!(n<f.length)){s=4
break}m=f[n]
l=m.a
k=o+1
if(l!==k)throw A.b(A.aP('Migration gap for "'+g+'": expected v'+k+", found v"+l+"."))
j=new A.jo()
$.ky()
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
return A.a(A.fF(i,j.gmA(),o,q+l,p,l),$async$fE)
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
mg(a,b,c){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g,f
var $async$mg=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=a.r
k=b.a
j=t.v
h=A
g=A
f=J
s=2
return A.a(l.b0("PRAGMA table_info("+('"'+A.z(k,'"','""')+'"')+")"),$async$mg)
case 2:i=h.d2(new g.bF(f.bM(e,new A.uV(),t.X),j),j.i("o.E"))
j=c.c,q=j.length,p=0
case 3:if(!(p<j.length)){s=5
break}o=j[p]
n=o.a
m=$.D8()
if(!m.b.test(n))A.w(A.aP('Field "'+n+u.Z))
if(o.c)throw A.b(A.aP('Additive migration on "'+k+'" cannot add a required column "'+n+'" (existing rows would violate NOT NULL).'))
if(i.F(0,n)){s=4
break}m=A.z(k,'"','""')
s=6
return A.a(l.O("ALTER TABLE "+('"'+m+'"')+" ADD COLUMN "+('"'+A.z(n,'"','""')+'"')+" "+o.gkJ()),$async$mg)
case 6:i.t(0,n)
case 4:j.length===q||(0,A.q)(j),++p
s=3
break
case 5:return A.e(null,r)}})
return A.f($async$mg,r)},
aO(a,b,c){return A.Is(a,b,c)},
Is(b0,b1,b2){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$aO=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a7=b0.r
if(!b0.Q)throw A.b(A.BQ('Destructive migration for "'+b1.a+'" requires the backup step, which is disabled.'))
a2=b1.a
n=a2
a3=b2.a
a4=""+a3
m=a2+"__new_"+a4
l="migration:"+a2+":"+a4+":state"
k=new A.io(b0.w).jI(b1)
j=A.Iv(b0.f,a2,a3)
p=4
s=7
return A.a(A.uW(a7,l),$async$aO)
case 7:i=b4
s=8
return A.a(b0.hz(j),$async$aO)
case 8:h=b4
if(J.v(i,"done")&&h){a3=A.BQ('Destructive migration for "'+a2+'" to v'+a4+" already completed in a previous run; refusing to overwrite its backup at "+A.r(j)+". Remove the backup to force a fresh rebuild.")
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
return A.a(b0.hJ(j),$async$aO)
case 19:case 18:s=20
return A.a(A.mh(a7,l,"rebuilding"),$async$aO)
case 20:s=21
return A.a(a7.O("VACUUM INTO '"+A.z(j,"'","''")+"'"),$async$aO)
case 21:a3=k.b
a4=A.z(n,'"','""')
d=B.a.ko(a3,'"'+a4+'"','"'+A.z(m,'"','""')+'"')
s=22
return A.a(a7.O(d),$async$aO)
case 22:c=0
a3=t.P
case 23:s=25
return A.a(a7.ah("SELECT rowid, * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE rowid > ? ORDER BY rowid LIMIT ?",[c,1e4]),$async$aO)
case 25:b=b4
if(J.by(b)){s=24
break}s=26
return A.a(a7.a2(new A.uX(b,b1,b0,b2,m),a3),$async$aO)
case 26:a4=J.S(J.po(b),"rowid")
a4.toString
c=A.ao(a4)
if(J.ap(b)<1e4){s=24
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
a3=A.F(a8)
if(a3 instanceof A.ej)throw a8
else if(a3 instanceof A.c8){a1=a3
throw A.b(A.BQ('Destructive migration for "'+a2+'" failed: '+A.r(a1)))}else throw a8
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
if((m==null?0:m)!==f)throw A.b(A.x('Post-rebuild verification of "'+q+'" failed.'))
s=17
return A.a(A.mh(b,e,"done"),$async$d4)
case 17:return A.e(null,r)}})
return A.f($async$d4,r)},
mi(a,b){var s=0,r=A.h(t.y),q,p
var $async$mi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=J
s=3
return A.a(a.ah("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",[b]),$async$mi)
case 3:q=p.e8(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$mi,r)},
Iv(a,b,c){var s=null,r=$.i6(),q=r.u7(a),p=A.dL(a,r.a).gjF()+".v"+c+"."+b+".bak"
if(q===".")return p
return r.mQ(0,q,p,s,s,s,s,s,s,s,s,s,s,s,s,s,s)},
Iu(a,b){var s,r
if(a.c&&b==null){s=a.a
throw A.b(A.ay('Field "'+s+'" is required.',s))}if(b==null)return
r=A.CY(a,b)
if(r!=null)throw A.b(A.ay(A.Ir(a,b,r),a.a))},
It(a,b){var s,r,q,p
for(s=a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
A.Iu(p,b.h(0,p.a))}},
Ir(a,b,c){var s,r=a.a,q=J.c_(b)
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
uW(a,b){var s=0,r=A.h(t.x),q,p,o
var $async$uW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(a.n_("lp_meta",A.k(["v"],t.s),"k = ?",[b]),$async$uW)
case 3:p=d
o=J.M(p)
q=o.gE(p)?null:A.a6(J.S(o.gG(p),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$uW,r)},
mh(a,b,c){var s=0,r=A.h(t.H)
var $async$mh=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ca(0,"lp_meta",A.m(["k",b,"v",c],t.N,t.X),B.R),$async$mh)
case 2:return A.e(null,r)}})
return A.f($async$mh,r)},
KG(){return Date.now()},
uY:function uY(a,b){this.a=a
this.b=b},
uZ:function uZ(){},
uV:function uV(){},
uX:function uX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mz:function mz(){var _=this
_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=0},
kr(a){var s=A.z(a,"\\","\\\\")
s=A.z(s,"%","\\%")
return A.z(s,"_","\\_")},
CM(a){var s,r,q,p,o,n,m,l="args"
A:{if(a instanceof A.a9){s=a.b
B:{if("eq"===s||"gt"===s||"gte"===s||"lt"===s||"lte"===s||"startsWith"===s||"endsWith"===s||"contains"===s){r=1
break B}if("between"===s){r=2
break B}if("isNull"===s){r=0
break B}if("inValues"===s){r=null
break B}r=A.w(A.aH(s,"operator","Unknown predicate operator."))}if(r!=null&&a.c.length!==r){q=a.c
throw A.b(A.aH(q,l,'The "'+s+'" predicate carries exactly '+A.r(r)+" argument(s), got "+q.length+"."))}if(s==="inValues"&&a.c.length===0)throw A.b(A.aH(a.c,l,"An inValues predicate needs at least one value (the database would otherwise emit invalid SQL)."))
if(s==="eq"&&B.b.gap(a.c)==null)throw A.b(A.aH(a.c,l,"eq(null) never reaches the compiler: route it to the isNull predicate (SQL `= NULL` never matches)."))
break A}if(a instanceof A.c5){A.CM(a.a)
break A}p=a instanceof A.dr
o=null
n=null
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
r=p}else r=!0
if(r){r=n.length
if(r===0)throw A.b(A.aH(n,"children","A predicate composite needs at least one child."))
for(m=0;m<n.length;n.length===r||(0,A.q)(n),++m)A.CM(n[m])}break A}},
AD(a,b){var s,r,q,p,o,n,m,l,k,j
if(a instanceof A.a9)return A.Fm(a,!1,b)
if(a instanceof A.c5){s=a.a
r=A.AD(s,!0)
q=r.a
p=r.b
A:{if(s instanceof A.cZ||s instanceof A.c5){s=new A.a4("NOT "+q,p)
break A}s=new A.a4("NOT ("+q+")",p)
break A}return s}if(a instanceof A.dr){o=A.k([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){l=A.AD(s[m],!1)
o.push(l.a)
B.b.C(p,l.b)}k=B.b.B(o," AND ")
return new A.a4(b?k:"("+k+")",p)}if(a instanceof A.cZ){o=A.k([],t.s)
p=[]
for(s=a.a,n=s.length,m=0;m<s.length;s.length===n||(0,A.q)(s),++m){j=A.Kz(s[m])
o.push(j.a)
B.b.C(p,j.b)}return new A.a4("("+B.b.B(o," OR ")+")",p)}throw A.b(A.fU(u.M))},
Kz(a){var s
A:{if(a instanceof A.a9){s=A.Fm(a,!0,!1)
break A}s=A.AD(a,!1)
break A}return s},
Fm(a,b,c){var s,r,q,p=" LIKE ? ESCAPE '\\'",o='"'+A.z(a.a,'"','""')+'"',n=A.O(a.c,t.X),m=a.b
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
default:throw A.b(A.aH(m,"operator","Unknown predicate operator."))}if(!b)q=m==="between"&&!c
else q=!0
return new A.a4(q?"("+s+")":s,n)},
d6:function d6(){},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(a){this.a=a},
dr:function dr(a){this.a=a},
cZ:function cZ(a){this.a=a},
IN(a,b){var s,r=$.fS.H(0,a)
if(r!=null){$.fS.j(0,a,r)
return r}s=b.$0()
if($.fS.a>=512)$.fS.H(0,new A.T($.fS,A.n($.fS).i("T<1>")).gG(0))
$.fS.j(0,a,s)
return s},
b_:function b_(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
yP:function yP(a){this.a=a},
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
wg:function wg(a,b,c){this.a=a
this.b=b
this.c=c},
wb:function wb(){},
wc:function wc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
wd:function wd(a){this.a=a},
we:function we(){},
wf:function wf(){},
IY(a){var s,r,q=B.a.cg(a)
if(q.length===0)return
s=!0
if(!B.a.F(q,'"')){r=A.af("(^|\\s)(AND|OR|NOT)(\\s|$)",!1,!1)
if(!r.b.test(q))if(!B.a.S(q,"-")){s=A.af("\\b(AND|OR|NOT)\\s*$",!1,!1)
s=s.b.test(q)}}if(s)throw A.b(A.ay("Invalid search term: "+a,null))},
IX(a){var s,r,q,p
for(s=B.a.cP(a,A.af("\\s+",!0,!1)),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
if(p.length!==0&&new A.jf(p).gm(0)<3)throw A.b(A.ay('Fuzzy search terms must be at least 3 characters (trigram index): "'+p+'".',null))}},
cN:function cN(a,b){this.a=a
this.b=b},
wz:function wz(a,b,c,d){var _=this
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
r=A.jp("Malformed schema JSON: "+A.r(s))
throw A.b(r)}}},
DI(a){return A.ko(new A.rv(a))},
I8(a){return A.ko(new A.ti(a))},
I0(a){return A.ko(new A.rL(a))},
DN(a,b){var s
if(new A.jf(a).gm(0)!==1)throw A.b(A.aP('FtsNormalization keys must be single characters, got "'+a+'".'))
s=b.length
if(s===0||s>4)throw A.b(A.aP('FtsNormalization replacement for "'+a+'" must be 1-4 characters.'))},
I_(a){return A.ko(new A.rK(a))},
HZ(a,b){var s,r
if(a.gm(a)!==b.gm(b))return!1
for(s=a.gab(),s=s.gu(s);s.k();){r=s.gn()
if(b.h(0,r.a)!==r.b)return!1}return!0},
J7(a){return A.ko(new A.wP(a))},
pX(a,b){return A.ko(new A.pY(a,b))},
LE(a,b,c,d){var s
for(s=c+1;s<=d;++s)B.am.h(0,s)
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
rv:function rv(a){this.a=a},
iB:function iB(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
ti:function ti(a){this.a=a},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
rL:function rL(a){this.a=a},
en:function en(a){this.a=a},
rK:function rK(a){this.a=a},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
wP:function wP(a){this.a=a},
v_:function v_(a,b){this.a=a
this.b=b},
qq:function qq(){},
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
pY:function pY(a,b){this.a=a
this.b=b},
Cj(a){var s=A.KA(a),r=A.k([],t.s)
if(B.Z.gW(B.Z))r.push("fieldResolvers")
if(B.b.bL(a.x,new A.wv()))r.push("migrationTransform")
if(B.am.gW(B.am))r.push("documentMigrations")
return new A.mW(s,A.fC(r,t.N),1,a.a,a.b,2)},
IW(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.aP("Malformed schema manifest: not an object"))
s=t.N
r=t.z
q=a.aT(0,new A.ww(),s,r)
p=q.h(0,"formatVersion")
if(!A.ah(p))throw A.b(A.aP("Malformed schema manifest: missing formatVersion"))
if(p>1)throw A.b(A.Ei("Schema manifest format v"+A.r(p)+" is newer than supported v1."))
o=q.h(0,"store")
n=q.h(0,"version")
m=q.h(0,"definition")
l=q.h(0,"unsupportedFeatures")
k=q.h(0,"queryCompilerVersion")
if(typeof o!="string"||!A.ah(n)||!j.b(m)||!t.j.b(l)||!A.ah(k))throw A.b(A.aP('Malformed schema manifest for store "'+A.r(o==null?"???":o)+'"'))
return new A.mW(m.aT(0,new A.wx(),s,t.X),A.fC(J.bM(l,new A.wy(),r),s),p,o,n,k)},
KA(a){var s,r,q,p,o,n=t.N,m=t.X,l=A.cJ(a.p(),n,m),k=B.Z.gK()
k=A.O(k,A.n(k).i("o.E"))
B.b.aE(k)
l.j(0,"conflictPolicy",A.m(["editsUnarchive",!1,"missingRemote","conflict","hasCollectionResolver",!1,"fieldOverrideNames",k],n,t.K))
k=A.k([],t.d)
for(s=a.x,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].p()
o=A.dE(null,null,n,m)
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
wv:function wv(){},
ww:function ww(){},
wx:function wx(){},
wy:function wy(){},
HC(a,b){var s,r=a.a
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
v3:function v3(){},
dJ:function dJ(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qb:function qb(a,b){this.a=a
this.b=b},
qe:function qe(a,b){this.a=a
this.b=b},
qa:function qa(a,b){this.a=a
this.b=b},
qd:function qd(a,b){this.a=a
this.b=b},
q8:function q8(a,b,c){this.a=a
this.b=b
this.c=c},
q7:function q7(a,b){this.a=a
this.b=b},
q6:function q6(a,b){this.a=a
this.b=b},
qc:function qc(a,b){this.a=a
this.b=b},
q9:function q9(a,b){this.a=a
this.b=b},
q1:function q1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
q0:function q0(){},
q5:function q5(){},
q4:function q4(){},
q3:function q3(){},
q2:function q2(){},
pZ:function pZ(){},
q_:function q_(){},
ho:function ho(){},
o8:function o8(){},
pr:function pr(a){this.a=a},
ps:function ps(a,b){this.a=a
this.b=b},
pt:function pt(a){this.a=a},
pu:function pu(){},
BO(a){return A.pf("lp_conflicts",new A.qr(a))},
bg:function bg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
qr:function qr(a){this.a=a},
qs:function qs(a){this.a=a},
qx:function qx(a,b,c){this.a=a
this.b=b
this.c=c},
qw:function qw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qu:function qu(a,b){this.a=a
this.b=b},
qv:function qv(a,b){this.a=a
this.b=b},
qt:function qt(a,b,c,d,e,f){var _=this
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
xa:function xa(a){this.a=a},
x2:function x2(a){this.a=a},
x8:function x8(a,b){this.a=a
this.b=b},
x7:function x7(a){this.a=a},
x6:function x6(a,b){this.a=a
this.b=b},
x9:function x9(a){this.a=a},
x3:function x3(a,b){this.a=a
this.b=b},
x4:function x4(){},
x5:function x5(){},
et(a){return new A.d3(a)},
D4(a,b){var s,r,q,p,o,n,m,l,k=null
try{s=A.f6(a,b)
r=A.bf(a,s)
q=A.ak(r)
p=A.as(B.o.v(B.e.v(q)).a)
return new A.ew(b,s,q,p,k)}catch(m){l=A.F(m)
if(l instanceof A.d3){o=l
return new A.ew(b,k,k,k,o.a)}else{n=l
l=A.r(n)
return new A.ew(b,k,k,k,l)}}},
MJ(a,b){var s,r=A.k([],t.i7)
for(s=J.E(b);s.k();)r.push(A.D4(a,s.gn()))
return r},
D3(a,b){var s=0,r=A.h(t.eT),q
var $async$D3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=A.MJ(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$D3,r)},
f6(a,b){var s,r,q,p,o,n,m,l,k="archived",j=t.N,i=t.X,h=A.ba(b.d,j,i),g=a.gd8(),f=h.h(0,"id")
if(f==null){s=b.a
h.j(0,"id",s)}else{s=b.a
if(!J.v(f,s))throw A.b(A.et('data.id "'+A.r(f)+'" does not match record id "'+s+'"'))}r=h.h(0,k)
if(r!=null&&!A.bH(r))throw A.b(A.et('Field "archived" must be a boolean, got '+J.c_(r).l(0)+"."))
q=A.m(["id",s],j,i)
for(j=a.c,i=j.length,p=0;p<j.length;j.length===i||(0,A.q)(j),++p){o=j[p]
s=o.a
n=h.h(0,s)
if(n==null){if(o.c)throw A.b(A.et('Required field "'+s+'" is missing.'))
q.j(0,s,null)
continue}m=A.CY(o,n)
if(m!=null)throw A.b(A.et(A.Ll(o,n,m)))
q.j(0,s,n)}for(j=new A.aM(h,A.n(h).i("aM<1,2>")).gu(0);j.k();){l=j.d
i=l.a
if(i==="id"||i==="archived"||g.F(0,i))continue
q.j(0,i,l.b)}q.j(0,k,J.v(r,!0))
return q},
Ll(a,b,c){var s,r=a.a,q=J.c_(b)
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
try{s=B.h.av(a,null)}catch(q){r=A.F(q)
p=A.et("Corrupt payload JSON: "+A.r(r))
throw A.b(p)}if(!t.f.b(s))throw A.b(A.et("Corrupt payload JSON: expected an object, got "+J.c_(s).l(0)+"."))
return A.ba(s,t.N,t.X)},
d3:function d3(a){this.a=a},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bI(a,b){var s,r,q,p,o,n,m,l,k,j,i=t.N,h=A.aN(i),g=A.d2(a.gK(),i)
g.C(0,b.gK())
for(g=A.hB(g,g.r,A.n(g).c),s=g.$ti.c,r=t.f,q=t.X;g.k();){p=g.d
if(p==null)p=s.a(p)
o=a.h(0,p)
n=b.h(0,p)
if(!B.t.Z(o,n)){h.t(0,p)
if(r.b(o)&&r.b(n)&&J.kC(o.gK(),new A.AY())&&J.kC(n.gK(),new A.AZ())){m=A.bI(A.ba(o,i,q),A.ba(n,i,q))
for(l=A.n(m),k=new A.dZ(m,m.r,l.i("dZ<1>")),k.c=m.e,p+=".",l=l.c;k.k();){j=k.d
h.t(0,p+(j==null?l.a(j):j))}}}}return h},
Ip(a,b,c,d,e,f,g){return new A.uN()},
Lf(a,b){var s,r,q=a.b
if(q.gE(q))return null
for(s=b;;){q.h(0,s)
r=B.a.dg(s,".")
if(r<=0)return null
s=B.a.A(s,0,r)}},
C8(a,b,c,d,e,f){var s=0,r=A.h(t.r),q
var $async$C8=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:q=A.Iq(B.bZ,a,b,c,d,e,f)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$C8,r)},
Iq(a,b,c,d,e,f,g){var s,r,q,p=A.bI(b,c),o=A.bI(b,f)
A.Ip(b,p,o,c,e,f,g)
s=t.N
r=A.d2(c.gK(),s)
r.C(0,new A.T(f,A.n(f).i("T<1>")))
r.C(0,b.gK())
q=A.O(r,A.n(r).c)
return A.uT(a,b,p,o,0,q,c,A.t(s,t.X),d,e,f,new A.zN(),g)},
uT(a,b,c,d,e,f,g,h,i,j,k,a0,a1){var s,r,q,p,o,n,m,l
if(e>=f.length)return new A.dH(h,a0.a,null)
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
h.j(0,s,m)}return A.uT(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)}l=A.E1(a,p,r,s,i,q,j,a0,a1)
if(l instanceof A.u)return l.X(new A.uU(h,s,f,e,b,g,k,i,a1,j,a,c,d,a0),t.r)
h.j(0,s,l)
return A.uT(a,b,c,d,e+1,f,g,h,i,j,k,a0,a1)},
E1(a,a0,a1,a2,a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
if(B.t.Z(a1,a4))return a1
if(B.t.Z(a1,a0))return a4
if(B.t.Z(a4,a0))return a1
s=t.f
r=!1
if(s.b(a1))if(s.b(a4))if(J.kC(a1.gK(),new A.uO()))if(J.kC(a4.gK(),new A.uP()))if(a0!=null)r=s.b(a0)&&J.kC(a0.gK(),new A.uQ())
else r=!0
if(r){r=t.N
q=t.X
p=A.ba(a1,r,q)
o=A.ba(a4,r,q)
n=a0==null?null:A.ba(s.a(a0),r,q)
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
d=A.E1(a,e,p.h(0,f),i+f,a3,o.h(0,f),a5,a6,a7)
if(d instanceof A.u)g=!0
j.push(d)}if(!g){for(s=A.hB(s,s.r,r),r=s.$ti.c,c=0;s.k();c=b){q=s.d
if(q==null)q=r.a(q)
b=c+1
k.j(0,q,j[c])}return k}return A.BX(new A.X(j,new A.uR(),A.a_(j).i("X<1,A<j?>>")),q).X(new A.uS(s,k),q)}A.Lf(a3,a2)
return a4},
Ge(a,b,c,d,e,f){return A.C8(a,b,c,d,e,f)},
AY:function AY(){},
AZ:function AZ(){},
uN:function uN(){},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
me:function me(a,b,c){this.a=a
this.b=b
this.c=c},
zN:function zN(){this.a=!1},
zL:function zL(){},
y4:function y4(){},
uU:function uU(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
uO:function uO(){},
uP:function uP(){},
uQ:function uQ(){},
uR:function uR(){},
uS:function uS(a,b){this.a=a
this.b=b},
va:function va(a,b){this.a=a
this.b=b},
vc:function vc(a){this.a=a},
vd:function vd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pE:function pE(a,b,c){this.a=a
this.b=b
this.c=c},
iM:function iM(){},
je:function je(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vf:function vf(a,b){this.a=a
this.b=b},
vl:function vl(a,b){this.a=a
this.b=b},
vj:function vj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
vi:function vi(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
vh:function vh(a,b,c){this.a=a
this.b=b
this.c=c},
vk:function vk(a){this.a=a},
e9:function e9(a,b){this.a=a
this.b=b},
mH:function mH(a,b){this.b=a
this.f=b},
vV:function vV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w2:function w2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w1:function w1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
vX:function vX(a,b,c){this.a=a
this.b=b
this.c=c},
vW:function vW(a,b,c){this.a=a
this.b=b
this.c=c},
vZ:function vZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
vY:function vY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w0:function w0(a,b,c){this.a=a
this.b=b
this.c=c},
w_:function w_(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
w3:function w3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e},
w5:function w5(a,b,c,d){var _=this
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
w8:function w8(a,b,c){this.a=a
this.b=b
this.c=c},
w7:function w7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
w6:function w6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w4:function w4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
w9:function w9(a,b,c,d,e,f,g,h,i,j){var _=this
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
x_:function x_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
x0:function x0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Er(a){return new A.he(a)},
Hr(a){return new A.c0(a)},
HY(a){return new A.cG(a)},
IA(a){return new A.cK(a)},
bt(a){return new A.fP(a)},
Mn(a){var s=a.wG(),r=new A.Ba()
return A.r(r.$2(A.Ce(s),4))+"-"+A.r(r.$1(A.Cc(s)))+"-"+A.r(r.$1(A.vM(s)))+" "+A.r(r.$1(A.Ca(s)))+":"+A.r(r.$1(A.Cb(s)))+":"+A.r(r.$1(A.Cd(s)))+"."+A.r(r.$2(A.Ea(s),3))+"Z"},
bu:function bu(){},
he:function he(a){this.a=a},
eD:function eD(a,b){this.b=a
this.a=b},
jk:function jk(a){this.a=a},
c0:function c0(a){this.a=a},
cG:function cG(a){this.a=a},
cK:function cK(a){this.a=a},
fN:function fN(a){this.a=a},
fP:function fP(a){this.a=a},
fo:function fo(a){this.a=a},
ea:function ea(a){this.a=a},
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
jd:function jd(a,b,c,d,e){var _=this
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
Ba:function Ba(){},
Ja(a){return 0.5+B.as.mU()},
Cq(a){var s,r=a.toLowerCase()
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
Jb(a){var s,r,q,p,o,n,m,l,k=null,j=A.af("^[A-Za-z]{3}, (\\d{2}) ([A-Za-z]{3}) (\\d{4}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).e8(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.Cq(r)
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
return A.Cr(r,q,p,o,n,A.aG(s))}j=A.af("^[A-Za-z]+, (\\d{2})-([A-Za-z]{3})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2}) GMT$",!0,!1).e8(a)
if(j!=null){s=j.b
r=s[2]
r.toString
q=A.Cq(r)
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
return A.Cr(l,q,r,p,o,A.aG(s))}j=A.af("^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\\d{1,2}) (\\d{2}):(\\d{2}):(\\d{2}) (\\d{4})$",!0,!1).e8(a)
if(j!=null){s=j.b
r=s[1]
r.toString
q=A.Cq(r)
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
return A.Cr(r,q,p,o,n,A.aG(s))}return k},
Cr(a,b,c,d,e,f){var s,r
if(b<1||b>12||c<1||c>31||d>23||e>59||f>59)return null
try{s=A.BP(a,b,c,d,e,f,0)
return s}catch(r){return null}},
x1:function x1(a,b){this.at=a
this.ay=b},
jc:function jc(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
xd:function xd(a,b){this.a=a
this.b=b},
FY(a,b,c,d,e,f,g,h,i,j){var s,r=A.Gg(a,b,c,null,d,e,f,g,h,i,j),q=A.t(t.N,t.X)
for(s=0;s<11;++s)q.j(0,B.Y[s],r[s])
return q},
Gg(a,b,c,d,e,f,g,h,i,j,k){var s=[]
A.FV(s,a,b,c,d,e,f,g,h,i,j,k)
return s},
FV(a,b,c,d,e,f,g,h,i,j,k,l){a.push(k)
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
LY(a,b,c,d,e,f,g){var s,r=null,q=A.Gs(B.a5,0,"",r,r,a,r,r,b,0,c,d,r,e,f,g),p=A.t(t.N,t.X)
for(s=0;s<16;++s)p.j(0,B.X[s],q[s])
return p},
Gs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var s=[]
A.FW(s,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)
return s},
FW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){a.push(p)
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
Go(a,b){var s,r,q=[]
for(s=b.length,r=0;r<s;++r)q.push(a.h(0,b[r]))
return q},
i3(a){return new A.X(a,new A.Bw(),A.a_(a).i("X<1,l>")).B(0,", ")},
ju(a){return A.pf("lp_sync_row",new A.xc(a))},
mw(a){return A.pf("lp_outbox",new A.vg(a))},
IB(a){return A.pf("lp_op_queue",new A.vb(a))},
kv(a,b){var s=0,r=A.h(t.aJ),q,p,o,n,m,l,k,j,i,h
var $async$kv=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=t.N
m=A.aN(n)
l=A.O(b,A.n(b).c)
k=l.length
if(k===0){q=m
s=1
break}p=B.b.B(A.ae(k,"?",!1,n),", ")
k=a.ah("SELECT op_id FROM lp_outbox WHERE op_id IN ("+p+")",l)
o=t.J
j=m
i=J
h=o
s=3
return A.a(k,$async$kv)
case 3:j.C(0,i.bM(h.a(d),new A.Bu(),n))
k=A.O(l,n)
k.push("pending")
k.push("failed")
k=a.ah("SELECT op_id FROM lp_op_queue WHERE op_id IN ("+p+") AND state IN (?, ?)",k)
j=m
i=J
h=o
s=4
return A.a(k,$async$kv)
case 4:j.C(0,i.bM(h.a(d),new A.Bv(),n))
q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$kv,r)},
i5(a,b,c,d){var s=0,r=A.h(t.H),q,p,o
var $async$i5=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:q=t.s
q=a.ek("lp_blobs",A.k(["hash"],q),1,"hash = ?",A.k([b],q))
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
case 4:q=a.aD("UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?",A.k([c,b],t.hf))
s=7
return A.a(q,$async$i5)
case 7:case 3:return A.e(null,r)}})
return A.f($async$i5,r)},
B3(a,b){var s=0,r=A.h(t.H),q,p
var $async$B3=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}p=a.aD(u.y,A.k([b],t.s))
s=3
return A.a(p,$async$B3)
case 3:case 1:return A.e(q,r)}})
return A.f($async$B3,r)},
cA(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k
var $async$cA=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:n=t.s
m=a.n_("lp_file_refs",A.k(["ref_id","hash"],n),"store = ? AND record_id = ?",A.k([b,c],n))
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
return A.a(A.B3(a,o),$async$cA)
case 8:case 7:s=3
break
case 4:m=a.Y("lp_conflicts","store = ? AND record_id = ?",A.k([b,c],n))
s=9
return A.a(m,$async$cA)
case 9:m=t.N
m=a.L("lp_op_queue",A.m(["state","done"],m,m),"store = ? AND record_id = ? AND state IN ('pending','failed')",A.k([b,c],n))
s=10
return A.a(m,$async$cA)
case 10:s=d?11:12
break
case 11:m=a.Y("lp_outbox","store = ? AND record_id = ?",A.k([b,c],n))
s=13
return A.a(m,$async$cA)
case 13:n=a.Y("lp_sync_row","store = ? AND record_id = ?",A.k([b,c],n))
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
j6:function j6(a,b){this.a=a
this.b=b},
Bw:function Bw(){},
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
xc:function xc(a){this.a=a},
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
vg:function vg(a){this.a=a},
ey:function ey(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.w=f
_.z=g},
vb:function vb(a){this.a=a},
Bu:function Bu(){},
Bv:function Bv(){},
Ct(a,b,c,d,e){var s=e==null?A.k([],t.eb):e
return new A.bE(a,b,c,s,d,new A.zS())},
nC(a){var s=$.C.h(0,$.kA())
if(s instanceof A.bE&&s.a===a)return s
return null},
bE:function bE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
xn:function xn(a,b,c){this.a=a
this.b=b
this.c=c},
zS:function zS(){this.a=0
this.b=null},
M2(a,b,c){var s,r,q,p,o=A.k([],t.s)
for(s=J.E(a);s.k();){r=new A.a2("")
A.ch(r,s.gn())
q=r.a
o.push(q.charCodeAt(0)==0?q:q)}if(!c)B.b.aE(o)
p=B.b.B(o,"|")
b.$1(p.length)
return A.as(B.o.v(B.e.v(p)).a)},
mL:function mL(a,b,c){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.d=_.c=null
_.f=_.e=!1
_.r=null},
wo:function wo(){},
wn:function wn(a){this.a=a},
wp:function wp(a){this.a=a},
mt:function mt(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=null
_.a=c
_.b=d
_.d=_.c=null
_.f=_.e=!1
_.r=null},
v9:function v9(a){this.a=a},
ff:function ff(){},
y_:function y_(a,b){this.a=a
this.b=0
this.c=b},
y0:function y0(a,b,c){this.a=a
this.b=b
this.c=c},
xq:function xq(a,b){this.a=a
this.b=b},
Im(a){var s,r,q
try{s=A.pc(a)
if(t.f.b(s)){r=A.f3(s)
return r}}catch(q){}return null},
In(a){if(a instanceof A.jA)return A.pe(new A.nS(3,a.a,a.b,null).p())
t.bp.a(a)
return A.C6(a.a,a.b,a.c,a.d)},
C6(a,b,c,d){return A.pe(new A.nS(3,a,null,new A.xM(b,c,d)).p())},
kn(a){return A.Ld(a)},
Ld(a){var s=0,r=A.h(t.B),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e
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
i=A.O(j.cP(0,"drift_db"),t.N)
m=i
J.Dg(m,j.cP(0,a))
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
p5(a,b){return A.Le(a,b)},
Le(a,b){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l
var $async$p5=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kn(a),$async$p5)
case 3:m=d
if(m==null){q=!1
s=1
break}p=5
s=8
return A.a(A.a5(m.getFileHandle(A.dL(b,$.i6().a).gjF(),{create:!1}),t.m),$async$p5)
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
return A.f($async$p5,r)},
p6(a,b){return A.Lm(a,b)},
Lm(a,b){var s=0,r=A.h(t.H),q,p=2,o=[],n,m,l
var $async$p6=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:s=3
return A.a(A.kn(a),$async$p6)
case 3:m=d
if(m==null){s=1
break}p=5
s=8
return A.a(A.BV(m,A.dL(b,$.i6().a).gjF()),$async$p6)
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
return A.f($async$p6,r)},
uu:function uu(){},
uv:function uv(a){this.a=a},
uw:function uw(a){this.a=a},
mc:function mc(a,b,c){this.a=a
this.d=b
this.e=c},
uF:function uF(a){this.a=a},
ht:function ht(a){this.a=a},
ML(a){var s,r,q,p,o,n="stores",m="maxDocBytes",l="destructiveBackup"
if(a==null)return A.t(t.N,t.X)
try{if(t.f.b(a)){s=A.f3(a)
r=A.t(t.N,t.X)
q=t.j
if(q.b(J.S(s,n))){p=J.S(s,n)
p.toString
p=J.bM(q.a(p),new A.Bo(),t.bU)
q=A.O(p,p.$ti.i("Z.E"))
J.bY(r,n,q)}if(A.ah(J.S(s,m)))J.bY(r,m,J.S(s,m))
if(A.bH(J.S(s,l)))J.bY(r,l,J.S(s,l))
return r}}catch(o){}return A.t(t.N,t.X)},
Gm(a,b){var s,r
if(a==null)return null
try{if(t.f.b(a)){s=A.f3(a).h(0,b)
return s}}catch(r){}return null},
Ms(a,b){if(b!=null)return!1
return B.b.bL(a,new A.Bf())},
Bo:function Bo(){},
Bf:function Bf(){},
Be:function Be(){},
MT(a){if(a instanceof A.dF){if(a instanceof A.eI)return"ValidationException"
if(a instanceof A.eH)return"UniqueConstraintException"
if(a instanceof A.ex)return"NotNullConstraintException"
if(a instanceof A.fe)return"CheckConstraintException"
if(a instanceof A.fO)return"PrimaryKeyConstraintException"
if(a instanceof A.fx)return"ForeignKeyConstraintException"
if(a instanceof A.cO)return"StorageError"
if(a instanceof A.fW)return"RecordNotFoundException"
if(a instanceof A.h_)return"SchemaTooNewError"
if(a instanceof A.fz)return"FtsUnavailableError"
if(a instanceof A.hh)return"UnsupportedSchemaFeatureError"
if(a instanceof A.eC)return"SchemaRegistrationError"
if(a instanceof A.h5)return"StaleCursorError"
if(a instanceof A.fG)return"MissingLimitError"
if(a instanceof A.fi)return"ConflictBlockedError"
if(a instanceof A.ej)return"DestructiveMigrationRefusedError"
if(a instanceof A.fV)return"ReadOnlyTxError"
return"LocalPocketError"}if(a instanceof A.bu){if(a instanceof A.he)return"TransientNetworkError"
if(a instanceof A.eD)return"ServerBusyError"
if(a instanceof A.jk)return"ServerError"
if(a instanceof A.c0)return"AuthError"
if(a instanceof A.cG)return"ForbiddenError"
if(a instanceof A.cK)return"NotFoundError"
if(a instanceof A.fN)return"PayloadError"
if(a instanceof A.fP)return"ProtocolError"
if(a instanceof A.fo)return"DuplicateIdError"
if(a instanceof A.ea)return"BatchFailedError"
return"SyncError"}if(a instanceof A.jb)return"ProtocolEnvelopeException"
if(t.b0.b(a))return"RangeError"
if(a instanceof A.bk)return"StateError"
if(a instanceof A.bz)return"ArgumentError"
if(t.Y.b(a))return"FormatException"
if(t.eo.b(a))return"UnsupportedError"
return"unknown"},
Jl(a){var s=a.h(0,"v"),r=a.h(0,"i"),q=a.h(0,"op"),p=a.h(0,"a")
if(!A.ah(s))throw A.b(A.dM('Request "v" must be an int.'))
if(!A.ah(r)||r<0)throw A.b(A.dM('Request "i" must be a non-negative int.'))
if(typeof q!="string"||!B.dj.F(0,q))throw A.b(A.dM("Unknown request operation: "+A.r(q)))
if(!t.f.b(p))throw A.b(A.dM('Request "a" must be a map.'))
return new A.hm(s,r,q,p.aT(0,new A.xP(),t.N,t.X))},
dM(a){return new A.jb(a)},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xP:function xP(){},
nS:function nS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xM:function xM(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
xR:function xR(a){this.a=a},
MM(a){if(!t.f.b(a))throw A.b(A.a8("Schema must be a map: "+A.r(a),null,null))
return A.pX(A.f3(a),t.X)},
f3(a){var s=A.t(t.N,t.X)
a.a7(0,new A.B5(s))
return s},
hn:function hn(){},
jA:function jA(a,b){this.b=a
this.a=b},
eK:function eK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
B5:function B5(a){this.a=a},
B4:function B4(){},
nV:function nV(){},
xU:function xU(a,b){var _=this
_.f=$
_.c=a
_.d=b
_.e=null},
xV:function xV(a){this.a=a},
nU:function nU(){},
xS:function xS(a){this.a=a},
xT:function xT(){},
oY:function oY(){},
FB(a){return a},
FR(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=a+"("
p.a=o
n=A.a_(b)
m=n.i("ct<1>")
l=new A.ct(b,0,s,m)
l.iJ(b,0,s,n.c)
m=o+new A.X(l,new A.AQ(),m.i("X<Z.E,l>")).B(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.b(A.Q(p.l(0),null))}},
qz:function qz(a){this.a=a},
qA:function qA(){},
qB:function qB(){},
AQ:function AQ(){},
tq:function tq(){},
dL(a,b){var s,r,q,p,o,n=b.nW(a),m=b.cG(a)
if(n!=null)a=B.a.ae(a,n.length)
s=t.s
r=A.k([],s)
q=A.k([],s)
s=a.length
if(s!==0&&b.cb(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.cb(a.charCodeAt(o))){r.push(B.a.A(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.ae(a,p))
q.push("")}return new A.mx(b,n,m,r,q)},
mx:function mx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
E7(a){return new A.my(a)},
my:function my(a){this.a=a},
J9(){var s,r,q,p,o,n,m,l,k=null
if(A.Cu().gb_()!=="file")return $.kz()
if(!B.a.c6(A.Cu().gbp(),"/"))return $.kz()
s=A.F7(k,0,0)
r=A.F5(k,0,0,!1)
q=A.Ac(k,0,0,k)
p=A.F4(k,0,0)
o=A.Ab(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.F6("a/b",0,3,k,"",m)
if(n&&!B.a.S(l,"/"))l=A.CK(l,m)
else l=A.eY(l)
if(A.kg("",s,n&&B.a.S(l,"//")?"":r,o,l,q,p).kr()==="a\\b")return $.pi()
return $.GE()},
wZ:function wZ(){},
vI:function vI(a,b,c){this.d=a
this.e=b
this.f=c},
xw:function xw(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
xQ:function xQ(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
BU(a,b){if(b<0)A.w(A.aZ("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.w(A.aZ("Offset "+b+u.D+a.gm(0)+"."))
return new A.lH(a,b)},
wH:function wH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lH:function lH(a,b){this.a=a
this.b=b},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
I4(a,b){var s=A.I5(A.k([A.JJ(a,!0)],t.pg)),r=new A.tg(b).$0(),q=B.c.l(B.b.ga1(s).b+1),p=A.I6(s)?0:3,o=A.a_(s)
return new A.rX(s,r,null,1+Math.max(q.length,p),new A.X(s,new A.rZ(),o.i("X<1,i>")).wp(0,B.bz),!A.MA(new A.X(s,new A.t_(),o.i("X<1,j?>"))),new A.a2(""))},
I6(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.v(r.c,q.c))return!1}return!0},
I5(a){var s,r,q=A.Mr(a,new A.t1(),t.nf,t.K)
for(s=A.n(q),r=new A.aR(q,q.r,q.e,s.i("aR<2>"));r.k();)J.Dk(r.d,new A.t2())
s=s.i("aM<1,2>")
r=s.i("it<o.E,cx>")
s=A.O(new A.it(new A.aM(q,s),new A.t3(),r),r.i("o.E"))
return s},
JJ(a,b){var s=new A.zn(a).$0()
return new A.bp(s,!0,null)},
JL(a){var s,r,q,p,o,n,m=a.gaJ()
if(!B.a.F(m,"\r\n"))return a
s=a.gM().gar()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gP()
p=a.ga3()
o=a.gM().gag()
p=A.n3(s,a.gM().gaq(),o,p)
o=A.z(m,"\r\n","\n")
n=a.gbc()
return A.wI(r,p,o,A.z(n,"\r\n","\n"))},
JM(a){var s,r,q,p,o,n,m
if(!B.a.c6(a.gbc(),"\n"))return a
if(B.a.c6(a.gaJ(),"\n\n"))return a
s=B.a.A(a.gbc(),0,a.gbc().length-1)
r=a.gaJ()
q=a.gP()
p=a.gM()
if(B.a.c6(a.gaJ(),"\n")){o=A.B9(a.gbc(),a.gaJ(),a.gP().gaq())
o.toString
o=o+a.gP().gaq()+a.gm(a)===a.gbc().length}else o=!1
if(o){r=B.a.A(a.gaJ(),0,a.gaJ().length-1)
if(r.length===0)p=q
else{o=a.gM().gar()
n=a.ga3()
m=a.gM().gag()
p=A.n3(o-1,A.EP(s),m-1,n)
q=a.gP().gar()===a.gM().gar()?p:a.gP()}}return A.wI(q,p,r,s)},
JK(a){var s,r,q,p,o
if(a.gM().gaq()!==0)return a
if(a.gM().gag()===a.gP().gag())return a
s=B.a.A(a.gaJ(),0,a.gaJ().length-1)
r=a.gP()
q=a.gM().gar()
p=a.ga3()
o=a.gM().gag()
p=A.n3(q-1,s.length-B.a.dg(s,"\n")-1,o-1,p)
return A.wI(r,p,s,B.a.c6(a.gbc(),"\n")?B.a.A(a.gbc(),0,a.gbc().length-1):a.gbc())},
EP(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.i5(a,"\n",s-2)-1
else return s-B.a.dg(a,"\n")-1},
rX:function rX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
tg:function tg(a){this.a=a},
rZ:function rZ(){},
rY:function rY(){},
t_:function t_(){},
t1:function t1(){},
t2:function t2(){},
t3:function t3(){},
t0:function t0(a){this.a=a},
th:function th(){},
t4:function t4(a){this.a=a},
tb:function tb(a,b,c){this.a=a
this.b=b
this.c=c},
tc:function tc(a,b){this.a=a
this.b=b},
td:function td(a){this.a=a},
te:function te(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
t9:function t9(a,b){this.a=a
this.b=b},
ta:function ta(a,b){this.a=a
this.b=b},
t5:function t5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
t6:function t6(a,b,c){this.a=a
this.b=b
this.c=c},
t7:function t7(a,b,c){this.a=a
this.b=b
this.c=c},
t8:function t8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tf:function tf(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
zn:function zn(a){this.a=a},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n3(a,b,c,d){if(a<0)A.w(A.aZ("Offset may not be negative, was "+a+"."))
else if(c<0)A.w(A.aZ("Line may not be negative, was "+c+"."))
else if(b<0)A.w(A.aZ("Column may not be negative, was "+b+"."))
return new A.cr(d,a,c,b)},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n4:function n4(){},
n6:function n6(){},
J1(a,b,c){return new A.h3(c,a,b)},
n7:function n7(){},
h3:function h3(a,b,c){this.c=a
this.a=b
this.b=c},
h4:function h4(){},
wI(a,b,c,d){var s=new A.da(d,a,b,c)
s.oz(a,b,c)
if(!B.a.F(d,c))A.w(A.Q('The context line "'+d+'" must contain "'+c+'".',null))
if(A.B9(d,c,a.gaq())==null)A.w(A.Q('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
da:function da(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
J5(a){var s
A:{if(18===a){s=B.dk
break A}if(23===a){s=B.dl
break A}if(9===a){s=B.dm
break A}s=null
break A}return s},
jm:function jm(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
J4(a,b,c,d,e,f,g){return new A.c8(d,b,c,e,f,a,g)},
c8:function c8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
wN:function wN(){},
kH:function kH(a){this.a=a},
KL(a,b,c){var s,r,q,p,o,n=new A.nN(c,A.ae(c.b,null,!1,t.X))
try{A.Fq(a,b.$1(n))}catch(r){s=A.F(r)
q=B.e.v(A.ir(s))
p=a.a
o=p.cB(q)
p=p.d
p.sqlite3_result_error(a.b,o,q.length)
p.dart_sqlite3_free(o)}finally{}},
Fq(a,b){var s,r,q,p
A:{s=null
if(b==null){a.a.d.sqlite3_result_null(a.b)
break A}if(A.ah(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EB(b).l(0)))
break A}if(b instanceof A.aJ){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.Dr(b).l(0)))
break A}if(typeof b=="number"){a.a.d.sqlite3_result_double(a.b,b)
break A}if(A.bH(b)){a.a.d.sqlite3_result_int64(a.b,v.G.BigInt(A.EB(b?1:0).l(0)))
break A}if(typeof b=="string"){r=B.e.v(b)
q=a.a
p=q.cB(r)
q=q.d
q.sqlite3_result_text(a.b,p,r.length,-1)
q.dart_sqlite3_free(p)
break A}if(t.L.b(b)){q=a.a
p=q.cB(b)
q=q.d
q.sqlite3_result_blob64(a.b,p,v.G.BigInt(J.ap(b)),-1)
q.dart_sqlite3_free(p)
break A}if(t.po.b(b)){A.Fq(a,b.a)
a.a.d.sqlite3_result_subtype(a.b,b.b)
break A}s=A.w(A.aH(b,"result","Unsupported type"))}return s},
r_:function r_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
r8:function r8(a){this.a=a},
r7:function r7(a){this.a=a},
r9:function r9(a){this.a=a},
r5:function r5(a){this.a=a},
r4:function r4(a){this.a=a},
r6:function r6(a){this.a=a},
r1:function r1(a){this.a=a},
r0:function r0(a){this.a=a},
r2:function r2(a){this.a=a},
ra:function ra(a){this.a=a},
r3:function r3(a,b){this.a=a
this.b=b},
nN:function nN(a,b){this.a=a
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
A2:function A2(a,b){this.a=a
this.b=b},
A3:function A3(a,b,c){this.a=a
this.b=b
this.c=c},
A4:function A4(a,b,c){this.a=a
this.b=b
this.c=c},
wJ:function wJ(){},
h6:function h6(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
BZ(a,b){var s=$.ph()
return new A.lV(A.t(t.N,t.a_),s,a)},
lV:function lV(a,b,c){this.d=a
this.b=b
this.a=c},
on:function on(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
MN(a){var s=J.Hl(new v.G.URL(a,"file:///").pathname,"/")
return new A.al(s,new A.Bp(),A.a_(s).i("al<1>"))},
Bp:function Bp(){},
qF:function qF(){},
mR:function mR(a,b,c){this.d=a
this.a=b
this.c=c},
c7:function c7(a,b){this.a=a
this.b=b},
zM:function zM(a){this.a=a
this.b=-1},
oD:function oD(){},
oE:function oE(){},
oG:function oG(){},
oH:function oH(){},
ve:function ve(a,b){this.a=a
this.b=b},
IQ(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bz(r,"step")}return s},
eg:function eg(){},
bO:function bO(a){this.a=a},
lh:function lh(a){this.a=a},
hi(a){return new A.de(a)},
Dp(a,b){var s,r,q,p
if(b==null)b=$.ph()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.cH(256)
r&2&&A.H(a)
a[q]=p}},
de:function de(a){this.a=a},
jl:function jl(a){this.a=a},
b4:function b4(){},
kX:function kX(){},
kW:function kW(){},
MR(a,b){var s=null,r=new A.er(t.kk)
return A.pg(a,new A.jB(s,s,s,s,s,s,s,s,new A.Bz(new A.By(r,A.AI(new A.BA(r)))),s,s,s,s),s,b)},
eL:function eL(a){var _=this
_.d=a
_.c=_.b=_.a=null},
BA:function BA(a){this.a=a},
By:function By(a,b){this.a=a
this.b=b},
Bz:function Bz(a){this.a=a},
xH:function xH(a){this.a=a},
xC:function xC(a,b,c){this.a=a
this.b=b
this.c=c},
xJ:function xJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
xI:function xI(a,b,c){this.b=a
this.c=b
this.d=c},
dT:function dT(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
bX(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.F(r)
if(q instanceof A.de){s=q
return s.a}else return 1}},
lk:function lk(a){this.b=this.a=$
this.d=a},
qL:function qL(a,b,c){this.a=a
this.b=b
this.c=c},
qI:function qI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qN:function qN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qP:function qP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qR:function qR(a,b){this.a=a
this.b=b},
qK:function qK(a){this.a=a},
qQ:function qQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qV:function qV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
qT:function qT(a,b){this.a=a
this.b=b},
qS:function qS(a,b){this.a=a
this.b=b},
qM:function qM(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function qO(a,b){this.a=a
this.b=b},
qU:function qU(a,b){this.a=a
this.b=b},
qJ:function qJ(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b){this.a=a
this.$ti=b},
pv:function pv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
px:function px(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pw:function pw(a,b,c){this.a=a
this.b=b
this.c=c},
cD(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bo(a,"success",new A.qi(r,a,b),!1,q)
A.bo(a,"error",new A.qj(r,a),!1,q)
return s},
HG(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bo(a,"success",new A.qn(r,a,b),!1,q)
A.bo(a,"error",new A.qo(r,a),!1,q)
A.bo(a,"blocked",new A.qp(r),!1,q)
return s},
eP:function eP(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
yQ:function yQ(a,b){this.a=a
this.b=b},
yR:function yR(a,b){this.a=a
this.b=b},
qi:function qi(a,b,c){this.a=a
this.b=b
this.c=c},
qj:function qj(a,b){this.a=a
this.b=b},
qn:function qn(a,b,c){this.a=a
this.b=b
this.c=c},
qo:function qo(a,b){this.a=a
this.b=b},
qp:function qp(a){this.a=a},
i4(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
DL(a,b,c){var s=a.read(b,c)
return s},
DM(a,b,c){var s=a.write(b,c)
return s},
BV(a,b){return A.a5(a.removeEntry(b,{recursive:!1}),t.X)},
DK(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.w(A.Q("Target object does not implement the async iterable interface",null))
return new A.eT(new A.rD(),new A.ib(a,s),s.i("eT<aa.T,L>"))},
rD:function rD(){},
xD:function xD(a){this.a=a},
xE:function xE(a){this.a=a},
xG(a,b){var s=0,r=A.h(t.n),q,p,o
var $async$xG=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.a(A.a5(p.fetch(new p.URL(a,A.be(p.location).href),null),t.m),$async$xG)
case 3:q=o.xF(d,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xG,r)},
xF(a,b){var s=0,r=A.h(t.n),q,p,o,n,m
var $async$xF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=new A.lk(A.t(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.a(new A.xD(p).i7(a),$async$xF)
case 3:q=new o.hj(new n.xH(m.Jk(d,p)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$xF,r)},
hj:function hj(a){this.a=a},
JN(a){var s=new A.jT(a,new A.an(new A.u($.C,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.oD(a)
return s},
lX(a,b,c){var s=0,r=A.h(t.cF),q,p,o,n,m,l
var $async$lX=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.py(a)
n=A.BZ("dart-memory",null)
m=$.ph()
l=new A.dA(o,n,new A.er(t.p3),A.aN(p),A.t(p,t.S),m,b)
l.r=!1
s=3
return A.a(o.ia(),$async$lX)
case 3:s=4
return A.a(l.eO(),$async$lX)
case 4:q=l
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lX,r)},
py:function py(a){this.a=null
this.b=a},
pB:function pB(a){this.a=a},
pA:function pA(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function pz(a){this.a=a},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
zq:function zq(a){this.a=a},
zr:function zr(a){this.a=a},
zp:function zp(a){this.a=a},
zs:function zs(a,b,c){this.a=a
this.b=b
this.c=c},
zu:function zu(a,b){this.a=a
this.b=b},
zt:function zt(a,b){this.a=a
this.b=b},
z1:function z1(a,b,c){this.a=a
this.b=b
this.c=c},
z2:function z2(a,b){this.a=a
this.b=b},
ow:function ow(a,b){this.a=a
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
tk:function tk(a,b,c){this.a=a
this.b=b
this.c=c},
tl:function tl(){},
tj:function tj(a,b){this.a=a
this.b=b},
oo:function oo(a,b,c){this.a=a
this.b=b
this.c=c},
zo:function zo(a,b){this.a=a
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
Ej(a){var s=A.BZ("dart-memory",null),r=$.ph()
return new A.h2(s,r,a)},
n_(a,b){var s=0,r=A.h(t.mt),q,p,o,n,m,l,k,j
var $async$n_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j=A.i4()
if(j==null)throw A.b(A.hi(1))
p=t.m
s=3
return A.a(A.a5(j.getDirectory(),p),$async$n_)
case 3:o=d
n=A.MN(a),m=J.E(n.a),n=new A.cV(m,n.b,n.$ti.i("cV<1>")),l=null
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
wF(a,b){var s=0,r=A.h(t.g_),q,p
var $async$wF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(A.i4()==null)throw A.b(A.hi(1))
p=A
s=3
return A.a(A.n0(a),$async$wF)
case 3:q=p.wE(d,!1,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wF,r)},
wE(a,b,c){var s=0,r=A.h(t.g_),q,p
var $async$wE=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=A.Ej(c)
s=3
return A.a(p.cJ(a,!1),$async$wE)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wE,r)},
fw:function fw(a,b,c){this.c=a
this.a=b
this.b=c},
h2:function h2(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
wG:function wG(a,b){this.a=a
this.b=b},
oM:function oM(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
zI:function zI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Jk(a,b){var s=A.be(a.exports.memory)
b.b!==$&&A.cg()
b.b=s
s=new A.xx(s,b,a.exports)
s.oA(a,b)
return s},
nX(a,b){var s,r=A.bS(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
dU(a,b,c){var s=a.buffer
return B.n.eZ(A.bS(s,b,c==null?A.nX(a,b):c))},
Cv(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.n.eZ(A.bS(s,b,c==null?A.nX(a,b):c))},
Ez(a,b,c){var s=new Uint8Array(c)
B.f.cO(s,0,A.bS(a.buffer,b,c))
return s},
xx:function xx(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
xy:function xy(a){this.a=a},
xz:function xz(a){this.a=a},
xA:function xA(a){this.a=a},
xB:function xB(a){this.a=a},
B_(){var s=0,r=A.h(t.ja),q,p,o,n,m,l
var $async$B_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.kB()
s=l!=null?3:5
break
case 3:p=A.Li()
s=6
return A.a(A.jy(l,p,null,null,!1),$async$B_)
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
return A.f($async$B_,r)},
Li(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.bs(97+$.H5().cH(26))
return r.charCodeAt(0)==0?r:r},
Hw(a){return new A.ii(a)},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
vP:function vP(){},
vT:function vT(a){this.a=a},
vU:function vU(a){this.a=a},
vS:function vS(a){this.a=a},
vR:function vR(a){this.a=a},
vQ:function vQ(a){this.a=a},
ii:function ii(a){this.a=a},
qY:function qY(){},
lg:function lg(a){this.a=a},
qG:function qG(a){this.a=a},
eJ:function eJ(){},
lA(a,b,c){var s=0,r=A.h(t.eZ),q,p,o
var $async$lA=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(A.n0(a),$async$lA)
case 3:p=e
o=A.Ej(c)
s=b?4:5
break
case 4:s=6
return A.a(o.cJ(p,!0),$async$lA)
case 6:case 5:q=new A.lz(o,p,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$lA,r)},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
rV:function rV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
jy(a,b,c,d,e){var s,r,q={},p=new A.u($.C,t.nI),o=new A.an(p,t.aP)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.BW(A.a5(a.request(b,s,A.cY(new A.xN(q,o))),r),new A.xO(q,d,o),r,t.K)
return p},
xN:function xN(a,b){this.a=a
this.b=b},
xO:function xO(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){this.a=a},
ll:function ll(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=_.e=null},
rc:function rc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rb:function rb(a,b){this.a=a
this.b=b},
rd:function rd(a){this.a=a},
iZ:function iZ(a){this.a=!1
this.b=a},
v6:function v6(a,b){this.a=a
this.b=b},
v5:function v5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
v4:function v4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
HD(a){var s,r,q,p,o=A.k([],t.kC),n=t.c.a(a.a),m=t.i.b(n)?n:new A.bN(n,A.a_(n).i("bN<1,l>"))
for(s=J.M(m),r=0;r<s.gm(m)/2;++r){q=r*2
o.push(new A.a4(A.fq(B.cO,s.h(m,q)),s.h(m,q+1)))}s=A.hR(a.b)
q=A.hR(a.c)
p=A.hR(a.d)
return new A.eh(o,s,q,A.hR(a.g),p)},
eh:function eh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
IT(a){var s
if(J.v(a.t,"errorResponse")){s=A.HS(a)
if(s!=null&&s instanceof A.dq)return s
else return new A.fX(a.e)}else return new A.fX("Did not respond with expected type, got "+A.r(a))},
HS(a){var s=a.s,r=s==null?null:A.ao(s)
A:{if(0===r){s=A.HT(t.c.a(a.r))
break A}if(1===r){s=B.ap
break A}s=null
break A}return s},
HT(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.b(A.x("Pattern matching error"))
n=new A.rt()
l=A.ao(A.eZ(l))
A.D(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ei(i,h,A.bS(h,0,o))}else p=o
n=n.$1(k)
A.Fg(g)
return new A.c8(s,r,l,g==null?o:A.ao(g),n,q,p)},
HU(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.Jd(l)
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
IU(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.rV(a2,512,"transfer" in a2)
a5.mn(a4)
for(s=a4.a,r=s.c,q=s.b,p=r.d,r=r.b,o=0,n=!0;A.IQ(a4);){if(n){o=p.sqlite3_column_count(q)
n=!1}m=a3.d
l=a3.d=m+o
if(l>a3.b)a3.q_(l)
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
d=A.nX(r,f)
f=new Uint8Array(e,f,d)
c=new A.dj(!1).cV(f,0,a,!0)
i=c
g=B.aH
break
case 4:i=s.kL(j)
g=B.aI
break
case 5:default:i=a
g=B.aJ}k[j]=i
l.setUint8(j,g.a)}a1.push(k)}b=new a0.Array(o)
for(j=0;j<o;++j){a0=p.sqlite3_column_name(q,j)
s=r.buffer
l=A.nX(r,a0)
a0=new Uint8Array(s,a0,l)
b[j]=new A.dj(!1).cV(a0,0,a,!0)}return A.Gf(!1,b,0,0,a1,a,a3.wE(0))},
MB(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
rt:function rt(){},
Gf(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
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
Mh(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
mf:function mf(a,b,c){this.a=a
this.b=b
this.$ti=c},
wu:function wu(){},
HX(a){var s,r
for(s=0;s<5;++s){r=B.cB[s]
if(r.c===a)return r}throw A.b(A.Q("Unknown FS implementation: "+a,null))},
Jc(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.aJ
break A}q=A.ah(a)
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
r=B.bn
break A}throw A.b(A.Q("Unsupported value: "+A.r(a),j))}return new A.a4(r,s)},
Jd(a){var s,r,q,p,o,n
if(a instanceof A.ei)return new A.a4(a.a,a.b)
s=[]
r=J.M(a)
q=r.gm(a)
p=new Uint8Array(q)
for(o=0;o<r.gm(a);++o){n=A.Jc(r.h(a,o))
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
pa(){var s=0,r=A.h(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$pa=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.be(i.indexedDB)
i=$.kB()
i=i==null?null:A.jy(i,"drift_mock_db",null,null,!1)
s=3
return A.a(t.fP.b(i)?i:A.bv(i,t.b3),$async$pa)
case 3:l=b
p=5
s=8
return A.a(A.HF(m.open("drift_mock_db"),t.m),$async$pa)
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
return A.f($async$pa,r)},
AW(a){return A.M0(a)},
M0(a){var s=0,r=A.h(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$AW=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.be(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.cY(new A.AX(j,m))
s=7
return A.a(A.HE(m,t.m),$async$AW)
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
return A.f($async$AW,r)},
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
j=new A.cy(A.cz(A.DK(m),"stream",t.K),t.hT)
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
HE(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bo(a,"success",new A.qg(r,a,b),!1,q)
A.bo(a,"error",new A.qh(r,a),!1,q)
return s},
HF(a,b){var s=new A.u($.C,b.i("u<0>")),r=new A.an(s,b.i("an<0>")),q=t.m
A.bo(a,"success",new A.qk(r,a,b),!1,q)
A.bo(a,"error",new A.ql(r,a),!1,q)
A.bo(a,"blocked",new A.qm(r,a),!1,q)
return s},
AX:function AX(a,b){this.a=a
this.b=b},
qg:function qg(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function qh(a,b){this.a=a
this.b=b},
qk:function qk(a,b,c){this.a=a
this.b=b
this.c=c},
ql:function ql(a,b){this.a=a
this.b=b},
qm:function qm(a,b){this.a=a
this.b=b},
vL:function vL(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a},
dq:function dq(a){this.a=a},
KK(a){var s=a.gmJ()
return new A.eT(new A.AH(),s,A.n(s).i("eT<aa.T,L>"))},
EL(a,b){var s=A.k([],t.kG),r=b==null?a.b:b
return new A.hs(a,r,new A.k6(),new A.k6(),new A.k6(),s)},
JE(a,b,c){var s=t.S
s=new A.hq(c,A.k([],t.fV),a.a,new A.aI(new A.u($.C,t.D),t.h),A.t(s,t.br),A.t(s,t.m))
s.ox(a)
s.oC(a,b,c)
return s},
Fr(a){var s
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
e=A.C1(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.a(A.a5(A.be(e),t.X),$async$e4)
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
return A.a(A.BV(m,"_drift_feature_detection"),$async$e4)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$e4,r)},
kq(a){return A.LA(a)},
LA(a){var s=0,r=A.h(t.mk),q,p=2,o=[],n,m,l,k,j,i
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
AH:function AH(){},
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
yI:function yI(a){this.a=a},
yM:function yM(a,b){this.a=a
this.b=b},
yJ:function yJ(a,b){this.a=a
this.b=b},
yK:function yK(a){this.a=a},
yL:function yL(a,b){this.a=a
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
ys:function ys(a){this.a=a},
yx:function yx(a,b){this.a=a
this.b=b},
yA:function yA(a,b,c){this.a=a
this.b=b
this.c=c},
yu:function yu(a,b){this.a=a
this.b=b},
yt:function yt(a,b){this.a=a
this.b=b},
yz:function yz(a,b){this.a=a
this.b=b},
yy:function yy(a,b){this.a=a
this.b=b},
yC:function yC(a,b){this.a=a
this.b=b},
yB:function yB(a,b){this.a=a
this.b=b},
yv:function yv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
yw:function yw(a,b){this.a=a
this.b=b},
yr:function yr(a){this.a=a},
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
rg:function rg(a){this.a=a},
rf:function rf(a){this.a=a},
re:function re(a,b){this.a=a
this.b=b},
xW:function xW(a,b,c,d,e,f){var _=this
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
xX:function xX(a,b){this.a=a
this.b=b},
xY:function xY(a,b){this.a=a
this.b=b},
xZ:function xZ(a){this.a=a},
Jm(){var s=v.G
if(A.Ia(s,"DedicatedWorkerGlobalScope"))return new A.oe(s,new A.of(s.location.href))
else return new A.oK(s,new A.of(s.location.href))},
ki:function ki(){},
oe:function oe(a,b){this.a=a
this.b=b},
oK:function oK(a,b){this.a=a
this.b=b},
zX:function zX(a){this.a=a},
zY:function zY(a,b,c){this.a=a
this.b=b
this.c=c},
zW:function zW(a){this.a=a},
zU:function zU(a){this.a=a},
zV:function zV(a){this.a=a},
of:function of(a){this.a=a},
yX:function yX(a){this.a=a},
ne:function ne(a,b,c){this.c=a
this.a=b
this.b=c},
wY:function wY(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
hf:function hf(){},
op:function op(){},
cw:function cw(a,b){this.a=a
this.b=b},
bo(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.FS(new A.z_(c),t.m)
s=s==null?null:A.cY(s)}s=new A.jP(a,b,s,!1,e.i("jP<0>"))
s.jx()
return s},
FS(a,b){var s=$.C
if(s===B.i)return a
return s.hA(a,b)},
BR:function BR(a,b){this.a=a
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
z_:function z_(a){this.a=a},
z0:function z0(a){this.a=a},
Gv(a){return v.mangledGlobalNames[a]},
Gj(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
Id(a,b){return b in a},
C1(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
Mr(a,b,c,d){var s,r,q,p,o,n=A.t(d,c.i("p<0>"))
for(s=c.i("B<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.h(0,p)
if(o==null){o=A.k([],s)
n.j(0,p,o)
p=o}else p=o
J.aL(p,q)}return n},
C_(a){var s=J.E(a.a)
if(new A.cV(s,a.b,a.$ti.i("cV<1>")).k())return s.gn()
return null},
AT(a,b){var s,r=a.length-1,q=a.$flags|0
for(;;){if(!(b!==0&&r>=0))break
s=a[r]+b
q&2&&A.H(a)
a[r]=s&255
b=s/256|0;--r}},
N1(a){return a},
Gt(a){if(a instanceof A.ds)return a
return new A.ds(a)},
N2(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.F(p)
if(q instanceof A.h3){s=q
throw A.b(A.J1("Invalid "+a+": "+s.a,s.b,s.gfN()))}else if(t.Y.b(q)){r=q
throw A.b(A.a8("Invalid "+a+' "'+b+'": '+r.gkb(),r.gfN(),r.gar()))}else throw p}},
MY(a,b,c){var s=A.z(a,"'","\\'"),r="(store="+("'"+s+"'")+" && id~"+("'"+A.z(b+"%","'","\\'")+"'")
if(c==null)return r+")"
return r+" && id>"+("'"+A.z(c,"'","\\'")+"'")+")"},
i_(){var s,r,q,p=$.H6(),o=$.H_()+1
$.KQ=o
s=B.a.ic(B.c.ks(o,36),8,"0")
r=J.DT(7,t.N)
for(q=0;q<7;++q)r[q]="abcdefghijklmnopqrstuvwxyz0123456789"[p.cH(36)]
return B.a.A(s+B.b.ec(r),0,15)},
pf(a,b){var s,r,q
try{r=b.$0()
return r}catch(q){r=A.F(q)
if(r instanceof A.cO)throw q
else{s=r
r=A.jp("Corrupt "+a+" row: "+A.r(s))
throw A.b(r)}}},
B2(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.j
try{s=B.h.av(a,null)
if(t.f.b(s)){q=A.ba(s,t.N,t.X)
return q}return B.j}catch(p){r=A.F(p)
q=A.jp("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
G3(a,b,c){var s,r,q,p
if(typeof a!="string"||a.length===0)return B.be
try{s=B.h.av(a,null)
if(t.j.b(s)){q=J.pm(s,t.N)
q=q.fB(q)
return q}return B.be}catch(p){r=A.F(p)
q=A.jp("Corrupt "+c+" row: "+b+": "+A.r(r))
throw A.b(q)}},
G2(a){var s,r,q,p,o=null
if(a==null)return B.q
A.D(a)
if(a.length===0)return B.q
s=B.h.av(a,o)
if(!t.j.b(s))throw A.b(A.a8("expected a JSON array, got "+J.c_(s).l(0),o,o))
r=A.k([],t.s)
for(q=J.E(s);q.k();){p=q.gn()
if(typeof p=="string")r.push(p)
else r.push(A.w(A.a8("dirty-field member is "+J.c_(p).l(0)+", expected String",o,o)))}return r},
f4(a){var s,r=J.M(a)
if(r.gE(a))return null
s=J.bZ(r.gG(a).gaX())
if(A.ah(s))return s
if(typeof s=="string")return A.ja(s,null)
return null},
G7(a,b,c,d){var s,r,q,p,o=a<1?1:a,n=b.a
if(n<0)n=0
s=c.a
if(s<0)s=0
r=n>s?s:n
q=1
for(;;){if(!(q<o&&r<s))break
p=r*2
r=p>s?s:p;++q}return A.dv(B.x.wz(r*J.He(d.$1(o),0.5,1.5)),0,0)},
MK(a){var s,r,q,p,o,n,m=null
if(a==null)return m
if(!t.f.b(a))throw A.b(B.cc)
s=a.h(0,"type")
if(!J.v(s,"aes-gcm"))throw A.b(A.a8("Unsupported fieldCipher type: "+A.r(s),m,m))
r=a.h(0,"key")
if(!t.j.b(r)||J.ap(r)!==32)throw A.b(B.cb)
q=new Uint8Array(32)
for(p=J.M(r),o=0;o<32;++o){n=p.h(r,o)
if(!A.ah(n)||n<0||n>255)throw A.b(A.a8("Malformed AES-256-GCM key byte at index "+o+": "+A.r(n),m,m))
q[o]=n}A.Dn(q)
p=$.BG()
if($.kx()!==B.P)A.w(A.x("BigEndian systems are unsupported"))
return new A.pq(new A.li(12,32,m),new A.jj(new A.mZ(A.Dn(q)),m),p)},
MG(){var s=A.Jm(),r=t.cj
new A.xW(s,B.bM,A.k([],t.az),A.t(t.S,t.lp),new A.iZ(A.C5(r)),new A.iZ(A.C5(r))).ea()},
G1(){var s,r,q,p,o=null
try{o=A.Cu()}catch(s){if(t.mA.b(A.F(s))){r=$.AF
if(r!=null)return r
throw s}else throw s}if(J.v(o,$.Fn)){r=$.AF
r.toString
return r}$.Fn=o
if($.D9()===$.kz())r=$.AF=o.bq(".").l(0)
else{q=o.kr()
p=q.length-1
r=$.AF=p===0?q:B.a.A(q,0,p)}return r},
Gb(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
G4(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.Gb(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.A(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
MA(a){var s,r,q,p
if(a.gm(0)===0)return!0
s=a.gG(0)
for(r=A.cu(a,1,null,a.$ti.i("Z.E")),q=r.$ti,r=new A.at(r,r.gm(0),q.i("at<Z.E>")),q=q.i("Z.E");r.k();){p=r.d
if(!J.v(p==null?q.a(p):p,s))return!1}return!0},
MQ(a,b){var s=B.b.bN(a,null)
if(s<0)throw A.b(A.Q(A.r(a)+" contains no null elements.",null))
a[s]=b},
Gn(a,b){var s=B.b.bN(a,b)
if(s<0)throw A.b(A.Q(A.r(a)+" contains no elements matching "+b.l(0)+".",null))
a[s]=null},
Mc(a,b){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
B9(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.c9(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.bN(a,b)
while(r!==-1){q=r===0?0:B.a.i5(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.c9(a,b,r+1)}return null},
CX(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.c8(A.dU(r.b,p.sqlite3_errmsg(q),null),A.dU(s.b,s.d.sqlite3_errstr(o),null)+" (code "+A.r(o)+")",c,n,d,e,f)},
BB(a,b,c,d,e){throw A.b(A.CX(a.a,a.b,b,c,d,e))},
Dr(a){if(a.a0(0,$.Gy())<0||a.a0(0,$.Gx())>0)throw A.b(A.DH("BigInt value exceeds the range of 64 bits"))
return a},
IR(a){var s,r=a.a,q=a.b,p=r.d,o=p.sqlite3_value_type(q)
A:{s=null
if(1===o){r=A.ao(v.G.Number(p.sqlite3_value_int64(q)))
break A}if(2===o){r=p.sqlite3_value_double(q)
break A}if(3===o){o=p.sqlite3_value_bytes(q)
o=A.dU(r.b,p.sqlite3_value_text(q),o)
r=o
break A}if(4===o){o=p.sqlite3_value_bytes(q)
o=A.Ez(r.b,p.sqlite3_value_blob(q),o)
r=o
break A}r=s
break A}return r},
DO(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.bs("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.cH(61)))
return s.charCodeAt(0)==0?s:s},
wr(a){var s=0,r=A.h(t.lo),q
var $async$wr=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(a.arrayBuffer(),t.a),$async$wr)
case 3:q=c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$wr,r)}},B={}
var w=[A,J,B]
var $={}
A.C3.prototype={}
J.lZ.prototype={
R(a,b){return a===b},
gI(a){return A.ez(a)},
l(a){return"Instance of '"+A.mD(a)+"'"},
gak(a){return A.bJ(A.CP(this))}}
J.m0.prototype={
l(a){return String(a)},
gI(a){return a?519018:218159},
gak(a){return A.bJ(t.y)},
$iaj:1,
$iP:1}
J.iG.prototype={
R(a,b){return null==b},
l(a){return"null"},
gI(a){return 0},
gak(a){return A.bJ(t.P)},
$iaj:1,
$iW:1}
J.aE.prototype={$iL:1}
J.dD.prototype={
gI(a){return 0},
gak(a){return B.dG},
l(a){return String(a)}}
J.mA.prototype={}
J.dS.prototype={}
J.bP.prototype={
l(a){var s=a[$.GB()]
if(s==null)s=a[$.f7()]
if(s==null)return this.ol(a)
return"JavaScript function for "+J.a0(s)}}
J.bq.prototype={
gI(a){return 0},
l(a){return String(a)}}
J.fB.prototype={
gI(a){return 0},
l(a){return String(a)}}
J.B.prototype={
hB(a,b){return new A.bN(a,A.a_(a).i("@<1>").V(b).i("bN<1,2>"))},
t(a,b){a.$flags&1&&A.H(a,29)
a.push(b)},
io(a,b){var s
a.$flags&1&&A.H(a,"removeAt",1)
s=a.length
if(b>=s)throw A.b(A.wq(b,null))
return a.splice(b,1)[0]},
aC(a,b,c){var s
a.$flags&1&&A.H(a,"insert",2)
s=a.length
if(b>s)throw A.b(A.wq(b,null))
a.splice(b,0,c)},
k0(a,b,c){var s,r
a.$flags&1&&A.H(a,"insertAll",2)
A.Eg(b,0,a.length,"index")
if(!t.O.b(c))c=J.Ho(c)
s=J.ap(c)
a.length=a.length+s
r=b+s
this.ai(a,r,a.length,a,b)
this.au(a,b,r,c)},
kl(a){a.$flags&1&&A.H(a,"removeLast",1)
if(a.length===0)throw A.b(A.B6(a,-1))
return a.pop()},
H(a,b){var s
a.$flags&1&&A.H(a,"remove",1)
for(s=0;s<a.length;++s)if(J.v(a[s],b)){a.splice(s,1)
return!0}return!1},
rt(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.b(A.az(a))}q=p.length
if(q===o)return
this.sm(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
ds(a,b){return new A.al(a,b,A.a_(a).i("al<1>"))},
C(a,b){var s
a.$flags&1&&A.H(a,"addAll",2)
if(Array.isArray(b)){this.oJ(a,b)
return}for(s=J.E(b);s.k();)a.push(s.gn())},
oJ(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.b(A.az(a))
for(s=0;s<r;++s)a.push(b[s])},
aj(a){a.$flags&1&&A.H(a,"clear","clear")
a.length=0},
cd(a,b,c){return new A.X(a,b,A.a_(a).i("@<1>").V(c).i("X<1,2>"))},
B(a,b){var s,r=A.ae(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.r(a[s])
return r.join(b)},
ec(a){return this.B(a,"")},
cK(a,b){return A.cu(a,0,A.cz(b,"count",t.S),A.a_(a).c)},
bi(a,b){return A.cu(a,b,null,A.a_(a).c)},
f8(a,b,c){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.b(A.az(a))}if(c!=null)return c.$0()
throw A.b(A.aD())},
mG(a,b){return this.f8(a,b,null)},
a8(a,b){return a[b]},
T(a,b,c){if(b<0||b>a.length)throw A.b(A.aw(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw A.b(A.aw(c,b,a.length,"end",null))
if(b===c)return A.k([],A.a_(a))
return A.k(a.slice(b,c),A.a_(a))},
b5(a,b){return this.T(a,b,null)},
fJ(a,b,c){A.bc(b,c,a.length)
return A.cu(a,b,c,A.a_(a).c)},
gG(a){if(a.length>0)return a[0]
throw A.b(A.aD())},
ga1(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.aD())},
gap(a){var s=a.length
if(s===1)return a[0]
if(s===0)throw A.b(A.aD())
throw A.b(A.iD())},
km(a,b,c){a.$flags&1&&A.H(a,18)
A.bc(b,c,a.length)
a.splice(b,c-b)},
ai(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.H(a,5)
A.bc(b,c,a.length)
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.pp(d,e).cL(0,!1)
q=0}p=J.M(r)
if(q+s>p.gm(r))throw A.b(A.DR())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
au(a,b,c,d){return this.ai(a,b,c,d,0)},
bL(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw A.b(A.az(a))}return!1},
cD(a,b){var s,r=a.length
for(s=0;s<r;++s){if(!b.$1(a[s]))return!1
if(a.length!==r)throw A.b(A.az(a))}return!0},
cj(a,b){var s,r,q,p,o
a.$flags&2&&A.H(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.KU()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a_(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.e5(b,2))
if(p>0)this.ru(a,p)},
aE(a){return this.cj(a,null)},
ru(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
bN(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.v(a[s],b))return s
return-1},
dg(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.v(a[s],b))return s
return-1},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.v(a[s],b))return!0
return!1},
gE(a){return a.length===0},
gW(a){return a.length!==0},
l(a){return A.tr(a,"[","]")},
cL(a,b){var s=A.k(a.slice(0),A.a_(a))
return s},
eq(a){return this.cL(a,!0)},
gu(a){return new J.fb(a,a.length,A.a_(a).i("fb<1>"))},
gI(a){return A.ez(a)},
gm(a){return a.length},
sm(a,b){a.$flags&1&&A.H(a,"set length","change the length of")
if(b<0)throw A.b(A.aw(b,0,null,"newLength",null))
if(b>a.length)A.a_(a).c.a(null)
a.length=b},
h(a,b){if(!(b>=0&&b<a.length))throw A.b(A.B6(a,b))
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
if(!(b>=0&&b<a.length))throw A.b(A.B6(a,b))
a[b]=c},
kv(a,b){return new A.bF(a,b.i("bF<0>"))},
mK(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
gak(a){return A.bJ(A.a_(a))},
$ib9:1,
$iJ:1,
$io:1,
$ip:1}
J.m_.prototype={
wK(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.mD(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.ts.prototype={}
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
else if(a===b){if(a===0){s=this.gk8(b)
if(this.gk8(a)===s)return 0
if(this.gk8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gk8(a){return a===0?1/a<0:a<0},
iq(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.Y(""+a+".toInt()"))},
tL(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".ceil()"))},
v_(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.Y(""+a+".floor()"))},
wz(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.Y(""+a+".round()"))},
bM(a,b,c){if(this.a0(b,c)>0)throw A.b(A.f2(b))
if(this.a0(a,b)<0)return b
if(this.a0(a,c)>0)return c
return a},
ks(a,b){var s,r,q,p
if(b<2||b>36)throw A.b(A.aw(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.w(A.Y("Unexpected toString result: "+s))
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
fG(a,b){return a+b},
al(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
iI(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.m3(a,b)},
N(a,b){return(a|0)===a?a/b|0:this.m3(a,b)},
m3(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.Y("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
bB(a,b){if(b<0)throw A.b(A.f2(b))
return b>31?0:a<<b>>>0},
rR(a,b){return b>31?0:a<<b>>>0},
dz(a,b){var s
if(b<0)throw A.b(A.f2(b))
if(a>0)s=this.jv(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
af(a,b){var s
if(a>0)s=this.jv(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
m0(a,b){if(0>b)throw A.b(A.f2(b))
return this.jv(a,b)},
jv(a,b){return b>31?0:a>>>b},
nX(a,b){return a>b},
gak(a){return A.bJ(t.o)},
$iav:1,
$iab:1,
$iaU:1}
J.iF.prototype={
gmo(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.N(q,4294967296)
s+=32}return s-Math.clz32(q)},
gak(a){return A.bJ(t.S)},
$iaj:1,
$ii:1}
J.m1.prototype={
gak(a){return A.bJ(t.W)},
$iaj:1}
J.dB.prototype={
jE(a,b,c){var s=b.length
if(c>s)throw A.b(A.aw(c,0,s,null,null))
return new A.oO(b,a,c)},
hw(a,b){return this.jE(a,b,0)},
eg(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.b(A.aw(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.h9(c,a)},
c6(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.ae(a,r-s)},
ko(a,b,c){A.Eg(0,0,a.length,"startIndex")
return A.MX(a,b,c,0)},
cP(a,b){var s
if(typeof b=="string")return A.k(a.split(b),t.s)
else{if(b instanceof A.eq){s=b.e
s=!(s==null?b.e=b.pj():s)}else s=!1
if(s)return A.k(a.split(b.b),t.s)
else return this.px(a,b)}},
dl(a,b,c,d){var s=A.bc(b,c,a.length)
return A.Gr(a,b,s,d)},
px(a,b){var s,r,q,p,o,n,m=A.k([],t.s)
for(s=J.BI(b,a),s=s.gu(s),r=0,q=1;s.k();){p=s.gn()
o=p.gP()
n=p.gM()
q=n-o
if(q===0&&r===o)continue
m.push(this.A(a,r,o))
r=n}if(r<a.length||q>0)m.push(this.ae(a,r))
return m},
ad(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aw(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
S(a,b){return this.ad(a,b,0)},
A(a,b,c){return a.substring(b,A.bc(b,c,a.length))},
ae(a,b){return this.A(a,b,null)},
cg(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(p.charCodeAt(0)===133){s=J.Ie(p,1)
if(s===o)return""}else s=0
r=o-1
q=p.charCodeAt(r)===133?J.DX(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
wI(a){var s,r=a.trimEnd(),q=r.length
if(q===0)return r
s=q-1
if(r.charCodeAt(s)!==133)return r
return r.substring(0,J.DX(r,s))},
bg(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.bO)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ic(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bg(c,s)+a},
w3(a,b){var s=b-a.length
if(s<=0)return a
return a+this.bg(" ",s)},
c9(a,b,c){var s
if(c<0||c>a.length)throw A.b(A.aw(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bN(a,b){return this.c9(a,b,0)},
i5(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.b(A.aw(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
dg(a,b){return this.i5(a,b,null)},
F(a,b){return A.MU(a,b,0)},
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
gak(a){return A.bJ(t.N)},
gm(a){return a.length},
$ib9:1,
$iaj:1,
$iav:1,
$il:1}
A.yO.prototype={
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
B.f.au(n,0,q,r)
k.b=n
r=n}if(t.p.b(b))B.f.au(r,k.a,s,b)
else for(m=0;m<i;++m){r=k.b
q=k.a
l=j.h(b,m)
r.$flags&2&&A.H(r)
r[q+m]=l}k.a=s},
kq(){var s,r=this
if(r.a===0)return $.pj()
s=J.bL(B.f.gaa(r.b),r.b.byteOffset,r.a)
r.a=0
r.b=$.pj()
return s},
gm(a){return this.a}}
A.yo.prototype={
t(a,b){var s=t.p.b(b)?b:new Uint8Array(A.b7(b))
this.b.push(s)
this.a=this.a+s.length},
kq(){var s,r,q,p,o,n,m,l=this,k=l.a
if(k===0)return $.pj()
s=l.b
r=s.length
if(r===1){q=s[0]
l.a=0
B.b.aj(s)
return q}q=new Uint8Array(k)
for(p=0,o=0;o<s.length;s.length===r||(0,A.q)(s),++o,p=m){n=s[o]
m=p+n.length
B.f.au(q,p,m,n)}l.a=0
B.b.aj(s)
return q},
gm(a){return this.a}}
A.dV.prototype={
gu(a){return new A.l1(J.E(this.gba()),A.n(this).i("l1<1,2>"))},
gm(a){return J.ap(this.gba())},
gE(a){return J.by(this.gba())},
gW(a){return J.e8(this.gba())},
bi(a,b){var s=A.n(this)
return A.fd(J.pp(this.gba(),b),s.c,s.y[1])},
cK(a,b){var s=A.n(this)
return A.fd(J.BL(this.gba(),b),s.c,s.y[1])},
a8(a,b){return A.n(this).y[1].a(J.pn(this.gba(),b))},
gG(a){return A.n(this).y[1].a(J.bZ(this.gba()))},
ga1(a){return A.n(this).y[1].a(J.po(this.gba()))},
gap(a){return A.n(this).y[1].a(J.BK(this.gba()))},
F(a,b){return J.BJ(this.gba(),b)},
l(a){return J.a0(this.gba())}}
A.l1.prototype={
k(){return this.a.k()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.ec.prototype={
gba(){return this.a}}
A.jM.prototype={$iJ:1}
A.jJ.prototype={
h(a,b){return this.$ti.y[1].a(J.S(this.a,b))},
j(a,b,c){J.bY(this.a,b,this.$ti.c.a(c))},
sm(a,b){J.Hj(this.a,b)},
t(a,b){J.aL(this.a,this.$ti.c.a(b))},
cj(a,b){var s=b==null?null:new A.yp(this,b)
J.Dk(this.a,s)},
fJ(a,b,c){var s=this.$ti
return A.fd(J.Hg(this.a,b,c),s.c,s.y[1])},
ai(a,b,c,d,e){var s=this.$ti
J.Hk(this.a,b,c,A.fd(d,s.y[1],s.c),e)},
au(a,b,c,d){return this.ai(0,b,c,d,0)},
$iJ:1,
$ip:1}
A.yp.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.i("i(1,1)")}}
A.bN.prototype={
hB(a,b){return new A.bN(this.a,this.$ti.i("@<1>").V(b).i("bN<1,2>"))},
gba(){return this.a}}
A.ed.prototype={
c2(a,b,c){return new A.ed(this.a,this.$ti.i("@<1,2>").V(b).V(c).i("ed<1,2,3,4>"))},
J(a){return this.a.J(a)},
h(a,b){return this.$ti.i("4?").a(this.a.h(0,b))},
j(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.y[1].a(c))},
a7(a,b){this.a.a7(0,new A.pQ(this,b))},
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
return s.cd(s,new A.pP(this),this.$ti.i("R<3,4>"))}}
A.pQ.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.i("~(1,2)")}}
A.pP.prototype={
$1(a){var s=this.a.$ti
return new A.R(s.y[2].a(a.a),s.y[3].a(a.b),s.i("R<3,4>"))},
$S(){return this.a.$ti.i("R<3,4>(R<1,2>)")}}
A.dC.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.mM.prototype={
l(a){return"ReachabilityError: "+this.a}}
A.cj.prototype={
gm(a){return this.a.length},
h(a,b){return this.a.charCodeAt(b)}}
A.Bn.prototype={
$0(){return A.b8(null,t.H)},
$S:3}
A.wD.prototype={}
A.J.prototype={}
A.Z.prototype={
gu(a){var s=this
return new A.at(s,s.gm(s),A.n(s).i("at<Z.E>"))},
gE(a){return this.gm(this)===0},
gG(a){if(this.gm(this)===0)throw A.b(A.aD())
return this.a8(0,0)},
ga1(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
return s.a8(0,s.gm(s)-1)},
gap(a){var s=this
if(s.gm(s)===0)throw A.b(A.aD())
if(s.gm(s)>1)throw A.b(A.iD())
return s.a8(0,0)},
F(a,b){var s,r=this,q=r.gm(r)
for(s=0;s<q;++s){if(J.v(r.a8(0,s),b))return!0
if(q!==r.gm(r))throw A.b(A.az(r))}return!1},
cD(a,b){var s,r=this,q=r.gm(r)
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
ds(a,b){return this.of(0,b)},
cd(a,b,c){return new A.X(this,b,A.n(this).i("@<Z.E>").V(c).i("X<1,2>"))},
wp(a,b){var s,r,q=this,p=q.gm(q)
if(p===0)throw A.b(A.aD())
s=q.a8(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.a8(0,r))
if(p!==q.gm(q))throw A.b(A.az(q))}return s},
bi(a,b){return A.cu(this,b,null,A.n(this).i("Z.E"))},
cK(a,b){return A.cu(this,0,A.cz(b,"count",t.S),A.n(this).i("Z.E"))}}
A.ct.prototype={
iJ(a,b,c,d){var s,r=this.b
A.bb(r,"start")
s=this.c
if(s!=null){A.bb(s,"end")
if(r>s)throw A.b(A.aw(r,0,s,"start",null))}},
gpH(){var s=J.ap(this.a),r=this.c
if(r==null||r>s)return s
return r},
grU(){var s=J.ap(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.ap(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
a8(a,b){var s=this,r=s.grU()+b
if(b<0||r>=s.gpH())throw A.b(A.lW(b,s.gm(0),s,null,"index"))
return J.pn(s.a,r)},
bi(a,b){var s,r,q=this
A.bb(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.el(q.$ti.i("el<1>"))
return A.cu(q.a,s,r,q.$ti.c)},
cK(a,b){var s,r,q,p=this
A.bb(b,"count")
s=p.c
r=p.b
if(s==null)return A.cu(p.a,r,B.c.fG(r,b),p.$ti.c)
else{q=B.c.fG(r,b)
if(s<q)return p
return A.cu(p.a,r,q,p.$ti.c)}},
cL(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.M(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.DU(0,n):J.C0(0,n)}r=A.ae(s,m.a8(n,o),b,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.a8(n,o+q)
if(m.gm(n)<l)throw A.b(A.az(p))}return r},
eq(a){return this.cL(0,!0)}}
A.at.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s,r=this,q=r.a,p=J.M(q),o=p.gm(q)
if(r.b!==o)throw A.b(A.az(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.a8(q,s);++r.c
return!0}}
A.cl.prototype={
gu(a){return new A.md(J.E(this.a),this.b,A.n(this).i("md<1,2>"))},
gm(a){return J.ap(this.a)},
gE(a){return J.by(this.a)},
gG(a){return this.b.$1(J.bZ(this.a))},
ga1(a){return this.b.$1(J.po(this.a))},
gap(a){return this.b.$1(J.BK(this.a))},
a8(a,b){return this.b.$1(J.pn(this.a,b))}}
A.ek.prototype={$iJ:1}
A.md.prototype={
k(){var s=this,r=s.b
if(r.k()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.X.prototype={
gm(a){return J.ap(this.a)},
a8(a,b){return this.b.$1(J.pn(this.a,b))}}
A.al.prototype={
gu(a){return new A.cV(J.E(this.a),this.b,this.$ti.i("cV<1>"))},
cd(a,b,c){return new A.cl(this,b,this.$ti.i("@<1>").V(c).i("cl<1,2>"))}}
A.cV.prototype={
k(){var s,r
for(s=this.a,r=this.b;s.k();)if(r.$1(s.gn()))return!0
return!1},
gn(){return this.a.gn()}}
A.it.prototype={
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
return new A.nt(s.gu(s),this.b,A.n(this).i("nt<1>"))}}
A.iq.prototype={
gm(a){var s=this.a,r=s.gm(s)
s=this.b
if(B.c.nX(r,s))return s
return r},
$iJ:1}
A.nt.prototype={
k(){if(--this.b>=0)return this.a.k()
this.b=-1
return!1},
gn(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gn()}}
A.d9.prototype={
bi(a,b){A.kJ(b,"count")
A.bb(b,"count")
return new A.d9(this.a,this.b+b,A.n(this).i("d9<1>"))},
gu(a){var s=this.a
return new A.n1(s.gu(s),this.b,A.n(this).i("n1<1>"))}}
A.fp.prototype={
gm(a){var s=this.a,r=s.gm(s)-this.b
if(r>=0)return r
return 0},
bi(a,b){A.kJ(b,"count")
A.bb(b,"count")
return new A.fp(this.a,this.b+b,this.$ti)},
$iJ:1}
A.n1.prototype={
k(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.k()
this.b=0
return s.k()},
gn(){return this.a.gn()}}
A.el.prototype={
gu(a){return B.aQ},
gE(a){return!0},
gm(a){return 0},
gG(a){throw A.b(A.aD())},
ga1(a){throw A.b(A.aD())},
gap(a){throw A.b(A.aD())},
a8(a,b){throw A.b(A.aw(b,0,0,"index",null))},
F(a,b){return!1},
cD(a,b){return!0},
ds(a,b){return this},
cd(a,b,c){return new A.el(c.i("el<0>"))},
bi(a,b){A.bb(b,"count")
return this},
cK(a,b){A.bb(b,"count")
return this},
cL(a,b){var s=J.C0(0,this.$ti.c)
return s},
fB(a){return A.mb(this.$ti.c)}}
A.lt.prototype={
k(){return!1},
gn(){throw A.b(A.aD())}}
A.bF.prototype={
gu(a){return new A.nT(J.E(this.a),this.$ti.i("nT<1>"))}}
A.nT.prototype={
k(){var s,r
for(s=this.a,r=this.$ti.c;s.k();)if(r.b(s.gn()))return!0
return!1},
gn(){return this.$ti.c.a(this.a.gn())}}
A.iw.prototype={
sm(a,b){throw A.b(A.Y(u.O))},
t(a,b){throw A.b(A.Y("Cannot add to a fixed-length list"))}}
A.nF.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.b(A.Y("Cannot change the length of an unmodifiable list"))},
t(a,b){throw A.b(A.Y("Cannot add to an unmodifiable list"))},
cj(a,b){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
ai(a,b,c,d,e){throw A.b(A.Y("Cannot modify an unmodifiable list"))},
au(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.hg.prototype={}
A.bT.prototype={
gm(a){return J.ap(this.a)},
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
A.hF.prototype={$r:"+file,outFlags(1,2)",$s:4}
A.oB.prototype={$r:"+result,resultCode(1,2)",$s:5}
A.eV.prototype={$r:"+(1,2,3)",$s:6}
A.eW.prototype={$r:"+(1,2,3,4)",$s:7}
A.oC.prototype={$r:"+blocked,conflicts,hidden,pending(1,2,3,4)",$s:8}
A.il.prototype={}
A.fl.prototype={
c2(a,b,c){var s=A.n(this)
return A.E0(this,s.c,s.y[1],b,c)},
gE(a){return this.gm(this)===0},
gW(a){return this.gm(this)!==0},
l(a){return A.uI(this)},
j(a,b,c){A.HI()},
gab(){return new A.hK(this.uM(),A.n(this).i("hK<R<1,2>>"))},
uM(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gab(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gK(),o=o.gu(o),n=A.n(s).i("R<1,2>")
case 2:if(!o.k()){r=3
break}m=o.gn()
r=4
return a.b=new A.R(m,s.h(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
aT(a,b,c,d){var s=A.t(c,d)
this.a7(0,new A.qy(this,b,s))
return s},
$iI:1}
A.qy.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.j(0,s.a,s.b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.aV.prototype={
gm(a){return this.b.length},
gly(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
J(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
h(a,b){if(!this.J(b))return null
return this.b[this.a[b]]},
a7(a,b){var s,r,q=this.gly(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gK(){return new A.eS(this.gly(),this.$ti.i("eS<1>"))},
gaX(){return new A.eS(this.b,this.$ti.i("eS<2>"))}}
A.eS.prototype={
gm(a){return this.a.length},
gE(a){return 0===this.a.length},
gW(a){return 0!==this.a.length},
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
dI(){var s=this,r=s.$map
if(r==null){r=new A.iH(s.$ti.i("iH<1,2>"))
A.G8(s.a,r)
s.$map=r}return r},
J(a){return this.dI().J(a)},
h(a,b){return this.dI().h(0,b)},
a7(a,b){this.dI().a7(0,b)},
gK(){var s=this.dI()
return new A.T(s,A.n(s).i("T<1>"))},
gaX(){var s=this.dI()
return new A.aq(s,A.n(s).i("aq<2>"))},
gm(a){return this.dI().a}}
A.im.prototype={
t(a,b){A.HJ()}}
A.du.prototype={
gm(a){return this.b},
gE(a){return this.b===0},
gW(a){return this.b!==0},
gu(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.hA(s,s.length,r.$ti.i("hA<1>"))},
F(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.tm.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.iC&&this.a.R(0,b.a)&&A.D_(this)===A.D_(b)},
gI(a){return A.c6(this.a,A.D_(this),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=B.b.B([A.bJ(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.iC.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Mz(A.pb(this.a),this.$ti)}}
A.vN.prototype={
$0(){return B.x.v_(1000*this.a.now())},
$S:11}
A.jg.prototype={}
A.xo.prototype={
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
A.nE.prototype={
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
A.ef.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.Gw(r==null?"unknown":r)+"'"},
gak(a){var s=A.pb(this)
return A.bJ(s==null?A.bx(this):s)},
gxQ(){return this},
$C:"$1",
$R:1,
$D:null}
A.pV.prototype={$C:"$0",$R:0}
A.pW.prototype={$C:"$2",$R:2}
A.xe.prototype={}
A.wO.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.Gw(s)+"'"}}
A.id.prototype={
R(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.id))return!1
return this.$_target===b.$_target&&this.a===b.a},
gI(a){return(A.kt(this.a)^A.ez(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.mD(this.a)+"'")}}
A.mV.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bB.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gW(a){return this.a!==0},
gK(){return new A.T(this,A.n(this).i("T<1>"))},
gaX(){return new A.aq(this,A.n(this).i("aq<2>"))},
gab(){return new A.aM(this,A.n(this).i("aM<1,2>"))},
J(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.mM(a)},
mM(a){var s=this.d
if(s==null)return!1
return this.df(this.ls(s,a),a)>=0},
C(a,b){b.a7(0,new A.tt(this))},
h(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.mN(b)},
mN(a){var s,r,q=this.d
if(q==null)return null
s=this.ls(q,a)
r=this.df(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.kT(s==null?q.b=q.jh():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.kT(r==null?q.c=q.jh():r,b,c)}else q.mP(b,c)},
mP(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.jh()
s=p.eb(a)
r=o[s]
if(r==null)o[s]=[p.iL(a,b)]
else{q=p.df(r,a)
if(q>=0)r[q].b=b
else r.push(p.iL(a,b))}},
kj(a,b){var s,r,q=this
if(q.J(a)){s=q.h(0,a)
return s==null?A.n(q).y[1].a(s):s}r=b.$0()
q.j(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.lS(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.lS(s.c,b)
else return s.mO(b)},
mO(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.eb(a)
r=n[s]
q=o.df(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.m9(p)
if(r.length===0)delete n[s]
return p.b},
aj(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.iK()}},
a7(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.b(A.az(s))
r=r.c}},
kT(a,b,c){var s=a[b]
if(s==null)a[b]=this.iL(b,c)
else s.b=c},
lS(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.m9(s)
delete a[b]
return s.b},
iK(){this.r=this.r+1&1073741823},
iL(a,b){var s,r=this,q=new A.ur(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.iK()
return q},
m9(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.iK()},
eb(a){return J.a7(a)&1073741823},
ls(a,b){return a[this.eb(b)]},
df(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1},
l(a){return A.uI(this)},
jh(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.tt.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.ur.prototype={}
A.T.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gu(a){var s=this.a
return new A.bC(s,s.r,s.e,this.$ti.i("bC<1>"))},
F(a,b){return this.a.J(b)}}
A.bC.prototype={
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
return new A.aR(s,s.r,s.e,this.$ti.i("aR<1>"))}}
A.aR.prototype={
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
eb(a){return A.kt(a)&1073741823},
df(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.iH.prototype={
eb(a){return A.M4(a)&1073741823},
df(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.Bh.prototype={
$1(a){return this.a(a)},
$S:39}
A.Bi.prototype={
$2(a,b){return this.a(a,b)},
$S:145}
A.Bj.prototype={
$1(a){return this.a(a)},
$S:51}
A.hE.prototype={
gak(a){return A.bJ(this.lt())},
lt(){return A.Mj(this.$r,this.h2())},
l(a){return this.m7(!1)},
m7(a){var s,r,q,p,o,n=this.pP(),m=this.h2(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.Eb(o):l+A.r(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
pP(){var s,r=this.$s
while($.zK.length<=r)$.zK.push(null)
s=$.zK[r]
if(s==null){s=this.pi()
$.zK[r]=s}return s},
pi(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.DT(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}return A.fC(j,k)}}
A.oy.prototype={
h2(){return[this.a,this.b]},
R(a,b){if(b==null)return!1
return b instanceof A.oy&&this.$s===b.$s&&J.v(this.a,b.a)&&J.v(this.b,b.b)},
gI(a){return A.c6(this.$s,this.a,this.b,B.d,B.d,B.d,B.d)}}
A.oz.prototype={
h2(){return[this.a,this.b,this.c]},
R(a,b){var s=this
if(b==null)return!1
return b instanceof A.oz&&s.$s===b.$s&&J.v(s.a,b.a)&&J.v(s.b,b.b)&&J.v(s.c,b.c)},
gI(a){var s=this
return A.c6(s.$s,s.a,s.b,s.c,B.d,B.d,B.d)}}
A.oA.prototype={
h2(){return this.a},
R(a,b){if(b==null)return!1
return b instanceof A.oA&&this.$s===b.$s&&A.K_(this.a,b.a)},
gI(a){return A.c6(this.$s,A.v8(this.a),B.d,B.d,B.d,B.d,B.d)}}
A.eq.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
glE(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.C2(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
gqu(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.C2(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
pj(){var s,r=this.a
if(!B.a.F(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
e8(a){var s=this.b.exec(a)
if(s==null)return null
return new A.hD(s)},
jE(a,b,c){var s=b.length
if(c>s)throw A.b(A.aw(c,0,s,null,null))
return new A.nZ(this,b,c)},
hw(a,b){return this.jE(0,b,0)},
pM(a,b){var s,r=this.glE()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hD(s)},
pL(a,b){var s,r=this.gqu()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.hD(s)},
eg(a,b,c){if(c<0||c>b.length)throw A.b(A.aw(c,0,b.length,null,null))
return this.pL(b,c)}}
A.hD.prototype={
gP(){return this.b.index},
gM(){var s=this.b
return s.index+s[0].length},
h(a,b){return this.b[b]},
$ieu:1,
$imN:1}
A.nZ.prototype={
gu(a){return new A.o_(this.a,this.b,this.c)}}
A.o_.prototype={
gn(){var s=this.d
return s==null?t.lu.a(s):s},
k(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.pM(l,s)
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
h(a,b){if(b!==0)throw A.b(A.wq(b,null))
return this.c},
$ieu:1,
gP(){return this.a}}
A.oO.prototype={
gu(a){return new A.A5(this.a,this.b,this.c)},
gG(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.h9(r,s)
throw A.b(A.aD())}}
A.A5.prototype={
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
A.o7.prototype={
bu(){var s=this.b
if(s===this)throw A.b(new A.dC("Local '"+this.a+"' has not been initialized."))
return s},
bt(){var s=this.b
if(s===this)throw A.b(A.E_(this.a))
return s},
sjU(a){var s=this
if(s.b!==s)throw A.b(new A.dC("Local '"+s.a+"' has already been initialized."))
s.b=a}}
A.fJ.prototype={
gak(a){return B.dz},
hy(a,b,c){A.hS(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
ml(a){return this.hy(a,0,null)},
mk(a,b,c){A.hS(a,b,c)
if(c==null)c=B.c.N(a.byteLength-b,4)
return new Uint32Array(a,b,c)},
hx(a,b,c){A.hS(a,b,c)
return c==null?new DataView(a,b):new DataView(a,b,c)},
mj(a){return this.hx(a,0,null)},
$iaj:1,
$ieb:1}
A.fI.prototype={$ifI:1}
A.j0.prototype={
gaa(a){if(((a.$flags|0)&2)!==0)return new A.oW(a.buffer)
else return a.buffer},
qi(a,b,c,d){var s=A.aw(b,0,c,d,null)
throw A.b(s)},
l3(a,b,c,d){if(b>>>0!==b||b>c)this.qi(a,b,c,d)}}
A.oW.prototype={
hy(a,b,c){var s=A.bS(this.a,b,c)
s.$flags=3
return s},
ml(a){return this.hy(0,0,null)},
mk(a,b,c){var s=A.E4(this.a,b,c)
s.$flags=3
return s},
hx(a,b,c){var s=A.E3(this.a,b,c)
s.$flags=3
return s},
mj(a){return this.hx(0,0,null)},
$ieb:1}
A.j_.prototype={
gak(a){return B.dA},
$iaj:1,
$iBM:1}
A.fK.prototype={
gm(a){return a.length},
lZ(a,b,c,d,e){var s,r,q=a.length
this.l3(a,b,q,"start")
this.l3(a,c,q,"end")
if(b>c)throw A.b(A.aw(b,0,c,null,null))
s=c-b
if(e<0)throw A.b(A.Q(e,null))
r=d.length
if(r-e<s)throw A.b(A.x("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ib9:1,
$ibQ:1}
A.dK.prototype={
h(a,b){A.dk(b,a,a.length)
return a[b]},
j(a,b,c){a.$flags&2&&A.H(a)
A.dk(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.dQ.b(d)){this.lZ(a,b,c,d,e)
return}this.kQ(a,b,c,d,e)},
au(a,b,c,d){return this.ai(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.bR.prototype={
j(a,b,c){a.$flags&2&&A.H(a)
A.dk(b,a,a.length)
a[b]=c},
ai(a,b,c,d,e){a.$flags&2&&A.H(a,5)
if(t.aj.b(d)){this.lZ(a,b,c,d,e)
return}this.kQ(a,b,c,d,e)},
au(a,b,c,d){return this.ai(a,b,c,d,0)},
$iJ:1,
$io:1,
$ip:1}
A.ml.prototype={
gak(a){return B.dB},
T(a,b,c){return new Float32Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$irI:1}
A.mm.prototype={
gak(a){return B.dC},
T(a,b,c){return new Float64Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$irJ:1}
A.mn.prototype={
gak(a){return B.dD},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Int16Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$itn:1}
A.mo.prototype={
gak(a){return B.dE},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Int32Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$ito:1}
A.mp.prototype={
gak(a){return B.dF},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Int8Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$itp:1}
A.j1.prototype={
gak(a){return B.dJ},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint16Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$ixr:1}
A.j2.prototype={
gak(a){return B.dK},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint32Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$ixs:1}
A.j3.prototype={
gak(a){return B.dL},
gm(a){return a.length},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8ClampedArray(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$ixt:1}
A.ev.prototype={
gak(a){return B.dM},
gm(a){return a.length},
h(a,b){A.dk(b,a,a.length)
return a[b]},
T(a,b,c){return new Uint8Array(a.subarray(b,A.dl(b,c,a.length)))},
b5(a,b){return this.T(a,b,null)},
$iaj:1,
$iev:1,
$icS:1}
A.jY.prototype={}
A.jZ.prototype={}
A.k_.prototype={}
A.k0.prototype={}
A.cp.prototype={
i(a){return A.kd(v.typeUniverse,this,a)},
V(a){return A.F0(v.typeUniverse,this,a)}}
A.ol.prototype={}
A.oT.prototype={
l(a){return A.bW(this.a,null)}}
A.oh.prototype={
l(a){return this.a}}
A.k9.prototype={$idc:1}
A.y6.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:38}
A.y5.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:163}
A.y7.prototype={
$0(){this.a.$0()},
$S:2}
A.y8.prototype={
$0(){this.a.$0()},
$S:2}
A.k8.prototype={
oF(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e5(new A.A8(this,b),0),a)
else throw A.b(A.Y("`setTimeout()` not found."))},
oG(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e5(new A.A7(this,a,Date.now(),b),0),a)
else throw A.b(A.Y("Periodic timer."))},
D(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.b(A.Y("Canceling a timer."))},
$idb:1}
A.A8.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.A7.prototype={
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
if(r.$ti.i("A<1>").b(a))s.l2(a)
else s.cT(a)}},
c4(a,b){var s
if(b==null)b=A.ia(a)
s=this.a
if(this.b)s.am(new A.am(a,b))
else s.cl(new A.am(a,b))},
aR(a){return this.c4(a,null)},
$iij:1}
A.Ay.prototype={
$1(a){return this.a.$2(0,a)},
$S:25}
A.Az.prototype={
$2(a,b){this.a.$2(1,new A.is(a,b))},
$S:194}
A.AR.prototype={
$2(a,b){this.a(a,b)},
$S:105}
A.Aw.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.y()
s=q.b
if((s&1)!==0?(q.gaM().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.Ax.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:38}
A.o1.prototype={
oB(a,b){var s=new A.ya(a)
this.a=A.wQ(new A.yc(this,a),new A.yd(s),new A.ye(this,s),!1,b)}}
A.ya.prototype={
$0(){A.kw(new A.yb(this.a))},
$S:2}
A.yb.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.yd.prototype={
$0(){this.a.$0()},
$S:0}
A.ye.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.yc.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.y()
if((r.b&4)===0){s.c=new A.u($.C,t._)
if(s.b){s.b=!1
A.kw(new A.y9(this.b))}return s.c}},
$S:158}
A.y9.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.jU.prototype={
l(a){return"IterationMarker("+this.b+", "+A.r(this.a)+")"}}
A.oQ.prototype={
gn(){return this.b},
rv(a,b){var s,r,q
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
o.d=null}q=o.rv(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.EV
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.EV
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.b(A.x("sync*"))}return!1},
xR(a){var s,r,q=this
if(a instanceof A.hK){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.E(a)
return 2}}}
A.hK.prototype={
gu(a){return new A.oQ(this.a(),this.$ti.i("oQ<1>"))}}
A.am.prototype={
l(a){return A.r(this.a)},
$iad:1,
gck(){return this.b}}
A.b0.prototype={}
A.eM.prototype={
bF(){},
bG(){}}
A.jI.prototype={
gcQ(){return new A.b0(this,A.n(this).i("b0<1>"))},
gi4(){return(this.c&4)!==0},
gjf(){return this.c<4},
rs(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
jw(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.EM(c,A.n(j).c)
s=A.n(j)
r=$.C
q=d?1:0
p=b!=null?32:0
o=A.o5(r,a,s.c)
n=A.yl(r,b)
m=c==null?A.AS():c
l=new A.eM(j,o,n,r.bR(m,t.H),r,q|p,s.i("eM<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.p7(j.a)
return l},
lM(a){var s,r=this
A.n(r).i("eM<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.rs(a)
if((r.c&2)===0&&r.d==null)r.p5()}return null},
lN(a){},
lO(a){},
iN(){if((this.c&4)!==0)return new A.bk("Cannot add new events after calling close")
return new A.bk("Cannot add new events while doing an addStream")},
t(a,b){if(!this.gjf())throw A.b(this.iN())
this.cu(b)},
bx(a,b){var s
if(!this.gjf())throw A.b(this.iN())
s=A.f_(a,b)
this.cv(s.a,s.b)},
q(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gjf())throw A.b(q.iN())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.u($.C,t.D)
q.d5()
return r},
aG(a,b){this.cv(a,b)},
aQ(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aK(null)},
p5(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aK(null)}A.p7(this.b)},
$ibA:1}
A.jD.prototype={
cu(a){var s,r
for(s=this.d,r=this.$ti.i("cb<1>");s!=null;s=s.ch)s.bW(new A.cb(a,r))},
cv(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bW(new A.hv(a,b))},
d5(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bW(B.aa)
else this.r.aK(null)}}
A.rS.prototype={
$0(){this.c.a(null)
this.b.cm(null)},
$S:0}
A.rU.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.am(new A.am(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.am(new A.am(q,r))}},
$S:13}
A.rT.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.bY(j,m.b,a)
if(J.v(k,0)){l=m.d
s=A.k([],l.i("B<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.q)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.aL(s,n)}m.c.cT(s)}}else if(J.v(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.am(new A.am(s,l))}},
$S(){return this.d.i("W(0)")}}
A.rN.prototype={
$2(a,b){if(!this.a.b(a))throw A.b(a)
return this.c.$2(a,b)},
$S(){return this.d.i("0/(j,aF)")}}
A.nu.prototype={
l(a){var s=this.b.l(0)
return"TimeoutException after "+s+": "+this.a},
$iG:1}
A.rO.prototype={
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
l.a.aR(new A.j8(B.b.mG(s,A.LI()),a,q.i("j8<p<0?>,p<am?>>")))}},
$S:8}
A.j8.prototype={
l(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.r(p.a)},
gck(){var s=this.c
s=s==null?null:s.b
return s==null?A.ad.prototype.gck.call(this):s}}
A.jS.prototype={
tc(a){this.a.bS(new A.z5(this,a),new A.z6(this,a),t.P)}}
A.z5.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.i("W(1)")}}
A.z6.prototype={
$2(a,b){this.a.c=new A.am(a,b)
this.b.$1(1)},
$S:12}
A.z4.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:8}
A.eN.prototype={
c4(a,b){if((this.a.a&30)!==0)throw A.b(A.x("Future already completed"))
this.am(A.f_(a,b))},
aR(a){return this.c4(a,null)},
$iij:1}
A.aI.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.aK(a)},
an(){return this.aB(null)},
am(a){this.a.cl(a)}}
A.an.prototype={
aB(a){var s=this.a
if((s.a&30)!==0)throw A.b(A.x("Future already completed"))
s.cm(a)},
an(){return this.aB(null)},
am(a){this.a.am(a)}}
A.cc.prototype={
vS(a){if((this.c&15)!==6)return!0
return this.b.b.ep(this.d,a.a,t.y,t.K)},
vd(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.kp(r,n,a.b,p,o,t.l)
else q=m.ep(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.F(s))){if((this.c&1)!==0)throw A.b(A.Q("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.Q("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
bS(a,b,c){var s,r,q=$.C
if(q===B.i){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.b(A.aH(b,"onError",u.w))}else{a=q.dk(a,c.i("0/"),this.$ti.c)
if(b!=null)b=A.FC(b,q)}s=new A.u($.C,c.i("u<0>"))
r=b==null?1:3
this.dD(new A.cc(s,r,a,b,this.$ti.i("@<1>").V(c).i("cc<1,2>")))
return s},
X(a,b){return this.bS(a,null,b)},
m5(a,b,c){var s=new A.u($.C,c.i("u<0>"))
this.dD(new A.cc(s,19,a,b,this.$ti.i("@<1>").V(c).i("cc<1,2>")))
return s},
mp(a){var s=this.$ti,r=$.C,q=new A.u(r,s)
if(r!==B.i)a=A.FC(a,r)
this.dD(new A.cc(q,2,null,a,s.i("cc<1,1>")))
return q},
aY(a){var s=this.$ti,r=$.C,q=new A.u(r,s)
if(r!==B.i)a=r.bR(a,t.z)
this.dD(new A.cc(q,8,a,null,s.i("cc<1,1>")))
return q},
rM(a){this.a=this.a&1|16
this.c=a},
fT(a){this.a=a.a&30|this.a&1
this.c=a.c},
dD(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.dD(a)
return}s.fT(r)}s.b.cN(new A.z7(s,a))}},
lJ(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.lJ(a)
return}n.fT(s)}m.a=n.he(a)
n.b.cN(new A.zc(m,n))}},
eQ(){var s=this.c
this.c=null
return this.he(s)},
he(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cm(a){var s,r=this
if(r.$ti.i("A<1>").b(a))A.za(a,r,!0)
else{s=r.eQ()
r.a=8
r.c=a
A.eQ(r,s)}},
cT(a){var s=this,r=s.eQ()
s.a=8
s.c=a
A.eQ(s,r)},
ph(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gc7()===r.gc7())}else s=!1
if(s)return
q=p.eQ()
p.fT(a)
A.eQ(p,q)},
am(a){var s=this.eQ()
this.rM(a)
A.eQ(this,s)},
pg(a,b){this.am(new A.am(a,b))},
aK(a){if(this.$ti.i("A<1>").b(a)){this.l2(a)
return}this.l_(a)},
l_(a){this.a^=2
this.b.cN(new A.z9(this,a))},
l2(a){A.za(a,this,!1)
return},
cl(a){this.a^=2
this.b.cN(new A.z8(this,a))},
ip(a){var s,r=this,q={}
if((r.a&24)!==0){q=new A.u($.C,r.$ti)
q.aK(r)
return q}s=new A.u($.C,r.$ti)
q.a=null
q.a=A.cR(a,new A.zi(s,a))
r.bS(new A.zj(q,r,s),new A.zk(q,s),t.P)
return s},
$iA:1}
A.z7.prototype={
$0(){A.eQ(this.a,this.b)},
$S:0}
A.zc.prototype={
$0(){A.eQ(this.b,this.a.a)},
$S:0}
A.zb.prototype={
$0(){A.za(this.a.a,this.b,!0)},
$S:0}
A.z9.prototype={
$0(){this.a.cT(this.b)},
$S:0}
A.z8.prototype={
$0(){this.a.am(this.b)},
$S:0}
A.zf.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.aV(q.d,t.z)}catch(p){s=A.F(p)
r=A.ai(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.ia(q)
n=k.a
n.c=new A.am(q,o)
q=n}q.b=!0
return}if(j instanceof A.u&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.u){m=k.b.a
l=new A.u(m.b,m.$ti)
j.bS(new A.zg(l,m),new A.zh(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.zg.prototype={
$1(a){this.a.ph(this.b)},
$S:38}
A.zh.prototype={
$2(a,b){this.a.am(new A.am(a,b))},
$S:12}
A.ze.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.ep(p.d,this.b,o.i("2/"),o.c)}catch(n){s=A.F(n)
r=A.ai(n)
q=s
p=r
if(p==null)p=A.ia(q)
o=this.a
o.c=new A.am(q,p)
o.b=!0}},
$S:0}
A.zd.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.vS(s)&&p.a.e!=null){p.c=p.a.vd(s)
p.b=!1}}catch(o){r=A.F(o)
q=A.ai(o)
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
A.zi.prototype={
$0(){var s=A.Cl()
this.a.am(new A.am(new A.nu("Future not completed",this.b),s))},
$S:0}
A.zj.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.D()
this.c.cT(a)}},
$S(){return this.b.$ti.i("W(1)")}}
A.zk.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.D()
this.b.am(new A.am(a,b))}},
$S:12}
A.o0.prototype={}
A.aa.prototype={
ec(a){var s=new A.u($.C,t.os),r=new A.a2(""),q=this.a9(null,!0,new A.wT(s,r),s.giT())
q.i9(new A.wU(this,r,q,s))
return s},
gm(a){var s={},r=new A.u($.C,t.hy)
s.a=0
this.a9(new A.wV(s,this),!0,new A.wW(s,r),r.giT())
return r},
gG(a){var s=new A.u($.C,A.n(this).i("u<aa.T>")),r=this.a9(null,!0,new A.wR(s),s.giT())
r.i9(new A.wS(this,r,s))
return s}}
A.wT.prototype={
$0(){var s=this.b.a
this.a.cm(s.charCodeAt(0)==0?s:s)},
$S:0}
A.wU.prototype={
$1(a){var s,r,q,p,o,n
try{q=this.b
p=A.r(a)
q.a+=p}catch(o){s=A.F(o)
r=A.ai(o)
q=s
p=r
n=A.kk(q,p)
if(n==null)q=new A.am(q,p)
else q=n
A.Kv(this.c,this.d,q)}},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.wV.prototype={
$1(a){++this.a.a},
$S(){return A.n(this.b).i("~(aa.T)")}}
A.wW.prototype={
$0(){this.b.cm(this.a.a)},
$S:0}
A.wR.prototype={
$0(){var s,r=A.Cl(),q=new A.bk("No element")
A.mF(q,r)
s=A.kk(q,r)
if(s==null)s=new A.am(q,r)
this.a.am(s)},
$S:0}
A.wS.prototype={
$1(a){A.Kw(this.b,this.c,a)},
$S(){return A.n(this.a).i("~(aa.T)")}}
A.jq.prototype={
a9(a,b,c,d){return this.a.a9(a,b,c,d)},
by(a,b,c){return this.a9(a,null,b,c)},
aS(a){return this.a9(a,null,null,null)}}
A.e0.prototype={
gcQ(){return new A.b5(this,A.n(this).i("b5<1>"))},
gi4(){return(this.b&4)!==0},
gqT(){if((this.b&8)===0)return this.a
return this.a.c},
fX(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.e_(A.n(q).i("e_<1>")):s}r=q.a
s=r.c
return s==null?r.c=new A.e_(A.n(q).i("e_<1>")):s},
gaM(){var s=this.a
return(this.b&8)!==0?s.c:s},
bD(){if((this.b&4)!==0)return new A.bk("Cannot add event after closing")
return new A.bk("Cannot add event while adding a stream")},
tw(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.b(p.bD())
if((o&2)!==0){o=new A.u($.C,t._)
o.aK(null)
return o}o=p.a
s=b===!0
r=new A.u($.C,t._)
q=s?A.Jn(p):p.goK()
q=a.a9(p.goO(),s,p.gp7(),q)
s=p.b
if((s&1)!==0?(p.gaM().e&4)!==0:(s&2)===0)q.bd()
p.a=new A.k5(o,r,q,A.n(p).i("k5<1>"))
p.b|=8
return r},
lk(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.e7():new A.u($.C,t.D)
return s},
t(a,b){if(this.b>=4)throw A.b(this.bD())
this.aA(b)},
bx(a,b){var s
if(this.b>=4)throw A.b(this.bD())
s=A.f_(a,b)
this.aG(s.a,s.b)},
tv(a){return this.bx(a,null)},
q(){var s=this,r=s.b
if((r&4)!==0)return s.lk()
if(r>=4)throw A.b(s.bD())
s.l4()
return s.lk()},
l4(){var s=this.b|=4
if((s&1)!==0)this.d5()
else if((s&3)===0)this.fX().t(0,B.aa)},
aA(a){var s=this,r=s.b
if((r&1)!==0)s.cu(a)
else if((r&3)===0)s.fX().t(0,new A.cb(a,A.n(s).i("cb<1>")))},
aG(a,b){var s=this.b
if((s&1)!==0)this.cv(a,b)
else if((s&3)===0)this.fX().t(0,new A.hv(a,b))},
aQ(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aK(null)},
jw(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.b(A.x("Stream has already been listened to."))
s=A.JF(p,a,b,c,d,A.n(p).c)
r=p.gqT()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.b1()}else p.a=s
s.rN(r)
s.j4(new A.A1(p))
return s},
lM(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.D()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.u)k=r}catch(o){q=A.F(o)
p=A.ai(o)
n=new A.u($.C,t.D)
n.cl(new A.am(q,p))
k=n}else k=k.aY(s)
m=new A.A0(l)
if(k!=null)k=k.aY(m)
else m.$0()
return k},
lN(a){if((this.b&8)!==0)this.a.b.bd()
A.p7(this.e)},
lO(a){if((this.b&8)!==0)this.a.b.b1()
A.p7(this.f)},
$ibA:1}
A.A1.prototype={
$0(){A.p7(this.a.d)},
$S:0}
A.A0.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aK(null)},
$S:0}
A.oR.prototype={
cu(a){this.gaM().aA(a)},
cv(a,b){this.gaM().aG(a,b)},
d5(){this.gaM().aQ()}}
A.jE.prototype={
cu(a){this.gaM().bW(new A.cb(a,A.n(this).i("cb<1>")))},
cv(a,b){this.gaM().bW(new A.hv(a,b))},
d5(){this.gaM().bW(B.aa)}}
A.cW.prototype={}
A.hL.prototype={}
A.b5.prototype={
gI(a){return(A.ez(this.a)^892482866)>>>0},
R(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.b5&&b.a===this.a}}
A.dW.prototype={
h7(){return this.w.lM(this)},
bF(){this.w.lN(this)},
bG(){this.w.lO(this)}}
A.nY.prototype={
D(){var s=this.b.D()
return s.aY(new A.y1(this))}}
A.y2.prototype={
$2(a,b){var s=this.a
s.aG(a,b)
s.aQ()},
$S:12}
A.y1.prototype={
$0(){this.a.a.aK(null)},
$S:2}
A.k5.prototype={}
A.b1.prototype={
rN(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.fK(s)}},
i9(a){this.a=A.o5(this.d,a,A.n(this).i("b1.T"))},
bd(){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+256|4)>>>0
q.e=s
if(p<256){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&64)===0)q.j4(q.geG())},
b1(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.fK(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.j4(s.geH())}}},
D(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.iP()
r=s.f
return r==null?$.e7():r},
iP(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.h7()},
aA(a){var s=this,r=s.e
if((r&8)!==0)return
if(r<64)s.cu(a)
else s.bW(new A.cb(a,A.n(s).i("cb<b1.T>")))},
aG(a,b){var s
if(t.C.b(a))A.mF(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.cv(a,b)
else this.bW(new A.hv(a,b))},
aQ(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.d5()
else s.bW(B.aa)},
bF(){},
bG(){},
h7(){return null},
bW(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.e_(A.n(r).i("e_<b1.T>"))
q.t(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.fK(r)}},
cu(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.fA(s.a,a,A.n(s).i("b1.T"))
s.e=(s.e&4294967231)>>>0
s.iR((r&4)!==0)},
cv(a,b){var s,r=this,q=r.e,p=new A.yn(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.iP()
s=r.f
if(s!=null&&s!==$.e7())s.aY(p)
else p.$0()}else{p.$0()
r.iR((q&4)!==0)}},
d5(){var s,r=this,q=new A.ym(r)
r.iP()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.e7())s.aY(q)
else q.$0()},
j4(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.iR((r&4)!==0)},
iR(a){var s,r,q=this,p=q.e
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
A.yn.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.n7(s,o,this.c,r,t.l)
else q.fA(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.ym.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.fz(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.hJ.prototype={
a9(a,b,c,d){return this.a.jw(a,d,c,b===!0)},
by(a,b,c){return this.a9(a,null,b,c)},
aS(a){return this.a9(a,null,null,null)},
vI(a,b){return this.a9(a,null,null,b)}}
A.og.prototype={
geh(){return this.a},
seh(a){return this.a=a}}
A.cb.prototype={
kh(a){a.cu(this.b)}}
A.hv.prototype={
kh(a){a.cv(this.b,this.c)}}
A.yY.prototype={
kh(a){a.d5()},
geh(){return null},
seh(a){throw A.b(A.x("No events after a done."))}}
A.e_.prototype={
fK(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.kw(new A.zJ(s,a))
s.a=1},
t(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.seh(b)
s.c=b}}}
A.zJ.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.geh()
q.b=r
if(r==null)q.c=null
s.kh(this.b)},
$S:0}
A.hw.prototype={
i9(a){},
bd(){var s=this.a
if(s>=0)this.a=s+2},
b1(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.kw(s.glG())}else s.a=r},
D(){this.a=-1
this.c=null
return $.e7()},
qI(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.fz(s)}}else r.a=q},
$ibl:1}
A.cy.prototype={
gn(){if(this.c)return this.b
return null},
k(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.u($.C,t.g5)
r.b=s
r.c=!1
q.b1()
return s}throw A.b(A.x("Already waiting for next."))}return r.qh()},
qh(){var s,r,q=this,p=q.b
if(p!=null){s=new A.u($.C,t.g5)
q.b=s
r=p.a9(q.gqA(),!0,q.gqC(),q.gqE())
if(q.b!=null)q.a=r
return s}return $.GC()},
D(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aK(!1)
else s.c=!1
return r.D()}return $.e7()},
qB(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.cm(!0)
if(q.c){r=q.a
if(r!=null)r.bd()}},
qF(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.am(new A.am(a,b))
else q.cl(new A.am(a,b))},
qD(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.cT(!1)
else q.l_(!1)}}
A.jN.prototype={
a9(a,b,c,d){return A.EM(c,this.$ti.c)},
by(a,b,c){return this.a9(a,null,b,c)}}
A.di.prototype={
a9(a,b,c,d){var s=null,r=new A.jX(s,s,s,s,this.$ti.i("jX<1>"))
r.d=new A.zH(this,r)
return r.jw(a,d,c,b===!0)},
by(a,b,c){return this.a9(a,null,b,c)},
aS(a){return this.a9(a,null,null,null)}}
A.zH.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.jX.prototype={
tx(a){var s=this.b
if(s>=4)throw A.b(this.bD())
if((s&1)!==0)this.gaM().aA(a)},
tN(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.b(s.bD())
r|=4
s.b=r
if((r&1)!==0)s.gaM().aQ()},
gcQ(){throw A.b(A.Y("Not available"))},
$idI:1}
A.AB.prototype={
$0(){return this.a.am(this.b)},
$S:0}
A.AC.prototype={
$0(){return this.a.cm(this.b)},
$S:0}
A.jQ.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.o5(r,a,s.y[1]),n=A.yl(r,d),m=c==null?A.AS():c
s=new A.hz(this,o,n,r.bR(m,t.H),r,q|p,s.i("hz<1,2>"))
s.x=this.a.by(s.gj5(),s.gj7(),s.gj9())
return s},
by(a,b,c){return this.a9(a,null,b,c)}}
A.hz.prototype={
aA(a){if((this.e&2)!==0)return
this.iH(a)},
aG(a,b){if((this.e&2)!==0)return
this.kR(a,b)},
bF(){var s=this.x
if(s!=null)s.bd()},
bG(){var s=this.x
if(s!=null)s.b1()},
h7(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
j6(a){this.w.q3(a,this)},
ja(a,b){this.aG(a,b)},
j8(){this.aQ()}}
A.eT.prototype={
q3(a,b){var s,r,q,p,o,n,m=null
try{m=this.b.$1(a)}catch(q){s=A.F(q)
r=A.ai(q)
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
s.kS()},
$ibA:1}
A.hH.prototype={
aA(a){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.iH(a)},
aG(a,b){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.kR(a,b)},
aQ(){if((this.e&2)!==0)throw A.b(A.x("Stream is already closed"))
this.kS()},
bF(){var s=this.x
if(s!=null)s.bd()},
bG(){var s=this.x
if(s!=null)s.b1()},
h7(){var s=this.x
if(s!=null){this.x=null
return s.D()}return null},
j6(a){var s,r,q,p
try{q=this.w
q===$&&A.y()
q.t(0,a)}catch(p){s=A.F(p)
r=A.ai(p)
this.aG(s,r)}},
ja(a,b){var s,r,q,p
try{q=this.w
q===$&&A.y()
q.bx(a,b)}catch(p){s=A.F(p)
r=A.ai(p)
if(s===a)this.aG(a,b)
else this.aG(s,r)}},
j8(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.y()
q.q()}catch(p){s=A.F(p)
r=A.ai(p)
this.aG(s,r)}}}
A.jH.prototype={
a9(a,b,c,d){var s=this.$ti,r=$.C,q=b===!0?1:0,p=d!=null?32:0,o=A.o5(r,a,s.y[1]),n=A.yl(r,d),m=c==null?A.AS():c,l=new A.hH(o,n,r.bR(m,t.H),r,q|p,s.i("hH<1,2>"))
l.w=this.a.$1(new A.jO(l,s.i("jO<2>")))
l.x=this.b.by(l.gj5(),l.gj7(),l.gj9())
return l},
by(a,b,c){return this.a9(a,null,b,c)}}
A.At.prototype={}
A.Av.prototype={}
A.Au.prototype={}
A.Ar.prototype={}
A.As.prototype={}
A.Aq.prototype={}
A.An.prototype={}
A.p0.prototype={}
A.Am.prototype={}
A.Al.prototype={}
A.Ap.prototype={}
A.Ao.prototype={}
A.p_.prototype={
v5(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.p1.prototype={}
A.oZ.prototype={
eM(a,b,c){var s,r,q,p,o,n,m=this.gjc(),l=m.a
if(l===B.i){A.kp(b,c)
return}o=l.gke()
o.toString
s=o
r=$.C
try{$.C=s
m.v5(l,l.gb7(),a,b,c)
$.C=r}catch(n){q=A.F(n)
p=A.ai(n)
$.C=r
o=b===q?c:p
s.eM(l,q,o)}},
$iN:1}
A.oa.prototype={
glh(){var s=this.ax
return s==null?this.ax=new A.hQ(this):s},
gb7(){return this.ay.glh()},
gc7(){return this.as.a},
fz(a){var s,r,q
try{this.aV(a,t.H)}catch(q){s=A.F(q)
r=A.ai(q)
this.eM(this,s,r)}},
fA(a,b,c){var s,r,q
try{this.ep(a,b,t.H,c)}catch(q){s=A.F(q)
r=A.ai(q)
this.eM(this,s,r)}},
n7(a,b,c,d,e){var s,r,q
try{this.kp(a,b,c,t.H,d,e)}catch(q){s=A.F(q)
r=A.ai(q)
this.eM(this,s,r)}},
jG(a,b){return new A.yU(this,this.bR(a,b),b)},
tJ(a,b,c){return new A.yW(this,this.dk(a,b,c),c,b)},
eY(a){return new A.yT(this,this.bR(a,t.H))},
hA(a,b){return new A.yV(this,this.dk(a,t.H,b),b)},
h(a,b){var s,r,q=this.at
if(q===B.aM)return null
s=q.b
r=s.h(0,b)
return r!=null||s.J(b)?r:this.rp(q,b)},
rp(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gke().gjD()
if(s===B.aM)break
q=s.b
r=q.h(0,b)
if(r!=null||q.J(b)){a.b.j(0,b,r)
break}}return r},
fc(a,b){this.eM(this,a,b)},
mH(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
aV(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gb7(),this,a,b)},
ep(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gb7(),this,a,b,c,d)},
kp(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gb7(),this,a,b,c,d,e,f)},
bR(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gb7(),this,a,b)},
dk(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gb7(),this,a,b,c)},
fs(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gb7(),this,a,b,c,d)},
mD(a,b){var s=this.r,r=s.a
if(r===B.i)return null
return s.b.$5(r,r.gb7(),this,a,b)},
cN(a){var s=this.w,r=s.a
return s.b.$4(r,r.gb7(),this,a)},
jL(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
jK(a,b){var s=this.y,r=s.a
return s.b.$5(r,r.gb7(),this,a,b)},
glU(){return this.a},
glW(){return this.b},
glV(){return this.c},
glQ(){return this.d},
glR(){return this.e},
glP(){return this.f},
glm(){return this.r},
gjt(){return this.w},
glf(){return this.x},
gle(){return this.y},
glK(){return this.z},
glq(){return this.Q},
gjc(){return this.as},
gjD(){return this.at},
gke(){return this.ay}}
A.yU.prototype={
$0(){return this.a.aV(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.yW.prototype={
$1(a){var s=this
return s.a.ep(s.b,a,s.d,s.c)},
$S(){return this.d.i("@<0>").V(this.c).i("1(2)")}}
A.yT.prototype={
$0(){return this.a.fz(this.b)},
$S:0}
A.yV.prototype={
$1(a){return this.a.fA(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.oF.prototype={
glU(){return B.e1},
glW(){return B.e0},
glV(){return B.e_},
glQ(){return B.dY},
glR(){return B.dZ},
glP(){return B.dX},
glm(){return B.dT},
gjt(){return B.e2},
glf(){return B.dS},
gle(){return B.dR},
glK(){return B.dW},
glq(){return B.dU},
gjc(){return B.dV},
gjD(){return B.aM},
gke(){return null},
glh(){var s=$.zO
return s==null?$.zO=new A.hQ(this):s},
gb7(){var s=$.zO
return s==null?$.zO=new A.hQ(this):s},
gc7(){return this},
fz(a){var s,r,q
try{if(B.i===$.C){a.$0()
return}A.AN(null,null,this,a)}catch(q){s=A.F(q)
r=A.ai(q)
A.kp(s,r)}},
fA(a,b){var s,r,q
try{if(B.i===$.C){a.$1(b)
return}A.AO(null,null,this,a,b)}catch(q){s=A.F(q)
r=A.ai(q)
A.kp(s,r)}},
n7(a,b,c){var s,r,q
try{if(B.i===$.C){a.$2(b,c)
return}A.CR(null,null,this,a,b,c)}catch(q){s=A.F(q)
r=A.ai(q)
A.kp(s,r)}},
jG(a,b){return new A.zQ(this,a,b)},
eY(a){return new A.zP(this,a)},
hA(a,b){return new A.zR(this,a,b)},
h(a,b){return null},
fc(a,b){A.kp(a,b)},
mH(a,b){return A.FE(null,null,this,a,b)},
aV(a){if($.C===B.i)return a.$0()
return A.AN(null,null,this,a)},
ep(a,b){if($.C===B.i)return a.$1(b)
return A.AO(null,null,this,a,b)},
kp(a,b,c){if($.C===B.i)return a.$2(b,c)
return A.CR(null,null,this,a,b,c)},
bR(a){return a},
dk(a){return a},
fs(a){return a},
mD(a,b){return null},
cN(a){A.AP(null,null,this,a)},
jL(a,b){return A.Cs(a,b)},
jK(a,b){return A.Ep(a,b)}}
A.zQ.prototype={
$0(){return this.a.aV(this.b,this.c)},
$S(){return this.c.i("0()")}}
A.zP.prototype={
$0(){return this.a.fz(this.b)},
$S:0}
A.zR.prototype={
$1(a){return this.a.fA(this.b,a,this.c)},
$S(){return this.c.i("~(0)")}}
A.hQ.prototype={$iau:1}
A.AM.prototype={
$0(){A.DG(this.a,this.b)},
$S:0}
A.jB.prototype={}
A.dg.prototype={
gm(a){return this.a},
gE(a){return this.a===0},
gW(a){return this.a!==0},
gK(){return new A.eR(this,A.n(this).i("eR<1>"))},
gaX(){var s=A.n(this)
return A.dG(new A.eR(this,s.i("eR<1>")),new A.zm(this),s.c,s.y[1])},
J(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.la(a)},
la(a){var s=this.d
if(s==null)return!1
return this.bZ(this.l6(s,a),a)>=0},
C(a,b){b.a7(0,new A.zl(this))},
h(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.EO(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.EO(q,b)
return r}else return this.lr(b)},
lr(a){var s,r,q=this.d
if(q==null)return null
s=this.l6(q,a)
r=this.bZ(s,a)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.kX(s==null?q.b=A.CC():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.kX(r==null?q.c=A.CC():r,b,c)}else q.lY(b,c)},
lY(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.CC()
s=p.cn(a)
r=o[s]
if(r==null){A.CD(o,s,[a,b]);++p.a
p.e=null}else{q=p.bZ(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a7(a,b){var s,r,q,p,o,n=this,m=n.l5()
for(s=m.length,r=A.n(n).y[1],q=0;q<s;++q){p=m[q]
o=n.h(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.b(A.az(n))}},
l5(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
kX(a,b,c){if(a[b]==null){++this.a
this.e=null}A.CD(a,b,c)},
cn(a){return J.a7(a)&1073741823},
l6(a,b){return a[this.cn(b)]},
bZ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.v(a[r],b))return r
return-1}}
A.zm.prototype={
$1(a){var s=this.a,r=s.h(0,a)
return r==null?A.n(s).y[1].a(r):r},
$S(){return A.n(this.a).i("2(1)")}}
A.zl.prototype={
$2(a,b){this.a.j(0,a,b)},
$S(){return A.n(this.a).i("~(1,2)")}}
A.dX.prototype={
cn(a){return A.kt(a)&1073741823},
bZ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.jK.prototype={
h(a,b){if(!this.w.$1(b))return null
return this.op(b)},
j(a,b,c){this.oq(b,c)},
J(a){if(!this.w.$1(a))return!1
return this.oo(a)},
cn(a){return this.r.$1(a)&1073741823},
bZ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.yS.prototype={
$1(a){return this.a.b(a)},
$S:14}
A.eR.prototype={
gm(a){return this.a.a},
gE(a){return this.a.a===0},
gW(a){return this.a.a!==0},
gu(a){var s=this.a
return new A.om(s,s.l5(),this.$ti.i("om<1>"))},
F(a,b){return this.a.J(b)}}
A.om.prototype={
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
return this.oh(b)},
j(a,b,c){this.oj(b,c)},
J(a){if(!this.y.$1(a))return!1
return this.og(a)},
H(a,b){if(!this.y.$1(b))return null
return this.oi(b)},
eb(a){return this.x.$1(a)&1073741823},
df(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.zF.prototype={
$1(a){return this.a.b(a)},
$S:14}
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
return r[b]!=null}else return this.pm(b)},
pm(a){var s=this.d
if(s==null)return!1
return this.bZ(s[this.cn(a)],a)>=0},
gG(a){var s=this.e
if(s==null)throw A.b(A.x("No elements"))
return s.a},
ga1(a){var s=this.f
if(s==null)throw A.b(A.x("No elements"))
return s.a},
t(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.kW(s==null?q.b=A.CE():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.kW(r==null?q.c=A.CE():r,b)}else return q.oI(b)},
oI(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.CE()
s=q.cn(a)
r=p[s]
if(r==null)p[s]=[q.ji(a)]
else{if(q.bZ(r,a)>=0)return!1
r.push(q.ji(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.l7(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.l7(s.c,b)
else return s.jq(b)},
jq(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.cn(a)
r=n[s]
q=o.bZ(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.l8(p)
return!0},
kW(a,b){if(a[b]!=null)return!1
a[b]=this.ji(b)
return!0},
l7(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.l8(s)
delete a[b]
return!0},
jg(){this.r=this.r+1&1073741823},
ji(a){var s,r=this,q=new A.zG(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.jg()
return q},
l8(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.jg()},
cn(a){return J.a7(a)&1073741823},
bZ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
A.zG.prototype={}
A.dZ.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
k(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.az(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.us.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:45}
A.er.prototype={
F(a,b){return b instanceof A.b2&&this===b.a},
gu(a){var s=this
return new A.ot(s,s.a,s.c,s.$ti.i("ot<1>"))},
gm(a){return this.b},
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
gG(a){var s
if(this.b===0)throw A.b(A.x("No such element"))
s=this.c
s.toString
return s},
ga1(a){var s
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
h6(a,b,c){var s,r,q=this
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
jy(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.ot.prototype={
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
gu(a){return new A.at(a,this.gm(a),A.bx(a).i("at<K.E>"))},
a8(a,b){return this.h(a,b)},
gE(a){return this.gm(a)===0},
gW(a){return!this.gE(a)},
gG(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,0)},
ga1(a){if(this.gm(a)===0)throw A.b(A.aD())
return this.h(a,this.gm(a)-1)},
gap(a){if(this.gm(a)===0)throw A.b(A.aD())
if(this.gm(a)>1)throw A.b(A.iD())
return this.h(a,0)},
F(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.v(this.h(a,s),b))return!0
if(r!==this.gm(a))throw A.b(A.az(a))}return!1},
cD(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(!b.$1(this.h(a,s)))return!1
if(r!==this.gm(a))throw A.b(A.az(a))}return!0},
f8(a,b,c){var s,r,q,p=this.gm(a)
for(s=0;s<p;++s){r=this.h(a,s)
if(b.$1(r))return r
if(p!==this.gm(a))throw A.b(A.az(a))}q=c.$0()
return q},
B(a,b){var s
if(this.gm(a)===0)return""
s=A.wX("",a,b)
return s.charCodeAt(0)==0?s:s},
ds(a,b){return new A.al(a,b,A.bx(a).i("al<K.E>"))},
kv(a,b){return new A.bF(a,b.i("bF<0>"))},
cd(a,b,c){return new A.X(a,b,A.bx(a).i("@<K.E>").V(c).i("X<1,2>"))},
bi(a,b){return A.cu(a,b,null,A.bx(a).i("K.E"))},
cK(a,b){return A.cu(a,0,A.cz(b,"count",t.S),A.bx(a).i("K.E"))},
fB(a){var s,r=A.mb(A.bx(a).i("K.E"))
for(s=0;s<this.gm(a);++s)r.t(0,this.h(a,s))
return r},
t(a,b){var s=this.gm(a)
this.sm(a,s+1)
this.j(a,s,b)},
hB(a,b){return new A.bN(a,A.bx(a).i("@<K.E>").V(b).i("bN<1,2>"))},
cj(a,b){var s=b==null?A.M1():b
A.n2(a,0,this.gm(a)-1,s)},
T(a,b,c){var s,r=this.gm(a)
if(c==null)c=r
A.bc(b,c,r)
s=A.O(this.fJ(a,b,c),A.bx(a).i("K.E"))
return s},
b5(a,b){return this.T(a,b,null)},
fJ(a,b,c){A.bc(b,c,this.gm(a))
return A.cu(a,b,c,A.bx(a).i("K.E"))},
jT(a,b,c,d){var s
A.bc(b,c,this.gm(a))
for(s=b;s<c;++s)this.j(a,s,d)},
ai(a,b,c,d,e){var s,r,q,p,o
A.bc(b,c,this.gm(a))
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.pp(d,e).cL(0,!1)
r=0}p=J.M(q)
if(r+s>p.gm(q))throw A.b(A.DR())
if(r<b)for(o=s-1;o>=0;--o)this.j(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.j(a,b+o,p.h(q,r+o))},
au(a,b,c,d){return this.ai(a,b,c,d,0)},
cO(a,b,c){var s,r
if(t.j.b(c))this.au(a,b,b+c.length,c)
else for(s=J.E(c);s.k();b=r){r=b+1
this.j(a,b,s.gn())}},
l(a){return A.tr(a,"[","]")},
$iJ:1,
$io:1,
$ip:1}
A.U.prototype={
c2(a,b,c){var s=A.n(this)
return A.E0(this,s.i("U.K"),s.i("U.V"),b,c)},
a7(a,b){var s,r,q,p
for(s=J.E(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
b.$2(q,p==null?r.a(p):p)}},
gab(){return J.bM(this.gK(),new A.uH(this),A.n(this).i("R<U.K,U.V>"))},
aT(a,b,c,d){var s,r,q,p,o,n=A.t(c,d)
for(s=J.E(this.gK()),r=A.n(this).i("U.V");s.k();){q=s.gn()
p=this.h(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.j(0,o.a,o.b)}return n},
J(a){return J.BJ(this.gK(),a)},
gm(a){return J.ap(this.gK())},
gE(a){return J.by(this.gK())},
gW(a){return J.e8(this.gK())},
gaX(){return new A.jW(this,A.n(this).i("jW<U.K,U.V>"))},
l(a){return A.uI(this)},
$iI:1}
A.uH.prototype={
$1(a){var s=this.a,r=s.h(0,a)
if(r==null)r=A.n(s).i("U.V").a(r)
return new A.R(a,r,A.n(s).i("R<U.K,U.V>"))},
$S(){return A.n(this.a).i("R<U.K,U.V>(U.K)")}}
A.uJ.prototype={
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
s=s.h(0,J.BK(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
ga1(a){var s=this.a
s=s.h(0,J.po(s.gK()))
return s==null?this.$ti.y[1].a(s):s},
gu(a){var s=this.a
return new A.ov(J.E(s.gK()),s,this.$ti.i("ov<1,2>"))}}
A.ov.prototype={
k(){var s=this,r=s.a
if(r.k()){s.c=s.b.h(0,r.gn())
return!0}s.c=null
return!1},
gn(){var s=this.c
return s==null?this.$ti.y[1].a(s):s}}
A.oV.prototype={
j(a,b,c){throw A.b(A.Y("Cannot modify unmodifiable map"))}}
A.iP.prototype={
c2(a,b,c){return this.a.c2(0,b,c)},
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
c2(a,b,c){return new A.cT(this.a.c2(0,b,c),b.i("@<0>").V(c).i("cT<1,2>"))}}
A.iL.prototype={
gu(a){var s=this
return new A.ou(s,s.c,s.d,s.b,s.$ti.i("ou<1>"))},
gE(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gG(a){var s=this,r=s.b
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
if(r.gm(0)>1)throw A.b(A.iD())
s=r.a[r.b]
return s==null?r.$ti.c.a(s):s},
a8(a,b){var s,r=this
A.DQ(b,r.gm(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.v(r.a[s],b)){r.jq(s);++r.d
return!0}return!1},
l(a){return A.tr(this,"{","}")},
jq(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.ou.prototype={
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
A.cq.prototype={
gE(a){return this.gm(this)===0},
gW(a){return this.gm(this)!==0},
C(a,b){var s
for(s=J.E(b);s.k();)this.t(0,s.gn())},
cd(a,b,c){return new A.ek(this,b,A.n(this).i("@<1>").V(c).i("ek<1,2>"))},
gap(a){var s,r=this
if(r.gm(r)>1)throw A.b(A.iD())
s=r.gu(r)
if(!s.k())throw A.b(A.aD())
return s.gn()},
l(a){return A.tr(this,"{","}")},
ds(a,b){return new A.al(this,b,A.n(this).i("al<1>"))},
cD(a,b){var s
for(s=this.gu(this);s.k();)if(!b.$1(s.gn()))return!1
return!0},
cK(a,b){return A.En(this,b,A.n(this).c)},
bi(a,b){return A.Ek(this,b,A.n(this).c)},
gG(a){var s=this.gu(this)
if(!s.k())throw A.b(A.aD())
return s.gn()},
ga1(a){var s,r=this.gu(this)
if(!r.k())throw A.b(A.aD())
do s=r.gn()
while(r.k())
return s},
a8(a,b){var s,r
A.bb(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lW(b,b-r,this,null,"index"))},
$iJ:1,
$io:1,
$ieE:1}
A.k3.prototype={}
A.ke.prototype={}
A.oq.prototype={
h(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.r0(b):s}},
gm(a){return this.b==null?this.c.a:this.dF().length},
gE(a){return this.gm(0)===0},
gW(a){return this.gm(0)>0},
gK(){if(this.b==null){var s=this.c
return new A.T(s,A.n(s).i("T<1>"))}return new A.or(this)},
gaX(){var s,r=this
if(r.b==null){s=r.c
return new A.aq(s,A.n(s).i("aq<2>"))}return A.dG(r.dF(),new A.zA(r),t.N,t.z)},
j(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.J(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.t8().j(0,b,c)},
J(a){if(this.b==null)return this.c.J(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
a7(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.a7(0,b)
s=o.dF()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.AE(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.az(o))}},
dF(){var s=this.c
if(s==null)s=this.c=A.k(Object.keys(this.a),t.s)
return s},
t8(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.t(t.N,t.z)
r=n.dF()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)r.push("")
else B.b.aj(r)
n.a=n.b=null
return n.c=s},
r0(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.AE(this.a[a])
return this.b[a]=s}}
A.zA.prototype={
$1(a){return this.a.h(0,a)},
$S:51}
A.or.prototype={
gm(a){return this.a.gm(0)},
a8(a,b){var s=this.a
return s.b==null?s.gK().a8(0,b):s.dF()[b]},
gu(a){var s=this.a
if(s.b==null){s=s.gK()
s=s.gu(s)}else{s=s.dF()
s=new J.fb(s,s.length,A.a_(s).i("fb<1>"))}return s},
F(a,b){return this.a.J(b)}}
A.zy.prototype={
q(){var s,r,q=this
q.or()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.aA(A.FA(r.charCodeAt(0)==0?r:r,q.b))
s.aQ()}}
A.Ai.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:46}
A.Ah.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:46}
A.kK.prototype={
gaO(){return"us-ascii"},
jQ(a){return B.bu.v(a)}}
A.oU.prototype={
v(a){var s,r,q,p=A.bc(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.aH(a,"string","Contains invalid characters."))
o[r]=q}return o},
bV(a){return new A.A9(new A.hp(a),this.a)}}
A.kL.prototype={}
A.A9.prototype={
q(){this.a.a.q()},
bK(a,b,c,d){var s,r,q,p
A.bc(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.b(A.Q("Source contains invalid character with code point: "+q+".",null))}s=new A.cj(a)
p=this.a.a
p.t(0,s.T(s,b,c))
if(d)p.q()}}
A.kQ.prototype={
gf3(){return this.a},
vT(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.bc(a1,a2,a0.length)
s=$.Dc()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.Bg(a0.charCodeAt(l))
h=A.Bg(a0.charCodeAt(l+1))
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
d=A.bs(k)
e.a+=d
q=l
continue}}throw A.b(A.a8("Invalid base64 data",a0,r))}if(p!=null){e=B.a.A(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.Do(a0,n,a2,o,m,d)
else{c=B.c.al(d-1,4)+1
if(c===1)throw A.b(A.a8(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.dl(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.Do(a0,n,a2,o,m,b)
else{c=B.c.al(b,4)
if(c===1)throw A.b(A.a8(a,a0,a2))
if(c>1)a0=B.a.dl(a0,a2,a2,c===2?"==":"=")}return a0}}
A.ic.prototype={
v(a){var s=a.length
if(s===0)return""
s=new A.o3(this.a?u.G:u.U).mC(a,0,s,!0)
s.toString
return A.dQ(s,0,null)},
bV(a){return new A.y3(a,new A.yk(this.a?u.G:u.U))}}
A.o3.prototype={
mt(a){return new Uint8Array(a)},
mC(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.c.N(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.mt(o)
r.a=A.Jw(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.yk.prototype={
mt(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.bL(B.f.gaa(s),s.byteOffset,a)}}
A.yg.prototype={
t(a,b){this.lb(b,0,J.ap(b),!1)},
q(){this.lb(B.cH,0,0,!0)}}
A.y3.prototype={
lb(a,b,c,d){var s=this.b.mC(a,b,c,d)
if(s!=null)this.a.a.aA(A.dQ(s,0,null))
if(d)this.a.a.aQ()}}
A.kR.prototype={
v(a){var s,r,q=A.bc(0,null,a.length)
if(0===q)return new Uint8Array(0)
s=new A.o2()
r=s.jM(a,0,q)
r.toString
s.jH(a,q)
return r},
bV(a){return new A.yf(a,new A.o2())}}
A.o2.prototype={
jM(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.EA(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.Jt(a,b,c,q)
r.a=A.Jv(a,b,c,s,0,r.a)
return s},
jH(a,b){var s=this.a
if(s<-1)throw A.b(A.a8("Missing padding character",a,b))
if(s>0)throw A.b(A.a8("Invalid length, must be multiple of four",a,b))
this.a=-1}}
A.yf.prototype={
t(a,b){var s,r=b.length
if(r===0)return
s=this.b.jM(b,0,r)
if(s!=null)this.a.a.aA(s)},
q(){this.b.jH(null,null)
this.a.a.aQ()},
bK(a,b,c,d){var s,r
A.bc(b,c,a.length)
if(b===c)return
s=this.b
r=s.jM(a,b,c)
if(r!=null)this.a.a.aA(r)
if(d){s.jH(a,c)
this.a.a.aQ()}}}
A.pH.prototype={}
A.hp.prototype={
t(a,b){this.a.t(0,b)},
q(){this.a.q()}}
A.o6.prototype={
t(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.M(b)
if(n.gm(b)>p.length-o){p=q.b
s=n.gm(b)+p.length-1
s|=B.c.af(s,1)
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
A.oL.prototype={
t(a,b){this.b.push(b)},
q(){this.a.$1(this.b)}}
A.eO.prototype={
t(a,b){this.b.t(0,b)},
bx(a,b){A.cz(a,"error",t.K)
this.a.bx(a,b)},
q(){this.b.q()},
$ibA:1}
A.l4.prototype={}
A.aB.prototype={
bV(a){throw A.b(A.Y("This converter does not support chunked conversions: "+this.l(0)))},
tH(a){return new A.jH(new A.qE(this),a,t.fM.V(A.n(this).i("aB.T")).i("jH<1,2>"))}}
A.qE.prototype={
$1(a){return new A.eO(a,this.a.bV(a),t.oW)},
$S:181}
A.em.prototype={}
A.iJ.prototype={
l(a){var s=A.ir(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.m3.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.tu.prototype={
av(a,b){var s=A.FA(a,this.gu0().a)
return s},
a6(a,b){var s=A.JQ(a,this.gf3().b,null)
return s},
gf3(){return B.cj},
gu0(){return B.ci}}
A.m5.prototype={
bV(a){return new A.zz(null,this.b,new A.oN(a))}}
A.zz.prototype={
t(a,b){var s,r,q,p=this
if(p.d)throw A.b(A.x("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a2("")
q=new A.A6(r,s)
A.EQ(b,q,p.b,p.a)
if(r.a.length!==0)q.j3()
s.q()},
q(){}}
A.m4.prototype={
bV(a){return new A.zy(this.a,a,new A.a2(""))}}
A.zC.prototype={
ng(a){var s,r,q,p,o,n=this,m=a.length
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
n.ao(q)}}if(s===0)n.b3(a)
else if(s<m)n.iy(a,s,m)},
iQ(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.b(new A.m3(a,null))}s.push(a)},
ix(a){var s,r,q,p,o=this
if(o.nf(a))return
o.iQ(a)
try{s=o.b.$1(a)
if(!o.nf(s)){q=A.DY(a,null,o.glH())
throw A.b(q)}o.a.pop()}catch(p){r=A.F(p)
q=A.DY(a,r,o.glH())
throw A.b(q)}},
nf(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.xd(a)
return!0}else if(a===!0){r.b3("true")
return!0}else if(a===!1){r.b3("false")
return!0}else if(a==null){r.b3("null")
return!0}else if(typeof a=="string"){r.b3('"')
r.ng(a)
r.b3('"')
return!0}else if(t.j.b(a)){r.iQ(a)
r.xb(a)
r.a.pop()
return!0}else if(t.f.b(a)){r.iQ(a)
s=r.xc(a)
r.a.pop()
return s}else return!1},
xb(a){var s,r,q=this
q.b3("[")
s=J.M(a)
if(s.gW(a)){q.ix(s.h(a,0))
for(r=1;r<s.gm(a);++r){q.b3(",")
q.ix(s.h(a,r))}}q.b3("]")},
xc(a){var s,r,q,p,o=this,n={}
if(a.gE(a)){o.b3("{}")
return!0}s=a.gm(a)*2
r=A.ae(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.a7(0,new A.zD(n,r))
if(!n.b)return!1
o.b3("{")
for(p='"';q<s;q+=2,p=',"'){o.b3(p)
o.ng(A.D(r[q]))
o.b3('":')
o.ix(r[q+1])}o.b3("}")
return!0}}
A.zD.prototype={
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
A.zB.prototype={
glH(){var s=this.c
return s instanceof A.a2?s.l(0):null},
xd(a){this.c.iw(B.x.l(a))},
b3(a){this.c.iw(a)},
iy(a,b,c){this.c.iw(B.a.A(a,b,c))},
ao(a){this.c.ao(a)}}
A.m8.prototype={
gaO(){return"iso-8859-1"},
jQ(a){return B.cr.v(a)}}
A.m9.prototype={}
A.nd.prototype={
t(a,b){this.bK(b,0,b.length,!1)}}
A.A6.prototype={
ao(a){var s=this.a,r=A.bs(a)
if((s.a+=r).length>16)this.j3()},
iw(a){if(this.a.a.length!==0)this.j3()
this.b.t(0,a)},
j3(){var s=this.a,r=s.a
s.a=""
this.b.t(0,r.charCodeAt(0)==0?r:r)}}
A.k7.prototype={
q(){},
bK(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.bs(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.q()},
t(a,b){this.a.a+=b}}
A.oN.prototype={
t(a,b){this.a.a.aA(b)},
bK(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.aA(a)
else r.aA(B.a.A(a,b,c))
if(d)r.aQ()},
q(){this.a.a.aQ()}}
A.Ag.prototype={
q(){var s,r,q,p=this.c
this.a.v1(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.bK(q,0,q.length,!0)}else r.q()},
t(a,b){this.bK(b,0,J.ap(b),!1)},
bK(a,b,c,d){var s,r=this.c,q=this.a.cV(a,b,c,!1)
q=r.a+=q
if(q.length!==0){s=q.charCodeAt(0)==0?q:q
this.b.bK(s,0,s.length,!1)
r.a=""
return}}}
A.nK.prototype={
gaO(){return"utf-8"},
tY(a,b){return new A.dj((b===!0?B.dN:B.aL).a).cV(a,0,null,!0)},
eZ(a){return this.tY(a,null)},
jQ(a){return B.e.v(a)}}
A.nL.prototype={
v(a){var s,r,q=A.bc(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.oX(s)
if(r.lp(a,0,q)!==q)r.hs()
return B.f.T(s,0,r.b)},
bV(a){return new A.Aj(new A.hp(a),new Uint8Array(1024))}}
A.oX.prototype={
hs(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.H(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
mf(a,b){var s,r,q,p,o=this
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
return!0}else{o.hs()
return!1}},
lp(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.H(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.mf(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.hs()}else if(o<=2047){n=k.b
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
A.Aj.prototype={
q(){if(this.a!==0){this.bK("",0,0,!0)
return}this.d.a.q()},
bK(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.mf(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.lp(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.hs()
else n.a=a.charCodeAt(b);++b}s.t(0,B.f.T(r,0,n.b))
if(o)s.q()
n.b=0}while(b<c)
if(d)n.q()}}
A.jv.prototype={
bV(a){return new A.Ag(new A.dj(this.a),new A.oN(a),new A.a2(""))}}
A.dj.prototype={
cV(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.bc(b,c,J.ap(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.Kl(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Kk(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.iW(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.Fc(p)
m.b=0
throw A.b(A.a8(n,a,q+m.c))}return o},
iW(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.N(b+c,2)
r=q.iW(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.iW(a,s,c,d)}return q.u_(a,b,c,d)},
v1(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.bs(65533)
a.a+=s}else throw A.b(A.a8(A.Fc(77),null,null))},
u_(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a2(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.bs(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.bs(k)
h.a+=q
break
case 65:q=A.bs(k)
h.a+=q;--g
break
default:q=A.bs(k)
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
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.bs(a[m])
h.a+=q}else{q=A.dQ(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.bs(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.p2.prototype={}
A.aJ.prototype={
bA(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bG(p,r)
return new A.aJ(p===0?!1:s,r,p)},
pC(a){var s,r,q,p,o,n,m=this.c
if(m===0)return $.ci()
s=m+a
r=this.b
q=new Uint16Array(s)
for(p=m-1;p>=0;--p)q[p+a]=r[p]
o=this.a
n=A.bG(s,q)
return new A.aJ(n===0?!1:o,q,n)},
pF(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.ci()
s=k-a
if(s<=0)return l.a?$.De():$.ci()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bG(s,q)
m=new A.aJ(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.fP(0,$.f8())
return m},
bB(a,b){var s,r,q,p,o,n=this
if(b<0)throw A.b(A.Q("shift-amount must be posititve "+b,null))
s=n.c
if(s===0)return n
r=B.c.N(b,16)
if(B.c.al(b,16)===0)return n.pC(r)
q=s+r+1
p=new Uint16Array(q)
A.EI(n.b,s,b,p)
s=n.a
o=A.bG(q,p)
return new A.aJ(o===0?!1:s,p,o)},
dz(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.b(A.Q("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.c.N(b,16)
q=B.c.al(b,16)
if(q===0)return j.pF(r)
p=s-r
if(p<=0)return j.a?$.De():$.ci()
o=j.b
n=new Uint16Array(p)
A.JC(o,s,b,n)
s=j.a
m=A.bG(p,n)
l=new A.aJ(m===0?!1:s,n,m)
if(s){if((o[r]&B.c.bB(1,q)-1)>>>0!==0)return l.fP(0,$.f8())
for(k=0;k<r;++k)if(o[k]!==0)return l.fP(0,$.f8())}return l},
a0(a,b){var s,r=this.a
if(r===b.a){s=A.yh(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
iM(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.iM(p,b)
if(o===0)return $.ci()
if(n===0)return p.a===b?p:p.bA(0)
s=o+1
r=new Uint16Array(s)
A.Jy(p.b,o,a.b,n,r)
q=A.bG(s,r)
return new A.aJ(q===0?!1:b,r,q)},
fQ(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.ci()
s=a.c
if(s===0)return p.a===b?p:p.bA(0)
r=new Uint16Array(o)
A.o4(p.b,o,a.b,s,r)
q=A.bG(o,r)
return new A.aJ(q===0?!1:b,r,q)},
fG(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.iM(b,r)
if(A.yh(q.b,p,b.b,s)>=0)return q.fQ(b,r)
return b.fQ(q,!r)},
fP(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bA(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.iM(b,r)
if(A.yh(q.b,p,b.b,s)>=0)return q.fQ(b,r)
return b.fQ(q,!r)},
bg(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.ci()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.EJ(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bG(s,p)
return new A.aJ(m===0?!1:n,p,m)},
pB(a){var s,r,q,p
if(this.c<a.c)return $.ci()
this.lj(a)
s=$.Cx.bt()-$.jG.bt()
r=A.Cz($.Cw.bt(),$.jG.bt(),$.Cx.bt(),s)
q=A.bG(s,r)
p=new A.aJ(!1,r,q)
return this.a!==a.a&&q>0?p.bA(0):p},
rr(a){var s,r,q,p=this
if(p.c<a.c)return p
p.lj(a)
s=A.Cz($.Cw.bt(),0,$.jG.bt(),$.jG.bt())
r=A.bG($.jG.bt(),s)
q=new A.aJ(!1,s,r)
if($.Cy.bt()>0)q=q.dz(0,$.Cy.bt())
return p.a&&q.c>0?q.bA(0):q},
lj(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.EF&&a.c===$.EH&&c.b===$.EE&&a.b===$.EG)return
s=a.b
r=a.c
q=16-B.c.gmo(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.ED(s,r,q,p)
n=new Uint16Array(b+5)
m=A.ED(c.b,b,q,n)}else{n=A.Cz(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.CA(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.yh(n,m,j,i)>=0){g&2&&A.H(n)
n[m]=1
A.o4(n,h,j,i,n)}else{g&2&&A.H(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.o4(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.Jz(l,n,e);--k
A.EJ(d,f,0,n,k,o)
if(n[e]<d){i=A.CA(f,o,k,j)
A.o4(n,h,j,i,n)
while(--d,n[e]<d)A.o4(n,h,j,i,n)}--e}$.EE=c.b
$.EF=b
$.EG=s
$.EH=r
$.Cw.b=n
$.Cx.b=h
$.jG.b=o
$.Cy.b=q},
gI(a){var s,r,q,p=new A.yi(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.yj().$1(s)},
R(a,b){if(b==null)return!1
return b instanceof A.aJ&&this.a0(0,b)===0},
l(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.c.l(-n.b[0])
return B.c.l(n.b[0])}s=A.k([],t.s)
m=n.a
r=m?n.bA(0):n
while(r.c>1){q=$.Dd()
if(q.c===0)A.w(B.bF)
p=r.rr(q).l(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.pB(q)}s.push(B.c.l(r.b[0]))
if(m)s.push("-")
return new A.bT(s,t.hF).ec(0)},
$iav:1}
A.yi.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:72}
A.yj.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:77}
A.ok.prototype={
mm(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
mz(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.Af.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.E(b),r=this.a;s.k();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.a6(b)}},
$S:49}
A.rh.prototype={
$0(){var s=this
return A.w(A.Q("("+s.a+", "+s.b+", "+s.c+", "+s.d+", "+s.e+", "+s.f+", "+s.r+", "+s.w+")",null))},
$S:32}
A.aW.prototype={
iO(a){var s=1000,r=B.c.al(a,s),q=B.c.N(a-r,s),p=this.b+r,o=B.c.al(p,s),n=this.c
return new A.aW(A.lo(this.a+B.c.N(p-o,s)+q,o,n),o,n)},
R(a,b){if(b==null)return!1
return b instanceof A.aW&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gI(a){return A.c6(this.a,this.b,B.d,B.d,B.d,B.d,B.d)},
k7(a){var s=this.a,r=a.a
if(s<=r)s=s===r&&this.b>a.b
else s=!0
return s},
a0(a,b){var s=B.c.a0(this.a,b.a)
if(s!==0)return s
return B.c.a0(this.b,b.b)},
wG(){var s=this
if(s.c)return s
return new A.aW(s.a,s.b,!0)},
l(a){var s=this,r=A.HN(A.Ce(s)),q=A.ln(A.Cc(s)),p=A.ln(A.vM(s)),o=A.ln(A.Ca(s)),n=A.ln(A.Cb(s)),m=A.ln(A.Cd(s)),l=A.DE(A.Ea(s)),k=s.b,j=k===0?"":A.DE(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$iav:1}
A.aC.prototype={
R(a,b){if(b==null)return!1
return b instanceof A.aC&&this.a===b.a},
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
return s+m+":"+q+r+":"+o+p+"."+B.a.ic(B.c.l(n%1e6),6,"0")},
$iav:1}
A.yZ.prototype={
l(a){return this.a4()}}
A.ad.prototype={
gck(){return A.IG(this)}}
A.kM.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ir(s)
return"Assertion failed"}}
A.dc.prototype={}
A.bz.prototype={
giZ(){return"Invalid argument"+(!this.a?"(s)":"")},
giY(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.r(p),n=s.giZ()+q+o
if(!s.a)return n
return n+s.giY()+": "+A.ir(s.gk6())},
gk6(){return this.b}}
A.d7.prototype={
gk6(){return this.b},
giZ(){return"RangeError"},
giY(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.iA.prototype={
gk6(){return this.b},
giZ(){return"RangeError"},
giY(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
$id7:1,
gm(a){return this.f}}
A.cU.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.nD.prototype={
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
gck(){return null},
$iad:1}
A.jn.prototype={
l(a){return"Stack Overflow"},
gck(){return null},
$iad:1}
A.oi.prototype={
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
gkb(){return this.a},
gfN(){return this.b},
gar(){return this.c}}
A.lY.prototype={
gck(){return null},
l(a){return"IntegerDivisionByZeroException"},
$iad:1,
$icU:1,
$iG:1}
A.o.prototype={
hB(a,b){return A.fd(this,A.n(this).i("o.E"),b)},
cd(a,b,c){return A.dG(this,b,A.n(this).i("o.E"),c)},
ds(a,b){return new A.al(this,b,A.n(this).i("al<o.E>"))},
kv(a,b){return new A.bF(this,b.i("bF<0>"))},
F(a,b){var s
for(s=this.gu(this);s.k();)if(J.v(s.gn(),b))return!0
return!1},
v3(a,b,c){var s,r
for(s=this.gu(this),r=b;s.k();)r=c.$2(r,s.gn())
return r},
v4(a,b,c){return this.v3(0,b,c,t.z)},
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
bL(a,b){var s
for(s=this.gu(this);s.k();)if(b.$1(s.gn()))return!0
return!1},
cL(a,b){var s=A.n(this).i("o.E")
if(b)s=A.O(this,s)
else{s=A.O(this,s)
s.$flags=1
s=s}return s},
eq(a){return this.cL(0,!0)},
fB(a){return A.d2(this,A.n(this).i("o.E"))},
gm(a){var s,r=this.gu(this)
for(s=0;r.k();)++s
return s},
gE(a){return!this.gu(this).k()},
gW(a){return!this.gE(this)},
cK(a,b){return A.En(this,b,A.n(this).i("o.E"))},
bi(a,b){return A.Ek(this,b,A.n(this).i("o.E"))},
gG(a){var s=this.gu(this)
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
if(r.k())throw A.b(A.iD())
return s},
f8(a,b,c){var s,r
for(s=this.gu(this);s.k();){r=s.gn()
if(b.$1(r))return r}s=c.$0()
return s},
a8(a,b){var s,r
A.bb(b,"index")
s=this.gu(this)
for(r=b;s.k();){if(r===0)return s.gn();--r}throw A.b(A.lW(b,b-r,this,null,"index"))},
l(a){return A.I9(this,"(",")")}}
A.R.prototype={
l(a){return"MapEntry("+A.r(this.a)+": "+A.r(this.b)+")"}}
A.W.prototype={
gI(a){return A.j.prototype.gI.call(this,0)},
l(a){return"null"}}
A.j.prototype={$ij:1,
R(a,b){return this===b},
gI(a){return A.ez(this)},
l(a){return"Instance of '"+A.mD(this)+"'"},
gak(a){return A.dp(this)},
toString(){return this.l(this)}}
A.oP.prototype={
l(a){return""},
$iaF:1}
A.jo.prototype={
guG(){var s=this.gmB()
if($.ky()===1e6)return s
return s*1000},
gmA(){var s=this.gmB()
if($.ky()===1000)return s
return B.c.N(s,1000)},
az(){var s=this,r=s.b
if(r!=null){s.a=s.a+($.mE.$0()-r)
s.b=null}},
gmB(){var s=this.b
if(s==null)s=$.mE.$0()
return s-this.a}}
A.jf.prototype={
gu(a){return new A.mU(this.a)},
ga1(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.b(A.x("No elements."))
s=q.charCodeAt(p-1)
if((s&64512)===56320&&p>1){r=q.charCodeAt(p-2)
if((r&64512)===55296)return A.Fl(r,s)}return s}}
A.mU.prototype={
gn(){return this.d},
k(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=n.charCodeAt(o)
r=o+1
if((s&64512)===55296&&r<m){q=n.charCodeAt(r)
if((q&64512)===56320){p.c=r+1
p.d=A.Fl(s,q)
return!0}}p.c=r
p.d=s
return!0}}
A.a2.prototype={
gm(a){return this.a.length},
iw(a){var s=A.r(a)
this.a+=s},
ao(a){var s=A.bs(a)
this.a+=s},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.xv.prototype={
$2(a,b){throw A.b(A.a8("Illegal IPv6 address, "+a,this.a,b))},
$S:133}
A.kf.prototype={
gm4(){var s,r,q,p,o=this,n=o.w
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
gw4(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.ae(s,1)
r=s.length===0?B.q:A.fC(new A.X(A.k(s.split("/"),t.s),A.Mb(),t.iZ),t.N)
q.x!==$&&A.BC()
p=q.x=r}return p},
gI(a){var s,r=this,q=r.y
if(q===$){s=B.a.gI(r.gm4())
r.y!==$&&A.BC()
r.y=s
q=s}return q},
gku(){return this.b},
gde(){var s=this.c
if(s==null)return""
if(B.a.S(s,"[")&&!B.a.ad(s,"v",1))return B.a.A(s,1,s.length-1)
return s},
gfl(){var s=this.d
return s==null?A.F1(this.a):s},
gfq(){var s=this.f
return s==null?"":s},
ghS(){var s=this.r
return s==null?"":s},
vA(a){var s=this.a
if(a.length!==s.length)return!1
return A.Ky(a,s,0)>=0},
fv(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=j.a
if(b!=null){b=A.CI(b,0,b.length)
s=b!==i}else{b=i
s=!1}r=b==="file"
q=j.b
p=j.d
if(s)p=A.Ab(p,b)
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.a.S(n,"/"))n="/"+n
l=n
if(a!=null)k=A.Ac(null,0,0,a)
else k=j.f
return A.kg(b,q,o,p,l,k,j.r)},
kn(a){return this.fv(a,null)},
n5(a){return this.fv(null,a)},
lD(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.ad(b,"../",r);){r+=3;++s}q=B.a.dg(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.i5(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.dl(a,q+1,null,B.a.ae(b,r-3*s))},
bq(a){return this.fw(A.nJ(a))},
fw(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gb_().length!==0)return a
else{s=h.a
if(a.gjY()){r=a.n5(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gmI())m=a.gi1()?a.gfq():h.f
else{l=A.Kj(h,n)
if(l>0){k=B.a.A(n,0,l)
n=a.gjX()?k+A.eY(a.gbp()):k+A.eY(h.lD(B.a.ae(n,k.length),a.gbp()))}else if(a.gjX())n=A.eY(a.gbp())
else if(n.length===0)if(p==null)n=s.length===0?a.gbp():A.eY(a.gbp())
else n=A.eY("/"+a.gbp())
else{j=h.lD(n,a.gbp())
r=s.length===0
if(!r||p!=null||B.a.S(n,"/"))n=A.eY(j)
else n=A.CK(j,!r||p!=null)}m=a.gi1()?a.gfq():null}}}i=a.gjZ()?a.ghS():null
return A.kg(s,q,p,o,n,m,i)},
gjY(){return this.c!=null},
gi1(){return this.f!=null},
gjZ(){return this.r!=null},
gmI(){return this.e.length===0},
gjX(){return B.a.S(this.e,"/")},
kr(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.b(A.Y("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.b(A.Y(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.b(A.Y(u.A))
if(r.c!=null&&r.gde()!=="")A.w(A.Y(u.Q))
s=r.gw4()
A.Kc(s,!1)
q=A.wX(B.a.S(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
l(a){return this.gm4()},
R(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.jJ.b(b))if(p.a===b.gb_())if(p.c!=null===b.gjY())if(p.b===b.gku())if(p.gde()===b.gde())if(p.gfl()===b.gfl())if(p.e===b.gbp()){r=p.f
q=r==null
if(!q===b.gi1()){if(q)r=""
if(r===b.gfq()){r=p.r
q=r==null
if(!q===b.gjZ()){s=q?"":r
s=s===b.ghS()}}}}return s},
$inH:1,
gb_(){return this.a},
gbp(){return this.e}}
A.Ae.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.hO(1,a,B.n,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.hO(1,b,B.n,!0)
s.a+=r}},
$S:135}
A.Ad.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.E(b),r=this.a;s.k();)r.$2(a,s.gn())},
$S:49}
A.xu.prototype={
gne(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.c9(m,"?",s)
q=m.length
if(r>=0){p=A.kh(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.od("data","",n,n,A.kh(m,s,q,128,!1,!1),p,n)}return m},
l(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.cd.prototype={
gjY(){return this.c>0},
gk_(){return this.c>0&&this.d+1<this.e},
gi1(){return this.f<this.r},
gjZ(){return this.r<this.a.length},
gjX(){return B.a.ad(this.a,"/",this.e)},
gmI(){return this.e===this.f},
gb_(){var s=this.w
return s==null?this.w=this.pk():s},
pk(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.S(r.a,"http"))return"http"
if(q===5&&B.a.S(r.a,"https"))return"https"
if(s&&B.a.S(r.a,"file"))return"file"
if(q===7&&B.a.S(r.a,"package"))return"package"
return B.a.A(r.a,0,q)},
gku(){var s=this.c,r=this.b+3
return s>r?B.a.A(this.a,r,s-1):""},
gde(){var s=this.c
return s>0?B.a.A(this.a,s,this.d):""},
gfl(){var s,r=this
if(r.gk_())return A.aG(B.a.A(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.S(r.a,"http"))return 80
if(s===5&&B.a.S(r.a,"https"))return 443
return 0},
gbp(){return B.a.A(this.a,this.e,this.f)},
gfq(){var s=this.f,r=this.r
return s<r?B.a.A(this.a,s+1,r):""},
ghS(){var s=this.r,r=this.a
return s<r.length?B.a.ae(r,s+1):""},
lx(a){var s=this.d+1
return s+a.length===this.e&&B.a.ad(this.a,a,s)},
wv(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.cd(B.a.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
fv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(b!=null){b=A.CI(b,0,b.length)
s=!(h.b===b.length&&B.a.S(h.a,b))}else{b=h.gb_()
s=!1}r=b==="file"
q=h.c
p=q>0?B.a.A(h.a,h.b+3,q):""
o=h.gk_()?h.gfl():g
if(s)o=A.Ab(o,b)
q=h.c
if(q>0)n=B.a.A(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.A(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.S(l,"/"))l="/"+l
if(a!=null)j=A.Ac(g,0,0,a)
else{k=h.r
j=m<k?B.a.A(q,m+1,k):g}m=h.r
i=m<q.length?B.a.ae(q,m+1):g
return A.kg(b,p,n,o,l,j,i)},
kn(a){return this.fv(a,null)},
n5(a){return this.fv(null,a)},
bq(a){return this.fw(A.nJ(a))},
fw(a){if(a instanceof A.cd)return this.rS(this,a)
return this.m6().fw(a)},
rS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.S(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.S(a.a,"http"))p=!b.lx("80")
else p=!(r===5&&B.a.S(a.a,"https"))||!b.lx("443")
if(p){o=r+1
return new A.cd(B.a.A(a.a,0,o)+B.a.ae(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.m6().fw(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.cd(B.a.A(a.a,0,r)+B.a.ae(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.cd(B.a.A(a.a,0,r)+B.a.ae(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.wv()}s=b.a
if(B.a.ad(s,"/",n)){m=a.e
l=A.EU(this)
k=l>0?l:m
o=k-n
return new A.cd(B.a.A(a.a,0,k)+B.a.ae(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.ad(s,"../",n))n+=3
o=j-n+1
return new A.cd(B.a.A(a.a,0,j)+"/"+B.a.ae(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.EU(this)
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
kr(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.S(r.a,"file"))
q=s}else q=!1
if(q)throw A.b(A.Y("Cannot extract a file path from a "+r.gb_()+" URI"))
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
m6(){var s=this,r=null,q=s.gb_(),p=s.gku(),o=s.c>0?s.gde():r,n=s.gk_()?s.gfl():r,m=s.a,l=s.f,k=B.a.A(m,s.e,l),j=s.r
l=l<j?s.gfq():r
return A.kg(q,p,o,n,k,l,j<m.length?s.ghS():r)},
l(a){return this.a},
$inH:1}
A.od.prototype={}
A.lx.prototype={
j(a,b,c){this.a.set(b,c)},
l(a){return"Expando:"+A.r(this.b)}}
A.mr.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iG:1}
A.rR.prototype={
$2(a,b){this.a.bS(new A.rP(a),new A.rQ(b),t.X)},
$S:139}
A.rP.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:144}
A.rQ.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.LZ(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.aq.b(a))A.w("Attempting to box non-Dart object.")
s={}
s[$.H0()]=a
p.error=s
p.stack=b.l(0)
r=this.a
r.call(r,p)},
$S:12}
A.Bl.prototype={
$1(a){var s,r,q,p
if(A.Fz(a))return a
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
A.Bs.prototype={
$1(a){return this.a.aB(a)},
$S:25}
A.Bt.prototype={
$1(a){if(a==null)return this.a.aR(new A.mr(a===undefined))
return this.a.aR(a)},
$S:25}
A.B0.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i
if(A.Fy(a))return a
s=this.a
a.toString
if(s.J(a))return s.h(0,a)
if(a instanceof Date)return new A.aW(A.lo(a.getTime(),0,!0),0,!0)
if(a instanceof RegExp)throw A.b(A.Q("structured clone of RegExp",null))
if(a instanceof Promise)return A.a5(a,t.X)
r=Object.getPrototypeOf(a)
if(r===Object.prototype||r===null){q=t.X
p=A.t(q,q)
s.j(0,a,p)
o=Object.keys(a)
n=[]
for(s=J.aA(o),q=s.gu(o);q.k();)n.push(A.pc(q.gn()))
for(m=0;m<s.gm(o);++m){l=s.h(o,m)
k=n[m]
if(l!=null)p.j(0,k,this.$1(a[l]))}return p}if(a instanceof Array){j=a
p=[]
s.j(0,a,p)
i=a.length
for(s=J.M(j),m=0;m<i;++m)p.push(this.$1(s.h(j,m)))
return p}return a},
$S:34}
A.zv.prototype={
cH(a){if(a<=0||a>4294967296)throw A.b(A.aZ(u.E+a))
return Math.random()*a>>>0},
mU(){return Math.random()}}
A.zw.prototype={
oE(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.b(A.Y("No source of cryptographically secure random numbers available."))},
cH(a){var s,r,q,p,o,n,m,l
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
if(!r.jd(b))return null
s=r.c.h(0,r.a.$1(r.$ti.i("a3.K").a(b)))
return s==null?null:s.b},
j(a,b,c){var s=this
if(!s.jd(b))return
s.c.j(0,s.a.$1(b),new A.R(b,c,s.$ti.i("R<a3.K,a3.V>")))},
C(a,b){b.a7(0,new A.pJ(this))},
c2(a,b,c){return this.c.c2(0,b,c)},
J(a){var s=this
if(!s.jd(a))return!1
return s.c.J(s.a.$1(s.$ti.i("a3.K").a(a)))},
gab(){var s=this.c,r=A.n(s).i("aM<1,2>")
return A.dG(new A.aM(s,r),new A.pK(this),r.i("o.E"),this.$ti.i("R<a3.K,a3.V>"))},
a7(a,b){this.c.a7(0,new A.pL(this,b))},
gE(a){return this.c.a===0},
gW(a){return this.c.a!==0},
gK(){var s=this.c,r=A.n(s).i("aq<2>")
return A.dG(new A.aq(s,r),new A.pM(this),r.i("o.E"),this.$ti.i("a3.K"))},
gm(a){return this.c.a},
aT(a,b,c,d){return this.c.aT(0,new A.pN(this,b,c,d),c,d)},
gaX(){var s=this.c,r=A.n(s).i("aq<2>")
return A.dG(new A.aq(s,r),new A.pO(this),r.i("o.E"),this.$ti.i("a3.V"))},
l(a){return A.uI(this)},
jd(a){return this.$ti.i("a3.K").b(a)},
$iI:1}
A.pJ.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S(){return this.a.$ti.i("~(a3.K,a3.V)")}}
A.pK.prototype={
$1(a){var s=a.b
return new A.R(s.a,s.b,this.a.$ti.i("R<a3.K,a3.V>"))},
$S(){return this.a.$ti.i("R<a3.K,a3.V>(R<a3.C,R<a3.K,a3.V>>)")}}
A.pL.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.i("~(a3.C,R<a3.K,a3.V>)")}}
A.pM.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.i("a3.K(R<a3.K,a3.V>)")}}
A.pN.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.V(this.c).V(this.d).i("R<1,2>(a3.C,R<a3.K,a3.V>)")}}
A.pO.prototype={
$1(a){return a.b},
$S(){return this.a.$ti.i("a3.V(R<a3.K,a3.V>)")}}
A.lq.prototype={
Z(a,b){return J.v(a,b)},
ac(a){return J.a7(a)}}
A.iE.prototype={
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
A.es.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
s=J.M(a)
r=s.gm(a)
q=J.M(b)
if(r!==q.gm(b))return!1
for(p=this.a,o=0;o<r;++o)if(!p.Z(s.h(a,o),q.h(b,o)))return!1
return!0},
ac(a){var s,r,q,p
for(s=J.M(a),r=this.a,q=0,p=0;p<s.gm(a);++p){q=q+r.ac(s.h(a,p))&2147483647
q=q+(q<<10>>>0)&2147483647
q^=q>>>6}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.hM.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
s=this.a
r=A.BY(s.guN(),s.gvv(),s.gvB(),A.n(this).i("hM.E"),t.S)
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
A.hC.prototype={
gI(a){var s=this.a
return 3*s.a.ac(this.b)+7*s.b.ac(this.c)&2147483647},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.hC){s=this.a
s=s.a.Z(this.b,b.b)&&s.b.Z(this.c,b.c)}else s=!1
return s}}
A.iO.prototype={
Z(a,b){var s,r,q,p,o
if(a===b)return!0
if(a.gm(a)!==b.gm(b))return!1
s=A.BY(null,null,null,t.mB,t.S)
for(r=J.E(a.gK());r.k();){q=r.gn()
p=new A.hC(this,q,a.h(0,q))
o=s.h(0,p)
s.j(0,p,(o==null?0:o)+1)}for(r=J.E(b.gK());r.k();){q=r.gn()
p=new A.hC(this,q,b.h(0,q))
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
Z(a,b){var s,r=this
if(a instanceof A.cq)return b instanceof A.cq&&new A.h1(r,t.cu).Z(a,b)
s=t.f
if(s.b(a))return s.b(b)&&new A.iO(r,r,t.a3).Z(a,b)
s=t.j
if(s.b(a))return s.b(b)&&new A.es(r,t.hI).Z(a,b)
s=t.e7
if(s.b(a))return s.b(b)&&new A.iE(r,t.nZ).Z(a,b)
return J.v(a,b)},
ac(a){var s=this
if(a instanceof A.cq)return new A.h1(s,t.cu).ac(a)
if(t.f.b(a))return new A.iO(s,s,t.a3).ac(a)
if(t.j.b(a))return new A.es(s,t.hI).ac(a)
if(t.e7.b(a))return new A.iE(s,t.nZ).ac(a)
return J.a7(a)},
vC(a){return!0}}
A.mq.prototype={
sm(a,b){A.E5()},
t(a,b){return A.E5()}}
A.nG.prototype={
j(a,b,c){return A.Jf()}}
A.ck.prototype={
R(a,b){var s,r,q,p,o
if(b==null)return!1
if(b instanceof A.ck){s=this.a
r=b.a
q=s.length
if(q!==r.length)return!1
for(p=0,o=0;o<q;++o)p|=s[o]^r[o]
return p===0}return!1},
gI(a){return A.v8(this.a)},
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
A.rW.prototype={
t(a,b){var s=this
if(s.w)throw A.b(A.x("Hash.add() called after close()."))
s.r=s.r+J.ap(b)
s.kV(b)},
kV(a){var s,r,q,p,o,n,m,l,k=this,j=k.e,i=k.d,h=i.length
if(k.c==null)k.c=J.pl(B.f.gaa(i))
for(s=k.f,r=s.$flags|0,q=s.length,p=J.M(a),o=0;;j=0){n=j+p.gm(a)-o
if(n<h){B.f.ai(i,j,n,a,o)
k.e=n
return}B.f.ai(i,j,h,a,o)
o+=h-j
m=0
do{l=k.c.getUint32(m*4,!1)
r&2&&A.H(s)
s[m]=l;++m}while(m<q)
k.wM(s)}},
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
n=J.pl(B.f.gaa(q))
m=B.c.N(p,4294967296)
n.$flags&2&&A.H(n,11)
n.setUint32(o,m,!1)
n.setUint32(o+4,p>>>0,!1)
l.kV(q)
s=l.a
s.t(0,new A.ck(l.p_()))
s.q()},
p_(){var s,r,q,p,o,n,m
if(B.aR===$.kx())return J.Hd(B.y.gaa(this.y))
s=this.y
r=s.byteLength
q=new Uint8Array(r)
p=J.pl(B.f.gaa(q))
for(r=s.length,o=p.$flags|0,n=0;n<r;++n){m=s[n]
o&2&&A.H(p,11)
p.setUint32(n*4,m,!1)}return q}}
A.oI.prototype={
bV(a){var s=new Uint32Array(A.b7(A.k([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],t.t))),r=new Uint32Array(64),q=new Uint8Array(64)
return new A.hp(new A.oJ(s,r,a,q,new Uint32Array(16)))}}
A.zT.prototype={
wM(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
for(d=l,q=0;q<64;++q,e=f,f=g,g=h,h=b,i=j,j=k,k=d,d=a){c=(e+(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))>>>0)>>>0)+(((h&g^~h&f)>>>0)+(B.cx[q]+s[q]>>>0)>>>0)>>>0
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
A.oJ.prototype={}
A.kF.prototype={
gI(a){return A.c6(B.dy,this.d,this.c,B.d,B.d,B.d,B.d)},
R(a,b){if(b==null)return!1
return b instanceof A.li&&this.d===b.d&&this.c===b.c},
l(a){var s=this,r=s.c
if(r===12)return A.dp(s).l(0)+".with"+s.d*8+"bits()"
return A.dp(s).l(0)+".with"+s.d*8+"bits(nonceLength: "+r+")"}}
A.pU.prototype={}
A.iN.prototype={
gI(a){return B.u.ac(this.a)},
R(a,b){if(b==null)return!1
return b instanceof A.iN&&B.u.Z(this.a,b.a)},
l(a){var s=this.a
if(s.length===0)return"Mac.empty"
return"Mac(["+B.f.B(s,",")+"])"}}
A.ji.prototype={
l(a){return A.dp(this).l(0)+": SecretBox has wrong message authentication code (MAC)"},
$iG:1}
A.uG.prototype={
l(a){return A.dp(this).l(0)+"()"}}
A.jh.prototype={
gI(a){return(B.u.ac(this.b.a)^B.u.ac(this.c)^B.u.ac(this.a))>>>0},
R(a,b){var s
if(b==null)return!1
if(b instanceof A.jh){s=B.u.Z(this.b.a,b.b.a)
s=s&&B.u.Z(this.c,b.c)&&B.u.Z(this.a,b.a)}else s=!1
return s},
l(a){return"SecretBox(\n  [~~"+this.a.length+" bytes~~],\n  nonce: ["+B.f.B(this.c,",")+"],\n  mac: "+this.b.l(0)+",\n)"}}
A.wC.prototype={}
A.jj.prototype={
ge2(){return this.b},
gI(a){var s=A.ez(B.dI),r=B.u.ac(this.ge2())
return(s^r)>>>0},
R(a,b){if(b==null)return!1
return b instanceof A.jj&&B.u.Z(this.ge2(),b.ge2())},
l(a){return"SecretKeyData(...)"}}
A.mZ.prototype={
gm(a){return this.a.length},
sm(a,b){throw A.b(A.Y("The bytes are unmodifiable."))},
h(a,b){return this.a[b]},
j(a,b,c){throw A.b(A.Y("The bytes are unmodifiable."))}}
A.li.prototype={
u2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=c.ge2().gm(0),f=this.d
if(g!==f)throw A.b(A.aH(c,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.FT(c)
r=new Uint32Array(4)
A.p9(r,0,r,0,s)
r[0]=A.bw(r[0])
r[1]=A.bw(r[1])
r[2]=A.bw(r[2])
r[3]=A.bw(r[3])
q=A.DD(r,a.c)
p=J.Di(B.f.gaa(q),0,null)
o=a.a
n=B.u.Z(B.aP.l1(o,b,s,r,p).a,a.b.a)
if(!n)throw A.b(new A.ji())
A.AT(q,1)
n=o.length
m=B.c.N(n+31,16)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.p9(l,k,p,0,s)
A.AT(q,1)}j=J.bL(B.y.gaa(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=o[k]
m&2&&A.H(j)
j[k]=i^h}return j},
uK(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=d.ge2().gm(0),f=this.d
if(g!==f)throw A.b(A.aH(d,"secretKeyData","Expected "+f+" bytes, got "+g+" bytes"))
s=A.FT(d)
r=new Uint32Array(4)
A.p9(r,0,r,0,s)
r[0]=A.bw(r[0])
r[1]=A.bw(r[1])
r[2]=A.bw(r[2])
r[3]=A.bw(r[3])
q=A.DD(r,c)
p=J.Di(B.f.gaa(q),0,null)
o=new Uint32Array(A.b7(p))
A.AT(q,1)
n=a.length
m=(B.c.N(n+15,16)+1)*4
l=new Uint32Array(m)
for(k=0;k<m;k+=4){A.p9(l,k,p,0,s)
A.AT(q,1)}j=J.bL(B.y.gaa(l),l.byteOffset,n)
for(m=j.$flags|0,k=0;k<n;++k){i=j[k]
h=a[k]
m&2&&A.H(j)
j[k]=i^h}return new A.jh(j,B.aP.l1(j,b,s,r,o),c)}}
A.qW.prototype={
l(a){return"DartGcm()"},
l1(a,b,c,d,e){var s,r,q,p,o=4294967296,n=new Uint32Array(4)
A.lj(n,d,b)
A.lj(n,d,a)
s=8*b.length
r=8*a.length
q=new DataView(new ArrayBuffer(16))
q.setUint32(0,B.c.N(s,o),!1)
q.setUint32(4,B.c.al(s,o),!1)
q.setUint32(8,B.c.N(r,o),!1)
q.setUint32(12,B.c.al(r,o),!1)
A.lj(n,d,J.bL(B.az.gaa(q),0,null))
p=new Uint32Array(4)
A.p9(p,0,e,0,c)
n[0]=(n[0]^p[0])>>>0
n[1]=(n[1]^p[1])>>>0
n[2]=(n[2]^p[2])>>>0
n[3]=(n[3]^p[3])>>>0
return new A.iN(J.bL(B.y.gaa(n),0,null))}}
A.ob.prototype={}
A.oc.prototype={}
A.qH.prototype={}
A.qX.prototype={}
A.yN.prototype={
Z(a,b){var s,r,q=J.M(a),p=J.M(b)
if(q.gm(a)!==p.gm(b))return!1
for(s=0,r=0;r<q.gm(a);++r)s|=q.h(a,r)^p.h(b,r)
return s===0},
ac(a){var s,r,q,p,o
for(s=J.M(a),r=0,q=0;q<s.gm(a);++q){p=s.h(a,q)
o=B.c.al(q,16)
r=(r^B.c.rR(p,o)^B.c.m0(p,16-o))>>>0}return r}}
A.mP.prototype={}
A.kS.prototype={$iBN:1}
A.kT.prototype={
hR(){if(this.w)throw A.b(A.x("Can't finalize a finalized Request."))
this.w=!0
return B.by},
l(a){return this.a+" "+this.b.l(0)}}
A.kU.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:180}
A.kV.prototype={
$1(a){return B.a.gI(a.toLowerCase())},
$S:183}
A.pD.prototype={
ou(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.b(A.Q("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.b(A.Q("Invalid content length "+A.r(s)+".",null))}}}
A.l_.prototype={
b4(a){return this.o1(a)},
o1(b4){var s=0,r=A.h(t.hL),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$b4=A.c(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.b(A.Dz("HTTP request failed. Client is already closed.",b4.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
s=3
return A.a(b4.hR().wF(),$async$b4)
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
f=A.t(a9,t.K)
e=b4.gms()
d=null
if(e!=null){d=e
J.bY(f,"content-length",d)}for(b0=b4.r,b0=new A.aM(b0,A.n(b0).i("aM<1,2>")).gu(0);b0.k();){b1=b0.d
b1.toString
c=b1
J.bY(f,c.a,c.b)}f=A.pe(f)
f.toString
A.be(f)
b0=l.signal
s=8
return A.a(A.a5(a4.fetch(a7,{method:b4.a,headers:f,body:a8,credentials:"same-origin",redirect:"follow",signal:b0}),t.m),$async$b4)
case 8:b=b6
a=b.headers.get("content-length")
a0=a!=null?A.ja(a,null):null
if(a0==null&&a!=null){f=A.Dz("Invalid content-length header ["+a+"].",a6)
throw A.b(f)}a1=A.t(a9,a9)
b.headers.forEach(A.p4(new A.pG(a1)))
f=A.Ko(b4,b)
a4=b.status
a6=a1
a8=a0
A.nJ(b.url)
a9=b.statusText
f=new A.nc(A.Gt(f),a4,a8,a6)
f.ou(a4,a8,a6,!1,!0,a9,b4)
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
a3=A.ai(b3)
A.FD(a2,a3,b4)
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
A.pG.prototype={
$3(a,b,c){this.a.j(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:187}
A.AA.prototype={
$1(a){return A.hV(this.a,this.b,a)},
$S:193}
A.AJ.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.an()}},
$S:0}
A.AK.prototype={
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
m=A.ai(k)
if(!o.a.b)A.FD(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.ds.prototype={
wF(){var s=new A.u($.C,t.jz),r=new A.aI(s,t.iq),q=new A.o6(new A.pI(r),new Uint8Array(1024))
this.a9(q.gtt(q),!0,q.ge4(),r.gtQ())
return s}}
A.pI.prototype={
$1(a){return this.a.aB(new Uint8Array(A.b7(a)))},
$S:19}
A.ee.prototype={
l(a){var s=this.b.l(0)
return"ClientException: "+this.a+", uri="+s},
$iG:1}
A.mj.prototype={
gm(a){return this.b}}
A.v0.prototype={
gms(){var s,r,q,p=this,o={},n=o.a=0
p.x.a7(0,new A.v1(o,p))
for(s=p.y,r=s.length;n<s.length;s.length===r||(0,A.q)(s),++n){q=s[n]
o.a=o.a+(74+B.e.v(p.lv(q)).length+q.b+2)}return o.a+2+70+4},
hR(){var s=this,r=s.oW()
s.r.j(0,"content-type","multipart/form-data; boundary="+r)
s.kN()
return new A.ds(s.bl(r))},
bl(a){return this.pX(a)},
pX(a){var $async$bl=A.c(function(b,c){switch(b){case 2:n=q
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
return A.bU(A.dY(e),$async$bl,r)
case 5:k=l.b
j=$.BH()
l=A.z(l.a,j,"%0D%0A")
i='content-disposition: form-data; name="'+A.z(l,'"',"%22")+'"'
l=$.Df()
s=6
q=[1]
return A.bU(A.dY(B.e.v((!l.b.test(k)?i+u.v:i)+"\r\n\r\n")),$async$bl,r)
case 6:s=7
q=[1]
return A.bU(A.dY(B.e.v(k)),$async$bl,r)
case 7:s=8
q=[1]
return A.bU(A.dY(B.b2),$async$bl,r)
case 8:s=3
break
case 4:f=m.y,l=f.length,h=0
case 9:if(!(h<f.length)){s=11
break}g=f[h]
s=12
q=[1]
return A.bU(A.dY(e),$async$bl,r)
case 12:s=13
q=[1]
return A.bU(A.dY(B.e.v(m.lv(g))),$async$bl,r)
case 13:if(g.f)A.w(A.x("Can't finalize a finalized MultipartFile."))
g.f=!0
s=14
q=[1]
return A.bU(A.JO(g.e),$async$bl,r)
case 14:s=15
q=[1]
return A.bU(A.dY(B.b2),$async$bl,r)
case 15:case 10:f.length===l||(0,A.q)(f),++h
s=9
break
case 11:s=16
q=[1]
return A.bU(A.dY(d),$async$bl,r)
case 16:case 1:return A.bU(null,0,r)
case 2:return A.bU(o.at(-1),1,r)}})
var s=0,r=A.Fx($async$bl,t.L),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d
return A.FM(r)},
qf(a,b){var s,r=$.BH()
r=A.z(a,r,"%0D%0A")
s='content-disposition: form-data; name="'+A.z(r,'"',"%22")+'"'
r=$.Df()
return(!r.b.test(b)?s+u.v:s)+"\r\n\r\n"},
lv(a){var s=a.d.l(0),r=$.BH(),q=A.z(a.a,r,"%0D%0A"),p="content-type: "+s+'\r\ncontent-disposition: form-data; name="'+A.z(q,'"',"%22")+'"'
s=A.z(a.c,r,"%0D%0A")
p=p+'; filename="'+A.z(s,'"',"%22")+'"'
return p+"\r\n\r\n"},
oW(){var s,r=J.DV(new Array(51),t.S)
for(s=0;s<51;++s)r[s]=B.cN[$.GD().cH(66)]
return"dart-http-boundary-"+A.dQ(r,0,null)}}
A.v1.prototype={
$2(a,b){var s=this.a
s.a=s.a+(74+B.e.v(this.b.qf(a,b)).length+B.e.v(b).length+2)},
$S:27}
A.wt.prototype={
gms(){return this.y.length},
gjR(){var s,r
if(this.gco()==null||!this.gco().c.a.J("charset"))return B.n
s=this.gco().c.a.h(0,"charset")
s.toString
r=A.HR(s)
return r==null?A.w(A.a8('Unsupported encoding "'+s+'".',null,null)):r},
hR(){this.kN()
return new A.ds(A.Cn(this.y,t.L))},
gco(){var s=this.r.h(0,"content-type")
if(s==null)return null
return A.Io(s)},
sco(a){this.r.j(0,"content-type",a.l(0))},
p6(){if(!this.w)return
throw A.b(A.x("Can't modify a finalized Request."))}}
A.jr.prototype={}
A.nc.prototype={}
A.ig.prototype={}
A.fD.prototype={
l(a){var s=new A.a2(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.a7(0,new A.uM(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.uK.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.wY(null,j),h=$.Hc()
i.iF(h)
s=$.Hb()
i.f5(s)
r=i.gk9().h(0,0)
r.toString
i.f5("/")
i.f5(s)
q=i.gk9().h(0,0)
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
i.f5(s)
if(i.c!==i.e)i.d=null
p=i.d.h(0,0)
p.toString
i.f5("=")
n=i.d=s.eg(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gM()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.h(0,0)
n.toString
k=n}else k=A.Mk(i)
n=i.d=h.eg(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gM()
o.j(0,p,k)}i.uT()
return A.C7(r,q,o)},
$S:197}
A.uM.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.H9()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.Gq(b,$.GZ(),new A.uL(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:27}
A.uL.prototype={
$1(a){return"\\"+A.r(a.h(0,0))},
$S:53}
A.B8.prototype={
$1(a){var s=a.h(0,1)
s.toString
return s},
$S:53}
A.nv.prototype={
gn3(){return 1}}
A.pC.prototype={
dq(){var s=0,r=A.h(t.q),q,p=this,o,n,m
var $async$dq=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.b
s=m==null?3:4
break
case 3:s=5
return A.a(p.eE(),$async$dq)
case 5:o=b
s=o.gn3()<0.25?6:7
break
case 6:s=8
return A.a(p.jp(o),$async$dq)
case 8:case 7:n=p.b
n.toString
q=n
s=1
break
case 4:s=m.gn3()<0.25?9:10
break
case 9:s=11
return A.a(p.jp(m),$async$dq)
case 11:case 10:n=p.b
n.toString
q=n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dq,r)},
il(){var s=0,r=A.h(t.q),q,p=this
var $async$il=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eE(),$async$il)
case 3:q=p.jp(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$il,r)},
eE(){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eE=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:g=m.b
if(g!=null){q=g
s=1
break}j=m.d
l=j==null?m.d=m.a.c5():j
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
jp(a){var s=this.c
if(s!=null)return s
return this.c=this.fW(a)},
fW(a){return this.pE(a)},
pE(a){var s=0,r=A.h(t.q),q,p=2,o=[],n=[],m=this,l,k
var $async$fW=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:++m.e
l=a
if(l==null)throw A.b(A.x("Cannot refresh without a cached token"))
p=3
s=6
return A.a(m.a.im(l),$async$fW)
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
A.j7.prototype={
ow(a,b,c,d,e,f,g,h){var s=this,r=new A.pC(s.b)
s.x!==$&&A.cg()
s.x=r
s.y!==$&&A.cg()
s.y=new A.vq(s.w,s.a,r)},
ie(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$ie=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.as){s=1
break}n.as=!0
if(n.at){s=1
break}p=4
m=n.y
m===$&&A.y()
s=7
return A.a(m.ih(),$async$ie)
case 7:n.Q=b
p=2
s=6
break
case 4:p=3
k=o.pop()
m=A.F(k)
if(m instanceof A.cG){n.Q=!1
n.at=!0}else if(m instanceof A.bu)n.as=n.Q=!1
else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ie,r)},
fO(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$fO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.z!=null){s=1
break}o=p.y
o===$&&A.y()
n=A.IC(B.c4,o,A.k([p.r],t.s),p.gqJ(),p.gqG())
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
return A.a(o instanceof A.u?o:A.bv(o,t.H),$async$ex)
case 2:q.z=null
for(o=q.ay,p=new A.aR(o,o.r,o.e,A.n(o).i("aR<2>"));p.k();)p.d.D()
o.aj(0)
q.ch.aj(0)
return A.e(null,r)}})
return A.f($async$ex,r)},
qH(){var s,r,q,p
for(s=this.CW,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
this.eB(p,new A.cC(p,B.a9,null))}},
qK(a){var s=a.b,r=s.b
if(!B.b.F(this.CW,r))return
if(a.a==="delete"){this.ho(s)
return}this.eB(r,new A.cC(r,B.a9,s))},
ho(a){return this.tb(a)},
tb(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$ho=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=a.b
if(!B.b.F(n.CW,j)){s=1
break}m=null
p=4
l=n.y
l===$&&A.y()
s=7
return A.a(l.bU(a.a),$async$ho)
case 7:m=c
p=2
s=6
break
case 4:p=3
i=o.pop()
l=A.F(i)
if(l instanceof A.cK){n.eB(j,new A.cC(j,B.aO,null))
s=1
break}else if(l instanceof A.bu){s=1
break}else throw i
s=6
break
case 3:s=2
break
case 6:if(m==null){n.eB(j,new A.cC(j,B.aO,null))
s=1
break}n.eB(j,new A.cC(j,B.a9,m))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ho,r)},
eB(a,b){var s,r,q=this
q.ch.j(0,a,b)
s=q.ay
r=s.h(0,a)
if(r!=null)r.D()
s.j(0,a,A.cR(q.c,new A.vm(q,a)))},
wO(a,b){return this.is(null,a,null,b,null)},
is(a,b,c,d,e){return this.wR(a,b,c,d,e)},
wQ(a,b){return this.is(null,a,null,null,b)},
wR(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$is=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:o=e==null?null:e.aT(0,new A.vn(),t.N,t.co)
n=p.y
n===$&&A.y()
q=n.ir(a,b,c,d,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$is,r)},
$iCp:1}
A.vm.prototype={
$0(){var s,r=this.a,q=this.b
r.ay.H(0,q)
s=r.ch.H(0,q)
if(s!=null&&(r.ax.c&4)===0)r.ax.t(0,s)},
$S:0}
A.vn.prototype={
$2(a,b){return new A.R(a,new A.dx("imgs+",b.a,b.b,b.c),t.ia)},
$S:212}
A.mC.prototype={}
A.vG.prototype={
hF(a,b,c,d){return this.tS(a,b,c,d)},
tS(a,b,c,d){var s=0,r=A.h(t.o8),q,p,o,n,m,l,k,j
var $async$hF=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=new A.zZ(d)
n=t.hw
m=A.dO(null,null,n)
l=t.N
k=$.C.h(0,B.dq)
j=k==null?null:t.dF.a(k).$0()
if(j==null)j=new A.l_(A.k([],t.kG))
j=new A.vo(j)
p=new A.mC(c,a,o,B.aY,200,25,b,"data",j,m,A.t(l,t.hU),A.t(l,n))
p.ow(a,b,25,200,"data",B.aY,o,null)
s=3
return A.a(p.fO(),$async$hF)
case 3:q=p
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hF,r)},
hL(a){return this.uz(a)},
uz(a){var s=0,r=A.h(t.H),q
var $async$hL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.ex(),$async$hL)
case 2:a.ex()
q=a.ax
if((q.c&4)===0)q.q()
a.w.a.q()
return A.e(null,r)}})
return A.f($async$hL,r)}}
A.zZ.prototype={
c5(){var s=0,r=A.h(t.q),q,p=this,o
var $async$c5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c5(),$async$c5)
case 3:q=o.Eq(b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c5,r)},
im(a){return this.wq(a)},
wq(a){var s=0,r=A.h(t.q),q,p=this,o
var $async$im=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(p.a.c5(),$async$im)
case 3:q=o.Eq(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$im,r)}}
A.vq.prototype={
ff(a,b,c,d,e,f){return this.vH(a,b,c,d,e,f)},
vH(a,b,c,d,e,f){var s=0,r=A.h(t.kR),q,p=this,o,n,m,l,k,j,i,h
var $async$ff=A.c(function(g,a0){if(g===1)return A.d(a0,r)
for(;;)switch(s){case 0:h=e==null
if(!h)o=A.MY(a,e,c)
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
k=p.b.bq("/api/collections/data/records").kn(n)
s=3
return A.a(p.lX("GET",k),$async$ff)
case 3:j=a0
p.cZ(j,A.k([200],t.t),k)
i=p.cX(j).h(0,"items")
if(!t.j.b(i))throw A.b(A.bt("List response has no items array."))
h=J.bM(i,new A.vx(p),t.Q)
h=A.O(h,h.$ti.i("Z.E"))
q=h
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ff,r)},
bU(a){return this.nV(a)},
nV(a){var s=0,r=A.h(t.jB),q,p=this,o,n
var $async$bU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.b.bq("/api/collections/data/records/"+A.hO(2,a,B.n,!1))
s=3
return A.a(p.lX("GET",o),$async$bU)
case 3:n=c
if(n.a===404)throw A.b(A.IA("not found"))
p.cZ(n,A.k([200],t.t),o)
q=p.dN(p.cX(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bU,r)},
hH(a,b,c){return this.tX(a,b,c)},
tX(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$hH=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bq("/api/collections/data/records")
s=3
return A.a(p.eT("POST",o,B.h.a6(A.m(["id",b,"store",c,"data",B.h.av(a,null)],t.N,t.z),null)),$async$hH)
case 3:n=e
if(n.a===400&&p.qj(n))throw A.b(new A.fo(p.eD(n)))
p.cZ(n,A.k([200,201],t.t),o)
q=p.dN(p.cX(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hH,r)},
qj(a){var s,r,q,p,o,n
try{s=this.cX(a)
r=J.S(s,"data")
o=t.f
if(o.b(r)){q=r.h(0,"id")
if(o.b(q)){p=q.h(0,"code")
o=J.v(p,"validation_not_unique")||J.v(p,"validation_pk_invalid")
return o}}}catch(n){}return!1},
fC(a,b,c){return this.wN(a,b,c)},
wN(a,b,c){var s=0,r=A.h(t.Q),q,p=this,o,n
var $async$fC=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=p.b.bq("/api/collections/data/records/"+A.hO(2,c,B.n,!1))
s=3
return A.a(p.eT("PATCH",o,B.h.a6(A.m(["data",B.h.av(b,null)],t.N,t.z),null)),$async$fC)
case 3:n=e
p.cZ(n,A.k([200],t.t),o)
q=p.dN(p.cX(n))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fC,r)},
ir(a,b,c,d,e){return this.wP(a,b,c,d,e)},
wP(a,b,c,d,e){var s=0,r=A.h(t.Q),q,p=this,o,n,m,l
var $async$ir=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:n=p.b.bq("/api/collections/data/records/"+A.hO(2,b,B.n,!1))
m=t.N
l=A.t(m,m)
if(d!=null)l.j(0,"imgs-",B.h.a6(d,null))
if(e==null)m=null
else{m=A.n(e).i("aq<2>")
m=A.O(new A.aq(e,m),m.i("o.E"))}s=3
return A.a(p.rL(new A.lT("PATCH",n,B.ay,l,m==null?B.cG:m)),$async$ir)
case 3:o=g
p.cZ(o,A.k([200],t.t),n)
q=p.dN(p.cX(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ir,r)},
hN(a,b,c){return this.uD(a,b,c)},
uD(a,b,c){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l
var $async$hN=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=t.N
l=A.t(l,l)
o=p.b.bq("/api/files/data/"+A.hO(2,b,B.n,!1)+"/"+A.hO(2,a,B.n,!1))
n=l.a===0?o:o.kn(l)
s=3
return A.a(p.qM(new A.eo("GET",n,B.ay,null)),$async$hN)
case 3:m=e
p.cZ(new A.cH(m.a,m.b,""),A.k([200],t.t),n)
q=m.c
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hN,r)},
fo(a){return this.w8(a)},
w8(a4){var s=0,r=A.h(t.jX),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$fo=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a2=p.b.bq("/api/batch")
a3=A.k([],t.ic)
for(o=J.aA(a4),n=o.gu(a4),m=t.N,l=t.z,k=t.K;n.k();){j=n.gn()
a3.push(A.m(["method","PUT","url","/api/collections/data/records","body",A.m(["id",j.c,"store",j.b,"data",B.h.av(j.d,null)],m,l)],m,k))}s=3
return A.a(p.eT("POST",a2,B.h.a6(A.m(["requests",a3],m,t.ew),null)),$async$fo)
case 3:i=a6
a3=i.a
if(a3===403)throw A.b(A.HY(p.eD(i)))
if(a3===400)throw A.b(new A.ea(p.eD(i)))
p.cZ(i,A.k([200],t.t),a2)
h=B.h.av(i.c,null)
a3=t.j
if(a3.b(h))g=h
else{n=t.f
if(n.b(h)){f=h.h(0,"data")
e=n.b(f)?f.h(0,"results"):h.h(0,"results")
if(!a3.b(e))throw A.b(A.bt("Batch response has no results array."))}else throw A.b(A.bt("Batch response is not a list or envelope."))
g=e}a3=J.M(g)
if(a3.gm(g)!==o.gm(a4))throw A.b(A.bt("Batch response has "+a3.gm(g)+" results for "+o.gm(a4)+" requests."))
d=A.k([],t.g2)
for(n=t.f,c=0;c<o.gm(a4);++c){b=a3.h(g,c)
if(!n.b(b))throw A.b(A.bt("Batch response entry "+c+" is not a JSON object."))
m=o.h(a4,c)
a=b.h(0,"status")
l=J.dn(a)
a0=l.R(a,200)||l.R(a,201)
a1=b.h(0,"body")
l=a0&&n.b(a1)?p.dN(a1):null
k=a0?null:p.pJ(b)
j=a0&&n.b(a1)?B.h.a6(a1.h(0,"data"),null):null
d.push(new A.jd(m.a,a0,l,k,j))}q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fo,r)},
ih(){var s=0,r=A.h(t.y),q,p=this,o,n
var $async$ih=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.eT("POST",p.b.bq("/api/batch"),B.h.a6(A.m(["requests",[]],t.N,t.kS),null)),$async$ih)
case 3:o=b
n=o.a
if(n===403){q=!1
s=1
break}if(n===401)throw A.b(A.Hr(p.eD(o)))
if(n===408||n===429||n>=500)throw A.b(A.Er("batch probe status "+n))
q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ih,r)},
eT(a,b,c){return this.c1(new A.vt(this,a,b,c),new A.vu(),t.w)},
lX(a,b){return this.eT(a,b,null)},
rL(a){return this.c1(new A.vv(this,a),new A.vw(),t.w)},
qM(a){return this.c1(new A.vr(this,a),new A.vs(),t.lI)},
c1(a,b,c){return this.tg(a,b,c,c)},
tg(a,b,c,d){var s=0,r=A.h(d),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$c1=A.c(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:p=4
i=n.c
s=7
return A.a(i.dq(),$async$c1)
case 7:m=f
s=8
return A.a(a.$1(m.a),$async$c1)
case 8:l=f
s=J.v(b.$1(l),401)?9:10
break
case 9:s=11
return A.a(i.il(),$async$c1)
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
i=A.F(g)
if(i instanceof A.dy){j=i
throw A.b(A.Er(j.a))}else throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c1,r)},
ju(a,b,c,d){return this.rJ(a,b,c,d)},
rJ(a,b,c,d){var s=0,r=A.h(t.w),q,p=this,o
var $async$ju=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=t.N
o=A.t(o,o)
o.j(0,"Authorization","Bearer "+d)
if(c!=null)o.j(0,"Content-Type","application/json")
q=p.a.b4(new A.eo(a,b,o,c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ju,r)},
cZ(a,b,c){if(B.b.F(b,a.a))return
throw A.b(this.qn(a,c))},
qn(a,b){var s=a.a,r=a.b.h(0,"retry-after"),q=this.eD(a)
if(401===s)return new A.c0(q)
if(403===s)return new A.cG(q)
if(404===s)return new A.cK(q)
if(408===s||429===s)return new A.eD(r,q)
if(400===s)return new A.fN(q)
if(s>=500)return new A.jk(q)
return new A.fP("Unexpected status "+s+" for "+b.l(0)+": "+q)},
eD(a){var s,r,q,p,o
try{s=this.cX(a)
r=J.S(s,"message")
if(typeof r=="string"&&r.length!==0)return r
q=J.S(s,"data")
if(t.f.b(q)){p=q
p=p.gW(p)}else p=!1
if(p){p=B.h.a6(q,null)
return p}}catch(o){}p=a.c
return p.length<=500?p:B.a.A(p,0,500)},
cX(a){var s,r,q,p=null
try{p=B.h.av(a.c,null)}catch(r){q=A.F(r)
if(t.Y.b(q)){s=q
throw A.b(A.bt("Response is not valid JSON: "+s.gkb()))}else throw r}if(t.f.b(p))return A.ba(p,t.N,t.X)
throw A.b(A.bt("Expected a JSON object, got "+J.c_(p).l(0)+"."))},
dN(a){var s,r,q,p,o,n,m,l,k,j=t.f
if(!j.b(a))throw A.b(A.bt("Record is not a JSON object."))
s=a.h(0,"id")
r=a.h(0,"store")
q=a.h(0,"updated")
if(typeof s!="string"||typeof q!="string")throw A.b(A.bt("Record missing id/updated."))
p=typeof r=="string"?r:""
o=a.h(0,"data")
n=t.N
m=t.X
l=j.b(o)?A.ba(o,n,m):A.t(n,m)
k=a.h(0,"imgs")
if(t.j.b(k)){j=J.Dm(k,n)
j=A.O(j,j.$ti.i("o.E"))}else j=B.q
return new A.cM(s,p,q,l,j)},
pJ(a){var s,r,q=a.h(0,"response")
if(t.f.b(q)){s=q.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s}s=a.h(0,"message")
if(typeof s=="string"&&s.length!==0)return s
r=a.h(0,"status")
return r==null?"batch item failed":"batch item failed ("+A.r(r)+")"}}
A.vx.prototype={
$1(a){return this.a.dN(a)},
$S:113}
A.vt.prototype={
$1(a){var s=this
return s.a.ju(s.b,s.c,s.d,a)},
$S:43}
A.vu.prototype={
$1(a){return a.a},
$S:44}
A.vv.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.dv(new A.lT(s.a,s.b,r,s.d,s.e))},
$S:43}
A.vw.prototype={
$1(a){return a.a},
$S:44}
A.vr.prototype={
$1(a){var s=this.b,r=t.N
r=A.cJ(s.c,r,r)
r.j(0,"Authorization","Bearer "+a)
return this.a.a.ej(new A.eo(s.a,s.b,r,s.d))},
$S:236}
A.vs.prototype={
$1(a){return a.a},
$S:82}
A.j9.prototype={}
A.hI.prototype={}
A.vy.prototype={
az(){var s=0,r=A.h(t.H),q,p=this
var $async$az=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(p.x){s=1
break}p.x=!0
p.eS()
case 1:return A.e(q,r)}})
return A.f($async$az,r)},
aF(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aF=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=q.x=!1
n=q.y
n=n==null?null:n.D()
s=2
return A.a(n instanceof A.u?n:A.bv(n,t.H),$async$aF)
case 2:q.y=null
p=q.z
if(p!=null?(p.a.a&30)===0:o)p.an()
return A.e(null,r)}})
return A.f($async$aF,r)},
eS(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$eS=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:k=0
n=o.f,m=t.H
case 2:if(!o.x){s=3
break}q=5
s=8
return A.a(o.cU(),$async$eS)
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
return A.a(A.I3(n.$1(k),m),$async$eS)
case 9:s=2
break
case 3:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$eS,r)},
cU(){return this.pl()},
pl(){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cU=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
n=p.a
s=3
return A.a(n.c.dq(),$async$cU)
case 3:m=b
l=t.N
s=4
return A.a(n.a.ej(new A.eo("GET",n.b.bq("/api/realtime"),A.m(["Authorization","Bearer "+m.a],l,l),null)),$async$cU)
case 4:k=b
n=k.a
if(n!==200)throw A.b(A.iz("realtime connect status "+n,null))
s=!p.x?5:6
break
case 5:s=7
return A.a(k.c.aS(new A.vB()).D(),$async$cU)
case 7:s=1
break
case 6:++p.as
p.z=new A.aI(new A.u($.C,t.D),t.h)
n=$.pj()
l=A.k([],t.s)
o.a=o.b=!1
p.y=k.c.by(new A.vC(o,p,new A.A_(new A.yO(n),l),m),new A.vD(p),new A.vE(p))
s=8
return A.a(p.z.a,$async$cU)
case 8:p.y=null
if(o.a)throw A.b(A.iz("realtime subscribe failed",null))
case 1:return A.e(q,r)}})
return A.f($async$cU,r)},
h4(a,b){return this.q4(a,b)},
q4(a0,a1){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$h4=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a=a0.a
s=a!=null?3:4
break
case 3:l=p.a
k=t.N
s=5
return A.a(l.a.b4(new A.eo("POST",l.b.bq("/api/realtime"),A.m(["Authorization","Bearer "+a1.a,"Content-Type","application/json"],k,k),B.h.a6(A.m(["clientId",a,"subscriptions",p.b],k,t.K),null))),$async$h4)
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
l=l.b(j)?A.ba(j,t.N,t.X):B.j
if(t.j.b(f)){c=J.Dm(f,t.N)
c=A.O(c,c.$ti.i("o.E"))}else c=B.q
m=new A.cM(k,e,d,l,c)
p.w.$1(new A.j9(o,m))}catch(a2){}case 1:return A.e(q,r)}})
return A.f($async$h4,r)}}
A.vF.prototype={
$1(a){return A.G7(a,this.a,this.b,A.MS())},
$S:84}
A.vB.prototype={
$1(a){},
$S:19}
A.vC.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.c.uV(a)
for(s=k.length,r=l.b,q=l.a,p=l.d,o=t.P,n=0;n<k.length;k.length===s||(0,A.q)(k),++n){m=k[n]
r.Q=r.Q.X(new A.vz(q,r,m,p),o).mp(new A.vA())}},
$S:19}
A.vz.prototype={
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
return A.a(l instanceof A.u?l:A.bv(l,t.H),$async$$1)
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
$S:100}
A.vA.prototype={
$1(a){},
$S:20}
A.vD.prototype={
$0(){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:0}
A.vE.prototype={
$1(a){var s=this.a.z
if((s.a.a&30)===0)s.an()},
$S:20}
A.A_.prototype={
uV(a){var s,r,q,p,o,n,m,l=this.a
l.t(0,a)
s=l.kq()
r=A.k([],t.gy)
for(q=s.length,p=0;;){o=this.qg(s,p)
if(o<0)break
n=new Uint8Array(s.subarray(p,A.dl(p,o,q)))
p=o+1
m=this.pA(B.a.wI(new A.dj(!0).cV(n,0,null,!0)))
if(m!=null)r.push(m)}if(p<q)l.t(0,B.f.b5(s,p))
return r},
qg(a,b){var s,r
for(s=a.length,r=b;r<s;++r)if(a[r]===10)return r
return-1},
pY(){var s,r,q,p,o,n,m=this,l=null,k=m.c
if(k.length===0){m.b=null
B.b.aj(k)
return l}s=m.b
r=B.b.B(k,"\n")
m.b=null
B.b.aj(k)
try{q=B.h.av(r,l)
if(t.f.b(q)){p=A.ba(q,t.N,t.X)
o=J.S(p,"clientId")
if(J.v(s,"PB_CONNECT")&&typeof o=="string")return new A.hI(o,l)
return new A.hI(l,p)}}catch(n){}return l},
pA(a){var s,r=this,q=null
if(a.length===0)return r.pY()
if(B.a.S(a,"PB_CONNECT:")){r.b=null
B.b.aj(r.c)
return new A.hI(B.a.cg(B.a.ae(a,11)),q)}if(B.a.S(a,":"))return q
if(B.a.S(a,"event:")){r.b=B.a.cg(B.a.ae(a,6))
return q}if(B.a.S(a,"data:")){s=B.a.cg(B.a.ae(a,5))
if(s.length!==0)r.c.push(s)
return q}return q}}
A.eo.prototype={}
A.dx.prototype={
od(){return this.d.$0()},
gm(a){return this.c}}
A.lT.prototype={}
A.cH.prototype={}
A.dy.prototype={
l(a){return"HttpTransportException: "+this.a},
$iG:1}
A.dP.prototype={}
A.vo.prototype={
b4(a){return this.o2(a)},
o2(a){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$b4=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.a(n.ej(a),$async$b4)
case 7:m=c
j=m.c
s=8
return A.a(B.aL.kP(j).ec(0).ip(B.ad),$async$b4)
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
j=A.iz("HTTP "+a.a+" "+a.b.l(0)+" body failed",k)
throw A.b(j)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b4,r)},
dv(a){return this.o3(a)},
o3(a6){var s=0,r=A.h(t.w),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dv=A.c(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:p=4
h=A.Iw(a6.a,a6.b)
h.r.C(0,a6.c)
h.x.C(0,a6.d)
m=h
g=a6.e,f=g.length,e=t.ph,d=t.N,c=0
case 7:if(!(c<g.length)){s=9
break}l=g[c]
b=m.y
a=l.a
s=10
return A.a(l.od(),$async$dv)
case 10:a0=a8
a1=l.c
a2=l.b
a0=A.Gt(a0)
a3=new A.fD("application".toLowerCase(),"octet-stream".toLowerCase(),new A.cT(A.t(d,d),e))
b.push(new A.mj(a,a1,a2,a3,a0))
case 8:g.length===f||(0,A.q)(g),++c
s=7
break
case 9:s=11
return A.a(n.a.b4(m).ip(B.ad),$async$dv)
case 11:k=a8
g=k.w
s=12
return A.a(B.aL.kP(g).ec(0).ip(B.ad),$async$dv)
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
g=A.iz("HTTP multipart "+a6.a+" "+a6.b.l(0)+" failed",i)
throw A.b(g)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dv,r)},
ej(a){return this.w0(a)},
w0(a3){var s=0,r=A.h(t.lI),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$ej=A.c(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:a=a3.a
a0=a3.b
a1=A.IS(a,a0)
a1.r.C(0,a3.c)
j=a3.d
if(j!=null){i=a1
j=i.gjR().jQ(j)
i.p6()
i.y=A.N1(j)
h=i.gco()
if(h==null){j=t.N
i.sco(A.C7("text","plain",A.m(["charset",i.gjR().gaO()],j,j)))}else{j=i.gco()
if(j!=null){g=j.a
if(g!=="text"){j=g+"/"+j.b
j=j==="application/xml"||j==="application/xml-external-parsed-entity"||j==="application/xml-dtd"||B.a.c6(j,"+xml")}else j=!0}else j=!1
if(j&&!h.c.a.J("charset")){j=t.N
f=A.m(["charset",i.gjR().gaO()],j,j)
e=h.a
d=h.b
c=A.ba(h.c,j,j)
c.C(0,f)
i.sco(A.C7(e,d,c))}}}p=4
s=7
return A.a(n.a.b4(a1).ip(B.ad),$async$ej)
case 7:m=a5
j=t.N
l=A.t(j,j)
m.e.a7(0,new A.vp(l))
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
a=A.iz("HTTP "+a+" "+a0.l(0)+" failed",k)
throw A.b(a)}s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$ej,r)}}
A.vp.prototype={
$2(a,b){this.a.j(0,a,b)
return b},
$S:27}
A.qC.prototype={
$1(a){return a.b===this.a},
$S:109}
A.qD.prototype={
$1(a){return a.b===this.a},
$S:112}
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
A.c3.prototype={}
A.l5.prototype={
gU(){return"committedChange"},
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
gU(){return"conflictsSnapshot"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["subscription",this.a,"conflicts",p],t.N,t.X)}}
A.jx.prototype={
gU(){return"watchSnapshot"},
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
p(){return B.j}}
A.lN.prototype={
gU(){return"fileUploadSession"},
p(){return A.m(["session",this.a,"maxChunkBytes",this.b],t.N,t.X)}}
A.lL.prototype={
gU(){return"fileRef"},
p(){var s=this.a.p()
return A.m(["ref",s],t.N,t.X)}}
A.fv.prototype={
gU(){return"fileRefs"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["refs",p],t.N,t.X)}}
A.lJ.prototype={
gU(){return"fileOpen"},
p(){return A.m(["stream",this.a],t.N,t.X)}}
A.fu.prototype={
gU(){return"fileGc"},
p(){return A.m(["cleaned",this.a],t.N,t.X)}}
A.fs.prototype={
gU(){return"fileCap"},
p(){return A.m(["evicted",this.a],t.N,t.X)}}
A.h7.prototype={
gU(){return"storageStatus"},
p(){return A.m(["durable",this.a],t.N,t.X)}}
A.ft.prototype={
gU(){return"fileChunk"},
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"stream",r.a)
q.j(0,"chunk",A.hY(r.b))
q.j(0,"last",r.c)
s=r.d
if(s!=null)q.j(0,"error",s)
return q}}
A.v2.prototype={}
A.iU.prototype={}
A.iX.prototype={}
A.iV.prototype={}
A.iY.prototype={}
A.iR.prototype={}
A.iS.prototype={}
A.iQ.prototype={}
A.iW.prototype={}
A.iT.prototype={}
A.AG.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:10}
A.wk.prototype={
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
A.wl.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:10}
A.wm.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.V("Malformed query conditions."))
s=A.k([],t.cM)
for(r=J.E(a);r.k();)s.push(A.Ed(r.gn()))
return s},
$S:115}
A.eA.prototype={
p(){var s,r,q,p,o=this,n=A.t(t.N,t.X)
n.j(0,"field",o.a)
n.j(0,"op",o.b.b)
s=o.d
if(s!=null){r=[]
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.q)(s),++p)r.push(A.hY(s[p]))
n.j(0,"values",r)}else n.j(0,"value",A.hY(o.c))
return n}}
A.wh.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:10}
A.wi.prototype={
$1(a){return a.b===this.a},
$S:126}
A.aY.prototype={
a4(){return"QueryConditionOp."+this.b}}
A.cL.prototype={}
A.vK.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:10}
A.vJ.prototype={
$1(a){var s,r
if(!t.j.b(a))throw A.b(A.V("Malformed predicate children."))
s=A.k([],t.eK)
for(r=J.E(a);r.k();)s.push(A.C9(r.gn()))
return s},
$S:131}
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
A.wj.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:10}
A.cB.prototype={
a4(){return"AggregateFn."+this.b}}
A.wA.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"term",r.a)
s=r.b
if(s!=null)q.j(0,"limit",s)
q.j(0,"all",r.c)
q.j(0,"includeArchived",r.d)
q.j(0,"includeHidden",r.e)
return q}}
A.wB.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:10}
A.mO.prototype={}
A.mu.prototype={
p(){return A.m(["stores",this.a,"manifestFingerprints",this.b],t.N,t.X)}}
A.l0.prototype={
p(){return B.j}}
A.lR.prototype={
p(){return B.j}}
A.l3.prototype={
p(){return B.j}}
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
r.j(0,"mutation",A.KJ(this.b))
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
A.kG.prototype={
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
A.dR.prototype={
a4(){return"TransactionDurability."+this.b}}
A.nw.prototype={
p(){return A.m(["readOnly",this.a,"durability",this.b.b],t.N,t.X)}}
A.nx.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nz.prototype={
p(){return A.m(["session",this.a],t.N,t.X)}}
A.nB.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nA.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.ny.prototype={
p(){return A.m(["session",this.a,"name",this.b],t.N,t.X)}}
A.nQ.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.nR.prototype={
p(){return A.m(["store",this.a,"spec",this.b.p()],t.N,t.X)}}
A.nP.prototype={
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.kI.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.nO.prototype={
p(){return B.j}}
A.nM.prototype={
p(){return B.j}}
A.mG.prototype={
p(){return B.j}}
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
A.kD.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.kE.prototype={
p(){return A.m(["store",this.a,"id",this.b],t.N,t.X)}}
A.ld.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"store",r)
return s}}
A.ag.prototype={}
A.fL.prototype={
gU(){return"ok"},
p(){return B.j}}
A.ie.prototype={
gU(){return"capabilities"},
p(){var s=this
return A.m(["sqliteVersion",s.a,"hasStrict",s.b,"walSupported",s.c,"hasFts5",s.d,"isWeb",s.e,"storage",s.f,"durable",s.r,"journal",s.w],t.N,t.X)}}
A.lS.prototype={
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
p(){var s,r=this,q=A.t(t.N,t.X)
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
p(){var s,r,q,p,o,n,m=A.k([],t.d)
for(s=this.a,r=s.length,q=t.N,p=t.X,o=0;o<s.length;s.length===r||(0,A.q)(s),++o){n=s[o]
m.push(A.m(["id",n.a,"score",n.b],q,p))}return A.m(["hits",m],q,p)}}
A.mX.prototype={
p(){return A.m(["id",this.a,"score",this.b],t.N,t.X)}}
A.fk.prototype={
gU(){return"conflicts"},
p(){var s,r,q,p=A.k([],t.d)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["conflicts",p],t.N,t.X)}}
A.fj.prototype={
gU(){return"conflict"},
p(){var s=this.a
return A.m(["conflict",s==null?null:s.p()],t.N,t.X)}}
A.hd.prototype={
gU(){return"txBegin"},
p(){return A.m(["session",this.a],t.N,t.X)}}
A.hl.prototype={
gU(){return"watchStarted"},
p(){return A.m(["subscription",this.a],t.N,t.X)}}
A.fQ.prototype={
gU(){return"pruneOutbox"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.fh.prototype={
gU(){return"compact"},
p(){return A.m(["removed",this.a],t.N,t.X)}}
A.nn.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
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
A.xb.prototype={
p(){var s=this
return A.m(["pulled",s.a,"swept",s.b,"pushed",s.c,"deadLettered",s.d,"blocked",s.e,"discarded",s.f,"hadError",s.r],t.N,t.X)}}
A.nl.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"baseUrl",this.a)
s=this.b
if(s!=null)r.j(0,"scopeId",s)
s=this.c
if(s!=null)r.j(0,"token",s)
return r}}
A.nr.prototype={
p(){return B.j}}
A.ng.prototype={
p(){return B.j}}
A.nh.prototype={
p(){return B.j}}
A.nj.prototype={
p(){return B.j}}
A.ns.prototype={
p(){var s=A.t(t.N,t.X),r=this.a
if(r!=null)s.j(0,"token",r)
return s}}
A.nk.prototype={
p(){return A.m(["online",this.a],t.N,t.X)}}
A.np.prototype={
p(){return B.j}}
A.nm.prototype={
gU(){return"syncStart"},
p(){return A.m(["state",this.a.b],t.N,t.X)}}
A.ni.prototype={
gU(){return"syncReport"},
p(){return A.m(["report",this.a.p()],t.N,t.X)}}
A.nq.prototype={
gU(){return"syncStatus"},
p(){return A.m(["status",this.a.p()],t.N,t.X)}}
A.no.prototype={
gU(){return"syncStatusEvent"},
p(){return A.m(["status",A.hY(this.a.p())],t.N,t.X)}}
A.kO.prototype={
gU(){return"authRequired"},
p(){return B.j}}
A.jz.prototype={
l(a){return"WireException: "+this.a},
$iG:1}
A.xK.prototype={
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
dL(){var s=0,r=A.h(t.y),q,p=this,o
var $async$dL=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.d
s=o==null?3:5
break
case 3:s=6
return A.a(p.eK(),$async$dL)
case 6:b=p.d=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dL,r)},
bm(){var s=0,r=A.h(t.ad),q,p=2,o=[],n=this,m,l,k,j,i
var $async$bm=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.dL(),$async$bm)
case 3:if(!b){q=null
s=1
break}p=5
m=A.i4()
if(m==null){q=null
s=1
break}k=t.m
s=8
return A.a(A.a5(m.getDirectory(),k),$async$bm)
case 8:l=b
s=9
return A.a(A.a5(l.getDirectoryHandle("localpocket_blobs",{create:!0}),k),$async$bm)
case 9:k=b
q=new A.ox(k)
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
return A.f($async$bm,r)},
dj(a,b,c){return this.w9(a,b,c)},
ii(a){return this.dj(a,null,null)},
w9(a,b,c){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$dj=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=new A.yo(A.k([],t.bs))
s=3
return A.a(A.ku(a,b,c,null,new A.xL(o)),$async$dj)
case 3:n=e
m=o.kq()
s=4
return A.a(p.bm(),$async$dj)
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
cI(a){return this.vZ(a)},
vZ(a){var s=0,r=A.h(t.ku),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$cI=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:A.kZ(a)
j=n.b
if(j.J(a)){j=j.h(0,a)
j.toString
q=A.Cn(j,t.L)
s=1
break}s=3
return A.a(n.bm(),$async$cI)
case 3:m=c
s=m!=null?4:5
break
case 4:p=7
s=10
return A.a(m.el(a),$async$cI)
case 10:l=c
j=A.Cn(l,t.L)
q=j
s=1
break
p=2
s=9
break
case 7:p=6
h=o.pop()
k=A.F(h)
if(!(k instanceof A.fc))throw A.b(A.Dt(k,a))
s=9
break
case 6:s=2
break
case 9:case 5:throw A.b(A.x("Blob not found: "+a))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cI,r)},
d9(a){return this.u4(a)},
u4(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k
var $async$d9=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:A.kZ(a)
o.b.H(0,a)
s=2
return A.a(o.bm(),$async$d9)
case 2:n=c
s=n!=null?3:4
break
case 3:q=6
s=9
return A.a(n.H(0,a),$async$d9)
case 9:q=1
s=8
break
case 6:q=5
k=p.pop()
m=A.F(k)
if(!(m instanceof A.fc))throw A.b(A.Dt(m,a))
s=8
break
case 5:s=1
break
case 8:case 4:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$d9,r)},
bo(a){return this.uR(a)},
uR(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$bo=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kZ(a)
if(p.b.J(a)){q=!0
s=1
break}s=3
return A.a(p.bm(),$async$bo)
case 3:o=c
if(o!=null){q=o.bo(a)
s=1
break}q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bo,r)},
bh(a){return this.o6(a)},
o6(a){var s=0,r=A.h(t.U),q,p=this,o,n
var $async$bh=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.kZ(a)
o=p.b
if(o.J(a)){q=o.h(0,a).length
s=1
break}s=3
return A.a(p.bm(),$async$bh)
case 3:n=c
if(n!=null){q=n.bh(a)
s=1
break}q=null
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bh,r)},
e3(a){return this.tM(a)},
tM(a){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$e3=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:s=3
return A.a(n.bm(),$async$e3)
case 3:i=c
if(i==null){q=0
s=1
break}m=0
p=5
f=J
s=8
return A.a(i.ed(),$async$e3)
case 8:k=f.E(c)
case 9:if(!k.k()){s=10
break}l=k.gn()
if(!J.Hm(l,"tmp_")){s=9
break}p=12
s=15
return A.a(i.H(0,l),$async$e3)
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
return A.f($async$e3,r)},
fd(){var s=0,r=A.h(t.i),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$fd=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.b
i=A.d2(new A.T(j,A.n(j).i("T<1>")),t.N)
s=3
return A.a(n.bm(),$async$fd)
case 3:h=b
s=h!=null?4:5
break
case 4:p=7
f=J
s=10
return A.a(h.ed(),$async$fd)
case 10:j=f.E(b)
case 11:if(!j.k()){s=12
break}m=j.gn()
l=$.D7()
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
return A.f($async$fd,r)}}
A.xL.prototype={
$1(a){return this.a.t(0,a)},
$S:19}
A.ox.prototype={
el(a){return this.wj(a)},
wj(a){var s=0,r=A.h(t.p),q,p=2,o=[],n=this,m,l,k,j,i,h,g
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
if(A.Ey(j))throw A.b(A.Ds(a))
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$el,r)},
aZ(a,b){return this.x9(a,b)},
x9(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
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
H(a,b){return this.wu(0,b)},
wu(a,b){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l
var $async$H=A.c(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.a(A.BV(o.a,b),$async$H)
case 6:q=1
s=5
break
case 3:q=2
l=p.pop()
n=A.F(l)
if(A.Ey(n))throw A.b(A.Ds(b))
throw l
s=5
break
case 2:s=1
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$H,r)},
bo(a){return this.uS(a)},
uS(a){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l
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
bh(a){return this.o7(a)},
o7(a){var s=0,r=A.h(t.U),q,p=2,o=[],n=this,m,l,k,j,i
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
ed(){var s=0,r=A.h(t.i),q,p=2,o=[],n=[],m=this,l,k,j
var $async$ed=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:k=A.k([],t.s)
j=new A.cy(A.cz(A.DK(m.a),"stream",t.K),t.hT)
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
$iE6:1}
A.BD.prototype={
$1(a){return a.a===this.a},
$S:150}
A.BE.prototype={
$2(a,b){return B.a.a0(a.a,b.a)},
$S:157}
A.mB.prototype={
a4(){return"PlatformProfile."+this.b}}
A.n8.prototype={
p(){var s=this
return A.m(["sqlite_version",s.a,"has_strict",s.b,"wal_supported",s.c,"has_fts5",s.d,"platform",s.e.b],t.N,t.X)}}
A.wL.prototype={
$1(a){return J.bZ(a.gaX())},
$S:40}
A.wM.prototype={
$1(a){return B.a.F(a,"ENABLE_FTS5")},
$S:9}
A.ih.prototype={
a4(){return"ChangeOrigin."+this.b}}
A.dt.prototype={
a4(){return"ChangeAction."+this.b}}
A.aS.prototype={
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
if(!(b instanceof A.aS))return!1
return b.a===s.a&&b.b===s.b&&b.c===s.c&&b.d===s.d&&B.t.Z(b.e,s.e)&&B.t.Z(b.f,s.f)&&B.t.Z(b.r,s.r)},
gI(a){var s=this
return A.c6(s.a,s.b,s.c,s.d,B.t.ac(s.e),B.t.ac(s.f),B.t.ac(s.r))},
l(a){var s=this
return"RecordChangeEvent("+s.c.l(0)+" "+s.d.l(0)+" "+s.a+"/"+s.b+" changed: "+s.r.l(0)+")"}}
A.a1.prototype={}
A.pR.prototype={
uH(a){var s=this.a
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)},
uI(a){var s=this.b
if((s.c&4)!==0)return
if(s.d!=null)s.t(0,a)}}
A.pS.prototype={}
A.pT.prototype={}
A.ru.prototype={}
A.pq.prototype={
uJ(a,b){var s,r,q,p,o,n,m=new Uint8Array(12)
for(s=this.d,r=0;r<12;++r)m[r]=s.cH(256)
q=this.b.uK(new Uint8Array(A.b7(a)),b,m,this.c)
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
u1(a,b){var s,r,q,p,o,n=a.length
if(n<29)throw A.b(A.Q("Ciphertext too short for AES-GCM (minimum 29 bytes).",null))
p=a[0]
if(p!==1)throw A.b(A.x("Unsupported ciphertext version 0x"+B.a.ic(B.c.ks(p,16),2,"0")+" (expected 0x01)."))
s=new Uint8Array(A.b7(B.f.T(a,1,13)))
n-=16
r=new Uint8Array(A.b7(B.f.b5(a,n)))
q=new Uint8Array(A.b7(B.f.T(a,13,n)))
try{n=this.b.u2(new A.jh(q,new A.iN(r),s),b,this.c)
return n}catch(o){if(A.F(o) instanceof A.ji)throw A.b(A.x("AES-GCM decryption failed: MAC verification failed (tampered ciphertext)."))
else throw o}}}
A.d1.prototype={
a4(){return"KindViolation."+this.b}}
A.AV.prototype={
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
if(l!=null)l.unregister(m.d)}}}o.aj(0)
p.b.q()
case 1:return A.e(q,r)}})
return A.f($async$q,r)},
ci(a){var s,r=this.a,q=r.H(0,a)
if(q!=null){r.j(0,a,q)
return q}if(r.a>=256){s=r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(s!=null)s.q()}q=this.b.w5(a)
r.j(0,a,q)
return q},
kE(a,b){var s=this.ci(a).kF(new A.bO(b)),r=A.n(s).i("X<K.E,I<l,j?>>")
r=A.O(new A.X(s,new A.rr(),r),r.i("Z.E"))
return r},
o0(a){return this.kE(a,B.m)},
f4(a,b){this.ci(a).e6(new A.bO(b))},
jS(a){return this.f4(a,B.m)},
aD(a,b){return this.uQ(a,b)},
O(a){return this.aD(a,B.m)},
uQ(a,b){var s=0,r=A.h(t.H),q=this
var $async$aD=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q.f4(a,b)
return A.e(null,r)}})
return A.f($async$aD,r)},
ah(a,b){return this.wh(a,b)},
b0(a){return this.ah(a,B.m)},
wh(a,b){var s=0,r=A.h(t.J),q,p=this
var $async$ah=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.kE(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ah,r)},
bP(a,b,c,d,e,f,g){return this.we(a,b,c,d,e,f,g)},
aI(a,b,c,d){return this.bP(a,null,b,null,null,c,d)},
ek(a,b,c,d,e){return this.bP(a,b,c,null,null,d,e)},
n_(a,b,c,d){return this.bP(a,b,null,null,null,c,d)},
cf(a,b,c){var s=null
return this.bP(a,s,s,s,s,b,c)},
wc(a,b,c,d,e){return this.bP(a,null,b,null,c,d,e)},
wb(a,b,c,d,e){return this.bP(a,b,c,d,e,null,null)},
wd(a,b,c,d,e,f){return this.bP(a,b,c,null,d,e,f)},
wa(a,b,c,d){return this.bP(a,null,null,null,b,c,d)},
we(a,b,c,d,e,f,g){var s=0,r=A.h(t.J),q,p=this,o,n
var $async$bP=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:n=b!=null&&b.length!==0?"SELECT "+B.b.B(b,", "):"SELECT *"
n+=' FROM "'+a+'"'
if(f!=null&&f.length!==0)n+=" WHERE "+f
if(e!=null&&e.length!==0)n+=" ORDER BY "+e
if(c!=null)n+=" LIMIT "+A.r(c)
if(d!=null)n+=" OFFSET "+A.r(d)
o=g==null?B.m:g
q=p.ah(n.charCodeAt(0)==0?n:n,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bP,r)},
ca(a,b,c,d){return this.vy(0,b,c,d)},
aC(a,b,c){return this.ca(0,b,c,null)},
vy(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j
var $async$ca=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(c.a===0){o=A.Q("insert with empty values requires nullColumnHack",null)
throw A.b(o)}o=A.n(c)
n=o.i("T<1>")
m=t.N
l=A.dG(new A.T(c,n),new A.rq(),n.i("o.E"),m).B(0,", ")
k=B.b.B(A.ae(c.a,"?",!1,m),", ")
j=A.DF(d)
o=o.i("aq<2>")
o=A.O(new A.aq(c,o),o.i("o.E"))
p.f4("INSERT"+j+' INTO "'+b+'" ('+l+") VALUES ("+k+")",o)
o=p.b.b
q=A.ao(v.G.Number(o.a.d.sqlite3_last_insert_rowid(o.b)))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ca,r)},
L(a,b,c,d){return this.wL(a,b,c,d)},
wL(a,b,c,d){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$L=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if(b.a===0){q=0
s=1
break}o=A.n(b)
n=o.i("T<1>")
m=A.dG(new A.T(b,n),new A.rs(),n.i("o.E"),t.N).B(0,", ")
n="UPDATE"+A.DF(null)+' "'+a+'" SET '+m
o=A.O(new A.aq(b,o.i("aq<2>")),t.X)
if(c.length!==0){n+=" WHERE "+c
B.b.C(o,d)}p.f4(n.charCodeAt(0)==0?n:n,o)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$L,r)},
Y(a,b,c){return this.u3(a,b,c)},
u3(a,b,c){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$Y=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o='DELETE FROM "'+a+'"'
n=[]
if(b.length!==0){o+=" WHERE "+b
B.b.C(n,c)}p.f4(o.charCodeAt(0)==0?o:o,n)
o=p.b.b
q=o.a.d.sqlite3_changes(o.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$Y,r)},
tU(a,b,c){this.b.tV(B.bs,!0,!1,new A.rp(b),c)},
a2(a,b){return this.wH(a,b,b)},
wH(a,b,c){var s=0,r=A.h(c),q,p=2,o=[],n=this,m,l,k,j
var $async$a2=A.c(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:n.jS("BEGIN IMMEDIATE")
p=4
s=7
return A.a(a.$1(n),$async$a2)
case 7:m=e
n.jS("COMMIT")
q=m
s=1
break
p=2
s=6
break
case 4:p=3
j=o.pop()
try{n.jS("ROLLBACK")}catch(i){}throw j
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$a2,r)},
$iqZ:1}
A.rr.prototype={
$1(a){return A.ba(a,t.N,t.X)},
$S:179}
A.rq.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.rs.prototype={
$1(a){return'"'+a+'" = ?'},
$S:6}
A.rp.prototype={
$1(a){var s=a.gm(0)===0?null:a.gG(a)
return this.a.$1(s)},
$S:188}
A.qf.prototype={}
A.io.prototype={
jI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e='Encrypted field "',d=A.k([],t.s),c=A.aN(t.N)
for(s=a.c,r=s.length,q=a.w,p=q!=null,o=a.d,n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=$.D8()
if(!k.b.test(l))A.w(A.aP('Field "'+l+u.Z))
if(B.bd.F(0,l))throw A.b(A.aP('Field "'+l+'" is a reserved column name (id/archived/hidden/extra).'))
if(!c.t(0,l))throw A.b(A.aP('Duplicate field "'+l+'".'))
if(m.e){if(m.d)throw A.b(A.aP(e+l+'" cannot be unique.'))
if(B.b.bL(o,new A.ro(m)))throw A.b(A.aP(e+l+'" cannot be indexed.'))
if(p){k=q.a
k=k.F(k,l)}else k=!1
if(k)throw A.b(A.aP(e+l+'" cannot be included in FTS.'))}}for(r=o.length,n=0;l=o.length,n<l;o.length===r||(0,A.q)(o),++n)for(l=o[n].a,k=l.$ti,l=new A.at(l,l.gm(0),k.i("at<K.E>")),k=k.i("K.E");l.k();){j=l.d
if(j==null)j=k.a(j)
if(!c.F(0,j)&&!B.bd.F(0,j))throw A.b(A.aP('Index column "'+j+'" is not a declared field of store "'+a.a+'".'))}for(r=l,i=0;i<r;r=l,i=h)for(h=i+1,r=h,g=0;l=o.length,g<l;++g){if(i===g)continue
if(B.af.Z(o[i].a,o[g].a)){if(i<g){l=o[i].a
d.push("Duplicate index columns "+l.l(l)+" (declarations "+r+" and "+(g+1)+").")}}else if(A.HO(o[g].a,o[i].a)&&!o[g].b){l=o[g].a
l=l.l(l)
k=o[i].a
d.push("Index "+l+" is prefix-subsumed by index "+k.l(k)+".")}}if(p){r=f.a
if(!r.d)throw A.b(A.rM(u.r))
if(q.b&&!A.El(r.a,3,34))throw A.b(A.rM("Fuzzy (trigram) search requires SQLite >= 3.34.0 (found "+r.a+")."))
for(r=q.a,p=r.$ti,r=new A.at(r,r.gm(0),p.i("at<K.E>")),p=p.i("K.E");r.k();){o=r.d
if(o==null)o=p.a(o)
if(!c.F(0,o))throw A.b(A.aP('FTS field "'+o+'" is not a declared field.'))}for(r=q.c.a.gab(),r=r.gu(r);r.k();){q=r.gn()
A.DN(q.a,q.b)}}for(r=s.length,n=0;n<r;++n){m=s[n]
q=m.b
if(q===B.I){p=m.f
p=p==null||p.length===0}else p=!1
if(p)throw A.b(A.aP('Enum field "'+m.a+'" must declare values.'))
if(q===B.J){q=m.r
q=q==null||q.length===0}else q=!1
if(q)throw A.b(A.aP('Ref field "'+m.a+'" must declare its target store.'))}return new A.qf(f.oZ(a),f.oY(a),f.oX(a),d)},
oZ(a){var s,r,q,p,o,n,m,l,k,j,i='""',h=A.k(["  id TEXT PRIMARY KEY"],t.s)
for(s=a.c,r=s.length,q=this.a.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
n=o.a
m="  "+('"'+A.z(n,'"',i)+'"')+" "+o.gkJ()
if(o.c)m+=" NOT NULL"
l=o.b
if(l===B.I&&q){k=o.f
k.toString
j=new A.X(k,new A.rn(),A.a_(k).i("X<1,l>")).B(0,", ")
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
oY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e='"',d='""',c="CREATE UNIQUE INDEX ",b=A.k([],t.s)
for(s=a.d,r=s.length,q=a.a,p="ix_"+q+"_live_",o="ux_"+q+"_",n=0;n<s.length;s.length===r||(0,A.q)(s),++n){m=s[n]
l=m.a
k=l.$ti.i("X<K.E,l>")
j=A.O(new A.X(l,A.B1(),k),k.i("Z.E"))
if(!l.F(l,"id"))j.push('"'+A.z("id",e,d)+'"')
i=m.c===B.b1?"archived = 0 AND hidden = 0":"archived = 0"
if(m.b){l=l.B(l,"_")
l=A.z(o+l,e,d)
b.push(c+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}else{l=l.B(l,"_")
l=A.z(p+l,e,d)
b.push("CREATE INDEX "+('"'+l+'"')+" ON "+('"'+A.z(q,e,d)+'"')+" ("+B.b.B(j,", ")+") WHERE "+i+";")}}for(r=a.c,l=r.length,n=0;k=r.length,n<k;r.length===l||(0,A.q)(r),++n){h=r[n]
if(h.b!==B.J)continue
if(B.b.bL(s,new A.rm(h)))continue
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
oX(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=", ",e='"',d='""',c=" BEGIN\n  INSERT INTO ",b=") VALUES (new.rowid, ",a=") VALUES ('delete', old.rowid, ",a0=a1.w
if(a0==null)return B.q
s=A.k([],t.s)
r=a1.a
q=r+"_fts"
p=a0.a
o=p.$ti.i("X<K.E,l>")
n=A.O(new A.X(p,A.B1(),o),o.i("Z.E"))
m=new A.rl(r,a0.c)
l=new A.X(p,new A.ri(m),o).B(0,f)
k=new A.X(p,new A.rj(m),o).B(0,f)
j=a0.b?",\n  tokenize = 'trigram'\n);":");"
s.push("CREATE VIRTUAL TABLE "+('"'+A.z(q,e,d)+'"')+" USING fts5(\n  "+B.b.B(n,f)+",\n  content = '"+r+"',\n  content_rowid = 'rowid'\n"+j)
p=A.z(r+"_ai",e,d)
o=A.z(r,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER INSERT ON "+('"'+o+'"')+c+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
p=A.z(r+"_ad",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER DELETE ON "+('"'+o+'"')+c+('"'+m+'"')+"("+('"'+A.z(q,e,d)+'"')+", rowid, "+B.b.B(n,f)+a+k+");\nEND;")
i=new A.X(n,new A.rk(),A.a_(n).i("X<1,l>")).B(0," OR ")
p=A.z(r+"_au",e,d)
o=A.z(r,e,d)
m=A.z(q,e,d)
h=A.z(q,e,d)
g=B.b.B(n,f)
s.push("CREATE TRIGGER "+('"'+p+'"')+" AFTER UPDATE ON "+('"'+o+'"')+" WHEN "+i+c+('"'+m+'"')+"("+('"'+h+'"')+", rowid, "+g+a+k+");\n  INSERT INTO "+('"'+A.z(q,e,d)+'"')+"(rowid, "+B.b.B(n,f)+b+l+");\nEND;")
return s}}
A.ro.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:47}
A.rn.prototype={
$1(a){return"'"+A.z(a,"'","''")+"'"},
$S:6}
A.rm.prototype={
$1(a){var s=a.a
return s.F(s,this.a.a)},
$S:47}
A.rl.prototype={
$2(a,b){return A.G9(this.a,this.b,a,b)},
$S:213}
A.ri.prototype={
$1(a){return this.a.$2("new",a)},
$S:6}
A.rj.prototype={
$1(a){return this.a.$2("old",a)},
$S:6}
A.rk.prototype={
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
A.hh.prototype={}
A.fz.prototype={}
A.h5.prototype={}
A.fG.prototype={}
A.fi.prototype={}
A.ej.prototype={}
A.fV.prototype={}
A.bi.prototype={}
A.rw.prototype={
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
m=A.bd(k.h(0,"next_retry_at"))
if(m==null)m=0
l=A.bd(k.h(0,"attempt_count"))
if(l==null)l=0
return new A.bi(j,s,r,q,p,o,n,m,l,A.a6(k.h(0,"last_error")))},
$S:217}
A.ux.prototype={
glT(){return this.b},
gi3(){var s=0,r=A.h(t.y),q,p=this
var $async$gi3=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q=p.b.dL()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gi3,r)},
ee(a,b,c){return this.vF(a,b,c)},
vF(a,b,c){var s=0,r=A.h(t.ck),q,p=this,o,n
var $async$ee=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:n=J
s=3
return A.a(p.a.r.cf("lp_file_refs","store = ? AND record_id = ? AND field = ?",[c,b,a]),$async$ee)
case 3:o=n.bM(e,A.Ml(),t.A)
o=A.O(o,o.$ti.i("Z.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ee,r)},
d7(a,b,c,d,e,f,g,h){return this.tF(a,b,c,d,e,f,g,h)},
tF(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.A),q,p=this,o,n,m,l
var $async$d7=A.c(function(i,j){if(i===1)return A.d(j,r)
for(;;)switch(s){case 0:m=p.glT()
l=!a
if(l){s=3
break}else j=l
s=4
break
case 3:s=5
return A.a(m.dL(),$async$d7)
case 5:j=!j
case 4:if(j)throw A.b(A.x("Blob storage is volatile (in-memory fallback): attachment bytes would not survive a restart. Pass allowVolatileBlobs: true to attach anyway."))
s=6
return A.a(m.dj(b,c,d),$async$d7)
case 6:o=j
s=7
return A.a(m.bh(o),$async$d7)
case 7:n=j
if(n==null)n=0
s=8
return A.a(p.a.a2(new A.uy(p,h,g,e,o,n,A.i_(),f),t.A),$async$d7)
case 8:q=j
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$d7,r)},
fk(a,b,c,d,e){return this.vX(a,b,c,d,e)},
vX(a,b,c,d,e){var s=0,r=A.h(t.ku),q,p=this,o,n,m,l,k,j
var $async$fk=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:l=p.glT()
s=3
return A.a(p.ee(a,c,e),$async$fk)
case 3:k=g
j=J.M(k)
if(j.gE(k))throw A.b(A.x("No files found for "+e+"/"+c+"/"+a))
o=d!=null?j.f8(k,new A.uA(d),new A.uB(d)):j.h(k,b)
if(o.r==="remote_only")throw A.b(A.x("File is remote_only; download it before opening."))
j=p.a
n=j.CW.$0()
m=o.e
s=4
return A.a(j.r.aD("UPDATE lp_blobs SET last_access = ? WHERE hash = ?",[n,m]),$async$fk)
case 4:q=l.cI(m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fk,r)},
ft(a,b,c,d,e,f){return this.wt(0,b,c,d,e,f)},
wt(a,b,c,d,e,f){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$ft=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:s=3
return A.a(p.ee(b,d,f),$async$ft)
case 3:n=h
m=J.M(n)
if(m.gE(n)){s=1
break}o=e!=null?m.f8(n,new A.uC(e),new A.uD(e)):m.h(n,c)
s=4
return A.a(p.a.a2(new A.uE(p,o,f,d,b),t.P),$async$ft)
case 4:case 1:return A.e(q,r)}})
return A.f($async$ft,r)},
bf(a,b){return this.nS(a,b)},
nS(a7,a8){var s=0,r=A.h(t.S),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$bf=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:a2={}
a3=n.b
a2.a=0
s=a3!=null?3:4
break
case 3:a6=a2
s=5
return A.a(a3.e3(a8),$async$bf)
case 5:a6.a=0+b0
case 4:e=n.a
m=e.CW.$0()-B.c.N(a7.a,1000)
s=6
return A.a(e.a2(new A.uz(a2,n),t.P),$async$bf)
case 6:s=a3!=null?7:8
break
case 7:p=10
s=13
return A.a(a3.fd(),$async$bf)
case 13:l=b0
s=J.e8(l)?14:15
break
case 14:k=0
j=A.aN(t.N)
d=e.r,c=t.s
case 16:s=18
return A.a(d.wb("lp_blobs",A.k(["hash"],c),250,k,"hash ASC"),$async$bf)
case 18:i=b0
for(b=J.E(i);b.k();){h=b.gn()
a=J.S(h,"hash")
a.toString
J.aL(j,A.D(a))}if(J.ap(i)<250){s=17
break}k+=250
s=16
break
case 17:d=J.E(l),c=t.jQ
case 19:if(!d.k()){s=20
break}g=d.gn()
if(J.BJ(j,g)){s=19
break}p=22
b=new A.u($.C,c)
b.aK(null)
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
case 12:case 8:e=e.r,d=t.s
case 27:s=29
return A.a(e.wd("lp_blobs",A.k(["hash"],d),250,"hash ASC","refcount <= 0 AND last_access <= ?",[m]),$async$bf)
case 29:a1=b0
c=J.M(a1)
if(c.gE(a1)){s=28
break}c=c.gu(a1)
case 30:if(!c.k()){s=31
break}b=c.gn().h(0,"hash")
b.toString
A.D(b)
s=a3!=null?32:33
break
case 32:s=34
return A.a(a3.d9(b),$async$bf)
case 34:case 33:s=35
return A.a(e.Y("lp_blobs","hash = ?",[b]),$async$bf)
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
cC(a){return this.uL(a)},
uL(a){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cC=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.b
g=p.a.r
e=A
s=3
return A.a(g.b0("SELECT SUM(size) as total FROM lp_blobs"),$async$cC)
case 3:f=e.f4(c)
if(f==null)f=0
if(f<=a){q=0
s=1
break}o=t.N,n=t.X,m=0
case 4:if(!(f>a)){s=5
break}s=6
return A.a(g.b0("        SELECT b.hash, b.size FROM lp_blobs b\n        WHERE b.hash NOT IN (\n          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'\n        )\n        ORDER BY b.last_access ASC\n        LIMIT 250\n      "),$async$cC)
case 6:l=c
k=J.M(l)
if(k.gE(l)){s=5
break}k=k.gu(l)
case 7:if(!k.k()){s=8
break}j=k.gn()
if(f<=a){s=8
break}i=j.h(0,"hash")
i.toString
A.D(i)
j=j.h(0,"size")
j.toString
A.ao(j)
s=9
return A.a(h.d9(i),$async$cC)
case 9:s=10
return A.a(g.L("lp_file_refs",A.m(["state","remote_only"],o,n),"hash = ? AND state = ?",[i,"synced"]),$async$cC)
case 10:s=11
return A.a(g.Y("lp_blobs","hash = ?",[i]),$async$cC)
case 11:f-=j;++m
s=7
break
case 8:s=4
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cC,r)}}
A.uy.prototype={
$1(a){return this.nu(a)},
nu(a){var s=0,r=A.h(t.A),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$$1=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:j=a.b
i=p.a.a.CW.$0()
h=t.s
g=p.b
f=p.c
e=p.d
d=p.e
s=3
return A.a(j.ek("lp_file_refs",A.k(["ref_id","store","record_id","field","hash","remote_name","state","next_retry_at","attempt_count","last_error"],h),1,"store = ? AND record_id = ? AND field = ? AND hash = ?",[g,f,e,d]),$async$$1)
case 3:c=a1
b=J.M(c)
if(b.gW(c)){q=A.DJ(b.gG(c))
s=1
break}s=4
return A.a(A.i5(j,d,i,p.f),$async$$1)
case 4:s=5
return A.a(j.ek("lp_outbox",A.k(["op_id","base_updated"],h),1,"store = ? AND record_id = ?",[g,f]),$async$$1)
case 5:o=a1
h=J.M(o)
n=h.gW(o)&&J.S(h.gG(o),"base_updated")==null?A.a6(J.S(h.gG(o),"op_id")):null
h=p.r
b=p.w
m=t.N
l=t.X
s=6
return A.a(j.ca(0,"lp_file_refs",A.m(["ref_id",h,"store",g,"record_id",f,"field",e,"hash",d,"remote_name",b,"state","pending_upload"],m,l),B.R),$async$$1)
case 6:k=A.i_()
s=7
return A.a(j.aC(0,"lp_op_queue",A.m(["op_id",k,"store",g,"record_id",f,"kind","fileUpload","payload_json",B.h.a6(A.m(["ref_id",h,"field",e,"hash",d,"name",b],m,m),null),"state","pending","depends_on_op",n,"created_at",i],m,l)),$async$$1)
case 7:a.a_(new A.a1(g,A.ar([f],m)))
q=new A.bi(h,g,f,e,d,b,"pending_upload",0,0,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:221}
A.uA.prototype={
$1(a){return a.a===this.a},
$S:48}
A.uB.prototype={
$0(){return A.w(A.x("FileRef "+this.a+" not found"))},
$S:32}
A.uC.prototype={
$1(a){return a.a===this.a},
$S:48}
A.uD.prototype={
$0(){return A.w(A.x("FileRef "+this.a+" not found"))},
$S:32}
A.uE.prototype={
$1(a){return this.nw(a)},
nw(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i
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
return A.a(p.aD(u.y,[i]),$async$$1)
case 6:s=7
return A.a(p.L("lp_op_queue",A.m(["state","done"],l,k),"kind = ? AND payload_json LIKE ?",["fileUpload",'%"ref_id":"'+j+'"%']),$async$$1)
case 7:s=3
break
case 4:s=8
return A.a(p.L("lp_file_refs",A.m(["state","pending_remove"],l,k),"ref_id = ?",[j]),$async$$1)
case 8:s=9
return A.a(p.aC(0,"lp_op_queue",A.m(["op_id",A.i_(),"store",q.c,"record_id",q.d,"kind","fileRemove","payload_json",B.h.a6(A.m(["ref_id",j,"field",q.e,"remote_name",n.f,"hash",i],l,t.x),null),"state","pending","created_at",o],l,k)),$async$$1)
case 9:case 3:a.a_(new A.a1(q.c,A.ar([q.d],l)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uz.prototype={
$1(a){return this.nv(a)},
nv(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=a.b
p=q.b.a.dy,p=new A.bC(p,p.r,p.e,A.n(p).i("bC<1>")),o=t.N,n=t.X,m=q.a
case 2:if(!p.k()){s=3
break}l=p.d
h=J
s=4
return A.a(i.ah('SELECT f.ref_id, f.hash FROM lp_file_refs f WHERE f.store = ? AND NOT EXISTS (SELECT 1 FROM "'+A.z(l,'"','""')+'" r WHERE r.id = f.record_id)',[l]),$async$$1)
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
return A.a(i.Y("lp_file_refs","ref_id = ?",[j]),$async$$1)
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
A.pF.prototype={}
A.fc.prototype={
l(a){return"BlobMissingError: "+this.a},
$iG:1}
A.kY.prototype={
l(a){return"BlobStorageException("+this.b+"): "+A.r(this.a)},
$iG:1}
A.nb.prototype={}
A.Br.prototype={
$1(a){return B.b.C(this.a,a)},
$S:73}
A.iu.prototype={}
A.rx.prototype={
br(){var s=0,r=A.h(t.k4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$br=A.c(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b2=n.d
if(b2==null){q=B.c5
s=1
break}m=0
l=0
k=0
j=!1
a2=n.a
a3=a2.cy
a3===$&&A.y()
b5=J
s=3
return A.a(a3.f1(25),$async$br)
case 3:a4=b5.E(b7),a5=n.c,a6=a5.ay
case 4:if(!a4.k()){s=5
break}i=a4.gn()
p=7
s=i.e===B.b7?10:12
break
case 10:s=13
return A.a(n.cr(i,b2),$async$br)
case 13:h=b7
s=h?14:15
break
case 14:s=16
return A.a(a3.mT(i.b),$async$br)
case 16:++m
case 15:s=11
break
case 12:s=i.e===B.b8?17:18
break
case 17:s=19
return A.a(n.eL(i),$async$br)
case 19:g=b7
s=g?20:21
break
case 20:s=22
return A.a(a3.mT(i.b),$async$br)
case 22:++k
case 21:case 18:case 11:p=2
s=9
break
case 7:p=6
b3=o.pop()
f=A.F(b3)
j=!0
e=i.w+1
d=a5.mx(e)
a8=i.b
a9=J.a0(f)
b0=a6.$0()
s=23
return A.a(a3.vQ(a8,a9,e,b0+B.c.N(d.a,1000)),$async$br)
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
if(b1==null)A.w(A.x('No store "'+a5+'" registered in this LocalPocket.'))
s=b1.a.f?26:27
break
case 26:b5=J
s=28
return A.a(a2.cf("lp_file_refs","store = ? AND state = 'remote_only'",[c]),$async$br)
case 28:a5=b5.E(b7)
case 29:if(!a5.k()){s=30
break}b=a5.gn()
p=32
a6=J.S(b,"ref_id")
a6.toString
a=A.D(a6)
a6=J.S(b,"record_id")
a6.toString
a0=A.D(a6)
a1=A.a6(J.S(b,"remote_name"))
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
case 25:q=new A.iu(j)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$br,r)},
cr(a,b){return this.r2(a,b)},
r2(a3,a4){var s=0,r=A.h(t.y),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$cr=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a={}
a0=t.G.a(B.h.av(a3.f,null))
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
case 3:if(!a6)throw A.b(A.x("Blob for hash "+l+" not found in store"))
s=4
return A.a(a4.bh(l),$async$cr)
case 4:j=a6
if(j==null)throw A.b(A.x("Blob size for hash "+l+" is unavailable"))
m=null
p=6
i=n.b.y
i===$&&A.y()
s=9
return A.a(i.bU(a3.d),$async$cr)
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
return A.a(n.b.wQ(a3.d,A.m([k,new A.h8(k,j,new A.rz(a4,l))],t.N,t.h3)),$async$cr)
case 13:l=a6.e
a.a=l.length!==0?B.b.ga1(l):k
case 11:s=14
return A.a(n.a.a2(new A.rA(a,a1,a3),t.P),$async$cr)
case 14:q=!0
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cr,r)},
eL(a){return this.r1(a)},
r1(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l
var $async$eL=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=t.G.a(B.h.av(a.f,null))
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
return A.a(p.b.wO(a.d,A.k([o],t.s)),$async$eL)
case 5:case 4:s=6
return A.a(p.a.a2(new A.ry(l,n,a),t.P),$async$eL)
case 6:q=!0
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$eL,r)},
da(a,b,c,d){return this.uC(a,b,c,d)},
uC(a,b,c,d){var s=0,r=A.h(t.N),q,p=this,o,n,m,l,k
var $async$da=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:m=p.d
l=p.b.y
l===$&&A.y()
k=m
s=4
return A.a(l.hN(c,a,null),$async$da)
case 4:s=3
return A.a(k.ii(f),$async$da)
case 3:o=f
s=5
return A.a(m.bh(o),$async$da)
case 5:n=f
if(n==null)n=0
s=6
return A.a(p.a.a2(new A.rB(o,n,p.c.ay.$0(),c,b,d,a),t.P),$async$da)
case 6:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$da,r)},
dh(a,b,c,d){return this.vU(a,b,c,d)},
vU(a,b,c,d){var s=0,r=A.h(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$dh=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:s=2
return A.a(a.cf("lp_file_refs","store = ? AND record_id = ?",[d,b]),$async$dh)
case 2:k=f
j=A.ut(c,A.a_(c).c)
i=J.aA(k)
h=t.v
g=A.d2(new A.bF(i.cd(k,new A.rC(),t.x),h),h.i("o.E"))
h=c.length,q=t.N,p=t.X,o=0
case 3:if(!(o<c.length)){s=5
break}n=c[o]
s=!g.F(0,n)?6:7
break
case 6:s=8
return A.a(a.ca(0,"lp_file_refs",A.m(["ref_id",A.i_(),"store",d,"record_id",b,"field","imgs","hash","unknown_"+n,"remote_name",n,"state","remote_only"],q,p),B.c3),$async$dh)
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
A.D(q)
if(q==="pending_remove"||q==="pending_upload"){s=9
break}q=h.h(0,"ref_id")
q.toString
s=11
return A.a(a.Y("lp_file_refs","ref_id = ?",[q]),$async$dh)
case 11:l=A.a6(h.h(0,"hash"))
s=l!=null&&l.length!==0&&!B.a.S(l,"unknown_")?12:13
break
case 12:s=14
return A.a(a.aD(u.y,[l]),$async$dh)
case 14:case 13:s=9
break
case 10:return A.e(null,r)}})
return A.f($async$dh,r)}}
A.rz.prototype={
$0(){return this.a.cI(this.b)},
$S:74}
A.rA.prototype={
$1(a){return this.nm(a)},
nm(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=t.N
s=2
return A.a(a.b.L("lp_file_refs",A.m(["state","synced","remote_name",q.a.a],o,t.X),"ref_id = ?",[q.b]),$async$$1)
case 2:p=q.c
a.a_(new A.a1(p.c,A.ar([p.d],o)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ry.prototype={
$1(a){return this.nl(a)},
nl(a){var s=0,r=A.h(t.P),q=this,p,o
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
s=2
return A.a(o.Y("lp_file_refs","ref_id = ?",[q.a]),$async$$1)
case 2:s=3
return A.a(o.aD(u.y,[q.b]),$async$$1)
case 3:p=q.c
a.a_(new A.a1(p.c,A.ar([p.d],t.N)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rB.prototype={
$1(a){return this.nn(a)},
nn(a){var s=0,r=A.h(t.P),q=this,p,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a.b
n=q.a
s=2
return A.a(A.i5(o,n,q.c,q.b),$async$$1)
case 2:p=t.N
s=3
return A.a(o.L("lp_file_refs",A.m(["hash",n,"state","synced","remote_name",q.d],p,t.X),"ref_id = ?",[q.e]),$async$$1)
case 3:a.a_(new A.a1(q.f,A.ar([q.r],p)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.rC.prototype={
$1(a){return A.a6(a.h(0,"remote_name"))},
$S:75}
A.Bx.prototype={
$1(a){if(typeof a!="string")return a
return this.a.ei(a)},
$S:34}
A.eX.prototype={$iG:1}
A.zE.prototype={
c5(){var s=0,r=A.h(t.N),q,p=this,o
var $async$c5=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
q=o==null?"":o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$c5,r)}}
A.oS.prototype={}
A.hG.prototype={}
A.tv.prototype={
ov(a){var s=this,r=s.a.a.a$.b
r=new A.b0(r,A.n(r).i("b0<1>")).aS(new A.tR(s))
s.c!==$&&A.cg()
s.c=r},
v6(a){var s,r,q=this
A:{if(a instanceof A.mu){s=q.h8(a.a,a.b)
break A}if(a instanceof A.l0){s=A.b8(q.fS(),t.V)
break A}if(a instanceof A.lR){s=A.b8(new A.lS(!0,q.a.c.a),t.V)
break A}if(a instanceof A.l3){s=q.q().X(new A.tS(),t.V)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lP){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.tT(s,q),new A.tU())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.mS){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.u4(s,q),new A.uf())
break A}if(a instanceof A.mk){s=q.qs(a.a,a.b,a.c)
break A}if(a instanceof A.mK){s=q.qN(a.a,a.b,a.c)
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lf){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.ug(s,q),A.FZ())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.le){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.uh(s,q),A.FZ())
break A}s={}
s.a=s.b=s.c=s.d=null
if(a instanceof A.lr){s.d=a.a
s.c=a.b
s.b=a.c
r=a.d
s.a=r
s=q.bw(r,new A.ui(s,q),A.M6())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.lU){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.uj(s,q),A.M8())
break A}s={}
s.a=s.b=s.c=s.d=s.e=null
if(a instanceof A.kG){s.e=a.a
s.d=a.b
s.c=a.c
s.b=a.d
r=a.e
s.a=r
s=q.bw(r,new A.uk(s,q),A.M5())
break A}s={}
s.a=s.b=s.c=null
if(a instanceof A.ly){s.c=a.a
s.b=a.b
r=a.c
s.a=r
s=q.bw(r,new A.ul(s,q),A.M7())
break A}if(a instanceof A.mY){s=q.rF(a.a,a.b,a.c)
break A}if(a instanceof A.nw){s=q.oQ(a.a,a.b)
break A}if(a instanceof A.nx){s=q.eU(a.a,!0)
break A}if(a instanceof A.nz){s=q.eU(a.a,!1)
break A}if(a instanceof A.nB){s=q.hg(a.a,a.b)
break A}if(a instanceof A.nA){s=q.hf(a.a,a.b)
break A}if(a instanceof A.ny){s=q.hd(a.a,a.b)
break A}if(a instanceof A.nQ){s=q.hp(a.a,a.b)
break A}if(a instanceof A.nR){s=q.td(a.a,a.b)
break A}if(a instanceof A.nP){s=q.jA(a.a)
break A}if(a instanceof A.kI){s=q.a.a.e1(a.a).X(new A.tV(),t.V)
break A}if(a instanceof A.nO){s=q.a.a.fD().X(new A.tW(),t.V)
break A}if(a instanceof A.nM){s=q.a.a.it().X(new A.tX(),t.V)
break A}if(a instanceof A.mG){s=q.a.a.fn().X(new A.tY(),t.V)
break A}if(a instanceof A.l6){s=q.a.a.e5(a.a,A.dv(0,a.b,0)).X(new A.tZ(),t.V)
break A}if(a instanceof A.mT){s=q.a.a.dn(A.dv(0,a.a,0)).X(new A.u_(),t.V)
break A}if(a instanceof A.lb){s=q.a.a.db
s===$&&A.y()
s=s.fe(a.a).X(new A.u0(q),t.V)
break A}if(a instanceof A.la){s=q.a.a.db
s===$&&A.y()
s=s.du(a.a,a.b).X(new A.u1(q),t.V)
break A}if(a instanceof A.mQ){s=q.a.a.db
s===$&&A.y()
s=s.en(a.b,a.c,a.a).X(new A.u2(),t.V)
break A}if(a instanceof A.kD){s=q.a.a.db
s===$&&A.y()
s=s.eW(a.a,a.b).X(new A.u3(),t.V)
break A}if(a instanceof A.kE){s=q.a.a.db
s===$&&A.y()
s=s.e_(a.a,a.b).X(new A.u5(),t.V)
break A}if(a instanceof A.ld){s=q.te(a.a)
break A}if(a instanceof A.lC){s=q.j0(a.a,a.b,a.c,a.d,a.e,a.f,a.r)
break A}if(a instanceof A.lD){s=q.j1(a.a,a.b)
break A}if(a instanceof A.lF){s=q.h0(a.a)
break A}if(a instanceof A.lB){s=q.j_(a.a)
break A}if(a instanceof A.lO){s=q.a.a.dx
s===$&&A.y()
s=s.ee(a.c,a.b,a.a).X(new A.u6(q),t.V)
break A}if(a instanceof A.lI){s=q.h1(a.a,a.b,a.c,a.d,a.e)
break A}if(a instanceof A.lE){s=q.j2(a.a,a.b)
break A}if(a instanceof A.lM){s=q.a.a.dx
s===$&&A.y()
s=s.ft(0,a.c,a.d,a.b,a.e,a.a).X(new A.u7(),t.V)
break A}if(a instanceof A.lG){s=q.a.a.dx
s===$&&A.y()
s=s.bf(A.dv(0,a.a,0),A.dv(0,a.b,0)).X(new A.u8(),t.V)
break A}if(a instanceof A.lv){s=q.a.a.dx
s===$&&A.y()
s=s.cC(a.a).X(new A.u9(),t.V)
break A}if(a instanceof A.n9){s=q.a.a.dx
s===$&&A.y()
s=s.gi3().X(new A.ua(),t.V)
break A}if(a instanceof A.nl){s=q.dY(a.a,a.b,a.c)
break A}if(a instanceof A.nr){s=q.cz().X(new A.ub(),t.V)
break A}if(a instanceof A.ng){s=q.hk()
break A}if(a instanceof A.nh){s=q.dX(new A.uc(q))
break A}if(a instanceof A.nj){s=q.dX(new A.ud(q))
break A}if(a instanceof A.ns){s=q.hl(a.a)
break A}s={}
s.a=null
if(a instanceof A.nk){s.a=a.a
s=q.dX(new A.ue(s,q))
break A}if(a instanceof A.np){s=q.Q
s=A.b8(new A.nq(s==null?B.dx:A.Em(s)),t.V)
break A}throw A.b(A.fU(u.P))}return s},
h8(a,b){return this.qL(a,b)},
qL(a1,a2){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$h8=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:o=a1.length,n=p.a.a,m=n.dy,l=t.X,k=0
case 3:if(!(k<a1.length)){s=5
break}j=A.pX(a1[k],l)
i=j.a
s=!m.J(i)?6:8
break
case 6:s=9
return A.a(n.aP(j),$async$h8)
case 9:s=7
break
case 8:h=m.h(0,i)
if(h==null)A.w(A.x('No store "'+i+'" registered in this LocalPocket.'))
g=h.c
f=A.Cj(j)
e=new A.a2("")
A.ch(e,g.p())
d=e.a
d=B.e.v(d.charCodeAt(0)==0?d:d)
c=new A.c2()
b=A.cX(c)
b.t(0,d)
b.q()
b=A.as(c.a.a)
e=new A.a2("")
A.ch(e,f.p())
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
A.ch(e,h.c.p())
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
case 5:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h8,r)},
fS(){var s=0,r=A.h(t.jA),q,p=this,o,n,m,l,k
var $async$fS=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=p.a
l=m.c
k=J.bZ(B.b.gG(m.b.o0("PRAGMA journal_mode")).gaX())
m=m.a.dx
m===$&&A.y()
s=3
return A.a(m.gi3(),$async$fS)
case 3:o=b
m=l.e===B.aA
n=m?"opfs":"file"
q=new A.ie(l.a,l.b,l.c,l.d,m,n,o,J.a0(k).toLowerCase())
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fS,r)},
dE(a,b){var s,r,q,p=this.a.a,o=p.aw(a)
if(b!=null){s=this.d3(b)
r=A.DS(s.e)
q=r==null?null:r.e
if(q==null)q=s.r
if(q==null)A.w(A.x('Transaction session "'+b+'" has no executor.'))
return new A.fg(p,o,q.b,this.d3(b).r)}return new A.fg(p,o,null,null)},
p8(a){return this.dE(a,null)},
qs(a,b,c){return this.bw(c,new A.tD(this,a,c,b),new A.tE())},
b9(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.dE(a,c),e=t.fC,d=new A.mI(f.a,f.b.a,f.c,A.k([],e),A.k([],e),A.k([],t.k),A.k([],t.fi),g,!1,g,!1,!1,g,!1,!1)
for(f=b.a,e=f.length,s=0;s<f.length;f.length===e||(0,A.q)(f),++s)d=this.oM(d,f[s])
for(f=b.b,e=f.length,r=t.N,q=t.X,p=t.d,s=0;s<f.length;f.length===e||(0,A.q)(f),++s){o=f[s]
n=A.k([],p)
for(m=B.b.gu(o);m.k();){l=m.gn()
if(l.b===B.bc)n.push(A.m([l.a,l.c],r,q))}d=d.w2(n)}k=b.c
if(k!=null){f=A.Bq(k)
d.jB(f)
A.CM(f)
j=A.AD(f,!0)
i=d.fU()
i.d.push(new A.b_(j.a,j.b))
i.f.push(f)
d=i}for(f=b.d,e=f.length,s=0;s<f.length;f.length===e||(0,A.q)(f),++s,d=i){h=f[s]
q=h.a
d.cS(q)
i=d.fU()
i.r.push(new A.cm(q,h.b))}f=b.r
if(f!=null)d=d.lc(A.bD(f,!0,r))
if(b.w)d=d.pp(!0)
if(b.x)d=d.pq(!0)
if(b.f)d=d.pn(!0)
else{f=b.e
if(f!=null){if(f<0)A.w(A.ay("Limit must be non-negative, got "+A.r(f)+".",g))
d=d.pr(f)}}return d},
oM(a,b){var s
switch(b.b.a){case 0:return a.wW(0,b.a,b.c)
case 1:return a.x5(0,b.a,b.c)
case 2:return a.wX(0,b.a,b.c)
case 3:return a.wY(0,b.a,b.c)
case 4:return a.x3(0,b.a,b.c)
case 5:return a.x4(0,b.a,b.c)
case 6:return a.wZ(0,b.a,b.d)
case 7:s=b.d
if(s==null)s=B.m
if(s.length!==2)throw A.b(A.Q("between requires exactly two values.",null))
return a.wT(0,b.a,new A.a4(s[0],s[1]))
case 8:return a.x6(0,b.a,A.a6(b.c))
case 9:return a.wV(0,b.a,A.a6(b.c))
case 10:return a.wU(0,b.a,A.a6(b.c))
case 11:return a.x0(0,b.a,!0)
case 12:return a.x_(0,b.a,!0)}},
qN(a,b,c){return this.bw(c,new A.tF(this,b,a,c),new A.tG())},
rF(a,b,c){return this.bw(c,new A.tJ(this,a,c,b),new A.tK())},
oQ(a,b){var s,r,q,p,o,n,m,l=this.d
if(l.a!==0)throw A.b(A.x("A transaction session is already active on this database."))
s="tx"+ ++this.as
r=$.C
q=t.D
p=t.h
o=new A.u(r,q)
n=new A.oS(new A.aI(new A.u(r,q),p),new A.aI(o,p),A.k([],t.mc))
l.j(0,s,n)
m=this.a.a
l=new A.tx(n)
if(a){if(A.nC(m)!=null)A.w(A.x(u.L))
r=m.b
r===$&&A.y()
l=r.wi(l,t.H)}else{r=b===B.bm?B.aW:B.p
r=m.aW(l,r,t.H)
l=r}n.w!==$&&A.cg()
n.w=l
return o.X(new A.tw(s),t.V)},
eU(a,b){return this.rO(a,b)},
rO(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g
var $async$eU=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:h=m.d3(a)
for(l=h.e,k=A.a_(l).i("bT<1>"),l=new A.bT(l,k),l=new A.at(l,l.gm(0),k.i("at<Z.E>")),k=k.i("Z.E");l.k();){j=l.d
j=(j==null?k.a(j):j).b.a
if((j.a&30)!==0)A.w(A.x("Future already completed"))
j.aK(null)}h.f=!b
h.c.an()
p=4
l=h.w
l===$&&A.y()
s=7
return A.a(l,$async$eU)
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
return A.f($async$eU,r)},
hg(a,b){return this.rC(a,b)},
rC(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$hg=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.d3(a)
n=$.C
m=t.D
l=t.h
k=new A.u(n,m)
j=new A.hG(b,new A.aI(new A.u(n,m),l),new A.aI(k,l))
l=o.r.a2(new A.tI(j),t.H)
j.f!==$&&A.cg()
j.f=l
o.e.push(j)
s=3
return A.a(k,$async$hg)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hg,r)},
hf(a,b){return this.rA(a,b)},
rA(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hf=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:g=n.d3(a).e
f=B.b.mK(g,new A.tH(b))
if(f<0)throw A.b(A.x('No open savepoint "'+b+'" in session "'+a+'".'))
l=A.a_(g).i("bT<1>")
l=A.O(new A.bT(g,l),l.i("Z.E"))
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
return A.a(i,$async$hf)
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
case 5:B.b.km(g,f,g.length)
q=B.k
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hf,r)},
hd(a,b){return this.rq(a,b)},
rq(a,b){var s=0,r=A.h(t.V),q,p=2,o=[],n=this,m,l,k,j,i
var $async$hd=A.c(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:k=n.d3(a).e
j=A.DS(k)
if(j==null||j.a!==b)throw A.b(A.x('Savepoint "'+b+'" is not the innermost open savepoint of session "'+a+'".'))
j.b.an()
p=4
m=j.f
m===$&&A.y()
s=7
return A.a(m,$async$hd)
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
return A.f($async$hd,r)},
hp(a,b){return this.tf(a,b)},
tf(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l
var $async$hp=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.a.a
l=m.aw(a)
s=3
return A.a(p.p8(a).bT(b),$async$hp)
case 3:o="w"+ ++p.as
n=A.CB()
n.sjU(new A.mt(l,b,m,B.aX).iG().vI(new A.tO(p,o),new A.tP(p,n,o)))
p.e.j(0,o,n.bu())
q=A.b8(new A.hl(o),t.V)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hp,r)},
td(a,b){var s=this,r="w"+ ++s.as,q=s.b9(a,b,null)
s.e.j(0,r,new A.mL(q,q.gdV(),B.aX).iG().aS(new A.tQ(s,r)))
return A.b8(new A.hl(r),t.V)},
jA(a){return this.t5(a)},
t5(a){var s=0,r=A.h(t.V),q,p=this,o
var $async$jA=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.e.H(0,a)
if(o!=null)o.D()
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jA,r)},
pI(){if(this.r!=null)return
this.r=A.Eo(A.dv(9e8,0,0),new A.ty(this))},
j0(a,b,c,d,e,f,g){return this.pR(a,b,c,d,e,f,g)},
pR(a,b,c,d,e,f,g){var s=0,r=A.h(t.V),q,p=this,o,n,m
var $async$j0=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:p.pI()
o=p.f
n="u"+ ++p.as
o.mF()
m=o.r
if(m.a>=16)A.w(A.ay("Maximum concurrent uploads exceeded (16).",null))
if(c<0||c>268435456)A.w(A.ay("Invalid file size: "+c,null))
if(o.gn9()+c>536870912)A.w(A.ay("Aggregate upload quota exceeded: "+o.gn9()+" + "+c+" > 536870912",null))
o=o.f.$0().iO(18e8)
m.j(0,n,new A.cF(n,a,b,d,e,c,f,g,A.k([],t.bs),o))
q=new A.lN("u"+p.as,262144)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j0,r)},
j1(a,b){return this.pS(a,b)},
pS(a,b){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j
var $async$j1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
k=l.r
j=k.h(0,a)
if(j==null)A.w(A.ay("Unknown upload session: "+a,null))
l=l.f
if(!j.z.k7(l.$0())){k.H(0,a)
A.w(A.ay("Upload session expired: "+a,null))}o=b.length
if(o>262144){k.H(0,a)
A.w(A.ay("Chunk too large: "+o+" > 262144",null))}n=j.x
m=j.f
if(n+o>m){k.H(0,a)
A.w(A.ay("Upload exceeds declared size "+m,null))}j.y.push(b)
j.x+=o
j.z=l.$0().iO(18e8)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j1,r)},
h0(a){return this.pU(a)},
pU(a){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$h0=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:h=p.f
g=h.r.H(0,a)
if(g==null)A.w(A.ay("Unknown upload session: "+a,null))
if(!g.z.k7(h.f.$0()))A.w(A.ay("Upload session expired: "+a,null))
h=g.x
o=g.f
if(h!==o)A.w(A.ay("Upload size mismatch: expected "+o+" but got "+h,null))
h=p.a.a.dx
h===$&&A.y()
n=g.b
m=g.c
l=new A.tz(g).$0()
k=g.d
j=g.e
i=g.r
f=A
s=3
return A.a(h.d7(g.w,l,i,o,k,j,m,n),$async$h0)
case 3:q=new f.lL(p.lo(c))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h0,r)},
j_(a){return this.pQ(a)},
pQ(a){var s=0,r=A.h(t.V),q,p=this
var $async$j_=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.f.r.H(0,a)
q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j_,r)},
h1(a,b,c,d,e){return this.pW(a,b,c,d,e)},
pW(a,b,c,d,e){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k
var $async$h1=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:k=p.a.a.dx
k===$&&A.y()
s=3
return A.a(k.fk(c,d,b,e,a),$async$h1)
case 3:o=g
n="f"+ ++p.as
m=new A.oj()
l=A.CB()
l.sjU(o.by(new A.tA(p,m,n,l),new A.tB(p,n),new A.tC(p,n)))
k=l.bu()
m.c!==$&&A.cg()
m.c=k
p.w.j(0,n,m)
q=new A.lJ(n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h1,r)},
j2(a,b){return this.pT(a,b)},
pT(a,b){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$j2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.h(0,a)
if(n==null)throw A.b(A.x('Unknown file stream "'+a+'".'))
o=n.b-=b
if((o<0?n.b=0:o)<1048576){o=n.c
o===$&&A.y()
o.b1()}q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$j2,r)},
lo(a){return new A.lK(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y)},
dY(a,b,c){return this.rY(a,b,c)},
rY(a,a0,a1){var s=0,r=A.h(t.V),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$dY=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:if(a.length===0)throw A.b(A.ay("syncStart requires baseUrl.",null))
o=p.a.a
s=3
return A.a(p.cz(),$async$dY)
case 3:n=a0==null?"web-sync":a0
m=new A.zE(a1)
l=A.nJ(a)
k=o.dy
j=A.n(k).i("T<1>")
k=A.O(new A.T(k,j),j.i("o.E"))
s=4
return A.a(o.as.hF(l,n,k,m),$async$dY)
case 4:i=a3
l=A.dO(null,null,t.n6)
k=A.dO(null,null,t.em)
j=t.H
h=A.b8(null,j)
g=new A.pr(A.b8(null,j))
f=A.b8(B.O,t.mv)
e=A.k([],t.s)
j=A.b8(null,j)
d=new A.x1(A.MZ(),o.CW)
c=new A.nf(o,i,d,new A.tL(p),B.N,l,k,h,g,A.aN(t.N),f,e,j)
b=i.f
l=c.e=new A.xd(o,B.a.A(A.as(B.o.v(B.e.v(i.a.l(0)+"|"+b)).a),0,12))
j=new A.rx(o,i,d,o.ax)
c.x=j
j=new A.vV(o,i,d,l,j,g)
c.f=j
c.r=new A.x_(o,i,d,l,j)
c.w=new A.w3(o,i,d,c.gqx(),i.Q)
p.y=m
p.x=c
p.z=new A.b0(k,A.n(k).i("b0<1>")).aS(new A.tM(p))
s=5
return A.a(c.az(),$async$dY)
case 5:q=new A.nm(c.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dY,r)},
eR(){var s=this.x
return s==null?A.w(A.x("Sync is not started.")):s},
hk(){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hk=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.eR()
n.p1.push("cycle")
s=3
return A.a(n.d4(),$async$hk)
case 3:o=b
q=new A.ni(new A.xb(o.a,o.b,o.c,o.d,o.e,o.f,o.r))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hk,r)},
dX(a){var s=0,r=A.h(t.V),q
var $async$dX=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(a.$0(),$async$dX)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dX,r)},
hl(a){return this.rZ(a)},
rZ(a){var s=0,r=A.h(t.V),q,p=this,o,n
var $async$hl=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.y
n=p.eR()
if(o==null)throw A.b(A.x("Sync is not started."))
o.a=a
s=3
return A.a(n.ef(),$async$hl)
case 3:q=B.k
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hl,r)},
cz(){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cz=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=q.x
q.x=null
p=q.z
p=p==null?null:p.D()
o=t.H
s=2
return A.a(p instanceof A.u?p:A.bv(p,o),$async$cz)
case 2:q.z=null
s=m!=null?3:4
break
case 3:n=m.b
s=5
return A.a(m.aF(),$async$cz)
case 5:p=q.a.a.as.hL(n)
s=6
return A.a(p,$async$cz)
case 6:case 4:q.Q=q.y=null
return A.e(null,r)}})
return A.f($async$cz,r)},
iU(a){return new A.l9(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x)},
te(a){var s=this,r="w"+ ++s.as,q=s.a.a.db
q===$&&A.y()
s.e.j(0,r,q.wS(a).aS(new A.tN(s,r)))
return A.b8(new A.hl(r),t.V)},
d3(a){var s=this.d.h(0,a)
if(s==null)throw A.b(A.x('Unknown transaction session "'+a+'".'))
if((s.d.a.a&30)===0)throw A.b(A.x('Transaction session "'+a+'" is not ready yet.'))
return s},
hq(a,b,c){return this.ti(a,b,c)},
bw(a,b,c){return this.hq(a,b,c,t.z)},
ti(a,b,c){var s=0,r=A.h(t.V),q,p=this,o
var $async$hq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if(a!=null)p.d3(a)
o=c
s=3
return A.a(b.$0(),$async$hq)
case 3:q=o.$1(e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hq,r)},
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
case 4:p.aj(0)
p=q.r
if(p!=null)p.D()
q.r=null
q.f.r.aj(0)
for(p=q.w,o=new A.aR(p,p.r,p.e,A.n(p).i("aR<2>"));o.k();){n=o.d.c
n===$&&A.y()
n.D()}p.aj(0)
p=q.c
p===$&&A.y()
p.D()
s=6
return A.a(q.a.a.q(),$async$q)
case 6:s=7
return A.a(q.b.q(),$async$q)
case 7:return A.e(null,r)}})
return A.f($async$q,r)}}
A.tR.prototype={
$1(a){var s,r=a.e
r=r==null?null:A.cJ(r,t.N,t.X)
s=a.f
s=s==null?null:A.cJ(s,t.N,t.X)
this.a.b.t(0,new A.l5(a.a,a.b,a.c,a.d,r,s,A.d2(a.r,t.N)))},
$S:76}
A.tS.prototype={
$1(a){return B.k},
$S:7}
A.tT.prototype={
$0(){var s=this.a
return this.b.dE(s.c,s.a).bT(s.b)},
$S:78}
A.tU.prototype={
$1(a){return new A.fY(a)},
$S:79}
A.u4.prototype={
$0(){var s=0,r=A.h(t.oz),q,p=this,o,n,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:i=A.k([],t.eU)
o=p.a,n=o.b,m=n.length,l=p.b,k=0
case 3:if(!(k<n.length)){s=5
break}j=n[k]
h=i
s=6
return A.a(l.dE(o.c,o.a).bT(j),$async$$0)
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
A.uf.prototype={
$1(a){return new A.fZ(a)},
$S:81}
A.ug.prototype={
$0(){var s=this.a
return this.b.b9(s.c,s.b,s.a).hC()},
$S:41}
A.uh.prototype={
$0(){var s=this.a
return this.b.b9(s.d,s.b,s.a).hE(s.c)},
$S:41}
A.ui.prototype={
$0(){var s=this.a
return this.b.b9(s.d,s.b,s.a).hM(s.c)},
$S:83}
A.uj.prototype={
$0(){var s=this.a
return this.b.b9(s.c,s.b,s.a).i2()},
$S:50}
A.uk.prototype={
$0(){var s=this,r=s.a
switch(r.d.a){case 0:r=s.b.b9(r.e,r.b,r.a).cR("SUM",r.c)
break
case 1:r=s.b.b9(r.e,r.b,r.a).cR("AVG",r.c)
break
case 2:r=s.b.b9(r.e,r.b,r.a).cR("MIN",r.c)
break
case 3:r=s.b.b9(r.e,r.b,r.a).cR("MAX",r.c)
break
default:r=null}return r},
$S:85}
A.ul.prototype={
$0(){var s=this.a
return this.b.b9(s.c,s.b,s.a).hO()},
$S:86}
A.tV.prototype={
$1(a){return B.k},
$S:7}
A.tW.prototype={
$1(a){return B.k},
$S:7}
A.tX.prototype={
$1(a){return B.k},
$S:7}
A.tY.prototype={
$1(a){return new A.fQ(a)},
$S:87}
A.tZ.prototype={
$1(a){return new A.fh(a)},
$S:88}
A.u_.prototype={
$1(a){return B.k},
$S:7}
A.u0.prototype={
$1(a){var s,r,q=A.k([],t.oS)
for(s=J.E(a),r=this.a;s.k();)q.push(r.iU(s.gn()))
return new A.fk(q)},
$S:89}
A.u1.prototype={
$1(a){return new A.fj(a==null?null:this.a.iU(a))},
$S:90}
A.u2.prototype={
$1(a){return B.k},
$S:7}
A.u3.prototype={
$1(a){return B.k},
$S:7}
A.u5.prototype={
$1(a){return B.k},
$S:7}
A.u6.prototype={
$1(a){var s,r,q=A.k([],t.kB)
for(s=J.E(a),r=this.a;s.k();)q.push(r.lo(s.gn()))
return new A.fv(q)},
$S:91}
A.u7.prototype={
$1(a){return B.k},
$S:7}
A.u8.prototype={
$1(a){return new A.fu(a)},
$S:92}
A.u9.prototype={
$1(a){return new A.fs(a)},
$S:93}
A.ua.prototype={
$1(a){return new A.h7(a)},
$S:94}
A.ub.prototype={
$1(a){return B.k},
$S:7}
A.uc.prototype={
$0(){return this.a.eR().bd()},
$S:3}
A.ud.prototype={
$0(){return this.a.eR().b1()},
$S:3}
A.ue.prototype={
$0(){return this.b.eR().fM(this.a.a)},
$S:3}
A.tD.prototype={
$0(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$0=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=p.a
a1=p.c
a2=a0.dE(p.b,a1)
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
return A.a(a2.ii(l),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(a2.hj(B.a_,l),$async$$0)
case 9:case 6:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.k([A.D(a0)],t.s)}else a0=B.q
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
return A.a(a2.nc(l),$async$$0)
case 15:s=13
break
case 14:s=16
return A.a(a2.hj(B.a0,l),$async$$0)
case 16:case 13:if(typeof l.h(0,"id")=="string"){a0=l.h(0,"id")
a0.toString
a0=A.k([A.D(a0)],t.s)}else a0=B.q
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
return A.a(a2.mZ(i),$async$$0)
case 22:s=20
break
case 21:s=23
return A.a(a2.lL(i),$async$$0)
case 23:case 20:a0=A.k([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.D(f))}}q=a0
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
return A.a(a2.nd(i),$async$$0)
case 29:s=27
break
case 28:s=30
return A.a(a2.bs(i,B.a0),$async$$0)
case 30:case 27:a0=A.k([],t.s)
for(a1=i.length,h=0;h<i.length;i.length===a1||(0,A.q)(i),++h){g=i[h]
if(typeof g.h(0,"id")=="string"){f=g.h(0,"id")
f.toString
a0.push(A.D(f))}}q=a0
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
return A.a(a2.mW(b,c),$async$$0)
case 36:s=34
break
case 35:s=37
return A.a(a2.cq(b,c,!1),$async$$0)
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
return A.a(a2.mX(a),$async$$0)
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
return A.a(a2.mi(b),$async$$0)
case 50:s=48
break
case 49:s=51
return A.a(a2.hi(B.C,b),$async$$0)
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
return A.a(a2.n6(b),$async$$0)
case 57:s=55
break
case 56:s=58
return A.a(a2.hi(B.E,b),$async$$0)
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
return A.a(a2.ki(b),$async$$0)
case 64:s=62
break
case 63:s=65
return A.a(a2.d1(b),$async$$0)
case 65:case 62:q=A.k([b],t.s)
s=1
break
case 60:throw A.b(A.fU(u.M))
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:50}
A.tE.prototype={
$1(a){return new A.fH(a)},
$S:95}
A.tF.prototype={
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
return A.a(o.b9(n,l,m).ps(!0,k).c8(),$async$$0)
case 8:s=6
break
case 7:s=9
return A.a(o.b9(n,l,m).po(k).c8(),$async$$0)
case 9:case 6:q=b
s=1
break
case 4:q=p.a.b9(p.c,l,p.d).c8()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:96}
A.tG.prototype={
$1(a){return new A.fT(a.a,a.d,a.e,a.b,a.c)},
$S:97}
A.tJ.prototype={
$0(){var s=0,r=A.h(t.fE),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a.dE(p.b,p.c)
n=p.d
m=o.a
l=o.b.a
k=new A.wz(m,l,o.c,n.a)
if(l.w==null)A.w(A.rM('Store "'+l.a+'" does not have FTS enabled.'))
if(!m.w.d)A.w(A.rM(u.r))
if(n.c)k.f=!0
else{o=n.b
if(o!=null){if(o<0)A.w(A.ay("Limit must be non-negative, got "+A.r(o)+".",null))
k.e=o}}if(n.d)k.r=!0
if(n.e)k.w=!0
q=k.c8()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:98}
A.tK.prototype={
$1(a){var s,r,q=A.k([],t.cP)
for(s=J.E(a);s.k();){r=s.gn()
q.push(new A.mX(r.a,r.b))}return new A.h0(q)},
$S:99}
A.tx.prototype={
nq(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.r=a
p.d.an()
s=2
return A.a(p.c.a,$async$$1)
case 2:if(p.f)throw A.b(B.aU)
return A.e(null,r)}})
return A.f($async$$1,r)},
$1(a){return this.nq(a)},
$S:4}
A.tw.prototype={
$1(a){return new A.hd(this.a)},
$S:101}
A.tI.prototype={
$1(a){return this.nr(a)},
nr(a){var s=0,r=A.h(t.H),q=this,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.a
p.e=a
p.c.an()
s=2
return A.a(p.b.a,$async$$1)
case 2:if(p.d)throw A.b(B.aU)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.tH.prototype={
$1(a){return a.a===this.a},
$S:102}
A.tO.prototype={
$1(a){var s=a==null?B.b5:A.k([a],t.d)
this.a.b.t(0,new A.jx(this.b,s))},
$S:103}
A.tP.prototype={
$1(a){this.b.bu().D()
this.a.e.H(0,this.c)},
$S:20}
A.tQ.prototype={
$1(a){this.a.b.t(0,new A.jx(this.b,a))},
$S:104}
A.ty.prototype={
$1(a){return this.a.f.mF()},
$S:52}
A.tz.prototype={
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
var s=0,r=A.Fx($async$$0,t.L),q,p=2,o=[],n=[],m=this,l,k,j
return A.FM(r)},
$S:106}
A.tA.prototype={
$1(a){var s=this,r=new Uint8Array(A.b7(a)),q=s.b
q.b=q.b+r.length
s.a.b.t(0,new A.ft(s.c,r,!1,null))
if(q.b>=1048576)s.d.bu().bd()},
$S:19}
A.tC.prototype={
$1(a){var s=this.a,r=this.b
s.w.H(0,r)
s.b.t(0,new A.ft(r,new Uint8Array(0),!0,J.a0(a)))},
$S:20}
A.tB.prototype={
$0(){var s=this.a,r=this.b
s.w.H(0,r)
s.b.t(0,new A.ft(r,new Uint8Array(0),!0,null))},
$S:0}
A.tL.prototype={
$0(){this.a.b.t(0,B.bA)},
$S:2}
A.tM.prototype={
$1(a){var s=this.a
s.Q=a
s.b.t(0,new A.no(A.Em(a)))},
$S:107}
A.tN.prototype={
$1(a){var s,r=this.a,q=A.k([],t.oS)
for(s=J.E(a);s.k();)q.push(r.iU(s.gn()))
r.b.t(0,new A.lc(this.b,q))},
$S:108}
A.cF.prototype={}
A.rE.prototype={
gn9(){var s=this.r
return new A.aq(s,A.n(s).i("aq<2>")).v4(0,0,new A.rH())},
mF(){var s,r=this.r,q=A.n(r).i("aq<2>"),p=q.i("cl<o.E,l>"),o=A.O(new A.cl(new A.al(new A.aq(r,q),new A.rF(this.f.$0()),q.i("al<o.E>")),new A.rG(),p),p.i("o.E"))
for(q=o.length,s=0;p=o.length,s<p;o.length===q||(0,A.q)(o),++s)r.H(0,o[s])
return p}}
A.rH.prototype={
$2(a,b){return a+b.f},
$S:71}
A.rF.prototype={
$1(a){return!a.z.k7(this.a)},
$S:110}
A.rG.prototype={
$1(a){return a.a},
$S:111}
A.oj.prototype={}
A.um.prototype={}
A.ls.prototype={
a4(){return"DurabilityClass."+this.b}}
A.na.prototype={}
A.vH.prototype={
bT(a){var s,r=this.a
if(!r.J(a))return null
s=r.H(0,a)
r.j(0,a,s)
if(s==null)r=null
else{r=A.p3(s)
r.toString
t.G.a(r)}return r},
kG(a,b){var s,r=this.a
if(r.a>=256)r.H(0,new A.T(r,A.n(r).i("T<1>")).gG(0))
if(b==null)s=null
else{s=A.p3(b)
s.toString
t.G.a(s)}r.j(0,a,s)},
vz(a){var s,r,q,p=a.a
if(p===0){this.a.aj(0)
return}s=this.a
if(p>=s.a){s.aj(0)
return}for(p=A.hB(a,a.r,A.n(a).c),r=p.$ti.c;p.k();){q=p.d
s.H(0,q==null?r.a(q):q)}}}
A.m6.prototype={
aP(a){return this.wr(a)},
wr(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$aP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:i=q.dy
h=a.a
if(i.J(h))throw A.b(A.aP('Duplicate store name "'+h+'" in this open call.'))
p=A.Cj(a)
o=q.w
if(o.e===B.aA&&p.b.length!==0)throw A.b(new A.hh('Store "'+h+'" declares executable features that cannot run on the worker runtime: '+B.b.B(p.b,", ")+"."))
s=2
return A.a(q.fR(a,p),$async$aP)
case 2:n=new A.io(o).jI(a)
o=a.w
if(o!=null)A.MP(q.r,h,o.c)
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
case 6:l=J.S(l.gG(m),"schema_ver")
l.toString
A.ao(l)
k=a.b
if(l>k)throw A.b(A.Ei('Store "'+h+'" on disk is schema v'+l+", but this package supports v"+k+"."))
s=l<k?18:19
break
case 18:s=20
return A.a(A.fE(q,a,l),$async$aP)
case 20:case 19:s=21
return A.a(q.bI(a),$async$aP)
case 21:s=22
return A.a(o.L("lp_stores",A.m(["definition_json",B.h.a6(a.p(),null),"schema_ver",k],t.N,t.X),"store = ?",[h]),$async$aP)
case 22:case 5:i.j(0,h,new A.na(a,p,new A.vH(A.t(t.N,t.b))))
s=23
return A.a(q.dO(h,p),$async$aP)
case 23:return A.e(null,r)}})
return A.f($async$aP,r)},
fR(a,b){return this.oN(a,b)},
oN(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j
var $async$fR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:k=a.a
s=3
return A.a(p.r.aI("lp_meta",1,"k = ?",["schema_manifest:"+k]),$async$fR)
case 3:j=d
if(J.by(j)){s=1
break}o=null
try{n=J.S(J.bZ(j),"v")
o=A.IW(typeof n=="string"?B.h.av(n,null):n)}catch(i){if(A.F(i) instanceof A.dF){s=1
break}else throw i}l=a.b
if(o.e!==l){s=1
break}if(A.as(B.o.v(B.e.v(A.ak(o.p()))).a)!==A.as(B.o.v(B.e.v(A.ak(b.p()))).a))throw A.b(A.aP('Store "'+k+'" changed behavior at the SAME schema version '+l+". Bump the store version and provide a migration description."))
case 1:return A.e(q,r)}})
return A.f($async$fR,r)},
dO(a,b){return this.qV(a,b)},
qV(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$dO=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p="schema_manifest:"+a
o=A.ak(b.p())
n=q.r
m=t.N
l=t.X
k=J
s=5
return A.a(n.aI("lp_meta",1,"k = ?",[p]),$async$dO)
case 5:s=k.by(d)?2:4
break
case 2:s=6
return A.a(n.aC(0,"lp_meta",A.m(["k",p,"v",o],m,l)),$async$dO)
case 6:s=3
break
case 4:s=7
return A.a(n.L("lp_meta",A.m(["v",o],m,l),"k = ?",[p]),$async$dO)
case 7:case 3:return A.e(null,r)}})
return A.f($async$dO,r)},
hz(a){return this.tG(a)},
tG(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hz=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.r.d
s=o!=null?3:4
break
case 3:s=5
return A.a(o.$1(a),$async$hz)
case 5:q=c
s=1
break
case 4:q=!1
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hz,r)},
bI(a){return this.rl(a)},
rl(a3){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bI=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:a0=p.r
a1=a3.a
s=3
return A.a(a0.ek("lp_stores",A.k(["definition_json"],t.s),1,"store = ?",[a1]),$async$bI)
case 3:a2=a6
if(J.by(a2)){s=1
break}o=null
try{n=J.S(J.bZ(a2),"definition_json")
m=typeof n=="string"?B.h.av(n,null):n
l=m
l.toString
k=t.X
o=A.pX(A.ba(t.f.a(l),t.N,k),k)}catch(a4){if(A.F(a4) instanceof A.cO){s=1
break}else throw a4}i=o.w
h=a3.w
g=!0
if(i!=h){l=i==null
if(!(l&&h==null)){l=!l&&h!=null&&B.af.Z(i.a,h.a)&&i.b===h.b&&i.c.R(0,h.c)
g=l}}if(g){s=1
break}f=new A.jo()
$.ky()
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
case 11:l=new A.io(p.w).jI(a3).d,k=l.length,e=0
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
b=new A.X(k,A.B1(),c).B(0,", ")
a=new A.X(k,new A.un(a3,h),c).B(0,", ")
l=A.z(l,'"','""')
s=18
return A.a(a0.O("INSERT INTO "+('"'+l+'"')+"(rowid, "+b+") SELECT rowid, "+a+" FROM "+('"'+A.z(a1,'"','""')+'"')),$async$bI)
case 18:case 12:if(f.b==null)f.b=$.mE.$0()
l=a3.b
s=19
return A.a(A.fF(a0,f.gmA(),l,"fts:"+a1,p.CW,l),$async$bI)
case 19:case 1:return A.e(q,r)}})
return A.f($async$bI,r)},
hJ(a){return this.u5(a)},
u5(a){var s=0,r=A.h(t.H),q=this,p
var $async$hJ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r.e
s=p!=null?2:3
break
case 2:s=4
return A.a(p.$1(a),$async$hJ)
case 4:case 3:return A.e(null,r)}})
return A.f($async$hJ,r)},
aw(a){var s=this.dy.h(0,a)
if(s==null)throw A.b(A.x('No store "'+a+'" registered in this LocalPocket.'))
return s},
aW(a,b,c){var s
if(A.nC(this)!=null)A.w(A.x(u.L))
s=this.b
s===$&&A.y()
return s.aW(a,b,c)},
a2(a,b){return this.aW(a,B.p,b)},
na(a,b){++this.y.e
return this.r.aD(a,B.m)},
nb(a,b){this.y.n1()
return this.r.ah(a,b)},
e1(a){return this.tB(a)},
tA(){return this.e1(null)},
tB(a){var s=0,r=A.h(t.H),q=this,p
var $async$e1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.r
s=a==null?2:4
break
case 2:s=5
return A.a(p.O("ANALYZE"),$async$e1)
case 5:s=3
break
case 4:s=6
return A.a(p.O("ANALYZE "+('"'+A.z(a,'"','""')+'"')),$async$e1)
case 6:case 3:return A.e(null,r)}})
return A.f($async$e1,r)},
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
fn(){return this.w6()},
w6(){var s=0,r=A.h(t.S),q,p=this,o
var $async$fn=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o={}
o.a=0
s=3
return A.a(p.a2(new A.uq(o),t.P),$async$fn)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fn,r)},
dn(a){return this.wD(a)},
wD(a){var s=0,r=A.h(t.H),q=this,p
var $async$dn=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.dy,p=new A.bC(p,p.r,p.e,A.n(p).i("bC<1>"))
case 2:if(!p.k()){s=3
break}s=4
return A.a(q.e5(p.d,a),$async$dn)
case 4:s=2
break
case 3:s=5
return A.a(q.fn(),$async$dn)
case 5:s=6
return A.a(q.fD(),$async$dn)
case 6:s=7
return A.a(q.tA(),$async$dn)
case 7:return A.e(null,r)}})
return A.f($async$dn,r)},
e5(a,b){return this.tP(a,b)},
tP(a,b){var s=0,r=A.h(t.S),q,p=this,o,n,m,l,k,j,i,h
var $async$e5=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:j={}
i=p.CW.$0()
h=i-B.c.N(b.a,1000)
j.a=0
o=p.aw(a).a
n=t.P,m=p.r
case 3:s=5
return A.a(m.ah("SELECT b.id FROM "+('"'+A.z(a,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? ORDER BY b.id LIMIT ?",[a,"clean",h,250]),$async$e5)
case 5:l=d
if(J.by(l)){s=4
break}if(A.nC(p)!=null)A.w(A.x(u.L))
k=p.b
k===$&&A.y()
s=6
return A.a(k.aW(new A.up(j,p,l,a,h,o),B.p,n),$async$e5)
case 6:s=3
break
case 4:q=j.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e5,r)},
q(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k
var $async$q=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.fr){s=1
break}n.fr=!0
m=n.a$
m.a.q()
m.b.q()
n.fx.b.aj(0)
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
A.un.prototype={
$1(a){return A.G9(this.a.a,this.b.c,"",a)},
$S:6}
A.uq.prototype={
$1(a){return this.nt(a)},
nt(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k
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
return A.a(l.Y("lp_outbox","store = ? AND record_id = ?",[m,A.D(n)]),$async$$1)
case 5:++o.a
s=3
break
case 4:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.up.prototype={
$1(a){return this.ns(a)},
ns(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:a0=a2.b
p=J.E(q.c),o=q.a,n=q.d,m=t.N,l=a2.c,k=a2.a.y,j=q.e,i=q.f,h=q.b,g=h.ay,h=h.ch
case 2:if(!p.k()){s=3
break}f=p.gn().h(0,"id")
f.toString
A.D(f)
a1=J
s=4
return A.a(a0.ah("SELECT b.id FROM "+('"'+A.z(n,'"','""')+'"')+" b JOIN lp_sync_row sr ON sr.store = ? AND sr.record_id = b.id WHERE b.id = ? AND b.archived = 1 AND b.hidden = 0 AND sr.sync_state = ? AND sr.last_seen_at IS NOT NULL AND sr.last_seen_at < ? LIMIT 1",[n,f,"clean",j]),$async$$1)
case 4:if(a1.by(a4)){s=2
break}s=5
return A.a(a0.ah("SELECT * FROM "+('"'+A.z(n,'"','""')+'"')+" WHERE id = ? LIMIT 1",[f]),$async$$1)
case 5:e=a4
d=J.M(e)
c=d.gW(e)?A.cf(i,d.gG(e),g,h):null
s=6
return A.a(A.cA(a0,n,f,!0),$async$$1)
case 6:s=7
return A.a(a0.Y(n,"id = ?",[f]),$async$$1)
case 7:d=A.ar([f],m)
l.push(new A.a1(n,d))
k.r+=d.a
if(c!=null){d=A.n(c).i("T<1>")
b=d.i("al<o.E>")
a=A.mb(b.i("o.E"))
a.C(0,new A.al(new A.T(c,d),new A.uo(),b))
a2.bb(new A.aS(n,f,B.H,B.aV,c,null,a))}++o.a
s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.uo.prototype={
$1(a){return a!=="id"},
$S:9}
A.o9.prototype={
wx(){var s,r,q=this,p=new A.aI(new A.u($.C,t.D),t.h)
q.e=p
s=q.a.a
s.d.aV(new A.yH(q,p),t.H)
r=s.as
s=q.gv2()
if(r.a>0)A.cR(r,s)
else A.cR(B.D,s)},
jV(){var s,r=this
if(r.f)return
r.f=!0
s=r.a
if(s.c===r)s.c=null
s=r.e
if(s!=null)s.an()},
cE(){var s=0,r=A.h(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3
var $async$cE=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:m.d=!0
b0=m.c
b1=b0.length
if(b1===0){s=1
break}l=b1===1
if(!l){b2=m.a.a.e;++b2.b
b2.c+=b1}b3=new A.jo()
$.ky()
b3.az()
k=b3
b1=m.a
b2=b1.a
b4=b2.a
j=m.b===B.aW&&b4.f!==":memory:"
s=j&&b1.b!=="FULL"?3:4
break
case 3:s=5
return A.a(b4.na("PRAGMA synchronous=FULL",null),$async$cE)
case 5:b1.b="FULL"
case 4:i=A.k([],t.gi)
h=A.k([],t.eb)
g=A.k([],t.aY)
p=7
s=10
return A.a(b2.b.a2(new A.yG(m,i,h,l,g),t.P),$async$cE)
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
b8.am(A.f_(b9,c0))}else{b8=e.b
b9=d
b8=b8.a
if((b8.a&30)!==0)A.w(A.x("Future already completed"))
b8.aK(b9)}}for(f=i,b5=f.length,b6=b4.a$,b8=b4.dy,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a0=f[b7]
b9=b8.h(0,a0.a)
if(b9!=null)b9.e.vz(a0.b)
b6.uH(a0)}for(f=h,b5=f.length,b7=0;b7<f.length;f.length===b5||(0,A.q)(f),++b7){a1=f[b7]
b6.uI(a1)}n.push(9)
s=8
break
case 7:p=6
c2=o.pop()
a2=A.F(c2)
a3=A.ai(c2)
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
b6.am(A.f_(b8,b9))}else{b6=a5.b
if((b6.a.a&30)!==0)A.w(A.x("Future already completed"))
b6.am(A.f_(a2,a3))}}throw c2
n.push(9)
s=8
break
case 6:n=[2]
case 8:p=2
s=j&&b1.b!=="NORMAL"?11:12
break
case 11:p=14
s=17
return A.a(b4.na("PRAGMA synchronous=NORMAL",null),$async$cE)
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
a4=k.guG();++f.a
f.d+=a4
b1.qw()
for(f=b0.length,b7=0;b7<b0.length;b0.length===f||(0,A.q)(b0),++b7){a9=b0[b7]
if((a9.b.a.a&30)===0){a4=a9.b
if((a4.a.a&30)!==0)A.w(A.x("Future already completed"))
a4.am(A.f_(new A.bk("Group commit failed."),null))}}s=n.pop()
break
case 9:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$cE,r)}}
A.yH.prototype={
$0(){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m
var $async$$0=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:s=2
return A.a(o.b.a,$async$$0)
case 2:q=4
s=7
return A.a(o.a.cE(),$async$$0)
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
A.yG.prototype={
$1(a){return this.nP(a)},
nP(a3){var s=0,r=A.h(t.P),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$1=A.c(function(a4,a5){if(a4===1){p.push(a5)
s=q}for(;;)switch(s){case 0:a=o.a
a0=A.Ct(a.a.a.a,a3,o.b,!1,o.c)
s=o.d?2:4
break
case 2:q=6
g=t.X
s=9
return A.a(A.pg(new A.yE(a,a0),null,A.m([$.kA(),a0],g,g),t.g7),$async$$1)
case 9:n=a5
o.e.push(new A.eW([B.b.gap(a.c),n,null,null]))
q=1
s=8
break
case 6:q=5
a1=p.pop()
m=A.F(a1)
l=A.ai(a1)
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
return A.a(A.pg(new A.yF(a0,k),null,A.m([$.kA(),a0],c,c),d),$async$$1)
case 17:j=a5
e.push(new A.eW([k,j,null,null]))
q=1
s=16
break
case 14:q=13
a2=p.pop()
i=A.F(a2)
h=A.ai(a2)
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
A.yE.prototype={
$0(){return B.b.gap(this.a.c).a.$1(this.b)},
$S:55}
A.yF.prototype={
$0(){return this.a.a2(new A.yD(this.b),t.z)},
$S:55}
A.yD.prototype={
$1(a){return this.a.a.$1(a)},
$S:114}
A.hr.prototype={}
A.ws.prototype={}
A.xf.prototype={
aW(a,b,c){var s,r=this.c
if(r!=null&&r.b===b&&!r.d){s=new A.u($.C,t._)
r.c.push(new A.hr(a,new A.aI(s,t.jk)))
return s.X(new A.xm(c),c)}return this.rT(a,b,c)},
rT(a,b,c){var s,r,q,p=this
if(p.a.as.a>0){s=p.c
if(s!=null)s.jV()}s=A.k([],t.i4)
r=new A.o9(p,b,s)
p.c=r
r.wx()
q=new A.u($.C,t._)
s.push(new A.hr(a,new A.aI(q,t.jk)))
return q.X(new A.xi(c),c)},
wi(a,b){var s,r=this.a
if(r.as.a>0){s=this.c
if(s!=null)s.jV()}return r.d.aV(new A.xl(this,a,b),b)},
qw(){if(++this.d<64)return
this.d=0
A.cR(B.D,new A.xh(this))}}
A.xm.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xi.prototype={
$1(a){return this.a.a(a)},
$S(){return this.a.i("0(@)")}}
A.xl.prototype={
$0(){var s=this.a,r=this.c
return s.a.b.a2(new A.xk(s,this.b,r),r)},
$S(){return this.c.i("A<0>()")}}
A.xk.prototype={
$1(a){return this.nO(a,this.c)},
nO(a,b){var s=0,r=A.h(b),q,p=this,o,n,m
var $async$$1=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=A.Ct(p.a.a.a,a,A.k([],t.gi),!0,null)
n=p.c
m=t.X
q=A.pg(new A.xj(p.b,o,n),null,A.m([$.kA(),o],m,m),n.i("0/"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S(){return this.c.i("A<0>(qZ)")}}
A.xj.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.xh.prototype={
$0(){this.a.a.a.iu().mp(new A.xg())},
$S:0}
A.xg.prototype={
$1(a){},
$S:20}
A.os.prototype={}
A.uY.prototype={
$1(a){var s=a.a
return s>this.a&&s<=this.b.b},
$S:56}
A.uZ.prototype={
$2(a,b){return B.c.a0(a.a,b.a)},
$S:116}
A.uV.prototype={
$1(a){return a.h(0,"name")},
$S:40}
A.uX.prototype={
$1(a){return this.nx(a)},
nx(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=J.E(q.a),k=q.b,j=q.c,i=j.ay,j=j.ch,h=q.e
case 2:if(!l.k()){s=3
break}p=l.gn()
o=A.cf(k,p,i,j)
n=o
A.It(k,n)
g=J.S(o,"id")
g.toString
A.D(g)
m=A.dm(k,J.v(J.S(n,"archived"),!0),i,j,g,n)
s=4
return A.a(a.aC(0,h,m),$async$$1)
case 4:s=2
break
case 3:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:54}
A.mz.prototype={
wg(a){if(a>this.w)this.w=a},
n1(){return this.f++}}
A.d6.prototype={}
A.a9.prototype={}
A.c5.prototype={}
A.dr.prototype={}
A.cZ.prototype={}
A.b_.prototype={}
A.cm.prototype={}
A.yP.prototype={}
A.mI.prototype={
ct(a,b){var s=this.gdV(),r=this.c
if(r==null)return s.nb(a,b)
s.y.n1()
return r.ah(a,b)},
bY(a,b,c,d,e,f,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i=this,h=t.fA,g=A.bD(i.d,!0,h)
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
return new A.mI(i.a,i.b,i.c,g,h,j,s,r,q,p,o,n,m,l,k)},
fU(){var s=null
return this.bY(s,s,s,s,s,s,s,s,s)},
lc(a){var s=null
return this.bY(s,s,s,s,s,s,s,a,s)},
pp(a){var s=null
return this.bY(s,s,s,a,s,s,s,s,s)},
pq(a){var s=null
return this.bY(s,s,s,s,a,s,s,s,s)},
pn(a){var s=null
return this.bY(a,s,s,s,s,s,s,s,s)},
pr(a){var s=null
return this.bY(s,s,s,s,s,a,s,s,s)},
pt(a,b,c){var s=null
return this.bY(s,s,s,s,s,s,a,b,c)},
ps(a,b){var s=null
return this.bY(s,a,b,s,s,s,s,s,s)},
po(a){var s=null
return this.bY(s,s,a,s,s,s,s,s,s)},
cS(a){var s,r,q,p
for(s=this.b.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a){if(p.e)throw A.b(A.aP('Field "'+a+'" is encrypted and cannot be queried or sorted.'))
return}}if(a==="id"||a==="archived"||a==="hidden")return
throw A.b(A.ay('Unknown field "'+a+'" for query.',a))},
be(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=" LIKE ? ESCAPE '\\'"
this.cS(a0)
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
if(i)r.push(new A.b_(s+b,[A.kr(b3)+"%"]))
h=a3!=null
if(h)r.push(new A.b_(s+b,["%"+A.kr(a3)]))
g=a2!=null
if(g)r.push(new A.b_(s+b,["%"+A.kr(a2)+"%"]))
f=a9===!0
if(f)r.push(new A.b_(s+" IS NULL",B.m))
e=a8===!0
if(e)r.push(new A.b_(s+" IS NOT NULL",B.m))
d=this.fU()
B.b.C(d.d,r)
c=A.k([],t.k)
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
if(f)c.push(new A.a9(a0,"isNull",B.m))
if(e)c.push(new A.c5(new A.a9(a0,"isNull",B.m)))
B.b.C(d.f,c)
return d},
wW(a,b,c){var s=null
return this.be(0,b,s,s,s,c,s,s,s,s,s,s,s,s,s)},
x5(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,s,c,s)},
wX(a,b,c){var s=null
return this.be(0,b,s,s,s,s,c,s,s,s,s,s,s,s,s)},
wY(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,c,s,s,s,s,s,s,s)},
x3(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,c,s,s,s)},
x4(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,c,s,s)},
wZ(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,c,s,s,s,s,s,s)},
wT(a,b,c){var s=null
return this.be(0,b,c,s,s,s,s,s,s,s,s,s,s,s,s)},
x6(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,s,s,s,s,c)},
wV(a,b,c){var s=null
return this.be(0,b,s,s,c,s,s,s,s,s,s,s,s,s,s)},
wU(a,b,c){var s=null
return this.be(0,b,s,c,s,s,s,s,s,s,s,s,s,s,s)},
x0(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,s,c,s,s,s,s)},
x_(a,b,c){var s=null
return this.be(0,b,s,s,s,s,s,s,s,c,s,s,s,s,s)},
w2(a){var s,r,q,p,o,n,m,l,k,j=t.s,i=A.k([],j),h=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.q)(a),++r){q=a[r]
p=A.k([],j)
q.a7(0,new A.wg(this,p,h))
if(p.length===0)continue
i.push("("+B.b.B(p," AND ")+")")}if(i.length===0)return this
o=this.fU()
o.e.push(new A.b_("("+B.b.B(i," OR ")+")",h))
j=t.k
s=A.k([],j)
for(n=a.length,r=0;r<a.length;a.length===n||(0,A.q)(a),++r){q=a[r]
if(q.gW(0)){m=A.k([],j)
for(l=q.gab().gu(0);l.k();){k=l.gn()
m.push(new A.a9(k.a,"eq",[k.b]))}s.push(new A.dr(m))}}o.f.push(new A.cZ(s))
return o},
jB(a){var s,r,q,p,o,n,m,l=null
A:{s=a instanceof A.a9
r=s?a.a:l
if(s){this.cS(r)
break A}s=a instanceof A.c5
q=s?a.a:l
if(s){this.jB(q)
break A}p=a instanceof A.dr
o=l
n=l
if(p){o=a.a
n=o}if(!p){p=a instanceof A.cZ
if(p)n=a.a
s=p}else s=!0
if(s)for(s=n.length,m=0;m<n.length;n.length===s||(0,A.q)(n),++m)this.jB(n[m])
break A}},
gcp(){var s,r=A.O(this.r,t.k5)
if(!this.ax)s=r.length===0||B.b.ga1(r).a!=="id"
else s=!1
if(s)r.push(B.d_)
return r},
gl9(){var s,r,q,p,o
if(this.at){s=A.k([],t.fi)
for(r=this.gcp(),q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p){o=r[p]
s.push(new A.cm(o.a,!o.b))}}else s=this.gcp()
return s},
gm1(){var s,r,q,p,o,n=A.k([],t.s)
for(s=this.gcp(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.b?"d":"a"
n.push(p.a+":"+o)}return n},
jr(){if(this.x)return null
var s=this.w
if(s==null)throw A.b(A.E2('Query on "'+this.gaO()+'" requires .limit(n) or .all().'))
return s},
gaO(){return this.b.a},
gdV(){return this.a},
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
if(r!=null){n=f.pw(r)
m=f.lz(f.gl9(),n.a)
d.push(m.a)
B.b.C(c,m.b)}l=d.length===0?"":" WHERE "+B.b.B(d," AND ")
if(a2){if(a1){a.toString
r="COUNT(DISTINCT "+('"'+A.z(a,'"','""')+'"')+") AS c"}else r="COUNT(*) AS c"
k=r}else{if(a0!=null){a.toString
r=a0+"("+('"'+A.z(a,'"','""')+'"')+") AS v"}else r=f.grH()
k=r}j=f.gl9()
r=!a2
if(!r||a0!=null)i=""
else i=j.length===0?"":" ORDER BY "+new A.X(j,new A.wb(),A.a_(j).i("X<1,l>")).B(0,", ")
h=A.IN(f.b.a+"|a:"+e+"|h:"+s+"|w:"+B.b.B(d,"|")+"|c:"+k+"|o:"+i+"|cd:"+a1+"|fc:"+a2+"|ag:"+A.r(a0)+"|af:"+A.r(a)+"|df:null",new A.wc(f,k,l,i))
if(!r||a0!=null)g=null
else{e=a3==null?f.jr():a3
g=e}return new A.a4(h+(g==null?"":" LIMIT "+A.r(g)),c)},
iS(a){return this.eA(null,null,!1,!1,a)},
pe(a,b){return this.eA(a,b,!1,!1,null)},
pc(){return this.eA(null,null,!1,!1,null)},
pf(a,b,c){return this.eA(a,null,b,c,null)},
pd(a){return this.eA(null,null,!1,a,null)},
grH(){var s,r,q,p,o=this.y
if(o==null)return"*"
if(!this.kY())return"*"
o=A.O(o,t.N)
for(s=this.gcp(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(!B.b.F(o,p))o.push(p)}return new A.X(o,A.B1(),A.a_(o).i("X<1,l>")).B(0,", ")},
pw(a){var s,r,q,p,o,n,m,l,k=this,j="Malformed cursor.",i=null,h=null,g=null,f=null,e=null
try{s=t.G.a(B.h.av(B.n.eZ(B.ar.v(a)),null))
i=J.S(s,"store")
h=J.S(s,"schemaVer")
g=J.S(s,"shape")
q=t.lH
p=q.a(J.S(s,"sort"))
if(p==null)p=B.aj
f=A.bD(p,!0,t.N)
r=k.at?J.S(s,"pv"):J.S(s,"values")
q=q.a(r)
if(q==null)q=B.aj
e=A.bD(q,!0,t.X)}catch(o){q=A.Cm(j)
throw A.b(q)}n=k.gm1()
q=k.b
if(!J.v(i,q.a)||!J.v(h,q.b)||!J.v(g,k.gm_())||!B.af.Z(f,n)||J.ap(e)!==n.length)throw A.b(A.Cm("Cursor does not match this query shape (store/schema/sort/filters)."))
for(q=e,p=q.length,m=0;m<p;++m){l=q[m]
if(l!=null&&!A.bH(l)&&!A.ah(l)&&typeof l!="number"&&typeof l!="string")throw A.b(A.Cm(j))}return new A.yP(e)},
gm_(){var s,r,q,p,o,n=this,m=A.k([],t.h2)
for(s=n.d,r=s.length,q=t.hf,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.k([o.a,o.b],q))}for(s=n.e,r=s.length,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
m.push(A.k([o.a,o.b],q))}return B.h.a6(A.m(["a",n.z,"h",n.Q,"w",m,"p",n.y],t.N,t.X),null)},
lz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=B.b.cD(a,new A.wd(a)),c=B.b.cD(b,new A.we())
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
B.b.C(l,i)}}if(m.length===0)return B.df
return new A.a4("("+B.b.B(m," OR ")+")",l)},
lA(a,b){var s,r,q,p=this,o=p.gcp(),n=p.b,m=p.gm1(),l=p.gm_(),k=[]
for(s=o.length,r=0;q=o.length,r<q;o.length===s||(0,A.q)(o),++r)k.push(a.h(0,o[r].a))
s=[]
for(r=0;r<o.length;o.length===q||(0,A.q)(o),++r)s.push(b.h(0,o[r].a))
n=B.e.v(B.h.a6(A.m(["store",n.a,"schemaVer",n.b,"sort",m,"shape",l,"values",k,"pv",s],t.N,t.K),null))
return B.bv.gf3().v(n)},
e7(a){return this.uW(a)},
c8(){return this.e7(null)},
uW(a8){var s=0,r=A.h(t.i0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$e7=A.c(function(a9,b0){if(a9===1)return A.d(b0,r)
for(;;)switch(s){case 0:a7=a8==null?p.jr():a8
if(a7===0){q=B.d0
s=1
break}o=a7==null
n=p.iS(o?null:a7+1)
s=3
return A.a(p.ct(n.a,n.b),$async$e7)
case 3:m=b0
l=!o&&J.ap(m)>a7
k=o?m:J.BL(m,a7).eq(0)
o=p.y
j=o!=null
i=j&&p.kY()
h=p.b
if(i){i=A.O(o,t.N)
B.b.C(i,p.r3())
g=A.Mf(h,k,p.gdV().ay,i,p.gdV().ch)}else g=A.Me(h,k,p.gdV().ay,p.gdV().ch)
i=p.at
if(i&&g.length!==0){h=A.a_(g).i("bT<1>")
f=A.O(new A.bT(g,h),h.i("Z.E"))
B.b.aj(g)
B.b.C(g,f)}s=i?4:6
break
case 4:s=7
return A.a(p.h9(g),$async$e7)
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
if(a1.J(a4))a0.j(0,a4,a1.h(0,a4))}c.push(a0)}else c.push(a1)}if(a0!==0){a5=l?p.lA(B.b.ga1(g),B.b.gG(g)):null
a6=d?p.lA(B.b.ga1(g),B.b.gG(g)):null}else{a5=null
a6=null}q=new A.co(c,a5,a6,l,d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e7,r)},
h9(a){return this.qY(a)},
qY(a){var s=0,r=A.h(t.y),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$h9=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=a.length
if(e===0){q=!1
s=1
break}o=B.b.ga1(a)
e=p.gcp()
n=[]
for(m=p.gcp(),l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k)n.push(o.h(0,m[k].a))
j=p.lz(e,n)
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
return A.a(p.ct("SELECT 1 FROM "+('"'+A.z(p.b.a,'"','""')+'"')+" WHERE "+B.b.B(i," AND ")+" LIMIT 1",h),$async$h9)
case 3:q=d.e8(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h9,r)},
kY(){var s,r,q,p,o
for(s=this.y,r=s.length,q=this.b,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(o==="id"||o==="archived")continue
if(q.f7(o)==null)return!1}return!0},
r3(){var s,r,q,p,o=A.k([],t.s)
for(s=this.gcp(),r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].a
if(p!=="id"&&p!=="archived")o.push(p)}return o},
hC(){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hC=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.pd(!0)
m=A
s=3
return A.a(p.ct(o.a,o.b),$async$hC)
case 3:n=m.f4(b)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hC,r)},
hE(a){return this.tR(a)},
tR(a){var s=0,r=A.h(t.S),q,p=this,o,n,m
var $async$hE=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cS(a)
o=p.pf(a,!0,!0)
m=A
s=3
return A.a(p.ct(o.a,o.b),$async$hE)
case 3:n=m.f4(c)
q=n==null?0:n
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hE,r)},
hM(a){return this.uB(a)},
uB(a){var s=0,r=A.h(t.kS),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$hM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.cS(a)
o=A.k([a],t.s)
n=A.k([],t.fi)
for(m=p.r,l=m.length,k=0;k<m.length;m.length===l||(0,A.q)(m),++k){j=m[k]
if(j.a===a)n.push(j)}i=p.pt(n,o,!0)
if(i.x)h=null
else{o=i.w
h=o==null?1000:o}g=i.iS(h)
o=[]
f=J
s=3
return A.a(i.ct(B.a.ko(g.a,"SELECT ","SELECT DISTINCT "),g.b),$async$hM)
case 3:n=f.E(c)
case 4:if(!n.k()){s=5
break}o.push(n.gn().h(0,a))
s=4
break
case 5:q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hM,r)},
ql(a){var s,r,q=this.b.f7(a)
if(q==null)return!1
s=q.b
A:{r=B.S===s||B.T===s||B.B===s||B.U===s
break A}return r},
cR(a,b){return this.oL(a,b)},
oL(a,b){var s=0,r=A.h(t.jh),q,p=this,o,n,m
var $async$cR=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p.cS(b)
if(!p.ql(b))throw A.b(A.ay('Field "'+b+'" is not numeric and cannot be aggregated.',b))
o=p.pe(b,a)
s=3
return A.a(p.ct(o.a,o.b),$async$cR)
case 3:n=d
m=J.M(n)
q=A.Fj(m.gE(n)?null:J.S(m.gG(n),"v"))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cR,r)},
i2(){var s=0,r=A.h(t.i),q,p=this,o,n,m,l,k,j
var $async$i2=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:m=t.s
l=p.lc(A.k(["id"],m))
k=l.pc()
s=3
return A.a(l.ct(k.a,k.b),$async$i2)
case 3:j=b
m=A.k([],m)
for(o=J.E(j);o.k();){n=o.gn().h(0,"id")
n.toString
m.push(A.D(n))}q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i2,r)},
hO(){var s=0,r=A.h(t.N),q,p=this,o,n
var $async$hO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.iS(p.jr())
n=J
s=3
return A.a(p.ct("EXPLAIN QUERY PLAN "+o.a,o.b),$async$hO)
case 3:q=n.bM(b,new A.wf(),t.X).B(0,"\n")
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hO,r)}}
A.wg.prototype={
$2(a,b){this.a.cS(a)
this.b.push('"'+A.z(a,'"','""')+'" = ?')
this.c.push(b)},
$S:117}
A.wb.prototype={
$1(a){var s=A.z(a.a,'"','""'),r=a.b?"DESC":"ASC"
return'"'+s+'" '+r},
$S:118}
A.wc.prototype={
$0(){var s=this
return"SELECT "+s.b+" FROM "+('"'+A.z(s.a.b.a,'"','""')+'"')+s.c+s.d},
$S:119}
A.wd.prototype={
$1(a){return a.b===B.b.gG(this.a).b},
$S:120}
A.we.prototype={
$1(a){return a!=null},
$S:14}
A.wf.prototype={
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
A.wz.prototype={
rG(){if(this.f)return null
var s=this.e
if(s==null)throw A.b(A.E2('Search on "'+this.b.a+'" requires .limit(n) or .all().'))
return s},
c8(){var s=0,r=A.h(t.fE),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$c8=A.c(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a4=n.d
if(B.a.cg(a4).length===0){q=B.cJ
s=1
break}m=n.a
if(m==null)throw A.b(A.x("A compile-only SearchBuilder cannot execute fetch()."))
l=null
k=null
e=n.b
d=e.w
c=d.c.ei(a4)
A.IY(c)
if(d.b)A.IX(c)
b=e.a
a=b+"_fts"
a0=A.k(['"'+A.z(a,'"','""')+'" MATCH ?'],t.s)
if(!n.r)a0.push("b.archived = 0")
if(!n.w)a0.push("b.hidden = 0")
a4=B.b.B(a0," AND ")
a1=n.rG()
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
return A.a(m.nb(l,k),$async$c8)
case 10:s=8
break
case 9:s=11
return A.a(j.ah(l,k),$async$c8)
case 11:case 8:i=a7
h=A.k([],t.kj)
for(a4=J.E(i);a4.k();){g=a4.gn()
e=J.S(g,"id")
e.toString
A.D(e)
d=J.S(g,"score")
d.toString
J.aL(h,new A.cN(e,A.Fi(d)))}q=h
s=1
break
p=2
s=6
break
case 4:p=3
a5=o.pop()
h=A.F(a5)
if(h instanceof A.c8){f=h
throw A.b(A.ay("Invalid search term: "+f.a,null))}else throw a5
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$c8,r)}}
A.c4.prototype={
a4(){return"FieldKind."+this.b}}
A.aX.prototype={
gkJ(){var s,r
if(this.e)return"TEXT"
s=this.b
A:{if(B.aw===s||B.I===s||B.V===s||B.W===s||B.J===s){r="TEXT"
break A}if(B.S===s||B.B===s||B.U===s){r="INTEGER"
break A}if(B.T===s){r="REAL"
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
A.rv.prototype={
$0(){var s,r,q,p,o=null,n=this.a,m=n.h(0,"kind")
m.toString
s=A.fq(B.cD,A.D(m))
m=n.h(0,"name")
m.toString
A.D(m)
r=J.v(n.h(0,"required"),!0)
q=J.v(n.h(0,"encrypted"),!0)
switch(s.a){case 0:return new A.aX(m,B.aw,r,J.v(n.h(0,"uniqueWhenActive"),!0),q,o,o,!1)
case 1:return new A.aX(m,B.S,r,!1,q,o,o,!1)
case 2:return new A.aX(m,B.T,r,!1,q,o,o,!1)
case 3:return new A.aX(m,B.B,r,!1,!1,o,o,!1)
case 4:return new A.aX(m,B.U,r,!1,!1,o,o,!1)
case 5:n=n.h(0,"enumValues")
n.toString
p=t.N
return new A.aX(m,B.I,r,!1,!1,A.fC(J.pm(t.j.a(n),p),p),o,!1)
case 6:return new A.aX(m,B.V,!1,!1,q,o,o,!1)
case 7:return new A.aX(m,B.W,!1,!1,q,o,o,!1)
case 8:p=n.h(0,"refTo")
p.toString
return new A.aX(m,B.J,!1,!1,!1,o,A.D(p),J.v(n.h(0,"enforceFk"),!0))}},
$S:121}
A.iB.prototype={
a4(){return"IndexScope."+this.b}}
A.dz.prototype={
p(){return A.m(["columns",this.a,"unique",this.b,"scope",this.c.b],t.N,t.X)}}
A.ti.prototype={
$0(){var s,r=this.a,q=r.h(0,"columns")
q.toString
q=J.pm(t.j.a(q),t.N)
s=J.v(r.h(0,"unique"),!0)
r=r.h(0,"scope")
r.toString
return new A.dz(q,s,A.fq(B.cy,A.D(r)))},
$S:122}
A.fy.prototype={
p(){var s,r=t.N,q=t.X,p=A.t(r,q)
p.j(0,"fields",this.a)
if(this.b)p.j(0,"fuzzy",!0)
s=this.c.a
if(s.gW(s))p.j(0,"normalize",A.m(["rules",s],r,q))
return p},
R(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.fy&&r.b===b.b&&B.af.Z(r.a,b.a)&&r.c.R(0,b.c)
else s=!0
return s},
gI(a){return A.c6(A.v8(this.a),this.b,this.c,B.d,B.d,B.d,B.d)}}
A.rL.prototype={
$0(){var s,r=this.a,q=r.h(0,"normalize"),p=r.h(0,"fields")
p.toString
s=t.N
p=J.pm(t.j.a(p),s)
r=J.v(r.h(0,"fuzzy"),!0)
return new A.fy(p,r,t.f.b(q)?A.I_(q.c2(0,s,t.X)):B.cd)},
$S:123}
A.en.prototype={
ei(a){var s,r,q,p
for(s=this.a.gab(),s=s.gu(s),r=a;s.k();){q=s.gn()
p=q.a
if(!B.a.F(r,p))continue
q=q.b
r=A.z(r,p,q)}return r},
p(){return A.m(["rules",this.a],t.N,t.X)},
R(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.en&&A.HZ(this.a,b.a)
else s=!0
return s},
gI(a){var s,r,q,p=this.a,o=p.gK(),n=A.O(o,A.n(o).i("o.E"))
B.b.aE(n)
o=[]
for(s=n.length,r=0;r<n.length;n.length===s||(0,A.q)(n),++r){q=n[r]
o.push(A.c6(q,p.h(0,q),B.d,B.d,B.d,B.d,B.d))}return A.v8(o)},
l(a){var s=this.a
return"FtsNormalization("+s.gm(s)+" rules)"}}
A.rK.prototype={
$0(){var s,r,q,p,o=this.a.h(0,"rules")
o.toString
s=t.N
r=A.t(s,s)
for(o=t.d2.a(o).gab(),o=o.gu(o);o.k();){q=o.gn()
p=q.a
p.toString
A.D(p)
q=q.b
q.toString
A.D(q)
A.DN(p,q)
r.j(0,p,q)}return new A.en(A.HH(r,s,s))},
$S:124}
A.c9.prototype={
p(){var s,r,q,p=A.k([],t.d)
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)p.push(s[q].p())
return A.m(["toVersion",this.a,"destructive",this.b,"addedFields",p],t.N,t.X)}}
A.wP.prototype={
$0(){var s,r,q,p=this.a,o=p.h(0,"toVersion")
o.toString
A.ao(o)
s=J.v(p.h(0,"destructive"),!0)
r=A.k([],t.mK)
p=t.lH.a(p.h(0,"addedFields"))
p=J.E(p==null?B.aj:p)
q=t.G
while(p.k())r.push(A.DI(q.a(p.gn())))
return new A.c9(o,s,r)},
$S:125}
A.v_.prototype={
a4(){return"MissingRemotePolicy."+this.b}}
A.qq.prototype={}
A.c1.prototype={
gd8(){var s,r,q,p,o=this,n=$.Gz()
A.BT(o)
s=n.a.get(o)
if(s==null){s=A.aN(t.N)
for(r=o.c,q=r.length,p=0;p<r.length;r.length===q||(0,A.q)(r),++p)s.t(0,r[p].a)
n.j(0,o,s)
n=s}else n=s
return n},
f7(a){var s,r,q,p,o,n=this,m=$.GA()
A.BT(n)
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
A.pY.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this.a,j=k.h(0,"name")
j.toString
A.D(j)
s=k.h(0,"version")
s.toString
A.ao(s)
r=A.k([],t.mK)
q=k.h(0,"fields")
q.toString
p=t.j
q=J.E(p.a(q))
o=t.G
while(q.k())r.push(A.DI(o.a(q.gn())))
q=A.k([],t.mr)
n=k.h(0,"indexes")
n.toString
n=J.E(p.a(n))
while(n.k())q.push(A.I8(o.a(n.gn())))
p=J.v(k.h(0,"keepUnsyncedArchives"),!0)
n=J.v(k.h(0,"prefetchFiles"),!0)
if(t.f.b(k.h(0,"fts"))){m=k.h(0,"fts")
m.toString
m=A.I0(o.a(m))}else m=null
l=A.k([],t.c0)
k=t.lH.a(k.h(0,"migrations"))
k=J.E(k==null?B.aj:k)
while(k.k())l.push(A.J7(o.a(k.gn())))
return new A.c1(j,s,r,q,n,p,m,l,this.b.i("c1<0>"))},
$S(){return this.b.i("c1<0>()")}}
A.mW.prototype={
p(){var s=this
return A.m(["formatVersion",s.c,"store",s.d,"version",s.e,"definition",s.a,"unsupportedFeatures",s.b,"queryCompilerVersion",s.f],t.N,t.X)}}
A.wv.prototype={
$1(a){return!1},
$S:56}
A.ww.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.I)},
$S:10}
A.wx.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.eB)},
$S:57}
A.wy.prototype={
$1(a){return J.a0(a)},
$S:127}
A.v3.prototype={}
A.dJ.prototype={
a4(){return"MutationAction."+this.b}}
A.co.prototype={}
A.fg.prototype={
gbk(){var s=this.c
return s==null?this.a.r:s},
gaO(){return this.b.a.a},
eC(){var s=this.d
if(s!=null&&s.e){s=this.gaO()
throw A.b(new A.fV('Cannot mutate "'+s+'" through a read-only Tx.'))}},
ii(a){var s=this
if(s.d!=null)return s.hj(B.a_,a)
return s.a.aW(new A.qb(s,a),B.p,t.H)},
nc(a){var s=this
if(s.d!=null)return s.hj(B.a0,a)
return s.a.aW(new A.qe(s,a),B.p,t.H)},
mZ(a){var s=this
if(s.d!=null)return s.lL(a)
return s.a.aW(new A.qa(s,a),B.p,t.H)},
nd(a){var s=this
if(s.d!=null)return s.bs(a,B.a0)
return s.a.aW(new A.qd(s,a),B.p,t.H)},
mW(a,b){var s=this
if(s.d!=null)return s.qP(a,b)
return s.a.aW(new A.q8(s,a,b),B.p,t.H)},
mX(a){var s=this
if(s.d!=null)return s.eI(a)
return s.a.aW(new A.q7(s,a),B.p,t.H)},
eI(a){return this.qR(a)},
qR(a){var s=0,r=A.h(t.H),q,p=this,o,n,m,l
var $async$eI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p.eC()
if(a.a===0){s=1
break}o=A.n(a),n=new A.aM(a,o.i("aM<1,2>")).gu(0)
case 3:if(!n.k()){s=4
break}m=n.d
s=5
return A.a(p.cq(m.a,m.b,!0),$async$eI)
case 5:s=3
break
case 4:n=p.d
n.toString
l=A.aN(t.N)
for(o=new A.bC(a,a.r,a.e,o.i("bC<1>"));o.k();)l.t(0,o.d)
n.a_(new A.a1(p.b.a.a,l))
case 1:return A.e(q,r)}})
return A.f($async$eI,r)},
mi(a){var s=this
if(s.d!=null)return s.hi(B.C,a)
return s.a.aW(new A.q6(s,a),B.p,t.H)},
n6(a){var s=this
if(s.d!=null)return s.hi(B.E,a)
return s.a.aW(new A.qc(s,a),B.p,t.H)},
ki(a){var s=this
if(s.d!=null)return s.d1(a)
return s.a.aW(new A.q9(s,a),B.p,t.H)},
d1(a){return this.r4(a)},
r4(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$d1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.eC()
s=2
return A.a(q.dU(a),$async$d1)
case 2:p=c
o=q.d
n=o.b
m=q.b.a.a
s=3
return A.a(A.cA(n,m,a,!0),$async$d1)
case 3:s=4
return A.a(n.Y(m,"id = ?",[a]),$async$d1)
case 4:l=t.N
o.a_(new A.a1(m,A.ar([a],l)))
if(p!=null){l=A.d2(p.gK(),l)
l.H(0,"id")
o.bb(new A.aS(m,a,B.H,B.aV,p,null,l))}return A.e(null,r)}})
return A.f($async$d1,r)},
cq(a,b,c){return this.qQ(a,b,c)},
qP(a,b){return this.cq(a,b,!1)},
qQ(a,b,c){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k
var $async$cq=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p.eC()
s=3
return A.a(p.gbk().ah("SELECT s.*, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM lp_sync_row s LEFT JOIN lp_outbox o   ON o.store = s.store AND o.record_id = s.record_id WHERE s.store = ? AND s.record_id = ? LIMIT 1",[p.b.a.a,a]),$async$cq)
case 3:o=e
n=J.M(o)
if(n.gW(o)){m=n.gG(o)
l=A.ju(m)
k=m.h(0,"o_kind")!=null?A.mw(A.m(["store",m.h(0,"o_store"),"record_id",m.h(0,"o_record_id"),"kind",m.h(0,"o_kind"),"payload_json",m.h(0,"o_payload_json"),"base_updated",m.h(0,"o_base_updated"),"base_hash",m.h(0,"o_base_hash"),"dirty_fields",m.h(0,"o_dirty_fields"),"op_id",m.h(0,"o_op_id"),"created_at",m.h(0,"o_created_at"),"updated_at",m.h(0,"o_updated_at"),"depends_on_op",m.h(0,"o_depends_on_op")],t.N,t.X)):null}else{l=null
k=null}s=l!=null&&l.w===B.G&&k!=null?4:5
break
case 4:s=6
return A.a(p.eJ(a,b,l,k,c),$async$cq)
case 6:s=1
break
case 5:s=7
return A.a(p.d_(a,b,c,k,l),$async$cq)
case 7:case 1:return A.e(q,r)}})
return A.f($async$cq,r)},
d_(a,b,c,d,e){return this.pN(a,b,c,d,e)},
pN(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$d_=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:s=2
return A.a(q.dU(a),$async$d_)
case 2:m=g
if(m==null)throw A.b(A.Ch("No record "+q.gaO()+"/"+a+" to patch."))
p=t.N
o=t.X
n=A.cJ(m,p,o)
n.C(0,b)
o=A.t(p,o)
o.j(0,"id",a)
o.C(0,n)
s=3
return A.a(q.aL(B.K,c,m,a,d,e,o),$async$d_)
case 3:return A.e(null,r)}})
return A.f($async$d_,r)},
eJ(a,b,c,d,e){return this.qS(a,b,c,d,e)},
qS(a7,a8,a9,b0,b1){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$eJ=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a5=null
try{a5=B.h.av(b0.d,null)}catch(b2){a5=null}if(!t.G.b(a5)){q=n.d_(a7,a8,b1,b0,a9)
s=1
break}i=a5.h(0,"id")
if(i!=null&&!J.v(i,a7)){q=n.d_(a7,a8,b1,b0,a9)
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
c=A.AU(e,d,m,null)
b=e.a
a=b.charCodeAt(0)==0?b:b
b=A.cJ(m,h,g)
b.H(0,"id")
n.hm(a7,b,a,c)
a0=n.li(a5,m,B.K)
l=null
b=a0.length===1&&d.gd8().F(0,B.b.gap(a0))
a1=n.a
a2=a1.ay
a3=a1.ch
if(b){a4=d.f7(B.b.gap(a0))
b=a4.a
l=A.m([b,A.G5(d,a4,J.S(m,b),a2,a3,a7),"hidden",0],h,g)}else l=A.dm(d,J.v(J.S(m,"archived"),!0),a2,a3,a7,m)
p=4
s=7
return A.a(n.gbk().L(d.a,l,"id = ?",[a7]),$async$eJ)
case 7:p=2
s=6
break
case 4:p=3
a6=o.pop()
k=A.F(a6)
h=A.Gu(k,m)
throw A.b(h)
s=6
break
case 3:s=2
break
case 6:g=a1.cx
g===$&&A.y()
b=n.gbk()
a1=l
s=8
return A.a(g.bn(B.K,null,a0,b,a7,m,a5,b0,a,a1,a9,f),$async$eJ)
case 8:if(!b1){g=n.d
if(g!=null)g.a_(new A.a1(d.a,A.ar([a7],h)))}h=n.d
g=h==null
f=g?null:h.a.a$.b.d!=null
if(f===!0)if(!g)h.bb(new A.aS(d.a,a7,B.H,B.A,a5,m,A.ut(a0,A.a_(a0).c)))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$eJ,r)},
aL(a,b,c,d,e,f,g){return this.qt(a,b,c,d,e,f,g)},
hj(a,b){var s=null
return this.aL(a,!1,s,s,s,s,b)},
hi(a,b){var s=null
return this.aL(a,!1,s,b,s,s,s)},
rW(a,b,c){var s=null
return this.aL(a,b,s,s,s,s,c)},
rX(a,b,c,d,e,f){return this.aL(a,b,c,null,d,e,f)},
qt(b7,b8,b9,c0,c1,c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aL=A.c(function(c4,c5){if(c4===1){o.push(c5)
s=p}for(;;)switch(s){case 0:b5={}
n.eC()
m=null
b5.a=b9
l=null
b5.b=b5.c=null
i=new A.q1(b5,n,c2,c1)
s=b7===B.a_?3:5
break
case 3:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.i_()
g=$.pk()
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
case 10:if(b5.a==null)throw A.b(A.Ch("No record "+n.gaO()+"/"+A.r(m)+" to update."))
c3.toString
l=n.eF(c3,m)
s=8
break
case 9:s=b7===B.a0?11:13
break
case 11:h=A.a6(c3.h(0,"id"))
if(h==null)h=A.i_()
g=$.pk()
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
J.bY(l,e,f.b)}b7=B.K}s=12
break
case 13:c0.toString
m=c0
s=15
return A.a(i.$1(m),$async$aL)
case 15:g=b5.a
if(g==null)throw A.b(A.Ch("No record "+n.gaO()+"/"+A.r(m)+" to archive/restore."))
g=A.cJ(g,t.N,t.X)
g.j(0,"archived",b7===B.C)
l=g
case 12:case 8:case 4:d=new A.a2("")
g=n.b
e=g.a
c=l
b=A.AU(d,e,c,J.ap(m)!==0?m:null)
c=d.a
a=c.charCodeAt(0)==0?c:c
n.hm(m,l,a,b)
s=b5.a==null?16:18
break
case 16:a0=null
s=17
break
case 18:c=c2==null?b5.c:c2
s=c==null?19:21
break
case 19:c=n.a.cx
c===$&&A.y()
s=22
return A.a(c.bQ(n.gbk(),e.a,m),$async$aL)
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
c===$&&A.y()
s=29
return A.a(c.em(n.gbk(),e.a,m),$async$aL)
case 29:c=c5
a1=c
s=27
break
case 28:a1=c
case 27:case 24:c=a0==null
a2=!c
if(a2&&a0.w===B.a4)throw A.b(A.DB("Record "+n.gaO()+"/"+A.r(m)+u.W))
a3=b5.a
a4=a3!=null
if(a4)a5=!a2||a0.w===B.z
else a5=!1
if(a4&&a5){a6=A.ak(A.bf(e,a3))
a2=A.as(B.o.v(B.e.v(a6)).a)
a7=new A.pE(a6,a2,c?null:a0.c)}else a7=null
c=m
a2=l
a3=n.a
a4=a3.ay
a8=a3.ch
a9=A.dm(e,J.v(J.S(l,"archived"),!0),a4,a8,c,a2)
b0=n.li(b5.a,l,b7)
k=null
if(b5.a!=null&&b0.length===1&&e.gd8().F(0,B.b.gap(b0))){b1=e.f7(B.b.gap(b0))
c=b1.a
k=A.m([c,A.G5(e,b1,J.S(l,c),a4,a8,m),"hidden",0],t.N,t.X)}else k=a9
p=31
c=e.a
s=b5.a==null?34:36
break
case 34:s=37
return A.a(n.gbk().aC(0,c,k),$async$aL)
case 37:s=35
break
case 36:s=38
return A.a(n.gbk().L(c,k,"id = ?",[m]),$async$aL)
case 38:case 35:p=2
s=33
break
case 31:p=30
b6=o.pop()
j=A.F(b6)
g=A.Gu(j,l)
throw A.b(g)
s=33
break
case 30:s=2
break
case 33:c=a3.cx
c===$&&A.y()
a2=n.gbk()
a3=m
a4=b5.a
s=39
return A.a(c.bn(b7,a7,b0,a2,a3,l,a4,a1,a,a9,a0,g),$async$aL)
case 39:switch(b7.a){case 2:case 0:case 1:b3=b5.a==null?B.ab:B.A
break
case 3:b3=B.A
break
case 4:b3=B.c0
break
case 5:b3=B.c1
break
default:b3=null}if(b7===B.C||b7===B.E)b4=A.ar(["archived"],t.N)
else if(b5.a==null){g=l
c=A.n(g).i("T<1>")
a2=c.i("al<o.E>")
b4=A.d2(new A.al(new A.T(g,c),new A.q0(),a2),a2.i("o.E"))}else b4=A.ut(b0,A.a_(b0).c)
g=n.d
c=g==null
a2=c?null:g.a.a$.b.d!=null
if(a2===!0)if(!c)g.bb(new A.aS(e.a,m,B.H,b3,b5.a,l,b4))
if(!b8)if(!c)g.a_(new A.a1(e.a,A.ar([m],t.N)))
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$aL,r)},
bs(a,b){return this.rd(a,b)},
lL(a){return this.bs(a,B.a_)},
rd(c2,c3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1
var $async$bs=A.c(function(c4,c5){if(c4===1){o.push(c5)
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
a2=a1?A.i_():a0
a1=$.pk()
if(!a1.b.test(a2))throw A.b(A.ay('Invalid record id "'+a2+'"; expected [a-z0-9]{15}.',"id"))
J.aL(l,new A.a4(a2,a))}if(!c){a3=A.t(t.N,t.S)
for(d=l,a1=d.length,b=0;b<d.length;d.length===a1||(0,A.q)(d),++b){a2=d[b].a
a4=a3.h(0,a2)
a3.j(0,a2,(a4==null?0:a4)+1)}a5=new A.aq(a3,a3.$ti.i("aq<2>")).bL(0,new A.q5())}else a5=!1
s=c3===B.a_&&!a5?3:4
break
case 3:p=6
s=9
return A.a(n.dS(m,l),$async$bs)
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
if(!(A.F(c0) instanceof A.ho))throw c0
s=8
break
case 5:s=2
break
case 8:case 4:k=t.N
a7=A.t(k,t.G)
j=n.a,d=j.ay,j=j.ch,a1=t.s,a8=0
case 10:if(!(a8<J.ap(l))){s=12
break}a9=a8+2000
b0=B.c.bM(a9,0,J.ap(l))
a4=A.k([],a1)
for(b1=J.Hn(l,a8,b0),b2=b1.length,b=0;b<b1.length;b1.length===b2||(0,A.q)(b1),++b)a4.push(b1[b].a)
c1=J
s=13
return A.a(m.cf(e,"id IN ("+B.b.B(A.ae(a4.length,"?",!1,k),", ")+")",a4),$async$bs)
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
case 12:b3=A.t(k,t.nw)
b4=A.t(k,t.dZ)
j=a7.$ti.i("T<1>")
b5=A.O(new A.T(a7,j),j.i("o.E"))
a8=0
case 16:if(!(j=b5.length,a8<j)){s=18
break}a9=a8+2000
b6=B.b.T(b5,a8,B.c.bM(a9,0,j))
b7=B.b.B(A.ae(b6.length,"?",!1,k),", ")
j=A.k([e],a1)
B.b.C(j,b6)
f="store = ? AND record_id IN ("+b7+")"
c1=J
s=19
return A.a(m.cf("lp_sync_row",f,j),$async$bs)
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
return A.a(m.cf("lp_outbox",f,j),$async$bs)
case 22:j=c1.E(c5)
case 23:if(!j.k()){s=24
break}f=j.gn()
d=f.h(0,"record_id")
d.toString
b4.j(0,A.D(d),A.mw(f))
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
return A.a(n.rW(c3,!0,a1),$async$bs)
case 31:s=29
break
case 30:a1=A.dE(null,null,k,d)
a1.C(0,a)
a1.j(0,"id",a2)
a4=b9==null
b1=a4?null:b3.h(0,a2)
s=32
return A.a(n.rX(c3,!0,b9,a4?null:b4.h(0,a2),b1,a1),$async$bs)
case 32:b8.t(0,a2)
case 29:case 26:j.length===f||(0,A.q)(j),++b
s=25
break
case 27:g.a_(new A.a1(e,b8))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$bs,r)},
dS(a,b){return this.re(a,b)},
re(a6,a7){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$dS=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a3=n.a
a4=a3.r
s=a4 instanceof A.ip?3:4
break
case 3:s=5
return A.a(n.dT(a6,a7),$async$dS)
case 5:s=1
break
case 4:m=a3.CW.$0()
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
return A.a(n.ey(a6,a4,h,g,m),$async$dS)
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
s=A.F(a5) instanceof A.c8?14:16
break
case 14:d=A.k([],t.s)
for(c=0;c<j;++c)J.aL(d,a7[c].a)
b=d
s=17
return A.a(n.cY(a6,b),$async$dS)
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
a3.bb(new A.aS(a,a2.a,B.H,B.ab,null,e,J.Dl(e.gK(),new A.q4()).fB(0)))}case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dS,r)},
dT(a,b){return this.rf(a,b)},
rf(d5,d6){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$dT=A.c(function(d7,d8){if(d7===1){p.push(d8)
s=q}for(;;)switch(s){case 0:c8=o.b.a
c9=o.a
d0=c9.CW.$0()
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
l="INSERT INTO lp_outbox ("+A.i3(B.Y)+") VALUES "
k="INSERT INTO lp_sync_row ("+A.i3(B.X)+") VALUES "
j=new A.q3()
b1=new A.a2("")
a8=o.d
a9=a8==null?null:a8.a.a$.b.d!=null
b2=a9===!0
b3=b2?A.k([],t.jO):null
i=0,a9=b3==null,b4=c9.ay,b5=c9.ch,b6=c8.b
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
c4=A.AU(b1,c8,c3,c1)
b7=b1.a
c5=b7.charCodeAt(0)==0?b7:b7
o.hm(c1,c3,c5,c4)
A.LD(f,c8,J.v(c3.h(0,"archived"),!0),b4,b5,c1,c3)
b7=c9.cx
b7===$&&A.y()
c6=b7.fH()
A.FV(e,"",null,d0,null,'["*"]',B.v,c6,c5,c1,d3,d0)
A.FW(d,B.a5,0,"",null,null,'["*"]',null,null,1,0,c6,c1,null,b6,d3,B.G)
if(!a9)b3.push(new A.a4(c1,c3))}c=!1
b=!1
q=6
b7=d1.ci(A.r(m)+A.r(j.$2(J.ap(n),g)))
if(b7.r||b7.b.r)A.w(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.ez(new A.bO(f))
b7.fZ()
c=!0
b7=d1.ci(A.r(l)+A.r(j.$2(11,g)))
if(b7.r||b7.b.r)A.w(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.ez(new A.bO(e))
b7.fZ()
b=!0
b7=d1.ci(A.r(k)+A.r(j.$2(16,g)))
if(b7.r||b7.b.r)A.w(A.x(u.f))
if(!b7.f){b8=b7.a
b8.c.d.sqlite3_reset(b8.b)
b7.f=!0}b7.ez(new A.bO(d))
b7.fZ()
q=1
s=8
break
case 6:q=5
d4=p.pop()
s=A.F(d4) instanceof A.c8?9:11
break
case 9:a=A.k([],d2)
for(a0=0;a0<i;++a0)J.aL(a,d6[a0].a)
a1=a
s=12
return A.a(o.cY(d5,a1),$async$dT)
case 12:s=c||b?13:14
break
case 13:a2=A.k([],d2)
for(a3=i;a3<h;++a3)J.aL(a2,d6[a3].a)
a4=a2
a5=B.b.B(A.ae(J.ap(a4),"?",!1,t.N),", ")
s=c?15:16
break
case 15:s=17
return A.a(d5.Y(d3,"id IN ("+A.r(a5)+")",a4),$async$dT)
case 17:case 16:s=b?18:19
break
case 18:a6=A.k([d3],d2)
J.Dg(a6,a4)
a7=a6
s=20
return A.a(d5.Y("lp_outbox","store = ? AND record_id IN ("+A.r(a5)+")",a7),$async$dT)
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
a8.bb(new A.aS(d3,a2.a,B.H,B.ab,null,c3,J.Dl(c3.gK(),new A.q2()).fB(0)))}return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dT,r)},
ey(a,b,c,d,e){return this.oP(a,b,c,d,e)},
oP(a8,a9,b0,b1,b2){var s=0,r=A.h(t.G),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ey=A.c(function(b3,b4){if(b3===1){o.push(b4)
s=p}for(;;)switch(s){case 0:a1=n.b.a
a2=n.eF(b1,b0)
a3=new A.a2("")
a4=A.AU(a3,a1,a2,b0)
a5=a3.a
a6=a5.charCodeAt(0)==0?a5:a5
n.hm(b0,a2,a6,a4)
a5=n.a
m=A.dm(a1,J.v(a2.h(0,"archived"),!0),a5.ay,a5.ch,b0,a2)
a5=a5.cx
a5===$&&A.y()
e=a5.fH()
a5=a1.a
l=A.FY("",null,b2,'["*"]',B.v,e,a6,b0,a5,b2)
k=A.LY('["*"]',1,e,b0,a1.b,a5,B.G)
j=!1
i=!1
p=4
d=m
c=A.n(d).i("T<1>")
b=t.N
h=A.dG(new A.T(d,c),new A.pZ(),c.i("o.E"),b).B(0,", ")
g=B.b.B(A.ae(m.a,"?",!1,b),", ")
f='INSERT INTO "'+a5+'" ('+A.r(h)+") VALUES ("+A.r(g)+")"
c=a9.ci(f)
d=m
a=A.n(d).i("aq<2>")
d=A.O(new A.aq(d,a),a.i("o.E"))
c.e6(new A.bO(d))
j=!0
a9.ci("INSERT INTO lp_outbox ("+A.i3(B.Y)+") VALUES ("+B.b.B(A.ae(11,"?",!1,b),", ")+")").e6(new A.bO(A.Go(l,B.Y)))
i=!0
a9.ci("INSERT INTO lp_sync_row ("+A.i3(B.X)+") VALUES ("+B.b.B(A.ae(16,"?",!1,b),", ")+")").e6(new A.bO(A.Go(k,B.X)))
p=2
s=6
break
case 4:p=3
a7=o.pop()
s=j?7:8
break
case 7:s=9
return A.a(a8.Y(a5,"id = ?",[b0]),$async$ey)
case 9:case 8:s=i?10:11
break
case 10:s=12
return A.a(a8.Y("lp_outbox","store = ? AND record_id = ?",[a5,b0]),$async$ey)
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
cY(a,b){return this.py(a,b)},
py(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m
var $async$cY=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=b.length
if(m===0){s=1
break}o=B.b.B(A.ae(m,"?",!1,t.N),", ")
m=p.b.a.a
s=3
return A.a(a.Y(m,"id IN ("+o+")",b),$async$cY)
case 3:m=A.k([m],t.s)
B.b.C(m,b)
n="store = ? AND record_id IN ("+o+")"
s=4
return A.a(a.Y("lp_outbox",n,m),$async$cY)
case 4:s=5
return A.a(a.Y("lp_sync_row",n,m),$async$cY)
case 5:case 1:return A.e(q,r)}})
return A.f($async$cY,r)},
eF(a,b){var s,r,q,p=A.t(t.N,t.X)
for(s=a.gab(),s=s.gu(s);s.k();){r=s.gn()
q=r.a
if(q==="id")continue
p.j(0,q,r.b)}p.kj("archived",new A.q_())
return p},
li(a,b,c){var s,r,q,p,o
if(a==null)return B.cK
s=t.N
r=A.aN(s)
s=A.d2(a.gK(),s)
s.C(0,new A.T(b,A.n(b).i("T<1>")))
for(s=A.hB(s,s.r,A.n(s).c),q=s.$ti.c;s.k();){p=s.d
if(p==null)p=q.a(p)
if(p==="id")continue
if(!B.t.Z(a.h(0,p),b.h(0,p)))r.t(0,p)}o=A.O(r,r.$ti.c)
B.b.aE(o)
return o},
dU(a){return this.rj(a)},
rj(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$dU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=p.b.a
s=3
return A.a(p.gbk().ah('SELECT * FROM "'+n.a+'" WHERE id = ? LIMIT 1',[a]),$async$dU)
case 3:m=c
l=J.M(m)
if(l.gE(m)){q=null
s=1
break}o=p.a
q=A.cf(n,l.gG(m),o.ay,o.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dU,r)},
ha(a){return this.qZ(a)},
qZ(a){var s=0,r=A.h(t.g0),q,p=this,o,n,m,l,k,j
var $async$ha=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b.a
k=l.a
s=3
return A.a(p.gbk().ah('SELECT w.*, s.store AS s_store, s.record_id AS s_record_id, s.remote_updated AS s_remote_updated, s.last_seen_at AS s_last_seen_at, s.base_updated AS s_base_updated, s.base_hash AS s_base_hash, s.base_json AS s_base_json, s.sync_state AS s_sync_state, s.dirty_fields AS s_dirty_fields, s.local_rev AS s_local_rev, s.access_state AS s_access_state, s.op_id AS s_op_id, s.attempt_count AS s_attempt_count, s.next_retry_at AS s_next_retry_at, s.last_error AS s_last_error, s.schema_ver AS s_schema_ver, o.store AS o_store, o.record_id AS o_record_id, o.kind AS o_kind, o.payload_json AS o_payload_json, o.base_updated AS o_base_updated, o.base_hash AS o_base_hash, o.dirty_fields AS o_dirty_fields, o.op_id AS o_op_id, o.created_at AS o_created_at, o.updated_at AS o_updated_at, o.depends_on_op AS o_depends_on_op FROM "'+k+'" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id LEFT JOIN lp_outbox o ON o.store = ? AND o.record_id = w.id WHERE w.id = ? LIMIT 1',[k,k,a]),$async$ha)
case 3:j=c
k=J.M(j)
if(k.gE(j)){q=B.dh
s=1
break}o=k.gG(j)
k=p.a
n=A.cf(l,o,k.ay,k.ch)
m=o.h(0,"s_sync_state")!=null?A.ju(A.m(["store",o.h(0,"s_store"),"record_id",o.h(0,"s_record_id"),"remote_updated",o.h(0,"s_remote_updated"),"last_seen_at",o.h(0,"s_last_seen_at"),"base_updated",o.h(0,"s_base_updated"),"base_hash",o.h(0,"s_base_hash"),"base_json",o.h(0,"s_base_json"),"sync_state",o.h(0,"s_sync_state"),"dirty_fields",o.h(0,"s_dirty_fields"),"local_rev",o.h(0,"s_local_rev"),"access_state",o.h(0,"s_access_state"),"op_id",o.h(0,"s_op_id"),"attempt_count",o.h(0,"s_attempt_count"),"next_retry_at",o.h(0,"s_next_retry_at"),"last_error",o.h(0,"s_last_error"),"schema_ver",o.h(0,"s_schema_ver")],t.N,t.X)):null
q=new A.eV(n,m,o.h(0,"o_kind")!=null?A.mw(A.m(["store",o.h(0,"o_store"),"record_id",o.h(0,"o_record_id"),"kind",o.h(0,"o_kind"),"payload_json",o.h(0,"o_payload_json"),"base_updated",o.h(0,"o_base_updated"),"base_hash",o.h(0,"o_base_hash"),"dirty_fields",o.h(0,"o_dirty_fields"),"op_id",o.h(0,"o_op_id"),"created_at",o.h(0,"o_created_at"),"updated_at",o.h(0,"o_updated_at"),"depends_on_op",o.h(0,"o_depends_on_op")],t.N,t.X)):null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ha,r)},
bT(a){return this.nT(a)},
nT(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k,j,i,h,g
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
return A.a(p.gbk().ah("SELECT w.*, s.schema_ver AS lp_schema_ver FROM "+l+" w LEFT JOIN lp_sync_row s ON s.store = ? AND s.record_id = w.id WHERE w.id = ? LIMIT 1",[l,a]),$async$bT)
case 6:s=4
break
case 5:s=7
return A.a(p.gbk().ah('SELECT * FROM "'+l+'" WHERE id = ? LIMIT 1',[a]),$async$bT)
case 7:case 4:k=c
l=J.M(k)
if(l.gE(k)){if(g)o.e.kG(a,null)
q=null
s=1
break}j=l.gG(k)
l=p.a
i=A.cf(n,j,l.ay,l.ch)
h=A.bd(j.h(0,"lp_schema_ver"))
if(h==null)h=1
if(h<m)i=A.LE(n,i,h,m)
if(g)o.e.kG(a,i)
q=i
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bT,r)},
hm(a,b,c,d){var s,r,q,p,o,n,m
for(s=this.b.a.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
n=b.h(0,o)
if(p.c&&n==null)throw A.b(A.ay('Field "'+o+'" is required.',o))
if(n==null)continue
m=A.CY(p,n)
if(m!=null)throw A.b(A.ay(A.HC(p,m),o))}s=this.a.z
if(d>s)throw A.b(A.ay("Document exceeds max size ("+d+" > "+s+" bytes).",null))}}
A.qb.prototype={
$1(a){return a.c3(this.a.b.a.a).ii(this.b)},
$S:4}
A.qe.prototype={
$1(a){return a.c3(this.a.b.a.a).nc(this.b)},
$S:4}
A.qa.prototype={
$1(a){return a.c3(this.a.b.a.a).mZ(this.b)},
$S:4}
A.qd.prototype={
$1(a){return a.c3(this.a.b.a.a).nd(this.b)},
$S:4}
A.q8.prototype={
$1(a){return a.c3(this.a.b.a.a).mW(this.b,this.c)},
$S:4}
A.q7.prototype={
$1(a){return a.c3(this.a.b.a.a).mX(this.b)},
$S:4}
A.q6.prototype={
$1(a){return a.c3(this.a.b.a.a).mi(this.b)},
$S:4}
A.qc.prototype={
$1(a){return a.c3(this.a.b.a.a).n6(this.b)},
$S:4}
A.q9.prototype={
$1(a){return a.c3(this.a.b.a.a).ki(this.b)},
$S:4}
A.q1.prototype={
nj(a){var s=0,r=A.h(t.b),q,p=this,o,n,m,l,k
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
return A.a(p.b.dU(a),$async$$1)
case 8:s=6
break
case 7:c=m
case 6:q=k.a=c
s=1
break
case 4:s=9
return A.a(p.b.ha(a),$async$$1)
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
$1(a){return this.nj(a)},
$S:128}
A.q0.prototype={
$1(a){return a!=="id"},
$S:9}
A.q5.prototype={
$1(a){return a>1},
$S:129}
A.q4.prototype={
$1(a){return a!=="id"},
$S:9}
A.q3.prototype={
$2(a,b){var s=t.N
return B.b.B(A.ae(b,"("+B.b.B(A.ae(a,"?",!1,s),", ")+")",!1,s),", ")},
$S:130}
A.q2.prototype={
$1(a){return a!=="id"},
$S:9}
A.pZ.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.q_.prototype={
$0(){return!1},
$S:58}
A.ho.prototype={$iG:1}
A.o8.prototype={}
A.pr.prototype={
aV(a,b){var s=this.a.X(new A.ps(a,b),b)
this.a=s.bS(new A.pt(b),new A.pu(),t.H)
return s}}
A.ps.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("A<0>(~)")}}
A.pt.prototype={
$1(a){},
$S(){return this.a.i("W(0)")}}
A.pu.prototype={
$2(a,b){},
$S:12}
A.bg.prototype={
gn4(){var s=this.e
return s.gm(s)===1&&J.v(s.h(0,"__lp_deleted__"),!0)}}
A.qr.prototype={
$0(){var s,r,q,p,o,n,m,l="base_json",k="lp_conflicts",j="local_json",i="remote_json",h="dirty_local",g="dirty_remote",f="resolved_json",e=this.a,d=e.h(0,"store")
d.toString
A.D(d)
s=e.h(0,"record_id")
s.toString
A.D(s)
r=A.B2(e.h(0,l),l,k)
q=A.B2(e.h(0,j),j,k)
p=A.B2(e.h(0,i),i,k)
o=A.G3(e.h(0,h),h,k)
n=A.G3(e.h(0,g),g,k)
m=e.h(0,"detected_at")
m.toString
A.ao(m)
return new A.bg(d,s,r,q,p,o,n,m,e.h(0,f)!=null?A.B2(e.h(0,f),f,k):null)},
$S:132}
A.qs.prototype={
fe(a){return this.vG(a)},
vG(a){var s=0,r=A.h(t.ba),q,p=this,o,n,m
var $async$fe=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=a!=null
n=o?"store = ? AND resolved_json IS NULL":"resolved_json IS NULL"
o=o?[a]:null
m=J
s=3
return A.a(p.a.r.wa("lp_conflicts","detected_at ASC",n,o),$async$fe)
case 3:o=m.bM(c,A.M3(),t.n8)
o=A.O(o,o.$ti.i("Z.E"))
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fe,r)},
du(a,b){return this.nU(a,b)},
nU(a,b){var s=0,r=A.h(t.ma),q,p=this,o,n
var $async$du=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.aI("lp_conflicts",1,"store = ? AND record_id = ?",[a,b]),$async$du)
case 3:o=d
n=J.M(o)
if(n.gE(o)){q=null
s=1
break}q=A.BO(n.gG(o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$du,r)},
wS(a){var s={},r=A.CB()
s.a=null
r.sjU(A.dO(new A.qv(s,r),new A.qw(s,this,a,new A.qx(this,r,a)),t.ba))
return r.bu().gcQ()},
en(a,b,c){return this.wy(a,b,c)},
wy(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$en=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(c)
s=2
return A.a(p.a2(new A.qt(q,c,a,o.a,o,b),t.P),$async$en)
case 2:return A.e(null,r)}})
return A.f($async$en,r)},
eW(a,b){return this.tr(a,b)},
tr(a,b){var s=0,r=A.h(t.H),q=this,p
var $async$eW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=2
return A.a(q.du(a,b),$async$eW)
case 2:p=d
if(p==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=3
return A.a(q.en(b,p.d,a),$async$eW)
case 3:return A.e(null,r)}})
return A.f($async$eW,r)},
e_(a,b){return this.ts(a,b)},
ts(a,b){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$e_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.du(a,b),$async$e_)
case 3:n=d
if(n==null)throw A.b(A.x("No conflict found for "+a+"/"+b))
s=n.gn4()?4:5
break
case 4:o=p.a
if(A.nC(o)!=null)A.w(A.x(u.L))
s=6
return A.a(new A.fg(o,o.aw(a),null,null).ki(b),$async$e_)
case 6:s=1
break
case 5:s=7
return A.a(p.en(b,n.e,a),$async$e_)
case 7:case 1:return A.e(q,r)}})
return A.f($async$e_,r)}}
A.qx.prototype={
$0(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=n.b
if(i.bu().gi4()){s=1
break}p=4
s=7
return A.a(n.a.fe(n.c),$async$$0)
case 7:m=b
if(!i.bu().gi4())J.aL(i.bu(),m)
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.F(h)
k=A.ai(h)
if(!i.bu().gi4())i.bu().bx(l,k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:3}
A.qw.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.b.a.a$.a
o=q.d
q.a.a=new A.b0(p,A.n(p).i("b0<1>")).aS(new A.qu(q.c,o))
s=2
return A.a(o.$0(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qu.prototype={
$1(a){var s,r=this.a
if(r!=null){s=a.a
r=s===r||s==="lp_conflicts"}else r=!0
if(r)this.b.$0()},
$S:28}
A.qv.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.a
p=p==null?null:p.D()
s=2
return A.a(p instanceof A.u?p:A.bv(p,t.H),$async$$0)
case 2:s=3
return A.a(q.b.bu().q(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.qt.prototype={
$1(a){return this.nk(a)},
nk(a6){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$$1=A.c(function(a7,a8){if(a7===1)return A.d(a8,r)
for(;;)switch(s){case 0:a0=a6.b
a1=p.b
a2=p.c
s=3
return A.a(a0.aI("lp_conflicts",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 3:a3=a8
a4=J.M(a3)
if(a4.gE(a3))throw A.b(A.x("No conflict found for "+a1+"/"+a2))
o=A.BO(a4.gG(a3))
n=o.gn4()
m=n?null:A.ak(o.e)
l=n?"":A.as(B.o.v(B.e.v(A.ak(A.bf(p.d,o.e)))).a)
a4=p.e.a.a
a5=J
s=6
return A.a(a0.aI(a4,1,"id = ?",[a2]),$async$$1)
case 6:s=a5.by(a8)?4:5
break
case 4:s=7
return A.a(a0.Y("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 7:s=8
return A.a(a0.Y("lp_sync_row","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 8:s=9
return A.a(a0.Y("lp_outbox","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 9:a4=t.N
a6.a_(new A.a1(a1,A.ar([a2],a4)))
a6.a_(new A.a1("lp_conflicts",A.ar([a2],a4)))
s=1
break
case 5:s=10
return A.a(a0.aI("lp_sync_row",1,"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 10:k=a8
j=null
if(!n){i=J.M(k)
if(i.gW(k)){h=A.a6(J.S(i.gG(k),"base_updated"))
i=h==null?A.a6(J.S(i.gG(k),"remote_updated")):h
j=i}}s=11
return A.a(a0.Y("lp_conflicts","store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 11:i=t.N
h=t.X
g=A.cJ(p.f,i,h)
g.j(0,"id",a2)
f=J.v(g.h(0,"archived"),!0)
e=p.d
s=12
return A.a(a0.L(a4,A.dm(e,f,null,null,a2,g),"id = ?",[a2]),$async$$1)
case 12:a4=A.bI(n?B.j:o.e,g)
d=A.O(a4,A.n(a4).c)
B.b.aE(d)
c=A.ak(A.bf(e,g))
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
a4===$&&A.y()
s=18
return A.a(a0.aC(0,"lp_outbox",A.FY(l,j,b,e,h,a4.fH(),c,a2,a1,b)),$async$$1)
case 18:s=15
break
case 16:s=19
return A.a(a0.L("lp_outbox",A.m(["kind",f?"archive":"upsert","payload_json",c,"base_updated",j,"base_hash",l],i,h),"store = ? AND record_id = ?",[a1,a2]),$async$$1)
case 19:case 15:a6.a_(new A.a1(a1,A.ar([a2],i)))
a6.a_(new A.a1("lp_conflicts",A.ar([a2],i)))
a4=o.d
a=A.bI(a4,g)
a.H(0,"id")
a6.bb(new A.aS(a1,a2,B.ac,B.A,a4,g,a))
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.nf.prototype={
az(){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$az=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:if(n.z){s=1
break}m=++n.db
if((n.ax.c&4)!==0||(n.ay.c&4)!==0){n.ax=A.dO(null,null,t.n6)
n.ay=A.dO(null,null,t.em)}n.z=!0
s=3
return A.a(n.aN(B.dr),$async$az)
case 3:p=5
l=n.b
s=8
return A.a(l.ie(),$async$az)
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
n.fr=new A.b0(l,A.n(l).i("b0<1>")).aS(n.gvk())
l=n.b.ax
n.fx=new A.b0(l,A.n(l).i("b0<1>")).aS(n.gvi())
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
case 12:n.fy=A.Eo(B.av,new A.xa(n))
s=14
return A.a(n.aN(n.dG()),$async$az)
case 14:s=n.z&&m===n.db?15:16
break
case 15:n.p1.push("cycle")
s=17
return A.a(n.d4(),$async$az)
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
return A.a(o instanceof A.u?o:A.bv(o,n),$async$aF)
case 7:o=p.fx
o=o==null?null:o.D()
s=8
return A.a(o instanceof A.u?o:A.bv(o,n),$async$aF)
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
dG(){if(this.at)return B.bj
if(this.Q)return B.bh
if(this.as)return B.aC
return B.bi},
aN(a){return this.t2(a)},
t2(a){var s=0,r=A.h(t.H),q,p=this,o
var $async$aN=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(!p.z){p.y=a
s=1
break}p.y=a
o=p.ax
if((o.c&4)===0)o.t(0,a)
s=3
return A.a(p.pG(),$async$aN)
case 3:case 1:return A.e(q,r)}})
return A.f($async$aN,r)},
pG(){return this.p2=this.p2.X(new A.x2(this),t.H)},
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
return A.a(g.hD(),$async$fV)
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
vl(a){var s=this
if(!s.z||s.at||s.as||s.Q)return
s.p1.push("push")
s.rE(B.ae)},
vj(a){var s,r,q=this
if(!q.z)return
s=a.a
if(!q.a.dy.J(s))return
r=a.c
if(r!=null&&a.b===B.a9){q.p1.push("fast:"+s)
q.dx=q.dx.X(new A.x8(q,r),t.H)
return}q.p1.push("pull:"+s)
q.hh(B.ae,A.k([s],t.s))},
h_(a){return this.pO(a)},
pO(a){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i
var $async$h_=A.c(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.db
if(!n.z||n.at||n.as||n.Q){n.hh(B.ae,A.k([a.b],t.s))
s=1
break}m=!1
p=4
l=n.f
l===$&&A.y()
s=7
return A.a(l.hP(a),$async$h_)
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
break}if(!m)n.hh(B.ae,A.k([a.b],t.s))
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$h_,r)},
vt(){if(!this.z)return
this.p1.push("cycle")
this.d4()},
hh(a,b){var s=this,r=s.go
if(r!=null)r.D()
if(b==null)s.k2=!0
else s.k3.C(0,b)
s.go=A.cR(a,new A.x7(s))},
rE(a){return this.hh(a,null)},
rD(a){var s=this.id
if(s!=null)s.D()
this.id=A.cR(B.D,new A.x6(this,a))},
jj(){this.as=!0
this.aN(B.aC)
A.ix(this.d,t.H)},
ef(){var s=0,r=A.h(t.H),q,p=this,o
var $async$ef=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.as){s=1
break}p.as=!1
p.cy=!0
o=p.a.cx
o===$&&A.y()
s=3
return A.a(o.ww(),$async$ef)
case 3:s=4
return A.a(p.aN(p.dG()),$async$ef)
case 4:p.p1.push("cycle")
s=5
return A.a(p.d4(),$async$ef)
case 5:case 1:return A.e(q,r)}})
return A.f($async$ef,r)},
fM(a){return this.o5(a)},
o5(a){var s=0,r=A.h(t.H),q=this,p
var $async$fM=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q.Q=!a
s=a?2:4
break
case 2:p=q.k1
if(p!=null)p.D()
q.k1=A.cR(B.au,new A.x9(q))
s=3
break
case 4:s=5
return A.a(q.aN(B.bh),$async$fM)
case 5:case 3:return A.e(null,r)}})
return A.f($async$fM,r)},
bd(){var s=0,r=A.h(t.H),q=this
var $async$bd=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:q.at=!0
s=2
return A.a(q.aN(B.bj),$async$bd)
case 2:return A.e(null,r)}})
return A.f($async$bd,r)},
b1(){var s=0,r=A.h(t.H),q,p=this
var $async$b1=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.at){s=1
break}p.at=!1
s=3
return A.a(p.aN(p.dG()),$async$b1)
case 3:p.p1.push("cycle")
s=4
return A.a(p.d4(),$async$b1)
case 4:case 1:return A.e(q,r)}})
return A.f($async$b1,r)},
js(a){var s,r,q=this
if(a==null){s=q.id
if(s!=null)s.D()}s=t.mv
r=q.k4.X(new A.x3(q,a),s)
q.k4=r.bS(new A.x4(),new A.x5(),s)
return r},
d4(){return this.js(null)},
b6(a){return this.pD(a)},
pD(b8){var s=0,r=A.h(t.mv),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7
var $async$b6=A.c(function(b9,c0){if(b9===1){o.push(c0)
s=p}for(;;)switch(s){case 0:b2=n.db
b3=n.z
if(!b3){q=B.O
s=1
break}s=n.at||n.as||n.Q?3:4
break
case 3:s=5
return A.a(n.aN(n.dG()),$async$b6)
case 5:q=B.O
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
return A.a(n.aN(B.ds),$async$b6)
case 6:b3=b8==null
if(b3){a4=n.a.dy
a5=A.n(a4).i("T<1>")
a6=A.O(new A.T(a4,a5),a5.i("o.E"))}else a6=b8
a4=a6.length,a7=0
case 7:if(!(a7<a6.length)){s=9
break}h=a6[a7]
p=11
a5=n.f
a5===$&&A.y()
s=14
return A.a(a5.di(h),$async$b6)
case 14:g=c0
J.bY(m,h,g.b)
if(g.f&&g.b>0)J.aL(i,h)
p=2
s=13
break
case 11:p=10
b4=o.pop()
a5=A.F(b4)
if(a5 instanceof A.c0){n.jj()
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
return A.a(b3.dB(e),$async$b6)
case 24:d=c0
for(b3=J.E(d);b3.k();){c=b3.gn()
a4=c.a
a5=J.S(l,c.a)
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
return A.a(n.aN(B.dt),$async$b6)
case 25:a=B.a2
s=j?26:28
break
case 26:if(n.ch==null)n.ch="pull failed; push deferred"
s=27
break
case 28:p=30
b3=n.w
b3===$&&A.y()
s=33
return A.a(b3.fp(),$async$b6)
case 33:a=c0
s=a.f&&n.ch==null?34:35
break
case 34:s=36
return A.a(n.a.r.b0("SELECT last_error FROM lp_sync_row WHERE last_error IS NOT NULL ORDER BY local_rev DESC, rowid DESC LIMIT 1"),$async$b6)
case 36:a0=c0
if(J.e8(a0)&&typeof J.S(J.bZ(a0),"last_error")=="string"){b3=J.S(J.bZ(a0),"last_error")
b3.toString
n.ch=A.D(b3)}else n.ch="push failed"
case 35:p=2
s=32
break
case 30:p=29
b6=o.pop()
b3=A.F(b6)
if(b3 instanceof A.c0)n.jj()
else if(b3 instanceof A.bu){a1=b3
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
return A.a(b3.br(),$async$b6)
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
break}if(J.ap(i)!==0)n.rD(i)
a9=k||a.f
b0=new A.aW(A.lo(n.c.ay.$0(),0,!1),0,!1)
n.CW=b0
if(!a9){n.cx=b0
n.ch=null}b1=n.dG()
s=42
return A.a(n.aN(a9&&b1===B.bi?B.du:b1),$async$b6)
case 42:q=n.ok=new A.bm(m,l,a.a,a.b,a.d,a.e,a9)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$b6,r)}}
A.xa.prototype={
$1(a){return this.a.vt()},
$S:52}
A.x2.prototype={
$1(a){return this.a.fV()},
$S:29}
A.x8.prototype={
$1(a){return this.a.h_(this.b)},
$S:29}
A.x7.prototype={
$0(){var s=this.a,r=s.k2,q=s.k3,p=A.O(q,A.n(q).c)
s.k2=!1
if(q.a>0){q.b=q.c=q.d=q.e=q.f=null
q.a=0
q.jg()}if(r||p.length===0)s.d4()
else s.js(p)},
$S:0}
A.x6.prototype={
$0(){var s=this.a
s.id=null
if(!s.z)return
s.js(this.b)},
$S:0}
A.x9.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
s=2
return A.a(p.aN(p.dG()),$async$$0)
case 2:p.p1.push("cycle")
s=3
return A.a(p.d4(),$async$$0)
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.x3.prototype={
$1(a){return this.a.b6(this.b)},
$S:136}
A.x4.prototype={
$1(a){return B.O},
$S:137}
A.x5.prototype={
$1(a){return B.O},
$S:138}
A.d3.prototype={
l(a){return"MapFailure: "+this.a},
$iG:1}
A.ew.prototype={}
A.AY.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.AZ.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.uN.prototype={}
A.dH.prototype={}
A.me.prototype={}
A.zN.prototype={}
A.zL.prototype={}
A.y4.prototype={}
A.uU.prototype={
$1(a){var s=this,r=s.a
r.j(0,s.b,a)
return A.uT(s.z,s.e,s.Q,s.as,s.d+1,s.c,s.f,r,s.w,s.y,s.r,s.at,s.x)},
$S:140}
A.uO.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.uP.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.uQ.prototype={
$1(a){return typeof a=="string"},
$S:18}
A.uR.prototype={
$1(a){return a instanceof A.u?a:A.b8(a,t.X)},
$S:141}
A.uS.prototype={
$1(a){var s,r,q,p,o,n,m
for(s=this.a,s=A.hB(s,s.r,A.n(s).c),r=this.b,q=J.M(a),p=s.$ti.c,o=0;s.k();o=m){n=s.d
if(n==null)n=p.a(n)
m=o+1
r.j(0,n,q.h(a,o))}return r},
$S:142}
A.va.prototype={
f1(a){return this.uE(a)},
uE(a){var s=0,r=A.h(t.hg),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d
var $async$f1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=p.a
d=e.CW.$0()
e=e.r
s=3
return A.a(e.wc("lp_op_queue",a*4+16,"seq ASC","state IN ('pending','failed') AND next_retry_at <= ?",[d]),$async$f1)
case 3:o=c
n=t.ox
m=A.k([],n)
for(l=J.E(o);l.k();)m.push(A.IB(l.gn()))
l=A.aN(t.N)
for(k=m.length,j=0;j<m.length;m.length===k||(0,A.q)(m),++j){i=m[j].z
if(i!=null)l.t(0,i)}s=4
return A.a(A.kv(e,l),$async$f1)
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
return A.f($async$f1,r)},
mT(a){return this.a.a2(new A.vc(a),t.H)},
vQ(a,b,c,d){return this.a.a2(new A.vd(c,d,b,a),t.H)}}
A.vc.prototype={
$1(a){return this.ny(a)},
ny(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","done"],t.N,t.X),"op_id = ?",[q.a]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vd.prototype={
$1(a){return this.nz(a)},
nz(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_op_queue",A.m(["state","failed","attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c],t.N,t.X),"op_id = ?",[q.d]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.pE.prototype={}
A.iM.prototype={}
A.je.prototype={}
A.vf.prototype={
fH(){var s,r,q,p="0123456789abcdef",o=this.b
for(s=0,r="";s<4;++s){q=o.cH(4294967296)
r=r+p[q>>>28&15]+p[q>>>24&15]+p[q>>>20&15]+p[q>>>16&15]+p[q>>>12&15]+p[q>>>8&15]+p[q>>>4&15]+p[q&15]}return r.charCodeAt(0)==0?r:r},
em(a,b,c){return this.wl(a,b,c)},
wl(a,b,c){var s=0,r=A.h(t.dY),q,p,o
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
bQ(a,b,c){return this.wn(a,b,c)},
wn(a,b,c){var s=0,r=A.h(t.f8),q,p,o
var $async$bQ=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=3
return A.a(a.aI("lp_sync_row",1,"store = ? AND record_id = ?",[b,c]),$async$bQ)
case 3:p=e
o=J.M(p)
q=o.gE(p)?null:A.ju(o.gG(p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bQ,r)},
bn(a,b,c,d,e,f,g,h,i,j,k,l){return this.tC(a,b,c,d,e,f,g,h,i,j,k,l)},
tC(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s=0,r=A.h(t.jD),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bn=A.c(function(b7,b8){if(b7===1)return A.d(b8,r)
for(;;)switch(s){case 0:a1=b6.a
a2=a1.a
a3=b5==null
a4=!a3
if(a4&&b5.w===B.a4)throw A.b(A.DB("Record "+a2+"/"+a9+u.W))
o=a4&&b5.w===B.ao
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
return A.a(a8.Y("lp_outbox","store = ? AND record_id = ?",[a2,a9]),$async$bn)
case 5:s=6
return A.a(a8.Y("lp_sync_row","store = ? AND record_id = ?",[a2,a9]),$async$bn)
case 6:s=7
return A.a(p.hn(a8,a2,a9),$async$bn)
case 7:s=8
return A.a(a8.Y(a2,"id = ?",[a9]),$async$bn)
case 8:q=B.bN
s=1
break
case 4:k=p.a.CW.$0()
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
b=B.h.a6(d,null)
a=a3?null:b5.y
if(a==null)a=0
s=a4?9:11
break
case 9:f=A.i3(B.Y)
e=B.b.B(A.ae(11,"?",!1,l),", ")
n.toString
s=12
return A.a(a8.aD("INSERT INTO lp_outbox ("+f+") VALUES ("+e+")",A.Gg(h,i,c,null,b,n,j,b3,a9,a2,k)),$async$bn)
case 12:s=10
break
case 11:s=13
return A.a(a8.aD('UPDATE lp_outbox SET "kind" = ?, "payload_json" = ?, "dirty_fields" = ?, "updated_at" = ? WHERE "store" = ? AND "record_id" = ?',[n.b,b3,b,k,a2,a9]),$async$bn)
case 13:case 10:f=A.k(["sync_state","dirty_fields","local_rev","op_id","schema_ver"],t.s)
if(a4)B.b.C(f,B.cE)
if(o)B.b.C(f,B.cs)
s=a3?14:16
break
case 14:a3=A.i3(B.X)
l=B.b.B(A.ae(16,"?",!1,l),", ")
s=17
return A.a(a8.aD("INSERT INTO lp_sync_row ("+a3+") VALUES ("+l+")",A.Gs(B.a5,0,h,g,i,b,null,null,a+1,0,j,a9,null,a1.b,a2,B.G)),$async$bn)
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
return A.a(a8.aD(a3.charCodeAt(0)==0?a3:a3,a1),$async$bn)
case 18:case 15:q=new A.iM()
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bn,r)},
hn(a,b,c){return this.ta(a,b,c)},
ta(a,b,c){var s=0,r=A.h(t.H)
var $async$hn=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:s=2
return A.a(A.cA(a,b,c,!1),$async$hn)
case 2:return A.e(null,r)}})
return A.f($async$hn,r)},
f2(a,b){return this.uF(a,b)},
uF(a,b){var s=0,r=A.h(t.a6),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$f2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=p.a.r
f=new A.a2("s.sync_state NOT IN ('error','quarantine','conflict','blocked') AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?)").l(0)
e=A.O([b],t.X)
e.push(a*4+16)
s=3
return A.a(g.ah("SELECT o.* FROM lp_outbox o JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id WHERE "+f+" ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?",e),$async$f2)
case 3:o=d
f=J.M(o)
if(f.gE(o)){q=B.cI
s=1
break}e=t.my
n=A.k([],e)
for(f=f.gu(o);f.k();)n.push(A.mw(f.gn()))
f=A.aN(t.N)
for(m=n.length,l=0;l<n.length;n.length===m||(0,A.q)(n),++l){k=n[l].z
if(k!=null)f.t(0,k)}s=4
return A.a(A.kv(g,f),$async$f2)
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
return A.f($async$f2,r)},
kH(a){if(a.length===0)return A.b8(null,t.H)
return this.a.a2(new A.vl(this,a),t.H)},
aH(a,b){return this.rQ(a,b)},
rQ(a6,a7){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aH=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:b=a6.b
a=a7.a
a0=a.a
a1=a.b
a2=p.a
a3=a2.aw(a0).a
a4=a2.CW.$0()
a5=a7.e
s=a5!=null?3:4
break
case 3:s=5
return A.a(b.aI("lp_outbox",1,"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 5:o=a9
n=J.M(o)
s=!(n.gW(o)&&!J.v(J.S(n.gG(o),"payload_json"),a.d))?6:7
break
case 6:a=a3.a
s=8
return A.a(b.aI(a,1,"id = ?",[a1]),$async$aH)
case 8:m=a9
n=J.M(m)
l=n.gW(m)?A.cf(a3,n.gG(m),a2.ay,a2.ch):null
s=9
return A.a(b.L(a,A.dm(a3,J.v(a5.h(0,"archived"),!0),a2.ay,a2.ch,a1,a5),"id = ?",[a1]),$async$aH)
case 9:a6.a_(new A.a1(a0,A.ar([a1],t.N)))
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
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 13:s=14
return A.a(p.d0(b,a0,a1,a7.c,a4),$async$aH)
case 14:a6.a_(new A.a1(a0,A.ar([a1],t.N)))
s=1
break
case 12:n=a2.ay
a2=a2.ch
i=A.cf(a3,a5.gG(j),n,a2)
h=A.as(B.o.v(B.e.v(A.ak(A.bf(a3,i)))).a)
a5=a7.b
g=A.as(B.o.v(B.e.v(a5)).a)
f=a7.d
e=h===f
s=e&&g===f?15:17
break
case 15:s=18
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 18:s=19
return A.a(p.d0(b,a0,a1,a7.c,a4),$async$aH)
case 19:a6.a_(new A.a1(a0,A.ar([a1],t.N)))
s=16
break
case 17:s=e?20:22
break
case 20:d=B.h.av(a5,null)
a5=t.N
f=t.X
c=t.f.b(d)?A.ba(d,a5,f):A.t(a5,f)
s=23
return A.a(b.L(a,A.dm(a3,J.v(c.h(0,"archived"),!0),n,a2,a1,c),"id = ?",[a1]),$async$aH)
case 23:s=24
return A.a(b.Y("lp_outbox","store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 24:s=25
return A.a(p.d0(b,a0,a1,a7.c,a4),$async$aH)
case 25:a6.a_(new A.a1(a0,A.ar([a1],a5)))
k=A.bI(i,c)
k.H(0,"id")
a6.bb(new A.aS(a0,a1,B.ac,B.A,i,c,k))
s=21
break
case 22:g=A.as(B.o.v(B.e.v(a5)).a)
a2=a7.c
n=t.N
f=t.X
s=26
return A.a(b.L("lp_sync_row",A.m(["base_json",a5,"base_hash",g,"base_updated",a2,"remote_updated",a2,"last_seen_at",a4,"access_state","visible"],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 26:s=27
return A.a(b.L("lp_outbox",A.m(["base_updated",a2,"base_hash",g],n,f),"store = ? AND record_id = ?",[a0,a1]),$async$aH)
case 27:s=28
return A.a(b.L(a,A.m(["hidden",0],n,f),"id = ?",[a1]),$async$aH)
case 28:a6.a_(new A.a1(a0,A.ar([a1],n)))
case 21:case 16:case 1:return A.e(q,r)}})
return A.f($async$aH,r)},
d0(a,b,c,d,e){return this.qo(a,b,c,d,e)},
qo(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o
var $async$d0=A.c(function(f,g){if(f===1)return A.d(g,r)
for(;;)switch(s){case 0:p=t.N
o=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["sync_state","clean","base_updated",null,"base_hash",null,"base_json",null,"dirty_fields","[]","remote_updated",d,"op_id",null,"attempt_count",0,"next_retry_at",0,"last_error",null,"last_seen_at",e,"access_state","visible"],p,o),"store = ? AND record_id = ?",[b,c]),$async$d0)
case 2:s=3
return A.a(a.L(q.a.aw(b).a.a,A.m(["hidden",0],p,o),"id = ?",[c]),$async$d0)
case 3:return A.e(null,r)}})
return A.f($async$d0,r)},
wo(a,b,c,d,e){return this.a.a2(new A.vj(c,e,d,B.G,a,b),t.H)},
mS(a,b,c,d,e,f){return this.a.a2(new A.vi(this,c,f,b,a,d,e),t.H)},
fg(a,b,c,d,e){return this.mS(a,b,c,d,B.ao,e)},
mR(a,b,c){return this.a.a2(new A.vh(a,c,b),t.H)},
ww(){return this.a.a2(new A.vk(null),t.S)},
eX(a,b,c,d,e,f,g){return this.tz(a,b,c,d,e,f,g)},
tz(a,b,c,d,e,f,g){var s=0,r=A.h(t.H),q,p
var $async$eX=A.c(function(h,i){if(h===1)return A.d(i,r)
for(;;)switch(s){case 0:q=t.N
p=t.X
s=2
return A.a(a.L("lp_sync_row",A.m(["base_json",e,"base_hash",d,"base_updated",f],q,p),"store = ? AND record_id = ?",[b,c]),$async$eX)
case 2:p=A.t(q,p)
p.j(0,"base_updated",f)
p.j(0,"base_hash",d)
p.j(0,"payload_json",g)
s=3
return A.a(a.L("lp_outbox",p,"store = ? AND record_id = ?",[b,c]),$async$eX)
case 3:return A.e(null,r)}})
return A.f($async$eX,r)}}
A.vl.prototype={
$1(a){return this.nE(a)},
nE(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
A.vj.prototype={
$1(a){return this.nC(a)},
nC(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["attempt_count",q.a,"next_retry_at",q.b,"last_error",q.c,"sync_state",q.d.b],t.N,t.X),"store = ? AND record_id = ?",[q.e,q.f]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vi.prototype={
$1(a){return this.nB(a)},
nB(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
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
A.vh.prototype={
$1(a){return this.nA(a)},
nA(a){var s=0,r=A.h(t.H),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.b.L("lp_sync_row",A.m(["sync_state","blocked","last_error",q.a,"next_retry_at",0],t.N,t.X),"store = ? AND record_id = ?",[q.b,q.c]),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:4}
A.vk.prototype={
$1(a){return this.nD(a)},
nD(a){var s=0,r=A.h(t.S),q,p
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=A.k(["blocked"],t.s)
q=a.b.L("lp_sync_row",A.m(["sync_state","dirty","last_error",null,"next_retry_at",0],t.N,t.X),"sync_state = ?",p)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:143}
A.e9.prototype={
a4(){return"ApplyResult."+this.b}}
A.mH.prototype={}
A.vV.prototype={
di(a){return this.w7(a)},
w7(b4){var s=0,r=A.h(t.ot),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$di=A.c(function(b5,b6){if(b5===1)return A.d(b6,r)
for(;;)switch(s){case 0:a8={}
b0=a8
s=3
return A.a(p.d.ij(b4),$async$di)
case 3:a9=b0.a=b6
if(a9==null)o="1970-01-01 00:00:00.000Z"
else{n=a9.a
m=$.H2().e8(n)
if(m==null)A.w(A.bt('Bad timestamp "'+n+'"'))
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
if(i<1||i>12||g>23||f>59||e>59)A.w(A.bt('Bad timestamp "'+n+'"'))
l=i===12
k=l?j+1:j
k=A.BP(k,l?1:i+1,0,0,0,0,0)
if(h<1||h>A.vM(k))A.w(A.bt('Bad timestamp "'+n+'"'))
o=A.Mn(A.BP(j,i,h,g,f,e,d).iO(-5e6))}c=a8.b=a8.c=a8.d=0
b=B.c.iq(B.c.bM(200,1,500))
n=p.f,l=t.P,k=p.a,a=k.y,k=k.dy,a0=p.b,a1='No store "'+b4+'" registered in this LocalPocket.',a2=null
case 4:if(!(a3=!1,!0)){s=5
break}a4=a0.y
a4===$&&A.y()
s=6
return A.a(a4.ff(b4,null,a2,o,null,b),$async$di)
case 6:a5=b6
a4=J.M(a5)
if(a4.gE(a5)){s=5
break}++a.ax
a6=p.qq(a5)
a7=k.h(0,b4)
if(a7==null)A.w(A.x(a1))
b0=n
b1=A
b2=a8
b3=b4
s=8
return A.a(A.D3(a7.a,a5),$async$di)
case 8:s=7
return A.a(b0.aV(new b1.w2(b2,p,b3,b6,a6),l),$async$di)
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
return A.f($async$di,r)},
m8(a,b){var s=B.a.a0(a.c,b.a)
if(s<0)return!0
if(s>0)return!1
return B.a.a0(a.a,b.b)<=0},
t3(a,b){var s=B.a.a0(a.c,b.c)
if(s!==0)return s>0
return B.a.a0(a.a,b.a)>0},
qq(a){var s,r,q,p=J.aA(a),o=p.gG(a)
for(p=p.bi(a,1),s=p.$ti,p=new A.at(p,p.gm(0),s.i("at<Z.E>")),s=s.i("Z.E");p.k();){r=p.d
q=r==null?s.a(r):r
if(this.t3(q,o))o=q}return o},
hP(a){return this.uU(a)},
uU(a){var s=0,r=A.h(t.y),q,p=this,o
var $async$hP=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o={}
o.a=!1
s=3
return A.a(p.f.aV(new A.vX(o,p,a),t.P),$async$hP)
case 3:q=o.a
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hP,r)},
dc(a,b){return this.uX(a,b)},
uX(b2,b3){var s=0,r=A.h(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$dc=A.c(function(b4,b5){if(b4===1){o.push(b5)
s=p}for(;;)switch(s){case 0:if(b3.length===0){s=1
break}j=A.bD(b3,!0,t.N)
i=n.f,h=t.P,g=t.i7,f=n.a.dy,e=n.b,d=A.a_(j),c=d.c,d=d.i("ct<1>"),b=j.$flags|0,a=t.s,a0=t.g1,a1='No store "'+b2+'" registered in this LocalPocket.'
case 3:if(!(j.length!==0)){s=4
break}a2=new A.ct(j,0,200,d)
a2.iJ(j,0,200,c)
a3=a2.eq(0)
a4=a3.length
b&1&&A.H(j,18)
A.bc(0,a4,j.length)
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
return A.a(a7.bU(l),$async$dc)
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
case 7:s=J.ap(m)!==0?13:14
break
case 13:s=15
return A.a(n.fi(b2,m),$async$dc)
case 15:case 14:if(a5.length===0){s=3
break}a9=f.h(0,b2)
if(a9==null)A.w(A.x(a1))
b0=a9.a
a2=A.k([],g)
for(a7=a5.length,a6=0;a6<a5.length;a5.length===a7||(0,A.q)(a5),++a6)a2.push(A.D4(b0,a5[a6]))
s=16
return A.a(i.aV(new A.vZ(n,a2,b2,b0),h),$async$dc)
case 16:s=3
break
case 4:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$dc,r)},
dP(a,b,c,d){return this.qX(a,b,c,d)},
qX(a1,a2,a3,a4){var s=0,r=A.h(t.hP),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$dP=A.c(function(a5,a6){if(a5===1)return A.d(a6,r)
for(;;)switch(s){case 0:c=t.N
b=A.t(c,t.nw)
a=A.t(c,t.G)
o=p.a,n=o.ay,m=o.ch,o=o.dy,l='No store "'+a2+'" registered in this LocalPocket.',k=0
case 3:if(!(j=a4.length,k<j)){s=5
break}i=k+500
h=B.b.T(a4,k,B.c.bM(i,0,j))
g=B.b.B(A.ae(h.length,"?",!1,c),", ")
j=[a2]
B.b.C(j,h)
a0=J
s=6
return A.a(a1.ah(u.m+g+")",j),$async$dP)
case 6:j=a0.E(a6)
case 7:if(!j.k()){s=8
break}f=j.gn()
e=f.h(0,"record_id")
e.toString
b.j(0,A.D(e),A.ju(f))
s=7
break
case 8:d=o.h(0,a2)
if(d==null)A.w(A.x(l))
a0=J
s=9
return A.a(a1.cf(d.a.a,"id IN ("+g+")",h),$async$dP)
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
return A.f($async$dP,r)},
mh(a,b,c,d,e){return this.a5(a,b,A.D4(this.a.aw(b).a,c),null,!1,d,e)},
tE(a,b,c){return this.mh(a,b,c,null,!1)},
a5(a,b,c,d,e,f,g){return this.tD(a,b,c,d,e,f,g)},
mg(a,b,c){return this.a5(a,b,c,null,!1,null,!1)},
tD(b1,b2,b3,b4,b5,b6,b7){var s=0,r=A.h(t.bG),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$a5=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:a4=b1.b
a5=n.a
a6=a5.aw(b2).a
a7=a6
a8=b3.a
a9=b3.e
s=a9!=null?3:4
break
case 3:s=5
return A.a(n.bH(a4,a7,b2,a8,a9),$async$a5)
case 5:q=B.a7
s=1
break
case 4:a9=b3.b
a9.toString
j=A.bf(a7,a9)
i=b3.c
i.toString
h=b3.d
h.toString
s=a8.b!==b2?6:7
break
case 6:s=8
return A.a(n.bH(a4,a7,b2,a8,'Remote store "'+a8.b+'" does not match requested store "'+b2+'".'),$async$a5)
case 8:q=B.a7
s=1
break
case 7:g=a8.a
f=$.pk()
s=!f.b.test(g)?9:10
break
case 9:s=11
return A.a(n.bH(a4,a7,b2,a8,'Invalid remote record id "'+a8.a+'".'),$async$a5)
case 11:q=B.a7
s=1
break
case 10:s=b7?12:14
break
case 12:e=b6
s=13
break
case 14:g=a5.cx
g===$&&A.y()
s=15
return A.a(g.bQ(a4,b2,a8.a),$async$a5)
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
return A.a(n.e.dh(a4,a8.a,a8.e,b2),$async$a5)
case 22:case 21:s=d==null?23:24
break
case 23:i=a8.a
s=25
return A.a(J.Hh(a4,a6.a,A.dm(a7,J.v(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9)),$async$a5)
case 25:i=a8.a
a5=a8.c
s=26
return A.a(n.d6(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 26:b1.a_(new A.a1(b2,A.ar([a8.a],t.N)))
b=A.bI(B.j,a9)
b.H(0,"id")
b1.bb(new A.aS(b2,a8.a,B.at,B.ab,null,a9,b))
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
return A.a(n.c0(b1,b2,a8.a,a8.c,!1),$async$a5)
case 31:q=B.a8
s=1
break
case 30:i=a8.a
s=32
return A.a(a4.L(a6.a,A.dm(a7,J.v(a9.h(0,"archived"),!0),a5.ay,a5.ch,i,a9),"id = ?",[a8.a]),$async$a5)
case 32:i=a8.a
a5=a8.c
s=33
return A.a(n.d6(a4,b2,i,n.c.ay.$0(),m,a5,B.z,!0),$async$a5)
case 33:b1.a_(new A.a1(b2,A.ar([a8.a],t.N)))
b=A.bI(d,a9)
b.H(0,"id")
b1.bb(new A.aS(b2,a8.a,B.at,B.A,d,a9,b))
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
return A.a(n.c0(b1,b2,a8.a,a8.c,!1),$async$a5)
case 38:q=B.a8
s=1
break
case 37:s=a===B.a4?39:40
break
case 39:s=41
return A.a(n.c0(b1,b2,a8.a,a8.c,!1),$async$a5)
case 41:q=B.a8
s=1
break
case 40:a0=A.bf(a7,d)
s=A.ak(a0)===i?42:43
break
case 42:s=44
return A.a(a4.Y("lp_outbox","store = ? AND record_id = ?",[b2,a8.a]),$async$a5)
case 44:a5=a8.a
a9=a8.c
s=45
return A.a(n.d6(a4,b2,a5,n.c.ay.$0(),m,a9,B.z,!0),$async$a5)
case 45:b1.a_(new A.a1(b2,A.ar([a8.a],t.N)))
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
return A.a(n.bH(a4,a7,b2,a8,'Corrupt base payload for record "'+a8.a+'": '+k.a),$async$a5)
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
a9=A.Ge(l,a0,new A.me(null,B.Z,!1),a8.a,j,b2)
s=54
return A.a(t.fr.b(a9)?a9:A.bv(a9,t.r),$async$a5)
case 54:a2=b9
s=a2.b?55:56
break
case 55:s=57
return A.a(n.eP(a4,b2,a8,a7,m,a0,l,a2),$async$a5)
case 57:s=58
return A.a(n.c0(b1,b2,a8.a,a8.c,!1),$async$a5)
case 58:a5=t.N
b1.a_(new A.a1(b2,A.ar([a8.a],a5)))
b1.a_(new A.a1("lp_conflicts",A.ar([a8.a],a5)))
q=B.bt
s=1
break
case 56:a3=a2.a
a9=a8.a
s=59
return A.a(a4.L(a6.a,A.dm(a7,J.v(a3.h(0,"archived"),!0),a5.ay,a5.ch,a9,a3),"id = ?",[a8.a]),$async$a5)
case 59:a5=a5.cx
a5===$&&A.y()
s=60
return A.a(a5.eX(a4,b2,a8.a,h,i,a8.c,A.ak(a3)),$async$a5)
case 60:s=61
return A.a(n.t0(b1,b2,a8.a,a8.c),$async$a5)
case 61:b1.a_(new A.a1(b2,A.ar([a8.a],t.N)))
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
eP(a,b,c,d,e,f,g,h){return this.rn(a,b,c,d,e,f,g,h)},
rn(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$eP=A.c(function(i,a0){if(i===1)return A.d(a0,r)
for(;;)switch(s){case 0:l=A.bf(d,A.f6(d,c))
k=A.bI(g,f)
j=A.O(k,A.n(k).c)
B.b.aE(j)
k=A.bI(g,l)
p=A.O(k,A.n(k).c)
B.b.aE(p)
k=c.a
o=e==null?null:e.r
if(o==null)o=A.ak(g)
n=t.N
m=t.X
s=2
return A.a(a.ca(0,"lp_conflicts",A.m(["store",b,"record_id",k,"base_json",o,"local_json",A.ak(f),"remote_json",A.ak(l),"dirty_local",B.h.a6(j,null),"dirty_remote",B.h.a6(p,null),"detected_at",q.c.ay.$0()],n,m),B.R),$async$eP)
case 2:s=3
return A.a(a.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ak(l),"base_hash",A.as(B.o.v(B.e.v(A.ak(A.bf(d,l)))).a),"base_updated",c.c],n,m),"store = ? AND record_id = ?",[b,k]),$async$eP)
case 3:return A.e(null,r)}})
return A.f($async$eP,r)},
bH(a,b,c,d,e){return this.rg(a,b,c,d,e)},
rg(a,b,c,d,a0){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$bH=A.c(function(a2,a3){if(a2===1)return A.d(a3,r)
for(;;)switch(s){case 0:e=null
try{e=B.h.a6(d.d,null)}catch(a1){o=t.N
e=B.h.a6(A.m(["raw",d.d.l(0)],o,o),null)}o=q.c
n=o.ay
m=d.a
l=t.N
k=t.X
s=2
return A.a(a.aC(0,"lp_dead_letter",A.m(["at",n.$0(),"kind","map_failure","store",c,"record_id",m,"error",a0,"payload_json",e],l,k)),$async$bH)
case 2:j=q.a.cx
j===$&&A.y()
s=3
return A.a(j.bQ(a,c,m),$async$bH)
case 3:i=a3
j=i==null
h=j?null:i.as
g=(h==null?0:h)+1
f=n.$0()+B.c.N(o.mx(g).a,1000)
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
d6(a,b,c,d,e,f,g,h){return this.t9(a,b,c,d,e,f,g,!0)},
t9(a,b,c,d,e,f,g,h){var s=0,r=A.h(t.H),q=this,p,o
var $async$d6=A.c(function(i,j){if(i===1)return A.d(j,r)
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
return A.a(a.aC(0,"lp_sync_row",o),$async$d6)
case 5:s=3
break
case 4:s=6
return A.a(a.L("lp_sync_row",o,"store = ? AND record_id = ?",[b,c]),$async$d6)
case 6:case 3:return A.e(null,r)}})
return A.f($async$d6,r)},
c0(a,b,c,d,e){return this.t1(a,b,c,d,e)},
t0(a,b,c,d){return this.c0(a,b,c,d,!0)},
t1(a,b,c,d,e){var s=0,r=A.h(t.H),q=this,p,o,n,m
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
case 3:if(g>0)a.a_(new A.a1(b,A.ar([c],o)))
return A.e(null,r)}})
return A.f($async$c0,r)},
fi(a,b){return this.vR(a,b)},
vR(a,b){var s=0,r=A.h(t.H),q,p=this,o,n,m,l,k,j,i,h,g
var $async$fi=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if(b.length===0){s=1
break}o=A.bD(b,!0,t.N)
n=A.a_(o),m=n.c,n=n.i("ct<1>"),l=o.$flags|0,k=p.f,j=t.P
case 3:if(!(o.length!==0)){s=4
break}i=new A.ct(o,0,500,n)
i.iJ(o,0,500,m)
h=i.eq(0)
g=h.length
l&1&&A.H(o,18)
A.bc(0,g,o.length)
o.splice(0,g)
s=5
return A.a(k.aV(new A.w0(p,a,h),j),$async$fi)
case 5:s=3
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$fi,r)}}
A.w2.prototype={
$0(){var s=this,r=s.b
return r.a.a2(new A.w1(s.a,r,s.c,s.d,s.e),t.P)},
$S:17}
A.w1.prototype={
$1(a){return this.nJ(a)},
nJ(a4){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
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
return A.a(a.dP(b,a1,a2.a,a3),$async$$1)
case 2:m=a6
l=m.a
k=m.b
j=A.aN(t.N)
a2=o.gu(p),a0=a0.y
case 3:if(!a2.k()){s=4
break}a3=a2.gn()
i=a3.a
if(c!=null&&a.m8(i,c)){s=3
break}p=i.a
s=j.F(0,p)?5:7
break
case 5:s=8
return A.a(a.mg(a4,a1,a3),$async$$1)
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
case 4:g=c==null||!a.m8(q.e,c)
f=g?q.e.c:c.a
e=g?q.e.a:c.b
s=10
return A.a(a.d.er(b,a1,e,f),$async$$1)
case 10:d.a=new A.jc(f,e)
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.vX.prototype={
$0(){var s=this.b
return s.a.a2(new A.vW(this.a,s,this.c),t.P)},
$S:17}
A.vW.prototype={
$1(a){return this.nG(a)},
nG(a){var s=0,r=A.h(t.P),q,p=this,o,n,m,l,k
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=p.b
k=l.a.cx
k===$&&A.y()
o=p.c
n=o.b
s=3
return A.a(k.bQ(a.b,n,o.a),$async$$1)
case 3:m=c
s=m==null?4:5
break
case 4:s=6
return A.a(l.tE(a,n,o),$async$$1)
case 6:p.a.a=!0
s=1
break
case 5:if(m.w!==B.z){s=1
break}k=m.c
if(k!=null&&B.a.a0(o.c,k)<=0){s=1
break}s=7
return A.a(l.mh(a,n,o,m,!0),$async$$1)
case 7:p.a.a=!0
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:5}
A.vZ.prototype={
$0(){var s=this,r=s.a
return r.a.a2(new A.vY(r,s.b,s.c,s.d),t.P)},
$S:17}
A.vY.prototype={
$1(a){return this.nH(a)},
nH(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:e=A.k([],t.s)
for(p=q.b,o=p.length,n=0;n<p.length;p.length===o||(0,A.q)(p),++n)e.push(p[n].a.a)
o=q.a
m=q.c
s=2
return A.a(o.dP(a.b,m,q.d,e),$async$$1)
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
return A.a(o.mg(a,m,h),$async$$1)
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
A.w0.prototype={
$0(){var s=this.a
return s.a.a2(new A.w_(s,this.b,this.c),t.P)},
$S:17}
A.w_.prototype={
$1(a){return this.nI(a)},
nI(a2){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$$1=A.c(function(a3,a4){if(a3===1)return A.d(a4,r)
for(;;)switch(s){case 0:i=a2.b
h=q.a.a
g=q.b
f=h.aw(g).a
e=h.aw(g).a.a
d=q.c
c=t.N
b=B.b.B(A.ae(d.length,"?",!1,c),", ")
a="id IN ("+b+")"
a0=A.t(c,t.G)
a1=J
s=2
return A.a(i.cf(e,a,d),$async$$1)
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
case 6:a2.a_(new A.a1(g,A.ut(d,A.a_(d).c)))
for(a=d.length,l=0;l<d.length;d.length===a||(0,A.q)(d),++l){k=d[l]
j=a0.h(0,k)
if(j!=null){p=A.dE(null,null,c,h)
p.C(0,j)
p.j(0,"hidden",!0)
a2.bb(new A.aS(g,k,B.at,B.c2,j,p,B.di))}}return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.b3.prototype={}
A.w3.prototype={
fp(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$fp=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:f=p.a.cx
f===$&&A.y()
s=3
return A.a(f.f2(25,p.c.ay.$0()),$async$fp)
case 3:o=b
f=J.M(o)
if(f.gE(o)){q=B.a2
s=1
break}if(p.f){q=p.b8(o)
s=1
break}f=f.gu(o),n=B.a2
case 4:if(!f.k()){s=5
break}s=6
return A.a(p.dQ(f.gn()),$async$fp)
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
dQ(a){return this.r8(a)},
r8(a){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$dQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=p.a
l=m.cx
l===$&&A.y()
m=m.r
s=3
return A.a(l.em(m,a.a,a.b),$async$dQ)
case 3:o=c
if(o==null){q=B.a2
s=1
break}s=4
return A.a(l.bQ(m,o.a,o.b),$async$dQ)
case 4:n=c
if(n==null){q=B.a2
s=1
break}if(o.e==null){q=p.r6(o,n)
s=1
break}q=p.jl(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dQ,r)},
bE(a,b,c,d,e){return this.qe(a,b,c,d,e)},
qd(a,b,c,d){return this.bE(a,b,c,!1,d)},
qb(a,b,c){return this.bE(a,b,c,!1,!1)},
qc(a,b,c,d){return this.bE(a,b,c,d,!1)},
qe(a,b,c,d,e){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i
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
k=A.F(i)
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
case 11:k=n.a.cx
k===$&&A.y()
s=14
return A.a(k.mR("forbidden_push",a.b,a.a),$async$bE)
case 14:q=B.d1
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
return A.a(n.cW(a,"validation_push",m.a),$async$bE)
case 20:q=B.M
s=1
break
case 19:q=n.cs(a,b,m)
s=1
break
s=16
break
case 17:if(k instanceof A.cK){q=n.dK(a,b,!e)
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
return A.f($async$bE,r)},
jk(a,b,c){return this.r7(a,b,c)},
r6(a,b){return this.jk(a,b,!1)},
r7(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jk=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.bE(a,b,new A.w5(p,a,b,c),!0,c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jk,r)},
jo(a,b,c){return this.ro(a,b,c)},
ro(a,b,c){var s=0,r=A.h(t.e),q,p=this
var $async$jo=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:q=p.qd(a,b,new A.wa(p,a,p.a.aw(a.a).a,b,c),c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jo,r)},
jl(a,b){return this.r9(a,b)},
r9(a,b){var s=0,r=A.h(t.e),q,p=this
var $async$jl=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:q=p.qb(a,b,new A.w8(p,a,b))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jl,r)},
d2(a,b,c,d){return this.rb(a,b,c,d)},
ra(a,b,c){return this.d2(a,b,c,!1)},
rb(a,b,c,d){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$d2=A.c(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.kZ(a,c)
j=n.a.aw(a.a).a
i=a.d
s=A.as(B.o.v(B.e.v(A.ak(A.bf(j,A.f6(j,c))))).a)===A.as(B.o.v(B.e.v(i)).a)?3:4
break
case 3:s=5
return A.a(n.eN(a,c),$async$d2)
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
return A.a(n.cW(a,"corrupt_payload",k.a),$async$d2)
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
return A.a(n.dM(a,b,c,j,m,l),$async$d2)
case 14:g=a0
if(g==null){q=B.bb
s=1
break}q=n.bE(a,b,new A.w6(n,a,A.ak(A.bf(j,g.a)),c,g),!0,d)
s=1
break
case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$d2,r)},
b8(a){return this.r5(a)},
r5(d0){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9
var $async$b8=A.c(function(d1,d2){if(d1===1){o.push(d2)
s=p}for(;;)switch(s){case 0:b9=A.k([],t.k1)
c0=t.N
c1=A.t(c0,t.G)
c2=0
c3=0
c4=0
c5=0
c6=0
c7=A.t(c0,c0)
c0=J.E(d0),d=n.a,c=d.y,b=n.b,a=d.dy,a0=d.r
case 3:if(!c0.k()){s=4
break}a1=c0.gn()
a2=d.cx
a2===$&&A.y()
s=5
return A.a(a2.em(a0,a1.a,a1.b),$async$b8)
case 5:m=d2
if(m==null){s=3
break}c7.j(0,m.w,m.d)
s=6
return A.a(a2.bQ(a0,m.a,m.b),$async$b8)
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
return A.a(a5.bU(a1),$async$b8)
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
return A.a(n.lu(m,l),$async$b8)
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
return A.a(a2.mR("forbidden_push",m.b,a1),$async$b8)
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
if(a1!==a5)A.w(A.et('record id "'+a1+'" does not match requested "'+a5+'"'))
a7=new A.a2("")
A.ch(a7,A.bf(a4,A.f6(a4,k)))
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
return A.a(n.eN(m,k),$async$b8)
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
return A.a(a2.fg(e.a,a5,"corrupt_payload",m.d,a1),$async$b8)
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
return A.a(n.dM(m,l,k,a4,g,f),$async$b8)
case 42:b0=d2
if(b0==null){++c4
s=3
break}a1=m.w
a2=m.a
a5=m.b
b1=b0.a
a7=new A.a2("")
A.ch(a7,A.bf(a4,b1))
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
return A.a(n.c_(B.b.T(b9,b5,b7<b6?b7:b6),c1,c7),$async$b8)
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
dM(a,b,c,d,e,f){return this.qr(a,b,c,d,e,f)},
qr(a,b,c,d,e,f){var s=0,r=A.h(t.nh),q,p=this,o,n,m
var $async$dM=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=A.f6(d,c)
n=A.Ge(e,f,new A.me(null,B.Z,!1),a.b,A.bf(d,o),a.a)
s=3
return A.a(t.fr.b(n)?n:A.bv(n,t.r),$async$dM)
case 3:m=h
s=m.b?4:5
break
case 4:s=6
return A.a(p.hc(a,b,c,m,e,f),$async$dM)
case 6:q=null
s=1
break
case 5:q=m
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dM,r)},
c_(a,b,c){return this.rK(a,b,c)},
rK(b9,c0,c1){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
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
J.bY(l,k.a,k)}j=l
i=A.aN(a7)
for(l=J.E(m);l.k();){h=l.gn()
if(!J.aL(i,h.a)){l=A.bt("Batch response references duplicate op "+h.a+".")
throw A.b(l)}if(!j.J(h.a)){l=A.bt("Batch response references unknown op "+h.a+".")
throw A.b(l)}}g=A.k([],t.bo)
l=J.E(m),a7=n.a
case 8:if(!l.k()){s=9
break}f=l.gn()
a8=J.S(j,f.a)
a8.toString
e=a8
s=f.b&&f.c!=null?10:12
break
case 10:a8=n.je(e,c1.h(0,e.a))
b0=B.e.v(e.d)
b1=new A.c2()
b2=A.cX(b1)
b2.t(0,b0)
b2.q()
b2=A.as(b1.a.a)
b0=f.e
if(b0==null)b0=e.d
J.aL(g,new A.je(a8,b0,f.c.c,b2,c0.h(0,e.a)));++b6
s=11
break
case 12:a8=a7.cx
a8===$&&A.y()
b0=e.b
b2=e.c
b3=f.d
if(b3==null)b3="batch_failed"
b4=f.d
if(b4==null)b4="batch_failed"
s=13
return A.a(a8.fg(b4,b2,b3,e.d,b0),$async$c_)
case 13:++b7
case 11:s=8
break
case 9:l=a7.cx
l===$&&A.y()
s=14
return A.a(l.kH(g),$async$c_)
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
return A.a(n.dQ(n.lB(a0)),$async$c_)
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
case 27:s=l instanceof A.bu?28:30
break
case 28:a2=l
a3=a2 instanceof A.eD?a2:new A.he("network error")
l=b9.length,a7=n.a,a8=a7.r,a9=0
case 31:if(!(a9<b9.length)){s=33
break}a4=b9[a9]
b0=a7.cx
b0===$&&A.y()
s=34
return A.a(b0.bQ(a8,a4.b,a4.c),$async$c_)
case 34:a5=c3
s=a5!=null?35:36
break
case 35:s=37
return A.a(n.cs(n.lB(a4),a5,a3),$async$c_)
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
bX(a,b,c){return this.oS(a,b,c)},
oS(b5,b6,b7){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$bX=A.c(function(b8,b9){if(b8===1){o.push(b9)
s=p}for(;;)switch(s){case 0:b3=J.M(b5)
s=b3.gm(b5)===1?3:4
break
case 3:g=b3.gap(b5)
h=n.a.cx
h===$&&A.y()
b3=g.b
s=5
return A.a(h.fg("batch_request_failed",g.c,"batch_poison",g.d,b3),$async$bX)
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
a6=a3.y
a6===$&&A.y()
s=13
return A.a(a6.fo(j),$async$bX)
case 13:i=b9
h=A.t(a2,a4)
for(a6=J.E(j);a6.k();){g=a6.gn()
J.bY(h,g.a,g)}f=h
e=A.aN(a2)
for(a6=J.E(i);a6.k();){d=a6.gn()
if(!J.aL(e,d.a)){a6=A.bt("Batch response references duplicate op "+d.a+".")
throw A.b(a6)}if(!f.J(d.a)){a6=A.bt("Batch response references unknown op "+d.a+".")
throw A.b(a6)}}a6=J.E(i)
case 14:if(!a6.k()){s=15
break}c=a6.gn()
a7=J.S(f,c.a)
a7.toString
b=a7
s=c.b&&c.c!=null?16:18
break
case 16:a7=n.je(b,b7.h(0,b.a))
a8=c.c
a8.toString
a9=b6.h(0,b.a)
b0=c.e
s=19
return A.a(n.dR(a7,a8,a9,b0==null?b.d:b0),$async$bX)
case 19:++m
s=17
break
case 18:a7=a1.cx
a7===$&&A.y()
a8=b.b
a9=b.c
b0=c.d
if(b0==null)b0="batch_poison"
b1=c.d
if(b1==null)b1="batch_poison"
s=20
return A.a(a7.fg(b1,a9,b0,b.d,a8),$async$bX)
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
return A.a(n.bX(j,b6,b7),$async$bX)
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
return A.f($async$bX,r)},
je(a,b){var s=b==null?a.d:b
return new A.cn(a.b,a.c,B.v,s,a.e,A.as(B.o.v(B.e.v(a.d)).a),B.q,a.a,0,null)},
lB(a){return this.je(a,null)},
dR(a,b,c,d){return this.rP(a,b,c,d)},
eN(a,b){return this.dR(a,b,null,null)},
rP(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$dR=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.a
o=p.aw(a.a).a
n=A.f6(o,b)
m=d==null
l=m?A.ak(A.bf(o,n)):d
p=p.cx
p===$&&A.y()
s=2
return A.a(p.kH(A.k([new A.je(a,l,b.c,A.as(B.o.v(B.e.v(m?a.d:d)).a),c)],t.bo)),$async$dR)
case 2:return A.e(null,r)}})
return A.f($async$dR,r)},
kZ(a,b){var s=b.a,r=a.b
if(s!==r)throw A.b(A.et('record id "'+s+'" does not match requested "'+r+'"'))},
cs(a,b,c){return this.rw(a,b,c)},
rw(a,b,c){var s=0,r=A.h(t.e),q,p=this,o,n,m,l,k
var $async$cs=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:l=b.as+1
k=c instanceof A.eD?c.b:null
s=l>=8?3:4
break
case 3:o=p.a.cx
o===$&&A.y()
s=5
return A.a(o.mS(c.a,a.b,"max_attempts",a.d,B.ao,a.a),$async$cs)
case 5:q=B.M
s=1
break
case 4:o=p.c
n=o.my(l,k)
m=p.a.cx
m===$&&A.y()
s=6
return A.a(m.wo(a.a,a.b,l,c.a,o.ay.$0()+B.c.N(n.a,1000)),$async$cs)
case 6:q=B.an
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cs,r)},
cW(a,b,c){return this.pv(a,b,c)},
pu(a,b){return this.cW(a,b,null)},
pv(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$cW=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:o=q.a.cx
o===$&&A.y()
p=c==null?b:c
s=2
return A.a(o.fg(p,a.b,b,a.d,a.a),$async$cW)
case 2:return A.e(null,r)}})
return A.f($async$cW,r)},
dK(a,b,c){return this.q6(a,b,c)},
lu(a,b){return this.dK(a,b,!0)},
q6(a,b,c){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
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
i=A.F(h)
s=i instanceof A.d3?10:12
break
case 10:k=i
s=13
return A.a(n.cW(a,"corrupt_payload",k.a),$async$dK)
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
fY(a,b,c,d){return this.pK(a,b,c,d)},
pK(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$fY=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:o=A.bI(c,d)
n=A.O(o,A.n(o).c)
B.b.aE(n)
p=b.r
if(p==null)p=A.ak(c)
s=2
return A.a(q.a.a2(new A.w4(q,a,p,d,n),t.P),$async$fY)
case 2:return A.e(null,r)}})
return A.f($async$fY,r)},
hc(a,b,c,d,e,f){return this.rm(a,b,c,d,e,f)},
rm(a,b,c,d,e,f){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$hc=A.c(function(g,h){if(g===1)return A.d(h,r)
for(;;)switch(s){case 0:o=q.a
n=o.aw(a.a).a
m=A.bf(n,A.f6(n,c))
l=A.bI(e,f)
k=A.O(l,A.n(l).c)
B.b.aE(k)
l=A.bI(e,m)
p=A.O(l,A.n(l).c)
B.b.aE(p)
s=2
return A.a(o.a2(new A.w9(q,a,b,e,f,m,k,p,n,c),t.P),$async$hc)
case 2:return A.e(null,r)}})
return A.f($async$hc,r)}}
A.w5.prototype={
$0(){var s=0,r=A.h(t.e),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:p=4
l=n.a
k=n.b
j=l.b.y
j===$&&A.y()
s=7
return A.a(j.hH(k.d,k.b,k.a),$async$$0)
case 7:m=b
s=8
return A.a(l.eN(k,m),$async$$0)
case 8:q=B.a3
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
if(A.F(h) instanceof A.fo){q=n.a.jo(n.b,n.c,n.d)
s=1
break}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:16}
A.wa.prototype={
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
return A.a(n.pu(m,"duplicate_id_missing"),$async$$0)
case 6:q=B.M
s=1
break
case 5:l=p.c
s=A.as(B.o.v(B.e.v(A.ak(A.bf(l,A.f6(l,o))))).a)===A.as(B.o.v(B.e.v(m.d)).a)?7:8
break
case 7:s=9
return A.a(n.eN(m,o),$async$$0)
case 9:q=B.a3
s=1
break
case 8:q=n.d2(m,p.d,o,p.e)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:16}
A.w8.prototype={
$0(){var s=0,r=A.h(t.e),q,p=this,o,n,m,l
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:n=p.a
m=p.b
l=n.b.y
l===$&&A.y()
s=3
return A.a(l.bU(m.b),$async$$0)
case 3:o=b
if(o==null){q=n.lu(m,p.c)
s=1
break}n.kZ(m,o)
if(o.c===m.e){l=p.c
q=n.qc(m,l,new A.w7(n,m,o,l),!0)
s=1
break}q=n.ra(m,p.c,o)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:16}
A.w7.prototype={
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
$S:16}
A.w6.prototype={
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
return A.a(k.dR(j,b,p.e.a,m),$async$$0)
case 3:q=B.a3
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:16}
A.w4.prototype={
$1(a){return this.nK(a)},
nK(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=a.b
o=q.b
n=o.a
m=o.b
l=q.c
k=t.N
j=t.X
s=2
return A.a(p.ca(0,"lp_conflicts",A.m(["store",n,"record_id",m,"base_json",l,"local_json",A.ak(q.d),"remote_json",A.ak(A.m(["__lp_deleted__",!0],k,t.y)),"dirty_local",B.h.a6(q.e,null),"dirty_remote",B.h.a6(B.q,null),"detected_at",q.a.c.ay.$0()],k,j),B.R),$async$$1)
case 2:s=3
return A.a(p.L("lp_sync_row",A.m(["sync_state","conflict","base_json",l,"base_hash",o.f,"base_updated",o.e],k,j),"store = ? AND record_id = ?",[n,m]),$async$$1)
case 3:a.a_(new A.a1(n,A.ar([m],k)))
a.a_(new A.a1("lp_conflicts",A.ar([m],k)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.w9.prototype={
$1(a){return this.nL(a)},
nL(a){var s=0,r=A.h(t.P),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:l=a.b
k=q.b
j=k.a
k=k.b
p=q.c.r
if(p==null)p=A.ak(q.d)
o=q.f
n=t.N
m=t.X
s=2
return A.a(l.ca(0,"lp_conflicts",A.m(["store",j,"record_id",k,"base_json",p,"local_json",A.ak(q.e),"remote_json",A.ak(o),"dirty_local",B.h.a6(q.r,null),"dirty_remote",B.h.a6(q.w,null),"detected_at",q.a.c.ay.$0()],n,m),B.R),$async$$1)
case 2:s=3
return A.a(l.L("lp_sync_row",A.m(["sync_state","conflict","base_json",A.ak(o),"base_hash",A.as(B.o.v(B.e.v(A.ak(A.bf(q.x,o)))).a),"base_updated",q.y.c],n,m),"store = ? AND record_id = ?",[j,k]),$async$$1)
case 3:a.a_(new A.a1(j,A.ar([k],n)))
a.a_(new A.a1("lp_conflicts",A.ar([k],n)))
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.ca.prototype={
a4(){return"SyncEngineState."+this.b}}
A.bm.prototype={
l(a){var s=this
return"SyncReport(pulled: "+s.a.l(0)+", swept: "+s.b.l(0)+", pushed: "+s.c+", deadLettered: "+s.d+", blocked: "+s.e+", discarded: "+s.f+", hadError: "+s.r+")"}}
A.hb.prototype={}
A.ha.prototype={}
A.x_.prototype={
gl0(){return 36},
dB(a){return this.ot(a)},
ot(a7){var s=0,r=A.h(t.bR),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
var $async$dB=A.c(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:a1=A.k([],t.en)
a2=null
a3=n.c.ay.$0()
h=n.a,g=h.dy,g=new A.bC(g,g.r,g.e,A.n(g).i("bC<1>")),f=t.P,e=!a7,d=n.d
case 3:if(!g.k()){s=4
break}m=g.d
p=6
c={}
s=9
return A.a(d.ik(m),$async$dB)
case 9:l=a9
b=!1
if(e)if(l.b!=null){b=l.b
b.toString
b=a3-b<864e5}if(b){s=3
break}c.a=l.a
k=a7?n.gl0():2
j=0
case 10:if(!(j<k)){s=12
break}a=B.c.al(c.a+1,n.gl0())
c.a=a
a5=J
a6=a1
s=13
return A.a(n.bC(m,a),$async$dB)
case 13:a5.aL(a6,a9)
case 11:++j
s=10
break
case 12:if(A.nC(h)!=null)A.w(A.x(u.L))
b=h.b
b===$&&A.y()
s=14
return A.a(b.aW(new A.x0(c,n,m,a3),B.p,f),$async$dB)
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
return A.f($async$dB,r)},
bC(a,b){return this.os(a,b)},
os(a4,a5){var s=0,r=A.h(t.f_),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$bC=A.c(function(a6,a7){if(a6===1)return A.d(a7,r)
for(;;)switch(s){case 0:if(a5<0||a5>=36)throw A.b(A.Q("Sweep bucket "+a5+" is outside the 0..35 alphabet.",null))
o="abcdefghijklmnopqrstuvwxyz0123456789"[a5]
n=A.aN(t.N)
m=B.c.iq(B.c.bM(200,1,500))
l=t.s,k=p.b,j=p.e,i=0,h=null
case 3:g=k.y
g===$&&A.y()
s=5
return A.a(g.ff(a4,B.cM,h,null,o,m),$async$bC)
case 5:f=a7
g=J.M(f)
if(g.gE(f)){s=4
break}for(e=g.gu(f);e.k();)n.t(0,e.gn().a)
e=A.k([],l)
for(d=g.gu(f);d.k();)e.push(d.gn().a)
s=6
return A.a(p.hb(a4,e),$async$bC)
case 6:c=a7
b=A.k([],l)
for(e=g.gu(f);e.k();){d=e.gn()
a=d.a
a0=c.h(0,a)
if(a0==null||a0.z===B.aN||a0.c!==d.c)b.push(a)}s=b.length!==0?7:8
break
case 7:s=9
return A.a(j.dc(a4,b),$async$bC)
case 9:i+=b.length
case 8:h=g.ga1(f).a
if(g.gm(f)<m){s=4
break}s=3
break
case 4:k=p.a.r
g=o+"%"
s=10
return A.a(k.ah("SELECT record_id, access_state FROM lp_sync_row WHERE store = ? AND record_id LIKE ?",[a4,g]),$async$bC)
case 10:a1=a7
a2=A.k([],l)
for(e=J.E(a1);e.k();){d=e.gn()
a=d.h(0,"record_id")
a.toString
A.D(a)
if(!n.F(0,a)){if(J.v(d.h(0,"access_state"),"hidden"))continue
a2.push(a)}}s=a2.length!==0?11:12
break
case 11:s=13
return A.a(j.fi(a4,a2),$async$bC)
case 13:case 12:s=14
return A.a(k.ah("SELECT record_id FROM lp_sync_row WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? AND next_retry_at <= ?",[a4,g,p.c.ay.$0()]),$async$bC)
case 14:a3=a7
k=J.M(a3)
s=k.gW(a3)?15:16
break
case 15:l=A.k([],l)
for(k=k.gu(a3);k.k();){g=k.gn().h(0,"record_id")
g.toString
l.push(A.D(g))}s=17
return A.a(j.dc(a4,l),$async$bC)
case 17:case 16:q=new A.ha(a4,n.a)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$bC,r)},
hb(a,b){return this.r_(a,b)},
r_(a,b){var s=0,r=A.h(t.cy),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$hb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:g=t.N
f=A.t(g,t.nw)
o=p.a.r,n=0
case 3:if(!(m=b.length,n<m)){s=5
break}l=n+500
k=B.b.T(b,n,B.c.bM(l,0,m))
j=B.b.B(A.ae(k.length,"?",!1,g),", ")
m=[a]
B.b.C(m,k)
e=J
s=6
return A.a(o.ah(u.m+j+")",m),$async$hb)
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
return A.f($async$hb,r)}}
A.x0.prototype={
$1(a){return this.nN(a)},
nN(a){var s=0,r=A.h(t.P),q=this
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(q.b.d.es(a.b,q.c,q.a.a,q.d),$async$$1)
case 2:return A.e(null,r)}})
return A.f($async$$1,r)},
$S:5}
A.bu.prototype={
l(a){return A.dp(this).l(0)+": "+this.a},
$iG:1}
A.he.prototype={}
A.eD.prototype={}
A.jk.prototype={}
A.c0.prototype={}
A.cG.prototype={}
A.cK.prototype={}
A.fN.prototype={}
A.fP.prototype={}
A.fo.prototype={}
A.ea.prototype={}
A.h8.prototype={
gm(a){return this.b}}
A.cM.prototype={}
A.fR.prototype={}
A.jd.prototype={}
A.kP.prototype={
a4(){return"BackendHintKind."+this.b}}
A.cC.prototype={}
A.Ba.prototype={
$2(a,b){return B.a.ic(B.c.l(a),b,"0")},
$1(a){return this.$2(a,2)},
$S:146}
A.x1.prototype={
my(a,b){var s,r
if(b!=null){s=this.qO(b)
if(A.ah(s))return A.dv(0,0,s<0?0:s)
if(s instanceof A.aW){r=s.a-this.ay.$0()
return r<=0?B.D:A.dv(0,r,0)}return B.au}return A.G7(a,B.au,B.av,this.at)},
mx(a){return this.my(a,null)},
qO(a){var s=B.a.cg(a),r=A.ja(s,null)
if(r!=null)return r
return A.Jb(s)}}
A.jc.prototype={}
A.js.prototype={}
A.xd.prototype={
ij(a){return this.wk(a)},
wk(a){var s=0,r=A.h(t.lY),q,p=this,o,n,m,l
var $async$ij=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.ek("lp_sync_state",A.k(["cursor_updated","cursor_id"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$ij)
case 3:m=c
l=J.M(m)
if(l.gE(m)){q=null
s=1
break}o=A.a6(J.S(l.gG(m),"cursor_updated"))
n=A.a6(J.S(l.gG(m),"cursor_id"))
if(o==null||n==null){q=null
s=1
break}q=new A.jc(o,n)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ij,r)},
er(a,b,c,d){return this.xa(a,b,c,d)},
xa(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$er=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:p=q.b
o=t.N
n=t.X
m=J
s=5
return A.a(a.aI("lp_sync_state",1,"scope = ? AND store = ?",[p,b]),$async$er)
case 5:s=m.by(f)?2:4
break
case 2:s=6
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"cursor_updated",d,"cursor_id",c,"sweep_bucket",-1],o,n)),$async$er)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["cursor_updated",d,"cursor_id",c],o,n),"scope = ? AND store = ?",[p,b]),$async$er)
case 7:case 3:return A.e(null,r)}})
return A.f($async$er,r)},
ik(a){return this.wm(a)},
wm(a){var s=0,r=A.h(t.k6),q,p=this,o,n,m
var $async$ik=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.ek("lp_sync_state",A.k(["sweep_bucket","sweep_at"],t.s),1,"scope = ? AND store = ?",[p.b,a]),$async$ik)
case 3:n=c
m=J.M(n)
if(m.gE(n)){q=B.dp
s=1
break}o=A.bd(J.S(m.gG(n),"sweep_bucket"))
if(o==null)o=-1
q=new A.js(o,A.bd(J.S(m.gG(n),"sweep_at")))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ik,r)},
es(a,b,c,d){return this.xe(a,b,c,d)},
xe(a,b,c,d){var s=0,r=A.h(t.H),q=this,p,o,n,m
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
return A.a(a.aC(0,"lp_sync_state",A.m(["scope",p,"store",b,"sweep_bucket",c,"sweep_at",d],o,n)),$async$es)
case 6:s=3
break
case 4:s=7
return A.a(a.L("lp_sync_state",A.m(["sweep_bucket",c,"sweep_at",d],o,n),"scope = ? AND store = ?",[p,b]),$async$es)
case 7:case 3:return A.e(null,r)}})
return A.f($async$es,r)},
hD(){var s=0,r=A.h(t.kA),q,p=this,o,n,m,l,k,j
var $async$hD=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=3
return A.a(p.a.r.b0("      SELECT\n        SUM(CASE WHEN sync_state IN ('dirty', 'in_flight') THEN 1 ELSE 0 END) AS pending,\n        SUM(CASE WHEN sync_state = 'conflict' THEN 1 ELSE 0 END) AS conflicts,\n        SUM(CASE WHEN access_state = 'hidden' THEN 1 ELSE 0 END) AS hidden,\n        SUM(CASE WHEN sync_state = 'blocked' THEN 1 ELSE 0 END) AS blocked\n      FROM lp_sync_row\n    "),$async$hD)
case 3:l=b
k=J.M(l)
j=k.gE(l)?B.j:k.gG(l)
k=A.bd(j.h(0,"pending"))
if(k==null)k=0
o=A.bd(j.h(0,"conflicts"))
if(o==null)o=0
n=A.bd(j.h(0,"hidden"))
if(n==null)n=0
m=A.bd(j.h(0,"blocked"))
q=new A.oC([m==null?0:m,o,n,k])
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hD,r)}}
A.cQ.prototype={
a4(){return"SyncState."+this.b}}
A.i7.prototype={
a4(){return"AccessState."+this.b}}
A.fM.prototype={
a4(){return"OutboxKind."+this.b}}
A.j6.prototype={
a4(){return"OpQueueKind."+this.b}}
A.Bw.prototype={
$1(a){return'"'+a+'"'},
$S:6}
A.cP.prototype={}
A.xc.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.D(i)
i=j.h(0,"record_id")
i.toString
A.D(i)
i=A.a6(j.h(0,"remote_updated"))
s=A.bd(j.h(0,"last_seen_at"))
r=A.a6(j.h(0,"base_updated"))
A.a6(j.h(0,"base_hash"))
q=A.a6(j.h(0,"base_json"))
p=j.h(0,"sync_state")
p.toString
p=A.fq(B.cw,A.D(p))
A.G2(j.h(0,"dirty_fields"))
o=A.bd(j.h(0,"local_rev"))
if(o==null)o=0
n=j.h(0,"access_state")
n.toString
n=A.fq(B.cu,A.D(n))
A.a6(j.h(0,"op_id"))
m=A.bd(j.h(0,"attempt_count"))
if(m==null)m=0
l=A.bd(j.h(0,"next_retry_at"))
if(l==null)l=0
k=A.a6(j.h(0,"last_error"))
A.bd(j.h(0,"schema_ver"))
return new A.cP(i,s,r,q,p,o,n,m,l,k)},
$S:147}
A.cn.prototype={}
A.vg.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=j.h(0,"store")
i.toString
A.D(i)
s=j.h(0,"record_id")
s.toString
A.D(s)
r=j.h(0,"kind")
r.toString
r=A.fq(B.cF,A.D(r))
q=j.h(0,"payload_json")
q.toString
A.D(q)
p=A.a6(j.h(0,"base_updated"))
o=A.a6(j.h(0,"base_hash"))
if(o==null)o=""
n=A.G2(j.h(0,"dirty_fields"))
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
A.vb.prototype={
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
q=A.fq(B.cA,A.D(q))
p=m.h(0,"payload_json")
p.toString
A.D(p)
o=m.h(0,"state")
o.toString
A.D(o)
o=A.bd(m.h(0,"attempt_count"))
if(o==null)o=0
A.bd(m.h(0,"next_retry_at"))
A.a6(m.h(0,"last_error"))
n=A.a6(m.h(0,"depends_on_op"))
m=m.h(0,"created_at")
m.toString
A.ao(m)
return new A.ey(l,s,r,q,p,o,n)},
$S:149}
A.Bu.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.D(s)},
$S:59}
A.Bv.prototype={
$1(a){var s=a.h(0,"op_id")
s.toString
return A.D(s)},
$S:59}
A.bE.prototype={
a_(a){this.c.push(a)
this.a.y.r+=a.b.a},
bb(a){if(this.a.a$.b.d==null)return
this.d.push(a)},
c3(a){var s=this.a
return new A.fg(s,s.aw(a),this.b,this)},
a2(a,b){var s,r,q,p,o
if(this.e)throw A.b(A.x("Cannot open a nested transaction in a read-only Tx."))
s=this.f
r=s.b
q=s.a
p=""+q
o=r!=null?r+"_"+p:"lp_sp"+p
s.a=q+1
return this.cA(o,a,b)},
cA(a,b,c){return this.th(a,b,c,c)},
th(a2,a3,a4,a5){var s=0,r=A.h(a5),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
d=A.Ct(f,a,h,!1,g)
d.f.b=a2
j=d
f=t.X
s=8
return A.a(A.pg(new A.xn(a3,j,a4),null,A.m([$.kA(),j],f,f),a4.i("A<0>")),$async$cA)
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
if(a>m)B.b.km(h,m,a)
a=g.length
if(a>l)B.b.km(g,l,a)
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
A.xn.prototype={
$0(){return this.a.$1(this.b)},
$S(){return this.c.i("A<0>()")}}
A.zS.prototype={}
A.mL.prototype={
kI(a){return a.a===this.w.b.a},
f6(){var s=this.w
return s.e7(s.w==null&&!s.x?50:null).X(new A.wo(),t.J)},
mr(a){return A.M2(a,new A.wn(this),this.w.r.length!==0)},
mV(a){var s=this.x
return s==null?null:s.t(0,a)},
kd(a,b){var s=this.x
return s==null?null:s.bx(a,b)},
iG(){var s=this.x=A.wQ(this.gjO(),new A.wp(this),null,!1,t.J)
return new A.b5(s,A.n(s).i("b5<1>"))},
f0(){this.kO()
var s=this.x
if(s!=null)s.q()}}
A.wo.prototype={
$1(a){return a.a},
$S:151}
A.wn.prototype={
$1(a){return this.a.a.y.Q+=a},
$S:8}
A.wp.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.dZ(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.mt.prototype={
kI(a){var s
if(a.a!==this.w.a.a)return!1
s=a.b
if(s.a!==0&&!s.F(0,this.x))return!1
return!0},
f6(){var s=0,r=A.h(t.b),q,p=this,o,n,m,l
var $async$f6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.a
n=p.w.a
s=3
return A.a(o.r.aI(n.a,1,"id = ?",[p.x]),$async$f6)
case 3:m=b
l=J.M(m)
if(l.gE(m)){q=null
s=1
break}q=A.cf(n,l.gG(m),o.ay,o.ch)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f6,r)},
mr(a){return a==null?"<null>":A.as(B.o.v(B.e.v(A.ak(a))).a)},
mV(a){var s=this.y
return s==null?null:s.t(0,a)},
kd(a,b){var s=this.y
return s==null?null:s.bx(a,b)},
iG(){var s=this.y=A.wQ(this.gjO(),new A.v9(this),null,!1,t.b)
return new A.b5(s,A.n(s).i("b5<1>"))},
f0(){this.kO()
var s=this.y
if(s!=null)s.q()}}
A.v9.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a
p.az()
s=2
return A.a(p.dZ(),$async$$0)
case 2:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.ff.prototype={
kd(a,b){},
az(){var s=this.a.a$.a
this.c=new A.b0(s,A.n(s).i("b0<1>")).aS(this.gqy())},
qz(a){var s,r=this
if(!r.kI(a))return
if(r.e){r.f=!0
return}s=r.d
if(s!=null)s.D()
r.d=A.cR(r.b,r.gmb())},
dZ(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$dZ=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.e=!0
i=n.a.y;++i.y
q=3
s=6
return A.a(n.f6(),$async$dZ)
case 6:m=b
l=n.mr(m)
if(!J.v(l,n.r)){n.r=l;++i.z
n.mV(m)}o.push(5)
s=4
break
case 3:q=2
g=p.pop()
k=A.F(g)
j=A.ai(g)
n.kd(k,j)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.e=!1
if(n.f){n.f=!1
i=n.d
if(i!=null)i.D()
n.d=A.cR(n.b,n.gmb())}s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$dZ,r)},
f0(){var s=this.d
if(s!=null)s.D()
s=this.c
if(s!=null)s.D()}}
A.y_.prototype={
aV(a,b){var s,r=this;++r.b
r.lF()
s=new A.u($.C,b.i("u<0>"))
r.a=r.a.X(new A.y0(r,new A.aI(s,b.i("aI<0>")),a),t.H)
return s},
lF(){var s
try{this.c.$1(this.b)}catch(s){}}}
A.y0.prototype={
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
l=A.ai(i)
n.b.c4(m,l)
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
j=n.a;--j.b
j.lF()
s=o.pop()
break
case 5:return A.e(null,r)
case 1:return A.d(p.at(-1),r)}})
return A.f($async$$1,r)},
$S:29}
A.xq.prototype={}
A.uu.prototype={
cF(a,b){return this.vb(a,b)},
vb(a,b){var s=0,r=A.h(t.X),q,p
var $async$cF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=t.N
q=A.pe(A.m(["kind","ready"],p,p))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cF,r)},
ib(a,b,c,d){return this.w_(a,b,c,d)},
w_(a5,a6,a7,a8){var s=0,r=A.h(t.u),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$ib=A.c(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:b=a5.vW(a6,a7)
a=t.N
a0=new A.ip(A.t(a,t.fw),b)
a1=!1
a2=a8==null
a3=A.a6(A.Gm(a2?null:A.pc(a8),"backupDbName"))
if(a3==null)a3=a6
a0.d=new A.uv(a3)
a0.e=new A.uw(a3)
p=4
b.O("PRAGMA journal_mode=TRUNCATE")
f=b.nY("PRAGMA journal_mode")
n=f.gG(f).b[0]
if(J.a0(n).toLowerCase()!=="truncate"){a=A.x("journal_mode read-back was "+A.r(n)+", expected truncate")
throw A.b(a)}m=A.ML(a2?null:A.pc(a8))
e=t.bE.a(J.S(m,"stores"))
l=e==null?A.k([],t.aw):e
d=A.bd(J.S(m,"maxDocBytes"))
k=d==null?19e5:d
f=A.Ff(J.S(m,"destructiveBackup"))
j=f!==!1
i=A.MK(A.Gm(a2?null:A.pc(a8),"fieldCipher"))
if(A.Ms(l,i)){a=A.ay("Store declares encrypted fields but no fieldCipher was provided.",null)
throw A.b(a)}h=new A.xK(A.t(a,t.p))
s=7
return A.a(A.d0(h,a0,j,i,k,a6,B.aA,l,B.bP),$async$ib)
case 7:g=b0
a1=!0
a=t.be
q=new A.mc(b,new A.xU(g,A.aN(a)),A.t(t.eg,a))
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
return A.f($async$ib,r)}}
A.uv.prototype={
$1(a){return A.p5(this.a,a)},
$S:152}
A.uw.prototype={
$1(a){return A.p6(this.a,a)},
$S:153}
A.mc.prototype={
cF(a,b){return this.vc(a,b)},
vc(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m
var $async$cF=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=b.a
if(n==null){q=A.C6(0,"protocol_envelope","Payload is null",null)
s=1
break}o=A.Im(n)
if(o==null){q=A.C6(0,"protocol_envelope","Payload must be a map",null)
s=1
break}m=A
s=3
return A.a(p.d.hY(p.e.kj(a,new A.uF(a)),o),$async$cF)
case 3:q=m.In(d)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cF,r)}}
A.uF.prototype={
$0(){return new A.ht(this.a)},
$S:154}
A.ht.prototype={$inW:1}
A.Bo.prototype={
$1(a){return A.MM(a)},
$S:155}
A.Bf.prototype={
$1(a){return B.b.bL(a.c,new A.Be())},
$S:156}
A.Be.prototype={
$1(a){return a.e},
$S:60}
A.hm.prototype={
p(){var s=this
return A.m(["v",s.a,"i",s.b,"op",s.c,"a",s.d],t.N,t.X)}}
A.xP.prototype={
$2(a,b){return new A.R(J.a0(a),b,t.eB)},
$S:57}
A.nS.prototype={
p(){var s,r=this,q=A.t(t.N,t.X)
q.j(0,"v",r.a)
q.j(0,"i",r.b)
s=r.d
if(s!=null)q.j(0,"e",s.p())
else q.j(0,"r",r.c)
return q}}
A.xM.prototype={
p(){var s,r=A.t(t.N,t.X)
r.j(0,"c",this.a)
r.j(0,"m",this.b)
s=this.c
if(s!=null)r.j(0,"d",s)
return r}}
A.jb.prototype={
l(a){return"ProtocolEnvelopeException: "+this.a},
$iG:1}
A.xR.prototype={
w1(a,b){var s=this.a
if(!s.J(a)||s.h(0,a)==null)return null
s=s.h(0,a)
s.toString
if(!b.b(s))throw A.b(A.dM('Invalid "'+a+'" argument: expected '+A.bJ(b).l(0)+", got "+J.c_(s).l(0)+"."))
return b.a(s)}}
A.hn.prototype={}
A.jA.prototype={}
A.eK.prototype={}
A.B5.prototype={
$2(a,b){var s,r,q=J.a0(a)
if(t.f.b(b))this.a.j(0,q,A.f3(b))
else{s=this.a
if(t.j.b(b)){r=J.bM(b,new A.B4(),t.z)
r=A.O(r,r.$ti.i("Z.E"))
s.j(0,q,r)}else s.j(0,q,b)}},
$S:36}
A.B4.prototype={
$1(a){return t.f.b(a)?A.f3(a):a},
$S:39}
A.nV.prototype={
h3(a,b){return this.q2(a,b)},
q2(a3,a4){var s=0,r=A.h(t.X),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$h3=A.c(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:a1=a4.d.h(0,"request")
if(!t.f.b(a1))throw A.b(A.dM('Contract envelope requires a "request" map.'))
j=A.f3(a1)
i=j.h(0,"tag")
if(typeof i!="string")A.w(A.V("Missing request tag."))
h=j.h(0,"payload")
if(h==null)A.w(A.V("Missing request payload."))
g=A.pd(h)
j=t.G
if(!j.b(g))A.w(A.V("Malformed request payload."))
f=A.HK(i,g)
if(f==null)A.w(A.V("Unknown request tag: "+i))
m=f
p=4
e=n.c.e
e===$&&A.y()
s=7
return A.a(e.v6(m),$async$h3)
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
if(e instanceof A.dF){a=A.L7(e)
b=e.a
if(e instanceof A.eI&&e.b!=null)a0=A.m(["field",e.b],t.N,t.X)
else if(e instanceof A.eH)a0=A.m(["field",e.b],t.N,t.X)
else a0=e instanceof A.ex?A.m(["field",e.b],t.N,t.X):null}else{if(e instanceof A.jz){b=e.a
a="WireException"}else if(e instanceof A.bk){b=e.a
a="StateError"}else if(e instanceof A.bz){b=A.r(e.d)
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
return A.f($async$h3,r)}}
A.xU.prototype={
hY(a,b){return this.vq(a,b)},
vq(a,b){var s=0,r=A.h(t.ec),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$hY=A.c(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:n.d.t(0,a)
if(n.e==null){i=n.c.e
i===$&&A.y()
i=i.b
n.e=new A.b0(i,A.n(i).i("b0<1>")).aS(new A.xV(n))}m=null
try{m=A.Jl(b)}catch(d){l=A.F(d)
i=J.a0(l)
q=new A.eK("protocol_envelope",i,null,0)
s=1
break}if(m.a!==3){i=m.b
q=new A.eK("protocol_mismatch","Version mismatch: expected 3, got "+m.a,A.m(["expected",3,"actual",m.a],t.N,t.X),i)
s=1
break}p=4
s=7
return A.a(n.iX(a,m),$async$hY)
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
f=A.m(["type",A.MT(j)],t.N,t.X)
q=new A.eK("localpocket",g,f,i)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$hY,r)},
iX(a,b){return this.pz(a,b)},
pz(a,b){var s=0,r=A.h(t.X),q,p=this,o,n,m,l
var $async$iX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=p.f
if(l===$){o=A.m(["open",p.gq7(),"contract_request",p.gq1()],t.N,t.n1)
p.f!==$&&A.BC()
p.f=o
l=o}n=b.c
m=l.h(0,n)
if(m==null)throw A.b(A.dM("Unhandled operation: "+n))
q=m.$2(a,b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$iX,r)}}
A.xV.prototype={
$1(a){var s,r=t.N,q=t.X,p=A.m(["v",3,"op","contract_event","event",A.m(["tag",a.gU(),"payload",a.p()],r,q)],r,q)
for(r=this.a.d,r=A.hB(r,r.r,A.n(r).c),q=r.$ti.c;r.k();){s=r.d;(s==null?q.a(s):s).a.hI(A.pe(p))}},
$S:159}
A.nU.prototype={
h5(a,b){return this.q8(a,b)},
q8(a6,a7){var s=0,r=A.h(t.X),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$h5=A.c(function(a8,a9){if(a8===1)return A.d(a9,r)
for(;;)switch(s){case 0:a3=a7.d
a4=new A.xR(a3).w1("stores",t.kS)
a5=a3.h(0,"manifestFingerprints")
a3=t.N
o=A.t(a3,a3)
n=t.f
if(n.b(a5))a5.a7(0,new A.xS(o))
s=a4!=null?3:4
break
case 3:m=J.E(a4),l=p.c,k=l.dy,j=t.X,i=l.ay==null
case 5:if(!m.k()){s=6
break}h=m.gn()
if(!n.b(h))A.w(A.a8("Schema must be a map: "+A.r(h),null,null))
g=A.pX(A.f3(h),j)
if(B.b.bL(g.c,new A.xT())&&i)throw A.b(A.ay('Store "'+g.a+'" declares encrypted fields but no fieldCipher was provided.',null))
f=A.Cj(g)
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
a0=d!==A.as(a.a.a)
b=a0}else b=!1
if(b)throw A.b(A.dM('Schema manifest mismatch for "'+e+'": the page and the worker compiled different schemas.'))
s=!k.J(e)?7:9
break
case 7:s=10
return A.a(l.aP(g),$async$h5)
case 10:s=8
break
case 9:a1=k.h(0,e)
if(a1==null)A.w(A.x('No store "'+e+'" registered in this LocalPocket.'))
c=new A.a2("")
A.ch(c,a1.c.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a0=A.cX(a)
a0.t(0,b)
a0.q()
a0=A.as(a.a.a)
c=new A.a2("")
A.ch(c,f.p())
b=c.a
b=B.e.v(b.charCodeAt(0)==0?b:b)
a=new A.c2()
a2=A.cX(a)
a2.t(0,b)
a2.q()
if(a0!==A.as(a.a.a))throw A.b(A.dM('Schema manifest mismatch for "'+e+'".'))
case 8:s=5
break
case 6:case 4:q=A.m(["ok",!0],a3,t.y)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$h5,r)}}
A.xS.prototype={
$2(a,b){if(typeof a=="string"&&typeof b=="string")this.a.j(0,a,b)},
$S:45}
A.xT.prototype={
$1(a){return a.e},
$S:60}
A.oY.prototype={}
A.qz.prototype={
tq(a){var s,r=null
A.FR("absolute",A.k([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],t.mf))
s=this.a
s=s.b2(a)>0&&!s.cG(a)
if(s)return a
s=A.G1()
return this.mQ(0,s,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},
u7(a){var s,r,q=A.dL(a,this.a)
q.fu()
s=q.d
r=s.length
if(r===0){s=q.b
return s==null?".":s}if(r===1){s=q.b
return s==null?".":s}B.b.kl(s)
q.e.pop()
q.fu()
return q.l(0)},
mQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var s=A.k([b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q],t.mf)
A.FR("join",s)
return this.vD(new A.bF(s,t.v))},
vD(a){var s,r,q,p,o,n,m,l,k
for(s=a.gu(0),r=new A.cV(s,new A.qA(),a.$ti.i("cV<o.E>")),q=this.a,p=!1,o=!1,n="";r.k();){m=s.gn()
if(q.cG(m)&&o){l=A.dL(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.A(k,0,q.eo(k,!0))
l.b=n
if(q.fj(n))l.e[0]=q.gdw()
n=l.l(0)}else if(q.b2(m)>0){o=!q.cG(m)
n=m}else{if(!(m.length!==0&&q.jJ(m[0])))if(p)n+=q.gdw()
n+=m}p=q.fj(m)}return n.charCodeAt(0)==0?n:n},
cP(a,b){var s=A.dL(b,this.a),r=s.d,q=A.a_(r).i("al<1>")
r=A.O(new A.al(r,new A.qB(),q),q.i("o.E"))
s.d=r
q=s.b
if(q!=null)B.b.aC(r,0,q)
return s.d},
ei(a){var s
if(!this.qv(a))return a
s=A.dL(a,this.a)
s.kc()
return s.l(0)},
qv(a){var s,r,q,p,o,n,m,l=this.a,k=l.b2(a)
if(k!==0){if(l===$.pi())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.cb(n)){if(l===$.pi()&&n===47)return!0
if(q!=null&&l.cb(q))return!0
if(q===46)m=o==null||o===46||l.cb(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.cb(q))return!0
if(q===46)l=o==null||l.cb(o)||o===46
else l=!1
if(l)return!0
return!1},
ws(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.b2(a)
if(l<=0)return o.ei(a)
s=A.G1()
if(m.b2(s)<=0&&m.b2(a)>0)return o.ei(a)
if(m.b2(a)<=0||m.cG(a))a=o.tq(a)
if(m.b2(a)<=0&&m.b2(s)>0)throw A.b(A.E7(n+a+'" from "'+s+'".'))
r=A.dL(s,m)
r.kc()
q=A.dL(a,m)
q.kc()
l=r.d
if(l.length!==0&&l[0]===".")return q.l(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.kg(l,p)
else l=!1
if(l)return q.l(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.kg(l[0],p[0])}else l=!1
if(!l)break
B.b.io(r.d,0)
B.b.io(r.e,1)
B.b.io(q.d,0)
B.b.io(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.b(A.E7(n+a+'" from "'+s+'".'))
l=t.N
B.b.k0(q.d,0,A.ae(p,"..",!1,l))
p=q.e
p[0]=""
B.b.k0(p,1,A.ae(r.d.length,m.gdw(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.b.ga1(m)==="."){B.b.kl(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.fu()
return q.l(0)},
mY(a){var s,r,q=this,p=A.FB(a)
if(p.gb_()==="file"&&q.a===$.kz())return p.l(0)
else if(p.gb_()!=="file"&&p.gb_()!==""&&q.a!==$.kz())return p.l(0)
s=q.ei(q.a.kf(A.FB(p)))
r=q.ws(s)
return q.cP(0,r).length>q.cP(0,s).length?s:r}}
A.qA.prototype={
$1(a){return a!==""},
$S:9}
A.qB.prototype={
$1(a){return a.length!==0},
$S:9}
A.AQ.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:160}
A.tq.prototype={
nW(a){var s=this.b2(a)
if(s>0)return B.a.A(a,0,s)
return this.cG(a)?a[0]:null},
kg(a,b){return a===b}}
A.mx.prototype={
gjF(){var s=this,r=t.N,q=new A.mx(s.a,s.b,s.c,A.bD(s.d,!0,r),A.bD(s.e,!0,r))
q.fu()
r=q.d
if(r.length===0){r=s.b
return r==null?"":r}return B.b.ga1(r)},
fu(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.b.ga1(s)===""))break
B.b.kl(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
kc(){var s,r,q,p,o,n=this,m=A.k([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.q)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.b.k0(m,0,A.ae(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.ae(m.length+1,s.gdw(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.fj(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.pi())n.b=A.z(r,"/","\\")
n.fu()},
l(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.b.ga1(q)
return o.charCodeAt(0)==0?o:o}}
A.my.prototype={
l(a){return"PathException: "+this.a},
$iG:1}
A.wZ.prototype={
l(a){return this.gaO()}}
A.vI.prototype={
jJ(a){return B.a.F(a,"/")},
cb(a){return a===47},
fj(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
eo(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
b2(a){return this.eo(a,!1)},
cG(a){return!1},
kf(a){var s
if(a.gb_()===""||a.gb_()==="file"){s=a.gbp()
return A.CL(s,0,s.length,B.n,!1)}throw A.b(A.Q("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gaO(){return"posix"},
gdw(){return"/"}}
A.xw.prototype={
jJ(a){return B.a.F(a,"/")},
cb(a){return a===47},
fj(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.c6(a,"://")&&this.b2(a)===s},
eo(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.c9(a,"/",B.a.ad(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.S(a,"file://"))return q
p=A.G4(a,q+1)
return p==null?q:p}}return 0},
b2(a){return this.eo(a,!1)},
cG(a){return a.length!==0&&a.charCodeAt(0)===47},
kf(a){return a.l(0)},
gaO(){return"url"},
gdw(){return"/"}}
A.xQ.prototype={
jJ(a){return B.a.F(a,"/")},
cb(a){return a===47||a===92},
fj(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
eo(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.c9(a,"\\",2)
if(s>0){s=B.a.c9(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.Gb(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
b2(a){return this.eo(a,!1)},
cG(a){return this.b2(a)===1},
kf(a){var s,r
if(a.gb_()!==""&&a.gb_()!=="file")throw A.b(A.Q("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gbp()
if(a.gde()===""){if(s.length>=3&&B.a.S(s,"/")&&A.G4(s,1)!=null)s=B.a.ko(s,"/","")}else s="\\\\"+a.gde()+s
r=A.z(s,"/","\\")
return A.CL(r,0,r.length,B.n,!1)},
tO(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
kg(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.tO(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gaO(){return"windows"},
gdw(){return"\\"}}
A.wH.prototype={
gm(a){return this.c.length},
gvE(){return this.b.length},
oy(a,b){var s,r,q,p,o,n,m,l,k
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
if(a>=B.b.ga1(s))return s.length-1
if(r.qk(a)){s=r.d
s.toString
return s}return r.d=r.oR(a)-1},
qk(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
oR(a){var s,r,q=this.b,p=q.length-1
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
if(a>=r)throw A.b(A.aZ("Line "+a+" must be less than the number of lines in the file, "+this.gvE()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.b(A.aZ("Line "+a+" doesn't have 0 columns."))
return q}}
A.lH.prototype={
ga3(){return this.a.a},
gag(){return this.a.ev(this.b)},
gaq(){return this.a.iE(this.b)},
gar(){return this.b}}
A.hy.prototype={
ga3(){return this.a.a},
gm(a){return this.c-this.b},
gP(){return A.BU(this.a,this.b)},
gM(){return A.BU(this.a,this.c)},
gaJ(){return A.dQ(B.y.T(this.a.c,this.b,this.c),0,null)},
gbc(){var s=this,r=s.a,q=s.c,p=r.ev(q)
if(r.iE(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.dQ(B.y.T(r.c,r.fI(p),r.fI(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.fI(p+1)
return A.dQ(B.y.T(r.c,r.fI(r.ev(s.b)),q),0,null)},
a0(a,b){var s
if(!(b instanceof A.hy))return this.on(0,b)
s=B.c.a0(this.b,b.b)
return s===0?B.c.a0(this.c,b.c):s},
R(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.hy))return s.om(0,b)
return s.b===b.b&&s.c===b.c&&J.v(s.a.a,b.a.a)},
gI(a){return A.c6(this.b,this.c,this.a.a,B.d,B.d,B.d,B.d)},
$ida:1}
A.rX.prototype={
vw(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.md(B.b.gG(a1).c)
s=a.e
r=A.ae(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.v(m.c,l)){a.ht("\u2575")
q.a+="\n"
a.md(l)}else if(m.b+1!==n.b){a.tp("...")
q.a+="\n"}}for(l=n.d,k=A.a_(l).i("bT<1>"),j=new A.bT(l,k),j=new A.at(j,j.gm(0),k.i("at<Z.E>")),k=k.i("Z.E"),i=n.b,h=n.a;j.k();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gP().gag()!==f.gM().gag()&&f.gP().gag()===i&&a.qm(B.a.A(h,0,f.gP().gaq()))){e=B.b.bN(r,a0)
if(e<0)A.w(A.Q(A.r(r)+" contains no null elements.",a0))
r[e]=g}}a.tn(i)
q.a+=" "
a.tm(n,r)
if(s)q.a+=" "
d=B.b.mK(l,new A.th())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gP().gag()===i?j.gP().gaq():0
a.tk(h,g,j.gM().gag()===i?j.gM().gaq():h.length,p)}else a.hv(h)
q.a+="\n"
if(k)a.tl(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.ht("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
md(a){var s,r,q=this
if(!q.f||!t.jJ.b(a))q.ht("\u2577")
else{q.ht("\u250c")
q.bj(new A.t4(q),"\x1b[34m")
s=q.r
r=" "+$.i6().mY(a)
s.a+=r}q.r.a+="\n"},
hr(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gP().gag()
i=k?null:l.a.gM().gag()
if(s&&l===c){h.bj(new A.tb(h,j,a),r)
n=!0}else if(n)h.bj(new A.tc(h,l),r)
else if(k)if(g.a)h.bj(new A.td(h),g.b)
else o.a+=" "
else h.bj(new A.te(g,h,c,j,a,l,i),p)}},
tm(a,b){return this.hr(a,b,null)},
tk(a,b,c,d){var s=this
s.hv(B.a.A(a,0,b))
s.bj(new A.t5(s,a,b,c),d)
s.hv(B.a.A(a,c,a.length))},
tl(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gP().gag()===p.gM().gag()){r.jC()
p=r.r
p.a+=" "
r.hr(a,c,b)
if(c.length!==0)p.a+=" "
r.me(b,c,r.bj(new A.t6(r,a,b),q))}else{s=a.b
if(p.gP().gag()===s){if(B.b.F(c,b))return
A.MQ(c,b)
r.jC()
p=r.r
p.a+=" "
r.hr(a,c,b)
r.bj(new A.t7(r,a,b),q)
p.a+="\n"}else if(p.gM().gag()===s){p=p.gM().gaq()
if(p===a.a.length){A.Gn(c,b)
return}r.jC()
r.r.a+=" "
r.hr(a,c,b)
r.me(b,c,r.bj(new A.t8(r,!1,a,b),q))
A.Gn(c,b)}}},
mc(a,b,c){var s=c?0:1,r=this.r
s=B.a.bg("\u2500",1+b+this.iV(B.a.A(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
tj(a,b){return this.mc(a,b,!0)},
me(a,b,c){this.r.a+="\n"
return},
hv(a){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),q=this.r,r=r.i("K.E");s.k();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.bg(" ",4)
else{p=A.bs(p)
q.a+=p}}},
hu(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.c.l(b+1)
this.bj(new A.tf(s,this,a),"\x1b[34m")},
ht(a){return this.hu(a,null,null)},
tp(a){return this.hu(null,null,a)},
tn(a){return this.hu(null,a,null)},
jC(){return this.hu(null,null,null)},
iV(a){var s,r,q,p
for(s=new A.cj(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E"),q=0;s.k();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
qm(a){var s,r,q
for(s=new A.cj(a),r=t.E,s=new A.at(s,s.gm(0),r.i("at<K.E>")),r=r.i("K.E");s.k();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
p9(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
bj(a,b){return this.p9(a,b,t.z)}}
A.tg.prototype={
$0(){return this.a},
$S:161}
A.rZ.prototype={
$1(a){var s=a.d
return new A.al(s,new A.rY(),A.a_(s).i("al<1>")).gm(0)},
$S:244}
A.rY.prototype={
$1(a){var s=a.a
return s.gP().gag()!==s.gM().gag()},
$S:33}
A.t_.prototype={
$1(a){return a.c},
$S:164}
A.t1.prototype={
$1(a){var s=a.a.ga3()
return s==null?new A.j():s},
$S:165}
A.t2.prototype={
$2(a,b){return a.a.a0(0,b.a)},
$S:166}
A.t3.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.k([],t.dg)
for(s=J.aA(c),r=s.gu(c),q=t.pg;r.k();){p=r.gn().a
o=p.gbc()
n=A.B9(o,p.gaJ(),p.gP().gaq())
n.toString
m=B.a.hw("\n",B.a.A(o,0,n)).gm(0)
l=p.gP().gag()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.b.ga1(b).b)b.push(new A.cx(j,l,d,A.k([],q)));++l}}i=A.k([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.q)(b),++k){j=b[k]
h&1&&A.H(i,16)
B.b.rt(i,new A.t0(j),!0)
f=i.length
for(q=s.bi(c,g),p=q.$ti,q=new A.at(q,q.gm(0),p.i("at<Z.E>")),n=j.b,p=p.i("Z.E");q.k();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gP().gag()>n)break
i.push(e)}g+=i.length-f
B.b.C(j.d,i)}return b},
$S:167}
A.t0.prototype={
$1(a){return a.a.gM().gag()<this.a.b},
$S:33}
A.th.prototype={
$1(a){return!0},
$S:33}
A.t4.prototype={
$0(){this.a.r.a+=B.a.bg("\u2500",2)+">"
return null},
$S:0}
A.tb.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:2}
A.tc.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:2}
A.td.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.te.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.bj(new A.t9(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gM().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.bj(new A.ta(r,o),p.b)}}},
$S:2}
A.t9.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:2}
A.ta.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.t5.prototype={
$0(){var s=this
return s.a.hv(B.a.A(s.b,s.c,s.d))},
$S:0}
A.t6.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gP().gaq(),l=n.gM().gaq()
n=this.b.a
s=q.iV(B.a.A(n,0,m))
r=q.iV(B.a.A(n,m,l))
m+=s*3
n=(p.a+=B.a.bg(" ",m))+B.a.bg("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:11}
A.t7.prototype={
$0(){return this.a.tj(this.b,this.c.a.gP().gaq())},
$S:0}
A.t8.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.bg("\u2500",3)
else r.mc(s.c,Math.max(s.d.a.gM().gaq()-1,0),!1)
return q.a.length-p.length},
$S:11}
A.tf.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.w3(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.bp.prototype={
l(a){var s=this.a
s="primary "+(""+s.gP().gag()+":"+s.gP().gaq()+"-"+s.gM().gag()+":"+s.gM().gaq())
return s.charCodeAt(0)==0?s:s}}
A.zn.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.B9(o.gbc(),o.gaJ(),o.gP().gaq())!=null)){s=A.n3(o.gP().gar(),0,0,o.ga3())
r=o.gM().gar()
q=o.ga3()
p=A.Mc(o.gaJ(),10)
o=A.wI(s,A.n3(r,A.EP(o.gaJ()),p,q),o.gaJ(),o.gaJ())}return A.JK(A.JM(A.JL(o)))},
$S:168}
A.cx.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.b.B(this.d,", ")+")"}}
A.cr.prototype={
jP(a){var s=this.a
if(!J.v(s,a.ga3()))throw A.b(A.Q('Source URLs "'+A.r(s)+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){var s=this.a
if(!J.v(s,b.ga3()))throw A.b(A.Q('Source URLs "'+A.r(s)+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a,b.ga3())&&this.b===b.gar()},
gI(a){var s=this.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dp(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.r(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iav:1,
ga3(){return this.a},
gar(){return this.b},
gag(){return this.c},
gaq(){return this.d}}
A.n4.prototype={
jP(a){if(!J.v(this.a.a,a.ga3()))throw A.b(A.Q('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gar())},
a0(a,b){if(!J.v(this.a.a,b.ga3()))throw A.b(A.Q('Source URLs "'+A.r(this.ga3())+'" and "'+A.r(b.ga3())+"\" don't match.",null))
return this.b-b.gar()},
R(a,b){if(b==null)return!1
return t.hq.b(b)&&J.v(this.a.a,b.ga3())&&this.b===b.gar()},
gI(a){var s=this.a.a
s=s==null?null:s.gI(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dp(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.r(p==null?"unknown source":p)+":"+(q.ev(r)+1)+":"+(q.iE(r)+1))+">"},
$iav:1,
$icr:1}
A.n6.prototype={
oz(a,b,c){var s,r=this.b,q=this.a
if(!J.v(r.ga3(),q.ga3()))throw A.b(A.Q('Source URLs "'+A.r(q.ga3())+'" and  "'+A.r(r.ga3())+"\" don't match.",null))
else if(r.gar()<q.gar())throw A.b(A.Q("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.jP(r))throw A.b(A.Q('Text "'+s+'" must be '+q.jP(r)+" characters long.",null))}},
gP(){return this.a},
gM(){return this.b},
gaJ(){return this.c}}
A.n7.prototype={
gkb(){return this.a},
l(a){var s,r,q,p=this.b,o="line "+(p.gP().gag()+1)+", column "+(p.gP().gaq()+1)
if(p.ga3()!=null){s=p.ga3()
r=$.i6()
s.toString
s=o+(" of "+r.mY(s))
o=s}o+=": "+this.a
q=p.vx(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iG:1}
A.h3.prototype={
gar(){var s=this.b
s=A.BU(s.a,s.b)
return s.b},
$ibj:1,
gfN(){return this.c}}
A.h4.prototype={
ga3(){return this.gP().ga3()},
gm(a){return this.gM().gar()-this.gP().gar()},
a0(a,b){var s=this.gP().a0(0,b.gP())
return s===0?this.gM().a0(0,b.gM()):s},
vx(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.I4(s,a).vw()},
R(a,b){if(b==null)return!1
return b instanceof A.h4&&this.gP().R(0,b.gP())&&this.gM().R(0,b.gM())},
gI(a){return A.c6(this.gP(),this.gM(),B.d,B.d,B.d,B.d,B.d)},
l(a){var s=this
return"<"+A.dp(s).l(0)+": from "+s.gP().l(0)+" to "+s.gM().l(0)+' "'+s.gaJ()+'">'},
$iav:1}
A.da.prototype={
gbc(){return this.d}}
A.jm.prototype={
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
p=p!=null?s+(", parameters: "+J.bM(p,new A.wN(),t.N).B(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iG:1}
A.wN.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.a0(a)},
$S:169}
A.kH.prototype={}
A.r_.prototype={
t7(){var s=this,r=s.d
return r==null?s.d=new A.e1(s,A.k([],t.fU),new A.r8(s),new A.r9(s),t.jy):r},
rz(){var s=this,r=s.e
return r==null?s.e=new A.e1(s,A.k([],t.lw),new A.r5(s),new A.r6(s),t.lU):r},
pb(){var s=this,r=s.f
return r==null?s.f=new A.e1(s,A.k([],t.lw),new A.r1(s),new A.r2(s),t.ag):r},
tV(a,b,c,d,e){var s,r,q,p,o=null,n=this.b,m=B.e.v(e)
if(m.length>255)A.w(A.aH(e,"functionName","Must not exceed 255 bytes when utf-8 encoded"))
s=new Uint8Array(A.b7(m))
r=n.a
q=r.e0(s,1)
s=r.d
p=A.CT(s,"dart_sqlite3_create_function_v2",[n.b,q,a.a,2049,0,new A.d8(new A.ra(d),o,o)])
s.dart_sqlite3_free(q)
if(p!==0)A.BB(this,p,o,o,o)},
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
r=s.kK()
q=r!==0?A.CX(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.b(q)},
aD(a,b){var s,r,q,p=this
if(b.length===0){if(p.r)A.w(A.x("This database has already been closed"))
r=p.b
q=r.a
s=q.e0(B.e.v(a),1)
q=q.d
r=A.CT(q,"sqlite3_exec",[r.b,s,0,0,0])
q.dart_sqlite3_free(s)
if(r!==0)A.BB(p,r,"executing",a,b)}else{s=p.ig(a,!0)
try{s.e6(new A.bO(b))}finally{s.q()}}},
O(a){return this.aD(a,B.m)},
qW(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.w(A.x("This database has already been closed"))
s=B.e.v(a)
r=e.b
q=r.a
p=q.cB(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.xJ(r,p,n,o)
l=A.k([],t.lE)
k=new A.r3(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.kM(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.BB(e,n,"preparing statement",a,null)}n=q.buffer
h=B.c.N(n.byteLength,4)
g=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null)l.push(new A.h6(f,e,new A.dj(!1).cV(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.kM(j,r-j,0)
n=q.buffer
h=B.c.N(n.byteLength,4)
j=new Int32Array(n,0,h)[B.c.af(o,2)]-p
f=i.a
if(f!=null){l.push(new A.h6(f,e,""))
k.$0()
throw A.b(A.aH(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.b(A.aH(a,"sql","Has trailing data after the first sql statement:"))}}m.q()
return l},
ig(a,b){var s=this.qW(a,b,1,!1,!0)
if(s.length===0)throw A.b(A.aH(a,"sql","Must contain an SQL statement."))
return B.b.gG(s)},
w5(a){return this.ig(a,!1)},
nZ(a,b){var s,r=this.ig(a,!0)
try{s=r.kF(new A.bO(b))
return s}finally{r.q()}},
nY(a){return this.nZ(a,B.m)}}
A.r8.prototype={
$0(){var s=this.a,r=s.b
r.a.mw(r.b,new A.r7(s))},
$S:0}
A.r7.prototype={
$3(a,b,c){var s=A.J5(a)
if(s==null)return
this.a.d.jN(new A.cs(s,b,c))},
$S:170}
A.r9.prototype={
$0(){var s=this.a.b
s.a.mw(s.b,null)
return null},
$S:0}
A.r5.prototype={
$0(){var s=this.a,r=s.b
r.a.mv(r.b,new A.r4(s))
return null},
$S:0}
A.r4.prototype={
$0(){this.a.e.jN(null)},
$S:0}
A.r6.prototype={
$0(){var s=this.a.b
s.a.mv(s.b,null)
return null},
$S:0}
A.r1.prototype={
$0(){var s=this.a,r=s.b
r.a.mu(r.b,new A.r0(s))
return null},
$S:0}
A.r0.prototype={
$0(){var s=this.a.f
s.jN(null)
return 0},
$S:11}
A.r2.prototype={
$0(){var s=this.a.b
s.a.mu(s.b,null)
return null},
$S:0}
A.ra.prototype={
$2(a,b){A.KL(a,this.a,b)},
$S:171}
A.r3.prototype={
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
A.nN.prototype={
gm(a){return this.a.b},
sm(a,b){throw A.b(A.Y("Changing the length of sql arguments in Dart"))},
h(a,b){var s,r,q=this.a
A.IP(b,this,"index",q.b)
s=this.b
r=s[b]
if(r==null){q=A.IR(q.h(0,b))
s[b]=q}else q=r
return q},
j(a,b,c){throw A.b(A.Q("The argument list is unmodifiable",null))},
$iwK:1}
A.e1.prototype={
gcQ(){var s=this.r
return s==null?this.r=this.pZ(!1):s},
pZ(a){return new A.di(new A.A2(this,!1),this.$ti.i("di<1>"))},
jN(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.w(o.bD())
if((n&1)!==0)o.gaM().aA(a)}else{n=o.b
if(n>=4)A.w(o.bD())
if((n&1)!==0)o.cu(a)
else if((n&3)===0){n=o.fX()
o=new A.cb(a,o.$ti.i("cb<1>"))
m=n.c
if(m==null)n.b=n.c=o
else{m.seh(o)
n.c=o}}}}},
q(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].a.q()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.A2.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.q()
return}s=this.b
r=new A.A3(q,a,s)
a.r=a.e=new A.A4(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.i("~(dI<1>)")}}
A.A3.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.k2(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.A4.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,new A.k2(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.wJ.prototype={
mL(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.b(A.J4(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
vW(a,b){var s,r,q,p,o,n,m,l,k,j
this.mL()
switch(2){case 2:break}s=this.a
r=s.a
q=r.e0(B.e.v(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.e0(B.e.v(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.d5(r.b.buffer,0,null)[B.c.af(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.j()
k=new A.xC(r,l,o)
r=r.r
if(r!=null)r.mm(k,l,o)
if(m!==0){j=A.CX(s,k,m,"opening the database",null,null)
k.kK()
throw A.b(j)}p.sqlite3_extended_result_codes(l,1)
return new A.r_(s,k,!1)}}
A.h6.prototype={
gpa(){var s,r,q,p,o,n,m,l=this.a,k=l.c
l=l.b
s=k.d
r=s.sqlite3_column_count(l)
q=A.k([],t.s)
for(k=k.b,p=0;p<r;++p){o=s.sqlite3_column_name(l,p)
n=k.buffer
m=A.nX(k,o)
o=new Uint8Array(n,o,m)
q.push(new A.dj(!1).cV(o,0,null,!0))}return q},
gt_(){return null},
bz(a,b){A.BB(this.b,a,b,this.d,this.e)},
ll(){if(this.r||this.b.r)throw A.b(A.x(u.f))},
fZ(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.dm()
if(s!==0?s!==101:q)r.bz(s,"executing statement")},
rI(){var s,r,q,p,o,n,m=this,l=A.k([],t.dO),k=m.f=!1
for(s=m.a,r=s.b,s=s.c.d,q=-1;p=s.sqlite3_step(r),p===100;){if(q===-1)q=s.sqlite3_column_count(r)
p=[]
for(o=0;o<q;++o)p.push(m.rk(o))
l.push(p)}m.dm()
if(p!==0?p!==101:k)m.bz(p,"selecting from statement")
n=m.gpa()
m.gt_()
k=new A.mR(l,n,B.al)
k.p0()
return k},
rk(a){var s=this.a,r=s.b,q=s.c.d
switch(q.sqlite3_column_type(r,a)){case 1:s=q.sqlite3_column_int64(r,a)
r=v.G
return r.Number.isSafeInteger(r.Number(s))?A.ao(r.Number(s)):A.EK(s.toString(),null)
case 2:return q.sqlite3_column_double(r,a)
case 3:return s.ob(a)
case 4:return s.kL(a)
case 5:default:return null}},
oU(a){var s,r=a.length,q=this.a
q=q.c.d.sqlite3_bind_parameter_count(q.b)
if(r!==q)A.w(A.aH(a,"parameters","Expected "+A.r(q)+" parameters, got "+r))
q=a.length
if(q===0)return
for(s=1;s<=a.length;++s)this.oV(a[s-1],s)
this.e=a},
oV(a,b){var s,r,q=this
A:{if(a==null){s=q.a
s=s.c.d.sqlite3_bind_null(s.b,b)
break A}if(A.ah(a)){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(a))
break A}if(a instanceof A.aJ){s=q.a
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(A.Dr(a).l(0)))
break A}if(A.bH(a)){s=q.a
r=a?1:0
s=s.c.d.sqlite3_bind_int64(s.b,b,v.G.BigInt(r))
break A}if(typeof a=="number"){s=q.a
s=s.c.d.sqlite3_bind_double(s.b,b,a)
break A}if(typeof a=="string"){s=q.a.oa(b,a)
break A}if(t.L.b(a)){s=q.a.o9(b,a)
break A}s=q.oT(a,b)
break A}if(s!==0)q.bz(s,"binding parameter")},
oT(a,b){throw A.b(A.aH(a,"params["+b+"]","Allowed parameters must either be null or bool, int, num, String or List<int>."))},
ez(a){A:{if(a instanceof A.bO){this.oU(a.a)
break A}if(a instanceof A.lh)a.a.$1(this)}},
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
if(r!=null)r.mz(s.d)}},
kF(a){var s=this
s.ll()
s.dm()
s.ez(a)
return s.rI()},
e6(a){var s=this
s.ll()
s.dm()
s.ez(a)
s.fZ()}}
A.lV.prototype={
iz(a,b){return this.d.J(a)?1:0},
ky(a,b){this.d.H(0,a)},
kz(a){return new v.G.URL(a,"file:///").pathname},
dt(a,b){var s,r=a.a
if(r==null)r=A.DO(this.b,"/")
s=this.d
if(!s.J(r))if((b&4)!==0)s.j(0,r,new A.cw(new Uint8Array(0),0))
else throw A.b(A.hi(14))
return new A.hF(new A.on(this,r,(b&8)!==0),0)},
kB(a){}}
A.on.prototype={
n0(a,b){var s,r=this.a.d.h(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.ai(a,0,s,J.bL(B.f.gaa(r.a),0,r.b),b)
return s},
kx(){return this.d>=2?1:0},
iA(){if(this.c)this.a.d.H(0,this.b)},
fE(){return this.a.d.h(0,this.b).b},
kA(a){this.d=a},
kC(a){},
fF(a){var s=this.a.d,r=this.b,q=s.h(0,r)
if(q==null){s.j(0,r,new A.cw(new Uint8Array(0),0))
s.h(0,r).sm(0,a)}else q.sm(0,a)},
kD(a){this.d=a},
eu(a,b){var s,r=this.a.d,q=this.b,p=r.h(0,q)
if(p==null){p=new A.cw(new Uint8Array(0),0)
r.j(0,q,p)}s=b+a.length
if(s>p.b)p.sm(0,s)
p.au(0,b,s,a)}}
A.Bp.prototype={
$1(a){return a.length!==0},
$S:9}
A.qF.prototype={
p0(){var s,r,q,p,o=A.t(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q]
o.j(0,p,B.b.dg(s,p))}this.c=o}}
A.mR.prototype={
gu(a){return new A.zM(this)},
h(a,b){return new A.c7(this,A.fC(this.d[b],t.X))},
j(a,b,c){throw A.b(A.Y("Can't change rows from a result set"))},
gm(a){return this.d.length},
$iJ:1,
$io:1,
$ip:1}
A.c7.prototype={
h(a,b){var s
if(typeof b!="string"){if(A.ah(b))return this.b[b]
return null}s=this.a.c.h(0,b)
if(s==null)return null
return this.b[s]},
gK(){return this.a.a},
gaX(){return this.b},
$iI:1}
A.zM.prototype={
gn(){var s=this.a
return new A.c7(s,A.fC(s.d[this.b],t.X))},
k(){return++this.b<this.a.d.length}}
A.oD.prototype={}
A.oE.prototype={}
A.oG.prototype={}
A.oH.prototype={}
A.ve.prototype={
a4(){return"OpenMode."+this.b}}
A.eg.prototype={}
A.bO.prototype={}
A.lh.prototype={}
A.de.prototype={
l(a){return"VfsException("+this.a+")"},
$iG:1}
A.jl.prototype={}
A.b4.prototype={}
A.kX.prototype={}
A.kW.prototype={
giB(){return 0},
nh(a,b){return 12},
giD(){return 4096},
iC(a,b){var s=this.n0(a,b),r=a.length
if(s<r){B.f.jT(a,s,r,0)
throw A.b(B.dP)}},
$ibn:1,
$ijw:1}
A.eL.prototype={}
A.BA.prototype={
$0(){var s,r,q
for(s=this.a;!s.gE(0);){if(s.b===0)A.w(A.x("No such element"))
r=s.c
q=r.a
q.toString
q.jy(A.n(r).i("b2.E").a(r))
r.d.$0()}},
$S:0}
A.By.prototype={
$1(a){var s=this.a,r=s.b
s.h6(s.c,new A.eL(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:21}
A.Bz.prototype={
$4(a,b,c,d){this.a.$1(c.eY(d))},
$S:173}
A.xH.prototype={}
A.xC.prototype={
kK(){var s=this.a,r=s.r
if(r!=null)r.mz(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.xJ.prototype={
q(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
kM(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.CT(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.d5(o.b.buffer,0,null)[B.c.af(n,2)]
if(s===0)r=null
else{n=new A.j()
r=new A.xI(s,o,n)
o=o.w
if(o!=null)o.mm(r,s,n)}return new A.oB(r,p)}}
A.xI.prototype={
o9(a,b){var s=this.c
return s.d.dart_sqlite3_bind_blob(this.b,a,s.cB(b),J.ap(b))},
oa(a,b){var s=B.e.v(b),r=this.c
return r.d.dart_sqlite3_bind_text(this.b,a,r.cB(s),s.length)},
kL(a){var s=this.c,r=this.b,q=s.d,p=q.sqlite3_column_bytes(r,a)
return A.Ez(s.b,q.sqlite3_column_blob(r,a),p)},
ob(a){var s=this.c
return A.dU(s.b,s.d.sqlite3_column_text(this.b,a),null)}}
A.dT.prototype={$iCf:1}
A.df.prototype={$iCg:1}
A.hk.prototype={
sm(a,b){throw A.b(A.Y("Setting length in WasmValueList"))},
h(a,b){var s=this.a
return new A.df(s,A.d5(s.b.buffer,0,null)[B.c.af(this.c+b*4,2)])},
j(a,b,c){throw A.b(A.Y("Setting element in WasmValueList"))},
gm(a){return this.b}}
A.lk.prototype={
vP(a){var s,r,q=this.b
q===$&&A.y()
s="[sqlite3] "+A.dU(q,a,null)
r=$.Lh
if(r==null)A.Gj(s)
else r.$1(s)},
vN(a,b){var s,r=new A.aW(A.lo(A.ao(v.G.Number(a))*1000,0,!1),0,!1),q=this.b
q===$&&A.y()
s=A.E4(q.buffer,b,8)
s.$flags&2&&A.H(s)
s[0]=A.Cd(r)
s[1]=A.Cb(r)
s[2]=A.Ca(r)
s[3]=A.vM(r)
s[4]=A.Cc(r)-1
s[5]=A.Ce(r)-1900
s[6]=B.c.al(A.IH(r),7)},
xA(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.y()
s=new A.jl(A.Cv(j,b,k))
try{r=a.dt(s,d)
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
xo(a,b,c){var s=this.b
s===$&&A.y()
return A.bX(new A.qL(a,A.dU(s,b,null),c))},
xg(a,b,c,d){var s=this.b
s===$&&A.y()
return A.bX(new A.qI(this,a,A.dU(s,b,null),c,d))},
xw(a,b,c,d){var s=this.b
s===$&&A.y()
return A.bX(new A.qN(this,a,A.dU(s,b,null),c,d))},
xC(a,b,c){return A.bX(new A.qP(this,c,b,a))},
xH(a,b){return A.bX(new A.qR(a,b))},
xm(a,b){var s,r=Date.now(),q=this.b
q===$&&A.y()
s=v.G.BigInt(r)
A.C1(A.E3(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
xk(a){return A.bX(new A.qK(a))},
xE(a,b,c,d){return A.bX(new A.qQ(this,a,b,c,d))},
xP(a,b,c,d){return A.bX(new A.qV(this,a,b,c,d))},
xL(a,b){return A.bX(new A.qT(a,b))},
xJ(a,b){return A.bX(new A.qS(a,b))},
xu(a,b){return A.bX(new A.qM(this,a,b))},
xy(a,b){return A.bX(new A.qO(a,b))},
xN(a,b){return A.bX(new A.qU(a,b))},
xi(a,b){return A.bX(new A.qJ(this,a,b))},
xp(a){return a.giB()},
xs(a,b,c){if(t.j2.b(a))return a.nh(b,c)
return 12},
xF(a){if(t.j2.b(a))return a.giD()
return 4096},
ul(a){a.$0()},
ug(a){return a.$0()},
uj(a,b,c,d,e){var s=this.b
s===$&&A.y()
a.$3(b,A.dU(s,d,null),A.ao(v.G.Number(e)))},
us(a,b,c,d){var s,r=a.a
r.toString
s=this.a
s===$&&A.y()
r.$2(new A.dT(s,b),new A.hk(s,c,d))},
uw(a,b,c,d){var s,r=a.b
r.toString
s=this.a
s===$&&A.y()
r.$2(new A.dT(s,b),new A.hk(s,c,d))},
uu(a,b,c,d){var s
null.toString
s=this.a
s===$&&A.y()
null.$2(new A.dT(s,b),new A.hk(s,c,d))},
uy(a,b){var s
null.toString
s=this.a
s===$&&A.y()
null.$1(new A.dT(s,b))},
uq(a,b){var s,r=a.c
r.toString
s=this.a
s===$&&A.y()
r.$1(new A.dT(s,b))},
un(a,b,c,d,e){var s=this.b
s===$&&A.y()
return null.$2(A.Cv(s,c,b),A.Cv(s,e,d))},
ue(a,b){return a.$1(b)},
uc(a,b){return a.gxT().$1(b)},
u9(a,b,c){return a.gxS().$2(b,c)}}
A.qL.prototype={
$0(){return this.a.ky(this.b,this.c)},
$S:0}
A.qI.prototype={
$0(){var s,r=this,q=r.b.iz(r.c,r.d),p=r.a.b
p===$&&A.y()
p=A.d5(p.buffer,0,null)
s=B.c.af(r.e,2)
p.$flags&2&&A.H(p)
p[s]=q},
$S:0}
A.qN.prototype={
$0(){var s,r,q=this,p=B.e.v(q.b.kz(q.c)),o=p.length
if(o>q.d)throw A.b(A.hi(14))
s=q.a.b
s===$&&A.y()
s=A.bS(s.buffer,0,null)
r=q.e
B.f.cO(s,r,p)
s.$flags&2&&A.H(s)
s[r+o]=0},
$S:0}
A.qP.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.y()
s=A.bS(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.Dp(s,q.b)
else return A.Dp(s,null)},
$S:0}
A.qR.prototype={
$0(){this.a.kB(A.dv(this.b,0,0))},
$S:0}
A.qK.prototype={
$0(){return this.a.iA()},
$S:0}
A.qQ.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.y()
s.b.iC(A.bS(r.buffer,s.c,s.d),A.ao(v.G.Number(s.e)))},
$S:0}
A.qV.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.y()
s.b.eu(A.bS(r.buffer,s.c,s.d),A.ao(v.G.Number(s.e)))},
$S:0}
A.qT.prototype={
$0(){return this.a.fF(A.ao(v.G.Number(this.b)))},
$S:0}
A.qS.prototype={
$0(){return this.a.kC(this.b)},
$S:0}
A.qM.prototype={
$0(){var s,r=this.b.fE(),q=this.a.b
q===$&&A.y()
q=A.d5(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.qO.prototype={
$0(){return this.a.kA(this.b)},
$S:0}
A.qU.prototype={
$0(){return this.a.kD(this.b)},
$S:0}
A.qJ.prototype={
$0(){var s,r=this.b.kx(),q=this.a.b
q===$&&A.y()
q=A.d5(q.buffer,0,null)
s=B.c.af(this.c,2)
q.$flags&2&&A.H(q)
q[s]=r},
$S:0}
A.d8.prototype={}
A.ib.prototype={
a9(a,b,c,d){var s,r=null,q={},p=A.be(A.C1(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.wQ(r,r,r,!0,this.$ti.c)
q.a=null
s=new A.pv(q,this,p,o)
o.d=s
o.f=new A.pw(q,o,s)
return new A.b5(o,A.n(o).i("b5<1>")).a9(a,b,c,d)},
by(a,b,c){return this.a9(a,null,b,c)}}
A.pv.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.a5(q,t.m).bS(new A.px(p,r.b,s,r),s.gtu(),t.P)},
$S:0}
A.px.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.q()
q.a.a=null}else{r.t(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.gaM().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:22}
A.pw.prototype={
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
return s==null?A.w(A.x("Await moveNext() first")):s},
k(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.u($.C,t.g5)
s=new A.an(o,t.ex)
r=p.d
q=t.m
p.b=A.bo(r,"success",new A.yQ(p,s),!1,q)
p.c=A.bo(r,"error",new A.yR(p,s),!1,q)
return o}}
A.yQ.prototype={
$1(a){var s,r=this.a
r.D()
s=r.$ti.i("1?").a(r.d.result)
r.a=s
this.b.aB(s!=null)},
$S:1}
A.yR.prototype={
$1(a){var s=this.a
s.D()
s=s.d.error
if(s==null)s=a
this.b.aR(s)},
$S:1}
A.qi.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qj.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qn.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qo.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qp.prototype={
$1(a){this.a.aR(new A.bk("IndexedDB open blocked"))},
$S:1}
A.rD.prototype={
$1(a){return A.be(a[1])},
$S:195}
A.xD.prototype={
tW(){var s={}
s.dart=new A.xE(this).$0()
return s},
i7(a){return this.vJ(a)},
vJ(a){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i7=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(A.a5(v.G.WebAssembly.instantiateStreaming(a,p.tW()),t.m),$async$i7)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i7,r)}}
A.xE.prototype={
$0(){var s=this.a.a,r=A.be(v.G.Object),q=A.be(r.create.apply(r,[null]))
q.error_log=A.cY(s.gvO())
q.localtime=A.bV(s.gvM())
q.xOpen=A.CO(s.gxz())
q.xDelete=A.p4(s.gxn())
q.xAccess=A.hT(s.gxf())
q.xFullPathname=A.hT(s.gxv())
q.xRandomness=A.p4(s.gxB())
q.xSleep=A.bV(s.gxG())
q.xCurrentTimeInt64=A.bV(s.gxl())
q.xClose=A.cY(s.gxj())
q.xRead=A.hT(s.gxD())
q.xWrite=A.hT(s.gxO())
q.xTruncate=A.bV(s.gxK())
q.xSync=A.bV(s.gxI())
q.xFileSize=A.bV(s.gxt())
q.xLock=A.bV(s.gxx())
q.xUnlock=A.bV(s.gxM())
q.xCheckReservedLock=A.bV(s.gxh())
q.xDeviceCharacteristics=A.cY(s.giB())
q.xFileControl=A.p4(s.gxq())
q.xSectorSize=A.cY(s.giD())
q["dispatch_()v"]=A.cY(s.guk())
q["dispatch_()i"]=A.cY(s.guf())
q.dispatch_update=A.CO(s.gui())
q.dispatch_xFunc=A.hT(s.gur())
q.dispatch_xStep=A.hT(s.guv())
q.dispatch_xInverse=A.hT(s.gut())
q.dispatch_xValue=A.bV(s.gux())
q.dispatch_xFinal=A.bV(s.guo())
q.dispatch_compare=A.CO(s.gum())
q.dispatch_busy=A.bV(s.gud())
q.changeset_apply_filter=A.bV(s.gua())
q.changeset_apply_conflict=A.p4(s.gu8())
return q},
$S:26}
A.hj.prototype={}
A.py.prototype={
ia(){var s=0,r=A.h(t.H),q=this,p,o
var $async$ia=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=new A.u($.C,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.cY(new A.pB(o))
new A.an(p,t.h1).aB(A.HG(o,t.m))
s=2
return A.a(p,$async$ia)
case 2:q.a=b
return A.e(null,r)}})
return A.f($async$ia,r)},
dW(a,b){return this.rB(a,b)},
rB(a,b){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$dW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.H8(),b)
o=A.JN(p)
s=2
return A.a(A.MR(new A.pA(a,o,p),t.mj),$async$dW)
case 2:s=3
return A.a(o.b.a,$async$dW)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.e(null,r)}})
return A.f($async$dW,r)},
qU(a){return this.dW(new A.pz(a),"readwrite")}}
A.pB.prototype={
$1(a){var s=A.be(this.a.result)
if(J.v(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:22}
A.pA.prototype={
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
$S:17}
A.pz.prototype={
$1(a){return this.ni(a)},
ni(a){var s=0,r=A.h(t.H),q=this,p,o,n
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
oD(a){var s=A.AI(new A.zq(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.AI(new A.zr(this))},
jm(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.k([a,c],s),A.k([a,b],s))},
rh(a){return this.jm(a,9007199254740992,0)},
ri(a,b){return this.jm(a,9007199254740992,b)},
i6(){var s=0,r=A.h(t.dV),q,p=this,o,n,m,l,k
var $async$i6=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=A.t(t.N,t.S)
k=new A.eP(p.d.index("fileName").openKeyCursor(),t.R)
case 3:s=5
return A.a(k.k(),$async$i6)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.w(A.x("Await moveNext() first"))
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
return A.f($async$i6,r)},
hQ(a){return this.uY(a)},
uY(a){var s=0,r=A.h(t.U),q,p=this,o
var $async$hQ=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.a(A.cD(p.d.index("fileName").getKey(a),t.W),$async$hQ)
case 3:q=o.ao(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hQ,r)},
jn(a){return A.cD(this.d.get(a),t.B).X(new A.zp(a),t.m)},
ew(a,b){return this.oc(a,b)},
oc(a,b){var s=0,r=A.h(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$ew=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.jn(a),$async$ew)
case 3:h=d
g=h.length
f=new A.cw(new Uint8Array(g),g)
e=new A.eP(p.e.openCursor(p.rh(a)),t.R)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.a(e.k(),$async$ew)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.w(A.x("Await moveNext() first"))
k=n.a(l.key)
j=A.ao(A.eZ(k[1]))
if(j>=h.length){s=5
break}i=new A.zs(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.wr(A.be(l.value)).X(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$ew,r)},
hG(a){return this.tT(a)},
tT(a){var s=0,r=A.h(t.S),q,p=this,o
var $async$hG=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.w(A.x("IDB transaction already completed"))
o=A
s=3
return A.a(A.cD(p.d.put({name:a,length:0}),t.W),$async$hG)
case 3:q=o.ao(c)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hG,r)},
aZ(a,b){return this.x8(a,b)},
x8(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l
var $async$aZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.x("IDB transaction already completed"))
s=2
return A.a(q.jn(a),$async$aZ)
case 2:p=d
o=b.b
n=A.n(o).i("T<1>")
m=A.O(new A.T(o,n),n.i("o.E"))
B.b.aE(m)
s=3
return A.a(A.BX(new A.X(m,new A.zt(new A.zu(q,a),b),A.a_(m).i("X<1,A<~>>")),t.H),$async$aZ)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.eP(q.d.openCursor(a),t.R)
s=6
return A.a(l.k(),$async$aZ)
case 6:s=7
return A.a(A.cD(l.gn().update({name:p.name,length:b.c}),t.X),$async$aZ)
case 7:case 5:return A.e(null,r)}})
return A.f($async$aZ,r)},
dr(a,b,c){return this.wJ(0,b,c)},
wJ(a,b,c){var s=0,r=A.h(t.H),q=this,p,o
var $async$dr=A.c(function(d,e){if(d===1)return A.d(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.x("IDB transaction already completed"))
s=2
return A.a(q.jn(b),$async$dr)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.a(A.cD(q.e.delete(q.ri(b,B.c.N(c,4096)*4096)),t.X),$async$dr)
case 5:case 4:o=new A.eP(q.d.openCursor(b),t.R)
s=6
return A.a(o.k(),$async$dr)
case 6:s=7
return A.a(A.cD(o.gn().update({name:p.name,length:c}),t.X),$async$dr)
case 7:return A.e(null,r)}})
return A.f($async$dr,r)},
hK(a){return this.u6(a)},
u6(a){var s=0,r=A.h(t.H),q=this,p
var $async$hK=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.w(A.x("IDB transaction already completed"))
p=t.X
s=2
return A.a(A.BX(A.k([A.cD(q.e.delete(q.jm(a,9007199254740992,0)),p),A.cD(q.d.delete(a),p)],t.iw),t.H),$async$hK)
case 2:return A.e(null,r)}})
return A.f($async$hK,r)}}
A.zq.prototype={
$0(){this.a.b.an()},
$S:2}
A.zr.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.aR(r)},
$S:2}
A.zp.prototype={
$1(a){if(a==null)throw A.b(A.aH(this.a,"fileId","File not found in database"))
else return a},
$S:198}
A.zs.prototype={
$1(a){var s=this.a
s.cO(s,this.b,J.bL(a,0,this.c))},
$S:199}
A.zu.prototype={
nR(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.a(A.cD(p.openCursor(v.G.IDBKeyRange.only(A.k([o,a],n))),t.B),$async$$2)
case 2:m=d
l=t.a.a(B.f.gaa(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.a(A.cD(p.put(l,A.k([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.a(A.cD(m.update(l),k),$async$$2)
case 7:case 4:return A.e(null,r)}})
return A.f($async$$2,r)},
$2(a,b){return this.nR(a,b)},
$S:200}
A.zt.prototype={
$1(a){var s=this.b.b.h(0,a)
s.toString
return this.a.$2(a,s)},
$S:201}
A.z1.prototype={
t6(a,b,c){B.f.cO(this.b.kj(a,new A.z2(this,a)),b,c)},
ty(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.c.N(q,4096)
o=B.c.al(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.t6(p*4096,o,J.bL(B.f.gaa(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.z2.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cO(s,0,J.bL(B.f.gaa(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:202}
A.ow.prototype={}
A.dA.prototype={
eV(a){var s=this
if(s.e||s.d.a==null)A.w(A.hi(10))
if(a.k5(s.x)){s.cw(!0)
return a.d.a}else return A.b8(null,t.H)},
cw(a){return this.rV(a)},
rV(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$cw=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gE(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.O(o,o.$ti.i("o.E"))
o.aj(0)
s=5
return A.a(p.d.qU(n).aY(new A.tk(p,n,a)),$async$cw)
case 5:case 4:case 1:return A.e(q,r)}})
return A.f($async$cw,r)},
q(){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$q=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.eV(new A.jR(new A.tl(),new A.an(new A.u($.C,t.D),t.F)))
p.e=!0
p.cw(!1)
q=o
s=1
break}else{n=p.x
if(!n.gE(0)){q=n.ga1(0).d.a
s=1
break}}case 1:return A.e(q,r)}})
return A.f($async$q,r)},
dH(a,b){return this.pV(a,b)},
pV(a,b){var s=0,r=A.h(t.S),q,p=this,o,n
var $async$dH=A.c(function(c,d){if(c===1)return A.d(d,r)
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
return A.a(a.hQ(b),$async$dH)
case 6:o=d
o.toString
n.j(0,b,o)
q=o
s=1
break
case 4:case 1:return A.e(q,r)}})
return A.f($async$dH,r)},
eO(){var s=0,r=A.h(t.H),q=this,p
var $async$eO=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=A.k([],t.iw)
s=2
return A.a(q.d.dW(new A.tj(q,p),"readonly"),$async$eO)
case 2:s=3
return A.a(A.I1(p,t.H),$async$eO)
case 3:return A.e(null,r)}})
return A.f($async$eO,r)},
cE(){return this.cw(!1)},
iz(a,b){return this.w.d.J(a)?1:0},
ky(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.eV(new A.jL(s,a,new A.an(new A.u($.C,t.D),t.F)))},
kz(a){return new v.G.URL(a,"file:///").pathname},
dt(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.DO(p.b,"/")
s=p.w
r=s.d.J(o)?1:0
q=s.dt(new A.jl(o),b)
if(r===0)if((b&8)!==0)p.y.t(0,o)
else p.eV(new A.hu(p,o,new A.an(new A.u($.C,t.D),t.F)))
return new A.hF(new A.oo(p,q.a,o),0)},
kB(a){}}
A.tk.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.w(A.x("Future already completed"))
p.cm(null)}o.cw(this.c)},
$S:2}
A.tl.prototype={
$1(a){return this.np(a)},
np(a){var s=0,r=A.h(t.H)
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.e(null,r)}})
return A.f($async$$1,r)},
$S:24}
A.tj.prototype={
$1(a){return this.no(a)},
no(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=2
return A.a(a.i6(),$async$$1)
case 2:m=c
l=q.a
l.z.C(0,m)
p=m.gab(),p=p.gu(p),o=q.b,l=l.w.d
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
$S:24}
A.oo.prototype={
iC(a,b){this.b.iC(a,b)},
giB(){return 0},
giD(){return 4096},
kx(){return this.b.d>=2?1:0},
iA(){},
fE(){return this.b.fE()},
kA(a){this.b.d=a
return null},
kC(a){},
nh(a,b){return 12},
fF(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.w(A.hi(10))
s.b.fF(a)
if(!r.y.F(0,s.c))r.eV(new A.jR(new A.zo(s,a),new A.an(new A.u($.C,t.D),t.F)))},
kD(a){this.b.d=a
return null},
eu(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.w(A.hi(10))
s=m.c
if(l.y.F(0,s)){m.b.eu(a,b)
return}r=l.w.d.h(0,s)
if(r==null)r=new A.cw(new Uint8Array(0),0)
q=J.bL(B.f.gaa(r.a),0,r.b)
m.b.eu(a,b)
p=new Uint8Array(a.length)
B.f.cO(p,0,a)
o=A.k([],t.p8)
n=$.C
o.push(new A.ow(b,p))
l.eV(new A.hP(l,s,q,o,new A.an(new A.u(n,t.D),t.F)))},
$ibn:1,
$ijw:1}
A.zo.prototype={
$1(a){return this.nQ(a)},
nQ(a){var s=0,r=A.h(t.H),q,p=this,o,n
var $async$$1=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.a(o.a.dH(a,o.c),$async$$1)
case 3:q=n.dr(0,c,p.b)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$1,r)},
$S:24}
A.b6.prototype={
k5(a){a.h6(a.c,this,!1)
return!0}}
A.jR.prototype={
aU(a){return this.w.$1(a)}}
A.jL.prototype={
k5(a){var s,r,q,p
if(!a.gE(0)){s=a.ga1(0)
for(r=this.x;s!=null;)if(s instanceof A.jL)if(s.x===r)return!1
else s=s.gfm()
else if(s instanceof A.hP){q=s.gfm()
if(s.x===r){p=s.a
p.toString
p.jy(A.n(s).i("b2.E").a(s))}s=q}else if(s instanceof A.hu){if(s.x===r){r=s.a
r.toString
r.jy(A.n(s).i("b2.E").a(s))
return!1}s=s.gfm()}else break}a.h6(a.c,this,!1)
return!0},
aU(a){return this.wB(a)},
wB(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.a(p.dH(a,o),$async$aU)
case 2:n=c
p.z.H(0,o)
s=3
return A.a(a.hK(n),$async$aU)
case 3:return A.e(null,r)}})
return A.f($async$aU,r)}}
A.hu.prototype={
aU(a){return this.wA(a)},
wA(a){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.a(a.hG(p),$async$aU)
case 2:o.j(0,n,c)
return A.e(null,r)}})
return A.f($async$aU,r)}}
A.hP.prototype={
k5(a){var s,r=a.b===0?null:a.ga1(0)
for(s=this.x;r!=null;)if(r instanceof A.hP)if(r.x===s){B.b.C(r.z,this.z)
return!1}else r=r.gfm()
else if(r instanceof A.hu){if(r.x===s)break
r=r.gfm()}else break
a.h6(a.c,this,!1)
return!0},
aU(a){return this.wC(a)},
wC(a){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$aU=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.z1(m,A.t(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.q)(m),++o){n=m[o]
l.ty(n.a,n.b)}k=a
s=3
return A.a(q.w.dH(a,q.x),$async$aU)
case 3:s=2
return A.a(k.aZ(c,l),$async$aU)
case 2:return A.e(null,r)}})
return A.f($async$aU,r)}}
A.fw.prototype={
a4(){return"FileType."+this.b}}
A.h2.prototype={
bJ(){var s=this.d
if(s!=null)return s
throw A.b(A.x("VFS closed"))},
iz(a,b){var s=$.BF().h(0,a)
if(s==null)return this.e.d.J(a)?1:0
else return this.bJ().bo(s)?1:0},
ky(a,b){var s=$.BF().h(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.bJ().fh(s,!1)},
kz(a){return new v.G.URL(a,"file:///").pathname},
dt(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.dt(a,b)
s=$.BF().h(0,p)
if(s==null)return q.e.dt(a,b)
r=q.bJ()
if(!r.bo(s))if((b&4)!==0){r.dd(s).truncate(0)
r.fh(s,!0)}else throw A.b(B.dO)
return new A.hF(new A.oM(q,s,(b&8)!==0),0)},
kB(a){},
q(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
cJ(a,b){return this.vY(a,b)},
cI(a){return this.cJ(a,!1)},
vY(a,b){var s=0,r=A.h(t.H),q=this,p,o,n,m,l,k
var $async$cJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=new A.wG(a,b)
s=2
return A.a(m.$1("meta"),$async$cJ)
case 2:l=d
k=J.v(l.getSize(),0)
l.truncate(2)
s=3
return A.a(m.$1("database"),$async$cJ)
case 3:p=d
s=4
return A.a(m.$1("journal"),$async$cJ)
case 4:o=d
n=q.d=new A.zI(new Uint8Array(2),l,p,o)
if(k){n.fh(B.b_,p.getSize()>0)
n.fh(B.b0,o.getSize()>0)}return A.e(null,r)}})
return A.f($async$cJ,r)}}
A.wG.prototype={
nM(a){var s=0,r=A.h(t.m),q,p=this,o,n
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
$1(a){return this.nM(a)},
$S:203}
A.oM.prototype={
n0(a,b){return A.DL(this.a.bJ().dd(this.b),a,{at:b})},
kx(){return this.d>=2?1:0},
iA(){var s=this.a,r=this.b
s.bJ().dd(r).flush()
if(this.c)s.bJ().fh(r,!1)},
fE(){return this.a.bJ().dd(this.b).getSize()},
kA(a){this.d=a},
kC(a){this.a.bJ().dd(this.b).flush()},
fF(a){this.a.bJ().dd(this.b).truncate(a)},
kD(a){this.d=a},
eu(a,b){if(A.DM(this.a.bJ().dd(this.b),a,{at:b})<a.length)throw A.b(B.dQ)}}
A.zI.prototype={
bo(a){var s=this.a
A.DL(this.b,s,{at:0})
return s[a.a]!==0},
fh(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.H(s)
s[a.a]=r
A.DM(this.b,s,{at:0})},
dd(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.xx.prototype={
oA(a,b){var s=this,r=s.c
r.a!==$&&A.cg()
r.a=s
r=t.S
A.z3(new A.xy(s),r)
A.z3(new A.xz(s),r)
s.r=A.z3(new A.xA(s),r)
s.w=A.z3(new A.xB(s),r)},
e0(a,b){var s=J.M(a),r=this.d.dart_sqlite3_malloc(s.gm(a)+b),q=A.bS(this.b.buffer,0,null)
B.f.au(q,r,r+s.gm(a),a)
B.f.jT(q,r+s.gm(a),r+s.gm(a)+b,0)
return r},
cB(a){return this.e0(a,0)},
mw(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
mu(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
mv(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.xy.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:8}
A.xz.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:8}
A.xA.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:8}
A.xB.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:8}
A.ik.prototype={}
A.vP.prototype={
ox(a){var s,r=this,q=r.a
q.start()
r.c=A.bo(q,"message",new A.vT(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.kB()
q.toString
A.jy(q,s,null,null,!1).X(new A.vU(r),t.P)}},
jb(a){return this.q5(a)},
q5(a){var s=0,r=A.h(t.H),q=this
var $async$jb=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:A.Mh(a,new A.vQ(q),q.gvm(),new A.vR(q),new A.vS(q))
return A.e(null,r)}})
return A.f($async$jb,r)},
fL(a,b,c){return this.o4(a,b,c,c)},
o4(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m
var $async$fL=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)throw A.b(A.Hw(null))
o=p.e++
n=new A.u($.C,t.a7)
p.f.j(0,o,new A.an(n,t.h1))
a.i=o
p.a.postMessage(a,A.hZ(a))
s=3
return A.a(n,$async$fL)
case 3:m=f
if(J.v(m.t,b.b)){q=c.a(m)
s=1
break}else throw A.b(A.IT(m))
case 1:return A.e(q,r)}})
return A.f($async$fL,r)},
qp(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.D()
s=q.d
if(s!=null)s.D()
for(s=q.f,r=new A.aR(s,s.r,s.e,A.n(s).i("aR<2>"));r.k();)r.d.aR(new A.ii(a))
s.aj(0)
p.an()},
lC(){return this.qp(null)}}
A.vT.prototype={
$1(a){if(a.data=="_disconnect"){this.a.lC()
return}this.a.jb(A.be(a.data))},
$S:1}
A.vU.prototype={
$1(a){this.a.lC()
a.a.an()},
$S:204}
A.vS.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.aB(a)},
$S:22}
A.vR.prototype={
$1(a){return this.nF(a)},
nF(a1){var s=0,r=A.h(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
j=d.uh(a1,m.signal)
s=6
return A.a(t.nW.b(j)?j:A.bv(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.F(a0)
k=A.ai(a0)
if(!(l instanceof A.dq)){b.console.error("Error in worker: "+J.a0(l))
b.console.error("Original trace: "+A.r(k))}b=l
if(b instanceof A.c8){h=A.HU(b)
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
A.vQ.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:22}
A.ii.prototype={
l(a){return"Channel to database worker is closed: "+A.r(this.a)},
$iG:1}
A.qY.prototype={
cc(a){return this.vK(a)},
vK(a){var s=0,r=A.h(t.n),q
var $async$cc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:q=A.xG(a,null)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$cc,r)}}
A.lg.prototype={}
A.qG.prototype={}
A.eJ.prototype={}
A.lz.prototype={
i8(){var s=0,r=A.h(t.H),q=this
var $async$i8=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.a(q.a.cI(q.b),$async$i8)
case 4:case 3:return A.e(null,r)}})
return A.f($async$i8,r)},
kk(){var s=0,r=A.h(t.H),q=this
var $async$kk=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.q()
return A.e(null,r)}})
return A.f($async$kk,r)}}
A.rV.prototype={
wE(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
q_(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.xN.prototype={
$1(a){var s=new A.u($.C,t.D),r=new A.d_(new A.an(s,t.F))
this.a.a=r
this.b.aB(r)
return A.I2(s)},
$S:206}
A.xO.prototype={
$2(a,b){var s,r,q
A.be(a)
s=J.v(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.c4(new A.dq("Operation was cancelled"),b)
else q.c4(a,b)}return null},
$S:207}
A.d_.prototype={}
A.ll.prototype={
gtK(){if(this.c.a)return!1
return!this.d||this.f!=null},
dC(a){return this.oH(a)},
oH(a){var s=0,r=A.h(t.H),q=1,p=[],o=this,n,m,l,k,j,i
var $async$dC=A.c(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:j=$.kB()
j.toString
n=j
m=null
l=null
q=3
s=6
return A.a(A.jy(n,o.a,null,o.gq9(),!0),$async$dC)
case 6:m=c
s=7
return A.a(A.jy(n,o.b,a,null,!1),$async$dC)
case 7:l=c
j=o.e
j=j==null?null:j.i8()
s=8
return A.a(j instanceof A.u?j:A.bv(j,t.H),$async$dC)
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
qa(){this.n2()},
ka(a,b,c){return this.c.iv(new A.rc(this,a,b,c),b,c)},
n2(){return this.c.kw(new A.rd(this),t.H)}}
A.rc.prototype={
$0(){var s,r=this,q=r.a
if(!q.d||q.f!=null)return r.b.$0()
s=r.d
return q.dC(r.c).X(new A.rb(r.b,s),s)},
$S(){return this.d.i("0/()")}}
A.rb.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.i("0/(~)")}}
A.rd.prototype={
$0(){var s,r,q,p=this.a,o=p.f
if(o!=null){s=o.a
r=o.b
q=p.e
if(q!=null)q.kk()
s.a.an()
r.a.an()
p.f=null}},
$S:2}
A.iZ.prototype={
iv(a,b,c){return this.x7(a,b,c,c)},
kw(a,b){return this.iv(a,null,b)},
x7(a,b,c,d){var s=0,r=A.h(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$iv=A.c(function(e,f){if(e===1)return A.d(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.v(g?null:b.aborted,!0))throw A.b(B.ap)
h.a=!1
o=new A.v6(h,p)
if(!p.a){h.a=p.a=!0
q=A.ix(a,c).aY(o)
s=1
break}else{n={}
m=new A.u($.C,c.i("u<0>"))
l=new A.an(m,c.i("an<0>"))
n.a=null
h=new A.v5(h,n,l,a,c)
if(!g)n.a=A.bo(b,"abort",new A.v4(n,p,l,h),!1,t.m)
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
B.b.ai(j,0,i,h,n)
B.b.ai(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.aY(o)
s=1
break}case 1:return A.e(q,r)}})
return A.f($async$iv,r)}}
A.v6.prototype={
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
A.v5.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.D()
r.c.aB(A.ix(r.d,r.e))},
$S:0}
A.v4.prototype={
$1(a){var s,r=this
r.a.a.D()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.aR(B.ap)}},
$S:1}
A.eh.prototype={
gn8(){var s,r,q,p,o,n=this,m=t.s,l=A.k([],m)
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
A.rt.prototype={
$1(a){if(a!=null)return A.D(a)
return null},
$S:208}
A.mf.prototype={
a4(){return"MessageType."+this.b}}
A.wu.prototype={
uh(a,b){var s,r,q,p=this,o=null
switch(a.t){case"open":return p.hW(a,b)
case"connect":return p.jW(a,b)
case"custom":return p.e9(a,b)
case"fileSystemExists":return p.fa(a,b)
case"fileSystemFlush":return p.fb(a,b)
case"fileSystemAccess":return p.f9(a,b)
case"runQuery":return p.i_(a,b)
case"exclusiveLock":return p.hV(a,b)
case"releaseLock":s=p.bv(a)
r=a.z
q=s.f
if((q==null?o:q.a)!==r)A.w(A.x("Lock to be released is not active."))
q.b.an()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}
case"closeDatabase":return p.hT(a,b)
case"openAdditionalConnection":return p.hX(a,b)
case"updateRequest":return p.i0(a,b)
case"rollbackRequest":return p.hZ(a,b)
case"commitRequest":return p.hU(a,b)
case"dedicatedCompatibilityCheck":return p.dJ(a,b)
case"sharedCompatibilityCheck":return p.dJ(a,b)
case"dedicatedInSharedCompatibilityCheck":return p.dJ(a,b)
default:r=A.f_(new A.bz(!1,o,o,"Unsupported request "+A.r(a.t)),o)
q=new A.u($.C,t.hl)
q.cl(r)
return q}}}
A.dw.prototype={
a4(){return"FileSystemImplementation."+this.b}}
A.cv.prototype={
a4(){return"TypeCode."+this.b},
tZ(a){var s=null
switch(this.a){case 0:s=A.w(A.Q("Unsupported type code",null))
break
case 1:a=A.ao(A.eZ(a))
s=a
break
case 2:s=A.EK(t.bJ.a(a).toString(),null)
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
mn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.b(A.Q("Expected "+A.r(r)+" parameters, got "+A.r(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.aD:B.b3[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.ao(A.eZ(h))))
if(k!==0)a.bz(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bz(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.eZ(h))
if(k!==0)a.bz(k,e)
break
case 4:g=B.e.v(A.D(h))
k=s.dart_sqlite3_bind_text(d,i,c.cB(g),g.length)
if(k!==0)a.bz(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.cB(h),h.length)
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
sm(a,b){this.ma()},
h(a,b){var s=this.c[b],r=s>=8?B.aD:B.b3[s]
return r.tZ(this.a[b])},
j(a,b,c){this.ma()},
ma(){throw A.b(A.Y("decodeValues list is unmodifiable"))}}
A.AX.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:22}
A.qg.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.qh.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qk.prototype={
$1(a){this.a.aB(this.c.a(this.b.result))},
$S:1}
A.ql.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.qm.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.aR(s)},
$S:1}
A.vL.prototype={
uA(){var s,r,q,p
for(s=this.b,r=new A.aR(s,s.r,s.e,A.n(s).i("aR<2>"));r.k();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.aj(0)}}
A.iv.prototype={
a4(){return"FileType."+this.b}}
A.dN.prototype={
a4(){return"StorageMode."+this.b}}
A.fX.prototype={
l(a){return"Remote error: "+this.a},
$iG:1}
A.dq.prototype={}
A.AH.prototype={
$1(a){return A.be(a.data)},
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
B.b.aj(p)
p=q.f
if(p!=null)p.b.an()
s=2
return A.a(q.a.f_(),$async$q)
case 2:return A.e(null,r)}})
return A.f($async$q,r)},
m2(a){var s=new v.G.AbortController()
a.onabort=A.AI(new A.yI(s))
this.w.push(s)
return s},
kt(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gtK()){r=p.m2(b)
o=s.ka(c,r.signal,d).aY(new A.yM(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.b(A.x("Requested operation on inactive lock state."))}if(o==null)o=A.ix(c,d)
q=p.a.z
return q instanceof A.dA?o.aY(q.gv0()):o},
vV(a){var s=this,r=s.m2(a),q=new A.u($.C,t.hy),p=new A.aI(q,t.ho),o=t.H
A.BW(s.a.f.ka(new A.yJ(s,p),r.signal,o),new A.yK(p),o,t.K)
return q.aY(new A.yL(s,r))}}
A.yI.prototype={
$0(){return this.a.abort()},
$S:0}
A.yM.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:2}
A.yJ.prototype={
$0(){var s=this.a,r=s.r++,q=new A.u($.C,t.D)
s.f=new A.a4(r,new A.aI(q,t.h))
this.b.aB(r)
return q},
$S:3}
A.yK.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.c4(a,b)},
$S:12}
A.yL.prototype={
$0(){B.b.H(this.a.w,this.b)},
$S:2}
A.hq.prototype={
oC(a,b,c){this.b.a.aY(new A.ys(this))},
dJ(a,b){return this.q0(a,b)},
q0(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$dJ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.mq(a),$async$dJ)
case 3:q={r:d.gn8(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$dJ,r)},
jW(a,b){return this.v9(a,b)},
v9(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$jW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:n=p.w.glw()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.hZ(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$jW,r)},
e9(a,b){return this.va(a,b)},
va(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$e9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:l=a.d
s=l!=null?3:5
break
case 3:o=p.lg(l)
n=a.r
s=7
return A.a(o.a.gce(),$async$e9)
case 7:s=6
return A.a(d.cF(p,new A.qG(n)),$async$e9)
case 6:m=d
s=4
break
case 5:s=8
return A.a(p.w.b.cF(p,new A.lg(a)),$async$e9)
case 8:m=d
case 4:q={r:m,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$e9,r)},
hW(a,b){return this.vo(a,b)},
vo(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hW=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.w.y.kw(new A.yx(p,a),t.m),$async$hW)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hW,r)},
i_(a,b){return this.vs(a,b)},
vs(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$i_=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.a
s=3
return A.a(n.gce(),$async$i_)
case 3:m=d
q=o.kt(a.z,b,new A.yA(m,a,n),t.m)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$i_,r)},
hV(a,b){return this.ve(a,b)},
ve(a,b){var s=0,r=A.h(t.m),q,p=this
var $async$hV=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).vV(b),$async$hV)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hV,r)},
hU(a,b){return this.v8(a,b)},
v8(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hU=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.a(p.dA(n,new A.yu(p,o),a),$async$hU)
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
return A.f($async$hU,r)},
hZ(a,b){return this.vr(a,b)},
vr(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$hZ=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.a(p.dA(n,new A.yz(p,o),a),$async$hZ)
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
return A.f($async$hZ,r)},
i0(a,b){return this.vu(a,b)},
vu(a,b){var s=0,r=A.h(t.m),q,p=this,o,n
var $async$i0=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.a(p.dA(n,new A.yC(p,o),a),$async$i0)
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
hX(a,b){return this.vp(a,b)},
vp(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m
var $async$hX=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:m=p.bv(a).a;++m.w
s=3
return A.a(A.B_(),$async$hX)
case 3:o=d
n=o.a
p.w.kU(o.b).x.push(A.EL(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hX,r)},
hT(a,b){return this.v7(a,b)},
v7(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$hT=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
B.b.H(p.x,o)
s=3
return A.a(o.q(),$async$hT)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hT,r)},
fb(a,b){return this.vh(a,b)},
vh(a,b){var s=0,r=A.h(t.m),q,p=this,o
var $async$fb=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:s=3
return A.a(p.bv(a).a.gcM(),$async$fb)
case 3:o=d
s=o instanceof A.dA?4:5
break
case 4:s=6
return A.a(o.cw(!1),$async$fb)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fb,r)},
f9(a,b){return this.vf(a,b)},
vf(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l,k,j
var $async$f9=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=B.b4[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.a(o.a.gcM(),$async$f9)
case 4:s=3
return A.a(l.kt(null,k,new j.yv(d,n,m,a),t.m),$async$f9)
case 3:q=d
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$f9,r)},
fa(a,b){return this.vg(a,b)},
vg(a,b){var s=0,r=A.h(t.m),q,p=this,o,n,m,l
var $async$fa=A.c(function(c,d){if(c===1)return A.d(d,r)
for(;;)switch(s){case 0:o=p.bv(a)
n=o
m=b
l=A
s=4
return A.a(o.a.gcM(),$async$fa)
case 4:s=3
return A.a(n.kt(null,m,new l.yw(d,a),t.y),$async$fa)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$fa,r)},
dA(a,b,c){return this.oe(a,b,c)},
oe(a,b,c){var s=0,r=A.h(t.m),q,p
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
vn(a){},
hI(a){var s=0,r=A.h(t.X),q,p=this
var $async$hI=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:s=3
return A.a(p.fL({r:a,z:null,i:0,d:null,t:"custom"},B.cU,t.m),$async$hI)
case 3:q=c.r
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$hI,r)},
lg(a){return B.b.mG(this.x,new A.yr(a))},
bv(a){var s=a.d
if(s!=null)return this.lg(s)
else throw A.b(A.Q("Request requires database id",null))},
$iDy:1}
A.ys.prototype={
$0(){var s=0,r=A.h(t.H),q=this,p,o,n
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.a(p[n].q(),$async$$0)
case 5:case 3:p.length===o||(0,A.q)(p),++n
s=2
break
case 4:B.b.aj(p)
return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.yx.prototype={
$0(){var s=0,r=A.h(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.c(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.a(i.cc(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.uZ(h.d,A.HX(h.s),h.c,h.a)
s=8
return A.a(h.o?m.gcM():m.gce(),$async$$0)
case 8:l=A.EL(m,null)
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
return A.a(m.f_(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.e(q,r)
case 2:return A.d(o.at(-1),r)}})
return A.f($async$$0,r)},
$S:211}
A.yA.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.a,k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.b(A.x("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ei(s,r,A.bS(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.o_(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.ao(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.uP(l,k.s,q)
s=o.d
return A.Gf(s.sqlite3_get_autocommit(p)!==0,m,A.ao(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:26}
A.yu.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gce(),$async$$0)
case 3:q=b.a.pb().gcQ().aS(new A.yt(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:67}
A.yt.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.hZ(s))},
$S:68}
A.yz.prototype={
$0(){var s=0,r=A.h(t.ey),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gce(),$async$$0)
case 3:q=b.a.rz().gcQ().aS(new A.yy(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:67}
A.yy.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.hZ(s))},
$S:68}
A.yC.prototype={
$0(){var s=0,r=A.h(t.ha),q,p=this,o
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.a(o.a.gce(),$async$$0)
case 3:q=b.a.t7().gcQ().aS(new A.yB(p.a,o))
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:214}
A.yB.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.hZ(s))},
$S:215}
A.yv.prototype={
$0(){var s,r,q,p=this,o=p.a.dt(new A.jl(A.Fr(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.fF(s.byteLength)
o.eu(A.bS(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.fE()
r=new Uint8Array(q)
o.iC(r,0)
q={r:t.a.a(J.Hf(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.iA()}},
$S:26}
A.yw.prototype={
$0(){return this.a.iz(A.Fr(B.b4[this.b.f]),0)===1},
$S:58}
A.yr.prototype={
$1(a){return a.b===this.a},
$S:216}
A.lm.prototype={
gcM(){var s=0,r=A.h(t.e6),q,p=this,o
var $async$gcM=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.a(o==null?p.y=A.ix(new A.rg(p),t.H):o,$async$gcM)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gcM,r)},
gce(){var s=0,r=A.h(t.u),q,p=this,o
var $async$gce=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.a(o==null?p.x=A.ix(new A.rf(p),t.u):o,$async$gce)
case 3:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$gce,r)},
f_(){var s=0,r=A.h(t.H),q=this
var $async$f_=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.a(q.q(),$async$f_)
case 4:case 3:return A.e(null,r)}})
return A.f($async$f_,r)},
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
if(j!=null)j.uA()
n.a.q()
m=q.z
if(m!=null){j=p.a
l=$.Da()
A.BT(m)
k=l.a.get(m)
if(k==null)A.w(A.x("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.a(j instanceof A.u?j:A.bv(j,t.H),$async$q)
case 6:q.f.n2()
return A.e(null,r)}})
return A.f($async$q,r)},
lI(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.j(0,b,q)
s=q}if(s!=null)return new A.a4(s,!0)
p=a.ig(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.T(n,A.n(n).i("T<1>")).gG(0)).q()
n.j(0,p.d,p)
return new A.a4(p,!0)}return new A.a4(p,!1)},
uP(a,b,c){var s,r,q
if(c.gm(0)===0)return a.aD(b,B.m)
else{s=null
r=null
q=this.lI(a,b)
s=q.a
r=q.b
try{s.e6(new A.lh(c.gtI()))}finally{if(r)s.dm()
else s.q()}}},
o_(a,b,c){var s,r=null,q=null,p=this.lI(a,b)
r=p.a
q=p.b
try{s=A.IU(r,c)
return s}finally{if(q)r.dm()
else r.q()}}}
A.rg.prototype={
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
return A.a(A.wF("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.ge4()
s=3
break
case 5:case 6:s=10
return A.a(A.lA("drift_db/"+l.c,k===B.ax,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.e=o
n=o.a
l.z=n
l.Q=n.ge4()
s=3
break
case 7:s=11
return A.a(A.lX(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.ge4()
s=3
break
case 8:l.z=A.BZ("vfs-web-"+l.b,null)
s=3
break
case 3:return A.e(null,r)}})
return A.f($async$$0,r)},
$S:3}
A.rf.prototype={
$0(){var s=0,r=A.h(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.c(function(a,b){if(a===1)return A.d(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.a(k,$async$$0)
case 3:o=b
s=4
return A.a(l.gcM(),$async$$0)
case 4:n=b
o.mL()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.e0(B.e.v(n.a),1),n,0)
if(m===0)A.w(A.x("could not register vfs"))
$.Da().j(0,n,m)
s=5
return A.a(l.f.ka(new A.re(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:69}
A.re.prototype={
$0(){var s=this.a
return s.a.b.ib(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:69}
A.xW.prototype={
glw(){var s,r=this,q=r.Q
if(q===$){s=r.a.b.o8()
r.Q!==$&&A.BC()
r.Q=s
q=s}return q},
ea(){var s=0,r=A.h(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ea=A.c(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.cy(A.cz(A.KK(n.a),"stream",t.K),t.hT)
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
n.kU(l)
s=9
break
case 10:s=A.MB(m.t)?11:12
break
case 11:s=13
return A.a(n.mq(m),$async$ea)
case 13:k=b
j.postMessage(k.gn8())
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
kU(a){var s=this,r=A.JE(a,s.d++,s)
s.c.push(r)
r.b.a.aY(new A.xX(s,r))
return r},
mq(a){return this.x.kw(new A.xY(this,a),t.p6)},
cc(a){return this.vL(a)},
vL(a){var s=0,r=A.h(t.H),q=this,p,o,n,m
var $async$cc=A.c(function(b,c){if(b===1)return A.d(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.be(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.b(A.x("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.r(p)+", got "+m+")"))
s=5
return A.a(t.jN.b(n)?n:A.bv(n,t.he),$async$cc)
case 5:s=3
break
case 4:o=A.BW(q.b.cc(m),new A.xZ(q),t.n,t.K)
q.r=o
s=6
return A.a(o,$async$cc)
case 6:q.w=m
case 3:return A.e(null,r)}})
return A.f($async$cc,r)},
uZ(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.aR(s,s.r,s.e,A.n(s).i("aR<2>"));r.k();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.ax||b===B.aZ
o=A.C5(t.cj)
n=c===0?null:new A.vL(c,A.dE(null,null,t.N,t.fw))
n=new A.lm(this,r,a,b,d,new A.ll(q+"-outer",q,new A.iZ(o),p),n)
s.j(0,r,n)
return n}}
A.xX.prototype={
$0(){var s=this.a,r=s.c
B.b.H(r,this.b)
if(r.length===0)s.a.q()
return null},
$S:0}
A.xY.prototype={
$0(){var s=0,r=A.h(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.c(function(a0,a1){if(a0===1)return A.d(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.v(d.t,"dedicatedCompatibilityCheck")||J.v(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
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
case 4:b=J.v(d.t,"dedicatedCompatibilityCheck")||J.v(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.a(A.pa(),$async$$0)
case 9:case 8:j=a1
i=A.aN(t.cU)
s=J.v(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.glw()
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
return A.a(new A.hx(n,"message",!1,t.d4).gG(0),$async$$0)
case 15:e=b.HD(a.be(a1.data))
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
break}i.t(0,new A.a4(B.bf,d.gn()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.a(A.AW(c),$async$$0)
case 23:if(a1)i.t(0,new A.a4(B.bg,c))
case 22:d=A.O(i,i.$ti.c)
q=new A.eh(d,g,k,l,j)
s=1
break
case 1:return A.e(q,r)}})
return A.f($async$$0,r)},
$S:218}
A.xZ.prototype={
$2(a,b){this.a.r=null
throw A.b(a)},
$S:219}
A.ki.prototype={}
A.oe.prototype={
gmJ(){return new A.hx(this.a,"message",!1,t.d4)},
q(){return this.a.close()}}
A.oK.prototype={
gmJ(){return new A.di(new A.zX(this),t.k8)},
q(){}}
A.zX.prototype={
$1(a){var s=A.k([],t.kG),r=A.k([],t.dw)
r.push(A.bo(this.a.a,"connect",new A.zU(new A.zY(s,r,a)),!1,t.m))
a.r=new A.zV(r)},
$S:220}
A.zY.prototype={
$1(a){this.a.push(a)
a.start()
this.b.push(A.bo(a,"message",new A.zW(this.c),!1,t.m))},
$S:1}
A.zW.prototype={
$1(a){this.a.tx(a)},
$S:1}
A.zU.prototype={
$1(a){var s,r=a.ports
r=J.E(t.ip.b(r)?r:new A.bN(r,A.a_(r).i("bN<1,L>")))
s=this.a
while(r.k())s.$1(r.gn())},
$S:1}
A.zV.prototype={
$0(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.q)(s),++q)s[q].D()},
$S:2}
A.of.prototype={
o8(){var s=v.G
if(!("Worker" in s))return null
return new A.yX(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.yX.prototype={}
A.ne.prototype={
gfN(){return A.D(this.c)}}
A.wY.prototype={
gk9(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
iF(a){var s,r=this,q=r.d=J.Hi(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gM()
return s},
mE(a,b){var s
if(this.iF(a))return
if(b==null)if(a instanceof A.eq)b="/"+a.a+"/"
else{s=J.a0(a)
s=A.z(s,"\\","\\\\")
b='"'+A.z(s,'"','\\"')+'"'}this.ln(b)},
f5(a){return this.mE(a,null)},
uT(){if(this.c===this.b.length)return
this.ln("no more input")},
uO(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.w(A.aZ("position must be greater than or equal to 0."))
else if(c>n.length)A.w(A.aZ("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.w(A.aZ("position plus length must not go beyond the end of the string."))
s=this.a
r=A.k([0],t.t)
q=n.length
p=new A.wH(s,r,new Uint32Array(q))
p.oy(new A.cj(n),s)
o=c+b
if(o>q)A.w(A.aZ("End "+o+u.D+p.gm(0)+"."))
else if(c<0)A.w(A.aZ("Start may not be negative, was "+c+"."))
throw A.b(new A.ne(n,a,new A.hy(p,c,o)))},
ln(a){this.uO("expected "+a+".",0,this.c)}}
A.hf.prototype={
gm(a){return this.b},
h(a,b){if(b>=this.b)throw A.b(A.DP(b,this))
return this.a[b]},
j(a,b,c){var s
if(b>=this.b)throw A.b(A.DP(b,this))
s=this.a
s.$flags&2&&A.H(s)
s[b]=c},
sm(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.H(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.ld(b)
B.f.au(p,0,o.b,o.a)
o.a=p}}o.b=b},
t(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.t4(q)
q=r.a
s=r.b++
q.$flags&2&&A.H(q)
q[s]=b},
ld(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
t4(a){var s=this.ld(null)
B.f.au(s,0,a,this.a)
this.a=s},
ai(a,b,c,d,e){var s=this.b
if(c>s)throw A.b(A.aw(c,0,s,null,null))
s=this.a
if(d instanceof A.cw)B.f.ai(s,b,c,d.a,e)
else B.f.ai(s,b,c,d,e)},
au(a,b,c,d){return this.ai(0,b,c,d,0)}}
A.op.prototype={}
A.cw.prototype={}
A.BR.prototype={}
A.hx.prototype={
a9(a,b,c,d){return A.bo(this.a,this.b,a,!1,this.$ti.c)},
by(a,b,c){return this.a9(a,null,b,c)}}
A.jP.prototype={
D(){var s=this,r=A.b8(null,t.H)
if(s.b==null)return r
s.jz()
s.d=s.b=null
return r},
i9(a){var s,r=this
if(r.b==null)throw A.b(A.x("Subscription has been canceled."))
r.jz()
s=A.FS(new A.z0(a),t.m)
s=s==null?null:A.cY(s)
r.d=s
r.jx()},
bd(){if(this.b==null)return;++this.a
this.jz()},
b1(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.jx()},
jx(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
jz(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$ibl:1}
A.z_.prototype={
$1(a){return this.a.$1(a)},
$S:1}
A.z0.prototype={
$1(a){return this.a.$1(a)},
$S:1};(function aliases(){var s=J.dD.prototype
s.ol=s.l
s=A.bB.prototype
s.og=s.mM
s.oh=s.mN
s.oj=s.mP
s.oi=s.mO
s=A.b1.prototype
s.iH=s.aA
s.kR=s.aG
s.kS=s.aQ
s=A.dg.prototype
s.oo=s.la
s.op=s.lr
s.oq=s.lY
s=A.K.prototype
s.kQ=s.ai
s=A.aB.prototype
s.kP=s.tH
s=A.k7.prototype
s.or=s.q
s=A.o.prototype
s.of=s.ds
s=A.kT.prototype
s.kN=s.hR
s=A.ff.prototype
s.kO=s.f0
s=A.h4.prototype
s.on=s.a0
s.om=s.R})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_0,q=hunkHelpers._static_1,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u,n=hunkHelpers.installInstanceTearOff,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_1i
s(J,"KU","Ib",70)
r(A,"L6","IF",11)
q(A,"LF","Jp",21)
q(A,"LG","Jq",21)
q(A,"LH","Jr",21)
q(A,"LI","L9",14)
r(A,"FX","Lw",0)
q(A,"LJ","La",25)
s(A,"LK","Lc",13)
r(A,"AS","Lb",0)
p(A,"LP",5,null,["$5"],["Lq"],222,0)
p(A,"LU",4,null,["$1$4","$4"],["AN",function(a,b,c,d){return A.AN(a,b,c,d,t.z)}],223,0)
p(A,"LW",5,null,["$2$5","$5"],["AO",function(a,b,c,d,e){var i=t.z
return A.AO(a,b,c,d,e,i,i)}],224,0)
p(A,"LV",6,null,["$3$6"],["CR"],225,0)
p(A,"LS",4,null,["$1$4","$4"],["FG",function(a,b,c,d){return A.FG(a,b,c,d,t.z)}],226,0)
p(A,"LT",4,null,["$2$4","$4"],["FH",function(a,b,c,d){var i=t.z
return A.FH(a,b,c,d,i,i)}],227,0)
p(A,"LR",4,null,["$3$4","$4"],["FF",function(a,b,c,d){var i=t.z
return A.FF(a,b,c,d,i,i,i)}],228,0)
p(A,"LN",5,null,["$5"],["Lp"],229,0)
p(A,"LX",4,null,["$4"],["AP"],230,0)
p(A,"LM",5,null,["$5"],["Lo"],231,0)
p(A,"LL",5,null,["$5"],["Ln"],232,0)
p(A,"LQ",4,null,["$4"],["Lr"],233,0)
p(A,"LO",5,null,["$5"],["FE"],234,0)
var j
o(j=A.eM.prototype,"geG","bF",0)
o(j,"geH","bG",0)
n(A.eN.prototype,"gtQ",0,1,null,["$2","$1"],["c4","aR"],62,0,0)
m(A.u.prototype,"giT","pg",13)
n(j=A.e0.prototype,"gtu",0,1,null,["$2","$1"],["bx","tv"],62,0,0)
l(j,"goO","aA",23)
m(j,"goK","aG",13)
o(j,"gp7","aQ",0)
o(j=A.dW.prototype,"geG","bF",0)
o(j,"geH","bG",0)
o(j=A.b1.prototype,"geG","bF",0)
o(j,"geH","bG",0)
o(A.hw.prototype,"glG","qI",0)
l(j=A.cy.prototype,"gqA","qB",23)
m(j,"gqE","qF",13)
o(j,"gqC","qD",0)
o(j=A.hz.prototype,"geG","bF",0)
o(j,"geH","bG",0)
l(j,"gj5","j6",23)
m(j,"gj9","ja",196)
o(j,"gj7","j8",0)
o(j=A.hH.prototype,"geG","bF",0)
o(j,"geH","bG",0)
l(j,"gj5","j6",23)
m(j,"gj9","ja",13)
o(j,"gj7","j8",0)
s(A,"CV","KD",31)
q(A,"CW","KE",30)
s(A,"M1","Ij",70)
q(A,"Ma","KH",39)
k(j=A.o6.prototype,"gtt","t",23)
o(j,"ge4","q",0)
q(A,"G0","Mu",30)
s(A,"G_","Mt",31)
q(A,"Mb","Jj",6)
p(A,"MI",2,null,["$1$2","$2"],["Gd",function(a,b){return A.Gd(a,b,t.o)}],235,0)
m(j=A.lp.prototype,"guN","Z",31)
l(j,"gvv","ac",30)
l(j,"gvB","vC",14)
q(A,"M_","Hv",6)
o(j=A.j7.prototype,"gqG","qH",0)
l(j,"gqJ","qK",172)
q(A,"MS","ID",42)
q(A,"FZ","HL",237)
q(A,"M6","HQ",238)
q(A,"M8","I7",239)
q(A,"M5","Hq",240)
q(A,"M7","HW",241)
q(A,"B1","HP",6)
q(A,"Ml","DJ",242)
r(A,"ME","Lz",175)
r(A,"MD","KF",11)
o(A.o9.prototype,"gv2","jV",0)
r(A,"Ob","KG",11)
l(A.mz.prototype,"gwf","wg",8)
q(A,"M3","BO",162)
l(j=A.nf.prototype,"gvk","vl",28)
l(j,"gvi","vj",134)
o(j,"gqx","jj",0)
q(A,"MZ","Ja",42)
o(A.mL.prototype,"gjO","f0",0)
o(A.mt.prototype,"gjO","f0",0)
l(j=A.ff.prototype,"gqy","qz",28)
o(j,"gmb","dZ",3)
m(A.nV.prototype,"gq1","h3",61)
m(A.nU.prototype,"gq7","h5",61)
l(j=A.lk.prototype,"gvO","vP",8)
m(j,"gvM","vN",174)
n(j,"gxz",0,5,null,["$5"],["xA"],243,0,0)
n(j,"gxn",0,3,null,["$3"],["xo"],176,0,0)
n(j,"gxf",0,4,null,["$4"],["xg"],63,0,0)
n(j,"gxv",0,4,null,["$4"],["xw"],63,0,0)
n(j,"gxB",0,3,null,["$3"],["xC"],178,0,0)
m(j,"gxG","xH",64)
m(j,"gxl","xm",64)
l(j,"gxj","xk",35)
n(j,"gxD",0,4,null,["$4"],["xE"],65,0,0)
n(j,"gxO",0,4,null,["$4"],["xP"],65,0,0)
m(j,"gxK","xL",182)
m(j,"gxI","xJ",15)
m(j,"gxt","xu",15)
m(j,"gxx","xy",15)
m(j,"gxM","xN",15)
m(j,"gxh","xi",15)
l(j,"giB","xp",35)
n(j,"gxq",0,3,null,["$3"],["xs"],184,0,0)
l(j,"giD","xF",35)
l(j,"guk","ul",21)
l(j,"guf","ug",185)
n(j,"gui",0,5,null,["$5"],["uj"],186,0,0)
n(j,"gur",0,4,null,["$4"],["us"],37,0,0)
n(j,"guv",0,4,null,["$4"],["uw"],37,0,0)
n(j,"gut",0,4,null,["$4"],["uu"],37,0,0)
m(j,"gux","uy",66)
m(j,"guo","uq",66)
n(j,"gum",0,5,null,["$5"],["un"],189,0,0)
m(j,"gud","ue",190)
m(j,"gua","uc",191)
n(j,"gu8",0,3,null,["$3"],["u9"],192,0,0)
o(j=A.dA.prototype,"ge4","q",3)
o(j,"gv0","cE",3)
o(A.h2.prototype,"ge4","q",0)
o(A.ll.prototype,"gq9","qa",0)
l(A.ei.prototype,"gtI","mn",209)
l(A.hq.prototype,"gvm","vn",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.C3,J.lZ,A.jg,J.fb,A.yO,A.yo,A.o,A.l1,A.ef,A.U,A.ad,A.K,A.wD,A.at,A.md,A.cV,A.lw,A.nt,A.n1,A.lt,A.nT,A.iw,A.nF,A.jt,A.hE,A.iP,A.fl,A.hA,A.cq,A.xo,A.ms,A.is,A.k4,A.ur,A.bC,A.aR,A.ma,A.eq,A.hD,A.o_,A.h9,A.A5,A.o7,A.oW,A.cp,A.ol,A.oT,A.k8,A.jC,A.o1,A.jU,A.oQ,A.am,A.aa,A.b1,A.jI,A.nu,A.jS,A.eN,A.cc,A.u,A.o0,A.e0,A.oR,A.jE,A.nY,A.og,A.yY,A.e_,A.hw,A.cy,A.jO,A.At,A.Av,A.Au,A.Ar,A.As,A.Aq,A.An,A.p0,A.Am,A.Al,A.Ap,A.Ao,A.p_,A.p1,A.oZ,A.hQ,A.jB,A.om,A.zG,A.dZ,A.ot,A.b2,A.ov,A.oV,A.ou,A.nd,A.l4,A.aB,A.o3,A.pH,A.o2,A.l2,A.oL,A.eO,A.zC,A.A6,A.oX,A.dj,A.aJ,A.ok,A.aW,A.aC,A.yZ,A.mv,A.jn,A.oi,A.bj,A.lY,A.R,A.W,A.oP,A.jo,A.mU,A.a2,A.kf,A.xu,A.cd,A.lx,A.mr,A.zv,A.zw,A.lu,A.a3,A.lq,A.iE,A.es,A.hM,A.hC,A.iO,A.lp,A.mq,A.nG,A.ck,A.c2,A.rW,A.pU,A.iN,A.ji,A.uG,A.jh,A.wC,A.qH,A.qX,A.yN,A.ee,A.kS,A.kT,A.pD,A.mj,A.fD,A.nv,A.pC,A.j7,A.vG,A.zZ,A.vq,A.j9,A.hI,A.vy,A.A_,A.eo,A.dx,A.lT,A.cH,A.dy,A.dP,A.vo,A.l9,A.c3,A.lK,A.mO,A.ag,A.v2,A.wk,A.eA,A.cL,A.mJ,A.wA,A.mX,A.nn,A.xb,A.jz,A.pF,A.ox,A.n8,A.aS,A.a1,A.pR,A.pS,A.pT,A.ru,A.ip,A.qf,A.io,A.dF,A.bi,A.ux,A.fc,A.kY,A.nb,A.iu,A.rx,A.eX,A.zE,A.oS,A.hG,A.tv,A.cF,A.rE,A.oj,A.um,A.na,A.vH,A.os,A.o9,A.hr,A.ws,A.xf,A.mz,A.d6,A.b_,A.cm,A.yP,A.mI,A.cN,A.wz,A.aX,A.dz,A.fy,A.en,A.c9,A.qq,A.c1,A.mW,A.v3,A.co,A.o8,A.ho,A.pr,A.bg,A.qs,A.nf,A.d3,A.ew,A.uN,A.dH,A.me,A.zN,A.zL,A.va,A.pE,A.iM,A.je,A.vf,A.mH,A.vV,A.b3,A.w3,A.bm,A.hb,A.ha,A.x_,A.bu,A.h8,A.cM,A.fR,A.jd,A.cC,A.x1,A.jc,A.js,A.xd,A.cP,A.cn,A.ey,A.bE,A.zS,A.ff,A.y_,A.xq,A.qY,A.eJ,A.ht,A.hm,A.nS,A.xM,A.jb,A.xR,A.hn,A.nV,A.nU,A.qz,A.wZ,A.mx,A.my,A.wH,A.n4,A.h4,A.rX,A.bp,A.cx,A.cr,A.n7,A.cs,A.c8,A.kH,A.r_,A.e1,A.wJ,A.eg,A.b4,A.kW,A.qF,A.oG,A.zM,A.bO,A.lh,A.de,A.jl,A.xH,A.xC,A.xJ,A.xI,A.dT,A.df,A.lk,A.d8,A.eP,A.xD,A.py,A.jT,A.z1,A.ow,A.oo,A.zI,A.xx,A.ik,A.wu,A.ii,A.lg,A.lz,A.rV,A.d_,A.ll,A.iZ,A.eh,A.vL,A.fX,A.k6,A.hs,A.lm,A.xW,A.ki,A.of,A.yX,A.wY,A.BR,A.jP])
q(J.lZ,[J.m0,J.iG,J.aE,J.bq,J.fB,J.ep,J.dB])
q(J.aE,[J.dD,J.B,A.fJ,A.j0])
q(J.dD,[J.mA,J.dS,J.bP])
r(J.m_,A.jg)
r(J.ts,J.B)
q(J.ep,[J.iF,J.m1])
q(A.o,[A.dV,A.J,A.cl,A.al,A.it,A.eG,A.d9,A.bF,A.eS,A.nZ,A.oO,A.hK,A.er,A.jf])
q(A.dV,[A.ec,A.kj])
r(A.jM,A.ec)
r(A.jJ,A.kj)
q(A.ef,[A.pW,A.pP,A.pV,A.tm,A.xe,A.Bh,A.Bj,A.y6,A.y5,A.Ay,A.Ax,A.rT,A.rO,A.z5,A.z4,A.zg,A.zj,A.wU,A.wV,A.wS,A.yW,A.yV,A.zR,A.zm,A.yS,A.zF,A.uH,A.zA,A.qE,A.yj,A.rP,A.Bl,A.Bs,A.Bt,A.B0,A.pK,A.pM,A.pO,A.kV,A.pG,A.AA,A.pI,A.uL,A.B8,A.vx,A.vt,A.vu,A.vv,A.vw,A.vr,A.vs,A.vF,A.vB,A.vC,A.vz,A.vA,A.vE,A.qC,A.qD,A.wm,A.wi,A.vJ,A.xL,A.BD,A.wL,A.wM,A.rr,A.rq,A.rs,A.rp,A.ro,A.rn,A.rm,A.ri,A.rj,A.rk,A.uy,A.uA,A.uC,A.uE,A.uz,A.Br,A.rA,A.ry,A.rB,A.rC,A.Bx,A.tR,A.tS,A.tU,A.uf,A.tV,A.tW,A.tX,A.tY,A.tZ,A.u_,A.u0,A.u1,A.u2,A.u3,A.u5,A.u6,A.u7,A.u8,A.u9,A.ua,A.ub,A.tE,A.tG,A.tK,A.tx,A.tw,A.tI,A.tH,A.tO,A.tP,A.tQ,A.ty,A.tA,A.tC,A.tM,A.tN,A.rF,A.rG,A.un,A.uq,A.up,A.uo,A.yG,A.yD,A.xm,A.xi,A.xk,A.xg,A.uY,A.uV,A.uX,A.wb,A.wd,A.we,A.wf,A.wv,A.wy,A.qb,A.qe,A.qa,A.qd,A.q8,A.q7,A.q6,A.qc,A.q9,A.q1,A.q0,A.q5,A.q4,A.q2,A.pZ,A.ps,A.pt,A.qu,A.qt,A.xa,A.x2,A.x8,A.x3,A.x4,A.x5,A.AY,A.AZ,A.uU,A.uO,A.uP,A.uQ,A.uR,A.uS,A.vc,A.vd,A.vl,A.vj,A.vi,A.vh,A.vk,A.w1,A.vW,A.vY,A.w_,A.w4,A.w9,A.x0,A.Ba,A.Bw,A.Bu,A.Bv,A.wo,A.wn,A.y0,A.uv,A.uw,A.Bo,A.Bf,A.Be,A.B4,A.xV,A.xT,A.qA,A.qB,A.AQ,A.rZ,A.rY,A.t_,A.t1,A.t3,A.t0,A.th,A.wN,A.r7,A.A2,A.Bp,A.By,A.Bz,A.px,A.yQ,A.yR,A.qi,A.qj,A.qn,A.qo,A.qp,A.rD,A.pB,A.pz,A.zp,A.zs,A.zt,A.tl,A.tj,A.zo,A.wG,A.xy,A.xz,A.xA,A.xB,A.vT,A.vU,A.vS,A.vR,A.vQ,A.xN,A.rb,A.v4,A.rt,A.AX,A.qg,A.qh,A.qk,A.ql,A.qm,A.AH,A.yt,A.yy,A.yB,A.yr,A.zX,A.zY,A.zW,A.zU,A.z_,A.z0])
q(A.pW,[A.yp,A.pQ,A.qy,A.tt,A.Bi,A.Az,A.AR,A.rU,A.rN,A.z6,A.zh,A.zk,A.y2,A.zl,A.us,A.uJ,A.zD,A.yi,A.Af,A.xv,A.Ae,A.Ad,A.rR,A.rQ,A.pJ,A.pL,A.pN,A.kU,A.v1,A.uM,A.vn,A.vp,A.AG,A.wl,A.wh,A.vK,A.wj,A.wB,A.BE,A.AV,A.rl,A.rH,A.uZ,A.wg,A.ww,A.wx,A.q3,A.pu,A.xP,A.B5,A.xS,A.t2,A.ra,A.zu,A.xO,A.yK,A.xZ])
r(A.bN,A.jJ)
q(A.U,[A.ed,A.bB,A.dg,A.oq])
q(A.ad,[A.dC,A.mM,A.dc,A.m2,A.nE,A.mV,A.oh,A.j8,A.iJ,A.kM,A.bz,A.cU,A.nD,A.bk,A.l7])
q(A.K,[A.hg,A.mZ,A.nN,A.hk,A.ei,A.hf])
r(A.cj,A.hg)
q(A.pV,[A.Bn,A.vN,A.y7,A.y8,A.A8,A.A7,A.Aw,A.ya,A.yb,A.yd,A.ye,A.yc,A.y9,A.rS,A.z7,A.zc,A.zb,A.z9,A.z8,A.zf,A.ze,A.zd,A.zi,A.wT,A.wW,A.wR,A.A1,A.A0,A.y1,A.yn,A.ym,A.zJ,A.zH,A.AB,A.AC,A.yU,A.yT,A.zQ,A.zP,A.AM,A.Ai,A.Ah,A.rh,A.AJ,A.AK,A.uK,A.vm,A.vD,A.rw,A.uB,A.uD,A.rz,A.tT,A.u4,A.ug,A.uh,A.ui,A.uj,A.uk,A.ul,A.uc,A.ud,A.ue,A.tD,A.tF,A.tJ,A.tz,A.tB,A.tL,A.yH,A.yE,A.yF,A.xl,A.xj,A.xh,A.wc,A.rv,A.ti,A.rL,A.rK,A.wP,A.pY,A.q_,A.qr,A.qx,A.qw,A.qv,A.x7,A.x6,A.x9,A.w2,A.vX,A.vZ,A.w0,A.w5,A.wa,A.w8,A.w7,A.w6,A.xc,A.vg,A.vb,A.xn,A.wp,A.v9,A.uF,A.tg,A.t4,A.tb,A.tc,A.td,A.te,A.t9,A.ta,A.t5,A.t6,A.t7,A.t8,A.tf,A.zn,A.r8,A.r9,A.r5,A.r4,A.r6,A.r1,A.r0,A.r2,A.r3,A.A3,A.A4,A.BA,A.qL,A.qI,A.qN,A.qP,A.qR,A.qK,A.qQ,A.qV,A.qT,A.qS,A.qM,A.qO,A.qU,A.qJ,A.pv,A.pw,A.xE,A.pA,A.zq,A.zr,A.z2,A.tk,A.rc,A.rd,A.v6,A.v5,A.yI,A.yM,A.yJ,A.yL,A.ys,A.yx,A.yA,A.yu,A.yz,A.yC,A.yv,A.yw,A.rg,A.rf,A.re,A.xX,A.xY,A.zV])
q(A.J,[A.Z,A.el,A.T,A.aq,A.aM,A.eR,A.jW])
q(A.Z,[A.ct,A.X,A.bT,A.iL,A.or])
r(A.ek,A.cl)
r(A.iq,A.eG)
r(A.fp,A.d9)
q(A.hE,[A.oy,A.oz,A.oA])
q(A.oy,[A.a4,A.k1,A.k2,A.hF,A.oB])
r(A.eV,A.oz)
q(A.oA,[A.eW,A.oC])
r(A.ke,A.iP)
r(A.cT,A.ke)
r(A.il,A.cT)
q(A.fl,[A.aV,A.iy])
q(A.cq,[A.im,A.k3])
r(A.du,A.im)
r(A.iC,A.tm)
r(A.j5,A.dc)
q(A.xe,[A.wO,A.id])
q(A.bB,[A.iI,A.iH,A.jV])
r(A.fI,A.fJ)
q(A.j0,[A.j_,A.fK])
q(A.fK,[A.jY,A.k_])
r(A.jZ,A.jY)
r(A.dK,A.jZ)
r(A.k0,A.k_)
r(A.bR,A.k0)
q(A.dK,[A.ml,A.mm])
q(A.bR,[A.mn,A.mo,A.mp,A.j1,A.j2,A.j3,A.ev])
r(A.k9,A.oh)
q(A.aa,[A.hJ,A.jq,A.jN,A.di,A.jQ,A.jH,A.ib,A.hx])
r(A.b5,A.hJ)
r(A.b0,A.b5)
q(A.b1,[A.dW,A.hz,A.hH])
r(A.eM,A.dW)
r(A.jD,A.jI)
q(A.eN,[A.aI,A.an])
q(A.e0,[A.cW,A.hL])
r(A.k5,A.nY)
q(A.og,[A.cb,A.hv])
r(A.jX,A.cW)
r(A.eT,A.jQ)
q(A.oZ,[A.oa,A.oF])
q(A.dg,[A.dX,A.jK])
r(A.dh,A.k3)
q(A.nd,[A.k7,A.A9,A.yf,A.oN])
r(A.zy,A.k7)
q(A.l4,[A.em,A.kQ,A.tu])
q(A.em,[A.kK,A.m8,A.nK])
q(A.aB,[A.oU,A.ic,A.kR,A.m5,A.m4,A.nL,A.jv,A.lQ])
q(A.oU,[A.kL,A.m9])
r(A.yk,A.o3)
q(A.pH,[A.yg,A.hp,A.o6,A.Ag])
r(A.y3,A.yg)
r(A.m3,A.iJ)
r(A.zz,A.l2)
r(A.zB,A.zC)
r(A.p2,A.oX)
r(A.Aj,A.p2)
q(A.bz,[A.d7,A.iA])
r(A.od,A.kf)
r(A.h1,A.hM)
r(A.oI,A.lQ)
r(A.zT,A.rW)
r(A.oJ,A.zT)
r(A.kF,A.pU)
r(A.jj,A.wC)
r(A.ob,A.kF)
r(A.li,A.ob)
r(A.oc,A.uG)
r(A.qW,A.oc)
r(A.mP,A.ee)
r(A.l_,A.kS)
r(A.ds,A.jq)
q(A.kT,[A.v0,A.wt])
r(A.jr,A.pD)
r(A.nc,A.jr)
r(A.ig,A.a3)
r(A.mC,A.j7)
q(A.c3,[A.l5,A.lc,A.jx,A.ft,A.no,A.kO])
q(A.mO,[A.lC,A.lD,A.lF,A.lB,A.lO,A.lI,A.lE,A.lM,A.lG,A.lv,A.n9,A.mu,A.l0,A.lR,A.l3,A.lP,A.mS,A.mk,A.mK,A.lf,A.le,A.lr,A.lU,A.kG,A.ly,A.mY,A.nw,A.nx,A.nz,A.nB,A.nA,A.ny,A.nQ,A.nR,A.nP,A.kI,A.nO,A.nM,A.mG,A.l6,A.mT,A.lb,A.la,A.mQ,A.kD,A.kE,A.ld,A.nl,A.nr,A.ng,A.nh,A.nj,A.ns,A.nk,A.np])
q(A.ag,[A.lN,A.lL,A.fv,A.lJ,A.fu,A.fs,A.h7,A.fL,A.ie,A.lS,A.fY,A.fZ,A.fH,A.fT,A.fm,A.fn,A.fA,A.fa,A.fr,A.h0,A.fk,A.fj,A.hd,A.hl,A.fQ,A.fh,A.nm,A.ni,A.nq])
q(A.v2,[A.iU,A.iX,A.iV,A.iY,A.iR,A.iS,A.iQ,A.iW,A.iT])
q(A.yZ,[A.aY,A.cB,A.dR,A.mB,A.ih,A.dt,A.d1,A.l8,A.ls,A.c4,A.iB,A.v_,A.dJ,A.e9,A.ca,A.kP,A.cQ,A.i7,A.fM,A.j6,A.jm,A.ve,A.fw,A.mf,A.dw,A.cv,A.iv,A.dN])
q(A.cL,[A.iK,A.j4,A.i8,A.i9])
r(A.xK,A.pF)
r(A.pq,A.ru)
q(A.dF,[A.eI,A.eH,A.ex,A.fe,A.fO,A.fx,A.cO,A.fW,A.h_,A.eC,A.h5,A.fG,A.fi,A.ej,A.fV])
q(A.eC,[A.hh,A.fz])
r(A.m6,A.os)
q(A.d6,[A.a9,A.c5,A.dr,A.cZ])
r(A.fg,A.o8)
r(A.y4,A.zL)
q(A.bu,[A.he,A.eD,A.jk,A.c0,A.cG,A.cK,A.fN,A.fP,A.fo,A.ea])
q(A.ff,[A.mL,A.mt])
r(A.uu,A.qY)
r(A.mc,A.eJ)
q(A.hn,[A.jA,A.eK])
r(A.oY,A.nV)
r(A.xU,A.oY)
r(A.tq,A.wZ)
q(A.tq,[A.vI,A.xw,A.xQ])
r(A.lH,A.n4)
q(A.h4,[A.hy,A.n6])
r(A.h3,A.n7)
r(A.da,A.n6)
r(A.h6,A.eg)
r(A.kX,A.b4)
q(A.kX,[A.lV,A.dA,A.h2])
q(A.kW,[A.on,A.oM])
r(A.oD,A.qF)
r(A.oE,A.oD)
r(A.mR,A.oE)
r(A.oH,A.oG)
r(A.c7,A.oH)
q(A.b2,[A.eL,A.b6])
r(A.hj,A.wJ)
q(A.b6,[A.jR,A.jL,A.hu,A.hP])
r(A.vP,A.wu)
r(A.qG,A.lg)
r(A.dq,A.fX)
r(A.hq,A.vP)
q(A.ki,[A.oe,A.oK])
r(A.ne,A.h3)
r(A.op,A.hf)
r(A.cw,A.op)
s(A.hg,A.nF)
s(A.kj,A.K)
s(A.jY,A.K)
s(A.jZ,A.iw)
s(A.k_,A.K)
s(A.k0,A.iw)
s(A.cW,A.jE)
s(A.hL,A.oR)
s(A.ke,A.oV)
s(A.p2,A.nd)
s(A.ob,A.qH)
s(A.oc,A.qX)
s(A.os,A.pS)
s(A.o8,A.pT)
s(A.oY,A.nU)
s(A.oD,A.K)
s(A.oE,A.mq)
s(A.oG,A.nG)
s(A.oH,A.U)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",ab:"double",aU:"num",l:"String",P:"bool",W:"Null",p:"List",j:"Object",I:"Map",L:"JSObject"},mangledNames:{},types:["~()","~(L)","W()","A<~>()","A<~>(bE)","A<W>(bE)","l(l)","fL(~)","~(i)","P(l)","R<l,@>(@,@)","i()","W(j,aF)","~(j,aF)","P(j?)","i(bn,i)","A<b3>()","A<W>()","P(@)","~(p<i>)","W(j)","~(~())","W(L)","~(j?)","A<~>(jT)","~(@)","L()","~(l,l)","~(a1)","A<~>(~)","i(j?)","P(j?,j?)","0&()","P(bp)","j?(j?)","i(bn)","~(j?,j?)","~(d8,i,i,i)","W(@)","@(@)","j?(I<l,j?>)","A<i>()","ab(i)","A<cH>(l)","i(cH)","~(@,@)","@()","P(dz)","P(bi)","~(l,@)","A<p<l>>()","@(l)","~(db)","l(eu)","A<W>(qZ)","A<@>()","P(c9)","R<l,j?>(@,@)","P()","l(I<l,j?>)","P(aX)","A<j?>(nW,hm)","~(j[aF?])","i(b4,i,i,i)","i(b4,i)","i(bn,i,i,bq)","~(d8,i)","A<bl<~>>()","~(~)","A<eJ>()","i(@,@)","i(i,cF)","i(i,i)","~(p<ck>)","A<aa<p<i>>>()","l?(I<l,j?>)","~(aS)","i(i)","A<I<l,j?>?>()","fY(I<l,j?>?)","A<p<I<l,j?>?>>()","fZ(p<I<l,j?>?>)","i(dP)","A<p<j?>>()","aC(i)","A<aU?>()","A<l>()","fQ(i)","fh(i)","fk(p<bg>)","fj(bg?)","fv(p<bi>)","fu(i)","fs(i)","h7(P)","fH(p<l>)","A<co>()","fT(co)","A<p<cN>>()","h0(p<cN>)","A<W>(~)","hd(~)","P(hG)","~(I<l,j?>?)","~(p<I<l,j?>>)","~(i,@)","aa<p<i>>()","~(hb)","~(p<bg>)","P(cB)","P(cF)","l(cF)","P(dR)","cM(@)","A<@>(bE)","p<eA>(j?)","i(c9,c9)","~(l,j?)","l(cm)","l()","P(cm)","aX()","dz()","fy()","en()","c9()","P(aY)","l(@)","A<I<l,j?>?>(l)","P(i)","l(i,i)","p<cL>(j?)","bg()","0&(l,i?)","~(cC)","~(l,l?)","A<bm>(bm)","bm(bm)","bm(j)","W(bP,bP)","dH/(j?)","A<j?>(j?)","I<l,j?>(p<j?>)","A<i>(bE)","j?(~)","@(@,l)","l(i[i])","cP()","cn()","ey()","P(+(l,j))","p<I<l,j?>>(co)","A<P>(l)","A<~>(l)","ht()","c1<j?>(@)","P(c1<j?>)","i(+(l,j),+(l,j))","u<@>?()","~(c3)","l(l?)","l?()","bg(I<l,j?>)","W(~())","j(cx)","j(bp)","i(bp,bp)","p<cx>(R<j,p<bp>>)","da()","l(j?)","~(i,l,i)","~(Cf,p<Cg>)","~(j9)","~(N,au,N,~())","~(bq,i)","aW()","i(b4,i,i)","i(+(l,j?),+(l,j?))","i(b4?,i,i)","I<l,j?>(c7)","P(l,l)","eO<@,@>(bA<@>)","i(bn,bq)","i(l)","i(bn,i,i)","i(i())","~(~(i,l,i),i,i,i,bq)","W(l,l[j?])","j?(wK)","i(d8,i,i,i,i)","i(i(i),i)","i(Ck,i)","i(Ck,i,i)","~(dI<p<i>>)","W(@,aF)","L(B<j?>)","~(@,aF)","fD()","L(L?)","~(eb)","A<~>(i,cS)","A<~>(i)","cS()","A<L>(l)","W(d_)","A<W>(L)","L(j)","W(j?,aF)","l?(j?)","~(eg)","L(L)","A<L>()","R<l,dx>(l,h8)","l(l,l)","A<bl<cs>>()","~(cs)","P(hs)","bi()","A<eh>()","0&(j?,aF)","~(dI<L>)","A<bi>(bE)","~(N?,au?,N,j,aF)","0^(N?,au?,N,0^())<j?>","0^(N?,au?,N,0^(1^),1^)<j?,j?>","0^(N?,au?,N,0^(1^,2^),1^,2^)<j?,j?,j?>","0^()(N,au,N,0^())<j?>","0^(1^)(N,au,N,0^(1^))<j?,j?>","0^(1^,2^)(N,au,N,0^(1^,2^))<j?,j?,j?>","am?(N,au,N,j,aF?)","~(N?,au?,N,~())","db(N,au,N,aC,~())","db(N,au,N,aC,~(db))","~(N,au,N,l)","N(N?,au?,N,jB?,I<j?,j?>?)","0^(0^,0^)<aU>","A<dP>(l)","fm(i)","fn(p<j?>)","fA(p<l>)","fa(aU?)","fr(l)","bi(I<l,j?>)","bn?(b4,i,i,i,i)","i(cx)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.a4&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.k1&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.k2&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.hF&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.oB&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.eV&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.eW&&A.Gh(a,b.a),"4;blocked,conflicts,hidden,pending":a=>b=>b instanceof A.oC&&A.Gh(a,b.a)}}
A.K8(v.typeUniverse,JSON.parse('{"bP":"dD","mA":"dD","dS":"dD","Nk":"fJ","B":{"p":["1"],"aE":[],"J":["1"],"L":[],"o":["1"],"b9":["1"]},"m0":{"P":[],"aj":[]},"iG":{"W":[],"aj":[]},"aE":{"L":[]},"dD":{"aE":[],"L":[]},"m_":{"jg":[]},"ts":{"B":["1"],"p":["1"],"aE":[],"J":["1"],"L":[],"o":["1"],"b9":["1"]},"ep":{"ab":[],"aU":[],"av":["aU"]},"iF":{"ab":[],"i":[],"aU":[],"av":["aU"],"aj":[]},"m1":{"ab":[],"aU":[],"av":["aU"],"aj":[]},"dB":{"l":[],"av":["l"],"b9":["@"],"aj":[]},"dV":{"o":["2"]},"ec":{"dV":["1","2"],"o":["2"],"o.E":"2"},"jM":{"ec":["1","2"],"dV":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"jJ":{"K":["2"],"p":["2"],"dV":["1","2"],"J":["2"],"o":["2"]},"bN":{"jJ":["1","2"],"K":["2"],"p":["2"],"dV":["1","2"],"J":["2"],"o":["2"],"K.E":"2","o.E":"2"},"ed":{"U":["3","4"],"I":["3","4"],"U.V":"4","U.K":"3"},"dC":{"ad":[]},"mM":{"ad":[]},"cj":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"J":{"o":["1"]},"Z":{"J":["1"],"o":["1"]},"ct":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"cl":{"o":["2"],"o.E":"2"},"ek":{"cl":["1","2"],"J":["2"],"o":["2"],"o.E":"2"},"X":{"Z":["2"],"J":["2"],"o":["2"],"Z.E":"2","o.E":"2"},"al":{"o":["1"],"o.E":"1"},"it":{"o":["2"],"o.E":"2"},"eG":{"o":["1"],"o.E":"1"},"iq":{"eG":["1"],"J":["1"],"o":["1"],"o.E":"1"},"d9":{"o":["1"],"o.E":"1"},"fp":{"d9":["1"],"J":["1"],"o":["1"],"o.E":"1"},"el":{"J":["1"],"o":["1"],"o.E":"1"},"bF":{"o":["1"],"o.E":"1"},"hg":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"bT":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"il":{"cT":["1","2"],"I":["1","2"]},"fl":{"I":["1","2"]},"aV":{"fl":["1","2"],"I":["1","2"]},"eS":{"o":["1"],"o.E":"1"},"iy":{"fl":["1","2"],"I":["1","2"]},"im":{"cq":["1"],"eE":["1"],"J":["1"],"o":["1"]},"du":{"cq":["1"],"eE":["1"],"J":["1"],"o":["1"]},"j5":{"dc":[],"ad":[]},"m2":{"ad":[]},"nE":{"ad":[]},"ms":{"G":[]},"k4":{"aF":[]},"mV":{"ad":[]},"bB":{"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"T":{"J":["1"],"o":["1"],"o.E":"1"},"aq":{"J":["1"],"o":["1"],"o.E":"1"},"aM":{"J":["R<1,2>"],"o":["R<1,2>"],"o.E":"R<1,2>"},"iI":{"bB":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"iH":{"bB":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"hD":{"mN":[],"eu":[]},"nZ":{"o":["mN"],"o.E":"mN"},"h9":{"eu":[]},"oO":{"o":["eu"],"o.E":"eu"},"fI":{"aE":[],"L":[],"eb":[],"aj":[]},"fJ":{"aE":[],"L":[],"eb":[],"aj":[]},"j0":{"aE":[],"L":[]},"oW":{"eb":[]},"j_":{"aE":[],"BM":[],"L":[],"aj":[]},"fK":{"bQ":["1"],"aE":[],"L":[],"b9":["1"]},"dK":{"K":["ab"],"p":["ab"],"bQ":["ab"],"aE":[],"J":["ab"],"L":[],"b9":["ab"],"o":["ab"]},"bR":{"K":["i"],"p":["i"],"bQ":["i"],"aE":[],"J":["i"],"L":[],"b9":["i"],"o":["i"]},"ml":{"dK":[],"rI":[],"K":["ab"],"p":["ab"],"bQ":["ab"],"aE":[],"J":["ab"],"L":[],"b9":["ab"],"o":["ab"],"aj":[],"K.E":"ab"},"mm":{"dK":[],"rJ":[],"K":["ab"],"p":["ab"],"bQ":["ab"],"aE":[],"J":["ab"],"L":[],"b9":["ab"],"o":["ab"],"aj":[],"K.E":"ab"},"mn":{"bR":[],"tn":[],"K":["i"],"p":["i"],"bQ":["i"],"aE":[],"J":["i"],"L":[],"b9":["i"],"o":["i"],"aj":[],"K.E":"i"},"mo":{"bR":[],"to":[],"K":["i"],"p":["i"],"bQ":["i"],"aE":[],"J":["i"],"L":[],"b9":["i"],"o":["i"],"aj":[],"K.E":"i"},"mp":{"bR":[],"tp":[],"K":["i"],"p":["i"],"bQ":["i"],"aE":[],"J":["i"],"L":[],"b9":["i"],"o":["i"],"aj":[],"K.E":"i"},"j1":{"bR":[],"xr":[],"K":["i"],"p":["i"],"bQ":["i"],"aE":[],"J":["i"],"L":[],"b9":["i"],"o":["i"],"aj":[],"K.E":"i"},"j2":{"bR":[],"xs":[],"K":["i"],"p":["i"],"bQ":["i"],"aE":[],"J":["i"],"L":[],"b9":["i"],"o":["i"],"aj":[],"K.E":"i"},"j3":{"bR":[],"xt":[],"K":["i"],"p":["i"],"bQ":["i"],"aE":[],"J":["i"],"L":[],"b9":["i"],"o":["i"],"aj":[],"K.E":"i"},"ev":{"bR":[],"cS":[],"K":["i"],"p":["i"],"bQ":["i"],"aE":[],"J":["i"],"L":[],"b9":["i"],"o":["i"],"aj":[],"K.E":"i"},"oh":{"ad":[]},"k9":{"dc":[],"ad":[]},"am":{"ad":[]},"u":{"A":["1"]},"dI":{"bA":["1"]},"k8":{"db":[]},"jC":{"ij":["1"]},"hK":{"o":["1"],"o.E":"1"},"b0":{"b5":["1"],"hJ":["1"],"aa":["1"],"aa.T":"1"},"eM":{"dW":["1"],"b1":["1"],"bl":["1"],"b1.T":"1"},"jI":{"bA":["1"]},"jD":{"jI":["1"],"bA":["1"]},"nu":{"G":[]},"j8":{"ad":[]},"eN":{"ij":["1"]},"aI":{"eN":["1"],"ij":["1"]},"an":{"eN":["1"],"ij":["1"]},"jq":{"aa":["1"]},"e0":{"bA":["1"]},"cW":{"jE":["1"],"e0":["1"],"bA":["1"]},"hL":{"e0":["1"],"bA":["1"]},"b5":{"hJ":["1"],"aa":["1"],"aa.T":"1"},"dW":{"b1":["1"],"bl":["1"],"b1.T":"1"},"k5":{"nY":["1"]},"b1":{"bl":["1"],"b1.T":"1"},"hJ":{"aa":["1"]},"hw":{"bl":["1"]},"jN":{"aa":["1"],"aa.T":"1"},"di":{"aa":["1"],"aa.T":"1"},"jX":{"cW":["1"],"jE":["1"],"e0":["1"],"dI":["1"],"bA":["1"]},"jQ":{"aa":["2"]},"hz":{"b1":["2"],"bl":["2"],"b1.T":"2"},"eT":{"jQ":["1","2"],"aa":["2"],"aa.T":"2"},"jO":{"bA":["1"]},"hH":{"b1":["2"],"bl":["2"],"b1.T":"2"},"jH":{"aa":["2"],"aa.T":"2"},"oZ":{"N":[]},"oa":{"N":[]},"oF":{"N":[]},"hQ":{"au":[]},"dg":{"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"dX":{"dg":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"jK":{"dg":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"eR":{"J":["1"],"o":["1"],"o.E":"1"},"jV":{"bB":["1","2"],"U":["1","2"],"I":["1","2"],"U.V":"2","U.K":"1"},"dh":{"cq":["1"],"eE":["1"],"J":["1"],"o":["1"]},"er":{"o":["1"],"o.E":"1"},"K":{"p":["1"],"J":["1"],"o":["1"]},"U":{"I":["1","2"]},"jW":{"J":["2"],"o":["2"],"o.E":"2"},"iP":{"I":["1","2"]},"cT":{"I":["1","2"]},"iL":{"Z":["1"],"J":["1"],"o":["1"],"Z.E":"1","o.E":"1"},"cq":{"eE":["1"],"J":["1"],"o":["1"]},"k3":{"cq":["1"],"eE":["1"],"J":["1"],"o":["1"]},"eO":{"bA":["1"]},"oq":{"U":["l","@"],"I":["l","@"],"U.V":"@","U.K":"l"},"or":{"Z":["l"],"J":["l"],"o":["l"],"Z.E":"l","o.E":"l"},"kK":{"em":[]},"oU":{"aB":["l","p<i>"]},"kL":{"aB":["l","p<i>"],"aB.T":"p<i>"},"ic":{"aB":["p<i>","l"],"aB.T":"l"},"kR":{"aB":["l","p<i>"],"aB.T":"p<i>"},"iJ":{"ad":[]},"m3":{"ad":[]},"m5":{"aB":["j?","l"],"aB.T":"l"},"m4":{"aB":["l","j?"],"aB.T":"j?"},"m8":{"em":[]},"m9":{"aB":["l","p<i>"],"aB.T":"p<i>"},"nK":{"em":[]},"nL":{"aB":["l","p<i>"],"aB.T":"p<i>"},"jv":{"aB":["p<i>","l"],"aB.T":"l"},"Dq":{"av":["Dq"]},"aW":{"av":["aW"]},"ab":{"aU":[],"av":["aU"]},"aC":{"av":["aC"]},"i":{"aU":[],"av":["aU"]},"p":{"J":["1"],"o":["1"]},"aU":{"av":["aU"]},"mN":{"eu":[]},"eE":{"J":["1"],"o":["1"]},"l":{"av":["l"]},"aJ":{"av":["Dq"]},"kM":{"ad":[]},"dc":{"ad":[]},"bz":{"ad":[]},"d7":{"ad":[]},"iA":{"d7":[],"ad":[]},"cU":{"ad":[]},"nD":{"cU":[],"ad":[]},"bk":{"ad":[]},"l7":{"ad":[]},"mv":{"ad":[]},"jn":{"ad":[]},"oi":{"G":[]},"bj":{"G":[]},"lY":{"cU":[],"G":[],"ad":[]},"oP":{"aF":[]},"jf":{"o":["i"],"o.E":"i"},"kf":{"nH":[]},"cd":{"nH":[]},"od":{"nH":[]},"mr":{"G":[]},"tp":{"p":["i"],"J":["i"],"o":["i"]},"cS":{"p":["i"],"J":["i"],"o":["i"]},"xt":{"p":["i"],"J":["i"],"o":["i"]},"tn":{"p":["i"],"J":["i"],"o":["i"]},"xr":{"p":["i"],"J":["i"],"o":["i"]},"to":{"p":["i"],"J":["i"],"o":["i"]},"xs":{"p":["i"],"J":["i"],"o":["i"]},"rI":{"p":["ab"],"J":["ab"],"o":["ab"]},"rJ":{"p":["ab"],"J":["ab"],"o":["ab"]},"a3":{"I":["2","3"]},"h1":{"hM":["1","eE<1>"],"hM.E":"1"},"lQ":{"aB":["p<i>","ck"]},"oI":{"aB":["p<i>","ck"],"aB.T":"ck"},"ji":{"G":[]},"mZ":{"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"mP":{"G":[]},"kS":{"BN":[]},"l_":{"BN":[]},"ds":{"aa":["p<i>"],"aa.T":"p<i>"},"ee":{"G":[]},"nc":{"jr":[]},"ig":{"a3":["l","l","1"],"I":["l","1"],"a3.V":"1","a3.K":"l","a3.C":"l"},"j7":{"Cp":[]},"mC":{"Cp":[]},"dy":{"G":[]},"lN":{"ag":[]},"lL":{"ag":[]},"fv":{"ag":[]},"lJ":{"ag":[]},"fu":{"ag":[]},"fs":{"ag":[]},"h7":{"ag":[]},"fL":{"ag":[]},"ie":{"ag":[]},"lS":{"ag":[]},"fY":{"ag":[]},"fZ":{"ag":[]},"fH":{"ag":[]},"fT":{"ag":[]},"fm":{"ag":[]},"fn":{"ag":[]},"fA":{"ag":[]},"fa":{"ag":[]},"fr":{"ag":[]},"h0":{"ag":[]},"fk":{"ag":[]},"fj":{"ag":[]},"hd":{"ag":[]},"hl":{"ag":[]},"fQ":{"ag":[]},"fh":{"ag":[]},"nm":{"ag":[]},"ni":{"ag":[]},"nq":{"ag":[]},"l5":{"c3":[]},"lc":{"c3":[]},"jx":{"c3":[]},"ft":{"c3":[]},"iK":{"cL":[]},"j4":{"cL":[]},"i8":{"cL":[]},"i9":{"cL":[]},"no":{"c3":[]},"kO":{"c3":[]},"jz":{"G":[]},"ox":{"E6":[]},"ip":{"qZ":[]},"dF":{"G":[]},"eI":{"G":[]},"eH":{"G":[]},"ex":{"G":[]},"fe":{"G":[]},"fO":{"G":[]},"fx":{"G":[]},"cO":{"G":[]},"fW":{"G":[]},"h_":{"G":[]},"eC":{"G":[]},"hh":{"G":[]},"fz":{"G":[]},"h5":{"G":[]},"fG":{"G":[]},"fi":{"G":[]},"ej":{"G":[]},"fV":{"G":[]},"fc":{"G":[]},"kY":{"G":[]},"eX":{"G":[]},"a9":{"d6":[]},"c5":{"d6":[]},"dr":{"d6":[]},"cZ":{"d6":[]},"ho":{"G":[]},"d3":{"G":[]},"bu":{"G":[]},"he":{"G":[]},"eD":{"G":[]},"jk":{"G":[]},"c0":{"G":[]},"cG":{"G":[]},"cK":{"G":[]},"fN":{"G":[]},"fP":{"G":[]},"fo":{"G":[]},"ea":{"G":[]},"ht":{"nW":[]},"mc":{"eJ":[]},"jb":{"G":[]},"jA":{"hn":[]},"eK":{"hn":[]},"my":{"G":[]},"lH":{"cr":[],"av":["cr"]},"hy":{"da":[],"av":["n5"]},"cr":{"av":["cr"]},"n4":{"cr":[],"av":["cr"]},"n5":{"av":["n5"]},"n6":{"av":["n5"]},"n7":{"G":[]},"h3":{"bj":[],"G":[]},"h4":{"av":["n5"]},"da":{"av":["n5"]},"c8":{"G":[]},"wK":{"p":["j?"],"J":["j?"],"o":["j?"]},"nN":{"K":["j?"],"wK":[],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"h6":{"eg":[]},"lV":{"b4":[]},"on":{"jw":[],"bn":[]},"c7":{"U":["l","@"],"I":["l","@"],"U.V":"@","U.K":"l"},"mR":{"K":["c7"],"p":["c7"],"J":["c7"],"o":["c7"],"K.E":"c7"},"de":{"G":[]},"kX":{"b4":[]},"kW":{"jw":[],"bn":[]},"eL":{"b2":["eL"],"b2.E":"eL"},"df":{"Cg":[]},"dT":{"Cf":[]},"hk":{"K":["df"],"p":["df"],"J":["df"],"o":["df"],"K.E":"df"},"ib":{"aa":["1"],"aa.T":"1"},"dA":{"b4":[]},"b6":{"b2":["b6"]},"oo":{"jw":[],"bn":[]},"jR":{"b6":[],"b2":["b6"],"b2.E":"b6"},"jL":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hu":{"b6":[],"b2":["b6"],"b2.E":"b6"},"hP":{"b6":[],"b2":["b6"],"b2.E":"b6"},"h2":{"b4":[]},"oM":{"jw":[],"bn":[]},"ii":{"G":[]},"ei":{"K":["j?"],"p":["j?"],"J":["j?"],"o":["j?"],"K.E":"j?"},"fX":{"G":[]},"dq":{"G":[]},"hq":{"Dy":[]},"oe":{"ki":["L"]},"oK":{"ki":["L"]},"ne":{"bj":[],"G":[]},"cw":{"hf":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"],"K.E":"i"},"hf":{"K":["1"],"p":["1"],"J":["1"],"o":["1"]},"op":{"hf":["i"],"K":["i"],"p":["i"],"J":["i"],"o":["i"]},"hx":{"aa":["1"],"aa.T":"1"},"jP":{"bl":["1"]}}'))
A.K7(v.typeUniverse,JSON.parse('{"iw":1,"nF":1,"hg":1,"kj":2,"im":1,"fK":1,"bA":1,"jq":1,"oR":1,"og":1,"oV":2,"iP":2,"k3":1,"ke":2,"l2":1,"l4":2,"k7":1,"mq":1,"nG":2,"mO":1,"ff":1,"Hp":1,"J6":1,"Je":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",v:"\r\ncontent-type: text/plain; charset=utf-8\r\ncontent-transfer-encoding: binary",W:" is in conflict; resolve it before editing.",D:" must not be greater than the number of characters in the file, ",C:'" is encrypted but no FieldCipher was provided.',Z:'" is not a valid identifier (must start with a letter or underscore and contain only letters, digits, or underscores).',U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",G:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"FTS5 is not available on this SQLite engine.",L:"LocalPocket calls are not allowed inside a transaction; use the Tx handle.",M:"None of the patterns in the exhaustive switch statement the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",P:"None of the patterns in the switch expression the matched input value. See https://github.com/dart-lang/language/issues/3488 for details.",m:"SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN (",f:"Tried to operate on a released prepared statement",y:"UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.ac
return{fM:s("@<@>"),ie:s("Hp<j?>"),bG:s("e9"),om:s("ib<B<j?>>"),hw:s("cC"),lo:s("eb"),fW:s("BM"),jA:s("ie"),fo:s("ig<l>"),iv:s("a1"),eg:s("Dy"),dF:s("BN()"),E:s("cj"),bU:s("c1<j?>"),fw:s("eg"),bP:s("av<@>"),p6:s("eh"),br:s("ij<L>"),n8:s("bg"),M:s("du<l>"),lp:s("lm"),O:s("J<@>"),C:s("ad"),fq:s("c3"),mA:s("G"),eZ:s("lz"),d9:s("aX"),A:s("bi"),k4:s("iu"),f6:s("cF"),pk:s("rI"),kI:s("rJ"),Y:s("bj"),gY:s("Ng"),nW:s("A<L>"),fr:s("A<dH>"),mj:s("A<W>"),g7:s("A<@>"),fP:s("A<d_?>"),n1:s("A<j?>(nW,hm)"),jN:s("A<hj?>"),co:s("dx"),w:s("cH"),cF:s("dA"),m6:s("tn"),bW:s("to"),jx:s("tp"),nZ:s("iE<@>"),e7:s("o<@>"),gi:s("B<a1>"),aw:s("B<c1<@>>"),oS:s("B<l9>"),i5:s("B<ck>"),mK:s("B<aX>"),kB:s("B<lK>"),iw:s("B<A<~>>"),mr:s("B<dz>"),kG:s("B<L>"),bi:s("B<p<I<l,j?>>>"),h2:s("B<p<j>>"),ae:s("B<p<eA>>"),dO:s("B<p<j?>>"),ic:s("B<I<l,j>>"),d:s("B<I<l,j?>>"),e8:s("B<mj>"),i7:s("B<ew>"),hf:s("B<j>"),ox:s("B<ey>"),fi:s("B<cm>"),my:s("B<cn>"),k:s("B<d6>"),eK:s("B<cL>"),k1:s("B<fR>"),g2:s("B<jd>"),bo:s("B<je>"),cM:s("B<eA>"),gc:s("B<mJ>"),eb:s("B<aS>"),fU:s("B<+controller,sync(dI<cs>,P)>"),lw:s("B<+controller,sync(dI<~>,P)>"),kC:s("B<+(dN,l)>"),jO:s("B<+(l,I<l,j?>)>"),l5:s("B<+(l,j)>"),fj:s("B<+(l,aX?)>"),iE:s("B<+(l,j?)>"),aY:s("B<+(hr,j?,j?,aF?)>"),g1:s("B<cM>"),cP:s("B<mX>"),kj:s("B<cN>"),lE:s("B<h6>"),c0:s("B<c9>"),dw:s("B<bl<@>>"),s:s("B<l>"),en:s("B<ha>"),bs:s("B<cS>"),fC:s("B<b_>"),az:s("B<hq>"),i4:s("B<hr>"),fV:s("B<hs>"),pg:s("B<bp>"),dg:s("B<cx>"),p8:s("B<ow>"),mc:s("B<hG>"),gy:s("B<hI>"),gk:s("B<ab>"),dG:s("B<@>"),t:s("B<i>"),fQ:s("B<am?>"),eU:s("B<I<l,j?>?>"),c:s("B<j?>"),mf:s("B<l?>"),iy:s("b9<@>"),T:s("iG"),m:s("L"),bJ:s("bq"),g:s("bP"),dX:s("bQ<@>"),aq:s("aE"),fZ:s("m6"),kk:s("er<eL>"),p3:s("er<b6>"),hI:s("es<@>"),ba:s("p<bg>"),ck:s("p<bi>"),ip:s("p<L>"),ew:s("p<I<l,j>>"),J:s("p<I<l,j?>>"),eT:s("p<ew>"),hg:s("p<ey>"),a6:s("p<cn>"),jX:s("p<jd>"),kR:s("p<cM>"),fE:s("p<cN>"),i:s("p<l>"),bR:s("p<ha>"),j:s("p<@>"),L:s("p<i>"),oz:s("p<I<l,j?>?>"),kS:s("p<j?>"),jD:s("iM"),ia:s("R<l,dx>"),af:s("R<l,l>"),I:s("R<l,@>"),eB:s("R<l,j?>"),a3:s("iO<@,@>"),cy:s("I<l,cP>"),dV:s("I<l,i>"),f:s("I<@,@>"),G:s("I<l,j?>"),d2:s("I<j?,j?>"),iZ:s("X<l,@>"),r:s("dH"),a:s("fI"),dQ:s("dK"),aj:s("bR"),Z:s("ev"),P:s("W"),K:s("j"),k5:s("cm"),dZ:s("cn"),i0:s("co"),jS:s("d6"),ot:s("mH"),gq:s("fR"),e:s("b3"),b0:s("d7"),lZ:s("Nm"),oZ:s("aS"),aK:s("+()"),ja:s("+(L,ik)"),hP:s("+(I<l,cP>,I<l,I<l,j?>>)"),cU:s("+(dN,l)"),mk:s("+(P,L)"),kO:s("+basicSupport,supportsReadWriteUnsafe(P,P)"),mt:s("+(L?,L)"),po:s("+(j?,i)"),g0:s("+(I<l,j?>?,cP?,cn?)"),kA:s("+blocked,conflicts,hidden,pending(i,i,i,i)"),lu:s("mN"),Q:s("cM"),V:s("ag"),hF:s("bT<l>"),cu:s("h1<@>"),aJ:s("eE<l>"),g_:s("h2"),hq:s("cr"),ol:s("da"),gE:s("n8"),l:s("aF"),ls:s("J6<j?>"),nv:s("na"),h3:s("h8"),ha:s("bl<cs>"),dz:s("bl<@>"),ey:s("bl<~>"),bv:s("nb"),ku:s("aa<p<i>>"),lI:s("dP"),hL:s("jr"),N:s("l"),f_:s("ha"),k6:s("js"),o8:s("Cp"),n6:s("ca"),mv:s("bm"),nw:s("cP"),em:s("hb"),hU:s("db"),q:s("nv"),dH:s("aj"),do:s("dc"),nL:s("Je<j?>"),hM:s("xr"),mC:s("xs"),oR:s("cw"),nn:s("xt"),p:s("cS"),cx:s("dS"),ph:s("cT<l,l>"),eo:s("cU"),jJ:s("nH"),e6:s("b4"),j2:s("jw"),n:s("hj"),fA:s("b_"),gx:s("al<cB>"),mz:s("al<aY>"),mE:s("al<dR>"),v:s("bF<l>"),u:s("eJ"),bp:s("eK"),be:s("nW"),ec:s("hn"),iq:s("aI<cS>"),jk:s("aI<@>"),ho:s("aI<i>"),h:s("aI<~>"),oW:s("eO<@,@>"),R:s("eP<L>"),d4:s("hx<L>"),mS:s("oj"),nI:s("u<d_>"),a7:s("u<L>"),hl:s("u<0&>"),os:s("u<l>"),jz:s("u<cS>"),g5:s("u<P>"),_:s("u<@>"),hy:s("u<i>"),jQ:s("u<i?>"),D:s("u<~>"),nf:s("bp"),mp:s("dX<j?,j?>"),mB:s("hC"),k8:s("di<L>"),fb:s("di<p<i>>"),mI:s("oL<ck>"),jy:s("e1<cs,~()>"),ag:s("e1<~,P()>"),lU:s("e1<~,~()>"),hT:s("cy<L>"),lj:s("cy<p<i>>"),aP:s("an<d_>"),h1:s("an<L>"),ex:s("an<P>"),F:s("an<~>"),g8:s("oS"),y:s("P"),W:s("ab"),z:s("@"),mq:s("@(j)"),ng:s("@(j,aF)"),S:s("i"),ma:s("bg?"),gK:s("A<W>?"),b3:s("d_?"),B:s("L?"),bE:s("p<c1<@>>?"),lH:s("p<@>?"),b:s("I<l,j?>?"),nh:s("dH?"),X:s("j?"),ad:s("E6?"),dY:s("cn?"),lY:s("jc?"),jB:s("cM?"),x:s("l?"),f8:s("cP?"),a_:s("cw?"),he:s("hj?"),dd:s("bp?"),o9:s("P?"),dA:s("ab?"),U:s("i?"),jh:s("aU?"),o:s("aU"),H:s("~"),cj:s("~()"),i6:s("~(j)"),b9:s("~(j,aF)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.cf=J.lZ.prototype
B.b=J.B.prototype
B.c=J.iF.prototype
B.x=J.ep.prototype
B.a=J.dB.prototype
B.cg=J.bP.prototype
B.ch=J.aE.prototype
B.az=A.j_.prototype
B.cV=A.j1.prototype
B.y=A.j2.prototype
B.f=A.ev.prototype
B.b9=J.mA.prototype
B.aK=J.dS.prototype
B.ap=new A.dq("Operation was cancelled")
B.a5=new A.i7(0,"visible")
B.aN=new A.i7(1,"hidden")
B.bs=new A.kH(1)
B.e3=new A.kH(-1)
B.a6=new A.e9(0,"applied")
B.a7=new A.e9(1,"quarantined")
B.bt=new A.e9(2,"conflict")
B.a8=new A.e9(3,"skipped")
B.bu=new A.kL(127)
B.a9=new A.kP(0,"changed")
B.aO=new A.kP(1,"deleted")
B.bw=new A.ic(!1)
B.aq=new A.kQ(B.bw)
B.bx=new A.ic(!0)
B.bv=new A.kQ(B.bx)
B.c_=new A.jN(A.ac("jN<p<i>>"))
B.by=new A.ds(B.c_)
B.bz=new A.iC(A.MI(),A.ac("iC<i>"))
B.bA=new A.kO()
B.ar=new A.kR()
B.bB=new A.l0()
B.bC=new A.l3()
B.F={}
B.Z=new A.aV(B.F,[],A.ac("aV<l,j>"))
B.ea=new A.v_(0,"conflict")
B.e4=new A.qq()
B.aP=new A.qW()
B.bD=new A.lq(A.ac("lq<0&>"))
B.t=new A.lp()
B.aQ=new A.lt(A.ac("lt<0&>"))
B.aR=new A.lu()
B.P=new A.lu()
B.bE=new A.lR()
B.bF=new A.lY()
B.aS=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.bG=function() {
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
B.bL=function(getTagFallback) {
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
B.bH=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.bK=function(hooks) {
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
B.bJ=function(hooks) {
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
B.bI=function(hooks) {
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

B.h=new A.tu()
B.bM=new A.uu()
B.bN=new A.iM()
B.k=new A.fL()
B.bO=new A.mv()
B.bP=new A.vG()
B.bQ=new A.mG()
B.d=new A.wD()
B.bR=new A.n9()
B.bS=new A.ng()
B.bT=new A.nh()
B.bU=new A.nj()
B.bV=new A.np()
B.bW=new A.nr()
B.n=new A.nK()
B.e=new A.nL()
B.bX=new A.nM()
B.bY=new A.nO()
B.bZ=new A.y4()
B.u=new A.yN()
B.aa=new A.yY()
B.as=new A.zv()
B.aU=new A.eX()
B.i=new A.oF()
B.o=new A.oI()
B.Q=new A.oP()
B.ab=new A.dt(0,"create")
B.A=new A.dt(1,"update")
B.c0=new A.dt(2,"archive")
B.c1=new A.dt(3,"restore")
B.aV=new A.dt(4,"purge")
B.c2=new A.dt(5,"hide")
B.H=new A.ih(0,"local")
B.at=new A.ih(1,"remote")
B.ac=new A.ih(2,"resolution")
B.c3=new A.l8(3,"ignore")
B.R=new A.l8(4,"replace")
B.p=new A.ls(0,"normal")
B.aW=new A.ls(1,"full")
B.D=new A.aC(0)
B.au=new A.aC(1e6)
B.aX=new A.aC(16e3)
B.e5=new A.aC(18e8)
B.c4=new A.aC(2e5)
B.aY=new A.aC(3e5)
B.ad=new A.aC(3e7)
B.av=new A.aC(3e8)
B.ae=new A.aC(5e5)
B.e6=new A.aC(5e6)
B.e7=new A.aC(6048e8)
B.e8=new A.aC(7776e9)
B.e9=new A.aC(864e8)
B.aw=new A.c4(0,"text")
B.S=new A.c4(1,"int")
B.T=new A.c4(2,"real")
B.B=new A.c4(3,"bool")
B.U=new A.c4(4,"date")
B.I=new A.c4(5,"enumValue")
B.V=new A.c4(6,"json")
B.W=new A.c4(7,"jsonList")
B.J=new A.c4(8,"ref")
B.c5=new A.iu(!1)
B.ax=new A.dw("x",1,"opfsExternalLocks")
B.aZ=new A.dw("y",2,"opfsExternalLocksWorkaround")
B.b_=new A.fw("/database",0,"database")
B.b0=new A.fw("/database-journal",1,"journal")
B.cb=new A.bj("AES-256-GCM fieldCipher key must be 32 bytes.",null,null)
B.cc=new A.bj("fieldCipher envelope must be a map.",null,null)
B.ay=new A.aV(B.F,[],A.ac("aV<l,l>"))
B.cd=new A.en(B.ay)
B.b1=new A.iB(0,"live")
B.ci=new A.m4(null)
B.cj=new A.m5(null)
B.ck=new A.d1(0,"textExpected")
B.cl=new A.d1(1,"intExpected")
B.cm=new A.d1(2,"numberExpected")
B.cn=new A.d1(3,"boolExpected")
B.co=new A.d1(4,"jsonExpected")
B.cp=new A.d1(5,"jsonListExpected")
B.cq=new A.d1(6,"enumValueRejected")
B.cr=new A.m9(255)
B.af=new A.es(B.bD,A.ac("es<l>"))
B.cs=s(["attempt_count","next_retry_at","last_error"],t.s)
B.b2=s([13,10],t.t)
B.aD=new A.cv(0,"unknown")
B.aE=new A.cv(1,"integer")
B.aF=new A.cv(2,"bigInt")
B.aG=new A.cv(3,"float")
B.aH=new A.cv(4,"text")
B.aI=new A.cv(5,"blob")
B.aJ=new A.cv(6,"$null")
B.bn=new A.cv(7,"boolean")
B.b3=s([B.aD,B.aE,B.aF,B.aG,B.aH,B.aI,B.aJ,B.bn],A.ac("B<cv>"))
B.ct=s([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],t.t)
B.cu=s([B.a5,B.aN],A.ac("B<i7>"))
B.bc=new A.aY(0,"eq")
B.d2=new A.aY(1,"neq")
B.d6=new A.aY(2,"gt")
B.d7=new A.aY(3,"gte")
B.d8=new A.aY(4,"lt")
B.d9=new A.aY(5,"lte")
B.da=new A.aY(6,"inValues")
B.db=new A.aY(7,"between")
B.dc=new A.aY(8,"startsWith")
B.dd=new A.aY(9,"endsWith")
B.d3=new A.aY(10,"contains")
B.d4=new A.aY(11,"isNull")
B.d5=new A.aY(12,"isNotNull")
B.cv=s([B.bc,B.d2,B.d6,B.d7,B.d8,B.d9,B.da,B.db,B.dc,B.dd,B.d3,B.d4,B.d5],A.ac("B<aY>"))
B.c9=new A.iv(0,"database")
B.ca=new A.iv(1,"journal")
B.b4=s([B.c9,B.ca],A.ac("B<iv>"))
B.z=new A.cQ(0,"clean")
B.G=new A.cQ(1,"dirty")
B.bk=new A.cQ(2,"inFlight")
B.a4=new A.cQ(3,"conflict")
B.ao=new A.cQ(4,"error")
B.dv=new A.cQ(5,"quarantine")
B.dw=new A.cQ(6,"blocked")
B.cw=s([B.z,B.G,B.bk,B.a4,B.ao,B.dv,B.dw],A.ac("B<cQ>"))
B.X=s(["store","record_id","remote_updated","last_seen_at","base_updated","base_hash","base_json","sync_state","dirty_fields","local_rev","access_state","op_id","attempt_count","next_retry_at","last_error","schema_ver"],t.s)
B.ag=s([2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],t.t)
B.cx=s([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],t.t)
B.ce=new A.iB(1,"notArchived")
B.cy=s([B.b1,B.ce],A.ac("B<iB>"))
B.cz=s(["CREATE TABLE IF NOT EXISTS lp_meta (\n  k TEXT PRIMARY KEY, v TEXT NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_migrations (\n  version INTEGER PRIMARY KEY, name TEXT NOT NULL,\n  applied_at INTEGER NOT NULL, duration_ms INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_stores (\n  store TEXT PRIMARY KEY,\n  table_name TEXT NOT NULL,\n  schema_ver INTEGER NOT NULL,\n  definition_json TEXT NOT NULL,\n  created_at INTEGER NOT NULL\n)"],t.s)
B.b7=new A.j6(0,"fileUpload")
B.b8=new A.j6(1,"fileRemove")
B.cA=s([B.b7,B.b8],A.ac("B<j6>"))
B.c8=new A.dw("s",0,"opfsShared")
B.c6=new A.dw("i",3,"indexedDb")
B.c7=new A.dw("m",4,"inMemory")
B.cB=s([B.c8,B.ax,B.aZ,B.c6,B.c7],A.ac("B<dw>"))
B.ah=s([1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],t.t)
B.bo=new A.cB(0,"sum")
B.bp=new A.cB(1,"avg")
B.bq=new A.cB(2,"min")
B.br=new A.cB(3,"max")
B.cC=s([B.bo,B.bp,B.bq,B.br],A.ac("B<cB>"))
B.cD=s([B.aw,B.S,B.T,B.B,B.U,B.I,B.V,B.W,B.J],A.ac("B<c4>"))
B.l=s([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],t.t)
B.ai=s([3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],t.t)
B.Y=s(["store","record_id","kind","payload_json","base_updated","base_hash","dirty_fields","op_id","created_at","updated_at","depends_on_op"],t.s)
B.cE=s(["base_updated","base_hash","base_json"],t.s)
B.v=new A.fM(0,"upsert")
B.L=new A.fM(1,"archive")
B.a1=new A.fM(2,"restore")
B.cF=s([B.v,B.L,B.a1],A.ac("B<fM>"))
B.cG=s([],A.ac("B<dx>"))
B.b5=s([],t.d)
B.cI=s([],t.my)
B.cJ=s([],t.kj)
B.q=s([],t.s)
B.cH=s([],t.t)
B.aj=s([],t.dG)
B.m=s([],t.c)
B.cK=s(["*"],t.s)
B.cL=s([B.b_,B.b0],A.ac("B<fw>"))
B.cM=s(["id","updated"],t.s)
B.cN=s([43,95,45,46,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],t.t)
B.bf=new A.dN(0,"opfs")
B.bg=new A.dN(1,"indexedDb")
B.dn=new A.dN(2,"inMemory")
B.cO=s([B.bf,B.bg,B.dn],A.ac("B<dN>"))
B.bl=new A.dR(0,"normal")
B.bm=new A.dR(1,"full")
B.cP=s([B.bl,B.bm],A.ac("B<dR>"))
B.ak=s([1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],t.t)
B.cQ=s(["CREATE TABLE IF NOT EXISTS lp_sync_row (\n  store         TEXT NOT NULL,\n  record_id     TEXT NOT NULL,\n  remote_updated TEXT,\n  last_seen_at  INTEGER,\n  base_updated  TEXT,\n  base_hash     TEXT,\n  base_json     TEXT,\n  sync_state    TEXT NOT NULL DEFAULT 'clean',\n  dirty_fields  TEXT,\n  local_rev     INTEGER NOT NULL DEFAULT 0,\n  access_state  TEXT NOT NULL DEFAULT 'visible',\n  op_id         TEXT,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error    TEXT,\n  schema_ver    INTEGER NOT NULL DEFAULT 1,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_syncrow_dirty ON lp_sync_row (next_retry_at) WHERE sync_state IN ('dirty','in_flight','conflict')","CREATE INDEX IF NOT EXISTS ix_syncrow_attention ON lp_sync_row (store, sync_state) WHERE sync_state IN ('conflict','error','quarantine','blocked')","CREATE INDEX IF NOT EXISTS ix_syncrow_hidden ON lp_sync_row (store, record_id) WHERE access_state = 'hidden'","CREATE TABLE IF NOT EXISTS lp_outbox (\n  store      TEXT NOT NULL,\n  record_id  TEXT NOT NULL,\n  kind       TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  base_updated TEXT,\n  base_hash  TEXT NOT NULL,\n  dirty_fields TEXT NOT NULL DEFAULT '[]',\n  op_id      TEXT NOT NULL UNIQUE,\n  created_at INTEGER NOT NULL,\n  updated_at INTEGER NOT NULL,\n  depends_on_op TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE INDEX IF NOT EXISTS ix_outbox_drain ON lp_outbox (created_at)","CREATE TABLE IF NOT EXISTS lp_op_queue (\n  seq         INTEGER PRIMARY KEY AUTOINCREMENT,\n  op_id       TEXT NOT NULL UNIQUE,\n  store       TEXT NOT NULL,\n  record_id   TEXT NOT NULL,\n  kind        TEXT NOT NULL,\n  payload_json TEXT NOT NULL,\n  state       TEXT NOT NULL DEFAULT 'pending',\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  last_error  TEXT,\n  depends_on_op TEXT,\n  created_at  INTEGER NOT NULL\n)","CREATE INDEX IF NOT EXISTS ix_opq_drain ON lp_op_queue (next_retry_at, seq) WHERE state='pending'","CREATE TABLE IF NOT EXISTS lp_conflicts (\n  store TEXT NOT NULL, record_id TEXT NOT NULL,\n  base_json TEXT NOT NULL, local_json TEXT NOT NULL, remote_json TEXT NOT NULL,\n  dirty_local TEXT NOT NULL, dirty_remote TEXT NOT NULL,\n  detected_at INTEGER NOT NULL,\n  resolved_json TEXT,\n  PRIMARY KEY (store, record_id)\n)","CREATE TABLE IF NOT EXISTS lp_dead_letter (\n  seq INTEGER PRIMARY KEY AUTOINCREMENT,\n  at INTEGER NOT NULL, kind TEXT NOT NULL,\n  store TEXT, record_id TEXT,\n  error TEXT NOT NULL, payload_json TEXT\n)","CREATE TABLE IF NOT EXISTS lp_sync_state (\n  scope TEXT NOT NULL,\n  store TEXT NOT NULL,\n  cursor_updated TEXT, cursor_id TEXT,\n  sweep_bucket INTEGER NOT NULL DEFAULT -1,\n  sweep_at INTEGER, last_pull_at INTEGER, last_push_at INTEGER,\n  PRIMARY KEY (scope, store)\n)","CREATE TABLE IF NOT EXISTS lp_blobs (\n  hash TEXT PRIMARY KEY,\n  size INTEGER NOT NULL,\n  state TEXT NOT NULL DEFAULT 'local',\n  refcount INTEGER NOT NULL DEFAULT 0,\n  last_access INTEGER NOT NULL DEFAULT 0,\n  created_at INTEGER NOT NULL\n)","CREATE TABLE IF NOT EXISTS lp_file_refs (\n  ref_id   TEXT PRIMARY KEY,\n  store    TEXT NOT NULL,\n  record_id TEXT NOT NULL,\n  field    TEXT NOT NULL,\n  hash     TEXT NOT NULL,\n  remote_name TEXT,\n  state    TEXT NOT NULL DEFAULT 'pending_upload',\n  next_retry_at INTEGER NOT NULL DEFAULT 0,\n  attempt_count INTEGER NOT NULL DEFAULT 0,\n  last_error TEXT,\n  UNIQUE (store, record_id, field, hash)\n)","CREATE INDEX IF NOT EXISTS ix_filerefs_work ON lp_file_refs (state, next_retry_at)","CREATE INDEX IF NOT EXISTS ix_filerefs_record ON lp_file_refs (store, record_id)"],t.s)
B.cR=new A.iy([16,10,24,12,32,14],A.ac("iy<i,i>"))
B.cY={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.w=new A.m8()
B.r=new A.kK()
B.cS=new A.aV(B.cY,[B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.w,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.r,B.n,B.n],A.ac("aV<l,em>"))
B.al=new A.aV(B.F,[],A.ac("aV<l,i>"))
B.j=new A.aV(B.F,[],A.ac("aV<l,j?>"))
B.am=new A.aV(B.F,[],A.ac("aV<i,I<l,j?>(I<l,j?>)>"))
B.cU=new A.mf(11,"simpleSuccessResponse",A.ac("mf<L>"))
B.a_=new A.dJ(0,"createOrUpdate")
B.a0=new A.dJ(1,"createOrUpdateMerge")
B.b6=new A.dJ(2,"create")
B.K=new A.dJ(3,"update")
B.C=new A.dJ(4,"archive")
B.E=new A.dJ(5,"restore")
B.eb=new A.ve(2,"readWriteCreate")
B.d_=new A.cm("id",!1)
B.d0=new A.co(B.b5,null,null,!1,!1)
B.ba=new A.mB(0,"native")
B.aA=new A.mB(1,"web")
B.M=new A.b3(0,1,0,0,0,!1)
B.an=new A.b3(0,0,0,0,0,!0)
B.a2=new A.b3(0,0,0,0,0,!1)
B.d1=new A.b3(0,0,0,1,0,!1)
B.bb=new A.b3(0,0,1,0,0,!1)
B.a3=new A.b3(1,0,0,0,0,!1)
B.de=new A.a4("archived",!0)
B.df=new A.a4("0",B.m)
B.aB=new A.k1(!1,!1)
B.dg=new A.eV(0,0,0)
B.dh=new A.eV(null,null,null)
B.cX={hidden:0}
B.di=new A.du(B.cX,1,t.M)
B.cW={id:0,archived:1,hidden:2,extra:3}
B.bd=new A.du(B.cW,4,t.M)
B.cZ={open:0,contract_request:1,contract_event:2}
B.dj=new A.du(B.cZ,3,t.M)
B.be=new A.du(B.F,0,t.M)
B.dk=new A.jm(0,"insert")
B.dl=new A.jm(1,"update")
B.dm=new A.jm(2,"delete")
B.dp=new A.js(-1,null)
B.dq=new A.jt("_clientToken")
B.N=new A.ca(0,"closed")
B.dr=new A.ca(1,"opening")
B.bh=new A.ca(2,"offline")
B.aC=new A.ca(3,"authRequired")
B.bi=new A.ca(4,"idle")
B.ds=new A.ca(5,"pulling")
B.dt=new A.ca(6,"pushing")
B.du=new A.ca(7,"backoff")
B.bj=new A.ca(8,"paused")
B.O=new A.bm(B.al,B.al,0,0,0,0,!1)
B.dx=new A.nn(B.N,0,0,0,0,null,null,null)
B.dy=A.bK("kF")
B.dz=A.bK("eb")
B.dA=A.bK("BM")
B.dB=A.bK("rI")
B.dC=A.bK("rJ")
B.dD=A.bK("tn")
B.dE=A.bK("to")
B.dF=A.bK("tp")
B.dG=A.bK("L")
B.dH=A.bK("j")
B.dI=A.bK("jj")
B.dJ=A.bK("xr")
B.dK=A.bK("xs")
B.dL=A.bK("xt")
B.dM=A.bK("cS")
B.aL=new A.jv(!1)
B.dN=new A.jv(!0)
B.dO=new A.de(14)
B.dP=new A.de(522)
B.dQ=new A.de(778)
B.dR=new A.Al(B.i,A.LL())
B.dS=new A.Am(B.i,A.LM())
B.dT=new A.An(B.i,A.LN())
B.dU=new A.Ao(B.i,A.LO())
B.dV=new A.p_(B.i,A.LP())
B.dW=new A.Ap(B.i,A.LQ())
B.dX=new A.Aq(B.i,A.LR())
B.dY=new A.Ar(B.i,A.LS())
B.dZ=new A.As(B.i,A.LT())
B.e_=new A.Au(B.i,A.LV())
B.e0=new A.Av(B.i,A.LW())
B.e1=new A.At(B.i,A.LU())
B.e2=new A.p0(B.i,A.LX())
B.cT=new A.aV(B.F,[],A.ac("aV<j?,j?>"))
B.aM=new A.p1(B.i,B.cT)})();(function staticFields(){$.zx=null
$.f0=A.k([],t.hf)
$.Lh=null
$.E9=null
$.vO=0
$.mE=A.L6()
$.Dw=null
$.Dv=null
$.Ga=null
$.FU=null
$.Gk=null
$.B7=null
$.Bk=null
$.D0=null
$.zK=A.k([],A.ac("B<p<j>?>"))
$.hU=null
$.kl=null
$.km=null
$.CQ=!1
$.C=B.i
$.zO=null
$.EE=null
$.EF=null
$.EG=null
$.EH=null
$.Cw=A.yq("_lastQuoRemDigits")
$.Cx=A.yq("_lastQuoRemUsed")
$.jG=A.yq("_lastRemUsed")
$.Cy=A.yq("_lastRem_nsh")
$.Ev=""
$.Ew=null
$.fS=function(){var s=t.N
return A.t(s,s)}()
$.Fn=null
$.AF=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"Nc","GB",()=>A.Bc("_$dart_dartClosure"))
s($,"Nb","f7",()=>A.Bc("_$dart_dartClosure_dartJSInterop"))
s($,"NQ","pj",()=>A.v7(0))
s($,"Od","Ha",()=>B.i.aV(new A.Bn(),A.ac("A<~>")))
s($,"O7","H7",()=>A.k([new J.m_()],A.ac("B<jg>")))
s($,"Nu","GF",()=>A.dd(A.xp({
toString:function(){return"$receiver$"}})))
s($,"Nv","GG",()=>A.dd(A.xp({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Nw","GH",()=>A.dd(A.xp(null)))
s($,"Nx","GI",()=>A.dd(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"NA","GL",()=>A.dd(A.xp(void 0)))
s($,"NB","GM",()=>A.dd(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Nz","GK",()=>A.dd(A.Es(null)))
s($,"Ny","GJ",()=>A.dd(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"ND","GO",()=>A.dd(A.Es(void 0)))
s($,"NC","GN",()=>A.dd(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"NG","Db",()=>A.Jo())
s($,"Ni","e7",()=>$.Ha())
s($,"Nh","GC",()=>A.JH(!1,B.i,t.y))
s($,"NW","GY",()=>A.v7(4096))
s($,"NU","GW",()=>new A.Ai().$0())
s($,"NV","GX",()=>new A.Ah().$0())
s($,"NI","Dc",()=>A.Iy(A.b7(A.k([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"NH","GP",()=>A.v7(0))
s($,"NP","ci",()=>A.jF(0))
s($,"NN","f8",()=>A.jF(1))
s($,"NO","GS",()=>A.jF(2))
s($,"NL","De",()=>$.f8().bA(0))
s($,"NJ","Dd",()=>A.jF(1e4))
r($,"NM","GR",()=>A.af("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1))
s($,"NK","GQ",()=>A.v7(8))
s($,"NR","GT",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"NS","GU",()=>A.af("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"NT","GV",()=>typeof URLSearchParams=="function")
s($,"NZ","f9",()=>A.kt(B.dH))
s($,"Nn","ky",()=>{A.II()
return $.vO})
s($,"O_","H0",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"Nl","BG",()=>{var q=new A.zw(A.Ix(8))
q.oE()
return q})
s($,"Nd","kx",()=>A.Hu(B.cV.gaa(A.Iz(A.b7(A.k([1],t.t)))),0,null).getInt8(0)===1?B.P:B.aR)
s($,"N4","D6",()=>A.af("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
s($,"O1","BH",()=>A.af("\\r\\n|\\r|\\n",!0,!1))
s($,"Nj","GD",()=>A.Ee())
s($,"NX","Df",()=>A.af("^[\\x00-\\x7F]+$",!0,!1))
s($,"NY","GZ",()=>A.af('["\\x00-\\x1F\\x7F]',!0,!1))
s($,"Of","Hb",()=>A.af('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
s($,"O0","H1",()=>A.af("(?:\\r\\n)?[ \\t]+",!0,!1))
s($,"O4","H4",()=>A.af('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
s($,"O3","H3",()=>A.af("\\\\(.)",!0,!1))
s($,"Oc","H9",()=>A.af('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
s($,"Og","Hc",()=>A.af("(?:"+$.H1().a+")*",!0,!1))
s($,"N8","D7",()=>A.af("^[0-9a-f]{64}$",!0,!1))
s($,"O6","H6",()=>A.Ef())
s($,"Oe","pk",()=>A.af("^[a-z0-9]{15}$",!0,!1))
r($,"KQ","H_",()=>A.HM().a)
s($,"Ne","D8",()=>A.af("^[\\p{L}_][\\p{L}\\p{N}_]*$",!0,!0))
s($,"N9","Gz",()=>A.BS("declaredNames",t.aJ))
s($,"Na","GA",()=>A.BS("fieldByName",A.ac("I<l,aX>")))
s($,"O2","H2",()=>A.af("^(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})Z$",!0,!1))
s($,"Nt","kA",()=>new A.j())
s($,"O9","i6",()=>new A.qz($.D9()))
s($,"Nq","GE",()=>new A.vI(A.af("/",!0,!1),A.af("[^/]$",!0,!1),A.af("^/",!0,!1)))
s($,"Ns","pi",()=>new A.xQ(A.af("[/\\\\]",!0,!1),A.af("[^/\\\\]$",!0,!1),A.af("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),A.af("^[/\\\\](?![/\\\\])",!0,!1)))
s($,"Nr","kz",()=>new A.xw(A.af("/",!0,!1),A.af("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),A.af("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),A.af("^/",!0,!1)))
s($,"Np","D9",()=>A.J9())
s($,"N7","Gy",()=>$.f8().bB(0,63).bA(0))
s($,"N6","Gx",()=>{var q=$.f8()
return q.bB(0,63).fP(0,q)})
s($,"N5","ph",()=>A.Ef())
s($,"NE","Da",()=>A.BS(null,t.S))
s($,"O8","H8",()=>A.Il(A.k([A.Co("files"),A.Co("blocks")],t.s)))
s($,"Nf","BF",()=>{var q,p,o=A.t(t.N,A.ac("fw"))
for(q=0;q<2;++q){p=B.cL[q]
o.j(0,p.c,p)}return o})
s($,"O5","H5",()=>A.Ee())
r($,"NF","kB",()=>{var q="navigator"
return A.Ic(A.Id(A.CZ(A.Gp(),q),A.Co("locks")))?A.CZ(A.CZ(A.Gp(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.fJ,ArrayBuffer:A.fI,ArrayBufferView:A.j0,DataView:A.j_,Float32Array:A.ml,Float64Array:A.mm,Int16Array:A.mn,Int32Array:A.mo,Int8Array:A.mp,Uint16Array:A.j1,Uint32Array:A.j2,Uint8ClampedArray:A.j3,CanvasPixelArray:A.j3,Uint8Array:A.ev})
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
var s=A.MG
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=localpocket_worker.js.map
